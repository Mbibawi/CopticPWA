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
        ];
        if (Season === Seasons.HolyWeek)
            btnMainMenu.children = [btnHolyWeek(), btnBookOfHours];
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
    label: { AR: "القداسات", FR: "Messes" },
    onClick: (returnBtnChildren = false) => {
        btnMass.children = [btnIncenseDawn, btnMassUnBaptised, btnMassBaptised];
        if (returnBtnChildren)
            return btnMass.children;
    },
});
const btnIncenseOffice = new Button({
    btnID: "btnIncenseOffice",
    label: {
        AR: "رفع بخور باكر أو عشية",
        FR: "Encens Matin et Vêpres",
    },
    onClick: (returnBtnChildren = false) => {
        //setting the children of the btnIncenseOffice. This must be done by the onClick() in order to reset them each time the button is clicked
        btnIncenseOffice.children = [btnIncenseDawn, btnIncenseVespers];
        //show or hide the PropheciesDawn button if we are in the Great Lent or JonahFast:
        //We will remove the Vespers Button during if we are during the Great Lent or the Jonah Fast, and we are not a Saturday
        if ([Seasons.GreatLent, Seasons.JonahFast].includes(Season) &&
            weekDay !== 6)
            btnIncenseOffice.children = btnIncenseOffice.children.filter((btn) => btn !== btnIncenseVespers);
        if (returnBtnChildren)
            return btnIncenseOffice.children;
    },
});
const btnIncenseDawn = new Button({
    btnID: "btnIncenseDawn",
    label: {
        AR: "بُخُورِ بَاكِرِ",
        FR: "Encens du Matin",
    },
    showPrayers: true,
    languages: [...prayersLanguages],
    docFragment: new DocumentFragment(),
    onClick: () => {
        btnIncenseDawn.prayersSequence = [...IncensePrayersSequence].filter((title) => !title.startsWith(Prefix.incenseVespers)); //We will remove all the Incense Vespers titles from the prayersSequence Array
        if (weekDay === 6)
            //If we are a Saturday, we pray only the 'Departed Litany', we will hence remove the 'Sick Litany' and the 'Travellers Litany'
            btnIncenseDawn.prayersSequence.splice(btnIncenseDawn.prayersSequence.indexOf(Prefix.incenseDawn + "SickPrayer&D=$copticFeasts.AnyDay"), 3, //We remove the SickPrayer, the TravelersParayer and the Oblations Prayer
            Prefix.incenseVespers + "DepartedPrayer&D=$copticFeasts.AnyDay");
        else if (weekDay === 0 || lordFeasts.includes(copticDate))
            //If we are a Sunday or the day is a Lord's Feast, or the oblation is present, we remove the 'Travellers Litany' and keep the 'Sick Litany' and the 'Oblation Litany'
            btnIncenseDawn.prayersSequence = btnIncenseDawn.prayersSequence.filter((tbl) => !tbl[0][0].startsWith(Prefix.incenseDawn + "TravelersPrayer&D=$copticFeasts.AnyDay"));
        scrollToTop();
        return btnIncenseDawn.prayersSequence;
    },
    afterShowPrayers: async (btn = btnIncenseDawn, gospelPrefix = Prefix.gospelDawn, gospelArray = ReadingsArrays.GospelDawnArrayFR) => {
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
                    AR: godHaveMercy[1][2],
                    FR: godHaveMercy[1][1], //this is the French text of the label
                },
                prayers: [godHaveMercy.slice(1, 4)],
                languages: btnMassUnBaptised.languages,
                dataGroup: dataRoot,
            });
        })();
        (async function addGreatLentPrayers() {
            if (btn.btnID !== btnIncenseDawn.btnID)
                return;
            if (![Seasons.GreatLent, Seasons.JonahFast].includes(Season))
                return;
            if (weekDay > 0 && weekDay < 6) {
                console.log("we are not a sunday");
                //We are neither a Saturday nor a Sunday, we will hence display the Prophecies dawn buton
                (function showPropheciesDawnBtn() {
                    if (Season !== Seasons.GreatLent)
                        return;
                    //If we are during any day of the week, we will add the Prophecies readings to the children of the button
                    if (btnIncenseDawn.children.indexOf(btnReadingsPropheciesDawn) < 0)
                        btnIncenseDawn.children.unshift(btnReadingsPropheciesDawn);
                })();
                (async function insertEklonominTaghonata() {
                    let efnotiNaynan = selectElementsByDataSetValue(btnDocFragment, Prefix.commonPrayer + "EfnotiNaynan&D=$copticFeasts.AnyDay", undefined, 'group');
                    let insertion = efnotiNaynan[efnotiNaynan.length - 1].nextSibling; //This is the end of the efnotiNaynan
                    let godHaveMercy = findTable(Prefix.incenseDawn + "GodHaveMercyOnUs&D=$Seasons.GreatLent", IncensePrayersArray);
                    if (!godHaveMercy)
                        return console.log("Didn't find God Have Mercy for Great Lent");
                    insertPrayersAdjacentToExistingElement({
                        tables: [godHaveMercy],
                        languages: prayersLanguages,
                        position: { beforeOrAfter: "beforebegin", el: insertion },
                        container: btnDocFragment,
                    });
                    //We will remove all the refrains except the 1st one
                    let refrains = selectElementsByDataSetValue(btnDocFragment, Prefix.incenseDawn + "GodHaveMercyOnUsRefrain&D=$Seasons.GreatLent")
                        .filter((htmlRow) => htmlRow.classList.contains("Title"));
                    refrains.forEach((htmlRow) => {
                        if (refrains.indexOf(htmlRow) > 0)
                            htmlRow.remove();
                    });
                })();
            }
            else {
                //If we are Saturday or Sunday, we remove the "Prophecies Dawn" button from the readings' buttons
                if (btnIncenseDawn.children.indexOf(btnReadingsPropheciesDawn) > -1)
                    btnIncenseDawn.children.splice(btnIncenseDawn.children.indexOf(btnReadingsPropheciesDawn), 1);
            }
        })();
        (async function addExpandableBtnForAdamDoxolgies() {
            //We add an expandable button for the Incense Dawn Adam Doxologies
            if (btn !== btnIncenseDawn)
                return;
            if (btnDocFragment.children.length === 0)
                return;
            addExpandablePrayer({
                insertion: btnDocFragment.children[0],
                btnID: "AdamDoxologies",
                label: {
                    AR: "ذكصولوجيات باكر آدام",
                    FR: "Doxologies Adam du Matin",
                },
                prayers: DoxologiesPrayersArray.filter((table) => table[0][0].startsWith(Prefix.doxologies + "AdamDawn")),
                languages: btnIncenseDawn.languages,
            })[1];
        })();
    },
});
const btnIncenseVespers = new Button({
    btnID: "btnIncenseVespers",
    label: {
        AR: "بُخُورِ عَشِيَّةَ",
        FR: "Incense Vespers",
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
    afterShowPrayers: async () => {
        btnIncenseDawn.afterShowPrayers(btnIncenseVespers, Prefix.gospelVespers, ReadingsArrays.GospelVespersArrayFR);
    },
});
const btnMassStCyril = new Button({
    btnID: "btnMassStCyril",
    label: { AR: "كيرلسي", FR: "Saint Cyril", EN: "St Cyril" },
    docFragment: new DocumentFragment(),
    showPrayers: true,
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
                Prefix.massCommon + "FractionPrayerPlaceholder&D=$copticFeasts.AnyDay",
                Prefix.commonPrayer + "OurFatherWhoArtInHeaven&D=$copticFeasts.AnyDay",
                Prefix.massCommon + "Confession&D=$copticFeasts.AnyDay",
            ],
            ...MassPrayersSequences.Communion,
        ];
        return btnMassStCyril.prayersSequence;
    },
    afterShowPrayers: async () => {
        btnMassStBasil.afterShowPrayers(btnMassStCyril);
    },
});
const btnMassStGregory = new Button({
    btnID: "btnMassStGregory",
    label: { AR: "غريغوري", FR: "Saint Gregory" },
    docFragment: new DocumentFragment(),
    showPrayers: true,
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
    afterShowPrayers: async () => {
        btnMassStBasil.afterShowPrayers(btnMassStGregory);
    },
});
const btnMassStBasil = new Button({
    btnID: "btnMassStBasil",
    label: { AR: "باسيلي", FR: "Saint Basil", EN: "St Basil" },
    docFragment: new DocumentFragment(),
    showPrayers: true,
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
    afterShowPrayers: async (btn = btnMassStBasil) => {
        //We create a list of the masses to which we will insert redirection button
        let redirectToList = [
            btnMassStBasil,
            btnMassStGregory,
            btnMassStCyril,
            btnMassStJohn,
        ];
        redirectToList.splice(redirectToList.indexOf(btn), 1); //We remove the btn of the mass from the redirection list
        redirectToList.splice(redirectToList.indexOf(btnMassStJohn), 1); //We remove the mass of st John
        let btnDocFragment = btn.docFragment;
        (function insertStBasilSecondReconciliationBtn() {
            if (btn !== btnMassStBasil)
                return;
            let secondBasilReconciliation = findTable(Prefix.massStBasil + "Reconciliation2&D=$copticFeasts.AnyDay", MassStBasilPrayersArray);
            if (!secondBasilReconciliation)
                return console.log("Didn't find reconciliation");
            let htmlBtn = addExpandablePrayer({
                insertion: selectElementsByDataSetValue(btnDocFragment, Prefix.massStBasil + "Reconciliation&D=$copticFeasts.AnyDay")[0].nextElementSibling,
                btnID: "secondStBasilReconciliation",
                label: {
                    FR: secondBasilReconciliation[0][2],
                    AR: secondBasilReconciliation[0][4],
                },
                prayers: [secondBasilReconciliation],
                languages: btn.languages,
            })[0];
            htmlBtn.addEventListener("click", () => {
                let dataGroup = Prefix.massStBasil + "Reconciliation&D=$copticFeasts.AnyDay";
                selectElementsByDataSetValue(containerDiv, dataGroup, undefined, 'group')
                    .forEach((row) => row.classList.toggle(hidden));
            });
        })();
        (function insertStCyrilSecondReconciliationBtn() {
            if (btn !== btnMassStCyril)
                return;
            let secondCyrilReconciliation = findTable(Prefix.massStCyril + "Reconciliation2&D=$copticFeasts.AnyDay", MassStCyrilPrayersArray);
            if (!secondCyrilReconciliation)
                return console.log("Didn't find reconciliation");
            let htmlBtn = addExpandablePrayer({
                insertion: selectElementsByDataSetValue(btnDocFragment, Prefix.massStCyril + "Reconciliation&D=$copticFeasts.AnyDay")[0].nextElementSibling,
                btnID: "secondStBasilReconciliation",
                label: {
                    FR: secondCyrilReconciliation[0][2],
                    AR: secondCyrilReconciliation[0][4],
                },
                prayers: [secondCyrilReconciliation],
                languages: btn.languages,
            })[0];
            htmlBtn.addEventListener("click", () => {
                let dataGroup = Prefix.massStCyril + "Reconciliation&D=$copticFeasts.AnyDay";
                selectElementsByDataSetValue(containerDiv, dataGroup, undefined, 'group')
                    .forEach((row) => row.classList.toggle(hidden));
            });
        })();
        (function addRedirectionButtons() {
            //Adding 2 buttons to redirect the other masses at the begining of the Reconciliation
            redirectToAnotherMass([...redirectToList], {
                beforeOrAfter: "afterend",
                el: selectElementsByDataSetValue(btnDocFragment, "Reconciliation&D=$copticFeasts.AnyDay", { includes: true })[0],
            }, "RedirectionToReconciliation");
            //Adding 2 buttons to redirect to the other masses at the Anaphora prayer After "By the intercession of the Virgin St. Mary"
            let select = selectElementsByDataSetValue(btnDocFragment, Prefix.massCommon + "SpasmosAdamShort&D=$copticFeasts.AnyDay", { endsWith: true });
            redirectToAnotherMass([...redirectToList], {
                beforeOrAfter: "afterend",
                el: select[select.length - 1],
            }, "RedirectionToAnaphora");
            //Adding 2 buttons to redirect to the other masses before Agios
            redirectToAnotherMass([...redirectToList], {
                beforeOrAfter: "afterend",
                el: selectElementsByDataSetValue(btnDocFragment, getMassPrefix(btn.btnID) + "Agios&D=$copticFeasts.AnyDay")[0].previousElementSibling,
            }, "RedirectionToAgios");
            //Adding 2 buttons to redirect to the other masses before the Call upon the Holy Spirit
            redirectToAnotherMass([...redirectToList], {
                beforeOrAfter: "afterend",
                el: selectElementsByDataSetValue(btnDocFragment, Prefix.massCommon +
                    "AssemblyResponseAmenAmenAmenWeProclaimYourDeath&D=$copticFeasts.AnyDay")[0],
            }, "RedirectionToLitanies");
            //Adding 2 buttons to redirect to the other masses before the Fraction Introduction
            redirectToAnotherMass([...redirectToList], {
                beforeOrAfter: "beforebegin",
                el: selectElementsByDataSetValue(btnDocFragment, "FractionIntroduction&D=$copticFeasts.AnyDay", { includes: true })[0],
            }, "RedirectionToFractionIntroduction");
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
                isMultiDatedTitleMatching(tbl[0][0], Season));
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
        (function removeNonRelevantSeasonalLitany() {
            let seasonal = Array.from(btnDocFragment.querySelectorAll(".Row"));
            seasonal = seasonal.filter((row) => row.dataset.root.includes("SeasonalLitanyOf"));
            let dataRoot;
            if (closingHymn.Season === closingHymnAll[0].Season)
                dataRoot = "SeasonalLitanyOfThe" + closingHymn.Season; //River
            else if (closingHymn.Season === closingHymnAll[1].Season)
                dataRoot = "SeasonalLitanyOfThe" + closingHymn.Season; //Plants
            else if (closingHymn.Season === closingHymnAll[2].Season)
                dataRoot = "SeasonalLitanyOfThe" + closingHymn.Season; //Hervest
            seasonal
                .filter((row) => !row.dataset.root.includes(dataRoot))
                .forEach((row) => row.remove());
        })();
        (function showFractionPrayersMasterButton() {
            //We will insert a button displaying a pannel of choices for the different Fraction prayers according to the day/season, etc.s
            showMultipleChoicePrayersButton({
                filteredPrayers: filter(),
                languages: prayersLanguages,
                btnLabels: { AR: "صلوات القسمة", FR: "Oraisons de la Fraction" },
                masterBtnID: "btnFractionPrayers",
                anchor: Array.from(btnDocFragment.children)
                    .find(child => child.id && child.id.startsWith(Prefix.massCommon + "FractionPrayerPlaceholder&D=$copticFeasts.AnyDay")),
            });
            function filter() {
                let filtered = [];
                let dates = [copticDate, Season, copticFeasts.AnyDay];
                if (Number(copticDay) === 29 && ![4, 5, 6].includes(Number(copticMonth)))
                    dates.unshift(copticFeasts.Coptic29th);
                dates.forEach(date => filtered.push(...FractionsPrayersArray.filter(table => isMultiDatedTitleMatching(table[0][0], date))));
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
                filtered.push(...CommunionPrayersArray.filter(table => isMultiDatedTitleMatching(table[0][0], date)));
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
    },
});
const btnMassStJohn = new Button({
    btnID: "btnMassStJohn",
    label: { AR: "القديس يوحنا", FR: "Saint Jean" },
    docFragment: new DocumentFragment(),
    showPrayers: false,
    prayersSequence: [],
    onClick: () => {
        alert("The prayers of this mass have not yet been added. We hope they will be ready soon");
        return; //until we add the text of this mass
        scrollToTop(); //scrolling to the top of the page
        return btnMassStJohn.prayersSequence;
    },
    afterShowPrayers: async () => {
        btnMassStBasil.afterShowPrayers(btnMassStJohn);
    },
});
const goToAnotherMass = [
    new Button({
        btnID: "btnGoToStBasilReconciliation",
        label: { AR: " باسيلي", FR: " Saint Basil" },
        cssClass: inlineBtnClass,
        onClick: () => {
            showChildButtonsOrPrayers(btnMassStBasil);
        },
    }),
    new Button({
        btnID: "btnGoToStGregoryReconciliation",
        label: { AR: "غريغوري", FR: " Saint Gregory" },
        cssClass: inlineBtnClass,
        onClick: () => {
            showChildButtonsOrPrayers(btnMassStGregory);
        },
    }),
    new Button({
        btnID: "btnGoToStCyrilReconciliation",
        label: { AR: "كيرلسي", FR: "Saint Cyril" },
        cssClass: inlineBtnClass,
        onClick: () => {
            showChildButtonsOrPrayers(btnMassStCyril);
        },
    }),
    new Button({
        btnID: "btnGoToStJeanReconciliation",
        label: { AR: "القديس يوحنا", FR: "Saint Jean" },
        cssClass: inlineBtnClass,
        parentBtn: btnMass,
        onClick: () => {
            showChildButtonsOrPrayers(btnMassStJohn);
        },
    }),
];
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
        //The prayersArray andprayersSequence must be set when the button is clicked
        //Adding children buttons to btnMassUnBaptised
        btnMassUnBaptised.children = [
            ...btnDayReadings.onClick(true),
        ];
        btnMassUnBaptised.children = btnMassUnBaptised.children.filter((btn) => ![
            btnReadingsGospelIncenseDawn,
            btnReadingsGospelIncenseVespers,
            btnReadingsGospelNight,
            btnReadingsPropheciesDawn,
        ].includes(btn));
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
                            ["HallelujahFayBiBiFast&D=$copticFeasts.AnyDay", "HallelujahFayBiBi&D=$Seasons.GreatLent"],
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
                    AR: godHaveMercy[1][2],
                    FR: godHaveMercy[1][1], //this is the French text of the label
                },
                prayers: [godHaveMercy.slice(1, 4)],
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
        let readingsAnchor = selectElementsByDataSetValue(btnDocFragment, Prefix.massCommon + "ReadingsPlaceHolder&D=$copticFeasts.AnyDay")[0]; //this is the html element before which we will insert all the readings and responses
        (function insertIntercessionsHymnsForSeasons() {
            let seasonalIntercessions = MassCommonPrayersArray.filter((table) => table[0][0].includes("ByTheIntercessionOf") &&
                (isMultiDatedTitleMatching(table[0][0], copticDate) ||
                    isMultiDatedTitleMatching(table[0][0], Season)));
            if (seasonalIntercessions.length < 1)
                return console.log("No Seasonsal Intercession Hymns");
            let anchor = setAnchorAccordingToOccasion();
            if (!anchor)
                return;
            insertPrayersAdjacentToExistingElement({
                tables: getUniqueValuesFromArray(seasonalIntercessions),
                languages: getLanguages(getArrayNameFromArray(MassCommonPrayersArray)),
                position: {
                    beforeOrAfter: "beforebegin",
                    el: anchor,
                },
                container: btnDocFragment,
            });
            (function insertBiEhmotGharExpandable() {
                //After inserting the Intercessions hyms, we will isnert an expandable for Bi Ehmot Ghar
                addExpandablePrayer({
                    btnID: 'btnBiEhmotGhar',
                    insertion: readingsAnchor,
                    prayers: [findTable(Prefix.massCommon + "BiEhmotGhar&D=$Seasons.GreatLent", MassCommonPrayersArray) || undefined],
                    label: {
                        AR: "بي إهموت غار",
                        FR: "Ⲡⲓϩ̀ⲙⲟⲧ ⲅⲁⲣ"
                    },
                    languages: prayersLanguages
                });
            })();
            function setAnchorAccordingToOccasion() {
                let title = Prefix.massCommon + "ByTheIntercessionOfStMary&D=$copticFeasts.AnyDay";
                if ([Seasons.JonahFast].includes(Season))
                    title = Prefix.massCommon + "ByTheIntercessionOfStJohnBaptist&D=$copticFeasts.AnyDay";
                let htmlDivs = selectElementsByDataSetValue(btnDocFragment, title);
                if (!htmlDivs || htmlDivs.length < 1)
                    return;
                return htmlDivs[htmlDivs.length - 1].nextElementSibling;
            }
        })();
        (function insertStPaulReading() {
            insertMassReading(Prefix.stPaul, ReadingsArrays.StPaulArrayFR, ReadingsIntrosAndEnds.stPaulIntro, ReadingsIntrosAndEnds.stPaulEnd);
        })();
        (function insertKatholikon() {
            insertMassReading(Prefix.katholikon, ReadingsArrays.KatholikonArrayFR, ReadingsIntrosAndEnds.katholikonIntro, ReadingsIntrosAndEnds.katholikonEnd);
        })();
        (function insertPraxis() {
            (function insertPraxisResponse() {
                //!Caution, we must start by inserting the Praxis Response before inserting the Praxis reading
                let annualResponseHTML = insertPrayersAdjacentToExistingElement({
                    tables: [
                        findTable(Prefix.praxisResponse + "PraxisResponse&D=$copticFeasts.AnyDay", PraxisResponsesPrayersArray, { equal: true }) || undefined,
                    ],
                    languages: getLanguages(PrayersArraysKeys.find((array) => array[2]() === PraxisResponsesPrayersArray)[1]),
                    position: {
                        beforeOrAfter: "beforebegin",
                        el: readingsAnchor,
                    },
                    container: btnDocFragment,
                })[0];
                let specialResponse = PraxisResponsesPrayersArray.filter((table) => isMultiDatedTitleMatching(table[0][0], copticDate) ||
                    isMultiDatedTitleMatching(table[0][0], Season));
                if (specialResponse.length === 0)
                    return console.log("Did not find any specific praxis response");
                if (Season === Seasons.GreatLent) {
                    //If a Praxis response was found
                    // The query should yield to  2 tables ('Sundays', and 'Week') for this season. We will keep the relevant one accoding to the date
                    if (weekDay === 0 || weekDay === 6)
                        specialResponse = [
                            specialResponse.find((table) => table[0][0].includes("Sundays&D=")),
                        ];
                    else
                        specialResponse = [
                            specialResponse.find((table) => table[0][0].includes("Week&D=")),
                        ];
                }
                //We insert the special response between the first and 2nd rows
                let specialResponseHTML = insertPrayersAdjacentToExistingElement({
                    tables: getUniqueValuesFromArray(specialResponse),
                    languages: prayersLanguages,
                    position: {
                        beforeOrAfter: "beforebegin",
                        el: annualResponseHTML[2], //This is the 'Ek Esmaroot' part of the annual response
                    },
                    container: btnDocFragment,
                });
                //We move 'Sheri Ne Maria' after the title of the special response
                specialResponseHTML[0][0].insertAdjacentElement("afterend", annualResponseHTML[1]);
                //We remove the title of the annual response
                annualResponseHTML[0].remove();
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
                        return;
                    expandable.classList.add(hidden);
                    Array.from(sideBarTitlesContainer.children)
                        .filter((div) => div.dataset.group === expandable.id)
                        .forEach(div => div.remove());
                }
                ;
                async function showOrHideHour(expandable) {
                    (async function showHour() {
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
                    (function hideHour() {
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
const btnReadingsGospelIncenseVespers = new Button({
    btnID: "btnReadingsGospelIncenseVespers",
    label: {
        AR: "إنجيل عشية",
        FR: "Évangile  Vêpres",
        EN: "Vespers Gospel",
    },
    showPrayers: true,
    onClick: () => {
        btnReadingsGospelIncenseDawn.onClick(Prefix.gospelVespers);
    },
});
const btnReadingsGospelIncenseDawn = new Button({
    btnID: "btnReadingsGospelIncenseDawn",
    label: {
        AR: "إنجيل باكر",
        FR: "Évangile du Matin",
        EN: "Gospel Dawn",
    },
    showPrayers: true,
    onClick: (gospelPrefix = Prefix.gospelDawn) => {
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
const btnReadingsGospelNight = new Button({
    btnID: "btnReadingsGospelNight",
    label: {
        AR: "إنجيل المساء",
        FR: "Évangile du Soir",
        EN: "Night Gospel",
    },
    showPrayers: true,
    prayersSequence: [
        Prefix.gospelNight + "Psalm",
        Prefix.gospelNight + "Gospel",
    ],
    onClick: () => {
        btnReadingsGospelIncenseDawn.onClick(Prefix.gospelNight);
    },
});
const btnReadingsPropheciesDawn = new Button({
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
    onClick: (returnBtnChildren = false) => {
        if (Season === Seasons.HolyWeek)
            return alert("We are during the Holy Week, there are no readings, please go to the Holy Week Prayers"); //We should put here child buttons for the Holy Week prayers and readings
        //We set the button's children
        btnDayReadings.children = [
            btnReadingsGospelIncenseDawn,
            btnReadingsGospelIncenseVespers,
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
                btnID: "btnReadingsKatholikon",
                label: {
                    AR: "الكاثوليكون",
                    FR: "Katholikon",
                },
                showPrayers: true,
                onClick: (returnBtnChildren = false) => {
                    if (returnBtnChildren)
                        return;
                    findMassReadingOtherThanGospel(Prefix.katholikon, ReadingsArrays.KatholikonArrayFR, { beforeOrAfter: undefined, el: undefined }, containerDiv, true);
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
            new Button({
                btnID: "btnReadingsGospelMass",
                label: {
                    AR: "إنجيل القداس",
                    FR: "l'Évangile",
                    EN: "Gospel",
                },
                showPrayers: true,
                onClick: (returnBtnChildren = false) => {
                    if (returnBtnChildren)
                        return;
                    btnReadingsGospelIncenseDawn.onClick(Prefix.gospelMass);
                    scrollToTop(); //scrolling to the top of the page
                },
            }),
        ];
        (function adaptToGreatLentAndJonahFast() {
            if (![Seasons.GreatLent, Seasons.JonahFast].includes(Season))
                return;
            if (copticReadingsDate === copticFeasts.Resurrection)
                return;
            (function ifWeAreNotASaturday() {
                if (weekDay === 6)
                    return;
                //We remove the Vespers because there are no Vespers during the Great Lent except for Saturday. Also there are no vespers during the Jonah Fast which lasts for 4 days from Monday to Thursday
                btnDayReadings.children = btnDayReadings.children.filter((btn) => btn !== btnReadingsGospelIncenseVespers);
                if (Season === Seasons.JonahFast)
                    return; ///The following concerns only the Great Lent
                //If we are a Sunday and the GospelNight button is not included, we will add it.
                if (weekDay === 0 &&
                    !btnDayReadings.children.includes(btnReadingsGospelNight))
                    btnDayReadings.children.push(btnReadingsGospelNight);
                (function ifWeAreNotASunday() {
                    if (weekDay === 0)
                        return;
                    //If we are not a Sunday (i.e., we are during any week day other than Sunday and Saturday), we will  add the Prophecies button to the list of buttons
                    if (!btnDayReadings.children.includes(btnReadingsPropheciesDawn))
                        btnDayReadings.children.unshift(btnReadingsPropheciesDawn);
                    //Also if we  are not a Sunday, we will remove the Night Gospel, if included
                    btnDayReadings.children = btnDayReadings.children.filter((btn) => btn !== btnReadingsGospelNight);
                })();
            })();
        })();
        if (returnBtnChildren)
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
function btnHolyWeek() {
    /*The buttons tree is structured this way:
    btnMaster =>
            btnPassOver =>
                    [btnDay, btnEvening]=>
                              [btn1stHour, btn3rdHour, etc.]*/
    let Evening = 'E', Morning = 'D';
    let btnPassOver = new Button({
        btnID: 'btnPassover',
        label: { AR: 'البصخة المقدسة', FR: 'Pessah' },
        onClick: () => btnPassOver.children = [getDayAndEveningBtns(Morning), getDayAndEveningBtns(Evening)].filter(btn => btn), //We remove undefined elements
    }); //btnPassOver shows Day and Evening buttons
    let btnMaster = new Button({
        btnID: 'btnHolyWeek',
        label: { AR: 'طقس اسبوع الآلام', FR: 'Rite de la semaine sainte' },
        children: [btnPassOver]
    });
    return btnMaster; //btnMaster shows btnPassOver
    function getDayAndEveningBtns(service) {
        if (service === Evening && weekDay === 5)
            return undefined;
        if (service === Morning && [0, 6].includes(weekDay))
            return undefined;
        let labels = {
            Morning: { AR: 'بصخة الصباح', FR: 'Matin' },
            Evening: { AR: 'بصخة المساء', FR: 'Soir' }
        };
        let btn = new Button({
            btnID: 'btnPassover' + service,
            label: Object.entries(labels)[[Morning, Evening].indexOf(service)][1],
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
                    hour.lable.AR += ' من يوم ' + days[todayDate.getDay()][1];
                    hour.lable.FR += ' du ' + days[todayDate.getDay()][2];
                    hour.lable.EN += ' of ' + days[todayDate.getDay()][0];
                }
                else if (service === Evening && weekDay !== 5) {
                    hour.lable.AR += ' من ليلة ' + days[todayDate.getDay() + 1][1];
                    hour.lable.FR += ' de la veille du ' + days[todayDate.getDay() + 1][2];
                    hour.lable.EN += ' of ' + days[todayDate.getDay() + 1][0] + ' Evening ';
                }
                else if (service === Evening && weekDay === 5) {
                    hour.lable.AR += ' من ليلة أبو غلميسيس ';
                    hour.lable.FR += ' de la veille de Abou Ghalamsis ' + days[todayDate.getDay() + 1][2];
                    hour.lable.EN += ' of Abou Ghalamsis';
                }
            });
        })();
        return hoursLabels.map(hour => createHourBtn(hour.prefix, hour.lable)).filter(btn => btn); //We remove any undefined buttons      
        function createHourBtn(hour, label) {
            if (hour === '12H' && weekDay !== 5)
                return undefined; //The 12th hour is only for Friday
            if (['1H', '3H', '6H'].includes(hour) && weekDay === 0)
                return undefined; //On Plam Sunday we start at the 9th hour
            let hourReadings = ReadingsArrays.GospelNightArrayFR
                .filter(table => table[0][0].includes('&D=' + copticReadingsDate))
                .filter(table => table[0][0].startsWith(Prefix.HolyWeek + hour + service));
            let btnHour = new Button({
                btnID: 'btn' + hour,
                label: label,
                parentBtn: btn,
                languages: prayersLanguages,
                docFragment: new DocumentFragment(),
                showPrayers: true,
                onClick: () => btnHour.prayersSequence = getPrayersSequence(),
                afterShowPrayers: () => hourBtnAfterShowPrayers(btnHour, hour, hourReadings),
            });
            return btnHour;
            function getPrayersSequence() {
                if (btnHour.prayersSequence)
                    return btnHour.prayersSequence;
                let sequence = [...HolyWeekPrayersSequences.PassOver];
                if (service === Morning)
                    return MorningSequence();
                if (service === Evening)
                    return EveningSequence();
                function MorningSequence() {
                    //if (![4, 5].includes(weekDay)) return sequence;
                    return sequence;
                }
                ;
                function EveningSequence() {
                    let FinalLitany = Prefix.HolyWeek + "DayLitany&D=$Seasons.HolyWeek";
                    sequence.splice(sequence.indexOf(FinalLitany), 1, FinalLitany.replace('Day', 'Evening1'), FinalLitany.replace('Day', 'Evening2'), FinalLitany.replace('Day', 'Evening3'));
                    return sequence;
                }
            }
            function hourBtnAfterShowPrayers(btn, hour, dayPrayers) {
                (function insertHourReadings() {
                    let readings = {
                        coptGospel: { table: undefined, placeHolder: undefined },
                        nonCopticGospel: { table: undefined, placeHolder: undefined },
                        coptPsalm: { table: undefined, placeHolder: undefined },
                        nonCopticPsalm: { table: undefined, placeHolder: undefined },
                        Commentary: { table: undefined, placeHolder: undefined },
                        Prophecies: { table: undefined, placeHolder: undefined },
                        Sermony: { table: undefined, placeHolder: undefined },
                        KhinEfran: { table: undefined, placeHolder: undefined },
                        Litany: { table: undefined, placeHolder: undefined },
                    };
                    (function fetchKhinEfranAndLitany() {
                        readings.KhinEfran.table = findTable(Prefix.HolyWeek + "KhinEfranEnTetriyas&D=$Seasons.HolyWeek".replace("&D", service + "&D"), HolyWeekPrayersArray) || undefined;
                        if (!readings.KhinEfran.table)
                            return console.log('Didn\'t find Khin Efran');
                        readings.Litany.table = findTable(Prefix.HolyWeek + "FinalLitany&D=$Seasons.HolyWeek".replace("&D", service + "&D"), HolyWeekPrayersArray) || undefined;
                        if (!readings.Litany.table)
                            return console.log('Didn\'t find Litany');
                        readings.KhinEfran.placeHolder = fetchPlaceHolders('KhinEfran');
                        readings.Litany.placeHolder = fetchPlaceHolders('FinalLitany');
                    })();
                    (function fetchHourReadings() {
                        fetchTableAndPlaceHolder(readings.coptGospel, 'Gospel', 'CopticGospel');
                        fetchTableAndPlaceHolder(readings.nonCopticGospel, 'Gospel', 'nonCopticGospel');
                        fetchTableAndPlaceHolder(readings.coptPsalm, 'Psalm', 'CopticPsalm');
                        fetchTableAndPlaceHolder(readings.nonCopticPsalm, 'Psalm', 'nonCopticGospel');
                        fetchTableAndPlaceHolder(readings.Commentary, 'Commentary', 'Commentary');
                        fetchTableAndPlaceHolder(readings.Prophecies, 'Prophecies', 'Prophecies');
                        fetchTableAndPlaceHolder(readings.Sermony, 'Sermony', 'Prophecies');
                        readings.nonCopticPsalm.placeHolder = readings.nonCopticPsalm.placeHolder.previousElementSibling; //We need to do this because the nonCopticPsalm is inseret before the previous sibling of nonCopticGospel.placeHolder
                        function fetchTableAndPlaceHolder(reading, name, placeholder) {
                            reading.table = fetchTable(name);
                            reading.placeHolder = fetchPlaceHolders(placeholder);
                        }
                        (function getVersionsOfGospelAndPsalm() {
                            //For the gospel and the psalm, we need to get 2 versions of each: the first version is only coptic, and the 2nd version includes all the other languages except the Coptic version
                            ['coptGospel', 'nonCopticGospel', 'coptPsalm', 'nonCopticPsalm']
                                .forEach((version) => {
                                readings[version].table = (readings[version].table)
                                    .map((row) => {
                                    if (version.startsWith('copt'))
                                        return row.filter(el => row.indexOf(el) === prayersLanguages.indexOf('COP') + 1);
                                    if (version.startsWith('nonCoptic'))
                                        return row.filter(el => row.indexOf(el) !== prayersLanguages.indexOf('COP') + 1);
                                });
                            });
                        })();
                        function fetchTable(name) {
                            return findTable(Prefix.HolyWeek + hour + service + name, dayPrayers, { startsWith: true }) || undefined;
                        }
                    })();
                    function fetchPlaceHolders(placeHolder) {
                        return selectElementsByDataSetValue(btnHour.docFragment, Prefix.HolyWeek + placeHolder + 'PlaceHolder&D=$Seasons.HolyWeek', undefined, 'root')[0];
                    }
                    (function insertTablesInPlaceHolders() {
                        let languages;
                        [readings.coptPsalm,
                            readings.coptGospel,
                            readings.nonCopticPsalm,
                            readings.nonCopticGospel,
                            readings.Commentary,
                            readings.Prophecies,
                            readings.Sermony,
                            readings.KhinEfran,
                            readings.Litany]
                            .forEach((reading) => {
                            if (!reading.table || !reading.placeHolder)
                                return;
                            if ([readings.KhinEfran, readings.Litany].includes(reading))
                                languages = prayersLanguages;
                            if ([readings.Prophecies, readings.Sermony, readings.Commentary].includes(reading))
                                languages = ['COP', 'FR', 'AR'];
                            if ([readings.nonCopticGospel, readings.nonCopticPsalm].includes(reading))
                                languages = ['FR', 'AR'];
                            if ([readings.coptGospel, readings.coptPsalm].includes(reading))
                                languages = ['COP'];
                            insertPrayersAdjacentToExistingElement({
                                tables: [reading.table],
                                languages: languages,
                                container: btnHour.docFragment,
                                position: {
                                    el: reading.placeHolder, beforeOrAfter: 'beforebegin'
                                }
                            });
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
                            anchor = selectElementsByDataSetValue(btn.docFragment, Prefix.massCommon + "ReadingsPlaceHolder&D=$copticFeasts.AnyDay");
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
                            anchor = selectElementsByDataSetValue(btn.docFragment, Prefix.commonPrayer + "GospelPrayerPlaceHolder&D=$copticFeasts.AnyDay");
                            (function insertGospelReading() {
                                getGospelReadingAndResponses({
                                    liturgy: Prefix.gospelDawn,
                                    prayersArray: ReadingsArrays.GospelDawnArrayFR,
                                    languages: getLanguages(PrayersArraysKeys.find((array) => array[0] === Prefix.gospelDawn)[1]),
                                    container: btn.docFragment,
                                    isMass: true,
                                    clearContainer: false,
                                });
                            })();
                            reading = findTable(Prefix.gospelDawn + '&D=GL55', ReadingsArrays.GospelDawnArrayFR) || undefined;
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
    let reading = readingArray.find((table) => isMultiDatedTitleMatching(splitTitle(table[0][0])[0], readingDate));
    if (!reading)
        return console.log("Did not find a reading for the current copticReadingsDate");
    return insertPrayersAdjacentToExistingElement({
        tables: [reading],
        languages: getLanguages(PrayersArraysKeys.find((array) => array[0] === readingPrefix)[1]),
        position: position,
        container: containerDiv,
    });
}
/**
 * takes a liturgie name like "IncenseDawn" or "IncenseVespers" and replaces the word "Mass" in the buttons gospel readings prayers array by the name of the liturgie. It also sets the psalm and the gospel responses according to some sepcific occasions (e.g.: if we are the 29th day of a coptic month, etc.)
 * @param liturgie {string} - expressing the name of the liturigie that will replace the word "Mass" in the original gospel readings prayers array
 * @returns {string} - returns an array representing the sequence of the gospel reading prayers, i.e., an array like ['Psalm Response', 'Psalm', 'Gospel', 'Gospel Response']
 */
function setGospelPrayersSequence(liturgy, isMass) {
    //this function sets the date or the season for the Psalm response and the gospel response
    const prayersSequence = [
        Prefix.psalmResponse + "&D=$copticFeasts.AnyDay",
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
        let PsalmAndGospelResponses = PsalmAndGospelPrayersArray.filter((table) => isMultiDatedTitleMatching(table[0][0], copticDate) ||
            isMultiDatedTitleMatching(table[0][0], Season));
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
            if (liturgy === Prefix.gospelDawn)
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
 * @param {HTMLElement} gospelInsertionPoint - the html element in relation to which the created html elements will be inserted in the container
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
    if (!args.gospelInsertionPoint)
        args.gospelInsertionPoint = selectElementsByDataSetValue(args.container, Prefix.commonPrayer + "GospelPrayerPlaceHolder&D=$copticFeasts.AnyDay")[0];
    //We start by inserting the standard Gospel Litany
    (function insertGospelLitany() {
        if (!args.isMass)
            return;
        let gospelLitanySequence = [
            Prefix.commonPrayer + "GospelPrayer&D=$copticFeasts.AnyDay",
            Prefix.commonPrayer + "GospelIntroduction&D=$copticFeasts.AnyDay",
        ]; //This is the sequence of the Gospel Prayer/Litany for any liturgy
        let gospelLitanyPrayers = gospelLitanySequence.map((title) => findTable(title, CommonPrayersArray));
        if (!gospelLitanyPrayers || gospelLitanyPrayers.length === 0)
            return console.log("could not find the gospel litany");
        insertPrayersAdjacentToExistingElement({
            tables: gospelLitanyPrayers,
            languages: prayersLanguages,
            position: {
                beforeOrAfter: "beforebegin",
                el: args.gospelInsertionPoint,
            },
            container: args.container,
        });
    })();
    /*  if (args.isMass &&
       new Map(JSON.parse(localStorage.showActors)).get("Diacon") === false)
       return alert("Diacon Prayers are set to hidden, we cannot show the gospel"); //If the user wants to hide the Diacon prayers, we cannot add the gospel because it is anchored to one of the Diacon's prayers */
    let anchorDataRoot = Prefix.commonPrayer + "GospelIntroduction&D=$copticFeasts.AnyDay";
    let gospelIntroduction = selectElementsByDataSetValue(args.container, anchorDataRoot, undefined, 'group')
        .filter(div => !isCommentContainer(div)); //!We do not include the comments because if the user hides them, the index of the elements will change
    if (args.isMass && gospelIntroduction.length < 1)
        return console.log("gospelIntroduction.length = 0 ");
    let prayersSequence = setGospelPrayersSequence(args.liturgy, args.isMass); //this gives us an array like ['PR_&D=####', 'RGID_Psalm&D=', 'RGID_Gospel&D=', 'GR_&D=####']
    //We will retrieve the tables containing the text of the gospel and the psalm from the GospeldawnArray directly (instead of call findAndProcessPrayers())
    let date = copticReadingsDate;
    if (args.liturgy === Prefix.gospelVespers) {
        //date = getTomorowCopticReadingDate();
        //console.log(date);
    }
    let gospel = args.prayersArray
        .filter((table) => isMultiDatedTitleMatching(splitTitle(table[0][0])[0], date));
    if (gospel.length === 0)
        return console.log("gospel.length = 0"); //if no readings are returned from the filtering process, then we end the function
    /**
     * Appends the gospel and psalm readings before gospelInsertionPoint(which is an html element)
     */
    (function insertPsalmAndGospelReadings() {
        if (!args.isMass) {
            //If we are not showing the gospel reading in a Mass context (i.e., if the user is clicking on the 'Day Readings Button' to show the readings of the day). We will create a  div container  to which we will append the reading text. We will append the container div as first element of containerDiv
            containerDiv.append(document.createElement("div"));
            args.gospelInsertionPoint = containerDiv.children[0]; //We set args.gospelInsertionPoint as the container div we've just created.
        }
        gospel
            .forEach((table) => {
            //gospel[] should include 2 tables: the first table is the psalm and its title is like '....Psalm&D=...'. The 2nd is the gospel: its title is like '....Gospel&D=...'.
            let el; //!We, on purpose, created a new variable for the element before which we will show the reading, in order to keep args.gospelInsertionPoint unchanged because we need it later if we are within a Mass or liturgy context. 
            (function setInsertionPoint() {
                if (!args.isMass || table[0][0].includes("Gospel&D="))
                    //If we are not displaying the gospel in a Mass or a liturgy context, we don't need to insert the psalm. We will just show the text of the gospel reading itself. Hence, the div element will be same as args.gospelInsertionPoint
                    el = args.gospelInsertionPoint;
                else if (table[0][0].includes("Psalm&D="))
                    //We are within a Mass or liturgy context, and need to display the Psalm. We will hence change the place in which the text will be inserted.
                    el = gospelIntroduction[gospelIntroduction.length - 1];
            })();
            if (!el)
                return console.log('The insertion point is not valid');
            function getGospelOrPsalmTable() {
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
                        Prefix.same + '&C=ReadingEnd',
                        //The following elements represent the text of the 'Gospel End' in each language, in the same order as the languages passed in args.languages.
                        ...args.languages
                            .map(lang => end[lang])
                    ];
                }
                ;
            }
            ;
            insertPrayersAdjacentToExistingElement({
                tables: [getGospelOrPsalmTable()],
                languages: args.languages,
                position: {
                    beforeOrAfter: "beforebegin",
                    el: el,
                },
                container: args.container,
            });
        });
    })();
    (function insertPsalmAndGospelResponses() {
        if (!args.isMass)
            return; //If we are not calling the function with a Mass or a liturgy (Unbpaptized Mass, or Incense Dawn/Vespers) context, we will not insert the Gospel and Psalm responses 
        //Inserting the gospel response
        insertResponse(3, args.gospelInsertionPoint);
        //We remove the insertion point placeholder
        args.gospelInsertionPoint.remove();
        let gospelPrayer = selectElementsByDataSetValue(args.container, Prefix.commonPrayer + "GospelPrayer&D=$copticFeasts.AnyDay"); //This is the 'Gospel Litany'. We will insert the Psalm response after its end
        if (!gospelPrayer)
            return;
        insertResponse(0, gospelPrayer[gospelPrayer.length - 1]
            .previousElementSibling); //Inserting Psalm Response if any
        function insertResponse(index, insertion) {
            let response = PsalmAndGospelPrayersArray.find((tbl) => splitTitle(tbl[0][0])[0] === prayersSequence[index]); //!Caution: this must be an '===' search operator not startWith() because otherwise, 'NativitayParamoun' will be selected for the 'Nativity' Season, and 'Baptism Paramoun' might be selected for the 'Baptism' Season if their tables in PrayersArray are before those of the relevant table
            if (!response || response.length === 0)
                return;
            insertPrayersAdjacentToExistingElement({
                tables: [response],
                languages: prayersLanguages,
                position: {
                    beforeOrAfter: "beforebegin",
                    el: insertion,
                },
                container: args.container,
            });
        }
    })();
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
function isMultiDatedTitleMatching(tableTitle, coptDate = copticDate) {
    if (!tableTitle.includes("&D="))
        return false; //This means that the title does not specify any date for the prayer.
    tableTitle = splitTitle(tableTitle)[0].split("&D=")[1];
    return tableTitle
        .split("||")
        .map((date) => dateIsRelevant(date, coptDate))
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
    (async function InsertCymbalVerses() {
        let cymbalsAnchor = selectElementsByDataSetValue(btn.docFragment, Prefix.commonIncense + "CymbalVersesPlaceHolder&D=$copticFeasts.AnyDay")[0];
        if (!cymbalsAnchor)
            return console.log("We didn't find the cymbal verses placeholder");
        let cymbals;
        Season === Seasons.JonahFast
            ? cymbals = CommonPrayersArray.filter(table => table[0][0].startsWith(Prefix.commonPrayer + "KyrieElieson&D=$copticFeasts.AnyDay")) //If we are during the Jonah Fast, the Cymbal Verses are not chanted, they are replaced by the Long Kyrielison
            : cymbals = getCymbalVerses();
        console.log('Cymbals = ', cymbals);
        if (cymbals.length < 1)
            return console.log("no cymbals were found by the provided sequence: ");
        insertPrayersAdjacentToExistingElement({
            tables: getUniqueValuesFromArray(cymbals),
            languages: btn.languages,
            position: {
                beforeOrAfter: "beforebegin",
                el: cymbalsAnchor.nextElementSibling,
            },
            container: btn.docFragment,
        });
        function getCymbalVerses() {
            let sequence = [
                Prefix.cymbalVerses + "Wates&D=$copticFeasts.AnyDay",
                Prefix.cymbalVerses + "&D=$copticFeasts.AnyDay",
            ];
            //If we are during any of the Lord Feasts (or any season where we follow the same pattern), we add "Jesus Christ is the same for ever...",
            if ([...lordFeasts, copticFeasts.Coptic29th].includes(copticDate) ||
                [Seasons.Nativity, Seasons.Baptism, Seasons.PentecostalDays].includes(Season))
                sequence.push(Prefix.cymbalVerses + "LordFeastsEnd&D=$copticFeasts.AnyDay");
            if (weekDay > 2)
                sequence[0] = sequence[0].replace("Wates&D", "Adam&D");
            if (dayFeasts)
                dayFeasts.forEach((feast) => [
                    ...lordFeasts,
                    Seasons.Nativity,
                    Seasons.Baptism,
                    Seasons.PentecostalDays,
                ].includes(feast) //During Seasons.Nativity (i.e., between Nativity and Circumcision) and Seasons.Baptism(from Baptism to Cana Wedding), the Cymbals verses follow the pattern of any Lord Feast: it starts with "Amoyni Marin..." or "Ten O'osht", then the cymbal verses of the feast, and finally, the "Eb'oro enti ti hirini". We will hence remove the 2nd element from the sequence
                    ? insertFeastInSequence(sequence, feast, 1, 1)
                    : insertFeastInSequence(sequence, feast, 1, 0)); //We always start with 'Amoyni Marin...' or with 'Tin O'osht...', so we will insert the feast element before the 2nd element, and will not delete anything
            return processSequence(sequence, CymbalVersesPrayersArray);
        }
    })();
    (async function InsertCommonDoxologies() {
        let doxologiesAnchor = selectElementsByDataSetValue(btn.docFragment, Prefix.commonIncense + "DoxologiesPlaceHolder&D=$copticFeasts.AnyDay")[0];
        if (!doxologiesAnchor)
            return console.log("Didn't find doxologiesPlaceholder");
        if (!doxologiesAnchor)
            return;
        let sequence = [
            Prefix.doxologies + "DawnWatesStMary&D=$copticFeasts.AnyDay",
            Prefix.doxologies + "StMaykel&D=$copticFeasts.AnyDay",
            Prefix.doxologies + "HeavenlyBeings&D=$copticFeasts.AnyDay",
            Prefix.doxologies + "Apostles&D=$copticFeasts.AnyDay",
            Prefix.doxologies + "StMarc&D=$copticFeasts.AnyDay",
            Prefix.doxologies + "StGeorge&D=$copticFeasts.AnyDay",
            Prefix.doxologies + "StMina&D=$copticFeasts.AnyDay",
            Prefix.doxologies + "EndOfDoxologiesWates&D=$copticFeasts.AnyDay",
        ];
        if (btn === btnIncenseVespers)
            sequence[0] = sequence[0].replace("Dawn", "Vespers");
        let excludedFeasts = [
            saintsFeasts.StMaykel,
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
                    Seasons.PentecostalDays,
                    Seasons.JonahFast //The Jonah doxology comes before St. Mary Doxolgy according to some sources
                ].includes(feast))
                    index = 0; //If one of the dates in feast[] corresponds to a one of the 'Lord's Feasts', it means we are in a Lord Feast. the doxologies of the feast will be placed at the begining of the doxologies. We follow the same rule for the doxologies of the PentecostalDays and the month of Kiahk
                else if (excludedFeasts.includes(feast)) {
                    let feastIndex = sequence.indexOf(feast);
                    sequence.splice(2, 0, sequence[feastIndex]); //If it is one of the doxologies already included by default, we place it after St. Maykel
                    sequence.splice(feastIndex + 1, 1); //We then delete the element itself
                    index = undefined; //We set index to undefined in order to prevent insertFeastSequence from inserting any element in sequence
                }
                else if (AngelsFeasts.includes(feast))
                    index = 1;
                insertFeastInSequence(sequence, feast, index, 0);
            });
        }
        let doxologies = processSequence(sequence, DoxologiesPrayersArray);
        if (doxologies.length === 0)
            return console.log("Did not find any relevant doxologies");
        if (Season === Seasons.GreatLent) {
            //For the Great Lent, there is a doxology for the Sundays and 4 doxologies for the week days
            if (weekDay === 0 || weekDay === 6)
                doxologies = doxologies
                    .filter((tbl) => tbl[0][0].includes("Seasons.GreatLent"))
                    .filter((tbl) => !tbl[0][0].includes("Week"));
            else
                doxologies = doxologies
                    .filter((tbl) => tbl[0][0].includes("Seasons.GreatLent"))
                    .filter((tbl) => !tbl[0][0].includes("Sundays"));
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
     */
    function insertFeastInSequence(sequence, feastDate, index, remove) {
        if (!index && index !== 0)
            return;
        sequence.splice(index, remove, "&Insert=" + feastDate);
    }
    /**
     * Searchs in tablesArray for the tables matching each title in sequence, which is a string[] of titles, and returns a string[][][] of the tables found in the
     * @param {string[]} sequence - An arry of titles that we will be looking for tables matching each of them in tablesArray[][]
     * @param {string[][][]} tablesArray - The array containg the text tables in which we will be looking for the tables[][] having titles matching the titles in sequence[]
     * @returns {string[][][]} - an array of the tables[][] found
     */
    function processSequence(sequence, tablesArray) {
        console.log(sequence);
        let tables = [];
        sequence.map((title) => {
            if (title.startsWith("&Insert="))
                tablesArray
                    //!CAUTION: we must use 'filter' not 'find' because for certain feasts there are more than one doxology
                    .filter((tbl) => isMultiDatedTitleMatching(tbl[0][0], title.split("&Insert=")[1]))
                    .forEach((tbl) => tables.push(tbl));
            else
                tables.push(findTable(title, tablesArray, {
                    equal: true,
                }));
        });
        return tables;
    }
}
async function removeElementsByTheirDataRoot(container = containerDiv, dataRoot) {
    selectElementsByDataSetValue(container, dataRoot).forEach((el) => el.remove());
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
        //We will create a div element for each row of each table in btn.prayersArray
        // let htmlRows = Array.from(prayersContainerDiv.children) as HTMLDivElement[];
        // htmlRows
        //   .filter((div) => isTitlesContainer(div))
        //   .forEach((div) => {
        //     htmlRows.filter(d => d.dataset.root && d.dataset.root === div.dataset.root)
        //       .forEach(d => d.dataset.group = div.dataset.root);//We rename the dataset.group attribute for each nested table
        //   });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVjbGFyZUJ1dHRvbnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9tb2R1bGVzL0RlY2xhcmVCdXR0b25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sTUFBTTtJQWlCVixZQUFZLEdBQWU7UUFYbkIscUJBQWdCLEdBQVcsRUFBRSxDQUFDO1FBWXBDLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQztRQUN4QixJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUM7UUFDeEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUMsU0FBUyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQztRQUM5QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsR0FBRyxDQUFDLGVBQWUsQ0FBQztRQUM1QyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsR0FBRyxDQUFDLGVBQWUsQ0FBQztRQUM1QyxJQUFJLENBQUMsYUFBYSxHQUFHLEdBQUcsQ0FBQyxZQUFZLENBQUM7UUFDdEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUMsU0FBUyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQztRQUM1QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsR0FBRyxDQUFDLGdCQUFnQixDQUFDO1FBQzlDLElBQUksQ0FBQyxZQUFZLEdBQUcsR0FBRyxDQUFDLFdBQVcsQ0FBQztRQUNwQyxJQUFJLENBQUMsWUFBWSxHQUFHLEdBQUcsQ0FBQyxXQUFXLENBQUM7UUFDcEMsR0FBRyxDQUFDLFFBQVE7WUFDVixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUM7WUFDakMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBQ0QsU0FB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