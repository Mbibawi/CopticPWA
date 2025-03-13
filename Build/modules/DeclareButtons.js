function Sequences() {
    return {
        Incense: [
            //This is the generic sequence of any incense office (morning or evening). The onClick function triggered by btnIncenseDawn and btnIncenseVespers, will remove what is irrelevant and add keeps what needs to be kept
            Prefix.commonIncense + "Introduction",
            Prefix.bookOfHours + "Psalm50",
            Prefix.commonIncense + "LitaniesIntro",
            Prefix.incenseDawn + "SickLitany",
            Prefix.incenseDawn + "TravelersLitany",
            Prefix.incenseDawn + "OblationsLitany",
            Prefix.incenseVespers + "DepartedLitany",
            Prefix.bookOfHours + "AngelsPrayer",
            Prefix.incenseVespers + "LordKeepUsThisNight",
            Prefix.commonIncense + "Doxolgoies",
            Prefix.commonIncense + "EfnotiNaynan",
            Prefix.commonIncense + "LiturgyEnd"
        ],
        Mass: {
            //those are the sequences of the 'Baptized' mass prayers (starting from Reconciliation) for each mass
            Unbaptized: [
                Prefix.massCommon + "GloryAndHonor",
                Prefix.massCommon + "AlleluiaFayBiBi",
                Prefix.massCommon + "AlleluiaFayBiBiFast",
                Prefix.massCommon + "BenedictionOfTheLamb",
                Prefix.commonPrayer + "ThanksGiving",
                Prefix.massCommon + "AbsolutionForTheFather",
                Prefix.massCommon + "Tayshoury",
                Prefix.massCommon + "Tishoury",
                Prefix.massCommon + "IntercessionsHymn",
                Prefix.commonPrayer + "Creed"
            ], //Those are the prayers of the 'Unbaptized Mass'
            StBasil: [
                Prefix.massCommon + "ReconciliationComment",
                Prefix.massStBasil + "Reconciliation",
                Prefix.massCommon + "EndOfReconciliation",
                Prefix.massStBasil + "Anaphora",
                Prefix.massStBasil + "Agios",
                Prefix.massStBasil + "InstitutionNarrative",
                Prefix.massCommon + "AsWeCommemorate",
            ], //The sequence of prayers of St Basil Mass (starting from Reconciliation)
            StGregory: [
                Prefix.massCommon + "ReconciliationComment",
                Prefix.massStGregory + "Reconciliation",
                Prefix.massCommon + "EndOfReconciliation",
                Prefix.massStGregory + "Anaphora",
                Prefix.massStGregory + "Agios",
                Prefix.massStGregory + "LitaniesIntro",
                Prefix.massStGregory + "Litanies",
                Prefix.massStGregory + "FractionIntroduction"
            ], //The sequence of prayers of St Gregory Mass (starting from reconciliation)
            StCyril: [
                Prefix.massCommon + "ReconciliationComment",
                Prefix.massStCyril + "Reconciliation",
                Prefix.massCommon + "EndOfReconciliation",
                Prefix.massStCyril + "Anaphora",
                Prefix.massStCyril + "Agios",
                Prefix.massStCyril + "LitaniesIntro",
                Prefix.massCommon + "AsItWereSoLetItBe",
            ], // the sequence of prayers of St Cyril Mass (starting from Reconciliation)
            StJohn: [], // the sequence of prayers of St John Mass (tarting from Reconciliation)
            CallOfHolySpirit: [
                Prefix.massCommon + "CallOfTheHolySpiritPart1",
            ],
            Litanies: [
                Prefix.massCommon + "LitaniesIntro",
                Prefix.massCommon + "SaintsCommemoration",
                Prefix.massCommon + "CommemorationOfTheDeparted",
                Prefix.massCommon + "FractionIntroduction",
                Prefix.commonPrayer + "OurFatherInHeaven",
                Prefix.commonPrayer + "BlockInTheNameOfOurLord",
                Prefix.massCommon + "PrayerForTheFather",
                Prefix.commonPrayer + "BlockIriniPassi",
                Prefix.massCommon + "AbsolutionPrayerForTheFather",
                Prefix.massCommon + "ConfessionIntroduction",
                Prefix.massCommon + "Confession",
                Prefix.commonPrayer + "ZoksasiKyrie"
            ], //The litanies. They are common to all masses except 
            Communion: [
                Prefix.massCommon + "CommunionPsalm150",
                Prefix.massCommon + "LiturgyEnd",
            ], //the sequence of prayers from 'Confession' until the end of the mass, it is common to all masses 
        },
        Psalmody: {
            Year: [
                Prefix.psalmody + "WakeUpSonsOfLight",
                Prefix.psalmody + "Hos1",
                Prefix.psalmody + "LobshHos1",
                Prefix.psalmody + "CommentaryHos1",
                Prefix.psalmody + "Hos2",
                Prefix.psalmody + "LobshHos2",
                Prefix.psalmody + "Hos3",
                Prefix.psalmody + "Arebsalin",
                Prefix.psalmody + "Tenen",
                Prefix.psalmody + "TenOwehEnthok",
                Prefix.psalmody + "SaintsCommemoration",
                Prefix.psalmody + "Doxologies",
                //!Insert the rest of the doxologies
                Prefix.psalmody + "Hos4",
                Prefix.anchor + "PsalyXXX&D=$copticFeasts.", //This will be replaced with Prefix.psalmody + "PsalyAdam/Watos&D=$" + Seasons.[current season]||copticFeasts.[copticDate]
                Prefix.anchor + "PsalyXXX&D=$Seasons.", //This will be replaced with Prefix.psalmody + "PsalyAdam/Watos&D=$" + Seasons.[current season]||copticFeasts.[copticDate]
                Prefix.anchor + "PsalyOnTheotoky", //This is will be replaced with Prefix.psalmody + "PsalyTheoktoky&D=" + weekDay
                Prefix.psalmody + "IntroductionToXXXTheotoky",
                Prefix.anchor + "Theotoky", //This is will be replaced with Prefix.psalmody + "Theoktoky&D=" + weekDay
                Prefix.anchor + "Lobsh1Theotoky", //This is will be replaced with Prefix.psalmody + "Lobsh1Theotoky&D=" + weekDay
                Prefix.anchor + "Lobsh2Theotoky", //This is will be replaced with Prefix.psalmody + "Lobsh2Theotoky&D=" + weekDay
                Prefix.anchor + "Lobsh3Theotoky", //This is will be replaced with Prefix.psalmody + "Lobsh3Theotoky&D=" + weekDay
                Prefix.psalmody + "TheotokiesConclusionXXX", //!Need to know when Watos and Adam Theotokies are prayed
                Prefix.bookOfHours + "WeExaltYouStMary",
                Prefix.commonPrayer + "Creed",
                Prefix.bookOfHours + "HolyLordOfSabaot",
                Prefix.psalmody + "ConcludingHymn",
                Prefix.bookOfHours + "HolyLordOfSabaot",
                Prefix.commonPrayer + "OurFatherInHeaven",
                Prefix.bookOfHours + "Agios",
            ],
            Kiahk: [
                Prefix.psalmody + "WakeUpSonsOfLight",
                Prefix.psalmody + "KiahkHos",
                Prefix.psalmody + "ChantAgiosOsiOs",
                Prefix.psalmody + "MarenOosht",
                Prefix.psalmody + "PsalyOnHos1",
                Prefix.psalmody + "Hos1",
                Prefix.psalmody + "LobshHos1",
                Prefix.psalmody + "ChantGodSaidToMoses",
                Prefix.psalmody + "CommentaryHos1",
                Prefix.psalmody + "PsalyOnHos2",
                Prefix.psalmody + "Hos2",
                Prefix.psalmody + "LobshHos2",
                Prefix.psalmody + "Hos3",
                Prefix.psalmody + "Arebsalin",
                Prefix.psalmody + "Tenen",
                Prefix.psalmody + "TenOwehEnthok",
                Prefix.psalmody + "Lobsh1Theotoky&D=6",
                Prefix.psalmody + "Lobsh2Theotoky&D=6",
                Prefix.psalmody + "Hos3",
                Prefix.psalmody + "TheotokiesConclusionWatos",
            ],
        },
        HolyWeek: {
            PassOver: [
                Prefix.HolyWeek + "HourIntroduction",
                Prefix.HolyWeek + "PsalmAndGospel",
                Prefix.HolyWeek + "Commentary",
                Prefix.HolyWeek + "PassoverEnd",
            ],
            Lakan: [
                Prefix.commonIncense + "Introduction",
                Prefix.cymbalVerses + "&D=$copticFeasts.HolyThursday",
                Prefix.bookOfHours + "Psalm50",
                Prefix.HolyWeek + "LakanProphecies&D=$copticFeasts.HolyThursday",
                Prefix.HolyWeek + "LakanSermony&D=$copticFeasts.HolyThursday",
                Prefix.massCommon + "BiEhmotGhar",
                Prefix.anchor + "Readings",
                Prefix.anchor + "Agios",
                Prefix.anchor + "GospelLitany",
                Prefix.incenseDawn + "SickLitany",
                Prefix.incenseDawn + "TravelersLitany",
                Prefix.massCommon + "SeasonalLitanyOfTheHarvest" + anyDay,
                Prefix.commonPrayer + "KyrieElieson",
                Prefix.massCommon + "SeasonalLitaniesConclusion",
                Prefix.commonPrayer + "KyrieElieson",
                Prefix.massCommon + "PresidentLitany",
                Prefix.incenseVespers + "DepartedLitany",
                Prefix.incenseDawn + "OblationsLitany",
                Prefix.commonPrayer + "CatechumensLitany",
                Prefix.HolyWeek + "LakanLitany",
                Prefix.commonPrayer + "BlockShlil",
                Prefix.commonPrayer + "BlockIriniPassi",
                Prefix.commonPrayer + "ChurchLitany",
                Prefix.commonPrayer + "PopeLitany",
                Prefix.commonPrayer + "MeetingsLitany",
                //Insert "Eyn Sophia Si Epros"
                Prefix.commonPrayer + "Creed",
                Prefix.massCommon + "LakanSpasmosAdamLong&D=$copticFeasts.HolyThursday",
                Prefix.massCommon + "KissEachOther",
                Prefix.placeHolder,
                Prefix.massCommon + "SpasmosAdamShort",
                Prefix.HolyWeek + "LakanAnaphora&D=$copticFeasts.HolyThursday",
            ],
            ThursdayMass: [],
            SaturdayIncenseDawn: [],
            SaturdayMass: [],
        },
        Prosternation: [
            Prefix.commonIncense + "Introduction",
            Prefix.anchor + 'Cymbals',
            Prefix.cymbalVerses, //!do we need this?
            Prefix.bookOfHours + "Psalm50",
            Prefix.anchor + 'PropheciesIntro', //!provide
            Prefix.anchor + 'Prophecies',
            Prefix.anchor + 'PropheciesEnd', //!provide
            Prefix.massCommon + "WeWorshipYouChrist",
            Prefix.anchor + 'StPaulIntro', //!provide
            Prefix.anchor + 'StPaul',
            Prefix.anchor + 'StPaulEnd', //!provide
            Prefix.anchor + 'Agios',
            Prefix.commonPrayer + "BlockIriniPassi",
            Prefix.commonPrayer + "GospelLitany",
            Prefix.incenseVespers + 'GospelCommentaryXXX',
            Prefix.gospelResponse + 'ProsternationXXX',
            Prefix.anchor + 'Litanies',
            Prefix.massCommon + "WorshipGodInFear",
            Prefix.anchor + 'Doxologies',
            Prefix.incenseVespers + 'ProsternationLitanyXXX',
            Prefix.commonPrayer + "OurFatherInHeaven",
        ],
    };
}
function ReadingsIntrosAndEnds() {
    return {
        gospelIntro: {
            AR: "قفوا بخوف أمام الله وانصتوا لنسمع الإنجيل المقدس، فصل من بشارة الإنجيل لمعلمنا مار (....) البشير، والتلميذ الطاهر، بركاته على جميعنا",
            FR: "Levons-nous avec crainte de Dieu pour écouter le Saint Évangile. Lecture du Saint évangile selon Saint (....), Que sa bénédiction soit sur nous tous, Amen !",
            EN: ""
        },
        gospelEnd: {
            AR: "والمَجْدُ لِلّهِ دَائِمَاً",
            FR: "Gloire à Dieu éternellement, Amen !",
            EN: "Glory to God Forever"
        },
        stPaulIntro: {
            AR: "البُولِسْ فُصْلٌ مِنْ رِسَالَةِ مُعَلِمِنَا بُولِسَ الرَسُولِ  (الأولى/الثانية) إلى (......)، بَرَكَتْهُ عَلى جَمِيعِنَا آمْينْ.",
            FR: "Lecture de l’Epître de Saint Paul à () que sa bénédiction soit sur nous tous, Amen!",
            EN: "",
        },
        stPaulEnd: {
            AR: "نِعْمَةِ اللّهِ الآبِ فَلْتَكُنْ مَعْكُمْ يا آبَائِي وإخْوَتِي آمْينْ.",
            FR: "Que la grâce de Dieu soit avec vous tous, mes père et mes frères, Amen!",
            EN: "",
        },
        CatholiconIntro: {
            AR: "الكَاثُولِيكُون، فَصْلٌ مِنْ رِسَالَةِ القِدِّيسِ (....) (الأولى/الثانية/الثالثة)  بَرَكَتْهُ عَلَى جَمِيعِنَا آمْينْ",
            FR: "Catholicon, (1ère/2ème/3ème) épître à l’Église Universelle de notre père St. (....), que sa bénédiction repose sur nous tous, Amen!",
            EN: "",
        },
        CatholiconEnd: {
            AR: "لا تُحِبُّو العَالَمَ ولا الأَشْيَاءَ التِي في العَالَمِ لأَنَّ العَالَمَ يَمْضِي وشَهْوَتَهُ مَعَهُ أَمَّا مَنْ يَصْنَعَ مَشِيئَةَ اللّهِ فَيَثْبُتُ إلى الأَبَدِ.",
            FR: "N’aimez pas le monde et ce qui est dans le monde, le monde passe, lui et sa convoitise, mais celui qui fait la volonté de Dieu demeure à jamais. Amen !",
            EN: "",
        },
        psalmIntro: {
            AR: "مِنْ مَزامِيرِ وتَراتِيلِ أَبِينَادَاوودُ الَنبِيِّ والمَلْكِ، بَرَكَاتُهُ عَلَى جَمِيعِنَا آمْينْ.",
            FR: "Psaume de notre père David, le prophète et le roi, que sa bénédiction soit sur nous tous, Amen!",
            EN: "",
        },
        psalmEnd: {
            COP: "Ⲁⲗⲗⲏⲗⲟⲩⲓⲁ",
            AR: "هَلَِيلُويا",
            FR: "Alléluia",
            EN: "Hallelujah",
        },
        praxisIntro: {
            AR: "الإبركسيس فَصْلٌ مِنْ أَعْمَالِ آبِائِنَا الرُسُلِ الأَطْهَارِ، الحَوارِيِّنَ، المَشْمُولِينَ بِنِعْمَةِ الرُّوحِ القُدُسِ، بَرَكَتْهُمُ المُقَدَّسَةِ فَلْتَكُنْ مَعْكُمْ يا آبَائِي وإخْوَتِي آمْينْ.",
            FR: "Praxis, Actes de nos pères les apôtres, que leurs saintes bénédictions reposent sur nous. Amen!",
            COP: "ϮⲠⲣⲁⲝⲉⲱⲛ ⲧⲱⲛ ⲁ̀ⲅⲓⲱⲛ ⲛ̀ⲁ̀ⲡⲟⲥⲧⲟⲗⲱⲛ ⲧⲟⲁ̀ⲛⲁⲅⲛⲱⲥⲙⲁ : ⲡ̀ⲣⲁⲝⲓⲥ ⲛ̀ⲧⲉ ⲛⲉⲛⲓⲟϯ ⲛ̀ⲁ̀ⲡⲟⲥⲧⲟⲗⲟⲥ ⲉ̀ⲣⲉ ⲡⲟⲩⲥ̀ⲙⲟⲩ ⲉ̀ⲑⲟⲩⲁⲃ ϣⲱⲡⲓ ⲛⲉⲙⲁⲛ: ⲁ̀ⲙⲏⲛ.",
            EN: "",
        },
        praxisEnd: {
            AR: "لَمْ تَزَلْ كَلِمَةُ الرَبِّ تَنْموُ وتَعْتَزُ وتَكْثُر في هَذِه البَيْعَةِ وكُلِّ بَيْعَةٍ يا آبَائِي وإخْوَتِي آمين.",
            FR: "La parole du Seigneur croît, se multiplie et s’enracine dans la sainte Église de Dieu. Amen!",
            COP: "Ⲡⲓⲥⲁϫⲓ ⲇⲉ ⲛ̀ⲧⲉ ϮⲠⲟ̅ⲥ̅ ⲉϥⲉ̀ⲁⲓⲁⲓ ⲟⲩⲟϩ ⲉϥⲉ̀ⲁ̀ϣⲁⲓ: ⲉϥⲉ̀ⲁ̀ⲙⲁϩⲓ ⲟⲩⲟϩ ⲉϥⲉ̀ⲧⲁϫⲣⲟ: ϧⲉⲛ ϯⲁ̀ⲅⲓⲁ̀ ⲛ̀ⲉⲕⲕ̀ⲗⲏⲥⲓⲁ̀ ⲛ̀ⲧⲉ Ⲫϯ: ⲁ̀ⲙⲏⲛ.",
            EN: "",
        },
        synaxariumIntro: {
            AR: `اليوم theday من شهر themonth المبارك، أحسن الله استقباله وأعاده علينا وأَنْتُمْ مَغْفُورِي الخَطَايَا والآثَامِ مِنْ قِبَلْ مَرَاحِمْ الرَبِّ يا آبَائِي وإخْوتِي آمين.`,
            FR: "Le theday du mois copte themonth ",
            EN: "We are the theday day of the themonth of () ",
        },
        propheciesIntro: {
            AR: '',
            FR: '',
            EN: '',
            COP: '',
        },
        propheciesEnd: {
            AR: 'مجداً للثالوث الأقدس إلهنا،إلى الأبد، وأبد الأبد آمين.',
            FR: 'Gloire soit à la Sainte Trinité notre Dieu pour les siècles des siècles. Amen !',
            EN: '',
            COP: '',
        }
    };
}
function bookOfHours() {
    return {
        //The first element is the array that will be populated with the text tables. The second element is the sequence of the hour's psalms
        H1: [
            [1, 2, 3, 4, 5, 6, 8, 11, 12, 14, 15, 18, 24, 26, 62, 66, 69, 112, 142],
            getLabel({
                AR: "بَاكِرْ",
                FR: "Matin",
                EN: "Morning"
            }),
        ],
        H3: [
            [19, 22, 23, 25, 28, 29, 33, 40, 42, 44, 45, 46],
            getLabel({
                AR: "السَاعَةِ الثَالِثَةِ",
                FR: "3ème heure",
                EN: "Third Hour",
            }),
        ],
        H6: [
            [53, 56, 60, 62, 66, 69, 83, 84, 85, 86, 90, 92],
            getLabel({
                AR: "السَاعَةِ السَادِسَةِ",
                FR: "6ème heure",
                EN: "6th Hour",
            }),
        ],
        H9: [
            [95, 96, 97, 98, 99, 100, 109, 110, 111, 112, 114, 115],
            getLabel({
                AR: "السَاعَةِ التَاسِعَةِ",
                FR: "9ème heure",
                EN: "9th Hour",
            }),
        ],
        H11: [
            [116, 117, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128],
            getLabel({
                AR: "السَاعَةِ الحَادِيَةِ عَشْرِ (الغروب)",
                FR: "11ème heure",
                EN: "11th Hour",
            }),
        ],
        H12: [
            [129, 130, 131, 132, 133, 136, 137, 140, 141, 145, 146, 147],
            getLabel({
                AR: "السَاعَةِ الثانية عَشْرِ (النوم)",
                FR: "12ème heure",
                EN: "12th Hour",
            }),
        ],
        HV: [
            [
                4, 6, 12, 15, 24, 26, 66, 69, 22, 42, 56, 85, 90, 96, 109, 114, 115, 120, 128, 129, 130, 131, 132, 133, 136, 140, 145, 118,
            ],
            getLabel({
                AR: "صَلاةِ السِتَارْ",
                FR: "Femeture du voile",
                EN: "Closing of the Veil",
            }),
        ],
        HMD1: [
            [3, 6, 12, 69, 85, 90, 116, 117, 118],
            getLabel({
                AR: "الخِدْمَة الأولى مِن صَلاةِ نِصْفِ الليل",
                FR: "Miniuit 1er service",
                EN: "Mid Night 1st Service",
            }),
        ],
        HMD2: [
            [119, 120, 121, 122, 123, 124, 125, 126, 127, 128],
            getLabel({
                AR: "الخِدْمَة الثانِيَة مِنْ صَلاةِ نِصْفِ الليل",
                FR: "Miniuit 2ème service",
                EN: "Mid Night 2nd Service",
            }),
        ],
        HMD3: [
            [129, 130, 131, 132, 133, 136, 137, 140, 141, 145, 146, 147],
            getLabel({
                AR: "الخِدْمَة الثَالِثَةِ مِنْ صَلاةِ نِصْفِ الليل",
                FR: "Miniuit 3ème service",
                EN: "Mid Night 3rd Service",
            }),
        ],
    };
}
[
    Sequences,
    bookOfHours,
    ReadingsIntrosAndEnds,
].forEach(obj => Object.freeze(obj));
Btn.MainMenu = new Button({
    btnID: "btnMain",
    label: getLabel({
        AR: "العودة إلى القائمة الرئيسية",
        FR: "Retour au menu principal",
    }),
    backGroundImage: "url(./assets/btnMassBackground.jpg)",
    onClick: () => {
        Btn.MainMenu.children = [
            Btn.Mass,
            Btn.IncenseOffice,
            Btn.DayReadings,
            Btn.BookOfHours,
            Btn.Psalmody,
            Btn.Bible
        ];
        if (copticReadingsDate === copticFeasts.PalmSunday) {
            Btn.MainMenu.children.splice(Btn.MainMenu.children.length - 1, 0, Btn.HW);
            Btn.MainMenu.children.splice(Btn.MainMenu.children.indexOf(Btn.Psalmody), 1);
        }
        ;
        if (Season === Seasons.HolyWeek)
            Btn.MainMenu.children = [Btn.HW, Btn.BookOfHours];
        if (Kiahk.includes(Season))
            Btn.Psalmody.label = getLabel({
                AR: "الإبصلمودية الكيهكية",
                FR: "Psalmodie de Kiahk",
            });
        if (localStorage.editingMode === "true")
            Btn.MainMenu.children.push(Btn.Edit);
        [defaultLanguage, foreingLanguage].forEach(lang => getBibleVersion(lang, false));
    },
});
Btn.GoToPreviousMenu = new Button({
    btnID: "btnGoBack",
    label: getLabel({ AR: "السابق", FR: "Retour", EN: "Go Back" }),
    backGroundImage: "url(./assets/btnMassBackground.jpg)",
    onClick: () => {
        scrollToTop(); //scrolling to the top of the page
    },
});
Btn.Mass = new Button({
    btnID: "btnMass",
    label: getLabel({ AR: "القداسات", FR: "Messes", EN: "Mass" }),
    onClick: (returnChildren = false) => {
        if (!Btn.Mass.children)
            Btn.Mass.children = [
                Btn.IncenseMorning,
                Btn.MassUnBaptised,
                Btn.MassBaptised
            ];
        if (returnChildren)
            return Btn.Mass.children;
    },
});
Btn.MassUnBaptised = new Button({
    btnID: "btnMassUnBaptised",
    label: getLabel({
        AR: "قٌدَّاسِ المَوْعُوظِينَ",
        FR: "Liturgie du Verbe",
        EN: "Unbaptised Mass",
    }),
    docFragment: new DocumentFragment(),
    languages: [...prayersLanguages],
    onClick: () => {
        //Adding children buttons to btnMassUnBaptised
        Btn.MassUnBaptised.children = Btn.DayReadings.onClick(true);
        let btnsPrayersSequence = Sequences().Mass.Unbaptized;
        (function adaptAlleluiaFayBiBiAndTayshoury() {
            Btn.MassUnBaptised.prayersSequence = adaptPrayersSequence();
            function adaptPrayersSequence() {
                //If we are not during a fast period or we are during a fast period but today is either Saturday or Sunday, or a Lord Feast, we will remove Hallelujah Ge Evmevi and Tishoury, in order to keep Hallelujah Faybibi and Tayshouri
                if (!isFast
                    ||
                        [0, 6].includes(weekDay)
                    ||
                        lordFeasts.find(date => [copticDate, copticReadingsDate].includes(date))
                    ||
                        copticFeasts.Coptic29th)
                    return btnsPrayersSequence
                        .filter(title => ![Prefix.massCommon + "AlleluiaFayBiBiFast", Prefix.massCommon + "Tishoury"].includes(splitTitle(title)[0]));
                else
                    return ifIsFast();
                function ifIsFast() {
                    if (!isFast)
                        return;
                    if ([Seasons.GreatLent, Seasons.JonahFast].includes(Season)) {
                        //We are either during the week days of the Great Lent, or the 3 days of Jonah Fast
                        [
                            ["AlleluiaFayBiBiFast", "AlleluiaFayBiBi&D=$Seasons.GreatLent"], //Replacing "Halleljah Ge Evmevi" with "Halleluja E Ikhon"
                            ["Tishoury", "TishouryGreatLent"]
                        ] //Replacing "Tishoury" with "Ensoty Tishoury"
                            .forEach(array => btnsPrayersSequence[btnsPrayersSequence.indexOf(Prefix.massCommon + array[0])] = Prefix.massCommon + array[1]);
                    }
                    //Else, we will remove 'Hellulja Fay Bibi'and keep only 'Hellulja Ge Evmev'i". We will also remove Tayshoury in order to keep only Tishoury 
                    return btnsPrayersSequence
                        .filter(title => ![Prefix.massCommon + "AlleluiaFayBiBi", Prefix.massCommon + "Tayshoury"].includes(splitTitle(title)[0]));
                }
            }
            ;
        })();
        scrollToTop();
        return Btn.MassUnBaptised.prayersSequence;
    },
    afterShowPrayers: async (btn = Btn.MassUnBaptised) => {
        let btnDocFragment = btn.docFragment;
        if (Btn.Prosternation.children?.includes(btn))
            return insertBookOfHoursButton();
        Btn.IncenseMorning.afterShowPrayers(btn); //By calling the afterShowPrayers() of btnIncenseMorning and passing btnMassUnbaptised as argument, the function will call hideGodHaveMercyOnUsIfBishop() and will return. This will create an expandable button for the "PrayThatGodHaveMercyOnUs" dicaon response
        (function insertHisFoundationsAndGodHaveMercy() {
            if (![Seasons.GreatLent, Seasons.JonahFast].includes(Season))
                return; //The following only applies during the Great Lent the 3 days of Jonah Fast (not the 4th day) that's why we check if isFast === true
            if ([6, 0].includes(todayDate.getDay()))
                return;
            let titles = [
                Prefix.commonPrayer + "WeHaveBeenSavedWithYou",
                Prefix.massCommon + "HisFoundations",
                Prefix.incenseDawn + "GodHaveMercyOnUsRefrain",
            ];
            selectElementsByDataSet(btnDocFragment, titles[0], { equal: true }, 'root').forEach(el => el.remove()); //We remove the existing 'Sotis Amen' prayer
            let tables = titles.map(title => findTable(title) || undefined); //We retrieve the 3 tables by their titles
            if (!tables || tables.length < 1)
                return;
            const anchor = findAnchor(`${Prefix.massCommon}AbsolutionForTheFather`, btnDocFragment); //This is the html element before which we will insert the retrived tables
            if (!anchor)
                return console.log('The anchor was not found');
            insertTablesBeforeAnchor(tables, anchor, prayersLanguages);
        })();
        const readingsAnchor = findAnchor(`${Prefix.anchor}Readings`, btnDocFragment); //this is the html element before which we will insert all the readings and responses
        if (!readingsAnchor)
            return console.log('The anchor was not found');
        (function insertIntercessionsHymnsForSeasons() {
            let seasonalIntercessions = MassCommonArray.filter((table) => RegExp('Intercessions\.\*D=').test(Title(table))
                &&
                    (tableMatchingDates(Title(table), [copticDate, Season])));
            if (seasonalIntercessions.length < 1)
                return console.log("No Seasonsal Intercession Hymns");
            seasonalIntercessions = getUniqueValuesFromArray(seasonalIntercessions);
            let anchor;
            if ([Seasons.PentecostalDays, Seasons.Ascension].includes(Season))
                selectElementsByDataSet(btnDocFragment, 'IntercessionsStMaykel', { includes: true }, 'root').forEach(div => div.remove()); //We remove the intercessions of St. Maykel because they will be replaced by those of the Pentocostal days
            seasonalIntercessions.forEach(table => {
                anchor = setIntercessionsAnchor(Title(table));
                if (!anchor)
                    return;
                insertTablesBeforeAnchor([table], anchor, getLanguages(Title(table)));
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
                const htmlDivs = selectElementsByDataSet(btnDocFragment, Prefix.massCommon + insertion, { startsWith: true }); //!We must specify that this is a "startWith" search of the dataRoot
                if (!htmlDivs || htmlDivs.length < 1)
                    return;
                return htmlDivs[htmlDivs.length - 1].nextElementSibling;
            }
        })();
        (function insertBiEhmotGharExpandable() {
            //After inserting the Intercessions hyms, we will isnert an expandable for Bi Ehmot Ghar
            const biEhmotGhar = new Button({
                btnID: 'btnBiEhmotGhar',
                label: getLabel({
                    AR: "بي إهموت غار",
                    FR: "Ⲡⲓϩ̀ⲙⲟⲧ ⲅⲁⲣ"
                }),
                cssClass: css.inlineButton,
                languages: prayersLanguages,
                docFragment: new DocumentFragment(),
                prayersSequence: [Prefix.massCommon + "BiEhmotGhar"],
            });
            const IAghabi = new Button({
                btnID: 'btnIAghabi',
                label: getLabel({
                    AR: "إي آغابي",
                    FR: "Ⲏⲁ̀ⲅⲁⲡⲏ"
                }),
                cssClass: css.inlineButton,
                languages: prayersLanguages,
                docFragment: new DocumentFragment(),
                prayersSequence: [Prefix.massCommon + "IAghabi"],
            });
            insertExpandableBtn([biEhmotGhar, IAghabi], readingsAnchor, 'beforebegin', 'resp');
        })();
        insertBookOfHoursButton();
        await insertMassReadingsAndResponses();
        async function insertMassReadingsAndResponses() {
            const Intros = ReadingsIntrosAndEnds();
            let specialResponse;
            //St. Paul
            await insertMassReading(Prefix.stPaul, [Intros.stPaulIntro,
                Intros.stPaulEnd]);
            (function insertCatholiconResponse() {
                let cathResp = CatholiconResponsesArray.filter(tbl => tableMatchingDates(Title(tbl), [Season, copticDate]));
                if (cathResp.length < 1)
                    cathResp = CatholiconResponsesArray.filter(tbl => Title(tbl) === Prefix.catholiconResponse + css.Title);
                if (cathResp.length < 1)
                    return;
                const response = new Button({
                    btnID: 'btnCatholiconResponse',
                    label: getLabel({
                        AR: cathResp[0][0][prayersLanguages.indexOf('AR') + 1], FR: cathResp[0][0][prayersLanguages.indexOf('FR') + 1]
                    }),
                    cssClass: css.inlineButton,
                    docFragment: new DocumentFragment(),
                    onClick: () => {
                        let langs;
                        cathResp.map((table) => {
                            langs = getLanguages(Title(table));
                            showPrayers({
                                table: table,
                                languages: langs,
                                position: response.docFragment,
                                clearContainerDiv: false,
                                clearRightSideBar: false
                            });
                        });
                    }
                });
                insertExpandableBtn([response], readingsAnchor, 'beforebegin');
            })();
            //Catholicon
            await insertMassReading(Prefix.Catholicon, [Intros.CatholiconIntro,
                Intros.CatholiconEnd]);
            (function insertPraxisResponse() {
                //!Caution, we must start by inserting the Praxis Response before inserting the Praxis reading
                specialResponse = [];
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
                        PraxisResponsesArray.filter((table) => !Title(table)?.includes('&D=$saintsFeasts.') && tableMatchingDates(Title(table), [copticDate, copticReadingsDate])); //We look for a response for the copticDate or copticReadingsDate, and we exclude responses for saints feasts
                if (specialResponse.length < 1)
                    specialResponse = PraxisResponsesArray.filter((table) => tableMatchingDates(Title(table), [Season])); //We look for a response for the Season
                if (isStMaryFeast || copticDay === '21' || specialResponse.length < 1)
                    return ifNoSpecificResponse();
                else
                    return ifSpecificResponse();
                function ifSpecificResponse() {
                    if (Season === Seasons.GreatLent) {
                        // During the Great Lent, we should get  2 tables ('Sundays', and 'Week') for this season. We will keep the relevant table accoding to the day of the week
                        weekDay === 0 || weekDay === 6 ?
                            specialResponse =
                                specialResponse.filter((table) => Title(table)?.includes("Sundays&D="))
                            :
                                specialResponse =
                                    specialResponse.filter((table) => Title(table)?.includes("Week&D="));
                    }
                    if (Season === Seasons.ApostlesFast || copticDate === copticFeasts.Apostles)
                        specialResponse = specialResponse.filter((tbl) => !['beforeCatholicon', 'afterPraxis'].find(w => Title(tbl).includes(w)));
                    //We insert the special response between the first and 2nd rows
                    specialResponse = insertTablesBeforeAnchor(getUniqueValuesFromArray(specialResponse), readingsAnchor, prayersLanguages)[0];
                    insertSaintsResponse(specialResponse);
                }
                ;
                function ifNoSpecificResponse() {
                    let noSeasonResponse = findTable(Prefix.praxisResponse, PraxisResponsesArray) || undefined;
                    if (!noSeasonResponse)
                        return;
                    noSeasonResponse = insertTablesBeforeAnchor([noSeasonResponse], readingsAnchor, getLanguages(Prefix.praxisResponse))[0];
                    insertSaintsResponse(noSeasonResponse);
                }
                ;
                function insertSaintsResponse(responses) {
                    if (!responses)
                        return;
                    const anchor = responses.find(div => div?.dataset.anchor === `${Prefix.anchor}Saints`);
                    if (!anchor)
                        return console.log('The anchor was not found'); //If no placeHolder is found, it means that we are during a special Season (not a 'NoSeason' period), and no placeHolder for the saints response is included
                    if (!Object.values(saintsFeasts).includes(copticDate))
                        return; //It means that today is not a saint feast
                    specialResponse = PraxisResponsesArray.filter((table) => Title(table)?.includes('&D=$saintsFeasts.') && tableMatchingDates(Title(table), [copticDate]));
                    if (specialResponse.length < 1)
                        return;
                    insertTablesBeforeAnchor(specialResponse, anchor, getLanguages(Prefix.praxisResponse));
                }
            })();
            //Praxis
            await insertMassReading(Prefix.praxis, [Intros.praxisIntro,
                Intros.praxisEnd]);
            (function insertAfterPraxisResponse() {
                if (Season !== Seasons.ApostlesFast && copticDate !== copticFeasts.Apostles)
                    return;
                //In the Aposltes fast, and Apostles feast, there is a special response after the Praxis and before the Synaxarium
                let title = 'afterPraxis&D=$';
                if (copticDate === copticFeasts.Apostles)
                    title += 'copticFeasts.Apostles';
                else if (Season === Seasons.ApostlesFast)
                    title += 'Seasons.ApostlesFast';
                insertTablesBeforeAnchor(PraxisResponsesArray.filter(tbl => RegExp(title.replace('$', '\\$')).test(Title(tbl))), readingsAnchor, getLanguages(Prefix.praxisResponse));
            })();
            await insertSynaxarium();
            await insertAgiosAndGospel();
            async function insertSynaxarium() {
                if (Season === Seasons.PentecostalDays)
                    return; //We do not read the Synaxarium during the 50 Pentecostal days
                let intro = { ...Intros.synaxariumIntro };
                Object.entries(intro)
                    .forEach(entry => intro[entry[0]] =
                    entry[1]
                        .replace("theday", Number(copticDay).toString())
                        .replace("themonth", copticMonths[Number(copticMonth)][entry[0]]));
                await insertMassReading(Prefix.synaxarium, [intro,
                    undefined], copticDate); //!Caution: we must pass the copticDate for the 'date' argument, otherwise it will be set to the copticReadingsDate by default, and we will get the wrong synaxarium
                //We will reverse the langauges
                let introHTML = selectElementsByDataSet(btnDocFragment, Prefix.synaxarium + "&D=" + copticDate)[1];
                if (!introHTML || introHTML.children.length < 1)
                    return console.log('Didn\'t find the Synaxarium');
                introHTML.children[0].insertAdjacentElement("beforebegin", introHTML.children[0]);
            }
            ;
            async function insertAgiosAndGospel() {
                (function insertSepcialAgiosIfFeast() {
                    const AgiosTable = findAgios();
                    if (!AgiosTable)
                        return console.log("Didn't find the special Agios table in PrayersArray");
                    (function adaptToAscension() {
                        if (Season !== Seasons.Ascension)
                            return; //i.e. if we are between the Pentecoste & the Assumption feasts: day 40 to day 49
                        const agios = findTable(Prefix.commonPrayer + "AgiosPart1", CommonArray);
                        if (!agios)
                            return; //We will retrieve the 3rd paragraph of the ordinary Agios Osios Hymn ('For He Raised and Ascended to the Heaveans'...etc.)
                        [3, 4, 5].forEach(index => AgiosTable[AgiosTable.length - index] = agios[agios.length - 1]); //Replacing the 3 Agios paragraphs with the Ascension paragraph
                    })();
                    insertTablesBeforeAnchor([AgiosTable], readingsAnchor?.nextElementSibling, getLanguages(Title(AgiosTable)));
                    function findAgios() {
                        let [dates, today] = ['copticFeasts', undefined];
                        if ([copticFeasts.EntryToEgypt, copticFeasts.CanaWedding].includes(copticDate))
                            today = copticDate;
                        else if ([copticFeasts.PalmSunday, copticFeasts.HolyFriday].includes(copticReadingsDate))
                            today = copticReadingsDate;
                        else if (Season === Seasons.CrossFeast)
                            today = copticFeasts.HolyFriday; //!We retrieve the HolyFriday Agios table
                        else if ([Seasons.PentecostalDays, Seasons.Ascension].includes(Season)) {
                            today = Seasons.PentecostalDays; //!The date in the title is assigned to the PenetcostalDays Season only for both seasons
                            dates = 'Seasons';
                        }
                        else if ([Seasons.Nativity, Seasons.Baptism].includes(Season)) {
                            today = Season;
                            dates = 'Seasons';
                        }
                        return Agios(today, dates);
                        function Agios(today, dates) {
                            const table = (title) => findTable(title, CommonArray) || undefined;
                            const agios = Prefix.commonPrayer + "Agios";
                            if (!today)
                                return table(agios);
                            today = Object.entries(eval(dates)).find(entry => entry[1] === today)[0]; //Returning the name of the key pointing to the date/season
                            return table(`${agios}&D=${dates}.${today}`);
                        }
                    }
                })();
                await insertGospelReadingAndResponses({
                    prefix: Prefix.gospelMass,
                    languages: getLanguages(Prefix.gospelMass),
                    container: btnDocFragment,
                    isMass: true,
                    clearContainer: false,
                });
            }
            ;
            async function insertMassReading(readingPrefix, [intro, end], date = copticReadingsDate) {
                if (!readingPrefix)
                    return;
                let cssClass = css.End, position = { beforeOrAfter: "beforebegin", el: readingsAnchor };
                let readings = await insertMassReadingOtherThanGospel(readingPrefix, position, btnDocFragment, false, date);
                if (!readings || readings.length === 0)
                    return;
                readings = readings.filter(div => div && div[0]);
                [end, intro].forEach(el => {
                    if (!el)
                        return;
                    if (el === intro) {
                        cssClass = css.Intro;
                        position.el = readings[0][1];
                    }
                    ;
                    const table = [
                        [
                            readingPrefix + cssClass,
                            intro?.AR || '',
                            intro?.FR || '',
                            intro?.EN || '',
                        ],
                    ];
                    insertTablesBeforeAnchor([table], position.el, Object.keys(el));
                });
            }
            ;
        }
        function insertBookOfHoursButton() {
            if ([
                copticFeasts.Resurrection,
                copticFeasts.Nativity,
                copticFeasts.Baptism,
            ].includes(copticReadingsDate))
                //In these feasts we don't pray any hour
                return alert("We do not pray the Book of Hours prayers on the Ressurection, Nativity (Kiahk 29th), and Baptism (Toubi 11th) feasts' masses");
            const hoursBtns = Btn.BookOfHours.onClick(relevantHours());
            (function createMasterButton() {
                const masterBtnDiv = document.createElement("div"); //This is the div that will contain the master button which shows or hides the Book of Hours sub buttons
                masterBtnDiv.classList.add(css.inlineButtonsContainer);
                masterBtnDiv.id = "masterBOHBtn";
                const masterBtn = new Button({
                    btnID: "BOH_Master",
                    label: getLabel({
                        AR: "الأجبية",
                        FR: "Agpia",
                    }),
                    onClick: () => {
                        //We toggle the div containing the buttons for each hour
                        let btnsDiv = document.getElementById('BOHBtnsDiv');
                        if (!btnsDiv)
                            return console.log('No btns div was found');
                        btnsDiv.classList.toggle(css.hidden);
                        if (btnsDiv.classList.contains(css.hidden)) {
                            btnsDiv.style.top = "";
                            btnsDiv.style.position = "";
                            createFakeAnchor(btnsDiv.id);
                        }
                    },
                });
                masterBtnDiv.prepend(createHtmlBtn({
                    btn: masterBtn,
                    btnsContainer: masterBtnDiv,
                    btnClass: css.inlineButton,
                    clear: true,
                    onClick: masterBtn.onClick,
                }));
                btnDocFragment.prepend(masterBtnDiv);
                createHtmlButtonForEachHour(masterBtnDiv);
            })();
            function createHtmlButtonForEachHour(masterBtnDiv) {
                //We will create an HTML div (role = button) and an expandable div for each hour
                const btnsDiv = insertExpandableBtn(hoursBtns, masterBtnDiv, 'afterend', 'BOH', false);
                btnsDiv.id = 'BOHBtnsDiv';
                btnsDiv.classList.add(css.hidden);
                Array.from(btnsDiv.children)
                    .forEach(htmlBtn => htmlBtn.addEventListener('click', () => {
                    scrollToTop();
                    const expandable = containerDiv.querySelector('#' + htmlBtn.id + 'Expandable');
                    if (!expandable)
                        return;
                    if (!expandable.classList.contains(css.hidden))
                        floatOnTopOrBottom(btnsDiv, true, '3px');
                    else
                        btnsDiv.style.position = 'relative';
                    const toBeCollapsed = Array.from(expandable.children)
                        .filter((div, index) => index > 0 && isTitlesContainer(div) || undefined); //!We exclude the first title div.
                    toBeCollapsed.forEach(div => collapseOrExpandText(div, true));
                }));
            }
            ;
            function relevantHours() {
                //args.mass is a boolean that tells whether the button prayersArray should include all the hours of the Book Of Hours, or only those pertaining to the mass according to the season and the day on which the mass is celebrated
                const hours = [1, 2, 3]; //Those are the 3rd, 6th and 9th hours
                if ([
                    Seasons.GreatLent,
                    Seasons.JonahFast,
                    Seasons.NativityParamoun,
                    Seasons.BaptismParamoun,
                ].includes(Season) &&
                    ![0, 6].includes(weekDay)
                //We are during the Great Lent or during the Nativity Paramoun or the Baptism Paramoun and today is a Friday. In such cases, we pray the 3rd, 6th, 9th, 11th, and 12th hours
                )
                    hours.push(4, 5);
                else if (Btn.Prosternation.children?.includes(btn)) {
                    hours.push(4, 5);
                    hours.shift();
                }
                else if (
                //We remove the 9th hour in the following days/periods
                !isFast
                    ||
                        [0, 6].includes(weekDay) //Whatever the period, if we are a Saturday or a Sunday, we pray only the 3rd and 6th Hours
                    ||
                        copticFeasts.Coptic29th //We deal with it as if we were on a Lord Feast
                )
                    hours.pop(); //we remove the 9th hour
                return hours;
            }
            ;
        }
        ;
    }
});
Btn.ReadingsStPaul = new Button({
    btnID: "btnReadingsStPaul",
    label: getLabel({
        AR: "البولس",
        FR: "Epître de Saint Paul"
    }),
    onClick: async () => {
        await insertMassReadingOtherThanGospel(Prefix.stPaul, { beforeOrAfter: undefined, el: undefined }, containerDiv, true);
        scrollToTop(); //scrolling to the top of the page
    },
});
Btn.ReadingsCatholicon = new Button({
    btnID: "btnReadingsCatholicon",
    label: getLabel({
        AR: "الكاثوليكون",
        FR: "Catholicon",
    }),
    onClick: async () => {
        await insertMassReadingOtherThanGospel(Prefix.Catholicon, { beforeOrAfter: undefined, el: undefined }, containerDiv, true);
        scrollToTop(); //scrolling to the top of the page
    },
});
Btn.ReadingsPraxis = new Button({
    btnID: "btnReadingsPraxis",
    label: getLabel({
        AR: "الإبركسيس",
        FR: "Actes",
        EN: "Acts",
    }),
    onClick: async () => {
        await insertMassReadingOtherThanGospel(Prefix.praxis, { beforeOrAfter: undefined, el: undefined }, containerDiv, true);
        scrollToTop(); //scrolling to the top of the page
    },
});
Btn.ReadingsSynaxarium = new Button({
    btnID: "btnReadingsSynaxarium",
    label: getLabel({
        AR: "السنكسار",
        FR: "Synaxarium",
        EN: "Synaxarium",
    }),
    onClick: async () => {
        await insertMassReadingOtherThanGospel(Prefix.synaxarium, { beforeOrAfter: undefined, el: undefined }, containerDiv, true, copticDate); //!CAUTION: notice that we passed to the function the readingDate argument because during the GreatLent period and the Jonah Fast, the copticReadingsDate is formatted like 'GL10', we hence pass the copticDate to prevent the function from searching for the Synaxarium of the day by the copticReadingsDate
        scrollToTop(); //scrolling to the top of the page
    },
});
Btn.PropheciesMorning = new Button({
    btnID: "btnReadingsPropheciesDawn",
    label: getLabel({
        AR: "نبوات باكر",
        FR: "Propheties",
        EN: "Propheties",
    }),
    onClick: async () => {
        await insertMassReadingOtherThanGospel(Prefix.prophecies, { beforeOrAfter: undefined, el: undefined }, containerDiv, true);
        scrollToTop(); //scrolling to the top of the page
    },
});
Btn.DayReadings = new Button({
    btnID: "btnDayReadings",
    label: getLabel({
        AR: "قراءات اليوم",
        FR: "Lectures du jour",
        EN: "Day's Readings",
    }),
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
        Btn.DayReadings.children = [
            Btn.GospelMorning,
            Btn.GospelVespers,
            Btn.ReadingsStPaul,
            Btn.ReadingsCatholicon,
            Btn.ReadingsPraxis,
            Btn.ReadingsSynaxarium,
            Btn.GospelMass
        ];
        (function adaptToGreatLentAndJonahFast() {
            if (mass)
                return; //None of the following applies if the function is called within the Unbaptized mass context
            if (![Seasons.GreatLent, Seasons.JonahFast].includes(Season))
                return;
            if (copticReadingsDate === copticFeasts.Resurrection)
                return;
            (function ifWeAreNotSaturday() {
                if (weekDay === 6)
                    return;
                //We remove the Vespers because there are no Vespers during the Great Lent except for Saturday. Also there are no vespers during the Jonah Fast which lasts for 4 days from Monday to Thursday
                Btn.DayReadings.children = Btn.DayReadings.children.filter(b => b !== Btn.GospelVespers);
            })();
            (function ifWeAreSunday() {
                //If we are a Sunday and the GospelNight button is not included, we will add it.
                if (weekDay > 0)
                    return;
                if (Btn.DayReadings.children?.includes(Btn.GospelNight))
                    return;
                Btn.DayReadings.children.push(Btn.GospelNight);
            })();
            (function ifWeAreNotSunday() {
                if ([0, 6].includes(weekDay))
                    return;
                //Also if we  are not a Sunday, we will remove the Night Gospel, if included
                Btn.DayReadings.children = Btn.DayReadings.children.filter((btn) => btn !== Btn.gospelNight);
                if (Btn.DayReadings.children?.includes(Btn.PropheciesMorning))
                    return;
                //If we are not a Sunday (i.e., we are during any week day other than Sunday and Saturday), we will  add the Prophecies button to the list of buttons
                Btn.DayReadings.children.unshift(Btn.PropheciesMorning);
            })();
        })();
        (function ifMass() {
            if (!mass)
                return;
            Btn.DayReadings.children = Btn.DayReadings.children.filter(btn => ![Btn.GospelVespers, Btn.GospelMorning, Btn.GospelNight, Btn.PropheciesMorning].includes(btn)); //We remove the Morning and Vespers Gospel buttons
            if ([Seasons.PentecostalDays, Seasons.Ascension].includes(Season))
                Btn.DayReadings.children = Btn.DayReadings.children.filter(child => child !== Btn.ReadingsSynaxarium); //We remove the Synaxarium button
        })();
        return Btn.DayReadings.children;
    },
});
Btn.BookOfHours = new Button({
    btnID: "btnBookOfHours",
    label: getLabel({ AR: "الأجبية", FR: "Agpia", EN: "Book of Hours" }),
    docFragment: new DocumentFragment(),
    parentBtn: Btn.MainMenu,
    languages: [...prayersLanguages],
    children: [],
    onClick: (mass) => {
        if (!mass && Btn.BookOfHours.children.length > 1)
            return Btn.BookOfHours.children;
        const BOH = Object.entries(bookOfHours());
        if (mass)
            return getHoursBtns(mass.map(hour => BOH[hour])); //If this function is called in the "Unbaptized Mass" context, it will return Button elements for each hour passed to it
        (function addAChildButtonForEachHour() {
            Btn.BookOfHours.children = getHoursBtns(BOH);
            (function addOtherPrayersBtns() {
                const otherPrayers = ['BeforeCommunion', 'AfterCommunion'];
                const otherPrayersBtn = new Button({
                    btnID: 'otherPrayersBtn',
                    label: getLabel({
                        AR: 'صلوات أخرى',
                        FR: 'Diverses prières',
                        EN: 'Various Prayers'
                    }),
                    onClick: () => otherPrayersBtn.children = otherPrayersBtn.children || otherPrayers.map((title, index) => otherPrayerBtn(`${Prefix.bookOfHours}${title}`, index)),
                });
                Btn.BookOfHours.children.push(otherPrayersBtn);
                function otherPrayerBtn(title, index) {
                    const table = findTable(title, BookOfHoursArray) || undefined;
                    if (!table)
                        return undefined;
                    return new Button({
                        btnID: `btnOtherPrayer${index + 1}`,
                        label: getLabel({
                            AR: table[0][Btn.BookOfHours.languages.indexOf('AR') + 1],
                            FR: table[0][Btn.BookOfHours.languages.indexOf('FR') + 1]
                        }),
                        onClick: () => {
                            showPrayers({
                                table: table,
                                languages: Btn.BookOfHours.languages,
                                position: containerDiv,
                                clearContainerDiv: true,
                                clearRightSideBar: true
                            });
                            scrollToTop();
                        },
                    });
                }
            })();
        })();
        scrollToTop();
        function getHoursBtns(hours) {
            if (!hours)
                return;
            return hours.map(([name, [psalms, label]], index) => {
                const hourBtn = new Button({
                    btnID: "btn" + name,
                    label: label,
                    docFragment: new DocumentFragment(),
                    parentBtn: Btn.BookOfHours,
                    prayersSequence: [`${Prefix.bookOfHours}${name}Title`],
                    afterShowPrayers: () => hourBtnAfterShowPrayer(hourBtn.docFragment, name, psalms, hours.length - index, mass !== undefined),
                });
                if (mass)
                    hourBtn.cssClass = css.inlineButton;
                return hourBtn;
            });
            function hourBtnAfterShowPrayer(docFragment, hourName, psalms, index, mass) {
                const getHourName = (index) => BOH[index][0];
                const langs = getLanguages(Prefix.bookOfHours);
                (function insertHourIntroAndPsalms() {
                    const anchor = findAnchor(`${Prefix.anchor}Psalms`, docFragment);
                    if (!anchor)
                        return console.log('The anchor was not found');
                    (function insertHourIntro() {
                        if (mass)
                            return; //We don't insert the 'Thanks Giving' prayer and 'Psalm 50' if the function is called for the purposes of the mass liturgy
                        const intro = [
                            ...[1, 2, 3, 4].map((i) => `${Prefix.commonPrayer}ThanksGivingPart${i}`),
                            Prefix.bookOfHours + "Psalm50",
                        ]; //Adding the 'Thanks Giving' and 'Psalm 50' to the titles sequence
                        if (hourName === getHourName(0))
                            intro.push(...["LetsKneel", "StPaul", "Intro"].map(title => `${Prefix.bookOfHours}${hourName}${title}`)); //If this is the 1st Hour (Dawn), it has a specific sequence of prayers after the "Thanks Giving" and "Psalm50"
                        else if (hourName === getHourName(7))
                            intro.push(Prefix.psalmody + 'WakeUpSonsOfLight'); //If this is the 1st Midnight Service, we add the 'Wake Up Sons of Light' for the 1st Service of Midnight)
                        const tables = intro.map(title => findTable(title, getArrayFromPrefix(title)) || undefined);
                        insertTablesBeforeAnchor(tables, anchor, langs);
                    })();
                    (function insertPsalms() {
                        if (localStorage.displayMode === displayModes[1])
                            return; //We don't show the psalms in "Display Mode"
                        const tables = psalms.map(psalm => findTable(`${Prefix.bookOfHours}Psalm${psalm}`, BookOfHoursArray) || undefined);
                        insertTablesBeforeAnchor(tables, anchor, langs);
                    })();
                })();
                (function insertHourFinalPrayers() {
                    const anchor = findAnchor(`${Prefix.anchor}End`, docFragment);
                    if (!anchor)
                        return console.log('The anchor was not found');
                    insertTablesBeforeAnchor(getTables(), anchor, langs);
                    function getTables() {
                        const [OurFather, Creed, KyrielisonMass] = ["OurFatherInHeaven", "Creed", "Kyrielison41"].map(title => Prefix.commonPrayer + title);
                        const [AngelsPrayers, HailMaria, WeExaltYou, Agios, KyrielisonNoMass, HolyLord, FinalPrayer, Absolution, HourEnd] = ["AngelsPrayer", "WeSaluteYouMary", "WeExaltYouStMary", "Agios", "Kyrielison41", "HolyLordOfSabaot", "AllHoursFinalPrayer", "PriestsAbsolution", `${hourName}End`].map(title => Prefix.bookOfHours + title);
                        if (mass)
                            return ifMass();
                        else
                            return ifNotMass();
                        function ifNotMass() {
                            return getSequence().map(title => findTable(title, getArrayFromPrefix(title)) || undefined);
                            function getSequence() {
                                const sequence = [
                                    AngelsPrayers,
                                    Agios,
                                    OurFather,
                                    HailMaria,
                                    WeExaltYou,
                                    Creed,
                                    KyrielisonNoMass,
                                    HolyLord,
                                    OurFather,
                                    HourEnd,
                                    FinalPrayer,
                                    OurFather,
                                ];
                                if (hourName === getHourName(5))
                                    sequence.shift(); //If it is the 12th (Night) Hour, we remove the Angels Prayer from endOfHourPrayersSequence
                                else if (hourName === getHourName(9)) {
                                    sequence.splice(0, 1, KyrielisonNoMass, HolyLord, OurFather, Prefix.bookOfHours + hourName + "2ndGospel"); //replacing the "Angels Praising" by this sequence
                                    //Inserting the Priests Absolution at the end
                                    sequence.push(Prefix.bookOfHours + hourName + Absolution);
                                }
                                ;
                                if (![
                                    getHourName(0), //Morning/Dawn
                                    getHourName(5), //Night
                                    getHourName(9), //Veil
                                ].includes(hourName))
                                    sequence.splice(0, 6); //For any other hour, we remove all the titles before KyrielisonIntro
                                return sequence;
                            }
                        }
                        ;
                        function ifMass() {
                            return getSequence().map(title => findTable(title, getArrayFromPrefix(title)) || undefined);
                            function getSequence() {
                                //!index passed to the function = the differece between hours.length and the index of the hour 
                                if (index < 2) {
                                    //This is the last hour btn (hours.length - (hours.length-1)=1)
                                    return [KyrielisonMass];
                                }
                                else if (index < 3) {
                                    //this is the before last hour btn (hours.length - (hours.length-2)=2)
                                    return [Agios, OurFather, HailMaria];
                                }
                                else {
                                    //Any other hour before the 2 last
                                    return [KyrielisonNoMass, HolyLord, OurFather];
                                }
                            }
                        }
                    }
                })();
                const children = Array.from(docFragment.children);
                (function adapt118thPsalm() {
                    if (hourName !== getHourName(6))
                        return; //If we are in the 'Setar Hour', we need to remove from Psalm 118 all the paragraphs except paragraphs 20, 21, and 22.
                    children
                        .filter((div) => div.dataset.root?.startsWith(Prefix.bookOfHours + "Psalm118"))
                        .forEach((div, index) => index > 0 && index < 39 ? div.remove() : div);
                })();
                (function changeClasses() {
                    (function ifNotMass() {
                        if (mass)
                            return;
                        children
                            .filter(div => !isTitlesContainer(div))
                            .forEach(div => changeClass(div, getActor(css.NoActor)));
                    })();
                    function changeClass(div, css) {
                        if (!div)
                            return;
                        div.classList.forEach(c => {
                            if (c !== 'Row')
                                div.classList.remove(c);
                        });
                        div.classList.add(css);
                    }
                })();
                (function removeCopticVersionAndNotes() {
                    children.forEach((div) => {
                        div.querySelectorAll("p.COP, p.CA")
                            .forEach(parag => parag.remove());
                        div.innerHTML = div.innerHTML
                            .replaceAll(RegExp(`${eighthNoteCode}|${beamedEighthNoteCode}`, 'g'), '');
                    });
                })();
            }
            ;
        }
    },
});
Btn.Psalmody = new Button({
    btnID: "btnPsalmody",
    label: getLabel({
        AR: "الإبصلمودية السنوية",
        FR: "Psalmodie (anuelle)",
        EN: "Psalmody (anual)"
    }),
    onClick: () => {
        if (Btn.Psalmody.children)
            return Btn.Psalmody.children;
        const days = [
            {
                AR: 'الأحد',
                FR: 'dimanche',
                EN: 'Sunday',
            },
            {
                AR: 'الاثنين',
                FR: 'lundi',
                EN: 'Monday',
            },
            {
                AR: 'الثلثاء',
                FR: 'mardi',
                EN: 'Tuesday',
            },
            {
                AR: 'الأربعاء',
                FR: 'mercredi',
                EN: 'Wednesday',
            },
            {
                AR: 'الخميس',
                FR: 'jeudi',
                EN: 'Thursday',
            },
            {
                AR: 'الجمعة',
                FR: 'vendredi',
                EN: 'Friday',
            },
            {
                AR: 'السبت',
                FR: 'samedi',
                EN: 'Saturday',
            },
        ];
        const todayPraise = {
            AR: 'تسبحة اليوم',
            FR: 'Louange du jour',
            EN: 'Louange du jour',
        };
        const otherDay = {
            AR: 'تسبحة يوم ',
            FR: 'Louange du ',
            EN: 'Louange du ',
        };
        Btn.Psalmody.children = [
            createBtn(weekDay, getLabel(todayPraise)),
            ...[0, 1, 2, 3, 4, 5, 6]
                .filter(d => d !== weekDay)
                .map(d => createBtn(d, getLabel({ AR: otherDay.AR + days[d].AR, FR: otherDay.FR + days[d].FR, EN: otherDay.EN + days[d].EN })))
        ];
        checkIfInSpecialSeason(todayDate); //We reset the Season to today
        return Btn.Psalmody.children;
        function createBtn(day, label) {
            let date = todayDate.getTime();
            day > weekDay ? date += (day - weekDay) * calendarDay : date -= (weekDay - day) * calendarDay;
            checkIfInSpecialSeason(new Date(date)); //We change the Season according to the date
            let season = Season;
            let btn = new Button({
                btnID: 'today',
                label: label,
                languages: prayersLanguages,
                docFragment: new DocumentFragment(),
                onClick: () => customizeSequence(btn, day, season)
            });
            return btn;
        }
        function customizeSequence(btn, day = weekDay, season = Season) {
            scrollToTop();
            const Psalmody = Sequences().Psalmody;
            if (Kiahk.includes(season))
                return btn.prayersSequence = Psalmody.Kiahk;
            btn.prayersSequence =
                Psalmody.Year
                    .map(title => customizeTitle(title));
            function customizeTitle(title) {
                let WA = isWatosOrAdam(day, season);
                if (title.includes('XXX'))
                    title = title.replace('XXX', WA);
                if (RegExp(Prefix.anchor + 'Psaly\.*Seasons.').test(title))
                    return title.replace(Prefix.anchor, Prefix.psalmody) + Object.entries(Seasons).find(entry => entry[1] === Season)[0]; //We replace "Seasons.Ascension" by "Seasons.PentecostalDays"
                else if (RegExp(Prefix.anchor + 'Psaly\.*copticFeasts.').test(title) && Object.entries(copticFeasts).find(entry => entry[1] === copticDate))
                    return title.replace(Prefix.anchor, Prefix.psalmody) + Object.entries(copticFeasts).find(entry => entry[1] === copticDate)[0];
                else if (title.startsWith(Prefix.anchor))
                    return title.replace(Prefix.anchor, Prefix.psalmody) + '&D=' + day.toString();
                else if (RegExp(Prefix.psalmody + 'TheotokiesConclusion' + WA).test(title) && [Seasons.PentecostalDays, Seasons.Ascension].includes(Season))
                    return title.replace(WA, '&D=$Seasons.PentecostalDays||$Seasons.Ascension');
                else
                    return title;
            }
        }
        ;
    },
});
Btn.IncenseMorning = new Button({
    btnID: "btnIncenseDawn",
    label: getLabel({
        AR: "بُخُورِ بَاكِرِ",
        FR: "Encens du Matin",
        EN: "Morning Incense Office"
    }),
    languages: [...prayersLanguages],
    docFragment: new DocumentFragment(),
    onClick: () => {
        Btn.IncenseMorning.children = []; //!We need to reinitiate the children each time because in some cases (like in case btnLakkan is clicked) there are buttons added to btnIncenseMorning children
        Btn.IncenseMorning.prayersSequence = [...Sequences().Incense].filter((title) => !title?.startsWith(Prefix.incenseVespers)); //We will remove all the Incense Vespers titles from the prayersSequence Array
        if (weekDay === 6)
            //If we are a Saturday, we pray only the 'Departed Litany', we will hence remove the 'Sick Litany' and the 'Travellers Litany'
            Btn.IncenseMorning.prayersSequence.splice(Btn.IncenseMorning.prayersSequence.indexOf(Prefix.incenseDawn + "SickLitany"), 3, //We remove the SickPrayer, the TravelersParayer and the Oblations Prayer
            Prefix.incenseVespers + "DepartedLitany");
        else if (weekDay === 0 || lordFeasts.includes(copticDate))
            //If we are a Sunday or the day is a Lord's Feast, or the oblation is present, we remove the 'Travellers Litany' and keep the 'Sick Litany' and the 'Oblation Litany'
            Btn.IncenseMorning.prayersSequence = Btn.IncenseMorning.prayersSequence.filter((title) => !title.startsWith(Prefix.incenseDawn + "TravelersLitany"));
        scrollToTop();
        return Btn.IncenseMorning.prayersSequence;
    },
    afterShowPrayers: async (btn = Btn.IncenseMorning, gospelPrefix = Prefix.gospelMorning) => {
        const docFragment = btn.docFragment;
        if (!docFragment)
            return;
        (function adaptThanksGiving() {
            const parags = Array.from(selectElementsByDataSet(docFragment, Prefix.commonPrayer + "ThanksGiving", { startsWith: true }, 'root')[7]?.children); //Those are the paragraphs that conatin the sentence that will be changed according to each liturgy
            if (!parags || parags.length < 1)
                return;
            let thanks;
            if (btn === Btn.IncenseMorning)
                thanks = variable.thanksMorning;
            else if (btn === Btn.IncenseVespers)
                thanks = variable.thanksVespers;
            else if (btn === Btn.MassUnBaptised)
                thanks = variable.thanksMass;
            else if (btn.btnID === Btn.Lakkan.btnID)
                thanks = variable.thanksLakan;
            if (!thanks)
                return;
            getLanguages(Prefix.commonPrayer)
                .forEach(lang => {
                const parag = parags?.find(p => p.classList.contains(lang));
                if (!parag)
                    return;
                parag.innerHTML = parag.innerHTML.replace(variable.thanksVespers[lang], thanks[lang]);
            });
        })();
        (function hideGodHaveMercyOnUsIfBishop() {
            const dataRoot = Prefix.commonPrayer +
                "PrayThatGodHaveMercyOnUs";
            const godHaveMercyHtml = selectElementsByDataSet(docFragment, dataRoot); //We select all the paragraphs not only the paragraph for the Bishop
            if (godHaveMercyHtml.length < 1)
                return; //This may occur if 'Diacon' prayers are hidden
            const length = godHaveMercyHtml?.length;
            godHaveMercyHtml
                .filter((htmlRow) => godHaveMercyHtml?.indexOf(htmlRow) > 0 &&
                godHaveMercyHtml?.indexOf(htmlRow) < length - 2)
                .forEach((htmlRow) => htmlRow.remove());
            if (btn === Btn.MassUnBaptised)
                godHaveMercyHtml[length - 2].remove(); //We remove the second last paragraph
            else
                godHaveMercyHtml[length - 1].remove(); //We remove the last paragraph
            let godHaveMercy = findTable(dataRoot, CommonArray); //We get the entier table not only the second row. Notice that the first row of the table is the row containing the title
            if (!godHaveMercy)
                return console.log("Didn't find table Gode Have Mercy");
            godHaveMercy = godHaveMercy.slice(1, 4);
            const haveMercy = new Button({
                btnID: 'godHaveMercy',
                label: getLabel({
                    AR: godHaveMercy[0][prayersLanguages.indexOf('AR')], //This is the arabic text of the lable
                    FR: godHaveMercy[0][prayersLanguages.indexOf('FR')], //this is the French text of the label
                }),
                cssClass: css.inlineButton,
                docFragment: new DocumentFragment(),
                onClick: () => {
                    showPrayers({
                        table: godHaveMercy,
                        languages: Btn.MassUnBaptised.languages,
                        position: haveMercy.docFragment,
                        clearContainerDiv: false,
                        clearRightSideBar: false,
                    });
                }
            });
            insertExpandableBtn([haveMercy], godHaveMercyHtml[0].nextElementSibling, 'beforebegin');
        })();
        if (![Btn.IncenseMorning, Btn.IncenseVespers].includes(btn))
            return; //The following code/functions apply only to btnIncenseMorning & btnIncenseVespers
        await insertCymbalVersesAndDoxologies(btn);
        await insertGospelReadingAndResponses({
            prefix: gospelPrefix,
            languages: getLanguages(gospelPrefix),
            container: docFragment,
            isMass: true,
            clearContainer: false,
        });
        adaptConcludingHymn(docFragment);
        if (btn !== Btn.IncenseMorning)
            return; //The functions from this point on concern the Morning Incense service only
        await insertPropheciesAndEklonomin(); //!We need to await for it because otherwise, the div elements will not be appended to the docFragment when setCss() is called.
        (function insertAdamDoxolgiesBtn() {
            //We add an expandable button for the Incense Dawn Adam Doxologies
            const doxologies = new Button({
                btnID: 'btnAdamDoxologies',
                label: getLabel({
                    AR: "ذكصولوجيات باكر آدام",
                    FR: "Doxologies Adam du Matin",
                    EN: "Adam Doxologies",
                }),
                cssClass: css.inlineButton,
                languages: Btn.IncenseMorning.languages,
                docFragment: new DocumentFragment(),
                prayersSequence: [Prefix.doxologies + "DawnAdam"],
            });
            insertExpandableBtn([doxologies], docFragment.children[0], 'beforebegin');
        })();
        (function insertLakkanBtn() {
            if (copticDate === '1005')
                insertLakkan(copticFeasts.Baptism);
            else if (copticDate === copticFeasts.Apostles)
                insertLakkan(copticFeasts.Apostles);
            else if (copticReadingsDate === copticFeasts.HolyThursday)
                insertLakkan(copticReadingsDate);
            function insertLakkan(date) {
                const lakkanBtn = new Button({
                    btnID: Btn.Lakkan.btnID, //!We must give the button same ID as Btn.Lakkan because we use this id later on in adapting the 'Thanks Giving' prayer to the Lakkan liturgy
                    label: Btn.Lakkan.label,
                    docFragment: new DocumentFragment(),
                    onClick: () => Btn.Lakkan.onClick(date, lakkanBtn),
                    afterShowPrayers: async () => await Btn.Lakkan.afterShowPrayers(date, lakkanBtn)
                });
                Btn.IncenseMorning.children = [lakkanBtn];
                const children = docFragment.children;
                if (copticDate === '1005')
                    insertExpandableBtn([lakkanBtn], children[0], 'beforebegin', 'Lakan');
                else
                    insertExpandableBtn([lakkanBtn], children[children.length - 1], 'afterend', 'Lakan');
            }
            ;
        })();
        /**
       * Inserts the Incense Office Doxologies And Cymbal Verses according to the Coptic feast or season
       * @param {Button} btn - The button calling the function when clicked
       */
        async function insertCymbalVersesAndDoxologies(btn) {
            if (!btn.docFragment)
                return;
            const dayFeasts = (() => {
                const dates = [copticDate];
                if (!RegExp('\\d{4}').test(copticReadingsDate))
                    dates.push(copticReadingsDate); //We do this in order to avoid including a reading date of 4 digits, since the reading repeats more than once per year on other days than the feast day itself (eg. the 0511 copticReadingDate repeats several times not only on the Apostles feast). This will leave us only with the copticReadingsDate including letters: like GL, PNTL, JONAS, etc
                //We will first look if today is one of the copticFeasts list. If this is the case, we will retrieve the doxologies and cymbal verses specific to this feast (we assume that if one of these feasts, whether a Lord Feasts or not, falls within a given Season, the cymbal verses and doxologies of the feast will prevail over those of the Season). If today is not one of the copticFeasts, we will  retrieve the cymbal verses and doxologies of the Season.
                const matching = Object.values(copticFeasts).find((date) => dates.includes(date)) || Season; //We check if today is one of the feasts in copticFeasts (we check not only the Coptic date, but we check also the copticReadingsDate because some feasts are referrenced by the copticReadings date : eg. Pntl39). If today is not one of the copticFeasts, we will retain the Season
                if (matching !== Seasons.NoSeason)
                    return [matching]; //If matching is not Seasons.NoSeason, we push the match feast or the season if any
            })();
            let anchor;
            (async function InsertCymbalVerses() {
                anchor = findAnchor(`${Prefix.anchor}CymbalVerses`, docFragment);
                if (!anchor)
                    return console.log("We didn't find the cymbal verses' anchor");
                let cymbals;
                if ([Seasons.JonahFast, Seasons.GreatLent].includes(Season) && ![0, 6].includes(weekDay))
                    //If we are during the Jonah Fast or during the Great Lent but not on a Saturday or a Sunday, the Cymbal Verses are not chanted, they are replaced by the Long Kyrielison and the Cymbal Verses End
                    cymbals = [findTable(Prefix.cymbalVerses + "End", CymbalVersesArray) || undefined];
                else
                    cymbals = getCymbalVerses();
                if (cymbals.length < 1)
                    return console.log("no cymbals were found by the provided sequence: ");
                insertTablesBeforeAnchor(cymbals, anchor.nextElementSibling, btn.languages);
                insertSaintsExpandable(Prefix.anchor + 'SaintsCymbals', Prefix.cymbalVerses, 'St(Mary|Maykel|Steven|John|Marc)', getLabel({
                    AR: 'أرباع القديسين',
                    FR: 'Autres saints',
                    EN: 'Other Saints',
                }));
                function getCymbalVerses() {
                    let sequence = [
                        Prefix.cymbalVerses + isWatosOrAdam(),
                        Prefix.cymbalVerses,
                    ];
                    if (dayFeasts)
                        dayFeasts.forEach((feast) => [
                            ...lordFeasts,
                            copticFeasts.Coptic29th,
                            Seasons.Nativity,
                            Seasons.Baptism,
                            Seasons.PentecostalDays,
                            Seasons.Ascension
                        ].includes(feast) //During Seasons.Nativity (i.e., between Nativity and Circumcision) and Seasons.Baptism(from Baptism to Cana Wedding), the Cymbals verses follow the pattern of any Lord Feast: it starts with "Amoyni Marin..." or "Ten O'osht", then the cymbal verses of the feast, and finally, the "Eb'oro enti ti hirini". 
                            ? insertFeastInSequence([Prefix.cymbalVerses + "LordFeastsEnd"], feast, 0, 0)
                            : insertFeastInSequence(sequence, feast, 1, 0)); //We always start with 'Amoyni Marin...' or with 'Tin O'osht...', so we will insert the feast element before the 2nd element, and will not delete anything
                    return Array.from(processSequence(sequence, Prefix.cymbalVerses));
                }
            })();
            (async function InsertCommonDoxologies() {
                const doxologiesAnchor = selectElementsByDataSet(btn.docFragment, Prefix.anchor + "Doxologies")[0];
                if (!doxologiesAnchor)
                    return console.log("Didn't find the anchor for doxologies");
                if (Object.values(apostlesFeasts)
                    .filter(date => ![apostlesFeasts.StMarc, apostlesFeasts.StPaul, apostlesFeasts.StJohnApostle].includes(date))
                    .includes(copticDate))
                    saintsFeasts.AnyPostle = copticDate; //We exclude the Apostles for whom we already have doxologies, and set the AnyApostle date to the copticDate
                let sequence = [
                    'WatosStMary',
                    'StMaykel',
                    'AllCelestialBeings',
                    'Apostles',
                    'StMarc',
                    'StGeorge',
                    'StMina',
                    'EndOfDoxologiesWatos',
                ].map(title => Prefix.doxologies + title);
                if (btn === Btn.IncenseVespers)
                    sequence[0] += 'Vespers';
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
                            ...Kiahk,
                            Seasons.GreatLent,
                            Seasons.JonahFast, //The Jonah doxology comes before St. Mary Doxolgy according to some sources
                            Seasons.PentecostalDays,
                            Seasons.Ascension
                        ].includes(feast))
                            index = 0; //If one of the dates in feast[] corresponds to any of the 'Lord's Feasts', it means we are in a Lord Feast. the doxologies of the feast will be placed at the begining of the doxologies. We follow the same rule for the doxologies of the PentecostalDays and the month of Kiahk
                        else if (copticFeasts.Coptic29th) {
                            index = 1;
                            sequence = sequence.splice(1, 1); //StMaykel's doxology will be replace by the StMalykel doxology for PentecostalDays
                        }
                        else if (excludedFeasts.includes(feast)) {
                            let feastIndex = sequence.indexOf(feast);
                            sequence.splice(2, 0, sequence[feastIndex]); //If it is one of the doxologies already included by default, we place it after St. Maykel
                            sequence.splice(feastIndex + 1, 1); //We then delete the element itself
                            index = undefined; //We set index to undefined in order to prevent insertFeastSequence from inserting any element in sequence
                        }
                        insertFeastInSequence(sequence, feast, index, 0);
                    });
                }
                let doxologies = Array.from(processSequence(sequence, Prefix.doxologies));
                if (doxologies.length === 0)
                    return console.log("Did not find any relevant doxologies");
                if (Season === Seasons.GreatLent) {
                    //For the Great Lent, there is a doxology for the Sundays and 4 doxologies for the week days
                    [0, 6].includes(weekDay) ?
                        doxologies = doxologies
                            .filter((tbl) => !/Week\d&D=\$Seasons.GreatLent/.test(Title(tbl)))
                        :
                            doxologies = doxologies
                                .filter((tbl) => !Title(tbl)?.includes("Sundays&D=$Seasons.GreatLent"));
                }
                insertTablesBeforeAnchor(doxologies, doxologiesAnchor.nextElementSibling, btn.languages);
                insertSaintsExpandable(Prefix.doxologies + "EndOfDoxologiesWatos", Prefix.doxologies, `(StMaykel|AllCelestialBeings|Apostles|StMarc|StGeorge|StMina)${Prefix.class}`, getLabel({
                    AR: 'قديسين آخرين',
                    FR: 'Autres saints',
                    EN: 'Other Saints',
                }));
            })();
            /**
             * Inserts an 'Expandable' button, which when clicked displays a list of buttons for each Saint cymbal verses or doxology
             * @param {string} dataRoot - the data-root of the element that will serve as anchor before which the master button will be inserted
             * @param {string}  prefix - the prefix (Prefix.cymbalVerses or Prefix.doxologies)
             * @param {string}  regExp - a Regular Expression allowing to filter the results
             * @returns
             */
            function insertSaintsExpandable(dataRoot, prefix, regExp, label) {
                const anchor = selectElementsByDataSet(docFragment, dataRoot, undefined, 'root')[0];
                if (!anchor)
                    return;
                const options = getArrayFromPrefix(prefix).filter(tbl => Title(tbl).startsWith(prefix + 'St') && !RegExp(regExp).test(Title(tbl)));
                if (options.length < 1)
                    return;
                const langs = getLanguages(prefix);
                const saints = options.map(table => {
                    const newBtn = new Button({
                        btnID: 'btn' + prefix + (options.indexOf(table) + 1).toString(),
                        label: getLabel({
                            AR: table[0][langs.indexOf('AR') + 1],
                            FR: table[0][langs.indexOf('FR') + 1],
                        }),
                        cssClass: css.inlineButton,
                        docFragment: new DocumentFragment(),
                        onClick: () => {
                            insertTablesBeforeAnchor([table], anchor, prayersLanguages);
                        }
                    });
                    return newBtn;
                });
                (function createMasterBtn() {
                    const id = 'Master' + prefix;
                    const masterDiv = document.createElement('div');
                    masterDiv.id = id;
                    masterDiv.classList.add(css.inlineButtonsContainer);
                    anchor.insertAdjacentElement('beforebegin', masterDiv);
                    const masterBtn = new Button({
                        btnID: 'btnMaster' + prefix,
                        label: label,
                        onClick: () => {
                            let btnsDiv = containerDiv.querySelector('#' + id + 'Btns');
                            if (btnsDiv)
                                return btnsDiv.classList.toggle(css.hidden);
                            insertExpandableBtn(saints, masterDiv, 'afterend', prefix)
                                .id = id + 'Btns';
                        }
                    });
                    createHtmlBtn({
                        btn: masterBtn,
                        btnsContainer: masterDiv,
                        btnClass: css.inlineButton,
                        clear: false,
                        onClick: masterBtn.onClick //!We need to set the onClick property otherwise it will be set to showChildBtnsOrPrayers(masterCymbal) which, at its turn, will call the setCSS() for the containerDiv (the container by default since masterCymbal does not have a docFragment) for the second time
                    });
                })();
            }
            ;
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
                let tables = new Set(), tablesArray = getArrayFromPrefix(prefix);
                sequence.map((tblTitle) => {
                    if (!tblTitle.startsWith(prefix)) //It means that the title is a Coptic date or a Season
                        tablesArray
                            //!CAUTION: we must use 'filter' not 'find' because for certain feasts there are more than one doxology
                            .filter((tbl) => tableMatchingDates(Title(tbl), [tblTitle]))
                            .forEach((tbl) => tables.add(tbl));
                    else
                        tables.add(findTable(tblTitle, tablesArray));
                });
                return tables;
            }
        }
        async function insertPropheciesAndEklonomin() {
            if (![Seasons.GreatLent, Seasons.JonahFast].includes(Season))
                return;
            if ([0, 6].includes(weekDay))
                return; //We are neither a Saturday nor a Sunday, we will hence display the Prophecies dawn buton
            const anchor = selectElementsByDataSet(docFragment, Prefix.anchor + "Prophecies", undefined, 'root')[0];
            const table = findTable(Prefix.prophecies + "&D=" + copticReadingsDate, ReadingsArrays.PropheciesDawnArrayFR);
            if (!table)
                return console.log("Didn't find Prophecies with the current date");
            const Prophecies = await retrieveReadingTableFromBible(table, getLanguages(Prefix.prophecies)) || [];
            (function insertProphecies() {
                if (!Prophecies)
                    return;
                const langs = getLanguages(Prefix.prophecies);
                //! This must come before inserting Eklonomin Taghonata
                const title = {
                    AR: 'نبوات باكر',
                    FR: 'Prophecies',
                    EN: 'Prophecies',
                };
                Prophecies[0] = [`${Title(Prophecies)}${css.Title}`, title[defaultLanguage], title[foreingLanguage] || ''];
                showPrayers({
                    table: Prophecies,
                    languages: langs,
                    position: { beforeOrAfter: 'beforebegin', el: anchor },
                    clearContainerDiv: false,
                    clearRightSideBar: false,
                });
            })();
            (function insertEklonominTaghonata() {
                //!We must insert the Prophecies before Eklonomin Taghonta
                const godHaveMercy = findTable(Prefix.incenseDawn + "GodHaveMercyOnUs&D=$Seasons.GreatLent", IncenseArray);
                if (!godHaveMercy)
                    return console.log("Didn't find God Have Mercy for Great Lent");
                showPrayers({
                    table: godHaveMercy,
                    languages: getLanguages(Prefix.incenseDawn),
                    position: { beforeOrAfter: 'beforebegin', el: anchor },
                    clearContainerDiv: false,
                    clearRightSideBar: false,
                });
            })();
        }
        ;
    },
});
Btn.IncenseVespers = new Button({
    btnID: "btn.IncenseVespers",
    label: getLabel({
        AR: "بُخُورِ عَشِيَّةَ",
        FR: "Encens Vêpres",
        EN: "Vespers Incense Office",
    }),
    docFragment: new DocumentFragment(),
    languages: [...prayersLanguages],
    onClick: () => {
        Btn.IncenseVespers.prayersSequence = [...Sequences().Incense].filter((title) => title !== Prefix.bookOfHours + "AngelsPrayer" &&
            !title.startsWith(Prefix.incenseDawn));
        scrollToTop();
        return Btn.IncenseVespers.prayersSequence;
    },
    afterShowPrayers: () => Btn.IncenseMorning.afterShowPrayers(Btn.IncenseVespers, Prefix.gospelVespers),
});
Btn.Lakkan = new Button({
    btnID: "btnLakkan",
    label: getLabel({
        AR: "صلاة اللقَّان",
        FR: "Cérémonie de la Bénédiction de l'eau",
        EN: 'Lakkan'
    }),
    onClick: (date, btn = Btn.Lakkan) => {
        if (!date)
            return;
        btn.prayersSequence = [Prefix.incenseDawn + "Anaphora&D=" + date];
    },
    afterShowPrayers: async (date, btn = Btn.Lakkan) => {
        if (!date)
            return;
        const Intros = ReadingsIntrosAndEnds();
        Btn.IncenseMorning.afterShowPrayers(btn); //We call it in order to hide the "Pray that God Have Mercy on Us" response for Pope and Bishop
        const lakan = {
            prophecies: [],
            stPaul: [],
            gospel: [],
            Agios: [],
            litany: findTable(Prefix.incenseDawn + 'LakanLitany&D=' + date) || undefined,
            cymbals: [],
            season: findTable(Prefix.massCommon + "SeasonalLitany&D=$Seasons." + Object.entries(Seasons).find(entry => entry[1] === naturalSeasons())[0]) || undefined,
            psalmResponse: [[Prefix.psalmResponse + date, ...prayersLanguages.map(lang => Intros.psalmEnd[lang] || '')]],
            gospelResponse: findTable(Prefix.gospelResponse + 'Lakan&D=' + date) || undefined,
            spasmosAdam: '',
        };
        if (date === copticFeasts.Baptism) {
            lakan.prophecies = ['HAB:3:12-19', 'ISA:35:1-2', 'ISA:40:1-25', 'ISA:9:1-2', 'BAR:3:36-End/4:1-4', 'EZK:36:24-29', 'EZK:47:1-9'];
            lakan.stPaul = ['1CO:10:1-13'];
            lakan.gospel = ['PSA:113:3-5', 'MAT:3:1-17'];
            lakan.Agios = findAgios(true);
            lakan.cymbals = [...findTable(Prefix.cymbalVerses + "&D=$Seasons.Baptism") || undefined, ...findTable(Prefix.cymbalVerses + "PopeAndBishop") || undefined, ...findTable(Prefix.cymbalVerses + "LordFeastsEnd") || undefined];
        }
        else if (date === copticFeasts.Apostles) {
            lakan.prophecies = ['EXO:15:22-End/16:1-1', 'EXO:30:17-30', 'ISA:1:16-26', 'ISA:35:1-10', 'ISA:43:16-End/44:1-6', 'ZEC:8:7-19', 'ZEC:14:8-11'];
            lakan.stPaul = ['HEB:10:22-32'];
            lakan.Agios = findAgios();
            lakan.gospel = ['PSA:50:7-7/50:10-10', 'JHN:5:1-18'];
            lakan.cymbals = findTable(Prefix.cymbalVerses + "&D=" + date) || undefined;
            lakan.spasmosAdam = Prefix.massCommon + "SpasmosAdamLong&D=$copticFeasts.Apostles";
        }
        else if (date === copticFeasts.HolyThursday) {
            lakan.prophecies = [];
            lakan.stPaul = ['1TI:4:9-End/5:1-10'];
            lakan.Agios = findAgios();
            lakan.gospel = ['PSA:50:9-9/50:12-12", "JHN:13:1-17'];
            lakan.cymbals = findTable(Prefix.cymbalVerses + "&D=" + date) || undefined;
        }
        ;
        (function adaptKissEachOther() {
            const KissEachOther = selectElementsByDataSet(btn.docFragment, Prefix.massCommon + "KissEachOther", undefined, 'root');
            if (KissEachOther.length < 1)
                return;
            KissEachOther[0].remove();
        });
        let anchor, languages = [defaultLanguage, foreingLanguage].filter(lang => lang);
        await insertBeforeAnchor();
        async function insertBeforeAnchor() {
            if (date === copticFeasts.Baptism) {
                await insert('StPaul', undefined, findTable(Prefix.massCommon + "Tayshoury") || undefined);
                await insert('StJohnHymn', undefined, findTable(Prefix.hymns + 'StJohnHymn' + date) || undefined); //!Missing in PrayersArray
                await insert('FeastHymn', undefined, findTable(Prefix.hymns + 'FeastHymn' + date) || undefined); //!Missing in PrayersArray
            }
            else if (date === copticFeasts.Apostles) {
                await insert('StPaul', undefined, findTable(Prefix.massCommon + "WeWorshipYouChrist") || undefined); //!Missing in PrayersArray
            }
            ;
            await insert('Cymbals', undefined, lakan.cymbals); //Inserting the relevant Cymbal Verses
            await insert('Prophecies', lakan.prophecies);
            await insert('StPaul', lakan.stPaul); //Inserting the St. Paul reading
            await insert('Agios', undefined, lakan.Agios); //Inserting Agios 
            await insert('PsalmResponse', undefined, lakan.psalmResponse);
            await insert('LakanGoseplResponse', undefined, lakan.gospelResponse);
            await insert('LakanLitany', undefined, lakan.litany); //Inserting the Lakan litany
            await insert('SeasonLitany', undefined, lakan.season); //Inserting the relevant "Crop/Rain/Harvest" litany
            await insert('SpasmosAdam', undefined, findTable(lakan.spasmosAdam) || undefined);
            async function insert(title, refs, reading) {
                anchor = findAnchor(`${Prefix.anchor}${title}`, btn.docFragment);
                if (!anchor)
                    return console.log('The Anchor was not found');
                if (reading)
                    return insertReading(reading, anchor, getLanguages(Title(reading)));
                if (!title || !refs)
                    return;
                if (title === 'Prophecies') {
                    reading = [[
                            `PropheciesHeader${css.Title}`,
                            "",
                            "Prophecies",
                            "",
                            "النبؤات"
                        ]];
                    insertReading(reading, anchor, prayersLanguages);
                }
                await Promise.all(refs.map(async (ref) => {
                    const table = [];
                    ["LakanProphecies", "LakanSermony"]
                        .forEach(title => table.push(...findTable(`${Prefix.HolyWeek}${title}`, ReadingsArrays.GospelNightArrayFR) || []));
                    if (date === copticFeasts.HolyThursday)
                        reading = await retrieveReadingTableFromBible(table, languages);
                    else
                        reading = await retrieveReadingTableFromBible([[Prefix.readingRef + ref]], languages);
                    if (!reading)
                        return;
                    if (title === 'StPaul') {
                        insertReading(getReadingIntroOrEnd(Intros.stPaulIntro, css.Intro), anchor, prayersLanguages); //We insert the StPaul ReadingIntro in all cases
                    }
                    insertReading(reading, anchor, languages); //We insert the reading text itself
                    if (title === 'Prophecies' && date !== copticFeasts.HolyThursday) {
                        insertReading(getReadingIntroOrEnd(Intros.propheciesEnd, css.expand), anchor, prayersLanguages); //We do not insert the ReadingEnd for the holyThursday because it is already included in the table
                    }
                    else if (title === 'StPaul') {
                        insertReading(getReadingIntroOrEnd(Intros.stPaulEnd, css.End), anchor, prayersLanguages); //We insert the StPaul ReadingEnd in all cases
                    }
                    else if (title === 'Psalm') {
                        reading = findTable(Prefix.bookOfHours + "Alleluia", BookOfHoursArray) || undefined;
                        replaceClass(reading, 'Assembly');
                        insertReading(reading, anchor, getLanguages(Prefix.bookOfHours));
                    }
                }));
                function insertReading(reading, anchor, langs) {
                    if (!reading)
                        return;
                    insertTablesBeforeAnchor([reading], anchor, langs);
                }
                function getReadingIntroOrEnd(text, css) {
                    return [[
                            Prefix.same + css,
                            ...prayersLanguages.map(lang => text[lang] || '')
                        ]];
                }
                function replaceClass(reading, newClass) {
                    reading[0][0] = `${splitTitle(Title(reading))[0]}${Prefix.class}${newClass}`;
                }
            }
        }
        ;
        await insertGospelReadingAndResponses({
            isMass: true,
            prefix: Prefix.gospelMass,
            container: btn.docFragment,
            clearContainer: false,
            gospel: lakan.gospel.map(ref => getGospel(Prefix.gospelMass, ref))
        });
        function getGospel(prefix, ref) {
            ref.startsWith('PSA') ? prefix += 'Psalm' : prefix += 'Gospel';
            return [[prefix + '&D=' + copticDate + css.Title], [Prefix.readingRef + ref]];
        }
        function findAgios(baptism = false) {
            const Agios = Prefix.commonPrayer + "Agios";
            if (baptism)
                return findTable(`${Agios}&D=$Seasons.Baptism`, CommonArray) || undefined;
            else
                return [...findTable(Agios, CommonArray) || undefined, ...findTable(Prefix.commonPrayer + "GloryToFatherSonSpirit") || undefined];
        }
    },
});
Btn.Prosternation = new Button({
    btnID: "btnProsternation",
    label: getLabel({
        AR: "صَلاة السَّجْدَة",
        FR: "Prière de la Prosternation",
        EN: "Prosternation Prayer",
    }),
    onClick: () => {
        const agios = Prefix.commonPrayer + "Agios";
        const services = [
            {
                Prophecies: 'DEU:5:23-End/6:1-3',
                StPaul: '1CO:12:28-End/13:1-12',
                Agios: [`${agios}&D=$Seasons.PentecostalDays`], //!needs to be checked, do we pray the entire sequence or such the agios part? if so we will need to adapt it.
                Gospel: ['PSA:97:7-8/97:1-1', 'JHN:17:1-26'],
                psalmResponse: Prefix.psalmResponse + "&D=$Seasons.Ascension",
                Cymbals: [Prefix.cymbalVerses + "&D=$Seasons.Ascension"],
                Litanies: [
                    Prefix.incenseDawn + "SickLitany",
                    Prefix.incenseDawn + "TravelersLitany",
                    Prefix.massCommon + "SeasonalLitany" + anyDay,
                    Prefix.massCommon + "PlacesLitany",
                ],
            },
            {
                Prophecies: 'DEU:6:17-25',
                StPaul: '1CO:13:13-End/14:1-17',
                Agios: [agios],
                Gospel: ['PSA:115:12-13', 'LUK:24:36-53'],
                psalmResponse: Prefix.psalmResponse + anyDay + "||$Seasons.Kiahk",
                Cymbals: [Prefix.cymbalVerses + "Adam"],
                Litanies: [
                    Prefix.massCommon + "PresidentLitany",
                    Prefix.incenseVespers + "DepartedLitany",
                    Prefix.incenseDawn + "OblationsLitany",
                    Prefix.massCommon + 'CatechumensLitany'
                ]
            },
            {
                Prophecies: 'DEU:16:1-18',
                StPaul: '1CO:14:18-40',
                Agios: [agios],
                Gospel: ['PSA:65:2-2/71:9-9', 'JHN:4:1-24'],
                psalmResponse: Prefix.psalmResponse + anyDay + "||$Seasons.Kiahk",
                Cymbals: [Prefix.cymbalVerses + "Watos"],
                Litanies: [
                    Prefix.commonPrayer + "ChurchLitany", //!needs check + convert font
                    Prefix.commonPrayer + "PopeLitany",
                    Prefix.commonPrayer + "RequestedPrayersLitany",
                    'Assembly Litany' //!missing
                ]
            },
        ];
        const labelBase = {
            AR: 'السَّجْدَة XXX',
            FR: 'XXX Prosternation',
            EN: 'XXX Prosternation'
        };
        const labelNumber = [
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
        const children = services.map(s => {
            let n = services.indexOf(s);
            return new Button({
                btnID: Btn.Prosternation.btnID + n.toString(),
                label: customizeLable(n),
                docFragment: new DocumentFragment(),
                onClick: () => btnOnClick(n),
                afterShowPrayers: () => btnAfterShowPrayers(n)
            });
        });
        Btn.Prosternation.children = children;
        function customizeLable(i) {
            const label = { ...labelBase };
            label[defaultLanguage] = label[defaultLanguage].replace('XXX', labelNumber[i][defaultLanguage]);
            return getLabel(label);
        }
        async function btnOnClick(n, getTables = false) {
            let btn = Btn.Prosternation.children[n];
            let tables = await returnTables(n);
            if (getTables)
                return tables;
            tables.forEach(table => {
                showPrayers({
                    position: btn.docFragment,
                    clearContainerDiv: true,
                    clearRightSideBar: true,
                    table: table,
                    languages: getLanguages(Title(table))
                });
            });
            async function returnTables(index) {
                let service = services[index], clone = [...Sequences().Prosternation];
                (function customizeSequence() {
                    if (index === 0) {
                        clone.unshift(Prefix.bookOfHours + "Psalm116", Prefix.psalmody + "Hos4", Prefix.psalmody + "PsalyOnTheotoky&D=0", Prefix.psalmody + "IntroductionToAdamTheotoky", Prefix.psalmody + "Theotoky" + '&D=0', Prefix.psalmody + "TheotokiesConclusion&D=$Seasons.PentecostalDays||$Seasons.Ascension", Prefix.psalmody + "PsalyAdamProsternation&D=$copticFeasts.Pentecoste");
                    }
                    else if (index === 2) {
                        clone.splice(clone.indexOf(Prefix.anchor + 'Agios'), 0, Prefix.hymns + `PentecosteHymn&D=$copticFeasts.PentecosteVespers${css.Title}`); //!missing hymn
                        let doxlogies = [
                            Prefix.incenseVespers + "LordKeepUsThisNight",
                            Prefix.bookOfHours + "Agios", //!This is the Agios of the Book of Hours not the Agios hymn of the Mass before the Gospel (which starts with Prefix.commonPrayer) 
                            Prefix.commonPrayer + "OurFatherInHeaven",
                            Prefix.commonPrayer + "InTheNameOfJesusOurLord",
                            Prefix.bookOfHours + "WeSaluteYouMary",
                            Prefix.doxologies + "WatosStMary",
                            Prefix.doxologies + "AllCelestialBeings",
                            Prefix.doxologies + "Apostles",
                            Prefix.doxologies + "StMarc",
                            Prefix.doxologies + "Pope", //!missing
                            Prefix.doxologies + "EndOfDoxologiesWatos",
                            Prefix.bookOfHours + "WeExaltYouStMary",
                            Prefix.commonPrayer + "Creed",
                            Prefix.commonIncense + "EfnotiNaynan",
                        ];
                        clone.splice(clone.indexOf(Prefix.anchor + "Doxologies"), 1, ...doxlogies);
                        let End = [
                            Prefix.commonPrayer + "BlockInTheNameOfOurLord",
                            Prefix.commonPrayer + "BlockIriniPassi",
                            Prefix.commonPrayer + "AbsolutionForTheSon",
                            Prefix.commonPrayer + "KyriElieson3Times",
                            Prefix.commonIncense + "LiturgyEnd"
                        ];
                        clone.push(...End);
                    }
                    ;
                })();
                let resolved = await Promise.all(clone.map(async (title) => {
                    if (title.startsWith(Prefix.anchor))
                        return await processTitle(title);
                    else
                        return await processTitle(title.replace('XXX', (index + 1).toString()), true);
                }));
                return resolved.filter(table => table);
                async function processTitle(title, singleTable = false) {
                    if (singleTable) {
                        return findTable(title) || undefined;
                    }
                    ;
                    let prop = title.replace(Prefix.anchor, '');
                    if (!service[prop] || ['Gospel', 'psalmResponse'].includes(prop))
                        return; //The 'Gospel' property is handeled by the btnAfterShowPrayers() function. We insert the reading in the anchor
                    if (prop === 'StPaul')
                        return await processReference(service[prop], Prefix.stPaul);
                    else if (prop === 'Prophecies')
                        return await processReference(service[prop], Prefix.prophecies);
                    else
                        return processProp(service[prop]);
                    function processProp(prop) {
                        let table = prop.map(t => [Prefix.placeHolder, t]);
                        table.unshift([Prefix.commonPrayer]); //!we add a first row with the Prefix.commonPrayer as first element in order to be able to retrieve the PrayersArray languages from the title prefix
                        return table;
                    }
                }
                async function processReference(refs, prefix) {
                    return await retrieveReadingTableFromBible([[prefix + 'Prosternation'], [Prefix.readingRef + refs]], getLanguages(prefix));
                }
            }
        }
        async function btnAfterShowPrayers(n) {
            let btn = Btn.Prosternation.children[n];
            Btn.IncenseMorning.afterShowPrayers(btn); //We call this function in order to insert an Expandable for the "God Have Mercy On Us" Diacon response
            if (n === 2)
                adaptConcludingHymn(btn.docFragment);
            else if (n === 0)
                Btn.MassUnBaptised.afterShowPrayers(btn); //We insert the Book of Hours prayers (as an expandable button)
            await insertGospel();
            async function insertGospel() {
                let gospel = services[n].Gospel;
                await insertAfterAnchor('Psalm', gospel[0]);
                await insertAfterAnchor("Gospel", gospel[1]);
                await insertAfterAnchor("PsalmResponse", services[n].psalmResponse, Prefix.psalmResponse);
                async function insertAfterAnchor(title, ref, prefix) {
                    let anchor = findAnchor(title);
                    if (!anchor)
                        return console.log('We did not find the anchor for ', title);
                    let table, langs;
                    prefix ? langs = getLanguages(prefix) : langs = getLanguages(Prefix.gospelMass);
                    if (prefix)
                        table = findTable(title) || undefined;
                    else
                        table = await retrieveReadingTableFromBible([[Prefix.readingRef + ref]], langs);
                    if (!table)
                        return;
                    insertTablesBeforeAnchor([table], anchor, langs);
                    function findAnchor(dataRoot) {
                        return selectElementsByDataSet(btn.docFragment, Prefix.anchor + dataRoot + anyDay, undefined, 'root')[0];
                    }
                }
            }
            ;
            scrollToTop();
        }
    },
});
Btn.IncenseOffice = new Button({
    btnID: "btnIncenseOffice",
    label: getLabel({
        AR: "رفع بخور باكر أو عشية",
        FR: "Encens Matin et Vêpres",
        EN: 'Morning & Vespers Incense'
    }),
    onClick: (returnChildren = false) => {
        //setting the children of the btnIncenseOffice. This must be done by the onClick() in order to reset them each time the button is clicked
        Btn.IncenseOffice.children = [Btn.IncenseMorning, Btn.IncenseVespers];
        //show or hide the PropheciesDawn button if we are in the Great Lent or JonahFast:
        if (copticReadingsDate === copticFeasts.Pentecoste)
            Btn.IncenseOffice.children = [Btn.IncenseMorning, Btn.Prosternation];
        //We will remove the Vespers Button during if we are during the Great Lent or the Jonah Fast, and we are not a Saturday
        if ([Seasons.GreatLent, Seasons.JonahFast].includes(Season) &&
            weekDay !== 6)
            Btn.IncenseOffice.children = [Btn.IncenseMorning];
        if (returnChildren)
            return Btn.IncenseOffice.children;
    },
});
Btn.MassStBasil = new Button({
    btnID: "btnMassStBasil",
    label: getLabel({ AR: "باسيلي", FR: "Saint Basil", EN: "St Basil" }),
    docFragment: new DocumentFragment(),
    languages: [...prayersLanguages],
    onClick: () => {
        const Mass = Sequences().Mass;
        //Setting the standard mass prayers sequence
        Btn.MassStBasil.prayersSequence = [
            ...Mass.StBasil,
            ...Mass.CallOfHolySpirit,
            ...Mass.Litanies,
            ...Mass.Communion,
        ];
        //We scroll to the beginning of the page after the prayers have been displayed
        scrollToTop();
        return Btn.MassStBasil.prayersSequence;
    },
    afterShowPrayers: (btn = Btn.MassStBasil, prefix = Prefix.massStBasil) => {
        let btnDocFragment = btn.docFragment;
        (function insertSecondReconciliationBtn() {
            if (![Btn.MassStBasil, Btn.MassStCyril].includes(btn))
                return;
            const reconciliation2 = findTable(prefix + "Reconciliation2") || undefined;
            if (!reconciliation2)
                return console.log("Didn't find reconciliation");
            const btnRecon = new Button({
                btnID: "SecondReconcil",
                label: getLabel({
                    AR: reconciliation2[0][btn.languages.indexOf('AR') + 1],
                    FR: reconciliation2[0][btn.languages.indexOf('FR') + 1],
                }),
                cssClass: css.inlineButton,
                docFragment: new DocumentFragment(),
                onClick: () => {
                    showPrayers({
                        table: reconciliation2,
                        languages: btn.languages,
                        position: btnRecon.docFragment,
                        clearContainerDiv: false,
                        clearRightSideBar: false,
                    });
                }
            });
            const anchor = findAnchor(`${prefix}Reconciliation"`, btnDocFragment)?.nextElementSibling;
            if (!anchor)
                console.log('The anchor was not found');
            const btnsDiv = insertExpandableBtn([btnRecon], anchor, 'beforebegin');
            btnsDiv.children[0]?.addEventListener("click", () => {
                selectElementsByDataSet(containerDiv, prefix + "Reconciliation", undefined, 'group')
                    .forEach((row) => row.classList.toggle(css.hidden));
            }); //We hide or unhide the main reconcilaition prayer when the second conciliation is displayed or hidden
        })();
        (function addRedirectionButtons() {
            //We create a list of the masses to which we will insert redirection button
            let redirectToList = [
                Btn.MassStBasil,
                Btn.MassStGregory,
                Btn.MassStCyril,
                Btn.MassStJohn,
            ].filter(b => ![btn, Btn.MassStJohn].includes(b)); //We remove the btn of the mass from the redirection list and the mass of st John
            let select;
            //Adding 2 buttons to redirect the other masses at the begining of the Reconciliation
            select = selectElementsByDataSet(btnDocFragment, prefix + "Reconciliation", { endsWith: true });
            redirectToAnotherMass([...redirectToList], {
                beforeOrAfter: "afterend",
                el: select[0],
            }, "RedirectionToReconciliation");
            //Adding 2 buttons to redirect to the other masses at the Anaphora prayer After "By the intercession of the Virgin St. Mary"
            select = selectElementsByDataSet(btnDocFragment, Prefix.massCommon + "SpasmosAdamShort");
            redirectToAnotherMass([...redirectToList], {
                beforeOrAfter: "afterend",
                el: select[select.length - 1],
            }, "RedirectionToAnaphora");
            //Adding 2 buttons to redirect to the other masses before Agios
            select = selectElementsByDataSet(btnDocFragment, prefix + "Agios");
            redirectToAnotherMass([...redirectToList], {
                beforeOrAfter: "afterend",
                el: select[0].previousElementSibling,
            }, "RedirectionToAgios");
            //Adding 2 buttons to redirect to the other masses before the Call upon the Holy Spirit
            select = selectElementsByDataSet(btnDocFragment, Prefix.massCommon +
                "Amen3WeProclaimYourDeath");
            redirectToAnotherMass([...redirectToList], {
                beforeOrAfter: "afterend",
                el: select[0],
            }, "RedirectionToLitanies");
            //Adding 2 buttons to redirect to the other masses before the Fraction Introduction
            select = selectElementsByDataSet(btnDocFragment, "FractionIntroduction", { endsWith: true });
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
                    return console.log('We didn\'t find the anchor');
                let redirectTo = [];
                btns.map((btn) => {
                    //for each button in the btns array, we will create a fake Button and will set its onClick property to a function that retrieves the text of the concerned mass
                    const newBtn = new Button({
                        btnID: `GoTo_${btn.btnID.split("btn")[1]}_From_${position.el.dataset.root}`,
                        label: btn.label,
                        cssClass: css.inlineButton,
                        onClick: async () => {
                            await displayChildButtonsOrPrayers(btn); //We simulated as if btn itself has been clicked, which will show all its prayers, children, etc.
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
        (function insertAdamAndWatosSpasmos() {
            //We insert it during the Saint Mary Fast and on every 21th of the coptic month
            let spasmosTitle = Prefix.massCommon + "SpasmosAdamLong";
            let anchorTitle = Prefix.massCommon + "KissEachOther";
            insertSpasmos(spasmosTitle, selectElementsByDataSet(btnDocFragment, anchorTitle)[0]);
            anchorTitle = Prefix.massCommon + "SpasmosWatosShort";
            //Insert Watos Spasmoses
            insertSpasmos(spasmosTitle.replace("Adam", "Watos"), selectElementsByDataSet(btnDocFragment, anchorTitle)[0], true);
            function insertSpasmos(spasmosTitle, anchor, hideAnchor = false) {
                if (!anchor)
                    return console.log('anhcor is not valid');
                let spasmos = MassCommonArray.find((tbl) => Title(tbl)?.startsWith(spasmosTitle) &&
                    tableMatchingDates(Title(tbl), [Season]));
                if (!spasmos)
                    return console.log("didn't find spasmos with title = ", spasmosTitle);
                const langs = getLanguages(Title(spasmos));
                const btnSpasmos = new Button({
                    btnID: spasmosTitle.split("&D=")[0],
                    label: getLabel({
                        AR: spasmos[0][langs.indexOf('AR') + 1],
                        FR: spasmos[0][langs.indexOf('FR') + 1],
                    }),
                    cssClass: css.inlineButton,
                    docFragment: new DocumentFragment(),
                    onClick: () => {
                        showPrayers({
                            table: spasmos,
                            languages: langs,
                            position: btnSpasmos.docFragment,
                            clearContainerDiv: false,
                            clearRightSideBar: false,
                        });
                    }
                });
                const btnsDiv = insertExpandableBtn([btnSpasmos], anchor, 'beforebegin');
                if (hideAnchor)
                    btnsDiv.children[0].addEventListener("click", () => selectElementsByDataSet(containerDiv, anchor.dataset.root).forEach((row) => row.classList.toggle(css.hidden)));
            }
        })();
        (function insertLitaniesIntroductionFromOtherMasses() {
            if (btn !== Btn.MassStBasil)
                return; //This button appears only in St Basil Mass
            const intro = "LitaniesIntro";
            const anchor = findAnchor(`${Prefix.massCommon}${intro}`, btnDocFragment);
            if (!anchor)
                return console.log("Did not find the Anchor");
            const stGregLitanies = new Button({
                btnID: Btn.MassStGregory.btnID + "LitaniesIntro",
                label: getLabel({
                    AR: "طلبات القداس الغريوري",
                    FR: "Litanies de la messe de St. Gregory",
                }),
                cssClass: css.inlineButton,
                languages: btn.languages,
                docFragment: new DocumentFragment(),
                prayersSequence: [Prefix.massStGregory + intro],
            });
            const stCyrilLitanies = new Button({
                btnID: Btn.MassStCyril.btnID + "LitaniesIntro",
                label: getLabel({
                    AR: "طلبات القداس الكيرلسي",
                    FR: "Litanies de la messe de Saint Cyril",
                }),
                cssClass: css.inlineButton,
                languages: btn.languages,
                docFragment: new DocumentFragment(),
                prayersSequence: [Prefix.massStCyril + intro],
            });
            insertExpandableBtn([stGregLitanies, stCyrilLitanies], anchor, 'beforebegin', 'Lit');
        })();
        (function insertRelevantSeasonalLitany() {
            const anchor = findAnchor(`${Prefix.anchor}SeasonalLitany`, btnDocFragment);
            if (!anchor)
                return console.log('Didn\'t find the anhcor');
            let tbl = findTable(Prefix.massCommon + 'SeasonalLitany&D=$Seasons.' + Object.entries(Seasons).find(entry => entry[1] === naturalSeasons())[0], MassCommonArray);
            if (!tbl)
                return console.log('Didn\'t find the tbl');
            insertTablesBeforeAnchor([tbl], anchor, prayersLanguages);
        })();
        (function showFractionPrayersMasterButton() {
            //We will insert a button displaying a pannel of choices for the different Fraction prayers according to the day/season, etc.s
            const anchor = findAnchor(`${Prefix.anchor}Fraction`, btnDocFragment);
            if (!anchor)
                console.log('Did not find the fractions anchor');
            showMultipleChoicePrayersButton({
                filteredPrayers: filter(),
                languages: prayersLanguages,
                btnLabels: getLabel({ AR: "صلوات القسمة", FR: "Oraisons de la Fraction" }),
                masterBtnID: "btnFractionPrayers",
                anchor: anchor,
            });
            function filter() {
                let filtered = [];
                const standard = FractionsArray.filter(table => RegExp(/^(?!.*&D=(?![^&]*\.anyDay)).*$/).test(Title(table))); //Those are the franctions that are inlcuded for any day.
                filtered.push(...FractionsArray.filter(table => !standard.includes(table) && tableMatchingDates(Title(table), [copticDate, Season]))); //Adding the date or Season specific fractions
                filtered.push(...standard); //We then add the "standard" group of fractions
                return getUniqueValuesFromArray(filtered);
            }
            ;
        })();
        (function insertCommunionChants() {
            //Inserting the Communion Chants after the Psalm 150
            let psalm150 = selectElementsByDataSet(btnDocFragment, Prefix.massCommon + "CommunionPsalm150", null, 'group');
            const filtered = CommunionArray.filter(table => tableMatchingDates(Title(table), [copticDate, Season, copticFeasts.AnyDay]));
            showMultipleChoicePrayersButton({
                filteredPrayers: getUniqueValuesFromArray(filtered),
                languages: btn.languages,
                btnLabels: getLabel({
                    AR: "مدائح التوزيع",
                    FR: "Chants de la communion",
                }),
                masterBtnID: "communionChants",
                anchor: psalm150[psalm150.length - 1],
            });
        })();
        adaptConcludingHymn(btnDocFragment);
    },
});
Btn.MassStCyril = new Button({
    btnID: "btnMassStCyril",
    label: getLabel({ AR: "كيرلسي", FR: "Saint Cyril", EN: "St Cyril" }),
    docFragment: new DocumentFragment(),
    languages: [...prayersLanguages],
    onClick: () => {
        //Setting the standard mass prayers sequence
        const Mass = Sequences().Mass;
        Btn.MassStCyril.prayersSequence = [
            ...Mass.StCyril,
            ...[
                Prefix.massCommon +
                    "AgiosPart3",
                Prefix.commonPrayer + "KyrieElieson",
                Prefix.commonPrayer + "BlockIriniPassi",
                Prefix.anchor + "Fraction",
                Prefix.commonPrayer + "OurFatherInHeaven",
                Prefix.massCommon + "Confession",
            ],
            ...Mass.Communion,
        ];
        return Btn.MassStCyril.prayersSequence;
    },
    afterShowPrayers: async () => Btn.MassStBasil.afterShowPrayers(Btn.MassStCyril, Prefix.massStCyril),
});
Btn.MassStGregory = new Button({
    btnID: "btnMassStGregory",
    label: getLabel({ AR: "غريغوري", FR: "Saint Gregory" }),
    docFragment: new DocumentFragment(),
    languages: [...prayersLanguages],
    onClick: () => {
        const Mass = Sequences().Mass;
        //Setting the standard mass prayers sequence
        Btn.MassStGregory.prayersSequence = [
            ...Mass.StGregory,
            ...Mass.CallOfHolySpirit,
            ...Mass.Litanies,
            ...Mass.Communion,
        ];
        //removing irrelevant prayers from the array
        Btn.MassStGregory.prayersSequence.splice(Btn.MassStGregory.prayersSequence.indexOf(Prefix.massCommon + "CallOfTheHolySpiritPart1"), 9);
        scrollToTop();
        return Btn.MassStGregory.prayersSequence;
    },
    afterShowPrayers: async () => Btn.MassStBasil.afterShowPrayers(Btn.MassStGregory, Prefix.massStGregory),
});
Btn.MassStJohn = new Button({
    btnID: "btnMassStJohn",
    label: getLabel({ AR: "القديس يوحنا", FR: "Saint Jean" }),
    docFragment: new DocumentFragment(),
    prayersSequence: [],
    onClick: () => {
        alert("The prayers of this mass have not yet been added. We hope they will be ready soon");
        return; //until we add the text of this mass
        scrollToTop(); //scrolling to the top of the page
        return Btn.MassStJohn.prayersSequence;
    },
    afterShowPrayers: async () => Btn.MassStBasil.afterShowPrayers(Btn.MassStJohn),
});
Btn.MassBaptised = new Button({
    btnID: "btnMassBaptised",
    label: getLabel({
        AR: "قٌدَّاسِ المُؤْمِنينَ",
        FR: "Liturgie des Croyants",
        EN: "Baptized Mass",
    }),
    parentBtn: Btn.Mass,
    children: [Btn.MassStBasil, Btn.MassStGregory, Btn.MassStCyril], //We are removing Mass StJohn for now
});
Btn.GospelVespers = new Button({
    btnID: "btnReadingsGospelIncenseVespers",
    label: getLabel({
        AR: "إنجيل عشية",
        FR: "Évangile  Vêpres",
        EN: "Vespers Gospel",
    }),
    onClick: async () => await Btn.GospelMass.onClick(Prefix.gospelVespers),
});
Btn.GospelMorning = new Button({
    btnID: "btnReadingsGospelIncenseDawn",
    label: getLabel({
        AR: "إنجيل باكر",
        FR: "Évangile du Matin",
        EN: "Morning Gospel",
    }),
    onClick: async () => await Btn.GospelMass.onClick(Prefix.gospelMorning),
});
Btn.GospelNight = new Button({
    btnID: "btnReadingsGospelNight",
    label: getLabel({
        AR: "إنجيل المساء",
        FR: "Évangile du Soir",
        EN: "Night Gospel",
    }),
    onClick: async () => await Btn.GospelMass.onClick(Prefix.gospelNight)
});
Btn.GospelMass = new Button({
    btnID: "btnReadingsGospelMass",
    label: getLabel({
        AR: "إنجيل القداس",
        FR: "Évangile de la messe",
        EN: "Mass Gospel",
    }),
    onClick: async (gospelPrefix = Prefix.gospelMass) => {
        let prayersArray = PrayersArraysKeys.find((entry) => entry[0] === gospelPrefix);
        if (!prayersArray)
            return console.log("Didn\'t find the prayersArray");
        containerDiv.innerHTML = "";
        await insertGospelReadingAndResponses({
            prefix: gospelPrefix,
            languages: getLanguages(gospelPrefix),
            container: containerDiv,
            isMass: false,
            clearContainer: true,
        });
        scrollToTop(); //scrolling to the top of the page
    },
});
Btn.HW = new Button({
    btnID: 'btnHolyWeek',
    label: getLabel({ AR: 'طقس اسبوع الآلام', FR: 'Rite de la semaine sainte' }),
    onClick: () => {
        /*The buttons tree is structured this way:
        btnMaster =>
                btnPassOver =>
                        [btnDay, btnEvening]=>
                                  [btn1stHour, btn3rdHour, etc.]*/
        let Evening = 'E', Morning = 'M';
        let btnPassOver = new Button({
            btnID: 'btnPassover',
            label: getLabel({ AR: 'البصخة المقدسة', FR: 'Pessah' }),
            onClick: () => btnPassOver.children = [btnPassOverOnClick(Morning), btnPassOverOnClick(Evening)], //We remove undefined elements
        }); //btnPassOver shows Day and Evening buttons
        Btn.HW.children = [btnPassOver];
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
                    label: getLabel(labels[[Morning, Evening].indexOf(service)]),
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
            return hoursLabels.map(hour => createHourBtn(hour.prefix, getLabel(hour.lable))).filter(btn => btn); //We remove any undefined buttons   
            function createHourBtn(hour, label) {
                if (hour === '12H' && weekDay !== 5)
                    return undefined; //The 12th hour is only for Friday
                if (['1H', '3H', '6H'].includes(hour) && service === Morning && weekDay === 0)
                    return undefined; //On Palm Sunday we start at the 9th hour
                let hourReadings = ReadingsArrays.GospelNightArrayFR
                    .filter(table => RegExp(Prefix.HolyWeek + hour + service + '\.*&D=' + copticReadingsDate).test(Title(table)));
                let btnHour = new Button({
                    btnID: 'btn' + hour,
                    label: label,
                    parentBtn: btn,
                    languages: prayersLanguages,
                    docFragment: new DocumentFragment(),
                    onClick: () => btnHour.prayersSequence = [...Sequences().HolyWeek.PassOver],
                    afterShowPrayers: async () => await hourBtnAfterShowPrayers(btnHour, hour, hourReadings, label),
                });
                return btnHour;
                async function hourBtnAfterShowPrayers(btn, hour, dayPrayers, label) {
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
                        Object.values(titles)
                            .forEach((title) => {
                            title[defaultLanguage] += label.DL || '';
                            title[foreingLanguage] += label.FL || '';
                        });
                    })();
                    await insertHourReadings();
                    insertThursdayLakanAndMassBtns();
                    await insertHolyFridayReadingsAndHymns();
                    async function insertHourReadings() {
                        const readingsLangs = ['COP', 'FR', 'AR'];
                        const holyweek = '&D=$Seasons.HolyWeek';
                        const readings = {
                            coptGospel: { table: undefined, anchor: undefined, title: undefined, key: 'Gospel', keyAnchor: 'CopticGospel' },
                            nonCopticGospel: { table: undefined, anchor: undefined, title: titles.Gospel, key: 'Gospel', keyAnchor: 'nonCopticGospel' },
                            coptPsalm: { table: undefined, anchor: undefined, title: undefined, key: 'Psalm', keyAnchor: 'CopticPsalm' },
                            nonCopticPsalm: { table: undefined, anchor: undefined, title: titles.Psalm, key: 'Psalm', keyAnchor: 'nonCopticGospel' },
                            Commentary: { table: undefined, anchor: undefined, title: titles.Commentary, key: 'Commentary', keyAnchor: 'Commentary' },
                            Prophecies: { table: undefined, anchor: undefined, title: titles.Prophecies, key: 'Prophecies', keyAnchor: 'Prophecies' },
                            Sermony: { table: undefined, anchor: undefined, title: titles.Sermony, key: 'Sermony', keyAnchor: 'Prophecies' },
                            KhinEfran: { table: undefined, anchor: undefined, title: undefined, key: 'KhinEfran', keyAnchor: 'KhinEfran' },
                            Litany: { table: undefined, anchor: undefined, title: undefined, key: 'FinalLitany', keyAnchor: 'FinalLitany' },
                        };
                        (function fetchKhinEfranAndLitany() {
                            [readings.Litany, readings.KhinEfran].forEach(reading => setTableAndAnchor(reading, reading.key));
                            function setTableAndAnchor(reading, title) {
                                reading.table = findTable(`${Prefix.HolyWeek}${title}${service}`, HolyWeekArray) || undefined;
                                if (!reading.table)
                                    console.log(`Didn't find a table having as title: ${title}`);
                                reading.anchor = findAnchor(`${Prefix.anchor}${title}`, btnHour.docFragment);
                            }
                        })();
                        (function findReadingsTablesAndAnchors() {
                            [readings.coptGospel, readings.nonCopticGospel, readings.coptPsalm, readings.nonCopticPsalm, readings.Commentary, readings.Prophecies, readings.Sermony]
                                .forEach(reading => setTableAndAnchor(reading, reading.key, reading.keyAnchor));
                            readings.nonCopticPsalm.anchor = readings.nonCopticPsalm.anchor.previousElementSibling; //We need to do this because the nonCopticPsalm is inserted before the previous sibling of nonCopticGospel.placeHolder
                            function setTableAndAnchor(reading, name, anchor) {
                                reading.table = fetchTable(name);
                                reading.anchor = findAnchor(`${Prefix.anchor}${anchor}`, btnHour.docFragment);
                            }
                            (function getVersionsOfGospelAndPsalm() {
                                //For the gospel and the psalm, we need to get 2 versions of each: the first version is only coptic, and the 2nd version includes all the other languages except the Coptic version
                                const copticIndex = readingsLangs.indexOf('COP') + 1;
                                [readings.coptGospel, readings.nonCopticGospel, readings.coptPsalm, readings.nonCopticPsalm]
                                    .forEach((version) => {
                                    if (!version.table)
                                        return;
                                    if (version === readings.nonCopticGospel)
                                        version.table = version.table
                                            .filter((row, index) => index < 1 || row[0].startsWith(Prefix.readingRef));
                                    else
                                        version.table =
                                            version.table.map((row) => {
                                                if ([readings.coptGospel, readings.coptPsalm].includes(version) && !row[0].startsWith(Prefix.readingRef))
                                                    return [row[0], row[copticIndex]];
                                                else if (version === readings.nonCopticPsalm)
                                                    return row.filter((el, index) => index !== copticIndex);
                                            });
                                });
                            })();
                            function fetchTable(name) {
                                return findTable(`${Prefix.HolyWeek}${hour}${service}${name}&D=${copticReadingsDate}`, dayPrayers) || undefined;
                            }
                        })();
                        await insertTablesBeforeAnchors();
                        async function insertTablesBeforeAnchors() {
                            let languages;
                            const sequence = [
                                readings.coptPsalm,
                                readings.coptGospel,
                                readings.nonCopticPsalm,
                                readings.nonCopticGospel,
                                readings.Commentary,
                                readings.Prophecies,
                                readings.Sermony, //!This must come directly after readings.Prophecies
                                readings.KhinEfran,
                                readings.Litany
                            ]
                                .filter(reading => reading.table && reading.anchor); //We remove all the elements that do not have a reading.table or a reading.anchor 
                            for (const reading of sequence) {
                                (function setLanguage() {
                                    if ([readings.KhinEfran, readings.Litany].includes(reading))
                                        languages = prayersLanguages;
                                    else if ([readings.Sermony, readings.Commentary, readings.Prophecies].includes(reading))
                                        languages = readingsLangs;
                                    else if ([readings.nonCopticGospel, readings.nonCopticPsalm].includes(reading))
                                        languages = [defaultLanguage, foreingLanguage];
                                    else if ([readings.coptGospel, readings.coptPsalm].includes(reading))
                                        languages = ['COP'];
                                })();
                                reading.table = reading.table.filter(row => row); //We remove any undefined elements in the table;
                                reading.table = await retrieveReadingTableFromBible(reading.table, languages);
                                reading.table = reading.table?.filter(row => row.filter((el, index) => index > 0 && el?.length > 0).length > 0); //We remove the rows where all the values other than the row title are empty strings (This might be the case for some rows in the non Coptic gospel table)
                                reading.table[0] = insertTableTitleRow(); //We replace the first row of the table with a customized title row
                                insertTablesBeforeAnchor([reading.table], reading.anchor, languages);
                                function insertTableTitleRow() {
                                    if (!reading.title)
                                        return reading.table[0]; //If the title property of reading is not set, we will return the first row of the table. Otherwise we will create a title row from the reading.title.
                                    const row = [Title(reading.table) + css.Title];
                                    languages
                                        .map(lang => row.push(reading.title[lang] || ''));
                                    return row;
                                }
                            }
                            ;
                        }
                        ;
                    }
                    ;
                    function insertThursdayLakanAndMassBtns() {
                        //If we are on the Holy Thursday morning service
                        if (weekDay !== 4)
                            return;
                        if (service !== Morning)
                            return; //We are during the Morning Passover service
                        if (hour !== '11H')
                            return; //It is the 9th Hour button
                        const anchor = btn.docFragment.children[0];
                        if (!anchor)
                            return;
                        const lakkanBtn = new Button({
                            btnID: Btn.Lakkan.btnID,
                            label: getLabel({ AR: 'لقان خميس العهد', FR: 'Lavage des pieds' }),
                            docFragment: new DocumentFragment(),
                            onClick: () => Btn.Lakkan.onClick(copticFeasts.HolyThursday, lakkanBtn),
                            afterShowPrayers: async () => await Btn.Lakkan.afterShowPrayers(copticFeasts.HolyThursday, lakkanBtn),
                        });
                        const btnMass = new Button({
                            btnID: 'btnMass',
                            label: getLabel({ AR: 'قداس خميس العهد', FR: 'Messe du Jeudi Saint' }),
                            docFragment: new DocumentFragment(),
                            onClick: () => {
                                const Mass = Sequences().Mass;
                                let sequence = [...Mass.StBasil, ...Mass.Communion];
                                Btn.Mass.prayersSequence = sequence;
                            },
                            afterShowPrayers: async () => { },
                        });
                        btn.children = [lakkanBtn, btnMass];
                        insertExpandableBtn([lakkanBtn, btnMass], anchor, 'afterend', btn.btnID.replace('btn', ''));
                    }
                    ;
                    async function insertHolyFridayReadingsAndHymns() {
                        if (weekDay !== 5)
                            return;
                        if (service !== Morning)
                            return;
                        const anchor = findAnchor(`${Prefix.anchor}HolyFriday`, btn.docFragment);
                        await SixthHour();
                        await NinethHour();
                        async function SixthHour() {
                            if (hour !== '6H')
                                return;
                            await insertStPaul("GAL:6:14-18", "Tayshoury"); //Inserting the St. Paul Reading
                            insertTable(getLitanies("H6Litanies"), prayersLanguages, anchor); //Inserting the 6th hour litanies
                            const dimasAnchor = findAnchor(`${Prefix.anchor}DimasConfession`, btn.docFragment);
                            const Omono = findTable(`${Prefix.HolyWeek}${"OMonoGuenis"}`, PrayersArrayFR); //!The titles of those tables start with Prefix.HolyWeek, but they are included in the PrayersArrayFR not in the GospelNightArray. This is because the languages of their text is not limited to [Coptic, French, Arabic] like the other tables in GospelNightArray, but include the Copt in arabic charcters [Coptic, French, Coptic Arabic, Arabic] 
                            const confession = findTable(Prefix.HolyWeek + "6HMDimasConfession&D=" + copticFeasts.HolyFriday, ReadingsArrays.GospelNightArrayFR);
                            insertTable(Omono, prayersLanguages, anchor); //Inserting "Ô Monon Guenis"
                            insertTable(confession, prayersLanguages, dimasAnchor); //Inserting "Dimas Confession"
                        }
                        ;
                        async function NinethHour() {
                            if (hour !== '9H')
                                return;
                            await insertStPaul('PHP:2:5-11', "Tishoury");
                            insertTable(getLitanies("H9Litanies"), prayersLanguages, anchor); //Inserting the 9th hour litanies
                        }
                        async function insertStPaul(ref, tishori) {
                            (function insertResponse() {
                                const response = findTable(`${Prefix.HolyWeek}${"FayEtaf"}`, PrayersArrayFR); //!Although the table title starts with Prefix.HolyWeek, it is included in the PrayersArrayFR not in the GospelNightArray. This is because the languages of their text is not limited to [Coptic, French, Arabic] like the other tables in GospelNightArray, but include the Copt in arabic charcters [Coptic, French, Coptic Arabic, Arabic];
                                const placeHolder = [Prefix.placeHolder, Prefix.massCommon + tishori];
                                response.splice(1, 0, placeHolder); //Inserting a placeHolder element to retrieve the relevant "Tay Shory" or "Tishory" part
                                insertTable(response, prayersLanguages, anchor);
                            })();
                            await insertReading();
                            async function insertReading() {
                                const intros = ReadingsIntrosAndEnds();
                                const langs = getLanguages(Prefix.stPaul);
                                const stPaul = [
                                    getIntro(intros.stPaulIntro, css.Intro),
                                    [Prefix.readingRef + ref],
                                    getIntro(intros.stPaulEnd, css.End)
                                ]; //!needs to be checked and tested
                                const reading = await retrieveReadingTableFromBible(stPaul, langs);
                                insertTable(reading, langs, anchor);
                                function getIntro(intro, css) {
                                    return [
                                        Prefix.same + css,
                                        ...langs.map(lang => intro[lang])
                                    ];
                                }
                            }
                        }
                        function insertTable(table, langs, anchor) {
                            if (!table || !langs || !anchor)
                                return;
                            insertTablesBeforeAnchor([table], anchor, langs);
                        }
                        ;
                        function getLitanies(hour) {
                            return findTable(Prefix.bookOfHours + hour, PrayersArrayFR);
                        }
                    }
                    ;
                }
            }
        }
    }
});
Btn.Bible = new Button({
    btnID: 'btnBible',
    label: getLabel({
        AR: 'الكتاب المقدس',
        FR: 'La Bible'
    }),
    onClick: async (refs) => {
        if (refs)
            return await chapterBtnOnClick(refs.bookID, refs.chapterNumber);
        const newTestament = new Button({
            btnID: 'newTestament',
            label: getLabel({
                AR: 'العهد الجديد',
                FR: 'Nouveau Testament',
                EN: 'New Testament'
            }),
            onClick: async () => await testamentChildren(newTestament), //!We need the children to be added when the button is clicked not when it is created because the Bibles are not defined at this stage
            afterShowPrayers: addFilteringInput,
        });
        const oldTestament = new Button({
            btnID: 'oldTestament',
            label: getLabel({
                AR: 'العهد القديم',
                FR: 'Ancien Testament',
                EN: 'Old Testament'
            }),
            onClick: async () => await testamentChildren(oldTestament), //!We need the children to be added when the button is clicked not when it is created because the Bibles are not defined at this stage
            afterShowPrayers: addFilteringInput,
        });
        Btn.Bible.children = [oldTestament, newTestament];
        async function testamentChildren(btn) {
            btn.children = btn.children || await getBooksButtons(btn);
        }
        ;
        function addFilteringInput() {
            [sideBarBtnsContainer, containerDiv.querySelector('#btnsMainPageDiv')]
                .forEach(container => insertInput(container));
            function insertInput(container) {
                const input = document.createElement('input');
                container.prepend(input);
                input.id = 'inputFilter';
                input.defaultValue = {
                    AR: 'بحث...',
                    FR: 'Recherche...',
                    EN: 'Search...',
                }[defaultLanguage];
                input.addEventListener('focus', () => input.value = '');
                input.addEventListener('keyup', filterButtons);
                //  input.style.bottom = (container.previousElementSibling as HTMLElement).style.top;
                function filterButtons() {
                    const btns = Array.from(container.children).filter(child => child.id.startsWith('btnBook'));
                    if (btns.length < 1)
                        return;
                    btns.forEach(btn => btn.classList.remove(css.hidden)); //We unhide all the buttons
                    const notMatching = btns.filter(btn => !RegExp(input.value, 'i').test(btn.innerText)); //We filter all the elements not matching the input
                    notMatching.forEach(btn => btn.classList.add(css.hidden)); //We hide the unmatching buttons
                }
            }
        }
        ;
        async function getBooksButtons(btn) {
            let booksList = await getBibleBooksList(defaultLanguage);
            if (!booksList)
                return;
            if (btn === oldTestament)
                booksList = booksList.slice(0, 48);
            else if (btn === newTestament)
                booksList = booksList.slice(48, booksList.length);
            const books = booksList.map(book => [book.human_long, book.id]);
            return books.map(([name, id], index) => {
                const btn = new Button({
                    btnID: `btnBook${index}`,
                    label: { DL: name, FL: undefined },
                    onClick: () => btn.children = btn.children || getChaptersButtons(id), //!We need the children to be added when the button is clicked not when it is created because the Bibles are not defined at this stage
                    afterShowPrayers: () => document.getElementById('inputFilter')?.remove(),
                });
                return btn;
            });
        }
        function getChaptersButtons(bookID) {
            const book = Bibles[defaultLanguage][0]?.find((book) => book[0].id === bookID);
            if (!book)
                return;
            return chaptersBtns(book);
            function chaptersBtns(book) {
                const [chaptersList, bookID] = [book[0].chaptersList, book[0].id];
                return chaptersList
                    .filter(chapter => Number(chapter))
                    .map(chapter => chapterButton(chapter));
                function chapterButton(chapter) {
                    {
                        return new Button({
                            btnID: `btnChapter${chapter}`,
                            label: getLabel(getChapterLabel(chapter)),
                            onClick: () => chapterBtnOnClick(bookID, chapter)
                        });
                    }
                }
            }
        }
        async function chapterBtnOnClick(bookID, chapterNumber) {
            if (!bookID || !chapterNumber)
                return;
            const languages = [defaultLanguage];
            if (foreingLanguage)
                languages?.push(foreingLanguage);
            await showChapterText();
            async function showChapterText() {
                const title = [
                    `'Bible_${bookID}${chapterNumber}${css.Title}`,
                ];
                await retrieve();
                async function retrieve() {
                    const [bookDefault, bookForeign] = await Promise.all(languages.map(async (lang) => await getBook(lang)));
                    const first = bookDefault.chaptersList.find(el => Number(el));
                    const ref = `${Prefix.readingRef}${bookID}:${chapterNumber}:${first}-End`;
                    const retrieved = await retrieveReadingTableFromBible([[ref]], languages);
                    [bookDefault, bookForeign]
                        .map((book, index) => title.push(getTitle(book, languages[index], chapterNumber)));
                    retrieved[0] = title;
                    showPrayers({
                        table: retrieved,
                        languages: languages,
                        position: containerDiv,
                        clearContainerDiv: true,
                        clearRightSideBar: true,
                    });
                    updateBookmark(bookID, chapterNumber);
                }
                ;
                async function getBook(lang) {
                    if (!lang)
                        return;
                    const list = await getBibleBooksList(lang);
                    return list?.find(b => b.id === bookID);
                }
            }
            (function appendNextAndPrevBtns() {
                const btnsDiv = document.createElement('div');
                containerDiv.append(btnsDiv);
                const right = '⇒', left = '⇐';
                let goTo = true;
                if (defaultLanguage === 'AR')
                    goTo = !goTo;
                const next = new Button({
                    btnID: 'btnNext',
                    label: getLabel({
                        AR: right,
                        FR: right,
                        EN: right,
                    }),
                    onClick: () => nextOnClick(goTo, bookID, chapterNumber)
                });
                const prev = new Button({
                    btnID: 'btnPrev',
                    label: getLabel({
                        AR: left,
                        FR: left,
                        EN: left,
                    }),
                    onClick: () => nextOnClick(!goTo, bookID, chapterNumber)
                });
                [prev, next].forEach(btn => {
                    createHtmlBtn({
                        btn: btn,
                        btnsContainer: btnsDiv,
                        btnClass: css.inlineButton
                    });
                });
                btnsDiv.classList.add(css.inlineButtonsContainer);
                // floatOnTopOrBottom(btnsDiv, false, "0px");
                btnsDiv.style.gridTemplateColumns = setGridColumnsOrRowsNumber(btnsDiv);
                async function nextOnClick(next, id, chapterNumber) {
                    const books = await getBibleBooksList(defaultLanguage);
                    const [book, chapter] = getBookAndChapter();
                    await chapterBtnOnClick(book?.id, chapter);
                    updateBookmark(book.id, chapter);
                    function getBookAndChapter() {
                        let book = books?.find(b => b.id === id);
                        const bookIndex = books.indexOf(book);
                        let chaptersList = book.chaptersList.filter(chapter => Number(chapter)); //We remove any non numerical chapters from the list
                        const chapterIndex = chaptersList.indexOf(chapterNumber);
                        if (next && chapterIndex === chaptersList.length - 1) {
                            //There is no next chapter in the same book. We will go to the next book
                            book = books[bookIndex + 1] || books[0];
                            chaptersList = book.chaptersList.filter(chapter => Number(chapter));
                            chapterNumber = chaptersList[0];
                        }
                        else if (next) {
                            //There is a next chapter in the same book
                            chapterNumber = chaptersList[chapterIndex + 1];
                        }
                        else if (!next && chapterIndex === 0) {
                            //No previous chapter in the same book
                            book = books[bookIndex - 1] || books[books.length - 1];
                            chaptersList = book.chaptersList.filter(chapter => Number(chapter));
                            chapterNumber = chaptersList[chaptersList.length - 1];
                        }
                        else if (!next) {
                            //There is a previous chapter
                            chapterNumber = chaptersList[chapterIndex - 1];
                        }
                        return [book, chapterNumber];
                    }
                }
            })();
            function updateBookmark(bookID, chapterNumber) {
                bookMarks[0] = [bookID, chapterNumber]; //We add the chapter to the bookMarks
                localStorage.bookMarks = JSON.stringify(bookMarks); //We save the bookMarks to the local storage
            }
            scrollToTop();
            return true;
            function getTitle(book, lang, chapterNumber) {
                if (!book)
                    return '';
                return book.human_long + '\n' + getChapterLabel(chapterNumber)[lang] || '';
            }
        }
        function getChapterLabel(chapter) {
            return {
                AR: `إصحاح ${chapter}`,
                FR: `Chapître ${chapter}`,
                EN: `Chapter ${chapter}`,
            };
        }
    },
    afterShowPrayers: () => {
        (function insertLastReadingBtn() {
            if (!localStorage.bookMarks)
                return;
            const lastReading = JSON.parse(localStorage.bookMarks)[0];
            if (!lastReading)
                return;
            //We create a fake button simulating the action of chapters' buttons of each book
            const btnLabel = getLabel({
                AR: 'آخر قراءة',
                FR: 'Dernier chapitre lu',
                EN: 'Last Reading'
            });
            const btn = new Button({
                btnID: 'lastReading',
                label: btnLabel,
                cssClass: 'btnBookMark',
                onClick: async () => {
                    await Btn.Bible.onClick({ bookID: lastReading[0], chapterNumber: lastReading[1] });
                },
            });
            (function addSideBarShortcut() {
                const bookMarkDiv = document.createElement("div"); //this is just a container
                bookMarkDiv.role = "button";
                bookMarkDiv.id = 'bookmarkLast';
                bookMarkDiv.classList.add(css.sideTitle);
                sideBarTitlesContainer.appendChild(bookMarkDiv);
                let bookmark = document.createElement("a");
                bookMarkDiv.appendChild(bookmark);
                bookmark.innerText = btnLabel[defaultLanguage];
                bookMarkDiv.addEventListener("click", () => displayChildButtonsOrPrayers(btn));
            })();
            (function addMainPageBtn() {
                const btnDiv = document.createElement('div');
                btnDiv.classList.add(css.inlineButtonsContainer);
                containerDiv.prepend(btnDiv);
                createHtmlBtn({
                    btn: btn,
                    btnsContainer: btnDiv,
                    btnClass: btn.cssClass,
                    clear: false,
                });
            })();
        })();
    }
});
Btn.Edit = new Button({
    btnID: "btnEditMode",
    label: getLabel({
        AR: "تعديل النص",
        FR: "Enter Editing Mode",
        EN: "Enter Editing Mode",
    }),
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
    div.classList.add(css.inlineButtonsContainer);
    btns.map((btn) => div.appendChild(createHtmlBtn({ btn: btn, btnsContainer: div, btnClass: btn.cssClass })));
    position.el.insertAdjacentElement(position.beforeOrAfter, div);
    div.style.gridTemplateColumns = setGridColumnsOrRowsNumber(div, 3);
}
/**
 *
 * @param {string[][][]} filteredPrayers - An array containing the optional prayers for which we want to display html button elements in order for the user to choose which one to show
 * @param {Button} btn
 * @param {HTMLElement} btnsDiv - The html element in which each prayer will be displayed when the user clicks an inline button representing this prayer
 * @param {typeBtnLabel} btnLabels - An object containing the labels of the master button that the user will click to show a list of buttons, each representing a prayer in selectedPrayers[]
 * @param {string} masterBtnID - The id of the master button
 */
async function showMultipleChoicePrayersButton(args) {
    if (!args.anchor)
        console.log("anchor missing");
    if (!args.masterBtnDiv && args.anchor) {
        args.masterBtnDiv = document.createElement("div"); //a new element to which the inline buttons elements will be appended
        args.anchor.insertAdjacentElement("afterend", args.masterBtnDiv); //we insert the div after the insertion position
    }
    if (!args.masterBtnDiv)
        return console.log('Didn\'t find masterBtnDiv');
    (async function createMasterBtn() {
        let btn = new Button({
            btnID: args.masterBtnID,
            label: args.btnLabels,
            children: await createBtnsForPrayers(), //The inlineBtns are not added immediately, they are added later by createInlineBtns() below
            pursue: false, //!CAUTION: we must keep it false in order to stop the showChildButtonsOrPrayers() from continuing the execution after calling the onClick() property of the master button. Otherwise, this will show again the inlineButtons of the master button
            cssClass: css.inlineButton,
            onClick: () => {
                let groupOfNumber = 4;
                //We show the inlineBtnsDiv (bringing it in front of the containerDiv by giving it a zIndex = 3)
                showExpandableBtnsPannel(args.masterBtnID, true);
                //When the prayersMasterBtn is clicked, it will create a new div element to which it will append html buttons element for each inlineBtn in its inlineBtns[] property
                let newDiv = document.createElement("div");
                newDiv.id = args.masterBtnID + "Container";
                //Customizing the style of newDiv
                newDiv.classList.add(css.inlineButtonsContainer);
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
            args.masterBtnDiv.classList.add(css.inlineButtonsContainer);
            args.masterBtnDiv.classList.add(css.masterButtonDiv);
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
                label: getLabel({ AR: "التالي", FR: "Suivants" }),
                cssClass: css.inlineButton,
            });
            //if the number of prayers is > than the groupOfNumber AND the remaining prayers are >0 then we show the next button
            if (masterBtn.children.length - startAt > groupOfNumber) {
                //We create the "next" Button only if there is more than 6 inlineBtns in the prayersBtn.inlineBtns[] property
                next.onClick = () => btnNextOnClick(true);
            }
            else if (masterBtn.children.length - startAt <= groupOfNumber) {
                next.label = getLabel({
                    AR: "عودة",
                    FR: "Retour"
                });
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
                if (!foreingLanguage && !childBtn.label.DL)
                    return; //If no foreign language has been set by the user, and the prayer is not availble in the defaultLanguage (we check this by seeing if there is a label in this language), we will not create the btn
                if (!childBtn.label.DL && !childBtn.label.FL)
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
            let title = splitTitle(Title(table))[0];
            let btn = new Button({
                btnID: title, //prayerTable[0] is the 1st row, and prayerTable[0][0] is the 1st element, which represents the title of the table + the cssClass preceded by "&C="
                label: getLabel({
                    AR: table[0][args.languages?.indexOf('AR') + 1], //prayerTable[0] is the first row of the Word table from which the text of the prayer was retrieved. The 1st element of each row contains  the title of the prayer (i.e. the title of the table) + the CSS class of the row, preceded by "&C=". We look for the Arabic title by the index of 'AR' in the btn.languages property. We add 1 to the index because the prayerTable[0][0] is the title of the table as mentioned before
                    FR: table[0][args.languages?.indexOf('FR') + 1], //same logic and comment as above
                }),
                languages: args.languages, //we keep the languages of the btn since the fraction prayers are retrieved from a table having the same number of columns and same order for the languages
                cssClass: "multipleChoicePrayersBtn",
                onClick: () => btnOnClick(btn, title),
            });
            return btn;
        });
        if (foreingLanguage)
            btns
                .filter(btn => !btn?.label.DL && btn.label.FL) //For any button which prayer is not available in the defaultLanguage, but is available in the foreignLanguage, we will set its defaultLanguage label to be equal to its foreignLanguage lable. We do this, because any button that doesn't have a defaulLangauge label will be excluded from the btns array that the function will return
                .map(btn => {
                btn.label.DL = btn.label.FL;
                btns.splice(btns.indexOf(btn), 1); //We remove the button from btns array, and will push it to the array later in order to move it to the end
                return btn;
            })
                .forEach(btn => btns.push(btn));
        return btns.filter(btn => btn?.label.DL); //!We return only the btns having a lable in the defaultLanguage
        function btnOnClick(btn, title) {
            let table = findTable(title) || undefined;
            console.log(title);
            let container = document.createElement('div');
            if (!table)
                return;
            let masterBtn = Array.from(containerDiv.querySelectorAll("." + css.inlineButton)).find((child) => child.id === args.masterBtnID);
            //When the prayer button is clicked, we empty and hide the inlineBtnsDiv
            hideExpandableButtonsPannel();
            let shown = Array.from(containerDiv.children)
                .find((div) => div.dataset.optionalPrayer &&
                div.dataset.optionalPrayer === masterBtn.dataset.shown);
            if (shown)
                shown.remove();
            //We call showPrayers and pass inlineBtn to it in order to display the fraction prayer
            let createdElements = showPrayers({
                table: table,
                languages: btn.languages,
                position: container,
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
            //We scroll to the button
            createFakeAnchor(args.masterBtnID);
        }
        ;
    }
}
/**
 * Adapts the Concluding Hymn of any Liturgy to the Season
 */
function adaptConcludingHymn(container) {
    const anchor = findAnchor(`${Prefix.anchor}ConcludingHymn`, container);
    if (!anchor)
        return console.log('Didn\'t find Concluding Hymn Season Anchor');
    let tbl;
    (function insertSeasonal() {
        let title = Prefix.commonPrayer + "ConcludingHymn&D=$Seasons.";
        if (Season === Seasons.NoSeason)
            title += Object.entries(Seasons).find(entry => entry[1] === naturalSeasons())[0];
        else
            title += Object.entries(Seasons).find(entry => entry[1] === Season)[0];
        tbl = findTable(title, CommonArray) || undefined;
        if (!tbl)
            return console.log('Didn\'t find a relevant table');
        if (Season === Seasons.GreatLent) {
            if ([0, 6].includes(weekDay))
                tbl = [tbl[tbl.length - 1]]; //The last row is for the Great Lent Saturdays and Sundays
            else {
                tbl = [...tbl].slice(0, -2); //We remove the 2nd row, and we remove the last row. ! Notice that we create a new table
                selectElementsByDataSet(container, Prefix.commonPrayer + 'ConcludingHymn', undefined, 'root')[1].remove(); //We remove the first paragraph ('Amin Allelujah')
            }
        }
        insertTablesBeforeAnchor([tbl], anchor, prayersLanguages);
    })();
    (function InsertPopeAndBishopHymn() {
        const bishop = new Button({
            btnID: 'concludingHymn',
            label: getLabel({
                AR: 'في حضور البطرك أو أحد الأساقفة',
                FR: 'En présence du Pape ou d\'un évêque',
            }),
            cssClass: css.inlineButton,
            languages: prayersLanguages,
            docFragment: new DocumentFragment(),
            prayersSequence: [Prefix.commonPrayer + "ConcludingHymnBishop"],
        });
        const btnsDiv = insertExpandableBtn([bishop], anchor, 'beforebegin');
    })();
}
/**
 * Makes a buttons div container floating on the top of the page
 * @param {HTMLDivElement} btnContainer - the buttons div container we want to make float;
 * @param {boolean} top - true = top, false = bottom
 * @param {string} value - the value of the floating
 */
function floatOnTopOrBottom(btnContainer, top, value = '5px') {
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
async function insertMassReadingOtherThanGospel(readingPrefix, position, container = containerDiv, clearContainer = false, readingDate) {
    //@ts-ignore
    if (!readingPrefix)
        return;
    if (container === containerDiv && clearContainer)
        container.innerHTML = "";
    if (container.children.length === 0)
        container.appendChild(document.createElement("div"));
    if (!position.el)
        position.el = container.children[0];
    if (!position.beforeOrAfter)
        position.beforeOrAfter = "beforebegin";
    if (!readingDate)
        readingDate = copticReadingsDate;
    const readingArray = getArrayFromPrefix(readingPrefix);
    const reading = readingArray?.find((table) => tableMatchingDates(Title(table), [readingDate]));
    if (!reading) {
        console.log("Did not find a reading for the current copticReadingsDate");
        return;
    }
    ;
    const languages = getLanguages(readingPrefix);
    const tables = [];
    const titleRows = reading
        .filter(row => RegExp(`${Prefix.class}(Title|SubTitle)`).test(row[0])) //We search for all the rows having the 'Title' or 'SubTitle' class
        .map(row => reading.indexOf(row)); //We return the index of each row
    if (titleRows.length < 2)
        tables.push(reading); //If there is no more than 1 row having 'Title' or 'SubTitle as class, we will push the reading table as is to tables
    else
        titleRows
            .forEach(index => tables.push(reading.slice(index, titleRows[titleRows.indexOf(index) + 1] || titleRows[titleRows.length - 1]))); //If there are more than 1 row having 'Title' or 'SubTitle' as class, we will split the reading tables into separate tables each starting with one of the 'Title/SubTitle' rows, and ending before the next 'Title/SubTitle' row 
    let retrievedText = await Promise.all(tables.map(async (table) => await retrieveReadingTableFromBible(table, languages)));
    insertTablesBeforeAnchor(retrievedText, position.el, languages, position.beforeOrAfter);
}
/**
 * Retrives the text of the verses referenced in the table passed to it.
 * @param {string[][]} reading - A table containing the references of the verses/chapters to be retrieved
 * @param {string[]} langs - The languages in which the text will be retrieved.
 * @returns {Promise<string[][]>} - a table where the first row is the title of the reading (Book name and Chapter Number, and verses number), and the following rows include the text of the verses referenced in the "reading" table passed as argument.
 */
async function retrieveReadingTableFromBible(reading, langs) {
    if (!reading || !langs)
        return;
    langs = langs?.filter(lang => lang);
    const rowsWithReferences = reading
        .filter(row => row?.find(el => el?.startsWith(Prefix.readingRef))); //We check of any of the table's rows has an element starting with Prefix.readingRef: this means this element is a reference for a text that we need to retrieve from the relevant bible
    if (rowsWithReferences.length < 1)
        return reading; //It means that there are no rows with references
    let ready = new Set(); //this set will contain arrays of ["bookID:chapterNumber:lang", chapter] for each chapter treated. If the chapter is found, we will not retreive it again.
    const retrieved = [];
    for (const row of reading) {
        //! We can't use forEach because forEach doesn't await for async functions to resolve
        if (rowsWithReferences.includes(row))
            retrieved.push(...await retrieveTextFromReference(row));
        else
            retrieved.push(row); //If the row is the first row or any other row that does not include references, we will push it as is
    }
    return retrieved;
    async function retrieveTextFromReference(row) {
        if (!row || row.length !== 1)
            return [];
        const retrievedText = [];
        let [ref, actor] = splitTitle(row[0]); //splitted[0] is the reference, and splitted[1] is the class (if any)
        ref = cleanReference(ref); //We clean the reference from the prefix and the spaces
        for (const lang of langs) {
            //!We can't use forEach because forEach doesn't await for async functions to resolve. It throughs a promise
            retrievedText.push(await retrieveVerses(lang, ref)); //The row contains only the reference with no other text
        }
        const titleRow = await getTitleRow(ref) || [];
        if (ref.startsWith(Prefix.readingRef + 'PSA:'))
            return [titleRow, retrievedText]; //We do not split the psalm paragraphs into different rows
        else
            return [titleRow, ...matchPargraphsSplitting(retrievedText, langs, row.length - langs.length, actor) || []];
    }
    async function retrieveVerses(lang, ref) {
        if (!lang || ![defaultLanguage, foreingLanguage].includes(lang))
            return ''; //We return an empty string if the language is not included in the list of languages that will be displayed to the user.
        const arabicBible = await getBibleVersion('AR'); //We will need it to get the last verse when the reference ends with 'End',
        let parts, verses;
        const bookID = ref.split(':')[0];
        const refs = ref.split('/'); //Some references include more than one reference, speparated by '/', eg.: "GEN:12:3-End/13:1-End/14:1-8". When splitted, we will get [GEN:12:3-End, 13:1-End, 14:1-8]
        let text = await Promise.all(refs.map(async (ref) => {
            const [chapterNumber, versesRange] = ref.replace(`${bookID}:`, '').split(':'); //We should always get an array of 2 elements eg: ['GEN', '13', '3-End/15-End']; 
            if (!chapterNumber || !versesRange)
                return ''; //This means that the reference is badly formatted  
            verses = await Promise.all(versesRange
                .split('/')
                .map(async (range) => {
                range = replaceEnd(range, chapterNumber); //We replace 'End' with the last verse in the Arabic version since the references are taken from the Arabic version of the 
                return await retrieveVersesText(lang, bookID, chapterNumber, range) || "Error: Failed to retrieve verses";
            }));
            if (bookID === "PSA")
                return verses.join(' '); //We don't split the psalm into paragraphs
            return verses.join('\n');
        }));
        return text.join('\n');
        function replaceEnd(range, chapter) {
            if (!range.toUpperCase().includes('END'))
                return range;
            //!We will get the last verse of the chapter from the Arabic version of the Bible since this is the version that was used when inserting the readings refrences.
            const verses = getBibleChapter(chapter, getBibleBook(arabicBible, bookID))
                ?.filter(verse => Number(verse[0]));
            return range.replace('End', verses[verses.length - 1][0]);
        }
        ;
    }
    /**
     * Returns a title row (string[]) built from a reference
     * @param {string[]} row - the  row that contains the reading reference
     * @param {boolean} next - If true, it means that if the row does not contain any references, we will keep jumbing to the next row of the reading table until we find a row containg references. Its default value is false.
     */
    async function getTitleRow(ref) {
        if (!ref)
            return [];
        const titleRow = [Prefix.same + css.Title, ...langs.map(lang => '')]; //We create a row for the title and add empty elements to it for each language
        const bookID = ref.split(':')[0];
        await Promise.all(langs.map(async (lang, index) => {
            //!We can't use forEach because forEach doesn't await for async functions to resolve. Instead it throughs an error
            if (![defaultLanguage, foreingLanguage].includes(lang))
                return;
            await getTitle(lang, index);
        }));
        return titleRow;
        async function getTitle(lang, index) {
            const bible = await getBibleVersion(lang, false);
            const book = bible?.find(book => book[0].id === bookID);
            if (!book)
                return;
            const to = { AR: ' إلى ', FR: ' à ', EN: ' to ' }[lang];
            const and = { AR: 'و ', FR: ' et ', EN: ' and ' }[lang];
            titleRow[index + 1] = `${book[0].human} (${processRefs(to, and, book)})`;
            function processRefs(to, and, book) {
                //'ISA:13:11-End/14:1-End/16:8-End'
                let parts = ref.split(`${bookID}:`)[1].split('/'); //=> [13:11-End, 14:1-End, 16:8-End];
                let fromTo;
                if (bookID === 'PSA') {
                    fromTo = parts.map(part => {
                        const psalm = part.split(':')[0];
                        const verses = part.split('-');
                        if (verses[0] === verses[1])
                            return `${psalm}:${verses[0]}`;
                        return `${psalm}:${verses[0]}-${verses[1]}`;
                    }).join(and); //!Need to figuer it out
                }
                else if (parts.length < 2)
                    fromTo = parts[0]; //=>13:11-End
                else if (parts.length > 1) {
                    fromTo = `${parts[0].split('-')[0]} ${to}`; //=>13:11 to 
                    fromTo += `${parts[parts.length - 1].split(':')[0]}:`; //=> 13:11 to 16:
                    fromTo += parts[parts.length - 1].split('-')[1]; //=> 13:11 to 16:End
                }
                if (fromTo.includes('End')) {
                    const chapterNumber = parts[parts.length - 1].split(':')[0];
                    fromTo = fromTo.replace('End', book[1][Number(chapterNumber) - 1]
                        ?.filter(verse => Number(verse[0]))
                        .length.toString());
                }
                return fromTo; //=>//=>'13:1 à 16:30
            }
        }
    }
    /**
     * Removes spaces, '&C=[Class]', and Prefix.readingRef from the reference
     * @param {string} ref - a string containing the reference and usually starting with Prefix.readingRef
     * @returns {string} the reading reference after removing any extra text from the string
     */
    function cleanReference(ref) {
        return ref?.replaceAll(' ', '')
            .replace(Prefix.readingRef, '')
            .split(Prefix.class)[0] || undefined;
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
        if (bookID === 'PSA' && Number(chapterNumber))
            chapterNumber = (Number(chapterNumber) + 1).toString(); //We compensate the diffrence between the numbering of the psalms used in the Coptic Church, and the numbering in the used Arabic Bible book
        const exists = Array.from(ready).find(array => array[0] === bookID + ":" + chapterNumber + ":" + lang);
        if (lang === 'CA')
            lang = 'AR';
        if (exists)
            return getVersesRange(exists[1], verses.split('-'));
        if (!lang) {
            return new Error("The language is not valid. Error from retrieveVersesText()");
        }
        ;
        if (!chapterNumber || !verses) {
            console.log('chapterNumber = ', chapterNumber, "verses = ", verses);
            return new Error("Failed to retrieve verse");
        }
        ;
        if (!bookID || bookID.length > 3) {
            console.log('bookID = ', bookID);
            return new Error("Failed to retrieve verse");
        }
        ; //books ids are 3 letters length
        const Bible = await getBibleVersion(lang, false);
        if (!Bible)
            return new Error("Failed to retrieve verse");
        const chapterVerses = getBibleChapter(chapterNumber, undefined, Bible, bookID);
        if (!chapterVerses) {
            console.log('chapterVerses = ', chapterVerses);
            return new Error("Failed to retrieve verse");
        }
        ;
        ready.add([bookID + ":" + chapterNumber + ":" + lang, chapterVerses]);
        const range = verses.split('-');
        if (range.length !== 2) {
            console.log('bookID = ', bookID);
            return new Error(`Failed to retrieve verse because the range of verses is >2 which means that there is an error in the referecne : book = ${bookID}, chapter = ${chapterNumber}`);
        }
        ;
        return getVersesRange(chapterVerses, range);
        function getVersesRange(chapter, [Start, End]) {
            (function filterChapter() {
                //!This action must be performed before processing the verses references. We remove the last element of the chapter if it is not a verese.
                chapter = chapter.filter(verse => Number(verse[0]) || ['\n', '#'].includes(verse[0]));
                while (chapter[chapter.length - 1][0] === '\n')
                    chapter.pop();
            })();
            const first = chapter.find(verse => verse && verse[0] === Start);
            if (!first)
                return new Error("could not retrieve 'first'");
            const last = chapter.find(verse => verse && verse[0] === End);
            if (!last)
                return new Error("could not retrieve 'last'");
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
function matchPargraphsSplitting(retrieved, langs, add, actor = getActor(css.NoActor)) {
    if (add < 0)
        add = 0;
    if (add > 1) {
        alert('Error from matchPargraphsSplitting(): add>1 There is something wrong with the length of the row or of the language: langs.length = ' + langs.length.toString() + ' langs = ' + langs.toString());
        return;
    }
    const paragraphs = retrieved[langs.indexOf(defaultLanguage) + add]?.split('\n');
    if (!paragraphs)
        return;
    const exp = RegExp('Sup_\\d*_Sup', 'g');
    let ranges = paragraphs
        .map(parag => Array.from(parag.matchAll(exp))
        .map(match => match[0]));
    ranges = ranges
        .map(range => [range[0], range[range.length - 1]]) //Those are the first and last verses numbers in each paragraph of the default language
        .filter(versesRange => versesRange[0] && versesRange[1]); //!We must remove any undefined elements;
    langs
        .forEach(lang => {
        if (lang === defaultLanguage)
            return; //We do not split the paragraph for the default language because its the paragraphs division in this lanaguage who will serve as guid for the splitting of the foreign language text
        let text = retrieved[langs.indexOf(lang) + add].replaceAll('\n', ' '); //!We must remove all the '\n' characters from the string
        if (!text)
            return;
        if (!exp.test(text))
            return; //If the text is not divided into verses (i.e. includes('Sup))
        retrieved[langs.indexOf(lang) + add] =
            ranges
                .map(([Start, End], index) => {
                const match = splitTextIntoParagraphs(Start, index);
                text = text.replace(match, ''); //! In some cases when a reading reference covers more than one chapter, there are verses with duplicates numbers from the different chapters (eg.: 'HEB:13:1-End/14:1-4', we have duplicate verses 1, 2, 3 and 4, from chapter 13 and from chapter 14). this will lead to the match being retrieved twice for those verses. In order to resolve this problem, we remove the matched text from the original text
                return match || '';
            })
                .join('\n');
        function splitTextIntoParagraphs(Start, index) {
            //versesRange contains 2 elements. Each element is like "Sup_2_Sup". The 1st element is the number of the first verse in the paragraph. The 2nd element is the number of the last verse
            if (!Start)
                return '';
            let toVerse = ''; //!We need a new variable otherwise we will modify versesRange[1] in its original array
            if (index < ranges.length - 1) {
                //If we have not reached the last element of ranges, we will set the last version (_Sup_[version number]_Sup) to the first verse of the next element in the ranges array, in order to retrive the text until the end of the last verse number. This RegExp will stop before the first occurence of the first verse in the next range
                let i = index + 1;
                while (ranges[i] && !RegExp(`${ranges[i][0]}`).test(text))
                    i++; //!This covers a rare case where the numbering of the verses in the defaultLanguage version of the Bible is longer than the numbering in the foreign language version, which leads to a no match with the "_Sup[next verse number]_Sup" in the foreign language text, and missing the last block of versions in this laguage.
                toVerse = `?(?=${ranges[i]?.[0] || ''})`;
            }
            const match = text.match(RegExp(`${Start}.*${toVerse}`));
            if (!match)
                return '';
            return match[0] || '';
        }
    });
    return splitParagraphsIntoRows();
    function splitParagraphsIntoRows() {
        let table = [], parags;
        for (let i = 0; i < retrieved.length; i++) {
            parags = retrieved[i].split('\n');
            for (let ii = 0; ii < parags.length; ii++) {
                if (!table[ii]) {
                    table.push([...langs.map(lang => '')]);
                    add > 0 ? table[ii].unshift(retrieved[0]) : table[ii].unshift(`${Prefix.same}${Prefix.class}${actor}`); //If the number of elements in retrieved > languages, it means the first element is a title element. We will keep it as first element of each newly added row to the table, otherwise, we will manually add a title element as first element.
                }
                table[ii][i + 1 - add] = parags[ii];
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
 * @param {boolean} isMass - indicates whether the retrieval of the 'Psalm' and 'Gospel' readings is sought in relation to a mass or incense liturgy (in such case the psalm and gospel responses and the diacon's introductions/ends to the readings will be added), or whether we only need to retrieve the psalm and gospel text (this is for example the case when they are retrieved by the DayReadings button)
 * @param {string} liturgy - the prefix of the liturgie for which we want to retrieve the gospel reading
 * @param {HTMLElement | DocumentFragment} container - the html element to which the html elements (i.e. div) containing the gospel will be appended after being created
 * @param {string[][][]} gospel - The tables containing the 'Psalm' and 'Gospel' references. If not provided, the function will retrieve the tables from the relevant tables array in accordance with today's copticReadingsDate
 * @returns
 */
async function insertGospelReadingAndResponses(args) {
    if (!args.prefix)
        return console.log("the button passed as argument does not have prayersArray");
    if (!args.container)
        args.container = containerDiv;
    if (args.container === containerDiv && args.clearContainer)
        args.container.innerHTML = "";
    if (args.container.children.length === 0)
        args.container.appendChild(document.createElement("div"));
    if (!args.languages)
        args.languages = getLanguages(args.prefix);
    (function InsertPopeAndBishopPsalm() {
        if (!args.isMass)
            return;
        //!This must come before the readings and responses are inserted
        const bishop = new Button({
            btnID: 'PopePsalm',
            label: getLabel({
                AR: 'في حضور البطرك أو أحد الأساقفة',
                FR: 'En présence du Pape ou d\'un évêque',
            }),
            cssClass: css.inlineButton,
            languages: prayersLanguages,
            docFragment: new DocumentFragment(),
            prayersSequence: [Prefix.commonPrayer + "MaroEtshasf"],
        });
        const btnsDiv = insertExpandableBtn([bishop], getAnchor("Gospel")?.previousElementSibling, 'beforebegin');
    })();
    await insertPsalmAndGospelReadings();
    (function insertPsalmAndGospelResponses() {
        if (!args.isMass || args.gospel)
            return; //If we are not calling the function with a Mass or a liturgy (Unbpaptized Mass, or Incense Dawn/Vespers) context, we will not insert the Gospel and Psalm responses
        if (copticReadingsDate === copticFeasts.PalmSunday && args.prefix === Prefix.gospelMorning)
            return; //We do not insert the 12 gospel responses for the Incense Morning liturgy on Palm Sunday because they are retrieved by reference in the gospel reading table
        insertResponse(3, getAnchor('Gospel')?.nextElementSibling); //Inserting Gospel Response
        insertResponse(0, getAnchor('PsalmResponse')); //Inserting Psalm Response if any
        function insertResponse(index, anchor, position = 'beforebegin') {
            let prayersSequence = setGospelPrayersSequence(args.prefix, args.isMass); //this gives us an array like ['PR_&D=####', 'RGID_Psalm&D=', 'RGID_Gospel&D=', 'GR_&D=####']
            //We will retrieve the tables containing the text of the gospel and the psalm from the GospeldawnArray directly (instead of call findAndProcessPrayers())
            let response = PsalmAndGospelArray.find((tbl) => splitTitle(Title(tbl))[0] === prayersSequence[index]); //!Caution: this must be an '===' search operator not startWith() because otherwise, 'NativitayParamoun' will be selected for the 'Nativity' Season, and 'Baptism Paramoun' might be selected for the 'Baptism' Season if their tables in PrayersArray are before those of the relevant table
            if (!response || response.length === 0)
                return;
            insertTablesBeforeAnchor([response], anchor, prayersLanguages, position);
        }
    })();
    /**
   * Appends the gospel and psalm readings before gospelInsertionPoint(which is an html element)
   */
    async function insertPsalmAndGospelReadings() {
        let gospel = args.gospel || findGospelTables();
        if (!gospel || gospel.length < 2)
            return new Error("Error: gospel.length < 2"); //if no readings are returned from the filtering process, then we end the function
        await Promise.all(gospel
            .map(async (table) => {
            //!We can't use forEach because forEach dosen't await for promises to resolve
            //gospel[] should include 2 tables: the first table is the psalm and its title is like '....Psalm&D=...'. The 2nd is the gospel: its title is like '....Gospel&D=...'.
            const tblTitle = splitTitle(Title(table))[0];
            if (tblTitle.includes('?'))
                return;
            let type;
            tblTitle.includes('Gospel') ? type = 'Gospel' : type = 'Psalm';
            if (!args.isMass && type !== 'Gospel')
                return;
            let anchor;
            if (type === 'Gospel')
                anchor = getAnchor(type);
            else if (copticReadingsDate === copticFeasts.PalmSunday && RegExp('Psalm([2-9]|[1-9][0-9])&D=').test(tblTitle))
                anchor = getAnchor('Gospel'); //Starting from the 2nd Psalm, we will insert all the psalms and gospels before the gospel anchor
            else
                anchor = getAnchor('Psalm');
            if (!anchor)
                return;
            const tbls = await retrieveFromBible(table, tblTitle);
            (function palmSunday() {
                if (copticReadingsDate !== copticFeasts.PalmSunday)
                    return;
                if (args.prefix !== Prefix.gospelMorning)
                    return;
                tbls.unshift(buildTitleRow(type, tblTitle.split(type)[1].split('&D=')[0]));
                if (type !== 'Gospel')
                    return;
                tbls.push(findTable(tblTitle
                    .replace(args.prefix, Prefix.gospelResponse)
                    .replace('Gospel', '')) || undefined);
                function buildTitleRow(type, n) {
                    if (!Number(n))
                        return;
                    const labels = [
                        {
                            AR: 'الإنجيل XXX',
                            FR: 'XXX Evangile',
                            EN: 'XXX Gospel',
                        },
                        {
                            AR: 'مزمور ',
                            FR: 'Psaume du ',
                            EN: 'Psalm of the ',
                        },
                    ];
                    const num = [
                        {
                            AR: 'الأول',
                            FR: '1er',
                            EN: '1st',
                        },
                        {
                            AR: 'الثاني',
                            FR: '2ème',
                            EN: '2nd',
                        },
                        {
                            AR: 'الثالث',
                            FR: '3ème',
                            EN: '3rd',
                        },
                        {
                            AR: 'الرابع',
                            FR: '4ème ',
                            EN: '4th',
                        },
                        {
                            AR: 'الخامس',
                            FR: '5ème',
                            EN: '5th',
                        },
                        {
                            AR: 'السادس',
                            FR: '6ème',
                            EN: '6th',
                        },
                        {
                            AR: 'السابع',
                            FR: '7ème',
                            EN: '7th',
                        },
                        {
                            AR: 'الثامن',
                            FR: 'premier ',
                            EN: 'first ',
                        },
                        {
                            AR: 'التاسع',
                            FR: '9ème',
                            EN: '9th',
                        },
                        {
                            AR: 'العاشر',
                            FR: '10ème',
                            EN: '10th',
                        },
                        {
                            AR: 'الحادي عشر',
                            FR: '11ème',
                            EN: '11th',
                        },
                        {
                            AR: 'الثاني عشر',
                            FR: '12ème',
                            EN: '12th',
                        },
                    ];
                    const tbl = [[
                            Prefix.gospelResponse + css.Title,
                        ]];
                    tbl[0].push(...getLanguages(Prefix.gospelResponse)
                        .map(lang => {
                        if (!labels[0][lang])
                            return '';
                        const lable = labels[0][lang]?.replace('XXX', num[Number(n) - 1][lang]);
                        if (type === 'Psalm')
                            return labels[1][lang] + lable;
                        return lable;
                    }));
                    return tbl;
                }
            })();
            insertTablesBeforeAnchor(tbls, anchor); //!We are omitting the langs argument on purpose in ordrer for the languages to be retrieved from the title of each table. We do this since the tables do not all belong to the same tables array and do not hence share the same languages pattern/sequence 
        }));
        async function retrieveFromBible(tbl, tblTitle) {
            //! We didn't push the array to the table directly because otherwise it will add a new row to the original table each time we click on the Unbaptised Mass button or the Gospel Reading button
            const Intros = ReadingsIntrosAndEnds();
            //We will include the gospel end: 'Glory To God Forever' and the Psalm End 'Hallelujah'
            if (!args.isMass)
                return [await retrieveReadingTableFromBible(tbl, args.languages)];
            else if (tblTitle.includes('Gospel'))
                return [[...await retrieveReadingTableFromBible(tbl, args.languages), getReadingEnd(Intros.gospelEnd)]]; //We return a copy of the table not the original table in order to avoid modifying the original table.
            else if (tblTitle.includes('Psalm'))
                return [[...await retrieveReadingTableFromBible(tbl, args.languages), getReadingEnd(Intros.psalmEnd)]]; //We return a copy of the table not the original table in order to avoid modifying the original table.
            function getReadingEnd(end) {
                //We will return an array (i.e., a new row in the table) containing the text of the "Gospel End" (Glory to God Forever) in each language. This array needs to be constructed like this: ['Row title', 'End text in Arabic, 'End text in French or whatever other western language', 'End text in English']
                return [
                    //The first element of the array contains the title of the row
                    Prefix.same + css.End, //!Notice that we are giving it as class 'ReadingEnd'
                    //The following elements represent the text of the 'Gospel End' in each language, in the same order as the languages passed in args.languages.
                    ...args.languages
                        .map(lang => end[lang])
                ];
            }
            ;
        }
        ;
        function findGospelTables() {
            let prayersArray = PrayersArraysKeys.find(array => array[0] === args.prefix)[2]();
            if (!prayersArray)
                return [];
            return prayersArray
                .filter((table) => tableMatchingDates(Title(table), [copticReadingsDate]));
        }
        ;
    }
    ;
    function getAnchor(root) {
        if (!args.isMass) {
            //If we are not displaying the gospel in a Mass or a liturgy context, we don't need to insert the psalm. We will just show the text of the gospel reading itself. Hence, the div element will be same as args.gospelInsertionPoint
            containerDiv.appendChild(document.createElement('div'));
            return containerDiv.children[0];
        }
        else
            return findAnchor(`${Prefix.anchor}${root}`, args.container);
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
            Prefix.psalmResponse + anyDay + '||$Seasons.Kiahk', //This is its default value
            liturgy + "Psalm&D=",
            liturgy + "Gospel&D=",
            Prefix.gospelResponse, //This is its default value
        ]; //This is the generic sequence for the prayers related to the lecture of the gospel at any liturgy (mass, incense office, etc.). The OnClick function triggered by the liturgy, adds the dates of the readings and of the psalm and gospel responses
        if (!isMass)
            return prayersSequence; //If we are not calling the function within a mass/incense liturgy, we will not need to set the Psalm and Gospel Responses, we will return the prayersSequence array
        //setting the psalm and gospel responses
        (function setPsalmAndGospelResponses() {
            let PsalmAndGospelResponses = PsalmAndGospelArray.filter((table) => tableMatchingDates(Title(table), [copticDate, Season]));
            let psalmResponse = PsalmAndGospelResponses.filter((table) => Title(table)?.startsWith(Prefix.psalmResponse));
            let gospelResponse = PsalmAndGospelResponses.filter((table) => Title(table)?.startsWith(Prefix.gospelResponse));
            if (Season === Seasons.GreatLent) {
                [0, 6].includes(weekDay)
                    ? (gospelResponse = [
                        gospelResponse.find((table) => Title(table)?.includes("Sundays&D=")),
                    ])
                    : (gospelResponse = gospelResponse =
                        [gospelResponse.find((table) => Title(table)?.includes("Week&D="))]);
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
                    gospelResponse.find((table) => Title(table)?.includes(prefix + "&D=")),
                ];
            }
            if (psalmResponse?.length > 0 && psalmResponse[0]?.length > 0)
                prayersSequence[0] = splitTitle(Title(psalmResponse[0]))[0];
            if (gospelResponse?.length > 0 && gospelResponse[0]?.length > 0)
                prayersSequence[3] = splitTitle(Title(gospelResponse[0]))[0];
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
 * Takes a table title with muliple date values separated by '||', and checks if any of these dates include the date passed to it as coptDate
 * @param {string} tableTitle - a title of a table including multiple dates separated by '||'
 * @param {string} dates - the date that we want to check if it is included in the title. If omitted, it is given the value of the current copticDate
 * @returns {boolean} - return true if the date was found, and false otherwise
 */
function tableMatchingDates(tableTitle, dates = [copticDate]) {
    if (!tableTitle?.includes("&D="))
        return false; //This means that the title does not specify any date for the prayer.
    tableTitle = splitTitle(tableTitle)[0].split("&D=")[1];
    return tableTitle
        .split("||")
        .map((date) => dateIsRelevant(date, dates))?.includes(true);
}
/**
 * Checks if the date argument matches the copticDate or the Season
 * @param {string} date - the date string that we want to check if it matches the copticDate or the Season
 * @param {string} dates  - the copticDate (or the Season) with which we want the compare the date
 * @returns  {boolean}
 */
function dateIsRelevant(date, dates = [copticDate]) {
    const value = dateValue();
    if (!value)
        return console.log("date is not valid: ", value);
    if (value === Seasons.Kiahk)
        return Kiahk.includes(Season);
    else if ([lordFeasts, stMaryFeasts, celestialBeingsFeasts, MartyrsFeasts, nonMartyrsFeasts, saintsFeasts, apostlesFeasts].includes(value))
        return Object.values(value).includes(copticDate);
    return dates.includes(value);
    function dateValue() {
        if (date?.startsWith("$"))
            return eval(date.replace("$", ""));
        else if (/^\d{2}00$/.test(date))
            return date?.replace('00', copticMonth);
        else
            return date;
    }
}
/**
 * Inserts one or more 'inline' button(s) which when clicked, displays an expandable container with prayes
 * @param {Button[]} btns
 * @param {HTMLDivElement|Element} anchor
 * @param  {InsertPosition} before
 * @param {string} titlesGroup
 * @param {boolean} append
 * @param {string} dataGroup - Optiona
 * @returns
 */
function insertExpandableBtn(btns, anchor, before = 'beforebegin', titlesGroup, append = true, dataGroup) {
    if (!anchor)
        return;
    const btnsContainer = document.createElement('div');
    btnsContainer.classList.add(css.inlineButtonsContainer);
    if (defaultLanguage === 'AR')
        btnsContainer.dir = 'rtl';
    if (dataGroup)
        btnsContainer.dataset.group = dataGroup;
    anchor.insertAdjacentElement(before, btnsContainer);
    btns.forEach(btn => insert(btn));
    function insert(btn) {
        const html = createHtmlBtn({
            btn: btn,
            btnsContainer: btnsContainer,
            btnClass: btn.cssClass || css.inlineButton,
            clear: false,
            onClick: () => {
                const id = btn.btnID + 'Expandable';
                let expandable = containerDiv.querySelector('#' + id);
                if (expandable)
                    return toggle(expandable, btns.map(btn => btn.btnID), titlesGroup);
                (async function insertExpandable() {
                    expandable = document.createElement('div');
                    expandable.id = id;
                    btnsContainer.insertAdjacentElement('afterend', expandable);
                    await displayChildButtonsOrPrayers(btn, false, false);
                    expandable.appendChild(btn.docFragment);
                    if (!titlesGroup)
                        return;
                    const titles = Array.from(expandable.children).filter((div) => isTitlesContainer(div));
                    if (!append)
                        titles.reverse();
                    showTitlesInRightSideBar(titles, undefined, false, titlesGroup + btn.btnID, append, titlesGroup); //We add a prefix in order to avoid duplicate ids with already existing divs
                    toggle(expandable, btns.map(btn => btn.btnID), titlesGroup, false); //!Notice that toggle = false because we don't want to hide the expandable that we have just created for the first time
                })();
            }
        });
        html.classList.add(css.expand); //We need this class in order to retrieve the btn in Display Presentation Mode
    }
    btnsContainer.style.gridTemplateColumns = setGridColumnsOrRowsNumber(btnsContainer, 3);
    return btnsContainer;
    function toggle(expandable, ids, titleGroup, toggle = true) {
        if (!expandable)
            return;
        ids.filter(id => !RegExp(id).test(expandable.id))
            .forEach(id => {
            //We hide all the other expandables and their titles
            containerDiv.querySelector('#' + id + 'Expandable')?.classList.add(css.hidden);
            toggleTitles(titleGroup + id, true);
        });
        if (!toggle)
            return; //It means we don't want to toggle the expandable itself and its titles
        expandable.classList.toggle(css.hidden);
        toggleTitles(titleGroup + expandable.id.replace('Expandable', ''));
        function toggleTitles(group, hide = false) {
            if (!group)
                return;
            const titles = Array.from(sideBarTitlesContainer.children)
                .filter((div) => div.dataset.group === group);
            if (!hide)
                titles.forEach(div => div.classList.toggle(css.hidden));
            else
                titles.forEach(div => div.classList.add(css.hidden));
        }
        ;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVjbGFyZUJ1dHRvbnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9tb2R1bGVzL0RlY2xhcmVCdXR0b25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFNBQVMsU0FBUztJQUNoQixPQUFPO1FBQ0wsT0FBTyxFQUFFO1lBQ1AscU5BQXFOO1lBQ3JOLE1BQU0sQ0FBQyxhQUFhLEdBQUcsY0FBYztZQUNyQyxNQUFNLENBQUMsV0FBVyxHQUFHLFNBQVM7WUFDOUIsTUFBTSxDQUFDLGFBQWEsR0FBRyxlQUFlO1lBQ3RDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsWUFBWTtZQUNqQyxNQUFNLENBQUMsV0FBVyxHQUFHLGlCQUFpQjtZQUN0QyxNQUFNLENBQUMsV0FBVyxHQUFHLGlCQUFpQjtZQUN0QyxNQUFNLENBQUMsY0FBYyxHQUFHLGdCQUFnQjtZQUN4QyxNQUFNLENBQUMsV0FBVyxHQUFHLGNBQWM7WUFDbkMsTUFBTSxDQUFDLGNBQWMsR0FBRyxxQkFBcUI7WUFDN0MsTUFBTSxDQUFDLGFBQWEsR0FBRyxZQUFZO1lBQ25DLE1BQU0sQ0FBQyxhQUFhLEdBQUcsY0FBYztZQUNyQyxNQUFNLENBQUMsYUFBYSxHQUFHLFlBQVk7U0FDcEM7UUFDRCxJQUFJLEVBQUU7WUFDSixxR0FBcUc7WUFDckcsVUFBVSxFQUFFO2dCQUNWLE1BQU0sQ0FBQyxVQUFVLEdBQUcsZUFBZTtnQkFDbkMsTUFBTSxDQUFDLFVBQVUsR0FBRyxpQkFBaUI7Z0JBQ3JDLE1BQU0sQ0FBQyxVQUFVLEdBQUcscUJBQXFCO2dCQUN6QyxNQUFNLENBQUMsVUFBVSxHQUFHLHNCQUFzQjtnQkFDMUMsTUFBTSxDQUFDLFlBQVksR0FBRyxjQUFjO2dCQUNwQyxNQUFNLENBQUMsVUFBVSxHQUFHLHdCQUF3QjtnQkFDNUMsTUFBTSxDQUFDLFVBQVUsR0FBRyxXQUFXO2dCQUMvQixNQUFNLENBQUMsVUFBVSxHQUFHLFVBQVU7Z0JBQzlCLE1BQU0sQ0FBQyxVQUFVLEdBQUcsbUJB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QyxJQUFJLENBQUMsS0FBSyxDQUFDO29CQUN4RCxPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQSw2REFBNkQ7cUJBRS9LLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsdUJBQXVCLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssVUFBVSxDQUFDO29CQUN6SSxPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7cUJBRTNILElBQUksS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO29CQUN0QyxPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsS0FBSyxHQUFHLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztxQkFFM0UsSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsR0FBRyxzQkFBc0IsR0FBRyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsZUFBZSxFQUFFLE9BQU8s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