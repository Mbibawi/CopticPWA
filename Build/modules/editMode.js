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
        args.languages = getLanguages(args.arrayName) || allLanguages.map(lang => lang[0]);
    function addNewTable() {
        args.arrayName = "PrayersArray"; //!CAUTION: if we do not set the arrayName to an existing array, it will yeild to an error when the array name will be evaluated by eval(arrayName), and the saveModifiedArray() will stop without exporting the text to file
        args.languages =
            prompt("Provide the sequence of the languages columns", "COP, FR, CA, AR").split(", ") || getLanguages(args.arrayName);
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
 * Takes a string[][][] (i.e., and array of tables, each being a string[][], where each string[] represents a rowh),  that we want to edit,and creates html div elements representing the text of each row of eah table in the tablesArray
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
                tblRow: row,
                titleBase: titleBase,
                languagesArray: args.languages || getLanguages(arrayName),
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
    createEditingButton(() => exportSequence(), "Export Sequence", btnsDiv);
    createEditingButton(() => addNewRow(document.getSelection().focusNode.parentElement), "Add Row", btnsDiv);
    createEditingButton(() => addNewCell(document.getSelection().focusNode.parentElement), "Add Cell", btnsDiv);
    createEditingButton(() => addNewRow(document.getSelection().focusNode.parentElement, true), "Add PlaceHolder", btnsDiv);
    createEditingButton(() => addNewColumn(document.getSelection().focusNode.parentElement), "Add Column", btnsDiv);
    createEditingButton(() => deleteRow(document.getSelection().focusNode.parentElement), "Delete Row", btnsDiv);
    createEditingButton(() => deleteCell(document.getSelection().focusNode.parentElement), "Delete Cell", btnsDiv);
    createEditingButton(() => splitParagraphsToTheRowsBelow(document.getSelection().focusNode.parentElement), "Split Below", btnsDiv);
    createEditingButton(() => convertCopticFontFromAPI(document.getSelection().focusNode.parentElement), "Convert Coptic Fonts", btnsDiv);
    createEditingButton(() => goToTableByTitle(), "Go to Table", btnsDiv);
    createEditingButton(() => editNextOrPreviousTable(document.getSelection().focusNode.parentElement, true), "Next  Table", btnsDiv);
    createEditingButton(() => editNextOrPreviousTable(document.getSelection().focusNode.parentElement, false), "Previous Table", btnsDiv);
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
 * @param {[string, string]} arrayText - the first element is the modified text of the array that we will export to a Js file. The second element is the name of the array
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
            }); //Since we are not providing the htmlRows argument, the function will retrieve all the containerDiv children having 'Row' or 'PlaceHolder' class and will filter them by the data-root of the placeHolder div
            args.htmlRows
                .filter((div) => !div.dataset.isPlaceHolder &&
                div.dataset.root &&
                div.dataset.root === htmlRow.dataset.isPlaceHolder)
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
    //We finally save or export each array in the savedArrays
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
 * @param {string} arrayName - Name of the modified array that we want to save to local storage or export to a JS file
 * @param {boolean} exportToStorage - if true the array is saved in localStorage.editedText. Its default value is true
 * @param {boolean} exportToFile - if true the array text is export as a JS file. Its default value is true
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
            text = text.replaceAll('"' + eval(prefix) + '"', prefix);
        else
            text = text.replaceAll('"' + eval(prefix), (prefix += '+"'));
    });
    if (arrayName !== "PrayersArray")
        return text;
    //Seasonal
    text = text
        .replaceAll(giaki.AR, '"+giaki.AR+"')
        .replaceAll(giaki.FR, '"+giaki.FR+"')
        .replaceAll(giaki.COP, '"+giaki.COP+"')
        .replaceAll(giaki.CA, '"+giaki.CA+"');
    return text;
}
function replaceHtmlQuotes(innerHtml, lang) {
    if (!innerHtml.includes("<q>"))
        return innerHtml;
    if (lang === "FR")
        return innerHtml
            .replaceAll("<q>", String.fromCharCode(171))
            .replaceAll("</q>", String.fromCharCode(187));
    else if (lang === "AR" || lang === "EN")
        return innerHtml.replaceAll("<q>", '"').replaceAll("</q>", '"');
    return innerHtml;
}
/**
 * Adds a new div (row) below the div (row) passed to it as argument.
 * @param {HTMLElement} htmlParag - the html paragraph in which the cursor is placed when the function is called
 * @param {boolean} isPlaceHolder - If true, the row that will be added will be a 'PlaceHolder' row. Its default value is false
 * @param {string} title - The title of the row that will be added. If omitted, the function will prompt for providing the title
 * @param {boolean} below - If true, the new row will be added below. Else it will inserted before the currently selected div. Its default value is true
 */
