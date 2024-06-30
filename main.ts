const copticReadingsDates: string[][] = getCopticReadingsDates();

document.addEventListener("DOMContentLoaded", startApp);


/**
 * This function starts the App by setting a number of global variables like the dates, displaying the home page/main menu buttons, etc.
 */
async function startApp() {
  if (!defaultLanguage)
    showSettingsPanel(0);

  if (localStorage.fontSize) setFontSize(localStorage.fontSize);

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
    ].map((name) => loadScript(base, name));//!We need to return in order to halt the code until all the scripts are loaded

    if (defaultLanguage)
      loadBible(true)

  })();

  addKeyDownListnerToElement(document, "keydown", undefined);

  showChildButtonsOrPrayers(btnMainMenu); //!Caution: btnMain must be displayed after the dates and the Season have been set. Otherwise, btn Psalmody will not change its title
  //  document.getElementById('homeImg').addEventListener('dblclick', createHtmlArray);

  alert(version);

  async function setDates() {
    let selectedDate: Date;

    if (localStorage.selectedDate)
      selectedDate = new Date(Number(localStorage.selectedDate));

    if (checkIfDateIsToday(selectedDate))
      return await setCopticDates();

    await setCopticDates(selectedDate);

    alert(
      "WARNING ! The date is manually set by the user to " +
      selectedDate.getDate().toString() +
      "/" +
      (selectedDate.getMonth() + 1).toString() +
      "/" +
      selectedDate.getFullYear().toString() +
      ". This choice will not kept. If you want the current date, you have to change the date manually"
    );
  };
}

function loadBible(def: boolean = true): Promise<void> {
  let lang;
  def ? lang = defaultLanguage : lang = foreingLanguage;

  return new Promise<void>((resolve) => {
    const check = setInterval(() => {
      if (lang) {
        getBibleVersion(lang, false);
        clearInterval(check);
        resolve();
      }
    }, 3000);
  });
}

function loadScript(base: string, id: string, type: string = "text/javascript"): HTMLScriptElement {
  if (document.scripts.namedItem(id)) return;
  let script: HTMLScriptElement = document.createElement("script");
  script.src = base + id + '.js';
  if (type) script.type = type;
  script.id = id;
  script.onload = () => {
    if (id === "PrayersArray")
      populatePrayersArrays(); //! We must wait that the PrayersArray script is loaded before calling populatePrayersArrays
  };
  console.log(id + " has been loaded")
  return document.getElementsByTagName("body")[0].appendChild(script);
}

/**
 * @param {string[]} tblRow - an array of the text of the prayer which id matched the id in the idsArray. The first element in this array is the id of the prayer. The other elements are, each, the text in a given language. The prayers array is hence structured like this : ['prayerID', 'prayer text in Arabic', 'prayer text in French', 'prayer text in Coptic']
 * @param {string[]} languagesArray - the languages available for this prayer. The button itself provides this array from its "Languages" property
 * @param {string[]} userLanguages - a globally declared array of the languages that the user wants to show.
 * @param {string} actorClass - a CSS class that will be given to the html element (a div) in which the text of the table row. This class sets the background color of the div according to who is saying the prayer: is it the Priest, the Diacon, or the Assembly?
 * @param {HTMLDivElement} container - this is the html div element to which the newly created row will be appended at the specified position. If omitted, its default value is containerDiv
 */
