function Sequences() {
  return {
    Incense: [
      //This is the generic sequence of any incense office (morning or evening). The onClick function triggered by btnIncenseDawn and btnIncenseVespers, will remove what is irrelevant and add keeps what needs to be kept
      Prefix.commonIncense + "Introduction",
      Prefix.bookOfHours + "Psalm50",
      Prefix.commonIncense + "LitaniesIntro",
      Prefix.incenseDawn + "SickLitany",
      Prefix.incenseDawn + "TravelersLitany",
      Prefix.incenseDawn + "OblationsLitany",
      Prefix.incenseVespers + "DepartedLitany",
      Prefix.bookOfHours + "AngelsPrayer",
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
        Prefix.massCommon + "IntercessionsHymn",
        Prefix.commonPrayer + "Creed"
      ], //Those are the prayers of the 'Unbaptized Mass'
      StBasil: [
        Prefix.massCommon + "ReconciliationComment",
        Prefix.massStBasil + "Reconciliation",
        Prefix.massCommon + "EndOfReconciliation",
        Prefix.massStBasil + "Anaphora",
        Prefix.massStBasil + "Agios",
        Prefix.massStBasil + "InstitutionNarrative",
        Prefix.massCommon + "AsWeCommemorate",
      ], //The sequence of prayers of St Basil Mass (starting from Reconciliation)
      StGregory: [
        Prefix.massCommon + "ReconciliationComment",
        Prefix.massStGregory + "Reconciliation",
        Prefix.massCommon + "EndOfReconciliation",
        Prefix.massStGregory + "Anaphora",
        Prefix.massStGregory + "Agios",
        Prefix.massStGregory + "LitaniesIntro",
        Prefix.massStGregory + "Litanies",
        Prefix.massStGregory + "FractionIntroduction"
      ], //The sequence of prayers of St Gregory Mass (starting from reconciliation)
      StCyril: [
        Prefix.massCommon + "ReconciliationComment",
        Prefix.massStCyril + "Reconciliation",
        Prefix.massCommon + "EndOfReconciliation",
        Prefix.massStCyril + "Anaphora",
        Prefix.massStCyril + "Agios",
        Prefix.massStCyril + "LitaniesIntro",
      ], // the sequence of prayers of St Cyril Mass (starting from Reconciliation)
      StJohn: [], // the sequence of prayers of St John Mass (tarting from Reconciliation)
      CallOfHolySpirit: [
        Prefix.massCommon + "Invocation",
      ],
      Litanies: [
        Prefix.massCommon + "LitaniesIntro",
        Prefix.massCommon + "SaintsCommemoration",
        Prefix.massCommon + "CommemorationOfTheDeparted",
        Prefix.massCommon + "FractionIntroduction",
        Prefix.commonPrayer + "OurFatherInHeaven",
        Prefix.commonPrayer + "BlockInTheNameOfOurLord",
        Prefix.massCommon + "PrayerForTheFather",
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

        Prefix.psalmody + "TheotokiesConclusionXXX",//!Need to know when Watos and Adam Theotokies are prayed

        Prefix.bookOfHours + "WeExaltYouStMary",

        Prefix.commonPrayer + "Creed",

        Prefix.bookOfHours + "HolyLordOfSabaot",

        Prefix.psalmody + "ConcludingHymn",

        Prefix.bookOfHours + "HolyLordOfSabaot",

        Prefix.commonPrayer + "OurFatherInHeaven",

        Prefix.bookOfHours + "Agios",

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
    HolyWeek:
    {
      ThursdayMass: [],
      SaturdayIncenseDawn: [],
      SaturdayMass: [],
    },
    Prosternation:
      [
        Prefix.commonIncense + "Introduction",
        Prefix.anchor + 'Cymbals',
        Prefix.cymbalVerses,//!do we need this?
        Prefix.bookOfHours + "Psalm50",
        Prefix.anchor + 'PropheciesIntro',//!provide
        Prefix.anchor + 'Prophecies',
        Prefix.anchor + 'PropheciesEnd',//!provide
        Prefix.massCommon + "WeWorshipYouChrist",
        Prefix.anchor + 'StPaulIntro',//!provide
        Prefix.anchor + 'StPaul',
        Prefix.anchor + 'StPaulEnd',//!provide
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
}

function ReadingsIntrosAndEnds() {
  return {
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
}

function bookOfHours(): { [index: string]: [number[], typeBtnLabel] } {
  return {
    //The first element is the array that will be populated with the text tables. The second element is the sequence of the hour's psalms

    H1: [
      [1, 2, 3, 4, 5, 6, 8, 11, 12, 14, 15, 18, 24, 26, 62, 66, 69, 112, 142],
      getLabel({
        AR: "بَاكِرْ",
        FR: "Matin",
        EN: "Morning"
      }),
    ],
    H3: [
      [19, 22, 23, 25, 28, 29, 33, 40, 42, 44, 45, 46],
      getLabel({
        AR: "السَاعَةِ الثَالِثَةِ",
        FR: "3ème heure",
        EN: "Third Hour",
      }),
    ],
    H6: [
      [53, 56, 60, 62, 66, 69, 83, 84, 85, 86, 90, 92],
      getLabel({
        AR: "السَاعَةِ السَادِسَةِ",
        FR: "6ème heure",
        EN: "6th Hour",
      }),
    ],
    H9: [
      [95, 96, 97, 98, 99, 100, 109, 110, 111, 112, 114, 115],
      getLabel({
        AR: "السَاعَةِ التَاسِعَةِ",
        FR: "9ème heure",
        EN: "9th Hour",
      }),
    ],
    H11: [
      [116, 117, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128],
      getLabel({
        AR: "السَاعَةِ الحَادِيَةِ عَشْرِ (الغروب)",
        FR: "11ème heure",
        EN: "11th Hour",
      }),
    ],
    H12: [
      [129, 130, 131, 132, 133, 136, 137, 140, 141, 145, 146, 147],
      getLabel({
        AR: "السَاعَةِ الثانية عَشْرِ (النوم)",
        FR: "12ème heure",
        EN: "12th Hour",
      }),
    ],
    HV: [
      [
        4, 6, 12, 15, 24, 26, 66, 69, 22, 42, 56, 85, 90, 96, 109, 114, 115, 120, 128, 129, 130, 131, 132, 133, 136, 140, 145, 118,
      ],
      getLabel({
        AR: "صَلاةِ السِتَارْ",
        FR: "Femeture du voile",
        EN: "Closing of the Veil",
      }),
    ],
    HMD1: [
      [3, 6, 12, 69, 85, 90, 116, 117, 118],
      getLabel({
        AR: "الخِدْمَة الأولى مِن صَلاةِ نِصْفِ الليل",
        FR: "Miniuit 1er service",
        EN: "Mid Night 1st Service",
      }),
    ],
    HMD2: [
      [119, 120, 121, 122, 123, 124, 125, 126, 127, 128],
      getLabel({
        AR: "الخِدْمَة الثانِيَة مِنْ صَلاةِ نِصْفِ الليل",
        FR: "Miniuit 2ème service",
        EN: "Mid Night 2nd Service",
      }),
    ],
    HMD3: [
      [129, 130, 131, 132, 133, 136, 137, 140, 141, 145, 146, 147],
      getLabel({
        AR: "الخِدْمَة الثَالِثَةِ مِنْ صَلاةِ نِصْفِ الليل",
        FR: "Miniuit 3ème service",
        EN: "Mid Night 3rd Service",
      }),
    ],
  };
}

[
  Sequences,
  bookOfHours,
  ReadingsIntrosAndEnds,
].forEach(obj => Object.freeze(obj));


Btn.MainMenu = new Button({
  btnID: "btnMain",
  label: getLabel({
    AR: "العودة إلى القائمة الرئيسية",
    FR: "Retour au menu principal",
  }),
  backGroundImage: "url(./assets/btnMassBackground.jpg)",
  onClick: () => {
    Btn.MainMenu.children = [
      Btn.Mass,
      Btn.IncenseOffice,
      Btn.DayReadings,
      Btn.BookOfHours,
      Btn.Psalmody,
      Btn.Bible
    ];

    if (copticReadingsDate === copticFeasts.PalmSunday) {
      Btn.MainMenu.children.splice(Btn.MainMenu.children.length - 1, 0, Btn.HW);
      Btn.MainMenu.children.splice(Btn.MainMenu.children.indexOf(Btn.Psalmody), 1);
    };

    if (Season === Seasons.HolyWeek)
      Btn.MainMenu.children = [Btn.HW, Btn.BookOfHours];

    if (Kiahk.includes(Season))
      Btn.Psalmody.label = getLabel({
        AR: "الإبصلمودية الكيهكية",
        FR: "Psalmodie de Kiahk",
      });


    if (localStorage.editingMode === "true")
      Btn.MainMenu.children.push(Btn.Edit);

    [defaultLanguage, foreingLanguage].forEach(lang => getBibleVersion(lang, false))

  },
});

Btn.GoToPreviousMenu = new Button({
  btnID: "btnGoBack",
  label: getLabel({ AR: "السابق", FR: "Retour", EN: "Go Back" }),
  backGroundImage: "url(./assets/btnMassBackground.jpg)",
  onClick: () => {
    scrollToTop(); //scrolling to the top of the page
  },
});

Btn.Mass = new Button({
  btnID: "btnMass",
  label: getLabel({ AR: "القداسات", FR: "Messes", EN: "Mass" }),
  onClick: (returnChildren: boolean = false) => {
    if (!Btn.Mass.children)
      Btn.Mass.children = [
        Btn.IncenseMorning,
        Btn.MassUnBaptised,
        Btn.MassBaptised];
    if (returnChildren) return Btn.Mass.children;
  },
});

Btn.MassUnBaptised = new Button({
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
    Btn.MassUnBaptised.children = Btn.DayReadings.onClick(true);

    let btnsPrayersSequence = Sequences().Mass.Unbaptized;

    (function adaptAlleluiaFayBiBiAndTayshoury() {

      Btn.MassUnBaptised.prayersSequence = adaptPrayersSequence();

      function adaptPrayersSequence(): string[] {
        //If we are not during a fast period or we are during a fast period but today is either Saturday or Sunday, or a Lord Feast, we will remove Hallelujah Ge Evmevi and Tishoury, in order to keep Hallelujah Faybibi and Tayshouri
        if (!isFast
          ||
          [0, 6].includes(weekDay)
          ||
          lordFeasts.find(date => [copticDate, copticReadingsDate].includes(date))
          ||
          copticFeasts.Coptic29th)
          return btnsPrayersSequence
            .filter(title =>
              ![Prefix.massCommon + "AlleluiaFayBiBiFast", Prefix.massCommon + "Tishoury"].includes(splitTitle(title)[0]));
        else return ifIsFast();

        function ifIsFast(): string[] {
          if (!isFast) return;
          if ([Seasons.GreatLent, Seasons.JonahFast].includes(Season)) {
            //We are either during the week days of the Great Lent, or the 3 days of Jonah Fast
            [
              ["AlleluiaFayBiBiFast", "AlleluiaFayBiBi&D=$Seasons.GreatLent"], //Replacing "Halleljah Ge Evmevi" with "Halleluja E Ikhon"
              ["Tishoury", "TishouryGreatLent"]]   //Replacing "Tishoury" with "Ensoty Tishoury"
              .forEach(array => btnsPrayersSequence[btnsPrayersSequence.indexOf(Prefix.massCommon + array[0])] = Prefix.massCommon + array[1]);
          }


          //Else, we will remove 'Hellulja Fay Bibi'and keep only 'Hellulja Ge Evmev'i". We will also remove Tayshoury in order to keep only Tishoury 
          return btnsPrayersSequence
            .filter(title =>
              ![Prefix.massCommon + "AlleluiaFayBiBi", Prefix.massCommon + "Tayshoury"].includes(splitTitle(title)[0]));
        }
      };

    })();

    scrollToTop();
    return Btn.MassUnBaptised.prayersSequence;
  },
  afterShowPrayers: async (btn = Btn.MassUnBaptised) => {
    let btnDocFragment = btn.docFragment;

    if (Btn.Prosternation.children?.includes(btn))
      return insertBookOfHoursButton();

    const children = Array.from(btnDocFragment.querySelectorAll('div'));

    Btn.IncenseMorning.afterShowPrayers(btn);//By calling the afterShowPrayers() of btnIncenseMorning and passing btnMassUnbaptised as argument, the function will call hideGodHaveMercyOnUsIfBishop() and will return. This will create an expandable button for the "PrayThatGodHaveMercyOnUs" dicaon response

    (function insertHisFoundationsAndGodHaveMercy() {
      if (![Seasons.GreatLent, Seasons.JonahFast].includes(Season)) return;//The following only applies during the Great Lent the 3 days of Jonah Fast (not the 4th day) that's why we check if isFast === true
      if ([6, 0].includes(todayDate.getDay())) return;

      let titles: string[] = [
        Prefix.massCommon + "HisFoundations",
        Prefix.incenseDawn + "GodHaveMercyOnUsRefrain",
      ];

      let tables: string[][][] = titles.map(title => findTable(title) || undefined);//We retrieve the 3 tables by their titles

      if (!tables?.length) return;

      const anchor = findAnchor(`${Prefix.anchor}WeHaveBeenSaved`, btnDocFragment)?.previousElementSibling as HTMLDivElement;//This is the html element before which we will insert the retrived tables
      if (!anchor) return console.log('The anchor was not found');

      insertTablesBeforeAnchor(tables, anchor, prayersLanguages);

    })();

    const readingsAnchor = findAnchor(`${Prefix.anchor}Readings`,
      btnDocFragment); //this is the html element before which we will insert all the readings and responses

    if (!readingsAnchor) return console.log('The anchor was not found');

    (function insertIntercessionsHymnsForSeasons() {
      let seasonalIntercessions = MassCommonArray.filter(
        (table) =>
          RegExp('Intercessions\.\*D=').test(Title(table))
          &&
          (tableMatchingDates(Title(table), [copticDate, Season]))
      );
      if (!seasonalIntercessions.length)
        return console.log("No Seasonsal Intercession Hymns");

      seasonalIntercessions = getUniqueValuesFromArray(seasonalIntercessions) as string[][][];

      if ([Seasons.PentecostalDays, Seasons.Ascension].includes(Season)) {
        const stMaykel = children.find(div => div.dataset?.group.endsWith('IntercessionsStMaykel'));
        if (stMaykel) children.filter(div => div.dataset.root === stMaykel.dataset.root)
          .forEach(div => div.remove());//We remove the intercessions of St. Maykel because they will be replaced by those of the Pentocostal days
      }

      seasonalIntercessions.forEach(table => {
        const anchor = setIntercessionsAnchor(Title(table));
        if (!anchor) return;
        insertTablesBeforeAnchor([table], anchor, getLanguages(Title(table)));
      });

      function setIntercessionsAnchor(title: string): HTMLDivElement {
        if (!title) return;
        let insertion: string = "IntercessionsStMary";

        if ([Seasons.JonahFast].includes(Season))
          insertion = "IntercessionsStJohnBaptist";
        else if ([Seasons.PentecostalDays, Seasons.Ascension].includes(Season) && !title.includes('IntercessionsStMaykel'))
          insertion = "IntercessionsStMarc";//The "By the intercessions of St Maykel..." will be inserted after the intercessions of St. Mary

        if (!insertion) return;
        const sameRoot = children.filter(div => div.dataset?.root.startsWith(`${Prefix.massCommon}${insertion}`));//!We must specify that this is a "startWith" search of the dataRoot

        if (!sameRoot?.length) return;

        return sameRoot[sameRoot.length - 1].nextElementSibling as HTMLDivElement
      }
    })();

    (function insertBiEhmotGharExpandable() {
      //After inserting the Intercessions hyms, we will isnert an expandable for Bi Ehmot Ghar
      const biEhmotGhar = new Button({
        btnID: 'btnBiEhmotGhar',
        label: getLabel({
          AR: "بي إهموت غار",
          FR: "Ⲡⲓϩ̀ⲙⲟⲧ ⲅⲁⲣ"
        }),
        cssClass: css.inlineButton,
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
        cssClass: css.inlineButton,
        languages: prayersLanguages,
        docFragment: new DocumentFragment(),
        prayersSequence: [Prefix.massCommon + "IAghabi"],
      });

      insertExpandableBtn([biEhmotGhar, IAghabi], readingsAnchor, 'beforebegin', 'resp');

    })();

    insertBookOfHoursButton();

    await insertMassReadingsAndResponses();

    async function insertMassReadingsAndResponses() {
      const Intros = ReadingsIntrosAndEnds();

      let specialResponse: (string[][] | HTMLDivElement)[];

      //St. Paul
      await insertMassReading(
        Prefix.stPaul,
        [Intros.stPaulIntro,
        Intros.stPaulEnd]
      );

      (function insertCatholiconResponse() {
        let cathResp = CatholiconResponsesArray.filter(tbl => tableMatchingDates(Title(tbl), [Season, copticDate]));

        if (!cathResp.length) cathResp = CatholiconResponsesArray.filter(tbl => Title(tbl) === Prefix.catholiconResponse + css.Title);

        if (!cathResp.length) return;

        const response = new Button({
          btnID: 'btnCatholiconResponse',
          label: getLabel({
            AR: cathResp[0][0][prayersLanguages.indexOf('AR') + 1], FR: cathResp[0][0][prayersLanguages.indexOf('FR') + 1]
          }),
          cssClass: css.inlineButton,
          docFragment: new DocumentFragment(),
          onClick: () => {
            let langs: string[];
            cathResp.map((table: string[][]) => {
              langs = getLanguages(Title(table));

              showPrayers({
                table: table,
                languages: langs,
                position: response.docFragment,
                clearContainerDiv: false,
                clearRightSideBar: false
              });
            })

          }
        });

        insertExpandableBtn([response], readingsAnchor, 'beforebegin');
      })();

      //Catholicon
      await insertMassReading(
        Prefix.Catholicon,
        [Intros.CatholiconIntro,
        Intros.CatholiconEnd]
      );

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
            PraxisResponsesArray.filter(
              (table) => !Title(table)?.includes('&D=$saintsFeasts.') && tableMatchingDates(Title(table), [copticDate, copticReadingsDate]));//We look for a response for the copticDate or copticReadingsDate, and we exclude responses for saints feasts

        if (!specialResponse.length)
          specialResponse = PraxisResponsesArray.filter(
            (table) => tableMatchingDates(Title(table), [Season]));//We look for a response for the Season


        if (isStMaryFeast || copticDay === '21' || !specialResponse.length)
          return ifNoSpecificResponse();
        else return ifSpecificResponse();

        function ifSpecificResponse() {
          if (Season === Seasons.GreatLent) {
            // During the Great Lent, we should get  2 tables ('Sundays', and 'Week') for this season. We will keep the relevant table accoding to the day of the week

            weekDay === 0 || weekDay === 6 ?
              specialResponse =
              specialResponse.filter((table: string[][]) =>
                Title(table)?.includes("Sundays&D="))
              :
              specialResponse =
              specialResponse.filter((table: string[][]) => Title(table)?.includes("Week&D="));
          }

          if (Season === Seasons.ApostlesFast || copticDate === copticFeasts.Apostles)
            specialResponse = specialResponse.filter((tbl: string[][]) => !['beforeCatholicon', 'afterPraxis'].find(w => Title(tbl).includes(w)));

          //We insert the special response between the first and 2nd rows
          specialResponse = insertTablesBeforeAnchor(getUniqueValuesFromArray(specialResponse as string[][][]) as string[][][], readingsAnchor, prayersLanguages)[0];


          insertSaintsResponse(specialResponse as HTMLDivElement[]);
        };

        function ifNoSpecificResponse() {
          let noSeasonResponse: (string[] | HTMLDivElement)[] = findTable(
            Prefix.praxisResponse,
            PraxisResponsesArray) || undefined;

          if (!noSeasonResponse) return;

          noSeasonResponse = insertTablesBeforeAnchor([noSeasonResponse as string[][]], readingsAnchor, getLanguages(Prefix.praxisResponse))[0];

          insertSaintsResponse(noSeasonResponse as HTMLDivElement[]);
        };


        function insertSaintsResponse(responses: HTMLDivElement[]) {
          if (!responses) return;

          const anchor = responses.find(div => div?.id === `${Prefix.anchor}Saints`);

          if (!anchor) return console.log('The anchor was not found'); //If no placeHolder is found, it means that we are during a special Season (not a 'NoSeason' period), and no placeHolder for the saints response is included

          if (!Object.values(saintsFeasts).includes(copticDate)) return;//It means that today is not a saint feast

          specialResponse = PraxisResponsesArray.filter(
            (table) => Title(table)?.includes('&D=$saintsFeasts.') && tableMatchingDates(Title(table), [copticDate]));

          if (!specialResponse.length) return;

          insertTablesBeforeAnchor(specialResponse as string[][][], anchor, getLanguages(Prefix.praxisResponse));
        }
      })();

      //Praxis
      await insertMassReading(
        Prefix.praxis,
        [Intros.praxisIntro,
        Intros.praxisEnd]
      );

      (function insertAfterPraxisResponse() {
        if (Season !== Seasons.ApostlesFast && copticDate !== copticFeasts.Apostles) return;
        //In the Aposltes fast, and Apostles feast, there is a special response after the Praxis and before the Synaxarium

        let title: string = 'afterPraxis&D=$';
        if (copticDate === copticFeasts.Apostles)
          title += 'copticFeasts.Apostles'
        else if (Season === Seasons.ApostlesFast)
          title += 'Seasons.ApostlesFast';

        insertTablesBeforeAnchor(PraxisResponsesArray.filter(tbl => RegExp(title.replace('$', '\\$')).test(Title(tbl))), readingsAnchor, getLanguages(Prefix.praxisResponse));

      })();

      await insertSynaxarium();

      await insertAgiosAndGospel();

      async function insertSynaxarium() {
        if (Season === Seasons.PentecostalDays) return;//We do not read the Synaxarium during the 50 Pentecostal days
        const intro = { ...Intros.synaxariumIntro };
        Object.entries(intro)
          .forEach(entry =>
            intro[entry[0]] =
            entry[1]
              .replace("theday", Number(copticDay).toString())
              .replace("themonth",
                copticMonths[Number(copticMonth)][entry[0]]
              ));

        await insertMassReading(
          Prefix.synaxarium,
          [intro,
            undefined],
          copticDate
        ); //!Caution: we must pass the copticDate for the 'date' argument, otherwise it will be set to the copticReadingsDate by default, and we will get the wrong synaxarium

        const titleRow = findAnchor(`${Prefix.synaxarium}\\&D\\=${copticDate}`, btnDocFragment);
        titleRow.insertAdjacentElement('afterend', titleRow.previousElementSibling);//We move the introduction after the title of the Synaxarium reading
     
      };

      async function insertAgiosAndGospel() {
        (function insertSepcialAgiosIfFeast() {
          const AgiosTable = findAgios();

          if (!AgiosTable)
            return console.log(
              "Didn't find the special Agios table in PrayersArray"
            );

          (function adaptToAscension() {
            if (Season !== Seasons.Ascension) return;  //i.e. if we are between the Pentecoste & the Assumption feasts: day 40 to day 49
            const agios = findTable(Prefix.commonPrayer + "AgiosPart1", CommonArray);
            if (!agios) return;//We will retrieve the 3rd paragraph of the ordinary Agios Osios Hymn ('For He Raised and Ascended to the Heaveans'...etc.)

            [3, 4, 5].forEach(index => AgiosTable[AgiosTable.length - index] = agios[agios.length - 1]);//Replacing the 3 Agios paragraphs with the Ascension paragraph

          })();

          insertTablesBeforeAnchor([AgiosTable], readingsAnchor?.nextElementSibling, getLanguages(Title(AgiosTable)));

          function findAgios() {
            let [dates, today] = ['copticFeasts', undefined];

            if ([copticFeasts.EntryToEgypt, copticFeasts.CanaWedding].includes(copticDate))
              today = copticDate;

            else if ([copticFeasts.PalmSunday, copticFeasts.HolyFriday].includes(copticReadingsDate))
              today = copticReadingsDate;

            else if (Season === Seasons.CrossFeast)
              today = copticFeasts.HolyFriday;//!We retrieve the HolyFriday Agios table

            else if ([Seasons.PentecostalDays, Seasons.Ascension].includes(Season)) {
              today = Seasons.PentecostalDays;//!The date in the title is assigned to the PenetcostalDays Season only for both seasons
              dates = 'Seasons'
            }

            else if ([Seasons.Nativity, Seasons.Baptism].includes(Season)) {
              today = Season;
              dates = 'Seasons';
            }

            return Agios(today, dates);

            function Agios(today: string, dates: string) {
              const table = (title: string) => findTable(title, CommonArray) || undefined;
              const agios = Prefix.commonPrayer + "Agios";

              if (!today) return table(agios);

              today = Object.entries(eval(dates)).find(entry => entry[1] === today)[0];//Returning the name of the key pointing to the date/season

              return table(`${agios}&D=${dates}.${today}`);

            }
          }

        })();

        await insertGospelReadingAndResponses({
          prefix: Prefix.gospelMass,
          languages: getLanguages(Prefix.gospelMass),
          container: btnDocFragment,
          isMass: true,
          clearContainer: false,
        });
      };

      async function insertMassReading(
        readingPrefix: string,
        [intro, end]: { AR: string; FR: string; EN: string }[],
        date: string = copticReadingsDate, 
        ) {
        if (!readingPrefix) return;
        
        const langs = getLanguages(readingPrefix);
        
        if (intro) insertIntro(intro, css.Intro);
        await insertMassReadingOtherThanGospel(
          readingPrefix,
          { beforeOrAfter: "beforebegin" as InsertPosition, el: readingsAnchor as HTMLElement },
          getLanguages(readingPrefix),
          btnDocFragment,
          false,
          date
        );
        if (end) insertIntro(end, css.End);
        
        function insertIntro(intro: { AR: string; FR: string; EN: string; }, cssClass:string){
          const table = [[readingPrefix + cssClass]];
          langs.forEach(lang => table[0].push(intro[lang] || ''));
          const div = insertTablesBeforeAnchor([table], readingsAnchor, langs);
        }
      };
    }

    function insertBookOfHoursButton() {
      if (
        [
          copticFeasts.Resurrection,
          copticFeasts.Nativity,
          copticFeasts.Baptism,
        ].includes(copticReadingsDate)
      )
        //In these feasts we don't pray any hour
        return alert(
          "We do not pray the Book of Hours prayers on the Ressurection, Nativity (Kiahk 29th), and Baptism (Toubi 11th) feasts' masses"
        );

      const hoursBtns = Btn.BookOfHours.onClick(relevantHours()) as Button[];

      (function createMasterButton() {
        const masterBtnDiv = document.createElement("div"); //This is the div that will contain the master button which shows or hides the Book of Hours sub buttons
        masterBtnDiv.classList.add(css.inlineButtonsContainer);
        masterBtnDiv.id = "masterBOHBtn";

        const masterBtn = new Button({
          btnID: "BOH_Master",
          label: getLabel({
            AR: "الأجبية",
            FR: "Agpia",
          }),
          onClick: () => {
            //We toggle the div containing the buttons for each hour
            let btnsDiv = document.getElementById('BOHBtnsDiv') as HTMLDivElement;
            if (!btnsDiv) return console.log('No btns div was found');
            btnsDiv.classList.toggle(css.hidden);
            if (btnsDiv.classList.contains(css.hidden)) {
              btnsDiv.style.top = "";
              btnsDiv.style.position = "";
              createFakeAnchor(btnsDiv.id);
            }
          },
        });

        masterBtnDiv.prepend(
          createHtmlBtn({
            btn: masterBtn,
            btnsContainer: masterBtnDiv,
            btnClass: css.inlineButton,
            clear: true,
            onClick: masterBtn.onClick,
          })
        );
        btnDocFragment.prepend(masterBtnDiv);
        createHtmlButtonForEachHour(masterBtnDiv)
      })();

      function createHtmlButtonForEachHour(masterBtnDiv: HTMLDivElement) {
        //We will create an HTML div (role = button) and an expandable div for each hour
        const btnsDiv = insertExpandableBtn(hoursBtns, masterBtnDiv, 'afterend', 'BOH', false);
        btnsDiv.id = 'BOHBtnsDiv';
        btnsDiv.classList.add(css.hidden);
        Array.from(btnsDiv.children)
          .forEach(htmlBtn => htmlBtn.addEventListener('click', () => {
            scrollToTop();
            const expandable = containerDiv.querySelector('#' + htmlBtn.id + 'Expandable');
            if (!expandable)
              return;
            if (!expandable.classList.contains(css.hidden))
              floatOnTopOrBottom(btnsDiv, true, '3px');
            else
              btnsDiv.style.position = 'relative';
            const toBeCollapsed = Array.from(expandable.children)
              .filter((div: HTMLDivElement, index: number) => index > 0 && isTitlesContainer(div) || undefined) as HTMLDivElement[];//!We exclude the first title div.

            toBeCollapsed.forEach(div => collapseOrExpandText(div, true));
          }
          ));
      };

      function relevantHours(): number[] {
        //args.mass is a boolean that tells whether the button prayersArray should include all the hours of the Book Of Hours, or only those pertaining to the mass according to the season and the day on which the mass is celebrated
        const hours = [1, 2, 3]; //Those are the 3rd, 6th and 9th hours

        if (
          [
            Seasons.GreatLent,
            Seasons.JonahFast,
            Seasons.NativityParamoun,
            Seasons.BaptismParamoun,
          ].includes(Season) &&
          ![0, 6].includes(weekDay)
          //We are during the Great Lent or during the Nativity Paramoun or the Baptism Paramoun and today is a Friday. In such cases, we pray the 3rd, 6th, 9th, 11th, and 12th hours
        )
          hours.push(4, 5);
        else if (Btn.Prosternation.children?.includes(btn)) {
          hours.push(4, 5);
          hours.shift();
        }
        else if (
          //We remove the 9th hour in the following days/periods
          !isFast
          ||
          [0, 6].includes(weekDay) //Whatever the period, if we are a Saturday or a Sunday, we pray only the 3rd and 6th Hours
          ||
          copticFeasts.Coptic29th //We deal with it as if we were on a Lord Feast
        )
          hours.pop(); //we remove the 9th hour

        return hours;
      };
    };
  }
});

Btn.ReadingsStPaul = new Button({
  btnID: "btnReadingsStPaul",
  label: getLabel({
    AR: "البولس",
    FR: "Epître de Saint Paul"
  }),
  onClick: async (prefix:string = Prefix.stPaul, date?:string) => {
    await insertMassReadingOtherThanGospel(
      prefix,
      { beforeOrAfter: undefined, el: undefined },
      getLanguages(prefix),
      containerDiv,
      true,
      date || copticReadingsDate
    );

    scrollToTop(); //scrolling to the top of the page
  },
});

Btn.ReadingsCatholicon = new Button({
  btnID: "btnReadingsCatholicon",
  label: getLabel({
    AR: "الكاثوليكون",
    FR: "Catholicon",
  }),
  onClick: async () => await Btn.ReadingsStPaul.onClick(Prefix.Catholicon),
});

Btn.ReadingsPraxis = new Button({
  btnID: "btnReadingsPraxis",
  label: getLabel({
    AR: "الإبركسيس",
    FR: "Actes",
    EN: "Acts",
  }),
  onClick: async () => await Btn.ReadingsStPaul.onClick(Prefix.praxis),
});

Btn.ReadingsSynaxarium = new Button({
  btnID: "btnReadingsSynaxarium",
  label: getLabel({
    AR: "السنكسار",
    FR: "Synaxarium",
    EN: "Synaxarium",
  }),
  onClick: async () => await Btn.ReadingsStPaul.onClick(Prefix.synaxarium, copticDate), //!CAUTION: notice that we passed to the function the readingDate argument because during the GreatLent period and the Jonah Fast, the copticReadingsDate is formatted like 'GL10', we hence pass the copticDate to prevent the function from searching for the Synaxarium of the day by the copticReadingsDate
});

Btn.PropheciesMorning = new Button({
  btnID: "btnReadingsPropheciesDawn",
  label: getLabel({
    AR: "نبوات باكر",
    FR: "Propheties",
    EN: "Propheties",
  }),
  onClick: async () => await Btn.ReadingsStPaul.onClick(Prefix.prophecies),
});

Btn.DayReadings = new Button({
  btnID: "btnDayReadings",
  label: getLabel({
    AR: "قراءات اليوم",
    FR: "Lectures du jour",
    EN: "Day's Readings",
  }),
  onClick: (mass: boolean = false) => {
    [defaultLanguage, foreingLanguage]
      .forEach(async lang => {
        if (!lang) return;
        if (Bibles[lang][0]) return;
        await getBibleVersion(defaultLanguage, false);
      });

    if (Season === Seasons.HolyWeek)
      return alert("We are during the Holy Week, there are no readings, please go to the Holy Week Prayers"); //We should put here child buttons for the Holy Week prayers and readings
    //We set the button's children

    Btn.DayReadings.children = [
      Btn.GospelMorning,
      Btn.GospelVespers,
      Btn.ReadingsStPaul,
      Btn.ReadingsCatholicon,
      Btn.ReadingsPraxis,
      Btn.ReadingsSynaxarium,
      Btn.GospelMass
    ];

    (function adaptToGreatLentAndJonahFast() {
      if (mass) return; //None of the following applies if the function is called within the Unbaptized mass context
      if (![Seasons.GreatLent, Seasons.JonahFast].includes(Season)) return;
      if (copticReadingsDate === copticFeasts.Resurrection) return;

      (function ifWeAreNotSaturday() {
        if (weekDay === 6) return;
        //We remove the Vespers because there are no Vespers during the Great Lent except for Saturday. Also there are no vespers during the Jonah Fast which lasts for 4 days from Monday to Thursday
        Btn.DayReadings.children = Btn.DayReadings.children.filter(b => b !== Btn.GospelVespers);
      })();

      (function ifWeAreSunday() {
        //If we are a Sunday and the GospelNight button is not included, we will add it.
        if (weekDay > 0) return;
        if (Btn.DayReadings.children?.includes(Btn.GospelNight)) return;
        Btn.DayReadings.children.push(Btn.GospelNight);
      })();

      (function ifWeAreNotSunday() {
        if ([0, 6].includes(weekDay)) return;
        //Also if we  are not a Sunday, we will remove the Night Gospel, if included
        Btn.DayReadings.children = Btn.DayReadings.children.filter((btn) => btn !== Btn.gospelNight);

        if (Btn.DayReadings.children?.includes(Btn.PropheciesMorning)) return;
        //If we are not a Sunday (i.e., we are during any week day other than Sunday and Saturday), we will  add the Prophecies button to the list of buttons
        Btn.DayReadings.children.unshift(Btn.PropheciesMorning);
      })();
    })();

    (function ifMass() {
      if (!mass) return;
      Btn.DayReadings.children = Btn.DayReadings.children.filter(btn => ![Btn.GospelVespers, Btn.GospelMorning, Btn.GospelNight, Btn.PropheciesMorning].includes(btn));//We remove the Morning and Vespers Gospel buttons

      if ([Seasons.PentecostalDays, Seasons.Ascension].includes(Season))
        Btn.DayReadings.children = Btn.DayReadings.children.filter(child => child !== Btn.ReadingsSynaxarium);//We remove the Synaxarium button
    })();

    return Btn.DayReadings.children;
  },
});

Btn.BookOfHours = new Button({
  btnID: "btnBookOfHours",
  label: getLabel({ AR: "الأجبية", FR: "Agpia", EN: "Book of Hours" }),
  docFragment: new DocumentFragment(),
  parentBtn: Btn.MainMenu,
  languages: [...prayersLanguages],
  children: [],
  onClick: (mass: number[]) => {
    if (!mass && Btn.BookOfHours.children.length > 1)
      return Btn.BookOfHours.children;
    const BOH = Object.entries(bookOfHours());
    if (mass)
      return getHoursBtns(mass.map(hour => BOH[hour]));//If this function is called in the "Unbaptized Mass" context, it will return Button elements for each hour passed to it


    (function addAChildButtonForEachHour() {
      Btn.BookOfHours.children = getHoursBtns(BOH);

      (function addOtherPrayersBtns() {
        const otherPrayers = ['BeforeCommunion', 'AfterCommunion'];
        const otherPrayersBtn = new Button({
          btnID: 'otherPrayersBtn',
          label: getLabel({
            AR: 'صلوات أخرى',
            FR: 'Diverses prières',
            EN: 'Various Prayers'
          }),
          onClick: () => otherPrayersBtn.children = otherPrayersBtn.children || otherPrayers.map((title, index) => otherPrayerBtn(`${Prefix.bookOfHours}${title}`, index)),
        });

        Btn.BookOfHours.children.push(otherPrayersBtn);

        function otherPrayerBtn(title: string, index: number): Button {
          const table = findTable(title, BookOfHoursArray) || undefined;
          if (!table) return undefined;
          return new Button({
            btnID: `btnOtherPrayer${index + 1}`,
            label: getLabel({
              AR: table[0][Btn.BookOfHours.languages.indexOf('AR') + 1],
              FR: table[0][Btn.BookOfHours.languages.indexOf('FR') + 1]
            }),
            onClick: () => {
              showPrayers({
                table: table,
                languages: Btn.BookOfHours.languages,
                position: containerDiv,
                clearContainerDiv: true,
                clearRightSideBar: true
              });
              scrollToTop();
            },
          });
        }
      })();
    })();

    scrollToTop();

    function getHoursBtns(hours: [string, [number[], typeBtnLabel]][]) {
      if (!hours) return;
      return hours.map(([name, [psalms, label]], index) => {
        const hourBtn = new Button({
          btnID: "btn" + name,
          label: label,
          docFragment: new DocumentFragment(),
          parentBtn: Btn.BookOfHours,
          prayersSequence: [`${Prefix.bookOfHours}${name}Title`],
          afterShowPrayers: () => hourBtnAfterShowPrayer(hourBtn.docFragment, name, psalms, hours.length - index, mass !== undefined),
        });
        if (mass) hourBtn.cssClass = css.inlineButton;
        return hourBtn;
      });

      function hourBtnAfterShowPrayer(docFragment: DocumentFragment, hourName: string, psalms: number[], index: number, mass: boolean) {
        const getHourName = (index: number) => BOH[index][0];
        const langs = getLanguages(Prefix.bookOfHours);

        (function insertHourIntroAndPsalms() {
          const anchor = findAnchor(`${Prefix.anchor}Psalms`, docFragment);
          if (!anchor) return console.log('The anchor was not found');

          (function insertHourIntro() {
            if (mass) return;//We don't insert the 'Thanks Giving' prayer and 'Psalm 50' if the function is called for the purposes of the mass liturgy

            const intro = [
              ...[1, 2, 3, 4].map((i) => `${Prefix.commonPrayer}ThanksGivingPart${i}`),
              Prefix.bookOfHours + "Psalm50",
            ];//Adding the 'Thanks Giving' and 'Psalm 50' to the titles sequence

            if (hourName === getHourName(0))
              intro.push(...["LetsKneel", "StPaul", "Intro"].map(title => `${Prefix.bookOfHours}${hourName}${title}`));//If this is the 1st Hour (Dawn), it has a specific sequence of prayers after the "Thanks Giving" and "Psalm50"

            else if (hourName === getHourName(7))
              intro.push(Prefix.psalmody + 'WakeUpSonsOfLight'); //If this is the 1st Midnight Service, we add the 'Wake Up Sons of Light' for the 1st Service of Midnight)

            const tables = intro.map(title => findTable(title, getArrayFromPrefix(title)) || undefined);
            insertTablesBeforeAnchor(tables, anchor, langs);
          })();

          (function insertPsalms() {
            if (localStorage.displayMode === displayModes[1]) return;//We don't show the psalms in "Display Mode"
            const tables = psalms.map(psalm => findTable(`${Prefix.bookOfHours}Psalm${psalm}`, BookOfHoursArray) || undefined);
            insertTablesBeforeAnchor(tables, anchor, langs);
          })();
        })();

        (function insertHourFinalPrayers() {
          const anchor = findAnchor(`${Prefix.anchor}End`, docFragment);
          if (!anchor) return console.log('The anchor was not found');

          insertTablesBeforeAnchor(getTables(), anchor, langs);

          function getTables() {
            const [OurFather, Creed] = ["OurFatherInHeaven", "Creed"].map(title => Prefix.commonPrayer + title);

            const [AngelsPrayers, HailMaria, WeExaltYou, Agios, KyrielisonNoMass, HolyLord, FinalPrayer, Absolution, HourEnd] = ["AngelsPrayer", "WeSaluteYouMary", "WeExaltYouStMary", "Agios", "Kyrielison41", "HolyLordOfSabaot", "AllHoursFinalPrayer", "PriestsAbsolution", `${hourName}End`].map(title => Prefix.bookOfHours + title);

            if (mass) return ifMass();
            else return ifNotMass();

            function ifNotMass() {
              return getSequence()?.map(title => findTable(title, getArrayFromPrefix(title)) || undefined);

              function getSequence() {
                const sequence: string[] = [
                  AngelsPrayers,
                  Agios,
                  OurFather,
                  HailMaria,
                  WeExaltYou,
                  Creed,
                  KyrielisonNoMass,
                  HolyLord,
                  OurFather,
                  HourEnd,
                  FinalPrayer,
                  OurFather,
                ];

                if (hourName === getHourName(5))
                  sequence.shift(); //If it is the 12th (Night) Hour, we remove the Angels Prayer from endOfHourPrayersSequence

                else if (hourName === getHourName(9)) {
                  sequence.splice(0, 1,
                    KyrielisonNoMass,
                    HolyLord,
                    OurFather,
                    Prefix.bookOfHours + hourName + "2ndGospel");//replacing the "Angels Praising" by this sequence
                  //Inserting the Priests Absolution at the end
                  sequence.push(Prefix.bookOfHours + hourName + Absolution);
                };

                if (!
                  [
                    getHourName(0),//Morning/Dawn
                    getHourName(5),//Night
                    getHourName(9),//Veil
                  ].includes(hourName)
                ) sequence.splice(0, 6);//For any other hour, we remove all the titles before KyrielisonIntro

                return sequence

              }
            };

            function ifMass() {
              return getSequence()?.map(title => findTable(title, getArrayFromPrefix(title)) || undefined);

              function getSequence(): string[] {
                //!index passed to the function = the differece between hours.length and the index of the hour 
                if (index === 2) {
                  //this is the before last hour btn (hours.length - (hours.length-2)=2)
                  return [Agios, OurFather, HailMaria];
                } else if(index > 2) {
                  //Any other hour before the 2 last
                  return [KyrielisonNoMass, HolyLord, OurFather];
                }

              }

            }

          }

        })();

        const children = Array.from(docFragment.children) as HTMLDivElement[];

        (function adapt118thPsalm() {
          if (hourName !== getHourName(6)) return;//If we are in the 'Setar Hour', we need to remove from Psalm 118 all the paragraphs except paragraphs 20, 21, and 22.
          children
            .filter((div) => div.dataset.root?.startsWith(Prefix.bookOfHours + "Psalm118"))
            .forEach((div, index) => index > 0 && index < 39 ? div.remove() : div);
        })();

        (function changeClasses() {
          (function ifNotMass() {
            if (mass) return;
            children
              .filter(div => !isTitlesContainer(div))
              .forEach(div => changeClass(div, getActor(css.NoActor)));
          })();

          function changeClass(div: HTMLDivElement, css: string) {
            if (!div) return;
            div.classList.forEach(c => {
              if (c !== 'Row') div.classList.remove(c)
            });
            div.classList.add(css);
          }

        })();

        (function removeCopticVersionAndNotes() {
          children.forEach((div) => {
            div.querySelectorAll("p.COP, p.CA")
              .forEach(parag => parag.remove());
            div.innerHTML = div.innerHTML
              .replaceAll(RegExp(`${eighthNoteCode}|${beamedEighthNoteCode}`, 'g'), '');
          });
        })();

      };

    }

  },
});

Btn.Psalmody = new Button({
  btnID: "btnPsalmody",
  label: getLabel({
    AR: "الإبصلمودية السنوية",
    FR: "Psalmodie (anuelle)",
    EN: "Psalmody (anual)"
  }),
  onClick: (): Button[] => {
    if (Btn.Psalmody.children) return Btn.Psalmody.children;

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

    const todayPraise = {
      AR: 'تسبحة اليوم',
      FR: 'Louange du jour',
      EN: 'Louange du jour',
    };
    const otherDay = {
      AR: 'تسبحة يوم ',
      FR: 'Louange du ',
      EN: 'Louange du ',
    }
    Btn.Psalmody.children = [
      createBtn(weekDay, getLabel(todayPraise)),
      ...[0, 1, 2, 3, 4, 5, 6]
        .filter(d => d !== weekDay)
        .map(d => createBtn(d, getLabel({ AR: otherDay.AR + days[d].AR, FR: otherDay.FR + days[d].FR, EN: otherDay.EN + days[d].EN })))
    ];

    checkIfInSpecialSeason(todayDate);//We reset the Season to today

    return Btn.Psalmody.children;

    function createBtn(day: number, label: typeBtnLabel): Button {
      let date: number = todayDate.getTime();
      day > weekDay ? date += (day - weekDay) * calendarDay : date -= (weekDay - day) * calendarDay;

      checkIfInSpecialSeason(new Date(date));//We change the Season according to the date

      let season = Season;

      let btn = new Button({
        btnID: 'today',
        label: label,
        languages: prayersLanguages,
        docFragment: new DocumentFragment(),
        onClick: () => customizeSequence(btn, day, season)
      });
      return btn
    }

    function customizeSequence(btn: Button, day: number = weekDay, season: string = Season) {
      scrollToTop();
      const Psalmody = Sequences().Psalmody;
      if (Kiahk.includes(season))
        return btn.prayersSequence = Psalmody.Kiahk;

      btn.prayersSequence =
        Psalmody.Year
          .map(title => customizeTitle(title));

      function customizeTitle(title: string): string {
        let WA: string = isWatosOrAdam(day, season);

        if (title.includes('XXX'))
          title = title.replace('XXX', WA);

        if (RegExp(Prefix.anchor + 'Psaly\.*Seasons.').test(title))
          return title.replace(Prefix.anchor, Prefix.psalmody) + Object.entries(Seasons).find(entry => entry[1] === Season)[0];//We replace "Seasons.Ascension" by "Seasons.PentecostalDays"

        else if (RegExp(Prefix.anchor + 'Psaly\.*copticFeasts.').test(title) && Object.entries(copticFeasts).find(entry => entry[1] === copticDate))
          return title.replace(Prefix.anchor, Prefix.psalmody) + Object.entries(copticFeasts).find(entry => entry[1] === copticDate)[0];

        else if (title.startsWith(Prefix.anchor))
          return title.replace(Prefix.anchor, Prefix.psalmody) + '&D=' + day.toString();

        else if (RegExp(Prefix.psalmody + 'TheotokiesConclusion' + WA).test(title) && [Seasons.PentecostalDays, Seasons.Ascension].includes(Season))
          return title.replace(WA, '&D=$Seasons.PentecostalDays||$Seasons.Ascension');
        else return title;
      }

    };

  },
});

Btn.IncenseMorning = new Button({
  btnID: "btnIncenseDawn",
  label: getLabel({
    AR: "بُخُورِ بَاكِرِ",
    FR: "Encens du Matin",
    EN: "Morning Incense Office"
  }),
  languages: [...prayersLanguages],
  docFragment: new DocumentFragment(),
  onClick: (): string[] => {
    Btn.IncenseMorning.children = [];//!We need to reinitiate the children each time because in some cases (like in case btnLakan is clicked) there are buttons added to btnIncenseMorning children
    Btn.IncenseMorning.prayersSequence = [...Sequences().Incense].filter(
      (title) => !title?.startsWith(Prefix.incenseVespers)
    ); //We will remove all the Incense Vespers titles from the prayersSequence Array

    if (weekDay === 6)
      //If we are a Saturday, we pray only the 'Departed Litany', we will hence remove the 'Sick Litany' and the 'Travellers Litany'
      Btn.IncenseMorning.prayersSequence.splice(
        Btn.IncenseMorning.prayersSequence.indexOf(
          Prefix.incenseDawn + "SickLitany"
        ),
        3, //We remove the SickPrayer, the TravelersParayer and the Oblations Prayer
        Prefix.incenseVespers + "DepartedLitany"
      );
    else if (weekDay === 0 || lordFeasts.includes(copticDate))
      //If we are a Sunday or the day is a Lord's Feast, or the oblation is present, we remove the 'Travellers Litany' and keep the 'Sick Litany' and the 'Oblation Litany'
      Btn.IncenseMorning.prayersSequence = Btn.IncenseMorning.prayersSequence.filter(
        (title) =>
          !title.startsWith(
            Prefix.incenseDawn + "TravelersLitany"
          )
      );

    scrollToTop();
    return Btn.IncenseMorning.prayersSequence;
  },
  afterShowPrayers: async (btn: Button = Btn.IncenseMorning, gospelPrefix: string = Prefix.gospelMorning) => {
    const docFragment = btn.docFragment;
    if (!docFragment) return;
    
    const children = Array.from(docFragment.querySelectorAll('div'));

    (function adaptThanksGiving() {
      const thanksGiving = children.find(div => div.id === `${Prefix.commonPrayer}ThanksGivingPart1`);
      const parags =
        Array.from(children[children.indexOf(thanksGiving) + 10]?.children) as HTMLParagraphElement[];//Those are the paragraphs that conatin the sentence that will be changed according to each liturgy
      

      if (!parags?.length) return;

      let thanks: object;
      if (btn === Btn.IncenseMorning)
        thanks = variable.thanksMorning;
      else if (btn === Btn.IncenseVespers)
        thanks = variable.thanksVespers;
      else if (btn === Btn.MassUnBaptised)
        thanks = variable.thanksMass;
      else if (btn.btnID === Btn.Lakan.btnID)
        thanks = variable.thanksLakan;

      if (!thanks) return;

      prayersLanguages
        .forEach(lang => {
          const parag = parags?.find(p => p.classList.contains(lang));
          if (!parag) return;
          parag.innerHTML = parag.innerHTML.replace(variable.thanksVespers[lang], thanks[lang]);
        });
    })();

    (function insertGodHaveMercyOnUs() {
      const title = `${Prefix.commonPrayer}PrayThatGodHaveMercyOnUs`;
      const godHaveMercy = findTable(title, CommonArray) as string[][]; //We get the entire table not only the second row. Notice that the first row of the table is the row containing the title
      if (!godHaveMercy)
        return console.log("Didn't find table Gode Have Mercy");
      
      (function insertPrayer() {
        const length = godHaveMercy.length;
        const anchor = findAnchor(`${Prefix.anchor}GodHaveMercyOnUs`, docFragment);
        if (!anchor) return console.log('the anchor was not found');
        const table = [godHaveMercy[0], [`${Prefix.anchor}InsertBishop`]];
        if (btn === Btn.MassUnBaptised)
          table.push(godHaveMercy[length - 1]); //We keep the last paragraph (the paragraph for the mass)
        else
          table.push(godHaveMercy[length - 2]);//We keep the second last paragraph (the paragraph ofr any other liturgy than a mass)
        insertTablesBeforeAnchor([table], anchor, prayersLanguages);
      })();

      (function insertExpandableForBishop() { 
        const bishop = godHaveMercy.slice(1, 4);//Those are the rows that will be displayed when the button is clicked
        const anchor = findAnchor(`${Prefix.anchor}InsertBishop`, docFragment)
        if (!anchor) return console.log('could not find tha anchor');

        const haveMercy = new Button({
          btnID: 'godHaveMercy',
          label: getLabel({
            AR: bishop[0][prayersLanguages.indexOf('AR')], //This is the arabic text of the lable
            FR: bishop[0][prayersLanguages.indexOf('FR')], //this is the French text of the label
          }),
          cssClass: css.inlineButton,
          docFragment: new DocumentFragment(),
          onClick: () => {
            showPrayers({
              table: bishop,
              languages: Btn.MassUnBaptised.languages,
              position: haveMercy.docFragment,
              clearContainerDiv: false,
              clearRightSideBar: false,
            });
  
          }
        });
        
        insertExpandableBtn([haveMercy], anchor, 'beforebegin');
      })();

    })();

    if (![Btn.IncenseMorning, Btn.IncenseVespers].includes(btn)) return;//The following code/functions apply only to btnIncenseMorning & btnIncenseVespers

    await insertCymbalVersesAndDoxologies(btn);

    await insertGospelReadingAndResponses({
      prefix: gospelPrefix,
      languages: getLanguages(gospelPrefix),
      container: docFragment,
      isMass: true,
      clearContainer: false,
    });

    adaptConcludingHymn(docFragment);

    if (btn !== Btn.IncenseMorning) return; //The functions from this point on concern the Morning Incense service only

    await insertPropheciesAndEklonomin();//!We need to await for it because otherwise, the div elements will not be appended to the docFragment when setCss() is called.

    (function insertAdamDoxolgiesBtn() {
      //We add an expandable button for the Incense Dawn Adam Doxologies
      const doxologies = new Button({
        btnID: 'btnAdamDoxologies',
        label: getLabel({
          AR: "ذكصولوجيات باكر آدام",
          FR: "Doxologies Adam du Matin",
          EN: "Adam Doxologies",
        }),
        cssClass: css.inlineButton,
        languages: Btn.IncenseMorning.languages,
        docFragment: new DocumentFragment(),
        prayersSequence: [Prefix.doxologies + "DawnAdam"],
      });

      insertExpandableBtn([doxologies], docFragment.children[0] as HTMLElement, 'beforebegin');
    })();

    (function insertLakanBtn() {
      if (copticDate === '1005')
        insertLakan(copticFeasts.Baptism);
      else if (copticDate === copticFeasts.Apostles)
        insertLakan(copticFeasts.Apostles);

      function insertLakan(date: string) {
        const lakanBtn = new Button({
          btnID: Btn.Lakan.btnID,//!We must give the button same ID as Btn.Lakan because we use this id later on in adapting the 'Thanks Giving' prayer to the Lakan liturgy
          label: Btn.Lakan.label,
          docFragment: new DocumentFragment(),
          onClick: () => Btn.Lakan.onClick(date, lakanBtn),
          afterShowPrayers: async () => await Btn.Lakan.afterShowPrayers(date, lakanBtn)
        });

        Btn.IncenseMorning.children = [lakanBtn];
        const children = docFragment.children;

        if (copticDate === '1005')
          insertExpandableBtn([lakanBtn], children[0], 'beforebegin', 'Lakan');
        else insertExpandableBtn([lakanBtn], children[children.length - 1], 'afterend', 'Lakan');

      };
    })();


    /**
   * Inserts the Incense Office Doxologies And Cymbal Verses according to the Coptic feast or season
   * @param {Button} btn - The button calling the function when clicked
   */
    async function insertCymbalVersesAndDoxologies(btn: Button) {
      if (!btn.docFragment) return;
      const dayFeasts: string[] =
        (() => {
          const dates: string[] = [copticDate];
          if (!RegExp('\\d{4}').test(copticReadingsDate))
            dates.push(copticReadingsDate); //We do this in order to avoid including a reading date of 4 digits, since the reading repeats more than once per year on other days than the feast day itself (eg. the 0511 copticReadingDate repeats several times not only on the Apostles feast). This will leave us only with the copticReadingsDate including letters: like GL, PNTL, JONAS, etc

          //We will first look if today is one of the copticFeasts list. If this is the case, we will retrieve the doxologies and cymbal verses specific to this feast (we assume that if one of these feasts, whether a Lord Feasts or not, falls within a given Season, the cymbal verses and doxologies of the feast will prevail over those of the Season). If today is not one of the copticFeasts, we will  retrieve the cymbal verses and doxologies of the Season.
          const matching: string = Object.values(copticFeasts).find(
            (date) => dates.includes(date)) || Season; //We check if today is one of the feasts in copticFeasts (we check not only the Coptic date, but we check also the copticReadingsDate because some feasts are referrenced by the copticReadings date : eg. Pntl39). If today is not one of the copticFeasts, we will retain the Season

          if (matching !== Seasons.NoSeason) return [matching]; //If matching is not Seasons.NoSeason, we push the match feast or the season if any
        })();

      let anchor: HTMLElement;

      (async function InsertCymbalVerses() {
        anchor = findAnchor(`${Prefix.anchor}CymbalVerses`, docFragment);

        if (!anchor)
          return console.log("We didn't find the cymbal verses' anchor");

        let cymbals: string[][][];

        if ([Seasons.JonahFast, Seasons.GreatLent].includes(Season) && ![0, 6].includes(weekDay))
          //If we are during the Jonah Fast or during the Great Lent but not on a Saturday or a Sunday, the Cymbal Verses are not chanted, they are replaced by the Long Kyrielison and the Cymbal Verses End
          cymbals = [findTable(`${Prefix.cymbalVerses}End`, CymbalVersesArray) || undefined];

        else cymbals = getCymbalVerses();


        if (!cymbals.length)
          return console.log(
            "no cymbals were found by the provided sequence: "
          );

        insertTablesBeforeAnchor(cymbals, anchor.nextElementSibling, btn.languages);


        insertSaintsExpandable(findAnchor(`${Prefix.anchor}SaintsCymbals`, docFragment), Prefix.cymbalVerses, 'St(Mary|Maykel|Steven|John|Marc)', getLabel({
          AR: 'أرباع القديسين',
          FR: 'Autres saints',
          EN: 'Other Saints',
        }));

        function getCymbalVerses(): string[][][] {
          let sequence = [
            Prefix.cymbalVerses + isWatosOrAdam(),
            Prefix.cymbalVerses,
          ];


          if (dayFeasts)
            dayFeasts.forEach((feast) =>
              [
                ...lordFeasts,
                copticFeasts.Coptic29th,
                Seasons.Nativity,
                Seasons.Baptism,
                Seasons.PentecostalDays,
                Seasons.Ascension
              ].includes(feast) //During Seasons.Nativity (i.e., between Nativity and Circumcision) and Seasons.Baptism(from Baptism to Cana Wedding), the Cymbals verses follow the pattern of any Lord Feast: it starts with "Amoyni Marin..." or "Ten O'osht", then the cymbal verses of the feast, and finally, the "Eb'oro enti ti hirini". 
                ? insertFeastInSequence([Prefix.cymbalVerses + "LordFeastsEnd"], feast, 0, 0)
                : insertFeastInSequence(sequence, feast, 1, 0)
            ); //We always start with 'Amoyni Marin...' or with 'Tin O'osht...', so we will insert the feast element before the 2nd element, and will not delete anything

          return Array.from(processSequence(
            sequence,
            Prefix.cymbalVerses
          ));

        }

      })();

      (async function InsertCommonDoxologies() {
        const doxologiesAnchor: HTMLElement = findAnchor(`${Prefix.anchor}Doxologies`,
          btn.docFragment);

        if (!doxologiesAnchor)
          return console.log("Didn't find the anchor for doxologies");

        if (Object.values(apostlesFeasts)
          .filter(date => ![apostlesFeasts.StMarc, apostlesFeasts.StPaul, apostlesFeasts.StJohnApostle].includes(date))
          .includes(copticDate))
          saintsFeasts.AnyPostle = copticDate; //We exclude the Apostles for whom we already have doxologies, and set the AnyApostle date to the copticDate

        let sequence: string[] = [
          'WatosStMary',
          'StMaykel',
          'AllCelestialBeings',
          'Apostles',
          'StMarc',
          'StGeorge',
          'StMina',
          'EndOfDoxologiesWatos',
        ].map(title => Prefix.doxologies + title);

        if (btn === Btn.IncenseVespers)
          sequence[0] += 'Vespers';


        let excludedFeasts = [
          saintsFeasts.ArchangelMaykel,
          saintsFeasts.StMarc,
          saintsFeasts.StGeorge,
          saintsFeasts.StMina,
        ]; //Those saints feast will be excluded because the doxologies of those saints are already included by default

        if (dayFeasts) {
          let index: number = 2;
          dayFeasts.forEach((feast) => {
            if (
              [
                ...lordFeasts,
                Seasons.NativityParamoun,
                Seasons.Nativity,
                Seasons.BaptismParamoun,
                Seasons.Baptism,
                ...Kiahk,
                Seasons.GreatLent,
                Seasons.JonahFast, //The Jonah doxology comes before St. Mary Doxolgy according to some sources
                Seasons.PentecostalDays,
                Seasons.Ascension
              ].includes(feast)
            )
              index = 0; //If one of the dates in feast[] corresponds to any of the 'Lord's Feasts', it means we are in a Lord Feast. the doxologies of the feast will be placed at the begining of the doxologies. We follow the same rule for the doxologies of the PentecostalDays and the month of Kiahk
            else if (copticFeasts.Coptic29th) {
              index = 1;
              sequence = sequence.splice(1, 1);//StMaykel's doxology will be replace by the StMalykel doxology for PentecostalDays
            }
            else if (excludedFeasts.includes(feast)) {
              let feastIndex = sequence.indexOf(feast);
              sequence.splice(2, 0, sequence[feastIndex]); //If it is one of the doxologies already included by default, we place it after St. Maykel
              sequence.splice(feastIndex + 1, 1); //We then delete the element itself
              index = undefined; //We set index to undefined in order to prevent insertFeastSequence from inserting any element in sequence
            }


            insertFeastInSequence(sequence, feast, index, 0);
          });
        }

        let doxologies: string[][][] = Array.from(processSequence(
          sequence,
          Prefix.doxologies
        ));

        if (!doxologies.length)
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

        insertTablesBeforeAnchor(doxologies, doxologiesAnchor.nextElementSibling, btn.languages);

        const anchor = findAnchor(`${Prefix.anchor}EndOfDoxologies`, docFragment).previousElementSibling as HTMLDivElement;

        if (!anchor) return console.log('The anchor was not found');

        insertSaintsExpandable(
          anchor,
          Prefix.doxologies,
          `(StMaykel|AllCelestialBeings|Apostles|StMarc|StGeorge|StMina)${Prefix.class}`,
          getLabel({
            AR: 'قديسين آخرين',
            FR: 'Autres saints',
            EN: 'Other Saints',
          }));
      })();

      /**
       * Inserts an 'Expandable' button, which when clicked displays a list of buttons for each Saint cymbal verses or doxology
       * @param {string} dataRoot - the data-root of the element that will serve as anchor before which the master button will be inserted
       * @param {string}  prefix - the prefix (Prefix.cymbalVerses or Prefix.doxologies)
       * @param {string}  regExp - a Regular Expression allowing to filter the results
       * @returns 
       */
      function insertSaintsExpandable(anchor: HTMLDivElement, prefix: string, regExp: string, label: typeBtnLabel) {
       // const anchor: HTMLDivElement = selectElementsByDataSet(docFragment, dataRoot, undefined, 'root')[0];
        if (!anchor) return "The anchor is not valid";
        const options = getArrayFromPrefix(prefix).filter(tbl => Title(tbl).startsWith(prefix + 'St') && !RegExp(regExp).test(Title(tbl)));

        if (!options.length) return;
        const langs = getLanguages(prefix);
        const saintsBtns = options.map((table,index) => {
          const btn = new Button({
            btnID: `btn${prefix}${index + 1}`,
            label: getLabel({
              AR: table[0][langs.indexOf('AR') + 1],
              FR: table[0][langs.indexOf('FR') + 1],
            }),
            cssClass: css.inlineButton,
            docFragment: new DocumentFragment(),
            onClick: () => {
              //!The function will create an html div for each row of the table and append those divs to the btn.docFragment container. We do this because the html button associated with "btn" will  pass "btn" to displayChildButtonsOrPrayers(), which will ensure that setCSS() will be applied to the html divs in btn.docFragment, before being moved to the "Expandable" container associated with the button.
              showPrayers({
                table: table,
                position: btn.docFragment,
                languages: getLanguages(Prefix.cymbalVerses),
                clearContainerDiv: false,
                clearRightSideBar: false
            });
            }
          });
          return btn
        });

        (function createMasterBtn() {
          const masterDiv = document.createElement('div');
          masterDiv.id = `Master${prefix}`;
          masterDiv.classList.add(css.inlineButtonsContainer);
          anchor.insertAdjacentElement('beforebegin', masterDiv);

          const masterBtn = new Button({
            btnID: `btnMaster${prefix}`,
            label: label,
            onClick: () => {
              const btnsDiv = containerDiv.querySelector(`#${masterDiv.id}Btns`);
              if (btnsDiv) return btnsDiv.classList.toggle(css.hidden);
              insertExpandableBtn(saintsBtns, masterDiv, 'afterend', prefix)
                .id = masterDiv + 'Btns';
            }
          });

          createHtmlBtn({
            btn: masterBtn,
            btnsContainer: masterDiv,
            btnClass: css.inlineButton,
            clear: false,
            onClick: masterBtn.onClick //!We need to set the onClick property otherwise it will be set to displayChildBtnsOrPrayers(masterBtn) which, at its turn, will call the setCSS() for the containerDiv (the container by default since masterBtn does not have a docFragment) for the second time
          });

        })();


      };

      /**
       * Inserts a new element in the btn.prayersSequence[]. This elment will serve as a placeholder to insert the relevant prayers (Cymbal Verses or Doxologies) for the current season or feast
       * @param {string[]} sequence - the btn's prayers sequence in which the new placeholder element will be inserted
       * @param {string} feastDate - the string representing the feast or the season
       * @param {number} index - the index at which the new placeholder element will be inserted.
       * @param {number} remove the number of elements that will be removed from the sequence after the index
       */
      function insertFeastInSequence(
        sequence: string[],
        feastDate: string,
        index: number,
        remove: number
      ) {
        if (!index && index !== 0) return;
        sequence.splice(index, remove, feastDate);
      }

      /**
       * Searchs in tablesArray for the tables matching each title in sequence, which is a string[] of titles, and returns a string[][][] of the tables found in the
       * @param {string[]} sequence - An arry of titles that we will be looking for tables matching each of them in tablesArray[][]
       * @param {string} prefix - the prefix with which all the tables in the concerned tables array start (i.e., either Prefix.cymbalVerses, or Prefix.doxologies)
       * @returns {string[][][]} - an array of the tables[][] found
       */
      function processSequence(sequence: string[], prefix: string): Set<string[][]> {
        let tables: Set<string[][]> = new Set(),
          tablesArray: string[][][] = getArrayFromPrefix(prefix);

        sequence.map((tblTitle) => {
          if (!tblTitle.startsWith(prefix))//It means that the title is a Coptic date or a Season
            tablesArray
              //!CAUTION: we must use 'filter' not 'find' because for certain feasts there are more than one doxology
              .filter((tbl) =>
                tableMatchingDates(Title(tbl), [tblTitle])
              )
              .forEach((tbl) => tables.add(tbl));
          else
            tables.add(
              findTable(tblTitle, tablesArray) as string[][]
            );
        });

        return tables;
      }
    }

    async function insertPropheciesAndEklonomin() {
      if (![Seasons.GreatLent, Seasons.JonahFast].includes(Season)) return;

      if ([0, 6].includes(weekDay)) return; //We are neither a Saturday nor a Sunday, we will hence display the Prophecies dawn buton

      const anchor: HTMLDivElement = findAnchor(`${Prefix.anchor}Prophecies`, docFragment);

      if (!anchor) return console.log('The anchor was not found');

      const table = findTable(Prefix.prophecies + "&D=" + copticReadingsDate, ReadingsArrays.PropheciesDawnArrayFR);

      if (!table) return console.log("Didn't find Prophecies with the current date");

      const Prophecies = await retrieveReadingTableFromBible(table, getLanguages(Prefix.prophecies)) || [];


      (function insertProphecies() {
        if (!Prophecies) return;
        const langs = getLanguages(Prefix.prophecies);
        //! This must come before inserting Eklonomin Taghonata
        const title = {
          AR: 'نبوات باكر',
          FR: 'Prophecies',
          EN: 'Prophecies',
        }

        Prophecies[0] = [`${Title(Prophecies)}${css.Title}`, title[defaultLanguage], title[foreingLanguage] || ''];

        showPrayers({
          table: Prophecies,
          languages: langs,
          position: { beforeOrAfter: 'beforebegin', el: anchor },
          clearContainerDiv: false,
          clearRightSideBar: false,
        });
      })();

      (function insertEklonominTaghonata() {
        //!We must insert the Prophecies before Eklonomin Taghonta
        const godHaveMercy = findTable(Prefix.incenseDawn + "GodHaveMercyOnUs&D=$Seasons.GreatLent", IncenseArray);

        if (!godHaveMercy) return console.log("Didn't find God Have Mercy for Great Lent");

        showPrayers({
          table: godHaveMercy,
          languages: getLanguages(Prefix.incenseDawn),
          position: { beforeOrAfter: 'beforebegin', el: anchor },
          clearContainerDiv: false,
          clearRightSideBar: false,
        });
      })();
    };

  },
});

Btn.IncenseVespers = new Button({
  btnID: "btn.IncenseVespers",
  label: getLabel({
    AR: "بُخُورِ عَشِيَّةَ",
    FR: "Encens Vêpres",
    EN: "Vespers Incense Office",
  }),
  docFragment: new DocumentFragment(),
  languages: [...prayersLanguages],
  onClick: (): string[] => {
    Btn.IncenseVespers.prayersSequence = [...Sequences().Incense].filter(
      (title) =>
        title !== Prefix.bookOfHours + "AngelsPrayer" &&
        !title.startsWith(Prefix.incenseDawn)
    );

    scrollToTop();
    return Btn.IncenseVespers.prayersSequence;
  },
  afterShowPrayers: () => Btn.IncenseMorning.afterShowPrayers(Btn.IncenseVespers, Prefix.gospelVespers),
});

Btn.Lakan = new Button({
  btnID: "btnLakan",
  label: getLabel({
    AR: "صلاة اللقَّان",
    FR: "Cérémonie de la Bénédiction de l'eau",
    EN: 'Lakan'
  }),
  onClick: (date: string, btn: Button = Btn.Lakan) => {
    if (!date) return;
    btn.prayersSequence = [`${Prefix.incenseDawn}Anaphora${date}`];
  },
  afterShowPrayers: async (date: string, btn: Button = Btn.Lakan) => {
    if (!date) return;
    const Intros = ReadingsIntrosAndEnds();
    Btn.IncenseMorning.afterShowPrayers(btn);//We call it in order to hide the "Pray that God Have Mercy on Us" response for Pope and Bishop

    const lakan: {
      cymbals: string[][];
      prophecies: string[];
      stPaul: string[];
      gospel: string[];
      Agios: string[][];
      litany: string[][];
      season: string[][];
      psalmResponse: string[][];
      gospelResponse: string[][];
      spasmosAdam: string[][];
    } = {
      cymbals: [],
      prophecies: [],
      stPaul: [],
      gospel: [],
      Agios: [],
      litany: [],
      season: findTable(`${Prefix.massCommon}SeasonalLitany&D=$Seasons.` + Object.entries(Seasons).find(entry => entry[1] === naturalSeasons())[0]) || undefined,
      psalmResponse: [[`${Prefix.psalmResponse}${date}`, ...prayersLanguages.map(lang => Intros.psalmEnd[lang] || '')]],
      gospelResponse: findTable(`${Prefix.gospelResponse}Lakan&D=${date}`) || undefined,
      spasmosAdam: [],
    };

    if (date === copticFeasts.Baptism) {
      lakan.prophecies = ['HAB:3:12-19', 'ISA:35:1-2', 'ISA:40:1-25', 'ISA:9:1-2', 'BAR:3:36-End/4:1-4', 'EZK:36:24-29', 'EZK:47:1-9'];//These are the references of the prophecies readings
      lakan.stPaul = ['1CO:10:1-13'];
      lakan.gospel = ['PSA:113:3-5', 'MAT:3:1-17'];
      lakan.Agios = findAgios('Seasons.Baptism');
      lakan.cymbals = ["&D=$Seasons.Baptism", "PopeAndBishop", "LordFeastsEnd"]
        .map(title => findTable(`${Prefix.cymbalVerses}${title}`, CymbalVersesArray) || undefined)
        .flat();
    }
    else if (date === copticFeasts.Apostles) {
      lakan.prophecies = ['EXO:15:22-End/16:1-1', 'EXO:30:17-30', 'ISA:1:16-26', 'ISA:35:1-10', 'ISA:43:16-End/44:1-6', 'ZEC:8:7-19', 'ZEC:14:8-11'];//These are the references of the prophecies readings
      lakan.stPaul = ['HEB:10:22-32'];
      lakan.Agios = findAgios();
      lakan.gospel = ['PSA:50:7-7/50:10-10', 'JHN:5:1-18'];
      lakan.cymbals = findTable(`${Prefix.cymbalVerses}&D=${date}`) || undefined;
      lakan.spasmosAdam = findTable(`${Prefix.massCommon}SpasmosAdamLong&D=$copticFeasts.Apostles`, MassCommonArray) || undefined;
    }
    else if (date === copticFeasts.HolyThursday) {
      lakan.prophecies = [`${Prefix.HolyWeek}LakanProphecies`, `${Prefix.HolyWeek}LakanSermony1`];//!There is a second Sermony of St. John Chrysostom to be insereted at the end of the lakan
      lakan.stPaul = ['1TI:4:9-End/5:1-10'];
      lakan.Agios = findAgios('copticFeasts.HolyFriday');
      lakan.gospel = ['PSA:50:9-9/50:12-12", "JHN:13:1-17'];
      lakan.cymbals = findTable(`${Prefix.cymbalVerses}&D=${date}`) || undefined;
      lakan.litany = findTable(`${Prefix.HolyWeek}LakanLitany`, HolyWeekArray) || undefined;
      lakan.spasmosAdam = findTable(`${Prefix.HolyWeek}LakanSpasmosAdam`, HolyWeekArray) || undefined;
    };

    (function insertKissEachOther() {
      const KissEachOther = findTable(Prefix.massCommon + "KissEachOther", MassCommonArray);
      if (!KissEachOther) return;
      const anchor = findAnchor(`${Prefix.anchor}KissEachOther`, btn.docFragment);
      if (!anchor) return console.log('The anchor was not found');
      insertTablesBeforeAnchor([KissEachOther.slice(1)], anchor, prayersLanguages);//We remove the first row ('Kiss each other')
    })();

    await insertBeforeAnchor();

    async function insertBeforeAnchor() {

      if (date === copticFeasts.Baptism) {

        await insert('StPaul', undefined, findTable(Prefix.massCommon + "Tayshoury") || undefined);

        await insert('StJohnHymn', undefined, findTable(Prefix.hymns + 'StJohnHymn' + date) || undefined);//!Missing in PrayersArray

        await insert('FeastHymn', undefined, findTable(Prefix.hymns + 'FeastHymn' + date) || undefined);//!Missing in PrayersArray


      }
      else if (date === copticFeasts.Apostles) {
        await insert('StPaul', undefined, findTable(Prefix.massCommon + "WeWorshipYouChrist") || undefined);//!Missing in PrayersArray
      }
      else if (date === copticFeasts.HolyThursday) {


      };


      await insert('Cymbals', undefined, lakan.cymbals);//Inserting the relevant Cymbal Verses
      await insert('Prophecies', lakan.prophecies);
      await insert('StPaul', lakan.stPaul);//Inserting the St. Paul reading
      await insert('Agios', undefined, lakan.Agios); //Inserting Agios 
      await insert('PsalmResponse', undefined, lakan.psalmResponse);
      await insert('LakanGoseplResponse', undefined, lakan.gospelResponse);
      await insert('LakanLitany', undefined, lakan.litany);//Inserting the Lakan litany
      await insert('SeasonLitany', undefined, lakan.season);//Inserting the relevant "Crop/Rain/Harvest" litany
      await insert('SpasmosAdam', undefined, lakan.spasmosAdam);

      await insertGospelReadingAndResponses({
        isMass: true,
        prefix: Prefix.gospelMass,
        container: btn.docFragment,
        clearContainer: false,
        gospel: lakan.gospel.map(ref => getGospel(Prefix.gospelMass, ref))
      });

      async function insert(anchorTitle: string, refs: string[], reading?: string[][]) {
        if (!anchorTitle) return;
        const anchor = findAnchor(`${Prefix.anchor}${anchorTitle}`, btn.docFragment);

        if (!anchor) return console.log('The Anchor was not found');

        if (reading)
          return insertTablesBeforeAnchor([reading], anchor, getLanguages(Title(reading)));
        else await getReadingFromReference();

        async function getReadingFromReference() {
          if (!refs) return;

          if (anchorTitle === 'Prophecies')
            reading = await ifProphecies();
          else reading = await retrieveReferences(refs);

          if (!reading) return;

          const languages = [defaultLanguage, foreingLanguage].filter(lang => lang);

          (function insertIntro() {
            if (anchorTitle === 'StPaul')
              reading = [
                ...getReadingIntroOrEnd(Intros.stPaulIntro, css.Intro),
                ...reading,
                ...getReadingIntroOrEnd(Intros.stPaulEnd, css.End)
              ];

            else if (anchorTitle === 'Psalm')
              reading = [
                ...reading,
                [Prefix.switchClass, css.Assembly],//We insert this "Switch Class" row in order for the "Alleluia" response to be assigned the css.Assembly class
                ...findTable(Prefix.bookOfHours + "Alleluia", BookOfHoursArray) || undefined
              ];
          })();

          insertTablesBeforeAnchor([reading], anchor, languages)


          async function ifProphecies() {
            //We will insert a title row before the prophecies
            reading = [[
              `PropheciesHeader${css.Title}`,
              "",
              "Prophecies",
              "",
              "النبؤات"
            ]];

            if (date !== copticFeasts.HolyThursday) {
              reading.push(
                ...getReadingIntroOrEnd(Intros.propheciesIntro, css.Intro),
                ...await retrieveReferences(refs),//We do not insert the ReadingEnd for the Holy Thursday because it is already included in the table
                ...getReadingIntroOrEnd(Intros.propheciesEnd, css.End));
            } else {
              refs
                .forEach(title => reading.push(...findTable(title, ReadingsArrays.GospelNightArrayFR) || undefined));

              reading = await retrieveReadingTableFromBible(reading, languages);

            };

            return reading;

          };

          async function retrieveReferences(refs: string[]) {
            const retrieved = await Promise.all(
              refs.map(async ref =>
                await retrieveReadingTableFromBible([[Prefix.readingRef + ref]], languages))
            );
            return retrieved.flat();
          };

          function getReadingIntroOrEnd(text: { AR?: string; FR?: string; EN?: string; COP?: string }, css: string) {
            return [[
              Prefix.same + css,
              ...prayersLanguages.map(lang => text[lang] || '')
            ]];
          }
        }
      };

      function getGospel(prefix: string, ref: string): string[][] {
        ref.startsWith('PSA') ? prefix += 'Psalm' : prefix += 'Gospel';
        return [[`${prefix}&D=${copticDate}${css.Title}`], [`${Prefix.readingRef}${ref}`]]
      }
    }

    function findAgios(date: string = '') {
      const Agios = Prefix.commonPrayer + "Agios"
      if (date)
        date = `&D=$${date}`;
      return findTable(`${Agios}${date}`, CommonArray) || undefined;


    }
  },
});

Btn.Prosternation = new Button({
  btnID: "btnProsternation",
  label: getLabel({
    AR: "صَلاة السَّجْدَة",
    FR: "Prière de la Prosternation",
    EN: "Prosternation Prayer",
  }),
  onClick: () => {
    const agios = Prefix.commonPrayer + "Agios";
    const services = [
      {
        Prophecies: 'DEU:5:23-End/6:1-3',
        StPaul: '1CO:12:28-End/13:1-12',
        Agios: [`${agios}&D=$Seasons.PentecostalDays`],//!needs to be checked, do we pray the entire sequence or such the agios part? if so we will need to adapt it.
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
        Agios: [agios],
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
        Agios: [agios],
        Gospel: ['PSA:65:2-2/71:9-9', 'JHN:4:1-24'],
        psalmResponse: Prefix.psalmResponse + anyDay + "||$Seasons.Kiahk",
        Cymbals: [Prefix.cymbalVerses + "Watos"],
        Litanies: [
          Prefix.commonPrayer + "ChurchLitany",//!needs check + convert font
          Prefix.commonPrayer + "PopeLitany",
          Prefix.commonPrayer + "RequestedPrayersLitany",
          'Assembly Litany' //!missing
        ]
      },

    ];

    const labelBase = {
      AR: 'السَّجْدَة XXX',
      FR: 'XXX Prosternation',
      EN: 'XXX Prosternation'
    };

    const labelNumber = [
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

    const children = services.map(s => {
      let n = services.indexOf(s);
      return new Button({
        btnID: Btn.Prosternation.btnID + n.toString(),
        label: customizeLable(n),
        docFragment: new DocumentFragment(),
        onClick: () => btnOnClick(n),
        afterShowPrayers: () => btnAfterShowPrayers(n)
      });
    });

    Btn.Prosternation.children = children;

    function customizeLable(i: number): typeBtnLabel {
      const label = { ...labelBase };
      label[defaultLanguage] = label[defaultLanguage].replace('XXX', labelNumber[i][defaultLanguage]);
      return getLabel(label)
    }

    async function btnOnClick(n: number, getTables: boolean = false) {
      let btn = Btn.Prosternation.children[n];
      let tables = await returnTables(n);
      if (getTables) return tables;

      tables.forEach(table => {
        showPrayers({
          position: btn.docFragment,
          clearContainerDiv: true,
          clearRightSideBar: true,
          table: table,
          languages: getLanguages(Title(table))
        });

      });

      async function returnTables(index: number): Promise<string[][][]> {
        let service = services[index],
          clone = [...Sequences().Prosternation];

        (function customizeSequence() {
          if (index === 0) {
            clone.unshift(
              Prefix.bookOfHours + "Psalm116",
              Prefix.psalmody + "Hos4",
              Prefix.psalmody + "PsalyOnTheotoky&D=0",
              Prefix.psalmody + "IntroductionToAdamTheotoky",
              Prefix.psalmody + "Theotoky" + '&D=0',
              Prefix.psalmody + "TheotokiesConclusion&D=$Seasons.PentecostalDays||$Seasons.Ascension",
              Prefix.psalmody + "PsalyAdamProsternation&D=$copticFeasts.Pentecoste",
            );
          }
          else if (index === 2) {
            clone.splice(clone.indexOf(Prefix.anchor + 'Agios'), 0, Prefix.hymns + `PentecosteHymn&D=$copticFeasts.PentecosteVespers${css.Title}`); //!missing hymn

            let doxlogies =
              [
                Prefix.incenseVespers + "LordKeepUsThisNight",
                Prefix.bookOfHours + "Agios",//!This is the Agios of the Book of Hours not the Agios hymn of the Mass before the Gospel (which starts with Prefix.commonPrayer) 
                Prefix.commonPrayer + "OurFatherInHeaven",
                Prefix.commonPrayer + "InTheNameOfJesusOurLord",
                Prefix.bookOfHours + "WeSaluteYouMary",
                Prefix.doxologies + "WatosStMary",
                Prefix.doxologies + "AllCelestialBeings",
                Prefix.doxologies + "Apostles",
                Prefix.doxologies + "StMarc",
                Prefix.doxologies + "Pope", //!missing
                Prefix.doxologies + "EndOfDoxologiesWatos",
                Prefix.bookOfHours + "WeExaltYouStMary",
                Prefix.commonPrayer + "Creed",
                Prefix.commonIncense + "EfnotiNaynan",
              ];

            clone.splice(clone.indexOf(Prefix.anchor + "Doxologies"), 1, ...doxlogies);

            let End: string[] = [
              Prefix.commonPrayer + "BlockInTheNameOfOurLord",
              Prefix.commonPrayer + "BlockIriniPassi",
              Prefix.commonPrayer + "AbsolutionForTheSon",
              Prefix.commonPrayer + "KyriElieson3Times",
              Prefix.commonIncense + "LiturgyEnd"
            ];

            clone.push(...End);
          };

        })();

        let resolved = await Promise.all(
          clone.map(async title => {
            if (title.startsWith(Prefix.anchor))
              return await processTitle(title)
            else return await processTitle(title.replace('XXX', (index + 1).toString()), true)
          })
        );

        return resolved.filter(table => table);


        async function processTitle(title: string, singleTable: boolean = false): Promise<string[][]> {
          if (singleTable) {
            return findTable(title) || undefined;
          };

          let prop = title.replace(Prefix.anchor, '');
          if (!service[prop] || ['Gospel', 'psalmResponse'].includes(prop)) return;//The 'Gospel' property is handeled by the btnAfterShowPrayers() function. We insert the reading in the anchor

          if (prop === 'StPaul')
            return await processReference(service[prop], Prefix.stPaul);
          else if (prop === 'Prophecies')
            return await processReference(service[prop], Prefix.prophecies);
          else return processProp(service[prop]);

          function processProp(prop: string[]): string[][] {
            let table = prop.map(t => [Prefix.placeHolder, t]);
            table.unshift([Prefix.commonPrayer]);//!we add a first row with the Prefix.commonPrayer as first element in order to be able to retrieve the PrayersArray languages from the title prefix
            return table
          }

        }

        async function processReference(refs: string, prefix: string): Promise<string[][]> {
          return await retrieveReadingTableFromBible([[prefix + 'Prosternation'], [Prefix.readingRef + refs]], getLanguages(prefix))
        }

      }

    }

    async function btnAfterShowPrayers(n: number) {
      let btn = Btn.Prosternation.children[n];
      Btn.IncenseMorning.afterShowPrayers(btn);//We call this function in order to insert an Expandable for the "God Have Mercy On Us" Diacon response
      if (n === 2)
        adaptConcludingHymn(btn.docFragment);
      else if (n === 0)
        Btn.MassUnBaptised.afterShowPrayers(btn);//We insert the Book of Hours prayers (as an expandable button)
      await insertGospel();
      async function insertGospel() {
        let gospel = services[n].Gospel;
        await insertAfterAnchor('Psalm', gospel[0]);
        await insertAfterAnchor("Gospel", gospel[1]);
        await insertAfterAnchor("PsalmResponse", services[n].psalmResponse, Prefix.psalmResponse);

        async function insertAfterAnchor(title: string, ref: string, prefix?: string) {
          let anchor: HTMLDivElement = findAnchor(`${Prefix.anchor}${title}${anyDay}`, btn.docFragment);

          if (!anchor) return console.log('We did not find the anchor for ', title);

          let table: string[][], langs: string[];

          prefix ? langs = getLanguages(prefix) : langs = getLanguages(Prefix.gospelMass);

          if (prefix)
            table = findTable(title) || undefined;
          else
            table = await retrieveReadingTableFromBible([[Prefix.readingRef + ref]], langs);

          if (!table) return;

          insertTablesBeforeAnchor([table], anchor, langs);


        }
      };
      scrollToTop();

    }

  },
});

Btn.IncenseOffice = new Button({
  btnID: "btnIncenseOffice",
  label: getLabel({
    AR: "رفع بخور باكر أو عشية",
    FR: "Encens Matin et Vêpres",
    EN: 'Morning & Vespers Incense'
  }),
  onClick: (returnChildren: boolean = false) => {
    //setting the children of the btnIncenseOffice. This must be done by the onClick() in order to reset them each time the button is clicked
    Btn.IncenseOffice.children = [Btn.IncenseMorning, Btn.IncenseVespers];
    //show or hide the PropheciesDawn button if we are in the Great Lent or JonahFast:

    if (copticReadingsDate === copticFeasts.Pentecoste)
      Btn.IncenseOffice.children = [Btn.IncenseMorning, Btn.Prosternation]

    //We will remove the Vespers Button during if we are during the Great Lent or the Jonah Fast, and we are not a Saturday
    if ([Seasons.GreatLent, Seasons.JonahFast].includes(Season) &&
      weekDay !== 6) Btn.IncenseOffice.children = [Btn.IncenseMorning];

    if (returnChildren) return Btn.IncenseOffice.children;
  },
});

Btn.MassStBasil = new Button({
  btnID: "btnMassStBasil",
  label: getLabel({ AR: "باسيلي", FR: "Saint Basil", EN: "St Basil" }),
  docFragment: new DocumentFragment(),
  languages: [...prayersLanguages],
  onClick: (): string[] => {
    const Mass = Sequences().Mass;
    //Setting the standard mass prayers sequence
    Btn.MassStBasil.prayersSequence = [
      ...Mass.StBasil,
      ...Mass.CallOfHolySpirit,
      ...Mass.Litanies,
      ...Mass.Communion,
    ];

    //We scroll to the beginning of the page after the prayers have been displayed
    scrollToTop();
    return Btn.MassStBasil.prayersSequence;
  },
  afterShowPrayers: (btn: Button = Btn.MassStBasil, prefix: string = Prefix.massStBasil) => {
    let btnDocFragment = btn.docFragment;

    const children = Array.from(btnDocFragment.querySelectorAll('div'));

    (function insertSecondReconciliationBtn() {
      if (![Btn.MassStBasil, Btn.MassStCyril].includes(btn)) return;

      const reconciliation2 = findTable(
        prefix + "Reconciliation2") || undefined;

      if (!reconciliation2)
        return console.log("Didn't find reconciliation");
      const anchor = findAnchor(`${Prefix.anchor}GoToRecon`, btnDocFragment
      ).previousElementSibling
      if (!anchor) console.log('The anchor was not found');

      const btnRecon = new Button({
        btnID: "SecondReconcil",
        label: getLabel({
          AR: reconciliation2[0][btn.languages.indexOf('AR') + 1],
          FR: reconciliation2[0][btn.languages.indexOf('FR') + 1],
        }),
        cssClass: css.inlineButton,
        docFragment: new DocumentFragment(),
        onClick: () => {
          showPrayers({
            table: reconciliation2,
            languages: btn.languages,
            position: btnRecon.docFragment,
            clearContainerDiv: false,
            clearRightSideBar: false,
          });
        }
      });

      const btnsDiv = insertExpandableBtn([btnRecon], anchor, 'afterend');//!We need to insert the button after the ancor because we will inert the redirection buttons before the ancor
      btnsDiv.children?.[0].addEventListener('click', ()=>{
        Array.from(containerDiv.querySelectorAll('div'))
        .filter((div) => div.dataset?.group === `${prefix}Reconciliation`)
        .filter(div => !div.dataset?.anchor)
        .forEach(div => div.classList.toggle(css.hidden));//We hide or unhide the main reconcilaition prayer when the second conciliation is displayed or hidden
      })
    })();

    (function addRedirectionButtons() {
      //We create a list of the masses to which we will insert redirection button
      let redirectToList: Button[] = [
        Btn.MassStBasil,
        Btn.MassStGregory,
        Btn.MassStCyril,
        Btn.MassStJohn,
      ].filter(b => ![btn, Btn.MassStJohn].includes(b));//We remove the btn of the mass from the redirection list and the mass of st John

      
      //Adding 2 buttons to redirect the other masses at the begining of the Reconciliation
      let anchor:HTMLDivElement = findAnchor(`${Prefix.anchor}GoToRecon`, btnDocFragment);	
      if (!anchor) return;

      redirectToAnotherMass(
        [...redirectToList],
        {
          beforeOrAfter: "beforebegin",
          el: anchor.previousElementSibling as HTMLDivElement,
        },
        "RedirectionToReconciliation"
      );

      //Adding 2 buttons to redirect to the other masses at the Anaphora prayer After "By the intercession of the Virgin St. Mary"
      anchor = findAnchor(`${Prefix.anchor}GoToAna`, btnDocFragment);

      if(!anchor) return console.log('The anchor was not found')

      redirectToAnotherMass(
        [...redirectToList],
        {
          beforeOrAfter: "beforebegin",
          el: anchor,
        },
        "RedirectionToAnaphora"
      );

      //Adding 2 buttons to redirect to the other masses before Agios
      anchor = findAnchor(`${Prefix.anchor}GoToAgios`, btnDocFragment);
      if (!anchor) return console.log('The anchor was not found');
      
      redirectToAnotherMass(
        [...redirectToList],
        {
          beforeOrAfter: "beforebegin",
          el: anchor.previousElementSibling as HTMLDivElement,
        },
        "RedirectionToAgios"
      );

      //Adding 2 buttons to redirect to the other masses before the Call upon the Holy Spirit
      anchor = findAnchor(`${Prefix.anchor}GoToLitan`, btnDocFragment);
      if (!anchor) return console.log('The anchor was not found');

      redirectToAnotherMass(
        [...redirectToList],
        {
          beforeOrAfter: "beforebegin",
          el: anchor as HTMLDivElement,
        },
        "RedirectionToLitanies"
      );

      //Adding 2 buttons to redirect to the other masses before the Fraction Introduction
      anchor = findAnchor(`${Prefix.anchor}GoToFrac`, btnDocFragment);
      if (!anchor) return console.log('The anchor was not found');

      redirectToAnotherMass(
        [...redirectToList],
        {
          beforeOrAfter: "beforebegin",
          el: anchor.previousElementSibling as HTMLDivElement,
        },
        "RedirectionToFractionIntroduction"
      );

      /**
       *
       * @param {HTMLDivElement} targetElement - the html child of containerDiv, in relation to which the newly created div containing the html buttons elements, will be placed according to a given position
       * @param {Button[]} btns - a list of Button for each we will create an inline redirection html button
       * @param {InsertPosition} position - an object providing the position where the newly created div containing the html elements, will be placed compared. The div is placed in a position (i.e., the beforeOrAfter property) in relation ton an html element in the containerDiv (el) which is the targetEelement
       *@param {string} btnsContainerID - the id of the div container to which the html buttons will be appended. This id may be needed to select the div after redirection
      */
      async function redirectToAnotherMass(
        btns: Button[],
        position: { beforeOrAfter: InsertPosition; el: HTMLElement },
        btnsContainerID: string
      ) {
        if (!position.el) return console.log('We didn\'t find the anchor');

        const redirectTo = btns.map((btn) => {
          //for each button in the btns array, we will create a fake Button and will set its onClick property to a function that retrieves the text of the concerned mass
          const newBtn: Button = new Button({
            btnID: `GoTo_${btn.btnID.split("btn")[1]}_From_${position.el.dataset.root}`,
            label: btn.label,
            cssClass: css.inlineButton,
            onClick: async () => {
              await displayChildButtonsOrPrayers(btn); //We simulated as if btn itself has been clicked, which will show all its prayers, children, etc.
              //if there is an element in containerDiv having the same data-root as targetElement
              if (containerDiv.querySelector(`#${btnsContainerID}`))
                createFakeAnchor(btnsContainerID);
            },
          });
          return newBtn
        });

        insertRedirectionButtons(redirectTo, position, btnsContainerID);
      }
    })();

    (function insertAdamAndWatosSpasmos() {
      //Inserting an Expandable button for the LongSpasmos
      insertExpandable(
        `${Prefix.massCommon}SpasmosAdamLong`,
        findAnchor(`${Prefix.anchor}AdamLong`, btnDocFragment)
      );
      
      //Inserting Expanadable button for Watos Spasmoses
      insertExpandable(
        `${Prefix.massCommon}SpasmosWatosLong`,
        findAnchor(`${Prefix.anchor}WatosShort`, btnDocFragment).previousElementSibling as HTMLDivElement,
        `${Prefix.massCommon}SpasmosWatosShort`
      );

      function insertExpandable(
        spasmosTitle: string,
        anchor: HTMLElement,
        hideRoot?: string
      ): HTMLElement | void {
        if (!anchor) return console.log('anhcor is not valid');

        let spasmos: string[][] = MassCommonArray.find(
          (tbl) =>
            Title(tbl)?.startsWith(spasmosTitle) &&
            tableMatchingDates(Title(tbl), [Season])
        );

        if (!spasmos)
          return console.log("didn't find spasmos with title = ", spasmosTitle);
        const langs = getLanguages(Title(spasmos));
        const id = spasmosTitle.split('&D=')[0];
        const btnSpasmos = new Button({
          btnID: id,
          label: getLabel({
            AR: spasmos[0][langs.indexOf('AR') + 1],
            FR: spasmos[0][langs.indexOf('FR') + 1],
          }),
          cssClass: css.inlineButton,
          docFragment: new DocumentFragment(),
          onClick: () => {
            showPrayers({
              table: spasmos,
              languages: langs,
              position: btnSpasmos.docFragment,
              clearContainerDiv: false,
              clearRightSideBar: false,
            });
          }
        });

        const btnsDiv = insertExpandableBtn([btnSpasmos], anchor, 'beforebegin');
        if (hideRoot)
          btnsDiv.children?.[0].addEventListener('click', () => {
          Array.from(containerDiv.querySelectorAll('div'))
            .filter((div) => div.dataset?.root === anchor.dataset.root)
            .forEach((div) => div.classList.toggle(css.hidden))
        });
      }
    })();


    (function insertLitaniesIntroductionFromOtherMasses() {
      if (btn !== Btn.MassStBasil) return; //This button appears only in St Basil Mass

      const intro = "LitaniesIntro"
      
      const anchor = findAnchor(`${Prefix.anchor}GoToLitan`, btnDocFragment) as HTMLDivElement;
      
      if (!anchor) return console.log("Did not find the Anchor");

      const stGregLitanies = new Button({
        btnID: Btn.MassStGregory.btnID + "LitaniesIntro",
        label: getLabel({
          AR: "طلبات القداس الغريوري",
          FR: "Litanies de la messe de St. Gregory",
        }),
        cssClass: css.inlineButton,
        languages: btn.languages,
        docFragment: new DocumentFragment(),
        prayersSequence: [`${Prefix.massStGregory}${intro}`],
      });
      const stCyrilLitanies = new Button({
        btnID: Btn.MassStCyril.btnID + "LitaniesIntro",
        label: getLabel({
          AR: "طلبات القداس الكيرلسي",
          FR: "Litanies de la messe de Saint Cyril",
        }),
        cssClass: css.inlineButton,
        languages: btn.languages,
        docFragment: new DocumentFragment(),
        prayersSequence: [`${Prefix.massStCyril}${intro}`],
      });

      insertExpandableBtn([stGregLitanies, stCyrilLitanies], anchor, 'afterend', 'Lit');
    })();

    (function insertRelevantSeasonalLitany() {
      const anchor = findAnchor(`${Prefix.anchor}SeasonalLitany`, btnDocFragment);
      if (!anchor) return console.log('Didn\'t find the anhcor');

      let tbl = findTable(Prefix.massCommon + 'SeasonalLitany&D=$Seasons.' + Object.entries(Seasons).find(entry => entry[1] === naturalSeasons())[0], MassCommonArray);
      if (!tbl) return console.log('Didn\'t find the tbl');

      insertTablesBeforeAnchor([tbl], anchor, prayersLanguages);
    })();

    (function showFractionPrayersMasterButton() {
      //We will insert a button displaying a pannel of choices for the different Fraction prayers according to the day/season, etc.s

      const anchor = findAnchor(`${Prefix.anchor}Fraction`, btnDocFragment) as HTMLElement
      if (!anchor) console.log('Did not find the fractions anchor');
      showMultipleChoicePrayersButton({
        filteredPrayers: filter(),
        languages: prayersLanguages,
        btnLabels: getLabel({ AR: "صلوات القسمة", FR: "Oraisons de la Fraction" }),
        masterBtnID: "btnFractionPrayers",
        anchor: anchor,
      });

      function filter(): string[][][] {
        let filtered: string[][][] = [];
        const standard = FractionsArray.filter(table => RegExp(/^(?!.*&D=(?![^&]*\.anyDay)).*$/).test(Title(table)));//Those are the franctions that are inlcuded for any day.

        filtered.push(...FractionsArray.filter(table => !standard.includes(table) && tableMatchingDates(Title(table), [copticDate, Season])));//Adding the date or Season specific fractions

        filtered.push(...standard);//We then add the "standard" group of fractions
        return getUniqueValuesFromArray(filtered) as string[][][];
      };

    })();

    (function insertCommunionChants() {
      //Inserting the Communion Chants after the Psalm 150
      let psalm150 = children.filter(div => div.dataset?.group === `${Prefix.massCommon}CommunionPsalm150`);

      if (!psalm150.length) return console.log('The Psalm 150 was not found');

      const filtered: string[][][] = CommunionArray.filter(table => tableMatchingDates(Title(table), [copticDate, Season, copticFeasts.AnyDay]));

      showMultipleChoicePrayersButton({
        filteredPrayers: getUniqueValuesFromArray(filtered) as string[][][],
        languages: btn.languages,
        btnLabels: getLabel({
          AR: "مدائح التوزيع",
          FR: "Chants de la communion",
        }),
        masterBtnID: "communionChants",
        anchor: psalm150[psalm150.length - 1] as HTMLElement,
      });
    })();

    adaptConcludingHymn(btnDocFragment)


  },
});

Btn.MassStCyril = new Button({
  btnID: "btnMassStCyril",
  label: getLabel({ AR: "كيرلسي", FR: "Saint Cyril", EN: "St Cyril" }),
  docFragment: new DocumentFragment(),
  languages: [...prayersLanguages],
  onClick: (): string[] => {
    //Setting the standard mass prayers sequence
    const Mass = Sequences().Mass;
    Btn.MassStCyril.prayersSequence = [
      ...Mass.StCyril,
      ...[
        Prefix.massCommon + "SaintsCommemoration",
        Prefix.massCommon + "CommemorationOfTheDeparted",
        Prefix.massCommon + "FractionIntroduction",
        Prefix.commonPrayer + "OurFatherInHeaven",
        Prefix.commonPrayer + "BlockInTheNameOfOurLord",
        Prefix.massCommon + "PrayerForTheFather",
        Prefix.commonPrayer + "BlockIriniPassi",
        Prefix.massCommon + "AbsolutionPrayerForTheFather",
        Prefix.massCommon + "ConfessionIntroduction",
        Prefix.massCommon + "Confession",
        Prefix.commonPrayer + "ZoksasiKyrie"
      ],
      ...Mass.Communion,
    ];

    return Btn.MassStCyril.prayersSequence;
  },
  afterShowPrayers: async () => Btn.MassStBasil.afterShowPrayers(Btn.MassStCyril, Prefix.massStCyril),
});

Btn.MassStGregory = new Button({
  btnID: "btnMassStGregory",
  label: getLabel({ AR: "غريغوري", FR: "Saint Gregory" }),
  docFragment: new DocumentFragment(),
  languages: [...prayersLanguages],
  onClick: (): string[] => {
    const Mass = Sequences().Mass;
    //Setting the standard mass prayers sequence
    Btn.MassStGregory.prayersSequence = [
      ...Mass.StGregory,
      ...Mass.CallOfHolySpirit,
      ...Mass.Litanies,
      ...Mass.Communion,
    ];

    //removing irrelevant prayers from the array
    Btn.MassStGregory.prayersSequence.splice(
      Btn.MassStGregory.prayersSequence.indexOf(
        Prefix.massCommon + "Invocation"
      ),
      9
    );
    scrollToTop();

    return Btn.MassStGregory.prayersSequence;
  },
  afterShowPrayers: async () => Btn.MassStBasil.afterShowPrayers(Btn.MassStGregory, Prefix.massStGregory),
});

Btn.MassStJohn = new Button({
  btnID: "btnMassStJohn",
  label: getLabel({ AR: "القديس يوحنا", FR: "Saint Jean" }),
  docFragment: new DocumentFragment(),
  prayersSequence: [],
  onClick: () => {
    alert(
      "The prayers of this mass have not yet been added. We hope they will be ready soon"
    );
    return; //until we add the text of this mass

    scrollToTop(); //scrolling to the top of the page

    return Btn.MassStJohn.prayersSequence;
  },
  afterShowPrayers: async () => Btn.MassStBasil.afterShowPrayers(Btn.MassStJohn),
});

Btn.MassBaptised = new Button({
  btnID: "btnMassBaptised",
  label: getLabel({
    AR: "قٌدَّاسِ المُؤْمِنينَ",
    FR: "Liturgie des Croyants",
    EN: "Baptized Mass",
  }),
  parentBtn: Btn.Mass,
  children: [Btn.MassStBasil, Btn.MassStGregory, Btn.MassStCyril], //We are removing Mass StJohn for now
});

Btn.GospelVespers = new Button({
  btnID: "btnReadingsGospelIncenseVespers",
  label: getLabel({
    AR: "إنجيل عشية",
    FR: "Évangile  Vêpres",
    EN: "Vespers Gospel",
  }),
  onClick: async () => await Btn.GospelMass.onClick(Prefix.gospelVespers),
});

Btn.GospelMorning = new Button({
  btnID: "btnReadingsGospelIncenseDawn",
  label: getLabel({
    AR: "إنجيل باكر",
    FR: "Évangile du Matin",
    EN: "Morning Gospel",
  }),
  onClick: async () => await Btn.GospelMass.onClick(Prefix.gospelMorning),
});

Btn.GospelNight = new Button({
  btnID: "btnReadingsGospelNight",
  label: getLabel({
    AR: "إنجيل المساء",
    FR: "Évangile du Soir",
    EN: "Night Gospel",
  }),
  onClick: async () => await Btn.GospelMass.onClick(Prefix.gospelNight)
});

Btn.GospelMass = new Button({
  btnID: "btnReadingsGospelMass",
  label: getLabel({
    AR: "إنجيل القداس",
    FR: "Évangile de la messe",
    EN: "Mass Gospel",
  }),
  onClick: async (gospelPrefix: string = Prefix.gospelMass) => {
    let prayersArray = PrayersArraysKeys.find((entry) => entry[0] === gospelPrefix);

    if (!prayersArray) return console.log("Didn\'t find the prayersArray");

    containerDiv.innerHTML = "";

    await insertGospelReadingAndResponses({
      prefix: gospelPrefix,
      languages: getLanguages(gospelPrefix),
      container: containerDiv,
      isMass: false,
      clearContainer: true,
    });
    scrollToTop(); //scrolling to the top of the page

  },
});

Btn.HW = new Button({
  btnID: 'btnHolyWeek',
  label: getLabel({ AR: 'طقس اسبوع الآلام', FR: 'Rite de la semaine sainte' }),
  onClick: () => {
    /*The buttons tree is structured this way: 
    btnMaster => 
            btnPassOver => 
                    [btnDay, btnEvening]=> 
                              [btn1stHour, btn3rdHour, etc.]*/
    const Evening: string = 'E', Morning: string = 'M';

    const btnPassOver = new Button({
      btnID: 'btnPassover',
      label: getLabel({ AR: 'البصخة المقدسة', FR: 'Pessah' }),
      onClick: () => btnPassOver.children = [btnPassOverOnClick(Morning), btnPassOverOnClick(Evening)],//We remove undefined elements
    });//btnPassOver shows Day and Evening buttons

    Btn.HW.children = [btnPassOver];

    function btnPassOverOnClick(service: string): Button {
      if (!service) return;
      return getDayAndEveningBtns(service);

      function getDayAndEveningBtns(service: string) {
        if (service === Evening && weekDay === 5) return undefined;//This will be the Apocalyps Btns
        if (service === Morning && [6].includes(weekDay)) return undefined;//There is no morning Passover on Palm Sunday and Holy Saturday

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
        return btn;//btn shows a btn for each hour according to whether we are in the 'Day' or 'Evening' Passover liturgy
      }

    }

    function getPassoverHoursBtns(service: string, btn: Button): Button[] {
      if (btn.children) return;
      let hoursLabels: { prefix: string, lable: { AR?: string; FR?: string; EN?: string } }[];

      (function generateButtonsLabels() {
        let days: [string, string, string][] =
          [
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
            hour.lable.EN += ' of Abou Ghalamsis'
          }
        });

      })();

      return hoursLabels.map(hour => createHourBtn(hour.prefix, getLabel(hour.lable))).filter(btn => btn);//We remove any undefined buttons   

      function createHourBtn(hour: string, label: typeBtnLabel): Button {

        if (hour === '12H' && !(weekDay === 5 && service === Morning)) return undefined;//The 12th hour is only for Friday morning

        if (['1H', '3H', '6H'].includes(hour) && service === Morning && weekDay === 0) return undefined;//On Palm Sunday we start at the 9th hour

        const hourReadings: string[][][] = ReadingsArrays.GospelNightArrayFR
          .filter(table => RegExp(Prefix.HolyWeek + hour + service + '\.*&D=' + copticReadingsDate).test(Title(table)));

        let btnHour = new Button({
          btnID: 'btn' + hour,
          label: label,
          parentBtn: btn,
          languages: prayersLanguages,
          docFragment: new DocumentFragment(),
          onClick: () => btnHour.prayersSequence = getMainSequence(),
          afterShowPrayers: async () => await hourBtnAfterShowPrayers(btnHour, hour, hourReadings, label),
        });

        return btnHour;

        function getMainSequence() {
          const sequence = [
            "HourIntroduction",
            "PsalmAndGospel",
            "Commentary",
          ];
          const end = "PassoverEnd";
          if (weekDay === 5 && service === Morning) {
            //It is the Holy Friday Pessah
            if (hour === '12H')
              sequence.push(Prefix.HolyWeek + "Golgotha"); //At the end of the 12th hour, we add "Golgotha" hymn instead of the normal end of service final
            else if (hour === '6H')
              sequence.push(end, "6HMDimasConfession&D=" + copticFeasts.HolyFriday);//At the end of the 6th hour, We add the "PassoverEnd" and the "Dimas Confession"
          }
          else if (weekDay > 3 && service === Morning)
            sequence.push("PassoverEnd");//If we are Thursday or Friday morning, we add the "PassoverEnd" to every hour
          else if (hour === '11H')
            sequence.push("PassoverEnd");//Also if we are any other day, we add the "PassoverEnd" after the 11th hour

          return sequence.map(title => Prefix.HolyWeek + title)

        }
        async function hourBtnAfterShowPrayers(btn: Button, hour: string, dayPrayers: string[][][], label: typeBtnLabel) {
          type readingTitle = { AR: string; FR: string, EN: string };
          let titles: { Prophecies: readingTitle; Psalm: readingTitle; Gospel: readingTitle; Commentary: readingTitle; Sermony: readingTitle };

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
            Object.values(titles)
              .forEach((title) => {
                title[defaultLanguage] += label.DL || '';
                title[foreingLanguage] += label.FL || '';
              });
          })();

          (function adaptConclusionHymn() {
            if (hour === '12H') return;//It means we are Friday. The Passover End for the 12th hour is "Golgotha"
            else if (weekDay < 4 && hour !== '11H') return;//Between Palm Sunday and Wednesday afternoon, the "PassoverEnd" sequence is inserted only at the end of service, i.e., at the end of the 11th hour
            else if (weekDay > 3 && service === Evening && hour !== '11H') return; //If we are Thursday evening, the "PassoverEnd" sequence is inserted only at the end of service (at the 11th hour).

            adaptConcludingHymn(btn.docFragment);//This will only insert the Pope and Bishop Expandable button

          })();

          await insertHourReadings();
          insertThursdayLakanAndMassBtns();
          await insertHolyFridayReadingsAndHymns();

          async function insertHourReadings() {
            const readingsLangs = ['COP', 'FR', 'AR'];
            type typeReading = { table: string[][], anchor: HTMLElement, title: readingTitle, key: string, keyAnchor: string };
            const readings: { [index: string]: typeReading } = {
              coptGospel: { table: undefined, anchor: undefined, title: undefined, key: 'Gospel', keyAnchor: 'CopticGospel' },
              nonCopticGospel: { table: undefined, anchor: undefined, title: titles.Gospel, key: 'Gospel', keyAnchor: 'nonCopticGospel' },
              coptPsalm: { table: undefined, anchor: undefined, title: undefined, key: 'Psalm', keyAnchor: 'CopticPsalm' },
              nonCopticPsalm: { table: undefined, anchor: undefined, title: titles.Psalm, key: 'Psalm', keyAnchor: 'nonCopticGospel' },
              Commentary: { table: undefined, anchor: undefined, title: titles.Commentary, key: 'Commentary', keyAnchor: 'Commentary' },
              Prophecies: { table: undefined, anchor: undefined, title: titles.Prophecies, key: 'Prophecies', keyAnchor: 'Prophecies' },
              Sermony: { table: undefined, anchor: undefined, title: titles.Sermony, key: 'Sermony', keyAnchor: 'Prophecies' },
              KhinEfran: { table: undefined, anchor: undefined, title: undefined, key: 'KhinEfran', keyAnchor: 'KhinEfran' },
              Litany: { table: undefined, anchor: undefined, title: undefined, key: 'FinalLitany', keyAnchor: 'FinalLitany' },
            };

            (function fetchKhinEfranAndLitany() {
              [readings.Litany, readings.KhinEfran].forEach(reading => setTableAndAnchor(reading, reading.key));

              function setTableAndAnchor(reading, title: string) {
                reading.table = findTable(`${Prefix.HolyWeek}${title}${service}`, HolyWeekArray) || undefined;
                if (!reading.table) console.log(`Didn't find a table having as title: ${title}`);
                reading.anchor = findAnchor(`${Prefix.anchor}${title}`, btnHour.docFragment,);
              }
            })();

            (function findReadingsTablesAndAnchors() {
              [readings.coptGospel, readings.nonCopticGospel, readings.coptPsalm, readings.nonCopticPsalm, readings.Commentary, readings.Prophecies, readings.Sermony]
                .forEach(reading => setTableAndAnchor(reading, reading.key, reading.keyAnchor));

              readings.nonCopticPsalm.anchor = readings.nonCopticPsalm.anchor.previousElementSibling as HTMLElement; //We need to do this because the nonCopticPsalm is inserted before the previous sibling of nonCopticGospel.placeHolder

              function setTableAndAnchor(reading: typeReading, name: string, anchor: string) {
                reading.table = fetchTable(name);
                reading.anchor = findAnchor(`${Prefix.anchor}${anchor}`, btnHour.docFragment,)
              }

              (function getVersionsOfGospelAndPsalm() {
                //For the gospel and the psalm, we need to get 2 versions of each: the first version is only coptic, and the 2nd version includes all the other languages except the Coptic version
                const copticIndex = readingsLangs.indexOf('COP') + 1;

                [readings.coptGospel, readings.nonCopticGospel, readings.coptPsalm, readings.nonCopticPsalm]
                  .forEach((version) => {
                    if (!version.table) return;
                    if (version === readings.nonCopticGospel)
                      version.table = version.table
                        .filter((row, index) => index < 1 || row[0].startsWith(Prefix.readingRef));
                    else version.table =
                      version.table.map((row) => {
                        if ([readings.coptGospel, readings.coptPsalm].includes(version) && !row[0].startsWith(Prefix.readingRef))
                          return [row[0], row[copticIndex]];

                        else if (version === readings.nonCopticPsalm)
                          return row.filter((el, index) => index !== copticIndex);
                      });
                  });
              })();

              function fetchTable(name: string): string[][] {
                return findTable(`${Prefix.HolyWeek}${hour}${service}${name}&D=${copticReadingsDate}`, dayPrayers) || undefined
              }
            })();

            await insertTablesBeforeAnchors();

            async function insertTablesBeforeAnchors() {
              let languages: string[];

              const sequence = [
                readings.coptPsalm,
                readings.coptGospel,
                readings.nonCopticPsalm,
                readings.nonCopticGospel,
                readings.Commentary,
                readings.Prophecies,
                readings.Sermony,//!This must come directly after readings.Prophecies
                readings.KhinEfran,
                readings.Litany]
                .filter(reading => reading.table && reading.anchor);//We remove all the elements that do not have a reading.table or a reading.anchor 



              for (const reading of sequence) {
                (function setLanguage() {
                  if ([readings.KhinEfran, readings.Litany].includes(reading))
                    languages = prayersLanguages;

                  else if ([readings.Sermony, readings.Commentary, readings.Prophecies].includes(reading))
                    languages = readingsLangs;

                  else if ([readings.nonCopticGospel, readings.nonCopticPsalm].includes(reading))
                    languages = [defaultLanguage, foreingLanguage];

                  else if ([readings.coptGospel, readings.coptPsalm].includes(reading))
                    languages = ['COP'];
                })();

                reading.table = reading.table.filter(row => row);//We remove any undefined elements in the table;

                reading.table = await retrieveReadingTableFromBible(reading.table, languages);

                reading.table = reading.table?.filter(row => row.filter((el, index) => index > 0 && el?.length > 0).length > 0); //We remove the rows where all the values other than the row title are empty strings (This might be the case for some rows in the non Coptic gospel table)

                reading.table[0] = insertTableTitleRow();//We replace the first row of the table with a customized title row

                insertTablesBeforeAnchor([reading.table], reading.anchor, languages);

                function insertTableTitleRow(): string[] {
                  if (!reading.title) return reading.table[0];//If the title property of reading is not set, we will return the first row of the table. Otherwise we will create a title row from the reading.title.
                  const row = [Title(reading.table) + css.Title];
                  languages
                    .map(lang => row.push(reading.title[lang] || ''));
                  return row
                }
              };
            };
          };

          function insertThursdayLakanAndMassBtns() {
            //If we are on the Holy Thursday morning service
            if (weekDay !== 4 || service !== Morning) return;

            if (hour !== '11H') return; //It is the 9th Hour button

            const anchor = btn.docFragment.children[0] as HTMLDivElement;

            if (!anchor) return;
            const thursday = copticFeasts.HolyThursday;

            const lakanBtn = new Button({
              btnID: Btn.Lakan.btnID,
              label: getLabel({ AR: 'لقان خميس العهد', FR: 'Lavage des pieds' }),
              docFragment: new DocumentFragment(),
              onClick: () => Btn.Lakan.onClick(thursday, lakanBtn),
              afterShowPrayers: async () => await Btn.Lakan.afterShowPrayers(thursday, lakanBtn),
            });

            const btnMass = new Button({
              btnID: 'btnMass',
              label: getLabel({ AR: 'قداس خميس العهد', FR: 'Messe du Jeudi Saint' }),
              docFragment: new DocumentFragment(),
              onClick: () => {
                const Mass = Sequences().Mass;
                const sequence = [...Mass.StBasil, ...Mass.Communion];
                Btn.Mass.prayersSequence = sequence;
              },
              afterShowPrayers: async () => { },
            });

            btn.children = [lakanBtn, btnMass];//We add the Lakan and Mass btns ad children of the Pessah button in order to get them displayed in the left side bar

            insertExpandableBtn([lakanBtn, btnMass], anchor, 'afterend', btn.btnID.replace('btn', ''));//We also insert the Lakan and Mass buttons as inline buttons at the begining of the prayers in containerDiv
          };

          async function insertHolyFridayReadingsAndHymns() {
            if (weekDay !== 5) return;
            if (service !== Morning) return;
            const anchor = findAnchor(`${Prefix.anchor}HolyFriday`, btn.docFragment) as HTMLDivElement;
            if (!anchor) return console.log('The anchor was not found');

            await SixthHour();
            await NinethHour();

            async function SixthHour() {
              if (hour !== '6H') return;
              const Omono = findTable(`${Prefix.HolyWeek}${"OMonoGuenis"}`, PrayersArrayFR);//!The titles of this table starts with Prefix.HolyWeek, but the table is included in the PrayersArrayFR not in the GospelNightArray. This is because the languages of its text is not limited to [Coptic, French, Arabic] like the other tables in GospelNightArray, but include the Copt in arabic charcters [Coptic, French, Coptic Arabic, Arabic] 

              await insertStPaul("GAL:6:14-18", "Tayshoury");//Inserting the St. Paul Reading

              insertTable(getLitanies("H6Litanies"), prayersLanguages, anchor); //Inserting the 6th hour litanies

              if (Omono)
                insertTable(Omono as string[][], prayersLanguages, anchor);//Inserting "Ô Monon Guenis"

            };

            async function NinethHour() {
              if (hour !== '9H') return;
              const Agios = findTable(Prefix.commonPrayer + "Agios&D=$copticFeasts.HolyFriday", PrayersArrayFR);
              await insertStPaul('PHP:2:5-11', "Tishoury");
              insertTable(getLitanies("H9Litanies"), prayersLanguages, anchor); //Inserting the 9th hour litanies
              if (Agios)
                insertTable(Agios as string[][], prayersLanguages, anchor);//Inserting "Agios"

            }

            async function insertStPaul(ref: string, tishori: string) {
              (function insertResponse() {
                const response = findTable(`${Prefix.HolyWeek}${"FayEtaf"}`, PrayersArrayFR) as string[][]; //!Although the table title starts with Prefix.HolyWeek, it is included in the PrayersArrayFR not in the GospelNightArray. This is because the languages of their text is not limited to [Coptic, French, Arabic] like the other tables in GospelNightArray, but include the Copt in arabic charcters [Coptic, French, Coptic Arabic, Arabic];
                const placeHolder = [Prefix.placeHolder, Prefix.massCommon + tishori];
                response.splice(1, 0, placeHolder);//Inserting a placeHolder element to retrieve the relevant "Tay Shory" or "Tishory" part

                insertTable(response, prayersLanguages, anchor);
              })();

              await insertReading();

              async function insertReading() {
                const intros = ReadingsIntrosAndEnds();
                const langs = getLanguages(Prefix.stPaul);
                const stPaul = [
                  getIntro(intros.stPaulIntro, css.Intro),
                  [Prefix.readingRef + ref],
                  getIntro(intros.stPaulEnd, css.End)
                ];//!needs to be checked and tested
                const reading = await retrieveReadingTableFromBible(stPaul, langs);
                insertTable(reading, langs, anchor);


                function getIntro(intro, css: string) {
                  return [
                    Prefix.same + css,
                    ...langs.map(lang => intro[lang] as string)
                  ];
                }
              }
            }


            function getLitanies(hour: string) {
              return findTable(Prefix.bookOfHours + hour, PrayersArrayFR) as string[][];
            }

          };

          function insertTable(table: string[][], langs: string[], anchor: HTMLElement) {
            if (!table || !langs || !anchor) return;
            insertTablesBeforeAnchor([table], anchor, langs);
          };

        }
      }
    }
  }
});

