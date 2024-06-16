class Button {
    constructor(btn) {
        this._backGroundImage = '';
        this._btnID = btn.btnID;
        this._label = btn.label;
        this._parentBtn = btn.parentBtn;
        this._children = btn.children;
        this._prayersSequence = btn.prayersSequence;
        this._backGroundImage = btn.backGroundImage;
        this._prayersArray = btn.prayersArray;
        this._languages = btn.languages;
        this._onClick = btn.onClick;
        this._afterShowPrayers = btn.afterShowPrayers;
        this._showPrayers = btn.showPrayers;
        this._docFragment = btn.docFragment;
        btn.cssClass
            ? (this._cssClass = btn.cssClass)
            : (this._cssClass = btnClass);
    }
    //Getters
    get btnID() {
        return this._btnID;
    }
    get children() {
        return this._children;
    }
    get prayersSequence() {
        return this._prayersSequence;
    }
    get backGroundImage() {
        return this._backGroundImage;
    }
    get prayersArray() {
        return this._prayersArray;
    }
    get languages() {
        return this._languages;
    }
    get label() {
        return this._label;
    }
    get parentBtn() {
        return this._parentBtn;
    }
    get onClick() {
        return this._onClick;
    }
    get afterShowPrayers() {
        return this._afterShowPrayers;
    }
    get showPrayers() {
        return this._showPrayers;
    }
    get cssClass() {
        return this._cssClass;
    }
    get docFragment() {
        return this._docFragment;
    }
    //Setters
    set btnID(id) {
        this._btnID = id;
    }
    set label(lbl) {
        this._label = lbl;
    }
    set parentBtn(parentBtn) {
        this._parentBtn = parentBtn;
    }
    set prayersSequence(btnPrayers) {
        this._prayersSequence = btnPrayers;
    }
    set backGroundImage(image) {
        this._backGroundImage = image;
    }
    set prayersArray(btnPrayersArray) {
        this._prayersArray = btnPrayersArray;
    }
    set languages(btnLanguages) {
        this._languages = btnLanguages;
    }
    set onClick(fun) {
        this._onClick = fun;
    }
    set afterShowPrayers(fun) {
        this._afterShowPrayers = fun;
    }
    set showPrayers(showPrayers) {
        this._showPrayers = showPrayers;
    }
    set children(children) {
        this._children = children;
    }
    set cssClass(cssClass) {
        this._cssClass = cssClass;
    }
    set docFragment(docFragment) {
        this._docFragment = docFragment;
    }
}
const btnMainMenu = new Button({
    btnID: "btnMain",
    label: {
        AR: "العودة إلى القائمة الرئيسية",
        FR: "Retour au menu principal",
        EN: "Back to the main menu",
    },
    backGroundImage: "url(./assets/btnMassBackground.jpg)",
    onClick: () => {
        btnMainMenu.children = [
            btnMass,
            btnIncenseOffice,
            btnDayReadings,
            btnBookOfHours,
            btnPsalmody,
            btnBible
        ];
        if (copticReadingsDate === copticFeasts.PalmSunday) {
            btnMainMenu.children.splice(btnMainMenu.children.length - 1, 0, btnHolyWeek);
            btnMainMenu.children.splice(btnMainMenu.children.indexOf(btnPsalmody), 1);
        }
        ;
        if (Season === Seasons.HolyWeek)
            btnMainMenu.children = [btnHolyWeek, btnBookOfHours];
        if ([Seasons.KiahkWeek1, Seasons.KiahkWeek2, Seasons.KiahkWeek3, Seasons.KiahkWeek4].includes(Season))
            btnPsalmody.label = {
                AR: "الإبصلمودية الكيهكية",
                FR: "Psalmodie de Kiahk",
            };
        if (localStorage.editingMode === "true")
            btnMainMenu.children.push(getEditModeButton());
    },
});
const btnGoToPreviousMenu = new Button({
    btnID: "btnGoBack",
    label: { AR: "السابق", FR: "Retour", EN: "Go Back" },
    backGroundImage: "url(./assets/btnMassBackground.jpg)",
    onClick: () => {
        scrollToTop(); //scrolling to the top of the page
    },
});
const btnMass = new Button({
    btnID: "btnMass",
    label: { AR: "القداسات", FR: "Messes", EN: "Mass" },
    onClick: (returnChildren = false) => {
        if (!btnMass.children)
            btnMass.children = [
                btnIncenseMorning,
                btnMassUnBaptised,
                btnMassBaptised
            ];
        if (returnChildren)
            return btnMass.children;
    },
});
const btnMassUnBaptised = new Button({
    btnID: "btnMassUnBaptised",
    label: {
        AR: "قٌدَّاسِ المَوْعُوظِينَ",
        FR: "Liturgie du Verbe",
        EN: "Unbaptised Mass",
    },
    docFragment: new DocumentFragment(),
    showPrayers: true,
    languages: [...prayersLanguages],
    onClick: () => {
        //Adding children buttons to btnMassUnBaptised
        btnMassUnBaptised.children = btnDayReadings.onClick(true, true);
        let btnsPrayersSequence = [
            ...MassPrayersSequences.MassUnbaptized,
        ];
        (function adaptHallelujahFaybibiAndTayshoury() {
            btnMassUnBaptised.prayersSequence = adaptPrayersSequence();
            function adaptPrayersSequence() {
                //If we are not during a fast period or we are during a fast period but today is either Saturday or Sunday, or a Lord Feast, we will remove Hallelujah Ge Evmevi and Tishoury, in order to keep Hallelujah Faybibi and Tayshouri
                if (!isFast
                    ||
                        [0, 6].includes(weekDay)
                    ||
                        lordFeasts.find(date => [copticDate, copticReadingsDate].includes(date)))
                    return btnsPrayersSequence
                        .filter(title => ![Prefix.massCommon + "HallelujahFayBiBiFast&D=$copticFeasts.AnyDay", Prefix.massCommon + "Tishoury&D=$copticFeasts.AnyDay"].includes(splitTitle(title)[0]));
                else
                    return ifIsFast();
                function ifIsFast() {
                    if (!isFast)
                        return;
                    if ([Seasons.GreatLent, Seasons.JonahFast].includes(Season)) {
                        //We are either during the week days of the Great Lent, or the 3 days of Jonah Fast
                        [
                            ["HallelujahFayBiBiFast&D=$copticFeasts.AnyDay", "HallelujahFayBiBi&D=$Seasons.GreatLent"], //Replacing "Halleljah Ge Evmevi" with "Halleluja E Ikhon"
                            ["Tishoury&D=$copticFeasts.AnyDay", "EnsotyTishoury&D=$Seasons.GreatLent"]
                        ] //Replacing "Tishoury" with "Ensoty Tishoury"
                            .forEach(array => btnsPrayersSequence[btnsPrayersSequence.indexOf(Prefix.massCommon + array[0])] = Prefix.massCommon + array[1]);
                    }
                    //We will remove 'Hellulja Fay Bibi'and keep only 'Hellulja Ge Evmev'i". We will also remove Tayshoury in order to keep only Tishoury 
                    return btnsPrayersSequence
                        .filter(title => ![Prefix.massCommon + "HallelujahFayBiBi&D=$copticFeasts.AnyDay", Prefix.massCommon + "Tayshoury&D=$copticFeasts.AnyDay"].includes(splitTitle(title)[0]));
                }
            }
            ;
        })();
        scrollToTop();
        return btnMassUnBaptised.prayersSequence;
    },
    afterShowPrayers: () => {
        let btnDocFragment = btnMassUnBaptised.docFragment;
        (function hideGodHaveMercyOnUsIfBishop() {
            let dataRoot = Prefix.commonPrayer +
                "PrayThatGodHaveMercyOnUs&D=$copticFeasts.AnyDay";
            let godHaveMercyHtml = selectElementsByDataSetValue(btnDocFragment, dataRoot, { startsWith: true }); //We select all the paragraphs not only the paragraph for the Bishop
            godHaveMercyHtml
                .filter((div) => godHaveMercyHtml.indexOf(div) > 0 &&
                godHaveMercyHtml.indexOf(div) < godHaveMercyHtml.length - 1)
                .forEach((htmlRow) => htmlRow.remove());
            let godHaveMercy = findTable(dataRoot, CommonPrayersArray); //We get the entier table not only the second row. Notice that the first row of the table is the row containing the title
            if (!godHaveMercy)
                return console.log("Didn't find table Gode Have Mercy");
            addExpandablePrayer({
                insertion: godHaveMercyHtml[0].nextElementSibling,
                btnID: "godHaveMercy",
                label: {
                    AR: godHaveMercy[1][2], //This is the arabic text of the lable
                    FR: godHaveMercy[1][1], //this is the French text of the label
                },
                prayers: [godHaveMercy.slice(1, 4)], //We add only the 1st to 3rd rows: the 1st row is a comment from which we retrieved the text for the title, the 2nd and 3rd row is also a comment
                languages: btnMassUnBaptised.languages,
                dataGroup: dataRoot,
            });
        })();
        (function insertHisFoundationsAndIGodHaveMercy() {
            if (![Seasons.GreatLent, Seasons.JonahFast].includes(Season))
                return; //The following only applies during the Great Lent the 3 days of Jonah Fast (not the 4th day) that's why we check if isFast === true
            if ([6, 0].includes(todayDate.getDay()))
                return;
            let titles = [
                Prefix.commonPrayer + "WeHaveBeenSavedWithYou&D=$copticFeasts.AnyDay",
                Prefix.massCommon + "HisFoundations&D=$Seasons.GreatLent",
                Prefix.incenseDawn + "GodHaveMercyOnUsRefrain&D=$Seasons.GreatLent",
            ];
            selectElementsByDataSetValue(btnDocFragment, titles[0], { equal: true }, 'root').forEach(el => el.remove()); //We remove the existing 'Sotis Amen' prayer
            let tables = titles.map(title => findTable(title, getTablesArrayFromTitlePrefix(title)) || undefined); //We retrieve the 3 tables by their titles
            if (!tables || tables.length < 1)
                return;
            let anchor = selectElementsByDataSetValue(btnDocFragment, Prefix.massCommon + "AbsolutionForTheFather&D=$copticFeasts.AnyDay", { equal: true }, 'root')[0]; //This is the html element before which we will insert the retrived tables
            if (!anchor)
                return;
            insertPrayersAdjacentToExistingElement({
                tables: tables,
                languages: prayersLanguages,
                position: {
                    beforeOrAfter: 'beforebegin',
                    el: anchor
                },
                container: btnDocFragment
            });
        })();
        let readingsAnchor = selectElementsByDataSetValue(btnDocFragment, Prefix.anchor + "Readings&D=$copticFeasts.AnyDay")[0]; //this is the html element before which we will insert all the readings and responses
        (function insertIntercessionsHymnsForSeasons() {
            let seasonalIntercessions = MassCommonPrayersArray.filter((table) => RegExp('Intercessions\.\*D=').test(table[0][0])
                &&
                    (isMultiDatedTitleMatching(table[0][0], [copticDate, Season])));
            if (seasonalIntercessions.length < 1)
                return console.log("No Seasonsal Intercession Hymns");
            seasonalIntercessions = getUniqueValuesFromArray(seasonalIntercessions);
            let anchor;
            if (Season === Seasons.PentecostalDays)
                selectElementsByDataSetValue(btnDocFragment, 'IntercessionsStMaykel', { includes: true }, 'root').forEach(div => div.remove()); //We remove the intercessions of St. Maykel because they will be replaced by those of the Pentocostal days
            seasonalIntercessions.forEach(table => {
                anchor = setIntercessionsAnchor(table[0][0]);
                if (!anchor)
                    return;
                insertPrayersAdjacentToExistingElement({
                    tables: [table],
                    languages: getLanguages(getArrayNameFromArray(MassCommonPrayersArray)),
                    position: {
                        beforeOrAfter: "beforebegin",
                        el: anchor,
                    },
                    container: btnDocFragment,
                });
            });
            function setIntercessionsAnchor(title) {
                if (!title)
                    return;
                let insertion = "IntercessionsStMary";
                if ([Seasons.JonahFast].includes(Season))
                    insertion = "IntercessionsStJohnBaptist";
                else if (Season === Seasons.PentecostalDays && !title.includes('IntercessionsStMaykel'))
                    insertion = "IntercessionsStMarc"; //The "By the intercessions of St Maykel..." will be inserted after the intercessions of St. Mary
                if (!insertion)
                    return;
                let htmlDivs = selectElementsByDataSetValue(btnDocFragment, Prefix.massCommon + insertion + "&D=$copticFeasts.AnyDay");
                if (!htmlDivs || htmlDivs.length < 1)
                    return;
                return htmlDivs[htmlDivs.length - 1].nextElementSibling;
            }
        })();
        (function insertBiEhmotGharExpandable() {
            //After inserting the Intercessions hyms, we will isnert an expandable for Bi Ehmot Ghar
            addExpandablePrayer({
                btnID: 'btnBiEhmotGhar',
                insertion: readingsAnchor,
                prayers: [findTable(Prefix.massCommon + "BiEhmotGhar&D=$copticFeasts.AnyDay", MassCommonPrayersArray) || undefined],
                label: {
                    AR: "بي إهموت غار",
                    FR: "Ⲡⲓϩ̀ⲙⲟⲧ ⲅⲁⲣ"
                },
                languages: prayersLanguages
            });
        })();
        (function insertMassReadingsAndResponses() {
            (function insertStPaulReading() {
                insertMassReading(Prefix.stPaul, ReadingsArrays.StPaulArrayFR, ReadingsIntrosAndEnds.stPaulIntro, ReadingsIntrosAndEnds.stPaulEnd);
            })();
            (function insertCatholicon() {
                insertMassReading(Prefix.Catholicon, ReadingsArrays.CatholiconArrayFR, ReadingsIntrosAndEnds.CatholiconIntro, ReadingsIntrosAndEnds.CatholiconEnd);
            })();
            (function insertPraxis() {
                (function insertPraxisResponse() {
                    //!Caution, we must start by inserting the Praxis Response before inserting the Praxis reading
                    let specialResponse = [];
                    let feastsDates = Object.values(copticFeasts);
                    let isFeast = feastsDates.includes(copticDate);
                    if (!isFeast)
                        isFeast =
                            feastsDates
                                .filter(v => v.startsWith(Seasons.GreatLent) || v.startsWith(Seasons.PentecostalDays))
                                .includes(copticReadingsDate);
                    let isStMaryFeast = Object.values(stMaryFeasts).includes(copticDate);
                    if (isFeast)
                        specialResponse =
                            PraxisResponsesPrayersArray.filter((table) => isMultiDatedTitleMatching(table[0][0], [copticDate, copticReadingsDate]))
                                .filter(tbl => tbl[0][0].includes('&D=$saintsFeasts.')); //We look for a response for the copticDate or copticReadingsDate, and we exclude responses for saints feasts
                    if (specialResponse.length < 1)
                        specialResponse = PraxisResponsesPrayersArray.filter((table) => isMultiDatedTitleMatching(table[0][0], [Season])); //We look for a response for the Season
                    if (isStMaryFeast || copticDay === '21' || specialResponse.length < 1)
                        return ifNoSpecificResponse();
                    else
                        return ifSpecificResponse();
                    function ifSpecificResponse() {
                        if (Season === Seasons.GreatLent) {
                            // During the Great Lent, we should get  2 tables ('Sundays', and 'Week') for this season. We will keep the relevant table accoding to the day of the week
                            weekDay === 0 || weekDay === 6 ?
                                specialResponse =
                                    specialResponse.filter((table) => table[0][0].includes("Sundays&D="))
                                :
                                    specialResponse =
                                        specialResponse.filter((table) => table[0][0].includes("Week&D="));
                        }
                        if (Season === Seasons.PentecostalDays) {
                            // The query should yield to  2 tables ('Resurrection', and 'Ascension') for this season. We will keep the relevant one accoding to the date
                            let day = Number(copticReadingsDate.replace(Seasons.PentecostalDays, ''));
                            if (day < 39)
                                specialResponse =
                                    specialResponse.filter((table) => table[0][0].includes("Resurrection&D="));
                            else if (day < 49)
                                specialResponse =
                                    specialResponse.filter((table) => table[0][0].includes("Ascension&D="));
                            else
                                ;
                        }
                        //We insert the special response between the first and 2nd rows
                        specialResponse =
                            insertPrayersAdjacentToExistingElement({
                                tables: getUniqueValuesFromArray(specialResponse), //We remove duplicates if any
                                languages: prayersLanguages,
                                position: {
                                    beforeOrAfter: "beforebegin",
                                    el: readingsAnchor, //This is the 'Ek Esmaroot' part of the annual response
                                },
                                container: btnDocFragment,
                            })[0];
                        insertSaintsResponse(specialResponse);
                    }
                    ;
                    function ifNoSpecificResponse() {
                        let noSeasonResponse = findTable(Prefix.praxisResponse + "&D=$copticFeasts.AnyDay", PraxisResponsesPrayersArray) || undefined;
                        if (!noSeasonResponse)
                            return;
                        noSeasonResponse = insertPrayersAdjacentToExistingElement({
                            tables: [noSeasonResponse],
                            languages: getLanguages(PrayersArraysKeys.find((array) => array[2]() === PraxisResponsesPrayersArray)[1]),
                            position: {
                                beforeOrAfter: "beforebegin",
                                el: readingsAnchor,
                            },
                            container: btnDocFragment,
                        })[0];
                        insertSaintsResponse(noSeasonResponse);
                    }
                    ;
                    function insertSaintsResponse(responses) {
                        if (!responses)
                            return;
                        let anchor = responses.find(div => div.dataset.root === Prefix.anchor + "Saints&D=copticFeasts.AnyDay");
                        if (!anchor)
                            return; //If no placeHolder is found, it means that we are during a special Season (not a 'NoSeason' period), and no placeHolder for the saints response is included
                        if (!Object.values(saintsFeasts).includes(copticDate))
                            return; //It means that today is not a saint feast
                        specialResponse = PraxisResponsesPrayersArray.filter((table) => table[0][0].includes('&D=$saintsFeasts.') && isMultiDatedTitleMatching(table[0][0], [copticDate]));
                        if (specialResponse.length < 1)
                            return;
                        insertPrayersAdjacentToExistingElement({
                            tables: specialResponse,
                            languages: getLanguages(getArrayNameFromArray(PraxisResponsesPrayersArray)),
                            position: {
                                el: anchor,
                                beforeOrAfter: 'beforebegin'
                            },
                            container: btnDocFragment
                        });
                    }
                })();
                ///Then we insert the Praxis reading
                insertMassReading(Prefix.praxis, ReadingsArrays.PraxisArrayFR, ReadingsIntrosAndEnds.praxisIntro, ReadingsIntrosAndEnds.praxisEnd);
            })();
            (function insertSepcialAgiosIfFeast() {
                let Agios = Prefix.massCommon + "Agios&D=$copticFeasts.";
                if ([copticFeasts.EntryToEgypt, copticFeasts.CanaWedding].includes(copticDate))
                    Agios += Object.entries(copticFeasts).find(entry => entry[1] === copticDate)[0];
                else if ([copticFeasts.PalmSunday, copticFeasts.Ascension, copticFeasts.Pentecoste].includes(copticReadingsDate))
                    Agios += Object.entries(copticFeasts).find(entry => entry[1] === copticReadingsDate)[0];
                else if ([Seasons.Nativity, Seasons.Baptism, Seasons.CrossFeast, Seasons.PentecostalDays].includes(Season))
                    Agios = Agios.replace('copticFeasts', 'Seasons') + Object.entries(Seasons).find(entry => entry[1] === Season)[0];
                else
                    Agios += "AnyDay";
                let AgiosTable = findTable(Agios, MassCommonPrayersArray, {
                    equal: true,
                }) || undefined;
                if (!AgiosTable)
                    return console.log("Didn't find the special Agios table in PrayersArray");
                (function adaptToAscension() {
                    if (Season !== Seasons.PentecostalDays || Number(copticReadingsDate.split(Seasons.PentecostalDays)[1]) < 40)
                        return; //i.e. if we are between the Pentecoste & the Assumption feasts: day 40 to day 49
                    let raisedAndAscended = findTable(Prefix.commonPrayer + "AgiosPart1&D=$copticFeasts.AnyDay", CommonPrayersArray, {
                        equal: true,
                    })[3]; //This is the 3rd paragraph of the ordinary Agios Osios Hymn ('For He Raised and Ascended to the Heaveans'...etc.)
                    if (!raisedAndAscended)
                        return;
                    [4, 5, 6].forEach(index => AgiosTable[AgiosTable.length - index] = raisedAndAscended); //Replacing the 3 Agios paragraphs with the Ascension paragraph
                })();
                insertPrayersAdjacentToExistingElement({
                    tables: [AgiosTable],
                    languages: getLanguages(getArrayNameFromArray(MassCommonPrayersArray)),
                    position: {
                        beforeOrAfter: "beforebegin",
                        el: readingsAnchor.nextElementSibling,
                    },
                    container: btnDocFragment,
                });
                //  oldAgios.forEach((div) => div.remove());
            })();
            (function insertSynaxarium() {
                if (Season === Seasons.PentecostalDays)
                    return; //We do not read the Synaxarium during the 50 Pentecostal days
                let intro = { ...ReadingsIntrosAndEnds.synaxariumIntro };
                Object.entries(intro)
                    .forEach(entry => intro[entry[0]] =
                    entry[1]
                        .replace("theday", Number(copticDay).toString())
                        .replace("themonth", copticMonths[Number(copticMonth)][entry[0]]));
                insertMassReading(Prefix.synaxarium, ReadingsArrays.SynaxariumArrayFR, intro, undefined, copticDate); //!Caution: we must pass the copticDate for the 'date' argument, otherwise it will be set to the copticReadingsDate by default, and we will get the wrong synaxarium
                //We will reverse the langauges
                let introHTML = selectElementsByDataSetValue(btnDocFragment, Prefix.synaxarium + "&D=" + copticDate)[1];
                if (!introHTML || introHTML.children.length < 1)
                    return console.log('Didn\'t find the Synaxarium');
                introHTML.children[0].insertAdjacentElement("beforebegin", introHTML.children[0]);
            })();
            (function insertGospelReading() {
                getGospelReadingAndResponses({
                    liturgy: Prefix.gospelMass,
                    prayersArray: ReadingsArrays.GospelMassArrayFR,
                    languages: getLanguages(PrayersArraysKeys.find((array) => array[0] === Prefix.gospelMass)[1]),
                    container: btnDocFragment,
                    isMass: true,
                    clearContainer: false,
                });
            })();
        })();
        (async function insertBookOfHoursButton() {
            if ([
                copticFeasts.Resurrection,
                copticFeasts.Nativity,
                copticFeasts.Baptism,
            ].includes(copticReadingsDate))
                //In these feasts we don't pray any hour
                return alert("We do not pray the Book of Hours prayers on the Ressurection, Nativity (Kiahk 29th), and Baptism (Toubi 11th) feasts' masses");
            let hoursBtns = btnBookOfHours.onClick(true); //We get buttons for the relevant hours according to the day
            if (!hoursBtns)
                return;
            hoursBtns = selectRelevantHoursAccordingToTheDay();
            let masterBtnDiv, btnsDiv;
            (function createMasterButton() {
                masterBtnDiv = document.createElement("div"); //This is the div that will contain the master button which shows or hides the Book of Hours sub buttons
                masterBtnDiv.classList.add(inlineBtnsContainerClass);
                masterBtnDiv.id = "masterBOHBtn";
                btnsDiv = document.createElement("div"); //This is the div that contains the sub buttons for each Hour of the Book of Hours
                if (defaultLanguage === 'AR')
                    btnsDiv.dir = 'rtl';
                btnsDiv.style.display = "grid";
                btnsDiv.classList.add(inlineBtnsContainerClass);
                btnsDiv.classList.add(hidden);
                let masterBtn = new Button({
                    btnID: "BOH_Master",
                    label: {
                        AR: "الأجبية",
                        FR: "Agpia",
                    },
                    onClick: () => {
                        //We toggle the div containing the buttons for each hour
                        btnsDiv.classList.toggle(hidden);
                        if (btnsDiv.classList.contains(hidden)) {
                            btnsDiv.style.top = "";
                            btnsDiv.style.position = "";
                            createFakeAnchor(btnsDiv.id);
                        }
                    },
                });
                masterBtnDiv.prepend(createHtmlBtn({
                    btn: masterBtn,
                    btnsContainer: masterBtnDiv,
                    btnClass: inlineBtnClass,
                    clear: true,
                    onClick: masterBtn.onClick,
                })); //We add the master button to the bookOfHoursMasterDiv
                btnDocFragment.prepend(btnsDiv);
                btnDocFragment.prepend(masterBtnDiv);
            })();
            (function createHtmlButtonForEachHour() {
                //We will create an HTML div (role = button) and an expandable div for each hour
                hoursBtns
                    .map((btn) => {
                    btn.onClick(true); //We call the onClick() method of the btn in order to build its prayersSequence properties. Notice that we passs 'true' as argument to the onClick() function
                    if (localStorage.displayMode === displayModes[1])
                        //If we are in the 'Presentation Mode', we remove all the psalms and keep only the Gospel and the Litanies
                        btn.prayersSequence = btn.prayersSequence
                            .filter((title) => !title.includes("Psalm"));
                    InsertHourFinalPrayers(btn); //Inserting Kyrielison 41 times, Agios, Holy God of Sabaot, etc.
                    let btnPrayers = btn.prayersSequence.map((title) => findTable(title, getTablesArrayFromTitlePrefix(title))); //We create an array containing all the tables includes in the button's prayersSequence.
                    //We will create an 'expandable' html button and div for the hour button
                    let createdElements = addExpandablePrayer({
                        insertion: btnDocFragment.children[0],
                        btnID: btn.btnID,
                        label: btn.label,
                        prayers: btnPrayers,
                        languages: btnBookOfHours.languages,
                    });
                    if (!createdElements[0])
                        return;
                    createdElements[0].addEventListener("click", () => hourBtnOnClick(createdElements[0].id)); //!Caution, we must ADD a new onClick eventListner because the created buton already have one attached to it when it was created by addExpandablePrayer(); 
                    btnsDiv.appendChild(createdElements[0]);
                    if (!createdElements[1])
                        return;
                    createdElements[1].dataset.group = createdElements[1].id;
                });
                //Finally we set the grid-Template for btnsDiv
                btnsDiv.style.gridTemplateColumns = setGridColumnsOrRowsNumber(btnsDiv, 3);
            })();
            function selectRelevantHoursAccordingToTheDay() {
                //args.mass is a boolean that tells whether the button prayersArray should include all the hours of the Book Of Hours, or only those pertaining to the mass according to the season and the day on which the mass is celebrated
                let hours = [hoursBtns[1], hoursBtns[2], hoursBtns[3]]; //Those are the 3rd, 6th and 9th hours
                if ([
                    Seasons.GreatLent,
                    Seasons.JonahFast,
                    Seasons.NativityParamoun,
                    Seasons.BaptismParamoun,
                ].includes(Season) &&
                    ![0, 6].includes(weekDay)
                //We are during the Great Lent or during the Nativity Paramoun or the Baptism Paramoun and today is a Friday. In such cases, we pray the 3rd, 6th, 9th, 11th, and 12th hours
                )
                    hours.push(hoursBtns[4], hoursBtns[5]);
                else if (!isFast
                    ||
                        //We remove the 9th hour in the following days/periods
                        [0, 6].includes(weekDay) //Whatever the period, if we are a Saturday or a Sunday, we pray only the 3rd and 6th Hours
                )
                    hours.pop(); //we remove the 9th hour
                return hours;
            }
            ;
            async function hourBtnOnClick(hourBtnId) {
                let expandables = selectElementsByDataSetValue(containerDiv, 'HourExpandable', { endsWith: true }, 'group').filter(div => div.classList.contains('Expandable'));
                if (expandables.length < 1)
                    return;
                expandables
                    .forEach(expandable => expandable.id.startsWith(hourBtnId) ?
                    showOrHideHour(expandable)
                    : hideHour(expandable));
                function hideHour(expandable) {
                    if (expandable.classList.contains(hidden))
                        return; //If it is already hidden, we do not need to hide.
                    expandable.classList.add(hidden);
                    Array.from(sideBarTitlesContainer.children)
                        .filter((div) => div.dataset.group === expandable.id)
                        .forEach(div => div.remove());
                }
                ;
                async function showOrHideHour(expandable) {
                    (async function hourIsNotHidden() {
                        if (expandable.classList.contains(hidden))
                            return;
                        let children = Array.from(expandable.children);
                        collapseAllTitles(children);
                        let rightSideBarTitles = await showTitlesInRightSideBar(children.filter(div => isTitlesContainer(div)).reverse(), undefined, false, expandable.id, false);
                        rightSideBarTitles
                            .forEach(titleDiv => titleDiv.classList.remove(hidden));
                        floatOnTop(btnsDiv, "5px"); //Making the hours buttons container float on top
                        masterBtnDiv.classList.add(hidden); //Hiding the master button
                        createFakeAnchor(expandable.id); //Jumbing to the begining of the expandable container
                    })();
                    (function hourIsHidden() {
                        if (!expandable.classList.contains(hidden))
                            return;
                        btnsDiv.style.top = "";
                        btnsDiv.style.position = "";
                        masterBtnDiv.classList.remove(hidden);
                        createFakeAnchor(btnsDiv.id);
                        Array.from(sideBarTitlesContainer.children)
                            .filter((div) => div.dataset.group === expandable.id)
                            .forEach(div => div.remove());
                    })();
                }
                ;
            }
            ;
            function InsertHourFinalPrayers(hourBtn) {
                let Agios = Prefix.commonPrayer + "Agios&D=$copticFeasts.AnyDay", Kyrielison41Times = Prefix.commonPrayer + "Kyrielison41Times&D=$copticFeasts.AnyDay", KyrielisonIntro = Kyrielison41Times.replace("&D=", "NoMassIntro&D="), KyrielisonMassIntro = Kyrielison41Times.replace("&D=", "MassIntro&D="), HolyLordOfSabaot = Prefix.commonPrayer +
                    "HolyHolyHolyLordOfSabaot&D=$copticFeasts.AnyDay", HailToYouMaria = Prefix.commonPrayer + "WeSaluteYouMary&D=$copticFeasts.AnyDay", WeExaltYou = Prefix.commonPrayer + "WeExaltYouStMary&D=$copticFeasts.AnyDay", Creed = Prefix.commonPrayer + "Creed&D=$copticFeasts.AnyDay", OurFatherWhoArtInHeaven = Prefix.commonPrayer +
                    "OurFatherWhoArtInHeaven&D=$copticFeasts.AnyDay";
                let sequence;
                if (hoursBtns.indexOf(hourBtn) === hoursBtns.length - 1) {
                    //This is the last hour btn
                    sequence = [
                        WeExaltYou,
                        Creed,
                        KyrielisonMassIntro,
                        Kyrielison41Times,
                        HolyLordOfSabaot,
                        OurFatherWhoArtInHeaven,
                    ];
                }
                else if (hoursBtns.indexOf(hourBtn) === hoursBtns.length - 2) {
                    //this is the before last hour btn
                    sequence = [Agios, OurFatherWhoArtInHeaven, HailToYouMaria];
                }
                else {
                    //Any other hour before the 2 last
                    sequence = [
                        KyrielisonIntro,
                        Kyrielison41Times,
                        HolyLordOfSabaot,
                        OurFatherWhoArtInHeaven,
                    ];
                }
                insertCommonPrayer(hourBtn, sequence, hourBtn.prayersSequence.find((title) => title.includes("HourLitanies&D=")));
                function insertCommonPrayer(btn, titles, litanies) {
                    if (!titles || titles.length === 0)
                        return console.log("no sequence");
                    btn.prayersSequence.splice(btn.prayersSequence.indexOf(litanies) + 1, 0, ...titles);
                }
            }
        })();
        function insertMassReading(readingPrefix, readingArray, readingIntro, readingEnd, date = copticReadingsDate) {
            let readings, language = getLanguages(PrayersArraysKeys.find((array) => array[0] === readingPrefix)[1]);
            readings = findMassReadingOtherThanGospel(readingPrefix, readingArray, { beforeOrAfter: "beforebegin", el: readingsAnchor }, btnDocFragment, false, date);
            if (!readings || readings.length === 0)
                return;
            if (readingIntro)
                //We start by inserting the introduction before the reading
                insertPrayersAdjacentToExistingElement({
                    tables: [
                        [
                            [
                                readings[0][0].dataset.root + "&C=ReadingIntro",
                                readingIntro.AR,
                                readingIntro.FR,
                                readingIntro.EN,
                            ],
                        ],
                    ],
                    languages: ['AR', 'FR', 'EN'],
                    position: { beforeOrAfter: "beforebegin", el: readings[0][1] },
                    container: btnDocFragment,
                });
            if (readingEnd)
                //Then we insert the end of the reading
                insertPrayersAdjacentToExistingElement({
                    tables: [
                        [
                            [
                                readings[0][0].dataset.root + "&C=ReadingEnd",
                                readingEnd.AR,
                                readingEnd.FR,
                                readingEnd.EN,
                            ],
                        ],
                    ],
                    languages: ['AR', 'FR', 'EN'],
                    position: { beforeOrAfter: "beforebegin", el: readingsAnchor },
                    container: btnDocFragment,
                });
        }
    },
});
const btnReadingsStPaul = new Button({
    btnID: "btnReadingsStPaul",
    label: {
        AR: "البولس",
        FR: "Epître de Saint Paul",
        EN: "Pauline Epistle",
    },
    showPrayers: true,
    onClick: (returnBtnChildren = false) => {
        if (returnBtnChildren)
            return;
        findMassReadingOtherThanGospel(Prefix.stPaul, ReadingsArrays.StPaulArrayFR, { beforeOrAfter: undefined, el: undefined }, containerDiv, true);
        scrollToTop(); //scrolling to the top of the page
    },
});
const btnReadingsCatholicon = new Button({
    btnID: "btnReadingsCatholicon",
    label: {
        AR: "الكاثوليكون",
        FR: "Catholicon",
    },
    showPrayers: true,
    onClick: (returnBtnChildren = false) => {
        if (returnBtnChildren)
            return;
        findMassReadingOtherThanGospel(Prefix.Catholicon, ReadingsArrays.CatholiconArrayFR, { beforeOrAfter: undefined, el: undefined }, containerDiv, true);
        scrollToTop(); //scrolling to the top of the page
    },
});
const btnReadingsPraxis = new Button({
    btnID: "btnReadingsPraxis",
    label: {
        AR: "الإبركسيس",
        FR: "Praxis",
    },
    showPrayers: true,
    onClick: (returnBtnChildren = false) => {
        if (returnBtnChildren)
            return;
        findMassReadingOtherThanGospel(Prefix.praxis, ReadingsArrays.PraxisArrayFR, { beforeOrAfter: undefined, el: undefined }, containerDiv, true);
        scrollToTop(); //scrolling to the top of the page
    },
});
const btnReadingsSynaxarium = new Button({
    btnID: "btnReadingsSynaxarium",
    label: {
        AR: "السنكسار",
        FR: "Synaxarium",
    },
    showPrayers: true,
    onClick: function (returnBtnChildren = false) {
        if (returnBtnChildren)
            return;
        findMassReadingOtherThanGospel(Prefix.synaxarium, ReadingsArrays.SynaxariumArrayFR, { beforeOrAfter: undefined, el: undefined }, containerDiv, true, copticDate); //!CAUTION: notice that we passed to the function the readingDate argument because during the GreatLent period and the Jonah Fast, the copticReadingsDate is formatted like 'GL10', we hence pass the copticDate to prevent the function from searching for the Synaxarium of the day by the copticReadingsDate
        scrollToTop(); //scrolling to the top of the page
    },
});
const btnPropheciesMorning = new Button({
    btnID: "btnReadingsPropheciesDawn",
    label: {
        AR: "نبوات باكر",
        FR: "Propheties Matin",
    },
    showPrayers: true,
    onClick: () => {
        findMassReadingOtherThanGospel(Prefix.propheciesDawn, ReadingsArrays.PropheciesDawnArrayFR, { beforeOrAfter: undefined, el: undefined }, containerDiv, true);
        scrollToTop(); //scrolling to the top of the page
    },
});
const btnDayReadings = new Button({
    btnID: "btnDayReadings",
    label: {
        AR: "قراءات اليوم",
        FR: "Lectures du jour",
        EN: "Day's Readings",
    },
    onClick: (mass = false) => {
        if (Season === Seasons.HolyWeek)
            return alert("We are during the Holy Week, there are no readings, please go to the Holy Week Prayers"); //We should put here child buttons for the Holy Week prayers and readings
        //We set the button's children
        btnDayReadings.children = [
            btnGospelMorning,
            btnGospelVespers,
            btnReadingsStPaul,
            btnReadingsCatholicon,
            btnReadingsPraxis,
            btnReadingsSynaxarium,
            btnGospelMass
        ];
        (function adaptToGreatLentAndJonahFast() {
            if (mass)
                return; //None of the following applies if the function is called within the Unbaptized mass context
            if (![Seasons.GreatLent, Seasons.JonahFast].includes(Season))
                return;
            if (copticReadingsDate === copticFeasts.Resurrection)
                return;
            (function ifWeAreNotASaturday() {
                if (weekDay === 6)
                    return;
                //We remove the Vespers because there are no Vespers during the Great Lent except for Saturday. Also there are no vespers during the Jonah Fast which lasts for 4 days from Monday to Thursday
                btnDayReadings.children = btnDayReadings.children.filter(b => b !== btnGospelVespers);
                if (Season === Seasons.JonahFast)
                    return; ///The following concerns only the Great Lent
                //If we are a Sunday and the GospelNight button is not included, we will add it.
                if (weekDay === 0
                    &&
                        !btnDayReadings.children.includes(btnGospelNight))
                    btnDayReadings.children.push(btnGospelNight);
                (function ifWeAreNotASunday() {
                    if (weekDay === 0)
                        return;
                    //If we are not a Sunday (i.e., we are during any week day other than Sunday and Saturday), we will  add the Prophecies button to the list of buttons
                    if (!btnDayReadings.children.includes(btnPropheciesMorning))
                        btnDayReadings.children.unshift(btnPropheciesMorning);
                    //Also if we  are not a Sunday, we will remove the Night Gospel, if included
                    btnDayReadings.children = btnDayReadings.children.filter((btn) => btn !== btnGospelNight);
                })();
            })();
        })();
        (function ifMass() {
            if (!mass)
                return;
            btnDayReadings.children = btnDayReadings.children.filter(btn => ![btnGospelVespers, btnGospelMorning].includes(btn)); //We remove the Mornign and Vespers Gospel buttons
            if (Season === Seasons.PentecostalDays)
                btnDayReadings.children.splice(btnDayReadings.children.indexOf(btnReadingsSynaxarium), 1); //We remove the Synaxarium button
        })();
        return btnDayReadings.children;
    },
});
const btnBookOfHours = new Button({
    btnID: "btnBookOfHours",
    label: { AR: "الأجبية", FR: "Agpia", EN: "Book of Hours" },
    docFragment: new DocumentFragment(),
    parentBtn: btnMainMenu,
    showPrayers: true,
    languages: [...prayersLanguages],
    children: [],
    onClick: (returnBtnChildren = false) => {
        if (btnBookOfHours.children.length > 1)
            return btnBookOfHours.children;
        let OurFatherWhoArtInHeaven = Prefix.commonPrayer + "OurFatherWhoArtInHeaven&D=$copticFeasts.AnyDay", AngelsPrayers = Prefix.commonPrayer + "AngelsPrayer&D=$copticFeasts.AnyDay", HailToYouMaria = Prefix.commonPrayer + "WeSaluteYouMary&D=$copticFeasts.AnyDay", WeExaltYou = Prefix.commonPrayer + "WeExaltYouStMary&D=$copticFeasts.AnyDay", Agios = Prefix.commonPrayer + "Agios&D=$copticFeasts.AnyDay", Kyrielison41Times = Prefix.commonPrayer + "Kyrielison41Times&D=$copticFeasts.AnyDay", KyrielisonIntro = Kyrielison41Times.replace("&D=", "NoMassIntro&D="), HolyLordOfSabaot = Prefix.commonPrayer + "HolyHolyHolyLordOfSabaot&D=$copticFeasts.AnyDay", Creed = Prefix.commonPrayer + "Creed&D=$copticFeasts.AnyDay", AllHoursFinalPrayer = Prefix.bookOfHours + "AllHoursFinalPrayer&D=$copticFeasts.AnyDay";
        btnBookOfHours.children = [];
        (function addAChildButtonForEachHour() {
            (function addHoursBtns() {
                Object.entries(bookOfHours)
                    .forEach((entry) => {
                    let hourName = entry[0], btnLabel = entry[1][1];
                    let hourBtn = new Button({
                        btnID: "btn" + hourName,
                        label: btnLabel,
                        languages: btnBookOfHours.languages,
                        showPrayers: true,
                        parentBtn: btnBookOfHours,
                        onClick: (isMass = false) => hourBtnOnClick(hourBtn, hourName, isMass),
                        afterShowPrayers: () => hourBtnAfterShowPrayer(btnLabel),
                    });
                    btnBookOfHours.children.push(hourBtn);
                });
            })();
            (function addOtherPrayersBtns() {
                let otherPrayers = [Prefix.bookOfHours + 'BeforeCommunion&D=$copticFeasts.AnyDay', Prefix.bookOfHours + 'AfterCommunion&D=$copticFeasts.AnyDay'];
                let otherPrayersBtn = new Button({
                    btnID: 'otherPrayersBtn',
                    label: {
                        AR: 'صلوات أخرى',
                        FR: 'Diverses prières',
                        EN: 'Various Prayers'
                    },
                    children: otherPrayers.map(title => otherPrayerBtn(title))
                });
                btnBookOfHours.children.push(otherPrayersBtn);
                function otherPrayerBtn(title) {
                    let table = findTable(title, BookOfHoursPrayersArray) || undefined;
                    if (!table)
                        return undefined;
                    return new Button({
                        btnID: "btnOtherPrayer" + otherPrayers.indexOf(title) + 1,
                        label: {
                            AR: table[0][btnBookOfHours.languages.indexOf('AR') + 1],
                            FR: table[0][btnBookOfHours.languages.indexOf('FR') + 1]
                        },
                        onClick: () => {
                            setCSS(showPrayers({
                                table: table,
                                languages: btnBookOfHours.languages,
                                container: containerDiv,
                                clearContainerDiv: true,
                                clearRightSideBar: true
                            }) || []);
                            scrollToTop();
                        },
                    });
                }
            })();
            function hourBtnAfterShowPrayer(btnLabel) {
                let children = Array.from(containerDiv.children).filter((div) => div.dataset.root);
                scrollToTop();
                children.forEach((htmlRow) => ["Priest", "Diacon", "Assembly"].forEach((className) => htmlRow.classList.replace(className, "NoActor")));
                if (btnLabel !== bookOfHours.VeilHour[1])
                    return;
                //If we are in the 'Setar Hour', we need to remove from Psalm 118 all the paragraphs except paragraphs 20, 21, and 22. We will do this by adding a btn.afterShowPlayers function
                let psalm118 = children.filter((div) => div.dataset.root.startsWith(Prefix.bookOfHours + "Psalm118"));
                psalm118
                    .filter((div) => psalm118.indexOf(div) > 0 && psalm118.indexOf(div) < 20)
                    .forEach((div) => div.remove());
            }
            //Adding the onClick() property to the button
            function hourBtnOnClick(btn, hourName, isMass) {
                (function buildBtnPrayersSequence() {
                    //We will add the prayers sequence to btn.prayersSequence[]
                    btn.prayersSequence = Object.entries(bookOfHours)
                        .find((entry) => entry[0] === hourName)[1][0]
                        .map((title) => getSequence("Psalm" + title.toString()));
                    btn.prayersSequence.unshift(getSequence(hourName + "Title")); //This is the title of the hour prayer
                    ["Gospel", "Litanies"].forEach((title) => btn.prayersSequence.push(getSequence(hourName + title)));
                    //Then, we add the End of all Hours' prayers (ارحمنا يا الله ثم ارحمنا) except for the 1st and 2nd services of the Midnight Prayer
                    (function addFinalPrayersToSequence() {
                        if (isMass)
                            return; //!Important: If the onClick() method is called when the button is displayed in the Unbaptised Mass, we do not add anything else to the btn's prayersSequence
                        let btnLable = btn.label, HourIntro = [
                            Prefix.commonPrayer +
                                "ThanksGivingPart1&D=$copticFeasts.AnyDay",
                            Prefix.commonPrayer +
                                "ThanksGivingPart2&D=$copticFeasts.AnyDay",
                            Prefix.commonPrayer +
                                "ThanksGivingPart3&D=$copticFeasts.AnyDay",
                            Prefix.commonPrayer +
                                "ThanksGivingPart4&D=$copticFeasts.AnyDay",
                            Prefix.bookOfHours + "Psalm50&D=$copticFeasts.AnyDay",
                        ], endOfHourPrayersSequence = [
                            AngelsPrayers,
                            Agios,
                            OurFatherWhoArtInHeaven,
                            HailToYouMaria,
                            WeExaltYou,
                            Creed,
                            KyrielisonIntro,
                            Kyrielison41Times,
                            HolyLordOfSabaot,
                            OurFatherWhoArtInHeaven,
                            getSequence(hourName + "EndOfHourPrayer"),
                            AllHoursFinalPrayer,
                            OurFatherWhoArtInHeaven,
                        ];
                        if (btnLable === bookOfHours.MidNight1Hour[1])
                            HourIntro.push(getSequence(hourName + "WakeUpSonsOfLight")); //We add the 'Wake Up Sons of Light' for the 1st Service of Midnight
                        if (btnLable === bookOfHours.TwelvethHour[1])
                            endOfHourPrayersSequence.splice(0, 1); //If it is the 12th (Night) Hour, we remove the Angels Prayer from endOfHourPrayersSequence
                        btn.prayersSequence.splice(1, 0, ...HourIntro); //We  add the titles of the HourIntro before the 1st element of btn.prayersSequence[]
                        if (btnLable === bookOfHours.MidNight3Hour[1]) {
                            //Removing all the prayers before the Creed (index = 4) and replacing them with other prayers
                            endOfHourPrayersSequence.splice(0, 5, Kyrielison41Times, HolyLordOfSabaot, OurFatherWhoArtInHeaven, getSequence(hourName + "2ndGospel"));
                            //Inserting the Priests Absolution at the end
                            endOfHourPrayersSequence.push(getSequence(hourName + "PriestsAbsolution"));
                        }
                        if ([
                            bookOfHours.FirstHour[1],
                            bookOfHours.TwelvethHour[1],
                            bookOfHours.MidNight3Hour[1],
                        ].includes(btnLable)) {
                            //If it is the 1st hour (Dawn) or the 12th Hour (Nighth) prayer: We add the End Of Hour Prayers
                            btn.prayersSequence.push(...endOfHourPrayersSequence);
                        }
                        else {
                            //If its is not the 1st Hour (Dawn) or the 12th Hour (Night), we insert only Kyrielison 41 times, and "Holy Lord of Sabaot" and "Our Father Who Art In Heavean"
                            btn.prayersSequence.push(KyrielisonIntro, Kyrielison41Times, HolyLordOfSabaot, OurFatherWhoArtInHeaven);
                        }
                    })();
                })();
                function getSequence(replaceWith) {
                    return (Prefix.bookOfHours +
                        "&D=$copticFeasts.AnyDay".replace("&D=", replaceWith + "&D="));
                }
            }
        })();
        if (returnBtnChildren)
            return btnBookOfHours.children;
        scrollToTop();
        return btnBookOfHours.prayersSequence;
    },
});
const btnPsalmody = new Button({
    btnID: "btnPsalmody",
    label: {
        AR: "الإبصلمودية السنوية",
        FR: "Psalmodie",
        EN: "Psalmody"
    },
    languages: prayersLanguages,
    showPrayers: true,
    onClick: () => {
        if ([Seasons.KiahkWeek1, Seasons.KiahkWeek2, Seasons.KiahkWeek3, Seasons.KiahkWeek4].includes(Season))
            return btnPsalmody.prayersSequence = PsalmodyPrayersSequences.Kiahk;
        btnPsalmody.prayersSequence = PsalmodyPrayersSequences.Year;
        let weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        btnPsalmody.prayersSequence
            .forEach(title => {
            if ([...weekDays].splice(weekDay, 1)
                .map(day => title.includes(day))
                .includes(true))
                btnPsalmody.prayersSequence.splice(btnPsalmody.prayersSequence.indexOf(title), 1); //If the title includes any day in weekDays*[] other than today, we will remove these titles. We do this because these prayers (mostly Theotokies prayers) are pertaining to other days than today.
        });
    },
});
const btnIncenseMorning = new Button({
    btnID: "btnIncenseDawn",
    label: {
        AR: "بُخُورِ بَاكِرِ",
        FR: "Encens du Matin",
        EN: "Morning Incense Office"
    },
    showPrayers: true,
    languages: [...prayersLanguages],
    docFragment: new DocumentFragment(),
    onClick: () => {
        btnIncenseMorning.prayersSequence = [...IncensePrayersSequence].filter((title) => !title.startsWith(Prefix.incenseVespers)); //We will remove all the Incense Vespers titles from the prayersSequence Array
        if (weekDay === 6)
            //If we are a Saturday, we pray only the 'Departed Litany', we will hence remove the 'Sick Litany' and the 'Travellers Litany'
            btnIncenseMorning.prayersSequence.splice(btnIncenseMorning.prayersSequence.indexOf(Prefix.incenseDawn + "SickLitany&D=$copticFeasts.AnyDay"), 3, //We remove the SickPrayer, the TravelersParayer and the Oblations Prayer
            Prefix.incenseVespers + "DepartedLitany&D=$copticFeasts.AnyDay");
        else if (weekDay === 0 || lordFeasts.includes(copticDate))
            //If we are a Sunday or the day is a Lord's Feast, or the oblation is present, we remove the 'Travellers Litany' and keep the 'Sick Litany' and the 'Oblation Litany'
            btnIncenseMorning.prayersSequence = btnIncenseMorning.prayersSequence.filter((tbl) => !tbl[0][0].startsWith(Prefix.incenseDawn + "TravelersLitany&D=$copticFeasts.AnyDay"));
        scrollToTop();
        return btnIncenseMorning.prayersSequence;
    },
    afterShowPrayers: (btn = btnIncenseMorning, gospelPrefix = Prefix.gospelMorning, gospelArray = ReadingsArrays.GospelMorningArrayFR) => {
        let btnDocFragment = btn.docFragment;
        insertCymbalVersesAndDoxologies(btn);
        getGospelReadingAndResponses({
            liturgy: gospelPrefix,
            prayersArray: gospelArray,
            languages: getLanguages(PrayersArraysKeys.find((array) => array[0] === gospelPrefix)[1]),
            container: btnDocFragment,
            isMass: true,
            clearContainer: false,
        });
        (function hideGodHaveMercyOnUsIfBishop() {
            let dataRoot = Prefix.commonPrayer +
                "PrayThatGodHaveMercyOnUs&D=$copticFeasts.AnyDay";
            let godHaveMercyHtml = selectElementsByDataSetValue(btnDocFragment, dataRoot, { startsWith: true }); //We select all the paragraphs not only the paragraph for the Bishop
            godHaveMercyHtml
                .filter((htmlRow) => godHaveMercyHtml.indexOf(htmlRow) > 0 &&
                godHaveMercyHtml.indexOf(htmlRow) !== godHaveMercyHtml.length - 2)
                .forEach((htmlRow) => htmlRow.remove());
            let godHaveMercy = findTable(dataRoot, CommonPrayersArray); //We get the entier table not only the second row. Notice that the first row of the table is the row containing the title
            if (!godHaveMercy)
                return console.log("Didn't find table Gode Have Mercy");
            addExpandablePrayer({
                insertion: godHaveMercyHtml[0].nextElementSibling,
                btnID: "godHaveMercy",
                label: {
                    AR: godHaveMercy[1][2], //This is the arabic text of the lable
                    FR: godHaveMercy[1][1], //this is the French text of the label
                },
                prayers: [godHaveMercy.slice(1, 4)], //We add only the 1st to 3rd rows: the 1st row is a comment from which we retrieved the text for the title, the 2nd and 3rd row is also a comment
                languages: btnMassUnBaptised.languages,
                dataGroup: dataRoot,
            });
        })();
        adaptConcludingHymn(btnDocFragment);
        if (btn !== btnIncenseMorning)
            return; //The functions from this point on concern the Morning Incense service only
        (async function insertPropheciesAndEklonomin() {
            if (![Seasons.GreatLent, Seasons.JonahFast].includes(Season))
                return;
            if ([0, 6].includes(weekDay))
                return; //We are neither a Saturday nor a Sunday, we will hence display the Prophecies dawn buton
            let anchor = selectElementsByDataSetValue(btnDocFragment, Prefix.anchor + "Prophecies&D=$copticFeasts.AnyDay", undefined, 'root')[0];
            (function insertProphecies() {
                //! This must come before Eklonomin Taghonata has been inserted
                let Prophecies = findTable(Prefix.propheciesDawn + "&D=" + copticReadingsDate, ReadingsArrays.PropheciesDawnArrayFR);
                if (!Prophecies)
                    return console.log("Didn't find Prophecies with the current date");
                let title = [[Prophecies[0][0], 'نبوات باكر', 'Prophecies', '']];
                insertPrayersAdjacentToExistingElement({
                    tables: [title, Prophecies],
                    languages: getLanguages(getArrayNameFromArray(ReadingsArrays.PropheciesDawnArrayFR)),
                    position: {
                        beforeOrAfter: "beforebegin",
                        el: anchor
                    },
                    container: btnDocFragment,
                });
            })();
            (async function insertEklonominTaghonata() {
                let godHaveMercy = findTable(Prefix.incenseDawn + "GodHaveMercyOnUs&D=$Seasons.GreatLent", IncensePrayersArray);
                if (!godHaveMercy)
                    return console.log("Didn't find God Have Mercy for Great Lent");
                insertPrayersAdjacentToExistingElement({
                    tables: [godHaveMercy],
                    languages: prayersLanguages,
                    position: {
                        beforeOrAfter: "beforebegin",
                        el: anchor
                    },
                    container: btnDocFragment,
                });
                (function removeRefrains() {
                    //We will remove all the refrains except the 1st one
                    let refrains = selectElementsByDataSetValue(btnDocFragment, Prefix.incenseDawn + "GodHaveMercyOnUsRefrain&D=$Seasons.GreatLent")
                        .filter((htmlRow) => htmlRow.classList.contains("Title"));
                    refrains.forEach((htmlRow) => {
                        if (refrains.indexOf(htmlRow) > 0)
                            htmlRow.remove();
                    });
                })();
            })();
        })();
        (async function addExpandableBtnForAdamDoxolgies() {
            //We add an expandable button for the Incense Dawn Adam Doxologies
            if (btnDocFragment.children.length === 0)
                return;
            addExpandablePrayer({
                insertion: btnDocFragment.children[0],
                btnID: "AdamDoxologies",
                label: {
                    AR: "ذكصولوجيات باكر آدام",
                    FR: "Doxologies Adam du Matin",
                },
                prayers: [findTable(Prefix.doxologies + "AdamDawn&D=$copticFeasts.AnyDay", DoxologiesPrayersArray) || undefined],
                languages: btnIncenseMorning.languages,
            })[1];
        })();
        /**
       * Inserts the Incense Office Doxologies And Cymbal Verses according to the Coptic feast or season
       * @param {HTMLElement | DocumentFragment} container - The HtmlElement in which the btn prayers are displayed and to which they are appended
       */
        async function insertCymbalVersesAndDoxologies(btn) {
            if (!btn.docFragment)
                return console.log("btn.docFragment is undefined = ", btn.docFragment);
            let dayFeasts = (() => {
                let feast = [];
                let matching = Object.entries(copticFeasts).find((entry) => [copticDate, copticReadingsDate].includes(entry[1])); //We check if today is a feast. We also check by the copticReadingsDate because some feast are referrenced by the copticReadings date : eg. Pntl39
                if (matching)
                    feast.push(matching[1]); //We push the date
                matching = Object.entries(Seasons).find((entry) => entry[1] === Season); //We check also for the season
                if (matching)
                    feast.push(matching[1]); //We push the Season
                if (feast.length > 0)
                    return getUniqueValuesFromArray(feast);
            })();
            let anchor;
            (async function InsertCymbalVerses() {
                anchor = selectElementsByDataSetValue(btn.docFragment, Prefix.anchor + "CymbalVerses&D=$copticFeasts.AnyDay")[0];
                if (!anchor)
                    return console.log("We didn't find the cymbal verses placeholder");
                let cymbals;
                if ([Seasons.JonahFast, Seasons.GreatLent].includes(Season) && ![0, 6].includes(weekDay))
                    //If we are during the Jonah Fast or during the Great Lent but not on a Saturday or a Sunday, the Cymbal Verses are not chanted, they are replaced by the Long Kyrielison and the Cymbal Verses End
                    cymbals =
                        [
                            CommonPrayersArray.find(table => table[0][0].startsWith(Prefix.commonPrayer + "KyrieElieson&D=$copticFeasts.AnyDay")),
                            CymbalVersesPrayersArray.find(table => table[0][0].startsWith(Prefix.cymbalVerses + "End&D=$copticFeasts.AnyDay"))
                        ];
                else
                    cymbals = getCymbalVerses();
                if (cymbals.length < 1)
                    return console.log("no cymbals were found by the provided sequence: ");
                insertPrayersAdjacentToExistingElement({
                    tables: getUniqueValuesFromArray(cymbals),
                    languages: btn.languages,
                    position: {
                        beforeOrAfter: "beforebegin",
                        el: anchor.nextElementSibling,
                    },
                    container: btn.docFragment,
                });
                function getCymbalVerses() {
                    let sequence = [
                        Prefix.cymbalVerses + "Wates&D=$copticFeasts.AnyDay",
                        Prefix.cymbalVerses + "&D=$copticFeasts.AnyDay",
                    ];
                    if ([0, 1, 2].includes(weekDay))
                        sequence[0] = sequence[0].replace("Wates&D", "Adam&D");
                    //If we are during any of the Lord Feasts (or any season where we follow the same pattern), we add "Jesus Christ is the same for ever...",
                    if ([...lordFeasts, copticFeasts.Coptic29th].includes(copticDate) ||
                        [Seasons.Nativity, Seasons.Baptism, Seasons.PentecostalDays].includes(Season))
                        sequence =
                            [Prefix.cymbalVerses + "LordFeastsEnd&D=$copticFeasts.AnyDay"];
                    if (dayFeasts)
                        dayFeasts.forEach((feast) => [
                            ...lordFeasts,
                            Seasons.Nativity,
                            Seasons.Baptism,
                            Seasons.PentecostalDays,
                        ].includes(feast) //During Seasons.Nativity (i.e., between Nativity and Circumcision) and Seasons.Baptism(from Baptism to Cana Wedding), the Cymbals verses follow the pattern of any Lord Feast: it starts with "Amoyni Marin..." or "Ten O'osht", then the cymbal verses of the feast, and finally, the "Eb'oro enti ti hirini". We will hence remove the 2nd element from the sequence
                            ? insertFeastInSequence(sequence, feast, 0, 0)
                            : insertFeastInSequence(sequence, feast, 1, 0)); //We always start with 'Amoyni Marin...' or with 'Tin O'osht...', so we will insert the feast element before the 2nd element, and will not delete anything
                    return processSequence(sequence, Prefix.cymbalVerses);
                }
            })();
            (async function InsertCommonDoxologies() {
                let doxologiesAnchor = selectElementsByDataSetValue(btn.docFragment, Prefix.anchor + "Doxologies&D=$copticFeasts.AnyDay")[0];
                if (!doxologiesAnchor)
                    return console.log("Didn't find doxologiesPlaceholder");
                if (!doxologiesAnchor)
                    return;
                let sequence = [
                    Prefix.doxologies + "DawnWatesStMary&D=$copticFeasts.AnyDay",
                    Prefix.doxologies + "StMaykel&D=$copticFeasts.AnyDay",
                    Prefix.doxologies + "CelestialBeings&D=$copticFeasts.AnyDay",
                    Prefix.doxologies + "Apostles&D=$copticFeasts.AnyDay",
                    Prefix.doxologies + "StMarc&D=$copticFeasts.AnyDay",
                    Prefix.doxologies + "StGeorge&D=$copticFeasts.AnyDay",
                    Prefix.doxologies + "StMina&D=$copticFeasts.AnyDay",
                    Prefix.doxologies + "EndOfDoxologiesWates&D=$copticFeasts.AnyDay",
                ];
                if (btn === btnIncenseVespers)
                    sequence[0] = sequence[0].replace("Dawn", "Vespers");
                let excludedFeasts = [
                    saintsFeasts.ArchangelMaykel,
                    saintsFeasts.StMarc,
                    saintsFeasts.StGeorge,
                    saintsFeasts.StMina,
                ]; //Those saints feast will be excluded because the doxologies of those saints are already included by default
                if (dayFeasts) {
                    let index = 2;
                    dayFeasts.forEach((feast) => {
                        if ([
                            ...lordFeasts,
                            Seasons.NativityParamoun,
                            Seasons.Nativity,
                            Seasons.BaptismParamoun,
                            Seasons.Baptism,
                            Seasons.KiahkWeek1,
                            Seasons.KiahkWeek2,
                            Seasons.KiahkWeek3,
                            Seasons.KiahkWeek4,
                            Seasons.GreatLent,
                            Seasons.JonahFast, //The Jonah doxology comes before St. Mary Doxolgy according to some sources
                            Seasons.PentecostalDays,
                        ].includes(feast))
                            index = 0; //If one of the dates in feast[] corresponds to a one of the 'Lord's Feasts', it means we are in a Lord Feast. the doxologies of the feast will be placed at the begining of the doxologies. We follow the same rule for the doxologies of the PentecostalDays and the month of Kiahk
                        else if (excludedFeasts.includes(feast)) {
                            let feastIndex = sequence.indexOf(feast);
                            sequence.splice(2, 0, sequence[feastIndex]); //If it is one of the doxologies already included by default, we place it after St. Maykel
                            sequence.splice(feastIndex + 1, 1); //We then delete the element itself
                            index = undefined; //We set index to undefined in order to prevent insertFeastSequence from inserting any element in sequence
                        }
                        else if (Object.entries(celestialBeingsFeasts).filter(entry => entry[0].startsWith('Archangel')).map(entry => entry[1]).includes(feast))
                            index = 1;
                        insertFeastInSequence(sequence, feast, index, 0);
                    });
                }
                let doxologies = processSequence(sequence, Prefix.doxologies);
                if (doxologies.length === 0)
                    return console.log("Did not find any relevant doxologies");
                if (Season === Seasons.GreatLent) {
                    //For the Great Lent, there is a doxology for the Sundays and 4 doxologies for the week days
                    [0, 6].includes(weekDay) ?
                        doxologies = doxologies
                            .filter((tbl) => !/Week\d&D=\$Seasons.GreatLent/.test(tbl[0][0]))
                        :
                            doxologies = doxologies
                                .filter((tbl) => !tbl[0][0].includes("Sundays&D=$Seasons.GreatLent"));
                }
                insertPrayersAdjacentToExistingElement({
                    tables: getUniqueValuesFromArray(doxologies),
                    languages: btn.languages,
                    position: {
                        beforeOrAfter: "beforebegin",
                        el: doxologiesAnchor.nextElementSibling,
                    },
                    container: btn.docFragment,
                });
            })();
            /**
             * Inserts a new element in the btn.prayersSequence[]. This elment will serve as a placeholder to insert the relevant prayers (Cymbal Verses or Doxologies) for the current season or feast
             * @param {string[]} sequence - the btn's prayers sequence in which the new placeholder element will be inserted
             * @param {string} feastDate - the string representing the feast or the season
             * @param {number} index - the index at which the new placeholder element will be inserted.
             * @param {number} remove the number of elements that will be removed from the sequence after the index
             */
            function insertFeastInSequence(sequence, feastDate, index, remove) {
                if (!index && index !== 0)
                    return;
                sequence.splice(index, remove, feastDate);
            }
            /**
             * Searchs in tablesArray for the tables matching each title in sequence, which is a string[] of titles, and returns a string[][][] of the tables found in the
             * @param {string[]} sequence - An arry of titles that we will be looking for tables matching each of them in tablesArray[][]
             * @param {string} prefix - the prefix with which all the tables in the concerned tables array start (i.e., either Prefix.cymbalVerses, or Prefix.doxologies)
             * @returns {string[][][]} - an array of the tables[][] found
             */
            function processSequence(sequence, prefix) {
                let tables = [], tablesArray = getTablesArrayFromTitlePrefix(prefix);
                sequence.map((title) => {
                    if (!title.startsWith(prefix)) //It means that the title is a Coptic date or a Season
                        tablesArray
                            //!CAUTION: we must use 'filter' not 'find' because for certain feasts there are more than one doxology
                            .filter((tbl) => isMultiDatedTitleMatching(tbl[0][0], [title]))
                            .forEach((tbl) => tables.push(tbl));
                    else
                        tables.push(findTable(title, tablesArray));
                });
                return tables;
            }
        }
    },
});
const btnIncenseVespers = new Button({
    btnID: "btnIncenseVespers",
    label: {
        AR: "بُخُورِ عَشِيَّةَ",
        FR: "Encens Vêpres",
        EN: "Vespers Incense Office",
    },
    showPrayers: true,
    docFragment: new DocumentFragment(),
    languages: [...prayersLanguages],
    onClick: () => {
        btnIncenseVespers.prayersSequence = [...IncensePrayersSequence].filter((title) => title !== Prefix.commonPrayer + "AngelsPrayer&D=$copticFeasts.AnyDay" &&
            !title.startsWith(Prefix.incenseDawn));
        scrollToTop();
        return btnIncenseVespers.prayersSequence;
    },
    afterShowPrayers: () => btnIncenseMorning.afterShowPrayers(btnIncenseVespers, Prefix.gospelVespers, ReadingsArrays.GospelVespersArrayFR),
});
const btnIncenseOffice = new Button({
    btnID: "btnIncenseOffice",
    label: {
        AR: "رفع بخور باكر أو عشية",
        FR: "Encens Matin et Vêpres",
        EN: 'Morning & Vespers Incense'
    },
    onClick: (returnChildren = false) => {
        //setting the children of the btnIncenseOffice. This must be done by the onClick() in order to reset them each time the button is clicked
        btnIncenseOffice.children = [btnIncenseMorning, btnIncenseVespers];
        //show or hide the PropheciesDawn button if we are in the Great Lent or JonahFast:
        //We will remove the Vespers Button during if we are during the Great Lent or the Jonah Fast, and we are not a Saturday
        if ([Seasons.GreatLent, Seasons.JonahFast].includes(Season) &&
            weekDay !== 6)
            btnIncenseOffice.children = [btnIncenseMorning];
        if (returnChildren)
            return btnIncenseOffice.children;
    },
});
const btnMassStBasil = new Button({
    btnID: "btnMassStBasil",
    label: { AR: "باسيلي", FR: "Saint Basil", EN: "St Basil" },
    docFragment: new DocumentFragment(),
    showPrayers: true, //we set it to false in order to escape showing the prayers again after inserting the redirection buttons. The showPrayers() function is called by onClick()
    languages: [...prayersLanguages],
    onClick: () => {
        //Setting the standard mass prayers sequence
        btnMassStBasil.prayersSequence = [
            ...MassPrayersSequences.MassStBasil,
            ...MassPrayersSequences.MassCallOfHolySpirit,
            ...MassPrayersSequences.MassLitanies,
            ...MassPrayersSequences.Communion,
        ];
        //We scroll to the beginning of the page after the prayers have been displayed
        scrollToTop();
        // btnsPrayersSequences.splice(btns.indexOf(btnMassStBasil), 1, btnMassStBasil.prayersSequence);
        // btnMassStBasil.retrieved = true;
        return btnMassStBasil.prayersSequence;
    },
    afterShowPrayers: (btn = btnMassStBasil) => {
        let btnDocFragment = btn.docFragment;
        (function insertSecondReconciliationBtn() {
            if (![btnMassStBasil, btnMassStCyril].includes(btn))
                return;
            let mass = [[btnMassStBasil, Prefix.massStBasil, MassStBasilPrayersArray], [btnMassStCyril, Prefix.massStCyril, MassStCyrilPrayersArray]]
                .find(a => a[0] === btn);
            let secondReconciliation = findTable(mass[1] + "Reconciliation2&D=$copticFeasts.AnyDay", mass[2]);
            if (!secondReconciliation)
                return console.log("Didn't find reconciliation");
            let htmlBtn = addExpandablePrayer({
                insertion: selectElementsByDataSetValue(btnDocFragment, mass[1] + "Reconciliation&D=$copticFeasts.AnyDay")[0].nextElementSibling, //We insert the button after the title
                btnID: "secondStBasilReconciliation",
                label: {
                    FR: secondReconciliation[0][2],
                    AR: secondReconciliation[0][4],
                },
                prayers: [secondReconciliation],
                languages: btn.languages,
            })[0];
            htmlBtn.addEventListener("click", () => {
                let dataGroup = mass[1] + "Reconciliation&D=$copticFeasts.AnyDay";
                selectElementsByDataSetValue(containerDiv, dataGroup, undefined, 'group')
                    .forEach((row) => row.classList.toggle(hidden));
            });
        })();
        (function addRedirectionButtons() {
            //We create a list of the masses to which we will insert redirection button
            let redirectToList = [
                btnMassStBasil,
                btnMassStGregory,
                btnMassStCyril,
                btnMassStJohn,
            ];
            redirectToList.splice(redirectToList.indexOf(btn), 1); //We remove the btn of the mass from the redirection list
            redirectToList.splice(redirectToList.indexOf(btnMassStJohn), 1); //We remove the mass of st John
            let select;
            //Adding 2 buttons to redirect the other masses at the begining of the Reconciliation
            select = selectElementsByDataSetValue(btnDocFragment, "Reconciliation&D=$copticFeasts.AnyDay", { includes: true });
            redirectToAnotherMass([...redirectToList], {
                beforeOrAfter: "afterend",
                el: select[0],
            }, "RedirectionToReconciliation");
            //Adding 2 buttons to redirect to the other masses at the Anaphora prayer After "By the intercession of the Virgin St. Mary"
            select = selectElementsByDataSetValue(btnDocFragment, Prefix.massCommon + "SpasmosAdamShort&D=$copticFeasts.AnyDay", { endsWith: true });
            redirectToAnotherMass([...redirectToList], {
                beforeOrAfter: "afterend",
                el: select[select.length - 1],
            }, "RedirectionToAnaphora");
            //Adding 2 buttons to redirect to the other masses before Agios
            select = selectElementsByDataSetValue(btnDocFragment, [[btnMassStBasil, Prefix.massStBasil], [btnMassStGregory, Prefix.massStGregory], [btnMassStCyril, Prefix.massStCyril]].find(a => a[0] === btn)[1] + "Agios&D=$copticFeasts.AnyDay");
            redirectToAnotherMass([...redirectToList], {
                beforeOrAfter: "afterend",
                el: select[0].previousElementSibling,
            }, "RedirectionToAgios");
            //Adding 2 buttons to redirect to the other masses before the Call upon the Holy Spirit
            select = selectElementsByDataSetValue(btnDocFragment, Prefix.massCommon +
                "AssemblyResponseAmenAmenAmenWeProclaimYourDeath&D=$copticFeasts.AnyDay");
            redirectToAnotherMass([...redirectToList], {
                beforeOrAfter: "afterend",
                el: select[0],
            }, "RedirectionToLitanies");
            //Adding 2 buttons to redirect to the other masses before the Fraction Introduction
            select = selectElementsByDataSetValue(btnDocFragment, "FractionIntroduction&D=$copticFeasts.AnyDay", { includes: true });
            redirectToAnotherMass([...redirectToList], {
                beforeOrAfter: "beforebegin",
                el: select[0],
            }, "RedirectionToFractionIntroduction");
            /**
             *
             * @param {HTMLDivElement} targetElement - the html child of containerDiv, in relation to which the newly created div containing the html buttons elements, will be placed according to a given position
             * @param {Button[]} btns - a list of Button for each we will create an inline redirection html button
             * @param {InsertPosition} position - an object providing the position where the newly created div containing the html elements, will be placed compared. The div is placed in a position (i.e., the beforeOrAfter property) in relation ton an html element in the containerDiv (el) which is the targetEelement
             *@param {string} btnsContainerID - the id of the div container to which the html buttons will be appended. This id may be needed to select the div after redirection
            */
            async function redirectToAnotherMass(btns, position, btnsContainerID) {
                if (!position.el)
                    return;
                let redirectTo = [];
                btns.map((btn) => {
                    //for each button in the btns array, we will create a fake Button and will set its onClick property to a function that retrieves the text of the concerned mass
                    let newBtn = new Button({
                        btnID: "GoTo_" +
                            btn.btnID.split("btn")[1] +
                            "_From_" +
                            position.el.dataset.root,
                        label: {
                            AR: btn.label.AR,
                            FR: btn.label.FR,
                        },
                        cssClass: inlineBtnClass,
                        onClick: () => {
                            showChildButtonsOrPrayers(btn); //We simulated as if btn itself has been clicked, which will show all its prayers, children, etc.
                            //if there is an element in containerDiv having the same data-root as targetElement
                            if (containerDiv.querySelector("#" + btnsContainerID))
                                createFakeAnchor(btnsContainerID);
                        },
                    });
                    redirectTo.push(newBtn);
                });
                insertRedirectionButtons(redirectTo, position, btnsContainerID);
            }
        })();
        (function insertAdamAndWatesSpasmos() {
            //We insert it during the Saint Mary Fast and on every 21th of the coptic month
            let spasmosTitle = Prefix.massCommon + "SpasmosAdamLong";
            let anchorTitle = Prefix.massCommon + "DiaconResponseKissEachOther&D=$copticFeasts.AnyDay";
            insertSpasmos(spasmosTitle, selectElementsByDataSetValue(btnDocFragment, anchorTitle)[0]);
            anchorTitle = Prefix.massCommon + "SpasmosWatesShort&D=$copticFeasts.AnyDay";
            //Insert Wates Spasmoses
            insertSpasmos(spasmosTitle.replace("Adam", "Wates"), selectElementsByDataSetValue(btnDocFragment, anchorTitle)[0], true);
        })();
        function insertSpasmos(spasmosTitle, anchor, hideAnchor = false) {
            if (!anchor)
                return console.log('anhcor is not valid');
            let spasmos = MassCommonPrayersArray.find((tbl) => tbl[0][0].startsWith(spasmosTitle) &&
                isMultiDatedTitleMatching(tbl[0][0], [Season]));
            if (!spasmos)
                return console.log("didn't find spasmos with title = ", spasmosTitle);
            let createdElements = addExpandablePrayer({
                insertion: anchor,
                btnID: spasmosTitle.split("&D=")[0],
                label: {
                    FR: spasmos[0][2],
                    AR: spasmos[0][4],
                },
                prayers: [spasmos],
                languages: btn.languages,
            });
            if (hideAnchor)
                createdElements[0].addEventListener("click", () => selectElementsByDataSetValue(containerDiv, anchor.dataset.root).forEach((row) => row.classList.toggle(hidden)));
        }
        (function insertLitaniesIntroductionFromOtherMasses() {
            if (btn !== btnMassStBasil)
                return; //This button appears only in St Basil Mass
            let litaniesIntro = findTable(Prefix.massStGregory + "LitaniesIntroduction", MassStGregoryPrayersArray, { startsWith: true }) || undefined;
            if (!litaniesIntro)
                return console.log("Did not find the Litanies Introduction");
            let anchor = selectElementsByDataSetValue(btnDocFragment, Prefix.massCommon + "LitaniesIntroduction&D=$copticFeasts.AnyDay")[0];
            if (!anchor)
                return console.log("Di not find the Anchor");
            let createdElements = addExpandablePrayer({
                insertion: anchor,
                btnID: "btnStGregoryLitaniesIntro",
                label: {
                    AR: "طلبات القداس الغريوري",
                    FR: "Litanies de St. Gregory",
                },
                prayers: [litaniesIntro],
                languages: btn.languages,
            });
            //Adding the St Cyril Litanies Introduction to the St. Basil Mass only. St Gregory Mass has its own intro, and we do not of course add it to St Cyrill since it is already included
            litaniesIntro = findTable(Prefix.massStCyril + "LitaniesIntroduction", MassStCyrilPrayersArray, { startsWith: true });
            if (!litaniesIntro.length)
                console.log("Did not find the St Cyril Litanies Introduction");
            if (litaniesIntro) {
                litaniesIntro = structuredClone(litaniesIntro).splice(litaniesIntro.length - 1, 1); //We remove the last row in the table of litaniesIntro because it is the "As it were, let it always be.../كما كان هكذا يكون/tel qu'il fût ainsi soit-il..."
            }
            //We will create the expandable div and its button, but will append the button to the div
            let btnsDiv = createdElements[0].parentElement;
            btnsDiv.appendChild(addExpandablePrayer({
                insertion: anchor,
                btnID: "btnStCyrilLitaniesIntro",
                label: {
                    AR: "طلبات القداس الكيرلسي",
                    FR: "Litanies de la messe de Saint Cyril",
                },
                prayers: [litaniesIntro],
                languages: btnMassStCyril.languages,
            })[0] //this is the buton created by addExpandablePrayer
            );
            //We add to each button a 'click' event listner that will hide the other litanies
            Array.from(btnsDiv.children).forEach((child) => child.addEventListener("click", () => toggleOtherLitanies(child.id)));
            btnsDiv.style.gridTemplateColumns = setGridColumnsOrRowsNumber(btnsDiv, 3);
            function toggleOtherLitanies(btnID) {
                let div = Array.from(containerDiv.querySelectorAll(".Expandable")).find((btn) => btn.id.includes("LitaniesIntro") && !btn.id.startsWith(btnID));
                if (div && !div.classList.contains(hidden))
                    div.classList.add(hidden);
            }
        })();
        (function insertRelevantSeasonalLitany() {
            let anchor = selectElementsByDataSetValue(btnDocFragment, Prefix.massCommon + "SeasonalLitanyPlaceHolder", undefined, 'root')[0];
            if (!anchor)
                return console.log('Didn\'t find the anhcor');
            let tbl = findTable(Prefix.massCommon + 'SeasonalLitany&D=$Seasons.' + Object.entries(Seasons).find(entry => entry[1] === naturalSeasons())[0], MassCommonPrayersArray);
            if (!tbl)
                return console.log('Didn\'t find the tbl');
            insertPrayersAdjacentToExistingElement({
                tables: [tbl],
                languages: prayersLanguages,
                position: { el: anchor, beforeOrAfter: 'beforebegin' },
                container: btnDocFragment,
            });
        })();
        (function showFractionPrayersMasterButton() {
            //We will insert a button displaying a pannel of choices for the different Fraction prayers according to the day/season, etc.s
            showMultipleChoicePrayersButton({
                filteredPrayers: filter(),
                languages: prayersLanguages,
                btnLabels: { AR: "صلوات القسمة", FR: "Oraisons de la Fraction" },
                masterBtnID: "btnFractionPrayers",
                anchor: Array.from(btnDocFragment.children)
                    .find(child => child.id && child.id.startsWith(Prefix.anchor + "Fraction&D=$copticFeasts.AnyDay")),
            });
            function filter() {
                let filtered = [];
                let dates = [copticDate, Season, copticFeasts.AnyDay];
                if (Number(copticDay) === 29 && ![4, 5, 6].includes(Number(copticMonth)))
                    dates.unshift(copticFeasts.Coptic29th);
                dates.forEach(date => filtered.push(...FractionsPrayersArray.filter(table => isMultiDatedTitleMatching(table[0][0], [date]))));
                return getUniqueValuesFromArray(filtered);
            }
            ;
        })();
        (function insertCommunionChants() {
            //Inserting the Communion Chants after the Psalm 150
            let psalm150 = selectElementsByDataSetValue(btnDocFragment, Prefix.massCommon + "CommunionPsalm150&D=$copticFeasts.AnyDay");
            let filtered = [];
            [copticDate, Season, copticFeasts.AnyDay]
                .forEach(date => {
                filtered.push(...CommunionPrayersArray.filter(table => isMultiDatedTitleMatching(table[0][0], [date])));
            });
            showMultipleChoicePrayersButton({
                filteredPrayers: getUniqueValuesFromArray(filtered),
                languages: btn.languages,
                btnLabels: {
                    AR: "مدائح التوزيع",
                    FR: "Chants de la communion",
                },
                masterBtnID: "communionChants",
                anchor: psalm150[psalm150.length - 1],
            });
        })();
        adaptConcludingHymn(btnDocFragment);
    },
});
const btnMassStCyril = new Button({
    btnID: "btnMassStCyril",
    label: { AR: "كيرلسي", FR: "Saint Cyril", EN: "St Cyril" },
    docFragment: new DocumentFragment(),
    showPrayers: true, //we set it to false in order to escape showing the prayers again after inserting the redirection buttons. The showPrayers() function is called by onClick()
    languages: [...prayersLanguages],
    onClick: () => {
        //Setting the standard mass prayers sequence
        btnMassStCyril.prayersSequence = [
            ...MassPrayersSequences.MassStCyril,
            ...[
                Prefix.massCommon +
                    "AgiosPart3&D=$copticFeasts.AnyDay",
                Prefix.commonPrayer + "KyrieElieson&D=$copticFeasts.AnyDay",
                Prefix.commonPrayer + "BlockIriniPassi&D=$copticFeasts.AnyDay",
                Prefix.anchor + "Fraction&D=$copticFeasts.AnyDay",
                Prefix.commonPrayer + "OurFatherWhoArtInHeaven&D=$copticFeasts.AnyDay",
                Prefix.massCommon + "Confession&D=$copticFeasts.AnyDay",
            ],
            ...MassPrayersSequences.Communion,
        ];
        return btnMassStCyril.prayersSequence;
    },
    afterShowPrayers: async () => btnMassStBasil.afterShowPrayers(btnMassStCyril),
});
const btnMassStGregory = new Button({
    btnID: "btnMassStGregory",
    label: { AR: "غريغوري", FR: "Saint Gregory" },
    docFragment: new DocumentFragment(),
    showPrayers: true, //we set it to false in order to escape showing the prayers again after inserting the redirection buttons. The showPrayers() function is called by onClick()
    languages: [...prayersLanguages],
    onClick: () => {
        //Setting the standard mass prayers sequence
        btnMassStGregory.prayersSequence = [
            ...MassPrayersSequences.MassStGregory,
            ...MassPrayersSequences.MassCallOfHolySpirit,
            ...MassPrayersSequences.MassLitanies,
            ...MassPrayersSequences.Communion,
        ];
        //removing irrelevant prayers from the array
        btnMassStGregory.prayersSequence.splice(btnMassStGregory.prayersSequence.indexOf(Prefix.massCommon + "CallOfTheHolySpiritPart1&D=$copticFeasts.AnyDay"), 9);
        scrollToTop();
        return btnMassStGregory.prayersSequence;
    },
    afterShowPrayers: async () => btnMassStBasil.afterShowPrayers(btnMassStGregory),
});
const btnMassStJohn = new Button({
    btnID: "btnMassStJohn",
    label: { AR: "القديس يوحنا", FR: "Saint Jean" },
    docFragment: new DocumentFragment(),
    showPrayers: false, //we set it to false in order to escape showing the prayers again after inserting the redirection buttons. The showPrayers() function is called by onClick()
    prayersSequence: [],
    onClick: () => {
        alert("The prayers of this mass have not yet been added. We hope they will be ready soon");
        return; //until we add the text of this mass
        scrollToTop(); //scrolling to the top of the page
        return btnMassStJohn.prayersSequence;
    },
    afterShowPrayers: async () => btnMassStBasil.afterShowPrayers(btnMassStJohn),
});
const btnMassBaptised = new Button({
    btnID: "btnMassBaptised",
    label: {
        AR: "قٌدَّاسِ المُؤْمِنينَ",
        FR: "Liturgie des Croyants",
        EN: "Baptized Mass",
    },
    parentBtn: btnMass,
    children: [btnMassStBasil, btnMassStGregory, btnMassStCyril], //We are removing Mass StJohn for now
});
const btnGospelVespers = new Button({
    btnID: "btnReadingsGospelIncenseVespers",
    label: {
        AR: "إنجيل عشية",
        FR: "Évangile  Vêpres",
        EN: "Vespers Gospel",
    },
    showPrayers: true,
    onClick: () => btnGospelMass.onClick(Prefix.gospelVespers),
});
const btnGospelMorning = new Button({
    btnID: "btnReadingsGospelIncenseDawn",
    label: {
        AR: "إنجيل باكر",
        FR: "Évangile du Matin",
        EN: "Morning Gospel",
    },
    showPrayers: true,
    onClick: () => btnGospelMass.onClick(Prefix.gospelMorning),
});
const btnGospelNight = new Button({
    btnID: "btnReadingsGospelNight",
    label: {
        AR: "إنجيل المساء",
        FR: "Évangile du Soir",
        EN: "Night Gospel",
    },
    showPrayers: true,
    onClick: () => btnGospelMass.onClick(Prefix.gospelNight)
});
const btnGospelMass = new Button({
    btnID: "btnReadingsGospelMass",
    label: {
        AR: "إنجيل القداس",
        FR: "Évangile de la messe",
        EN: "Mass Gospel",
    },
    showPrayers: true,
    onClick: (gospelPrefix = Prefix.gospelMass) => {
        let prayersArray = PrayersArraysKeys.find((entry) => entry[0] === gospelPrefix);
        if (!prayersArray)
            return console.log("Didn\'t find the prayersArray");
        containerDiv.innerHTML = "";
        getGospelReadingAndResponses({
            liturgy: gospelPrefix,
            prayersArray: prayersArray[2](),
            languages: getLanguages(prayersArray[1]),
            container: containerDiv,
            isMass: false,
            clearContainer: true,
        });
        scrollToTop(); //scrolling to the top of the page
    },
});
const btnHolyWeek = new Button({
    btnID: 'btnHolyWeek',
    label: { AR: 'طقس اسبوع الآلام', FR: 'Rite de la semaine sainte' },
    onClick: () => {
        /*The buttons tree is structured this way:
        btnMaster =>
                btnPassOver =>
                        [btnDay, btnEvening]=>
                                  [btn1stHour, btn3rdHour, etc.]*/
        let Evening = 'E', Morning = 'M';
        let btnPassOver = new Button({
            btnID: 'btnPassover',
            label: { AR: 'البصخة المقدسة', FR: 'Pessah' },
            onClick: () => btnPassOver.children = [btnPassOverOnClick(Morning), btnPassOverOnClick(Evening)], //We remove undefined elements
        }); //btnPassOver shows Day and Evening buttons
        btnHolyWeek.children = [btnPassOver];
        function btnPassOverOnClick(service) {
            if (!service)
                return;
            return getDayAndEveningBtns(service);
            function getDayAndEveningBtns(service) {
                if (service === Evening && weekDay === 5)
                    return undefined; //This will be the Apocalyps Btns
                if (service === Morning && [6].includes(weekDay))
                    return undefined; //There is no morning Passover on Palm Sunday and Holy Saturday
                let labels = [
                    { AR: 'بصخة الصباح', FR: 'Matin' },
                    { AR: 'بصخة المساء', FR: 'Soir' }
                ];
                let btn = new Button({
                    btnID: 'btnPassover' + service,
                    label: labels[[Morning, Evening].indexOf(service)],
                    parentBtn: btnPassOver,
                    onClick: () => btn.children = getPassoverHoursBtns(service, btn),
                });
                return btn; //btn shows a btn for each hour according to whether we are in the 'Day' or 'Evening' Passover liturgy
            }
        }
        function getPassoverHoursBtns(service, btn) {
            if (btn.children)
                return;
            let hoursLabels;
            (function generateButtonsLabels() {
                let days = [
                    ['Sunday', 'الأحد', 'dimanche'],
                    ['Monday', 'الإثنين', 'lundi'],
                    ['Tuesday', 'الثلاثاء', 'mardi'],
                    ['Wednesday', 'الأربعاء', 'mercredi'],
                    ['Thursday', 'الخميس', 'jeudi'],
                    ['Friday', 'الجمعة', 'vendredi'],
                    ['Saturday', 'السبت', 'samedi'],
                ];
                hoursLabels = [
                    {
                        prefix: '1H',
                        lable: { AR: 'الساعة الأولى', FR: 'Première heure', EN: 'First Hour' }
                    },
                    {
                        prefix: '3H',
                        lable: { AR: 'الساعة الثالثة', FR: 'Troisième heure', EN: 'Third Hour' }
                    },
                    {
                        prefix: '6H',
                        lable: { AR: 'الساعة السادسة', FR: 'Sixième heure', EN: 'Sixth Hour' }
                    },
                    {
                        prefix: '9H',
                        lable: { AR: 'الساعة التاسعة', FR: 'Neuvième heure', EN: 'Nineth Hour' }
                    },
                    {
                        prefix: '11H',
                        lable: { AR: 'الساعة الحادية عشر', FR: 'Onzième heure', EN: 'Eleventh Hour' }
                    },
                    {
                        prefix: '12H',
                        lable: { AR: 'الساعة الثانية عشر', FR: 'Douzième heure', EN: 'Twelveth Hour' }
                    },
                ];
                hoursLabels.forEach(hour => {
                    if (service === Morning) {
                        hour.lable.AR += ' من يوم ' + days[weekDay][1];
                        hour.lable.FR += ' du ' + days[weekDay][2];
                        hour.lable.EN += ' of ' + days[weekDay][0];
                    }
                    else if (service === Evening && weekDay !== 5) {
                        hour.lable.AR += ' من ليلة ' + days[weekDay + 1][1];
                        hour.lable.FR += ' de la veille du ' + days[weekDay + 1][2];
                        hour.lable.EN += ' of ' + days[weekDay + 1][0] + ' Evening ';
                    }
                    else if (service === Evening && weekDay === 5) {
                        hour.lable.AR += ' من ليلة أبو غلمسيس ';
                        hour.lable.FR += ' de la veille de Abou Ghalamsis ' + days[weekDay + 1][2];
                        hour.lable.EN += ' of Abou Ghalamsis';
                    }
                });
            })();
            return hoursLabels.map(hour => createHourBtn(hour.prefix, hour.lable)).filter(btn => btn); //We remove any undefined buttons      
            function createHourBtn(hour, label) {
                if (hour === '12H' && weekDay !== 5)
                    return undefined; //The 12th hour is only for Friday
                if (['1H', '3H', '6H'].includes(hour) && service === Morning && weekDay === 0)
                    return undefined; //On Palm Sunday we start at the 9th hour
                let hourReadings = ReadingsArrays.GospelNightArrayFR
                    .filter(table => RegExp(Prefix.HolyWeek + hour + service + '\.*&D=' + copticReadingsDate).test(table[0][0]));
                let btnHour = new Button({
                    btnID: 'btn' + hour,
                    label: label,
                    parentBtn: btn,
                    languages: prayersLanguages,
                    docFragment: new DocumentFragment(),
                    showPrayers: true,
                    onClick: () => btnHour.prayersSequence = [...HolyWeekPrayersSequences.PassOver],
                    afterShowPrayers: () => hourBtnAfterShowPrayers(btnHour, hour, hourReadings, label),
                });
                return btnHour;
                function hourBtnAfterShowPrayers(btn, hour, dayPrayers, label) {
                    let titles;
                    (function generateTablesTitles() {
                        titles = {
                            Prophecies: {
                                AR: ' نُبُوّات ',
                                FR: ' Prophécies de la ',
                                EN: ' Prophecies of the ',
                            },
                            Psalm: {
                                AR: ' مزمور ',
                                FR: ' Psaume de la ',
                                EN: ' Psalm of the ',
                            },
                            Gospel: {
                                AR: ' إنجيل ',
                                FR: ' Evangile de la ',
                                EN: ' Gospel of the ',
                            },
                            Commentary: {
                                AR: ' طرح ',
                                FR: ' Commentaire de la ',
                                EN: ' Commentary on the ',
                            },
                            Sermony: {
                                AR: ' عظة ',
                                FR: ' Sermon de la ',
                                EN: ' Sermony of the ',
                            },
                        };
                        Array.from(Object.entries(titles))
                            .forEach(entry => {
                            Array.from(Object.entries(entry[1]))
                                .forEach(title => {
                                titles[entry[0]][title[0]] = title[1] + label[title[0]];
                            });
                        });
                    })();
                    (function insertHourReadings() {
                        let readingsLangs = ['COP', 'FR', 'AR'];
                        let readings = {
                            coptGospel: { table: undefined, anchor: undefined },
                            nonCopticGospel: { table: undefined, anchor: undefined },
                            coptPsalm: { table: undefined, anchor: undefined },
                            nonCopticPsalm: { table: undefined, anchor: undefined },
                            Commentary: { table: undefined, anchor: undefined },
                            Prophecies: { table: undefined, anchor: undefined },
                            Sermony: { table: undefined, anchor: undefined },
                            KhinEfran: { table: undefined, anchor: undefined },
                            Litany: { table: undefined, anchor: undefined },
                        };
                        (function fetchKhinEfranAndLitany() {
                            readings.KhinEfran.table = findTable(Prefix.HolyWeek + "KhinEfran" + service + "&D=$Seasons.HolyWeek", HolyWeekPrayersArray) || undefined;
                            if (!readings.KhinEfran.table)
                                return console.log('Didn\'t find Khin Efran');
                            readings.Litany.table = findTable(Prefix.HolyWeek + "FinalLitany" + service + "&D=$Seasons.HolyWeek", HolyWeekPrayersArray) || undefined;
                            if (!readings.Litany.table)
                                return console.log('Didn\'t find Litany');
                            readings.KhinEfran.anchor = fetchAnchors('KhinEfran');
                            readings.Litany.anchor = fetchAnchors('FinalLitany');
                        })();
                        (function fetchHourReadings() {
                            fetchTableOrPlaceHolder(readings.coptGospel, 'Gospel', 'CopticGospel');
                            fetchTableOrPlaceHolder(readings.nonCopticGospel, 'Gospel', 'nonCopticGospel');
                            fetchTableOrPlaceHolder(readings.coptPsalm, 'Psalm', 'CopticPsalm');
                            fetchTableOrPlaceHolder(readings.nonCopticPsalm, 'Psalm', 'nonCopticGospel');
                            fetchTableOrPlaceHolder(readings.Commentary, 'Commentary', 'Commentary');
                            fetchTableOrPlaceHolder(readings.Prophecies, 'Prophecies', 'Prophecies');
                            fetchTableOrPlaceHolder(readings.Sermony, 'Sermony', 'Prophecies');
                            readings.nonCopticPsalm.anchor = readings.nonCopticPsalm.anchor.previousElementSibling; //We need to do this because the nonCopticPsalm is inseret before the previous sibling of nonCopticGospel.placeHolder
                            function fetchTableOrPlaceHolder(reading, name, anchor) {
                                reading.table = fetchTable(name);
                                reading.anchor = fetchAnchors(anchor);
                            }
                            (function getVersionsOfGospelAndPsalm() {
                                //For the gospel and the psalm, we need to get 2 versions of each: the first version is only coptic, and the 2nd version includes all the other languages except the Coptic version
                                [readings.coptGospel, readings.nonCopticGospel, readings.coptPsalm, readings.nonCopticPsalm]
                                    .forEach((version) => {
                                    if (!version.table)
                                        return;
                                    version.table = (version.table)
                                        .map((row) => {
                                        if ([readings.coptGospel, readings.coptPsalm].includes(version))
                                            return [row[0], row[readingsLangs.indexOf('COP') + 1]];
                                        if ([readings.nonCopticGospel, readings.nonCopticPsalm].includes(version))
                                            return row.filter(el => row.indexOf(el) !== readingsLangs.indexOf('COP') + 1);
                                    });
                                });
                            })();
                            function fetchTable(name) {
                                return findTable(Prefix.HolyWeek + hour + service + name, dayPrayers, { startsWith: true }) || undefined;
                            }
                        })();
                        function fetchAnchors(placeHolder) {
                            return selectElementsByDataSetValue(btnHour.docFragment, Prefix.anchor + placeHolder + '&D=$Seasons.HolyWeek', undefined, 'root')[0];
                        }
                        (function insertTablesBeforeAnchors() {
                            let languages;
                            [readings.coptPsalm,
                                readings.coptGospel,
                                readings.nonCopticPsalm,
                                readings.nonCopticGospel,
                                readings.Commentary,
                                readings.Prophecies,
                                readings.Sermony, //!This must come directly after readings.Prophecies
                                readings.KhinEfran,
                                readings.Litany]
                                .forEach((reading) => {
                                if (!reading.table || !reading.anchor)
                                    return console.log('Either the table or the Anchor are missing:  table = ', reading.table, 'Anchor = ', reading.anchor);
                                if ([readings.KhinEfran, readings.Litany].includes(reading))
                                    languages = prayersLanguages;
                                else if ([readings.Sermony, readings.Commentary, readings.Prophecies].includes(reading))
                                    languages = readingsLangs;
                                else if ([readings.nonCopticGospel, readings.nonCopticPsalm].includes(reading))
                                    languages = [readingsLangs[1], readingsLangs[2]];
                                else if ([readings.coptGospel, readings.coptPsalm].includes(reading))
                                    languages = [readingsLangs[0]];
                                reading.table = reading.table.filter(row => row); //We remove any undefined elements in the table;
                                reading.table = retrieveReadingTableFromBible(reading.table, languages);
                                reading.table[0] = insertTableTitleRow();
                                if (reading === readings.Prophecies)
                                    reading.table = processPropheciesTitles(reading.table); //!This must come before the text is retrieved from the bible because the references rows are replaced by the text and will be lost
                                insertPrayersAdjacentToExistingElement({
                                    tables: [reading.table],
                                    languages: languages,
                                    container: btnHour.docFragment,
                                    position: {
                                        el: reading.anchor, beforeOrAfter: 'beforebegin'
                                    }
                                });
                                function insertTableTitleRow() {
                                    let row = [reading.table[0][0]];
                                    let title;
                                    if (reading === readings.Commentary)
                                        title = titles.Commentary;
                                    else if (reading === readings.Prophecies)
                                        title = titles.Prophecies;
                                    else if (reading === readings.Sermony)
                                        title = titles.Sermony;
                                    else if (reading === readings.nonCopticGospel)
                                        title = titles.Gospel;
                                    else if (reading === readings.nonCopticPsalm)
                                        title = titles.Psalm;
                                    else
                                        return reading.table[0];
                                    languages
                                        .map(lang => lang !== 'COP' ? row.push(title[lang]) : row.push(''));
                                    return row;
                                }
                                function processPropheciesTitles(table) {
                                    return table;
                                    if (!table[0][0].includes('Prophecies&D='))
                                        return table;
                                    let references = [], index;
                                    for (let i = 1; i < table.length; i++) {
                                        if (!table[i][0].includes('&C=Title'))
                                            continue;
                                        index = i;
                                        i += 1;
                                        while (!table[i][0].startsWith(Prefix.readingRef))
                                            i += 1;
                                        while (table[i][0].startsWith(Prefix.readingRef)) {
                                            references.push(table[i][0].split('&C=')[0]);
                                            if (i === table.length - 1)
                                                break;
                                            i += 1;
                                        }
                                        if (references.length < 1)
                                            continue;
                                        table[index] = [Prefix.same + "&C=Title", ...languages.map(lang => getReferencesTitle(lang))];
                                        i -= 1;
                                        references = [];
                                    }
                                    return table;
                                    function getReferencesTitle(lang) {
                                        if (![defaultLanguage, foreingLanguage].includes(lang))
                                            return '';
                                        let reference1 = references[0].split(Prefix.readingRef)[1].split(':'); //This should yield a 3 elements array ["book name", "chapter number", "verses range"] like ["GEN", "12", "3-7"]
                                        let book = getBibleBooksList(lang).find(b => b.id === reference1[0]);
                                        if (!book)
                                            return '';
                                        let first = reference1[reference1.length - 1].split('-')[0];
                                        let lastReference = references[references.length - 1].split(':');
                                        return book.human + '\n(' + reference1[1] + ': ' + first + '-' + lastReference[lastReference.length - 1].split('-')[1] + ')';
                                    }
                                }
                            });
                        })();
                        Array.from(btnHour.docFragment.children).find((div) => div.dataset.root === Prefix.incenseDawn +
                            "GodHaveMercyOnUsRefrain&D=$Seasons.GreatLent").remove(); //Removing the Title row of the "God Have Mercy" table
                    })();
                    (function insertThursdayLakanAndMassBtns() {
                        //If we are on the Holy Thursday morning service
                        if (weekDay !== 4)
                            return;
                        if (service !== Morning)
                            return; //We are during the Morning Passover service
                        if (hour !== '9H')
                            return; //It is the 9th Hour button
                        let anchor = selectElementsByDataSetValue(btn.docFragment, Prefix.HolyWeek + 'Begining of the 11th Hour element', undefined, 'root'); //!We need to check the anchor
                        if (!anchor)
                            return;
                        let btnsDiv = document.createElement('div');
                        btnsDiv.style.display = "grid";
                        btnsDiv.style.gridTemplateColumns = "50% 50%";
                        anchor[0].insertAdjacentElement('beforebegin', btnsDiv);
                        let btnLakan = new Button({
                            btnID: 'Lakan',
                            label: { AR: 'لقان خميس العهد', FR: 'Lavage des pieds' },
                            languages: prayersLanguages,
                            showPrayers: true,
                            onClick: () => btnLakanOnClick(btnLakan.btnID, btnsDiv),
                            afterShowPrayers: () => btnLakanAfterShowPrayers(btnLakan.btnID),
                        });
                        let btnMass = new Button({
                            btnID: 'ThursdayMass',
                            label: { AR: 'قداس خميس العهد', FR: 'Messe du Jeudi Saint' },
                            languages: prayersLanguages,
                            showPrayers: true,
                            onClick: () => btnMassOnClick(btnMass.btnID, btnsDiv),
                            afterShowPrayers: () => btnMassAfterShowPrayers(btnMass.btnID),
                        });
                        let btnGoBack = Array.from(sideBarBtnsContainer.children).find(htmlBtn => htmlBtn.id === btnGoToPreviousMenu.btnID);
                        let htmlBtn;
                        [btnLakan, btnMass].forEach(btn => {
                            htmlBtn = createHtmlBtn({
                                btn: btn,
                                btnsContainer: btnsDiv,
                                btnClass: inlineBtnClass,
                                clear: false
                            });
                            btnGoBack.insertAdjacentElement('beforebegin', htmlBtn.cloneNode(true)); //We add a copy of each button to the left side bar
                        });
                        function btnLakanOnClick(btnID, btnsDiv) {
                            let id = btnID + 'Div';
                            if (checkIfLiturgyIsDisplayed(id))
                                return;
                            let lakanDiv = document.createElement('div');
                            lakanDiv.id = id;
                            btnsDiv.insertAdjacentElement('afterend', lakanDiv); //!Caution: we insert lakanDiv before the begining of btnsDiv on purpose in order to place btnsDiv at the end of lakanDiv for the user to be able to click on the other button afterwards
                            showPrayers({
                                prayersSequence: HolyWeekPrayersSequences.Lakan,
                                container: lakanDiv,
                                languages: prayersLanguages,
                                clearContainerDiv: true,
                                clearRightSideBar: false
                            });
                        }
                        function btnLakanAfterShowPrayers(btnID) {
                            if (containerDiv.querySelector('#' + btnID + 'Div'))
                                return; //It means the button was clicked before and all the content is already appended to containerDiv
                            let reading, anchor;
                            (function insertLakanStPaul() {
                                anchor = selectElementsByDataSetValue(btn.docFragment, Prefix.anchor + "Readings&D=$copticFeasts.AnyDay");
                                if (anchor.length < 1)
                                    return console.log('Didn\'t find the anchor for St. Paul Reading');
                                reading = findTable(Prefix.HolyWeek + '&D=GL55', ReadingsArrays.StPaulArrayFR) || undefined; //!Caution: the St. Paul reading for the Lakan is exceptionally prefixed with Prefix.HolyWeek not with Prefix.stPaul in order to distinguish it from the St. Paul reading of the Mass the same day
                                if (!reading)
                                    return console.log('Didn\'t find the St. Paul Reading');
                                showPrayers({
                                    table: reading,
                                    languages: getLanguages(getArrayNameFromArray(ReadingsArrays.StPaulArrayFR)),
                                    container: btn.docFragment,
                                    position: {
                                        el: anchor[0],
                                        beforeOrAfter: 'beforebegin'
                                    },
                                    clearContainerDiv: false,
                                    clearRightSideBar: false,
                                });
                            })();
                            (function insertLakanGospel() {
                                let id = 'lakanGospel';
                                let gospelDiv = btn.docFragment.querySelector('#' + id);
                                if (gospelDiv) {
                                    //It means the St. Paul reading is already displayed
                                    gospelDiv.classList.toggle(hidden);
                                    return;
                                }
                                anchor = selectElementsByDataSetValue(btn.docFragment, Prefix.anchor + "GospelLitany&D=$copticFeasts.AnyDay");
                                (function insertGospelReading() {
                                    getGospelReadingAndResponses({
                                        liturgy: Prefix.gospelMorning,
                                        prayersArray: ReadingsArrays.GospelMorningArrayFR,
                                        languages: getLanguages(PrayersArraysKeys.find((array) => array[0] === Prefix.gospelMorning)[1]),
                                        container: btn.docFragment,
                                        isMass: true,
                                        clearContainer: false,
                                    });
                                })();
                                reading = findTable(Prefix.gospelMorning + '&D=GL55', ReadingsArrays.GospelMorningArrayFR) || undefined;
                                if (!reading)
                                    return console.log('Didn\'t find the Gospel');
                                gospelDiv = document.createElement('div');
                                gospelDiv.id = id;
                            })();
                        }
                        function btnMassOnClick(btnID, btnsDiv) {
                            let id = btnID + 'Div';
                            if (checkIfLiturgyIsDisplayed(id))
                                return;
                        }
                        function btnMassAfterShowPrayers(btnID) {
                            if (containerDiv.querySelector('#' + btnID + 'Div'))
                                return; //It means the button was clicked before and all the content is already appended to containerDiv
                        }
                        function checkIfLiturgyIsDisplayed(divID, hide = false) {
                            let liturgyDiv = containerDiv.querySelector('#' + divID);
                            if (liturgyDiv) {
                                if (hide && !liturgyDiv.classList.contains(hidden))
                                    liturgyDiv.classList.add(hidden);
                                else
                                    liturgyDiv.classList.toggle(hidden);
                                return true;
                            }
                            return false;
                        }
                    })();
                }
            }
            ;
        }
    }
});
const btnBible = new Button({
    btnID: 'btnBible',
    label: {
        AR: 'الكتاب المقدس',
        FR: 'La Bible'
    },
    onClick: () => {
        let newTestament = new Button({
            btnID: 'newTestament',
            label: {
                AR: 'العهد الجديد',
                FR: 'Nouveau Testament',
                EN: 'New Testament'
            },
            onClick: () => newTestament.children = getBooksButtons(false) //!We need the children to be added when the button is clicked not when it is created because the Bibles are not defined at this stage
        });
        let oldTestament = new Button({
            btnID: 'oldTestament',
            label: {
                AR: 'العهد القديم',
                FR: 'Ancien Testament',
                EN: 'Old Testament'
            },
            onClick: () => oldTestament.children = getBooksButtons(true) //!We need the children to be added when the button is clicked not when it is created because the Bibles are not defined at this stage
        });
        btnBible.children = [oldTestament, newTestament];
        (function showUserLastReading() {
            let bookMarkDiv = document.createElement("div"); //this is just a container
            bookMarkDiv.role = "button";
            bookMarkDiv.id = 'bookmarkLast';
            bookMarkDiv.classList.add("sideTitle");
            sideBarTitlesContainer.appendChild(bookMarkDiv);
            let bookmark = document.createElement("a");
            bookMarkDiv.appendChild(bookmark);
            let label = {
                AR: 'آخر قراءة',
                FR: 'Dernier Chapitre',
                EN: 'Last Reading'
            };
            bookMarkDiv.innerText = label[defaultLanguage];
            bookMarkDiv.addEventListener("click", () => {
                //We will show the reference
            });
        })();
        function getBooksButtons(old) {
            let booksListDefault, booksListForeing;
            booksListDefault = getBibleBooksList(defaultLanguage);
            //  if (foreingLanguage) bibleForeign = getBibleBooksList(foreingLanguage);
            if (!booksListDefault)
                return;
            let booksNamesDefault, bookNamesForeign;
            booksNamesDefault = booksListDefault.map(book => book.human_long);
            //if(foreingLanguage) booksNamesForeing = booksListForeing.map(book => book.human_long);
            if (old)
                booksNamesDefault = booksNamesDefault.slice(0, 48);
            else if (!old)
                booksNamesDefault = booksNamesDefault.slice(48, booksNamesDefault.length);
            let labels = booksNamesDefault.map(bookID => {
                let label = new Object();
                label[defaultLanguage] = bookID;
                return label;
            });
            let booksButtons = labels.map(label => {
                let btn;
                btn = new Button({
                    btnID: 'btnBibleBook' + labels.indexOf(label),
                    label: label,
                    onClick: () => btn.children = getChaptersButtons(booksListDefault.find(book => book.human_long === label[defaultLanguage]).id) //!We need the children to be added when the button is clicked not when it is created because the Bibles are not defined at this stage
                });
                return btn;
            });
            return booksButtons;
        }
        function getChaptersButtons(bookID) {
            let chapterLabel = {
                AR: 'إصحاح ',
                FR: 'Chapître ',
                EN: 'Chapter '
            };
            let defaultLangBible, foreignLangBible;
            defaultLangBible = Bibles[defaultLanguage][0];
            if (foreingLanguage)
                foreignLangBible = Bibles[foreingLanguage][0];
            let bookDefault, bookForeign;
            bookDefault = defaultLangBible.find(book => book[0].id === bookID);
            if (foreignLangBible)
                bookForeign = foreignLangBible.find(book => book[0].id === bookID);
            return chaptersBtns(bookDefault);
            function chaptersBtns(book) {
                let chaptersButtons = book[0].chaptersList
                    .map(number => {
                    if (/\D/.test(number))
                        return; //We ignore the introductions to the French version of the book because they have not been retrieved
                    let label = new Object();
                    label[defaultLanguage] = chapterLabel[defaultLanguage] + number;
                    return new Button({
                        btnID: 'btnChapter' + number,
                        label: label,
                        onClick: () => chapterBtnOnClick(book[0].id, number)
                    });
                });
                return chaptersButtons;
                function chapterBtnOnClick(bookID, chapterNumber) {
                    let languages = [defaultLanguage];
                    if (foreingLanguage)
                        languages.push(foreingLanguage);
                    let table = [
                        [
                            'Bible_' + bookID + chapterNumber + '&C=Title',
                        ],
                    ];
                    let retrievedText = languages.map(lang => {
                        let book = getBibleBooksList(lang).find(b => b.id === bookID);
                        table[0].push(getTitle(book, lang, chapterNumber));
                        return getBibleChapterText({
                            bible: Bibles[lang][0],
                            bookID: bookID,
                            chapterNumber: chapterNumber
                        });
                    });
                    table.push(...matchPargraphsSplitting(retrievedText, languages, 0, 'NoActor'));
                    showPrayers({
                        table: table,
                        languages: languages,
                        container: containerDiv,
                        clearContainerDiv: true,
                        clearRightSideBar: true,
                    });
                    (function appendNextAndPrevBtns() {
                        let btnsDiv = document.createElement('div');
                        containerDiv.append(btnsDiv);
                        let books = getBibleBooksList(defaultLanguage), book = books.find(b => b.id === bookID), chapterList = book.chaptersList;
                        let next = new Button({
                            btnID: 'btnNext',
                            label: {
                                AR: 'التالي',
                                FR: 'Suivant',
                                EN: 'Next',
                            },
                            onClick: () => nextOnClick(true)
                        });
                        let prev = new Button({
                            btnID: 'btnNext',
                            label: {
                                AR: 'السابق',
                                FR: 'Précédent',
                                EN: 'Previous',
                            },
                            onClick: () => nextOnClick(false)
                        });
                        [next, prev]
                            .forEach(btn => {
                            createHtmlBtn({
                                btn: btn,
                                btnsContainer: btnsDiv,
                                btnClass: inlineBtnClass
                            });
                        });
                        btnsDiv.classList.add(inlineBtnsContainerClass);
                        floatOnTop(btnsDiv, "5pt");
                        btnsDiv.style.gridTemplateColumns = setGridColumnsOrRowsNumber(btnsDiv);
                        function nextOnClick(next) {
                            (function ifNext() {
                                if (!next)
                                    return;
                                if (chapterList.indexOf(chapterNumber) === chapterList.length - 1) {
                                    //We will move to the first chapter in the  next book
                                    book = books[books.indexOf(book) + 1] || books[0]; //If we have already reached the last book, we move the the first book
                                    chapterNumber = book.chaptersList[book.chaptersList.length - 1];
                                    return;
                                }
                                chapterNumber = book.chaptersList[book.chaptersList.indexOf(chapterNumber) + 1];
                            })();
                            (function ifPrevious() {
                                if (next)
                                    return;
                                if (chapterList.indexOf(chapterNumber) === 0) {
                                    //We will move to the last chapter in the previous book
                                    book = books[books.indexOf(book) - 1] || books[books.length - 1]; //If we have already reached the first book, we move to the last book
                                    chapterNumber = book.chaptersList[book.chaptersList.length - 1];
                                    return;
                                }
                                chapterNumber = book.chaptersList[book.chaptersList.indexOf(chapterNumber) - 1];
                            })();
                            chapterBtnOnClick(book.id, chapterNumber);
                            bookMarks[0] = [book.id, chapterNumber]; //We add the chapter to the bookMarks
                            localStorage.bookMarks = JSON.stringify(bookMarks); //We save the bookMarks to the local storage
                        }
                    })();
                    scrollToTop();
                    function getTitle(book, lang, chapterNumber) {
                        if (!book)
                            return '';
                        return book.human_long + '\n' + (chapterLabel[lang] || '') + chapterNumber;
                    }
                }
            }
        }
    }
});
/**
 * Adapts the Concluding Hymn of any Liturgy to the Season
 */
