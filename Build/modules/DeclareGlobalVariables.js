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
            : (this._cssClass = css.sideBarButton);
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
const version = localStorage.version || undefined;
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
        AR: null,
        FR: null,
        EN: null,
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
    switchClass: 'CCSS_', //This prefix is used in an empty row of a table in order to tell that the following row will have another class. This is need when for example the following row is a placeHolder (i.e., starts with Prefix.placeholder) since we cannot set the class of the table that will be inserted. Usually the rows of table referenced by the placeholder have as class css.Same, which means that each row will inherit the class of the preivous row. 
    class: '&C='
};
const anyDay = '&D=$copticFeasts.AnyDay', plusSign = String.fromCharCode(10133), minusSign = String.fromCharCode(10134), eighthNoteCode = String.fromCharCode(9834), beamedEighthNoteCode = String.fromCharCode(9835);
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
    NoSeason: "NON",
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
    Coptic29th: '', //This value will be set equal to the copticDate by setCopticDates() if today is 29th of the Coptic month and we are in a month where this feast is celebrated
    Coptic21th: '', //This value will be set equal to the copticDate by setCopticDates() if today is the 21th of the Coptic Month 
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
], Kiahk = [
    Seasons.KiahkWeek1,
    Seasons.KiahkWeek2,
    Seasons.KiahkWeek3,
    Seasons.KiahkWeek4,
], copticFasts = [
    ...Kiahk,
    Seasons.NativityFast,
    Seasons.JonahFast,
    Seasons.GreatLent,
    Seasons.HolyWeek,
    Seasons.ApostlesFast,
    Seasons.StMaryFast,
];
const MartyrsFeasts = {
    StJohnBaptist: "0201",
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
    StMichaelMetropolis: "", //St Mikhael the Metropolis of Assiut
    StJustAnton: "0804", //St Just of the St. Anton
    StCome: "", //
    StTeji: "", //
    StPope: "", //
};
const apostlesFeasts = {
    StJohnApostle: '0405',
    StPeter: copticFeasts.Apostles,
    StPaul: copticFeasts.Apostles,
    StJacobZabadi: '1708',
    StJacobApostle: '1811',
    StThomas: '2609',
    StMathieu: '1202',
    StLuke: '2202',
    StMarc: "3008",
    AnyPostle: '',
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
    ...celestialBeingsFeasts, ...apostlesFeasts, ...MartyrsFeasts, ...nonMartyrsFeasts
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
        Class: "PR",
    },
    {
        Show: true,
        EN: "Diacon",
        FR: "Diacre",
        AR: "الشماس",
        Class: "DI",
    },
    {
        Show: true,
        EN: "Assembly",
        FR: "Assemblée",
        AR: "الشعب",
        Class: "AS",
    },
    {
        Show: false,
        EN: "Comments",
        FR: "Commentaires",
        AR: "تعليقات",
        Class: "CO",
    },
    {
        Show: false,
        EN: "CommentText",
        Class: "TC"
    },
    {
        Show: true,
        EN: "NoActor",
        Class: "NA"
    },
]; //These are the names of the classes given to each row accordin to which we give a specific background color to the div element in order to show who tells the prayer
const css = {
    Priest: `${Prefix.class}${actors[0].Class}`,
    Diacon: `${Prefix.class}${actors[1].Class}`,
    Assembly: `${Prefix.class}${actors[2].Class}`,
    Title: `${Prefix.class}TI`,
    SubTitle: `${Prefix.class}ST`,
    Comment: `${Prefix.class}${actors[3].Class}`,
    CommentText: `${Prefix.class}${actors[4].Class}`,
    Intro: `${Prefix.class}RI`,
    End: `${Prefix.class}RE`,
    Same: `${Prefix.class}SA`,
    NoActor: `${Prefix.class}NA`,
    Row: "Row",
    arabic: "AR",
    french: "FR",
    english: "EN",
    coptic: "COP",
    coptArabic: "CA",
    amplifiedText: "amplifiedText",
    sideBarButton: "sideBarBtn",
    inlineButton: "inlineBtn",
    inlineButtonsContainer: "inlineBtns",
    buttonText: "btnText",
    dateDiv: "dateDiv",
    dateBox: "dateBox",
    credentialsContainer: "credentialsDiv",
    hidden: "hiddenElement",
    musicalNote: "musicalNote",
    superScript: "superScript",
    slide: "Slide",
    addLanguage: "langBtnAdd",
    btnsContainer: "btnsDiv",
    editingBtn: "btnEditing",
    extended: "extended",
    masterButtonDiv: "masterBtnDiv",
    mainPageButton: "mainPageBtns",
    slideRow: "SlideRow",
    expand: "expand",
    settings: "settings",
    settingsLabel: "settingsLabel",
    expandableDiv: "Expandable",
    sideTitle: "sideTitle",
    single: "Single",
    closeBtn: "closebtn",
};
if (!localStorage.showActors)
    localStorage.showActors = JSON.stringify(actors);
else if (!JSON.parse(localStorage.showActors).find(actor => actor.Class))
    localStorage.showActors = JSON.stringify(JSON.parse(localStorage.showActors)
        .map((actor) => {
        actor.Class = actors.find((a) => a.EN === actor.EN)?.Class;
        return actor;
    }));
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
    nonCopticLanguages,
    copticLanguages,
    allLanguages,
    prayersLanguages,
    displayModes,
    actors,
    PrayersArraysKeys,
    GreatLordFeasts,
    MinorLordFeasts,
    lordFeasts,
    celestialBeingsFeasts,
    MartyrsFeasts,
    nonMartyrsFeasts,
    stMaryFeasts,
].forEach(obj => Object.freeze(obj));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVjbGFyZUdsb2JhbFZhcmlhYmxlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL21vZHVsZXMvRGVjbGFyZUdsb2JhbFZhcmlhYmxlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5QkEsTUFBTSxNQUFNO0lBaUJWLFlBQVksR0FBZTtRQVhuQixxQkFBZ0IsR0FBVyxFQUFFLENBQUM7UUFZcEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQztRQUN4QixJQUFJLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQyxTQUFTLENBQUM7UUFDaEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUMsUUFBUSxDQUFDO1FBQzlCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxHQUFHLENBQUMsZUFBZSxDQUFDO1FBQzVDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxHQUFHLENBQUMsZUFBZSxDQUFDO1FBQzVDLElBQUksQ0FBQyxhQUFhLEdBQUcsR0FBRyxDQUFDLFlBQVksQ0FBQztRQUN0QyxJQUFJLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQyxTQUFTLENBQUM7UUFDaEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDO1FBQzVCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxHQUFHLENBQUMsZ0JBQWdCLENBQUM7UUFDOUMsSUFBSSxDQUFDLFlBQVksR0FBRyxHQUFHLENBQUMsV0FBVyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQztRQUN0QixHQUFHLENBQUMsUUFBUTtZQUNWLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQztZQUNqQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQyxhQUFhLENB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