const copticReadingsDates = getCopticReadingsDates();
document.addEventListener("DOMContentLoaded", startApp);
/**
 * This function starts the App by setting a number of global variables like the dates, displaying the home page/main menu buttons, etc.
 */
async function startApp() {
    if (localStorage.fontSize)
        setFontSize(localStorage.fontSize);
    DetectFingerSwipe();
    if (localStorage.selectedDate) {
        let newDate = new Date(), selectedDate = new Date(Number(localStorage.selectedDate)); //We create a date from the date saved in th localStorage
        //selectedDate.setTime();
        if (!checkIfDateIsToday(selectedDate)) {
            alert("WARNING ! The date is manually set by the user to " +
                selectedDate.getDate().toString() +
                "/" +
                (selectedDate.getMonth() + 1).toString() +
                "/" +
                selectedDate.getFullYear().toString() +
                ". This choice will not kept. If you want the current date, you have to change the date manually");
            selectedDate.setHours(newDate.getHours(), newDate.getMinutes(), newDate.getSeconds(), newDate.getMilliseconds()); //We set its hours, minutes, and seconds to the current time
            setCopticDates(selectedDate);
        }
    }
    else {
        setCopticDates();
    }
    await loadTextScripts(); //! We need to await in order to halt the execution until all the scripts are loaded
    async function loadTextScripts() {
        //! We must load the text scripts after the dates were set and the 'giaki' variable was defined
        let base = "./Build/modules/Declare";
        return [
            "PrayersArray",
            "PrayersSequences",
            "GospelVespersArray",
            "GospelDawnArray",
            "StPaulArray",
            "CatholiconArray",
            "PraxisArray",
            "SynaxariumArray",
            "GospelMassArray",
            "GospelNightArray",
            "PropheciesDawnArray",
            "HolyWeek",
            "ArabicBible",
            "FrenchBible",
            "EnglishBible",
        ].map(async (name) => await loadScript(base, name)); //!We need to return in order to halt the code until all the scripts are loaded
    }
    addKeyDownListnerToElement(document, "keydown", undefined);
    if (!defaultLanguage)
        await showSettingsPanel(0); //If the user has not set the defaultLanguage yet (first time installed), or if for any reason the defaultLanguage setting was corrupted, we will call the languges setting process for all the languages
    showChildButtonsOrPrayers(btnMainMenu); //!Caution: btnMain must be displayed after the dates and the Season have been set. Otherwise, btn Psalmody will not change its title
    //  document.getElementById('homeImg').addEventListener('dblclick', createHtmlArray);
    alert(version);
}
async function loadScript(base, id) {
    if (document.scripts.namedItem(id))
        return;
    let script = document.createElement("script");
    script.src = base + id + '.js';
    script.type = "text/javascript";
    script.id = id;
    script.onload = () => console.log(id + " has been loaded");
    if (id === "PrayersArray")
        script.onload = () => populatePrayersArrays(); //! We must wait that the PrayersArray script is loaded before calling populatePrayersArrays
    return document.getElementsByTagName("body")[0].appendChild(script);
}
/**
 * @param {string[]} tblRow - an array of the text of the prayer which id matched the id in the idsArray. The first element in this array is the id of the prayer. The other elements are, each, the text in a given language. The prayers array is hence structured like this : ['prayerID', 'prayer text in Arabic', 'prayer text in French', 'prayer text in Coptic']
 * @param {string[]} languagesArray - the languages available for this prayer. The button itself provides this array from its "Languages" property
 * @param {string[]} userLanguages - a globally declared array of the languages that the user wants to show.
 * @param {string} actorClass - a CSS class that will be given to the html element (a div) in which the text of the table row. This class sets the background color of the div according to who is saying the prayer: is it the Priest, the Diacon, or the Assembly?
 * @param {HTMLDivElement} container - this is the html div element to which the newly created row will be appended at the specified position. If omitted, its default value is containerDiv
 */
function createHtmlElementForPrayer(args) {
    if (!args.tblRow || args.tblRow.length === 0)
        return console.log("No valid tblRow[][] object is passed to createHtmlElementForPrayer() ");
    if (!args.actorClass)
        args.actorClass = splitTitle(args.tblRow[0])[1];
    if (args.actorClass) {
        let parsed = JSON.parse(localStorage.showActors).filter((el) => el[0].EN === args.actorClass); //localStorage.showActors is an array where each element is the actor object (i.e., a {AR:string, FR:string, EN:sstring}) and its status as boolean: i.e. an array of [[{actor}, boolean], [{actor}, boolean]]
        if (parsed.length > 0 && parsed[0][1] === false)
            return; //If the actor status is false, we will not process the row
    }
    if (!args.actorClass)
        args.actorClass = "NoActor";
    if (!args.userLanguages)
        args.userLanguages = JSON.parse(localStorage.userLanguages);
    if (!args.position)
        args.position = containerDiv;
    let htmlRow, p, lang, text;
    if (!args.container)
        args.container = containerDiv;
    htmlRow = document.createElement("div");
    htmlRow.classList.add("Row"); //we add 'Row' class to this div
    if (localStorage.displayMode === displayModes[1])
        htmlRow.classList.replace("Row", "SlideRow");
    if (args.dataGroup)
        htmlRow.dataset.group = args.dataGroup.replace(/Part\d+/, "");
    if (args.dataRoot)
        htmlRow.dataset.root = args.dataRoot.replace(/Part\d+/, "");
    if (args.actorClass)
        htmlRow.classList.add(args.actorClass);
    if (args.actorClass && args.actorClass.includes("Title")) {
        htmlRow.addEventListener("click", (e) => {
            e.preventDefault;
            collapseOrExpandText(htmlRow);
        }); //we also add a 'click' eventListener to the 'Title' elements
        htmlRow.id = splitTitle(args.tblRow[0])[0]; //we add an id to all the titles in order to be able to retrieve them for the sake of adding a title shortcut in the titles right side bar
    }
    //looping the args.ents containing the text of the prayer in different languages,  starting by 1 since 0 is the id/title of the table
    for (let x = 1; x < args.tblRow.length; x++) {
        //x starts from 1 because prayers[0] is the title of the row
        if (!args.tblRow[x] || args.tblRow[x] === " ")
            continue; //we escape the empty strings if the text is not available in all the button's languages
        if (args.actorClass && args.actorClass === "Comments")
            //this means it is a comment
            x === 1 ? lang = 'FR' : lang = "AR";
        else
            lang = args.languagesArray[x - 1]; //we select the language in the button's languagesArray, starting from 0 not from 1, redrethat's why we start from x-1.
        //we check that the language is included in the allLanguages array, i.e. if it has not been removed by the user, which means that he does not want this language to be displayed. If the language is not removed, we retrieve the text in this language. otherwise we will not retrieve its text.
        if (!args.userLanguages.includes(lang))
            continue;
        p = document.createElement("p"); //we create a new <p></p> element for the text of each language in the 'prayer' array (the 'prayer' array is constructed like ['prayer id', 'text in AR, 'text in FR', ' text in COP', 'text in Language', etc.])
        if (!args.actorClass)
            p.classList.add("PrayerText"); //The 'prayer' array includes a paragraph of ordinary core text of the array. We give it 'PrayerText' as class
        p.dataset.root = htmlRow.dataset.root; //we do this in order to be able later to retrieve all the divs containing the text of the prayers with similar id as the title
        text = args.tblRow[x];
        if (lang)
            p.classList.add(lang);
        if (lang)
            p.lang = lang.toLowerCase();
        p.innerText = text;
        p.addEventListener("dblclick", (ev) => {
            ev.preventDefault();
            localStorage.fontSize !== "1.9" ? setFontSize("1.9") : setFontSize("1");
            //toggleAmplifyText(ev.target as HTMLElement, "amplifiedText");
        }); //adding a double click eventListner that amplifies the text size of the chosen language;
        p.addEventListener("contextmenu", (event) => {
            if (localStorage.editingMode != "true")
                return;
            event.preventDefault();
            if (!confirm("Do you want to edit the table?"))
                return;
            if (!htmlRow.dataset.root)
                return;
            startEditingMode({
                clear: true,
                arrayName: getArrayNameFromArray(getTablesArrayFromTitlePrefix(htmlRow.dataset.root)),
                tableTitle: htmlRow.dataset.root,
                operator: { equal: true }, //!We need to look for the table by the exact title beacause some titles like 'NativityParamoun' or 'BaptismParamoun' may be retrieved if the Season is 'Nativity' or 'Baptism'
            });
        });
        htmlRow.appendChild(p); //the row which is a <div></div>, will encapsulate a <p></p> element for each language in the 'prayer' array (i.e., it will have as many <p></p> elements as the number of elements in the 'prayer' array)
    }
    try {
        //@ts-ignore
        args.position.el
            ? //@ts-ignore
                args.position.el.insertAdjacentElement(
                //@ts-ignore
                args.position.beforeOrAfter, htmlRow)
            : //@ts-ignore
                args.position.appendChild(htmlRow);
        return htmlRow;
    }
    catch (error) {
        console.log("an error occured: position = ", args.position, " and tblRow = ", args.tblRow);
        console.log(error);
    }
}
/**
 * Shows a bookmark link in the right side bar for each title in the currently displayed prayers
 * @param {NodeListOf<>Element} titlesCollection  - a Node list of all the divs containing the titles of the different sections. Each div will be passed to addTitle() in order to create a link in the right side bar pointing to the div
 * @param {HTMLElement} rightTitlesDiv - the right hand side bar div where the titles will be displayed
 * @param {boolean} clear - indicates whether the side bar where the links will be inserted, must be cleared before insertion
 */
async function showTitlesInRightSideBar(titlesCollection, rightTitlesDiv, clear = true, dataGroup, append = true) {
    let titlesArray = [];
    //this function shows the titles in the right side Bar
    if (!rightTitlesDiv)
        rightTitlesDiv = sideBarTitlesContainer;
    if (clear)
        rightTitlesDiv.innerHTML = ""; //we empty the side bar
    let bookmark;
    titlesArray = titlesCollection.map((titleRow) => {
        titleRow.id += titlesCollection.indexOf(titleRow).toString();
        return addTitle(titleRow);
    });
    /**
     * Adds shortcuts to the diffrent sections by redirecting to the title of the section
     * @param {HTMLElement} titles - a div including paragraphs, each displaying the title of the section in a given language
     */
    function addTitle(titleRow) {
        let titleDiv = document.createElement("div"); //this is just a container
        titleDiv.role = "button";
        if (dataGroup)
            titleDiv.dataset.group = dataGroup;
        else
            titleDiv.dataset.group = titleRow.id;
        titleDiv.classList.add("sideTitle");
        if (titleRow.classList.contains(hidden))
            titleDiv.classList.add(hidden); //if the html element from which we will create the title is hidden, we hide the title as well
        if (append)
            rightTitlesDiv.appendChild(titleDiv);
        else
            rightTitlesDiv.prepend(titleDiv);
        bookmark = document.createElement("a");
        titleDiv.appendChild(bookmark);
        bookmark.href = "#" + titleRow.id; //we add a link to the element having as id, the id of the prayer
        titleDiv.addEventListener("click", () => {
            closeSideBar(rightSideBar); //when the user clicks on the div, the rightSideBar is closed
            collapseOrExpandText(titleRow, false); //We pass the 'toggleHidden' paramater = false in order to always show/uncollapse the sibligns
        });
        let defaultLang = appendTitleTextParagraph(titleRow, defaultLanguage);
        let foreignLang = appendTitleTextParagraph(titleRow, foreingLanguage);
        if (defaultLang && foreignLang)
            foreignLang.innerText = "\n" + foreignLang.innerText;
        //If the container is an 'Expandable' container, we hide the title
        if (titleRow.parentElement &&
            titleRow.parentElement.classList.contains("Expandable"))
            titleDiv.classList.add(hidden);
        return titleDiv;
    }
    function appendTitleTextParagraph(titlesRow, className, limit = 50) {
        let parag = titlesRow.querySelector("." + className);
        if (!parag)
            return;
        let text = parag.innerText
            .split("\n")
            .join(" ")
            .replaceAll(String.fromCharCode(plusCharCode) + " ", "")
            .replaceAll(String.fromCharCode(plusCharCode + 1) + " ", "")
            .replaceAll("  ", " ");
        if (!text)
            return;
        if (text.length > limit)
            text = text.slice(0, limit - 1) + "..."; //We limit the number of characters of the title
        let titleParag = document.createElement("p");
        titleParag.innerText = text;
        titleParag.dir = "auto";
        titleParag.style.lineHeight = "8pt";
        titleParag.style.margin = "0px";
        if (className !== "AR")
            titleParag.style.textAlign = "left";
        else
            titleParag.style.textAlign = "right";
        bookmark.appendChild(titleParag);
        return titleParag;
    }
    return titlesArray;
}
/**
 * Takes a Button and, depending on its properties will do the following: if the button has children[] buttons, it will create an html element in the left side bar for each child; if the button has inlineBtns[], it will create an html element in the main page for each inlineButton; if the button has prayers[] and prayersArray, and languages, it will look in the prayersArray for each prayer in the prayers[], and if found, will create an html element in the main page showing the text of this element. It will only do so for the languages included in the usersLanguages.
 * @param {Button} btn - the button that the function will process according to its properties (children[], inlineBtns[], prayers[], onClick(), etc.)
 * @param {boolean} clear - whether to clear or not the text already displayed in the main page
 * @param {boolean} click - if the button has its onClick property (which is a function) and if click = true, the onClick function will be called
 * @param {boolean} pursue - after the onClick function is called, if pursue = false, the showchildButtonsOrPrayers() will return, otherwise, it will continue processing the other properties of the button
 * @returns
 */
