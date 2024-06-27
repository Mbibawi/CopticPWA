let sequence: string[] = [];
/**
 * This is the function that displayes the elements of the array that we want to edit
 * @param {HTMLSelectElement}  select - the selection element from which we selet the options
 * @param {boolean} clear - whether or not we should remove all the children of the containerDiv content
 * @param {string} arrayNam - the name of the array where the text of the prayer will be searched for
  *@param {string} tableTitle - the title of the table that we want to retrieve in order to edit
  @param {string[][][]} tablesArray - the array where the table we want to edit will be looked for
 * @param { {includes: boolean}|{equal:boolean } |{startsWith:boolean}} operator - This is the crieteria by which we will be looking for the table by the provides args.tableTitle. Its default value is {includes:true}
 */
function startEditingMode(args: {
  select?: HTMLSelectElement;
  clear?: boolean;
  arrayName?: string;
  tableTitle?: string;
  tablesArray?: string[][][];
  languages?: string[];
  operator?:
  | { includes: boolean }
  | { equal: boolean }
  | { startsWith: boolean };
}) {
  if (args.clear !== false) args.clear = true;
  containerDiv.dataset.specificTables = "false";

  if (args.select) {
    //We deal with all the cases where a select element is passed as argument to the function. We exclude the case where arrayName is provided as an argument and the case where the tableTitle is provided.

    args.arrayName = args.select.selectedOptions[0].innerText;

    if (args.arrayName === args.select.options[0].innerText)
      return; //entries[0] === 'Choose From the List'
    else if (args.arrayName === args.select.options[1].innerText) addNewTable();
    else if (args.arrayName === args.select.options[2].innerText)
      return runFunction();
    //under development : the user will provide a function and the function will be called when he press enter
    else if (args.arrayName === args.select.options[3].innerText)
      return editDayReadings(); //Editing all the readings of ta give Coptic Date
    else {
      args.arrayName === 'PrayersArray' ? args.arrayName = 'PrayersArrayFR' : args.arrayName = 'ReadingsArrays.' + args.arrayName + 'FR';
      args.tablesArray = editSpecificTable() || []
    };

    args.select.selectedIndex = 0;
  } else if (!args.tablesArray) args.tablesArray = editSpecificTable() || []; //If the arrayName and the tableTitle are provided, it means the user wants to edit a specific table

  if (
    containerDiv.dataset.arrayName &&
    args.arrayName === containerDiv.dataset.arrayName &&
    !confirm(
      "Warning !! you are about to reload the same array, you will loose all your modifications. Are you sure you want to reload the same array? "
    )
  )
    return; //If the selected option is the same as the already loaded array, and the user does not confirm reloading the array, we return

  containerDiv.dataset.arrayName = args.arrayName;
  containerDiv.style.gridTemplateColumns = "100%";

  if (!args.languages)
    args.languages = getLanguages(PrayersArraysKeys.find(a=>a[1] ===args.arrayName)[0]) || allLanguages.map(lang => lang[0]);

  function addNewTable() {
    args.arrayName = "PrayersArray"; //!CAUTION: if we do not set the arrayName to an existing array, it will yeild to an error when the array name will be evaluated by eval(arrayName), and the saveModifiedArray() will stop without exporting the text to file
    args.languages =
      prompt(
        "Provide the sequence of the languages columns",
        "COP, FR, CA, AR"
      ).split(", ") || getLanguages(PrayersArraysKeys.find(a=>a[1] === args.arrayName)[0]);
    let title =
      prompt(
        "Provide the title for the table",
        "NewTable&D=$copticFeasts.AnyDay"
      ) || "NewTable&D=$copticFeasts.AnyDay";
    args.tablesArray = [[[title]]]; //We create a string[][][] with one string[][] (i.e. table) having only 1 string[] (i.e. row)

    args.tablesArray[0][0].push(...args.languages); //We push the languages to the first row of the first table in tablesArray. This will give us a first row like  ['NewTable&D=$copticFeasts.AnyDay&C=Title', 'COP', 'FR', 'CA', etc.]

    args.tablesArray[0].push([...args.tablesArray[0][0]]); //!Caution, we need to deconstruct the elements of the row. Otherwise it will not be a true copy. We add a second row to the table.

    args.tablesArray[0][0][0] += "&C=Title"; //We remove the '&C=Title' from the second row
  }

  function editSpecificTable(
    arrayName: string = args.arrayName
  ): string[][][] | void {

    alert(arrayName);
    if (
      !args.tableTitle && //args.tableTitle was not already provided as argument
      confirm("Do you want to edit a single or specific table(s) in the array?")
    )

      args.tableTitle = prompt(
        'Provide the name of the table you want to edit  (if more than one table, provide the titles separated by ", " '
      );

    if (!args.tableTitle && !args.arrayName) return; //If no tableTitle is provided, and no arrayName, we will return

    if (
      !args.tableTitle &&
      confirm(
        "No tableTitle is provided, do you want to edit the entire tables array?"
      )
    )
      return eval(arrayName); //If no tableTitle is provided, we will return the entire array

    let titles = args.tableTitle.split(", "); //if tableTitle is a comma separated string, it means there are multiple table titles provided

    if (!titles || titles.length < 1)
      return console.log("The provided tableTitle argument is not valid");

    containerDiv.dataset.specificTables = "true";
    return titles.map(
      (title) =>
        findTable(
          title,
          arrayName ? eval(arrayName) : undefined,
          args.operator || { includes: true }
        ) || undefined
    );
  }

  function runFunction() {
    args.arrayName = prompt(
      "Provide the function and the parameters",
      args.arrayName
    );
    if (args.arrayName && args.arrayName.includes("Fun(")) eval(args.arrayName);
  }

  if (!args.tablesArray || args.tablesArray.length < 1)
    return console.log("tablesArray was not set");

  (function editTables() {
    localStorage.displayMode === displayModes[0]; //We make sure that we are in the 'Normal' display mode before showing the text of the tables;

    showTables({
      tablesArray: args.tablesArray,
      languages: args.languages,
      position: containerDiv,
      container: containerDiv,
      clear: args.clear,
    });
  })();
}
/**
 * Takes a string[][][] (i.e., and array of tables, each being a string[][], where each string[] represents a rowh),  that we want to edit,and creates html div elements representing the text of each row of eah table in the tablesArray
 * @param {string[][][]} tablesArray - an array containing the tables that we need to show and start editing
 * @param {string[]} languages - the languages included in the tables
 */
function showTables(args: {
  tablesArray: string[][][];
  languages?: string[];
  position?:
  | HTMLElement
  | DocumentFragment
  | { el: HTMLElement; beforeOrAfter: InsertPosition };
  container?: HTMLElement | DocumentFragment;
  clear?: boolean;
}) {
  if (!args.container) args.container = containerDiv;
  if (!args.position) args.position = containerDiv;
  if (args.clear !== false) args.clear = true;

  if (args.clear === true) containerDiv.innerHTML = "";
  //We create an html div element to display the text of each row of each table in tablesArray

  let titleBase: string, arrayName: string, prayersArray: string[][][];

  args.tablesArray.forEach((table) => {
    if (!table) return;
    titleBase = splitTitle(table[0][0])[0] || "NoTitle";
    prayersArray = getTablesArrayFromTitlePrefix(titleBase);
    PrayersArrays.includes(prayersArray)
      ? (arrayName = "PrayersArrayFR")
      : (arrayName = getArrayNameFromArray(prayersArray)); //If the array of tables that includes the table is one of the arrays in the 'PrayersArrays' list, we set the arrayName to 'PrayersArray', or otherwise, we retrieve its name from the PrayersArraysKeys by calling getArrayNameFromArray(prayersArray)
    if (
      !arrayName &&
      confirm(
        'We could not infer the name of the array from the title of the table, do you want to set it to "PrayersArray?"'
      )
    )
      arrayName = "PrayersArray";
    if (!arrayName) return console.log("The name of the array is missing");

    table.forEach((row) => {
      if (!row) return;
      createHtmlElementForPrayerEditingMode({
        tblRow: structuredClone(row),//!We pass a structured clone in order to avoid the modification of the row by the function
        titleBase: titleBase,
        languagesArray: structuredClone(args.languages) || getLanguages(titleBase),
        position: args.position,
        container: args.container,
        arrayName: arrayName,
      });
    });
  });

  //We add the editing buttons
  addEdintingButtons();
  //Setting the CSS of the newly added rows
  setCSS(Array.from(args.container.querySelectorAll("div.Row")));
  //Showing the titles in the right side-bar

  let titles =
    (Array.from(
      args.container.querySelectorAll("div.Title, div.SubTitle")
    ) as HTMLDivElement[]) || [];
  //removing the minus sign at the begining of the title
  titles.forEach((div) =>
    Array.from(div.getElementsByTagName("P")).forEach(
      (p: HTMLElement) =>
      (p.innerText = p.innerText.replaceAll(
        String.fromCharCode(plusCharCode + 1),
        ""
      ))
    )
  );

  showTitlesInRightSideBar(titles);
}

/**
 * Adds the editing buttons as an appeded div to each html div (row) displayed
 * @param {HTMLElement} el - the div representing a row in the table
 */
function addEdintingButtons() {
  let btnsDiv = document.createElement("div");
  btnsDiv.classList.add("btnsDiv");
  btnsDiv.style.display = "grid";
  btnsDiv.style.gridTemplateColumns = ((100 / 5).toString() + "% ").repeat(5);
  btnsDiv.style.top = "10px";
  btnsDiv.style.width = "95%";
  btnsDiv.style.justifySelf = "top !important";
  btnsDiv.style.justifyItems = "stretch";
  btnsDiv.style.position = "fixed";

  containerDiv.insertAdjacentElement("beforebegin", btnsDiv);

  createEditingButton(
    () => modifyAllSelectedText(),
    "Modify Selected Text",
    btnsDiv
  );

  createEditingButton(
    () => changeTitle(document.getSelection().focusNode.parentElement),
    "Change Title",
    btnsDiv
  );

  createEditingButton(
    () => changeCssClass(document.getSelection().focusNode.parentElement),
    "Change Class",
    btnsDiv
  );

  createEditingButton(
    () => saveModifiedArray({ exportToFile: false, exportToStorage: true }),
    "Save",
    btnsDiv
  );

  createEditingButton(
    () => saveModifiedArray({ exportToFile: true, exportToStorage: true }),
    "Export to JS file",
    btnsDiv
  );

  createEditingButton(
    () => addTableToSequence(document.getSelection().focusNode.parentElement),
    "Add Table to Sequence",
    btnsDiv
  );

  createEditingButton(() => exportSequence(), "Export Sequence", btnsDiv);

  createEditingButton(
    () => addRow(document.getSelection().focusNode.parentElement),
    "Add Row",
    btnsDiv
  );
  createEditingButton(
    () => addNewCell(document.getSelection().focusNode.parentElement),
    "Add Cell",
    btnsDiv
  );
  createEditingButton(
    () => addRow(document.getSelection().focusNode.parentElement, true),
    "Add PlaceHolder",
    btnsDiv
  );
  createEditingButton(
    () => addNewColumn(document.getSelection().focusNode.parentElement),
    "Add Column",
    btnsDiv
  );
  createEditingButton(
    () => deleteRow(document.getSelection().focusNode.parentElement),
    "Delete Row",
    btnsDiv
  );
  createEditingButton(
    () => deleteCell(document.getSelection().focusNode.parentElement),
    "Delete Cell",
    btnsDiv
  );
  createEditingButton(
    () =>
      splitParagraphsToTheRowsBelow(
        document.getSelection().focusNode.parentElement
      ),
    "Split Below",
    btnsDiv
  );

  createEditingButton(
    async () => await convertCopticFont(document.getSelection().focusNode.parentElement),
    "Convert Coptic Fonts",
    btnsDiv
  );

  createEditingButton(() => goToTableByTitle(), "Go to Table", btnsDiv);
  createEditingButton(
    () =>
      editNextOrPreviousTable(
        document.getSelection().focusNode.parentElement,
        true
      ),
    "Next  Table",
    btnsDiv
  );
  createEditingButton(
    () =>
      editNextOrPreviousTable(
        document.getSelection().focusNode.parentElement,
        false
      ),
    "Previous Table",
    btnsDiv
  );
  createEditingButton(
    () =>
      insertReadingTextFromBible(
        document.getSelection().focusNode.parentElement),
    "Insert Reading Text",
    btnsDiv
  );
}

/**
 * Generates a file name for the JS file, including the name of the array, the date on which it was modified, and the time
 * @param {string} arrayName - the name of the array for which we want to generate a file name
 */
function getJSFileName(arrayName: string): string {
  let today = new Date();
  return (
    arrayName +
    "_[ModifiedOn" +
    String(today.getDate()) +
    String(today.getMonth() + 1) + //we add 1 because the months are counted from 0
    String(today.getFullYear()) +
    "at" +
    String(today.getHours() + 1) +
    "h" +
    String(today.getMinutes()) +
    "].js"
  );
}

/**
 * Deletes an html div (row) from the DOM
 * @param {HTMLElement} htmlRow - the html div (or any html element), we want to delete
 * @returns
 */
function deleteRow(htmlParag: HTMLElement) {
  let htmlRow = getHtmlRow(htmlParag) as HTMLElement;
  if (!htmlRow) return;
  if (confirm("Are you sure you want to delete this row?") === false) return; //We ask the user to confirm before deletion
  htmlRow.remove();
}
/**
 * Deletes a cell in a row
 * @param {HTMLElement} htmlParag - the paragraph that we want to delete 
 * @returns
 */
function deleteCell(htmlParag: HTMLElement) {
  if (htmlParag.tagName !== 'P') return alert('The selection is not a paragraph');
  let htmlRow = getHtmlRow(htmlParag) as HTMLElement;
  if (!htmlRow) return;

  if (!confirm("Are you sure you want to delete this paragraph?")) return; //We ask the user to confirm before deletion
  htmlParag.remove();
  htmlRow.style.gridTemplateColumns = setGridColumnsOrRowsNumber(htmlRow);//We adapt the number of columns of the parent div 
  htmlRow.style.gridTemplateAreas = setGridAreas(htmlRow);//We adapt the grid areas of the parent div
}

/**
 * Changes the 'actor' css class of a row
 * @param {HTMLElement} htmlRow - the div (row) for which we want to change the css class
 */
function changeCssClass(htmlParag: HTMLElement, newClass?: string) {
  let htmlRow = getHtmlRow(htmlParag);
  if (!htmlRow) return alert("Did not find the parent Div");
  let currentClass = splitTitle(htmlRow.title)[1];
  if (!newClass) newClass = prompt("Provide The New Class", currentClass);
  if (!newClass || newClass === currentClass) return;

  htmlRow.title = splitTitle(htmlRow.title)[0] + "&C=" + newClass;

  if (currentClass) htmlRow.classList.replace(currentClass, newClass);
  else if (!htmlRow.classList.contains(newClass))
    htmlRow.classList.add(newClass);
}

function toggleClass(element: HTMLElement, className: string) {
  element.classList.toggle(className);
}

function changeTitle(
  htmlParag: HTMLElement,
  newTitle?: string,
  oldTitle?: string
) {
  let htmlRow = getHtmlRow(htmlParag);
  if (!htmlRow) return;
  if (!oldTitle) oldTitle = htmlRow.title;
  if (!newTitle) newTitle = prompt("Provide The Title", oldTitle);
  if (!newTitle) return alert("You didn't provide a valid title");
  if (newTitle === oldTitle) return;

  htmlRow.dataset.root = splitTitle(newTitle)[0];
  htmlRow.title = newTitle;

  changeParagraphsDataRoot();

  function changeParagraphsDataRoot(
    row: HTMLDivElement = htmlRow as HTMLDivElement,
    title: string = newTitle
  ) {
    Array.from(row.querySelectorAll("p"))
      .filter((child) => child.dataset.root && child.title)
      .forEach((child) => {
        child.dataset.root = splitTitle(title)[0];
        child.title = title;
      });
  }

  let actorClass: string = splitTitle(newTitle)[1];

  if (actorClass && !htmlRow.classList.contains(actorClass))
    htmlRow.classList.add(actorClass);

  (function changeSiblingsDataRoot() {
    Array.from(containerDiv.children)
      .filter(
        (sibling: HTMLElement) =>
          sibling.dataset.root === splitTitle(oldTitle)[0]
      )
      .forEach((sibling: HTMLElement) => {
        sibling.dataset.root = splitTitle(newTitle)[0];
        let cssClass = splitTitle(sibling.title)[1];
        sibling.title = sibling.dataset.root;
        if (cssClass) sibling.title += "&C=" + cssClass;
        changeParagraphsDataRoot(sibling as HTMLDivElement, sibling.title);
      });
  })();
}

/**
 * Creates an html button, and adds
 * @param {Function} fun - the function that will be called when the button is clicked
 * @param {string} label - the label of the button
 * @returns {HTMLButtonElement} - the html button that was created
 */
function createEditingButton(
  fun: Function,
  label: string,
  btnsDiv: HTMLElement
): HTMLButtonElement {
  let btnHtml: HTMLButtonElement = document.createElement("button");
  btnHtml.classList.add(inlineBtnClass);
  btnHtml.classList.add("btnEditing");
  btnHtml.innerText = label;
  btnHtml.addEventListener("click", () => fun());
  btnsDiv.appendChild(btnHtml);
  return btnHtml;
}

/**
 * Takes the text of a modified array, and exports it to a js file
 * @param {[string, string]} arrayText - the first element is the modified text of the array that we will export to a Js file. The second element is the name of the array
 */
function exportToJSFile(arrayText: string, arrayName: string) {
  if (!arrayText || !arrayName) return;
  createJsFile(arrayText, getJSFileName(arrayName));
}

/**
 * Either replaces the tables in the string[][][] tables array with the modified versions of the table(s) that we have been editing (if we were editing an already existing table) or adds a new table to the array if the table we were editing does not exist
 * @param {string} arrayName - the name of the string[][][] array that we were editing, or to which the new table will be added. Its default value is containerDiv.dataset.arrayName
 * @param {HTMLDivElement[]} htmlRows - an array of html div elements representing one or more table that have been edited. If missing, it will be replaced by an array of all the containeDiv div children having class 'Row' or 'PlaceHolder'
 * @param {string} dataRoot - a string that permits to filter the htmlRows array by a specific data-root attribute
 * @param {boolean} exportToFile - If true, the text of the modified array will be returned. Its default value is "true".
 * @param {boolean} exportToStorage - If true, the text of the modified array will be saved to localStorage.editedText. Its default value is "true".
 * @returns {[string, string] | void} the text of the modified array
 */
function saveModifiedArray(args: {
  exportToFile: boolean;
  exportToStorage: boolean;
  dataRoot?: string;
  htmlRows?: HTMLDivElement[];
}): [string, string] | void {
  let titles: Set<string> = new Set(),
    title: string,
    savedArrays: Set<string> = new Set(),
    tablesArray: string[][][];

  if (!args.htmlRows)
    args.htmlRows = Array.from(
      containerDiv.querySelectorAll(
        "div.Row, div.PlaceHolder"
      ) as NodeListOf<HTMLDivElement>
    )//we retrieve all the divs with 'Row' and 'PlaceHolder' class from the DOM

  if (args.dataRoot)
    args.htmlRows = args.htmlRows.filter(
      (htmlRow) => htmlRow.dataset.root === args.dataRoot
    );

  //Adding the tables' titles as unique values to the titles set
  args.htmlRows
    .forEach((htmlRow) => {
      if (!htmlRow) return; //This will happen if the row was row of a table referrenced by a placeholder, that was later on hidden when the click() event of the placeholder row was triggered (see below)
      title = htmlRow.dataset.root; //this is the title without '&C='

      if (titles.has(title)) return;//If the title has already been processed before (i.e., the table was modified or added in its string[][][] array, we do not need to continue)

      titles.add(title)//Else, we add the title to the titles Set in order to avoid re processing the same table again

      if (htmlRow.dataset.isPlaceHolder) {
        saveModifiedArray({
          exportToFile: false,
          exportToStorage: true,
          dataRoot: htmlRow.dataset.isPlaceHolder,
        });//Since we are not passing the htmlRows argument, the function will retrieve all the containerDiv children having 'Row' or 'PlaceHolder' class and will filter them by the data-root of the placeHolder div
        args.htmlRows
          .filter(
            (div) =>
              !div.dataset.isPlaceHolder
              && div.dataset.root
              && div.dataset.root === htmlRow.dataset.isPlaceHolder
          )
          .forEach((div) => div.remove()); //We remove all the html elements that were created to show the rows of the table referenced by the 'PlaceHolder' element.
        return;
      }

      if (!htmlRow.dataset.arrayName)
        return console.log(
          "We encountered a problem with one of the rows : ",
          htmlRow
        );//Without the arrayName attribute, we will not be able to retrive the string[][][] to which the table belongs.

      tablesArray = eval(htmlRow.dataset.arrayName);

      if (!tablesArray)
        return console.log(
          "We've got a problem while executing saveOrExportArray(): title = ",
          title,
          " and arrayName = ",
          htmlRow.dataset.arrayName
        );

      if (PrayersArrays.includes(tablesArray)) tablesArray = PrayersArrayFR; //If the array is one of the sub arrays created from PrayersArrays, the array that need to be modified and saved or exported is PrayersArray not the sub array itself

      if (!savedArrays.has(htmlRow.dataset.arrayName))
        savedArrays.add(htmlRow.dataset.arrayName);

      modifyEditedArray(title, tablesArray);
    });

  //We finally save or export each array in the savedArrays
  savedArrays.forEach((arrayName) =>
    saveOrExportArray(
      eval(arrayName),
      arrayName,
      args.exportToFile,
      args.exportToStorage
    )
  );
}

/**
 * Creates string[][] tables  from the html children of containerDiv,  as edited and modified. It does so by selecting all the div elements having the same data-set-root, and converting the text in each such div element into a string[], and adds all the created string[] to a string[][].
 * It then loops the tablesArray (i.e., the original array of tables that we were editing), and looks if it contains a table (i.e. a string[][])  with the same title as the table created from the div elements. If so, it replaces this string[][] in the tablesArray table with the string[][] created from the div elements. Otherwise, it prompts the user wheter he wants to add the created string[][] as a new table at the end of the tablesArray.
 * @param {string} tableTitle - The title of a table in the tablesArray (which is a string[][][])
 * @param {string[][][]} tablesArray - the array that we were editing.
 */
function modifyEditedArray(tableTitle: string, tablesArray: string[][][]) {
  if (!tablesArray || !tableTitle) return;
  //We select all the div elements having same data-set-root attribute as the title of the table (tabeTitle)
  let htmlTable = Array.from(
    containerDiv.querySelectorAll('div'
    ) as NodeListOf<HTMLDivElement>
  ).filter(
    (htmlRow) => htmlRow.dataset.root && htmlRow.dataset.root === tableTitle
  ) as HTMLDivElement[];

  if (htmlTable.length === 0) return console.log('No div elements with the provided tableTitle');

  //We start by modifiying the array to which the table belongs
  modifyArray(htmlTable);

  function modifyArray(htmlTable: HTMLDivElement[]) {
    //We generate a string[][] array from the div elements we selected. Each div element is an elemet of the string[][], and each paragraph attached to such div is a string element.
    let editedTable: string[][] =
      convertHtmlDivElementsIntoArrayTable(htmlTable);

    if (!editedTable || editedTable.length < 1)
      return console.log(
        "convertHtmlDivElementsIntoArrayTable() returned undefined, or empty aray"
      );

    [
      tablesArray,
      getTablesArrayFromTitlePrefix(htmlTable[0].dataset.root),
    ].forEach((array) => modifyTheMainAndSubArrays(array)); //We will modify the table in its main string[][][] Array (passed to the function in the tablesArray argument to the function) as well as any other sub array in which the table might be also included (like PrayersArrays.massCommon, PrayersArrays.IncenseDawn, etc.)), retrieved by the table title (stored in the html data-root attribute);

    function modifyTheMainAndSubArrays(targetTablesArray: string[][][]) {
      if (!targetTablesArray) return;
      let oldTable: string[][] = targetTablesArray.find(
        (tbl) => splitTitle(tbl[0][0])[0] === splitTitle(editedTable[0][0])[0]
      );

      if (oldTable)
        targetTablesArray.splice(
          targetTablesArray.indexOf(oldTable),
          1,
          editedTable
        );
      else if (
        confirm(
          "No table with the same title was found in the array, do you want to add the edited table as a new table "
        )
      )
        targetTablesArray.push(editedTable);
    }
  }
}

/**
 *
 * @param {string} arrayName - Name of the modified array that we want to save to local storage or export to a JS file
 * @param {boolean} exportToStorage - if true the array is saved in localStorage.editedText. Its default value is true
 * @param {boolean} exportToFile - if true the array text is export as a JS file. Its default value is true
 */
function saveOrExportArray(
  tablesArray: string[][][],
  arrayName: string,
  exportToFile: boolean = true,
  exportToStorage: boolean = true
) {
  let text: string;

  if (!tablesArray)
    return console.log("tablesArray is undefined:  ", tablesArray);

  if (!arrayName) return console.log("No array nam is provided");
  console.log("modified array = ", arrayName);

  text = processArrayTextForJsFile(arrayName, tablesArray);

  if (!text)
    return console.log(
      "We've got a problem when we called processArrayTextForJsFile().  arrayName = ",
      arrayName
    );

  if (exportToStorage) {
    localStorage.editedText = text;
    alert('Finished Saving the Array to localStorage')
    console.log(localStorage.editedText);
  }

  if (exportToFile) exportToJSFile(text, arrayName);
}

/**
 * Takes a table array, and process the strings in the array, in order to restore the prefixes and insert escape characters before the new lines, etc. in a format that suits a js file
 * @param {string[][][]} tablesArray - the string[][][] that will be processed and returned as a text the js file
 * @return {string} the text representing the array in a js file
 */
function processArrayTextForJsFile(
  arrayName: string,
  tablesArray: string[][][]
): string {
  //Open Array of Tables
  if (!tablesArray) tablesArray = eval(arrayName);
  if (!tablesArray) return;
  let text: string = "[";
  tablesArray.forEach((table) => processTable(table));

  function processTable(table: string[][]) {
    if (!table || table.length < 1) {
      console.log("error with table in processTable() = ", table);
      return alert("Something went wrong");
    }
    //open table array
    text += "[\n";
    table.forEach((row) => {
      processTableRow(row);
    });
    //close table
    text += "],\n";
  }
  function processTableRow(row: string[]) {
    if (!row || row.length < 1) {
      console.log("error with row in processTable() = ", row);
      return alert("Something went wrong");
    }

    //open row array
    text += "[\n";
    row.forEach((element: string) => processStringElement(element, row));
    //close row
    text += "],\n";
  }

  function processStringElement(element: string, row: string[]) {
    //for each string element in row[]
    element = element
      .replaceAll('"', '\\"') //replacing '"" by '\"'
      .replaceAll("\n", "\\n")
      .replaceAll("\r", "\\\\r")
      .replaceAll("\\u", "\\\\u");

    if (splitTitle(row[0])[1] === "Title")
      element = element
        .replaceAll(String.fromCharCode(plusCharCode) + " ", "")
        .replaceAll(String.fromCharCode(plusCharCode + 1) + " ", ""); //removing the plus(+) and minus(-à characters from the titles

    text += '"' + element + '", \n'; //adding the text of row[i](after being cleaned from the unwatted characters) to text
  }
  text = replacePrefixes(text, arrayName);
  text = arrayName + "= " + text + "];";
  return text;
}

function replacePrefixes(text: string, arrayName: string): string {
  let prefix: string;
  Object.entries(Prefix).forEach((entry) => {
    prefix = "Prefix." + entry[0];

    if (entry[1] === Prefix.placeHolder)
      text = text.replaceAll('"' + eval(prefix) + '"', prefix);//This is because element [0] of PlaceHoler row is the prefix without any other thing. It thus ends with (") that we neeed to remove
    else text = text.replaceAll('"' + eval(prefix), (prefix += '+"'));
  });

  if (arrayName !== "PrayersArray") return text;
  //Seasonal
  
  return text
    .replaceAll(seasonal.giaki.AR, '" +seasonal.giaki.AR+ "')
    .replaceAll(seasonal.giaki.FR, '" +seasonal.giaki.FR+ "')
    .replaceAll(seasonal.giaki.EN, '" +seasonal.giaki.EN+ "')
    .replaceAll(seasonal.giaki.COP, '" +seasonal.giaki.COP+ "')
    .replaceAll(seasonal.giaki.CA, '" +seasonal.giaki.CA+ "');
}

function replaceHtmlQuotes(innerHtml: string, lang: string): string {
  if (!innerHtml.includes("<q>")) return innerHtml;
  //if (["FR", "AR", "EN", "CA"].includes(lang))
  return innerHtml
    .replaceAll("<q>", String.fromCharCode(171))
    .replaceAll("</q>", String.fromCharCode(187));
  // else if (lang === "AR" || lang === "EN")
  //   return innerHtml.replaceAll("<q>", '"').replaceAll("</q>", '"');
  //  return innerHtml;
}

/**
 * Adds a new div (row) below the div (row) passed to it as argument.
 * @param {HTMLElement} htmlParag - the html paragraph in which the cursor is placed when the function is called 
 * @param {boolean} isPlaceHolder - If true, the row that will be added will be a 'PlaceHolder' row. Its default value is false
 * @param {string} title - The title of the row that will be added. If omitted, the function will prompt for providing the title
 * @param {boolean} below - If true, the new row will be added below. Else it will inserted before the currently selected div. Its default value is true
 */
function addRow(htmlParag: HTMLElement, isPlaceHolder: boolean = false, title?: string, below: boolean = true): HTMLElement | void {
  let htmlRow = getHtmlRow(htmlParag);
  if (!htmlRow) return;

  if (!title) title = prompt("Provide the Title of the new Row", htmlRow.title);
  if (!title) return alert('You must provide a valide name for the table that will be put as PlaceHolder');

  let newRow = document.createElement("div"),
    p: HTMLParagraphElement,
    rowClass: string = 'Row',
    gridColumns: string = htmlRow.style.gridTemplateColumns,
    gridAreas: string = htmlRow.style.gridTemplateAreas;

  if (isPlaceHolder) {
    rowClass = 'PlaceHolder';
    gridColumns = '100%';
    gridAreas = 'FR';
    newRow.dataset.root = htmlRow.dataset.root;
    newRow.title = htmlRow.dataset.title;

    if (htmlRow.dataset.displayedPlaceHolder)
      //If htmlRow is a row in a table displayed from a PlaceHolder element, we will go up until we find the first row of the main table to which the PlaceHolder table is attached, and will retrieve its dataset.root
      Object.entries(getMainTableTitle(htmlRow))
        .forEach(entry =>
          entry[0] === 'title' ? newRow.title = entry[1] : newRow.dataset.arrayName = entry[1]);

    newRow.dataset.root = splitTitle(newRow.title)[0];
    newRow.dataset.group = newRow.dataset.root;

    function getMainTableTitle(div: HTMLDivElement): {
      title: string; arrayName: string
    } {
      let previous = div.previousElementSibling as HTMLDivElement;
      while (
        //We go up as long as the previous element has dataset.displayedPlaceHolder === div.dataset.displayedPlaceHolder
        previous.dataset.displayedPlaceHolder
        &&
        previous.dataset.displayedPlaceHolder === div.dataset.displayedPlaceHolder)
        getMainTableTitle(previous as HTMLDivElement);

      return { title: previous.title, arrayName: previous.dataset.arrayName };//This is the main div where the PlaceHolder is displayed before being extended when clicked on
    }
  }

  let isReference: boolean = false;
  isReference = title.toUpperCase().startsWith('REF:');
  if (isReference) {
    gridColumns = '100%';
    gridAreas = '"FR"';
    newRow.style.gridArea = '"FR"';
    newRow.dataset.root = htmlRow.dataset.root;
    newRow.title = htmlRow.title;
    newRow.dataset.isReference = 'true';
  }
  newRow.classList.add(rowClass);
  newRow.dataset.isNewRow = "isNewRow";
  newRow.style.display = htmlRow.style.display;
  newRow.style.gridTemplateColumns = gridColumns;
  newRow.style.gridTemplateAreas = gridAreas;



  if (isPlaceHolder) newRow.dataset.isPlaceHolder = title;


  if (!newRow.dataset.root) //If not already set because it is a new PlaceHolder row
    newRow.dataset.root = splitTitle(title)[0];


  if (!newRow.title) //If not already set because it is a new PlaceHolder or a Reading Reference row
    newRow.title = title;

  if (splitTitle(newRow.title)[0] === splitTitle(htmlRow.title)[0]) newRow.dataset.isPrefixSame = 'true'; //We need this in order to be sure than when the table is exported, the string[] representing the newly added row will have as first element: Prefix.same + '&C=[whatever class]' not the full title of the table

  if (!newRow.dataset.arrayName) //If not already set because it is a new PlaceHolder row
    newRow.dataset.arrayName = prompt("Provide the name of the array", htmlRow.dataset.arrayName);

  if (!isPlaceHolder && splitTitle(title)[1])
    newRow.classList.add(splitTitle(title)[1]);

  let children = Array.from(htmlRow.children);
  children
    .forEach((child: HTMLElement) => {
      if ((isPlaceHolder || isReference) && newRow.children.length > 0) return;
      if (!child.lang || child.tagName !== "P") return;
      p = newRow.appendChild(document.createElement("p"));
      if (isPlaceHolder) p.innerText = splitTitle(title)[0];
      if (isReference) p.innerText = splitTitle(title)[0].replace(Prefix.readingRef, '').replace('REF:', '').toUpperCase();
      p.title = newRow.title;
      p.dataset.root = newRow.dataset.root;
      isPlaceHolder || isReference ? p.lang = 'FR' : p.lang = child.lang;
      p.classList.add(p.lang.toUpperCase());
      p.contentEditable = "true";
      p.addEventListener('keydown', (e: KeyboardEvent) => { paragraphsKeyShortcuts(e); return false })
    });
  let position: InsertPosition;
  below ? position = 'afterend' : position = 'beforebegin'
  return htmlRow.insertAdjacentElement(position, newRow) as HTMLElement;
}

function paragraphsKeyShortcuts(e: KeyboardEvent) {
  if (!e.shiftKey) return;
  let p = e.target as HTMLElement
  if (e.key === 'A') { e.preventDefault; addRow(p, false, undefined, true) };
  if (e.key === 'B') { e.preventDefault; addRow(p, false, undefined, false) };
  if (e.key === 'S') { e.preventDefault; saveModifiedArray({ exportToFile: false, exportToStorage: true }) };
  if (e.key === 'E') { e.preventDefault; saveModifiedArray({ exportToFile: true, exportToStorage: true }) };
  if (e.key === 'C') { e.preventDefault; convertCopticFont(p) };
  if (e.key === 'L') { e.preventDefault; deleteRow(p) };
  if (e.key === 'P') { e.preventDefault; splitParagraphsToTheRowsBelow(p) };
  if (e.key === 'F') { e.preventDefault; _FixCopticText(p) };
  return false
}

/**
 * 
 * @param htmlParag 
 * @returns 
 */