Btn.Bible = new Button({
  btnID: 'btnBible',
  label: getLabel({
    AR: 'الكتاب المقدس',
    FR: 'La Bible'
  }),
  onClick: async (refs?: { bookID: string, chapterNumber: string }) => {
    if (refs)
      return await chapterBtnOnClick(refs.bookID, refs.chapterNumber);


    const newTestament = new Button({
      btnID: 'newTestament',
      label: getLabel({
        AR: 'العهد الجديد',
        FR: 'Nouveau Testament',
        EN: 'New Testament'
      }),
      onClick: async () => await testamentChildren(newTestament), //!We need the children to be added when the button is clicked not when it is created because the Bibles are not defined at this stage
      afterShowPrayers: addFilteringInput,
    });

    const oldTestament = new Button({
      btnID: 'oldTestament',
      label: getLabel({
        AR: 'العهد القديم',
        FR: 'Ancien Testament',
        EN: 'Old Testament'
      }),
      onClick: async () => await testamentChildren(oldTestament), //!We need the children to be added when the button is clicked not when it is created because the Bibles are not defined at this stage
      afterShowPrayers: addFilteringInput,
    });

    Btn.Bible.children = [oldTestament, newTestament];

    async function testamentChildren(btn: Button) {
      btn.children = btn.children || await getBooksButtons(btn)
    };

    function addFilteringInput() {
      [sideBarBtnsContainer, containerDiv.querySelector('#btnsMainPageDiv') as HTMLElement]
        .forEach(container => insertInput(container));

      function insertInput(container: HTMLElement) {
        const input = document.createElement('input');
        container.prepend(input);
        input.id = 'inputFilter';
        input.defaultValue = {
          AR: 'بحث...',
          FR: 'Recherche...',
          EN: 'Search...',
        }[defaultLanguage];
        input.addEventListener('focus', () => input.value = '');
        input.addEventListener('keyup', filterButtons);
        //  input.style.bottom = (container.previousElementSibling as HTMLElement).style.top;

        function filterButtons() {
          const btns = Array.from(container.children).filter(child => child.id.startsWith('btnBook')) as HTMLButtonElement[];

          if (!btns.length) return;
          btns.forEach(btn => btn.classList.remove(css.hidden)); //We unhide all the buttons
          const notMatching = btns.filter(btn => !RegExp(input.value, 'i').test(btn.innerText));//We filter all the elements not matching the input

          notMatching.forEach(btn => btn.classList.add(css.hidden)); //We hide the unmatching buttons

        }
      }
    };

    async function getBooksButtons(btn: Button): Promise<Button[]> {
      let booksList = await getBibleBooksList(defaultLanguage);
      if (!booksList) return;

      if (btn === oldTestament) booksList = booksList.slice(0, 48);
      else if (btn === newTestament) booksList = booksList.slice(48, booksList.length);

      const books = booksList.map(book => [book.human_long, book.id]);

      return books.map(([name, id], index) => {
        const btn = new Button({
          btnID: `btnBook${index}`,
          label: { DL: name, FL: undefined },
          onClick: () => btn.children = btn.children || getChaptersButtons(id),//!We need the children to be added when the button is clicked not when it is created because the Bibles are not defined at this stage
          afterShowPrayers: () => document.getElementById('inputFilter')?.remove(),
        });
        return btn
      });
    }

    function getChaptersButtons(bookID: string): Button[] {
      const book: bibleBook = Bibles[defaultLanguage][0]?.find((book: bibleBook) => book[0].id === bookID);

      if (!book) return;

      return chaptersBtns(book);

      function chaptersBtns(book: bibleBook) {
        const [chaptersList, bookID] = [book[0].chaptersList, book[0].id];

        return chaptersList
          .filter(chapter => Number(chapter))
          .map(chapter => chapterButton(chapter));

        function chapterButton(chapter: string) {
          {
            return new Button({
              btnID: `btnChapter${chapter}`,
              label: getLabel(getChapterLabel(chapter)),
              onClick: () => chapterBtnOnClick(bookID, chapter)
            });
          }

        }
      }
    }

    async function chapterBtnOnClick(bookID: string, chapterNumber: string): Promise<boolean> {
      if (!bookID || !chapterNumber) return;
      const languages = [defaultLanguage];
      if (foreingLanguage) languages?.push(foreingLanguage);

      await showChapterText();

      async function showChapterText() {
        const title: string[] =
          [
            `'Bible_${bookID}${chapterNumber}${css.Title}`,
          ];
        await retrieve();

        async function retrieve() {
          const [bookDefault, bookForeign] = await Promise.all(languages.map(async lang => await getBook(lang)));
          const first = bookDefault.chaptersList.find(el => Number(el));
          const ref = `${Prefix.readingRef}${bookID}:${chapterNumber}:${first}-End`;
          const retrieved = await retrieveReadingTableFromBible([[ref]], languages);
          [bookDefault, bookForeign]
            .map((book, index) => title.push(getTitle(book, languages[index], chapterNumber)));
          retrieved[0] = title;
          showPrayers({
            table: retrieved,
            languages: languages,
            position: containerDiv,
            clearContainerDiv: true,
            clearRightSideBar: true,
          });
          updateBookmark(bookID, chapterNumber);
        };

        async function getBook(lang: string) {
          if (!lang) return
          const list = await getBibleBooksList(lang);
          return list?.find(b => b.id === bookID);
        }

      }


      (function appendNextAndPrevBtns() {
        const btnsDiv = document.createElement('div');
        containerDiv.append(btnsDiv);
        const right = '⇒', left = '⇐';
        let goTo: boolean = true;
        if (defaultLanguage === 'AR') goTo = !goTo;

        const next = new Button({
          btnID: 'btnNext',
          label: getLabel({
            AR: right,
            FR: right,
            EN: right,
          }),
          onClick: () => nextOnClick(goTo, bookID, chapterNumber)
        });

        const prev = new Button({
          btnID: 'btnPrev',
          label: getLabel({
            AR: left,
            FR: left,
            EN: left,
          }),
          onClick: () => nextOnClick(!goTo, bookID, chapterNumber)
        });

        [prev, next].forEach(btn => {
          createHtmlBtn({
            btn: btn,
            btnsContainer: btnsDiv,
            btnClass: css.inlineButton
          })
        });

        btnsDiv.classList.add(css.inlineButtonsContainer);
        // floatOnTopOrBottom(btnsDiv, false, "0px");
        btnsDiv.style.gridTemplateColumns = setGridColumnsOrRowsNumber(btnsDiv);

        async function nextOnClick(next: boolean, id: string, chapterNumber: string) {
          const books = await getBibleBooksList(defaultLanguage);

          const [book, chapter] = getBookAndChapter();

          await chapterBtnOnClick(book?.id, chapter);

          updateBookmark(book.id, chapter);

          function getBookAndChapter(): [bibleBookKeys, string] {
            let book = books?.find(b => b.id === id);
            const bookIndex = books.indexOf(book);
            let chaptersList = book.chaptersList.filter(chapter => Number(chapter));//We remove any non numerical chapters from the list
            const chapterIndex = chaptersList.indexOf(chapterNumber);

            if (next && chapterIndex === chaptersList.length - 1) {
              //There is no next chapter in the same book. We will go to the next book
              book = books[bookIndex + 1] || books[0];
              chaptersList = book.chaptersList.filter(chapter => Number(chapter));
              chapterNumber = chaptersList[0]
            } else if (next) {
              //There is a next chapter in the same book
              chapterNumber = chaptersList[chapterIndex + 1]
            } else if (!next && chapterIndex === 0) {
              //No previous chapter in the same book
              book = books[bookIndex - 1] || books[books.length - 1];
              chaptersList = book.chaptersList.filter(chapter => Number(chapter));
              chapterNumber = chaptersList[chaptersList.length - 1]
            } else if (!next) {
              //There is a previous chapter
              chapterNumber = chaptersList[chapterIndex - 1]
            }

            return [book, chapterNumber]
          }

        }
      })();

      function updateBookmark(bookID: string, chapterNumber: string) {
        bookMarks[0] = [bookID, chapterNumber];//We add the chapter to the bookMarks
        localStorage.bookMarks = JSON.stringify(bookMarks);//We save the bookMarks to the local storage
      }

      scrollToTop();
      return true

      function getTitle(book: bibleBookKeys, lang: string, chapterNumber: string): string {
        if (!book) return '';
        return book.human_long + '\n' + getChapterLabel(chapterNumber)[lang] || ''
      }
    }

    function getChapterLabel(chapter: string): { AR: string; FR: string; EN: string } {
      return {
        AR: `إصحاح ${chapter}`,
        FR: `Chapître ${chapter}`,
        EN: `Chapter ${chapter}`,
      }
    }
  },
  afterShowPrayers: () => {
    (function insertLastReadingBtn() {
      if (!localStorage.bookMarks) return;
      const lastReading = JSON.parse(localStorage.bookMarks)[0];
      if (!lastReading) return;
      //We create a fake button simulating the action of chapters' buttons of each book
      const btnLabel = getLabel({
        AR: 'آخر قراءة',
        FR: 'Dernier chapitre lu',
        EN: 'Last Reading'
      });
      const btn = new Button({
        btnID: 'lastReading',
        label: btnLabel,
        cssClass: 'btnBookMark',
        onClick: async () => {
          await Btn.Bible.onClick({ bookID: lastReading[0], chapterNumber: lastReading[1] });
        },
      });

      (function addSideBarShortcut() {
        const bookMarkDiv: HTMLDivElement = document.createElement("div"); //this is just a container

        bookMarkDiv.role = "button";
        bookMarkDiv.id = 'bookmarkLast';
        bookMarkDiv.classList.add(css.sideTitle);
        sideBarTitlesContainer.appendChild(bookMarkDiv);
        let bookmark = document.createElement("a");
        bookMarkDiv.appendChild(bookmark);
        bookmark.innerText = btnLabel[defaultLanguage];
        bookMarkDiv.addEventListener("click", () =>
          displayChildButtonsOrPrayers(btn));

      })();

      (function addMainPageBtn() {
        const btnDiv = document.createElement('div');
        btnDiv.classList.add(css.inlineButtonsContainer);
        containerDiv.prepend(btnDiv);
        createHtmlBtn({
          btn: btn,
          btnsContainer: btnDiv,
          btnClass: btn.cssClass,
          clear: false,
        })
      })();
    })();

  }
});