async function showChildButtonsOrPrayers(btn, clear = true) {
    if (!btn)
        return;
    let container = containerDiv;
    if (btn.docFragment)
        container = btn.docFragment;
    hideExpandableButtonsPannel();
    if (clear && !containerDiv.dataset.editingMode) {
        //If we are in the "Editing Mode" We do not clear the containerDiv at this stage 
        expandableBtnsPannel.innerHTML = "";
        containerDiv.style.gridTemplateColumns = "100%";
    }
    if (btn.onClick)
        btn.onClick();
    (function processPrayersSequence() {
        if (!btn.prayersSequence || !btn.languages || !btn.showPrayers)
            return showBtnsOnMainPage(btn);
        if (containerDiv.dataset.editingMode)
            return showPrayersInEditingMode();
        showPrayers({
            prayersSequence: btn.prayersSequence,
            container: container,
            languages: btn.languages,
            clearContainerDiv: true,
            clearRightSideBar: true,
            position: container,
        });
        function showPrayersInEditingMode() {
            if (!btn.prayersSequence)
                return;
            if (containerDiv.children.length > 0)
                saveModifiedArray({ exportToFile: true, exportToStorage: true }); //We save what is shown in the containerDiv
            let array;
            btn.prayersSequence
                .forEach((title) => {
                if (!title.includes("&D="))
                    return;
                array = getTablesArrayFromTitlePrefix(title);
                if (!array)
                    return console.log("tablesArray is undefined");
                showTables({
                    tablesArray: [findTable(title, array, { equal: true })],
                    languages: getLanguages(getArrayNameFromArray(array)),
                    position: container,
                    container: container,
                    clear: false,
                });
            });
        }
        ;
    })();
    (async function processAfterShowPrayers() {
        if (!btn.afterShowPrayers)
            return;
        if (localStorage.displayMode === displayModes[1])
            return await btn.afterShowPrayers(); //!btn.afterShowPrayers() is an async function, that's why we don't call it here when in Presentation Mode because processPrayersSequence() would not have finished inserting the new elements when showPrayersInPresentationMode() is called
        btn.afterShowPrayers();
    })();
    (function processBtnChildren() {
        //!CAUTION, this must come after btn.onClick() is called because some buttons are not initiated with children, but their children are added on the fly when their onClick() method  is called
        if (!btn.children || btn.children.length < 1)
            return;
        sideBarBtnsContainer.innerHTML = "";
        btn.children
            .forEach((childBtn) => {
            if (!childBtn)
                return;
            //for each child button that will be created, we set btn as its parent in case we need to use this property on the button
            if (btn !== btnGoToPreviousMenu)
                childBtn.parentBtn = btn;
            //We create the html element reprsenting the childBtn and append it to btnsDiv
            createHtmlBtn({
                btn: childBtn,
                btnsContainer: sideBarBtnsContainer,
            });
        });
    })();
    setCSS(Array.from(container.querySelectorAll("div.Row"))); //!Important : setCSSGridTemplate() MUST be called after btn.afterShowPrayres() in order to set the CSS for all the elements that btn.afterShowPrayers() might insert
    applyAmplifiedText(Array.from(container.querySelectorAll("div.Row")));
    let titles = Array.from(container.children)
        .filter(div => isTitlesContainer(div));
    if (titles.length > 1)
        showTitlesInRightSideBar(titles); //We don't show the titles if there is only 1 title
    appendGoBackAndGoToMainButtons(btn, sideBarBtnsContainer, btn.cssClass);
    if (btn.docFragment)
        containerDiv.appendChild(btn.docFragment);
    if (btn === btnMainMenu)
        addSettingsButton();
    if (localStorage.displayMode === displayModes[1])
        showSlidesInPresentationMode();
    (function moveSettingsButtonToTheButton() {
        //If settingsBtn is included in the menu (which means it is the main menu), we will move it to the buttom of the menu
        let settingsBtn = sideBarBtnsContainer.querySelector("#settings");
        if (!settingsBtn)
            return;
        sideBarBtnsContainer.append(settingsBtn); //If the button is already there, we move it to the bottom of the list
    })();
    function showBtnsOnMainPage(btn) {
        if (!btn.children || btn.children.length < 1)
            return;
        if (leftSideBar.classList.contains("extended"))
            return; //If the left side bar is not hidden, we do not show the buttons on the main page because it means that the user is using the buttons in the side bar and doesn't need to navigate using the btns in the main page
        containerDiv.innerHTML = "";
        let btnsDiv = createBtnsDiv();
        let images = [
            "url(./assets/btnMassBackground.jpg)",
            "url(./assets/btnMassBackground.jpg)",
            "url(./assets/btnMassBackground.jpg)",
            "url(./assets/btnMassBackground.jpg)",
            "url(./assets/btnMassBackground.jpg)",
            "url(./assets/btnMassBackground.jpg)",
            "url(./assets/btnIncenseBackground.jpg)",
            "url(./assets/btnReadingsBackground.jpg)",
            "url(./assets/btnBOHBackground.jpg)",
            "url(./assets/btnBOHBackground.jpg)",
        ];
        let cssClass = "mainPageBtn";
        //We create html elements representing each of btnMain children. The created buttons will be appended to containerDiv directly
        btn.children
            .forEach((childBtn) => {
            if (!childBtn)
                return;
            if (btn !== btnGoToPreviousMenu)
                childBtn.parentBtn = btn;
            if (!childBtn.backGroundImage && btn.backGroundImage)
                childBtn.backGroundImage = btn.backGroundImage;
            if (!childBtn.backGroundImage)
                childBtn.backGroundImage = images[btn.children.indexOf(childBtn)];
            createMainPageButton(childBtn); //We create an HTML button 
        });
        appendGoBackAndGoToMainButtons(btn, btnsDiv, cssClass); //We append the buttons then we add the background image for each button
        btnsDiv.style.gridTemplateColumns = setGridColumnsOrRowsNumber(btnsDiv, 3); //!Caution: this must come after the buttons have been appended to btnsDiv
        function createMainPageButton(btn) {
            if (!btnsDiv)
                btnsDiv = createBtnsDiv();
            createHtmlBtn({
                btn: btn,
                btnsContainer: btnsDiv,
                btnClass: cssClass,
                backGroundImage: btn.backGroundImage,
                clear: false,
            });
        }
        function createBtnsDiv() {
            let div = document.createElement('div');
            if (defaultLanguage === 'AR')
                div.dir = "rtl";
            div.id = 'btnsMainPageDiv';
            div.style.display = 'grid';
            containerDiv.appendChild(div);
            return div;
        }
    }
    function appendGoBackAndGoToMainButtons(btn, btnsContainer, cssClass) {
        let goBackHtml, mainMenuHtml;
        (function appendGoBackBtn() {
            //This function inserts an html button that navigates the user to the previous menu from which he had been directed when clicking on the button
            if (btn === btnGoToPreviousMenu)
                return; //If the btn is itself a GoBack btn, we will not insert it twice
            if (btnsContainer.querySelector('#' + btnGoToPreviousMenu.btnID))
                btnsContainer.querySelector('#' + btnGoToPreviousMenu.btnID).remove(); //If the sideBar already contains a btnGoBack, we will replace it with a new button pointing to the right parent button in the buttons tree
            if (!btn.parentBtn)
                return;
            //Notice that the GoBack Button that we will insert, will only show the children of btn in the sideBar: it will not call showChildButonsOrPrayers() passing btn to it as a parameter. Instead, it will call a function that will show its children in the SideBar
            if (btn.parentBtn === btnMainMenu)
                return; //If the parent btn is btnMainMenu, the goBackButton will bring us to the main menu any way, so no need for it
            let goBack = new Button({
                btnID: btnGoToPreviousMenu.btnID,
                label: btnGoToPreviousMenu.label,
                cssClass: cssClass,
                backGroundImage: btnsContainer === sideBarBtnsContainer ? undefined : btnGoToPreviousMenu.backGroundImage, //We do not show the background image if the button is appended to the sideBar
                onClick: () => showChildButtonsOrPrayers(btn.parentBtn, true),
            });
            goBackHtml = createHtmlBtn({
                btn: goBack,
                btnsContainer: btnsContainer,
                backGroundImage: goBack.backGroundImage,
            });
        })();
        (function appendGoToMainMenuButton() {
            //This function will insert a button by which the user will return back to the 'Main Menu' (i.e., the list of buttons displayed when the app starts)
            if (!btn.parentBtn)
                return; //We will insert a "Go To Main Menu" button only if btn has a parent btn (if the btn has a parentBtn it means that btn is a children of another button and is not one of the 'Main Menu' list of buttons. The user may need to return directly to the main menu instead to going to the previous menu)
            if ([btnMainMenu, btnGoToPreviousMenu].includes(btn))
                return; //Obviously, we will not insert 'Go To Main Menu' Button if the btn is it self btnMain. We also do not insert 'Go To Main Menu' when the GoBack button is clicked because it will be inserted by the button that will passed to showChildButtonsOrPrayers() when called
            if (btnsContainer.querySelector('#' + btnMainMenu.btnID))
                btnsContainer.querySelector('#' + btnMainMenu.btnID).remove(); //If there is already a btnMainMenu in the btnsContainer, we will remove it
            mainMenuHtml = createHtmlBtn({
                btn: btnMainMenu,
                btnsContainer: btnsContainer,
                btnClass: cssClass,
                backGroundImage: btnsContainer === sideBarBtnsContainer ? undefined : btnMainMenu.backGroundImage,
            });
        })();
        return [goBackHtml, mainMenuHtml];
    }
    ;
    async function showSlidesInPresentationMode() {
        if (containerDiv.children[0].classList.contains("mainPageBtns"))
            return;
        let children = Array.from(containerDiv.querySelectorAll(".Expandable, .SlideRow, ." + inlineBtnsContainerClass));
        children.forEach((child) => {
            child.classList.add(hidden);
            setSlidesCSS(child);
        }); //!We need to remove all the divs that are empty (some of which are inlineBtns divs that were emptied when the buttons were moved to anohter container). If we do not remove them, they may be given data-same-slide attributes that will interfere with the flow of the slides
        function setSlidesCSS(slideRow) {
            if (!slideRow.classList.contains("SlideRow"))
                return;
            slideRow.style.gridTemplateColumns = setGridColumnsOrRowsNumber(slideRow);
            slideRow.style.gridTemplateAreas = setGridAreas(slideRow);
        }
        createNewSlideGroup(children[0]);
        changeRightSideBarShortCutsOnClick();
        showTheFirstSlideInContainer();
        /**
         * Takes a slideRow and builds a slide from all its siblings subject to a maximum number of words. Each slide is marked by a data-sameSlide attribute added to the hidden HTML divs in containerDiv's children. We thus create groups of divs that will be retrieved each by its data-sameSlide attribute and retrieved as a same slide
         * @param {HTMLDivElement} slideRow - an div element representing a row in the slide that will be displayed
         */
        function createNewSlideGroup(slideRow) {
            if (!slideRow)
                return; //!CAUTION: WE MUST check that slideRow is not undefined. Otherwise, each time countWords(slideRow, sameSideGroup) will be called, it will return an empty array, which will lead to hasDataRoot being undefined, and createNewSlideGroup(nextSlideRow(slideRow)) be called with an undefined argument, and so on again and again, indefinetly
            let sameSlideGroup = [];
            countWords(slideRow, sameSlideGroup);
            sameSlideGroup = sameSlideGroup.filter((div) => div && !isCommentContainer(div)); //We remove any undefined elements as well as all the comments divs in case a comment would have been included
            let hasDataRoot = sameSlideGroup.find((div) => div.dataset.root); //We find the first element in toMerge[] having its data-root attribute set
            if (!hasDataRoot)
                createNewSlideGroup(nextSlideRow(slideRow)); //If there is no element in sameSlideGroup[] having the data-root attribute, it will be useless to continue. We will hence jumb to the next row since we will not be able to create a group of the rows included in sameSlideGroup
            while (sameSlideGroup.length >= 1 &&
                (isTitlesContainer(sameSlideGroup[sameSlideGroup.length - 1]) ||
                    sameSlideGroup[sameSlideGroup.length - 1].classList.contains(inlineBtnsContainerClass)))
                sameSlideGroup.pop(); //If the last  div element in sameSlideGroup[] is a title row or an inlineBtns container, we remove it;
            sameSlideGroup.forEach((div) => (div.dataset.sameSlide =
                hasDataRoot.dataset.root + children.indexOf(hasDataRoot))); //We give each slideRow in toMerge[] a data-sameSlide attribute equal to the data-root attribute of the first element having a data-root attribute.
            if (sameSlideGroup.length >= 1)
                createNewSlideGroup(nextSlideRow(sameSlideGroup[sameSlideGroup.length - 1]));
            else
                createNewSlideGroup(nextSlideRow(slideRow));
        }
        /**
         * Cournts the letters in the innerHTML of a group of divs added to a the sameSlideGroup[] array. If the innerHTML does not exceed the countMax, it adds the next div to the sameSlideGroup[] array until the maxCount is reached or exceeded
         * @param {HTMLDivElement} slideRow
         * @param {HTMLDivElement[]} sameSlide
         */
        function countWords(slideRow, sameSlide) {
            if (!slideRow)
                return sameSlide; //We never count the words in an 'Expandable' element
            let countMax = 1850;
            /*     if(slideRow.innerHTML.length > countMax){
              //We are in presence of a sole element with text exceedin the limit, we need to split it;
              let slideClone = slideRow.cloneNode(true) as HTMLDivElement;
              let phrases: string[];
          
              Array.from(slideRow.children as HTMLCollectionOf<HTMLDivElement>)
                .forEach(child => {
                  if (child.innerHTML.includes('span')) console.log('there are spans');
                  phrases = child.innerHTML.split('. ');
                  let parag = slideClone.children[Array.from(slideRow.children).indexOf(child)];
                  parag.innerHTML = '';
                  phrases
                    .forEach(phrase => {
                      if (phrases.indexOf(phrase) > (phrases.length / 2))
                        parag.innerHTML += phrase + '. ';
                      child.innerHTML = child.innerHTML.replace(phrase, '');
                    });
                });
              
              slideRow.insertAdjacentElement('afterend', slideClone)
            } */
            sameSlide.push(slideRow); //!CAUTION: we need the slideRow div to be pushed when the function is called, because when it is called for the first time, if the slide is not already in toMerge[], we will add its nextSibling but the first slide itself will never be added to toMerge. However, we never add an 'Expandable' div as an html element that can potentially be included in a Slide
            let inlineBtns = sameSlide.filter((div) => div.classList.contains(inlineBtnsContainerClass)).length; //We count all the inlineBtns elements in sameSlideGroup[]
            let maximum = countMax * (1 - (6 / 100) * inlineBtns); //We take into account the number of inlineBtns included in the sameSlideGroup because they take space in the slide, which reduces the number of words/letters that the slide can include
            if (countInnerHTML(sameSlide) > maximum) {
                sameSlide.pop(); //if the number of letters exceeds the maximum we remove the last slide  added to sameSlideGroup[]
                return;
            }
            countWords(nextSlideRow(slideRow), sameSlide);
        }
        function nextSlideRow(currentSlideRow) {
            if (!currentSlideRow)
                return;
            let next = currentSlideRow.nextElementSibling;
            if (next && (next.children.length < 1 || isCommentContainer(next)))
                return nextSlideRow(next); //We escape comments
            else if (next && next.classList.contains("Expandable"))
                createNewSlideGroup(next.children[0]);
            else if (!next &&
                currentSlideRow.parentElement &&
                currentSlideRow.parentElement.classList.contains("Expandable"))
                return currentSlideRow.parentElement.nextElementSibling;
            else
                return next;
        }
        function countInnerHTML(sameSlideGroup) {
            let count = 0;
            sameSlideGroup.forEach((child) => {
                if (!child.classList.contains(inlineBtnsContainerClass))
                    count += child.innerHTML.length;
            });
            return count;
        }
        function changeRightSideBarShortCutsOnClick() {
            return;
            Array.from(sideBarTitlesContainer.children).forEach((btn) => {
                btn.classList.remove(hidden);
                btn.addEventListener("click", onClick);
                function onClick() {
                    let target = Array.from(containerDiv.children).find((child) => child.classList.contains("SlideRow") &&
                        child.id === btn.dataset.group &&
                        child.dataset.sameSlide);
                    console.log("target = ", target.dataset.root);
                    if (!target)
                        return console.log("target was not found ");
                    // let dataSameSlide = target.dataset.sameSlide;
                    //let slide = buildSlideFromDataSameSlideGroup(dataSameSlide)
                    // showOrHideSlide(true, slide.dataset.sameSlide);
                    showOrHideSlide(true, target.dataset.sameSlide);
                }
            });
        }
        /**
         * Retrieves the first element of the container having a 'data-same-slide' attribute, and shows the slide containing all the elements with the same 'data-same-slide' attribute
         */
        function showTheFirstSlideInContainer() {
            let hasSameSlide = Array.from(containerDiv.children).find((child) => child.dataset.sameSlide);
            if (hasSameSlide)
                showOrHideSlide(true, hasSameSlide.dataset.sameSlide);
        }
    }
}
/**
 * Shows or hides a slide in Display Presentation Mode
 * @param {boolean} show - tells whether the slide should be displayed or removed. If 'true' the silde will be displayed. Otherwise, it will be removed.
 * @param {string} datSameSlide - This agrument is the value of the data-same-slide attribute, by which we will retrieve the div elements that will be displayed in a new '.Slide' element if show = true.
 * If show = false, this argument can be omitted, however if provided, it means that we want a specific slide to be removed and we want it to be selected by its id (this is needed in some scenarios).
 * @param {boolean} show - a boolean that indicates whether the slide should be displayed or hidden (true = display, flase = hide)
 */
function showOrHideSlide(show, dataSameSlide) {
    let slide;
    if (show && dataSameSlide) {
        return buildSlideFromDataSameSlideGroup(dataSameSlide);
    }
    else if (!show) {
        if (dataSameSlide)
            slide = Array.from(containerDiv.children).find((child) => child.id === dataSameSlide);
        //!We could not perform a querySelector because the format of the id contains characters that are not allowed in querySelector.
        else
            slide = containerDiv.querySelector(".Slide");
        if (slide)
            slide.remove();
    }
    /**
     * Retrieves and returns the div elements having the same data-same-slide attribute
     * @param {string} dataSameSlide - the value of the data-same-slide attribute by which the divs will be filtered and retrieved
     * @param {HTMLElement} container - the html container that will be filtered while looking for the div elements with the same data-same-slide value
     * @return {HTMLDivElement[]} an array of the div elements retrieved
     */
    function buildSlideFromDataSameSlideGroup(dataSameSlide) {
        let sameSlide = Array.from(containerDiv.children).filter((div) => div.dataset.sameSlide &&
            div.dataset.sameSlide === dataSameSlide &&
            !isCommentContainer(div));
        if (!sameSlide || sameSlide.length < 1)
            return;
        let lastActor = getLastActor(); //This is the actor of the last element in the currently displayed slide (if any)
        let slide = document.createElement("div");
        slide.classList.add("Slide");
        slide.id = dataSameSlide;
        sameSlide.forEach((div) => {
            let clone = div.cloneNode(true);
            if (div.classList.contains(inlineBtnsContainerClass))
                //!The cloneNode() methods does not clone the event listners of an element. There is no way to retrieve these events by javascript. We will hence add a data-original-btn-id attribute in which we will store the id of the orignal button, in order to be able to retrieve it later and, if needed, mimic its 'onclick' action
                Array.from(clone.children).forEach((child) => (child.id = "Clone_" + child.id));
            slide.appendChild(clone);
        });
        let slideChildren = Array.from(slide.children);
        slideChildren.forEach((child) => {
            child.classList.remove(hidden);
            child.dataset.sameSlide = "Clone_" + child.dataset.sameSlide; //We remove this attribute in order to avoid getting the children selected if we perform a querySelector by the data-same-slide. In such case the result will be the original div elements not the clones that we appended to the slide.
            child.style.gridTemplateColumns = setGridColumnsOrRowsNumber(child);
            addActorToSlide(child, lastActor);
        });
        // slide.style.gridTemplateRows = setGridRowsTemplateForSlide();
        changeInlineBtnsOnClick();
        containerDiv.prepend(slide);
        return slide;
        /**
         * gets the actor of the last paragraph of the currently exposed slide
         */
        function getLastActor() {
            let oldSlide = containerDiv.querySelector(".Slide");
            if (!oldSlide)
                return;
            return getActor(oldSlide.children[oldSlide.children.length - 1]);
        }
        function addActorToSlide(slideChild, lastActor) {
            let actor = getActor(slideChild);
            if (!actor)
                return;
            if ((slideChildren.indexOf(slideChild) > 0 &&
                actor ===
                    getActor(slideChildren[slideChildren.indexOf(slideChild) - 1])) ||
                (lastActor &&
                    slideChildren.indexOf(slideChild) === 0 &&
                    actor === lastActor) ||
                (lastActor &&
                    slideChildren.indexOf(slideChild) === 1 &&
                    isTitlesContainer(slideChildren[0]) &&
                    actor === lastActor))
                return;
            Array.from(slideChild.children).forEach((parag) => {
                let label = actor[parag.lang.toUpperCase()];
                if (!label)
                    label = actor[defaultLanguage];
                if (!label)
                    return;
                parag.innerHTML =
                    '<span class="actorSpan">' +
                        label +
                        ": </span>" +
                        '<span class="textSpan">' +
                        parag.innerHTML +
                        "</span>";
            });
        }
        function getActor(child) {
            if (!child)
                return undefined;
            return actors.find((actor) => child.classList.contains(actor.EN));
        }
        function changeInlineBtnsOnClick() {
            let inlineBtns = slideChildren.filter((child) => child.classList.contains(inlineBtnsContainerClass));
            if (inlineBtns.length < 1)
                return console.log("inlineBtns is empty");
            (function expandables() {
                let expandBtnsContainer = inlineBtns.filter((container) => container.children.length > 0 &&
                    container.children[0].classList.contains("expand"));
                changeBtnOnClick(expandBtnsContainer, onClickFun);
                function onClickFun(btn) {
                    let container = containerDiv.querySelector("#" + btn.id.split("Clone_")[1] + "Expandable");
                    if (!container)
                        return console.log("could not find the expandable container");
                    let dataSameSlide = Array.from(container.children).find((child) => child.dataset.sameSlide).dataset.sameSlide;
                    let slide = showOrHideSlide(true, dataSameSlide);
                    if (slide)
                        slide.dataset.isExpandable = container.id;
                }
            })();
            (function redirectToAnotherMass() {
                let redirectToBtnsContainer = inlineBtns.filter((container) => container.children.length > 0 &&
                    container.children[0].id.startsWith("Clone_GoTo_"));
                console.log("redirectTo = ", redirectToBtnsContainer);
                changeBtnOnClick(redirectToBtnsContainer, onClickFun);
                function onClickFun(btn) {
                    let originalBtn = Array.from(containerDiv.querySelectorAll("." + inlineBtnClass)).find((childBtn) => childBtn.id === btn.id.split("Clone_")[1]);
                    if (!originalBtn)
                        return console.log("could not find the original button");
                    originalBtn.click();
                    let children = Array.from(containerDiv.children); //!children must be defined after orginalBtn.click() is called otherwise dataSameSlide will get is value from the children of containerDiv as they were before originalBtn.click() is called
                    let dataRoot = btn.id.split("From_")[1];
                    let dataSameSlide = children.find((child) => child.dataset.root &&
                        child.dataset.root === dataRoot &&
                        child.dataset.sameSlide).dataset.sameSlide;
                    showOrHideSlide(true, dataSameSlide);
                }
            })();
            (function MasterBtnMultipleChoices() {
                let masterBtnContainers = inlineBtns.filter((container) => container.children.length > 0 &&
                    container.classList.contains("masterBtnDiv"));
                console.log("masterBtnContainers = ", masterBtnContainers);
                changeBtnOnClick(masterBtnContainers, onClickFun);
                function onClickFun(btn) {
                    let originalBtn = Array.from(containerDiv.querySelectorAll("." + inlineBtnClass)).find((childBtn) => childBtn.id === btn.id.split("Clone_")[1]);
                    if (!originalBtn)
                        return console.log("could not find the original button");
                    originalBtn.click();
                    addEventListenersToPannelBtns();
                    function addEventListenersToPannelBtns() {
                        let pannelBtns = Array.from(expandableBtnsPannel.querySelectorAll(".multipleChoicePrayersBtn"));
                        if (pannelBtns.length < 1)
                            return console.log("No buttons in the pannel");
                        pannelBtns.forEach((childBtn) => childBtn.addEventListener("click", showOptionalPrayer));
                        let btnNext = expandableBtnsPannel.querySelector("#btnNext");
                        if (btnNext)
                            btnNext.addEventListener("click", () => addEventListenersToPannelBtns());
                    }
                    function showOptionalPrayer() {
                        let children = Array.from(containerDiv.querySelectorAll("div[data-optional-prayer]"));
                        children = children.filter((child) => child.dataset.optionalPrayer ===
                            originalBtn.dataset.displayedOptionalPrayer);
                        if (children.length < 1)
                            return console.log("no option prayer is displayed");
                        children.forEach((child) => (child.dataset.sameSlide =
                            child.dataset.root +
                                Array.from(containerDiv.children).indexOf(children[0])));
                        showOrHideSlide(true, children[0].dataset.sameSlide);
                    }
                }
            })();
            function changeBtnOnClick(containers, onClickFun) {
                if (containers.length < 1)
                    return console.log("Couldn't find any btns containers");
                containers.forEach((container) => {
                    let btns = Array.from(container.children);
                    btns.forEach((btn) => btn.addEventListener("click", () => onClickFun(btn)));
                });
            }
        }
    }
}
/**
 * Appends the settings button to the right side bar
 */
