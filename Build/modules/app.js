document.addEventListener("DOMContentLoaded", startApp);
const Bibles = { AR: [undefined, undefined], FR: [undefined, undefined], EN: [undefined, undefined], COP: [undefined, undefined] };
const lastClickedButton = undefined;
async function startApp() {
    if (!defaultLanguage)
        displaySettingsPanel(true);
    if (localStorage.fontSize)
        setFontSize(localStorage.fontSize);
    DetectFingerSwipe();
    await setDates();
    (function loadTextScripts() {
        //! We must load the text scripts after the dates were set and the 'giaki' variable was defined
        let base = "./Build/modules/Declare";
        [
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
        ].map((name) => loadScript(base, name)); //!We need to return in order to halt the code until all the scripts are loaded
        if (defaultLanguage)
            loadBible(true);
    })();
    addKeyDownListnerToElement(document, "keydown", undefined);
    displayChildButtonsOrPrayers(Btn.MainMenu); //!Caution: btnMain must be displayed after the dates and the Season have been set. Otherwise, btn Psalmody will not change its title
    //  document.getElementById('homeImg').addEventListener('dblclick', createHtmlArray);
    alert(version);
    (async function populateBtnsHtml() {
        return;
        for (let b of [Btn.MassStBasil, Btn.IncenseMorning, Btn.MassUnBaptised, ...Btn.Psalmody.onClick()]) {
            await displayChildButtonsOrPrayers(b, false, false);
        }
    })();
    function setDates() {
        let selectedDate;
        if (localStorage.selectedDate)
            selectedDate = new Date(Number(localStorage.selectedDate));
        if (checkIfDateIsToday(selectedDate))
            return setCopticDates();
        setCopticDates(selectedDate);
        alert("WARNING ! The date is manually set by the user to " +
            selectedDate.getDate().toString() +
            "/" +
            (selectedDate.getMonth() + 1).toString() +
            "/" +
            selectedDate.getFullYear().toString() +
            ". This choice will not kept. If you want the current date, you have to change the date manually");
    }
    ;
}
/**
 * Takes a Button and, depending on its properties will do the following: if the button has children[] buttons, it will create an html element in the left side bar for each child; if the button has inlineBtns[], it will create an html element in the main page for each inlineButton; if the button has prayers[] and prayersArray, and languages, it will look in the prayersArray for each prayer in the prayers[], and if found, will create an html element in the main page showing the text of this element. It will only do so for the languages included in the usersLanguages.
 * @param {Button} btn - the button that the function will process according to its properties (children[], inlineBtns[], prayers[], onClick(), etc.)
 * @param {boolean} clear - whether to clear or not the text already displayed in the main page
 * @param {boolean} show - if true (which is the default value if omitted), the html elements created to show the prayers associated with the button, will be displayed in containerDiv. If false, it will not be displayed and the function will set the button.html property to an array containing the html div elements created from the button's prayersSequence
 * @returns
 */