function adaptConcludingHymn(container) {
    let anchor = selectElementsByDataSetValue(container, Prefix.anchor + 'ConcludingHymn&D=$copticFeasts.AnyDay', undefined, 'root')[0];
    if (!anchor)
        return console.log('Didn\'t find Concluding Hymn Season Anchor');
    let tbl;
    (function insertSeasonal() {
        let title = Prefix.commonPrayer + "ConcludingHymn&D=$Seasons.";
        if (Season === Seasons.NoSeason)
            title += Object.entries(Seasons).find(entry => entry[1] === naturalSeasons())[0];
        else
            title += Object.entries(Seasons).find(entry => entry[1] === Season)[0];
        tbl = findTable(title, CommonPrayersArray) || undefined;
        if (!tbl)
            return console.log('Didn\'t find a relevant table');
        if (Season === Seasons.GreatLent) {
            if ([0, 6].includes(weekDay))
                tbl = [tbl[tbl.length - 1]]; //The last row is for the Great Lent Saturdays and Sundays
            else {
                tbl = [...tbl].slice(0, -2); //We remove the 2nd row, and we remove the last row. ! Notice that we create a new table
                selectElementsByDataSetValue(container, Prefix.commonPrayer + 'ConcludingHymn&D=$copticFeasts.AnyDay', undefined, 'root')[1].remove(); //We remove the first paragraph ('Amin Allelujah')
            }
        }
        insertPrayersAdjacentToExistingElement({
            tables: [tbl],
            languages: prayersLanguages,
            position: {
                el: anchor,
                beforeOrAfter: 'beforebegin'
            },
            container: container
        });
    })();
    (function InsertPopeAndBishopHymn() {
        tbl = findTable(Prefix.commonPrayer + "ConcludingHymnBishop&D=$copticFeasts.AnyDay", CommonPrayersArray) || undefined;
        if (!tbl)
            return console.log('Didn\'t find a relevant table');
        addExpandablePrayer({
            prayers: [tbl],
            insertion: anchor,
            btnID: 'concludingHymn',
            languages: prayersLanguages,
            label: {
                AR: 'في حضور البطرك أو أحد الأساقفة',
                FR: 'En présence du Pape ou d\'un évêque',
            },
        });
    })();
}
/**
 * Makes a buttons div container floating on the top of the page
 * @param {HTMLDivElement} btnContainer - the buttons div container we want to make float;
 * @param {string} top - the value of the btnConainer.style.top
 */