function addSettingsButton() {
    if (sideBarBtnsContainer.querySelector("#settings"))
        return; //If a settings button is already included in the rightSideBar menu, we will not add it again
    let settingsBtn;
    settingsBtn = document.createElement("div");
    settingsBtn.id = "settings";
    settingsBtn.classList.add("settings");
    settingsBtn.innerText = "Settings";
    settingsBtn.addEventListener("click", () => showSettingsPanel());
    sideBarBtnsContainer.appendChild(settingsBtn);
}
/**
 * returns a Button for entering the "Editing Mode" and start editings the text
 */
function getEditModeButton() {
    return new Button({
        btnID: "btnEditMode",
        label: {
            AR: "تعديل النص",
            FR: "Enter Editing Mode",
            EN: "Enter Editing Mode",
        },
        onClick: () => {
            if (document.getElementById("selectArray"))
                return; //If a select element is already appended, we return
            //@ts-ignore
            if (!console.save)
                addConsoleSaveMethod(console); //We are adding a save method to the console object
            containerDiv.innerHTML = "";
            containerDiv.dataset.editingMode = "true";
            let editable = [
                "Choose from the list",
                "NewTable",
                'Fun("arrayName", "Table\'s Title")',
                "Edit Day Readings",
                "PrayersArray",
                "GospelDawnArray",
                "GospelMassArray",
                "GospelNightArray",
                "GospelVespersArray",
                "KatholikonArray",
                "PraxisArray",
                "PropheciesDawnArray",
                "StPaulArray",
                "SynaxariumArray",
            ];
            let select = document.createElement("select"), option;
            select.id = "selectArray";
            select.style.backgroundColor = "ivory";
            select.style.height = "30pt";
            editable.forEach((name) => {
                option = document.createElement("option");
                option.innerText = name;
                option.contentEditable = "true";
                select.add(option);
            });
            document;
            containerDiv.insertAdjacentElement("beforebegin", select);
            select.addEventListener("change", () => startEditingMode({ select: select }));
        },
    });
}
/**
 * Returns an html button element showing a 'Go Back' button. When clicked, this button passes the goTo button or inline button to showchildButtonsOrPrayers(), as if we had clicked on the goTo button
 * @param {Button} goTo - a button that, when the user clicks the 'Go Back' html button element generated by the function, calls showchildButtonsOrPrayers(goTo) thus simulating the action of clicking on the goTo button (its children, inlineBtns, prayers, etc., will be displayed)
 * @param {HTMLElement} btnsDiv - the html element to which the html element button created and returned by the function, will be appended
 * @returns {Promise<HTMLElement>} - when resolved, the function returns the html button element it has created and appended to div
 */
async function createGoBackBtn(goTo, //This is the parentBtn that the GoBack button will navigate to (by showing its children)
btnsDiv, cssClass) {
    //We will create a 'Go Back' and will append it to btnsDiv
    let goBak = new Button({
        btnID: btnGoToPreviousMenu.btnID,
        label: btnGoToPreviousMenu.label,
        cssClass: cssClass,
        onClick: () => {
            btnsDiv.innerHTML = "";
            if (goTo.children)
                goTo.children
                    .forEach((childBtn) => {
                    createHtmlBtn({
                        btn: childBtn,
                        btnsContainer: btnsDiv,
                        btnClass: childBtn.cssClass,
                        clear: true,
                    });
                });
            if (goTo.parentBtn)
                //If the parentBtn has itself a parentBtn, we will add to the menu a GoBack button that navigates to the parentBtn of goTo
                createGoBackBtn(goTo.parentBtn, btnsDiv, goTo.parentBtn.cssClass);
            if (btnsDiv === sideBarBtnsContainer)
                addSettingsButton();
        },
    });
    return createHtmlBtn({
        btn: goBak,
        btnsContainer: btnsDiv,
        btnClass: goBak.cssClass,
        clear: false,
        onClick: goBak.onClick,
    });
}
/**
 * Creates a an anchor html element and sets its href attribute to the id parameter, then clicks the anchor in order to scroll to it and, finally, removes the anchor
 * @param {string} id - the id of the html element to which the href attribute of the anchor will be set
 */
function createFakeAnchor(id) {
    let a = document.createElement("a");
    a.href = "#" + id;
    a.click();
    a.remove();
}
/**
 * Creates an html element for the button and shows it in the relevant side bar. It also attaches an 'onclick' event listener to the html element which passes the button it self to showChildButtonsOrPrayers()
 * @param {Button} btn  - the button that will be displayed as an html element in the side bar
 * @param {HTMLElement} btnsContainer  - the div conainer to which the created html button will be appended
 * @param {string} btnClass  - the class that will be given to the button (it is usually the cssClass property of the button)
 * @param {boolean} clear - a boolean indicating whether or not the text already displayed (in containerDiv) should be cleared when the button is clicked. This parameter will only work (i.e., will be useful) if the onClick parameter is missing, because in this case the onClick parameter is set to showChildButtonsOrPrayers(), and clear is passed to it as a parameter. Otherwise, it is the function passed as the onClick paramater that will be called.
 * @param {Function} onClick - this is the function that will be attached to the 'click' eventListner of the button, and will be called when it is clicked
 * @returns {HTMLElement} - the html element created for the button
 */
function createHtmlBtn(args) {
    if (!args.btn || !args.btn.label) {
        console.log("The button is either undefined, or has no lable");
        return;
    }
    if (!args.clear)
        args.clear = true;
    let newBtn = document.createElement("button");
    args.btnClass
        ? newBtn.classList.add(args.btnClass)
        : newBtn.classList.add(args.btn.cssClass);
    if (args.backGroundImage)
        newBtn.style.backgroundImage = args.backGroundImage;
    newBtn.id = args.btn.btnID;
    //Adding the labels to the button
    if (args.btn.label[defaultLanguage])
        editBtnInnerText(args.btn.label[defaultLanguage], defaultLanguage);
    /*   if (args.btn.label[foreingLanguage])
        editBtnInnerText(args.btn.label[foreingLanguage], foreingLanguage); */
    args.btnsContainer.appendChild(newBtn);
    if (args.onClick)
        newBtn.onclick = (event) => {
            event.preventDefault;
            args.onClick();
        };
    else
        newBtn.onclick = (event) => {
            event.preventDefault;
            showChildButtonsOrPrayers(args.btn, args.clear);
        }; //If no onClick parameter/argument is passed to createBtn(), and the btn has any of the following properties: children/prayers/onClick or inlinBtns, we set the onClick parameter to a function passing the btn to showChildButtonsOrPrayers
    function editBtnInnerText(text, btnClass) {
        if (!text)
            return;
        let btnLable = document.createElement("p");
        btnLable.innerText = text;
        btnLable.classList.add("btnText");
        if (btnClass)
            btnLable.classList.add(btnClass);
        newBtn.appendChild(btnLable);
    }
    return newBtn;
}
/** */
function PWA() {
    /** */
    function getPWADisplayMode() {
        const isStandalone = window.matchMedia("(display-mode: standalone)").matches;
        if (document.referrer.startsWith("android-app://")) {
            return "twa";
            //@ts-ignore
        }
        else if (navigator.standalone || isStandalone) {
            return "standalone";
        }
        return "browser";
    }
}
function registerServiceWorker() {
    const registerServiceWorker = async () => {
        if ("serviceWorker" in navigator) {
            try {
                const registration = await navigator.serviceWorker.register("/sw.js", {
                    scope: "/",
                });
                if (registration.installing) {
                    console.log("Service worker installing");
                }
                else if (registration.waiting) {
                    console.log("Service worker installed");
                }
                else if (registration.active) {
                    console.log("Service worker active");
                }
            }
            catch (error) {
                console.error(`Registration failed with ${error}`);
            }
        }
    };
}
/**
 * returns a string[][], each string[] element includes 2 elements: the current coptic date (as as string formatted like "DDMM") and the corresponding readings date if any (also formatted as "DDMM").
 * @returns {string[][]}
 */
function getCopticReadingsDates() {
    return [
        ["1307", "1903", "2111", "0402", "0403", "0804", "1002"],
        [
            "1703",
            "1301",
            "3001",
            "1209",
            "1406",
            "1412",
            "1504",
            "1806",
            "2103",
            "2706",
            "2809",
            "0104",
            "0302",
            "0502",
            "0603",
            "0705",
            "0902",
        ],
        [
            "2708",
            "1101",
            "1110",
            "1306",
            "1404",
            "1605",
            "1706",
            "1808",
            "2211",
            "2306",
            "2705",
            "1111",
            "2201",
            "1101",
            "2201",
        ],
        [
            "2803",
            "0901",
            "1004",
            "1109",
            "1311",
            "1403",
            "1410",
            "1707",
            "1709",
            "1805",
            "1904",
            "1908",
            "2206",
            "2303",
            "2305",
            "2406",
            "2412",
            "2704",
            "2709",
            "0207",
            "0310",
            "0507",
            "0513",
            "1011",
            "1112",
            "2302",
        ],
        [
            "3005",
            "0501",
            "1001",
            "2001",
            "0102",
            "2901",
            "0602",
            "1003",
            "2604",
            "2405",
            "2905",
            "1507",
            "2607",
            "0608",
            "0808",
            "1108",
            "2508",
            "0111",
            "1711",
            "2811",
            "0212",
            "0612",
            "1512",
            "2112",
        ],
        [
            "0105",
            "1508",
            "1907",
            "2005",
            "2209",
            "2510",
            "2908",
            "0110",
            "0309",
            "0611",
            "1501",
            "2401",
            "2602",
        ],
        ["0109", "1612", "2105", "2110", "0304"],
        ["0206", "2504", "0704", "0711", "2002"],
        ["0210", "3006"],
        [
            "0311",
            "1208",
            "1303",
            "1812",
            "2207",
            "2810",
            "3003",
            "3009",
            "0103",
            "0202",
            "0205",
            "0308",
            "0701",
            "0706",
            "0709",
            "0805",
            "1102",
            "1702",
            "0301",
        ],
        [
            "0312",
            "1401",
            "1704",
            "0906",
            "0209",
            "1409",
            "2109",
            "2909",
            "2410",
            "1511",
        ],
        ["0313", "1310"],
        [
            "0405",
            "2404",
            "2906",
            "1608",
            "1609",
            "1611",
            "0113"
        ],
        [
            "0511",
            "1708",
            "1803",
            "1811",
            "2104",
            "2106",
            "2911",
            "0404",
            "0807",
            "1006",
        ],
        ["0605", "0604", "0806"],
        [
            "0801",
            "1505",
            "2004",
            "2010",
            "2212",
            "2307",
            "2606",
            "2610",
            "2611",
            "0401",
            "0412",
            "0504",
            "0508",
            "0509",
            "0601",
            "0708",
            "0910",
            "2102",
            "2501",
        ],
        ["0903", "0106", "0303", "0407", "1201"],
        ["1009", "0812"],
        ["1202", "1509"],
        ["1203", "1210"],
        ["1312", "2107"],
        ["1402", "2507"],
        [
            "1503",
            "1211",
            "1510",
            "2411",
            "2805",
            "0112",
            "0410",
            "0411",
            "0606",
            "0912",
        ],
        ["1601", "2807", "0909"],
        ["1610", "1104", "1506", "1603", "1705", "0204"],
        ["1701", "1007", "1212"],
        [
            "2009",
            "0702",
            "1302",
            "2502",
            "0703",
            "1204",
            "1405",
            "2505",
            "0306",
            "1206",
            "1906",
            "0907",
            "0108",
            "1008",
            "2910",
            "0413",
        ],
        [
            "2011",
            "1807",
            "2008",
            "2408",
            "2506",
            "2608",
            "2806",
            "0208",
            "0610",
            "1502",
            "1902",
        ],
        ["2101", "1107", "1407", "2301"],
        ["2202", "1804", "0406"],
        [
            "2203",
            "1010",
            "1308",
            "1905",
            "1911",
            "2012",
            "2210",
            "2603",
            "3011",
            "0107",
            "0408",
            "0707",
            "2701",
            "2801",
        ],
        ["2204", "3007"],
        ["2205", "1309", "1710", "1909", "2310", "0510", "0904", "0908", "2402"],
        ["2308", "1910", "2312", "2711", "2712", "0609", "0710", "0809", "0703"],
        ["2409", "0810"],
        ["2503", "2509", "2511", "2808", "0505", "0802", "2802"],
        ["2601", "1103", "1304", "1606", "0712"],
        ["2605", "0512"],
        ["2702", "1411", "1809", "1912", "2707", "0506", "0811", "0905"],
        ["2703", "1604", "2311", "0503", "0607", "1012", "1712", "2902"],
        [
            "2903",
            "1602",
            "1802",
            "0203",
            "1106",
            "2006",
            "0307",
            "1207",
            "1607",
            "2007",
            "2407",
            "1408",
            "2208",
            "0409",
            "1810",
        ],
        ["3008", "0211", "2003", "2309", "2710", "0911", "3002"],
    ];
}
function toggleSideBars() {
    if (!leftSideBar.classList.contains(hidden) &&
        rightSideBar.classList.contains(hidden)) {
        closeSideBar(leftSideBar);
    }
    else if (!rightSideBar.classList.contains(hidden) &&
        leftSideBar.classList.contains(hidden)) {
        closeSideBar(rightSideBar);
    }
    else if (leftSideBar.classList.contains(hidden) &&
        leftSideBar.classList.contains(hidden)) {
        openSideBar(leftSideBar);
    }
}
/**
 * Opens the side bar by setting its width to a given value
 * @param {HTMLElement} sideBar - the html element representing the side bar that needs to be opened
 */
async function openSideBar(sideBar) {
    if (sideBar.querySelector('#sideBarBtns').children.length < 1)
        return;
    sideBar.classList.remove(hidden);
}
/**
 * Removes a script (found by its id), and reloads it by appending it to the body of the document
 *@param {string[]} scriptIDs - the ids if the scripts that will be removed and reloaded as child of the body
 */
function reloadScripts(scriptIDs) {
    let old, copy;
    scriptIDs
        .forEach((id) => {
        old = document.getElementById(id);
        if (!old)
            return;
        copy = document.createElement("script");
        copy.id = old.id;
        copy.src = old.src;
        copy.type = old.type;
        old.remove();
        copy.onload = () => {
            if (id.includes('PrayersArray'))
                populatePrayersArrays();
        };
        document.getElementsByTagName("body")[0].appendChild(copy);
    });
}
/**
 * Closes the side bar passed to it by setting its width to 0px
 * @param {HTMLElement} sideBar - the html element representing the side bar to be closed
 */
