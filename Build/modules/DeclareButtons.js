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
        [defaultLanguage, foreingLanguage].forEach(lang => getBibleVersion(lang, false));
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
        btnMassUnBaptised.children = btnDayReadings.onClick(true);
        let btnsPrayersSequence = [
            ...sequences.Mass.Unbaptized,
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
                        .filter(title => ![Prefix.massCommon + "HallelujahFayBiBiFast" + anyDay, Prefix.massCommon + "Tishoury" + anyDay].includes(splitTitle(title)[0]));
                else
                    return ifIsFast();
                function ifIsFast() {
                    if (!isFast)
                        return;
                    if ([Seasons.GreatLent, Seasons.JonahFast].includes(Season)) {
                        //We are either during the week days of the Great Lent, or the 3 days of Jonah Fast
                        [
                            ["HallelujahFayBiBiFast" + anyDay, "HallelujahFayBiBi&D=$Seasons.GreatLent"], //Replacing "Halleljah Ge Evmevi" with "Halleluja E Ikhon"
                            ["Tishoury" + anyDay, "EnsotyTishoury&D=$Seasons.GreatLent"]
                        ] //Replacing "Tishoury" with "Ensoty Tishoury"
                            .forEach(array => btnsPrayersSequence[btnsPrayersSequence.indexOf(Prefix.massCommon + array[0])] = Prefix.massCommon + array[1]);
                    }
                    //We will remove 'Hellulja Fay Bibi'and keep only 'Hellulja Ge Evmev'i". We will also remove Tayshoury in order to keep only Tishoury 
                    return btnsPrayersSequence
                        .filter(title => ![Prefix.massCommon + "HallelujahFayBiBi" + anyDay, Prefix.massCommon + "Tayshoury" + anyDay].includes(splitTitle(title)[0]));
                }
            }
            ;
        })();
        scrollToTop();
        return btnMassUnBaptised.prayersSequence;
    },
    afterShowPrayers: async (btn = btnMassUnBaptised) => {
        let btnDocFragment = btn.docFragment;
        if (btnProsternation.children?.includes(btn))
            return insertBookOfHoursButton();
        (function hideGodHaveMercyOnUsIfBishop() {
            let dataRoot = Prefix.commonPrayer +
                "PrayThatGodHaveMercyOnUs" + anyDay;
            let godHaveMercyHtml = selectElementsByDataSetValue(btnDocFragment, dataRoot, { startsWith: true }); //We select all the paragraphs not only the paragraph for the Bishop
            if (godHaveMercyHtml.length < 1)
                return;
            godHaveMercyHtml
                .filter((div) => godHaveMercyHtml?.indexOf(div) > 0 &&
                godHaveMercyHtml?.indexOf(div) < godHaveMercyHtml.length - 1)
                .forEach((htmlRow) => htmlRow.remove());
            let godHaveMercy = findTable(dataRoot, CommonPrayersArray); //We get the entier table not only the second row. Notice that the first row of the table is the row containing the title
            addExpandablePrayer({
                insertion: godHaveMercyHtml[0]?.nextElementSibling,
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
                Prefix.commonPrayer + "WeHaveBeenSavedWithYou" + anyDay,
                Prefix.massCommon + "HisFoundations&D=$Seasons.GreatLent",
                Prefix.incenseDawn + "GodHaveMercyOnUsRefrain&D=$Seasons.GreatLent",
            ];
            selectElementsByDataSetValue(btnDocFragment, titles[0], { equal: true }, 'root').forEach(el => el.remove()); //We remove the existing 'Sotis Amen' prayer
            let tables = titles.map(title => findTable(title, getTablesArrayFromTitlePrefix(title)) || undefined); //We retrieve the 3 tables by their titles
            if (!tables || tables.length < 1)
                return;
            let anchor = selectElementsByDataSetValue(btnDocFragment, Prefix.massCommon + "AbsolutionForTheFather" + anyDay, { equal: true }, 'root')[0]; //This is the html element before which we will insert the retrived tables
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
        let readingsAnchor = selectElementsByDataSetValue(btnDocFragment, Prefix.anchor + "Readings" + anyDay)[0]; //this is the html element before which we will insert all the readings and responses
        (function insertIntercessionsHymnsForSeasons() {
            let seasonalIntercessions = MassCommonPrayersArray.filter((table) => RegExp('Intercessions\.\*D=').test(table[0][0])
                &&
                    (isMultiDatedTitleMatching(table[0][0], [copticDate, Season])));
            if (seasonalIntercessions.length < 1)
                return console.log("No Seasonsal Intercession Hymns");
            seasonalIntercessions = getUniqueValuesFromArray(seasonalIntercessions);
            let anchor;
            if ([Seasons.PentecostalDays, Seasons.Ascension].includes(Season))
                selectElementsByDataSetValue(btnDocFragment, 'IntercessionsStMaykel', { includes: true }, 'root').forEach(div => div.remove()); //We remove the intercessions of St. Maykel because they will be replaced by those of the Pentocostal days
            seasonalIntercessions.forEach(table => {
                anchor = setIntercessionsAnchor(table[0][0]);
                if (!anchor)
                    return;
                insertPrayersAdjacentToExistingElement({
                    tables: [table],
                    languages: getLanguages(table[0][0]),
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
                else if ([Seasons.PentecostalDays, Seasons.Ascension].includes(Season) && !title.includes('IntercessionsStMaykel'))
                    insertion = "IntercessionsStMarc"; //The "By the intercessions of St Maykel..." will be inserted after the intercessions of St. Mary
                if (!insertion)
                    return;
                let htmlDivs = selectElementsByDataSetValue(btnDocFragment, Prefix.massCommon + insertion + "" + anyDay);
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
                prayers: [findTable(Prefix.massCommon + "BiEhmotGhar" + anyDay, MassCommonPrayersArray) || undefined],
                label: {
                    AR: "بي إهموت غار",
                    FR: "Ⲡⲓϩ̀ⲙⲟⲧ ⲅⲁⲣ"
                },
                languages: prayersLanguages
            });
        })();
        insertBookOfHoursButton();
        await insertMassReadingsAndResponses();
        async function insertMassReadingsAndResponses() {
            //St. Paul
            await insertMassReading(Prefix.stPaul, ReadingsArrays.StPaulArrayFR, ReadingsIntrosAndEnds.stPaulIntro, ReadingsIntrosAndEnds.stPaulEnd);
            //Catholicon
            await insertMassReading(Prefix.Catholicon, ReadingsArrays.CatholiconArrayFR, ReadingsIntrosAndEnds.CatholiconIntro, ReadingsIntrosAndEnds.CatholiconEnd);
            (function insertPraxisResponse() {
                //!Caution, we must start by inserting the Praxis Response before inserting the Praxis reading
                let specialResponse = [];
                let feastsDates = Object.values(copticFeasts);
                let isFeast = feastsDates?.includes(copticDate);
                if (!isFeast)
                    isFeast =
                        feastsDates
                            .filter(v => v?.startsWith(Seasons.GreatLent) || v?.startsWith(Seasons.PentecostalDays))
                            .includes(copticReadingsDate);
                let isStMaryFeast = Object.values(stMaryFeasts).includes(copticDate);
                if (isFeast)
                    specialResponse =
                        PraxisResponsesPrayersArray.filter((table) => isMultiDatedTitleMatching(table[0][0], [copticDate, copticReadingsDate]))
                            .filter(tbl => tbl[0][0]?.includes('&D=$saintsFeasts.')); //We look for a response for the copticDate or copticReadingsDate, and we exclude responses for saints feasts
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
                                specialResponse.filter((table) => table[0][0]?.includes("Sundays&D="))
                            :
                                specialResponse =
                                    specialResponse.filter((table) => table[0][0]?.includes("Week&D="));
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
                    let noSeasonResponse = findTable(Prefix.praxisResponse + "" + anyDay, PraxisResponsesPrayersArray) || undefined;
                    if (!noSeasonResponse)
                        return;
                    noSeasonResponse = insertPrayersAdjacentToExistingElement({
                        tables: [noSeasonResponse],
                        languages: getLanguages(Prefix.praxisResponse),
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
                    let anchor = responses.find(div => div?.dataset.root === Prefix.anchor + "Saints" + anyDay);
                    if (!anchor)
                        return; //If no placeHolder is found, it means that we are during a special Season (not a 'NoSeason' period), and no placeHolder for the saints response is included
                    if (!Object.values(saintsFeasts).includes(copticDate))
                        return; //It means that today is not a saint feast
                    specialResponse = PraxisResponsesPrayersArray.filter((table) => table[0][0]?.includes('&D=$saintsFeasts.') && isMultiDatedTitleMatching(table[0][0], [copticDate]));
                    if (specialResponse.length < 1)
                        return;
                    insertPrayersAdjacentToExistingElement({
                        tables: specialResponse,
                        languages: getLanguages(Prefix.praxisResponse),
                        position: {
                            el: anchor,
                            beforeOrAfter: 'beforebegin'
                        },
                        container: btnDocFragment
                    });
                }
            })();
            //Praxis
            await insertMassReading(Prefix.praxis, ReadingsArrays.PraxisArrayFR, ReadingsIntrosAndEnds.praxisIntro, ReadingsIntrosAndEnds.praxisEnd);
            await insertSynaxarium();
            async function insertSynaxarium() {
                if (Season === Seasons.PentecostalDays)
                    return; //We do not read the Synaxarium during the 50 Pentecostal days
                let intro = { ...ReadingsIntrosAndEnds.synaxariumIntro };
                Object.entries(intro)
                    .forEach(entry => intro[entry[0]] =
                    entry[1]
                        .replace("theday", Number(copticDay).toString())
                        .replace("themonth", copticMonths[Number(copticMonth)][entry[0]]));
                await insertMassReading(Prefix.synaxarium, ReadingsArrays.SynaxariumArrayFR, intro, undefined, copticDate); //!Caution: we must pass the copticDate for the 'date' argument, otherwise it will be set to the copticReadingsDate by default, and we will get the wrong synaxarium
                //We will reverse the langauges
                let introHTML = selectElementsByDataSetValue(btnDocFragment, Prefix.synaxarium + "&D=" + copticDate)[1];
                if (!introHTML || introHTML.children.length < 1)
                    return console.log('Didn\'t find the Synaxarium');
                introHTML.children[0].insertAdjacentElement("beforebegin", introHTML.children[0]);
            }
            ;
            async function insertMassReading(readingPrefix, readingArray, readingIntro, readingEnd, date = copticReadingsDate) {
                let readings;
                readings = await findMassReadingOtherThanGospel(readingPrefix, readingArray, { beforeOrAfter: "beforebegin", el: readingsAnchor }, btnDocFragment, false, date);
                if (!readings || readings.length === 0)
                    return;
                readings = readings.filter(div => div && div[0]);
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
            ;
            (function insertSepcialAgiosIfFeast() {
                let Agios = Prefix.massCommon + "Agios&D=$copticFeasts.";
                if ([copticFeasts.EntryToEgypt, copticFeasts.CanaWedding].includes(copticDate))
                    Agios += Object.entries(copticFeasts).find(entry => entry[1] === copticDate)[0];
                else if ([copticFeasts.PalmSunday, copticFeasts.Ascension, copticFeasts.Pentecoste].includes(copticReadingsDate))
                    Agios += Object.entries(copticFeasts).find(entry => entry[1] === copticReadingsDate)[0];
                else if ([Seasons.Nativity, Seasons.Baptism, Seasons.CrossFeast, Seasons.PentecostalDays, Seasons.Ascension].includes(Season))
                    Agios = Agios.replace('copticFeasts', 'Seasons') + Object.entries(Seasons).find(entry => entry[1] === Season)[0];
                else
                    Agios += "AnyDay";
                let AgiosTable = findTable(Agios, MassCommonPrayersArray, {
                    equal: true,
                }) || undefined;
                if (!AgiosTable)
                    return console.log("Didn't find the special Agios table in PrayersArray");
                (function adaptToAscension() {
                    if (Season !== Seasons.Ascension)
                        return; //i.e. if we are between the Pentecoste & the Assumption feasts: day 40 to day 49
                    let raisedAndAscended = findTable(Prefix.commonPrayer + "AgiosPart1" + anyDay, CommonPrayersArray, {
                        equal: true,
                    })[3]; //This is the 3rd paragraph of the ordinary Agios Osios Hymn ('For He Raised and Ascended to the Heaveans'...etc.)
                    if (!raisedAndAscended)
                        return;
                    [4, 5, 6].forEach(index => AgiosTable[AgiosTable.length - index] = raisedAndAscended); //Replacing the 3 Agios paragraphs with the Ascension paragraph
                })();
                insertPrayersAdjacentToExistingElement({
                    tables: [AgiosTable],
                    languages: getLanguages(AgiosTable[0][0]),
                    position: {
                        beforeOrAfter: "beforebegin",
                        el: readingsAnchor?.nextElementSibling,
                    },
                    container: btnDocFragment,
                });
                //  oldAgios.forEach((div) => div.remove());
            })();
            await getGospelReadingAndResponses({
                liturgy: Prefix.gospelMass,
                prayersArray: ReadingsArrays.GospelMassArrayFR,
                languages: getLanguages(Prefix.gospelMass),
                container: btnDocFragment,
                isMass: true,
                clearContainer: false,
            });
        }
        ;
        function insertBookOfHoursButton() {
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
                            .filter((title) => !title?.includes("Psalm"));
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
                else if (btnProsternation.children?.includes(btn)) {
                    hours.push(hoursBtns[4], hoursBtns[5]);
                    hours.shift();
                }
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
                let expandables = selectElementsByDataSetValue(containerDiv, 'HourExpandable', { endsWith: true }, 'group').filter(div => div?.classList.contains('Expandable'));
                if (expandables.length < 1)
                    return;
                expandables
                    .forEach(expandable => expandable?.id?.startsWith(hourBtnId) ?
                    showOrHideHour(expandable)
                    : hideHour(expandable));
                function hideHour(expandable) {
                    if (expandable.classList.contains(hidden))
                        return; //If it is already hidden, we do not need to hide.
                    expandable.classList.add(hidden);
                    Array.from(sideBarTitlesContainer.children)
                        .filter((div) => div?.dataset?.group === expandable?.id)
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
                        floatOnTopOrBottom(btnsDiv, true, "5px"); //Making the hours buttons container float on top
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
                            .filter((div) => div?.dataset?.group === expandable.id)
                            .forEach(div => div.remove());
                    })();
                }
                ;
            }
            ;
            function InsertHourFinalPrayers(hourBtn) {
                let Agios = Prefix.commonPrayer + "Agios" + anyDay, Kyrielison41Times = Prefix.commonPrayer + "Kyrielison41Times" + anyDay, KyrielisonIntro = Kyrielison41Times.replace("&D=", "NoMassIntro&D="), KyrielisonMassIntro = Kyrielison41Times.replace("&D=", "MassIntro&D="), HolyLordOfSabaot = Prefix.commonPrayer +
                    "HolyHolyHolyLordOfSabaot" + anyDay, HailToYouMaria = Prefix.commonPrayer + "WeSaluteYouMary" + anyDay, WeExaltYou = Prefix.commonPrayer + "WeExaltYouStMary" + anyDay, Creed = Prefix.commonPrayer + "Creed" + anyDay, OurFatherWhoArtInHeaven = Prefix.commonPrayer +
                    "OurFatherWhoArtInHeaven" + anyDay;
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
        }
        ;
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
    onClick: async () => {
        await findMassReadingOtherThanGospel(Prefix.stPaul, ReadingsArrays.StPaulArrayFR, { beforeOrAfter: undefined, el: undefined }, containerDiv, true);
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
    onClick: async () => {
        await findMassReadingOtherThanGospel(Prefix.Catholicon, ReadingsArrays.CatholiconArrayFR, { beforeOrAfter: undefined, el: undefined }, containerDiv, true);
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
    onClick: async () => {
        await findMassReadingOtherThanGospel(Prefix.praxis, ReadingsArrays.PraxisArrayFR, { beforeOrAfter: undefined, el: undefined }, containerDiv, true);
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
    onClick: async () => {
        await findMassReadingOtherThanGospel(Prefix.synaxarium, ReadingsArrays.SynaxariumArrayFR, { beforeOrAfter: undefined, el: undefined }, containerDiv, true, copticDate); //!CAUTION: notice that we passed to the function the readingDate argument because during the GreatLent period and the Jonah Fast, the copticReadingsDate is formatted like 'GL10', we hence pass the copticDate to prevent the function from searching for the Synaxarium of the day by the copticReadingsDate
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
    onClick: async () => {
        await findMassReadingOtherThanGospel(Prefix.prophecies, ReadingsArrays.PropheciesDawnArrayFR, { beforeOrAfter: undefined, el: undefined }, containerDiv, true);
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
        [defaultLanguage, foreingLanguage]
            .forEach(async (lang) => {
            if (!lang)
                return;
            if (Bibles[lang][0])
                return;
            await getBibleVersion(defaultLanguage, false);
        });
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
                        !btnDayReadings.children?.includes(btnGospelNight))
                    btnDayReadings.children.push(btnGospelNight);
                (function ifWeAreNotASunday() {
                    if (weekDay === 0)
                        return;
                    //If we are not a Sunday (i.e., we are during any week day other than Sunday and Saturday), we will  add the Prophecies button to the list of buttons
                    if (!btnDayReadings.children?.includes(btnPropheciesMorning))
                        btnDayReadings.children.unshift(btnPropheciesMorning);
                    //Also if we  are not a Sunday, we will remove the Night Gospel, if included
                    btnDayReadings.children = btnDayReadings.children.filter((btn) => btn !== btnGospelNight);
                })();
            })();
        })();
        (function ifMass() {
            if (!mass)
                return;
            btnDayReadings.children = btnDayReadings.children.filter(btn => ![btnGospelVespers, btnGospelMorning, btnGospelNight, btnPropheciesMorning].includes(btn)); //We remove the Mornign and Vespers Gospel buttons
            if ([Seasons.PentecostalDays, Seasons.Ascension].includes(Season))
                btnDayReadings.children = btnDayReadings.children.filter(child => child !== btnReadingsSynaxarium); //We remove the Synaxarium button
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
        let OurFatherWhoArtInHeaven = Prefix.commonPrayer + "OurFatherWhoArtInHeaven" + anyDay, AngelsPrayers = Prefix.commonPrayer + "AngelsPrayer" + anyDay, HailToYouMaria = Prefix.commonPrayer + "WeSaluteYouMary" + anyDay, WeExaltYou = Prefix.commonPrayer + "WeExaltYouStMary" + anyDay, Agios = Prefix.commonPrayer + "Agios" + anyDay, Kyrielison41Times = Prefix.commonPrayer + "Kyrielison41Times" + anyDay, KyrielisonIntro = Kyrielison41Times.replace("&D=", "NoMassIntro&D="), HolyLordOfSabaot = Prefix.commonPrayer + "HolyHolyHolyLordOfSabaot" + anyDay, Creed = Prefix.commonPrayer + "Creed" + anyDay, AllHoursFinalPrayer = Prefix.bookOfHours + "AllHoursFinalPrayer" + anyDay;
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
                let otherPrayers = [Prefix.bookOfHours + 'BeforeCommunion' + anyDay, Prefix.bookOfHours + 'AfterCommunion' + anyDay];
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
                            AR: table[0][btnBookOfHours?.languages.indexOf('AR') + 1],
                            FR: table[0][btnBookOfHours?.languages.indexOf('FR') + 1]
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
                let children = Array.from(containerDiv.children).filter((div) => div?.dataset?.root);
                scrollToTop();
                children.forEach((htmlRow) => ["Priest", "Diacon", "Assembly"].forEach((className) => htmlRow.classList.replace(className, "NoActor")));
                if (btnLabel !== bookOfHours.VeilHour[1])
                    return;
                //If we are in the 'Setar Hour', we need to remove from Psalm 118 all the paragraphs except paragraphs 20, 21, and 22. We will do this by adding a btn.afterShowPlayers function
                let psalm118 = children.filter((div) => div?.dataset?.root?.startsWith(Prefix.bookOfHours + "Psalm118"));
                psalm118
                    .filter((div) => psalm118?.indexOf(div) > 0 && psalm118?.indexOf(div) < 20)
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
                                "ThanksGivingPart1" + anyDay,
                            Prefix.commonPrayer +
                                "ThanksGivingPart2" + anyDay,
                            Prefix.commonPrayer +
                                "ThanksGivingPart3" + anyDay,
                            Prefix.commonPrayer +
                                "ThanksGivingPart4" + anyDay,
                            Prefix.bookOfHours + "Psalm50" + anyDay,
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
                        "" + anyDay.replace("&D=", replaceWith + "&D="));
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
            return btnPsalmody.prayersSequence = sequences.Psalmody.Kiahk;
        btnPsalmody.prayersSequence = sequences.Psalmody.Year;
        let weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        btnPsalmody.prayersSequence
            .forEach(title => {
            if ([...weekDays].splice(weekDay, 1)
                .map(day => title?.includes(day))
                ?.includes(true))
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
        btnIncenseMorning.prayersSequence = [...sequences.Incense].filter((title) => !title?.startsWith(Prefix.incenseVespers)); //We will remove all the Incense Vespers titles from the prayersSequence Array
        if (weekDay === 6)
            //If we are a Saturday, we pray only the 'Departed Litany', we will hence remove the 'Sick Litany' and the 'Travellers Litany'
            btnIncenseMorning.prayersSequence.splice(btnIncenseMorning.prayersSequence.indexOf(Prefix.incenseDawn + "SickLitany" + anyDay), 3, //We remove the SickPrayer, the TravelersParayer and the Oblations Prayer
            Prefix.incenseVespers + "DepartedLitany" + anyDay);
        else if (weekDay === 0 || lordFeasts.includes(copticDate))
            //If we are a Sunday or the day is a Lord's Feast, or the oblation is present, we remove the 'Travellers Litany' and keep the 'Sick Litany' and the 'Oblation Litany'
            btnIncenseMorning.prayersSequence = btnIncenseMorning.prayersSequence.filter((tbl) => !tbl[0][0]?.startsWith(Prefix.incenseDawn + "TravelersLitany" + anyDay));
        scrollToTop();
        return btnIncenseMorning.prayersSequence;
    },
    afterShowPrayers: async (btn = btnIncenseMorning, gospelPrefix = Prefix.gospelMorning) => {
        let btnDocFragment = btn.docFragment;
        if (btnProsternation.children?.includes(btn))
            return hideGodHaveMercyOnUsIfBishop();
        insertCymbalVersesAndDoxologies(btn);
        await getGospelReadingAndResponses({
            liturgy: gospelPrefix,
            prayersArray: getTablesArrayFromTitlePrefix(gospelPrefix),
            languages: getLanguages(gospelPrefix),
            container: btnDocFragment,
            isMass: true,
            clearContainer: false,
        });
        hideGodHaveMercyOnUsIfBishop();
        function hideGodHaveMercyOnUsIfBishop() {
            let dataRoot = Prefix.commonPrayer +
                "PrayThatGodHaveMercyOnUs" + anyDay;
            let godHaveMercyHtml = selectElementsByDataSetValue(btnDocFragment, dataRoot, { startsWith: true }); //We select all the paragraphs not only the paragraph for the Bishop
            godHaveMercyHtml
                .filter((htmlRow) => godHaveMercyHtml?.indexOf(htmlRow) > 0 &&
                godHaveMercyHtml?.indexOf(htmlRow) !== godHaveMercyHtml?.length - 2)
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
        }
        ;
        adaptConcludingHymn(btnDocFragment);
        if (btn !== btnIncenseMorning)
            return; //The functions from this point on concern the Morning Incense service only
        (async function insertPropheciesAndEklonomin() {
            if (![Seasons.GreatLent, Seasons.JonahFast].includes(Season))
                return;
            if ([0, 6].includes(weekDay))
                return; //We are neither a Saturday nor a Sunday, we will hence display the Prophecies dawn buton
            let anchor = selectElementsByDataSetValue(btnDocFragment, Prefix.anchor + "Prophecies" + anyDay, undefined, 'root')[0];
            (function insertProphecies() {
                //! This must come before Eklonomin Taghonata has been inserted
                let Prophecies = findTable(Prefix.prophecies + "&D=" + copticReadingsDate, ReadingsArrays.PropheciesDawnArrayFR);
                if (!Prophecies)
                    return console.log("Didn't find Prophecies with the current date");
                let title = [[Prophecies[0][0], 'نبوات باكر', 'Prophecies', '']];
                insertPrayersAdjacentToExistingElement({
                    tables: [title, Prophecies],
                    languages: getLanguages(Prefix.prophecies),
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
                        .filter((htmlRow) => htmlRow?.classList.contains("Title"));
                    refrains.forEach((htmlRow) => {
                        if (refrains.indexOf(htmlRow) > 0)
                            htmlRow?.remove();
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
                prayers: [findTable(Prefix.doxologies + "AdamDawn" + anyDay, DoxologiesPrayersArray) || undefined],
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
                anchor = selectElementsByDataSetValue(btn.docFragment, Prefix.anchor + "CymbalVerses" + anyDay)[0];
                if (!anchor)
                    return console.log("We didn't find the cymbal verses placeholder");
                let cymbals;
                if ([Seasons.JonahFast, Seasons.GreatLent].includes(Season) && ![0, 6].includes(weekDay))
                    //If we are during the Jonah Fast or during the Great Lent but not on a Saturday or a Sunday, the Cymbal Verses are not chanted, they are replaced by the Long Kyrielison and the Cymbal Verses End
                    cymbals =
                        [
                            CommonPrayersArray.find(table => table[0][0]?.startsWith(Prefix.commonPrayer + "KyrieElieson" + anyDay)),
                            CymbalVersesPrayersArray.find(table => table[0][0]?.startsWith(Prefix.cymbalVerses + "End" + anyDay))
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
                        Prefix.cymbalVerses + "Wates" + anyDay,
                        Prefix.cymbalVerses + "" + anyDay,
                    ];
                    if ([0, 1, 2].includes(weekDay))
                        sequence[0] = sequence[0].replace("Wates&D", "Adam&D");
                    //If we are during any of the Lord Feasts (or any season where we follow the same pattern), we add "Jesus Christ is the same for ever...",
                    if ([...lordFeasts, copticFeasts.Coptic29th].includes(copticDate) ||
                        [Seasons.Nativity, Seasons.Baptism, Seasons.PentecostalDays, Seasons.Ascension].includes(Season))
                        sequence =
                            [Prefix.cymbalVerses + "LordFeastsEnd" + anyDay];
                    if (dayFeasts)
                        dayFeasts.forEach((feast) => [
                            ...lordFeasts,
                            Seasons.Nativity,
                            Seasons.Baptism,
                            Seasons.PentecostalDays, Seasons.Ascension
                        ].includes(feast) //During Seasons.Nativity (i.e., between Nativity and Circumcision) and Seasons.Baptism(from Baptism to Cana Wedding), the Cymbals verses follow the pattern of any Lord Feast: it starts with "Amoyni Marin..." or "Ten O'osht", then the cymbal verses of the feast, and finally, the "Eb'oro enti ti hirini". We will hence remove the 2nd element from the sequence
                            ? insertFeastInSequence(sequence, feast, 0, 0)
                            : insertFeastInSequence(sequence, feast, 1, 0)); //We always start with 'Amoyni Marin...' or with 'Tin O'osht...', so we will insert the feast element before the 2nd element, and will not delete anything
                    return processSequence(sequence, Prefix.cymbalVerses);
                }
            })();
            (async function InsertCommonDoxologies() {
                let doxologiesAnchor = selectElementsByDataSetValue(btn.docFragment, Prefix.anchor + "Doxologies" + anyDay)[0];
                if (!doxologiesAnchor)
                    return console.log("Didn't find doxologiesPlaceholder");
                if (!doxologiesAnchor)
                    return;
                let sequence = [
                    Prefix.doxologies + "DawnWatesStMary" + anyDay,
                    Prefix.doxologies + "StMaykel" + anyDay,
                    Prefix.doxologies + "CelestialBeings" + anyDay,
                    Prefix.doxologies + "Apostles" + anyDay,
                    Prefix.doxologies + "StMarc" + anyDay,
                    Prefix.doxologies + "StGeorge" + anyDay,
                    Prefix.doxologies + "StMina" + anyDay,
                    Prefix.doxologies + "EndOfDoxologiesWates" + anyDay,
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
                            Seasons.Ascension
                        ].includes(feast))
                            index = 0; //If one of the dates in feast[] corresponds to a one of the 'Lord's Feasts', it means we are in a Lord Feast. the doxologies of the feast will be placed at the begining of the doxologies. We follow the same rule for the doxologies of the PentecostalDays and the month of Kiahk
                        else if (excludedFeasts.includes(feast)) {
                            let feastIndex = sequence.indexOf(feast);
                            sequence.splice(2, 0, sequence[feastIndex]); //If it is one of the doxologies already included by default, we place it after St. Maykel
                            sequence.splice(feastIndex + 1, 1); //We then delete the element itself
                            index = undefined; //We set index to undefined in order to prevent insertFeastSequence from inserting any element in sequence
                        }
                        else if (Object.entries(celestialBeingsFeasts).filter(entry => entry[0]?.startsWith('Archangel')).map(entry => entry[1]).includes(feast))
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
                                .filter((tbl) => !tbl[0][0]?.includes("Sundays&D=$Seasons.GreatLent"));
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
                            .forEach((tbl) => tables?.push(tbl));
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
        btnIncenseVespers.prayersSequence = [...sequences.Incense].filter((title) => title !== Prefix.commonPrayer + "AngelsPrayer" + anyDay &&
            !title.startsWith(Prefix.incenseDawn));
        scrollToTop();
        return btnIncenseVespers.prayersSequence;
    },
    afterShowPrayers: () => btnIncenseMorning.afterShowPrayers(btnIncenseVespers, Prefix.gospelVespers),
});
const btnProsternation = new Button({
    btnID: "btnProsternation",
    label: {
        AR: "صَلاة السَّجْدَة",
        FR: "Prière de la Prosternation",
        EN: "Prosternation Prayer",
    },
    onClick: () => {
        let Commentary = Prefix.incenseVespers + 'GospelCommentaryXXX' + anyDay;
        let Litany = Prefix.incenseVespers + 'ProsternationLitanyXXX' + anyDay;
        let sequence = [
            Prefix.commonIncense + "EleysonImas" + anyDay,
            Prefix.anchor + 'Cymbals',
            Prefix.cymbalVerses + anyDay,
            Prefix.bookOfHours + "Psalm50" + anyDay,
            Prefix.anchor + 'PropheciesIntro', //!provide
            Prefix.anchor + 'Prophecies',
            Prefix.anchor + 'PropheciesEnd', //!provide
            Prefix.massCommon + "WeBowToYouJesusChrist" + anyDay,
            Prefix.anchor + 'StPaulIntro', //!provide
            Prefix.anchor + 'StPaul',
            Prefix.anchor + 'StPaulEnd', //!provide
            Prefix.anchor + 'Agios',
            Prefix.commonPrayer + "BlockIriniPassi" + anyDay,
            Prefix.commonPrayer + "GospelLitany" + anyDay,
            Commentary,
            Prefix.anchor + 'Litanies',
            Prefix.massCommon + "DiaconResponseWorshipGodInFearAndTrembling" + anyDay,
            Litany,
            Prefix.commonPrayer + "OurFatherWhoArtInHeaven" + anyDay,
        ];
        let services = [
            {
                Prophecies: 'DEU:5:23-End/6:1-3',
                StPaul: '1CO:12:28-End/13:1-12',
                Agios: [Prefix.massCommon + "Agios&D=$Seasons.PentecostalDays||$Seasons.Ascension"],
                Gospel: ['PSA:97:7-8/97:1-1', 'JHN:17:1-26'],
                Responses: [Prefix.psalmResponse + "&D=$Seasons.Ascension", Prefix.gospelResponse + "&D=$Seasons.Ascension"],
                Cymbals: [Prefix.cymbalVerses + "&D=$copticFeasts.Ascension"],
                Litanies: [
                    Prefix.incenseDawn + "SickLitany" + anyDay,
                    Prefix.incenseDawn + "TravelersLitany" + anyDay,
                    Prefix.massCommon + "SeasonalLitany" + anyDay,
                    Prefix.massCommon + "PlacesLitany" + anyDay,
                ],
            },
            {
                Prophecies: 'DEU:6:17-25',
                StPaul: '1CO:13:13-End/14:1-17',
                Agios: [Prefix.commonPrayer + "Agios" + anyDay],
                Gospel: ['PSA:115:12-13', 'LUK:24:36-53'],
                Responses: [Prefix.psalmResponse + anyDay + "||$Seasons.Kiahk", ''],
                Cymbals: [Prefix.cymbalVerses + "Adam" + anyDay],
                Litanies: [
                    Prefix.massCommon + "PresidentLitany" + anyDay,
                    Prefix.incenseVespers + "DepartedLitany" + anyDay,
                    Prefix.incenseDawn + "OblationsLitany" + anyDay,
                    Prefix.massCommon + 'CatechumensLitany' + anyDay
                ]
            },
            {
                Prophecies: 'DEU:16:1-18',
                StPaul: '1CO:14:18-40',
                Agios: [Prefix.commonPrayer + "Agios" + anyDay],
                Gospel: ['PSA:65:2-2/71:9-9', 'JHN:4:1-24'],
                Responses: [Prefix.psalmResponse + anyDay + "||$Seasons.Kiahk", ''],
                Cymbals: [Prefix.cymbalVerses + "Wates" + anyDay],
                Litanies: [
                    Prefix.commonPrayer + "ChurchLitany" + anyDay, //!needs check + convert font
                    Prefix.commonPrayer + "PopeAndBishopLitany" + anyDay,
                    Prefix.commonPrayer + "RequestedPrayersLitany" + anyDay,
                    'Assembly Litany' //!missing
                ]
            },
        ];
        let labelBase = {
            AR: 'السَّجْدَة XXX',
            FR: 'XXX Prosternation',
            EN: 'XXX Prosternation'
        };
        let labelNumber = [
            {
                AR: 'الأولى',
                FR: 'Première',
                EN: 'First'
            },
            {
                AR: 'الثانية',
                FR: 'Deuxième',
                EN: 'Second'
            },
            {
                AR: 'الثالثة',
                FR: 'Troisième',
                EN: 'Third'
            },
        ];
        let children = services.map(s => {
            let n = services.indexOf(s);
            return new Button({
                btnID: btnProsternation.btnID + n.toString(),
                label: customizeLable(n),
                docFragment: new DocumentFragment(),
                onClick: () => btnOnClick(n),
                afterShowPrayers: () => btnAfterShowPrayers(n)
            });
        });
        btnProsternation.children = children;
        function customizeLable(i) {
            let label = { ...labelBase };
            label[defaultLanguage] = label[defaultLanguage].replace('XXX', labelNumber[i][defaultLanguage]);
            return label;
        }
        async function btnOnClick(n, getTables = false) {
            let btn = btnProsternation.children[n];
            let tables = await returnTables(n);
            if (getTables)
                return tables;
            tables.forEach(table => {
                showPrayers({
                    container: btn.docFragment,
                    clearContainerDiv: true,
                    clearRightSideBar: true,
                    table: table,
                    languages: getLanguages(table[0][0])
                });
            });
            async function returnTables(index) {
                let service = services[index], clone = [...sequence];
                (function customizeSequence() {
                    replaceXXX(Commentary, (index + 1).toString());
                    replaceXXX(Litany, (index + 1).toString());
                    if (index === 0) {
                        clone.unshift(Prefix.bookOfHours + "Psalm116" + anyDay, Prefix.psalmody + "FourthHos" + anyDay, Prefix.psalmody + "PsalyAdamProsternation&D=$copticFeasts.Pentecoste");
                    }
                    else if (index === 2) {
                        clone.splice(clone.indexOf(Prefix.anchor + 'Agios'), 0, Prefix.hymns + "PentecosteHymn&D=$copticFeasts.PentecosteVespers&C=Title"); //!missing hymn
                        let doxlogies = [
                            Prefix.incenseVespers + "LordKeepUsThisNight",
                            Prefix.commonPrayer + "Agios",
                            Prefix.commonPrayer + "OurFatherWhoArtInHeaven",
                            Prefix.commonPrayer + "InTheNameOfJesusOurLord",
                            Prefix.commonPrayer + "WeSaluteYouMary",
                            Prefix.doxologies + "DawnWatesStMary",
                            Prefix.doxologies + "CelestialBeings",
                            Prefix.doxologies + "Apostles",
                            Prefix.doxologies + "StMarc",
                            Prefix.doxologies + "Pope&",
                            Prefix.doxologies + "EndOfDoxologiesWates",
                            Prefix.commonPrayer + "WeExaltYouStMary",
                            Prefix.commonPrayer + "Creed",
                            Prefix.commonPrayer + "EfnotiNaynan"
                        ];
                        clone.splice(clone.indexOf(Prefix.massCommon + "DiaconResponseWorshipGodInFearAndTrembling"), 0, ...doxlogies.map(el => el + anyDay));
                        let End = [
                            "BlockInTheNameOfOurLord",
                            "BlockIriniPassi",
                            "AbsolutionForTheSon",
                            "KyriElieson3Times"
                        ];
                        clone.push(...End.map(el => Prefix.commonPrayer + el + anyDay));
                        clone.push(Prefix.commonIncense + "LiturgyEnd" + anyDay);
                    }
                    ;
                    function replaceXXX(el, replace) {
                        clone[clone.indexOf(el)] = el.replace('XXX', replace);
                    }
                })();
                let resolved = await Promise.all(clone.map(async (title) => {
                    if (title.startsWith(Prefix.anchor))
                        return await processTitle(title);
                    else
                        return await processTitle(title, true);
                }));
                return resolved.filter(table => table);
                async function processTitle(title, singleTable = false) {
                    if (singleTable) {
                        return findTable(title, getTablesArrayFromTitlePrefix(title)) || undefined;
                    }
                    ;
                    let prop = title.replace(Prefix.anchor, '');
                    if (!service[prop] || prop === 'Gospel')
                        return; //The 'Gospel' property is handeled by the btnAfterShowPrayers() function. We insert the reading in the anchor
                    if (prop === 'StPaul')
                        return await processReference(service[prop], Prefix.stPaul);
                    else if (prop === 'Prophecies')
                        return await processReference(service[prop], Prefix.prophecies);
                    else
                        return processProp(service[prop]);
                    function processProp(prop) {
                        let table = prop.map(t => [Prefix.placeHolder, t]);
                        table.unshift([Prefix.commonPrayer]); //!we add a first row with the title as first element in order to be able to retrieve the prayers array from the title prefix
                        return table;
                    }
                }
                async function processReference(refs, prefix) {
                    return await retrieveReadingTableFromBible([[prefix + 'Prosternation'], [Prefix.readingRef + refs]], getLanguages(prefix));
                }
            }
        }
        function btnAfterShowPrayers(n) {
            let btn = btnProsternation.children[n];
            btnIncenseMorning.afterShowPrayers(btn); //We call this function in order to insert an Expandable for the "God Have Mercy On Us" Diacon response
            if (n === 2)
                adaptConcludingHymn(btn.docFragment);
            else if (n === 0)
                btnMassUnBaptised.afterShowPrayers(btn); //We insert the Book of Hours prayers (as an expandable button)
            (function insertGospel() {
                let gospel = services[n].Gospel;
                let responses = services[n].Responses;
                insertAfterAnchor('Psalm', gospel[0]);
                insertAfterAnchor("Gospel", gospel[1]);
                insertAfterAnchor("PsalmResponse", responses[0], Prefix.psalmResponse);
                insertAfterAnchor("GospelResponse", responses[1], Prefix.gospelResponse);
                async function insertAfterAnchor(title, ref, prefix) {
                    let anchor = findAnchor(title);
                    if (!anchor)
                        return console.log('We did not find the anchor for ', title);
                    let table, langs;
                    prefix ? langs = getLanguages(prefix) : langs = getLanguages(Prefix.gospelMass);
                    if (prefix)
                        table = findTable(title, getTablesArrayFromTitlePrefix(prefix)) || undefined;
                    else
                        table = await retrieveReadingTableFromBible([[Prefix.readingRef + ref]], langs);
                    if (!table)
                        return;
                    insertPrayersAdjacentToExistingElement({
                        tables: [table],
                        position: {
                            el: anchor,
                            beforeOrAfter: 'beforebegin'
                        },
                        container: btn.docFragment,
                        languages: langs
                    });
                    function findAnchor(dataRoot) {
                        return selectElementsByDataSetValue(btn.docFragment, Prefix.anchor + dataRoot + anyDay, undefined, 'root')[0];
                    }
                }
            })();
            scrollToTop();
        }
    },
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
        if (copticReadingsDate === copticFeasts.Pentecoste)
            btnIncenseOffice.children = [btnIncenseMorning, btnProsternation];
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
            ...sequences.Mass.StBasil,
            ...sequences.Mass.CallOfHolySpirit,
            ...sequences.Mass.Litanies,
            ...sequences.Mass.Communion,
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
            let secondReconciliation = findTable(mass[1] + "Reconciliation2" + anyDay, mass[2]);
            if (!secondReconciliation)
                return console.log("Didn't find reconciliation");
            let htmlBtn = addExpandablePrayer({
                insertion: selectElementsByDataSetValue(btnDocFragment, mass[1] + "Reconciliation" + anyDay)[0].nextElementSibling, //We insert the button after the title
                btnID: "secondStBasilReconciliation",
                label: {
                    FR: secondReconciliation[0][2],
                    AR: secondReconciliation[0][4],
                },
                prayers: [secondReconciliation],
                languages: btn.languages,
            })[0];
            htmlBtn.addEventListener("click", () => {
                let dataGroup = mass[1] + "Reconciliation" + anyDay;
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
            select = selectElementsByDataSetValue(btnDocFragment, "Reconciliation" + anyDay, { includes: true });
            redirectToAnotherMass([...redirectToList], {
                beforeOrAfter: "afterend",
                el: select[0],
            }, "RedirectionToReconciliation");
            //Adding 2 buttons to redirect to the other masses at the Anaphora prayer After "By the intercession of the Virgin St. Mary"
            select = selectElementsByDataSetValue(btnDocFragment, Prefix.massCommon + "SpasmosAdamShort" + anyDay, { endsWith: true });
            redirectToAnotherMass([...redirectToList], {
                beforeOrAfter: "afterend",
                el: select[select.length - 1],
            }, "RedirectionToAnaphora");
            //Adding 2 buttons to redirect to the other masses before Agios
            select = selectElementsByDataSetValue(btnDocFragment, [[btnMassStBasil, Prefix.massStBasil], [btnMassStGregory, Prefix.massStGregory], [btnMassStCyril, Prefix.massStCyril]].find(a => a[0] === btn)[1] + "Agios" + anyDay);
            redirectToAnotherMass([...redirectToList], {
                beforeOrAfter: "afterend",
                el: select[0].previousElementSibling,
            }, "RedirectionToAgios");
            //Adding 2 buttons to redirect to the other masses before the Call upon the Holy Spirit
            select = selectElementsByDataSetValue(btnDocFragment, Prefix.massCommon +
                "AssemblyResponseAmenAmenAmenWeProclaimYourDeath" + anyDay);
            redirectToAnotherMass([...redirectToList], {
                beforeOrAfter: "afterend",
                el: select[0],
            }, "RedirectionToLitanies");
            //Adding 2 buttons to redirect to the other masses before the Fraction Introduction
            select = selectElementsByDataSetValue(btnDocFragment, "FractionIntroduction" + anyDay, { includes: true });
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
            let anchorTitle = Prefix.massCommon + "DiaconResponseKissEachOther" + anyDay;
            insertSpasmos(spasmosTitle, selectElementsByDataSetValue(btnDocFragment, anchorTitle)[0]);
            anchorTitle = Prefix.massCommon + "SpasmosWatesShort" + anyDay;
            //Insert Wates Spasmoses
            insertSpasmos(spasmosTitle.replace("Adam", "Wates"), selectElementsByDataSetValue(btnDocFragment, anchorTitle)[0], true);
        })();
        function insertSpasmos(spasmosTitle, anchor, hideAnchor = false) {
            if (!anchor)
                return console.log('anhcor is not valid');
            let spasmos = MassCommonPrayersArray.find((tbl) => tbl[0][0]?.startsWith(spasmosTitle) &&
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
            let anchor = selectElementsByDataSetValue(btnDocFragment, Prefix.massCommon + "LitaniesIntroduction" + anyDay)[0];
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
                    .find(child => child.id && child.id.startsWith(Prefix.anchor + "Fraction" + anyDay)),
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
            let psalm150 = selectElementsByDataSetValue(btnDocFragment, Prefix.massCommon + "CommunionPsalm150" + anyDay);
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
            ...sequences.Mass.StCyril,
            ...[
                Prefix.massCommon +
                    "AgiosPart3" + anyDay,
                Prefix.commonPrayer + "KyrieElieson" + anyDay,
                Prefix.commonPrayer + "BlockIriniPassi" + anyDay,
                Prefix.anchor + "Fraction" + anyDay,
                Prefix.commonPrayer + "OurFatherWhoArtInHeaven" + anyDay,
                Prefix.massCommon + "Confession" + anyDay,
            ],
            ...sequences.Mass.Communion,
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
            ...sequences.Mass.StGregory,
            ...sequences.Mass.CallOfHolySpirit,
            ...sequences.Mass.Litanies,
            ...sequences.Mass.Communion,
        ];
        //removing irrelevant prayers from the array
        btnMassStGregory.prayersSequence.splice(btnMassStGregory.prayersSequence.indexOf(Prefix.massCommon + "CallOfTheHolySpiritPart1" + anyDay), 9);
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
    onClick: async () => await btnGospelMass.onClick(Prefix.gospelVespers),
});
const btnGospelMorning = new Button({
    btnID: "btnReadingsGospelIncenseDawn",
    label: {
        AR: "إنجيل باكر",
        FR: "Évangile du Matin",
        EN: "Morning Gospel",
    },
    showPrayers: true,
    onClick: async () => await btnGospelMass.onClick(Prefix.gospelMorning),
});
const btnGospelNight = new Button({
    btnID: "btnReadingsGospelNight",
    label: {
        AR: "إنجيل المساء",
        FR: "Évangile du Soir",
        EN: "Night Gospel",
    },
    showPrayers: true,
    onClick: async () => await btnGospelMass.onClick(Prefix.gospelNight)
});
const btnGospelMass = new Button({
    btnID: "btnReadingsGospelMass",
    label: {
        AR: "إنجيل القداس",
        FR: "Évangile de la messe",
        EN: "Mass Gospel",
    },
    showPrayers: true,
    onClick: async (gospelPrefix = Prefix.gospelMass) => {
        let prayersArray = PrayersArraysKeys.find((entry) => entry[0] === gospelPrefix);
        if (!prayersArray)
            return console.log("Didn\'t find the prayersArray");
        containerDiv.innerHTML = "";
        await getGospelReadingAndResponses({
            liturgy: gospelPrefix,
            prayersArray: prayersArray[2](),
            languages: getLanguages(prayersArray[0]),
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
                    onClick: () => btnHour.prayersSequence = [...sequences.HolyWeek.PassOver],
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
                                            return row.filter(el => row?.indexOf(el) !== readingsLangs.indexOf('COP') + 1);
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
                                .forEach(async (reading) => {
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
                                reading.table = reading?.table?.filter(row => row); //We remove any undefined elements in the table;
                                reading.table = await retrieveReadingTableFromBible(reading.table, languages);
                                reading.table[0] = insertTableTitleRow();
                                if (reading === readings.Prophecies)
                                    reading.table = await processPropheciesTitles(reading.table); //!This must come before the text is retrieved from the bible because the references rows are replaced by the text and will be lost
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
                                async function processPropheciesTitles(table) {
                                    return table;
                                    if (!table[0][0]?.includes('Prophecies&D='))
                                        return table;
                                    let references = [], index;
                                    for (let i = 1; i < table.length; i++) {
                                        if (!table[i][0]?.includes('&C=Title'))
                                            continue;
                                        index = i;
                                        i += 1;
                                        while (!table[i][0]?.startsWith(Prefix.readingRef))
                                            i += 1;
                                        while (table[i][0]?.startsWith(Prefix.readingRef)) {
                                            references.push(table[i][0]?.split('&C=')[0]);
                                            if (i === table.length - 1)
                                                break;
                                            i += 1;
                                        }
                                        if (references.length < 1)
                                            continue;
                                        table[index] = [Prefix.same + "&C=Title", ...await Promise.all(languages.map(async (lang) => await getReferencesTitle(lang)))];
                                        i -= 1;
                                        references = [];
                                    }
                                    return table;
                                    async function getReferencesTitle(lang) {
                                        if (![defaultLanguage, foreingLanguage].includes(lang))
                                            return '';
                                        let reference1 = references[0].split(Prefix.readingRef)[1].split(':'); //This should yield a 3 elements array ["book name", "chapter number", "verses range"] like ["GEN", "12", "3-7"]
                                        let bookList = await getBibleBooksList(lang);
                                        let book = bookList?.find(b => b.id === reference1[0]);
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
                                prayersSequence: sequences.HolyWeek.Lakan,
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
                                anchor = selectElementsByDataSetValue(btn.docFragment, Prefix.anchor + "Readings" + anyDay);
                                if (anchor.length < 1)
                                    return console.log('Didn\'t find the anchor for St. Paul Reading');
                                reading = findTable(Prefix.HolyWeek + '&D=GL55', ReadingsArrays.StPaulArrayFR) || undefined; //!Caution: the St. Paul reading for the Lakan is exceptionally prefixed with Prefix.HolyWeek not with Prefix.stPaul in order to distinguish it from the St. Paul reading of the Mass the same day
                                if (!reading)
                                    return console.log('Didn\'t find the St. Paul Reading');
                                showPrayers({
                                    table: reading,
                                    languages: getLanguages(Prefix.stPaul),
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
                                anchor = selectElementsByDataSetValue(btn.docFragment, Prefix.anchor + "GospelLitany" + anyDay);
                                (function insertGospelReading() {
                                    getGospelReadingAndResponses({
                                        liturgy: Prefix.gospelMorning,
                                        prayersArray: ReadingsArrays.GospelMorningArrayFR,
                                        languages: getLanguages(Prefix.gospelMorning),
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
    onClick: (refs) => {
        if (refs) {
            chapterBtnOnClick({
                chapterNumber: refs.chapterNumber,
                bookID: refs.bookID
            });
            return;
        }
        let newTestament = new Button({
            btnID: 'newTestament',
            label: {
                AR: 'العهد الجديد',
                FR: 'Nouveau Testament',
                EN: 'New Testament'
            },
            onClick: async () => newTestament.children = await getBooksButtons(false) //!We need the children to be added when the button is clicked not when it is created because the Bibles are not defined at this stage
        });
        let oldTestament = new Button({
            btnID: 'oldTestament',
            label: {
                AR: 'العهد القديم',
                FR: 'Ancien Testament',
                EN: 'Old Testament'
            },
            onClick: async () => oldTestament.children = await getBooksButtons(true) //!We need the children to be added when the button is clicked not when it is created because the Bibles are not defined at this stage
        });
        btnBible.children = [oldTestament, newTestament];
        async function getBooksButtons(old) {
            let booksListDefault, booksListForeing;
            booksListDefault = await getBibleBooksList(defaultLanguage);
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
                    label[defaultLanguage] = getChapterLabel() + number;
                    return new Button({
                        btnID: 'btnChapter' + number,
                        label: label,
                        onClick: () => chapterBtnOnClick({
                            bookID: book[0].id,
                            chapterNumber: number
                        })
                    });
                });
                return chaptersButtons;
            }
        }
        function chapterBtnOnClick(refs) {
            if (!refs)
                return;
            let languages = [defaultLanguage];
            if (foreingLanguage)
                languages?.push(foreingLanguage);
            (async function showChapterText() {
                let table = [
                    [
                        'Bible_' + refs.bookID + refs.chapterNumber + '&C=Title',
                    ],
                ];
                let list, book;
                const retrievedText = await Promise.all(languages.map(async (lang) => {
                    list = await getBibleBooksList(lang);
                    book = list?.find(b => b.id === refs.bookID);
                    if (!book)
                        return;
                    table[0]?.push(getTitle(book, lang, refs.chapterNumber));
                    return getBibleChapterText({
                        bible: await getBibleVersion(lang),
                        bookID: refs.bookID,
                        chapterNumber: refs.chapterNumber
                    }) || '';
                }));
                if (!retrievedText || retrievedText.join() === '')
                    return;
                let matched = matchPargraphsSplitting(retrievedText, languages, 0, 'NoActor');
                if (!matched)
                    return;
                table.push(...matched);
                showPrayers({
                    table: table,
                    languages: languages,
                    container: containerDiv,
                    clearContainerDiv: true,
                    clearRightSideBar: true,
                });
            })();
            updateBookmark({ bookID: refs.bookID, chapterNumber: refs.chapterNumber });
            (function appendNextAndPrevBtns() {
                let btnsDiv = document.createElement('div');
                containerDiv.append(btnsDiv);
                let right = '⇒', left = '⇐';
                let next = new Button({
                    btnID: 'btnNext',
                    label: {
                        AR: right,
                        FR: right,
                        EN: right,
                    },
                    onClick: () => nextOnClick(true)
                });
                let prev = new Button({
                    btnID: 'btnPrev',
                    label: {
                        AR: left,
                        FR: left,
                        EN: left,
                    },
                    onClick: () => nextOnClick(false)
                });
                if (defaultLanguage === 'AR') {
                    prev.onClick = () => nextOnClick(true);
                    next.onClick = () => nextOnClick(false);
                }
                [prev, next].forEach(btn => {
                    createHtmlBtn({
                        btn: btn,
                        btnsContainer: btnsDiv,
                        btnClass: inlineBtnClass
                    });
                });
                btnsDiv.classList.add(inlineBtnsContainerClass);
                // floatOnTopOrBottom(btnsDiv, false, "0px");
                btnsDiv.style.gridTemplateColumns = setGridColumnsOrRowsNumber(btnsDiv);
                async function nextOnClick(next, id = refs.bookID) {
                    let books = await getBibleBooksList(defaultLanguage), book = books?.find(b => b.id === id), chaptersList = book.chaptersList;
                    (function nextChapter() {
                        if (!next)
                            return;
                        if (chaptersList.indexOf(refs.chapterNumber) === chaptersList.length - 1) {
                            //We will move to the first chapter in the  next book
                            book = books[books.indexOf(book) + 1] || books[0]; //If we have already reached the last book, we move the the first book
                            refs.chapterNumber = book.chaptersList[0];
                            return;
                        }
                        refs.chapterNumber = book.chaptersList[book.chaptersList.indexOf(refs.chapterNumber) + 1];
                    })();
                    (function previousChapter() {
                        if (next)
                            return;
                        if (chaptersList.indexOf(refs.chapterNumber) === 0) {
                            //We will move to the last chapter in the previous book
                            book = books[books.indexOf(book) - 1] || books[books.length - 1]; //If we have already reached the first book, we move to the last book
                            refs.chapterNumber = book.chaptersList[book.chaptersList.length - 1];
                            return;
                        }
                        refs.chapterNumber = book.chaptersList[book.chaptersList.indexOf(refs.chapterNumber) - 1];
                    })();
                    chapterBtnOnClick({
                        bookID: book.id,
                        chapterNumber: refs.chapterNumber
                    });
                    updateBookmark({ bookID: book.id, chapterNumber: refs.chapterNumber });
                }
            })();
            function updateBookmark(refs) {
                bookMarks[0] = [refs.bookID, refs.chapterNumber]; //We add the chapter to the bookMarks
                localStorage.bookMarks = JSON.stringify(bookMarks); //We save the bookMarks to the local storage
            }
            scrollToTop();
            return true;
            function getTitle(book, lang, chapterNumber) {
                if (!book)
                    return '';
                return book.human_long + '\n' + getChapterLabel() + chapterNumber;
            }
        }
        function getChapterLabel() {
            let chapterLabel = {
                AR: 'إصحاح ',
                FR: 'Chapître ',
                EN: 'Chapter '
            };
            return chapterLabel[defaultLanguage] || '';
        }
    },
    afterShowPrayers: () => {
        if (!localStorage.bookMarks)
            return;
        let lastReading = JSON.parse(localStorage.bookMarks)[0];
        if (!lastReading)
            return lastReading = null;
        //We create a fake button simulating the action of chapters' buttons of each book
        let btnLabel = {
            AR: 'آخر قراءة',
            FR: 'Dernier chapitre lu',
            EN: 'Last Reading'
        };
        let btn = new Button({
            btnID: 'lastReading',
            label: btnLabel,
            cssClass: 'btnBookMark',
            onClick: () => {
                btnBible.onClick({ bookID: lastReading[0], chapterNumber: lastReading[1] });
            },
        });
        (function addSideBarShortcut() {
            let bookMarkDiv = document.createElement("div"); //this is just a container
            bookMarkDiv.role = "button";
            bookMarkDiv.id = 'bookmarkLast';
            bookMarkDiv.classList.add("sideTitle");
            sideBarTitlesContainer.appendChild(bookMarkDiv);
            let bookmark = document.createElement("a");
            bookMarkDiv.appendChild(bookmark);
            bookmark.innerText = btnLabel[defaultLanguage];
            bookMarkDiv.addEventListener("click", () => showChildButtonsOrPrayers(btn));
        })();
        (function addMainPageBtn() {
            let btnDiv = document.createElement('div');
            btnDiv.classList.add(inlineBtnsContainerClass);
            containerDiv.prepend(btnDiv);
            createHtmlBtn({
                btn: btn,
                btnsContainer: btnDiv,
                btnClass: btn.cssClass,
                clear: false,
            });
            btnDiv = null;
            btnLabel = null;
        })();
    }
});
/**
 * Adapts the Concluding Hymn of any Liturgy to the Season
 */
function adaptConcludingHymn(container) {
    let anchor = selectElementsByDataSetValue(container, Prefix.anchor + 'ConcludingHymn' + anyDay, undefined, 'root')[0];
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
                selectElementsByDataSetValue(container, Prefix.commonPrayer + 'ConcludingHymn' + anyDay, undefined, 'root')[1].remove(); //We remove the first paragraph ('Amin Allelujah')
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
        tbl = findTable(Prefix.commonPrayer + "ConcludingHymnBishop" + anyDay, CommonPrayersArray) || undefined;
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
 * @param {boolean} top - true = top, false = bottom
 * @param {string} value - the value of the floating
 */
function floatOnTopOrBottom(btnContainer, top, value) {
    btnContainer.style.position = "fixed";
    top ? btnContainer.style.top = value : btnContainer.style.bottom = value;
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
async function findMassReadingOtherThanGospel(readingPrefix, readingArray, position, container = containerDiv, clearContainer = false, readingDate) {
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
    let languages = getLanguages(readingPrefix);
    let tables = new Array(), tbl = [];
    reading.forEach(row => {
        if (['Title', 'SubTitle'].find(title => row[0].endsWith('&C=' + title)) && reading.indexOf(row) > 0) {
            //This is not the first table to added to tables
            tables.push(structuredClone(tbl));
            tbl = [];
            tbl.push(row);
            return;
        }
        tbl.push(row);
        if (reading.indexOf(row) === reading.length - 1)
            tables.push(structuredClone(tbl));
    });
    let retrievedText = await Promise.all(tables.map(async (table) => await retrieveReadingTableFromBible(table, languages)));
    tables = null;
    tbl = null;
    return insertPrayersAdjacentToExistingElement({
        tables: retrievedText,
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
async function retrieveReadingTableFromBible(reading, langs) {
    if (!reading)
        return;
    langs = langs?.filter(lang => lang);
    let rowsWithReferences = reading
        .filter(row => row?.find(el => el?.startsWith(Prefix.readingRef))); //We check of any of the table's rows has an element starting with Prefix.readingRef: this means this element is a reference for a text that we need to retrieve from the relevant bible
    if (rowsWithReferences.length < 1)
        return reading; //It means that there are no rows with references
    //reading = structuredClone(reading);//We create a copy of the table;
    let splitted;
    let ready = new Set(); //this set will contain arrays of ["bookID:chapterNumber:lang", chapter] for each chapter treated. If the chapter is found, we will not retreive it again.
    const retrieved = [];
    for (const row of reading) {
        //! We can't use forEach because forEach doesn't await for async functions to resolve
        if (rowsWithReferences.includes(row))
            retrieved.push(await referenceTitleRow(row), ...await processReadingReference(row));
        else if (reading.indexOf(row) === 0)
            retrieved.push(row);
        else if (['&C=Title', '&C=SubTitle'].map(c => row[0].includes(c)).includes(true)
            && (rowsWithReferences.includes(reading[reading.indexOf(row) + 1])
                ||
                    reading[reading.indexOf(row) + 1].includes('&C=ReadingIntro')))
            retrieved.push(await referenceTitleRow(row));
        else
            retrieved.push(row);
    }
    return retrieved;
    async function processReadingReference(row) {
        if (!row)
            return [];
        let ref, actor;
        const retrieved = [];
        for (let i = 0; i < row.length; i++) {
            if (!row[i].startsWith(Prefix.readingRef)) {
                retrieved.push(row[i]);
                continue;
            }
            ;
            ref = row[i]
                .replaceAll(' ', '') //We remove all spaces in the reference in order to avoid errors.
                .replaceAll(Prefix.readingRef, '');
            splitted = splitTitle(ref);
            actor = splitted[1] || 'NoActor';
            if (row.length === 1)
                await Promise.all(langs.map(async (lang) => 
                //!We can't use forEach because forEach doesn't await for async functions to resolve. It throughs a promise
                retrieved.push(await retrieveVerses(lang, splitted[0])))); //The row contains only the rference with no other text
            else if (row.length === langs.length + 1)
                retrieved.push(await retrieveVerses(langs[i - 1], splitted[0])); //The row's first element is a title, while the remaining elements correspond to the languages in langs[]
            else
                retrieved.push(await retrieveVerses(langs[i], splitted[0])); //the row contains as many elements as the languages in langs[]
        }
        if (ref.startsWith(Prefix.readingRef + 'PSA:'))
            return [retrieved]; //We do not split the psalm paragraphs into different rows rows
        else
            return matchPargraphsSplitting(retrieved, langs, row.length - langs.length, actor) || [];
    }
    async function retrieveVerses(lang, ref) {
        if (!lang)
            return;
        if (![defaultLanguage, foreingLanguage].includes(lang))
            return '';
        let parts, refs, verses;
        refs = ref.split('/');
        let text = await Promise.all(refs.map(async (ref) => {
            parts = ref.split(':'); //We should get an array of 3 elements [bookID, chapterNumber, verses], eg: ['GEN', '13', '3-7']; 
            if (parts.length === 2 && refs.indexOf(ref) > 0)
                parts.unshift(refs[0].split(':')[0]);
            if (parts.length < 3)
                return '';
            verses = await Promise.all(parts[2]
                .split('/')
                .map(async (versesRange) => await retrieveVersesText(lang, parts[0], parts[1], versesRange) || ''));
            if (parts[0] === "PSA")
                return verses.join(' '); //We don't split the psalm into paragraphs
            return verses.join('\n');
        }));
        return text.join('\n');
    }
    /**
     * Returns a title row (string[]) built from a reference
     * @param {string[]} row - the  row that contains the reading reference
     * @returns {string[]} - a row that contains the title of the reading built from the reference
     */
    async function referenceTitleRow(row) {
        let titleRow = [Prefix.same + '&C=Title', ...langs.map(lang => '')];
        let ref = row.find(el => el.startsWith(Prefix.readingRef));
        if (!ref)
            return titleRow;
        ref =
            ref.replaceAll(' ', '')
                .replace(Prefix.readingRef, '')
                .split('&C=')[0];
        let bookID = ref.split(':')[0];
        let book, bible;
        await Promise.all(langs.map(async (lang) => {
            //!We can't use forEach because forEach doesn't await for async functions to resolve. Instead it throughs an error
            if (![defaultLanguage, foreingLanguage].includes(lang))
                return;
            bible = await getBibleVersion(lang, false);
            book = bible?.find(book => book[0].id === bookID);
            if (!book)
                return;
            ref = ref.replace('End', book[1]
                .find(chapter => book[1].indexOf(chapter) === Number(ref.split(':')[1]) - 1)
                .filter(verse => verse?.length === 2)
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
        }));
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
    async function retrieveVersesText(lang, bookID, chapterNumber, verses) {
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
        let Bible = await getBibleVersion(lang, false);
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
    let paragraphs = retrieved[langs.indexOf(defaultLanguage) + add]?.split('\n');
    if (!paragraphs)
        return;
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
        args.languages = getLanguages(PrayersArraysKeys.find(array => array[2]() === args.prayersArray)[0]);
    let baseDataRoot = Prefix.anchor + "XXX" + anyDay;
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
        let tbl = findTable(Prefix.commonPrayer + "MaroEtshasf" + anyDay, CommonPrayersArray) || undefined;
        if (!tbl)
            return console.log('Didn\'t find a relevant table');
        addExpandablePrayer({
            prayers: [tbl],
            insertion: setInsertionPoint("Gospel&D=")?.previousElementSibling,
            btnID: 'PopePsalm',
            languages: prayersLanguages,
            label: {
                AR: 'في حضور البطرك أو أحد الأساقفة',
                FR: 'En présence du Pape ou d\'un évêque',
            },
        });
    })();
    await insertPsalmAndGospelReadings();
    (function insertPsalmAndGospelResponses() {
        if (!args.isMass)
            return; //If we are not calling the function with a Mass or a liturgy (Unbpaptized Mass, or Incense Dawn/Vespers) context, we will not insert the Gospel and Psalm responses
        insertResponse(3, setInsertionPoint('Gospel&D=')?.nextElementSibling, 'beforebegin'); //Inserting Gospel Response
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
    /**
   * Appends the gospel and psalm readings before gospelInsertionPoint(which is an html element)
   */
    async function insertPsalmAndGospelReadings() {
        if (!args.isMass) {
            //If we are not showing the gospel reading in a Mass context (i.e., if the user is clicking on the 'Day Readings Button' to show the readings of the day). We will create a  div container  to which we will append the reading text. We will append the container div as first element of containerDiv
            containerDiv.append(document.createElement("div"));
            gospel = gospel?.filter(tbl => tbl[0][0]?.includes('Gospel&D='));
        }
        await Promise.all(gospel
            .map(async (table) => {
            //!We can't user forEach because forEach dosen't await for promises to resolve
            //gospel[] should include 2 tables: the first table is the psalm and its title is like '....Psalm&D=...'. The 2nd is the gospel: its title is like '....Gospel&D=...'.
            table = await retrieveReadingTableFromBible(table, args.languages);
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
                if (table[0][0]?.includes('Gospel&D='))
                    return [...table, getReadingEnd(ReadingsIntrosAndEnds.gospelEnd)]; //We return a copy of the table not the original table in order to avoid modifying the original table.
                else if (table[0][0]?.includes('Psalm&D='))
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
        }));
    }
    ;
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
            Prefix.psalmResponse + "" + anyDay, //This is its default value
            liturgy + "Psalm&D=",
            liturgy + "Gospel&D=",
            Prefix.gospelResponse + "" + anyDay, //This is its default value
        ]; //This is the generic sequence for the prayers related to the lecture of the gospel at any liturgy (mass, incense office, etc.). The OnClick function triggered by the liturgy, adds the dates of the readings and of the psalm and gospel responses
        if (!isMass)
            return prayersSequence; //If we are not calling the function within a mass/incense liturgy, we will not need to set the Psalm and Gospel Responses, we will return the prayersSequence array
        //setting the psalm and gospel responses
        (function setPsalmAndGospelResponses() {
            if (Number(copticDay) === 29 && [4, 5, 6].includes(Number(copticMonth)))
                return; //we are on the 29th of any coptic month except Kiahk (because the 29th of kiahk is the nativity feast), and Touba and Amshir (they are excluded because they precede the annonciation)
            let PsalmAndGospelResponses = PsalmAndGospelPrayersArray.filter((table) => isMultiDatedTitleMatching(table[0][0], [copticDate, Season]));
            let psalmResponse = PsalmAndGospelResponses.filter((table) => table[0][0]?.startsWith(Prefix.psalmResponse));
            let gospelResponse = PsalmAndGospelResponses.filter((table) => table[0][0]?.startsWith(Prefix.gospelResponse));
            if (Season === Seasons.GreatLent) {
                [0, 6].includes(weekDay)
                    ? (gospelResponse = [
                        gospelResponse.find((table) => table[0][0]?.includes("Sundays&D=")),
                    ])
                    : (gospelResponse = gospelResponse =
                        [gospelResponse.find((table) => table[0][0]?.includes("Week&D="))]);
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
                    prefix += copticReadingsDate?.split(Season)[1]; //There are different responses for the Dawn Gospel and the Mass Gospel for each day of the Jonah Fast. We will  add the number of the day of Jonah Fast: eg.: "Mass1&D=Jonah1&C=Title" (for 1st day of the Jonah Fast), Dawn2&D=Jonah2&C=Title", etc.
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
                    gospelResponse.find((table) => table[0][0]?.includes(prefix + "&D=")),
                ];
            }
            if (psalmResponse?.length > 0 && psalmResponse[0]?.length > 0)
                prayersSequence[0] = splitTitle(psalmResponse[0][0][0])[0];
            if (gospelResponse?.length > 0 && gospelResponse[0]?.length > 0)
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
    let gospel = readingsArray?.filter((r) => {
        splitTitle(r[0][0][0])[0] === btn?.prayersSequence[1] ||
            splitTitle(r[0][0][0])[0] === btn?.prayersSequence[2];
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
    if (!tableTitle?.includes("&D="))
        return false; //This means that the title does not specify any date for the prayer.
    tableTitle = splitTitle(tableTitle)[0].split("&D=")[1];
    return tableTitle
        .split("||")
        .map((date) => coptDate?.map(copt => dateIsRelevant(date, copt))?.includes(true))
        .includes(true);
}
/**
 * Checks if the date argument matches the copticDate or the Season
 * @param {string} date - the date string that we want to check if it matches the copticDate or the Season
 * @param {string} coptDate  - the copticDate (or the Season) with which we want the compare the date
 * @returns  {boolean}
 */
function dateIsRelevant(date, coptDate = copticDate) {
    if (date?.startsWith("$"))
        date = eval(date.replace("$", ""));
    else if (/\d{2}0{2}/.test(date))
        date = date?.replace('00', copticMonth);
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
            let array;
            let langs = args.languages;
            args.prayers
                .map(table => {
                if (!args.languages)
                    langs = getLanguages(table[0][0]);
                return showPrayers({
                    table: table,
                    languages: langs,
                    position: expandableContainer,
                    container: expandableContainer,
                    clearContainerDiv: false,
                    clearRightSideBar: false
                });
            })
                .forEach((htmlTable) => setCSS(htmlTable));
            array = null;
            langs = null;
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
        if (!verses)
            return;
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
        return verse[0]; //We return the new paragraph mark
    return ('Sup_' + verse[0] + '_Sup' + verse[1])
        .replaceAll('#', '')
        .replaceAll('[', '')
        .replaceAll(']', '')
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
async function getBibleVersion(lang, msg = true) {
    if (!lang)
        return;
    if (Bibles[lang][0])
        return Bibles[lang][0];
    let msg1 = { AR: 'تم تحميل الإنجيل، يمكنم الآن إعادة المحاولة.', FR: 'La Bible est prête mainteant. Vous pouvez réessayer', EN: 'The Bible is now available. Please try again' };
    let msg2 = {
        AR: 'جاري تحميل الكتاب المقدس. سوف تستغرق العملية ثواني قليلة. سوف يتم إخطارك حين ينتهي التحميل.',
        FR: 'La Bible est encours de téléchargement. Cela devrait prendre quelques secondes. Vous allez être notifié lorsque la bible sera disponible.',
        EN: 'The Bible has not been loaded yet. It should take few seconds. You will be notified when done'
    };
    if (msg)
        alert(msg2[lang]);
    msg ? reloadScripts(['Bible' + lang], undefined, undefined, msg1[lang]) : reloadScripts(['Bible' + lang]);
    return new Promise((resolve) => {
        setTimeout(() => {
            if (Bibles[lang][0]) {
                resolve(Bibles[lang][0]);
            }
            ;
        }, 500);
    });
}
async function getBibleBooksList(lang) {
    if (!lang)
        return;
    if (Bibles[lang][1])
        return Bibles[lang][1];
    let bible = await getBibleVersion(lang, false);
    Bibles[lang][1] = bible?.map((book) => book[0]);
    return Bibles[lang][1];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVjbGFyZUJ1dHRvbnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9tb2R1bGVzL0RlY2xhcmVCdXR0b25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sTUFBTTtJQWlCVixZQUFZLEdBQWU7UUFYbkIscUJBQWdCLEdBQVcsRUFBRSxDQUFDO1FBWXBDLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQztRQUN4QixJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUM7UUFDeEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUMsU0FBUyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQztRQUM5QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsR0FBRyxDQUFDLGVBQWUsQ0FBQztRQUM1QyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsR0FBRyxDQUFDLGVBQWUsQ0FBQztRQUM1QyxJQUFJLENBQUMsYUFBYSxHQUFHLEdBQUcsQ0FBQyxZQUFZLENBQUM7UUFDdEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUMsU0FBUyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQztRQUM1QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsR0FBRyxDQUFDLGdCQUFnQixDQUFDO1FBQzlDLElBQUksQ0FBQyxZQUFZLEdBQUcsR0FBRyxDQUFDLFdBQVcsQ0FBQztRQUNwQyxJQUFJLENBQUMsWUFBWSxHQUFHLEdBQUcsQ0FBQyxXQUFXLENBQUM7UUFDcEMsR0FBRyxDQUFDLFFBQVE7WUFDVixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUM7WUFDakMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBQ0QsU0FB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