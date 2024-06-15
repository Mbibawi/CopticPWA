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
        if (!btnMainMenu.children)
            btnMainMenu.children = [
                btnMass,
                btnIncenseOffice(),
                btnDayReadings,
                btnBookOfHours,
                btnPsalmody,
            ];
        if (copticReadingsDate === copticFeasts.PalmSunday) {
            btnMainMenu.children.push(btnHolyWeek());
            btnMainMenu.children.splice(btnMainMenu.children.indexOf(btnPsalmody), 1);
        }
        ;
        if (Season === Seasons.HolyWeek)
            btnMainMenu.children = [btnHolyWeek(), btnBookOfHours];
        btnMainMenu.children.push(btnBible());
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
                btnIncenseOffice(true),
                btnMassUnBaptised,
                btnMassBaptised()
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
        let btnGospelVespers = btnGospelReading(Prefix.gospelVespers);
        let btnGospelMorning = btnGospelReading(Prefix.gospelMorning);
        btnDayReadings.children = [
            btnGospelMorning,
            btnGospelVespers,
            new Button({
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
            }),
            new Button({
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
            }),
            new Button({
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
            }),
            new Button({
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
            }),
            btnGospelReading(Prefix.gospelMass),
        ];
        (function adaptToGreatLentAndJonahFast() {
            if (mass)
                return; //None of the following applies if the function is called within the Unbaptized mass context
            if (![Seasons.GreatLent, Seasons.JonahFast].includes(Season))
                return;
            if (copticReadingsDate === copticFeasts.Resurrection)
                return;
            let btnGospelNight = btnGospelReading(Prefix.gospelNight);
            let btnPropheciesMorning = new Button({
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
            btnDayReadings.children = btnDayReadings.children.filter(b => ![btnGospelVespers, btnGospelMorning].includes(b)); //We remove the Mornign and Vespers Gospel buttons
            if (Season === Seasons.PentecostalDays)
                btnDayReadings.children.splice(btnDayReadings.children.length - 2, 1); //We remove the Synaxarium button
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
function btnIncenseOffice(morning = false) {
    let btnIncenseMorning = new Button({
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
        afterShowPrayers: () => afterShowPrayers(btnIncenseMorning, Prefix.gospelMorning, ReadingsArrays.GospelMorningArrayFR),
    });
    if (morning === true)
        return btnIncenseMorning;
    let btnIncenseVespers = new Button({
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
        afterShowPrayers: () => afterShowPrayers(btnIncenseVespers, Prefix.gospelVespers, ReadingsArrays.GospelVespersArrayFR),
    });
    let btnIncenseOffice = new Button({
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
    function afterShowPrayers(btn, gospelPrefix, gospelArray) {
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
    }
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
    return btnIncenseOffice;
}
function btnMassBaptised() {
    let btnMassStBasil = new Button({
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
        afterShowPrayers: () => afterShowPrayers(btnMassStBasil),
    });
    let btnMassStCyril = new Button({
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
        afterShowPrayers: async () => afterShowPrayers(btnMassStCyril),
    });
    let btnMassStGregory = new Button({
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
        afterShowPrayers: async () => afterShowPrayers(btnMassStGregory),
    });
    let btnMassStJohn = new Button({
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
        afterShowPrayers: async () => afterShowPrayers(btnMassStJohn),
    });
    let btnMassBaptised = new Button({
        btnID: "btnMassBaptised",
        label: {
            AR: "قٌدَّاسِ المُؤْمِنينَ",
            FR: "Liturgie des Croyants",
            EN: "Baptized Mass",
        },
        parentBtn: btnMass,
        children: [btnMassStBasil, btnMassStGregory, btnMassStCyril], //We are removing Mass StJohn for now
    });
    return btnMassBaptised;
    function afterShowPrayers(btn) {
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
    }
}
function btnGospelReading(prefix) {
    if (prefix === Prefix.gospelVespers)
        return new Button({
            btnID: "btnReadingsGospelIncenseVespers",
            label: {
                AR: "إنجيل عشية",
                FR: "Évangile  Vêpres",
                EN: "Vespers Gospel",
            },
            showPrayers: true,
            onClick: () => btnOnClick(Prefix.gospelVespers),
        });
    else if (prefix === Prefix.gospelMorning)
        return new Button({
            btnID: "btnReadingsGospelIncenseDawn",
            label: {
                AR: "إنجيل باكر",
                FR: "Évangile du Matin",
                EN: "Morning Gospel",
            },
            showPrayers: true,
            onClick: () => btnOnClick(Prefix.gospelMorning),
        });
    else if (prefix === Prefix.gospelNight)
        return new Button({
            btnID: "btnReadingsGospelNight",
            label: {
                AR: "إنجيل المساء",
                FR: "Évangile du Soir",
                EN: "Night Gospel",
            },
            showPrayers: true,
            onClick: () => btnOnClick(Prefix.gospelNight)
        });
    else if (prefix === Prefix.gospelMass)
        return new Button({
            btnID: "btnReadingsGospelMass",
            label: {
                AR: "إنجيل القداس",
                FR: "Évangile de la messe",
                EN: "Mass Gospel",
            },
            showPrayers: true,
            onClick: () => btnOnClick(Prefix.gospelMass),
        });
    function btnOnClick(gospelPrefix) {
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
    }
    ;
}
function btnHolyWeek() {
    /*The buttons tree is structured this way:
    btnMaster =>
            btnPassOver =>
                    [btnDay, btnEvening]=>
                              [btn1stHour, btn3rdHour, etc.]*/
    let Evening = 'E', Morning = 'M';
    let btnPassOver = new Button({
        btnID: 'btnPassover',
        label: { AR: 'البصخة المقدسة', FR: 'Pessah' },
        onClick: () => btnPassOver.children = [getDayAndEveningBtns(Morning), getDayAndEveningBtns(Evening)], //We remove undefined elements
    }); //btnPassOver shows Day and Evening buttons
    let btnHolyWeek = new Button({
        btnID: 'btnHolyWeek',
        label: { AR: 'طقس اسبوع الآلام', FR: 'Rite de la semaine sainte' },
        children: [btnPassOver]
    });
    return btnHolyWeek; //btnMaster shows btnPassOver
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
function btnBible() {
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
    let btnBible = new Button({
        btnID: 'btnBible',
        label: {
            AR: 'الكتاب المقدس',
            FR: 'La Bible'
        },
        children: [oldTestament, newTestament]
    });
    return btnBible;
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