function floatOnTop(btnContainer, top) {
    btnContainer.style.position = "fixed";
    btnContainer.style.top = top;
    btnContainer.style.justifySelf = "center";
}
;
/**
 * Fetchs and displaying any readings other than the Gospel and the Psalm
 * @param {string} readingPrefix
 * @param {string[][][]} readingArray - The array where the reading's texts are to be found
 * @param {HTMLElement} container - The container where the text will be displayed after fetched
 * @param {boolean} clearContainer - specifies whether the container should be cleared or not before the reading is displayed
 * @returns
 */
function findMassReadingOtherThanGospel(readingPrefix, readingArray, position, container = containerDiv, clearContainer = false, readingDate) {
    //@ts-ignore
    if (clearContainer)
        container.innerHTML = "";
    if (container.children.length === 0)
        container.appendChild(document.createElement("div"));
    if (!position.el)
        position.el = container.children[0];
    if (!position.beforeOrAfter)
        position.beforeOrAfter = "beforebegin";
    if (!readingDate)
        readingDate = copticReadingsDate;
    let reading = readingArray.find((table) => isMultiDatedTitleMatching(splitTitle(table[0][0])[0], [readingDate]));
    if (!reading)
        return console.log("Did not find a reading for the current copticReadingsDate");
    let languages = getLanguages(PrayersArraysKeys.find((array) => array[0] === readingPrefix)[1]);
    reading = retrieveReadingTableFromBible(reading, languages);
    return insertPrayersAdjacentToExistingElement({
        tables: [reading],
        languages: languages,
        position: position,
        container: containerDiv,
    });
}
/**
 * Retrives the text of the verses wher a reading table contains references to these verses instead of the text
 * @param {string[][]} reading - The reading Table retrived from the corresponding reading array
 * @param langs
 * @param {boolean} liturgy - If true, it means that the function is called to retrieve the reading within a liturgy context: eg.: unbaptised mass, Pass-over, etc.
 * @returns
 */
