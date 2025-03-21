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
//const version: string = localStorage.version || undefined;
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