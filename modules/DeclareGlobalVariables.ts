type typeBtnLabel = {
  DL?: string;//DL stands for "Default Language"
  FL?: string;//FL stands for "Foreign"
};

type typeButton = {
  btnID: string; //the id is used to exclude a button from being displayed in certain scenarios: like the Go Back button in some cases
  label: typeBtnLabel; //contains the text (in different languages) that is displayed in the html element created to show the button
  parentBtn?: Button; //a button that when clicked our button (which is its child) is displayed
  children?: Button[]; //a list of child buttons that are displayed in the left side bar when the button is clicked
  inlineBtns?: Button[]; //a list of button that are shown in the main area above the text (the buttons in the children[] list of buttons are shown in the left side-bar)
  prayersSequence?: string[]; //the sequence of prayers that will be dispolayed when the button is clicked. Each "prayer" is a string representing an id (the id corresponds to the title of one of tables in the Word document from which the text was extracted). A function loops the prayersArray (see below) and looks for an array of string[][] which 1st element is = to the "prayer". If it finds it, the text is retrieved and shown in html elements
  prayersArray?: string[][][]; //an array containing all the Word tables retrived from the Word document. Each table is a string[][], where each string[] element is a row of the table. Each row is structred like ['prayer id', 'prayer text in a given language', 'prayer text in another language', etc.]. prayersArray is the array where the text of the button's prayers will be looked for when the button is clicked.
  retrieved?: boolean; //not used any more but kept in case
  languages?: string[]; //the list of languages in which the prayers that will be shown by the button are available (for example, the button showing the gospel will not have the coptic language in its languages[] because the text extracted from the ppt slides was only available in Arabic, French and English)
  onClick?: Function; //a function that is called when the html element created for the button is clicked
  afterShowPrayers?: Function; //a function that will be called after the prayers of the button are processed and appended as html children of containerDiv
  cssClass?: string; //the CSS class that will be added to the html element created to display the button
  backGroundImage?: string; //The link for the image that will be shown in the backGround of the Button
  pursue?: boolean; //this is a boolean that will tell the showchildButtonsOrPrayers() whether to continue after calling the onClick() property of the button
  docFragment?: DocumentFragment;
  html?: HTMLElement[];
  any?: any;
};

class Button {
  private _btnID: string;
  private _label: typeBtnLabel;
  private _parentBtn: Button;
  private _children: Button[];
  private _prayersSequence: string[];
  private _backGroundImage: string = '';
  private _prayersArray: string[][][];
  private _languages: string[];
  private _onClick: Function;
  private _afterShowPrayers: Function;
  private _cssClass: string;
  private _docFragment: DocumentFragment;
  private _html: HTMLElement[];



  constructor(btn: typeButton) {
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
  set label(lbl: typeBtnLabel) {
    this._label = lbl;
  }
  set parentBtn(parentBtn: Button) {
    this._parentBtn = parentBtn;
  }
  set prayersSequence(btnPrayers: string[]) {
    this._prayersSequence = btnPrayers;
  }
  set backGroundImage(image) {
    this._backGroundImage = image;
  }
  set prayersArray(btnPrayersArray: string[][][]) {
    this._prayersArray = btnPrayersArray;
  }
  set languages(btnLanguages: string[]) {
    this._languages = btnLanguages;
  }
  set onClick(fun: Function) {
    this._onClick = fun;
  }
  set afterShowPrayers(fun: Function) {
    this._afterShowPrayers = fun;
  }
  set children(children: Button[]) {
    this._children = children;
  }
  set cssClass(cssClass: string) {
    this._cssClass = cssClass;
  }
  set docFragment(docFragment: DocumentFragment) {
    this._docFragment = docFragment;
  }
  set html(html: HTMLElement[]) {
    this._html = html;
  }
}

const Btn: { [index: string]: Button } = {};

//CONSTANTS
const version: string =
  "v9.2 (Fixes to the Jonah Fast)";
const calendarDay: number = 24 * 60 * 60 * 1000; //this is a day in milliseconds
const containerDiv: HTMLDivElement = document.getElementById(
  "containerDiv") as HTMLDivElement;
const leftSideBar = document.getElementById("leftSideBar") as HTMLDivElement;
const sideBarBtnsContainer: HTMLDivElement =
  leftSideBar.querySelector("#sideBarBtns");
const rightSideBar = document.getElementById("rightSideBar") as HTMLDivElement;
const sideBarTitlesContainer: HTMLDivElement =
  rightSideBar.querySelector("#sideBarBtns");
const expandableBtnsPannel: HTMLElement = document.getElementById("inlineBtnsContainer");

const copticMonths: { AR: string; FR: string; EN: string }[] = [
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
  changeClass: 'CCSS_',
};

const anyDay = '&D=$copticFeasts.AnyDay',
  plusCharCode: number = 10133,
  btnClass = "sideBarBtn",
  eighthNoteCode: number = 9834,
  beamedEighthNoteCode: number = 9835,
  inlineBtnClass = "inlineBtn",
  inlineBtnsContainerClass = "inlineBtns",
  hidden = "hiddenElement";


const ReadingsArrays = {
  PraxisArrayFR: [] as string[][][],
  CatholiconArrayFR: [] as string[][][],
  StPaulArrayFR: [] as string[][][],
  SynaxariumArrayFR: [] as string[][][],
  GospelMassArrayFR: [] as string[][][],
  GospelVespersArrayFR: [] as string[][][],
  GospelMorningArrayFR: [] as string[][][],
  GospelNightArrayFR: [] as string[][][],
  PropheciesDawnArrayFR: [] as string[][][],
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
],

