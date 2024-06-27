//CONSTANTS
const version = "v7.0 (Many changes and fixes especially to the retrieval of the Bibles, made asynchronious, and the setting of the default language)";
const calendarDay = 24 * 60 * 60 * 1000; //this is a day in milliseconds
const containerDiv = document.getElementById("containerDiv");
const leftSideBar = document.getElementById("leftSideBar");
const sideBarBtnsContainer = leftSideBar.querySelector("#sideBarBtns");
const rightSideBar = document.getElementById("rightSideBar");
const sideBarTitlesContainer = rightSideBar.querySelector("#sideBarBtns");
const toggleDevBtn = document.getElementById("toggleDev");
const expandableBtnsPannel = document.getElementById("inlineBtnsContainer");
const ResurrectionDates = [
    [2019, 4, 28],
    [2020, 4, 19],
    [2021, 5, 2],
    [2022, 4, 24],
    [2023, 4, 16],
    [2024, 5, 5],
    [2025, 4, 20],
    [2026, 4, 12],
    [2027, 5, 2],
    [2028, 4, 16],
    [2029, 4, 8],
    [2030, 4, 28],
    [2031, 4, 13],
    [2032, 5, 2],
    [2033, 4, 24],
    [2034, 4, 9],
    [2035, 4, 29],
    [2036, 4, 20],
    [2037, 4, 5],
    [2038, 4, 25],
    [2039, 4, 17],
    [2040, 5, 6],
    [2041, 4, 21],
    [2042, 4, 13],
    [2043, 5, 3],
    [2044, 4, 24],
    [2045, 4, 9],
    [2046, 4, 29],
    [2047, 4, 21],
    [2048, 4, 5],
    [2049, 4, 25],
    [2050, 4, 17],
]; // these are  the dates of the Ressurection feast got from خدمة الشماس والألحان للمعلم فرج عبد المسيح الطبعة 14 سنة 2019
const copticMonths = [
    {
        //This is just added in order to count the months from 1 instead of 0
        AR: "none",
        FR: "none",
        EN: "none",
    },
    {
        AR: "توت",
        FR: "Tout",
        EN: "Tut",
    },
    {
        AR: "بابه",
        FR: "Bâbah",
        EN: "Babah",
    },
    {
        AR: "هاتور",
        FR: "Hâtour",
        EN: "Hatour",
    },
    {
        AR: "كيهك",
        FR: "Kiahk",
        EN: "Kiahk",
    },
    {
        AR: "طوبة",
        FR: "Toubah",
        EN: "Toubah",
    },
    {
        AR: "أمشير",
        FR: "Amshir",
        EN: "Amshir",
    },
    {
        AR: "برمهات",
        FR: "Baramhat",
        EN: "Baramhat",
    },
    {
        AR: "برمودة",
        FR: "Baramoudah",
        EN: "Baramudah",
    },
    {
        AR: "بشنس",
        FR: "Bachans",
        EN: "Bashans",
    },
    {
        AR: "بؤونة",
        FR: "Baounah",
        EN: "Baounah",
    },
    {
        AR: "أبيب",
        FR: "Abîb",
        EN: "Abib",
    },
    {
        AR: "مسرى",
        FR: "Misra",
        EN: "Mesra",
    },
    {
        AR: "نسي",
        FR: "Nassie",
        EN: "Nassie",
    },
];
const Prefix = {
    anchor: 'Anchor_',
    same: "S_",
    psalmResponse: "PR_",
    gospelResponse: "GR_",
    praxisResponse: "PRR_",
    massCommon: "MC_",
    commonPrayer: "PC_",
    incenseDawn: "ID_",
    incenseVespers: "IV_",
    massStBasil: "Basil_",
    massStCyril: "Cyril_",
    massStGregory: "Gregory_",
    massStJohn: "John_",
    fractionPrayer: "Fraction_",
    doxologies: "Dox_",
    commonIncense: "IC_",
    communion: "Communion_",
    hymns: "Hymns_",
    prophecies: "RPD_", //Stands for Readings Prophecies Dawn
    stPaul: "RSP_", //Stands for Readings St Paul
    Catholicon: "RK_", //Stands for Readings Catholicon
    praxis: "RP_", //Stands for Readings Praxis
    gospelVespers: "RGIV_", //Stands for Readings Gospel Incense Vespers
    gospelMorning: "RGID_", //Stands for Redings Gospel Incense Dawn
    gospelMass: "RGM_", //Readings Gospel Mass
    gospelNight: "RGN_", //Stands for Readings Gospel Night
    synaxarium: "RS_", //Stands for Readings Synaxarium
    cymbalVerses: "CV_", //Stands for Cymbal Verses
    bookOfHours: "BOH_", //Stands for Book Of Prayers
    HolyWeek: "HW_", //Stands for Holy Week
    placeHolder: "PlaceHolder_",
    psalmody: "Psalmody_",
    prayersArray: 'PrayersArray_',
    readingRef: 'RRef_'
};
const anyDay = '&D=$copticFeasts.AnyDay';
const plusCharCode = 10133;
const btnClass = "sideBarBtn";
const eighthNoteCode = 9834;
const beamedEighthNoteCode = 9835;
const inlineBtnClass = "inlineBtn";
const inlineBtnsContainerClass = "inlineBtns";
const hidden = "hiddenElement";
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
};
const sequences = {
    Incense: [
        //This is the generic sequence of any incense office (morning or evening). The onClick function triggered by btnIncenseDawn and btnIncenseVespers, will remove what is irrelevant and add keeps what needs to be kept
        Prefix.incenseDawn + "IncenseDawnIntro" + anyDay,
        Prefix.commonIncense + "EleysonImas" + anyDay,
        Prefix.bookOfHours + "Psalm50" + anyDay,
        Prefix.commonIncense + "Litanies" + anyDay,
        Prefix.incenseDawn + "SickLitany" + anyDay,
        Prefix.incenseDawn + "TravelersLitany" + anyDay,
        Prefix.incenseDawn + "OblationsLitany" + anyDay,
        Prefix.incenseVespers + "DepartedLitany" + anyDay,
        Prefix.commonPrayer + "AngelsPrayer" + anyDay,
        Prefix.incenseVespers + "LordKeepUsThisNight" + anyDay,
        Prefix.commonIncense + "Doxolgoies" + anyDay,
        Prefix.commonPrayer + "EfnotiNaynan" + anyDay,
        Prefix.commonIncense + "LiturgyEnd" + anyDay
    ],
    Mass: {
        //those are the sequences of the 'Baptized' mass prayers (starting from Reconciliation) for each mass
        Unbaptized: [
            Prefix.massCommon + "GloryAndHonor" + anyDay,
            Prefix.massCommon + "HallelujahFayBiBi" + anyDay,
            Prefix.massCommon + "HallelujahFayBiBiFast" + anyDay,
            Prefix.massCommon + "BenedictionOfTheLamb" + anyDay,
            Prefix.commonPrayer + "ThanksGiving" + anyDay,
            Prefix.massCommon + "AbsolutionForTheFather" + anyDay,
            Prefix.massCommon + "Tayshoury" + anyDay,
            Prefix.massCommon + "Tishoury" + anyDay,
            Prefix.massCommon + "IntercessionsHymn" + anyDay,
            Prefix.commonPrayer + "Creed" + anyDay
        ], //Those are the prayers of the 'Unbaptized Mass'
        StBasil: [
            Prefix.massCommon + "ReconciliationComment" + anyDay,
            Prefix.massStBasil + "Reconciliation" + anyDay,
            Prefix.massCommon + "EndOfReconciliation" + anyDay,
            Prefix.massStBasil + "Anaphora" + anyDay,
            Prefix.massStBasil + "Agios" + anyDay,
            Prefix.massStBasil + "InstitutionNarrative" + anyDay,
            Prefix.massCommon + "AsWeAlsoCommemorateHisHolyPassionPart1" + anyDay,
        ], //The sequence of prayers of St Basil Mass (starting from Reconciliation)
        StGregory: [
            Prefix.massCommon + "ReconciliationComment" + anyDay,
            Prefix.massStGregory + "Reconciliation" + anyDay,
            Prefix.massCommon + "EndOfReconciliation" + anyDay,
            Prefix.massStGregory + "Anaphora" + anyDay,
            Prefix.massStGregory + "Agios" + anyDay,
            Prefix.massStGregory + "AsWeCommemorateYourHolyPassionPart1" + anyDay,
            Prefix.massStGregory + "CallOfTheHolySpiritPart1" + anyDay,
            Prefix.massStGregory + "LitaniesIntroduction" + anyDay,
            Prefix.massStGregory + "Litanies" + anyDay,
            Prefix.massStGregory + "FractionIntroduction" + anyDay
        ], //The sequence of prayers of St Gregory Mass (starting from reconciliation)
        StCyril: [
            Prefix.massCommon + "ReconciliationComment" + anyDay,
            Prefix.massStCyril + "Reconciliation" + anyDay,
            Prefix.massCommon + "EndOfReconciliation" + anyDay,
            Prefix.massStCyril + "Anaphora" + anyDay,
            Prefix.massStCyril + "Agios" + anyDay,
            Prefix.massStCyril + "Part8" + anyDay,
            Prefix.massStCyril + "Part9" + anyDay,
            Prefix.massStCyril + "Part10" + anyDay,
            Prefix.massStCyril + "LitaniesIntroduction" + anyDay,
        ], // the sequence of prayers of St Cyril Mass (starting from Reconciliation)
        StJohn: [], // the sequence of prayers of St John Mass (tarting from Reconciliation)
        CallOfHolySpirit: [
            Prefix.massCommon + "CallOfTheHolySpiritPart1" + anyDay,
        ],
        Litanies: [
            Prefix.massCommon + "LitaniesIntroduction" + anyDay,
            Prefix.massCommon + "SaintsCommemoration" + anyDay,
            Prefix.massCommon + "CommemorationOfTheDeparted" + anyDay,
            Prefix.massCommon + "FractionIntroduction" + anyDay,
            Prefix.commonPrayer + "OurFatherWhoArtInHeaven" + anyDay,
            Prefix.commonPrayer + "BlockInTheNameOfOurLord" + anyDay,
            Prefix.massCommon + "PrayerForTheFather" + anyDay,
            Prefix.commonPrayer + "BlockIriniPassi" + anyDay,
            Prefix.massCommon + "AbsolutionPrayerForTheFather" + anyDay,
            Prefix.massCommon + "ConfessionIntroduction" + anyDay,
            Prefix.massCommon + "Confession" + anyDay,
            Prefix.commonPrayer + "ZoksasiKyrie" + anyDay
        ], //The litanies. They are common to all masses except 
        Communion: [
            Prefix.massCommon + "CommunionPsalm150" + anyDay,
            Prefix.massCommon + "LiturgyEnd" + anyDay,
        ], //the sequence of prayers from 'Confession' until the end of the mass, it is common to all masses 
    },
    Psalmody: {
        Year: [
            Prefix.psalmody + "WakeUpSonsOfLight" + anyDay,
            Prefix.psalmody + "MarenOosht" + anyDay,
            Prefix.psalmody + "FirstHos" + anyDay,
            Prefix.psalmody + "LobshFirstHos" + anyDay,
            Prefix.psalmody + "CommentaryOnHos1" + anyDay,
            Prefix.psalmody + "SecondHos" + anyDay,
            Prefix.psalmody + "LobshSecondHos" + anyDay,
            Prefix.psalmody + "ThirdHos" + anyDay,
            Prefix.psalmody + "Arebsalin" + anyDay,
            Prefix.psalmody + "Tenen" + anyDay,
            Prefix.psalmody + "TenOwehEnthok" + anyDay,
            Prefix.psalmody + "Lobsh1WatesOnSaturdayTheotoky",
            Prefix.psalmody + "Lobsh2WatesOnSaturdayTheotoky",
            Prefix.psalmody + "EndOfWatesTheotokies" + anyDay,
        ],
        Kiahk: [
            Prefix.psalmody + "WakeUpSonsOfLight" + anyDay,
            Prefix.psalmody + "KiahkHos" + anyDay,
            Prefix.psalmody + "ChantAgiosOsiOs" + anyDay,
            Prefix.psalmody + "MarenOosht" + anyDay,
            Prefix.psalmody + "PsalyOnFirstHos" + anyDay,
            Prefix.psalmody + "FirstHos" + anyDay,
            Prefix.psalmody + "LobshFirstHos" + anyDay,
            Prefix.psalmody + "ChantGodSaidToMoses" + anyDay,
            Prefix.psalmody + "CommentaryOnHos1" + anyDay,
            Prefix.psalmody + "PsalyOnSecondHos" + anyDay,
            Prefix.psalmody + "SecondHos" + anyDay,
            Prefix.psalmody + "LobshSecondHos" + anyDay,
            Prefix.psalmody + "ThirdHos" + anyDay,
            Prefix.psalmody + "Arebsalin" + anyDay,
            Prefix.psalmody + "Tenen" + anyDay,
            Prefix.psalmody + "TenOwehEnthok" + anyDay,
            Prefix.psalmody + "Lobsh1WatesOnSaturdayTheotoky",
            Prefix.psalmody + "Lobsh2WatesOnSaturdayTheotoky",
            Prefix.psalmody + "ThirdHos" + anyDay + "&C=Title",
            Prefix.psalmody + "EndOfWatesTheotokies" + anyDay,
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
            Prefix.commonIncense + "EleysonImas" + anyDay,
            Prefix.cymbalVerses + "&D=$copticFeasts.HolyThursday",
            Prefix.bookOfHours + "Psalm50" + anyDay,
            Prefix.HolyWeek + "LakanProphecies&D=$copticFeasts.HolyThursday",
            Prefix.HolyWeek + "LakanSermony&D=$copticFeasts.HolyThursday",
            Prefix.massCommon + "BiEhmotGhar" + anyDay,
            Prefix.anchor + "Readings" + anyDay,
            Prefix.commonPrayer + "Agios&D=$copticFeasts.HolyThursday",
            Prefix.anchor + "GospelLitany" + anyDay,
            Prefix.incenseDawn + "SickPrayer" + anyDay,
            Prefix.incenseDawn + "TravelersPrayer" + anyDay,
            Prefix.massCommon + "SeasonalLitanyOfTheHarvest" + anyDay,
            Prefix.commonPrayer + "KyrieElieson" + anyDay,
            Prefix.massCommon + "LitaniesFinal" + anyDay,
            Prefix.commonPrayer + "KyrieElieson" + anyDay,
            Prefix.massCommon + "PresidentLitany" + anyDay,
            Prefix.incenseVespers + "DepartedPrayer" + anyDay,
            Prefix.incenseDawn + "OblationsPrayer" + anyDay,
            Prefix.commonPrayer + "CatechumensPrayer" + anyDay,
            Prefix.HolyWeek + "LakanPrayer&D=$copticFeasts.HolyThursday",
            Prefix.commonPrayer + "BlockShlil" + anyDay,
            Prefix.commonPrayer + "BlockIriniPassi" + anyDay,
            Prefix.commonPrayer + "ChurchLitany" + anyDay,
            Prefix.commonPrayer + "PopeAndBishopLitany" + anyDay,
            Prefix.commonPrayer + "MeetingsLitany" + anyDay,
            //Insert "Eyn Sophia Si Epros"
            Prefix.commonPrayer + "Creed" + anyDay,
            Prefix.massCommon + "LakanSpasmosAdamLong&D=$copticFeasts.HolyThursday",
            Prefix.massCommon + "DiaconResponseKissEachOther" + anyDay,
            Prefix.placeHolder,
            Prefix.massCommon + "SpasmosAdamShort" + anyDay,
            Prefix.HolyWeek + "LakanAnaphora&D=$copticFeasts.HolyThursday",
            // Prefix.commonIncense+"LiturgyEnd" + anyDay
        ],
        ThursdayMass: [],
        SaturdayIncenseDawn: [],
        SaturdayMass: [],
    },
};
const bookOfHours = {
    //The first element is the array that will be populated with the text tables. The second element is the sequence of the hour's psalms
    FirstHour: [
        [1, 2, 3, 4, 5, 6, 8, 11, 12, 14, 15, 18, 24, 26, 62, 66, 69, 112, 142],
        {
            AR: "بَاكِرْ",
            FR: "Matin",
            EN: "Morning",
        },
    ],
    ThirdHour: [
        [19, 22, 23, 25, 28, 29, 33, 40, 42, 44, 45, 46],
        {
            AR: "السَاعَةِ الثَالِثَةِ",
            FR: "3ème heure",
            EN: "Third Hour",
        },
    ],
    SixthHour: [
        [53, 56, 60, 62, 66, 69, 83, 84, 85, 86, 90, 92],
        {
            AR: "السَاعَةِ السَادِسَةِ",
            FR: "6ème heure",
            EN: "6th Hour",
        },
    ],
    NinethHour: [
        [95, 96, 97, 98, 99, 100, 109, 110, 111, 112, 114, 115],
        {
            AR: "السَاعَةِ التَاسِعَةِ",
            FR: "9ème heure",
            EN: "9th Hour",
        },
    ],
    EleventhHour: [
        [116, 117, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128],
        {
            AR: "السَاعَةِ الحَادِيَةِ عَشْرِ (الغروب)",
            FR: "11ème heure",
            EN: "11th Hour",
        },
    ],
    TwelvethHour: [
        [129, 130, 131, 132, 133, 136, 137, 140, 141, 145, 146, 147],
        {
            AR: "السَاعَةِ الثانية عَشْرِ (النوم)",
            FR: "12ème heure",
            EN: "12th Hour",
        },
    ],
    VeilHour: [
        [
            4, 6, 12, 15, 24, 26, 66, 69, 22, 42, 56, 85, 90, 96, 109, 114, 115, 120, 128, 129, 130, 131, 132, 133, 136, 140, 145, 118,
        ],
        {
            AR: "صَلاةِ السِتَارْ",
            FR: "Femeture du voile",
            EN: "Closing of the Veil",
        },
    ],
    MidNight1Hour: [
        [3, 6, 12, 69, 85, 90, 116, 117, 118],
        {
            AR: "الخِدْمَة الأولى مِن صَلاةِ نِصْفِ الليل",
            FR: "Miniuit 1er service",
            EN: "Mid Night 1st Service",
        },
    ],
    MidNight2Hour: [
        [119, 120, 121, 122, 123, 124, 125, 126, 127, 128],
        {
            AR: "الخِدْمَة الثانِيَة مِنْ صَلاةِ نِصْفِ الليل",
            FR: "Miniuit 2ème service",
            EN: "Mid Night 2nd Service",
        },
    ],
    MidNight3Hour: [
        [129, 130, 131, 132, 133, 136, 137, 140, 141, 145, 146, 147],
        {
            AR: "الخِدْمَة الثَالِثَةِ مِنْ صَلاةِ نِصْفِ الليل",
            FR: "Miniuit 3ème service",
            EN: "Mid Night 3rd Service",
        },
    ],
};
const ReadingsArrays = {
    PraxisArrayFR: [],
    CatholiconArrayFR: [],
    StPaulArrayFR: [],
    SynaxariumArrayFR: [],
    GospelMassArrayFR: [],
    GospelVespersArrayFR: [],
    GospelMorningArrayFR: [],
    GospelNightArrayFR: [],
    PropheciesDawnArrayFR: [],
};
const Seasons = {
    //Seasons are periods of more than 1 day, for which we have specific prayers (e.g.: cymbal verses, doxologies, praxis response, etc.)
    StMaryFast: "STMARY", //stands for Saint Mary Feast
    Nayrouz: "NAY", //Stands for Nayrouz from 1 Tout to 16 Tout
    NativityFast: "NF", //(from 16 Hatour until 28 Kiahk included) stands for Nativity Fast
    Kiahk: "KHK", //The whole month of Kiahk
    KiahkWeek1: "KHK1", //1st Week of Kiahk
    KiahkWeek2: "KHK2", //2nd Week of Kiahk
    KiahkWeek3: "KHK3", //3rd Week of Kiahk
    KiahkWeek4: "KHK4", //4th Week of Kiahk
    NativityParamoun: "NP", //either 2804 before 3 PM or 26, 27 and 2804 if 2904 is a Monday, or 27 and 28 if 2904 is a Sunday
    Nativity: "NAT", //from 28 Kiahk afternoon to 6 Toubi
    BaptismParamoun: "BP", //If the Baptism Feast comes a Monday or a Sunday , the Baptism Paramoun is 3 or 2 days
    Baptism: "BA", //from 11 Toubi until 12 Toubi
    GreatLent: "GL", // Stand for Great Lent
    HolyWeek: "HW", //Stands for Holy Week
    PentecostalDays: "PNT", //(from the Holy Saturday Afternoon, until the 7th Sunday)  Stands for Pentecostal Days
    Ascension: 'ASC', //From Ascenssion feast to the Pentecoste Feast
    ApostlesFast: "APOST", //Stands for Apostles Feast
    JonahFast: "JFAST", //Stands for Jonah Feast
    JonahFeast: "JFEAST", //Stands for Jonah Feast
    CrossFeast: "CRO", //Stands for Cross Feast
    Rain: 'RAIN', //between 12/10 and 09/02
    Crops: 'CROP', //between 10/02 and 10/05
    Harvest: 'HARV', //between 11/05 and 11/10
    NoSeason: "NoSpecificSeason",
};
const copticFeasts = {
    AnyDay: "AnyDay",
    Nayrouz: "0101",
    Cross1: "1701",
    Cross2: "1007",
    BeguiningNativityLent: "1603",
    NativityParamoun: "2804",
    Nativity: "2904",
    Circumcision: "0605",
    BaptismParamoun: "1005",
    Baptism: "1105",
    CanaWedding: "1305",
    EntryToTemple: "0806",
    EntryToEgypt: "2409",
    Annonciation: "2907",
    EndOfGreatLentFriday: Seasons.GreatLent + "49",
    LazarusSaturday: Seasons.GreatLent + "50",
    PalmSunday: Seasons.GreatLent + "7thSunday",
    HolyMonday: Seasons.GreatLent + "52",
    HolyTuseday: Seasons.GreatLent + "53",
    HolyWednsday: Seasons.GreatLent + "54",
    HolyThursday: Seasons.GreatLent + "55",
    HolyFriday: Seasons.GreatLent + "56",
    HolySaturday: Seasons.GreatLent + "57",
    Resurrection: Seasons.GreatLent + "9thSunday",
    ThomasSunday: Seasons.PentecostalDays + "1stSunday",
    Ascension: Seasons.PentecostalDays + "39",
    PentecosteVespers: Seasons.PentecostalDays + "48",
    Pentecoste: Seasons.PentecostalDays + "7thSunday",
    Apostles: "0511",
    StMaryFastVespers: "3010",
    StMaryFast: "0112",
    Epiphany: "1312",
    Coptic29th: "XXXX", //This value will be set to copticDate by setCopticDates() if today is 29th of the Coptic month and we are in a month where this feast is celebrated
    Coptic21th: "XXXX", //This value will be set to copticDate by setCopticDates() if todya is the 21th of teh Coptic Month 
};
const GreatLordFeasts = [
    copticFeasts.Annonciation,
    copticFeasts.Nativity,
    copticFeasts.Baptism,
    copticFeasts.PalmSunday,
    copticFeasts.Resurrection,
    copticFeasts.Ascension,
    copticFeasts.Pentecoste,
], MinorLordFeasts = [
    copticFeasts.Epiphany,
    copticFeasts.Circumcision,
    copticFeasts.CanaWedding,
    copticFeasts.EntryToEgypt,
    copticFeasts.EntryToTemple,
], lordFeasts = [...GreatLordFeasts, ...MinorLordFeasts], HolyWeek = [
    copticFeasts.HolyMonday,
    copticFeasts.HolyTuseday,
    copticFeasts.HolyWednsday,
    copticFeasts.HolyThursday,
    copticFeasts.HolyFriday,
], copticFasts = [
    Seasons.NativityFast,
    Seasons.KiahkWeek1,
    Seasons.KiahkWeek2,
    Seasons.KiahkWeek3,
    Seasons.KiahkWeek4,
    Seasons.JonahFast,
    Seasons.GreatLent,
    Seasons.HolyWeek,
    Seasons.ApostlesFast,
    Seasons.StMaryFast,
];
const MartyrsFeasts = {
    StJohnBaptist: "0201",
    StMarc: "3008",
    StSteven: "0105",
    StBacchus: "0402",
    StSerge: "1002",
    StGeorge: "2708",
    StMina: "1503",
    StTheodor: "1205",
    StPhilopatir: "2503",
    StsCosmasDamian: "2205",
    AbakirAndJohn: "0606",
    StDamienne: "1305",
    StBarbara: "0804",
    StMarina: "2311",
};
const nonMartyrsFeasts = {
    StAnton: "2205",
    StBishoy: "0810",
    StShenoute: "0711",
    StRewis: "2102",
    StPersoma: "0513",
    StCyrilVI: "3006",
    StBishoyKamel: "1207",
    StMikaelMetropolis: "", //St Mikhael the Metropolis of Assiut
    StJustAnton: "0804", //St Just of the St. Anton
};
const stMaryFeasts = {
    StMaryFeast: "1612", //Ascension of St. Mary Body
    StMary1: "0712", //Annonciation of the birth of St. Mary
    StMary2: "0109", //birth of St. Mary
    StMary3: "0304", //Entry of St. Mary to the Temple
    StMary4: "2105", //Departure of St. Mary
    StMary5: "2110", //عيد حل الحديد  
};
const celestialBeingsFeasts = {
    FourCelestialBeings: "0803",
    TwentyFourPriests: "2403",
    OneHudredTwentyFourThousands: "", //The 144000 chast
    ArchangelMaykel: "1203",
    ArchangelGabriel: "1310",
    ArchangelRaphael: "0313",
    ArchangelSourial: "2705",
};
const saintsFeasts = {
    ...celestialBeingsFeasts, ...MartyrsFeasts, ...nonMartyrsFeasts
};
const nonCopticLanguages = [["AR", "العربية"], ["FR", "Français"], ["EN", "English"]];
const copticLanguages = [["COP", "Coptic"], ["CA", "قبطي مُعَرَّبْ"], ['CF', 'Copte en charachères français']];
const allLanguages = [...nonCopticLanguages, ...copticLanguages];
Object.fromEntries(allLanguages);
const seasonal = {
    giaki: { AR: '', FR: '', EN: '', COP: '', CA: '' }
};
const Bibles = { AR: [undefined, undefined], FR: [undefined, undefined], EN: [undefined, undefined], COP: [undefined, undefined] };
const bookMarks = (() => {
    if (localStorage.bookMarks)
        return JSON.parse(localStorage.bookMarks);
    return [];
})();
var userLanguages;
if (localStorage.userLanguages)
    userLanguages = JSON.parse(localStorage.userLanguages) || undefined;
