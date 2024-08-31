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
        this._docFragment = btn.docFragment;
        this._html = btn.html;
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
    get cssClass() {
        return this._cssClass;
    }
    get docFragment() {
        return this._docFragment;
    }
    get html() {
        return this._html;
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
    set children(children) {
        this._children = children;
    }
    set cssClass(cssClass) {
        this._cssClass = cssClass;
    }
    set docFragment(docFragment) {
        this._docFragment = docFragment;
    }
    set html(html) {
        this._html = html;
    }
}
const Btn = {};
//CONSTANTS
const version = "v8.9 (Fixes to the languages selection)";
const calendarDay = 24 * 60 * 60 * 1000; //this is a day in milliseconds
const containerDiv = document.getElementById("containerDiv");
const leftSideBar = document.getElementById("leftSideBar");
const sideBarBtnsContainer = leftSideBar.querySelector("#sideBarBtns");
const rightSideBar = document.getElementById("rightSideBar");
const sideBarTitlesContainer = rightSideBar.querySelector("#sideBarBtns");
const expandableBtnsPannel = document.getElementById("inlineBtnsContainer");
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
    catholiconResponse: "CR_",
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
    readingRef: 'RRef_',
};
const anyDay = '&D=$copticFeasts.AnyDay', plusCharCode = 10133, btnClass = "sideBarBtn", eighthNoteCode = 9834, beamedEighthNoteCode = 9835, inlineBtnClass = "inlineBtn", inlineBtnsContainerClass = "inlineBtns", hidden = "hiddenElement";
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
var userLanguages;
if (localStorage.userLanguages)
    userLanguages = JSON.parse(localStorage.userLanguages) || undefined;
var defaultLanguage = (() => { if (userLanguages)
    return userLanguages[0]; })() || undefined;
;
var foreingLanguage = (() => { if (userLanguages)
    return userLanguages[1]; })() || undefined;
;
var copticLanguage = (() => { if (userLanguages)
    return userLanguages[2]; })() || undefined;
;
const variable = {
    giaki: {
        AR: '', FR: '', EN: '', COP: '', CA: ''
    },
    thanksMorning: {
        AR: 'وعَنْ مَوضعِكَ المُقدس هَذا، وعَنْ هَذِه الكَنِيسَةِ.',
        FR: 'et de ce lieu saint qui est à Toi et de cette église.',
        EN: '',
        COP: 'ⲛⲉⲙ ⲉ̀ⲃⲟⲗϩⲁ ⲡⲁⲓ ⲙⲁ ⲉⲑⲟⲩⲁⲃ ⲛ̀ⲧⲁⲕ ⲫⲁⲓ : ⲛⲉⲙ ⲉ̀ⲃⲟⲗϩⲁ ⲧⲁⲓⲈⲕⲕ̀ⲗⲏⲥⲓⲁ̀ ⲫⲁⲓ.',
        CA: 'نيم إيفول ها باي ما إثؤواب إنتاك فاي، نيم إفول ها تاي إي إكلَيسيا فاي.'
    },
    thanksVespers: {
        AR: 'وعَنْ مَوضعِكَ المُقدس هَذا.',
        FR: 'et de ce lieu saint qui est à Toi.',
        EN: '',
        COP: 'ⲛⲉⲙ ⲉ̀ⲃⲟⲗϩⲁ ⲡⲁⲓ ⲙⲁ ⲉⲑⲟⲩⲁⲃ ⲛ̀ⲧⲁⲕ ⲫⲁⲓ.',
        CA: 'نيم إيفول ها باي ما إثؤواب إنتاك فاي.'
    },
    thanksLakan: {
        AR: 'وعن هذه الفَسْقِيَّةِ، وعَنْ مَوضعِكَ المُقدس هَذا، وعَنْ هَذِه الكَنِيسَةِ.',
        FR: 'et de ce bassin, et de ce lieu saint qui est à Toi et de cette église.',
        EN: '',
        COP: 'ⲛⲉⲙ ⲉ̀ⲃⲟⲗ ϩⲁ ⲧⲁⲓⲕⲟⲗⲩⲙⲃⲏⲑⲣⲁ ⲫⲁⲓ : ⲛⲉⲙ ⲉ̀ⲃⲟⲗϩⲁ ⲡⲁⲓ ⲙⲁ ⲉⲑⲟⲩⲁⲃ ⲛ̀ⲧⲁⲕ ⲫⲁⲓ : ⲛⲉⲙ ⲉ̀ⲃⲟⲗϩⲁ ⲧⲁⲓⲈⲕⲕ̀ⲗⲏⲥⲓⲁ̀ ⲫⲁⲓ.',
        CA: 'نيم إيفول ها تاي كول إمبيثرا فاي، نيم إيفول ها باي ما إثؤواب إنتاك فاي، نيم إفول ها تاي إي إكلَيسيا فاي.'
    },
    thanksMass: {
        AR: 'وعَنْ هَذِهِ المَائِدَةِ، وعَنْ مَوضعِكَ المُقدس هذا.',
        FR: 'de cette table, et  de  ce lieu saint qui est à Toi.',
        EN: '',
        COP: 'Ⲛⲉⲙ ⲉ̀ⲃⲟⲗϩⲁ ⲧⲣⲁⲡⲉⲍⲁ ⲫⲁⲓ: ⲛⲉⲙ ⲉ̀ⲃⲟⲗϩⲁ ⲡⲁⲓ ⲙⲁ ⲉⲑⲟⲩⲁⲃ ⲛ̀ⲧⲁⲕ ⲫⲁⲓ.',
        CA: 'نيم إيفول ها ترابيزا فاي، إيفول ها باي ما إثؤواب إنتاك فاي.'
    },
};
const bookMarks = (() => {
    if (localStorage.bookMarks)
        return JSON.parse(localStorage.bookMarks);
    return [];
})();
var userLanguages;
if (localStorage.userLanguages)
    userLanguages = JSON.parse(localStorage.userLanguages) || undefined;