Btn.Edit = new Button({
  btnID: "btnEditMode",
  label: getLabel({
    AR: "تعديل النص",
    FR: "Enter Editing Mode",
    EN: "Enter Editing Mode",
  }),
  onClick: () => {
    if (document.getElementById("selectArray")) return; //If a select element is already appended, we return
    //@ts-ignore
    if (!console.save) addConsoleSaveMethod(console); //We are adding a save method to the console object
    containerDiv.innerHTML = "";
    containerDiv.dataset.editingMode = "true";
    let editable = [
      "Choose from the list",
      "NewTable",
      'Fun("arrayName", "Table\'s Title")',
      "Edit Day Readings",
      "PrayersArray",
      "GospelDawnArray",
      "GospelMassArray",
      "GospelNightArray",
      "GospelVespersArray",
      "KatholikonArray",
      "PraxisArray",
      "PropheciesDawnArray",
      "StPaulArray",
      "SynaxariumArray",
    ];
    let select = document.createElement("select"),
      option: HTMLOptionElement;
    select.id = "selectArray";
    select.style.backgroundColor = "ivory";
    select.style.height = "30pt";
    editable.forEach((name) => {
      option = document.createElement("option");
      option.innerText = name;
      option.contentEditable = "true";
      select.add(option);
    });

    document;
    containerDiv.insertAdjacentElement("beforebegin", select);
    select.addEventListener("change", () =>
      startEditingMode({ select: select })
    );
  },
});

