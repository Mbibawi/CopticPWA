//TYPES
type typeBtnLabel = {
  AR?: string;
  FR?: string;
  EN?: string;
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
  showPrayers?: boolean; //Tells whether to show the button's prayers when it is clicked. We need it in some scenarios where the button.onClick() function calls showPrayers(), and we don't hence need showChildButtonsOrPrayers() to call it again
  pursue?: boolean; //this is a boolean that will tell the showchildButtonsOrPrayers() whether to continue after calling the onClick() property of the button
  docFragment?: DocumentFragment;
  any?: any;
};

type bibleVerse = string[];
type bibleChapter = bibleVerse[];
type bibleBook = [{ id: string, human: string, human_long: string, chaptersList: string[] }, bibleChapter[]];
type Bible = bibleBook[];
type bibleBookKeys = { id: string, human: string, human_long: string, chaptersList: string[] };


//CONSTANTS
const version: string =
  "v7.1.2 (Added new prayers to the Psalmody, and reduced the size of PrayersArraysFR by removing '&D=...' from some titles)";
const calendarDay: number = 24 * 60 * 60 * 1000; //this is a day in milliseconds
const containerDiv: HTMLDivElement = document.getElementById(
  "containerDiv") as HTMLDivElement;
const leftSideBar = document.getElementById("leftSideBar") as HTMLDivElement;
const sideBarBtnsContainer: HTMLDivElement =
  leftSideBar.querySelector("#sideBarBtns");
const rightSideBar = document.getElementById("rightSideBar") as HTMLDivElement;
const sideBarTitlesContainer: HTMLDivElement =
  rightSideBar.querySelector("#sideBarBtns");