const prayersLanguages = ["COP", "FR", "CA", "AR"];
var lastScrollTop = 0;
const displayModes = ["Normal", "Presentation", "Priest"];
const CommonArray = []; //an array in which we will group all the common prayers of all the liturgies. It is a subset o PrayersArray
const MassCommonArray = []; //an array in which we will save the commons prayers specific to the mass (like the Assembly, Espasmos, etc.)
const MassStBasilArray = [], MassStGregoryArray = [], MassStCyrilArray = [], MassStJohnArray = [], FractionsArray = [], DoxologiesArray = [], IncenseArray = [], CommunionArray = [], PsalmAndGospelArray = [], CymbalVersesArray = [], PraxisResponsesArray = [], CatholiconResponsesArray = [], BookOfHoursArray = [], HolyWeekArray = [], PsalmodyArray = [];
const PrayersArrays = [
    CommonArray,
    MassCommonArray,
    MassStBasilArray,
    MassStGregoryArray,
    MassStCyrilArray,
    MassStJohnArray,
    FractionsArray,
    DoxologiesArray,
    IncenseArray,
    CommunionArray,
    PsalmAndGospelArray,
    CymbalVersesArray,
    PraxisResponsesArray,
    CatholiconResponsesArray,
    BookOfHoursArray,
    HolyWeekArray,
    PsalmodyArray,
];
const textAmplified = [];
const actors = [
    {
        Show: true,
        EN: "Priest",
        FR: "Prêtre",
        AR: "الكاهن",
    },
    {
        Show: true,
        EN: "Diacon",
        FR: "Diacre",
        AR: "الشماس",
    },
    {
        Show: true,
        EN: "Assembly",
        FR: "Assemblée",
        AR: "الشعب",
    },
    {
        Show: false,
        EN: "Comments",
        FR: "Commentaires",
        AR: "تعليقات",
    },
    {
        Show: false,
        EN: "CommentText",
    },
    {
        Show: true,
        EN: "NoActor",
    },
]; //These are the names of the classes given to each row accordin to which we give a specific background color to the div element in order to show who tells the prayer
if (!localStorage.showActors)
    localStorage.showActors = JSON.stringify(actors);
else if (JSON.parse(localStorage.showActors)[0][1] !== undefined)
    localStorage.showActors = JSON.stringify(JSON.parse(localStorage.showActors)
        .map((actor) => {
        actor[0].Show = actor[1];
        return actor[0];
    }));