async function displayChildButtonsOrPrayers(btn, clear = true, show = true) {
    if (!btn)
        return;
    let container = btn.docFragment || containerDiv;
    hideExpandableButtonsPannel();
    if (btn.html?.length > 0)
        return await showPrayersAndChildren();
    if (clear && !containerDiv.dataset.editingMode) {
        //If we are in the "Editing Mode" We do not clear the containerDiv at this stage 
        expandableBtnsPannel.innerHTML = "";
        containerDiv.style.gridTemplateColumns = "100%";
    }
    if (btn.onClick)
        await btn.onClick();
    (function processPrayersSequence() {
        if (!btn.prayersSequence)
            return showBtnsOnMainPage(btn);
        if (containerDiv.dataset.editingMode)
            return showPrayersInEditingMode();
        showPrayers({
            prayersSequence: btn.prayersSequence,
            container: container,
            languages: btn.languages,
            clearContainerDiv: clear,
            clearRightSideBar: clear,
            position: container,
        });
        async function showPrayersInEditingMode() {
            if (!btn.prayersSequence)
                return;
            if (containerDiv.children.length > 0)
                saveModifiedArray({ exportToFile: true, exportToStorage: true }); //We save what is shown in the containerDiv
            let array;
            btn.prayersSequence
                .forEach((title) => {
                if (!title.includes("&D="))
                    return;
                array = getArrayFromPrefix(title);
                if (!array)
                    return console.log("tablesArray is undefined");
                showTables({
                    tablesArray: [findTable(title, array, { equal: true })],
                    languages: getLanguages(title),
                    position: container,
                    container: container,
                    clear: false,
                });
            });
        }
        ;
    })();
    if (btn.afterShowPrayers)
        await btn.afterShowPrayers();
    (function formatContainerCSS() {
        let children = Array.from(container.querySelectorAll("div.Row"));
        setCSS(children); //!Important : setCSSGridTemplate() MUST be called after btn.afterShowPrayres() in order to set the CSS for all the elements that btn.afterShowPrayers() might insert
    })();
    await showPrayersAndChildren();
    async function showPrayersAndChildren() {
        if (!show)
            return btn.html = Array.from(container.children);
        if (btn.html?.length > 0)
            btn.html.forEach(el => container.append(el));
        (function showBtnChildren() {
            //!CAUTION, this must come after btn.onClick() is called because some buttons are not initiated with children, but their children are added on the fly when their onClick() method  is called
            if (!btn.children || btn.children.length < 1)
                return;
            sideBarBtnsContainer.innerHTML = "";
            btn.children
                .forEach((childBtn) => {
                if (!childBtn)
                    return;
                //for each child button that will be created, we set btn as its parent in case we need to use this property on the button
                if (btn !== Btn.GoToPreviousMenu)
                    childBtn.parentBtn = btn;
                //We create the html element reprsenting the childBtn and append it to btnsDiv
                createHtmlBtn({
                    btn: childBtn,
                    btnsContainer: sideBarBtnsContainer,
                });
            });
            appendGoBackAndGoToMainButtons(btn, sideBarBtnsContainer, btn.cssClass, Btn.GoToPreviousMenu, Btn.MainMenu);
            if (btn === Btn.MainMenu)
                addSettingsButton();
        })();
        let titles = Array.from(container.children)
            .filter(div => isTitlesContainer(div));
        if (titles.length > 1)
            showTitlesInRightSideBar(titles); //We don't show the titles if there is only 1 title
        if (container !== containerDiv)
            containerDiv.appendChild(container);
        if (localStorage.displayMode === displayModes[1])
            await showSlidesInPresentationMode();
    }
    ;
    function showBtnsOnMainPage(btn) {
        if (!btn.children || btn.children.length < 1)
            return;
        if (leftSideBar.classList.contains("extended"))
            return; //If the left side bar is not hidden, we do not show the buttons on the main page because it means that the user is using the buttons in the side bar and doesn't need to navigate using the btns in the main page
        containerDiv.innerHTML = "";
        let btnsDiv = createBtnsDiv();
        let images = [
            "url(./assets/Btn.MassBackground.jpg)",
            "url(./assets/Btn.MassBackground.jpg)",
            "url(./assets/Btn.MassBackground.jpg)",
            "url(./assets/Btn.MassBackground.jpg)",
            "url(./assets/Btn.MassBackground.jpg)",
            "url(./assets/Btn.MassBackground.jpg)",
            "url(./assets/Btn.IncenseBackground.jpg)",
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
            if (btn !== Btn.GoToPreviousMenu)
                childBtn.parentBtn = btn;
            if (!childBtn.backGroundImage && btn.backGroundImage)
                childBtn.backGroundImage = btn.backGroundImage;
            if (!childBtn.backGroundImage)
                childBtn.backGroundImage = images[btn.children.indexOf(childBtn)];
            createMainPageButton(childBtn); //We create an HTML button 
        });
        appendGoBackAndGoToMainButtons(btn, btnsDiv, cssClass, Btn.GoToPreviousMenu, Btn.MainMenu); //We append the buttons then we add the background image for each button
        btnsDiv.style.gridTemplateColumns = setGridColumnsOrRowsNumber(btnsDiv, 3); //!Caution: this must come after the buttons have been appended to btnsDiv
        function createMainPageButton(btn) {
            if (!btnsDiv)
                btnsDiv = createBtnsDiv();
            createHtmlBtn({
                btn: btn,
                btnsContainer: btnsDiv,
                btnClass: cssClass,
                backGroundImage: btn.backGroundImage,
                clear: true,
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
    function appendGoBackAndGoToMainButtons(btn, btnsContainer, cssClass, btnBack, btnMain) {
        let goBackHtml, mainMenuHtml;
        (function appendGoBackBtn() {
            //This function inserts an html button that navigates the user to the previous menu from which he had been directed when clicking on the button
            if (btn === btnBack)
                return; //If the btn is itself a GoBack btn, we will not insert it twice
            if (btnsContainer.querySelector('#' + btnBack.btnID))
                btnsContainer.querySelector('#' + btnBack.btnID).remove(); //If the sideBar already contains a btnGoBack, we will replace it with a new button pointing to the right parent button in the buttons tree
            if (!btn.parentBtn)
                return;
            //Notice that the GoBack Button that we will insert, will only show the children of btn in the sideBar: it will not call showChildButonsOrPrayers() passing btn to it as a parameter. Instead, it will call a function that will show its children in the SideBar
            if (btn.parentBtn === btnMain)
                return; //If the parent btn is Btn.MainMenu, the goBackButton will bring us to the main menu any way, so no need for it
            let goBack = new Button({
                btnID: btnBack.btnID,
                label: btnBack.label,
                cssClass: cssClass,
                backGroundImage: btnsContainer === sideBarBtnsContainer ? undefined : btnBack.backGroundImage, //We do not show the background image if the button is appended to the sideBar
                onClick: () => displayChildButtonsOrPrayers(btn.parentBtn, true),
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
            if ([btnMain, btnBack].includes(btn))
                return; //Obviously, we will not insert 'Go To Main Menu' Button if the btn is it self btnMain. We also do not insert 'Go To Main Menu' when the GoBack button is clicked because it will be inserted by the button that will passed to showChildButtonsOrPrayers() when called
            if (btnsContainer.querySelector('#' + Btn.MainMenu.btnID))
                btnsContainer.querySelector('#' + Btn.MainMenu.btnID).remove(); //If there is already a Btn.MainMenu in the btnsContainer, we will remove it
            mainMenuHtml = createHtmlBtn({
                btn: btnMain,
                btnsContainer: btnsContainer,
                btnClass: cssClass,
                backGroundImage: btnsContainer === sideBarBtnsContainer ? undefined : Btn.MainMenu.backGroundImage,
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
function loadBible(def = true) {
    let lang;
    def ? lang = defaultLanguage : lang = foreingLanguage;
    return new Promise(async (resolve) => {
        const check = setInterval(async () => {
            if (lang) {
                getBibleVersion(lang, false);
                clearInterval(check);
                resolve();
            }
        }, 3000);
    });
}
function loadScript(base, id, type = "text/javascript") {
    if (document.scripts.namedItem(id))
        return;
    let script = document.createElement("script");
    script.src = base + id + '.js';
    if (type)
        script.type = type;
    script.id = id;
    script.onload = () => {
        if (id === "PrayersArray")
            populatePrayersArrays(); //! We must wait that the PrayersArray script is loaded before calling populatePrayersArrays
    };
    console.log(id + " has been loaded");
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
        return;
    (function setDefaults() {
        if (!args.userLanguages)
            args.userLanguages = JSON.parse(localStorage.userLanguages);
        if (!args.position)
            args.position = containerDiv;
        if (!args.container)
            args.container = containerDiv;
    })();
    if (args.actorClass === "Comments")
        args.languagesArray = ['FR', 'AR']; //The 'Comments' rows are structured like: [Title, FR, AR] regardless of the languages of the array
    let htmlRow, p, lang, text;
    (function createDivElement() {
        htmlRow = document.createElement("div");
        try {
            //@ts-ignore
            args.position.el
                ? //@ts-ignore
                    args.position.el.insertAdjacentElement(
                    //@ts-ignore
                    args.position.beforeOrAfter, htmlRow)
                : //@ts-ignore
                    args.position.appendChild(htmlRow);
        }
        catch (error) {
            console.log("an error occured: position = ", args.position, " and tblRow = ", args.tblRow);
            return console.log(error);
        }
        htmlRow.classList.add("Row"); //we add 'Row' class to this div
        if (!foreingLanguage && !copticLanguage)
            htmlRow.classList.add('Single');
        if (localStorage.displayMode === displayModes[1])
            htmlRow.classList.replace("Row", "SlideRow");
        if (args.dataGroup)
            htmlRow.dataset.group = args.dataGroup.replace(/Part\d+/, "");
        if (args.dataRoot)
            htmlRow.dataset.root = args.dataRoot.replace(/Part\d+/, "");
        htmlRow.classList.add(args.actorClass);
        if (args.actorClass.includes("Title")) {
            htmlRow.addEventListener("click", (e) => {
                e.preventDefault;
                collapseOrExpandText(htmlRow);
            }); //we also add a 'click' eventListener to the 'Title' elements
            htmlRow.id = splitTitle(args.tblRow[0])[0]; //we add an id to all the titles in order to be able to retrieve them for the sake of adding a title shortcut in the titles right side bar
        }
    })();
    (function appendParagraphsToDiv() {
        //looping the args.ents containing the text of the prayer in different languages,  starting by 1 since 0 is the id/title of the table
        for (let x = 1; x < args.tblRow.length; x++) {
            //x starts from 1 because prayers[0] is the title of the row
            if (!args.tblRow[x] || args.tblRow[x] === " ")
                continue; //we escape the empty strings if the text is not available in all the button's languages
            lang = args.languagesArray[x - 1] || 'NoLanguage'; //we select the language in the button's languagesArray, starting from 0 not from 1, that's why we start from x-1.
            //we check that the language is included in the allLanguages array, i.e. if it has not been removed by the user, which means that he does not want this language to be displayed. If the language is not removed, we retrieve the text in this language. otherwise we will not retrieve its text.
            if (!args.userLanguages.includes(lang))
                continue;
            p = document.createElement("p"); //we create a new <p></p> element for the text of each language in the 'prayer' array (the 'prayer' array is constructed like ['prayer id', 'text in AR, 'text in FR', ' text in COP', 'text in Language', etc.])
            htmlRow.appendChild(p);
            p.dataset.root = htmlRow.dataset.root; //we do this in order to be able later to retrieve all the divs containing the text of the prayers with similar id as the title
            text = args.tblRow[x];
            p.classList.add(lang);
            p.lang = lang.toLowerCase();
            p.innerText = text;
            p.addEventListener("dblclick", (ev) => {
                ev.preventDefault();
                let size = Number(localStorage.fontSize);
                if (size >= 2)
                    return setFontSize('1');
                size = size + 0.25;
                setFontSize(size.toString());
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
                    arrayName: getArrayNameFromArray(getArrayFromPrefix(htmlRow.dataset.root)),
                    tableTitle: htmlRow.dataset.root,
                    operator: { equal: true }, //!We need to look for the table by the exact title beacause some titles like 'NativityParamoun' or 'BaptismParamoun' may be retrieved if the Season is 'Nativity' or 'Baptism'
                });
            });
        }
    })();
    return htmlRow;
}
/**
 * Shows a bookmark link in the right side bar for each title in the currently displayed prayers
 * @param {NodeListOf<>Element} titlesCollection  - a Node list of all the divs containing the titles of the different sections. Each div will be passed to addTitle() in order to create a link in the right side bar pointing to the div
 * @param {HTMLElement} rightTitlesDiv - the right hand side bar div where the titles will be displayed
 * @param {boolean} clear - indicates whether the side bar where the links will be inserted, must be cleared before insertion
 * @param {string} prefix - prefix that can be added to the id of the title in order to avoid repetition of same ids in certain cases
 */
async function showTitlesInRightSideBar(titlesCollection, rightTitlesDiv, clear = true, dataGroup, append = true, prefix = '') {
    let titlesArray = [];
    //this function shows the titles in the right side Bar
    if (!rightTitlesDiv)
        rightTitlesDiv = sideBarTitlesContainer;
    if (clear)
        rightTitlesDiv.innerHTML = ""; //we empty the side bar
    let bookmark;
    titlesArray = titlesCollection.map((titleRow) => {
        titleRow.id += titlesCollection.indexOf(titleRow).toString() + prefix;
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
    settingsBtn.addEventListener("click", () => displaySettingsPanel());
    sideBarBtnsContainer.appendChild(settingsBtn);
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
    if (!args.btnsContainer)
        return;
    if (args.clear !== false)
        args.clear = true;
    let newBtn = document.createElement("button");
    args.btnClass
        ? newBtn.classList.add(args.btnClass)
        : newBtn.classList.add(args.btn.cssClass);
    if (args.backGroundImage)
        newBtn.style.backgroundImage = args.backGroundImage;
    newBtn.id = args.btn.btnID;
    //Adding the labels to the button
    if (args.btn.label.DL)
        editBtnInnerText(args.btn.label.DL, defaultLanguage);
    /*   if (args.btn.label.FL)
        editBtnInnerText(args.btn.label.FL, foreingLanguage); */
    args.btnsContainer.appendChild(newBtn);
    if (args.onClick)
        newBtn.onclick = async (event) => {
            event.preventDefault;
            args.onClick();
        };
    else
        newBtn.onclick = (event) => {
            event.preventDefault;
            displayChildButtonsOrPrayers(args.btn, args.clear);
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
function reloadScripts(scriptIDs, src, type = 'text/javascript', msg, onLoad) {
    let old, copy;
    scriptIDs
        .forEach((id) => {
        old = document.scripts[id];
        src = './Build/modules/Declare' + id + '.js';
        if (!old)
            old = document.querySelector('[src="' + src + '"]');
        copy = document.createElement("script");
        copy.id = old?.id || id;
        copy.src = old?.src || src;
        copy.type = old?.type || type;
        old?.remove();
        if (onLoad)
            copy.onload = () => onLoad();
        else
            copy.onload = () => {
                if (msg)
                    alert(msg);
                if (id.includes('PrayersArray'))
                    populatePrayersArrays();
            };
        document.head.appendChild(copy);
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
    if (!args.prayersSequence && !args.table)
        return;
    const showActors = JSON.parse(localStorage.showActors);
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
    const tables = [];
    (function retrievePrayersTables() {
        if (args.table)
            return tables.push(args.table); //If a table is already passed as argument, we will add this table to tables[]. Otherwise, we will retrieve the tables from args.prayersSequence;
        if (!args.prayersSequence)
            return console.log("The prayersSequences is missing, we cannot retrieve the tables");
        args.prayersSequence.map(async (tableTitle) => {
            if (!tableTitle)
                return console.log("No tableTitle");
            if (tableTitle.startsWith(Prefix.readingRef))
                tables.push(await retrieveReadingTableFromBible([[tableTitle]], [defaultLanguage, foreingLanguage]));
            else
                tables.push(findTable(tableTitle, getArrayFromPrefix(tableTitle)));
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
            dataGroup = splitTitle(Title(entireTable))[0]; //This will not change and will serve to set the dataset.group property of all the div elements that will be created for the table
            entireTable.forEach((row) => htmlDivs.push(processRow(row)));
        });
        htmlDivs
            .filter(div => div?.classList.contains('Same'))
            .forEach(div => {
            if (htmlDivs[htmlDivs.indexOf(div) - 1])
                div.classList.replace('Same', Array.from(htmlDivs[htmlDivs.indexOf(div) - 1].classList).find(c => c !== 'Row') || 'NoActor');
        });
        return htmlDivs;
        function processRow(row) {
            if (!row)
                return;
            if (!row[0].startsWith(Prefix.same))
                dataRoot = splitTitle(row[0])[0]; //Each time a row has its own title (which means the row is the first row in a table), we will set the dataset.root of this row and the following rows to the value of row[0]
            const actorClass = splitTitle(row[0])[1] || 'NoActor';
            if (!['Title', 'SubTitle', 'ReadingIntro', 'ReadingEnd', 'Same'].includes(actorClass)
                && !showActors.find(actor => actor.EN === actorClass)?.Show)
                return; //If the actor class .Show properety is not set to true, we will not show it
            return createHtmlElementForPrayer({
                tblRow: row,
                actorClass: actorClass,
                dataGroup: dataGroup,
                dataRoot: dataRoot,
                languagesArray: args.languages || getLanguages(dataRoot),
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
                referencedTable = findTable(row[1], getArrayFromPrefix(row[1])) || undefined;
                if (!referencedTable)
                    return;
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
function getArrayFromPrefix(title) {
    if (!title)
        return;
    if (RegExp(Prefix.HolyWeek + "\\d*(HM|HE).*&D=GL").test(title))
        return ReadingsArrays.GospelNightArrayFR;
    const array = PrayersArraysKeys.find((entry) => title.startsWith(entry[0]));
    if (!array)
        return undefined;
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
 * Returns an array of languages based on the name of the array passed to it (if it is a reading, it returns the languages for the readings, if it is the PrayersArray, it returns the prayersLanguages)
 * @param {string} arrayName - the name of a string[][][], for which we will return the languages corresponding to it
 * @returns {string[]} - an array of languages
 */
function getLanguages(title) {
    if (RegExp(Prefix.HolyWeek + "\\d*(HM|HE).*&D=GL").test(title))
        return ['COP', 'FR', 'AR'];
    else if ([Prefix.stPaul, Prefix.Catholicon, Prefix.praxis, Prefix.prophecies, Prefix.gospelMass, Prefix.gospelMorning, Prefix.gospelVespers, Prefix.gospelNight, Prefix.gospelVespers]
        .find(prefix => title.startsWith(prefix)))
        return [defaultLanguage, foreingLanguage].filter(lang => lang);
    else if (title.startsWith(Prefix.synaxarium))
        return ["FR", "AR"];
    else
        return prayersLanguages;
}
/**
 * This function mainly sets the the CSS gridAreasTemplate, the number of grid columns, and the width of each column for the provided list of html elements. It also other CSS properties (inserts + or - signs for titles, encircules the beam note with a span, etc.)
 * @param {NodeListOf<Element>} Rows - The html elements for which we will set the css. These are usually the div children of containerDiv
 * @param {HTMLElement[]} - the html divs for which we want to set their CSS.
 */
async function setCSS(htmlRows, amplify = true) {
    if (!htmlRows)
        return;
    if (localStorage.displayMode === displayModes[1])
        return;
    let plusSign = String.fromCharCode(plusCharCode), minusSign = String.fromCharCode(plusCharCode + 1);
    htmlRows
        .forEach((row) => setDivCSS(row));
    if (amplify)
        applyAmplifiedText(htmlRows);
    function setDivCSS(div) {
        if (!div)
            return; //!Caution: in some scenarios, htmlRows might contain undefined rows. We need to check for this in order to avoid erros
        if (div.children.length === 0)
            div.classList.add(hidden); //If the row has no children, it means that it is a row created as a name of a table or as a placeholder. We will hide the html element
        //Setting the number of columns and their width for each element having the 'Row' class for each Display Mode
        div.style.gridTemplateColumns = setGridColumnsOrRowsNumber(div);
        //Defining grid areas for each language in order to be able to control the order in which the languages are displayed (Arabic always on the last column from left to right, and Coptic on the first column from left to right)
        div.style.gridTemplateAreas = setGridAreas(div);
        (function addRightBorders() {
            let rowChildren = Array.from(div.children);
            let gridAreas = div.style.gridTemplateAreas
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
        let paragraphs = Array.from(div.querySelectorAll("p"));
        if (isTitlesContainer(div)) {
            //This is the div where the titles of the prayer are displayed. We will add an 'on click' listner that will collapse the prayers
            (async function addPlusAndMinusSigns() {
                if (isTitlesContainer(div.nextElementSibling))
                    return;
                if (htmlRows
                    .filter(div => div?.dataset?.root && div.dataset.root === div.dataset.root).length < 1)
                    return;
                div.role = "button";
                let defLangParag = div.querySelector('p[lang="' + defaultLanguage.toLowerCase() + '"]');
                if (!defLangParag)
                    defLangParag = div.lastElementChild;
                if (!defLangParag)
                    return console.log("no paragraph with lang= " + defaultLanguage);
                if (defLangParag.innerHTML.includes(plusSign + " "))
                    defLangParag.innerHTML = defLangParag.innerHTML.replace(plusSign + " ", ""); //We remove the + sign in the begining (if it exists)
                if (defLangParag.innerHTML.includes(minusSign + " "))
                    defLangParag.innerHTML = defLangParag.innerHTML.replace(minusSign + " ", ""); //!Caution: we need to work with the innerHTML in order to avoid losing the new line or any formatting to the title text when adding the + or - sing. So don't change the innerHTML to innerText or textContent
                if (div.dataset.isCollapsed)
                    defLangParag.innerHTML = plusSign + " " + defLangParag.innerHTML; //We add the plus (+) sign at the begining
                if (!div.dataset.isCollapsed)
                    defLangParag.innerHTML = minusSign + " " + defLangParag.innerHTML; //We add the minus (-) sig at the begining;
            })();
            paragraphs
                .filter(p => p.classList.contains('AR'))
                .forEach(p => p.innerHTML = getArabicNumbers(p.innerHTML));
        }
        if (div.classList.contains("Diacon") || div.classList.contains("Assembly"))
            replaceMusicalNoteSign(paragraphs);
        if (div.dataset.root
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
                ].find((prefix) => div.dataset.root.startsWith(prefix)))
            replaceQuotes(paragraphs); //If the text is one of the "Readings", we replace the quotes signs
        insertSuperScriptTag(paragraphs);
    }
}
/**
 * Replaces the quotes ("") signs in the text by a span containing the relevant quotes sign acording the language
 * @param {HTMLPargraphElement[]} paragraphs  - the html pragraphs containing the quotes signs that need to be replaced
 */
function replaceQuotes(paragraphs) {
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
 * Converts the numbers in a given string to 'hindi' (i.e., Arabic) numbers
 */
function getArabicNumbers(text) {
    for (let i = 0; i < 10; i++) {
        text = text.replaceAll(i.toString(), i.toLocaleString('ar-EG'));
    }
    return text;
}
/**
 * Replaces the verses numbers with a superScript span
 * @param {HTMLPargraphElement[]} paragraphs
 */
function insertSuperScriptTag(paragraphs) {
    paragraphs
        .forEach(parag => {
        //We will convert the verses numbers into superscripts
        if (!RegExp('Sup_\.*_Sup').test(parag.innerText))
            return;
        if (parag.classList.contains('AR'))
            parag.innerHTML = getArabicNumbers(parag.innerHTML);
        parag.innerHTML =
            parag.innerHTML
                .replaceAll('Sup_', '<sup class="superScript">')
                .replaceAll('_Sup', '</sup>');
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
/**
 * Applies the text size selected by the user
 * @param {HTMLDivElement[]}  htmlRows - the divs to which the text size will be applied
 */
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
function collapseOrExpandText(titleRow, collapse, children, titlesRows, container = containerDiv) {
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
            Array.from(container.querySelectorAll('div'))
                //!We must use querySelectorAll because some elements are not direct children of containerDiv (e.g. they may be nested in an expandable element)
                .filter(div => div?.children?.length > 0) //We exclude rows with no children (those are PlaceHolders)
                .filter(div => div?.dataset?.group)
                .filter(div => div.dataset.group === titleRow.dataset.group);
    if (!titlesRows)
        titlesRows = children.filter((div) => isTitlesContainer(div)); //Those are all the "Title" divs having the same data-group as titleRow
    let titleRowChildren;
    titlesRows.length === 1 ?
        titleRowChildren = children.filter(child => child?.dataset?.group === titleRow.dataset.group) //There is only 1 title for the same dataset.group (which mostly the case)
        :
            titleRowChildren = children.filter(child => child?.dataset?.root === titleRow.dataset.root); //There are more than 1 title with the same dataset.group attribute. In this case, each titleRow will only hide the divs sharing the same dataset.root (not the same dataset.group because otherwise, all the other titles and their children will be affected)
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
    parag = Array.from(titleRow.children).filter((child) => child?.innerHTML.startsWith(String.fromCharCode(plusCode)) ||
        child?.innerHTML.startsWith(String.fromCharCode(plusCode + 1)))[0];
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
function selectElementsByDataSet(container, dataSet, options, dataSetName = 'root') {
    dataSetName = 'data-' + dataSetName;
    let children = Array.from(container?.querySelectorAll("div"))?.filter((div) => div?.attributes[dataSetName]);
    if (!children)
        return;
    if (!options)
        options = { equal: true };
    if (options.equal)
        return children.filter((div) => div?.attributes[dataSetName]?.value === dataSet);
    else if (options.includes)
        return children.filter((div) => div?.attributes[dataSetName]?.value.includes(dataSet));
    else if (options.startsWith)
        return children.filter((div) => div?.attributes[dataSetName]?.value.startsWith(dataSet));
    else if (options.endsWith)
        return children.filter((div) => div?.attributes[dataSetName]?.value.endsWith(dataSet));
}
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
function findTable(tableTitle, prayersArray, options = { equal: true }, regExp = false) {
    if (!prayersArray)
        prayersArray = getArrayFromPrefix(tableTitle);
    if (!prayersArray)
        return console.log("No prayers Array", tableTitle);
    let table;
    if (regExp)
        table = prayersArray.find((tbl) => Title(tbl) && RegExp(tableTitle).test(splitTitle(Title(tbl))[0]));
    else if (options.equal)
        table = prayersArray.find((tbl) => Title(tbl) && splitTitle(Title(tbl))[0] === tableTitle);
    else if (options.startsWith)
        table = prayersArray.find((tbl) => splitTitle(Title(tbl))[0]?.startsWith(tableTitle));
    else if (options.endsWith)
        table = prayersArray.find((tbl) => splitTitle(Title(tbl))[0]?.endsWith(tableTitle));
    else if (options.includes)
        table = prayersArray.find((tbl) => splitTitle(Title(tbl))[0]?.includes(tableTitle));
    if (!table)
        return console.log("no table with the provided title was found : ", tableTitle);
    return table;
}
/**
 * Shows the settings panel

 * @param {boolean} langs - if true, we will show the languages settings in a modal pannel
 */
function displaySettingsPanel(langs = false) {
    if (langs)
        return showAddOrRemoveLanguagesBtns();
    showExpandableBtnsPannel("settingsPanel", true);
    let btn;
    //Appending date picker
    (async function showDatePicker() {
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
        let btnsContainer = createBtnsContainer("showNextCopticDate", getLabel({
            AR: "اليوم التالي أو السابق في التقويم القبطي",
            FR: "Aller au jour suivant ou précédant du calendrier copte",
            EN: "Move to the next or previous day of the Coptic calendar",
        }));
        let btnLable = getLabel({
            AR: 'التالي',
            FR: 'Suivant',
            EN: 'Next',
        });
        createBtn(btnLable, 'nextDay', true);
        btnLable = getLabel({
            AR: 'السابق',
            FR: 'Précédent',
            EN: 'Previous',
        });
        createBtn(btnLable, 'previousDay', false);
        function createBtn(lable, id, next) {
            createSettingsBtn({
                tag: "button",
                role: "button",
                btnClass: "settingsBtn",
                innerText: lable.DL,
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
        const btnsContainer = createBtnsContainer("changeFontSize", getLabel({
            AR: "تكبير أو تصغير حجم الأحرف",
            FR: "Changer la taille de police",
            EN: "Increase or decrease the fonts size",
        }));
        (function createInput() {
            const input = createSettingsBtn({
                innerText: '',
                tag: "input",
                btnsContainer: btnsContainer,
                id: "fontsSize",
            });
            const id = "fontSizes";
            const options = createDataList(id);
            debugger;
            if (!options || options.length < 1)
                return;
            input.type = "range";
            input.setAttribute("list", id);
            input.id = "inputFontSize";
            input.min = options[0].value;
            input.max = options[options.length - 1].value;
            input.defaultValue = localStorage.fontSize || '0.5';
            input.step = '0.25';
            input.onchange = () => setFontSize(input.value);
        })();
        function createDataList(id) {
            let list = document.createElement("datalist");
            list.id = id;
            list.classList.add(hidden);
            btnsContainer.appendChild(list);
            for (let i = 0.25; i <= 2; i += 0.25) {
                let option = document.createElement("option");
                option.value = i.toString();
                list.appendChild(option);
            }
            return Array.from(list.children);
        }
    })();
    //Appending Add or Remove language Buttons
    showAddOrRemoveLanguagesBtns();
    async function showAddOrRemoveLanguagesBtns() {
        const labels = [
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
        if (langs)
            return showLanguagesModal(labels);
        let btnsLangs = [
            ...nonCopticLanguages,
            ...copticLanguages.filter(lang => lang[0] !== 'CF')
        ];
        let defaultLangContainer = createBtnsContainer("defaultLang", getLabel(labels[0]));
        let foreignLangContainer = createBtnsContainer("foreignLang", getLabel(labels[1]));
        let copticLangContainer = createBtnsContainer("copticLang", getLabel(labels[2]));
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
        function setLanguage(lang, index) {
            let userLanguages;
            if (localStorage.userLanguages)
                userLanguages = JSON.parse(localStorage.userLanguages);
            if (!userLanguages)
                userLanguages = [];
            if (index > 0 && userLanguages.indexOf(lang) === index)
                userLanguages[index] = undefined; //If the language is already defined at the same index, we will set the element at the same index to undefined (i.e., we will desactivate the language and remove it from the list of userLanguages). We never set the default language (i.e. userLanguages[0]) to undefined that's why we exclude the case where index = 0
            else if (index === 0 && userLanguages.indexOf(lang) === index)
                return alert("You cannot not desactivate the default language. You can replace it by choosing another language");
            else if (index === 1 && userLanguages.indexOf(lang) === 0 && userLanguages[index]) {
                //If the language is already set as defaultLanguage (it is set at index 0), and we want to make it the foreign language (index = 1), we check if the value of index 1 (the index of the foreign language) is not undefined. If so, we make the foreign language default language and we replace it with lang
                userLanguages[0] = userLanguages[index];
                userLanguages[index] = lang;
            }
            else if (index === 1 && userLanguages.indexOf(lang) === 0 && !userLanguages[index])
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
            if (index === 0)
                reloadScripts(['Buttons'], undefined, undefined, undefined, () => {
                    console.log('Buttons script reloaded');
                    displayChildButtonsOrPrayers(Btn.MainMenu); //We show the MainMenu buttons with the newly selected language
                    displaySettingsPanel(); //We display the settings pannel again
                });
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
                                displayChildButtonsOrPrayers(lastClickedButton);
                                displaySettingsPanel(); //we display the settings pannel again
                            }
                        },
                    },
                });
                if (JSON.parse(localStorage.userLanguages)[args.index] !== lang[0])
                    newBtn.classList.add("langBtnAdd"); //The language of the button is absent from userLanguages[], we will give the button the class 'langBtnAdd'
            });
            args.btnsContainer.style.gridTemplateColumns = setGridColumnsOrRowsNumber(args.btnsContainer, 3);
        }
        function showLanguagesModal(labels) {
            containerDiv.classList.add(hidden);
            //Creating a modalContainer for the settings buttons
            const container = createBtnsContainer("modalContainer", getLabel(labels[0]), 'modalContainer');
            document.getElementById('content').prepend(container);
            addLabel(0);
            return showModal(0);
            function addLabel(i) {
                let lable = document.createElement('h3');
                lable.innerText = labels[i][defaultLanguage || 'EN'];
                container.appendChild(lable);
            }
            ;
            function showModal(index) {
                let languages = [nonCopticLanguages, nonCopticLanguages, copticLanguages][index];
                if (index === 1 && defaultLanguage)
                    languages = languages.filter(l => l[0] !== defaultLanguage);
                //We add a button for each language
                languages.map((lang) => {
                    createSettingsBtn({
                        tag: "button",
                        role: "button",
                        btnClass: "settingsBtn",
                        innerText: lang[1],
                        btnsContainer: container,
                        id: "userLang",
                        onClick: { event: 'click', fun: () => onClick(lang) },
                    });
                });
                if (index > 0)
                    createSettingsBtn({
                        tag: "button",
                        role: "button",
                        btnClass: "settingsBtn",
                        innerText: { AR: 'تجاهل', FR: 'Ignorer', EN: 'Ignore' }[defaultLanguage || 'EN'],
                        btnsContainer: container,
                        id: "userLang",
                        onClick: {
                            event: 'click', fun: () => {
                                setLanguage(null, index);
                                if (index < 2)
                                    return nextLanguage(index);
                                finish();
                            }
                        },
                    }); //We add a button to cancel setting optional languages like foreignLanguage and Coptic
                function onClick(lang) {
                    let confirmed = confirm(lang[1] + ' will be set as your ' + labels[index].Type);
                    if (!confirmed)
                        return; //If the user cancels we do nothing
                    else
                        setLanguage(lang[0], index);
                    if (index < 2)
                        nextLanguage(index);
                    else if (defaultLanguage)
                        finish();
                    else if (!defaultLanguage)
                        displaySettingsPanel(true);
                }
                ;
                function nextLanguage(i) {
                    container.innerHTML = '';
                    addLabel(i + 1);
                    showModal(i + 1);
                }
                function finish() {
                    showDates(); //We update the dates boxes because when the defaultLanguage is not set, they display 'undefined' values
                    container.remove(); //We remove the btns container
                    containerDiv.classList.remove(hidden);
                }
            }
        }
    }
    (async function showExcludeActorButon() {
        let btnsContainer = createBtnsContainer("showOrHideActor", getLabel({
            AR: "إظهار أو إخفاء مردات الكاهن أو الشماس أو الشعب",
            FR: "Afficher ou cacher un acteur",
            EN: "Show or hide an actor",
        }));
        let userActors = JSON.parse(localStorage.showActors);
        userActors.map((actor) => {
            if (['CommentText', 'NoActor'].includes(actor.EN))
                return; //CommentText will be handled at the same time by the button for 'Comments'
            btn = createSettingsBtn({
                tag: "button",
                role: "button",
                btnClass: "settingsBtn",
                innerText: actor[defaultLanguage],
                btnsContainer: btnsContainer,
                id: actor.EN,
                lang: actor.EN,
                onClick: {
                    event: "click",
                    fun: () => {
                        actor.Show = !actor.Show; //inversing the value of the boolean
                        btn.classList.toggle("langBtnAdd");
                        //changing the background color of the button to red by adding 'langBtnAdd' as a class
                        if (actor.EN === "Comments")
                            userActors.find((el) => el.EN === "CommentText").Show = actor.Show; //setting the value of 'CommentText' same as 'Comment'
                        localStorage.showActors = JSON.stringify(userActors); //adding the new values to local storage
                        if (containerDiv.children) {
                            //Only if some prayers text is already displayed
                            displayChildButtonsOrPrayers(lastClickedButton); //we re-click the last button to refresh the displayed text by adding or removing the actor according to the new setings chice made by the user.
                            displaySettingsPanel(); //we display the settings pannel again
                        }
                    },
                },
            });
            if (!actor.Show)
                btn.classList.add("langBtnAdd");
        });
        btnsContainer.style.gridTemplateColumns = setGridColumnsOrRowsNumber(btnsContainer, 5);
    })();
    (async function showDisplayModeBtns() {
        let btnsContainer = createBtnsContainer("changeDisplayMode", getLabel({
            AR: "اختر نظام العرض",
            FR: "Changer le mode d'affichage",
            EN: "Change the display mode",
        }));
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
                                userActors.find(actor => actor.EN === actors[1].EN).Show = false;
                            else
                                userActors.find(actor => actor.EN === actors[1].EN).Show = true;
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
    (function showEditingModeBtn() {
        if (localStorage.editingMode != "true")
            return;
        let btnsContainer = createBtnsContainer("enterEditingMode", getLabel({
            AR: " تعديل النصوص",
            FR: "Activer le mode édition",
            EN: "Enter Editing Mode",
        }));
        expandableBtnsPannel.appendChild(btnsContainer);
        btn = createSettingsBtn({
            tag: "button",
            role: "button",
            btnClass: "settingsBtn",
            innerText: Btn.Edit.label.DL,
            btnsContainer: btnsContainer,
            id: "editingMode" + localStorage.editingMode.toString(),
            onClick: {
                event: "click",
                fun: Btn.Edit.onClick,
            },
        });
        btnsContainer.style.gridTemplateColumns = setGridColumnsOrRowsNumber(btnsContainer, 3);
    })();
    //Appending colors keys for actors
    (async function addActorsKeys() {
        let btnsContainer = createBtnsContainer("actorsKeys", getLabel({
            AR: "مفاتيح الألوان",
            FR: "Clés des couleurs",
            EN: "Colors keys",
        }));
        let userActors = JSON.parse(localStorage.showActors)
            .filter(actor => actor.Show === true && !['CommentText', 'NoActor'].includes(actor.EN));
        userActors.map((actor) => {
        });
        btnsContainer.style.gridTemplateColumns = setGridColumnsOrRowsNumber(btnsContainer, 4);
    })();
    (async function addReloadPageBtn() {
        let btnsContainer = createBtnsContainer("enterEditingMode", getLabel({
            AR: "تحديث التطبيق",
            FR: "Mettre à jour l'application",
            EN: "Update App",
        }));
        expandableBtnsPannel.appendChild(btnsContainer);
        let btnLable = getLabel({
            AR: 'تحديث',
            FR: 'Mettre à jour',
            EN: 'Update',
        });
        btn = createSettingsBtn({
            tag: "button",
            role: "button",
            btnClass: "updateBtn",
            innerText: btnLable.DL,
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
        label.innerText = labelText.DL;
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
 * Returns an object of type typeBtnLabel
 * @param {{AR?:string, FR?:string, EN?:string}} label - The label text in different languages
 */
function getLabel(label) {
    return {
        DL: label[defaultLanguage || 'EN'],
        FL: label[foreingLanguage],
    };
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
function insertAdjacentToHtmlElement(args) {
    if (!args.tables)
        return;
    if (!args.container)
        args.container = containerDiv;
    return args.tables
        .map((table) => {
        if (!table || table.length < 1)
            return; //We return an empty array in order to avoid having "void" elements included in the array that will be returned by the function
        return showPrayers({
            table: table,
            position: args.position,
            languages: args.languages || getLanguages(Title(table)),
            container: args.container,
            clearRightSideBar: false,
            clearContainerDiv: false,
        }) || []; //If showPrayers() returns "void", we replace it with an empty array in order to avoid having "void" elements included in the array that will be returned by the function
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
        table[table.length - 1]?.unshift(firstElement); //We add the title string element to the last row of the table that we have just pushed. 
    });
    return table;
}
function replaceHtmlQuotes(innerHtml, lang) {
    if (!innerHtml.includes("<q>"))
        return innerHtml;
    //if (["FR", "AR", "EN", "CA"].includes(lang))
    return innerHtml
        .replaceAll("<q>", String.fromCharCode(171))
        .replaceAll("</q>", String.fromCharCode(187));
    // else if (lang === "AR" || lang === "EN")
    //   return innerHtml.replaceAll("<q>", '"').replaceAll("</q>", '"');
    //  return innerHtml;
}
/**Compares two string dates and returns the difference in days (if the difference >0 it means that date2 is later than date1
 * @param {string} date1 - the first date that we want to compare with. It must be formatted like 'DDMMYYYY'
 * @param {string} date2 - the date that we want to compare with date1. It must be formatted like 'DDMMYYYY'
 * @returns {number} the result of date2-date1
 *
*/
function compareDates(date1, date2) {
    if (date1.length < 4 || date2.length < 4)
        return null;
    if (date1.length === 4)
        date1 += todayDate.getFullYear().toString(); //It means we are comparing dates within the same year
    if (date2.length === 4)
        date2 += todayDate.getFullYear().toString();
    return date(date2) - date(date1);
    function date(date) {
        if (date.length < 8)
            return null;
        return new Date(date[0] + date[1] + '.' + date[2] + date[3] + '.' + date[4] + date[5] + date[6] + date[7]).getTime();
    }
}
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
function populatePrayersArrays() {
    //We are populating subset arrays of PrayersArray in order to speed up the parsing of the prayers when the button is clicked
    if (PrayersArrayFR.length < 1)
        return console.log("PrayersArray is empty = ", PrayersArrayFR);
    PrayersArrays.forEach(a => a.length = 0); //We empty all the sub arrays of PrayersArrayFR
    let array;
    PrayersArrayFR
        .forEach((table) => {
        if (table?.length < 1 || table[0]?.length < 1)
            return;
        array = PrayersArraysKeys.find(a => Title(table)?.startsWith(a[0]));
        if (!array)
            return;
        array[2]().push(table);
    });
    array = null;
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
 * Returns the title of the table i.e., table[0][0]
 * @param {string[][]} table - the Table for which we want to return the title
 * @returns {string}
 */
function Title(table) {
    return table[0][0];
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
    let sameSlide = children.filter((div) => div?.dataset?.sameSlide === currentSlide.id); //If a slide is already diplayed, we retrieve all the containerDiv children having the same data-same-slide attribute as the data-same-slide value stored in the currentSlide.id.
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
            p.innerHTML = p.innerHTML.replaceAll(note, '<span class="musicalNote">' + note + note + "</span>");
        });
    });
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
    return (classList.filter((className) => htmlRow?.classList.contains(className))
        .length > 0);
}
/**
 * Checks if the html element passed to it as an argument has 'Comments' or 'CommentText' in its classList
 * @param {HTMLDivElement} htmlRow - the html element that we want to check if it has any of the classes related to comments
 */
function isCommentContainer(htmlRow) {
    return hasClass(htmlRow, ["Comments", "CommentText"]);
}
/**
 * Hides a title shortcut from the right side bar based on the id of the html element passed to it
 * @param {strig} titleGroup - the data-group of the title/titles we want to show or hide
 * @param {boolean} hide - If true, the title will be hidden. If false, the title will be displayed
 */
function hideOrShowTitle(titleGroup, hide) {
    let titles = Array.from(sideBarTitlesContainer.children)
        .filter((title) => title?.dataset?.group === titleGroup);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vbW9kdWxlcy9hcHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsUUFBUSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLFFBQVEsQ0FBQyxDQUFDO0FBV3hELE1BQU0sTUFBTSxHQUF3SCxFQUFFLEVBQUUsRUFBRSxDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUMsRUFBRSxDQUFDO0FBR3hQLE1BQU0saUJBQWlCLEdBQVcsU0FBUyxDQUFDO0FBRTVDLEtBQUssVUFBVSxRQUFRO0lBQ3JCLElBQUksQ0FBQyxlQUFlO1FBQ2xCLG9CQUFvQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBRTdCLElBQUksWUFBWSxDQUFDLFFBQVE7UUFBRSxXQUFXLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBRTlELGlCQUFpQixFQUFFLENBQUM7SUFFcEIsTUFBTSxRQUFRLEVBQUUsQ0FBQztJQUVqQixDQUFDLFNBQVMsZUFBZTtRQUN2QiwrRkFBK0Y7UUFDL0YsSUFBSSxJQUFJLEdBQUcseUJBQXlCLENBQUM7UUFDckM7WUFDRSxjQUFjO1lBQ2Qsa0JBQWtCO1lBQ2xCLG9CQUFvQjtZQUNwQixpQkFBaUI7WUFDakIsYUFBYTtZQUNiLGlCQUFpQjtZQUNqQixhQUFhO1lBQ2IsaUJBQWlCO1lBQ2pCLGlCQUFpQjtZQUNqQixrQkFBa0I7WUFDbEIscUJBQXFCO1lBQ3JCLFVBQVU7U0FDWCxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUEsK0VBQStFO1FBRXZILElBQUksZUFB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