function addNewCell(htmlParag: HTMLElement, right: boolean = true): HTMLElement | void {
  let htmlRow = getHtmlRow(htmlParag);
  if (!htmlRow) return;
  let p = document.createElement("p"),
    lang: string = prompt('Provide the language of the paragraph') || 'FR';
  p.contentEditable = 'true';
  p.dataset.root = htmlParag.dataset.root;
  p.title = htmlParag.title;
  p.classList.add(lang);
  p.lang = lang;
  p.innerText = 'New paragraph added';
  let position: InsertPosition;
  right ? position = "afterend" : position = "beforebegin"
  htmlParag.insertAdjacentElement("afterend", p) as HTMLElement;
  htmlRow.style.gridTemplateAreas = setGridAreas(htmlRow);
  htmlRow.style.gridTemplateColumns = setGridColumnsOrRowsNumber(htmlRow);
}
function addNewColumn(htmlParag: HTMLElement): HTMLElement | void {
  if (htmlParag.tagName !== "P")
    return alert("The html element passed to addNewColumn is not a paragraph");
  let htmlRow = getHtmlRow(htmlParag) as HTMLElement;
  if (!htmlRow) return;
  let langClass = prompt(
    'You must proivde a language class (like "AR", "FR", etc. for the new column. It must not be more than 3 letters, and can be either uper case or lower case',
    "AR"
  ).toUpperCase();
  if (!langClass || langClass.length > 3)
    return alert("You didn't provide a valid language class");
  let newColumn: HTMLElement = document.createElement("p");
  newColumn.contentEditable = "true";
  newColumn.classList.add(langClass);
  newColumn.lang = langClass;
  newColumn.innerText = "New column added with class = " + newColumn.lang;
  htmlRow.appendChild(newColumn);
  newColumn.dataset.isNew = "isNewColumn";
  htmlRow.style.gridTemplateColumns = (
    (100 / htmlRow.children.length).toString() + "% "
  ).repeat(htmlRow.children.length);

  let languages = Array.from(htmlRow.children).map((p: HTMLElement) => p.lang);
  let areas: string = languages.join(" ");
  areas = prompt("Do we want to rearrange the languages areas?", areas);

  areas.split(" ").map((language) => {
    let parag = Array.from(htmlRow.children).filter(
      (p: HTMLElement) => p.lang === language
    )[0] as HTMLElement;
    htmlRow.appendChild(parag); //we are arranging the html paragraphs elements in the same order as provided by the user when prompted
  });
  areas = areas.replaceAll(",", "");
  htmlRow.style.gridTemplateAreas = '"' + areas + '"';

  return htmlRow;
}

function createHtmlElementForPrayerEditingMode(args: {
  tblRow: string[];
  titleBase: string;
  languagesArray: string[];
  position?:
  | HTMLElement
  | DocumentFragment
  | { beforeOrAfter: InsertPosition; el: HTMLElement };
  container?: HTMLElement | DocumentFragment;
  arrayName?: string;
  actorClass?: string;
}): HTMLDivElement {
  if (!args.position) args.position = containerDiv;
  if (!args.container) args.container = containerDiv;
  if (!args.arrayName)
    args.arrayName = getArrayNameFromArray(
      getTablesArrayFromTitlePrefix(args.titleBase)
    );
  if (!args.arrayName) return;

  if (args.titleBase.startsWith(Prefix.HolyWeek) && args.arrayName === 'ReadingsArrays.GospelNightArrayFR') args.languagesArray = getLanguages(Prefix.massCommon);


  let htmlRow: HTMLDivElement,
    p: HTMLParagraphElement,
    lang: string,
    actorClass: string,
    dataRoot: string,
    isPlaceHolder: boolean = false,
    isReference: boolean = false;

  isPlaceHolder = args.tblRow[0].startsWith(Prefix.placeHolder);
  isReference = args.tblRow[0].startsWith(Prefix.readingRef);

  actorClass = splitTitle(args.tblRow[0])[1] || "NoActor";

  htmlRow = document.createElement("div");
  if (args.arrayName) htmlRow.dataset.arrayName = args.arrayName;

  if (isReference) {
    args.tblRow = [args.tblRow[0], args.tblRow[0].replace(Prefix.readingRef, '')];
    htmlRow.dataset.isReference = args.tblRow[0].toUpperCase();
  };

  if (!isPlaceHolder) {
    args.tblRow.length > 1 ? dataRoot = args.titleBase : dataRoot = splitTitle(args.tblRow[0])[0];//If the row contains only 1 element, it means that this row has no text and was inserted in order to generate an html div that will be later on used as a placeholder anchor for another prayer to be inserted. We will give the html element as data-root and a data-group the tblRow[0] in roder to avoid this element to be treated as a "Prefix.same" element when the array is saved and exported
    htmlRow.classList.add("Row"); //we add 'Row' class to this div
    htmlRow.title = args.titleBase + "&C=" + actorClass; //We need to record the full title of each row (i.e. row[0]) in order to be able to add it when we convert the html element into an element in an Array

    if (args.tblRow[0].startsWith(Prefix.same)) htmlRow.dataset.isPrefixSame = 'true';//We need this in order to be able to determine whether when exporting the table, the row should be a row starting with Prefix.same, or should be given the full title as the 1st row of the table

    htmlRow.dataset.root = dataRoot;
    htmlRow.dataset.group = dataRoot; //The data-group attribute aims at making the row part of the same of group of rows that will be shown or hidden when we click on the title
    if (actorClass) htmlRow.classList.add(actorClass);
  } else if (isPlaceHolder) {
    let children = Array.from(args.container.children) as HTMLDivElement[];
    let lastChild = children[children.length - 1];
    htmlRow.classList.add("PlaceHolder");
    htmlRow.dataset.isPlaceHolder = args.tblRow[1]; //This is the title of the table referrenced by the placeHolder row
    htmlRow.dataset.root = lastChild.dataset.root; //We add as data-root the data-root of the previous element appended to the container. We do this because we want the placeHolder div to be part of the main table and be retrieved with the same data root and title
    htmlRow.title = lastChild.title; //We do the same for the data-title attribute as for the data-root.
    htmlRow.dataset.goup = lastChild.dataset.group; //Same as above
    htmlRow.style.backgroundColor = "grey";
    let copyLangs = [...args.languagesArray];

    htmlRow.addEventListener("click", () => {
      let referrencedTblTitle: string = htmlRow.dataset.isPlaceHolder; //When tblRow is a 'PlaceHoder', it has 2 elements: the first of which is  'Prefix.placeHolder' and the second (i.e., args.tblRow[1]) is the title of the table that is refrenced
      let shown = Array.from(containerDiv.querySelectorAll("div")).filter(
        (div) =>
          div.dataset.displayedPlaceHolder &&
          div.dataset.displayedPlaceHolder === referrencedTblTitle
      );

      if (shown.length > 0) {
        //This means that the table referrenced in tblRow[1] is displayed. We will save any changes made to it and remove it
        saveModifiedArray({
          exportToFile: false,
          exportToStorage: true,
          dataRoot: referrencedTblTitle,
        });

        shown.forEach((displayed) => {
          if (displayed.dataset.isPlaceHolder)
            Array.from(
              containerDiv.querySelectorAll(
                "div.Row"
              ) as NodeListOf<HTMLDivElement>
            )
              .filter(
                (div) =>
                  div.dataset.root &&
                  div.dataset.root === displayed.dataset.isPlaceHolder
              )
              .forEach((div) => {
                saveModifiedArray({
                  exportToFile: false,
                  exportToStorage: true,
                  dataRoot: displayed.dataset.isPlaceHolder,
                });
                div.remove();
              });
          displayed.remove();
        });

        return;
      }

      let tblsArray = getTablesArrayFromTitlePrefix(referrencedTblTitle);

      if (!tblsArray)
        return console.log(
          "We could not identifiy the array in which the referrenced table is to be retrieved"
        );

      let tableArrayName = getArrayNameFromArray(tblsArray);

      let table = [
        ...tblsArray.find(
          (tbl) => splitTitle(tbl[0][0])[0] === referrencedTblTitle
        ),
      ] //!Caution, we must create a copy of the table otherwise the original table may be reversed in it its array
        .reverse();

      let created = table.map((row) => {
        return createHtmlElementForPrayerEditingMode({
          tblRow: row,
          titleBase: splitTitle(table[0][0])[0],
          languagesArray: copyLangs,
          position: {
            el: htmlRow,
            beforeOrAfter: "afterend",
          },
          container: args.container,
          arrayName: tableArrayName, //This is the array name of the embeded table not for the table including the placeHolder referencing the embeded table
        });
      });

      setCSS(created);
      //Prefix.massStBasil + 'Reconciliation'
      created.forEach((div) => {
        div.dataset.displayedPlaceHolder = referrencedTblTitle;
        Array.from(div.children).forEach((paragraph: HTMLParagraphElement) => {
          paragraph.contentEditable = "true";
        });
      });
    });
    args.languagesArray = ["FR", "FR", "FR"]; //! The languagesArray must be changed after the addEventListner has been added to the placeHolder row
  }

  if (actorClass && actorClass.includes("Title")) {
    htmlRow.addEventListener("dblClick", (e) => {
      e.preventDefault;
      collapseOrExpandText(htmlRow);
      //--------->  htmlRow.id = row.title;
      htmlRow.tabIndex = 0; //in order to make the div focusable by using the focus() method
    });
  }
  //looping the elements containing the text of the prayer in different languages,  starting by 1 since 0 is the id/title of the table
  for (let x = 1; x < args.tblRow.length; x++) {
    //x starts from 1 because prayers[0] is the id
    if (actorClass && actorClass === "Comments") {
      //this means it is a comment
      x == 1
        ? (lang = args.languagesArray[1])
        : (lang = args.languagesArray[3]);
    } else {
      lang = args.languagesArray[x - 1]; //we select the language in the button's languagesArray, starting from 0 not from 1, that's why we start from x-1.
    } //we check that the language is included in the allLanguages array, i.e. if it has not been removed by the user, which means that he does not want this language to be displayed. If the language is not removed, we retrieve the text in this language. otherwise we will not retrieve its text.
    p = document.createElement("p"); //we create a new <p></p> element for the text of each language in the 'prayer' array (the 'prayer' array is constructed like ['prayer id', 'text in AR, 'text in FR', ' text in COP', 'text in Language', etc.])

    if (!actorClass) {
      //The 'prayer' array includes a paragraph of ordinary core text of the array. We give it 'PrayerText' as class
      p.classList.add("PrayerText");
    }
    p.dataset.root = htmlRow.dataset.root; //we do this in order to be able later to retrieve all the divs containing the text of the prayers with similar id as the title
    p.title = htmlRow.title;
    if (lang) p.classList.add(lang.toUpperCase());
    p.lang = lang; //we are adding this in order to be able to retrieve all the paragraphs in a given language by its data attribute. We need to do this in order for example to amplify the font of a given language when the user double clicks
    p.innerText = args.tblRow[x];
    p.contentEditable = "true";
    p.addEventListener('keydown', (e: KeyboardEvent) => { paragraphsKeyShortcuts(e); return false })
    htmlRow.appendChild(p); //the row which is a <div></div>, will encapsulate a <p></p> element for each language in the 'prayer' array (i.e., it will have as many <p></p> elements as the number of elements in the 'prayer' array)
  }
  //@ts-ignore
  args.position.el
    ?
    //@ts-ignore
    args.position.el.insertAdjacentElement(args.position.beforeOrAfter,
      htmlRow
    )
    : //@ts-ignore
    args.position.appendChild(htmlRow);

  return htmlRow;
}

function getPrayersSequence() {
  let allRows = containerDiv.querySelectorAll(".Row"),
    text: string = "[";
  allRows.forEach((row) => {
    //@ts-ignore
    text += row.dataset.root + ", \n";
  });
  text += "]";
  console.log(text);
}

function addTableToSequence(htmlParag: HTMLElement) {
  let htmlRow = getHtmlRow(htmlParag);
  if (!htmlRow) return;
  sequence.push(splitTitle(htmlRow.dataset.root)[0]);
  let result = prompt(sequence.join(", \n"), sequence.join(", \n"));
  sequence = result.split(", \n");
  if (document.getElementById("showSequence")) {
    let tableRows = Array.from(containerDiv.children).filter(
      (htmlRow: HTMLDivElement) => htmlRow.dataset.root
    );

    tableRows.forEach((row: HTMLDivElement) => {
      createHtmlElementForPrayerEditingMode({
        tblRow: Array.from(row.querySelectorAll("p")).map((p) => p.innerText),
        titleBase: row.dataset.root,
        languagesArray: allLanguages.map(lang => lang[0]),
        position: document.getElementById("showSequence") as HTMLElement,
      });
    });
    setCSS(
      Array.from(
        document.getElementById("showSequence").querySelectorAll("div.Row")
      )
    );
  }
}

function exportSequence() {
  console.log(sequence);
  let empty = confirm("Do you want to empty the sequence?");
  if (empty) sequence = [];
}

function showSequence(
  sequenceArray: string[] = sequence,
  container: HTMLDivElement = containerDiv
) {
  let tableRows: HTMLDivElement[];
  let newDiv = document.createElement("div");
  document
    .getElementById("content")
    .insertAdjacentElement("beforebegin", newDiv);
  (function appendCloseBtn() {
    let close = document.createElement("a");
    close.innerText = String.fromCharCode(215);
    close.classList.add("closebtn");
    close.style.position = "fixed";
    close.style.top = "5px";
    close.style.right = "15px";
    close.style.fontSize = "30pt";
    close.style.fontWeight = "bold";
    close.addEventListener("click", (e) => {
      e.preventDefault;
      newDiv.remove();
    });
    newDiv.appendChild(close);
  })();
  newDiv.id = "showSequence";
  newDiv.style.backgroundColor = "white !important";
  newDiv.style.height = "50%";
  newDiv.style.width = "100%";
  newDiv.style.position = "fixed";
  newDiv.style.overflow = "auto";
  newDiv.style.zIndex = "3";
  sequenceArray.forEach((title) => {
    tableRows = Array.from(container.children).filter(
      (htmlRow: HTMLDivElement) => htmlRow.dataset.root.startsWith(title)
    ) as HTMLDivElement[];
    tableRows.forEach((row) => {
      createHtmlElementForPrayerEditingMode({
        tblRow: Array.from(row.querySelectorAll("p")).map(
          (p: HTMLElement) => p.innerText
        ),
        titleBase: title,
        languagesArray: allLanguages.map(lang => lang[0]),
        position: newDiv,
      });
    });
    setCSS(Array.from(newDiv.querySelectorAll(".Row")));
  });
}

/**
 * adds a 'save' method to console, which prints a data to a text or a json file
 */
function addConsoleSaveMethod(console) {
  if (console.save) return;
  console.save = createJsFile;
}

/**
 * Creates a downloadable JS file from the date passed as an argument, and downloads the file with the provided fileName
 * @param data
 * @param filename
 * @returns
 */
function createJsFile(data: Object | string, filename: string) {
  if (!data) {
    console.error("Console.save: No data");
    return;
  }
  if (!filename) filename = "PrayersArrayModified";

  if (typeof data === "object") {
    data = JSON.stringify(data, undefined, 4);
  }
  if (typeof data === "string") {
    data = data.replace("\\\\", "\\");
  }

  var blob = new Blob([data as BlobPart], { type: "text/json" }),
    e = document.createEvent("MouseEvents"),
    a = document.createElement("a");

  a.download = filename;
  a.href = window.URL.createObjectURL(blob);
  a.dataset.downloadurl = ["text/json", a.download, a.href].join(":");
  e.initMouseEvent(
    "click",
    true,
    false,
    window,
    0,
    0,
    0,
    0,
    0,
    false,
    false,
    false,
    false,
    0,
    null
  );
  a.dispatchEvent(e);
}

function splitParagraphsToTheRowsBelow(htmlParag: HTMLElement) {
  //Sometimes when copied, the text is inserted as a SPAN or a div, we will go up until we get the paragraph element itslef
  let showAlert = () =>
    alert(
      "Make sure the cursuor is placed within the text of a paragraph/cell"
    );
  if (!htmlParag) return showAlert(); //We check that we got a paragraph element
  while (htmlParag.tagName !== "P" && htmlParag.parentElement)
    htmlParag = htmlParag.parentElement;

  if (htmlParag.tagName !== "P") return showAlert();
  let title: string =
    htmlParag.parentElement.dataset.title ||
    htmlParag.parentElement.dataset.root +
    "&C=" +
    Array.from(htmlParag.parentElement.classList).find((c) => c !== "Row"),
    lang: string = htmlParag.lang,
    table: HTMLElement[] = Array.from(containerDiv.children).filter(
      (htmlRow: HTMLDivElement) =>
        htmlRow.dataset.root && htmlRow.dataset.root === splitTitle(title)[0]
    ) as HTMLElement[]; //Those are all the rows belonging to the same table, including the title
  if (!table || table.length === 0)
    return alert(
      "We didn't find any elements having the same data-root as the selected paragraph: " +
      title
    );

  let rowIndex: number = table.indexOf(htmlParag.parentElement);
  //We retrieve the paragraph containing the text

  let splitted = htmlParag.innerText.split("\n");
  for (let i = 0; i < splitted.length; i++) {
    if (!splitted[i] || splitted[i] === "") continue;
    if (!table[i + rowIndex]) {
      //if tables rows are less than the number of paragraphs in 'clean', we add a new row to the table, and we push the new row to table
      table.push(
        addRow(
          table[table.length - 1].querySelector('p[lang="' + lang + '"]'),
          false,
          title
        ) || undefined
      );
    }
    let paragraph = Array.from(table[i + rowIndex].children).filter(
      (p: HTMLElement) => p.lang === lang
    )[0] as HTMLElement;
    paragraph.textContent = "";
    paragraph.innerText = splitted[i];
  }
  htmlParag.id = "splittedParagraph"; //We give the htmlParag an id in order to be able to jumb again to the paragraph after we finish splitting the text
  createFakeAnchor(htmlParag.id); //We go to the paragraph after we finished editing the text
  htmlParag.id = "finishedEditing";
}

/**
 * If htmlParag is not a Div, it checks each of its parents until it founds the DIV container. Otherwise, it triggers an alert message and returns 'undefined'
 * @param {HTMLElement} htmlParag - the html element within which hte cursor is placed
 * @returns {HTMLDivElement | undefined}
 */
function getHtmlRow(htmlParag: HTMLElement): HTMLDivElement | undefined | void {
  if (!htmlParag)
    return alert(
      "Make sure your cursor is within the cell/paragraph where the text is to be found"
    );
  while (
    !htmlParag.classList.contains("Row") &&
    htmlParag.parentElement &&
    htmlParag.parentElement !== containerDiv
  ) {
    htmlParag = htmlParag.parentElement;
  }
  if (htmlParag.tagName !== "DIV" || !htmlParag.classList.contains("Row"))
    return undefined;
  else return htmlParag as HTMLDivElement;
}

/**
 * Returns an array of languages based on the name of the array passed to it (if it is a reading, it returns the languages for the readings, if it is the PrayersArray, it returns the prayersLanguages)
 * @param {string} arrayName - the name of a string[][][], for which we will return the languages corresponding to it
 * @returns {string[]} - an array of languages
 */
function getLanguages(title:string): string[] {
  
  if (
    [Prefix.stPaul, Prefix.Catholicon, Prefix.praxis, Prefix.prophecies, Prefix.gospelMass, Prefix.gospelMorning, Prefix.gospelVespers, Prefix.gospelNight, Prefix.gospelVespers]
      .find(prefix => title.startsWith(prefix)))
      return [defaultLanguage, foreingLanguage].filter(lang=>lang);
  else if (title.startsWith(Prefix.synaxarium))
    return ["FR", "AR"];
  else return prayersLanguages;
}

/**
 * Converts the coptic font of the text in the selected html element, to a unicode font
 * @param {HTMLElement} htmlParag - an editable html element in which the cursor is placed, containing coptic text in a non unicode font, that we need to convert
 */
async function convertCopticFont(htmlParag?: HTMLElement, fontFrom?: string, promptAll: boolean = true, text?: string): Promise<string | void> {

  if (!fontFrom) fontFrom = prompt("Provide the font", "COPTIC1/CS_AVVA_SHENOUDA/AVVA_SHENOUDA/ATHANASIUS/NEW_ATHANASIUS");

  if (!fontFrom) return;

  if (text && fontFrom) return await convert(text);

  if (promptAll && confirm('Do you want to edit all the coptic paragraphs with the same font?')) {
    let parags = Array.from(containerDiv.querySelectorAll('P') as NodeListOf<HTMLParagraphElement>)
      .filter(p => p.lang === 'COP');

    for (let parag of parags) {
      await convertCopticFont(parag, fontFrom, false);
    }

    return

  }

  while (htmlParag.tagName !== "P" && htmlParag.parentElement)
    htmlParag = htmlParag.parentElement;

  if (!htmlParag && !text) return alert('Html element not a paragraph');


  let selected: Selection = getSelectedText();

  if (selected && !selected.isCollapsed)
    text = await convert(selected.toString()) || undefined;
  else text = await convert(htmlParag.textContent) || undefined;

  if (!text) return alert('Failed to convert the text');
  window.Selection = null;
  htmlParag.innerHTML = "";
  if (selected)
    htmlParag.textContent = htmlParag.textContent.replace(selected.toString(), text);
  else htmlParag.textContent = text

  async function convert(originalText: string) {
    let converted: string[] = [];
    let paragraphs = originalText.split('<br>');
    for (let parag of paragraphs) {
      if (!['CS_AVVA_SHENOUDA'].includes(fontFrom))
        converted.push(await convertFontWithoutAPI(parag, fontFrom));
      else converted.push(await convertFromAPI(parag) || '');
    }
    return converted.join('\n')
  }


  async function convertFromAPI(originalText: string) {
    let apiURL = new URL("https://www.copticchurch.net/coptic_language/fonts/convert");

    let init: RequestInit = {
      method: 'POST',
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Accept": "text/html",
      },

      body:
        encodeURI("from=" + fontFrom + "&encoding=unicode&action=translate&data=" + originalText)
    };

    let response = await fetch(apiURL, init);
    if (response.status !== 200)
      return console.log("error status text = ", response.statusText);

    let responseText = await response.text();

    if (!responseText) return console.log('response.text could not be retrieved');

    let textArea: HTMLElement = new DOMParser()
      .parseFromString(responseText, "text/html")
      .getElementsByTagName("textarea")[0];

    if (!textArea || !textArea.innerText)
      return console.log('Error: no textArea or textArea is empty')

    console.log("converted text = ", textArea.innerText);
    return textArea.innerText;

  };

}

/**
 * Creats and sends an XMLHttpRequest and returns the request
 * @param {string | url} url - the url of the api or the site to which the request will be sent
 * @param {Document | XMLHttpRequestBodyInit} body - the body of the request
 * @param {string} method - the method of the request
 * @param {string} contentType - the content-type header of the request
 * @param {XMLHttpRequestEventTarget["onload"]} onLoad - the function that will be associated with the onLoad property of the requsest
 * @param {string} accept - the accept header of the requsest
 * @param {string} responseType - the response type header of the requsest
 * @param {string} apiKey - the api key that needs to be sent with the requsest
 */
function sendHttpRequest(args: {
  url: string | URL,
  body?: Document | XMLHttpRequestBodyInit,
  method?: string,
  contentType?: string,
  onLoad?: XMLHttpRequestEventTarget["onload"],
  accept?: string,
  responseType?: XMLHttpRequestResponseType,
  apiKey?: string
}): XMLHttpRequest {
  (function setDefaults() {
    if (!args.method) args.method = "GET";
    if (!args.responseType) args.responseType = "text";
    if (!args.contentType) args.contentType = "application/x-www-form-urlencoded";
  })();
  let request = new XMLHttpRequest();
  request.open(args.method, args.url);
  request.setRequestHeader("Content-Type", args.contentType);
  request.setRequestHeader("accept", args.accept);
  request.responseType = args.responseType;
  if (args.apiKey) request.setRequestHeader("Api-Key", args.apiKey);
  if (args.onLoad) request.onload = args.onLoad;
  if (args.body) request.send(args.body);
  else request.send();
  return request
}

function goToTableByTitle() {
  saveModifiedArray({ exportToFile: false, exportToStorage: true });
  let title: string = "";
  //@ts-ignore
  if (containerDiv.children.length > 0 && containerDiv.children[0].dataset.root) title = containerDiv.children[0].dataset.root;

  title = prompt(
    'Provide the title you want to go to. If you want to show the readings of a given day, you provide the date of the readings in this format"ReadignsDate = [date]"',
    title
  );

  if (confirm("Do you want to edit the readings of a given date?")) {
    let date = prompt(
      "Provide the Coptic date as DDMM of the readings you want to edit"
    );
    if (!date) return;
    return editDayReadings(date);
  }

  let rows: HTMLElement[] = Array.from(
    containerDiv.querySelectorAll(".Row") as NodeListOf<HTMLElement>
  ).filter((row: HTMLElement) => row.dataset.root.includes(title));
  if (rows.length === 0) {
    startEditingMode({
      tableTitle: title,
      clear: true,
    });
    return;
  }

  if (rows.length === 0)
    return alert("Didn't find an element with the provided title");
  rows[0].id = rows[0].dataset.root + String(0);
  createFakeAnchor(rows[0].id);
}
function editNextOrPreviousTable(htmlParag: HTMLElement, next: boolean = true) {
  if (
    containerDiv.dataset.specificTables !== "true" ||
    !containerDiv.dataset.arrayName
  )
    return; //We don't run this function unless we are in the 'edinting specific table(s) mode'

  let htmlRow = getHtmlRow(htmlParag);
  if (!htmlRow) return;
  let title: string = htmlRow.dataset.root;

  if (!title)
    return alert(
      "We couldn't retrieve the data-root of the current table. Make sure the cursor is placed within one of the table's cells"
    );

  //We first save the changes to the array
  saveModifiedArray({ exportToFile: false, exportToStorage: true });

  let arrayName = containerDiv.dataset.arrayName;

  let array: string[][][] = eval(arrayName);

  let table = array.filter(
    (tbl) => splitTitle(tbl[0][0])[0] === splitTitle(title)[0]
  )[0];

  if (!table || table.length < 1)
    return alert(
      "The current table could not be retrieved from the array by its title from the data-root attribute"
    );

  array = eval(arrayName); //!CAUTION we needed to do this in order to unfilter the array again after it had been filtered (P.S.: the spread operator did'nt work)

  if (next) table = array[array.indexOf(table) + 1];
  else table = array[array.indexOf(table) - 1];

  if (!table || table.length < 1)
    return alert("The next or previous table could not be found");

  showTables({
    tablesArray: [table],
    languages: getLanguages(table[0][0]),
    position: containerDiv,
    container: containerDiv,
  });
  scrollToTop();
}

function reArangeTablesColumns(tblTitle: string, arrayName: string) {
  //@ts-ignore
  // if (!console.save) addConsoleSaveMethod(console);
  let array: string[][][] = eval(arrayName);
  let table: string[][] = array.filter((tbl) => tbl[0][0] === tblTitle)[0];
  table.forEach((row) => {
    row[row.length - 1] = row[1];
    row[1] = "";
    row.splice(1, 0, "");
    row.splice(1, 0, "");
  });
  exportToJSFile(processArrayTextForJsFile(arrayName, array), arrayName);
}

function editDayReadings(date?: string) {
  if (date) saveModifiedArray({ exportToFile: true, exportToStorage: true });

  if (!date)
    date = prompt(
      "Provide the Coptic date as DDMM of the readings you want to edit"
    );

  if (!date) return;

  let readings: string[][][] = [];

  Object.entries(ReadingsArrays).forEach((readingArray) =>
    readingArray[1]
      .filter((tbl) => tbl[0][0].includes(date)) //!This must be a filter not a find operation because the Gospel Psalm and the Gospel itself for a given day are in 2 separate tables
      .forEach((tbl) => readings.push(tbl))
  );
  if (readings.length < 1) return;

  containerDiv.innerHTML = "";
  let tblTitle: string;
  readings.forEach((tbl) => {
    if (!tbl) return;
    tblTitle = splitTitle(tbl[0][0])[0];
    startEditingMode({
      tableTitle: tblTitle,
      arrayName: PrayersArraysKeys.find((array) =>
        tblTitle.startsWith(array[0])
      )[1],
      clear: false,
      operator: { equal: true },
    });
  });

  Object.entries(ReadingsArrays)
    .forEach(readingArray => {
      readingArray[1].filter((table) => table[0][0].includes(date))
        .forEach((table) => {
          startEditingMode({
            tableTitle: splitTitle(table[0][0])[0],
            arrayName: 'ReadingsArrays.' + readingArray[0],
            clear: false,
          });
        });
    });
}


function modifyAllSelectedText() {
  let paragraph = document.getSelection().focusNode.parentElement;
  while (paragraph.tagName !== 'P' && paragraph.parentElement) paragraph = paragraph.parentElement;//We go up until we reach the parent html paragraph element
  if (!paragraph) return alert('Could not select the paragraph');
  let selected = getSelectedText();
  if (!selected) return alert("You didn't select any text");
  let text = selected.toString();
  let modified = prompt("Provide the text to replace the selected text", text);
  if (!modified || modified === text)
    return alert(
      "Either you dindn't make any change or you provided an invalide string"
    );

  let htmlRow = getHtmlRow(paragraph) as HTMLDivElement;
  if (!htmlRow || !htmlRow.dataset.arrayName)
    return alert("Couldn't retrieve the arrayName");
  let arrayName = htmlRow.dataset.arrayName;
  let index: number = Array.from(htmlRow.children).indexOf(paragraph) + 1; //! Caution: we must add 1 because index 0 is the title
  let array: string[][][] = eval(arrayName);
  if (!array) return alert("Couldn't retrive the array");

  saveModifiedArray({ exportToFile: false, exportToStorage: true });//We update the array by including what has been edited and is still displayed but not saved yet

  array.forEach((table) =>
    table.forEach((row) => {
      if (!row || !row[index] || !row[index].includes(text)) return;
      row[index] = row[index].replaceAll(text, modified);
    })
  );

  (function reloadCurrentlyEditedTables() {
    //We will reload the currently displayed table(s)

    let titles = new Set(
      Array.from(containerDiv.children as HTMLCollectionOf<HTMLDivElement>)
        .filter((htmlRow) => htmlRow.title)
        .map((htmlRow) => splitTitle(htmlRow.title)[0]));//We retrieve the titles of the all the displayed tables

    containerDiv.dataset.arrayName = '';//We do this in order to avoid that startEditingMode() triggers the alert for the user to confirm that he wants to reload another table from the sama array

    startEditingMode({
      tableTitle: Array.from(titles).join(', '),
      arrayName: arrayName,
      languages: getLanguages(PrayersArraysKeys.find(a=>a[1] === arrayName)[0]),
      clear: true
    });

  })();

}

function getSelectedText(): Selection {
  return window.getSelection();
}

/**
 * Converts the fonts of all the Coptic text paragraphs in containerDiv
 */
async function convertAllCopticParagraphsFonts(fontFrom?: string) {
  if (!fontFrom) fontFrom = prompt('Provide the font from which you want to convert the Coptic text');
  let parags = Array.from(containerDiv.querySelectorAll('P')) as HTMLParagraphElement[];
  parags = parags
    .filter(parag => parag.lang === 'COP');
  for (let parag of parags) {
    return await convertCopticFont(parag, fontFrom)
  }

}

async function _FixCopticText(htmlParag: HTMLElement) {
  if (htmlParag.tagName !== 'P') return alert('Please place the cursor in the paragraph that you want to fix');

  let font: string,
    text: string,
    parags = htmlParag.innerHTML.split('<br>');

  for (let parag of parags) {
    parags.indexOf(parag) === 1 ? font = 'ATHANASIUS' : font = 'CS_AVVA_SHENOUDA';
    text = await convertCopticFont(undefined, font, false, parag) || ''
    if (!text) alert('Conversion has failed for ' + parag);
    if (!text) continue;
    let row = addRow(htmlParag, false, htmlParag.title.replace('Diacon', 'ReadingIntro'), false);
    if (!row) return;
    (row.querySelector('p.COP') as HTMLParagraphElement).innerText = text
  }
}

async function insertReadingTextFromBible(htmlParag: HTMLElement) {
  if (!htmlParag || htmlParag.tagName !== 'P') return alert('The selected element is undefined or not a pargraph element');
  let lang = htmlParag.lang;
  if (!lang) lang = prompt('Provide the langauge', lang);
  if (lang === 'CA') lang = 'AR';

  let bible = Bibles[lang];

  if (!bible) bible = Bibles[prompt('Provide the langauge', "AR, FR, EN")];
  if (!bible) return alert('Could not retrieve the Bible');
  
  let temp = await getBibleBooksList(defaultLanguage);
  let booksList = temp?.map(book => [book.human_long, book.id]);
  if (!booksList) return;
  let select = document.createElement('select');
  select.id = 'insertReadingText';
  select.addEventListener('change', () => onChangeSelection(htmlParag));
  select.classList.add('Modal');

  booksList.forEach(book => {
    let option = document.createElement('option');
    option.value = book[1];
    option.innerText = book[0];
    select.options.add(option);
  });

  containerDiv.insertAdjacentElement('beforebegin', select);

  function onChangeSelection(parag: HTMLElement) {
    let chapterNumber = prompt("Provide the chapter number");
    if (!chapterNumber) return;
    //chapterNumber = (Number(chapterNumber) - 1).toString();
    //if (!chapterNumber) return;
    let chapter = getBibleChapter(chapterNumber, undefined, bible, select.selectedOptions[0].value);
    select.remove();
    if (!chapter) return console.log('Couldn\'t retrieve the chapter');
    let numbers = prompt("Provide verses numbers. If you want all the verses to the end, use \"End\" for the last verse");
    if (!numbers || !numbers.includes(',')) return alert('You didn\'t provide valide numbers.You must proide only 2 verses numbers spearated by \',\'');
    numbers = numbers.replaceAll(' ', '');
    let verses = numbers.split(',');
    if (verses.length !== 2) return alert('You must proide only 2 verses numbers spearated by \',\'');
    if (verses[1] === 'End') verses[1] = (chapter.length).toString();
    let firstVerse: bibleVerse = chapter.find(verse => verse[0] === verses[0]);
    if (!firstVerse) return alert('Couldn\'t find the first verse');
    let lastVerse: bibleVerse = chapter.find(verse => verse[0] === verses[1]);
    if (!lastVerse) return alert('Couldn\'t find the last verse');

    parag.innerText =
      chapter.slice(chapter.indexOf(firstVerse), chapter.indexOf(lastVerse) + 1)
        .map(verse => verse.join(''))
        .join('')
        .replaceAll('#', '');
  }
}
/**
 * Fetches any book of a given version of the Bible, if this book has no chapters (i.e., if book[1] = [])
 * @param {string|number} id - the id of the bible.com version from which the book will be retrieved
 * @param {string} lang - the language of the bible version in which we will search for books with empty chapters or, if usfm is provided, for the book with book[0].id === usfm
 * @param {string} bookIds - the usfm property of the book. If not omitted, only the book having as book[0].id property the same usfm, will be fetched 
 */