function retrieveReadingTableFromBible(reading, langs) {
    if (!reading)
        return;
    let rowsWithReferences = reading
        .filter(row => row.find(el => el.startsWith(Prefix.readingRef))); //We check of any of the table's rows has an element starting with Prefix.readingRef: this means this element is a reference for a text that we need to retrieve from the relevant bible
    if (rowsWithReferences.length < 1)
        return reading; //It means that there are no rows with references
    //reading = structuredClone(reading);//We create a copy of the table;
    let splitted;
    let ready = new Set(); //this set will contain arrays of ["bookID:chapterNumber:lang", chapter] for each chapter treated. If the chapter is found, we will not retreive it again.
    const retrieved = [];
    reading
        .forEach(row => {
        if (rowsWithReferences.includes(row))
            retrieved.push(referenceTitleRow(row), ...processReadingReference(row));
        else if (reading.indexOf(row) === 0)
            retrieved.push(row);
        else if (['&C=Title', '&C=SubTitle'].map(c => row[0].includes(c)).includes(true)
            && (rowsWithReferences.includes(reading[reading.indexOf(row) + 1])
                ||
                    reading[reading.indexOf(row) + 1].includes('&C=ReadingIntro')))
            retrieved.push(referenceTitleRow(row));
        else
            retrieved.push(row);
    });
    return retrieved;
    function processReadingReference(row) {
        if (!row)
            return;
        let ref, actor;
        const retrieved = [];
        for (let i = 0; i < row.length; i++) {
            if (!row[i].startsWith(Prefix.readingRef))
                retrieved.push(row[i]);
            ref = row[i]
                .replaceAll(' ', '') //We remove all spaces in the reference in order to avoid errors.
                .replaceAll(Prefix.readingRef, '');
            splitted = splitTitle(ref);
            actor = splitted[1] || 'NoActor';
            if (row.length === 1)
                langs.forEach(lang => retrieved.push(retrieveVerses(lang, splitted[0]))); //The row contains only the rference with no other text
            else if (row.length === langs.length + 1)
                retrieved.push(retrieveVerses(langs[i - 1], splitted[0])); //The row's first element is a title, while the remaining elements correspond to the languages in langs[]
            else
                retrieved.push(retrieveVerses(langs[i], splitted[0])); //the row contains as many elements as the languages in langs[]
        }
        if (ref.startsWith(Prefix.readingRef + 'PSA:'))
            return [retrieved]; //We do not split the psalm paragraphs into different rows rows
        else
            return matchPargraphsSplitting(retrieved, langs, row.length - langs.length, actor);
    }
    function retrieveVerses(lang, ref) {
        if (![defaultLanguage, foreingLanguage].includes(lang))
            return '';
        let parts, refs, verses;
        refs = ref.split('/');
        let text = refs.map(ref => {
            parts = ref.split(':'); //We should get an array of 3 elements [bookID, chapterNumber, verses], eg: ['GEN', '13', '3-7']; 
            if (parts.length === 2 && refs.indexOf(ref) > 0)
                parts.unshift(refs[0].split(':')[0]);
            if (parts.length < 3)
                return '';
            verses =
                parts[2]
                    .split('/')
                    .map(versesRange => retrieveVersesText(lang, parts[0], parts[1], versesRange) || '');
            if (parts[0] === "PSA")
                return verses.join(' '); //We don't split the psalm into paragraphs
            return verses.join('\n');
        });
        return text.join('\n');
    }
    /**
     * Returns a title row (string[]) built from a reference
     * @param {string[]} row - the  row that contains the reading reference
     * @returns {string[]} - a row that contains the title of the reading built from the reference
     */
    function referenceTitleRow(row) {
        let titleRow = [Prefix.same + '&C=Title', ...langs.map(lang => '')];
        let ref = row.find(el => el.startsWith(Prefix.readingRef));
        if (!ref)
            return titleRow;
        ref =
            ref.replaceAll(' ', '')
                .replace(Prefix.readingRef, '')
                .split('&C=')[0];
        let bookID = ref.split(':')[0];
        let book;
        langs.map(lang => {
            if (![defaultLanguage, foreingLanguage].includes(lang))
                return;
            book = Bibles[lang][0].find(book => book[0].id === bookID);
            if (!book)
                return;
            ref = ref.replace('End', book[1]
                .find(chapter => book[1].indexOf(chapter) === Number(ref.split(':')[1]) - 1)
                .filter(verse => verse.length === 2)
                .length.toString());
            titleRow[langs.indexOf(lang) + 1] =
                book[0].human
                    + ' ('
                    + splitRef(ref).join(' & ')
                    + ')';
            function splitRef(ref) {
                return ref
                    .replaceAll(bookID + ':', '')
                    .split('/')
                    .map(part => part.replace(':', ': '));
            }
        });
        return titleRow;
    }
    /**
     * Retrieves the text of the specified verses of the specified chapter of the specified book of the specified Bible version
     * @param {string} lang - the language of the bible from which we want to retrieve the text of the specified verses
     * @param {string} bookID - the ID of the Bible book
     * @param {string} chapterNumber - the number of the chapter
     * @param {string} verses - the verses to be retrieved. It provides a range of verses separated by '-' (eg.: "13-20")
     * @returns {string} the text of the verses whit
     */
    function retrieveVersesText(lang, bookID, chapterNumber, verses) {
        let exists = Array.from(ready).find(array => array[0] === bookID + ":" + chapterNumber + ":" + lang);
        if (exists)
            return getVersesRange(exists[1], verses.split('-'));
        if (!lang) {
            alert('The language is not valid. Error from retrieveVersesText()');
            return;
        }
        ;
        if (lang === 'CA')
            lang = 'AR';
        if (![defaultLanguage, foreingLanguage].includes(lang))
            return ''; //We return an empty string if the language is not either the defaultLanguage or the foreignLanguage because in all cases those are the only languages that the user will be able to see. No need to retrieve a language that will not be retrieved
        if (!chapterNumber || !verses) {
            alert('either chapter number or verses arre not valid. Error from retrieveVersesText()');
            console.log('chapterNumber = ', chapterNumber, "verses = ", verses);
            return;
        }
        ;
        if (!bookID || bookID.length > 3) {
            alert('either bookID is not valid or bookID length>3. Error from retrieveVersesText()');
            console.log('bookID = ', bookID);
            return;
        }
        ; //books ids are 3 letters length
        let Bible = Bibles[lang][0];
        if (!Bible) {
            alert('The ' + { FR: "French", AR: 'Arabic', EN: 'English' }[lang] + ' has not been loaded yet');
            return;
        }
        ;
        let chapterVerses = getBibleChapter(chapterNumber, undefined, Bible, bookID);
        if (!chapterVerses) {
            alert('No verses could be retrieved. Error from retrieveVersesText()');
            console.log('chapterVerses = ', chapterVerses);
            return;
        }
        ;
        ready.add([bookID + ":" + chapterNumber + ":" + lang, chapterVerses]);
        return getVersesRange(chapterVerses, verses.split('-'));
        function getVersesRange(chapter, range) {
            if (range.length !== 2) {
                alert('verses.length !==2. Error from getVersesRange()');
                console.log('bookID = ', bookID);
                return;
            }
            ;
            while (chapter[chapter.length - 1].length < 2)
                chapter.pop(); //!This action must be performed before processing the verses references. We remove the last element of the chapter if it is not a verese.
            if (range[1].toUpperCase() === 'END')
                range[1] = chapter[chapter.length - 1][0];
            if (!Number(range[0]) || !Number(range[1]))
                return;
            let first = chapter.find(verse => verse[0] === range[0]);
            if (!first)
                return;
            let last = chapter.find(verse => verse[0] === range[1]);
            if (!last)
                return;
            return chapter.slice(chapter.indexOf(first), chapter.indexOf(last) + 1)
                .map(verse => getVerseText(verse))
                .join('');
        }
    }
}
/**
 * Splits the text of a Bible in the defaultLanguage into separate table rows for each paragraph, and does the same for the any other language, matching the paragraphs' first and last versions with those of the defaultLanguage
 * @param {string[]} retrieved - a row of the table with the text retrieved from the bible in every language of langs[]
 * @param {string[]} langs - the languages in which the bible text has been retrieved
 * @param {number} add - a number that will be added to the index if retrieved.length > langs.length
 * @param {string} actor - the actor that will be added to each row created for each paragraph of the retrieved ext
 * @param {string} bookID - the id of the book from which the text was retrieved
 * @param {boolean} liturgy - tells whether the bible text has been retrieved within a liturgy context or outside a liturgy context
 * @returns {string[][]} - a table (i.e., string[][]) containing the text with each paragraph splitted in distinct row (i.e., string[])
 */