const toggleDevBtn = document.getElementById("toggleDev") as HTMLButtonElement;
const expandableBtnsPannel: HTMLElement = document.getElementById(
  "inlineBtnsContainer"
);
const ResurrectionDates: number[][] = [
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
const plusCharCode: number = 10133;
const btnClass = "sideBarBtn";
const eighthNoteCode: number = 9834;
const beamedEighthNoteCode: number = 9835;
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
    Prefix.incenseDawn + "IncenseDawnIntro",
    Prefix.commonIncense + "EleysonImas",
    Prefix.bookOfHours + "Psalm50",
    Prefix.commonIncense + "LitaniesIntroduction",
    Prefix.incenseDawn + "SickLitany",
    Prefix.incenseDawn + "TravelersLitany",
    Prefix.incenseDawn + "OblationsLitany",
    Prefix.incenseVespers + "DepartedLitany",
    Prefix.commonPrayer + "AngelsPrayer" + anyDay,
    Prefix.incenseVespers + "LordKeepUsThisNight" + anyDay,
    Prefix.commonIncense + "Doxolgoies",
    Prefix.commonPrayer + "EfnotiNaynan",
    Prefix.commonIncense + "LiturgyEnd"
  ],
  Mass: {
    //those are the sequences of the 'Baptized' mass prayers (starting from Reconciliation) for each mass
    Unbaptized: [
      Prefix.massCommon + "GloryAndHonor" + anyDay,
      Prefix.massCommon + "HallelujahFayBiBi" + anyDay,
      Prefix.massCommon + "HallelujahFayBiBiFast" + anyDay,
      Prefix.massCommon + "BenedictionOfTheLamb" + anyDay,
      Prefix.commonPrayer + "ThanksGiving",
      Prefix.massCommon + "AbsolutionForTheFather" + anyDay,
      Prefix.massCommon + "Tayshoury" + anyDay,
      Prefix.massCommon + "Tishoury" + anyDay,
      Prefix.massCommon + "IntercessionsHymn" + anyDay,
      Prefix.commonPrayer + "Creed"
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
      Prefix.massStGregory + "CallOfTheHolySpiritPart1",
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
      Prefix.massCommon + "CallOfTheHolySpiritPart1",
    ],
    Litanies: [
      Prefix.massCommon + "LitaniesIntroduction" + anyDay,
      Prefix.massCommon + "SaintsCommemoration" + anyDay,
      Prefix.massCommon + "CommemorationOfTheDeparted" + anyDay,
      Prefix.massCommon + "FractionIntroduction" + anyDay,
      Prefix.commonPrayer + "OurFatherWhoArtInHeaven",
      Prefix.commonPrayer + "BlockInTheNameOfOurLord",
      Prefix.massCommon + "PrayerForTheFather" + anyDay,
      Prefix.commonPrayer + "BlockIriniPassi",
      Prefix.massCommon + "AbsolutionPrayerForTheFather" + anyDay,
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

      Prefix.psalmody + "MarenOosht",

      Prefix.psalmody + "Hos1",

      Prefix.psalmody + "LobshHos1",

      Prefix.psalmody + "CommentaryHos1",
      
      Prefix.psalmody + "PsalyOnHos2",

      Prefix.psalmody + "Hos2",

      Prefix.psalmody + "LobshHos2",

      Prefix.psalmody + "Hos3",

      Prefix.psalmody + "Arebsalin",

      Prefix.psalmody + "Tenen",

      Prefix.psalmody + "TenOwehEnthok",

      Prefix.psalmody + "Hos4",

      Prefix.psalmody + "IntroductionToWatesTheotoky",

      Prefix.anchor + "Theotoky", //This is will be replaced with Prefix.psalmody + "Theoktoky&D=" + weekDay

      Prefix.anchor + "Lobsh1Theotoky", //This is will be replaced with Prefix.psalmody + "Lobsh1Theotoky&D=" + weekDay

      Prefix.anchor + "Lobsh2Theotoky", //This is will be replaced with Prefix.psalmody + "Lobsh2Theotoky&D=" + weekDay

      Prefix.anchor + "Lobsh3Theotoky", //This is will be replaced with Prefix.psalmody + "Lobsh3Theotoky&D=" + weekDay

      Prefix.psalmody + "TheotokiesConclusionWates",//!Need to know when Wates and Adam Theotokies are prayed

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

      Prefix.psalmody + "TheotokiesConclusionWates",

    ],
  },
  HolyWeek:
  {
    PassOver: [
      Prefix.HolyWeek + "HourIntroduction&D=$Seasons.HolyWeek",

      Prefix.HolyWeek + "PsalmAndGospel&D=$Seasons.HolyWeek",

      Prefix.HolyWeek + "Commentary&D=$Seasons.HolyWeek",

      Prefix.HolyWeek + "PassoverEnd&D=$Seasons.HolyWeek",

    ],
    Lakan: [
      Prefix.commonIncense + "EleysonImas",
      Prefix.cymbalVerses + "&D=$copticFeasts.HolyThursday",
      Prefix.bookOfHours + "Psalm50",
      Prefix.HolyWeek + "LakanProphecies&D=$copticFeasts.HolyThursday",
      Prefix.HolyWeek + "LakanSermony&D=$copticFeasts.HolyThursday",
      Prefix.massCommon + "BiEhmotGhar",
      Prefix.anchor + "Readings" + anyDay,
      Prefix.commonPrayer + "Agios&D=$copticFeasts.HolyThursday",
      Prefix.anchor + "GospelLitany",
      Prefix.incenseDawn + "SickLitany",
      Prefix.incenseDawn + "TravelersLitany",
      Prefix.massCommon + "SeasonalLitanyOfTheHarvest" + anyDay,
      Prefix.commonPrayer + "KyrieElieson",
      Prefix.massCommon + "LitaniesFinal" + anyDay,
      Prefix.commonPrayer + "KyrieElieson",
      Prefix.massCommon + "PresidentLitany",
      Prefix.incenseVespers + "DepartedLitany",
      Prefix.incenseDawn + "OblationsLitany",
      Prefix.commonPrayer + "CatechumensLitany",
      Prefix.HolyWeek + "LakanPrayer&D=$copticFeasts.HolyThursday",
      Prefix.commonPrayer + "BlockShlil",
      Prefix.commonPrayer + "BlockIriniPassi",
      Prefix.commonPrayer + "ChurchLitany",
      Prefix.commonPrayer + "PopeAndBishopLitany" + anyDay,
      Prefix.commonPrayer + "MeetingsLitany",
      //Insert "Eyn Sophia Si Epros"
      Prefix.commonPrayer + "Creed",
      Prefix.massCommon + "LakanSpasmosAdamLong&D=$copticFeasts.HolyThursday",
      Prefix.massCommon + "DiaconResponseKissEachOther" + anyDay,
      Prefix.placeHolder,
      Prefix.massCommon + "SpasmosAdamShort" + anyDay,
      Prefix.HolyWeek + "LakanAnaphora&D=$copticFeasts.HolyThursday",

    ],
    ThursdayMass: [],
    SaturdayIncenseDawn: [],
    SaturdayMass: [],
  },
};