async function _replaceBooksInBible(id: string | number, lang: string, bookIds?: string[]) {
  let Bible: Bible = Bibles[lang], retrieved: bibleBook[];
  //usfm = ['ESG', 'DAG', 'SIR', 'WIS', 'BAR'];
  bookIds = ['SIR'];
  for (let book of Bible) {
    if (book[1].length > 0) continue;
    if (bookIds && !bookIds.includes(book[0].id)) continue;
    retrieved = await fetchBook(id, lang, book[0].id);
    Bible[Bible.indexOf(book)] = retrieved[0];
  }
  return Bible
  async function fetchBook(id, lang, usfm): Promise<bibleBook[]> {
    return await _fetchBibleVersesFromBibleCom(id, lang, usfm);
  }
}
/**
 * Fetches an entire Bible version or a specific book from bible.com
 * @param {string|number} id - the id of the Bible version as defined by bible.com
 * @param {string} lang - the language of the version ('AR', 'FR', 'EN', etc.)
 * @param {string} bookUsfm - the usfm of the book that needs to be fetched.
 */
async function _fetchBibleVersesFromBibleCom(id: number | string, lang: string, bookUsfm?: string): Promise<bibleBook[]> {
  type version = { name: string, id: string, usfm: string, lang: string };
  let versions: version[] =
    [
      { name: 'French Louis Segond', id: '93', usfm: 'LSG', lang: "en" },
      { name: 'French New Louis Segond', id: '104', usfm: 'NBS', lang: "en" },
      { name: 'French Louis Segond 21', id: '152', usfm: 'S21', lang: "en" },
      { name: 'French Craponne', id: '504', usfm: 'BCC1923', lang: "en" },
      { name: 'ترجمة دار الكتاب المقدس مصر', id: '13', usfm: 'AVD', lang: 'en' },
      { name: 'الترجمة العربية المشتركة مع الكتب اليونانية', id: '1665', usfm: 'المشتركة', lang: 'en' },
    ];

  let entireBible: bibleBook[] | bibleVerse[][][] = await _fetchEntireBibleVersion(versions.find(v => v.id === id.toString() || v.id === id), lang, bookUsfm) as bibleVerse[][][];

  entireBible = entireBible.filter(book => book && book.length > 0);

  entireBible = _trimSpaces(await _buildBooksFromChapters(entireBible, lang));

  return entireBible;

  async function _fetchEntireBibleVersion(version: version, lang: string, bookUsfm: string) {
    let list = await getBibleBooksList(lang);
    let entireBible: bibleVerse[][][] = [];
    if (bookUsfm) list = list.filter(book => book.id === bookUsfm);

    for (let bookKeys of list) {
      let book = await retrieveBook(bookKeys);
      entireBible.push(book);
    }
    return entireBible;

    async function retrieveBook(bookKeys: bibleBookKeys) {
      let book: bibleVerse[][] = [];
      for (let chapterNumber of bookKeys.chaptersList) {
        let chapter = await retrieveChapter(chapterNumber, bookKeys);
        book.push(chapter)
      }
      return book;


      async function retrieveChapter(chapterNumber: string, bookKeys: bibleBookKeys) {
        if (chapterNumber.includes('INTRODUCTION') || chapterNumber.toUpperCase() === bookKeys.human.toUpperCase()) chapterNumber = 'INTRO1';

        const chapter: bibleVerse[] = await fetchBookChapter(bookKeys.id, chapterNumber, version);
        return chapter;
      }

    }

    async function fetchBookChapter(bookID: string, chapterNumber: string, version: version) {

      let init: RequestInit = {
        method: 'GET',
        headers:
          { 'accept': 'application/json' },
      }

      let url = new URL(getURL(version.lang, version.id, version.id, bookID, chapterNumber));

      const response = await fetch(url, init);

      if (!response.ok) {
        console.log('response is not ok');
        return
      };

      const json = await response.json();

      return extractChapterFromJSON(json, bookID, chapterNumber);

    }

    function extractChapterFromJSON(json, bookID: string, chapterNumber: string) {
      if (!json || !json.pageProps || !json.pageProps.chapterInfo) return;
      let jsonContent: string = json.pageProps.chapterInfo.content;
      if (!jsonContent) return;
      let html = new DOMParser().parseFromString(jsonContent, 'text/html');
      if (!html) return;
      let chapter: bibleVerse[] = []
      if (!html) return;
      let div = html.querySelector('div.chapter');
      if (!div || !div.children) return;
      let paragraphs =
        Array.from(div.children)
          .filter(div => ['p', 'q', 'ipi'].map(x => div.classList.contains(x)).includes(true)) as HTMLDivElement[];

      let spans: HTMLSpanElement[],
        verses: bibleVerse[],
        label: HTMLSpanElement,
        content: string;

      chapter.push([bookID + '.' + chapterNumber]);

      paragraphs
        .forEach(div => {
          spans = Array.from(div.querySelectorAll('span.verse'));
          verses =
            spans.map(span => {
              label = span.querySelector('span.label') as HTMLSpanElement;
              content = Array.from(span.querySelectorAll('span.content')).map((span: HTMLSpanElement) => span.innerText).join('');

              if (!label || !label.innerText || !content || !content) return [''];//It means this is not a verse

              return [
                label.innerText,
                content,
              ]//We are returning a verse
            });
          verses = verses.filter(verse => verse.length > 1);
          chapter.push(...verses);//We push the verses to the chapter
          chapter.push(['\n']); //We push a new paragraph mark after the pargraph div    
        });
      return chapter
    }

    function getURL(lang: string, bibleID: string, bibleUsfm: string, bookID: string, chapterNumber: string): string {

      let chapter: string = bookID + '.' + chapterNumber + '.' + bibleUsfm, key: string = '04t0fWlBwn4WF71mJMTNU';

      return 'https://www.bible.com/_next/data/' + key + '/' + lang + '/bible/' + bibleID + '/' + chapter + '.json?versionId=' + bibleID + '&usfm=' + chapter
    }
  }

  function _trimSpaces(bible: bibleBook[]): bibleBook[] {
    bible.filter(book => book && book.length === 2)
      .forEach(book =>
        book[1].forEach(ch =>
          ch.forEach(verse => {
            if (!verse[1]) return;
            if (!verse[1].startsWith(' ')) return;
            let index = ch.indexOf(verse);
            if (ch[index - 1] && ch[index - 1].length === 1 && ch[index - 1][0] === '\n') verse[1] = verse[1].trimStart();
            else if (!ch[index - 1]) verse[1] = verse[1].trimStart();
          })
        ));
    return bible
  }
}


async function _buildBooksFromChapters(bible: bibleVerse[][][], lang: string): Promise<bibleBook[]> {
  let bookChapters: bibleVerse[][],
    firstVerses: string[],
    bookList: bibleBookKeys;

  let bookLists = await getBibleBooksList(lang);
  if (!bookLists) return;

  return bible.map(book => {
    if (!book) {
      console.log('Book is not valid or empt. Book index =', bible.indexOf(book));
      return
    };

    bookChapters = book.filter(chapter => chapter && chapter.length > 0)//we remove null values

    if (bookChapters.length < 1) return;

    firstVerses = bookChapters.map(chapter => chapter[0]).filter(verse => verse && verse[0]).map(verse => verse[0]);

    if (firstVerses.length < 1) return;

    bookList = bookLists.find(list => firstVerses[0].startsWith(list.id + '.'));

    if (!bookList) {
      console.log('bookList not found for usfm: ', book[0][0][0]);
      return
    };
    bookChapters.forEach(ch => ch.shift());
    return [
      {
        id: bookList.id,
        human: bookList.human,
        human_long: bookList.human_long,
        chaptersList: bookList.chaptersList
      },
      bookChapters
    ] as bibleBook;


  });
}


function _fixTobia(bible: Bible) {
  bible.forEach(book => {
    if (!book) return;
    if (!['JDT', 'TOB', '1MA', '2MA'].includes(book[0].id)) return;
    book[1] = book[1].map(chapt => chapt.filter(verse => verse.length > 1))

  });
  return bible;

}

async function _callFetchSynaxariumArabic() {
  for (let i = 5; i < 8; i++) {
    await _fetchSynaxariumArabic(i);
  }
  console.log(ReadingsArrays.SynaxariumArrayFR);
}

/**
 * Fetches the Synaxarium text in French from https://coptipedia.com
 */
async function _fetchSynaxariumFrench(months: string[]) {
  if (!months) months = ["50-toubah", "51-amshir", "52-baramhat"];

  let table: string[][],
    apiInitial: string =
      "https://coptipedia.com/index.php/livre-1-les-temoins-de-la-foi/le-synaxaire/",
    textContainer: HTMLElement,
    text: string;

  months.forEach(async (query) => {
    let month = copticMonths
      .indexOf(
        copticMonths.filter(
          (coptMonth) => coptMonth.FR.toLowerCase() === query.split("-")[1]
        )[0]
      )
      .toString();
    if (Number(month) < 10) month = "0" + month;
    console.log("month =", month);
    await processMonth(query, month);
  });

  async function processMonth(monthQuery: string, month) {
    if (!month) return console.log("month is undefined = ", month);

    let url = apiInitial + monthQuery + ".html"; //This will return an html page with links to all the days of the month. We will retrieve these links and fetch each of them in order to retrieve the text
    let bodyText = await fetchURL(url);
    if (!bodyText) return console.log("bodyText is undefined = ", bodyText);
    return await processResponse(
      new DOMParser().parseFromString(bodyText, "text/html"),
      month,
      monthQuery,
      url
    );
  }

  async function processResponse(
    responseDoc: Document,
    month: string,
    monthQuery: string,
    url: string
  ) {
    if (!responseDoc)
      return console.log("responseDoc is undefined = ", responseDoc);
    let anchors = responseDoc.querySelectorAll("a");

    if (!anchors) return console.log("anchors is undefined = ", anchors);
    let unique: Set<string> = new Set();
    let i: number = 1;

    Array.from(anchors)
      .filter((link: HTMLAnchorElement) =>
        link.href.includes(
          "/index.php/livre-1-les-temoins-de-la-foi/le-synaxaire/" +
          monthQuery +
          "/"
        )
      )
      .forEach(async (link) => {
        if (unique.has(link.href)) return;
        unique.add(link.href);
        console.log(link.href);
        let bodyText = await fetchURL(link.href);
        if (!bodyText) return console.log("bodyText is undefined = ", bodyText);
        let fetchedText = await editTableCell(bodyText, i++, month);
        if (fetchedText) localStorage.fetchedText += fetchedText;
      });
  }

  async function fetchURL(url: string) {
    let response = await fetch(url);
    return await response.text();
  }
  async function editTableCell(
    bodyText: string,
    i: number,
    month: string
  ): Promise<string | void> {
    let day: string = i.toString();
    if (i < 10) day = "0" + day;
    console.log("day=", day, " and month =", month);
    table = ReadingsArrays.SynaxariumArrayFR.filter((tbl) =>
      tbl[0][0].includes("&D=" + day + month)
    )[0];
    console.log("table = ", table);
    if (!table || !table[1]) return console.log("table is undefined", table);
    if (table.length === 2)
      table[1][1] = (await getText(
        new DOMParser().parseFromString(bodyText, "text/html")
      )) as string;
    else
      return await getText(
        new DOMParser().parseFromString(bodyText, "text/html")
      );
  }

  async function getText(responseDoc: Document): Promise<string | void> {
    textContainer = responseDoc.querySelector(".article-content");
    if (
      !textContainer ||
      !textContainer.children ||
      textContainer.children.length === 0
    )
      return console.log("no textContainer = ", textContainer);
    return textContainer.innerText;
  }
}

/**
 * Fetches the Synaxarium text from http://katamars.avabishoy.com/api/katamars/
 */