function matchPargraphsSplitting(retrieved, langs, add, actor) {
    if (add < 0)
        add = 0;
    if (add > 1) {
        alert('Error from matchPargraphsSplitting(): add>1 There is something wrong with the length of the row or of the language: langs.length = ' + langs.length.toString() + ' langs = ' + langs.toString());
        return;
    }
    let paragraphs = retrieved[langs.indexOf(defaultLanguage) + add].split('\n');
    let exp = RegExp('Sup_' + '\\d\*' + '_Sup', 'g');
    let ranges = paragraphs
        .map(parag => Array.from(parag.matchAll(exp))
        .map(match => match[0]));
    ranges = ranges
        .map(range => [range[0], range[range.length - 1]]) //Those are the first and last verses numbers in each paragraph of the default language
        .filter(versesRange => versesRange[0] && versesRange[1]); //!We must remove any undefined elements;
    langs
        .forEach(lang => {
        if (lang === defaultLanguage)
            return;
        let text = retrieved[langs.indexOf(lang) + add].replaceAll('\n', ' '); //!We must remove all the '\n' characters from the string
        if (!text)
            return;
        if (!exp.test(text))
            return; //If the text is not divided into verses (i.e. includes('Sup))
        retrieved[langs.indexOf(lang) + add] =
            ranges
                .map(versesRange => splitTextIntoParagraphs(versesRange))
                .join('\n');
        function splitTextIntoParagraphs(versesRange) {
            //versesRange contains 2 elements. Each element is like "Sup_2_Sup". The 1st element is the number of the first verse in the paragraph. The 2nd element is the number of the last verse
            if (!versesRange[0] || !versesRange[1])
                return '';
            let toVerse = versesRange[1]; //!We need a new variable otherwise we will modify versesRange[1] in its original array
            if (ranges.indexOf(versesRange) < ranges.length - 1)
                toVerse = ranges[ranges.indexOf(versesRange) + 1][0]; //If we have not reached the last element of ranges, we will set versesRange[1] = element 0 of the next element of ranges in order to retrive the text until the end of the last verse number
            else
                toVerse = '';
            let exp = RegExp(versesRange[0] + '\.\*' + toVerse);
            let match = text.match(exp);
            if (!match)
                return '';
            if (toVerse.startsWith('Sup_'))
                return match[0].replace(toVerse, '');
            else
                return match[0];
        }
    });
    return splitParagraphsIntoRows();
    function splitParagraphsIntoRows() {
        let table = [], parags;
        for (let i = 0; i < retrieved.length; i++) {
            parags = retrieved[i].split('\n');
            for (let ii = 0; ii < parags.length; ii++) {
                if (!table[ii])
                    table.push([Prefix.same + "&C=" + actor, ...langs.map(lang => '')]);
                table[ii][i + 1] = parags[ii];
            }
        }
        return table;
    }
}
/**
 * Scrolls to the top of containerDiv
 */