const bookOfHours: {
  //The 1st element of each hour is a sequence representing the number of psalms in their order (eg.: [10, 11, 12, etc.] which means, Psalm 10, Psalm 11, Psalm 12, etc.). The 2nd element is the label of the button that will be created for this hour
  FirstHour: [number[], typeBtnLabel];
  ThirdHour: [number[], typeBtnLabel];
  SixthHour: [number[], typeBtnLabel];
  NinethHour: [number[], typeBtnLabel];
  EleventhHour: [number[], typeBtnLabel];
  TwelvethHour: [number[], typeBtnLabel];
  VeilHour: [number[], typeBtnLabel];
  MidNight1Hour: [number[], typeBtnLabel];
  MidNight2Hour: [number[], typeBtnLabel];
  MidNight3Hour: [number[], typeBtnLabel]
} = {
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
}

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
  ...celestialBeingsFeasts, ...MartyrsFeasts, ...nonMartyrsFeasts
};

const nonCopticLanguages = [["AR", "العربية"], ["FR", "Français"], ["EN", "English"]];

const copticLanguages = [["COP", "Coptic"], ["CA", "قبطي مُعَرَّبْ"], ['CF', 'Copte en charachères français']];

const allLanguages: string[][] = [...nonCopticLanguages, ...copticLanguages];
Object.fromEntries(allLanguages);

const seasonal = {
  giaki: { AR: '', FR: '', EN: '', COP: '', CA: '' }
};

const Bibles: { AR: [Bible, bibleBookKeys], FR: [Bible, bibleBookKeys], EN: [Bible, bibleBookKeys], COP: [Bible, bibleBookKeys] } = { AR: [undefined, undefined], FR: [undefined, undefined], EN: [undefined, undefined], COP: [undefined, undefined] };

const bookMarks = (() => {
  if (localStorage.bookMarks)
    return JSON.parse(localStorage.bookMarks)
  return []
})();

var userLanguages;
if (localStorage.userLanguages) userLanguages = JSON.parse(localStorage.userLanguages) || undefined;
var defaultLanguage: string = (() => { if (userLanguages) return userLanguages[0] })() || undefined;
var foreingLanguage: string = (() => { if (userLanguages) return userLanguages[1] })() || undefined;
var copticLanguage: string = (() => { if (userLanguages) return userLanguages[2] })() || undefined;

const prayersLanguages: string[] = ["COP", "FR", "CA", "AR"];

var lastScrollTop: number = 0;

const displayModes = ["Normal", "Presentation", "Priest"];

const CommonPrayersArray: string[][][] = []; //an array in which we will group all the common prayers of all the liturgies. It is a subset o PrayersArray
const MassCommonPrayersArray: string[][][] = []; //an array in which we will save the commons prayers specific to the mass (like the Assembly, Espasmos, etc.)
const MassStBasilPrayersArray: string[][][] = [],
  MassStGregoryPrayersArray: string[][][] = [],
  MassStCyrilPrayersArray: string[][][] = [],
  MassStJohnPrayersArray: string[][][] = [],
  FractionsPrayersArray: string[][][] = [],
  DoxologiesPrayersArray: string[][][] = [],
  IncensePrayersArray: string[][][] = [],
  CommunionPrayersArray: string[][][] = [],
  PsalmAndGospelPrayersArray: string[][][] = [],
  CymbalVersesPrayersArray: string[][][] = [],
  PraxisResponsesPrayersArray: string[][][] = [],
  BookOfHoursPrayersArray: string[][][] = [],
  HolyWeekPrayersArray: string[][][] = [],
  PsalmodyPrayersArray: string[][][] = [];
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