function createHtmlElementForPrayer(args: {
  tblRow: string[];
  dataGroup: string;
  dataRoot: string;
  languagesArray: string[];
  userLanguages?: string[];
  position?:
  | HTMLElement
  | DocumentFragment
  | { beforeOrAfter: InsertPosition; el: HTMLElement };
  actorClass?: string;
  container?: HTMLElement | DocumentFragment;
}): HTMLDivElement | void {
  if (!args.tblRow || args.tblRow.length === 0)
    return console.log(
      "No valid tblRow[][] object is passed to createHtmlElementForPrayer() "
    );
  if (!args.actorClass) args.actorClass = splitTitle(args.tblRow[0])[1];
  if (args.actorClass) {
    let parsed = JSON.parse(localStorage.showActors).filter(
      (el) => el[0].EN === args.actorClass
    ); //localStorage.showActors is an array where each element is the actor object (i.e., a {AR:string, FR:string, EN:sstring}) and its status as boolean: i.e. an array of [[{actor}, boolean], [{actor}, boolean]]
    if (parsed.length > 0 && parsed[0][1] === false) return; //If the actor status is false, we will not process the row
  }
  if (!args.actorClass) args.actorClass = "NoActor";

  if (!args.userLanguages)
    args.userLanguages = JSON.parse(localStorage.userLanguages);
  if (!args.position) args.position = containerDiv;
  let htmlRow: HTMLDivElement,
    p: HTMLParagraphElement,
    lang: string,
    text: string;
  if (!args.container) args.container = containerDiv;

  htmlRow = document.createElement("div");
  htmlRow.classList.add("Row"); //we add 'Row' class to this div

  if (!foreingLanguage && !copticLanguage)
    htmlRow.classList.add('Single')

  if (localStorage.displayMode === displayModes[1])
    htmlRow.classList.replace("Row", "SlideRow");

  if (args.dataGroup)
    htmlRow.dataset.group = args.dataGroup.replace(/Part\d+/, "");
  if (args.dataRoot)
    htmlRow.dataset.root = args.dataRoot.replace(/Part\d+/, "");


  if (args.actorClass) htmlRow.classList.add(args.actorClass);
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
    if (!args.tblRow[x] || args.tblRow[x] === " ") continue; //we escape the empty strings if the text is not available in all the button's languages
    if (args.actorClass && args.actorClass === "Comments")
      //this means it is a comment
      x === 1 ? lang = 'FR' : lang = "AR"
    else
      lang = args.languagesArray[x - 1]; //we select the language in the button's languagesArray, starting from 0 not from 1, redrethat's why we start from x-1.


    //we check that the language is included in the allLanguages array, i.e. if it has not been removed by the user, which means that he does not want this language to be displayed. If the language is not removed, we retrieve the text in this language. otherwise we will not retrieve its text.
    if (!args.userLanguages.includes(lang)) continue;
    p = document.createElement("p"); //we create a new <p></p> element for the text of each language in the 'prayer' array (the 'prayer' array is constructed like ['prayer id', 'text in AR, 'text in FR', ' text in COP', 'text in Language', etc.])
    if (!args.actorClass) p.classList.add("PrayerText"); //The 'prayer' array includes a paragraph of ordinary core text of the array. We give it 'PrayerText' as class

    p.dataset.root = htmlRow.dataset.root; //we do this in order to be able later to retrieve all the divs containing the text of the prayers with similar id as the title
    text = args.tblRow[x];
    if (lang) p.classList.add(lang);
    if (lang) p.lang = lang.toLowerCase();
    p.innerText = text;
    p.addEventListener("dblclick", (ev: MouseEvent) => {
      ev.preventDefault();
      localStorage.fontSize !== "1.9" ? setFontSize("1.9") : setFontSize("1");
      //toggleAmplifyText(ev.target as HTMLElement, "amplifiedText");
    }); //adding a double click eventListner that amplifies the text size of the chosen language;
    p.addEventListener("contextmenu", (event) => {
      if (localStorage.editingMode != "true") return;
      event.preventDefault();
      if (!confirm("Do you want to edit the table?")) return;
      if (!htmlRow.dataset.root) return;
      startEditingMode({
        clear: true,
        arrayName: getArrayNameFromArray(
          getTablesArrayFromTitlePrefix(htmlRow.dataset.root)
        ),
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
        args.position.beforeOrAfter,
        htmlRow
      )
      : //@ts-ignore
      args.position.appendChild(htmlRow);
    return htmlRow;
  } catch (error) {
    console.log(
      "an error occured: position = ",
      args.position,
      " and tblRow = ",
      args.tblRow
    );
    console.log(error);
  }
}

/**
 * Shows a bookmark link in the right side bar for each title in the currently displayed prayers
 * @param {NodeListOf<>Element} titlesCollection  - a Node list of all the divs containing the titles of the different sections. Each div will be passed to addTitle() in order to create a link in the right side bar pointing to the div
 * @param {HTMLElement} rightTitlesDiv - the right hand side bar div where the titles will be displayed
 * @param {boolean} clear - indicates whether the side bar where the links will be inserted, must be cleared before insertion
 */
async function showTitlesInRightSideBar(
  titlesCollection: HTMLDivElement[],
  rightTitlesDiv?: HTMLElement,
  clear: boolean = true,
  dataGroup?: string,
  append: boolean = true
) {
  let titlesArray: HTMLDivElement[] = [];
  //this function shows the titles in the right side Bar
  if (!rightTitlesDiv) rightTitlesDiv = sideBarTitlesContainer;

  if (clear) rightTitlesDiv.innerHTML = ""; //we empty the side bar
  let bookmark: HTMLAnchorElement;

  titlesArray = titlesCollection.map((titleRow) => {
    titleRow.id += titlesCollection.indexOf(titleRow).toString();
    return addTitle(titleRow);
  });

  /**
   * Adds shortcuts to the diffrent sections by redirecting to the title of the section
   * @param {HTMLElement} titles - a div including paragraphs, each displaying the title of the section in a given language
   */
  function addTitle(titleRow: HTMLDivElement): HTMLDivElement {
    let titleDiv: HTMLDivElement = document.createElement("div"); //this is just a container
    titleDiv.role = "button";
    if (dataGroup) titleDiv.dataset.group = dataGroup;
    else titleDiv.dataset.group = titleRow.id;

    titleDiv.classList.add("sideTitle");
    if (titleRow.classList.contains(hidden)) titleDiv.classList.add(hidden); //if the html element from which we will create the title is hidden, we hide the title as well

    if (append) rightTitlesDiv.appendChild(titleDiv);
    else rightTitlesDiv.prepend(titleDiv);

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
    if (
      titleRow.parentElement &&
      titleRow.parentElement.classList.contains("Expandable")
    )
      titleDiv.classList.add(hidden);
    return titleDiv;
  }

  function appendTitleTextParagraph(
    titlesRow: HTMLElement,
    className: string,
    limit: number = 50
  ) {
    let parag = titlesRow.querySelector(
      "." + className
    ) as HTMLParagraphElement;
    if (!parag) return;
    let text: string = parag.innerText
      .split("\n")
      .join(" ")
      .replaceAll(String.fromCharCode(plusCharCode) + " ", "")
      .replaceAll(String.fromCharCode(plusCharCode + 1) + " ", "")
      .replaceAll("  ", " ");

    if (!text) return;

    if (text.length > limit) text = text.slice(0, limit - 1) + "..."; //We limit the number of characters of the title

    let titleParag = document.createElement("p");
    titleParag.innerText = text;
    titleParag.dir = "auto";
    titleParag.style.lineHeight = "8pt";
    titleParag.style.margin = "0px";
    if (className !== "AR") titleParag.style.textAlign = "left";
    else titleParag.style.textAlign = "right";
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
async function showChildButtonsOrPrayers(btn: Button, clear: boolean = true) {
  if (!btn) return;

  let container: HTMLElement | DocumentFragment = btn.docFragment || containerDiv;

  hideExpandableButtonsPannel();

  if (clear && !containerDiv.dataset.editingMode) {
    //If we are in the "Editing Mode" We do not clear the containerDiv at this stage 
    expandableBtnsPannel.innerHTML = "";
    containerDiv.style.gridTemplateColumns = "100%";
  }

  if (btn.onClick)
    await btn.onClick();

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
      if (!btn.prayersSequence) return;
      if (containerDiv.children.length > 0)
        saveModifiedArray({ exportToFile: true, exportToStorage: true });//We save what is shown in the containerDiv
      let array: string[][][];
      btn.prayersSequence
        .forEach((title) => {
          if (!title.includes("&D=")) return;
          array = getTablesArrayFromTitlePrefix(title);
          if (!array) return console.log("tablesArray is undefined");
          showTables({
            tablesArray: [findTable(title, array, { equal: true }) as string[][]],
            languages: getLanguages(title),
            position: container,
            container: container,
            clear: false,
          });
        });
    };
  })();

  if (btn.afterShowPrayers)
    await processAfterShowPrayers();

  (function processBtnChildren() {
    //!CAUTION, this must come after btn.onClick() is called because some buttons are not initiated with children, but their children are added on the fly when their onClick() method  is called
    if (!btn.children || btn.children.length < 1) return;

    sideBarBtnsContainer.innerHTML = "";

    btn.children
      .forEach((childBtn) => {
        if (!childBtn) return;
        //for each child button that will be created, we set btn as its parent in case we need to use this property on the button
        if (btn !== btnGoToPreviousMenu) childBtn.parentBtn = btn;
        //We create the html element reprsenting the childBtn and append it to btnsDiv
        createHtmlBtn({
          btn: childBtn,
          btnsContainer: sideBarBtnsContainer,
        });
      });

  })();

  setCSS(Array.from(container.querySelectorAll("div.Row"))); //!Important : setCSSGridTemplate() MUST be called after btn.afterShowPrayres() in order to set the CSS for all the elements that btn.afterShowPrayers() might insert

  applyAmplifiedText(
    Array.from(container.querySelectorAll("div.Row")) as HTMLDivElement[]
  );

  let titles = Array.from(container.children as HTMLCollectionOf<HTMLDivElement>)
    .filter(div => isTitlesContainer(div));

  if (titles.length > 1) showTitlesInRightSideBar(titles);//We don't show the titles if there is only 1 title

  appendGoBackAndGoToMainButtons(btn, sideBarBtnsContainer, btn.cssClass);

  if (btn.docFragment) containerDiv.appendChild(btn.docFragment);

  if (btn === btnMainMenu) addSettingsButton();

  if (localStorage.displayMode === displayModes[1])
    await showSlidesInPresentationMode();

  (function moveSettingsButtonToTheBottom() {
    //If settingsBtn is included in the menu (which means it is the main menu), we will move it to the buttom of the menu
    let settingsBtn: HTMLElement =
      sideBarBtnsContainer.querySelector("#settings");
    if (!settingsBtn) return;
    sideBarBtnsContainer.append(settingsBtn); //If the button is already there, we move it to the bottom of the list
  })();

  async function processAfterShowPrayers() {
    if (localStorage.displayMode === displayModes[1])
      return await btn.afterShowPrayers(); //!btn.afterShowPrayers() is an async function, that's why we don't call it here when in Presentation Mode because processPrayersSequence() would not have finished inserting the new elements when showPrayersInPresentationMode() is called
    await btn.afterShowPrayers();
  };

  function showBtnsOnMainPage(btn: Button) {
    if (!btn.children || btn.children.length < 1) return;
    if (leftSideBar.classList.contains("extended")) return; //If the left side bar is not hidden, we do not show the buttons on the main page because it means that the user is using the buttons in the side bar and doesn't need to navigate using the btns in the main page

    containerDiv.innerHTML = "";

    let btnsDiv: HTMLDivElement = createBtnsDiv();

    let images: string[] = [
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

    let cssClass: string = "mainPageBtn";

    //We create html elements representing each of btnMain children. The created buttons will be appended to containerDiv directly
    btn.children
      .forEach((childBtn) => {
        if (!childBtn) return;
        if (btn !== btnGoToPreviousMenu) childBtn.parentBtn = btn;
        if (!childBtn.backGroundImage && btn.backGroundImage) childBtn.backGroundImage = btn.backGroundImage;
        if (!childBtn.backGroundImage) childBtn.backGroundImage = images[btn.children.indexOf(childBtn)];

        createMainPageButton(childBtn); //We create an HTML button 

      });

    appendGoBackAndGoToMainButtons(btn, btnsDiv, cssClass);//We append the buttons then we add the background image for each button

    btnsDiv.style.gridTemplateColumns = setGridColumnsOrRowsNumber(btnsDiv, 3);//!Caution: this must come after the buttons have been appended to btnsDiv


    function createMainPageButton(btn: Button) {
      if (!btnsDiv) btnsDiv = createBtnsDiv();
      createHtmlBtn({
        btn: btn,
        btnsContainer: btnsDiv,
        btnClass: cssClass,
        backGroundImage: btn.backGroundImage,
        clear: false,
      }) as HTMLButtonElement
    }

    function createBtnsDiv(): HTMLDivElement {
      let div = document.createElement('div');
      if (defaultLanguage === 'AR') div.dir = "rtl";
      div.id = 'btnsMainPageDiv'
      div.style.display = 'grid';
      containerDiv.appendChild(div);
      return div;
    }

  }

  function appendGoBackAndGoToMainButtons(btn: Button, btnsContainer: HTMLDivElement, cssClass: string): HTMLElement[] {

    let goBackHtml: HTMLElement, mainMenuHtml: HTMLElement;

    (function appendGoBackBtn() {
      //This function inserts an html button that navigates the user to the previous menu from which he had been directed when clicking on the button
      if (btn === btnGoToPreviousMenu) return; //If the btn is itself a GoBack btn, we will not insert it twice
      if (btnsContainer.querySelector('#' + btnGoToPreviousMenu.btnID))
        btnsContainer.querySelector('#' + btnGoToPreviousMenu.btnID).remove();//If the sideBar already contains a btnGoBack, we will replace it with a new button pointing to the right parent button in the buttons tree

      if (!btn.parentBtn) return;
      //Notice that the GoBack Button that we will insert, will only show the children of btn in the sideBar: it will not call showChildButonsOrPrayers() passing btn to it as a parameter. Instead, it will call a function that will show its children in the SideBar

      if (btn.parentBtn === btnMainMenu) return; //If the parent btn is btnMainMenu, the goBackButton will bring us to the main menu any way, so no need for it

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
      if (!btn.parentBtn) return; //We will insert a "Go To Main Menu" button only if btn has a parent btn (if the btn has a parentBtn it means that btn is a children of another button and is not one of the 'Main Menu' list of buttons. The user may need to return directly to the main menu instead to going to the previous menu)

      if ([btnMainMenu, btnGoToPreviousMenu].includes(btn)) return; //Obviously, we will not insert 'Go To Main Menu' Button if the btn is it self btnMain. We also do not insert 'Go To Main Menu' when the GoBack button is clicked because it will be inserted by the button that will passed to showChildButtonsOrPrayers() when called

      if (btnsContainer.querySelector('#' + btnMainMenu.btnID)) btnsContainer.querySelector('#' + btnMainMenu.btnID).remove(); //If there is already a btnMainMenu in the btnsContainer, we will remove it

      mainMenuHtml = createHtmlBtn({
        btn: btnMainMenu,
        btnsContainer: btnsContainer,
        btnClass: cssClass,
        backGroundImage: btnsContainer === sideBarBtnsContainer ? undefined : btnMainMenu.backGroundImage,
      });
    })();
    return [goBackHtml, mainMenuHtml]
  };

  async function showSlidesInPresentationMode() {
    if (containerDiv.children[0].classList.contains("mainPageBtns")) return;
    let children = Array.from(
      containerDiv.querySelectorAll(
        ".Expandable, .SlideRow, ." + inlineBtnsContainerClass
      )
    ) as HTMLDivElement[];

    children.forEach((child) => {
      child.classList.add(hidden);
      setSlidesCSS(child);
    }); //!We need to remove all the divs that are empty (some of which are inlineBtns divs that were emptied when the buttons were moved to anohter container). If we do not remove them, they may be given data-same-slide attributes that will interfere with the flow of the slides

    function setSlidesCSS(slideRow: HTMLDivElement) {
      if (!slideRow.classList.contains("SlideRow")) return;
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
    function createNewSlideGroup(slideRow: HTMLDivElement) {
      if (!slideRow) return; //!CAUTION: WE MUST check that slideRow is not undefined. Otherwise, each time countWords(slideRow, sameSideGroup) will be called, it will return an empty array, which will lead to hasDataRoot being undefined, and createNewSlideGroup(nextSlideRow(slideRow)) be called with an undefined argument, and so on again and again, indefinetly

      let sameSlideGroup: HTMLDivElement[] = [];

      countWords(slideRow, sameSlideGroup);

      sameSlideGroup = sameSlideGroup.filter(
        (div) => div && !isCommentContainer(div)
      ); //We remove any undefined elements as well as all the comments divs in case a comment would have been included

      let hasDataRoot = sameSlideGroup.find((div) => div.dataset.root); //We find the first element in toMerge[] having its data-root attribute set

      if (!hasDataRoot) createNewSlideGroup(nextSlideRow(slideRow)); //If there is no element in sameSlideGroup[] having the data-root attribute, it will be useless to continue. We will hence jumb to the next row since we will not be able to create a group of the rows included in sameSlideGroup

      while (
        sameSlideGroup.length >= 1 &&
        (isTitlesContainer(sameSlideGroup[sameSlideGroup.length - 1]) ||
          sameSlideGroup[sameSlideGroup.length - 1].classList.contains(
            inlineBtnsContainerClass
          ))
      )
        sameSlideGroup.pop(); //If the last  div element in sameSlideGroup[] is a title row or an inlineBtns container, we remove it;

      sameSlideGroup.forEach(
        (div) =>
        (div.dataset.sameSlide =
          hasDataRoot.dataset.root + children.indexOf(hasDataRoot))
      ); //We give each slideRow in toMerge[] a data-sameSlide attribute equal to the data-root attribute of the first element having a data-root attribute.

      if (sameSlideGroup.length >= 1)
        createNewSlideGroup(
          nextSlideRow(sameSlideGroup[sameSlideGroup.length - 1])
        );
      else createNewSlideGroup(nextSlideRow(slideRow));
    }

    /**
     * Cournts the letters in the innerHTML of a group of divs added to a the sameSlideGroup[] array. If the innerHTML does not exceed the countMax, it adds the next div to the sameSlideGroup[] array until the maxCount is reached or exceeded
     * @param {HTMLDivElement} slideRow
     * @param {HTMLDivElement[]} sameSlide
     */
    function countWords(slideRow: HTMLDivElement, sameSlide) {
      if (!slideRow) return sameSlide; //We never count the words in an 'Expandable' element
      let countMax: number = 1850;

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

      let inlineBtns: number = sameSlide.filter((div) =>
        div.classList.contains(inlineBtnsContainerClass)
      ).length; //We count all the inlineBtns elements in sameSlideGroup[]

      let maximum = countMax * (1 - (6 / 100) * inlineBtns); //We take into account the number of inlineBtns included in the sameSlideGroup because they take space in the slide, which reduces the number of words/letters that the slide can include

      if (countInnerHTML(sameSlide) > maximum) {
        sameSlide.pop(); //if the number of letters exceeds the maximum we remove the last slide  added to sameSlideGroup[]
        return;
      }

      countWords(nextSlideRow(slideRow), sameSlide);
    }

    function nextSlideRow(currentSlideRow: HTMLDivElement): HTMLDivElement {
      if (!currentSlideRow) return;

      let next = currentSlideRow.nextElementSibling as HTMLDivElement;

      if (next && (next.children.length < 1 || isCommentContainer(next)))
        return nextSlideRow(next); //We escape comments
      else if (next && next.classList.contains("Expandable"))
        createNewSlideGroup(next.children[0] as HTMLDivElement);
      else if (
        !next &&
        currentSlideRow.parentElement &&
        currentSlideRow.parentElement.classList.contains("Expandable")
      )
        return currentSlideRow.parentElement.nextElementSibling as HTMLDivElement;
      else return next;
    }

    function countInnerHTML(sameSlideGroup: HTMLDivElement[]): number {
      let count: number = 0;
      sameSlideGroup.forEach((child) => {
        if (!child.classList.contains(inlineBtnsContainerClass))
          count += child.innerHTML.length;
      });
      return count;
    }

    function changeRightSideBarShortCutsOnClick() {
      return;
      Array.from(
        sideBarTitlesContainer.children as HTMLCollectionOf<HTMLButtonElement>
      ).forEach((btn) => {
        btn.classList.remove(hidden);

        btn.addEventListener("click", onClick);
        function onClick() {
          let target = Array.from(containerDiv.children).find(
            (child: HTMLDivElement) =>
              child.classList.contains("SlideRow") &&
              child.id === btn.dataset.group &&
              child.dataset.sameSlide
          ) as HTMLDivElement;
          console.log("target = ", target.dataset.root);
          if (!target) return console.log("target was not found ");
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
      let hasSameSlide = Array.from(containerDiv.children).find(
        (child: HTMLDivElement) => child.dataset.sameSlide
      ) as HTMLDivElement;
      if (hasSameSlide) showOrHideSlide(true, hasSameSlide.dataset.sameSlide);
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
function showOrHideSlide(
  show: boolean,
  dataSameSlide?: string
): HTMLDivElement | void {
  let slide: HTMLDivElement;
  if (show && dataSameSlide) {
    return buildSlideFromDataSameSlideGroup(dataSameSlide);
  } else if (!show) {
    if (dataSameSlide)
      slide = Array.from(containerDiv.children).find(
        (child) => child.id === dataSameSlide
      ) as HTMLDivElement;
    //!We could not perform a querySelector because the format of the id contains characters that are not allowed in querySelector.
    else slide = containerDiv.querySelector(".Slide");

    if (slide) slide.remove();
  }

  /**
   * Retrieves and returns the div elements having the same data-same-slide attribute
   * @param {string} dataSameSlide - the value of the data-same-slide attribute by which the divs will be filtered and retrieved
   * @param {HTMLElement} container - the html container that will be filtered while looking for the div elements with the same data-same-slide value
   * @return {HTMLDivElement[]} an array of the div elements retrieved
   */
  function buildSlideFromDataSameSlideGroup(
    dataSameSlide: string
  ): HTMLDivElement {
    let sameSlide = Array.from(containerDiv.children).filter(
      (div: HTMLDivElement) =>
        div.dataset.sameSlide &&
        div.dataset.sameSlide === dataSameSlide &&
        !isCommentContainer(div)
    );

    if (!sameSlide || sameSlide.length < 1) return;

    let lastActor: Actor = getLastActor(); //This is the actor of the last element in the currently displayed slide (if any)

    let slide = document.createElement("div");
    slide.classList.add("Slide");
    slide.id = dataSameSlide;
    sameSlide.forEach((div) => {
      let clone = div.cloneNode(true) as HTMLDivElement;
      if (div.classList.contains(inlineBtnsContainerClass))
        //!The cloneNode() methods does not clone the event listners of an element. There is no way to retrieve these events by javascript. We will hence add a data-original-btn-id attribute in which we will store the id of the orignal button, in order to be able to retrieve it later and, if needed, mimic its 'onclick' action
        Array.from(clone.children).forEach(
          (child) => (child.id = "Clone_" + child.id)
        );
      slide.appendChild(clone);
    });

    let slideChildren = Array.from(slide.children) as HTMLDivElement[];

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
    function getLastActor(): Actor {
      let oldSlide = containerDiv.querySelector(".Slide") as HTMLDivElement;
      if (!oldSlide) return;
      return getActor(
        oldSlide.children[oldSlide.children.length - 1] as HTMLDivElement
      );
    }

    function addActorToSlide(slideChild: HTMLDivElement, lastActor: Actor) {
      let actor = getActor(slideChild);
      if (!actor) return;
      if (
        (slideChildren.indexOf(slideChild) > 0 &&
          actor ===
          getActor(slideChildren[slideChildren.indexOf(slideChild) - 1])) ||
        (lastActor &&
          slideChildren.indexOf(slideChild) === 0 &&
          actor === lastActor) ||
        (lastActor &&
          slideChildren.indexOf(slideChild) === 1 &&
          isTitlesContainer(slideChildren[0]) &&
          actor === lastActor)
      )
        return;

      Array.from(slideChild.children).forEach((parag: HTMLParagraphElement) => {
        let label: string = actor[parag.lang.toUpperCase()];
        if (!label) label = actor[defaultLanguage];
        if (!label) return;
        parag.innerHTML =
          '<span class="actorSpan">' +
          label +
          ": </span>" +
          '<span class="textSpan">' +
          parag.innerHTML +
          "</span>";
      });
    }

    function getActor(child: HTMLDivElement): Actor {
      if (!child) return undefined;
      return actors.find((actor) => child.classList.contains(actor.EN));
    }

    function changeInlineBtnsOnClick() {
      let inlineBtns = slideChildren.filter((child) =>
        child.classList.contains(inlineBtnsContainerClass)
      ) as HTMLDivElement[];
      if (inlineBtns.length < 1) return console.log("inlineBtns is empty");

      (function expandables() {
        let expandBtnsContainer = inlineBtns.filter(
          (container) =>
            container.children.length > 0 &&
            container.children[0].classList.contains("expand")
        );

        changeBtnOnClick(expandBtnsContainer, onClickFun);

        function onClickFun(btn: HTMLElement) {
          let container = containerDiv.querySelector(
            "#" + btn.id.split("Clone_")[1] + "Expandable"
          );
          if (!container)
            return console.log("could not find the expandable container");

          let dataSameSlide: string = Array.from(
            container.children as HTMLCollectionOf<HTMLDivElement>
          ).find((child) => child.dataset.sameSlide).dataset.sameSlide;
          let slide = showOrHideSlide(true, dataSameSlide);
          if (slide) slide.dataset.isExpandable = container.id;
        }
      })();

      (function redirectToAnotherMass() {
        let redirectToBtnsContainer = inlineBtns.filter(
          (container) =>
            container.children.length > 0 &&
            container.children[0].id.startsWith("Clone_GoTo_")
        );
        console.log("redirectTo = ", redirectToBtnsContainer);

        changeBtnOnClick(redirectToBtnsContainer, onClickFun);

        function onClickFun(btn: HTMLElement) {
          let originalBtn: HTMLDivElement = Array.from(
            containerDiv.querySelectorAll(
              "." + inlineBtnClass
            ) as NodeListOf<HTMLDivElement>
          ).find((childBtn) => childBtn.id === btn.id.split("Clone_")[1]);

          if (!originalBtn)
            return console.log("could not find the original button");

          originalBtn.click();
          let children = Array.from(
            containerDiv.children as HTMLCollectionOf<HTMLDivElement>
          ); //!children must be defined after orginalBtn.click() is called otherwise dataSameSlide will get is value from the children of containerDiv as they were before originalBtn.click() is called

          let dataRoot = btn.id.split("From_")[1];
          let dataSameSlide: string = children.find(
            (child) =>
              child.dataset.root &&
              child.dataset.root === dataRoot &&
              child.dataset.sameSlide
          ).dataset.sameSlide;

          showOrHideSlide(true, dataSameSlide);
        }
      })();
      (function MasterBtnMultipleChoices() {
        let masterBtnContainers = inlineBtns.filter(
          (container) =>
            container.children.length > 0 &&
            container.classList.contains("masterBtnDiv")
        );
        console.log("masterBtnContainers = ", masterBtnContainers);

        changeBtnOnClick(masterBtnContainers, onClickFun);

        function onClickFun(btn: HTMLElement) {
          let originalBtn: HTMLDivElement = Array.from(
            containerDiv.querySelectorAll(
              "." + inlineBtnClass
            ) as NodeListOf<HTMLDivElement>
          ).find((childBtn) => childBtn.id === btn.id.split("Clone_")[1]);

          if (!originalBtn)
            return console.log("could not find the original button");

          originalBtn.click();

          addEventListenersToPannelBtns();

          function addEventListenersToPannelBtns() {
            let pannelBtns = Array.from(
              expandableBtnsPannel.querySelectorAll(".multipleChoicePrayersBtn")
            ) as HTMLButtonElement[];
            if (pannelBtns.length < 1)
              return console.log("No buttons in the pannel");
            pannelBtns.forEach((childBtn) =>
              childBtn.addEventListener("click", showOptionalPrayer)
            );

            let btnNext: HTMLButtonElement =
              expandableBtnsPannel.querySelector("#btnNext");

            if (btnNext)
              btnNext.addEventListener("click", () =>
                addEventListenersToPannelBtns()
              );
          }

          function showOptionalPrayer() {
            let children = Array.from(
              containerDiv.querySelectorAll("div[data-optional-prayer]")
            ) as HTMLDivElement[];

            children = children.filter(
              (child) =>
                child.dataset.optionalPrayer ===
                originalBtn.dataset.displayedOptionalPrayer
            );

            if (children.length < 1)
              return console.log("no option prayer is displayed");

            children.forEach(
              (child) =>
              (child.dataset.sameSlide =
                child.dataset.root +
                Array.from(containerDiv.children).indexOf(children[0]))
            );

            showOrHideSlide(true, children[0].dataset.sameSlide);
          }
        }
      })();

      function changeBtnOnClick(
        containers: HTMLDivElement[],
        onClickFun: Function
      ) {
        if (containers.length < 1)
          return console.log("Couldn't find any btns containers");
        containers.forEach((container) => {
          let btns = Array.from(container.children) as HTMLElement[];
          btns.forEach((btn) =>
            btn.addEventListener("click", () => onClickFun(btn))
          );
        });
      }
    }
  }
}

/**
 * Appends the settings button to the right side bar
 */
function addSettingsButton() {
  if (sideBarBtnsContainer.querySelector("#settings")) return;//If a settings button is already included in the rightSideBar menu, we will not add it again

  let settingsBtn: HTMLElement;

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
function getEditModeButton(): Button {
  return new Button({
    btnID: "btnEditMode",
    label: {
      AR: "تعديل النص",
      FR: "Enter Editing Mode",
      EN: "Enter Editing Mode",
    },
    onClick: () => {
      if (document.getElementById("selectArray")) return; //If a select element is already appended, we return
      //@ts-ignore
      if (!console.save) addConsoleSaveMethod(console); //We are adding a save method to the console object
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
      let select = document.createElement("select"),
        option: HTMLOptionElement;
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
      select.addEventListener("change", () =>
        startEditingMode({ select: select })
      );
    },
  });
}

/**
 * Returns an html button element showing a 'Go Back' button. When clicked, this button passes the goTo button or inline button to showchildButtonsOrPrayers(), as if we had clicked on the goTo button
 * @param {Button} goTo - a button that, when the user clicks the 'Go Back' html button element generated by the function, calls showchildButtonsOrPrayers(goTo) thus simulating the action of clicking on the goTo button (its children, inlineBtns, prayers, etc., will be displayed)
 * @param {HTMLElement} btnsDiv - the html element to which the html element button created and returned by the function, will be appended
 * @returns {Promise<HTMLElement>} - when resolved, the function returns the html button element it has created and appended to div
 */
async function createGoBackBtn(
  goTo: Button, //This is the parentBtn that the GoBack button will navigate to (by showing its children)
  btnsDiv: HTMLElement,
  cssClass: string
) {
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

      if (btnsDiv === sideBarBtnsContainer) addSettingsButton();
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
function createFakeAnchor(id: string) {
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
function createHtmlBtn(args: {
  btn: Button;
  btnsContainer: HTMLElement;
  btnClass?: string;
  backGroundImage?: string;
  clear?: boolean;
  onClick?: Function;
}): HTMLElement {
  if (!args.btn || !args.btn.label) {
    console.log("The button is either undefined, or has no lable");
    return;
  }
  if (!args.btnsContainer) return;
  if (!args.clear) args.clear = true;

  let newBtn: HTMLButtonElement = document.createElement("button");

  args.btnClass
    ? newBtn.classList.add(args.btnClass)
    : newBtn.classList.add(args.btn.cssClass);

  if (args.backGroundImage) newBtn.style.backgroundImage = args.backGroundImage;

  newBtn.id = args.btn.btnID;

  //Adding the labels to the button
  if (args.btn.label[defaultLanguage])
    editBtnInnerText(args.btn.label[defaultLanguage], defaultLanguage);

  /*   if (args.btn.label[foreingLanguage])
      editBtnInnerText(args.btn.label[foreingLanguage], foreingLanguage); */

  args.btnsContainer.appendChild(newBtn);

  if (args.onClick) newBtn.onclick = (event) => {
    event.preventDefault;
    args.onClick();
  }
  else newBtn.onclick = (event) => {
    event.preventDefault;
    showChildButtonsOrPrayers(args.btn, args.clear)
  }; //If no onClick parameter/argument is passed to createBtn(), and the btn has any of the following properties: children/prayers/onClick or inlinBtns, we set the onClick parameter to a function passing the btn to showChildButtonsOrPrayers

  function editBtnInnerText(text: string, btnClass?: string) {
    if (!text) return;
    let btnLable = document.createElement("p");
    btnLable.innerText = text;
    btnLable.classList.add("btnText");
    if (btnClass) btnLable.classList.add(btnClass);
    newBtn.appendChild(btnLable);
  }
  return newBtn;
}

/** */
function PWA() {
  /** */
  function getPWADisplayMode() {
    const isStandalone = window.matchMedia(
      "(display-mode: standalone)"
    ).matches;
    if (document.referrer.startsWith("android-app://")) {
      return "twa";
      //@ts-ignore
    } else if (navigator.standalone || isStandalone) {
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
        } else if (registration.waiting) {
          console.log("Service worker installed");
        } else if (registration.active) {
          console.log("Service worker active");
        }
      } catch (error) {
        console.error(`Registration failed with ${error}`);
      }
    }
  };
}

/**
 * returns a string[][], each string[] element includes 2 elements: the current coptic date (as as string formatted like "DDMM") and the corresponding readings date if any (also formatted as "DDMM").
 * @returns {string[][]}
 */
function getCopticReadingsDates(): string[][] {
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
  if (
    !leftSideBar.classList.contains(hidden) &&
    rightSideBar.classList.contains(hidden)
  ) {
    closeSideBar(leftSideBar);
  } else if (
    !rightSideBar.classList.contains(hidden) &&
    leftSideBar.classList.contains(hidden)
  ) {
    closeSideBar(rightSideBar);
  } else if (
    leftSideBar.classList.contains(hidden) &&
    leftSideBar.classList.contains(hidden)
  ) {
    openSideBar(leftSideBar);
  }
}

/**
 * Opens the side bar by setting its width to a given value
 * @param {HTMLElement} sideBar - the html element representing the side bar that needs to be opened
 */
async function openSideBar(sideBar: HTMLElement) {
  if (sideBar.querySelector('#sideBarBtns').children.length < 1) return;
  sideBar.classList.remove(hidden);
}

/**
 * Removes a script (found by its id), and reloads it by appending it to the body of the document
 *@param {string[]} scriptIDs - the ids if the scripts that will be removed and reloaded as child of the body
 */
function reloadScripts(scriptIDs: string[], src?: string, type: string = 'text/javascript', msg?: string) {
  let old: HTMLScriptElement, copy: HTMLScriptElement;
  scriptIDs
    .forEach((id) => {
      old = document.getElementById(id) as HTMLScriptElement;
      src = './Build/modules/Declare' + id + '.js';
      copy = document.createElement("script");
      copy.id = old?.id || id;
      copy.src = old?.src || src;
      copy.type = old?.type || type;
      old?.remove();
      copy.onload = () => {
        if (msg) alert(msg)
        if (id.includes('PrayersArray'))
          populatePrayersArrays();
      }
      document.getElementsByTagName("body")[0]?.appendChild(copy);

    });
}

/**
 * Closes the side bar passed to it by setting its width to 0px
 * @param {HTMLElement} sideBar - the html element representing the side bar to be closed
 */
async function closeSideBar(sideBar: HTMLElement) {
  sideBar.classList.add(hidden);
}
/**
 * Detects whether the user swiped his fingers on the screen, and opens or closes teh right or left side bars accordingly
 */
function DetectFingerSwipe(): string {
  let direction: string;
  //Add finger swipe event
  let xDown = null;
  let yDown = null;
  document.addEventListener("touchstart", handleTouchStart, false);
  document.addEventListener("touchmove", handleTouchMove, false);

  function handleTouchStart(evt: TouchEvent) {
    const firstTouch: Touch = evt.touches[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
  }

  function handleTouchMove(evt: TouchEvent) {
    if (!expandableBtnsPannel.classList.contains(hidden)) return; //If the expandable pannel is not hidden, it means we entered the settings pannel or we are choosing a prayer from a multiple choices screen. We do not associate any action to the figuer swipe
    evt.preventDefault;
    if (!xDown || !yDown) return;

    let xUp = evt.touches[0].clientX;
    let yUp = evt.touches[0].clientY;

    let xDiff = xDown - xUp;
    let yDiff = yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      /*most significant*/
      if (xDiff > 10) {
        /* right to left swipe */
        direction = "left";
        if (
          !leftSideBar.classList.contains(hidden) &&
          rightSideBar.classList.contains(hidden)
        ) {
          closeSideBar(leftSideBar);
        } else if (
          rightSideBar.classList.contains(hidden) &&
          leftSideBar.classList.contains(hidden)
        ) {
          openSideBar(rightSideBar);
        }
      } else if (xDiff < -10) {
        /* left to right swipe */
        direction = "right";
        if (
          leftSideBar.classList.contains(hidden) &&
          rightSideBar.classList.contains(hidden)
        ) {
          openSideBar(leftSideBar);
        } else if (
          !rightSideBar.classList.contains(hidden) &&
          leftSideBar.classList.contains(hidden)
        ) {
          closeSideBar(rightSideBar);
        }
      }
    } else {
      if (yDiff > 0) {
        /* down swipe */
        direction = "down";
        if (localStorage.displayMode === displayModes[1])
          goToNextOrPreviousSlide(undefined, direction);
      } else {
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
function toggleAmplifyText(target: HTMLElement, myClass: string) {
  if (localStorage.displayMode === displayModes[1]) {
    //If we are in the "Presentation" Mode, we will not amplify or reduce the text, we will open or close the left side bar
    toggleSideBars();
    return;
  }
  let amplified: [[string, boolean]] = JSON.parse(localStorage.textAmplified);

  Array.from(
    containerDiv.querySelectorAll("P") as NodeListOf<HTMLParagraphElement>
  )
    .filter((p) => p?.lang === target.lang)
    .forEach((p) => {
      p.classList.toggle(myClass);
      Array.from(p.children).forEach((child) =>
        child.classList.toggle(myClass)
      );
    });
  if (target.classList.contains(myClass)) {
    //it means that the class was added (not removed) when the user dbl clicked
    amplified.filter((el) => el[0] === target.lang.toUpperCase())[0][1] = true;
  } else {
    amplified.filter((el) => el[0] === target.lang.toUpperCase())[0][1] = false;
  }
  localStorage.textAmplified = JSON.stringify(amplified);
}

/**
 * This function is meant to create a side bar on the fly. we are not using it anymore. It will be deprecated.
 * @param id
 * @returns
 */
function buildSideBar(id: string) {
  let sideBar: HTMLElement = document.createElement("div"),
    btnsDiv: HTMLElement = document.createElement("div"),
    colseBtnDiv: HTMLElement = document.createElement("div"),
    a: HTMLElement = document.createElement("a");

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
  } else if (id === "rightSideBar") {
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
function showPrayers(args: {
  prayersSequence?: string[];
  table?: string[][];
  languages: string[];
  container: DocumentFragment | HTMLElement;
  clearContainerDiv?: boolean;
  clearRightSideBar?: boolean;
  position?:
  | {
    el: HTMLElement;
    beforeOrAfter: InsertPosition;
  }
  | HTMLElement
  | DocumentFragment;
}): HTMLDivElement[] {

  if (!args.prayersSequence && !args.table) {
    console.log("You must provide either a prayersSequence, or a table. None of those arguments is provided");
    return [];
  }

  (function setDefaults() {
    //Setting container, and the values for the missing arguments
    if (!args.container) args.container = containerDiv;
    if (!args.position) args.position = args.container;
    if (args.clearContainerDiv !== false) args.clearContainerDiv = true;
    if (args.clearContainerDiv === true) containerDiv.innerHTML = "";
    if (args.clearRightSideBar !== false) args.clearRightSideBar = true;
    if (args.clearRightSideBar === true) sideBarTitlesContainer.innerHTML = ""; //this is the right side bar where the titles are displayed for navigation purposes
  })();

  closeSideBar(leftSideBar);

  let tables: string[][][] = [];

  (function retrievePrayersTables() {
    if (args.table) return tables.push(args.table);//If a table is already passed as argument, we will add this table to tables[]. Otherwise, we will retrieve the tables from args.prayersSequence;
    if (!args.prayersSequence) return console.log("The prayersSequences is missing, we cannot retrieve the tables");
    args.prayersSequence
      .forEach((tableTitle) => {
        if (!tableTitle) return console.log("No tableTitle");

        tables.push(
          findTable(
            tableTitle,
            getTablesArrayFromTitlePrefix(tableTitle)
          ) as string[][]
        );
      });
  })();

  return processTables();

  function processTables(): HTMLDivElement[] {
    //We will return an HTMLDivElement[] of all the divs that will be created from wordTable
    let htmlDivs: HTMLDivElement[] = [];
    let entireTable: string[][],
      dataGroup: string,
      dataRoot: string;

    tables.forEach((table) => {
      if (!table) return;
      entireTable = unfoldPlaceHolders(table);
      dataGroup = splitTitle(entireTable[0][0])[0];//This will not change and will serve to set the dataset.group property of all the div elements that will be created for the table
      entireTable.forEach((row) => htmlDivs.push(processRow(row)));
    });

    return htmlDivs;

    function processRow(row: string[]): HTMLDivElement {
      if (!row) return undefined;
      if (!row[0].startsWith(Prefix.same)) dataRoot = splitTitle(row[0])[0];//Each time a row has its own title (which means the row is the first row in a table), we will set the dataset.root of this row and the following rows to the value of row[0]
      return createHtmlElementForPrayer({
        tblRow: row,
        dataGroup: dataGroup,
        dataRoot: dataRoot,
        languagesArray: args.languages,
        position: args.position,
        container: args.container,
      }) || undefined;
    }

    function unfoldPlaceHolders(table: string[][]): string[][] {
      if (!table.find(row => row[0].startsWith(Prefix.placeHolder))) return table;

      let newTable: string[][] = [...table],
        referencedTable: string[][],
        references = table.filter(row => row[0].startsWith(Prefix.placeHolder));

      references
        .forEach(row => {
          referencedTable = findTable(row[1], getTablesArrayFromTitlePrefix(row[1])) || undefined;

          if (!referencedTable) return;

          if (referencedTable.find(row => row[0].startsWith(Prefix.placeHolder)))
            //If the returned table also has placeHolders amongst its rows, we will unfold the placeHolders.
            referencedTable = unfoldPlaceHolders(referencedTable);

          newTable.splice(newTable.indexOf(row), 1, ...referencedTable);

        });

      return newTable

    };
  };

}

/**
 * Uses the prefix at the begining of the title of a table or a row (i.e. Prefi.something) to find the string[][][] array where a table which title starts with the same prefix, should be found.
 * @param {string} title: the title starting with a prefix, from which the string[][][] is retrived
 * @return {string[][][]} - the array in which a table which title starts with such prefix, should be found
 */
function getTablesArrayFromTitlePrefix(title: string): string[][][] {
  if (!title) return;

  if (title.startsWith(Prefix.HolyWeek) && title.includes('HM') || title.includes('HE')) return ReadingsArrays.GospelNightArrayFR;

  let array: [string, string, Function] = PrayersArraysKeys.find((entry) =>
    title.startsWith(entry[0])
  );
  if (array) return array[2]();
}

/**
 * Returns the name of the array passed to it as an argument
 * @param {string[][][]} array
 */
function getArrayNameFromArray(array: string[][][]): string {
  let keys = PrayersArraysKeys.find((key) => key[2]() === array);
  if (keys) return keys[1];
}

/**
 * This function mainly sets the the CSS gridAreasTemplate, the number of grid columns, and the width of each column for the provided list of html elements. It also other CSS properties (inserts + or - signs for titles, encircules the beam note with a span, etc.)
 * @param {NodeListOf<Element>} Rows - The html elements for which we will set the css. These are usually the div children of containerDiv
 * @param {HTMLElement[]} - the html divs for which we want to set their CSS.
 */
async function setCSS(htmlRows: HTMLElement[]) {
  if (!htmlRows) return;
  if (localStorage.displayMode === displayModes[1]) return;
  if (!htmlRows) return;
  let plusSign = String.fromCharCode(plusCharCode),
    minusSign = String.fromCharCode(plusCharCode + 1);


  htmlRows
    .forEach((row) => {
      if (!row) return;//!Caution: in some scenarios, htmlRows might contain undefined rows. We need to check for this in order to avoid erros
      if (row.children.length === 0) row.classList.add(hidden); //If the row has no children, it means that it is a row created as a name of a table or as a placeholder. We will hide the html element
      //Setting the number of columns and their width for each element having the 'Row' class for each Display Mode
      row.style.gridTemplateColumns = setGridColumnsOrRowsNumber(row);
      //Defining grid areas for each language in order to be able to control the order in which the languages are displayed (Arabic always on the last column from left to right, and Coptic on the first column from left to right)
      row.style.gridTemplateAreas = setGridAreas(row);

      (function addRightBorders() {
        let rowChildren = Array.from(row.children) as HTMLParagraphElement[];
        let gridAreas = row.style.gridTemplateAreas
          .replaceAll('"', "")
          .split(" ");
        if (gridAreas.length <= 1) return;
        gridAreas.forEach((area) => {
          if (gridAreas.indexOf(area) === gridAreas.length - 1) return;
          rowChildren.find(
            (child) => child.lang.toUpperCase() === area
          ).style.borderRightStyle = "groove";
        });
      })();

      if (isTitlesContainer(row)) {
        //This is the div where the titles of the prayer are displayed. We will add an 'on click' listner that will collapse the prayers

        (async function addPlusAndMinusSigns() {
          if (isTitlesContainer(row.nextElementSibling as HTMLElement)) return;

          if (htmlRows
            .filter(div => div?.dataset?.root && div.dataset.root === row.dataset.root).length < 1) return;

          row.role = "button";

          let defLangParag: HTMLParagraphElement = row.querySelector(
            'p[lang="' + defaultLanguage.toLowerCase() + '"]'
          );
          if (!defLangParag) defLangParag = row.lastElementChild as HTMLParagraphElement;
          if (!defLangParag)
            return console.log("no paragraph with lang= " + defaultLanguage);

          if (defLangParag.innerHTML.includes(plusSign + " "))
            defLangParag.innerHTML = defLangParag.innerHTML.replace(
              plusSign + " ",
              ""
            ); //We remove the + sign in the begining (if it exists)

          if (defLangParag.innerHTML.includes(minusSign + " "))
            defLangParag.innerHTML = defLangParag.innerHTML.replace(
              minusSign + " ",
              ""
            ); //!Caution: we need to work with the innerHTML in order to avoid losing the new line or any formatting to the title text when adding the + or - sing. So don't change the innerHTML to innerText or textContent

          if (row.dataset.isCollapsed)
            defLangParag.innerHTML = plusSign + " " + defLangParag.innerHTML; //We add the plus (+) sign at the begining

          if (!row.dataset.isCollapsed)
            defLangParag.innerHTML = minusSign + " " + defLangParag.innerHTML; //We add the minus (-) sig at the begining;
        })();
      }
      let paragraphs = Array.from(row.querySelectorAll("p"));

      if (row.classList.contains("Diacon")) replaceMusicalNoteSign(paragraphs);

      if (
        row.dataset.root
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
        ].find((prefix) => row.dataset.root.startsWith(prefix))
      )
        replaceQuotes(paragraphs); //If the text is one of the "Readings", we replace the quotes signs
      insertSuperScriptTag(paragraphs);
    });
}
/**
 * Replaces the quotes ("") signs in the text by a span containing the relevant quotes sign acording the language
 * @param {HTMLPargraphElement[]} paragraphs  - the html pragraphs containing the quotes signs that need to be replaced
 */
function replaceQuotes(paragraphs: HTMLParagraphElement[]) {
  let splitted: string[];
  paragraphs
    .filter(
      (paragraph) =>
        !paragraph.classList.contains("COP") &&
        !paragraph.classList.contains("CA")
    )
    .forEach((paragraph) => {
      paragraph.innerHTML = paragraph.innerHTML
        .replaceAll(String.fromCharCode(171), "<q>")
        .replaceAll(String.fromCharCode(187), "</q>");

      let matches = Array.from(paragraph.innerHTML.matchAll(/"/g));
      matches.forEach(match => {
        if (matches.indexOf(match) % 2 === 0)
          paragraph.innerHTML = paragraph.innerHTML.replace(match[0], '<q>');
        else paragraph.innerHTML = paragraph.innerHTML.replace(match[0], '</q>')
      });
    });
}
/**
 * Replaces the verses numbers with a superScript span
 * @param {HTMLPargraphElement[]} paragraphs
 */
function insertSuperScriptTag(paragraphs: HTMLParagraphElement[]) {
  //let exp: RegExp = /Sup_\d*_Sup/g

  paragraphs
    .forEach(parag => {
      //We will convert the verses numbers into superscripts
      if (!/Sup_\d*_Sup/.test(parag.innerText)) return;
      //exp.lastIndex = 0; //We reset the last index of the RegExp
      parag.innerHTML =
        parag.innerHTML
          .replaceAll('Sup_', '<sup class="superScript">')
          .replaceAll('_Sup', '</sup>')
      /*
      Array.from(parag.innerHTML.matchAll(exp))
        .forEach(match=> {
          parag.innerHTML = parag.innerHTML.replace(match[0], match[0].replace('Sup_', '<sup class="superScript">')
          .replace('_Sup', '</sup>'))
          
        });
        */
    })
};

/**
 * Returns a string representing the grid areas for an html element with a 'display:grid' property, based on the "lang" attribute of its children
 * @param {HTMLElement} row - an html element having children and each child has a "lang" attribute
 * @returns {string} representing the grid areas based on the "lang" attribute of the html element children
 */
function setGridAreas(row: HTMLElement): string {
  if (!row || row.children.length < 1) return;

  let areas = Array.from(row.children as HTMLCollectionOf<HTMLParagraphElement>).map(child => child.lang.toUpperCase());

  if (
    areas.indexOf('AR') === 0 &&
    !row.classList.contains("Comments") &&
    !row.classList.contains("CommentText")
  ) areas.reverse();  //if the 'AR' is the first language, it means it will be displayed in the first column from left to right. We need to reverse the array in order to have the Arabic language on the last column from left to right


  return '"' + areas.join(" ") + '"'; //we should get a string like ' "AR COP FR" ' (notice that the string marks " in the beginning and the end must appear, otherwise the grid-template-areas value will not be valid)
}

async function applyAmplifiedText(htmlRows: HTMLDivElement[]) {
  if (!htmlRows) return;
  if (localStorage.displayMode === displayModes[1]) return; //We don't amplify the text if we are in the 'Presentation Mode'

  let langs = JSON.parse(localStorage.textAmplified) as [string, boolean][];
  langs = langs.filter((lang) => lang[1] === true);

  htmlRows.forEach((row) => {
    //looping the rows in the htmlRows []
    Array.from(row.children)
      //looping the children of each row (these children are supposedly paragraph elements)
      .forEach((child: HTMLElement) => {
        if (!child.lang) return;
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
function collapseOrExpandText(
  titleRow: HTMLDivElement,
  collapse?: boolean,
  children?: HTMLDivElement[],
  titlesRows?: HTMLDivElement[]
) {
  if (localStorage.displayMode === displayModes[1]) return; //When we are in the 'Presentation' display mode, the titles sibligins are not hidden when we click the title div

  if (!titleRow.dataset.group) return;

  if (collapse === true) {
    titleRow.dataset.isCollapsed = "true";
  } else if (collapse === false) {
    titleRow.dataset.isCollapsed = "";
  } else {
    //In this case we will toggle the isCollapsed status
    if (titleRow.dataset.isCollapsed)
      titleRow.dataset.isCollapsed = "";
    else if (!titleRow.dataset.isCollapsed)
      titleRow.dataset.isCollapsed = "true";
  }
  togglePlusAndMinusSignsForTitles(titleRow);

  if (!children)
    children =
      Array.from(containerDiv.querySelectorAll('div') as NodeListOf<HTMLDivElement>)
        //!We must use querySelectorAll because some elements are not direct children of containerDiv (e.g. they may be nested in an expandable element)
        .filter(div => div?.children?.length > 0) //We exclude rows with no children (those are PlaceHolders)
        .filter(div => div?.dataset?.group)
        .filter(div => div?.dataset?.group === titleRow.dataset.group);

  if (!titlesRows)
    titlesRows = children.filter((div) => isTitlesContainer(div));//Those are all the "Title" divs having the same data-group as titleRow

  let titleRowChildren: HTMLDivElement[];

  titlesRows.length === 1 ?
    titleRowChildren = children.filter(child => child?.dataset?.group === titleRow.dataset.group) //There is only 1 title for the same dataset.group (which mostly the case)
    :
    titleRowChildren = children.filter(child => child?.dataset?.root === titleRow.dataset.root);//There are more than 1 title with the same dataset.group attribute. In this case, each titleRow will only hide the divs sharing the same dataset.root (not the same dataset.group because otherwise, all the other titles and their children will be affected)

  toggleHidden(titleRowChildren);

  if (titlesRows.indexOf(titleRow) === 0) {
    //If there are more than one title sharing the same dataset.group, and titleRow is the first amongst those titles, we will toggle the 'hidden' class for all the other titles.

    titlesRows
      .filter(titleDiv => titleDiv !== titleRow)
      .forEach(titleDiv => collapseOrExpandText(titleDiv, Boolean(titleRow.dataset.isCollapsed), children, titlesRows));
  }

  function toggleHidden(htmlElements: HTMLElement[]) {
    htmlElements
      .forEach(div => {
        if (div === titleRow) return;
        if (titleRow.dataset.isCollapsed && !div.classList.contains(hidden))
          div.classList.add(hidden);
        else if (div.classList.contains(hidden))
          div.classList.remove(hidden)
      });
  };
}

/**
 * Toggels the minus and plus signs in the Title
 * @param {HTMLElement} titleRow - the html element (usually a div with class 'Title') that we wqnt to toggle the minus or plus signs according to whether the text is collapsed or not
 * @returns
 */
async function togglePlusAndMinusSignsForTitles(
  titleRow: HTMLElement,
  plusCode: number = plusCharCode
) {
  if (!titleRow.children) return;
  let parag: HTMLElement;
  parag = Array.from(titleRow.children).filter(
    (child) =>
      child?.innerHTML.startsWith(String.fromCharCode(plusCode)) ||
      child?.innerHTML.startsWith(String.fromCharCode(plusCode + 1))
  )[0] as HTMLElement;
  if (!parag) return;
  if (!titleRow.dataset.isCollapsed) {
    parag.innerHTML = parag.innerHTML.replace(
      String.fromCharCode(plusCode),
      String.fromCharCode(plusCode + 1)
    );
  } else if (titleRow.dataset.isCollapsed) {
    parag.innerHTML = parag.innerHTML.replace(
      String.fromCharCode(plusCode + 1),
      String.fromCharCode(plusCode)
    );
  }
}

/**
 * Collapses all the tiltes (i.e. all the divs with class 'Title' or 'SubTitle') in the html element passed as argument
 * @param {HTMLElement} container - the html element in which we will collapse all the divs having as class 'Title' or 'SubTitle'
 */
function collapseAllTitles(
  htmlRows: HTMLDivElement[]
) {
  if (!htmlRows || htmlRows.length === 0) return;
  if (localStorage.displayMode === displayModes[1]) return;
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
function selectElementsByDataSetValue(
  container: HTMLElement | DocumentFragment,
  dataSet: string,
  options?: {
    equal?: boolean;
    includes?: boolean;
    startsWith?: boolean;
    endsWith?: boolean;
  },
  dataSetName: string = 'root',
): HTMLDivElement[] {
  dataSetName = [["root", "data-root"], ["group", 'data-group']].find(el => el[0] === dataSetName)[1];

  let children = Array.from(container.querySelectorAll("div")).filter(
    (div) => div?.attributes[dataSetName]
  ) as HTMLDivElement[];
  if (!options) options = { equal: true };
  if (options.equal)
    return children.filter((div) => div?.attributes[dataSetName]?.value === dataSet);
  else if (options.includes)
    return children.filter((div) => div?.attributes[dataSetName]?.value.includes(dataSet));
  else if (options.startsWith)
    return children.filter((div) => div?.attributes[dataSetName]?.value.startsWith(dataSet));
  else if (options.endsWith)
    return children.filter((div) => div?.attributes[dataSetName]?.value.endsWith(dataSet));
}

/**
 *
 * @param {string[][][]} filteredPrayers - An array containing the optional prayers for which we want to display html button elements in order for the user to choose which one to show
 * @param {Button} btn
 * @param {HTMLElement} btnsDiv - The html element in which each prayer will be displayed when the user clicks an inline button representing this prayer
 * @param {Object{AR:string, FR:'string'}} btnLabels - An object containing the labels of the master button that the user will click to show a list of buttons, each representing a prayer in selectedPrayers[]
 * @param {string} masterBtnID - The id of the master button
 */
async function showMultipleChoicePrayersButton(args: {
  filteredPrayers: string[][][];
  languages: string[];
  btnLabels: typeBtnLabel;
  masterBtnID: string;
  masterBtnDiv?: HTMLElement;
  anchor?: HTMLElement;
}) {
  if (!args.anchor) console.log("anchor missing");
  if (!args.masterBtnDiv && args.anchor) {
    args.masterBtnDiv = document.createElement("div"); //a new element to which the inline buttons elements will be appended
    args.anchor.insertAdjacentElement("afterend", args.masterBtnDiv); //we insert the div after the insertion position
  }

  (async function createMasterBtn() {
    let btn: Button = new Button({
      btnID: args.masterBtnID,
      label: args.btnLabels,
      children: await createBtnsForPrayers(), //The inlineBtns are not added immediately, they are added later by createInlineBtns() below
      pursue: false, //!CAUTION: we must keep it false in order to stop the showChildButtonsOrPrayers() from continuing the execution after calling the onClick() property of the master button. Otherwise, this will show again the inlineButtons of the master button
      cssClass: inlineBtnClass,
      onClick: () => {
        let groupOfNumber: number = 4;
        //We show the inlineBtnsDiv (bringing it in front of the containerDiv by giving it a zIndex = 3)
        showExpandableBtnsPannel(args.masterBtnID, true);
        //When the prayersMasterBtn is clicked, it will create a new div element to which it will append html buttons element for each inlineBtn in its inlineBtns[] property
        let newDiv = document.createElement("div");
        newDiv.id = args.masterBtnID + "Container";
        //Customizing the style of newDiv
        newDiv.classList.add(inlineBtnsContainerClass);
        //We set the gridTemplateColumns of newDiv to a grid of 3 columns. The inline buttons will be displayed in rows of 3 inline buttons each
        newDiv.style.gridTemplateColumns = setGridColumnsOrRowsNumber(
          newDiv,
          undefined,
          2
        );

        //We append newDiv  to inlineBtnsDiv before appending the 'next' button, in order for the "next" html button to appear at the buttom of the inlineBtnsDiv. Notice that inlineBtnsDiv is a div having a 'fixed' position, a z-index = 3 (set by the showInlineBtns() function that we called). It hence remains visible in front of, and hides the other page's html elements in the containerDiv
        expandableBtnsPannel.appendChild(newDiv);

        expandableBtnsPannel.style.borderRadius = "10px";
        let startAt: number = 0;
        //We call showGroupOfSisxPrayers() starting at inlineBtns[0]
        showGroupOfNumberOfPrayers(btn, startAt, newDiv, groupOfNumber);
      },
    });

    (function createMasterBtnHtml() {//Creating an html button element for prayersMasterBtn and displaying it in btnsDiv (which is an html element passed to the function)
      createHtmlBtn({
        btn: btn,
        btnsContainer: args.masterBtnDiv,
        btnClass: btn.cssClass,
        clear: false,
        onClick: btn.onClick,
      });
      args.masterBtnDiv.classList.add(inlineBtnsContainerClass);
      args.masterBtnDiv.classList.add("masterBtnDiv");
      args.masterBtnDiv.style.gridTemplateColumns = "100%"
        ;
    })();
    return btn
  })();

  /**
   * Shows a group of html buttons, each button shows a prayer. A button next permits to navigate through the list of html buttons
   */
  function showGroupOfNumberOfPrayers(
    masterBtn: Button,
    startAt: number,
    btnsDiv: HTMLDivElement,
    groupOfNumber: number
  ) {
    let childBtn: Button;

    (function createHtmlButtonNext() {
      if (masterBtn.children.length <= groupOfNumber) return; //We don't create next button if the nubmer of optional prayers is less or equal to the defined number of prayers to be displayed each time
      let next: Button = new Button({
        btnID: "btnNext",
        label: { AR: "التالي", FR: "Suivants" },
        cssClass: inlineBtnClass,
      });

      //if the number of prayers is > than the groupOfNumber AND the remaining prayers are >0 then we show the next button
      if (masterBtn.children.length - startAt > groupOfNumber) {
        //We create the "next" Button only if there is more than 6 inlineBtns in the prayersBtn.inlineBtns[] property
        next.onClick = () => btnNextOnClick(true);
      } else if (masterBtn.children.length - startAt <= groupOfNumber) {
        next.label.AR = "عودة";
        next.label.FR = "Retour";
        next.onClick = () => btnNextOnClick(false);
      }

      if (!next.onClick) return; //If no onClick function was assigned to next, we do not create the next button
      createHtmlBtn({
        btn: next,
        btnsContainer: expandableBtnsPannel,
        btnClass: next.cssClass,
        clear: false,
        onClick: next.onClick,
      }); //notice that we are appending next to inlineBtnsDiv directly not to newDiv (because newDiv has a display = 'grid' of 2 columns. If we append to it, 'next' button will be placed in the 1st cell of the last row. It will not be centered). Notice also that we are setting the 'clear' argument of createBtn() to false in order to prevent removing the 'Go Back' button when 'next' is passed to showchildButtonsOrPrayers()

      function btnNextOnClick(forward: boolean = true) {
        //When next is clicked, we remove all the html buttons displayed in newDiv (we empty newDiv)
        btnsDiv.innerHTML = "";
        //We then remove the "next" html button itself (the "next" button is appended to inlineBtnsDiv directly not to newDiv)
        expandableBtnsPannel.querySelector("#" + next.btnID).remove();
        //We set the starting index for the next group of inline buttons
        if (forward) startAt += groupOfNumber;
        else startAt = 0;

        //We call showGroupOfSixPrayers() with the new startAt index
        showGroupOfNumberOfPrayers(masterBtn, startAt, btnsDiv, groupOfNumber);
      }
    })();

    (function createPrayersHtmlButtons() {
      for (
        let n = startAt;
        n < startAt + groupOfNumber && n < masterBtn.children.length;
        n++
      ) {
        //We create html buttons for the 1st 6 inline buttons and append them to newDiv
        childBtn = masterBtn.children[n];
        if (!foreingLanguage && !childBtn.label[defaultLanguage]) return;//If no foreign language has been set by the user, and the prayer is not availble in the defaultLanguage (we check this by seeing if there is a label in this language), we will not create the btn
        if (!childBtn.label[defaultLanguage] && !childBtn.label[foreingLanguage]) return; //Also if a foreign language has been set by the user, but the prayer is not availble in neither the defaultLanguage  nor the default language (we check this by seeing if there is a label in each language), we will not create the btn
        createHtmlBtn({
          btn: childBtn,
          btnsContainer: btnsDiv,
          btnClass: childBtn.cssClass,
          clear: false,
          onClick: childBtn.onClick,
        });
      }
    })();
  };


  /**
   *Creates a new Button for each optional prayer
   @return {Promise<Button[]>}
   */
  async function createBtnsForPrayers(): Promise<Button[]> {
    let btns: Button[];
    btns = args.filteredPrayers.map((table) => {
      //for each string[][][] representing a table in the Word document from which the text was extracted, we create an inlineButton to display the text of the table
      if (table.length === 0) return;
      let title = splitTitle(table[0][0])[0];
      let btn = new Button({
        btnID: title, //prayerTable[0] is the 1st row, and prayerTable[0][0] is the 1st element, which represents the title of the table + the cssClass preceded by "&C="
        label: {
          AR: table[0][args.languages?.indexOf('AR') + 1], //prayerTable[0] is the first row of the Word table from which the text of the prayer was retrieved. The 1st element of each row contains  the title of the prayer (i.e. the title of the table) + the CSS class of the row, preceded by "&C=". We look for the Arabic title by the index of 'AR' in the btn.languages property. We add 1 to the index because the prayerTable[0][0] is the title of the table as mentioned before
          FR: table[0][args.languages?.indexOf('FR') + 1], //same logic and comment as above
        },
        languages: args.languages, //we keep the languages of the btn since the fraction prayers are retrieved from a table having the same number of columns and same order for the languages
        cssClass: "multipleChoicePrayersBtn",
        onClick: () => btnOnClick(btn, title),
      });
      return btn;
    });

    if (foreingLanguage)
      btns
        .filter(btn => !btn?.label[defaultLanguage] && btn.label[foreingLanguage])//For any button which prayer is not available in the defaultLanguage, but is available in the foreignLanguage, we will set its defaultLanguage label to be equal to its foreignLanguage lable. We do this, because any button that doesn't have a defaulLangauge label will be excluded from the btns array that the function will return
        .map(btn => {
          btn.label[defaultLanguage] = btn.label[foreingLanguage];
          btns.splice(btns.indexOf(btn), 1);//We remove the button from btns array, and will push it to the array later in order to move it to the end
          return btn
        })
        .forEach(btn => btns.push(btn));

    return btns.filter(btn => btn?.label[defaultLanguage]);//!We return only the btns having a lable in the defaultLanguage

    function btnOnClick(btn: Button, title: string) {
      let table = findTable(title, getTablesArrayFromTitlePrefix(title)) || undefined
      console.log(title);
      let container = document.createElement('div');
      if (!table) return;
      let masterBtn: HTMLButtonElement = (
        Array.from(
          containerDiv.querySelectorAll("." + inlineBtnClass)
        ) as HTMLButtonElement[]
      ).find((child) => child.id === args.masterBtnID);
      //When the prayer button is clicked, we empty and hide the inlineBtnsDiv
      hideExpandableButtonsPannel();

      let shown =
        Array.from(
          containerDiv.children as HTMLCollectionOf<HTMLDivElement>
        )
          .find(
            (div) =>
              div.dataset.optionalPrayer &&
              div.dataset.optionalPrayer === masterBtn.dataset.shown
          )

      if (shown) shown.remove();

      //We call showPrayers and pass inlinBtn to it in order to display the fraction prayer
      let createdElements = showPrayers({
        table: table,
        languages: btn.languages,
        container: container,
        clearContainerDiv: false,
        clearRightSideBar: false,
      }) || undefined;

      if (!createdElements) return;

      container.dataset.optionalPrayer = title;
      masterBtn.dataset.shown = title;
      args.masterBtnDiv.insertAdjacentElement('afterend', container);


      //We format the grid template of the newly added divs
      setCSS(createdElements);
      //We apply the amplification of text
      applyAmplifiedText(createdElements);


      //We scroll to the button
      createFakeAnchor(args.masterBtnID);
    };
  }
}


let testArray = [
  [["OKTitle", "exclusive"], ["You are"]],
  [["NoTitle Yes", "admit"], ["You are In"]],
  [["OKTitle", "so on"], ["You are"]],
  [["NoTitle", "so on"], ["You are"]],
  [["OK We got Title", "you fit"], ["You are out"]],
];

function getUniqueValuesFromArray(
  array: (string | string[][])[]
): (string | string[][])[] {
  let tempSet = new Set<string | string[][]>();
  let tempArray: (string | string[][])[] = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      //This is a table not a string. We will add the title of the table to the set
      if (!tempSet.has(array[i][0][0])) {
        tempSet.add(array[i][0][0]);
        tempArray.push(array[i]);
      }
    } else {
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
function findTable(
  tableTitle: string,
  prayersArray: string[][][],
  options: {
    equal?: boolean;
    startsWith?: boolean;
    endsWith?: boolean;
    includes?: boolean;
  } = { equal: true }
): string[][] | void {
  if (!prayersArray) prayersArray = getTablesArrayFromTitlePrefix(tableTitle);
  if (!prayersArray) return console.log("No prayers Array", tableTitle);
  let table: string[][];
  if (tableTitle.includes('/'))
    table = prayersArray.find(
      (tbl) => tbl[0][0] && RegExp(tableTitle).test(splitTitle(tbl[0][0])[0])
    );
  else if (options.equal)
    table = prayersArray.find(
      (tbl) => tbl[0][0] && splitTitle(tbl[0][0])[0] === tableTitle
    );
  else if (options.startsWith)
    table = prayersArray.find(
      (tbl) => splitTitle(tbl[0][0])[0]?.startsWith(tableTitle)
    );
  else if (options.endsWith)
    table = prayersArray.find(
      (tbl) => splitTitle(tbl[0][0])[0]?.endsWith(tableTitle)
    );
  else if (options.includes)
    table = prayersArray.find(
      (tbl) => splitTitle(tbl[0][0])[0]?.includes(tableTitle)
    );

  if (!table)
    return console.log(
      "no table with the provided title was found : ",
      tableTitle
    );

  return table;
}
/**
 * Shows the inlineBtnsDiv
 * @param {string} status - a string that is added as a dataset (data-status) to indicated the context in which the inlineBtns div is displayed (settings pannel, optional prayers, etc.)
 * @param {boolean} clear - indicates whether the content of the inlineBtns div should be cleared when shwoInlineBtns is called. Its value is set to 'false' by default
 */
function showExpandableBtnsPannel(status: string, clear: boolean = false) {
  if (clear) expandableBtnsPannel.innerHTML = "";


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
function showSettingsPanel(index?: number) {

  if (index >= 0) return showAddOrRemoveLanguagesBtns();//! since index can be = 0, if we check for !index, it will return false, that's why we check if index>=0 instead of !index

  showExpandableBtnsPannel("settingsPanel", true);
  let btn: HTMLElement;

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
            const isStandalone = window.matchMedia(
              "(display-mode: standalone)"
            ).matches;
            if (document.referrer.startsWith("android-app://")) {
              return "twa";
              //@ts-ignore
            } else if (navigator.standalone || isStandalone) {
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
    let datePicker: HTMLInputElement = createSettingsBtn({
      innerText: '',
      tag: "input",
      btnsContainer: expandableBtnsPannel,
      id: "datePicker",
      type: "date",
      onClick: {
        event: "change",
        fun: () => changeDate(new Date(datePicker.value.toString())),
      },
    }) as HTMLInputElement;
    if (!todayDate) return;
    datePicker.setAttribute("value", todayDate.toString());
    datePicker.setAttribute("min", "1900-01-01");
  })();

  (async function showNextAndPreviousCopticDayButtons() {
    let btnsContainer = createBtnsContainer("showNextCopticDate", {
      AR: "اليوم التالي أو السابق في التقويم القبطي",
      FR: "Aller au jour suivant ou précédant du calendrier copte",
      EN: "Move to the next or previous day of the Coptic calendar",
    });

    let btnLable: typeBtnLabel = {
      AR: 'التالي',
      FR: 'Suivant',
      EN: 'Next',
    }

    createBtn(btnLable, 'nextDay', true);

    btnLable = {
      AR: 'السابق',
      FR: 'Précédent',
      EN: 'Previous',
    }

    createBtn(btnLable, 'previousDay', false);

    function createBtn(lable: typeBtnLabel, id: string, next: boolean) {
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
      }).style.backgroundColor = "saddlebrown";;
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
    }) as HTMLInputElement;
    let dataList: HTMLDataListElement = createDataList();
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
      setFontSize(input.value as string);
    };

    function createDataList(): HTMLDataListElement {
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
  function showAddOrRemoveLanguagesBtns() {

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
      return showLanguagesModal();//! since index can be = 0, if we check for !index, it will return false, that's why we check if index>=0 instead of !index

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
    function setLanguage(lang: string, index: number): string[] | void {
      let userLanguages: string[];
      if (localStorage.userLanguages) userLanguages = JSON.parse(localStorage.userLanguages);
      if (!userLanguages) userLanguages = [];
      if (index > 0 && userLanguages.indexOf(lang) === index)
        //If the language is already defined at the same index, we will set the element at the same index to undefined (i.e., we will desactivate the language and remove it from the list of userLanguages). We never set the default language (i.e. stored[0]) to undefined that's why we exclude the case where index = 0
        userLanguages[index] = undefined;

      else if (index === 0 && userLanguages.indexOf(lang) === index)
        return alert(
          "You cannot not desactivate the default language. You can replace it by choosing another language"
        );

      else if (userLanguages.indexOf(lang) === 0 && index === 1 && userLanguages[index]) {
        //If the language is already set as defaultLanguage (it is set at index 0), and we want to make it the foreign language (index = 1), we check if the value of index 1 (the index of the foreign language) is not undefined. If so, we make the foreign language default language and we replace it with lang
        userLanguages[0] = userLanguages[index];
        userLanguages[index] = lang
      }

      else if (userLanguages.indexOf(lang) === 0 && index === 1 && !userLanguages[index])
        return alert(
          "You must first replace the default language by another language before being able to set it as foreign language"
        );

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

      showChildButtonsOrPrayers(btnMainMenu);
      return userLanguages
    }

    function addLangsBtns(args: {
      btnsContainer: HTMLElement;
      fun: Function;
      langsOptions: string[][];
      index: number;
    }) {
      let newBtn: HTMLElement;
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
      args.btnsContainer.style.gridTemplateColumns = setGridColumnsOrRowsNumber(
        args.btnsContainer,
        3
      );
    }

    function showLanguagesModal() {
      containerDiv.classList.add(hidden);
      let choices: string[][][] = [nonCopticLanguages, nonCopticLanguages, copticLanguages];

      let container = createBtnsContainer("modalContainer", labels[index], 'modalContainer');
      addLabel(index);
      document.getElementById('content').prepend(container);

      function addLabel(i: number) {
        let lang: string = defaultLanguage || 'EN'
        if (!container) return;
        let lable = document.createElement('h3');
        lable.innerText = labels[i][lang];
        container.appendChild(lable)
        lang = null
      };
      return showModal(index);

      function showModal(i: number) {
        let choice = choices[i];
        if (i === 1) choice = choice.filter(l => l[0] !== defaultLanguage);

        choice.map((lang) => {
          return createSettingsBtn({
            tag: "button",
            role: "button",
            btnClass: "settingsBtn",
            innerText: lang[1],
            btnsContainer: container,
            id: "userLang",
            onClick: { event: 'click', fun: () => onClick(lang) },
          });
        });

        function onClick(lang: string[]) {
          let confirmed = confirm(lang[1] + ' will be set as your ' + labels[i].Type);
          if (!confirmed && i < 1)
            return //If the user cancels and the language is the defaultLanguge, we do nothing
          else if (!confirmed && i > 0)
            setLanguage(null, i);
          else
            setLanguage(lang[0], i);

          if (choices[i + 1]) {
            container.innerHTML = '';
            addLabel(i + 1)
            showModal(i + 1)
          }
          else if (defaultLanguage) {
            showDates();//We update the dates boxes because when the defaultLanguage is not set, they display 'undefined' values
            container.remove(); //We remove the btns container
            showChildButtonsOrPrayers(btnMainMenu);
            containerDiv.classList.remove(hidden);
          }
          else if (!defaultLanguage)
            showSettingsPanel(0)
        };

      }

    }
  }

  (async function showExcludeActorButon() {
    let btnsContainer = createBtnsContainer("showOrHideActor", {
      AR: "إظهار أو إخفاء مردات الكاهن أو الشماس أو الشعب",
      FR: "Afficher ou cacher un acteur",
      EN: "Show or hide an actor",
    });
    let userActors: [Actor, boolean][] = JSON.parse(localStorage.showActors);

    userActors.map((actor) => {
      if (['CommentText', 'NoActor'].includes(actor[0].EN)) return;//CommentText will be handled at the same time by the button for 'Comments'

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

      if (!actor[1]) btn.classList.add("langBtnAdd");
    });
    btnsContainer.style.gridTemplateColumns = setGridColumnsOrRowsNumber(
      btnsContainer,
      5
    );
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

              let userActors: [Actor, boolean][] = JSON.parse(localStorage.showActors);

              if (mode === displayModes[2] && localStorage.displayMode === mode)
                //If mode = 'Priest Mode', we set the value of 'Diacon' in the 'showActors' localStorage to false in order to hide all the 'Diacon' response
                userActors.find(actor => actor[0].EN === actors[1].EN)[1] = false;

              else userActors.find(actor => actor[0].EN === actors[1].EN)[1] = true;

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
    btnsContainer.style.gridTemplateColumns = setGridColumnsOrRowsNumber(
      btnsContainer,
      3
    );
  })();

  (async function showEditingModeBtn() {
    if (localStorage.editingMode != "true") return;
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
    btnsContainer.style.gridTemplateColumns = setGridColumnsOrRowsNumber(
      btnsContainer,
      3
    );
  })();

  //Appending colors keys for actors
  (async function addActorsKeys() {
    let btnsContainer = createBtnsContainer("actorsKeys", {
      AR: "مفاتيح الألوان",
      FR: "Clés des couleurs",
      EN: "Colors keys",
    });

    let userActors: Actor[] =
      JSON.parse(localStorage.showActors)
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
    btnsContainer.style.gridTemplateColumns = setGridColumnsOrRowsNumber(
      btnsContainer,
      4
    );
  })();

  (async function addReloadPageBtn() {
    let btnsContainer = createBtnsContainer("enterEditingMode", {
      AR: "تحديث التطبيق",
      FR: "Mettre à jour l'application",
      EN: "Update App",
    });
    expandableBtnsPannel.appendChild(btnsContainer);

    let btnLable: typeBtnLabel = {
      AR: 'تحديث',
      FR: 'Mettre à jour',
      EN: 'Update',
    }

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

  function createBtnsContainer(
    id: string,
    labelText: { AR?: string; FR?: string; EN?: string },
    cssClass: string = 'settingsBtnsContainer'
  ): HTMLDivElement {
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

  function createSettingsBtn(args: {
    tag: string;
    role?: string;
    btnClass?: string;
    innerText: string;
    btnsContainer?: HTMLElement;
    id?: string;
    lang?: string;
    type?: string;
    size?: string;
    backgroundColor?: string;
    onClick?: { event: string; fun: Function };
  }): HTMLElement {

    let btn = document.createElement(args.tag);

    btn.role = args.role || args.tag;

    if (args.innerText) btn.innerHTML = args.innerText;

    if (args.btnClass) btn.classList.add(args.btnClass);

    if (args.id) btn.id = args.id;

    if (args.lang) btn.lang = args.lang.toLowerCase();

    //@ts-ignore
    if (args.type && btn.nodeType) btn.type = args.type;

    //@ts-ignore
    if (args.size) btn.size = args.size;

    if (args.backgroundColor) btn.style.backgroundColor = args.backgroundColor;

    if (args.onClick) {
      btn.addEventListener(args.onClick.event, (e) => {
        e.preventDefault;
        args.onClick.fun();
      });
    }

    if (args.btnsContainer) args.btnsContainer.appendChild(btn);

    return btn;
  }
}

/**
 * Changes the value of the Css variable fSize on the '.Content' html element
 * @param {string} size - the size of the font
 */
function setFontSize(size: string) {
  if (!Number(size)) return;
  let content = document.querySelector(".Content") as HTMLElement;
  content.style.setProperty("--fSize", size);
  localStorage.fontSize = size;
}

/**
 * Sets the number of columns of a "display-grid' html element based on the number of its children.
 * @param {HTMLElement} htmlContainer - the html element for which we want to set the number of columns based on the number of its children
 * @param {number} max - the maximum number of columns that if exceeded, the number will be automatically reduced to a value = reduce. Its default value is 3.
 * @param {number} reduce - the number of columns that will be retained if the number of columns resulting from the number of htmlContainer children is greater than "max"
 */
function setGridColumnsOrRowsNumber(
  htmlContainer: HTMLElement,
  max?: number,
  exact?: number
) {
  let units: number;
  units = htmlContainer.children.length;
  if (max && units > max) units = max;
  else if (exact) units = exact;
  return ((100 / units).toString() + "% ").repeat(units);
}

/**
 * Loops the tables (i.e., the string[][]) of a string[][][] and, for each row (string[]) of each table, it inserts a div adjacent to an html child element to containerDiv
 * @param {string[][][]} tables - an array of arrays, each array represents a table in the Word document from which the text was retrieved
 * @param {string[]} languages - the languages in which the text is available. This is usually the "languages" properety of the button who calls the function
 * @param {{beforeOrAfter:InsertPosition, el: HTMLElement}} position - the position at which the prayers will be inserted, adjacent to an html element (el) in the containerDiv
 * @returns {HTMLElement[]} - an array of all the html div elements created and appended to the containerDiv
 */
function insertPrayersAdjacentToExistingElement(args: {
  tables: string[][][];
  languages?: string[];
  position: { beforeOrAfter: InsertPosition; el: HTMLElement };
  container: HTMLElement | DocumentFragment;
}): HTMLDivElement[][] {
  if (!args.tables) return;
  if (!args.container) args.container = containerDiv;

  return args.tables
    .map((table) => {
      if (!table || table.length < 1) return;//We return an empty array in order to avoid having "void" elements included in the array that will be returned by the function
      return showPrayers({
        table: table,
        position: args.position,
        languages: args.languages || getLanguages(table[0][0]),
        container: args.container,
        clearRightSideBar: false,
        clearContainerDiv: false,
      }) || [];//If showPrayers() returns "void", we replace it with an empty array in order to avoid having "void" elements included in the array that will be returned by the function
    });
}

/**
 * Inserts buttons each of which redirects to a specific part in a given mass

 * @param {Button[]} btns - an array of Button elements for each of which an html element will be created by createBtn() and appended to a newly created div. Each of the html buttons created will, when clicked
 * @param {InsertPosition} position - the position at which the div containing the created html elements for each button, will be inserted compared to the containerDiv child retrieved using the querySelector parameter
 * @param {string} btnsContainerID - the id of the div container to which the html buttons will be appended. This id may be needed to select the div after redirection
 */
async function insertRedirectionButtons(
  btns: Button[],
  position: { beforeOrAfter: InsertPosition; el: HTMLElement },
  btnsContainerID: string
) {
  if (!position.beforeOrAfter) position.beforeOrAfter = "beforebegin";
  let div = document.createElement("div");
  div.id = btnsContainerID;
  div.classList.add(inlineBtnsContainerClass);
  btns.map((btn) =>
    div.appendChild(
      createHtmlBtn({ btn: btn, btnsContainer: div, btnClass: btn.cssClass })
    )
  );
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
  PrayersArrays
    .forEach(a => a.length = 0);//We empty all the sub arrays of PrayersArrayFR
  let array;
  PrayersArrayFR
    .forEach((table) => {
      if (table?.length < 1 || table[0]?.length < 1) return;
      array = PrayersArraysKeys.find(a => table[0][0]?.startsWith(a[0]));
      if (!array) return;
      array[2]().push(table);
    });
  array = null
}
/**
 * Returns the string[] resulting from title.split('&C=')
 * @param {string} title - the string that we need to split
 */
function splitTitle(title): string[] {
  if (!title) return [];
  if (!title.includes("&C=")) return [title, ""];
  return title.split("&C=");
}

/**
 * Hides the current slide, and unhides the next or previous slide based on the value of 'next'
 * @param {boolean} next - If true, the next slide is displayed. If false, the previous one is displayed. Its default value is true.
 * @returns
 */
function showNextOrPreviousSildeInPresentationMode(next: boolean = true) {
  if (localStorage.displayMode !== displayModes[1]) return;

  let children = Array.from(
    containerDiv.querySelectorAll("div[data-same-slide]")
  ) as HTMLDivElement[];

  let currentSlide = containerDiv.querySelector(".Slide") as HTMLDivElement;

  if (!currentSlide)
    return showOrHideSlide(true, children[0].dataset.sameSlide); //If not slide is already displayed, we display the slide built from the 1st data-same-slide child of containerDiv, and return

  let sameSlide = children.filter(
    (div) => div?.dataset?.sameSlide === currentSlide.id
  ); //If a slide is already diplayed, we retrieve all the containerDiv children having the same data-same-slide attribute as the data-same-slide value stored in the currentSlide.id.

  if (sameSlide.length < 1)
    return console.log(
      "We could not find divs having as data-same-slide the id of the currently displayed Slide"
    ); //Noramly, this should not occur

  let nextDiv: HTMLDivElement;

  if (next) selectNextDiv(sameSlide[sameSlide.length - 1]); //We set nextSlide by passing the last element of sameSlide as argument
  if (!next) selectNextDiv(sameSlide[0]); //We set nextSlide by passing the 1st element of sameSlide as argument

  function selectNextDiv(div: HTMLDivElement) {
    if (!div) return console.log("slide is not defined"); //This would occur if nextSlide was set to undefined
    if (next && div.nextElementSibling)
      nextDiv = div.nextElementSibling as HTMLDivElement;
    else if (
      next &&
      div.parentElement &&
      div.parentElement.classList.contains("Expandable")
    )
      nextDiv = div.parentElement.nextElementSibling as HTMLDivElement;
    else if (!next && div.previousElementSibling)
      nextDiv = div.previousElementSibling as HTMLDivElement;
    else if (
      !next &&
      div.parentElement &&
      div.parentElement.classList.contains("Expandable")
    )
      nextDiv = div.parentElement.previousElementSibling as HTMLDivElement;
    else nextDiv = undefined; //!CAUTION: we must set nextSlide to undefined if none of the above cases applies. Otherwise the function will loop infintely

    if (nextDiv && exclude(nextDiv, currentSlide.id)) selectNextDiv(nextDiv);
  }
  if (!nextDiv) return;
  showOrHideSlide(false); //We remove the currently displayed slide
  showOrHideSlide(true, nextDiv.dataset.sameSlide); //We show the new slide

  function exclude(div: HTMLDivElement, currentDataSameSlide: string): boolean {
    if (
      !div.dataset.sameSlide ||
      div.dataset.sameSlide === currentDataSameSlide
    )
      return true;
  }
}

function addKeyDownListnerToElement(
  htmlRow: Document,
  eventName: string,
  direction: string
) {
  if (localStorage.displayMode !== displayModes[1]) return;
  if (!direction)
    htmlRow.addEventListener(eventName, (event: KeyboardEvent) =>
      goToNextOrPreviousSlide(event, direction)
    );
}

function goToNextOrPreviousSlide(event?: KeyboardEvent, direction?: string) {
  if (!event && !direction) return;
  let code: string;
  if (event) code = event.code;
  else if (direction === "up") code = "PageUp"; //next slide
  else if (direction === "down") code = "PageDown"; //previous slide

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
function getDataRootSelector(
  root: string,
  isLike: boolean = false,
  htmlTag: string = "div"
): string {
  if (isLike) return htmlTag + '[data-root*="' + root + '"]';
  else return htmlTag + '[data-root="' + root + '"]';
}

/**
 * Replaces the musical eight note sign with a span that allows to give it a class and hence give it a color
 * @param {number} code - the Char code of the eigth note (or any other character that we want to replace with a span with the same css class)
 * @returns
 */
async function replaceMusicalNoteSign(container: HTMLElement[]) {
  if (!container)
    container = Array.from(
      containerDiv.querySelectorAll("p.Diacon")
    ) as HTMLElement[];
  if (container.length === 0) return;

  let notes: string[] = [
    String.fromCharCode(eighthNoteCode),
    String.fromCharCode(beamedEighthNoteCode),
  ];

  notes.forEach((note) => {
    container.forEach((p: HTMLElement) => {
      if (!p.innerText.includes(note)) return;
      p.innerHTML = p.innerHTML.replaceAll(
        note,
        '<span class="musicalNote">' + note + note + "</span>"
      );
    });
  });
}

/**
 * Converts an group of html div elements each representing a row in the same table (i.e., the group of divs reprsents the entire table), into a string[][] each element represents a row of the table, and each element of each row, represents the text in a given cell of this row
 * @param {HTMLDivElement} htmlRows - the group of html div elements displayed as children of containerDiv, each representing a row of a table, and collectively representing the entire table
 *@returns {string[][]} - an array representing the entire table where each element represents a row of the table (i.e., corresponding to a div element)
 */
function convertHtmlDivElementsIntoArrayTable(
  htmlRows: HTMLDivElement[]
): string[][] {
  let table: string[][] = [],
    title = htmlRows[0].title;
  let text: string;
  htmlRows.forEach((htmlRow) => {
    if (!htmlRow.title || !htmlRow.dataset.root)
      return alert("the row dosen't have title");
    if (htmlRow.dataset.isReference)
      return table.push(Array.from(htmlRow.querySelectorAll('p')).map((p: HTMLParagraphElement) => Prefix.readingRef + p.innerText));
    table.push(
      Array.from(htmlRow.children)
        .map((p: HTMLElement) => {
          text = p.innerText //!This must be the innerText not the textContent nor the innerHTML
          //We replace the quotes in the innerHTML of the paragraph, but we will return the innerText of the paragraph in order to avoid getting <br> or any other html tags in the returned text
          text = replaceHtmlQuotes(text, p.lang); //When the text is displayed, the <quote> elment is replaced with the quotes symbol of the relevant language. We replace the quotes with the html <quote> element
          return text;
        })
    );

    let firstElement: string = title;
    if (htmlRows.indexOf(htmlRow) === 0)
      firstElement = title;//The entire title including the "&C="
    else if (htmlRow.dataset.isPlaceHolder)
      firstElement = Prefix.placeHolder;
    else if (htmlRow.dataset.isPrefixSame || [splitTitle(htmlRow.title)[0], splitTitle(htmlRow.dataset.root)[0]].includes(splitTitle(title)[0]))
      firstElement = Prefix.same + '&C=' + splitTitle(htmlRow.title)[1];

    table[table.length - 1]?.unshift(firstElement);//We add the title string element to the last row of the table that we have just pushed. 
  });
  return table;
}

//compareArrays(ReadingsArrays.SynaxariumArray, SynaxariumArray2);
function compareArrays(sourceArray: string[][][], editedArray: string[][][]) {
  let table: string[][], tblRow: string[];
  for (let i = 0; i < sourceArray.length; i++) {
    table = sourceArray[i];
    for (let row = 0; row < table.length; row++) {
      tblRow = table[row];
      for (let text = 0; text < tblRow.length; text++)
        if (tblRow[text] !== editedArray[i][row][text]) {
          console.log(
            "different rows: \n",
            sourceArray[i][row][text],
            "\n\n",
            editedArray[i][row][text],
            "\n\n"
          );
        }
    }
    if (sourceArray[i][0][0] !== editedArray[i][0][0]) {
      console.log("Original = ", sourceArray[i], " and new = ", editedArray);
    } else {
      console.log("SameTitle");
    }
  }
  if (sourceArray.length !== editedArray.length) {
    console.log(
      "sourceArray length = ",
      sourceArray.length,
      " editedArray length = ",
      editedArray.length
    );
  } else {
    console.log(
      "source Array length = edited Array length = ",
      sourceArray.length
    );
  }
}


/**
 * This function was created in a doc review project to transform captial letters in names into smal letters. It is not used in the app. Will remove it later elsewhere
 */
async function firstLetter() {
  if (!document.getElementById('btnFirstLetter')) await createBtn();

  let st = prompt('Provide the names of the lawyers');

  if (!st) return;

  st =
    st
      .replaceAll(',', ';')
      .replaceAll(' ;', ';')
      .replaceAll(' and ', '; ');

  let names = st.split('; ');

  if (!names || names.length < 1) return alert('We could not retrive the names from the string');

  alert(lowerNames());

  firstLetter();

  function lowerNames() {
    return names
      .map(name =>
        name.split(' ')
          .map(word => returnWord(word)))
      .map(array => array.join(' '))
      .join('; ');
  };
  function returnWord(w) {
    if (!w) return;
    return w[0].toUpperCase()
      + w.toLowerCase().slice(1, w.length)
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
  };

}

/**
 * Checks whether the html element passed as argument, has either the class 'Title', or 'SubTitle' and returns true if this is the case
 * @param {HTMLElement} htmlRow - the hmtl element that we want to check whether it has 'Title' or 'SubTitle' in its classList
 * @return {boolean} returns true if the html element has any of the titel classes
 */
function isTitlesContainer(htmlRow: HTMLElement): boolean {
  return hasClass(htmlRow, ["Title", "SubTitle"]);
}

/**
 * Checks whether the html element passed as argument, has any of the classes passed in the classList[] array. It returns true if this is the case
 * @param {HTMLElement} htmlRow - the hmtl element that we want to check whether it has 'Title' or 'SubTitle' in its classList
 * @param {string[]} classList - a list of the classes that we want to check if the html element includes in its classList
 * @return {boolean} returns true if the html element has any of the titel classes
 */
function hasClass(htmlRow: HTMLElement | Element, classList: string[]) {
  if (!htmlRow) return;
  return (
    classList.filter((className) => htmlRow?.classList.contains(className))
      .length > 0
  );
}

function isInlineBtnsContainer(htmlRow: HTMLElement): boolean {
  if (htmlRow && htmlRow.classList.contains(inlineBtnsContainerClass))
    return true;
  else return false;
}
/**
 * Checks if the html element passed to it as an argument has 'Comments' or 'CommentText' in its classList
 * @param {HTMLDivElement} htmlRow - the html element that we want to check if it has any of the classes related to comments
 */
function isCommentContainer(htmlRow: HTMLDivElement | Element): boolean {
  return hasClass(htmlRow, ["Comments", "CommentText"]);
}

/**
 * Hides all the titles shortcuts for the the html div elements included in the container, from the right side bar
 * @param {HTMLElement} container - the html element containing the title divs which we want to hide their titles shortcuts from the right side Bar
 */
function hideOrShowAllTitlesInAContainer(
  container: HTMLElement,
  hide: boolean = true
) {
  //We hide all the titles from the right side Bar

  Array.from(container.children as HTMLCollectionOf<HTMLDivElement>)
    .filter((child) => isTitlesContainer(child))
    .forEach((child) => hideOrShowTitle(child?.dataset?.group, hide));
}
/**
 * Hides a title shortcut from the right side bar based on the id of the html element passed to it
 * @param {strig} titleGroup - the data-group of the title/titles we want to show or hide
 * @param {boolean} hide - If true, the title will be hidden. If false, the title will be displayed
 */
function hideOrShowTitle(titleGroup: string, hide: boolean) {
  let titles =
    Array.from(sideBarTitlesContainer.children)
      .filter((title: HTMLElement) => title?.dataset?.group === titleGroup);

  if (titles.length < 1) return;

  titles
    .forEach(title => {
      if (hide && !title.classList.contains(hidden))
        title.classList.add(hidden);
      if (!hide && title.classList.contains(hidden))
        title.classList.remove(hidden)
    });
}




/**
 * Sends an XMLHttpRequest
 * @param  {string} apiURL - the API adress to which the request will be sent
 * @param responseDoc
 * @param {string} method - the request method ('GET', 'PUT', 'POST' etc., ) its default value is 'GET'
 */
function sendHttpRequest_(
  apiURL: string,
  method: string = "GET"
): Document | void {
  let request = new XMLHttpRequest();
  request.open(method, apiURL);

  try {
    request.send();
  } catch (error) {
    console.log(error);
  }
  request.onload = async () => {
    if (request.status === 200) {
      return new DOMParser().parseFromString(request.response, "text/html");
    } else {
      console.log("error status text = ", request.statusText);
      return request.statusText;
    }
  };
}

function ReduceArrays(args: {
  arrayName;
  tblFun?: Function;
  rowFun?: Function;
}) {
  let array = eval(args.arrayName) as string[][][];
  loopTables(array, args.rowFun, args.tblFun);
  console.log(array);
  exportToJSFile(
    processArrayTextForJsFile(args.arrayName, array),
    args.arrayName
  );

  function loopTables(
    array: string[][][],
    rowFun: Function,
    tblFun?: Function
  ) {
    array.forEach((tbl) => {
      if (tblFun) tblFun(tbl);
      loopRows(tbl, rowFun, splitTitle(tbl[0][0])[0]);
    });
  }
  function loopRows(tbl: string[][], rowFun: Function, tblTitle: string) {
    tbl.forEach((row) => rowFun(tbl, row, tblTitle));
  }
}
function shortenRowsTitles(tbl: string[][], row: string[], tblTitle: string) {
  //return;
  if (tbl.indexOf(row) === 0) return;
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
  let en: string = 'Lorem ipsum dolor sit amet. Est itaque incidunt ex adipisci consequatur est libero eius eos laboriosam odit. Quo quas facere cum illum dolorem ut voluptate provident ea minima exercitationem ad aspernatur explicabo est internos quia vel pariatur voluptatem? Qui atque aliquam qui numquam voluptatem et recusandae architecto qui sequi exercitationem et enim ipsam. Ea enim omnis non itaque exercitationem sit alias ullam et internos quod? Eos aperiam laboriosam ut dolorum voluptatem nam velit provident.';
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
    Prefix.synaxarium];

  let languages: string[], array: string[][][], keys: [string, string, Function], newArray: string[][][], index: number;
  let lorem: string[][][];//This is the array that contains the english version of our text

  prefixes.forEach(prefix => {
    languages = getLanguages(prefix);//The languages[] of the array

    array = keys[2]();
    lorem = [];

    array.forEach(table => {
      lorem.push([[table[0][0]]]);
      table.forEach(row => lorem[lorem.length - 1].push([en]));
    });//For each table in array, we add a table in lorem having as its first element a string[] row containing the title of the table. We then add a new row for each row in the table and push the English text to it.

    newArray = structuredClone(array);//This is a copy to work with

    newArray.forEach(table => {
      table
        .filter(row =>
          row[0] !== Prefix.placeHolder)
        .forEach(row => {
          row[0].endsWith('&C=Comments')
            ? index = 1
            : index = languages.indexOf('FR') + 1;
          row[index] = lorem[newArray.indexOf(table)][table.indexOf(row) + 1][0];
        });
    });
    console.log(newArray);

  })

}

/**
 * This function is part of an alternative idea consisting of working with an array of html elements instead of an array of text. The idea is to accelerate the lodding of the page by avoiding the creation of divs and paragraphs. The function retruns a string containg the a paragraph element for each text element in each row. This function is par
 */
async function createHtmlArray() {
  if (!confirm('Do you want to create an html elements array?')) return;
  var PrayersArrayHtml = await buildArray();
  console.log('PrayersArrayHtml = ', PrayersArrayHtml);
  testRetrieveTables();

  async function buildArray() {
    let arrayName = 'PrayersArrayFR'
    let array: string[][][] = eval(arrayName);
    let newArray: string[][][] = [];
    let newTable: string[][];
    let newRow: string[];
    let languages = prayersLanguages;
    let langs: string[], className: string, dataRoot: string;
    array.forEach(table => {
      newArray.push([]);//Adding a table array
      newTable = newArray[newArray.length - 1];
      dataRoot = splitTitle(table[0][0])[0];
      newTable.push([dataRoot]);//Adding a row to the table array including the table title

      table.forEach(row => {
        langs = languages;
        newTable.push([]);//Adding a row to the table array
        newRow = newTable[newTable.length - 1];
        className = splitTitle(row[0])[1];//Retrieving the class of the row
        if (row[0] === Prefix.placeHolder) className = 'PlaceHolder';
        if (!className) className = 'NoActor';
        if (['Comments'].includes(className)) langs = ['FR', 'AR'];
        let div = getDivInnerHtml();//Builiding a div container for the row
        let index = 0;

        newRow[0] =
          div + processElements(row).join(' ') +
          '</div>';

      })

      function processElements(row: string[]): string[] {
        let text: string[] = [];
        for (let i = 1; i < row.length; i++) {
          text.push(getParagraphInnerHtml(row[i], langs[i - 1]) || '')
        }
        return text
      }


      function getParagraphInnerHtml(element: string, lang: string): string | void {

        let p =
          '<p class="' + lang + '" ' +
          'data-root="' + dataRoot + '" ' +
          'lang="' + lang.toLowerCase() + '" >' +
          element + "</p>"

        return p

      }

      function getDivInnerHtml(): string {
        let div =
          '<div class="Row ' + className + '" ' +
          'data-root="' + dataRoot + '" ' +
          'role="button">'

        return div
      }

    });

    return newArray;
  }

  async function testRetrieveTables() {
    if (!confirm('Do you want to test the array?')) return;
    let now = new Date().getTime();
    let docFrag = new DocumentFragment();
    let tablesTitles: string[] = [];

    [Prefix.psalmody, Prefix.communion, Prefix.bookOfHours, Prefix.massCommon, Prefix.massStBasil]
      .forEach(prefix => {
        PrayersArrayFR.filter(table => splitTitle(table[0][0])[0]?.startsWith(prefix))
          .forEach(tbl => tablesTitles.push(splitTitle(tbl[0][0])[0]))
      });

    if (confirm('Do you want to test as BUTTON')) {
      let btn: Button = new Button({
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
      let title: string,
        tbl: string[][],
        userLangs = JSON.parse(localStorage.userLanguages),
        actors = JSON.parse(localStorage.showActors).filter(el => el[1] === true).map(el => el[0].EN);

      let innerHTML =
        tablesTitles.map(title => PrayersArrayHtml.find(table => splitTitle(table[0][0])[0] === title))
          .map(table => retrieveRowsHTML(table)).join(' ');


      div.innerHTML = innerHTML;
      actors.push('Row', 'Title', 'SubTitle');
      Array.from(div.querySelectorAll('div'))
        .forEach(div => {
          if (
            Array.from(div.classList)
              .map(c => actors.includes(c))
              .includes(false))
            div.remove();
        })
      Array.from(div.querySelectorAll('p')).forEach(parag => {
        if (!userLangs.includes(parag.lang.toUpperCase()) || !parag.innerText)
          parag.remove()
      });


      await setCSS(Array.from(div.children as HTMLCollectionOf<HTMLDivElement>));
      containerDiv.appendChild(docFrag);

      return alert((new Date().getTime() - now).toString());

      function retrieveRowsHTML(table: string[][]): string {
        if (!table) return '';
        let html: string =
          table
            .filter(row => table?.indexOf(row) > 0)
            .map(row => {
              if (!row[0].includes('PlaceHolder')) return row[0];
              title = row[0].split('>')[2];
              title = title.split('</')[0];
              tbl = PrayersArrayHtml.find(table => table[0][0]?.includes(title));
              return retrieveRowsHTML(tbl);
            })
            .join(' ');
        return html
      };
    })();


  };
  let GN = structuredClone(ReadingsArrays.GospelNightArrayFR);
  let newArray: string[][][] = [];

  newArray.push(...GN.filter(table => table[0][0]?.startsWith(Prefix.gospelNight)));
}


/**
 * Replaces the titles of each row with Prefix.same
 */
function prefixSame(Array: string[][][]) {
  Array.forEach(table => {
    table.forEach(row => {
      if (table.indexOf(row) === 0) return;
      if (splitTitle(row[0])[0] === splitTitle(table[0][0])[0])
        table[table.indexOf(row)][0] = Prefix.same + '&C=' + splitTitle(row[0])[1];
    })
  }
  );
  console.log(Array)

}