async function scrollToTop() {
    //We scroll to the beginning of the page after the prayers have been displayed
    createFakeAnchor("homeImg");
}
/**
 * Retrieves and adds html div elements representing the Gospel Litany, the Gospel and psalm introductions, and the Gospel and Psalm readings for a given liturgy
 * @param {string} liturgy - the prefix of the liturgie for which we want to retrieve the gospel reading
 * @param {Button | {prayersArray:string[][][], languages:string[]}} btn - the  button object or any object  having as property a string[][][] containing the the text of the gospel and the psalm, and a string[] containing the languages order of the gospel and psalm readings
 * @param {HTMLElement | DocumentFragment} container - the html element to which the html elements (i.e. div) containing the gospel will be appended after being created
 * @returns
 */
async function getGospelReadingAndResponses(args) {
    if (!args.container)
        args.container = containerDiv;
    if (args.container === containerDiv && args.clearContainer)
        args.container.innerHTML = "";
    if (args.container.children.length === 0)
        args.container.appendChild(document.createElement("div"));
    if (!args.prayersArray)
        return console.log("the button passed as argument does not have prayersArray");
    if (!args.languages)
        args.languages = getLanguages(getArrayNameFromArray(args.prayersArray));
    let baseDataRoot = Prefix.anchor + "XXX&D=$copticFeasts.AnyDay";
    let prayersSequence = setGospelPrayersSequence(args.liturgy, args.isMass); //this gives us an array like ['PR_&D=####', 'RGID_Psalm&D=', 'RGID_Gospel&D=', 'GR_&D=####']
    //We will retrieve the tables containing the text of the gospel and the psalm from the GospeldawnArray directly (instead of call findAndProcessPrayers())
    let date = copticReadingsDate;
    let gospel = args.prayersArray
        .filter((table) => isMultiDatedTitleMatching(splitTitle(table[0][0])[0], [date]));
    if (gospel.length === 0)
        return console.log("gospel.length = 0"); //if no readings are returned from the filtering process, then we end the function
    (function InsertPopeAndBishopPsalm() {
        if (!args.isMass)
            return;
        //!This must come before the readings and responses are inserted
        let tbl = findTable(Prefix.commonPrayer + "MaroEtshasf&D=$copticFeasts.AnyDay", CommonPrayersArray) || undefined;
        if (!tbl)
            return console.log('Didn\'t find a relevant table');
        addExpandablePrayer({
            prayers: [tbl],
            insertion: setInsertionPoint("Gospel&D=").previousElementSibling,
            btnID: 'PopePsalm',
            languages: prayersLanguages,
            label: {
                AR: 'في حضور البطرك أو أحد الأساقفة',
                FR: 'En présence du Pape ou d\'un évêque',
            },
        });
    })();
    /**
     * Appends the gospel and psalm readings before gospelInsertionPoint(which is an html element)
     */
    (function insertPsalmAndGospelReadings() {
        if (!args.isMass) {
            //If we are not showing the gospel reading in a Mass context (i.e., if the user is clicking on the 'Day Readings Button' to show the readings of the day). We will create a  div container  to which we will append the reading text. We will append the container div as first element of containerDiv
            containerDiv.append(document.createElement("div"));
            gospel = gospel.filter(tbl => tbl[0][0].includes('Gospel&D='));
        }
        gospel
            .forEach((table) => {
            //gospel[] should include 2 tables: the first table is the psalm and its title is like '....Psalm&D=...'. The 2nd is the gospel: its title is like '....Gospel&D=...'.
            table = retrieveReadingTableFromBible(table, args.languages);
            insertPrayersAdjacentToExistingElement({
                tables: [getGospelOrPsalmTable()],
                languages: args.languages,
                position: {
                    beforeOrAfter: "beforebegin",
                    el: setInsertionPoint(table[0][0]),
                },
                container: args.container,
            });
            function getGospelOrPsalmTable() {
                if (!args.isMass)
                    return table;
                //! We didn't push the array to the table directly because otherwise it will add a new row to the original table each time we click on the Unbaptised Mass button or the Gospel Reading button
                //We will include the gospel end: 'Glory To God Forever' and the Psalm End 'Hallelujah'
                if (table[0][0].includes('Gospel&D='))
                    return [...table, getReadingEnd(ReadingsIntrosAndEnds.gospelEnd)]; //We return a copy of the table not the original table in order to avoid modifying the original table.
                else if (table[0][0].includes('Psalm&D='))
                    return [...table, getReadingEnd(ReadingsIntrosAndEnds.psalmEnd)]; //We return a copy of the table not the original table in order to avoid modifying the original table.
                function getReadingEnd(end) {
                    //We will return an array (i.e., a new row in the table) containing the text of the "Gospel End" (Glory to God Forever) in each language. This array needs to be constructed like this: ['Row title', 'End text in Arabic, 'End text in French or whatever other western language', 'End text in English']
                    return [
                        //The first element of the array contains the title of the row
                        Prefix.same + '&C=ReadingEnd', //!Notice that we are giving it as class 'ReadingEnd'
                        //The following elements represent the text of the 'Gospel End' in each language, in the same order as the languages passed in args.languages.
                        ...args.languages
                            .map(lang => end[lang])
                    ];
                }
                ;
            }
            ;
        });
    })();
    (function insertPsalmAndGospelResponses() {
        if (!args.isMass)
            return; //If we are not calling the function with a Mass or a liturgy (Unbpaptized Mass, or Incense Dawn/Vespers) context, we will not insert the Gospel and Psalm responses
        insertResponse(3, setInsertionPoint('Gospel&D=').nextElementSibling, 'beforebegin'); //Inserting Gospel Response
        insertResponse(0, setInsertionPoint('PsalmResponse&D='), 'beforebegin'); //Inserting Psalm Response if any
        function insertResponse(index, el, position) {
            let response = PsalmAndGospelPrayersArray.find((tbl) => splitTitle(tbl[0][0])[0] === prayersSequence[index]); //!Caution: this must be an '===' search operator not startWith() because otherwise, 'NativitayParamoun' will be selected for the 'Nativity' Season, and 'Baptism Paramoun' might be selected for the 'Baptism' Season if their tables in PrayersArray are before those of the relevant table
            if (!response || response.length === 0)
                return;
            insertPrayersAdjacentToExistingElement({
                tables: [response],
                languages: prayersLanguages,
                position: {
                    el: el,
                    beforeOrAfter: position
                },
                container: args.container,
            });
        }
    })();
    function setInsertionPoint(tableTitle) {
        if (!args.isMass)
            //If we are not displaying the gospel in a Mass or a liturgy context, we don't need to insert the psalm. We will just show the text of the gospel reading itself. Hence, the div element will be same as args.gospelInsertionPoint
            return containerDiv.children[0];
        else
            return getAnchor(baseDataRoot.replace('XXX', ['Psalm', 'PsalmResponse', 'Gospel'].find(word => tableTitle.includes(word + '&D='))));
        function getAnchor(dataRoot) {
            return selectElementsByDataSetValue(args.container, dataRoot, undefined, 'root')[0];
        }
    }
    ;
    /**
   * takes a liturgie name like "IncenseDawn" or "IncenseVespers" and replaces the word "Mass" in the buttons gospel readings prayers array by the name of the liturgie. It also sets the psalm and the gospel responses according to some sepcific occasions (e.g.: if we are the 29th day of a coptic month, etc.)
   * @param liturgie {string} - expressing the name of the liturigie that will replace the word "Mass" in the original gospel readings prayers array
   * @returns {string} - returns an array representing the sequence of the gospel reading prayers, i.e., an array like ['Psalm Response', 'Psalm', 'Gospel', 'Gospel Response']
   */
    function setGospelPrayersSequence(liturgy, isMass) {
        //this function sets the date or the season for the Psalm response and the gospel response
        const prayersSequence = [
            Prefix.psalmResponse + "&D=$copticFeasts.AnyDay", //This is its default value
            liturgy + "Psalm&D=",
            liturgy + "Gospel&D=",
            Prefix.gospelResponse + "&D=$copticFeasts.AnyDay", //This is its default value
        ]; //This is the generic sequence for the prayers related to the lecture of the gospel at any liturgy (mass, incense office, etc.). The OnClick function triggered by the liturgy, adds the dates of the readings and of the psalm and gospel responses
        if (!isMass)
            return prayersSequence; //If we are not calling the function within a mass/incense liturgy, we will not need to set the Psalm and Gospel Responses, we will return the prayersSequence array
        //setting the psalm and gospel responses
        (function setPsalmAndGospelResponses() {
            if (Number(copticDay) === 29 && [4, 5, 6].includes(Number(copticMonth)))
                return; //we are on the 29th of any coptic month except Kiahk (because the 29th of kiahk is the nativity feast), and Touba and Amshir (they are excluded because they precede the annonciation)
            let PsalmAndGospelResponses = PsalmAndGospelPrayersArray.filter((table) => isMultiDatedTitleMatching(table[0][0], [copticDate, Season]));
            let psalmResponse = PsalmAndGospelResponses.filter((table) => table[0][0].startsWith(Prefix.psalmResponse));
            let gospelResponse = PsalmAndGospelResponses.filter((table) => table[0][0].startsWith(Prefix.gospelResponse));
            if (Season === Seasons.GreatLent) {
                [0, 6].includes(weekDay)
                    ? (gospelResponse = [
                        gospelResponse.find((table) => table[0][0].includes("Sundays&D=")),
                    ])
                    : (gospelResponse = gospelResponse =
                        [gospelResponse.find((table) => table[0][0].includes("Week&D="))]);
            }
            else if ([Seasons.JonahFast, Seasons.JonahFeast, Seasons.StMaryFast].includes(Season)
                ||
                    [copticFeasts.EndOfGreatLentFriday, copticFeasts.LazarusSaturday,
                    ].includes(copticReadingsDate)
                ||
                    copticDate === copticFeasts.CanaWedding) {
                //For these occasions, there are different gospel responses for the Dawn Incense Office, and the Unbaptised Mass. We will filter the results
                let prefix = "";
                if (liturgy === Prefix.gospelMorning)
                    prefix = 'Dawn';
                if (liturgy === Prefix.gospelMass)
                    prefix = 'Mass';
                if (Season === Seasons.JonahFast)
                    prefix += copticReadingsDate.split(Season)[1]; //There are different responses for the Dawn Gospel and the Mass Gospel for each day of the Jonah Fast. We will  add the number of the day of Jonah Fast: eg.: "Mass1&D=Jonah1&C=Title" (for 1st day of the Jonah Fast), Dawn2&D=Jonah2&C=Title", etc.
                (function ifGospelVespers() {
                    //If the liturgy is Vespers incesnse, in some occasions there are specific gospel response for the Vespers
                    if (liturgy !== Prefix.gospelVespers)
                        return;
                    if (Season === Seasons.StMaryFast
                        ||
                            [copticFeasts.EndOfGreatLentFriday,
                                copticFeasts.LazarusSaturday,
                            ].includes(copticReadingsDate))
                        prefix = 'Vespers';
                })();
                gospelResponse = [
                    gospelResponse.find((table) => table[0][0].includes(prefix + "&D=")),
                ];
            }
            if (psalmResponse.length > 0 && psalmResponse[0].length > 0)
                prayersSequence[0] = splitTitle(psalmResponse[0][0][0])[0];
            if (gospelResponse.length > 0 && gospelResponse[0].length > 0)
                prayersSequence[3] = splitTitle(gospelResponse[0][0][0])[0];
        })();
        return prayersSequence;
    }
    /**
     * Returns the Coptic Date of for the next day. It is mainly needed for the Vespers Gospel
     */
    function getTomorowCopticReadingDate() {
        let today = new Date(todayDate.getTime() + calendarDay); //We create a date corresponding to the  the next day. This is because in the PowerPoint presentations from which the gospel text was retrieved, the Vespers gospel of each day is linked to the day itself not to the day before it: i.e., if we are a Monday and want the gospel that will be read in the Vespers incense office, we should look for the Vespers gospel of the next day (Tuesday).
        return getSeasonAndCopticReadingsDate(convertGregorianDateToCopticDate(today, false)[1], today);
    }
}
/**
 * Filters the array containing the gospel text for each liturgie (e.g., Incense Dawn, Vepspers, etc.) and returns the text of the gospel and the psaume. The fil
 * @param {Button} btn - the button of the liturgie within which we want to show the gospel text and the psaume text
 * @param {string[][][]} readingsArray - the array containing the text of the gospel and the psaume. Each element of this array repersents a table in the Word document from which the text was retrieved, and each element of each table[], represents a row of this table
 * @returns {string[][][]} - the result of the filtering operation. This normally returns an array of 2 tables: the first table represents the table of the psaume text, and the 2nd table represents the table of the gospel text
 */