async function _fetchSynaxariumArabic(month: number) {
  let tbl: string[][], daystring: string, monthstring: string;
  let apiRoot = "http://katamars.avabishoy.com/api/Katamars/";
  monthstring = month.toString();
  if (month < 10) monthstring = "0" + monthstring;

  for (let day = 1; day < 31; day++) {
    daystring = day.toString();
    if (day < 10) daystring = "0" + daystring;

    tbl = ReadingsArrays.SynaxariumArrayFR.filter((tbl) =>
      tbl[0][0].includes("&D=" + daystring + monthstring)
    )[0];

    if (!tbl || tbl.length === 0) return;

    let synaxariumIndex = [
      {
        id: 1,
        title: "عيد النيروز رأس السنة القبطية. - 1 توت",
        date: null,
        story: "",
        selected: false,
        day: 1,
        month: 1,
      },
      {
        id: 2,
        title: "تذكار شفاء أيوب الصدِّيق. - 1 توت",
        date: null,
        story: "",
        selected: false,
        day: 1,
        month: 1,
      },
      {
        id: 3,
        title: "استشهاد القديس برثولماوس الرسول - 1 توت",
        date: null,
        story: "",
        selected: false,
        day: 1,
        month: 1,
      },
      {
        id: 4,
        title:
          "نياحة البابا ميليوس البطريرك الثالث من بطاركة الكرازة المرقسية - 1 توت",
        date: null,
        story: "",
        selected: false,
        day: 1,
        month: 1,
      },
      {
        id: 5,
        title:
          "نياحة البابا مرقس الخامس البطريرك الثامن والتسعين من بطاركة الكرازة المرقسية - 1 توت",
        date: null,
        story: "",
        selected: false,
        day: 1,
        month: 1,
      },
      {
        id: 6,
        title: "استشهاد القديس يوحنا المعمدان - 2 توت",
        date: null,
        story: "",
        selected: false,
        day: 2,
        month: 1,
      },
      {
        id: 7,
        title: "استشهاد القديس داسيه الجُندي - 2 توت",
        date: null,
        story: "",
        selected: false,
        day: 2,
        month: 1,
      },
      {
        id: 8,
        title:
          "اجتماع مجمع بمدينة الإسكندرية في عهد البابا ديونيسيوس بشأن خلود النفس - 3 توت",
        date: null,
        story: "",
        selected: false,
        day: 3,
        month: 1,
      },
      {
        id: 9,
        title: "نياحة القديسة ثيئودورة التائبة - 3 توت",
        date: null,
        story: "",
        selected: false,
        day: 3,
        month: 1,
      },
      {
        id: 10,
        title: "تذكار يشوع بن نون - 4 توت",
        date: null,
        story: "",
        selected: false,
        day: 4,
        month: 1,
      },
      {
        id: 11,
        title:
          "نياحة البابا مكاريوس الثاني البطريرك التاسع والستون من بطاركة الكرازة المرقسية - 4 توت",
        date: null,
        story: "",
        selected: false,
        day: 4,
        month: 1,
      },
      {
        id: 12,
        title: "نياحة القديسة فيرينا - 4 توت",
        date: null,
        story: "",
        selected: false,
        day: 4,
        month: 1,
      },
      {
        id: 13,
        title: "استشهاد القديسة صوفيا - 5 توت",
        date: null,
        story: "",
        selected: false,
        day: 5,
        month: 1,
      },
      {
        id: 14,
        title: "استشهاد إشعياء النبي بن آموص - 6 توت",
        date: null,
        story: "",
        selected: false,
        day: 6,
        month: 1,
      },
      {
        id: 15,
        title: "استشهاد القديسة باشيلية أو باسيليا - 6 توت",
        date: null,
        story: "",
        selected: false,
        day: 6,
        month: 1,
      },
      {
        id: 16,
        title:
          "نياحة البابا ديوسقوروس البطريرك الخامس والعشرين من بطاركة الكرازة المرقسية - 7 توت",
        date: null,
        story: "",
        selected: false,
        day: 7,
        month: 1,
      },
      {
        id: 17,
        title:
          "نياحة البابا يوأنس الثاني عشر البطريرك الثالث والتسعين من بطاركة الكرازة المرقسية - 7 توت",
        date: null,
        story: "",
        selected: false,
        day: 7,
        month: 1,
      },
      {
        id: 18,
        title:
          "استشهاد القديسة رفقة وأولادها الخمسة أغاثون وبطرس ويوحنا وآمون وآمونة - 7 توت",
        date: null,
        story: "",
        selected: false,
        day: 7,
        month: 1,
      },
      {
        id: 19,
        title: "نياحة القديس سوريانوس أسقف جبلة - 7 توت",
        date: null,
        story: "",
        selected: false,
        day: 7,
        month: 1,
      },
      {
        id: 20,
        title: "نياحة موسى النبي - 8 توت",
        date: null,
        story: "",
        selected: false,
        day: 8,
        month: 1,
      },
      {
        id: 21,
        title: "استشهاد زكريا الكاهن - 8 توت",
        date: null,
        story: "",
        selected: false,
        day: 8,
        month: 1,
      },
      {
        id: 22,
        title: "استشهاد القديس ديميدس القس - 8 توت",
        date: null,
        story: "",
        selected: false,
        day: 8,
        month: 1,
      },
      {
        id: 23,
        title: "استشهاد الأب القديس الأنبا بيسورة الأسقف - 9 توت",
        date: null,
        story: "",
        selected: false,
        day: 9,
        month: 1,
      },
      {
        id: 24,
        title: "استشهاد الأسقفين الجليلين بيلوس ونيليوس - 9 توت",
        date: null,
        story: "",
        selected: false,
        day: 9,
        month: 1,
      },
      {
        id: 25,
        title: "استشهاد القديسين يوأنس المصري وزملائه - 10 توت",
        date: null,
        story: "",
        selected: false,
        day: 10,
        month: 1,
      },
      {
        id: 26,
        title: "استشهاد القديسة مطرونة - 10 توت",
        date: null,
        story: "",
        selected: false,
        day: 10,
        month: 1,
      },
      {
        id: 27,
        title: "تذكار استشهاد القديسة باسين وأولادها الثلاثة - 10 توت",
        date: null,
        story: "",
        selected: false,
        day: 10,
        month: 1,
      },
      {
        id: 28,
        title: "استشهاد القديس واسيليدس الوزير - 11 توت",
        date: null,
        story: "",
        selected: false,
        day: 11,
        month: 1,
      },
      {
        id: 29,
        title: "استشهاد الثلاثة فلاحين بإسنا - 11 توت",
        date: null,
        story: "",
        selected: false,
        day: 11,
        month: 1,
      },
      {
        id: 30,
        title: "تذكار رئيس الملائكة الجليل ميخائيل - 12 توت",
        date: null,
        story: "",
        selected: false,
        day: 12,
        month: 1,
      },
      {
        id: 31,
        title: "تذكار انعقاد المجمع المسكوني بأفسس - 12 توت",
        date: null,
        story: "",
        selected: false,
        day: 12,
        month: 1,
      },
      {
        id: 32,
        title: "نقل أعضاء القديسين إقليمس وأصحابه - 12 توت",
        date: null,
        story: "",
        selected: false,
        day: 12,
        month: 1,
      },
      {
        id: 33,
        title:
          "تذكار الأعجوبة التي صنعها القديس باسيليوس الكبير أسقف قيصارية الكبادوك - 13 توت",
        date: null,
        story: "",
        selected: false,
        day: 13,
        month: 1,
      },
      {
        id: 34,
        title:
          "نياحة البابا متاؤس الثاني البطريرك التسعين من بطاركة الكرازة المرقسية - 13 توت",
        date: null,
        story: "",
        selected: false,
        day: 13,
        month: 1,
      },
      {
        id: 35,
        title: "نياحة القديس أغاثون العمودي - 14 توت",
        date: null,
        story: "",
        selected: false,
        day: 14,
        month: 1,
      },
      {
        id: 36,
        title:
          "استشهاد القديس فيلكس وريجولا أخته والقديس أكسيوبرانتيوس - 14 توت",
        date: null,
        story: "",
        selected: false,
        day: 14,
        month: 1,
      },
      {
        id: 37,
        title: "نقل جسد القديس إسطفانوس - 15 توت",
        date: null,
        story: "",
        selected: false,
        day: 15,
        month: 1,
      },
      {
        id: 38,
        title: "نياحة الأنبا أثناسيوس القوصي - 15 توت",
        date: null,
        story: "",
        selected: false,
        day: 15,
        month: 1,
      },
      {
        id: 39,
        title: " تكريس كنيسة القيامة بأورشليم - 16 توت",
        date: null,
        story: "",
        selected: false,
        day: 16,
        month: 1,
      },
      {
        id: 40,
        title: "تذكار الاحتفال بالصليب المجيد في كنيسة القيامة - 17 توت",
        date: null,
        story: "",
        selected: false,
        day: 17,
        month: 1,
      },
      {
        id: 41,
        title: "استشهاد القديس قسطور القس - 17 توت",
        date: null,
        story: "",
        selected: false,
        day: 17,
        month: 1,
      },
      {
        id: 42,
        title: "نياحة القديسة ثاؤغنسطا - 17 توت",
        date: null,
        story: "",
        selected: false,
        day: 17,
        month: 1,
      },
      {
        id: 43,
        title: "نياحة القديس المعلم جرجس الجوهري - 17 توت",
        date: null,
        story: "",
        selected: false,
        day: 17,
        month: 1,
      },
      {
        id: 44,
        title: "ثاني يوم عيد الصليب - 18 توت",
        date: null,
        story: "",
        selected: false,
        day: 18,
        month: 1,
      },
      {
        id: 45,
        title: "استشهاد القديس بروفوريوس - 18 توت",
        date: null,
        story: "",
        selected: false,
        day: 18,
        month: 1,
      },
      {
        id: 46,
        title: "استشهاد القديس إسطفانوس القس والقديسة نيكيتي - 18 توت",
        date: null,
        story: "",
        selected: false,
        day: 18,
        month: 1,
      },
      {
        id: 47,
        title: "اليوم الثالث من أيام عيد الصليب المجيد - 19 توت",
        date: null,
        story: "",
        selected: false,
        day: 19,
        month: 1,
      },
      {
        id: 48,
        title: "تذكار إصعاد القديس غريغوريوس الأرمني من الجب - 19 توت",
        date: null,
        story: "",
        selected: false,
        day: 19,
        month: 1,
      },
      {
        id: 49,
        title: "نياحة القديسة ثاؤبستى - 20 توت",
        date: null,
        story: "",
        selected: false,
        day: 20,
        month: 1,
      },
      {
        id: 50,
        title:
          "نياحة البابا أثناسيوس الثاني البطريرك الثامن والعشرين من بطاركة الكرازة المرقسية - 20 توت",
        date: null,
        story: "",
        selected: false,
        day: 20,
        month: 1,
      },
      {
        id: 51,
        title: "استشهاد القديسة ملاتينى العذراء - 20 توت",
        date: null,
        story: "",
        selected: false,
        day: 20,
        month: 1,
      },
      {
        id: 52,
        title: "تذكار والدة الإله القديسة مريم - 21 توت",
        date: null,
        story: "",
        selected: false,
        day: 21,
        month: 1,
      },
      {
        id: 53,
        title: "استشهاد القديس كبريانوس الأسقف والقديسة يوستينة - 21 توت",
        date: null,
        story: "",
        selected: false,
        day: 21,
        month: 1,
      },
      {
        id: 54,
        title: "استشهاد القديسين كوتلاس وأكسوا أخته وتاتاس صديقه - 22 توت",
        date: null,
        story: "",
        selected: false,
        day: 22,
        month: 1,
      },
      {
        id: 55,
        title:
          "استشهاد القديس يوليوس الأقفهصى كاتب سِيَر الشهداء ومن معه - 22 توت",
        date: null,
        story: "",
        selected: false,
        day: 22,
        month: 1,
      },
      {
        id: 56,
        title: "استشهاد القديسين أونانيوس وأندراوس أخيه - 23 توت",
        date: null,
        story: "",
        selected: false,
        day: 23,
        month: 1,
      },
      {
        id: 57,
        title: "تذكار القديسة الشهيدة تكلا - 23 توت",
        date: null,
        story: "",
        selected: false,
        day: 23,
        month: 1,
      },
      {
        id: 58,
        title: "استشهاد القديس كودارتوس أحد السبعين رسولاً وتلميذاً - 24 توت",
        date: null,
        story: "",
        selected: false,
        day: 24,
        month: 1,
      },
      {
        id: 59,
        title: "نياحة القديس غريغوريوس الثيئولوغوس - 24 توت",
        date: null,
        story: "",
        selected: false,
        day: 24,
        month: 1,
      },
      {
        id: 60,
        title: "نياحة القديس غريغوريوس الراهب - 24 توت",
        date: null,
        story: "",
        selected: false,
        day: 24,
        month: 1,
      },
      {
        id: 61,
        title: "تذكار نياحة يونان النبي - 25 توت",
        date: null,
        story: "",
        selected: false,
        day: 25,
        month: 1,
      },
      {
        id: 62,
        title: "استشهاد القديس موريس قائد الفرقة الطيبية - 25 توت",
        date: null,
        story: "",
        selected: false,
        day: 25,
        month: 1,
      },
      {
        id: 63,
        title: "بشارة زكريا الكاهن بميلاد يوحنا المعمدان - 26 توت",
        date: null,
        story: "",
        selected: false,
        day: 26,
        month: 1,
      },
      {
        id: 64,
        title: "استشهاد القديس أسطاثيوس وولديه وزوجته - 27 توت",
        date: null,
        story: "",
        selected: false,
        day: 27,
        month: 1,
      },
      {
        id: 65,
        title:
          "استشهاد القديسين أبادير وإيرائى ( بعض المصادر تذكر اسم إيرينى بدلاً من إيرائى) أخته - 28 توت",
        date: null,
        story: "",
        selected: false,
        day: 28,
        month: 1,
      },
      {
        id: 66,
        title: "تذكار الأعياد الثلاثة السيدية الكبرى - 29 توت",
        date: null,
        story: "",
        selected: false,
        day: 29,
        month: 1,
      },
      {
        id: 67,
        title: "استشهاد القديسة أربسيما ومن معها - 29 توت",
        date: null,
        story: "",
        selected: false,
        day: 29,
        month: 1,
      },
      {
        id: 68,
        title: "استشهاد القديسة فبرونيا - 29 توت",
        date: null,
        story: "",
        selected: false,
        day: 29,
        month: 1,
      },
      {
        id: 69,
        title:
          "تذكار المعجزة التي صنعها الرب مع القديس أثناسيوس الرسولي - 30 توت",
        date: null,
        story: "",
        selected: false,
        day: 30,
        month: 1,
      },
      {
        id: 70,
        title: "استشهاد القديسة أنسطاسيه - 1 بابه",
        date: null,
        story: "",
        selected: false,
        day: 1,
        month: 2,
      },
      {
        id: 71,
        title: "تذكار مجيء القديس ساويرس بطريرك أنطاكية إلى مصر - 2 بابه",
        date: null,
        story: "",
        selected: false,
        day: 2,
        month: 2,
      },
      {
        id: 72,
        title:
          "نياحة البابا سيمون الثاني البطريرك الحادي والخمسون من بطاركة الكرازة المرقسية - 3 بابه",
        date: null,
        story: "",
        selected: false,
        day: 3,
        month: 2,
      },
      {
        id: 73,
        title: "استشهاد القديسين أورسوس وبقطر من الفرقة الطيبية - 3 بابه",
        date: null,
        story: "",
        selected: false,
        day: 3,
        month: 2,
      },
      {
        id: 74,
        title: "استشهاد القديس يوحنا الجُندي الأشروبي - 3 بابه",
        date: null,
        story: "",
        selected: false,
        day: 3,
        month: 2,
      },
      {
        id: 75,
        title: "نياحة القديسة ثيئودورا الملكة - 3 بابه",
        date: null,
        story: "",
        selected: false,
        day: 3,
        month: 2,
      },
      {
        id: 76,
        title: "استشهاد القديس واخس رفيق القديس سرجيوس - 4 بابه",
        date: null,
        story: "",
        selected: false,
        day: 4,
        month: 2,
      },
      {
        id: 77,
        title: "استشهاد القديس بولس بطريرك القسطنطينية - 5 بابه",
        date: null,
        story: "",
        selected: false,
        day: 5,
        month: 2,
      },
      {
        id: 78,
        title: "نياحة الأنبا بطرس أسقف البهنسا - 5 بابه",
        date: null,
        story: "",
        selected: false,
        day: 5,
        month: 2,
      },
      {
        id: 79,
        title: "نياحة الصديقة حَنَّة أم صموئيل النبي - 6 بابه",
        date: null,
        story: "",
        selected: false,
        day: 6,
        month: 2,
      },
      {
        id: 80,
        title: "نياحة القديس الأنبا بولا الطموهي - 7 بابه",
        date: null,
        story: "",
        selected: false,
        day: 7,
        month: 2,
      },
      {
        id: 81,
        title: "استشهاد القديس مطرا - 8 بابه",
        date: null,
        story: "",
        selected: false,
        day: 8,
        month: 2,
      },
      {
        id: 82,
        title: "استشهاد القديسين أباهور وطوسيا وأولادهما - 8 بابه",
        date: null,
        story: "",
        selected: false,
        day: 8,
        month: 2,
      },
      {
        id: 83,
        title: "نياحة القديس الأنبا أغاثون المتوحد - 8 بابه",
        date: null,
        story: "",
        selected: false,
        day: 8,
        month: 2,
      },
      {
        id: 84,
        title:
          "نياحة البابا أومانيوس البطريرك السابع من بطاركة الكرازة المرقسية - 9 بابه",
        date: null,
        story: "",
        selected: false,
        day: 9,
        month: 2,
      },
      {
        id: 85,
        title: "تذكار استشهاد القديس سمعان الأسقف ورفقائه - 9 بابه",
        date: null,
        story: "",
        selected: false,
        day: 9,
        month: 2,
      },
      {
        id: 86,
        title: "استشهاد القديس سرجيوس رفيق واخس - 10 بابه",
        date: null,
        story: "",
        selected: false,
        day: 10,
        month: 2,
      },
      {
        id: 87,
        title: "نياحة الأنبا يعقوب بطريرك أنطاكية - 11 بابه",
        date: null,
        story: "",
        selected: false,
        day: 11,
        month: 2,
      },
      {
        id: 88,
        title: "نياحة القديسة بيلاجية التائبة - 11 بابه",
        date: null,
        story: "",
        selected: false,
        day: 11,
        month: 2,
      },
      {
        id: 89,
        title: "تذكار رئيس الملائكة الجليل ميخائيل - 12 بابه",
        date: null,
        story: "",
        selected: false,
        day: 12,
        month: 2,
      },
      {
        id: 90,
        title: "استشهاد القديس متى الإنجيلي المبشر - 12 بابه",
        date: null,
        story: "",
        selected: false,
        day: 12,
        month: 2,
      },
      {
        id: 91,
        title:
          "نياحة البابا القديس ديمتريوس الكرام البطريرك الثاني عشر من بطاركة الكرازة المرقسية - 12 بابه",
        date: null,
        story: "",
        selected: false,
        day: 12,
        month: 2,
      },
      {
        id: 92,
        title: "نياحة القديس زكريا الراهب - 13 بابه",
        date: null,
        story: "",
        selected: false,
        day: 13,
        month: 2,
      },
      {
        id: 93,
        title: "نياحة القديس فيلبس أحد الشمامسة السبعة - 14 بابه",
        date: null,
        story: "",
        selected: false,
        day: 14,
        month: 2,
      },
      {
        id: 94,
        title: "استشهاد بندلائيمون الطبيب - 15 بابه",
        date: null,
        story: "",
        selected: false,
        day: 15,
        month: 2,
      },
      {
        id: 95,
        title:
          "نياحة القديس البابا الأنبا أغاثون، البطريرك التاسع والثلاثون من بطاركة الكرازة المرقسية - 16 بابه",
        date: null,
        story: "",
        selected: false,
        day: 16,
        month: 2,
      },
      {
        id: 96,
        title: "تذكار القديسين كاربوس وأبولوس وبطرس - 16 بابه",
        date: null,
        story: "",
        selected: false,
        day: 16,
        month: 2,
      },
      {
        id: 97,
        title:
          "نياحة البابا الأنبا ديوسقوروس الثاني البطريرك الحادي والثلاثين من بطاركة الكرازة المرقسية - 17 بابه",
        date: null,
        story: "",
        selected: false,
        day: 17,
        month: 2,
      },
      {
        id: 98,
        title:
          "نياحة البابا القديس ثاؤفيلس البطريرك الثالث والعشرين من بطاركة الكرازة المرقسية - 18 بابه",
        date: null,
        story: "",
        selected: false,
        day: 18,
        month: 2,
      },
      {
        id: 99,
        title: "استشهاد القديس ثاؤفيلس وزوجته بالفيوم - 19 بابه",
        date: null,
        story: "",
        selected: false,
        day: 19,
        month: 2,
      },
      {
        id: 100,
        title: "عقد مجمع بأنطاكية لمحاكمة بولس الساموساطي - 19 بابه",
        date: null,
        story: "",
        selected: false,
        day: 19,
        month: 2,
      },
      {
        id: 101,
        title: "نياحة القديس يوحنا القصير - 20 بابه",
        date: null,
        story: "",
        selected: false,
        day: 20,
        month: 2,
      },
      {
        id: 102,
        title: "التذكار الشهري لوالدة الإله القديسة العذراء مريم - 21 بابه",
        date: null,
        story: "",
        selected: false,
        day: 21,
        month: 2,
      },
      {
        id: 103,
        title: "نياحة يوئيل النبي - 21 بابه",
        date: null,
        story: "",
        selected: false,
        day: 21,
        month: 2,
      },
      {
        id: 104,
        title: "نقل جسد لعازر حبيب الرب - 21 بابه",
        date: null,
        story: "",
        selected: false,
        day: 21,
        month: 2,
      },
      {
        id: 105,
        title: "نياحة القديس الأنبا رويس - 21 بابه",
        date: null,
        story: "",
        selected: false,
        day: 21,
        month: 2,
      },
      {
        id: 106,
        title: "استشهاد القديس لوقا الإنجيلي - 22 بابه",
        date: null,
        story: "",
        selected: false,
        day: 22,
        month: 2,
      },
      {
        id: 107,
        title: "استشهاد القديس ديونيسيوس أسقف كورنثوس - 23 بابه",
        date: null,
        story: "",
        selected: false,
        day: 23,
        month: 2,
      },
      {
        id: 108,
        title:
          "نياحة البابا يوساب الأول البطريرك الثاني والخمسين من بطاركة الكرازة المرقسية - 23 بابه",
        date: null,
        story: "",
        selected: false,
        day: 23,
        month: 2,
      },
      {
        id: 109,
        title: "نياحة القديس إيلاريون الكبير الراهب - 24 بابه",
        date: null,
        story: "",
        selected: false,
        day: 24,
        month: 2,
      },
      {
        id: 110,
        title: "استشهاد القديسين بولس ولُونجينوس ودينة - 24 بابه",
        date: null,
        story: "",
        selected: false,
        day: 24,
        month: 2,
      },
      {
        id: 111,
        title: "نياحة القديس أبيب صديق القديس أبوللو - 25 بابه",
        date: null,
        story: "",
        selected: false,
        day: 25,
        month: 2,
      },
      {
        id: 112,
        title: "تكريس كنيسة الشهيد يوليوس الأقفهصي كاتب سير الشهداء - 25 بابه",
        date: null,
        story: "",
        selected: false,
        day: 25,
        month: 2,
      },
      {
        id: 113,
        title:
          "استشهاد القديس تيمون الرسول، أحد السبعين، وأحد الشمامسة السبعة - 26 بابه",
        date: null,
        story: "",
        selected: false,
        day: 26,
        month: 2,
      },
      {
        id: 114,
        title: "تذكار السبعة الشهداء بجبل أنطونيوس - 26 بابه",
        date: null,
        story: "",
        selected: false,
        day: 26,
        month: 2,
      },
      {
        id: 115,
        title: "استشهاد القديس مكاريوس أسقف قاو - 27 بابه",
        date: null,
        story: "",
        selected: false,
        day: 27,
        month: 2,
      },
      {
        id: 116,
        title: "استشهاد القديسين مركيانوس ومركوريوس - 28 بابه",
        date: null,
        story: "",
        selected: false,
        day: 28,
        month: 2,
      },
      {
        id: 117,
        title:
          'تذكار الأعياد الثلاثة السيدية " البشارة والميلاد والقيامة " - 29 بابه',
        date: null,
        story: "",
        selected: false,
        day: 29,
        month: 2,
      },
      {
        id: 118,
        title: "استشهاد القديس ديمتريوس التسالونيكي - 29 بابه",
        date: null,
        story: "",
        selected: false,
        day: 29,
        month: 2,
      },
      {
        id: 119,
        title:
          "نياحة البابا القديس غبريال السابع البطريرك الخامس والتسعين من بطاركة الكرازة المرقسية - 29 بابه",
        date: null,
        story: "",
        selected: false,
        day: 29,
        month: 2,
      },
      {
        id: 120,
        title:
          "ظهور رأس القديس مار مرقس الإنجيلي الرسول، وتكريس كنيسته - 30 بابه",
        date: null,
        story: "",
        selected: false,
        day: 30,
        month: 2,
      },
      {
        id: 121,
        title: "نياحة القديس إبراهيم المنوفي المتوحد - 30 بابه",
        date: null,
        story: "",
        selected: false,
        day: 30,
        month: 2,
      },
      {
        id: 122,
        title: "استشهاد القديس كليوباس الرسول أحد تلميذي عمواس - 1 هاتور",
        date: null,
        story: "",
        selected: false,
        day: 1,
        month: 3,
      },
      {
        id: 123,
        title: "استشهاد القديس كيرياكوس أسقف أورشليم ووالدته - 1 هاتور",
        date: null,
        story: "",
        selected: false,
        day: 1,
        month: 3,
      },
      {
        id: 124,
        title: "استشهاد القديسين مكسيموس ونوميتيوس وبقطر وفيلبس - 1 هاتور",
        date: null,
        story: "",
        selected: false,
        day: 1,
        month: 3,
      },
      {
        id: 125,
        title: "استشهاد القديسة أنسطاسية الكبيرة، والقديس كيرلس - 1 هاتور",
        date: null,
        story: "",
        selected: false,
        day: 1,
        month: 3,
      },
      {
        id: 126,
        title:
          "نياحة البابا بطرس الثالث البطريرك السابع والعشرين من بطاركة الكرازة المرقسية - 2 هاتور",
        date: null,
        story: "",
        selected: false,
        day: 2,
        month: 3,
      },
      {
        id: 127,
        title: "استشهاد القديس مقار الليـبي - 2 هاتور",
        date: null,
        story: "",
        selected: false,
        day: 2,
        month: 3,
      },
      {
        id: 128,
        title: "نياحة القديس أفراميوس الرهاوى - 2 هاتور",
        date: null,
        story: "",
        selected: false,
        day: 2,
        month: 3,
      },
      {
        id: 129,
        title: "استشهاد القديس أثناسيوس وأخته إيرينى - 3 هاتور",
        date: null,
        story: "",
        selected: false,
        day: 3,
        month: 3,
      },
      {
        id: 130,
        title: "استشهاد القديس أغاثون - 3 هاتور",
        date: null,
        story: "",
        selected: false,
        day: 3,
        month: 3,
      },
      {
        id: 131,
        title: "نياحة القديس كيرياكوس من أهل كورنثوس - 3 هاتور",
        date: null,
        story: "",
        selected: false,
        day: 3,
        month: 3,
      },
      {
        id: 132,
        title: "استشهاد القديسين يوحنا ويعقوب أسقفيّ فارس - 4 هاتور",
        date: null,
        story: "",
        selected: false,
        day: 4,
        month: 3,
      },
      {
        id: 133,
        title: "استشهاد الأنبا توماس الأسقف - 4 هاتور",
        date: null,
        story: "",
        selected: false,
        day: 4,
        month: 3,
      },
      {
        id: 134,
        title: "استشهاد القديسَيْن أبيماخوس وعزاريانوس - 4 هاتور",
        date: null,
        story: "",
        selected: false,
        day: 4,
        month: 3,
      },
      {
        id: 135,
        title: "ظهور رأس القديس لُونجينوس الجُندي - 5 هاتور",
        date: null,
        story: "",
        selected: false,
        day: 5,
        month: 3,
      },
      {
        id: 136,
        title: "استشهاد القديس تيموثاوس وزوجته مورا - 5 هاتور",
        date: null,
        story: "",
        selected: false,
        day: 5,
        month: 3,
      },
      {
        id: 137,
        title: "نقل جسد الأمير تادرس الشُطبى إلى بلدة شُطب - 5 هاتور",
        date: null,
        story: "",
        selected: false,
        day: 5,
        month: 3,
      },
      {
        id: 138,
        title: "نياحة القديس يوساب بجبل شامة - 5 هاتور",
        date: null,
        story: "",
        selected: false,
        day: 5,
        month: 3,
      },
      {
        id: 139,
        title:
          "تذكار تكريس كنيسة القديسة العذراء – الأثرية – بدير المحرق العامر بجبل قسقام - 6 هاتور",
        date: null,
        story: "",
        selected: false,
        day: 6,
        month: 3,
      },
      {
        id: 140,
        title: "نياحة القديس فيلكس بابا رومية - 6 هاتور",
        date: null,
        story: "",
        selected: false,
        day: 6,
        month: 3,
      },
      {
        id: 141,
        title: "تكريس كنيسة الشهيد العظيم مار جرجس الروماني باللدّ - 7 هاتور",
        date: null,
        story: "",
        selected: false,
        day: 7,
        month: 3,
      },
      {
        id: 142,
        title: "استشهاد القديس مار جرجس الإسكندري - 7 هاتور",
        date: null,
        story: "",
        selected: false,
        day: 7,
        month: 3,
      },
      {
        id: 143,
        title: "استشهاد الأنبا نهروه - 7 هاتور",
        date: null,
        story: "",
        selected: false,
        day: 7,
        month: 3,
      },
      {
        id: 144,
        title: "استشهاد القديسين أكبسيما وإيتالا ويوسف - 7 هاتور",
        date: null,
        story: "",
        selected: false,
        day: 7,
        month: 3,
      },
      {
        id: 145,
        title: "نياحة القديس الأنبا مينا أسقف تمي الأمديد - 7 هاتور",
        date: null,
        story: "",
        selected: false,
        day: 7,
        month: 3,
      },
      {
        id: 146,
        title: "تذكار الأربعة مخلوقات الحية غير المتجسدين - 8 هاتور",
        date: null,
        story: "",
        selected: false,
        day: 8,
        month: 3,
      },
      {
        id: 147,
        title: "استشهاد القديس نيكاندروس كاهن ميرا - 8 هاتور",
        date: null,
        story: "",
        selected: false,
        day: 8,
        month: 3,
      },
      {
        id: 148,
        title: "نياحة الأب بيريّوس مدير مدرسة الإسكندرية اللاهوتية - 8 هاتور",
        date: null,
        story: "",
        selected: false,
        day: 8,
        month: 3,
      },
      {
        id: 149,
        title: "اجتماع مجمع نيقية المسكونى الأول - 9 هاتور",
        date: null,
        story: "",
        selected: false,
        day: 9,
        month: 3,
      },
      {
        id: 150,
        title:
          "نياحة البابا إسحاق البطريرك الحادي والأربعين من بطاركة الكرازة المرقسية - 9 هاتور",
        date: null,
        story: "",
        selected: false,
        day: 9,
        month: 3,
      },
      {
        id: 151,
        title: "استشهاد العذارى الخمسين وأمهن - 10 هاتور",
        date: null,
        story: "",
        selected: false,
        day: 10,
        month: 3,
      },
      {
        id: 152,
        title:
          "اجتماع مجمع بروما بسبب عيد الغطاس المجيد والصوم الكبير - 10 هاتور",
        date: null,
        story: "",
        selected: false,
        day: 10,
        month: 3,
      },
      {
        id: 153,
        title: "نياحة القديسة حَنّة والدة القديسة العذراء مريم - 11 هاتور",
        date: null,
        story: "",
        selected: false,
        day: 11,
        month: 3,
      },
      {
        id: 154,
        title: "استشهاد القديس ميخائيل الراهب - 11 هاتور",
        date: null,
        story: "",
        selected: false,
        day: 11,
        month: 3,
      },
      {
        id: 155,
        title: "استشهاد القديسَيْن أرشيلاؤس وأليشع القمص - 11 هاتور",
        date: null,
        story: "",
        selected: false,
        day: 11,
        month: 3,
      },
      {
        id: 156,
        title: "تذكار رئيس الملائكة الجليل ميخائيل رئيس جند الرب - 12 هاتور",
        date: null,
        story: "",
        selected: false,
        day: 12,
        month: 3,
      },
      {
        id: 157,
        title: "نياحة القديس يوحنا السرياني - 12 هاتور",
        date: null,
        story: "",
        selected: false,
        day: 12,
        month: 3,
      },
      {
        id: 158,
        title: "تذكار رئيس الملائكة الجليل جبرائيل - 13 هاتور",
        date: null,
        story: "",
        selected: false,
        day: 13,
        month: 3,
      },
      {
        id: 159,
        title:
          "نياحة البابا الأنبا زخارياس البطريرك الرابع والستين من بطاركة الكرازة المرقسية - 13 هاتور",
        date: null,
        story: "",
        selected: false,
        day: 13,
        month: 3,
      },
      {
        id: 160,
        title: "استشهاد القديس تادرس تيرو - 13 هاتور",
        date: null,
        story: "",
        selected: false,
        day: 13,
        month: 3,
      },
      {
        id: 161,
        title: "نياحة الأنبا تيموثاوس أسقف أنصنا - 13 هاتور",
        date: null,
        story: "",
        selected: false,
        day: 13,
        month: 3,
      },
      {
        id: 162,
        title: "نياحة الأنبا يوساب بجبل الأساس - 13 هاتور",
        date: null,
        story: "",
        selected: false,
        day: 13,
        month: 3,
      },
      {
        id: 163,
        title: "نياحة القديس مرتينوس أسقف ثراكي - 14 هاتور",
        date: null,
        story: "",
        selected: false,
        day: 14,
        month: 3,
      },
      {
        id: 164,
        title: "استشهاد الضابط فاروس ومعلّميه - 14 هاتور",
        date: null,
        story: "",
        selected: false,
        day: 14,
        month: 3,
      },
      {
        id: 165,
        title: "استشهاد القديس مار مينا العجائبى - 15 هاتور",
        date: null,
        story: "",
        selected: false,
        day: 15,
        month: 3,
      },
      {
        id: 166,
        title: "نياحة القديس يوحنا الربان - 15 هاتور",
        date: null,
        story: "",
        selected: false,
        day: 15,
        month: 3,
      },
      {
        id: 167,
        title:
          " بدء صوم الميلاد في كنيستنا القبطية الأرثوذكسية ( كانت مدة هذا الصوم أربعين يوماً، وأُضيفت إليه الثلاثة أيام التي صامها الإكليروس والشعب عند حدوث معجزة نقل جبل المقطم في عهد البابا أبرآم بن زرعة في القرن العاشر الميلادي، فأصبحت مدة الصوم 43 يوماً). - 16 هاتور",
        date: null,
        story: "",
        selected: false,
        day: 16,
        month: 3,
      },
      {
        id: 168,
        title: "تكريس كنيسة القديس أبى نُفر السائح - 16 هاتور",
        date: null,
        story: "",
        selected: false,
        day: 16,
        month: 3,
      },
      {
        id: 169,
        title: "استشهاد القديس يسطس الأسقف - 16 هاتور",
        date: null,
        story: "",
        selected: false,
        day: 16,
        month: 3,
      },
      {
        id: 170,
        title:
          "نياحة البابا مينا الثاني البطريرك الحادي والستين من بطاركة الكرازة المرقسية - 16 هاتور",
        date: null,
        story: "",
        selected: false,
        day: 16,
        month: 3,
      },
      {
        id: 171,
        title: "نياحة القديس نيلس السينائى - 16 هاتور",
        date: null,
        story: "",
        selected: false,
        day: 16,
        month: 3,
      },
      {
        id: 172,
        title: "نياحة القديس يوحنا ذهبي الفم - 17 هاتور",
        date: null,
        story: "",
        selected: false,
        day: 17,
        month: 3,
      },
      {
        id: 173,
        title: "نياحة القديس بولس بجبل دنفيق - 17 هاتور",
        date: null,
        story: "",
        selected: false,
        day: 17,
        month: 3,
      },
      {
        id: 174,
        title: "استشهاد القديس فيلبس الرسول - 18 هاتور",
        date: null,
        story: "",
        selected: false,
        day: 18,
        month: 3,
      },
      {
        id: 175,
        title: "استشهاد القديستين أدروسيس ويوأنا - 18 هاتور",
        date: null,
        story: "",
        selected: false,
        day: 18,
        month: 3,
      },
      {
        id: 176,
        title: "تذكار معجزة نقل الجبل المقطم - 18 هاتور",
        date: null,
        story: "",
        selected: false,
        day: 18,
        month: 3,
      },
      {
        id: 177,
        title: "تكريس كنيسة سرجيوس وواخس – بالرصافة - 19 هاتور",
        date: null,
        story: "",
        selected: false,
        day: 19,
        month: 3,
      },
      {
        id: 178,
        title: "استشهاد القديس أبيبوس - 19 هاتور",
        date: null,
        story: "",
        selected: false,
        day: 19,
        month: 3,
      },
      {
        id: 179,
        title:
          "نياحة القديس إنيانوس البطريرك الثاني من بطاركة الكرازة المرقسية - 20 هاتور",
        date: null,
        story: "",
        selected: false,
        day: 20,
        month: 3,
      },
      {
        id: 180,
        title:
          "تكريس بيعتي الأمير تادرس الشُطبى والأمير تادرس المشرقي - 20 هاتور",
        date: null,
        story: "",
        selected: false,
        day: 20,
        month: 3,
      },
      {
        id: 181,
        title: "تذكار نياحة القديسة مريم العذراء والدة الإله - 21 هاتور",
        date: null,
        story: "",
        selected: false,
        day: 21,
        month: 3,
      },
      {
        id: 182,
        title: "نياحة القديس غريغوريوس العجائبى - 21 هاتور",
        date: null,
        story: "",
        selected: false,
        day: 21,
        month: 3,
      },
      {
        id: 183,
        title:
          "نياحة البابا قسما الثاني البطريرك الرابع والخمسين من بطاركة الكرازة المرقسية - 21 هاتور",
        date: null,
        story: "",
        selected: false,
        day: 21,
        month: 3,
      },
      {
        id: 184,
        title: "نياحة القديس يوحنا التبايسي بجبل أسيوط - 21 هاتور",
        date: null,
        story: "",
        selected: false,
        day: 21,
        month: 3,
      },
      {
        id: 185,
        title:
          "تذكار القديسين حلفا وزكا ورومانوس ويوحنا الشهداء. وتذكار القديسين توما وبقطر وإسحاق من الأشمونين - 21 هاتور",
        date: null,
        story: "",
        selected: false,
        day: 21,
        month: 3,
      },
      {
        id: 186,
        title:
          "نقل جسد القديس الأنبا يحنس كاما من ديره إلى دير السريان - 21 هاتور",
        date: null,
        story: "",
        selected: false,
        day: 21,
        month: 3,
      },
      {
        id: 187,
        title: "استشهاد القديسين قزمان ودميان وإخوتهما وأمهما - 22 هاتور",
        date: null,
        story: "",
        selected: false,
        day: 22,
        month: 3,
      },
      {
        id: 188,
        title: "نياحة القديس كرنيليوس قائد المائة - 23 هاتور",
        date: null,
        story: "",
        selected: false,
        day: 23,
        month: 3,
      },
      {
        id: 189,
        title: "تذكار تكريس كنيسة القديسة مارينا الشهيدة - 23 هاتور",
        date: null,
        story: "",
        selected: false,
        day: 23,
        month: 3,
      },
      {
        id: 190,
        title: "تذكار الأربعة والعشرين قسيساً غير الجسدانيين - 24 هاتور",
        date: null,
        story: "",
        selected: false,
        day: 24,
        month: 3,
      },
      {
        id: 191,
        title: "استشهاد الأسقف نارسيس والقديسة تكلا - 24 هاتور",
        date: null,
        story: "",
        selected: false,
        day: 24,
        month: 3,
      },
      {
        id: 192,
        title: "نياحة البابا بروكلس بطريرك القسطنطينية - 24 هاتور",
        date: null,
        story: "",
        selected: false,
        day: 24,
        month: 3,
      },
      {
        id: 193,
        title: "استشهاد القديس مرقوريوس الشهير بأبي سيفين - 25 هاتور",
        date: null,
        story: "",
        selected: false,
        day: 25,
        month: 3,
      },
      {
        id: 194,
        title: "استشهاد القديس بالاريانوس وأخيه تيبورينوس - 26 هاتور",
        date: null,
        story: "",
        selected: false,
        day: 26,
        month: 3,
      },
      {
        id: 195,
        title: "نياحة القديس غريغوريوس النيصي أسقف نيصص - 26 هاتور",
        date: null,
        story: "",
        selected: false,
        day: 26,
        month: 3,
      },
      {
        id: 196,
        title: "استشهاد القديس يعقوب الفارسي المقطع - 27 هاتور",
        date: null,
        story: "",
        selected: false,
        day: 27,
        month: 3,
      },
      {
        id: 197,
        title: "تكريس كنيسة الشهيد بقطر بن رومانوس - 27 هاتور",
        date: null,
        story: "",
        selected: false,
        day: 27,
        month: 3,
      },
      {
        id: 198,
        title: "استشهاد القديس صرابامون أسقف نيقيوس - 28 هاتور",
        date: null,
        story: "",
        selected: false,
        day: 28,
        month: 3,
      },
      {
        id: 199,
        title:
          'تذكار الأعياد الثلاثة السيدية الكبرى " البشارة والميلاد والقيامة " - 29 هاتور',
        date: null,
        story: "",
        selected: false,
        day: 29,
        month: 3,
      },
      {
        id: 200,
        title:
          'استشهاد البابا بطرس " خاتم الشهداء " البطريرك السابع عشر من بطاركة الكرسي المرقسي - 29 هاتور',
        date: null,
        story: "",
        selected: false,
        day: 29,
        month: 3,
      },
      {
        id: 201,
        title: "استشهاد القديس إكليمنضس الأول بابا روما - 29 هاتور",
        date: null,
        story: "",
        selected: false,
        day: 29,
        month: 3,
      },
      {
        id: 202,
        title: "استشهاد القديسة كاترين الإسكندرانية - 29 هاتور",
        date: null,
        story: "",
        selected: false,
        day: 29,
        month: 3,
      },
      {
        id: 203,
        title: "استشهاد القديس مكاريوس - 30 هاتور",
        date: null,
        story: "",
        selected: false,
        day: 30,
        month: 3,
      },
      {
        id: 204,
        title: "استشهاد الراهب القديس يوحنا القليوبي - 30 هاتور",
        date: null,
        story: "",
        selected: false,
        day: 30,
        month: 3,
      },
      {
        id: 205,
        title: "نياحة القديس أكاكيوس بطريرك القسطنطينية - 30 هاتور",
        date: null,
        story: "",
        selected: false,
        day: 30,
        month: 3,
      },
      {
        id: 206,
        title: "تكريس بيعة القديسين قزمان ودميان وإخوتهما وأمهم - 30 هاتور",
        date: null,
        story: "",
        selected: false,
        day: 30,
        month: 3,
      },
      {
        id: 207,
        title:
          "نياحة البابا يوأنس الثالث البطريرك الأربعين من بطاركة الكرازة المرقسية - 1 كيهك",
        date: null,
        story: "",
        selected: false,
        day: 1,
        month: 4,
      },
      {
        id: 208,
        title:
          "نياحة البابا أثناسيوس الثالث البطريرك السادس والسبعين من بطاركة الكرازة المرقسية - 1 كيهك",
        date: null,
        story: "",
        selected: false,
        day: 1,
        month: 4,
      },
      {
        id: 209,
        title: "نياحة القديس بطرس الرهاوي ( أسقف غزة ) - 1 كيهك",
        date: null,
        story: "",
        selected: false,
        day: 1,
        month: 4,
      },
      {
        id: 210,
        title:
          "تكريس كنيسة الشهيد أبى فام الجُندي الطحاوي ببلدة أبنوب - 1 كيهك",
        date: null,
        story: "",
        selected: false,
        day: 1,
        month: 4,
      },
      {
        id: 211,
        title: "تكريس كنيسة القديس العظيم الأنبا شنودة رئيس المتوحدين - 1 كيهك",
        date: null,
        story: "",
        selected: false,
        day: 1,
        month: 4,
      },
      {
        id: 212,
        title: "نياحة القديس أباهور الراهب - 2 كيهك",
        date: null,
        story: "",
        selected: false,
        day: 2,
        month: 4,
      },
      {
        id: 213,
        title: "نياحة القديس الأنبا هورمينا السائح - 2 كيهك",
        date: null,
        story: "",
        selected: false,
        day: 2,
        month: 4,
      },
      {
        id: 214,
        title: "تذكار تقديم القديسة العذراء مريم إلى الهيكل بأورشليم - 3 كيهك",
        date: null,
        story: "",
        selected: false,
        day: 3,
        month: 4,
      },
      {
        id: 215,
        title: " استشهاد القديس بسطفروس ( صليب الجديد ) - 3 كيهك",
        date: null,
        story: "",
        selected: false,
        day: 3,
        month: 4,
      },
      {
        id: 216,
        title: "استشهاد القديس أندراوس أحد الاثنى عشر رسولاً - 4 كيهك",
        date: null,
        story: "",
        selected: false,
        day: 4,
        month: 4,
      },
      {
        id: 217,
        title:
          "تذكار تكريس كنيسة القديس مار يوحنا الهرقلي بأم القصور بمنفلوط - 4 كيهك",
        date: null,
        story: "",
        selected: false,
        day: 4,
        month: 4,
      },
      {
        id: 218,
        title: "تذكار نقل جسديّ القديسين الأنبا بيشوي والأنبا بولا - 4 كيهك",
        date: null,
        story: "",
        selected: false,
        day: 4,
        month: 4,
      },
      {
        id: 219,
        title: "نياحة ناحوم النبي - 5 كيهك",
        date: null,
        story: "",
        selected: false,
        day: 5,
        month: 4,
      },
      {
        id: 220,
        title: "استشهاد القديس بقطر الذي من أسيوط - 5 كيهك",
        date: null,
        story: "",
        selected: false,
        day: 5,
        month: 4,
      },
      {
        id: 221,
        title: "استشهاد القديس إيسوذوروس - 5 كيهك",
        date: null,
        story: "",
        selected: false,
        day: 5,
        month: 4,
      },
      {
        id: 222,
        title:
          "نياحة البابا أبرآم بن زرعة البطريرك الثاني والستين من بطاركة الكرازة المرقسية - 6 كيهك",
        date: null,
        story: "",
        selected: false,
        day: 6,
        month: 4,
      },
      {
        id: 223,
        title: "استشهاد القديس باطلس القس - 6 كيهك",
        date: null,
        story: "",
        selected: false,
        day: 6,
        month: 4,
      },
      {
        id: 224,
        title: "نياحة القديس متاؤس الفاخوري بجبل أصفون بإسنا - 7 كيهك",
        date: null,
        story: "",
        selected: false,
        day: 7,
        month: 4,
      },
      {
        id: 225,
        title: "استشهاد القديسين بانينا وباناوا - 7 كيهك",
        date: null,
        story: "",
        selected: false,
        day: 7,
        month: 4,
      },
      {
        id: 226,
        title: "تذكار تكريس كنيسة الشهيد أبسخيرون القليني - 7 كيهك",
        date: null,
        story: "",
        selected: false,
        day: 7,
        month: 4,
      },
      {
        id: 227,
        title: "نياحة القديس يوحنا أسقف أرمنت - 7 كيهك",
        date: null,
        story: "",
        selected: false,
        day: 7,
        month: 4,
      },
      {
        id: 228,
        title: "استشهاد المهندس القبطي النابغة سعيد بن كاتب الفرغاني - 7 كيهك",
        date: null,
        story: "",
        selected: false,
        day: 7,
        month: 4,
      },
      {
        id: 229,
        title: "استشهاد القديس إيسي وتكلا أخته - 8 كيهك",
        date: null,
        story: "",
        selected: false,
        day: 8,
        month: 4,
      },
      {
        id: 230,
        title: "استشهاد القديستين بربارة ويوليانة - 8 كيهك",
        date: null,
        story: "",
        selected: false,
        day: 8,
        month: 4,
      },
      {
        id: 231,
        title: "نياحة القديس الأنبا صموئيل المعترف - 8 كيهك",
        date: null,
        story: "",
        selected: false,
        day: 8,
        month: 4,
      },
      {
        id: 232,
        title:
          "نياحة البابا ياروكلاس البطريرك الثالث عشر من بطاركة الكرازة المرقسية - 8 كيهك",
        date: null,
        story: "",
        selected: false,
        day: 8,
        month: 4,
      },
      {
        id: 234,
        title: "نياحة القديس بيمن المعترف - 9 كيهك",
        date: null,
        story: "",
        selected: false,
        day: 9,
        month: 4,
      },
      {
        id: 235,
        title: "نياحة القديس نيقولاوس أسقف مورا - 10 كيهك",
        date: null,
        story: "",
        selected: false,
        day: 10,
        month: 4,
      },
      {
        id: 236,
        title: "استشهاد القديس شورة من أهل أخميم - 10 كيهك",
        date: null,
        story: "",
        selected: false,
        day: 10,
        month: 4,
      },
      {
        id: 237,
        title: "تذكار نقل جسد القديس ساويرس بطريرك أنطاكية - 10 كيهك",
        date: null,
        story: "",
        selected: false,
        day: 10,
        month: 4,
      },
      {
        id: 238,
        title: "نياحة القديس الأنبا بيجيمي السائح - 11 كيهك",
        date: null,
        story: "",
        selected: false,
        day: 11,
        month: 4,
      },
      {
        id: 239,
        title: "استشهاد القديس أبطلماوس من أهل دندرة - 11 كيهك",
        date: null,
        story: "",
        selected: false,
        day: 11,
        month: 4,
      },
      {
        id: 240,
        title:
          "تذكار تكريس كنيسة القديس إقلاديوس بناحية باقور أبو تيج - 11 كيهك",
        date: null,
        story: "",
        selected: false,
        day: 11,
        month: 4,
      },
      {
        id: 241,
        title: "تذكار رئيس الملائكة الطاهر ميخائيل - 12 كيهك",
        date: null,
        story: "",
        selected: false,
        day: 12,
        month: 4,
      },
      {
        id: 242,
        title: "نياحة القديس الأنبا هدرا الأسواني - 12 كيهك",
        date: null,
        story: "",
        selected: false,
        day: 12,
        month: 4,
      },
      {
        id: 243,
        title: "نياحة القديس يوحنا المعترف - 12 كيهك",
        date: null,
        story: "",
        selected: false,
        day: 12,
        month: 4,
      },
      {
        id: 244,
        title: "انعقاد مجمع برومية على نوباطس القس - 12 كيهك",
        date: null,
        story: "",
        selected: false,
        day: 12,
        month: 4,
      },
      {
        id: 245,
        title:
          "تذكار تكريس كنيسة رئيس الملائكة الجليل رافائيل بالقسطنطينية - 13 كيهك",
        date: null,
        story: "",
        selected: false,
        day: 13,
        month: 4,
      },
      {
        id: 246,
        title: "استشهاد القديس برشنوفيوس الراهب - 13 كيهك",
        date: null,
        story: "",
        selected: false,
        day: 13,
        month: 4,
      },
      {
        id: 247,
        title:
          "نياحة البابا مرقس الثامن البطريرك المائة وثمانية من بطاركة الكرسي المرقسي - 13 كيهك",
        date: null,
        story: "",
        selected: false,
        day: 13,
        month: 4,
      },
      {
        id: 248,
        title: "نياحة الأب إبراكيوس - 13 كيهك",
        date: null,
        story: "",
        selected: false,
        day: 13,
        month: 4,
      },
      {
        id: 249,
        title: "نياحة القديس إيليا السائح - 13 كيهك",
        date: null,
        story: "",
        selected: false,
        day: 13,
        month: 4,
      },
      {
        id: 250,
        title: "تكريس كنيسة القديس ميصائيل السائح - 13 كيهك",
        date: null,
        story: "",
        selected: false,
        day: 13,
        month: 4,
      },
      {
        id: 251,
        title: "استشهاد القديس بهنام وسارة أخته - 14 كيهك",
        date: null,
        story: "",
        selected: false,
        day: 14,
        month: 4,
      },
      {
        id: 252,
        title: "استشهاد القديس الأنبا أمونيوس أسقف إسنا - 14 كيهك",
        date: null,
        story: "",
        selected: false,
        day: 14,
        month: 4,
      },
      {
        id: 253,
        title:
          "استشهاد القديسين سمعان المنوفي وأباهور وأبا مينا الشيخ - 14 كيهك",
        date: null,
        story: "",
        selected: false,
        day: 14,
        month: 4,
      },
      {
        id: 254,
        title:
          "نياحة البابا خرستوذولوس البطريرك السادس والستين من بطاركة الكرازة المرقسية - 14 كيهك",
        date: null,
        story: "",
        selected: false,
        day: 14,
        month: 4,
      },
      {
        id: 255,
        title: "نياحة القديس خرستوذولوس السائح - 14 كيهك",
        date: null,
        story: "",
        selected: false,
        day: 14,
        month: 4,
      },
      {
        id: 256,
        title: "نياحة القديس غريغوريوس بطريرك الأرمن - 15 كيهك",
        date: null,
        story: "",
        selected: false,
        day: 15,
        month: 4,
      },
      {
        id: 257,
        title: "نياحة القديس لوكاس العمودي - 15 كيهك",
        date: null,
        story: "",
        selected: false,
        day: 15,
        month: 4,
      },
      {
        id: 258,
        title: "نياحة القديس الأنبا حزقيال من أرمنت - 15 كيهك",
        date: null,
        story: "",
        selected: false,
        day: 15,
        month: 4,
      },
      {
        id: 259,
        title: "نياحة البار جدعون أحد قضاة بنى إسرائيل - 16 كيهك",
        date: null,
        story: "",
        selected: false,
        day: 16,
        month: 4,
      },
      {
        id: 260,
        title: "استشهاد القديسين هرواج وحنانيا وخوزى الذين من أخميم  - 16 كيهك",
        date: null,
        story: "",
        selected: false,
        day: 16,
        month: 4,
      },
      {
        id: 261,
        title:
          "استشهاد القديسين أولوجيوس وأرسانيوس صاحبيّ دير الحديد بأخميم - 16 كيهك",
        date: null,
        story: "",
        selected: false,
        day: 16,
        month: 4,
      },
      {
        id: 262,
        title: "استشهاد القديس إمساح القفطي - 16 كيهك",
        date: null,
        story: "",
        selected: false,
        day: 16,
        month: 4,
      },
      {
        id: 263,
        title: "تكريس كنيسة القديس يعقوب الفارسي الشهير بالمقطع - 16 كيهك",
        date: null,
        story: "",
        selected: false,
        day: 16,
        month: 4,
      },
      {
        id: 264,
        title: "تذكار نقل جسد القديس لوكاس العمودي - 17 كيهك",
        date: null,
        story: "",
        selected: false,
        day: 17,
        month: 4,
      },
      {
        id: 265,
        title:
          "نياحة القديس إيلياس بجبل بِشْوَاو ( جبل بشْوَاو قريب من جبل الأساس الذي من نقادة حتى الجبل الغربي تجاه القصر، بمحافظة قنا) - 17 كيهك",
        date: null,
        story: "",
        selected: false,
        day: 17,
        month: 4,
      },
      {
        id: 266,
        title: "نقل جسد القديس تيطس أسقف كريت إلى القسطنطينية - 18 كيهك",
        date: null,
        story: "",
        selected: false,
        day: 18,
        month: 4,
      },
      {
        id: 267,
        title: "استشهاد القديسين ياروكلاس وفليمون - 18 كيهك",
        date: null,
        story: "",
        selected: false,
        day: 18,
        month: 4,
      },
      {
        id: 268,
        title:
          "نياحة البابا غبريال السادس البطريرك الحادي والتسعين من بطاركة الكرازة المرقسية - 19 كيهك",
        date: null,
        story: "",
        selected: false,
        day: 19,
        month: 4,
      },
      {
        id: 269,
        title: "نياحة الأنبا يوحنا أسقف البُرلُّس – جامع السنكسار - 19 كيهك",
        date: null,
        story: "",
        selected: false,
        day: 19,
        month: 4,
      },
      {
        id: 270,
        title: "نياحة حَجِّي النبي - 20 كيهك",
        date: null,
        story: "",
        selected: false,
        day: 20,
        month: 4,
      },
      {
        id: 271,
        title: "استشهاد الأنبا إيلياس أسقف دير المحرق والقوصية - 20 كيهك",
        date: null,
        story: "",
        selected: false,
        day: 20,
        month: 4,
      },
      {
        id: 272,
        title: "تذكار والدة الإله القديسة الطاهرة مريم العذراء - 21 كيهك",
        date: null,
        story: "",
        selected: false,
        day: 21,
        month: 4,
      },
      {
        id: 273,
        title: "استشهاد القديس برنابا أحد السبعين رسولاً - 21 كيهك",
        date: null,
        story: "",
        selected: false,
        day: 21,
        month: 4,
      },
      {
        id: 274,
        title: "تذكار الملاك الجليل غبريال المُبشر - 22 كيهك",
        date: null,
        story: "",
        selected: false,
        day: 22,
        month: 4,
      },
      {
        id: 275,
        title: "استشهاد القديس باخوم وضالوشام أخته - 22 كيهك",
        date: null,
        story: "",
        selected: false,
        day: 22,
        month: 4,
      },
      {
        id: 276,
        title:
          "نياحة البابا أنسطاسيوس البطريرك السادس والثلاثين من بطاركة الكرازة المرقسية - 22 كيهك",
        date: null,
        story: "",
        selected: false,
        day: 22,
        month: 4,
      },
      {
        id: 277,
        title: "نياحة داود النبي والملك - 23 كيهك",
        date: null,
        story: "",
        selected: false,
        day: 23,
        month: 4,
      },
      {
        id: 278,
        title: "نياحة القديس تيموثاوس السائح - 23 كيهك",
        date: null,
        story: "",
        selected: false,
        day: 23,
        month: 4,
      },
      {
        id: 279,
        title:
          "استشهاد القديس أغناطيوس الثيئوفوروس ( ثيئوفوروس: كلمة تعنى حامل الإله أو المتوشح بالإله) أسقف أنطاكية - 24 كيهك",
        date: null,
        story: "",
        selected: false,
        day: 24,
        month: 4,
      },
      {
        id: 280,
        title: "نياحة القديس الأنبا يحنس كاما القس - 25 كيهك",
        date: null,
        story: "",
        selected: false,
        day: 25,
        month: 4,
      },
      {
        id: 281,
        title: "نياحة القديس الأنبا بشاي بجبل الطود - 25 كيهك",
        date: null,
        story: "",
        selected: false,
        day: 25,
        month: 4,
      },
      {
        id: 282,
        title: "استشهاد القديسة أنسطاسيه - 26 كيهك",
        date: null,
        story: "",
        selected: false,
        day: 26,
        month: 4,
      },
      {
        id: 283,
        title: "تكريس كنيسة الشهيدين أنبا بشاي وأنبا بطرس - 26 كيهك",
        date: null,
        story: "",
        selected: false,
        day: 26,
        month: 4,
      },
      {
        id: 284,
        title: "استشهاد القديس الأنبا بساده أسقف أبصاي - 27 كيهك",
        date: null,
        story: "",
        selected: false,
        day: 27,
        month: 4,
      },
      {
        id: 285,
        title: "برمون عيد الميلاد المجيد - 28 كيهك",
        date: null,
        story: "",
        selected: false,
        day: 28,
        month: 4,
      },
      {
        id: 286,
        title: "استشهاد 150 رجلاً، و24 امرأة من مدينة أنصنا - 28 كيهك",
        date: null,
        story: "",
        selected: false,
        day: 28,
        month: 4,
      },
      {
        id: 287,
        title: "عيد الميلاد المجيد - 29 كيهك",
        date: null,
        story: "",
        selected: false,
        day: 29,
        month: 4,
      },
      {
        id: 288,
        title: "تذكار شهداء أخميم - 29 كيهك",
        date: null,
        story: "",
        selected: false,
        day: 29,
        month: 4,
      },
      {
        id: 289,
        title: "نياحة القديس يوأنس قمص شيهيت - 30 كيهك",
        date: null,
        story: "",
        selected: false,
        day: 30,
        month: 4,
      },
      {
        id: 290,
        title: "سجود المجوس للمخلص - 30 كيهك",
        date: null,
        story: "",
        selected: false,
        day: 30,
        month: 4,
      },
      {
        id: 291,
        title: "استشهاد القديس القمص ميخائيل الطوخي - 30 كيهك",
        date: null,
        story: "",
        selected: false,
        day: 30,
        month: 4,
      },
      {
        id: 292,
        title: "استشهاد الطفل زكريا ومن معه بأخميم - 30 كيهك",
        date: null,
        story: "",
        selected: false,
        day: 30,
        month: 4,
      },
      {
        id: 293,
        title: "استشهاد القديس إسطفانوس رئيس الشمامسة - 1 طوبه",
        date: null,
        story: "",
        selected: false,
        day: 1,
        month: 5,
      },
      {
        id: 294,
        title: "استشهاد القديس لاونديانوس - 1 طوبه",
        date: null,
        story: "",
        selected: false,
        day: 1,
        month: 5,
      },
      {
        id: 295,
        title: "استشهاد القديسين ديوسقوروس وأخيه سكلابيوس - 1 طوبه",
        date: null,
        story: "",
        selected: false,
        day: 1,
        month: 5,
      },
      {
        id: 296,
        title:
          "نياحة الأنبا ثاؤناس البطريرك السادس عشر من بطاركة الكرازة المرقسية - 2 طوبه",
        date: null,
        story: "",
        selected: false,
        day: 2,
        month: 5,
      },
      {
        id: 297,
        title: "استشهاد القديس غللينيكوس أسقف أوسيم - 2 طوبه",
        date: null,
        story: "",
        selected: false,
        day: 2,
        month: 5,
      },
      {
        id: 298,
        title: "نياحة القديس الأنبا يونا - 2 طوبه",
        date: null,
        story: "",
        selected: false,
        day: 2,
        month: 5,
      },
      {
        id: 299,
        title: "استشهاد أطفال بيت لحم - 3 طوبه",
        date: null,
        story: "",
        selected: false,
        day: 3,
        month: 5,
      },
      {
        id: 300,
        title: "نياحة القديس يوحنا الإنجيلي - 4 طوبه",
        date: null,
        story: "",
        selected: false,
        day: 4,
        month: 5,
      },
      {
        id: 301,
        title: "استشهاد القديس أوساغنيوس الجُندي - 5 طوبه",
        date: null,
        story: "",
        selected: false,
        day: 5,
        month: 5,
      },
      {
        id: 302,
        title: "استشهاد القديس بانيكاروس - 5 طوبه",
        date: null,
        story: "",
        selected: false,
        day: 5,
        month: 5,
      },
      {
        id: 303,
        title:
          "نياحة البابا ثيئودوسيوس الثاني البطريرك التاسع والسبعين من بطاركة الكرازة المرقسية - 5 طوبه",
        date: null,
        story: "",
        selected: false,
        day: 5,
        month: 5,
      },
      {
        id: 304,
        title:
          "نياحة البابا متاؤس الأول البطريرك السابع والثمانين من بطاركة الكرازة المرقسية - 5 طوبه",
        date: null,
        story: "",
        selected: false,
        day: 5,
        month: 5,
      },
      {
        id: 305,
        title: "عيد الختان المجيد - 6 طوبه",
        date: null,
        story: "",
        selected: false,
        day: 6,
        month: 5,
      },
      {
        id: 306,
        title: "تذكار صعود إيليا النبي إلى السماء حياً - 6 طوبه",
        date: null,
        story: "",
        selected: false,
        day: 6,
        month: 5,
      },
      {
        id: 307,
        title: "استشهاد الأربعة أراخنة بإسنا - 6 طوبه",
        date: null,
        story: "",
        selected: false,
        day: 6,
        month: 5,
      },
      {
        id: 308,
        title:
          "نياحة البابا مركيانوس البطريرك الثامن من بطاركة الكرازة المرقسية - 6 طوبه",
        date: null,
        story: "",
        selected: false,
        day: 6,
        month: 5,
      },
      {
        id: 309,
        title:
          "نياحة البابا مرقس البطريرك الثالث والسبعين من بطاركة الكرازة المرقسية - 6 طوبه",
        date: null,
        story: "",
        selected: false,
        day: 6,
        month: 5,
      },
      {
        id: 310,
        title:
          "نياحة البابا غبريال الثالث البطريرك السابع والسبعين من بطاركة الكرازة المرقسية - 6 طوبه",
        date: null,
        story: "",
        selected: false,
        day: 6,
        month: 5,
      },
      {
        id: 311,
        title:
          "نياحة القديس باسيليوس الكبير رئيس أساقفة قيصرية الكبادوك - 6 طوبه",
        date: null,
        story: "",
        selected: false,
        day: 6,
        month: 5,
      },
      {
        id: 312,
        title: "تكريس كنيسة الشهيد إسحاق الدفراوي - 6 طوبه",
        date: null,
        story: "",
        selected: false,
        day: 6,
        month: 5,
      },
      {
        id: 313,
        title: "نياحة القديس سلفستروس بابا روما - 7 طوبه",
        date: null,
        story: "",
        selected: false,
        day: 7,
        month: 5,
      },
      {
        id: 314,
        title: "عودة رأس القديس مار مرقس الرسول - 8 طوبه",
        date: null,
        story: "",
        selected: false,
        day: 8,
        month: 5,
      },
      {
        id: 315,
        title:
          "نياحة البابا أندرونيقوس البطريرك السابع والثلاثين من بطاركة الكرازة المرقسية - 8 طوبه",
        date: null,
        story: "",
        selected: false,
        day: 8,
        month: 5,
      },
      {
        id: 316,
        title:
          "نياحة البابا بنيامين الأول البطريرك الثامن والثلاثين من بطاركة الكرازة المرقسية - 8 طوبه",
        date: null,
        story: "",
        selected: false,
        day: 8,
        month: 5,
      },
      {
        id: 317,
        title:
          "نياحة البابا غبريال الخامس البطريرك الثامن والثمانين من بطاركة الكرازة المرقسية - 8 طوبه",
        date: null,
        story: "",
        selected: false,
        day: 8,
        month: 5,
      },
      {
        id: 318,
        title: "تذكار تكريس كنيسة القديس مكاريوس الكبير - 8 طوبه",
        date: null,
        story: "",
        selected: false,
        day: 8,
        month: 5,
      },
      {
        id: 319,
        title: "نياحة القديس أبرآم رفيق الأنبا جاورجي - 9 طوبه",
        date: null,
        story: "",
        selected: false,
        day: 9,
        month: 5,
      },
      {
        id: 320,
        title: "نياحة القديس أنبا فيس - 9 طوبه",
        date: null,
        story: "",
        selected: false,
        day: 9,
        month: 5,
      },
      {
        id: 321,
        title: "برمون عيد الغطاس المجيد - 10 طوبه",
        date: null,
        story: "",
        selected: false,
        day: 10,
        month: 5,
      },
      {
        id: 322,
        title: "نياحة القديس يسطس تلميذ الأنبا صموئيل المعترف - 10 طوبه",
        date: null,
        story: "",
        selected: false,
        day: 10,
        month: 5,
      },
      {
        id: 323,
        title: "عيد الظهور الإلهي ( الغطاس المجيد ) - 11 طوبه",
        date: null,
        story: "",
        selected: false,
        day: 11,
        month: 5,
      },
      {
        id: 324,
        title:
          "نياحة البابا يوأنس السادس البطريرك الرابع والسبعين من بطاركة الكرازة المرقسية - 11 طوبه",
        date: null,
        story: "",
        selected: false,
        day: 11,
        month: 5,
      },
      {
        id: 325,
        title:
          "نياحة البابا بنيامين الثاني البطريرك الثاني والثمانين من بطاركة الكرازة المرقسية - 11 طوبه",
        date: null,
        story: "",
        selected: false,
        day: 11,
        month: 5,
      },
      {
        id: 326,
        title: "ثاني أيام عيد الغطاس المجيد - 12 طوبه",
        date: null,
        story: "",
        selected: false,
        day: 12,
        month: 5,
      },
      {
        id: 327,
        title: "تذكار رئيس الملائكة الجليل ميخائيل - 12 طوبه",
        date: null,
        story: "",
        selected: false,
        day: 12,
        month: 5,
      },
      {
        id: 328,
        title: "استشهاد القديس تادرس المشرقي - 12 طوبه",
        date: null,
        story: "",
        selected: false,
        day: 12,
        month: 5,
      },
      {
        id: 329,
        title: "استشهاد القديس أناطوليوس - 12 طوبه",
        date: null,
        story: "",
        selected: false,
        day: 12,
        month: 5,
      },
      {
        id: 330,
        title: "عيد عرس قانا الجليل - 13 طوبه",
        date: null,
        story: "",
        selected: false,
        day: 13,
        month: 5,
      },
      {
        id: 331,
        title: "استشهاد القديسة دميانة - 13 طوبه",
        date: null,
        story: "",
        selected: false,
        day: 13,
        month: 5,
      },
      {
        id: 332,
        title: "نياحة القديس ثاؤفيلس الراهب - 13 طوبه",
        date: null,
        story: "",
        selected: false,
        day: 13,
        month: 5,
      },
      {
        id: 333,
        title: "نياحة القديس أرشليدس الراهب - 14 طوبه",
        date: null,
        story: "",
        selected: false,
        day: 14,
        month: 5,
      },
      {
        id: 334,
        title:
          "استشهاد القديسة مُهْراتي ( مُهْراتي: كان للقديسة مهراتي اسم آخر هو مُهْرابيل) - 14 طوبه",
        date: null,
        story: "",
        selected: false,
        day: 14,
        month: 5,
      },
      {
        id: 335,
        title: "نياحة القديس مكسيموس أخى دوماديوس - 14 طوبه",
        date: null,
        story: "",
        selected: false,
        day: 14,
        month: 5,
      },
      {
        id: 336,
        title: "نياحة عوبديا النبي - 15 طوبه",
        date: null,
        story: "",
        selected: false,
        day: 15,
        month: 5,
      },
      {
        id: 337,
        title: "استشهاد القديس فيلوثيئوس - 16 طوبه",
        date: null,
        story: "",
        selected: false,
        day: 16,
        month: 5,
      },
      {
        id: 338,
        title:
          "نياحة البابا يوأنس الرابع البطريرك الثامن والأربعين من بطاركة الكرازة المرقسية - 16 طوبه",
        date: null,
        story: "",
        selected: false,
        day: 16,
        month: 5,
      },
      {
        id: 339,
        title: "نياحة القديس دوماديوس أخي القديس مكسيموس - 17 طوبه",
        date: null,
        story: "",
        selected: false,
        day: 17,
        month: 5,
      },
      {
        id: 340,
        title: "نياحة القديس الأنبا يوساب الأبحّ أسقف جرجا - 17 طوبه",
        date: null,
        story: "",
        selected: false,
        day: 17,
        month: 5,
      },
      {
        id: 341,
        title: "نياحة القديس يعقوب أسقف نصيبين - 18 طوبه",
        date: null,
        story: "",
        selected: false,
        day: 18,
        month: 5,
      },
      {
        id: 342,
        title: "تذكار مريم ومرثا أختيّ لعازر الحبيب - 18 طوبه",
        date: null,
        story: "",
        selected: false,
        day: 18,
        month: 5,
      },
      {
        id: 343,
        title: "نياحة الأنبا أندراس الشهير بـ ( أبو الليف ) - 18 طوبه",
        date: null,
        story: "",
        selected: false,
        day: 18,
        month: 5,
      },
      {
        id: 344,
        title: "اكتشاف أعضاء القديسين أباهور وبيسوري وأمبيرة أمهما - 19 طوبه",
        date: null,
        story: "",
        selected: false,
        day: 19,
        month: 5,
      },
      {
        id: 345,
        title: "نياحة القديس بروخورس أحد السبعين رسولاً - 20 طوبه",
        date: null,
        story: "",
        selected: false,
        day: 20,
        month: 5,
      },
      {
        id: 346,
        title: "استشهاد القديس أبا كلوج القس - 20 طوبه",
        date: null,
        story: "",
        selected: false,
        day: 20,
        month: 5,
      },
      {
        id: 347,
        title: "استشهاد القديس بهناو - 20 طوبه",
        date: null,
        story: "",
        selected: false,
        day: 20,
        month: 5,
      },
      {
        id: 348,
        title: "تذكار تكريس كنيسة القديس يوحنا صاحب الإنجيل الذهب - 20 طوبه",
        date: null,
        story: "",
        selected: false,
        day: 20,
        month: 5,
      },
      {
        id: 349,
        title: "نياحة والدة الإله القديسة مريم العذراء - 21 طوبه",
        date: null,
        story: "",
        selected: false,
        day: 21,
        month: 5,
      },
      {
        id: 350,
        title: "نياحة القديسة إيلارية ابنة الملك زينون - 21 طوبه",
        date: null,
        story: "",
        selected: false,
        day: 21,
        month: 5,
      },
      {
        id: 351,
        title: "نياحة القديس العظيم الأنبا أنطونيوس أب جميع الرهبان - 22 طوبه",
        date: null,
        story: "",
        selected: false,
        day: 22,
        month: 5,
      },
      {
        id: 352,
        title:
          "استشهاد القديس تيموثاوس تلميذ القديس بولس الرسول وأسقف أفسس - 23 طوبه",
        date: null,
        story: "",
        selected: false,
        day: 23,
        month: 5,
      },
      {
        id: 353,
        title:
          "نياحة البابا كيرلس الرابع أبى الإصلاح البطريرك المائة والعاشر من بطاركة الكرازة المرقسية - 23 طوبه",
        date: null,
        story: "",
        selected: false,
        day: 23,
        month: 5,
      },
      {
        id: 354,
        title: "نياحة القديسة مريم الحبيسة الناسكة - 24 طوبه",
        date: null,
        story: "",
        selected: false,
        day: 24,
        month: 5,
      },
      {
        id: 355,
        title: "استشهاد القديس بساده القس - 24 طوبه",
        date: null,
        story: "",
        selected: false,
        day: 24,
        month: 5,
      },
      {
        id: 356,
        title: "نياحة القديس بطرس العابد - 25 طوبه",
        date: null,
        story: "",
        selected: false,
        day: 25,
        month: 5,
      },
      {
        id: 357,
        title: "استشهاد القديس أسكلاس - 25 طوبه",
        date: null,
        story: "",
        selected: false,
        day: 25,
        month: 5,
      },
      {
        id: 358,
        title: "استشهاد التسعة والأربعين شهيداً شيوخ شيهيت - 26 طوبه",
        date: null,
        story: "",
        selected: false,
        day: 26,
        month: 5,
      },
      {
        id: 359,
        title: "استشهاد القديس بجوش - 26 طوبه",
        date: null,
        story: "",
        selected: false,
        day: 26,
        month: 5,
      },
      {
        id: 360,
        title: "نياحة القديسة أنسطاسية - 26 طوبه",
        date: null,
        story: "",
        selected: false,
        day: 26,
        month: 5,
      },
      {
        id: 361,
        title: "تذكار رئيس الملائكة الجليل سوريال - 27 طوبه",
        date: null,
        story: "",
        selected: false,
        day: 27,
        month: 5,
      },
      {
        id: 362,
        title: "استشهاد القديس أبى فام الجُندي الأوسيمي - 27 طوبه",
        date: null,
        story: "",
        selected: false,
        day: 27,
        month: 5,
      },
      {
        id: 363,
        title: "استشهاد القديس سيرابيون - 27 طوبه",
        date: null,
        story: "",
        selected: false,
        day: 27,
        month: 5,
      },
      {
        id: 364,
        title:
          "تذكار نقل جسد القديس تيموثاوس تلميذ معلمنا القديس بولس الرسول - 27 طوبه",
        date: null,
        story: "",
        selected: false,
        day: 27,
        month: 5,
      },
      {
        id: 365,
        title: "استشهاد القديس الأنبا كاؤو - 28 طوبه",
        date: null,
        story: "",
        selected: false,
        day: 28,
        month: 5,
      },
      {
        id: 366,
        title: "استشهاد القديس إكليمنضس أسقف أنقرة - 28 طوبه",
        date: null,
        story: "",
        selected: false,
        day: 28,
        month: 5,
      },
      {
        id: 367,
        title: "استشهاد القديس فيلياس أسقف تمي الأمديد - 28 طوبه",
        date: null,
        story: "",
        selected: false,
        day: 28,
        month: 5,
      },
      {
        id: 368,
        title: "نياحة القديسة أكساني - 29 طوبه",
        date: null,
        story: "",
        selected: false,
        day: 29,
        month: 5,
      },
      {
        id: 369,
        title: "نياحة القديس سرياكوس المجاهد - 29 طوبه",
        date: null,
        story: "",
        selected: false,
        day: 29,
        month: 5,
      },
      {
        id: 370,
        title:
          "استشهاد العذارى القديسات بيستيس وهلبيس وأغابى ونياحة أمهن صوفية - 30 طوبه",
        date: null,
        story: "",
        selected: false,
        day: 30,
        month: 5,
      },
      {
        id: 371,
        title:
          "نياحة البابا مينا الأول البطريرك السابع والأربعين من بطاركة الكرازة المرقسية - 30 طوبه",
        date: null,
        story: "",
        selected: false,
        day: 30,
        month: 5,
      },
      {
        id: 372,
        title: "نياحة القديس إبراهيم الرهاوي المتوحد - 30 طوبه",
        date: null,
        story: "",
        selected: false,
        day: 30,
        month: 5,
      },
      {
        id: 373,
        title:
          "تذكار اجتماع المجمع المسكوني الثاني بمدينة القسطنطينية - 1 امشير",
        date: null,
        story: "",
        selected: false,
        day: 1,
        month: 6,
      },
      {
        id: 374,
        title: "استشهاد القديس أباديون أسقف أنصنا - 1 امشير",
        date: null,
        story: "",
        selected: false,
        day: 1,
        month: 6,
      },
      {
        id: 375,
        title:
          "تكريس كنيسة القديس بطرس خاتم الشهداء بمدينة الإسكندرية - 1 امشير",
        date: null,
        story: "",
        selected: false,
        day: 1,
        month: 6,
      },
      {
        id: 376,
        title: "نياحة القديس العظيم الأنبا بولا أول السواح - 2 امشير",
        date: null,
        story: "",
        selected: false,
        day: 2,
        month: 6,
      },
      {
        id: 377,
        title: "نياحة القديس لُونجينوس رئيس دير الزجاج - 2 امشير",
        date: null,
        story: "",
        selected: false,
        day: 2,
        month: 6,
      },
      {
        id: 378,
        title: "نياحة القديس يعقوب الراهب - 3 امشير",
        date: null,
        story: "",
        selected: false,
        day: 3,
        month: 6,
      },
      {
        id: 379,
        title: "نياحة القديس هدرا بحاجر بنهدب - 3 امشير",
        date: null,
        story: "",
        selected: false,
        day: 3,
        month: 6,
      },
      {
        id: 380,
        title: "استشهاد القديس أغابوس أحد السبعين رسولاً - 4 امشير",
        date: null,
        story: "",
        selected: false,
        day: 4,
        month: 6,
      },
      {
        id: 381,
        title: "تذكار نقل أعضاء التسعة والأربعين شهيداً شيوخ شيهيت - 5 امشير",
        date: null,
        story: "",
        selected: false,
        day: 5,
        month: 6,
      },
      {
        id: 382,
        title:
          "نياحة البابا أغريبينوس البطريرك العاشر من بطاركة الكرازة المرقسية - 5 امشير",
        date: null,
        story: "",
        selected: false,
        day: 5,
        month: 6,
      },
      {
        id: 383,
        title: "نياحة القديس الأنبا بشاي صاحب الدير الأحمر - 5 امشير",
        date: null,
        story: "",
        selected: false,
        day: 5,
        month: 6,
      },
      {
        id: 384,
        title:
          "نياحة الأنبا أبوللو رفيق القديس الأنبا أبيب من قديسي القرن الرابع الميلادي - 5 امشير",
        date: null,
        story: "",
        selected: false,
        day: 5,
        month: 6,
      },
      {
        id: 385,
        title: "استشهاد القديس أبوليدس بابا روما - 5 امشير",
        date: null,
        story: "",
        selected: false,
        day: 5,
        month: 6,
      },
      {
        id: 386,
        title: "نياحة القديس أبانوب صاحب المروحة الذهب - 5 امشير",
        date: null,
        story: "",
        selected: false,
        day: 5,
        month: 6,
      },
      {
        id: 387,
        title: "استشهاد القديسين أباكير ويوحنا والثلاث عذارى وأمهن - 6 امشير",
        date: null,
        story: "",
        selected: false,
        day: 6,
        month: 6,
      },
      {
        id: 388,
        title:
          "نياحة البابا مرقس الرابع البطريرك الرابع والثمانين من بطاركة الكرازة المرقسية - 6 امشير",
        date: null,
        story: "",
        selected: false,
        day: 6,
        month: 6,
      },
      {
        id: 389,
        title: "نياحة القديس زانوفيوس - 6 امشير",
        date: null,
        story: "",
        selected: false,
        day: 6,
        month: 6,
      },
      {
        id: 390,
        title:
          "نياحة البابا القديس ألكسندروس الثاني البطريرك الثالث والأربعين من بطاركة الكرازة المرقسية - 7 امشير",
        date: null,
        story: "",
        selected: false,
        day: 7,
        month: 6,
      },
      {
        id: 391,
        title:
          "نياحة البابا القديس ثيئودوروس الأول البطريرك الخامس والأربعين من بطاركة الكرازة المرقسية - 7 امشير",
        date: null,
        story: "",
        selected: false,
        day: 7,
        month: 6,
      },
      {
        id: 392,
        title: "عيد دخول السيد المسيح إلى الهيكل - 8 امشير",
        date: null,
        story: "",
        selected: false,
        day: 8,
        month: 6,
      },
      {
        id: 393,
        title: "نياحة القديس سمعان الشيخ - 8 امشير",
        date: null,
        story: "",
        selected: false,
        day: 8,
        month: 6,
      },
      {
        id: 394,
        title: "نياحة القديس برسوما أب رهبان السريان - 9 امشير",
        date: null,
        story: "",
        selected: false,
        day: 9,
        month: 6,
      },
      {
        id: 395,
        title: "استشهاد القديس بولس السرياني - 9 امشير",
        date: null,
        story: "",
        selected: false,
        day: 9,
        month: 6,
      },
      {
        id: 396,
        title: "استشهاد القديس سمعان - 9 امشير",
        date: null,
        story: "",
        selected: false,
        day: 9,
        month: 6,
      },
      {
        id: 397,
        title: "نياحة القديسة إفروسينا - 9 امشير",
        date: null,
        story: "",
        selected: false,
        day: 9,
        month: 6,
      },
      {
        id: 398,
        title: "استشهاد القديس فيلو أسقف فارس - 10 امشير",
        date: null,
        story: "",
        selected: false,
        day: 10,
        month: 6,
      },
      {
        id: 399,
        title: "استشهاد القديس يسطس ابن الملك نوماريوس - 10 امشير",
        date: null,
        story: "",
        selected: false,
        day: 10,
        month: 6,
      },
      {
        id: 400,
        title: "نياحة القديس إيسوذوروس الفَرمِي - 10 امشير",
        date: null,
        story: "",
        selected: false,
        day: 10,
        month: 6,
      },
      {
        id: 401,
        title:
          "نياحة البابا القديس يوأنس الثالث عشر البطريرك الرابع والتسعين من بطاركة الكرازة المرقسية - 11 امشير",
        date: null,
        story: "",
        selected: false,
        day: 11,
        month: 6,
      },
      {
        id: 402,
        title: "استشهاد القديس فابيانوس بابا روما - 11 امشير",
        date: null,
        story: "",
        selected: false,
        day: 11,
        month: 6,
      },
      {
        id: 403,
        title: "تذكار رئيس الملائكة الجليل ميخائيل - 12 امشير",
        date: null,
        story: "",
        selected: false,
        day: 12,
        month: 6,
      },
      {
        id: 404,
        title: "نياحة القديس جلاسيوس الناسك - 12 امشير",
        date: null,
        story: "",
        selected: false,
        day: 12,
        month: 6,
      },
      {
        id: 405,
        title:
          "استشهاد القديس سرجيوس الأتريبي وأبيه وأمه وأخته وكثيرين معهم - 13 امشير",
        date: null,
        story: "",
        selected: false,
        day: 13,
        month: 6,
      },
      {
        id: 406,
        title:
          "نياحة البابا القديس تيموثاوس الثالث البطريرك الثاني والثلاثين من بطاركة الكرازة المرقسية - 13 امشير",
        date: null,
        story: "",
        selected: false,
        day: 13,
        month: 6,
      },
      {
        id: 407,
        title: "نياحة القديس ساويرس بطريرك أنطاكية - 14 امشير",
        date: null,
        story: "",
        selected: false,
        day: 14,
        month: 6,
      },
      {
        id: 408,
        title:
          "نياحة البابا القديس يعقوب البطريرك الخمسين من بطاركة الكرازة المرقسية - 14 امشير",
        date: null,
        story: "",
        selected: false,
        day: 14,
        month: 6,
      },
      {
        id: 409,
        title: "نياحة القديس بفنوتيوس الراهب - 15 امشير",
        date: null,
        story: "",
        selected: false,
        day: 15,
        month: 6,
      },
      {
        id: 410,
        title: "استشهاد الصديق زكريا النبي بن بَرَخِيَّا بن عِدُّو - 15 امشير",
        date: null,
        story: "",
        selected: false,
        day: 15,
        month: 6,
      },
      {
        id: 411,
        title: "استشهاد القديس أنبا بيجول القس - 15 امشير",
        date: null,
        story: "",
        selected: false,
        day: 15,
        month: 6,
      },
      {
        id: 412,
        title:
          "تكريس أول كنيسة للأربعين شهيداً الذين استشهدوا في سبسطية - 15 امشير",
        date: null,
        story: "",
        selected: false,
        day: 15,
        month: 6,
      },
      {
        id: 413,
        title: "نياحة القديسة أليصابات أم القديس يوحنا المعمدان - 16 امشير",
        date: null,
        story: "",
        selected: false,
        day: 16,
        month: 6,
      },
      {
        id: 414,
        title:
          "نياحة البابا القديس ميخائيل الثالث البطريرك الثاني والتسعين من بطاركة الكرازة المرقسية - 16 امشير",
        date: null,
        story: "",
        selected: false,
        day: 16,
        month: 6,
      },
      {
        id: 415,
        title: "نياحة القديس القمص ميخائيل البحيري المحرقي - 16 امشير",
        date: null,
        story: "",
        selected: false,
        day: 16,
        month: 6,
      },
      {
        id: 416,
        title: "استشهاد القديس مينا الراهب - 17 امشير",
        date: null,
        story: "",
        selected: false,
        day: 17,
        month: 6,
      },
      {
        id: 417,
        title: "تكريس كنيسة القديس قسطور البردنوهي - 17 امشير",
        date: null,
        story: "",
        selected: false,
        day: 17,
        month: 6,
      },
      {
        id: 418,
        title: "نياحة القديس ملاتيوس المعترف بطريرك أنطاكية - 18 امشير",
        date: null,
        story: "",
        selected: false,
        day: 18,
        month: 6,
      },
      {
        id: 419,
        title: "تدشين كنيسة القديس بولس البسيط - 18 امشير",
        date: null,
        story: "",
        selected: false,
        day: 18,
        month: 6,
      },
      {
        id: 420,
        title: "تذكار نقل أعضاء القديس مرتيانوس الراهب إلى أنطاكية - 19 امشير",
        date: null,
        story: "",
        selected: false,
        day: 19,
        month: 6,
      },
      {
        id: 421,
        title:
          "نياحة البابا القديس بطرس الثاني البطريرك الحادي والعشرين من بطاركة الكرازة المرقسية - 20 امشير",
        date: null,
        story: "",
        selected: false,
        day: 20,
        month: 6,
      },
      {
        id: 422,
        title:
          "استشهاد القديسين باسيليوس وثاؤدروس وتيموثاوس بالإسكندرية - 20 امشير",
        date: null,
        story: "",
        selected: false,
        day: 20,
        month: 6,
      },
      {
        id: 423,
        title: "تذكار القديسة العذراء مريم والدة الإله - 21 امشير",
        date: null,
        story: "",
        selected: false,
        day: 21,
        month: 6,
      },
      {
        id: 424,
        title: "استشهاد القديس أُنسيموس تلميذ القديس بولس الرسول - 21 امشير",
        date: null,
        story: "",
        selected: false,
        day: 21,
        month: 6,
      },
      {
        id: 425,
        title:
          "نياحة البابا القديس غبريال الأول البطريرك السابع والخمسين من بطاركة الكرازة المرقسية - 21 امشير",
        date: null,
        story: "",
        selected: false,
        day: 21,
        month: 6,
      },
      {
        id: 426,
        title: "نياحة القديس زخارياس أسقف سخا - 21 امشير",
        date: null,
        story: "",
        selected: false,
        day: 21,
        month: 6,
      },
      {
        id: 427,
        title:
          "نياحة القديس ماروتا أسقف ميافرقين ( ميافرقين:من بلاد ما بين النهرين شمالي نصيبين) - 22 امشير",
        date: null,
        story: "",
        selected: false,
        day: 22,
        month: 6,
      },
      {
        id: 428,
        title: "استشهاد القديس أوسابيوس ابن القديس واسيليدس الوزير - 23 امشير",
        date: null,
        story: "",
        selected: false,
        day: 23,
        month: 6,
      },
      {
        id: 429,
        title: "نياحة القديس أغابيطوس الأسقف - 24 امشير",
        date: null,
        story: "",
        selected: false,
        day: 24,
        month: 6,
      },
      {
        id: 430,
        title:
          "استشهاد القديسين تيموثاوس بمدينة غزة ومتياس بمدينة قوص - 24 امشير",
        date: null,
        story: "",
        selected: false,
        day: 24,
        month: 6,
      },
      {
        id: 431,
        title: "استشهاد القديسين فليمون وأبفية وأرخِبُّس ابنهما - 25 امشير",
        date: null,
        story: "",
        selected: false,
        day: 25,
        month: 6,
      },
      {
        id: 432,
        title:
          "استشهاد القديس قونا بمدينة روما. ( أو الشماس قزماس بروما ) - 25 امشير",
        date: null,
        story: "",
        selected: false,
        day: 25,
        month: 6,
      },
      {
        id: 433,
        title: "استشهاد القديس مينا بمدينة قوص - 25 امشير",
        date: null,
        story: "",
        selected: false,
        day: 25,
        month: 6,
      },
      {
        id: 434,
        title: "نياحة القديس أبو فانا بجبل دلجا - 25 امشير",
        date: null,
        story: "",
        selected: false,
        day: 25,
        month: 6,
      },
      {
        id: 435,
        title: "نياحة الصِّدِّيق هوشع النبي - 26 امشير",
        date: null,
        story: "",
        selected: false,
        day: 26,
        month: 6,
      },
      {
        id: 436,
        title:
          "استشهاد القديس صادوق والمائة والثمانية والعشرين الذين معه - 26 امشير",
        date: null,
        story: "",
        selected: false,
        day: 26,
        month: 6,
      },
      {
        id: 437,
        title:
          "استشهاد الأسقفين تيرانيوس وسلوانس والكاهن زينوبيوس ورفاقهم في مدينة صور - 26 امشير",
        date: null,
        story: "",
        selected: false,
        day: 26,
        month: 6,
      },
      {
        id: 438,
        title: "نياحة القديس أوسطاسيوس بطريرك أنطاكية - 27 امشير",
        date: null,
        story: "",
        selected: false,
        day: 27,
        month: 6,
      },
      {
        id: 439,
        title: "استشهاد القديسة بِرْبِتْوَا ومَنْ معها - 27 امشير",
        date: null,
        story: "",
        selected: false,
        day: 27,
        month: 6,
      },
      {
        id: 440,
        title: "نقل أعضاء القديس تاوضروس ( تادرس ) المشرقي الشهيد - 28 امشير",
        date: null,
        story: "",
        selected: false,
        day: 28,
        month: 6,
      },
      {
        id: 441,
        title: "استشهاد القديس بوليكاربوس أسقف سميرنا - 29 امشير",
        date: null,
        story: "",
        selected: false,
        day: 29,
        month: 6,
      },
      {
        id: 442,
        title: "وجود رأس القديس يوحنا المعمدان - 30 امشير",
        date: null,
        story: "",
        selected: false,
        day: 30,
        month: 6,
      },
      {
        id: 443,
        title:
          "نياحة القديس البابا كيرلس السادس البطريرك المائة والسادس عشر من بطاركة الكرازة المرقسية - 30 امشير",
        date: null,
        story: "",
        selected: false,
        day: 30,
        month: 6,
      },
      {
        id: 444,
        title: "استشهاد القديسين مقرونيوس وتكلا - 1 برمهات",
        date: null,
        story: "",
        selected: false,
        day: 1,
        month: 7,
      },
      {
        id: 445,
        title: "استشهاد القديس ألكسندروس الجندي - 1 برمهات",
        date: null,
        story: "",
        selected: false,
        day: 1,
        month: 7,
      },
      {
        id: 446,
        title: "نياحة القديس نركيسوس أسقف بيت المقدس - 1 برمهات",
        date: null,
        story: "",
        selected: false,
        day: 1,
        month: 7,
      },
      {
        id: 447,
        title: "نياحة القديس مرقورة الأسقف - 1 برمهات",
        date: null,
        story: "",
        selected: false,
        day: 1,
        month: 7,
      },
      {
        id: 448,
        title: "نياحة الراهب جرجس بن العميد الشهير بابن المكين - 1 برمهات",
        date: null,
        story: "",
        selected: false,
        day: 1,
        month: 7,
      },
      {
        id: 449,
        title: "استشهاد القديس الأنبا مكراوى الأسقف - 2 برمهات",
        date: null,
        story: "",
        selected: false,
        day: 2,
        month: 7,
      },
      {
        id: 450,
        title:
          "نياحة القديس الأنبا قسما البطريرك الثامن والخمسين من بطاركة الكرازة المرقسية - 3 برمهات",
        date: null,
        story: "",
        selected: false,
        day: 3,
        month: 7,
      },
      {
        id: 451,
        title: "استشهاد القديس برفونيوس - 3 برمهات",
        date: null,
        story: "",
        selected: false,
        day: 3,
        month: 7,
      },
      {
        id: 452,
        title: "نياحة القديس برفوريوس أسقف غزة  - 3 برمهات",
        date: null,
        story: "",
        selected: false,
        day: 3,
        month: 7,
      },
      {
        id: 453,
        title: "نياحة القديس الأنبا حديد القس - 3 برمهات",
        date: null,
        story: "",
        selected: false,
        day: 3,
        month: 7,
      },
      {
        id: 454,
        title:
          "انعقاد مجمع، بجزيرة بني عمر، على قوم يُطلق عليهم الأربعتعشرية، بخصوص القيامة المقدسة - 4 برمهات",
        date: null,
        story: "",
        selected: false,
        day: 4,
        month: 7,
      },
      {
        id: 455,
        title: "استشهاد القديس هانوليوس الأمير - 4 برمهات",
        date: null,
        story: "",
        selected: false,
        day: 4,
        month: 7,
      },
      {
        id: 456,
        title:
          "نياحة القديس الأنبا صرابامون قمص دير القديس الأنبا يحنس القصير (أحد الأديرة المندثرة ببرية شيهيت) - 5 برمهات",
        date: null,
        story: "",
        selected: false,
        day: 5,
        month: 7,
      },
      {
        id: 457,
        title: "استشهاد القديسة أوذوكسية - 5 برمهات",
        date: null,
        story: "",
        selected: false,
        day: 5,
        month: 7,
      },
      {
        id: 458,
        title: "استشهاد القديس ديوسقوروس في زمان العرب - 6 برمهات",
        date: null,
        story: "",
        selected: false,
        day: 6,
        month: 7,
      },
      {
        id: 459,
        title: "نياحة القديس ثاؤدوطس الأسقف المعترف - 6 برمهات",
        date: null,
        story: "",
        selected: false,
        day: 6,
        month: 7,
      },
      {
        id: 460,
        title: "استشهاد القديسين فليمون وأبلانيوس - 7 برمهات",
        date: null,
        story: "",
        selected: false,
        day: 7,
        month: 7,
      },
      {
        id: 461,
        title: "استشهاد القديسة مريم الإسرائيلية - 7 برمهات",
        date: null,
        story: "",
        selected: false,
        day: 7,
        month: 7,
      },
      {
        id: 462,
        title: "استشهاد القديس متياس الرسول - 8 برمهات",
        date: null,
        story: "",
        selected: false,
        day: 8,
        month: 7,
      },
      {
        id: 463,
        title:
          "نياحة القديس البابا يوليانوس البطريرك الحادي عشر من بطاركة الكرازة المرقسية - 8 برمهات",
        date: null,
        story: "",
        selected: false,
        day: 8,
        month: 7,
      },
      {
        id: 464,
        title: "استشهاد القديس أريانوس والي أنصنا - 8 برمهات",
        date: null,
        story: "",
        selected: false,
        day: 8,
        month: 7,
      },
      {
        id: 465,
        title: "نياحة القديس كونن المعترف - 9 برمهات",
        date: null,
        story: "",
        selected: false,
        day: 9,
        month: 7,
      },
      {
        id: 466,
        title:
          "استشهاد القديسين أندريانوس ومرثا زوجته وأوسابيوس وأرما وأربعين شهيداً - 9 برمهات",
        date: null,
        story: "",
        selected: false,
        day: 9,
        month: 7,
      },
      {
        id: 467,
        title: "تذكار ظهور الصليب المجيد - 10 برمهات",
        date: null,
        story: "",
        selected: false,
        day: 10,
        month: 7,
      },
      {
        id: 468,
        title: "استشهاد القديس ( باسيلاوس ) باسيليوس أسقف أورشليم - 11 برمهات",
        date: null,
        story: "",
        selected: false,
        day: 11,
        month: 7,
      },
      {
        id: 469,
        title: "نياحة القديس نرسيس أسقف أورشليم - 11 برمهات",
        date: null,
        story: "",
        selected: false,
        day: 11,
        month: 7,
      },
      {
        id: 470,
        title: "تذكار رئيس الملائكة الطاهر ميخائيل - 12 برمهات",
        date: null,
        story: "",
        selected: false,
        day: 12,
        month: 7,
      },
      {
        id: 471,
        title:
          "ظهور بتولية البابا ديمتريوس الكرَّام البطريرك الثاني عشر من بطاركة الكرازة المرقسية - 12 برمهات",
        date: null,
        story: "",
        selected: false,
        day: 12,
        month: 7,
      },
      {
        id: 472,
        title: "استشهاد القديس ملاخي بأرض فلسطين - 12 برمهات",
        date: null,
        story: "",
        selected: false,
        day: 12,
        month: 7,
      },
      {
        id: 473,
        title: "استشهاد القديس جلاذينوس في دمشق - 12 برمهات",
        date: null,
        story: "",
        selected: false,
        day: 12,
        month: 7,
      },
      {
        id: 474,
        title: "استشهاد الأربعين شهيداً بسبسطية - 13 برمهات",
        date: null,
        story: "",
        selected: false,
        day: 13,
        month: 7,
      },
      {
        id: 475,
        title:
          "نياحة القديس البابا ديونيسيوس البطريرك الرابع عشر من بطاركة الكرازة المرقسية - 13 برمهات",
        date: null,
        story: "",
        selected: false,
        day: 13,
        month: 7,
      },
      {
        id: 476,
        title:
          "تذكار عودة القديسين مكاريوس الكبير ومكاريوس الإسكندري من منفاهما - 13 برمهات",
        date: null,
        story: "",
        selected: false,
        day: 13,
        month: 7,
      },
      {
        id: 477,
        title: "استشهاد الأساقفة أوجانيوس وأغانورس ووالنديوس - 14 برمهات",
        date: null,
        story: "",
        selected: false,
        day: 14,
        month: 7,
      },
      {
        id: 478,
        title: "استشهاد القديس شنوده البهنساوي - 14 برمهات",
        date: null,
        story: "",
        selected: false,
        day: 14,
        month: 7,
      },
      {
        id: 479,
        title: "نياحة القديسة سارة الراهبة - 15 برمهات",
        date: null,
        story: "",
        selected: false,
        day: 15,
        month: 7,
      },
      {
        id: 480,
        title: "استشهاد القديس إيلياس الإهناسى - 15 برمهات",
        date: null,
        story: "",
        selected: false,
        day: 15,
        month: 7,
      },
      {
        id: 481,
        title:
          "ظهور القديسة العذراء مريم بكنيسة الشهيدة دميانة بحي بابا دوبلو بشبرا – القاهرة - 16 برمهات",
        date: null,
        story: "",
        selected: false,
        day: 16,
        month: 7,
      },
      {
        id: 482,
        title:
          "نياحة القديس البابا خائيل الأول البطريرك السادس والأربعين من بطاركة الكرازة المرقسية - 16 برمهات",
        date: null,
        story: "",
        selected: false,
        day: 16,
        month: 7,
      },
      {
        id: 483,
        title: "نياحة لعازر حبيب الرب - 17 برمهات",
        date: null,
        story: "",
        selected: false,
        day: 17,
        month: 7,
      },
      {
        id: 484,
        title: "استشهاد القديس سيدهم بشاي بدمياط - 17 برمهات",
        date: null,
        story: "",
        selected: false,
        day: 17,
        month: 7,
      },
      {
        id: 485,
        title: "نياحة القديس الأنبا باسيليوس مطران القدس - 17 برمهات",
        date: null,
        story: "",
        selected: false,
        day: 17,
        month: 7,
      },
      {
        id: 486,
        title:
          "تذكار القديسين جرجس العابد وبلاسيوس الشهيد والأنبا يوسف الأسقف - 17 برمهات",
        date: null,
        story: "",
        selected: false,
        day: 17,
        month: 7,
      },
      {
        id: 487,
        title: "استشهاد القديس إيسوذوروس رفيق سنا الجندي - 18 برمهات",
        date: null,
        story: "",
        selected: false,
        day: 18,
        month: 7,
      },
      {
        id: 488,
        title: "استشهاد القديس أرسطوبولس الرسول أحد السبعين رسولاً - 19 برمهات",
        date: null,
        story: "",
        selected: false,
        day: 19,
        month: 7,
      },
      {
        id: 489,
        title: "استشهاد القديسين ألكسندروس وأغابيوس ومن معهما - 19 برمهات",
        date: null,
        story: "",
        selected: false,
        day: 19,
        month: 7,
      },
      {
        id: 490,
        title:
          "نياحة القديس البابا خائيل الثالث البطريرك السادس والخمسين من بطاركة الكرازة المرقسية - 20 برمهات",
        date: null,
        story: "",
        selected: false,
        day: 20,
        month: 7,
      },
      {
        id: 491,
        title: "تذكار إقامة لعازر حبيب الرب من الموت - 20 برمهات",
        date: null,
        story: "",
        selected: false,
        day: 20,
        month: 7,
      },
      {
        id: 492,
        title: "تذكار والدة الإله القديسة الطاهرة مريم العذراء - 21 برمهات",
        date: null,
        story: "",
        selected: false,
        day: 21,
        month: 7,
      },
      {
        id: 493,
        title:
          "دخول المخلص بيت عنيا، وتشاور عظماء الكهنة على قتل لعازر الصديق الذي أقامه الرب - 21 برمهات",
        date: null,
        story: "",
        selected: false,
        day: 21,
        month: 7,
      },
      {
        id: 494,
        title: "استشهاد القديسين تاؤدوروس وتيموثاوس - 21 برمهات",
        date: null,
        story: "",
        selected: false,
        day: 21,
        month: 7,
      },
      {
        id: 495,
        title: "نياحة القديس كيرلس أسقف أورشليم - 22 برمهات",
        date: null,
        story: "",
        selected: false,
        day: 22,
        month: 7,
      },
      {
        id: 496,
        title: "نياحة البار يوسف الرامي - 22 برمهات",
        date: null,
        story: "",
        selected: false,
        day: 22,
        month: 7,
      },
      {
        id: 497,
        title: "نياحة القديس ميخائيل أسقف نقادة - 22 برمهات",
        date: null,
        story: "",
        selected: false,
        day: 22,
        month: 7,
      },
      {
        id: 498,
        title: "نياحة الصديق العظيم دانيال النبي - 23 برمهات",
        date: null,
        story: "",
        selected: false,
        day: 23,
        month: 7,
      },
      {
        id: 499,
        title: "تذكار ظهور القديسة العذراء مريم بكنيستها بالزيتون - 24 برمهات",
        date: null,
        story: "",
        selected: false,
        day: 24,
        month: 7,
      },
      {
        id: 500,
        title:
          "نياحة القديس البابا مكاريوس الأول البطريرك التاسع والخمسين من بطاركة الكرازة المرقسية - 24 برمهات",
        date: null,
        story: "",
        selected: false,
        day: 24,
        month: 7,
      },
      {
        id: 501,
        title: "نياحة القديس فريسكا أحد السبعين رسولاً - 25 برمهات",
        date: null,
        story: "",
        selected: false,
        day: 25,
        month: 7,
      },
      {
        id: 502,
        title: "استشهاد القديس أنيسيفورس أحد السبعين رسولاً - 25 برمهات",
        date: null,
        story: "",
        selected: false,
        day: 25,
        month: 7,
      },
      {
        id: 503,
        title:
          "نياحة القديس البابا متاؤس الثالث البطريرك المائة من بطاركة الكرازة المرقسية - 25 برمهات",
        date: null,
        story: "",
        selected: false,
        day: 25,
        month: 7,
      },
      {
        id: 504,
        title: "نياحة القديسة براكسيا العذراء - 26 برمهات",
        date: null,
        story: "",
        selected: false,
        day: 26,
        month: 7,
      },
      {
        id: 505,
        title:
          "نياحة القديس البابا بطرس السادس البطريرك المائة والرابع من بطاركة الكرازة المرقسية - 26 برمهات",
        date: null,
        story: "",
        selected: false,
        day: 26,
        month: 7,
      },
      {
        id: 506,
        title: "صلب ربنا يسوع المسيح بالجسد من أجل خلاص العالم - 27 برمهات",
        date: null,
        story: "",
        selected: false,
        day: 27,
        month: 7,
      },
      {
        id: 507,
        title: "نياحة القديس مكاريوس الكبير أب رهبان برية شيهيت - 27 برمهات",
        date: null,
        story: "",
        selected: false,
        day: 27,
        month: 7,
      },
      {
        id: 508,
        title: "استشهاد القديس دوميكيوس - 27 برمهات",
        date: null,
        story: "",
        selected: false,
        day: 27,
        month: 7,
      },
      {
        id: 509,
        title: "نياحة الإمبراطور قسطنطين الكبير - 28 برمهات",
        date: null,
        story: "",
        selected: false,
        day: 28,
        month: 7,
      },
      {
        id: 510,
        title:
          "نياحة القديس البابا بطرس السابع البطريرك المائة والتاسع من بطاركة الكرازة المرقسية - 28 برمهات",
        date: null,
        story: "",
        selected: false,
        day: 28,
        month: 7,
      },
      {
        id: 511,
        title: "نياحة القديس الأنبا صرابامون الشهير بأبي طرحة - 28 برمهات",
        date: null,
        story: "",
        selected: false,
        day: 28,
        month: 7,
      },
      {
        id: 512,
        title: "عيد البشارة المجيد - 29 برمهات",
        date: null,
        story: "",
        selected: false,
        day: 29,
        month: 7,
      },
      {
        id: 513,
        title: "تذكار قيامة السيد المسيح من الأموات - 29 برمهات",
        date: null,
        story: "",
        selected: false,
        day: 29,
        month: 7,
      },
      {
        id: 514,
        title: "تذكار رئيس الملائكة جبرائيل المبشر - 30 برمهات",
        date: null,
        story: "",
        selected: false,
        day: 30,
        month: 7,
      },
      {
        id: 515,
        title: "نياحة شمشون، أحد قضاة بني إسرائيل - 30 برمهات",
        date: null,
        story: "",
        selected: false,
        day: 30,
        month: 7,
      },
      {
        id: 516,
        title:
          "تذكار نقل أعضاء القديس يعقوب الفارسي الشهير بالمقطَّع - 30 برمهات",
        date: null,
        story: "",
        selected: false,
        day: 30,
        month: 7,
      },
      {
        id: 517,
        title: "نياحة القديس سلوانس الراهب - 1 برمودة",
        date: null,
        story: "",
        selected: false,
        day: 1,
        month: 8,
      },
      {
        id: 518,
        title: "نياحة هارون الكاهن - 1 برمودة",
        date: null,
        story: "",
        selected: false,
        day: 1,
        month: 8,
      },
      {
        id: 519,
        title: "تذكار غارة عُربان الصعيد على برية شيهيت - 1 برمودة",
        date: null,
        story: "",
        selected: false,
        day: 1,
        month: 8,
      },
      {
        id: 520,
        title: "استشهاد القديس خرستوفورس - 2 برمودة",
        date: null,
        story: "",
        selected: false,
        day: 2,
        month: 8,
      },
      {
        id: 521,
        title:
          "نياحة القديس البابا يوأنس التاسع البطريرك الحادي والثمانين من بطاركة الكرازة المرقسية - 2 برمودة",
        date: null,
        story: "",
        selected: false,
        day: 2,
        month: 8,
      },
      {
        id: 522,
        title:
          "نياحة القديس البابا ميخائيل الثاني البطريرك الحادي والسبعين من بطاركة الكرازة المرقسية - 3 برمودة",
        date: null,
        story: "",
        selected: false,
        day: 3,
        month: 8,
      },
      {
        id: 523,
        title: "نياحة القديس يوحنا أسقف أورشليم - 3 برمودة",
        date: null,
        story: "",
        selected: false,
        day: 3,
        month: 8,
      },
      {
        id: 524,
        title:
          "شهادة القديسين بقطر وأكاكيوس وداكيوس وإيريني العذراء ومن معهم من رجال ونساء وعذارى - 4 برمودة",
        date: null,
        story: "",
        selected: false,
        day: 4,
        month: 8,
      },
      {
        id: 525,
        title: "نياحة القديس أوكين - 4 برمودة",
        date: null,
        story: "",
        selected: false,
        day: 4,
        month: 8,
      },
      {
        id: 526,
        title: "استشهاد النبي حزقيال بن بوزي - 5 برمودة",
        date: null,
        story: "",
        selected: false,
        day: 5,
        month: 8,
      },
      {
        id: 527,
        title: "استشهاد القديس هيباتيوس أسقف غنغرة - 5 برمودة",
        date: null,
        story: "",
        selected: false,
        day: 5,
        month: 8,
      },
      {
        id: 528,
        title: "تذكار نياحة القديسة مريم المصرية السائحة - 6 برمودة",
        date: null,
        story: "",
        selected: false,
        day: 6,
        month: 8,
      },
      {
        id: 529,
        title: "نياحة الصديق يواقيم والد القديسة العذراء مريم - 7 برمودة",
        date: null,
        story: "",
        selected: false,
        day: 7,
        month: 8,
      },
      {
        id: 530,
        title: "نياحة القديس مقروفيوس - 7 برمودة",
        date: null,
        story: "",
        selected: false,
        day: 7,
        month: 8,
      },
      {
        id: 531,
        title: "استشهاد القديسين أغابيوس وثيئودورة - 7 برمودة",
        date: null,
        story: "",
        selected: false,
        day: 7,
        month: 8,
      },
      {
        id: 532,
        title: "استشهاد العذارى القديسات أغابي وإيريني وشيونيه - 8 برمودة",
        date: null,
        story: "",
        selected: false,
        day: 8,
        month: 8,
      },
      {
        id: 533,
        title: "استشهاد المائة والخمسين مؤمناً على يد ملك الفرس - 8 برمودة",
        date: null,
        story: "",
        selected: false,
        day: 8,
        month: 8,
      },
      {
        id: 534,
        title: "نياحة القديس الأنبا زوسيما القس - 9 برمودة",
        date: null,
        story: "",
        selected: false,
        day: 9,
        month: 8,
      },
      {
        id: 535,
        title:
          "تذكار الأعجوبة التي صُنعَت على يد القديس البابا شنوده الأول البطريرك الخامس والخمسين - 9 برمودة",
        date: null,
        story: "",
        selected: false,
        day: 9,
        month: 8,
      },
      {
        id: 536,
        title: "نياحة الأنبا إيساك تلميذ الأنبا أبُلوس - 10 برمودة",
        date: null,
        story: "",
        selected: false,
        day: 10,
        month: 8,
      },
      {
        id: 537,
        title:
          "نياحة القديس البابا غبريال الثاني البطريرك السبعين الشهير بابن تريك - 10 برمودة",
        date: null,
        story: "",
        selected: false,
        day: 10,
        month: 8,
      },
      {
        id: 538,
        title: "نياحة القديسة ثيئودورا - 11 برمودة",
        date: null,
        story: "",
        selected: false,
        day: 11,
        month: 8,
      },
      {
        id: 539,
        title: "نياحة القديس يوحنا أسقف غزة - 11 برمودة",
        date: null,
        story: "",
        selected: false,
        day: 11,
        month: 8,
      },
      {
        id: 540,
        title: "تذكار رئيس الملائكة الجليل ميخائيل - 12 برمودة",
        date: null,
        story: "",
        selected: false,
        day: 12,
        month: 8,
      },
      {
        id: 541,
        title: "نياحة القديس ألكسندروس المعترف أسقف أورشليم - 12 برمودة",
        date: null,
        story: "",
        selected: false,
        day: 12,
        month: 8,
      },
      {
        id: 542,
        title: "نياحة القديس أنطونيوس أسقف طمويه - 12 برمودة",
        date: null,
        story: "",
        selected: false,
        day: 12,
        month: 8,
      },
      {
        id: 543,
        title: "استشهاد القديسين يشوع ويوسف - 13 برمودة",
        date: null,
        story: "",
        selected: false,
        day: 13,
        month: 8,
      },
      {
        id: 544,
        title:
          "نياحة القديس البابا يوأنس السابع عشر البطريرك الخامس بعد المائة من بطاركة الكرازة المرقسية - 13 برمودة",
        date: null,
        story: "",
        selected: false,
        day: 13,
        month: 8,
      },
      {
        id: 545,
        title: "نياحة القديسة ديونيسة - 13 برمودة",
        date: null,
        story: "",
        selected: false,
        day: 13,
        month: 8,
      },
      {
        id: 546,
        title: "استشهاد القديس ميديوس الشهيد - 13 برمودة",
        date: null,
        story: "",
        selected: false,
        day: 13,
        month: 8,
      },
      {
        id: 547,
        title:
          "نياحة القديس البابا مكسيموس البطريرك الخامس عشر من بطاركة الكرازة المرقسية - 14 برمودة",
        date: null,
        story: "",
        selected: false,
        day: 14,
        month: 8,
      },
      {
        id: 548,
        title: "نياحة القديس إهرون السرياني - 14 برمودة",
        date: null,
        story: "",
        selected: false,
        day: 14,
        month: 8,
      },
      {
        id: 549,
        title: "تكريس كنيسة القديس أغابوس أحد السبعين - 15 برمودة",
        date: null,
        story: "",
        selected: false,
        day: 15,
        month: 8,
      },
      {
        id: 550,
        title: "استشهاد القديسة ألكسندرة الملكة - 15 برمودة",
        date: null,
        story: "",
        selected: false,
        day: 15,
        month: 8,
      },
      {
        id: 551,
        title:
          "نياحة القديس البابا مرقس السادس البطريرك الأول بعد المائة من بطاركة الكرازة المرقسية - 15 برمودة",
        date: null,
        story: "",
        selected: false,
        day: 15,
        month: 8,
      },
      {
        id: 552,
        title:
          "استشهاد القديس أنتيباس أسقف برغامس تلميذ القديس يوحنا الرسول - 16 برمودة",
        date: null,
        story: "",
        selected: false,
        day: 16,
        month: 8,
      },
      {
        id: 553,
        title: "تذكار إصعاد أخنوخ البار حياً إلى السماء - 16 برمودة",
        date: null,
        story: "",
        selected: false,
        day: 16,
        month: 8,
      },
      {
        id: 554,
        title:
          "استشهاد القديس يعقوب الكبير أحد الاثني عشر رسولاً وشقيق يوحنا الحبيب - 17 برمودة",
        date: null,
        story: "",
        selected: false,
        day: 17,
        month: 8,
      },
      {
        id: 555,
        title: "نياحة القديس نيقوديموس - 17 برمودة",
        date: null,
        story: "",
        selected: false,
        day: 17,
        month: 8,
      },
      {
        id: 556,
        title: "استشهاد القديس أرسانيوس تلميذ القديس سوسنيوس - 18 برمودة",
        date: null,
        story: "",
        selected: false,
        day: 18,
        month: 8,
      },
      {
        id: 557,
        title:
          "نياحة القديس أبوللو تلميذ القديس الأنبا صموئيل المعترف - 18 برمودة",
        date: null,
        story: "",
        selected: false,
        day: 18,
        month: 8,
      },
      {
        id: 558,
        title: "استشهاد القديس سمعان الأرمني أسقف بلاد فارس - 19 برمودة",
        date: null,
        story: "",
        selected: false,
        day: 19,
        month: 8,
      },
      {
        id: 559,
        title:
          "استشهاد الشهداء يوحنا أبو نجاح الكبير والرئيس أبو العلا فهد بن إبراهيم وزملائهما - 19 برمودة",
        date: null,
        story: "",
        selected: false,
        day: 19,
        month: 8,
      },
      {
        id: 560,
        title: "استشهاد الراهب داود بن غبريال البرجي - 19 برمودة",
        date: null,
        story: "",
        selected: false,
        day: 19,
        month: 8,
      },
      {
        id: 561,
        title:
          "استشهاد القديس ببنوده الذي من دندرة (دندرة: قرية كبيرة تقع غرب مدينة قنا) - 20 برمودة",
        date: null,
        story: "",
        selected: false,
        day: 20,
        month: 8,
      },
      {
        id: 562,
        title: "تذكار القديسة العذراء مريم والدة الإله - 21 برمودة",
        date: null,
        story: "",
        selected: false,
        day: 21,
        month: 8,
      },
      {
        id: 563,
        title: "نياحة القديس بروتاؤس أسقف أثينا - 21 برمودة",
        date: null,
        story: "",
        selected: false,
        day: 21,
        month: 8,
      },
      {
        id: 564,
        title:
          "نياحة القديس البابا ألكسندروس الأول البطريرك التاسع عشر من بطاركة الكرازة المرقسية - 22 برمودة",
        date: null,
        story: "",
        selected: false,
        day: 22,
        month: 8,
      },
      {
        id: 565,
        title:
          "نياحة القديس البابا مرقس الثاني البطريرك التاسع والأربعين من بطاركة الكرازة المرقسية - 22 برمودة",
        date: null,
        story: "",
        selected: false,
        day: 22,
        month: 8,
      },
      {
        id: 566,
        title:
          "نياحة القديس البابا خائيل الثاني البطريرك الثالث والخمسين من بطاركة الكرازة المرقسية - 22 برمودة",
        date: null,
        story: "",
        selected: false,
        day: 22,
        month: 8,
      },
      {
        id: 567,
        title: "نياحة القديس إسحاق الهوريني - 22 برمودة",
        date: null,
        story: "",
        selected: false,
        day: 22,
        month: 8,
      },
      {
        id: 568,
        title: "شهادة القديس جورجيوس العظيم في الشهداء - 23 برمودة",
        date: null,
        story: "",
        selected: false,
        day: 23,
        month: 8,
      },
      {
        id: 569,
        title: "استشهاد القديس سنا الجندي رفيق القديس إيسوذوروس - 24 برمودة",
        date: null,
        story: "",
        selected: false,
        day: 24,
        month: 8,
      },
      {
        id: 570,
        title:
          "نياحة القديس البابا شنوده الأول البطريرك الخامس والخمسين من بطاركة الكرازة المرقسية - 24 برمودة",
        date: null,
        story: "",
        selected: false,
        day: 24,
        month: 8,
      },
      {
        id: 571,
        title: "استشهاد القديسة سارة وولديها - 25 برمودة",
        date: null,
        story: "",
        selected: false,
        day: 25,
        month: 8,
      },
      {
        id: 572,
        title:
          "استشهاد القديس تاوضروس العابد والمائة والعشرين شهيداً - 25 برمودة",
        date: null,
        story: "",
        selected: false,
        day: 25,
        month: 8,
      },
      {
        id: 573,
        title: "شهادة القديس سوسنيوس ومعه 1100 شخصاً - 26 برمودة",
        date: null,
        story: "",
        selected: false,
        day: 26,
        month: 8,
      },
      {
        id: 574,
        title:
          "نياحة القديس البابا يوأنس السابع البطريرك الثامن والسبعين من بطاركة الكرازة المرقسية - 26 برمودة",
        date: null,
        story: "",
        selected: false,
        day: 26,
        month: 8,
      },
      {
        id: 575,
        title: "شهادة القديس بقطر بن رومانوس - 27 برمودة",
        date: null,
        story: "",
        selected: false,
        day: 27,
        month: 8,
      },
      {
        id: 576,
        title: "استشهاد القديس ميليوس الناسك - 28 برمودة",
        date: null,
        story: "",
        selected: false,
        day: 28,
        month: 8,
      },
      {
        id: 577,
        title: "تذكار الأعياد السيدية البشارة والميلاد والقيامة - 29 برمودة",
        date: null,
        story: "",
        selected: false,
        day: 29,
        month: 8,
      },
      {
        id: 578,
        title: "نياحة القديس أرسطوس أحد السبعين - 29 برمودة",
        date: null,
        story: "",
        selected: false,
        day: 29,
        month: 8,
      },
      {
        id: 579,
        title: "نياحة القديس أكاكيوس أسقف أورشليم - 29 برمودة",
        date: null,
        story: "",
        selected: false,
        day: 29,
        month: 8,
      },
      {
        id: 580,
        title:
          "استشهاد القديس مار مرقس الرسول الإنجيلي كاروز الديار المصرية - 30 برمودة",
        date: null,
        story: "",
        selected: false,
        day: 30,
        month: 8,
      },
      {
        id: 581,
        title: "ميلاد البتول العذراء مريم والدة الإله - 1 بشنس",
        date: null,
        story: "",
        selected: false,
        day: 1,
        month: 9,
      },
      {
        id: 582,
        title: "نياحة أيوب الصديق - 2 بشنس",
        date: null,
        story: "",
        selected: false,
        day: 2,
        month: 9,
      },
      {
        id: 583,
        title:
          "نياحة القديس تادرس الطبانيسي تلميذ القديس باخوميوس أب الشركة - 2 بشنس",
        date: null,
        story: "",
        selected: false,
        day: 2,
        month: 9,
      },
      {
        id: 584,
        title: "استشهاد القديس فيلوثاوس من درنكة - 2 بشنس",
        date: null,
        story: "",
        selected: false,
        day: 2,
        month: 9,
      },
      {
        id: 585,
        title: "نياحة القديس ياسون أحد السبعين رسولاً - 3 بشنس",
        date: null,
        story: "",
        selected: false,
        day: 3,
        month: 9,
      },
      {
        id: 586,
        title: "استشهاد القديس أوتيموس القس من فوه - 3 بشنس",
        date: null,
        story: "",
        selected: false,
        day: 3,
        month: 9,
      },
      {
        id: 587,
        title:
          "نياحة القديس البابا غبريال الرابع البطريرك السادس والثمانين من بطاركة الكرازة المرقسية - 3 بشنس",
        date: null,
        story: "",
        selected: false,
        day: 3,
        month: 9,
      },
      {
        id: 588,
        title:
          "نياحة القديس البابا يوأنس الأول البطريرك التاسع والعشرين من بطاركة الكرازة المرقسية - 4 بشنس",
        date: null,
        story: "",
        selected: false,
        day: 4,
        month: 9,
      },
      {
        id: 589,
        title:
          "نياحة القديس البابا يوأنس الخامس البطريرك الثاني والسبعين من بطاركة الكرازة المرقسية - 4 بشنس",
        date: null,
        story: "",
        selected: false,
        day: 4,
        month: 9,
      },
      {
        id: 590,
        title: "استشهاد إرميا النبي - 5 بشنس",
        date: null,
        story: "",
        selected: false,
        day: 5,
        month: 9,
      },
      {
        id: 591,
        title: "استشهاد القديس إسحاق الدفراوي - 6 بشنس",
        date: null,
        story: "",
        selected: false,
        day: 6,
        month: 9,
      },
      {
        id: 592,
        title: "استشهاد الأم دولاجي وأولادها الأربعة - 6 بشنس",
        date: null,
        story: "",
        selected: false,
        day: 6,
        month: 9,
      },
      {
        id: 593,
        title: "استشهاد الأنبا ببنوده من البندارة - 6 بشنس",
        date: null,
        story: "",
        selected: false,
        day: 6,
        month: 9,
      },
      {
        id: 594,
        title: "نياحة القديس مكاريوس الإسكندري - 6 بشنس",
        date: null,
        story: "",
        selected: false,
        day: 6,
        month: 9,
      },
      {
        id: 595,
        title:
          "نياحة القديس العظيم البابا أثناسيوس الرسولي البطريرك العشرين من بطاركة الكرازة المرقسية - 7 بشنس",
        date: null,
        story: "",
        selected: false,
        day: 7,
        month: 9,
      },
      {
        id: 596,
        title: "تذكار صعود ربنا يسوع المسيح إلى السماء - 8 بشنس",
        date: null,
        story: "",
        selected: false,
        day: 8,
        month: 9,
      },
      {
        id: 597,
        title: "استشهاد القديس يحنس السنهوتي - 8 بشنس",
        date: null,
        story: "",
        selected: false,
        day: 8,
        month: 9,
      },
      {
        id: 598,
        title: "نياحة القديس الأنبا دانيال قمص برية شيهيت - 8 بشنس",
        date: null,
        story: "",
        selected: false,
        day: 8,
        month: 9,
      },
      {
        id: 599,
        title: "نياحة القديسة هيلانة الملكة - 9 بشنس",
        date: null,
        story: "",
        selected: false,
        day: 9,
        month: 9,
      },
      {
        id: 600,
        title:
          "نياحة القديس البابا يوأنس الحادي عشر البطريرك التاسع والثمانين من بطاركة الكرازة المرقسية - 9 بشنس",
        date: null,
        story: "",
        selected: false,
        day: 9,
        month: 9,
      },
      {
        id: 601,
        title:
          "نياحة القديس البابا غبريال الثامن البطريرك السابع والتسعين من بطاركة الكرازة المرقسية - 9 بشنس",
        date: null,
        story: "",
        selected: false,
        day: 9,
        month: 9,
      },
      {
        id: 602,
        title:
          "إلقاء الثلاثة فتية القديسين حنانيا وعزاريا وميصائيل في أتون النار.(مخطوط 295 ميامر دير السريان وتذكر المصادر أن تاريخ نياحتهم 14 هاتور) - 10 بشنس",
        date: null,
        story: "",
        selected: false,
        day: 10,
        month: 9,
      },
      {
        id: 603,
        title: "تذكار نياحة القديس الأنبا بفنوتيوس الأسقف - 11 بشنس",
        date: null,
        story: "",
        selected: false,
        day: 11,
        month: 9,
      },
      {
        id: 604,
        title:
          "تذكار استشهاد القديسة ثاؤكليا زوجة القديس يسطس ابن الملك نوماريوس - 11 بشنس",
        date: null,
        story: "",
        selected: false,
        day: 11,
        month: 9,
      },
      {
        id: 605,
        title: "تذكار رئيس الملائكة الجليل ميخائيل - 12 بشنس",
        date: null,
        story: "",
        selected: false,
        day: 12,
        month: 9,
      },
      {
        id: 606,
        title: "تذكار نقل أعضاء القديس يوحنا ذهبي الفم - 12 بشنس",
        date: null,
        story: "",
        selected: false,
        day: 12,
        month: 9,
      },
      {
        id: 607,
        title: "تذكار ظهور صليب من نور فوق الجلجثة - 12 بشنس",
        date: null,
        story: "",
        selected: false,
        day: 12,
        month: 9,
      },
      {
        id: 608,
        title:
          "تذكار نياحة القديس البابا مرقس السابع البطريرك السادس بعد المائة من بطاركة الكرازة المرقسية - 12 بشنس",
        date: null,
        story: "",
        selected: false,
        day: 12,
        month: 9,
      },
      {
        id: 609,
        title: "تذكار استشهاد الْمُعَلِّم ملطي - 12 بشنس",
        date: null,
        story: "",
        selected: false,
        day: 12,
        month: 9,
      },
      {
        id: 610,
        title: "تذكار تكريس كنيسة الشهيدة دميانة - 12 بشنس",
        date: null,
        story: "",
        selected: false,
        day: 12,
        month: 9,
      },
      {
        id: 611,
        title: "نياحة القديس أرسانيوس معلم أولاد الملوك - 13 بشنس",
        date: null,
        story: "",
        selected: false,
        day: 13,
        month: 9,
      },
      {
        id: 612,
        title: "استشهاد القديس أبا بيجول الجندي - 13 بشنس",
        date: null,
        story: "",
        selected: false,
        day: 13,
        month: 9,
      },
      {
        id: 613,
        title: "نياحة القديس الأنبا باخوميوس أب الشركة الرهبانية - 14 بشنس",
        date: null,
        story: "",
        selected: false,
        day: 14,
        month: 9,
      },
      {
        id: 614,
        title: "استشهاد القديس أبيماخوس الفرمي - 14 بشنس",
        date: null,
        story: "",
        selected: false,
        day: 14,
        month: 9,
      },
      {
        id: 615,
        title: "استشهاد القديس سمعان الغيور القانوي أحد الاثنى عشر - 15 بشنس",
        date: null,
        story: "",
        selected: false,
        day: 15,
        month: 9,
      },
      {
        id: 616,
        title: "استشهاد أربعمائة شهيد بدندرة على اسم السيد المسيح - 15 بشنس",
        date: null,
        story: "",
        selected: false,
        day: 15,
        month: 9,
      },
      {
        id: 617,
        title: "تذكار الشماس مينا المتوحد - 15 بشنس",
        date: null,
        story: "",
        selected: false,
        day: 15,
        month: 9,
      },
      {
        id: 618,
        title: "نياحة الشيخ شمس الرئاسة أبي البركات الشهير بابن كبر - 15 بشنس",
        date: null,
        story: "",
        selected: false,
        day: 15,
        month: 9,
      },
      {
        id: 619,
        title: "تكريس كنيسة القديس يوحنا الإنجيلي بمدينة الإسكندرية - 16 بشنس",
        date: null,
        story: "",
        selected: false,
        day: 16,
        month: 9,
      },
      {
        id: 620,
        title: "تذكار نياحة القديس إبيفانيوس أسقف قبرص - 17 بشنس",
        date: null,
        story: "",
        selected: false,
        day: 17,
        month: 9,
      },
      {
        id: 621,
        title: "تذكار عيد العنصرة - 18 بشنس",
        date: null,
        story: "",
        selected: false,
        day: 18,
        month: 9,
      },
      {
        id: 622,
        title: "نياحة القديس جورجى رفيق القديس أبرآم - 18 بشنس",
        date: null,
        story: "",
        selected: false,
        day: 18,
        month: 9,
      },
      {
        id: 623,
        title: "نياحة القديس إسحاق قس القلالى - 19 بشنس",
        date: null,
        story: "",
        selected: false,
        day: 19,
        month: 9,
      },
      {
        id: 624,
        title: "استشهاد القديس إيسوذوروس الأنطاكي - 19 بشنس",
        date: null,
        story: "",
        selected: false,
        day: 19,
        month: 9,
      },
      {
        id: 625,
        title:
          "استشهاد الجنود الستة الذين رافقوا الأمير إقلاديوس الشهيد - 20 بشنس",
        date: null,
        story: "",
        selected: false,
        day: 20,
        month: 9,
      },
      {
        id: 626,
        title: "نياحة القديس الأنبا أمونيوس المتوحد بجبل تونة - 20 بشنس",
        date: null,
        story: "",
        selected: false,
        day: 20,
        month: 9,
      },
      {
        id: 627,
        title: "التذكار الشهري للقديسة العذراء مريم والدة الإله - 21 بشنس",
        date: null,
        story: "",
        selected: false,
        day: 21,
        month: 9,
      },
      {
        id: 628,
        title: "نياحة القديس مارتينيانوس - 21 بشنس",
        date: null,
        story: "",
        selected: false,
        day: 21,
        month: 9,
      },
      {
        id: 629,
        title: "نياحة القديس أندرونيقوس أحد السبعين - 22 بشنس",
        date: null,
        story: "",
        selected: false,
        day: 22,
        month: 9,
      },
      {
        id: 630,
        title: "استشهاد 142 صبياً، 28 سيدة - 22 بشنس",
        date: null,
        story: "",
        selected: false,
        day: 22,
        month: 9,
      },
      {
        id: 631,
        title: "نياحة القديس آمون مؤسس برية نتريا - 22 بشنس",
        date: null,
        story: "",
        selected: false,
        day: 22,
        month: 9,
      },
      {
        id: 632,
        title: "نياحة القديس يونياس أحد السبعين - 23 بشنس",
        date: null,
        story: "",
        selected: false,
        day: 23,
        month: 9,
      },
      {
        id: 633,
        title: "شهادة القديسة تكلا أثناء محاكمة الأمير إقلاديوس - 23 بشنس",
        date: null,
        story: "",
        selected: false,
        day: 23,
        month: 9,
      },
      {
        id: 634,
        title: "نياحة القديس بوتامون المعترف - 23 بشنس",
        date: null,
        story: "",
        selected: false,
        day: 23,
        month: 9,
      },
      {
        id: 635,
        title: "شهادة القديس يوليانوس وأمه بالإسكندرية - 23 بشنس",
        date: null,
        story: "",
        selected: false,
        day: 23,
        month: 9,
      },
      {
        id: 636,
        title: "تذكار مجيء السيد المسيح إلى أرض مصر - 24 بشنس",
        date: null,
        story: "",
        selected: false,
        day: 24,
        month: 9,
      },
      {
        id: 637,
        title: "نياحة حبقوق النبي - 24 بشنس",
        date: null,
        story: "",
        selected: false,
        day: 24,
        month: 9,
      },
      {
        id: 638,
        title: "استشهاد الراهب القديس شتوفا المقاري ( بشنونة ) - 24 بشنس",
        date: null,
        story: "",
        selected: false,
        day: 24,
        month: 9,
      },
      {
        id: 639,
        title: "استشهاد القديس قلتة الأنصناوي الطبيب - 25 بشنس",
        date: null,
        story: "",
        selected: false,
        day: 25,
        month: 9,
      },
      {
        id: 640,
        title: "نياحة الأرخن الكريم المعلم إبراهيم الجوهري - 25 بشنس",
        date: null,
        story: "",
        selected: false,
        day: 25,
        month: 9,
      },
      {
        id: 641,
        title: "استشهاد القديس توما أحد الاثني عشر رسولاً - 26 بشنس",
        date: null,
        story: "",
        selected: false,
        day: 26,
        month: 9,
      },
      {
        id: 642,
        title: "نياحة القديس لعازر حبيب الرب - 27 بشنس",
        date: null,
        story: "",
        selected: false,
        day: 27,
        month: 9,
      },
      {
        id: 643,
        title: "نياحة القديس الأنبا توماس السائح بجبل شنشيف - 27 بشنس",
        date: null,
        story: "",
        selected: false,
        day: 27,
        month: 9,
      },
      {
        id: 644,
        title:
          "نياحة القديس البابا يوأنس الثاني البطريرك الثلاثين من بطاركة الكرازة المرقسية - 27 بشنس",
        date: null,
        story: "",
        selected: false,
        day: 27,
        month: 9,
      },
      {
        id: 645,
        title: "تذكار نقل جسد القديس إبيفانيوس أسقف قبرص - 28 بشنس",
        date: null,
        story: "",
        selected: false,
        day: 28,
        month: 9,
      },
      {
        id: 646,
        title: "تذكار الأعياد السيدية البشارة والميلاد والقيامة - 29 بشنس",
        date: null,
        story: "",
        selected: false,
        day: 29,
        month: 9,
      },
      {
        id: 647,
        title: "نياحة القديس سمعان العمودي - 29 بشنس",
        date: null,
        story: "",
        selected: false,
        day: 29,
        month: 9,
      },
      {
        id: 648,
        title: "نياحة القديس فورس الرسول أحد السبعين - 30 بشنس",
        date: null,
        story: "",
        selected: false,
        day: 30,
        month: 9,
      },
      {
        id: 649,
        title:
          "نياحة القديس البابا ميخائيل الأول البطريرك الثامن والستين من بطاركة الكرازة المرقسية - 30 بشنس",
        date: null,
        story: "",
        selected: false,
        day: 30,
        month: 9,
      },
      {
        id: 650,
        title: "نياحة القديس كاربوس أحد السبعين - 1 بؤونة",
        date: null,
        story: "",
        selected: false,
        day: 1,
        month: 10,
      },
      {
        id: 651,
        title: "استشهاد القديس أبي فام الطحاوي الجُندي - 1 بؤونة",
        date: null,
        story: "",
        selected: false,
        day: 1,
        month: 10,
      },
      {
        id: 652,
        title: "استشهاد القديس قزمان الطحاوي ورفقته - 1 بؤونة",
        date: null,
        story: "",
        selected: false,
        day: 1,
        month: 10,
      },
      {
        id: 653,
        title: "تكريس كنيسة القديس لاونديوس الشامي - 1 بؤونة",
        date: null,
        story: "",
        selected: false,
        day: 1,
        month: 10,
      },
      {
        id: 654,
        title: "ظهور جسديّ القديس يوحنا المعمدان وأليشع النبي - 2 بؤونة",
        date: null,
        story: "",
        selected: false,
        day: 2,
        month: 10,
      },
      {
        id: 655,
        title:
          "نياحة القديس البابا يوأنس الثامن عشر البطريرك السابع بعد المائة من بطاركة الكرازة المرقسية - 2 بؤونة",
        date: null,
        story: "",
        selected: false,
        day: 2,
        month: 10,
      },
      {
        id: 656,
        title: "استشهاد القديس اللاديوس الأسقف - 3 بؤونة",
        date: null,
        story: "",
        selected: false,
        day: 3,
        month: 10,
      },
      {
        id: 657,
        title: "نياحة القديس الأنبا أبرآم أسقف الفيوم والجيزة - 3 بؤونة",
        date: null,
        story: "",
        selected: false,
        day: 3,
        month: 10,
      },
      {
        id: 658,
        title: "نياحة القديسة مرثا المصرية الناسكة - 3 بؤونة",
        date: null,
        story: "",
        selected: false,
        day: 3,
        month: 10,
      },
      {
        id: 659,
        title: "استشهاد القديس سينوسيوس - 4 بؤونة",
        date: null,
        story: "",
        selected: false,
        day: 4,
        month: 10,
      },
      {
        id: 660,
        title: "استشهاد القديس يوحنا الهرقلي - 4 بؤونة",
        date: null,
        story: "",
        selected: false,
        day: 4,
        month: 10,
      },
      {
        id: 661,
        title: "استشهاد القديس الأنبا آمون والبارة صوفية - 4 بؤونة",
        date: null,
        story: "",
        selected: false,
        day: 4,
        month: 10,
      },
      {
        id: 662,
        title: "نياحة القديس أباهور - 4 بؤونة",
        date: null,
        story: "",
        selected: false,
        day: 4,
        month: 10,
      },
      {
        id: 663,
        title:
          "نياحة القديس البابا يوأنس الثامن البطريرك الثمانين من بطاركة الكرازة المرقسية - 4 بؤونة",
        date: null,
        story: "",
        selected: false,
        day: 4,
        month: 10,
      },
      {
        id: 664,
        title: "نياحة القديس يعقوب المشرقي المعترف - 5 بؤونة",
        date: null,
        story: "",
        selected: false,
        day: 5,
        month: 10,
      },
      {
        id: 665,
        title: "استشهاد القديس بيفام - 5 بؤونة",
        date: null,
        story: "",
        selected: false,
        day: 5,
        month: 10,
      },
      {
        id: 666,
        title: "استشهاد القديس بشاي وبطرس - 5 بؤونة",
        date: null,
        story: "",
        selected: false,
        day: 5,
        month: 10,
      },
      {
        id: 667,
        title: "تكريس كنيسة القديس بقطر بناحية شو - 5 بؤونة",
        date: null,
        story: "",
        selected: false,
        day: 5,
        month: 10,
      },
      {
        id: 668,
        title: "استشهاد القديس ثيئودوروس الراهب - 6 بؤونة",
        date: null,
        story: "",
        selected: false,
        day: 6,
        month: 10,
      },
      {
        id: 669,
        title: "نياحة القديس ديديموس الضرير - 6 بؤونة",
        date: null,
        story: "",
        selected: false,
        day: 6,
        month: 10,
      },
      {
        id: 670,
        title: "استشهاد القديس أبسخيرون الجندي القلينى - 7 بؤونة",
        date: null,
        story: "",
        selected: false,
        day: 7,
        month: 10,
      },
      {
        id: 671,
        title: "نياحة القديس مويسيس بجبل أخميم - 7 بؤونة",
        date: null,
        story: "",
        selected: false,
        day: 7,
        month: 10,
      },
      {
        id: 672,
        title: "تكريس كنيسة الأنبا متاؤس الفاخورى بجبل إسنا - 7 بؤونة",
        date: null,
        story: "",
        selected: false,
        day: 7,
        month: 10,
      },
      {
        id: 673,
        title:
          "تذكار تكريس كنيسة السيدة العذراء المعروفة بالمحمَّة (المحمة: مسطرد حالياً، قرب القاهرة) - 8 بؤونة",
        date: null,
        story: "",
        selected: false,
        day: 8,
        month: 10,
      },
      {
        id: 674,
        title: "استشهاد القديس جرجس الجديد - 8 بؤونة",
        date: null,
        story: "",
        selected: false,
        day: 8,
        month: 10,
      },
      {
        id: 675,
        title: "تذكار القديسة تمادا وأولادها وأرمانوس وأمه - 8 بؤونة",
        date: null,
        story: "",
        selected: false,
        day: 8,
        month: 10,
      },
      {
        id: 676,
        title: "نياحة القديس صموئيل النبي - 9 بؤونة",
        date: null,
        story: "",
        selected: false,
        day: 9,
        month: 10,
      },
      {
        id: 677,
        title: "استشهاد القديس لوكيليانوس وأربعة آخرين معه - 9 بؤونة",
        date: null,
        story: "",
        selected: false,
        day: 9,
        month: 10,
      },
      {
        id: 678,
        title: "استشهاد القديسين أبامون وسرنا - 9 بؤونة",
        date: null,
        story: "",
        selected: false,
        day: 9,
        month: 10,
      },
      {
        id: 679,
        title: "نقل أعضاء الشهيد مرقوريوس أبى سيفين إلى مصر - 9 بؤونة",
        date: null,
        story: "",
        selected: false,
        day: 9,
        month: 10,
      },
      {
        id: 680,
        title: "استشهاد القديس القس مكسي الشنراوي - 10 بؤونة",
        date: null,
        story: "",
        selected: false,
        day: 10,
        month: 10,
      },
      {
        id: 681,
        title: "استشهاد القديسة دابامون وأختها بصطامون وأمهما صوفية - 10 بؤونة",
        date: null,
        story: "",
        selected: false,
        day: 10,
        month: 10,
      },
      {
        id: 682,
        title: "تذكار فتح الكنائس - 10 بؤونة",
        date: null,
        story: "",
        selected: false,
        day: 10,
        month: 10,
      },
      {
        id: 683,
        title:
          "نياحة القديس البابا يوأنس السادس عشر البطريرك 103 من بطاركة الكرازة المرقسية - 10 بؤونة",
        date: null,
        story: "",
        selected: false,
        day: 10,
        month: 10,
      },
      {
        id: 684,
        title: "استشهاد القديس إقلاديوس - 11 بؤونة",
        date: null,
        story: "",
        selected: false,
        day: 11,
        month: 10,
      },
      {
        id: 685,
        title:
          "تذكار تكريس هيكل الأربعين شهيداً بكنيسة إبسوتير ( المخلص ) بالإسكندرية - 11 بؤونة",
        date: null,
        story: "",
        selected: false,
        day: 11,
        month: 10,
      },
      {
        id: 686,
        title: "تذكار رئيس الملائكة ميخائيل - 12 بؤونة",
        date: null,
        story: "",
        selected: false,
        day: 12,
        month: 10,
      },
      {
        id: 687,
        title: "نياحة القديسة أوفيمية - 12 بؤونة",
        date: null,
        story: "",
        selected: false,
        day: 12,
        month: 10,
      },
      {
        id: 688,
        title:
          "نياحة القديس البابا يسطس البطريرك السادس من بطاركة الكرازة المرقسية - 12 بؤونة",
        date: null,
        story: "",
        selected: false,
        day: 12,
        month: 10,
      },
      {
        id: 689,
        title:
          "نياحة القديس البابا كيرلس الثاني البطريرك السابع والستين من بطاركة الكرازة المرقسية - 12 بؤونة",
        date: null,
        story: "",
        selected: false,
        day: 12,
        month: 10,
      },
      {
        id: 690,
        title: "تذكار رئيس الملائكة جبرائيل المبشر - 13 بؤونة",
        date: null,
        story: "",
        selected: false,
        day: 13,
        month: 10,
      },
      {
        id: 691,
        title: "نياحة القديس يوحنا أسقف أورشليم - 13 بؤونة",
        date: null,
        story: "",
        selected: false,
        day: 13,
        month: 10,
      },
      {
        id: 692,
        title: "استشهاد القديسين أباكير وفيلبس ويوحنا وأبطلماوس - 14 بؤونة",
        date: null,
        story: "",
        selected: false,
        day: 14,
        month: 10,
      },
      {
        id: 693,
        title:
          "نياحة القديس البابا يوأنس التاسع عشر البطريرك الثالث عشر بعد المائة من بطاركة الكرازة المرقسية - 14 بؤونة",
        date: null,
        story: "",
        selected: false,
        day: 14,
        month: 10,
      },
      {
        id: 694,
        title: "تكريس كنيسة الشهيد مار مينا العجائبي بمريوط - 15 بؤونة",
        date: null,
        story: "",
        selected: false,
        day: 15,
        month: 10,
      },
      {
        id: 695,
        title: "استلام جسد مار مرقس - 15 بؤونة",
        date: null,
        story: "",
        selected: false,
        day: 15,
        month: 10,
      },
      {
        id: 696,
        title: "نياحة القديس أبى نوفر السائح - 16 بؤونة",
        date: null,
        story: "",
        selected: false,
        day: 16,
        month: 10,
      },
      {
        id: 697,
        title: "نياحة القديس لاتصون البهنساوي - 17 بؤونة",
        date: null,
        story: "",
        selected: false,
        day: 17,
        month: 10,
      },
      {
        id: 698,
        title:
          "عودة رفات القديس مار مرقس إلى الكاتدرائية المرقسية الجديدة - 17 بؤونة",
        date: null,
        story: "",
        selected: false,
        day: 17,
        month: 10,
      },
      {
        id: 699,
        title:
          "نياحة القديس البابا داميانوس البطريرك الخامس والثلاثين من بطاركة الكرازة المرقسية - 18 بؤونة",
        date: null,
        story: "",
        selected: false,
        day: 18,
        month: 10,
      },
      {
        id: 700,
        title:
          "افتتاح الكاتدرائية الجديدة بدير الأنبا رويس بالقاهرة - 18 بؤونة",
        date: null,
        story: "",
        selected: false,
        day: 18,
        month: 10,
      },
      {
        id: 701,
        title: "استشهاد القديس جرجس المزاحم - 19 بؤونة",
        date: null,
        story: "",
        selected: false,
        day: 19,
        month: 10,
      },
      {
        id: 702,
        title: "استشهاد القديس بشاي أنوب - 19 بؤونة",
        date: null,
        story: "",
        selected: false,
        day: 19,
        month: 10,
      },
      {
        id: 703,
        title:
          "نياحة البابا أرشيلاؤس البطريرك الثامن عشر من بطاركة الكرازة المرقسية - 19 بؤونة",
        date: null,
        story: "",
        selected: false,
        day: 19,
        month: 10,
      },
      {
        id: 704,
        title:
          "وضع جسد القديس مار مرقس الرسول بالمزار المخصص له بكنيسته بدير الأنبا رويس - 19 بؤونة",
        date: null,
        story: "",
        selected: false,
        day: 19,
        month: 10,
      },
      {
        id: 705,
        title: "نياحة القديس أليشع النبي - 20 بؤونة",
        date: null,
        story: "",
        selected: false,
        day: 20,
        month: 10,
      },
      {
        id: 706,
        title: "تكريس كنيسة القديس أباكلوج القس - 20 بؤونة",
        date: null,
        story: "",
        selected: false,
        day: 20,
        month: 10,
      },
      {
        id: 707,
        title: "استشهاد القديس إقلاديوس - 21 بؤونة",
        date: null,
        story: "",
        selected: false,
        day: 21,
        month: 10,
      },
      {
        id: 708,
        title:
          "تذكار تكريس هيكل الأربعين شهيداً بكنيسة إبسوتير ( المخلص ) بالإسكندرية - 21 بؤونة",
        date: null,
        story: "",
        selected: false,
        day: 21,
        month: 10,
      },
      {
        id: 709,
        title: "تكريس كنيسة الشهيدين قزمان ودميان وإخوتهما وأمهما - 22 بؤونة",
        date: null,
        story: "",
        selected: false,
        day: 22,
        month: 10,
      },
      {
        id: 710,
        title: "نياحة القديس أبانوب المعترف - 23 بؤونة",
        date: null,
        story: "",
        selected: false,
        day: 23,
        month: 10,
      },
      {
        id: 711,
        title: "استشهاد القديس الأنبا موسى الأسود - 24 بؤونة",
        date: null,
        story: "",
        selected: false,
        day: 24,
        month: 10,
      },
      {
        id: 712,
        title: "نياحة القديس إيسوذوروس قس الإسقيط - 24 بؤونة",
        date: null,
        story: "",
        selected: false,
        day: 24,
        month: 10,
      },
      {
        id: 713,
        title:
          "نياحة القديس البابا بطرس الرابع البطريرك الرابع والثلاثين من بطاركة الكرازة المرقسية - 25 بؤونة",
        date: null,
        story: "",
        selected: false,
        day: 25,
        month: 10,
      },
      {
        id: 714,
        title: "تكريس كنيسة الملاك غبريال بجبل النقلون بالفيوم - 26 بؤونة",
        date: null,
        story: "",
        selected: false,
        day: 26,
        month: 10,
      },
      {
        id: 715,
        title: "استشهاد القديس حنانيا الرسول - 27 بؤونة",
        date: null,
        story: "",
        selected: false,
        day: 27,
        month: 10,
      },
      {
        id: 716,
        title: "استشهاد القديس توماس الذي من شندلات - 27 بؤونة",
        date: null,
        story: "",
        selected: false,
        day: 27,
        month: 10,
      },
      {
        id: 717,
        title: "نياحة القديس يوحنا بن الأبح - 27 بؤونة",
        date: null,
        story: "",
        selected: false,
        day: 27,
        month: 10,
      },
      {
        id: 718,
        title:
          "نياحة القديس البابا ثاؤدوسيوس البطريرك الثالث والثلاثين من بطاركة الكرازة المرقسية - 28 بؤونة",
        date: null,
        story: "",
        selected: false,
        day: 28,
        month: 10,
      },
      {
        id: 719,
        title: "تذكار تكريس كنيسة الأنبا صرابامون أسقف نيقيوس - 28 بؤونة",
        date: null,
        story: "",
        selected: false,
        day: 28,
        month: 10,
      },
      {
        id: 720,
        title: "تذكار الأعياد السيدية البشارة والميلاد والقيامة - 29 بؤونة",
        date: null,
        story: "",
        selected: false,
        day: 29,
        month: 10,
      },
      {
        id: 721,
        title: "استشهاد السبعة نساك بجبل تونة - 29 بؤونة",
        date: null,
        story: "",
        selected: false,
        day: 29,
        month: 10,
      },
      {
        id: 722,
        title: "استشهاد القديسين أباهور وديودورة أمه - 29 بؤونة",
        date: null,
        story: "",
        selected: false,
        day: 29,
        month: 10,
      },
      {
        id: 723,
        title: "ميلاد القديس يوحنا المعمدان - 30 بؤونة",
        date: null,
        story: "",
        selected: false,
        day: 30,
        month: 10,
      },
      {
        id: 724,
        title:
          "نياحة القديس البابا قسما الأول البطريرك الرابع والأربعين من بطاركة الكرازة المرقسية - 30 بؤونة",
        date: null,
        story: "",
        selected: false,
        day: 30,
        month: 10,
      },
      {
        id: 725,
        title: "استشهاد القديسة أفرونيا الناسكة - 1 ابيب",
        date: null,
        story: "",
        selected: false,
        day: 1,
        month: 11,
      },
      {
        id: 726,
        title: "نياحة القديسين بيوخا وتيابان القسيسين - 1 ابيب",
        date: null,
        story: "",
        selected: false,
        day: 1,
        month: 11,
      },
      {
        id: 727,
        title: "تكريس كنيسة الشهيد مار مينا بجبل أبنوب - 1 ابيب",
        date: null,
        story: "",
        selected: false,
        day: 1,
        month: 11,
      },
      {
        id: 728,
        title: "استشهاد القديس يهوذا الرسول ( لباوس الملقب تداوس ) - 2 ابيب",
        date: null,
        story: "",
        selected: false,
        day: 2,
        month: 11,
      },
      {
        id: 729,
        title:
          "نياحة القديس البابا كيرلس الأول البطريرك الرابع والعشرين من بطاركة الكرازة المرقسية - 3 ابيب",
        date: null,
        story: "",
        selected: false,
        day: 3,
        month: 11,
      },
      {
        id: 730,
        title: "نياحة القديس كلستينوس بابا روما - 3 ابيب",
        date: null,
        story: "",
        selected: false,
        day: 3,
        month: 11,
      },
      {
        id: 731,
        title: "تذكار نقل أعضاء الشهيدين أباكير ويوجنا - 4 ابيب",
        date: null,
        story: "",
        selected: false,
        day: 4,
        month: 11,
      },
      {
        id: 732,
        title: "استشهاد القديسين بطرس وبولس - 5 ابيب",
        date: null,
        story: "",
        selected: false,
        day: 5,
        month: 11,
      },
      {
        id: 733,
        title: "استشهاد القديس مرقس والي البرلس، والد القديسة دميانة - 5 ابيب",
        date: null,
        story: "",
        selected: false,
        day: 5,
        month: 11,
      },
      {
        id: 734,
        title: "استشهاد القديس أولمباس أحد السبعين تلميذاً - 6 ابيب",
        date: null,
        story: "",
        selected: false,
        day: 6,
        month: 11,
      },
      {
        id: 735,
        title: "استشهاد القديسة ثاؤدوسية ومن معها - 6 ابيب",
        date: null,
        story: "",
        selected: false,
        day: 6,
        month: 11,
      },
      {
        id: 736,
        title: "نياحة القديس العظيم الأنبا شنوده رئيس المتوحدين - 7 ابيب",
        date: null,
        story: "",
        selected: false,
        day: 7,
        month: 11,
      },
      {
        id: 737,
        title: "نياحة القديس الأنبا بيشوي - 8 ابيب",
        date: null,
        story: "",
        selected: false,
        day: 8,
        month: 11,
      },
      {
        id: 738,
        title: "استشهاد القديسين أبيرؤوه وأثوم - 8 ابيب",
        date: null,
        story: "",
        selected: false,
        day: 8,
        month: 11,
      },
      {
        id: 739,
        title: "استشهاد القديس بلانا القس - 8 ابيب",
        date: null,
        story: "",
        selected: false,
        day: 8,
        month: 11,
      },
      {
        id: 740,
        title: "استشهاد القديس بيمانون - 8 ابيب",
        date: null,
        story: "",
        selected: false,
        day: 8,
        month: 11,
      },
      {
        id: 741,
        title: "نياحة القديس الأنبا كاراس السائح - 8 ابيب",
        date: null,
        story: "",
        selected: false,
        day: 8,
        month: 11,
      },
      {
        id: 742,
        title: "نياحة القديس مرقس الأنطوني - 8 ابيب",
        date: null,
        story: "",
        selected: false,
        day: 8,
        month: 11,
      },
      {
        id: 743,
        title: "استشهاد القديس سمعان بن حلفي أسقف أورشليم - 9 ابيب",
        date: null,
        story: "",
        selected: false,
        day: 9,
        month: 11,
      },
      {
        id: 744,
        title:
          "نياحة القديس البابا كلاوديانوس البطريرك التاسع من بطاركة الكرازة المرقسية - 9 ابيب",
        date: null,
        story: "",
        selected: false,
        day: 9,
        month: 11,
      },
      {
        id: 745,
        title: "استشهاد القديس ثاؤدوروس أسقف الخمس مدن الغربية - 10 ابيب",
        date: null,
        story: "",
        selected: false,
        day: 10,
        month: 11,
      },
      {
        id: 746,
        title: "استشهاد القديس ثاؤدوروس أسقف كورنثوس ومن معه - 10 ابيب",
        date: null,
        story: "",
        selected: false,
        day: 10,
        month: 11,
      },
      {
        id: 747,
        title: "استشهاد القديسين يوحنا وسمعان ابن عمه - 11 ابيب",
        date: null,
        story: "",
        selected: false,
        day: 11,
        month: 11,
      },
      {
        id: 748,
        title: "نياحة القديس العظيم الأنبا إشعياء الإسقيطى - 11 ابيب",
        date: null,
        story: "",
        selected: false,
        day: 11,
        month: 11,
      },
      {
        id: 749,
        title: "تذكار رئيس الملائكة الجليل ميخائيل رئيس جند الرب - 12 ابيب",
        date: null,
        story: "",
        selected: false,
        day: 12,
        month: 11,
      },
      {
        id: 750,
        title: "استشهاد القديس أباهور السرياقوسي - 12 ابيب",
        date: null,
        story: "",
        selected: false,
        day: 12,
        month: 11,
      },
      {
        id: 751,
        title: "نياحة القديس الأنبا شيشوي الكبير - 12 ابيب",
        date: null,
        story: "",
        selected: false,
        day: 12,
        month: 11,
      },
      {
        id: 752,
        title: "نياحة القديس بسنتاؤس أسقف قفط - 13 ابيب",
        date: null,
        story: "",
        selected: false,
        day: 13,
        month: 11,
      },
      {
        id: 753,
        title: "استشهاد القديس أبامون الطوخى - 13 ابيب",
        date: null,
        story: "",
        selected: false,
        day: 13,
        month: 11,
      },
      {
        id: 754,
        title: "استشهاد القديس شنوده في أوائل حكم العرب - 13 ابيب",
        date: null,
        story: "",
        selected: false,
        day: 13,
        month: 11,
      },
      {
        id: 755,
        title: "استشهاد القديس بروكونيوس - 14 ابيب",
        date: null,
        story: "",
        selected: false,
        day: 14,
        month: 11,
      },
      {
        id: 756,
        title:
          "نياحة القديس البابا بطرس الخامس البطريرك الثالث والثمانين من بطاركة الكرازة المرقسية - 14 ابيب",
        date: null,
        story: "",
        selected: false,
        day: 14,
        month: 11,
      },
      {
        id: 757,
        title: "نياحة القديس مار أفرام السرياني - 15 ابيب",
        date: null,
        story: "",
        selected: false,
        day: 15,
        month: 11,
      },
      {
        id: 758,
        title: "استشهاد القديسين كيرياكوس ويوليطة أمه - 15 ابيب",
        date: null,
        story: "",
        selected: false,
        day: 15,
        month: 11,
      },
      {
        id: 759,
        title: "استشهاد القديس أوروسيوس - 15 ابيب",
        date: null,
        story: "",
        selected: false,
        day: 15,
        month: 11,
      },
      {
        id: 760,
        title: "نياحة القديس يوحنا صاحب الإنجيل الذهب - 16 ابيب",
        date: null,
        story: "",
        selected: false,
        day: 16,
        month: 11,
      },
      {
        id: 761,
        title:
          "وضع جسد الشهيد مار جرجس الروماني بكنيسته بمصر القديمة - 16 ابيب",
        date: null,
        story: "",
        selected: false,
        day: 16,
        month: 11,
      },
      {
        id: 762,
        title: "تكريس بيعة الشهيد فيلوثيئوس - 16 ابيب",
        date: null,
        story: "",
        selected: false,
        day: 16,
        month: 11,
      },
      {
        id: 763,
        title: "استشهاد القديسة أوفيمية - 17 ابيب",
        date: null,
        story: "",
        selected: false,
        day: 17,
        month: 11,
      },
      {
        id: 764,
        title: "استشهاد القديستين تكلا ومرثا من إسنا - 17 ابيب",
        date: null,
        story: "",
        selected: false,
        day: 17,
        month: 11,
      },
      {
        id: 765,
        title: "استشهاد القديس يعقوب الرسول أخي الرب - 18 ابيب",
        date: null,
        story: "",
        selected: false,
        day: 18,
        month: 11,
      },
      {
        id: 766,
        title:
          "استشهاد القديسين الأنبا بضابا أسقف قفط وأنبا أندراوس وأنبا خرستوذولوس - 19 ابيب",
        date: null,
        story: "",
        selected: false,
        day: 19,
        month: 11,
      },
      {
        id: 767,
        title: "استشهاد شهداء مذبحة إسنا - 19 ابيب",
        date: null,
        story: "",
        selected: false,
        day: 19,
        month: 11,
      },
      {
        id: 768,
        title: "استشهاد القديس بطلون الطبيب - 19 ابيب",
        date: null,
        story: "",
        selected: false,
        day: 19,
        month: 11,
      },
      {
        id: 769,
        title:
          "نياحة القديس البابا يوأنس العاشر البطريرك الخامس والثمانين من بطاركة الكرازة المر - 19 ابيب",
        date: null,
        story: "",
        selected: false,
        day: 19,
        month: 11,
      },
      {
        id: 770,
        title: "استشهاد القديس تادرس الشُطبي - 20 ابيب",
        date: null,
        story: "",
        selected: false,
        day: 20,
        month: 11,
      },
      {
        id: 771,
        title: "تذكار القديسة العذراء مريم - 21 ابيب",
        date: null,
        story: "",
        selected: false,
        day: 21,
        month: 11,
      },
      {
        id: 772,
        title: "نياحة القديس سوسنيوس الخصي - 21 ابيب",
        date: null,
        story: "",
        selected: false,
        day: 21,
        month: 11,
      },
      {
        id: 773,
        title: "استشهاد القديس مكاريوس بن واسيليدس الوزير - 22 ابيب",
        date: null,
        story: "",
        selected: false,
        day: 22,
        month: 11,
      },
      {
        id: 774,
        title: "استشهاد القديس لاونديوس - 22 ابيب",
        date: null,
        story: "",
        selected: false,
        day: 22,
        month: 11,
      },
      {
        id: 775,
        title: "استشهاد القديس لونجينوس القائد - 23 ابيب",
        date: null,
        story: "",
        selected: false,
        day: 23,
        month: 11,
      },
      {
        id: 776,
        title: "استشهاد القديسة مارينا - 23 ابيب",
        date: null,
        story: "",
        selected: false,
        day: 23,
        month: 11,
      },
      {
        id: 777,
        title: "استشهاد القديس أبانوب النهيسي - 24 ابيب",
        date: null,
        story: "",
        selected: false,
        day: 24,
        month: 11,
      },
      {
        id: 778,
        title:
          "نياحة القديس البابا سيماؤن الثاني البطريرك الثاني والأربعين من بطاركة الكرازة المرقسية - 24 ابيب",
        date: null,
        story: "",
        selected: false,
        day: 24,
        month: 11,
      },
      {
        id: 779,
        title: "تكريس كنيسة الشهيد مرقوريوس أبي سيفين - 25 ابيب",
        date: null,
        story: "",
        selected: false,
        day: 25,
        month: 11,
      },
      {
        id: 780,
        title: "استشهاد القديس إسحاق - 25 ابيب",
        date: null,
        story: "",
        selected: false,
        day: 25,
        month: 11,
      },
      {
        id: 781,
        title: "استشهاد القديسة ليارية - 25 ابيب",
        date: null,
        story: "",
        selected: false,
        day: 25,
        month: 11,
      },
      {
        id: 782,
        title: "استشهاد القديستين تكلة وموجي - 25 ابيب",
        date: null,
        story: "",
        selected: false,
        day: 25,
        month: 11,
      },
      {
        id: 783,
        title: "استشهاد القديس أنطونيوس البباوي - 25 ابيب",
        date: null,
        story: "",
        selected: false,
        day: 25,
        month: 11,
      },
      {
        id: 784,
        title: "استشهاد القديس أباكراجون - 25 ابيب",
        date: null,
        story: "",
        selected: false,
        day: 25,
        month: 11,
      },
      {
        id: 785,
        title: "استشهاد القديس دوماديوس السرياني - 25 ابيب",
        date: null,
        story: "",
        selected: false,
        day: 25,
        month: 11,
      },
      {
        id: 786,
        title: "نياحة القديس بلامون - 25 ابيب",
        date: null,
        story: "",
        selected: false,
        day: 25,
        month: 11,
      },
      {
        id: 787,
        title: "نياحة القديس يوسف البار خطيب القديسة مريم العذراء - 26 ابيب",
        date: null,
        story: "",
        selected: false,
        day: 26,
        month: 11,
      },
      {
        id: 788,
        title:
          "نياحة القديس البابا تيموثاوس الأول البطريرك الثاني والعشرين من بطاركة الكرازة المرقسية - 26 ابيب",
        date: null,
        story: "",
        selected: false,
        day: 26,
        month: 11,
      },
      {
        id: 789,
        title: "استشهاد القديس أبامون - 27 ابيب",
        date: null,
        story: "",
        selected: false,
        day: 27,
        month: 11,
      },
      {
        id: 790,
        title: "تكريس كنيسة القديس أبي فام الجندي الأوسيمي - 27 ابيب",
        date: null,
        story: "",
        selected: false,
        day: 27,
        month: 11,
      },
      {
        id: 791,
        title: "نياحة القديسة مريم المجدلية - 28 ابيب",
        date: null,
        story: "",
        selected: false,
        day: 28,
        month: 11,
      },
      {
        id: 792,
        title: "تذكار الأعياد السيدية البشارة والميلاد والقيامة - 29 ابيب",
        date: null,
        story: "",
        selected: false,
        day: 29,
        month: 11,
      },
      {
        id: 793,
        title: "تذكار نقل أعضاء القديس أندراوس الرسول - 29 ابيب",
        date: null,
        story: "",
        selected: false,
        day: 29,
        month: 11,
      },
      {
        id: 794,
        title: "استشهاد القديس ورشنوفيوس - 29 ابيب",
        date: null,
        story: "",
        selected: false,
        day: 29,
        month: 11,
      },
      {
        id: 795,
        title: "استشهاد القديس مرقوريوس وأفرام من أخميم - 30 ابيب",
        date: null,
        story: "",
        selected: false,
        day: 30,
        month: 11,
      },
      {
        id: 796,
        title: "استشهاد القديس أبالي بن يسطس - 1 مسرى",
        date: null,
        story: "",
        selected: false,
        day: 1,
        month: 12,
      },
      {
        id: 797,
        title:
          "نياحة القديس البابا كيرلس الخامس البطريرك الثاني عشر بعد المائة من بطاركة الكرازة المرقسية - 1 مسرى",
        date: null,
        story: "",
        selected: false,
        day: 1,
        month: 12,
      },
      {
        id: 798,
        title: "نياحة القديسة بائيسة - 2 مسرى",
        date: null,
        story: "",
        selected: false,
        day: 2,
        month: 12,
      },
      {
        id: 799,
        title: "نقل جسد القديس سمعان العمودي إلى مدينة القسطنطينية - 3 مسرى",
        date: null,
        story: "",
        selected: false,
        day: 3,
        month: 12,
      },
      {
        id: 800,
        title:
          "نياحة القديس البابا إبريموس البطريرك الخامس من بطاركة الكرازة المرقسية - 3 مسرى",
        date: null,
        story: "",
        selected: false,
        day: 3,
        month: 12,
      },
      {
        id: 801,
        title: "نياحة حزقيا الملك البار - 4 مسرى",
        date: null,
        story: "",
        selected: false,
        day: 4,
        month: 12,
      },
      {
        id: 802,
        title: "تكريس كنيسة القديس العظيم الأنبا أنطونيوس - 4 مسرى",
        date: null,
        story: "",
        selected: false,
        day: 4,
        month: 12,
      },
      {
        id: 803,
        title: "نياحة القديس يوحنا الجُندي - 5 مسرى",
        date: null,
        story: "",
        selected: false,
        day: 5,
        month: 12,
      },
      {
        id: 804,
        title: "استشهاد القديسة يوليطة المجاهدة - 6 مسرى",
        date: null,
        story: "",
        selected: false,
        day: 6,
        month: 12,
      },
      {
        id: 805,
        title: "نياحة القديس يعقوب البرادعي - 6 مسرى",
        date: null,
        story: "",
        selected: false,
        day: 6,
        month: 12,
      },
      {
        id: 806,
        title:
          "نياحة القديس الأنبا ويصا تلميذ الأنبا شنوده رئيس المتوحدين - 6 مسرى",
        date: null,
        story: "",
        selected: false,
        day: 6,
        month: 12,
      },
      {
        id: 807,
        title:
          "بشارة الملاك للقديس يواقيم بميلاد القديسة العذراء مريم - 7 مسرى",
        date: null,
        story: "",
        selected: false,
        day: 7,
        month: 12,
      },
      {
        id: 808,
        title:
          "نياحة القديس البابا تيموثاوس الثاني البطريرك السادس والعشرين من بطاركة الكرازة المرقسية - 7 مسرى",
        date: null,
        story: "",
        selected: false,
        day: 7,
        month: 12,
      },
      {
        id: 809,
        title: "نياحة القديس بسنتاؤس الناسك بجبل الطود - 7 مسرى",
        date: null,
        story: "",
        selected: false,
        day: 7,
        month: 12,
      },
      {
        id: 810,
        title: "استشهاد القديسين أليعازر وزوجته سالومى وأولادهما - 8 مسرى",
        date: null,
        story: "",
        selected: false,
        day: 8,
        month: 12,
      },
      {
        id: 811,
        title: "استشهاد القديس آري الشطانوفي القس - 9 مسرى",
        date: null,
        story: "",
        selected: false,
        day: 9,
        month: 12,
      },
      {
        id: 812,
        title: "استشهاد القديس بيخبيس - 10 مسرى",
        date: null,
        story: "",
        selected: false,
        day: 10,
        month: 12,
      },
      {
        id: 813,
        title: "استشهاد القديس مطرا - 10 مسرى",
        date: null,
        story: "",
        selected: false,
        day: 10,
        month: 12,
      },
      {
        id: 814,
        title: "نياحة القديس مويسيس أسقف أوسيم - 11 مسرى",
        date: null,
        story: "",
        selected: false,
        day: 11,
        month: 12,
      },
      {
        id: 815,
        title: "تذكار رئيس الملائكة الجليل ميخائيل - 12 مسرى",
        date: null,
        story: "",
        selected: false,
        day: 12,
        month: 12,
      },
      {
        id: 816,
        title: "تذكار تملك الإمبراطور قسطنطين على عرش روما - 12 مسرى",
        date: null,
        story: "",
        selected: false,
        day: 12,
        month: 12,
      },
      {
        id: 817,
        title: "عيد التجلي المجيد - 13 مسرى",
        date: null,
        story: "",
        selected: false,
        day: 13,
        month: 12,
      },
      {
        id: 818,
        title:
          "تذكار الآية العظيمة التي صنعها الله في عهد البابا ثاؤفيلس البطريرك الثالث والعشرين - 14 مسرى",
        date: null,
        story: "",
        selected: false,
        day: 14,
        month: 12,
      },
      {
        id: 819,
        title: "نياحة القديسة مارينا الراهبة - 15 مسرى",
        date: null,
        story: "",
        selected: false,
        day: 15,
        month: 12,
      },
      {
        id: 820,
        title:
          "نياحة القديس الأرشيدياكون حبيب جرجس (اعترف المجمع المقدس بقداسته في جلسة 20 يونيو 2013م) - 15 مسرى",
        date: null,
        story: "",
        selected: false,
        day: 15,
        month: 12,
      },
      {
        id: 821,
        title: "إعلان إصعاد جسد القديسة الطاهرة مريم إلى السماء - 16 مسرى",
        date: null,
        story: "",
        selected: false,
        day: 16,
        month: 12,
      },
      {
        id: 822,
        title:
          "نياحة القديس البابا متاؤس الرابع البطريرك الثاني بعد المائة من بطاركة الكرازة المرقسية - 16 مسرى",
        date: null,
        story: "",
        selected: false,
        day: 16,
        month: 12,
      },
      {
        id: 823,
        title: "استشهاد القديس يعقوب الجُندي - 17 مسرى",
        date: null,
        story: "",
        selected: false,
        day: 17,
        month: 12,
      },
      {
        id: 824,
        title: "نياحة البابا ألكسندروس بطريرك القسطنطينية - 18 مسرى",
        date: null,
        story: "",
        selected: false,
        day: 18,
        month: 12,
      },
      {
        id: 825,
        title: "استشهاد وادامون الأرمنتي - 18 مسرى",
        date: null,
        story: "",
        selected: false,
        day: 18,
        month: 12,
      },
      {
        id: 826,
        title: "إعادة جسد القديس مكاريوس الكبير إلى ديره ببرية شيهيت - 19 مسرى",
        date: null,
        story: "",
        selected: false,
        day: 19,
        month: 12,
      },
      {
        id: 827,
        title: "استشهاد الفتية السبعة الذين من أفسس - 20 مسرى",
        date: null,
        story: "",
        selected: false,
        day: 20,
        month: 12,
      },
      {
        id: 828,
        title: "تذكار القديسة العذراء مريم والدة الإله - 21 مسرى",
        date: null,
        story: "",
        selected: false,
        day: 21,
        month: 12,
      },
      {
        id: 829,
        title: "نياحة القديسة إيريني - 21 مسرى",
        date: null,
        story: "",
        selected: false,
        day: 21,
        month: 12,
      },
      {
        id: 830,
        title: "نياحة ميخا النبي - 22 مسرى",
        date: null,
        story: "",
        selected: false,
        day: 22,
        month: 12,
      },
      {
        id: 831,
        title: "نياحة القديس أوغسطينوس - 22 مسرى",
        date: null,
        story: "",
        selected: false,
        day: 22,
        month: 12,
      },
      {
        id: 832,
        title: "استشهاد ثلاثين ألف مسيحي بمدينة الإسكندرية - 23 مسرى",
        date: null,
        story: "",
        selected: false,
        day: 23,
        month: 12,
      },
      {
        id: 833,
        title: "استشهاد القديس دميان بأنطاكية - 23 مسرى",
        date: null,
        story: "",
        selected: false,
        day: 23,
        month: 12,
      },
      {
        id: 834,
        title: "نياحة القديس توما أسقف مرعش - 24 مسرى",
        date: null,
        story: "",
        selected: false,
        day: 24,
        month: 12,
      },
      {
        id: 835,
        title: "نياحة القديس تكلاهيمانوت الحبشي - 24 مسرى",
        date: null,
        story: "",
        selected: false,
        day: 24,
        month: 12,
      },
      {
        id: 836,
        title: "نياحة القديس بيساريون الكبير - 25 مسرى",
        date: null,
        story: "",
        selected: false,
        day: 25,
        month: 12,
      },
      {
        id: 837,
        title:
          "نياحة القديس البابا مكاريوس الثالث البطريرك الرابع عشر بعد المائة من بطاركة الكرازة المرقسية - 25 مسرى",
        date: null,
        story: "",
        selected: false,
        day: 25,
        month: 12,
      },
      {
        id: 838,
        title: "استشهاد القديس مويسيس والبارة سارة أخته - 26 مسرى",
        date: null,
        story: "",
        selected: false,
        day: 26,
        month: 12,
      },
      {
        id: 839,
        title: "استشهاد القديس أغابيوس الجندي والبارة تكلة أخته - 26 مسرى",
        date: null,
        story: "",
        selected: false,
        day: 26,
        month: 12,
      },
      {
        id: 840,
        title: "استشهاد القديس بنيامين وأودكسية أخته - 27 مسرى",
        date: null,
        story: "",
        selected: false,
        day: 27,
        month: 12,
      },
      {
        id: 841,
        title: "استشهاد القديسة مريم الأرمنية - 27 مسرى",
        date: null,
        story: "",
        selected: false,
        day: 27,
        month: 12,
      },
      {
        id: 842,
        title: "تذكار الآباء القديسين إبراهيم وإسحاق ويعقوب - 28 مسرى",
        date: null,
        story: "",
        selected: false,
        day: 28,
        month: 12,
      },
      {
        id: 843,
        title: "تذكار الأعياد السيدية البشارة والميلاد والقيامة - 29 مسرى",
        date: null,
        story: "",
        selected: false,
        day: 29,
        month: 12,
      },
      {
        id: 844,
        title: "استشهاد القديس أثناسيوس الأسقف وغلاميه - 29 مسرى",
        date: null,
        story: "",
        selected: false,
        day: 29,
        month: 12,
      },
      {
        id: 845,
        title: "وصول جسد القديس يحنس القصير إلى برية شيهيت - 29 مسرى",
        date: null,
        story: "",
        selected: false,
        day: 29,
        month: 12,
      },
      {
        id: 846,
        title: "نياحة ملاخي النبي - 30 مسرى",
        date: null,
        story: "",
        selected: false,
        day: 30,
        month: 12,
      },
      {
        id: 847,
        title: "نياحة القديس أفتيخوس - 1 نسئ",
        date: null,
        story: "",
        selected: false,
        day: 1,
        month: 13,
      },
      {
        id: 848,
        title: "استشهاد القديس بشاي أخي القديس أباهور - 1 نسئ",
        date: null,
        story: "",
        selected: false,
        day: 1,
        month: 13,
      },
      {
        id: 849,
        title: "نياحة القديس تيطس الرسول - 2 نسئ",
        date: null,
        story: "",
        selected: false,
        day: 2,
        month: 13,
      },
      {
        id: 850,
        title: "تذكار رئيس الملائكة الجليل روفائيل - 3 نسئ",
        date: null,
        story: "",
        selected: false,
        day: 3,
        month: 13,
      },
      {
        id: 851,
        title: "استشهاد القديسين أندريانوس ومن معه - 3 نسئ",
        date: null,
        story: "",
        selected: false,
        day: 3,
        month: 13,
      },
      {
        id: 852,
        title:
          "نياحة القديس البابا يوأنس الرابع عشر البطريرك السادس والتسعين من بطاركة الكرازة المرقسية - 3 نسئ",
        date: null,
        story: "",
        selected: false,
        day: 3,
        month: 13,
      },
      {
        id: 853,
        title: "نياحة القديس بيمن المتوحد - 4 نسئ",
        date: null,
        story: "",
        selected: false,
        day: 4,
        month: 13,
      },
      {
        id: 854,
        title: "نياحة عاموس النبي - 5 نسئ",
        date: null,
        story: "",
        selected: false,
        day: 5,
        month: 13,
      },
      {
        id: 855,
        title: "نياحة القديس يعقوب أسقف مصر - 5 نسئ",
        date: null,
        story: "",
        selected: false,
        day: 5,
        month: 13,
      },
      {
        id: 856,
        title:
          "نياحة القديس البابا يوأنس الخامس عشر البطريرك التاسع والتسعين من بطاركة الكرازة المرقسية - 5 نسئ",
        date: null,
        story: "",
        selected: false,
        day: 5,
        month: 13,
      },
      {
        id: 857,
        title: "نياحة القديس برسوم العريان - 5 نسئ",
        date: null,
        story: "",
        selected: false,
        day: 5,
        month: 13,
      },
      {
        id: 858,
        title: "اليوم السادس من الشهر الصغير المبارك شكر إلى الله - 6 نسئ",
        date: null,
        story: "",
        selected: false,
        day: 6,
        month: 13,
      },
    ];

    synaxariumIndex
      .filter((obj) => obj.day === day && obj.month === month)
      .forEach((obj) => {
        let response = sendHttpRequest(
          apiRoot +
          "GetSynaxariumStory?id=" +
          String(obj.id) +
          "&synaxariumSourceId=1"
        );
        if (!response) return;

        let divs = response.querySelectorAll("div");
        if (divs.length === 0) return;
        if (!tbl[1]) return;
        tbl[1][tbl[1].length - 1] += divs[1].innerHTML + "\n";
        console.log("done ", tbl[0]);
      });
  }

  function sendHttpRequest(apiURL: string): Document | void {
    let request = new XMLHttpRequest();
    request.open("GET", apiURL);

    request.send();
    console.log(request.getAllResponseHeaders());

    request.onload = () => {
      if (request.status === 200) {
        let responseDoc = new DOMParser().parseFromString(
          request.response,
          "text/html"
        );
        if (!responseDoc) return;
        return responseDoc;
      } else {
        console.log("error status text = ", request.statusText);
        return request.statusText;
      }
    };
  }
}