async function closeSideBar(sideBar) {
    sideBar.classList.add(hidden);
}
/**
 * Detects whether the user swiped his fingers on the screen, and opens or closes teh right or left side bars accordingly
 */
function DetectFingerSwipe() {
    let direction;
    //Add finger swipe event
    let xDown = null;
    let yDown = null;
    document.addEventListener("touchstart", handleTouchStart, false);
    document.addEventListener("touchmove", handleTouchMove, false);
    function handleTouchStart(evt) {
        const firstTouch = evt.touches[0];
        xDown = firstTouch.clientX;
        yDown = firstTouch.clientY;
    }
    function handleTouchMove(evt) {
        if (!expandableBtnsPannel.classList.contains(hidden))
            return; //If the expandable pannel is not hidden, it means we entered the settings pannel or we are choosing a prayer from a multiple choices screen. We do not associate any action to the figuer swipe
        evt.preventDefault;
        if (!xDown || !yDown)
            return;
        let xUp = evt.touches[0].clientX;
        let yUp = evt.touches[0].clientY;
        let xDiff = xDown - xUp;
        let yDiff = yDown - yUp;
        if (Math.abs(xDiff) > Math.abs(yDiff)) {
            /*most significant*/
            if (xDiff > 10) {
                /* right to left swipe */
                direction = "left";
                if (!leftSideBar.classList.contains(hidden) &&
                    rightSideBar.classList.contains(hidden)) {
                    closeSideBar(leftSideBar);
                }
                else if (rightSideBar.classList.contains(hidden) &&
                    leftSideBar.classList.contains(hidden)) {
                    openSideBar(rightSideBar);
                }
            }
            else if (xDiff < -10) {
                /* left to right swipe */
                direction = "right";
                if (leftSideBar.classList.contains(hidden) &&
                    rightSideBar.classList.contains(hidden)) {
                    openSideBar(leftSideBar);
                }
                else if (!rightSideBar.classList.contains(hidden) &&
                    leftSideBar.classList.contains(hidden)) {
                    closeSideBar(rightSideBar);
                }
            }
        }
        else {
            if (yDiff > 0) {
                /* down swipe */
                direction = "down";
                if (localStorage.displayMode === displayModes[1])
                    goToNextOrPreviousSlide(undefined, direction);
            }
            else {
                /* up swipe */
                direction = "up";
                if (localStorage.displayMode === displayModes[1])
                    goToNextOrPreviousSlide(undefined, direction);
            }
        }
        /* reset values */
        xDown = null;
        yDown = null;
    }
    return direction;
}
/**
 * Takes an Html Element and looks for all the other elements having the same "lang" attribute as the Html element passed to it, then it checks if the size of text is amplified or not: if already amplified, it reduces it, if not, it amplifies it
 * @param {HTMLElement} target - the Html element containing the text which we will be amplified together with all the text with the same language
 * @param {string} myClass - the name of the CSS class that will be applied to amplify the text
 */
function toggleAmplifyText(target, myClass) {
    if (localStorage.displayMode === displayModes[1]) {
        //If we are in the "Presentation" Mode, we will not amplify or reduce the text, we will open or close the left side bar
        toggleSideBars();
        return;
    }
    let amplified = JSON.parse(localStorage.textAmplified);
    Array.from(containerDiv.querySelectorAll("P"))
        .filter((p) => p.lang === target.lang)
        .forEach((p) => {
        p.classList.toggle(myClass);
        Array.from(p.children).forEach((child) => child.classList.toggle(myClass));
    });
    if (target.classList.contains(myClass)) {
        //it means that the class was added (not removed) when the user dbl clicked
        amplified.filter((el) => el[0] === target.lang.toUpperCase())[0][1] = true;
    }
    else {
        amplified.filter((el) => el[0] === target.lang.toUpperCase())[0][1] = false;
    }
    localStorage.textAmplified = JSON.stringify(amplified);
}
/**
 * This function is meant to create a side bar on the fly. we are not using it anymore. It will be deprecated.
 * @param id
 * @returns
 */
function buildSideBar(id) {
    let sideBar = document.createElement("div"), btnsDiv = document.createElement("div"), colseBtnDiv = document.createElement("div"), a = document.createElement("a");
    sideBar.id = id;
    sideBar.classList.add(id);
    sideBar.classList.add("sideBar");
    sideBar.classList.add("collapsed");
    colseBtnDiv.appendChild(a);
    colseBtnDiv.id = 'closeBtnDiv';
    a.innerText = "&times";
    a.classList.add("closebtn");
    a.setAttribute("href", "javascript:void(0)");
    a.addEventListener("click", (e) => {
        e.preventDefault;
        closeSideBar(sideBar);
    });
    sideBar.appendChild(a);
    btnsDiv.id = "sideBarBtns";
    sideBar.appendChild(btnsDiv);
    if (id === "leftSideBar") {
        //leftSideBar = sideBar
    }
    else if (id === "rightSideBar") {
        //rightSideBar = sideBar
    }
    return sideBar;
}
/**
 * If args.wordTable is omitted, this function creates div elements for each string[] (row) in each table (i.e., string[][]) referenced in the button's (i.e., args.btn) prayersSequence, which is a string[] containing an ordered list of the titles of the tables of prayers that will be shown when the button is clicked. If args.wordTable is provided, the function will create div elements for each row (i.e. string[]) of this table.
 * @param {Button} btn
 * @param {string[]} prayersSequence - if wordTable is missing, the function will retrieve the tables from the titles in the prayersSequence. If this argument is missing, it will be set to btn.prayersSequence.
 * @param {DocumentFragment | HTMLDivElement} container - the html element to which the created divs will be appended at the position provided by the "position" argument.
 * @param {boolean} clearContainer - tells wether the containerDiv content needs to be cleared. If ommitted, its default value is true.
 *  @param {Boolean} clearSideBar - tells wether the right sideBar needs to be cleared. If ommitted, its default value is true.
 * @param {HTMLElement|{beforeOrAfter:insertPosition, el:HtmlElement}} position - if it is an HTML Element, the newly created divs will be appended to this html element. If it is an object, the newly created divs will be placed in the position provided (the position is of type insertPosition) by the beforeOrAfter property, in relation to the html element provied in the el property
 * @param {string[][]} wordTable - If a table is passed as argument, the function will create and return div elements for each row (i.e., each string[]) in the table. If omitted, the function will retrieve all the tables referenced in the button's (i.e. args.btn) prayers' sequence (i.e. args.btn.prayersSequence) and will create html divs for each row (i.e. string[]) in each table.
 */
function showPrayers(args) {
    if (!args.prayersSequence && !args.table) {
        console.log("You must provide either a prayersSequence, or a table. None of those arguments is provided");
        return [];
    }
    (function setDefaults() {
        //Setting container, and the values for the missing arguments
        if (!args.container)
            args.container = containerDiv;
        if (!args.position)
            args.position = args.container;
        if (args.clearContainerDiv !== false)
            args.clearContainerDiv = true;
        if (args.clearContainerDiv === true)
            containerDiv.innerHTML = "";
        if (args.clearRightSideBar !== false)
            args.clearRightSideBar = true;
        if (args.clearRightSideBar === true)
            sideBarTitlesContainer.innerHTML = ""; //this is the right side bar where the titles are displayed for navigation purposes
    })();
    closeSideBar(leftSideBar);
    let date, tables = [];
    (function retrievePrayersTables() {
        if (args.table)
            return tables.push(args.table); //If a table is already passed as argument, we will add this table to tables[]. Otherwise, we will retrieve the tables from args.prayersSequence;
        if (!args.prayersSequence)
            return console.log("The prayersSequences is missing, we cannot retrieve the tables");
        args.prayersSequence
            .forEach((tableTitle) => {
            if (!tableTitle)
                return console.log("No tableTitle");
            if (!tableTitle.includes("&D="))
                tableTitle += "&D=" + copticReadingsDate; //if the date/season of the prayer is not indicated in the title of the table, it means that we need to retrieve a table with the same base, but having as date the copticReadingsDate (eg. the St Paul reading or the Katholikon).
            tables.push(findTable(tableTitle, getTablesArrayFromTitlePrefix(tableTitle)));
        });
    })();
    return processTables();
    function processTables() {
        //We will return an HTMLDivElement[] of all the divs that will be created from wordTable
        let htmlDivs = [];
        let entireTable, dataGroup, dataRoot;
        tables.forEach((table) => {
            if (!table)
                return;
            entireTable = unfoldPlaceHolders(table);
            dataGroup = splitTitle(entireTable[0][0])[0]; //This will not change and will serve to set the dataset.group property of all the div elements that will be created for the table
            entireTable.forEach((row) => htmlDivs.push(processRow(row)));
        });
        return htmlDivs;
        function processRow(row) {
            if (!row)
                return undefined;
            if (!row[0].startsWith(Prefix.same))
                dataRoot = splitTitle(row[0])[0]; //Each time a row has its own title (which means the row is the first row in a table), we will set the dataset.root of this row and the following rows to the value of row[0]
            return createHtmlElementForPrayer({
                tblRow: row,
                dataGroup: dataGroup,
                dataRoot: dataRoot,
                languagesArray: args.languages,
                position: args.position,
                container: args.container,
            }) || undefined;
        }
        function unfoldPlaceHolders(table) {
            if (!table.find(row => row[0].startsWith(Prefix.placeHolder)))
                return table;
            let newTable = [...table], referencedTable, references = table.filter(row => row[0].startsWith(Prefix.placeHolder));
            references
                .forEach(row => {
                referencedTable = findTable(row[1], getTablesArrayFromTitlePrefix(row[1])) || undefined;
                if (!referencedTable)
                    return;
                if (referencedTable.find(row => row[0].startsWith(Prefix.placeHolder)))
                    //If the returned table also has placeHolders amongst its rows, we will unfold the placeHolders.
                    referencedTable = unfoldPlaceHolders(referencedTable);
                newTable.splice(newTable.indexOf(row), 1, ...referencedTable);
            });
            return newTable;
        }
        ;
    }
    ;
}
/**
 * Uses the prefix at the begining of the title of a table or a row (i.e. Prefi.something) to find the string[][][] array where a table which title starts with the same prefix, should be found.
 * @param {string} title: the title starting with a prefix, from which the string[][][] is retrived
 * @return {string[][][]} - the array in which a table which title starts with such prefix, should be found
 */
function getTablesArrayFromTitlePrefix(title) {
    if (!title)
        return;
    if (title.startsWith(Prefix.HolyWeek) && title.includes('HM') || title.includes('HE'))
        return ReadingsArrays.GospelNightArrayFR;
    let array = PrayersArraysKeys.find((entry) => title.startsWith(entry[0]));
    if (array)
        return array[2]();
}
/**
 * Returns the name of the array passed to it as an argument
 * @param {string[][][]} array
 */
function getArrayNameFromArray(array) {
    let keys = PrayersArraysKeys.find((key) => key[2]() === array);
    if (keys)
        return keys[1];
}
/**
 * This function mainly sets the the CSS gridAreasTemplate, the number of grid columns, and the width of each column for the provided list of html elements. It also other CSS properties (inserts + or - signs for titles, encircules the beam note with a span, etc.)
 * @param {NodeListOf<Element>} Rows - The html elements for which we will set the css. These are usually the div children of containerDiv
 * @param {HTMLElement[]} - the html divs for which we want to set their CSS.
 */
async function setCSS(htmlRows) {
    if (!htmlRows)
        return;
    if (localStorage.displayMode === displayModes[1])
        return;
    if (!htmlRows)
        return;
    let plusSign = String.fromCharCode(plusCharCode), minusSign = String.fromCharCode(plusCharCode + 1);
    htmlRows
        .forEach((row) => {
        if (!row)
            return; //!Caution: in some scenarios, htmlRows might contain undefined rows. We need to check for this in order to avoid erros
        if (row.children.length === 0)
            row.classList.add(hidden); //If the row has no children, it means that it is a row created as a name of a table or as a placeholder. We will hide the html element
        //Setting the number of columns and their width for each element having the 'Row' class for each Display Mode
        row.style.gridTemplateColumns = setGridColumnsOrRowsNumber(row);
        //Defining grid areas for each language in order to be able to control the order in which the languages are displayed (Arabic always on the last column from left to right, and Coptic on the first column from left to right)
        row.style.gridTemplateAreas = setGridAreas(row);
        (function addRightBorders() {
            let rowChildren = Array.from(row.children);
            let gridAreas = row.style.gridTemplateAreas
                .replaceAll('"', "")
                .split(" ");
            if (gridAreas.length <= 1)
                return;
            gridAreas.forEach((area) => {
                if (gridAreas.indexOf(area) === gridAreas.length - 1)
                    return;
                rowChildren.find((child) => child.lang.toUpperCase() === area).style.borderRightStyle = "groove";
            });
        })();
        if (isTitlesContainer(row)) {
            //This is the div where the titles of the prayer are displayed. We will add an 'on click' listner that will collapse the prayers
            (async function addPlusAndMinusSigns() {
                if (isTitlesContainer(row.nextElementSibling))
                    return;
                if (htmlRows
                    .filter(div => div.dataset.root && div.dataset.root === row.dataset.root).length < 1)
                    return;
                row.role = "button";
                let defLangParag = row.querySelector('p[lang="' + defaultLanguage.toLowerCase() + '"]');
                if (!defLangParag)
                    defLangParag = row.lastElementChild;
                if (!defLangParag)
                    return console.log("no paragraph with lang= " + defaultLanguage);
                if (defLangParag.innerHTML.includes(plusSign + " "))
                    defLangParag.innerHTML = defLangParag.innerHTML.replace(plusSign + " ", ""); //We remove the + sign in the begining (if it exists)
                if (defLangParag.innerHTML.includes(minusSign + " "))
                    defLangParag.innerHTML = defLangParag.innerHTML.replace(minusSign + " ", ""); //!Caution: we need to work with the innerHTML in order to avoid losing the new line or any formatting to the title text when adding the + or - sing. So don't change the innerHTML to innerText or textContent
                if (row.dataset.isCollapsed)
                    defLangParag.innerHTML = plusSign + " " + defLangParag.innerHTML; //We add the plus (+) sign at the begining
                if (!row.dataset.isCollapsed)
                    defLangParag.innerHTML = minusSign + " " + defLangParag.innerHTML; //We add the minus (-) sig at the begining;
            })();
        }
        let paragraphs = Array.from(row.querySelectorAll("p"));
        if (row.classList.contains("Diacon"))
            replaceMusicalNoteSign(paragraphs);
        if (row.dataset.root
            &&
                [
                    Prefix.praxis,
                    Prefix.Catholicon,
                    Prefix.stPaul,
                    Prefix.gospelMorning,
                    Prefix.gospelVespers,
                    Prefix.gospelNight,
                    Prefix.gospelMass,
                    Prefix.synaxarium,
                    Prefix.prophecies,
                    Prefix.bookOfHours,
                    Prefix.HolyWeek
                ].find((prefix) => row.dataset.root.startsWith(prefix)))
            replaceQuotes(paragraphs); //If the text is one of the "Readings", we replace the quotes signs
        insertSuperScriptTag(paragraphs);
    });
}
/**
 * Replaces the quotes ("") signs in the text by a span containing the relevant quotes sign acording the language
 * @param {HTMLPargraphElement[]} paragraphs  - the html pragraphs containing the quotes signs that need to be replaced
 */
