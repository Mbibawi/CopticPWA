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
        return await finalize();
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
        showBtnChildrenInSideBar();
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
    await finalize();
    async function finalize() {
        if (!show)
            return btn.html = Array.from(container.children);
        if (btn.html?.length > 0)
            btn.html.forEach(el => container.append(el));
        const titles = Array.from(container.children)
            .filter(div => isTitlesContainer(div));
        if (titles.length > 1)
            showTitlesInRightSideBar(titles); //We don't show the titles if there is only 1 title
        if (container !== containerDiv)
            containerDiv.appendChild(container); //If the container is the documentFragment, we append its content to containerDiv
        if (localStorage.displayMode === displayModes[1])
            await showSlidesInPresentationMode(); //If we are in the "Presentation Mode", we will adapt the view to this mode
    }
    ;
    function showBtnChildrenInSideBar() {
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
    }
    function showBtnsOnMainPage(btn) {
        if (!btn.children || btn.children.length < 1)
            return;
        showBtnChildrenInSideBar(); //We show the buttons on the left side bar
        if (leftSideBar.classList.contains("extended"))
            return; //If the left side bar is not hidden, we do not show the buttons on the main page because it means that the user is using the buttons in the side bar and doesn't need to navigate using the btns in the main page
        containerDiv.innerHTML = "";
        let btnsDiv = createBtnsDiv();
        const images = [
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
        const cssClass = "mainPageBtn";
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