function _reformatReadingArray(array: string[][][]) {
  let titlesRows: string[][];
  return array.map(table => {
    if (table.filter(row => row[0].startsWith(Prefix.readingRef)).length > 0) return table;
    titlesRows = table.filter(row => row[0].endsWith('&C=Title') || row[0].endsWith('&C=SubTitle'));
    let newTable = [];
    titlesRows.forEach(row => {
      newTable.push([row[0], row[1]]),
        newTable.push([
          Prefix.readingRef + row[2] + '\n' + row[3],
        ])
    });
    return newTable

  });
}

function _prepareReadingArrayForReferences(array: string[][][]) {
  let name = getArrayNameFromArray(array);
  saveOrExportArray(
    array.map(tbl => {
      tbl = tbl.filter(row => row[0].includes("&C=Title"));
      tbl.forEach(row => {
        if (row.includes('Psalm&D='))
          tbl.splice(tbl.indexOf(row) + 1, 0, [Prefix.readingRef + "PSA:&C="]);
        else tbl.splice(tbl.indexOf(row) + 1, 0, [Prefix.readingRef + "XXX&C="]);
      })

      return tbl;
    }),
    name,
    true,
    false);

}

/**
 * Removes the spaces and () from the reading references in an array, and inserts a new row if the reference contains '/'
 * @param {string[][][]} readingArray
 */