function replaceQuotes(paragraphs) {
    let splitted;
    paragraphs
        .filter((paragraph) => !paragraph.classList.contains("COP") &&
        !paragraph.classList.contains("CA"))
        .forEach((paragraph) => {
        paragraph.innerHTML = paragraph.innerHTML
            .replaceAll(String.fromCharCode(171), "<q>")
            .replaceAll(String.fromCharCode(187), "</q>");
        let matches = Array.from(paragraph.innerHTML.matchAll(/"/g));
        matches.forEach(match => {
            if (matches.indexOf(match) % 2 === 0)
                paragraph.innerHTML = paragraph.innerHTML.replace(match[0], '<q>');
            else
                paragraph.innerHTML = paragraph.innerHTML.replace(match[0], '</q>');
        });
    });
}
/**
 * Replaces the verses numbers with a superScript span
 * @param {HTMLPargraphElement[]} paragraphs
 */
function insertSuperScriptTag(paragraphs) {
    //let exp: RegExp = /Sup_\d*_Sup/g
    paragraphs
        .forEach(parag => {
        //We will convert the verses numbers into superscripts
        if (!/Sup_\d*_Sup/.test(parag.innerText))
            return;
        //exp.lastIndex = 0; //We reset the last index of the RegExp
        parag.innerHTML =
            parag.innerHTML
                .replaceAll('Sup_', '<sup class="superScript">')
                .replaceAll('_Sup', '</sup>');
        /*
        Array.from(parag.innerHTML.matchAll(exp))
          .forEach(match=> {
            parag.innerHTML = parag.innerHTML.replace(match[0], match[0].replace('Sup_', '<sup class="superScript">')
            .replace('_Sup', '</sup>'))
            
          });
          */
    });
}
;
/**
 * Returns a string representing the grid areas for an html element with a 'display:grid' property, based on the "lang" attribute of its children
 * @param {HTMLElement} row - an html element having children and each child has a "lang" attribute
 * @returns {string} representing the grid areas based on the "lang" attribute of the html element children
 */
function setGridAreas(row) {
    if (!row || row.children.length < 1)
        return;
    let areas = Array.from(row.children).map(child => child.lang.toUpperCase());
    if (areas.indexOf('AR') === 0 &&
        !row.classList.contains("Comments") &&
        !row.classList.contains("CommentText"))
        areas.reverse(); //if the 'AR' is the first language, it means it will be displayed in the first column from left to right. We need to reverse the array in order to have the Arabic language on the last column from left to right
    return '"' + areas.join(" ") + '"'; //we should get a string like ' "AR COP FR" ' (notice that the string marks " in the beginning and the end must appear, otherwise the grid-template-areas value will not be valid)
}
async function applyAmplifiedText(htmlRows) {
    if (!htmlRows)
        return;
    if (localStorage.displayMode === displayModes[1])
        return; //We don't amplify the text if we are in the 'Presentation Mode'
    let langs = JSON.parse(localStorage.textAmplified);
    langs = langs.filter((lang) => lang[1] === true);
    htmlRows.forEach((row) => {
        //looping the rows in the htmlRows []
        Array.from(row.children)
            //looping the children of each row (these children are supposedly paragraph elements)
            .forEach((child) => {
            if (!child.lang)
                return;
            //if the child has the lang attribute set, we will loop each language in langs, and if
            langs.forEach((lang) => {
                if (child.lang === lang[0].toLowerCase())
                    child.classList.add("amplifiedText");
            });
        });
    });
}
/**
 * Hides all the nextElementSiblings of a title html element (i.e., a div having the class 'Title' or 'SubsTitle') if the nextElementSibling has the same data-group attribute as the title html element
 * @param {HTMLDivElement} titleRow - the html div element containing the title (i.e. having class "Title" or "Subtitle" in its classList), which, when clicked, we will toggle the 'hidden' class from all the HTML div elements having the same dataset.goup or the same dataset.root
 * @param {boolean} collapse - If collapse = true the funcion will hide the text, and will show it if collapse = false. If ommitted, the function will toggle the "hidden" class
 * @param {HTMLDivElement[]} children - an array of HTML div elements with the same dataset.group
 * @param {HTMLDivElement[]} titlesRows - an array of HTML div elements having the same dataset-group and the class "Title" or "Subtitle" in their classList.
 */
function collapseOrExpandText(titleRow, collapse, children, titlesRows) {
    if (localStorage.displayMode === displayModes[1])
        return; //When we are in the 'Presentation' display mode, the titles sibligins are not hidden when we click the title div
    if (!titleRow.dataset.group)
        return;
    if (collapse === true) {
        titleRow.dataset.isCollapsed = "true";
    }
    else if (collapse === false) {
        titleRow.dataset.isCollapsed = "";
    }
    else {
        //In this case we will toggle the isCollapsed status
        if (titleRow.dataset.isCollapsed)
            titleRow.dataset.isCollapsed = "";
        else if (!titleRow.dataset.isCollapsed)
            titleRow.dataset.isCollapsed = "true";
    }
    togglePlusAndMinusSignsForTitles(titleRow);
    if (!children)
        children =
            Array.from(containerDiv.querySelectorAll('div'))
                //!We must use querySelectorAll because some elements are not direct children of containerDiv (e.g. they may be nested in an expandable element)
                .filter(div => div.children.length > 0) //We exclude rows with no children (those are PlaceHolders)
                .filter(div => div.dataset.group)
                .filter(div => div.dataset.group === titleRow.dataset.group);
    if (!titlesRows)
        titlesRows = children.filter((div) => isTitlesContainer(div)); //Those are all the "Title" divs having the same data-group as titleRow
    let titleRowChildren;
    titlesRows.length === 1 ?
        titleRowChildren = children.filter(child => child.dataset.group === titleRow.dataset.group) //There is only 1 title for the same dataset.group (which mostly the case)
        :
            titleRowChildren = children.filter(child => child.dataset.root === titleRow.dataset.root); //There are more than 1 title with the same dataset.group attribute. In this case, each titleRow will only hide the divs sharing the same dataset.root (not the same dataset.group because otherwise, all the other titles and their children will be affected)
    toggleHidden(titleRowChildren);
    if (titlesRows.indexOf(titleRow) === 0) {
        //If there are more than one title sharing the same dataset.group, and titleRow is the first amongst those titles, we will toggle the 'hidden' class for all the other titles.
        titlesRows
            .filter(titleDiv => titleDiv !== titleRow)
            .forEach(titleDiv => collapseOrExpandText(titleDiv, Boolean(titleRow.dataset.isCollapsed), children, titlesRows));
    }
    function toggleHidden(htmlElements) {
        htmlElements
            .forEach(div => {
            if (div === titleRow)
                return;
            if (titleRow.dataset.isCollapsed && !div.classList.contains(hidden))
                div.classList.add(hidden);
            else if (div.classList.contains(hidden))
                div.classList.remove(hidden);
        });
    }
    ;
}
/**
 * Toggels the minus and plus signs in the Title
 * @param {HTMLElement} titleRow - the html element (usually a div with class 'Title') that we wqnt to toggle the minus or plus signs according to whether the text is collapsed or not
 * @returns
 */
async function togglePlusAndMinusSignsForTitles(titleRow, plusCode = plusCharCode) {
    if (!titleRow.children)
        return;
    let parag;
    parag = Array.from(titleRow.children).filter((child) => child.innerHTML.startsWith(String.fromCharCode(plusCode)) ||
        child.innerHTML.startsWith(String.fromCharCode(plusCode + 1)))[0];
    if (!parag)
        return;
    if (!titleRow.dataset.isCollapsed) {
        parag.innerHTML = parag.innerHTML.replace(String.fromCharCode(plusCode), String.fromCharCode(plusCode + 1));
    }
    else if (titleRow.dataset.isCollapsed) {
        parag.innerHTML = parag.innerHTML.replace(String.fromCharCode(plusCode + 1), String.fromCharCode(plusCode));
    }
}
/**
 * Collapses all the tiltes (i.e. all the divs with class 'Title' or 'SubTitle') in the html element passed as argument
 * @param {HTMLElement} container - the html element in which we will collapse all the divs having as class 'Title' or 'SubTitle'
 */
function collapseAllTitles(htmlRows) {
    if (!htmlRows || htmlRows.length === 0)
        return;
    if (localStorage.displayMode === displayModes[1])
        return;
    htmlRows
        .forEach((row) => {
        if (!isTitlesContainer(row) && !row.classList.contains(hidden))
            row.classList.add(hidden);
        else if (isTitlesContainer(row)) {
            row.dataset.isCollapsed = "true";
            togglePlusAndMinusSignsForTitles(row);
        }
    });
}
/**
 * Creates an array from all the children of a given html element (container), and filteres the array based on the data-root attribute provided, and on the criteria provided in options
 * @param {HTMLElement | DocumentFragment} container - the html element containing the children that we want to filter based on their data-root attributed
 * @param {string} dataSet - the data-root attribute based on which we want to filter the children of container
 * @param {{equal?:boolean, includes?:boolean, startsWith?:boolean, endsWith?:boolean}} options - the criteria according to which we want the data-root attribute of each child element to mach dataRoot: absolutely equal (===)? startsWith(dataRoot)?, etc.
 * @returns {HTMLDivElement[]} - the children of container filtered based on their data-root attributes
 */
function selectElementsByDataSetValue(container, dataSet, options, dataSetName = 'root') {
    dataSetName = [["root", "data-root"], ["group", 'data-group']].find(el => el[0] === dataSetName)[1];
    let children = Array.from(container.querySelectorAll("div")).filter((div) => div.attributes[dataSetName]);
    if (!options)
        options = { equal: true };
    if (options.equal)
        return children.filter((div) => div.attributes[dataSetName].value === dataSet);
    else if (options.includes)
        return children.filter((div) => div.attributes[dataSetName].value.includes(dataSet));
    else if (options.startsWith)
        return children.filter((div) => div.attributes[dataSetName].value.startsWith(dataSet));
    else if (options.endsWith)
        return children.filter((div) => div.attributes[dataSetName].value.endsWith(dataSet));
}
/**
 *
 * @param {string[][][]} filteredPrayers - An array containing the optional prayers for which we want to display html button elements in order for the user to choose which one to show
 * @param {Button} btn
 * @param {HTMLElement} btnsDiv - The html element in which each prayer will be displayed when the user clicks an inline button representing this prayer
 * @param {Object{AR:string, FR:'string'}} btnLabels - An object containing the labels of the master button that the user will click to show a list of buttons, each representing a prayer in selectedPrayers[]
 * @param {string} masterBtnID - The id of the master button
 */
async function showMultipleChoicePrayersButton(args) {
    if (!args.anchor)
        console.log("anchor missing");
    if (!args.masterBtnDiv && args.anchor) {
        args.masterBtnDiv = document.createElement("div"); //a new element to which the inline buttons elements will be appended
        args.anchor.insertAdjacentElement("afterend", args.masterBtnDiv); //we insert the div after the insertion position
    }
    (async function createMasterBtn() {
        let btn = new Button({
            btnID: args.masterBtnID,
            label: args.btnLabels,
            children: await createBtnsForPrayers(), //The inlineBtns are not added immediately, they are added later by createInlineBtns() below
            pursue: false, //!CAUTION: we must keep it false in order to stop the showChildButtonsOrPrayers() from continuing the execution after calling the onClick() property of the master button. Otherwise, this will show again the inlineButtons of the master button
            cssClass: inlineBtnClass,
            onClick: () => {
                let groupOfNumber = 4;
                //We show the inlineBtnsDiv (bringing it in front of the containerDiv by giving it a zIndex = 3)
                showExpandableBtnsPannel(args.masterBtnID, true);
                //When the prayersMasterBtn is clicked, it will create a new div element to which it will append html buttons element for each inlineBtn in its inlineBtns[] property
                let newDiv = document.createElement("div");
                newDiv.id = args.masterBtnID + "Container";
                //Customizing the style of newDiv
                newDiv.classList.add(inlineBtnsContainerClass);
                //We set the gridTemplateColumns of newDiv to a grid of 3 columns. The inline buttons will be displayed in rows of 3 inline buttons each
                newDiv.style.gridTemplateColumns = setGridColumnsOrRowsNumber(newDiv, undefined, 2);
                //We append newDiv  to inlineBtnsDiv before appending the 'next' button, in order for the "next" html button to appear at the buttom of the inlineBtnsDiv. Notice that inlineBtnsDiv is a div having a 'fixed' position, a z-index = 3 (set by the showInlineBtns() function that we called). It hence remains visible in front of, and hides the other page's html elements in the containerDiv
                expandableBtnsPannel.appendChild(newDiv);
                expandableBtnsPannel.style.borderRadius = "10px";
                let startAt = 0;
                //We call showGroupOfSisxPrayers() starting at inlineBtns[0]
                showGroupOfNumberOfPrayers(btn, startAt, newDiv, groupOfNumber);
            },
        });
        (function createMasterBtnHtml() {
            createHtmlBtn({
                btn: btn,
                btnsContainer: args.masterBtnDiv,
                btnClass: btn.cssClass,
                clear: false,
                onClick: btn.onClick,
            });
            args.masterBtnDiv.classList.add(inlineBtnsContainerClass);
            args.masterBtnDiv.classList.add("masterBtnDiv");
            args.masterBtnDiv.style.gridTemplateColumns = "100%";
        })();
        return btn;
    })();
    /**
     * Shows a group of html buttons, each button shows a prayer. A button next permits to navigate through the list of html buttons
     */
    function showGroupOfNumberOfPrayers(masterBtn, startAt, btnsDiv, groupOfNumber) {
        let childBtn;
        (function createHtmlButtonNext() {
            if (masterBtn.children.length <= groupOfNumber)
                return; //We don't create next button if the nubmer of optional prayers is less or equal to the defined number of prayers to be displayed each time
            let next = new Button({
                btnID: "btnNext",
                label: { AR: "التالي", FR: "Suivants" },
                cssClass: inlineBtnClass,
            });
            //if the number of prayers is > than the groupOfNumber AND the remaining prayers are >0 then we show the next button
            if (masterBtn.children.length - startAt > groupOfNumber) {
                //We create the "next" Button only if there is more than 6 inlineBtns in the prayersBtn.inlineBtns[] property
                next.onClick = () => btnNextOnClick(true);
            }
            else if (masterBtn.children.length - startAt <= groupOfNumber) {
                next.label.AR = "عودة";
                next.label.FR = "Retour";
                next.onClick = () => btnNextOnClick(false);
            }
            if (!next.onClick)
                return; //If no onClick function was assigned to next, we do not create the next button
            createHtmlBtn({
                btn: next,
                btnsContainer: expandableBtnsPannel,
                btnClass: next.cssClass,
                clear: false,
                onClick: next.onClick,
            }); //notice that we are appending next to inlineBtnsDiv directly not to newDiv (because newDiv has a display = 'grid' of 2 columns. If we append to it, 'next' button will be placed in the 1st cell of the last row. It will not be centered). Notice also that we are setting the 'clear' argument of createBtn() to false in order to prevent removing the 'Go Back' button when 'next' is passed to showchildButtonsOrPrayers()
            function btnNextOnClick(forward = true) {
                //When next is clicked, we remove all the html buttons displayed in newDiv (we empty newDiv)
                btnsDiv.innerHTML = "";
                //We then remove the "next" html button itself (the "next" button is appended to inlineBtnsDiv directly not to newDiv)
                expandableBtnsPannel.querySelector("#" + next.btnID).remove();
                //We set the starting index for the next group of inline buttons
                if (forward)
                    startAt += groupOfNumber;
                else
                    startAt = 0;
                //We call showGroupOfSixPrayers() with the new startAt index
                showGroupOfNumberOfPrayers(masterBtn, startAt, btnsDiv, groupOfNumber);
            }
        })();
        (function createPrayersHtmlButtons() {
            for (let n = startAt; n < startAt + groupOfNumber && n < masterBtn.children.length; n++) {
                //We create html buttons for the 1st 6 inline buttons and append them to newDiv
                childBtn = masterBtn.children[n];
                if (!foreingLanguage && !childBtn.label[defaultLanguage])
                    return; //If no foreign language has been set by the user, and the prayer is not availble in the defaultLanguage (we check this by seeing if there is a label in this language), we will not create the btn
                if (!childBtn.label[defaultLanguage] && !childBtn.label[foreingLanguage])
                    return; //Also if a foreign language has been set by the user, but the prayer is not availble in neither the defaultLanguage  nor the default language (we check this by seeing if there is a label in each language), we will not create the btn
                createHtmlBtn({
                    btn: childBtn,
                    btnsContainer: btnsDiv,
                    btnClass: childBtn.cssClass,
                    clear: false,
                    onClick: childBtn.onClick,
                });
            }
        })();
    }
    ;
    /**
     *Creates a new Button for each optional prayer
     @return {Promise<Button[]>}
     */
    async function createBtnsForPrayers() {
        let btns;
        btns = args.filteredPrayers.map((table) => {
            //for each string[][][] representing a table in the Word document from which the text was extracted, we create an inlineButton to display the text of the table
            if (table.length === 0)
                return;
            let title = splitTitle(table[0][0])[0];
            let btn = new Button({
                btnID: title, //prayerTable[0] is the 1st row, and prayerTable[0][0] is the 1st element, which represents the title of the table + the cssClass preceded by "&C="
                label: {
                    AR: table[0][args.languages.indexOf('AR') + 1], //prayerTable[0] is the first row of the Word table from which the text of the prayer was retrieved. The 1st element of each row contains  the title of the prayer (i.e. the title of the table) + the CSS class of the row, preceded by "&C=". We look for the Arabic title by the index of 'AR' in the btn.languages property. We add 1 to the index because the prayerTable[0][0] is the title of the table as mentioned before
                    FR: table[0][args.languages.indexOf('FR') + 1], //same logic and comment as above
                },
                languages: args.languages, //we keep the languages of the btn since the fraction prayers are retrieved from a table having the same number of columns and same order for the languages
                cssClass: "multipleChoicePrayersBtn",
                onClick: () => btnOnClick(btn, title),
            });
            return btn;
        });
        if (foreingLanguage)
            btns
                .filter(btn => !btn.label[defaultLanguage] && btn.label[foreingLanguage]) //For any button which prayer is not available in the defaultLanguage, but is available in the foreignLanguage, we will set its defaultLanguage label to be equal to its foreignLanguage lable. We do this, because any button that doesn't have a defaulLangauge label will be excluded from the btns array that the function will return
                .map(btn => {
                btn.label[defaultLanguage] = btn.label[foreingLanguage];
                btns.splice(btns.indexOf(btn), 1); //We remove the button from btns array, and will push it to the array later in order to move it to the end
                return btn;
            })
                .forEach(btn => btns.push(btn));
        return btns.filter(btn => btn.label[defaultLanguage]); //!We return only the btns having a lable in the defaultLanguage
        function btnOnClick(btn, title) {
            let table = findTable(title, getTablesArrayFromTitlePrefix(title)) || undefined;
            console.log(title);
            let container = document.createElement('div');
            if (!table)
                return;
            let masterBtn = Array.from(containerDiv.querySelectorAll("." + inlineBtnClass)).find((child) => child.id === args.masterBtnID);
            //When the prayer button is clicked, we empty and hide the inlineBtnsDiv
            hideExpandableButtonsPannel();
            let shown = Array.from(containerDiv.children)
                .find((div) => div.dataset.optionalPrayer &&
                div.dataset.optionalPrayer === masterBtn.dataset.shown);
            if (shown)
                shown.remove();
            //We call showPrayers and pass inlinBtn to it in order to display the fraction prayer
            let createdElements = showPrayers({
                table: table,
                languages: btn.languages,
                container: container,
                clearContainerDiv: false,
                clearRightSideBar: false,
            }) || undefined;
            if (!createdElements)
                return;
            container.dataset.optionalPrayer = title;
            masterBtn.dataset.shown = title;
            args.masterBtnDiv.insertAdjacentElement('afterend', container);
            //We format the grid template of the newly added divs
            setCSS(createdElements);
            //We apply the amplification of text
            applyAmplifiedText(createdElements);
            //We scroll to the button
            createFakeAnchor(args.masterBtnID);
        }
        ;
    }
}
let testArray = [
    [["OKTitle", "exclusive"], ["You are"]],
    [["NoTitle Yes", "admit"], ["You are In"]],
    [["OKTitle", "so on"], ["You are"]],
    [["NoTitle", "so on"], ["You are"]],
    [["OK We got Title", "you fit"], ["You are out"]],
];
function getUniqueValuesFromArray(array) {
    let tempSet = new Set();
    let tempArray = [];
    for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
            //This is a table not a string. We will add the title of the table to the set
            if (!tempSet.has(array[i][0][0])) {
                tempSet.add(array[i][0][0]);
                tempArray.push(array[i]);
            }
        }
        else {
            if (!tempSet.has(array[i])) {
                tempSet.add(array[i]);
                tempArray.push(array[i]);
            }
        }
    }
    return tempArray;
}
/**
 * Takes the title of a Word Table, and loops the prayersArray[][][] to check wether an element[0][0] (which reflects a table in the Word document from which the text was retrieved) matches the provided title. If found, it returns the wordTable as a string[][](each array element being a row of the Word table). If dosen't find, it returns 'undefined'
 * @param {string} tableTitle - The title of the table (without '&C=', i.e., we search for splitTitle(tableTitle)[0])  that we need to find in the button's prayersArray[][][].
 * @param {string[][][]} prayersArray - the Button that we need to search its prayersArray[][][] property for an element[][] having its [0][0] value equal the title of the Word Table
 * @param {equal?:boolean, startsWith?:boolean, endsWith?:boolean, includes?:boolean} Options - the matching options by which the function will search for the table: equal means the title of table in the array mush be exactly matching tableTitle, startsWith, means it must start with tableTitle, etc.
 * @returns {string[][] | void} - an array representing the Word Table if found or 'undefined' if not found
 */