  MinorLordFeasts = [
    copticFeasts.Epiphany,
    copticFeasts.Circumcision,
    copticFeasts.CanaWedding,
    copticFeasts.EntryToEgypt,
    copticFeasts.EntryToTemple,
  ],
  lordFeasts = [...GreatLordFeasts, ...MinorLordFeasts],
  HolyWeek = [
    copticFeasts.HolyMonday,
    copticFeasts.HolyTuseday,
    copticFeasts.HolyWednsday,
    copticFeasts.HolyThursday,
    copticFeasts.HolyFriday,
  ],
  copticFasts = [
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
}

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
}

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
  
}


const stMaryFeasts = {
  StMaryFeast: "1612",//Ascension of St. Mary Body
  StMary1: "0712", //Annonciation of the birth of St. Mary
  StMary2: "0109", //birth of St. Mary
  StMary3: "0304", //Entry of St. Mary to the Temple
  StMary4: "2105", //Departure of St. Mary
  StMary5: "2110", //عيد حل الحديد  
}

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

const allLanguages: string[][] = [...nonCopticLanguages, ...copticLanguages];
Object.fromEntries(allLanguages);

var userLanguages;
if (localStorage.userLanguages)
  userLanguages = JSON.parse(localStorage.userLanguages) || undefined;

var defaultLanguage: string = (() => { if (userLanguages) return userLanguages[0] })() || undefined;;

var foreingLanguage: string = (() => { if (userLanguages) return userLanguages[1] })() || undefined;;

var copticLanguage: string = (() => { if (userLanguages) return userLanguages[2] })() || undefined;;

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
    return JSON.parse(localStorage.bookMarks)
  return []
})();

var userLanguages;
if (localStorage.userLanguages) userLanguages = JSON.parse(localStorage.userLanguages) || undefined;

const prayersLanguages: string[] = ["COP", "FR", "CA", "AR"];

var lastScrollTop: number = 0;

const displayModes = ["Normal", "Presentation", "Priest"];

const CommonArray: string[][][] = []; //an array in which we will group all the common prayers of all the liturgies. It is a subset o PrayersArray
const MassCommonArray: string[][][] = []; //an array in which we will save the commons prayers specific to the mass (like the Assembly, Espasmos, etc.)
const MassStBasilArray: string[][][] = [],
  MassStGregoryArray: string[][][] = [],
  MassStCyrilArray: string[][][] = [],
  MassStJohnArray: string[][][] = [],
  FractionsArray: string[][][] = [],
  DoxologiesArray: string[][][] = [],
  IncenseArray: string[][][] = [],
  CommunionArray: string[][][] = [],
  PsalmAndGospelArray: string[][][] = [],
  CymbalVersesArray: string[][][] = [],
  PraxisResponsesArray: string[][][] = [],
  CatholiconResponsesArray: string[][][] = [],
  BookOfHoursArray: string[][][] = [],
  HolyWeekArray: string[][][] = [],
  PsalmodyArray: string[][][] = [];

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
//VARS

type Actor = { Show: boolean, EN: string; FR?: string; AR?: string };

const actors: Actor[] = [
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
    .map((actor: Actor) => {
      actor[0].Show = actor[1];
      return actor[0]
    }));

allLanguages.map((lang) => textAmplified.push([lang[0], false]));
if (localStorage.textAmplified === undefined) {
  localStorage.textAmplified = JSON.stringify(textAmplified);
}
if (!localStorage.displayMode || localStorage.displayMode === "undefined") {
  localStorage.displayMode = displayModes[0];
}
var PrayersArrayFR;