function _fixReadingReferences(readingArray: string[][][]) {
  readingArray
    .forEach(table =>
      table.forEach(row => {
        if (row[0].endsWith('&C=Title'))
          table[table.indexOf(row)] = [row[0]];
        if (!row[0].startsWith(Prefix.readingRef)) return;

        row[0] = row[0]
          .replaceAll(' ', '')
          .replaceAll('(', '')
          .replaceAll(')', '')
          .replaceAll('–', '-')
          .replaceAll(',', ';');

        (function process() {
          if (!row[0].includes(';')) return;
          let actor = splitTitle(row[0])[1];
          let parts = splitTitle(row[0])[0].split(';');
          let root = parts[0].replace(Prefix.readingRef, '').split(':');//[PSA, 12, 2-3];
          row[0] = Prefix.readingRef + root[0] + ':' + root[1] + ':' + correctVerses(root[2]) + '/';

          row[0] += parts.filter(part => parts.indexOf(part) > 0)
            .map(verse => root[1] + ':' + correctVerses(verse))
            .join('/');

          if (actor) row[0] += '&C=' + actor;

          function correctVerses(verse: string) {
            if (verse.includes('-'))
              return verse;
            return verse + '-' + verse;
          }
        })();

      }));

  saveOrExportArray(readingArray, getArrayNameFromArray(readingArray), true, false);


  function checkReferenceIntegrity(ref: string, prefix: string) {
    let Praxis: RegExp[] = [
      /ACT:\d*:\d*-\d/,
      /ACT:\d*:\d*-End/
    ];
    let stPaul: RegExp[] = [
      /ROM:\d*:\d*-\d/,
      /ROM:\d*:\d*-End/,
      /1CO:\d*:\d*-\d/,
      /1CO:\d*:\d*-End/,
      /2CO:\d*:\d*-\d/,
      /2CO:\d*:\d*-End/,
      /GAL:\d*:\d*-\d/,
      /GAL:\d*:\d*-End/,
      /EPH:\d*:\d*-\d/,
      /EPH:\d*:\d*-End/,
      /PHP:\d*:\d*-\d/,
      /PHP:\d*:\d*-End/,
      /COL:\d*:\d*-\d/,
      /COL:\d*:\d*-End/,
      /1TH:\d*:\d*-\d/,
      /1TH:\d*:\d*-End/,
      /2TH:\d*:\d*-\d/,
      /2TH:\d*:\d*-End/,
      /1TI:\d*:\d*-\d/,
      /1TI:\d*:\d*-End/,
      /2TI:\d*:\d*-\d/,
      /2TI:\d*:\d*-End/,
      /TIT:\d*:\d*-\d/,
      /TIT:\d*:\d*-End/,
      /PHM:\d*:\d*-\d/,
      /PHM:\d*:\d*-End/,
      /HEB:\d*:\d*-\d/,
      /HEB:\d*:\d*-End/,
    ]
    let Catholicon = [
      /JAS:\d*:\d*-\d/,
      /JAS:\d*:\d*-End/,
      /1PE:\d*:\d*-\d/,
      /1PE:\d*:\d*-End/,
      /2PE:\d*:\d*-\d/,
      /2PE:\d*:\d*-End/,
      /1JN:\d*:\d*-\d/,
      /1JN:\d*:\d*-End/,
      /2JN:\d*:\d*-\d/,
      /2JN:\d*:\d*-End/,
      /3JN:\d*:\d*-\d/,
      /3JN:\d*:\d*-End/,
      /JUD:\d*:\d*-\d/,
      /JUD:\d*:\d*-End/,
      ...stPaul

    ];

    let Gospels = [
      /MAT:\d*:\d*-\d/,
      /MAT:\d*:\d*-End/,
      /MRK:\d*:\d*-\d/,
      /MRK:\d*:\d*-End/,
      /LUK:\d*:\d*-\d/,
      /LUK:\d*:\d*-End/,
      /JHN:\d*:\d*-\d/,
      /JHN:\d*:\d*-End/,
    ];
    let Psalm = [
      /PSA:\d*:\d*-\d/,
      /PSA:\d*:\d*-End/,
    ];

    let group: [RegExp[], string][] = [
      [stPaul, Prefix.stPaul],
      [Praxis, Prefix.praxis],
      [Catholicon, Prefix.Catholicon],
      [Gospels, Prefix.gospelMass],
      [Gospels, Prefix.gospelNight],
      [Gospels, Prefix.gospelMorning],
      [Gospels, Prefix.gospelVespers],
      [Psalm, Prefix.gospelMorning],
      [Psalm, Prefix.gospelVespers],
      [Psalm, Prefix.gospelMass],
      [Psalm, Prefix.gospelNight],
    ];

    let expressions: RegExp[] = group.find(exp => prefix.startsWith(exp[1]))[0];

    return expressions.map(exp => exp.test(ref)).includes(true)

  }
}