function findTable(tableTitle, prayersArray, options = { equal: true }) {
    if (!prayersArray)
        prayersArray = getTablesArrayFromTitlePrefix(tableTitle);
    if (!prayersArray)
        return console.log("No prayers Array", tableTitle);
    let table;
    if (tableTitle.includes('/'))
        table = prayersArray.find((tbl) => tbl[0][0] && RegExp(tableTitle).test(splitTitle(tbl[0][0])[0]));
    else if (options.equal)
        table = prayersArray.find((tbl) => tbl[0][0] && splitTitle(tbl[0][0])[0] === tableTitle);
    else if (options.startsWith)
        table = prayersArray.find((tbl) => tbl[0][0] && splitTitle(tbl[0][0])[0].startsWith(tableTitle));
    else if (options.endsWith)
        table = prayersArray.find((tbl) => tbl[0][0] && splitTitle(tbl[0][0])[0].endsWith(tableTitle));
    else if (options.includes)
        table = prayersArray.find((tbl) => tbl[0][0] && splitTitle(tbl[0][0])[0].includes(tableTitle));
    if (!table)
        return console.log("no table with the provided title was found : ", tableTitle);
    return table;
}
/**
 * Shows the inlineBtnsDiv
 * @param {string} status - a string that is added as a dataset (data-status) to indicated the context in which the inlineBtns div is displayed (settings pannel, optional prayers, etc.)
 * @param {boolean} clear - indicates whether the content of the inlineBtns div should be cleared when shwoInlineBtns is called. Its value is set to 'false' by default
 */
function showExpandableBtnsPannel(status, clear = false) {
    if (clear)
        expandableBtnsPannel.innerHTML = "";
    //status !== 'settingsPanel' ? expandableBtnsPannel.style.backgroundImage = "url(./assets/PageBackgroundCross.jpg)" : expandableBtnsPannel.style.backgroundColor = 'grey';
    expandableBtnsPannel.style.backgroundSize = "10%";
    expandableBtnsPannel.style.backgroundRepeat = "repeat";
    /**
     * Appending an X button on the top right of inlineBtnsDiv
     */
    (function appendCloseBtn() {
        let divClose = document.createElement('div');
        let close = document.createElement("a");
        divClose.appendChild(close);
        close.innerText = String.fromCharCode(215);
        close.classList.add("closebtn");
        close.style.position = "fixed";
        close.style.top = "5px";
        close.style.right = "15px";
        close.addEventListener("click", (e) => {
            e.preventDefault;
            hideExpandableButtonsPannel();
        });
        expandableBtnsPannel.appendChild(close);
    })();
    expandableBtnsPannel.dataset.status = status; //giving the inlineBtnsDiv a data-status attribute
    expandableBtnsPannel.classList.remove(hidden);
}
/**
 * hides the inlineBtnsDiv by setting its zIndex to -1
 */
function hideExpandableButtonsPannel() {
    expandableBtnsPannel.dataset.status = "expandablePannel";
    expandableBtnsPannel.innerHTML = "";
    expandableBtnsPannel.classList.add(hidden);
}
/**
 * Shows the settings panel

 * @param {number} index - the index of the languages (0 = default language, 1 = foreign languages, 2 = Coptic language version)
 */
function showSettingsPanel(index) {
    if (index >= 0)
        return showAddOrRemoveLanguagesBtns(); //! since index can be = 0, if we check for !index, it will return false, that's why we check if index>=0 instead of !index
    showExpandableBtnsPannel("settingsPanel", true);
    let btn;
    //Show InstallPWA button//We are not calling it any more
    function installPWA() {
        btn = createSettingsBtn({
            tag: "button",
            role: "button",
            btnClass: "settingsBtn",
            innerText: "Install PWA",
            btnsContainer: expandableBtnsPannel,
            id: "InstallPWA",
            onClick: {
                event: "click",
                fun: async () => {
                    // Initialize deferredPrompt for use later to show browser install prompt.
                    let deferredPrompt;
                    window.addEventListener("beforeinstallprompt", (e) => {
                        // Prevent the mini-infobar from appearing on mobile
                        e.preventDefault();
                        // Stash the event so it can be triggered later.
                        deferredPrompt = e;
                    });
                    // Update UI notify the user they can install the PWA
                    (async () => {
                        window.dispatchEvent(new Event("beforeinstallprompt"));
                        deferredPrompt.prompt;
                        // Optionally, send analytics event that PWA install promo was shown.
                        console.log(`'beforeinstallprompt' event was fired.`);
                        // Wait for the user to respond to the prompt
                        const { outcome } = await deferredPrompt.userChoice;
                        // Optionally, send analytics event with outcome of user choice
                        console.log(`User response to the install prompt: ${outcome}`);
                        // We've used the prompt, and can't use it again, throw it away
                        deferredPrompt = null;
                    })();
                    function getPWADisplayMode() {
                        const isStandalone = window.matchMedia("(display-mode: standalone)").matches;
                        if (document.referrer.startsWith("android-app://")) {
                            return "twa";
                            //@ts-ignore
                        }
                        else if (navigator.standalone || isStandalone) {
                            return "standalone";
                        }
                        return "browser";
                    }
                },
            },
        });
    }
    //Appending date picker
    (function showDatePicker() {
        let datePicker = createSettingsBtn({
            innerText: '',
            tag: "input",
            btnsContainer: expandableBtnsPannel,
            id: "datePicker",
            type: "date",
            onClick: {
                event: "change",
                fun: () => changeDate(new Date(datePicker.value.toString())),
            },
        });
        if (!todayDate)
            return;
        datePicker.setAttribute("value", todayDate.toString());
        datePicker.setAttribute("min", "1900-01-01");
    })();
    (async function showNextAndPreviousCopticDayButtons() {
        let btnsContainer = createBtnsContainer("showNextCopticDate", {
            AR: "اليوم التالي أو السابق في التقويم القبطي",
            FR: "Aller au jour suivant ou précédant du calendrier copte",
            EN: "Move to the next or previous day of the Coptic calendar",
        });
        let btnLable = {
            AR: 'التالي',
            FR: 'Suivant',
            EN: 'Next',
        };
        createBtn(btnLable, 'nextDay', true);
        btnLable = {
            AR: 'السابق',
            FR: 'Précédent',
            EN: 'Previous',
        };
        createBtn(btnLable, 'previousDay', false);
        function createBtn(lable, id, next) {
            createSettingsBtn({
                tag: "button",
                role: "button",
                btnClass: "settingsBtn",
                innerText: lable[defaultLanguage],
                btnsContainer: btnsContainer,
                id: id,
                type: "submit",
                onClick: {
                    event: "click",
                    fun: () => changeDate(undefined, next, 1),
                },
            }).style.backgroundColor = "saddlebrown";
            ;
        }
        btnsContainer.style.gridTemplateColumns = setGridColumnsOrRowsNumber(btnsContainer);
    })();
    (function showChangeFontSizeBtn() {
        let btnsContainer = createBtnsContainer("changeFontSize", {
            AR: "تكبير أو تصغير حجم الأحرف",
            FR: "Changer la taille de police",
            EN: "Increase or decrease the fonts size",
        });
        let input = createSettingsBtn({
            innerText: '',
            tag: "input",
            btnsContainer: btnsContainer,
            id: "fontsSize",
        });
        let dataList = createDataList();
        if (!dataList)
            return console.log("dataList was not generated : ", dataList);
        input.type = "range";
        input.setAttribute("list", dataList.id);
        input.id = "inputFontSize";
        input.min = "0.3";
        input.max = "1.9";
        Number(localStorage.fontSize)
            ? (input.defaultValue = localStorage.fontSize)
            : (input.defaultValue = "0.5");
        input.step = "0.1";
        input.onchange = () => {
            console.log("input.value = " + input.value);
            setFontSize(input.value);
        };
        function createDataList() {
            let list = document.createElement("datalist");
            list.id = "fontSizes";
            list.classList.add(hidden);
            btnsContainer.appendChild(list);
            for (let i = 0.3; i < 2; i += 0.1) {
                let option = document.createElement("option");
                option.value = i.toString();
                list.appendChild(option);
            }
            return list;
        }
    })();
    //Appending Add or Remove language Buttons
    showAddOrRemoveLanguagesBtns();
    async function showAddOrRemoveLanguagesBtns() {
        let labels = [
            {
                AR: "اختر اللغة الأساسية (لغة الإعدادات)",
                FR: "Sélectionner la langue par défaut",
                EN: "Choose your Main Language (required)",
                Type: 'Main Language'
            },
            {
                AR: "اختر اللغة الأجنبية (اختياري)",
                FR: "Sélectionner une langue étrangère (optionnel)",
                EN: "Choose a foreign Language (optional)",
                Type: 'Foreign language'
            },
            {
                AR: "اختر نسخة النص القبطي (أحرف قبطية أو قبطي معرب )",
                FR: "Sélectionner les caractères d'affichage de la version copte (si disponible)",
                EN: "Choose the coptic language version",
                Type: 'The Coptic version'
            }
        ];
        if (index >= 0)
            return showLanguagesModal(); //! since index can be = 0, if we check for !index, it will return false, that's why we check if index>=0 instead of !index
        let btnsLangs = [
            ...nonCopticLanguages,
            ...copticLanguages.filter(lang => lang[0] !== 'CF')
        ];
        let defaultLangContainer = createBtnsContainer("defaultLanguage", labels[0]);
        let foreignLangContainer = createBtnsContainer("foreignLanguage", labels[1]);
        let copticLangContainer = createBtnsContainer("copticLanguage", labels[2]);
        addLangsBtns({
            btnsContainer: defaultLangContainer,
            fun: (lang) => setLanguage(lang, 0), //0 means that we are changing the element from which the default language is retrieved
            langsOptions: [btnsLangs[0], btnsLangs[1], btnsLangs[2]],
            index: 0,
        });
        addLangsBtns({
            btnsContainer: foreignLangContainer,
            fun: (lang) => setLanguage(lang, 1), //1 means that we are changing the element from which the foreign language is retrieved
            langsOptions: [btnsLangs[0], btnsLangs[1], btnsLangs[2]],
            index: 1,
        });
        addLangsBtns({
            btnsContainer: copticLangContainer,
            fun: (lang) => setLanguage(lang, 2), //2 means that we are changing the element from which the coptic version is retrieved
            langsOptions: [btnsLangs[3], btnsLangs[4]],
            index: 2,
        });
        /**
         * @param {string} lang - the language that the button changes when clicked
         * @param {number} index - the index of the language in the userLanguages array stored in the localStorage. This index indicated whether the language is the defaultLanguage (index=0) or the foreignLanguage (index=1), or the version of the Coptic text (index=2)
         */
        async function setLanguage(lang, index) {
            let userLanguages;
            if (localStorage.userLanguages)
                userLanguages = JSON.parse(localStorage.userLanguages);
            if (!userLanguages)
                userLanguages = [];
            if (index > 0 && userLanguages.indexOf(lang) === index)
                //If the language is already defined at the same index, we will set the element at the same index to undefined (i.e., we will desactivate the language and remove it from the list of userLanguages). We never set the default language (i.e. stored[0]) to undefined that's why we exclude the case where index = 0
                userLanguages[index] = undefined;
            else if (index === 0 && userLanguages.indexOf(lang) === index)
                return alert("You cannot not desactivate the default language. You can replace it by choosing another language");
            else if (userLanguages.indexOf(lang) === 0 && index === 1 && userLanguages[index]) {
                //If the language is already set as defaultLanguage (it is set at index 0), and we want to make it the foreign language (index = 1), we check if the value of index 1 (the index of the foreign language) is not undefined. If so, we make the foreign language default language and we replace it with lang
                userLanguages[0] = userLanguages[index];
                userLanguages[index] = lang;
            }
            else if (userLanguages.indexOf(lang) === 0 && index === 1 && !userLanguages[index])
                return alert("You must first replace the default language by another language before being able to set it as foreign language");
            else if (userLanguages.indexOf(lang) === 1 && index === 0) {
                //If the language is already set as foreignLanguage (it is set at index 1), and we want to make it the default language (index = 0). If so, we set the foreign language as undefined default language and we set the language as default language
                userLanguages[1] = undefined;
                userLanguages[index] = lang;
            }
            else if (!userLanguages.includes(lang))
                //If the array does not contain the language at any of its indexes, we add it at the index passed as argument
                userLanguages[index] = lang;
            defaultLanguage = userLanguages[0];
            foreingLanguage = userLanguages[1];
            copticLanguage = userLanguages[2];
            localStorage.userLanguages = JSON.stringify(userLanguages);
            console.log(localStorage.userLanguages);
            return userLanguages;
        }
        function addLangsBtns(args) {
            let newBtn;
            args.langsOptions.map((lang) => {
                newBtn = createSettingsBtn({
                    tag: "button",
                    role: "button",
                    btnClass: "settingsBtn",
                    innerText: lang[1],
                    btnsContainer: args.btnsContainer,
                    id: "userLang",
                    onClick: {
                        event: "click",
                        fun: () => {
                            args.fun(lang[0]);
                            newBtn.classList.toggle("langBtnAdd");
                            //We retrieve again the displayed text/prayers by recalling the last button clicked
                            if (containerDiv.children) {
                                //Only if a text is already displayed
                                showChildButtonsOrPrayers(lastClickedButton);
                                showSettingsPanel(); //we display the settings pannel again
                            }
                        },
                    },
                });
                if (JSON.parse(localStorage.userLanguages)[args.index] !== lang[0])
                    newBtn.classList.add("langBtnAdd"); //The language of the button is absent from userLanguages[], we will give the button the class 'langBtnAdd'
            });
            args.btnsContainer.style.gridTemplateColumns = setGridColumnsOrRowsNumber(args.btnsContainer, 3);
        }
        async function showLanguagesModal() {
            if (!defaultLanguage)
                defaultLanguage = 'EN'; //We do this in order for the container to select the English version of the label until the user chooses his prefered language
            let choices = [nonCopticLanguages, nonCopticLanguages, copticLanguages];
            let container = createBtnsContainer("modalContainer", labels[index], 'modalContainer');
            addLabel(index);
            document.getElementById('content').prepend(container);
            function addLabel(i) {
                if (!container)
                    return;
                let lable = document.createElement('h3');
                lable.innerText = labels[i][defaultLanguage];
                container.appendChild(lable);
            }
            ;
            return await showModal(index);
            async function showModal(i) {
                let choice = choices[i];
                if (i === 1)
                    choice = choice.filter(l => l[0] !== defaultLanguage);
                let newBtn;
                choice.forEach((lang) => {
                    newBtn = createSettingsBtn({
                        tag: "button",
                        role: "button",
                        btnClass: "settingsBtn",
                        innerText: lang[1],
                        btnsContainer: container,
                        id: "userLang",
                        onClick: { event: 'click', fun: () => onClick(lang) },
                    });
                });
                return defaultLanguage;
                async function onClick(lang) {
                    if (!confirm(lang[1] + ' will be set as your ' + labels[i].Type))
                        return;
                    await setLanguage(lang[0], i);
                    if (choices[i + 1]) {
                        container.innerHTML = '';
                        addLabel(i + 1);
                        showModal(i + 1);
                        showChildButtonsOrPrayers(btnMainMenu);
                    }
                    else
                        container.remove();
                }
                ;
            }
        }
    }
    (async function showExcludeActorButon() {
        let btnsContainer = createBtnsContainer("showOrHideActor", {
            AR: "إظهار أو إخفاء مردات الكاهن أو الشماس أو الشعب",
            FR: "Afficher ou cacher un acteur",
            EN: "Show or hide an actor",
        });
        let userActors = JSON.parse(localStorage.showActors);
        userActors.map((actor) => {
            if (['CommentText', 'NoActor'].includes(actor[0].EN))
                return; //CommentText will be handled at the same time by the button for 'Comments'
            btn = createSettingsBtn({
                tag: "button",
                role: "button",
                btnClass: "settingsBtn",
                innerText: actor[0][defaultLanguage],
                btnsContainer: btnsContainer,
                id: actor[0].EN,
                lang: actor[0].EN,
                onClick: {
                    event: "click",
                    fun: () => {
                        actor[1] = !actor[1]; //inversing the value of the boolean
                        btn.classList.toggle("langBtnAdd");
                        //changing the background color of the button to red by adding 'langBtnAdd' as a class
                        if (actor[0].EN === "Comments")
                            userActors.find((el) => el[0].EN === "CommentText")[1] = actor[1]; //setting the value of 'CommentText' same as 'Comment'
                        localStorage.showActors = JSON.stringify(userActors); //adding the new values to local storage
                        if (containerDiv.children) {
                            //Only if some prayers text is already displayed
                            showChildButtonsOrPrayers(lastClickedButton); //we re-click the last button to refresh the displayed text by adding or removing the actor according to the new setings chice made by the user.
                            showSettingsPanel(); //we display the settings pannel again
                        }
                    },
                },
            });
            if (!actor[1])
                btn.classList.add("langBtnAdd");
        });
        btnsContainer.style.gridTemplateColumns = setGridColumnsOrRowsNumber(btnsContainer, 5);
    })();
    (async function showDisplayModeBtns() {
        let btnsContainer = createBtnsContainer("changeDisplayMode", {
            AR: "اختر نظام العرض",
            FR: "Changer le mode d'affichage",
            EN: "Change the display mode",
        });
        expandableBtnsPannel.appendChild(btnsContainer);
        displayModes.map((mode) => {
            btn = createSettingsBtn({
                tag: "button",
                role: "button",
                btnClass: "settingsBtn",
                innerText: mode + " Display Mode",
                btnsContainer: btnsContainer,
                id: mode,
                onClick: {
                    event: "click",
                    fun: () => {
                        if (localStorage.displayMode !== mode) {
                            localStorage.displayMode = mode;
                            let userActors = JSON.parse(localStorage.showActors);
                            if (mode === displayModes[2] && localStorage.displayMode === mode)
                                //If mode = 'Priest Mode', we set the value of 'Diacon' in the 'showActors' localStorage to false in order to hide all the 'Diacon' response
                                userActors.find(actor => actor[0].EN === actors[1].EN)[1] = false;
                            else
                                userActors.find(actor => actor[0].EN === actors[1].EN)[1] = true;
                            localStorage.showActors = JSON.stringify(userActors);
                            Array.from(btnsContainer.children).map((btn) => {
                                btn.id !== localStorage.displayMode
                                    ? btn.classList.add("langBtnAdd")
                                    : btn.classList.remove("langBtnAdd");
                            });
                        }
                    },
                },
            });
            if (mode !== localStorage.displayMode) {
                btn.classList.add("langBtnAdd");
            }
        });
        btnsContainer.style.gridTemplateColumns = setGridColumnsOrRowsNumber(btnsContainer, 3);
    })();
    (async function showEditingModeBtn() {
        if (localStorage.editingMode != "true")
            return;
        let btnsContainer = createBtnsContainer("enterEditingMode", {
            AR: " تعديل النصوص",
            FR: "Activer le mode édition",
            EN: "Enter Editing Mode",
        });
        expandableBtnsPannel.appendChild(btnsContainer);
        let editingBtn = getEditModeButton();
        btn = createSettingsBtn({
            tag: "button",
            role: "button",
            btnClass: "settingsBtn",
            innerText: editingBtn.label[defaultLanguage],
            btnsContainer: btnsContainer,
            id: "editingMode" + localStorage.editingMode.toString(),
            onClick: {
                event: "click",
                fun: editingBtn.onClick,
            },
        });
        btnsContainer.style.gridTemplateColumns = setGridColumnsOrRowsNumber(btnsContainer, 3);
    })();
    //Appending colors keys for actors
    (async function addActorsKeys() {
        let btnsContainer = createBtnsContainer("actorsKeys", {
            AR: "مفاتيح الألوان",
            FR: "Clés des couleurs",
            EN: "Colors keys",
        });
        let userActors = JSON.parse(localStorage.showActors)
            .filter(actor => actor[1] === true && !['CommentText', 'NoActor'].includes(actor[0].EN)).map(actor => actor[0]);
        userActors.map((actor) => {
            let newBtn = createSettingsBtn({
                innerText: actor[defaultLanguage],
                tag: "button",
                btnClass: "colorbtn",
                btnsContainer: btnsContainer,
                id: actor.EN + "Color",
            });
        });
        btnsContainer.style.gridTemplateColumns = setGridColumnsOrRowsNumber(btnsContainer, 4);
    })();
    (async function addReloadPageBtn() {
        let btnsContainer = createBtnsContainer("enterEditingMode", {
            AR: "تحديث التطبيق",
            FR: "Mettre à jour l'application",
            EN: "Update App",
        });
        expandableBtnsPannel.appendChild(btnsContainer);
        let btnLable = {
            AR: 'تحديث',
            FR: 'Mettre à jour',
            EN: 'Update',
        };
        btn = createSettingsBtn({
            tag: "button",
            role: "button",
            btnClass: "updateBtn",
            innerText: btnLable[defaultLanguage],
            btnsContainer: btnsContainer,
            id: "updateApp",
            onClick: {
                event: "click",
                fun: () => location.reload(),
            },
        });
        btnsContainer.style.gridTemplateColumns = setGridColumnsOrRowsNumber(btnsContainer);
    })();
    closeSideBar(leftSideBar);
    function createBtnsContainer(id, labelText, cssClass = 'settingsBtnsContainer') {
        let btnsContainer = document.createElement("div");
        btnsContainer.id = id;
        btnsContainer.classList.add(cssClass);
        expandableBtnsPannel.appendChild(btnsContainer);
        let labelsDiv = document.createElement("div");
        labelsDiv.classList.add("settingsLabel");
        btnsContainer.insertAdjacentElement("beforebegin", labelsDiv);
        let label = document.createElement("h3");
        label.innerText = labelText[defaultLanguage];
        labelsDiv.appendChild(label);
        return btnsContainer;
    }
    function createSettingsBtn(args) {
        let btn = document.createElement(args.tag);
        btn.role = args.role || args.tag;
        if (args.innerText)
            btn.innerHTML = args.innerText;
        if (args.btnClass)
            btn.classList.add(args.btnClass);
        if (args.id)
            btn.id = args.id;
        if (args.lang)
            btn.lang = args.lang.toLowerCase();
        //@ts-ignore
        if (args.type && btn.nodeType)
            btn.type = args.type;
        //@ts-ignore
        if (args.size)
            btn.size = args.size;
        if (args.backgroundColor)
            btn.style.backgroundColor = args.backgroundColor;
        if (args.onClick) {
            btn.addEventListener(args.onClick.event, (e) => {
                e.preventDefault;
                args.onClick.fun();
            });
        }
        if (args.btnsContainer)
            args.btnsContainer.appendChild(btn);
        return btn;
    }
}
/**
 * Changes the value of the Css variable fSize on the '.Content' html element
 * @param {string} size - the size of the font
 */
