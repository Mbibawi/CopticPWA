const Sequences = {
    Incense: [
        //This is the generic sequence of any incense office (morning or evening). The onClick function triggered by btnIncenseDawn and btnIncenseVespers, will remove what is irrelevant and add keeps what needs to be kept
        Prefix.commonIncense + "Introduction",
        Prefix.bookOfHours + "Psalm50",
        Prefix.commonIncense + "LitaniesIntroduction",
        Prefix.incenseDawn + "SickLitany",
        Prefix.incenseDawn + "TravelersLitany",
        Prefix.incenseDawn + "OblationsLitany",
        Prefix.incenseVespers + "DepartedLitany",
        Prefix.commonPrayer + "AngelsPrayer",
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
            Prefix.massCommon + "IntercessionsHymn" + anyDay,
            Prefix.commonPrayer + "Creed"
        ], //Those are the prayers of the 'Unbaptized Mass'
        StBasil: [
            Prefix.massCommon + "ReconciliationComment",
            Prefix.massStBasil + "Reconciliation",
            Prefix.massCommon + "EndOfReconciliation",
            Prefix.massStBasil + "Anaphora",
            Prefix.massStBasil + "Agios",
            Prefix.massStBasil + "InstitutionNarrative" + anyDay,
            Prefix.massCommon + "AsWeAlsoCommemorateHisHolyPassionPart1" + anyDay,
        ], //The sequence of prayers of St Basil Mass (starting from Reconciliation)
        StGregory: [
            Prefix.massCommon + "ReconciliationComment",
            Prefix.massStGregory + "Reconciliation",
            Prefix.massCommon + "EndOfReconciliation",
            Prefix.massStGregory + "Anaphora",
            Prefix.massStGregory + "Agios",
            Prefix.massStGregory + "AsWeCommemorateYourHolyPassionPart1" + anyDay,
            Prefix.massStGregory + "CallOfTheHolySpiritPart1",
            Prefix.massStGregory + "LitaniesIntroduction",
            Prefix.massStGregory + "Litanies" + anyDay,
            Prefix.massStGregory + "FractionIntroduction"
        ], //The sequence of prayers of St Gregory Mass (starting from reconciliation)
        StCyril: [
            Prefix.massCommon + "ReconciliationComment",
            Prefix.massStCyril + "Reconciliation",
            Prefix.massCommon + "EndOfReconciliation",
            Prefix.massStCyril + "Anaphora",
            Prefix.massStCyril + "Agios",
            Prefix.massStCyril + "Part8" + anyDay,
            Prefix.massStCyril + "Part9" + anyDay,
            Prefix.massStCyril + "Part10" + anyDay,
            Prefix.massStCyril + "LitaniesIntroduction",
            Prefix.massCommon + "AsItWereSoLetItBe",
        ], // the sequence of prayers of St Cyril Mass (starting from Reconciliation)
        StJohn: [], // the sequence of prayers of St John Mass (tarting from Reconciliation)
        CallOfHolySpirit: [
            Prefix.massCommon + "CallOfTheHolySpiritPart1",
        ],
        Litanies: [
            Prefix.massCommon + "LitaniesIntroduction",
            Prefix.massCommon + "SaintsCommemoration",
            Prefix.massCommon + "CommemorationOfTheDeparted",
            Prefix.massCommon + "FractionIntroduction",
            Prefix.commonPrayer + "OurFatherInHeaven",
            Prefix.commonPrayer + "BlockInTheNameOfOurLord",
            Prefix.massCommon + "PrayerForTheFather" + anyDay,
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
            Prefix.commonPrayer + "WeExaltYouStMary",
            Prefix.commonPrayer + "Creed",
            Prefix.commonPrayer + "HolyLordOfSabaot",
            Prefix.psalmody + "ConcludingHymn",
            Prefix.commonPrayer + "HolyLordOfSabaot",
            Prefix.commonPrayer + "OurFatherInHeaven",
            Prefix.commonPrayer + "Agios",
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
            Prefix.HolyWeek + "HourIntroduction&D=$Seasons.HolyWeek",
            Prefix.HolyWeek + "PsalmAndGospel&D=$Seasons.HolyWeek",
            Prefix.HolyWeek + "Commentary&D=$Seasons.HolyWeek",
            Prefix.HolyWeek + "PassoverEnd&D=$Seasons.HolyWeek",
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
const ReadingsIntrosAndEnds = {
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
const bookOfHours = {
    //The first element is the array that will be populated with the text tables. The second element is the sequence of the hour's psalms
    FirstHour: [
        [1, 2, 3, 4, 5, 6, 8, 11, 12, 14, 15, 18, 24, 26, 62, 66, 69, 112, 142],
        getLabel({
            AR: "بَاكِرْ",
            FR: "Matin",
            EN: "Morning"
        }),
    ],
    ThirdHour: [
        [19, 22, 23, 25, 28, 29, 33, 40, 42, 44, 45, 46],
        getLabel({
            AR: "السَاعَةِ الثَالِثَةِ",
            FR: "3ème heure",
            EN: "Third Hour",
        }),
    ],
    SixthHour: [
        [53, 56, 60, 62, 66, 69, 83, 84, 85, 86, 90, 92],
        getLabel({
            AR: "السَاعَةِ السَادِسَةِ",
            FR: "6ème heure",
            EN: "6th Hour",
        }),
    ],
    NinethHour: [
        [95, 96, 97, 98, 99, 100, 109, 110, 111, 112, 114, 115],
        getLabel({
            AR: "السَاعَةِ التَاسِعَةِ",
            FR: "9ème heure",
            EN: "9th Hour",
        }),
    ],
    EleventhHour: [
        [116, 117, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128],
        getLabel({
            AR: "السَاعَةِ الحَادِيَةِ عَشْرِ (الغروب)",
            FR: "11ème heure",
            EN: "11th Hour",
        }),
    ],
    TwelvethHour: [
        [129, 130, 131, 132, 133, 136, 137, 140, 141, 145, 146, 147],
        getLabel({
            AR: "السَاعَةِ الثانية عَشْرِ (النوم)",
            FR: "12ème heure",
            EN: "12th Hour",
        }),
    ],
    VeilHour: [
        [
            4, 6, 12, 15, 24, 26, 66, 69, 22, 42, 56, 85, 90, 96, 109, 114, 115, 120, 128, 129, 130, 131, 132, 133, 136, 140, 145, 118,
        ],
        getLabel({
            AR: "صَلاةِ السِتَارْ",
            FR: "Femeture du voile",
            EN: "Closing of the Veil",
        }),
    ],
    MidNight1Hour: [
        [3, 6, 12, 69, 85, 90, 116, 117, 118],
        getLabel({
            AR: "الخِدْمَة الأولى مِن صَلاةِ نِصْفِ الليل",
            FR: "Miniuit 1er service",
            EN: "Mid Night 1st Service",
        }),
    ],
    MidNight2Hour: [
        [119, 120, 121, 122, 123, 124, 125, 126, 127, 128],
        getLabel({
            AR: "الخِدْمَة الثانِيَة مِنْ صَلاةِ نِصْفِ الليل",
            FR: "Miniuit 2ème service",
            EN: "Mid Night 2nd Service",
        }),
    ],
    MidNight3Hour: [
        [129, 130, 131, 132, 133, 136, 137, 140, 141, 145, 146, 147],
        getLabel({
            AR: "الخِدْمَة الثَالِثَةِ مِنْ صَلاةِ نِصْفِ الليل",
            FR: "Miniuit 3ème service",
            EN: "Mid Night 3rd Service",
        }),
    ],
};
[
    Sequences,
    bookOfHours,
    ReadingsIntrosAndEnds,
    GreatLordFeasts,
    MinorLordFeasts,
    lordFeasts,
    saintsFeasts,
    celestialBeingsFeasts,
    MartyrsFeasts,
    nonMartyrsFeasts,
    stMaryFeasts,
].forEach(obj => Object.freeze(obj));
const btnMainMenu = new Button({
    btnID: "btnMain",
    label: getLabel({
        AR: "العودة إلى القائمة الرئيسية",
        FR: "Retour au menu principal",
    }),
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
            btnPsalmody.label = getLabel({
                AR: "الإبصلمودية الكيهكية",
                FR: "Psalmodie de Kiahk",
            });
        if (localStorage.editingMode === "true")
            btnMainMenu.children.push(getEditModeButton());
        [defaultLanguage, foreingLanguage].forEach(lang => getBibleVersion(lang, false));
    },
});
const btnGoToPreviousMenu = new Button({
    btnID: "btnGoBack",
    label: getLabel({ AR: "السابق", FR: "Retour", EN: "Go Back" }),
    backGroundImage: "url(./assets/btnMassBackground.jpg)",
    onClick: () => {
        scrollToTop(); //scrolling to the top of the page
    },
});
const btnMass = new Button({
    btnID: "btnMass",
    label: getLabel({ AR: "القداسات", FR: "Messes", EN: "Mass" }),
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
    label: getLabel({
        AR: "قٌدَّاسِ المَوْعُوظِينَ",
        FR: "Liturgie du Verbe",
        EN: "Unbaptised Mass",
    }),
    docFragment: new DocumentFragment(),
    languages: [...prayersLanguages],
    onClick: () => {
        //Adding children buttons to btnMassUnBaptised
        btnMassUnBaptised.children = btnDayReadings.onClick(true);
        let btnsPrayersSequence = [
            ...Sequences.Mass.Unbaptized,
        ];
        (function adaptAlleluiaFayBiBiAndTayshoury() {
            btnMassUnBaptised.prayersSequence = adaptPrayersSequence();
            function adaptPrayersSequence() {
                //If we are not during a fast period or we are during a fast period but today is either Saturday or Sunday, or a Lord Feast, we will remove Hallelujah Ge Evmevi and Tishoury, in order to keep Hallelujah Faybibi and Tayshouri
                if (!isFast
                    ||
                        [0, 6].includes(weekDay)
                    ||
                        lordFeasts.find(date => [copticDate, copticReadingsDate].includes(date)))
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
                            ["Tishoury", "EnsotyTishoury&D=$Seasons.GreatLent"]
                        ] //Replacing "Tishoury" with "Ensoty Tishoury"
                            .forEach(array => btnsPrayersSequence[btnsPrayersSequence.indexOf(Prefix.massCommon + array[0])] = Prefix.massCommon + array[1]);
                    }
                    //We will remove 'Hellulja Fay Bibi'and keep only 'Hellulja Ge Evmev'i". We will also remove Tayshoury in order to keep only Tishoury 
                    return btnsPrayersSequence
                        .filter(title => ![Prefix.massCommon + "AlleluiaFayBiBi", Prefix.massCommon + "Tayshoury"].includes(splitTitle(title)[0]));
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
        btnIncenseMorning.afterShowPrayers(btn); //By calling the afterShowPrayers() of btnIncenseMorning and passing btnMassUnbaptised as argument, the function will call hideGodHaveMercyOnUsIfBishop() and will return. This will create an expandable button for the "PrayThatGodHaveMercyOnUs" dicaon response
        (function insertHisFoundationsAndGodHaveMercy() {
            if (![Seasons.GreatLent, Seasons.JonahFast].includes(Season))
                return; //The following only applies during the Great Lent the 3 days of Jonah Fast (not the 4th day) that's why we check if isFast === true
            if ([6, 0].includes(todayDate.getDay()))
                return;
            let titles = [
                Prefix.commonPrayer + "WeHaveBeenSavedWithYou" + anyDay,
                Prefix.massCommon + "HisFoundations&D=$Seasons.GreatLent",
                Prefix.incenseDawn + "GodHaveMercyOnUsRefrain&D=$Seasons.GreatLent",
            ];
            selectElementsByDataSet(btnDocFragment, titles[0], { equal: true }, 'root').forEach(el => el.remove()); //We remove the existing 'Sotis Amen' prayer
            let tables = titles.map(title => findTable(title) || undefined); //We retrieve the 3 tables by their titles
            if (!tables || tables.length < 1)
                return;
            let anchor = selectElementsByDataSet(btnDocFragment, Prefix.massCommon + "AbsolutionForTheFather", { equal: true }, 'root')[0]; //This is the html element before which we will insert the retrived tables
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
        let readingsAnchor = selectElementsByDataSet(btnDocFragment, Prefix.anchor + "Readings")[0]; //this is the html element before which we will insert all the readings and responses
        (function insertIntercessionsHymnsForSeasons() {
            let seasonalIntercessions = MassCommonArray.filter((table) => RegExp('Intercessions\.\*D=').test(Title(table))
                &&
                    (isMultiDatedTitleMatching(Title(table), [copticDate, Season])));
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
                insertPrayersAdjacentToExistingElement({
                    tables: [table],
                    languages: getLanguages(Title(table)),
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
                let htmlDivs = selectElementsByDataSet(btnDocFragment, Prefix.massCommon + insertion + "" + anyDay);
                if (!htmlDivs || htmlDivs.length < 1)
                    return;
                return htmlDivs[htmlDivs.length - 1].nextElementSibling;
            }
        })();
        (function insertBiEhmotGharExpandable() {
            //After inserting the Intercessions hyms, we will isnert an expandable for Bi Ehmot Ghar
            // let btnsDiv = document.createElement('div');
            //  btnsDiv.classList.add(inlineBtnsContainerClass);
            //  readingsAnchor.insertAdjacentElement('beforebegin', btnsDiv);
            const biEhmotGhar = new Button({
                btnID: 'btnBiEhmotGhar',
                label: getLabel({
                    AR: "بي إهموت غار",
                    FR: "Ⲡⲓϩ̀ⲙⲟⲧ ⲅⲁⲣ"
                }),
                cssClass: inlineBtnClass,
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
                cssClass: inlineBtnClass,
                languages: prayersLanguages,
                docFragment: new DocumentFragment(),
                prayersSequence: [Prefix.massCommon + "IAghabi"],
            });
            insertExpandableBtn([biEhmotGhar, IAghabi], readingsAnchor, 'beforebegin', 'resp');
        })();
        insertBookOfHoursButton();
        await insertMassReadingsAndResponses();
        async function insertMassReadingsAndResponses() {
            let specialResponse;
            //St. Paul
            await insertMassReading(Prefix.stPaul, ReadingsIntrosAndEnds.stPaulIntro, ReadingsIntrosAndEnds.stPaulEnd);
            (function insertCatholiconResponse() {
                let cathResp = CatholiconResponsesArray.filter(tbl => isMultiDatedTitleMatching(Title(tbl), [Season, copticDate]));
                if (cathResp.length < 1)
                    cathResp = CatholiconResponsesArray.filter(tbl => Title(tbl) === Prefix.catholiconResponse + '&C=Title');
                if (cathResp.length < 1)
                    return;
                const response = new Button({
                    btnID: 'btnCatholiconResponse',
                    label: getLabel({
                        AR: cathResp[0][0][prayersLanguages.indexOf('AR') + 1], FR: cathResp[0][0][prayersLanguages.indexOf('FR') + 1]
                    }),
                    cssClass: inlineBtnClass,
                    docFragment: new DocumentFragment(),
                    onClick: () => {
                        let langs;
                        cathResp.map((table) => {
                            langs = getLanguages(Title(table));
                            showPrayers({
                                table: table,
                                languages: langs,
                                position: response.docFragment,
                                container: response.docFragment,
                                clearContainerDiv: false,
                                clearRightSideBar: false
                            });
                        });
                    }
                });
                insertExpandableBtn([response], readingsAnchor, 'beforebegin');
            })();
            //Catholicon
            await insertMassReading(Prefix.Catholicon, ReadingsIntrosAndEnds.CatholiconIntro, ReadingsIntrosAndEnds.CatholiconEnd);
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
                        PraxisResponsesArray.filter((table) => isMultiDatedTitleMatching(Title(table), [copticDate, copticReadingsDate]))
                            .filter(tbl => !Title(tbl)?.includes('&D=$saintsFeasts.')); //We look for a response for the copticDate or copticReadingsDate, and we exclude responses for saints feasts
                if (specialResponse.length < 1)
                    specialResponse = PraxisResponsesArray.filter((table) => isMultiDatedTitleMatching(Title(table), [Season])); //We look for a response for the Season
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
                    let noSeasonResponse = findTable(Prefix.praxisResponse, PraxisResponsesArray) || undefined;
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
                    let anchor = responses.find(div => div?.dataset.root === Prefix.anchor + "Saints");
                    if (!anchor)
                        return; //If no placeHolder is found, it means that we are during a special Season (not a 'NoSeason' period), and no placeHolder for the saints response is included
                    if (!Object.values(saintsFeasts).includes(copticDate))
                        return; //It means that today is not a saint feast
                    specialResponse = PraxisResponsesArray.filter((table) => Title(table)?.includes('&D=$saintsFeasts.') && isMultiDatedTitleMatching(Title(table), [copticDate]));
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
            await insertMassReading(Prefix.praxis, ReadingsIntrosAndEnds.praxisIntro, ReadingsIntrosAndEnds.praxisEnd);
            (function inserAfterPraxisResponse() {
                if (Season !== Seasons.ApostlesFast && copticDate !== copticFeasts.Apostles)
                    return;
                //In the Aposltes fast, and Apostles feast, there is a special response after the Praxis and before the Synaxarium
                let title = 'afterPraxis&D=$';
                if (copticDate === copticFeasts.Apostles)
                    title += 'copticFeasts.Apostles';
                else if (Season === Seasons.ApostlesFast)
                    title += 'Seasons.ApostlesFast';
                insertPrayersAdjacentToExistingElement({
                    tables: PraxisResponsesArray.filter(tbl => RegExp(title.replace('$', '\\$')).test(Title(tbl))),
                    languages: getLanguages(Prefix.praxisResponse),
                    position: {
                        el: readingsAnchor,
                        beforeOrAfter: 'beforebegin'
                    },
                    container: btnDocFragment
                });
            })();
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
                await insertMassReading(Prefix.synaxarium, intro, undefined, copticDate); //!Caution: we must pass the copticDate for the 'date' argument, otherwise it will be set to the copticReadingsDate by default, and we will get the wrong synaxarium
                //We will reverse the langauges
                let introHTML = selectElementsByDataSet(btnDocFragment, Prefix.synaxarium + "&D=" + copticDate)[1];
                if (!introHTML || introHTML.children.length < 1)
                    return console.log('Didn\'t find the Synaxarium');
                introHTML.children[0].insertAdjacentElement("beforebegin", introHTML.children[0]);
            }
            ;
            async function insertMassReading(readingPrefix, readingIntro, readingEnd, date = copticReadingsDate) {
                if (!readingPrefix)
                    return;
                let readings;
                readings = await insertMassReadingOtherThanGospel(readingPrefix, { beforeOrAfter: "beforebegin", el: readingsAnchor }, btnDocFragment, false, date);
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
                    Agios = Agios.replace('&D=$copticFeasts.', '');
                let AgiosTable = findTable(Agios, MassCommonArray) || undefined;
                if (!AgiosTable)
                    return console.log("Didn't find the special Agios table in PrayersArray");
                (function adaptToAscension() {
                    if (Season !== Seasons.Ascension)
                        return; //i.e. if we are between the Pentecoste & the Assumption feasts: day 40 to day 49
                    let raisedAndAscended = findTable(Prefix.commonPrayer + "AgiosPart1", CommonArray, {
                        equal: true,
                    })[3]; //This is the 3rd paragraph of the ordinary Agios Osios Hymn ('For He Raised and Ascended to the Heaveans'...etc.)
                    if (!raisedAndAscended)
                        return;
                    [4, 5, 6].forEach(index => AgiosTable[AgiosTable.length - index] = raisedAndAscended); //Replacing the 3 Agios paragraphs with the Ascension paragraph
                })();
                insertPrayersAdjacentToExistingElement({
                    tables: [AgiosTable],
                    languages: getLanguages(Title(AgiosTable)),
                    position: {
                        beforeOrAfter: "beforebegin",
                        el: readingsAnchor?.nextElementSibling,
                    },
                    container: btnDocFragment,
                });
            })();
            await insertGospelReadingAndResponses({
                liturgy: Prefix.gospelMass,
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
            let masterBtnDiv;
            (function createMasterButton() {
                masterBtnDiv = document.createElement("div"); //This is the div that will contain the master button which shows or hides the Book of Hours sub buttons
                masterBtnDiv.classList.add(inlineBtnsContainerClass);
                masterBtnDiv.id = "masterBOHBtn";
                let masterBtn = new Button({
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
                }));
                btnDocFragment.prepend(masterBtnDiv);
            })();
            (function createHtmlButtonForEachHour() {
                //We will create an HTML div (role = button) and an expandable div for each hour
                let btns = hoursBtns
                    .map((btn) => {
                    btn.onClick(true); //We call the onClick() method of the btn in order to build its prayersSequence properties. Notice that we passs 'true' as argument to the onClick() function
                    if (localStorage.displayMode === displayModes[1])
                        //If we are in the 'Presentation Mode', we remove all the psalms and keep only the Gospel and the Litanies
                        btn.prayersSequence = btn.prayersSequence
                            .filter((title) => !title?.includes("Psalm"));
                    InsertHourFinalPrayers(btn); //Inserting Kyrielison 41 times, Agios, Holy God of Sabaot, etc.
                    return new Button({
                        btnID: btn.btnID,
                        label: btn.label,
                        cssClass: inlineBtnClass,
                        languages: btnBookOfHours.languages,
                        docFragment: new DocumentFragment(),
                        prayersSequence: btn.prayersSequence,
                    });
                });
                const btnsDiv = insertExpandableBtn(btns, masterBtnDiv, 'afterend', 'BOH', false);
                btnsDiv.id = 'BOHBtnsDiv';
                btnsDiv.classList.add(hidden);
                Array.from(btnsDiv.children).forEach(htmlBtn => htmlBtn.addEventListener('click', () => {
                    scrollToTop();
                    let expandable = containerDiv.querySelector('#' + htmlBtn.id + 'Expandable');
                    if (!expandable)
                        return;
                    if (!expandable.classList.contains(hidden))
                        floatOnTopOrBottom(btnsDiv, true, '3px');
                    else
                        btnsDiv.style.position = 'relative';
                    collapseAllTitles(Array.from(expandable.children));
                }));
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
            function InsertHourFinalPrayers(hourBtn) {
                hourBtn.prayersSequence.push(...getSequence().map(el => Prefix.commonPrayer + el));
                function getSequence() {
                    let Agios = "Agios", Kyrielison41 = "Kyrielison41", KyrielisonNoMass = Kyrielison41 + "NoMassIntro", KyrielisonMass = Kyrielison41 + "MassIntro", HolyLordOfSabaot = "HolyLordOfSabaot", HailMaria = "WeSaluteYouMary", WeExaltYou = "WeExaltYouStMary", Creed = "Creed", OurFather = "OurFatherInHeaven";
                    if (hoursBtns.indexOf(hourBtn) === hoursBtns.length - 1) {
                        //This is the last hour btn
                        return [
                            WeExaltYou,
                            Creed,
                            KyrielisonMass,
                            HolyLordOfSabaot,
                            OurFather,
                        ];
                    }
                    else if (hoursBtns.indexOf(hourBtn) === hoursBtns.length - 2) {
                        //this is the before last hour btn
                        return [Agios, OurFather, HailMaria];
                    }
                    else {
                        //Any other hour before the 2 last
                        return [
                            KyrielisonNoMass,
                            HolyLordOfSabaot,
                            OurFather,
                        ];
                    }
                }
            }
        }
        ;
    },
});
const btnReadingsStPaul = new Button({
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
const btnReadingsCatholicon = new Button({
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
const btnReadingsPraxis = new Button({
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
const btnReadingsSynaxarium = new Button({
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
const btnPropheciesMorning = new Button({
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
const btnDayReadings = new Button({
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
    label: getLabel({ AR: "الأجبية", FR: "Agpia", EN: "Book of Hours" }),
    docFragment: new DocumentFragment(),
    parentBtn: btnMainMenu,
    languages: [...prayersLanguages],
    children: [],
    onClick: (returnBtnChildren = false) => {
        if (btnBookOfHours.children.length > 1)
            return btnBookOfHours.children;
        let OurFatherInHeaven = Prefix.commonPrayer + "OurFatherInHeaven", AngelsPrayers = Prefix.commonPrayer + "AngelsPrayer", HailToYouMaria = Prefix.commonPrayer + "WeSaluteYouMary", WeExaltYou = Prefix.commonPrayer + "WeExaltYouStMary", Agios = Prefix.commonPrayer + "Agios", KyrielisonIntro = "Kyrielison41NoMassIntro", HolyLordOfSabaot = Prefix.commonPrayer + "HolyLordOfSabaot", Creed = Prefix.commonPrayer + "Creed", FinalPrayer = Prefix.bookOfHours + "AllHoursFinalPrayer";
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
                        parentBtn: btnBookOfHours,
                        onClick: (isMass = false) => hourBtnOnClick(hourBtn, hourName, isMass),
                        afterShowPrayers: () => hourBtnAfterShowPrayer(btnLabel),
                    });
                    btnBookOfHours.children.push(hourBtn);
                });
            })();
            (function addOtherPrayersBtns() {
                let otherPrayers = [Prefix.bookOfHours + 'BeforeCommunion', Prefix.bookOfHours + 'AfterCommunion' + anyDay];
                let otherPrayersBtn = new Button({
                    btnID: 'otherPrayersBtn',
                    label: getLabel({
                        AR: 'صلوات أخرى',
                        FR: 'Diverses prières',
                        EN: 'Various Prayers'
                    }),
                    children: otherPrayers.map(title => otherPrayerBtn(title))
                });
                btnBookOfHours.children.push(otherPrayersBtn);
                function otherPrayerBtn(title) {
                    let table = findTable(title, BookOfHoursArray) || undefined;
                    if (!table)
                        return undefined;
                    return new Button({
                        btnID: "btnOtherPrayer" + otherPrayers.indexOf(title) + 1,
                        label: getLabel({
                            AR: table[0][btnBookOfHours.languages.indexOf('AR') + 1],
                            FR: table[0][btnBookOfHours.languages.indexOf('FR') + 1]
                        }),
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
                        .map((title) => Prefix.bookOfHours + "Psalm" + title.toString()); //We add the psalms
                    btn.prayersSequence.unshift(Prefix.bookOfHours + hourName + "Title"); //This is the title of the hour prayer
                    ["Gospel", "Litanies"].forEach((title) => btn.prayersSequence.push(Prefix.bookOfHours + hourName + title)); //We add the gospel and the Litanies
                    //Then, we add the End of all Hours' prayers (ارحمنا يا الله ثم ارحمنا) except for the 1st and 2nd services of the Midnight Prayer
                    (function addFinalPrayersToSequence() {
                        if (isMass)
                            return; //!Important: If the onClick() method is called when the button is displayed in the Unbaptised Mass, we do not add anything else to the btn's prayersSequence
                        let btnLable = btn.label, HourIntro = [
                            Prefix.commonPrayer +
                                "ThanksGivingPart1",
                            Prefix.commonPrayer +
                                "ThanksGivingPart2",
                            Prefix.commonPrayer +
                                "ThanksGivingPart3",
                            Prefix.commonPrayer +
                                "ThanksGivingPart4",
                            Prefix.bookOfHours + "Psalm50",
                        ], endOfHourPrayersSequence = [
                            AngelsPrayers,
                            Agios,
                            OurFatherInHeaven,
                            HailToYouMaria,
                            WeExaltYou,
                            Creed,
                            KyrielisonIntro,
                            HolyLordOfSabaot,
                            OurFatherInHeaven,
                            Prefix.bookOfHours + hourName + "End",
                            FinalPrayer,
                            OurFatherInHeaven,
                        ];
                        if (btnLable === bookOfHours.MidNight1Hour[1])
                            HourIntro.push(Prefix.psalmody + "WakeUpSonsOfLight"); //We add the 'Wake Up Sons of Light' for the 1st Service of Midnight
                        if (btnLable === bookOfHours.TwelvethHour[1])
                            endOfHourPrayersSequence.splice(0, 1); //If it is the 12th (Night) Hour, we remove the Angels Prayer from endOfHourPrayersSequence
                        btn.prayersSequence.splice(1, 0, ...HourIntro); //We  add the titles of the HourIntro before the 1st element of btn.prayersSequence[]
                        if (btnLable === bookOfHours.MidNight3Hour[1]) {
                            //Removing all the prayers before the Creed (index = 4) and replacing them with other prayers
                            endOfHourPrayersSequence.splice(0, 5, KyrielisonIntro, HolyLordOfSabaot, OurFatherInHeaven, Prefix.bookOfHours + hourName + "2ndGospel");
                            //Inserting the Priests Absolution at the end
                            endOfHourPrayersSequence.push(Prefix.bookOfHours + hourName + "PriestsAbsolution");
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
                            btn.prayersSequence.push(KyrielisonIntro, HolyLordOfSabaot, OurFatherInHeaven);
                        }
                    })();
                })();
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
    label: getLabel({
        AR: "الإبصلمودية السنوية",
        FR: "Psalmodie (anuelle)",
        EN: "Psalmody (anual)"
    }),
    onClick: () => {
        if (btnPsalmody.children)
            return btnPsalmody.children;
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
        const todayPraise = { AR: 'تسبحة اليوم', FR: 'Louange du jour' };
        const otherDay = {
            AR: ' تسبحة يوم',
            FR: 'Louange du ',
        };
        btnPsalmody.children = [
            createBtn(weekDay, getLabel(todayPraise)),
            ...[0, 1, 2, 3, 4, 5, 6]
                .filter(d => d !== weekDay)
                .map(d => createBtn(d, getLabel(otherDay)))
        ];
        checkIfInASpecificSeason(todayDate); //We reset the Season to today
        return btnPsalmody.children;
        function createBtn(day, label) {
            let date = todayDate.getTime();
            day > weekDay ? date += (day - weekDay) * calendarDay : date -= (weekDay - day) * calendarDay;
            checkIfInASpecificSeason(new Date(date)); //We change the Season according to the date
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
            if ([Seasons.KiahkWeek1, Seasons.KiahkWeek2, Seasons.KiahkWeek3, Seasons.KiahkWeek4].includes(season))
                return btn.prayersSequence = Sequences.Psalmody.Kiahk;
            btn.prayersSequence =
                Sequences.Psalmody.Year
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
const btnIncenseMorning = new Button({
    btnID: "btnIncenseDawn",
    label: getLabel({
        AR: "بُخُورِ بَاكِرِ",
        FR: "Encens du Matin",
        EN: "Morning Incense Office"
    }),
    languages: [...prayersLanguages],
    docFragment: new DocumentFragment(),
    onClick: () => {
        btnIncenseMorning.children = []; //!We need to reinitiate the children each time because in some cases (liken in case btnLakkan is clicked) there are buttons added to btnIncenseMorning children
        btnIncenseMorning.prayersSequence = [...Sequences.Incense].filter((title) => !title?.startsWith(Prefix.incenseVespers)); //We will remove all the Incense Vespers titles from the prayersSequence Array
        if (weekDay === 6)
            //If we are a Saturday, we pray only the 'Departed Litany', we will hence remove the 'Sick Litany' and the 'Travellers Litany'
            btnIncenseMorning.prayersSequence.splice(btnIncenseMorning.prayersSequence.indexOf(Prefix.incenseDawn + "SickLitany"), 3, //We remove the SickPrayer, the TravelersParayer and the Oblations Prayer
            Prefix.incenseVespers + "DepartedLitany");
        else if (weekDay === 0 || lordFeasts.includes(copticDate))
            //If we are a Sunday or the day is a Lord's Feast, or the oblation is present, we remove the 'Travellers Litany' and keep the 'Sick Litany' and the 'Oblation Litany'
            btnIncenseMorning.prayersSequence = btnIncenseMorning.prayersSequence.filter((tbl) => !Title(tbl)?.startsWith(Prefix.incenseDawn + "TravelersLitany"));
        scrollToTop();
        return btnIncenseMorning.prayersSequence;
    },
    afterShowPrayers: async (btn = btnIncenseMorning, gospelPrefix = Prefix.gospelMorning) => {
        let btnDocFragment = btn.docFragment;
        (function adaptThanksGiving() {
            const parags = Array.from(selectElementsByDataSet(btn.docFragment, Prefix.commonPrayer + "ThanksGiving", undefined, 'root')[7].children);
            let parag;
            prayersLanguages.forEach(lang => {
                parag = parags?.find(p => p.classList.contains(lang));
                if (!parag)
                    return;
                if (btn === btnIncenseMorning)
                    parag.innerHTML = parag.innerHTML.replace(variable.thanksVespers[lang], variable.thanksMorning[lang]);
                else if (btn === btnMassUnBaptised)
                    parag.innerHTML = parag.innerHTML.replace(variable.thanksVespers[lang], variable.thanksMass[lang]);
                else if (btn.btnID === btnLakkan.btnID)
                    parag.innerHTML = parag.innerHTML.replace(variable.thanksVespers[lang], variable.thanksLakan[lang]);
            });
        })();
        if (![btnIncenseMorning, btnIncenseVespers].includes(btn))
            return hideGodHaveMercyOnUsIfBishop(); //The following applies only to btnIncenseMorning & btnIncenseVespers
        insertCymbalVersesAndDoxologies(btn);
        await insertGospelReadingAndResponses({
            liturgy: gospelPrefix,
            languages: getLanguages(gospelPrefix),
            container: btnDocFragment,
            isMass: true,
            clearContainer: false,
        });
        hideGodHaveMercyOnUsIfBishop();
        function hideGodHaveMercyOnUsIfBishop() {
            let dataRoot = Prefix.commonPrayer +
                "PrayThatGodHaveMercyOnUs";
            let godHaveMercyHtml = selectElementsByDataSet(btnDocFragment, dataRoot); //We select all the paragraphs not only the paragraph for the Bishop
            if (godHaveMercyHtml.length < 1)
                return; //This may occur if 'Diacon' prayers are hidden
            let length = godHaveMercyHtml?.length;
            godHaveMercyHtml
                .filter((htmlRow) => godHaveMercyHtml?.indexOf(htmlRow) > 0 &&
                godHaveMercyHtml?.indexOf(htmlRow) < length - 2)
                .forEach((htmlRow) => htmlRow.remove());
            if (btn === btnMassUnBaptised)
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
                cssClass: inlineBtnClass,
                docFragment: new DocumentFragment(),
                onClick: () => {
                    showPrayers({
                        table: godHaveMercy,
                        languages: btnMassUnBaptised.languages,
                        position: haveMercy.docFragment,
                        container: haveMercy.docFragment,
                        clearContainerDiv: false,
                        clearRightSideBar: false,
                    });
                }
            });
            insertExpandableBtn([haveMercy], godHaveMercyHtml[0].nextElementSibling, 'beforebegin');
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
            let anchor = selectElementsByDataSet(btnDocFragment, Prefix.anchor + "Prophecies", undefined, 'root')[0];
            (function insertProphecies() {
                //! This must come before Eklonomin Taghonata has been inserted
                let Prophecies = findTable(Prefix.prophecies + "&D=" + copticReadingsDate, ReadingsArrays.PropheciesDawnArrayFR);
                if (!Prophecies)
                    return console.log("Didn't find Prophecies with the current date");
                let title = [[Title(Prophecies), 'نبوات باكر', 'Prophecies', '']];
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
                let godHaveMercy = findTable(Prefix.incenseDawn + "GodHaveMercyOnUs&D=$Seasons.GreatLent", IncenseArray);
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
                    let refrains = selectElementsByDataSet(btnDocFragment, Prefix.incenseDawn + "GodHaveMercyOnUsRefrain&D=$Seasons.GreatLent")
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
            const doxologies = new Button({
                btnID: 'AdamDoxologies',
                label: getLabel({
                    AR: "ذكصولوجيات باكر آدام",
                    FR: "Doxologies Adam du Matin",
                    EN: "Adam Doxologies",
                }),
                cssClass: inlineBtnClass,
                languages: btnIncenseMorning.languages,
                docFragment: new DocumentFragment(),
                prayersSequence: [Prefix.doxologies + "DawnAdam"],
            });
            insertExpandableBtn([doxologies], btnDocFragment.children[0], 'beforebegin');
        })();
        (function insertLakkanBtn() {
            if (copticDate === '1005')
                insertExpandable(copticFeasts.Baptism);
            else if (copticDate === copticFeasts.Apostles)
                insertExpandable(copticFeasts.Apostles);
            else if (copticReadingsDate === copticFeasts.HolyThursday)
                insertExpandable(copticReadingsDate);
            async function insertExpandable(date) {
                const lakkanBtn = new Button({
                    btnID: btnLakkan.btnID,
                    label: btnLakkan.label,
                    docFragment: new DocumentFragment(),
                    onClick: () => btnLakkan.onClick(date, lakkanBtn),
                    afterShowPrayers: async () => await btnLakkan.afterShowPrayers(date, lakkanBtn)
                });
                btnIncenseMorning.children = [lakkanBtn];
                let children = btnDocFragment.children;
                if (copticDate === '1005')
                    insertExpandableBtn([lakkanBtn], children[0], 'beforebegin', 'Lakan');
                else
                    insertExpandableBtn([lakkanBtn], children[children.length - 1], 'afterend', 'Lakan');
            }
            ;
        })();
        /**
       * Inserts the Incense Office Doxologies And Cymbal Verses according to the Coptic feast or season
       * @param {HTMLElement | DocumentFragment} container - The HtmlElement in which the btn prayers are displayed and to which they are appended
       */
        async function insertCymbalVersesAndDoxologies(btn) {
            if ([btnMassUnBaptised].includes(btn))
                return;
            if (!btn.docFragment)
                return console.log("btn.docFragment is undefined = ", btn.docFragment);
            let dayFeasts = (() => {
                let dates = [copticDate];
                if (!RegExp('\\d\\d\\d\\d').test(copticReadingsDate))
                    dates.push(copticReadingsDate); //We do this in order to avoid including a reading date of 4 digits while the reading repeats more than once per year on other days than the feast day itself (eg. the 0511 copticReadingDate repeats several times not only on the Apostles feast). This will leave us only with the copticReadingsDate including letters: like GL, PNTL, JONAS, etc
                let feast = [];
                let matching = Object.entries(copticFeasts).find((entry) => dates.includes(entry[1])); //We check if today is a feast. We also check by the copticReadingsDate because some feast are referrenced by the copticReadings date : eg. Pntl39
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
                anchor = selectElementsByDataSet(btn.docFragment, Prefix.anchor + "CymbalVerses")[0];
                if (!anchor)
                    return console.log("We didn't find the cymbal verses placeholder");
                let cymbals;
                if ([Seasons.JonahFast, Seasons.GreatLent].includes(Season) && ![0, 6].includes(weekDay))
                    //If we are during the Jonah Fast or during the Great Lent but not on a Saturday or a Sunday, the Cymbal Verses are not chanted, they are replaced by the Long Kyrielison and the Cymbal Verses End
                    cymbals =
                        [
                            findTable(Prefix.cymbalVerses + "End", CymbalVersesArray) || undefined,
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
                (function insertSaintsExpandable() {
                    const anchor = selectElementsByDataSet(btnDocFragment, Prefix.anchor + "SaintsCymbals", undefined, 'root')[0];
                    if (!anchor)
                        return;
                    const cymbals = CymbalVersesArray.filter(table => Title(table).includes('St'))
                        .filter(tbl => !['Mary', 'Maykel', 'Steven', 'John', 'Marc'].find(saint => Title(tbl).includes(saint)));
                    if (cymbals.length < 1)
                        return;
                    const saints = cymbals.map(table => {
                        const name = splitTitle(Title(table))[0].split(Prefix.cymbalVerses)[1].replace('St', '');
                        const newBtn = new Button({
                            btnID: 'btnCymbal' + (cymbals.indexOf(table) + 1).toString(),
                            label: getLabel({
                                AR: table[0][prayersLanguages.indexOf('AR') + 1],
                                FR: table[0][prayersLanguages.indexOf('FR') + 1],
                            }),
                            cssClass: inlineBtnClass,
                            docFragment: new DocumentFragment(),
                            onClick: () => {
                                showPrayers({
                                    table: table,
                                    languages: prayersLanguages,
                                    container: newBtn.docFragment,
                                    clearContainerDiv: false,
                                    clearRightSideBar: false
                                });
                            }
                        });
                        return newBtn;
                    });
                    (function createMasterBtn() {
                        const masterDiv = document.createElement('div');
                        masterDiv.id = 'masterCymbal';
                        masterDiv.classList.add(inlineBtnsContainerClass);
                        anchor.insertAdjacentElement('beforebegin', masterDiv);
                        const masterCymbal = new Button({
                            btnID: 'btnCymbals',
                            label: getLabel({
                                AR: 'أرباع القديسين',
                                FR: 'Autres saints',
                                EN: '',
                            }),
                            onClick: () => {
                                const id = 'cymbalsBtnsDiv';
                                let btnsDiv = containerDiv.querySelector('#' + id);
                                if (btnsDiv)
                                    return btnsDiv.classList.toggle(hidden);
                                btnsDiv = insertExpandableBtn(saints, anchor, 'afterend', 'cymbals');
                                btnsDiv.id = id;
                            }
                        });
                        createHtmlBtn({
                            btn: masterCymbal,
                            btnsContainer: masterDiv,
                            btnClass: inlineBtnClass,
                            clear: false,
                            onClick: masterCymbal.onClick //!We need to set the onClick property otherwise it will be set to showChildBtnsOrPrayers(masterCymbal) which, at its turn, will call the setCSS() for the containerDiv (the container by default since masterCymbal does not have a docFragment) for the second time
                        });
                    })();
                })();
                function getCymbalVerses() {
                    let sequence = [
                        Prefix.cymbalVerses + isWatosOrAdam(),
                        Prefix.cymbalVerses,
                    ];
                    //If we are during any of the Lord Feasts (or any season where we follow the same pattern), we add "Jesus Christ is the same for ever...",
                    if ([...lordFeasts, copticFeasts.Coptic29th].includes(copticDate) ||
                        [Seasons.Nativity, Seasons.Baptism, Seasons.PentecostalDays, Seasons.Ascension].includes(Season))
                        sequence =
                            [Prefix.cymbalVerses + "LordFeastsEnd"];
                    if (dayFeasts)
                        dayFeasts.forEach((feast) => [
                            ...lordFeasts,
                            Seasons.Nativity,
                            Seasons.Baptism,
                            Seasons.PentecostalDays,
                            Seasons.Ascension
                        ].includes(feast) //During Seasons.Nativity (i.e., between Nativity and Circumcision) and Seasons.Baptism(from Baptism to Cana Wedding), the Cymbals verses follow the pattern of any Lord Feast: it starts with "Amoyni Marin..." or "Ten O'osht", then the cymbal verses of the feast, and finally, the "Eb'oro enti ti hirini". We will hence remove the 2nd element from the sequence
                            ? insertFeastInSequence(sequence, feast, 0, 0)
                            : insertFeastInSequence(sequence, feast, 1, 0)); //We always start with 'Amoyni Marin...' or with 'Tin O'osht...', so we will insert the feast element before the 2nd element, and will not delete anything
                    return processSequence(sequence, Prefix.cymbalVerses);
                }
            })();
            (async function InsertCommonDoxologies() {
                let doxologiesAnchor = selectElementsByDataSet(btn.docFragment, Prefix.anchor + "Doxologies")[0];
                if (!doxologiesAnchor)
                    return console.log("Didn't find doxologiesPlaceholder");
                if (!doxologiesAnchor)
                    return;
                let sequence = [
                    Prefix.doxologies + isWatosOrAdam() + "StMary",
                    Prefix.doxologies + "StMaykel",
                    Prefix.doxologies + "CelestialBeings",
                    Prefix.doxologies + "Apostles",
                    Prefix.doxologies + "StMarc",
                    Prefix.doxologies + "StGeorge",
                    Prefix.doxologies + "StMina",
                    Prefix.doxologies + "EndOfDoxologiesWatos",
                ];
                if (btn === btnIncenseVespers)
                    sequence[0] = Prefix.doxologies + 'WatosStMaryVespers';
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
                            .filter((tbl) => !/Week\d&D=\$Seasons.GreatLent/.test(Title(tbl)))
                        :
                            doxologies = doxologies
                                .filter((tbl) => !Title(tbl)?.includes("Sundays&D=$Seasons.GreatLent"));
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
                let tables = [], tablesArray = getArrayFromPrefix(prefix);
                sequence.map((tblTitle) => {
                    if (!tblTitle.startsWith(prefix)) //It means that the title is a Coptic date or a Season
                        tablesArray
                            //!CAUTION: we must use 'filter' not 'find' because for certain feasts there are more than one doxology
                            .filter((tbl) => isMultiDatedTitleMatching(Title(tbl), [tblTitle]))
                            .forEach((tbl) => tables?.push(tbl));
                    else
                        tables.push(findTable(tblTitle, tablesArray));
                });
                return tables;
            }
        }
    },
});
const btnIncenseVespers = new Button({
    btnID: "btnIncenseVespers",
    label: getLabel({
        AR: "بُخُورِ عَشِيَّةَ",
        FR: "Encens Vêpres",
        EN: "Vespers Incense Office",
    }),
    docFragment: new DocumentFragment(),
    languages: [...prayersLanguages],
    onClick: () => {
        btnIncenseVespers.prayersSequence = [...Sequences.Incense].filter((title) => title !== Prefix.commonPrayer + "AngelsPrayer" &&
            !title.startsWith(Prefix.incenseDawn));
        scrollToTop();
        return btnIncenseVespers.prayersSequence;
    },
    afterShowPrayers: () => btnIncenseMorning.afterShowPrayers(btnIncenseVespers, Prefix.gospelVespers),
});
const btnLakkan = new Button({
    btnID: "btnLakkan",
    label: getLabel({
        AR: "صلاة اللقَّان",
        FR: "Cérémonie de la Bénédiction de l'eau",
        EN: 'Lakkan'
    }),
    onClick: (date, btn = btnLakkan) => {
        if (!date)
            return;
        btn.prayersSequence = [Prefix.incenseDawn + "Anaphora&D=" + date];
    },
    afterShowPrayers: async (date, btn = btnLakkan) => {
        if (!date)
            return;
        btnIncenseMorning.afterShowPrayers(btn); //We call it in order to hide the "Pray that God Have Mercy on Us" response for Pope and Bishop
        const lakan = {
            prophecies: [],
            stPaul: [],
            gospel: [],
            Agios: [...findTable(Prefix.commonPrayer + "AgiosPart1") || undefined, ...findTable(Prefix.commonPrayer + "GloryToFatherSonSpirit") || undefined],
            litany: findTable(Prefix.incenseDawn + 'LakanLitany&D=' + date) || undefined,
            cymbals: [],
            season: findTable(Prefix.massCommon + "SeasonalLitany&D=$Seasons." + Object.entries(Seasons).find(entry => entry[1] === naturalSeasons())[0]) || undefined,
            psalmResponse: [[Prefix.psalmResponse + date, ...prayersLanguages.map(lang => ReadingsIntrosAndEnds.psalmEnd[lang] || '')]],
            gospelResponse: findTable(Prefix.gospelResponse + 'Lakan&D=' + date) || undefined,
            spasmosAdam: '',
        };
        if (date === copticFeasts.Baptism) {
            lakan.prophecies = ['HAB:3:12-19', 'ISA:35:1-2', 'ISA:40:1-25', 'ISA:9:1-2', 'BAR:3:36-End/4:1-4', 'EZK:36:24-29', 'EZK:47:1-9'];
            lakan.stPaul = ['1CO:10:1-13'];
            lakan.gospel = ['PSA:113:3-5', 'MAT:3:1-17'];
            lakan.Agios = findTable(Prefix.massCommon + "Agios&D=$Seasons.Baptism") || undefined;
            lakan.cymbals = [...findTable(Prefix.cymbalVerses + "&D=$Seasons.Baptism") || undefined, ...findTable(Prefix.cymbalVerses + "PopeAndBishop") || undefined, ...findTable(Prefix.cymbalVerses + "LordFeastsEnd") || undefined];
        }
        else if (date === copticFeasts.Apostles) {
            lakan.prophecies = ['EXO:15:22-End/16:1-1', 'EXO:30:17-30', 'ISA:1:16-26', 'ISA:35:1-10', 'ISA:43:16-End/44:1-6', 'ZEC:8:7-19', 'ZEC:14:8-11'];
            lakan.stPaul = ['HEB:10:22-32'];
            lakan.gospel = ['PSA:50:7-7/50:10-10', 'JHN:5:1-18'];
            lakan.cymbals = findTable(Prefix.cymbalVerses + "&D=" + date) || undefined;
            lakan.spasmosAdam = Prefix.massCommon + "SpasmosAdamLong&D=$copticFeasts.Apostles";
        }
        else if (date === copticFeasts.HolyThursday) {
            lakan.prophecies = [];
            lakan.stPaul = ['1TI:4:9-End/5:1-10'];
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
                anchor = selectElementsByDataSet(btn.docFragment, Prefix.anchor + title, undefined)[0];
                if (!anchor)
                    return;
                if (reading)
                    return insertReading(reading, anchor, getLanguages(Title(reading)));
                if (!title || !refs)
                    return;
                if (title === 'Prophecies') {
                    reading = [[
                            "ReadingsIntro&C=Title",
                            "",
                            "Prophecies",
                            "",
                            "النبؤات"
                        ]];
                    insertReading(reading, anchor, prayersLanguages);
                }
                await Promise.all(refs.map(async (ref) => {
                    if (date === copticFeasts.HolyThursday)
                        reading = await retrieveReadingTableFromBible([
                            ...findTable(Prefix.HolyWeek + "LakanProphecies&D=GL55", ReadingsArrays.GospelNightArrayFR) || undefined,
                            ...findTable(Prefix.HolyWeek + "LakanSermony&D=GL55", ReadingsArrays.GospelNightArrayFR) || undefined
                        ], languages);
                    else
                        reading = await retrieveReadingTableFromBible([[Prefix.readingRef + ref]], languages);
                    if (!reading)
                        return;
                    if (title === 'StPaul') {
                        insertReading(getReadingIntroOrEnd(title, ReadingsIntrosAndEnds.stPaulIntro, 'Intro'), anchor, prayersLanguages); //We insert the StPaul ReadingIntro in all cases
                    }
                    insertReading(reading, anchor, languages); //We insert the reading text itself
                    if (title === 'Prophecies' && date !== copticFeasts.HolyThursday) {
                        insertReading(getReadingIntroOrEnd(title, ReadingsIntrosAndEnds.propheciesEnd, 'End'), anchor, prayersLanguages); //We do not insert the ReadingEnd for the holyThursday because it is already included in the table
                    }
                    else if (title === 'StPaul') {
                        insertReading(getReadingIntroOrEnd(title, ReadingsIntrosAndEnds.stPaulEnd, 'End'), anchor, prayersLanguages); //We insert the StPaul ReadingEnd in all cases
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
                    insertPrayersAdjacentToExistingElement({
                        tables: [reading],
                        languages: langs,
                        position: { el: anchor, beforeOrAfter: 'beforebegin' },
                        container: btn.docFragment,
                    });
                }
                function getReadingIntroOrEnd(prefix, text, intro = 'Intro') {
                    return [[
                            title + intro + "&C=Reading" + intro,
                            ...prayersLanguages.map(lang => text[lang] || '')
                        ]];
                }
                function replaceClass(reading, newClass) {
                    reading[0][0] = splitTitle(Title(reading))[0] + '&C=' + newClass;
                }
            }
        }
        ;
        await insertGospelReadingAndResponses({
            isMass: true,
            liturgy: Prefix.gospelMass,
            container: btn.docFragment,
            clearContainer: false,
            gospel: lakan.gospel.map(ref => getGospel(Prefix.gospelMass, ref))
        });
        function getGospel(prefix, ref) {
            ref.startsWith('PSA') ? prefix += 'Psalm' : prefix += 'Gospel';
            return [[prefix + '&D=' + copticDate + '&C=Title'], [Prefix.readingRef + ref]];
        }
    },
});
const btnProsternation = new Button({
    btnID: "btnProsternation",
    label: getLabel({
        AR: "صَلاة السَّجْدَة",
        FR: "Prière de la Prosternation",
        EN: "Prosternation Prayer",
    }),
    onClick: () => {
        let services = [
            {
                Prophecies: 'DEU:5:23-End/6:1-3',
                StPaul: '1CO:12:28-End/13:1-12',
                Agios: [Prefix.massCommon + "Agios&D=$Seasons.PentecostalDays||$Seasons.Ascension"],
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
                Agios: [Prefix.commonPrayer + "Agios"],
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
                Agios: [Prefix.commonPrayer + "Agios"],
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
            const label = { ...labelBase };
            label[defaultLanguage] = label[defaultLanguage].replace('XXX', labelNumber[i][defaultLanguage]);
            return getLabel(label);
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
                    languages: getLanguages(Title(table))
                });
            });
            async function returnTables(index) {
                let service = services[index], clone = [...Sequences.Prosternation];
                (function customizeSequence() {
                    if (index === 0) {
                        clone.unshift(Prefix.bookOfHours + "Psalm116", Prefix.psalmody + "Hos4", Prefix.psalmody + "PsalyOnTheotoky&D=0", Prefix.psalmody + "IntroductionToAdamTheotoky", Prefix.psalmody + "Theotoky" + '&D=0', Prefix.psalmody + "TheotokiesConclusion&D=$Seasons.PentecostalDays||$Seasons.Ascension", Prefix.psalmody + "PsalyAdamProsternation&D=$copticFeasts.Pentecoste");
                    }
                    else if (index === 2) {
                        clone.splice(clone.indexOf(Prefix.anchor + 'Agios'), 0, Prefix.hymns + "PentecosteHymn&D=$copticFeasts.PentecosteVespers&C=Title"); //!missing hymn
                        let doxlogies = [
                            Prefix.incenseVespers + "LordKeepUsThisNight",
                            Prefix.commonPrayer + "Agios",
                            Prefix.commonPrayer + "OurFatherInHeaven",
                            Prefix.commonPrayer + "InTheNameOfJesusOurLord",
                            Prefix.commonPrayer + "WeSaluteYouMary",
                            Prefix.doxologies + "WatosStMary",
                            Prefix.doxologies + "CelestialBeings",
                            Prefix.doxologies + "Apostles",
                            Prefix.doxologies + "StMarc",
                            Prefix.doxologies + "Pope", //!missing
                            Prefix.doxologies + "EndOfDoxologiesWatos",
                            Prefix.commonPrayer + "WeExaltYouStMary",
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
            let btn = btnProsternation.children[n];
            btnIncenseMorning.afterShowPrayers(btn); //We call this function in order to insert an Expandable for the "God Have Mercy On Us" Diacon response
            if (n === 2)
                adaptConcludingHymn(btn.docFragment);
            else if (n === 0)
                btnMassUnBaptised.afterShowPrayers(btn); //We insert the Book of Hours prayers (as an expandable button)
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
                        return selectElementsByDataSet(btn.docFragment, Prefix.anchor + dataRoot + anyDay, undefined, 'root')[0];
                    }
                }
            }
            ;
            scrollToTop();
        }
    },
});
const btnIncenseOffice = new Button({
    btnID: "btnIncenseOffice",
    label: getLabel({
        AR: "رفع بخور باكر أو عشية",
        FR: "Encens Matin et Vêpres",
        EN: 'Morning & Vespers Incense'
    }),
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
    label: getLabel({ AR: "باسيلي", FR: "Saint Basil", EN: "St Basil" }),
    docFragment: new DocumentFragment(),
    languages: [...prayersLanguages],
    onClick: () => {
        //Setting the standard mass prayers sequence
        btnMassStBasil.prayersSequence = [
            ...Sequences.Mass.StBasil,
            ...Sequences.Mass.CallOfHolySpirit,
            ...Sequences.Mass.Litanies,
            ...Sequences.Mass.Communion,
        ];
        //We scroll to the beginning of the page after the prayers have been displayed
        scrollToTop();
        // btnsPrayersSequences.splice(btns.indexOf(btnMassStBasil), 1, btnMassStBasil.prayersSequence);
        // btnMassStBasil.retrieved = true;
        return btnMassStBasil.prayersSequence;
    },
    afterShowPrayers: (btn = btnMassStBasil, prefix = Prefix.massStBasil) => {
        let btnDocFragment = btn.docFragment;
        (function insertSecondReconciliationBtn() {
            if (![btnMassStBasil, btnMassStCyril].includes(btn))
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
                cssClass: inlineBtnClass,
                docFragment: new DocumentFragment(),
                onClick: () => {
                    showPrayers({
                        table: reconciliation2,
                        languages: btn.languages,
                        position: btnRecon.docFragment,
                        container: btnRecon.docFragment,
                        clearContainerDiv: false,
                        clearRightSideBar: false,
                    });
                }
            });
            const anchor = selectElementsByDataSet(btnDocFragment, prefix + "Reconciliation")[0]?.nextElementSibling;
            const btnsDiv = insertExpandableBtn([btnRecon], anchor, 'beforebegin');
            btnsDiv.children[0]?.addEventListener("click", () => {
                selectElementsByDataSet(containerDiv, prefix + "Reconciliation", undefined, 'group')
                    .forEach((row) => row.classList.toggle(hidden));
            }); //We hide or unhide the main reconcilaition prayer when the second conciliation is displayed or hidden
        })();
        (function addRedirectionButtons() {
            //We create a list of the masses to which we will insert redirection button
            let redirectToList = [
                btnMassStBasil,
                btnMassStGregory,
                btnMassStCyril,
                btnMassStJohn,
            ].filter(b => ![btn, btnMassStJohn].includes(b)); //We remove the btn of the mass from the redirection list and the mass of st John
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
                    return;
                let redirectTo = [];
                btns.map((btn) => {
                    //for each button in the btns array, we will create a fake Button and will set its onClick property to a function that retrieves the text of the concerned mass
                    let newBtn = new Button({
                        btnID: "GoTo_" +
                            btn.btnID.split("btn")[1] +
                            "_From_" +
                            position.el.dataset.root,
                        label: btn.label,
                        cssClass: inlineBtnClass,
                        onClick: async () => {
                            await showChildButtonsOrPrayers(btn); //We simulated as if btn itself has been clicked, which will show all its prayers, children, etc.
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
        })();
        function insertSpasmos(spasmosTitle, anchor, hideAnchor = false) {
            if (!anchor)
                return console.log('anhcor is not valid');
            let spasmos = MassCommonArray.find((tbl) => Title(tbl)?.startsWith(spasmosTitle) &&
                isMultiDatedTitleMatching(Title(tbl), [Season]));
            if (!spasmos)
                return console.log("didn't find spasmos with title = ", spasmosTitle);
            const langs = getLanguages(Title(spasmos));
            const btnSpasmos = new Button({
                btnID: spasmosTitle.split("&D=")[0],
                label: getLabel({
                    AR: spasmos[0][langs.indexOf('AR') + 1],
                    FR: spasmos[0][langs.indexOf('FR') + 1],
                }),
                cssClass: inlineBtnClass,
                docFragment: new DocumentFragment(),
                onClick: () => {
                    showPrayers({
                        table: spasmos,
                        languages: langs,
                        position: btnSpasmos.docFragment,
                        container: btnSpasmos.docFragment,
                        clearContainerDiv: false,
                        clearRightSideBar: false,
                    });
                }
            });
            const btnsDiv = insertExpandableBtn([btnSpasmos], anchor, 'beforebegin');
            if (hideAnchor)
                btnsDiv.children[0].addEventListener("click", () => selectElementsByDataSet(containerDiv, anchor.dataset.root).forEach((row) => row.classList.toggle(hidden)));
        }
        (function insertLitaniesIntroductionFromOtherMasses() {
            if (btn !== btnMassStBasil)
                return; //This button appears only in St Basil Mass
            const anchor = selectElementsByDataSet(btnDocFragment, Prefix.massCommon + "LitaniesIntroduction")[0];
            if (!anchor)
                return console.log("Di not find the Anchor");
            const stGregLitanies = new Button({
                btnID: btnMassStGregory.btnID + "LitaniesIntro",
                label: getLabel({
                    AR: "طلبات القداس الغريوري",
                    FR: "Litanies de St. Gregory",
                }),
                cssClass: inlineBtnClass,
                languages: btn.languages,
                docFragment: new DocumentFragment(),
                prayersSequence: [Prefix.massStGregory + "LitaniesIntroduction"],
            });
            const stCyrilLitanies = new Button({
                btnID: btnMassStCyril.btnID + "LitaniesIntro",
                label: getLabel({
                    AR: "طلبات القداس الكيرلسي",
                    FR: "Litanies de la messe de Saint Cyril",
                }),
                cssClass: inlineBtnClass,
                languages: btn.languages,
                docFragment: new DocumentFragment(),
                prayersSequence: [Prefix.massStCyril + "LitaniesIntroduction"],
            });
            insertExpandableBtn([stGregLitanies, stCyrilLitanies], anchor, 'beforebegin', 'Lit');
        })();
        (function insertRelevantSeasonalLitany() {
            let anchor = selectElementsByDataSet(btnDocFragment, Prefix.anchor + "SeasonalLitanyPlaceHolder", undefined, 'root')[0];
            if (!anchor)
                return console.log('Didn\'t find the anhcor');
            let tbl = findTable(Prefix.massCommon + 'SeasonalLitany&D=$Seasons.' + Object.entries(Seasons).find(entry => entry[1] === naturalSeasons())[0], MassCommonArray);
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
                btnLabels: getLabel({ AR: "صلوات القسمة", FR: "Oraisons de la Fraction" }),
                masterBtnID: "btnFractionPrayers",
                anchor: Array.from(btnDocFragment.children)
                    .find(child => child.id && child.id.startsWith(Prefix.anchor + "Fraction")),
            });
            function filter() {
                let filtered = [];
                let dates = [copticDate, Season, copticFeasts.AnyDay];
                if (Number(copticDay) === 29 && ![4, 5, 6].includes(Number(copticMonth)))
                    dates.unshift(copticFeasts.Coptic29th);
                dates.forEach(date => filtered.push(...FractionsArray.filter(table => isMultiDatedTitleMatching(Title(table), [date]))));
                return getUniqueValuesFromArray(filtered);
            }
            ;
        })();
        (function insertCommunionChants() {
            //Inserting the Communion Chants after the Psalm 150
            let psalm150 = selectElementsByDataSet(btnDocFragment, Prefix.massCommon + "CommunionPsalm150");
            let filtered = [];
            [copticDate, Season, copticFeasts.AnyDay]
                .forEach(date => {
                filtered.push(...CommunionArray.filter(table => isMultiDatedTitleMatching(Title(table), [date])));
            });
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
const btnMassStCyril = new Button({
    btnID: "btnMassStCyril",
    label: getLabel({ AR: "كيرلسي", FR: "Saint Cyril", EN: "St Cyril" }),
    docFragment: new DocumentFragment(),
    languages: [...prayersLanguages],
    onClick: () => {
        //Setting the standard mass prayers sequence
        btnMassStCyril.prayersSequence = [
            ...Sequences.Mass.StCyril,
            ...[
                Prefix.massCommon +
                    "AgiosPart3",
                Prefix.commonPrayer + "KyrieElieson",
                Prefix.commonPrayer + "BlockIriniPassi",
                Prefix.anchor + "Fraction",
                Prefix.commonPrayer + "OurFatherInHeaven",
                Prefix.massCommon + "Confession",
            ],
            ...Sequences.Mass.Communion,
        ];
        return btnMassStCyril.prayersSequence;
    },
    afterShowPrayers: async () => btnMassStBasil.afterShowPrayers(btnMassStCyril, Prefix.massStCyril),
});
const btnMassStGregory = new Button({
    btnID: "btnMassStGregory",
    label: getLabel({ AR: "غريغوري", FR: "Saint Gregory" }),
    docFragment: new DocumentFragment(),
    languages: [...prayersLanguages],
    onClick: () => {
        //Setting the standard mass prayers sequence
        btnMassStGregory.prayersSequence = [
            ...Sequences.Mass.StGregory,
            ...Sequences.Mass.CallOfHolySpirit,
            ...Sequences.Mass.Litanies,
            ...Sequences.Mass.Communion,
        ];
        //removing irrelevant prayers from the array
        btnMassStGregory.prayersSequence.splice(btnMassStGregory.prayersSequence.indexOf(Prefix.massCommon + "CallOfTheHolySpiritPart1"), 9);
        scrollToTop();
        return btnMassStGregory.prayersSequence;
    },
    afterShowPrayers: async () => btnMassStBasil.afterShowPrayers(btnMassStGregory, Prefix.massStGregory),
});
const btnMassStJohn = new Button({
    btnID: "btnMassStJohn",
    label: getLabel({ AR: "القديس يوحنا", FR: "Saint Jean" }),
    docFragment: new DocumentFragment(),
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
    label: getLabel({
        AR: "قٌدَّاسِ المُؤْمِنينَ",
        FR: "Liturgie des Croyants",
        EN: "Baptized Mass",
    }),
    parentBtn: btnMass,
    children: [btnMassStBasil, btnMassStGregory, btnMassStCyril], //We are removing Mass StJohn for now
});
const btnGospelVespers = new Button({
    btnID: "btnReadingsGospelIncenseVespers",
    label: getLabel({
        AR: "إنجيل عشية",
        FR: "Évangile  Vêpres",
        EN: "Vespers Gospel",
    }),
    onClick: async () => await btnGospelMass.onClick(Prefix.gospelVespers),
});
const btnGospelMorning = new Button({
    btnID: "btnReadingsGospelIncenseDawn",
    label: getLabel({
        AR: "إنجيل باكر",
        FR: "Évangile du Matin",
        EN: "Morning Gospel",
    }),
    onClick: async () => await btnGospelMass.onClick(Prefix.gospelMorning),
});
const btnGospelNight = new Button({
    btnID: "btnReadingsGospelNight",
    label: getLabel({
        AR: "إنجيل المساء",
        FR: "Évangile du Soir",
        EN: "Night Gospel",
    }),
    onClick: async () => await btnGospelMass.onClick(Prefix.gospelNight)
});
const btnGospelMass = new Button({
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
            liturgy: gospelPrefix,
            languages: getLanguages(gospelPrefix),
            container: containerDiv,
            isMass: false,
            clearContainer: true,
        });
        scrollToTop(); //scrolling to the top of the page
    },
});
const btnHolyWeek = new Button({
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
                    onClick: () => btnHour.prayersSequence = [...Sequences.HolyWeek.PassOver],
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
                        Array.from(Object.entries(titles))
                            .forEach(entry => {
                            Array.from(Object.entries(entry[1]))
                                .forEach(title => {
                                titles[entry[0]][title[0]] = title[1] + label[title[0]];
                            });
                        });
                    })();
                    await insertHourReadings();
                    async function insertHourReadings() {
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
                            readings.KhinEfran.table = findTable(Prefix.HolyWeek + "KhinEfran" + service + "&D=$Seasons.HolyWeek", HolyWeekArray) || undefined;
                            if (!readings.KhinEfran.table)
                                return console.log('Didn\'t find Khin Efran');
                            readings.Litany.table = findTable(Prefix.HolyWeek + "FinalLitany" + service + "&D=$Seasons.HolyWeek", HolyWeekArray) || undefined;
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
                            return selectElementsByDataSet(btnHour.docFragment, Prefix.anchor + placeHolder + '&D=$Seasons.HolyWeek', undefined, 'root')[0];
                        }
                        await insertTablesBeforeAnchors();
                        async function insertTablesBeforeAnchors() {
                            let languages;
                            const sequence = [readings.coptPsalm,
                                readings.coptGospel,
                                readings.nonCopticPsalm,
                                readings.nonCopticGospel,
                                readings.Commentary,
                                readings.Prophecies,
                                readings.Sermony, //!This must come directly after readings.Prophecies
                                readings.KhinEfran,
                                readings.Litany];
                            for (const reading of sequence) {
                                if (!reading.table || !reading.anchor)
                                    return console.log('Either the table or the Anchor are missing:  table = ', reading.table, 'Anchor = ', reading.anchor);
                                if ([readings.KhinEfran, readings.Litany].includes(reading))
                                    languages = prayersLanguages;
                                else if ([readings.Sermony, readings.Commentary, readings.Prophecies].includes(reading))
                                    languages = readingsLangs;
                                else if ([readings.nonCopticGospel, readings.nonCopticPsalm].includes(reading))
                                    languages = [defaultLanguage, foreingLanguage];
                                else if ([readings.coptGospel, readings.coptPsalm].includes(reading))
                                    languages = ['COP'];
                                reading.table = reading?.table?.filter(row => row); //We remove any undefined elements in the table;
                                reading.table = await retrieveReadingTableFromBible(reading.table, languages);
                                reading.table[0] = insertTableTitleRow(); //We replace the first row of the table with a customized title row
                                insertPrayersAdjacentToExistingElement({
                                    tables: [reading.table],
                                    languages: languages,
                                    container: btnHour.docFragment,
                                    position: {
                                        el: reading.anchor, beforeOrAfter: 'beforebegin'
                                    }
                                });
                                function insertTableTitleRow() {
                                    let row = [Title(reading.table)];
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
                            }
                            ;
                        }
                        ;
                        Array.from(btnHour.docFragment.children).find((div) => div.dataset.root === Prefix.incenseDawn +
                            "GodHaveMercyOnUsRefrain&D=$Seasons.GreatLent")?.remove(); //Removing the Title row of the "God Have Mercy" table
                    }
                    ;
                    (function insertThursdayLakanAndMassBtns() {
                        //If we are on the Holy Thursday morning service
                        if (weekDay !== 4)
                            return;
                        if (service !== Morning)
                            return; //We are during the Morning Passover service
                        if (hour !== '11H')
                            return; //It is the 9th Hour button
                        let anchor = btn.docFragment.children[0];
                        if (!anchor)
                            return;
                        let lakkanBtn = new Button({
                            btnID: btnLakkan.btnID,
                            label: getLabel({ AR: 'لقان خميس العهد', FR: 'Lavage des pieds' }),
                            docFragment: new DocumentFragment(),
                            onClick: () => btnLakkan.onClick(copticFeasts.HolyThursday, lakkanBtn),
                            afterShowPrayers: async () => await btnLakkan.afterShowPrayers(copticFeasts.HolyThursday, lakkanBtn),
                        });
                        let btnMass = new Button({
                            btnID: 'btnMass',
                            label: getLabel({ AR: 'قداس خميس العهد', FR: 'Messe du Jeudi Saint' }),
                            docFragment: new DocumentFragment(),
                            onClick: () => {
                                let sequence = [...Sequences.Mass.StBasil, ...Sequences.Mass.Communion];
                                btnMass.prayersSequence = sequence;
                            },
                            afterShowPrayers: async () => { },
                        });
                        btn.children = [lakkanBtn, btnMass];
                        insertExpandableBtn([lakkanBtn, btnMass], anchor, 'afterend', btn.btnID.replace('btn', ''));
                    })();
                }
            }
        }
    }
});
const btnBible = new Button({
    btnID: 'btnBible',
    label: getLabel({
        AR: 'الكتاب المقدس',
        FR: 'La Bible'
    }),
    onClick: async (refs) => {
        if (refs) {
            await chapterBtnOnClick({
                chapterNumber: refs.chapterNumber,
                bookID: refs.bookID
            });
            return;
        }
        let newTestament = new Button({
            btnID: 'newTestament',
            label: getLabel({
                AR: 'العهد الجديد',
                FR: 'Nouveau Testament',
                EN: 'New Testament'
            }),
            onClick: async () => newTestament.children = await getBooksButtons(false) //!We need the children to be added when the button is clicked not when it is created because the Bibles are not defined at this stage
        });
        let oldTestament = new Button({
            btnID: 'oldTestament',
            label: getLabel({
                AR: 'العهد القديم',
                FR: 'Ancien Testament',
                EN: 'Old Testament'
            }),
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
                return {
                    DL: bookID,
                    FL: undefined
                };
            });
            let booksButtons = labels.map(label => {
                let btn;
                btn = new Button({
                    btnID: 'btnBibleBook' + labels.indexOf(label),
                    label: label,
                    onClick: () => btn.children = getChaptersButtons(booksListDefault.find(book => book.human_long === label.DL).id) //!We need the children to be added when the button is clicked not when it is created because the Bibles are not defined at this stage
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
                    return new Button({
                        btnID: 'btnChapter' + number,
                        label: getLabel(getChapterLabel(number)),
                        onClick: () => chapterBtnOnClick({
                            bookID: book[0].id,
                            chapterNumber: number
                        })
                    });
                });
                return chaptersButtons;
            }
        }
        async function chapterBtnOnClick(refs) {
            if (!refs)
                return;
            let languages = [defaultLanguage];
            if (foreingLanguage)
                languages?.push(foreingLanguage);
            await showChapterText();
            async function showChapterText() {
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
                        chapterNumber: refs.chapterNumber,
                        lang: lang
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
            }
            ;
            updateBookmark({ bookID: refs.bookID, chapterNumber: refs.chapterNumber });
            (function appendNextAndPrevBtns() {
                let btnsDiv = document.createElement('div');
                containerDiv.append(btnsDiv);
                let right = '⇒', left = '⇐';
                let next = new Button({
                    btnID: 'btnNext',
                    label: getLabel({
                        AR: right,
                        FR: right,
                        EN: right,
                    }),
                    onClick: () => nextOnClick(true)
                });
                let prev = new Button({
                    btnID: 'btnPrev',
                    label: getLabel({
                        AR: left,
                        FR: left,
                        EN: left,
                    }),
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
                    await chapterBtnOnClick({
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
                return book.human_long + '\n' + getChapterLabel(chapterNumber)[lang] || '';
            }
        }
        function getChapterLabel(number) {
            return {
                AR: 'إصحاح ' + number,
                FR: 'Chapître ' + number,
                EN: 'Chapter ' + number,
            };
        }
    },
    afterShowPrayers: () => {
        if (!localStorage.bookMarks)
            return;
        let lastReading = JSON.parse(localStorage.bookMarks)[0];
        if (!lastReading)
            return lastReading = null;
        //We create a fake button simulating the action of chapters' buttons of each book
        let btnLabel = getLabel({
            AR: 'آخر قراءة',
            FR: 'Dernier chapitre lu',
            EN: 'Last Reading'
        });
        let btn = new Button({
            btnID: 'lastReading',
            label: btnLabel,
            cssClass: 'btnBookMark',
            onClick: async () => {
                await btnBible.onClick({ bookID: lastReading[0], chapterNumber: lastReading[1] });
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
                label: getLabel({ AR: "التالي", FR: "Suivants" }),
                cssClass: inlineBtnClass,
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
    let anchor = selectElementsByDataSet(container, Prefix.anchor + 'ConcludingHymn', undefined, 'root')[0];
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
        const bishop = new Button({
            btnID: 'concludingHymn',
            label: getLabel({
                AR: 'في حضور البطرك أو أحد الأساقفة',
                FR: 'En présence du Pape ou d\'un évêque',
            }),
            cssClass: inlineBtnClass,
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
    let readingArray = PrayersArraysKeys.find(array => array[0] === readingPrefix)[2]();
    let reading = readingArray.find((table) => isMultiDatedTitleMatching(splitTitle(Title(table))[0], [readingDate]));
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
    let splitted;
    let ready = new Set(); //this set will contain arrays of ["bookID:chapterNumber:lang", chapter] for each chapter treated. If the chapter is found, we will not retreive it again.
    const retrieved = [];
    for (const row of reading) {
        //! We can't use forEach because forEach doesn't await for async functions to resolve
        if (rowsWithReferences.includes(row))
            retrieved.push(await referenceTitleRow(row), ...await processReadingReference(row));
        else if (reading.indexOf(row) === 0)
            retrieved.push(row); //This is the first row of the table, and it does not inlcude any references, we push it as is (it is the case of almost all the 1st rows of all tables)
        else if (RegExp('&C=(Title|SubTitle)').test(row[0]) //i.e., this is not the 1st row of the table, but its class is 'Title' or 'Subtitle': in this case if the next row includes references, it means that we are like starting a new reading table: we will replace the title row with a row including the title of the reading
            && (rowsWithReferences.includes(reading[reading.indexOf(row) + 1]) //the next row is a row that includes reading references
                ||
                    reading[reading.indexOf(row) + 1][0].includes('&C=ReadingIntro'))) //OR the the next row has the class 'ReadingIntro' which means that we are starting a reading (the references are most probably included in row +2)
            retrieved.push(await referenceTitleRow(row, true));
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
            row.length === langs.length + 1 ? actor = splitTitle(row[0])[1] : actor = splitted[1];
            if (!actor)
                actor = 'NoActor';
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
                parts.unshift(refs[0].split(':')[0]); //We add the bookID 
            if (parts.length < 3)
                return ''; //parts shoulde be foramtted like: [bookID, chapterNumber, verse-verse]
            verses = await Promise.all(parts[2]
                .split('/')
                .map(async (versesRange) => await retrieveVersesText(lang, parts[0], parts[1], versesRange) || "Error: Failed to retrieve verses"));
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
    async function referenceTitleRow(row, next = false) {
        let index = reading.indexOf(row);
        let ref = getReferences(row);
        while (!ref && next) {
            index += 1;
            if (!reading[index])
                break;
            ref = getReferences(reading[index]);
        }
        if (!ref)
            return row;
        let titleRow = [Prefix.same + '&C=Title', ...langs.map(lang => '')];
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
                ?.filter(verse => verse?.length === 2)
                .length.toString());
            titleRow[langs.indexOf(lang) + 1] =
                book[0].human
                    + ' ('
                    + splitRef(ref).join(' & ')
                    + ')';
            titleRow[langs.indexOf(lang) + 1] =
                book[0].human
                    + ' ('
                    + adaptMutipleRefs(lang)
                    + ')';
            function splitRef(ref) {
                return ref
                    .replaceAll(bookID + ':', '')
                    .split('/')
                    .map(part => part.replace(':', ': '));
            }
            function adaptMutipleRefs(lang) {
                //'ISA:13:11-End/14:1-End/16:8-End'
                let parts = ref.split('/');
                let to = { AR: ' إلى ', FR: ' à ', EN: ' to ' }[lang];
                let fromTo = parts[0].split(':')[1] + ': ' + parts[0].split(':')[2]; //=> '13:11-End'
                if (parts.length > 1 && bookID === 'PSA') {
                    fromTo = fromTo.split('-')[0]; //=>'13:11'
                }
                else if (parts.length > 1) {
                    fromTo = fromTo.split('-')[0]; //=>'13:11'
                    fromTo += to; //=> '13: 11 to '
                    fromTo += parts[parts.length - 1].split(':')[0] + ': '; //=> '13: 11 to 16: End'
                    fromTo += parts[parts.length - 1].split(':')[1].split('-')[1]; //=>'13: 11 to 16: End'
                }
                if (fromTo.includes('End')) {
                    let chapterNumber;
                    if (parts.length > 1)
                        chapterNumber = Number(parts[parts.length - 1].split(':')[0]); //=>'16
                    else
                        chapterNumber = Number(parts[parts.length - 1].split(':')[1]); //=>'13'
                    fromTo = fromTo.replace('End', book[1]
                        .find(chapter => book[1].indexOf(chapter) === chapterNumber) //we find the chapter
                        ?.filter(verse => verse?.length === 2) //we get all the verses of the chapter
                        .length.toString()); //We get the length of the verses
                }
                return fromTo; //=>//=>'13:1 à 16:30
            }
        }));
        return titleRow;
        function getReferences(r) {
            return row.find(el => el.startsWith(Prefix.readingRef));
        }
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
        let exists = Array.from(ready).find(array => array[0] === bookID + ":" + chapterNumber + ":" + lang);
        if (lang === 'CA')
            lang = 'AR';
        if (exists)
            return getVersesRange(exists[1], verses.split('-'));
        if (!lang) {
            return new Error("The language is not valid. Error from retrieveVersesText()");
        }
        ;
        if (![defaultLanguage, foreingLanguage].includes(lang))
            return ''; //We return an empty string if the language is not either the defaultLanguage or the foreignLanguage because in all cases those are the only languages that the user will be able to see. No need to retrieve a language that will not be retrieved
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
        let Bible = await getBibleVersion(lang, false);
        if (!Bible)
            return new Error("Failed to retrieve verse");
        let chapterVerses = getBibleChapter(chapterNumber, undefined, Bible, bookID);
        if (!chapterVerses) {
            console.log('chapterVerses = ', chapterVerses);
            return new Error("Failed to retrieve verse");
        }
        ;
        ready.add([bookID + ":" + chapterNumber + ":" + lang, chapterVerses]);
        return getVersesRange(chapterVerses, verses.split('-'));
        function getVersesRange(chapter, range) {
            if (range.length !== 2) {
                console.log('bookID = ', bookID);
                return new Error("Failed to retrieve verse");
            }
            ;
            while (chapter[chapter.length - 1].length < 2)
                chapter.pop(); //!This action must be performed before processing the verses references. We remove the last element of the chapter if it is not a verese.
            if (range[1].toUpperCase() === 'END')
                range[1] = chapter[chapter.length - 1][0];
            if (!Number(range[0]) || !Number(range[1]))
                return new Error("range[0] or range[1] is not a number");
            ;
            let first = chapter.find(verse => verse && verse[0] === range[0]);
            if (!first)
                return new Error("could not retrieve 'first'");
            let last = chapter.find(verse => verse && verse[0] === range[1]);
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
    let exp = RegExp('Sup_\\d*_Sup', 'g');
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
            const match = text.match(RegExp(versesRange[0] + '\.*' + toVerse));
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
                if (!table[ii]) {
                    table.push([...langs.map(lang => '')]);
                    add > 0 ? table[ii].unshift(retrieved[0]) : table[ii].unshift(Prefix.same + "&C=" + actor); //If the number of elements in retrieved > languages, it means the first element is a title element. We will keep it as first element of each newly added row to the table, otherwise, we will manually add a title element as first element.
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
 * @param {boolean} isMass - indicates whether the 'Psalm' and 'Gospel' readings are retrieved in relation to a mass or incense liturgy (in such case the psalm and gospel responses and the diacon's introductions/ends to the readings will be added), or whether we only need to retrieve the readings' text
 * @param {string} liturgy - the prefix of the liturgie for which we want to retrieve the gospel reading
 * @param {HTMLElement | DocumentFragment} container - the html element to which the html elements (i.e. div) containing the gospel will be appended after being created
 * @param {string[][][]} gospel - The tables containing the 'Psalm' and 'Gospel' references. If not provided, the function will retrieve the tables from the relevant tables array in accordance with today's copticReadingsDate
 * @returns
 */
async function insertGospelReadingAndResponses(args) {
    if (!args.liturgy)
        return console.log("the button passed as argument does not have prayersArray");
    if (!args.container)
        args.container = containerDiv;
    if (args.container === containerDiv && args.clearContainer)
        args.container.innerHTML = "";
    if (args.container.children.length === 0)
        args.container.appendChild(document.createElement("div"));
    if (!args.languages)
        args.languages = getLanguages(args.liturgy);
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
            cssClass: inlineBtnClass,
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
        insertResponse(3, getAnchor('Gospel')?.nextElementSibling, 'beforebegin'); //Inserting Gospel Response
        insertResponse(0, getAnchor('PsalmResponse'), 'beforebegin'); //Inserting Psalm Response if any
        function insertResponse(index, el, position) {
            let prayersSequence = setGospelPrayersSequence(args.liturgy, args.isMass); //this gives us an array like ['PR_&D=####', 'RGID_Psalm&D=', 'RGID_Gospel&D=', 'GR_&D=####']
            //We will retrieve the tables containing the text of the gospel and the psalm from the GospeldawnArray directly (instead of call findAndProcessPrayers())
            let response = PsalmAndGospelArray.find((tbl) => splitTitle(Title(tbl))[0] === prayersSequence[index]); //!Caution: this must be an '===' search operator not startWith() because otherwise, 'NativitayParamoun' will be selected for the 'Nativity' Season, and 'Baptism Paramoun' might be selected for the 'Baptism' Season if their tables in PrayersArray are before those of the relevant table
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
        let gospel = args.gospel || findGospelTables();
        if (!gospel || gospel.length < 2)
            return new Error("Error: gospel.length < 2"); //if no readings are returned from the filtering process, then we end the function
        await Promise.all(gospel
            .map(async (table) => {
            //!We can't use forEach because forEach dosen't await for promises to resolve
            //gospel[] should include 2 tables: the first table is the psalm and its title is like '....Psalm&D=...'. The 2nd is the gospel: its title is like '....Gospel&D=...'.
            if (!args.isMass && Title(table)?.includes('Psalm&D='))
                return;
            insertPrayersAdjacentToExistingElement({
                tables: await retrieveFromBible(table),
                languages: args.languages,
                position: {
                    beforeOrAfter: "beforebegin",
                    el: getAnchor(Title(table).split(args.liturgy)[1].split('&D=')[0]),
                },
                container: args.container,
            });
            async function retrieveFromBible(tbl) {
                //! We didn't push the array to the table directly because otherwise it will add a new row to the original table each time we click on the Unbaptised Mass button or the Gospel Reading button
                //We will include the gospel end: 'Glory To God Forever' and the Psalm End 'Hallelujah'
                if (!args.isMass)
                    return [await retrieveReadingTableFromBible(tbl, args.languages)];
                else if (Title(tbl)?.includes('Gospel&D='))
                    return [[...await retrieveReadingTableFromBible(tbl, args.languages), getReadingEnd(ReadingsIntrosAndEnds.gospelEnd)]]; //We return a copy of the table not the original table in order to avoid modifying the original table.
                else if (Title(tbl)?.includes('Psalm&D='))
                    return [[...await retrieveReadingTableFromBible(tbl, args.languages), getReadingEnd(ReadingsIntrosAndEnds.psalmEnd)]]; //We return a copy of the table not the original table in order to avoid modifying the original table.
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
        function findGospelTables() {
            let prayersArray = PrayersArraysKeys.find(array => array[0] === args.liturgy)[2]();
            if (!prayersArray)
                return [];
            return prayersArray
                .filter((table) => isMultiDatedTitleMatching(splitTitle(Title(table))[0], [copticReadingsDate]));
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
            return selectElementsByDataSet(args.container, Prefix.anchor + root, undefined, 'root')[0];
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
            let PsalmAndGospelResponses = PsalmAndGospelArray.filter((table) => isMultiDatedTitleMatching(Title(table), [copticDate, Season]));
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
function insertExpandableBtn(btns, anchor, before = 'beforebegin', titlesGroup, append = true, dataGroup) {
    if (!anchor)
        return;
    const btnsContainer = document.createElement('div');
    btnsContainer.classList.add(inlineBtnsContainerClass);
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
            btnClass: btn.cssClass || inlineBtnClass,
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
                    await showChildButtonsOrPrayers(btn, false, false);
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
        html.classList.add("expand"); //We need this class in order to retrieve the btn in Display Presentation Mode
    }
    btnsContainer.style.gridTemplateColumns = setGridColumnsOrRowsNumber(btnsContainer, 3);
    return btnsContainer;
    function toggle(expandable, ids, titleGroup, toggle = true) {
        if (!expandable)
            return;
        ids.filter(id => !RegExp(id).test(expandable.id))
            .forEach(id => {
            //We hide all the other expandables and their titles
            containerDiv.querySelector('#' + id + 'Expandable')?.classList.add(hidden);
            toggleTitles(titleGroup + id, true);
        });
        if (!toggle)
            return; //It means we don't want to toggle the expandable itself and its titles
        expandable.classList.toggle(hidden);
        toggleTitles(titleGroup + expandable.id.replace('Expandable', ''));
        function toggleTitles(group, hide = false) {
            if (!group)
                return;
            const titles = Array.from(sideBarTitlesContainer.children)
                .filter((div) => div.dataset.group === group);
            if (!hide)
                titles.forEach(div => div.classList.toggle(hidden));
            else
                titles.forEach(div => div.classList.add(hidden));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVjbGFyZUJ1dHRvbnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9tb2R1bGVzL0RlY2xhcmVCdXR0b25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sU0FBUyxHQUFHO0lBQ2hCLE9BQU8sRUFBRTtRQUNQLHFOQUFxTjtRQUNyTixNQUFNLENBQUMsYUFBYSxHQUFHLGNBQWM7UUFDckMsTUFBTSxDQUFDLFdBQVcsR0FBRyxTQUFTO1FBQzlCLE1BQU0sQ0FBQyxhQUFhLEdBQUcsc0JBQXNCO1FBQzdDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsWUFBWTtRQUNqQyxNQUFNLENBQUMsV0FBVyxHQUFHLGlCQUFpQjtRQUN0QyxNQUFNLENBQUMsV0FBVyxHQUFHLGlCQUFpQjtRQUN0QyxNQUFNLENBQUMsY0FBYyxHQUFHLGdCQUFnQjtRQUN4QyxNQUFNLENBQUMsWUFBWSxHQUFHLGNBQWM7UUFDcEMsTUFBTSxDQUFDLGNBQWMsR0FBRyxxQkFBcUI7UUFDN0MsTUFBTSxDQUFDLGFBQWEsR0FBRyxZQUFZO1FBQ25DLE1BQU0sQ0FBQyxhQUFhLEdBQUcsY0FBYztRQUNyQyxNQUFNLENBQUMsYUFBYSxHQUFHLFlBQVk7S0FDcEM7SUFDRCxJQUFJLEVBQUU7UUFDSixxR0FBcUc7UUFDckcsVUFBVSxFQUFFO1lBQ1YsTUFBTSxDQUFDLFVBQVUsR0FBRyxlQUFlO1lBQ25DLE1BQU0sQ0FBQyxVQUFVLEdBQUcsaUJBQWlCO1lBQ3JDLE1BQU0sQ0FBQyxVQUFVLEdBQUcscUJBQXFCO1lBQ3pDLE1BQU0sQ0FBQyxVQUFVLEdBQUcsc0JBQXNCO1lBQzFDLE1BQU0sQ0FBQyxZQUFZLEdBQUcsY0FBYztZQUNwQyxNQUFNLENBQUMsVUFBVSxHQUFHLHdCQUF3QjtZQUM1QyxNQUFNLENBQUMsVUFBVSxHQUFHLFdBQVc7WUFDL0IsTUFBTSxDQUFDLFVBQVUsR0FBRyxVQUFVO1lBQzlCLE1BQU0sQ0FBQyxVQUFVLEdBQUcsbUJBQW1CLEdBQUcsTUFB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LENBQUMsUUFBUSxDQUFDLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQSw2REFBNkQ7cUJBRS9LLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsdUJBQXVCLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssVUFBVSxDQUFDO29CQUN6SSxPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7cUJBRTNILElBQUksS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO29CQUN0QyxPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsS0FBSyxHQUFHLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztxQkFFM0UsSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsR0FBRyxzQkFBc0IsR0FBRyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsZUFBZSxFQUFFLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO29CQUN6SSxPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLGlEQUFpRCxDQUFDLENBQUM7O29CQUN6RSxPQUFPLEtBQUssQ0FBQztZQUNwQixDQUFDO1FBRUgsQ0FBQztRQUFBLENBQUM7SUFFSixDQUFDO0NBQ0YsQ0FBQyxDQUFDO0FBRUgsTUFBTSxpQkFBaUIsR0FBRyxJQUFJLE1BQU0sQ0FBQztJQUNuQyxLQUFLLEVBQUUsZ0JBQWdCO0lBQ3ZCLEtBQUssRUFBRSxRQUFRLENBQUM7UUFDZCxFQUFFLEVBQUUsaUJBQWlCO1FBQ3JCLEVBQUUsRUFBRSxpQkFBaUI7UUFDckIsRUFBRSxFQUFFLHdCQUF3QjtLQUM3QixDQUFDO0lBQ0YsU0FBUyxFQUFFLENBQUMsR0FBRyxnQkFBZ0IsQ0FBQztJQUNoQyxXQUFXLEVBQUUsSUFBSSxnQkFBZ0IsRUFBRTtJQUNuQyxPQUFPLEVBQUUsR0FBYSxFQUFFO1FBQ3RCLGlCQUFpQixDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsQ0FBQSxnS0FBZ0s7UUFDaE0saUJBQWlCLENBQUMsZUFBZSxHQUFHLENBQUMsR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUMvRCxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsVUFBVSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FDckQsQ0FBQyxDQUFDLDhFQUE4RTtRQUVqRixJQUFJLE9BQU8sS0FBSyxDQUFDO1lBQ2YsOEhBQThIO1lBQzlILGlCQUFpQixDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQ3RDLGlCQUFpQixDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQ3ZDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsWUFBWSxDQUNsQyxFQUNELENBQUMsRUFBRSx5RUFBeUU7WUFDNUUsTUFBTSxDQUFDLGNBQWMsR0FBRyxnQkFBZ0IsQ0FDekMsQ0FBQzthQUNDLElBQUksT0FBTyxLQUFLLENBQUMsSUFBSSxVQUFVLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQztZQUN2RCxxS0FBcUs7WUFDckssaUJBQWlCLENBQUMsZUFBZSxHQUFHLGlCQUFpQixDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQzFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FDTixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxVQUFVLENBQ3JCLE1BQU0sQ0FBQyxXQUFXLEdBQUcsaUJBQWlCLENBQ3ZDLENBQ0osQ0FBQztRQUVKLFdBQVcsRUFBRSxDQUFDO1FBQ2QsT0FBTyxpQkFBaUIsQ0FBQyxlQUFlLENBQUM7SUFDM0MsQ0FBQztJQUNELGdCQUFnQixFQUFFLEtBQUssRUFBRSxNQUFjLGlCQUFpQixFQUFFLGVBQXVCLE1BQU0sQ0FBQyxhQUFhLEVBQUUsRUFBRTtRQUN2RyxJQUFJLGNBQWMsR0FBRyxHQUFHLENBQUMsV0FBVyxDQUFDO1FBRXJDLENBQUMsU0FBUyxpQkFBaUI7WUFDekIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxZQUFZLEdBQUcsY0FBYyxFQUFFLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQTJCLENBQUM7WUFFbkssSUFBSSxLQUEyQixDQUFDO1lBQ2hDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDOUIsS0FBSyxHQUFHLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUN0RCxJQUFJLENBQUMsS0FBSztvQkFBRSxPQUFPO2dCQUNuQixJQUFJLEdBQUcsS0FBSyxpQkFBaUI7b0JBQzNCLEtBQUssQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRSxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7cUJBQ25HLElBQUksR0FBRyxLQUFLLGlCQUFpQjtvQkFDaEMsS0FBSyxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxFQUFFLFFBQVEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztxQkFDaEcsSUFBSSxHQUFHLENBQUMsS0FBSyxLQUFLLFNBQVMsQ0FBQyxLQUFLO29CQUNwQyxLQUFLLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEVBQUUsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBRXhHLENBQUMsQ0FBQyxDQUFDO1FBRUwsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUVMLElBQUksQ0FBQyxDQUFDLGlCQUFpQixFQUFFLGlCQUFpQixDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQztZQUFFLE9BQU8sNEJBQTRCLEVBQUUsQ0FBQyxDQUFBLHFFQUFxRTtRQUV0SywrQkFBK0IsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUVyQyxNQUFNLCtCQUErQixDQUFDO1lBQ3BDLE9BQU8sRUFBRSxZQUFZO1lBQ3JCLFNBQVMsRUFBRSxZQUFZLENBQUMsWUFBWSxDQUFDO1lBQ3JDLFNBQVMsRUFBRSxjQUFjO1lBQ3pCLE1BQU0sRUFBRSxJQUFJO1lBQ1osY0FBYyxFQUFFLEtBQUs7U0FDdEIsQ0FBQyxDQUFDO1FBRUgsNEJBQTRCLEVBQUUsQ0FBQztRQUUvQixTQUFTLDRCQUE0QjtZQUNuQyxJQUFJLFFBQVEsR0FDVixNQUFNLENBQUMsWUFBWTtnQkFDbkIsMEJBQTBCLENBQUM7WUFFN0IsSUFBSSxnQkFBZ0IsR0FBcUIsdUJBQXVCLENBQUMsY0FBYyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsb0VBQW9FO1lBRWhLLElBQUksZ0JBQWdCLENBQUMsTUFBTSxHQUFHLENBQUM7Z0JBQUUsT0FBTyxDQUFDLCtDQUErQztZQUN4RixJQUFJLE1BQU0sR0FBRyxnQkFBZ0IsRUFBRSxNQUFNLENBQUM7WUFDdEMsZ0JBQWdCO2lCQUNiLE1BQU0sQ0FDTCxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQ1YsZ0JBQWdCLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUM7Z0JBQ3RDLGdCQUFnQixFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxNQUFNLEdBQUcsQ0FBQyxDQUNsRDtpQkFDQSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO1lBRTFDLElBQUksR0FBRyxLQUFLLGlCQUFpQjtnQkFDM0IsZ0JBQWdCLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMscUNBQXFDOztnQkFFNUUsZ0JBQWdCLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUEsOEJBQThCO1lBRXRFLElBQUksWUFBWSxHQUFlLFNBQVMsQ0FBQyxRQUFRLEVBQUUsV0FBVyxDQUFlLENBQUMsQ0FBQyx5SEFBeUg7WUFFeE0sSUFBSSxDQUFDLFlBQVk7Z0JBQ2YsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLG1DQUFtQyxDQUFDLENBQUM7WUFDMUQsWUFBWSxHQUFHLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBRXhDLE1BQU0sU0FBUyxHQUFHLElBQUksTUFBTSxDQUFDO2dCQUMzQixLQUFLLEVBQUUsY0FBYztnQkFDckIsS0FBSyxFQUFFLFFBQVEsQ0FBQztvQkFDZCxFQUFFLEVBQUUsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLHNDQUFzQztvQkFDM0YsRUFBRSxFQUFFLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxzQ0FBc0M7aUJBQzVGLENBQUM7Z0JBQ0YsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLFdBQVcsRUFBRSxJQUFJLGdCQUFnQixFQUFFO2dCQUNuQyxPQUFPLEVBQUUsR0FBRyxFQUFFO29CQUNaLFdBQVcsQ0FBQzt3QkFDVixLQUFLLEVBQUUsWUFBWTt3QkFDbkIsU0FBUyxFQUFFLGlCQUFpQixDQUFDLFNBQVM7d0JBQ3RDLFFBQVEsRUFBRSxTQUFTLENBQUMsV0FBVzt3QkFDL0IsU0FBUyxFQUFFLFNBQVMsQ0FBQyxXQUFXO3dCQUNoQyxpQkFBaUIsRUFBRSxLQUFLO3dCQUN4QixpQkFBaUIsRUFBRSxLQUFLO3FCQUN6QixDQUFDLENBQUM7Z0JBRUwsQ0FBQzthQUNGLENBQUMsQ0FBQztZQUVILG1CQUFtQixDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsa0JBQWtCLEVBQUUsYUFBYSxDQUFDLENBQUM7UUFDMUYsQ0FBQztRQUFBLENBQUM7UUFFRixtQkFBbUIsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUVwQyxJQUFJLEdBQUcsS0FBSyxpQkFBaUI7WUFBRSxPQUFPLENBQUMsMkVBQTJFO1FBRWxILENBQUMsS0FBSyxVQUFVLDRCQUE0QjtZQUMxQyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO2dCQUFFLE9BQU87WUFFckUsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDO2dCQUFFLE9BQU8sQ0FBQyx5RkFBeUY7WUFFL0gsSUFBSSxNQUFNLEdBQW1CLHVCQUF1QixDQUNsRCxjQUFjLEVBQ2QsTUFBTSxDQUFDLE1BQU0sR0FBRyxZQUFZLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FDaEQsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUVMLENBQUMsU0FBUyxnQkFBZ0I7Z0JBQ3hCLCtEQUErRDtnQkFFL0QsSUFBSSxVQUFVLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxVQUFVLEdBQUcsS0FBSyxHQUFHLGtCQUFrQixFQUFFLGNBQWMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO2dCQUVqSCxJQUFJLENBQUMsVUFBVTtvQkFBRSxPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsOENBQThDLENBQUMsQ0FBQztnQkFFcEYsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBRWxFLHNDQUFzQyxDQUFDO29CQUNyQyxNQUFNLEVBQUUsQ0FBQyxLQUFLLEVBQUUsVUFBVSxDQUFDO29CQUMzQixTQUFTLEVBQUUsWUFBWSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUM7b0JBQzFDLFFBQVEsRUFBRTt3QkFDUixhQUFhLEVBQUUsYUFBYTt3QkFDNUIsRUFBRSxFQUFFLE1BQU07cUJBQ1g7b0JBQ0QsU0FBUyxFQUFFLGNBQWM7aUJBQzFCLENBQUMsQ0FBQztZQUVMLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFFTCxDQUFDLEtBQUssVUFBVSx3QkFBd0I7Z0JBQ3RDLElBQUksWUFBWSxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsV0FBVyxHQUFHLHVDQUF1QyxFQUFFLFlBQVksQ0FBQyxDQUFDO2dCQUV6RyxJQUFJLENBQUMsWUFBWTtvQkFBRSxPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsMkNBQTJDLENBQUMsQ0FBQztnQkFFbkYsc0NBQXNDLENBQUM7b0JBQ3JDLE1BQU0sRUFBRSxDQUFDLFlBQVksQ0FBQztvQkFDdEIsU0FBUyxFQUFFLGdCQUFnQjtvQkFDM0IsUUFBUSxFQUFFO3dCQUNSLGFBQWEsRUFBRSxhQUFhO3dCQUM1QixFQUFFLEVBQUUsTUFBTTtxQkFDWDtvQkFDRCxTQUFTLEVBQUUsY0FBYztpQkFDMUIsQ0FBQyxDQUFDO2dCQUVILENBQUMsU0FBUyxjQUFjO29CQUN0QixvREFBb0Q7b0JBQ3BELElBQUksUUFBUSxHQUFHLHVCQUF1QixDQUNwQyxjQUFjLEVBQ2QsTUFBTSxDQUFDLFdBQVcsR0FBRyw4Q0FBOEMsQ0FBQzt5QkFDbkUsTUFBTSxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO29CQUU3RCxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUU7d0JBQzNCLElBQUksUUFBUSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDOzRCQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsQ0FBQztvQkFDdkQsQ0FBQyxDQUFDLENBQUM7Z0JBQ0wsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUVQLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDUCxDQUFDLENBQUMsRUFBRSxDQUFDO1FBRUwsQ0FBQyxLQUFLLFVBQVUsZ0NBQWdDO1lBQzlDLGtFQUFrRTtZQUNsRSxJQUFJLGNBQWMsQ0FBQyxRQUFRLENBQUMsTUFBTSxLQUFLLENBQUM7Z0JBQUUsT0FBTztZQUVqRCxNQUFNLFVBQVUsR0FBRyxJQUFJLE1BQU0sQ0FBQztnQkFDNUIsS0FBSyxFQUFFLGdCQUFnQjtnQkFDdkIsS0FBSyxFQUFFLFFBQVEsQ0FBQztvQkFDZCxFQUFFLEVBQUUsc0JBQXNCO29CQUMxQixFQUFFLEVBQUUsMEJBQTBCO29CQUM5QixFQUFFLEVBQUUsaUJBQWlCO2lCQUN0QixDQUFDO2dCQUNGLFFBQVEsRUFBRSxjQUFjO2dCQUN4QixTQUFTLEVBQUUsaUJBQWlCLENBQUMsU0FBUztnQkFDdEMsV0FBVyxFQUFFLElBQUksZ0JBQWdCLEVBQUU7Z0JBQ25DLGVBQWUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO2FBQ2xELENBQUMsQ0FBQztZQUVILG1CQUFtQixDQUFDLENBQUMsVUFBVSxDQUFDLEVBQUUsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQWdCLEVBQUUsYUFBYSxDQUFDLENBQUM7UUFDOUYsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUVMLENBQUMsU0FBUyxlQUFlO1lBQ3ZCLElBQUksVUFBVSxLQUFLLE1BQU07Z0JBQ3ZCLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQztpQkFDcEMsSUFBSSxVQUFVLEtBQUssWUFBWSxDQUFDLFFBQVE7Z0JBQzNDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQTtpQkFDcEMsSUFBSSxrQkFBa0IsS0FBSyxZQUFZLENBQUMsWUFBWTtnQkFDdkQsZ0JBQWdCLENBQUMsa0JBQWtCLENBQUMsQ0FBQTtZQUV0QyxLQUFLLFVBQVUsZ0JBQWdCLENBQUMsSUFBWTtnQkFDMUMsTUFBTSxTQUFTLEdBQUcsSUFBSSxNQUFNLENBQUM7b0JBQzNCLEtBQUssRUFBRSxTQUFTLENBQUMsS0FBSztvQkFDdEIsS0FBSyxFQUFFLFNBQVMsQ0FBQyxLQUFLO29CQUN0QixXQUFXLEVBQUUsSUFBSSxnQkFBZ0IsRUFBRTtvQkFDbkMsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQztvQkFDakQsZ0JBQWdCLEVBQUUsS0FBSyxJQUFJLEVBQUUsQ0FBQyxNQUFNLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDO2lCQUNoRixDQUFDLENBQUM7Z0JBRUgsaUJBQWlCLENBQUMsUUFBUSxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQ3pDLElBQUksUUFBUSxHQUFHLGNBQWMsQ0FBQyxRQUFRLENBQUM7Z0JBRXZDLElBQUksVUFBVSxLQUFLLE1BQU07b0JBQ3ZCLG1CQUFtQixDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLGFBQWEsRUFBRSxPQUFPLENBQUMsQ0FBQzs7b0JBQ25FLG1CQUFtQixDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEVBQUUsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBRTVGLENBQUM7WUFBQSxDQUFDO1FBS0osQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUVMOzs7U0FHQztRQUNELEtBQUssVUFBVSwrQkFBK0IsQ0FBQyxHQUFXO1lBQ3hELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUM7Z0JBQUUsT0FBTztZQUU5QyxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVc7Z0JBQ2xCLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQ0FBaUMsRUFBRSxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7WUFFekUsSUFBSSxTQUFTLEdBQWEsQ0FBQyxHQUFHLEVBQUU7Z0JBQzlCLElBQUksS0FBSyxHQUFhLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQ25DLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDO29CQUNsRCxLQUFLLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxxVkFBcVY7Z0JBQ3ZYLElBQUksS0FBSyxHQUFhLEVBQUUsQ0FBQztnQkFDekIsSUFBSSxRQUFRLEdBQXFCLE1BQU0sQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUMsSUFBSSxDQUNoRSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FDcEMsQ0FBQyxDQUFDLGtKQUFrSjtnQkFDckosSUFBSSxRQUFRO29CQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxrQkFBa0I7Z0JBRXpELFFBQVEsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUMsOEJBQThCO2dCQUV2RyxJQUFJLFFBQVE7b0JBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLG9CQUFvQjtnQkFFM0QsSUFBSSxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUM7b0JBQUUsT0FBTyx3QkFBd0IsQ0FBQyxLQUFLLENBQWEsQ0FBQztZQUMzRSxDQUFDLENBQUMsRUFBRSxDQUFDO1lBQ0wsSUFBSSxNQUFtQixDQUFDO1lBQ3hCLENBQUMsS0FBSyxVQUFVLGtCQUFrQjtnQkFDaEMsTUFBTSxHQUFHLHVCQUF1QixDQUM5QixHQUFHLENBQUMsV0FBVyxFQUNmLE1BQU0sQ0FBQyxNQUFNLEdBQUcsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBRXJDLElBQUksQ0FBQyxNQUFNO29CQUNULE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyw4Q0FBOEMsQ0FBQyxDQUFDO2dCQUVyRSxJQUFJLE9BQXFCLENBQUM7Z0JBRTFCLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDO29CQUN0RixtTUFBbU07b0JBQ25NLE9BQU87d0JBQ0w7NEJBQ0UsU0FBUyxDQUFDLE1BQU0sQ0FBQyxZQUFZLEdBQUcsS0FBSyxFQUFFLGlCQUFpQixDQUFDLElBQUksU0FBUzt5QkFDdkUsQ0FBQzs7b0JBRUQsT0FBTyxHQUFHLGVBQWUsRUFBRSxDQUFDO2dCQUdqQyxJQUFJLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQztvQkFDcEIsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUNoQixrREFBa0QsQ0FDbkQsQ0FBQztnQkFFSixzQ0FBc0MsQ0FBQztvQkFDckMsTUFBTSxFQUFFLHdCQUF3QixDQUFDLE9BQU8sQ0FBaUI7b0JBQ3pELFNBQVMsRUFBRSxHQUFHLENBQUMsU0FBUztvQkFDeEIsUUFBUSxFQUFFO3dCQUNSLGFBQWEsRUFBRSxhQUFhO3dCQUM1QixFQUFFLEVBQUUsTUFBTSxDQUFDLGtCQUFpQztxQkFDN0M7b0JBQ0QsU0FBUyxFQUFFLEdBQUcsQ0FBQyxXQUFXO2lCQUMzQixDQUFDLENBQUM7Z0JBRUgsQ0FBQyxTQUFTLHNCQUFzQjtvQkFDOUIsTUFBTSxNQUFNLEdBQW1CLHVCQUF1QixDQUFDLGNBQWMsRUFBRSxNQUFNLENBQUMsTUFBTSxHQUFHLGVBQWUsRUFBRSxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQzlILElBQUksQ0FBQyxNQUFNO3dCQUFFLE9BQU87b0JBQ3BCLE1BQU0sT0FBTyxHQUFHLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7eUJBQzNFLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBRTFHLElBQUksT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDO3dCQUFFLE9BQU87b0JBRS9CLE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUU7d0JBQ2pDLE1BQU0sSUFBSSxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7d0JBQ3pGLE1BQU0sTUFBTSxHQUFHLElBQUksTUFBTSxDQUFDOzRCQUN4QixLQUFLLEVBQUUsV0FBVyxHQUFHLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUU7NEJBQzVELEtBQUssRUFBRSxRQUFRLENBQUM7Z0NBQ2QsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dDQUNoRCxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7NkJBQ2pELENBQUM7NEJBQ0YsUUFBUSxFQUFFLGNBQWM7NEJBQ3hCLFdBQVcsRUFBRSxJQUFJLGdCQUFnQixFQUFFOzRCQUNuQyxPQUFPLEVBQUUsR0FBRyxFQUFFO2dDQUNaLFdBQVcsQ0FBQztvQ0FDVixLQUFLLEVBQUUsS0FBSztvQ0FDWixTQUFTLEVBQUUsZ0JBQWdCO29DQUMzQixTQUFTLEVBQUUsTUFBTSxDQUFDLFdBQVc7b0NBQzdCLGlCQUFpQixFQUFFLEtBQUs7b0NBQ3hCLGlCQUFpQixFQUFFLEtBQUs7aUNBQ3pCLENBQUMsQ0FBQzs0QkFDTCxDQUFDO3lCQUNGLENBQUMsQ0FBQzt3QkFDSCxPQUFPLE1BQU0sQ0FBQTtvQkFDZixDQUFDLENBQUMsQ0FBQztvQkFFSCxDQUFDLFNBQVMsZUFBZTt3QkFDdkIsTUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQzt3QkFDaEQsU0FBUyxDQUFDLEVBQUUsR0FBRyxjQUFjLENBQUM7d0JBQzlCLFNBQVMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUM7d0JBQ2xELE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxhQUFhLEVBQUUsU0FBUyxDQUFDLENBQUM7d0JBRXZELE1BQU0sWUFBWSxHQUFHLElBQUksTUFBTSxDQUFDOzRCQUM5QixLQUFLLEVBQUUsWUFBWTs0QkFDbkIsS0FBSyxFQUFFLFFBQVEsQ0FBQztnQ0FDZCxFQUFFLEVBQUUsZ0JBQWdCO2dDQUNwQixFQUFFLEVBQUUsZUFBZTtnQ0FDbkIsRUFBRSxFQUFFLEVBQUU7NkJBQ1AsQ0FBQzs0QkFDRixPQUFPLEVBQUUsR0FBRyxFQUFFO2dDQUNaLE1BQU0sRUFBRSxHQUFHLGdCQUFnQixDQUFDO2dDQUM1QixJQUFJLE9BQU8sR0FBRyxZQUFZLENBQUMsYUFBYSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsQ0FBQztnQ0FDbkQsSUFBSSxPQUFPO29DQUFFLE9BQU8sT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7Z0NBQ3JELE9BQU8sR0FBRyxtQkFBbUIsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxTQUFTLENBQUMsQ0FBQztnQ0FDckUsT0FBTyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7NEJBRWxCLENBQUM7eUJBQ0YsQ0FBQyxDQUFDO3dCQUVILGFBQWEsQ0FBQzs0QkFDWixHQUFHLEVBQUUsWUFBWTs0QkFDakIsYUFBYSxFQUFFLFNBQVM7NEJBQ3hCLFFBQVEsRUFBRSxjQUFjOzRCQUN4QixLQUFLLEVBQUUsS0FBSzs0QkFDWixPQUFPLEVBQUUsWUFBWSxDQUFDLE9BQU8sQ0FBQyxxUUFBcVE7eUJBQ3BTLENBQUMsQ0FBQztvQkFFTCxDQUFDLENBQUMsRUFBRSxDQUFDO2dCQUdQLENBQUMsQ0FBQyxFQUFFLENBQUM7Z0JBRUwsU0FBUyxlQUFlO29CQUN0QixJQUFJLFFBQVEsR0FBRzt3QkFDYixNQUFNLENBQUMsWUFBWSxHQUFHLGFBQWEsRUFBRTt3QkFDckMsTUFBTSxDQUFDLFlBQVk7cUJBQ3BCLENBQUM7b0JBSUYsMElBQTBJO29CQUMxSSxJQUNFLENBQUMsR0FBRyxVQUFVLEVBQUUsWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUM7d0JBQzdELENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxlQUFlLEVBQUUsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLFFBQVEsQ0FDdEYsTUFBTSxDQUNQO3dCQUVELFFBQVE7NEJBQ04sQ0FBQyxNQUFNLENBQUMsWUFBWSxHQUFHLGVBQWUsQ0FBQyxDQUFDO29CQUc1QyxJQUFJLFNBQVM7d0JBQ1gsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQzFCOzRCQUNFLEdBQUcsVUFBVTs0QkFDYixPQUFPLENBQUMsUUFBUTs0QkFDaEIsT0FBTyxDQUFDLE9BQU87NEJBQ2YsT0FBTyxDQUFDLGVBQWU7NEJBQ3ZCLE9BQU8sQ0FBQyxTQUFTO3lCQUNsQixDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyx1V0FBdVc7NEJBQ3ZYLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7NEJBQzlDLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FDakQsQ0FBQyxDQUFDLDBKQUEwSjtvQkFFL0osT0FBTyxlQUFlLENBQ3BCLFFBQVEsRUFDUixNQUFNLENBQUMsWUFBWSxDQUNwQixDQUFDO2dCQUVKLENBQUM7WUFFSCxDQUFDLENBQUMsRUFBRSxDQUFDO1lBRUwsQ0FBQyxLQUFLLFVBQVUsc0JBQXNCO2dCQUNwQyxJQUFJLGdCQUFnQixHQUFnQix1QkFBdUIsQ0FDekQsR0FBRyxDQUFDLFdBQVcsRUFDZixNQUFNLENBQUMsTUFBTSxHQUFHLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUVuQyxJQUFJLENBQUMsZ0JBQWdCO29CQUNuQixPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUNBQW1DLENBQUMsQ0FBQztnQkFFMUQsSUFBSSxDQUFDLGdCQUFnQjtvQkFBRSxPQUFPO2dCQUU5QixJQUFJLFFBQVEsR0FBYTtvQkFDdkIsTUFBTSxDQUFDLFVBQVUsR0FBRyxhQUFhLEVBQUUsR0FBRyxRQUFRO29CQUM5QyxNQUFNLENBQUMsVUFBVSxHQUFHLFVBQVU7b0JBQzlCLE1BQU0sQ0FBQyxVQUFVLEdBQUcsaUJBQWlCO29CQUNyQyxNQUFNLENBQUMsVUFBVSxHQUFHLFVBQVU7b0JBQzlCLE1BQU0sQ0FBQyxVQUFVLEdBQUcsUUFBUTtvQkFDNUIsTUFBTSxDQUFDLFVBQVUsR0FBRyxVQUFVO29CQUM5QixNQUFNLENBQUMsVUFBVSxHQUFHLFFBQVE7b0JBQzVCLE1BQU0sQ0FBQyxVQUFVLEdBQUcsc0JBQXNCO2lCQUMzQyxDQUFDO2dCQUVGLElBQUksR0FBRyxLQUFLLGlCQUFpQjtvQkFDM0IsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxVQUFVLEdBQUcsb0JBQW9CLENBQUM7Z0JBRXpELElBQUksY0FBYyxHQUFHO29CQUNuQixZQUFZLENBQUMsZUFBZTtvQkFDNUIsWUFBWSxDQUFDLE1BQU07b0JBQ25CLFlBQVksQ0FBQyxRQUFRO29CQUNyQixZQUFZLENBQUMsTUFBTTtpQkFDcEIsQ0FBQyxDQUFDLDRHQUE0RztnQkFFL0csSUFBSSxTQUFTLEVBQUUsQ0FBQztvQkFDZCxJQUFJLEtBQUssR0FBVyxDQUFDLENBQUM7b0JBQ3RCLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTt3QkFDMUIsSUFDRTs0QkFDRSxHQUFHLFVBQVU7NEJBQ2IsT0FBTyxDQUFDLGdCQUFnQjs0QkFDeEIsT0FBTyxDQUFDLFFBQVE7NEJBQ2hCLE9BQU8sQ0FBQyxlQUFlOzRCQUN2QixPQUFPLENBQUMsT0FBTzs0QkFDZixPQUFPLENBQUMsVUFBVTs0QkFDbEIsT0FBTyxDQUFDLFVBQVU7NEJBQ2xCLE9BQU8sQ0FBQyxVQUFVOzRCQUNsQixPQUFPLENBQUMsVUFBVTs0QkFDbEIsT0FBTyxDQUFDLFNBQVM7NEJBQ2pCLE9BQU8sQ0FBQyxTQUFTLEVBQUUsNEVBQTRFOzRCQUMvRixPQUFPLENBQUMsZUFBZTs0QkFDdkIsT0FBTyxDQUFDLFNBQVM7eUJBQ2xCLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQzs0QkFFakIsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLHFSQUFxUjs2QkFDN1IsSUFBSSxjQUFjLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUM7NEJBQ3hDLElBQUksVUFBVSxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7NEJBQ3pDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLDBGQUEwRjs0QkFDdkksUUFBUSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsbUNBQW1DOzRCQUN2RSxLQUFLLEdBQUcsU0FBUyxDQUFDLENBQUMsMEdBQTBHO3dCQUMvSCxDQUFDOzZCQUFNLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDOzRCQUFFLEtBQUssR0FBRyxDQUFDLENBQUM7d0JBRXRKLHFCQUFxQixDQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUNuRCxDQUFDLENBQUMsQ0FBQztnQkFDTCxDQUFDO2dCQUVELElBQUksVUFBVSxHQUFpQixlQUFlLENBQzVDLFFBQVEsRUFDUixNQUFNLENBQUMsVUFBVSxDQUNsQixDQUFDO2dCQUVGLElBQUksVUFBVSxDQUFDLE1BQU0sS0FBSyxDQUFDO29CQUN6QixPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0NBQXNDLENBQUMsQ0FBQztnQkFFN0QsSUFBSSxNQUFNLEtBQUssT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDO29CQUNqQyw0RkFBNEY7b0JBQzVGLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO3dCQUN4QixVQUFVLEdBQUcsVUFBVTs2QkFDcEIsTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLDhCQUE4QixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzt3QkFDcEUsQ0FBQzs0QkFDRCxVQUFVLEdBQUcsVUFBVTtpQ0FDcEIsTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxRQUFRLENBQUMsOEJBQThCLENBQUMsQ0FBQyxDQUFDO2dCQUM5RSxDQUFDO2dCQUVELHNDQUFzQyxDQUFDO29CQUNyQyxNQUFNLEVBQUUsd0JBQXdCLENBQUMsVUFBVSxDQUFpQjtvQkFDNUQsU0FBUyxFQUFFLEdBQUcsQ0FBQyxTQUFTO29CQUN4QixRQUFRLEVBQUU7d0JBQ1IsYUFBYSxFQUFFLGFBQWE7d0JBQzVCLEVBQUUsRUFBRSxnQkFBZ0IsQ0FBQyxrQkFBaUM7cUJBQ3ZEO29CQUNELFNBQVMsRUFBRSxHQUFHLENBQUMsV0FBVztpQkFDM0IsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUVMOzs7Ozs7ZUFNRztZQUNILFNBQVMscUJBQXFCLENBQzVCLFFBQWtCLEVBQ2xCLFNBQWlCLEVBQ2pCLEtBQWEsRUFDYixNQUFjO2dCQUVkLElBQUksQ0FBQyxLQUFLLElBQUksS0FBSyxLQUFLLENBQUM7b0JBQUUsT0FBTztnQkFDbEMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1lBQzVDLENBQUM7WUFFRDs7Ozs7ZUFLRztZQUNILFNBQVMsZUFBZSxDQUFDLFFBQWtCLEVBQUUsTUFBYztnQkFDekQsSUFBSSxNQUFNLEdBQWlCLEVBQUUsRUFDM0IsV0FBVyxHQUFpQixrQkFBa0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFFekQsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFO29CQUN4QixJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBQyxzREFBc0Q7d0JBQ3JGLFdBQVc7NEJBQ1QsdUdBQXVHOzZCQUN0RyxNQUFNLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUNkLHlCQUF5QixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQ2xEOzZCQUNBLE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDOzt3QkFFdkMsTUFBTSxDQUFDLElBQUksQ0FDVCxTQUFTLENBQUMsUUFBUSxFQUFFLFdBQVcsQ0FBZSxDQUMvQyxDQUFDO2dCQUNOLENBQUMsQ0FBQyxDQUFDO2dCQUVILE9BQU8sTUFBTSxDQUFDO1lBQ2hCLENBQUM7UUFDSCxDQUFDO0lBRUgsQ0FBQztDQUNGLENBQUMsQ0FBQztBQUVILE1BQU0saUJBQWlCLEdBQUcsSUFBSSxNQUFNLENBQUM7SUFDbkMsS0FBSyxFQUFFLG1CQUFtQjtJQUMxQixLQUFLLEVBQUUsUUFBUSxDQUFDO1FBQ2QsRUFBRSxFQUFFLG1CQUFtQjtRQUN2QixFQUFFLEVBQUUsZUFBZTtRQUNuQixFQUFFLEVBQUUsd0JBQXdCO0tBQzdCLENBQUM7SUFDRixXQUFXLEVBQUUsSUFBSSxnQkFBZ0IsRUFBRTtJQUNuQyxTQUFTLEVBQUUsQ0FBQyxHQUFHLGdCQUFnQixDQUFDO0lBQ2hDLE9BQU8sRUFBRSxHQUFhLEVBQUU7UUFDdEIsaUJBQWlCLENBQUMsZUFBZSxHQUFHLENBQUMsR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUMvRCxDQUFDLEtBQUssRUFBRSxFQUFFLENBQ1IsS0FBSyxLQUFLLE1BQU0sQ0FBQyxZQUFZLEdBQUcsY0FBYztZQUM5QyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUN4QyxDQUFDO1FBRUYsV0FBVyxFQUFFLENBQUM7UUFDZCxPQUFPLGlCQUFpQixDQUFDLGVBQWUsQ0FBQztJQUMzQyxDQUFDO0lBQ0QsZ0JBQWdCLEVBQUUsR0FBRyxFQUFFLENBQUMsaUJBQWlCLENBQUMsZ0JBQWdCLENBQUMsaUJBQWlCLEVBQUUsTUFBTSxDQUFDLGFBQWEsQ0FBQztDQUNwRyxDQUFDLENBQUM7QUFFSCxNQUFNLFNBQVMsR0FBRyxJQUFJLE1BQU0sQ0FBQztJQUMzQixLQUFLLEVBQUUsV0FBVztJQUNsQixLQUFLLEVBQUUsUUFBUSxDQUFDO1FBQ2QsRUFBRSxFQUFFLGVBQWU7UUFDbkIsRUFBRSxFQUFFLHNDQUFzQztRQUMxQyxFQUFFLEVBQUUsUUFBUTtLQUNiLENBQUM7SUFDRixPQUFPLEVBQUUsQ0FBQyxJQUFZLEVBQUUsTUFBYyxTQUFTLEVBQUUsRUFBRTtRQUNqRCxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFDbEIsR0FBRyxDQUFDLGVBQWUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsYUFBYSxHQUFHLElBQUksQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFDRCxnQkFBZ0IsRUFBRSxLQUFLLEVBQUUsSUFBWSxFQUFFLE1BQWMsU0FBUyxFQUFFLEVBQUU7UUFDaEUsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBRWxCLGlCQUFpQixDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUEsK0ZBQStGO1FBRXZJLE1BQU0sS0FBSyxHQUFHO1lBQ1osVUFBVSxFQUFFLEVBQUU7WUFDZCxNQUFNLEVBQUUsRUFBRTtZQUNWLE1BQU0sRUFBRSxFQUFFO1lBQ1YsS0FBSyxFQUFFLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUMsSUFBSSxTQUFTLEVBQUUsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLFlBQVksR0FBRyx3QkFBd0IsQ0FBQyxJQUFJLFNBQVMsQ0FBQztZQUNqSixNQUFNLEVBQUUsU0FBUyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLElBQUksU0FBUztZQUM1RSxPQUFPLEVBQUUsRUFBRTtZQUNYLE1BQU0sRUFBRSxTQUFTLENBQUMsTUFBTSxDQUFDLFVBQVUsR0FBRyw0QkFBNEIsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxjQUFjLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksU0FBUztZQUMxSixhQUFhLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxhQUFhLEdBQUcsSUFBSSxFQUFFLEdBQUcsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMscUJBQXFCLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDM0gsY0FBYyxFQUFFLFNBQVMsQ0FBQyxNQUFNLENBQUMsY0FBYyxHQUFHLFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSSxTQUFTO1lBQ2pGLFdBQVcsRUFBRSxFQUFFO1NBQ2hCLENBQUM7UUFFRixJQUFJLElBQUksS0FBSyxZQUFZLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDbEMsS0FBSyxDQUFDLFVBQVUsR0FBRyxDQUFDLGFBQWEsRUFBRSxZQUFZLEVBQUUsYUFBYSxFQUFFLFdBQVcsRUFBRSxvQkFBb0IsRUFBRSxjQUFjLEVBQUUsWUFBWSxDQUFDLENBQUM7WUFDakksS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQy9CLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxhQUFhLEVBQUUsWUFBWSxDQUFDLENBQUM7WUFDN0MsS0FBSyxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLFVBQVUsR0FBRywwQkFBMEIsQ0FBQyxJQUFJLFNBQVMsQ0FBQztZQUNyRixLQUFLLENBQUMsT0FBTyxHQUFHLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLFlBQVksR0FBRyxxQkFBcUIsQ0FBQyxJQUFJLFNBQVMsRUFBRSxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsWUFBWSxHQUFHLGVBQWUsQ0FBQyxJQUFJLFNBQVMsRUFBRSxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsWUFBWSxHQUFHLGVBQWUsQ0FBQyxJQUFJLFNBQVMsQ0FBQyxDQUFDO1FBQy9OLENBQUM7YUFDSSxJQUFJLElBQUksS0FBSyxZQUFZLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDeEMsS0FBSyxDQUFDLFVBQVUsR0FBRyxDQUFDLHNCQUFzQixFQUFFLGNBQWMsRUFBRSxhQUFhLEVBQUUsYUFBYSxFQUFFLHNCQUFzQixFQUFFLFlBQVksRUFBRSxhQUFhLENBQUMsQ0FBQztZQUMvSSxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDaEMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLHFCQUFxQixFQUFFLFlBQVksQ0FBQyxDQUFDO1lBQ3JELEtBQUssQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxZQUFZLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLFNBQVMsQ0FBQztZQUMzRSxLQUFLLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxVQUFVLEdBQUcsMENBQTBDLENBQUM7UUFDckYsQ0FBQzthQUNJLElBQUksSUFBSSxLQUFLLFlBQVksQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUM1QyxLQUFLLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztZQUN0QixLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQztZQUN0QyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsb0NBQW9DLENBQUMsQ0FBQztZQUN0RCxLQUFLLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsWUFBWSxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxTQUFTLENBQUM7UUFDN0UsQ0FBQztRQUFBLENBQUM7UUFFRixDQUFDLFNBQVMsa0JBQWtCO1lBQzFCLE1BQU0sYUFBYSxHQUFHLHVCQUF1QixDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLFVBQVUsR0FBRyxlQUFlLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQ3ZILElBQUksYUFBYSxDQUFDLE1BQU0sR0FBRyxDQUFDO2dCQUFFLE9BQU87WUFDckMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFBO1FBQzNCLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxNQUFtQixFQUNyQixTQUFTLEdBQUcsQ0FBQyxlQUFlLEVBQUUsZUFBZSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7UUFHdEUsTUFBTSxrQkFBa0IsRUFBRSxDQUFDO1FBRTNCLEtBQUssVUFBVSxrQkFBa0I7WUFFL0IsSUFBSSxJQUFJLEtBQUssWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUVsQyxNQUFNLE1BQU0sQ0FBQyxRQUFRLEVBQUUsU0FBUyxFQUFFLFNBQVMsQ0FBQyxNQUFNLENBQUMsVUFBVSxHQUFHLFdBQVcsQ0FBQyxJQUFJLFNBQVMsQ0FBQyxDQUFDO2dCQUUzRixNQUFNLE1BQU0sQ0FBQyxZQUFZLEVBQUUsU0FBUyxFQUFFLFNBQVMsQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLFlBQVksR0FBRyxJQUFJLENBQUMsSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFBLDBCQUEwQjtnQkFFNUgsTUFBTSxNQUFNLENBQUMsV0FBVyxFQUFFLFNBQVMsRUFBRSxTQUFTLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQSwwQkFBMEI7WUFFNUgsQ0FBQztpQkFDSSxJQUFJLElBQUksS0FBSyxZQUFZLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQ3hDLE1BQU0sTUFBTSxDQUFDLFFBQVEsRUFBRSxTQUFTLEVBQUUsU0FBUyxDQUFDLE1BQU0sQ0FBQyxVQUFVLEdBQUcsb0JBQW9CLENBQUMsSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFBLDBCQUEwQjtZQUNoSSxDQUFDO1lBQUEsQ0FBQztZQUVGLE1BQU0sTUFBTSxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUEsc0NBQXNDO1lBQ3hGLE1BQU0sTUFBTSxDQUFDLFlBQVksRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDN0MsTUFBTSxNQUFNLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFBLGdDQUFnQztZQUNyRSxNQUFNLE1BQU0sQ0FBQyxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLGtCQUFrQjtZQUNqRSxNQUFNLE1BQU0sQ0FBQyxlQUFlLEVBQUUsU0FBUyxFQUFFLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUM5RCxNQUFNLE1BQU0sQ0FBQyxxQkFBcUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQ3JFLE1BQU0sTUFBTSxDQUFDLGFBQWEsRUFBRSxTQUFTLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUEsNEJBQTRCO1lBQ2pGLE1BQU0sTUFBTSxDQUFDLGNBQWMsRUFBRSxTQUFTLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUEsbURBQW1EO1lBQ3pHLE1BQU0sTUFBTSxDQUFDLGFBQWEsRUFBRSxTQUFTLEVBQUUsU0FBUyxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxTQUFTLENBQUMsQ0FBQztZQUdsRixLQUFLLFVBQVUsTUFBTSxDQUFDLEtBQWEsRUFBRSxJQUFjLEVBQUUsT0FBb0I7Z0JBQ3ZFLE1BQU0sR0FBRyx1QkFBdUIsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxNQUFNLEdBQUcsS0FBSyxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUV2RixJQUFJLENBQUMsTUFBTTtvQkFBRSxPQUFPO2dCQUVwQixJQUFJLE9BQU87b0JBQ1QsT0FBTyxhQUFhLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxZQUFZLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFFdEUsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLElBQUk7b0JBQUUsT0FBTztnQkFFNUIsSUFBSSxLQUFLLEtBQUssWUFBWSxFQUFFLENBQUM7b0JBQzNCLE9BQU8sR0FBRyxDQUFDOzRCQUNULHVCQUF1Qjs0QkFDdkIsRUFBRTs0QkFDRixZQUFZOzRCQUNaLEVBQUU7NEJBQ0YsU0FBUzt5QkFDVixDQUFDLENBQUM7b0JBQ0gsYUFBYSxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztnQkFFbkQsQ0FBQztnQkFFRCxNQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUMsR0FBRyxFQUFDLEVBQUU7b0JBQ3JDLElBQUksSUFBSSxLQUFLLFlBQVksQ0FBQyxZQUFZO3dCQUNwQyxPQUFPLEdBQUcsTUFBTSw2QkFBNkIsQ0FBQzs0QkFDNUMsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsR0FBRyx3QkFBd0IsRUFBRSxjQUFjLENBQUMsa0JBQWtCLENBQUMsSUFBSSxTQUFTOzRCQUN4RyxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxHQUFHLHFCQUFxQixFQUFFLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLFNBQVM7eUJBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQzs7d0JBRWxILE9BQU8sR0FBRyxNQUFNLDZCQUE2QixDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUM7b0JBRTNGLElBQUksQ0FBQyxPQUFPO3dCQUFFLE9BQU87b0JBRXJCLElBQUksS0FBSyxLQUFLLFFBQVEsRUFBRSxDQUFDO3dCQUN2QixhQUFhLENBQUMsb0JBQW9CLENBQUMsS0FBSyxFQUFFLHFCQUFxQixDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsRUFBRSxNQUFNLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQyxDQUFBLGdEQUFnRDtvQkFDbkssQ0FBQztvQkFFRCxhQUFhLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFBLG1DQUFtQztvQkFFN0UsSUFBSSxLQUFLLEtBQUssWUFBWSxJQUFJLElBQUksS0FBSyxZQUFZLENBQUMsWUFBWSxFQUFFLENBQUM7d0JBQ2pFLGFBQWEsQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLEVBQUUscUJBQXFCLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxFQUFFLE1BQU0sRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDLENBQUEsa0dBQWtHO29CQUNyTixDQUFDO3lCQUFNLElBQUksS0FBSyxLQUFLLFFBQVEsRUFBRSxDQUFDO3dCQUM5QixhQUFhLENBQUMsb0JBQW9CLENBQUMsS0FBSyxFQUFFLHFCQUFxQixDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsRUFBRSxNQUFNLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQyxDQUFBLDhDQUE4QztvQkFDN0osQ0FBQzt5QkFBTSxJQUFJLEtBQUssS0FBSyxPQUFPLEVBQUUsQ0FBQzt3QkFDN0IsT0FBTyxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsV0FBVyxHQUFHLFVBQVUsRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLFNBQVMsQ0FBQzt3QkFDcEYsWUFBWSxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsQ0FBQzt3QkFDbEMsYUFBYSxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsWUFBWSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFBO29CQUNsRSxDQUFDO2dCQUVILENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBRUosU0FBUyxhQUFhLENBQUMsT0FBbUIsRUFBRSxNQUFtQixFQUFFLEtBQWU7b0JBQzlFLElBQUksQ0FBQyxPQUFPO3dCQUFFLE9BQU87b0JBQ3JCLHNDQUFzQyxDQUFDO3dCQUNyQyxNQUFNLEVBQUUsQ0FBQyxPQUFPLENBQUM7d0JBQ2pCLFNBQVMsRUFBRSxLQUFLO3dCQUNoQixRQUFRLEVBQUUsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUU7d0JBQ3RELFNBQVMsRUFBRSxHQUFHLENBQUMsV0FBVztxQkFDM0IsQ0FBQyxDQUFDO2dCQUNMLENBQUM7Z0JBQ0QsU0FBUyxvQkFBb0IsQ0FBQyxNQUFjLEVBQUUsSUFBNkQsRUFBRSxRQUFnQixPQUFPO29CQUNsSSxPQUFPLENBQUM7NEJBQ04sS0FBSyxHQUFHLEtBQUssR0FBRyxZQUFZLEdBQUcsS0FBSzs0QkFDcEMsR0FBRyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO3lCQUNsRCxDQUFDLENBQUM7Z0JBQ0wsQ0FBQztnQkFDRCxTQUFTLFlBQVksQ0FBQyxPQUFtQixFQUFFLFFBQWdCO29CQUN6RCxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssR0FBRyxRQUFRLENBQUE7Z0JBQ2xFLENBQUM7WUFDSCxDQUFDO1FBQ0gsQ0FBQztRQUFBLENBQUM7UUFFRixNQUFNLCtCQUErQixDQUFDO1lBQ3BDLE1BQU0sRUFBRSxJQUFJO1lBQ1osT0FBTyxFQUFFLE1BQU0sQ0FBQyxVQUFVO1lBQzFCLFNBQVMsRUFBRSxHQUFHLENBQUMsV0FBVztZQUMxQixjQUFjLEVBQUUsS0FBSztZQUNyQixNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUNuRSxDQUFDLENBQUM7UUFJSCxTQUFTLFNBQVMsQ0FBQyxNQUFjLEVBQUUsR0FBVztZQUM1QyxHQUFHLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLElBQUksT0FBTyxDQUFDLENBQUMsQ0FBQyxNQUFNLElBQUksUUFBUSxDQUFDO1lBQy9ELE9BQU8sQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLEdBQUcsVUFBVSxHQUFHLFVBQVUsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFBO1FBQ2hGLENBQUM7SUFDSCxDQUFDO0NBQ0YsQ0FBQyxDQUFDO0FBRUgsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLE1BQU0sQ0FBQztJQUNsQyxLQUFLLEVBQUUsa0JBQWtCO0lBQ3pCLEtBQUssRUFBRSxRQUFRLENBQUM7UUFDZCxFQUFFLEVBQUUsa0JBQWtCO1FBQ3RCLEVBQUUsRUFBRSw0QkFBNEI7UUFDaEMsRUFBRSxFQUFFLHNCQUFzQjtLQUMzQixDQUFDO0lBQ0YsT0FBTyxFQUFFLEdBQUcsRUFBRTtRQUVaLElBQUksUUFBUSxHQUFHO1lBQ2I7Z0JBQ0UsVUFBVSxFQUFFLG9CQUFvQjtnQkFDaEMsTUFBTSxFQUFFLHVCQUF1QjtnQkFDL0IsS0FBSyxFQUFFLENBQUMsTUFBTSxDQUFDLFVBQVUsR0FBRyxzREFBc0QsQ0FBQztnQkFDbkYsTUFBTSxFQUFFLENBQUMsbUJBQW1CLEVBQUUsYUFBYSxDQUFDO2dCQUM1QyxhQUFhLEVBQUUsTUFBTSxDQUFDLGFBQWEsR0FBRyx1QkFBdUI7Z0JBQzdELE9BQU8sRUFBRSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEdBQUcsdUJBQXVCLENBQUM7Z0JBQ3hELFFBQVEsRUFBRTtvQkFDUixNQUFNLENBQUMsV0FBVyxHQUFHLFlBQVk7b0JBQ2pDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsaUJBQWlCO29CQUN0QyxNQUFNLENBQUMsVUFBVSxHQUFHLGdCQUFnQixHQUFHLE1BQU07b0JBQzdDLE1BQU0sQ0FBQyxVQUFVLEdBQUcsY0FBYztpQkFDbkM7YUFDRjtZQUNEO2dCQUNFLFVBQVUsRUFBRSxhQUFhO2dCQUN6QixNQUFNLEVBQUUsdUJBQXVCO2dCQUMvQixLQUFLLEVBQUUsQ0FBQyxNQUFNLENBQUMsWUFBWSxHQUFHLE9BQU8sQ0FBQztnQkFDdEMsTUFBTSxFQUFFLENBQUMsZUFBZSxFQUFFLGNBQWMsQ0FBQztnQkFDekMsYUFBYSxFQUFFLE1BQU0sQ0FBQyxhQUFhLEdBQUcsTUFBTSxHQUFHLGtCQUFrQjtnQkFDakUsT0FBTyxFQUFFLENBQUMsTUFBTSxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUM7Z0JBQ3ZDLFFBQVEsRUFBRTtvQkFDUixNQUFNLENBQUMsVUFBVSxHQUFHLGlCQUFpQjtvQkFDckMsTUFBTSxDQUFDLGNBQWMsR0FBRyxnQkFBZ0I7b0JBQ3hDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsaUJBQWlCO29CQUN0QyxNQUFNLENBQUMsVUFBVSxHQUFHLG1CQUFtQjtpQkFDeEM7YUFDRjtZQUNEO2dCQUNFLFVBQVUsRUFBRSxhQUFhO2dCQUN6QixNQUFNLEVBQUUsY0FBYztnQkFDdEIsS0FBSyxFQUFFLENBQUMsTUFBTSxDQUFDLFlBQVksR0FBRyxPQUFPLENBQUM7Z0JBQ3RDLE1BQU0sRUFBRSxDQUFDLG1CQUFtQixFQUFFLFlBQVksQ0FBQztnQkFDM0MsYUFBYSxFQUFFLE1BQU0sQ0FBQyxhQUFhLEdBQUcsTUFBTSxHQUFHLGtCQUFrQjtnQkFDakUsT0FBTyxFQUFFLENBQUMsTUFBTSxDQUFDLFlBQVksR0FBRyxPQUFPLENBQUM7Z0JBQ3hDLFFBQVEsRUFBRTtvQkFDUixNQUFNLENBQUMsWUFBWSxHQUFHLGNBQWMsRUFBQyw2QkFBNkI7b0JBQ2xFLE1BQU0sQ0FBQyxZQUFZLEdBQUcsWUFBWTtvQkFDbEMsTUFBTSxDQUFDLFlBQVksR0FBRyx3QkFBd0I7b0JBQzlDLGlCQUFpQixDQUFDLFVBQVU7aUJBQzdCO2FBQ0Y7U0FFRixDQUFDO1FBRUYsSUFBSSxTQUFTLEdBQUc7WUFDZCxFQUFFLEVBQUUsZ0JBQWdCO1lBQ3BCLEVBQUUsRUFBRSxtQkFBbUI7WUFDdkIsRUFBRSxFQUFFLG1CQUFtQjtTQUN4QixDQUFDO1FBRUYsSUFBSSxXQUFXLEdBQUc7WUFDaEI7Z0JBQ0UsRUFBRSxFQUFFLFFBQVE7Z0JBQ1osRUFBRSxFQUFFLFVBQVU7Z0JBQ2QsRUFBRSxFQUFFLE9BQU87YUFDWjtZQUNEO2dCQUNFLEVBQUUsRUFBRSxTQUFTO2dCQUNiLEVBQUUsRUFBRSxVQUFVO2dCQUNkLEVBQUUsRUFBRSxRQUFRO2FBQ2I7WUFDRDtnQkFDRSxFQUFFLEVBQUUsU0FBUztnQkFDYixFQUFFLEVBQUUsV0FBVztnQkFDZixFQUFFLEVBQUUsT0FBTzthQUNaO1NBQ0YsQ0FBQztRQUdGLElBQUksUUFBUSxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDOUIsSUFBSSxDQUFDLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM1QixPQUFPLElBQUksTUFBTSxDQUFDO2dCQUNoQixLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUU7Z0JBQzVDLEtBQUssRUFBRSxjQUFjLENBQUMsQ0FBQyxDQUFDO2dCQUN4QixXQUFXLEVBQUUsSUFBSSxnQkFBZ0IsRUFBRTtnQkFDbkMsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7Z0JBQzVCLGdCQUFnQixFQUFFLEdBQUcsRUFBRSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQzthQUMvQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUVILGdCQUFnQixDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFFckMsU0FBUyxjQUFjLENBQUMsQ0FBUztZQUMvQixNQUFNLEtBQUssR0FBRyxFQUFFLEdBQUcsU0FBUyxFQUFFLENBQUM7WUFDL0IsS0FBSyxDQUFDLGVBQWUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO1lBQ2hHLE9BQU8sUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQ3hCLENBQUM7UUFFRCxLQUFLLFVBQVUsVUFBVSxDQUFDLENBQVMsRUFBRSxZQUFxQixLQUFLO1lBQzdELElBQUksR0FBRyxHQUFHLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN2QyxJQUFJLE1BQU0sR0FBRyxNQUFNLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNuQyxJQUFJLFNBQVM7Z0JBQUUsT0FBTyxNQUFNLENBQUM7WUFFN0IsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDckIsV0FBVyxDQUFDO29CQUNWLFNBQVMsRUFBRSxHQUFHLENBQUMsV0FBVztvQkFDMUIsaUJBQWlCLEVBQUUsSUFBSTtvQkFDdkIsaUJBQWlCLEVBQUUsSUFBSTtvQkFDdkIsS0FBSyxFQUFFLEtBQUs7b0JBQ1osU0FBUyxFQUFFLFlBQVksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQ3RDLENBQUMsQ0FBQztZQUVMLENBQUMsQ0FBQyxDQUFDO1lBRUgsS0FBSyxVQUFVLFlBQVksQ0FBQyxLQUFhO2dCQUN2QyxJQUFJLE9BQU8sR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQzNCLEtBQUssR0FBRyxDQUFDLEdBQUcsU0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUV2QyxDQUFDLFNBQVMsaUJBQWlCO29CQUN6QixJQUFJLEtBQUssS0FBSyxDQUFDLEVBQUUsQ0FBQzt3QkFDaEIsS0FBSyxDQUFDLE9BQU8sQ0FDWCxNQUFNLENBQUMsV0FBVyxHQUFHLFVBQVUsRUFDL0IsTUFBTSxDQUFDLFFBQVEsR0FBRyxNQUFNLEVBQ3hCLE1BQU0sQ0FBQyxRQUFRLEdBQUcscUJBQXFCLEVBQ3ZDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsNEJBQTRCLEVBQzlDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsVUFBVSxHQUFHLE1BQU0sRUFDckMsTUFBTSxDQUFDLFFBQVEsR0FBRyxxRUFBcUUsRUFDdkYsTUFBTSxDQUFDLFFBQVEsR0FBRyxtREFBbUQsQ0FDdEUsQ0FBQztvQkFDSixDQUFDO3lCQUNJLElBQUksS0FBSyxLQUFLLENBQUMsRUFBRSxDQUFDO3dCQUNyQixLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsRUFBRSxDQUFDLEVBQUUsTUFBTSxDQUFDLEtBQUssR0FBRywwREFBMEQsQ0FBQyxDQUFDLENBQUMsZUFBZTt3QkFFbkosSUFBSSxTQUFTLEdBQ1g7NEJBQ0UsTUFBTSxDQUFDLGNBQWMsR0FBRyxxQkFBcUI7NEJBQzdDLE1BQU0sQ0FBQyxZQUFZLEdBQUcsT0FBTzs0QkFDN0IsTUFBTSxDQUFDLFlBQVksR0FBRyxtQkFBbUI7NEJBQ3pDLE1BQU0sQ0FBQyxZQUFZLEdBQUcseUJBQXlCOzRCQUMvQyxNQUFNLENBQUMsWUFBWSxHQUFHLGlCQUFpQjs0QkFDdkMsTUFBTSxDQUFDLFVBQVUsR0FBRyxhQUFhOzRCQUNqQyxNQUFNLENBQUMsVUFBVSxHQUFHLGlCQUFpQjs0QkFDckMsTUFBTSxDQUFDLFVBQVUsR0FBRyxVQUFVOzRCQUM5QixNQUFNLENBQUMsVUFBVSxHQUFHLFFBQVE7NEJBQzVCLE1BQU0sQ0FBQyxVQUFVLEdBQUcsTUFBTSxFQUFFLFVBQVU7NEJBQ3RDLE1BQU0sQ0FBQyxVQUFVLEdBQUcsc0JBQXNCOzRCQUMxQyxNQUFNLENBQUMsWUFBWSxHQUFHLGtCQUFrQjs0QkFDeEMsTUFBTSxDQUFDLFlBQVksR0FBRyxPQUFPOzRCQUM3QixNQUFNLENBQUMsYUFBYSxHQUFHLGNBQWM7eUJBQ3RDLENBQUM7d0JBRUosS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsWUFBWSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsU0FBUyxDQUFDLENBQUM7d0JBRTNFLElBQUksR0FBRyxHQUFhOzRCQUNsQixNQUFNLENBQUMsWUFBWSxHQUFHLHlCQUF5Qjs0QkFDL0MsTUFBTSxDQUFDLFlBQVksR0FBRyxpQkFBaUI7NEJBQ3ZDLE1BQU0sQ0FBQyxZQUFZLEdBQUcscUJBQXFCOzRCQUMzQyxNQUFNLENBQUMsWUFBWSxHQUFHLG1CQUFtQjs0QkFDekMsTUFBTSxDQUFDLGFBQWEsR0FBRyxZQUFZO3lCQUNwQyxDQUFDO3dCQUVGLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztvQkFDckIsQ0FBQztvQkFBQSxDQUFDO2dCQUVKLENBQUMsQ0FBQyxFQUFFLENBQUM7Z0JBRUwsSUFBSSxRQUFRLEdBQUcsTUFBTSxPQUFPLENBQUMsR0FBRyxDQUM5QixLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBQyxLQUFLLEVBQUMsRUFBRTtvQkFDdEIsSUFBSSxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7d0JBQ2pDLE9BQU8sTUFBTSxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUE7O3dCQUM3QixPQUFPLE1BQU0sWUFBWSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUE7Z0JBQ3BGLENBQUMsQ0FBQyxDQUNILENBQUM7Z0JBRUYsT0FBTyxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBR3ZDLEtBQUssVUFBVSxZQUFZLENBQUMsS0FBYSxFQUFFLGNBQXVCLEtBQUs7b0JBQ3JFLElBQUksV0FBVyxFQUFFLENBQUM7d0JBQ2hCLE9BQU8sU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLFNBQVMsQ0FBQztvQkFDdkMsQ0FBQztvQkFBQSxDQUFDO29CQUVGLElBQUksSUFBSSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQztvQkFDNUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxlQUFlLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO3dCQUFFLE9BQU8sQ0FBQSw4R0FBOEc7b0JBRXZMLElBQUksSUFBSSxLQUFLLFFBQVE7d0JBQ25CLE9BQU8sTUFBTSxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO3lCQUN6RCxJQUFJLElBQUksS0FBSyxZQUFZO3dCQUM1QixPQUFPLE1BQU0sZ0JBQWdCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQzs7d0JBQzdELE9BQU8sV0FBVyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO29CQUV2QyxTQUFTLFdBQVcsQ0FBQyxJQUFjO3dCQUNqQyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ25ELEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFBLG9KQUFvSjt3QkFDekwsT0FBTyxLQUFLLENBQUE7b0JBQ2QsQ0FBQztnQkFFSCxDQUFDO2dCQUVELEtBQUssVUFBVSxnQkFBZ0IsQ0FBQyxJQUFZLEVBQUUsTUFBYztvQkFDMUQsT0FBTyxNQUFNLDZCQUE2QixDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsZUFBZSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxDQUFDLEVBQUUsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUE7Z0JBQzVILENBQUM7WUFFSCxDQUFDO1FBRUgsQ0FBQztRQUVELEtBQUssVUFBVSxtQkFBbUIsQ0FBQyxDQUFTO1lBQzFDLElBQUksR0FBRyxHQUFHLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN2QyxpQkFBaUIsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBLHVHQUF1RztZQUMvSSxJQUFJLENBQUMsS0FBSyxDQUFDO2dCQUNULG1CQUFtQixDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztpQkFDbEMsSUFBSSxDQUFDLEtBQUssQ0FBQztnQkFDZCxpQkFBaUIsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBLCtEQUErRDtZQUN6RyxNQUFNLFlBQVksRUFBRSxDQUFDO1lBQ3JCLEtBQUssVUFBVSxZQUFZO2dCQUN6QixJQUFJLE1BQU0sR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO2dCQUNoQyxNQUFNLGlCQUFpQixDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDNUMsTUFBTSxpQkFBaUIsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzdDLE1BQU0saUJBQWlCLENBQUMsZUFBZSxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLEVBQUUsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUUxRixLQUFLLFVBQVUsaUJBQWlCLENBQUMsS0FBYSxFQUFFLEdBQVcsRUFBRSxNQUFlO29CQUMxRSxJQUFJLE1BQU0sR0FBbUIsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUUvQyxJQUFJLENBQUMsTUFBTTt3QkFBRSxPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUNBQWlDLEVBQUUsS0FBSyxDQUFDLENBQUM7b0JBRTFFLElBQUksS0FBaUIsRUFBRSxLQUFlLENBQUM7b0JBRXZDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLFlBQVksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7b0JBRWhGLElBQUksTUFBTTt3QkFDUixLQUFLLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLFNBQVMsQ0FBQzs7d0JBRXRDLEtBQUssR0FBRyxNQUFNLDZCQUE2QixDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7b0JBRWxGLElBQUksQ0FBQyxLQUFLO3dCQUFFLE9BQU87b0JBR25CLHNDQUFzQyxDQUFDO3dCQUNyQyxNQUFNLEVBQUUsQ0FBQyxLQUFLLENBQUM7d0JBQ2YsUUFBUSxFQUFFOzRCQUNSLEVBQUUsRUFBRSxNQUFNOzRCQUNWLGFBQWEsRUFBRSxhQUFhO3lCQUM3Qjt3QkFDRCxTQUFTLEVBQUUsR0FBRyxDQUFDLFdBQVc7d0JBQzFCLFNBQVMsRUFBRSxLQUFLO3FCQUNqQixDQUFDLENBQUM7b0JBR0gsU0FBUyxVQUFVLENBQUMsUUFBZ0I7d0JBQ2xDLE9BQU8sdUJBQXVCLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxNQUFNLENBQUMsTUFBTSxHQUFHLFFBQVEsR0FBRyxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUMzRyxDQUFDO2dCQUVILENBQUM7WUFDSCxDQUFDO1lBQUEsQ0FBQztZQUNGLFdBQVcsRUFBRSxDQUFDO1FBRWhCLENBQUM7SUFFSCxDQUFDO0NBQ0YsQ0FBQyxDQUFDO0FBRUgsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLE1BQU0sQ0FBQztJQUNsQyxLQUFLLEVBQUUsa0JBQWtCO0lBQ3pCLEtBQUssRUFBRSxRQUFRLENBQUM7UUFDZCxFQUFFLEVBQUUsdUJBQXVCO1FBQzNCLEVBQUUsRUFBRSx3QkFBd0I7UUFDNUIsRUFBRSxFQUFFLDJCQUEyQjtLQUNoQyxDQUFDO0lBQ0YsT0FBTyxFQUFFLENBQUMsaUJBQTBCLEtBQUssRUFBRSxFQUFFO1FBQzNDLHlJQUF5STtRQUN6SSxnQkFBZ0IsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO1FBQ25FLGtGQUFrRjtRQUVsRixJQUFJLGtCQUFrQixLQUFLLFlBQVksQ0FBQyxVQUFVO1lBQ2hELGdCQUFnQixDQUFDLFFBQVEsR0FBRyxDQUFDLGlCQUFpQixFQUFFLGdCQUFnQixDQUFDLENBQUE7UUFFbkUsdUhBQXVIO1FBQ3ZILElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO1lBQ3pELE9BQU8sS0FBSyxDQUFDO1lBQUUsZ0JBQWdCLENBQUMsUUFBUSxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUVqRSxJQUFJLGNBQWM7WUFBRSxPQUFPLGdCQUFnQixDQUFDLFFBQVEsQ0FBQztJQUN2RCxDQUFDO0NBQ0YsQ0FBQyxDQUFDO0FBRUgsTUFBTSxjQUFjLEdBQUcsSUFBSSxNQUFNLENBQUM7SUFDaEMsS0FBSyxFQUFFLGdCQUFnQjtJQUN2QixLQUFLLEVBQUUsUUFBUSxDQUFDLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsYUFBYSxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsQ0FBQztJQUNwRSxXQUFXLEVBQUUsSUFBSSxnQkFBZ0IsRUFBRTtJQUNuQyxTQUFTLEVBQUUsQ0FBQyxHQUFHLGdCQUFnQixDQUFDO0lBQ2hDLE9BQU8sRUFBRSxHQUFhLEVBQUU7UUFDdEIsNENBQTRDO1FBQzVDLGNBQWMsQ0FBQyxlQUFlLEdBQUc7WUFDL0IsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU87WUFDekIsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLGdCQUFnQjtZQUNsQyxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUTtZQUMxQixHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUztTQUM1QixDQUFDO1FBRUYsOEVBQThFO1FBQzlFLFdBQVcsRUFBRSxDQUFDO1FBQ2QsZ0dBQWdHO1FBQ2hHLG1DQUFtQztRQUNuQyxPQUFPLGNBQWMsQ0FBQyxlQUFlLENBQUM7SUFDeEMsQ0FBQztJQUNELGdCQUFnQixFQUFFLENBQUMsTUFBYyxjQUFjLEVBQUUsU0FBaUIsTUFBTSxDQUFDLFdBQVcsRUFBRSxFQUFFO1FBQ3RGLElBQUksY0FBYyxHQUFHLEdBQUcsQ0FBQyxXQUFXLENBQUM7UUFFckMsQ0FBQyxTQUFTLDZCQUE2QjtZQUNyQyxJQUFJLENBQUMsQ0FBQyxjQUFjLEVBQUUsY0FBYyxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQztnQkFBRSxPQUFPO1lBRTVELE1BQU0sZUFBZSxHQUFHLFNBQVMsQ0FDL0IsTUFBTSxHQUFHLGlCQUFpQixDQUFDLElBQUksU0FBUyxDQUFDO1lBRTNDLElBQUksQ0FBQyxlQUFlO2dCQUNsQixPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsNEJBQTRCLENBQUMsQ0FBQztZQUVuRCxNQUFNLFFBQVEsR0FBRyxJQUFJLE1BQU0sQ0FBQztnQkFDMUIsS0FBSyxFQUFFLGdCQUFnQjtnQkFDdkIsS0FBSyxFQUFFLFFBQVEsQ0FBQztvQkFDZCxFQUFFLEVBQUUsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDdkQsRUFBRSxFQUFFLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7aUJBQ3hELENBQUM7Z0JBQ0YsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLFdBQVcsRUFBRSxJQUFJLGdCQUFnQixFQUFFO2dCQUNuQyxPQUFPLEVBQUUsR0FBRyxFQUFFO29CQUNaLFdBQVcsQ0FBQzt3QkFDVixLQUFLLEVBQUUsZUFBZTt3QkFDdEIsU0FBUyxFQUFFLEdBQUcsQ0FBQyxTQUFTO3dCQUN4QixRQUFRLEVBQUUsUUFBUSxDQUFDLFdBQVc7d0JBQzlCLFNBQVMsRUFBRSxRQUFRLENBQUMsV0FBVzt3QkFDL0IsaUJBQWlCLEVBQUUsS0FBSzt3QkFDeEIsaUJBQWlCLEVBQUUsS0FBSztxQkFDekIsQ0FBQyxDQUFDO2dCQUVMLENBQUM7YUFDRixDQUFDLENBQUM7WUFFSCxNQUFNLE1BQU0sR0FBRyx1QkFBdUIsQ0FDcEMsY0FBYyxFQUNkLE1BQU0sR0FBRyxnQkFBZ0IsQ0FDMUIsQ0FBQyxDQUFDLENBQUMsRUFBRSxrQkFBa0IsQ0FBQztZQUV6QixNQUFNLE9BQU8sR0FBRyxtQkFBbUIsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLE1BQU0sRUFBRSxhQUFhLENBQUMsQ0FBQztZQUV2RSxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUU7Z0JBQ2xELHVCQUF1QixDQUFDLFlBQVksRUFBRSxNQUFNLEdBQUcsZ0JBQWdCLEVBQUUsU0FBUyxFQUFFLE9BQU8sQ0FBQztxQkFDakYsT0FBTyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ3BELENBQUMsQ0FBQyxDQUFDLENBQUEsc0dBQXNHO1FBQzNHLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFFTCxDQUFDLFNBQVMscUJBQXFCO1lBQzdCLDJFQUEyRTtZQUMzRSxJQUFJLGNBQWMsR0FBYTtnQkFDN0IsY0FBYztnQkFDZCxnQkFBZ0I7Z0JBQ2hCLGNBQWM7Z0JBQ2QsYUFBYTthQUNkLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxhQUFhLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBLGlGQUFpRjtZQUVsSSxJQUFJLE1BQXdCLENBQUM7WUFFN0IscUZBQXFGO1lBQ3JGLE1BQU0sR0FBRyx1QkFBdUIsQ0FDOUIsY0FBYyxFQUNkLE1BQU0sR0FBRyxnQkFBZ0IsRUFDekIsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQ25CLENBQUM7WUFDRixxQkFBcUIsQ0FDbkIsQ0FBQyxHQUFHLGNBQWMsQ0FBQyxFQUNuQjtnQkFDRSxhQUFhLEVBQUUsVUFBVTtnQkFDekIsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7YUFDZCxFQUNELDZCQUE2QixDQUM5QixDQUFDO1lBRUYsNEhBQTRIO1lBQzVILE1BQU0sR0FBRyx1QkFBdUIsQ0FDOUIsY0FBYyxFQUNkLE1BQU0sQ0FBQyxVQUFVLEdBQUcsa0JBQWtCLENBQ3ZDLENBQUM7WUFFRixxQkFBcUIsQ0FDbkIsQ0FBQyxHQUFHLGNBQWMsQ0FBQyxFQUNuQjtnQkFDRSxhQUFhLEVBQUUsVUFBVTtnQkFDekIsRUFBRSxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQzthQUM5QixFQUNELHVCQUF1QixDQUN4QixDQUFDO1lBRUYsK0RBQStEO1lBQy9ELE1BQU0sR0FBRyx1QkFBdUIsQ0FDOUIsY0FBYyxFQUNkLE1BQU0sR0FBRyxPQUFPLENBQ2pCLENBQUM7WUFFRixxQkFBcUIsQ0FDbkIsQ0FBQyxHQUFHLGNBQWMsQ0FBQyxFQUNuQjtnQkFDRSxhQUFhLEVBQUUsVUFBVTtnQkFDekIsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxzQkFBcUM7YUFDcEQsRUFDRCxvQkFBb0IsQ0FDckIsQ0FBQztZQUVGLHVGQUF1RjtZQUN2RixNQUFNLEdBQUcsdUJBQXVCLENBQzlCLGNBQWMsRUFDZCxNQUFNLENBQUMsVUFBVTtnQkFDakIsMEJBQTBCLENBQzNCLENBQUM7WUFDRixxQkFBcUIsQ0FDbkIsQ0FBQyxHQUFHLGNBQWMsQ0FBQyxFQUNuQjtnQkFDRSxhQUFhLEVBQUUsVUFBVTtnQkFDekIsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7YUFDZCxFQUNELHVCQUF1QixDQUN4QixDQUFDO1lBRUYsbUZBQW1GO1lBQ25GLE1BQU0sR0FBRyx1QkFBdUIsQ0FDOUIsY0FBYyxFQUNkLHNCQUFzQixFQUN0QixFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FDbkIsQ0FBQztZQUNGLHFCQUFxQixDQUNuQixDQUFDLEdBQUcsY0FBYyxDQUFDLEVBQ25CO2dCQUNFLGFBQWEsRUFBRSxhQUFhO2dCQUM1QixFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQzthQUNkLEVBQ0QsbUNBQW1DLENBQ3BDLENBQUM7WUFFRjs7Ozs7O2NBTUU7WUFDRixLQUFLLFVBQVUscUJBQXFCLENBQ2xDLElBQWMsRUFDZCxRQUE0RCxFQUM1RCxlQUF1QjtnQkFFdkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFO29CQUFFLE9BQU87Z0JBRXpCLElBQUksVUFBVSxHQUFhLEVBQUUsQ0FBQztnQkFDOUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO29CQUNmLCtKQUErSjtvQkFDL0osSUFBSSxNQUFNLEdBQVcsSUFBSSxNQUFNLENBQUM7d0JBQzlCLEtBQUssRUFDSCxPQUFPOzRCQUNQLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFDekIsUUFBUTs0QkFDUixRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJO3dCQUMxQixLQUFLLEVBQUUsR0FBRyxDQUFDLEtBQUs7d0JBQ2hCLFFBQVEsRUFBRSxjQUFjO3dCQUN4QixPQUFPLEVBQUUsS0FBSyxJQUFJLEVBQUU7NEJBQ2xCLE1BQU0seUJBQXlCLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxpR0FBaUc7NEJBQ3ZJLG1GQUFtRjs0QkFDbkYsSUFBSSxZQUFZLENBQUMsYUFBYSxDQUFDLEdBQUcsR0FBRyxlQUFlLENBQUM7Z0NBQ25ELGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxDQUFDO3dCQUN0QyxDQUFDO3FCQUNGLENBQUMsQ0FBQztvQkFDSCxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUMxQixDQUFDLENBQUMsQ0FBQztnQkFDSCx3QkFBd0IsQ0FBQyxVQUFVLEVBQUUsUUFBUSxFQUFFLGVBQWUsQ0FBQyxDQUFDO1lBQ2xFLENBQUM7UUFDSCxDQUFDLENBQUMsRUFBRSxDQUFDO1FBRUwsQ0FBQyxTQUFTLHlCQUF5QjtZQUNqQywrRUFBK0U7WUFDL0UsSUFBSSxZQUFZLEdBQVcsTUFBTSxDQUFDLFVBQVUsR0FBRyxpQkFBaUIsQ0FBQztZQUVqRSxJQUFJLFdBQVcsR0FBRyxNQUFNLENBQUMsVUFBVSxHQUFHLGVBQWUsQ0FBQztZQUV0RCxhQUFhLENBQ1gsWUFBWSxFQUNaLHVCQUF1QixDQUFDLGNBQWMsRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FDeEQsQ0FBQztZQUNGLFdBQVcsR0FBRyxNQUFNLENBQUMsVUFBVSxHQUFHLG1CQUFtQixDQUFBO1lBQ3JELHdCQUF3QjtZQUN4QixhQUFhLENBQ1gsWUFBWSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLEVBQ3JDLHVCQUF1QixDQUFDLGNBQWMsRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDdkQsSUFBSSxDQUNMLENBQUM7UUFDSixDQUFDLENBQUMsRUFBRSxDQUFDO1FBRUwsU0FBUyxhQUFhLENBQ3BCLFlBQW9CLEVBQ3BCLE1BQW1CLEVBQ25CLGFBQXNCLEtBQUs7WUFFM0IsSUFBSSxDQUFDLE1BQU07Z0JBQUUsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUM7WUFFdkQsSUFBSSxPQUFPLEdBQWUsZUFBZSxDQUFDLElBQUksQ0FDNUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUNOLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxVQUFVLENBQUMsWUFBWSxDQUFDO2dCQUNwQyx5QkFBeUIsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUNsRCxDQUFDO1lBRUYsSUFBSSxDQUFDLE9BQU87Z0JBQ1YsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLG1DQUFtQyxFQUFFLFlBQVksQ0FBQyxDQUFDO1lBQ3hFLE1BQU0sS0FBSyxHQUFHLFlBQVksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUMzQyxNQUFNLFVBQVUsR0FBRyxJQUFJLE1BQU0sQ0FBQztnQkFDNUIsS0FBSyxFQUFFLFlBQVksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNuQyxLQUFLLEVBQUUsUUFBUSxDQUFDO29CQUNkLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ3ZDLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7aUJBQ3hDLENBQUM7Z0JBQ0YsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLFdBQVcsRUFBRSxJQUFJLGdCQUFnQixFQUFFO2dCQUNuQyxPQUFPLEVBQUUsR0FBRyxFQUFFO29CQUNaLFdBQVcsQ0FBQzt3QkFDVixLQUFLLEVBQUUsT0FBTzt3QkFDZCxTQUFTLEVBQUUsS0FBSzt3QkFDaEIsUUFBUSxFQUFFLFVBQVUsQ0FBQyxXQUFXO3dCQUNoQyxTQUFTLEVBQUUsVUFBVSxDQUFDLFdBQVc7d0JBQ2pDLGlCQUFpQixFQUFFLEtBQUs7d0JBQ3hCLGlCQUFpQixFQUFFLEtBQUs7cUJBQ3pCLENBQUMsQ0FBQztnQkFFTCxDQUFDO2FBQ0YsQ0FBQyxDQUFDO1lBRUgsTUFBTSxPQUFPLEdBQUcsbUJBQW1CLENBQUMsQ0FBQyxVQUFVLENBQUMsRUFBRSxNQUFNLEVBQUUsYUFBYSxDQUFDLENBQUM7WUFFekUsSUFBSSxVQUFVO2dCQUNaLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUNqRCx1QkFBdUIsQ0FBQyxZQUFZLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQzFHLENBQUM7UUFDTixDQUFDO1FBRUQsQ0FBQyxTQUFTLHlDQUF5QztZQUNqRCxJQUFJLEdBQUcsS0FBSyxjQUFjO2dCQUFFLE9BQU8sQ0FBQywyQ0FBMkM7WUFFL0UsTUFBTSxNQUFNLEdBQUcsdUJBQXVCLENBQ3BDLGNBQWMsRUFDZCxNQUFNLENBQUMsVUFBVSxHQUFHLHNCQUFzQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFakQsSUFBSSxDQUFDLE1BQU07Z0JBQUUsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUM7WUFFMUQsTUFBTSxjQUFjLEdBQUcsSUFBSSxNQUFNLENBQUM7Z0JBQ2hDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEdBQUcsZUFBZTtnQkFDL0MsS0FBSyxFQUFFLFFBQVEsQ0FBQztvQkFDZCxFQUFFLEVBQUUsdUJBQXVCO29CQUMzQixFQUFFLEVBQUUseUJBQXlCO2lCQUM5QixDQUFDO2dCQUNGLFFBQVEsRUFBRSxjQUFjO2dCQUN4QixTQUFTLEVBQUUsR0FBRyxDQUFDLFNBQVM7Z0JBQ3hCLFdBQVcsRUFBRSxJQUFJLGdCQUFnQixFQUFFO2dCQUNuQyxlQUFlLEVBQUUsQ0FBQyxNQUFNLENBQUMsYUFBYSxHQUFHLHNCQUFzQixDQUFDO2FBQ2pFLENBQUMsQ0FBQztZQUNILE1BQU0sZUFBZSxHQUFHLElBQUksTUFBTSxDQUFDO2dCQUNqQyxLQUFLLEVBQUUsY0FBYyxDQUFDLEtBQUssR0FBRyxlQUFlO2dCQUM3QyxLQUFLLEVBQUUsUUFBUSxDQUFDO29CQUNkLEVBQUUsRUFBRSx1QkFBdUI7b0JBQzNCLEVBQUUsRUFBRSxxQ0FBcUM7aUJBQzFDLENBQUM7Z0JBQ0YsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLFNBQVMsRUFBRSxHQUFHLENBQUMsU0FBUztnQkFDeEIsV0FBVyxFQUFFLElBQUksZ0JBQWdCLEVBQUU7Z0JBQ25DLGVBQWUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsc0JBQXNCLENBQUM7YUFDL0QsQ0FBQyxDQUFDO1lBRUgsbUJBQW1CLENBQUMsQ0FBQyxjQUFjLEVBQUUsZUFBZSxDQUFDLEVBQUUsTUFBTSxFQUFFLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN2RixDQUFDLENBQUMsRUFBRSxDQUFDO1FBRUwsQ0FBQyxTQUFTLDRCQUE0QjtZQUNwQyxJQUFJLE1BQU0sR0FBRyx1QkFBdUIsQ0FBQyxjQUFjLEVBQUUsTUFBTSxDQUFDLE1BQU0sR0FBRywyQkFBMkIsRUFBRSxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDeEgsSUFBSSxDQUFDLE1BQU07Z0JBQUUsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixDQUFDLENBQUM7WUFFM0QsSUFBSSxHQUFHLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxVQUFVLEdBQUcsNEJBQTRCLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssY0FBYyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxlQUFlLENBQUMsQ0FBQztZQUNqSyxJQUFJLENBQUMsR0FBRztnQkFBRSxPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQztZQUVyRCxzQ0FBc0MsQ0FDcEM7Z0JBQ0UsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDO2dCQUNiLFNBQVMsRUFBRSxnQkFBZ0I7Z0JBQzNCLFFBQVEsRUFBRSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBRTtnQkFDdEQsU0FBUyxFQUFFLGNBQWM7YUFDMUIsQ0FDRixDQUFBO1FBQ0gsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUVMLENBQUMsU0FBUywrQkFBK0I7WUFDdkMsOEhBQThIO1lBRzlILCtCQUErQixDQUFDO2dCQUM5QixlQUFlLEVBQUUsTUFBTSxFQUFFO2dCQUN6QixTQUFTLEVBQUUsZ0JBQWdCO2dCQUMzQixTQUFTLEVBQUUsUUFBUSxDQUFDLEVBQUUsRUFBRSxFQUFFLGNBQWMsRUFBRSxFQUFFLEVBQUUseUJBQXlCLEVBQUUsQ0FBQztnQkFDMUUsV0FBVyxFQUFFLG9CQUFvQjtnQkFDakMsTUFBTSxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQztxQkFDeEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUUsSUFBSSxLQUFLLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQyxDQUFnQjthQUM3RixDQUFDLENBQUM7WUFFSCxTQUFTLE1BQU07Z0JBQ2IsSUFBSSxRQUFRLEdBQWlCLEVBQUUsQ0FBQztnQkFDaEMsSUFBSSxLQUFLLEdBQUcsQ0FBQyxVQUFVLEVBQUUsTUFBTSxFQUFFLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFFdEQsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7b0JBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBRWpILEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FDbkIsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLGNBQWMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FDbEcsQ0FBQztnQkFDRixPQUFPLHdCQUF3QixDQUFDLFFBQVEsQ0FBaUIsQ0FBQztZQUM1RCxDQUFDO1lBQUEsQ0FBQztRQUVKLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFFTCxDQUFDLFNBQVMscUJBQXFCO1lBQzdCLG9EQUFvRDtZQUNwRCxJQUFJLFFBQVEsR0FBRyx1QkFBdUIsQ0FDcEMsY0FBYyxFQUNkLE1BQU0sQ0FBQyxVQUFVLEdBQUcsbUJBQW1CLENBQ3hDLENBQUM7WUFDRixJQUFJLFFBQVEsR0FBaUIsRUFBRSxDQUFDO1lBQ2hDLENBQUMsVUFBVSxFQUFFLE1BQU0sRUFBRSxZQUFZLENBQUMsTUFBTSxDQUFDO2lCQUN0QyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ2QsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLGNBQWMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtZQUNuRyxDQUFDLENBQUMsQ0FBQztZQUVMLCtCQUErQixDQUFDO2dCQUM5QixlQUFlLEVBQUUsd0JBQXdCLENBQUMsUUFBUSxDQUFpQjtnQkFDbkUsU0FBUyxFQUFFLEdBQUcsQ0FBQyxTQUFTO2dCQUN4QixTQUFTLEVBQUUsUUFBUSxDQUFDO29CQUNsQixFQUFFLEVBQUUsZUFBZTtvQkFDbkIsRUFBRSxFQUFFLHdCQUF3QjtpQkFDN0IsQ0FBQztnQkFDRixXQUFXLEVBQUUsaUJBQWlCO2dCQUM5QixNQUFNLEVBQUUsUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFnQjthQUNyRCxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsRUFBRSxDQUFDO1FBRUwsbUJBQW1CLENBQUMsY0FBYyxDQUFDLENBQUE7SUFHckMsQ0FBQztDQUNGLENBQUMsQ0FBQztBQUVILE1BQU0sY0FBYyxHQUFHLElBQUksTUFBTSxDQUFDO0lBQ2hDLEtBQUssRUFBRSxnQkFBZ0I7SUFDdkIsS0FBSyxFQUFFLFFBQVEsQ0FBQyxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLGFBQWEsRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLENBQUM7SUFDcEUsV0FBVyxFQUFFLElBQUksZ0JBQWdCLEVBQUU7SUFDbkMsU0FBUyxFQUFFLENBQUMsR0FBRyxnQkFBZ0IsQ0FBQztJQUNoQyxPQUFPLEVBQUUsR0FBYSxFQUFFO1FBQ3RCLDRDQUE0QztRQUM1QyxjQUFjLENBQUMsZUFBZSxHQUFHO1lBQy9CLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPO1lBQ3pCLEdBQUc7Z0JBQ0QsTUFBTSxDQUFDLFVBQVU7b0JBQ2pCLFlBQVk7Z0JBQ1osTUFBTSxDQUFDLFlBQVksR0FBRyxjQUFjO2dCQUNwQyxNQUFNLENBQUMsWUFBWSxHQUFHLGlCQUFpQjtnQkFDdkMsTUFBTSxDQUFDLE1BQU0sR0FBRyxVQUFVO2dCQUMxQixNQUFNLENBQUMsWUFBWSxHQUFHLG1CQUFtQjtnQkFDekMsTUFBTSxDQUFDLFVBQVUsR0FBRyxZQUFZO2FBQ2pDO1lBQ0QsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVM7U0FDNUIsQ0FBQztRQUVGLE9BQU8sY0FBYyxDQUFDLGVBQWUsQ0FBQztJQUN4QyxDQUFDO0lBQ0QsZ0JBQWdCLEVBQUUsS0FBSyxJQUFJLEVBQUUsQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxFQUFFLE1BQU0sQ0FBQyxXQUFXLENBQUM7Q0FDbEcsQ0FBQyxDQUFDO0FBRUgsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLE1BQU0sQ0FBQztJQUNsQyxLQUFLLEVBQUUsa0JBQWtCO0lBQ3pCLEtBQUssRUFBRSxRQUFRLENBQUMsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxlQUFlLEVBQUUsQ0FBQztJQUN2RCxXQUFXLEVBQUUsSUFBSSxnQkFBZ0IsRUFBRTtJQUNuQyxTQUFTLEVBQUUsQ0FBQyxHQUFHLGdCQUFnQixDQUFDO0lBQ2hDLE9BQU8sRUFBRSxHQUFhLEVBQUU7UUFDdEIsNENBQTRDO1FBQzVDLGdCQUFnQixDQUFDLGVBQWUsR0FBRztZQUNqQyxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUztZQUMzQixHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCO1lBQ2xDLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRO1lBQzFCLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTO1NBQzVCLENBQUM7UUFFRiw0Q0FBNEM7UUFDNUMsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FDckMsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FDdEMsTUFBTSxDQUFDLFVBQVUsR0FBRywwQkFBMEIsQ0FDL0MsRUFDRCxDQUFDLENBQ0YsQ0FBQztRQUNGLFdBQVcsRUFBRSxDQUFDO1FBRWQsT0FBTyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUM7SUFDMUMsQ0FBQztJQUNELGdCQUFnQixFQUFFLEtBQUssSUFBSSxFQUFFLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFDLGdCQUFnQixFQUFFLE1BQU0sQ0FBQyxhQUFhLENBQUM7Q0FDdEcsQ0FBQyxDQUFDO0FBRUgsTUFBTSxhQUFhLEdBQUcsSUFBSSxNQUFNLENBQUM7SUFDL0IsS0FBSyxFQUFFLGVBQWU7SUFDdEIsS0FBSyxFQUFFLFFBQVEsQ0FBQyxFQUFFLEVBQUUsRUFBRSxjQUFjLEVBQUUsRUFBRSxFQUFFLFlBQVksRUFBRSxDQUFDO0lBQ3pELFdBQVcsRUFBRSxJQUFJLGdCQUFnQixFQUFFO0lBQ25DLGVBQWUsRUFBRSxFQUFFO0lBQ25CLE9BQU8sRUFBRSxHQUFHLEVBQUU7UUFDWixLQUFLLENBQ0gsbUZBQW1GLENBQ3BGLENBQUM7UUFDRixPQUFPLENBQUMsb0NBQW9DO1FBRTVDLFdBQVcsRUFBRSxDQUFDLENBQUMsa0NBQWtDO1FBRWpELE9BQU8sYUFBYSxDQUFDLGVBQWUsQ0FBQztJQUN2QyxDQUFDO0lBQ0QsZ0JBQWdCLEVBQUUsS0FBSyxJQUFJLEVBQUUsQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDO0NBQzdFLENBQUMsQ0FBQztBQUVILE1BQU0sZUFBZSxHQUFHLElBQUksTUFBTSxDQUFDO0lBQ2pDLEtBQUssRUFBRSxpQkFBaUI7SUFDeEIsS0FBSyxFQUFFLFFBQVEsQ0FBQztRQUNkLEVBQUUsRUFBRSx1QkFBdUI7UUFDM0IsRUFBRSxFQUFFLHVCQUF1QjtRQUMzQixFQUFFLEVBQUUsZUFBZTtLQUNwQixDQUFDO0lBQ0YsU0FBUyxFQUFFLE9BQU87SUFDbEIsUUFBUSxFQUFFLENBQUMsY0FBYyxFQUFFLGdCQUFnQixFQUFFLGNBQWMsQ0FBQyxFQUFFLHFDQUFxQztDQUNwRyxDQUFDLENBQUM7QUFFSCxNQUFNLGdCQUFnQixHQUFHLElBQUksTUFBTSxDQUFDO0lBQ2xDLEtBQUssRUFBRSxpQ0FBaUM7SUFDeEMsS0FBSyxFQUFFLFFBQVEsQ0FBQztRQUNkLEVBQUUsRUFBRSxZQUFZO1FBQ2hCLEVBQUUsRUFBRSxrQkFBa0I7UUFDdEIsRUFBRSxFQUFFLGdCQUFnQjtLQUNyQixDQUFDO0lBQ0YsT0FBTyxFQUFFLEtBQUssSUFBSSxFQUFFLENBQUMsTUFBTSxhQUFhLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUM7Q0FDdkUsQ0FBQyxDQUFDO0FBRUgsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLE1BQU0sQ0FBQztJQUNsQyxLQUFLLEVBQUUsOEJBQThCO0lBQ3JDLEtBQUssRUFBRSxRQUFRLENBQUM7UUFDZCxFQUFFLEVBQUUsWUFBWTtRQUNoQixFQUFFLEVBQUUsbUJBQW1CO1FBQ3ZCLEVBQUUsRUFBRSxnQkFBZ0I7S0FDckIsQ0FBQztJQUNGLE9BQU8sRUFBRSxLQUFLLElBQUksRUFBRSxDQUFDLE1BQU0sYUFBYSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDO0NBQ3ZFLENBQUMsQ0FBQztBQUVILE1BQU0sY0FBYyxHQUFHLElBQUksTUFBTSxDQUFDO0lBQ2hDLEtBQUssRUFBRSx3QkFBd0I7SUFDL0IsS0FBSyxFQUFFLFFBQVEsQ0FBQztRQUNkLEVBQUUsRUFBRSxjQUFjO1FBQ2xCLEVBQUUsRUFBRSxrQkFBa0I7UUFDdEIsRUFBRSxFQUFFLGNBQWM7S0FDbkIsQ0FBQztJQUNGLE9BQU8sRUFBRSxLQUFLLElBQUksRUFBRSxDQUFDLE1BQU0sYUFBYSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDO0NBQ3JFLENBQUMsQ0FBQztBQUVILE1BQU0sYUFBYSxHQUFHLElBQUksTUFBTSxDQUFDO0lBQy9CLEtBQUssRUFBRSx1QkFBdUI7SUFDOUIsS0FBSyxFQUFFLFFBQVEsQ0FBQztRQUNkLEVBQUUsRUFBRSxjQUFjO1FBQ2xCLEVBQUUsRUFBRSxzQkFBc0I7UUFDMUIsRUFBRSxFQUFFLGFBQWE7S0FDbEIsQ0FBQztJQUNGLE9BQU8sRUFBRSxLQUFLLEVBQUUsZUFBdUIsTUFBTSxDQUFDLFVBQVUsRUFBRSxFQUFFO1FBQzFELElBQUksWUFBWSxHQUFHLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLFlBQVksQ0FBQyxDQUFDO1FBRWhGLElBQUksQ0FBQyxZQUFZO1lBQUUsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLCtCQUErQixDQUFDLENBQUM7UUFFdkUsWUFBWSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFFNUIsTUFBTSwrQkFBK0IsQ0FBQztZQUNwQyxPQUFPLEVBQUUsWUFBWTtZQUNyQixTQUFTLEVBQUUsWUFBWSxDQUFDLFlBQVksQ0FBQztZQUNyQyxTQUFTLEVBQUUsWUFBWTtZQUN2QixNQUFNLEVBQUUsS0FBSztZQUNiLGNBQWMsRUFBRSxJQUFJO1NBQ3JCLENBQUMsQ0FBQztRQUNILFdBQVcsRUFBRSxDQUFDLENBQUMsa0NBQWtDO0lBRW5ELENBQUM7Q0FDRixDQUFDLENBQUM7QUFFSCxNQUFNLFdBQVcsR0FBRyxJQUFJLE1BQU0sQ0FBQztJQUM3QixLQUFLLEVBQUUsYUFBYTtJQUNwQixLQUFLLEVBQUUsUUFBUSxDQUFDLEVBQUUsRUFBRSxFQUFFLGtCQUFrQixFQUFFLEVBQUUsRUFBRSwyQkFBMkIsRUFBRSxDQUFDO0lBQzVFLE9BQU8sRUFBRSxHQUFHLEVBQUU7UUFDWjs7OztrRUFJMEQ7UUFDMUQsSUFBSSxPQUFPLEdBQVcsR0FBRyxFQUFFLE9BQU8sR0FBVyxHQUFHLENBQUM7UUFFakQsSUFBSSxXQUFXLEdBQUcsSUFBSSxNQUFNLENBQUM7WUFDM0IsS0FBSyxFQUFFLGFBQWE7WUFDcEIsS0FBSyxFQUFFLFFBQVEsQ0FBQyxFQUFFLEVBQUUsRUFBRSxnQkFBZ0IsRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLENBQUM7WUFDdkQsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsRUFBRSxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFDLDhCQUE4QjtTQUNoSSxDQUFDLENBQUMsQ0FBQSwyQ0FBMkM7UUFFOUMsV0FBVyxDQUFDLFFBQVEsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRXJDLFNBQVMsa0JBQWtCLENBQUMsT0FBZTtZQUN6QyxJQUFJLENBQUMsT0FBTztnQkFBRSxPQUFPO1lBQ3JCLE9BQU8sb0JBQW9CLENBQUMsT0FBTyxDQUFDLENBQUM7WUFFckMsU0FBUyxvQkFBb0IsQ0FBQyxPQUFlO2dCQUMzQyxJQUFJLE9BQU8sS0FBSyxPQUFPLElBQUksT0FBTyxLQUFLLENBQUM7b0JBQUUsT0FBTyxTQUFTLENBQUMsQ0FBQSxpQ0FBaUM7Z0JBQzVGLElBQUksT0FBTyxLQUFLLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUM7b0JBQUUsT0FBTyxTQUFTLENBQUMsQ0FBQSwrREFBK0Q7Z0JBRWxJLElBQUksTUFBTSxHQUFHO29CQUNYLEVBQUUsRUFBRSxFQUFFLGFBQWEsRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFO29CQUNsQyxFQUFFLEVBQUUsRUFBRSxhQUFhLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRTtpQkFDbEMsQ0FBQztnQkFHRixJQUFJLEdBQUcsR0FBRyxJQUFJLE1BQU0sQ0FBQztvQkFDbkIsS0FBSyxFQUFFLGFBQWEsR0FBRyxPQUFPO29CQUM5QixLQUFLLEVBQUUsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztvQkFDNUQsU0FBUyxFQUFFLFdBQVc7b0JBQ3RCLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxHQUFHLG9CQUFvQixDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUM7aUJBQ2pFLENBQUMsQ0FBQztnQkFDSCxPQUFPLEdBQUcsQ0FBQyxDQUFBLHNHQUFzRztZQUNuSCxDQUFDO1FBRUgsQ0FBQztRQUVELFNBQVMsb0JBQW9CLENBQUMsT0FBZSxFQUFFLEdBQVc7WUFDeEQsSUFBSSxHQUFHLENBQUMsUUFBUTtnQkFBRSxPQUFPO1lBQ3pCLElBQUksV0FBbUYsQ0FBQztZQUV4RixDQUFDLFNBQVMscUJBQXFCO2dCQUM3QixJQUFJLElBQUksR0FDTjtvQkFDRSxDQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUUsVUFBVSxDQUFDO29CQUMvQixDQUFDLFFBQVEsRUFBRSxTQUFTLEVBQUUsT0FBTyxDQUFDO29CQUM5QixDQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUUsT0FBTyxDQUFDO29CQUNoQyxDQUFDLFdBQVcsRUFBRSxVQUFVLEVBQUUsVUFBVSxDQUFDO29CQUNyQyxDQUFDLFVBQVUsRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDO29CQUMvQixDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsVUFBVSxDQUFDO29CQUNoQyxDQUFDLFVBQVUsRUFBRSxPQUFPLEVBQUUsUUFBUSxDQUFDO2lCQUNoQyxDQUFDO2dCQUVKLFdBQVcsR0FBRztvQkFDWjt3QkFDRSxNQUFNLEVBQUUsSUFBSTt3QkFDWixLQUFLLEVBQUUsRUFBRSxFQUFFLEVBQUUsZUFBZSxFQUFFLEVBQUUsRUFBRSxnQkFBZ0IsRUFBRSxFQUFFLEVBQUUsWUFBWSxFQUFFO3FCQUN2RTtvQkFDRDt3QkFDRSxNQUFNLEVBQUUsSUFBSTt3QkFDWixLQUFLLEVBQUUsRUFBRSxFQUFFLEVBQUUsZ0JBQWdCLEVBQUUsRUFBRSxFQUFFLGlCQUFpQixFQUFFLEVBQUUsRUFBRSxZQUFZLEVBQUU7cUJBQ3pFO29CQUNEO3dCQUNFLE1BQU0sRUFBRSxJQUFJO3dCQUNaLEtBQUssRUFBRSxFQUFFLEVBQUUsRUFBRSxnQkFBZ0IsRUFBRSxFQUFFLEVBQUUsZUFBZSxFQUFFLEVBQUUsRUFBRSxZQUFZLEVBQUU7cUJBQ3ZFO29CQUNEO3dCQUNFLE1BQU0sRUFBRSxJQUFJO3dCQUNaLEtBQUssRUFBRSxFQUFFLEVBQUUsRUFBRSxnQkFBZ0IsRUFBRSxFQUFFLEVBQUUsZ0JBQWdCLEVBQUUsRUFBRSxFQUFFLGFBQWEsRUFBRTtxQkFDekU7b0JBQ0Q7d0JBQ0UsTUFBTSxFQUFFLEtBQUs7d0JBQ2IsS0FBSyxFQUFFLEVBQUUsRUFBRSxFQUFFLG9CQUFvQixFQUFFLEVBQUUsRUFBRSxlQUFlLEVBQUUsRUFBRSxFQUFFLGVBQWUsRUFBRTtxQkFDOUU7b0JBQ0Q7d0JBQ0UsTUFBTSxFQUFFLEtBQUs7d0JBQ2IsS0FBSyxFQUFFLEVBQUUsRUFBRSxFQUFFLG9CQUFvQixFQUFFLEVBQUUsRUFBRSxnQkFBZ0IsRUFBRSxFQUFFLEVBQUUsZUFBZSxFQUFFO3FCQUMvRTtpQkFDRixDQUFDO2dCQUVGLFdBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7b0JBQ3pCLElBQUksT0FBTyxLQUFLLE9BQU8sRUFBRSxDQUFDO3dCQUN4QixJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUMvQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUMzQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUM3QyxDQUFDO3lCQUNJLElBQUksT0FBTyxLQUFLLE9BQU8sSUFBSSxPQUFPLEtBQUssQ0FBQyxFQUFFLENBQUM7d0JBQzlDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNwRCxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsSUFBSSxtQkFBbUIsR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUM1RCxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxXQUFXLENBQUM7b0JBQy9ELENBQUM7eUJBQ0ksSUFBSSxPQUFPLEtBQUssT0FBTyxJQUFJLE9BQU8sS0FBSyxDQUFDLEVBQUUsQ0FBQzt3QkFDOUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLElBQUksc0JBQXNCLENBQUM7d0JBQ3hDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxJQUFJLGtDQUFrQyxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQzNFLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxJQUFJLG9CQUFvQixDQUFBO29CQUN2QyxDQUFDO2dCQUNILENBQUMsQ0FBQyxDQUFDO1lBRUwsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUVMLE9BQU8sV0FBVyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUEsdUNBQXVDO1lBRTNJLFNBQVMsYUFBYSxDQUFDLElBQVksRUFBRSxLQUFtQjtnQkFFdEQsSUFBSSxJQUFJLEtBQUssS0FBSyxJQUFJLE9BQU8sS0FBSyxDQUFDO29CQUFFLE9BQU8sU0FBUyxDQUFDLENBQUEsa0NBQWtDO2dCQUV4RixJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksT0FBTyxLQUFLLE9BQU8sSUFBSSxPQUFPLEtBQUssQ0FBQztvQkFBRSxPQUFPLFNBQVMsQ0FBQyxDQUFBLHlDQUF5QztnQkFFekksSUFBSSxZQUFZLEdBQWlCLGNBQWMsQ0FBQyxrQkFBa0I7cUJBQy9ELE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxHQUFHLElBQUksR0FBRyxPQUFPLEdBQUcsUUFBUSxHQUFHLGtCQUFrQixDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBRWhILElBQUksT0FBTyxHQUFHLElBQUksTUFBTSxDQUFDO29CQUN2QixLQUFLLEVBQUUsS0FBSyxHQUFHLElBQUk7b0JBQ25CLEtBQUssRUFBRSxLQUFLO29CQUNaLFNBQVMsRUFBRSxHQUFHO29CQUNkLFNBQVMsRUFBRSxnQkFBZ0I7b0JBQzNCLFdBQVcsRUFBRSxJQUFJLGdCQUFnQixFQUFFO29CQUNuQyxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLGVBQWUsR0FBRyxDQUFDLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUM7b0JBQ3pFLGdCQUFnQixFQUFFLEtBQUssSUFBSSxFQUFFLENBQUMsTUFBTSx1QkFBdUIsQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxLQUFLLENBQUM7aUJBQ2hHLENBQUMsQ0FBQztnQkFDSCxPQUFPLE9BQU8sQ0FBQztnQkFHZixLQUFLLFVBQVUsdUJBQXVCLENBQUMsR0FBVyxFQUFFLElBQVksRUFBRSxVQUF3QixFQUFFLEtBQW1CO29CQUM3RyxJQUFJLE1BQTBELENBQUM7b0JBQy9ELENBQUMsU0FBUyxvQkFBb0I7d0JBQzVCLE1BQU0sR0FBRzs0QkFDUCxVQUFVLEVBQUU7Z0NBQ1YsRUFBRSxFQUFFLFlBQVk7Z0NBQ2hCLEVBQUUsRUFBRSxvQkFBb0I7Z0NBQ3hCLEVBQUUsRUFBRSxxQkFBcUI7NkJBQzFCOzRCQUNELEtBQUssRUFBRTtnQ0FDTCxFQUFFLEVBQUUsU0FBUztnQ0FDYixFQUFFLEVBQUUsZ0JBQWdCO2dDQUNwQixFQUFFLEVBQUUsZ0JBQWdCOzZCQUNyQjs0QkFDRCxNQUFNLEVBQUU7Z0NBQ04sRUFBRSxFQUFFLFNBQVM7Z0NBQ2IsRUFBRSxFQUFFLGtCQUFrQjtnQ0FDdEIsRUFBRSxFQUFFLGlCQUFpQjs2QkFDdEI7NEJBQ0QsVUFBVSxFQUFFO2dDQUNWLEVBQUUsRUFBRSxPQUFPO2dDQUNYLEVBQUUsRUFBRSxxQkFBcUI7Z0NBQ3pCLEVBQUUsRUFBRSxxQkFBcUI7NkJBQzFCOzRCQUNELE9BQU8sRUFBRTtnQ0FDUCxFQUFFLEVBQUUsT0FBTztnQ0FDWCxFQUFFLEVBQUUsZ0JBQWdCO2dDQUNwQixFQUFFLEVBQUUsa0JBQWtCOzZCQUN2Qjt5QkFDRixDQUFDO3dCQUNGLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQzs2QkFDL0IsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFOzRCQUNmLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQ0FDakMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO2dDQUNmLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBOzRCQUN6RCxDQUFDLENBQUMsQ0FBQTt3QkFDTixDQUFDLENBQUMsQ0FBQztvQkFFUCxDQUFDLENBQUMsRUFBRSxDQUFDO29CQUVMLE1BQU0sa0JBQWtCLEVBQUUsQ0FBQztvQkFFM0IsS0FBSyxVQUFVLGtCQUFrQjt3QkFDL0IsSUFBSSxhQUFhLEdBQUcsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO3dCQUV4QyxJQUFJLFFBQVEsR0FVUjs0QkFDRixVQUFVLEVBQUUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUU7NEJBQ25ELGVBQWUsRUFBRSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRTs0QkFDeEQsU0FBUyxFQUFFLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFOzRCQUNsRCxjQUFjLEVBQUUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUU7NEJBQ3ZELFVBQVUsRUFBRSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRTs0QkFDbkQsVUFBVSxFQUFFLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFOzRCQUNuRCxPQUFPLEVBQUUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUU7NEJBQ2hELFNBQVMsRUFBRSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRTs0QkFDbEQsTUFBTSxFQUFFLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFO3lCQUNoRCxDQUFDO3dCQUVGLENBQUMsU0FBUyx1QkFBdUI7NEJBQy9CLFFBQVEsQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxHQUFHLFdBQVcsR0FBRyxPQUFPLEdBQUcsc0JBQXNCLEVBQUUsYUFBYSxDQUFDLElBQUksU0FBUyxDQUFBOzRCQUNsSSxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxLQUFLO2dDQUFFLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDOzRCQUU3RSxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsR0FBRyxhQUFhLEdBQUcsT0FBTyxHQUFHLHNCQUFzQixFQUFFLGFBQWEsQ0FBQyxJQUFJLFNBQVMsQ0FBQTs0QkFDakksSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSztnQ0FBRSxPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQzs0QkFFdEUsUUFBUSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDOzRCQUN0RCxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxZQUFZLENBQUMsYUFBYSxDQUFDLENBQUM7d0JBQ3ZELENBQUMsQ0FBQyxFQUFFLENBQUM7d0JBR0wsQ0FBQyxTQUFTLGlCQUFpQjs0QkFDekIsdUJBQXVCLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxRQUFRLEVBQUUsY0FBYyxDQUFDLENBQUM7NEJBQ3ZFLHVCQUF1QixDQUFDLFFBQVEsQ0FBQyxlQUFlLEVBQUUsUUFBUSxFQUFFLGlCQUFpQixDQUFDLENBQUM7NEJBQy9FLHVCQUF1QixDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsT0FBTyxFQUFFLGFBQWEsQ0FBQyxDQUFDOzRCQUNwRSx1QkFBdUIsQ0FBQyxRQUFRLENBQUMsY0FBYyxFQUFFLE9BQU8sRUFBRSxpQkFBaUIsQ0FBQyxDQUFDOzRCQUM3RSx1QkFBdUIsQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLFlBQVksRUFBRSxZQUFZLENBQUMsQ0FBQzs0QkFDekUsdUJBQXVCLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxZQUFZLEVBQUUsWUFBWSxDQUFDLENBQUM7NEJBQ3pFLHVCQUF1QixDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksQ0FBQyxDQUFDOzRCQUVuRSxRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxzQkFBcUMsQ0FBQyxDQUFDLHFIQUFxSDs0QkFFNU4sU0FBUyx1QkFBdUIsQ0FBQyxPQUFvQixFQUFFLElBQVksRUFBRSxNQUFjO2dDQUNqRixPQUFPLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQ0FDakMsT0FBTyxDQUFDLE1BQU0sR0FBRyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUE7NEJBRXZDLENBQUM7NEJBRUQsQ0FBQyxTQUFTLDJCQUEyQjtnQ0FDbkMsbUxBQW1MO2dDQUVuTCxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDLGVBQWUsRUFBRSxRQUFRLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxjQUFjLENBQUM7cUNBQ3pGLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFO29DQUNuQixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUs7d0NBQUUsT0FBTztvQ0FDM0IsT0FBTyxDQUFDLEtBQUssR0FBRyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7eUNBQzVCLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO3dDQUNYLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDOzRDQUM3RCxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7d0NBQ3pELElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxFQUFFLFFBQVEsQ0FBQyxjQUFjLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDOzRDQUN2RSxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLEVBQUUsQ0FBQyxLQUFLLGFBQWEsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUE7b0NBQ2xGLENBQUMsQ0FBQyxDQUFDO2dDQUNQLENBQUMsQ0FBQyxDQUFDOzRCQUNQLENBQUMsQ0FBQyxFQUFFLENBQUM7NEJBRUwsU0FBUyxVQUFVLENBQUMsSUFBWTtnQ0FDOUIsT0FBTyxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsR0FBRyxJQUFJLEdBQUcsT0FBTyxHQUFHLElBQUksRUFBRSxVQUFVLEVBQUUsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLENBQUMsSUFBSSxTQUFTLENBQUE7NEJBQzFHLENBQUM7d0JBRUgsQ0FBQyxDQUFDLEVBQUUsQ0FBQzt3QkFFTCxTQUFTLFlBQVksQ0FBQyxXQUFtQjs0QkFDdkMsT0FBTyx1QkFBdUIsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxNQUFNLEdBQUcsV0FBVyxHQUFHLHNCQUFzQixFQUFFLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTt3QkFDakksQ0FBQzt3QkFFRCxNQUFNLHlCQUF5QixFQUFFLENBQUM7d0JBRWxDLEtBQUssVUFBVSx5QkFBeUI7NEJBQ3RDLElBQUksU0FBbUIsQ0FBQzs0QkFFeEIsTUFBTSxRQUFRLEdBQUcsQ0FBQyxRQUFRLENBQUMsU0FBUztnQ0FDcEMsUUFBUSxDQUFDLFVBQVU7Z0NBQ25CLFFBQVEsQ0FBQyxjQUFjO2dDQUN2QixRQUFRLENBQUMsZUFBZTtnQ0FDeEIsUUFBUSxDQUFDLFVBQVU7Z0NBQ25CLFFBQVEsQ0FBQyxVQUFVO2dDQUNuQixRQUFRLENBQUMsT0FBTyxFQUFDLG9EQUFvRDtnQ0FDckUsUUFBUSxDQUFDLFNBQVM7Z0NBQ2xCLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQzs0QkFFakIsS0FBSyxNQUFNLE9BQU8sSUFBSSxRQUFRLEVBQUUsQ0FBQztnQ0FDL0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTTtvQ0FBRSxPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsdURBQXVELEVBQUUsT0FBTyxDQUFDLEtBQUssRUFBRSxXQUFXLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dDQUUvSixJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQztvQ0FDekQsU0FBUyxHQUFHLGdCQUFnQixDQUFDO3FDQUUxQixJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsVUFBVSxFQUFFLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDO29DQUNyRixTQUFTLEdBQUcsYUFBYSxDQUFDO3FDQUV2QixJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsRUFBRSxRQUFRLENBQUMsY0FBYyxDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQztvQ0FDNUUsU0FBUyxHQUFHLENBQUMsZUFBZSxFQUFFLGVBQWUsQ0FBQyxDQUFDO3FDQUU1QyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQztvQ0FDbEUsU0FBUyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7Z0NBRXRCLE9BQU8sQ0FBQyxLQUFLLEdBQUcsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBLGdEQUFnRDtnQ0FFbkcsT0FBTyxDQUFDLEtBQUssR0FBRyxNQUFNLDZCQUE2QixDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsU0FBUyxDQUFDLENBQUM7Z0NBQzlFLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsbUJBQW1CLEVBQUUsQ0FBQyxDQUFBLG1FQUFtRTtnQ0FFNUcsc0NBQXNDLENBQUM7b0NBQ3JDLE1BQU0sRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7b0NBQ3ZCLFNBQVMsRUFBRSxTQUFTO29DQUNwQixTQUFTLEVBQUUsT0FBTyxDQUFDLFdBQVc7b0NBQzlCLFFBQVEsRUFBRTt3Q0FDUixFQUFFLEVBQUUsT0FBTyxDQUFDLE1BQU0sRUFBRSxhQUFhLEVBQUUsYUFBYTtxQ0FDakQ7aUNBQ0YsQ0FBQyxDQUFDO2dDQUVILFNBQVMsbUJBQW1CO29DQUMxQixJQUFJLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztvQ0FDakMsSUFBSSxLQUFLLENBQUM7b0NBQ1YsSUFBSSxPQUFPLEtBQUssUUFBUSxDQUFDLFVBQVU7d0NBQ2pDLEtBQUssR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFBO3lDQUN0QixJQUFJLE9BQU8sS0FBSyxRQUFRLENBQUMsVUFBVTt3Q0FDdEMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUE7eUNBQ3RCLElBQUksT0FBTyxLQUFLLFFBQVEsQ0FBQyxPQUFPO3dDQUNuQyxLQUFLLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQTt5Q0FDbkIsSUFBSSxPQUFPLEtBQUssUUFBUSxDQUFDLGVBQWU7d0NBQzNDLEtBQUssR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFBO3lDQUNsQixJQUFJLE9BQU8sS0FBSyxRQUFRLENBQUMsY0FBYzt3Q0FDMUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUE7O3dDQUNqQixPQUFPLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7b0NBQzdCLFNBQVM7eUNBQ04sR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO29DQUN0RSxPQUFPLEdBQUcsQ0FBQTtnQ0FDWixDQUFDOzRCQUNILENBQUM7NEJBQUEsQ0FBQzt3QkFDSixDQUFDO3dCQUFBLENBQUM7d0JBRUYsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQW1CLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxLQUFLLE1BQU0sQ0FBQyxXQUFXOzRCQUM1Ryw4Q0FBOEMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUEsc0RBQXNEO29CQUVwSCxDQUFDO29CQUFBLENBQUM7b0JBR0YsQ0FBQyxTQUFTLDhCQUE4Qjt3QkFDdEMsZ0RBQWdEO3dCQUNoRCxJQUFJLE9BQU8sS0FBSyxDQUFDOzRCQUFFLE9BQU87d0JBQzFCLElBQUksT0FBTyxLQUFLLE9BQU87NEJBQUUsT0FBTyxDQUFDLDRDQUE0Qzt3QkFDN0UsSUFBSSxJQUFJLEtBQUssS0FBSzs0QkFBRSxPQUFPLENBQUMsMkJBQTJCO3dCQUV2RCxJQUFJLE1BQU0sR0FBRyxHQUFHLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQW1CLENBQUM7d0JBRTNELElBQUksQ0FBQyxNQUFNOzRCQUFFLE9BQU87d0JBRXBCLElBQUksU0FBUyxHQUFHLElBQUksTUFBTSxDQUFDOzRCQUN6QixLQUFLLEVBQUUsU0FBUyxDQUFDLEtBQUs7NEJBQ3RCLEtBQUssRUFBRSxRQUFRLENBQUMsRUFBRSxFQUFFLEVBQUUsaUJBQWlCLEVBQUUsRUFBRSxFQUFFLGtCQUFrQixFQUFFLENBQUM7NEJBQ2xFLFdBQVcsRUFBRSxJQUFJLGdCQUFnQixFQUFFOzRCQUNuQyxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFLFNBQVMsQ0FBQzs0QkFDdEUsZ0JBQWdCLEVBQUUsS0FBSyxJQUFJLEVBQUUsQ0FBQyxNQUFNLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFLFNBQVMsQ0FBQzt5QkFDckcsQ0FBQyxDQUFDO3dCQUVILElBQUksT0FBTyxHQUFHLElBQUksTUFBTSxDQUFDOzRCQUN2QixLQUFLLEVBQUUsU0FBUzs0QkFDaEIsS0FBSyxFQUFFLFFBQVEsQ0FBQyxFQUFFLEVBQUUsRUFBRSxpQkFBaUIsRUFBRSxFQUFFLEVBQUUsc0JBQXNCLEVBQUUsQ0FBQzs0QkFDdEUsV0FBVyxFQUFFLElBQUksZ0JBQWdCLEVBQUU7NEJBQ25DLE9BQU8sRUFBRSxHQUFHLEVBQUU7Z0NBQ1osSUFBSSxRQUFRLEdBQUcsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztnQ0FDeEUsT0FBTyxDQUFDLGVBQWUsR0FBRyxRQUFRLENBQUM7NEJBQ3JDLENBQUM7NEJBQ0QsZ0JBQWdCLEVBQUUsS0FBSyxJQUFJLEVBQUUsR0FBRyxDQUFDO3lCQUNsQyxDQUFDLENBQUM7d0JBRUgsR0FBRyxDQUFDLFFBQVEsR0FBRyxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQzt3QkFFcEMsbUJBQW1CLENBQUMsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFDOUYsQ0FBQyxDQUFDLEVBQUUsQ0FBQztnQkFFUCxDQUFDO1lBQ0gsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO0NBQ0YsQ0FBQyxDQUFDO0FBRUgsTUFBTSxRQUFRLEdBQUcsSUFBSSxNQUFNLENBQUM7SUFDMUIsS0FBSyxFQUFFLFVBQVU7SUFDakIsS0FBSyxFQUFFLFFBQVEsQ0FBQztRQUNkLEVBQUUsRUFBRSxlQUFlO1FBQ25CLEVBQUUsRUFBRSxVQUFVO0tBQ2YsQ0FBQztJQUNGLE9BQU8sRUFBRSxLQUFLLEVBQUUsSUFBZ0QsRUFBRSxFQUFFO1FBQ2xFLElBQUksSUFBSSxFQUFFLENBQUM7WUFDVCxNQUFNLGlCQUFpQixDQUFDO2dCQUN0QixhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWE7Z0JBQ2pDLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTthQUNwQixDQUFDLENBQUE7WUFDRixPQUFPO1FBQ1QsQ0FBQztRQUVELElBQUksWUFBWSxHQUFHLElBQUksTUFBTSxDQUFDO1lBQzVCLEtBQUssRUFBRSxjQUFjO1lBQ3JCLEtBQUssRUFBRSxRQUFRLENBQUM7Z0JBQ2QsRUFBRSxFQUFFLGNBQWM7Z0JBQ2xCLEVBQUUsRUFBRSxtQkFBbUI7Z0JBQ3ZCLEVBQUUsRUFBRSxlQUFlO2FBQ3BCLENBQUM7WUFDRixPQUFPLEVBQUUsS0FBSyxJQUFJLEVBQUUsQ0FBQyxZQUFZLENBQUMsUUFBUSxHQUFHLE1BQU0sZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFBLHNJQUFzSTtTQUNoTixDQUFDLENBQUM7UUFFSCxJQUFJLFlBQVksR0FBRyxJQUFJLE1BQU0sQ0FBQztZQUM1QixLQUFLLEVBQUUsY0FBYztZQUNyQixLQUFLLEVBQUUsUUFBUSxDQUFDO2dCQUNkLEVBQUUsRUFBRSxjQUFjO2dCQUNsQixFQUFFLEVBQUUsa0JBQWtCO2dCQUN0QixFQUFFLEVBQUUsZUFBZTthQUNwQixDQUFDO1lBQ0YsT0FBTyxFQUFFLEtBQUssSUFBSSxFQUFFLENBQUMsWUFBWSxDQUFDLFFBQVEsR0FBRyxNQUFNLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQSxzSUFBc0k7U0FDL00sQ0FBQyxDQUFDO1FBRUgsUUFBUSxDQUFDLFFBQVEsR0FBRyxDQUFDLFlBQVksRUFBRSxZQUFZLENBQUMsQ0FBQztRQUVqRCxLQUFLLFVBQVUsZUFBZSxDQUFDLEdBQVk7WUFDekMsSUFBSSxnQkFBaUMsRUFBRSxnQkFBaUMsQ0FBQztZQUV6RSxnQkFBZ0IsR0FBRyxNQUFNLGlCQUFpQixDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQzVELDJFQUEyRTtZQUUzRSxJQUFJLENBQUMsZ0JBQWdCO2dCQUFFLE9BQU87WUFFOUIsSUFBSSxpQkFBMkIsRUFBRSxnQkFBMEIsQ0FBQztZQUU1RCxpQkFBaUIsR0FBRyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDbEUsd0ZBQXdGO1lBR3hGLElBQUksR0FBRztnQkFBRSxpQkFBaUIsR0FBRyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO2lCQUN2RCxJQUFJLENBQUMsR0FBRztnQkFBRSxpQkFBaUIsR0FBRyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBRXpGLElBQUksTUFBTSxHQUFtQixpQkFBaUIsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUU7Z0JBQzFELE9BQU87b0JBQ0wsRUFBRSxFQUFFLE1BQU07b0JBQ1YsRUFBRSxFQUFFLFNBQVM7aUJBQ2QsQ0FBQTtZQUNILENBQUMsQ0FBQyxDQUFDO1lBRUgsSUFBSSxZQUFZLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDcEMsSUFBSSxHQUFXLENBQUM7Z0JBQ2hCLEdBQUcsR0FBRyxJQUFJLE1BQU0sQ0FBQztvQkFDZixLQUFLLEVBQUUsY0FBYyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO29CQUM3QyxLQUFLLEVBQUUsS0FBSztvQkFDWixPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLFFBQVEsR0FBRyxrQkFBa0IsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxLQUFLLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQSxzSUFBc0k7aUJBQ3ZQLENBQUMsQ0FBQztnQkFDSCxPQUFPLEdBQUcsQ0FBQTtZQUdaLENBQUMsQ0FBQyxDQUFDO1lBQ0gsT0FBTyxZQUFZLENBQUM7UUFFdEIsQ0FBQztRQUVELFNBQVMsa0JBQWtCLENBQUMsTUFBYztZQUV4QyxJQUFJLGdCQUF1QixFQUFFLGdCQUF1QixDQUFDO1lBRXJELGdCQUFnQixHQUFHLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUU5QyxJQUFJLGVBQWU7Z0JBQ2pCLGdCQUFnQixHQUFHLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUVoRCxJQUFJLFdBQXNCLEVBQUUsV0FBc0IsQ0FBQztZQUVuRCxXQUFXLEdBQUcsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxNQUFNLENBQUMsQ0FBQztZQUVuRSxJQUFJLGdCQUFnQjtnQkFDbEIsV0FBVyxHQUFHLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssTUFBTSxDQUFDLENBQUM7WUFHckUsT0FBTyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUM7WUFFakMsU0FBUyxZQUFZLENBQUMsSUFBZTtnQkFDbkMsSUFBSSxlQUFlLEdBQ2pCLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZO3FCQUNqQixHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUU7b0JBQ1osSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQzt3QkFBRSxPQUFPLENBQUEsb0dBQW9HO29CQUNsSSxPQUFPLElBQUksTUFBTSxDQUFDO3dCQUNoQixLQUFLLEVBQUUsWUFBWSxHQUFHLE1BQU07d0JBQzVCLEtBQUssRUFBRSxRQUFRLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDO3dCQUN4QyxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsaUJBQWlCLENBQUM7NEJBQy9CLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTs0QkFDbEIsYUFBYSxFQUFFLE1BQU07eUJBQ3RCLENBQUM7cUJBRUgsQ0FBQyxDQUFBO2dCQUVKLENBQUMsQ0FBQyxDQUFDO2dCQUVQLE9BQU8sZUFBZSxDQUFBO1lBRXhCLENBQUM7UUFFSCxDQUFDO1FBRUQsS0FBSyxVQUFVLGlCQUFpQixDQUFDLElBQStDO1lBQzlFLElBQUksQ0FBQyxJQUFJO2dCQUFFLE9BQU87WUFDbEIsSUFBSSxTQUFTLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUNsQyxJQUFJLGVBQWU7Z0JBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUV0RCxNQUFNLGVBQWUsRUFBRSxDQUFDO1lBRXhCLEtBQUssVUFBVSxlQUFlO2dCQUM1QixJQUFJLEtBQUssR0FBZTtvQkFDdEI7d0JBQ0UsUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGFBQWEsR0FBRyxVQUFVO3FCQUN6RDtpQkFDRixDQUFDO2dCQUNGLElBQUksSUFBcUIsRUFBRSxJQUFtQixDQUFDO2dCQUMvQyxNQUFNLGFBQWEsR0FBRyxNQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLEVBQUU7b0JBQ25FLElBQUksR0FBRyxNQUFNLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDO29CQUNyQyxJQUFJLEdBQUcsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUM3QyxJQUFJLENBQUMsSUFBSTt3QkFBRSxPQUFPO29CQUNsQixLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO29CQUN6RCxPQUFPLG1CQUFtQixDQUFDO3dCQUN6QixLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUMsSUFBSSxDQUFDO3dCQUNsQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07d0JBQ25CLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYTt3QkFDakMsSUFBSSxFQUFFLElBQUk7cUJBQ1gsQ0FBQyxJQUFJLEVBQUUsQ0FBQTtnQkFDVixDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUVKLElBQUksQ0FBQyxhQUFhLElBQUksYUFBYSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUU7b0JBQUUsT0FBTztnQkFDMUQsSUFBSSxPQUFPLEdBQUcsdUJBQXVCLENBQUMsYUFBYSxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUM7Z0JBQzlFLElBQUksQ0FBQyxPQUFPO29CQUFFLE9BQU87Z0JBQ3JCLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FBQztnQkFDdkIsV0FBVyxDQUFDO29CQUNWLEtBQUssRUFBRSxLQUFLO29CQUNaLFNBQVMsRUFBRSxTQUFTO29CQUNwQixTQUFTLEVBQUUsWUFBWTtvQkFDdkIsaUJBQWlCLEVBQUUsSUFBSTtvQkFDdkIsaUJBQWlCLEVBQUUsSUFBSTtpQkFDeEIsQ0FBQyxDQUFDO1lBRUwsQ0FBQztZQUFBLENBQUM7WUFFRixjQUFjLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUM7WUFFM0UsQ0FBQyxTQUFTLHFCQUFxQjtnQkFDN0IsSUFBSSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDNUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDN0IsSUFBSSxLQUFLLEdBQUcsR0FBRyxFQUFFLElBQUksR0FBRyxHQUFHLENBQUM7Z0JBRTVCLElBQUksSUFBSSxHQUFHLElBQUksTUFBTSxDQUFDO29CQUNwQixLQUFLLEVBQUUsU0FBUztvQkFDaEIsS0FBSyxFQUFFLFFBQVEsQ0FBQzt3QkFDZCxFQUFFLEVBQUUsS0FBSzt3QkFDVCxFQUFFLEVBQUUsS0FBSzt3QkFDVCxFQUFFLEVBQUUsS0FBSztxQkFDVixDQUFDO29CQUNGLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDO2lCQUNqQyxDQUFDLENBQUM7Z0JBRUgsSUFBSSxJQUFJLEdBQUcsSUFBSSxNQUFNLENBQUM7b0JBQ3BCLEtBQUssRUFBRSxTQUFTO29CQUNoQixLQUFLLEVBQUUsUUFBUSxDQUFDO3dCQUNkLEVBQUUsRUFBRSxJQUFJO3dCQUNSLEVBQUUsRUFBRSxJQUFJO3dCQUNSLEVBQUUsRUFBRSxJQUFJO3FCQUNULENBQUM7b0JBRUYsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUM7aUJBRWxDLENBQUMsQ0FBQztnQkFFSCxJQUFJLGVBQWUsS0FBSyxJQUFJLEVBQUUsQ0FBQztvQkFDN0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ3ZDLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFBO2dCQUN6QyxDQUFDO2dCQUVELENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtvQkFDekIsYUFBYSxDQUFDO3dCQUNaLEdBQUcsRUFBRSxHQUFHO3dCQUNSLGFBQWEsRUFBRSxPQUFPO3dCQUN0QixRQUFRLEVBQUUsY0FBYztxQkFDekIsQ0FBQyxDQUFBO2dCQUNKLENBQUMsQ0FBQyxDQUFDO2dCQUVILE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUM7Z0JBQ2hELDZDQUE2QztnQkFDN0MsT0FBTyxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsR0FBRywwQkFBMEIsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFFeEUsS0FBSyxVQUFVLFdBQVcsQ0FBQyxJQUFhLEVBQUUsS0FBYSxJQUFJLENBQUMsTUFBTTtvQkFDaEUsSUFBSSxLQUFLLEdBQUcsTUFBTSxpQkFBaUIsQ0FBQyxlQUFlLENBQUMsRUFDbEQsSUFBSSxHQUFHLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUNwQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztvQkFFbkMsQ0FBQyxTQUFTLFdBQVc7d0JBQ25CLElBQUksQ0FBQyxJQUFJOzRCQUFFLE9BQU87d0JBQ2xCLElBQUksWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssWUFBWSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQzs0QkFDekUscURBQXFEOzRCQUNyRCxJQUFJLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUEsc0VBQXNFOzRCQUN4SCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQzFDLE9BQU07d0JBQ1IsQ0FBQzt3QkFDRCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO29CQUU1RixDQUFDLENBQUMsRUFBRSxDQUFDO29CQUVMLENBQUMsU0FBUyxlQUFlO3dCQUN2QixJQUFJLElBQUk7NEJBQUUsT0FBTzt3QkFDakIsSUFBSSxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQzs0QkFDbkQsdURBQXVEOzRCQUN2RCxJQUFJLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQSxxRUFBcUU7NEJBQ3RJLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQzs0QkFDckUsT0FBTTt3QkFDUixDQUFDO3dCQUNELElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7b0JBRTVGLENBQUMsQ0FBQyxFQUFFLENBQUM7b0JBRUwsTUFBTSxpQkFBaUIsQ0FBQzt3QkFDdEIsTUFBTSxFQUFFLElBQUksQ0FBQyxFQUFFO3dCQUNmLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYTtxQkFDbEMsQ0FBQyxDQUFDO29CQUNILGNBQWMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQTtnQkFDeEUsQ0FBQztZQUNILENBQUMsQ0FBQyxFQUFFLENBQUM7WUFFTCxTQUFTLGNBQWMsQ0FBQyxJQUErQztnQkFDckUsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQSxxQ0FBcUM7Z0JBQ3RGLFlBQVksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFBLDRDQUE0QztZQUNqRyxDQUFDO1lBRUQsV0FBVyxFQUFFLENBQUM7WUFDZCxPQUFPLElBQUksQ0FBQTtZQUVYLFNBQVMsUUFBUSxDQUFDLElBQW1CLEVBQUUsSUFBWSxFQUFFLGFBQXFCO2dCQUN4RSxJQUFJLENBQUMsSUFBSTtvQkFBRSxPQUFPLEVBQUUsQ0FBQztnQkFDckIsT0FBTyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksR0FBRyxlQUFlLENBQUMsYUFBYSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFBO1lBQzVFLENBQUM7UUFDSCxDQUFDO1FBRUQsU0FBUyxlQUFlLENBQUMsTUFBYztZQUNyQyxPQUFPO2dCQUNMLEVBQUUsRUFBRSxRQUFRLEdBQUcsTUFBTTtnQkFDckIsRUFBRSxFQUFFLFdBQVcsR0FBRyxNQUFNO2dCQUN4QixFQUFFLEVBQUUsVUFBVSxHQUFHLE1BQU07YUFDeEIsQ0FBQTtRQUNILENBQUM7SUFDSCxDQUFDO0lBQ0QsZ0JBQWdCLEVBQUUsR0FBRyxFQUFFO1FBQ3JCLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUztZQUFFLE9BQU87UUFDcEMsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLFdBQVc7WUFBRSxPQUFPLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFDNUMsaUZBQWlGO1FBQ2pGLElBQUksUUFBUSxHQUFpQixRQUFRLENBQUM7WUFDcEMsRUFBRSxFQUFFLFdBQVc7WUFDZixFQUFFLEVBQUUscUJBQXFCO1lBQ3pCLEVBQUUsRUFBRSxjQUFjO1NBQ25CLENBQUMsQ0FBQztRQUNILElBQUksR0FBRyxHQUFHLElBQUksTUFBTSxDQUFDO1lBQ25CLEtBQUssRUFBRSxhQUFhO1lBQ3BCLEtBQUssRUFBRSxRQUFRO1lBQ2YsUUFBUSxFQUFFLGFBQWE7WUFDdkIsT0FBTyxFQUFFLEtBQUssSUFBSSxFQUFFO2dCQUNsQixNQUFNLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRSxNQUFNLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFLGFBQWEsRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ3BGLENBQUM7U0FDRixDQUFDLENBQUM7UUFFSCxDQUFDLFNBQVMsa0JBQWtCO1lBQzFCLElBQUksV0FBVyxHQUFtQixRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsMEJBQTBCO1lBRTNGLFdBQVcsQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDO1lBQzVCLFdBQVcsQ0FBQyxFQUFFLEdBQUcsY0FBYyxDQUFDO1lBQ2hDLFdBQVcsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ3ZDLHNCQUFzQixDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUNoRCxJQUFJLFFBQVEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzNDLFdBQVcsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDbEMsUUFBUSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDL0MsV0FBVyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FDekMseUJBQXlCLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUVwQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBRUwsQ0FBQyxTQUFTLGNBQWM7WUFDdEIsSUFBSSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMzQyxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1lBQy9DLFlBQVksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDN0IsYUFBYSxDQUFDO2dCQUNaLEdBQUcsRUFBRSxHQUFHO2dCQUNSLGFBQWEsRUFBRSxNQUFNO2dCQUNyQixRQUFRLEVBQUUsR0FBRyxDQUFDLFFBQVE7Z0JBQ3RCLEtBQUssRUFBRSxLQUFLO2FBQ2IsQ0FBQyxDQUFBO1lBQ0YsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNkLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDbEIsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUNQLENBQUM7Q0FDRixDQUFDLENBQUM7QUFFSDs7Ozs7O0dBTUc7QUFDSCxLQUFLLFVBQVUsd0JBQXdCLENBQ3JDLElBQWMsRUFDZCxRQUE0RCxFQUM1RCxlQUF1QjtJQUV2QixJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWE7UUFBRSxRQUFRLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztJQUNwRSxJQUFJLEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3hDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsZUFBZSxDQUFDO0lBQ3pCLEdBQUcsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUM7SUFDNUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQ2YsR0FBRyxDQUFDLFdBQVcsQ0FDYixhQUFhLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLGFBQWEsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUN4RSxDQUNGLENBQUM7SUFDRixRQUFRLENBQUMsRUFBRSxDQUFDLHFCQUFxQixDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDL0QsR0FBRyxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsR0FBRywwQkFBMEIsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDckUsQ0FBQztBQUVEOzs7Ozs7O0dBT0c7QUFDSCxLQUFLLFVBQVUsK0JBQStCLENBQUMsSUFPOUM7SUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU07UUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDaEQsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ3RDLElBQUksQ0FBQyxZQUFZLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLHFFQUFxRTtRQUN4SCxJQUFJLENBQUMsTUFBTSxDQUFDLHFCQUFxQixDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxnREFBZ0Q7SUFDcEgsQ0FBQztJQUVELENBQUMsS0FBSyxVQUFVLGVBQWU7UUFDN0IsSUFBSSxHQUFHLEdBQVcsSUFBSSxNQUFNLENBQUM7WUFDM0IsS0FBSyxFQUFFLElBQUksQ0FBQyxXQUFXO1lBQ3ZCLEtBQUssRUFBRSxJQUFJLENBQUMsU0FBUztZQUNyQixRQUFRLEVBQUUsTUFBTSxvQkFBb0IsRUFBRSxFQUFFLDRGQUE0RjtZQUNwSSxNQUFNLEVBQUUsS0FBSyxFQUFFLGtQQUFrUDtZQUNqUSxRQUFRLEVBQUUsY0FBYztZQUN4QixPQUFPLEVBQUUsR0FBRyxFQUFFO2dCQUNaLElBQUksYUFBYSxHQUFXLENBQUMsQ0FBQztnQkFDOUIsZ0dBQWdHO2dCQUNoRyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUNqRCxxS0FBcUs7Z0JBQ3JLLElBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzNDLE1BQU0sQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7Z0JBQzNDLGlDQUFpQztnQkFDakMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQztnQkFDL0Msd0lBQXdJO2dCQUN4SSxNQUFNLENBQUMsS0FBSyxDQUFDLG1CQUFtQixHQUFHLDBCQUEwQixDQUMzRCxNQUFNLEVBQ04sU0FBUyxFQUNULENBQUMsQ0FDRixDQUFDO2dCQUVGLGdZQUFnWTtnQkFDaFksb0JBQW9CLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUV6QyxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQztnQkFDakQsSUFBSSxPQUFPLEdBQVcsQ0FBQyxDQUFDO2dCQUN4Qiw0REFBNEQ7Z0JBQzVELDBCQUEwQixDQUFDLEdBQUcsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLGFBQWEsQ0FBQyxDQUFDO1lBQ2xFLENBQUM7U0FDRixDQUFDLENBQUM7UUFFSCxDQUFDLFNBQVMsbUJBQW1CO1lBQzNCLGFBQWEsQ0FBQztnQkFDWixHQUFHLEVBQUUsR0FBRztnQkFDUixhQUFhLEVBQUUsSUFBSSxDQUFDLFlBQVk7Z0JBQ2hDLFFBQVEsRUFBRSxHQUFHLENBQUMsUUFBUTtnQkFDdEIsS0FBSyxFQUFFLEtBQUs7Z0JBQ1osT0FBTyxFQUFFLEdBQUcsQ0FBQyxPQUFPO2FBQ3JCLENBQUMsQ0FBQztZQUNILElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1lBQzFELElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUNoRCxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsR0FBRyxNQUFNLENBQ2pEO1FBQ0wsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUNMLE9BQU8sR0FBRyxDQUFBO0lBQ1osQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUVMOztPQUVHO0lBQ0gsU0FBUywwQkFBMEIsQ0FDakMsU0FBaUIsRUFDakIsT0FBZSxFQUNmLE9BQXVCLEVBQ3ZCLGFBQXFCO1FBRXJCLElBQUksUUFBZ0IsQ0FBQztRQUVyQixDQUFDLFNBQVMsb0JBQW9CO1lBQzVCLElBQUksU0FBUyxDQUFDLFFBQVEsQ0FBQyxNQUFNLElBQUksYUFBYTtnQkFBRSxPQUFPLENBQUMsMklBQTJJO1lBQ25NLElBQUksSUFBSSxHQUFXLElBQUksTUFBTSxDQUFDO2dCQUM1QixLQUFLLEVBQUUsU0FBUztnQkFDaEIsS0FBSyxFQUFFLFFBQVEsQ0FBQyxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxDQUFDO2dCQUNqRCxRQUFRLEVBQUUsY0FBYzthQUN6QixDQUFDLENBQUM7WUFFSCxvSEFBb0g7WUFDcEgsSUFBSSxTQUFTLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxPQUFPLEdBQUcsYUFBYSxFQUFFLENBQUM7Z0JBQ3hELDZHQUE2RztnQkFDN0csSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLEVBQUUsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDNUMsQ0FBQztpQkFBTSxJQUFJLFNBQVMsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLE9BQU8sSUFBSSxhQUFhLEVBQUUsQ0FBQztnQkFDaEUsSUFBSSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUM7b0JBQ3BCLEVBQUUsRUFBRSxNQUFNO29CQUNWLEVBQUUsRUFBRSxRQUFRO2lCQUNiLENBQUMsQ0FBQztnQkFDSCxJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM3QyxDQUFDO1lBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPO2dCQUFFLE9BQU8sQ0FBQywrRUFBK0U7WUFDMUcsYUFBYSxDQUFDO2dCQUNaLEdBQUcsRUFBRSxJQUFJO2dCQUNULGFBQWEsRUFBRSxvQkFBb0I7Z0JBQ25DLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtnQkFDdkIsS0FBSyxFQUFFLEtBQUs7Z0JBQ1osT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO2FBQ3RCLENBQUMsQ0FBQyxDQUFDLGdhQUFnYTtZQUVwYSxTQUFTLGNBQWMsQ0FBQyxVQUFtQixJQUFJO2dCQUM3Qyw0RkFBNEY7Z0JBQzVGLE9BQU8sQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO2dCQUN2QixzSEFBc0g7Z0JBQ3RILG9CQUFvQixDQUFDLGFBQWEsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUM5RCxnRUFBZ0U7Z0JBQ2hFLElBQUksT0FBTztvQkFBRSxPQUFPLElBQUksYUFBYSxDQUFDOztvQkFDakMsT0FBTyxHQUFHLENBQUMsQ0FBQztnQkFFakIsNERBQTREO2dCQUM1RCwwQkFBMEIsQ0FBQyxTQUFTLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxhQUFhLENBQUMsQ0FBQztZQUN6RSxDQUFDO1FBQ0gsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUVMLENBQUMsU0FBUyx3QkFBd0I7WUFDaEMsS0FDRSxJQUFJLENBQUMsR0FBRyxPQUFPLEVBQ2YsQ0FBQyxHQUFHLE9BQU8sR0FBRyxhQUFhLElBQUksQ0FBQyxHQUFHLFNBQVMsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUM1RCxDQUFDLEVBQUUsRUFDSCxDQUFDO2dCQUNELCtFQUErRTtnQkFDL0UsUUFBUSxHQUFHLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pDLElBQUksQ0FBQyxlQUFlLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUU7b0JBQUUsT0FBTyxDQUFBLG1NQUFtTTtnQkFDdFAsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFO29CQUFFLE9BQU8sQ0FBQyx5T0FBeU87Z0JBQy9SLGFBQWEsQ0FBQztvQkFDWixHQUFHLEVBQUUsUUFBUTtvQkFDYixhQUFhLEVBQUUsT0FBTztvQkFDdEIsUUFBUSxFQUFFLFFBQVEsQ0FBQyxRQUFRO29CQUMzQixLQUFLLEVBQUUsS0FBSztvQkFDWixPQUFPLEVBQUUsUUFBUSxDQUFDLE9BQU87aUJBQzFCLENBQUMsQ0FBQztZQUNMLENBQUM7UUFDSCxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ1AsQ0FBQztJQUFBLENBQUM7SUFHRjs7O09BR0c7SUFDSCxLQUFLLFVBQVUsb0JBQW9CO1FBQ2pDLElBQUksSUFBYyxDQUFDO1FBQ25CLElBQUksR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFO1lBQ3hDLCtKQUErSjtZQUMvSixJQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQztnQkFBRSxPQUFPO1lBQy9CLElBQUksS0FBSyxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4QyxJQUFJLEdBQUcsR0FBRyxJQUFJLE1BQU0sQ0FBQztnQkFDbkIsS0FBSyxFQUFFLEtBQUssRUFBRSxtSkFBbUo7Z0JBQ2pLLEtBQUssRUFBRSxRQUFRLENBQUM7b0JBQ2QsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxrYUFBa2E7b0JBQ25kLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsaUNBQWlDO2lCQUNuRixDQUFDO2dCQUNGLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLDJKQUEySjtnQkFDdEwsUUFBUSxFQUFFLDBCQUEwQjtnQkFDcEMsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDO2FBQ3RDLENBQUMsQ0FBQztZQUNILE9BQU8sR0FBRyxDQUFDO1FBQ2IsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLGVBQWU7WUFDakIsSUFBSTtpQkFDRCxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsRUFBRSxJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUEsMFVBQTBVO2lCQUN2WCxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ1QsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUM7Z0JBQzVCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFBLDBHQUEwRztnQkFDNUksT0FBTyxHQUFHLENBQUE7WUFDWixDQUFDLENBQUM7aUJBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBRXBDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQSxnRUFBZ0U7UUFFekcsU0FBUyxVQUFVLENBQUMsR0FBVyxFQUFFLEtBQWE7WUFDNUMsSUFBSSxLQUFLLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLFNBQVMsQ0FBQTtZQUN6QyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ25CLElBQUksU0FBUyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDOUMsSUFBSSxDQUFDLEtBQUs7Z0JBQUUsT0FBTztZQUNuQixJQUFJLFNBQVMsR0FDWCxLQUFLLENBQUMsSUFBSSxDQUNSLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLEdBQUcsY0FBYyxDQUFDLENBRXRELENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRSxLQUFLLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUNqRCx3RUFBd0U7WUFDeEUsMkJBQTJCLEVBQUUsQ0FBQztZQUU5QixJQUFJLEtBQUssR0FDUCxLQUFLLENBQUMsSUFBSSxDQUNSLFlBQVksQ0FBQyxRQUE0QyxDQUMxRDtpQkFDRSxJQUFJLENBQ0gsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUNOLEdBQUcsQ0FBQyxPQUFPLENBQUMsY0FBYztnQkFDMUIsR0FBRyxDQUFDLE9BQU8sQ0FBQyxjQUFjLEtBQUssU0FBUyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQ3pELENBQUE7WUFFTCxJQUFJLEtBQUs7Z0JBQUUsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBRTFCLHFGQUFxRjtZQUNyRixJQUFJLGVBQWUsR0FBRyxXQUFXLENBQUM7Z0JBQ2hDLEtBQUssRUFBRSxLQUFLO2dCQUNaLFNBQVMsRUFBRSxHQUFHLENBQUMsU0FBUztnQkFDeEIsU0FBUyxFQUFFLFNBQVM7Z0JBQ3BCLGlCQUFpQixFQUFFLEtBQUs7Z0JBQ3hCLGlCQUFpQixFQUFFLEtBQUs7YUFDekIsQ0FBQyxJQUFJLFNBQVMsQ0FBQztZQUVoQixJQUFJLENBQUMsZUFBZTtnQkFBRSxPQUFPO1lBRTdCLFNBQVMsQ0FBQyxPQUFPLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztZQUN6QyxTQUFTLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7WUFDaEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxxQkFBcUIsQ0FBQyxVQUFVLEVBQUUsU0FBUyxDQUFDLENBQUM7WUFHL0QscURBQXFEO1lBQ3JELE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUV4Qix5QkFBeUI7WUFDekIsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3JDLENBQUM7UUFBQSxDQUFDO0lBQ0osQ0FBQztBQUVILENBQUM7QUFJRDs7R0FFRztBQUNILFNBQVMsbUJBQW1CLENBQUMsU0FBeUM7SUFDcEUsSUFBSSxNQUFNLEdBQUcsdUJBQXVCLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxNQUFNLEdBQUcsZ0JBQWdCLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3hHLElBQUksQ0FBQyxNQUFNO1FBQUUsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLDRDQUE0QyxDQUFDLENBQUM7SUFDOUUsSUFBSSxHQUFlLENBQUM7SUFFcEIsQ0FBQyxTQUFTLGNBQWM7UUFDdEIsSUFBSSxLQUFLLEdBQUcsTUFBTSxDQUFDLFlBQVksR0FBRyw0QkFBNEIsQ0FBQztRQUMvRCxJQUFJLE1BQU0sS0FBSyxPQUFPLENBQUMsUUFBUTtZQUM3QixLQUFLLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssY0FBYyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7WUFFOUUsS0FBSyxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRTVFLEdBQUcsR0FBRyxTQUFTLENBQUMsS0FBSyxFQUFFLFdBQVcsQ0FBQyxJQUFJLFNBQVMsQ0FBQztRQUNqRCxJQUFJLENBQUMsR0FBRztZQUFFLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO1FBRTlELElBQUksTUFBTSxLQUFLLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUNqQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUM7Z0JBQUUsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBLDBEQUEwRDtpQkFDL0csQ0FBQztnQkFDSixHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBLHdGQUF3RjtnQkFDcEgsdUJBQXVCLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxZQUFZLEdBQUcsZ0JBQWdCLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUEsa0RBQWtEO1lBQzlKLENBQUM7UUFFSCxDQUFDO1FBRUQsc0NBQXNDLENBQUM7WUFDckMsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDO1lBQ2IsU0FBUyxFQUFFLGdCQUFnQjtZQUMzQixRQUFRLEVBQUU7Z0JBQ1IsRUFBRSxFQUFFLE1BQU07Z0JBQ1YsYUFBYSxFQUFFLGFBQWE7YUFDN0I7WUFDRCxTQUFTLEVBQUUsU0FBUztTQUNyQixDQUFDLENBQUE7SUFDSixDQUFDLENBQUMsRUFBRSxDQUFDO0lBRUwsQ0FBQyxTQUFTLHVCQUF1QjtRQUMvQixNQUFNLE1BQU0sR0FBRyxJQUFJLE1BQU0sQ0FBQztZQUN4QixLQUFLLEVBQUUsZ0JBQWdCO1lBQ3ZCLEtBQUssRUFBRSxRQUFRLENBQUM7Z0JBQ2QsRUFBRSxFQUFFLGdDQUFnQztnQkFDcEMsRUFBRSxFQUFFLHFDQUFxQzthQUMxQyxDQUFDO1lBQ0YsUUFBUSxFQUFFLGNBQWM7WUFDeEIsU0FBUyxFQUFFLGdCQUFnQjtZQUMzQixXQUFXLEVBQUUsSUFBSSxnQkFBZ0IsRUFBRTtZQUNuQyxlQUFlLEVBQUUsQ0FBQyxNQUFNLENBQUMsWUFBWSxHQUFHLHNCQUFzQixDQUFDO1NBQ2hFLENBQUMsQ0FBQztRQUVILE1BQU0sT0FBTyxHQUFHLG1CQUFtQixDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsTUFBTSxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBQ3ZFLENBQUMsQ0FBQyxFQUFFLENBQUM7QUFHUCxDQUFDO0FBQ0Q7Ozs7O0dBS0c7QUFDSCxTQUFTLGtCQUFrQixDQUN6QixZQUE0QixFQUM1QixHQUFZLEVBQ1osUUFBZ0IsS0FBSztJQUVyQixZQUFZLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7SUFDdEMsR0FBRyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUN6RSxZQUFZLENBQUMsS0FBSyxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUM7QUFDNUMsQ0FBQztBQUFBLENBQUM7QUFFRjs7Ozs7OztHQU9HO0FBQ0gsS0FBSyxVQUFVLGdDQUFnQyxDQUM3QyxhQUFxQixFQUNyQixRQUE0RCxFQUM1RCxZQUE0QyxZQUFZLEVBQ3hELGlCQUEwQixLQUFLLEVBQy9CLFdBQW9CO0lBRXBCLFlBQVk7SUFDWixJQUFJLENBQUMsYUFBYTtRQUFFLE9BQU87SUFDM0IsSUFBSSxTQUFTLEtBQUssWUFBWSxJQUFJLGNBQWM7UUFDOUMsU0FBUyxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDM0IsSUFBSSxTQUFTLENBQUMsUUFBUSxDQUFDLE1BQU0sS0FBSyxDQUFDO1FBQ2pDLFNBQVMsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ3ZELElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRTtRQUFFLFFBQVEsQ0FBQyxFQUFFLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQWdCLENBQUM7SUFDckUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhO1FBQUUsUUFBUSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7SUFDcEUsSUFBSSxDQUFDLFdBQVc7UUFBRSxXQUFXLEdBQUcsa0JBQWtCLENBQUM7SUFFbkQsSUFBSSxZQUFZLEdBQUcsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFFcEYsSUFBSSxPQUFPLEdBQUcsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMseUJBQXlCLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRWxILElBQUksQ0FBQyxPQUFPO1FBQ1YsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUNoQiwyREFBMkQsQ0FDNUQsQ0FBQztJQUVKLElBQUksU0FBUyxHQUFHLFlBQVksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUU1QyxJQUFJLE1BQU0sR0FBaUIsSUFBSSxLQUFLLEVBQUUsRUFBRSxHQUFHLEdBQWUsRUFBRSxDQUFDO0lBRTdELE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7UUFDcEIsSUFBSSxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7WUFDcEcsZ0RBQWdEO1lBQ2hELE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDbEMsR0FBRyxHQUFHLEVBQUUsQ0FBQztZQUNULEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDZCxPQUFNO1FBQ1IsQ0FBQztRQUNELEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDZCxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDO1lBQzdDLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUE7SUFDckMsQ0FBQyxDQUFDLENBQUM7SUFFSCxJQUFJLGFBQWEsR0FBRyxNQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLEVBQUUsQ0FBQyxNQUFNLDZCQUE2QixDQUFDLEtBQUssRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFeEgsTUFBTSxHQUFHLElBQUksQ0FBQztJQUNkLEdBQUcsR0FBRyxJQUFJLENBQUM7SUFFWCxPQUFPLHNDQUFzQyxDQUFDO1FBQzVDLE1BQU0sRUFBRSxhQUFhO1FBQ3JCLFNBQVMsRUFBRSxTQUFTO1FBQ3BCLFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFNBQVMsRUFBRSxZQUFZO0tBQ3hCLENBQUMsQ0FBQztBQUVMLENBQUM7QUFDRDs7Ozs7O0dBTUc7QUFDSCxLQUFLLFVBQVUsNkJBQTZCLENBQUMsT0FBbUIsRUFBRSxLQUFlO0lBQy9FLElBQUksQ0FBQyxPQUFPO1FBQUUsT0FBTztJQUNyQixLQUFLLEdBQUcsS0FBSyxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BDLElBQUksa0JBQWtCLEdBQUcsT0FBTztTQUM3QixNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLFVBQVUsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUEsd0xBQXdMO0lBRTdQLElBQUksa0JBQWtCLENBQUMsTUFBTSxHQUFHLENBQUM7UUFBRSxPQUFPLE9BQU8sQ0FBQyxDQUFBLGlEQUFpRDtJQUVuRyxJQUFJLFFBQWtCLENBQUM7SUFDdkIsSUFBSSxLQUFLLEdBQWdDLElBQUksR0FBRyxFQUFFLENBQUMsQ0FBQSwwSkFBMEo7SUFFN00sTUFBTSxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBQ3JCLEtBQUssTUFBTSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFDMUIscUZBQXFGO1FBQ3JGLElBQUksa0JBQWtCLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQztZQUNsQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0saUJBQWlCLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxNQUFNLHVCQUF1QixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUE7YUFDaEYsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUM7WUFDakMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBLHdKQUF3SjthQUN6SyxJQUFJLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQywyUUFBMlE7ZUFDMVQsQ0FDRCxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQSx3REFBd0Q7O29CQUV0SCxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxFQUFDLG1KQUFtSjtZQUN2TixTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0saUJBQWlCLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7O1lBQ2hELFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUdELE9BQU8sU0FBUyxDQUFBO0lBRWhCLEtBQUssVUFBVSx1QkFBdUIsQ0FBQyxHQUFhO1FBQ2xELElBQUksQ0FBQyxHQUFHO1lBQUUsT0FBTyxFQUFFLENBQUM7UUFDcEIsSUFBSSxHQUFXLEVBQUUsS0FBYSxDQUFDO1FBRS9CLE1BQU0sU0FBUyxHQUFhLEVBQUUsQ0FBQztRQUUvQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ3BDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDO2dCQUMxQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN2QixTQUFRO1lBQ1YsQ0FBQztZQUFBLENBQUM7WUFDRixHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztpQkFDVCxVQUFVLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFBLGlFQUFpRTtpQkFDcEYsVUFBVSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDckMsUUFBUSxHQUFHLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUMzQixHQUFHLENBQUMsTUFBTSxLQUFLLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3RGLElBQUksQ0FBQyxLQUFLO2dCQUFFLEtBQUssR0FBRyxTQUFTLENBQUM7WUFDOUIsSUFBSSxHQUFHLENBQUMsTUFBTSxLQUFLLENBQUM7Z0JBQ2xCLE1BQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBQyxJQUFJLEVBQUMsRUFBRTtnQkFDdkMsMkdBQTJHO2dCQUMzRyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sY0FBYyxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBLHVEQUF1RDtpQkFDaEgsSUFBSSxHQUFHLENBQUMsTUFBTSxLQUFLLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQztnQkFDdEMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQSx5R0FBeUc7O2dCQUN0SyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsK0RBQStEO1FBRW5JLENBQUM7UUFFRCxJQUFJLEdBQUcsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUM7WUFDNUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUEsK0RBQStEOztZQUMvRSxPQUFPLHVCQUF1QixDQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUUsR0FBRyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUVoRyxDQUFDO0lBRUQsS0FBSyxVQUFVLGNBQWMsQ0FBQyxJQUFZLEVBQUUsR0FBVztRQUNyRCxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFDbEIsSUFBSSxDQUFDLENBQUMsZUFBZSxFQUFFLGVBQWUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFBRSxPQUFPLEVBQUUsQ0FBQztRQUVsRSxJQUFJLEtBQWUsRUFBRSxJQUFjLEVBQUUsTUFBMEIsQ0FBQztRQUVoRSxJQUFJLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUV0QixJQUFJLElBQUksR0FDTixNQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUMsR0FBRyxFQUFDLEVBQUU7WUFDckMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUEsQ0FBQSxrR0FBa0c7WUFDeEgsSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUM7Z0JBQzdDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUEsb0JBQW9CO1lBRTNELElBQUksS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDO2dCQUFFLE9BQU8sRUFBRSxDQUFDLENBQUEsdUVBQXVFO1lBRXZHLE1BQU0sR0FBRyxNQUFNLE9BQU8sQ0FBQyxHQUFHLENBQ3hCLEtBQUssQ0FBQyxDQUFDLENBQUM7aUJBQ0wsS0FBSyxDQUFDLEdBQUcsQ0FBQztpQkFDVixHQUFHLENBQUMsS0FBSyxFQUFDLFdBQVcsRUFBQyxFQUFFLENBQUMsTUFBTSxrQkFBa0IsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxXQUFXLENBQUMsSUFBSSxrQ0FBa0MsQ0FBQyxDQUFDLENBQUM7WUFFdEksSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssS0FBSztnQkFDcEIsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsMENBQTBDO1lBQ3JFLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUUzQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRU4sT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRXpCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsS0FBSyxVQUFVLGlCQUFpQixDQUFDLEdBQWEsRUFBRSxPQUFnQixLQUFLO1FBQ25FLElBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsSUFBSSxHQUFHLEdBQUcsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRTdCLE9BQU8sQ0FBQyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7WUFDcEIsS0FBSyxJQUFJLENBQUMsQ0FBQTtZQUNWLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO2dCQUFFLE1BQU07WUFDM0IsR0FBRyxHQUFHLGFBQWEsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUN0QyxDQUFDO1FBRUQsSUFBSSxDQUFDLEdBQUc7WUFDTixPQUFPLEdBQUcsQ0FBQztRQUViLElBQUksUUFBUSxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxVQUFVLEVBQUUsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUVwRSxHQUFHO1lBQ0QsR0FBRyxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDO2lCQUNwQixPQUFPLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUM7aUJBQzlCLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVyQixJQUFJLE1BQU0sR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRS9CLElBQUksSUFBZSxFQUFFLEtBQVksQ0FBQztRQUVsQyxNQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUMsSUFBSSxFQUFDLEVBQUU7WUFDdkMsa0hBQWtIO1lBQ2xILElBQUksQ0FBQyxDQUFDLGVBQWUsRUFBRSxlQUFlLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO2dCQUFFLE9BQU87WUFDL0QsS0FBSyxHQUFHLE1BQU0sZUFBZSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztZQUMzQyxJQUFJLEdBQUcsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssTUFBTSxDQUFDLENBQUM7WUFDbEQsSUFBSSxDQUFDLElBQUk7Z0JBQUUsT0FBTztZQUVsQixHQUFHLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQ3JCLElBQUksQ0FBQyxDQUFDLENBQUM7aUJBQ0osSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQ2QsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDN0QsRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsTUFBTSxLQUFLLENBQUMsQ0FBQztpQkFDckMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7WUFFeEIsUUFBUSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUMvQixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSztzQkFDWCxJQUFJO3NCQUNKLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO3NCQUN6QixHQUFHLENBQUM7WUFFUixRQUFRLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQy9CLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLO3NCQUNYLElBQUk7c0JBQ0osZ0JBQWdCLENBQUMsSUFBSSxDQUFDO3NCQUN0QixHQUFHLENBQUM7WUFFUixTQUFTLFFBQVEsQ0FBQyxHQUFXO2dCQUMzQixPQUFPLEdBQUc7cUJBQ1AsVUFBVSxDQUFDLE1BQU0sR0FBRyxHQUFHLEVBQUUsRUFBRSxDQUFDO3FCQUM1QixLQUFLLENBQUMsR0FBRyxDQUFDO3FCQUNWLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUE7WUFDekMsQ0FBQztZQUVELFNBQVMsZ0JBQWdCLENBQUMsSUFBSTtnQkFDNUIsbUNBQW1DO2dCQUNuQyxJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUMzQixJQUFJLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3RELElBQUksTUFBTSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxnQkFBZ0I7Z0JBQ3JGLElBQUksS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksTUFBTSxLQUFLLEtBQUssRUFBRSxDQUFDO29CQUN6QyxNQUFNLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVc7Z0JBRTVDLENBQUM7cUJBQ0ksSUFBSSxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDO29CQUMxQixNQUFNLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVc7b0JBQzFDLE1BQU0sSUFBSSxFQUFFLENBQUEsQ0FBQyxpQkFBaUI7b0JBQzlCLE1BQU0sSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFBLENBQUMsd0JBQXdCO29CQUMvRSxNQUFNLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQSxDQUFDLHVCQUF1QjtnQkFDdkYsQ0FBQztnQkFFRCxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQztvQkFDM0IsSUFBSSxhQUFxQixDQUFDO29CQUMxQixJQUFJLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQzt3QkFDbEIsYUFBYSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBLE9BQU87O3dCQUNsRSxhQUFhLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUEsUUFBUTtvQkFFM0UsTUFBTSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUMzQixJQUFJLENBQUMsQ0FBQyxDQUFDO3lCQUNKLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUNkLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssYUFBYSxDQUFDLENBQUEscUJBQXFCO3dCQUNsRSxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUEsc0NBQXNDO3lCQUMzRSxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFBLGlDQUFpQztnQkFDM0QsQ0FBQztnQkFFRCxPQUFPLE1BQU0sQ0FBQSxDQUFDLHFCQUFxQjtZQUVyQyxDQUFDO1FBQ0gsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVKLE9BQU8sUUFBUSxDQUFDO1FBRWhCLFNBQVMsYUFBYSxDQUFDLENBQVc7WUFDaEMsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztRQUMxRCxDQUFDO0lBRUgsQ0FBQztJQUVEOzs7Ozs7O09BT0c7SUFDSCxLQUFLLFVBQVUsa0JBQWtCLENBQUMsSUFBWSxFQUFFLE1BQWMsRUFBRSxhQUFxQixFQUFFLE1BQWM7UUFFbkcsSUFBSSxNQUFNLEtBQUssS0FBSyxJQUFJLE1BQU0sQ0FBQyxhQUFhLENBQUM7WUFBRSxhQUFhLEdBQUcsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQSw0SUFBNEk7UUFFbFAsSUFBSSxNQUFNLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssTUFBTSxHQUFHLEdBQUcsR0FBRyxhQUFhLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxDQUFDO1FBRXJHLElBQUksSUFBSSxLQUFLLElBQUk7WUFBRSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQy9CLElBQUksTUFBTTtZQUNSLE9BQU8sY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFFdEQsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ1YsT0FBTyxJQUFJLEtBQUssQ0FBQyw0REFBNEQsQ0FBQyxDQUFDO1FBQ2pGLENBQUM7UUFBQSxDQUFDO1FBR0YsSUFBSSxDQUFDLENBQUMsZUFBZSxFQUFFLGVBQWUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFBLG1QQUFtUDtRQUNyVCxJQUFJLENBQUMsYUFBYSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7WUFFOUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxhQUFhLEVBQUUsV0FBVyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQ3BFLE9BQU8sSUFBSSxLQUFLLENBQUMsMEJBQTBCLENBQUMsQ0FBQztRQUMvQyxDQUFDO1FBQUEsQ0FBQztRQUNGLElBQUksQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQztZQUNqQyxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxNQUFNLENBQUMsQ0FBQztZQUNqQyxPQUFPLElBQUksS0FBSyxDQUFDLDBCQUEwQixDQUFDLENBQUM7UUFDL0MsQ0FBQztRQUFBLENBQUMsQ0FBQSxnQ0FBZ0M7UUFDbEMsSUFBSSxLQUFLLEdBQVUsTUFBTSxlQUFlLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxLQUFLO1lBQ1IsT0FBTyxJQUFJLEtBQUssQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1FBRy9DLElBQUksYUFBYSxHQUFpQixlQUFlLENBQUMsYUFBYSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFFM0YsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEVBQUUsYUFBYSxDQUFDLENBQUM7WUFDL0MsT0FBTyxJQUFJLEtBQUssQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1FBQy9DLENBQUM7UUFBQSxDQUFDO1FBRUYsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sR0FBRyxHQUFHLEdBQUcsYUFBYSxHQUFHLEdBQUcsR0FBRyxJQUFJLEVBQUUsYUFBYSxDQUFDLENBQUMsQ0FBQTtRQUVyRSxPQUFPLGNBQWMsQ0FBQyxhQUFhLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBRXhELFNBQVMsY0FBYyxDQUFDLE9BQXFCLEVBQUUsS0FBZTtZQUM1RCxJQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFLENBQUM7Z0JBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxDQUFDO2dCQUNqQyxPQUFPLElBQUksS0FBSyxDQUFDLDBCQUEwQixDQUFDLENBQUM7WUFDL0MsQ0FBQztZQUFBLENBQUM7WUFFRixPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDO2dCQUFFLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLDBJQUEwSTtZQUV4TSxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsS0FBSyxLQUFLO2dCQUNsQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDNUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hDLE9BQU8sSUFBSSxLQUFLLENBQUMsc0NBQXNDLENBQUMsQ0FBQztZQUFBLENBQUM7WUFFNUQsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbEUsSUFBSSxDQUFDLEtBQUs7Z0JBQUUsT0FBTyxJQUFJLEtBQUssQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO1lBQzNELElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pFLElBQUksQ0FBQyxJQUFJO2dCQUFFLE9BQU8sSUFBSSxLQUFLLENBQUMsMkJBQTJCLENBQUMsQ0FBQztZQUN6RCxPQUFPLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztpQkFDcEUsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUNqQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDZCxDQUFDO0lBRUgsQ0FBQztBQUNILENBQUM7QUFHRDs7Ozs7Ozs7O0dBU0c7QUFDSCxTQUFTLHVCQUF1QixDQUFDLFNBQW1CLEVBQUUsS0FBZSxFQUFFLEdBQVcsRUFBRSxLQUFhO0lBQy9GLElBQUksR0FBRyxHQUFHLENBQUM7UUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDO0lBRXJCLElBQUksR0FBRyxHQUFHLENBQUMsRUFBRSxDQUFDO1FBQ1osS0FBSyxDQUFDLHFJQUFxSSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLEdBQUcsV0FBVyxHQUFHLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQ3hNLE9BQU87SUFDVCxDQUFDO0lBRUQsSUFBSSxVQUFVLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLEdBQUcsR0FBRyxDQUFDLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlFLElBQUksQ0FBQyxVQUFVO1FBQUUsT0FBTztJQUV4QixJQUFJLEdBQUcsR0FBRyxNQUFNLENBQUMsY0FBYyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBRXRDLElBQUksTUFBTSxHQUFHLFVBQVU7U0FDcEIsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQzFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFN0IsTUFBTSxHQUFHLE1BQU07U0FDWixHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUEsdUZBQXVGO1NBQ3hJLE1BQU0sQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBLHlDQUF5QztJQUdwRyxLQUFLO1NBQ0YsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO1FBQ2QsSUFBSSxJQUFJLEtBQUssZUFBZTtZQUFFLE9BQU8sQ0FBQSxvTEFBb0w7UUFDek4sSUFBSSxJQUFJLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFBLHlEQUF5RDtRQUMvSCxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFDbEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQUUsT0FBTyxDQUFBLDhEQUE4RDtRQUUxRixTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUM7WUFDbEMsTUFBTTtpQkFDSCxHQUFHLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FDakIsdUJBQXVCLENBQUMsV0FBVyxDQUFDLENBQUM7aUJBQ3RDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVoQixTQUFTLHVCQUF1QixDQUFDLFdBQXFCO1lBQ3BELHVMQUF1TDtZQUN2TCxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztnQkFBRSxPQUFPLEVBQUUsQ0FBQztZQUNsRCxJQUFJLE9BQU8sR0FBVyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQSx1RkFBdUY7WUFFNUgsSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQztnQkFDakQsT0FBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUEsNkxBQTZMOztnQkFDL08sT0FBTyxHQUFHLEVBQUUsQ0FBQztZQUVsQixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDbkUsSUFBSSxDQUFDLEtBQUs7Z0JBQUUsT0FBTyxFQUFFLENBQUM7WUFDdEIsSUFBSSxPQUFPLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQztnQkFDNUIsT0FBTyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQzs7Z0JBQ2xDLE9BQU8sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZCLENBQUM7SUFFSCxDQUFDLENBQUMsQ0FBQztJQUVMLE9BQU8sdUJBQXVCLEVBQUUsQ0FBQztJQUVqQyxTQUFTLHVCQUF1QjtRQUM5QixJQUFJLEtBQUssR0FBZSxFQUFFLEVBQUUsTUFBZ0IsQ0FBQztRQUM3QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQzFDLE1BQU0sR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2xDLEtBQUssSUFBSSxFQUFFLEdBQUcsQ0FBQyxFQUFFLEVBQUUsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7Z0JBQzFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztvQkFDZixLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUN2QyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsS0FBSyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsNk9BQTZPO2dCQUMzVSxDQUFDO2dCQUNELEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUN0QyxDQUFDO1FBQ0gsQ0FBQztRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztBQUNILENBQUM7QUFHRDs7R0FFRztBQUNILEtBQUssVUFBVSxXQUFXO0lBQ3hCLDhFQUE4RTtJQUM5RSxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUM5QixDQUFDO0FBRUQ7Ozs7Ozs7R0FPRztBQUNILEtBQUssVUFBVSwrQkFBK0IsQ0FBQyxJQU85QztJQUNDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTztRQUNmLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FDaEIsMERBQTBELENBQzNELENBQUM7SUFDSixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVM7UUFBRSxJQUFJLENBQUMsU0FBUyxHQUFHLFlBQVksQ0FBQztJQUNuRCxJQUFJLElBQUksQ0FBQyxTQUFTLEtBQUssWUFBWSxJQUFJLElBQUksQ0FBQyxjQUFjO1FBQ3hELElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUNoQyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLE1BQU0sS0FBSyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUM1RCxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVM7UUFDakIsSUFBSSxDQUFDLFNBQVMsR0FBRyxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBRTlDLENBQUMsU0FBUyx3QkFBd0I7UUFDaEMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNO1lBQUUsT0FBTztRQUN6QixnRUFBZ0U7UUFFaEUsTUFBTSxNQUFNLEdBQUcsSUFBSSxNQUFNLENBQUM7WUFDeEIsS0FBSyxFQUFFLFdBQVc7WUFDbEIsS0FBSyxFQUFFLFFBQVEsQ0FBQztnQkFDZCxFQUFFLEVBQUUsZ0NBQWdDO2dCQUNwQyxFQUFFLEVBQUUscUNBQXFDO2FBQzFDLENBQUM7WUFDRixRQUFRLEVBQUUsY0FBYztZQUN4QixTQUFTLEVBQUUsZ0JBQWdCO1lBQzNCLFdBQVcsRUFBRSxJQUFJLGdCQUFnQixFQUFFO1lBQ25DLGVBQWUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEdBQUcsYUFBYSxDQUFDO1NBQ3ZELENBQUMsQ0FBQztRQUVILE1BQU0sT0FBTyxHQUFHLG1CQUFtQixDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsU0FBUyxDQUFDLFFBQVEsQ0FBQyxFQUFFLHNCQUFxQyxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBRTNILENBQUMsQ0FBQyxFQUFFLENBQUM7SUFFTCxNQUFNLDRCQUE0QixFQUFFLENBQUM7SUFFckMsQ0FBQyxTQUFTLDZCQUE2QjtRQUNyQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTTtZQUFFLE9BQU8sQ0FBQyxvS0FBb0s7UUFFN00sY0FBYyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsUUFBUSxDQUFDLEVBQUUsa0JBQWlDLEVBQUUsYUFBYSxDQUFDLENBQUMsQ0FBQSwyQkFBMkI7UUFFcEgsY0FBYyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsZUFBZSxDQUFDLEVBQUUsYUFBYSxDQUFDLENBQUMsQ0FBQSxpQ0FBaUM7UUFFOUYsU0FBUyxjQUFjLENBQUMsS0FBYSxFQUFFLEVBQWUsRUFBRSxRQUF3QjtZQUM5RSxJQUFJLGVBQWUsR0FBYSx3QkFBd0IsQ0FDdEQsSUFBSSxDQUFDLE9BQU8sRUFDWixJQUFJLENBQUMsTUFBTSxDQUNaLENBQUMsQ0FBQyw2RkFBNkY7WUFDaEcseUpBQXlKO1lBQ3pKLElBQUksUUFBUSxHQUFlLG1CQUFtQixDQUFDLElBQUksQ0FDakQsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQzlELENBQUMsQ0FBQyw2UkFBNlI7WUFFaFMsSUFBSSxDQUFDLFFBQVEsSUFBSSxRQUFRLENBQUMsTUFBTSxLQUFLLENBQUM7Z0JBQUUsT0FBTztZQUUvQyxzQ0FBc0MsQ0FBQztnQkFDckMsTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDO2dCQUNsQixTQUFTLEVBQUUsZ0JBQWdCO2dCQUMzQixRQUFRLEVBQUU7b0JBQ1IsRUFBRSxFQUFFLEVBQUU7b0JBQ04sYUFBYSxFQUFFLFFBQVE7aUJBQ3hCO2dCQUNELFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUzthQUMxQixDQUFDLENBQUM7UUFDTCxDQUFDO0lBQ0gsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUVMOztLQUVDO0lBQ0QsS0FBSyxVQUFVLDRCQUE0QjtRQUN6QyxJQUFJLE1BQU0sR0FBaUIsSUFBSSxDQUFDLE1BQU0sSUFBSSxnQkFBZ0IsRUFBRSxDQUFDO1FBRTdELElBQUksQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDO1lBQUUsT0FBTyxJQUFJLEtBQUssQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLENBQUMsa0ZBQWtGO1FBRWxLLE1BQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNO2FBQ3JCLEdBQUcsQ0FBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLEVBQUU7WUFDakIsNkVBQTZFO1lBQzdFLHNLQUFzSztZQUN0SyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUUsUUFBUSxDQUFDLFVBQVUsQ0FBQztnQkFBRSxPQUFPO1lBQy9ELHNDQUFzQyxDQUFDO2dCQUNyQyxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQyxLQUFLLENBQUM7Z0JBQ3RDLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztnQkFDekIsUUFBUSxFQUFFO29CQUNSLGFBQWEsRUFBRSxhQUFhO29CQUM1QixFQUFFLEVBQUUsU0FBUyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDbkU7Z0JBQ0QsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO2FBQzFCLENBQUMsQ0FBQztZQUVILEtBQUssVUFBVSxpQkFBaUIsQ0FBQyxHQUFlO2dCQUM5Qyw4TEFBOEw7Z0JBQzlMLHVGQUF1RjtnQkFDdkYsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNO29CQUFFLE9BQU8sQ0FBQyxNQUFNLDZCQUE2QixDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztxQkFDL0UsSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsUUFBUSxDQUFDLFdBQVcsQ0FBQztvQkFDeEMsT0FBTyxDQUFDLENBQUMsR0FBRyxNQUFNLDZCQUE2QixDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsYUFBYSxDQUFDLHFCQUFxQixDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLHNHQUFzRztxQkFDM04sSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsUUFBUSxDQUFDLFVBQVUsQ0FBQztvQkFDdkMsT0FBTyxDQUFDLENBQUMsR0FBRyxNQUFNLDZCQUE2QixDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsYUFBYSxDQUFDLHFCQUFxQixDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLHNHQUFzRztnQkFFL04sU0FBUyxhQUFhLENBQUMsR0FBMkM7b0JBQ2hFLDBTQUEwUztvQkFDMVMsT0FBTzt3QkFDTCw4REFBOEQ7d0JBQzlELE1BQU0sQ0FBQyxJQUFJLEdBQUcsZUFBZSxFQUFFLHFEQUFxRDt3QkFDcEYsOElBQThJO3dCQUM5SSxHQUFHLElBQUksQ0FBQyxTQUFTOzZCQUNkLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztxQkFDMUIsQ0FBQztnQkFFSixDQUFDO2dCQUFBLENBQUM7WUFDSixDQUFDO1lBQUEsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFTixTQUFTLGdCQUFnQjtZQUN2QixJQUFJLFlBQVksR0FBaUIsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1lBQ2pHLElBQUksQ0FBQyxZQUFZO2dCQUFFLE9BQU8sRUFBRSxDQUFDO1lBQzdCLE9BQU8sWUFBWTtpQkFDaEIsTUFBTSxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FDaEIseUJBQXlCLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEYsQ0FBQztRQUFBLENBQUM7SUFDSixDQUFDO0lBQUEsQ0FBQztJQUVGLFNBQVMsU0FBUyxDQUFDLElBQVk7UUFDN0IsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUNqQixrT0FBa087WUFDbE8sWUFBWSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDeEQsT0FBTyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBbUIsQ0FBQTtRQUNuRCxDQUFDOztZQUNJLE9BQU8sdUJBQXVCLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksRUFBRSxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbEcsQ0FBQztJQUFBLENBQUM7SUFFRjs7OztLQUlDO0lBQ0QsU0FBUyx3QkFBd0IsQ0FBQyxPQUFlLEVBQUUsTUFBZTtRQUNoRSwwRkFBMEY7UUFDMUYsTUFBTSxlQUFlLEdBQWE7WUFDaEMsTUFBTSxDQUFDLGFBQWEsR0FBRyxNQUFNLEdBQUcsa0JBQWtCLEVBQUUsMkJBQTJCO1lBQy9FLE9BQU8sR0FBRyxVQUFVO1lBQ3BCLE9BQU8sR0FBRyxXQUFXO1lBQ3JCLE1BQU0sQ0FBQyxjQUFjLEVBQUUsMkJBQTJCO1NBQ25ELENBQUMsQ0FBQyxvUEFBb1A7UUFFdlAsSUFBSSxDQUFDLE1BQU07WUFBRSxPQUFPLGVBQWUsQ0FBQyxDQUFDLG9LQUFvSztRQUV6TSx3Q0FBd0M7UUFDeEMsQ0FBQyxTQUFTLDBCQUEwQjtZQUVsQyxJQUFJLHVCQUF1QixHQUFHLG1CQUFtQixDQUFDLE1BQU0sQ0FDdEQsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUNSLHlCQUF5QixDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLFVBQVUsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFbkUsSUFBSSxhQUFhLEdBQUcsdUJBQXVCLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FDM0QsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFLFVBQVUsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQy9DLENBQUM7WUFDRixJQUFJLGNBQWMsR0FBRyx1QkFBdUIsQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUM1RCxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUUsVUFBVSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FDaEQsQ0FBQztZQUVGLElBQUksTUFBTSxLQUFLLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQztnQkFDakMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQztvQkFDdEIsQ0FBQyxDQUFDLENBQUMsY0FBYyxHQUFHO3dCQUNsQixjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUUsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO3FCQUNyRSxDQUFDO29CQUNGLENBQUMsQ0FBQyxDQUFDLGNBQWMsR0FBRyxjQUFjO3dCQUNoQyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRSxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDM0UsQ0FBQztpQkFBTSxJQUNMLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDOztvQkFFNUUsQ0FBQyxZQUFZLENBQUMsb0JBQW9CLEVBQUUsWUFBWSxDQUFDLGVBQWU7cUJBQy9ELENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDOztvQkFFOUIsVUFBVSxLQUFLLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFDMUMsNElBQTRJO2dCQUU1SSxJQUFJLE1BQU0sR0FBVyxFQUFFLENBQUM7Z0JBQ3hCLElBQUksT0FBTyxLQUFLLE1BQU0sQ0FBQyxhQUFhO29CQUFFLE1BQU0sR0FBRyxNQUFNLENBQUM7Z0JBQ3RELElBQUksT0FBTyxLQUFLLE1BQU0sQ0FBQyxVQUFVO29CQUFFLE1BQU0sR0FBRyxNQUFNLENBQUM7Z0JBRW5ELElBQUksTUFBTSxLQUFLLE9BQU8sQ0FBQyxTQUFTO29CQUM5QixNQUFNLElBQUksa0JBQWtCLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUEsc1BBQXNQO2dCQUV2UyxDQUFDLFNBQVMsZUFBZTtvQkFDdkIsMEdBQTBHO29CQUMxRyxJQUFJLE9BQU8sS0FBSyxNQUFNLENBQUMsYUFBYTt3QkFBRSxPQUFPO29CQUU3QyxJQUNFLE1BQU0sS0FBSyxPQUFPLENBQUMsVUFBVTs7NEJBRTdCLENBQUMsWUFBWSxDQUFDLG9CQUFvQjtnQ0FDbEMsWUFBWSxDQUFDLGVBQWU7NkJBQzNCLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDO3dCQUU5QixNQUFNLEdBQUcsU0FBUyxDQUFDO2dCQUN2QixDQUFDLENBQUMsRUFBRSxDQUFDO2dCQUdMLGNBQWMsR0FBRztvQkFDZixjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FDNUIsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFLFFBQVEsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLENBQ3ZDO2lCQUNGLENBQUM7WUFDSixDQUFDO1lBRUQsSUFBSSxhQUFhLEVBQUUsTUFBTSxHQUFHLENBQUMsSUFBSSxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxHQUFHLENBQUM7Z0JBQzNELGVBQWUsQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDOUQsSUFBSSxjQUFjLEVBQUUsTUFBTSxHQUFHLENBQUMsSUFBSSxjQUFjLENBQUMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxHQUFHLENBQUM7Z0JBQzdELGVBQWUsQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakUsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUVMLE9BQU8sZUFBZSxDQUFDO0lBQ3pCLENBQUM7SUFHRDs7T0FFRztJQUNILFNBQVMsMkJBQTJCO1FBQ2xDLElBQUksS0FBSyxHQUFTLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDLG9ZQUFvWTtRQUVuYyxPQUFPLDhCQUE4QixDQUNuQyxnQ0FBZ0MsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQ2pELEtBQUssQ0FDSSxDQUFDO0lBQ2QsQ0FBQztBQUNILENBQUM7QUFHRDs7Ozs7R0FLRztBQUNILFNBQVMseUJBQXlCLENBQ2hDLFVBQWtCLEVBQ2xCLFdBQXFCLENBQUMsVUFBVSxDQUFDO0lBRWpDLElBQUksQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDLEtBQUssQ0FBQztRQUFFLE9BQU8sS0FBSyxDQUFDLENBQUMscUVBQXFFO0lBRXJILFVBQVUsR0FBRyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRXZELE9BQU8sVUFBVTtTQUNkLEtBQUssQ0FBQyxJQUFJLENBQUM7U0FDWCxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2hGLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNwQixDQUFDO0FBRUQ7Ozs7O0dBS0c7QUFDSCxTQUFTLGNBQWMsQ0FDckIsSUFBWSxFQUNaLFdBQW1CLFVBQVU7SUFFN0IsSUFBSSxJQUFJLEVBQUUsVUFBVSxDQUFDLEdBQUcsQ0FBQztRQUN2QixJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDaEMsSUFBSSxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUM3QixJQUFJLEdBQUcsSUFBSSxFQUFFLE9BQU8sQ0FBQyxJQUFJLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFFMUMsSUFBSSxDQUFDLElBQUk7UUFBRSxPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFFM0QsSUFBSSxJQUFJLEtBQUssT0FBTyxDQUFDLEtBQUs7UUFDeEIsT0FBTztZQUNMLE9BQU8sQ0FBQyxVQUFVO1lBQ2xCLE9BQU8sQ0FBQyxVQUFVO1lBQ2xCLE9BQU8sQ0FBQyxVQUFVO1lBQ2xCLE9BQU8sQ0FBQyxVQUFVO1NBQ25CLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBRXJCLE9BQU8sSUFBSSxLQUFLLFFBQVEsQ0FBQztBQUMzQixDQUFDO0FBRUQsU0FBUyxtQkFBbUIsQ0FBQyxJQUFjLEVBQUUsTUFBZ0MsRUFBRSxTQUF5QixhQUFhLEVBQUUsV0FBb0IsRUFBRSxTQUFrQixJQUFJLEVBQUUsU0FBa0I7SUFDckwsSUFBSSxDQUFDLE1BQU07UUFBRSxPQUFPO0lBQ3BCLE1BQU0sYUFBYSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDcEQsYUFBYSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQztJQUN0RCxJQUFJLGVBQWUsS0FBSyxJQUFJO1FBQUUsYUFBYSxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUM7SUFDeEQsSUFBSSxTQUFTO1FBQUUsYUFBYSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO0lBQ3ZELE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLEVBQUUsYUFBYSxDQUFDLENBQUM7SUFFcEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBRWpDLFNBQVMsTUFBTSxDQUFDLEdBQVc7UUFDekIsTUFBTSxJQUFJLEdBQUcsYUFBYSxDQUFDO1lBQ3pCLEdBQUcsRUFBRSxHQUFHO1lBQ1IsYUFBYSxFQUFFLGFBQWE7WUFDNUIsUUFBUSxFQUFFLEdBQUcsQ0FBQyxRQUFRLElBQUksY0FBYztZQUN4QyxLQUFLLEVBQUUsS0FBSztZQUNaLE9BQU8sRUFBRSxHQUFHLEVBQUU7Z0JBQ1osTUFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDLEtBQUssR0FBRyxZQUFZLENBQUM7Z0JBQ3BDLElBQUksVUFBVSxHQUFHLFlBQVksQ0FBQyxhQUFhLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxDQUFDO2dCQUV0RCxJQUFJLFVBQVU7b0JBQUUsT0FBTyxNQUFNLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsV0FBVyxDQUFDLENBQUM7Z0JBRW5GLENBQUMsS0FBSyxVQUFVLGdCQUFnQjtvQkFDOUIsVUFBVSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQzNDLFVBQVUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO29CQUNuQixhQUFhLENBQUMscUJBQXFCLENBQUMsVUFBVSxFQUFFLFVBQVUsQ0FBQyxDQUFDO29CQUU1RCxNQUFNLHlCQUF5QixDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7b0JBRW5ELFVBQVUsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO29CQUV4QyxJQUFJLENBQUMsV0FBVzt3QkFBRSxPQUFPO29CQUV6QixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFtQixFQUFFLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsQ0FBcUIsQ0FBQztvQkFDM0gsSUFBSSxDQUFDLE1BQU07d0JBQUUsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO29CQUM5Qix3QkFBd0IsQ0FBQyxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxXQUFXLEdBQUcsR0FBRyxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQSw0RUFBNEU7b0JBRTdLLE1BQU0sQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyx1SEFBdUg7Z0JBQzdMLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDUCxDQUFDO1NBQ0YsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyw4RUFBOEU7SUFDOUcsQ0FBQztJQUVELGFBQWEsQ0FBQyxLQUFLLENBQUMsbUJBQW1CLEdBQUcsMEJBQTBCLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBRXZGLE9BQU8sYUFBYSxDQUFDO0lBRXJCLFNBQVMsTUFBTSxDQUFDLFVBQW9DLEVBQUUsR0FBYSxFQUFFLFVBQWtCLEVBQUUsU0FBa0IsSUFBSTtRQUM3RyxJQUFJLENBQUMsVUFBVTtZQUFFLE9BQU87UUFFeEIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDOUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxFQUFFO1lBQ1osb0RBQW9EO1lBQ3BELFlBQVksQ0FBQyxhQUFhLENBQUMsR0FBRyxHQUFHLEVBQUUsR0FBRyxZQUFZLENBQUMsRUFBRSxTQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzNFLFlBQVksQ0FBQyxVQUFVLEdBQUcsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3RDLENBQUMsQ0FBQyxDQUFDO1FBRUwsSUFBSSxDQUFDLE1BQU07WUFBRSxPQUFPLENBQUMsdUVBQXVFO1FBRTVGLFVBQVUsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BDLFlBQVksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFbkUsU0FBUyxZQUFZLENBQUMsS0FBYSxFQUFFLE9BQWdCLEtBQUs7WUFDeEQsSUFBSSxDQUFDLEtBQUs7Z0JBQUUsT0FBTztZQUNuQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLFFBQVEsQ0FBQztpQkFDdkQsTUFBTSxDQUFDLENBQUMsR0FBbUIsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEtBQUssS0FBSyxDQUFDLENBQUM7WUFFaEUsSUFBSSxDQUFDLElBQUk7Z0JBQ1AsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUE7O2dCQUNoRCxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQTtRQUN2RCxDQUFDO1FBQUEsQ0FBQztJQUNKLENBQUM7QUFDSCxDQUFDO0FBRUQ7Ozs7O0dBS0c7QUFDSCxTQUFTLG1CQUFtQixDQUFDLElBQStGO0lBQzFILElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYTtRQUFFLE9BQU8sRUFBRSxDQUFDO0lBQ25DLElBQUksSUFBSSxDQUFDLElBQUk7UUFDWCxPQUFPLFVBQVUsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztTQUMvRCxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLE1BQU07UUFDaEMsT0FBTyxVQUFVLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7O1FBQ3hGLE9BQU8sRUFBRSxDQUFDO0lBRWYsU0FBUyxVQUFVLENBQUMsTUFBb0I7UUFDdEMsSUFBSSxDQUFDLE1BQU07WUFBRSxPQUFPO1FBQ3BCLE9BQU8sTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQTtJQUMxRCxDQUFDO0FBQ0gsQ0FBQztBQUVEOzs7R0FHRztBQUNILFNBQVMsWUFBWSxDQUFDLEtBQWlCO0lBQ3JDLElBQUksQ0FBQyxLQUFLO1FBQUUsT0FBTztJQUNuQixJQUFJLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJO1FBQ3ZDLE9BQU8sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUEsa0NBQWtDO0lBQ3BELE9BQU8sQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDM0MsVUFBVSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUM7U0FDbkIsVUFBVSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUM7U0FDbkIsVUFBVSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUM7U0FDbkIsVUFBVSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUN6QixDQUFDO0FBRUQ7Ozs7OztHQU1HO0FBQ0gsU0FBUyxhQUFhLENBQUMsS0FBWSxFQUFFLE1BQWMsRUFBRSxhQUFxQixFQUFFLFdBQW1CO0lBQzdGLE9BQU8sZUFBZSxDQUFDLGFBQWEsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxXQUFXLENBQUMsQ0FBQTtBQUN6RyxDQUFDO0FBRUQ7Ozs7O0lBS0k7QUFDSixTQUFTLGVBQWUsQ0FBQyxhQUFxQixFQUFFLElBQWdCLEVBQUUsS0FBYSxFQUFFLE1BQWU7SUFDOUYsSUFBSSxDQUFDLGFBQWE7UUFBRSxPQUFPO0lBQzNCLElBQUksQ0FBQyxJQUFJO1FBQUUsSUFBSSxHQUFHLFlBQVksQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDOUMsSUFBSSxDQUFDLElBQUk7UUFBRSxPQUFPO0lBQ2xCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3hELElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMscUhBQXFIO1FBQ3hNLEtBQUssSUFBSSxDQUFDLENBQUM7SUFDYixPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFBLG9GQUFvRjtBQUM1RyxDQUFDO0FBQ0Q7Ozs7S0FJSztBQUNMLFNBQVMsWUFBWSxDQUFDLEtBQVksRUFBRSxNQUFjO0lBQ2hELElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxNQUFNO1FBQUUsT0FBTztJQUM5QixPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFBO0FBQzFELENBQUM7QUFFRCxLQUFLLFVBQVUsZUFBZSxDQUFDLElBQVksRUFBRSxNQUFlLElBQUk7SUFDOUQsSUFBSSxDQUFDLElBQUk7UUFBRSxPQUFPO0lBQ2xCLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqQixPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUV6QixJQUFJLElBQUksR0FBRyxFQUFFLEVBQUUsRUFBRSw4Q0FBOEMsRUFBRSxFQUFFLEVBQUUscURBQXFELEVBQUUsRUFBRSxFQUFFLDhDQUE4QyxFQUFFLENBQUM7SUFFakwsSUFBSSxJQUFJLEdBQUc7UUFDVCxFQUFFLEVBQUUsNkZBQTZGO1FBQ2pHLEVBQUUsRUFBRSwySUFBMkk7UUFDL0ksRUFBRSxFQUFFLCtGQUErRjtLQUNwRyxDQUFBO0lBQ0QsSUFBSSxHQUFHO1FBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBRTNCLEdBQUcsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBRTFHLE9BQU8sSUFBSSxPQUFPLENBQVEsQ0FBQyxPQUFPLEVBQUUsRUFBRTtRQUNwQyxVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ2QsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztnQkFDcEIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzNCLENBQUM7WUFBQSxDQUFDO1FBQ0osQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFBO0lBQ1QsQ0FBQyxDQUFDLENBQUM7QUFFTCxDQUFDO0FBRUQsS0FBSyxVQUFVLGlCQUFpQixDQUFDLElBQVk7SUFDM0MsSUFBSSxDQUFDLElBQUk7UUFBRSxPQUFPO0lBQ2xCLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUFFLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzVDLElBQUksS0FBSyxHQUFHLE1BQU0sZUFBZSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztJQUUvQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDLElBQWUsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFM0QsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDekIsQ0FBQyJ9