function _removeDuplicates(array: string[][][]) {
  array.map((tbl) => {
    array.forEach((t) => {
      if (
        array.indexOf(t) !== array.indexOf(tbl) &&
        t[0][0] === tbl[0][0] &&
        t.length === tbl.length
      ) {
        console.log("first table = ", tbl, " and duplicate = ", t);
      } else console.log(t[0][0]);
    });
  });
}

function _findReadingArrayDuplicates(readingArray: string[][][]) {
  let similar: Set<string> = new Set(),
    title: string,
    references: string,
    allRefs: (string[] | void)[];

  allRefs = readingArray
    .map(table => {
      if (table.length < 1) return;
      title = table[0][0];
      references =
        table
          .filter(row => row.length === 1 && row[0].startsWith(Prefix.readingRef))
          .map(row => row[0])
          .join('&&');
      if (!references) return console.log('No references were found: table title = ', title);
      if (references.split('&&').length !== table.length - 1)
        return console.log('The references returned do not match the number of rows starting with Prefix.readingRef. Table title =  ', title);
      return [title, references];

    });


  return allRefs
    .filter(ref => ref && ref[0] && ref[1])
    .map(element => {
      if (similar.has(element[1]))
        return element;
      similar.add(element[1])
    }).filter(ref => ref);

}