function setFontSize(size) {
    if (!Number(size))
        return;
    let content = document.querySelector(".Content");
    content.style.setProperty("--fSize", size);
    localStorage.fontSize = size;
}
/**
 * Sets the number of columns of a "display-grid' html element based on the number of its children.
 * @param {HTMLElement} htmlContainer - the html element for which we want to set the number of columns based on the number of its children
 * @param {number} max - the maximum number of columns that if exceeded, the number will be automatically reduced to a value = reduce. Its default value is 3.
 * @param {number} reduce - the number of columns that will be retained if the number of columns resulting from the number of htmlContainer children is greater than "max"
 */
function setGridColumnsOrRowsNumber(htmlContainer, max, exact) {
    let units;
    units = htmlContainer.children.length;
    if (max && units > max)
        units = max;
    else if (exact)
        units = exact;
    return ((100 / units).toString() + "% ").repeat(units);
}
/**
 * Loops the tables (i.e., the string[][]) of a string[][][] and, for each row (string[]) of each table, it inserts a div adjacent to an html child element to containerDiv
 * @param {string[][][]} tables - an array of arrays, each array represents a table in the Word document from which the text was retrieved
 * @param {string[]} languages - the languages in which the text is available. This is usually the "languages" properety of the button who calls the function
 * @param {{beforeOrAfter:InsertPosition, el: HTMLElement}} position - the position at which the prayers will be inserted, adjacent to an html element (el) in the containerDiv
 * @returns {HTMLElement[]} - an array of all the html div elements created and appended to the containerDiv
 */
function insertPrayersAdjacentToExistingElement(args) {
    if (!args.tables)
        return;
    if (!args.container)
        args.container = containerDiv;
    return args.tables
        .map((table) => {
        if (!table || table.length < 1)
            return []; //We return an empty array in order to avoid having "void" elements included in the array that will be returned by the function
        return showPrayers({
            table: table,
            position: args.position,
            languages: args.languages || getLanguages(PrayersArraysKeys.find(array => table[0][0].startsWith(array[0]))[1]) || prayersLanguages,
            container: args.container,
            clearRightSideBar: false,
            clearContainerDiv: false,
        }) || []; //If showPrayers() returns "void", we replace it with an empty array in order to avoid having "void" elements included in the array that will be returned by the function
    });
}
/**
 * Inserts buttons each of which redirects to a specific part in a given mass

 * @param {Button[]} btns - an array of Button elements for each of which an html element will be created by createBtn() and appended to a newly created div. Each of the html buttons created will, when clicked
 * @param {InsertPosition} position - the position at which the div containing the created html elements for each button, will be inserted compared to the containerDiv child retrieved using the querySelector parameter
 * @param {string} btnsContainerID - the id of the div container to which the html buttons will be appended. This id may be needed to select the div after redirection
 */
async function insertRedirectionButtons(btns, position, btnsContainerID) {
    if (!position.beforeOrAfter)
        position.beforeOrAfter = "beforebegin";
    let div = document.createElement("div");
    div.id = btnsContainerID;
    div.classList.add(inlineBtnsContainerClass);
    btns.map((btn) => div.appendChild(createHtmlBtn({ btn: btn, btnsContainer: div, btnClass: btn.cssClass })));
    position.el.insertAdjacentElement(position.beforeOrAfter, div);
    div.style.gridTemplateColumns = setGridColumnsOrRowsNumber(div, 3);
}
/**
 * Just trying to figger out if there is a way to prompt the user for installing the app without waiting for the browser to spontaneously trigger the 'beforeinstallprompt' event
 */
function playingWithInstalation() {
    let beforeInstallFired;
    window.addEventListener("beforeinstallpromt", (e) => {
        e.preventDefault;
        beforeInstallFired = e;
        alert("beforeinstall fired");
    });
    //
    let btn = document.createElement("button");
    //@ts-ignore
    let before = new BeforeInstallPromptEvent("beforeInstallPrompt");
    btn.addEventListener("click", () => {
        before.trigger();
        before.prompt().then((r) => console.log("response = ", r));
        console.log(before.userChoice);
    });
    window.addEventListener(before, () => btn.click());
    //btn.click();
    alert("swipe right or click on the image to open the menu and start");
}
function populatePrayersArrays() {
    //We are populating subset arrays of PrayersArray in order to speed up the parsing of the prayers when the button is clicked
    if (PrayersArrayFR.length < 1)
        return console.log("PrayersArray is empty = ", PrayersArrayFR);
    PrayersArraysKeys
        .map(a => a[2]())
        .filter(a => a !== PrayersArrayFR)
        .forEach(a => a.length = 0); //We empty all the sub arrays of PrayersArrayFR
    PrayersArrayFR
        .forEach((table) => {
        if (table.length < 1 || table[0].length < 1)
            return;
        let array = PrayersArraysKeys.find(a => table[0][0].startsWith(a[0]));
        if (!array)
            return;
        array[2]().push(table);
    });
}
/**
 * Returns the string[] resulting from title.split('&C=')
 * @param {string} title - the string that we need to split
 */
function splitTitle(title) {
    if (!title)
        return [];
    if (!title.includes("&C="))
        return [title, ""];
    return title.split("&C=");
}
/**
 * Hides the current slide, and unhides the next or previous slide based on the value of 'next'
 * @param {boolean} next - If true, the next slide is displayed. If false, the previous one is displayed. Its default value is true.
 * @returns
 */
function showNextOrPreviousSildeInPresentationMode(next = true) {
    if (localStorage.displayMode !== displayModes[1])
        return;
    let children = Array.from(containerDiv.querySelectorAll("div[data-same-slide]"));
    let currentSlide = containerDiv.querySelector(".Slide");
    if (!currentSlide)
        return showOrHideSlide(true, children[0].dataset.sameSlide); //If not slide is already displayed, we display the slide built from the 1st data-same-slide child of containerDiv, and return
    let sameSlide = children.filter((div) => div.dataset.sameSlide === currentSlide.id); //If a slide is already diplayed, we retrieve all the containerDiv children having the same data-same-slide attribute as the data-same-slide value stored in the currentSlide.id.
    if (sameSlide.length < 1)
        return console.log("We could not find divs having as data-same-slide the id of the currently displayed Slide"); //Noramly, this should not occur
    let nextDiv;
    if (next)
        selectNextDiv(sameSlide[sameSlide.length - 1]); //We set nextSlide by passing the last element of sameSlide as argument
    if (!next)
        selectNextDiv(sameSlide[0]); //We set nextSlide by passing the 1st element of sameSlide as argument
    function selectNextDiv(div) {
        if (!div)
            return console.log("slide is not defined"); //This would occur if nextSlide was set to undefined
        if (next && div.nextElementSibling)
            nextDiv = div.nextElementSibling;
        else if (next &&
            div.parentElement &&
            div.parentElement.classList.contains("Expandable"))
            nextDiv = div.parentElement.nextElementSibling;
        else if (!next && div.previousElementSibling)
            nextDiv = div.previousElementSibling;
        else if (!next &&
            div.parentElement &&
            div.parentElement.classList.contains("Expandable"))
            nextDiv = div.parentElement.previousElementSibling;
        else
            nextDiv = undefined; //!CAUTION: we must set nextSlide to undefined if none of the above cases applies. Otherwise the function will loop infintely
        if (nextDiv && exclude(nextDiv, currentSlide.id))
            selectNextDiv(nextDiv);
    }
    if (!nextDiv)
        return;
    showOrHideSlide(false); //We remove the currently displayed slide
    showOrHideSlide(true, nextDiv.dataset.sameSlide); //We show the new slide
    function exclude(div, currentDataSameSlide) {
        if (!div.dataset.sameSlide ||
            div.dataset.sameSlide === currentDataSameSlide)
            return true;
    }
}
function addKeyDownListnerToElement(htmlRow, eventName, direction) {
    if (localStorage.displayMode !== displayModes[1])
        return;
    if (!direction)
        htmlRow.addEventListener(eventName, (event) => goToNextOrPreviousSlide(event, direction));
}
function goToNextOrPreviousSlide(event, direction) {
    if (!event && !direction)
        return;
    let code;
    if (event)
        code = event.code;
    else if (direction === "up")
        code = "PageUp"; //next slide
    else if (direction === "down")
        code = "PageDown"; //previous slide
    if (code === "ArrowDown" || code === "PageDown" || code === "ArrowRight")
        showNextOrPreviousSildeInPresentationMode(true); //next slide
    else if (code === "ArrowUp" || code === "PageUp" || code === "ArrowLeft")
        showNextOrPreviousSildeInPresentationMode(false); //previous slide
}
/**
 * Returns a string representing the query selector for a div element having a data-root attribute equal to root
 * @param {string} root - the data-root value we want to build a query selector for retrieving the elements with the same value
 * @param {boolean} isLike - if set to true, the function will return a query selector for an element having a data-root containing the root argument (as opposed to a root exactly matching the root argument)
 * @returns
 */
function getDataRootSelector(root, isLike = false, htmlTag = "div") {
    if (isLike)
        return htmlTag + '[data-root*="' + root + '"]';
    else
        return htmlTag + '[data-root="' + root + '"]';
}
/**
 * Replaces the musical eight note sign with a span that allows to give it a class and hence give it a color
 * @param {number} code - the Char code of the eigth note (or any other character that we want to replace with a span with the same css class)
 * @returns
 */
async function replaceMusicalNoteSign(container) {
    if (!container)
        container = Array.from(containerDiv.querySelectorAll("p.Diacon"));
    if (container.length === 0)
        return;
    let notes = [
        String.fromCharCode(eighthNoteCode),
        String.fromCharCode(beamedEighthNoteCode),
    ];
    notes.forEach((note) => {
        container.forEach((p) => {
            if (!p.innerText.includes(note))
                return;
            p.innerHTML = p.innerHTML.replaceAll(note, '<span class="musicalNote">' + note + "</span>");
        });
    });
}
/**
 * Converts an group of html div elements each representing a row in the same table (i.e., the group of divs reprsents the entire table), into a string[][] each element represents a row of the table, and each element of each row, represents the text in a given cell of this row
 * @param {HTMLDivElement} htmlRows - the group of html div elements displayed as children of containerDiv, each representing a row of a table, and collectively representing the entire table
 *@returns {string[][]} - an array representing the entire table where each element represents a row of the table (i.e., corresponding to a div element)
 */