allLanguages.map((lang) => textAmplified.push([lang[0], false]));
if (localStorage.textAmplified === undefined) {
    localStorage.textAmplified = JSON.stringify(textAmplified);
}
if (!localStorage.displayMode || localStorage.displayMode === "undefined") {
    localStorage.displayMode = displayModes[0];
}
var PrayersArrayFR;
const PrayersArraysKeys = [
    //!Caution: we needed to make the last element a function that returns the array instead of referrecing the array itself, because when the DeclareGlobalVariables.js file is loaded, the ReadingsPrayersArrays are still empty since the readings texts files are not loaded yet
    [
        Prefix.praxisResponse,
        "PraxisResponsesArray",
        () => PraxisResponsesArray,
    ],
    [
        Prefix.catholiconResponse,
        "CatholiconResponsesArray",
        () => CatholiconResponsesArray,
    ],
    [
        Prefix.psalmResponse,
        "PsalmAndGospelArray",
        () => PsalmAndGospelArray,
    ],
    [
        Prefix.gospelResponse,
        "PsalmAndGospelArray",
        () => PsalmAndGospelArray,
    ],
    [Prefix.massCommon,
        "MassCommonArray",
        () => MassCommonArray],
    [Prefix.commonPrayer,
        "CommonArray",
        () => CommonArray],
    [
        Prefix.massStBasil,
        "MassStBasilArray",
        () => MassStBasilArray,
    ],
    [
        Prefix.massStCyril,
        "MassStCyrilArray",
        () => MassStCyrilArray,
    ],
    [
        Prefix.massStGregory,
        "MassStGregoryArray",
        () => MassStGregoryArray,
    ],
    [Prefix.massStJohn,
        "MassStJohnArray",
        () => MassStJohnArray],
    [Prefix.doxologies,
        "DoxologiesArray",
        () => DoxologiesArray],
    [Prefix.communion,
        "CommunionArray",
        () => CommunionArray],
    [Prefix.fractionPrayer,
        "FractionsArray",
        () => FractionsArray],
    [
        Prefix.cymbalVerses,
        "CymbalVersesArray",
        () => CymbalVersesArray,
    ],
    [
        Prefix.bookOfHours,
        "BookOfHoursArray",
        () => BookOfHoursArray,
    ],
    [Prefix.HolyWeek,
        "HolyWeekArray",
        () => HolyWeekArray],
    [Prefix.incenseDawn,
        "IncenseArray",
        () => IncenseArray],
    [Prefix.incenseVespers,
        "IncenseArray",
        () => IncenseArray],
    [Prefix.commonIncense,
        "IncenseArray",
        () => IncenseArray],
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
        "PsalmodyArray",
        () => PsalmodyArray],
    [Prefix.prayersArray,
        'PrayersArrayFR',
        () => PrayersArrayFR],
];
[
    Prefix,
    Seasons,
    copticFeasts,
    nonCopticLanguages,
    copticLanguages,
    allLanguages,
    prayersLanguages,
    displayModes,
    actors,
    PrayersArraysKeys
].forEach(obj => Object.freeze(obj));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVjbGFyZUdsb2JhbFZhcmlhYmxlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL21vZHVsZXMvRGVjbGFyZUdsb2JhbFZhcmlhYmxlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5QkEsTUFBTSxNQUFNO0lBaUJWLFlBQVksR0FBZTtRQVhuQixxQkFBZ0IsR0FBVyxFQUFFLENBQUM7UUFZcEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQztRQUN4QixJQUFJLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQyxTQUFTLENBQUM7UUFDaEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUMsUUFBUSxDQUFDO1FBQzlCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxHQUFHLENBQUMsZUFBZSxDQUFDO1FBQzVDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxHQUFHLENBQUMsZUFBZSxDQUFDO1FBQzVDLElBQUksQ0FBQyxhQUFhLEdBQUcsR0FBRyxDQUFDLFlBQVksQ0FBQztRQUN0QyxJQUFJLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQyxTQUFTLENBQUM7UUFDaEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDO1FBQzVCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxHQUFHLENBQUMsZ0JBQWdCLENBQUM7UUFDOUMsSUFBSSxDQUFDLFlBQVksR0FBRyxHQUFHLENBQUMsV0FBVyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQztRQUN0QixHQUFHLENBQUMsUUFBUTtZQUNWLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQztZQUNqQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQyxDQUFDO0lB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