function _fixPraxisArray(readingsArray: string[][][]) {
  readingsArray.forEach(tbl => {
    tbl.forEach(row => {
      if (tbl.indexOf(row) === 0) return;
      if (row[1].includes('-') && confirm(row[1].replaceAll('-', '&&-&&'))) row[1] = row[1].replaceAll('-', '')
    });
  });
  saveOrExportArray(readingsArray, getArrayNameFromArray(readingsArray), true)
}

function _HelperPrepareArabicChant() {
  //temporary function
  let text: string = prompt("Enter text");
  if (!text) return;
  let splitted = text.split("_&_"),
    array: string[] = [];
  for (let i = 0; i < splitted.length; i += 20) {
    preparePart(splitted.slice(i, i + 20));
  }

  function preparePart(part: string[]) {
    if (part.length % 2 > 0) return console.log("splitted is not even");
    for (let i = 0; i < part.length / 2; i++) {
      array.push(part[i]);
      array.push(
        " " +
        String.fromCharCode(beamedEighthNoteCode).repeat(2) +
        " " +
        part[i + part.length / 2] +
        "_&&_"
      );
    }
  }
  text = array.toString();
  console.log(text);
  localStorage.temp = text;
}

/**
 * Tests if the readings are available for all the days
 */
function _testReadings() {
  addConsoleSaveMethod(console);
  let Readings: string[][] = [
    [Prefix.gospelMorning, "Gospel Dawn"],
    [Prefix.gospelMass, "Gospel Mass"],
    [Prefix.gospelVespers, "Gospel Vespers"],
    [Prefix.gospelNight, 'Gospel Night'],
    [Prefix.stPaul, 'Saint Paul'],
    [Prefix.Catholicon, 'Catholicon'],
    [Prefix.praxis, 'Praxis'],
    [Prefix.synaxarium, 'Synaxarium'],
    [Prefix.prophecies, 'Prophecies Dawn'],
  ];
  let readingDate: string,
    result: string = "";
  setCopticDates(new Date("2023.12.31"));

  for (let i = 1; i < 367; i++) {
    changeDate(undefined, true, undefined, false);
    Readings.forEach((prefix) => {
      if (
        ![Seasons.GreatLent, Seasons.JonahFast].includes(Season)
        &&
        [Prefix.gospelNight, Prefix.prophecies].includes(prefix[0]))
        return;
      if (
        Season === Seasons.GreatLent
        &&
        [0, 6].includes(weekDay)
        &&
        prefix[0] === Prefix.prophecies)
        return; //During the Great Lent and Jonah Fast, only the week-days have Prophecies Readings in the Incense Dawn office
      if (Season === Seasons.JonahFast
        && prefix[0] === Prefix.gospelNight
      )
        return; //No Gospel Night during Jonah Fast
      if (
        Season === Seasons.GreatLent
        &&
        weekDay !== 0
        && [Prefix.gospelVespers, Prefix.gospelNight].includes(prefix[0]))
        return; //During the Great Lent, only Sunday has Vespers (on Saturday afternoon), and Gospel Night (on Sunday afternoon)
      if (
        Season === Seasons.GreatLent
        && weekDay === 6
        && prefix[0] === Prefix.gospelVespers
        && copticReadingsDate === "GL57"
      )
        return; //no vespers for the Resurrection Sunday
      if (
        Season === Seasons.JonahFast
        && weekDay !== 1
        && prefix[0] === Prefix.gospelVespers
      )
        return; //During the Jonah Fast, only Monday has Vespers prayers
      if (Season === Seasons.HolyWeek) return; //No readings during the holy week

      (function fetchReadings() {
        readingDate = copticReadingsDate;
        if (prefix[0] === Prefix.synaxarium)
          readingDate = copticDate;
        let reading: string[][][] =
          getTablesArrayFromTitlePrefix(prefix[0])
            .filter((tbl) => isMultiDatedTitleMatching(tbl[0][0], [readingDate]));//We do a filter not a find because Gospels arrays include 2 tables for each day: Psalm table and Gospel table

        if (reading.length < 1) {
          result += "\n\n\ncopticDate = " + copticDate + "\n";
          result += "copticReadingsDate = " + copticReadingsDate + "\n";
          if (weekDay === 0) result += "it is a Sunday \n";
          result += "\tmissing: " + prefix[1] + "\nquery= " + readingDate + "\n";
        }
        // if (reading.length > 0) result += "\ttable: " + '&D=' + copticReadingsDate;

      })();

    });
  }
  //@ts-ignore
  console.save(result, "testReadings Result.doc");

  changeDate(new Date());
}

function _mergeReferencesIntoOneRow(array: string[][][]) {
  let refs: string[][][], first: string[];
  for (let table of array) {
    for (let row of table) {
      if (row[0].includes('&C=Title')) refs.push([]);
      if (row[0].startsWith(Prefix.readingRef))
        refs[refs.length - 1].push(row)
      else continue
    }
    for (let titleGroup of refs) {
      if (titleGroup[0].includes('/')) continue;
      first = [splitTitle(titleGroup[0])[0]];
      for (let i = 1; i < titleGroup.length; i++) {
        first[0] += "/" + splitTitle(titleGroup[i][0])[0].split(Prefix.readingRef)[1];

      }
    }
  }
}

function _splitHWGospelIntoTable() {
  let GN = ReadingsArrays.GospelNightArrayFR;
  GN
    .forEach(table => {
      if (table.length < 1) return GN.splice(GN.indexOf(table), 1);
      if (!table[0][0].startsWith(Prefix.HolyWeek)) return;
      if (!table[0][0].includes('Gospel&D=')) return;
      if (table.map(row => row[0].includes('&C=Title')).length < 2) return;
      let titleRows = table.filter(row => row[0].includes('&C=Title'));
      titleRows = titleRows.filter(row => row[0].includes('Gospel&D=') || ['JHN', 'MAT', 'LUK', 'MRK'].map(prefix => row[0].includes(prefix + '&C=Title')).includes(true));
      if (titleRows.length <= 1) return;
      let tables =
        titleRows
          .map(row => table.slice(table.indexOf(row), getLastIndex(row)));

      let titleBase: string = titleRows[0][0];
      tables
        .forEach(tbl => {
          if (tables.indexOf(tbl) === 0) return;
          if (tbl.length < 1) return;
          tbl[0][0] = titleBase.replace('Gospel', tbl[0][0].split("&C=")[0].split(Prefix.same)[1] + "Gospel");
          tables[0].push([Prefix.placeHolder, splitTitle(tbl[0][0])[0]])
        });

      GN.splice(GN.indexOf(table), 1, ...tables);

      function getLastIndex(row): number {
        if (titleRows.indexOf(row) < titleRows.length - 1)
          return table.indexOf(titleRows[titleRows.indexOf(row) + 1])
        return table.length
      }

    });

  saveOrExportArray(GN, getArrayNameFromArray(GN), true)
}

function _fixSIRBook() {
  let sirAR = Bibles.AR[0].find(book => book[0].id === 'SIR')[1];
  let sirFR = Bibles.FR[0].find(book => book[0].id === 'SIR');
  let fixed: bibleBook = [
    sirFR[0],
    []
  ];

  let index: number;
  sirAR
    .forEach(chapter => {
      index = sirAR.indexOf(chapter);
      if (index === 0) return;
      let ch = chapter.map(verse => {
        if (verse.length === 1 && verse[0] === '\n')
          return verse;
        else if (verse.length === 2 && Number(verse[0])) {
          let ver = sirFR[1][index - 1].find(v => v[0] === verse[0]);
          if (ver) return ver
        }
      })

      fixed[1].push(ch);

    });

  Bibles.FR[0].splice(Bibles.FR[0].indexOf(sirFR), 1, fixed);
  return Bibles.FR[0].find(b => b[0].id === 'SIR')[1];

}

async function fetchBibleBookFromAELF(id: string, chapters: number[], lang: string = 'FR', bibleID?: string): Promise<bibleBook> {
  let req, text, book: bibleBook = [{ id: id, human: id, human_long: id, chaptersList: [] }, []];

  if (bibleID)
    book[0] = Bibles[lang][0].find(book => book[0].id === bibleID)[0];

  for (let i = chapters[0]; i <= chapters[chapters.length - 1]; i++) {
    book[1].push(await fetchChapter(i))
  }
  async function fetchChapter(i: number): Promise<bibleVerse[]> {
    req = await fetch(encodeURI('https://www.aelf.org/bible/' + id + '/' + i.toString()));

    text = await req.text();

    if (!text) {
      alert('No response, i = ' + i.toString());
      return []
    };

    let html = new DOMParser().parseFromString(text, 'text/html');

    let parags = Array.from(html.querySelectorAll('p'))
      .filter(p => p.children[0].classList.contains('verse_number'));


    let chapter = [], verseNumber: string;
    if (parags.length < 1) {
      alert('parags.length <1');
      return chapter
    };
    parags
      .forEach(p => {
        verseNumber = (p.children[0] as HTMLSpanElement).innerText
        chapter.push([
          verseNumber,
          p.innerText
            .replace(verseNumber + ' ', '')
            .replaceAll('\n', ' '),
        ]);
        if (parags.indexOf(p) < parags.length - 1)
          chapter.push(['\n']);
      });
    return chapter

  }

  return book
}

function _fixReadingArray(array: string[][][]) {

  array.forEach(table => {
    if (table[0].length > 1)
      table[0] = [table[0][0]];

    let refs = table.filter(row => row[0].startsWith(Prefix.readingRef));
    refs.forEach(row => row[0] = row[0].replaceAll(' ', '').replaceAll(')', '').replaceAll('(', ''));
    if (refs.length < 2) return;
    refs[0][0] =
      refs[0][0]
      + refs
        .filter(row => refs.indexOf(row) > 0)
        .map(row => "/" + row[0].split(':')[1] + ':' + row[0].split(':')[2])
        .join('');
    refs
      .filter(row => refs.indexOf(row) > 0)
      .forEach(row => table.splice(table.indexOf(row), 1));
  }
  );
  saveOrExportArray(array, getArrayNameFromArray(array), true, false);

}