const PrayersArraysKeys: [string, string, () => string[][][]][] = [
  //!Caution: we needed to make the last element a function that returns the array instead of referrecing the array itself, because when the DeclareGlobalVariables.js file is loaded, the ReadingsPrayersArrays are still empty since the readings texts files are not loaded yet
  [
    Prefix.praxisResponse,
    "PraxisResponsesArray",
    (): string[][][] => PraxisResponsesArray,
  ],
  [
    Prefix.catholiconResponse,
    "CatholiconResponsesArray",
    (): string[][][] => CatholiconResponsesArray,
  ],
  [
    Prefix.psalmResponse,
    "PsalmAndGospelArray",
    (): string[][][] => PsalmAndGospelArray,
  ],
  [
    Prefix.gospelResponse,
    "PsalmAndGospelArray",
    (): string[][][] => PsalmAndGospelArray,
  ],
  [Prefix.massCommon,
    "MassCommonArray",
  (): string[][][] => MassCommonArray],
  [Prefix.commonPrayer,
    "CommonArray",
  (): string[][][] => CommonArray],
  [
    Prefix.massStBasil,
    "MassStBasilArray",
    (): string[][][] => MassStBasilArray,
  ],
  [
    Prefix.massStCyril,
    "MassStCyrilArray",
    (): string[][][] => MassStCyrilArray,
  ],
  [
    Prefix.massStGregory,
    "MassStGregoryArray",
    (): string[][][] => MassStGregoryArray,
  ],
  [Prefix.massStJohn,
    "MassStJohnArray",
  (): string[][][] => MassStJohnArray],
  [Prefix.doxologies,
    "DoxologiesArray",
  (): string[][][] => DoxologiesArray],
  [Prefix.communion,
    "CommunionArray",
  (): string[][][] => CommunionArray],
  [Prefix.fractionPrayer,
    "FractionsArray",
  (): string[][][] => FractionsArray],
  [
    Prefix.cymbalVerses,
    "CymbalVersesArray",
    (): string[][][] => CymbalVersesArray,
  ],
  [
    Prefix.bookOfHours,
    "BookOfHoursArray",
    (): string[][][] => BookOfHoursArray,
  ],
  [Prefix.HolyWeek,
    "HolyWeekArray",
  (): string[][][] => HolyWeekArray],
  [Prefix.incenseDawn,
    "IncenseArray",
  (): string[][][] => IncenseArray],
  [Prefix.incenseVespers,
    "IncenseArray",
  (): string[][][] => IncenseArray],
  [Prefix.commonIncense,
    "IncenseArray",
  (): string[][][] => IncenseArray],
  [
    Prefix.gospelMass,
    "ReadingsArrays.GospelMassArrayFR",
    (): string[][][] => ReadingsArrays.GospelMassArrayFR,
  ],
  [
    Prefix.gospelMorning,
    "ReadingsArrays.GospelDawnArrayFR",
    (): string[][][] => ReadingsArrays.GospelMorningArrayFR,
  ],
  [
    Prefix.gospelVespers,
    "ReadingsArrays.GospelVespersArrayFR",
    (): string[][][] => ReadingsArrays.GospelVespersArrayFR,
  ],
  [
    Prefix.gospelNight,
    "ReadingsArrays.GospelNightArrayFR",
    (): string[][][] => ReadingsArrays.GospelNightArrayFR,
  ],
  [
    Prefix.stPaul,
    "ReadingsArrays.StPaulArrayFR",
    (): string[][][] => ReadingsArrays.StPaulArrayFR,
  ],
  [
    Prefix.Catholicon,
    "ReadingsArrays.CatholiconArrayFR",
    (): string[][][] => ReadingsArrays.CatholiconArrayFR,
  ],
  [
    Prefix.praxis,
    "ReadingsArrays.PraxisArrayFR",
    (): string[][][] => ReadingsArrays.PraxisArrayFR,
  ],
  [
    Prefix.synaxarium,
    "ReadingsArrays.SynaxariumArrayFR",
    (): string[][][] => ReadingsArrays.SynaxariumArrayFR,
  ],
  [
    Prefix.prophecies,
    "ReadingsArrays.PropheciesDawnArrayFR",
    (): string[][][] => ReadingsArrays.PropheciesDawnArrayFR,
  ],
  [Prefix.psalmody,
    "PsalmodyArray",
  (): string[][][] => PsalmodyArray],
  [Prefix.prayersArray,
    'PrayersArrayFR',
  (): string[][][] => PrayersArrayFR],
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