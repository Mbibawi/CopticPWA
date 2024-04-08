//CONSTANTS
const version = "v6.4 (Fixes to the Holy Week Passover)";
const calendarDay = 24 * 60 * 60 * 1000; //this is a day in milliseconds
const containerDiv = document.getElementById("containerDiv");
const leftSideBar = document.getElementById("leftSideBar");
const sideBarBtnsContainer = leftSideBar.querySelector("#sideBarBtns");
const rightSideBar = document.getElementById("rightSideBar");
const sideBarTitlesContainer = rightSideBar.querySelector("#sideBarBtns");
const contentDiv = document.getElementById("content");
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
    propheciesDawn: "RPD_", //Stands for Readings Prophecies Dawn
    stPaul: "RSP_", //Stands for Readings St Paul
    Catholicon: "RK_", //Stands for Readings Catholicon
    praxis: "RP_", //Stands for Readings Praxis
    gospelVespers: "RGIV_", //Stands for Readings Gospel Incense Vespers
    gospelDawn: "RGID_", //Stands for Redings Gospel Incense Dawn
    gospelMass: "RGM_", //Readings Gospel Mass
    gospelNight: "RGN_", //Stands for Readings Gospel Night
    synaxarium: "RS_", //Stands for Readings Synaxarium
    cymbalVerses: "CV_", //Stands for Cymbal Verses
    bookOfHours: "BOH_", //Stands for Book Of Prayers
    HolyWeek: "HW_", //Stands for Holy Week
    placeHolder: "PlaceHolder_",
    psalmody: "Psalmody_",
    prayersArray: 'PrayersArray_',
};
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
const bookOfHours = {
    //The first element is the array that will be populated with the text tables. The second element is the sequence of the hour's psalms
    FirstHour: [
        [1, 2, 3, 4, 5, 6, 8, 11, 12, 14, 15, 18, 24, 26, 62, 66, 69, 112, 142],
        {
            AR: "بَاكِرْ",
            FR: "Aube",
            EN: "Dawn",
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
    GospelDawnArrayFR: [],
    GospelNightArrayFR: [],
    PropheciesDawnArrayFR: [],
};
const Seasons = {
    //Seasons are periods of more than 1 day, for which we have specific prayers (e.g.: cymbal verses, doxologies, praxis response, etc.)
    StMaryFast: "StMFast", //stands for Saint Mary Feast
    Nayrouz: "Nay", //Stands for Nayrouz from 1 Tout to 16 Tout
    NativityFast: "NF", //(from 16 Hatour until 28 Kiahk included) stands for Nativity Fast
    Kiahk: "Khk", //The whole month of Kiahk
    KiahkWeek1: "Khk1", //1st Week of Kiahk
    KiahkWeek2: "Khk2", //2nd Week of Kiahk
    KiahkWeek3: "Khk3", //3rd Week of Kiahk
    KiahkWeek4: "Khk4", //4th Week of Kiahk
    NativityParamoun: "NP", //either 2804 before 3 PM or 26, 27 and 2804 if 2904 is a Monday, or 27 and 28 if 2904 is a Sunday
    Nativity: "Nat", //from 28 Kiahk afternoon to 6 Toubi
    BaptismParamoun: "BP", //If the Baptism Feast comes a Monday or a Sunday , the Baptism Paramoun is 3 or 2 days
    Baptism: "Ba", //from 11 Toubi until 12 Toubi
    GreatLent: "GL", // Stand for Great Lent
    HolyWeek: "HW", //Stands for Holy Week
    PentecostalDays: "Pntl", //(from the Holy Saturday Afternoon, until the 7th Sunday)  Stands for Pentecostal Days
    JonahFast: "JFast", //Stands for Jonah Feast
    JonahFeast: "JFeast", //Stands for Jonah Feast
    ApostlesFast: "Apost", //Stands for Apostles Feast
    CrossFeast: "Cross", //Stands for Cross Feast
    Rain: 'Rain', //between 12/10 and 09/02
    Crops: 'Crops', //between 10/02 and 10/05
    Harvest: 'Harvest', //between 11/05 and 11/10
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
    Ascension: Seasons.PentecostalDays + "7thSunday",
    Pentecoste: Seasons.PentecostalDays + "39",
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
const readingsLanguages = ["AR", "FR", "EN"];
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
    [Prefix.massCommon, "MassCommonPrayersArray", () => MassCommonPrayersArray],
    [Prefix.commonPrayer, "CommonPrayersArray", () => CommonPrayersArray],
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
    [Prefix.massStJohn, "MassStJohnPrayersArray", () => MassStJohnPrayersArray],
    [Prefix.doxologies, "DoxologiesPrayersArray", () => DoxologiesPrayersArray],
    [Prefix.communion, "CommunionPrayersArray", () => CommunionPrayersArray],
    [Prefix.fractionPrayer, "FractionsPrayersArray", () => FractionsPrayersArray],
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
    [Prefix.HolyWeek, "HolyWeekPrayersArray", () => HolyWeekPrayersArray],
    [Prefix.incenseDawn, "IncensePrayersArray", () => IncensePrayersArray],
    [Prefix.incenseVespers, "IncensePrayersArray", () => IncensePrayersArray],
    [Prefix.commonIncense, "IncensePrayersArray", () => IncensePrayersArray],
    [
        Prefix.gospelMass,
        "ReadingsArrays.GospelMassArrayFR",
        () => ReadingsArrays.GospelMassArrayFR,
    ],
    [
        Prefix.gospelDawn,
        "ReadingsArrays.GospelDawnArrayFR",
        () => ReadingsArrays.GospelDawnArrayFR,
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
        Prefix.propheciesDawn,
        "ReadingsArrays.PropheciesDawnArrayFR",
        () => ReadingsArrays.PropheciesDawnArrayFR,
    ],
    [Prefix.psalmody, "PsalmodyPrayersArray", () => PsalmodyPrayersArray],
    [Prefix.prayersArray, 'PrayersArrayFR', () => PrayersArrayFR],
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVjbGFyZUdsb2JhbFZhcmlhYmxlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL21vZHVsZXMvRGVjbGFyZUdsb2JhbFZhcmlhYmxlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5QkEsV0FBVztBQUNYLE1BQU0sT0FBTyxHQUNYLHdDQUF3QyxDQUFDO0FBQzNDLE1BQU0sV0FBVyxHQUFXLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDLCtCQUErQjtBQUNoRixNQUFNLFlBQVksR0FBbUIsUUFBUSxDQUFDLGNBQWMsQ0FDMUQsY0FBYyxDQUFtQixDQUFDO0FBQ3BDLE1BQU0sV0FBVyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFtQixDQUFDO0FBQzdFLE1BQU0sb0JBQW9CLEdBQ3hCLFdBQVcsQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLENBQUM7QUFDNUMsTUFBTSxZQUFZLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQW1CLENBQUM7QUFDL0UsTUFBTSxzQkFBc0IsR0FDMUIsWUFBWSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUM3QyxNQUFNLFVBQVUsR0FBZ0IsUUFBUSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUVuRSxNQUFNLFlBQVksR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBc0IsQ0FBQztBQUMvRSxNQUFNLG9CQUFvQixHQUFnQixRQUFRLENBQUMsY0FBYyxDQUMvRCxxQkFBcUIsQ0FDdEIsQ0FBQztBQUNGLE1BQU0saUJBQWlCLEdBQWU7SUFDcEMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztJQUNiLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7SUFDYixDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ1osQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztJQUNiLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7SUFDYixDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ1osQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztJQUNiLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7SUFDYixDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ1osQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztJQUNiLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDWixDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO0lBQ2IsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztJQUNiLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDWixDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO0lBQ2IsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNaLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7SUFDYixDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO0lBQ2IsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNaLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7SUFDYixDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO0lBQ2IsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNaLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7SUFDYixDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO0lBQ2IsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNaLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7SUFDYixDQUFDLElB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