function convertHtmlDivElementsIntoArrayTable(htmlRows) {
    let table = [], title = htmlRows[0].title;
    let text;
    htmlRows.forEach((htmlRow) => {
        if (!htmlRow.title || !htmlRow.dataset.root)
            return alert("the row dosen't have title");
        if (htmlRow.dataset.isReference)
            return table.push(Array.from(htmlRow.querySelectorAll('p')).map((p) => Prefix.readingRef + p.innerText));
        table.push(Array.from(htmlRow.children)
            .map((p) => {
            text = p.innerText; //!This must be the innerText not the textContent nor the innerHTML
            //We replace the quotes in the innerHTML of the paragraph, but we will return the innerText of the paragraph in order to avoid getting <br> or any other html tags in the returned text
            text = replaceHtmlQuotes(text, p.lang); //When the text is displayed, the <quote> elment is replaced with the quotes symbol of the relevant language. We replace the quotes with the html <quote> element
            return text;
        }));
        let firstElement = title;
        if (htmlRows.indexOf(htmlRow) === 0)
            firstElement = title; //The entire title including the "&C="
        else if (htmlRow.dataset.isPlaceHolder)
            firstElement = Prefix.placeHolder;
        else if (htmlRow.dataset.isPrefixSame || [splitTitle(htmlRow.title)[0], splitTitle(htmlRow.dataset.root)[0]].includes(splitTitle(title)[0]))
            firstElement = Prefix.same + '&C=' + splitTitle(htmlRow.title)[1];
        table[table.length - 1].unshift(firstElement); //We add the title string element to the last row of the table that we have just pushed. 
    });
    return table;
}
//compareArrays(ReadingsArrays.SynaxariumArray, SynaxariumArray2);
function compareArrays(sourceArray, editedArray) {
    let table, tblRow;
    for (let i = 0; i < sourceArray.length; i++) {
        table = sourceArray[i];
        for (let row = 0; row < table.length; row++) {
            tblRow = table[row];
            for (let text = 0; text < tblRow.length; text++)
                if (tblRow[text] !== editedArray[i][row][text]) {
                    console.log("different rows: \n", sourceArray[i][row][text], "\n\n", editedArray[i][row][text], "\n\n");
                }
        }
        if (sourceArray[i][0][0] !== editedArray[i][0][0]) {
            console.log("Original = ", sourceArray[i], " and new = ", editedArray);
        }
        else {
            console.log("SameTitle");
        }
    }
    if (sourceArray.length !== editedArray.length) {
        console.log("sourceArray length = ", sourceArray.length, " editedArray length = ", editedArray.length);
    }
    else {
        console.log("source Array length = edited Array length = ", sourceArray.length);
    }
}
/**
 * This function was created in a doc review project to transform captial letters in names into smal letters. It is not used in the app. Will remove it later elsewhere
 */
async function firstLetter() {
    if (!document.getElementById('btnFirstLetter'))
        await createBtn();
    let st = prompt('Provide the names of the lawyers');
    if (!st)
        return;
    st =
        st
            .replaceAll(',', ';')
            .replaceAll(' ;', ';')
            .replaceAll(' and ', '; ');
    let names = st.split('; ');
    if (!names || names.length < 1)
        return alert('We could not retrive the names from the string');
    alert(lowerNames());
    firstLetter();
    function lowerNames() {
        return names
            .map(name => name.split(' ')
            .map(word => returnWord(word)))
            .map(array => array.join(' '))
            .join('; ');
    }
    ;
    function returnWord(w) {
        if (!w)
            return;
        return w[0].toUpperCase()
            + w.toLowerCase().slice(1, w.length);
    }
    async function createBtn() {
        let btn = document.createElement('div');
        btn.id = 'btnFirstLetter';
        btn.addEventListener('click', firstLetter);
        btn.style.backgroundColor = 'red';
        btn.style.height = '20px';
        btn.style.width = '200px';
        btn.innerText = 'Get Small Characters';
        document.body.prepend(btn);
    }
    ;
}
/**
 * Checks whether the html element passed as argument, has either the class 'Title', or 'SubTitle' and returns true if this is the case
 * @param {HTMLElement} htmlRow - the hmtl element that we want to check whether it has 'Title' or 'SubTitle' in its classList
 * @return {boolean} returns true if the html element has any of the titel classes
 */
function isTitlesContainer(htmlRow) {
    return hasClass(htmlRow, ["Title", "SubTitle"]);
}
/**
 * Checks whether the html element passed as argument, has any of the classes passed in the classList[] array. It returns true if this is the case
 * @param {HTMLElement} htmlRow - the hmtl element that we want to check whether it has 'Title' or 'SubTitle' in its classList
 * @param {string[]} classList - a list of the classes that we want to check if the html element includes in its classList
 * @return {boolean} returns true if the html element has any of the titel classes
 */
function hasClass(htmlRow, classList) {
    if (!htmlRow)
        return;
    return (classList.filter((className) => htmlRow.classList.contains(className))
        .length > 0);
}
function isInlineBtnsContainer(htmlRow) {
    if (htmlRow && htmlRow.classList.contains(inlineBtnsContainerClass))
        return true;
    else
        return false;
}
/**
 * Checks if the html element passed to it as an argument has 'Comments' or 'CommentText' in its classList
 * @param {HTMLDivElement} htmlRow - the html element that we want to check if it has any of the classes related to comments
 */
function isCommentContainer(htmlRow) {
    return hasClass(htmlRow, ["Comments", "CommentText"]);
}
/**
 * Hides all the titles shortcuts for the the html div elements included in the container, from the right side bar
 * @param {HTMLElement} container - the html element containing the title divs which we want to hide their titles shortcuts from the right side Bar
 */
function hideOrShowAllTitlesInAContainer(container, hide = true) {
    //We hide all the titles from the right side Bar
    Array.from(container.children)
        .filter((child) => isTitlesContainer(child))
        .forEach((child) => hideOrShowTitle(child.dataset.group, hide));
}
/**
 * Hides a title shortcut from the right side bar based on the id of the html element passed to it
 * @param {strig} titleGroup - the data-group of the title/titles we want to show or hide
 * @param {boolean} hide - If true, the title will be hidden. If false, the title will be displayed
 */
function hideOrShowTitle(titleGroup, hide) {
    let titles = Array.from(sideBarTitlesContainer.children)
        .filter((title) => title.dataset.group === titleGroup);
    if (titles.length < 1)
        return;
    titles
        .forEach(title => {
        if (hide && !title.classList.contains(hidden))
            title.classList.add(hidden);
        if (!hide && title.classList.contains(hidden))
            title.classList.remove(hidden);
    });
}
/**
 * Sends an XMLHttpRequest
 * @param  {string} apiURL - the API adress to which the request will be sent
 * @param responseDoc
 * @param {string} method - the request method ('GET', 'PUT', 'POST' etc., ) its default value is 'GET'
 */
function sendHttpRequest_(apiURL, method = "GET") {
    let request = new XMLHttpRequest();
    request.open(method, apiURL);
    try {
        request.send();
    }
    catch (error) {
        console.log(error);
    }
    request.onload = async () => {
        if (request.status === 200) {
            return new DOMParser().parseFromString(request.response, "text/html");
        }
        else {
            console.log("error status text = ", request.statusText);
            return request.statusText;
        }
    };
}
function ReduceArrays(args) {
    let array = eval(args.arrayName);
    loopTables(array, args.rowFun, args.tblFun);
    console.log(array);
    exportToJSFile(processArrayTextForJsFile(args.arrayName, array), args.arrayName);
    function loopTables(array, rowFun, tblFun) {
        array.forEach((tbl) => {
            if (tblFun)
                tblFun(tbl);
            loopRows(tbl, rowFun, splitTitle(tbl[0][0])[0]);
        });
    }
    function loopRows(tbl, rowFun, tblTitle) {
        tbl.forEach((row) => rowFun(tbl, row, tblTitle));
    }
}
function shortenRowsTitles(tbl, row, tblTitle) {
    //return;
    if (tbl.indexOf(row) === 0)
        return;
    let rowTitle = splitTitle(row[0])[0];
    if (!rowTitle.startsWith(Prefix.placeHolder) && rowTitle !== tblTitle)
        console.log("row[0] = ", rowTitle, "tblTitle = ", tblTitle);
    else if (rowTitle === tblTitle)
        row[0] = (Prefix.same + "&" + splitTitle(row[0])[1]).replace("&", "&C=");
}
/**
 * This is a function that tests the scenario of replacing the text of a given language in all the arrays with the corresponding text in another language. It aims at testing the extendablitiy of the project to other languages
 */
async function testReplaceLanguageText() {
    let en = 'Lorem ipsum dolor sit amet. Est itaque incidunt ex adipisci consequatur est libero eius eos laboriosam odit. Quo quas facere cum illum dolorem ut voluptate provident ea minima exercitationem ad aspernatur explicabo est internos quia vel pariatur voluptatem? Qui atque aliquam qui numquam voluptatem et recusandae architecto qui sequi exercitationem et enim ipsam. Ea enim omnis non itaque exercitationem sit alias ullam et internos quod? Eos aperiam laboriosam ut dolorum voluptatem nam velit provident.';
    let prefixes = [
        Prefix.prayersArray,
        Prefix.gospelMorning,
        Prefix.gospelMass,
        Prefix.gospelNight,
        Prefix.gospelVespers,
        Prefix.Catholicon,
        Prefix.praxis,
        Prefix.prophecies,
        Prefix.stPaul,
        Prefix.synaxarium
    ];
    let languages, array, keys, newArray, index;
    let lorem; //This is the array that contains the english version of our text
    prefixes.forEach(prefix => {
        keys = PrayersArraysKeys.find(array => array[0] === prefix);
        languages = getLanguages(keys[1]); //The languages[] of the array
        array = keys[2]();
        lorem = [];
        array.forEach(table => {
            lorem.push([[table[0][0]]]);
            table.forEach(row => lorem[lorem.length - 1].push([en]));
        }); //For each table in array, we add a table in lorem having as its first element a string[] row containing the title of the table. We then add a new row for each row in the table and push the English text to it.
        newArray = structuredClone(array); //This is a copy to work with
        newArray.forEach(table => {
            table
                .filter(row => row[0] !== Prefix.placeHolder)
                .forEach(row => {
                row[0].endsWith('&C=Comments')
                    ? index = 1
                    : index = languages.indexOf('FR') + 1;
                row[index] = lorem[newArray.indexOf(table)][table.indexOf(row) + 1][0];
            });
        });
        console.log(newArray);
    });
}
/**
 * This function is part of an alternative idea consisting of working with an array of html elements instead of an array of text. The idea is to accelerate the lodding of the page by avoiding the creation of divs and paragraphs. The function retruns a string containg the a paragraph element for each text element in each row. This function is par
 */
async function createHtmlArray() {
    if (!confirm('Do you want to create an html elements array?'))
        return;
    var PrayersArrayHtml = await buildArray();
    console.log('PrayersArrayHtml = ', PrayersArrayHtml);
    testRetrieveTables();
    async function buildArray() {
        let arrayName = 'PrayersArrayFR';
        let array = eval(arrayName);
        let newArray = [];
        let newTable;
        let newRow;
        let languages = getLanguages(arrayName);
        let langs, className, dataRoot;
        array.forEach(table => {
            newArray.push([]); //Adding a table array
            newTable = newArray[newArray.length - 1];
            dataRoot = splitTitle(table[0][0])[0];
            newTable.push([dataRoot]); //Adding a row to the table array including the table title
            table.forEach(row => {
                langs = languages;
                newTable.push([]); //Adding a row to the table array
                newRow = newTable[newTable.length - 1];
                className = splitTitle(row[0])[1]; //Retrieving the class of the row
                if (row[0] === Prefix.placeHolder)
                    className = 'PlaceHolder';
                if (!className)
                    className = 'NoActor';
                if (['Comments'].includes(className))
                    langs = ['FR', 'AR'];
                let div = getDivInnerHtml(); //Builiding a div container for the row
                let index = 0;
                newRow[0] =
                    div + processElements(row).join(' ') +
                        '</div>';
            });
            function processElements(row) {
                let text = [];
                for (let i = 1; i < row.length; i++) {
                    text.push(getParagraphInnerHtml(row[i], langs[i - 1]) || '');
                }
                return text;
            }
            function getParagraphInnerHtml(element, lang) {
                let p = '<p class="' + lang + '" ' +
                    'data-root="' + dataRoot + '" ' +
                    'lang="' + lang.toLowerCase() + '" >' +
                    element + "</p>";
                return p;
            }
            function getDivInnerHtml() {
                let div = '<div class="Row ' + className + '" ' +
                    'data-root="' + dataRoot + '" ' +
                    'role="button">';
                return div;
            }
        });
        return newArray;
    }
    async function testRetrieveTables() {
        if (!confirm('Do you want to test the array?'))
            return;
        let now = new Date().getTime();
        let docFrag = new DocumentFragment();
        let tablesTitles = [];
        [Prefix.psalmody, Prefix.communion, Prefix.bookOfHours, Prefix.massCommon, Prefix.massStBasil]
            .forEach(prefix => {
            PrayersArrayFR.filter(table => splitTitle(table[0][0])[0].startsWith(prefix))
                .forEach(tbl => tablesTitles.push(splitTitle(tbl[0][0])[0]));
        });
        if (confirm('Do you want to test as BUTTON')) {
            let btn = new Button({
                btnID: 'TestBtn',
                docFragment: docFrag,
                prayersSequence: tablesTitles,
                languages: prayersLanguages,
                label: { AR: '', FR: '' },
                showPrayers: true,
            });
            await showChildButtonsOrPrayers(btn, true);
            return alert((new Date().getTime() - now).toString());
        }
        (async function testHtml() {
            let div = document.createElement('div');
            docFrag.appendChild(div);
            containerDiv.innerHTML = '';
            let title, tbl, userLangs = JSON.parse(localStorage.userLanguages), actors = JSON.parse(localStorage.showActors).filter(el => el[1] === true).map(el => el[0].EN);
            let innerHTML = tablesTitles.map(title => PrayersArrayHtml.find(table => splitTitle(table[0][0])[0] === title))
                .map(table => retrieveRowsHTML(table)).join(' ');
            div.innerHTML = innerHTML;
            actors.push('Row', 'Title', 'SubTitle');
            Array.from(div.querySelectorAll('div'))
                .forEach(div => {
                if (Array.from(div.classList)
                    .map(c => actors.includes(c))
                    .includes(false))
                    div.remove();
            });
            Array.from(div.querySelectorAll('p')).forEach(parag => {
                if (!userLangs.includes(parag.lang.toUpperCase()) || !parag.innerText)
                    parag.remove();
            });
            await setCSS(Array.from(div.children));
            containerDiv.appendChild(docFrag);
            return alert((new Date().getTime() - now).toString());
            function retrieveRowsHTML(table) {
                if (!table)
                    return '';
                let html = table
                    .filter(row => table.indexOf(row) > 0)
                    .map(row => {
                    if (!row[0].includes('PlaceHolder'))
                        return row[0];
                    title = row[0].split('>')[2];
                    title = title.split('</')[0];
                    tbl = PrayersArrayHtml.find(table => table[0][0].includes(title));
                    return retrieveRowsHTML(tbl);
                })
                    .join(' ');
                return html;
            }
            ;
        })();
    }
    ;
    let GN = structuredClone(ReadingsArrays.GospelNightArrayFR);
    let newArray = [];
    newArray.push(...GN.filter(table => table[0][0].startsWith(Prefix.gospelNight)));
}
/**
 * Replaces the titles of each row with Prefix.same
 */
function prefixSame(Array) {
    Array.forEach(table => {
        table.forEach(row => {
            if (table.indexOf(row) === 0)
                return;
            if (splitTitle(row[0])[0] === splitTitle(table[0][0])[0])
                table[table.indexOf(row)][0] = Prefix.same + '&C=' + splitTitle(row[0])[1];
        });
    });
    console.log(Array);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL21haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxtQkFBbUIsR0FBZSxzQkFBc0IsRUFBRSxDQUFDO0FBRWpFLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxRQUFRLENBQUMsQ0FBQztBQUd4RDs7R0FFRztBQUNILEtBQUssVUFBVSxRQUFRO0lBQ3JCLElBQUksWUFBWSxDQUFDLFFBQVE7UUFBRSxXQUFXLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBRTlELGlCQUFpQixFQUFFLENBQUM7SUFDcEIsSUFBSSxZQUFZLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDOUIsSUFBSSxPQUFPLEdBQUcsSUFBSSxJQUFJLEVBQUUsRUFDdEIsWUFBWSxHQUFHLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLHlEQUF5RDtRQUN2SCx5QkFBeUI7UUFDekIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUM7WUFDdEMsS0FBSyxDQUNILG9EQUFvRDtnQkFDcEQsWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsRUFBRTtnQkFDakMsR0FBRztnQkFDSCxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUU7Z0JBQ3hDLEdBQUc7Z0JBQ0gsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsRUFBRTtnQkFDckMsaUdBQWlHLENBQ2xHLENBQUM7WUFDRixZQUFZLENBQUMsUUFBUSxDQUNuQixPQUFPLENBQUMsUUFBUSxFQUFFLEVBQ2xCLE9BQU8sQ0FBQyxVQUFVLEVBQUUsRUFDcEIsT0FBTyxDQUFDLFVBQVUsRUFBRSxFQUNwQixPQUFPLENBQUMsZUFBZSxFQUFFLENBQzFCLENBQUMsQ0FBQyw0REFBNEQ7WUFDL0QsY0FBYyxD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TTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07U0FDUDtRQUNEO1lBQ0UsTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1NBQ1A7UUFDRDtZQUNFLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1NBQ1A7UUFDRDtZQUNFLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtTQUNQO1FBQ0Q7WUFDRSxNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1NBQ1A7UUFDRCxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUM7UUFDeEMsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDO1FBQ3hDLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQztRQUNoQjtZQUNFLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07U0FDUDtRQUNEO1lBQ0UsTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtTQUNQO1FBQ0QsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDO1FBQ2hCO1lBQ0UsTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtTQUNQO1FBQ0Q7WUFDRSxNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1NBQ1A7UUFDRCxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDO1FBQ3hCO1lBQ0UsTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtTQUNQO1FBQ0QsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDO1FBQ3hDLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQztRQUNoQixDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUM7UUFDaEIsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDO1FBQ2hCLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQztRQUNoQixDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUM7UUFDaEI7WUFDRSxNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1NBQ1A7UUFDRCxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDO1FBQ3hCLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUM7UUFDaEQsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQztRQUN4QjtZQUNFLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07U0FDUDtRQUNEO1lBQ0UsTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07U0FDUDtRQUNELENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDO1FBQ2hDLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUM7UUFDeEI7WUFDRSxNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtTQUNQO1FBQ0QsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDO1FBQ2hCLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUM7UUFDeEUsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQztRQUN4RSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUM7UUFDaEIsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUM7UUFDeEQsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDO1FBQ3hDLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQztRQUNoQixDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUM7UUFDaEUsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDO1FBQ2hFO1lBQ0UsTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFD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