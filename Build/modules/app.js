document.addEventListener("DOMContentLoaded", startApp);
const Bibles = { AR: [undefined, undefined], FR: [undefined, undefined], EN: [undefined, undefined], COP: [undefined, undefined] };
const lastClickedButton = undefined;
async function startApp() {
    if (!defaultLanguage)
        displaySettingsPanel(true);
    await checkVersion();
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
 * Checks the app version
 */
async function checkVersion(update = '') {
    return;
    if (update)
        return updateLocalStorage(update);
    const resp = await fetch('./version.json');
    if (!resp.ok)
        return;
    const json = await resp.json();
    if (!json)
        return;
    if (!version)
        updateLocalStorage(json.version);
    else if (json.version !== version) {
        const text = {
            AR: 'توجد نسخة أحدث من التطبيق، يُنصَح بتحميل آخر نُسخَة عن طريق الضغط على زر التحديث في قسم الإعدادات',
            FR: "Une nouvelle version de l'application est maintenant disponible, nous vous conseillons de mettre à jour votre application en allant dans la section 'Paramètres'",
            EN: "A new version of the application is now available, we advise you to update your version form the 'settings' section"
        };
        alert(text[defaultLanguage] || text.EN);
    }
    ;
    function updateLocalStorage(version) {
        localStorage.version = version;
    }
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
            position: container,
            languages: btn.languages,
            clearContainerDiv: clear,
            clearRightSideBar: clear,
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
        if (leftSideBar.classList.contains(css.extended))
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
        if (containerDiv.children[0].classList.contains(css.mainPageButton))
            return;
        let children = Array.from(containerDiv.querySelectorAll(".Expandable, .SlideRow, ." + css.inlineButtonsContainer));
        children.forEach((child) => {
            child.classList.add(css.hidden);
            setSlidesCSS(child);
        }); //!We need to remove all the divs that are empty (some of which are inlineBtns divs that were emptied when the buttons were moved to anohter container). If we do not remove them, they may be given data-same-slide attributes that will interfere with the flow of the slides
        function setSlidesCSS(slideRow) {
            if (!slideRow.classList.contains(css.slideRow))
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
                    sameSlideGroup[sameSlideGroup.length - 1].classList.contains(css.inlineButtonsContainer)))
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
            let inlineBtns = sameSlide.filter((div) => div.classList.contains(css.inlineButtonsContainer)).length; //We count all the inlineBtns elements in sameSlideGroup[]
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
            else if (next && next.classList.contains(css.expandableDiv))
                createNewSlideGroup(next.children[0]);
            else if (!next &&
                currentSlideRow.parentElement &&
                currentSlideRow.parentElement.classList.contains(css.expandableDiv))
                return currentSlideRow.parentElement.nextElementSibling;
            else
                return next;
        }
        function countInnerHTML(sameSlideGroup) {
            let count = 0;
            sameSlideGroup.forEach((child) => {
                if (!child.classList.contains(css.inlineButtonsContainer))
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
        if (!args.actorClass)
            args.actorClass = getActor(css.NoActor);
        if (!args.userLanguages)
            args.userLanguages = JSON.parse(localStorage.userLanguages);
        if (!args.position)
            args.position = containerDiv;
    })();
    const [title, subtitle, comment] = [css.Title, css.SubTitle, css.Comment].map(css => getActor(css));
    if (args.actorClass === comment)
        args.languagesArray = ['FR', 'AR']; //The 'Comments' rows are structured like: [Title, FR, AR] regardless of the languages of the array
    let htmlRow, p, lang, text;
    (function createDivElement() {
        htmlRow = document.createElement("div");
        try {
            //@ts-ignore
            args.position?.el
                ? //@ts-ignore
                    args.position.el.insertAdjacentElement(
                    //@ts-ignore
                    args.position.beforeOrAfter, htmlRow)
                : //@ts-ignore
                    args.position?.appendChild(htmlRow);
        }
        catch (error) {
            console.log("an error occured: position = ", args.position, " and tblRow = ", args.tblRow);
            return console.log(error);
        }
        htmlRow.classList.add(css.Row); //we add 'Row' class to this div
        if (!foreingLanguage && !copticLanguage)
            htmlRow.classList.add(css.single);
        if (localStorage.displayMode === displayModes[1])
            htmlRow.classList.replace(css.Row, css.slideRow);
        if (args.dataGroup)
            htmlRow.dataset.group = args.dataGroup.replace(/Part\d+/, "");
        if (args.dataRoot)
            htmlRow.dataset.root = args.dataRoot.replace(/Part\d+/, "");
        if (args.tblRow[0].startsWith(Prefix.anchor))
            htmlRow.dataset.anchor = args.tblRow[0];
        htmlRow.classList.add(args.actorClass);
        if ([title, subtitle].includes(args.actorClass)) {
            htmlRow.dataset.isCollapsed = 'false'; //! We must initiate the dataset.isCollapsed of the row
            htmlRow.addEventListener("click", (e) => {
                e.preventDefault;
                collapseOrExpandText(htmlRow, !eval(htmlRow.dataset.isCollapsed));
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
        const titleDiv = document.createElement("div"); //this is just a container
        titleDiv.role = "button";
        if (dataGroup)
            titleDiv.dataset.group = dataGroup;
        else
            titleDiv.dataset.group = titleRow.id;
        titleDiv.classList.add(css.sideTitle);
        if (titleRow.classList.contains(css.hidden))
            titleDiv.classList.add(css.hidden); //if the html element from which we will create the title is hidden, we hide the title as well
        if (append)
            rightTitlesDiv.appendChild(titleDiv);
        else
            rightTitlesDiv.prepend(titleDiv);
        bookmark = document.createElement("a");
        titleDiv.appendChild(bookmark);
        bookmark.href = "#" + titleRow.id; //we add a link to the element having as id, the id of the prayer
        titleDiv.addEventListener("click", () => {
            closeSideBar(rightSideBar); //when the user clicks on the div, the rightSideBar is closed
            collapseOrExpandText(titleRow, false); //We pass the 'isCollapsed' paramater = false in order to always show/uncollapse the sibligns
        });
        let defaultLang = appendTitleTextParagraph(titleRow, defaultLanguage);
        let foreignLang = appendTitleTextParagraph(titleRow, foreingLanguage);
        if (defaultLang && foreignLang)
            foreignLang.innerText = "\n" + foreignLang.innerText;
        //If the container is an 'Expandable' container, we hide the title
        if (titleRow.parentElement &&
            titleRow.parentElement.classList.contains(css.expandableDiv))
            titleDiv.classList.add(css.hidden);
        return titleDiv;
    }
    function appendTitleTextParagraph(titlesRow, className, limit = 50) {
        const parag = titlesRow.querySelector("." + className);
        if (!parag)
            return;
        let text = parag.innerText
            .split("\n")
            .join(" ")
            .replaceAll(plusSign + " ", "")
            .replaceAll(plusSign + " ", "")
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
        close.classList.add(css.closeBtn);
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
    expandableBtnsPannel.classList.remove(css.hidden);
}
/**
* hides the inlineBtnsDiv by setting its zIndex to -1
*/
function hideExpandableButtonsPannel() {
    expandableBtnsPannel.dataset.status = "expandablePannel";
    expandableBtnsPannel.innerHTML = "";
    expandableBtnsPannel.classList.add(css.hidden);
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
        slide.classList.add(css.slide);
        slide.id = dataSameSlide;
        sameSlide.forEach((div) => {
            let clone = div.cloneNode(true);
            if (div.classList.contains(css.inlineButtonsContainer))
                //!The cloneNode() methods does not clone the event listners of an element. There is no way to retrieve these events by javascript. We will hence add a data-original-btn-id attribute in which we will store the id of the orignal button, in order to be able to retrieve it later and, if needed, mimic its 'onclick' action
                Array.from(clone.children).forEach((child) => (child.id = "Clone_" + child.id));
            slide.appendChild(clone);
        });
        let slideChildren = Array.from(slide.children);
        slideChildren.forEach((child) => {
            child.classList.remove(css.hidden);
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
            return actors.find((actor) => child.classList.contains(actor.Class));
        }
        function changeInlineBtnsOnClick() {
            let inlineBtns = slideChildren.filter((child) => child.classList.contains(css.inlineButtonsContainer));
            if (inlineBtns.length < 1)
                return console.log("inlineBtns is empty");
            (function expandables() {
                let expandBtnsContainer = inlineBtns.filter((container) => container.children.length > 0 &&
                    container.children[0].classList.contains(css.expand));
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
                    let originalBtn = Array.from(containerDiv.querySelectorAll("." + css.inlineButton)).find((childBtn) => childBtn.id === btn.id.split("Clone_")[1]);
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
                    container.classList.contains(css.masterButtonDiv));
                console.log("masterBtnContainers = ", masterBtnContainers);
                changeBtnOnClick(masterBtnContainers, onClickFun);
                function onClickFun(btn) {
                    let originalBtn = Array.from(containerDiv.querySelectorAll("." + css.inlineButton)).find((childBtn) => childBtn.id === btn.id.split("Clone_")[1]);
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
    settingsBtn.classList.add(css.settings);
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
        btnLable.classList.add(css.buttonText);
        if (btnClass)
            btnLable.classList.add(btnClass);
        newBtn.appendChild(btnLable);
    }
    return newBtn;
}
function toggleSideBars() {
    if (!leftSideBar.classList.contains(css.hidden) &&
        rightSideBar.classList.contains(css.hidden)) {
        closeSideBar(leftSideBar);
    }
    else if (!rightSideBar.classList.contains(css.hidden) &&
        leftSideBar.classList.contains(css.hidden)) {
        closeSideBar(rightSideBar);
    }
    else if (leftSideBar.classList.contains(css.hidden) &&
        leftSideBar.classList.contains(css.hidden)) {
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
    sideBar.classList.remove(css.hidden);
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
    sideBar.classList.add(css.hidden);
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
        if (!expandableBtnsPannel.classList.contains(css.hidden))
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
                if (!leftSideBar.classList.contains(css.hidden) &&
                    rightSideBar.classList.contains(css.hidden)) {
                    closeSideBar(leftSideBar);
                }
                else if (rightSideBar.classList.contains(css.hidden) &&
                    leftSideBar.classList.contains(css.hidden)) {
                    openSideBar(rightSideBar);
                }
            }
            else if (xDiff < -10) {
                /* left to right swipe */
                direction = "right";
                if (leftSideBar.classList.contains(css.hidden) &&
                    rightSideBar.classList.contains(css.hidden)) {
                    openSideBar(leftSideBar);
                }
                else if (!rightSideBar.classList.contains(css.hidden) &&
                    leftSideBar.classList.contains(css.hidden)) {
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
    const ignored = JSON.parse(localStorage.showActors)
        .filter((actor) => !actor.Show && actor.Class)
        .map((actor) => actor.Class);
    (function setDefaults() {
        //Setting container, and the values for the missing arguments
        if (!args.position)
            args.position = containerDiv;
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
        let htmlDivs = [], dataRoot;
        tables.forEach((table) => {
            if (!table)
                return;
            const entireTable = unfoldPlaceHolders(table);
            const dataGroup = splitTitle(Title(entireTable))[0]; //This will not change and will serve to set the dataset.group property of all the div elements that will be created for the table
            dataRoot = dataGroup; //!dataRoot must be initated for each table with the same value as the dataGroup
            entireTable.forEach((row, index) => htmlDivs.push(processRow(row, index, dataGroup)));
        });
        htmlDivs = htmlDivs.filter(div => div); //!We must remove undefined divs because they will cause problems if kept, will not be able to set the data-root of all the divs with Prefix.Same
        const same = getActor(css.Same);
        return htmlDivs
            .map((div, index) => {
            if (!div.classList.contains(same))
                return div;
            const previous = htmlDivs[index - 1];
            div.classList
                .replace(same, Array.from(previous?.classList).find(c => ![css.Row].includes(c)));
            return div;
        });
        function processRow(row, index, dataGroup) {
            if (!row)
                return;
            const [root, actorClass] = splitTitle(row[0]);
            if (ignored.includes(actorClass))
                return; //If the Show property of the actor class is not set to true, we will not show the row. Also if the row has only 
            (function setDataRoot() {
                //If row[0] ends with css.Title or css.Subtitle, we assume that it is either the title of a new table, or that it was assigned the css.Title or css.SubTitle class on purpose. By changing the dataRoot prop of all the divs that will be created from this point on, we will make sure that when the title div is clicked, it will collapse or  expand the divs having the same dataRoot. Any div with the same dataRoot is deemed bound to the title div as if they belonged to the same table. Only the 1st div of the table commands all the divs in the table.  
                if (index < 1)
                    return; //!If this is the 1st row in the table, the dataRoot has already been set = dataset.group (in fact, in this case root = dataset.group since this is the first row of the "entire table"). We don't need to set it here.
                if (!RegExp(`(${css.Title}|${css.SubTitle})`).test(`${Prefix.class}${actorClass}`))
                    return;
                dataRoot = `${dataGroup}${index}`; //!dataRoot must be unique for each group of divs following a title div. If the title row is in the middle of the table we set the dataRoot  = dataGroup (which is the title of the entire table) + the index of the row, in order to make it unique.
            })();
            return createHtmlElementForPrayer({
                tblRow: row,
                actorClass: actorClass,
                dataGroup: dataGroup,
                dataRoot: dataRoot,
                languagesArray: args.languages || getLanguages(dataRoot),
                position: args.position,
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
    const diacon = getActor(css.Diacon), assembly = getActor(css.Assembly), arabic = getActor(css.arabic);
    htmlRows
        .forEach((row) => setDivCSS(row));
    if (amplify)
        applyAmplifiedText(htmlRows);
    function setDivCSS(div) {
        if (!div)
            return; //!Caution: in some scenarios, htmlRows might contain undefined rows. We need to check for this in order to avoid erros
        if (div.children.length === 0)
            return div.classList.add(css.hidden); //If the row has no children, it means that it is a row created as a name of a table or as a placeholder. We will hide the html element
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
        (function formatParagraphs() {
            const paragraphs = Array.from(div.querySelectorAll("p"));
            paragraphs
                .filter(p => hasClass(p, [arabic]))
                .forEach(p => p.innerHTML = getArabicNumbers(p.innerHTML)); //Converting the numbers of Arabic text to hindi characters
            if (hasClass(div, [diacon, assembly]))
                replaceMusicalNoteSign(paragraphs);
            if ([
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
            ].find((prefix) => div.dataset.root?.startsWith(prefix)))
                replaceQuotes(paragraphs); //If the text is one of the "Readings", we replace the quotes signs
            insertSuperScriptTag(paragraphs);
        })();
        if (isTitlesContainer(div)) {
            //This is the div where the titles of the prayer are displayed. We will add an 'on click' listner that will collapse the prayers
            (async function addPlusAndMinusSigns() {
                //if (isTitlesContainer(div.nextElementSibling as HTMLElement)) return;
                if (htmlRows
                    .filter(div => div?.dataset?.root && div.dataset.root === div.dataset.root).length < 1)
                    return;
                div.role = "button";
                let parag = div.querySelector(`p[lang="${defaultLanguage.toLowerCase()}"]`);
                if (!parag)
                    parag = div.lastElementChild;
                if (!parag)
                    return console.log("no paragraph with lang= " + defaultLanguage);
                let text = parag.innerHTML; //!Caution: we need to work with the innerHTML in order to avoid losing the new line or any formatting to the title text when adding the + or - sing. So don't change the innerHTML to innerText or textContent
                [plusSign, minusSign]
                    .forEach(sign => text = text.replace(sign + " ", "")); //We remove the + sign in the begining (if it exists)
                if (div.dataset.isCollapsed === 'true')
                    parag.innerHTML = `${plusSign} ${text}`; //We add the plus (+) sign at the begining
                else if (div.dataset.isCollapsed === 'false')
                    parag.innerHTML = `${minusSign} ${text}`; //We add the minus (-) sig at the begining;
            })();
        }
        /**
       * Replaces the quotes ("") signs in the text by a span containing the relevant quotes sign acording the language
       * @param {HTMLPargraphElement[]} paragraphs  - the html pragraphs containing the quotes signs that need to be replaced
       */
        function replaceQuotes(paragraphs) {
            paragraphs
                .filter((paragraph) => !paragraph.classList.contains(css.coptic) &&
                !paragraph.classList.contains(css.coptArabic))
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
         *  Replaces the verses numbers with a superScript span
    * @param {HTMLPargraphElement[]} paragraphs
    */
        function insertSuperScriptTag(paragraphs) {
            paragraphs
                .forEach(parag => {
                //We will convert the verses numbers into superscripts
                if (!RegExp('Sup_\.*_Sup').test(parag.innerText))
                    return;
                parag.innerHTML =
                    parag.innerHTML
                        .replaceAll('Sup_', '<sup class="superScript">')
                        .replaceAll('_Sup', '</sup>');
            });
        }
        ;
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
                        child.classList.add(css.amplifiedText);
                });
            });
        });
    }
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
 * Returns a string representing the grid areas for an html element with a 'display:grid' property, based on the "lang" attribute of its children
 * @param {HTMLElement} row - an html element having children and each child has a "lang" attribute
 * @returns {string} representing the grid areas based on the "lang" attribute of the html element children
 */
function setGridAreas(row) {
    if (!row || row.children.length < 1)
        return;
    let areas = Array.from(row.children).map(child => child.lang.toUpperCase());
    if (areas.indexOf('AR') === 0 && !isCommentContainer(row))
        areas.reverse(); //if the 'AR' is the first language, it means it will be displayed in the first column from left to right. We need to reverse the array in order to have the Arabic language on the last column from left to right
    return '"' + areas.join(" ") + '"'; //we should get a string like ' "AR COP FR" ' (notice that the string marks " in the beginning and the end must appear, otherwise the grid-template-areas value will not be valid)
}
/**
 * Hides all the nextElementSiblings of a title html element (i.e., a div having the class 'Title' or 'SubsTitle') if the nextElementSibling has the same data-group attribute as the title html element
 * @param {HTMLDivElement} titleRow - the html div element containing the title (i.e. having class "Title" or "Subtitle" in its classList), which, when clicked, we will toggle the 'hidden' class from all the HTML div elements having the same dataset.goup or the same dataset.root
 * @param {boolean} isCollapsed - If collapse = true the funcion will hide the text, and will show it if collapse = false. If ommitted, the function will toggle the "hidden" class
 * @param {HTMLDivElement[]} sameTable - an array of HTML div elements with the same dataset.group
 * @param {HTMLDivElement[]} titlesRows - an array of HTML div elements having the same dataset-group and the class "Title" or "Subtitle" in their classList.
 */
function collapseOrExpandText(titleRow, isCollapsed, sameTable, titlesRows) {
    if (localStorage.displayMode === displayModes[1])
        return; //When we are in the 'Presentation' display mode, the titles sibligins are not hidden when we click the title div
    if (!titleRow?.dataset.group)
        return;
    if (sameTable && titlesRows)
        return toggleHidden(sameTable, isCollapsed, titlesRows); //If the rows that need to be hidden or displayed is provided, we will jumb to the toggleHidden() step directly and will return
    else
        sameTable =
            Array.from(containerDiv.querySelectorAll('div'))
                //!We must use querySelectorAll because some elements are not direct children of containerDiv (e.g. they may be nested in an expandable element)
                .filter(div => div?.children?.length > 0) //!We exclude rows with no children (those are always hidden and we never toggle their 'hidden' cssClass )
                .filter(div => div?.dataset?.group)
                .filter(div => div.dataset.group === titleRow.dataset.group);
    if (!sameTable)
        return;
    (function processTitleRow() {
        const titlesRows = sameTable.filter((div) => isTitlesContainer(div));
        const index = sameTable.indexOf(titleRow);
        (function isFirstRow() {
            if (index > 0)
                return;
            toggleHidden(sameTable, isCollapsed, [titleRow]); //!Since this is the 1st row in the table, it will collapse or expand the entire table (including the subtitles). Notice that for the "TitlesRows" argument we are passing an array containing only titleRow. This means that the "hidden" class of the other title divs will be toggelled like any other non-title div.
        })();
        (function isNotFirstRow() {
            if (index < 1)
                return;
            const sameRoot = sameTable.filter(row => row?.dataset?.root === titleRow.dataset.root); //We will retrieve only those rows having the same dataset.root as the titleRow. Only those divs will hidden or displayed
            collapseOrExpandText(titleRow, isCollapsed, sameRoot, titlesRows); //In this case, the title div toggles the "hidden" class only for the divs having the same dataset.root 
        })();
    })();
    function toggleHidden(rows, isCollapsed, titlesRows) {
        (function toggleIsCollapsed() {
            titleRow.dataset.isCollapsed = `${isCollapsed}`;
            togglePlusAndMinusSignsForTitles(titleRow, isCollapsed);
        })();
        rows
            .forEach(div => {
            if (isTitlesContainer(div))
                togglePlusAndMinusSignsForTitles(div, isCollapsed);
            if (titlesRows.includes(div))
                return; //We never hide a row with class css.Title or css.Sutbitle, they must remain displayed
            if (isCollapsed && !div.classList.contains(css.hidden))
                div.classList.add(css.hidden);
            else if (!isCollapsed && div.classList.contains(css.hidden))
                div.classList.remove(css.hidden);
        });
    }
    ;
}
/**
 * Toggels the minus and plus signs in the Title
 * @param {HTMLElement} titleRow - the html element (usually a div with class 'Title') that we wqnt to toggle the minus or plus signs according to whether the text is collapsed or not
 * @returns
 */
function togglePlusAndMinusSignsForTitles(titleRow, collapsed) {
    if (!titleRow.children)
        return;
    let parag;
    parag = Array.from(titleRow.children).filter((child) => child?.innerHTML.startsWith(plusSign) ||
        child?.innerHTML.startsWith(minusSign))[0];
    if (!parag)
        return;
    if (collapsed !== undefined)
        return replaceSign(collapsed);
    else
        replaceSign(eval(titleRow.dataset.isCollapsed));
    function replaceSign(collapse) {
        if (collapse)
            parag.innerHTML = parag.innerHTML.replace(minusSign, plusSign);
        else
            parag.innerHTML = parag.innerHTML.replace(plusSign, minusSign);
    }
}
/**
 * Collapses all the tiltes (i.e. all the divs with class 'Title' or 'SubTitle') in the html element passed as argument
 * @param {HTMLElement} container - the html element in which we will collapse all the divs having as class 'Title' or 'SubTitle'
 */
function collapseAllTitles(htmlRows) {
    if (!htmlRows)
        return;
    if (localStorage.displayMode === displayModes[1])
        return;
    htmlRows
        .forEach((row) => {
        const isTitle = isTitlesContainer(row);
        if (!isTitle && !row.classList.contains(css.hidden))
            row.classList.add(css.hidden);
        else if (isTitle) {
            row.dataset.isCollapsed = "true";
            togglePlusAndMinusSignsForTitles(row);
        }
    });
}
function findAnchor(title, container = containerDiv) {
    return Array.from(container?.querySelectorAll("div"))
        .filter((div) => div.dataset.anchor)
        .find((div) => div.dataset.anchor === title);
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
    return find() || console.log(`No table with ${tableTitle} was found`);
    function find() {
        if (regExp)
            return prayersArray.find((tbl) => RegExp(tableTitle).test(splitTitle(Title(tbl))?.[0]));
        else if (options.equal)
            return prayersArray.find((tbl) => splitTitle(Title(tbl))?.[0] === tableTitle);
        else if (options.startsWith)
            return prayersArray.find((tbl) => splitTitle(Title(tbl))?.[0]?.startsWith(tableTitle));
        else if (options.endsWith)
            return prayersArray.find((tbl) => splitTitle(Title(tbl))?.[0]?.endsWith(tableTitle));
        else if (options.includes)
            return prayersArray.find((tbl) => splitTitle(Title(tbl))?.[0]?.includes(tableTitle));
    }
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
            list.classList.add(css.hidden);
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
                            newBtn.classList.toggle(css.addLanguage);
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
                    newBtn.classList.add(css.addLanguage); //The language of the button is absent from userLanguages[], we will give the button the class 'langBtnAdd'
            });
            args.btnsContainer.style.gridTemplateColumns = setGridColumnsOrRowsNumber(args.btnsContainer, 3);
        }
        function showLanguagesModal(labels) {
            containerDiv.classList.add(css.hidden);
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
                    containerDiv.classList.remove(css.hidden);
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
                        btn.classList.toggle(css.addLanguage);
                        //changing the background color of the button to red by adding 'langBtnAdd' as a class
                        if (actor.Class === css.Comment)
                            userActors.find((el) => el.Class === css.CommentText).Show = actor.Show; //setting the value of 'CommentText' same as 'Comment'
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
                btn.classList.add(css.addLanguage);
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
                                    ? btn.classList.add(css.addLanguage)
                                    : btn.classList.remove(css.addLanguage);
                            });
                        }
                    },
                },
            });
            if (mode !== localStorage.displayMode) {
                btn.classList.add(css.addLanguage);
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
                fun: async () => {
                    location.reload();
                    checkVersion(await fetch('./version.json').then(async (resp) => await resp.json()).then(json => json.version));
                },
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
        labelsDiv.classList.add(css.settingsLabel);
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
 * Inserts each table in the tables array before or after the html div anchor and sets the dataset.group of the created html divs same as the dataset.group of the anchor
 *  @param {string[][][]} tables - an array of arrays, each array represents a table in the Word document from which the text was retrieved
 * @param {Element | HTMLElement} anchor - the html element before or after which which the prayers will be inserted, adjacent to an html element (el) in the containerDiv
 * @param {HTMLElement | DocumentFragment} container - the html element to which the anchor is appended as child
 * @param {string[]} langs - the languages in which the text is available. This is usually the "languages" properety of the button who calls the function
 * @param {InsertPosition} before - Where to insert the tables in relation to the anchor (beofre begin, after end etc). Its default value is "beforebegin"
 * @returns {HTMLDivElement[][]} - an array of all the html div elements created and appended to the container
 */
function insertTablesBeforeAnchor(tables, anchor, langs, before = 'beforebegin') {
    if (!tables || !anchor || !before)
        return [];
    const htmlDivs = tables
        .filter(table => table?.length > 0)
        .map((table) => {
        return showPrayers({
            table: table,
            position: { beforeOrAfter: before, el: anchor },
            languages: langs || getLanguages(Title(table)),
            clearRightSideBar: false,
            clearContainerDiv: false,
        }) || []; //If showPrayers() returns "void", we replace it with an empty array in order to avoid having "void" elements included in the array that will be returned by the function
    });
    htmlDivs.forEach(group => group.forEach(div => div.dataset.group = anchor.dataset.group)); //We give the created divs the same dataset.group as the table in which the anchor is included in order to make them part of the same table under the same title
    return htmlDivs;
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
            firstElement = Prefix.same + Object.values(css).find(v => htmlRow.title.endsWith(v)) || '';
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
    return title?.split(Prefix.class) || ["", ""];
}
/**
 * Returns the actor class resulting from css.split('&C=')[1]
 * @param {string} css - a string including '&C='
 */
function getActor(css) {
    return css?.split(Prefix.class)[1] || css;
}
/**
 * Returns the title of the table i.e., table[0][0]
 * @param {string[][]} table - the Table for which we want to return the title
 * @returns {string}
 */
function Title(table) {
    return table?.[0]?.[0];
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
            div.parentElement.classList.contains(css.expandableDiv))
            nextDiv = div.parentElement.nextElementSibling;
        else if (!next && div.previousElementSibling)
            nextDiv = div.previousElementSibling;
        else if (!next &&
            div.parentElement &&
            div.parentElement.classList.contains(css.expandableDiv))
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
    let notes = [eighthNoteCode, beamedEighthNoteCode];
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
    return hasClass(htmlRow, [css.Title, css.SubTitle].map(css => getActor(css)));
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
    return classList.find((className) => htmlRow?.classList.contains(className));
}
/**
 * Checks if the html element passed to it as an argument has 'Comments' or 'CommentText' in its classList
 * @param {HTMLDivElement} htmlRow - the html element that we want to check if it has any of the classes related to comments
 */
function isCommentContainer(htmlRow) {
    return hasClass(htmlRow, [css.Comment, css.CommentText].map(css => getActor(css)));
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
        if (hide && !title.classList.contains(css.hidden))
            title.classList.add(css.hidden);
        if (!hide && title.classList.contains(css.hidden))
            title.classList.remove(css.hidden);
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vbW9kdWxlcy9hcHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsUUFBUSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLFFBQVEsQ0FBQyxDQUFDO0FBV3hELE1BQU0sTUFBTSxHQUF3SCxFQUFFLEVBQUUsRUFBRSxDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUMsRUFBRSxDQUFDO0FBR3hQLE1BQU0saUJBQWlCLEdBQVcsU0FBUyxDQUFDO0FBRTVDLEtBQUssVUFBVSxRQUFRO0lBQ3JCLElBQUksQ0FBQyxlQUFlO1FBQ2xCLG9CQUFvQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBRTdCLE1BQU0sWUFBWSxFQUFFLENBQUM7SUFFckIsSUFBSSxZQUFZLENBQUMsUUFBUTtRQUFFLFdBQVcsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7SUFFOUQsaUJBQWlCLEVBQUUsQ0FBQztJQUVwQixNQUFNLFFBQVEsRUFBRSxDQUFDO0lBRWpCLENBQUMsU0FBUyxlQUFlO1FBQ3ZCLCtGQUErRjtRQUMvRixJQUFJLElBQUksR0FBRyx5QkFBeUIsQ0FBQztRQUNyQztZQUNFLGNBQWM7WUFDZCxrQkFBa0I7WUFDbEIsb0JBQW9CO1lBQ3BCLGlCQUFpQjtZQUNqQixhQUFhO1lBQ2IsaUJBQWlCO1lBQ2pCLGFBQWE7WUFDYixpQkFBaUI7WUFDakIsaUJBQWlCO1lBQ2pCLGtCQUFrQjtZQUNsQixxQkFBcUI7WUFDckIsVUFBVTtTQUNYLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMs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