var defaultLanguage = (() => { if (userLanguages)
    return userLanguages[0]; })() || undefined;
var foreingLanguage = (() => { if (userLanguages)
    return userLanguages[1]; })() || undefined;
var copticLanguage = (() => { if (userLanguages)
    return userLanguages[2]; })() || undefined;
const prayersLanguages = ["COP", "FR", "CA", "AR"];
var lastScrollTop = 0;
const displayModes = ["Normal", "Presentation", "Priest"];
const CommonPrayersArray = []; //an array in which we will group all the common prayers of all the liturgies. It is a subset o PrayersArray
const MassCommonPrayersArray = []; //an array in which we will save the commons prayers specific to the mass (like the Assembly, Espasmos, etc.)
const MassStBasilPrayersArray = [], MassStGregoryPrayersArray = [], MassStCyrilPrayersArray = [], MassStJohnPrayersArray = [], FractionsPrayersArray = [], DoxologiesPrayersArray = [], IncensePrayersArray = [], CommunionPrayersArray = [], PsalmAndGospelPrayersArray = [], CymbalVersesPrayersArray = [], PraxisResponsesPrayersArray = [], BookOfHoursPrayersArray = [], HolyWeekPrayersArray = [], PsalmodyPrayersArray = [];
const PrayersArrays = [
    CommonPrayersArray,
    MassCommonPrayersArray,
    MassStBasilPrayersArray,
    MassStGregoryPrayersArray,
    MassStCyrilPrayersArray,
    MassStJohnPrayersArray,
    FractionsPrayersArray,
    DoxologiesPrayersArray,
    IncensePrayersArray,
    CommunionPrayersArray,
    PsalmAndGospelPrayersArray,
    CymbalVersesPrayersArray,
    PraxisResponsesPrayersArray,
    BookOfHoursPrayersArray,
    HolyWeekPrayersArray,
    PsalmodyPrayersArray,
]; //All these arrays are populated by elements from PrayersArray
const textAmplified = [];
//VARS
var PrayersArrayFR = [];
var lastClickedButton;
var selectedDate, //This is the date that the user might have manually selected
copticDate, //The Coptic date is stored in a string not in a number like the gregorian date, this is to avoid complex calculations
copticMonth, //same comment as above
copticDay, //same comment as above
copticYear, //same comment as above
copticReadingsDate, //This is the date of the day's readings (gospel, Catholicon, praxis, etc.). It does not neceissarly correspond to the copticDate
Season, //This is a value telling whether we are during a special period of the year like the Great Lent or the 50 Pentecostal days, etc.
weekDay; //This is today's day of the week (Sunday, Monday, etc.) expressed in number starting from 0
var todayDate;
var isFast;
const actors = [
    {
        EN: "Priest",
        FR: "Prêtre",
        AR: "الكاهن",
    },
    {
        EN: "Diacon",
        FR: "Diacre",
        AR: "الشماس",
    },
    {
        EN: "Assembly",
        FR: "Assemblée",
        AR: "الشعب",
    },
    {
        EN: "Comments",
        FR: "Commentaires",
        AR: "تعليقات",
    },
    {
        EN: "CommentText",
    },
    {
        EN: "NoActor",
    },
]; //These are the names of the classes given to each row accordin to which we give a specific background color to the div element in order to show who tells the prayer
var showActors = [];
actors.map((actor) => showActors.push([actor, true]));
showActors[3][1] = false; //this is in order to initiate the app without the comments displayed. The user will activate it from the settings if he wants
showActors[4][1] = false; //same comment as above concerning the 'CommentText'
if (localStorage.showActors === undefined) {
    localStorage.showActors = JSON.stringify(showActors);
}
allLanguages.map((lang) => textAmplified.push([lang[0], false]));
if (localStorage.textAmplified === undefined) {
    localStorage.textAmplified = JSON.stringify(textAmplified);
}
if (!localStorage.displayMode || localStorage.displayMode === "undefined") {
    localStorage.displayMode = displayModes[0];
}
const PrayersArraysKeys = [
    //!Caution: we needed to make the last element a function that returns the array instead of referrecing the array itself, because when the DeclareGlobalVariables.js file is loaded, the ReadingsPrayersArrays are still empty since the readings texts files are not loaded yet
    [
        Prefix.praxisResponse,
        "PraxisResponsesPrayersArray",
        () => PraxisResponsesPrayersArray,
    ],
    [
        Prefix.psalmResponse,
        "PsalmAndGospelPrayersArray",
        () => PsalmAndGospelPrayersArray,
    ],
    [
        Prefix.gospelResponse,
        "PsalmAndGospelPrayersArray",
        () => PsalmAndGospelPrayersArray,
    ],
    [Prefix.massCommon,
        "MassCommonPrayersArray",
        () => MassCommonPrayersArray],
    [Prefix.commonPrayer,
        "CommonPrayersArray",
        () => CommonPrayersArray],
    [
        Prefix.massStBasil,
        "MassStBasilPrayersArray",
        () => MassStBasilPrayersArray,
    ],
    [
        Prefix.massStCyril,
        "MassStCyrilPrayersArray",
        () => MassStCyrilPrayersArray,
    ],
    [
        Prefix.massStGregory,
        "MassStGregoryPrayersArray",
        () => MassStGregoryPrayersArray,
    ],
    [Prefix.massStJohn,
        "MassStJohnPrayersArray",
        () => MassStJohnPrayersArray],
    [Prefix.doxologies,
        "DoxologiesPrayersArray",
        () => DoxologiesPrayersArray],
    [Prefix.communion,
        "CommunionPrayersArray",
        () => CommunionPrayersArray],
    [Prefix.fractionPrayer,
        "FractionsPrayersArray",
        () => FractionsPrayersArray],
    [
        Prefix.cymbalVerses,
        "CymbalVersesPrayersArray",
        () => CymbalVersesPrayersArray,
    ],
    [
        Prefix.bookOfHours,
        "BookOfHoursPrayersArray",
        () => BookOfHoursPrayersArray,
    ],
    [Prefix.HolyWeek,
        "HolyWeekPrayersArray",
        () => HolyWeekPrayersArray],
    [Prefix.incenseDawn,
        "IncensePrayersArray",
        () => IncensePrayersArray],
    [Prefix.incenseVespers,
        "IncensePrayersArray",
        () => IncensePrayersArray],
    [Prefix.commonIncense,
        "IncensePrayersArray",
        () => IncensePrayersArray],
    [
        Prefix.gospelMass,
        "ReadingsArrays.GospelMassArrayFR",
        () => ReadingsArrays.GospelMassArrayFR,
    ],
    [
        Prefix.gospelMorning,
        "ReadingsArrays.GospelDawnArrayFR",
        () => ReadingsArrays.GospelMorningArrayFR,
    ],
    [
        Prefix.gospelVespers,
        "ReadingsArrays.GospelVespersArrayFR",
        () => ReadingsArrays.GospelVespersArrayFR,
    ],
    [
        Prefix.gospelNight,
        "ReadingsArrays.GospelNightArrayFR",
        () => ReadingsArrays.GospelNightArrayFR,
    ],
    [
        Prefix.stPaul,
        "ReadingsArrays.StPaulArrayFR",
        () => ReadingsArrays.StPaulArrayFR,
    ],
    [
        Prefix.Catholicon,
        "ReadingsArrays.CatholiconArrayFR",
        () => ReadingsArrays.CatholiconArrayFR,
    ],
    [
        Prefix.praxis,
        "ReadingsArrays.PraxisArrayFR",
        () => ReadingsArrays.PraxisArrayFR,
    ],
    [
        Prefix.synaxarium,
        "ReadingsArrays.SynaxariumArrayFR",
        () => ReadingsArrays.SynaxariumArrayFR,
    ],
    [
        Prefix.prophecies,
        "ReadingsArrays.PropheciesDawnArrayFR",
        () => ReadingsArrays.PropheciesDawnArrayFR,
    ],
    [Prefix.psalmody,
        "PsalmodyPrayersArray",
        () => PsalmodyPrayersArray],
    [Prefix.prayersArray,
        'PrayersArrayFR',
        () => PrayersArrayFR],
];
[
    Prefix,
    sequences,
    bookOfHours,
    Seasons,
    copticFeasts,
    GreatLordFeasts,
    MinorLordFeasts,
    lordFeasts,
    HolyWeek,
    copticFeasts,
    MartyrsFeasts,
    nonMartyrsFeasts,
    stMaryFeasts,
    celestialBeingsFeasts,
    saintsFeasts,
    nonCopticLanguages,
    copticLanguages,
    allLanguages,
    prayersLanguages,
    displayModes,
    actors,
    PrayersArraysKeys
].forEach(obj => Object.freeze(obj));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVjbGFyZUdsb2JhbFZhcmlhYmxlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL21vZHVsZXMvRGVjbGFyZUdsb2JhbFZhcmlhYmxlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpQ0EsV0FBVztBQUNYLE1BQU0sT0FBTyxHQUNYLHNJQUFzSSxDQUFDO0FBQ3pJLE1BQU0sV0FBVyxHQUFXLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDLCtCQUErQjtBQUNoRixNQUFNLFlBQVksR0FBbUIsUUFBUSxDQUFDLGNBQWMsQ0FDMUQsY0FBYyxDQUFtQixDQUFDO0FBQ3BDLE1BQU0sV0FBVyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFtQixDQUFDO0FBQzdFLE1BQU0sb0JBQW9CLEdBQ3hCLFdBQVcsQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLENBQUM7QUFDNUMsTUFBTSxZQUFZLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQW1CLENBQUM7QUFDL0UsTUFBTSxzQkFBc0IsR0FDMUIsWUFBWSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUc3QyxNQUFNLFlBQVksR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBc0IsQ0FBQztBQUMvRSxNQUFNLG9CQUFvQixHQUFnQixRQUFRLENBQUMsY0FBYyxDQUMvRCxxQkFBcUIsQ0FDdEIsQ0FBQztBQUNGLE1BQU0saUJBQWlCLEdBQWU7SUFDcEMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztJQUNiLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7SUFDYixDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ1osQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztJQUNiLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7SUFDYixDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ1osQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztJQUNiLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7SUFDYixDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ1osQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztJQUNiLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDWixDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO0lBQ2IsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztJQUNiLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDWixDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO0lBQ2IsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNaLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7SUFDYixDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO0lBQ2IsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNaLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7SUFDYixDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO0lBQ2IsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNaLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7SUFDYixDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO0lBQ2IsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNaLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7SUFDYixDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ1osQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFF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