function getBtnGospelPrayersArray(btn, readingsArray) {
    let gospel = readingsArray.filter((r) => {
        splitTitle(r[0][0][0])[0] === btn.prayersSequence[1] ||
            splitTitle(r[0][0][0])[0] === btn.prayersSequence[2];
    });
    return gospel;
}
/**
 * Takes a table title with muliple date values separated by '||', and checks if any of these dates include the date passed to it as coptDate
 * @param {string} tableTitle - a title of a table including multiple dates separated by '||'
 * @param {string} coptDate - the date that we want to check if it is included in the title. If omitted, it is given the value of the current copticDate
 * @returns {boolean} - return true if the date was found, and false otherwise
 */
function isMultiDatedTitleMatching(tableTitle, coptDate = [copticDate]) {
    if (!tableTitle.includes("&D="))
        return false; //This means that the title does not specify any date for the prayer.
    tableTitle = splitTitle(tableTitle)[0].split("&D=")[1];
    return tableTitle
        .split("||")
        .map((date) => coptDate.map(copt => dateIsRelevant(date, copt)).includes(true))
        .includes(true);
}
/**
 * Checks if the date argument matches the copticDate or the Season
 * @param {string} date - the date string that we want to check if it matches the copticDate or the Season
 * @param {string} coptDate  - the copticDate (or the Season) with which we want the compare the date
 * @returns  {boolean}
 */
