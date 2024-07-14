let sequence = [];
/**
 * This is the function that displayes the elements of the array that we want to edit
 * @param {HTMLSelectElement}  select - the selection element from which we selet the options
 * @param {boolean} clear - whether or not we should remove all the children of the containerDiv content
 * @param {string} arrayNam - the name of the array where the text of the prayer will be searched for
  *@param {string} tableTitle - the title of the table that we want to retrieve in order to edit
  @param {string[][][]} tablesArray - the array where the table we want to edit will be looked for
 * @param { {includes: boolean}|{equal:boolean } |{startsWith:boolean}} operator - This is the crieteria by which we will be looking for the table by the provides args.tableTitle. Its default value is {includes:true}
 */
function startEditingMode(args) {
    if (args.clear !== false)
        args.clear = true;
    containerDiv.dataset.specificTables = "false";
    if (args.select) {
        //We deal with all the cases where a select element is passed as argument to the function. We exclude the case where arrayName is provided as an argument and the case where the tableTitle is provided.
        args.arrayName = args.select.selectedOptions[0].innerText;
        if (args.arrayName === args.select.options[0].innerText)
            return; //entries[0] === 'Choose From the List'
        else if (args.arrayName === args.select.options[1].innerText)
            addNewTable();
        else if (args.arrayName === args.select.options[2].innerText)
            return runFunction();
        //under development : the user will provide a function and the function will be called when he press enter
        else if (args.arrayName === args.select.options[3].innerText)
            return editDayReadings(); //Editing all the readings of ta give Coptic Date
        else {
            args.arrayName === 'PrayersArray' ? args.arrayName = 'PrayersArrayFR' : args.arrayName = 'ReadingsArrays.' + args.arrayName + 'FR';
            args.tablesArray = editSpecificTable() || [];
        }
        ;
        args.select.selectedIndex = 0;
    }
    else if (!args.tablesArray)
        args.tablesArray = editSpecificTable() || []; //If the arrayName and the tableTitle are provided, it means the user wants to edit a specific table
    if (containerDiv.dataset.arrayName &&
        args.arrayName === containerDiv.dataset.arrayName &&
        !confirm("Warning !! you are about to reload the same array, you will loose all your modifications. Are you sure you want to reload the same array? "))
        return; //If the selected option is the same as the already loaded array, and the user does not confirm reloading the array, we return
    containerDiv.dataset.arrayName = args.arrayName;
    containerDiv.style.gridTemplateColumns = "100%";
    if (!args.languages)
        args.languages = getLanguages(PrayersArraysKeys.find(a => a[1] === args.arrayName)[0]) || allLanguages.map(lang => lang[0]);
    function addNewTable() {
        args.arrayName = "PrayersArray"; //!CAUTION: if we do not set the arrayName to an existing array, it will yeild to an error when the array name will be evaluated by eval(arrayName), and the saveModifiedArray() will stop without exporting the text to file
        args.languages =
            prompt("Provide the sequence of the languages columns", "COP, FR, CA, AR").split(", ") || getLanguages(PrayersArraysKeys.find(a => a[1] === args.arrayName)[0]);
        let title = prompt("Provide the title for the table", "NewTable&D=$copticFeasts.AnyDay") || "NewTable&D=$copticFeasts.AnyDay";
        args.tablesArray = [[[title]]]; //We create a string[][][] with one string[][] (i.e. table) having only 1 string[] (i.e. row)
        args.tablesArray[0][0].push(...args.languages); //We push the languages to the first row of the first table in tablesArray. This will give us a first row like  ['NewTable&D=$copticFeasts.AnyDay&C=Title', 'COP', 'FR', 'CA', etc.]
        args.tablesArray[0].push([...args.tablesArray[0][0]]); //!Caution, we need to deconstruct the elements of the row. Otherwise it will not be a true copy. We add a second row to the table.
        args.tablesArray[0][0][0] += "&C=Title"; //We remove the '&C=Title' from the second row
    }
    function editSpecificTable(arrayName = args.arrayName) {
        alert(arrayName);
        if (!args.tableTitle && //args.tableTitle was not already provided as argument
            confirm("Do you want to edit a single or specific table(s) in the array?"))
            args.tableTitle = prompt('Provide the name of the table you want to edit  (if more than one table, provide the titles separated by ", " ');
        if (!args.tableTitle && !args.arrayName)
            return; //If no tableTitle is provided, and no arrayName, we will return
        if (!args.tableTitle &&
            confirm("No tableTitle is provided, do you want to edit the entire tables array?"))
            return eval(arrayName); //If no tableTitle is provided, we will return the entire array
        let titles = args.tableTitle.split(", "); //if tableTitle is a comma separated string, it means there are multiple table titles provided
        if (!titles || titles.length < 1)
            return console.log("The provided tableTitle argument is not valid");
        containerDiv.dataset.specificTables = "true";
        return titles.map((title) => findTable(title, arrayName ? eval(arrayName) : undefined, args.operator || { includes: true }) || undefined);
    }
    function runFunction() {
        args.arrayName = prompt("Provide the function and the parameters", args.arrayName);
        if (args.arrayName && args.arrayName.includes("Fun("))
            eval(args.arrayName);
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
 * Takes a string[][][] (i.e., and array of tables, each being a string[][], where each string[] represents a row),  that we want to edit,and creates html div elements representing the text of each row of eah table in the tablesArray
 * @param {string[][][]} tablesArray - an array containing the tables that we need to show and start editing
 * @param {string[]} languages - the languages included in the tables
 */
function showTables(args) {
    if (!args.container)
        args.container = containerDiv;
    if (!args.position)
        args.position = containerDiv;
    if (args.clear !== false)
        args.clear = true;
    if (args.clear === true)
        containerDiv.innerHTML = "";
    //We create an html div element to display the text of each row of each table in tablesArray
    let titleBase, arrayName, prayersArray;
    args.tablesArray.forEach((table) => {
        if (!table)
            return;
        titleBase = splitTitle(table[0][0])[0] || "NoTitle";
        prayersArray = getTablesArrayFromTitlePrefix(titleBase);
        PrayersArrays.includes(prayersArray)
            ? (arrayName = "PrayersArrayFR")
            : (arrayName = getArrayNameFromArray(prayersArray)); //If the array of tables that includes the table is one of the arrays in the 'PrayersArrays' list, we set the arrayName to 'PrayersArray', or otherwise, we retrieve its name from the PrayersArraysKeys by calling getArrayNameFromArray(prayersArray)
        if (!arrayName &&
            confirm('We could not infer the name of the array from the title of the table, do you want to set it to "PrayersArray?"'))
            arrayName = "PrayersArray";
        if (!arrayName)
            return console.log("The name of the array is missing");
        table.forEach((row) => {
            if (!row)
                return;
            createHtmlElementForPrayerEditingMode({
                tblRow: structuredClone(row), //!We pass a structured clone in order to avoid the modification of the row by the function
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
    let titles = Array.from(args.container.querySelectorAll("div.Title, div.SubTitle")) || [];
    //removing the minus sign at the begining of the title
    titles.forEach((div) => Array.from(div.getElementsByTagName("P")).forEach((p) => (p.innerText = p.innerText.replaceAll(String.fromCharCode(plusCharCode + 1), ""))));
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
    createEditingButton(() => modifyAllSelectedText(), "Modify Selected Text", btnsDiv);
    createEditingButton(() => changeTitle(document.getSelection().focusNode.parentElement), "Change Title", btnsDiv);
    createEditingButton(() => changeCssClass(document.getSelection().focusNode.parentElement), "Change Class", btnsDiv);
    createEditingButton(() => saveModifiedArray({ exportToFile: false, exportToStorage: true }), "Save", btnsDiv);
    createEditingButton(() => saveModifiedArray({ exportToFile: true, exportToStorage: true }), "Export to JS file", btnsDiv);
    createEditingButton(() => addTableToSequence(document.getSelection().focusNode.parentElement), "Add Table to Sequence", btnsDiv);
    createEditingButton(() => exportSequence(), "Sequence", btnsDiv);
    createEditingButton(() => addRow(document.getSelection().focusNode.parentElement), "Add Row", btnsDiv);
    createEditingButton(() => addNewCell(document.getSelection().focusNode.parentElement), "Add Cell", btnsDiv);
    createEditingButton(() => addRow(document.getSelection().focusNode.parentElement, true), "Add PlaceHolder", btnsDiv);
    createEditingButton(() => addNewColumn(document.getSelection().focusNode.parentElement), "Add Column", btnsDiv);
    createEditingButton(() => deleteRow(document.getSelection().focusNode.parentElement), "Delete Row", btnsDiv);
    createEditingButton(() => deleteCell(document.getSelection().focusNode.parentElement), "Delete Cell", btnsDiv);
    createEditingButton(() => splitParagraphsToTheRowsBelow(document.getSelection().focusNode.parentElement), "Split Below", btnsDiv);
    createEditingButton(async () => await convertCopticFont({ htmlParag: document.getSelection().focusNode.parentElement }), "Convert Coptic Fonts", btnsDiv);
    createEditingButton(() => goToTableByTitle(), "Go to Table", btnsDiv);
    createEditingButton(() => editNextOrPreviousTable(document.getSelection().focusNode.parentElement, true), "Next  Table", btnsDiv);
    createEditingButton(() => editNextOrPreviousTable(document.getSelection().focusNode.parentElement, false), "Previous Table", btnsDiv);
    createEditingButton(() => insertReadingTextFromBible(document.getSelection().focusNode.parentElement), "Insert Reading Text", btnsDiv);
}
/**
 * Generates a file name for the JS file, including the name of the array, the date on which it was modified, and the time
 * @param {string} arrayName - the name of the array for which we want to generate a file name
 */
function getJSFileName(arrayName) {
    let today = new Date();
    return (arrayName +
        "_[ModifiedOn" +
        String(today.getDate()) +
        String(today.getMonth() + 1) + //we add 1 because the months are counted from 0
        String(today.getFullYear()) +
        "at" +
        String(today.getHours() + 1) +
        "h" +
        String(today.getMinutes()) +
        "].js");
}
/**
 * Deletes an html div (row) from the DOM
 * @param {HTMLElement} htmlRow - the html div (or any html element), we want to delete
 * @returns
 */
function deleteRow(htmlParag) {
    let htmlRow = getHtmlRow(htmlParag);
    if (!htmlRow)
        return;
    if (confirm("Are you sure you want to delete this row?") === false)
        return; //We ask the user to confirm before deletion
    htmlRow.remove();
}
/**
 * Deletes a cell in a row
 * @param {HTMLElement} htmlParag - the paragraph that we want to delete
 * @returns
 */
function deleteCell(htmlParag) {
    if (htmlParag.tagName !== 'P')
        return alert('The selection is not a paragraph');
    let htmlRow = getHtmlRow(htmlParag);
    if (!htmlRow)
        return;
    if (!confirm("Are you sure you want to delete this paragraph?"))
        return; //We ask the user to confirm before deletion
    htmlParag.remove();
    htmlRow.style.gridTemplateColumns = setGridColumnsOrRowsNumber(htmlRow); //We adapt the number of columns of the parent div 
    htmlRow.style.gridTemplateAreas = setGridAreas(htmlRow); //We adapt the grid areas of the parent div
}
/**
 * Changes the 'actor' css class of a row
 * @param {HTMLElement} htmlRow - the div (row) for which we want to change the css class
 */
function changeCssClass(htmlParag, newClass) {
    let htmlRow = getHtmlRow(htmlParag);
    if (!htmlRow)
        return alert("Did not find the parent Div");
    let currentClass = splitTitle(htmlRow.title)[1];
    if (!newClass)
        newClass = prompt("Provide The New Class", currentClass);
    if (!newClass || newClass === currentClass)
        return;
    htmlRow.title = splitTitle(htmlRow.title)[0] + "&C=" + newClass;
    if (currentClass)
        htmlRow.classList.replace(currentClass, newClass);
    else if (!htmlRow.classList.contains(newClass))
        htmlRow.classList.add(newClass);
}
function toggleClass(element, className) {
    element.classList.toggle(className);
}
function changeTitle(htmlParag, newTitle, oldTitle) {
    let htmlRow = getHtmlRow(htmlParag);
    if (!htmlRow)
        return;
    if (!oldTitle)
        oldTitle = htmlRow.title;
    if (!newTitle)
        newTitle = prompt("Provide The Title", oldTitle);
    if (!newTitle)
        return alert("You didn't provide a valid title");
    if (newTitle === oldTitle)
        return;
    htmlRow.dataset.root = splitTitle(newTitle)[0];
    htmlRow.title = newTitle;
    changeParagraphsDataRoot();
    function changeParagraphsDataRoot(row = htmlRow, title = newTitle) {
        Array.from(row.querySelectorAll("p"))
            .filter((child) => child.dataset.root && child.title)
            .forEach((child) => {
            child.dataset.root = splitTitle(title)[0];
            child.title = title;
        });
    }
    let actorClass = splitTitle(newTitle)[1];
    if (actorClass && !htmlRow.classList.contains(actorClass))
        htmlRow.classList.add(actorClass);
    (function changeSiblingsDataRoot() {
        Array.from(containerDiv.children)
            .filter((sibling) => sibling.dataset.root === splitTitle(oldTitle)[0])
            .forEach((sibling) => {
            sibling.dataset.root = splitTitle(newTitle)[0];
            let cssClass = splitTitle(sibling.title)[1];
            sibling.title = sibling.dataset.root;
            if (cssClass)
                sibling.title += "&C=" + cssClass;
            changeParagraphsDataRoot(sibling, sibling.title);
        });
    })();
}
/**
 * Creates an html button, and adds
 * @param {Function} fun - the function that will be called when the button is clicked
 * @param {string} label - the label of the button
 * @returns {HTMLButtonElement} - the html button that was created
 */
function createEditingButton(fun, label, btnsDiv) {
    let btnHtml = document.createElement("button");
    btnHtml.classList.add(inlineBtnClass);
    btnHtml.classList.add("btnEditing");
    btnHtml.innerText = label;
    btnHtml.addEventListener("click", () => fun());
    btnsDiv.appendChild(btnHtml);
    return btnHtml;
}
/**
 * Takes the text of a modified array, and exports it to a js file
 * @param {[string, string]} arrayText - the first element is the modified text of the array that we will to a Js file. The second element is the name of the array
 */
function exportToJSFile(arrayText, arrayName) {
    if (!arrayText || !arrayName)
        return;
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
function saveModifiedArray(args) {
    let titles = new Set(), title, savedArrays = new Set(), tablesArray;
    if (!args.htmlRows)
        args.htmlRows = Array.from(containerDiv.querySelectorAll("div.Row, div.PlaceHolder")); //we retrieve all the divs with 'Row' and 'PlaceHolder' class from the DOM
    if (args.dataRoot)
        args.htmlRows = args.htmlRows.filter((htmlRow) => htmlRow.dataset.root === args.dataRoot);
    //Adding the tables' titles as unique values to the titles set
    args.htmlRows
        .forEach((htmlRow) => {
        if (!htmlRow)
            return; //This will happen if the row was row of a table referrenced by a placeholder, that was later on hidden when the click() event of the placeholder row was triggered (see below)
        title = htmlRow.dataset.root; //this is the title without '&C='
        if (titles.has(title))
            return; //If the title has already been processed before (i.e., the table was modified or added in its string[][][] array, we do not need to continue)
        titles.add(title); //Else, we add the title to the titles Set in order to avoid re processing the same table again
        if (htmlRow.dataset.isPlaceHolder) {
            saveModifiedArray({
                exportToFile: false,
                exportToStorage: true,
                dataRoot: htmlRow.dataset.isPlaceHolder,
            }); //Since we are not passing the htmlRows argument, the function will retrieve all the containerDiv children having 'Row' or 'PlaceHolder' class and will filter them by the data-root of the placeHolder div
            args.htmlRows
                .filter((div) => !div.dataset.isPlaceHolder
                && div.dataset.root
                && div.dataset.root === htmlRow.dataset.isPlaceHolder)
                .forEach((div) => div.remove()); //We remove all the html elements that were created to show the rows of the table referenced by the 'PlaceHolder' element.
            return;
        }
        if (!htmlRow.dataset.arrayName)
            return console.log("We encountered a problem with one of the rows : ", htmlRow); //Without the arrayName attribute, we will not be able to retrive the string[][][] to which the table belongs.
        tablesArray = eval(htmlRow.dataset.arrayName);
        if (!tablesArray)
            return console.log("We've got a problem while executing saveOrExportArray(): title = ", title, " and arrayName = ", htmlRow.dataset.arrayName);
        if (PrayersArrays.includes(tablesArray))
            tablesArray = PrayersArrayFR; //If the array is one of the sub arrays created from PrayersArrays, the array that need to be modified and saved or exported is PrayersArray not the sub array itself
        if (!savedArrays.has(htmlRow.dataset.arrayName))
            savedArrays.add(htmlRow.dataset.arrayName);
        modifyEditedArray(title, tablesArray);
    });
    //We finally save or each array in the savedArrays
    savedArrays.forEach((arrayName) => saveOrExportArray(eval(arrayName), arrayName, args.exportToFile, args.exportToStorage));
}
/**
 * Creates string[][] tables  from the html children of containerDiv,  as edited and modified. It does so by selecting all the div elements having the same data-set-root, and converting the text in each such div element into a string[], and adds all the created string[] to a string[][].
 * It then loops the tablesArray (i.e., the original array of tables that we were editing), and looks if it contains a table (i.e. a string[][])  with the same title as the table created from the div elements. If so, it replaces this string[][] in the tablesArray table with the string[][] created from the div elements. Otherwise, it prompts the user wheter he wants to add the created string[][] as a new table at the end of the tablesArray.
 * @param {string} tableTitle - The title of a table in the tablesArray (which is a string[][][])
 * @param {string[][][]} tablesArray - the array that we were editing.
 */
function modifyEditedArray(tableTitle, tablesArray) {
    if (!tablesArray || !tableTitle)
        return;
    //We select all the div elements having same data-set-root attribute as the title of the table (tabeTitle)
    let htmlTable = Array.from(containerDiv.querySelectorAll('div')).filter((htmlRow) => htmlRow.dataset.root && htmlRow.dataset.root === tableTitle);
    if (htmlTable.length === 0)
        return console.log('No div elements with the provided tableTitle');
    //We start by modifiying the array to which the table belongs
    modifyArray(htmlTable);
    function modifyArray(htmlTable) {
        //We generate a string[][] array from the div elements we selected. Each div element is an elemet of the string[][], and each paragraph attached to such div is a string element.
        let editedTable = convertHtmlDivElementsIntoArrayTable(htmlTable);
        if (!editedTable || editedTable.length < 1)
            return console.log("convertHtmlDivElementsIntoArrayTable() returned undefined, or empty aray");
        [
            tablesArray,
            getTablesArrayFromTitlePrefix(htmlTable[0].dataset.root),
        ].forEach((array) => modifyTheMainAndSubArrays(array)); //We will modify the table in its main string[][][] Array (passed to the function in the tablesArray argument to the function) as well as any other sub array in which the table might be also included (like PrayersArrays.massCommon, PrayersArrays.IncenseDawn, etc.)), retrieved by the table title (stored in the html data-root attribute);
        function modifyTheMainAndSubArrays(targetTablesArray) {
            if (!targetTablesArray)
                return;
            let oldTable = targetTablesArray.find((tbl) => splitTitle(tbl[0][0])[0] === splitTitle(editedTable[0][0])[0]);
            if (oldTable)
                targetTablesArray.splice(targetTablesArray.indexOf(oldTable), 1, editedTable);
            else if (confirm("No table with the same title was found in the array, do you want to add the edited table as a new table "))
                targetTablesArray.push(editedTable);
        }
    }
}
/**
 *
 * @param {string} arrayName - Name of the modified array that we want to save to local storage or to a JS file
 * @param {boolean} exportToStorage - if true the array is saved in localStorage.editedText. Its default value is true
 * @param {boolean} exportToFile - if true the array text is as a JS file. Its default value is true
 */
function saveOrExportArray(tablesArray, arrayName, exportToFile = true, exportToStorage = true) {
    let text;
    if (!tablesArray)
        return console.log("tablesArray is undefined:  ", tablesArray);
    if (!arrayName)
        return console.log("No array nam is provided");
    console.log("modified array = ", arrayName);
    text = processArrayTextForJsFile(arrayName, tablesArray);
    if (!text)
        return console.log("We've got a problem when we called processArrayTextForJsFile().  arrayName = ", arrayName);
    if (exportToStorage) {
        localStorage.editedText = text;
        alert('Finished Saving the Array to localStorage');
        console.log(localStorage.editedText);
    }
    if (exportToFile)
        exportToJSFile(text, arrayName);
}
/**
 * Takes a table array, and process the strings in the array, in order to restore the prefixes and insert escape characters before the new lines, etc. in a format that suits a js file
 * @param {string[][][]} tablesArray - the string[][][] that will be processed and returned as a text the js file
 * @return {string} the text representing the array in a js file
 */
function processArrayTextForJsFile(arrayName, tablesArray) {
    //Open Array of Tables
    if (!tablesArray)
        tablesArray = eval(arrayName);
    if (!tablesArray)
        return;
    let text = "[";
    tablesArray.forEach((table) => processTable(table));
    function processTable(table) {
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
    function processTableRow(row) {
        if (!row || row.length < 1) {
            console.log("error with row in processTable() = ", row);
            return alert("Something went wrong");
        }
        //open row array
        text += "[\n";
        row.forEach((element) => processStringElement(element, row));
        //close row
        text += "],\n";
    }
    function processStringElement(element, row) {
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
function replacePrefixes(text, arrayName) {
    let prefix;
    Object.entries(Prefix).forEach((entry) => {
        prefix = "Prefix." + entry[0];
        if (entry[1] === Prefix.placeHolder)
            text = text.replaceAll('"' + eval(prefix) + '"', prefix); //This is because element [0] of PlaceHoler row is the prefix without any other thing. It thus ends with (") that we neeed to remove
        else
            text = text.replaceAll('"' + eval(prefix), (prefix += '+"'));
    });
    if (!arrayName.startsWith("PrayersArray"))
        return text;
    //Seasonal
    debugger;
    return text
        .replaceAll(seasonal.giaki.AR, '" +seasonal.giaki.AR+ "')
        .replaceAll(seasonal.giaki.FR, '" +seasonal.giaki.FR+ "')
        .replaceAll(seasonal.giaki.EN, '" +seasonal.giaki.EN+ "')
        .replaceAll(seasonal.giaki.COP, '" +seasonal.giaki.COP+ "')
        .replaceAll(seasonal.giaki.CA, '" +seasonal.giaki.CA+ "');
}
/**
 * Adds a new div (row) below the div (row) passed to it as argument.
 * @param {HTMLElement} htmlParag - the html paragraph in which the cursor is placed when the function is called
 * @param {boolean} isPlaceHolder - If true, the row that will be added will be a 'PlaceHolder' row. Its default value is false
 * @param {string} title - The title of the row that will be added. If omitted, the function will prompt for providing the title
 * @param {boolean} below - If true, the new row will be added below. Else it will inserted before the currently selected div. Its default value is true
 */
function addRow(htmlParag, isPlaceHolder = false, title, below = true) {
    let htmlRow = getHtmlRow(htmlParag);
    if (!htmlRow)
        return;
    if (!title)
        title = prompt("Provide the Title of the new Row", htmlRow.title);
    if (!title)
        return alert('You must provide a valide name for the table that will be put as PlaceHolder');
    let newRow = document.createElement("div"), p, rowClass = 'Row', gridColumns = htmlRow.style.gridTemplateColumns, gridAreas = htmlRow.style.gridTemplateAreas;
    if (isPlaceHolder) {
        rowClass = 'PlaceHolder';
        gridColumns = '100%';
        gridAreas = 'FR';
        newRow.dataset.root = htmlRow.dataset.root;
        newRow.title = htmlRow.dataset.title;
        if (htmlRow.dataset.displayedPlaceHolder)
            //If htmlRow is a row in a table displayed from a PlaceHolder element, we will go up until we find the first row of the main table to which the PlaceHolder table is attached, and will retrieve its dataset.root
            Object.entries(getMainTableTitle(htmlRow))
                .forEach(entry => entry[0] === 'title' ? newRow.title = entry[1] : newRow.dataset.arrayName = entry[1]);
        newRow.dataset.root = splitTitle(newRow.title)[0];
        newRow.dataset.group = newRow.dataset.root;
        function getMainTableTitle(div) {
            let previous = div.previousElementSibling;
            while (
            //We go up as long as the previous element has dataset.displayedPlaceHolder === div.dataset.displayedPlaceHolder
            previous.dataset.displayedPlaceHolder
                &&
                    previous.dataset.displayedPlaceHolder === div.dataset.displayedPlaceHolder)
                getMainTableTitle(previous);
            return { title: previous.title, arrayName: previous.dataset.arrayName }; //This is the main div where the PlaceHolder is displayed before being extended when clicked on
        }
    }
    let isReference = false;
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
    if (isPlaceHolder)
        newRow.dataset.isPlaceHolder = title;
    if (!newRow.dataset.root) //If not already set because it is a new PlaceHolder row
        newRow.dataset.root = splitTitle(title)[0];
    if (!newRow.title) //If not already set because it is a new PlaceHolder or a Reading Reference row
        newRow.title = title;
    if (splitTitle(newRow.title)[0] === splitTitle(htmlRow.title)[0])
        newRow.dataset.isPrefixSame = 'true'; //We need this in order to be sure than when the table is exported, the string[] representing the newly added row will have as first element: Prefix.same + '&C=[whatever class]' not the full title of the table
    if (!newRow.dataset.arrayName) //If not already set because it is a new PlaceHolder row
        newRow.dataset.arrayName = prompt("Provide the name of the array", htmlRow.dataset.arrayName);
    if (!isPlaceHolder && splitTitle(title)[1])
        newRow.classList.add(splitTitle(title)[1]);
    let children = Array.from(htmlRow.children);
    children
        .forEach((child) => {
        if ((isPlaceHolder || isReference) && newRow.children.length > 0)
            return;
        if (!child.lang || child.tagName !== "P")
            return;
        p = newRow.appendChild(document.createElement("p"));
        if (isPlaceHolder)
            p.innerText = splitTitle(title)[0];
        if (isReference)
            p.innerText = splitTitle(title)[0].replace(Prefix.readingRef, '').replace('REF:', '').toUpperCase();
        p.title = newRow.title;
        p.dataset.root = newRow.dataset.root;
        isPlaceHolder || isReference ? p.lang = 'FR' : p.lang = child.lang;
        p.classList.add(p.lang.toUpperCase());
        p.contentEditable = "true";
        p.addEventListener('keydown', (e) => { paragraphsKeyShortcuts(e); return false; });
    });
    let position;
    below ? position = 'afterend' : position = 'beforebegin';
    return htmlRow.insertAdjacentElement(position, newRow);
}
function paragraphsKeyShortcuts(e) {
    if (!e.shiftKey)
        return;
    let p = e.target;
    if (e.key === 'A') {
        e.preventDefault;
        addRow(p, false, undefined, true);
    }
    ;
    if (e.key === 'B') {
        e.preventDefault;
        addRow(p, false, undefined, false);
    }
    ;
    if (e.key === 'S') {
        e.preventDefault;
        saveModifiedArray({ exportToFile: false, exportToStorage: true });
    }
    ;
    if (e.key === 'E') {
        e.preventDefault;
        saveModifiedArray({ exportToFile: true, exportToStorage: true });
    }
    ;
    if (e.key === 'C') {
        e.preventDefault;
        convertCopticFont({ htmlParag: p });
    }
    ;
    if (e.key === 'L') {
        e.preventDefault;
        deleteRow(p);
    }
    ;
    if (e.key === 'P') {
        e.preventDefault;
        splitParagraphsToTheRowsBelow(p);
    }
    ;
    if (e.key === 'F') {
        e.preventDefault;
        _FixCopticText(p);
    }
    ;
    return false;
}
/**
 *
 * @param htmlParag
 * @returns
 */
function addNewCell(htmlParag, right = true) {
    let htmlRow = getHtmlRow(htmlParag);
    if (!htmlRow)
        return;
    let p = document.createElement("p"), lang = prompt('Provide the language of the paragraph') || 'FR';
    p.contentEditable = 'true';
    p.dataset.root = htmlParag.dataset.root;
    p.title = htmlParag.title;
    p.classList.add(lang);
    p.lang = lang;
    p.innerText = 'New paragraph added';
    let position;
    right ? position = "afterend" : position = "beforebegin";
    htmlParag.insertAdjacentElement("afterend", p);
    htmlRow.style.gridTemplateAreas = setGridAreas(htmlRow);
    htmlRow.style.gridTemplateColumns = setGridColumnsOrRowsNumber(htmlRow);
}
function addNewColumn(htmlParag) {
    if (htmlParag.tagName !== "P")
        return alert("The html element passed to addNewColumn is not a paragraph");
    let htmlRow = getHtmlRow(htmlParag);
    if (!htmlRow)
        return;
    let langClass = prompt('You must proivde a language class (like "AR", "FR", etc. for the new column. It must not be more than 3 letters, and can be either uper case or lower case', "AR").toUpperCase();
    if (!langClass || langClass.length > 3)
        return alert("You didn't provide a valid language class");
    let newColumn = document.createElement("p");
    newColumn.contentEditable = "true";
    newColumn.classList.add(langClass);
    newColumn.lang = langClass;
    newColumn.innerText = "New column added with class = " + newColumn.lang;
    htmlRow.appendChild(newColumn);
    newColumn.dataset.isNew = "isNewColumn";
    htmlRow.style.gridTemplateColumns = ((100 / htmlRow.children.length).toString() + "% ").repeat(htmlRow.children.length);
    let languages = Array.from(htmlRow.children).map((p) => p.lang);
    let areas = languages.join(" ");
    areas = prompt("Do we want to rearrange the languages areas?", areas);
    areas.split(" ").map((language) => {
        let parag = Array.from(htmlRow.children).filter((p) => p.lang === language)[0];
        htmlRow.appendChild(parag); //we are arranging the html paragraphs elements in the same order as provided by the user when prompted
    });
    areas = areas.replaceAll(",", "");
    htmlRow.style.gridTemplateAreas = '"' + areas + '"';
    return htmlRow;
}
function createHtmlElementForPrayerEditingMode(args) {
    if (!args.position)
        args.position = containerDiv;
    if (!args.container)
        args.container = containerDiv;
    if (!args.arrayName)
        args.arrayName = getArrayNameFromArray(getTablesArrayFromTitlePrefix(args.titleBase));
    if (!args.arrayName)
        return;
    if (args.titleBase.startsWith(Prefix.HolyWeek) && args.arrayName === 'ReadingsArrays.GospelNightArrayFR')
        args.languagesArray = getLanguages(Prefix.massCommon);
    let htmlRow, p, lang, actorClass, dataRoot, isPlaceHolder = false, isReference = false;
    isPlaceHolder = args.tblRow[0].startsWith(Prefix.placeHolder);
    isReference = args.tblRow[0].startsWith(Prefix.readingRef);
    actorClass = splitTitle(args.tblRow[0])[1] || "NoActor";
    htmlRow = document.createElement("div");
    if (args.arrayName)
        htmlRow.dataset.arrayName = args.arrayName;
    if (isReference) {
        args.tblRow = [args.tblRow[0], args.tblRow[0].replace(Prefix.readingRef, '')];
        htmlRow.dataset.isReference = args.tblRow[0].toUpperCase();
    }
    ;
    if (!isPlaceHolder) {
        args.tblRow.length > 1 ? dataRoot = args.titleBase : dataRoot = splitTitle(args.tblRow[0])[0]; //If the row contains only 1 element, it means that this row has no text and was inserted in order to generate an html div that will be later on used as a placeholder anchor for another prayer to be inserted. We will give the html element as data-root and a data-group the tblRow[0] in roder to avoid this element to be treated as a "Prefix.same" element when the array is saved and exported
        htmlRow.classList.add("Row"); //we add 'Row' class to this div
        htmlRow.title = args.titleBase + "&C=" + actorClass; //We need to record the full title of each row (i.e. row[0]) in order to be able to add it when we convert the html element into an element in an Array
        if (args.tblRow[0].startsWith(Prefix.same))
            htmlRow.dataset.isPrefixSame = 'true'; //We need this in order to be able to determine whether when exporting the table, the row should be a row starting with Prefix.same, or should be given the full title as the 1st row of the table
        htmlRow.dataset.root = dataRoot;
        htmlRow.dataset.group = dataRoot; //The data-group attribute aims at making the row part of the same of group of rows that will be shown or hidden when we click on the title
        if (actorClass)
            htmlRow.classList.add(actorClass);
    }
    else if (isPlaceHolder) {
        let children = Array.from(args.container.children);
        let lastChild = children[children.length - 1];
        htmlRow.classList.add("PlaceHolder");
        htmlRow.dataset.isPlaceHolder = args.tblRow[1]; //This is the title of the table referrenced by the placeHolder row
        htmlRow.dataset.root = lastChild.dataset.root; //We add as data-root the data-root of the previous element appended to the container. We do this because we want the placeHolder div to be part of the main table and be retrieved with the same data root and title
        htmlRow.title = lastChild.title; //We do the same for the data-title attribute as for the data-root.
        htmlRow.dataset.goup = lastChild.dataset.group; //Same as above
        htmlRow.style.backgroundColor = "grey";
        let copyLangs = [...args.languagesArray];
        htmlRow.addEventListener("click", () => {
            let referrencedTblTitle = htmlRow.dataset.isPlaceHolder; //When tblRow is a 'PlaceHoder', it has 2 elements: the first of which is  'Prefix.placeHolder' and the second (i.e., args.tblRow[1]) is the title of the table that is refrenced
            let shown = Array.from(containerDiv.querySelectorAll("div")).filter((div) => div.dataset.displayedPlaceHolder &&
                div.dataset.displayedPlaceHolder === referrencedTblTitle);
            if (shown.length > 0) {
                //This means that the table referrenced in tblRow[1] is displayed. We will save any changes made to it and remove it
                saveModifiedArray({
                    exportToFile: false,
                    exportToStorage: true,
                    dataRoot: referrencedTblTitle,
                });
                shown.forEach((displayed) => {
                    if (displayed.dataset.isPlaceHolder)
                        Array.from(containerDiv.querySelectorAll("div.Row"))
                            .filter((div) => div.dataset.root &&
                            div.dataset.root === displayed.dataset.isPlaceHolder)
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
                return console.log("We could not identifiy the array in which the referrenced table is to be retrieved");
            let tableArrayName = getArrayNameFromArray(tblsArray);
            let table = [
                ...tblsArray.find((tbl) => splitTitle(tbl[0][0])[0] === referrencedTblTitle),
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
                Array.from(div.children).forEach((paragraph) => {
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
        }
        else {
            lang = args.languagesArray[x - 1]; //we select the language in the button's languagesArray, starting from 0 not from 1, that's why we start from x-1.
        } //we check that the language is included in the allLanguages array, i.e. if it has not been removed by the user, which means that he does not want this language to be displayed. If the language is not removed, we retrieve the text in this language. otherwise we will not retrieve its text.
        p = document.createElement("p"); //we create a new <p></p> element for the text of each language in the 'prayer' array (the 'prayer' array is constructed like ['prayer id', 'text in AR, 'text in FR', ' text in COP', 'text in Language', etc.])
        if (!actorClass) {
            //The 'prayer' array includes a paragraph of ordinary core text of the array. We give it 'PrayerText' as class
            p.classList.add("PrayerText");
        }
        p.dataset.root = htmlRow.dataset.root; //we do this in order to be able later to retrieve all the divs containing the text of the prayers with similar id as the title
        p.title = htmlRow.title;
        if (lang)
            p.classList.add(lang.toUpperCase());
        p.lang = lang; //we are adding this in order to be able to retrieve all the paragraphs in a given language by its data attribute. We need to do this in order for example to amplify the font of a given language when the user double clicks
        p.innerText = args.tblRow[x];
        p.contentEditable = "true";
        p.addEventListener('keydown', (e) => { paragraphsKeyShortcuts(e); return false; });
        htmlRow.appendChild(p); //the row which is a <div></div>, will encapsulate a <p></p> element for each language in the 'prayer' array (i.e., it will have as many <p></p> elements as the number of elements in the 'prayer' array)
    }
    //@ts-ignore
    args.position.el
        ?
            //@ts-ignore
            args.position.el.insertAdjacentElement(args.position.beforeOrAfter, htmlRow)
        : //@ts-ignore
            args.position.appendChild(htmlRow);
    return htmlRow;
}
function getPrayersSequence() {
    let allRows = containerDiv.querySelectorAll(".Row"), text = "[";
    allRows.forEach((row) => {
        //@ts-ignore
        text += row.dataset.root + ", \n";
    });
    text += "]";
    console.log(text);
}
function addTableToSequence(htmlParag) {
    let htmlRow = getHtmlRow(htmlParag);
    if (!htmlRow)
        return;
    sequence.push(splitTitle(htmlRow.dataset.root)[0]);
    let result = prompt(sequence.join(", \n"), sequence.join(", \n"));
    sequence = result.split(", \n");
    if (document.getElementById("showSequence")) {
        let tableRows = Array.from(containerDiv.children).filter((htmlRow) => htmlRow.dataset.root);
        tableRows.forEach((row) => {
            createHtmlElementForPrayerEditingMode({
                tblRow: Array.from(row.querySelectorAll("p")).map((p) => p.innerText),
                titleBase: row.dataset.root,
                languagesArray: allLanguages.map(lang => lang[0]),
                position: document.getElementById("showSequence"),
            });
        });
        setCSS(Array.from(document.getElementById("showSequence").querySelectorAll("div.Row")));
    }
}
function exportSequence() {
    console.log(sequence);
    let empty = confirm("Do you want to empty the sequence?");
    if (empty)
        sequence = [];
}
function showSequence(sequenceArray = sequence, container = containerDiv) {
    let tableRows;
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
        tableRows = Array.from(container.children).filter((htmlRow) => htmlRow.dataset.root.startsWith(title));
        tableRows.forEach((row) => {
            createHtmlElementForPrayerEditingMode({
                tblRow: Array.from(row.querySelectorAll("p")).map((p) => p.innerText),
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
    if (console.save)
        return;
    console.save = createJsFile;
}
/**
 * Creates a downloadable JS file from the date passed as an argument, and downloads the file with the provided fileName
 * @param data
 * @param filename
 * @returns
 */
function createJsFile(data, filename) {
    if (!data) {
        console.error("Console.save: No data");
        return;
    }
    if (!filename)
        filename = "PrayersArrayModified";
    if (typeof data === "object") {
        data = JSON.stringify(data, undefined, 4);
    }
    if (typeof data === "string") {
        data = data.replace("\\\\", "\\");
    }
    var blob = new Blob([data], { type: "text/json" }), e = document.createEvent("MouseEvents"), a = document.createElement("a");
    a.download = filename;
    a.href = window.URL.createObjectURL(blob);
    a.dataset.downloadurl = ["text/json", a.download, a.href].join(":");
    e.initMouseEvent("click", true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    a.dispatchEvent(e);
}
function splitParagraphsToTheRowsBelow(htmlParag) {
    //Sometimes when copied, the text is inserted as a SPAN or a div, we will go up until we get the paragraph element itslef
    let showAlert = () => alert("Make sure the cursuor is placed within the text of a paragraph/cell");
    if (!htmlParag)
        return showAlert(); //We check that we got a paragraph element
    while (htmlParag.tagName !== "P" && htmlParag.parentElement)
        htmlParag = htmlParag.parentElement;
    if (htmlParag.tagName !== "P")
        return showAlert();
    let title = htmlParag.parentElement.dataset.title ||
        htmlParag.parentElement.dataset.root +
            "&C=" +
            Array.from(htmlParag.parentElement.classList).find((c) => c !== "Row"), lang = htmlParag.lang, table = Array.from(containerDiv.children).filter((htmlRow) => htmlRow.dataset.root && htmlRow.dataset.root === splitTitle(title)[0]); //Those are all the rows belonging to the same table, including the title
    if (!table || table.length === 0)
        return alert("We didn't find any elements having the same data-root as the selected paragraph: " +
            title);
    let rowIndex = table.indexOf(htmlParag.parentElement);
    //We retrieve the paragraph containing the text
    let splitted = htmlParag.innerText.split("\n");
    for (let i = 0; i < splitted.length; i++) {
        if (!splitted[i] || splitted[i] === "")
            continue;
        if (!table[i + rowIndex]) {
            //if tables rows are less than the number of paragraphs in 'clean', we add a new row to the table, and we push the new row to table
            table.push(addRow(table[table.length - 1].querySelector('p[lang="' + lang + '"]'), false, title) || undefined);
        }
        let paragraph = Array.from(table[i + rowIndex].children).filter((p) => p.lang === lang)[0];
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
function getHtmlRow(htmlParag) {
    if (!htmlParag)
        return alert("Make sure your cursor is within the cell/paragraph where the text is to be found");
    while (!htmlParag.classList.contains("Row") &&
        htmlParag.parentElement &&
        htmlParag.parentElement !== containerDiv) {
        htmlParag = htmlParag.parentElement;
    }
    if (htmlParag.tagName !== "DIV" || !htmlParag.classList.contains("Row"))
        return undefined;
    else
        return htmlParag;
}
/**
 * Converts the coptic font of the text in the selected html element, to a unicode font
 * @param {HTMLElement} htmlParag - an editable html element in which the cursor is placed, containing coptic text in a non unicode font, that we need to convert
 * @param {string} tableTitle - if provided, the function will find the table with the title and will convert all the coptic text in this table. The string is parsed as a Regular Expression
 * @param {string} text - if provided, the function will convert the text
 * @param {string} fontFrom - The name of the font from which we will convert. If not provided, the user will be prompted to choose or to provide any other font name
 **/
async function convertCopticFont(args) {
    if (args.promptAll === null)
        args.promptAll = true;
    if (!args.fontFrom)
        args.fontFrom = promptForFont();
    if (!args.fontFrom)
        return;
    if (args.tableTitle) {
        let table = getTablesArrayFromTitlePrefix(args.tableTitle).find(tbl => new RegExp(args.tableTitle).test(tbl[0][0]));
        if (!table)
            return alert('No table with the provided title was found. Be careful, the name of the table is assessed as a Regular Expression. You may need to escape some letters');
        let langs = getLanguages(args.tableTitle);
        if (!langs || !langs.includes('COP'))
            return;
        let prefix;
        for (let row of table) {
            row[langs.indexOf('COP') + 1] = await convert(row[langs.indexOf('COP') + 1]);
            prefix = Object.entries(Prefix).find(entry => row[0].startsWith(entry[1]));
            if (!prefix)
                continue;
            row[0] = row[0].replace(prefix[1], "Prefix." + prefix[0] + '+ "');
        }
        return table;
    }
    else if (args.text)
        return await convert(args.text);
    if (args.promptAll && confirm('Do you want to edit all the coptic paragraphs with the same font?')) {
        let parags = Array.from(containerDiv.querySelectorAll('P'))
            .filter(p => p.lang === 'COP');
        for (let parag of parags) {
            await convertCopticFont({ htmlParag: parag, fontFrom: args.fontFrom, promptAll: false });
        }
        return;
    }
    while (args.htmlParag.tagName !== "P" && args.htmlParag.parentElement)
        args.htmlParag = args.htmlParag.parentElement;
    if (!args.htmlParag && !args.text)
        return alert('Html element not a paragraph');
    let selected = getSelectedText();
    if (selected && !selected.isCollapsed)
        args.text = await convert(selected.toString()) || undefined;
    else
        args.text = await convert(args.htmlParag.textContent) || undefined;
    if (!args.text)
        return alert('Failed to convert the text');
    window.Selection = null;
    args.htmlParag.innerHTML = "";
    if (selected)
        args.htmlParag.textContent = args.htmlParag.textContent.replace(selected.toString(), args.text);
    else
        args.htmlParag.textContent = args.text;
    async function convert(originalText) {
        let converted = [];
        let paragraphs = originalText.split('<br>');
        for (let parag of paragraphs) {
            if (!['CS_AVVA_SHENOUDA'].includes(args.fontFrom))
                converted.push(await convertFontWithoutAPI(parag, args.fontFrom));
            else
                converted.push(await convertFromAPI(parag) || '');
        }
        return converted.join('\n');
    }
    async function convertFromAPI(originalText) {
        let apiURL = new URL("https://www.copticchurch.net/coptic_language/fonts/convert");
        let init = {
            method: 'POST',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Accept": "text/html",
            },
            body: encodeURI("from=" + args.fontFrom + "&encoding=unicode&action=translate&data=" + originalText)
        };
        let response = await fetch(apiURL, init);
        if (response.status !== 200)
            return console.log("error status text = ", response.statusText);
        let responseText = await response.text();
        if (!responseText)
            return console.log('response.text could not be retrieved');
        let textArea = new DOMParser()
            .parseFromString(responseText, "text/html")
            .getElementsByTagName("textarea")[0];
        if (!textArea || !textArea.innerText)
            return console.log('Error: no textArea or textArea is empty');
        console.log("converted text = ", textArea.innerText);
        return textArea.innerText;
    }
    ;
    function promptForFont() {
        return prompt("Provide the font", "COPTIC1/CS_AVVA_SHENOUDA/AVVA_SHENOUDA/ATHANASIUS/NEW_ATHANASIUS");
    }
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
function sendHttpRequest(args) {
    (function setDefaults() {
        if (!args.method)
            args.method = "GET";
        if (!args.responseType)
            args.responseType = "text";
        if (!args.contentType)
            args.contentType = "application/x-www-form-urlencoded";
    })();
    let request = new XMLHttpRequest();
    request.open(args.method, args.url);
    request.setRequestHeader("Content-Type", args.contentType);
    request.setRequestHeader("accept", args.accept);
    request.responseType = args.responseType;
    if (args.apiKey)
        request.setRequestHeader("Api-Key", args.apiKey);
    if (args.onLoad)
        request.onload = args.onLoad;
    if (args.body)
        request.send(args.body);
    else
        request.send();
    return request;
}
function goToTableByTitle() {
    saveModifiedArray({ exportToFile: false, exportToStorage: true });
    let title = "";
    //@ts-ignore
    if (containerDiv.children.length > 0 && containerDiv.children[0].dataset.root)
        title = containerDiv.children[0].dataset.root;
    title = prompt('Provide the title you want to go to. If you want to show the readings of a given day, you provide the date of the readings in this format"ReadignsDate = [date]"', title);
    if (confirm("Do you want to edit the readings of a given date?")) {
        let date = prompt("Provide the Coptic date as DDMM of the readings you want to edit");
        if (!date)
            return;
        return editDayReadings(date);
    }
    let rows = Array.from(containerDiv.querySelectorAll(".Row")).filter((row) => row.dataset.root.includes(title));
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
function editNextOrPreviousTable(htmlParag, next = true) {
    if (containerDiv.dataset.specificTables !== "true" ||
        !containerDiv.dataset.arrayName)
        return; //We don't run this function unless we are in the 'edinting specific table(s) mode'
    let htmlRow = getHtmlRow(htmlParag);
    if (!htmlRow)
        return;
    let title = htmlRow.dataset.root;
    if (!title)
        return alert("We couldn't retrieve the data-root of the current table. Make sure the cursor is placed within one of the table's cells");
    //We first save the changes to the array
    saveModifiedArray({ exportToFile: false, exportToStorage: true });
    let arrayName = containerDiv.dataset.arrayName;
    let array = eval(arrayName);
    let table = array.filter((tbl) => splitTitle(tbl[0][0])[0] === splitTitle(title)[0])[0];
    if (!table || table.length < 1)
        return alert("The current table could not be retrieved from the array by its title from the data-root attribute");
    array = eval(arrayName); //!CAUTION we needed to do this in order to unfilter the array again after it had been filtered (P.S.: the spread operator did'nt work)
    if (next)
        table = array[array.indexOf(table) + 1];
    else
        table = array[array.indexOf(table) - 1];
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
function reArangeTablesColumns(tblTitle, arrayName) {
    //@ts-ignore
    // if (!console.save) addConsoleSaveMethod(console);
    let array = eval(arrayName);
    let table = array.filter((tbl) => tbl[0][0] === tblTitle)[0];
    table.forEach((row) => {
        row[row.length - 1] = row[1];
        row[1] = "";
        row.splice(1, 0, "");
        row.splice(1, 0, "");
    });
    exportToJSFile(processArrayTextForJsFile(arrayName, array), arrayName);
}
function editDayReadings(date) {
    if (date)
        saveModifiedArray({ exportToFile: true, exportToStorage: true });
    if (!date)
        date = prompt("Provide the Coptic date as DDMM of the readings you want to edit");
    if (!date)
        return;
    let readings = [];
    Object.entries(ReadingsArrays).forEach((readingArray) => readingArray[1]
        .filter((tbl) => tbl[0][0].includes(date)) //!This must be a filter not a find operation because the Gospel Psalm and the Gospel itself for a given day are in 2 separate tables
        .forEach((tbl) => readings.push(tbl)));
    if (readings.length < 1)
        return;
    containerDiv.innerHTML = "";
    let tblTitle;
    readings.forEach((tbl) => {
        if (!tbl)
            return;
        tblTitle = splitTitle(tbl[0][0])[0];
        startEditingMode({
            tableTitle: tblTitle,
            arrayName: PrayersArraysKeys.find((array) => tblTitle.startsWith(array[0]))[1],
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
    while (paragraph.tagName !== 'P' && paragraph.parentElement)
        paragraph = paragraph.parentElement; //We go up until we reach the parent html paragraph element
    if (!paragraph)
        return alert('Could not select the paragraph');
    let selected = getSelectedText();
    if (!selected)
        return alert("You didn't select any text");
    let text = selected.toString();
    let modified = prompt("Provide the text to replace the selected text", text);
    if (!modified || modified === text)
        return alert("Either you dindn't make any change or you provided an invalide string");
    let htmlRow = getHtmlRow(paragraph);
    if (!htmlRow || !htmlRow.dataset.arrayName)
        return alert("Couldn't retrieve the arrayName");
    let arrayName = htmlRow.dataset.arrayName;
    let index = Array.from(htmlRow.children).indexOf(paragraph) + 1; //! Caution: we must add 1 because index 0 is the title
    let array = eval(arrayName);
    if (!array)
        return alert("Couldn't retrive the array");
    saveModifiedArray({ exportToFile: false, exportToStorage: true }); //We update the array by including what has been edited and is still displayed but not saved yet
    array.forEach((table) => table.forEach((row) => {
        if (!row || !row[index] || !row[index].includes(text))
            return;
        row[index] = row[index].replaceAll(text, modified);
    }));
    (function reloadCurrentlyEditedTables() {
        //We will reload the currently displayed table(s)
        let titles = new Set(Array.from(containerDiv.children)
            .filter((htmlRow) => htmlRow.title)
            .map((htmlRow) => splitTitle(htmlRow.title)[0])); //We retrieve the titles of the all the displayed tables
        containerDiv.dataset.arrayName = ''; //We do this in order to avoid that startEditingMode() triggers the alert for the user to confirm that he wants to reload another table from the sama array
        startEditingMode({
            tableTitle: Array.from(titles).join(', '),
            arrayName: arrayName,
            languages: getLanguages(PrayersArraysKeys.find(a => a[1] === arrayName)[0]),
            clear: true
        });
    })();
}
function getSelectedText() {
    return window.getSelection();
}
/**
 * Converts the fonts of all the Coptic text paragraphs in containerDiv
 */
async function convertAllCopticParagraphsFonts(fontFrom) {
    if (!fontFrom)
        fontFrom = prompt('Provide the font from which you want to convert the Coptic text');
    let parags = Array.from(containerDiv.querySelectorAll('P'));
    parags = parags
        .filter(parag => parag.lang === 'COP');
    for (let parag of parags) {
        return await convertCopticFont({ htmlParag: parag, fontFrom: fontFrom, promptAll: false });
    }
}
async function _FixCopticText(htmlParag) {
    if (htmlParag.tagName !== 'P')
        return alert('Please place the cursor in the paragraph that you want to fix');
    let font, text, parags = htmlParag.innerHTML.split('<br>');
    for (let parag of parags) {
        parags.indexOf(parag) === 1 ? font = 'ATHANASIUS' : font = 'CS_AVVA_SHENOUDA';
        text = await convertCopticFont({ fontFrom: font, promptAll: false, text: parag }) || '';
        if (!text)
            alert('Conversion has failed for ' + parag);
        if (!text)
            continue;
        let row = addRow(htmlParag, false, htmlParag.title.replace('Diacon', 'ReadingIntro'), false);
        if (!row)
            return;
        row.querySelector('p.COP').innerText = text;
    }
}
async function insertReadingTextFromBible(htmlParag) {
    if (!htmlParag || htmlParag.tagName !== 'P')
        return alert('The selected element is undefined or not a pargraph element');
    let lang = htmlParag.lang;
    if (!lang)
        lang = prompt('Provide the langauge', lang);
    if (lang === 'CA')
        lang = 'AR';
    let bible = Bibles[lang];
    if (!bible)
        bible = Bibles[prompt('Provide the langauge', "AR, FR, EN")];
    if (!bible)
        return alert('Could not retrieve the Bible');
    let temp = await getBibleBooksList(defaultLanguage);
    let booksList = temp?.map(book => [book.human_long, book.id]);
    if (!booksList)
        return;
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
    function onChangeSelection(parag) {
        let chapterNumber = prompt("Provide the chapter number");
        if (!chapterNumber)
            return;
        //chapterNumber = (Number(chapterNumber) - 1).toString();
        //if (!chapterNumber) return;
        let chapter = getBibleChapter(chapterNumber, undefined, bible, select.selectedOptions[0].value);
        select.remove();
        if (!chapter)
            return console.log('Couldn\'t retrieve the chapter');
        let numbers = prompt("Provide verses numbers. If you want all the verses to the end, use \"End\" for the last verse");
        if (!numbers || !numbers.includes(','))
            return alert('You didn\'t provide valide numbers.You must proide only 2 verses numbers spearated by \',\'');
        numbers = numbers.replaceAll(' ', '');
        let verses = numbers.split(',');
        if (verses.length !== 2)
            return alert('You must proide only 2 verses numbers spearated by \',\'');
        if (verses[1] === 'End')
            verses[1] = (chapter.length).toString();
        let firstVerse = chapter.find(verse => verse[0] === verses[0]);
        if (!firstVerse)
            return alert('Couldn\'t find the first verse');
        let lastVerse = chapter.find(verse => verse[0] === verses[1]);
        if (!lastVerse)
            return alert('Couldn\'t find the last verse');
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
async function _replaceBooksInBible(id, lang, bookIds) {
    let Bible = Bibles[lang], retrieved;
    //usfm = ['ESG', 'DAG', 'SIR', 'WIS', 'BAR'];
    bookIds = ['SIR'];
    for (let book of Bible) {
        if (book[1].length > 0)
            continue;
        if (bookIds && !bookIds.includes(book[0].id))
            continue;
        retrieved = await fetchBook(id, lang, book[0].id);
        Bible[Bible.indexOf(book)] = retrieved[0];
    }
    return Bible;
    async function fetchBook(id, lang, usfm) {
        return await _fetchBibleVersesFromBibleCom(id, lang, usfm);
    }
}
/**
 * Fetches an entire Bible version or a specific book from bible.com
 * @param {string|number} id - the id of the Bible version as defined by bible.com
 * @param {string} lang - the language of the version ('AR', 'FR', 'EN', etc.)
 * @param {string} bookUsfm - the usfm of the book that needs to be fetched.
 */
async function _fetchBibleVersesFromBibleCom(id, lang, bookUsfm) {
    let versions = [
        { name: 'French Louis Segond', id: '93', usfm: 'LSG', lang: "en" },
        { name: 'French New Louis Segond', id: '104', usfm: 'NBS', lang: "en" },
        { name: 'French Louis Segond 21', id: '152', usfm: 'S21', lang: "en" },
        { name: 'French Craponne', id: '504', usfm: 'BCC1923', lang: "en" },
        { name: 'ترجمة دار الكتاب المقدس مصر', id: '13', usfm: 'AVD', lang: 'en' },
        { name: 'الترجمة العربية المشتركة مع الكتب اليونانية', id: '1665', usfm: 'المشتركة', lang: 'en' },
    ];
    let entireBible = await _fetchEntireBibleVersion(versions.find(v => v.id === id.toString() || v.id === id), lang, bookUsfm);
    entireBible = entireBible.filter(book => book && book.length > 0);
    entireBible = _trimSpaces(await _buildBooksFromChapters(entireBible, lang));
    return entireBible;
    async function _fetchEntireBibleVersion(version, lang, bookUsfm) {
        let list = await getBibleBooksList(lang);
        let entireBible = [];
        if (bookUsfm)
            list = list.filter(book => book.id === bookUsfm);
        for (let bookKeys of list) {
            let book = await retrieveBook(bookKeys);
            entireBible.push(book);
        }
        return entireBible;
        async function retrieveBook(bookKeys) {
            let book = [];
            for (let chapterNumber of bookKeys.chaptersList) {
                let chapter = await retrieveChapter(chapterNumber, bookKeys);
                book.push(chapter);
            }
            return book;
            async function retrieveChapter(chapterNumber, bookKeys) {
                if (chapterNumber.includes('INTRODUCTION') || chapterNumber.toUpperCase() === bookKeys.human.toUpperCase())
                    chapterNumber = 'INTRO1';
                const chapter = await fetchBookChapter(bookKeys.id, chapterNumber, version);
                return chapter;
            }
        }
        async function fetchBookChapter(bookID, chapterNumber, version) {
            let init = {
                method: 'GET',
                headers: { 'accept': 'application/json' },
            };
            let url = new URL(getURL(version.lang, version.id, version.id, bookID, chapterNumber));
            const response = await fetch(url, init);
            if (!response.ok) {
                console.log('response is not ok');
                return;
            }
            ;
            const json = await response.json();
            return extractChapterFromJSON(json, bookID, chapterNumber);
        }
        function extractChapterFromJSON(json, bookID, chapterNumber) {
            if (!json || !json.pageProps || !json.pageProps.chapterInfo)
                return;
            let jsonContent = json.pageProps.chapterInfo.content;
            if (!jsonContent)
                return;
            let html = new DOMParser().parseFromString(jsonContent, 'text/html');
            if (!html)
                return;
            let chapter = [];
            if (!html)
                return;
            let div = html.querySelector('div.chapter');
            if (!div || !div.children)
                return;
            let paragraphs = Array.from(div.children)
                .filter(div => ['p', 'q', 'ipi'].map(x => div.classList.contains(x)).includes(true));
            let spans, verses, label, content;
            chapter.push([bookID + '.' + chapterNumber]);
            paragraphs
                .forEach(div => {
                spans = Array.from(div.querySelectorAll('span.verse'));
                verses =
                    spans.map(span => {
                        label = span.querySelector('span.label');
                        content = Array.from(span.querySelectorAll('span.content')).map((span) => span.innerText).join('');
                        if (!label || !label.innerText || !content || !content)
                            return ['']; //It means this is not a verse
                        return [
                            label.innerText,
                            content,
                        ]; //We are returning a verse
                    });
                verses = verses.filter(verse => verse.length > 1);
                chapter.push(...verses); //We push the verses to the chapter
                chapter.push(['\n']); //We push a new paragraph mark after the pargraph div    
            });
            return chapter;
        }
        function getURL(lang, bibleID, bibleUsfm, bookID, chapterNumber) {
            let chapter = bookID + '.' + chapterNumber + '.' + bibleUsfm, key = '04t0fWlBwn4WF71mJMTNU';
            return 'https://www.bible.com/_next/data/' + key + '/' + lang + '/bible/' + bibleID + '/' + chapter + '.json?versionId=' + bibleID + '&usfm=' + chapter;
        }
    }
    function _trimSpaces(bible) {
        bible.filter(book => book && book.length === 2)
            .forEach(book => book[1].forEach(ch => ch.forEach(verse => {
            if (!verse[1])
                return;
            if (!verse[1].startsWith(' '))
                return;
            let index = ch.indexOf(verse);
            if (ch[index - 1] && ch[index - 1].length === 1 && ch[index - 1][0] === '\n')
                verse[1] = verse[1].trimStart();
            else if (!ch[index - 1])
                verse[1] = verse[1].trimStart();
        })));
        return bible;
    }
}
async function _buildBooksFromChapters(bible, lang) {
    let bookChapters, firstVerses, bookList;
    let bookLists = await getBibleBooksList(lang);
    if (!bookLists)
        return;
    return bible.map(book => {
        if (!book) {
            console.log('Book is not valid or empt. Book index =', bible.indexOf(book));
            return;
        }
        ;
        bookChapters = book.filter(chapter => chapter && chapter.length > 0); //we remove null values
        if (bookChapters.length < 1)
            return;
        firstVerses = bookChapters.map(chapter => chapter[0]).filter(verse => verse && verse[0]).map(verse => verse[0]);
        if (firstVerses.length < 1)
            return;
        bookList = bookLists.find(list => firstVerses[0].startsWith(list.id + '.'));
        if (!bookList) {
            console.log('bookList not found for usfm: ', book[0][0][0]);
            return;
        }
        ;
        bookChapters.forEach(ch => ch.shift());
        return [
            {
                id: bookList.id,
                human: bookList.human,
                human_long: bookList.human_long,
                chaptersList: bookList.chaptersList
            },
            bookChapters
        ];
    });
}
function _fixTobia(bible) {
    bible.forEach(book => {
        if (!book)
            return;
        if (!['JDT', 'TOB', '1MA', '2MA'].includes(book[0].id))
            return;
        book[1] = book[1].map(chapt => chapt.filter(verse => verse.length > 1));
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
async function _fetchSynaxariumFrench(months) {
    if (!months)
        months = ["50-toubah", "51-amshir", "52-baramhat"];
    let table, apiInitial = "https://coptipedia.com/index.php/livre-1-les-temoins-de-la-foi/le-synaxaire/", textContainer, text;
    months.forEach(async (query) => {
        let month = copticMonths
            .indexOf(copticMonths.filter((coptMonth) => coptMonth.FR.toLowerCase() === query.split("-")[1])[0])
            .toString();
        if (Number(month) < 10)
            month = "0" + month;
        console.log("month =", month);
        await processMonth(query, month);
    });
    async function processMonth(monthQuery, month) {
        if (!month)
            return console.log("month is undefined = ", month);
        let url = apiInitial + monthQuery + ".html"; //This will return an html page with links to all the days of the month. We will retrieve these links and fetch each of them in order to retrieve the text
        let bodyText = await fetchURL(url);
        if (!bodyText)
            return console.log("bodyText is undefined = ", bodyText);
        return await processResponse(new DOMParser().parseFromString(bodyText, "text/html"), month, monthQuery, url);
    }
    async function processResponse(responseDoc, month, monthQuery, url) {
        if (!responseDoc)
            return console.log("responseDoc is undefined = ", responseDoc);
        let anchors = responseDoc.querySelectorAll("a");
        if (!anchors)
            return console.log("anchors is undefined = ", anchors);
        let unique = new Set();
        let i = 1;
        Array.from(anchors)
            .filter((link) => link.href.includes("/index.php/livre-1-les-temoins-de-la-foi/le-synaxaire/" +
            monthQuery +
            "/"))
            .forEach(async (link) => {
            if (unique.has(link.href))
                return;
            unique.add(link.href);
            console.log(link.href);
            let bodyText = await fetchURL(link.href);
            if (!bodyText)
                return console.log("bodyText is undefined = ", bodyText);
            let fetchedText = await editTableCell(bodyText, i++, month);
            if (fetchedText)
                localStorage.fetchedText += fetchedText;
        });
    }
    async function fetchURL(url) {
        let response = await fetch(url);
        return await response.text();
    }
    async function editTableCell(bodyText, i, month) {
        let day = i.toString();
        if (i < 10)
            day = "0" + day;
        console.log("day=", day, " and month =", month);
        table = ReadingsArrays.SynaxariumArrayFR.filter((tbl) => tbl[0][0].includes("&D=" + day + month))[0];
        console.log("table = ", table);
        if (!table || !table[1])
            return console.log("table is undefined", table);
        if (table.length === 2)
            table[1][1] = (await getText(new DOMParser().parseFromString(bodyText, "text/html")));
        else
            return await getText(new DOMParser().parseFromString(bodyText, "text/html"));
    }
    async function getText(responseDoc) {
        textContainer = responseDoc.querySelector(".article-content");
        if (!textContainer ||
            !textContainer.children ||
            textContainer.children.length === 0)
            return console.log("no textContainer = ", textContainer);
        return textContainer.innerText;
    }
}
/**
 * Fetches the Synaxarium text from http://katamars.avabishoy.com/api/katamars/
 */
async function _fetchSynaxariumArabic(month) {
    let tbl, daystring, monthstring;
    let apiRoot = "http://katamars.avabishoy.com/api/Katamars/";
    monthstring = month.toString();
    if (month < 10)
        monthstring = "0" + monthstring;
    for (let day = 1; day < 31; day++) {
        daystring = day.toString();
        if (day < 10)
            daystring = "0" + daystring;
        tbl = ReadingsArrays.SynaxariumArrayFR.filter((tbl) => tbl[0][0].includes("&D=" + daystring + monthstring))[0];
        if (!tbl || tbl.length === 0)
            return;
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
                title: "نياحة البابا ميليوس البطريرك الثالث من بطاركة الكرازة المرقسية - 1 توت",
                date: null,
                story: "",
                selected: false,
                day: 1,
                month: 1,
            },
            {
                id: 5,
                title: "نياحة البابا مرقس الخامس البطريرك الثامن والتسعين من بطاركة الكرازة المرقسية - 1 توت",
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
                title: "اجتماع مجمع بمدينة الإسكندرية في عهد البابا ديونيسيوس بشأن خلود النفس - 3 توت",
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
                title: "نياحة البابا مكاريوس الثاني البطريرك التاسع والستون من بطاركة الكرازة المرقسية - 4 توت",
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
                title: "نياحة البابا ديوسقوروس البطريرك الخامس والعشرين من بطاركة الكرازة المرقسية - 7 توت",
                date: null,
                story: "",
                selected: false,
                day: 7,
                month: 1,
            },
            {
                id: 17,
                title: "نياحة البابا يوأنس الثاني عشر البطريرك الثالث والتسعين من بطاركة الكرازة المرقسية - 7 توت",
                date: null,
                story: "",
                selected: false,
                day: 7,
                month: 1,
            },
            {
                id: 18,
                title: "استشهاد القديسة رفقة وأولادها الخمسة أغاثون وبطرس ويوحنا وآمون وآمونة - 7 توت",
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
                title: "تذكار الأعجوبة التي صنعها القديس باسيليوس الكبير أسقف قيصارية الكبادوك - 13 توت",
                date: null,
                story: "",
                selected: false,
                day: 13,
                month: 1,
            },
            {
                id: 34,
                title: "نياحة البابا متاؤس الثاني البطريرك التسعين من بطاركة الكرازة المرقسية - 13 توت",
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
                title: "استشهاد القديس فيلكس وريجولا أخته والقديس أكسيوبرانتيوس - 14 توت",
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
                title: "نياحة البابا أثناسيوس الثاني البطريرك الثامن والعشرين من بطاركة الكرازة المرقسية - 20 توت",
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
                title: "استشهاد القديس يوليوس الأقفهصى كاتب سِيَر الشهداء ومن معه - 22 توت",
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
                title: "استشهاد القديسين أبادير وإيرائى ( بعض المصادر تذكر اسم إيرينى بدلاً من إيرائى) أخته - 28 توت",
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
                title: "تذكار المعجزة التي صنعها الرب مع القديس أثناسيوس الرسولي - 30 توت",
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
                title: "نياحة البابا سيمون الثاني البطريرك الحادي والخمسون من بطاركة الكرازة المرقسية - 3 بابه",
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
                title: "نياحة البابا أومانيوس البطريرك السابع من بطاركة الكرازة المرقسية - 9 بابه",
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
                title: "نياحة البابا القديس ديمتريوس الكرام البطريرك الثاني عشر من بطاركة الكرازة المرقسية - 12 بابه",
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
                title: "نياحة القديس البابا الأنبا أغاثون، البطريرك التاسع والثلاثون من بطاركة الكرازة المرقسية - 16 بابه",
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
                title: "نياحة البابا الأنبا ديوسقوروس الثاني البطريرك الحادي والثلاثين من بطاركة الكرازة المرقسية - 17 بابه",
                date: null,
                story: "",
                selected: false,
                day: 17,
                month: 2,
            },
            {
                id: 98,
                title: "نياحة البابا القديس ثاؤفيلس البطريرك الثالث والعشرين من بطاركة الكرازة المرقسية - 18 بابه",
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
                title: "نياحة البابا يوساب الأول البطريرك الثاني والخمسين من بطاركة الكرازة المرقسية - 23 بابه",
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
                title: "استشهاد القديس تيمون الرسول، أحد السبعين، وأحد الشمامسة السبعة - 26 بابه",
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
                title: 'تذكار الأعياد الثلاثة السيدية " البشارة والميلاد والقيامة " - 29 بابه',
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
                title: "نياحة البابا القديس غبريال السابع البطريرك الخامس والتسعين من بطاركة الكرازة المرقسية - 29 بابه",
                date: null,
                story: "",
                selected: false,
                day: 29,
                month: 2,
            },
            {
                id: 120,
                title: "ظهور رأس القديس مار مرقس الإنجيلي الرسول، وتكريس كنيسته - 30 بابه",
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
                title: "نياحة البابا بطرس الثالث البطريرك السابع والعشرين من بطاركة الكرازة المرقسية - 2 هاتور",
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
                title: "تذكار تكريس كنيسة القديسة العذراء – الأثرية – بدير المحرق العامر بجبل قسقام - 6 هاتور",
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
                title: "نياحة البابا إسحاق البطريرك الحادي والأربعين من بطاركة الكرازة المرقسية - 9 هاتور",
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
                title: "اجتماع مجمع بروما بسبب عيد الغطاس المجيد والصوم الكبير - 10 هاتور",
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
                title: "نياحة البابا الأنبا زخارياس البطريرك الرابع والستين من بطاركة الكرازة المرقسية - 13 هاتور",
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
                title: " بدء صوم الميلاد في كنيستنا القبطية الأرثوذكسية ( كانت مدة هذا الصوم أربعين يوماً، وأُضيفت إليه الثلاثة أيام التي صامها الإكليروس والشعب عند حدوث معجزة نقل جبل المقطم في عهد البابا أبرآم بن زرعة في القرن العاشر الميلادي، فأصبحت مدة الصوم 43 يوماً). - 16 هاتور",
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
                title: "نياحة البابا مينا الثاني البطريرك الحادي والستين من بطاركة الكرازة المرقسية - 16 هاتور",
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
                title: "نياحة القديس إنيانوس البطريرك الثاني من بطاركة الكرازة المرقسية - 20 هاتور",
                date: null,
                story: "",
                selected: false,
                day: 20,
                month: 3,
            },
            {
                id: 180,
                title: "تكريس بيعتي الأمير تادرس الشُطبى والأمير تادرس المشرقي - 20 هاتور",
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
                title: "نياحة البابا قسما الثاني البطريرك الرابع والخمسين من بطاركة الكرازة المرقسية - 21 هاتور",
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
                title: "تذكار القديسين حلفا وزكا ورومانوس ويوحنا الشهداء. وتذكار القديسين توما وبقطر وإسحاق من الأشمونين - 21 هاتور",
                date: null,
                story: "",
                selected: false,
                day: 21,
                month: 3,
            },
            {
                id: 186,
                title: "نقل جسد القديس الأنبا يحنس كاما من ديره إلى دير السريان - 21 هاتور",
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
                title: 'تذكار الأعياد الثلاثة السيدية الكبرى " البشارة والميلاد والقيامة " - 29 هاتور',
                date: null,
                story: "",
                selected: false,
                day: 29,
                month: 3,
            },
            {
                id: 200,
                title: 'استشهاد البابا بطرس " خاتم الشهداء " البطريرك السابع عشر من بطاركة الكرسي المرقسي - 29 هاتور',
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
                title: "نياحة البابا يوأنس الثالث البطريرك الأربعين من بطاركة الكرازة المرقسية - 1 كيهك",
                date: null,
                story: "",
                selected: false,
                day: 1,
                month: 4,
            },
            {
                id: 208,
                title: "نياحة البابا أثناسيوس الثالث البطريرك السادس والسبعين من بطاركة الكرازة المرقسية - 1 كيهك",
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
                title: "تكريس كنيسة الشهيد أبى فام الجُندي الطحاوي ببلدة أبنوب - 1 كيهك",
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
                title: "تذكار تكريس كنيسة القديس مار يوحنا الهرقلي بأم القصور بمنفلوط - 4 كيهك",
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
                title: "نياحة البابا أبرآم بن زرعة البطريرك الثاني والستين من بطاركة الكرازة المرقسية - 6 كيهك",
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
                title: "نياحة البابا ياروكلاس البطريرك الثالث عشر من بطاركة الكرازة المرقسية - 8 كيهك",
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
                title: "تذكار تكريس كنيسة القديس إقلاديوس بناحية باقور أبو تيج - 11 كيهك",
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
                title: "تذكار تكريس كنيسة رئيس الملائكة الجليل رافائيل بالقسطنطينية - 13 كيهك",
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
                title: "نياحة البابا مرقس الثامن البطريرك المائة وثمانية من بطاركة الكرسي المرقسي - 13 كيهك",
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
                title: "استشهاد القديسين سمعان المنوفي وأباهور وأبا مينا الشيخ - 14 كيهك",
                date: null,
                story: "",
                selected: false,
                day: 14,
                month: 4,
            },
            {
                id: 254,
                title: "نياحة البابا خرستوذولوس البطريرك السادس والستين من بطاركة الكرازة المرقسية - 14 كيهك",
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
                title: "استشهاد القديسين أولوجيوس وأرسانيوس صاحبيّ دير الحديد بأخميم - 16 كيهك",
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
                title: "نياحة القديس إيلياس بجبل بِشْوَاو ( جبل بشْوَاو قريب من جبل الأساس الذي من نقادة حتى الجبل الغربي تجاه القصر، بمحافظة قنا) - 17 كيهك",
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
                title: "نياحة البابا غبريال السادس البطريرك الحادي والتسعين من بطاركة الكرازة المرقسية - 19 كيهك",
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
                title: "نياحة البابا أنسطاسيوس البطريرك السادس والثلاثين من بطاركة الكرازة المرقسية - 22 كيهك",
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
                title: "استشهاد القديس أغناطيوس الثيئوفوروس ( ثيئوفوروس: كلمة تعنى حامل الإله أو المتوشح بالإله) أسقف أنطاكية - 24 كيهك",
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
                title: "نياحة الأنبا ثاؤناس البطريرك السادس عشر من بطاركة الكرازة المرقسية - 2 طوبه",
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
                title: "نياحة البابا ثيئودوسيوس الثاني البطريرك التاسع والسبعين من بطاركة الكرازة المرقسية - 5 طوبه",
                date: null,
                story: "",
                selected: false,
                day: 5,
                month: 5,
            },
            {
                id: 304,
                title: "نياحة البابا متاؤس الأول البطريرك السابع والثمانين من بطاركة الكرازة المرقسية - 5 طوبه",
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
                title: "نياحة البابا مركيانوس البطريرك الثامن من بطاركة الكرازة المرقسية - 6 طوبه",
                date: null,
                story: "",
                selected: false,
                day: 6,
                month: 5,
            },
            {
                id: 309,
                title: "نياحة البابا مرقس البطريرك الثالث والسبعين من بطاركة الكرازة المرقسية - 6 طوبه",
                date: null,
                story: "",
                selected: false,
                day: 6,
                month: 5,
            },
            {
                id: 310,
                title: "نياحة البابا غبريال الثالث البطريرك السابع والسبعين من بطاركة الكرازة المرقسية - 6 طوبه",
                date: null,
                story: "",
                selected: false,
                day: 6,
                month: 5,
            },
            {
                id: 311,
                title: "نياحة القديس باسيليوس الكبير رئيس أساقفة قيصرية الكبادوك - 6 طوبه",
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
                title: "نياحة البابا أندرونيقوس البطريرك السابع والثلاثين من بطاركة الكرازة المرقسية - 8 طوبه",
                date: null,
                story: "",
                selected: false,
                day: 8,
                month: 5,
            },
            {
                id: 316,
                title: "نياحة البابا بنيامين الأول البطريرك الثامن والثلاثين من بطاركة الكرازة المرقسية - 8 طوبه",
                date: null,
                story: "",
                selected: false,
                day: 8,
                month: 5,
            },
            {
                id: 317,
                title: "نياحة البابا غبريال الخامس البطريرك الثامن والثمانين من بطاركة الكرازة المرقسية - 8 طوبه",
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
                title: "نياحة البابا يوأنس السادس البطريرك الرابع والسبعين من بطاركة الكرازة المرقسية - 11 طوبه",
                date: null,
                story: "",
                selected: false,
                day: 11,
                month: 5,
            },
            {
                id: 325,
                title: "نياحة البابا بنيامين الثاني البطريرك الثاني والثمانين من بطاركة الكرازة المرقسية - 11 طوبه",
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
                title: "استشهاد القديسة مُهْراتي ( مُهْراتي: كان للقديسة مهراتي اسم آخر هو مُهْرابيل) - 14 طوبه",
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
                title: "نياحة البابا يوأنس الرابع البطريرك الثامن والأربعين من بطاركة الكرازة المرقسية - 16 طوبه",
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
                title: "استشهاد القديس تيموثاوس تلميذ القديس بولس الرسول وأسقف أفسس - 23 طوبه",
                date: null,
                story: "",
                selected: false,
                day: 23,
                month: 5,
            },
            {
                id: 353,
                title: "نياحة البابا كيرلس الرابع أبى الإصلاح البطريرك المائة والعاشر من بطاركة الكرازة المرقسية - 23 طوبه",
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
                title: "تذكار نقل جسد القديس تيموثاوس تلميذ معلمنا القديس بولس الرسول - 27 طوبه",
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
                title: "استشهاد العذارى القديسات بيستيس وهلبيس وأغابى ونياحة أمهن صوفية - 30 طوبه",
                date: null,
                story: "",
                selected: false,
                day: 30,
                month: 5,
            },
            {
                id: 371,
                title: "نياحة البابا مينا الأول البطريرك السابع والأربعين من بطاركة الكرازة المرقسية - 30 طوبه",
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
                title: "تذكار اجتماع المجمع المسكوني الثاني بمدينة القسطنطينية - 1 امشير",
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
                title: "تكريس كنيسة القديس بطرس خاتم الشهداء بمدينة الإسكندرية - 1 امشير",
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
                title: "نياحة البابا أغريبينوس البطريرك العاشر من بطاركة الكرازة المرقسية - 5 امشير",
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
                title: "نياحة الأنبا أبوللو رفيق القديس الأنبا أبيب من قديسي القرن الرابع الميلادي - 5 امشير",
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
                title: "نياحة البابا مرقس الرابع البطريرك الرابع والثمانين من بطاركة الكرازة المرقسية - 6 امشير",
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
                title: "نياحة البابا القديس ألكسندروس الثاني البطريرك الثالث والأربعين من بطاركة الكرازة المرقسية - 7 امشير",
                date: null,
                story: "",
                selected: false,
                day: 7,
                month: 6,
            },
            {
                id: 391,
                title: "نياحة البابا القديس ثيئودوروس الأول البطريرك الخامس والأربعين من بطاركة الكرازة المرقسية - 7 امشير",
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
                title: "نياحة البابا القديس يوأنس الثالث عشر البطريرك الرابع والتسعين من بطاركة الكرازة المرقسية - 11 امشير",
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
                title: "استشهاد القديس سرجيوس الأتريبي وأبيه وأمه وأخته وكثيرين معهم - 13 امشير",
                date: null,
                story: "",
                selected: false,
                day: 13,
                month: 6,
            },
            {
                id: 406,
                title: "نياحة البابا القديس تيموثاوس الثالث البطريرك الثاني والثلاثين من بطاركة الكرازة المرقسية - 13 امشير",
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
                title: "نياحة البابا القديس يعقوب البطريرك الخمسين من بطاركة الكرازة المرقسية - 14 امشير",
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
                title: "تكريس أول كنيسة للأربعين شهيداً الذين استشهدوا في سبسطية - 15 امشير",
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
                title: "نياحة البابا القديس ميخائيل الثالث البطريرك الثاني والتسعين من بطاركة الكرازة المرقسية - 16 امشير",
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
                title: "نياحة البابا القديس بطرس الثاني البطريرك الحادي والعشرين من بطاركة الكرازة المرقسية - 20 امشير",
                date: null,
                story: "",
                selected: false,
                day: 20,
                month: 6,
            },
            {
                id: 422,
                title: "استشهاد القديسين باسيليوس وثاؤدروس وتيموثاوس بالإسكندرية - 20 امشير",
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
                title: "نياحة البابا القديس غبريال الأول البطريرك السابع والخمسين من بطاركة الكرازة المرقسية - 21 امشير",
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
                title: "نياحة القديس ماروتا أسقف ميافرقين ( ميافرقين:من بلاد ما بين النهرين شمالي نصيبين) - 22 امشير",
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
                title: "استشهاد القديسين تيموثاوس بمدينة غزة ومتياس بمدينة قوص - 24 امشير",
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
                title: "استشهاد القديس قونا بمدينة روما. ( أو الشماس قزماس بروما ) - 25 امشير",
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
                title: "استشهاد القديس صادوق والمائة والثمانية والعشرين الذين معه - 26 امشير",
                date: null,
                story: "",
                selected: false,
                day: 26,
                month: 6,
            },
            {
                id: 437,
                title: "استشهاد الأسقفين تيرانيوس وسلوانس والكاهن زينوبيوس ورفاقهم في مدينة صور - 26 امشير",
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
                title: "نياحة القديس البابا كيرلس السادس البطريرك المائة والسادس عشر من بطاركة الكرازة المرقسية - 30 امشير",
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
                title: "نياحة القديس الأنبا قسما البطريرك الثامن والخمسين من بطاركة الكرازة المرقسية - 3 برمهات",
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
                title: "انعقاد مجمع، بجزيرة بني عمر، على قوم يُطلق عليهم الأربعتعشرية، بخصوص القيامة المقدسة - 4 برمهات",
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
                title: "نياحة القديس الأنبا صرابامون قمص دير القديس الأنبا يحنس القصير (أحد الأديرة المندثرة ببرية شيهيت) - 5 برمهات",
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
                title: "نياحة القديس البابا يوليانوس البطريرك الحادي عشر من بطاركة الكرازة المرقسية - 8 برمهات",
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
                title: "استشهاد القديسين أندريانوس ومرثا زوجته وأوسابيوس وأرما وأربعين شهيداً - 9 برمهات",
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
                title: "ظهور بتولية البابا ديمتريوس الكرَّام البطريرك الثاني عشر من بطاركة الكرازة المرقسية - 12 برمهات",
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
                title: "نياحة القديس البابا ديونيسيوس البطريرك الرابع عشر من بطاركة الكرازة المرقسية - 13 برمهات",
                date: null,
                story: "",
                selected: false,
                day: 13,
                month: 7,
            },
            {
                id: 476,
                title: "تذكار عودة القديسين مكاريوس الكبير ومكاريوس الإسكندري من منفاهما - 13 برمهات",
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
                title: "ظهور القديسة العذراء مريم بكنيسة الشهيدة دميانة بحي بابا دوبلو بشبرا – القاهرة - 16 برمهات",
                date: null,
                story: "",
                selected: false,
                day: 16,
                month: 7,
            },
            {
                id: 482,
                title: "نياحة القديس البابا خائيل الأول البطريرك السادس والأربعين من بطاركة الكرازة المرقسية - 16 برمهات",
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
                title: "تذكار القديسين جرجس العابد وبلاسيوس الشهيد والأنبا يوسف الأسقف - 17 برمهات",
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
                title: "نياحة القديس البابا خائيل الثالث البطريرك السادس والخمسين من بطاركة الكرازة المرقسية - 20 برمهات",
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
                title: "دخول المخلص بيت عنيا، وتشاور عظماء الكهنة على قتل لعازر الصديق الذي أقامه الرب - 21 برمهات",
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
                title: "نياحة القديس البابا مكاريوس الأول البطريرك التاسع والخمسين من بطاركة الكرازة المرقسية - 24 برمهات",
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
                title: "نياحة القديس البابا متاؤس الثالث البطريرك المائة من بطاركة الكرازة المرقسية - 25 برمهات",
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
                title: "نياحة القديس البابا بطرس السادس البطريرك المائة والرابع من بطاركة الكرازة المرقسية - 26 برمهات",
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
                title: "نياحة القديس البابا بطرس السابع البطريرك المائة والتاسع من بطاركة الكرازة المرقسية - 28 برمهات",
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
                title: "تذكار نقل أعضاء القديس يعقوب الفارسي الشهير بالمقطَّع - 30 برمهات",
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
                title: "نياحة القديس البابا يوأنس التاسع البطريرك الحادي والثمانين من بطاركة الكرازة المرقسية - 2 برمودة",
                date: null,
                story: "",
                selected: false,
                day: 2,
                month: 8,
            },
            {
                id: 522,
                title: "نياحة القديس البابا ميخائيل الثاني البطريرك الحادي والسبعين من بطاركة الكرازة المرقسية - 3 برمودة",
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
                title: "شهادة القديسين بقطر وأكاكيوس وداكيوس وإيريني العذراء ومن معهم من رجال ونساء وعذارى - 4 برمودة",
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
                title: "تذكار الأعجوبة التي صُنعَت على يد القديس البابا شنوده الأول البطريرك الخامس والخمسين - 9 برمودة",
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
                title: "نياحة القديس البابا غبريال الثاني البطريرك السبعين الشهير بابن تريك - 10 برمودة",
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
                title: "نياحة القديس البابا يوأنس السابع عشر البطريرك الخامس بعد المائة من بطاركة الكرازة المرقسية - 13 برمودة",
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
                title: "نياحة القديس البابا مكسيموس البطريرك الخامس عشر من بطاركة الكرازة المرقسية - 14 برمودة",
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
                title: "نياحة القديس البابا مرقس السادس البطريرك الأول بعد المائة من بطاركة الكرازة المرقسية - 15 برمودة",
                date: null,
                story: "",
                selected: false,
                day: 15,
                month: 8,
            },
            {
                id: 552,
                title: "استشهاد القديس أنتيباس أسقف برغامس تلميذ القديس يوحنا الرسول - 16 برمودة",
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
                title: "استشهاد القديس يعقوب الكبير أحد الاثني عشر رسولاً وشقيق يوحنا الحبيب - 17 برمودة",
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
                title: "نياحة القديس أبوللو تلميذ القديس الأنبا صموئيل المعترف - 18 برمودة",
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
                title: "استشهاد الشهداء يوحنا أبو نجاح الكبير والرئيس أبو العلا فهد بن إبراهيم وزملائهما - 19 برمودة",
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
                title: "استشهاد القديس ببنوده الذي من دندرة (دندرة: قرية كبيرة تقع غرب مدينة قنا) - 20 برمودة",
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
                title: "نياحة القديس البابا ألكسندروس الأول البطريرك التاسع عشر من بطاركة الكرازة المرقسية - 22 برمودة",
                date: null,
                story: "",
                selected: false,
                day: 22,
                month: 8,
            },
            {
                id: 565,
                title: "نياحة القديس البابا مرقس الثاني البطريرك التاسع والأربعين من بطاركة الكرازة المرقسية - 22 برمودة",
                date: null,
                story: "",
                selected: false,
                day: 22,
                month: 8,
            },
            {
                id: 566,
                title: "نياحة القديس البابا خائيل الثاني البطريرك الثالث والخمسين من بطاركة الكرازة المرقسية - 22 برمودة",
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
                title: "نياحة القديس البابا شنوده الأول البطريرك الخامس والخمسين من بطاركة الكرازة المرقسية - 24 برمودة",
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
                title: "استشهاد القديس تاوضروس العابد والمائة والعشرين شهيداً - 25 برمودة",
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
                title: "نياحة القديس البابا يوأنس السابع البطريرك الثامن والسبعين من بطاركة الكرازة المرقسية - 26 برمودة",
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
                title: "استشهاد القديس مار مرقس الرسول الإنجيلي كاروز الديار المصرية - 30 برمودة",
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
                title: "نياحة القديس تادرس الطبانيسي تلميذ القديس باخوميوس أب الشركة - 2 بشنس",
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
                title: "نياحة القديس البابا غبريال الرابع البطريرك السادس والثمانين من بطاركة الكرازة المرقسية - 3 بشنس",
                date: null,
                story: "",
                selected: false,
                day: 3,
                month: 9,
            },
            {
                id: 588,
                title: "نياحة القديس البابا يوأنس الأول البطريرك التاسع والعشرين من بطاركة الكرازة المرقسية - 4 بشنس",
                date: null,
                story: "",
                selected: false,
                day: 4,
                month: 9,
            },
            {
                id: 589,
                title: "نياحة القديس البابا يوأنس الخامس البطريرك الثاني والسبعين من بطاركة الكرازة المرقسية - 4 بشنس",
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
                title: "نياحة القديس العظيم البابا أثناسيوس الرسولي البطريرك العشرين من بطاركة الكرازة المرقسية - 7 بشنس",
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
                title: "نياحة القديس البابا يوأنس الحادي عشر البطريرك التاسع والثمانين من بطاركة الكرازة المرقسية - 9 بشنس",
                date: null,
                story: "",
                selected: false,
                day: 9,
                month: 9,
            },
            {
                id: 601,
                title: "نياحة القديس البابا غبريال الثامن البطريرك السابع والتسعين من بطاركة الكرازة المرقسية - 9 بشنس",
                date: null,
                story: "",
                selected: false,
                day: 9,
                month: 9,
            },
            {
                id: 602,
                title: "إلقاء الثلاثة فتية القديسين حنانيا وعزاريا وميصائيل في أتون النار.(مخطوط 295 ميامر دير السريان وتذكر المصادر أن تاريخ نياحتهم 14 هاتور) - 10 بشنس",
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
                title: "تذكار استشهاد القديسة ثاؤكليا زوجة القديس يسطس ابن الملك نوماريوس - 11 بشنس",
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
                title: "تذكار نياحة القديس البابا مرقس السابع البطريرك السادس بعد المائة من بطاركة الكرازة المرقسية - 12 بشنس",
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
                title: "استشهاد الجنود الستة الذين رافقوا الأمير إقلاديوس الشهيد - 20 بشنس",
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
                title: "نياحة القديس البابا يوأنس الثاني البطريرك الثلاثين من بطاركة الكرازة المرقسية - 27 بشنس",
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
                title: "نياحة القديس البابا ميخائيل الأول البطريرك الثامن والستين من بطاركة الكرازة المرقسية - 30 بشنس",
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
                title: "نياحة القديس البابا يوأنس الثامن عشر البطريرك السابع بعد المائة من بطاركة الكرازة المرقسية - 2 بؤونة",
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
                title: "نياحة القديس البابا يوأنس الثامن البطريرك الثمانين من بطاركة الكرازة المرقسية - 4 بؤونة",
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
                title: "تذكار تكريس كنيسة السيدة العذراء المعروفة بالمحمَّة (المحمة: مسطرد حالياً، قرب القاهرة) - 8 بؤونة",
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
                title: "نياحة القديس البابا يوأنس السادس عشر البطريرك 103 من بطاركة الكرازة المرقسية - 10 بؤونة",
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
                title: "تذكار تكريس هيكل الأربعين شهيداً بكنيسة إبسوتير ( المخلص ) بالإسكندرية - 11 بؤونة",
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
                title: "نياحة القديس البابا يسطس البطريرك السادس من بطاركة الكرازة المرقسية - 12 بؤونة",
                date: null,
                story: "",
                selected: false,
                day: 12,
                month: 10,
            },
            {
                id: 689,
                title: "نياحة القديس البابا كيرلس الثاني البطريرك السابع والستين من بطاركة الكرازة المرقسية - 12 بؤونة",
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
                title: "نياحة القديس البابا يوأنس التاسع عشر البطريرك الثالث عشر بعد المائة من بطاركة الكرازة المرقسية - 14 بؤونة",
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
                title: "عودة رفات القديس مار مرقس إلى الكاتدرائية المرقسية الجديدة - 17 بؤونة",
                date: null,
                story: "",
                selected: false,
                day: 17,
                month: 10,
            },
            {
                id: 699,
                title: "نياحة القديس البابا داميانوس البطريرك الخامس والثلاثين من بطاركة الكرازة المرقسية - 18 بؤونة",
                date: null,
                story: "",
                selected: false,
                day: 18,
                month: 10,
            },
            {
                id: 700,
                title: "افتتاح الكاتدرائية الجديدة بدير الأنبا رويس بالقاهرة - 18 بؤونة",
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
                title: "نياحة البابا أرشيلاؤس البطريرك الثامن عشر من بطاركة الكرازة المرقسية - 19 بؤونة",
                date: null,
                story: "",
                selected: false,
                day: 19,
                month: 10,
            },
            {
                id: 704,
                title: "وضع جسد القديس مار مرقس الرسول بالمزار المخصص له بكنيسته بدير الأنبا رويس - 19 بؤونة",
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
                title: "تذكار تكريس هيكل الأربعين شهيداً بكنيسة إبسوتير ( المخلص ) بالإسكندرية - 21 بؤونة",
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
                title: "نياحة القديس البابا بطرس الرابع البطريرك الرابع والثلاثين من بطاركة الكرازة المرقسية - 25 بؤونة",
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
                title: "نياحة القديس البابا ثاؤدوسيوس البطريرك الثالث والثلاثين من بطاركة الكرازة المرقسية - 28 بؤونة",
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
                title: "نياحة القديس البابا قسما الأول البطريرك الرابع والأربعين من بطاركة الكرازة المرقسية - 30 بؤونة",
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
                title: "نياحة القديس البابا كيرلس الأول البطريرك الرابع والعشرين من بطاركة الكرازة المرقسية - 3 ابيب",
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
                title: "نياحة القديس البابا كلاوديانوس البطريرك التاسع من بطاركة الكرازة المرقسية - 9 ابيب",
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
                title: "نياحة القديس البابا بطرس الخامس البطريرك الثالث والثمانين من بطاركة الكرازة المرقسية - 14 ابيب",
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
                title: "وضع جسد الشهيد مار جرجس الروماني بكنيسته بمصر القديمة - 16 ابيب",
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
                title: "استشهاد القديسين الأنبا بضابا أسقف قفط وأنبا أندراوس وأنبا خرستوذولوس - 19 ابيب",
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
                title: "نياحة القديس البابا يوأنس العاشر البطريرك الخامس والثمانين من بطاركة الكرازة المر - 19 ابيب",
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
                title: "نياحة القديس البابا سيماؤن الثاني البطريرك الثاني والأربعين من بطاركة الكرازة المرقسية - 24 ابيب",
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
                title: "نياحة القديس البابا تيموثاوس الأول البطريرك الثاني والعشرين من بطاركة الكرازة المرقسية - 26 ابيب",
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
                title: "نياحة القديس البابا كيرلس الخامس البطريرك الثاني عشر بعد المائة من بطاركة الكرازة المرقسية - 1 مسرى",
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
                title: "نياحة القديس البابا إبريموس البطريرك الخامس من بطاركة الكرازة المرقسية - 3 مسرى",
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
                title: "نياحة القديس الأنبا ويصا تلميذ الأنبا شنوده رئيس المتوحدين - 6 مسرى",
                date: null,
                story: "",
                selected: false,
                day: 6,
                month: 12,
            },
            {
                id: 807,
                title: "بشارة الملاك للقديس يواقيم بميلاد القديسة العذراء مريم - 7 مسرى",
                date: null,
                story: "",
                selected: false,
                day: 7,
                month: 12,
            },
            {
                id: 808,
                title: "نياحة القديس البابا تيموثاوس الثاني البطريرك السادس والعشرين من بطاركة الكرازة المرقسية - 7 مسرى",
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
                title: "تذكار الآية العظيمة التي صنعها الله في عهد البابا ثاؤفيلس البطريرك الثالث والعشرين - 14 مسرى",
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
                title: "نياحة القديس الأرشيدياكون حبيب جرجس (اعترف المجمع المقدس بقداسته في جلسة 20 يونيو 2013م) - 15 مسرى",
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
                title: "نياحة القديس البابا متاؤس الرابع البطريرك الثاني بعد المائة من بطاركة الكرازة المرقسية - 16 مسرى",
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
                title: "نياحة القديس البابا مكاريوس الثالث البطريرك الرابع عشر بعد المائة من بطاركة الكرازة المرقسية - 25 مسرى",
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
                title: "نياحة القديس البابا يوأنس الرابع عشر البطريرك السادس والتسعين من بطاركة الكرازة المرقسية - 3 نسئ",
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
                title: "نياحة القديس البابا يوأنس الخامس عشر البطريرك التاسع والتسعين من بطاركة الكرازة المرقسية - 5 نسئ",
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
            let response = sendHttpRequest(apiRoot +
                "GetSynaxariumStory?id=" +
                String(obj.id) +
                "&synaxariumSourceId=1");
            if (!response)
                return;
            let divs = response.querySelectorAll("div");
            if (divs.length === 0)
                return;
            if (!tbl[1])
                return;
            tbl[1][tbl[1].length - 1] += divs[1].innerHTML + "\n";
            console.log("done ", tbl[0]);
        });
    }
    function sendHttpRequest(apiURL) {
        let request = new XMLHttpRequest();
        request.open("GET", apiURL);
        request.send();
        console.log(request.getAllResponseHeaders());
        request.onload = () => {
            if (request.status === 200) {
                let responseDoc = new DOMParser().parseFromString(request.response, "text/html");
                if (!responseDoc)
                    return;
                return responseDoc;
            }
            else {
                console.log("error status text = ", request.statusText);
                return request.statusText;
            }
        };
    }
}
function _reformatReadingArray(array) {
    let titlesRows;
    return array.map(table => {
        if (table.filter(row => row[0].startsWith(Prefix.readingRef)).length > 0)
            return table;
        titlesRows = table.filter(row => row[0].endsWith('&C=Title') || row[0].endsWith('&C=SubTitle'));
        let newTable = [];
        titlesRows.forEach(row => {
            newTable.push([row[0], row[1]]),
                newTable.push([
                    Prefix.readingRef + row[2] + '\n' + row[3],
                ]);
        });
        return newTable;
    });
}
function _prepareReadingArrayForReferences(array) {
    let name = getArrayNameFromArray(array);
    saveOrExportArray(array.map(tbl => {
        tbl = tbl.filter(row => row[0].includes("&C=Title"));
        tbl.forEach(row => {
            if (row.includes('Psalm&D='))
                tbl.splice(tbl.indexOf(row) + 1, 0, [Prefix.readingRef + "PSA:&C="]);
            else
                tbl.splice(tbl.indexOf(row) + 1, 0, [Prefix.readingRef + "XXX&C="]);
        });
        return tbl;
    }), name, true, false);
}
/**
 * Removes the spaces and () from the reading references in an array, and inserts a new row if the reference contains '/'
 * @param {string[][][]} readingArray
 */
function _fixReadingReferences(readingArray) {
    readingArray
        .forEach(table => table.forEach(row => {
        if (row[0].endsWith('&C=Title'))
            table[table.indexOf(row)] = [row[0]];
        if (!row[0].startsWith(Prefix.readingRef))
            return;
        row[0] = row[0]
            .replaceAll(' ', '')
            .replaceAll('(', '')
            .replaceAll(')', '')
            .replaceAll('–', '-')
            .replaceAll(',', ';');
        (function process() {
            if (!row[0].includes(';'))
                return;
            let actor = splitTitle(row[0])[1];
            let parts = splitTitle(row[0])[0].split(';');
            let root = parts[0].replace(Prefix.readingRef, '').split(':'); //[PSA, 12, 2-3];
            row[0] = Prefix.readingRef + root[0] + ':' + root[1] + ':' + correctVerses(root[2]) + '/';
            row[0] += parts.filter(part => parts.indexOf(part) > 0)
                .map(verse => root[1] + ':' + correctVerses(verse))
                .join('/');
            if (actor)
                row[0] += '&C=' + actor;
            function correctVerses(verse) {
                if (verse.includes('-'))
                    return verse;
                return verse + '-' + verse;
            }
        })();
    }));
    saveOrExportArray(readingArray, getArrayNameFromArray(readingArray), true, false);
    function checkReferenceIntegrity(ref, prefix) {
        let Praxis = [
            /ACT:\d*:\d*-\d/,
            /ACT:\d*:\d*-End/
        ];
        let stPaul = [
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
        ];
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
        let group = [
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
        let expressions = group.find(exp => prefix.startsWith(exp[1]))[0];
        return expressions.map(exp => exp.test(ref)).includes(true);
    }
}
function _removeDuplicates(array) {
    array.map((tbl) => {
        array.forEach((t) => {
            if (array.indexOf(t) !== array.indexOf(tbl) &&
                t[0][0] === tbl[0][0] &&
                t.length === tbl.length) {
                console.log("first table = ", tbl, " and duplicate = ", t);
            }
            else
                console.log(t[0][0]);
        });
    });
}
function _findReadingArrayDuplicates(readingArray) {
    let similar = new Set(), title, references, allRefs;
    allRefs = readingArray
        .map(table => {
        if (table.length < 1)
            return;
        title = table[0][0];
        references =
            table
                .filter(row => row.length === 1 && row[0].startsWith(Prefix.readingRef))
                .map(row => row[0])
                .join('&&');
        if (!references)
            return console.log('No references were found: table title = ', title);
        if (references.split('&&').length !== table.length - 1)
            return console.log('The references returned do not match the number of rows starting with Prefix.readingRef. Table title =  ', title);
        return [title, references];
    });
    return allRefs
        .filter(ref => ref && ref[0] && ref[1])
        .map(element => {
        if (similar.has(element[1]))
            return element;
        similar.add(element[1]);
    }).filter(ref => ref);
}
function _fixPraxisArray(readingsArray) {
    readingsArray.forEach(tbl => {
        tbl.forEach(row => {
            if (tbl.indexOf(row) === 0)
                return;
            if (row[1].includes('-') && confirm(row[1].replaceAll('-', '&&-&&')))
                row[1] = row[1].replaceAll('-', '');
        });
    });
    saveOrExportArray(readingsArray, getArrayNameFromArray(readingsArray), true);
}
function _HelperPrepareArabicChant() {
    //temporary function
    let text = prompt("Enter text");
    if (!text)
        return;
    let splitted = text.split("_&_"), array = [];
    for (let i = 0; i < splitted.length; i += 20) {
        preparePart(splitted.slice(i, i + 20));
    }
    function preparePart(part) {
        if (part.length % 2 > 0)
            return console.log("splitted is not even");
        for (let i = 0; i < part.length / 2; i++) {
            array.push(part[i]);
            array.push(" " +
                String.fromCharCode(beamedEighthNoteCode).repeat(2) +
                " " +
                part[i + part.length / 2] +
                "_&&_");
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
    let Readings = [
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
    let readingDate, result = "";
    setCopticDates(new Date("2023.12.31"));
    for (let i = 1; i < 367; i++) {
        changeDate(undefined, true, undefined, false);
        Readings.forEach((prefix) => {
            if (![Seasons.GreatLent, Seasons.JonahFast].includes(Season)
                &&
                    [Prefix.gospelNight, Prefix.prophecies].includes(prefix[0]))
                return;
            if (Season === Seasons.GreatLent
                &&
                    [0, 6].includes(weekDay)
                &&
                    prefix[0] === Prefix.prophecies)
                return; //During the Great Lent and Jonah Fast, only the week-days have Prophecies Readings in the Incense Dawn office
            if (Season === Seasons.JonahFast
                && prefix[0] === Prefix.gospelNight)
                return; //No Gospel Night during Jonah Fast
            if (Season === Seasons.GreatLent
                &&
                    weekDay !== 0
                && [Prefix.gospelVespers, Prefix.gospelNight].includes(prefix[0]))
                return; //During the Great Lent, only Sunday has Vespers (on Saturday afternoon), and Gospel Night (on Sunday afternoon)
            if (Season === Seasons.GreatLent
                && weekDay === 6
                && prefix[0] === Prefix.gospelVespers
                && copticReadingsDate === "GL57")
                return; //no vespers for the Resurrection Sunday
            if (Season === Seasons.JonahFast
                && weekDay !== 1
                && prefix[0] === Prefix.gospelVespers)
                return; //During the Jonah Fast, only Monday has Vespers prayers
            if (Season === Seasons.HolyWeek)
                return; //No readings during the holy week
            (function fetchReadings() {
                readingDate = copticReadingsDate;
                if (prefix[0] === Prefix.synaxarium)
                    readingDate = copticDate;
                let reading = getTablesArrayFromTitlePrefix(prefix[0])
                    .filter((tbl) => isMultiDatedTitleMatching(tbl[0][0], [readingDate])); //We do a filter not a find because Gospels arrays include 2 tables for each day: Psalm table and Gospel table
                if (reading.length < 1) {
                    result += "\n\n\ncopticDate = " + copticDate + "\n";
                    result += "copticReadingsDate = " + copticReadingsDate + "\n";
                    if (weekDay === 0)
                        result += "it is a Sunday \n";
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
function _mergeReferencesIntoOneRow(array) {
    let refs, first;
    for (let table of array) {
        for (let row of table) {
            if (row[0].includes('&C=Title'))
                refs.push([]);
            if (row[0].startsWith(Prefix.readingRef))
                refs[refs.length - 1].push(row);
            else
                continue;
        }
        for (let titleGroup of refs) {
            if (titleGroup[0].includes('/'))
                continue;
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
        if (table.length < 1)
            return GN.splice(GN.indexOf(table), 1);
        if (!table[0][0].startsWith(Prefix.HolyWeek))
            return;
        if (!table[0][0].includes('Gospel&D='))
            return;
        if (table.map(row => row[0].includes('&C=Title')).length < 2)
            return;
        let titleRows = table.filter(row => row[0].includes('&C=Title'));
        titleRows = titleRows.filter(row => row[0].includes('Gospel&D=') || ['JHN', 'MAT', 'LUK', 'MRK'].map(prefix => row[0].includes(prefix + '&C=Title')).includes(true));
        if (titleRows.length <= 1)
            return;
        let tables = titleRows
            .map(row => table.slice(table.indexOf(row), getLastIndex(row)));
        let titleBase = titleRows[0][0];
        tables
            .forEach(tbl => {
            if (tables.indexOf(tbl) === 0)
                return;
            if (tbl.length < 1)
                return;
            tbl[0][0] = titleBase.replace('Gospel', tbl[0][0].split("&C=")[0].split(Prefix.same)[1] + "Gospel");
            tables[0].push([Prefix.placeHolder, splitTitle(tbl[0][0])[0]]);
        });
        GN.splice(GN.indexOf(table), 1, ...tables);
        function getLastIndex(row) {
            if (titleRows.indexOf(row) < titleRows.length - 1)
                return table.indexOf(titleRows[titleRows.indexOf(row) + 1]);
            return table.length;
        }
    });
    saveOrExportArray(GN, getArrayNameFromArray(GN), true);
}
function _fixSIRBook() {
    let sirAR = Bibles.AR[0].find(book => book[0].id === 'SIR')[1];
    let sirFR = Bibles.FR[0].find(book => book[0].id === 'SIR');
    let fixed = [
        sirFR[0],
        []
    ];
    let index;
    sirAR
        .forEach(chapter => {
        index = sirAR.indexOf(chapter);
        if (index === 0)
            return;
        let ch = chapter.map(verse => {
            if (verse.length === 1 && verse[0] === '\n')
                return verse;
            else if (verse.length === 2 && Number(verse[0])) {
                let ver = sirFR[1][index - 1].find(v => v[0] === verse[0]);
                if (ver)
                    return ver;
            }
        });
        fixed[1].push(ch);
    });
    Bibles.FR[0].splice(Bibles.FR[0].indexOf(sirFR), 1, fixed);
    return Bibles.FR[0].find(b => b[0].id === 'SIR')[1];
}
async function fetchBibleBookFromAELF(id, chapters, lang = 'FR', bibleID) {
    let req, text, book = [{ id: id, human: id, human_long: id, chaptersList: [] }, []];
    if (bibleID)
        book[0] = Bibles[lang][0].find(book => book[0].id === bibleID)[0];
    for (let i = chapters[0]; i <= chapters[chapters.length - 1]; i++) {
        book[1].push(await fetchChapter(i));
    }
    async function fetchChapter(i) {
        req = await fetch(encodeURI('https://www.aelf.org/bible/' + id + '/' + i.toString()));
        text = await req.text();
        if (!text) {
            alert('No response, i = ' + i.toString());
            return [];
        }
        ;
        let html = new DOMParser().parseFromString(text, 'text/html');
        let parags = Array.from(html.querySelectorAll('p'))
            .filter(p => p.children[0].classList.contains('verse_number'));
        let chapter = [], verseNumber;
        if (parags.length < 1) {
            alert('parags.length <1');
            return chapter;
        }
        ;
        parags
            .forEach(p => {
            verseNumber = p.children[0].innerText;
            chapter.push([
                verseNumber,
                p.innerText
                    .replace(verseNumber + ' ', '')
                    .replaceAll('\n', ' '),
            ]);
            if (parags.indexOf(p) < parags.length - 1)
                chapter.push(['\n']);
        });
        return chapter;
    }
    return book;
}
function _fixReadingArray(array) {
    array.forEach(table => {
        if (table[0].length > 1)
            table[0] = [table[0][0]];
        let refs = table.filter(row => row[0].startsWith(Prefix.readingRef));
        refs.forEach(row => row[0] = row[0].replaceAll(' ', '').replaceAll(')', '').replaceAll('(', ''));
        if (refs.length < 2)
            return;
        refs[0][0] =
            refs[0][0]
                + refs
                    .filter(row => refs.indexOf(row) > 0)
                    .map(row => "/" + row[0].split(':')[1] + ':' + row[0].split(':')[2])
                    .join('');
        refs
            .filter(row => refs.indexOf(row) > 0)
            .forEach(row => table.splice(table.indexOf(row), 1));
    });
    saveOrExportArray(array, getArrayNameFromArray(array), true, false);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdE1vZGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9tb2R1bGVzL2VkaXRNb2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQUksUUFBUSxHQUFhLEVBQUUsQ0FBQztBQUM1Qjs7Ozs7Ozs7R0FRRztBQUNILFNBQVMsZ0JBQWdCLENBQUMsSUFXekI7SUFDQyxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssS0FBSztRQUFFLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO0lBQzVDLFlBQVksQ0FBQyxPQUFPLENBQUMsY0FBYyxHQUFHLE9BQU8sQ0FBQztJQUU5QyxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNoQix3TUFBd007UUFFeE0sSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFFMUQsSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVM7WUFDckQsT0FBTyxDQUFDLHVDQUF1QzthQUM1QyxJQUFJLElBQUksQ0FBQyxTQUFTLEtBQUssSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUztZQUFFLFdBQVcsRUFBRSxDQUFDO2FBQ3ZFLElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTO1lBQzFELE9BQU8sV0FBVyxFQUFFLENBQUM7UUFDdkIsMEdBQTBHO2FBQ3JHLElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTO1lBQzFELE9BQU8sZUFBZSxFQUFFLENBQUMsQ0FBQyxpREFBaUQ7YUFDeEUsQ0FBQztZQUNKLElBQUksQ0FBQyxTQUFTLEtBQUssY0FBYyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLGlCQUFpQixHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1lBQ25JLElBQUksQ0FBQyxXQUFXLEdBQUcsaUJBQWlCLEVBQUUsSUFBSSxFQUFFLENBQUE7UUFDOUMsQ0FBQztRQUFBLENBQUM7UUFFRixJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUM7SUFDaEMsQ0FBQztTQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVztRQUFFLElBQUksQ0FBQyxXQUFXLEdBQUcsaUJBQWlCLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxvR0FBb0c7SUFFaEwsSUFDRSxZQUFZLENBQUMsT0FBTyxDQUFDLFNBQVM7UUFDOUIsSUFBSSxDQUFDLFNBQVMsS0FBSyxZQUFZLENBQUMsT0FBTyxDQUFDLFNBQVM7UUFDakQsQ0FBQyxPQUFPLENBQ04sNElBQTRJLENBQzdJO1FBRUQsT0FBTyxDQUFDLDhIQUE4SDtJQUV4SSxZQUFZLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ2hELFlBQVksQ0FBQyxLQUFLLENBQUMsbUJBQW1CLEdBQUcsTUFBTSxDQUFDO0lBRWhELElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUztRQUNqQixJQUFJLENBQUMsU0FBUyxHQUFHLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksWUFBWSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRTlILFNBQVMsV0FBVztRQUNsQixJQUFJLENBQUMsU0FBUyxHQUFHLGNBQWMsQ0FBQyxDQUFDLDZOQUE2TjtRQUM5UCxJQUFJLENBQUMsU0FBUztZQUNaLE1BQU0sQ0FDSiwrQ0FBK0MsRUFDL0MsaUJBQWlCLENBQ2xCLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekYsSUFBSSxLQUFLLEdBQ1AsTUFBTSxDQUNKLGlDQUFpQyxFQUNqQyxpQ0FBaUMsQ0FDbEMsSUFBSSxpQ0FBaUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLDZGQUE2RjtRQUU3SCxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLG9MQUFvTDtRQUVwTyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxtSUFBbUk7UUFFMUwsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxVQUFVLENBQUMsQ0FBQyw4Q0FBOEM7SUFDekYsQ0FBQztJQUVELFNBQVMsaUJBQWlCLENBQ3hCLFlBQW9CLElBQUksQ0FBQyxTQUFTO1FBR2xDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNqQixJQUNFLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxzREFBc0Q7WUFDMUUsT0FBTyxDQUFDLGlFQUFpRSxDQUFDO1lBRzFFLElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUN0QixnSEFBZ0gsQ0FDakgsQ0FBQztRQUVKLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVM7WUFBRSxPQUFPLENBQUMsZ0VBQWdFO1FBRWpILElBQ0UsQ0FBQyxJQUFJLENBQUMsVUFBVTtZQUNoQixPQUFPLENBQ0wseUVBQXlFLENBQzFFO1lBRUQsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQywrREFBK0Q7UUFFekYsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyw4RkFBOEY7UUFFeEksSUFBSSxDQUFDLE1BQU0sSUFBSSxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUM7WUFDOUIsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLCtDQUErQyxDQUFDLENBQUM7UUFFdEUsWUFBWSxDQUFDLE9BQU8sQ0FBQyxjQUFjLEdBQUcsTUFBTSxDQUFDO1FBQzdDLE9BQU8sTUFBTSxDQUFDLEdBQUcsQ0FDZixDQUFDLEtBQUssRUFBRSxFQUFFLENBQ1IsU0FBUyxDQUNQLEtBQUssRUFDTCxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUN2QyxJQUFJLENBQUMsUUFBUSxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUNwQyxJQUFJLFNBQVMsQ0FDakIsQ0FBQztJQUNKLENBQUM7SUFFRCxTQUFTLFdBQVc7UUFDbEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQ3JCLHlDQUF5QyxFQUN6QyxJQUFJLENBQUMsU0FBUyxDQUNmLENBQUM7UUFDRixJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO1lBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM5RSxDQUFDO0lBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQztRQUNsRCxPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQXlCLENBQUMsQ0FBQztJQUVoRCxDQUFDLFNBQVMsVUFBVTtRQUNsQixZQUFZLENBQUMsV0FBVyxLQUFLLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLDhGQUE4RjtRQUU1SSxVQUFVLENBQUM7WUFDVCxXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVc7WUFDN0IsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1lBQ3pCLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFNBQVMsRUFBRSxZQUFZO1lBQ3ZCLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztTQUNsQixDQUFDLENBQUM7SUFDTCxDQUFDLENBQUMsRUFBRSxDQUFDO0FBQ1AsQ0FBQztBQUNEOzs7O0dBSUc7QUFDSCxTQUFTLFVBQVUsQ0FBQyxJQVNuQjtJQUNDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUztRQUFFLElBQUksQ0FBQyxTQUFTLEdBQUcsWUFBWSxDQUFDO0lBQ25ELElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUTtRQUFFLElBQUksQ0FBQyxRQUFRLEdBQUcsWUFBWSxDQUFDO0lBQ2pELElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxLQUFLO1FBQUUsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7SUFFNUMsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLElBQUk7UUFBRSxZQUFZLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUNyRCw0RkFBNEY7SUFFNUYsSUFBSSxTQUFpQixFQUFFLFNBQWlCLEVBQUUsWUFBMEIsQ0FBQztJQUVyRSxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFO1FBQ2pDLElBQUksQ0FBQyxLQUFLO1lBQUUsT0FBTztRQUNuQixTQUFTLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLFNBQVMsQ0FBQztRQUNwRCxZQUFZLEdBQUcsNkJBQTZCLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDeEQsYUFBYSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUM7WUFDbEMsQ0FBQyxDQUFDLENBQUMsU0FBUyxHQUFHLGdCQUFnQixDQUFDO1lBQ2hDLENBQUMsQ0FBQyxDQUFDLFNBQVMsR0FBRyxxQkFBcUIsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsdVBBQXVQO1FBQzlTLElBQ0UsQ0FBQyxTQUFTO1lBQ1YsT0FBTyxDQUNMLGdIQUFnSCxDQUNqSDtZQUVELFNBQVMsR0FBRyxjQUFjLENBQUM7UUFDN0IsSUFBSSxDQUFDLFNBQVM7WUFBRSxPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0NBQWtDLENBQUMsQ0FBQztRQUV2RSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7WUFDcEIsSUFBSSxDQUFDLEdBQUc7Z0JBQUUsT0FBTztZQUNqQixxQ0FBcUMsQ0FBQztnQkFDcEMsTUFBTSxFQUFFLGVBQWUsQ0FBQyxHQUFHLENBQUMsRUFBQywyRkFBMkY7Z0JBQ3hILFNBQVMsRUFBRSxTQUFTO2dCQUNwQixjQUFjLEVBQUUsZUFBZSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxZQUFZLENBQUMsU0FBUyxDQUFDO2dCQUMxRSxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7Z0JBQ3ZCLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztnQkFDekIsU0FBUyxFQUFFLFNBQVM7YUFDckIsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDLENBQUMsQ0FBQztJQUVILDRCQUE0QjtJQUM1QixrQkFBa0IsRUFBRSxDQUFDO0lBQ3JCLHlDQUF5QztJQUN6QyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMvRCwwQ0FBMEM7SUFFMUMsSUFBSSxNQUFNLEdBQ1AsS0FBSyxDQUFDLElBQUksQ0FDVCxJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLHlCQUF5QixDQUFDLENBQ3RDLElBQUksRUFBRSxDQUFDO0lBQy9CLHNEQUFzRDtJQUN0RCxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FDckIsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQy9DLENBQUMsQ0FBYyxFQUFFLEVBQUUsQ0FDbkIsQ0FBQyxDQUFDLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUNuQyxNQUFNLENBQUMsWUFBWSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUMsRUFDckMsRUFBRSxDQUNILENBQUMsQ0FDSCxDQUNGLENBQUM7SUFFRix3QkFBd0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUNuQyxDQUFDO0FBRUQ7OztHQUdHO0FBQ0gsU0FBUyxrQkFBa0I7SUFDekIsSUFBSSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1QyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNqQyxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7SUFDL0IsT0FBTyxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM1RSxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUM7SUFDM0IsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQzVCLE9BQU8sQ0FBQyxLQUFLLENBQUMsV0FBVyxHQUFHLGdCQUFnQixDQUFDO0lBQzdDLE9BQU8sQ0FBQyxLQUFLLENBQUMsWUFBWSxHQUFHLFNBQVMsQ0FBQztJQUN2QyxPQUFPLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7SUFFakMsWUFBWSxDQUFDLHFCQUFxQixDQUFDLGFBQWEsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUUzRCxtQkFBbUIsQ0FDakIsR0FBRyxFQUFFLENBQUMscUJBQXFCLEVBQUUsRUFDN0Isc0JBQXNCLEVBQ3RCLE9BQU8sQ0FDUixDQUFDO0lBRUYsbUJBQW1CLENBQ2pCLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxFQUNsRSxjQUFjLEVBQ2QsT0FBTyxDQUNSLENBQUM7SUFFRixtQkFBbUIsQ0FDakIsR0FBRyxFQUFFLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLEVBQ3JFLGNBQWMsRUFDZCxPQUFPLENBQ1IsQ0FBQztJQUVGLG1CQUFtQixDQUNqQixHQUFHLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsZUFBZSxFQUFFLElBQUksRUFBRSxDQUFDLEVBQ3ZFLE1BQU0sRUFDTixPQUFPLENBQ1IsQ0FBQztJQUVGLG1CQUFtQixDQUNqQixHQUFHLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFLElBQUksRUFBRSxDQUFDLEVBQ3RFLG1CQUFtQixFQUNuQixPQUFPLENBQ1IsQ0FBQztJQUVGLG1CQUFtQixDQUNqQixHQUFHLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxFQUN6RSx1QkFBdUIsRUFDdkIsT0FBTyxDQUNSLENBQUM7SUFFRixtQkFBbUIsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxjQUFjLEVBQUUsRUFBRSxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFFakUsbUJBQW1CLENBQ2pCLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxFQUM3RCxTQUFTLEVBQ1QsT0FBTyxDQUNSLENBQUM7SUFDRixtQkFBbUIsQ0FDakIsR0FBRyxFQUFFLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLEVBQ2pFLFVBQVUsRUFDVixPQUFPLENBQ1IsQ0FBQztJQUNGLG1CQUFtQixDQUNqQixHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLEVBQ25FLGlCQUFpQixFQUNqQixPQUFPLENBQ1IsQ0FBQztJQUNGLG1CQUFtQixDQUNqQixHQUFHLEVBQUUsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsRUFDbkUsWUFBWSxFQUNaLE9BQU8sQ0FDUixDQUFDO0lBQ0YsbUJBQW1CLENBQ2pCLEdBQUcsRUFBRSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxFQUNoRSxZQUFZLEVBQ1osT0FBTyxDQUNSLENBQUM7SUFDRixtQkFBbUIsQ0FDakIsR0FBRyxFQUFFLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLEVBQ2pFLGFBQWEsRUFDYixPQUFPLENBQ1IsQ0FBQztJQUNGLG1CQUFtQixDQUNqQixHQUFHLEVBQUUsQ0FDSCw2QkFBNkIsQ0FDM0IsUUFBUSxDQUFDLFlBQVksRUFBRSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQ2hELEVBQ0gsYUFBYSxFQUNiLE9BQU8sQ0FDUixDQUFDO0lBRUYsbUJBQW1CLENBQ2pCLEtBQUssSUFBSSxFQUFFLENBQUMsTUFBTSxpQkFBaUIsQ0FBQyxFQUFFLFNBQVMsRUFBRSxRQUFRLENBQUMsWUFBWSxFQUFFLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBRSxDQUFDLEVBQ25HLHNCQUFzQixFQUN0QixPQUFPLENBQ1IsQ0FBQztJQUVGLG1CQUFtQixDQUFDLEdBQUcsRUFBRSxDQUFDLGdCQUFnQixFQUFFLEVBQUUsYUFBYSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3RFLG1CQUFtQixDQUNqQixHQUFHLEVBQUUsQ0FDSCx1QkFBdUIsQ0FDckIsUUFBUSxDQUFDLFlBQVksRUFBRSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQy9DLElBQUksQ0FDTCxFQUNILGFBQWEsRUFDYixPQUFPLENBQ1IsQ0FBQztJQUNGLG1CQUFtQixDQUNqQixHQUFHLEVBQUUsQ0FDSCx1QkFBdUIsQ0FDckIsUUFBUSxDQUFDLFlBQVksRUFBRSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQy9DLEtBQUssQ0FDTixFQUNILGdCQUFnQixFQUNoQixPQUFPLENBQ1IsQ0FBQztJQUNGLG1CQUFtQixDQUNqQixHQUFHLEVBQUUsQ0FDSCwwQkFBMEIsQ0FDeEIsUUFBUSxDQUFDLFlBQVksRUFBRSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsRUFDcEQscUJBQXFCLEVBQ3JCLE9BQU8sQ0FDUixDQUFDO0FBQ0osQ0FBQztBQUVEOzs7R0FHRztBQUNILFNBQVMsYUFBYSxDQUFDLFNBQWlCO0lBQ3RDLElBQUksS0FBSyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7SUFDdkIsT0FBTyxDQUNMLFNBQVM7UUFDVCxjQUFjO1FBQ2QsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUN2QixNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLGdEQUFnRDtRQUMvRSxNQUFNLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzNCLElBQUk7UUFDSixNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUM1QixHQUFHO1FBQ0gsTUFBTSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUMxQixNQUFNLENBQ1AsQ0FBQztBQUNKLENBQUM7QUFFRDs7OztHQUlHO0FBQ0gsU0FBUyxTQUFTLENBQUMsU0FBc0I7SUFDdkMsSUFBSSxPQUFPLEdBQUcsVUFBVSxDQUFDLFNBQVMsQ0FBZ0IsQ0FBQztJQUNuRCxJQUFJLENBQUMsT0FBTztRQUFFLE9BQU87SUFDckIsSUFBSSxPQUFPLENBQUMsMkNBQTJDLENBQUMsS0FBSyxLQUFLO1FBQUUsT0FBTyxDQUFDLDRDQUE0QztJQUN4SCxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDbkIsQ0FBQztBQUNEOzs7O0dBSUc7QUFDSCxTQUFTLFVBQVUsQ0FBQyxTQUFzQjtJQUN4QyxJQUFJLFNBQVMsQ0FBQyxPQUFPLEtBQUssR0FBRztRQUFFLE9BQU8sS0FBSyxDQUFDLGtDQUFrQyxDQUFDLENBQUM7SUFDaEYsSUFBSSxPQUFPLEdBQUcsVUFBVSxDQUFDLFNBQVMsQ0FBZ0IsQ0FBQztJQUNuRCxJQUFJLENBQUMsT0FBTztRQUFFLE9BQU87SUFFckIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxpREFBaUQsQ0FBQztRQUFFLE9BQU8sQ0FBQyw0Q0FBNEM7SUFDckgsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ25CLE9BQU8sQ0FBQyxLQUFLLENBQUMsbUJBQW1CLEdBQUcsMEJBQTBCLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQSxtREFBbUQ7SUFDM0gsT0FBTyxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQSwyQ0FBMkM7QUFDckcsQ0FBQztBQUVEOzs7R0FHRztBQUNILFNBQVMsY0FBYyxDQUFDLFNBQXNCLEVBQUUsUUFBaUI7SUFDL0QsSUFBSSxPQUFPLEdBQUcsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3BDLElBQUksQ0FBQyxPQUFPO1FBQUUsT0FBTyxLQUFLLENBQUMsNkJBQTZCLENBQUMsQ0FBQztJQUMxRCxJQUFJLFlBQVksR0FBRyxVQUFVLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2hELElBQUksQ0FBQyxRQUFRO1FBQUUsUUFBUSxHQUFHLE1BQU0sQ0FBQyx1QkFBdUIsRUFBRSxZQUFZLENBQUMsQ0FBQztJQUN4RSxJQUFJLENBQUMsUUFBUSxJQUFJLFFBQVEsS0FBSyxZQUFZO1FBQUUsT0FBTztJQUVuRCxPQUFPLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxHQUFHLFFBQVEsQ0FBQztJQUVoRSxJQUFJLFlBQVk7UUFBRSxPQUFPLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsUUFBUSxDQUFDLENBQUM7U0FDL0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQztRQUM1QyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNwQyxDQUFDO0FBRUQsU0FBUyxXQUFXLENBQUMsT0FBb0IsRUFBRSxTQUFpQjtJQUMxRCxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUN0QyxDQUFDO0FBRUQsU0FBUyxXQUFXLENBQ2xCLFNBQXNCLEVBQ3RCLFFBQWlCLEVBQ2pCLFFBQWlCO0lBRWpCLElBQUksT0FBTyxHQUFHLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNwQyxJQUFJLENBQUMsT0FBTztRQUFFLE9BQU87SUFDckIsSUFBSSxDQUFDLFFBQVE7UUFBRSxRQUFRLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQztJQUN4QyxJQUFJLENBQUMsUUFBUTtRQUFFLFFBQVEsR0FBRyxNQUFNLENBQUMsbUJBQW1CLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDaEUsSUFBSSxDQUFDLFFBQVE7UUFBRSxPQUFPLEtBQUssQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDO0lBQ2hFLElBQUksUUFBUSxLQUFLLFFBQVE7UUFBRSxPQUFPO0lBRWxDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMvQyxPQUFPLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQztJQUV6Qix3QkFBd0IsRUFBRSxDQUFDO0lBRTNCLFNBQVMsd0JBQXdCLENBQy9CLE1BQXNCLE9BQXlCLEVBQy9DLFFBQWdCLFFBQVE7UUFFeEIsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDbEMsTUFBTSxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDO2FBQ3BELE9BQU8sQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFO1lBQ2pCLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxQyxLQUFLLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUN0QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxJQUFJLFVBQVUsR0FBVyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFakQsSUFBSSxVQUFVLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUM7UUFDdkQsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7SUFFcEMsQ0FBQyxTQUFTLHNCQUFzQjtRQUM5QixLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUM7YUFDOUIsTUFBTSxDQUNMLENBQUMsT0FBb0IsRUFBRSxFQUFFLENBQ3ZCLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxLQUFLLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FDbkQ7YUFDQSxPQUFPLENBQUMsQ0FBQyxPQUFvQixFQUFFLEVBQUU7WUFDaEMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQy9DLElBQUksUUFBUSxHQUFHLFVBQVUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDNUMsT0FBTyxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztZQUNyQyxJQUFJLFFBQVE7Z0JBQUUsT0FBTyxDQUFDLEtBQUssSUFBSSxLQUFLLEdBQUcsUUFBUSxDQUFDO1lBQ2hELHdCQUF3QixDQUFDLE9BQXlCLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JFLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUNQLENBQUM7QUFFRDs7Ozs7R0FLRztBQUNILFNBQVMsbUJBQW1CLENBQzFCLEdBQWEsRUFDYixLQUFhLEVBQ2IsT0FBb0I7SUFFcEIsSUFBSSxPQUFPLEdBQXNCLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbEUsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDdEMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDcEMsT0FBTyxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7SUFDMUIsT0FBTyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQy9DLE9BQU8sQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDN0IsT0FBTyxPQUFPLENBQUM7QUFDakIsQ0FBQztBQUVEOzs7R0FHRztBQUNILFNBQVMsY0FBYyxDQUFDLFNBQWlCLEVBQUUsU0FBaUI7SUFDMUQsSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDLFNBQVM7UUFBRSxPQUFPO0lBQ3JDLFlBQVksQ0FBQyxTQUFTLEVBQUUsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7QUFDcEQsQ0FBQztBQUVEOzs7Ozs7OztHQVFHO0FBQ0gsU0FBUyxpQkFBaUIsQ0FBQyxJQUsxQjtJQUNDLElBQUksTUFBTSxHQUFnQixJQUFJLEdBQUcsRUFBRSxFQUNqQyxLQUFhLEVBQ2IsV0FBVyxHQUFnQixJQUFJLEdBQUcsRUFBRSxFQUNwQyxXQUF5QixDQUFDO0lBRTVCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUTtRQUNoQixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQ3hCLFlBQVksQ0FBQyxnQkFBZ0IsQ0FDM0IsMEJBQTBCLENBQ0csQ0FDaEMsQ0FBQSxDQUFBLDBFQUEwRTtJQUU3RSxJQUFJLElBQUksQ0FBQyxRQUFRO1FBQ2YsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FDbEMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxRQUFRLENBQ3BELENBQUM7SUFFSiw4REFBOEQ7SUFDOUQsSUFBSSxDQUFDLFFBQVE7U0FDVixPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRTtRQUNuQixJQUFJLENBQUMsT0FBTztZQUFFLE9BQU8sQ0FBQywrS0FBK0s7UUFDck0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsaUNBQWlDO1FBRS9ELElBQUksTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUM7WUFBRSxPQUFPLENBQUEsOElBQThJO1FBRTVLLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUEsQ0FBQSwrRkFBK0Y7UUFFaEgsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ2xDLGlCQUFpQixDQUFDO2dCQUNoQixZQUFZLEVBQUUsS0FBSztnQkFDbkIsZUFBZSxFQUFFLElBQUk7Z0JBQ3JCLFFBQVEsRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLGFBQWE7YUFDeEMsQ0FBQyxDQUFDLENBQUEsMk1BQTJNO1lBQzlNLElBQUksQ0FBQyxRQUFRO2lCQUNWLE1BQU0sQ0FDTCxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQ04sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLGFBQWE7bUJBQ3ZCLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSTttQkFDaEIsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEtBQUssT0FBTyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQ3hEO2lCQUNBLE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQywwSEFBMEg7WUFDN0osT0FBTztRQUNULENBQUM7UUFFRCxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTO1lBQzVCLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FDaEIsa0RBQWtELEVBQ2xELE9BQU8sQ0FDUixDQUFDLENBQUEsOEdBQThHO1FBRWxILFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUU5QyxJQUFJLENBQUMsV0FBVztZQUNkLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FDaEIsbUVBQW1FLEVBQ25FLEtBQUssRUFDTCxtQkFBbUIsRUFDbkIsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQzFCLENBQUM7UUFFSixJQUFJLGFBQWEsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDO1lBQUUsV0FBVyxHQUFHLGNBQWMsQ0FBQyxDQUFDLHFLQUFxSztRQUU1TyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQztZQUM3QyxXQUFXLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFN0MsaUJBQWlCLENBQUMsS0FBSyxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQ3hDLENBQUMsQ0FBQyxDQUFDO0lBRUwsa0RBQWtEO0lBQ2xELFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUNoQyxpQkFBaUIsQ0FDZixJQUFJLENBQUMsU0FBUyxDQUFDLEVBQ2YsU0FBUyxFQUNULElBQUksQ0FBQyxZQUFZLEVBQ2pCLElBQUksQ0FBQyxlQUFlLENBQ3JCLENBQ0YsQ0FBQztBQUNKLENBQUM7QUFFRDs7Ozs7R0FLRztBQUNILFNBQVMsaUJBQWlCLENBQUMsVUFBa0IsRUFBRSxXQUF5QjtJQUN0RSxJQUFJLENBQUMsV0FBVyxJQUFJLENBQUMsVUFBVTtRQUFFLE9BQU87SUFDeEMsMEdBQTBHO0lBQzFHLElBQUksU0FBUyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQ3hCLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQ0osQ0FDaEMsQ0FBQyxNQUFNLENBQ04sQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxLQUFLLFVBQVUsQ0FDckQsQ0FBQztJQUV0QixJQUFJLFNBQVMsQ0FBQyxNQUFNLEtBQUssQ0FBQztRQUFFLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyw4Q0FBOEMsQ0FBQyxDQUFDO0lBRS9GLDZEQUE2RDtJQUM3RCxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7SUFFdkIsU0FBUyxXQUFXLENBQUMsU0FBMkI7UUFDOUMsaUxBQWlMO1FBQ2pMLElBQUksV0FBVyxHQUNiLG9DQUFvQyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRWxELElBQUksQ0FBQyxXQUFXLElBQUksV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDO1lBQ3hDLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FDaEIsMEVBQTBFLENBQzNFLENBQUM7UUFFSjtZQUNFLFdBQVc7WUFDWCw2QkFBNkIsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztTQUN6RCxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMseUJBQXlCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLGlWQUFpVjtRQUV6WSxTQUFTLHlCQUF5QixDQUFDLGlCQUErQjtZQUNoRSxJQUFJLENBQUMsaUJBQWlCO2dCQUFFLE9BQU87WUFDL0IsSUFBSSxRQUFRLEdBQWUsaUJBQWlCLENBQUMsSUFBSSxDQUMvQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FDdkUsQ0FBQztZQUVGLElBQUksUUFBUTtnQkFDVixpQkFBaUIsQ0FBQyxNQUFNLENBQ3RCLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFDbkMsQ0FBQyxFQUNELFdBQVcsQ0FDWixDQUFDO2lCQUNDLElBQ0gsT0FBTyxDQUNMLDBHQUEwRyxDQUMzRztnQkFFRCxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDeEMsQ0FBQztJQUNILENBQUM7QUFDSCxDQUFDO0FBRUQ7Ozs7O0dBS0c7QUFDSCxTQUFTLGlCQUFpQixDQUN4QixXQUF5QixFQUN6QixTQUFpQixFQUNqQixlQUF3QixJQUFJLEVBQzVCLGtCQUEyQixJQUFJO0lBRS9CLElBQUksSUFBWSxDQUFDO0lBRWpCLElBQUksQ0FBQyxXQUFXO1FBQ2QsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLDZCQUE2QixFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBRWpFLElBQUksQ0FBQyxTQUFTO1FBQUUsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLDBCQUEwQixDQUFDLENBQUM7SUFDL0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUU1QyxJQUFJLEdBQUcseUJBQXlCLENBQUMsU0FBUyxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBRXpELElBQUksQ0FBQyxJQUFJO1FBQ1AsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUNoQiwrRUFBK0UsRUFDL0UsU0FBUyxDQUNWLENBQUM7SUFFSixJQUFJLGVBQWUsRUFBRSxDQUFDO1FBQ3BCLFlBQVksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBQy9CLEtBQUssQ0FBQywyQ0FBMkMsQ0FBQyxDQUFBO1FBQ2xELE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCxJQUFJLFlBQVk7UUFBRSxjQUFjLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0FBQ3BELENBQUM7QUFFRDs7OztHQUlHO0FBQ0gsU0FBUyx5QkFBeUIsQ0FDaEMsU0FBaUIsRUFDakIsV0FBeUI7SUFFekIsc0JBQXNCO0lBQ3RCLElBQUksQ0FBQyxXQUFXO1FBQUUsV0FBVyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNoRCxJQUFJLENBQUMsV0FBVztRQUFFLE9BQU87SUFDekIsSUFBSSxJQUFJLEdBQVcsR0FBRyxDQUFDO0lBQ3ZCLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBRXBELFNBQVMsWUFBWSxDQUFDLEtBQWlCO1FBQ3JDLElBQUksQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQztZQUMvQixPQUFPLENBQUMsR0FBRyxDQUFDLHVDQUF1QyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQzVELE9BQU8sS0FBSyxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFDdkMsQ0FBQztRQUNELGtCQUFrQjtRQUNsQixJQUFJLElBQUksS0FBSyxDQUFDO1FBQ2QsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO1lBQ3BCLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN2QixDQUFDLENBQUMsQ0FBQztRQUNILGFBQWE7UUFDYixJQUFJLElBQUksTUFBTSxDQUFDO0lBQ2pCLENBQUM7SUFDRCxTQUFTLGVBQWUsQ0FBQyxHQUFhO1FBQ3BDLElBQUksQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQztZQUMzQixPQUFPLENBQUMsR0FBRyxDQUFDLHFDQUFxQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQ3hELE9BQU8sS0FBSyxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFDdkMsQ0FBQztRQUVELGdCQUFnQjtRQUNoQixJQUFJLElBQUksS0FBSyxDQUFDO1FBQ2QsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQWUsRUFBRSxFQUFFLENBQUMsb0JBQW9CLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDckUsV0FBVztRQUNYLElBQUksSUFBSSxNQUFNLENBQUM7SUFDakIsQ0FBQztJQUVELFNBQVMsb0JBQW9CLENBQUMsT0FBZSxFQUFFLEdBQWE7UUFDMUQsa0NBQWtDO1FBQ2xDLE9BQU8sR0FBRyxPQUFPO2FBQ2QsVUFBVSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQyx1QkFBdUI7YUFDOUMsVUFBVSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUM7YUFDdkIsVUFBVSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUM7YUFDekIsVUFBVSxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztRQUU5QixJQUFJLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxPQUFPO1lBQ25DLE9BQU8sR0FBRyxPQUFPO2lCQUNkLFVBQVUsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxHQUFHLEdBQUcsRUFBRSxFQUFFLENBQUM7aUJBQ3ZELFVBQVUsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyw4REFBOEQ7UUFFaEksSUFBSSxJQUFJLEdBQUcsR0FBRyxPQUFPLEdBQUcsT0FBTyxDQUFDLENBQUMscUZBQXFGO0lBQ3hILENBQUM7SUFDRCxJQUFJLEdBQUcsZUFBZSxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQztJQUN4QyxJQUFJLEdBQUcsU0FBUyxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ3RDLE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQztBQUVELFNBQVMsZUFBZSxDQUFDLElBQVksRUFBRSxTQUFpQjtJQUN0RCxJQUFJLE1BQWMsQ0FBQztJQUNuQixNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFO1FBQ3ZDLE1BQU0sR0FBRyxTQUFTLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRTlCLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLE1BQU0sQ0FBQyxXQUFXO1lBQ2pDLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUEsb0lBQW9JOztZQUMxTCxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDcEUsQ0FBQyxDQUFDLENBQUM7SUFFSCxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUM7UUFDckMsT0FBTyxJQUFJLENBQUM7SUFDaEIsVUFBVTtJQUVWLFFBQVEsQ0FBQTtJQUNSLE9BQU8sSUFBSTtTQUNSLFVBQVUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBRSx5QkFBeUIsQ0FBQztTQUN4RCxVQUFVLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUUseUJBQXlCLENBQUM7U0FDeEQsVUFBVSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLHlCQUF5QixDQUFDO1NBQ3hELFVBQVUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSwwQkFBMEIsQ0FBQztTQUMxRCxVQUFVLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUUseUJBQXlCLENBQUMsQ0FBQztBQUM5RCxDQUFDO0FBR0Q7Ozs7OztHQU1HO0FBQ0gsU0FBUyxNQUFNLENBQUMsU0FBc0IsRUFBRSxnQkFBeUIsS0FBSyxFQUFFLEtBQWMsRUFBRSxRQUFpQixJQUFJO0lBQzNHLElBQUksT0FBTyxHQUFHLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNwQyxJQUFJLENBQUMsT0FBTztRQUFFLE9BQU87SUFFckIsSUFBSSxDQUFDLEtBQUs7UUFBRSxLQUFLLEdBQUcsTUFBTSxDQUFDLGtDQUFrQyxFQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM5RSxJQUFJLENBQUMsS0FBSztRQUFFLE9BQU8sS0FBSyxDQUFDLDhFQUE4RSxDQUFDLENBQUM7SUFFekcsSUFBSSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsRUFDeEMsQ0FBdUIsRUFDdkIsUUFBUSxHQUFXLEtBQUssRUFDeEIsV0FBVyxHQUFXLE9BQU8sQ0FBQyxLQUFLLENBQUMsbUJBQW1CLEVBQ3ZELFNBQVMsR0FBVyxPQUFPLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDO0lBRXRELElBQUksYUFBYSxFQUFFLENBQUM7UUFDbEIsUUFBUSxHQUFHLGFBQWEsQ0FBQztRQUN6QixXQUFXLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDakIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7UUFDM0MsTUFBTSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztRQUVyQyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsb0JBQW9CO1lBQ3RDLGlOQUFpTjtZQUNqTixNQUFNLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxDQUFDO2lCQUN2QyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FDZixLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssT0FBTyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFNUYsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsRCxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztRQUUzQyxTQUFTLGlCQUFpQixDQUFDLEdBQW1CO1lBRzVDLElBQUksUUFBUSxHQUFHLEdBQUcsQ0FBQyxzQkFBd0MsQ0FBQztZQUM1RDtZQUNFLGdIQUFnSDtZQUNoSCxRQUFRLENBQUMsT0FBTyxDQUFDLG9CQUFvQjs7b0JBRXJDLFFBQVEsQ0FBQyxPQUFPLENBQUMsb0JBQW9CLEtBQUssR0FBRyxDQUFDLE9BQU8sQ0FBQyxvQkFBb0I7Z0JBQzFFLGlCQUFpQixDQUFDLFFBQTBCLENBQUMsQ0FBQztZQUVoRCxPQUFPLEVBQUUsS0FBSyxFQUFFLFFBQVEsQ0FBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLFFBQVEsQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQSwrRkFBK0Y7UUFDekssQ0FBQztJQUNILENBQUM7SUFFRCxJQUFJLFdBQVcsR0FBWSxLQUFLLENBQUM7SUFDakMsV0FBVyxHQUFHLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDckQsSUFBSSxXQUFXLEVBQUUsQ0FBQztRQUNoQixXQUFXLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLFNBQVMsR0FBRyxNQUFNLENBQUM7UUFDbkIsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDO1FBQy9CLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO1FBQzNDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQztRQUM3QixNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUM7SUFDdEMsQ0FBQztJQUNELE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQy9CLE1BQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQztJQUNyQyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQztJQUM3QyxNQUFNLENBQUMsS0FBSyxDQUFDLG1CQUFtQixHQUFHLFdBQVcsQ0FBQztJQUMvQyxNQUFNLENBQUMsS0FBSyxDQUFDLGlCQUFpQixHQUFHLFNBQVMsQ0FBQztJQUkzQyxJQUFJLGFBQWE7UUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFHeEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLHdEQUF3RDtRQUNoRixNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFHN0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsK0VBQStFO1FBQ2hHLE1BQU0sQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBRXZCLElBQUksVUFBVSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxVQUFVLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQyxDQUFDLGlOQUFpTjtJQUV6VCxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsd0RBQXdEO1FBQ3JGLE1BQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQywrQkFBK0IsRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBRWhHLElBQUksQ0FBQyxhQUFhLElBQUksVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4QyxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUU3QyxJQUFJLFFBQVEsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM1QyxRQUFRO1NBQ0wsT0FBTyxDQUFDLENBQUMsS0FBa0IsRUFBRSxFQUFFO1FBQzlCLElBQUksQ0FBQyxhQUFhLElBQUksV0FBVyxDQUFDLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQztZQUFFLE9BQU87UUFDekUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksS0FBSyxDQUFDLE9BQU8sS0FBSyxHQUFHO1lBQUUsT0FBTztRQUNqRCxDQUFDLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDcEQsSUFBSSxhQUFhO1lBQUUsQ0FBQyxDQUFDLFNBQVMsR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEQsSUFBSSxXQUFXO1lBQUUsQ0FBQyxDQUFDLFNBQVMsR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNySCxDQUFDLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDdkIsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7UUFDckMsYUFBYSxJQUFJLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQztRQUNuRSxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7UUFDdEMsQ0FBQyxDQUFDLGVBQWUsR0FBRyxNQUFNLENBQUM7UUFDM0IsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxDQUFDLENBQWdCLEVBQUUsRUFBRSxHQUFHLHNCQUFzQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxLQUFLLENBQUEsQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUNsRyxDQUFDLENBQUMsQ0FBQztJQUNMLElBQUksUUFBd0IsQ0FBQztJQUM3QixLQUFLLENBQUMsQ0FBQyxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLFFBQVEsR0FBRyxhQUFhLENBQUE7SUFDeEQsT0FBTyxPQUFPLENBQUMscUJBQXFCLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBZ0IsQ0FBQztBQUN4RSxDQUFDO0FBRUQsU0FBUyxzQkFBc0IsQ0FBQyxDQUFnQjtJQUM5QyxJQUFJLENBQUMsQ0FBQyxDQUFDLFFBQVE7UUFBRSxPQUFPO0lBQ3hCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFxQixDQUFBO0lBQy9CLElBQUksQ0FBQyxDQUFDLEdBQUcsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUFDLENBQUMsQ0FBQyxjQUFjLENBQUM7UUFBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUE7SUFBQyxDQUFDO0lBQUEsQ0FBQztJQUMzRSxJQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUssR0FBRyxFQUFFLENBQUM7UUFBQyxDQUFDLENBQUMsY0FBYyxDQUFDO1FBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFBO0lBQUMsQ0FBQztJQUFBLENBQUM7SUFDNUUsSUFBSSxDQUFDLENBQUMsR0FBRyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQztRQUFDLGlCQUFpQixDQUFDLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxlQUFlLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQTtJQUFDLENBQUM7SUFBQSxDQUFDO0lBQzNHLElBQUksQ0FBQyxDQUFDLEdBQUcsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUFDLENBQUMsQ0FBQyxjQUFjLENBQUM7UUFBQyxpQkFBaUIsQ0FBQyxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUE7SUFBQyxDQUFDO0lBQUEsQ0FBQztJQUMxRyxJQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUssR0FBRyxFQUFFLENBQUM7UUFBQyxDQUFDLENBQUMsY0FBYyxDQUFDO1FBQUMsaUJBQWlCLENBQUMsRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQTtJQUFDLENBQUM7SUFBQSxDQUFDO0lBQzdFLElBQUksQ0FBQyxDQUFDLEdBQUcsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUFDLENBQUMsQ0FBQyxjQUFjLENBQUM7UUFBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFBQyxD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