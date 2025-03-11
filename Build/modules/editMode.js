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
        args.tablesArray[0][0][0] += css.Title; //We remove the '&C=Title' from the second row
    }
    function editSpecificTable(arrayName = args.arrayName) {
        alert(arrayName);
        if (!args.tableTitle && //args.tableTitle was not already provided as argument
            confirm("Do you want to edit a single or specific table(s) in the array?")) {
            args.tableTitle = prompt('Provide the name of the table you want to edit  (if more than one table, provide the titles separated by ", ". If you want the title to be evaluated as a Regular Expression, start the title with "RegExp" ');
            args.regExp = true;
        }
        ;
        if (!args.tableTitle && !args.arrayName)
            return; //If no tableTitle is provided, and no arrayName, we will return
        if (!args.tableTitle &&
            confirm("No tableTitle is provided, do you want to edit the entire tables array?"))
            return eval(arrayName); //If no tableTitle is provided, we will return the entire array
        if (args.tableTitle.startsWith('RegExp'))
            args.regExp = true;
        let titles = args.tableTitle.replaceAll('RegExp', '').split(", "); //if tableTitle is a comma separated string, it means there are multiple table titles provided
        if (!titles || titles.length < 1)
            return console.log("The provided tableTitle argument is not valid");
        containerDiv.dataset.specificTables = "true";
        debugger;
        return titles.map((title) => findTable(title, arrayName ? eval(arrayName) : undefined, args.operator || { includes: true }, args.regExp) || undefined);
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
        titleBase = splitTitle(Title(table))[0] || "NoTitle";
        prayersArray = getArrayFromPrefix(titleBase);
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
    titles.forEach((div) => Array.from(div.getElementsByTagName("P")).forEach((p) => (p.innerText = p.innerText.replaceAll(minusSign, ""))));
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
    htmlRow.title = splitTitle(htmlRow.title)[0] + Prefix.class + newClass;
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
                sibling.title += Prefix.class + cssClass;
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
    btnHtml.classList.add(css.inlineButton);
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
            getArrayFromPrefix(htmlTable[0].dataset.root),
        ].forEach((array) => modifyTheMainAndSubArrays(array)); //We will modify the table in its main string[][][] Array (passed to the function in the tablesArray argument to the function) as well as any other sub array in which the table might be also included (like PrayersArrays.massCommon, PrayersArrays.IncenseDawn, etc.)), retrieved by the table title (stored in the html data-root attribute);
        function modifyTheMainAndSubArrays(targetTablesArray) {
            if (!targetTablesArray)
                return;
            let oldTable = targetTablesArray.find((tbl) => splitTitle(Title(tbl))[0] === splitTitle(Title(editedTable))[0]);
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
                .replaceAll(plusSign + " ", "")
                .replaceAll(minusSign + " ", ""); //removing the plus(+) and minus(-à characters from the titles
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
    replaceClass(text);
    if (!arrayName.startsWith("PrayersArray"))
        return text;
    //Replace variables
    replaceVariables(variable.giaki, '" + variable.giaki.XXX+ "');
    replaceVariables(variable.thanksVespers, '" + variable.thanksVespers.XXX');
    return text;
    function replaceClass(text) {
        Object.entries(css).forEach(([name, value]) => {
            text = text.replaceAll(value, `" + css.${name}`);
        });
        return text;
    }
    function replaceVariables(v, r) {
        ['AR', 'FR', 'EN', 'COP', 'CA']
            .forEach(lang => text = text.replaceAll(v[lang], r.replace('XXX', lang)));
    }
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
        args.arrayName = getArrayNameFromArray(getArrayFromPrefix(args.titleBase));
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
        htmlRow.title = args.titleBase + Prefix.class + actorClass; //We need to record the full title of each row (i.e. row[0]) in order to be able to add it when we convert the html element into an element in an Array
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
            let tblsArray = getArrayFromPrefix(referrencedTblTitle);
            if (!tblsArray)
                return console.log("We could not identifiy the array in which the referrenced table is to be retrieved");
            let tableArrayName = getArrayNameFromArray(tblsArray);
            let table = [
                ...tblsArray.find((tbl) => splitTitle(Title(tbl))[0] === referrencedTblTitle),
            ] //!Caution, we must create a copy of the table otherwise the original table may be reversed in it its array
                .reverse();
            let created = table.map((row) => {
                return createHtmlElementForPrayerEditingMode({
                    tblRow: row,
                    titleBase: splitTitle(Title(table))[0],
                    languagesArray: copyLangs,
                    position: {
                        el: htmlRow,
                        beforeOrAfter: "afterend",
                    },
                    container: args.container,
                    arrayName: tableArrayName, //This is the array name of the embeded table not for the table including the placeHolder referencing the embeded table
                });
            });
            setCSS(created, false);
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
        setCSS(Array.from(document.getElementById("showSequence").querySelectorAll("div.Row")), false);
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
        setCSS(Array.from(newDiv.querySelectorAll(".Row")), false);
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
            Prefix.class +
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
        const table = findTable(args.tableTitle, undefined, undefined, true);
        if (!table)
            return alert('No table with the provided title was found. Be careful, the name of the table is assessed as a Regular Expression. You may need to escape some letters');
        let langs = getLanguages(args.tableTitle);
        if (!langs || !langs.includes('COP'))
            return;
        let prefix;
        for (let row of table) {
            row[langs.indexOf('COP') + 1] = await convert(row[langs.indexOf('COP') + 1]);
            prefix = Object.entries(Prefix).find(prefix => row[0].startsWith(prefix[1]));
            if (!prefix)
                continue;
            row[0] = `Prefix.${prefix[0]} + "${row[0].replace(prefix[1], '')}`;
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
        if (!originalText)
            return;
        const prefix = Array.from(Object.entries(Prefix)).find(entry => originalText.startsWith(entry[1]));
        if (prefix)
            return "Prefix." + prefix[0] + ' + "' + originalText.split(prefix[1])[1] + '"';
        let converted = [];
        let paragraphs = originalText.split('<br>');
        for (let parag of paragraphs) {
            if (!['NOFONT'].includes(args.fontFrom))
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
    let table = array.filter((tbl) => splitTitle(Title(tbl))[0] === splitTitle(title)[0])[0];
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
        languages: getLanguages(Title(table)),
        position: containerDiv,
        container: containerDiv,
    });
    scrollToTop();
}
function reArangeTablesColumns(tblTitle, arrayName) {
    //@ts-ignore
    // if (!console.save) addConsoleSaveMethod(console);
    let array = eval(arrayName);
    let table = array.filter((tbl) => Title(tbl) === tblTitle)[0];
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
        .filter((tbl) => Title(tbl).includes(date)) //!This must be a filter not a find operation because the Gospel Psalm and the Gospel itself for a given day are in 2 separate tables
        .forEach((tbl) => readings.push(tbl)));
    if (readings.length < 1)
        return;
    containerDiv.innerHTML = "";
    let tblTitle;
    readings.forEach((tbl) => {
        if (!tbl)
            return;
        tblTitle = splitTitle(Title(tbl))[0];
        startEditingMode({
            tableTitle: tblTitle,
            arrayName: PrayersArraysKeys.find((array) => tblTitle.startsWith(array[0]))[1],
            clear: false,
            operator: { equal: true },
        });
    });
    Object.entries(ReadingsArrays)
        .forEach(readingArray => {
        readingArray[1].filter((table) => Title(table).includes(date))
            .forEach((table) => {
            startEditingMode({
                tableTitle: splitTitle(Title(table))[0],
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
/**Can be called from the console to convert the coptic fonts of the Prophecies introduction */
async function _FixPropheciesIntroductionOrPsalm() {
    const title = eval(prompt('Provide the title of the table'));
    const table = findTable(title, ReadingsArrays.GospelNightArrayFR);
    if (!table)
        return console.log('No table with the provided title was found');
    if (title.includes('Prophecies&D='))
        await processPropheciesTable();
    else if (title.includes('Psalm&D='))
        await processPsalmTable();
    else
        await processAnyTable();
    async function processPropheciesTable() {
        if (!table)
            return;
        const introductions = table.filter(row => row[0] === Prefix.same + css.Diacon && row[1].length > 0 && !row[2] && !row[3]);
        if (!introductions)
            return alert(`No Row with title ${Prefix.same}${css.Diacon} was found !`);
        console.log(`row =`, introductions);
        await Promise.all(introductions.map(async (row) => await processIntroduction(row)));
        table?.forEach(row => row.forEach((element, index) => {
            if (element.startsWith(Prefix.same))
                (row[index]) = element.replace(Prefix.same, "Prefix.same +\"");
            if (element.startsWith(Prefix.HolyWeek))
                row[index] = element.replace(Prefix.HolyWeek, "Prefix.HolyWeek +\"");
            if (element.startsWith(Prefix.readingRef))
                row[index] = element.replace(Prefix.readingRef, "Prefix.readingRef +\"");
        }));
        console.log("modified table = ", table);
        async function processIntroduction(row) {
            if (!table)
                return;
            const copticText = await _FixCopticText(undefined, row[1]);
            console.log('converted coptic text = ', copticText);
            copticText
                .reverse()
                .map(text => table?.splice(table?.indexOf(row) + 1, 0, [Prefix.same + css.Intro, text, "", ""]));
            table?.splice(table?.indexOf(row), 1);
        }
    }
    async function processPsalmTable() {
        if (!table)
            return;
        await processAnyTable();
        table.forEach((row, index) => {
            if (index < 1)
                return;
            [1, 2, 3].forEach(i => distribute(row, row[i].split('\n'), i));
        });
        function distribute(row, splitted, i) {
            if (splitted.length !== 2)
                return;
            table[0][i] += '\n' + splitted[0];
            row[i] = splitted[1];
        }
    }
    async function processAnyTable() {
        if (!table)
            return;
        for (let row of table) {
            const copticText = await _FixCopticText(undefined, row[1]);
            row[1] = copticText.join('\n');
        }
    }
}
async function _FixCopticText(htmlParag, text) {
    if (htmlParag && htmlParag.tagName !== 'P')
        return alert('Please place the cursor in the paragraph that you want to fix');
    let font, parags;
    text ? parags = parags = text.split('\n') : parags = htmlParag.innerHTML.split('<br>');
    return await Promise.all(parags.map(async (parag, index) => await convertFont(parag, index)));
    async function convertFont(parag, index) {
        index === 1 ? font = 'ATHANASIUS' : font = 'CS_AVVA_SHENOUDA';
        const converted = await convertCopticFont({ fontFrom: font, promptAll: false, text: parag }) || '';
        if (!converted) {
            alert('Conversion has failed for ' + parag);
            return undefined;
        }
        ;
        insertRow();
        return converted;
        function insertRow() {
            if (!htmlParag)
                return;
            const row = addRow(htmlParag, false, htmlParag.title.replace('Diacon', 'ReadingIntro'), false);
            if (!row)
                return;
            row.querySelector('p.COP').innerText = converted;
        }
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
        table = ReadingsArrays.SynaxariumArrayFR.filter((tbl) => Title(tbl).includes("&D=" + day + month))[0];
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
        tbl = ReadingsArrays.SynaxariumArrayFR.filter((tbl) => Title(tbl).includes("&D=" + daystring + monthstring))[0];
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
        titlesRows = table.filter(row => row[0].endsWith(css.Title) || row[0].endsWith(css.SubTitle));
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
        tbl = tbl.filter(row => row[0].includes(css.Title));
        tbl.forEach(row => {
            if (row.includes('Psalm&D='))
                tbl.splice(tbl.indexOf(row) + 1, 0, [`${Prefix.readingRef}PSA:${Prefix.class}`]);
            else
                tbl.splice(tbl.indexOf(row) + 1, 0, [`${Prefix.readingRef}XXX${Prefix.class}`]);
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
        if (row[0].endsWith(css.Title))
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
            let actor = Object.values(css).find(v => row[0].endsWith(v));
            let parts = splitTitle(row[0])[0].split(';');
            let root = parts[0].replace(Prefix.readingRef, '').split(':'); //[PSA, 12, 2-3];
            row[0] = Prefix.readingRef + root[0] + ':' + root[1] + ':' + correctVerses(root[2]) + '/';
            row[0] += parts.filter(part => parts.indexOf(part) > 0)
                .map(verse => root[1] + ':' + correctVerses(verse))
                .join('/');
            if (actor)
                row[0] += actor;
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
                Title(t) === Title(tbl) &&
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
        title = Title(table);
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
function _combineReadingsReferences(readingArray) {
    const duplicates = new Set();
    readingArray.forEach(table => {
        if (table.filter(row => row.join('&&').includes(Prefix.readingRef)).length > 1)
            return; //If the table contains more than 1 row with references, we will ignore it;
        table.forEach(row => processRow(row, table));
    });
    return readingArray;
    function processRow(row, table) {
        const refs = row.filter(str => str.startsWith(Prefix.readingRef));
        if (refs.length > 1)
            return; //We will ignore the rows having including more than 1 reference
        refs.forEach(ref => {
            ref = ref.replaceAll(' ', '');
            if (!mergeDuplicates(table, ref))
                duplicates.add([ref, table]);
        });
    }
    function mergeDuplicates(table, ref) {
        const first = Array.from(duplicates).find(el => el[0] === ref);
        if (!first)
            return false;
        const firstTitle = splitTitle(Title(first[1]));
        const duplicateTitle = splitTitle(Title(table))[0];
        if (!duplicateTitle.includes('&D='))
            return false;
        debugger;
        const duplicateDate = duplicateTitle.split('&D=')[1];
        first[1][0][0] = firstTitle[0] + '||' + duplicateDate + Prefix.class + firstTitle[1] + 'Duplicate =' + duplicateDate;
        readingArray.splice(readingArray.indexOf(table), 1);
        return true;
    }
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
                beamedEighthNoteCode.repeat(2) +
                " " +
                part[i + part.length / 2] +
                "_&&_");
        }
    }
    text = array.toString();
    console.log(text);
    localStorage.temp = text;
}
async function _testReadingsRefs(array) {
    let reading, failed = '', table;
    setCopticDates(new Date("2023.12.31"));
    for (let i = 1; i < 367; i++) {
        changeDate(undefined, true, undefined, false);
        table = array.find(tbl => Title(tbl).includes(copticReadingsDate));
        if (!table) {
            failed += '["copticReadingDate = ' + copticReadingsDate + '"],\n';
            continue;
        }
        ;
        reading = await retrieveReadingTableFromBible(table, ['AR', 'FR']);
        if (!reading || reading.map(row => row.join('')).join('\n').includes('Error:')) {
            failed += '["' + Title(table) + '"],\n';
        }
    }
    exportToJSFile(failed, 'FailedReadings');
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
                let reading = getArrayFromPrefix(prefix[0])
                    .filter((tbl) => tableMatchingDates(Title(tbl), [readingDate])); //We do a filter not a find because Gospels arrays include 2 tables for each day: Psalm table and Gospel table
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
            if (row[0].includes(css.Title))
                refs.push([]); //new Table
            if (row[0].startsWith(Prefix.readingRef))
                refs[refs.length - 1].push(row);
            else
                continue;
        }
        for (let titleGroup of refs) {
            if (Title(titleGroup).includes('/'))
                continue;
            first = [splitTitle(Title(titleGroup))[0]];
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
        if (!Title(table).startsWith(Prefix.HolyWeek))
            return;
        if (!Title(table).includes('Gospel&D='))
            return;
        if (table.map(row => row[0].includes(css.Title)).length < 2)
            return;
        let titleRows = table.filter(row => row[0].includes(css.Title));
        titleRows = titleRows.filter(row => row[0].includes('Gospel&D=') || ['JHN', 'MAT', 'LUK', 'MRK'].map(prefix => row[0].includes(prefix + css.Title)).includes(true));
        if (titleRows.length <= 1)
            return;
        let tables = titleRows
            .map(row => table.slice(table.indexOf(row), getLastIndex(row)));
        let titleBase = Title(titleRows);
        tables
            .forEach(tbl => {
            if (tables.indexOf(tbl) === 0)
                return;
            if (tbl.length < 1)
                return;
            tbl[0][0] = titleBase.replace('Gospel', splitTitle(Title(tbl))[0].split(Prefix.same)[1] + "Gospel");
            tables[0].push([Prefix.placeHolder, splitTitle(Title(tbl))[0]]);
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
            table[0] = [Title(table)];
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
function _MergeDuplicateReadings(array) {
    return mergeReadings(array).filter(tbl => !Title(tbl).startsWith('Removed'));
    function mergeReadings(array) {
        let similar, title, refs;
        array.forEach(table => {
            if (table.length === 1 && Title(table).startsWith('Removed'))
                return;
            refs = getTableRefs(table);
            similar = array.filter(tbl => Title(tbl) !== Title(table) && getTableRefs(tbl) === refs);
            if (similar.length < 1)
                return;
            console.log('similar = ', similar);
            title = getReadingDate(Title(table));
            title += similar.map(tbl => '||' + getReadingDate(Title(tbl))).join('');
            table[0][0] = Title(table).split('&D=')[0] + '&D=' + title + Prefix.class + Title(table).split(Prefix.class)[1];
            similar.forEach(tbl => array[array.indexOf(tbl)] = [['Removed' + getReadingDate(Title(tbl))]]);
        });
        console.log('Cleaned Array = ', array);
        return array;
    }
    function getTableRefs(table) {
        return table.map(row => {
            if (!row.find(el => el.startsWith(Prefix.readingRef)))
                return '';
            return row.map(el => getCleanRef(el)).join('');
        }).join('');
    }
    function getCleanRef(ref) {
        return ref.split(Prefix.readingRef)[1].split(Prefix.class)[0].replace(' ', '');
    }
    function getReadingDate(title) {
        return title.split('&D=')[1].split(Prefix.class)[0];
    }
}
function _FixPropheciesRefs() {
    let splitted;
    return ReadingsArrays.GospelNightArrayFR.map(table => {
        if (!RegExp(Prefix.HolyWeek + '.*(HM|HE)Prophecies&D=GL').test(Title(table)))
            return table;
        table = table.map(row => {
            if (row.length !== 1 || !row[0].startsWith(Prefix.readingRef))
                return row;
            splitted = splitTitle(row[0]);
            return [
                "Prefix.same + Prefix.class + (splitted[1] || 'Diacon')",
                "",
                splitted[0],
                splitted[0],
            ];
        });
        return table;
    });
}
function _FixArabicNumbers(prefix) {
    const langs = getLanguages(prefix);
    const array = getArrayFromPrefix(prefix);
    return array.map(table => {
        return table.map(row => {
            row[langs.indexOf('AR') + 1] = getArabicNumbers(row[langs.indexOf('AR') + 1]);
            return row;
        });
    });
}
function _FixHolyWeekGospelReferences() {
    ReadingsArrays.GospelNightArrayFR.forEach(table => {
        table.forEach((row, index) => {
            if (index < 1)
                return;
            if (!row[0]?.endsWith('Diacon'))
                return;
            if (!row[2]?.startsWith(Prefix.readingRef))
                return;
            table[index] = [row[2] + css.Diacon];
            console.log(table[index]);
        });
    });
    saveOrExportArray(ReadingsArrays.GospelNightArrayFR, 'ReadingsArrays.GospelNightArrayFR', true, false);
}
function _FindMultipleReadingsReferencesInSameRow() {
    const result = [];
    Object.entries(ReadingsArrays).forEach(([name, array]) => {
        array.forEach(table => {
            //const found = table.find(row=>row.filter(el=>el.startsWith(Prefix.readingRef)).length>1);
            const found = table.find(row => row.length > 1 && row.filter(el => el.startsWith(Prefix.readingRef)).length > 0);
            if (found)
                result.push(`Array name = ${name} & Table Title = ${Title(table)}`);
        });
    });
    return result;
}
async function _ConvertCopticFontInEntireTableByTableTitle() {
    const title = prompt('Provide the table title');
    if (!title)
        return alert('The title is not valid');
    return await convertCopticFont({ tableTitle: eval(title) });
}
async function _ConvertTextCopticFont() {
    const text = prompt('Provide the text you want to convert');
    if (!text)
        return alert('The title is not valid');
    return await convertCopticFont({ text: text });
}
function _CheckThatTheLastVerseInBibleChapterIsNotANewLine(Bible) {
    Bible.forEach(book => {
        book[1].forEach(chapter => {
            while (!chapter[chapter.length - 1]?.[0] || (chapter[chapter.length - 1]?.[0] !== '#' && !Number(chapter[chapter.length - 1]?.[0]))) {
                console.log(`last verse: ${chapter[chapter.length - 1]?.[0]} and Book: ${book[0]?.id} and chapter: ${book[1].indexOf(chapter)}`);
                chapter.pop();
            }
            console.log(`chapter OK & last verse: ${chapter[chapter.length - 1]?.[0]}`);
        });
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdE1vZGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9tb2R1bGVzL2VkaXRNb2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQUksUUFBUSxHQUFhLEVBQUUsQ0FBQztBQUM1Qjs7Ozs7Ozs7R0FRRztBQUNILFNBQVMsZ0JBQWdCLENBQUMsSUFZekI7SUFDQyxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssS0FBSztRQUFFLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO0lBQzVDLFlBQVksQ0FBQyxPQUFPLENBQUMsY0FBYyxHQUFHLE9BQU8sQ0FBQztJQUU5QyxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNoQix3TUFBd007UUFFeE0sSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFFMUQsSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVM7WUFDckQsT0FBTyxDQUFDLHVDQUF1QzthQUM1QyxJQUFJLElBQUksQ0FBQyxTQUFTLEtBQUssSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUztZQUFFLFdBQVcsRUFBRSxDQUFDO2FBQ3ZFLElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTO1lBQzFELE9BQU8sV0FBVyxFQUFFLENBQUM7UUFDdkIsMEdBQTBHO2FBQ3JHLElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTO1lBQzFELE9BQU8sZUFBZSxFQUFFLENBQUMsQ0FBQyxpREFBaUQ7YUFDeEUsQ0FBQztZQUNKLElBQUks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S0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDN0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQztZQUFFLE9BQU87UUFDdEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDO1lBQUUsT0FBTztRQUNoRCxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDO1lBQUUsT0FBTztRQUNwRSxJQUFJLFNBQVMsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUNoRSxTQUFTLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNwSyxJQUFJLFNBQVMsQ0FBQyxNQUFNLElBQUksQ0FBQztZQUFFLE9BQU87UUFDbEMsSUFBSSxNQUFNLEdBQ1IsU0FBUzthQUNOLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFB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