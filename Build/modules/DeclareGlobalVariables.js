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
    changeClass: 'CCSS_', //This prefix is used in an empty row of a table in order to tell that the following row will have another class. This is need when for example the following row is a placeHolder (i.e., starts with Prefix.placeholder) since we cannot set the class of the table that will be inserted. Usually the rows of table referenced by the placeholder have as class css.Same, which means that each row will inherit the class of the preivous row. 
    class: '&C='
};
const anyDay = '&D=$copticFeasts.AnyDay', plusCharCode = 10133, eighthNoteCode = 9834, beamedEighthNoteCode = 9835;
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