function addNewRow(htmlParag, isPlaceHolder = false, title, below = true) {
    let htmlRow = getHtmlRow(htmlParag);
    if (!htmlRow)
        return;
    let newRow = document.createElement("div"), p, rowClass = 'Row', gridColumns = htmlRow.style.gridTemplateColumns, gridAreas = htmlRow.style.gridTemplateAreas;
    if (isPlaceHolder) {
        rowClass = 'PlaceHolder';
        gridColumns = '1';
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
    newRow.classList.add(rowClass);
    newRow.dataset.isNewRow = "isNewRow";
    newRow.style.display = htmlRow.style.display;
    newRow.style.gridTemplateColumns = gridColumns;
    newRow.style.gridTemplateAreas = gridAreas;
    if (!title)
        title = prompt("Provide the Title of the new Row", htmlRow.title);
    if (!title)
        return alert('You must provide a valide name for the table that will be put as PlaceHolder');
    if (isPlaceHolder)
        newRow.dataset.isPlaceHolder = title;
    if (!newRow.dataset.root) //If not already set because it is a new PlaceHolder row
        newRow.dataset.root = splitTitle(title)[0];
    if (!newRow.title) //If not already set because it is a new PlaceHolder row
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
        if (isPlaceHolder && newRow.children.length > 0)
            return;
        if (!child.lang || child.tagName !== "P")
            return;
        p = newRow.appendChild(document.createElement("p"));
        if (isPlaceHolder)
            p.innerText = splitTitle(title)[0];
        p.title = newRow.title;
        p.dataset.root = newRow.dataset.root;
        isPlaceHolder ? p.lang = 'FR' : p.lang = child.lang;
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
        addNewRow(p, false, undefined, true);
    }
    ;
    if (e.key === 'B') {
        e.preventDefault;
        addNewRow(p, false, undefined, false);
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
        convertCopticFontFromAPI(p);
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
        FixCopticText(p);
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
        args.languagesArray = getLanguages('PrayersArrayFR');
    let htmlRow, p, lang, text, actorClass, dataRoot, isPlaceHolder;
    args.tblRow[0].startsWith(Prefix.placeHolder)
        ? (isPlaceHolder = true)
        : (isPlaceHolder = false);
    actorClass = splitTitle(args.tblRow[0])[1] || "";
    htmlRow = document.createElement("div");
    if (args.arrayName)
        htmlRow.dataset.arrayName = args.arrayName;
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
        args.tblRow = [...args.tblRow]; //We create a copy of the row
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
        text = args.tblRow[x];
        if (lang)
            p.classList.add(lang.toUpperCase());
        p.lang = lang; //we are adding this in order to be able to retrieve all the paragraphs in a given language by its data attribute. We need to do this in order for example to amplify the font of a given language when the user double clicks
        p.innerText = text;
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
            table.push(addNewRow(table[table.length - 1].querySelector('p[lang="' + lang + '"]'), false, title) || undefined);
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
 * Returns an array of languages based on the name of the array passed to it (if it is a reading, it returns the languages for the readings, if it is the PrayersArray, it returns the prayersLanguages)
 * @param {string} arrayName - the name of a string[][][], for which we will return the languages corresponding to it
 * @returns {string[]} - an array of languages
 */
function getLanguages(arrayName) {
    let languages = prayersLanguages;
    if (!arrayName)
        return languages;
    if (arrayName.startsWith("ReadingsArrays."))
        languages = readingsLanguages;
    if (arrayName.startsWith("ReadingsArrays.SynaxariumArray"))
        languages = ["FR", "AR"];
    if (arrayName === "NewTable")
        languages = ["COP", "FR", "EN", "CA", "AR"];
    return languages;
}
/**
 * Converts the coptic font of the text in the selected html element, to a unicode font
 * @param {HTMLElement} htmlElement - an editable html element in which the cursor is placed, containing coptic text in a non unicode font, that we need to convert
 */
async function convertCopticFontFromAPI(htmlElement, fontFrom, promptAll = true) {
    let text, selected = getSelectedText();
    if (!fontFrom)
        fontFrom = prompt("Provide the font", "COPTIC1/CS_AVVA_SHENOUDA/AVVA_SHENOUDA/ATHANASIUS/NEW_ATHANASIUS");
    if (promptAll && confirm('Do you want to edit all the coptic paragraphs with the same font?')) {
        Array.from(containerDiv.querySelectorAll('P'))
            .filter(p => p.lang === 'COP')
            .forEach((p) => convertCopticFontFromAPI(p, fontFrom, false));
        return;
    }
    while (htmlElement.tagName !== "P" && htmlElement.parentElement)
        htmlElement = htmlElement.parentElement;
    if (!htmlElement)
        return alert('Html element not a paragraph');
    if (!['CS_AVVA_SHENOUDA'].includes(fontFrom))
        return htmlElement.innerText = await convertFont(htmlElement.innerText, fontFrom) || htmlElement.innerText;
    const apiURL = "https://www.copticchurch.net/coptic_language/fonts/convert";
    if (selected && !selected.isCollapsed)
        fetchConvertedFont(selected.toString());
    else
        fetchConvertedFont(htmlElement.textContent);
    function fetchConvertedFont(originalText) {
        sendHttpRequest({
            url: apiURL,
            method: "POST",
            contentType: "application/x-www-form-urlencoded",
            body: "from=" +
                encodeURI(fontFrom) + "&encoding=unicode&action=translate&data=" + encodeURI(originalText),
            onLoad: reqOnLoad,
            accept: "text",
            responseType: 'text'
        });
        function reqOnLoad() {
            if (this.status === 200) {
                let textArea = new DOMParser()
                    .parseFromString(this.response, "text/html")
                    .getElementsByTagName("textarea")[0];
                text = textArea.innerText;
                console.log("converted text = ", text);
                if (selected)
                    htmlElement.innerText = htmlElement.innerText.replace(originalText, text);
                else
                    htmlElement.innerText = text;
            }
            else {
                console.log("error status text = ", this.statusText);
                text = 'Failed and got error : ' + this.statusText;
                return this.statusText;
            }
        }
        return text;
    }
}
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
        languages: getLanguages(arrayName),
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
            languages: getLanguages(arrayName),
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
function convertAllCopticParagraphsFonts(fontFrom) {
    let parags = Array.from(containerDiv.querySelectorAll('P'));
    if (!fontFrom)
        fontFrom = prompt('Provide the font from which you want to convert the Coptic text');
    parags
        .filter(parag => parag.lang === 'COP')
        .forEach(parag => {
        convertCopticFontFromAPI(parag, fontFrom);
    });
}
async function FixCopticText(parag) {
    let htmlRow = getHtmlRow(parag);
    if (!htmlRow)
        return alert('We couldn\'t find the parent html row element');
    let previous, font, parags = parag.innerHTML.split('<br>');
    for (let i = 0; i < parags.length; i++) {
        previous = addNewRow(parag, false, parag.title.replace('Diacon', 'ReadingIntro'), false);
        if (!previous)
            return alert('addNewRow() didn\'t return a row');
        previous.children[0].innerText = parags[i];
        window.Selection = null;
        i === 1 ? font = 'ATHANASIUS' : font = 'CS_AVVA_SHENOUDA';
        await convertCopticFontFromAPI(previous.children[0], font, false);
    }
    //parag.innerText = ""
}
function fetchBibleVersesFromScriptureApi() {
    let appKey = "107645497acb44223b3a1ec595eee5f0", apiUR = "https://api.scripture.api.bible/v1/", method, bibles = returnBiblesList(), French = bibles.find(obj => obj.language.name === 'french').id, Arabic = bibles.find(obj => obj.language.name === 'arb').id, English = "", chapter, contentType, verses, accept;
    //fetch all books: https://api.scripture.api.bible/v1/bibles/b17e246951402e50-01/books?include-chapters=true&include-chapters-and-sections=true;
    //Call specific book: https://api.scripture.api.bible/v1/bibles/b17e246951402e50-01/books/GEN?include-chapters=true
    //fetch all chapters of a book :https://api.scripture.api.bible/v1/bibles/b17e246951402e50-01/books/GEN/chapters
    //fetch specific chapter of a book:https://api.scripture.api.bible/v1/bibles/b17e246951402e50-01/chapters/GEN.1?content-type=text&include-notes=false&include-titles=true&include-chapter-numbers=false&include-verse-numbers=true&include-verse-spans=false
    //fetch specific verse of a given chapter of a given book: https://api.scripture.api.bible/v1/bibles/b17e246951402e50-01/verses/GEN.1.3?content-type=text&include-notes=false&include-titles=false&include-chapter-numbers=false&include-verse-numbers=true&include-verse-spans=false&use-org-id=false
    let test = "https://api.scripture.api.bible/v1/bibles?include-full-details=true";
    function returnBiblesList() {
        let bibles = {
            "data": [
                {
                    "id": "472735b48a27b402-01",
                    "dblId": "472735b48a27b402",
                    "relatedDbl": null,
                    "name": "The New Testament in Ahirani language",
                    "nameLocal": "प्रेम संदेश",
                    "abbreviation": "NTAii20",
                    "abbreviationLocal": "NTAii20",
                    "description": "The New Testament in Ahirani language, 2020",
                    "descriptionLocal": "प्रेम संदेश, नवा करार, 2020",
                    "language": {
                        "id": "ahr",
                        "name": "Ahirani",
                        "nameLocal": "Ahirani",
                        "script": "Devanagari",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "IN",
                            "name": "India",
                            "nameLocal": "India"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-01-07T17:50:52.000Z",
                    "audioBibles": []
                },
                {
                    "id": "0c2ff0a5c8b9069c-01",
                    "dblId": "0c2ff0a5c8b9069c",
                    "relatedDbl": null,
                    "name": "Nend Portions - Mark",
                    "nameLocal": "MAK Yakŋ Ohɨrand Ya Imbɨr Makɨv Mpamar",
                    "abbreviation": "NendNP03",
                    "abbreviationLocal": "NendNP03",
                    "description": null,
                    "descriptionLocal": "Mark in Nend",
                    "language": {
                        "id": "anh",
                        "name": "Nend",
                        "nameLocal": "Nend",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "PG",
                            "name": "Papua New Guinea",
                            "nameLocal": "Papua New Guinea"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-01-07T05:09:04.000Z",
                    "audioBibles": []
                },
                {
                    "id": "b17e246951402e50-01",
                    "dblId": "b17e246951402e50",
                    "relatedDbl": null,
                    "name": "Biblica® Open New Arabic Version 2012",
                    "nameLocal": "كتاب الحياة مجانى",
                    "abbreviation": "ONAV",
                    "abbreviationLocal": "KEHM",
                    "description": "Holy Bible",
                    "descriptionLocal": "ا‫لكتاب المقدس",
                    "language": {
                        "id": "arb",
                        "name": "Arabic, Standard",
                        "nameLocal": "العربية",
                        "script": "Arabic",
                        "scriptDirection": "RTL"
                    },
                    "countries": [
                        {
                            "id": "EG",
                            "name": "Egypt",
                            "nameLocal": "Egypt"
                        },
                        {
                            "id": "SA",
                            "name": "Saudi Arabia",
                            "nameLocal": "Saudi Arabia"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2024-01-12T09:21:54.000Z",
                    "audioBibles": [
                        {
                            "id": "26b7a1cd2f8f4878-01",
                            "name": "Biblica® Open New Arabic Version 2012, Audio Edition",
                            "nameLocal": "Ketab El Hayat Majani/كتاب الحياة مجانى",
                            "dblId": "26b7a1cd2f8f4878"
                        }
                    ]
                },
                {
                    "id": "b7ad344da9c39262-01",
                    "dblId": "b7ad344da9c39262",
                    "relatedDbl": null,
                    "name": "Arapaho Luke",
                    "nameLocal": "Hethadenee waunauyaunee vadan Luke Vanenāna",
                    "abbreviation": "arp",
                    "abbreviationLocal": "ARP",
                    "description": "common",
                    "descriptionLocal": "common",
                    "language": {
                        "id": "arp",
                        "name": "Arapaho",
                        "nameLocal": "Arapaho",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "US",
                            "name": "United States of America",
                            "nameLocal": "United States of America"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-09-21T23:20:25.000Z",
                    "audioBibles": []
                },
                {
                    "id": "d199679f805f5b29-01",
                    "dblId": "d199679f805f5b29",
                    "relatedDbl": null,
                    "name": "Indian Revised Version (IRV) Assamese - 2019",
                    "nameLocal": "ইণ্ডিয়ান ৰিভাইচ ভাৰচন (IRV) আচামিচ - 2019",
                    "abbreviation": "IRVAsm",
                    "abbreviationLocal": "IRVAsm",
                    "description": "Indian Revised Version Holy Bible in the Assameese language of India",
                    "descriptionLocal": "Indian Revised Version Holy Bible in the Assameese language of India",
                    "language": {
                        "id": "asm",
                        "name": "Assamese",
                        "nameLocal": "অসমীয়া",
                        "script": "Bengali",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "IN",
                            "name": "India",
                            "nameLocal": "India"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-05-03T22:06:10.000Z",
                    "audioBibles": [
                        {
                            "id": "b3e56f2d3a124ab3-01",
                            "name": "Assamese Indian Revised Version (IRV)",
                            "nameLocal": "Assamese Indian Revised Version (IRV)",
                            "dblId": "b3e56f2d3a124ab3"
                        }
                    ]
                },
                {
                    "id": "7b1975ae4d11d931-01",
                    "dblId": "7b1975ae4d11d931",
                    "relatedDbl": null,
                    "name": "The New Testament in Bodo Parja Language",
                    "nameLocal": "ସଃର୍ଗାର୍‌ ବାଟ୍‌ ନଃଉଁଆ ନିଅମ୍‌",
                    "abbreviation": "NTBPL20",
                    "abbreviationLocal": "NTBPL20",
                    "description": "The New Testament in Bodo Parja Language 2020",
                    "descriptionLocal": "ସଃର୍ଗାର୍‌ ବାଟ୍‌ ନଃଉଁଆ ନିଅମ୍‌ 2020",
                    "language": {
                        "id": "bdv",
                        "name": "Bodo Parja",
                        "nameLocal": "Bodo Parja",
                        "script": "Oriya",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "IN",
                            "name": "India",
                            "nameLocal": "India"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-01-07T09:46:01.000Z",
                    "audioBibles": []
                },
                {
                    "id": "17c44f6c89de00db-01",
                    "dblId": "17c44f6c89de00db",
                    "relatedDbl": null,
                    "name": "Belarusian New Testament and Books of Old Testament",
                    "nameLocal": "Новы Запавет і Кнігі Старога Запавету",
                    "abbreviation": "NTPrv",
                    "abbreviationLocal": "НЗПрп",
                    "description": "Belarusian New Testament and Books of Old Testament",
                    "descriptionLocal": "Новы Запавет і Кнігі Старога Запавету",
                    "language": {
                        "id": "bel",
                        "name": "Belarusan",
                        "nameLocal": "беларуская",
                        "script": "Cyrillic",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "BY",
                            "name": "Belarus",
                            "nameLocal": "Belarus"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-12-31T09:09:07.000Z",
                    "audioBibles": []
                },
                {
                    "id": "17c44f6c89de00db-02",
                    "dblId": "17c44f6c89de00db",
                    "relatedDbl": null,
                    "name": "Bible (A.Bokun translation)",
                    "nameLocal": "Біблія (пераклад А.Бокуна)",
                    "abbreviation": "BBB",
                    "abbreviationLocal": "БББ",
                    "description": "Bible (A.Bokun translation)",
                    "descriptionLocal": "Біблія (пераклад А.Бокуна)",
                    "language": {
                        "id": "bel",
                        "name": "Belarusan",
                        "nameLocal": "беларуская",
                        "script": "Cyrillic",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "BY",
                            "name": "Belarus",
                            "nameLocal": "Belarus"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2024-04-13T09:13:45.000Z",
                    "audioBibles": []
                },
                {
                    "id": "b52bc8b7af3bdc6f-03",
                    "dblId": "b52bc8b7af3bdc6f",
                    "relatedDbl": null,
                    "name": "Bible (V. Semukha translation)",
                    "nameLocal": "Біблія (пераклад В. Сёмухі)",
                    "abbreviation": "BBL",
                    "abbreviationLocal": "ББЛ",
                    "description": "Synodal",
                    "descriptionLocal": "Сінадальны",
                    "language": {
                        "id": "bel",
                        "name": "Belarusian",
                        "nameLocal": "беларуская",
                        "script": "Cyrillic",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "BY",
                            "name": "Belarus",
                            "nameLocal": "Belarus"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-01-07T12:46:46.000Z",
                    "audioBibles": []
                },
                {
                    "id": "efd8a351a07d4264-01",
                    "dblId": "efd8a351a07d4264",
                    "relatedDbl": null,
                    "name": "Biblica® Open Bengali Contemporary Version 2019",
                    "nameLocal": "Biblica® মুক্তভাবে বাংলা সমকালীন সংস্করণের",
                    "abbreviation": "BCV",
                    "abbreviationLocal": "BCV",
                    "description": "Holy Bible",
                    "descriptionLocal": "পবিত্র বাইবেল",
                    "language": {
                        "id": "ben",
                        "name": "Bengali",
                        "nameLocal": "বাংলা",
                        "script": "Bengali",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "IN",
                            "name": "India",
                            "nameLocal": "India"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-09-22T00:26:18.000Z",
                    "audioBibles": [
                        {
                            "id": "2d681a4ce8b8479f-01",
                            "name": "Biblica® Open Bengali Contemporary Version, Audio Edition",
                            "nameLocal": "Biblica® Open Bengali Contemporary Version™, Audio Edition",
                            "dblId": "2d681a4ce8b8479f"
                        }
                    ]
                },
                {
                    "id": "4c3eda00cd317568-01",
                    "dblId": "4c3eda00cd317568",
                    "relatedDbl": null,
                    "name": "Indian Revised Version (IRV) Bengali",
                    "nameLocal": "ইন্ডিয়ান রিভাইজড ভার্সন (IRV) - বেঙ্গলী",
                    "abbreviation": "IRVBen",
                    "abbreviationLocal": "IRVBen",
                    "description": "Protestant",
                    "descriptionLocal": "Protestant",
                    "language": {
                        "id": "ben",
                        "name": "Bengali",
                        "nameLocal": "বাংলা",
                        "script": "Bengali",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "IN",
                            "name": "India",
                            "nameLocal": "India"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-09-21T20:24:25.000Z",
                    "audioBibles": [
                        {
                            "id": "7fb0e05721aa424f-01",
                            "name": "Bengali Indian Revised Version (IRV)",
                            "nameLocal": "Bengali Indian Revised Version (IRV)",
                            "dblId": "7fb0e05721aa424f"
                        }
                    ]
                },
                {
                    "id": "55bab459b716348c-01",
                    "dblId": "55bab459b716348c",
                    "relatedDbl": null,
                    "name": "Bedamuni Bible",
                    "nameLocal": "GODE EA SIA: IDA:IWANE GALA",
                    "abbreviation": "beo",
                    "abbreviationLocal": "BEO",
                    "description": "common",
                    "descriptionLocal": "common",
                    "language": {
                        "id": "beo",
                        "name": "Beami",
                        "nameLocal": "Beami",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "PG",
                            "name": "Papua New Guinea",
                            "nameLocal": "Papua New Guinea"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-01-07T08:03:38.000Z",
                    "audioBibles": []
                },
                {
                    "id": "e051b4f945d52400-02",
                    "dblId": "e051b4f945d52400",
                    "relatedDbl": null,
                    "name": "Baghlayani",
                    "nameLocal": "बग़ल्याणी",
                    "abbreviation": "BGHNT",
                    "abbreviationLocal": "BGHNT",
                    "description": "New Testament in Baghlayani",
                    "descriptionLocal": "बघल्याणी पाषा दे नवां विधान",
                    "language": {
                        "id": "bfz",
                        "name": "Pahari, Mahasu",
                        "nameLocal": "Pahari, Mahasu",
                        "script": "Devanagari",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "IN",
                            "name": "India",
                            "nameLocal": "India"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-01-07T15:12:42.000Z",
                    "audioBibles": [
                        {
                            "id": "ee71326e788e47d7-01",
                            "name": "Baghlayani New Testament",
                            "nameLocal": "Baghlayani New Testament",
                            "dblId": "ee71326e788e47d7"
                        }
                    ]
                },
                {
                    "id": "2ef130d3485d3fe4-01",
                    "dblId": "2ef130d3485d3fe4",
                    "relatedDbl": null,
                    "name": "Haryanvi",
                    "nameLocal": "हरियाणवी",
                    "abbreviation": "BGCNT",
                    "abbreviationLocal": "BGCNT",
                    "description": "Bible in Haryanvi Language",
                    "descriptionLocal": "हरियाणवी बाइबिल",
                    "language": {
                        "id": "bgc",
                        "name": "Haryanvi",
                        "nameLocal": "Haryanvi",
                        "script": "Devanagari",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "IN",
                            "name": "India",
                            "nameLocal": "India"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-01-07T06:35:35.000Z",
                    "audioBibles": [
                        {
                            "id": "a870900c030548a0-01",
                            "name": "Haryanvi New Testament",
                            "nameLocal": "Haryanvi New Testament",
                            "dblId": "a870900c030548a0"
                        }
                    ]
                },
                {
                    "id": "5a19af0cfc57ff3a-01",
                    "dblId": "5a19af0cfc57ff3a",
                    "relatedDbl": null,
                    "name": "Bugun New Testament",
                    "nameLocal": "Iwo Surua Mua Wie Pha Bible",
                    "abbreviation": "BUG",
                    "abbreviationLocal": "BUG",
                    "description": "Bugun New Testament",
                    "descriptionLocal": "Iwo Surua Mua Wie Pha Bible",
                    "language": {
                        "id": "bgg",
                        "name": "Bugun",
                        "nameLocal": "Bugun",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "IN",
                            "name": "India",
                            "nameLocal": "India"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2023-04-05T09:16:29.000Z",
                    "audioBibles": []
                },
                {
                    "id": "c2d042a913068a25-01",
                    "dblId": "c2d042a913068a25",
                    "relatedDbl": null,
                    "name": "Bhadrawahi New Testament",
                    "nameLocal": "भड्लाई नंव्वों नियम",
                    "abbreviation": "BHD-NT",
                    "abbreviationLocal": "BHD-NT",
                    "description": "New Testament in Bhadrawahi",
                    "descriptionLocal": "भड्लाई भाषाई मां नंव्वों नियम",
                    "language": {
                        "id": "bhd",
                        "name": "Bhadrawahi",
                        "nameLocal": "Bhadrawahi",
                        "script": "Devanagari",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "IN",
                            "name": "India",
                            "nameLocal": "India"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-01-26T21:15:06.000Z",
                    "audioBibles": [
                        {
                            "id": "fa9a334bd9054e2f-01",
                            "name": "Bhadrawahi New Testament",
                            "nameLocal": "Bhadrawahi New Testament",
                            "dblId": "fa9a334bd9054e2f"
                        }
                    ]
                },
                {
                    "id": "63d47dec7790e1cf-01",
                    "dblId": "63d47dec7790e1cf",
                    "relatedDbl": null,
                    "name": "Bhattiyali NT",
                    "nameLocal": "भटियाली नोआ नियम",
                    "abbreviation": "BHTNT",
                    "abbreviationLocal": "BHTNT",
                    "description": "Bhattiyali New Testament",
                    "descriptionLocal": "भटियाली नोआ नियम",
                    "language": {
                        "id": "bht",
                        "name": "Bhattiyali",
                        "nameLocal": "Bhattiyali",
                        "script": "Devanagari",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "IN",
                            "name": "India",
                            "nameLocal": "India"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-03-22T14:17:51.000Z",
                    "audioBibles": [
                        {
                            "id": "df60a5e21c5c434e-01",
                            "name": "Bhattiyali New Testament",
                            "nameLocal": "Bhattiyali New Testament",
                            "dblId": "df60a5e21c5c434e"
                        }
                    ]
                },
                {
                    "id": "34d2d843a792981b-01",
                    "dblId": "34d2d843a792981b",
                    "relatedDbl": null,
                    "name": "Bhumiya New Testament",
                    "nameLocal": "भगवान कर सच्चा बचन,",
                    "abbreviation": "NTBTP23",
                    "abbreviationLocal": "NTBTP23",
                    "description": "The New Testament in Bhumiya Language",
                    "descriptionLocal": "भगवान कर सच्चा बचन, नबा नियम, 2023",
                    "language": {
                        "id": "bhu",
                        "name": "Bhunjia",
                        "nameLocal": "Bhunjia",
                        "script": "Devanagari",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "IN",
                            "name": "India",
                            "nameLocal": "India"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2023-08-28T09:14:46.000Z",
                    "audioBibles": []
                },
                {
                    "id": "6855dabfcb711cc2-01",
                    "dblId": "6855dabfcb711cc2",
                    "relatedDbl": null,
                    "name": "Blackfoot Matthew",
                    "nameLocal": "ŎKHS' I TSĬN IK SĬN NI ST. MATTHEW OT SĬN AI PI.",
                    "abbreviation": "bla1890",
                    "abbreviationLocal": "bla1890",
                    "description": "common",
                    "descriptionLocal": "common",
                    "language": {
                        "id": "bla",
                        "name": "Siksika",
                        "nameLocal": "Siksika",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "CA",
                            "name": "Canada",
                            "nameLocal": "Canada"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-01-07T08:46:39.000Z",
                    "audioBibles": []
                },
                {
                    "id": "8b4c1b146ad6508a-01",
                    "dblId": "8b4c1b146ad6508a",
                    "relatedDbl": null,
                    "name": "The New Testament in Paliya Language",
                    "nameLocal": "भगवान ना खरला बोल, नवलो नेम",
                    "abbreviation": "NTPPt2020",
                    "abbreviationLocal": "NTPPt2020",
                    "description": "The New Testament in Paliya Language,2020",
                    "descriptionLocal": "भगवान ना खरला बोल, नवलो नेम,2020",
                    "language": {
                        "id": "bpx",
                        "name": "Bareli, Palya",
                        "nameLocal": "Bareli, Palya",
                        "script": "Devanagari",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "IN",
                            "name": "India",
                            "nameLocal": "India"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-01-07T10:24:10.000Z",
                    "audioBibles": []
                },
                {
                    "id": "71d2075d284c4eae-01",
                    "dblId": "71d2075d284c4eae",
                    "relatedDbl": null,
                    "name": "God's Holy Book",
                    "nameLocal": "Kitabu ka Kanu",
                    "abbreviation": "Baga",
                    "abbreviationLocal": "KKK",
                    "description": "The Law books, the Gospel and the Letters of the Apostles in Baga",
                    "descriptionLocal": "Tawureta, Yabura, Iŋyila, kɔ reka ya asɔm a Yesu",
                    "language": {
                        "id": "bsp",
                        "name": "Baga Sitemu",
                        "nameLocal": "Baga Sitemu",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "GN",
                            "name": "Guinea",
                            "nameLocal": "Guinea"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2023-06-27T21:17:51.000Z",
                    "audioBibles": []
                },
                {
                    "id": "44e37abe1fa39aab-01",
                    "dblId": "44e37abe1fa39aab",
                    "relatedDbl": null,
                    "name": "The New Testament in Borna/Shinasha Language",
                    "nameLocal": "Handr Taara",
                    "abbreviation": "BrnNTLtn",
                    "abbreviationLocal": "BrnNTLtn",
                    "description": "The New Testament in Borna/Shinasha Language",
                    "descriptionLocal": "ቦርና/ሺናሻ አዲስ ኪዳን 2018",
                    "language": {
                        "id": "bwo",
                        "name": "Borna",
                        "nameLocal": "Borna",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "ET",
                            "name": "Ethiopia",
                            "nameLocal": "Ethiopia"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-03-22T14:50:40.000Z",
                    "audioBibles": []
                },
                {
                    "id": "c0209b58481727a2-01",
                    "dblId": "c0209b58481727a2",
                    "relatedDbl": null,
                    "name": "Biblica® Open Czech Living New Testament",
                    "nameLocal": "Biblica® Open Slovo na cestu",
                    "abbreviation": "OSNC",
                    "abbreviationLocal": "OSNC",
                    "description": "New Testament",
                    "descriptionLocal": "Nového zákona",
                    "language": {
                        "id": "ces",
                        "name": "Czech",
                        "nameLocal": "Čeština",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "CZ",
                            "name": "Czechia",
                            "nameLocal": "Czechia"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-09-21T23:30:08.000Z",
                    "audioBibles": []
                },
                {
                    "id": "c61908161b077c4c-01",
                    "dblId": "c61908161b077c4c",
                    "relatedDbl": null,
                    "name": "Czech Kralická Bible 1613",
                    "nameLocal": "Bible Kralická 1613",
                    "abbreviation": "ces1613",
                    "abbreviationLocal": "BKR",
                    "description": "common",
                    "descriptionLocal": "společný",
                    "language": {
                        "id": "ces",
                        "name": "Czech",
                        "nameLocal": "Čeština",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "CZ",
                            "name": "Czech Republic",
                            "nameLocal": "Czech Republic"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-01-07T13:38:22.000Z",
                    "audioBibles": []
                },
                {
                    "id": "9ab28a81b9c4587d-01",
                    "dblId": "9ab28a81b9c4587d",
                    "relatedDbl": null,
                    "name": "Biblica® Open Kurdi Sorani Standard Version 2020",
                    "nameLocal": "ببلیکا – وەشانی بێبەرامبەری کوردیی سۆرانیی ستاندەر",
                    "abbreviation": "OKSS",
                    "abbreviationLocal": "OKSS",
                    "description": "Protestant Bible",
                    "descriptionLocal": "كتێبی پیرۆز",
                    "language": {
                        "id": "ckb",
                        "name": "Kurdish, Central",
                        "nameLocal": "كوردی سۆرانی",
                        "script": "Arabic",
                        "scriptDirection": "RTL"
                    },
                    "countries": [
                        {
                            "id": "IQ",
                            "name": "Iraq",
                            "nameLocal": "Iraq"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-12-02T00:35:45.000Z",
                    "audioBibles": [
                        {
                            "id": "4bd4740816ed4a97-01",
                            "name": "Kurdi Sorani Standard 2020, Audio Edition",
                            "nameLocal": "مافی بڵاوکردنەوەی دەنگدار لە لایەن ڕێکخراوی ببلیکا و داڤار پارتنەرسی نێودەوڵەتییەوە پارێزراوە، ٢٠٢٠‎",
                            "dblId": "4bd4740816ed4a97"
                        },
                        {
                            "id": "4bd4740816ed4a97-02",
                            "name": "Biblica® Open Kurdi Sorani Standard Version™ , Audio Version",
                            "nameLocal": "مافی بڵاوکردنەوەی دەنگدار لە لایەن ڕێکخراوی ببلیکا و داڤار پارتنەرسی نێودەوڵەتییەوە پارێزراوە، ٢٠٢٠‎",
                            "dblId": "4bd4740816ed4a97"
                        }
                    ]
                },
                {
                    "id": "7ea794434e9ea7ee-01",
                    "dblId": "7ea794434e9ea7ee",
                    "relatedDbl": null,
                    "name": "Biblica® Open Chinese Contemporary Bible Simplified 2022",
                    "nameLocal": "当代译本",
                    "abbreviation": "OCCB",
                    "abbreviationLocal": "OCCB",
                    "description": "Bible",
                    "descriptionLocal": "圣经",
                    "language": {
                        "id": "cmn",
                        "name": "Chinese, Mandarin",
                        "nameLocal": "中文",
                        "script": "Han (Simplified variant)",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "CN",
                            "name": "China",
                            "nameLocal": "China"
                        },
                        {
                            "id": "MY",
                            "name": "Malaysia",
                            "nameLocal": "Malaysia"
                        },
                        {
                            "id": "SG",
                            "name": "Singapore",
                            "nameLocal": "Singapore"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2023-10-29T21:17:55.000Z",
                    "audioBibles": []
                },
                {
                    "id": "a6e06d2c5b90ad89-01",
                    "dblId": "a6e06d2c5b90ad89",
                    "relatedDbl": null,
                    "name": "Biblica® Open Chinese Contemporary Bible Traditional 2023",
                    "nameLocal": "當代譯本",
                    "abbreviation": "OCCBT",
                    "abbreviationLocal": "OCCB",
                    "description": "Bible",
                    "descriptionLocal": "聖經",
                    "language": {
                        "id": "cmn",
                        "name": "Chinese, Mandarin",
                        "nameLocal": "中文",
                        "script": "Han (Traditional variant)",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "HK",
                            "name": "Hong Kong",
                            "nameLocal": "Hong Kong"
                        },
                        {
                            "id": "TW",
                            "name": "Taiwan",
                            "nameLocal": "Taiwan"
                        },
                        {
                            "id": "MO",
                            "name": "Macao",
                            "nameLocal": "Macao"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2023-11-02T21:24:00.000Z",
                    "audioBibles": []
                },
                {
                    "id": "04fb2bec0d582d1f-01",
                    "dblId": "04fb2bec0d582d1f",
                    "relatedDbl": null,
                    "name": "免费的易读圣经 Free Easy-to-read Bible",
                    "nameLocal": "免费的易读圣经 Free Easy-to-read Bible",
                    "abbreviation": "FEB",
                    "abbreviationLocal": "FEB",
                    "description": null,
                    "descriptionLocal": null,
                    "language": {
                        "id": "cmn",
                        "name": "Chinese, Mandarin",
                        "nameLocal": "中文",
                        "script": "Han (Simplified variant)",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "CN",
                            "name": "China",
                            "nameLocal": "China"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-09-21T18:52:00.000Z",
                    "audioBibles": []
                },
                {
                    "id": "dca01eb41e39d25d-02",
                    "dblId": "dca01eb41e39d25d",
                    "relatedDbl": null,
                    "name": "Kwere Bible",
                    "nameLocal": "Biblia Ching'hwele",
                    "abbreviation": "Kwere",
                    "abbreviationLocal": "Ching'hwele",
                    "description": "NT & Pentateuch",
                    "descriptionLocal": "NT & Pentateuch",
                    "language": {
                        "id": "cwe",
                        "name": "Kwere",
                        "nameLocal": "Ching'hwele",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "TZ",
                            "name": "Tanzania, United Republic of",
                            "nameLocal": "Tanzania, United Republic of"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2024-04-13T09:28:29.000Z",
                    "audioBibles": []
                },
                {
                    "id": "33e024fcc7010565-01",
                    "dblId": "33e024fcc7010565",
                    "relatedDbl": null,
                    "name": "The New Testament in Kwere",
                    "nameLocal": "Lagano da Sambi kwa Wanhu Wose",
                    "abbreviation": "Kwere",
                    "abbreviationLocal": "Kwere",
                    "description": "New Testament",
                    "descriptionLocal": "New Testament",
                    "language": {
                        "id": "cwe",
                        "name": "Kwere",
                        "nameLocal": "Ching'hwele",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "TZ",
                            "name": "Tanzania, United Republic of",
                            "nameLocal": "Tanzania, United Republic of"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2023-11-22T21:15:05.000Z",
                    "audioBibles": []
                },
                {
                    "id": "dca01eb41e39d25d-01",
                    "dblId": "dca01eb41e39d25d",
                    "relatedDbl": null,
                    "name": "The New Testament in Kwere",
                    "nameLocal": "Lagano da Sambi kwa Wanhu Wose",
                    "abbreviation": "Kwere",
                    "abbreviationLocal": "Kwere",
                    "description": "New Testament",
                    "descriptionLocal": "Kwere",
                    "language": {
                        "id": "cwe",
                        "name": "Kwere",
                        "nameLocal": "Kwere",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "TZ",
                            "name": "Tanzania, United Republic of",
                            "nameLocal": "Tanzania, United Republic of"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2023-11-23T09:32:45.000Z",
                    "audioBibles": []
                },
                {
                    "id": "b84c4908b73961ba-01",
                    "dblId": "b84c4908b73961ba",
                    "relatedDbl": null,
                    "name": "New Testament in Dai",
                    "nameLocal": "Dai Cangcim Kthai",
                    "abbreviation": "DNT",
                    "abbreviationLocal": "DNT",
                    "description": "New Testament in Dai",
                    "descriptionLocal": "Dai Cangcim Kthai",
                    "language": {
                        "id": "dao",
                        "name": "Chin, Daai",
                        "nameLocal": "Chin, Daai",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "MM",
                            "name": "Myanmar",
                            "nameLocal": "Myanmar"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-03-22T21:14:53.000Z",
                    "audioBibles": []
                },
                {
                    "id": "f492a38d0e52db0f-01",
                    "dblId": "f492a38d0e52db0f",
                    "relatedDbl": null,
                    "name": "Elberfelder Translation (Version of bibelkommentare.de)",
                    "nameLocal": "Elberfelder Übersetzung (Version von bibelkommentare.de)",
                    "abbreviation": "ELBBK",
                    "abbreviationLocal": "ELBBK",
                    "description": "Linguistically revised text of the Unrevised Elberfelder Translation with footnotes.",
                    "descriptionLocal": "Sprachlich aufgearbeiteter Text der unrevidierten Elberfelder Übersetzung mit Fußnoten.",
                    "language": {
                        "id": "deu",
                        "name": "German, Standard",
                        "nameLocal": "Deutsch",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "DE",
                            "name": "Germany",
                            "nameLocal": "Germany"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-01-07T16:19:10.000Z",
                    "audioBibles": []
                },
                {
                    "id": "926aa5efbc5e04e2-01",
                    "dblId": "926aa5efbc5e04e2",
                    "relatedDbl": null,
                    "name": "German Luther Bible 1912 with Strong's numbers",
                    "nameLocal": "Lutherbibel 1912 mit Strongs",
                    "abbreviation": "deuL1912",
                    "abbreviationLocal": "L1912",
                    "description": "Protestant",
                    "descriptionLocal": "Evangelisch",
                    "language": {
                        "id": "deu",
                        "name": "German, Standard",
                        "nameLocal": "Deutsch",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "DE",
                            "name": "Germany",
                            "nameLocal": "Germany"
                        },
                        {
                            "id": "AT",
                            "name": "Austria",
                            "nameLocal": "Austria"
                        },
                        {
                            "id": "CH",
                            "name": "Switzerland",
                            "nameLocal": "Switzerland"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2023-08-10T09:19:05.000Z",
                    "audioBibles": []
                },
                {
                    "id": "95410db44ef800c1-01",
                    "dblId": "95410db44ef800c1",
                    "relatedDbl": null,
                    "name": "German Unrevised Elberfelder Bible",
                    "nameLocal": "Darby Unrevidierte Elberfelder",
                    "abbreviation": "deuelo",
                    "abbreviationLocal": "ELO",
                    "description": "Protestant",
                    "descriptionLocal": "evangelisch",
                    "language": {
                        "id": "deu",
                        "name": "German, Standard",
                        "nameLocal": "Deutsch",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "DE",
                            "name": "Germany",
                            "nameLocal": "Germany"
                        },
                        {
                            "id": "AT",
                            "name": "Austria",
                            "nameLocal": "Austria"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-01-07T10:53:48.000Z",
                    "audioBibles": []
                },
                {
                    "id": "542b32484b6e38c2-01",
                    "dblId": "542b32484b6e38c2",
                    "relatedDbl": null,
                    "name": "The Holy Bible in German, translation by Kautzsch und Weizsäcker 1906",
                    "nameLocal": "Textbibel von Kautzsch und Weizsäcker",
                    "abbreviation": "deutkw",
                    "abbreviationLocal": "TKW",
                    "description": "common",
                    "descriptionLocal": "verbreitet",
                    "language": {
                        "id": "deu",
                        "name": "German",
                        "nameLocal": "Deutsch",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "DE",
                            "name": "Germany",
                            "nameLocal": "Germany"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-01-07T07:57:36.000Z",
                    "audioBibles": []
                },
                {
                    "id": "f35902ba1a82ba42-01",
                    "dblId": "f35902ba1a82ba42",
                    "relatedDbl": null,
                    "name": "The New Testament in Danu",
                    "nameLocal": "The New Testament in Danu",
                    "abbreviation": "DUBT",
                    "abbreviationLocal": "DUBT",
                    "description": "The New Testament in Danu",
                    "descriptionLocal": "The New Testament in Danu",
                    "language": {
                        "id": "dnv",
                        "name": "Danu",
                        "nameLocal": "Danu",
                        "script": "Myanmar",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "MM",
                            "name": "Myanmar",
                            "nameLocal": "Myanmar"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2024-02-08T09:26:18.000Z",
                    "audioBibles": []
                },
                {
                    "id": "ef899709a85822c3-01",
                    "dblId": "ef899709a85822c3",
                    "relatedDbl": null,
                    "name": "The New Testament in Desiya Language",
                    "nameLocal": "ସତିଅର୍‌ ବାଟ୍‌, ନୁଆ ନିୟମ୍‌, 2020",
                    "abbreviation": "NTSaa20",
                    "abbreviationLocal": "NTSaa20",
                    "description": "The New Testament in Desiya Language, 2020",
                    "descriptionLocal": "ସତିଅର୍‌ ବାଟ୍‌, ନୁଆ ନିୟମ୍‌",
                    "language": {
                        "id": "dso",
                        "name": "Desiya",
                        "nameLocal": "Desiya",
                        "script": "Oriya",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "IN",
                            "name": "India",
                            "nameLocal": "India"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-01-07T16:00:14.000Z",
                    "audioBibles": []
                },
                {
                    "id": "e578524a0893c6b7-01",
                    "dblId": "e578524a0893c6b7",
                    "relatedDbl": null,
                    "name": "Dawro New Testament",
                    "nameLocal": "Dawro New Testament",
                    "abbreviation": "DWNT",
                    "abbreviationLocal": "DWNT",
                    "description": "New Testament",
                    "descriptionLocal": "New Testament",
                    "language": {
                        "id": "dwr",
                        "name": "Dawro",
                        "nameLocal": "Dawro",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "ET",
                            "name": "Ethiopia",
                            "nameLocal": "Ethiopia"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-01-07T00:51:25.000Z",
                    "audioBibles": []
                },
                {
                    "id": "c1c43b459a6be524-01",
                    "dblId": "c1c43b459a6be524",
                    "relatedDbl": null,
                    "name": "Biblica® Open Estonian Contemporary Version™",
                    "nameLocal": "Biblica® Vaba kasutusega Uus Testament, Pühakiri kaasaegses eesti keeles",
                    "abbreviation": "OECV",
                    "abbreviationLocal": "OPKEK",
                    "description": "New Testament",
                    "descriptionLocal": "Uus Testament",
                    "language": {
                        "id": "ekk",
                        "name": "Estonian, Standard",
                        "nameLocal": "Eesti",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "EE",
                            "name": "Estonia",
                            "nameLocal": "Estonia"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2023-09-29T21:27:03.000Z",
                    "audioBibles": []
                },
                {
                    "id": "e1c5cd49c0757432-01",
                    "dblId": "e1c5cd49c0757432",
                    "relatedDbl": null,
                    "name": "Piibel Kõigile",
                    "nameLocal": "Piibel Kõigile",
                    "abbreviation": "PKP",
                    "abbreviationLocal": "PKP",
                    "description": "Protestant",
                    "descriptionLocal": "Protestant",
                    "language": {
                        "id": "ekk",
                        "name": "Estonian, Standard",
                        "nameLocal": "Eesti",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "EE",
                            "name": "Estonia",
                            "nameLocal": "Estonia"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2023-04-04T21:21:10.000Z",
                    "audioBibles": []
                },
                {
                    "id": "d17f683e8977c58c-01",
                    "dblId": "d17f683e8977c58c",
                    "relatedDbl": null,
                    "name": "Genesis, Exodus, and the New Testament in the Apal Language of Papua New Guinea",
                    "nameLocal": "Asɨ dɨ manasɨŋ",
                    "abbreviation": "ApalGENT",
                    "abbreviationLocal": "ApalGENT",
                    "description": "Genesis, Exodus and the New Testament in Apal",
                    "descriptionLocal": "Genesis, Exodus and the New Testament in Apal",
                    "language": {
                        "id": "ena",
                        "name": "Apali",
                        "nameLocal": "Apalɨ",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "PG",
                            "name": "Papua New Guinea",
                            "nameLocal": "Papua New Guinea"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-07-08T14:55:42.000Z",
                    "audioBibles": [
                        {
                            "id": "e088bd4b3e014bda-01",
                            "name": "Apal New Testament, Genesis, and Exodus",
                            "nameLocal": "Asɨ dɨ manasɨŋ",
                            "dblId": "e088bd4b3e014bda"
                        }
                    ]
                },
                {
                    "id": "685d1470fe4d5c3b-01",
                    "dblId": "685d1470fe4d5c3b",
                    "relatedDbl": null,
                    "name": "American Standard Version (Byzantine Text with Apocrypha)",
                    "nameLocal": "American Standard Version Byzantine Text with Apocrypha",
                    "abbreviation": "ASVBT",
                    "abbreviationLocal": "ASVBT",
                    "description": null,
                    "descriptionLocal": null,
                    "language": {
                        "id": "eng",
                        "name": "English",
                        "nameLocal": "English",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "US",
                            "name": "United States of America",
                            "nameLocal": "United States of America"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2024-03-05T09:17:12.000Z",
                    "audioBibles": []
                },
                {
                    "id": "bba9f40183526463-01",
                    "dblId": "bba9f40183526463",
                    "relatedDbl": null,
                    "name": "Berean Standard Bible",
                    "nameLocal": "English: Berean Standard Bible",
                    "abbreviation": "BSB",
                    "abbreviationLocal": "BSB",
                    "description": "Berean Standard Bible",
                    "descriptionLocal": "English: Berean Standard Bible",
                    "language": {
                        "id": "eng",
                        "name": "English",
                        "nameLocal": "English",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "US",
                            "name": "United States of America",
                            "nameLocal": "United States of America"
                        },
                        {
                            "id": "GB",
                            "name": "United Kingdom of Great Britain and Northern Ireland",
                            "nameLocal": "United Kingdom of Great Britain and Northern Ireland"
                        },
                        {
                            "id": "AU",
                            "name": "Australia",
                            "nameLocal": "Australia"
                        },
                        {
                            "id": "CA",
                            "name": "Canada",
                            "nameLocal": "Canada"
                        },
                        {
                            "id": "AG",
                            "name": "Antigua and Barbuda",
                            "nameLocal": "Antigua and Barbuda"
                        },
                        {
                            "id": "BS",
                            "name": "Bahamas",
                            "nameLocal": "Bahamas"
                        },
                        {
                            "id": "BB",
                            "name": "Barbados",
                            "nameLocal": "Barbados"
                        },
                        {
                            "id": "BZ",
                            "name": "Belize",
                            "nameLocal": "Belize"
                        },
                        {
                            "id": "DM",
                            "name": "Dominica",
                            "nameLocal": "Dominica"
                        },
                        {
                            "id": "DO",
                            "name": "Dominican Republic",
                            "nameLocal": "Dominican Republic"
                        },
                        {
                            "id": "AS",
                            "name": "American Samoa",
                            "nameLocal": "American Samoa"
                        },
                        {
                            "id": "GU",
                            "name": "Guam",
                            "nameLocal": "Guam"
                        },
                        {
                            "id": "HT",
                            "name": "Haiti",
                            "nameLocal": "Haiti"
                        },
                        {
                            "id": "GY",
                            "name": "Guyana",
                            "nameLocal": "Guyana"
                        },
                        {
                            "id": "IL",
                            "name": "Israel",
                            "nameLocal": "Israel"
                        },
                        {
                            "id": "IE",
                            "name": "Ireland",
                            "nameLocal": "Ireland"
                        },
                        {
                            "id": "JM",
                            "name": "Jamaica",
                            "nameLocal": "Jamaica"
                        },
                        {
                            "id": "MT",
                            "name": "Malta",
                            "nameLocal": "Malta"
                        },
                        {
                            "id": "NZ",
                            "name": "New Zealand",
                            "nameLocal": "New Zealand"
                        },
                        {
                            "id": "PH",
                            "name": "Philippines",
                            "nameLocal": "Philippines"
                        },
                        {
                            "id": "KN",
                            "name": "Saint Kitts and Nevis",
                            "nameLocal": "Saint Kitts and Nevis"
                        },
                        {
                            "id": "LC",
                            "name": "Saint Lucia",
                            "nameLocal": "Saint Lucia"
                        },
                        {
                            "id": "VC",
                            "name": "Saint Vincent and the Grenadines",
                            "nameLocal": "Saint Vincent and the Grenadines"
                        },
                        {
                            "id": "TT",
                            "name": "Trinidad and Tobago",
                            "nameLocal": "Trinidad and Tobago"
                        },
                        {
                            "id": "NG",
                            "name": "Nigeria",
                            "nameLocal": "Nigeria"
                        },
                        {
                            "id": "ZA",
                            "name": "South Africa",
                            "nameLocal": "South Africa"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2023-07-13T21:22:39.000Z",
                    "audioBibles": []
                },
                {
                    "id": "6bab4d6c61b31b80-01",
                    "dblId": "6bab4d6c61b31b80",
                    "relatedDbl": null,
                    "name": "Brenton English Septuagint (Updated Spelling and Formatting)",
                    "nameLocal": "Brenton English Septuagint (Updated Spelling and Formatting)",
                    "abbreviation": "engLXXup",
                    "abbreviationLocal": "LXXup",
                    "description": "common",
                    "descriptionLocal": "common",
                    "language": {
                        "id": "eng",
                        "name": "English",
                        "nameLocal": "English",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "ZZ",
                            "name": "Unspecific",
                            "nameLocal": "Unspecific"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-01-07T08:58:26.000Z",
                    "audioBibles": []
                },
                {
                    "id": "65bfdebd704a8324-01",
                    "dblId": "65bfdebd704a8324",
                    "relatedDbl": null,
                    "name": "Brenton English translation of the Septuagint",
                    "nameLocal": "Brenton English translation of the Septuagint",
                    "abbreviation": "engbrent",
                    "abbreviationLocal": "Brenton",
                    "description": "Septuagint",
                    "descriptionLocal": "Septuagint",
                    "language": {
                        "id": "eng",
                        "name": "English",
                        "nameLocal": "English",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "GB",
                            "name": "United Kingdom",
                            "nameLocal": "United Kingdom"
                        },
                        {
                            "id": "US",
                            "name": "United States",
                            "nameLocal": "United States"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-01-07T08:39:44.000Z",
                    "audioBibles": []
                },
                {
                    "id": "55212e3cf5d04d49-01",
                    "dblId": "55212e3cf5d04d49",
                    "relatedDbl": null,
                    "name": "Cambridge Paragraph Bible of the KJV",
                    "nameLocal": "Cambridge Paragraph Bible of the KJV",
                    "abbreviation": "engKJVCPB",
                    "abbreviationLocal": "KJVCPB",
                    "description": "Common",
                    "descriptionLocal": "Common",
                    "language": {
                        "id": "eng",
                        "name": "English",
                        "nameLocal": "English",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "US",
                            "name": "United States",
                            "nameLocal": "United States"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-01-07T17:53:30.000Z",
                    "audioBibles": []
                },
                {
                    "id": "179568874c45066f-01",
                    "dblId": "179568874c45066f",
                    "relatedDbl": null,
                    "name": "Douay-Rheims American 1899",
                    "nameLocal": "Douay-Rheims American 1899",
                    "abbreviation": "engDRA",
                    "abbreviationLocal": "DRA",
                    "description": "The Holy Bible in English, Douay-Rheims American Edition of 1899, translated from the Latin Vulgate",
                    "descriptionLocal": "Catholic",
                    "language": {
                        "id": "eng",
                        "name": "English",
                        "nameLocal": "English",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "US",
                            "name": "United States",
                            "nameLocal": "United States"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-01-07T17:31:25.000Z",
                    "audioBibles": []
                },
                {
                    "id": "55ec700d9e0d77ea-01",
                    "dblId": "55ec700d9e0d77ea",
                    "relatedDbl": null,
                    "name": "English Majority Text Version",
                    "nameLocal": "English Majority Text Version",
                    "abbreviation": "engEMTV",
                    "abbreviationLocal": "EMTV",
                    "description": "common",
                    "descriptionLocal": "common",
                    "language": {
                        "id": "eng",
                        "name": "English",
                        "nameLocal": "English",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "US",
                            "name": "United States",
                            "nameLocal": "United States"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-01-07T17:54:11.000Z",
                    "audioBibles": []
                },
                {
                    "id": "65eec8e0b60e656b-01",
                    "dblId": "65eec8e0b60e656b",
                    "relatedDbl": null,
                    "name": "Free Bible Version",
                    "nameLocal": "Free Bible Version",
                    "abbreviation": "FBV",
                    "abbreviationLocal": "FBV",
                    "description": "Protestant FBV full 3.0 beta",
                    "descriptionLocal": "Protestant FBV full 3.0 beta",
                    "language": {
                        "id": "eng",
                        "name": "English",
                        "nameLocal": "English",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "US",
                            "name": "United States of America",
                            "nameLocal": "United States of America"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2023-02-17T09:14:44.000Z",
                    "audioBibles": []
                },
                {
                    "id": "c315fa9f71d4af3a-01",
                    "dblId": "c315fa9f71d4af3a",
                    "relatedDbl": null,
                    "name": "Geneva Bible",
                    "nameLocal": "Geneva Bible",
                    "abbreviation": "enggnv",
                    "abbreviationLocal": "GNV",
                    "description": "common",
                    "descriptionLocal": "common",
                    "language": {
                        "id": "eng",
                        "name": "English",
                        "nameLocal": "English",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "GB",
                            "name": "United Kingdom",
                            "nameLocal": "United Kingdom"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-01-07T13:25:26.000Z",
                    "audioBibles": []
                },
                {
                    "id": "bf8f1c7f3f9045a5-01",
                    "dblId": "bf8f1c7f3f9045a5",
                    "relatedDbl": null,
                    "name": "JPS TaNaKH 1917",
                    "nameLocal": "JPS TaNaKH 1917",
                    "abbreviation": "engojps",
                    "abbreviationLocal": "OJPS",
                    "description": "Jewish",
                    "descriptionLocal": "Jewish",
                    "language": {
                        "id": "eng",
                        "name": "English",
                        "nameLocal": "English",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "US",
                            "name": "United States",
                            "nameLocal": "United States"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-01-07T13:15:20.000Z",
                    "audioBibles": []
                },
                {
                    "id": "de4e12af7f28f599-02",
                    "dblId": "de4e12af7f28f599",
                    "relatedDbl": null,
                    "name": "King James (Authorised) Version",
                    "nameLocal": "King James Version",
                    "abbreviation": "engKJV",
                    "abbreviationLocal": "KJV",
                    "description": "Protestant",
                    "descriptionLocal": "Protestant",
                    "language": {
                        "id": "eng",
                        "name": "English",
                        "nameLocal": "English",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "GB",
                            "name": "United Kingdom of Great Britain and Northern Ireland",
                            "nameLocal": "United Kingdom of Great Britain and Northern Ireland"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2023-05-03T09:23:59.000Z",
                    "audioBibles": []
                },
                {
                    "id": "de4e12af7f28f599-01",
                    "dblId": "de4e12af7f28f599",
                    "relatedDbl": null,
                    "name": "King James (Authorised) Version",
                    "nameLocal": "King James Version",
                    "abbreviation": "engKJV",
                    "abbreviationLocal": "KJV",
                    "description": "Ecumenical",
                    "descriptionLocal": "Ecumenical",
                    "language": {
                        "id": "eng",
                        "name": "English",
                        "nameLocal": "English",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "GB",
                            "name": "United Kingdom of Great Britain and Northern Ireland",
                            "nameLocal": "United Kingdom of Great Britain and Northern Ireland"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2023-05-03T21:21:08.000Z",
                    "audioBibles": []
                },
                {
                    "id": "01b29f4b342acc35-01",
                    "dblId": "01b29f4b342acc35",
                    "relatedDbl": null,
                    "name": "Literal Standard Version",
                    "nameLocal": "Literal Standard Version",
                    "abbreviation": "LSV",
                    "abbreviationLocal": "LSV",
                    "description": "Protestant",
                    "descriptionLocal": "Protestant",
                    "language": {
                        "id": "eng",
                        "name": "English",
                        "nameLocal": "English",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "US",
                            "name": "United States of America",
                            "nameLocal": "United States of America"
                        },
                        {
                            "id": "GB",
                            "name": "United Kingdom of Great Britain and Northern Ireland",
                            "nameLocal": "United Kingdom of Great Britain and Northern Ireland"
                        },
                        {
                            "id": "CA",
                            "name": "Canada",
                            "nameLocal": "Canada"
                        },
                        {
                            "id": "AU",
                            "name": "Australia",
                            "nameLocal": "Australia"
                        },
                        {
                            "id": "ZA",
                            "name": "South Africa",
                            "nameLocal": "South Africa"
                        },
                        {
                            "id": "NZ",
                            "name": "New Zealand",
                            "nameLocal": "New Zealand"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2023-06-20T09:10:19.000Z",
                    "audioBibles": []
                },
                {
                    "id": "40072c4a5aba4022-01",
                    "dblId": "40072c4a5aba4022",
                    "relatedDbl": null,
                    "name": "Revised Version 1885",
                    "nameLocal": "Revised Version 1885",
                    "abbreviation": "engRV",
                    "abbreviationLocal": "RV",
                    "description": "Interconfessional",
                    "descriptionLocal": "Interconfessional",
                    "language": {
                        "id": "eng",
                        "name": "English",
                        "nameLocal": "English",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "GB",
                            "name": "United Kingdom of Great Britain and Northern Ireland",
                            "nameLocal": "United Kingdom of Great Britain and Northern Ireland"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2023-02-16T09:10:55.000Z",
                    "audioBibles": []
                },
                {
                    "id": "ec290b5045ff54a5-01",
                    "dblId": "ec290b5045ff54a5",
                    "relatedDbl": null,
                    "name": "Targum Onkelos Etheridge",
                    "nameLocal": "Targum Onkelos Etheridge",
                    "abbreviation": "engOKE",
                    "abbreviationLocal": "OKE",
                    "description": "common",
                    "descriptionLocal": "common",
                    "language": {
                        "id": "eng",
                        "name": "English",
                        "nameLocal": "English",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "ZZ",
                            "name": "Unspecific",
                            "nameLocal": "Unspecific"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-01-07T15:49:34.000Z",
                    "audioBibles": []
                },
                {
                    "id": "2f0fd81d7b85b923-01",
                    "dblId": "2f0fd81d7b85b923",
                    "relatedDbl": null,
                    "name": "The English New Testament According to Family 35",
                    "nameLocal": "The English New Testament According to Family 35",
                    "abbreviation": "engF35",
                    "abbreviationLocal": "F35",
                    "description": "Common",
                    "descriptionLocal": "Common",
                    "language": {
                        "id": "eng",
                        "name": "English",
                        "nameLocal": "English",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "ZZ",
                            "name": "Unspecific",
                            "nameLocal": "Unspecific"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-01-07T17:41:46.000Z",
                    "audioBibles": []
                },
                {
                    "id": "06125adad2d5898a-01",
                    "dblId": "06125adad2d5898a",
                    "relatedDbl": null,
                    "name": "The Holy Bible, American Standard Version",
                    "nameLocal": "The Holy Bible, American Standard Version",
                    "abbreviation": "ASV",
                    "abbreviationLocal": "ASV",
                    "description": "Bible",
                    "descriptionLocal": "Bible",
                    "language": {
                        "id": "eng",
                        "name": "English",
                        "nameLocal": "English",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "US",
                            "name": "United States of America",
                            "nameLocal": "United States of America"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2024-03-05T09:11:51.000Z",
                    "audioBibles": []
                },
                {
                    "id": "c89622d31b60c444-02",
                    "dblId": "c89622d31b60c444",
                    "relatedDbl": null,
                    "name": "The Orthodox Jewish Bible",
                    "nameLocal": "The Orthodox Jewish Bible",
                    "abbreviation": "TOJB2011",
                    "abbreviationLocal": "TOJB2011",
                    "description": "OT follows Tanakh order, NT follows usual Protestant order",
                    "descriptionLocal": "OT follows Tanakh order, NT follows usual Protestant order",
                    "language": {
                        "id": "eng",
                        "name": "English",
                        "nameLocal": "English",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "US",
                            "name": "United States of America",
                            "nameLocal": "United States of America"
                        },
                        {
                            "id": "IL",
                            "name": "Israel",
                            "nameLocal": "Israel"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-01-07T13:47:34.000Z",
                    "audioBibles": []
                },
                {
                    "id": "32339cf2f720ff8e-01",
                    "dblId": "32339cf2f720ff8e",
                    "relatedDbl": null,
                    "name": "The Text-Critical English New Testament",
                    "nameLocal": "The Text-Critical English New Testament",
                    "abbreviation": "TCENT",
                    "abbreviationLocal": "TCENT",
                    "description": "common",
                    "descriptionLocal": "common",
                    "language": {
                        "id": "eng",
                        "name": "English",
                        "nameLocal": "English",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "US",
                            "name": "United States of America",
                            "nameLocal": "United States of America"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2024-03-14T21:16:35.000Z",
                    "audioBibles": []
                },
                {
                    "id": "66c22495370cdfc0-01",
                    "dblId": "66c22495370cdfc0",
                    "relatedDbl": null,
                    "name": "Translation for Translators",
                    "nameLocal": "Translation for Translators",
                    "abbreviation": "T4T",
                    "abbreviationLocal": "T4T",
                    "description": "common",
                    "descriptionLocal": "common",
                    "language": {
                        "id": "eng",
                        "name": "English",
                        "nameLocal": "English",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "US",
                            "name": "United States of America",
                            "nameLocal": "United States of America"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2023-07-04T09:19:29.000Z",
                    "audioBibles": []
                },
                {
                    "id": "9879dbb7cfe39e4d-01",
                    "dblId": "9879dbb7cfe39e4d",
                    "relatedDbl": null,
                    "name": "World English Bible",
                    "nameLocal": "World English Bible",
                    "abbreviation": "WEB",
                    "abbreviationLocal": "WEB",
                    "description": "Ecumenical",
                    "descriptionLocal": "Ecumenical",
                    "language": {
                        "id": "eng",
                        "name": "English",
                        "nameLocal": "English",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "US",
                            "name": "United States of America",
                            "nameLocal": "United States of America"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2021-07-11T09:12:36.000Z",
                    "audioBibles": [
                        {
                            "id": "105a06b6146d11e7-01",
                            "name": "English - World English Bible 2013 (Drama NT)",
                            "nameLocal": "English - World English Bible 2013 (Drama NT)",
                            "dblId": "105a06b6146d11e7"
                        }
                    ]
                },
                {
                    "id": "9879dbb7cfe39e4d-02",
                    "dblId": "9879dbb7cfe39e4d",
                    "relatedDbl": null,
                    "name": "World English Bible",
                    "nameLocal": "World English Bible",
                    "abbreviation": "WEB",
                    "abbreviationLocal": "WEB",
                    "description": "Catholic",
                    "descriptionLocal": "Catholic",
                    "language": {
                        "id": "eng",
                        "name": "English",
                        "nameLocal": "English",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "US",
                            "name": "United States of America",
                            "nameLocal": "United States of America"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2021-07-11T09:13:10.000Z",
                    "audioBibles": [
                        {
                            "id": "105a06b6146d11e7-01",
                            "name": "English - World English Bible 2013 (Drama NT)",
                            "nameLocal": "English - World English Bible 2013 (Drama NT)",
                            "dblId": "105a06b6146d11e7"
                        }
                    ]
                },
                {
                    "id": "9879dbb7cfe39e4d-03",
                    "dblId": "9879dbb7cfe39e4d",
                    "relatedDbl": null,
                    "name": "World English Bible",
                    "nameLocal": "World English Bible",
                    "abbreviation": "WEB",
                    "abbreviationLocal": "WEB",
                    "description": "Orthodox",
                    "descriptionLocal": "Orthodox",
                    "language": {
                        "id": "eng",
                        "name": "English",
                        "nameLocal": "English",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "US",
                            "name": "United States of America",
                            "nameLocal": "United States of America"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2021-07-11T09:13:41.000Z",
                    "audioBibles": [
                        {
                            "id": "105a06b6146d11e7-01",
                            "name": "English - World English Bible 2013 (Drama NT)",
                            "nameLocal": "English - World English Bible 2013 (Drama NT)",
                            "dblId": "105a06b6146d11e7"
                        }
                    ]
                },
                {
                    "id": "9879dbb7cfe39e4d-04",
                    "dblId": "9879dbb7cfe39e4d",
                    "relatedDbl": null,
                    "name": "World English Bible",
                    "nameLocal": "World English Bible",
                    "abbreviation": "WEB",
                    "abbreviationLocal": "WEB",
                    "description": "Protestant",
                    "descriptionLocal": "Protestant",
                    "language": {
                        "id": "eng",
                        "name": "English",
                        "nameLocal": "English",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "US",
                            "name": "United States of America",
                            "nameLocal": "United States of America"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2021-07-11T09:14:16.000Z",
                    "audioBibles": [
                        {
                            "id": "105a06b6146d11e7-01",
                            "name": "English - World English Bible 2013 (Drama NT)",
                            "nameLocal": "English - World English Bible 2013 (Drama NT)",
                            "dblId": "105a06b6146d11e7"
                        }
                    ]
                },
                {
                    "id": "7142879509583d59-01",
                    "dblId": "7142879509583d59",
                    "relatedDbl": null,
                    "name": "World English Bible British Edition",
                    "nameLocal": "World English Bible British Edition",
                    "abbreviation": "WEBBE",
                    "abbreviationLocal": "WEBBE",
                    "description": "Ecumenical",
                    "descriptionLocal": "Ecumenical",
                    "language": {
                        "id": "eng",
                        "name": "English",
                        "nameLocal": "English",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "GB",
                            "name": "United Kingdom",
                            "nameLocal": "United Kingdom"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-01-07T09:14:22.000Z",
                    "audioBibles": []
                },
                {
                    "id": "7142879509583d59-02",
                    "dblId": "7142879509583d59",
                    "relatedDbl": null,
                    "name": "World English Bible British Edition",
                    "nameLocal": "World English Bible British Edition",
                    "abbreviation": "WEBBE",
                    "abbreviationLocal": "WEBBE",
                    "description": "Catholic",
                    "descriptionLocal": "Catholic",
                    "language": {
                        "id": "eng",
                        "name": "English",
                        "nameLocal": "English",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "GB",
                            "name": "United Kingdom",
                            "nameLocal": "United Kingdom"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-01-07T09:14:56.000Z",
                    "audioBibles": []
                },
                {
                    "id": "7142879509583d59-03",
                    "dblId": "7142879509583d59",
                    "relatedDbl": null,
                    "name": "World English Bible British Edition",
                    "nameLocal": "World English Bible British Edition",
                    "abbreviation": "WEBBE",
                    "abbreviationLocal": "WEBBE",
                    "description": "Orthodox",
                    "descriptionLocal": "Orthodox",
                    "language": {
                        "id": "eng",
                        "name": "English",
                        "nameLocal": "English",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "GB",
                            "name": "United Kingdom",
                            "nameLocal": "United Kingdom"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-01-07T09:15:31.000Z",
                    "audioBibles": []
                },
                {
                    "id": "7142879509583d59-04",
                    "dblId": "7142879509583d59",
                    "relatedDbl": null,
                    "name": "World English Bible British Edition",
                    "nameLocal": "World English Bible British Edition",
                    "abbreviation": "WEBBE",
                    "abbreviationLocal": "WEBBE",
                    "description": "Protestant",
                    "descriptionLocal": "Protestant",
                    "language": {
                        "id": "eng",
                        "name": "English",
                        "nameLocal": "English",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "GB",
                            "name": "United Kingdom",
                            "nameLocal": "United Kingdom"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-01-07T09:16:05.000Z",
                    "audioBibles": []
                },
                {
                    "id": "72f4e6dc683324df-01",
                    "dblId": "72f4e6dc683324df",
                    "relatedDbl": null,
                    "name": "World English Bible Updated",
                    "nameLocal": "World English Bible Updated",
                    "abbreviation": "engWEBU",
                    "abbreviationLocal": "WEBU",
                    "description": "Ecumenical",
                    "descriptionLocal": "Ecumenical",
                    "language": {
                        "id": "eng",
                        "name": "English",
                        "nameLocal": "English",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "UM",
                            "name": "United States Minor Outlying Islands",
                            "nameLocal": "United States Minor Outlying Islands"
                        },
                        {
                            "id": "US",
                            "name": "United States of America",
                            "nameLocal": "United States of America"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2024-03-29T09:20:21.000Z",
                    "audioBibles": []
                },
                {
                    "id": "72f4e6dc683324df-02",
                    "dblId": "72f4e6dc683324df",
                    "relatedDbl": null,
                    "name": "World English Bible Updated",
                    "nameLocal": "World English Bible Updated",
                    "abbreviation": "engWEBU",
                    "abbreviationLocal": "WEBU",
                    "description": "Protestant",
                    "descriptionLocal": "Protestant",
                    "language": {
                        "id": "eng",
                        "name": "English",
                        "nameLocal": "English",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "UM",
                            "name": "United States Minor Outlying Islands",
                            "nameLocal": "United States Minor Outlying Islands"
                        },
                        {
                            "id": "US",
                            "name": "United States of America",
                            "nameLocal": "United States of America"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2024-03-29T09:21:23.000Z",
                    "audioBibles": []
                },
                {
                    "id": "72f4e6dc683324df-03",
                    "dblId": "72f4e6dc683324df",
                    "relatedDbl": null,
                    "name": "World English Bible Updated",
                    "nameLocal": "World English Bible Updated",
                    "abbreviation": "engWEBU",
                    "abbreviationLocal": "WEBU",
                    "description": "Catholic",
                    "descriptionLocal": "Catholic",
                    "language": {
                        "id": "eng",
                        "name": "English",
                        "nameLocal": "English",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "UM",
                            "name": "United States Minor Outlying Islands",
                            "nameLocal": "United States Minor Outlying Islands"
                        },
                        {
                            "id": "US",
                            "name": "United States of America",
                            "nameLocal": "United States of America"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2024-03-29T09:22:03.000Z",
                    "audioBibles": []
                },
                {
                    "id": "32664dc3288a28df-03",
                    "dblId": "32664dc3288a28df",
                    "relatedDbl": null,
                    "name": "World English Bible, American English Edition, without Strong's Numbers",
                    "nameLocal": "World English Bible, American English Edition, without Strong's Numbers",
                    "abbreviation": "engWEBUS",
                    "abbreviationLocal": "WEBUS",
                    "description": "Orthodox",
                    "descriptionLocal": "Orthodox",
                    "language": {
                        "id": "eng",
                        "name": "English",
                        "nameLocal": "English",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "US",
                            "name": "United States of America",
                            "nameLocal": "United States of America"
                        },
                        {
                            "id": "CA",
                            "name": "Canada",
                            "nameLocal": "Canada"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-09-21T18:33:56.000Z",
                    "audioBibles": []
                },
                {
                    "id": "32664dc3288a28df-01",
                    "dblId": "32664dc3288a28df",
                    "relatedDbl": null,
                    "name": "World English Bible, American English Edition, without Strong's Numbers",
                    "nameLocal": "World English Bible, American English Edition, without Strong's Numbers",
                    "abbreviation": "engWEBUS",
                    "abbreviationLocal": "WEBUS",
                    "description": "Ecumenical",
                    "descriptionLocal": "Ecumenical",
                    "language": {
                        "id": "eng",
                        "name": "English",
                        "nameLocal": "English",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "US",
                            "name": "United States of America",
                            "nameLocal": "United States of America"
                        },
                        {
                            "id": "CA",
                            "name": "Canada",
                            "nameLocal": "Canada"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2024-03-29T09:14:31.000Z",
                    "audioBibles": []
                },
                {
                    "id": "32664dc3288a28df-02",
                    "dblId": "32664dc3288a28df",
                    "relatedDbl": null,
                    "name": "World English Bible, American English Edition, without Strong's Numbers",
                    "nameLocal": "World English Bible, American English Edition, without Strong's Numbers",
                    "abbreviation": "engWEBUS",
                    "abbreviationLocal": "WEBUS",
                    "description": "Protestant",
                    "descriptionLocal": "Protestant",
                    "language": {
                        "id": "eng",
                        "name": "English",
                        "nameLocal": "English",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "US",
                            "name": "United States of America",
                            "nameLocal": "United States of America"
                        },
                        {
                            "id": "CA",
                            "name": "Canada",
                            "nameLocal": "Canada"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2024-03-29T09:15:35.000Z",
                    "audioBibles": []
                },
                {
                    "id": "f72b840c855f362c-04",
                    "dblId": "f72b840c855f362c",
                    "relatedDbl": null,
                    "name": "World Messianic Bible",
                    "nameLocal": "World Messianic Bible",
                    "abbreviation": "WMB",
                    "abbreviationLocal": "WMB",
                    "description": "Messianic",
                    "descriptionLocal": "Messianic",
                    "language": {
                        "id": "eng",
                        "name": "English",
                        "nameLocal": "English",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "US",
                            "name": "United States of America",
                            "nameLocal": "United States of America"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2024-04-01T21:32:04.000Z",
                    "audioBibles": []
                },
                {
                    "id": "04da588535d2f823-04",
                    "dblId": "04da588535d2f823",
                    "relatedDbl": null,
                    "name": "World Messianic Bible British Edition",
                    "nameLocal": "World Messianic Bible British Edition",
                    "abbreviation": "WMBBE",
                    "abbreviationLocal": "WMBBE",
                    "description": "Messianic",
                    "descriptionLocal": "Messianic",
                    "language": {
                        "id": "eng",
                        "name": "English",
                        "nameLocal": "English",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "AU",
                            "name": "Australia",
                            "nameLocal": "Australia"
                        },
                        {
                            "id": "AS",
                            "name": "American Samoa",
                            "nameLocal": "American Samoa"
                        },
                        {
                            "id": "BS",
                            "name": "Bahamas",
                            "nameLocal": "Bahamas"
                        },
                        {
                            "id": "BZ",
                            "name": "Belize",
                            "nameLocal": "Belize"
                        },
                        {
                            "id": "IO",
                            "name": "British Indian Ocean Territory",
                            "nameLocal": "British Indian Ocean Territory"
                        },
                        {
                            "id": "VG",
                            "name": "Virgin Islands, British",
                            "nameLocal": "Virgin Islands, British"
                        },
                        {
                            "id": "CA",
                            "name": "Canada",
                            "nameLocal": "Canada"
                        },
                        {
                            "id": "KE",
                            "name": "Kenya",
                            "nameLocal": "Kenya"
                        },
                        {
                            "id": "FM",
                            "name": "Micronesia, Federated States of",
                            "nameLocal": "Micronesia, Federated States of"
                        },
                        {
                            "id": "NZ",
                            "name": "New Zealand",
                            "nameLocal": "New Zealand"
                        },
                        {
                            "id": "PG",
                            "name": "Papua New Guinea",
                            "nameLocal": "Papua New Guinea"
                        },
                        {
                            "id": "WS",
                            "name": "Samoa",
                            "nameLocal": "Samoa"
                        },
                        {
                            "id": "SG",
                            "name": "Singapore",
                            "nameLocal": "Singapore"
                        },
                        {
                            "id": "TO",
                            "name": "Tonga",
                            "nameLocal": "Tonga"
                        },
                        {
                            "id": "GB",
                            "name": "United Kingdom of Great Britain and Northern Ireland",
                            "nameLocal": "United Kingdom of Great Britain and Northern Ireland"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2024-04-08T21:12:07.000Z",
                    "audioBibles": []
                },
                {
                    "id": "ac90bfebd4ee9c4d-01",
                    "dblId": "ac90bfebd4ee9c4d",
                    "relatedDbl": null,
                    "name": "Biblica® Open Ewe Contemporary Scriptures 2020",
                    "nameLocal": "Biblica® Se aɖeke mebla Biblia (Agbenya La™) zazã o.",
                    "abbreviation": "OECS",
                    "abbreviationLocal": "OAL",
                    "description": "Holy Scriptures",
                    "descriptionLocal": "Ŋɔŋlɔ Kɔkɔe",
                    "language": {
                        "id": "ewe",
                        "name": "Ewe",
                        "nameLocal": "eʋegbe",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "GH",
                            "name": "Ghana",
                            "nameLocal": "Ghana"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-09-21T23:04:44.000Z",
                    "audioBibles": [
                        {
                            "id": "f7a4f623ca6040c0-01",
                            "name": "Biblica® Open Ewe Contemporary Scriptures™, Audio Edition",
                            "nameLocal": "Biblica® Se aɖeke mebla Biblia zazã o Agbenya La™, Audio Edition",
                            "dblId": "f7a4f623ca6040c0"
                        }
                    ]
                },
                {
                    "id": "9b076bc0f1856204-01",
                    "dblId": "9b076bc0f1856204",
                    "relatedDbl": null,
                    "name": "Pular Fuuta-Jallon Version",
                    "nameLocal": "Version Pular Fuuta-Jallon",
                    "abbreviation": "PFJV",
                    "abbreviationLocal": "VPFJ",
                    "description": "New Testament",
                    "descriptionLocal": "Injil",
                    "language": {
                        "id": "fuf",
                        "name": "Pular",
                        "nameLocal": "Pular",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "GN",
                            "name": "Guinea",
                            "nameLocal": "Guinea"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-01-07T11:15:33.000Z",
                    "audioBibles": []
                },
                {
                    "id": "da905e46720432e2-01",
                    "dblId": "da905e46720432e2",
                    "relatedDbl": null,
                    "name": "New Testament in Mborena Kam",
                    "nameLocal": "Raraŋ Aetaniacna Kam Wembaŋ Laŋ",
                    "abbreviation": "MbKamNT",
                    "abbreviationLocal": "MbKamNT",
                    "description": "New Testament in Mbore language (Mborena Kam)",
                    "descriptionLocal": "NT Mborena Kam",
                    "language": {
                        "id": "gai",
                        "name": "Borei",
                        "nameLocal": "Mborena Kam",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "PG",
                            "name": "Papua New Guinea",
                            "nameLocal": "Papua New Guinea"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-01-07T14:52:32.000Z",
                    "audioBibles": []
                },
                {
                    "id": "2193678febf23d26-01",
                    "dblId": "2193678febf23d26",
                    "relatedDbl": null,
                    "name": "The Gata Didayi Testament Language",
                    "nameLocal": "ସତ୍‌ ଗାଲି, ଯୀଶୁ ମାପ୍‌ରୁନେ ତ୍ମି ନିଅମ୍",
                    "abbreviation": "NTDaa20",
                    "abbreviationLocal": "NTDaa20",
                    "description": "The Gata Didayi Testament Language, 2020",
                    "descriptionLocal": "ସତ୍‌ ଗାଲି, ଯୀଶୁ ମାପ୍‌ରୁନେ ତ୍ମି ନିଅମ୍, 2020",
                    "language": {
                        "id": "gaq",
                        "name": "Gata’",
                        "nameLocal": "Gata’",
                        "script": "Oriya",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "IN",
                            "name": "India",
                            "nameLocal": "India"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-01-07T06:02:05.000Z",
                    "audioBibles": []
                },
                {
                    "id": "1849509e461c9a00-01",
                    "dblId": "1849509e461c9a00",
                    "relatedDbl": null,
                    "name": "Biblica® Open New Oromo Contemporary Version",
                    "nameLocal": "Biblica®  Hiikkaa Ammayyaa Banamaa Haaraa, Loqoda Dhi'aa",
                    "abbreviation": "omONCV22",
                    "abbreviationLocal": "HABH",
                    "description": "Holy Bible",
                    "descriptionLocal": "Kitaaba Qulqulluu",
                    "language": {
                        "id": "gaz",
                        "name": "Oromo, West Central",
                        "nameLocal": "Oromo, West Central",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "ET",
                            "name": "Ethiopia",
                            "nameLocal": "Ethiopia"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2023-09-30T09:13:42.000Z",
                    "audioBibles": [
                        {
                            "id": "3e52d5ea138e4da6-01",
                            "name": "Biblica® Open New Oromo Contemporary Version™, Audio Edition",
                            "nameLocal": "Biblica® Open New Oromo Contemporary Version™, Audio Edition",
                            "dblId": "3e52d5ea138e4da6"
                        }
                    ]
                },
                {
                    "id": "4aa6a1001d427a40-01",
                    "dblId": "4aa6a1001d427a40",
                    "relatedDbl": null,
                    "name": "New Oromo Contemporary Version, Western, Ethiopic 2022",
                    "nameLocal": "ክታበ ቁልቁሉ፣ ሂካ አመያ ሃራ",
                    "abbreviation": "NOCV",
                    "abbreviationLocal": "ሂአሃ",
                    "description": "Holy Bible",
                    "descriptionLocal": "ክታበ ቁልቁሉ",
                    "language": {
                        "id": "gaz",
                        "name": "Oromo, West Central",
                        "nameLocal": "Oromo, West Central",
                        "script": "Ethiopic",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "ET",
                            "name": "Ethiopia",
                            "nameLocal": "Ethiopia"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2023-09-28T21:15:34.000Z",
                    "audioBibles": []
                },
                {
                    "id": "e8b818f49c7c2835-01",
                    "dblId": "e8b818f49c7c2835",
                    "relatedDbl": null,
                    "name": "The New Testament in Kire",
                    "nameLocal": "Fhe Bakɨmen Kaman Kameŋ",
                    "abbreviation": "Kir-NT",
                    "abbreviationLocal": "KirNT",
                    "description": "Protestant",
                    "descriptionLocal": "Protestant",
                    "language": {
                        "id": "geb",
                        "name": "Kire",
                        "nameLocal": "Kire",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "PG",
                            "name": "Papua New Guinea",
                            "nameLocal": "Papua New Guinea"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-09-22T00:17:52.000Z",
                    "audioBibles": []
                },
                {
                    "id": "9915a49ed60cc12f-01",
                    "dblId": "9915a49ed60cc12f",
                    "relatedDbl": null,
                    "name": "Gamo Geesha Maxxafa New Testamen",
                    "nameLocal": "Gamo Geesha Maxxafa New Testamen",
                    "abbreviation": "GGMNT",
                    "abbreviationLocal": "GGMNT",
                    "description": "Gamo Geesha Maxxafa New Testament Unicode",
                    "descriptionLocal": "Gamo Geesha Maxxafa New Testament Unicode",
                    "language": {
                        "id": "gmv",
                        "name": "Gamo",
                        "nameLocal": "Gamotso",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "ET",
                            "name": "Ethiopia",
                            "nameLocal": "Ethiopia"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-01-07T11:06:50.000Z",
                    "audioBibles": []
                },
                {
                    "id": "ba74d885b27806bb-01",
                    "dblId": "ba74d885b27806bb",
                    "relatedDbl": null,
                    "name": "Gofa New Testament",
                    "nameLocal": "Gofa New Testament",
                    "abbreviation": "GOFNT",
                    "abbreviationLocal": "GOFNT",
                    "description": "Gofa New Testament",
                    "descriptionLocal": "Gofa New Testament",
                    "language": {
                        "id": "gof",
                        "name": "Gofa",
                        "nameLocal": "Goofa",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "ET",
                            "name": "Ethiopia",
                            "nameLocal": "Ethiopia"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-01-07T13:01:59.000Z",
                    "audioBibles": []
                },
                {
                    "id": "28d256cb603137cd-01",
                    "dblId": "28d256cb603137cd",
                    "relatedDbl": null,
                    "name": "The New Testament in Gowli Marathi Language",
                    "nameLocal": "ದೆವಾಚಿ ಖರಿ ಕಬರ್, ನವಾ ಕರಾರ್",
                    "abbreviation": "NTGMi23",
                    "abbreviationLocal": "NTGMi23",
                    "description": "The New Testament in Gowli Marathi Language",
                    "descriptionLocal": "ದೆವಾಚಿ ಖರಿ ಕಬರ್, ನವಾ ಕರಾರ್",
                    "language": {
                        "id": "gok",
                        "name": "Gowli",
                        "nameLocal": "Gowli",
                        "script": "Devanagari",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "IN",
                            "name": "India",
                            "nameLocal": "India"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2023-08-28T21:12:52.000Z",
                    "audioBibles": []
                },
                {
                    "id": "901dcd9744e1bf69-01",
                    "dblId": "901dcd9744e1bf69",
                    "relatedDbl": null,
                    "name": "1904 Patriarchal Greek New Testament with 20 corrections from later editions",
                    "nameLocal": "Βυζαντινή Καινή Διαθήκη 1904",
                    "abbreviation": "grcBYZ1904c",
                    "abbreviationLocal": "BYZ1904",
                    "description": "Common",
                    "descriptionLocal": "κοινός",
                    "language": {
                        "id": "grc",
                        "name": "Greek, Ancient",
                        "nameLocal": "Ελληνιστική",
                        "script": "Greek",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "GR",
                            "name": "Greece",
                            "nameLocal": "Greece"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-12-02T00:32:35.000Z",
                    "audioBibles": []
                },
                {
                    "id": "c114c33098c4fef1-01",
                    "dblId": "c114c33098c4fef1",
                    "relatedDbl": null,
                    "name": "Brenton Greek Septuagint",
                    "nameLocal": "μετάφραση των εβδομήκοντα",
                    "abbreviation": "grcbrent",
                    "abbreviationLocal": "GRCBRENT",
                    "description": "common",
                    "descriptionLocal": "κοινός",
                    "language": {
                        "id": "grc",
                        "name": "Greek, Ancient",
                        "nameLocal": "Ελληνιστική",
                        "script": "Greek",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "GR",
                            "name": "Greece",
                            "nameLocal": "Greece"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-01-07T13:18:35.000Z",
                    "audioBibles": []
                },
                {
                    "id": "3aefb10641485092-01",
                    "dblId": "3aefb10641485092",
                    "relatedDbl": null,
                    "name": "Greek Textus Receptus",
                    "nameLocal": "Η Καινή Διαθήκη",
                    "abbreviation": "GRCTR",
                    "abbreviationLocal": "GRCTR",
                    "description": "common",
                    "descriptionLocal": "κοινός",
                    "language": {
                        "id": "grc",
                        "name": "Greek, Ancient",
                        "nameLocal": "Ελληνιστική",
                        "script": "Greek",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "ZZ",
                            "name": "Unspecific",
                            "nameLocal": "Unspecific"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2023-05-23T09:12:38.000Z",
                    "audioBibles": []
                },
                {
                    "id": "47f396bad37936f0-01",
                    "dblId": "47f396bad37936f0",
                    "relatedDbl": null,
                    "name": "Solid Rock Greek New Testament",
                    "nameLocal": "Η Καινή Διαθήκη",
                    "abbreviation": "grcSRGNT",
                    "abbreviationLocal": "SRGNT",
                    "description": "common",
                    "descriptionLocal": "common",
                    "language": {
                        "id": "grc",
                        "name": "Greek, Ancient",
                        "nameLocal": "Ελληνιστική",
                        "script": "Greek",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "US",
                            "name": "United States of America",
                            "nameLocal": "United States of America"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-11-18T03:26:21.000Z",
                    "audioBibles": []
                },
                {
                    "id": "7644de2e4c5188e5-01",
                    "dblId": "7644de2e4c5188e5",
                    "relatedDbl": null,
                    "name": "Text-Critical Greek New Testament",
                    "nameLocal": "Text-Critical Greek New Testament",
                    "abbreviation": "grcTCGNT",
                    "abbreviationLocal": "TCGNT",
                    "description": "Common",
                    "descriptionLocal": "Common",
                    "language": {
                        "id": "grc",
                        "name": "Greek, Ancient",
                        "nameLocal": "Ελληνιστική",
                        "script": "Greek",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "GR",
                            "name": "Greece",
                            "nameLocal": "Greece"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2024-03-14T21:20:50.000Z",
                    "audioBibles": []
                },
                {
                    "id": "5e29945cf530b0f6-01",
                    "dblId": "5e29945cf530b0f6",
                    "relatedDbl": null,
                    "name": "The Greek New Testament According to Family 35",
                    "nameLocal": "Η Ελληνική Καινή Διαθήκη Σύμφωνα με την Οικογένεια 35",
                    "abbreviation": "grcF35",
                    "abbreviationLocal": "F35",
                    "description": "common",
                    "descriptionLocal": "κοινός",
                    "language": {
                        "id": "grc",
                        "name": "Greek, Ancient",
                        "nameLocal": "Ελληνιστική",
                        "script": "Greek",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "ZZ",
                            "name": "Unspecific",
                            "nameLocal": "Unspecific"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-01-07T08:23:36.000Z",
                    "audioBibles": []
                },
                {
                    "id": "a3644a98420c2703-01",
                    "dblId": "a3644a98420c2703",
                    "relatedDbl": null,
                    "name": "Indian Revised Version (IRV) Gujarati-2019",
                    "nameLocal": "ઇન્ડિયન રીવાઇઝ્ડ વર્ઝન ગુજરાતી  - 2019",
                    "abbreviation": "IRVGuj",
                    "abbreviationLocal": "IRVGuj",
                    "description": "Protestant Bible for All",
                    "descriptionLocal": "Protestant Bible for All",
                    "language": {
                        "id": "guj",
                        "name": "Gujarati",
                        "nameLocal": "ગુજરાતી",
                        "script": "Gujarati",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "IN",
                            "name": "India",
                            "nameLocal": "India"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-07-08T15:30:39.000Z",
                    "audioBibles": [
                        {
                            "id": "2abea5341ec34814-01",
                            "name": "Gujarati Indian Revised Version (IRV)",
                            "nameLocal": "Gujarati Indian Revised Version (IRV)",
                            "dblId": "2abea5341ec34814"
                        }
                    ]
                },
                {
                    "id": "496cafdffc23197b-01",
                    "dblId": "496cafdffc23197b",
                    "relatedDbl": null,
                    "name": "Haitian Bible",
                    "nameLocal": "Bib Sen An: Kreyòl Ayisyen",
                    "abbreviation": "hatbsa",
                    "abbreviationLocal": "BSA",
                    "description": "Common",
                    "descriptionLocal": "komen",
                    "language": {
                        "id": "hat",
                        "name": "Haitian",
                        "nameLocal": "Kreyòl Ayisyen",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "HT",
                            "name": "Haiti",
                            "nameLocal": "Haiti"
                        },
                        {
                            "id": "MQ",
                            "name": "Martinique",
                            "nameLocal": "Martinique"
                        },
                        {
                            "id": "DO",
                            "name": "Dominican Republic",
                            "nameLocal": "Dominican Republic"
                        },
                        {
                            "id": "CU",
                            "name": "Cuba",
                            "nameLocal": "Cuba"
                        },
                        {
                            "id": "US",
                            "name": "United States of America",
                            "nameLocal": "United States of America"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2024-01-13T09:15:18.000Z",
                    "audioBibles": []
                },
                {
                    "id": "0ab0c764d56a715d-01",
                    "dblId": "0ab0c764d56a715d",
                    "relatedDbl": null,
                    "name": "Biblica® Open Hausa Contemporary Bible 2020",
                    "nameLocal": "Biblica® Buɗaɗɗen Littafi Mai Tsarki, Sabon Rai Don Kowa 2020",
                    "abbreviation": "BHCB",
                    "abbreviationLocal": "OSRK",
                    "description": "New Testament",
                    "descriptionLocal": "Sabon Alkawari",
                    "language": {
                        "id": "hau",
                        "name": "Hausa",
                        "nameLocal": "Hausa",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "NG",
                            "name": "Nigeria",
                            "nameLocal": "Nigeria"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-01-12T09:08:31.000Z",
                    "audioBibles": [
                        {
                            "id": "04308387908b41f0-01",
                            "name": "Biblica® Open Hausa Contemporary Bible™, Audio Edition",
                            "nameLocal": "Biblica® Buɗaɗɗen Littafi Mai Tsarki, Sabon Rai Don Kowa™, Bugun Abin da ake sauraro",
                            "dblId": "04308387908b41f0"
                        }
                    ]
                },
                {
                    "id": "0ab0c764d56a715d-02",
                    "dblId": "0ab0c764d56a715d",
                    "relatedDbl": null,
                    "name": "Biblica® Open Hausa Contemporary Bible 2020",
                    "nameLocal": "Biblica® Buɗaɗɗen Littafi Mai Tsarki, Sabon Rai Don Kowa 2020",
                    "abbreviation": "OHCB",
                    "abbreviationLocal": "BSRK",
                    "description": "Holy Bible",
                    "descriptionLocal": "Littafi mai Tsarki",
                    "language": {
                        "id": "hau",
                        "name": "Hausa",
                        "nameLocal": "Hausa",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "NG",
                            "name": "Nigeria",
                            "nameLocal": "Nigeria"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-01-12T09:08:47.000Z",
                    "audioBibles": [
                        {
                            "id": "04308387908b41f0-01",
                            "name": "Biblica® Open Hausa Contemporary Bible™, Audio Edition",
                            "nameLocal": "Biblica® Buɗaɗɗen Littafi Mai Tsarki, Sabon Rai Don Kowa™, Bugun Abin da ake sauraro",
                            "dblId": "04308387908b41f0"
                        }
                    ]
                },
                {
                    "id": "0b262f1ed7f084a6-01",
                    "dblId": "0b262f1ed7f084a6",
                    "relatedDbl": null,
                    "name": "The Hebrew Bible, Westminister Leningrad Codex",
                    "nameLocal": "כתבי הקודש",
                    "abbreviation": "hboWLC",
                    "abbreviationLocal": "WLC",
                    "description": "Common",
                    "descriptionLocal": "Common",
                    "language": {
                        "id": "hbo",
                        "name": "Hebrew, Ancient",
                        "nameLocal": "עברית",
                        "script": "Hebrew",
                        "scriptDirection": "RTL"
                    },
                    "countries": [
                        {
                            "id": "IL",
                            "name": "Israel",
                            "nameLocal": "Israel"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2023-02-24T09:09:58.000Z",
                    "audioBibles": []
                },
                {
                    "id": "a8a97eebae3c98e4-01",
                    "dblId": "a8a97eebae3c98e4",
                    "relatedDbl": "963fbbc15c8cd2cd",
                    "name": "Biblica® Open Hebrew Living New Testament 2009",
                    "nameLocal": "Biblica® Habrit Hakhadasha/Haderekh Zekuyot Patuchot 2009",
                    "abbreviation": "OHD",
                    "abbreviationLocal": "HDZP",
                    "description": "New Testament",
                    "descriptionLocal": "New Testament",
                    "language": {
                        "id": "heb",
                        "name": "Hebrew, Modern",
                        "nameLocal": "עברית",
                        "script": "Hebrew",
                        "scriptDirection": "RTL"
                    },
                    "countries": [
                        {
                            "id": "IL",
                            "name": "Israel",
                            "nameLocal": "Israel"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-12-02T00:38:50.000Z",
                    "audioBibles": [
                        {
                            "id": "05580b0ab1e849eb-01",
                            "name": "Biblica® Open Hebrew Living New Testament Audio Edition",
                            "nameLocal": "Biblica® Habrit Hakhadasha/Haderekh Zekuyot Patuchot",
                            "dblId": "05580b0ab1e849eb"
                        }
                    ]
                },
                {
                    "id": "2c500771ea16da93-01",
                    "dblId": "2c500771ea16da93",
                    "relatedDbl": null,
                    "name": "Westminster Leningrad Codex",
                    "nameLocal": "Westminster Leningrad Codex",
                    "abbreviation": "WLC",
                    "abbreviationLocal": "WLC",
                    "description": "Westminster Leningrad Codex",
                    "descriptionLocal": "Westminster Leningrad Codex",
                    "language": {
                        "id": "heb",
                        "name": "Hebrew",
                        "nameLocal": "עברית",
                        "script": "Hebrew",
                        "scriptDirection": "RTL"
                    },
                    "countries": [
                        {
                            "id": "ZZ",
                            "name": "Unspecific",
                            "nameLocal": "Unspecific"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-01-07T06:26:45.000Z",
                    "audioBibles": []
                },
                {
                    "id": "2133003bb8b5e62b-01",
                    "dblId": "2133003bb8b5e62b",
                    "relatedDbl": null,
                    "name": "Hindi Contemporary Version 2019",
                    "nameLocal": "हिंदी समकालीन संस्करण",
                    "abbreviation": "HCV",
                    "abbreviationLocal": "HSS",
                    "description": "Holy Bible",
                    "descriptionLocal": "पवित्र बाइबिल",
                    "language": {
                        "id": "hin",
                        "name": "Hindi",
                        "nameLocal": "हिन्दी",
                        "script": "Devanagari",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "IN",
                            "name": "India",
                            "nameLocal": "India"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-05-05T19:37:33.000Z",
                    "audioBibles": [
                        {
                            "id": "9c67e54fbdca4e3e-01",
                            "name": "Biblica® Open Hindi Contemporary Version, Audio Edition",
                            "nameLocal": "Biblica® Open Hindi Contemporary Version, Audio Edition",
                            "dblId": "9c67e54fbdca4e3e"
                        }
                    ]
                },
                {
                    "id": "1e8ab327edbce67f-01",
                    "dblId": "1e8ab327edbce67f",
                    "relatedDbl": null,
                    "name": "Indian Revised Version(IRV) Hindi - 2019",
                    "nameLocal": "इंडियन रिवाइज्ड वर्जन (IRV) हिंदी - 2019",
                    "abbreviation": "IRVHin",
                    "abbreviationLocal": "IRVHin",
                    "description": "Hindi Bible for All",
                    "descriptionLocal": "Hindi Bible for All",
                    "language": {
                        "id": "hin",
                        "name": "Hindi",
                        "nameLocal": "हिन्दी",
                        "script": "Devanagari",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "IN",
                            "name": "India",
                            "nameLocal": "India"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-05-03T22:06:07.000Z",
                    "audioBibles": [
                        {
                            "id": "6b227b38145d4383-01",
                            "name": "Hindi Indian Revised Version (IRV) Old Testament",
                            "nameLocal": "Hindi Indian Revised Version (IRV) Old Testament",
                            "dblId": "6b227b38145d4383"
                        }
                    ]
                },
                {
                    "id": "9dec3e0ffbd4386b-01",
                    "dblId": "9dec3e0ffbd4386b",
                    "relatedDbl": null,
                    "name": "The New Testament in Holiya Language",
                    "nameLocal": "परमेश्‍वर उन खरा वचन, व्‍हाशोद नियम",
                    "abbreviation": "NTHaa20",
                    "abbreviationLocal": "NTHaa20",
                    "description": "The New Testament in Holiya Language, 2020",
                    "descriptionLocal": "परमेश्‍वर उन खरा वचन, व्‍हाशोद नियम, 2020",
                    "language": {
                        "id": "hoy",
                        "name": "Holiya",
                        "nameLocal": "Holiya",
                        "script": "Devanagari",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "IN",
                            "name": "India",
                            "nameLocal": "India"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-01-07T11:23:52.000Z",
                    "audioBibles": []
                },
                {
                    "id": "b00de703b3d02a5a-01",
                    "dblId": "b00de703b3d02a5a",
                    "relatedDbl": null,
                    "name": "Biblica® Open Croatian Living New Testament 2000",
                    "nameLocal": "Biblica® Open Knjiga O Kristu",
                    "abbreviation": "OKOK",
                    "abbreviationLocal": "OKOK",
                    "description": "New Testament",
                    "descriptionLocal": "Novi Zavjet",
                    "language": {
                        "id": "hrv",
                        "name": "Croatian",
                        "nameLocal": "Hrvatski",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "HR",
                            "name": "Croatia",
                            "nameLocal": "Croatia"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-07-08T14:43:54.000Z",
                    "audioBibles": []
                },
                {
                    "id": "fcfc25677b0a53c9-01",
                    "dblId": "fcfc25677b0a53c9",
                    "relatedDbl": null,
                    "name": "Biblica® Open Hungarian New Testament: Life, Truth and Light 2003",
                    "nameLocal": "Biblica® Nyitott Újszövetség: élet, igazság és világosság",
                    "abbreviation": "OEIV",
                    "abbreviationLocal": "NEIV",
                    "description": "Open Hungarian Life, Truth and Light  New Testament: (Nyitott Újszövetség: élet, igazság és világosság) 2003",
                    "descriptionLocal": "Nyitott Újszövetség: élet, igazság és világosság (2003)",
                    "language": {
                        "id": "hun",
                        "name": "Hungarian",
                        "nameLocal": "Magyar",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "HU",
                            "name": "Hungary",
                            "nameLocal": "Hungary"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-01-08T09:14:57.000Z",
                    "audioBibles": []
                },
                {
                    "id": "a36fc06b086699f1-02",
                    "dblId": "a36fc06b086699f1",
                    "relatedDbl": null,
                    "name": "Biblica® Open Igbo Contemporary Bible 2020",
                    "nameLocal": "Biblica® Baịbụlụ Nsọ nʼIgbo Ndị Ugbu a nke dịrị onye ọbụla ịgụ",
                    "abbreviation": "OICB",
                    "abbreviationLocal": "BIUO",
                    "description": "Holy Bible",
                    "descriptionLocal": "Baịbụlụ Nsọ",
                    "language": {
                        "id": "ibo",
                        "name": "Igbo",
                        "nameLocal": "Igbo",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "NG",
                            "name": "Nigeria",
                            "nameLocal": "Nigeria"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-01-07T11:41:34.000Z",
                    "audioBibles": [
                        {
                            "id": "1b319c1d55564e45-01",
                            "name": "Biblica® Open Igbo Contemporary Bible™, Audio Edition",
                            "nameLocal": "Biblica® Open Igbo Contemporary Bible™, Audio Edition",
                            "dblId": "1b319c1d55564e45"
                        }
                    ]
                },
                {
                    "id": "2dd568eeff29fb3c-02",
                    "dblId": "2dd568eeff29fb3c",
                    "relatedDbl": null,
                    "name": "Plain Indonesian Translation",
                    "nameLocal": "Terjemahan Sederhana Indonesia",
                    "abbreviation": "TSI",
                    "abbreviationLocal": "TSI",
                    "description": "Easy to understand every day translation",
                    "descriptionLocal": "menikmati terjemahan Alkitab yang mudah dimengerti",
                    "language": {
                        "id": "ind",
                        "name": "Indonesian",
                        "nameLocal": "Indonesia, bahasa",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "ID",
                            "name": "Indonesia",
                            "nameLocal": "Indonesia"
                        },
                        {
                            "id": "MY",
                            "name": "Malaysia",
                            "nameLocal": "Malaysia"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2024-04-13T09:14:53.000Z",
                    "audioBibles": []
                },
                {
                    "id": "2dd568eeff29fb3c-01",
                    "dblId": "2dd568eeff29fb3c",
                    "relatedDbl": null,
                    "name": "Terjemahan Sederhana Indonesia NT Second Edition",
                    "nameLocal": "Perjanjian Baru dalam Terjemahan Sederhana Indonesia Edisi Kedua",
                    "abbreviation": "TSI",
                    "abbreviationLocal": "TSI",
                    "description": "New Testament and some other books",
                    "descriptionLocal": "Perjanjian Baru dalam Terjemahan Sederhana Indonesia",
                    "language": {
                        "id": "ind",
                        "name": "Indonesian",
                        "nameLocal": "Indonesia, bahasa",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "ID",
                            "name": "Indonesia",
                            "nameLocal": "Indonesia"
                        },
                        {
                            "id": "MY",
                            "name": "Malaysia",
                            "nameLocal": "Malaysia"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2020-02-12T00:10:07.000Z",
                    "audioBibles": []
                },
                {
                    "id": "e4581313051f2861-01",
                    "dblId": "e4581313051f2861",
                    "relatedDbl": null,
                    "name": "Biblica® Open Icelandic Contemporary New Testament and Psalms",
                    "nameLocal": "Biblica® Opna Nýja testamentið og Sálmarnir endursagðir á daglegu máli",
                    "abbreviation": "OLO",
                    "abbreviationLocal": "OLO",
                    "description": "Protestant NT and Psalms",
                    "descriptionLocal": "Protestant NT and Psalms",
                    "language": {
                        "id": "isl",
                        "name": "Icelandic",
                        "nameLocal": "Íslenska",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "IS",
                            "name": "Iceland",
                            "nameLocal": "Iceland"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2023-03-03T09:17:44.000Z",
                    "audioBibles": []
                },
                {
                    "id": "41f25b97f468e10b-01",
                    "dblId": "41f25b97f468e10b",
                    "relatedDbl": null,
                    "name": "Diodati Bible 1885",
                    "nameLocal": "Diodati Bibbia 1885",
                    "abbreviation": "DB1885",
                    "abbreviationLocal": "DB1885",
                    "description": "Diodati Bible 1885",
                    "descriptionLocal": "Diodati Bibbia 1885",
                    "language": {
                        "id": "ita",
                        "name": "Italian",
                        "nameLocal": "Italiano",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "IT",
                            "name": "Italy",
                            "nameLocal": "Italy"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-01-06T19:43:52.000Z",
                    "audioBibles": []
                },
                {
                    "id": "0aaff251e76ae6ba-01",
                    "dblId": "0aaff251e76ae6ba",
                    "relatedDbl": null,
                    "name": "The New Testament in Juray Soura Language",
                    "nameLocal": "ଆଜାଡ଼ି ତଙରନ୍‌, ରଙ୍‌ ଅନଗଡନ୍‌",
                    "abbreviation": "NTJaa20",
                    "abbreviationLocal": "NTJaa20",
                    "description": "The New Testament in Juray Soura Language",
                    "descriptionLocal": "ଆଜାଡ଼ି ତଙରନ୍‌, ରଙ୍‌ ଅନଗଡନ୍‌, 2020",
                    "language": {
                        "id": "juy",
                        "name": "Juray",
                        "nameLocal": "Juray",
                        "script": "Oriya",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "IN",
                            "name": "India",
                            "nameLocal": "India"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-01-07T05:06:21.000Z",
                    "audioBibles": []
                },
                {
                    "id": "08389f036844c2de-01",
                    "dblId": "08389f036844c2de",
                    "relatedDbl": null,
                    "name": "Biblica® Open Kannada Contemporary Version 2022",
                    "nameLocal": "Biblica® ಉಚಿತ ಕನ್ನಡ ಸಮಕಾಲಿಕ ಭಾಷಾಂತರ™",
                    "abbreviation": "OKCV",
                    "abbreviationLocal": "OKCV",
                    "description": "Holy Bible",
                    "descriptionLocal": "ಪವಿತ್ರ ವೇದ",
                    "language": {
                        "id": "kan",
                        "name": "Kannada",
                        "nameLocal": "ಕನ್ನಡ",
                        "script": "Kannada",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "IN",
                            "name": "India",
                            "nameLocal": "India"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2023-02-25T09:09:04.000Z",
                    "audioBibles": [
                        {
                            "id": "850cc50e70574aba-01",
                            "name": "Biblica® Open Kannada Contemporary Version, Audio Edition",
                            "nameLocal": "Biblica® ಉಚಿತ ಕನ್ನಡ ಸಮಕಾಲಿಕ ಭಾಷಾಂತರ, ಆಡಿಯೋ ಆವೃತ್ತಿ",
                            "dblId": "850cc50e70574aba"
                        }
                    ]
                },
                {
                    "id": "a33a100f04f2752e-01",
                    "dblId": "a33a100f04f2752e",
                    "relatedDbl": null,
                    "name": "Indian Revised Version (IRV) Kannada - 2019",
                    "nameLocal": "ಇಂಡಿಯನ್ ರಿವೈಜ್ಡ್ ವರ್ಸನ್ (IRV) - ಕನ್ನಡ - 2019",
                    "abbreviation": "IRVKan",
                    "abbreviationLocal": "IRVKan",
                    "description": "Bible for all",
                    "descriptionLocal": "Bible for all",
                    "language": {
                        "id": "kan",
                        "name": "Kannada",
                        "nameLocal": "ಕನ್ನಡ",
                        "script": "Kannada",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "IN",
                            "name": "India",
                            "nameLocal": "India"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-09-21T22:51:24.000Z",
                    "audioBibles": [
                        {
                            "id": "c6889eadbbc14852-01",
                            "name": "Kannada Indian Revised Version (IRV)",
                            "nameLocal": "Kannada Indian Revised Version (IRV)",
                            "dblId": "c6889eadbbc14852"
                        }
                    ]
                },
                {
                    "id": "3a5dafd48a13c6d9-01",
                    "dblId": "3a5dafd48a13c6d9",
                    "relatedDbl": null,
                    "name": "Kamano-Kafe Bible [kbq]",
                    "nameLocal": "Anumzamofo Routage Avantafere",
                    "abbreviation": "kbq",
                    "abbreviationLocal": "KBQ",
                    "description": "common",
                    "descriptionLocal": "common",
                    "language": {
                        "id": "kbq",
                        "name": "Kamano",
                        "nameLocal": "Kamano",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "PG",
                            "name": "Papua New Guinea",
                            "nameLocal": "Papua New Guinea"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2023-01-12T09:10:09.000Z",
                    "audioBibles": []
                },
                {
                    "id": "913473cd3c600aa8-02",
                    "dblId": "913473cd3c600aa8",
                    "relatedDbl": null,
                    "name": "Khanty Bible Translation",
                    "nameLocal": "Хӑнты Перевод Библии",
                    "abbreviation": "KhPB",
                    "abbreviationLocal": "ХБ",
                    "description": "Khanty Bible",
                    "descriptionLocal": "Библия на хӑнты языке",
                    "language": {
                        "id": "kca",
                        "name": "Khanty",
                        "nameLocal": "Khanty",
                        "script": "Cyrillic",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "RU",
                            "name": "Russian Federation",
                            "nameLocal": "Russian Federation"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-01-07T10:40:57.000Z",
                    "audioBibles": [
                        {
                            "id": "00cf583a7b334bb5-01",
                            "name": "Khanty Bible - Luk & Act",
                            "nameLocal": "Хӑнты Перевод Библии",
                            "dblId": "00cf583a7b334bb5"
                        }
                    ]
                },
                {
                    "id": "9d19c0063d291d7b-03",
                    "dblId": "9d19c0063d291d7b",
                    "relatedDbl": null,
                    "name": "The Bible in Kutu",
                    "nameLocal": "Biblia Kikutu",
                    "abbreviation": "Kutu",
                    "abbreviationLocal": "King'hutu",
                    "description": null,
                    "descriptionLocal": null,
                    "language": {
                        "id": "kdc",
                        "name": "Kutu",
                        "nameLocal": "King'hutu",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "TZ",
                            "name": "Tanzania, United Republic of",
                            "nameLocal": "Tanzania, United Republic of"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2023-01-07T09:13:37.000Z",
                    "audioBibles": []
                },
                {
                    "id": "f2f349d77ac8f8bc-01",
                    "dblId": "f2f349d77ac8f8bc",
                    "relatedDbl": null,
                    "name": "The New Testament in Kutu",
                    "nameLocal": "Lagano da Sambi kwa Wanhu Wose",
                    "abbreviation": "Kutu",
                    "abbreviationLocal": "Kutu",
                    "description": "New Testament",
                    "descriptionLocal": "Kutu",
                    "language": {
                        "id": "kdc",
                        "name": "Kutu",
                        "nameLocal": "Kutu",
                        "script": "Roman",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "TZ",
                            "name": "Tanzania",
                            "nameLocal": "Tanzania"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-01-07T16:14:20.000Z",
                    "audioBibles": []
                },
                {
                    "id": "c11c93a0b8a04496-01",
                    "dblId": "c11c93a0b8a04496",
                    "relatedDbl": null,
                    "name": "The Bible in Makonde",
                    "nameLocal": "Bibiliya ya Chimakonde",
                    "abbreviation": "Makonde",
                    "abbreviationLocal": "Chimakonde",
                    "description": "NT and OT books",
                    "descriptionLocal": "Chimakonde",
                    "language": {
                        "id": "kde",
                        "name": "Makonde",
                        "nameLocal": "Shimakonde",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "TZ",
                            "name": "Tanzania, United Republic of",
                            "nameLocal": "Tanzania, United Republic of"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-09-21T23:30:40.000Z",
                    "audioBibles": []
                },
                {
                    "id": "16fb881ce1e27a60-01",
                    "dblId": "16fb881ce1e27a60",
                    "relatedDbl": null,
                    "name": "The New Testament in Konda Porja Language",
                    "nameLocal": "ମାପୁରୁଦି ସତ୍‌ ବାକ୍ୟ, ପୁନି ନିୟମ୍‌",
                    "abbreviation": "NTKoo20",
                    "abbreviationLocal": "NTKoo20",
                    "description": "The New Testament in Konda Porja Language, 2020",
                    "descriptionLocal": "ମାପୁରୁଦି ସତ୍‌ ବାକ୍ୟ, ପୁନି ନିୟମ୍‌, 2020",
                    "language": {
                        "id": "kfc",
                        "name": "Konda-Dora",
                        "nameLocal": "Konda-Dora",
                        "script": "Oriya",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "IN",
                            "name": "India",
                            "nameLocal": "India"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-01-07T05:36:50.000Z",
                    "audioBibles": []
                },
                {
                    "id": "0d5605ba6bf41754-01",
                    "dblId": "0d5605ba6bf41754",
                    "relatedDbl": null,
                    "name": "The New Testament in Koya Language",
                    "nameLocal": "ପୁନାଦ୍ ଆର୍ର୍, ପୁନାଦ୍‍ ନିୟମ୍‍",
                    "abbreviation": "NTKaa20",
                    "abbreviationLocal": "NTKaa20",
                    "description": "The New Testament in Koya Language, 2020",
                    "descriptionLocal": "ପୁନାଦ୍ ଆର୍ର୍, ପୁନାଦ୍‍ ନିୟମ୍‍, 2020",
                    "language": {
                        "id": "kff",
                        "name": "Koya",
                        "nameLocal": "Koya",
                        "script": "Oriya",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "IN",
                            "name": "India",
                            "nameLocal": "India"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-01-07T05:12:58.000Z",
                    "audioBibles": []
                },
                {
                    "id": "f258cb39615c351d-01",
                    "dblId": "f258cb39615c351d",
                    "relatedDbl": null,
                    "name": "Kharam New Testament",
                    "nameLocal": "Bible Inzootna Kathar",
                    "abbreviation": "KHMNT",
                    "abbreviationLocal": "KHMNT",
                    "description": "Kharam New Testament 2021",
                    "descriptionLocal": "Bible Inzootna Kathar",
                    "language": {
                        "id": "kfw",
                        "name": "Naga, Kharam",
                        "nameLocal": "Naga, Kharam",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "IN",
                            "name": "India",
                            "nameLocal": "India"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2023-04-05T21:20:34.000Z",
                    "audioBibles": []
                },
                {
                    "id": "be8dc4ba39edf911-01",
                    "dblId": "be8dc4ba39edf911",
                    "relatedDbl": null,
                    "name": "Biblica® Open Kikuyu Holy Word of God 2013",
                    "nameLocal": "Biblica® Kiugo Gĩtheru Kĩa Ngai Kĩhingũre 2013",
                    "abbreviation": "OKGN",
                    "abbreviationLocal": "KGNK",
                    "description": "Holy Bible in Gĩkũyũ",
                    "descriptionLocal": "Kiugo Gĩtheru Kĩa Ngai",
                    "language": {
                        "id": "kik",
                        "name": "Gikuyu",
                        "nameLocal": "Gikuyu",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "KE",
                            "name": "Kenya",
                            "nameLocal": "Kenya"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-01-12T09:16:55.000Z",
                    "audioBibles": [
                        {
                            "id": "065f947de1613d3d-01",
                            "name": "Biblica® Open Gikuyu Holy Word of God™, Audio Edition",
                            "nameLocal": "Biblica® Kiugo Gĩtheru Kĩa Ngai Kĩhingũre™, Gĩthometwo na Mũgambo",
                            "dblId": "065f947de1613d3d"
                        }
                    ]
                },
                {
                    "id": "6dbbf2ccbe27d28b-01",
                    "dblId": "6dbbf2ccbe27d28b",
                    "relatedDbl": null,
                    "name": "Kosraean Bible",
                    "nameLocal": "BIBLE MUTAL",
                    "abbreviation": "kos",
                    "abbreviationLocal": "KOS",
                    "description": "common",
                    "descriptionLocal": "common",
                    "language": {
                        "id": "kos",
                        "name": "Kosraean",
                        "nameLocal": "Kosraean",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "FM",
                            "name": "Micronesia, Federated States of",
                            "nameLocal": "Micronesia, Federated States of"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2024-02-09T09:17:40.000Z",
                    "audioBibles": []
                },
                {
                    "id": "df7d5d71526afe9e-01",
                    "dblId": "df7d5d71526afe9e",
                    "relatedDbl": null,
                    "name": "Kapingamarangi Bible",
                    "nameLocal": "Beebaa Dabu",
                    "abbreviation": "kpg",
                    "abbreviationLocal": "KPG",
                    "description": "Common",
                    "descriptionLocal": "Common",
                    "language": {
                        "id": "kpg",
                        "name": "Kapingamarangi",
                        "nameLocal": "Kapingamarangi",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "FM",
                            "name": "Micronesia, Federated States of",
                            "nameLocal": "Micronesia, Federated States of"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-09-22T00:07:01.000Z",
                    "audioBibles": []
                },
                {
                    "id": "5591cba5ae063228-01",
                    "dblId": "5591cba5ae063228",
                    "relatedDbl": null,
                    "name": "Mum Language NT Portions",
                    "nameLocal": "Mum Tok Ples",
                    "abbreviation": "MumNP18",
                    "abbreviationLocal": "MumNP18",
                    "description": "Mum Matthew",
                    "descriptionLocal": "Mum Matyu",
                    "language": {
                        "id": "kqa",
                        "name": "Mum",
                        "nameLocal": "Mum",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "PG",
                            "name": "Papua New Guinea",
                            "nameLocal": "Papua New Guinea"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-09-21T20:34:34.000Z",
                    "audioBibles": []
                },
                {
                    "id": "6aa52b968434d882-01",
                    "dblId": "6aa52b968434d882",
                    "relatedDbl": null,
                    "name": "The Book of Mark - Kianying Balang",
                    "nameLocal": "Mak - Kiañiŋ Balaŋ",
                    "abbreviation": "KBNT",
                    "abbreviationLocal": "KBNT",
                    "description": "Gospel of Mark",
                    "descriptionLocal": "Gutnius bilong Mak",
                    "language": {
                        "id": "kql",
                        "name": "Kyenele",
                        "nameLocal": "Kiañiŋ Balaŋ",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "PG",
                            "name": "Papua New Guinea",
                            "nameLocal": "Papua New Guinea"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-09-21T21:34:37.000Z",
                    "audioBibles": []
                },
                {
                    "id": "8f4e6c5be17e7e8c-01",
                    "dblId": "8f4e6c5be17e7e8c",
                    "relatedDbl": null,
                    "name": "The New Testament in Kuvi Language",
                    "nameLocal": "ପୁଃନି ମେ଼ରା, କୁୱି ପୁଃନି ମେ଼ରା",
                    "abbreviation": "NTKii20",
                    "abbreviationLocal": "NTKii20",
                    "description": "The New Testament in Kuvi Language, 2020",
                    "descriptionLocal": "ପୁଃନି ମେ଼ରା, କୁୱି ପୁଃନି ମେ଼ରା, 2020",
                    "language": {
                        "id": "kxv",
                        "name": "Kuvi",
                        "nameLocal": "Kuvi",
                        "script": "Oriya",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "IN",
                            "name": "India",
                            "nameLocal": "India"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2023-12-14T21:21:26.000Z",
                    "audioBibles": []
                },
                {
                    "id": "ab8b84930a5ebb89-01",
                    "dblId": "ab8b84930a5ebb89",
                    "relatedDbl": null,
                    "name": "The New Testament in Lodhi language",
                    "nameLocal": "परमेश्वर को सच्चो वचन , नयो नियम,",
                    "abbreviation": "NTLii20",
                    "abbreviationLocal": "NTLii20",
                    "description": "The New Testament in Lodhi language",
                    "descriptionLocal": "परमेश्वर को सच्चो वचन , नयो नियम,",
                    "language": {
                        "id": "lbm",
                        "name": "Lodhi",
                        "nameLocal": "Lodhi",
                        "script": "Devanagari",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "IN",
                            "name": "India",
                            "nameLocal": "India"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-01-07T12:11:09.000Z",
                    "audioBibles": []
                },
                {
                    "id": "ac6b6b7cd1e93057-01",
                    "dblId": "ac6b6b7cd1e93057",
                    "relatedDbl": null,
                    "name": "Biblica® Open Lingala Contemporary Bible 2020",
                    "nameLocal": "Biblica® Salela na bonsomi Mokanda na Bomoi",
                    "abbreviation": "OLCV",
                    "abbreviationLocal": "SMNB",
                    "description": "Holy Bible",
                    "descriptionLocal": "Boyokani ya Kala mpe Boyokani ya Sika",
                    "language": {
                        "id": "lin",
                        "name": "Lingala",
                        "nameLocal": "Lingála",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "CD",
                            "name": "Congo, the Democratic Republic of the",
                            "nameLocal": "Congo, the Democratic Republic of the"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-05-03T22:06:10.000Z",
                    "audioBibles": [
                        {
                            "id": "6fdd664c807642d3-01",
                            "name": "Biblica® Open Lingala Contemporary Bible™, Audio Edition",
                            "nameLocal": "Biblica® Salela na bonsomi Mokanda na Bomoi™, Ebongisami na maloba",
                            "dblId": "6fdd664c807642d3"
                        }
                    ]
                },
                {
                    "id": "c6f92d2fda34d59d-01",
                    "dblId": "c6f92d2fda34d59d",
                    "relatedDbl": null,
                    "name": "Biblica® Open Lithuanian Luke-Acts",
                    "nameLocal": "Biblica® Naudojimo teisės atviros „Jėzus ir Jo pasekėjai“",
                    "abbreviation": "OJJP",
                    "abbreviationLocal": "OJJP",
                    "description": "Protestant Luke-Acts",
                    "descriptionLocal": "Protestant Luke-Acts",
                    "language": {
                        "id": "lit",
                        "name": "Lithuanian",
                        "nameLocal": "Lietuvių",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "LT",
                            "name": "Lithuania",
                            "nameLocal": "Lithuania"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2024-01-25T09:26:06.000Z",
                    "audioBibles": []
                },
                {
                    "id": "f276be3571f516cb-01",
                    "dblId": "f276be3571f516cb",
                    "relatedDbl": null,
                    "name": "Biblica® Open Luganda Contemporary Bible 2014",
                    "nameLocal": "Biblica® Bayibuli Entukuvu, Endagaano Enkadde nʼEndagaano Empya ekwatiddwa ku katambi™",
                    "abbreviation": "OLCB",
                    "abbreviationLocal": "EEEE",
                    "description": "The Holy Bible",
                    "descriptionLocal": "Bayibuli Entukuvu",
                    "language": {
                        "id": "lug",
                        "name": "Ganda",
                        "nameLocal": "Luganda",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "UG",
                            "name": "Uganda",
                            "nameLocal": "Uganda"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-01-12T09:19:45.000Z",
                    "audioBibles": [
                        {
                            "id": "14b06ff3b2cf5e97-01",
                            "name": "Biblica® Open Luganda Contemporary Bible™, Audio Edition",
                            "nameLocal": "Biblica® Bayibuli Entukuvu, Endagaano Enkadde nʼEndagaano Empya ekwatiddwa ku katambi™, Audio Edition",
                            "dblId": "14b06ff3b2cf5e97"
                        }
                    ]
                },
                {
                    "id": "4d4df8722134c5ee-01",
                    "dblId": "4d4df8722134c5ee",
                    "relatedDbl": null,
                    "name": "Biblica® Open New Luo Translation 2020",
                    "nameLocal": "Biblica® Ochiw Thuolo Motingʼo Loko Manyien",
                    "abbreviation": "ONLT",
                    "abbreviationLocal": "OMLM",
                    "description": "Bible",
                    "descriptionLocal": "Muma Maler Mar Nyasaye",
                    "language": {
                        "id": "luo",
                        "name": "Dholuo",
                        "nameLocal": "Dholuo",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "KE",
                            "name": "Kenya",
                            "nameLocal": "Kenya"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-01-07T17:52:15.000Z",
                    "audioBibles": [
                        {
                            "id": "5d1902ecdf5349d3-01",
                            "name": "Biblica® Open New Luo Translation™, Audio Edition",
                            "nameLocal": "Biblica® Ochiw Thuolo Motingʼo Loko Manyien™, Audio Edition",
                            "dblId": "5d1902ecdf5349d3"
                        }
                    ]
                },
                {
                    "id": "de295e9ba65f6d0f-01",
                    "dblId": "de295e9ba65f6d0f",
                    "relatedDbl": null,
                    "name": "Biblica® Open Malayalam Contemporary Version 2020",
                    "nameLocal": "Biblica® സമകാലിക മലയാള സ്വതന്ത്ര വിവർത്തനം 2020",
                    "abbreviation": "OMCV",
                    "abbreviationLocal": "OMCV",
                    "description": "Holy Bible",
                    "descriptionLocal": "വിശുദ്ധ ബൈബിൾ",
                    "language": {
                        "id": "mal",
                        "name": "Malayalam",
                        "nameLocal": "മലയാളം",
                        "script": "Malayalam",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "IN",
                            "name": "India",
                            "nameLocal": "India"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-09-22T00:02:21.000Z",
                    "audioBibles": [
                        {
                            "id": "4496fa3731f54ccd-01",
                            "name": "Biblica® Open Malayalam Contemporary Version™, Audio Edition",
                            "nameLocal": "Biblica® സമകാലിക മലയാളവിവർത്തനം-സ്വതന്ത്ര ഉപലബ്ധി ™, ഓഡിയോ പതിപ്പ്",
                            "dblId": "4496fa3731f54ccd"
                        }
                    ]
                },
                {
                    "id": "3ea0147e32eebe47-01",
                    "dblId": "3ea0147e32eebe47",
                    "relatedDbl": null,
                    "name": "Indian Revised Version (IRV) Malayalam - 2019",
                    "nameLocal": "ഇന്ത്യൻ റിവൈസ്ഡ് വേർഷൻ - മലയാളം",
                    "abbreviation": "IRVMAL",
                    "abbreviationLocal": "IRVMAL",
                    "description": "Whole Bible",
                    "descriptionLocal": "Whole Bible",
                    "language": {
                        "id": "mal",
                        "name": "Malayalam",
                        "nameLocal": "മലയാളം",
                        "script": "Malayalam",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "IN",
                            "name": "India",
                            "nameLocal": "India"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-07-08T15:30:41.000Z",
                    "audioBibles": [
                        {
                            "id": "57e37c60c3a94d4f-01",
                            "name": "Malayalam Indian Revised Version (IRV)",
                            "nameLocal": "Malayalam Indian Revised Version (IRV)",
                            "dblId": "57e37c60c3a94d4f"
                        }
                    ]
                },
                {
                    "id": "805e795e07fb9422-01",
                    "dblId": "805e795e07fb9422",
                    "relatedDbl": null,
                    "name": "Malayalam Sathyavedapusthakam 1910 Edition (Revised Orthography)",
                    "nameLocal": "മലയാളം സത്യവേദപുസ്തകം 1910 പതിപ്പ് (പരിഷ്കരിച്ച ലിപിയിൽ)",
                    "abbreviation": "MAL10RO",
                    "abbreviationLocal": "വേദപുസ്തകം",
                    "description": "Protestant Bible",
                    "descriptionLocal": "പ്രൊട്ടസ്റ്റൻ്റ് വേദപുസ്തകം",
                    "language": {
                        "id": "mal",
                        "name": "Malayalam",
                        "nameLocal": "മലയാളം",
                        "script": "Malayalam",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "IN",
                            "name": "India",
                            "nameLocal": "India"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2024-02-08T21:39:57.000Z",
                    "audioBibles": [
                        {
                            "id": "5ac60e8e8a74417a-01",
                            "name": "Malayalam Bible (മലയാളം സത്യവേദപുസ്തകം), Binoy Chacko Audio Bible",
                            "nameLocal": "Malayalam Bible (മലയാളം സത്യവേദപുസ്തകം), Binoy Chacko Audio Bible",
                            "dblId": "5ac60e8e8a74417a"
                        }
                    ]
                },
                {
                    "id": "8c49129a458d4059-01",
                    "dblId": "8c49129a458d4059",
                    "relatedDbl": null,
                    "name": "Indian Revised Version (IRV) - Marathi",
                    "nameLocal": "इंडियन रीवाइज्ड वर्जन (IRV) - मराठी",
                    "abbreviation": "IRVMar",
                    "abbreviationLocal": "IRVMar",
                    "description": "Marathi Protestant Bible",
                    "descriptionLocal": "मराठी प्रोटेस्टंट बायबल",
                    "language": {
                        "id": "mar",
                        "name": "Marathi",
                        "nameLocal": "मराठी",
                        "script": "Devanagari",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "IN",
                            "name": "India",
                            "nameLocal": "India"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-09-21T22:19:13.000Z",
                    "audioBibles": [
                        {
                            "id": "ec1e42889cad4316-01",
                            "name": "Marathi Indian Revised Version (IRV)",
                            "nameLocal": "Marathi Indian Revised Version (IRV)",
                            "dblId": "ec1e42889cad4316"
                        }
                    ]
                },
                {
                    "id": "385573d4ba3ff72a-01",
                    "dblId": "385573d4ba3ff72a",
                    "relatedDbl": null,
                    "name": "Maale Bible",
                    "nameLocal": "ጌኤዦ ማፃኣፖ",
                    "abbreviation": "MB",
                    "abbreviationLocal": "ጌኤ.ማፃ",
                    "description": "The Bible in Maale",
                    "descriptionLocal": "ጌኤዦ ማፃኣፖ",
                    "language": {
                        "id": "mdy",
                        "name": "Male",
                        "nameLocal": "Male",
                        "script": "Ethiopic",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "ET",
                            "name": "Ethiopia",
                            "nameLocal": "Ethiopia"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-12-02T00:09:55.000Z",
                    "audioBibles": []
                },
                {
                    "id": "bed82ba57f117c16-01",
                    "dblId": "bed82ba57f117c16",
                    "relatedDbl": null,
                    "name": "Maale New Testament",
                    "nameLocal": "Maale New Testament",
                    "abbreviation": "MNT",
                    "abbreviationLocal": "MNT",
                    "description": "New Testament",
                    "descriptionLocal": "New Testament",
                    "language": {
                        "id": "mdy",
                        "name": "Male (Ethiopia)",
                        "nameLocal": "Male (Ethiopia)",
                        "script": "Ethiopic",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "ET",
                            "name": "Ethiopia",
                            "nameLocal": "Ethiopia"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-01-07T00:06:32.000Z",
                    "audioBibles": []
                },
                {
                    "id": "abf017938be72f46-01",
                    "dblId": "abf017938be72f46",
                    "relatedDbl": null,
                    "name": "Morokodo",
                    "nameLocal": "Morokodo",
                    "abbreviation": "MKD",
                    "abbreviationLocal": "MKD",
                    "description": "Portion of Morokodo",
                    "descriptionLocal": "Portion of Morokodo",
                    "language": {
                        "id": "mgc",
                        "name": "Morokodo",
                        "nameLocal": "Morokodo",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "SS",
                            "name": "South Sudan",
                            "nameLocal": "South Sudan"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-01-07T12:12:00.000Z",
                    "audioBibles": []
                },
                {
                    "id": "b5105cd03c972046-01",
                    "dblId": "b5105cd03c972046",
                    "relatedDbl": null,
                    "name": "Makua New Testament",
                    "nameLocal": "Makua New Testament",
                    "abbreviation": "MNT",
                    "abbreviationLocal": "MNT",
                    "description": "Makua New Testament 2015",
                    "descriptionLocal": "Makua New Testament 2015",
                    "language": {
                        "id": "mgh",
                        "name": "Makhuwa-Meetto",
                        "nameLocal": "Makua",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "TZ",
                            "name": "Tanzania",
                            "nameLocal": "Tanzania"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-01-07T12:46:32.000Z",
                    "audioBibles": []
                },
                {
                    "id": "f638e44feb77f803-01",
                    "dblId": "f638e44feb77f803",
                    "relatedDbl": null,
                    "name": "New Testament in Matumbi",
                    "nameLocal": "Matumbi is Lilaganu Lyayambi’",
                    "abbreviation": "Matumbi",
                    "abbreviationLocal": "Matumbi",
                    "description": "New Testament in Matumbi",
                    "descriptionLocal": "Matumbi is Lilaganu Lyayambi’",
                    "language": {
                        "id": "mgw",
                        "name": "Matumbi",
                        "nameLocal": "Kimatu'mbi'",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "TZ",
                            "name": "Tanzania, United Republic of",
                            "nameLocal": "Tanzania, United Republic of"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-09-22T00:37:54.000Z",
                    "audioBibles": []
                },
                {
                    "id": "e3cd1d240c384e91-01",
                    "dblId": "e3cd1d240c384e91",
                    "relatedDbl": null,
                    "name": "Meitei New Testament (Roman Script)",
                    "nameLocal": "Anouba Warepnaba (Roman Script)",
                    "abbreviation": "RSM",
                    "abbreviationLocal": "RSM",
                    "description": "Meitei New Testament Written in Roman Script",
                    "descriptionLocal": "Roman Script ta iba Anouba Warepnaba Lairik",
                    "language": {
                        "id": "mni",
                        "name": "Meitei",
                        "nameLocal": "Meitei",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "IN",
                            "name": "India",
                            "nameLocal": "India"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-03-22T15:30:47.000Z",
                    "audioBibles": []
                },
                {
                    "id": "4ffcec8e8f3c33e7-01",
                    "dblId": "4ffcec8e8f3c33e7",
                    "relatedDbl": null,
                    "name": "God's Holy Book in Sankaran",
                    "nameLocal": "Alla la Kitabu Seniman",
                    "abbreviation": "GHBS",
                    "abbreviationLocal": "AKS",
                    "description": "Portions of the Old and New Testaments",
                    "descriptionLocal": "Portions of the Old and New Testaments",
                    "language": {
                        "id": "msc",
                        "name": "Maninka, Sankaran",
                        "nameLocal": "Sankaran",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "GN",
                            "name": "Guinea",
                            "nameLocal": "Guinea"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-12-02T00:18:01.000Z",
                    "audioBibles": []
                },
                {
                    "id": "5e51f89e89947acb-01",
                    "dblId": "5e51f89e89947acb",
                    "relatedDbl": null,
                    "name": "Aruamu New Testament",
                    "nameLocal": "Godɨn Akar Aghuim; Akar Dɨkɨrɨzir Gavgavir Igiam",
                    "abbreviation": "AruNT04",
                    "abbreviationLocal": "AruNT04",
                    "description": "Aruamu New Testament",
                    "descriptionLocal": "Aruamu New Testament",
                    "language": {
                        "id": "msy",
                        "name": "Aruamu",
                        "nameLocal": "Aruamu",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "PG",
                            "name": "Papua New Guinea",
                            "nameLocal": "Papua New Guinea"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-09-21T21:20:01.000Z",
                    "audioBibles": []
                },
                {
                    "id": "98adf0b796dc9ff4-01",
                    "dblId": "98adf0b796dc9ff4",
                    "relatedDbl": null,
                    "name": "The Bible in Aruamu: Old Testament and New Testament",
                    "nameLocal": "Godɨn Eghaghanim: Akar Gavgavir Dɨkɨrɨzir Ghurim ko Igiam",
                    "abbreviation": "AruBib20",
                    "abbreviationLocal": "AruBib20",
                    "description": "Protestant",
                    "descriptionLocal": "Protestant",
                    "language": {
                        "id": "msy",
                        "name": "Aruamu",
                        "nameLocal": "Aruamu",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "PG",
                            "name": "Papua New Guinea",
                            "nameLocal": "Papua New Guinea"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-01-26T21:13:27.000Z",
                    "audioBibles": []
                },
                {
                    "id": "ed5744967fe39c8c-01",
                    "dblId": "ed5744967fe39c8c",
                    "relatedDbl": null,
                    "name": "The New Testament in Mwela",
                    "nameLocal": "Malagano ga Ambi",
                    "abbreviation": "Mwela",
                    "abbreviationLocal": "Shimwela",
                    "description": "New Testament",
                    "descriptionLocal": "Malagano ga Ambi",
                    "language": {
                        "id": "mwe",
                        "name": "Mwera",
                        "nameLocal": "Shimwela",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "TZ",
                            "name": "Tanzania, United Republic of",
                            "nameLocal": "Tanzania, United Republic of"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-01-07T15:51:48.000Z",
                    "audioBibles": []
                },
                {
                    "id": "e423bf8faef6643b-01",
                    "dblId": "e423bf8faef6643b",
                    "relatedDbl": null,
                    "name": "Indian Standard Version (ISV) Nagamese",
                    "nameLocal": "Indian Standard Version (ISV) Nagamese",
                    "abbreviation": "ISVNag",
                    "abbreviationLocal": "ISVNag",
                    "description": "Protestant",
                    "descriptionLocal": "Protestant",
                    "language": {
                        "id": "nag",
                        "name": "Naga Pidgin",
                        "nameLocal": "Naga Pidgin",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "IN",
                            "name": "India",
                            "nameLocal": "India"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-07-08T15:02:31.000Z",
                    "audioBibles": [
                        {
                            "id": "eadc03d0a6784691-01",
                            "name": "Nagamese Indian Standard Version (ISV)",
                            "nameLocal": "Nagamese Indian Standard Version (ISV)",
                            "dblId": "eadc03d0a6784691"
                        }
                    ]
                },
                {
                    "id": "0de391111a4cac1e-02",
                    "dblId": "0de391111a4cac1e",
                    "relatedDbl": null,
                    "name": "Ndebele Contemporary Open Bible 2022",
                    "nameLocal": "Biblica® IBhayibhili Elingcwele LesiNdebele Elifinyelelekayo",
                    "abbreviation": "ndOBEN22",
                    "abbreviationLocal": "OBEN",
                    "description": "Protestant",
                    "descriptionLocal": "Protestant",
                    "language": {
                        "id": "nde",
                        "name": "Ndebele",
                        "nameLocal": "isiNdebele",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "ZW",
                            "name": "Zimbabwe",
                            "nameLocal": "Zimbabwe"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2023-06-11T21:09:46.000Z",
                    "audioBibles": [
                        {
                            "id": "2a4137fd54364e6a-01",
                            "name": "Biblica® Open Ndebele Contemporary Bible™, Audio Edition",
                            "nameLocal": "Biblica® Open Ndebele Contemporary Bible™, Audio Edition",
                            "dblId": "2a4137fd54364e6a"
                        }
                    ]
                },
                {
                    "id": "cb0425ae772bb042-01",
                    "dblId": "cb0425ae772bb042",
                    "relatedDbl": null,
                    "name": "The New Testament in Ndamba",
                    "nameLocal": "Lilaghanu lya shonu",
                    "abbreviation": "NdBV",
                    "abbreviationLocal": "NdBV",
                    "description": null,
                    "descriptionLocal": "Ndamba New Testament",
                    "language": {
                        "id": "ndj",
                        "name": "Ndamba",
                        "nameLocal": "Ndamba",
                        "script": "Roman",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "TZ",
                            "name": "Tanzania",
                            "nameLocal": "Tanzania"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-01-07T00:18:50.000Z",
                    "audioBibles": []
                },
                {
                    "id": "324f457845cb5d21-01",
                    "dblId": "324f457845cb5d21",
                    "relatedDbl": null,
                    "name": "Nguu New Testament",
                    "nameLocal": "Ndagano mp'ya kwa wanth'u wose",
                    "abbreviation": "NgBV",
                    "abbreviationLocal": "NgBV",
                    "description": null,
                    "descriptionLocal": "Nguu New Testament",
                    "language": {
                        "id": "ngp",
                        "name": "Nguu",
                        "nameLocal": "Ngulu",
                        "script": "Roman",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "TZ",
                            "name": "Tanzania",
                            "nameLocal": "Tanzania"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-01-06T22:54:40.000Z",
                    "audioBibles": []
                },
                {
                    "id": "312df00520eac624-01",
                    "dblId": "312df00520eac624",
                    "relatedDbl": null,
                    "name": "Takuu New Testament",
                    "nameLocal": "Na Taratara TeAtua i naa taratara Takuu",
                    "abbreviation": "NHO",
                    "abbreviationLocal": "Takuu",
                    "description": "commo",
                    "descriptionLocal": "commo",
                    "language": {
                        "id": "nho",
                        "name": "Takuu",
                        "nameLocal": "Takuu",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "PG",
                            "name": "Papua New Guinea",
                            "nameLocal": "Papua New Guinea"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-09-21T19:57:23.000Z",
                    "audioBibles": []
                },
                {
                    "id": "0672868a4bdc7281-01",
                    "dblId": "0672868a4bdc7281",
                    "relatedDbl": null,
                    "name": "The New Testament in Kolami Language",
                    "nameLocal": "కొత్త కరార్, కరే బాత్కుంఙ్ పావ్",
                    "abbreviation": "NTKP24",
                    "abbreviationLocal": "NTKP24",
                    "description": "The New Testament in Kolami Language",
                    "descriptionLocal": "కొత్త కరార్, కరే బాత్కుంఙ్ పావ్, 2024",
                    "language": {
                        "id": "nit",
                        "name": "Kolami, Southeastern",
                        "nameLocal": "Kolami, Southeastern",
                        "script": "Telugu",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "IN",
                            "name": "India",
                            "nameLocal": "India"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2024-01-11T09:12:26.000Z",
                    "audioBibles": []
                },
                {
                    "id": "ead7b4cc5007389c-01",
                    "dblId": "ead7b4cc5007389c",
                    "relatedDbl": null,
                    "name": "Dutch Bible 1939",
                    "nameLocal": "De Heilige Schrift, Petrus Canisiusvertaling, 1939",
                    "abbreviation": "nld1939",
                    "abbreviationLocal": "NLD1939",
                    "description": "Catholic",
                    "descriptionLocal": "Katholiek",
                    "language": {
                        "id": "nld",
                        "name": "Dutch",
                        "nameLocal": "Nederlands",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "NL",
                            "name": "Netherlands",
                            "nameLocal": "Netherlands"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-01-07T15:44:16.000Z",
                    "audioBibles": []
                },
                {
                    "id": "604771cc77d9136d-01",
                    "dblId": "604771cc77d9136d",
                    "relatedDbl": null,
                    "name": "The New Testament in Nahali Language",
                    "nameLocal": "खेरलो वचन नोवालो नियम",
                    "abbreviation": "NTNii2020",
                    "abbreviationLocal": "NTNii2020",
                    "description": "The New Testament in Nahali Language, 2020",
                    "descriptionLocal": "खेरलो वचन, नोवालो नियम, 2020",
                    "language": {
                        "id": "nlx",
                        "name": "Nahali",
                        "nameLocal": "Nahali",
                        "script": "Devanagari",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "IN",
                            "name": "India",
                            "nameLocal": "India"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-01-07T08:28:13.000Z",
                    "audioBibles": []
                },
                {
                    "id": "31c1130475000445-01",
                    "dblId": "31c1130475000445",
                    "relatedDbl": null,
                    "name": "Ngindo New Testament",
                    "nameLocal": "Ngindo New Testament",
                    "abbreviation": "NNQNT",
                    "abbreviationLocal": "NNQNT",
                    "description": "Ngindo New Testament",
                    "descriptionLocal": "Ngindo New Testament",
                    "language": {
                        "id": "nnq",
                        "name": "Ngindo",
                        "nameLocal": "Ngindo",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "TZ",
                            "name": "Tanzania",
                            "nameLocal": "Tanzania"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-01-07T06:42:35.000Z",
                    "audioBibles": []
                },
                {
                    "id": "246ad95eade0d0a1-01",
                    "dblId": "246ad95eade0d0a1",
                    "relatedDbl": null,
                    "name": "Biblica® Open Norwegian Living New Testament",
                    "nameLocal": "En Levende Bok",
                    "abbreviation": "ONLNT",
                    "abbreviationLocal": "OELB",
                    "description": "New Testament",
                    "descriptionLocal": "Det Nye Testamentet",
                    "language": {
                        "id": "nob",
                        "name": "Norwegian Bokmål",
                        "nameLocal": "Norsk: Bokmål",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "NO",
                            "name": "Norway",
                            "nameLocal": "Norway"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-11-09T22:57:24.000Z",
                    "audioBibles": []
                },
                {
                    "id": "43247c35dbe56e1c-01",
                    "dblId": "43247c35dbe56e1c",
                    "relatedDbl": null,
                    "name": "Biblica® Open God’s Word in Contemporary Chichewa 2016",
                    "nameLocal": "Biblica® Tsekulani Mawu a Mulungu mu Chichewa Chalero",
                    "abbreviation": "OCCL",
                    "abbreviationLocal": "OCCL",
                    "description": "Bible",
                    "descriptionLocal": "Baibulo",
                    "language": {
                        "id": "nya",
                        "name": "Chichewa",
                        "nameLocal": "Chichewa",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "MW",
                            "name": "Malawi",
                            "nameLocal": "Malawi"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-01-12T09:11:14.000Z",
                    "audioBibles": [
                        {
                            "id": "017c80638deecf2a-01",
                            "name": "Biblica® Open Godʼs Word in Contemporary Chichewa™, Audio Edition",
                            "nameLocal": "Biblica® Tsekulani Mawu a Mulungu mu Chichewa Chalero™, Kaseti",
                            "dblId": "017c80638deecf2a"
                        }
                    ]
                },
                {
                    "id": "1f0fb3b67c603710-01",
                    "dblId": "1f0fb3b67c603710",
                    "relatedDbl": null,
                    "name": "Havai Old Testament Selections",
                    "nameLocal": "Waratau Siaga Tatuei mo Vilegi",
                    "abbreviation": "HavOTS",
                    "abbreviationLocal": "WSTmV",
                    "description": "Old Testament panorama  in Havai, with the entire book of Jonah",
                    "descriptionLocal": "Waratau Siaga Tatuei mo vilegi",
                    "language": {
                        "id": "omb",
                        "name": "Ambae, East",
                        "nameLocal": "Ambae, East",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "VU",
                            "name": "Vanuatu",
                            "nameLocal": "Vanuatu"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-07-08T14:55:40.000Z",
                    "audioBibles": []
                },
                {
                    "id": "03e08e889c768aa7-02",
                    "dblId": "03e08e889c768aa7",
                    "relatedDbl": null,
                    "name": "Indian Revised Version(IRV) Odia - NT",
                    "nameLocal": "ଇଣ୍ଡିୟାନ ରିୱାଇସ୍ଡ୍ ୱରସନ୍ ଓଡିଆ -NT",
                    "abbreviation": "IRVOry",
                    "abbreviationLocal": "IRVOry",
                    "description": "Oriya Literal Bible",
                    "descriptionLocal": "Oriya Literal Bible",
                    "language": {
                        "id": "ory",
                        "name": "Oriya",
                        "nameLocal": "ODIA",
                        "script": "Oriya",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "IN",
                            "name": "India",
                            "nameLocal": "India"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-04-13T21:08:58.000Z",
                    "audioBibles": [
                        {
                            "id": "671966b7eac0471b-01",
                            "name": "Odia Indian Revised Version (IRV)",
                            "nameLocal": "Odia Indian Revised Version (IRV)",
                            "dblId": "671966b7eac0471b"
                        }
                    ]
                },
                {
                    "id": "e2588ba61891daa5-01",
                    "dblId": "e2588ba61891daa5",
                    "relatedDbl": null,
                    "name": "Indian Revised Version (IRV) Punjabi - 2019",
                    "nameLocal": "ਇੰਡਿਅਨ ਰਿਵਾਇਜ਼ਡ ਵਰਜ਼ਨ (IRV) - ਪੰਜਾਬੀ",
                    "abbreviation": "IRVPun",
                    "abbreviationLocal": "IRVPun",
                    "description": "Bible for all",
                    "descriptionLocal": "Bible for all",
                    "language": {
                        "id": "pan",
                        "name": "Panjabi, Eastern",
                        "nameLocal": "ਪੰਜਾਬੀ",
                        "script": "Gurmukhi",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "IN",
                            "name": "India",
                            "nameLocal": "India"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-05-03T22:06:10.000Z",
                    "audioBibles": [
                        {
                            "id": "439ac17466ab4ae1-01",
                            "name": "Punjabi Indian Revised Version (IRV)",
                            "nameLocal": "ਇੰਡਿਅਨ ਰਿਵਾਇਜ਼ਡ ਵਰਜ਼ਨ (IRV) - ਪੰਜਾਬੀ",
                            "dblId": "439ac17466ab4ae1"
                        }
                    ]
                },
                {
                    "id": "c3c7dadacb71fb1e-01",
                    "dblId": "c3c7dadacb71fb1e",
                    "relatedDbl": null,
                    "name": "The New Testament in Pengo Language",
                    "nameLocal": "ସତ୍‌ ବଚନ୍‌, ପୁନି ନିୟମ୍‌",
                    "abbreviation": "NTNoo20",
                    "abbreviationLocal": "NTNoo20",
                    "description": "The New Testament in Pengo Language,2020",
                    "descriptionLocal": "ସତ୍‌ ବଚନ୍‌, ପୁନି ନିୟମ୍‌ , 2020",
                    "language": {
                        "id": "peg",
                        "name": "Pengo",
                        "nameLocal": "Pengo",
                        "script": "Oriya",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "IN",
                            "name": "India",
                            "nameLocal": "India"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-01-07T13:28:38.000Z",
                    "audioBibles": []
                },
                {
                    "id": "7cd100148df29c08-01",
                    "dblId": "7cd100148df29c08",
                    "relatedDbl": null,
                    "name": "Biblica® Open Persian Contemporary Bible",
                    "nameLocal": "ترجمۀ معاصر",
                    "abbreviation": "OPCB",
                    "abbreviationLocal": "OPCB",
                    "description": "Holy Bible",
                    "descriptionLocal": "کتاب‌مقدّس",
                    "language": {
                        "id": "pes",
                        "name": "Persian, Iranian",
                        "nameLocal": "فارسی",
                        "script": "Arabic",
                        "scriptDirection": "RTL"
                    },
                    "countries": [
                        {
                            "id": "IR",
                            "name": "Iran, Islamic Republic of",
                            "nameLocal": "Iran, Islamic Republic of"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-12-03T21:10:42.000Z",
                    "audioBibles": []
                },
                {
                    "id": "fbb8b0e1943b417c-01",
                    "dblId": "fbb8b0e1943b417c",
                    "relatedDbl": null,
                    "name": "Biblica® Open Polish Living New Testament 2016",
                    "nameLocal": "Biblica® Słowo Życia, otwarty dostęp 2016",
                    "abbreviation": "OPLNT",
                    "abbreviationLocal": "OPSZ",
                    "description": "The New Testament in easy to understand Polish",
                    "descriptionLocal": "Nowy Testament w łatwo zrozumiałym języku polskim",
                    "language": {
                        "id": "pol",
                        "name": "Polish",
                        "nameLocal": "Polski",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "PL",
                            "name": "Poland",
                            "nameLocal": "Poland"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-01-12T09:20:24.000Z",
                    "audioBibles": [
                        {
                            "id": "380f44ed66bb471b-01",
                            "name": "Biblica® Open Polish Living New Testament Audio Edition",
                            "nameLocal": "Biblica® Słowo Życia, otwarty dostęp™",
                            "dblId": "380f44ed66bb471b"
                        }
                    ]
                },
                {
                    "id": "1c9761e0230da6e0-01",
                    "dblId": "1c9761e0230da6e0",
                    "relatedDbl": null,
                    "name": "Updated Gdansk Bible",
                    "nameLocal": "UWSPÓŁCZEŚNIONA BIBLIA GDAŃSKA",
                    "abbreviation": "polUBG",
                    "abbreviationLocal": "UBG",
                    "description": "Common",
                    "descriptionLocal": "pospolity",
                    "language": {
                        "id": "pol",
                        "name": "Polish",
                        "nameLocal": "Polski",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "PL",
                            "name": "Poland",
                            "nameLocal": "Poland"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-01-07T05:49:52.000Z",
                    "audioBibles": []
                },
                {
                    "id": "4fb78aec8de2b86a-01",
                    "dblId": "4fb78aec8de2b86a",
                    "relatedDbl": null,
                    "name": "Old Pohnpeian Bible",
                    "nameLocal": "Kadede Kap Psam Akan",
                    "abbreviation": "ponPD",
                    "abbreviationLocal": "PONPD",
                    "description": "Common",
                    "descriptionLocal": "Common",
                    "language": {
                        "id": "pon",
                        "name": "Pohnpeian",
                        "nameLocal": "Pohnpeian",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "FM",
                            "name": "Micronesia, Federated States of",
                            "nameLocal": "Micronesia, Federated States of"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2024-03-29T09:18:11.000Z",
                    "audioBibles": []
                },
                {
                    "id": "d63894c8d9a7a503-01",
                    "dblId": "d63894c8d9a7a503",
                    "relatedDbl": null,
                    "name": "Biblia Livre Para Todos",
                    "nameLocal": "Biblia Livre Para Todos",
                    "abbreviation": "BLT",
                    "abbreviationLocal": "BLT",
                    "description": null,
                    "descriptionLocal": null,
                    "language": {
                        "id": "por",
                        "name": "Portuguese",
                        "nameLocal": "Português",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "BR",
                            "name": "Brazil",
                            "nameLocal": "Brazil"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-03-22T14:17:49.000Z",
                    "audioBibles": []
                },
                {
                    "id": "90799bb5b996fddc-01",
                    "dblId": "90799bb5b996fddc",
                    "relatedDbl": null,
                    "name": "Translation for Translators in Brasilian Portuguese",
                    "nameLocal": "Translation for Translators in Brasilian Portuguese",
                    "abbreviation": "TfTP",
                    "abbreviationLocal": "TfTP",
                    "description": "common",
                    "descriptionLocal": "comum",
                    "language": {
                        "id": "por",
                        "name": "Portuguese",
                        "nameLocal": "Português",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "BR",
                            "name": "Brazil",
                            "nameLocal": "Brazil"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-01-07T10:38:46.000Z",
                    "audioBibles": []
                },
                {
                    "id": "355792a03079ccdd-01",
                    "dblId": "355792a03079ccdd",
                    "relatedDbl": null,
                    "name": "The New Testament in Pogoro",
                    "nameLocal": "Lipatanu Lya Syayi Kwa Wantu Woseri",
                    "abbreviation": "PBV",
                    "abbreviationLocal": "PBV",
                    "description": "New Testament",
                    "descriptionLocal": "New Testament",
                    "language": {
                        "id": "poy",
                        "name": "Shipogoro",
                        "nameLocal": "Pogolo",
                        "script": "Roman",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "TZ",
                            "name": "Tanzania",
                            "nameLocal": "Tanzania"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-01-06T22:55:21.000Z",
                    "audioBibles": []
                },
                {
                    "id": "2c42bb3d1b8a3f1c-01",
                    "dblId": "2c42bb3d1b8a3f1c",
                    "relatedDbl": null,
                    "name": "Powari New Testament",
                    "nameLocal": "सत मारग पर चलन वारो किताब",
                    "abbreviation": "NTPSP23",
                    "abbreviationLocal": "NTPSP23",
                    "description": "The New Testament in Powari Language",
                    "descriptionLocal": "सत मारग पर चलन वारो किताब, नवतो करार, 2023",
                    "language": {
                        "id": "pwr",
                        "name": "Powari",
                        "nameLocal": "Powari",
                        "script": "Devanagari",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "IN",
                            "name": "India",
                            "nameLocal": "India"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2023-08-28T09:13:47.000Z",
                    "audioBibles": []
                },
                {
                    "id": "a77409f7cf5be995-01",
                    "dblId": "a77409f7cf5be995",
                    "relatedDbl": null,
                    "name": "Nuevo Testamento K'iche' of Totonicapan",
                    "nameLocal": "RI KꞌAKꞌ TESTAMENTO PA TZIJOBꞌAL KꞌICHEꞌ",
                    "abbreviation": "QUTTOT22",
                    "abbreviationLocal": "K’iche’",
                    "description": null,
                    "descriptionLocal": null,
                    "language": {
                        "id": "quc",
                        "name": "K’iche’",
                        "nameLocal": "K’iche’",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "GT",
                            "name": "Guatemala",
                            "nameLocal": "Guatemala"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2023-02-14T09:14:28.000Z",
                    "audioBibles": []
                },
                {
                    "id": "95d68d324dfb24f2-01",
                    "dblId": "95d68d324dfb24f2",
                    "relatedDbl": null,
                    "name": "Relli New Testament",
                    "nameLocal": "సొత్తొ పురువురొ పవిత్రొ కొత",
                    "abbreviation": "NTRPT23",
                    "abbreviationLocal": "NTRPT23",
                    "description": "సొత్తొ పురువురొ పవిత్రొ కొత, నో నిబందన, 2023",
                    "descriptionLocal": "The New Testament in Relli Language",
                    "language": {
                        "id": "rei",
                        "name": "Reli",
                        "nameLocal": "Reli",
                        "script": "Telugu",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "IN",
                            "name": "India",
                            "nameLocal": "India"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2023-08-28T09:21:22.000Z",
                    "audioBibles": []
                },
                {
                    "id": "41ca884edc327e9c-01",
                    "dblId": "41ca884edc327e9c",
                    "relatedDbl": null,
                    "name": "The New Testament in Rakhine",
                    "nameLocal": "The New Testament in Rakhine",
                    "abbreviation": "RBT",
                    "abbreviationLocal": "RBT",
                    "description": "The New Testament in Rakhine",
                    "descriptionLocal": "The New Testament in Rakhine",
                    "language": {
                        "id": "rki",
                        "name": "Rakhine",
                        "nameLocal": "Rakhine",
                        "script": "Myanmar",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "MM",
                            "name": "Myanmar",
                            "nameLocal": "Myanmar"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2024-02-07T21:16:12.000Z",
                    "audioBibles": []
                },
                {
                    "id": "33ac978af36830fa-02",
                    "dblId": "33ac978af36830fa",
                    "relatedDbl": null,
                    "name": "Carpathian Romani 2021",
                    "nameLocal": "Le Devleskero Lav Andre Romaňi Čhib Slovensko 2021",
                    "abbreviation": "RMC",
                    "abbreviationLocal": "RMC",
                    "description": "The Carpathian Romani Bible. Contains full NT and parts of OT that have been completed. Protestant canon.",
                    "descriptionLocal": "Le Devleskero Lav Andre Romaňi Čhib Slovensko 2021",
                    "language": {
                        "id": "rmc",
                        "name": "Romani, Carpathian",
                        "nameLocal": "Romanes",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "SK",
                            "name": "Slovakia",
                            "nameLocal": "Slovakia"
                        },
                        {
                            "id": "CZ",
                            "name": "Czechia",
                            "nameLocal": "Czechia"
                        },
                        {
                            "id": "UA",
                            "name": "Ukraine",
                            "nameLocal": "Ukraine"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2023-02-21T21:10:25.000Z",
                    "audioBibles": []
                },
                {
                    "id": "e952663db2e91691-01",
                    "dblId": "e952663db2e91691",
                    "relatedDbl": null,
                    "name": "Carpathian Romani Bible",
                    "nameLocal": "Біблія про закарпатцько романо чіб",
                    "abbreviation": "ZRB",
                    "abbreviationLocal": "ЗРБ",
                    "description": "Luke and Acts",
                    "descriptionLocal": "Єванґеліє ле Лукастар і Апостоленґєрі бувті",
                    "language": {
                        "id": "rmc",
                        "name": "Romani, Carpathian",
                        "nameLocal": "Romanes",
                        "script": "Cyrillic",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "UA",
                            "name": "Ukraine",
                            "nameLocal": "Ukraine"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-01-07T15:40:18.000Z",
                    "audioBibles": [
                        {
                            "id": "bb981f5c2d144879-01",
                            "name": "Carpathian Romani Bible",
                            "nameLocal": "Біблія про закарпатцько романо чіб",
                            "dblId": "bb981f5c2d144879"
                        }
                    ]
                },
                {
                    "id": "6c018dd7a342aa63-01",
                    "dblId": "6c018dd7a342aa63",
                    "relatedDbl": null,
                    "name": "Crimean Romani Bible",
                    "nameLocal": "Библия опэр крымски романи чиб",
                    "abbreviation": "KRB",
                    "abbreviationLocal": "КРБ",
                    "description": "Ruth, Jonah Luke, Acts",
                    "descriptionLocal": "О Лошано Габэри катар Лука тай О дилэс э апостоленги",
                    "language": {
                        "id": "rmn",
                        "name": "Romani, Balkan",
                        "nameLocal": "Romani",
                        "script": "Cyrillic",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "UA",
                            "name": "Ukraine",
                            "nameLocal": "Ukraine"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2023-06-27T21:17:32.000Z",
                    "audioBibles": []
                },
                {
                    "id": "0a0927a2e4c58318-01",
                    "dblId": "0a0927a2e4c58318",
                    "relatedDbl": null,
                    "name": "Romani Arli Bible",
                    "nameLocal": "I Biblija ki Arli romani čhib",
                    "abbreviation": "Arli",
                    "abbreviationLocal": "RAB",
                    "description": "New Testament",
                    "descriptionLocal": "Nevo Zavet",
                    "language": {
                        "id": "rmn",
                        "name": "Romani, Balkan",
                        "nameLocal": "Romani",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "RS",
                            "name": "Serbia",
                            "nameLocal": "Serbia"
                        },
                        {
                            "id": "HR",
                            "name": "Croatia",
                            "nameLocal": "Croatia"
                        },
                        {
                            "id": "BA",
                            "name": "Bosnia and Herzegovina",
                            "nameLocal": "Bosnia and Herzegovina"
                        },
                        {
                            "id": "ME",
                            "name": "Montenegro",
                            "nameLocal": "Montenegro"
                        },
                        {
                            "id": "MK",
                            "name": "North Macedonia",
                            "nameLocal": "North Macedonia"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2024-03-21T21:12:53.000Z",
                    "audioBibles": []
                },
                {
                    "id": "65b675fa952d5d27-01",
                    "dblId": "65b675fa952d5d27",
                    "relatedDbl": null,
                    "name": "Bible in Chergash Romani",
                    "nameLocal": "Biblija pe romani čhib",
                    "abbreviation": "Chergash",
                    "abbreviationLocal": "RČB",
                    "description": null,
                    "descriptionLocal": null,
                    "language": {
                        "id": "rmy",
                        "name": "Romani, Vlax",
                        "nameLocal": "Romani",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "RS",
                            "name": "Serbia",
                            "nameLocal": "Serbia"
                        },
                        {
                            "id": "HR",
                            "name": "Croatia",
                            "nameLocal": "Croatia"
                        },
                        {
                            "id": "BA",
                            "name": "Bosnia and Herzegovina",
                            "nameLocal": "Bosnia and Herzegovina"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2024-03-29T21:18:08.000Z",
                    "audioBibles": []
                },
                {
                    "id": "f6c04124034a114e-01",
                    "dblId": "f6c04124034a114e",
                    "relatedDbl": null,
                    "name": "Lovary Romany Bible",
                    "nameLocal": "Библия пэ ловарицко романы щиб",
                    "abbreviation": "LRB",
                    "abbreviationLocal": "ЛРБ",
                    "description": "Ruth and Jonah",
                    "descriptionLocal": "Евангелие катар о Лука ай Апостолонгэ кэримата",
                    "language": {
                        "id": "rmy",
                        "name": "Romani, Vlax",
                        "nameLocal": "Romani",
                        "script": "Cyrillic",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "UA",
                            "name": "Ukraine",
                            "nameLocal": "Ukraine"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2023-07-25T21:23:39.000Z",
                    "audioBibles": []
                },
                {
                    "id": "5611c12a3dafb263-01",
                    "dblId": "5611c12a3dafb263",
                    "relatedDbl": null,
                    "name": "Servi Romani Bible",
                    "nameLocal": "Библия пы сэрвицко ромско чиб",
                    "abbreviation": "SRB",
                    "abbreviationLocal": "СРБ",
                    "description": "Ruth, Jonah, Luke, Acts",
                    "descriptionLocal": "Евангелие  Лукастар тай Бути апостолэнгири",
                    "language": {
                        "id": "rmy",
                        "name": "Romani, Vlax",
                        "nameLocal": "Romani",
                        "script": "Cyrillic",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "UA",
                            "name": "Ukraine",
                            "nameLocal": "Ukraine"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2023-06-27T21:15:46.000Z",
                    "audioBibles": []
                },
                {
                    "id": "494329fa9b8f2892-01",
                    "dblId": "494329fa9b8f2892",
                    "relatedDbl": null,
                    "name": "The Word of God in Gurbet",
                    "nameLocal": "E Devleso Lafi ko Gurbetsko dijalekt",
                    "abbreviation": "Gurbet",
                    "abbreviationLocal": "GSP",
                    "description": null,
                    "descriptionLocal": null,
                    "language": {
                        "id": "rmy",
                        "name": "Romani, Vlax",
                        "nameLocal": "Romani",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "RS",
                            "name": "Serbia",
                            "nameLocal": "Serbia"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2024-02-29T21:18:20.000Z",
                    "audioBibles": []
                },
                {
                    "id": "4e046bd6977f26de-01",
                    "dblId": "4e046bd6977f26de",
                    "relatedDbl": null,
                    "name": "Власитский перевод",
                    "nameLocal": "Библия пэ влахицко романи шыб",
                    "abbreviation": "VRB",
                    "abbreviationLocal": "СРБ",
                    "description": "Eastern Vlakh Romani Portions",
                    "descriptionLocal": "Радосаво Лав Лукастар тай Апостолонэндирэ рындоря",
                    "language": {
                        "id": "rmy",
                        "name": "Romani, Vlax",
                        "nameLocal": "Romani",
                        "script": "Cyrillic",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "UA",
                            "name": "Ukraine",
                            "nameLocal": "Ukraine"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2023-07-25T21:14:42.000Z",
                    "audioBibles": [
                        {
                            "id": "ace6f1c052a342af-01",
                            "name": "(Vlakh)",
                            "nameLocal": "Библия пэ влахицко романи шыб",
                            "dblId": "ace6f1c052a342af"
                        }
                    ]
                },
                {
                    "id": "98d1c5bee401f80c-01",
                    "dblId": "98d1c5bee401f80c",
                    "relatedDbl": null,
                    "name": "The New Testament in Lughulu",
                    "nameLocal": "Laghano Lya Sambi Kwe Iwanu Wose",
                    "abbreviation": "LBV",
                    "abbreviationLocal": "LBV",
                    "description": "New Testament",
                    "descriptionLocal": "New Testament",
                    "language": {
                        "id": "ruf",
                        "name": "Chilughuru",
                        "nameLocal": "Luguru",
                        "script": "Roman",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "TZ",
                            "name": "Tanzania",
                            "nameLocal": "Tanzania"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-01-06T21:03:07.000Z",
                    "audioBibles": []
                },
                {
                    "id": "44cb4cae1cae773f-01",
                    "dblId": "44cb4cae1cae773f",
                    "relatedDbl": null,
                    "name": "Aromanian Frasherot Bible",
                    "nameLocal": "Biblija tu limba Rrãmãnã",
                    "abbreviation": "RUPF",
                    "abbreviationLocal": "BLRR",
                    "description": "The Aromanian prestige dialect spoken in central and southern Albania.",
                    "descriptionLocal": "Bibla në gjuhën Arumune",
                    "language": {
                        "id": "rup",
                        "name": "Aromanian",
                        "nameLocal": "Armãneashti/Arumanisht",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "AL",
                            "name": "Albania",
                            "nameLocal": "Albania"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2024-03-30T21:15:38.000Z",
                    "audioBibles": []
                },
                {
                    "id": "bb3df4b7c8587c77-01",
                    "dblId": "bb3df4b7c8587c77",
                    "relatedDbl": null,
                    "name": "Sanskrit Bible (NT) in Assamese Script (সত্যৱেদঃ।)",
                    "nameLocal": "সত্যৱেদঃ। Sanskrit Bible (NT) in Assamese Script",
                    "abbreviation": "SANAS",
                    "abbreviationLocal": "SANAS",
                    "description": "Sanskrit Bible (NT) in Assamese Script (সত্যৱেদঃ।)",
                    "descriptionLocal": "সত্যৱেদঃ। Sanskrit Bible (NT) in Assamese Script",
                    "language": {
                        "id": "san",
                        "name": "Sanskrit",
                        "nameLocal": "Saṃskṛtam",
                        "script": "Bengali",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "IN",
                            "name": "India",
                            "nameLocal": "India"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-01-07T13:03:55.000Z",
                    "audioBibles": []
                },
                {
                    "id": "8d1ad2c921d811c3-01",
                    "dblId": "8d1ad2c921d811c3",
                    "relatedDbl": null,
                    "name": "Sanskrit Bible (NT) in Bengali Script",
                    "nameLocal": "সত্যবেদঃ। Sanskrit Bible (NT) in Bengali Script",
                    "abbreviation": "SANBN",
                    "abbreviationLocal": "SANBN",
                    "description": "Sanskrit Bible (NT) in Bengali Script (সত্যবেদঃ।)",
                    "descriptionLocal": "Sanskrit Bible (NT) in Bengali Script (সত্যবেদঃ।)",
                    "language": {
                        "id": "san",
                        "name": "Sanskrit",
                        "nameLocal": "Saṃskṛtam",
                        "script": "Bengali",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "IN",
                            "name": "India",
                            "nameLocal": "India"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-01-07T10:28:40.000Z",
                    "audioBibles": []
                },
                {
                    "id": "9449d4ad98193779-01",
                    "dblId": "9449d4ad98193779",
                    "relatedDbl": null,
                    "name": "Sanskrit Bible (NT) in Burmese Script (သတျဝေဒး၊)",
                    "nameLocal": "သတျဝေဒး၊ Sanskrit Bible (NT) in Burmese Script ()",
                    "abbreviation": "SANBU",
                    "abbreviationLocal": "SANBU",
                    "description": "Sanskrit Bible (NT) in Burmese Script (သတျဝေဒး၊)",
                    "descriptionLocal": "သတျဝေဒး၊ Sanskrit Bible (NT) in Burmese Script ()",
                    "language": {
                        "id": "san",
                        "name": "Sanskrit",
                        "nameLocal": "Saṃskṛtam",
                        "script": "Code for uncoded script",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "IN",
                            "name": "India",
                            "nameLocal": "India"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-01-07T10:50:48.000Z",
                    "audioBibles": []
                },
                {
                    "id": "33b6449cacf22773-01",
                    "dblId": "33b6449cacf22773",
                    "relatedDbl": null,
                    "name": "Sanskrit Bible (NT) in Cologne Script (satyavEdaH|)",
                    "nameLocal": "satyavEdaH| Sanskrit Bible (NT) in Cologne Script",
                    "abbreviation": "SANCO",
                    "abbreviationLocal": "SANCO",
                    "description": "Sanskrit Bible (NT) in Cologne Script (satyavEdaH|",
                    "descriptionLocal": "satyavEdaH| Sanskrit Bible (NT) in Cologne Script",
                    "language": {
                        "id": "san",
                        "name": "Sanskrit",
                        "nameLocal": "Saṃskṛtam",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "IN",
                            "name": "India",
                            "nameLocal": "India"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-01-07T06:47:51.000Z",
                    "audioBibles": []
                },
                {
                    "id": "e9ea572977b4f504-01",
                    "dblId": "e9ea572977b4f504",
                    "relatedDbl": null,
                    "name": "Sanskrit Bible (NT) in Gujarati Script (સત્યવેદઃ।)",
                    "nameLocal": "સત્યવેદઃ। Sanskrit Bible (NT) in Gujarati Script",
                    "abbreviation": "SANGJ",
                    "abbreviationLocal": "SANGJ",
                    "description": "Sanskrit Bible (NT) in Gujarati Script (સત્યવેદઃ।)",
                    "descriptionLocal": "સત્યવેદઃ। Sanskrit Bible (NT) in Gujarati Script",
                    "language": {
                        "id": "san",
                        "name": "Sanskrit",
                        "nameLocal": "Saṃskṛtam",
                        "script": "Gujarati",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "IN",
                            "name": "India",
                            "nameLocal": "India"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-01-07T15:42:51.000Z",
                    "audioBibles": []
                },
                {
                    "id": "89007ccbb2eb5187-01",
                    "dblId": "89007ccbb2eb5187",
                    "relatedDbl": null,
                    "name": "Sanskrit Bible (NT) in Harvard-Kyoto Script (satyavedaH|)",
                    "nameLocal": "satyavedaH| Sanskrit Bible (NT) in Harvard-Kyoto Script",
                    "abbreviation": "SANHK",
                    "abbreviationLocal": "SANHK",
                    "description": "Sanskrit Bible (NT) in Harvard-Kyoto Script (satyavedaH|)",
                    "descriptionLocal": "satyavedaH| Sanskrit Bible (NT) in Harvard-Kyoto Script",
                    "language": {
                        "id": "san",
                        "name": "Sanskrit",
                        "nameLocal": "Saṃskṛtam",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "IN",
                            "name": "India",
                            "nameLocal": "India"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-01-07T10:17:22.000Z",
                    "audioBibles": []
                },
                {
                    "id": "0b07fcef627a2db2-01",
                    "dblId": "0b07fcef627a2db2",
                    "relatedDbl": null,
                    "name": "Sanskrit Bible (NT) in IAST Script (satyavedaḥ|)",
                    "nameLocal": "satyavedaḥ| Sanskrit Bible (NT) in IAST Script",
                    "abbreviation": "SANIA",
                    "abbreviationLocal": "SANIA",
                    "description": "Sanskrit Bible (NT) in IAST Script (satyavedaḥ|)",
                    "descriptionLocal": "satyavedaḥ| Sanskrit Bible (NT) in IAST Script",
                    "language": {
                        "id": "san",
                        "name": "Sanskrit",
                        "nameLocal": "Saṃskṛtam",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "IN",
                            "name": "India",
                            "nameLocal": "India"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-01-07T05:07:17.000Z",
                    "audioBibles": []
                },
                {
                    "id": "d4599ff3c6b97f3a-01",
                    "dblId": "d4599ff3c6b97f3a",
                    "relatedDbl": null,
                    "name": "Sanskrit Bible (NT) in ISO Script (satyavēdaḥ|)",
                    "nameLocal": "satyavēdaḥ| Sanskrit Bible (NT) in ISO Script",
                    "abbreviation": "SANIS",
                    "abbreviationLocal": "SANIS",
                    "description": "Sanskrit Bible (NT) in ISO Script (satyavēdaḥ|)",
                    "descriptionLocal": "satyavēdaḥ| Sanskrit Bible (NT) in ISO Script",
                    "language": {
                        "id": "san",
                        "name": "Sanskrit",
                        "nameLocal": "Saṃskṛtam",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "IN",
                            "name": "India",
                            "nameLocal": "India"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-01-07T14:33:13.000Z",
                    "audioBibles": []
                },
                {
                    "id": "6bc5ae3d6dd9009a-01",
                    "dblId": "6bc5ae3d6dd9009a",
                    "relatedDbl": null,
                    "name": "Sanskrit Bible (NT) in ITRANS Script (satyavedaH|)",
                    "nameLocal": "satyavedaH| Sanskrit Bible (NT) in ITRANS Script",
                    "abbreviation": "SANIT",
                    "abbreviationLocal": "SANIT",
                    "description": "Sanskrit Bible (NT) in ITRANS Script (satyavedaH|)",
                    "descriptionLocal": "satyavedaH| Sanskrit Bible (NT) in ITRANS Script",
                    "language": {
                        "id": "san",
                        "name": "Sanskrit",
                        "nameLocal": "Saṃskṛtam",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "IN",
                            "name": "India",
                            "nameLocal": "India"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-01-07T08:59:02.000Z",
                    "audioBibles": []
                },
                {
                    "id": "c1f49ed98a65a544-01",
                    "dblId": "c1f49ed98a65a544",
                    "relatedDbl": null,
                    "name": "Sanskrit Bible (NT) in Kannada Script (ಸತ್ಯವೇದಃ।)",
                    "nameLocal": "ಸತ್ಯವೇದಃ। Sanskrit Bible (NT) in Kannada Script",
                    "abbreviation": "SANKA",
                    "abbreviationLocal": "SANKA",
                    "description": "Sanskrit Bible (NT) in Kannada Script (ಸತ್ಯವೇದಃ।)",
                    "descriptionLocal": "ಸತ್ಯವೇದಃ। Sanskrit Bible (NT) in Kannada Script",
                    "language": {
                        "id": "san",
                        "name": "Sanskrit",
                        "nameLocal": "Saṃskṛtam",
                        "script": "Kannada",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "IN",
                            "name": "India",
                            "nameLocal": "India"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-01-07T13:21:25.000Z",
                    "audioBibles": []
                },
                {
                    "id": "6bb8b0fa7aca67c6-01",
                    "dblId": "6bb8b0fa7aca67c6",
                    "relatedDbl": null,
                    "name": "Sanskrit Bible (NT) in Khmer Script (សត្យវេទះ។)",
                    "nameLocal": "សត្យវេទះ។ Sanskrit Bible (NT) in Khmer Script",
                    "abbreviation": "SANKH",
                    "abbreviationLocal": "SANKH",
                    "description": "Sanskrit Bible (NT) in Khmer Script (សត្យវេទះ។)",
                    "descriptionLocal": "សត្យវេទះ។ Sanskrit Bible (NT) in Khmer Script",
                    "language": {
                        "id": "san",
                        "name": "Sanskrit",
                        "nameLocal": "Saṃskṛtam",
                        "script": "Code for uncoded script",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "KH",
                            "name": "Cambodia",
                            "nameLocal": "Cambodia"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-01-07T08:58:50.000Z",
                    "audioBibles": []
                },
                {
                    "id": "119375d97b57cf04-01",
                    "dblId": "119375d97b57cf04",
                    "relatedDbl": null,
                    "name": "Sanskrit Bible (NT) in Malayalam Script (സത്യവേദഃ।)",
                    "nameLocal": "സത്യവേദഃ। Sanskrit Bible (NT) in Malayalam Script",
                    "abbreviation": "SANML",
                    "abbreviationLocal": "SANML",
                    "description": "Sanskrit Bible (NT) in Malayalam Script (സത്യവേദഃ।)",
                    "descriptionLocal": "സത്യവേദഃ। Sanskrit Bible (NT) in Malayalam Script",
                    "language": {
                        "id": "san",
                        "name": "Sanskrit",
                        "nameLocal": "Saṃskṛtam",
                        "script": "Malayalam",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "IN",
                            "name": "India",
                            "nameLocal": "India"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-01-07T05:21:56.000Z",
                    "audioBibles": []
                },
                {
                    "id": "5a27fd2a2de187c8-01",
                    "dblId": "5a27fd2a2de187c8",
                    "relatedDbl": null,
                    "name": "Sanskrit Bible (NT) in Oriya Script (ସତ୍ୟୱେଦଃ।)",
                    "nameLocal": "ସତ୍ୟୱେଦଃ। Sanskrit Bible (NT) in Oriya Script",
                    "abbreviation": "SANOR",
                    "abbreviationLocal": "SANOR",
                    "description": "Sanskrit Bible (NT) in Oriya Script (ସତ୍ୟୱେଦଃ।)",
                    "descriptionLocal": "ସତ୍ୟୱେଦଃ। Sanskrit Bible (NT) in Oriya Script",
                    "language": {
                        "id": "san",
                        "name": "Sanskrit",
                        "nameLocal": "Saṃskṛtam",
                        "script": "Oriya",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "IN",
                            "name": "India",
                            "nameLocal": "India"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-01-07T08:12:28.000Z",
                    "audioBibles": []
                },
                {
                    "id": "07225eadadcb079a-01",
                    "dblId": "07225eadadcb079a",
                    "relatedDbl": null,
                    "name": "Sanskrit Bible (NT) in Punjabi Script (ਸਤ੍ਯਵੇਦਃ।)",
                    "nameLocal": "ਸਤ੍ਯਵੇਦਃ। Sanskrit Bible (NT) in Punjabi Script",
                    "abbreviation": "SANPN",
                    "abbreviationLocal": "SANPN",
                    "description": "Sanskrit Bible (NT) in Punjabi Script (ਸਤ੍ਯਵੇਦਃ।)",
                    "descriptionLocal": "ਸਤ੍ਯਵੇਦਃ। Sanskrit Bible (NT) in Punjabi Script",
                    "language": {
                        "id": "san",
                        "name": "Sanskrit",
                        "nameLocal": "Saṃskṛtam",
                        "script": "Code for uncoded script",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "IN",
                            "name": "India",
                            "nameLocal": "India"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-01-07T05:00:31.000Z",
                    "audioBibles": []
                },
                {
                    "id": "2c2cf8df5a22a46e-01",
                    "dblId": "2c2cf8df5a22a46e",
                    "relatedDbl": null,
                    "name": "Sanskrit Bible (NT) in Sinhala Script (සත්‍යවේදඃ।)",
                    "nameLocal": "සත්‍යවේදඃ। Sanskrit Bible (NT) in Sinhala Script",
                    "abbreviation": "SANSI",
                    "abbreviationLocal": "SANSI",
                    "description": "Sanskrit Bible (NT) in Sinhala Script (සත්‍යවේදඃ।)",
                    "descriptionLocal": "සත්‍යවේදඃ। Sanskrit Bible (NT) in Sinhala Script",
                    "language": {
                        "id": "san",
                        "name": "Sanskrit",
                        "nameLocal": "Saṃskṛtam",
                        "script": "Code for uncoded script",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "LK",
                            "name": "Sri Lanka",
                            "nameLocal": "Sri Lanka"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-01-07T06:26:33.000Z",
                    "audioBibles": []
                },
                {
                    "id": "143e0e03cf5b12ae-01",
                    "dblId": "143e0e03cf5b12ae",
                    "relatedDbl": null,
                    "name": "Sanskrit Bible (NT) in Tamil Script (ஸத்யவேத³​:।)",
                    "nameLocal": "ஸத்யவேத³​:। Sanskrit Bible (NT) in Tamil Script",
                    "abbreviation": "SANTM",
                    "abbreviationLocal": "SANTM",
                    "description": "Sanskrit Bible (NT) in Tamil Script (ஸத்யவேத³​:।)",
                    "descriptionLocal": "ஸத்யவேத³​:। Sanskrit Bible (NT) in Tamil Script",
                    "language": {
                        "id": "san",
                        "name": "Sanskrit",
                        "nameLocal": "Saṃskṛtam",
                        "script": "Tamil",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "IN",
                            "name": "India",
                            "nameLocal": "India"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-01-07T05:28:44.000Z",
                    "audioBibles": []
                },
                {
                    "id": "aa146959e1d39b78-01",
                    "dblId": "aa146959e1d39b78",
                    "relatedDbl": null,
                    "name": "Sanskrit Bible (NT) in Telugu Script (సత్యవేదః।)",
                    "nameLocal": "సత్యవేదః। Sanskrit Bible (NT) in Telugu Script",
                    "abbreviation": "SANTE",
                    "abbreviationLocal": "SANTE",
                    "description": "Sanskrit Bible (NT) in Telugu Script (సత్యవేదః।)",
                    "descriptionLocal": "సత్యవేదః। Sanskrit Bible (NT) in Telugu Script",
                    "language": {
                        "id": "san",
                        "name": "Sanskrit",
                        "nameLocal": "Saṃskṛtam",
                        "script": "Telugu",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "IN",
                            "name": "India",
                            "nameLocal": "India"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-01-07T12:04:54.000Z",
                    "audioBibles": []
                },
                {
                    "id": "306d6ab1ca333a1e-01",
                    "dblId": "306d6ab1ca333a1e",
                    "relatedDbl": null,
                    "name": "Sanskrit Bible (NT) in Thai Script (สตฺยเวท:ฯ)",
                    "nameLocal": "สตฺยเวท:ฯ Sanskrit Bible (NT) in Thai Script",
                    "abbreviation": "SANTH",
                    "abbreviationLocal": "SANTH",
                    "description": "Sanskrit Bible (NT) in Thai Script (สตฺยเวท:ฯ)",
                    "descriptionLocal": "สตฺยเวท:ฯ Sanskrit Bible (NT) in Thai Script",
                    "language": {
                        "id": "san",
                        "name": "Sanskrit",
                        "nameLocal": "Saṃskṛtam",
                        "script": "Thai",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "TH",
                            "name": "Thailand",
                            "nameLocal": "Thailand"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-01-07T06:38:06.000Z",
                    "audioBibles": []
                },
                {
                    "id": "018ff00d7f55cbc1-01",
                    "dblId": "018ff00d7f55cbc1",
                    "relatedDbl": null,
                    "name": "Sanskrit Bible (NT) in Tibetan Script (སཏྱཝེདཿ།)",
                    "nameLocal": "སཏྱཝེདཿ། Sanskrit Bible (NT) in Tibetan Script",
                    "abbreviation": "SANTI",
                    "abbreviationLocal": "SANTI",
                    "description": "Sanskrit Bible (NT) in Tibetan Script (སཏྱཝེདཿ།)",
                    "descriptionLocal": "སཏྱཝེདཿ། Sanskrit Bible (NT) in Tibetan Script",
                    "language": {
                        "id": "san",
                        "name": "Sanskrit",
                        "nameLocal": "Saṃskṛtam",
                        "script": "Tibetan",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "CN",
                            "name": "China",
                            "nameLocal": "China"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-01-07T17:20:51.000Z",
                    "audioBibles": []
                },
                {
                    "id": "51b16e0b4b7c9825-01",
                    "dblId": "51b16e0b4b7c9825",
                    "relatedDbl": null,
                    "name": "Sanskrit Bible (NT) in Urdu Script (سَتْیَویدَح۔)",
                    "nameLocal": "سَتْیَویدَح۔ Sanskrit Bible (NT) in Urdu Script",
                    "abbreviation": "SANUR",
                    "abbreviationLocal": "SANUR",
                    "description": "Sanskrit Bible (NT) in Urdu Script (سَتْیَویدَح۔)",
                    "descriptionLocal": "سَتْیَویدَح۔ Sanskrit Bible (NT) in Urdu Script",
                    "language": {
                        "id": "san",
                        "name": "Sanskrit",
                        "nameLocal": "Saṃskṛtam",
                        "script": "Arabic",
                        "scriptDirection": "RTL"
                    },
                    "countries": [
                        {
                            "id": "IN",
                            "name": "India",
                            "nameLocal": "India"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-01-07T07:52:11.000Z",
                    "audioBibles": []
                },
                {
                    "id": "9a875168ff4df1a3-01",
                    "dblId": "9a875168ff4df1a3",
                    "relatedDbl": null,
                    "name": "Sanskrit Bible (NT) in Velthuis Script (satyaveda.h|)",
                    "nameLocal": "satyaveda.h| Sanskrit Bible (NT) in Velthuis Script",
                    "abbreviation": "SANVE",
                    "abbreviationLocal": "SANVE",
                    "description": "Sanskrit Bible (NT) in Velthuis Script (satyaveda.h|)",
                    "descriptionLocal": "satyaveda.h| Sanskrit Bible (NT) in Velthuis Script",
                    "language": {
                        "id": "san",
                        "name": "Sanskrit",
                        "nameLocal": "Saṃskṛtam",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "IN",
                            "name": "India",
                            "nameLocal": "India"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-01-07T11:13:42.000Z",
                    "audioBibles": []
                },
                {
                    "id": "e8b40ccabe793c0d-01",
                    "dblId": "e8b40ccabe793c0d",
                    "relatedDbl": null,
                    "name": "Sanskrit NT in Devanagari",
                    "nameLocal": "सत्यवेदः। Sanskrit NT in Devanagari",
                    "abbreviation": "SAN-DN",
                    "abbreviationLocal": "SAN-DN",
                    "description": "Sanskrit NT in Devanagari",
                    "descriptionLocal": "सत्यवेदः। Sanskrit NT in Devanagari",
                    "language": {
                        "id": "san",
                        "name": "Sanskrit",
                        "nameLocal": "Saṃskṛtam",
                        "script": "Devanagari",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "IN",
                            "name": "India",
                            "nameLocal": "India"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-01-07T15:38:07.000Z",
                    "audioBibles": []
                },
                {
                    "id": "31ce26b5803b75dd-01",
                    "dblId": "31ce26b5803b75dd",
                    "relatedDbl": null,
                    "name": "Soli New Testament",
                    "nameLocal": "Soli New Testament",
                    "abbreviation": "SBT",
                    "abbreviationLocal": "SBT",
                    "description": "Soli New Testament 2018",
                    "descriptionLocal": "Soli New Testament 2018",
                    "language": {
                        "id": "sby",
                        "name": "Soli",
                        "nameLocal": "Soli",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "ZM",
                            "name": "Zambia",
                            "nameLocal": "Zambia"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-01-07T06:42:47.000Z",
                    "audioBibles": []
                },
                {
                    "id": "619fcff92275df23-01",
                    "dblId": "619fcff92275df23",
                    "relatedDbl": null,
                    "name": "Sakachep New Testament",
                    "nameLocal": "Pathien Lekhabu Inthieng Chongtung Thar",
                    "abbreviation": "SAKNT",
                    "abbreviationLocal": "SAKNT",
                    "description": "Sakachep New Testament 2017",
                    "descriptionLocal": "Pathien Lekhabu Inthieng Chongtung Thar",
                    "language": {
                        "id": "sch",
                        "name": "Sakachep",
                        "nameLocal": "Sakachep",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "IN",
                            "name": "India",
                            "nameLocal": "India"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2023-04-05T21:13:23.000Z",
                    "audioBibles": []
                },
                {
                    "id": "f95e2d9b384f8e6e-01",
                    "dblId": "f95e2d9b384f8e6e",
                    "relatedDbl": null,
                    "name": "Caning Bible Translation",
                    "nameLocal": "Sorunu Kaläg na Ikä Caning",
                    "abbreviation": "SHJ",
                    "abbreviationLocal": "SHJ",
                    "description": "Gospel of Luke",
                    "descriptionLocal": "Inycil Luka na Ikä Caning",
                    "language": {
                        "id": "shj",
                        "name": "Shatt",
                        "nameLocal": "Shatt",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "SS",
                            "name": "South Sudan",
                            "nameLocal": "South Sudan"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2020-06-22T20:02:00.000Z",
                    "audioBibles": []
                },
                {
                    "id": "239e3e9e3b8aac2e-01",
                    "dblId": "239e3e9e3b8aac2e",
                    "relatedDbl": null,
                    "name": "Sikkiligar New Testament",
                    "nameLocal": "ಕ್ಹುದಾನಿ ಕ್ಹರಿನಿ ವಾಕ್ಯಾ",
                    "abbreviation": "NTSrr23",
                    "abbreviationLocal": "NTSrr23",
                    "description": "The New Testament in Sikkiligar Language",
                    "descriptionLocal": "ಕ್ಹುದಾನಿ ಕ್ಹರಿನಿ ವಾಕ್ಯಾ , ನವು ವಡಂಬಡಿಕೆ , 2023",
                    "language": {
                        "id": "sle",
                        "name": "Sholaga",
                        "nameLocal": "Sholaga",
                        "script": "Kannada",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "IN",
                            "name": "India",
                            "nameLocal": "India"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2023-08-28T09:13:20.000Z",
                    "audioBibles": []
                },
                {
                    "id": "7d49326ef827c7d1-01",
                    "dblId": "7d49326ef827c7d1",
                    "relatedDbl": null,
                    "name": "Biblica® Open Slovak Hope for All New Testament",
                    "nameLocal": "Biblica® Nádej pre každého, verejne dostupné",
                    "abbreviation": "ONPK",
                    "abbreviationLocal": "ONPK",
                    "description": "Protestant NT",
                    "descriptionLocal": "Protestant NT",
                    "language": {
                        "id": "slk",
                        "name": "Slovak",
                        "nameLocal": "Slovenčina",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "SK",
                            "name": "Slovakia",
                            "nameLocal": "Slovakia"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2023-12-07T09:17:31.000Z",
                    "audioBibles": []
                },
                {
                    "id": "e8d99085dcb83ab5-01",
                    "dblId": "e8d99085dcb83ab5",
                    "relatedDbl": null,
                    "name": "Biblica® Open Shona Contemporary Bible",
                    "nameLocal": "Biblica® Bhaibheri Dzvene Rakasununguka MuChiShona Chanhasi",
                    "abbreviation": "OSCB",
                    "abbreviationLocal": "BDRSC",
                    "description": "Bible",
                    "descriptionLocal": "Bhaibheri Dzvene",
                    "language": {
                        "id": "sna",
                        "name": "Shona",
                        "nameLocal": "chiShona",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "ZW",
                            "name": "Zimbabwe",
                            "nameLocal": "Zimbabwe"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-05-03T20:34:26.000Z",
                    "audioBibles": [
                        {
                            "id": "0a0157c765374368-00",
                            "name": "Biblica® Open Shona Contemporary Bible, Audio Edition",
                            "nameLocal": "Biblica® Bhaibheri Dzvene Rakasununguka MuChiShona Chanhasi™, Chikamu chinonzwika nenzeve",
                            "dblId": "0a0157c765374368"
                        },
                        {
                            "id": "0a0157c765374368-01",
                            "name": "Shona Contemporary Bible™, Audio Edition",
                            "nameLocal": "Biblica® Bhaibheri Dzvene Rakasununguka MuChiShona Chanhasi™, Chikamu chinonzwika nenzeve",
                            "dblId": "0a0157c765374368"
                        }
                    ]
                },
                {
                    "id": "592420522e16049f-01",
                    "dblId": "592420522e16049f",
                    "relatedDbl": null,
                    "name": "Reina Valera 1909",
                    "nameLocal": "Reina Valera 1909",
                    "abbreviation": "RVR09",
                    "abbreviationLocal": "RVR09",
                    "description": "Biblia Reina Valera 1909",
                    "descriptionLocal": "Biblia Reina Valera 1909",
                    "language": {
                        "id": "spa",
                        "name": "Spanish",
                        "nameLocal": "Español",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "ZZ",
                            "name": "Unspecific",
                            "nameLocal": "Unspecific"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2023-12-21T09:18:14.000Z",
                    "audioBibles": []
                },
                {
                    "id": "48acedcf8595c754-01",
                    "dblId": "48acedcf8595c754",
                    "relatedDbl": null,
                    "name": "Spanish Bible, Palabla de Dios para ti",
                    "nameLocal": "Palabla de Dios para ti",
                    "abbreviation": "spaPdDpt",
                    "abbreviationLocal": "PdDpt",
                    "description": "common",
                    "descriptionLocal": "común",
                    "language": {
                        "id": "spa",
                        "name": "Spanish",
                        "nameLocal": "Español",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "VE",
                            "name": "Venezuela, Bolivarian Republic of",
                            "nameLocal": "Venezuela, Bolivarian Republic of"
                        },
                        {
                            "id": "CO",
                            "name": "Colombia",
                            "nameLocal": "Colombia"
                        },
                        {
                            "id": "EC",
                            "name": "Ecuador",
                            "nameLocal": "Ecuador"
                        },
                        {
                            "id": "BO",
                            "name": "Bolivia, Plurinational State of",
                            "nameLocal": "Bolivia, Plurinational State of"
                        },
                        {
                            "id": "PE",
                            "name": "Peru",
                            "nameLocal": "Peru"
                        },
                        {
                            "id": "AR",
                            "name": "Argentina",
                            "nameLocal": "Argentina"
                        },
                        {
                            "id": "BR",
                            "name": "Brazil",
                            "nameLocal": "Brazil"
                        },
                        {
                            "id": "PY",
                            "name": "Paraguay",
                            "nameLocal": "Paraguay"
                        },
                        {
                            "id": "UY",
                            "name": "Uruguay",
                            "nameLocal": "Uruguay"
                        },
                        {
                            "id": "SV",
                            "name": "El Salvador",
                            "nameLocal": "El Salvador"
                        },
                        {
                            "id": "NI",
                            "name": "Nicaragua",
                            "nameLocal": "Nicaragua"
                        },
                        {
                            "id": "DO",
                            "name": "Dominican Republic",
                            "nameLocal": "Dominican Republic"
                        },
                        {
                            "id": "CU",
                            "name": "Cuba",
                            "nameLocal": "Cuba"
                        },
                        {
                            "id": "HN",
                            "name": "Honduras",
                            "nameLocal": "Honduras"
                        },
                        {
                            "id": "GT",
                            "name": "Guatemala",
                            "nameLocal": "Guatemala"
                        },
                        {
                            "id": "PA",
                            "name": "Panama",
                            "nameLocal": "Panama"
                        },
                        {
                            "id": "MX",
                            "name": "Mexico",
                            "nameLocal": "Mexico"
                        },
                        {
                            "id": "CL",
                            "name": "Chile",
                            "nameLocal": "Chile"
                        },
                        {
                            "id": "ES",
                            "name": "Spain",
                            "nameLocal": "Spain"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2024-04-10T09:16:49.000Z",
                    "audioBibles": []
                },
                {
                    "id": "48acedcf8595c754-02",
                    "dblId": "48acedcf8595c754",
                    "relatedDbl": null,
                    "name": "Spanish NT + PP, Palabla de Dios para ti",
                    "nameLocal": "Nuevo Contracto, Salmos y Proverbios, Palabla de Dios para ti",
                    "abbreviation": "spaPdDpt",
                    "abbreviationLocal": "PdDpt",
                    "description": "NTPP",
                    "descriptionLocal": "Nuevo Contracto y Salmos y Proverbios",
                    "language": {
                        "id": "spa",
                        "name": "Spanish",
                        "nameLocal": "Español",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "VE",
                            "name": "Venezuela, Bolivarian Republic of",
                            "nameLocal": "Venezuela, Bolivarian Republic of"
                        },
                        {
                            "id": "CO",
                            "name": "Colombia",
                            "nameLocal": "Colombia"
                        },
                        {
                            "id": "EC",
                            "name": "Ecuador",
                            "nameLocal": "Ecuador"
                        },
                        {
                            "id": "BO",
                            "name": "Bolivia, Plurinational State of",
                            "nameLocal": "Bolivia, Plurinational State of"
                        },
                        {
                            "id": "PE",
                            "name": "Peru",
                            "nameLocal": "Peru"
                        },
                        {
                            "id": "AR",
                            "name": "Argentina",
                            "nameLocal": "Argentina"
                        },
                        {
                            "id": "BR",
                            "name": "Brazil",
                            "nameLocal": "Brazil"
                        },
                        {
                            "id": "PY",
                            "name": "Paraguay",
                            "nameLocal": "Paraguay"
                        },
                        {
                            "id": "UY",
                            "name": "Uruguay",
                            "nameLocal": "Uruguay"
                        },
                        {
                            "id": "SV",
                            "name": "El Salvador",
                            "nameLocal": "El Salvador"
                        },
                        {
                            "id": "NI",
                            "name": "Nicaragua",
                            "nameLocal": "Nicaragua"
                        },
                        {
                            "id": "DO",
                            "name": "Dominican Republic",
                            "nameLocal": "Dominican Republic"
                        },
                        {
                            "id": "CU",
                            "name": "Cuba",
                            "nameLocal": "Cuba"
                        },
                        {
                            "id": "HN",
                            "name": "Honduras",
                            "nameLocal": "Honduras"
                        },
                        {
                            "id": "GT",
                            "name": "Guatemala",
                            "nameLocal": "Guatemala"
                        },
                        {
                            "id": "PA",
                            "name": "Panama",
                            "nameLocal": "Panama"
                        },
                        {
                            "id": "MX",
                            "name": "Mexico",
                            "nameLocal": "Mexico"
                        },
                        {
                            "id": "CL",
                            "name": "Chile",
                            "nameLocal": "Chile"
                        },
                        {
                            "id": "ES",
                            "name": "Spain",
                            "nameLocal": "Spain"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2024-04-10T09:17:39.000Z",
                    "audioBibles": []
                },
                {
                    "id": "b32b9d1b64b4ef29-01",
                    "dblId": "b32b9d1b64b4ef29",
                    "relatedDbl": null,
                    "name": "The Holy Bible in Simple Spanish",
                    "nameLocal": "La Biblia en Español Sencillo",
                    "abbreviation": "spabes",
                    "abbreviationLocal": "BES",
                    "description": "Common",
                    "descriptionLocal": "Común",
                    "language": {
                        "id": "spa",
                        "name": "Spanish",
                        "nameLocal": "Español",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "MX",
                            "name": "Mexico",
                            "nameLocal": "Mexico"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-01-07T12:40:11.000Z",
                    "audioBibles": []
                },
                {
                    "id": "482ddd53705278cc-01",
                    "dblId": "482ddd53705278cc",
                    "relatedDbl": null,
                    "name": "The New Testament in Spanish, Free Bible Version",
                    "nameLocal": "El Nuevo Testamento, Versión Biblia Libre",
                    "abbreviation": "VBL",
                    "abbreviationLocal": "VBL",
                    "description": "common",
                    "descriptionLocal": "Nuevo Testmento",
                    "language": {
                        "id": "spa",
                        "name": "Spanish",
                        "nameLocal": "Español",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "ES",
                            "name": "Spain",
                            "nameLocal": "Spain"
                        },
                        {
                            "id": "MX",
                            "name": "Mexico",
                            "nameLocal": "Mexico"
                        },
                        {
                            "id": "PY",
                            "name": "Paraguay",
                            "nameLocal": "Paraguay"
                        },
                        {
                            "id": "CO",
                            "name": "Colombia",
                            "nameLocal": "Colombia"
                        },
                        {
                            "id": "CL",
                            "name": "Chile",
                            "nameLocal": "Chile"
                        },
                        {
                            "id": "EC",
                            "name": "Ecuador",
                            "nameLocal": "Ecuador"
                        },
                        {
                            "id": "HN",
                            "name": "Honduras",
                            "nameLocal": "Honduras"
                        },
                        {
                            "id": "NI",
                            "name": "Nicaragua",
                            "nameLocal": "Nicaragua"
                        },
                        {
                            "id": "PE",
                            "name": "Peru",
                            "nameLocal": "Peru"
                        },
                        {
                            "id": "PA",
                            "name": "Panama",
                            "nameLocal": "Panama"
                        },
                        {
                            "id": "CU",
                            "name": "Cuba",
                            "nameLocal": "Cuba"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-09-21T21:11:04.000Z",
                    "audioBibles": []
                },
                {
                    "id": "482ddd53705278cc-02",
                    "dblId": "482ddd53705278cc",
                    "relatedDbl": null,
                    "name": "Versión Biblia Libre",
                    "nameLocal": "Versión Biblia Libre",
                    "abbreviation": "VBL",
                    "abbreviationLocal": "VBL",
                    "description": "Protestant",
                    "descriptionLocal": "Protestant",
                    "language": {
                        "id": "spa",
                        "name": "Spanish",
                        "nameLocal": "Español",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "ES",
                            "name": "Spain",
                            "nameLocal": "Spain"
                        },
                        {
                            "id": "MX",
                            "name": "Mexico",
                            "nameLocal": "Mexico"
                        },
                        {
                            "id": "PY",
                            "name": "Paraguay",
                            "nameLocal": "Paraguay"
                        },
                        {
                            "id": "CO",
                            "name": "Colombia",
                            "nameLocal": "Colombia"
                        },
                        {
                            "id": "CL",
                            "name": "Chile",
                            "nameLocal": "Chile"
                        },
                        {
                            "id": "EC",
                            "name": "Ecuador",
                            "nameLocal": "Ecuador"
                        },
                        {
                            "id": "HN",
                            "name": "Honduras",
                            "nameLocal": "Honduras"
                        },
                        {
                            "id": "NI",
                            "name": "Nicaragua",
                            "nameLocal": "Nicaragua"
                        },
                        {
                            "id": "PE",
                            "name": "Peru",
                            "nameLocal": "Peru"
                        },
                        {
                            "id": "PA",
                            "name": "Panama",
                            "nameLocal": "Panama"
                        },
                        {
                            "id": "CU",
                            "name": "Cuba",
                            "nameLocal": "Cuba"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-07-08T15:52:26.000Z",
                    "audioBibles": []
                },
                {
                    "id": "2a65010324d677b6-01",
                    "dblId": "2a65010324d677b6",
                    "relatedDbl": null,
                    "name": "Akukem Portions for DBL",
                    "nameLocal": "Mak Osɨrisira Akaman Aghuuŋ ko Iesusɨm Mbɨsevisir Gumasi",
                    "abbreviation": "Akg-MkAc",
                    "abbreviationLocal": "Akg-MkAc",
                    "description": null,
                    "descriptionLocal": "Published Mark & Acts",
                    "language": {
                        "id": "spm",
                        "name": "Akukem",
                        "nameLocal": "Akɨghɨman Akam",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "PG",
                            "name": "Papua New Guinea",
                            "nameLocal": "Papua New Guinea"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-01-07T06:19:35.000Z",
                    "audioBibles": []
                },
                {
                    "id": "b83db44e6dc39993-01",
                    "dblId": "b83db44e6dc39993",
                    "relatedDbl": null,
                    "name": "Biblica® Open New Serbian Translation Cyrillic 2017",
                    "nameLocal": "Biblica® Нови српски превод, слободна права",
                    "abbreviation": "ONSP",
                    "abbreviationLocal": "OНСП",
                    "description": "Holy Bible",
                    "descriptionLocal": "Свето писмо",
                    "language": {
                        "id": "srp",
                        "name": "Serbian",
                        "nameLocal": "Српски/ Srpski",
                        "script": "Cyrillic",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "RS",
                            "name": "Serbia",
                            "nameLocal": "Serbia"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2023-09-28T09:26:56.000Z",
                    "audioBibles": []
                },
                {
                    "id": "c1096b0470327a28-01",
                    "dblId": "c1096b0470327a28",
                    "relatedDbl": null,
                    "name": "Biblica® Open New Serbian Translation Latin 2017",
                    "nameLocal": "Novi srpski prevod",
                    "abbreviation": "ONSTL",
                    "abbreviationLocal": "ONSPL",
                    "description": "Holy Bible",
                    "descriptionLocal": "Sveto Pismo",
                    "language": {
                        "id": "srp",
                        "name": "Serbian",
                        "nameLocal": "Српски/ Srpski",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "RS",
                            "name": "Serbia",
                            "nameLocal": "Serbia"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2023-09-29T21:26:12.000Z",
                    "audioBibles": []
                },
                {
                    "id": "06995ce9cd23361b-01",
                    "dblId": "06995ce9cd23361b",
                    "relatedDbl": null,
                    "name": "Serbian Bible",
                    "nameLocal": "Sveta Biblija",
                    "abbreviation": "srp1865",
                    "abbreviationLocal": "SRP1865",
                    "description": "common",
                    "descriptionLocal": "zajednički",
                    "language": {
                        "id": "srp",
                        "name": "Serbian",
                        "nameLocal": "Српски/ Srpski",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "RS",
                            "name": "Serbia",
                            "nameLocal": "Serbia"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-01-07T04:58:49.000Z",
                    "audioBibles": []
                },
                {
                    "id": "bbeb583cd75c6356-01",
                    "dblId": "bbeb583cd75c6356",
                    "relatedDbl": null,
                    "name": "Susu Bible",
                    "nameLocal": "Soso Kitaabuie: Tawureta, Yabura, Inyila",
                    "abbreviation": "Susu",
                    "abbreviationLocal": "Soso",
                    "description": "Bible",
                    "descriptionLocal": "Soso Kitaabuie",
                    "language": {
                        "id": "sus",
                        "name": "Susu",
                        "nameLocal": "Sosoxui",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "GN",
                            "name": "Guinea",
                            "nameLocal": "Guinea"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-09-21T23:27:11.000Z",
                    "audioBibles": []
                },
                {
                    "id": "2d5220a02a7aaac6-01",
                    "dblId": "2d5220a02a7aaac6",
                    "relatedDbl": null,
                    "name": "Susu Bible in Arabic Script",
                    "nameLocal": "Ala xa Kitaabui Sosoe bɛ",
                    "abbreviation": "AKS",
                    "abbreviationLocal": "Susu",
                    "description": "Protestant",
                    "descriptionLocal": "Tawureta Munsa, Yabura Dawuda, Inyila Isa",
                    "language": {
                        "id": "sus",
                        "name": "Susu",
                        "nameLocal": "Sosoxui",
                        "script": "Arabic",
                        "scriptDirection": "RTL"
                    },
                    "countries": [
                        {
                            "id": "GN",
                            "name": "Guinea",
                            "nameLocal": "Guinea"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-09-21T19:51:01.000Z",
                    "audioBibles": []
                },
                {
                    "id": "fa4317c59f0825e0-01",
                    "dblId": "fa4317c59f0825e0",
                    "relatedDbl": null,
                    "name": "Swedish Core Bible - expanded",
                    "nameLocal": "Svenska Kärnbibeln",
                    "abbreviation": "SKB",
                    "abbreviationLocal": "SKB",
                    "description": "En expanderad översättning",
                    "descriptionLocal": "En expanderad översättning",
                    "language": {
                        "id": "swe",
                        "name": "Swedish",
                        "nameLocal": "Svenska",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "SE",
                            "name": "Sweden",
                            "nameLocal": "Sweden"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2024-02-15T21:41:16.000Z",
                    "audioBibles": []
                },
                {
                    "id": "611f8eb23aec8f13-01",
                    "dblId": "611f8eb23aec8f13",
                    "relatedDbl": null,
                    "name": "Biblica® Open Kiswahili Contemporary Version (Neno) 2015",
                    "nameLocal": "Biblica® Toleo Wazi la Neno: Biblia Takatifu",
                    "abbreviation": "ONEN",
                    "abbreviationLocal": "ONEN",
                    "description": "Protestant Bible",
                    "descriptionLocal": "Protestant Bible",
                    "language": {
                        "id": "swh",
                        "name": "Swahili",
                        "nameLocal": "Kiswahili",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "KE",
                            "name": "Kenya",
                            "nameLocal": "Kenya"
                        },
                        {
                            "id": "TZ",
                            "name": "Tanzania, United Republic of",
                            "nameLocal": "Tanzania, United Republic of"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2023-04-17T21:13:22.000Z",
                    "audioBibles": [
                        {
                            "id": "3533f7929cde418c-01",
                            "name": "Biblica® Open Kiswahili Contemporary Version™, Audio Edition",
                            "nameLocal": "Biblica® Toleo Wazi la Neno: Biblia Takatifu™, Toleo la Kusikiliza",
                            "dblId": "3533f7929cde418c"
                        }
                    ]
                },
                {
                    "id": "032ec262506b719f-01",
                    "dblId": "032ec262506b719f",
                    "relatedDbl": null,
                    "name": "Biblica® Open Indian Tamil Contemporary Version",
                    "nameLocal": "Biblica® திறந்தநிலை தமிழ் சமகால பதிப்பு",
                    "abbreviation": "OTCV",
                    "abbreviationLocal": "OTCV",
                    "description": "Holy Bible",
                    "descriptionLocal": "பரிசுத்த வேதம்",
                    "language": {
                        "id": "tam",
                        "name": "Tamil",
                        "nameLocal": "தமிழ்",
                        "script": "Tamil",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "IN",
                            "name": "India",
                            "nameLocal": "India"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2023-02-24T21:09:37.000Z",
                    "audioBibles": [
                        {
                            "id": "232eeaf9dc544361-01",
                            "name": "Biblica® Open Indian Tamil Contemporary Version™, Audio Edition",
                            "nameLocal": "Biblica® Open Indian Tamil Contemporary Version™, Audio Edition",
                            "dblId": "232eeaf9dc544361"
                        }
                    ]
                },
                {
                    "id": "03a021185023710b-01",
                    "dblId": "03a021185023710b",
                    "relatedDbl": null,
                    "name": "Indian Revised Version (IRV) Tamil - 2019",
                    "nameLocal": "இண்டியன் ரிவைஸ்டு வெர்ஸன் (IRV) - தமிழ்",
                    "abbreviation": "IRVTam",
                    "abbreviationLocal": "IRVTam",
                    "description": "Protestant Bible for all",
                    "descriptionLocal": "Protestant Bible for all",
                    "language": {
                        "id": "tam",
                        "name": "Tamil",
                        "nameLocal": "தமிழ்",
                        "script": "Tamil",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "IN",
                            "name": "India",
                            "nameLocal": "India"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-04-13T09:08:47.000Z",
                    "audioBibles": [
                        {
                            "id": "5b168850d8ff4fe2-01",
                            "name": "Tamil Indian Revised Version (IRV)",
                            "nameLocal": "Tamil Indian Revised Version (IRV)",
                            "dblId": "5b168850d8ff4fe2"
                        }
                    ]
                },
                {
                    "id": "8e3b1a957009c6ca-01",
                    "dblId": "8e3b1a957009c6ca",
                    "relatedDbl": null,
                    "name": "New Testament in Tay",
                    "nameLocal": "Jisas Klays Takaw Teplep Ne",
                    "abbreviation": "TayNT",
                    "abbreviationLocal": "TayNT",
                    "description": "New Testament",
                    "descriptionLocal": "New Testament",
                    "language": {
                        "id": "taw",
                        "name": "Tai",
                        "nameLocal": "Tay",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "PG",
                            "name": "Papua New Guinea",
                            "nameLocal": "Papua New Guinea"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-09-21T22:21:47.000Z",
                    "audioBibles": []
                },
                {
                    "id": "5b835ce16a1703ff-01",
                    "dblId": "5b835ce16a1703ff",
                    "relatedDbl": null,
                    "name": "Indian Revised Version (IRV) Telugu - 2019",
                    "nameLocal": "ఇండియన్ రివైజ్డ్ వెర్షన్ (IRV) - తెలుగు -2019",
                    "abbreviation": "IRVTel",
                    "abbreviationLocal": "IRVTel",
                    "description": "Bible for all",
                    "descriptionLocal": "Bible for all",
                    "language": {
                        "id": "tel",
                        "name": "Telugu",
                        "nameLocal": "తెలుగు",
                        "script": "Telugu",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "IN",
                            "name": "India",
                            "nameLocal": "India"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-07-08T15:30:43.000Z",
                    "audioBibles": [
                        {
                            "id": "0d7b2453e9ae4513-01",
                            "name": "Telugu Indian Revised Version (IRV)",
                            "nameLocal": "Telugu Indian Revised Version (IRV)",
                            "dblId": "0d7b2453e9ae4513"
                        }
                    ]
                },
                {
                    "id": "4e901dfea8624ef8-01",
                    "dblId": "4e901dfea8624ef8",
                    "relatedDbl": null,
                    "name": "Tagin New Testament",
                    "nameLocal": "ANWNV GAMLV",
                    "abbreviation": "TAG",
                    "abbreviationLocal": "TAG",
                    "description": "Tagin New Testament",
                    "descriptionLocal": "Tagin New Testament",
                    "language": {
                        "id": "tgj",
                        "name": "Tagin",
                        "nameLocal": "Tagin",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "IN",
                            "name": "India",
                            "nameLocal": "India"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2023-05-17T21:14:03.000Z",
                    "audioBibles": []
                },
                {
                    "id": "2eb94132ad61ae75-01",
                    "dblId": "2eb94132ad61ae75",
                    "relatedDbl": null,
                    "name": "Thai KJV",
                    "nameLocal": "พระคัมภีร์ภาษาไทยฉบับ KJV",
                    "abbreviation": "KJV",
                    "abbreviationLocal": "KJV",
                    "description": "Protestant",
                    "descriptionLocal": "โปรเตสแตนต์",
                    "language": {
                        "id": "tha",
                        "name": "Thai",
                        "nameLocal": "ไทย",
                        "script": "Thai",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "TH",
                            "name": "Thailand",
                            "nameLocal": "Thailand"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-09-21T19:52:35.000Z",
                    "audioBibles": []
                },
                {
                    "id": "00cdf9001d68edfa-01",
                    "dblId": "00cdf9001d68edfa",
                    "relatedDbl": null,
                    "name": "Tsakhur",
                    "nameLocal": "Yiqsum",
                    "abbreviation": "TKR",
                    "abbreviationLocal": "YIQSUM",
                    "description": "OT selections (Lifes of Prophets) and NT portions (Matthew, James, some Luke parables, Gospel of John) in Tsakhur",
                    "descriptionLocal": "OT selections (Lifes of Prophets) and NT portions (Matthew, James, some Luke parables, Gospel of John) in Tsakhur",
                    "language": {
                        "id": "tkr",
                        "name": "Tsakhur",
                        "nameLocal": "Tsakhur",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "AZ",
                            "name": "Azerbaijan",
                            "nameLocal": "Azerbaijan"
                        },
                        {
                            "id": "RU",
                            "name": "Russian Federation",
                            "nameLocal": "Russian Federation"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2024-01-30T21:12:53.000Z",
                    "audioBibles": []
                },
                {
                    "id": "30cb581bcc911c45-01",
                    "dblId": "30cb581bcc911c45",
                    "relatedDbl": null,
                    "name": "God's Word in Toma",
                    "nameLocal": "GALA Daawoo Zɛʋɛi",
                    "abbreviation": "GDZ",
                    "abbreviationLocal": "GDZ",
                    "description": null,
                    "descriptionLocal": null,
                    "language": {
                        "id": "tod",
                        "name": "Toma",
                        "nameLocal": "Lɔɠɔma",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "GN",
                            "name": "Guinea",
                            "nameLocal": "Guinea"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2023-01-25T21:10:44.000Z",
                    "audioBibles": []
                },
                {
                    "id": "25210406001d9aae-01",
                    "dblId": "25210406001d9aae",
                    "relatedDbl": null,
                    "name": "Tongan Revised West Translation",
                    "nameLocal": "KO E TOHI TAPU KĀTOA",
                    "abbreviation": "tonRWV",
                    "abbreviationLocal": "RWV",
                    "description": "The Holy Bible in Tongan, Revised West Translation",
                    "descriptionLocal": "The Holy Bible in Tongan, Revised West Translation",
                    "language": {
                        "id": "ton",
                        "name": "Tonga (Tonga Islands)",
                        "nameLocal": "lea fakatonga",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "TO",
                            "name": "Tonga",
                            "nameLocal": "Tonga"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-01-07T06:08:07.000Z",
                    "audioBibles": []
                },
                {
                    "id": "69e6826f010ee12a-01",
                    "dblId": "69e6826f010ee12a",
                    "relatedDbl": null,
                    "name": "Biblica® Open Tswana Living New Testament",
                    "nameLocal": "Biblica® Open Lefoko: La Botshelo Kgolagano e Ntsha",
                    "abbreviation": "OLEF",
                    "abbreviationLocal": "OLEF",
                    "description": "New Testament",
                    "descriptionLocal": "Kgolagano e Ntsha",
                    "language": {
                        "id": "tsn",
                        "name": "Tswana",
                        "nameLocal": "Setswana",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "BW",
                            "name": "Botswana",
                            "nameLocal": "Botswana"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-12-02T00:22:43.000Z",
                    "audioBibles": []
                },
                {
                    "id": "ba4ce1321bc1631e-01",
                    "dblId": "ba4ce1321bc1631e",
                    "relatedDbl": null,
                    "name": "The New Testament in Dawei",
                    "nameLocal": "The New Testament in Dawei",
                    "abbreviation": "DWBT",
                    "abbreviationLocal": "DWBT",
                    "description": "The New Testament in Dawei",
                    "descriptionLocal": "The New Testament in Dawei",
                    "language": {
                        "id": "tvn",
                        "name": "Tavoyan",
                        "nameLocal": "Tavoyan",
                        "script": "Myanmar",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "MM",
                            "name": "Myanmar",
                            "nameLocal": "Myanmar"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2024-02-08T09:22:55.000Z",
                    "audioBibles": []
                },
                {
                    "id": "29d55810bbb2fbcd-01",
                    "dblId": "29d55810bbb2fbcd",
                    "relatedDbl": null,
                    "name": "Tutsa New Testament",
                    "nameLocal": "ESA LEEDAP Ena Banlam",
                    "abbreviation": "TUT",
                    "abbreviationLocal": "TUT",
                    "description": "New Testament in Tutsa",
                    "descriptionLocal": "Tutsa New Testament",
                    "language": {
                        "id": "tvt",
                        "name": "Tutsa Naga",
                        "nameLocal": "Tutsa Naga",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "IN",
                            "name": "India",
                            "nameLocal": "India"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-01-07T06:18:37.000Z",
                    "audioBibles": []
                },
                {
                    "id": "b6aee081108c0bc6-01",
                    "dblId": "b6aee081108c0bc6",
                    "relatedDbl": null,
                    "name": "Biblica® Open Akuapem Twi Contemporary Bible 2020",
                    "nameLocal": "Biblica® Wonhia ɛho kwamma nhoma Akuapem Twi Nkwa Asɛm",
                    "abbreviation": "OAKCB",
                    "abbreviationLocal": "WAKNA",
                    "description": "Bible",
                    "descriptionLocal": "Apam Dedaw ne Apam Foforo",
                    "language": {
                        "id": "twi",
                        "name": "Twi",
                        "nameLocal": "Twi",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "GH",
                            "name": "Ghana",
                            "nameLocal": "Ghana"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-01-07T12:50:30.000Z",
                    "audioBibles": [
                        {
                            "id": "6e21c09d8edb4838-01",
                            "name": "Biblica® Open Akuapem Twi Contemporary Bible™, Audio Edition",
                            "nameLocal": "Biblica® Wonhia Akuapem Twi Nkwa Asɛm™ ho kwamma nhoma, Nea Wotie",
                            "dblId": "6e21c09d8edb4838"
                        }
                    ]
                },
                {
                    "id": "18f6cf27f7b43297-01",
                    "dblId": "18f6cf27f7b43297",
                    "relatedDbl": null,
                    "name": "Biblica® Open Asante Twi Contemporary Bible 2020",
                    "nameLocal": "Biblica® Wɔnhia ɛho kwamma nwoma Asante Twi Nkwa Asɛm",
                    "abbreviation": "OASCB",
                    "abbreviationLocal": "WASNA",
                    "description": "Biible",
                    "descriptionLocal": "Apam Dada ne Apam Foforɔ",
                    "language": {
                        "id": "twi",
                        "name": "Twi",
                        "nameLocal": "Twi",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "GH",
                            "name": "Ghana",
                            "nameLocal": "Ghana"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-01-07T17:32:24.000Z",
                    "audioBibles": [
                        {
                            "id": "03d2ea6f8f7c4a19-01",
                            "name": "Biblica® Open Asante Twi Contemporary Bible™, Audio Edition",
                            "nameLocal": "Biblica® Wɔnhia ɛho kwamma nwoma Asante Twi Nkwa Asɛm™, Deɛ Wɔtie",
                            "dblId": "03d2ea6f8f7c4a19"
                        }
                    ]
                },
                {
                    "id": "6c696cd1d82e2723-03",
                    "dblId": "6c696cd1d82e2723",
                    "relatedDbl": null,
                    "name": "Biblica® Open New Ukrainian Translation 2022",
                    "nameLocal": "Бібліка ® Відкрита Новий Переклад Українською 2022",
                    "abbreviation": "ONPU",
                    "abbreviationLocal": "ВНПУ",
                    "description": "New Testament and Psalms",
                    "descriptionLocal": "Новий Заповіт і Книга Псалмів",
                    "language": {
                        "id": "ukr",
                        "name": "Ukrainian",
                        "nameLocal": "Українська",
                        "script": "Cyrillic",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "UA",
                            "name": "Ukraine",
                            "nameLocal": "Ukraine"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-09-21T21:36:44.000Z",
                    "audioBibles": [
                        {
                            "id": "039316d8ba074002-01",
                            "name": "Biblica® Open New Ukrainian Translation™, Audio Edition",
                            "nameLocal": "Бібліка ® Відкрита Новий Переклад Українською™, Аудіовидання",
                            "dblId": "039316d8ba074002"
                        }
                    ]
                },
                {
                    "id": "6c696cd1d82e2723-04",
                    "dblId": "6c696cd1d82e2723",
                    "relatedDbl": null,
                    "name": "Biblica® Open New Ukrainian Translation 2022",
                    "nameLocal": "Бібліка ® Відкрита Новий Переклад Українською 2022",
                    "abbreviation": "ONPU",
                    "abbreviationLocal": "ВНПУ",
                    "description": "New Testament",
                    "descriptionLocal": "Новий Заповіт",
                    "language": {
                        "id": "ukr",
                        "name": "Ukrainian",
                        "nameLocal": "Українська",
                        "script": "Cyrillic",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "UA",
                            "name": "Ukraine",
                            "nameLocal": "Ukraine"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-09-21T21:37:00.000Z",
                    "audioBibles": [
                        {
                            "id": "039316d8ba074002-01",
                            "name": "Biblica® Open New Ukrainian Translation™, Audio Edition",
                            "nameLocal": "Бібліка ® Відкрита Новий Переклад Українською™, Аудіовидання",
                            "dblId": "039316d8ba074002"
                        }
                    ]
                },
                {
                    "id": "95947b59d0434ae6-01",
                    "dblId": "95947b59d0434ae6",
                    "relatedDbl": null,
                    "name": "The New Testament in Munda Language",
                    "nameLocal": "ପାର୍‌ମେଶ୍ୱାର୍‌ଆଃ ଜୀନିଦ୍‌ ବାଚାନ୍‌, ନାୱା ନିୟାମ୍‌",
                    "abbreviation": "NTRuu20",
                    "abbreviationLocal": "NTRuu20",
                    "description": "The New Testament in Munda Language, 2020",
                    "descriptionLocal": "ପାର୍‌ମେଶ୍ୱାର୍‌ଆଃ ଜୀନିଦ୍‌ ବାଚାନ୍‌, ନାୱା ନିୟାମ୍‌ ,2020",
                    "language": {
                        "id": "unx",
                        "name": "Munda",
                        "nameLocal": "Munda",
                        "script": "Oriya",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "IN",
                            "name": "India",
                            "nameLocal": "India"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-01-07T10:55:30.000Z",
                    "audioBibles": []
                },
                {
                    "id": "de0270810140edf9-01",
                    "dblId": "de0270810140edf9",
                    "relatedDbl": null,
                    "name": "Indian Revised Version (IRV) Urdu - 2019",
                    "nameLocal": "इंडियन रिवाइज्ड वर्जन (IRV) उर्दू - 2019",
                    "abbreviation": "IRVUrd",
                    "abbreviationLocal": "IRVUrd",
                    "description": "Urdu Bible for All",
                    "descriptionLocal": "Urdu Bible for All",
                    "language": {
                        "id": "urd",
                        "name": "Urdu",
                        "nameLocal": "اردو",
                        "script": "Devanagari",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "IN",
                            "name": "India",
                            "nameLocal": "India"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-09-22T00:01:40.000Z",
                    "audioBibles": [
                        {
                            "id": "9e11d376e401469c-01",
                            "name": "Urdu Indian Revised Version (IRV)",
                            "nameLocal": "Urdu Indian Revised Version (IRV)",
                            "dblId": "9e11d376e401469c"
                        }
                    ]
                },
                {
                    "id": "3c6b77ab417420c5-01",
                    "dblId": "3c6b77ab417420c5",
                    "relatedDbl": null,
                    "name": "Urdu Geo Version (Hindi Script)",
                    "nameLocal": "किताबे-मुक़द्दस",
                    "abbreviation": "urdgvh",
                    "abbreviationLocal": "URDGVH",
                    "description": "common",
                    "descriptionLocal": "common",
                    "language": {
                        "id": "urd",
                        "name": "Urdu",
                        "nameLocal": "اردو",
                        "script": "Devanagari",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "PK",
                            "name": "Pakistan",
                            "nameLocal": "Pakistan"
                        },
                        {
                            "id": "IN",
                            "name": "India",
                            "nameLocal": "India"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2023-11-30T09:16:28.000Z",
                    "audioBibles": []
                },
                {
                    "id": "4b2019a039084853-01",
                    "dblId": "4b2019a039084853",
                    "relatedDbl": null,
                    "name": "Urdu Geo Version (Roman Script)",
                    "nameLocal": "Kitab-i Muqaddas",
                    "abbreviation": "urdgvr",
                    "abbreviationLocal": "GVR",
                    "description": "Common",
                    "descriptionLocal": "Common",
                    "language": {
                        "id": "urd",
                        "name": "Urdu",
                        "nameLocal": "اردو",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "PK",
                            "name": "Pakistan",
                            "nameLocal": "Pakistan"
                        },
                        {
                            "id": "IN",
                            "name": "India",
                            "nameLocal": "India"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2023-11-30T21:16:37.000Z",
                    "audioBibles": []
                },
                {
                    "id": "2a1480cfb6f181d7-01",
                    "dblId": "2a1480cfb6f181d7",
                    "relatedDbl": null,
                    "name": "Urdu Geo Version, Urdu Script",
                    "nameLocal": "ہولی بائبل کا اردو جیو ورژن",
                    "abbreviation": "urdgvu",
                    "abbreviationLocal": "URDGVU",
                    "description": "Common",
                    "descriptionLocal": "عام",
                    "language": {
                        "id": "urd",
                        "name": "Urdu",
                        "nameLocal": "اردو",
                        "script": "Code for uncoded script",
                        "scriptDirection": "RTL"
                    },
                    "countries": [
                        {
                            "id": "PK",
                            "name": "Pakistan",
                            "nameLocal": "Pakistan"
                        },
                        {
                            "id": "IN",
                            "name": "India",
                            "nameLocal": "India"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-09-21T19:45:01.000Z",
                    "audioBibles": []
                },
                {
                    "id": "e01f11e9b4b8e338-01",
                    "dblId": "e01f11e9b4b8e338",
                    "relatedDbl": null,
                    "name": "Sob Jonah and Luke",
                    "nameLocal": "Profet Yonab / Dora Nama Lukede Feiaga",
                    "abbreviation": "SobP15",
                    "abbreviationLocal": "SobP15",
                    "description": "Sob Portions 15",
                    "descriptionLocal": "Sob Portions",
                    "language": {
                        "id": "urw",
                        "name": "Sop",
                        "nameLocal": "Sob Dora",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "PG",
                            "name": "Papua New Guinea",
                            "nameLocal": "Papua New Guinea"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-01-07T15:12:27.000Z",
                    "audioBibles": []
                },
                {
                    "id": "c35c4b5c6fa88595-01",
                    "dblId": "c35c4b5c6fa88595",
                    "relatedDbl": null,
                    "name": "Waghri New Testament",
                    "nameLocal": "ದೇವ್ನಿ ಖ್ಹಾಚಿ ವಚನ್",
                    "abbreviation": "NTWVe23",
                    "abbreviationLocal": "NTWVe23",
                    "description": "The New Testament in Waghri Language",
                    "descriptionLocal": "ದೇವ್ನಿ ಖ್ಹಾಚಿ ವಚನ್, ನವಿ ಒಪ್ಪಂದಾನ, 2023",
                    "language": {
                        "id": "vaa",
                        "name": "Vaagri Booli",
                        "nameLocal": "Vaagri Booli",
                        "script": "Kannada",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "IN",
                            "name": "India",
                            "nameLocal": "India"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2023-08-31T21:25:26.000Z",
                    "audioBibles": []
                },
                {
                    "id": "3d4ad27248561990-01",
                    "dblId": "3d4ad27248561990",
                    "relatedDbl": null,
                    "name": "The Vagiri New Testament",
                    "nameLocal": "పవిత్ర్ బైబిల్‍, నవూ నిబంధన్,",
                    "abbreviation": "NTVII24",
                    "abbreviationLocal": "NTVII24",
                    "description": "The Vagiri New Testament.2024",
                    "descriptionLocal": "పవిత్ర్ బైబిల్‍, నవూ నిబంధన్, 2024",
                    "language": {
                        "id": "vgr",
                        "name": "Vaghri",
                        "nameLocal": "Vaghri",
                        "script": "Telugu",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "IN",
                            "name": "India",
                            "nameLocal": "India"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2024-01-11T09:15:40.000Z",
                    "audioBibles": []
                },
                {
                    "id": "c2d40ebca6db1ec5-01",
                    "dblId": "c2d40ebca6db1ec5",
                    "relatedDbl": null,
                    "name": "The New Testament and Old Testament Books in Vidunda",
                    "nameLocal": "Ilagano Linyale kwa Wanhu Weng'ha na Ilagano lya Katali kuli Chividunda",
                    "abbreviation": "Vidunda",
                    "abbreviationLocal": "Chividunda",
                    "description": "New testament and Old Testament books",
                    "descriptionLocal": "Ilagano Linyale kwa Wanhu Weng'ha na Ilagano lya Katali",
                    "language": {
                        "id": "vid",
                        "name": "Vidunda",
                        "nameLocal": "Chividunda",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "TZ",
                            "name": "Tanzania, United Republic of",
                            "nameLocal": "Tanzania, United Republic of"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2023-08-14T21:23:28.000Z",
                    "audioBibles": []
                },
                {
                    "id": "5cc7093967a0a392-01",
                    "dblId": "5cc7093967a0a392",
                    "relatedDbl": null,
                    "name": "Biblica® Open Vietnamese Contemporary Bible 2015",
                    "nameLocal": "Biblica® Thiên Ban Kinh Thánh Hiện Đại",
                    "abbreviation": "OVCB",
                    "abbreviationLocal": "OVCB",
                    "description": "Protestant Bible",
                    "descriptionLocal": "Kinh Thánh",
                    "language": {
                        "id": "vie",
                        "name": "Vietnamese",
                        "nameLocal": "Tiếng Việt",
                        "script": "Code for inherited script",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "VN",
                            "name": "Viet Nam",
                            "nameLocal": "Viet Nam"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-01-07T08:19:22.000Z",
                    "audioBibles": [
                        {
                            "id": "33e4ffc968884850-01",
                            "name": "Biblica® Open Vietnamese Contemporary Bible™, Audio Edition",
                            "nameLocal": "Biblica® Thiên Ban Kinh Thánh Hiện Đại™, Bảng Đọc Kinh Thánh",
                            "dblId": "33e4ffc968884850"
                        }
                    ]
                },
                {
                    "id": "1b878de073afef07-02",
                    "dblId": "1b878de073afef07",
                    "relatedDbl": null,
                    "name": "Vietnamese Bible (1934)",
                    "nameLocal": "Kinh Thánh",
                    "abbreviation": "vie1934",
                    "abbreviationLocal": "VIE1934",
                    "description": "New Testament",
                    "descriptionLocal": "Di chúc mới",
                    "language": {
                        "id": "vie",
                        "name": "Vietnamese",
                        "nameLocal": "Tiếng Việt",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "VN",
                            "name": "Viet Nam",
                            "nameLocal": "Viet Nam"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-07-08T15:06:13.000Z",
                    "audioBibles": []
                },
                {
                    "id": "1b878de073afef07-01",
                    "dblId": "1b878de073afef07",
                    "relatedDbl": null,
                    "name": "Vietnamese Bible (1934)",
                    "nameLocal": "Kinh Thánh",
                    "abbreviation": "vie1934",
                    "abbreviationLocal": "VIE1934",
                    "description": "common",
                    "descriptionLocal": "chung",
                    "language": {
                        "id": "vie",
                        "name": "Vietnamese",
                        "nameLocal": "Tiếng Việt",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "VN",
                            "name": "Viet Nam",
                            "nameLocal": "Viet Nam"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-09-21T19:24:35.000Z",
                    "audioBibles": []
                },
                {
                    "id": "9d34f37a5e8e0bf5-01",
                    "dblId": "9d34f37a5e8e0bf5",
                    "relatedDbl": null,
                    "name": "Ngoni New Testament",
                    "nameLocal": "Ngoni New Testament",
                    "abbreviation": "NNT2020",
                    "abbreviationLocal": "NNT2020",
                    "description": "Ngoni New Testament 2020",
                    "descriptionLocal": "Ngoni New Testament 2020",
                    "language": {
                        "id": "xnj",
                        "name": "Ngoni (Tanzania)",
                        "nameLocal": "Ngoni (Tanzania)",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "TZ",
                            "name": "Tanzania, United Republic of",
                            "nameLocal": "Tanzania, United Republic of"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-09-21T22:43:47.000Z",
                    "audioBibles": []
                },
                {
                    "id": "afe8f67d8ba9025c-01",
                    "dblId": "afe8f67d8ba9025c",
                    "relatedDbl": null,
                    "name": "Yalunka Bible",
                    "nameLocal": "Kisin Kiraan Kitabuna",
                    "abbreviation": "Yalunka",
                    "abbreviationLocal": "Kitabuna",
                    "description": "Yalunka Bible",
                    "descriptionLocal": "Kitabuna",
                    "language": {
                        "id": "yal",
                        "name": "Yalunka",
                        "nameLocal": "Yalunka",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "GN",
                            "name": "Guinea",
                            "nameLocal": "Guinea"
                        },
                        {
                            "id": "SL",
                            "name": "Sierra Leone",
                            "nameLocal": "Sierra Leone"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-09-21T23:11:43.000Z",
                    "audioBibles": []
                },
                {
                    "id": "6fc8bb188318063d-01",
                    "dblId": "6fc8bb188318063d",
                    "relatedDbl": null,
                    "name": "Yao New Testament",
                    "nameLocal": "Lilangano lya Sambano",
                    "abbreviation": "YNT2018",
                    "abbreviationLocal": "YNT2018",
                    "description": "New Testament in the Yao language of Tanzania 2018",
                    "descriptionLocal": "Lilangano lya Sambano 2018",
                    "language": {
                        "id": "yao",
                        "name": "Yao",
                        "nameLocal": "Chiyawo",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "TZ",
                            "name": "Tanzania, United Republic of",
                            "nameLocal": "Tanzania, United Republic of"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-01-07T09:09:38.000Z",
                    "audioBibles": []
                },
                {
                    "id": "8a448a0135a6a70a-01",
                    "dblId": "8a448a0135a6a70a",
                    "relatedDbl": null,
                    "name": "Yapese Bible",
                    "nameLocal": "Bible Ni Thothup",
                    "abbreviation": "yap",
                    "abbreviationLocal": "YAP",
                    "description": "common",
                    "descriptionLocal": "common",
                    "language": {
                        "id": "yap",
                        "name": "Yapese",
                        "nameLocal": "Yapese",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "FM",
                            "name": "Micronesia, Federated States of",
                            "nameLocal": "Micronesia, Federated States of"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-01-07T10:22:20.000Z",
                    "audioBibles": []
                },
                {
                    "id": "b8d1feac6e94bd74-01",
                    "dblId": "b8d1feac6e94bd74",
                    "relatedDbl": null,
                    "name": "Biblica® Open Yoruba Contemporary Bible 2017",
                    "nameLocal": "Biblica® ní oore ọ̀fẹ́ láti lo Bíbélì Mímọ́ ní Èdè Yorùbá Òde-Òní™",
                    "abbreviation": "OYCB",
                    "abbreviationLocal": "BMYO",
                    "description": "Protestant Bible",
                    "descriptionLocal": "Bíbélì Mímọ́",
                    "language": {
                        "id": "yor",
                        "name": "Yoruba",
                        "nameLocal": "Yorùbá",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "NG",
                            "name": "Nigeria",
                            "nameLocal": "Nigeria"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-01-07T12:57:24.000Z",
                    "audioBibles": [
                        {
                            "id": "2691a33c58f144c3-01",
                            "name": "Biblica® Open Yoruba Contemporary Bible, Audio Edition",
                            "nameLocal": "Biblica® ní oore ọ̀fẹ́ láti lo Bíbélì Mímọ́ ní Èdè Yorùbá Òde-Òní™, Ẹ̀dà Aláfetígbó",
                            "dblId": "2691a33c58f144c3"
                        }
                    ]
                },
                {
                    "id": "7e7a704dd32c4280-01",
                    "dblId": "7e7a704dd32c4280",
                    "relatedDbl": null,
                    "name": "The New Testament in Zaramo",
                    "nameLocal": "Lagano da Isambi da Mndewa na Mkombola Wetu Yesu Kilisto",
                    "abbreviation": "Kizalamo",
                    "abbreviationLocal": "Kizalamo",
                    "description": "New Testament in Zaramo",
                    "descriptionLocal": "Lagano da Isambi Muulonzi wa Kizalamo",
                    "language": {
                        "id": "zaj",
                        "name": "Zaramo",
                        "nameLocal": "Kizalamo",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "TZ",
                            "name": "Tanzania, United Republic of",
                            "nameLocal": "Tanzania, United Republic of"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2023-04-27T21:15:32.000Z",
                    "audioBibles": []
                },
                {
                    "id": "828bd246c8dfd883-01",
                    "dblId": "828bd246c8dfd883",
                    "relatedDbl": null,
                    "name": "Zaramo Bible",
                    "nameLocal": "Bibilia ya Kizalamo",
                    "abbreviation": "Kizalamo",
                    "abbreviationLocal": "Kizalamo",
                    "description": "Zaramo Bible",
                    "descriptionLocal": "Bibilia ya Kizalamo",
                    "language": {
                        "id": "zaj",
                        "name": "Zaramo",
                        "nameLocal": "Kizalamo",
                        "script": "Latin",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "TZ",
                            "name": "Tanzania, United Republic of",
                            "nameLocal": "Tanzania, United Republic of"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2023-05-23T21:15:57.000Z",
                    "audioBibles": []
                },
                {
                    "id": "c9f3cf58d557a9f3-01",
                    "dblId": "c9f3cf58d557a9f3",
                    "relatedDbl": null,
                    "name": "The New Testament in Zigua",
                    "nameLocal": "Lagano hya",
                    "abbreviation": "ZiBT",
                    "abbreviationLocal": "ZiBT",
                    "description": "Zigua NT",
                    "descriptionLocal": "Zigua NT",
                    "language": {
                        "id": "ziw",
                        "name": "Zigua",
                        "nameLocal": "Zigula",
                        "script": "Roman",
                        "scriptDirection": "LTR"
                    },
                    "countries": [
                        {
                            "id": "TZ",
                            "name": "Tanzania",
                            "nameLocal": "Tanzania"
                        }
                    ],
                    "type": "text",
                    "updatedAt": "2022-01-07T00:17:56.000Z",
                    "audioBibles": []
                }
            ]
        };
        return bibles.data.map(obj => { return { id: obj.id, name: obj.name, nameLocal: obj.nameLocal, language: obj.language, countries: obj.countries }; });
    }
}
async function fetchBibleVersesFromBibleCom() {
    let frVersionLouisSegond = { id: '93', usfm: 'LSG', lang: "en" }, arVersionEgypt = { id: '13', usfm: 'AVD', lang: 'en' }, enVersion = { id: '13', usfm: 'AVD', lang: 'en' };
    var entireBible = [];
    // await fetchEntireBibleVersion(arVersionEgypt, entireBible, 'AR');
    await fetchEntireBibleVersion(frVersionLouisSegond, entireBible, 'FR');
    console.log(entireBible);
    async function fetchEntireBibleVersion(version, bible, lang) {
        getBibleBooksList(lang)
            .map(async (book) => {
            let chapters = [];
            book.chapters
                .map(async (chapterNumber) => {
                if (chapterNumber.includes('INTRODUCTION') || chapterNumber.toUpperCase() === book.human.toUpperCase())
                    chapterNumber = 'INTRO1';
                await fetchBookChapter(book.usfm, chapterNumber, version, chapters);
            });
            bible.push(chapters);
        });
    }
    async function fetchBookChapter(bookUsfm, chapterNumber, version, chapters) {
        let parser = new DOMParser();
        let request = sendHttpRequest({
            url: getURL(version.lang, version.id, version.usfm, bookUsfm, chapterNumber),
            method: 'GET',
            accept: 'application/json',
            body: 'versionId=' + version.id + '&usfm=' + bookUsfm + '.' + chapterNumber + '.' + version.usfm,
            onLoad: requestOnload
        });
        function requestOnload() {
            let chapterText = request.responseText.replaceAll('\\"', '"');
            let parsed = parser.parseFromString(chapterText, 'text/html');
            let spans = Array.from(parsed.querySelectorAll('span'))
                .filter(span => span.classList.contains('verse'));
            let label;
            let verses = spans.map(span => {
                label = span.querySelector('.label');
                if (!label)
                    return ['\n'];
                return [
                    label.innerText,
                    Array.from(span.querySelectorAll('.content'))
                        .map(span => span.innerText).join('')
                ];
            });
            chapters.push([
                bookUsfm + '.' + chapterNumber,
                verses
            ]);
        }
        ;
    }
    function getURL(lang, bibleID, bibleUsfm, bookID, chapterNumber) {
        let chapter = bookID + '.' + chapterNumber + '.' + bibleUsfm;
        return 'https://www.bible.com/_next/data/nogh7EKJmNa2jhmizj0rV/' + lang + '/bible/' + bibleID + '/' + chapter + '.json?versionId=' + bibleID + '&usfm=' + chapter;
    }
}
/**
 * Returns the text of the specified chapter of the specified book of the specified version of the Bible
 * @param {[string, stirng[][]][][]} bible - the array containing all the books and chapters of the Bible in a given language
 * @param {string} bookName - the initials of a given book of bibleVersion
 * @param {string} chapterNumber - the number of the chapter of the book specified in bookName
 */
function getBibleChapterText(bible, bookName, chapterNumber) {
    if (!bible)
        return;
    return getBibleChapterVerses(bible, bookName, chapterNumber).map(verse => verse.join('')).join('');
}
/**
 * Returns a string[] representing a verse of the specified chapter of the specified book of the specified version of the Bible. The 1st element of the string[] is the verse number, while the 2nd element is the verse text
 * @param {[string, stirng[][]][][]} bible - the array containing all the books and chapters of the Bible in a given language
 * @param {string} bookName - the initials of a given book of bibleVersion
 * @param {string} chapterNumber - the number of the chapter of the book specified in bookName
 * @param {string} verseNumber - the number of the verse to be retrieved
 */
function getBibleVerse(bible, bookName, chapterNumber, verseNumber) {
    return getBibleChapterVerses(bible, bookName, chapterNumber).find(verse => verse[0] === verseNumber);
}
/**
  * Returns an array of [string, string[][]] where the string[][] element represents all the verses of the specified chapter of the specified book of the specified version of the Bible. Each verse is a string[] where the 1st element is the verse number, and the 2nd element is the verse text
  * @param {[string, stirng[][]][][]} bible - the array containing all the books and chapters of the Bible in a given language
  * @param {string} bookName - the initials of a given book of bibleVersion
  * @param {string} chapterNumber - the number of the chapter of the book specified in bookName
  */
function getBibleChapterVerses(bible, bookName, chapterNumber) {
    return getBibleBook(bible, bookName)
        .find(chapter => chapter[0].endsWith('.' + chapterNumber))[1];
}
/**
   * Returns an array of [string, string[][]][] representing an entire book of the specified bibleVersion
   * @param {[string, stirng[][]][][]} bible - the array containing all the books and chapters of the Bible in a given language
   * @param {string} bookName - the initials of a given book of bibleVersion
   */
function getBibleBook(bible, bookName) {
    return bible.find(book => book[0][0].startsWith(bookName));
}
function getBibleBooksList(lang) {
    let bookListAR = [
        {
            "usfm": "GEN",
            "human": "اَلتَّكْوِينُ",
            "human_long": "اَلتَّكْوِينُ",
            "chapters": [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10",
                "11",
                "12",
                "13",
                "14",
                "15",
                "16",
                "17",
                "18",
                "19",
                "20",
                "21",
                "22",
                "23",
                "24",
                "25",
                "26",
                "27",
                "28",
                "29",
                "30",
                "31",
                "32",
                "33",
                "34",
                "35",
                "36",
                "37",
                "38",
                "39",
                "40",
                "41",
                "42",
                "43",
                "44",
                "45",
                "46",
                "47",
                "48",
                "49",
                "50"
            ]
        },
        {
            "usfm": "EXO",
            "human": "اَلْخُرُوجُ",
            "human_long": "اَلْخُرُوجُ",
            "chapters": [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10",
                "11",
                "12",
                "13",
                "14",
                "15",
                "16",
                "17",
                "18",
                "19",
                "20",
                "21",
                "22",
                "23",
                "24",
                "25",
                "26",
                "27",
                "28",
                "29",
                "30",
                "31",
                "32",
                "33",
                "34",
                "35",
                "36",
                "37",
                "38",
                "39",
                "40"
            ]
        },
        {
            "usfm": "LEV",
            "human": "اَللَّاوِيِّينَ",
            "human_long": "اَللَّاوِيِّينَ",
            "chapters": [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10",
                "11",
                "12",
                "13",
                "14",
                "15",
                "16",
                "17",
                "18",
                "19",
                "20",
                "21",
                "22",
                "23",
                "24",
                "25",
                "26",
                "27"
            ]
        },
        {
            "usfm": "NUM",
            "human": "اَلْعَدَد",
            "human_long": "اَلْعَدَد",
            "chapters": [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10",
                "11",
                "12",
                "13",
                "14",
                "15",
                "16",
                "17",
                "18",
                "19",
                "20",
                "21",
                "22",
                "23",
                "24",
                "25",
                "26",
                "27",
                "28",
                "29",
                "30",
                "31",
                "32",
                "33",
                "34",
                "35",
                "36"
            ]
        },
        {
            "usfm": "DEU",
            "human": "اَلتَّثْنِيَة",
            "human_long": "اَلتَّثْنِيَة",
            "chapters": [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10",
                "11",
                "12",
                "13",
                "14",
                "15",
                "16",
                "17",
                "18",
                "19",
                "20",
                "21",
                "22",
                "23",
                "24",
                "25",
                "26",
                "27",
                "28",
                "29",
                "30",
                "31",
                "32",
                "33",
                "34"
            ]
        },
        {
            "usfm": "JOS",
            "human": "يَشُوع",
            "human_long": "يَشُوع",
            "chapters": [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10",
                "11",
                "12",
                "13",
                "14",
                "15",
                "16",
                "17",
                "18",
                "19",
                "20",
                "21",
                "22",
                "23",
                "24"
            ]
        },
        {
            "usfm": "JDG",
            "human": "اَلْقُضَاة",
            "human_long": "اَلْقُضَاة",
            "chapters": [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10",
                "11",
                "12",
                "13",
                "14",
                "15",
                "16",
                "17",
                "18",
                "19",
                "20",
                "21"
            ]
        },
        {
            "usfm": "RUT",
            "human": "رَاعُوث",
            "human_long": "رَاعُوث",
            "chapters": [
                "1",
                "2",
                "3",
                "4"
            ]
        },
        {
            "usfm": "1SA",
            "human": "صَمُوئِيلَ ٱلْأَوَّلُ",
            "human_long": "صَمُوئِيلَ ٱلْأَوَّلُ",
            "chapters": [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10",
                "11",
                "12",
                "13",
                "14",
                "15",
                "16",
                "17",
                "18",
                "19",
                "20",
                "21",
                "22",
                "23",
                "24",
                "25",
                "26",
                "27",
                "28",
                "29",
                "30",
                "31"
            ]
        },
        {
            "usfm": "2SA",
            "human": "صَمُوئِيلَ ٱلثَّانِي",
            "human_long": "صَمُوئِيلَ ٱلثَّانِي",
            "chapters": [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10",
                "11",
                "12",
                "13",
                "14",
                "15",
                "16",
                "17",
                "18",
                "19",
                "20",
                "21",
                "22",
                "23",
                "24"
            ]
        },
        {
            "usfm": "1KI",
            "human": "اَلْمُلُوكِ ٱلْأَوَّلُ",
            "human_long": "اَلْمُلُوكِ ٱلْأَوَّلُ",
            "chapters": [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10",
                "11",
                "12",
                "13",
                "14",
                "15",
                "16",
                "17",
                "18",
                "19",
                "20",
                "21",
                "22"
            ]
        },
        {
            "usfm": "2KI",
            "human": "اَلْمُلُوكِ ٱلثَّانِي",
            "human_long": "اَلْمُلُوكِ ٱلثَّانِي",
            "chapters": [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10",
                "11",
                "12",
                "13",
                "14",
                "15",
                "16",
                "17",
                "18",
                "19",
                "20",
                "21",
                "22",
                "23",
                "24",
                "25"
            ]
        },
        {
            "usfm": "1CH",
            "human": "أَخْبَارِ ٱلْأَوَّلُ",
            "human_long": "أَخْبَارِ ٱلْأَيَّامِ ٱلْأَوَّلُ",
            "chapters": [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10",
                "11",
                "12",
                "13",
                "14",
                "15",
                "16",
                "17",
                "18",
                "19",
                "20",
                "21",
                "22",
                "23",
                "24",
                "25",
                "26",
                "27",
                "28",
                "29"
            ]
        },
        {
            "usfm": "2CH",
            "human": "أَخْبَارِ ٱلثَّانِي",
            "human_long": "أَخْبَارِ ٱلْأَيَّامِ ٱلثَّانِي",
            "chapters": [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10",
                "11",
                "12",
                "13",
                "14",
                "15",
                "16",
                "17",
                "18",
                "19",
                "20",
                "21",
                "22",
                "23",
                "24",
                "25",
                "26",
                "27",
                "28",
                "29",
                "30",
                "31",
                "32",
                "33",
                "34",
                "35",
                "36"
            ]
        },
        {
            "usfm": "EZR",
            "human": "عَزْرَا",
            "human_long": "عَزْرَا",
            "chapters": [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10"
            ]
        },
        {
            "usfm": "NEH",
            "human": "نَحَمْيَا",
            "human_long": "نَحَمْيَا",
            "chapters": [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10",
                "11",
                "12",
                "13"
            ]
        },
        {
            "usfm": "EST",
            "human": "أَسْتِير",
            "human_long": "أَسْتِير",
            "chapters": [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10"
            ]
        },
        {
            "usfm": "JOB",
            "human": "أَيُّوبَ",
            "human_long": "أَيُّوبَ",
            "chapters": [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10",
                "11",
                "12",
                "13",
                "14",
                "15",
                "16",
                "17",
                "18",
                "19",
                "20",
                "21",
                "22",
                "23",
                "24",
                "25",
                "26",
                "27",
                "28",
                "29",
                "30",
                "31",
                "32",
                "33",
                "34",
                "35",
                "36",
                "37",
                "38",
                "39",
                "40",
                "41",
                "42"
            ]
        },
        {
            "usfm": "PSA",
            "human": "اَلْمَزَامِيرُ",
            "human_long": "اَلْمَزَامِيرُ",
            "chapters": [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10",
                "11",
                "12",
                "13",
                "14",
                "15",
                "16",
                "17",
                "18",
                "19",
                "20",
                "21",
                "22",
                "23",
                "24",
                "25",
                "26",
                "27",
                "28",
                "29",
                "30",
                "31",
                "32",
                "33",
                "34",
                "35",
                "36",
                "37",
                "38",
                "39",
                "40",
                "41",
                "42",
                "43",
                "44",
                "45",
                "46",
                "47",
                "48",
                "49",
                "50",
                "51",
                "52",
                "53",
                "54",
                "55",
                "56",
                "57",
                "58",
                "59",
                "60",
                "61",
                "62",
                "63",
                "64",
                "65",
                "66",
                "67",
                "68",
                "69",
                "70",
                "71",
                "72",
                "73",
                "74",
                "75",
                "76",
                "77",
                "78",
                "79",
                "80",
                "81",
                "82",
                "83",
                "84",
                "85",
                "86",
                "87",
                "88",
                "89",
                "90",
                "91",
                "92",
                "93",
                "94",
                "95",
                "96",
                "97",
                "98",
                "99",
                "100",
                "101",
                "102",
                "103",
                "104",
                "105",
                "106",
                "107",
                "108",
                "109",
                "110",
                "111",
                "112",
                "113",
                "114",
                "115",
                "116",
                "117",
                "118",
                "119",
                "120",
                "121",
                "122",
                "123",
                "124",
                "125",
                "126",
                "127",
                "128",
                "129",
                "130",
                "131",
                "132",
                "133",
                "134",
                "135",
                "136",
                "137",
                "138",
                "139",
                "140",
                "141",
                "142",
                "143",
                "144",
                "145",
                "146",
                "147",
                "148",
                "149",
                "150"
            ]
        },
        {
            "usfm": "PRO",
            "human": "أَمْثَالٌ",
            "human_long": "أَمْثَالٌ",
            "chapters": [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10",
                "11",
                "12",
                "13",
                "14",
                "15",
                "16",
                "17",
                "18",
                "19",
                "20",
                "21",
                "22",
                "23",
                "24",
                "25",
                "26",
                "27",
                "28",
                "29",
                "30",
                "31"
            ]
        },
        {
            "usfm": "ECC",
            "human": "اَلْجَامِعَةِ",
            "human_long": "اَلْجَامِعَةِ",
            "chapters": [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10",
                "11",
                "12"
            ]
        },
        {
            "usfm": "SNG",
            "human": "نَشِيدُ ٱلْأَنْشَادِ",
            "human_long": "نَشِيدُ ٱلْأَنْشَادِ",
            "chapters": [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8"
            ]
        },
        {
            "usfm": "ISA",
            "human": "إِشَعْيَاءَ",
            "human_long": "إِشَعْيَاءَ",
            "chapters": [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10",
                "11",
                "12",
                "13",
                "14",
                "15",
                "16",
                "17",
                "18",
                "19",
                "20",
                "21",
                "22",
                "23",
                "24",
                "25",
                "26",
                "27",
                "28",
                "29",
                "30",
                "31",
                "32",
                "33",
                "34",
                "35",
                "36",
                "37",
                "38",
                "39",
                "40",
                "41",
                "42",
                "43",
                "44",
                "45",
                "46",
                "47",
                "48",
                "49",
                "50",
                "51",
                "52",
                "53",
                "54",
                "55",
                "56",
                "57",
                "58",
                "59",
                "60",
                "61",
                "62",
                "63",
                "64",
                "65",
                "66"
            ]
        },
        {
            "usfm": "JER",
            "human": "إِرْمِيَا",
            "human_long": "إِرْمِيَا",
            "chapters": [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10",
                "11",
                "12",
                "13",
                "14",
                "15",
                "16",
                "17",
                "18",
                "19",
                "20",
                "21",
                "22",
                "23",
                "24",
                "25",
                "26",
                "27",
                "28",
                "29",
                "30",
                "31",
                "32",
                "33",
                "34",
                "35",
                "36",
                "37",
                "38",
                "39",
                "40",
                "41",
                "42",
                "43",
                "44",
                "45",
                "46",
                "47",
                "48",
                "49",
                "50",
                "51",
                "52"
            ]
        },
        {
            "usfm": "LAM",
            "human": "مَرَاثِي إِرْمِيَا",
            "human_long": "مَرَاثِي إِرْمِيَا",
            "chapters": [
                "1",
                "2",
                "3",
                "4",
                "5"
            ]
        },
        {
            "usfm": "EZK",
            "human": "حِزْقِيَال",
            "human_long": "حِزْقِيَال",
            "chapters": [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10",
                "11",
                "12",
                "13",
                "14",
                "15",
                "16",
                "17",
                "18",
                "19",
                "20",
                "21",
                "22",
                "23",
                "24",
                "25",
                "26",
                "27",
                "28",
                "29",
                "30",
                "31",
                "32",
                "33",
                "34",
                "35",
                "36",
                "37",
                "38",
                "39",
                "40",
                "41",
                "42",
                "43",
                "44",
                "45",
                "46",
                "47",
                "48"
            ]
        },
        {
            "usfm": "DAN",
            "human": "دَانِيآل",
            "human_long": "دَانِيآل",
            "chapters": [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10",
                "11",
                "12"
            ]
        },
        {
            "usfm": "HOS",
            "human": "هُوشَع",
            "human_long": "هُوشَع",
            "chapters": [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10",
                "11",
                "12",
                "13",
                "14"
            ]
        },
        {
            "usfm": "JOL",
            "human": "يُوئِيل",
            "human_long": "يُوئِيل",
            "chapters": [
                "1",
                "2",
                "3"
            ]
        },
        {
            "usfm": "AMO",
            "human": "عَامُوس",
            "human_long": "عَامُوس",
            "chapters": [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9"
            ]
        },
        {
            "usfm": "OBA",
            "human": "عُوبَدْيَا",
            "human_long": "عُوبَدْيَا",
            "chapters": [
                "1"
            ]
        },
        {
            "usfm": "JON",
            "human": "يُونَان",
            "human_long": "يُونَان",
            "chapters": [
                "1",
                "2",
                "3",
                "4"
            ]
        },
        {
            "usfm": "MIC",
            "human": "مِيخَا",
            "human_long": "مِيخَا",
            "chapters": [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7"
            ]
        },
        {
            "usfm": "NAM",
            "human": "نَاحُوم",
            "human_long": "نَاحُوم",
            "chapters": [
                "1",
                "2",
                "3"
            ]
        },
        {
            "usfm": "HAB",
            "human": "حَبَقُّوق",
            "human_long": "حَبَقُّوق",
            "chapters": [
                "1",
                "2",
                "3"
            ]
        },
        {
            "usfm": "ZEP",
            "human": "صَفَنْيَا",
            "human_long": "صَفَنْيَا",
            "chapters": [
                "1",
                "2",
                "3"
            ]
        },
        {
            "usfm": "HAG",
            "human": "حَجَّي",
            "human_long": "حَجَّي",
            "chapters": [
                "1",
                "2"
            ]
        },
        {
            "usfm": "ZEC",
            "human": "زَكَريَّا",
            "human_long": "زَكَريَّا",
            "chapters": [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10",
                "11",
                "12",
                "13",
                "14"
            ]
        },
        {
            "usfm": "MAL",
            "human": "مَلَاخِي",
            "human_long": "مَلَاخِي",
            "chapters": [
                "1",
                "2",
                "3",
                "4"
            ]
        },
        {
            "usfm": "MAT",
            "human": "مَتَّى",
            "human_long": "إِنْجِيلُ مَتَّى",
            "chapters": [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10",
                "11",
                "12",
                "13",
                "14",
                "15",
                "16",
                "17",
                "18",
                "19",
                "20",
                "21",
                "22",
                "23",
                "24",
                "25",
                "26",
                "27",
                "28"
            ]
        },
        {
            "usfm": "MRK",
            "human": "مَرْقُسَ",
            "human_long": "إِنْجِيلُ مَرْقُسَ",
            "chapters": [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10",
                "11",
                "12",
                "13",
                "14",
                "15",
                "16"
            ]
        },
        {
            "usfm": "LUK",
            "human": "لُوقَا",
            "human_long": "إِنْجِيلُ لُوقَا",
            "chapters": [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10",
                "11",
                "12",
                "13",
                "14",
                "15",
                "16",
                "17",
                "18",
                "19",
                "20",
                "21",
                "22",
                "23",
                "24"
            ]
        },
        {
            "usfm": "JHN",
            "human": "يُوحَنَّا",
            "human_long": "إِنْجِيلُ يُوحَنَّا",
            "chapters": [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10",
                "11",
                "12",
                "13",
                "14",
                "15",
                "16",
                "17",
                "18",
                "19",
                "20",
                "21"
            ]
        },
        {
            "usfm": "ACT",
            "human": "أَعْمَالُ ٱلرُّسُلِ",
            "human_long": "أَعْمَالُ ٱلرُّسُلِ",
            "chapters": [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10",
                "11",
                "12",
                "13",
                "14",
                "15",
                "16",
                "17",
                "18",
                "19",
                "20",
                "21",
                "22",
                "23",
                "24",
                "25",
                "26",
                "27",
                "28"
            ]
        },
        {
            "usfm": "ROM",
            "human": "رُومِيَةَ",
            "human_long": "رِسَالَةُ بُولُسَ ٱلرَّسُولِ إِلَى أَهْلِ رُومِيَةَ",
            "chapters": [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10",
                "11",
                "12",
                "13",
                "14",
                "15",
                "16"
            ]
        },
        {
            "usfm": "1CO",
            "human": "كُورِنْثُوسَ  ٱلأُولَى",
            "human_long": "رِسَالَةُ بُولُسَ ٱلرَّسُولِ ٱلأُولَى إِلَى أَهْلِ كُورِنْثُوسَ",
            "chapters": [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10",
                "11",
                "12",
                "13",
                "14",
                "15",
                "16"
            ]
        },
        {
            "usfm": "2CO",
            "human": "كُورِنْثُوسَ  ٱلثَّانِيةُ",
            "human_long": "رِسَالَةُ بُولُسَ ٱلرَّسُولِ ٱلثَّانِيةُ إِلَى أَهْلِ كُورِنْثُوسَ",
            "chapters": [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10",
                "11",
                "12",
                "13"
            ]
        },
        {
            "usfm": "GAL",
            "human": "غَلَاطِيَّةَ",
            "human_long": "رِسَالَةُ بُولُسَ ٱلرَّسُولِ إِلَى أَهْلِ غَلَاطِيَّةَ",
            "chapters": [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6"
            ]
        },
        {
            "usfm": "EPH",
            "human": "أَفَسُسَ",
            "human_long": "رِسَالَةُ بُولُسَ ٱلرَّسُولِ إِلَى أَهْلِ أَفَسُسَ",
            "chapters": [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6"
            ]
        },
        {
            "usfm": "PHP",
            "human": "فِيلِبِّي",
            "human_long": "رِسَالَةُ بُولُسَ ٱلرَّسُولِ إِلَى أَهْلِ فِيلِبِّي",
            "chapters": [
                "1",
                "2",
                "3",
                "4"
            ]
        },
        {
            "usfm": "COL",
            "human": "كُولُوسِّي",
            "human_long": "رِسَالَةُ بُولُسَ ٱلرَّسُولِ إِلَى أَهْلِ كُولُوسِّي",
            "chapters": [
                "1",
                "2",
                "3",
                "4"
            ]
        },
        {
            "usfm": "1TH",
            "human": "تَسَالُونِيكِي ٱلأُولَى",
            "human_long": "رِسَالَةُ بُولُسَ ٱلرَّسُولِ ٱلأُولَى إِلَى أَهْلِ تَسَالُونِيكِي",
            "chapters": [
                "1",
                "2",
                "3",
                "4",
                "5"
            ]
        },
        {
            "usfm": "2TH",
            "human": "تَسَالُونِيكِي ٱلثَّانِيةُ",
            "human_long": "رِسَالَةُ بُولُسَ ٱلرَّسُولِ ٱلثَّانِيةُ إِلَى أَهْلِ تَسَالُونِيكِي",
            "chapters": [
                "1",
                "2",
                "3"
            ]
        },
        {
            "usfm": "1TI",
            "human": "تِيمُوثَاوُسَ ٱلْأُولَى",
            "human_long": "رِسَالَةُ بُولُسَ ٱلرَّسُولِ ٱلْأُولَى إِلَى تِيمُوثَاوُسَ",
            "chapters": [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6"
            ]
        },
        {
            "usfm": "2TI",
            "human": "تِيمُوثَاوُسَ ٱلثَّانِيةُ",
            "human_long": "رِسَالَةُ بُولُسَ ٱلرَّسُولِ ٱلثَّانِيةُ إِلَى تِيمُوثَاوُسَ",
            "chapters": [
                "1",
                "2",
                "3",
                "4"
            ]
        },
        {
            "usfm": "TIT",
            "human": "تِيطُسَ",
            "human_long": "رِسَالَةُ بُولُسَ ٱلرَّسُولِ إِلَى تِيطُسَ",
            "chapters": [
                "1",
                "2",
                "3"
            ]
        },
        {
            "usfm": "PHM",
            "human": "فِلِيمُونَ",
            "human_long": "رِسَالَةُ بُولُسَ ٱلرَّسُولِ إِلَى فِلِيمُونَ",
            "chapters": [
                "1"
            ]
        },
        {
            "usfm": "HEB",
            "human": "ٱلْعِبْرَانِيِّينَ",
            "human_long": "اَلرِّسَالَةُ إِلَى ٱلْعِبْرَانِيِّينَ",
            "chapters": [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10",
                "11",
                "12",
                "13"
            ]
        },
        {
            "usfm": "JAS",
            "human": "يَعْقُوبَ",
            "human_long": "رِسَالَةُ يَعْقُوبَ",
            "chapters": [
                "1",
                "2",
                "3",
                "4",
                "5"
            ]
        },
        {
            "usfm": "1PE",
            "human": "بُطْرُسَ ٱلْأُولَى",
            "human_long": "رِسَالَةُ بُطْرُسَ ٱلرَّسُولِ ٱلْأُولَى",
            "chapters": [
                "1",
                "2",
                "3",
                "4",
                "5"
            ]
        },
        {
            "usfm": "2PE",
            "human": "بُطْرُسَ ٱلثَّانِيَةُ",
            "human_long": "رِسَالَةُ بُطْرُسَ ٱلرَّسُولِ ٱلثَّانِيَةُ",
            "chapters": [
                "1",
                "2",
                "3"
            ]
        },
        {
            "usfm": "1JN",
            "human": "يُوحَنَّا ٱلْأُولَى",
            "human_long": "رِسَالَةُ يُوحَنَّا ٱلرَّسُولِ ٱلْأُولَى",
            "chapters": [
                "1",
                "2",
                "3",
                "4",
                "5"
            ]
        },
        {
            "usfm": "2JN",
            "human": "يُوحَنَّا ٱلثَّانِيَةُ",
            "human_long": "رِسَالَةُ يُوحَنَّا ٱلرَّسُولِ ٱلثَّانِيَةُ",
            "chapters": [
                "1"
            ]
        },
        {
            "usfm": "3JN",
            "human": "يُوحَنَّا ٱلثَّالِثَةُ",
            "human_long": "رِسَالَةُ يُوحَنَّا ٱلرَّسُولِ ٱلثَّالِثَةُ",
            "chapters": [
                "1"
            ]
        },
        {
            "usfm": "JUD",
            "human": "يَهُوذَا",
            "human_long": "رِسَالَةُ يَهُوذَا",
            "chapters": [
                "1"
            ]
        },
        {
            "usfm": "REV",
            "human": "رُؤْيَا يُوحَنَّا",
            "human_long": "رُؤْيَا يُوحَنَّا ٱللَّاهُوتِيِّ",
            "chapters": [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10",
                "11",
                "12",
                "13",
                "14",
                "15",
                "16",
                "17",
                "18",
                "19",
                "20",
                "21",
                "22"
            ]
        }
    ];
    let bookListFR = [
        {
            "usfm": "GEN",
            "human": "Genèse",
            "human_long": "Genèse",
            "chapters": [
                "INTRODUCTION À LA GENÈSE",
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10",
                "11",
                "12",
                "13",
                "14",
                "15",
                "16",
                "17",
                "18",
                "19",
                "20",
                "21",
                "22",
                "23",
                "24",
                "25",
                "26",
                "27",
                "28",
                "29",
                "30",
                "31",
                "32",
                "33",
                "34",
                "35",
                "36",
                "37",
                "38",
                "39",
                "40",
                "41",
                "42",
                "43",
                "44",
                "45",
                "46",
                "47",
                "48",
                "49",
                "50"
            ]
        },
        {
            "usfm": "EXO",
            "human": "Exode",
            "human_long": "Exode",
            "chapters": [
                "EXODE",
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10",
                "11",
                "12",
                "13",
                "14",
                "15",
                "16",
                "17",
                "18",
                "19",
                "20",
                "21",
                "22",
                "23",
                "24",
                "25",
                "26",
                "27",
                "28",
                "29",
                "30",
                "31",
                "32",
                "33",
                "34",
                "35",
                "36",
                "37",
                "38",
                "39",
                "40"
            ]
        },
        {
            "usfm": "LEV",
            "human": "Lévitique",
            "human_long": "Lévitique",
            "chapters": [
                "INTRODUCTION AU LÉVITIQUE",
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10",
                "11",
                "12",
                "13",
                "14",
                "15",
                "16",
                "17",
                "18",
                "19",
                "20",
                "21",
                "22",
                "23",
                "24",
                "25",
                "26",
                "27"
            ]
        },
        {
            "usfm": "NUM",
            "human": "Nombres",
            "human_long": "Nombres",
            "chapters": [
                "INTRODUCTION AUX NOMBRES",
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10",
                "11",
                "12",
                "13",
                "14",
                "15",
                "16",
                "17",
                "18",
                "19",
                "20",
                "21",
                "22",
                "23",
                "24",
                "25",
                "26",
                "27",
                "28",
                "29",
                "30",
                "31",
                "32",
                "33",
                "34",
                "35",
                "36"
            ]
        },
        {
            "usfm": "DEU",
            "human": "Deutéronome",
            "human_long": "Deutéronome",
            "chapters": [
                "INTRODUCTION AU DEUTÉRONOME",
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10",
                "11",
                "12",
                "13",
                "14",
                "15",
                "16",
                "17",
                "18",
                "19",
                "20",
                "21",
                "22",
                "23",
                "24",
                "25",
                "26",
                "27",
                "28",
                "29",
                "30",
                "31",
                "32",
                "33",
                "34"
            ]
        },
        {
            "usfm": "JOS",
            "human": "Josué",
            "human_long": "Josué",
            "chapters": [
                "INTRODUCTION AU LIVRE DE JOSUÉ",
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10",
                "11",
                "12",
                "13",
                "14",
                "15",
                "16",
                "17",
                "18",
                "19",
                "20",
                "21",
                "22",
                "23",
                "24"
            ]
        },
        {
            "usfm": "JDG",
            "human": "Juges",
            "human_long": "Juges",
            "chapters": [
                "INTRODUCTION AU LIVRE DES JUGES",
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10",
                "11",
                "12",
                "13",
                "14",
                "15",
                "16",
                "17",
                "18",
                "19",
                "20",
                "21"
            ]
        },
        {
            "usfm": "RUT",
            "human": "Ruth",
            "human_long": "Ruth",
            "chapters": [
                "INTRODUCTION AU LIVRE DE RUTH",
                "1",
                "2",
                "3",
                "4"
            ]
        },
        {
            "usfm": "1SA",
            "human": "1 Samuel",
            "human_long": "Premier livre de Samuel",
            "chapters": [
                "INTRODUCTION AU PREMIER LIVRE DE SAMUEL",
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10",
                "11",
                "12",
                "13",
                "14",
                "15",
                "16",
                "17",
                "18",
                "19",
                "20",
                "21",
                "22",
                "23",
                "24",
                "25",
                "26",
                "27",
                "28",
                "29",
                "30",
                "31"
            ]
        },
        {
            "usfm": "2SA",
            "human": "2 Samuel",
            "human_long": "Deuxième livre de Samuel",
            "chapters": [
                "INTRODUCTION AU SECOND LIVRE DE SAMUEL",
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10",
                "11",
                "12",
                "13",
                "14",
                "15",
                "16",
                "17",
                "18",
                "19",
                "20",
                "21",
                "22",
                "23",
                "24"
            ]
        },
        {
            "usfm": "1KI",
            "human": "1 Rois",
            "human_long": "Premier livre des Rois",
            "chapters": [
                "INTRODUCTION AU PREMIER LIVRE DES ROIS",
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10",
                "11",
                "12",
                "13",
                "14",
                "15",
                "16",
                "17",
                "18",
                "19",
                "20",
                "21",
                "22"
            ]
        },
        {
            "usfm": "2KI",
            "human": "2 Rois",
            "human_long": "Second livre des Rois",
            "chapters": [
                "INTRODUCTION AU SECOND LIVRE DES ROIS",
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10",
                "11",
                "12",
                "13",
                "14",
                "15",
                "16",
                "17",
                "18",
                "19",
                "20",
                "21",
                "22",
                "23",
                "24",
                "25"
            ]
        },
        {
            "usfm": "1CH",
            "human": "1 Chroniques",
            "human_long": "Premier livre des Chroniques",
            "chapters": [
                "INTRODUCTION AU PREMIER LIVRE DES CHRONIQUES",
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10",
                "11",
                "12",
                "13",
                "14",
                "15",
                "16",
                "17",
                "18",
                "19",
                "20",
                "21",
                "22",
                "23",
                "24",
                "25",
                "26",
                "27",
                "28",
                "29"
            ]
        },
        {
            "usfm": "2CH",
            "human": "2 Chroniques",
            "human_long": "Second livre des Chroniques",
            "chapters": [
                "INTRODUCTION AU SECOND LIVRE DES CHRONIQUES",
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10",
                "11",
                "12",
                "13",
                "14",
                "15",
                "16",
                "17",
                "18",
                "19",
                "20",
                "21",
                "22",
                "23",
                "24",
                "25",
                "26",
                "27",
                "28",
                "29",
                "30",
                "31",
                "32",
                "33",
                "34",
                "35",
                "36"
            ]
        },
        {
            "usfm": "EZR",
            "human": "Esdras",
            "human_long": "Esdras",
            "chapters": [
                "INTRODUCTION AU LIVRE D’ESDRAS",
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10"
            ]
        },
        {
            "usfm": "NEH",
            "human": "Néhémie",
            "human_long": "Néhémie",
            "chapters": [
                "INTRODUCTION AU LIVRE DE NÉHÉMIE",
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10",
                "11",
                "12",
                "13"
            ]
        },
        {
            "usfm": "EST",
            "human": "Esther",
            "human_long": "Esther",
            "chapters": [
                "INTRODUCTION AU LIVRE D’ESTHER",
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10"
            ]
        },
        {
            "usfm": "JOB",
            "human": "Job",
            "human_long": "Job",
            "chapters": [
                "INTRODUCTION AU LIVRE DE JOB",
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10",
                "11",
                "12",
                "13",
                "14",
                "15",
                "16",
                "17",
                "18",
                "19",
                "20",
                "21",
                "22",
                "23",
                "24",
                "25",
                "26",
                "27",
                "28",
                "29",
                "30",
                "31",
                "32",
                "33",
                "34",
                "35",
                "36",
                "37",
                "38",
                "39",
                "40",
                "41",
                "42"
            ]
        },
        {
            "usfm": "PSA",
            "human": "Psaumes",
            "human_long": "Psaumes",
            "chapters": [
                "INTRODUCTION AU LIVRE DES PSAUMES",
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10",
                "11",
                "12",
                "13",
                "14",
                "15",
                "16",
                "17",
                "18",
                "19",
                "20",
                "21",
                "22",
                "23",
                "24",
                "25",
                "26",
                "27",
                "28",
                "29",
                "30",
                "31",
                "32",
                "33",
                "34",
                "35",
                "36",
                "37",
                "38",
                "39",
                "40",
                "41",
                "42",
                "43",
                "44",
                "45",
                "46",
                "47",
                "48",
                "49",
                "50",
                "51",
                "52",
                "53",
                "54",
                "55",
                "56",
                "57",
                "58",
                "59",
                "60",
                "61",
                "62",
                "63",
                "64",
                "65",
                "66",
                "67",
                "68",
                "69",
                "70",
                "71",
                "72",
                "73",
                "74",
                "75",
                "76",
                "77",
                "78",
                "79",
                "80",
                "81",
                "82",
                "83",
                "84",
                "85",
                "86",
                "87",
                "88",
                "89",
                "90",
                "91",
                "92",
                "93",
                "94",
                "95",
                "96",
                "97",
                "98",
                "99",
                "100",
                "101",
                "102",
                "103",
                "104",
                "105",
                "106",
                "107",
                "108",
                "109",
                "110",
                "111",
                "112",
                "113",
                "114",
                "115",
                "116",
                "117",
                "118",
                "119",
                "120",
                "121",
                "122",
                "123",
                "124",
                "125",
                "126",
                "127",
                "128",
                "129",
                "130",
                "131",
                "132",
                "133",
                "134",
                "135",
                "136",
                "137",
                "138",
                "139",
                "140",
                "141",
                "142",
                "143",
                "144",
                "145",
                "146",
                "147",
                "148",
                "149",
                "150"
            ]
        },
        {
            "usfm": "PRO",
            "human": "Proverbes",
            "human_long": "Proverbes",
            "chapters": [
                "INTRODUCTION AU LIVRE DES",
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10",
                "11",
                "12",
                "13",
                "14",
                "15",
                "16",
                "17",
                "18",
                "19",
                "20",
                "21",
                "22",
                "23",
                "24",
                "25",
                "26",
                "27",
                "28",
                "29",
                "30",
                "31"
            ]
        },
        {
            "usfm": "ECC",
            "human": "Ecclésiaste",
            "human_long": "L'Ecclésiaste",
            "chapters": [
                "INTRODUCTION AU LIVRE DE L’ECCLÉSIASTE",
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10",
                "11",
                "12"
            ]
        },
        {
            "usfm": "SNG",
            "human": "Cantique",
            "human_long": "Cantique des Cantiques",
            "chapters": [
                "INTRODUCTION AU LIVRE DU CANTIQUE DES CANTIQUES",
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8"
            ]
        },
        {
            "usfm": "ISA",
            "human": "Ésaïe",
            "human_long": "Ésaïe",
            "chapters": [
                "INTRODUCTION AU LIVRE D’ÉSAÏE",
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10",
                "11",
                "12",
                "13",
                "14",
                "15",
                "16",
                "17",
                "18",
                "19",
                "20",
                "21",
                "22",
                "23",
                "24",
                "25",
                "26",
                "27",
                "28",
                "29",
                "30",
                "31",
                "32",
                "33",
                "34",
                "35",
                "36",
                "37",
                "38",
                "39",
                "40",
                "41",
                "42",
                "43",
                "44",
                "45",
                "46",
                "47",
                "48",
                "49",
                "50",
                "51",
                "52",
                "53",
                "54",
                "55",
                "56",
                "57",
                "58",
                "59",
                "60",
                "61",
                "62",
                "63",
                "64",
                "65",
                "66"
            ]
        },
        {
            "usfm": "JER",
            "human": "Jérémie",
            "human_long": "Jérémie",
            "chapters": [
                "INTRODUCTION AU LIVRE DE JÉRÉMIE",
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10",
                "11",
                "12",
                "13",
                "14",
                "15",
                "16",
                "17",
                "18",
                "19",
                "20",
                "21",
                "22",
                "23",
                "24",
                "25",
                "26",
                "27",
                "28",
                "29",
                "30",
                "31",
                "32",
                "33",
                "34",
                "35",
                "36",
                "37",
                "38",
                "39",
                "40",
                "41",
                "42",
                "43",
                "44",
                "45",
                "46",
                "47",
                "48",
                "49",
                "50",
                "51",
                "52"
            ]
        },
        {
            "usfm": "LAM",
            "human": "Lamentations",
            "human_long": "Lamentations",
            "chapters": [
                "INTRODUCTION AU LIVRE DES LAMENTATIONS DE JÉRÉMIE",
                "1",
                "2",
                "3",
                "4",
                "5"
            ]
        },
        {
            "usfm": "EZK",
            "human": "Ézékiel",
            "human_long": "Ézékiel",
            "chapters": [
                "INTRODUCTION AU LIVRE D’ÉZÉCHIEL",
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10",
                "11",
                "12",
                "13",
                "14",
                "15",
                "16",
                "17",
                "18",
                "19",
                "20",
                "21",
                "22",
                "23",
                "24",
                "25",
                "26",
                "27",
                "28",
                "29",
                "30",
                "31",
                "32",
                "33",
                "34",
                "35",
                "36",
                "37",
                "38",
                "39",
                "40",
                "41",
                "42",
                "43",
                "44",
                "45",
                "46",
                "47",
                "48"
            ]
        },
        {
            "usfm": "DAN",
            "human": "Daniel",
            "human_long": "Daniel",
            "chapters": [
                "INTRODUCTION AU LIVRE DE DANIEL",
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10",
                "11",
                "12"
            ]
        },
        {
            "usfm": "HOS",
            "human": "Osée",
            "human_long": "Osée",
            "chapters": [
                "INTRODUCTION AU LIVRE D’OSÉE",
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10",
                "11",
                "12",
                "13",
                "14"
            ]
        },
        {
            "usfm": "JOL",
            "human": "Joël",
            "human_long": "Joël",
            "chapters": [
                "INTRODUCTION AU LIVRE DE JOËL",
                "1",
                "2",
                "3"
            ]
        },
        {
            "usfm": "AMO",
            "human": "Amos",
            "human_long": "Amos",
            "chapters": [
                "INTRODUCTION AU LIVRE D’AMOS",
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9"
            ]
        },
        {
            "usfm": "OBA",
            "human": "Abdias",
            "human_long": "Abdias",
            "chapters": [
                "INTRODUCTION AU LIVRE D’ABDIAS",
                "1"
            ]
        },
        {
            "usfm": "JON",
            "human": "Jonas",
            "human_long": "Jonas",
            "chapters": [
                "INTRODUCTION AU LIVRE DE JONAS",
                "1",
                "2",
                "3",
                "4"
            ]
        },
        {
            "usfm": "MIC",
            "human": "Michée",
            "human_long": "Michée",
            "chapters": [
                "INTRODUCTION AU LIVRE DE MICHÉE",
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7"
            ]
        },
        {
            "usfm": "NAM",
            "human": "Nahum",
            "human_long": "Nahum",
            "chapters": [
                "INTRODUCTION AU LIVRE DE NAHUM",
                "1",
                "2",
                "3"
            ]
        },
        {
            "usfm": "HAB",
            "human": "Habacuc",
            "human_long": "Habacuc",
            "chapters": [
                "INTRODUCTION AU LIVRE D’HABACUC",
                "1",
                "2",
                "3"
            ]
        },
        {
            "usfm": "ZEP",
            "human": "Sophonie",
            "human_long": "Sophonie",
            "chapters": [
                "INTRODUCTION AU LIVRE DE SOPHONIE",
                "1",
                "2",
                "3"
            ]
        },
        {
            "usfm": "HAG",
            "human": "Aggée",
            "human_long": "Aggée",
            "chapters": [
                "INTRODUCTION AU LIVRE D’AGGÉE",
                "1",
                "2"
            ]
        },
        {
            "usfm": "ZEC",
            "human": "Zacharie",
            "human_long": "Zacharie",
            "chapters": [
                "INTRODUCTION AU LIVRE DE ZACHARIE",
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10",
                "11",
                "12",
                "13",
                "14"
            ]
        },
        {
            "usfm": "MAL",
            "human": "Malachie",
            "human_long": "Malachie",
            "chapters": [
                "INTRODUCTION AU LIVRE DE MALACHIE",
                "1",
                "2",
                "3",
                "4"
            ]
        },
        {
            "usfm": "MAT",
            "human": "Matthieu",
            "human_long": "Évangile selon Matthieu",
            "chapters": [
                "INTRODUCTION À L’ÉVANGILE SELON MATTHIEU",
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10",
                "11",
                "12",
                "13",
                "14",
                "15",
                "16",
                "17",
                "18",
                "19",
                "20",
                "21",
                "22",
                "23",
                "24",
                "25",
                "26",
                "27",
                "28"
            ]
        },
        {
            "usfm": "MRK",
            "human": "Marc",
            "human_long": "Évangile selon Marc",
            "chapters": [
                "INTRODUCTION À L’ÉVANGILE SELON MARC",
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10",
                "11",
                "12",
                "13",
                "14",
                "15",
                "16"
            ]
        },
        {
            "usfm": "LUK",
            "human": "Luc",
            "human_long": "Évangile selon Luc",
            "chapters": [
                "INTRODUCTION À L’ÉVANGILE SELON LUC",
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10",
                "11",
                "12",
                "13",
                "14",
                "15",
                "16",
                "17",
                "18",
                "19",
                "20",
                "21",
                "22",
                "23",
                "24"
            ]
        },
        {
            "usfm": "JHN",
            "human": "Jean",
            "human_long": "Évangile selon Jean",
            "chapters": [
                "INTRODUCTION À L’ÉVANGILE SELON JEAN",
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10",
                "11",
                "12",
                "13",
                "14",
                "15",
                "16",
                "17",
                "18",
                "19",
                "20",
                "21"
            ]
        },
        {
            "usfm": "ACT",
            "human": "Actes",
            "human_long": "Actes des Apôtres",
            "chapters": [
                "INTRODUCTION AU LIVRE DES ACTES DES APÔTRES",
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10",
                "11",
                "12",
                "13",
                "14",
                "15",
                "16",
                "17",
                "18",
                "19",
                "20",
                "21",
                "22",
                "23",
                "24",
                "25",
                "26",
                "27",
                "28"
            ]
        },
        {
            "usfm": "ROM",
            "human": "Romains",
            "human_long": "Épître de Paul aux Romains",
            "chapters": [
                "INTRODUCTION À L’ÉPÎTRE AUX ROMAINS",
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10",
                "11",
                "12",
                "13",
                "14",
                "15",
                "16"
            ]
        },
        {
            "usfm": "1CO",
            "human": "1 Corinthiens",
            "human_long": "Première épître de Paul aux Corinthiens",
            "chapters": [
                "INTRODUCTION À LA PREMIÈRE ÉPÎTRE AUX CORINTHIENS",
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10",
                "11",
                "12",
                "13",
                "14",
                "15",
                "16"
            ]
        },
        {
            "usfm": "2CO",
            "human": "2 Corinthiens",
            "human_long": "Seconde épître de Paul aux Corinthiens",
            "chapters": [
                "INTRODUCTION À LA DEUXIÈME ÉPÎTRE AUX CORINTHIENS",
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10",
                "11",
                "12",
                "13"
            ]
        },
        {
            "usfm": "GAL",
            "human": "Galates",
            "human_long": "Épître de Paul aux Galates",
            "chapters": [
                "INTRODUCTION À L’ÉPÎTRE AUX GALATES",
                "1",
                "2",
                "3",
                "4",
                "5",
                "6"
            ]
        },
        {
            "usfm": "EPH",
            "human": "Éphésiens",
            "human_long": "Épître de Paul aux Éphésiens",
            "chapters": [
                "INTRODUCTION À L’ÉPÎTRE AUX ÉPHÉSIENS",
                "1",
                "2",
                "3",
                "4",
                "5",
                "6"
            ]
        },
        {
            "usfm": "PHP",
            "human": "Philippiens",
            "human_long": "Épître de Paul aux Philippiens",
            "chapters": [
                "INTRODUCTION À L’ÉPÎTRE AUX PHILIPPIENS",
                "1",
                "2",
                "3",
                "4"
            ]
        },
        {
            "usfm": "COL",
            "human": "Colossiens",
            "human_long": "Épître de Paul aux Colossiens",
            "chapters": [
                "INTRODUCTION À L’ÉPÎTRE AUX COLOSSIENS",
                "1",
                "2",
                "3",
                "4"
            ]
        },
        {
            "usfm": "1TH",
            "human": "1 Thessaloniciens",
            "human_long": "Première épître de Paul aux Thessaloniciens",
            "chapters": [
                "INTRODUCTION À LA PREMIÈRE ÉPÎTRE AUX THESSALONICIENS",
                "1",
                "2",
                "3",
                "4",
                "5"
            ]
        },
        {
            "usfm": "2TH",
            "human": "2 Thessaloniciens",
            "human_long": "Second épître de Paul aux Thessaloniciens",
            "chapters": [
                "INTRODUCTION À LA DEUXIÈME ÉPÎTRE AUX THESSALONICIENS",
                "1",
                "2",
                "3"
            ]
        },
        {
            "usfm": "1TI",
            "human": "1 Timothée",
            "human_long": "Première épître de Paul à Timothée",
            "chapters": [
                "INTRODUCTION À LA PREMIÈRE ÉPÎTRE À TIMOTHÉE",
                "1",
                "2",
                "3",
                "4",
                "5",
                "6"
            ]
        },
        {
            "usfm": "2TI",
            "human": "2 Timothée",
            "human_long": "Second épître de Paul à Timothée",
            "chapters": [
                "INTRODUCTION À LA DEUXIÈME ÉPÎTRE À TIMOTHÉE",
                "1",
                "2",
                "3",
                "4"
            ]
        },
        {
            "usfm": "TIT",
            "human": "Tite",
            "human_long": "Épître de Paul à Tite",
            "chapters": [
                "INTRODUCTION À L’ÉPÎTRE À TITE",
                "1",
                "2",
                "3"
            ]
        },
        {
            "usfm": "PHM",
            "human": "Philémon",
            "human_long": "Épître de Paul à Philémon",
            "chapters": [
                "INTRODUCTION À L’ÉPÎTRE À PHILÉMON",
                "1"
            ]
        },
        {
            "usfm": "HEB",
            "human": "Hébreux",
            "human_long": "Épître aux Hébreux",
            "chapters": [
                "INTRODUCTION À L’ÉPÎTRE AUX HÉBREUX",
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10",
                "11",
                "12",
                "13"
            ]
        },
        {
            "usfm": "JAS",
            "human": "Jacques",
            "human_long": "Épître de Jacques",
            "chapters": [
                "INTRODUCTION À L’ÉPÎTRE DE JACQUES",
                "1",
                "2",
                "3",
                "4",
                "5"
            ]
        },
        {
            "usfm": "1PE",
            "human": "1 Pierre",
            "human_long": "Première épître de Pierre",
            "chapters": [
                "INTRODUCTION À LA PREMIÈRE ÉPÎTRE DE PIERRE",
                "1",
                "2",
                "3",
                "4",
                "5"
            ]
        },
        {
            "usfm": "2PE",
            "human": "2 Pierre",
            "human_long": "Seconde épître de Pierre",
            "chapters": [
                "INTRODUCTION À LA DEUXIÈME ÉPÎTRE DE PIERRE",
                "1",
                "2",
                "3"
            ]
        },
        {
            "usfm": "1JN",
            "human": "1 Jean",
            "human_long": "Première épître de Jean",
            "chapters": [
                "INTRODUCTION À LA PREMIÈRE ÉPÎTRE DE JEAN",
                "1",
                "2",
                "3",
                "4",
                "5"
            ]
        },
        {
            "usfm": "2JN",
            "human": "2 Jean",
            "human_long": "Seconde épître de Jean",
            "chapters": [
                "INTRODUCTION À LA DEUXIÈME ÉPÎTRE DE JEAN",
                "1"
            ]
        },
        {
            "usfm": "3JN",
            "human": "3 Jean",
            "human_long": "Troisième épître de Jean",
            "chapters": [
                "INTRODUCTION À LA TROISIÈME ÉPÎTRE DE JEAN",
                "1"
            ]
        },
        {
            "usfm": "JUD",
            "human": "Jude",
            "human_long": "Épître de Jude",
            "chapters": [
                "INTRODUCTION À L’ÉPÎTRE DE JUDE",
                "1"
            ]
        },
        {
            "usfm": "REV",
            "human": "Apocalypse",
            "human_long": "Apocalypse de Jean",
            "chapters": [
                "INTRODUCTION À L’APOCALYPSE",
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10",
                "11",
                "12",
                "13",
                "14",
                "15",
                "16",
                "17",
                "18",
                "19",
                "20",
                "21",
                "22"
            ]
        }
    ];
    let bookListEN = [];
    if (lang === 'AR')
        return bookListAR;
    else if (lang === 'FR')
        return bookListFR;
    else if (lang === 'EN')
        return bookListEN;
}
function arrangeBibleChapters(bible) {
    return bible.map(book => {
        let newBook = [];
        let intro = book.filter(chapter => !/\.\d/.test(chapter[0]));
        if (intro.length > 0)
            console.log('intro = ', intro);
        if (intro)
            newBook.push(...intro);
        for (let i = 0; i <= book.length; i++) {
            let chapter = book.find(chapter => chapter[0].endsWith('.' + i.toString()));
            if (!chapter || newBook.includes(chapter))
                continue;
            console.log('chapter ', chapter);
            newBook.push(chapter);
        }
        console.log(newBook);
        return newBook;
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdE1vZGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9tb2R1bGVzL2VkaXRNb2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQUksUUFBUSxHQUFhLEVBQUUsQ0FBQztBQUM1Qjs7Ozs7Ozs7R0FRRztBQUNILFNBQVMsZ0JBQWdCLENBQUMsSUFXekI7SUFDQyxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssS0FBSztRQUFFLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO0lBQzVDLFlBQVksQ0FBQyxPQUFPLENBQUMsY0FBYyxHQUFHLE9BQU8sQ0FBQztJQUU5QyxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNoQix3TUFBd007UUFFeE0sSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFFMUQsSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVM7WUFDckQsT0FBTyxDQUFDLHVDQUF1QzthQUM1QyxJQUFJLElBQUksQ0FBQyxTQUFTLEtBQUssSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUztZQUFFLFdBQVcsRUFBRSxDQUFDO2FBQ3ZFLElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTO1lBQzFELE9BQU8sV0FBVyxFQUFFLENBQUM7UUFDdkIsMEdBQTBHO2FBQ3JHLElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTO1lBQzFELE9BQU8sZUFBZSxFQUFFLENBQUMsQ0FBQyxpREFBaUQ7YUFDeEUsQ0FBQztZQUNKLElBQUks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QUNKLElBQUk7Z0JBQ0osSUFBSTtnQkFDSixJQUFJO2dCQUNKLElBQUk7Z0JBQ0osSUFBSTtnQkFDSixJQUFJO2dCQUNKLElBQUk7Z0JBQ0osSUFBSTtnQkFDSixJQUFJO2dCQUNKLElBQUk7Z0JBQ0osSUFBSTtnQkFDSixJQUFJO2dCQUNKLElBQUk7Z0JBQ0osSUFBSTtnQkFDSixJQUFJO2dCQUNKLElBQUk7Z0JBQ0osSUFBSTtnQkFDSixJQUFJO2dCQUNKLElBQUk7Z0JBQ0osSUFBSTtnQkFDSixJQUFJO2dCQUNKLElBQUk7Z0JBQ0osSUFBSTtnQkFDSixJQUFJO2dCQUNKLElBQUk7Z0JBQ0osSUFBSTtnQkFDSixJQUFJO2dCQUNKLElBQUk7Z0JBQ0osSUFBSTtnQkFDSixJQUFJO2dCQUNKLElBQUk7Z0JBQ0osSUFBSTtnQkFDSixJQUFJO2dCQUNKLElBQUk7Z0JBQ0osSUFBSTtnQkFDSixJQUFJO2dCQUNKLElBQUk7Z0JBQ0osSUFBSTtnQkFDSixJQUFJO2dCQUNKLElBQUk7Z0JBQ0osSUFBSTtnQkFDSixJQUFJO2dCQUNKLElBQUk7Z0JBQ0osSUFBSTtnQkFDSixJQUFJO2dCQUNKLElBQUk7Z0JBQ0osSUFBSTtnQkFDSixJQUFJO2dCQUNKLElBQUk7Z0JBQ0osSUFBSTtnQkFDSixJQUFJO2dCQUNKLElBQUk7Z0JBQ0osSUFBSTtnQkFDSixJQUFJO2dCQUNKLElBQUk7Z0JBQ0osSUFBSTtnQkFDSixJQUFJO2dCQUNKLElBQUk7Z0JBQ0osSUFBSTtnQkFDSixJQUFJO2dCQUNKLElBQUk7Z0JBQ0osSUFBSTtnQkFDSixJQUFJO2dCQUNKLElBQUk7Z0JBQ0osSUFBSTtnQkFDSixJQUFJO2dCQUNKLElBQUk7Z0JBQ0osSUFBSTtnQkFDSixJQUFJO2dCQUNKLElBQUk7Z0JBQ0osSUFBSTtnQkFDSixJQUFJO2dCQUNKLElBQUk7Z0JBQ0osSUFBSTtnQkFDSixJQUFJO2dCQUNKLElBQUk7Z0JBQ0osSUFBSTtnQkFDSixJQUFJO2dCQUNKLElBQUk7Z0JBQ0osSUFBSTtnQkFDSixLQUFLO2dCQUNMLEtBQUs7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