/**
 * Inserts buttons each of which redirects to a specific part in a given mass

 * @param {Button[]} btns - an array of Button elements for each of which an html element will be created by createBtn() and appended to a newly created div. Each of the html buttons created will, when clicked
 * @param {InsertPosition} position - the position at which the div containing the created html elements for each button, will be inserted compared to the containerDiv child retrieved using the querySelector parameter
 * @param {string} btnsContainerID - the id of the div container to which the html buttons will be appended. This id may be needed to select the div after redirection
 */
async function insertRedirectionButtons(
  btns: Button[],
  position: { beforeOrAfter: InsertPosition; el: HTMLElement },
  btnsContainerID: string
) {
  if (!position.beforeOrAfter) position.beforeOrAfter = "beforebegin";
  let div = document.createElement("div");
  div.id = btnsContainerID;
  div.classList.add(css.inlineButtonsContainer);
  btns.map((btn) =>
    div.appendChild(
      createHtmlBtn({ btn: btn, btnsContainer: div, btnClass: btn.cssClass })
    )
  );
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
async function showMultipleChoicePrayersButton(args: {
  filteredPrayers: string[][][];
  languages: string[];
  btnLabels: typeBtnLabel;
  masterBtnID: string;
  masterBtnDiv?: HTMLElement;
  anchor?: HTMLElement;
}) {
  if (!args.anchor) console.log("anchor missing");
  if (!args.masterBtnDiv && args.anchor) {
    args.masterBtnDiv = document.createElement("div"); //a new element to which the inline buttons elements will be appended
    args.anchor.insertAdjacentElement("afterend", args.masterBtnDiv); //we insert the div after the insertion position
  }
  if (!args.masterBtnDiv) return console.log('Didn\'t find masterBtnDiv');

  (async function createMasterBtn() {
    let btn: Button = new Button({
      btnID: args.masterBtnID,
      label: args.btnLabels,
      children: await createBtnsForPrayers(), //The inlineBtns are not added immediately, they are added later by createInlineBtns() below
      pursue: false, //!CAUTION: we must keep it false in order to stop the showChildButtonsOrPrayers() from continuing the execution after calling the onClick() property of the master button. Otherwise, this will show again the inlineButtons of the master button
      cssClass: css.inlineButton,
      onClick: () => {
        let groupOfNumber: number = 4;
        //We show the inlineBtnsDiv (bringing it in front of the containerDiv by giving it a zIndex = 3)
        showExpandableBtnsPannel(args.masterBtnID, true);
        //When the prayersMasterBtn is clicked, it will create a new div element to which it will append html buttons element for each inlineBtn in its inlineBtns[] property
        let newDiv = document.createElement("div");
        newDiv.id = args.masterBtnID + "Container";
        //Customizing the style of newDiv
        newDiv.classList.add(css.inlineButtonsContainer);
        //We set the gridTemplateColumns of newDiv to a grid of 3 columns. The inline buttons will be displayed in rows of 3 inline buttons each
        newDiv.style.gridTemplateColumns = setGridColumnsOrRowsNumber(
          newDiv,
          undefined,
          2
        );

        //We append newDiv  to inlineBtnsDiv before appending the 'next' button, in order for the "next" html button to appear at the buttom of the inlineBtnsDiv. Notice that inlineBtnsDiv is a div having a 'fixed' position, a z-index = 3 (set by the showInlineBtns() function that we called). It hence remains visible in front of, and hides the other page's html elements in the containerDiv
        expandableBtnsPannel.appendChild(newDiv);

        expandableBtnsPannel.style.borderRadius = "10px";
        let startAt: number = 0;
        //We call showGroupOfSisxPrayers() starting at inlineBtns[0]
        showGroupOfNumberOfPrayers(btn, startAt, newDiv, groupOfNumber);
      },
    });

    (function createMasterBtnHtml() {//Creating an html button element for prayersMasterBtn and displaying it in btnsDiv (which is an html element passed to the function)
      createHtmlBtn({
        btn: btn,
        btnsContainer: args.masterBtnDiv,
        btnClass: btn.cssClass,
        clear: false,
        onClick: btn.onClick,
      });
      args.masterBtnDiv.classList.add(css.inlineButtonsContainer);
      args.masterBtnDiv.classList.add(css.masterButtonDiv);
      args.masterBtnDiv.style.gridTemplateColumns = "100%"
        ;
    })();
    return btn
  })();

  /**
   * Shows a group of html buttons, each button shows a prayer. A button next permits to navigate through the list of html buttons
   */
  function showGroupOfNumberOfPrayers(
    masterBtn: Button,
    startAt: number,
    btnsDiv: HTMLDivElement,
    groupOfNumber: number
  ) {
    let childBtn: Button;

    (function createHtmlButtonNext() {
      if (masterBtn.children.length <= groupOfNumber) return; //We don't create next button if the nubmer of optional prayers is less or equal to the defined number of prayers to be displayed each time
      let next: Button = new Button({
        btnID: "btnNext",
        label: getLabel({ AR: "التالي", FR: "Suivants" }),
        cssClass: css.inlineButton,
      });

      //if the number of prayers is > than the groupOfNumber AND the remaining prayers are >0 then we show the next button
      if (masterBtn.children.length - startAt > groupOfNumber) {
        //We create the "next" Button only if there is more than 6 inlineBtns in the prayersBtn.inlineBtns[] property
        next.onClick = () => btnNextOnClick(true);
      } else if (masterBtn.children.length - startAt <= groupOfNumber) {
        next.label = getLabel({
          AR: "عودة",
          FR: "Retour"
        });
        next.onClick = () => btnNextOnClick(false);
      }

      if (!next.onClick) return; //If no onClick function was assigned to next, we do not create the next button
      createHtmlBtn({
        btn: next,
        btnsContainer: expandableBtnsPannel,
        btnClass: next.cssClass,
        clear: false,
        onClick: next.onClick,
      }); //notice that we are appending next to inlineBtnsDiv directly not to newDiv (because newDiv has a display = 'grid' of 2 columns. If we append to it, 'next' button will be placed in the 1st cell of the last row. It will not be centered). Notice also that we are setting the 'clear' argument of createBtn() to false in order to prevent removing the 'Go Back' button when 'next' is passed to showchildButtonsOrPrayers()

      function btnNextOnClick(forward: boolean = true) {
        //When next is clicked, we remove all the html buttons displayed in newDiv (we empty newDiv)
        btnsDiv.innerHTML = "";
        //We then remove the "next" html button itself (the "next" button is appended to inlineBtnsDiv directly not to newDiv)
        expandableBtnsPannel.querySelector("#" + next.btnID).remove();
        //We set the starting index for the next group of inline buttons
        if (forward) startAt += groupOfNumber;
        else startAt = 0;

        //We call showGroupOfSixPrayers() with the new startAt index
        showGroupOfNumberOfPrayers(masterBtn, startAt, btnsDiv, groupOfNumber);
      }
    })();

    (function createPrayersHtmlButtons() {
      for (
        let n = startAt;
        n < startAt + groupOfNumber && n < masterBtn.children.length;
        n++
      ) {
        //We create html buttons for the 1st 6 inline buttons and append them to newDiv
        childBtn = masterBtn.children[n];
        if (!foreingLanguage && !childBtn.label.DL) return;//If no foreign language has been set by the user, and the prayer is not availble in the defaultLanguage (we check this by seeing if there is a label in this language), we will not create the btn
        if (!childBtn.label.DL && !childBtn.label.FL) return; //Also if a foreign language has been set by the user, but the prayer is not availble in neither the defaultLanguage  nor the default language (we check this by seeing if there is a label in each language), we will not create the btn
        createHtmlBtn({
          btn: childBtn,
          btnsContainer: btnsDiv,
          btnClass: childBtn.cssClass,
          clear: false,
          onClick: childBtn.onClick,
        });
      }
    })();
  };


  /**
   *Creates a new Button for each optional prayer
   @return {Promise<Button[]>}
   */
  async function createBtnsForPrayers(): Promise<Button[]> {
    let btns: Button[];
    btns = args.filteredPrayers.map((table) => {
      //for each string[][][] representing a table in the Word document from which the text was extracted, we create an inlineButton to display the text of the table
      if (!table.length) return;
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
        .filter(btn => !btn?.label.DL && btn.label.FL)//For any button which prayer is not available in the defaultLanguage, but is available in the foreignLanguage, we will set its defaultLanguage label to be equal to its foreignLanguage lable. We do this, because any button that doesn't have a defaulLangauge label will be excluded from the btns array that the function will return
        .map(btn => {
          btn.label.DL = btn.label.FL;
          btns.splice(btns.indexOf(btn), 1);//We remove the button from btns array, and will push it to the array later in order to move it to the end
          return btn
        })
        .forEach(btn => btns.push(btn));

    return btns.filter(btn => btn?.label.DL);//!We return only the btns having a lable in the defaultLanguage

    function btnOnClick(btn: Button, title: string) {
      let table = findTable(title) || undefined
      console.log(title);
      let container = document.createElement('div');
      if (!table) return;
      let masterBtn: HTMLButtonElement = (
        Array.from(
          containerDiv.querySelectorAll("." + css.inlineButton)
        ) as HTMLButtonElement[]
      ).find((child) => child.id === args.masterBtnID);
      //When the prayer button is clicked, we empty and hide the inlineBtnsDiv
      hideExpandableButtonsPannel();

      let shown =
        Array.from(
          containerDiv.children as HTMLCollectionOf<HTMLDivElement>
        )
          .find(
            (div) =>
              div.dataset.optionalPrayer &&
              div.dataset.optionalPrayer === masterBtn.dataset.shown
          )

      if (shown) shown.remove();

      //We call showPrayers and pass inlineBtn to it in order to display the fraction prayer
      let createdElements = showPrayers({
        table: table,
        languages: btn.languages,
        position: container,
        clearContainerDiv: false,
        clearRightSideBar: false,
      }) || undefined;

      if (!createdElements) return;

      container.dataset.optionalPrayer = title;
      masterBtn.dataset.shown = title;
      args.masterBtnDiv.insertAdjacentElement('afterend', container);


      //We format the grid template of the newly added divs
      setCSS(createdElements);

      //We scroll to the button
      createFakeAnchor(args.masterBtnID);
    };
  }

}

/**
 * Adapts the Concluding Hymn of any Liturgy to the Season
 */
function adaptConcludingHymn(container: HTMLElement | DocumentFragment) {
  const anchor = findAnchor(`${Prefix.anchor}ConcludingHymn`, container);
  if (!anchor) return console.log('Didn\'t find Concluding Hymn Season Anchor');
  let tbl: string[][];

  (function insertSeasonal() {
    if (Season === Seasons.HolyWeek) return;
    let title = Prefix.commonPrayer + "ConcludingHymn&D=$Seasons.";
    if (Season === Seasons.NoSeason)
      title += Object.entries(Seasons).find(entry => entry[1] === naturalSeasons())[0];

    else title += Object.entries(Seasons).find(entry => entry[1] === Season)[0];

    tbl = findTable(title, CommonArray) || undefined;
    if (!tbl) return console.log('Didn\'t find a relevant table');

    (function ifGreatLent() {
      if (Season !== Seasons.GreatLent) return;
      anchor.previousElementSibling.remove()//We remove the first paragraph ('Amin Allelujah')

      if ([0, 6].includes(weekDay)) tbl = [tbl[tbl.length - 1]];//The last row is for the Great Lent Saturdays and Sundays
      else {
        tbl = [...tbl].slice(0, -2);//We remove the 2nd row, and we remove the last row. ! Notice that we create a new table
      }

    })();

    insertTablesBeforeAnchor([tbl], anchor, prayersLanguages);
  })();

  (function InsertPopeAndBishopHymn() {
    const label = {
      AR: 'في حضور البطرك أو أحد الأساقفة',
      FR: 'En présence du Pape ou d\'un évêque',
    };
    const bishop = new Button({
      btnID: 'concludingHymn',
      label: getLabel(label),
      cssClass: css.inlineButton,
      languages: prayersLanguages,
      docFragment: new DocumentFragment(),
      prayersSequence: [Prefix.commonPrayer + "ConcludingHymnBishop"],
    });

    insertExpandableBtn([bishop], anchor, 'beforebegin');
  })();

}
/**
 * Makes a buttons div container floating on the top of the page
 * @param {HTMLDivElement} btnContainer - the buttons div container we want to make float;
 * @param {boolean} top - true = top, false = bottom
 * @param {string} value - the value of the floating
 */
function floatOnTopOrBottom(
  btnContainer: HTMLDivElement,
  top: boolean,
  value: string = '5px',
) {
  btnContainer.style.position = "fixed";
  top ? btnContainer.style.top = value : btnContainer.style.bottom = value;
  btnContainer.style.justifySelf = "center";
};

/**
 * Fetchs and displaying any readings other than the Gospel and the Psalm
 * @param {string} readingPrefix
 * @param {string[][][]} readingArray - The array where the reading's texts are to be found
 * @param {HTMLElement} container - The container where the text will be displayed after fetched
 * @param {boolean} clearContainer - specifies whether the container should be cleared or not before the reading is displayed
 * @returns
 */
async function insertMassReadingOtherThanGospel(
  readingPrefix: string,
  position: { beforeOrAfter: InsertPosition; el: HTMLElement },
  languages:string[],
  container: HTMLElement | DocumentFragment = containerDiv,
  clearContainer: boolean = false,
  readingDate?: string,
): Promise<HTMLDivElement[][]> {
  //@ts-ignore
  if (!readingPrefix) return;
  if (container === containerDiv && clearContainer)
    container.innerHTML = "";
  if (!container.children?.length)
    container.appendChild(document.createElement("div"));
  if (!position.el) position.el = container.children[0] as HTMLElement;
  if (!position.beforeOrAfter) position.beforeOrAfter = "beforebegin";
  if (!readingDate) readingDate = copticReadingsDate;


  const readingArray = getArrayFromPrefix(readingPrefix);

  const reading = readingArray?.find((table) => tableMatchingDates(Title(table), [readingDate]));

  if (!reading) {
    console.log(
      "Did not find a reading for the current copticReadingsDate"
    );
    return
  };

  const tables: string[][][] = [];
  const titleRows: number[] =
    reading
      .filter(row => RegExp(`(${css.Title}|${css.SubTitle})$`).test(row[0]))//We search for all the rows having the 'Title' or 'SubTitle' class
      .map(row => reading.indexOf(row));//We return the index of each row
  if (titleRows.length < 2)
    tables.push(reading);//If there is no more than 1 row having 'Title' or 'SubTitle as class, we will push the reading table as is to tables
  else titleRows
    .forEach(index =>
      tables.push(reading.slice(index, titleRows[titleRows.indexOf(index) + 1] || titleRows[titleRows.length - 1])))//If there are more than 1 row having 'Title' or 'SubTitle' as class, we will split the reading tables into separate tables each starting with one of the 'Title/SubTitle' rows, and ending before the next 'Title/SubTitle' row 


  let retrievedText = await Promise.all(tables.map(async table => await retrieveReadingTableFromBible(table, languages)));

  return insertTablesBeforeAnchor(retrievedText, position.el, languages, position.beforeOrAfter);

}
/**
 * Retrives the text of the verses referenced in the table passed to it.
 * @param {string[][]} reading - A table containing the references of the verses/chapters to be retrieved
 * @param {string[]} langs - The languages in which the text will be retrieved.
 * @returns {Promise<string[][]>} - a table where the first row is the title of the reading (Book name and Chapter Number, and verses number), and the following rows include the text of the verses referenced in the "reading" table passed as argument. 
 */
async function retrieveReadingTableFromBible(reading: string[][], langs: string[]): Promise<string[][]> {
  if (!reading || !langs) return;
  langs = langs?.filter(lang => lang);
  const rowsWithReferences = reading
    .filter(row => row?.find(el => el?.startsWith(Prefix.readingRef)));//We check of any of the table's rows has an element starting with Prefix.readingRef: this means this element is a reference for a text that we need to retrieve from the relevant bible

  if (!rowsWithReferences.length) return reading;//It means that there are no rows with references

  let ready: Set<[string, bibleChapter]> = new Set();//this set will contain arrays of ["bookID:chapterNumber:lang", chapter] for each chapter treated. If the chapter is found, we will not retreive it again.

  const retrieved = [];

  for (const row of reading) {
    //! We can't use forEach because forEach doesn't await for async functions to resolve
    if (rowsWithReferences.includes(row))
      retrieved.push(...await retrieveTextFromReference(row));
    else retrieved.push(row);//If the row is the first row or any other row that does not include references, we will push it as is
  }


  return retrieved;

  async function retrieveTextFromReference(row: string[]): Promise<string[][]> {
    if (!row || row.length !== 1) return [];

    const retrievedText: string[] = [];

    let [ref, actor] = splitTitle(row[0]);//splitted[0] is the reference, and splitted[1] is the class (if any)

    ref = cleanReference(ref);//We clean the reference from the prefix and the spaces

    for (const lang of langs) {
      //!We can't use forEach because forEach doesn't await for async functions to resolve. It throughs a promise
      retrievedText.push(await retrieveVerses(lang, ref));//The row contains only the reference with no other text
    }

    const titleRow = await getTitleRow(ref) || [];

    if (ref.startsWith(Prefix.readingRef + 'PSA:'))
      return [titleRow, retrievedText];//We do not split the psalm paragraphs into different rows
    else return [titleRow, ...matchPargraphsSplitting(retrievedText, langs, row.length - langs.length, actor) || []];
  }

  async function retrieveVerses(lang: string, ref: string): Promise<string> {
    if (!lang || ![defaultLanguage, foreingLanguage].includes(lang)) return '';//We return an empty string if the language is not included in the list of languages that will be displayed to the user.
    const arabicBible = await getBibleVersion('AR');//We will need it to get the last verse when the reference ends with 'End',
    let parts: string[], verses: (string | Error)[];

    const bookID = ref.split(':')[0];

    const refs = ref.split('/');//Some references include more than one reference, speparated by '/', eg.: "GEN:12:3-End/13:1-End/14:1-8". When splitted, we will get [GEN:12:3-End, 13:1-End, 14:1-8]

    let text =
      await Promise.all(refs.map(async ref => {
        const [chapterNumber, versesRange] = ref.replace(`${bookID}:`, '').split(':')//We should always get an array of 2 elements eg: ['GEN', '13', '3-End/15-End']; 
        if (!chapterNumber || !versesRange) return '';//This means that the reference is badly formatted  

        verses = await Promise.all(
          versesRange
            .split('/')
            .map(async range => {
              range = replaceEnd(range, chapterNumber);//We replace 'End' with the last verse in the Arabic version since the references are taken from the Arabic version of the 
              return await retrieveVersesText(lang, bookID, chapterNumber, range) || "Error: Failed to retrieve verses"
            }));



        if (bookID === "PSA")
          return verses.join(' '); //We don't split the psalm into paragraphs
        return verses.join('\n');

      }));

    return text.join('\n');

    function replaceEnd(range: string, chapter: string) {
      if (!range.toUpperCase().includes('END')) return range;
      //!We will get the last verse of the chapter from the Arabic version of the Bible since this is the version that was used when inserting the readings refrences.
      const verses = getBibleChapter(chapter, getBibleBook(arabicBible, bookID))
        ?.filter(verse => Number(verse[0]));

      return range.replace('End', verses[verses.length - 1][0]);

    };

  }

  /**
   * Returns a title row (string[]) built from a reference
   * @param {string[]} row - the  row that contains the reading reference
   * @param {boolean} next - If true, it means that if the row does not contain any references, we will keep jumbing to the next row of the reading table until we find a row containg references. Its default value is false.
   */
  async function getTitleRow(ref: string): Promise<string[]> {
    if (!ref) return [];

    const titleRow = [Prefix.same + css.Title, ...langs.map(lang => '')];//We create a row for the title and add empty elements to it for each language

    const bookID = ref.split(':')[0];

    await Promise.all(langs.map(async (lang, index) => {
      //!We can't use forEach because forEach doesn't await for async functions to resolve. Instead it throughs an error
      if (![defaultLanguage, foreingLanguage].includes(lang)) return;
      await getTitle(lang, index)
    }));

    return titleRow;

    async function getTitle(lang: string, index: number) {
      const bible = await getBibleVersion(lang, false);
      const book = bible?.find(book => book[0].id === bookID);
      if (!book) return;
      const to = { AR: ' إلى ', FR: ' à ', EN: ' to ' }[lang];
      const and = { AR: 'و ', FR: ' et ', EN: ' and ' }[lang];

      titleRow[index + 1] = `${book[0].human} (${processRefs(to, and, book)})`

      function processRefs(to: string, and: string, book: bibleBook): string {
        //'ISA:13:11-End/14:1-End/16:8-End'
        let parts = ref.split(`${bookID}:`)[1].split('/');//=> [13:11-End, 14:1-End, 16:8-End];
        let fromTo: string;

        if (bookID === 'PSA') {
          fromTo = parts.map(part => {
            const psalm = part.split(':')[0];
            const verses = part.split('-');
            if (verses[0] === verses[1])
              return `${psalm}:${verses[0]}`
            return `${psalm}:${verses[0]}-${verses[1]}`
          }).join(and);//!Need to figuer it out
        }
        else if (parts.length < 2)
          fromTo = parts[0]; //=>13:11-End
        else if (parts.length > 1) {
          fromTo = `${parts[0].split('-')[0]} ${to}` //=>13:11 to 
          fromTo += `${parts[parts.length - 1].split(':')[0]}:`;//=> 13:11 to 16:
          fromTo += parts[parts.length - 1].split('-')[1]; //=> 13:11 to 16:End
        }

        if (fromTo.includes('End')) {
          const chapterNumber = parts[parts.length - 1].split(':')[0];

          fromTo = fromTo.replace('End',
            book[1][Number(chapterNumber) - 1]
              ?.filter(verse => Number(verse[0]))
              .length.toString())

        }
        return fromTo //=>//=>'13:1 à 16:30

      }
    }

  }


  /**
   * Removes spaces, '&C=[Class]', and Prefix.readingRef from the reference
   * @param {string} ref - a string containing the reference and usually starting with Prefix.readingRef 
   * @returns {string} the reading reference after removing any extra text from the string
   */
  function cleanReference(ref: string) {
    return ref?.replaceAll(' ', '')
      .replace(Prefix.readingRef, '')
      .split(Prefix.class)[0] || undefined;
  }

  /**
   * Retrieves the text of the specified verses of the specified chapter of the specified book of the specified Bible version
   * @param {string} lang - the language of the bible from which we want to retrieve the text of the specified verses
   * @param {string} bookID - the ID of the Bible book
   * @param {string} chapterNumber - the number of the chapter
   * @param {string} verses - the verses to be retrieved. It provides a range of verses separated by '-' (eg.: "13-20")
   * @returns {string} the text of the verses whit
   */
  async function retrieveVersesText(lang: string, bookID: string, chapterNumber: string, verses: string): Promise<string | Error> {

    if (bookID === 'PSA' && Number(chapterNumber)) chapterNumber = (Number(chapterNumber) + 1).toString();//We compensate the diffrence between the numbering of the psalms used in the Coptic Church, and the numbering in the used Arabic Bible book

    const exists = Array.from(ready).find(array => array[0] === bookID + ":" + chapterNumber + ":" + lang);

    if (lang === 'CA') lang = 'AR';
    if (exists)
      return getVersesRange(exists[1], verses.split('-'));

    if (!lang) {
      return new Error("The language is not valid. Error from retrieveVersesText()");
    };

    if (!chapterNumber || !verses) {

      console.log('chapterNumber = ', chapterNumber, "verses = ", verses);
      return new Error("Failed to retrieve verse");
    };
    if (!bookID || bookID.length > 3) {
      console.log('bookID = ', bookID);
      return new Error("Failed to retrieve verse");
    };//books ids are 3 letters length
    const Bible: Bible = await getBibleVersion(lang, false);
    if (!Bible)
      return new Error("Failed to retrieve verse");


    const chapterVerses: bibleVerse[] = getBibleChapter(chapterNumber, undefined, Bible, bookID);

    if (!chapterVerses) {
      console.log('chapterVerses = ', chapterVerses);
      return new Error("Failed to retrieve verse");
    };

    ready.add([bookID + ":" + chapterNumber + ":" + lang, chapterVerses])

    const range = verses.split('-');
    if (range.length !== 2) {
      console.log('bookID = ', bookID);
      return new Error(`Failed to retrieve verse because the range of verses is >2 which means that there is an error in the referecne : book = ${bookID}, chapter = ${chapterNumber}`);
    };
    return getVersesRange(chapterVerses, range);

    function getVersesRange(chapter: bibleChapter, [Start, End]: string[]): string | Error {

      (function filterChapter() {
        //!This action must be performed before processing the verses references. We remove the last element of the chapter if it is not a verese.
        chapter = chapter.filter(verse => Number(verse[0]) || ['\n', '#'].includes(verse[0]));

        while (chapter[chapter.length - 1]?.[0] === '\n') chapter.pop();
      })();

      const first = chapter.find(verse => verse?.[0] === Start);

      if (!first) return new Error("could not retrieve 'first'");

      let last = chapter.find(verse => verse?.[0] === End);
      if (!last && lang === 'AR') return new Error("could not retrieve 'last'");

      while (lang !== 'AR' && !last) {
        End = (Number(End) - 1).toString();
        last = chapter.find(verse => verse?.[0] === End);
      };

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
function matchPargraphsSplitting(retrieved: string[], langs: string[], add: number, actor: string = getActor(css.NoActor)): string[][] {
  if (add < 0) add = 0;

  if (add > 1) {
    alert('Error from matchPargraphsSplitting(): add>1 There is something wrong with the length of the row or of the language: langs.length = ' + langs.length.toString() + ' langs = ' + langs.toString());
    return;
  }

  const paragraphs = retrieved[langs.indexOf(defaultLanguage) + add]?.split('\n');
  if (!paragraphs) return;

  const exp = RegExp('Sup_\\d*_Sup', 'g');

  let ranges = paragraphs
    .map(parag => Array.from(parag.matchAll(exp))
      .map(match => match[0]));

  ranges = ranges
    .map(range => [range[0], range[range.length - 1]])//Those are the first and last verses numbers in each paragraph of the default language
    .filter(versesRange => versesRange[0] && versesRange[1]);//!We must remove any undefined elements;


  langs
    .forEach(lang => {
      if (lang === defaultLanguage) return;//We do not split the paragraph for the default language because its the paragraphs division in this lanaguage who will serve as guid for the splitting of the foreign language text
      let text = retrieved[langs.indexOf(lang) + add].replaceAll('\n', ' ');//!We must remove all the '\n' characters from the string
      if (!text) return;
      if (!exp.test(text)) return;//If the text is not divided into verses (i.e. includes('Sup))

      retrieved[langs.indexOf(lang) + add] =
        ranges
          .map(([Start, End], index) => {
            const match = splitTextIntoParagraphs(Start, index);
            text = text.replace(match, '');//! In some cases when a reading reference covers more than one chapter, there are verses with duplicates numbers from the different chapters (eg.: 'HEB:13:1-End/14:1-4', we have duplicate verses 1, 2, 3 and 4, from chapter 13 and from chapter 14). this will lead to the match being retrieved twice for those verses. In order to resolve this problem, we remove the matched text from the original text
            return match || ''

          })
          .join('\n');

      function splitTextIntoParagraphs(Start: string, index: number): string {
        //versesRange contains 2 elements. Each element is like "Sup_2_Sup". The 1st element is the number of the first verse in the paragraph. The 2nd element is the number of the last verse
        if (!Start) return '';
        let toVerse: string = '';//!We need a new variable otherwise we will modify versesRange[1] in its original array

        if (index < ranges.length - 1) {
          //If we have not reached the last element of ranges, we will set the last version (_Sup_[version number]_Sup) to the first verse of the next element in the ranges array, in order to retrive the text until the end of the last verse number. This RegExp will stop before the first occurence of the first verse in the next range

          let i = index + 1;
          while (ranges[i] && !RegExp(`${ranges[i][0]}`).test(text)) i++;  //!This covers a rare case where the numbering of the verses in the defaultLanguage version of the Bible is longer than the numbering in the foreign language version, which leads to a no match with the "_Sup[next verse number]_Sup" in the foreign language text, and missing the last block of versions in this laguage.
          toVerse = `?(?=${ranges[i]?.[0] || ''})`
        }


        const match = text.match(RegExp(`${Start}.*${toVerse}`));
        if (!match) return '';
        return match[0] || '';
      }

    });

  return splitParagraphsIntoRows();

  function splitParagraphsIntoRows(): string[][] {
    let table: string[][] = [], parags: string[];
    for (let i = 0; i < retrieved.length; i++) {
      parags = retrieved[i].split('\n');
      for (let ii = 0; ii < parags.length; ii++) {
        if (!table[ii]) {
          table.push([...langs.map(lang => '')]);
          add > 0 ? table[ii].unshift(retrieved[0]) : table[ii].unshift(`${Prefix.same}${Prefix.class}${actor}`); //If the number of elements in retrieved > languages, it means the first element is a title element. We will keep it as first element of each newly added row to the table, otherwise, we will manually add a title element as first element.
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
 * @param {boolean} isMass - indicates whether the retrieval of the 'Psalm' and 'Gospel' readings is sought in relation to a mass or incense liturgy (in such case the psalm and gospel responses and the diacon's introductions/ends to the readings will be added), or whether we only need to retrieve the psalm and gospel text (this is for example the case when they are retrieved by the DayReadings button)
 * @param {string} liturgy - the prefix of the liturgie for which we want to retrieve the gospel reading
 * @param {HTMLElement | DocumentFragment} container - the html element to which the html elements (i.e. div) containing the gospel will be appended after being created
 * @param {string[][][]} gospel - The tables containing the 'Psalm' and 'Gospel' references. If not provided, the function will retrieve the tables from the relevant tables array in accordance with today's copticReadingsDate
 * @returns
 */
async function insertGospelReadingAndResponses(args: {
  isMass: boolean;
  prefix: string;
  languages?: string[];
  container?: HTMLElement | DocumentFragment;
  clearContainer?: boolean;
  gospel?: string[][][];
}) {
  if (!args.prefix)
    return console.log(
      "the button passed as argument does not have prayersArray"
    );
  if (!args.container) args.container = containerDiv;
  if (args.container === containerDiv && args.clearContainer)
    args.container.innerHTML = "";
  if (!args.container.children?.length)
    args.container.appendChild(document.createElement("div"));
  if (!args.languages)
    args.languages = getLanguages(args.prefix);

  (function InsertPopeAndBishopPsalm() {
    if (!args.isMass) return;
    //!This must come before the readings and responses are inserted

    const bishop = new Button({
      btnID: 'PopePsalm',
      label: getLabel({
        AR: 'في حضور البطرك أو أحد الأساقفة',
        FR: 'En présence du Pape ou d\'un évêque',
      }),
      cssClass: css.inlineButton,
      languages: prayersLanguages,
      docFragment: new DocumentFragment(),
      prayersSequence: [Prefix.commonPrayer + "MaroEtshasf"],
    });

    insertExpandableBtn([bishop], getAnchor("Gospel")?.previousElementSibling as HTMLElement, 'beforebegin');

  })();

  await insertPsalmAndGospelReadings();

  (function insertPsalmAndGospelResponses() {
    if (!args.isMass || args.gospel) return; //If we are not calling the function with a Mass or a liturgy (Unbpaptized Mass, or Incense Dawn/Vespers) context, we will not insert the Gospel and Psalm responses

    if (copticReadingsDate === copticFeasts.PalmSunday && args.prefix === Prefix.gospelMorning) return;//We do not insert the 12 gospel responses for the Incense Morning liturgy on Palm Sunday because they are retrieved by reference in the gospel reading table

    insertResponse(3, getAnchor('Gospel')?.nextElementSibling as HTMLElement);//Inserting Gospel Response

    insertResponse(0, getAnchor('PsalmResponse'));//Inserting Psalm Response if any

    function insertResponse(index: number, anchor: HTMLElement, position: InsertPosition = 'beforebegin') {
      let prayersSequence: string[] = setGospelPrayersSequence(
        args.prefix,
        args.isMass
      ); //this gives us an array like ['PR_&D=####', 'RGID_Psalm&D=', 'RGID_Gospel&D=', 'GR_&D=####']
      //We will retrieve the tables containing the text of the gospel and the psalm from the GospeldawnArray directly (instead of call findAndProcessPrayers())
      let response: string[][] = PsalmAndGospelArray.find(
        (tbl) => splitTitle(Title(tbl))[0] === prayersSequence[index]
      ); //!Caution: this must be an '===' search operator not startWith() because otherwise, 'NativitayParamoun' will be selected for the 'Nativity' Season, and 'Baptism Paramoun' might be selected for the 'Baptism' Season if their tables in PrayersArray are before those of the relevant table

      if (!response?.length) return;

      insertTablesBeforeAnchor([response], anchor, prayersLanguages, position);
    }
  })();

  /**
 * Appends the gospel and psalm readings before gospelInsertionPoint(which is an html element)
 */
  async function insertPsalmAndGospelReadings() {
    let gospel: string[][][] = args.gospel || findGospelTables();

    if (!gospel || gospel.length < 2) return new Error("Error: gospel.length < 2"); //if no readings are returned from the filtering process, then we end the function

    await Promise.all(gospel
      .map(async table => {
        //!We can't use forEach because forEach dosen't await for promises to resolve
        //gospel[] should include 2 tables: the first table is the psalm and its title is like '....Psalm&D=...'. The 2nd is the gospel: its title is like '....Gospel&D=...'.
        const tblTitle = splitTitle(Title(table))[0];
        if (tblTitle.includes('?')) return;
        let type: string;
        tblTitle.includes('Gospel') ? type = 'Gospel' : type = 'Psalm';


        if (!args.isMass && type !== 'Gospel')
          return;
        let anchor: HTMLElement;

        if (type === 'Gospel')
          anchor = getAnchor(type);
        else if (copticReadingsDate === copticFeasts.PalmSunday && RegExp('Psalm([2-9]|[1-9][0-9])&D=').test(tblTitle))
          anchor = getAnchor('Gospel');//Starting from the 2nd Psalm, we will insert all the psalms and gospels before the gospel anchor
        else anchor = getAnchor('Psalm');

        if (!anchor) return;

        const tbls = await retrieveFromBible(table, tblTitle);

        (function palmSunday() {
          if (copticReadingsDate !== copticFeasts.PalmSunday)
            return;
          if (args.prefix !== Prefix.gospelMorning)
            return;

          tbls.unshift(buildTitleRow(type, tblTitle.split(type)[1].split('&D=')[0]));


          if (type !== 'Gospel')
            return;

          tbls.push(findTable(
            tblTitle
              .replace(args.prefix, Prefix.gospelResponse)
              .replace('Gospel', '')) || undefined);

          function buildTitleRow(type: string, n: string): string[][] {
            if (!Number(n)) return;
            const labels = [
              {
                AR: 'الإنجيل XXX',
                FR: 'XXX Evangile',
                EN: 'XXX Gospel',
              },
              {
                AR: 'مزمور ',
                FR: 'Psaume du ',
                EN: 'Psalm of the ',
              },
            ];
            const num = [
              {
                AR: 'الأول',
                FR: '1er',
                EN: '1st',
              },
              {
                AR: 'الثاني',
                FR: '2ème',
                EN: '2nd',
              },
              {
                AR: 'الثالث',
                FR: '3ème',
                EN: '3rd',
              },
              {
                AR: 'الرابع',
                FR: '4ème ',
                EN: '4th',
              },
              {
                AR: 'الخامس',
                FR: '5ème',
                EN: '5th',
              },
              {
                AR: 'السادس',
                FR: '6ème',
                EN: '6th',
              },
              {
                AR: 'السابع',
                FR: '7ème',
                EN: '7th',
              },
              {
                AR: 'الثامن',
                FR: 'premier ',
                EN: 'first ',
              },
              {
                AR: 'التاسع',
                FR: '9ème',
                EN: '9th',
              },
              {
                AR: 'العاشر',
                FR: '10ème',
                EN: '10th',
              },
              {
                AR: 'الحادي عشر',
                FR: '11ème',
                EN: '11th',
              },
              {
                AR: 'الثاني عشر',
                FR: '12ème',
                EN: '12th',
              },
            ];

            const tbl: string[][] = [[
              Prefix.gospelResponse + css.Title,
            ]];

            tbl[0].push(...getLanguages(Prefix.gospelResponse)
              .map(lang => {
                if (!labels[0][lang]) return '';
                const lable: string =
                  labels[0][lang]?.replace('XXX', num[Number(n) - 1][lang]);

                if (type === 'Psalm')
                  return labels[1][lang] + lable;
                return lable
              }));

            return tbl;

          }

        })();

        insertTablesBeforeAnchor(tbls, anchor)//!We are omitting the langs argument on purpose in ordrer for the languages to be retrieved from the title of each table. We do this since the tables do not all belong to the same tables array and do not hence share the same languages pattern/sequence 
      }));

    async function retrieveFromBible(tbl: string[][], tblTitle: string): Promise<string[][][]> {
      //! We didn't push the array to the table directly because otherwise it will add a new row to the original table each time we click on the Unbaptised Mass button or the Gospel Reading button
      const Intros = ReadingsIntrosAndEnds();
      //We will include the gospel end: 'Glory To God Forever' and the Psalm End 'Hallelujah'
      if (!args.isMass) return [await retrieveReadingTableFromBible(tbl, args.languages)];
      else if (tblTitle.includes('Gospel'))
        return [[...await retrieveReadingTableFromBible(tbl, args.languages), getReadingEnd(Intros.gospelEnd)]]; //We return a copy of the table not the original table in order to avoid modifying the original table.
      else if (tblTitle.includes('Psalm'))
        return [[...await retrieveReadingTableFromBible(tbl, args.languages), getReadingEnd(Intros.psalmEnd)]]; //We return a copy of the table not the original table in order to avoid modifying the original table.


      function getReadingEnd(end: { AR: string; FR: string; EN: string }): string[] {
        //We will return an array (i.e., a new row in the table) containing the text of the "Gospel End" (Glory to God Forever) in each language. This array needs to be constructed like this: ['Row title', 'End text in Arabic, 'End text in French or whatever other western language', 'End text in English']
        return [
          //The first element of the array contains the title of the row
          Prefix.same + css.End, //!Notice that we are giving it as class 'ReadingEnd'
          //The following elements represent the text of the 'Gospel End' in each language, in the same order as the languages passed in args.languages.
          ...args.languages
            .map(lang => end[lang])
        ];

      };

    };

    function findGospelTables(): string[][][] {
      let prayersArray: string[][][] = PrayersArraysKeys.find(array => array[0] === args.prefix)[2]();
      if (!prayersArray) return [];
      return prayersArray
        .filter((table) =>
          tableMatchingDates(Title(table), [copticReadingsDate]));
    };
  };

  function getAnchor(root: string): HTMLDivElement {
    if (!args.isMass) {
      //If we are not displaying the gospel in a Mass or a liturgy context, we don't need to insert the psalm. We will just show the text of the gospel reading itself. Hence, the div element will be same as args.gospelInsertionPoint
      containerDiv.appendChild(document.createElement('div'));
      return containerDiv.children[0] as HTMLDivElement
    }
    else return findAnchor(`${Prefix.anchor}${root}`, args.container);
  };

  /**
 * takes a liturgie name like "IncenseDawn" or "IncenseVespers" and replaces the word "Mass" in the buttons gospel readings prayers array by the name of the liturgie. It also sets the psalm and the gospel responses according to some sepcific occasions (e.g.: if we are the 29th day of a coptic month, etc.)
 * @param liturgie {string} - expressing the name of the liturigie that will replace the word "Mass" in the original gospel readings prayers array
 * @returns {string} - returns an array representing the sequence of the gospel reading prayers, i.e., an array like ['Psalm Response', 'Psalm', 'Gospel', 'Gospel Response']
 */
  function setGospelPrayersSequence(liturgy: string, isMass: boolean): string[] {
    //this function sets the date or the season for the Psalm response and the gospel response
    const prayersSequence: string[] = [
      Prefix.psalmResponse + anyDay + '||$Seasons.Kiahk', //This is its default value
      liturgy + "Psalm&D=",
      liturgy + "Gospel&D=",
      Prefix.gospelResponse, //This is its default value
    ]; //This is the generic sequence for the prayers related to the lecture of the gospel at any liturgy (mass, incense office, etc.). The OnClick function triggered by the liturgy, adds the dates of the readings and of the psalm and gospel responses

    if (!isMass) return prayersSequence; //If we are not calling the function within a mass/incense liturgy, we will not need to set the Psalm and Gospel Responses, we will return the prayersSequence array

    //setting the psalm and gospel responses
    (function setPsalmAndGospelResponses() {

      let PsalmAndGospelResponses = PsalmAndGospelArray.filter(
        (table) =>
          tableMatchingDates(Title(table), [copticDate, Season]));

      let psalmResponse = PsalmAndGospelResponses.filter((table) =>
        Title(table)?.startsWith(Prefix.psalmResponse)
      );
      let gospelResponse = PsalmAndGospelResponses.filter((table) =>
        Title(table)?.startsWith(Prefix.gospelResponse)
      );

      if (Season === Seasons.GreatLent) {
        [0, 6].includes(weekDay)
          ? (gospelResponse = [
            gospelResponse.find((table) => Title(table)?.includes("Sundays&D=")),
          ])
          : (gospelResponse = gospelResponse =
            [gospelResponse.find((table) => Title(table)?.includes("Week&D="))]);
      } else if (
        [Seasons.JonahFast, Seasons.JonahFeast, Seasons.StMaryFast].includes(Season)
        ||
        [copticFeasts.EndOfGreatLentFriday, copticFeasts.LazarusSaturday,
        ].includes(copticReadingsDate)
        ||
        copticDate === copticFeasts.CanaWedding) {
        //For these occasions, there are different gospel responses for the Dawn Incense Office, and the Unbaptised Mass. We will filter the results

        let prefix: string = "";
        if (liturgy === Prefix.gospelMorning) prefix = 'Dawn';
        if (liturgy === Prefix.gospelMass) prefix = 'Mass';

        if (Season === Seasons.JonahFast)
          prefix += copticReadingsDate?.split(Season)[1];//There are different responses for the Dawn Gospel and the Mass Gospel for each day of the Jonah Fast. We will  add the number of the day of Jonah Fast: eg.: "Mass1&D=Jonah1&C=Title" (for 1st day of the Jonah Fast), Dawn2&D=Jonah2&C=Title", etc.

        (function ifGospelVespers() {
          //If the liturgy is Vespers incesnse, in some occasions there are specific gospel response for the Vespers
          if (liturgy !== Prefix.gospelVespers) return;

          if (
            Season === Seasons.StMaryFast
            ||
            [copticFeasts.EndOfGreatLentFriday,
            copticFeasts.LazarusSaturday,
            ].includes(copticReadingsDate))

            prefix = 'Vespers';
        })();


        gospelResponse = [
          gospelResponse.find((table) =>
            Title(table)?.includes(prefix + "&D=")
          ),
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
  function getTomorowCopticReadingDate(): string {
    let today: Date = new Date(todayDate.getTime() + calendarDay); //We create a date corresponding to the  the next day. This is because in the PowerPoint presentations from which the gospel text was retrieved, the Vespers gospel of each day is linked to the day itself not to the day before it: i.e., if we are a Monday and want the gospel that will be read in the Vespers incense office, we should look for the Vespers gospel of the next day (Tuesday).

    return getSeasonAndCopticReadingsDate(
      convertGregorianDateToCopticDate(today, false)[1],
      today
    ) as string;
  }
}


/**
 * Takes a table title with muliple date values separated by '||', and checks if any of these dates include the date passed to it as coptDate
 * @param {string} tableTitle - a title of a table including multiple dates separated by '||'
 * @param {string} dates - the date that we want to check if it is included in the title. If omitted, it is given the value of the current copticDate
 * @returns {boolean} - return true if the date was found, and false otherwise
 */
function tableMatchingDates(
  tableTitle: string,
  dates: string[] = [copticDate]
): boolean {
  if (!tableTitle?.includes("&D=")) return false; //This means that the title does not specify any date for the prayer.

  tableTitle = splitTitle(tableTitle)[0].split("&D=")[1];

  return tableTitle
    .split("||")
    .map((date) => dateIsRelevant(date, dates))?.includes(true);
}

/**
 * Checks if the date argument matches the copticDate or the Season
 * @param {string} date - the date string that we want to check if it matches the copticDate or the Season
 * @param {string} dates  - the copticDate (or the Season) with which we want the compare the date
 * @returns  {boolean}
 */
function dateIsRelevant(
  date: string,
  dates: string[] = [copticDate]
): boolean | void {

  const value = dateValue();

  if (!value) return console.log("date is not valid: ", value);

  if (value === Seasons.Kiahk)
    return Kiahk.includes(Season);
  else if ([lordFeasts, stMaryFeasts, celestialBeingsFeasts, MartyrsFeasts, nonMartyrsFeasts, saintsFeasts, apostlesFeasts].includes(value))
    return Object.values(value).includes(copticDate);

  return dates.includes(value);

  function dateValue() {
    if (date?.startsWith("$"))
      return eval(date.replace("$", ""));
    else if (/^\d{2}00$/.test(date))
      return date?.replace('00', copticMonth);
    else return date
  }
}

/**
 * Inserts one or more 'inline' button(s) which when clicked, displays an expandable container with prayes
 * @param {Button[]} btns 
 * @param {HTMLDivElement|Element} anchor 
 * @param  {InsertPosition} before 
 * @param {string} titlesGroup 
 * @param {boolean} append 
 * @param {string} dataGroup - Optiona
 * @returns 
 */
function insertExpandableBtn(btns: Button[], anchor: HTMLDivElement | Element, before: InsertPosition = 'beforebegin', titlesGroup?: string, append: boolean = true, dataGroup?: string): HTMLDivElement {
  if (!anchor) return;
  const btnsContainer = document.createElement('div');
  
  btnsContainer.classList.add(css.inlineButtonsContainer);
  if (defaultLanguage === 'AR') btnsContainer.dir = 'rtl';
  if (dataGroup) btnsContainer.dataset.group = dataGroup;
  anchor.insertAdjacentElement(before, btnsContainer);

  btns.forEach(btn => insert(btn));

  function insert(btn: Button) {
    const html = createHtmlBtn({
      btn: btn,
      btnsContainer: btnsContainer,
      btnClass: btn.cssClass || css.inlineButton,
      clear: false,
      onClick: () => {
        const id = btn.btnID + 'Expandable';
        let expandable = containerDiv.querySelector(`#${id}`);

        if (expandable) return toggle(expandable, btns.map(btn => btn.btnID), titlesGroup);

        (async function insertExpandable() {
          expandable = document.createElement('div');
          expandable.id = id;
          btnsContainer.insertAdjacentElement('afterend', expandable);

          await displayChildButtonsOrPrayers(btn, false, false);

          expandable.appendChild(btn.docFragment);

          if (!titlesGroup) return;

          const titles = Array.from(expandable.children).filter((div: HTMLDivElement) => isTitlesContainer(div)) as HTMLDivElement[];
          if (!append) titles.reverse();
          showTitlesInRightSideBar(titles, undefined, false, titlesGroup + btn.btnID, append, titlesGroup);//We add a prefix in order to avoid duplicate ids with already existing divs

          toggle(expandable, btns.map(btn => btn.btnID), titlesGroup, false); //!Notice that toggle = false because we don't want to hide the expandable that we have just created for the first time
        })();
      }
    });
    html.classList.add(css.expand); //We need this class in order to retrieve the btn in Display Presentation Mode
  }

  btnsContainer.style.gridTemplateColumns = setGridColumnsOrRowsNumber(btnsContainer, 3);

  return btnsContainer;

  function toggle(expandable: HTMLDivElement | Element, ids: string[], titleGroup: string, toggle: boolean = true) {
    if (!expandable) return;

    ids.filter(id => !RegExp(id).test(expandable.id))
      .forEach(id => {
        //We hide all the other expandables and their titles
        containerDiv.querySelector('#' + id + 'Expandable')?.classList.add(css.hidden);
        toggleTitles(titleGroup + id, true);
      });

    if (!toggle) return; //It means we don't want to toggle the expandable itself and its titles

    expandable.classList.toggle(css.hidden);
    toggleTitles(titleGroup + expandable.id.replace('Expandable', ''));

    function toggleTitles(group: string, hide: boolean = false) {
      if (!group) return;
      const titles = Array.from(sideBarTitlesContainer.children)
        .filter((div: HTMLDivElement) => div.dataset.group === group);

      if (!hide)
        titles.forEach(div => div.classList.toggle(css.hidden))
      else titles.forEach(div => div.classList.add(css.hidden))
    };
  }
}

/**
 * Returns the text of the specified chapter of the specified book of the specified version of the Bible
 * @param {[string, stirng[][]][][]} bible - the array containing all the books and chapters of the Bible in a given language
 * @param {string} bookID - the initials of a given book of bibleVersion
 * @param {string} chapterNumber - the number of the chapter of the book specified in bookID
 */
function getBibleChapterText(args: { chapterNumber: string, book?: bibleBook, bible?: Bible, bookID?: string, lang: string }): string {
  if (!args.chapterNumber) return '';
  if (args.book)
    return joinVerses(getBibleChapter(args.chapterNumber, args.book));
  else if (args.bible && args.bookID)
    return joinVerses(getBibleChapter(args.chapterNumber, undefined, args.bible, args.bookID));
  else return '';

  function joinVerses(verses: bibleVerse[]): string {
    if (!verses) return;
    return verses.map(verse => getVerseText(verse)).join('')
  }
}

/**
 * Returns the text of the verse after combining the verse number (1st element) and the text of the verse, adding 'Sup' before and after the verse number and a non breaking space after it
 * @param {bibleVerse} verse - a string[] of 2 elements: the 1st element is the verse number, and the 2nd is the text of the verse
 */
function getVerseText(verse: bibleVerse) {
  if (!verse) return;
  if (verse.length < 2 && verse[0] === '\n')
    return verse[0];//We return the new paragraph mark
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
function getBibleVerse(bible: Bible, bookID: string, chapterNumber: string, verseNumber: string): string[] {
  return getBibleChapter(chapterNumber, undefined, bible, bookID).find(verse => verse[0] === verseNumber)
}

/**
  * Returns an array of [string, string[][]] where the string[][] element represents all the verses of the specified chapter of the specified book of the specified version of the Bible. Each verse is a string[] where the 1st element is the verse number, and the 2nd element is the verse text 
  * @param {[string, stirng[][]][][]} bible - the array containing all the books and chapters of the Bible in a given language
  * @param {string} bookID - the initials of a given book of bibleVersion
  * @param {string} chapterNumber - the number of the chapter of the book specified in bookID
  */
function getBibleChapter(chapterNumber: string, book?: bibleBook, bible?: Bible, bookID?: string): string[][] {
  if (!chapterNumber) return;
  if (!book) book = getBibleBook(bible, bookID);
  if (!book) return;
  let index = book[0].chaptersList.indexOf(chapterNumber);
  if (book[0].chaptersList.length > book[1].length && !Number(book[0].chaptersList[0]))//It means that the first element of the list is the introduction while the chapters do not include the introduction.
    index -= 1;
  return book[1][index];//We only return verses whith a number in order to exclude verses numbered like "1a"
}
/**
   * Returns an array of [string, string[][]][] representing an entire book of the specified bibleVersion 
   * @param {[string, stirng[][]][][]} bible - the array containing all the books and chapters of the Bible in a given language
   * @param {string} bookID - the initials of a given book of bibleVersion
   */
function getBibleBook(bible: Bible, bookID: string): bibleBook {
  if (!bible || !bookID) return;
  return bible.find(book => book[0].id.startsWith(bookID))
}

async function getBibleVersion(lang: string, msg: boolean = true): Promise<Bible> {
  if (!lang) return;
  if (Bibles[lang][0])
    return Bibles[lang][0];

  let msg1 = { AR: 'تم تحميل الإنجيل، يمكنم الآن إعادة المحاولة.', FR: 'La Bible est prête mainteant. Vous pouvez réessayer', EN: 'The Bible is now available. Please try again' };

  let msg2 = {
    AR: 'جاري تحميل الكتاب المقدس. سوف تستغرق العملية ثواني قليلة. سوف يتم إخطارك حين ينتهي التحميل.',
    FR: 'La Bible est encours de téléchargement. Cela devrait prendre quelques secondes. Vous allez être notifié lorsque la bible sera disponible.',
    EN: 'The Bible has not been loaded yet. It should take few seconds. You will be notified when done'
  }
  if (msg) alert(msg2[lang]);

  msg ? reloadScripts(['Bible' + lang], undefined, undefined, msg1[lang]) : reloadScripts(['Bible' + lang]);

  return new Promise<Bible>((resolve) => {
    setTimeout(() => {
      if (Bibles[lang][0]) {
        resolve(Bibles[lang][0]);
      };
    }, 500)
  });

}

async function getBibleBooksList(lang: string): Promise<bibleBookKeys[]> {
  if (!lang) return;
  if (Bibles[lang][1]) return Bibles[lang][1];
  let bible = await getBibleVersion(lang, false);

  Bibles[lang][1] = bible?.map((book: bibleBook) => book[0]);

  return Bibles[lang][1];
}