var PrayersArrayFR: string[][][] = [];
var lastClickedButton: Button;
var selectedDate: number, //This is the date that the user might have manually selected
  copticDate: string, //The Coptic date is stored in a string not in a number like the gregorian date, this is to avoid complex calculations
  copticMonth: string, //same comment as above
  copticDay: string, //same comment as above
  copticYear: string, //same comment as above
  copticReadingsDate: string, //This is the date of the day's readings (gospel, Catholicon, praxis, etc.). It does not neceissarly correspond to the copticDate
  Season: string, //This is a value telling whether we are during a special period of the year like the Great Lent or the 50 Pentecostal days, etc.
  weekDay: number; //This is today's day of the week (Sunday, Monday, etc.) expressed in number starting from 0
var todayDate: Date;
var isFast: boolean;
type Actor = { EN: string; FR?: string; AR?: string };

const actors: Actor[] = [
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
const PrayersArraysKeys: [string, string, () => string[][][]][] = [
  //!Caution: we needed to make the last element a function that returns the array instead of referrecing the array itself, because when the DeclareGlobalVariables.js file is loaded, the ReadingsPrayersArrays are still empty since the readings texts files are not loaded yet
  [
    Prefix.praxisResponse,
    "PraxisResponsesPrayersArray",
    (): string[][][] => PraxisResponsesPrayersArray,
  ],
  [
    Prefix.psalmResponse,
    "PsalmAndGospelPrayersArray",
    (): string[][][] => PsalmAndGospelPrayersArray,
  ],
  [
    Prefix.gospelResponse,
    "PsalmAndGospelPrayersArray",
    (): string[][][] => PsalmAndGospelPrayersArray,
  ],
  [Prefix.massCommon,
    "MassCommonPrayersArray",
  (): string[][][] => MassCommonPrayersArray],
  [Prefix.commonPrayer,
    "CommonPrayersArray",
  (): string[][][] => CommonPrayersArray],
  [
    Prefix.massStBasil,
    "MassStBasilPrayersArray",
    (): string[][][] => MassStBasilPrayersArray,
  ],
  [
    Prefix.massStCyril,
    "MassStCyrilPrayersArray",
    (): string[][][] => MassStCyrilPrayersArray,
  ],
  [
    Prefix.massStGregory,
    "MassStGregoryPrayersArray",
    (): string[][][] => MassStGregoryPrayersArray,
  ],
  [Prefix.massStJohn,
    "MassStJohnPrayersArray",
  (): string[][][] => MassStJohnPrayersArray],
  [Prefix.doxologies,
    "DoxologiesPrayersArray",
  (): string[][][] => DoxologiesPrayersArray],
  [Prefix.communion,
    "CommunionPrayersArray",
  (): string[][][] => CommunionPrayersArray],
  [Prefix.fractionPrayer,
    "FractionsPrayersArray",
  (): string[][][] => FractionsPrayersArray],
  [
    Prefix.cymbalVerses,
    "CymbalVersesPrayersArray",
    (): string[][][] => CymbalVersesPrayersArray,
  ],
  [
    Prefix.bookOfHours,
    "BookOfHoursPrayersArray",
    (): string[][][] => BookOfHoursPrayersArray,
  ],
  [Prefix.HolyWeek,
    "HolyWeekPrayersArray",
  (): string[][][] => HolyWeekPrayersArray],
  [Prefix.incenseDawn,
    "IncensePrayersArray",
  (): string[][][] => IncensePrayersArray],
  [Prefix.incenseVespers,
    "IncensePrayersArray",
  (): string[][][] => IncensePrayersArray],
  [Prefix.commonIncense,
    "IncensePrayersArray",
  (): string[][][] => IncensePrayersArray],
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
    "PsalmodyPrayersArray",
  (): string[][][] => PsalmodyPrayersArray],
  [Prefix.prayersArray,
    'PrayersArrayFR',
  (): string[][][] => PrayersArrayFR],
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
].forEach(obj => Object.freeze(obj))