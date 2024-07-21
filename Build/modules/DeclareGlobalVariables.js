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
//CONSTANTS
const version = "v8.3 (Addition to btnLakan afterShowPrayers())";
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
const seasonal = {
    giaki: { AR: '', FR: '', EN: '', COP: '', CA: '' }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVjbGFyZUdsb2JhbFZhcmlhYmxlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL21vZHVsZXMvRGVjbGFyZUdsb2JhbFZhcmlhYmxlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyQkEsTUFBTSxNQUFNO0lBaUJWLFlBQVksR0FBZTtRQVhuQixxQkFBZ0IsR0FBVyxFQUFFLENBQUM7UUFZcEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQztRQUN4QixJQUFJLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQyxTQUFTLENBQUM7UUFDaEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUMsUUFBUSxDQUFDO1FBQzlCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxHQUFHLENBQUMsZUFBZSxDQUFDO1FBQzVDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxHQUFHLENBQUMsZUFBZSxDQUFDO1FBQzVDLElBQUksQ0FBQyxhQUFhLEdBQUcsR0FBRyxDQUFDLFlBQVksQ0FBQztRQUN0QyxJQUFJLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQyxTQUFTLENBQUM7UUFDaEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDO1FBQzVCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxHQUFHLENBQUMsZ0JBQWdCLENBQUM7UUFDOUMsSUFBSSxDQUFDLFlBQVksR0FBRyxHQUFHLENBQUMsV0FBVyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQztRQUN0QixHQUFHLENBQUMsUUFBUTtZQUNWLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQztZQUNqQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQyxDQUFDO0lB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