function dateIsRelevant(date, coptDate = copticDate) {
    if (date.startsWith("$"))
        date = eval(date.replace("$", ""));
    else if (/\d{2}0{2}/.test(date))
        date = date.replace('00', copticMonth);
    if (!date)
        return console.log("date is not valid: ", date);
    if (date === Seasons.Kiahk)
        return [
            Seasons.KiahkWeek1,
            Seasons.KiahkWeek2,
            Seasons.KiahkWeek3,
            Seasons.KiahkWeek4,
        ].includes(Season);
    return date === coptDate;
}
/**
 * Adds a button that when clicked shows or hides certain prayers from containerDiv
 * @param {HTMLElement} insertion - the html element before which the button will be inserted
 * @param {string} btnID - the id of the html element button that will be created
 * @param {typeBtnLabel} label - the label of the button that will be created
 * @param {string[][][]} prayers - the prayers that will shown or hidden or shown
 * @returns {HTMLDivElement} - the created div element that contains the prayers, and will be hidden or shown when the button is clicked
 */
function addExpandablePrayer(args) {
    if (!args.prayers)
        return console.log('No prayes table nor prayers sequence were provided');
    if (!args.insertion)
        return console.log("btnID = ", args.btnID);
    let btnExpand, htmlButton, expandableContainer;
    btnExpand = new Button({
        btnID: args.btnID,
        label: args.label,
        cssClass: inlineBtnClass,
        languages: args.languages,
        prayersSequence: args.prayers.map(tbl => tbl[0][0]),
        onClick: btnOnClick,
    });
    return createHtmlBtnAndExpandableDiv();
    function createHtmlBtnAndExpandableDiv() {
        htmlButton = createHtmlButon();
        expandableContainer = createExpandableContainer();
        function createHtmlButon() {
            let btnDiv = createDivForTheHtmlButon();
            let btn = createHtmlBtn({
                btn: btnExpand,
                btnsContainer: btnDiv,
                btnClass: btnExpand.cssClass,
                clear: true,
                onClick: btnExpand.onClick,
            }); //creating the html element representing the button. Notice that we give it as 'click' event, the btn.onClick property, otherwise, the createBtn will set it to the default call back function which is showChildBtnsOrPrayers(btn, clear)
            btn.classList.add("expand"); //We need this class in order to retrieve the btn in Display Presentation Mode
            return btn;
            function createDivForTheHtmlButon() {
                let div = document.createElement("div"); //Creating a div container in which the btn will be displayed
                div.classList.add(inlineBtnsContainerClass);
                if (args.dataGroup)
                    div.dataset.group = args.dataGroup;
                args.insertion.insertAdjacentElement("beforebegin", div); //Inserting the div containing the button as 1st element of containerDiv
                return div;
            }
            ;
        }
        ;
        function createExpandableContainer() {
            //We will create a newDiv to which we will append all the elements in order to avoid the reflow as much as possible
            let expandable = document.createElement("div");
            expandable.id = btnExpand.btnID + "Expandable";
            expandable.classList.add(hidden);
            expandable.classList.add("Expandable");
            expandable.style.display = "grid"; //This is important, otherwise the divs that will be add will not be aligned with the rest of the divs
            args.insertion.insertAdjacentElement("beforebegin", expandable);
            return expandable;
        }
        ;
        return [htmlButton, expandableContainer];
    }
    async function btnOnClick() {
        if (!expandableContainer)
            return console.log("no collapsable div was found");
        (function showPrayersInExpandableDiv() {
            if (expandableContainer.children.length > 0)
                return;
            args.prayers
                .map(table => {
                return showPrayers({
                    table: table,
                    languages: args.languages,
                    position: expandableContainer,
                    container: expandableContainer,
                    clearContainerDiv: false,
                    clearRightSideBar: false
                });
            })
                .forEach((htmlTable) => setCSS(htmlTable));
        })();
        expandableContainer.classList.toggle(hidden);
    }
}
/**
 * Returns the text of the specified chapter of the specified book of the specified version of the Bible
 * @param {[string, stirng[][]][][]} bible - the array containing all the books and chapters of the Bible in a given language
 * @param {string} bookID - the initials of a given book of bibleVersion
 * @param {string} chapterNumber - the number of the chapter of the book specified in bookID
 */
function getBibleChapterText(args) {
    if (!args.chapterNumber)
        return '';
    if (args.book)
        return joinVerses(getBibleChapter(args.chapterNumber, args.book));
    else if (args.bible && args.bookID)
        return joinVerses(getBibleChapter(args.chapterNumber, undefined, args.bible, args.bookID));
    else
        return '';
    function joinVerses(verses) {
        return verses.map(verse => getVerseText(verse)).join('');
    }
}
/**
 * Returns the text of the verse after combining the verse number (1st element) and the text of the verse, adding 'Sup' before and after the verse number and a non breaking space after it
 * @param {bibleVerse} verse - a string[] of 2 elements: the 1st element is the verse number, and the 2nd is the text of the verse
 */
function getVerseText(verse) {
    if (!verse)
        return;
    if (verse.length < 2 && verse[0] === '\n')
        return verse[0];
    return ('Sup_' + verse[0] + '_Sup' + verse[1])
        .replaceAll('#', '')
        .replaceAll('[', '')
        .replaceAll('*', '');
}
/**
 * Returns a string[] representing a verse of the specified chapter of the specified book of the specified version of the Bible. The 1st element of the string[] is the verse number, while the 2nd element is the verse text
 * @param {[string, stirng[][]][][]} bible - the array containing all the books and chapters of the Bible in a given language
 * @param {string} bookID - the initials of a given book of bibleVersion
 * @param {string} chapterNumber - the number of the chapter of the book specified in bookID
 * @param {string} verseNumber - the number of the verse to be retrieved
 */
function getBibleVerse(bible, bookID, chapterNumber, verseNumber) {
    return getBibleChapter(chapterNumber, undefined, bible, bookID).find(verse => verse[0] === verseNumber);
}
/**
  * Returns an array of [string, string[][]] where the string[][] element represents all the verses of the specified chapter of the specified book of the specified version of the Bible. Each verse is a string[] where the 1st element is the verse number, and the 2nd element is the verse text
  * @param {[string, stirng[][]][][]} bible - the array containing all the books and chapters of the Bible in a given language
  * @param {string} bookID - the initials of a given book of bibleVersion
  * @param {string} chapterNumber - the number of the chapter of the book specified in bookID
  */
function getBibleChapter(chapterNumber, book, bible, bookID) {
    if (!chapterNumber)
        return;
    if (!book)
        book = getBibleBook(bible, bookID);
    if (!book)
        return;
    let index = book[0].chaptersList.indexOf(chapterNumber);
    if (book[0].chaptersList.length > book[1].length && !Number(book[0].chaptersList[0])) //It means that the first element of the list is the introduction while the chapters do not include the introduction.
        index -= 1;
    return book[1][index]; //We only return verses whith a number in order to exclude verses numbered like "1a"
}
/**
   * Returns an array of [string, string[][]][] representing an entire book of the specified bibleVersion
   * @param {[string, stirng[][]][][]} bible - the array containing all the books and chapters of the Bible in a given language
   * @param {string} bookID - the initials of a given book of bibleVersion
   */
function getBibleBook(bible, bookID) {
    if (!bible || !bookID)
        return;
    return bible.find(book => book[0].id.startsWith(bookID));
}
function getBibleBooksList(lang) {
    if (Bibles[lang][1])
        return Bibles[lang][1];
    if (!Bibles[lang][0]) {
        alert('The Bibles files have not been loaded yet, please try again later');
        return;
    }
    ;
    Bibles[lang][1] = Bibles[lang][0].map((book) => book[0]);
    return Bibles[lang][1];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVjbGFyZUJ1dHRvbnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9tb2R1bGVzL0RlY2xhcmVCdXR0b25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sTUFBTTtJQWlCVixZQUFZLEdBQWU7UUFYbkIscUJBQWdCLEdBQVcsRUFBRSxDQUFDO1FBWXBDLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQztRQUN4QixJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUM7UUFDeEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUMsU0FBUyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQztRQUM5QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsR0FBRyxDQUFDLGVBQWUsQ0FBQztRQUM1QyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsR0FBRyxDQUFDLGVBQWUsQ0FBQztRQUM1QyxJQUFJLENBQUMsYUFBYSxHQUFHLEdBQUcsQ0FBQyxZQUFZLENBQUM7UUFDdEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUMsU0FBUyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQztRQUM1QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsR0FBRyxDQUFDLGdCQUFnQixDQUFDO1FBQzlDLElBQUksQ0FBQyxZQUFZLEdBQUcsR0FBRyxDQUFDLFdBQVcsQ0FBQztRQUNwQyxJQUFJLENBQUMsWUFBWSxHQUFHLEdBQUcsQ0FBQyxXQUFXLENBQUM7UUFDcEMsR0FBRyxDQUFDLFFBQVE7WUFDVixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUM7WUFDakMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBQ0QsU0FB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