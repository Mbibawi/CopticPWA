const Sequences = {
    Incense: [
        //This is the generic sequence of any incense office (morning or evening). The onClick function triggered by btnIncenseDawn and btnIncenseVespers, will remove what is irrelevant and add keeps what needs to be kept
        Prefix.commonIncense + "Introduction",
        Prefix.bookOfHours + "Psalm50",
        Prefix.commonIncense + "LitaniesIntroduction",
        Prefix.incenseDawn + "SickLitany",
        Prefix.incenseDawn + "TravelersLitany",
        Prefix.incenseDawn + "OblationsLitany",
        Prefix.incenseVespers + "DepartedLitany",
        Prefix.commonPrayer + "AngelsPrayer" + anyDay,
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
            Prefix.massCommon + "AbsolutionForTheFather" + anyDay,
            Prefix.massCommon + "Tayshoury",
            Prefix.massCommon + "Tishoury",
            Prefix.massCommon + "IntercessionsHymn" + anyDay,
            Prefix.commonPrayer + "Creed"
        ], //Those are the prayers of the 'Unbaptized Mass'
        StBasil: [
            Prefix.massCommon + "ReconciliationComment",
            Prefix.massStBasil + "Reconciliation",
            Prefix.massCommon + "EndOfReconciliation",
            Prefix.massStBasil + "Anaphora",
            Prefix.massStBasil + "Agios",
            Prefix.massStBasil + "InstitutionNarrative" + anyDay,
            Prefix.massCommon + "AsWeAlsoCommemorateHisHolyPassionPart1" + anyDay,
        ], //The sequence of prayers of St Basil Mass (starting from Reconciliation)
        StGregory: [
            Prefix.massCommon + "ReconciliationComment",
            Prefix.massStGregory + "Reconciliation",
            Prefix.massCommon + "EndOfReconciliation",
            Prefix.massStGregory + "Anaphora",
            Prefix.massStGregory + "Agios",
            Prefix.massStGregory + "AsWeCommemorateYourHolyPassionPart1" + anyDay,
            Prefix.massStGregory + "CallOfTheHolySpiritPart1",
            Prefix.massStGregory + "LitaniesIntroduction",
            Prefix.massStGregory + "Litanies" + anyDay,
            Prefix.massStGregory + "FractionIntroduction"
        ], //The sequence of prayers of St Gregory Mass (starting from reconciliation)
        StCyril: [
            Prefix.massCommon + "ReconciliationComment",
            Prefix.massStCyril + "Reconciliation",
            Prefix.massCommon + "EndOfReconciliation",
            Prefix.massStCyril + "Anaphora",
            Prefix.massStCyril + "Agios",
            Prefix.massStCyril + "Part8" + anyDay,
            Prefix.massStCyril + "Part9" + anyDay,
            Prefix.massStCyril + "Part10" + anyDay,
            Prefix.massStCyril + "LitaniesIntroduction",
        ], // the sequence of prayers of St Cyril Mass (starting from Reconciliation)
        StJohn: [], // the sequence of prayers of St John Mass (tarting from Reconciliation)
        CallOfHolySpirit: [
            Prefix.massCommon + "CallOfTheHolySpiritPart1",
        ],
        Litanies: [
            Prefix.massCommon + "LitaniesIntroduction",
            Prefix.massCommon + "SaintsCommemoration",
            Prefix.massCommon + "CommemorationOfTheDeparted",
            Prefix.massCommon + "FractionIntroduction",
            Prefix.commonPrayer + "OurFatherInHeaven",
            Prefix.commonPrayer + "BlockInTheNameOfOurLord",
            Prefix.massCommon + "PrayerForTheFather" + anyDay,
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
            Prefix.psalmody + "TheotokiesConclusionXXX", //!Need to know when Watos and Adam Theotokies are prayed
            Prefix.commonPrayer + "WeExaltYouStMary",
            Prefix.commonPrayer + "Creed",
            Prefix.commonPrayer + "HolyLordOfSabaot",
            Prefix.psalmody + "ConcludingHymn",
            Prefix.commonPrayer + "HolyLordOfSabaot",
            Prefix.commonPrayer + "OurFatherInHeaven",
            Prefix.commonPrayer + "Agios",
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
    HolyWeek: {
        PassOver: [
            Prefix.HolyWeek + "HourIntroduction&D=$Seasons.HolyWeek",
            Prefix.HolyWeek + "PsalmAndGospel&D=$Seasons.HolyWeek",
            Prefix.HolyWeek + "Commentary&D=$Seasons.HolyWeek",
            Prefix.HolyWeek + "PassoverEnd&D=$Seasons.HolyWeek",
        ],
        Lakan: [
            Prefix.commonIncense + "Introduction",
            Prefix.cymbalVerses + "&D=$copticFeasts.HolyThursday",
            Prefix.bookOfHours + "Psalm50",
            Prefix.HolyWeek + "LakanProphecies&D=$copticFeasts.HolyThursday",
            Prefix.HolyWeek + "LakanSermony&D=$copticFeasts.HolyThursday",
            Prefix.massCommon + "BiEhmotGhar",
            Prefix.anchor + "Readings",
            Prefix.commonPrayer + "Agios&D=$copticFeasts.HolyThursday",
            Prefix.anchor + "GospelLitany",
            Prefix.incenseDawn + "SickLitany",
            Prefix.incenseDawn + "TravelersLitany",
            Prefix.massCommon + "SeasonalLitanyOfTheHarvest" + anyDay,
            Prefix.commonPrayer + "KyrieElieson",
            Prefix.massCommon + "SeasonalLitaniesConclusion",
            Prefix.commonPrayer + "KyrieElieson",
            Prefix.massCommon + "PresidentLitany",
            Prefix.incenseVespers + "DepartedLitany",
            Prefix.incenseDawn + "OblationsLitany",
            Prefix.commonPrayer + "CatechumensLitany",
            Prefix.HolyWeek + "LakanLitany",
            Prefix.commonPrayer + "BlockShlil",
            Prefix.commonPrayer + "BlockIriniPassi",
            Prefix.commonPrayer + "ChurchLitany",
            Prefix.commonPrayer + "PopeLitany",
            Prefix.commonPrayer + "MeetingsLitany",
            //Insert "Eyn Sophia Si Epros"
            Prefix.commonPrayer + "Creed",
            Prefix.massCommon + "LakanSpasmosAdamLong&D=$copticFeasts.HolyThursday",
            Prefix.massCommon + "DiaconResponseKissEachOther",
            Prefix.placeHolder,
            Prefix.massCommon + "SpasmosAdamShort",
            Prefix.HolyWeek + "LakanAnaphora&D=$copticFeasts.HolyThursday",
        ],
        ThursdayMass: [],
        SaturdayIncenseDawn: [],
        SaturdayMass: [],
    },
    Prosternation: [
        Prefix.commonIncense + "Introduction",
        Prefix.anchor + 'Cymbals',
        Prefix.cymbalVerses + anyDay,
        Prefix.bookOfHours + "Psalm50",
        Prefix.anchor + 'PropheciesIntro', //!provide
        Prefix.anchor + 'Prophecies',
        Prefix.anchor + 'PropheciesEnd', //!provide
        Prefix.massCommon + "WeWorshipYouChrist",
        Prefix.anchor + 'StPaulIntro', //!provide
        Prefix.anchor + 'StPaul',
        Prefix.anchor + 'StPaulEnd', //!provide
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
    Lakkan: [
        Prefix.massCommon + "BlessedYouAreWithYourFather",
        Prefix.commonIncense + "Introduction",
        Prefix.cymbalVerses + isWatosOrAdam(),
        Prefix.cymbalVerses + anyDay,
        Prefix.bookOfHours + "Psalm50",
        Prefix.commonPrayer + "AlleluiaGloryToOurGod",
        Prefix.commonPrayer + "GloryToFatherSonSpirit",
        Prefix.commonPrayer + "NowAlwaysAndForEver",
        Prefix.bookOfHours + "Alleluia",
        Prefix.anchor + "Prophecies",
        Prefix.massCommon + "WeWorshipYouChrist",
        Prefix.massCommon + "Tayshoury",
        Prefix.anchor + "StPaul",
        //!Hymn St Jean
        Prefix.commonPrayer + "Agios",
        Prefix.commonPrayer + "GospelLitany",
        Prefix.commonPrayer + "EfnotiNaynan",
        Prefix.commonPrayer + "AmeenKyrielison10",
        //!Hymne : J’ai vu l’Esprit saint descendre du ciel
        Prefix.incenseDawn + "SickLitany",
        Prefix.incenseDawn + "TravelersLitany",
        //!Season Litany
        Prefix.massCommon + "PresidentLitany",
        Prefix.incenseVespers + "DepartedLitany",
        Prefix.incenseDawn + "OblationsLitany",
        Prefix.massCommon + "CatechumensLitany",
        Prefix.incenseDawn + "LakanLitanyXXX", //'XXX' will be replaced with '&D=' + copticDate. We can't do this when the script is loaded because copticDate is not yet defined
        Prefix.commonIncense + "LitaniesIntroduction",
        Prefix.commonPrayer + "ChurchLitany",
        Prefix.commonPrayer + "PopeLitany",
        Prefix.commonPrayer + "MeetingsLitany",
        //!["", "", "Avec la sagesse de Dieu soyons attentifs. Pitié Seigneur, Pitié Seigneur.", "", "انصتوا بحكمة الله، يا رب ارحم، يا رب ارحم، يا رب ارحم."]
        Prefix.commonPrayer + "Creed",
        //!Hymn: Voici le témoignage de Jean le baptiste
        Prefix.massCommon + "DiaconResponseKissEachOther", //!Just the second part
        Prefix.massCommon + "SpasmosAdamShort",
        Prefix.incenseDawn + "AnaphoraXXX", //'XXX' will be replaced with '&D=' + copticDate. We can't do this when the script is loaded because copticDate is not yet defined
        Prefix.commonIncense + "LiturgyEnd"
    ],
};
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
[
    Sequences,
    bookOfHours,
    ReadingsIntrosAndEnds,
    GreatLordFeasts,
    MinorLordFeasts,
    lordFeasts,
    saintsFeasts,
    celestialBeingsFeasts,
    MartyrsFeasts,
    nonMartyrsFeasts,
    stMaryFeasts,
].forEach(obj => Object.freeze(obj));
const btnMainMenu = new Button({
    btnID: "btnMain",
    label: {
        AR: "العودة إلى القائمة الرئيسية",
        FR: "Retour au menu principal",
        EN: "Back to the main menu",
    },
    backGroundImage: "url(./assets/btnMassBackground.jpg)",
    onClick: () => {
        btnMainMenu.children = [
            btnMass,
            btnIncenseOffice,
            btnDayReadings,
            btnBookOfHours,
            btnPsalmody,
            btnBible
        ];
        if (copticReadingsDate === copticFeasts.PalmSunday) {
            btnMainMenu.children.splice(btnMainMenu.children.length - 1, 0, btnHolyWeek);
            btnMainMenu.children.splice(btnMainMenu.children.indexOf(btnPsalmody), 1);
        }
        ;
        if (Season === Seasons.HolyWeek)
            btnMainMenu.children = [btnHolyWeek, btnBookOfHours];
        if ([Seasons.KiahkWeek1, Seasons.KiahkWeek2, Seasons.KiahkWeek3, Seasons.KiahkWeek4].includes(Season))
            btnPsalmody.label = {
                AR: "الإبصلمودية الكيهكية",
                FR: "Psalmodie de Kiahk",
            };
        if (localStorage.editingMode === "true")
            btnMainMenu.children.push(getEditModeButton());
        [defaultLanguage, foreingLanguage].forEach(lang => getBibleVersion(lang, false));
    },
});
const btnGoToPreviousMenu = new Button({
    btnID: "btnGoBack",
    label: { AR: "السابق", FR: "Retour", EN: "Go Back" },
    backGroundImage: "url(./assets/btnMassBackground.jpg)",
    onClick: () => {
        scrollToTop(); //scrolling to the top of the page
    },
});
const btnMass = new Button({
    btnID: "btnMass",
    label: { AR: "القداسات", FR: "Messes", EN: "Mass" },
    onClick: (returnChildren = false) => {
        if (!btnMass.children)
            btnMass.children = [
                btnIncenseMorning,
                btnMassUnBaptised,
                btnMassBaptised
            ];
        if (returnChildren)
            return btnMass.children;
    },
});
const btnMassUnBaptised = new Button({
    btnID: "btnMassUnBaptised",
    label: {
        AR: "قٌدَّاسِ المَوْعُوظِينَ",
        FR: "Liturgie du Verbe",
        EN: "Unbaptised Mass",
    },
    docFragment: new DocumentFragment(),
    languages: [...prayersLanguages],
    onClick: () => {
        //Adding children buttons to btnMassUnBaptised
        btnMassUnBaptised.children = btnDayReadings.onClick(true);
        let btnsPrayersSequence = [
            ...Sequences.Mass.Unbaptized,
        ];
        (function adaptAlleluiaFayBiBiAndTayshoury() {
            btnMassUnBaptised.prayersSequence = adaptPrayersSequence();
            function adaptPrayersSequence() {
                //If we are not during a fast period or we are during a fast period but today is either Saturday or Sunday, or a Lord Feast, we will remove Hallelujah Ge Evmevi and Tishoury, in order to keep Hallelujah Faybibi and Tayshouri
                if (!isFast
                    ||
                        [0, 6].includes(weekDay)
                    ||
                        lordFeasts.find(date => [copticDate, copticReadingsDate].includes(date)))
                    return btnsPrayersSequence
                        .filter(title => ![Prefix.massCommon + "AlleluiaFayBiBiFast", Prefix.massCommon + "Tishoury"].includes(splitTitle(title)[0]));
                else
                    return ifIsFast();
                function ifIsFast() {
                    if (!isFast)
                        return;
                    if ([Seasons.GreatLent, Seasons.JonahFast].includes(Season)) {
                        //We are either during the week days of the Great Lent, or the 3 days of Jonah Fast
                        [
                            ["AlleluiaFayBiBiFast", "AlleluiaFayBiBi&D=$Seasons.GreatLent"], //Replacing "Halleljah Ge Evmevi" with "Halleluja E Ikhon"
                            ["Tishoury", "EnsotyTishoury&D=$Seasons.GreatLent"]
                        ] //Replacing "Tishoury" with "Ensoty Tishoury"
                            .forEach(array => btnsPrayersSequence[btnsPrayersSequence.indexOf(Prefix.massCommon + array[0])] = Prefix.massCommon + array[1]);
                    }
                    //We will remove 'Hellulja Fay Bibi'and keep only 'Hellulja Ge Evmev'i". We will also remove Tayshoury in order to keep only Tishoury 
                    return btnsPrayersSequence
                        .filter(title => ![Prefix.massCommon + "AlleluiaFayBiBi", Prefix.massCommon + "Tayshoury"].includes(splitTitle(title)[0]));
                }
            }
            ;
        })();
        scrollToTop();
        return btnMassUnBaptised.prayersSequence;
    },
    afterShowPrayers: async (btn = btnMassUnBaptised) => {
        let btnDocFragment = btn.docFragment;
        if (btnProsternation.children?.includes(btn))
            return insertBookOfHoursButton();
        btnIncenseMorning.afterShowPrayers(btn); //By calling the afterShowPrayers() of btnIncenseMorning and passing btnMassUnbaptised as argument, the function will call hideGodHaveMercyOnUsIfBishop() and will return. This will create an expandable button for the "PrayThatGodHaveMercyOnUs" dicaon response
        (function insertHisFoundationsAndIGodHaveMercy() {
            if (![Seasons.GreatLent, Seasons.JonahFast].includes(Season))
                return; //The following only applies during the Great Lent the 3 days of Jonah Fast (not the 4th day) that's why we check if isFast === true
            if ([6, 0].includes(todayDate.getDay()))
                return;
            let titles = [
                Prefix.commonPrayer + "WeHaveBeenSavedWithYou" + anyDay,
                Prefix.massCommon + "HisFoundations&D=$Seasons.GreatLent",
                Prefix.incenseDawn + "GodHaveMercyOnUsRefrain&D=$Seasons.GreatLent",
            ];
            selectElementsByDataSetValue(btnDocFragment, titles[0], { equal: true }, 'root').forEach(el => el.remove()); //We remove the existing 'Sotis Amen' prayer
            let tables = titles.map(title => findTable(title, getTablesArrayFromTitlePrefix(title)) || undefined); //We retrieve the 3 tables by their titles
            if (!tables || tables.length < 1)
                return;
            let anchor = selectElementsByDataSetValue(btnDocFragment, Prefix.massCommon + "AbsolutionForTheFather" + anyDay, { equal: true }, 'root')[0]; //This is the html element before which we will insert the retrived tables
            if (!anchor)
                return;
            insertPrayersAdjacentToExistingElement({
                tables: tables,
                languages: prayersLanguages,
                position: {
                    beforeOrAfter: 'beforebegin',
                    el: anchor
                },
                container: btnDocFragment
            });
        })();
        let readingsAnchor = selectElementsByDataSetValue(btnDocFragment, Prefix.anchor + "Readings")[0]; //this is the html element before which we will insert all the readings and responses
        (function insertIntercessionsHymnsForSeasons() {
            let seasonalIntercessions = MassCommonArray.filter((table) => RegExp('Intercessions\.\*D=').test(table[0][0])
                &&
                    (isMultiDatedTitleMatching(table[0][0], [copticDate, Season])));
            if (seasonalIntercessions.length < 1)
                return console.log("No Seasonsal Intercession Hymns");
            seasonalIntercessions = getUniqueValuesFromArray(seasonalIntercessions);
            let anchor;
            if ([Seasons.PentecostalDays, Seasons.Ascension].includes(Season))
                selectElementsByDataSetValue(btnDocFragment, 'IntercessionsStMaykel', { includes: true }, 'root').forEach(div => div.remove()); //We remove the intercessions of St. Maykel because they will be replaced by those of the Pentocostal days
            seasonalIntercessions.forEach(table => {
                anchor = setIntercessionsAnchor(table[0][0]);
                if (!anchor)
                    return;
                insertPrayersAdjacentToExistingElement({
                    tables: [table],
                    languages: getLanguages(table[0][0]),
                    position: {
                        beforeOrAfter: "beforebegin",
                        el: anchor,
                    },
                    container: btnDocFragment,
                });
            });
            function setIntercessionsAnchor(title) {
                if (!title)
                    return;
                let insertion = "IntercessionsStMary";
                if ([Seasons.JonahFast].includes(Season))
                    insertion = "IntercessionsStJohnBaptist";
                else if ([Seasons.PentecostalDays, Seasons.Ascension].includes(Season) && !title.includes('IntercessionsStMaykel'))
                    insertion = "IntercessionsStMarc"; //The "By the intercessions of St Maykel..." will be inserted after the intercessions of St. Mary
                if (!insertion)
                    return;
                let htmlDivs = selectElementsByDataSetValue(btnDocFragment, Prefix.massCommon + insertion + "" + anyDay);
                if (!htmlDivs || htmlDivs.length < 1)
                    return;
                return htmlDivs[htmlDivs.length - 1].nextElementSibling;
            }
        })();
        (function insertBiEhmotGharExpandable() {
            //After inserting the Intercessions hyms, we will isnert an expandable for Bi Ehmot Ghar
            let btnsDiv = document.createElement('div');
            btnsDiv.classList.add(inlineBtnsContainerClass);
            readingsAnchor.insertAdjacentElement('beforebegin', btnsDiv);
            btnsDiv.appendChild(addExpandablePrayer({
                btnID: 'btnBiEhmotGhar',
                insertion: readingsAnchor,
                prayers: [findTable(Prefix.massCommon + "BiEhmotGhar", MassCommonArray) || undefined],
                label: {
                    AR: "بي إهموت غار",
                    FR: "Ⲡⲓϩ̀ⲙⲟⲧ ⲅⲁⲣ"
                },
                languages: prayersLanguages
            })[0]);
            btnsDiv.appendChild(addExpandablePrayer({
                btnID: 'btnIAghabi',
                insertion: readingsAnchor,
                prayers: [findTable(Prefix.massCommon + "IAghabi", MassCommonArray) || undefined],
                label: {
                    AR: "إي آغابي",
                    FR: "Ⲏⲁ̀ⲅⲁⲡⲏ"
                },
                languages: prayersLanguages
            })[0]);
            btnsDiv.style.gridTemplateColumns = setGridColumnsOrRowsNumber(btnsDiv, 3);
            toggleOtherExpandables(Array.from(btnsDiv.children), false);
        })();
        insertBookOfHoursButton();
        await insertMassReadingsAndResponses();
        async function insertMassReadingsAndResponses() {
            let specialResponse;
            //St. Paul
            await insertMassReading(Prefix.stPaul, ReadingsIntrosAndEnds.stPaulIntro, ReadingsIntrosAndEnds.stPaulEnd);
            (function insertCatholiconResponse() {
                specialResponse = CatholiconResponsesArray.filter(tbl => isMultiDatedTitleMatching(tbl[0][0], [Season, copticDate]));
                if (specialResponse.length < 1)
                    specialResponse = CatholiconResponsesArray.filter(tbl => tbl[0][0] === Prefix.catholiconResponse + '&C=Title');
                if (specialResponse.length < 1)
                    return;
                addExpandablePrayer({
                    prayers: specialResponse,
                    insertion: readingsAnchor,
                    btnID: 'btnCatholiconResponse',
                    label: {
                        AR: specialResponse[0][0][prayersLanguages.indexOf('AR') + 1], FR: specialResponse[0][0][prayersLanguages.indexOf('FR') + 1]
                    },
                    languages: prayersLanguages,
                });
            })();
            //Catholicon
            await insertMassReading(Prefix.Catholicon, ReadingsIntrosAndEnds.CatholiconIntro, ReadingsIntrosAndEnds.CatholiconEnd);
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
                        PraxisResponsesArray.filter((table) => isMultiDatedTitleMatching(table[0][0], [copticDate, copticReadingsDate]))
                            .filter(tbl => !tbl[0][0]?.includes('&D=$saintsFeasts.')); //We look for a response for the copticDate or copticReadingsDate, and we exclude responses for saints feasts
                if (specialResponse.length < 1)
                    specialResponse = PraxisResponsesArray.filter((table) => isMultiDatedTitleMatching(table[0][0], [Season])); //We look for a response for the Season
                if (isStMaryFeast || copticDay === '21' || specialResponse.length < 1)
                    return ifNoSpecificResponse();
                else
                    return ifSpecificResponse();
                function ifSpecificResponse() {
                    if (Season === Seasons.GreatLent) {
                        // During the Great Lent, we should get  2 tables ('Sundays', and 'Week') for this season. We will keep the relevant table accoding to the day of the week
                        weekDay === 0 || weekDay === 6 ?
                            specialResponse =
                                specialResponse.filter((table) => table[0][0]?.includes("Sundays&D="))
                            :
                                specialResponse =
                                    specialResponse.filter((table) => table[0][0]?.includes("Week&D="));
                    }
                    if (Season === Seasons.ApostlesFast || copticDate === copticFeasts.Apostles)
                        specialResponse = specialResponse.filter(tbl => !['beforeCatholicon', 'afterPraxis'].find(w => tbl[0][0].includes(w)));
                    //We insert the special response between the first and 2nd rows
                    specialResponse =
                        insertPrayersAdjacentToExistingElement({
                            tables: getUniqueValuesFromArray(specialResponse), //We remove duplicates if any
                            languages: prayersLanguages,
                            position: {
                                beforeOrAfter: "beforebegin",
                                el: readingsAnchor, //This is the 'Ek Esmaroot' part of the annual response
                            },
                            container: btnDocFragment,
                        })[0];
                    insertSaintsResponse(specialResponse);
                }
                ;
                function ifNoSpecificResponse() {
                    let noSeasonResponse = findTable(Prefix.praxisResponse + anyDay, PraxisResponsesArray) || undefined;
                    if (!noSeasonResponse)
                        return;
                    noSeasonResponse = insertPrayersAdjacentToExistingElement({
                        tables: [noSeasonResponse],
                        languages: getLanguages(Prefix.praxisResponse),
                        position: {
                            beforeOrAfter: "beforebegin",
                            el: readingsAnchor,
                        },
                        container: btnDocFragment,
                    })[0];
                    insertSaintsResponse(noSeasonResponse);
                }
                ;
                function insertSaintsResponse(responses) {
                    if (!responses)
                        return;
                    let anchor = responses.find(div => div?.dataset.root === Prefix.anchor + "Saints");
                    if (!anchor)
                        return; //If no placeHolder is found, it means that we are during a special Season (not a 'NoSeason' period), and no placeHolder for the saints response is included
                    if (!Object.values(saintsFeasts).includes(copticDate))
                        return; //It means that today is not a saint feast
                    specialResponse = PraxisResponsesArray.filter((table) => table[0][0]?.includes('&D=$saintsFeasts.') && isMultiDatedTitleMatching(table[0][0], [copticDate]));
                    if (specialResponse.length < 1)
                        return;
                    insertPrayersAdjacentToExistingElement({
                        tables: specialResponse,
                        languages: getLanguages(Prefix.praxisResponse),
                        position: {
                            el: anchor,
                            beforeOrAfter: 'beforebegin'
                        },
                        container: btnDocFragment
                    });
                }
            })();
            //Praxis
            await insertMassReading(Prefix.praxis, ReadingsIntrosAndEnds.praxisIntro, ReadingsIntrosAndEnds.praxisEnd);
            (function inserAfterPraxisResponse() {
                if (Season !== Seasons.ApostlesFast && copticDate !== copticFeasts.Apostles)
                    return;
                //In the Aposltes fast, and Apostles feast, there is a special response after the Praxis and before the Synaxarium
                let title = 'afterPraxis&D=$';
                if (copticDate === copticFeasts.Apostles)
                    title += 'copticFeasts.Apostles';
                else if (Season === Seasons.ApostlesFast)
                    title += 'Seasons.ApostlesFast';
                insertPrayersAdjacentToExistingElement({
                    tables: PraxisResponsesArray.filter(tbl => RegExp(title.replace('$', '\\$')).test(tbl[0][0])),
                    languages: getLanguages(Prefix.praxisResponse),
                    position: {
                        el: readingsAnchor,
                        beforeOrAfter: 'beforebegin'
                    },
                    container: btnDocFragment
                });
            })();
            await insertSynaxarium();
            async function insertSynaxarium() {
                if (Season === Seasons.PentecostalDays)
                    return; //We do not read the Synaxarium during the 50 Pentecostal days
                let intro = { ...ReadingsIntrosAndEnds.synaxariumIntro };
                Object.entries(intro)
                    .forEach(entry => intro[entry[0]] =
                    entry[1]
                        .replace("theday", Number(copticDay).toString())
                        .replace("themonth", copticMonths[Number(copticMonth)][entry[0]]));
                await insertMassReading(Prefix.synaxarium, intro, undefined, copticDate); //!Caution: we must pass the copticDate for the 'date' argument, otherwise it will be set to the copticReadingsDate by default, and we will get the wrong synaxarium
                //We will reverse the langauges
                let introHTML = selectElementsByDataSetValue(btnDocFragment, Prefix.synaxarium + "&D=" + copticDate)[1];
                if (!introHTML || introHTML.children.length < 1)
                    return console.log('Didn\'t find the Synaxarium');
                introHTML.children[0].insertAdjacentElement("beforebegin", introHTML.children[0]);
            }
            ;
            async function insertMassReading(readingPrefix, readingIntro, readingEnd, date = copticReadingsDate) {
                if (!readingPrefix)
                    return;
                let readings;
                readings = await insertMassReadingOtherThanGospel(readingPrefix, { beforeOrAfter: "beforebegin", el: readingsAnchor }, btnDocFragment, false, date);
                if (!readings || readings.length === 0)
                    return;
                readings = readings.filter(div => div && div[0]);
                if (readingIntro)
                    //We start by inserting the introduction before the reading
                    insertPrayersAdjacentToExistingElement({
                        tables: [
                            [
                                [
                                    readings[0][0].dataset.root + "&C=ReadingIntro",
                                    readingIntro.AR,
                                    readingIntro.FR,
                                    readingIntro.EN,
                                ],
                            ],
                        ],
                        languages: ['AR', 'FR', 'EN'],
                        position: { beforeOrAfter: "beforebegin", el: readings[0][1] },
                        container: btnDocFragment,
                    });
                if (readingEnd)
                    //Then we insert the end of the reading
                    insertPrayersAdjacentToExistingElement({
                        tables: [
                            [
                                [
                                    readings[0][0].dataset.root + "&C=ReadingEnd",
                                    readingEnd.AR,
                                    readingEnd.FR,
                                    readingEnd.EN,
                                ],
                            ],
                        ],
                        languages: ['AR', 'FR', 'EN'],
                        position: { beforeOrAfter: "beforebegin", el: readingsAnchor },
                        container: btnDocFragment,
                    });
            }
            ;
            (function insertSepcialAgiosIfFeast() {
                let Agios = Prefix.massCommon + "Agios&D=$copticFeasts.";
                if ([copticFeasts.EntryToEgypt, copticFeasts.CanaWedding].includes(copticDate))
                    Agios += Object.entries(copticFeasts).find(entry => entry[1] === copticDate)[0];
                else if ([copticFeasts.PalmSunday, copticFeasts.Ascension, copticFeasts.Pentecoste].includes(copticReadingsDate))
                    Agios += Object.entries(copticFeasts).find(entry => entry[1] === copticReadingsDate)[0];
                else if ([Seasons.Nativity, Seasons.Baptism, Seasons.CrossFeast, Seasons.PentecostalDays, Seasons.Ascension].includes(Season))
                    Agios = Agios.replace('copticFeasts', 'Seasons') + Object.entries(Seasons).find(entry => entry[1] === Season)[0];
                else
                    Agios += "AnyDay";
                let AgiosTable = findTable(Agios, MassCommonArray, {
                    equal: true,
                }) || undefined;
                if (!AgiosTable)
                    return console.log("Didn't find the special Agios table in PrayersArray");
                (function adaptToAscension() {
                    if (Season !== Seasons.Ascension)
                        return; //i.e. if we are between the Pentecoste & the Assumption feasts: day 40 to day 49
                    let raisedAndAscended = findTable(Prefix.commonPrayer + "AgiosPart1", CommonArray, {
                        equal: true,
                    })[3]; //This is the 3rd paragraph of the ordinary Agios Osios Hymn ('For He Raised and Ascended to the Heaveans'...etc.)
                    if (!raisedAndAscended)
                        return;
                    [4, 5, 6].forEach(index => AgiosTable[AgiosTable.length - index] = raisedAndAscended); //Replacing the 3 Agios paragraphs with the Ascension paragraph
                })();
                insertPrayersAdjacentToExistingElement({
                    tables: [AgiosTable],
                    languages: getLanguages(AgiosTable[0][0]),
                    position: {
                        beforeOrAfter: "beforebegin",
                        el: readingsAnchor?.nextElementSibling,
                    },
                    container: btnDocFragment,
                });
                //  oldAgios.forEach((div) => div.remove());
            })();
            await insertGospelReadingAndResponses({
                liturgy: Prefix.gospelMass,
                languages: getLanguages(Prefix.gospelMass),
                container: btnDocFragment,
                isMass: true,
                clearContainer: false,
            });
        }
        ;
        function insertBookOfHoursButton() {
            if ([
                copticFeasts.Resurrection,
                copticFeasts.Nativity,
                copticFeasts.Baptism,
            ].includes(copticReadingsDate))
                //In these feasts we don't pray any hour
                return alert("We do not pray the Book of Hours prayers on the Ressurection, Nativity (Kiahk 29th), and Baptism (Toubi 11th) feasts' masses");
            let hoursBtns = btnBookOfHours.onClick(true); //We get buttons for the relevant hours according to the day
            if (!hoursBtns)
                return;
            hoursBtns = selectRelevantHoursAccordingToTheDay();
            let masterBtnDiv, btnsDiv;
            (function createMasterButton() {
                masterBtnDiv = document.createElement("div"); //This is the div that will contain the master button which shows or hides the Book of Hours sub buttons
                masterBtnDiv.classList.add(inlineBtnsContainerClass);
                masterBtnDiv.id = "masterBOHBtn";
                btnsDiv = document.createElement("div"); //This is the div that contains the sub buttons for each Hour of the Book of Hours
                if (defaultLanguage === 'AR')
                    btnsDiv.dir = 'rtl';
                btnsDiv.style.display = "grid";
                btnsDiv.classList.add(inlineBtnsContainerClass);
                btnsDiv.classList.add(hidden);
                let masterBtn = new Button({
                    btnID: "BOH_Master",
                    label: {
                        AR: "الأجبية",
                        FR: "Agpia",
                    },
                    onClick: () => {
                        //We toggle the div containing the buttons for each hour
                        btnsDiv.classList.toggle(hidden);
                        if (btnsDiv.classList.contains(hidden)) {
                            btnsDiv.style.top = "";
                            btnsDiv.style.position = "";
                            createFakeAnchor(btnsDiv.id);
                        }
                    },
                });
                masterBtnDiv.prepend(createHtmlBtn({
                    btn: masterBtn,
                    btnsContainer: masterBtnDiv,
                    btnClass: inlineBtnClass,
                    clear: true,
                    onClick: masterBtn.onClick,
                })); //We add the master button to the bookOfHoursMasterDiv
                btnDocFragment.prepend(btnsDiv);
                btnDocFragment.prepend(masterBtnDiv);
            })();
            (function createHtmlButtonForEachHour() {
                //We will create an HTML div (role = button) and an expandable div for each hour
                hoursBtns
                    .map((btn) => {
                    btn.onClick(true); //We call the onClick() method of the btn in order to build its prayersSequence properties. Notice that we passs 'true' as argument to the onClick() function
                    if (localStorage.displayMode === displayModes[1])
                        //If we are in the 'Presentation Mode', we remove all the psalms and keep only the Gospel and the Litanies
                        btn.prayersSequence = btn.prayersSequence
                            .filter((title) => !title?.includes("Psalm"));
                    InsertHourFinalPrayers(btn); //Inserting Kyrielison 41 times, Agios, Holy God of Sabaot, etc.
                    let btnPrayers = btn.prayersSequence.map((title) => findTable(title, getTablesArrayFromTitlePrefix(title))); //We create an array containing all the tables includes in the button's prayersSequence.
                    //We will create an 'expandable' html button and div for the hour button
                    let createdElements = addExpandablePrayer({
                        prayers: btnPrayers,
                        insertion: btnDocFragment.children[0],
                        btnID: btn.btnID,
                        label: btn.label,
                        languages: btnBookOfHours.languages,
                    });
                    if (!createdElements[0])
                        return;
                    createdElements[0].addEventListener("click", () => hourBtnOnClick(createdElements[0].id)); //!Caution, we must ADD a new onClick eventListner because the created buton already have one attached to it when it was created by addExpandablePrayer(); 
                    btnsDiv.appendChild(createdElements[0]);
                    if (!createdElements[1])
                        return;
                    createdElements[1].dataset.group = createdElements[1].id;
                });
                //Finally we set the grid-Template for btnsDiv
                btnsDiv.style.gridTemplateColumns = setGridColumnsOrRowsNumber(btnsDiv, 3);
            })();
            function selectRelevantHoursAccordingToTheDay() {
                //args.mass is a boolean that tells whether the button prayersArray should include all the hours of the Book Of Hours, or only those pertaining to the mass according to the season and the day on which the mass is celebrated
                let hours = [hoursBtns[1], hoursBtns[2], hoursBtns[3]]; //Those are the 3rd, 6th and 9th hours
                if ([
                    Seasons.GreatLent,
                    Seasons.JonahFast,
                    Seasons.NativityParamoun,
                    Seasons.BaptismParamoun,
                ].includes(Season) &&
                    ![0, 6].includes(weekDay)
                //We are during the Great Lent or during the Nativity Paramoun or the Baptism Paramoun and today is a Friday. In such cases, we pray the 3rd, 6th, 9th, 11th, and 12th hours
                )
                    hours.push(hoursBtns[4], hoursBtns[5]);
                else if (btnProsternation.children?.includes(btn)) {
                    hours.push(hoursBtns[4], hoursBtns[5]);
                    hours.shift();
                }
                else if (!isFast
                    ||
                        //We remove the 9th hour in the following days/periods
                        [0, 6].includes(weekDay) //Whatever the period, if we are a Saturday or a Sunday, we pray only the 3rd and 6th Hours
                )
                    hours.pop(); //we remove the 9th hour
                return hours;
            }
            ;
            async function hourBtnOnClick(hourBtnId) {
                let expandables = selectElementsByDataSetValue(containerDiv, 'HourExpandable', { endsWith: true }, 'group').filter(div => div?.classList.contains('Expandable'));
                if (expandables.length < 1)
                    return;
                expandables
                    .forEach(expandable => expandable?.id?.startsWith(hourBtnId) ?
                    showOrHideHour(expandable)
                    : hideHour(expandable));
                function hideHour(expandable) {
                    if (expandable.classList.contains(hidden))
                        return; //If it is already hidden, we do not need to hide.
                    expandable.classList.add(hidden);
                    Array.from(sideBarTitlesContainer.children)
                        .filter((div) => div?.dataset?.group === expandable?.id)
                        .forEach(div => div.remove());
                }
                ;
                async function showOrHideHour(expandable) {
                    (async function hourIsNotHidden() {
                        if (expandable.classList.contains(hidden))
                            return;
                        let children = Array.from(expandable.children);
                        children.filter(div => isTitlesContainer(div)).forEach(div => collapseOrExpandText(div, true, undefined, undefined, expandable));
                        let rightSideBarTitles = await showTitlesInRightSideBar(children.filter(div => isTitlesContainer(div)).reverse(), undefined, false, expandable.id, false);
                        rightSideBarTitles
                            .forEach(titleDiv => titleDiv.classList.remove(hidden));
                        floatOnTopOrBottom(btnsDiv, true, "5px"); //Making the hours buttons container float on top
                        masterBtnDiv.classList.add(hidden); //Hiding the master button
                        createFakeAnchor(expandable.id); //Jumbing to the begining of the expandable container
                    })();
                    (function hourIsHidden() {
                        if (!expandable.classList.contains(hidden))
                            return;
                        btnsDiv.style.top = "";
                        btnsDiv.style.position = "";
                        masterBtnDiv.classList.remove(hidden);
                        createFakeAnchor(btnsDiv.id);
                        Array.from(sideBarTitlesContainer.children)
                            .filter((div) => div?.dataset?.group === expandable.id)
                            .forEach(div => div.remove());
                    })();
                }
                ;
            }
            ;
            function InsertHourFinalPrayers(hourBtn) {
                hourBtn.prayersSequence.push(...getSequence().map(el => Prefix.commonPrayer + el));
                function getSequence() {
                    let Agios = "Agios", Kyrielison41 = "Kyrielison41", KyrielisonNoMass = Kyrielison41 + "NoMassIntro", KyrielisonMass = Kyrielison41 + "MassIntro", HolyLordOfSabaot = "HolyLordOfSabaot", HailMaria = "WeSaluteYouMary", WeExaltYou = "WeExaltYouStMary", Creed = "Creed", OurFather = "OurFatherInHeaven";
                    if (hoursBtns.indexOf(hourBtn) === hoursBtns.length - 1) {
                        //This is the last hour btn
                        return [
                            WeExaltYou,
                            Creed,
                            KyrielisonMass,
                            HolyLordOfSabaot,
                            OurFather,
                        ];
                    }
                    else if (hoursBtns.indexOf(hourBtn) === hoursBtns.length - 2) {
                        //this is the before last hour btn
                        return [Agios, OurFather, HailMaria];
                    }
                    else {
                        //Any other hour before the 2 last
                        return [
                            KyrielisonNoMass,
                            HolyLordOfSabaot,
                            OurFather,
                        ];
                    }
                }
            }
        }
        ;
    },
});
const btnReadingsStPaul = new Button({
    btnID: "btnReadingsStPaul",
    label: {
        AR: "البولس",
        FR: "Epître de Saint Paul",
        EN: "Pauline Epistle",
    },
    onClick: async () => {
        await insertMassReadingOtherThanGospel(Prefix.stPaul, { beforeOrAfter: undefined, el: undefined }, containerDiv, true);
        scrollToTop(); //scrolling to the top of the page
    },
});
const btnReadingsCatholicon = new Button({
    btnID: "btnReadingsCatholicon",
    label: {
        AR: "الكاثوليكون",
        FR: "Catholicon",
    },
    onClick: async () => {
        await insertMassReadingOtherThanGospel(Prefix.Catholicon, { beforeOrAfter: undefined, el: undefined }, containerDiv, true);
        scrollToTop(); //scrolling to the top of the page
    },
});
const btnReadingsPraxis = new Button({
    btnID: "btnReadingsPraxis",
    label: {
        AR: "الإبركسيس",
        FR: "Praxis",
    },
    onClick: async () => {
        await insertMassReadingOtherThanGospel(Prefix.praxis, { beforeOrAfter: undefined, el: undefined }, containerDiv, true);
        scrollToTop(); //scrolling to the top of the page
    },
});
const btnReadingsSynaxarium = new Button({
    btnID: "btnReadingsSynaxarium",
    label: {
        AR: "السنكسار",
        FR: "Synaxarium",
    },
    onClick: async () => {
        await insertMassReadingOtherThanGospel(Prefix.synaxarium, { beforeOrAfter: undefined, el: undefined }, containerDiv, true, copticDate); //!CAUTION: notice that we passed to the function the readingDate argument because during the GreatLent period and the Jonah Fast, the copticReadingsDate is formatted like 'GL10', we hence pass the copticDate to prevent the function from searching for the Synaxarium of the day by the copticReadingsDate
        scrollToTop(); //scrolling to the top of the page
    },
});
const btnPropheciesMorning = new Button({
    btnID: "btnReadingsPropheciesDawn",
    label: {
        AR: "نبوات باكر",
        FR: "Propheties Matin",
    },
    onClick: async () => {
        await insertMassReadingOtherThanGospel(Prefix.prophecies, { beforeOrAfter: undefined, el: undefined }, containerDiv, true);
        scrollToTop(); //scrolling to the top of the page
    },
});
const btnDayReadings = new Button({
    btnID: "btnDayReadings",
    label: {
        AR: "قراءات اليوم",
        FR: "Lectures du jour",
        EN: "Day's Readings",
    },
    onClick: (mass = false) => {
        [defaultLanguage, foreingLanguage]
            .forEach(async (lang) => {
            if (!lang)
                return;
            if (Bibles[lang][0])
                return;
            await getBibleVersion(defaultLanguage, false);
        });
        if (Season === Seasons.HolyWeek)
            return alert("We are during the Holy Week, there are no readings, please go to the Holy Week Prayers"); //We should put here child buttons for the Holy Week prayers and readings
        //We set the button's children
        btnDayReadings.children = [
            btnGospelMorning,
            btnGospelVespers,
            btnReadingsStPaul,
            btnReadingsCatholicon,
            btnReadingsPraxis,
            btnReadingsSynaxarium,
            btnGospelMass
        ];
        (function adaptToGreatLentAndJonahFast() {
            if (mass)
                return; //None of the following applies if the function is called within the Unbaptized mass context
            if (![Seasons.GreatLent, Seasons.JonahFast].includes(Season))
                return;
            if (copticReadingsDate === copticFeasts.Resurrection)
                return;
            (function ifWeAreNotASaturday() {
                if (weekDay === 6)
                    return;
                //We remove the Vespers because there are no Vespers during the Great Lent except for Saturday. Also there are no vespers during the Jonah Fast which lasts for 4 days from Monday to Thursday
                btnDayReadings.children = btnDayReadings.children.filter(b => b !== btnGospelVespers);
                if (Season === Seasons.JonahFast)
                    return; ///The following concerns only the Great Lent
                //If we are a Sunday and the GospelNight button is not included, we will add it.
                if (weekDay === 0
                    &&
                        !btnDayReadings.children?.includes(btnGospelNight))
                    btnDayReadings.children.push(btnGospelNight);
                (function ifWeAreNotASunday() {
                    if (weekDay === 0)
                        return;
                    //If we are not a Sunday (i.e., we are during any week day other than Sunday and Saturday), we will  add the Prophecies button to the list of buttons
                    if (!btnDayReadings.children?.includes(btnPropheciesMorning))
                        btnDayReadings.children.unshift(btnPropheciesMorning);
                    //Also if we  are not a Sunday, we will remove the Night Gospel, if included
                    btnDayReadings.children = btnDayReadings.children.filter((btn) => btn !== btnGospelNight);
                })();
            })();
        })();
        (function ifMass() {
            if (!mass)
                return;
            btnDayReadings.children = btnDayReadings.children.filter(btn => ![btnGospelVespers, btnGospelMorning, btnGospelNight, btnPropheciesMorning].includes(btn)); //We remove the Mornign and Vespers Gospel buttons
            if ([Seasons.PentecostalDays, Seasons.Ascension].includes(Season))
                btnDayReadings.children = btnDayReadings.children.filter(child => child !== btnReadingsSynaxarium); //We remove the Synaxarium button
        })();
        return btnDayReadings.children;
    },
});
const btnBookOfHours = new Button({
    btnID: "btnBookOfHours",
    label: { AR: "الأجبية", FR: "Agpia", EN: "Book of Hours" },
    docFragment: new DocumentFragment(),
    parentBtn: btnMainMenu,
    languages: [...prayersLanguages],
    children: [],
    onClick: (returnBtnChildren = false) => {
        if (btnBookOfHours.children.length > 1)
            return btnBookOfHours.children;
        let OurFatherInHeaven = Prefix.commonPrayer + "OurFatherInHeaven", AngelsPrayers = Prefix.commonPrayer + "AngelsPrayer" + anyDay, HailToYouMaria = Prefix.commonPrayer + "WeSaluteYouMary", WeExaltYou = Prefix.commonPrayer + "WeExaltYouStMary", Agios = Prefix.commonPrayer + "Agios", KyrielisonIntro = "Kyrielison41NoMassIntro", HolyLordOfSabaot = Prefix.commonPrayer + "HolyLordOfSabaot", Creed = Prefix.commonPrayer + "Creed", AllHoursFinalPrayer = Prefix.bookOfHours + "AllHoursFinalPrayer" + anyDay;
        btnBookOfHours.children = [];
        (function addAChildButtonForEachHour() {
            (function addHoursBtns() {
                Object.entries(bookOfHours)
                    .forEach((entry) => {
                    let hourName = entry[0], btnLabel = entry[1][1];
                    let hourBtn = new Button({
                        btnID: "btn" + hourName,
                        label: btnLabel,
                        languages: btnBookOfHours.languages,
                        parentBtn: btnBookOfHours,
                        onClick: (isMass = false) => hourBtnOnClick(hourBtn, hourName, isMass),
                        afterShowPrayers: () => hourBtnAfterShowPrayer(btnLabel),
                    });
                    btnBookOfHours.children.push(hourBtn);
                });
            })();
            (function addOtherPrayersBtns() {
                let otherPrayers = [Prefix.bookOfHours + 'BeforeCommunion' + anyDay, Prefix.bookOfHours + 'AfterCommunion' + anyDay];
                let otherPrayersBtn = new Button({
                    btnID: 'otherPrayersBtn',
                    label: {
                        AR: 'صلوات أخرى',
                        FR: 'Diverses prières',
                        EN: 'Various Prayers'
                    },
                    children: otherPrayers.map(title => otherPrayerBtn(title))
                });
                btnBookOfHours.children.push(otherPrayersBtn);
                function otherPrayerBtn(title) {
                    let table = findTable(title, BookOfHoursArray) || undefined;
                    if (!table)
                        return undefined;
                    return new Button({
                        btnID: "btnOtherPrayer" + otherPrayers.indexOf(title) + 1,
                        label: {
                            AR: table[0][btnBookOfHours?.languages.indexOf('AR') + 1],
                            FR: table[0][btnBookOfHours?.languages.indexOf('FR') + 1]
                        },
                        onClick: () => {
                            setCSS(showPrayers({
                                table: table,
                                languages: btnBookOfHours.languages,
                                container: containerDiv,
                                clearContainerDiv: true,
                                clearRightSideBar: true
                            }) || []);
                            scrollToTop();
                        },
                    });
                }
            })();
            function hourBtnAfterShowPrayer(btnLabel) {
                let children = Array.from(containerDiv.children).filter((div) => div?.dataset?.root);
                scrollToTop();
                children.forEach((htmlRow) => ["Priest", "Diacon", "Assembly"].forEach((className) => htmlRow.classList.replace(className, "NoActor")));
                if (btnLabel !== bookOfHours.VeilHour[1])
                    return;
                //If we are in the 'Setar Hour', we need to remove from Psalm 118 all the paragraphs except paragraphs 20, 21, and 22. We will do this by adding a btn.afterShowPlayers function
                let psalm118 = children.filter((div) => div?.dataset?.root?.startsWith(Prefix.bookOfHours + "Psalm118"));
                psalm118
                    .filter((div) => psalm118?.indexOf(div) > 0 && psalm118?.indexOf(div) < 20)
                    .forEach((div) => div.remove());
            }
            //Adding the onClick() property to the button
            function hourBtnOnClick(btn, hourName, isMass) {
                (function buildBtnPrayersSequence() {
                    //We will add the prayers sequence to btn.prayersSequence[]
                    btn.prayersSequence = Object.entries(bookOfHours)
                        .find((entry) => entry[0] === hourName)[1][0]
                        .map((title) => Prefix.bookOfHours + "Psalm" + title.toString()); //We add the psalms
                    btn.prayersSequence.unshift(Prefix.bookOfHours + hourName + "Title"); //This is the title of the hour prayer
                    ["Gospel", "Litanies"].forEach((title) => btn.prayersSequence.push(Prefix.bookOfHours + hourName + title)); //We add the gospel and the Litanies
                    //Then, we add the End of all Hours' prayers (ارحمنا يا الله ثم ارحمنا) except for the 1st and 2nd services of the Midnight Prayer
                    (function addFinalPrayersToSequence() {
                        if (isMass)
                            return; //!Important: If the onClick() method is called when the button is displayed in the Unbaptised Mass, we do not add anything else to the btn's prayersSequence
                        let btnLable = btn.label, HourIntro = [
                            Prefix.commonPrayer +
                                "ThanksGivingPart1",
                            Prefix.commonPrayer +
                                "ThanksGivingPart2",
                            Prefix.commonPrayer +
                                "ThanksGivingPart3",
                            Prefix.commonPrayer +
                                "ThanksGivingPart4",
                            Prefix.bookOfHours + "Psalm50",
                        ], endOfHourPrayersSequence = [
                            AngelsPrayers,
                            Agios,
                            OurFatherInHeaven,
                            HailToYouMaria,
                            WeExaltYou,
                            Creed,
                            KyrielisonIntro,
                            HolyLordOfSabaot,
                            OurFatherInHeaven,
                            Prefix.bookOfHours + hourName + "End",
                            AllHoursFinalPrayer,
                            OurFatherInHeaven,
                        ];
                        if (btnLable === bookOfHours.MidNight1Hour[1])
                            HourIntro.push(Prefix.psalmody + "WakeUpSonsOfLight"); //We add the 'Wake Up Sons of Light' for the 1st Service of Midnight
                        if (btnLable === bookOfHours.TwelvethHour[1])
                            endOfHourPrayersSequence.splice(0, 1); //If it is the 12th (Night) Hour, we remove the Angels Prayer from endOfHourPrayersSequence
                        btn.prayersSequence.splice(1, 0, ...HourIntro); //We  add the titles of the HourIntro before the 1st element of btn.prayersSequence[]
                        if (btnLable === bookOfHours.MidNight3Hour[1]) {
                            //Removing all the prayers before the Creed (index = 4) and replacing them with other prayers
                            endOfHourPrayersSequence.splice(0, 5, KyrielisonIntro, HolyLordOfSabaot, OurFatherInHeaven, Prefix.bookOfHours + hourName + "2ndGospel");
                            //Inserting the Priests Absolution at the end
                            endOfHourPrayersSequence.push(Prefix.bookOfHours + hourName + "PriestsAbsolution");
                        }
                        if ([
                            bookOfHours.FirstHour[1],
                            bookOfHours.TwelvethHour[1],
                            bookOfHours.MidNight3Hour[1],
                        ].includes(btnLable)) {
                            //If it is the 1st hour (Dawn) or the 12th Hour (Nighth) prayer: We add the End Of Hour Prayers
                            btn.prayersSequence.push(...endOfHourPrayersSequence);
                        }
                        else {
                            //If its is not the 1st Hour (Dawn) or the 12th Hour (Night), we insert only Kyrielison 41 times, and "Holy Lord of Sabaot" and "Our Father Who Art In Heavean"
                            btn.prayersSequence.push(KyrielisonIntro, HolyLordOfSabaot, OurFatherInHeaven);
                        }
                    })();
                })();
            }
        })();
        if (returnBtnChildren)
            return btnBookOfHours.children;
        scrollToTop();
        return btnBookOfHours.prayersSequence;
    },
});
const btnPsalmody = new Button({
    btnID: "btnPsalmody",
    label: {
        AR: "الإبصلمودية السنوية",
        FR: "Psalmodie",
        EN: "Psalmody"
    },
    onClick: () => {
        if (btnPsalmody.children)
            return btnPsalmody.children;
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
        btnPsalmody.children = [
            createBtn(weekDay, { AR: 'تسبحة اليوم', FR: 'Louange du jour', EN: 'Today\'s Prayers' }),
            ...[0, 1, 2, 3, 4, 5, 6]
                .filter(d => d !== weekDay)
                .map(d => createBtn(d, { AR: ' تسبحة يوم' + days[d].AR, FR: 'Louange du ' + days[d].FR, EN: 'Today\'s Prayers' + days[d].EN }))
        ];
        checkIfInASpecificSeason(todayDate); //We reset the Season to today
        return btnPsalmody.children;
        function createBtn(day, label) {
            let date = todayDate.getTime();
            day > weekDay ? date += (day - weekDay) * calendarDay : date -= (weekDay - day) * calendarDay;
            checkIfInASpecificSeason(new Date(date)); //We change the Season according to the date
            let season = Season;
            let btn = new Button({
                btnID: 'today',
                label: label,
                languages: prayersLanguages,
                docFragment: new DocumentFragment(),
                onClick: () => customizeSequence(btn, day, season)
            });
            return btn;
        }
        function customizeSequence(btn, day = weekDay, season = Season) {
            scrollToTop();
            if ([Seasons.KiahkWeek1, Seasons.KiahkWeek2, Seasons.KiahkWeek3, Seasons.KiahkWeek4].includes(season))
                return btn.prayersSequence = Sequences.Psalmody.Kiahk;
            btn.prayersSequence =
                Sequences.Psalmody.Year
                    .map(title => customizeTitle(title));
            function customizeTitle(title) {
                let WA = isWatosOrAdam(day, season);
                if (title.includes('XXX'))
                    title = title.replace('XXX', WA);
                if (RegExp(Prefix.anchor + 'Psaly\.*Seasons.').test(title))
                    return title.replace(Prefix.anchor, Prefix.psalmody) + Object.entries(Seasons).find(entry => entry[1] === Season)[0]; //We replace "Seasons.Ascension" by "Seasons.PentecostalDays"
                else if (RegExp(Prefix.anchor + 'Psaly\.*copticFeasts.').test(title) && Object.entries(copticFeasts).find(entry => entry[1] === copticDate))
                    return title.replace(Prefix.anchor, Prefix.psalmody) + Object.entries(copticFeasts).find(entry => entry[1] === copticDate)[0];
                else if (title.startsWith(Prefix.anchor))
                    return title.replace(Prefix.anchor, Prefix.psalmody) + '&D=' + day.toString();
                else if (RegExp(Prefix.psalmody + 'TheotokiesConclusion' + WA).test(title) && [Seasons.PentecostalDays, Seasons.Ascension].includes(Season))
                    return title.replace(WA, '&D=$Seasons.PentecostalDays||$Seasons.Ascension');
                else
                    return title;
            }
        }
        ;
    },
});
const btnIncenseMorning = new Button({
    btnID: "btnIncenseDawn",
    label: {
        AR: "بُخُورِ بَاكِرِ",
        FR: "Encens du Matin",
        EN: "Morning Incense Office"
    },
    languages: [...prayersLanguages],
    docFragment: new DocumentFragment(),
    onClick: () => {
        btnIncenseMorning.prayersSequence = [...Sequences.Incense].filter((title) => !title?.startsWith(Prefix.incenseVespers)); //We will remove all the Incense Vespers titles from the prayersSequence Array
        if (weekDay === 6)
            //If we are a Saturday, we pray only the 'Departed Litany', we will hence remove the 'Sick Litany' and the 'Travellers Litany'
            btnIncenseMorning.prayersSequence.splice(btnIncenseMorning.prayersSequence.indexOf(Prefix.incenseDawn + "SickLitany"), 3, //We remove the SickPrayer, the TravelersParayer and the Oblations Prayer
            Prefix.incenseVespers + "DepartedLitany");
        else if (weekDay === 0 || lordFeasts.includes(copticDate))
            //If we are a Sunday or the day is a Lord's Feast, or the oblation is present, we remove the 'Travellers Litany' and keep the 'Sick Litany' and the 'Oblation Litany'
            btnIncenseMorning.prayersSequence = btnIncenseMorning.prayersSequence.filter((tbl) => !tbl[0][0]?.startsWith(Prefix.incenseDawn + "TravelersLitany"));
        scrollToTop();
        return btnIncenseMorning.prayersSequence;
    },
    afterShowPrayers: async (btn = btnIncenseMorning, gospelPrefix = Prefix.gospelMorning) => {
        let btnDocFragment = btn.docFragment;
        if ([btnMassUnBaptised, btnLakkan].includes(btn) || btnProsternation.children?.includes(btn))
            return hideGodHaveMercyOnUsIfBishop();
        insertCymbalVersesAndDoxologies(btn);
        await insertGospelReadingAndResponses({
            liturgy: gospelPrefix,
            languages: getLanguages(gospelPrefix),
            container: btnDocFragment,
            isMass: true,
            clearContainer: false,
        });
        hideGodHaveMercyOnUsIfBishop();
        function hideGodHaveMercyOnUsIfBishop() {
            let dataRoot = Prefix.commonPrayer +
                "PrayThatGodHaveMercyOnUs";
            let godHaveMercyHtml = selectElementsByDataSetValue(btnDocFragment, dataRoot, { startsWith: true }); //We select all the paragraphs not only the paragraph for the Bishop
            if (godHaveMercyHtml.length < 1)
                return; //This may occur if 'Diacon' prayers are hidden
            godHaveMercyHtml
                .filter((htmlRow) => godHaveMercyHtml?.indexOf(htmlRow) > 0 &&
                godHaveMercyHtml?.indexOf(htmlRow) !== godHaveMercyHtml?.length - 2)
                .forEach((htmlRow) => htmlRow.remove());
            let godHaveMercy = findTable(dataRoot, CommonArray); //We get the entier table not only the second row. Notice that the first row of the table is the row containing the title
            if (!godHaveMercy)
                return console.log("Didn't find table Gode Have Mercy");
            addExpandablePrayer({
                insertion: godHaveMercyHtml[0].nextElementSibling,
                btnID: "godHaveMercy",
                label: {
                    AR: godHaveMercy[1][2], //This is the arabic text of the lable
                    FR: godHaveMercy[1][1], //this is the French text of the label
                },
                prayers: [godHaveMercy.slice(1, 4)], //We add only the 1st to 3rd rows: the 1st row is a comment from which we retrieved the text for the title, the 2nd and 3rd row is also a comment
                languages: btnMassUnBaptised.languages,
                dataGroup: dataRoot,
            });
        }
        ;
        adaptConcludingHymn(btnDocFragment);
        if (btn !== btnIncenseMorning)
            return; //The functions from this point on concern the Morning Incense service only
        (async function insertPropheciesAndEklonomin() {
            if (![Seasons.GreatLent, Seasons.JonahFast].includes(Season))
                return;
            if ([0, 6].includes(weekDay))
                return; //We are neither a Saturday nor a Sunday, we will hence display the Prophecies dawn buton
            let anchor = selectElementsByDataSetValue(btnDocFragment, Prefix.anchor + "Prophecies" + anyDay, undefined, 'root')[0];
            (function insertProphecies() {
                //! This must come before Eklonomin Taghonata has been inserted
                let Prophecies = findTable(Prefix.prophecies + "&D=" + copticReadingsDate, ReadingsArrays.PropheciesDawnArrayFR);
                if (!Prophecies)
                    return console.log("Didn't find Prophecies with the current date");
                let title = [[Prophecies[0][0], 'نبوات باكر', 'Prophecies', '']];
                insertPrayersAdjacentToExistingElement({
                    tables: [title, Prophecies],
                    languages: getLanguages(Prefix.prophecies),
                    position: {
                        beforeOrAfter: "beforebegin",
                        el: anchor
                    },
                    container: btnDocFragment,
                });
            })();
            (async function insertEklonominTaghonata() {
                let godHaveMercy = findTable(Prefix.incenseDawn + "GodHaveMercyOnUs&D=$Seasons.GreatLent", IncenseArray);
                if (!godHaveMercy)
                    return console.log("Didn't find God Have Mercy for Great Lent");
                insertPrayersAdjacentToExistingElement({
                    tables: [godHaveMercy],
                    languages: prayersLanguages,
                    position: {
                        beforeOrAfter: "beforebegin",
                        el: anchor
                    },
                    container: btnDocFragment,
                });
                (function removeRefrains() {
                    //We will remove all the refrains except the 1st one
                    let refrains = selectElementsByDataSetValue(btnDocFragment, Prefix.incenseDawn + "GodHaveMercyOnUsRefrain&D=$Seasons.GreatLent")
                        .filter((htmlRow) => htmlRow?.classList.contains("Title"));
                    refrains.forEach((htmlRow) => {
                        if (refrains.indexOf(htmlRow) > 0)
                            htmlRow?.remove();
                    });
                })();
            })();
        })();
        (async function addExpandableBtnForAdamDoxolgies() {
            //We add an expandable button for the Incense Dawn Adam Doxologies
            if (btnDocFragment.children.length === 0)
                return;
            addExpandablePrayer({
                insertion: btnDocFragment.children[0],
                btnID: "AdamDoxologies",
                label: {
                    AR: "ذكصولوجيات باكر آدام",
                    FR: "Doxologies Adam du Matin",
                },
                prayers: [findTable(Prefix.doxologies + "DawnAdam", DoxologiesArray) || undefined],
                languages: btnIncenseMorning.languages,
            })[1];
        })();
        /**
       * Inserts the Incense Office Doxologies And Cymbal Verses according to the Coptic feast or season
       * @param {HTMLElement | DocumentFragment} container - The HtmlElement in which the btn prayers are displayed and to which they are appended
       */
        async function insertCymbalVersesAndDoxologies(btn) {
            if (!btn.docFragment)
                return console.log("btn.docFragment is undefined = ", btn.docFragment);
            let dayFeasts = (() => {
                let feast = [];
                let matching = Object.entries(copticFeasts).find((entry) => [copticDate, copticReadingsDate].includes(entry[1])); //We check if today is a feast. We also check by the copticReadingsDate because some feast are referrenced by the copticReadings date : eg. Pntl39
                if (matching)
                    feast.push(matching[1]); //We push the date
                matching = Object.entries(Seasons).find((entry) => entry[1] === Season); //We check also for the season
                if (matching)
                    feast.push(matching[1]); //We push the Season
                if (feast.length > 0)
                    return getUniqueValuesFromArray(feast);
            })();
            let anchor;
            (async function InsertCymbalVerses() {
                anchor = selectElementsByDataSetValue(btn.docFragment, Prefix.anchor + "CymbalVerses")[0];
                if (!anchor)
                    return console.log("We didn't find the cymbal verses placeholder");
                let cymbals;
                if ([Seasons.JonahFast, Seasons.GreatLent].includes(Season) && ![0, 6].includes(weekDay))
                    //If we are during the Jonah Fast or during the Great Lent but not on a Saturday or a Sunday, the Cymbal Verses are not chanted, they are replaced by the Long Kyrielison and the Cymbal Verses End
                    cymbals =
                        [
                            CommonArray.find(table => table[0][0]?.startsWith(Prefix.commonPrayer + "KyrieElieson")),
                            CymbalVersesArray.find(table => table[0][0]?.startsWith(Prefix.cymbalVerses + "End"))
                        ];
                else
                    cymbals = getCymbalVerses();
                if (cymbals.length < 1)
                    return console.log("no cymbals were found by the provided sequence: ");
                insertPrayersAdjacentToExistingElement({
                    tables: getUniqueValuesFromArray(cymbals),
                    languages: btn.languages,
                    position: {
                        beforeOrAfter: "beforebegin",
                        el: anchor.nextElementSibling,
                    },
                    container: btn.docFragment,
                });
                function getCymbalVerses() {
                    let sequence = [
                        Prefix.cymbalVerses + isWatosOrAdam(),
                        Prefix.cymbalVerses + anyDay,
                    ];
                    //If we are during any of the Lord Feasts (or any season where we follow the same pattern), we add "Jesus Christ is the same for ever...",
                    if ([...lordFeasts, copticFeasts.Coptic29th].includes(copticDate) ||
                        [Seasons.Nativity, Seasons.Baptism, Seasons.PentecostalDays, Seasons.Ascension].includes(Season))
                        sequence =
                            [Prefix.cymbalVerses + "LordFeastsEnd"];
                    if (dayFeasts)
                        dayFeasts.forEach((feast) => [
                            ...lordFeasts,
                            Seasons.Nativity,
                            Seasons.Baptism,
                            Seasons.PentecostalDays, Seasons.Ascension
                        ].includes(feast) //During Seasons.Nativity (i.e., between Nativity and Circumcision) and Seasons.Baptism(from Baptism to Cana Wedding), the Cymbals verses follow the pattern of any Lord Feast: it starts with "Amoyni Marin..." or "Ten O'osht", then the cymbal verses of the feast, and finally, the "Eb'oro enti ti hirini". We will hence remove the 2nd element from the sequence
                            ? insertFeastInSequence(sequence, feast, 0, 0)
                            : insertFeastInSequence(sequence, feast, 1, 0)); //We always start with 'Amoyni Marin...' or with 'Tin O'osht...', so we will insert the feast element before the 2nd element, and will not delete anything
                    return processSequence(sequence, Prefix.cymbalVerses);
                }
            })();
            (async function InsertCommonDoxologies() {
                let doxologiesAnchor = selectElementsByDataSetValue(btn.docFragment, Prefix.anchor + "Doxologies")[0];
                if (!doxologiesAnchor)
                    return console.log("Didn't find doxologiesPlaceholder");
                if (!doxologiesAnchor)
                    return;
                let sequence = [
                    Prefix.doxologies + isWatosOrAdam() + "StMary",
                    Prefix.doxologies + "StMaykel",
                    Prefix.doxologies + "CelestialBeings",
                    Prefix.doxologies + "Apostles",
                    Prefix.doxologies + "StMarc",
                    Prefix.doxologies + "StGeorge",
                    Prefix.doxologies + "StMina",
                    Prefix.doxologies + "EndOfDoxologiesWatos",
                ];
                if (btn === btnIncenseVespers)
                    sequence[0] = Prefix.doxologies + 'WatosStMaryVespers';
                let excludedFeasts = [
                    saintsFeasts.ArchangelMaykel,
                    saintsFeasts.StMarc,
                    saintsFeasts.StGeorge,
                    saintsFeasts.StMina,
                ]; //Those saints feast will be excluded because the doxologies of those saints are already included by default
                if (dayFeasts) {
                    let index = 2;
                    dayFeasts.forEach((feast) => {
                        if ([
                            ...lordFeasts,
                            Seasons.NativityParamoun,
                            Seasons.Nativity,
                            Seasons.BaptismParamoun,
                            Seasons.Baptism,
                            Seasons.KiahkWeek1,
                            Seasons.KiahkWeek2,
                            Seasons.KiahkWeek3,
                            Seasons.KiahkWeek4,
                            Seasons.GreatLent,
                            Seasons.JonahFast, //The Jonah doxology comes before St. Mary Doxolgy according to some sources
                            Seasons.PentecostalDays,
                            Seasons.Ascension
                        ].includes(feast))
                            index = 0; //If one of the dates in feast[] corresponds to a one of the 'Lord's Feasts', it means we are in a Lord Feast. the doxologies of the feast will be placed at the begining of the doxologies. We follow the same rule for the doxologies of the PentecostalDays and the month of Kiahk
                        else if (excludedFeasts.includes(feast)) {
                            let feastIndex = sequence.indexOf(feast);
                            sequence.splice(2, 0, sequence[feastIndex]); //If it is one of the doxologies already included by default, we place it after St. Maykel
                            sequence.splice(feastIndex + 1, 1); //We then delete the element itself
                            index = undefined; //We set index to undefined in order to prevent insertFeastSequence from inserting any element in sequence
                        }
                        else if (Object.entries(celestialBeingsFeasts).filter(entry => entry[0]?.startsWith('Archangel')).map(entry => entry[1]).includes(feast))
                            index = 1;
                        insertFeastInSequence(sequence, feast, index, 0);
                    });
                }
                let doxologies = processSequence(sequence, Prefix.doxologies);
                if (doxologies.length === 0)
                    return console.log("Did not find any relevant doxologies");
                if (Season === Seasons.GreatLent) {
                    //For the Great Lent, there is a doxology for the Sundays and 4 doxologies for the week days
                    [0, 6].includes(weekDay) ?
                        doxologies = doxologies
                            .filter((tbl) => !/Week\d&D=\$Seasons.GreatLent/.test(tbl[0][0]))
                        :
                            doxologies = doxologies
                                .filter((tbl) => !tbl[0][0]?.includes("Sundays&D=$Seasons.GreatLent"));
                }
                insertPrayersAdjacentToExistingElement({
                    tables: getUniqueValuesFromArray(doxologies),
                    languages: btn.languages,
                    position: {
                        beforeOrAfter: "beforebegin",
                        el: doxologiesAnchor.nextElementSibling,
                    },
                    container: btn.docFragment,
                });
            })();
            /**
             * Inserts a new element in the btn.prayersSequence[]. This elment will serve as a placeholder to insert the relevant prayers (Cymbal Verses or Doxologies) for the current season or feast
             * @param {string[]} sequence - the btn's prayers sequence in which the new placeholder element will be inserted
             * @param {string} feastDate - the string representing the feast or the season
             * @param {number} index - the index at which the new placeholder element will be inserted.
             * @param {number} remove the number of elements that will be removed from the sequence after the index
             */
            function insertFeastInSequence(sequence, feastDate, index, remove) {
                if (!index && index !== 0)
                    return;
                sequence.splice(index, remove, feastDate);
            }
            /**
             * Searchs in tablesArray for the tables matching each title in sequence, which is a string[] of titles, and returns a string[][][] of the tables found in the
             * @param {string[]} sequence - An arry of titles that we will be looking for tables matching each of them in tablesArray[][]
             * @param {string} prefix - the prefix with which all the tables in the concerned tables array start (i.e., either Prefix.cymbalVerses, or Prefix.doxologies)
             * @returns {string[][][]} - an array of the tables[][] found
             */
            function processSequence(sequence, prefix) {
                let tables = [], tablesArray = getTablesArrayFromTitlePrefix(prefix);
                sequence.map((title) => {
                    if (!title.startsWith(prefix)) //It means that the title is a Coptic date or a Season
                        tablesArray
                            //!CAUTION: we must use 'filter' not 'find' because for certain feasts there are more than one doxology
                            .filter((tbl) => isMultiDatedTitleMatching(tbl[0][0], [title]))
                            .forEach((tbl) => tables?.push(tbl));
                    else
                        tables.push(findTable(title, tablesArray));
                });
                return tables;
            }
        }
    },
});
const btnIncenseVespers = new Button({
    btnID: "btnIncenseVespers",
    label: {
        AR: "بُخُورِ عَشِيَّةَ",
        FR: "Encens Vêpres",
        EN: "Vespers Incense Office",
    },
    docFragment: new DocumentFragment(),
    languages: [...prayersLanguages],
    onClick: () => {
        btnIncenseVespers.prayersSequence = [...Sequences.Incense].filter((title) => title !== Prefix.commonPrayer + "AngelsPrayer" + anyDay &&
            !title.startsWith(Prefix.incenseDawn));
        scrollToTop();
        return btnIncenseVespers.prayersSequence;
    },
    afterShowPrayers: () => btnIncenseMorning.afterShowPrayers(btnIncenseVespers, Prefix.gospelVespers),
});
const btnLakkan = new Button({
    btnID: "btnIncenseOffice",
    label: {
        AR: "صلاة اللقَّان",
        FR: "Cérémonie de la Bénédiction de l'eau",
        EN: 'Lakkan'
    },
    docFragment: new DocumentFragment(),
    onClick: (date = copticDate) => {
        let sequence = Sequences.Lakkan;
        (function adaptSequence() {
            if (date === copticFeasts.Baptism) {
                splice(Prefix.massCommon + "WeWorshipYouChrist");
            }
            else if (date === copticFeasts.Apostles) {
                splice(Prefix.massCommon + "Tayshoury");
            }
            else if (date === copticFeasts.HolyThursday) {
            }
            function splice(title, count = 1) {
                sequence.splice(sequence.indexOf(title), count);
            }
        })();
        sequence.forEach(title => {
            if (title.endsWith('XXX'))
                title = title.replace('XXX', '&D=' + copticDate);
            showPrayers({
                table: getTable(title),
                languages: getLanguages(title),
                container: btnLakkan.docFragment,
                clearContainerDiv: true,
                clearRightSideBar: true,
                position: btnLakkan.docFragment,
            });
        });
        function getTable(title) {
            if (title.startsWith(Prefix.anchor))
                return [[title]];
            return findTable(title, getTablesArrayFromTitlePrefix(title)) || undefined;
        }
    },
    afterShowPrayers: async (date = copticDate) => {
        if (![copticFeasts.Baptism, copticFeasts.Apostles, copticFeasts.HolyThursday].includes(date))
            return;
        btnIncenseMorning.afterShowPrayers(btnLakkan); //We call it in order to hide the "Pray that God Have Mercy on Us" response for Pope and Bishop
        let prophecies, stPaul, gospel;
        if (date === copticFeasts.Baptism) {
            prophecies = ['HAB:3:12-19', 'ISA:35:1-2', 'ISA:40:1-25', 'ISA:9:1-2', 'BAR:3:36-End/4:1-4', 'EZK:36:24-29', 'EZK:47:1-9'];
            stPaul = ['1CO:10:1-13'];
            gospel = ['PSA:113:3-5', 'MAT:3:1-17'];
        }
        else if (date === copticFeasts.Apostles) {
            prophecies = ['EXO:15:22-End/16:1-1', 'EXO:30:17-30', 'ISA:1:16-26', 'ISA:35:1-10', 'ISA:43:16-End/44:1-6', 'ZEC:8:7-19', 'ZEC:14:8-11'];
            stPaul = ['HEB:10:22-32'];
            gospel = ['PSA:50:7-7/50:10-10', 'JHN:5:1-18'];
        }
        else if (date === copticFeasts.HolyThursday) {
            prophecies = [];
            stPaul = [];
            gospel = [];
        }
        ;
        let anchor, reading, languages = [defaultLanguage, foreingLanguage].filter(lang => lang);
        await insertBeforeAnchor('Prophecies', prophecies);
        await insertBeforeAnchor('StPaul', stPaul);
        await insertGospelReadingAndResponses({
            isMass: true,
            liturgy: Prefix.gospelMass,
            container: btnLakkan.docFragment,
            clearContainer: false,
            gospel: gospel.map(ref => getGospel(Prefix.gospelMass, ref))
        });
        async function insertBeforeAnchor(title, refs) {
            anchor = selectElementsByDataSetValue(btnLakkan.docFragment, Prefix.anchor + title, undefined)[0];
            if (!anchor)
                return;
            if (title === 'Prophecies') {
                reading = [[
                        "ReadingsIntro&C=Title",
                        "",
                        "Prophecies",
                        "",
                        "النبؤات"
                    ]];
                insertReading(reading, anchor, prayersLanguages);
            }
            await Promise.all(refs.map(async (ref) => {
                reading = await retrieveReadingTableFromBible([[Prefix.readingRef + ref]], languages);
                if (!reading)
                    return;
                if (title === 'StPaul') {
                    insertReading(getReadingIntroOrEnd(title, ReadingsIntrosAndEnds.stPaulIntro, 'Intro'), anchor, prayersLanguages);
                }
                insertReading(reading, anchor, languages);
                if (title === 'Prophecies') {
                    insertReading(getReadingIntroOrEnd(title, ReadingsIntrosAndEnds.propheciesEnd, 'End'), anchor, prayersLanguages);
                }
                else if (title === 'StPaul') {
                    insertReading(getReadingIntroOrEnd(title, ReadingsIntrosAndEnds.stPaulEnd, 'End'), anchor, prayersLanguages);
                }
                else if (title === 'Psalm') {
                    reading = findTable(Prefix.bookOfHours + "Alleluia", BookOfHoursArray) || undefined;
                    replaceClass(reading, 'Assembly');
                    insertReading(reading, anchor, getLanguages(Prefix.bookOfHours));
                }
            }));
            function insertReading(reading, anchor, langs) {
                if (!reading || !anchor)
                    return;
                insertPrayersAdjacentToExistingElement({
                    tables: [reading],
                    languages: langs,
                    position: { el: anchor, beforeOrAfter: 'beforebegin' },
                    container: btnLakkan.docFragment,
                });
            }
            function getReadingIntroOrEnd(prefix, text, intro = 'Intro') {
                return [[
                        title + intro + "&C=Reading" + intro,
                        "",
                        text.FR,
                        "",
                        text.AR,
                    ]];
            }
            function replaceClass(reading, newClass) {
                reading[0][0] = reading[0][0].split('&C=')[0] + '&C=' + newClass;
            }
        }
        function getGospel(prefix, ref) {
            ref.startsWith('PSA') ? prefix += 'Psalm' : prefix += 'Gospel';
            return [[prefix + '&D=' + copticDate + '&C=Title'], [Prefix.readingRef + ref]];
        }
    },
});
const btnProsternation = new Button({
    btnID: "btnProsternation",
    label: {
        AR: "صَلاة السَّجْدَة",
        FR: "Prière de la Prosternation",
        EN: "Prosternation Prayer",
    },
    onClick: () => {
        let services = [
            {
                Prophecies: 'DEU:5:23-End/6:1-3',
                StPaul: '1CO:12:28-End/13:1-12',
                Agios: [Prefix.massCommon + "Agios&D=$Seasons.PentecostalDays||$Seasons.Ascension"],
                Gospel: ['PSA:97:7-8/97:1-1', 'JHN:17:1-26'],
                psalmResponse: Prefix.psalmResponse + "&D=$Seasons.Ascension",
                Cymbals: [Prefix.cymbalVerses + "&D=$Seasons.Ascension"],
                Litanies: [
                    Prefix.incenseDawn + "SickLitany",
                    Prefix.incenseDawn + "TravelersLitany",
                    Prefix.massCommon + "SeasonalLitany" + anyDay,
                    Prefix.massCommon + "PlacesLitany" + anyDay,
                ],
            },
            {
                Prophecies: 'DEU:6:17-25',
                StPaul: '1CO:13:13-End/14:1-17',
                Agios: [Prefix.commonPrayer + "Agios"],
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
                Agios: [Prefix.commonPrayer + "Agios"],
                Gospel: ['PSA:65:2-2/71:9-9', 'JHN:4:1-24'],
                psalmResponse: Prefix.psalmResponse + anyDay + "||$Seasons.Kiahk",
                Cymbals: [Prefix.cymbalVerses + "Watos"],
                Litanies: [
                    Prefix.commonPrayer + "ChurchLitany", //!needs check + convert font
                    Prefix.commonPrayer + "PopeLitany",
                    Prefix.commonPrayer + "RequestedPrayersLitany",
                    'Assembly Litany' //!missing
                ]
            },
        ];
        let labelBase = {
            AR: 'السَّجْدَة XXX',
            FR: 'XXX Prosternation',
            EN: 'XXX Prosternation'
        };
        let labelNumber = [
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
        let children = services.map(s => {
            let n = services.indexOf(s);
            return new Button({
                btnID: btnProsternation.btnID + n.toString(),
                label: customizeLable(n),
                docFragment: new DocumentFragment(),
                onClick: () => btnOnClick(n),
                afterShowPrayers: () => btnAfterShowPrayers(n)
            });
        });
        btnProsternation.children = children;
        function customizeLable(i) {
            let label = { ...labelBase };
            label[defaultLanguage] = label[defaultLanguage].replace('XXX', labelNumber[i][defaultLanguage]);
            return label;
        }
        async function btnOnClick(n, getTables = false) {
            let btn = btnProsternation.children[n];
            let tables = await returnTables(n);
            if (getTables)
                return tables;
            tables.forEach(table => {
                showPrayers({
                    container: btn.docFragment,
                    clearContainerDiv: true,
                    clearRightSideBar: true,
                    table: table,
                    languages: getLanguages(table[0][0])
                });
            });
            async function returnTables(index) {
                let service = services[index], clone = [...Sequences.Prosternation];
                (function customizeSequence() {
                    if (index === 0) {
                        clone.unshift(Prefix.bookOfHours + "Psalm116", Prefix.psalmody + "Hos4", Prefix.psalmody + "PsalyOnTheotoky&D=0", Prefix.psalmody + "IntroductionToAdamTheotoky", Prefix.psalmody + "Theotoky" + '&D=0', Prefix.psalmody + "TheotokiesConclusion&D=$Seasons.PentecostalDays||$Seasons.Ascension", Prefix.psalmody + "PsalyAdamProsternation&D=$copticFeasts.Pentecoste");
                    }
                    else if (index === 2) {
                        clone.splice(clone.indexOf(Prefix.anchor + 'Agios'), 0, Prefix.hymns + "PentecosteHymn&D=$copticFeasts.PentecosteVespers&C=Title"); //!missing hymn
                        let doxlogies = [
                            Prefix.incenseVespers + "LordKeepUsThisNight",
                            Prefix.commonPrayer + "Agios",
                            Prefix.commonPrayer + "OurFatherInHeaven",
                            Prefix.commonPrayer + "InTheNameOfJesusOurLord",
                            Prefix.commonPrayer + "WeSaluteYouMary",
                            Prefix.doxologies + "WatosStMary",
                            Prefix.doxologies + "CelestialBeings",
                            Prefix.doxologies + "Apostles",
                            Prefix.doxologies + "StMarc",
                            Prefix.doxologies + "Pope", //!missing
                            Prefix.doxologies + "EndOfDoxologiesWatos",
                            Prefix.commonPrayer + "WeExaltYouStMary",
                            Prefix.commonPrayer + "Creed",
                            Prefix.commonIncense + "EfnotiNaynan",
                        ];
                        clone.splice(clone.indexOf(Prefix.anchor + "Doxologies"), 1, ...doxlogies);
                        let End = [
                            Prefix.commonPrayer + "BlockInTheNameOfOurLord",
                            Prefix.commonPrayer + "BlockIriniPassi",
                            Prefix.commonPrayer + "AbsolutionForTheSon",
                            Prefix.commonPrayer + "KyriElieson3Times",
                            Prefix.commonIncense + "LiturgyEnd"
                        ];
                        clone.push(...End);
                    }
                    ;
                })();
                let resolved = await Promise.all(clone.map(async (title) => {
                    if (title.startsWith(Prefix.anchor))
                        return await processTitle(title);
                    else
                        return await processTitle(title.replace('XXX', (index + 1).toString()), true);
                }));
                return resolved.filter(table => table);
                async function processTitle(title, singleTable = false) {
                    if (singleTable) {
                        return findTable(title, getTablesArrayFromTitlePrefix(title)) || undefined;
                    }
                    ;
                    let prop = title.replace(Prefix.anchor, '');
                    if (!service[prop] || ['Gospel', 'psalmResponse'].includes(prop))
                        return; //The 'Gospel' property is handeled by the btnAfterShowPrayers() function. We insert the reading in the anchor
                    if (prop === 'StPaul')
                        return await processReference(service[prop], Prefix.stPaul);
                    else if (prop === 'Prophecies')
                        return await processReference(service[prop], Prefix.prophecies);
                    else
                        return processProp(service[prop]);
                    function processProp(prop) {
                        let table = prop.map(t => [Prefix.placeHolder, t]);
                        table.unshift([Prefix.commonPrayer]); //!we add a first row with the Prefix.commonPrayer as first element in order to be able to retrieve the PrayersArray languages from the title prefix
                        return table;
                    }
                }
                async function processReference(refs, prefix) {
                    return await retrieveReadingTableFromBible([[prefix + 'Prosternation'], [Prefix.readingRef + refs]], getLanguages(prefix));
                }
            }
        }
        async function btnAfterShowPrayers(n) {
            let btn = btnProsternation.children[n];
            btnIncenseMorning.afterShowPrayers(btn); //We call this function in order to insert an Expandable for the "God Have Mercy On Us" Diacon response
            if (n === 2)
                adaptConcludingHymn(btn.docFragment);
            else if (n === 0)
                btnMassUnBaptised.afterShowPrayers(btn); //We insert the Book of Hours prayers (as an expandable button)
            await insertGospel();
            async function insertGospel() {
                let gospel = services[n].Gospel;
                await insertAfterAnchor('Psalm', gospel[0]);
                await insertAfterAnchor("Gospel", gospel[1]);
                await insertAfterAnchor("PsalmResponse", services[n].psalmResponse, Prefix.psalmResponse);
                async function insertAfterAnchor(title, ref, prefix) {
                    let anchor = findAnchor(title);
                    if (!anchor)
                        return console.log('We did not find the anchor for ', title);
                    let table, langs;
                    prefix ? langs = getLanguages(prefix) : langs = getLanguages(Prefix.gospelMass);
                    if (prefix)
                        table = findTable(title, getTablesArrayFromTitlePrefix(prefix)) || undefined;
                    else
                        table = await retrieveReadingTableFromBible([[Prefix.readingRef + ref]], langs);
                    if (!table)
                        return;
                    insertPrayersAdjacentToExistingElement({
                        tables: [table],
                        position: {
                            el: anchor,
                            beforeOrAfter: 'beforebegin'
                        },
                        container: btn.docFragment,
                        languages: langs
                    });
                    function findAnchor(dataRoot) {
                        return selectElementsByDataSetValue(btn.docFragment, Prefix.anchor + dataRoot + anyDay, undefined, 'root')[0];
                    }
                }
            }
            ;
            scrollToTop();
        }
    },
});
const btnIncenseOffice = new Button({
    btnID: "btnIncenseOffice",
    label: {
        AR: "رفع بخور باكر أو عشية",
        FR: "Encens Matin et Vêpres",
        EN: 'Morning & Vespers Incense'
    },
    onClick: (returnChildren = false) => {
        //setting the children of the btnIncenseOffice. This must be done by the onClick() in order to reset them each time the button is clicked
        btnIncenseOffice.children = [btnIncenseMorning, btnIncenseVespers];
        //show or hide the PropheciesDawn button if we are in the Great Lent or JonahFast:
        if (copticReadingsDate === copticFeasts.Pentecoste)
            btnIncenseOffice.children = [btnIncenseMorning, btnProsternation];
        //We will remove the Vespers Button during if we are during the Great Lent or the Jonah Fast, and we are not a Saturday
        if ([Seasons.GreatLent, Seasons.JonahFast].includes(Season) &&
            weekDay !== 6)
            btnIncenseOffice.children = [btnIncenseMorning];
        if (returnChildren)
            return btnIncenseOffice.children;
    },
});
const btnMassStBasil = new Button({
    btnID: "btnMassStBasil",
    label: { AR: "باسيلي", FR: "Saint Basil", EN: "St Basil" },
    docFragment: new DocumentFragment(),
    languages: [...prayersLanguages],
    onClick: () => {
        //Setting the standard mass prayers sequence
        btnMassStBasil.prayersSequence = [
            ...Sequences.Mass.StBasil,
            ...Sequences.Mass.CallOfHolySpirit,
            ...Sequences.Mass.Litanies,
            ...Sequences.Mass.Communion,
        ];
        //We scroll to the beginning of the page after the prayers have been displayed
        scrollToTop();
        // btnsPrayersSequences.splice(btns.indexOf(btnMassStBasil), 1, btnMassStBasil.prayersSequence);
        // btnMassStBasil.retrieved = true;
        return btnMassStBasil.prayersSequence;
    },
    afterShowPrayers: (btn = btnMassStBasil, prefix = Prefix.massStBasil) => {
        let btnDocFragment = btn.docFragment;
        (function insertSecondReconciliationBtn() {
            if (![btnMassStBasil, btnMassStCyril].includes(btn))
                return;
            let secondReconciliation = findTable(prefix + "Reconciliation2", getTablesArrayFromTitlePrefix(prefix));
            if (!secondReconciliation)
                return console.log("Didn't find reconciliation");
            let htmlBtn = addExpandablePrayer({
                insertion: selectElementsByDataSetValue(btnDocFragment, prefix + "Reconciliation")[0]?.nextElementSibling, //We insert the button after the title
                btnID: "secondStBasilReconciliation",
                label: {
                    FR: secondReconciliation[0][btn.languages.indexOf('FR') + 1],
                    AR: secondReconciliation[0][btn.languages.indexOf('AR') + 1],
                    EN: secondReconciliation[0][btn.languages.indexOf('EN') + 1],
                },
                prayers: [secondReconciliation],
                languages: btn.languages,
            })[0];
            htmlBtn.addEventListener("click", () => {
                let dataGroup = prefix + "Reconciliation";
                selectElementsByDataSetValue(containerDiv, dataGroup, undefined, 'group')
                    .forEach((row) => row.classList.toggle(hidden));
            });
        })();
        (function addRedirectionButtons() {
            //We create a list of the masses to which we will insert redirection button
            let redirectToList = [
                btnMassStBasil,
                btnMassStGregory,
                btnMassStCyril,
                btnMassStJohn,
            ].filter(b => ![btn, btnMassStJohn].includes(b)); //We remove the btn of the mass from the redirection list and the mass of st John
            let select;
            //Adding 2 buttons to redirect the other masses at the begining of the Reconciliation
            select = selectElementsByDataSetValue(btnDocFragment, prefix + "Reconciliation", { endsWith: true });
            redirectToAnotherMass([...redirectToList], {
                beforeOrAfter: "afterend",
                el: select[0],
            }, "RedirectionToReconciliation");
            //Adding 2 buttons to redirect to the other masses at the Anaphora prayer After "By the intercession of the Virgin St. Mary"
            select = selectElementsByDataSetValue(btnDocFragment, Prefix.massCommon + "SpasmosAdamShort");
            redirectToAnotherMass([...redirectToList], {
                beforeOrAfter: "afterend",
                el: select[select.length - 1],
            }, "RedirectionToAnaphora");
            //Adding 2 buttons to redirect to the other masses before Agios
            select = selectElementsByDataSetValue(btnDocFragment, prefix + "Agios");
            redirectToAnotherMass([...redirectToList], {
                beforeOrAfter: "afterend",
                el: select[0].previousElementSibling,
            }, "RedirectionToAgios");
            //Adding 2 buttons to redirect to the other masses before the Call upon the Holy Spirit
            select = selectElementsByDataSetValue(btnDocFragment, Prefix.massCommon +
                "Amen3WeProclaimYourDeath");
            redirectToAnotherMass([...redirectToList], {
                beforeOrAfter: "afterend",
                el: select[0],
            }, "RedirectionToLitanies");
            //Adding 2 buttons to redirect to the other masses before the Fraction Introduction
            select = selectElementsByDataSetValue(btnDocFragment, "FractionIntroduction", { endsWith: true });
            redirectToAnotherMass([...redirectToList], {
                beforeOrAfter: "beforebegin",
                el: select[0],
            }, "RedirectionToFractionIntroduction");
            /**
             *
             * @param {HTMLDivElement} targetElement - the html child of containerDiv, in relation to which the newly created div containing the html buttons elements, will be placed according to a given position
             * @param {Button[]} btns - a list of Button for each we will create an inline redirection html button
             * @param {InsertPosition} position - an object providing the position where the newly created div containing the html elements, will be placed compared. The div is placed in a position (i.e., the beforeOrAfter property) in relation ton an html element in the containerDiv (el) which is the targetEelement
             *@param {string} btnsContainerID - the id of the div container to which the html buttons will be appended. This id may be needed to select the div after redirection
            */
            async function redirectToAnotherMass(btns, position, btnsContainerID) {
                if (!position.el)
                    return;
                let redirectTo = [];
                btns.map((btn) => {
                    //for each button in the btns array, we will create a fake Button and will set its onClick property to a function that retrieves the text of the concerned mass
                    let newBtn = new Button({
                        btnID: "GoTo_" +
                            btn.btnID.split("btn")[1] +
                            "_From_" +
                            position.el.dataset.root,
                        label: {
                            AR: btn.label.AR,
                            FR: btn.label.FR,
                        },
                        cssClass: inlineBtnClass,
                        onClick: async () => {
                            await showChildButtonsOrPrayers(btn); //We simulated as if btn itself has been clicked, which will show all its prayers, children, etc.
                            //if there is an element in containerDiv having the same data-root as targetElement
                            if (containerDiv.querySelector("#" + btnsContainerID))
                                createFakeAnchor(btnsContainerID);
                        },
                    });
                    redirectTo.push(newBtn);
                });
                insertRedirectionButtons(redirectTo, position, btnsContainerID);
            }
        })();
        (function insertAdamAndWatosSpasmos() {
            //We insert it during the Saint Mary Fast and on every 21th of the coptic month
            let spasmosTitle = Prefix.massCommon + "SpasmosAdamLong";
            let anchorTitle = Prefix.massCommon + "DiaconResponseKissEachOther";
            insertSpasmos(spasmosTitle, selectElementsByDataSetValue(btnDocFragment, anchorTitle)[0]);
            anchorTitle = Prefix.massCommon + "SpasmosWatosShort";
            //Insert Watos Spasmoses
            insertSpasmos(spasmosTitle.replace("Adam", "Watos"), selectElementsByDataSetValue(btnDocFragment, anchorTitle)[0], true);
        })();
        function insertSpasmos(spasmosTitle, anchor, hideAnchor = false) {
            if (!anchor)
                return console.log('anhcor is not valid');
            let spasmos = MassCommonArray.find((tbl) => tbl[0][0]?.startsWith(spasmosTitle) &&
                isMultiDatedTitleMatching(tbl[0][0], [Season]));
            if (!spasmos)
                return console.log("didn't find spasmos with title = ", spasmosTitle);
            let createdElements = addExpandablePrayer({
                insertion: anchor,
                btnID: spasmosTitle.split("&D=")[0],
                label: {
                    FR: spasmos[0][2],
                    AR: spasmos[0][4],
                },
                prayers: [spasmos],
                languages: btn.languages,
            });
            if (hideAnchor)
                createdElements[0].addEventListener("click", () => selectElementsByDataSetValue(containerDiv, anchor.dataset.root).forEach((row) => row.classList.toggle(hidden)));
        }
        (function insertLitaniesIntroductionFromOtherMasses() {
            if (btn !== btnMassStBasil)
                return; //This button appears only in St Basil Mass
            let litaniesIntro = findTable(Prefix.massStGregory + "LitaniesIntroduction", MassStGregoryArray) || undefined;
            if (!litaniesIntro)
                return console.log("Did not find the Litanies Introduction");
            let anchor = selectElementsByDataSetValue(btnDocFragment, Prefix.massCommon + "LitaniesIntroduction")[0];
            if (!anchor)
                return console.log("Di not find the Anchor");
            let createdElements = addExpandablePrayer({
                insertion: anchor,
                btnID: btnMassStGregory.btnID + "LitaniesIntro",
                label: {
                    AR: "طلبات القداس الغريوري",
                    FR: "Litanies de St. Gregory",
                },
                prayers: [litaniesIntro],
                languages: btn.languages,
            });
            //Adding the St Cyril Litanies Introduction to the St. Basil Mass only. St Gregory Mass has its own intro, and we do not of course add it to St Cyrill since it is already included
            litaniesIntro = findTable(Prefix.massStCyril + "LitaniesIntroduction", MassStCyrilArray);
            if (!litaniesIntro)
                return console.log("Did not find the St Cyril Litanies Introduction");
            litaniesIntro = structuredClone(litaniesIntro);
            litaniesIntro.pop(); //We remove the last row in the table of litaniesIntro because it is the "As it were, let it always be.../كما كان هكذا يكون/tel qu'il fût ainsi soit-il..."
            //We will create the expandable div and its button, but will append the button to the div
            let btnsDiv = createdElements[0].parentElement;
            btnsDiv.appendChild(addExpandablePrayer({
                insertion: anchor,
                btnID: btnMassStCyril.btnID + "LitaniesIntro",
                label: {
                    AR: "طلبات القداس الكيرلسي",
                    FR: "Litanies de la messe de Saint Cyril",
                },
                prayers: [litaniesIntro],
                languages: btnMassStCyril.languages,
            })[0] //this is the buton created by addExpandablePrayer
            );
            //We add to each button a 'click' event listner that will hide the other litanies
            Array.from(btnsDiv.children).forEach((child) => child.addEventListener("click", () => toggleOtherLitanies(child.id)));
            btnsDiv.style.gridTemplateColumns = setGridColumnsOrRowsNumber(btnsDiv, 3);
            function toggleOtherLitanies(btnID) {
                let div = Array.from(containerDiv.querySelectorAll(".Expandable")).find((btn) => btn.id.endsWith("LitaniesIntroExpandable") && !btn.id.startsWith(btnID));
                if (div && !div.classList.contains(hidden))
                    div.classList.add(hidden);
            }
        })();
        (function insertRelevantSeasonalLitany() {
            let anchor = selectElementsByDataSetValue(btnDocFragment, Prefix.anchor + "SeasonalLitanyPlaceHolder", undefined, 'root')[0];
            if (!anchor)
                return console.log('Didn\'t find the anhcor');
            let tbl = findTable(Prefix.massCommon + 'SeasonalLitany&D=$Seasons.' + Object.entries(Seasons).find(entry => entry[1] === naturalSeasons())[0], MassCommonArray);
            if (!tbl)
                return console.log('Didn\'t find the tbl');
            insertPrayersAdjacentToExistingElement({
                tables: [tbl],
                languages: prayersLanguages,
                position: { el: anchor, beforeOrAfter: 'beforebegin' },
                container: btnDocFragment,
            });
        })();
        (function showFractionPrayersMasterButton() {
            //We will insert a button displaying a pannel of choices for the different Fraction prayers according to the day/season, etc.s
            showMultipleChoicePrayersButton({
                filteredPrayers: filter(),
                languages: prayersLanguages,
                btnLabels: { AR: "صلوات القسمة", FR: "Oraisons de la Fraction" },
                masterBtnID: "btnFractionPrayers",
                anchor: Array.from(btnDocFragment.children)
                    .find(child => child.id && child.id.startsWith(Prefix.anchor + "Fraction")),
            });
            function filter() {
                let filtered = [];
                let dates = [copticDate, Season, copticFeasts.AnyDay];
                if (Number(copticDay) === 29 && ![4, 5, 6].includes(Number(copticMonth)))
                    dates.unshift(copticFeasts.Coptic29th);
                dates.forEach(date => filtered.push(...FractionsArray.filter(table => isMultiDatedTitleMatching(table[0][0], [date]))));
                return getUniqueValuesFromArray(filtered);
            }
            ;
        })();
        (function insertCommunionChants() {
            //Inserting the Communion Chants after the Psalm 150
            let psalm150 = selectElementsByDataSetValue(btnDocFragment, Prefix.massCommon + "CommunionPsalm150");
            let filtered = [];
            [copticDate, Season, copticFeasts.AnyDay]
                .forEach(date => {
                filtered.push(...CommunionArray.filter(table => isMultiDatedTitleMatching(table[0][0], [date])));
            });
            showMultipleChoicePrayersButton({
                filteredPrayers: getUniqueValuesFromArray(filtered),
                languages: btn.languages,
                btnLabels: {
                    AR: "مدائح التوزيع",
                    FR: "Chants de la communion",
                },
                masterBtnID: "communionChants",
                anchor: psalm150[psalm150.length - 1],
            });
        })();
        adaptConcludingHymn(btnDocFragment);
    },
});
const btnMassStCyril = new Button({
    btnID: "btnMassStCyril",
    label: { AR: "كيرلسي", FR: "Saint Cyril", EN: "St Cyril" },
    docFragment: new DocumentFragment(),
    languages: [...prayersLanguages],
    onClick: () => {
        //Setting the standard mass prayers sequence
        btnMassStCyril.prayersSequence = [
            ...Sequences.Mass.StCyril,
            ...[
                Prefix.massCommon +
                    "AgiosPart3",
                Prefix.commonPrayer + "KyrieElieson",
                Prefix.commonPrayer + "BlockIriniPassi",
                Prefix.anchor + "Fraction",
                Prefix.commonPrayer + "OurFatherInHeaven",
                Prefix.massCommon + "Confession",
            ],
            ...Sequences.Mass.Communion,
        ];
        return btnMassStCyril.prayersSequence;
    },
    afterShowPrayers: async () => btnMassStBasil.afterShowPrayers(btnMassStCyril, Prefix.massStCyril),
});
const btnMassStGregory = new Button({
    btnID: "btnMassStGregory",
    label: { AR: "غريغوري", FR: "Saint Gregory" },
    docFragment: new DocumentFragment(),
    languages: [...prayersLanguages],
    onClick: () => {
        //Setting the standard mass prayers sequence
        btnMassStGregory.prayersSequence = [
            ...Sequences.Mass.StGregory,
            ...Sequences.Mass.CallOfHolySpirit,
            ...Sequences.Mass.Litanies,
            ...Sequences.Mass.Communion,
        ];
        //removing irrelevant prayers from the array
        btnMassStGregory.prayersSequence.splice(btnMassStGregory.prayersSequence.indexOf(Prefix.massCommon + "CallOfTheHolySpiritPart1" + anyDay), 9);
        scrollToTop();
        return btnMassStGregory.prayersSequence;
    },
    afterShowPrayers: async () => btnMassStBasil.afterShowPrayers(btnMassStGregory, Prefix.massStGregory),
});
const btnMassStJohn = new Button({
    btnID: "btnMassStJohn",
    label: { AR: "القديس يوحنا", FR: "Saint Jean" },
    docFragment: new DocumentFragment(),
    prayersSequence: [],
    onClick: () => {
        alert("The prayers of this mass have not yet been added. We hope they will be ready soon");
        return; //until we add the text of this mass
        scrollToTop(); //scrolling to the top of the page
        return btnMassStJohn.prayersSequence;
    },
    afterShowPrayers: async () => btnMassStBasil.afterShowPrayers(btnMassStJohn),
});
const btnMassBaptised = new Button({
    btnID: "btnMassBaptised",
    label: {
        AR: "قٌدَّاسِ المُؤْمِنينَ",
        FR: "Liturgie des Croyants",
        EN: "Baptized Mass",
    },
    parentBtn: btnMass,
    children: [btnMassStBasil, btnMassStGregory, btnMassStCyril], //We are removing Mass StJohn for now
});
const btnGospelVespers = new Button({
    btnID: "btnReadingsGospelIncenseVespers",
    label: {
        AR: "إنجيل عشية",
        FR: "Évangile  Vêpres",
        EN: "Vespers Gospel",
    },
    onClick: async () => await btnGospelMass.onClick(Prefix.gospelVespers),
});
const btnGospelMorning = new Button({
    btnID: "btnReadingsGospelIncenseDawn",
    label: {
        AR: "إنجيل باكر",
        FR: "Évangile du Matin",
        EN: "Morning Gospel",
    },
    onClick: async () => await btnGospelMass.onClick(Prefix.gospelMorning),
});
const btnGospelNight = new Button({
    btnID: "btnReadingsGospelNight",
    label: {
        AR: "إنجيل المساء",
        FR: "Évangile du Soir",
        EN: "Night Gospel",
    },
    onClick: async () => await btnGospelMass.onClick(Prefix.gospelNight)
});
const btnGospelMass = new Button({
    btnID: "btnReadingsGospelMass",
    label: {
        AR: "إنجيل القداس",
        FR: "Évangile de la messe",
        EN: "Mass Gospel",
    },
    onClick: async (gospelPrefix = Prefix.gospelMass) => {
        let prayersArray = PrayersArraysKeys.find((entry) => entry[0] === gospelPrefix);
        if (!prayersArray)
            return console.log("Didn\'t find the prayersArray");
        containerDiv.innerHTML = "";
        await insertGospelReadingAndResponses({
            liturgy: gospelPrefix,
            languages: getLanguages(gospelPrefix),
            container: containerDiv,
            isMass: false,
            clearContainer: true,
        });
        scrollToTop(); //scrolling to the top of the page
    },
});
const btnHolyWeek = new Button({
    btnID: 'btnHolyWeek',
    label: { AR: 'طقس اسبوع الآلام', FR: 'Rite de la semaine sainte' },
    onClick: () => {
        /*The buttons tree is structured this way:
        btnMaster =>
                btnPassOver =>
                        [btnDay, btnEvening]=>
                                  [btn1stHour, btn3rdHour, etc.]*/
        let Evening = 'E', Morning = 'M';
        let btnPassOver = new Button({
            btnID: 'btnPassover',
            label: { AR: 'البصخة المقدسة', FR: 'Pessah' },
            onClick: () => btnPassOver.children = [btnPassOverOnClick(Morning), btnPassOverOnClick(Evening)], //We remove undefined elements
        }); //btnPassOver shows Day and Evening buttons
        btnHolyWeek.children = [btnPassOver];
        function btnPassOverOnClick(service) {
            if (!service)
                return;
            return getDayAndEveningBtns(service);
            function getDayAndEveningBtns(service) {
                if (service === Evening && weekDay === 5)
                    return undefined; //This will be the Apocalyps Btns
                if (service === Morning && [6].includes(weekDay))
                    return undefined; //There is no morning Passover on Palm Sunday and Holy Saturday
                let labels = [
                    { AR: 'بصخة الصباح', FR: 'Matin' },
                    { AR: 'بصخة المساء', FR: 'Soir' }
                ];
                let btn = new Button({
                    btnID: 'btnPassover' + service,
                    label: labels[[Morning, Evening].indexOf(service)],
                    parentBtn: btnPassOver,
                    onClick: () => btn.children = getPassoverHoursBtns(service, btn),
                });
                return btn; //btn shows a btn for each hour according to whether we are in the 'Day' or 'Evening' Passover liturgy
            }
        }
        function getPassoverHoursBtns(service, btn) {
            if (btn.children)
                return;
            let hoursLabels;
            (function generateButtonsLabels() {
                let days = [
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
                        hour.lable.EN += ' of Abou Ghalamsis';
                    }
                });
            })();
            return hoursLabels.map(hour => createHourBtn(hour.prefix, hour.lable)).filter(btn => btn); //We remove any undefined buttons      
            function createHourBtn(hour, label) {
                if (hour === '12H' && weekDay !== 5)
                    return undefined; //The 12th hour is only for Friday
                if (['1H', '3H', '6H'].includes(hour) && service === Morning && weekDay === 0)
                    return undefined; //On Palm Sunday we start at the 9th hour
                let hourReadings = ReadingsArrays.GospelNightArrayFR
                    .filter(table => RegExp(Prefix.HolyWeek + hour + service + '\.*&D=' + copticReadingsDate).test(table[0][0]));
                let btnHour = new Button({
                    btnID: 'btn' + hour,
                    label: label,
                    parentBtn: btn,
                    languages: prayersLanguages,
                    docFragment: new DocumentFragment(),
                    onClick: () => btnHour.prayersSequence = [...Sequences.HolyWeek.PassOver],
                    afterShowPrayers: () => hourBtnAfterShowPrayers(btnHour, hour, hourReadings, label),
                });
                return btnHour;
                function hourBtnAfterShowPrayers(btn, hour, dayPrayers, label) {
                    let titles;
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
                        Array.from(Object.entries(titles))
                            .forEach(entry => {
                            Array.from(Object.entries(entry[1]))
                                .forEach(title => {
                                titles[entry[0]][title[0]] = title[1] + label[title[0]];
                            });
                        });
                    })();
                    (function insertHourReadings() {
                        let readingsLangs = ['COP', 'FR', 'AR'];
                        let readings = {
                            coptGospel: { table: undefined, anchor: undefined },
                            nonCopticGospel: { table: undefined, anchor: undefined },
                            coptPsalm: { table: undefined, anchor: undefined },
                            nonCopticPsalm: { table: undefined, anchor: undefined },
                            Commentary: { table: undefined, anchor: undefined },
                            Prophecies: { table: undefined, anchor: undefined },
                            Sermony: { table: undefined, anchor: undefined },
                            KhinEfran: { table: undefined, anchor: undefined },
                            Litany: { table: undefined, anchor: undefined },
                        };
                        (function fetchKhinEfranAndLitany() {
                            readings.KhinEfran.table = findTable(Prefix.HolyWeek + "KhinEfran" + service + "&D=$Seasons.HolyWeek", HolyWeekArray) || undefined;
                            if (!readings.KhinEfran.table)
                                return console.log('Didn\'t find Khin Efran');
                            readings.Litany.table = findTable(Prefix.HolyWeek + "FinalLitany" + service + "&D=$Seasons.HolyWeek", HolyWeekArray) || undefined;
                            if (!readings.Litany.table)
                                return console.log('Didn\'t find Litany');
                            readings.KhinEfran.anchor = fetchAnchors('KhinEfran');
                            readings.Litany.anchor = fetchAnchors('FinalLitany');
                        })();
                        (function fetchHourReadings() {
                            fetchTableOrPlaceHolder(readings.coptGospel, 'Gospel', 'CopticGospel');
                            fetchTableOrPlaceHolder(readings.nonCopticGospel, 'Gospel', 'nonCopticGospel');
                            fetchTableOrPlaceHolder(readings.coptPsalm, 'Psalm', 'CopticPsalm');
                            fetchTableOrPlaceHolder(readings.nonCopticPsalm, 'Psalm', 'nonCopticGospel');
                            fetchTableOrPlaceHolder(readings.Commentary, 'Commentary', 'Commentary');
                            fetchTableOrPlaceHolder(readings.Prophecies, 'Prophecies', 'Prophecies');
                            fetchTableOrPlaceHolder(readings.Sermony, 'Sermony', 'Prophecies');
                            readings.nonCopticPsalm.anchor = readings.nonCopticPsalm.anchor.previousElementSibling; //We need to do this because the nonCopticPsalm is inseret before the previous sibling of nonCopticGospel.placeHolder
                            function fetchTableOrPlaceHolder(reading, name, anchor) {
                                reading.table = fetchTable(name);
                                reading.anchor = fetchAnchors(anchor);
                            }
                            (function getVersionsOfGospelAndPsalm() {
                                //For the gospel and the psalm, we need to get 2 versions of each: the first version is only coptic, and the 2nd version includes all the other languages except the Coptic version
                                [readings.coptGospel, readings.nonCopticGospel, readings.coptPsalm, readings.nonCopticPsalm]
                                    .forEach((version) => {
                                    if (!version.table)
                                        return;
                                    version.table = (version.table)
                                        .map((row) => {
                                        if ([readings.coptGospel, readings.coptPsalm].includes(version))
                                            return [row[0], row[readingsLangs.indexOf('COP') + 1]];
                                        if ([readings.nonCopticGospel, readings.nonCopticPsalm].includes(version))
                                            return row.filter(el => row?.indexOf(el) !== readingsLangs.indexOf('COP') + 1);
                                    });
                                });
                            })();
                            function fetchTable(name) {
                                return findTable(Prefix.HolyWeek + hour + service + name, dayPrayers, { startsWith: true }) || undefined;
                            }
                        })();
                        function fetchAnchors(placeHolder) {
                            return selectElementsByDataSetValue(btnHour.docFragment, Prefix.anchor + placeHolder + '&D=$Seasons.HolyWeek', undefined, 'root')[0];
                        }
                        (function insertTablesBeforeAnchors() {
                            let languages;
                            [readings.coptPsalm,
                                readings.coptGospel,
                                readings.nonCopticPsalm,
                                readings.nonCopticGospel,
                                readings.Commentary,
                                readings.Prophecies,
                                readings.Sermony, //!This must come directly after readings.Prophecies
                                readings.KhinEfran,
                                readings.Litany]
                                .forEach(async (reading) => {
                                if (!reading.table || !reading.anchor)
                                    return console.log('Either the table or the Anchor are missing:  table = ', reading.table, 'Anchor = ', reading.anchor);
                                if ([readings.KhinEfran, readings.Litany].includes(reading))
                                    languages = prayersLanguages;
                                else if ([readings.Sermony, readings.Commentary, readings.Prophecies].includes(reading))
                                    languages = readingsLangs;
                                else if ([readings.nonCopticGospel, readings.nonCopticPsalm].includes(reading))
                                    languages = [readingsLangs[1], readingsLangs[2]];
                                else if ([readings.coptGospel, readings.coptPsalm].includes(reading))
                                    languages = [readingsLangs[0]];
                                reading.table = reading?.table?.filter(row => row); //We remove any undefined elements in the table;
                                reading.table = await retrieveReadingTableFromBible(reading.table, languages);
                                reading.table[0] = insertTableTitleRow();
                                if (reading === readings.Prophecies)
                                    reading.table = await processPropheciesTitles(reading.table); //!This must come before the text is retrieved from the bible because the references rows are replaced by the text and will be lost
                                insertPrayersAdjacentToExistingElement({
                                    tables: [reading.table],
                                    languages: languages,
                                    container: btnHour.docFragment,
                                    position: {
                                        el: reading.anchor, beforeOrAfter: 'beforebegin'
                                    }
                                });
                                function insertTableTitleRow() {
                                    let row = [reading.table[0][0]];
                                    let title;
                                    if (reading === readings.Commentary)
                                        title = titles.Commentary;
                                    else if (reading === readings.Prophecies)
                                        title = titles.Prophecies;
                                    else if (reading === readings.Sermony)
                                        title = titles.Sermony;
                                    else if (reading === readings.nonCopticGospel)
                                        title = titles.Gospel;
                                    else if (reading === readings.nonCopticPsalm)
                                        title = titles.Psalm;
                                    else
                                        return reading.table[0];
                                    languages
                                        .map(lang => lang !== 'COP' ? row.push(title[lang]) : row.push(''));
                                    return row;
                                }
                                async function processPropheciesTitles(table) {
                                    return table;
                                    if (!table[0][0]?.includes('Prophecies&D='))
                                        return table;
                                    let references = [], index;
                                    for (let i = 1; i < table.length; i++) {
                                        if (!table[i][0]?.includes('&C=Title'))
                                            continue;
                                        index = i;
                                        i += 1;
                                        while (!table[i][0]?.startsWith(Prefix.readingRef))
                                            i += 1;
                                        while (table[i][0]?.startsWith(Prefix.readingRef)) {
                                            references.push(table[i][0]?.split('&C=')[0]);
                                            if (i === table.length - 1)
                                                break;
                                            i += 1;
                                        }
                                        if (references.length < 1)
                                            continue;
                                        table[index] = [Prefix.same + "&C=Title", ...await Promise.all(languages.map(async (lang) => await getReferencesTitle(lang)))];
                                        i -= 1;
                                        references = [];
                                    }
                                    return table;
                                    async function getReferencesTitle(lang) {
                                        if (![defaultLanguage, foreingLanguage].includes(lang))
                                            return '';
                                        let reference1 = references[0].split(Prefix.readingRef)[1].split(':'); //This should yield a 3 elements array ["book name", "chapter number", "verses range"] like ["GEN", "12", "3-7"]
                                        let bookList = await getBibleBooksList(lang);
                                        let book = bookList?.find(b => b.id === reference1[0]);
                                        if (!book)
                                            return '';
                                        let first = reference1[reference1.length - 1].split('-')[0];
                                        let lastReference = references[references.length - 1].split(':');
                                        return book.human + '\n(' + reference1[1] + ': ' + first + '-' + lastReference[lastReference.length - 1].split('-')[1] + ')';
                                    }
                                }
                            });
                        })();
                        Array.from(btnHour.docFragment.children).find((div) => div.dataset.root === Prefix.incenseDawn +
                            "GodHaveMercyOnUsRefrain&D=$Seasons.GreatLent").remove(); //Removing the Title row of the "God Have Mercy" table
                    })();
                    (function insertThursdayLakanAndMassBtns() {
                        //If we are on the Holy Thursday morning service
                        if (weekDay !== 4)
                            return;
                        if (service !== Morning)
                            return; //We are during the Morning Passover service
                        if (hour !== '9H')
                            return; //It is the 9th Hour button
                        let anchor = selectElementsByDataSetValue(btn.docFragment, Prefix.HolyWeek + 'Begining of the 11th Hour element', undefined, 'root'); //!We need to check the anchor
                        if (!anchor)
                            return;
                        let btnsDiv = document.createElement('div');
                        btnsDiv.style.display = "grid";
                        btnsDiv.style.gridTemplateColumns = "50% 50%";
                        anchor[0].insertAdjacentElement('beforebegin', btnsDiv);
                        let btnLakan = new Button({
                            btnID: 'Lakan',
                            label: { AR: 'لقان خميس العهد', FR: 'Lavage des pieds' },
                            languages: prayersLanguages,
                            onClick: () => btnLakanOnClick(btnLakan.btnID, btnsDiv),
                            afterShowPrayers: () => btnLakanAfterShowPrayers(btnLakan.btnID),
                        });
                        let btnMass = new Button({
                            btnID: 'ThursdayMass',
                            label: { AR: 'قداس خميس العهد', FR: 'Messe du Jeudi Saint' },
                            languages: prayersLanguages,
                            onClick: () => btnMassOnClick(btnMass.btnID, btnsDiv),
                            afterShowPrayers: () => btnMassAfterShowPrayers(btnMass.btnID),
                        });
                        let btnGoBack = Array.from(sideBarBtnsContainer.children).find(htmlBtn => htmlBtn.id === btnGoToPreviousMenu.btnID);
                        let htmlBtn;
                        [btnLakan, btnMass].forEach(btn => {
                            htmlBtn = createHtmlBtn({
                                btn: btn,
                                btnsContainer: btnsDiv,
                                btnClass: inlineBtnClass,
                                clear: false
                            });
                            btnGoBack.insertAdjacentElement('beforebegin', htmlBtn.cloneNode(true)); //We add a copy of each button to the left side bar
                        });
                        function btnLakanOnClick(btnID, btnsDiv) {
                            let id = btnID + 'Div';
                            if (checkIfLiturgyIsDisplayed(id))
                                return;
                            let lakanDiv = document.createElement('div');
                            lakanDiv.id = id;
                            btnsDiv.insertAdjacentElement('afterend', lakanDiv); //!Caution: we insert lakanDiv before the begining of btnsDiv on purpose in order to place btnsDiv at the end of lakanDiv for the user to be able to click on the other button afterwards
                            showPrayers({
                                prayersSequence: Sequences.HolyWeek.Lakan,
                                container: lakanDiv,
                                languages: prayersLanguages,
                                clearContainerDiv: true,
                                clearRightSideBar: false
                            });
                        }
                        function btnLakanAfterShowPrayers(btnID) {
                            if (containerDiv.querySelector('#' + btnID + 'Div'))
                                return; //It means the button was clicked before and all the content is already appended to containerDiv
                            let reading, anchor;
                            (function insertLakanStPaul() {
                                anchor = selectElementsByDataSetValue(btn.docFragment, Prefix.anchor + "Readings");
                                if (anchor.length < 1)
                                    return console.log('Didn\'t find the anchor for St. Paul Reading');
                                reading = findTable(Prefix.HolyWeek + '&D=GL55', ReadingsArrays.StPaulArrayFR) || undefined; //!Caution: the St. Paul reading for the Lakan is exceptionally prefixed with Prefix.HolyWeek not with Prefix.stPaul in order to distinguish it from the St. Paul reading of the Mass the same day
                                if (!reading)
                                    return console.log('Didn\'t find the St. Paul Reading');
                                showPrayers({
                                    table: reading,
                                    languages: getLanguages(Prefix.stPaul),
                                    container: btn.docFragment,
                                    position: {
                                        el: anchor[0],
                                        beforeOrAfter: 'beforebegin'
                                    },
                                    clearContainerDiv: false,
                                    clearRightSideBar: false,
                                });
                            })();
                            (function insertLakanGospel() {
                                let id = 'lakanGospel';
                                let gospelDiv = btn.docFragment.querySelector('#' + id);
                                if (gospelDiv) {
                                    //It means the St. Paul reading is already displayed
                                    gospelDiv.classList.toggle(hidden);
                                    return;
                                }
                                anchor = selectElementsByDataSetValue(btn.docFragment, Prefix.anchor + "GospelLitany");
                                (function insertGospelReading() {
                                    insertGospelReadingAndResponses({
                                        liturgy: Prefix.gospelMorning,
                                        languages: getLanguages(Prefix.gospelMorning),
                                        container: btn.docFragment,
                                        isMass: true,
                                        clearContainer: false,
                                    });
                                })();
                                reading = findTable(Prefix.gospelMorning + '&D=GL55', ReadingsArrays.GospelMorningArrayFR) || undefined;
                                if (!reading)
                                    return console.log('Didn\'t find the Gospel');
                                gospelDiv = document.createElement('div');
                                gospelDiv.id = id;
                            })();
                        }
                        function btnMassOnClick(btnID, btnsDiv) {
                            let id = btnID + 'Div';
                            if (checkIfLiturgyIsDisplayed(id))
                                return;
                        }
                        function btnMassAfterShowPrayers(btnID) {
                            if (containerDiv.querySelector('#' + btnID + 'Div'))
                                return; //It means the button was clicked before and all the content is already appended to containerDiv
                        }
                        function checkIfLiturgyIsDisplayed(divID, hide = false) {
                            let liturgyDiv = containerDiv.querySelector('#' + divID);
                            if (liturgyDiv) {
                                if (hide && !liturgyDiv.classList.contains(hidden))
                                    liturgyDiv.classList.add(hidden);
                                else
                                    liturgyDiv.classList.toggle(hidden);
                                return true;
                            }
                            return false;
                        }
                    })();
                }
            }
            ;
        }
    }
});
const btnBible = new Button({
    btnID: 'btnBible',
    label: {
        AR: 'الكتاب المقدس',
        FR: 'La Bible'
    },
    onClick: async (refs) => {
        if (refs) {
            await chapterBtnOnClick({
                chapterNumber: refs.chapterNumber,
                bookID: refs.bookID
            });
            return;
        }
        let newTestament = new Button({
            btnID: 'newTestament',
            label: {
                AR: 'العهد الجديد',
                FR: 'Nouveau Testament',
                EN: 'New Testament'
            },
            onClick: async () => newTestament.children = await getBooksButtons(false) //!We need the children to be added when the button is clicked not when it is created because the Bibles are not defined at this stage
        });
        let oldTestament = new Button({
            btnID: 'oldTestament',
            label: {
                AR: 'العهد القديم',
                FR: 'Ancien Testament',
                EN: 'Old Testament'
            },
            onClick: async () => oldTestament.children = await getBooksButtons(true) //!We need the children to be added when the button is clicked not when it is created because the Bibles are not defined at this stage
        });
        btnBible.children = [oldTestament, newTestament];
        async function getBooksButtons(old) {
            let booksListDefault, booksListForeing;
            booksListDefault = await getBibleBooksList(defaultLanguage);
            //  if (foreingLanguage) bibleForeign = getBibleBooksList(foreingLanguage);
            if (!booksListDefault)
                return;
            let booksNamesDefault, bookNamesForeign;
            booksNamesDefault = booksListDefault.map(book => book.human_long);
            //if(foreingLanguage) booksNamesForeing = booksListForeing.map(book => book.human_long);
            if (old)
                booksNamesDefault = booksNamesDefault.slice(0, 48);
            else if (!old)
                booksNamesDefault = booksNamesDefault.slice(48, booksNamesDefault.length);
            let labels = booksNamesDefault.map(bookID => {
                let label = new Object();
                label[defaultLanguage] = bookID;
                return label;
            });
            let booksButtons = labels.map(label => {
                let btn;
                btn = new Button({
                    btnID: 'btnBibleBook' + labels.indexOf(label),
                    label: label,
                    onClick: () => btn.children = getChaptersButtons(booksListDefault.find(book => book.human_long === label[defaultLanguage]).id) //!We need the children to be added when the button is clicked not when it is created because the Bibles are not defined at this stage
                });
                return btn;
            });
            return booksButtons;
        }
        function getChaptersButtons(bookID) {
            let defaultLangBible, foreignLangBible;
            defaultLangBible = Bibles[defaultLanguage][0];
            if (foreingLanguage)
                foreignLangBible = Bibles[foreingLanguage][0];
            let bookDefault, bookForeign;
            bookDefault = defaultLangBible.find(book => book[0].id === bookID);
            if (foreignLangBible)
                bookForeign = foreignLangBible.find(book => book[0].id === bookID);
            return chaptersBtns(bookDefault);
            function chaptersBtns(book) {
                let chaptersButtons = book[0].chaptersList
                    .map(number => {
                    if (/\D/.test(number))
                        return; //We ignore the introductions to the French version of the book because they have not been retrieved
                    let label = new Object();
                    label[defaultLanguage] = getChapterLabel() + number;
                    return new Button({
                        btnID: 'btnChapter' + number,
                        label: label,
                        onClick: () => chapterBtnOnClick({
                            bookID: book[0].id,
                            chapterNumber: number
                        })
                    });
                });
                return chaptersButtons;
            }
        }
        async function chapterBtnOnClick(refs) {
            if (!refs)
                return;
            let languages = [defaultLanguage];
            if (foreingLanguage)
                languages?.push(foreingLanguage);
            await showChapterText();
            async function showChapterText() {
                let table = [
                    [
                        'Bible_' + refs.bookID + refs.chapterNumber + '&C=Title',
                    ],
                ];
                let list, book;
                const retrievedText = await Promise.all(languages.map(async (lang) => {
                    list = await getBibleBooksList(lang);
                    book = list?.find(b => b.id === refs.bookID);
                    if (!book)
                        return;
                    table[0]?.push(getTitle(book, lang, refs.chapterNumber));
                    return getBibleChapterText({
                        bible: await getBibleVersion(lang),
                        bookID: refs.bookID,
                        chapterNumber: refs.chapterNumber
                    }) || '';
                }));
                if (!retrievedText || retrievedText.join() === '')
                    return;
                let matched = matchPargraphsSplitting(retrievedText, languages, 0, 'NoActor');
                if (!matched)
                    return;
                table.push(...matched);
                showPrayers({
                    table: table,
                    languages: languages,
                    container: containerDiv,
                    clearContainerDiv: true,
                    clearRightSideBar: true,
                });
            }
            ;
            updateBookmark({ bookID: refs.bookID, chapterNumber: refs.chapterNumber });
            (function appendNextAndPrevBtns() {
                let btnsDiv = document.createElement('div');
                containerDiv.append(btnsDiv);
                let right = '⇒', left = '⇐';
                let next = new Button({
                    btnID: 'btnNext',
                    label: {
                        AR: right,
                        FR: right,
                        EN: right,
                    },
                    onClick: () => nextOnClick(true)
                });
                let prev = new Button({
                    btnID: 'btnPrev',
                    label: {
                        AR: left,
                        FR: left,
                        EN: left,
                    },
                    onClick: () => nextOnClick(false)
                });
                if (defaultLanguage === 'AR') {
                    prev.onClick = () => nextOnClick(true);
                    next.onClick = () => nextOnClick(false);
                }
                [prev, next].forEach(btn => {
                    createHtmlBtn({
                        btn: btn,
                        btnsContainer: btnsDiv,
                        btnClass: inlineBtnClass
                    });
                });
                btnsDiv.classList.add(inlineBtnsContainerClass);
                // floatOnTopOrBottom(btnsDiv, false, "0px");
                btnsDiv.style.gridTemplateColumns = setGridColumnsOrRowsNumber(btnsDiv);
                async function nextOnClick(next, id = refs.bookID) {
                    let books = await getBibleBooksList(defaultLanguage), book = books?.find(b => b.id === id), chaptersList = book.chaptersList;
                    (function nextChapter() {
                        if (!next)
                            return;
                        if (chaptersList.indexOf(refs.chapterNumber) === chaptersList.length - 1) {
                            //We will move to the first chapter in the  next book
                            book = books[books.indexOf(book) + 1] || books[0]; //If we have already reached the last book, we move the the first book
                            refs.chapterNumber = book.chaptersList[0];
                            return;
                        }
                        refs.chapterNumber = book.chaptersList[book.chaptersList.indexOf(refs.chapterNumber) + 1];
                    })();
                    (function previousChapter() {
                        if (next)
                            return;
                        if (chaptersList.indexOf(refs.chapterNumber) === 0) {
                            //We will move to the last chapter in the previous book
                            book = books[books.indexOf(book) - 1] || books[books.length - 1]; //If we have already reached the first book, we move to the last book
                            refs.chapterNumber = book.chaptersList[book.chaptersList.length - 1];
                            return;
                        }
                        refs.chapterNumber = book.chaptersList[book.chaptersList.indexOf(refs.chapterNumber) - 1];
                    })();
                    await chapterBtnOnClick({
                        bookID: book.id,
                        chapterNumber: refs.chapterNumber
                    });
                    updateBookmark({ bookID: book.id, chapterNumber: refs.chapterNumber });
                }
            })();
            function updateBookmark(refs) {
                bookMarks[0] = [refs.bookID, refs.chapterNumber]; //We add the chapter to the bookMarks
                localStorage.bookMarks = JSON.stringify(bookMarks); //We save the bookMarks to the local storage
            }
            scrollToTop();
            return true;
            function getTitle(book, lang, chapterNumber) {
                if (!book)
                    return '';
                return book.human_long + '\n' + getChapterLabel() + chapterNumber;
            }
        }
        function getChapterLabel() {
            let chapterLabel = {
                AR: 'إصحاح ',
                FR: 'Chapître ',
                EN: 'Chapter '
            };
            return chapterLabel[defaultLanguage] || '';
        }
    },
    afterShowPrayers: () => {
        if (!localStorage.bookMarks)
            return;
        let lastReading = JSON.parse(localStorage.bookMarks)[0];
        if (!lastReading)
            return lastReading = null;
        //We create a fake button simulating the action of chapters' buttons of each book
        let btnLabel = {
            AR: 'آخر قراءة',
            FR: 'Dernier chapitre lu',
            EN: 'Last Reading'
        };
        let btn = new Button({
            btnID: 'lastReading',
            label: btnLabel,
            cssClass: 'btnBookMark',
            onClick: async () => {
                await btnBible.onClick({ bookID: lastReading[0], chapterNumber: lastReading[1] });
            },
        });
        (function addSideBarShortcut() {
            let bookMarkDiv = document.createElement("div"); //this is just a container
            bookMarkDiv.role = "button";
            bookMarkDiv.id = 'bookmarkLast';
            bookMarkDiv.classList.add("sideTitle");
            sideBarTitlesContainer.appendChild(bookMarkDiv);
            let bookmark = document.createElement("a");
            bookMarkDiv.appendChild(bookmark);
            bookmark.innerText = btnLabel[defaultLanguage];
            bookMarkDiv.addEventListener("click", () => showChildButtonsOrPrayers(btn));
        })();
        (function addMainPageBtn() {
            let btnDiv = document.createElement('div');
            btnDiv.classList.add(inlineBtnsContainerClass);
            containerDiv.prepend(btnDiv);
            createHtmlBtn({
                btn: btn,
                btnsContainer: btnDiv,
                btnClass: btn.cssClass,
                clear: false,
            });
            btnDiv = null;
            btnLabel = null;
        })();
    }
});
/**
 * Inserts buttons each of which redirects to a specific part in a given mass

 * @param {Button[]} btns - an array of Button elements for each of which an html element will be created by createBtn() and appended to a newly created div. Each of the html buttons created will, when clicked
 * @param {InsertPosition} position - the position at which the div containing the created html elements for each button, will be inserted compared to the containerDiv child retrieved using the querySelector parameter
 * @param {string} btnsContainerID - the id of the div container to which the html buttons will be appended. This id may be needed to select the div after redirection
 */
async function insertRedirectionButtons(btns, position, btnsContainerID) {
    if (!position.beforeOrAfter)
        position.beforeOrAfter = "beforebegin";
    let div = document.createElement("div");
    div.id = btnsContainerID;
    div.classList.add(inlineBtnsContainerClass);
    btns.map((btn) => div.appendChild(createHtmlBtn({ btn: btn, btnsContainer: div, btnClass: btn.cssClass })));
    position.el.insertAdjacentElement(position.beforeOrAfter, div);
    div.style.gridTemplateColumns = setGridColumnsOrRowsNumber(div, 3);
}
/**
 *
 * @param {string[][][]} filteredPrayers - An array containing the optional prayers for which we want to display html button elements in order for the user to choose which one to show
 * @param {Button} btn
 * @param {HTMLElement} btnsDiv - The html element in which each prayer will be displayed when the user clicks an inline button representing this prayer
 * @param {Object{AR:string, FR:'string'}} btnLabels - An object containing the labels of the master button that the user will click to show a list of buttons, each representing a prayer in selectedPrayers[]
 * @param {string} masterBtnID - The id of the master button
 */
async function showMultipleChoicePrayersButton(args) {
    if (!args.anchor)
        console.log("anchor missing");
    if (!args.masterBtnDiv && args.anchor) {
        args.masterBtnDiv = document.createElement("div"); //a new element to which the inline buttons elements will be appended
        args.anchor.insertAdjacentElement("afterend", args.masterBtnDiv); //we insert the div after the insertion position
    }
    (async function createMasterBtn() {
        let btn = new Button({
            btnID: args.masterBtnID,
            label: args.btnLabels,
            children: await createBtnsForPrayers(), //The inlineBtns are not added immediately, they are added later by createInlineBtns() below
            pursue: false, //!CAUTION: we must keep it false in order to stop the showChildButtonsOrPrayers() from continuing the execution after calling the onClick() property of the master button. Otherwise, this will show again the inlineButtons of the master button
            cssClass: inlineBtnClass,
            onClick: () => {
                let groupOfNumber = 4;
                //We show the inlineBtnsDiv (bringing it in front of the containerDiv by giving it a zIndex = 3)
                showExpandableBtnsPannel(args.masterBtnID, true);
                //When the prayersMasterBtn is clicked, it will create a new div element to which it will append html buttons element for each inlineBtn in its inlineBtns[] property
                let newDiv = document.createElement("div");
                newDiv.id = args.masterBtnID + "Container";
                //Customizing the style of newDiv
                newDiv.classList.add(inlineBtnsContainerClass);
                //We set the gridTemplateColumns of newDiv to a grid of 3 columns. The inline buttons will be displayed in rows of 3 inline buttons each
                newDiv.style.gridTemplateColumns = setGridColumnsOrRowsNumber(newDiv, undefined, 2);
                //We append newDiv  to inlineBtnsDiv before appending the 'next' button, in order for the "next" html button to appear at the buttom of the inlineBtnsDiv. Notice that inlineBtnsDiv is a div having a 'fixed' position, a z-index = 3 (set by the showInlineBtns() function that we called). It hence remains visible in front of, and hides the other page's html elements in the containerDiv
                expandableBtnsPannel.appendChild(newDiv);
                expandableBtnsPannel.style.borderRadius = "10px";
                let startAt = 0;
                //We call showGroupOfSisxPrayers() starting at inlineBtns[0]
                showGroupOfNumberOfPrayers(btn, startAt, newDiv, groupOfNumber);
            },
        });
        (function createMasterBtnHtml() {
            createHtmlBtn({
                btn: btn,
                btnsContainer: args.masterBtnDiv,
                btnClass: btn.cssClass,
                clear: false,
                onClick: btn.onClick,
            });
            args.masterBtnDiv.classList.add(inlineBtnsContainerClass);
            args.masterBtnDiv.classList.add("masterBtnDiv");
            args.masterBtnDiv.style.gridTemplateColumns = "100%";
        })();
        return btn;
    })();
    /**
     * Shows a group of html buttons, each button shows a prayer. A button next permits to navigate through the list of html buttons
     */
    function showGroupOfNumberOfPrayers(masterBtn, startAt, btnsDiv, groupOfNumber) {
        let childBtn;
        (function createHtmlButtonNext() {
            if (masterBtn.children.length <= groupOfNumber)
                return; //We don't create next button if the nubmer of optional prayers is less or equal to the defined number of prayers to be displayed each time
            let next = new Button({
                btnID: "btnNext",
                label: { AR: "التالي", FR: "Suivants" },
                cssClass: inlineBtnClass,
            });
            //if the number of prayers is > than the groupOfNumber AND the remaining prayers are >0 then we show the next button
            if (masterBtn.children.length - startAt > groupOfNumber) {
                //We create the "next" Button only if there is more than 6 inlineBtns in the prayersBtn.inlineBtns[] property
                next.onClick = () => btnNextOnClick(true);
            }
            else if (masterBtn.children.length - startAt <= groupOfNumber) {
                next.label.AR = "عودة";
                next.label.FR = "Retour";
                next.onClick = () => btnNextOnClick(false);
            }
            if (!next.onClick)
                return; //If no onClick function was assigned to next, we do not create the next button
            createHtmlBtn({
                btn: next,
                btnsContainer: expandableBtnsPannel,
                btnClass: next.cssClass,
                clear: false,
                onClick: next.onClick,
            }); //notice that we are appending next to inlineBtnsDiv directly not to newDiv (because newDiv has a display = 'grid' of 2 columns. If we append to it, 'next' button will be placed in the 1st cell of the last row. It will not be centered). Notice also that we are setting the 'clear' argument of createBtn() to false in order to prevent removing the 'Go Back' button when 'next' is passed to showchildButtonsOrPrayers()
            function btnNextOnClick(forward = true) {
                //When next is clicked, we remove all the html buttons displayed in newDiv (we empty newDiv)
                btnsDiv.innerHTML = "";
                //We then remove the "next" html button itself (the "next" button is appended to inlineBtnsDiv directly not to newDiv)
                expandableBtnsPannel.querySelector("#" + next.btnID).remove();
                //We set the starting index for the next group of inline buttons
                if (forward)
                    startAt += groupOfNumber;
                else
                    startAt = 0;
                //We call showGroupOfSixPrayers() with the new startAt index
                showGroupOfNumberOfPrayers(masterBtn, startAt, btnsDiv, groupOfNumber);
            }
        })();
        (function createPrayersHtmlButtons() {
            for (let n = startAt; n < startAt + groupOfNumber && n < masterBtn.children.length; n++) {
                //We create html buttons for the 1st 6 inline buttons and append them to newDiv
                childBtn = masterBtn.children[n];
                if (!foreingLanguage && !childBtn.label[defaultLanguage])
                    return; //If no foreign language has been set by the user, and the prayer is not availble in the defaultLanguage (we check this by seeing if there is a label in this language), we will not create the btn
                if (!childBtn.label[defaultLanguage] && !childBtn.label[foreingLanguage])
                    return; //Also if a foreign language has been set by the user, but the prayer is not availble in neither the defaultLanguage  nor the default language (we check this by seeing if there is a label in each language), we will not create the btn
                createHtmlBtn({
                    btn: childBtn,
                    btnsContainer: btnsDiv,
                    btnClass: childBtn.cssClass,
                    clear: false,
                    onClick: childBtn.onClick,
                });
            }
        })();
    }
    ;
    /**
     *Creates a new Button for each optional prayer
     @return {Promise<Button[]>}
     */
    async function createBtnsForPrayers() {
        let btns;
        btns = args.filteredPrayers.map((table) => {
            //for each string[][][] representing a table in the Word document from which the text was extracted, we create an inlineButton to display the text of the table
            if (table.length === 0)
                return;
            let title = splitTitle(table[0][0])[0];
            let btn = new Button({
                btnID: title, //prayerTable[0] is the 1st row, and prayerTable[0][0] is the 1st element, which represents the title of the table + the cssClass preceded by "&C="
                label: {
                    AR: table[0][args.languages?.indexOf('AR') + 1], //prayerTable[0] is the first row of the Word table from which the text of the prayer was retrieved. The 1st element of each row contains  the title of the prayer (i.e. the title of the table) + the CSS class of the row, preceded by "&C=". We look for the Arabic title by the index of 'AR' in the btn.languages property. We add 1 to the index because the prayerTable[0][0] is the title of the table as mentioned before
                    FR: table[0][args.languages?.indexOf('FR') + 1], //same logic and comment as above
                },
                languages: args.languages, //we keep the languages of the btn since the fraction prayers are retrieved from a table having the same number of columns and same order for the languages
                cssClass: "multipleChoicePrayersBtn",
                onClick: () => btnOnClick(btn, title),
            });
            return btn;
        });
        if (foreingLanguage)
            btns
                .filter(btn => !btn?.label[defaultLanguage] && btn.label[foreingLanguage]) //For any button which prayer is not available in the defaultLanguage, but is available in the foreignLanguage, we will set its defaultLanguage label to be equal to its foreignLanguage lable. We do this, because any button that doesn't have a defaulLangauge label will be excluded from the btns array that the function will return
                .map(btn => {
                btn.label[defaultLanguage] = btn.label[foreingLanguage];
                btns.splice(btns.indexOf(btn), 1); //We remove the button from btns array, and will push it to the array later in order to move it to the end
                return btn;
            })
                .forEach(btn => btns.push(btn));
        return btns.filter(btn => btn?.label[defaultLanguage]); //!We return only the btns having a lable in the defaultLanguage
        function btnOnClick(btn, title) {
            let table = findTable(title, getTablesArrayFromTitlePrefix(title)) || undefined;
            console.log(title);
            let container = document.createElement('div');
            if (!table)
                return;
            let masterBtn = Array.from(containerDiv.querySelectorAll("." + inlineBtnClass)).find((child) => child.id === args.masterBtnID);
            //When the prayer button is clicked, we empty and hide the inlineBtnsDiv
            hideExpandableButtonsPannel();
            let shown = Array.from(containerDiv.children)
                .find((div) => div.dataset.optionalPrayer &&
                div.dataset.optionalPrayer === masterBtn.dataset.shown);
            if (shown)
                shown.remove();
            //We call showPrayers and pass inlinBtn to it in order to display the fraction prayer
            let createdElements = showPrayers({
                table: table,
                languages: btn.languages,
                container: container,
                clearContainerDiv: false,
                clearRightSideBar: false,
            }) || undefined;
            if (!createdElements)
                return;
            container.dataset.optionalPrayer = title;
            masterBtn.dataset.shown = title;
            args.masterBtnDiv.insertAdjacentElement('afterend', container);
            //We format the grid template of the newly added divs
            setCSS(createdElements);
            //We apply the amplification of text
            applyAmplifiedText(createdElements);
            //We scroll to the button
            createFakeAnchor(args.masterBtnID);
        }
        ;
    }
}
/**
 * Adapts the Concluding Hymn of any Liturgy to the Season
 */
function adaptConcludingHymn(container) {
    let anchor = selectElementsByDataSetValue(container, Prefix.anchor + 'ConcludingHymn' + anyDay, undefined, 'root')[0];
    if (!anchor)
        return console.log('Didn\'t find Concluding Hymn Season Anchor');
    let tbl;
    (function insertSeasonal() {
        let title = Prefix.commonPrayer + "ConcludingHymn&D=$Seasons.";
        if (Season === Seasons.NoSeason)
            title += Object.entries(Seasons).find(entry => entry[1] === naturalSeasons())[0];
        else
            title += Object.entries(Seasons).find(entry => entry[1] === Season)[0];
        tbl = findTable(title, CommonArray) || undefined;
        if (!tbl)
            return console.log('Didn\'t find a relevant table');
        if (Season === Seasons.GreatLent) {
            if ([0, 6].includes(weekDay))
                tbl = [tbl[tbl.length - 1]]; //The last row is for the Great Lent Saturdays and Sundays
            else {
                tbl = [...tbl].slice(0, -2); //We remove the 2nd row, and we remove the last row. ! Notice that we create a new table
                selectElementsByDataSetValue(container, Prefix.commonPrayer + 'ConcludingHymn' + anyDay, undefined, 'root')[1].remove(); //We remove the first paragraph ('Amin Allelujah')
            }
        }
        insertPrayersAdjacentToExistingElement({
            tables: [tbl],
            languages: prayersLanguages,
            position: {
                el: anchor,
                beforeOrAfter: 'beforebegin'
            },
            container: container
        });
    })();
    (function InsertPopeAndBishopHymn() {
        tbl = findTable(Prefix.commonPrayer + "ConcludingHymnBishop" + anyDay, CommonArray) || undefined;
        if (!tbl)
            return console.log('Didn\'t find a relevant table');
        addExpandablePrayer({
            prayers: [tbl],
            insertion: anchor,
            btnID: 'concludingHymn',
            languages: prayersLanguages,
            label: {
                AR: 'في حضور البطرك أو أحد الأساقفة',
                FR: 'En présence du Pape ou d\'un évêque',
            },
        });
    })();
}
/**
 * Makes a buttons div container floating on the top of the page
 * @param {HTMLDivElement} btnContainer - the buttons div container we want to make float;
 * @param {boolean} top - true = top, false = bottom
 * @param {string} value - the value of the floating
 */
function floatOnTopOrBottom(btnContainer, top, value) {
    btnContainer.style.position = "fixed";
    top ? btnContainer.style.top = value : btnContainer.style.bottom = value;
    btnContainer.style.justifySelf = "center";
}
;
/**
 * Fetchs and displaying any readings other than the Gospel and the Psalm
 * @param {string} readingPrefix
 * @param {string[][][]} readingArray - The array where the reading's texts are to be found
 * @param {HTMLElement} container - The container where the text will be displayed after fetched
 * @param {boolean} clearContainer - specifies whether the container should be cleared or not before the reading is displayed
 * @returns
 */
async function insertMassReadingOtherThanGospel(readingPrefix, position, container = containerDiv, clearContainer = false, readingDate) {
    //@ts-ignore
    if (!readingPrefix)
        return;
    if (container === containerDiv && clearContainer)
        container.innerHTML = "";
    if (container.children.length === 0)
        container.appendChild(document.createElement("div"));
    if (!position.el)
        position.el = container.children[0];
    if (!position.beforeOrAfter)
        position.beforeOrAfter = "beforebegin";
    if (!readingDate)
        readingDate = copticReadingsDate;
    let readingArray = PrayersArraysKeys.find(array => array[0] === readingPrefix)[2]();
    let reading = readingArray.find((table) => isMultiDatedTitleMatching(splitTitle(table[0][0])[0], [readingDate]));
    if (!reading)
        return console.log("Did not find a reading for the current copticReadingsDate");
    let languages = getLanguages(readingPrefix);
    let tables = new Array(), tbl = [];
    reading.forEach(row => {
        if (['Title', 'SubTitle'].find(title => row[0].endsWith('&C=' + title)) && reading.indexOf(row) > 0) {
            //This is not the first table to added to tables
            tables.push(structuredClone(tbl));
            tbl = [];
            tbl.push(row);
            return;
        }
        tbl.push(row);
        if (reading.indexOf(row) === reading.length - 1)
            tables.push(structuredClone(tbl));
    });
    let retrievedText = await Promise.all(tables.map(async (table) => await retrieveReadingTableFromBible(table, languages)));
    tables = null;
    tbl = null;
    return insertPrayersAdjacentToExistingElement({
        tables: retrievedText,
        languages: languages,
        position: position,
        container: containerDiv,
    });
}
/**
 * Retrives the text of the verses wher a reading table contains references to these verses instead of the text
 * @param {string[][]} reading - The reading Table retrived from the corresponding reading array
 * @param langs
 * @param {boolean} liturgy - If true, it means that the function is called to retrieve the reading within a liturgy context: eg.: unbaptised mass, Pass-over, etc.
 * @returns
 */
async function retrieveReadingTableFromBible(reading, langs) {
    if (!reading)
        return;
    langs = langs?.filter(lang => lang);
    let rowsWithReferences = reading
        .filter(row => row?.find(el => el?.startsWith(Prefix.readingRef))); //We check of any of the table's rows has an element starting with Prefix.readingRef: this means this element is a reference for a text that we need to retrieve from the relevant bible
    if (rowsWithReferences.length < 1)
        return reading; //It means that there are no rows with references
    //reading = structuredClone(reading);//We create a copy of the table;
    let splitted;
    let ready = new Set(); //this set will contain arrays of ["bookID:chapterNumber:lang", chapter] for each chapter treated. If the chapter is found, we will not retreive it again.
    const retrieved = [];
    for (const row of reading) {
        //! We can't use forEach because forEach doesn't await for async functions to resolve
        if (rowsWithReferences.includes(row))
            retrieved.push(await referenceTitleRow(row), ...await processReadingReference(row));
        else if (reading.indexOf(row) === 0)
            retrieved.push(row);
        else if (['&C=Title', '&C=SubTitle'].map(c => row[0].includes(c)).includes(true)
            && (rowsWithReferences.includes(reading[reading.indexOf(row) + 1])
                ||
                    reading[reading.indexOf(row) + 1].includes('&C=ReadingIntro')))
            retrieved.push(await referenceTitleRow(row));
        else
            retrieved.push(row);
    }
    return retrieved;
    async function processReadingReference(row) {
        if (!row)
            return [];
        let ref, actor;
        const retrieved = [];
        for (let i = 0; i < row.length; i++) {
            if (!row[i].startsWith(Prefix.readingRef)) {
                retrieved.push(row[i]);
                continue;
            }
            ;
            ref = row[i]
                .replaceAll(' ', '') //We remove all spaces in the reference in order to avoid errors.
                .replaceAll(Prefix.readingRef, '');
            splitted = splitTitle(ref);
            actor = splitted[1] || 'NoActor';
            if (row.length === 1)
                await Promise.all(langs.map(async (lang) => 
                //!We can't use forEach because forEach doesn't await for async functions to resolve. It throughs a promise
                retrieved.push(await retrieveVerses(lang, splitted[0])))); //The row contains only the rference with no other text
            else if (row.length === langs.length + 1)
                retrieved.push(await retrieveVerses(langs[i - 1], splitted[0])); //The row's first element is a title, while the remaining elements correspond to the languages in langs[]
            else
                retrieved.push(await retrieveVerses(langs[i], splitted[0])); //the row contains as many elements as the languages in langs[]
        }
        if (ref.startsWith(Prefix.readingRef + 'PSA:'))
            return [retrieved]; //We do not split the psalm paragraphs into different rows rows
        else
            return matchPargraphsSplitting(retrieved, langs, row.length - langs.length, actor) || [];
    }
    async function retrieveVerses(lang, ref) {
        if (!lang)
            return;
        if (![defaultLanguage, foreingLanguage].includes(lang))
            return '';
        let parts, refs, verses;
        refs = ref.split('/');
        let text = await Promise.all(refs.map(async (ref) => {
            parts = ref.split(':'); //We should get an array of 3 elements [bookID, chapterNumber, verses], eg: ['GEN', '13', '3-7']; 
            if (parts.length === 2 && refs.indexOf(ref) > 0)
                parts.unshift(refs[0].split(':')[0]);
            if (parts.length < 3)
                return '';
            verses = await Promise.all(parts[2]
                .split('/')
                .map(async (versesRange) => await retrieveVersesText(lang, parts[0], parts[1], versesRange) || "Error: Failed to retrieve verses"));
            if (parts[0] === "PSA")
                return verses.join(' '); //We don't split the psalm into paragraphs
            return verses.join('\n');
        }));
        return text.join('\n');
    }
    /**
     * Returns a title row (string[]) built from a reference
     * @param {string[]} row - the  row that contains the reading reference
     * @returns {string[]} - a row that contains the title of the reading built from the reference
     */
    async function referenceTitleRow(row) {
        let titleRow = [Prefix.same + '&C=Title', ...langs.map(lang => '')];
        let ref = row.find(el => el.startsWith(Prefix.readingRef));
        if (!ref)
            return titleRow;
        ref =
            ref.replaceAll(' ', '')
                .replace(Prefix.readingRef, '')
                .split('&C=')[0];
        let bookID = ref.split(':')[0];
        let book, bible;
        await Promise.all(langs.map(async (lang) => {
            //!We can't use forEach because forEach doesn't await for async functions to resolve. Instead it throughs an error
            if (![defaultLanguage, foreingLanguage].includes(lang))
                return;
            bible = await getBibleVersion(lang, false);
            book = bible?.find(book => book[0].id === bookID);
            if (!book)
                return;
            ref = ref.replace('End', book[1]
                .find(chapter => book[1].indexOf(chapter) === Number(ref.split(':')[1]) - 1)
                ?.filter(verse => verse?.length === 2)
                .length.toString());
            titleRow[langs.indexOf(lang) + 1] =
                book[0].human
                    + ' ('
                    + splitRef(ref).join(' & ')
                    + ')';
            function splitRef(ref) {
                return ref
                    .replaceAll(bookID + ':', '')
                    .split('/')
                    .map(part => part.replace(':', ': '));
            }
        }));
        return titleRow;
    }
    /**
     * Retrieves the text of the specified verses of the specified chapter of the specified book of the specified Bible version
     * @param {string} lang - the language of the bible from which we want to retrieve the text of the specified verses
     * @param {string} bookID - the ID of the Bible book
     * @param {string} chapterNumber - the number of the chapter
     * @param {string} verses - the verses to be retrieved. It provides a range of verses separated by '-' (eg.: "13-20")
     * @returns {string} the text of the verses whit
     */
    async function retrieveVersesText(lang, bookID, chapterNumber, verses) {
        if (bookID === 'PSA' && Number(chapterNumber))
            chapterNumber = (Number(chapterNumber) + 1).toString();
        let exists = Array.from(ready).find(array => array[0] === bookID + ":" + chapterNumber + ":" + lang);
        if (exists)
            return getVersesRange(exists[1], verses.split('-'));
        if (!lang) {
            alert('The language is not valid. Error from retrieveVersesText()');
            return new Error("The language is not valid. Error from retrieveVersesText()");
        }
        ;
        if (lang === 'CA')
            lang = 'AR';
        if (![defaultLanguage, foreingLanguage].includes(lang))
            return ''; //We return an empty string if the language is not either the defaultLanguage or the foreignLanguage because in all cases those are the only languages that the user will be able to see. No need to retrieve a language that will not be retrieved
        if (!chapterNumber || !verses) {
            //alert('either chapter number or verses arre not valid. Error from retrieveVersesText()');
            console.log('chapterNumber = ', chapterNumber, "verses = ", verses);
            return new Error("Failed to retrieve verse");
        }
        ;
        if (!bookID || bookID.length > 3) {
            //alert('either bookID is not valid or bookID length>3. Error from retrieveVersesText()');
            console.log('bookID = ', bookID);
            return new Error("Failed to retrieve verse");
        }
        ; //books ids are 3 letters length
        let Bible = await getBibleVersion(lang, false);
        if (!Bible) {
            //alert('The ' + { FR: "French", AR: 'Arabic', EN: 'English' }[lang] + ' has not been loaded yet');
            return new Error("Failed to retrieve verse");
        }
        ;
        let chapterVerses = getBibleChapter(chapterNumber, undefined, Bible, bookID);
        if (!chapterVerses) {
            //alert('No verses could be retrieved. Error from retrieveVersesText()');
            console.log('chapterVerses = ', chapterVerses);
            return new Error("Failed to retrieve verse");
        }
        ;
        ready.add([bookID + ":" + chapterNumber + ":" + lang, chapterVerses]);
        return getVersesRange(chapterVerses, verses.split('-'));
        function getVersesRange(chapter, range) {
            if (range.length !== 2) {
                //alert('verses.length !==2. Error from getVersesRange()');
                console.log('bookID = ', bookID);
                return new Error("Failed to retrieve verse");
            }
            ;
            while (chapter[chapter.length - 1].length < 2)
                chapter.pop(); //!This action must be performed before processing the verses references. We remove the last element of the chapter if it is not a verese.
            if (range[1].toUpperCase() === 'END')
                range[1] = chapter[chapter.length - 1][0];
            if (!Number(range[0]) || !Number(range[1]))
                return new Error("range[0] or range[1] is not a number");
            ;
            let first = chapter.find(verse => verse && verse[0] === range[0]);
            if (!first)
                return new Error("could not retrieve 'first'");
            let last = chapter.find(verse => verse && verse[0] === range[1]);
            if (!last)
                return new Error("could not retrieve 'last'");
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
function matchPargraphsSplitting(retrieved, langs, add, actor) {
    if (add < 0)
        add = 0;
    if (add > 1) {
        alert('Error from matchPargraphsSplitting(): add>1 There is something wrong with the length of the row or of the language: langs.length = ' + langs.length.toString() + ' langs = ' + langs.toString());
        return;
    }
    let paragraphs = retrieved[langs.indexOf(defaultLanguage) + add]?.split('\n');
    if (!paragraphs)
        return;
    let exp = RegExp('Sup_' + '\\d\*' + '_Sup', 'g');
    let ranges = paragraphs
        .map(parag => Array.from(parag.matchAll(exp))
        .map(match => match[0]));
    ranges = ranges
        .map(range => [range[0], range[range.length - 1]]) //Those are the first and last verses numbers in each paragraph of the default language
        .filter(versesRange => versesRange[0] && versesRange[1]); //!We must remove any undefined elements;
    langs
        .forEach(lang => {
        if (lang === defaultLanguage)
            return;
        let text = retrieved[langs.indexOf(lang) + add].replaceAll('\n', ' '); //!We must remove all the '\n' characters from the string
        if (!text)
            return;
        if (!exp.test(text))
            return; //If the text is not divided into verses (i.e. includes('Sup))
        retrieved[langs.indexOf(lang) + add] =
            ranges
                .map(versesRange => splitTextIntoParagraphs(versesRange))
                .join('\n');
        function splitTextIntoParagraphs(versesRange) {
            //versesRange contains 2 elements. Each element is like "Sup_2_Sup". The 1st element is the number of the first verse in the paragraph. The 2nd element is the number of the last verse
            if (!versesRange[0] || !versesRange[1])
                return '';
            let toVerse = versesRange[1]; //!We need a new variable otherwise we will modify versesRange[1] in its original array
            if (ranges.indexOf(versesRange) < ranges.length - 1)
                toVerse = ranges[ranges.indexOf(versesRange) + 1][0]; //If we have not reached the last element of ranges, we will set versesRange[1] = element 0 of the next element of ranges in order to retrive the text until the end of the last verse number
            else
                toVerse = '';
            let exp = RegExp(versesRange[0] + '\.\*' + toVerse);
            let match = text.match(exp);
            if (!match)
                return '';
            if (toVerse.startsWith('Sup_'))
                return match[0].replace(toVerse, '');
            else
                return match[0];
        }
    });
    return splitParagraphsIntoRows();
    function splitParagraphsIntoRows() {
        let table = [], parags;
        for (let i = 0; i < retrieved.length; i++) {
            parags = retrieved[i].split('\n');
            for (let ii = 0; ii < parags.length; ii++) {
                if (!table[ii])
                    table.push([Prefix.same + "&C=" + actor, ...langs.map(lang => '')]);
                table[ii][i + 1] = parags[ii];
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
 * @param {boolean} isMass - indicates whether the 'Psalm' and 'Gospel' readings are retrieved in relation to a mass or incense liturgy (in such case the psalm and gospel responses and the diacon's introductions/ends to the readings will be added), or whether we only need to retrieve the readings' text
 * @param {string} liturgy - the prefix of the liturgie for which we want to retrieve the gospel reading
 * @param {HTMLElement | DocumentFragment} container - the html element to which the html elements (i.e. div) containing the gospel will be appended after being created
 * @param {string[][][]} gospel - The tables containing the 'Psalm' and 'Gospel' references. If not provided, the function will retrieve the tables from the relevant tables array in accordance with today's copticReadingsDate
 * @returns
 */
async function insertGospelReadingAndResponses(args) {
    if (!args.liturgy)
        return console.log("the button passed as argument does not have prayersArray");
    if (!args.container)
        args.container = containerDiv;
    if (args.container === containerDiv && args.clearContainer)
        args.container.innerHTML = "";
    if (args.container.children.length === 0)
        args.container.appendChild(document.createElement("div"));
    if (!args.languages)
        args.languages = getLanguages(args.liturgy);
    (function InsertPopeAndBishopPsalm() {
        if (!args.isMass)
            return;
        //!This must come before the readings and responses are inserted
        let tbl = findTable(Prefix.commonPrayer + "MaroEtshasf" + anyDay, CommonArray) || undefined;
        if (!tbl)
            return console.log('Didn\'t find a relevant table');
        addExpandablePrayer({
            prayers: [tbl],
            insertion: getAnchor("Gospel")?.previousElementSibling,
            btnID: 'PopePsalm',
            languages: prayersLanguages,
            label: {
                AR: 'في حضور البطرك أو أحد الأساقفة',
                FR: 'En présence du Pape ou d\'un évêque',
            },
        });
    })();
    await insertPsalmAndGospelReadings();
    (function insertPsalmAndGospelResponses() {
        if (!args.isMass || args.gospel)
            return; //If we are not calling the function with a Mass or a liturgy (Unbpaptized Mass, or Incense Dawn/Vespers) context, we will not insert the Gospel and Psalm responses
        insertResponse(3, getAnchor('Gospel')?.nextElementSibling, 'beforebegin'); //Inserting Gospel Response
        insertResponse(0, getAnchor('PsalmResponse'), 'beforebegin'); //Inserting Psalm Response if any
        function insertResponse(index, el, position) {
            let prayersSequence = setGospelPrayersSequence(args.liturgy, args.isMass); //this gives us an array like ['PR_&D=####', 'RGID_Psalm&D=', 'RGID_Gospel&D=', 'GR_&D=####']
            //We will retrieve the tables containing the text of the gospel and the psalm from the GospeldawnArray directly (instead of call findAndProcessPrayers())
            let response = PsalmAndGospelArray.find((tbl) => splitTitle(tbl[0][0])[0] === prayersSequence[index]); //!Caution: this must be an '===' search operator not startWith() because otherwise, 'NativitayParamoun' will be selected for the 'Nativity' Season, and 'Baptism Paramoun' might be selected for the 'Baptism' Season if their tables in PrayersArray are before those of the relevant table
            if (!response || response.length === 0)
                return;
            insertPrayersAdjacentToExistingElement({
                tables: [response],
                languages: prayersLanguages,
                position: {
                    el: el,
                    beforeOrAfter: position
                },
                container: args.container,
            });
        }
    })();
    /**
   * Appends the gospel and psalm readings before gospelInsertionPoint(which is an html element)
   */
    async function insertPsalmAndGospelReadings() {
        let gospel = args.gospel || findGospelTables();
        if (!gospel || gospel.length < 2)
            return new Error("Error: gospel.length < 2"); //if no readings are returned from the filtering process, then we end the function
        await Promise.all(gospel
            .map(async (table) => {
            //!We can't use forEach because forEach dosen't await for promises to resolve
            //gospel[] should include 2 tables: the first table is the psalm and its title is like '....Psalm&D=...'. The 2nd is the gospel: its title is like '....Gospel&D=...'.
            if (!args.isMass && table[0][0]?.includes('Psalm&D='))
                return;
            insertPrayersAdjacentToExistingElement({
                tables: await retrieveFromBible(table),
                languages: args.languages,
                position: {
                    beforeOrAfter: "beforebegin",
                    el: getAnchor(table[0][0].split(args.liturgy)[1].split('&D=')[0]),
                },
                container: args.container,
            });
            async function retrieveFromBible(tbl) {
                //! We didn't push the array to the table directly because otherwise it will add a new row to the original table each time we click on the Unbaptised Mass button or the Gospel Reading button
                //We will include the gospel end: 'Glory To God Forever' and the Psalm End 'Hallelujah'
                if (!args.isMass)
                    return [await retrieveReadingTableFromBible(tbl, args.languages)];
                else if (tbl[0][0]?.includes('Gospel&D='))
                    return [[...await retrieveReadingTableFromBible(tbl, args.languages), getReadingEnd(ReadingsIntrosAndEnds.gospelEnd)]]; //We return a copy of the table not the original table in order to avoid modifying the original table.
                else if (tbl[0][0]?.includes('Psalm&D='))
                    return [[...await retrieveReadingTableFromBible(tbl, args.languages), getReadingEnd(ReadingsIntrosAndEnds.psalmEnd)]]; //We return a copy of the table not the original table in order to avoid modifying the original table.
                function getReadingEnd(end) {
                    //We will return an array (i.e., a new row in the table) containing the text of the "Gospel End" (Glory to God Forever) in each language. This array needs to be constructed like this: ['Row title', 'End text in Arabic, 'End text in French or whatever other western language', 'End text in English']
                    return [
                        //The first element of the array contains the title of the row
                        Prefix.same + '&C=ReadingEnd', //!Notice that we are giving it as class 'ReadingEnd'
                        //The following elements represent the text of the 'Gospel End' in each language, in the same order as the languages passed in args.languages.
                        ...args.languages
                            .map(lang => end[lang])
                    ];
                }
                ;
            }
            ;
        }));
        function findGospelTables() {
            let prayersArray = PrayersArraysKeys.find(array => array[0] === args.liturgy)[2]();
            if (!prayersArray)
                return [];
            return prayersArray
                .filter((table) => isMultiDatedTitleMatching(splitTitle(table[0][0])[0], [copticReadingsDate]));
        }
        ;
    }
    ;
    function getAnchor(root) {
        if (!args.isMass) {
            //If we are not displaying the gospel in a Mass or a liturgy context, we don't need to insert the psalm. We will just show the text of the gospel reading itself. Hence, the div element will be same as args.gospelInsertionPoint
            containerDiv.appendChild(document.createElement('div'));
            return containerDiv.children[0];
        }
        else
            return selectElementsByDataSetValue(args.container, Prefix.anchor + root, undefined, 'root')[0];
    }
    ;
    /**
   * takes a liturgie name like "IncenseDawn" or "IncenseVespers" and replaces the word "Mass" in the buttons gospel readings prayers array by the name of the liturgie. It also sets the psalm and the gospel responses according to some sepcific occasions (e.g.: if we are the 29th day of a coptic month, etc.)
   * @param liturgie {string} - expressing the name of the liturigie that will replace the word "Mass" in the original gospel readings prayers array
   * @returns {string} - returns an array representing the sequence of the gospel reading prayers, i.e., an array like ['Psalm Response', 'Psalm', 'Gospel', 'Gospel Response']
   */
    function setGospelPrayersSequence(liturgy, isMass) {
        //this function sets the date or the season for the Psalm response and the gospel response
        const prayersSequence = [
            Prefix.psalmResponse + "" + anyDay, //This is its default value
            liturgy + "Psalm&D=",
            liturgy + "Gospel&D=",
            Prefix.gospelResponse + "" + anyDay, //This is its default value
        ]; //This is the generic sequence for the prayers related to the lecture of the gospel at any liturgy (mass, incense office, etc.). The OnClick function triggered by the liturgy, adds the dates of the readings and of the psalm and gospel responses
        if (!isMass)
            return prayersSequence; //If we are not calling the function within a mass/incense liturgy, we will not need to set the Psalm and Gospel Responses, we will return the prayersSequence array
        //setting the psalm and gospel responses
        (function setPsalmAndGospelResponses() {
            if (Number(copticDay) === 29 && [4, 5, 6].includes(Number(copticMonth)))
                return; //we are on the 29th of any coptic month except Kiahk (because the 29th of kiahk is the nativity feast), and Touba and Amshir (they are excluded because they precede the annonciation)
            let PsalmAndGospelResponses = PsalmAndGospelArray.filter((table) => isMultiDatedTitleMatching(table[0][0], [copticDate, Season]));
            let psalmResponse = PsalmAndGospelResponses.filter((table) => table[0][0]?.startsWith(Prefix.psalmResponse));
            let gospelResponse = PsalmAndGospelResponses.filter((table) => table[0][0]?.startsWith(Prefix.gospelResponse));
            if (Season === Seasons.GreatLent) {
                [0, 6].includes(weekDay)
                    ? (gospelResponse = [
                        gospelResponse.find((table) => table[0][0]?.includes("Sundays&D=")),
                    ])
                    : (gospelResponse = gospelResponse =
                        [gospelResponse.find((table) => table[0][0]?.includes("Week&D="))]);
            }
            else if ([Seasons.JonahFast, Seasons.JonahFeast, Seasons.StMaryFast].includes(Season)
                ||
                    [copticFeasts.EndOfGreatLentFriday, copticFeasts.LazarusSaturday,
                    ].includes(copticReadingsDate)
                ||
                    copticDate === copticFeasts.CanaWedding) {
                //For these occasions, there are different gospel responses for the Dawn Incense Office, and the Unbaptised Mass. We will filter the results
                let prefix = "";
                if (liturgy === Prefix.gospelMorning)
                    prefix = 'Dawn';
                if (liturgy === Prefix.gospelMass)
                    prefix = 'Mass';
                if (Season === Seasons.JonahFast)
                    prefix += copticReadingsDate?.split(Season)[1]; //There are different responses for the Dawn Gospel and the Mass Gospel for each day of the Jonah Fast. We will  add the number of the day of Jonah Fast: eg.: "Mass1&D=Jonah1&C=Title" (for 1st day of the Jonah Fast), Dawn2&D=Jonah2&C=Title", etc.
                (function ifGospelVespers() {
                    //If the liturgy is Vespers incesnse, in some occasions there are specific gospel response for the Vespers
                    if (liturgy !== Prefix.gospelVespers)
                        return;
                    if (Season === Seasons.StMaryFast
                        ||
                            [copticFeasts.EndOfGreatLentFriday,
                                copticFeasts.LazarusSaturday,
                            ].includes(copticReadingsDate))
                        prefix = 'Vespers';
                })();
                gospelResponse = [
                    gospelResponse.find((table) => table[0][0]?.includes(prefix + "&D=")),
                ];
            }
            if (psalmResponse?.length > 0 && psalmResponse[0]?.length > 0)
                prayersSequence[0] = splitTitle(psalmResponse[0][0][0])[0];
            if (gospelResponse?.length > 0 && gospelResponse[0]?.length > 0)
                prayersSequence[3] = splitTitle(gospelResponse[0][0][0])[0];
        })();
        return prayersSequence;
    }
    /**
     * Returns the Coptic Date of for the next day. It is mainly needed for the Vespers Gospel
     */
    function getTomorowCopticReadingDate() {
        let today = new Date(todayDate.getTime() + calendarDay); //We create a date corresponding to the  the next day. This is because in the PowerPoint presentations from which the gospel text was retrieved, the Vespers gospel of each day is linked to the day itself not to the day before it: i.e., if we are a Monday and want the gospel that will be read in the Vespers incense office, we should look for the Vespers gospel of the next day (Tuesday).
        return getSeasonAndCopticReadingsDate(convertGregorianDateToCopticDate(today, false)[1], today);
    }
}
/**
 * Filters the array containing the gospel text for each liturgie (e.g., Incense Dawn, Vepspers, etc.) and returns the text of the gospel and the psaume. The fil
 * @param {Button} btn - the button of the liturgie within which we want to show the gospel text and the psaume text
 * @param {string[][][]} readingsArray - the array containing the text of the gospel and the psaume. Each element of this array repersents a table in the Word document from which the text was retrieved, and each element of each table[], represents a row of this table
 * @returns {string[][][]} - the result of the filtering operation. This normally returns an array of 2 tables: the first table represents the table of the psaume text, and the 2nd table represents the table of the gospel text
 */
function getBtnGospelPrayersArray(btn, readingsArray) {
    let gospel = readingsArray?.filter((r) => {
        splitTitle(r[0][0][0])[0] === btn?.prayersSequence[1] ||
            splitTitle(r[0][0][0])[0] === btn?.prayersSequence[2];
    });
    return gospel;
}
/**
 * Takes a table title with muliple date values separated by '||', and checks if any of these dates include the date passed to it as coptDate
 * @param {string} tableTitle - a title of a table including multiple dates separated by '||'
 * @param {string} coptDate - the date that we want to check if it is included in the title. If omitted, it is given the value of the current copticDate
 * @returns {boolean} - return true if the date was found, and false otherwise
 */
function isMultiDatedTitleMatching(tableTitle, coptDate = [copticDate]) {
    if (!tableTitle?.includes("&D="))
        return false; //This means that the title does not specify any date for the prayer.
    tableTitle = splitTitle(tableTitle)[0].split("&D=")[1];
    return tableTitle
        .split("||")
        .map((date) => coptDate?.map(copt => dateIsRelevant(date, copt))?.includes(true))
        .includes(true);
}
/**
 * Checks if the date argument matches the copticDate or the Season
 * @param {string} date - the date string that we want to check if it matches the copticDate or the Season
 * @param {string} coptDate  - the copticDate (or the Season) with which we want the compare the date
 * @returns  {boolean}
 */
function dateIsRelevant(date, coptDate = copticDate) {
    if (date?.startsWith("$"))
        date = eval(date.replace("$", ""));
    else if (/\d{2}0{2}/.test(date))
        date = date?.replace('00', copticMonth);
    if (!date)
        return console.log("date is not valid: ", date);
    if (date === Seasons.Kiahk)
        return [
            Seasons.KiahkWeek1,
            Seasons.KiahkWeek2,
            Seasons.KiahkWeek3,
            Seasons.KiahkWeek4,
        ].includes(Season);
    return date === coptDate;
}
/**
 * Adds a button that when clicked shows or hides certain prayers from containerDiv
 * @param {HTMLElement} insertion - the html element before which the button will be inserted
 * @param {string} btnID - the id of the html element button that will be created
 * @param {typeBtnLabel} label - the label of the button that will be created
 * @param {string[][][]} prayers - the prayers that will shown or hidden or shown
 * @returns {HTMLDivElement} - the created div element that contains the prayers, and will be hidden or shown when the button is clicked
 */
function addExpandablePrayer(args) {
    if (!args.prayers)
        return console.log('No prayes table nor prayers sequence were provided');
    if (!args.insertion)
        return console.log("btnID = ", args.btnID);
    let btnExpand, htmlButton, expandableContainer;
    btnExpand = new Button({
        btnID: args.btnID,
        label: args.label,
        cssClass: inlineBtnClass,
        languages: args.languages,
        onClick: btnOnClick,
    });
    return createHtmlBtnAndExpandableDiv();
    function createHtmlBtnAndExpandableDiv() {
        htmlButton = createHtmlButon();
        expandableContainer = createExpandableContainer();
        function createHtmlButon() {
            let btnDiv = createDivForTheHtmlButon();
            let btn = createHtmlBtn({
                btn: btnExpand,
                btnsContainer: btnDiv,
                btnClass: btnExpand.cssClass,
                clear: true,
                onClick: btnExpand.onClick,
            }); //creating the html element representing the button. Notice that we give it as 'click' event, the btn.onClick property, otherwise, the createBtn will set it to the default call back function which is showChildBtnsOrPrayers(btn, clear)
            btn.classList.add("expand"); //We need this class in order to retrieve the btn in Display Presentation Mode
            return btn;
            function createDivForTheHtmlButon() {
                let div = document.createElement("div"); //Creating a div container in which the btn will be displayed
                div.classList.add(inlineBtnsContainerClass);
                if (args.dataGroup)
                    div.dataset.group = args.dataGroup;
                args.insertion.insertAdjacentElement("beforebegin", div); //Inserting the div containing the button as 1st element of containerDiv
                return div;
            }
            ;
        }
        ;
        function createExpandableContainer() {
            //We will create a newDiv to which we will append all the elements in order to avoid the reflow as much as possible
            let expandable = document.createElement("div");
            expandable.id = btnExpand.btnID + "Expandable";
            expandable.classList.add(hidden);
            expandable.classList.add("Expandable");
            expandable.style.display = "grid"; //This is important, otherwise the divs that will be add will not be aligned with the rest of the divs
            args.insertion.insertAdjacentElement("beforebegin", expandable);
            return expandable;
        }
        ;
        return [htmlButton, expandableContainer];
    }
    async function btnOnClick() {
        if (!expandableContainer)
            return console.log("no collapsable div was found");
        (function showPrayersInExpandableDiv() {
            if (expandableContainer.children.length > 0)
                return;
            let array;
            let langs = args.languages;
            args.prayers
                .map(table => {
                if (!args.languages)
                    langs = getLanguages(table[0][0]);
                return showPrayers({
                    table: table,
                    languages: langs,
                    position: expandableContainer,
                    container: expandableContainer,
                    clearContainerDiv: false,
                    clearRightSideBar: false
                });
            })
                .forEach((htmlTable) => setCSS(htmlTable));
            array = null;
            langs = null;
        })();
        expandableContainer.classList.toggle(hidden);
    }
}
/**
 *If we want that each of the "Expandable" buttons hides the prayers of the other Expandable buttons when clicked
 @param {HTMLDivElement[]} btns - the expandable buttons that we want that each of them when clicked, hides the other buttons prayers
 @param {HTMLDivElement} container - the container where the Expandable button's prayers are displayed
 */
function toggleOtherExpandables(btns, toggleTitles = false, appendTitles = false, container = containerDiv) {
    if (btns.length < 2)
        return;
    btns.forEach(btn => btn.addEventListener('click', () => onClick(btn)));
    function onClick(btn) {
        btns.forEach(b => {
            if (b === btn)
                return;
            let expandable = container.querySelector('#' + b.id + 'Expandable');
            if (!expandable)
                return;
            if (!expandable.classList.contains(hidden))
                expandable.classList.add(hidden);
            if (!toggleTitles)
                return;
            if (expandable.classList.contains(hidden))
                Array.from(sideBarTitlesContainer.children)
                    .filter((div) => div?.dataset?.group === expandable?.id)
                    .forEach(div => div.remove());
            else
                showTitlesInRightSideBar(Array.from(expandable.children).filter((div) => isTitlesContainer(div)).reverse(), sideBarTitlesContainer, false, expandable.id, appendTitles)
                    .then(titles => titles.forEach(title => title.classList.remove(hidden)));
        });
    }
}
;
/**
 * Returns the text of the specified chapter of the specified book of the specified version of the Bible
 * @param {[string, stirng[][]][][]} bible - the array containing all the books and chapters of the Bible in a given language
 * @param {string} bookID - the initials of a given book of bibleVersion
 * @param {string} chapterNumber - the number of the chapter of the book specified in bookID
 */
function getBibleChapterText(args) {
    if (!args.chapterNumber)
        return '';
    if (args.book)
        return joinVerses(getBibleChapter(args.chapterNumber, args.book));
    else if (args.bible && args.bookID)
        return joinVerses(getBibleChapter(args.chapterNumber, undefined, args.bible, args.bookID));
    else
        return '';
    function joinVerses(verses) {
        if (!verses)
            return;
        return verses.map(verse => getVerseText(verse)).join('');
    }
}
/**
 * Returns the text of the verse after combining the verse number (1st element) and the text of the verse, adding 'Sup' before and after the verse number and a non breaking space after it
 * @param {bibleVerse} verse - a string[] of 2 elements: the 1st element is the verse number, and the 2nd is the text of the verse
 */
function getVerseText(verse) {
    if (!verse)
        return;
    if (verse.length < 2 && verse[0] === '\n')
        return verse[0]; //We return the new paragraph mark
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
function getBibleVerse(bible, bookID, chapterNumber, verseNumber) {
    return getBibleChapter(chapterNumber, undefined, bible, bookID).find(verse => verse[0] === verseNumber);
}
/**
  * Returns an array of [string, string[][]] where the string[][] element represents all the verses of the specified chapter of the specified book of the specified version of the Bible. Each verse is a string[] where the 1st element is the verse number, and the 2nd element is the verse text
  * @param {[string, stirng[][]][][]} bible - the array containing all the books and chapters of the Bible in a given language
  * @param {string} bookID - the initials of a given book of bibleVersion
  * @param {string} chapterNumber - the number of the chapter of the book specified in bookID
  */
function getBibleChapter(chapterNumber, book, bible, bookID) {
    if (!chapterNumber)
        return;
    if (!book)
        book = getBibleBook(bible, bookID);
    if (!book)
        return;
    let index = book[0].chaptersList.indexOf(chapterNumber);
    if (book[0].chaptersList.length > book[1].length && !Number(book[0].chaptersList[0])) //It means that the first element of the list is the introduction while the chapters do not include the introduction.
        index -= 1;
    return book[1][index]; //We only return verses whith a number in order to exclude verses numbered like "1a"
}
/**
   * Returns an array of [string, string[][]][] representing an entire book of the specified bibleVersion
   * @param {[string, stirng[][]][][]} bible - the array containing all the books and chapters of the Bible in a given language
   * @param {string} bookID - the initials of a given book of bibleVersion
   */
function getBibleBook(bible, bookID) {
    if (!bible || !bookID)
        return;
    return bible.find(book => book[0].id.startsWith(bookID));
}
async function getBibleVersion(lang, msg = true) {
    if (!lang)
        return;
    if (Bibles[lang][0])
        return Bibles[lang][0];
    let msg1 = { AR: 'تم تحميل الإنجيل، يمكنم الآن إعادة المحاولة.', FR: 'La Bible est prête mainteant. Vous pouvez réessayer', EN: 'The Bible is now available. Please try again' };
    let msg2 = {
        AR: 'جاري تحميل الكتاب المقدس. سوف تستغرق العملية ثواني قليلة. سوف يتم إخطارك حين ينتهي التحميل.',
        FR: 'La Bible est encours de téléchargement. Cela devrait prendre quelques secondes. Vous allez être notifié lorsque la bible sera disponible.',
        EN: 'The Bible has not been loaded yet. It should take few seconds. You will be notified when done'
    };
    if (msg)
        alert(msg2[lang]);
    msg ? reloadScripts(['Bible' + lang], undefined, undefined, msg1[lang]) : reloadScripts(['Bible' + lang]);
    return new Promise((resolve) => {
        setTimeout(() => {
            if (Bibles[lang][0]) {
                resolve(Bibles[lang][0]);
            }
            ;
        }, 500);
    });
}
async function getBibleBooksList(lang) {
    if (!lang)
        return;
    if (Bibles[lang][1])
        return Bibles[lang][1];
    let bible = await getBibleVersion(lang, false);
    Bibles[lang][1] = bible?.map((book) => book[0]);
    return Bibles[lang][1];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVjbGFyZUJ1dHRvbnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9tb2R1bGVzL0RlY2xhcmVCdXR0b25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sU0FBUyxHQUFHO0lBQ2hCLE9BQU8sRUFBRTtRQUNQLHFOQUFxTjtRQUNyTixNQUFNLENBQUMsYUFBYSxHQUFHLGNBQWM7UUFDckMsTUFBTSxDQUFDLFdBQVcsR0FBRyxTQUFTO1FBQzlCLE1BQU0sQ0FBQyxhQUFhLEdBQUcsc0JBQXNCO1FBQzdDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsWUFBWTtRQUNqQyxNQUFNLENBQUMsV0FBVyxHQUFHLGlCQUFpQjtRQUN0QyxNQUFNLENBQUMsV0FBVyxHQUFHLGlCQUFpQjtRQUN0QyxNQUFNLENBQUMsY0FBYyxHQUFHLGdCQUFnQjtRQUN4QyxNQUFNLENBQUMsWUFBWSxHQUFHLGNBQWMsR0FBRyxNQUFNO1FBQzdDLE1BQU0sQ0FBQyxjQUFjLEdBQUcscUJBQXFCO1FBQzdDLE1BQU0sQ0FBQyxhQUFhLEdBQUcsWUFBWTtRQUNuQyxNQUFNLENBQUMsYUFBYSxHQUFHLGNBQWM7UUFDckMsTUFBTSxDQUFDLGFBQWEsR0FBRyxZQUFZO0tBQ3BDO0lBQ0QsSUFBSSxFQUFFO1FBQ0oscUdBQXFHO1FBQ3JHLFVBQVUsRUFBRTtZQUNWLE1BQU0sQ0FBQyxVQUFVLEdBQUcsZUFBZTtZQUNuQyxNQUFNLENBQUMsVUFBVSxHQUFHLGlCQUFpQjtZQUNyQyxNQUFNLENBQUMsVUFBVSxHQUFHLHFCQUFxQjtZQUN6QyxNQUFNLENBQUMsVUFBVSxHQUFHLHNCQUFzQjtZQUMxQyxNQUFNLENBQUMsWUFBWSxHQUFHLGNBQWM7WUFDcEMsTUFBTSxDQUFDLFVBQVUsR0FBRyx3QkFBd0IsR0FBRyxNQUFNO1lBQ3JELE1BQU0sQ0FBQyxVQUFVLEdBQUcsV0FBVztZQUMvQixNQUFNLENBQUMsVUFBVSxHQUFHLFVBQVU7WUFDOUIsTUFBTSxDQUFDLFVBQVUsR0FBRyxtQkFBbUIsR0FBRyxNQUFNO1lBQ2hELE1BQU0sQ0FBQyxZQUFZLEdBQUcsT0FBTztTQUM5QixFQUFFLGdEQUFnRDtRQUNuRCxPQUFPLEVBQUU7WUFDUCxNQUFNLENBQUMsVUFBVSxHQUFHLHVCQUF1QjtZQUMzQyxNQUFNLENBQUMsV0FBVyxHQUFHLGdCQUFnQjtZQUNyQyxNQUFNLENBQUMsVUFBVSxHQUFHLHFCQUFxQjtZQUN6QyxNQUFNLENBQUMsV0FBVyxHQUFHLFVBQVU7WUFDL0IsTUFBTSxDQUFDLFdBQVcsR0FBRyxPQUFPO1lBQzVCLE1BQU0sQ0FBQyxXQUFXLEdBQUcsc0JBQXNCLEdBQUcsTUFBTTtZQUNwRCxNQUFNLENBQUMsVUFBVSxHQUFHLHdDQUF3QyxHQUFHLE1BQU07U0FDdEUsRUFBRSx5RUFBeUU7UUFDNUUsU0FBUyxFQUFFO1lBQ1QsTUFBTSxDQUFDLFVBQVUsR0FBRyx1QkFBdUI7WUFDM0MsTUFBTSxDQUFDLGFBQWEsR0FBRyxnQkFBZ0I7WUFDdkMsTUFBTSxDQUFDLFVBQVUsR0FBRyxxQkFBcUI7WUFDekMsTUFBTSxDQUFDLGFBQWEsR0FBRyxVQUFVO1lBQ2pDLE1BQU0sQ0FBQyxhQUFhLEdBQUcsT0FBTztZQUM5QixNQUFNLENBQUMsYUFBYSxHQUFHLHFDQUFxQyxHQUFHLE1BQU07WUFDckUsTUFBTSxDQUFDLGFBQWEsR0FBRywwQkFBMEI7WUFDakQsTUFBTSxDQUFDLGFBQWEsR0FBRyxzQkFBc0I7WUFDN0MsTUFBTSxDQUFDLGFBQWEsR0FBRyxVQUFVLEdBQUcsTUFBTTtZQUMxQyxNQUFNLENBQUMsYUFBYSxHQUFHLHNCQUFzQjtTQUM5QyxFQUFFLDJFQUEyRTtRQUM5RSxPQUFPLEVBQUU7WUFDUCxNQUFNLENBQUMsVUFBVSxHQUFHLHVCQUF1QjtZQUMzQyxNQUFNLENBQUMsV0FBVyxHQUFHLGdCQUFnQjtZQUNyQyxNQUFNLENBQUMsVUFBVSxHQUFHLHFCQUFxQjtZQUN6QyxNQUFNLENBQUMsV0FBVyxHQUFHLFVBQVU7WUFDL0IsTUFBTSxDQUFDLFdBQVcsR0FBRyxPQUFPO1lBQzVCLE1BQU0sQ0FBQyxXQUFXLEdBQUcsT0FBTyxHQUFHLE1BQU07WUFDckMsTUFBTSxDQUFDLFdBQVcsR0FBRyxPQUFPLEdBQUcsTUFBTTtZQUNyQyxNQUFNLENBQUMsV0FBVyxHQUFHLFFBQVEsR0FBRyxNQUFNO1lBQ3RDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsc0JBQXNCO1NBQzVDLEVBQUUsMEVBQTBFO1FBQzdFLE1BQU0sRUFBRSxFQUFFLEVBQUUsd0VBQXdFO1FBQ3BGLGdCQUFnQixFQUFFO1lBQ2hCLE1BQU0sQ0FBQyxVQUFVLEdBQUcsMEJBQTBCO1NBQy9DO1FBQ0QsUUFBUSxFQUFFO1lBQ1IsTUFBTSxDQUFDLFVBQVUsR0FBRyxzQkFBc0I7WUFDMUMsTUFBTSxDQUFDLFVBQVUsR0FBRyxxQkFBcUI7WUFDekMsTUFBTSxDQUFDLFVBQVUsR0FBRyw0QkFBNEI7WUFDaEQsTUFBTSxDQUFDLFVBQVUsR0FBRyxzQkFBc0I7WUFDMUMsTUFBTSxDQUFDLFlBQVksR0FBRyxtQkFBbUI7WUFDekMsTUFBTSxDQUFDLFlBQVksR0FBRyx5QkFBeUI7WUFDL0MsTUFBTSxDQUFDLFVBQVUsR0FBRyxvQkFBb0IsR0FBRyxNQUFNO1lBQ2pELE1BQU0sQ0FBQyxZQUFZLEdBQUcsaUJBQWlCO1lBQ3ZDLE1BQU0sQ0FBQyxVQUFVLEdBQUcsOEJBQThCO1lBQ2xELE1BQU0sQ0FBQyxVQUFVLEdBQUcsd0JBQXdCO1lBQzVDLE1BQU0sQ0FBQyxVQUFVLEdBQUcsWUFBWTtZQUNoQyxNQUFNLENBQUMsWUFBWSxHQUFHLGNBQWM7U0FDckMsRUFBRSxxREFBcUQ7UUFDeEQsU0FBUyxFQUFFO1lBQ1QsTUFBTSxDQUFDLFVBQVUsR0FBRyxtQkFBbUI7WUFDdkMsTUFBTSxDQUFDLFVBQVUsR0FBRyxZQUFZO1NBQ2pDLEVBQUUsa0dBQWtHO0tBQ3RHO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsSUFBSSxFQUFFO1lBQ0osTUFBTSxDQUFDLFFBQVEsR0FBRyxtQkFBbUI7WUFFckMsTUFBTSxDQUFDLFFBQVEsR0FBRyxNQUFNO1lBRXhCLE1BQU0sQ0FBQyxRQUFRLEdBQUcsV0FBVztZQUU3QixNQUFNLENBQUMsUUFBUSxHQUFHLGdCQUFnQjtZQUVsQyxNQUFNLENBQUMsUUFBUSxHQUFHLE1BQU07WUFFeEIsTUFBTSxDQUFDLFFBQVEsR0FBRyxXQUFXO1lBRTdCLE1BQU0sQ0FBQyxRQUFRLEdBQUcsTUFBTTtZQUV4QixNQUFNLENBQUMsUUFBUSxHQUFHLFdBQVc7WUFFN0IsTUFBTSxDQUFDLFFBQVEsR0FBRyxPQUFPO1lBRXpCLE1BQU0sQ0FBQyxRQUFRLEdBQUcsZUFBZTtZQUVqQyxNQUFNLENBQUMsUUFBUSxHQUFHLHFCQUFxQjtZQUV2QyxNQUFNLENBQUMsUUFBUSxHQUFHLFlBQVk7WUFDOUIsb0NBQW9DO1lBRXBDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsTUFBTTtZQUV4QixNQUFNLENBQUMsTUFBTSxHQUFHLDJCQUEyQixFQUFFLDBIQUEwSDtZQUV2SyxNQUFNLENBQUMsTUFBTSxHQUFHLHNCQUFzQixFQUFFLDBIQUEwSDtZQUVsSyxNQUFNLENBQUMsTUFBTSxHQUFHLGlCQUFpQixFQUFFLCtFQUErRTtZQUVsSCxNQUFNLENBQUMsUUFBUSxHQUFHLDJCQUEyQjtZQUU3QyxNQUFNLENBQUMsTUFBTSxHQUFHLFVBQVUsRUFBRSwwRUFBMEU7WUFFdEcsTUFBTSxDQUFDLE1BQU0sR0FBRyxnQkFBZ0IsRUFBRSwrRUFBK0U7WUFFakgsTUFBTSxDQUFDLE1BQU0sR0FBRyxnQkFBZ0IsRUFBRSwrRUFBK0U7WUFFakgsTUFBTSxDQUFDLE1BQU0sR0FBRyxnQkFBZ0IsRUFBRSwrRUFBK0U7WUFFakgsTUFBTSxDQUFDLFFBQVEsR0FBRyx5QkFBeUIsRUFBQyx5REFBeUQ7WUFFckcsTUFBTSxDQUFDLFlBQVksR0FBRyxrQkFBa0I7WUFFeEMsTUFBTSxDQUFDLFlBQVksR0FBRyxPQUFPO1lBRTdCLE1BQU0sQ0FBQyxZQUFZLEdBQUcsa0JBQWtCO1lBRXhDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsZ0JBQWdCO1lBRWxDLE1BQU0sQ0FBQyxZQUFZLEdBQUcsa0JBQWtCO1lBRXhDLE1BQU0sQ0FBQyxZQUFZLEdBQUcsbUJBQW1CO1lBRXpDLE1BQU0sQ0FBQyxZQUFZLEdBQUcsT0FBTztTQUU5QjtRQUVELEtBQUssRUFBRTtZQUNMLE1BQU0sQ0FBQyxRQUFRLEdBQUcsbUJBQW1CO1lBRXJDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsVUFBVTtZQUU1QixNQUFNLENBQUMsUUFBUSxHQUFHLGlCQUFpQjtZQUVuQyxNQUFNLENBQUMsUUFBUSxHQUFHLFlBQVk7WUFFOUIsTUFBTSxDQUFDLFFBQVEsR0FBRyxhQUFhO1lBRS9CLE1BQU0sQ0FBQyxRQUFRLEdBQUcsTUFBTTtZQUV4QixNQUFNLENBQUMsUUFBUSxHQUFHLFdBQVc7WUFFN0IsTUFBTSxDQUFDLFFBQVEsR0FBRyxxQkFBcUI7WUFFdkMsTUFBTSxDQUFDLFFBQVEsR0FBRyxnQkFBZ0I7WUFFbEMsTUFBTSxDQUFDLFFBQVEsR0FBRyxhQUFhO1lBRS9CLE1BQU0sQ0FBQyxRQUFRLEdBQUcsTUFBTTtZQUV4QixNQUFNLENBQUMsUUFBUSxHQUFHLFdBQVc7WUFFN0IsTUFBTSxDQUFDLFFBQVEsR0FBRyxNQUFNO1lBRXhCLE1BQU0sQ0FBQyxRQUFRLEdBQUcsV0FBVztZQUU3QixNQUFNLENBQUMsUUFBUSxHQUFHLE9BQU87WUFFekIsTUFBTSxDQUFDLFFBQVEsR0FBRyxlQUFlO1lBRWpDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsb0JBQW9CO1lBRXRDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsb0JBQW9CO1lBRXRDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsTUFBTTtZQUV4QixNQUFNLENBQUMsUUFBUSxHQUFHLDJCQUEyQjtTQUU5QztLQUNGO0lBQ0QsUUFBUSxFQUNSO1FBQ0UsUUFBUSxFQUFFO1lBQ1IsTUFBTSxDQUFDLFFBQVEsR0FBRyxzQ0FBc0M7WUFFeEQsTUFBTSxDQUFDLFFBQVEsR0FBRyxvQ0FBb0M7WUFFdEQsTUFBTSxDQUFDLFFBQVEsR0FBRyxnQ0FBZ0M7WUFFbEQsTUFBTSxDQUFDLFFBQVEsR0FBRyxpQ0FBaUM7U0FFcEQ7UUFDRCxLQUFLLEVBQUU7WUFDTCxNQUFNLENBQUMsYUFBYSxHQUFHLGNBQWM7WUFDckMsTUFBTSxDQUFDLFlBQVksR0FBRywrQkFBK0I7WUFDckQsTUFBTSxDQUFDLFdBQVcsR0FBRyxTQUFTO1lBQzlCLE1BQU0sQ0FBQyxRQUFRLEdBQUcsOENBQThDO1lBQ2hFLE1BQU0sQ0FBQyxRQUFRLEdBQUcsMkNBQTJDO1lBQzdELE1BQU0sQ0FBQyxVQUFVLEdBQUcsYUFBYTtZQUNqQyxNQUFNLENBQUMsTUFBTSxHQUFHLFVBQVU7WUFDMUIsTUFBTSxDQUFDLFlBQVksR0FBRyxvQ0FBb0M7WUFDMUQsTUFBTSxDQUFDLE1BQU0sR0FBRyxjQUFjO1lBQzlCLE1BQU0sQ0FBQyxXQUFXLEdBQUcsWUFBWTtZQUNqQyxNQUFNLENBQUMsV0FBVyxHQUFHLGlCQUFpQjtZQUN0QyxNQUFNLENBQUMsVUFBVSxHQUFHLDRCQUE0QixHQUFHLE1BQU07WUFDekQsTUFBTSxDQUFDLFlBQVksR0FBRyxjQUFjO1lBQ3BDLE1BQU0sQ0FBQyxVQUFVLEdBQUcsNEJBQTRCO1lBQ2hELE1BQU0sQ0FBQyxZQUFZLEdBQUcsY0FBYztZQUNwQyxNQUFNLENBQUMsVUFBVSxHQUFHLGlCQUFpQjtZQUNyQyxNQUFNLENBQUMsY0FBYyxHQUFHLGdCQUFnQjtZQUN4QyxNQUFNLENBQUMsV0FBVyxHQUFHLGlCQUFpQjtZQUN0QyxNQUFNLENBQUMsWUFBWSxHQUFHLG1CQUFtQjtZQUN6QyxNQUFNLENBQUMsUUFBUSxHQUFHLGFBQWE7WUFDL0IsTUFBTSxDQUFDLFlBQVksR0FBRyxZQUFZO1lBQ2xDLE1BQU0sQ0FBQyxZQUFZLEdBQUcsaUJBQWlCO1lBQ3ZDLE1BQU0sQ0FBQyxZQUFZLEdBQUcsY0FBYztZQUNwQyxNQUFNLENBQUMsWUFBWSxHQUFHLFlBQVk7WUFDbEMsTUFBTSxDQUFDLFlBQVksR0FBRyxnQkFBZ0I7WUFDdEMsOEJBQThCO1lBQzlCLE1BQU0sQ0FBQyxZQUFZLEdBQUcsT0FBTztZQUM3QixNQUFNLENBQUMsVUFBVSxHQUFHLG1EQUFtRDtZQUN2RSxNQUFNLENBQUMsVUFBVSxHQUFHLDZCQUE2QjtZQUNqRCxNQUFNLENBQUMsV0FBVztZQUNsQixNQUFNLENBQUMsVUFBVSxHQUFHLGtCQUFrQjtZQUN0QyxNQUFNLENBQUMsUUFBUSxHQUFHLDRDQUE0QztTQUUvRDtRQUNELFlBQVksRUFBRSxFQUFFO1FBQ2hCLG1CQUFtQixFQUFFLEVBQUU7UUFDdkIsWUFBWSxFQUFFLEVBQUU7S0FDakI7SUFDRCxhQUFhLEVBQ1g7UUFDRSxNQUFNLENBQUMsYUFBYSxHQUFHLGNBQWM7UUFDckMsTUFBTSxDQUFDLE1BQU0sR0FBRyxTQUFTO1FBQ3pCLE1BQU0sQ0FBQyxZQUFZLEdBQUcsTUFBTTtRQUM1QixNQUFNLENBQUMsV0FBVyxHQUFHLFNBQVM7UUFDOUIsTUFBTSxDQUFDLE1BQU0sR0FBRyxpQkFBaUIsRUFBQyxVQUFVO1FBQzVDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsWUFBWTtRQUM1QixNQUFNLENBQUMsTUFBTSxHQUFHLGVBQWUsRUFBQyxVQUFVO1FBQzFDLE1BQU0sQ0FBQyxVQUFVLEdBQUcsb0JBQW9CO1FBQ3hDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsYUFBYSxFQUFDLFVBQVU7UUFDeEMsTUFBTSxDQUFDLE1BQU0sR0FBRyxRQUFRO1FBQ3hCLE1BQU0sQ0FBQyxNQUFNLEdBQUcsV0FBVyxFQUFDLFVBQVU7UUFDdEMsTUFBTSxDQUFDLE1BQU0sR0FBRyxPQUFPO1FBQ3ZCLE1BQU0sQ0FBQyxZQUFZLEdBQUcsaUJBQWlCO1FBQ3ZDLE1BQU0sQ0FBQyxZQUFZLEdBQUcsY0FBYztRQUNwQyxNQUFNLENBQUMsY0FBYyxHQUFHLHFCQUFxQjtRQUM3QyxNQUFNLENBQUMsY0FBYyxHQUFHLGtCQUFrQjtRQUMxQyxNQUFNLENBQUMsTUFBTSxHQUFHLFVBQVU7UUFDMUIsTUFBTSxDQUFDLFVBQVUsR0FBRyxrQkFBa0I7UUFDdEMsTUFBTSxDQUFDLE1BQU0sR0FBRyxZQUFZO1FBQzVCLE1BQU0sQ0FBQyxjQUFjLEdBQUcsd0JBQXdCO1FBQ2hELE1BQU0sQ0FBQyxZQUFZLEdBQUcsbUJBQW1CO0tBQzFDO0lBQ0gsTUFBTSxFQUFFO1FBQ04sTUFBTSxDQUFDLFVBQVUsR0FBRyw2QkFBNkI7UUFDakQsTUFBTSxDQUFDLGFBQWEsR0FBRyxjQUFjO1FBQ3JDLE1BQU0sQ0FBQyxZQUFZLEdBQUcsYUFBYSxFQUFFO1FBQ3JDLE1BQU0sQ0FBQyxZQUFZLEdBQUcsTUFBTTtRQUM1QixNQUFNLENBQUMsV0FBVyxHQUFHLFNBQVM7UUFDOUIsTUFBTSxDQUFDLFlBQVksR0FBRyx1QkFBdUI7UUFDN0MsTUFBTSxDQUFDLFlBQVksR0FBRyx3QkFBd0I7UUFDOUMsTUFBTSxDQUFDLFlBQVksR0FBRyxxQkFBcUI7UUFDM0MsTUFBTSxDQUFDLFdBQVcsR0FBRyxVQUFVO1FBQy9CLE1BQU0sQ0FBQyxNQUFNLEdBQUcsWUFBWTtRQUM1QixNQUFNLENBQUMsVUFBVSxHQUFHLG9CQUFvQjtRQUN4QyxNQUFNLENBQUMsVUFBVSxHQUFHLFdBQVc7UUFDL0IsTUFBTSxDQUFDLE1BQU0sR0FBRyxRQUFRO1FBQ3hCLGVBQWU7UUFDZixNQUFNLENBQUMsWUFBWSxHQUFHLE9BQU87UUFDN0IsTUFBTSxDQUFDLFlBQVksR0FBRyxjQUFjO1FBQ3BDLE1BQU0sQ0FBQyxZQUFZLEdBQUcsY0FBYztRQUNwQyxNQUFNLENBQUMsWUFBWSxHQUFHLG1CQUFtQjtRQUN6QyxtREFBbUQ7UUFDbkQsTUFBTSxDQUFDLFdBQVcsR0FBRyxZQUFZO1FBQ2pDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsaUJBQWlCO1FBQ3RDLGdCQUFnQjtRQUNoQixNQUFNLENBQUMsVUFBVSxHQUFHLGlCQUFpQjtRQUNyQyxNQUFNLENBQUMsY0FBYyxHQUFHLGdCQUFnQjtRQUN4QyxNQUFNLENBQUMsV0FBVyxHQUFHLGlCQUFpQjtRQUN0QyxNQUFNLENBQUMsVUFBVSxHQUFHLG1CQUFtQjtRQUN2QyxNQUFNLENBQUMsV0FBVyxHQUFHLGdCQUFnQixFQUFFLGtJQUFrSTtRQUN6SyxNQUFNLENBQUMsYUFBYSxHQUFHLHNCQUFzQjtRQUM3QyxNQUFNLENBQUMsWUFBWSxHQUFHLGNBQWM7UUFDcEMsTUFBTSxDQUFDLFlBQVksR0FBRyxZQUFZO1FBQ2xDLE1BQU0sQ0FBQyxZQUFZLEdBQUcsZ0JBQWdCO1FBQ3RDLHNKQUFzSjtRQUN0SixNQUFNLENBQUMsWUFBWSxHQUFHLE9BQU87UUFDN0IsZ0RBQWdEO1FBQ2hELE1BQU0sQ0FBQyxVQUFVLEdBQUcsNkJBQTZCLEVBQUUsdUJBQXVCO1FBQzFFLE1BQU0sQ0FBQyxVQUFVLEdBQUcsa0JBQWtCO1FBQ3RDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsYUFBYSxFQUFFLGtJQUFrSTtRQUN0SyxNQUFNLENBQUMsYUFBYSxHQUFHLFlBQVk7S0FDcEM7Q0FDRixDQUFDO0FBRUYsTUFBTSxxQkFBcUIsR0FBRztJQUM1QixXQUFXLEVBQUU7UUFDWCxFQUFFLEVBQUUsc0lBQXNJO1FBQzFJLEVBQUUsRUFBRSw4SkFBOEo7UUFDbEssRUFBRSxFQUFFLEVBQUU7S0FDUDtJQUNELFNBQVMsRUFBRTtRQUNULEVBQUUsRUFBRSw0QkFBNEI7UUFDaEMsRUFBRSxFQUFFLHFDQUFxQztRQUN6QyxFQUFFLEVBQUUsc0JBQXNCO0tBQzNCO0lBQ0QsV0FBVyxFQUFFO1FBQ1gsRUFBRSxFQUFFLGtJQUFrSTtRQUN0SSxFQUFFLEVBQUUscUZBQXFGO1FBQ3pGLEVBQUUsRUFBRSxFQUFFO0tBQ1A7SUFDRCxTQUFTLEVBQUU7UUFDVCxFQUFFLEVBQUUsd0VBQXdFO1FBQzVFLEVBQUUsRUFBRSx5RUFBeUU7UUFDN0UsRUFBRSxFQUFFLEVBQUU7S0FDUDtJQUNELGVBQWUsRUFBRTtRQUNmLEVBQUUsRUFBRSx1SEFBdUg7UUFDM0gsRUFBRSxFQUFFLHFJQUFxSTtRQUN6SSxFQUFFLEVBQUUsRUFBRTtLQUNQO0lBQ0QsYUFBYSxFQUFFO1FBQ2IsRUFBRSxFQUFFLHFLQUFxSztRQUN6SyxFQUFFLEVBQUUseUpBQXlKO1FBQzdKLEVBQUUsRUFBRSxFQUFFO0tBQ1A7SUFDRCxVQUFVLEVBQUU7UUFDVixFQUFFLEVBQUUscUdBQXFHO1FBQ3pHLEVBQUUsRUFBRSxpR0FBaUc7UUFDckcsRUFBRSxFQUFFLEVBQUU7S0FDUDtJQUNELFFBQVEsRUFBRTtRQUNSLEVBQUUsRUFBRSxhQUFhO1FBQ2pCLEVBQUUsRUFBRSxVQUFVO1FBQ2QsRUFBRSxFQUFFLFlBQVk7S0FDakI7SUFDRCxXQUFXLEVBQUU7UUFDWCxFQUFFLEVBQUUseU1BQXlNO1FBQzdNLEVBQUUsRUFBRSxpR0FBaUc7UUFDckcsR0FBRyxFQUFFLDJIQUEySDtRQUNoSSxFQUFFLEVBQUUsRUFBRTtLQUNQO0lBQ0QsU0FBUyxFQUFFO1FBQ1QsRUFBRSxFQUFFLHdIQUF3SDtRQUM1SCxFQUFFLEVBQUUsOEZBQThGO1FBQ2xHLEdBQUcsRUFBRSxvSEFBb0g7UUFDekgsRUFBRSxFQUFFLEVBQUU7S0FDUDtJQUNELGVBQWUsRUFBRTtRQUNmLEVBQUUsRUFBRSx5S0FBeUs7UUFDN0ssRUFBRSxFQUFFLG1DQUFtQztRQUN2QyxFQUFFLEVBQUUsOENBQThDO0tBQ25EO0lBQ0QsZUFBZSxFQUFFO1FBQ2YsRUFBRSxFQUFFLEVBQUU7UUFDTixFQUFFLEVBQUUsRUFBRTtRQUNOLEVBQUUsRUFBRSxFQUFFO1FBQ04sR0FBRyxFQUFFLEVBQUU7S0FDUjtJQUNELGFBQWEsRUFBRTtRQUNiLEVBQUUsRUFBRSx3REFBd0Q7UUFDNUQsRUFBRSxFQUFFLGlGQUFpRjtRQUNyRixFQUFFLEVBQUUsRUFBRTtRQUNOLEdBQUcsRUFBRSxFQUFFO0tBQ1I7Q0FDRixDQUFDO0FBRUYsTUFBTSxXQUFXLEdBWWI7SUFDRixxSUFBcUk7SUFFckksU0FBUyxFQUFFO1FBQ1QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7UUFDdkU7WUFDRSxFQUFFLEVBQUUsU0FBUztZQUNiLEVBQUUsRUFBRSxPQUFPO1lBQ1gsRUFBRSxFQUFFLFNBQVM7U0FDZDtLQUNGO0lBQ0QsU0FBUyxFQUFFO1FBQ1QsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztRQUNoRDtZQUNFLEVBQUUsRUFBRSx1QkFBdUI7WUFDM0IsRUFBRSxFQUFFLFlBQVk7WUFDaEIsRUFBRSxFQUFFLFlBQVk7U0FDakI7S0FDRjtJQUNELFNBQVMsRUFBRTtRQUNULENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7UUFDaEQ7WUFDRSxFQUFFLEVBQUUsdUJBQXVCO1lBQzNCLEVBQUUsRUFBRSxZQUFZO1lBQ2hCLEVBQUUsRUFBRSxVQUFVO1NBQ2Y7S0FDRjtJQUNELFVBQVUsRUFBRTtRQUNWLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7UUFDdkQ7WUFDRSxFQUFFLEVBQUUsdUJBQXVCO1lBQzNCLEVBQUUsRUFBRSxZQUFZO1lBQ2hCLEVBQUUsRUFBRSxVQUFVO1NBQ2Y7S0FDRjtJQUNELFlBQVksRUFBRTtRQUNaLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7UUFDNUQ7WUFDRSxFQUFFLEVBQUUsdUNBQXVDO1lBQzNDLEVBQUUsRUFBRSxhQUFhO1lBQ2pCLEVBQUUsRUFBRSxXQUFXO1NBQ2hCO0tBQ0Y7SUFDRCxZQUFZLEVBQUU7UUFDWixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO1FBQzVEO1lBQ0UsRUFBRSxFQUFFLGtDQUFrQztZQUN0QyxFQUFFLEVBQUUsYUFBYTtZQUNqQixFQUFFLEVBQUUsV0FBVztTQUNoQjtLQUNGO0lBQ0QsUUFBUSxFQUFFO1FBQ1I7WUFDRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHO1NBQzNIO1FBQ0Q7WUFDRSxFQUFFLEVBQUUsa0JBQWtCO1lBQ3RCLEVBQUUsRUFBRSxtQkFBbUI7WUFDdkIsRUFBRSxFQUFFLHFCQUFxQjtTQUMxQjtLQUNGO0lBQ0QsYUFBYSxFQUFFO1FBQ2IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztRQUNyQztZQUNFLEVBQUUsRUFBRSwwQ0FBMEM7WUFDOUMsRUFBRSxFQUFFLHFCQUFxQjtZQUN6QixFQUFFLEVBQUUsdUJBQXVCO1NBQzVCO0tBQ0Y7SUFDRCxhQUFhLEVBQUU7UUFDYixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztRQUNsRDtZQUNFLEVBQUUsRUFBRSw4Q0FBOEM7WUFDbEQsRUFBRSxFQUFFLHNCQUFzQjtZQUMxQixFQUFFLEVBQUUsdUJBQXVCO1NBQzVCO0tBQ0Y7SUFDRCxhQUFhLEVBQUU7UUFDYixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO1FBQzVEO1lBQ0UsRUFBRSxFQUFFLGdEQUFnRDtZQUNwRCxFQUFFLEVBQUUsc0JBQXNCO1lBQzFCLEVBQUUsRUFBRSx1QkFBdUI7U0FDNUI7S0FDRjtDQUNGLENBQUM7QUFHRjtJQUNFLFNBQVM7SUFDVCxXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixlQUFlO0lBQ2YsVUFBVTtJQUNWLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixZQUFZO0NBQ2IsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFFckMsTUFBTSxXQUFXLEdBQUcsSUFBSSxNQUFNLENBQUM7SUFDN0IsS0FBSyxFQUFFLFNBQVM7SUFDaEIsS0FBSyxFQUFFO1FBQ0wsRUFBRSxFQUFFLDZCQUE2QjtRQUNqQyxFQUFFLEVBQUUsMEJBQTBCO1FBQzlCLEVBQUUsRUFBRSx1QkFBdUI7S0FDNUI7SUFDRCxlQUFlLEVBQUUscUNBQXFDO0lBQ3RELE9BQU8sRUFBRSxHQUFHLEVBQUU7UUFDWixXQUFXLENBQUMsUUFBUSxHQUFHO1lBQ3JCLE9BQU87WUFDUCxnQkFBZ0I7WUFDaEIsY0FBYztZQUNkLGNBQWM7WUFDZCxXQUFXO1lBQ1gsUUFBUTtTQUNULENBQUM7UUFFRixJQUFJLGtCQUFrQixLQUFLLFlBQVksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUNuRCxXQUFXLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1lBQzdFLFdBQVcsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzVFLENBQUM7UUFBQSxDQUFDO1FBRUYsSUFBSSxNQUFNLEtBQUssT0FBTyxDQUFDLFFBQVE7WUFDN0IsV0FBVyxDQUFDLFFBQVEsR0FBRyxDQUFDLFdBQVcsRUFBRSxjQUFjLENBQUMsQ0FBQztRQUV2RCxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxVQUFVLEVBQUUsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7WUFDbkcsV0FBVyxDQUFDLEtBQUssR0FBRztnQkFDbEIsRUFBRSxFQUFFLHNCQUFzQjtnQkFDMUIsRUFBRSxFQUFFLG9CQUFvQjthQUN6QixDQUFDO1FBR0osSUFBSSxZQUFZLENBQUMsV0FBVyxLQUFLLE1BQU07WUFDckMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDO1FBRWpELENBQUMsZUFBZSxFQUFFLGVBQWUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQTtJQUVsRixDQUFDO0NBQ0YsQ0FBQyxDQUFDO0FBRUgsTUFBTSxtQkFBbUIsR0FBRyxJQUFJLE1BQU0sQ0FBQztJQUNyQyxLQUFLLEVBQUUsV0FBVztJQUNsQixLQUFLLEVBQUUsRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRTtJQUNwRCxlQUFlLEVBQUUscUNBQXFDO0lBQ3RELE9BQU8sRUFBRSxHQUFHLEVBQUU7UUFDWixXQUFXLEVBQUUsQ0FBQyxDQUFDLGtDQUFrQztJQUNuRCxDQUFDO0NBQ0YsQ0FBQyxDQUFDO0FBRUgsTUFBTSxPQUFPLEdBQUcsSUFBSSxNQUFNLENBQUM7SUFDekIsS0FBSyxFQUFFLFNBQVM7SUFDaEIsS0FBSyxFQUFFLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUU7SUFDbkQsT0FBTyxFQUFFLENBQUMsaUJBQTBCLEtBQUssRUFBRSxFQUFFO1FBQzNDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUTtZQUNuQixPQUFPLENBQUMsUUFBUSxHQUFHO2dCQUNqQixpQkFBaUI7Z0JBQ2pCLGlCQUFpQjtnQkFDakIsZUFBZTthQUFDLENBQUM7UUFDckIsSUFBSSxjQUFjO1lBQUUsT0FBTyxPQUFPLENBQUMsUUFBUSxDQUFDO0lBQzlDLENBQUM7Q0FDRixDQUFDLENBQUM7QUFFSCxNQUFNLGlCQUFpQixHQUFHLElBQUksTUFBTSxDQUFDO0lBQ25DLEtBQUssRUFBRSxtQkFBbUI7SUFDMUIsS0FBSyxFQUFFO1FBQ0wsRUFBRSxFQUFFLHlCQUF5QjtRQUM3QixFQUFFLEVBQUUsbUJBQW1CO1FBQ3ZCLEVBQUUsRUFBRSxpQkFBaUI7S0FDdEI7SUFDRCxXQUFXLEVBQUUsSUFBSSxnQkFBZ0IsRUFBRTtJQUNuQyxTQUFTLEVBQUUsQ0FBQyxHQUFHLGdCQUFnQixDQUFDO0lBQ2hDLE9BQU8sRUFBRSxHQUFHLEVBQUU7UUFDWiw4Q0FBOEM7UUFDOUMsaUJBQWlCLENBQUMsUUFBUSxHQUFHLGNBQWMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFMUQsSUFBSSxtQkFBbUIsR0FBRztZQUN4QixHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVTtTQUM3QixDQUFDO1FBRUYsQ0FBQyxTQUFTLGdDQUFnQztZQUV4QyxpQkFBaUIsQ0FBQyxlQUFlLEdBQUcsb0JBQW9CLEVBQUUsQ0FBQztZQUUzRCxTQUFTLG9CQUFvQjtnQkFDM0IsZ09BQWdPO2dCQUNoTyxJQUFJLENBQUMsTUFBTTs7d0JBRVQsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQzs7d0JBRXhCLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFVBQVUsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDeEUsT0FBTyxtQkFBbUI7eUJBQ3ZCLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUNkLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBVSxHQUFHLHFCQUFxQixFQUFFLE1BQU0sQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7O29CQUc5RyxPQUFPLFFBQVEsRUFBRSxDQUFDO2dCQUV2QixTQUFTLFFBQVE7b0JBQ2YsSUFBSSxDQUFDLE1BQU07d0JBQUUsT0FBTztvQkFDcEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO3dCQUM1RCxtRkFBbUY7d0JBQ25GOzRCQUNFLENBQUMscUJBQXFCLEVBQUUsc0NBQXNDLENBQUMsRUFBRSwwREFBMEQ7NEJBQzNILENBQUMsVUFBVSxFQUFFLHFDQUFxQyxDQUFDO3lCQUFDLENBQUcsNkNBQTZDOzZCQUNuRyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3JJLENBQUM7b0JBR0Qsc0lBQXNJO29CQUN0SSxPQUFPLG1CQUFtQjt5QkFDdkIsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQ2QsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVLEdBQUcsaUJBQWlCLEVBQUUsTUFBTSxDQUFDLFVBQVUsR0FBRyxXQUFXLENBQUMsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDaEgsQ0FBQztZQUNILENBQUM7WUFBQSxDQUFDO1FBRUosQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUVMLFdBQVcsRUFBRSxDQUFDO1FBQ2QsT0FBTyxpQkFBaUIsQ0FBQyxlQUFlLENBQUM7SUFDM0MsQ0FBQztJQUNELGdCQUFnQixFQUFFLEtBQUssRUFBRSxHQUFHLEdBQUcsaUJBQWlCLEVBQUUsRUFBRTtRQUNsRCxJQUFJLGNBQWMsR0FBRyxHQUFHLENBQUMsV0FBVyxDQUFDO1FBRXJDLElBQUksZ0JBQWdCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxHQUFHLENBQUM7WUFDMUMsT0FBTyx1QkFBdUIsRUFBRSxDQUFDO1FBRW5DLGlCQUFpQixDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUEsbVFBQW1RO1FBRTNTLENBQUMsU0FBUyxvQ0FBb0M7WUFDNUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztnQkFBRSxPQUFPLENBQUEsb0lBQW9JO1lBQ3pNLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFBRSxPQUFPO1lBRWhELElBQUksTUFBTSxHQUFhO2dCQUNyQixNQUFNLENBQUMsWUFBWSxHQUFHLHdCQUF3QixHQUFHLE1BQU07Z0JBQ3ZELE1BQU0sQ0FBQyxVQUFVLEdBQUcscUNBQXFDO2dCQUN6RCxNQUFNLENBQUMsV0FBVyxHQUFHLDhDQUE4QzthQUNwRSxDQUFDO1lBRUYsNEJBQTRCLENBQUMsY0FBYyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFBLDRDQUE0QztZQUV4SixJQUFJLE1BQU0sR0FBaUIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsNkJBQTZCLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFBLDBDQUEwQztZQUU5SixJQUFJLENBQUMsTUFBTSxJQUFJLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQztnQkFBRSxPQUFPO1lBRXpDLElBQUksTUFBTSxHQUFHLDRCQUE0QixDQUFDLGNBQWMsRUFBRSxNQUFNLENBQUMsVUFBVSxHQUFHLHdCQUF3QixHQUFHLE1BQU0sRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBLDBFQUEwRTtZQUN2TixJQUFJLENBQUMsTUFBTTtnQkFBRSxPQUFPO1lBRXBCLHNDQUFzQyxDQUNwQztnQkFDRSxNQUFNLEVBQUUsTUFBTTtnQkFDZCxTQUFTLEVBQUUsZ0JBQWdCO2dCQUMzQixRQUFRLEVBQUU7b0JBQ1IsYUFBYSxFQUFFLGFBQWE7b0JBQzVCLEVBQUUsRUFBRSxNQUFNO2lCQUNYO2dCQUNELFNBQVMsRUFBRSxjQUFjO2FBQzFCLENBQ0YsQ0FBQztRQUNKLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFFTCxJQUFJLGNBQWMsR0FBZ0IsNEJBQTRCLENBQzVELGNBQWMsRUFDZCxNQUFNLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FDM0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLHFGQUFxRjtRQUUzRixDQUFDLFNBQVMsa0NBQWtDO1lBQzFDLElBQUkscUJBQXFCLEdBQUcsZUFBZSxDQUFDLE1BQU0sQ0FDaEQsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUNSLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7O29CQUUvQyxDQUFDLHlCQUF5QixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLFVBQVUsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQ2pFLENBQUM7WUFDRixJQUFJLHFCQUFxQixDQUFDLE1BQU0sR0FBRyxDQUFDO2dCQUNsQyxPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUNBQWlDLENBQUMsQ0FBQztZQUV4RCxxQkFBcUIsR0FBRyx3QkFBd0IsQ0FBQyxxQkFBcUIsQ0FBaUIsQ0FBQztZQUV4RixJQUFJLE1BQXNCLENBQUM7WUFFM0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLEVBQUUsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7Z0JBQy9ELDRCQUE0QixDQUFDLGNBQWMsRUFBRSx1QkFBdUIsRUFBRSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFBLDBHQUEwRztZQUUzTyxxQkFBcUIsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ3BDLE1BQU0sR0FBRyxzQkFBc0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDN0MsSUFBSSxDQUFDLE1BQU07b0JBQUUsT0FBTztnQkFDcEIsc0NBQXNDLENBQUM7b0JBQ3JDLE1BQU0sRUFBRSxDQUFDLEtBQUssQ0FBQztvQkFDZixTQUFTLEVBQUUsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDcEMsUUFBUSxFQUFFO3dCQUNSLGFBQWEsRUFBRSxhQUFhO3dCQUM1QixFQUFFLEVBQUUsTUFBTTtxQkFDWDtvQkFDRCxTQUFTLEVBQUUsY0FBYztpQkFDMUIsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUM7WUFFSCxTQUFTLHNCQUFzQixDQUFDLEtBQWE7Z0JBQzNDLElBQUksQ0FBQyxLQUFLO29CQUFFLE9BQU87Z0JBQ25CLElBQUksU0FBUyxHQUFXLHFCQUFxQixDQUFDO2dCQUU5QyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7b0JBQ3RDLFNBQVMsR0FBRyw0QkFBNEIsQ0FBQztxQkFDdEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLEVBQUUsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsdUJBQXVCLENBQUM7b0JBQ2hILFNBQVMsR0FBRyxxQkFBcUIsQ0FBQyxDQUFBLGlHQUFpRztnQkFFckksSUFBSSxDQUFDLFNBQVM7b0JBQUUsT0FBTztnQkFFdkIsSUFBSSxRQUFRLEdBQUcsNEJBQTRCLENBQ3pDLGNBQWMsRUFDZCxNQUFNLENBQUMsVUFBVSxHQUFHLFNBQVMsR0FBRyxFQUFFLEdBQUcsTUFBTSxDQUFDLENBQUM7Z0JBRS9DLElBQUksQ0FBQyxRQUFRLElBQUksUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDO29CQUFFLE9BQU87Z0JBRTdDLE9BQU8sUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsa0JBQW9DLENBQUE7WUFDM0UsQ0FBQztRQUNILENBQUMsQ0FBQyxFQUFFLENBQUM7UUFFTCxDQUFDLFNBQVMsMkJBQTJCO1lBQ25DLHdGQUF3RjtZQUN4RixJQUFJLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzVDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUM7WUFDaEQsY0FBYyxDQUFDLHFCQUFxQixDQUFDLGFBQWEsRUFBRSxPQUFPLENBQUMsQ0FBQztZQUM3RCxPQUFPLENBQUMsV0FBVyxDQUNqQixtQkFBbUIsQ0FBQztnQkFDbEIsS0FBSyxFQUFFLGdCQUFnQjtnQkFDdkIsU0FBUyxFQUFFLGNBQWM7Z0JBQ3pCLE9BQU8sRUFBRSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsVUFBVSxHQUFHLGFBQWEsRUFBRSxlQUFlLENBQUMsSUFBSSxTQUFTLENBQUM7Z0JBQ3JGLEtBQUssRUFBRTtvQkFDTCxFQUFFLEVBQUUsY0FBYztvQkFDbEIsRUFBRSxFQUFFLGFBQWE7aUJBQ2xCO2dCQUNELFNBQVMsRUFBRSxnQkFBZ0I7YUFDNUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUNOLENBQUM7WUFFRixPQUFPLENBQUMsV0FBVyxDQUNqQixtQkFBbUIsQ0FBQztnQkFDbEIsS0FBSyxFQUFFLFlBQVk7Z0JBQ25CLFNBQVMsRUFBRSxjQUFjO2dCQUN6QixPQUFPLEVBQUUsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFVBQVUsR0FBRyxTQUFTLEVBQUUsZUFBZSxDQUFDLElBQUksU0FBUyxDQUFDO2dCQUNqRixLQUFLLEVBQUU7b0JBQ0wsRUFBRSxFQUFFLFVBQVU7b0JBQ2QsRUFBRSxFQUFFLFNBQVM7aUJBQ2Q7Z0JBQ0QsU0FBUyxFQUFFLGdCQUFnQjthQUM1QixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQ04sQ0FBQztZQUNGLE9BQU8sQ0FBQyxLQUFLLENBQUMsbUJBQW1CLEdBQUcsMEJBQTBCLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzNFLHNCQUFzQixDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFBO1FBQzdELENBQUMsQ0FBQyxFQUFFLENBQUM7UUFFTCx1QkFBdUIsRUFBRSxDQUFDO1FBRTFCLE1BQU0sOEJBQThCLEVBQUUsQ0FBQztRQUV2QyxLQUFLLFVBQVUsOEJBQThCO1lBRTNDLElBQUksZUFBZ0QsQ0FBQztZQUVyRCxVQUFVO1lBQ1YsTUFBTSxpQkFBaUIsQ0FDckIsTUFBTSxDQUFDLE1BQU0sRUFDYixxQkFBcUIsQ0FBQyxXQUFXLEVBQ2pDLHFCQUFxQixDQUFDLFNBQVMsQ0FDaEMsQ0FBQztZQUVGLENBQUMsU0FBUyx3QkFBd0I7Z0JBQ2hDLGVBQWUsR0FBRyx3QkFBd0IsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUVySCxJQUFJLGVBQWUsQ0FBQyxNQUFNLEdBQUcsQ0FBQztvQkFBRSxlQUFlLEdBQUcsd0JBQXdCLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLE1BQU0sQ0FBQyxrQkFBa0IsR0FBRyxVQUFVLENBQUMsQ0FBQztnQkFFL0ksSUFBSSxlQUFlLENBQUMsTUFBTSxHQUFHLENBQUM7b0JBQUUsT0FBTztnQkFFdkMsbUJBQW1CLENBQUM7b0JBQ2xCLE9BQU8sRUFBRSxlQUErQjtvQkFDeEMsU0FBUyxFQUFFLGNBQWM7b0JBQ3pCLEtBQUssRUFBRSx1QkFBdUI7b0JBQzlCLEtBQUssRUFBRTt3QkFDTCxFQUFFLEVBQUUsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7cUJBQzdIO29CQUNELFNBQVMsRUFBRSxnQkFBZ0I7aUJBQzVCLENBQUMsQ0FBQztZQUNMLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFFTCxZQUFZO1lBQ1osTUFBTSxpQkFBaUIsQ0FDckIsTUFBTSxDQUFDLFVBQVUsRUFDakIscUJBQXFCLENBQUMsZUFBZSxFQUNyQyxxQkFBcUIsQ0FBQyxhQUFhLENBQ3BDLENBQUM7WUFFRixDQUFDLFNBQVMsb0JBQW9CO2dCQUM1Qiw4RkFBOEY7Z0JBRTlGLGVBQWUsR0FBRyxFQUFFLENBQUM7Z0JBQ3JCLElBQUksV0FBVyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBQzlDLElBQUksT0FBTyxHQUFHLFdBQVcsRUFBRSxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQ2hELElBQUksQ0FBQyxPQUFPO29CQUNWLE9BQU87d0JBQ0wsV0FBVzs2QkFDUixNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsVUFBVSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsVUFBVSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQzs2QkFDdkYsUUFBUSxDQUFDLGtCQUFrQixDQUFDLENBQUM7Z0JBRXBDLElBQUksYUFBYSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUVyRSxJQUFJLE9BQU87b0JBQ1QsZUFBZTt3QkFDYixvQkFBb0IsQ0FBQyxNQUFNLENBQ3pCLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUUsa0JBQWtCLENBQUMsQ0FBQyxDQUFDOzZCQUNuRixNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUEsNkdBQTZHO2dCQUU3SyxJQUFJLGVBQWUsQ0FBQyxNQUFNLEdBQUcsQ0FBQztvQkFDNUIsZUFBZSxHQUFHLG9CQUFvQixDQUFDLE1BQU0sQ0FDM0MsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLHlCQUF5QixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBLHVDQUF1QztnQkFHeEcsSUFBSSxhQUFhLElBQUksU0FBUyxLQUFLLElBQUksSUFBSSxlQUFlLENBQUMsTUFBTSxHQUFHLENBQUM7b0JBQ25FLE9BQU8sb0JBQW9CLEVBQUUsQ0FBQzs7b0JBQzNCLE9BQU8sa0JBQWtCLEVBQUUsQ0FBQztnQkFFakMsU0FBUyxrQkFBa0I7b0JBQ3pCLElBQUksTUFBTSxLQUFLLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQzt3QkFDakMsMEpBQTBKO3dCQUUxSixPQUFPLEtBQUssQ0FBQyxJQUFJLE9BQU8sS0FBSyxDQUFDLENBQUMsQ0FBQzs0QkFDOUIsZUFBZTtnQ0FDZixlQUFlLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FDL0IsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQzs0QkFDdEMsQ0FBQztnQ0FDRCxlQUFlO29DQUNmLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztvQkFDeEUsQ0FBQztvQkFFRCxJQUFJLE1BQU0sS0FBSyxPQUFPLENBQUMsWUFBWSxJQUFJLFVBQVUsS0FBSyxZQUFZLENBQUMsUUFBUTt3QkFDekUsZUFBZSxHQUFHLGVBQWUsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsa0JBQWtCLEVBQUUsYUFBYSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBRXpILCtEQUErRDtvQkFDL0QsZUFBZTt3QkFDYixzQ0FBc0MsQ0FBQzs0QkFDckMsTUFBTSxFQUFFLHdCQUF3QixDQUFDLGVBQStCLENBQWlCLEVBQUUsNkJBQTZCOzRCQUNoSCxTQUFTLEVBQUUsZ0JBQWdCOzRCQUMzQixRQUFRLEVBQUU7Z0NBQ1IsYUFBYSxFQUFFLGFBQWE7Z0NBQzVCLEVBQUUsRUFBRSxjQUFjLEVBQUUsdURBQXVEOzZCQUM1RTs0QkFDRCxTQUFTLEVBQUUsY0FBYzt5QkFDMUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUVSLG9CQUFvQixDQUFDLGVBQW1DLENBQUMsQ0FBQztnQkFDNUQsQ0FBQztnQkFBQSxDQUFDO2dCQUVGLFNBQVMsb0JBQW9CO29CQUMzQixJQUFJLGdCQUFnQixHQUFrQyxTQUFTLENBQzdELE1BQU0sQ0FBQyxjQUFjLEdBQUcsTUFBTSxFQUM5QixvQkFBb0IsQ0FBQyxJQUFJLFNBQVMsQ0FBQztvQkFFckMsSUFBSSxDQUFDLGdCQUFnQjt3QkFBRSxPQUFPO29CQUU5QixnQkFBZ0IsR0FBRyxzQ0FBc0MsQ0FBQzt3QkFDeEQsTUFBTSxFQUFFLENBQUMsZ0JBQThCLENBQUM7d0JBQ3hDLFNBQVMsRUFBRSxZQUFZLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQzt3QkFDOUMsUUFBUSxFQUFFOzRCQUNSLGFBQWEsRUFBRSxhQUFhOzRCQUM1QixFQUFFLEVBQUUsY0FBYzt5QkFDbkI7d0JBQ0QsU0FBUyxFQUFFLGNBQWM7cUJBQzFCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFFTixvQkFBb0IsQ0FBQyxnQkFBb0MsQ0FBQyxDQUFDO2dCQUM3RCxDQUFDO2dCQUFBLENBQUM7Z0JBR0YsU0FBUyxvQkFBb0IsQ0FBQyxTQUEyQjtvQkFDdkQsSUFBSSxDQUFDLFNBQVM7d0JBQUUsT0FBTztvQkFDdkIsSUFBSSxNQUFNLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsSUFBSSxLQUFLLE1BQU0sQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLENBQUM7b0JBRW5GLElBQUksQ0FBQyxNQUFNO3dCQUFFLE9BQU8sQ0FBQyw0SkFBNEo7b0JBRWpMLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUM7d0JBQUUsT0FBTyxDQUFBLDBDQUEwQztvQkFFeEcsZUFBZSxHQUFHLG9CQUFvQixDQUFDLE1BQU0sQ0FDM0MsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsbUJBQW1CLENBQUMsSUFBSSx5QkFBeUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBRWpILElBQUksZUFBZSxDQUFDLE1BQU0sR0FBRyxDQUFDO3dCQUFFLE9BQU87b0JBR3ZDLHNDQUFzQyxDQUFDO3dCQUNyQyxNQUFNLEVBQUUsZUFBK0I7d0JBQ3ZDLFNBQVMsRUFBRSxZQUFZLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQzt3QkFDOUMsUUFBUSxFQUFFOzRCQUNSLEVBQUUsRUFBRSxNQUFNOzRCQUNWLGFBQWEsRUFBRSxhQUFhO3lCQUM3Qjt3QkFDRCxTQUFTLEVBQUUsY0FBYztxQkFDMUIsQ0FBQyxDQUFDO2dCQUNMLENBQUM7WUFDSCxDQUFDLENBQUMsRUFBRSxDQUFDO1lBR0wsUUFBUTtZQUNSLE1BQU0saUJBQWlCLENBQ3JCLE1BQU0sQ0FBQyxNQUFNLEVBQ2IscUJBQXFCLENBQUMsV0FBVyxFQUNqQyxxQkFBcUIsQ0FBQyxTQUFTLENBQ2hDLENBQUM7WUFFRixDQUFDLFNBQVMsd0JBQXdCO2dCQUNoQyxJQUFJLE1BQU0sS0FBSyxPQUFPLENBQUMsWUFBWSxJQUFJLFVBQVUsS0FBSyxZQUFZLENBQUMsUUFBUTtvQkFBRSxPQUFPO2dCQUNwRixrSEFBa0g7Z0JBRWxILElBQUksS0FBSyxHQUFXLGlCQUFpQixDQUFDO2dCQUN0QyxJQUFJLFVBQVUsS0FBSyxZQUFZLENBQUMsUUFBUTtvQkFDdEMsS0FBSyxJQUFJLHVCQUF1QixDQUFBO3FCQUM3QixJQUFJLE1BQU0sS0FBSyxPQUFPLENBQUMsWUFBWTtvQkFDdEMsS0FBSyxJQUFJLHNCQUFzQixDQUFDO2dCQUVsQyxzQ0FBc0MsQ0FBQztvQkFDckMsTUFBTSxFQUFFLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDN0YsU0FBUyxFQUFFLFlBQVksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDO29CQUM5QyxRQUFRLEVBQUU7d0JBQ1IsRUFBRSxFQUFFLGNBQWM7d0JBQ2xCLGFBQWEsRUFBRSxhQUFhO3FCQUM3QjtvQkFDRCxTQUFTLEVBQUUsY0FBYztpQkFDMUIsQ0FBQyxDQUFDO1lBRUwsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUVMLE1BQU0sZ0JBQWdCLEVBQUUsQ0FBQztZQUV6QixLQUFLLFVBQVUsZ0JBQWdCO2dCQUM3QixJQUFJLE1BQU0sS0FBSyxPQUFPLENBQUMsZUFBZTtvQkFBRSxPQUFPLENBQUEsOERBQThEO2dCQUM3RyxJQUFJLEtBQUssR0FBRyxFQUFFLEdBQUcscUJBQXFCLENBQUMsZUFBZSxFQUFFLENBQUM7Z0JBQ3pELE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO3FCQUNsQixPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FDZixLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNmLEtBQUssQ0FBQyxDQUFDLENBQUM7eUJBQ0wsT0FBTyxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7eUJBQy9DLE9BQU8sQ0FBQyxVQUFVLEVBQ2pCLFlBQVksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FDNUMsQ0FBQyxDQUFDO2dCQUVULE1BQU0saUJBQWlCLENBQ3JCLE1BQU0sQ0FBQyxVQUFVLEVBQ2pCLEtBQUssRUFDTCxTQUFTLEVBQ1QsVUFBVSxDQUNYLENBQUMsQ0FBQyxvS0FBb0s7Z0JBRXZLLCtCQUErQjtnQkFDL0IsSUFBSSxTQUFTLEdBQUcsNEJBQTRCLENBQzFDLGNBQWMsRUFDZCxNQUFNLENBQUMsVUFBVSxHQUFHLEtBQUssR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFFN0MsSUFBSSxDQUFDLFNBQVMsSUFBSSxTQUFTLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDO29CQUFFLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO2dCQUNuRyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLHFCQUFxQixDQUN6QyxhQUFhLEVBQ2IsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FDdEIsQ0FBQztZQUNKLENBQUM7WUFBQSxDQUFDO1lBRUYsS0FBSyxVQUFVLGlCQUFpQixDQUM5QixhQUFxQixFQUNyQixZQUFvRCxFQUNwRCxVQUFrRCxFQUNsRCxPQUFlLGtCQUFrQjtnQkFFakMsSUFBSSxDQUFDLGFBQWE7b0JBQUUsT0FBTztnQkFFM0IsSUFBSSxRQUFRLENBQUM7Z0JBRWIsUUFBUSxHQUFHLE1BQU0sZ0NBQWdDLENBQy9DLGFBQWEsRUFDYixFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUUsRUFBRSxFQUFFLGNBQWMsRUFBRSxFQUNwRCxjQUFjLEVBQ2QsS0FBSyxFQUNMLElBQUksQ0FDYyxDQUFDO2dCQUVyQixJQUFJLENBQUMsUUFBUSxJQUFJLFFBQVEsQ0FBQyxNQUFNLEtBQUssQ0FBQztvQkFBRSxPQUFPO2dCQUMvQyxRQUFRLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFFakQsSUFBSSxZQUFZO29CQUNkLDJEQUEyRDtvQkFDM0Qsc0NBQXNDLENBQUM7d0JBQ3JDLE1BQU0sRUFBRTs0QkFDTjtnQ0FDRTtvQ0FDRSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRyxpQkFBaUI7b0NBQy9DLFlBQVksQ0FBQyxFQUFFO29DQUNmLFlBQVksQ0FBQyxFQUFFO29DQUNmLFlBQVksQ0FBQyxFQUFFO2lDQUNoQjs2QkFDRjt5QkFDRjt3QkFDRCxTQUFTLEVBQUUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQzt3QkFDN0IsUUFBUSxFQUFFLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBRSxFQUFFLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO3dCQUM5RCxTQUFTLEVBQUUsY0FBYztxQkFDMUIsQ0FBQyxDQUFDO2dCQUNMLElBQUksVUFBVTtvQkFDWix1Q0FBdUM7b0JBQ3ZDLHNDQUFzQyxDQUFDO3dCQUNyQyxNQUFNLEVBQUU7NEJBQ047Z0NBQ0U7b0NBQ0UsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsZUFBZTtvQ0FDN0MsVUFBVSxDQUFDLEVBQUU7b0NBQ2IsVUFBVSxDQUFDLEVBQUU7b0NBQ2IsVUFBVSxDQUFDLEVBQUU7aUNBQ2Q7NkJBQ0Y7eUJBQ0Y7d0JBQ0QsU0FBUyxFQUFFLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUM7d0JBQzdCLFFBQVEsRUFBRSxFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUUsRUFBRSxFQUFFLGNBQWMsRUFBRTt3QkFDOUQsU0FBUyxFQUFFLGNBQWM7cUJBQzFCLENBQUMsQ0FBQztZQUNQLENBQUM7WUFBQSxDQUFDO1lBRUYsQ0FBQyxTQUFTLHlCQUF5QjtnQkFDakMsSUFBSSxLQUFLLEdBQVcsTUFBTSxDQUFDLFVBQVUsR0FBRyx3QkFBd0IsQ0FBQztnQkFFakUsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUM7b0JBQzVFLEtBQUssSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztxQkFDN0UsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUUsWUFBWSxDQUFDLFNBQVMsRUFBRSxZQUFZLENBQUMsVUFBVSxDQUFDLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDO29CQUM5RyxLQUFLLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssa0JBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztxQkFDckYsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxlQUFlLEVBQUUsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7b0JBQzNILEtBQUssR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxTQUFTLENBQUMsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7b0JBQzlHLEtBQUssSUFBSSxRQUFRLENBQUM7Z0JBR3ZCLElBQUksVUFBVSxHQUNaLFNBQVMsQ0FBQyxLQUFLLEVBQUUsZUFBZSxFQUFFO29CQUNoQyxLQUFLLEVBQUUsSUFBSTtpQkFDWixDQUFDLElBQUksU0FBUyxDQUFDO2dCQUVsQixJQUFJLENBQUMsVUFBVTtvQkFDYixPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQ2hCLHFEQUFxRCxDQUN0RCxDQUFDO2dCQUVKLENBQUMsU0FBUyxnQkFBZ0I7b0JBQ3hCLElBQUksTUFBTSxLQUFLLE9BQU8sQ0FBQyxTQUFTO3dCQUFFLE9BQU8sQ0FBRSxpRkFBaUY7b0JBQzVILElBQUksaUJBQWlCLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxZQUFZLEdBQUcsWUFBWSxFQUFFLFdBQVcsRUFBRTt3QkFDakYsS0FBSyxFQUFFLElBQUk7cUJBQ1osQ0FBQyxDQUFDLENBQUMsQ0FBYSxDQUFDLENBQUMsa0hBQWtIO29CQUVySSxJQUFJLENBQUMsaUJBQWlCO3dCQUFFLE9BQU87b0JBRS9CLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsR0FBRyxpQkFBaUIsQ0FBQyxDQUFDLENBQUEsK0RBQStEO2dCQUV2SixDQUFDLENBQUMsRUFBRSxDQUFDO2dCQUdMLHNDQUFzQyxDQUFDO29CQUNyQyxNQUFNLEVBQUUsQ0FBQyxVQUFVLENBQUM7b0JBQ3BCLFNBQVMsRUFBRSxZQUFZLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUN6QyxRQUFRLEVBQUU7d0JBQ1IsYUFBYSxFQUFFLGFBQWE7d0JBQzVCLEVBQUUsRUFBRSxjQUFjLEVBQUUsa0JBQW9DO3FCQUN6RDtvQkFDRCxTQUFTLEVBQUUsY0FBYztpQkFDMUIsQ0FBQyxDQUFDO2dCQUVILDRDQUE0QztZQUM5QyxDQUFDLENBQUMsRUFBRSxDQUFDO1lBRUwsTUFBTSwrQkFBK0IsQ0FBQztnQkFDcEMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxVQUFVO2dCQUMxQixTQUFTLEVBQUUsWUFBWSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUM7Z0JBQzFDLFNBQVMsRUFBRSxjQUFjO2dCQUN6QixNQUFNLEVBQUUsSUFBSTtnQkFDWixjQUFjLEVBQUUsS0FBSzthQUN0QixDQUFDLENBQUM7UUFDTCxDQUFDO1FBQUEsQ0FBQztRQUVGLFNBQVMsdUJBQXVCO1lBQzlCLElBQ0U7Z0JBQ0UsWUFBWSxDQUFDLFlBQVk7Z0JBQ3pCLFlBQVksQ0FBQyxRQUFRO2dCQUNyQixZQUFZLENBQUMsT0FBTzthQUNyQixDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQztnQkFFOUIsd0NBQXdDO2dCQUN4QyxPQUFPLEtBQUssQ0FDViw4SEFBOEgsQ0FDL0gsQ0FBQztZQUVKLElBQUksU0FBUyxHQUFhLGNBQWMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyw0REFBNEQ7WUFDcEgsSUFBSSxDQUFDLFNBQVM7Z0JBQUUsT0FBTztZQUV2QixTQUFTLEdBQUcsb0NBQW9DLEVBQUUsQ0FBQztZQUVuRCxJQUFJLFlBQTRCLEVBQzlCLE9BQXVCLENBQUM7WUFHMUIsQ0FBQyxTQUFTLGtCQUFrQjtnQkFDMUIsWUFBWSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyx3R0FBd0c7Z0JBQ3RKLFlBQVksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUM7Z0JBQ3JELFlBQVksQ0FBQyxFQUFFLEdBQUcsY0FBYyxDQUFDO2dCQUVqQyxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLGtGQUFrRjtnQkFDM0gsSUFBSSxlQUFlLEtBQUssSUFBSTtvQkFBRSxPQUFPLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQztnQkFDbEQsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO2dCQUMvQixPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO2dCQUNoRCxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFFOUIsSUFBSSxTQUFTLEdBQUcsSUFBSSxNQUFNLENBQUM7b0JBQ3pCLEtBQUssRUFBRSxZQUFZO29CQUNuQixLQUFLLEVBQUU7d0JBQ0wsRUFBRSxFQUFFLFNBQVM7d0JBQ2IsRUFBRSxFQUFFLE9BQU87cUJBQ1o7b0JBQ0QsT0FBTyxFQUFFLEdBQUcsRUFBRTt3QkFDWix3REFBd0Q7d0JBQ3hELE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO3dCQUNqQyxJQUFJLE9BQU8sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7NEJBQ3ZDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQzs0QkFDdkIsT0FBTyxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDOzRCQUM1QixnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7d0JBQy9CLENBQUM7b0JBQ0gsQ0FBQztpQkFDRixDQUFDLENBQUM7Z0JBRUgsWUFBWSxDQUFDLE9BQU8sQ0FDbEIsYUFBYSxDQUFDO29CQUNaLEdBQUcsRUFBRSxTQUFTO29CQUNkLGFBQWEsRUFBRSxZQUFZO29CQUMzQixRQUFRLEVBQUUsY0FBYztvQkFDeEIsS0FBSyxFQUFFLElBQUk7b0JBQ1gsT0FBTyxFQUFFLFNBQVMsQ0FBQyxPQUFPO2lCQUMzQixDQUFDLENBQ0gsQ0FBQyxDQUFDLHNEQUFzRDtnQkFFekQsY0FBYyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDaEMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUN2QyxDQUFDLENBQUMsRUFBRSxDQUFDO1lBR0wsQ0FBQyxTQUFTLDJCQUEyQjtnQkFDbkMsZ0ZBQWdGO2dCQUNoRixTQUFTO3FCQUNOLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO29CQUNYLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyw2SkFBNko7b0JBRWhMLElBQUksWUFBWSxDQUFDLFdBQVcsS0FBSyxZQUFZLENBQUMsQ0FBQyxDQUFDO3dCQUM5QywwR0FBMEc7d0JBQzFHLEdBQUcsQ0FBQyxlQUFlLEdBQUcsR0FBRyxDQUFDLGVBQWU7NkJBQ3RDLE1BQU0sQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7b0JBRWxELHNCQUFzQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsZ0VBQWdFO29CQUM3RixJQUFJLFVBQVUsR0FDWixHQUFHLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FDckIsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUNSLFNBQVMsQ0FDUCxLQUFLLEVBQ0wsNkJBQTZCLENBQUMsS0FBSyxDQUFDLENBQ3ZCLENBQ2xCLENBQUMsQ0FBQyx3RkFBd0Y7b0JBRTdGLHdFQUF3RTtvQkFDeEUsSUFBSSxlQUFlLEdBQ2pCLG1CQUFtQixDQUFDO3dCQUNsQixPQUFPLEVBQUUsVUFBVTt3QkFDbkIsU0FBUyxFQUFFLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFtQjt3QkFDdkQsS0FBSyxFQUFFLEdBQUcsQ0FBQyxLQUFLO3dCQUNoQixLQUFLLEVBQUUsR0FBRyxDQUFDLEtBQUs7d0JBQ2hCLFNBQVMsRUFBRSxjQUFjLENBQUMsU0FBUztxQkFDcEMsQ0FBa0MsQ0FBQztvQkFFdEMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7d0JBQUUsT0FBTztvQkFHaEMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQSwySkFBMko7b0JBRXJQLE9BQU8sQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBR3hDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO3dCQUFFLE9BQU87b0JBRWhDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7Z0JBRzNELENBQUMsQ0FBQyxDQUFDO2dCQUVMLDhDQUE4QztnQkFDOUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsR0FBRywwQkFBMEIsQ0FDNUQsT0FBTyxFQUNQLENBQUMsQ0FBQyxDQUFDO1lBQ1AsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUVMLFNBQVMsb0NBQW9DO2dCQUMzQywrTkFBK047Z0JBQy9OLElBQUksS0FBSyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLHNDQUFzQztnQkFFOUYsSUFDRTtvQkFDRSxPQUFPLENBQUMsU0FBUztvQkFDakIsT0FBTyxDQUFDLFNBQVM7b0JBQ2pCLE9BQU8sQ0FBQyxnQkFBZ0I7b0JBQ3hCLE9BQU8sQ0FBQyxlQUFlO2lCQUN4QixDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7b0JBQ2xCLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQztnQkFDekIsNEtBQTRLOztvQkFFNUssS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7cUJBQ3BDLElBQUksZ0JBQWdCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDO29CQUNsRCxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDdkMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUNoQixDQUFDO3FCQUNJLElBQ0gsQ0FBQyxNQUFNOzt3QkFFUCxzREFBc0Q7d0JBQ3RELENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQywyRkFBMkY7O29CQUVwSCxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyx3QkFBd0I7Z0JBRXZDLE9BQU8sS0FBSyxDQUFDO1lBQ2YsQ0FBQztZQUFBLENBQUM7WUFFRixLQUFLLFVBQVUsY0FBYyxDQUFDLFNBQWlCO2dCQUM3QyxJQUFJLFdBQVcsR0FBRyw0QkFBNEIsQ0FBQyxZQUFZLEVBQUUsZ0JBQWdCLEVBQUUsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLFNBQVMsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztnQkFFakssSUFBSSxXQUFXLENBQUMsTUFBTSxHQUFHLENBQUM7b0JBQUUsT0FBTztnQkFFbkMsV0FBVztxQkFDUixPQUFPLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FDcEIsVUFBVSxFQUFFLEVBQUUsRUFBRSxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztvQkFDckMsY0FBYyxDQUFDLFVBQVUsQ0FBQztvQkFDMUIsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FDekIsQ0FBQztnQkFFSixTQUFTLFFBQVEsQ0FBQyxVQUEwQjtvQkFDMUMsSUFBSSxVQUFVLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7d0JBQUUsT0FBTyxDQUFBLGtEQUFrRDtvQkFFcEcsVUFBVSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBRWpDLEtBQUssQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsUUFBUSxDQUFDO3lCQUN4QyxNQUFNLENBQUMsQ0FBQyxHQUFtQixFQUFFLEVBQUUsQ0FBQyxHQUFHLEVBQUUsT0FBTyxFQUFFLEtBQUssS0FBSyxVQUFVLEVBQUUsRUFBRSxDQUFDO3lCQUN2RSxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztnQkFFbEMsQ0FBQztnQkFBQSxDQUFDO2dCQUVGLEtBQUssVUFBVSxjQUFjLENBQUMsVUFBMEI7b0JBRXRELENBQUMsS0FBSyxVQUFVLGVBQWU7d0JBRTdCLElBQUksVUFBVSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDOzRCQUFFLE9BQU87d0JBRWxELElBQUksUUFBUSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBcUIsQ0FBQzt3QkFFbkUsUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsb0JBQW9CLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUM7d0JBRWpJLElBQUksa0JBQWtCLEdBQ3BCLE1BQU0sd0JBQXdCLENBQzVCLFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUN4RCxTQUFTLEVBQ1QsS0FBSyxFQUNMLFVBQVUsQ0FBQyxFQUFFLEVBQ2IsS0FBSyxDQUNOLENBQUM7d0JBRUosa0JBQWtCOzZCQUNmLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUNsQixRQUFRLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO3dCQUV2QyxrQkFBa0IsQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUEsaURBQWlEO3dCQUUxRixZQUFZLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLDBCQUEwQjt3QkFFOUQsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMscURBQXFEO29CQUN4RixDQUFDLENBQUMsRUFBRSxDQUFDO29CQUVMLENBQUMsU0FBUyxZQUFZO3dCQUNwQixJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDOzRCQUFFLE9BQU87d0JBQ25ELE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQzt3QkFDdkIsT0FBTyxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO3dCQUM1QixZQUFZLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQzt3QkFDdEMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO3dCQUM3QixLQUFLLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLFFBQVEsQ0FBQzs2QkFDeEMsTUFBTSxDQUFDLENBQUMsR0FBbUIsRUFBRSxFQUFFLENBQUMsR0FBRyxFQUFFLE9BQU8sRUFBRSxLQUFLLEtBQUssVUFBVSxDQUFDLEVBQUUsQ0FBQzs2QkFDdEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7b0JBQ2xDLENBQUMsQ0FBQyxFQUFFLENBQUM7Z0JBQ1AsQ0FBQztnQkFBQSxDQUFDO1lBQ0osQ0FBQztZQUFBLENBQUM7WUFFRixTQUFTLHNCQUFzQixDQUFDLE9BQWU7Z0JBRTdDLE9BQU8sQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEdBQUcsV0FBVyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUVuRixTQUFTLFdBQVc7b0JBQ2xCLElBQUksS0FBSyxHQUFXLE9BQU8sRUFDekIsWUFBWSxHQUFXLGNBQWMsRUFDckMsZ0JBQWdCLEdBQVcsWUFBWSxHQUFHLGFBQWEsRUFDdkQsY0FBYyxHQUFXLFlBQVksR0FBRyxXQUFXLEVBQ25ELGdCQUFnQixHQUFXLGtCQUFrQixFQUM3QyxTQUFTLEdBQVcsaUJBQWlCLEVBQ3JDLFVBQVUsR0FBVyxrQkFBa0IsRUFDdkMsS0FBSyxHQUFXLE9BQU8sRUFDdkIsU0FBUyxHQUFXLG1CQUFtQixDQUFDO29CQUUxQyxJQUFJLFNBQVMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQzt3QkFDeEQsMkJBQTJCO3dCQUMzQixPQUFPOzRCQUNMLFVBQVU7NEJBQ1YsS0FBSzs0QkFDTCxjQUFjOzRCQUNkLGdCQUFnQjs0QkFDaEIsU0FBUzt5QkFDVixDQUFDO29CQUNKLENBQUM7eUJBQU0sSUFBSSxTQUFTLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUM7d0JBQy9ELGtDQUFrQzt3QkFDbEMsT0FBTyxDQUFDLEtBQUssRUFBRSxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUM7b0JBQ3ZDLENBQUM7eUJBQU0sQ0FBQzt3QkFDTixrQ0FBa0M7d0JBQ2xDLE9BQU87NEJBQ0wsZ0JBQWdCOzRCQUNoQixnQkFBZ0I7NEJBQ2hCLFNBQVM7eUJBQ1YsQ0FBQztvQkFDSixDQUFDO2dCQUVILENBQUM7WUFDSCxDQUFDO1FBQ0gsQ0FBQztRQUFBLENBQUM7SUFFSixDQUFDO0NBQ0YsQ0FBQyxDQUFDO0FBRUgsTUFBTSxpQkFBaUIsR0FBRyxJQUFJLE1BQU0sQ0FBQztJQUNuQyxLQUFLLEVBQUUsbUJBQW1CO0lBQzFCLEtBQUssRUFBRTtRQUNMLEVBQUUsRUFBRSxRQUFRO1FBQ1osRUFBRSxFQUFFLHNCQUFzQjtRQUMxQixFQUFFLEVBQUUsaUJBQWlCO0tBQ3RCO0lBQ0QsT0FBTyxFQUFFLEtBQUssSUFBSSxFQUFFO1FBQ2xCLE1BQU0sZ0NBQWdDLENBQ3BDLE1BQU0sQ0FBQyxNQUFNLEVBQ2IsRUFBRSxhQUFhLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFDM0MsWUFBWSxFQUNaLElBQUksQ0FDTCxDQUFDO1FBRUYsV0FBVyxFQUFFLENBQUMsQ0FBQyxrQ0FBa0M7SUFDbkQsQ0FBQztDQUNGLENBQUMsQ0FBQztBQUVILE1BQU0scUJBQXFCLEdBQUcsSUFBSSxNQUFNLENBQUM7SUFDdkMsS0FBSyxFQUFFLHVCQUF1QjtJQUM5QixLQUFLLEVBQUU7UUFDTCxFQUFFLEVBQUUsYUFBYTtRQUNqQixFQUFFLEVBQUUsWUFBWTtLQUNqQjtJQUNELE9BQU8sRUFBRSxLQUFLLElBQUksRUFBRTtRQUNsQixNQUFNLGdDQUFnQyxDQUNwQyxNQUFNLENBQUMsVUFBVSxFQUNqQixFQUFFLGFBQWEsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUMzQyxZQUFZLEVBQ1osSUFBSSxDQUNMLENBQUM7UUFDRixXQUFXLEVBQUUsQ0FBQyxDQUFDLGtDQUFrQztJQUNuRCxDQUFDO0NBQ0YsQ0FBQyxDQUFDO0FBRUgsTUFBTSxpQkFBaUIsR0FBRyxJQUFJLE1BQU0sQ0FBQztJQUNuQyxLQUFLLEVBQUUsbUJBQW1CO0lBQzFCLEtBQUssRUFBRTtRQUNMLEVBQUUsRUFBRSxXQUFXO1FBQ2YsRUFBRSxFQUFFLFFBQVE7S0FDYjtJQUNELE9BQU8sRUFBRSxLQUFLLElBQUksRUFBRTtRQUNsQixNQUFNLGdDQUFnQyxDQUNwQyxNQUFNLENBQUMsTUFBTSxFQUNiLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQzNDLFlBQVksRUFDWixJQUFJLENBQ0wsQ0FBQztRQUNGLFdBQVcsRUFBRSxDQUFDLENBQUMsa0NBQWtDO0lBQ25ELENBQUM7Q0FDRixDQUFDLENBQUM7QUFFSCxNQUFNLHFCQUFxQixHQUFHLElBQUksTUFBTSxDQUFDO0lBQ3ZDLEtBQUssRUFBRSx1QkFBdUI7SUFDOUIsS0FBSyxFQUFFO1FBQ0wsRUFBRSxFQUFFLFVBQVU7UUFDZCxFQUFFLEVBQUUsWUFBWTtLQUNqQjtJQUNELE9BQU8sRUFBRSxLQUFLLElBQUksRUFBRTtRQUNsQixNQUFNLGdDQUFnQyxDQUNwQyxNQUFNLENBQUMsVUFBVSxFQUNqQixFQUFFLGFBQWEsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUMzQyxZQUFZLEVBQ1osSUFBSSxFQUNKLFVBQVUsQ0FDWCxDQUFDLENBQUMsK1NBQStTO1FBQ2xULFdBQVcsRUFBRSxDQUFDLENBQUMsa0NBQWtDO0lBQ25ELENBQUM7Q0FDRixDQUFDLENBQUM7QUFFSCxNQUFNLG9CQUFvQixHQUFHLElBQUksTUFBTSxDQUFDO0lBQ3RDLEtBQUssRUFBRSwyQkFBMkI7SUFDbEMsS0FBSyxFQUFFO1FBQ0wsRUFBRSxFQUFFLFlBQVk7UUFDaEIsRUFBRSxFQUFFLGtCQUFrQjtLQUN2QjtJQUNELE9BQU8sRUFBRSxLQUFLLElBQUksRUFBRTtRQUNsQixNQUFNLGdDQUFnQyxDQUNwQyxNQUFNLENBQUMsVUFBVSxFQUNqQixFQUFFLGFBQWEsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUMzQyxZQUFZLEVBQ1osSUFBSSxDQUNMLENBQUM7UUFDRixXQUFXLEVBQUUsQ0FBQyxDQUFDLGtDQUFrQztJQUNuRCxDQUFDO0NBQ0YsQ0FBQyxDQUFDO0FBRUgsTUFBTSxjQUFjLEdBQUcsSUFBSSxNQUFNLENBQUM7SUFDaEMsS0FBSyxFQUFFLGdCQUFnQjtJQUN2QixLQUFLLEVBQUU7UUFDTCxFQUFFLEVBQUUsY0FBYztRQUNsQixFQUFFLEVBQUUsa0JBQWtCO1FBQ3RCLEVBQUUsRUFBRSxnQkFBZ0I7S0FDckI7SUFDRCxPQUFPLEVBQUUsQ0FBQyxPQUFnQixLQUFLLEVBQUUsRUFBRTtRQUNqQyxDQUFDLGVBQWUsRUFBRSxlQUFlLENBQUM7YUFDL0IsT0FBTyxDQUFDLEtBQUssRUFBQyxJQUFJLEVBQUMsRUFBRTtZQUNwQixJQUFJLENBQUMsSUFBSTtnQkFBRSxPQUFPO1lBQ2xCLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFBRSxPQUFPO1lBQzVCLE1BQU0sZUFBZSxDQUFDLGVBQWUsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNoRCxDQUFDLENBQUMsQ0FBQztRQUVMLElBQUksTUFBTSxLQUFLLE9BQU8sQ0FBQyxRQUFRO1lBQzdCLE9BQU8sS0FBSyxDQUFDLHdGQUF3RixDQUFDLENBQUMsQ0FBQyx5RUFBeUU7UUFDbkwsOEJBQThCO1FBRTlCLGNBQWMsQ0FBQyxRQUFRLEdBQUc7WUFDeEIsZ0JBQWdCO1lBQ2hCLGdCQUFnQjtZQUNoQixpQkFBaUI7WUFDakIscUJBQXFCO1lBQ3JCLGlCQUFpQjtZQUNqQixxQkFBcUI7WUFDckIsYUFBYTtTQUNkLENBQUM7UUFFRixDQUFDLFNBQVMsNEJBQTRCO1lBQ3BDLElBQUksSUFBSTtnQkFBRSxPQUFPLENBQUMsNEZBQTRGO1lBQzlHLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7Z0JBQUUsT0FBTztZQUNyRSxJQUFJLGtCQUFrQixLQUFLLFlBQVksQ0FBQyxZQUFZO2dCQUFFLE9BQU87WUFFN0QsQ0FBQyxTQUFTLG1CQUFtQjtnQkFDM0IsSUFBSSxPQUFPLEtBQUssQ0FBQztvQkFBRSxPQUFPO2dCQUUxQiw4TEFBOEw7Z0JBQzlMLGNBQWMsQ0FBQyxRQUFRLEdBQUcsY0FBYyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssZ0JBQWdCLENBQUMsQ0FBQztnQkFFdEYsSUFBSSxNQUFNLEtBQUssT0FBTyxDQUFDLFNBQVM7b0JBQUUsT0FBTyxDQUFDLDZDQUE2QztnQkFFdkYsZ0ZBQWdGO2dCQUNoRixJQUNFLE9BQU8sS0FBSyxDQUFDOzt3QkFFYixDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLGNBQWMsQ0FBQztvQkFFbEQsY0FBYyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7Z0JBRS9DLENBQUMsU0FBUyxpQkFBaUI7b0JBQ3pCLElBQUksT0FBTyxLQUFLLENBQUM7d0JBQUUsT0FBTztvQkFFMUIscUpBQXFKO29CQUNySixJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsb0JBQW9CLENBQUM7d0JBQzFELGNBQWMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLG9CQUFvQixDQUFDLENBQUM7b0JBRXhELDRFQUE0RTtvQkFDNUUsY0FBYyxDQUFDLFFBQVEsR0FBRyxjQUFjLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FDdEQsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsS0FBSyxjQUFjLENBQ2hDLENBQUM7Z0JBQ0osQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUNQLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDUCxDQUFDLENBQUMsRUFBRSxDQUFDO1FBRUwsQ0FBQyxTQUFTLE1BQU07WUFDZCxJQUFJLENBQUMsSUFBSTtnQkFBRSxPQUFPO1lBRWxCLGNBQWMsQ0FBQyxRQUFRLEdBQUcsY0FBYyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLEVBQUUsZ0JBQWdCLEVBQUUsY0FBYyxFQUFFLG9CQUFvQixDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQSxrREFBa0Q7WUFFN00sSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLEVBQUUsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7Z0JBQy9ELGNBQWMsQ0FBQyxRQUFRLEdBQUcsY0FBYyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEtBQUsscUJBQXFCLENBQUMsQ0FBQyxDQUFBLGlDQUFpQztRQUN4SSxDQUFDLENBQUMsRUFBRSxDQUFDO1FBRUwsT0FBTyxjQUFjLENBQUMsUUFBUSxDQUFDO0lBQ2pDLENBQUM7Q0FDRixDQUFDLENBQUM7QUFFSCxNQUFNLGNBQWMsR0FBRyxJQUFJLE1BQU0sQ0FBQztJQUNoQyxLQUFLLEVBQUUsZ0JBQWdCO0lBQ3ZCLEtBQUssRUFBRSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsZUFBZSxFQUFFO0lBQzFELFdBQVcsRUFBRSxJQUFJLGdCQUFnQixFQUFFO0lBQ25DLFNBQVMsRUFBRSxXQUFXO0lBQ3RCLFNBQVMsRUFBRSxDQUFDLEdBQUcsZ0JBQWdCLENBQUM7SUFDaEMsUUFBUSxFQUFFLEVBQUU7SUFDWixPQUFPLEVBQUUsQ0FBQyxvQkFBNkIsS0FBSyxFQUFFLEVBQUU7UUFDOUMsSUFBSSxjQUFjLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDO1lBQUUsT0FBTyxjQUFjLENBQUMsUUFBUSxDQUFDO1FBRXZFLElBQUksaUJBQWlCLEdBQ25CLE1BQU0sQ0FBQyxZQUFZLEdBQUcsbUJBQW1CLEVBQ3pDLGFBQWEsR0FDWCxNQUFNLENBQUMsWUFBWSxHQUFHLGNBQWMsR0FBRyxNQUFNLEVBQy9DLGNBQWMsR0FDWixNQUFNLENBQUMsWUFBWSxHQUFHLGlCQUFpQixFQUN6QyxVQUFVLEdBQ1IsTUFBTSxDQUFDLFlBQVksR0FBRyxrQkFBa0IsRUFDMUMsS0FBSyxHQUNILE1BQU0sQ0FBQyxZQUFZLEdBQUcsT0FBTyxFQUMvQixlQUFlLEdBQVcseUJBQXlCLEVBQ25ELGdCQUFnQixHQUNkLE1BQU0sQ0FBQyxZQUFZLEdBQUcsa0JBQWtCLEVBQzFDLEtBQUssR0FBVyxNQUFNLENBQUMsWUFBWSxHQUFHLE9BQU8sRUFDN0MsbUJBQW1CLEdBQ2pCLE1BQU0sQ0FBQyxXQUFXLEdBQUcscUJBQXFCLEdBQUcsTUFBTSxDQUFDO1FBRXhELGNBQWMsQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBRTdCLENBQUMsU0FBUywwQkFBMEI7WUFDbEMsQ0FBQyxTQUFTLFlBQVk7Z0JBRXBCLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDO3FCQUN4QixPQUFPLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtvQkFDakIsSUFBSSxRQUFRLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUNyQixRQUFRLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUN6QixJQUFJLE9BQU8sR0FBRyxJQUFJLE1BQU0sQ0FBQzt3QkFDdkIsS0FBSyxFQUFFLEtBQUssR0FBRyxRQUFRO3dCQUN2QixLQUFLLEVBQUUsUUFBUTt3QkFDZixTQUFTLEVBQUUsY0FBYyxDQUFDLFNBQVM7d0JBQ25DLFNBQVMsRUFBRSxjQUFjO3dCQUN6QixPQUFPLEVBQUUsQ0FBQyxTQUFrQixLQUFLLEVBQUUsRUFBRSxDQUNuQyxjQUFjLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLENBQUM7d0JBQzNDLGdCQUFnQixFQUFFLEdBQUcsRUFBRSxDQUFDLHNCQUFzQixDQUFDLFFBQVEsQ0FBQztxQkFDekQsQ0FBQyxDQUFDO29CQUVILGNBQWMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUN4QyxDQUFDLENBQUMsQ0FBQztZQUVQLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFFTCxDQUFDLFNBQVMsbUJBQW1CO2dCQUMzQixJQUFJLFlBQVksR0FBRyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsaUJBQWlCLEdBQUcsTUFBTSxFQUFFLE1BQU0sQ0FBQyxXQUFXLEdBQUcsZ0JBQWdCLEdBQUcsTUFBTSxDQUFDLENBQUM7Z0JBQ3JILElBQUksZUFBZSxHQUFHLElBQUksTUFBTSxDQUFDO29CQUMvQixLQUFLLEVBQUUsaUJBQWlCO29CQUN4QixLQUFLLEVBQUU7d0JBQ0wsRUFBRSxFQUFFLFlBQVk7d0JBQ2hCLEVBQUUsRUFBRSxrQkFBa0I7d0JBQ3RCLEVBQUUsRUFBRSxpQkFBaUI7cUJBQ3RCO29CQUNELFFBQVEsRUFBRSxZQUFZLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUMzRCxDQUFDLENBQUM7Z0JBRUgsY0FBYyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7Z0JBRzlDLFNBQVMsY0FBYyxDQUFDLEtBQWE7b0JBQ25DLElBQUksS0FBSyxHQUFHLFNBQVMsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxTQUFTLENBQUM7b0JBQzVELElBQUksQ0FBQyxLQUFLO3dCQUFFLE9BQU8sU0FBUyxDQUFDO29CQUM3QixPQUFPLElBQUksTUFBTSxDQUFDO3dCQUNoQixLQUFLLEVBQUUsZ0JBQWdCLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO3dCQUN6RCxLQUFLLEVBQUU7NEJBQ0wsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLEVBQUUsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7NEJBQ3pELEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxFQUFFLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO3lCQUMxRDt3QkFDRCxPQUFPLEVBQUUsR0FBRyxFQUFFOzRCQUNaLE1BQU0sQ0FDSixXQUFXLENBQUM7Z0NBQ1YsS0FBSyxFQUFFLEtBQUs7Z0NBQ1osU0FBUyxFQUFFLGNBQWMsQ0FBQyxTQUFTO2dDQUNuQyxTQUFTLEVBQUUsWUFBWTtnQ0FDdkIsaUJBQWlCLEVBQUUsSUFBSTtnQ0FDdkIsaUJBQWlCLEVBQUUsSUFBSTs2QkFDeEIsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDOzRCQUNaLFdBQVcsRUFBRSxDQUFDO3dCQUNoQixDQUFDO3FCQUNGLENBQUMsQ0FBQztnQkFDTCxDQUFDO1lBQ0gsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUdMLFNBQVMsc0JBQXNCLENBQUMsUUFBUTtnQkFDdEMsSUFBSSxRQUFRLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FDdkIsWUFBWSxDQUFDLFFBQTRDLENBQzFELENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUV0QyxXQUFXLEVBQUUsQ0FBQztnQkFFZCxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FDM0IsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFVBQVUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQ3JELE9BQU8sQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FDaEQsQ0FDRixDQUFDO2dCQUVGLElBQUksUUFBUSxLQUFLLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO29CQUFFLE9BQU87Z0JBQ2pELGdMQUFnTDtnQkFDaEwsSUFBSSxRQUFRLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQ3JDLEdBQUcsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLFVBQVUsQ0FBQyxNQUFNLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQyxDQUNoRSxDQUFDO2dCQUVGLFFBQVE7cUJBQ0wsTUFBTSxDQUNMLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxRQUFRLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FDbkU7cUJBQ0EsT0FBTyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztZQUNwQyxDQUFDO1lBRUQsNkNBQTZDO1lBQzdDLFNBQVMsY0FBYyxDQUFDLEdBQVcsRUFBRSxRQUFnQixFQUFFLE1BQWU7Z0JBQ3BFLENBQUMsU0FBUyx1QkFBdUI7b0JBQy9CLDJEQUEyRDtvQkFDM0QsR0FBRyxDQUFDLGVBQWUsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQzt5QkFDOUMsSUFBSSxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3lCQUM1QyxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsT0FBTyxHQUFHLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUEsbUJBQW1CO29CQUV0RixHQUFHLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsV0FBVyxHQUFHLFFBQVEsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLHNDQUFzQztvQkFFNUcsQ0FBQyxRQUFRLEVBQUUsVUFBVSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FDdkMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsR0FBRyxRQUFRLEdBQUcsS0FBSyxDQUFDLENBQ2hFLENBQUMsQ0FBQSxvQ0FBb0M7b0JBRXRDLGtJQUFrSTtvQkFFbEksQ0FBQyxTQUFTLHlCQUF5Qjt3QkFDakMsSUFBSSxNQUFNOzRCQUFFLE9BQU8sQ0FBQyw2SkFBNko7d0JBQ2pMLElBQUksUUFBUSxHQUFHLEdBQUcsQ0FBQyxLQUFLLEVBQ3RCLFNBQVMsR0FBYTs0QkFDcEIsTUFBTSxDQUFDLFlBQVk7Z0NBQ25CLG1CQUFtQjs0QkFDbkIsTUFBTSxDQUFDLFlBQVk7Z0NBQ25CLG1CQUFtQjs0QkFDbkIsTUFBTSxDQUFDLFlBQVk7Z0NBQ25CLG1CQUFtQjs0QkFDbkIsTUFBTSxDQUFDLFlBQVk7Z0NBQ25CLG1CQUFtQjs0QkFDbkIsTUFBTSxDQUFDLFdBQVcsR0FBRyxTQUFTO3lCQUMvQixFQUNELHdCQUF3QixHQUFhOzRCQUNuQyxhQUFhOzRCQUNiLEtBQUs7NEJBQ0wsaUJBQWlCOzRCQUNqQixjQUFjOzRCQUNkLFVBQVU7NEJBQ1YsS0FBSzs0QkFDTCxlQUFlOzRCQUNmLGdCQUFnQjs0QkFDaEIsaUJBQWlCOzRCQUNqQixNQUFNLENBQUMsV0FBVyxHQUFHLFFBQVEsR0FBRyxLQUFLOzRCQUNyQyxtQkFBbUI7NEJBQ25CLGlCQUFpQjt5QkFDbEIsQ0FBQzt3QkFFSixJQUFJLFFBQVEsS0FBSyxXQUFXLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQzs0QkFDM0MsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxHQUFHLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxvRUFBb0U7d0JBRTdILElBQUksUUFBUSxLQUFLLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDOzRCQUMxQyx3QkFBd0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsMkZBQTJGO3dCQUVwSSxHQUFHLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxxRkFBcUY7d0JBRXJJLElBQUksUUFBUSxLQUFLLFdBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQzs0QkFDOUMsNkZBQTZGOzRCQUM3Rix3QkFBd0IsQ0FBQyxNQUFNLENBQzdCLENBQUMsRUFDRCxDQUFDLEVBQ0QsZUFBZSxFQUNmLGdCQUFnQixFQUNoQixpQkFBaUIsRUFDakIsTUFBTSxDQUFDLFdBQVcsR0FBRyxRQUFRLEdBQUcsV0FBVyxDQUM1QyxDQUFDOzRCQUNGLDZDQUE2Qzs0QkFDN0Msd0JBQXdCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsUUFBUSxHQUFHLG1CQUFtQixDQUFDLENBQUM7d0JBQ3JGLENBQUM7d0JBRUQsSUFDRTs0QkFDRSxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQzs0QkFDeEIsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7NEJBQzNCLFdBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO3lCQUM3QixDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFDcEIsQ0FBQzs0QkFDRCwrRkFBK0Y7NEJBQy9GLEdBQUcsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEdBQUcsd0JBQXdCLENBQUMsQ0FBQzt3QkFDeEQsQ0FBQzs2QkFBTSxDQUFDOzRCQUNOLCtKQUErSjs0QkFDL0osR0FBRyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQ3RCLGVBQWUsRUFDZixnQkFBZ0IsRUFDaEIsaUJBQWlCLENBQ2xCLENBQUM7d0JBQ0osQ0FBQztvQkFDSCxDQUFDLENBQUMsRUFBRSxDQUFDO2dCQUNQLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDUCxDQUFDO1FBQ0gsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUVMLElBQUksaUJBQWlCO1lBQUUsT0FBTyxjQUFjLENBQUMsUUFBUSxDQUFDO1FBRXRELFdBQVcsRUFBRSxDQUFDO1FBQ2QsT0FBTyxjQUFjLENBQUMsZUFBZSxDQUFDO0lBQ3hDLENBQUM7Q0FDRixDQUFDLENBQUM7QUFFSCxNQUFNLFdBQVcsR0FBRyxJQUFJLE1BQU0sQ0FBQztJQUM3QixLQUFLLEVBQUUsYUFBYTtJQUNwQixLQUFLLEVBQUU7UUFDTCxFQUFFLEVBQUUscUJBQXFCO1FBQ3pCLEVBQUUsRUFBRSxXQUFXO1FBQ2YsRUFBRSxFQUFFLFVBQVU7S0FDZjtJQUNELE9BQU8sRUFBRSxHQUFhLEVBQUU7UUFDdEIsSUFBSSxXQUFXLENBQUMsUUFBUTtZQUFFLE9BQU8sV0FBVyxDQUFDLFFBQVEsQ0FBQztRQUV0RCxNQUFNLElBQUksR0FBRztZQUNYO2dCQUNFLEVBQUUsRUFBRSxPQUFPO2dCQUNYLEVBQUUsRUFBRSxVQUFVO2dCQUNkLEVBQUUsRUFBRSxRQUFRO2FBQ2I7WUFDRDtnQkFDRSxFQUFFLEVBQUUsU0FBUztnQkFDYixFQUFFLEVBQUUsT0FBTztnQkFDWCxFQUFFLEVBQUUsUUFBUTthQUNiO1lBQ0Q7Z0JBQ0UsRUFBRSxFQUFFLFNBQVM7Z0JBQ2IsRUFBRSxFQUFFLE9BQU87Z0JBQ1gsRUFBRSxFQUFFLFNBQVM7YUFDZDtZQUNEO2dCQUNFLEVBQUUsRUFBRSxVQUFVO2dCQUNkLEVBQUUsRUFBRSxVQUFVO2dCQUNkLEVBQUUsRUFBRSxXQUFXO2FBQ2hCO1lBQ0Q7Z0JBQ0UsRUFBRSxFQUFFLFFBQVE7Z0JBQ1osRUFBRSxFQUFFLE9BQU87Z0JBQ1gsRUFBRSxFQUFFLFVBQVU7YUFDZjtZQUNEO2dCQUNFLEVBQUUsRUFBRSxRQUFRO2dCQUNaLEVBQUUsRUFBRSxVQUFVO2dCQUNkLEVBQUUsRUFBRSxRQUFRO2FBQ2I7WUFDRDtnQkFDRSxFQUFFLEVBQUUsT0FBTztnQkFDWCxFQUFFLEVBQUUsUUFBUTtnQkFDWixFQUFFLEVBQUUsVUFBVTthQUNmO1NBQ0YsQ0FBQztRQUVGLFdBQVcsQ0FBQyxRQUFRLEdBQUc7WUFDckIsU0FBUyxDQUFDLE9BQU8sRUFBRSxFQUFFLEVBQUUsRUFBRSxhQUFhLEVBQUUsRUFBRSxFQUFFLGlCQUFpQixFQUFFLEVBQUUsRUFBRSxrQkFBa0IsRUFBRSxDQUFDO1lBQ3hGLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7aUJBQ3JCLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxPQUFPLENBQUM7aUJBQzFCLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsWUFBWSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLGFBQWEsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxrQkFBa0IsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztTQUNsSSxDQUFDO1FBRUYsd0JBQXdCLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQSw4QkFBOEI7UUFFbEUsT0FBTyxXQUFXLENBQUMsUUFBUSxDQUFDO1FBRTVCLFNBQVMsU0FBUyxDQUFDLEdBQVcsRUFBRSxLQUFtQjtZQUNqRCxJQUFJLElBQUksR0FBVyxTQUFTLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDdkMsR0FBRyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsR0FBRyxHQUFHLE9BQU8sQ0FBQyxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQyxHQUFHLFdBQVcsQ0FBQztZQUU5Rix3QkFBd0IsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUEsNENBQTRDO1lBRXJGLElBQUksTUFBTSxHQUFHLE1BQU0sQ0FBQztZQUVwQixJQUFJLEdBQUcsR0FBRyxJQUFJLE1BQU0sQ0FBQztnQkFDbkIsS0FBSyxFQUFFLE9BQU87Z0JBQ2QsS0FBSyxFQUFFLEtBQUs7Z0JBQ1osU0FBUyxFQUFFLGdCQUFnQjtnQkFDM0IsV0FBVyxFQUFFLElBQUksZ0JBQWdCLEVBQUU7Z0JBQ25DLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLE1BQU0sQ0FBQzthQUNuRCxDQUFDLENBQUM7WUFDSCxPQUFPLEdBQUcsQ0FBQTtRQUNaLENBQUM7UUFFRCxTQUFTLGlCQUFpQixDQUFDLEdBQVcsRUFBRSxNQUFjLE9BQU8sRUFBRSxTQUFpQixNQUFNO1lBQ3BGLFdBQVcsRUFBRSxDQUFDO1lBRWQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsT0FBTyxDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxRQUFRLENBQzNGLE1BQU0sQ0FBQztnQkFDUCxPQUFPLEdBQUcsQ0FBQyxlQUFlLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFFeEQsR0FBRyxDQUFDLGVBQWU7Z0JBQ2pCLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSTtxQkFDcEIsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFFekMsU0FBUyxjQUFjLENBQUMsS0FBYTtnQkFDbkMsSUFBSSxFQUFFLEdBQVcsYUFBYSxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQztnQkFFNUMsSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztvQkFDdkIsS0FBSyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO2dCQUVuQyxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLGtCQUFrQixDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztvQkFDeEQsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUEsNkRBQTZEO3FCQUUvSyxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLHVCQUF1QixDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLFVBQVUsQ0FBQztvQkFDekksT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3FCQUUzSCxJQUFJLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztvQkFDdEMsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEtBQUssR0FBRyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUM7cUJBRTNFLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsc0JBQXNCLEdBQUcsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsRUFBRSxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztvQkFDekksT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxpREFBaUQsQ0FBQyxDQUFDOztvQkFDekUsT0FBTyxLQUFLLENBQUM7WUFDcEIsQ0FBQztRQUVILENBQUM7UUFBQSxDQUFDO0lBRUosQ0FBQztDQUNGLENBQUMsQ0FBQztBQUVILE1BQU0saUJBQWlCLEdBQUcsSUFBSSxNQUFNLENBQUM7SUFDbkMsS0FBSyxFQUFFLGdCQUFnQjtJQUN2QixLQUFLLEVBQUU7UUFDTCxFQUFFLEVBQUUsaUJBQWlCO1FBQ3JCLEVBQUUsRUFBRSxpQkFBaUI7UUFDckIsRUFBRSxFQUFFLHdCQUF3QjtLQUM3QjtJQUNELFNBQVMsRUFBRSxDQUFDLEdBQUcsZ0JBQWdCLENBQUM7SUFDaEMsV0FBVyxFQUFFLElBQUksZ0JBQWdCLEVBQUU7SUFDbkMsT0FBTyxFQUFFLEdBQWEsRUFBRTtRQUN0QixpQkFBaUIsQ0FBQyxlQUFlLEdBQUcsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQy9ELENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxVQUFVLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUNyRCxDQUFDLENBQUMsOEVBQThFO1FBRWpGLElBQUksT0FBTyxLQUFLLENBQUM7WUFDZiw4SEFBOEg7WUFDOUgsaUJBQWlCLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FDdEMsaUJBQWlCLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FDdkMsTUFBTSxDQUFDLFdBQVcsR0FBRyxZQUFZLENBQ2xDLEVBQ0QsQ0FBQyxFQUFFLHlFQUF5RTtZQUM1RSxNQUFNLENBQUMsY0FBYyxHQUFHLGdCQUFnQixDQUN6QyxDQUFDO2FBQ0MsSUFBSSxPQUFPLEtBQUssQ0FBQyxJQUFJLFVBQVUsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDO1lBQ3ZELHFLQUFxSztZQUNySyxpQkFBaUIsQ0FBQyxlQUFlLEdBQUcsaUJBQWlCLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FDMUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUNOLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLFVBQVUsQ0FDcEIsTUFBTSxDQUFDLFdBQVcsR0FBRyxpQkFBaUIsQ0FDdkMsQ0FDSixDQUFDO1FBRUosV0FBVyxFQUFFLENBQUM7UUFDZCxPQUFPLGlCQUFpQixDQUFDLGVBQWUsQ0FBQztJQUMzQyxDQUFDO0lBQ0QsZ0JBQWdCLEVBQUUsS0FBSyxFQUFFLE1BQWMsaUJBQWlCLEVBQUUsZUFBdUIsTUFBTSxDQUFDLGFBQWEsRUFBRSxFQUFFO1FBQ3ZHLElBQUksY0FBYyxHQUFHLEdBQUcsQ0FBQyxXQUFXLENBQUM7UUFFckMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLFNBQVMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLEdBQUcsQ0FBQztZQUMxRixPQUFPLDRCQUE0QixFQUFFLENBQUM7UUFFeEMsK0JBQStCLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFckMsTUFBTSwrQkFBK0IsQ0FBQztZQUNwQyxPQUFPLEVBQUUsWUFBWTtZQUNyQixTQUFTLEVBQUUsWUFBWSxDQUFDLFlBQVksQ0FBQztZQUNyQyxTQUFTLEVBQUUsY0FBYztZQUN6QixNQUFNLEVBQUUsSUFBSTtZQUNaLGNBQWMsRUFBRSxLQUFLO1NBQ3RCLENBQUMsQ0FBQztRQUVILDRCQUE0QixFQUFFLENBQUM7UUFFL0IsU0FBUyw0QkFBNEI7WUFDbkMsSUFBSSxRQUFRLEdBQ1YsTUFBTSxDQUFDLFlBQVk7Z0JBQ25CLDBCQUEwQixDQUFDO1lBRTdCLElBQUksZ0JBQWdCLEdBQXFCLDRCQUE0QixDQUNuRSxjQUFjLEVBQ2QsUUFBUSxFQUNSLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxDQUNyQixDQUFDLENBQUMsb0VBQW9FO1lBRXZFLElBQUksZ0JBQWdCLENBQUMsTUFBTSxHQUFHLENBQUM7Z0JBQUUsT0FBTyxDQUFDLCtDQUErQztZQUV4RixnQkFBZ0I7aUJBQ2IsTUFBTSxDQUNMLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FDVixnQkFBZ0IsRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQztnQkFDdEMsZ0JBQWdCLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLGdCQUFnQixFQUFFLE1BQU0sR0FBRyxDQUFDLENBQ3RFO2lCQUNBLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7WUFFMUMsSUFBSSxZQUFZLEdBQWUsU0FBUyxDQUFDLFFBQVEsRUFBRSxXQUFXLENBQWUsQ0FBQyxDQUFDLHlIQUF5SDtZQUV4TSxJQUFJLENBQUMsWUFBWTtnQkFDZixPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUNBQW1DLENBQUMsQ0FBQztZQUUxRCxtQkFBbUIsQ0FBQztnQkFDbEIsU0FBUyxFQUFFLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDLGtCQUFvQztnQkFDbkUsS0FBSyxFQUFFLGNBQWM7Z0JBQ3JCLEtBQUssRUFBRTtvQkFDTCxFQUFFLEVBQUUsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLHNDQUFzQztvQkFDOUQsRUFBRSxFQUFFLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxzQ0FBc0M7aUJBQy9EO2dCQUNELE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsaUpBQWlKO2dCQUN0TCxTQUFTLEVBQUUsaUJBQWlCLENBQUMsU0FBUztnQkFDdEMsU0FBUyxFQUFFLFFBQVE7YUFDcEIsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztRQUFBLENBQUM7UUFFRixtQkFBbUIsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUVwQyxJQUFJLEdBQUcsS0FBSyxpQkFBaUI7WUFBRSxPQUFPLENBQUMsMkVBQTJFO1FBR2xILENBQUMsS0FBSyxVQUFVLDRCQUE0QjtZQUMxQyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO2dCQUFFLE9BQU87WUFFckUsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDO2dCQUFFLE9BQU8sQ0FBQyx5RkFBeUY7WUFFL0gsSUFBSSxNQUFNLEdBQW1CLDRCQUE0QixDQUN2RCxjQUFjLEVBQ2QsTUFBTSxDQUFDLE1BQU0sR0FBRyxZQUFZLEdBQUcsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLENBQ3pELENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFTCxDQUFDLFNBQVMsZ0JBQWdCO2dCQUN4QiwrREFBK0Q7Z0JBRS9ELElBQUksVUFBVSxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsVUFBVSxHQUFHLEtBQUssR0FBRyxrQkFBa0IsRUFBRSxjQUFjLENBQUMscUJBQXFCLENBQUMsQ0FBQztnQkFFakgsSUFBSSxDQUFDLFVBQVU7b0JBQUUsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLDhDQUE4QyxDQUFDLENBQUM7Z0JBRXBGLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUVqRSxzQ0FBc0MsQ0FBQztvQkFDckMsTUFBTSxFQUFFLENBQUMsS0FBSyxFQUFFLFVBQVUsQ0FBQztvQkFDM0IsU0FBUyxFQUFFLFlBQVksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDO29CQUMxQyxRQUFRLEVBQUU7d0JBQ1IsYUFBYSxFQUFFLGFBQWE7d0JBQzVCLEVBQUUsRUFBRSxNQUFNO3FCQUNYO29CQUNELFNBQVMsRUFBRSxjQUFjO2lCQUMxQixDQUFDLENBQUM7WUFFTCxDQUFDLENBQUMsRUFBRSxDQUFDO1lBRUwsQ0FBQyxLQUFLLFVBQVUsd0JBQXdCO2dCQUN0QyxJQUFJLFlBQVksR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLFdBQVcsR0FBRyx1Q0FBdUMsRUFBRSxZQUFZLENBQUMsQ0FBQztnQkFFekcsSUFBSSxDQUFDLFlBQVk7b0JBQUUsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLDJDQUEyQyxDQUFDLENBQUM7Z0JBRW5GLHNDQUFzQyxDQUFDO29CQUNyQyxNQUFNLEVBQUUsQ0FBQyxZQUFZLENBQUM7b0JBQ3RCLFNBQVMsRUFBRSxnQkFBZ0I7b0JBQzNCLFFBQVEsRUFBRTt3QkFDUixhQUFhLEVBQUUsYUFBYTt3QkFDNUIsRUFBRSxFQUFFLE1BQU07cUJBQ1g7b0JBQ0QsU0FBUyxFQUFFLGNBQWM7aUJBQzFCLENBQUMsQ0FBQztnQkFFSCxDQUFDLFNBQVMsY0FBYztvQkFDdEIsb0RBQW9EO29CQUNwRCxJQUFJLFFBQVEsR0FBRyw0QkFBNEIsQ0FDekMsY0FBYyxFQUNkLE1BQU0sQ0FBQyxXQUFXLEdBQUcsOENBQThDLENBQUM7eUJBQ25FLE1BQU0sQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztvQkFFN0QsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFO3dCQUMzQixJQUFJLFFBQVEsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQzs0QkFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLENBQUM7b0JBQ3ZELENBQUMsQ0FBQyxDQUFDO2dCQUNMLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFFUCxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ1AsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUVMLENBQUMsS0FBSyxVQUFVLGdDQUFnQztZQUM5QyxrRUFBa0U7WUFDbEUsSUFBSSxjQUFjLENBQUMsUUFBUSxDQUFDLE1BQU0sS0FBSyxDQUFDO2dCQUFFLE9BQU87WUFFakQsbUJBQW1CLENBQUM7Z0JBQ2xCLFNBQVMsRUFBRSxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBZ0I7Z0JBQ3BELEtBQUssRUFBRSxnQkFBZ0I7Z0JBQ3ZCLEtBQUssRUFBRTtvQkFDTCxFQUFFLEVBQUUsc0JBQXNCO29CQUMxQixFQUFFLEVBQUUsMEJBQTBCO2lCQUMvQjtnQkFDRCxPQUFPLEVBQUUsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFVBQVUsR0FBRyxVQUFVLEVBQUUsZUFBZSxDQUFDLElBQUksU0FBUyxDQUFDO2dCQUNsRixTQUFTLEVBQUUsaUJBQWlCLENBQUMsU0FBUzthQUN2QyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDUixDQUFDLENBQUMsRUFBRSxDQUFDO1FBRUw7OztTQUdDO1FBQ0QsS0FBSyxVQUFVLCtCQUErQixDQUFDLEdBQVc7WUFDeEQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXO2dCQUNsQixPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUNBQWlDLEVBQUUsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBRXpFLElBQUksU0FBUyxHQUFhLENBQUMsR0FBRyxFQUFFO2dCQUM5QixJQUFJLEtBQUssR0FBYSxFQUFFLENBQUM7Z0JBQ3pCLElBQUksUUFBUSxHQUFxQixNQUFNLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDLElBQUksQ0FDaEUsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUMsVUFBVSxFQUFFLGtCQUFrQixDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUMvRCxDQUFDLENBQUMsa0pBQWtKO2dCQUVySixJQUFJLFFBQVE7b0JBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGtCQUFrQjtnQkFFekQsUUFBUSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQyw4QkFBOEI7Z0JBRXZHLElBQUksUUFBUTtvQkFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsb0JBQW9CO2dCQUUzRCxJQUFJLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQztvQkFBRSxPQUFPLHdCQUF3QixDQUFDLEtBQUssQ0FBYSxDQUFDO1lBQzNFLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDTCxJQUFJLE1BQW1CLENBQUM7WUFDeEIsQ0FBQyxLQUFLLFVBQVUsa0JBQWtCO2dCQUNoQyxNQUFNLEdBQUcsNEJBQTRCLENBQ25DLEdBQUcsQ0FBQyxXQUFXLEVBQ2YsTUFBTSxDQUFDLE1BQU0sR0FBRyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFFckMsSUFBSSxDQUFDLE1BQU07b0JBQ1QsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLDhDQUE4QyxDQUFDLENBQUM7Z0JBRXJFLElBQUksT0FBcUIsQ0FBQztnQkFFMUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUM7b0JBQ3RGLG1NQUFtTTtvQkFDbk0sT0FBTzt3QkFDTDs0QkFDRSxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxNQUFNLENBQUMsWUFBWSxHQUFHLGNBQWMsQ0FBQyxDQUFDOzRCQUN4RixpQkFBaUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsVUFBVSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDLENBQUM7eUJBQ3RGLENBQUM7O29CQUVELE9BQU8sR0FBRyxlQUFlLEVBQUUsQ0FBQztnQkFHakMsSUFBSSxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUM7b0JBQ3BCLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FDaEIsa0RBQWtELENBQ25ELENBQUM7Z0JBRUosc0NBQXNDLENBQUM7b0JBQ3JDLE1BQU0sRUFBRSx3QkFBd0IsQ0FBQyxPQUFPLENBQWlCO29CQUN6RCxTQUFTLEVBQUUsR0FBRyxDQUFDLFNBQVM7b0JBQ3hCLFFBQVEsRUFBRTt3QkFDUixhQUFhLEVBQUUsYUFBYTt3QkFDNUIsRUFBRSxFQUFFLE1BQU0sQ0FBQyxrQkFBaUM7cUJBQzdDO29CQUNELFNBQVMsRUFBRSxHQUFHLENBQUMsV0FBVztpQkFDM0IsQ0FBQyxDQUFDO2dCQUVILFNBQVMsZUFBZTtvQkFDdEIsSUFBSSxRQUFRLEdBQUc7d0JBQ2IsTUFBTSxDQUFDLFlBQVksR0FBRyxhQUFhLEVBQUU7d0JBQ3JDLE1BQU0sQ0FBQyxZQUFZLEdBQUcsTUFBTTtxQkFDN0IsQ0FBQztvQkFJRiwwSUFBMEk7b0JBQzFJLElBQ0UsQ0FBQyxHQUFHLFVBQVUsRUFBRSxZQUFZLENBQUMsVUFBVSxDQUFDLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQzt3QkFDN0QsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLGVBQWUsRUFBRSxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsUUFBUSxDQUN0RixNQUFNLENBQ1A7d0JBRUQsUUFBUTs0QkFDTixDQUFDLE1BQU0sQ0FBQyxZQUFZLEdBQUcsZUFBZSxDQUFDLENBQUM7b0JBRzVDLElBQUksU0FBUzt3QkFDWCxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FDMUI7NEJBQ0UsR0FBRyxVQUFVOzRCQUNiLE9BQU8sQ0FBQyxRQUFROzRCQUNoQixPQUFPLENBQUMsT0FBTzs0QkFDZixPQUFPLENBQUMsZUFBZSxFQUFFLE9BQU8sQ0FBQyxTQUFTO3lCQUMzQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyx1V0FBdVc7NEJBQ3ZYLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7NEJBQzlDLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FDakQsQ0FBQyxDQUFDLDBKQUEwSjtvQkFFL0osT0FBTyxlQUFlLENBQ3BCLFFBQVEsRUFDUixNQUFNLENBQUMsWUFBWSxDQUNwQixDQUFDO2dCQUVKLENBQUM7WUFFSCxDQUFDLENBQUMsRUFBRSxDQUFDO1lBRUwsQ0FBQyxLQUFLLFVBQVUsc0JBQXNCO2dCQUNwQyxJQUFJLGdCQUFnQixHQUFnQiw0QkFBNEIsQ0FDOUQsR0FBRyxDQUFDLFdBQVcsRUFDZixNQUFNLENBQUMsTUFBTSxHQUFHLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUVuQyxJQUFJLENBQUMsZ0JBQWdCO29CQUNuQixPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUNBQW1DLENBQUMsQ0FBQztnQkFFMUQsSUFBSSxDQUFDLGdCQUFnQjtvQkFBRSxPQUFPO2dCQUU5QixJQUFJLFFBQVEsR0FBYTtvQkFDdkIsTUFBTSxDQUFDLFVBQVUsR0FBRyxhQUFhLEVBQUUsR0FBRyxRQUFRO29CQUM5QyxNQUFNLENBQUMsVUFBVSxHQUFHLFVBQVU7b0JBQzlCLE1BQU0sQ0FBQyxVQUFVLEdBQUcsaUJBQWlCO29CQUNyQyxNQUFNLENBQUMsVUFBVSxHQUFHLFVBQVU7b0JBQzlCLE1BQU0sQ0FBQyxVQUFVLEdBQUcsUUFBUTtvQkFDNUIsTUFBTSxDQUFDLFVBQVUsR0FBRyxVQUFVO29CQUM5QixNQUFNLENBQUMsVUFBVSxHQUFHLFFBQVE7b0JBQzVCLE1BQU0sQ0FBQyxVQUFVLEdBQUcsc0JBQXNCO2lCQUMzQyxDQUFDO2dCQUVGLElBQUksR0FBRyxLQUFLLGlCQUFpQjtvQkFDM0IsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxVQUFVLEdBQUcsb0JBQW9CLENBQUM7Z0JBRXpELElBQUksY0FBYyxHQUFHO29CQUNuQixZQUFZLENBQUMsZUFBZTtvQkFDNUIsWUFBWSxDQUFDLE1BQU07b0JBQ25CLFlBQVksQ0FBQyxRQUFRO29CQUNyQixZQUFZLENBQUMsTUFBTTtpQkFDcEIsQ0FBQyxDQUFDLDRHQUE0RztnQkFFL0csSUFBSSxTQUFTLEVBQUUsQ0FBQztvQkFDZCxJQUFJLEtBQUssR0FBVyxDQUFDLENBQUM7b0JBQ3RCLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTt3QkFDMUIsSUFDRTs0QkFDRSxHQUFHLFVBQVU7NEJBQ2IsT0FBTyxDQUFDLGdCQUFnQjs0QkFDeEIsT0FBTyxDQUFDLFFBQVE7NEJBQ2hCLE9BQU8sQ0FBQyxlQUFlOzRCQUN2QixPQUFPLENBQUMsT0FBTzs0QkFDZixPQUFPLENBQUMsVUFBVTs0QkFDbEIsT0FBTyxDQUFDLFVBQVU7NEJBQ2xCLE9BQU8sQ0FBQyxVQUFVOzRCQUNsQixPQUFPLENBQUMsVUFBVTs0QkFDbEIsT0FBTyxDQUFDLFNBQVM7NEJBQ2pCLE9BQU8sQ0FBQyxTQUFTLEVBQUUsNEVBQTRFOzRCQUMvRixPQUFPLENBQUMsZUFBZTs0QkFDdkIsT0FBTyxDQUFDLFNBQVM7eUJBQ2xCLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQzs0QkFFakIsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLHFSQUFxUjs2QkFDN1IsSUFBSSxjQUFjLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUM7NEJBQ3hDLElBQUksVUFBVSxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7NEJBQ3pDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLDBGQUEwRjs0QkFDdkksUUFBUSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsbUNBQW1DOzRCQUN2RSxLQUFLLEdBQUcsU0FBUyxDQUFDLENBQUMsMEdBQTBHO3dCQUMvSCxDQUFDOzZCQUFNLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDOzRCQUFFLEtBQUssR0FBRyxDQUFDLENBQUM7d0JBRXRKLHFCQUFxQixDQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUNuRCxDQUFDLENBQUMsQ0FBQztnQkFDTCxDQUFDO2dCQUVELElBQUksVUFBVSxHQUFpQixlQUFlLENBQzVDLFFBQVEsRUFDUixNQUFNLENBQUMsVUFBVSxDQUNsQixDQUFDO2dCQUVGLElBQUksVUFBVSxDQUFDLE1BQU0sS0FBSyxDQUFDO29CQUN6QixPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0NBQXNDLENBQUMsQ0FBQztnQkFFN0QsSUFBSSxNQUFNLEtBQUssT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDO29CQUNqQyw0RkFBNEY7b0JBQzVGLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO3dCQUN4QixVQUFVLEdBQUcsVUFBVTs2QkFDcEIsTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLDhCQUE4QixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDbkUsQ0FBQzs0QkFDRCxVQUFVLEdBQUcsVUFBVTtpQ0FDcEIsTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsOEJBQThCLENBQUMsQ0FBQyxDQUFDO2dCQUM3RSxDQUFDO2dCQUVELHNDQUFzQyxDQUFDO29CQUNyQyxNQUFNLEVBQUUsd0JBQXdCLENBQUMsVUFBVSxDQUFpQjtvQkFDNUQsU0FBUyxFQUFFLEdBQUcsQ0FBQyxTQUFTO29CQUN4QixRQUFRLEVBQUU7d0JBQ1IsYUFBYSxFQUFFLGFBQWE7d0JBQzVCLEVBQUUsRUFBRSxnQkFBZ0IsQ0FBQyxrQkFBaUM7cUJBQ3ZEO29CQUNELFNBQVMsRUFBRSxHQUFHLENBQUMsV0FBVztpQkFDM0IsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUVMOzs7Ozs7ZUFNRztZQUNILFNBQVMscUJBQXFCLENBQzVCLFFBQWtCLEVBQ2xCLFNBQWlCLEVBQ2pCLEtBQWEsRUFDYixNQUFjO2dCQUVkLElBQUksQ0FBQyxLQUFLLElBQUksS0FBSyxLQUFLLENBQUM7b0JBQUUsT0FBTztnQkFDbEMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1lBQzVDLENBQUM7WUFFRDs7Ozs7ZUFLRztZQUNILFNBQVMsZUFBZSxDQUFDLFFBQWtCLEVBQUUsTUFBYztnQkFDekQsSUFBSSxNQUFNLEdBQWlCLEVBQUUsRUFDM0IsV0FBVyxHQUFpQiw2QkFBNkIsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFFcEUsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFO29CQUNyQixJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBQyxzREFBc0Q7d0JBQ2xGLFdBQVc7NEJBQ1QsdUdBQXVHOzZCQUN0RyxNQUFNLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUNkLHlCQUF5QixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQzlDOzZCQUNBLE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDOzt3QkFFdkMsTUFBTSxDQUFDLElBQUksQ0FDVCxTQUFTLENBQUMsS0FBSyxFQUFFLFdBQVcsQ0FBZSxDQUM1QyxDQUFDO2dCQUNOLENBQUMsQ0FBQyxDQUFDO2dCQUVILE9BQU8sTUFBTSxDQUFDO1lBQ2hCLENBQUM7UUFDSCxDQUFDO0lBRUgsQ0FBQztDQUNGLENBQUMsQ0FBQztBQUVILE1BQU0saUJBQWlCLEdBQUcsSUFBSSxNQUFNLENBQUM7SUFDbkMsS0FBSyxFQUFFLG1CQUFtQjtJQUMxQixLQUFLLEVBQUU7UUFDTCxFQUFFLEVBQUUsbUJBQW1CO1FBQ3ZCLEVBQUUsRUFBRSxlQUFlO1FBQ25CLEVBQUUsRUFBRSx3QkFBd0I7S0FDN0I7SUFDRCxXQUFXLEVBQUUsSUFBSSxnQkFBZ0IsRUFBRTtJQUNuQyxTQUFTLEVBQUUsQ0FBQyxHQUFHLGdCQUFnQixDQUFDO0lBQ2hDLE9BQU8sRUFBRSxHQUFhLEVBQUU7UUFDdEIsaUJBQWlCLENBQUMsZUFBZSxHQUFHLENBQUMsR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUMvRCxDQUFDLEtBQUssRUFBRSxFQUFFLENBQ1IsS0FBSyxLQUFLLE1BQU0sQ0FBQyxZQUFZLEdBQUcsY0FBYyxHQUFHLE1BQU07WUFDdkQsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FDeEMsQ0FBQztRQUVGLFdBQVcsRUFBRSxDQUFDO1FBQ2QsT0FBTyxpQkFBaUIsQ0FBQyxlQUFlLENBQUM7SUFDM0MsQ0FBQztJQUNELGdCQUFnQixFQUFFLEdBQUcsRUFBRSxDQUFDLGlCQUFpQixDQUFDLGdCQUFnQixDQUFDLGlCQUFpQixFQUFFLE1BQU0sQ0FBQyxhQUFhLENBQUM7Q0FDcEcsQ0FBQyxDQUFDO0FBRUgsTUFBTSxTQUFTLEdBQUcsSUFBSSxNQUFNLENBQUM7SUFDM0IsS0FBSyxFQUFFLGtCQUFrQjtJQUN6QixLQUFLLEVBQUU7UUFDTCxFQUFFLEVBQUUsZUFBZTtRQUNuQixFQUFFLEVBQUUsc0NBQXNDO1FBQzFDLEVBQUUsRUFBRSxRQUFRO0tBQ2I7SUFDRCxXQUFXLEVBQUUsSUFBSSxnQkFBZ0IsRUFBRTtJQUNuQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLEdBQUcsVUFBVSxFQUFFLEVBQUU7UUFDN0IsSUFBSSxRQUFRLEdBQWEsU0FBUyxDQUFDLE1BQU0sQ0FBQztRQUUxQyxDQUFDLFNBQVMsYUFBYTtZQUNyQixJQUFJLElBQUksS0FBSyxZQUFZLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQ2xDLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBVSxHQUFHLG9CQUFvQixDQUFDLENBQUM7WUFDbkQsQ0FBQztpQkFDSSxJQUFJLElBQUksS0FBSyxZQUFZLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQ3hDLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBVSxHQUFHLFdBQVcsQ0FBQyxDQUFDO1lBQzFDLENBQUM7aUJBQ0ksSUFBSSxJQUFJLEtBQUssWUFBWSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBRTlDLENBQUM7WUFFRCxTQUFTLE1BQU0sQ0FBQyxLQUFhLEVBQUUsUUFBZ0IsQ0FBQztnQkFDOUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFBO1lBQ2pELENBQUM7UUFDSCxDQUFDLENBQUMsRUFBRSxDQUFDO1FBRUwsUUFBUSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUN2QixJQUFJLEtBQUssQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO2dCQUN2QixLQUFLLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsS0FBSyxHQUFHLFVBQVUsQ0FBQyxDQUFDO1lBQ2pELFdBQVcsQ0FBQztnQkFDWixLQUFLLEVBQUUsUUFBUSxDQUFDLEtBQUssQ0FBQztnQkFDdEIsU0FBUyxFQUFFLFlBQVksQ0FBQyxLQUFLLENBQUM7Z0JBQzlCLFNBQVMsRUFBRSxTQUFTLENBQUMsV0FBVztnQkFDaEMsaUJBQWlCLEVBQUUsSUFBSTtnQkFDdkIsaUJBQWlCLEVBQUUsSUFBSTtnQkFDdkIsUUFBUSxFQUFFLFNBQVMsQ0FBQyxXQUFXO2FBQ2hDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO1FBRUgsU0FBUyxRQUFRLENBQUMsS0FBSztZQUNyQixJQUFJLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztnQkFDakMsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNuQixPQUFPLFNBQVMsQ0FBQyxLQUFLLEVBQUUsNkJBQTZCLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxTQUFTLENBQUE7UUFDNUUsQ0FBQztJQUNILENBQUM7SUFDRCxnQkFBZ0IsRUFBRSxLQUFLLEVBQUUsT0FBZSxVQUFVLEVBQUUsRUFBRTtRQUNwRCxJQUFJLENBQUMsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLFlBQVksQ0FBQyxRQUFRLEVBQUUsWUFBWSxDQUFDLFlBQVksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFBRSxPQUFPO1FBRXJHLGlCQUFpQixDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUEsK0ZBQStGO1FBRTdJLElBQUksVUFBb0IsRUFBRSxNQUFnQixFQUFFLE1BQWdCLENBQUM7UUFHN0QsSUFBSSxJQUFJLEtBQUssWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2xDLFVBQVUsR0FBRyxDQUFDLGFBQWEsRUFBRSxZQUFZLEVBQUUsYUFBYSxFQUFFLFdBQVcsRUFBRSxvQkFBb0IsRUFBRSxjQUFjLEVBQUUsWUFBWSxDQUFDLENBQUM7WUFDM0gsTUFBTSxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDekIsTUFBTSxHQUFHLENBQUMsYUFBYSxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBQ3pDLENBQUM7YUFDSSxJQUFJLElBQUksS0FBSyxZQUFZLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDeEMsVUFBVSxHQUFHLENBQUMsc0JBQXNCLEVBQUUsY0FBYyxFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUUsc0JBQXNCLEVBQUUsWUFBWSxFQUFFLGFBQWEsQ0FBQyxDQUFDO1lBQ3pJLE1BQU0sR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQzFCLE1BQU0sR0FBRyxDQUFDLHFCQUFxQixFQUFFLFlBQVksQ0FBQyxDQUFDO1FBQ2pELENBQUM7YUFDSSxJQUFJLElBQUksS0FBSyxZQUFZLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDNUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztZQUNoQixNQUFNLEdBQUcsRUFBRSxDQUFDO1lBQ1osTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNkLENBQUM7UUFBQSxDQUFDO1FBRUYsSUFBSSxNQUFtQixFQUNyQixPQUFtQixFQUNuQixTQUFTLEdBQUcsQ0FBQyxlQUFlLEVBQUUsZUFBZSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFdEUsTUFBTSxrQkFBa0IsQ0FBQyxZQUFZLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDbkQsTUFBTSxrQkFBa0IsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFFM0MsTUFBTSwrQkFBK0IsQ0FBQztZQUNwQyxNQUFNLEVBQUUsSUFBSTtZQUNaLE9BQU8sRUFBRSxNQUFNLENBQUMsVUFBVTtZQUMxQixTQUFTLEVBQUUsU0FBUyxDQUFDLFdBQVc7WUFDaEMsY0FBYyxFQUFFLEtBQUs7WUFDckIsTUFBTSxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFBLEVBQUUsQ0FBQSxTQUFTLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUMzRCxDQUFDLENBQUM7UUFHSCxLQUFLLFVBQVUsa0JBQWtCLENBQUMsS0FBYSxFQUFFLElBQWM7WUFDN0QsTUFBTSxHQUFHLDRCQUE0QixDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLE1BQU0sR0FBRyxLQUFLLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFbEcsSUFBSSxDQUFDLE1BQU07Z0JBQUUsT0FBTztZQUVwQixJQUFJLEtBQUssS0FBSyxZQUFZLEVBQUUsQ0FBQztnQkFDM0IsT0FBTyxHQUFHLENBQUM7d0JBQ1QsdUJBQXVCO3dCQUN2QixFQUFFO3dCQUNGLFlBQVk7d0JBQ1osRUFBRTt3QkFDRixTQUFTO3FCQUNWLENBQUMsQ0FBQztnQkFDSCxhQUFhLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO1lBRW5ELENBQUM7WUFFRCxNQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUMsR0FBRyxFQUFDLEVBQUU7Z0JBQ3JDLE9BQU8sR0FBRyxNQUFNLDZCQUE2QixDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUM7Z0JBRXRGLElBQUksQ0FBQyxPQUFPO29CQUFFLE9BQU87Z0JBRXJCLElBQUksS0FBSyxLQUFLLFFBQVEsRUFBRSxDQUFDO29CQUN2QixhQUFhLENBQUMsb0JBQW9CLENBQUMsS0FBSyxFQUFFLHFCQUFxQixDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsRUFBRSxNQUFNLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztnQkFDbkgsQ0FBQztnQkFFRCxhQUFhLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxTQUFTLENBQUMsQ0FBQztnQkFFMUMsSUFBSSxLQUFLLEtBQUssWUFBWSxFQUFFLENBQUM7b0JBQzNCLGFBQWEsQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLEVBQUUscUJBQXFCLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxFQUFFLE1BQU0sRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO2dCQUNuSCxDQUFDO3FCQUFNLElBQUksS0FBSyxLQUFLLFFBQVEsRUFBRSxDQUFDO29CQUM5QixhQUFhLENBQUMsb0JBQW9CLENBQUMsS0FBSyxFQUFFLHFCQUFxQixDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsRUFBRSxNQUFNLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztnQkFDL0csQ0FBQztxQkFBTSxJQUFJLEtBQUssS0FBSyxPQUFPLEVBQUUsQ0FBQztvQkFDN0IsT0FBTyxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsV0FBVyxHQUFHLFVBQVUsRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLFNBQVMsQ0FBQztvQkFDcEYsWUFBWSxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsQ0FBQztvQkFDbEMsYUFBYSxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsWUFBWSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFBO2dCQUNsRSxDQUFDO1lBRUgsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNKLFNBQVMsYUFBYSxDQUFDLE9BQW1CLEVBQUUsTUFBbUIsRUFBRSxLQUFlO2dCQUM5RSxJQUFJLENBQUMsT0FBTyxJQUFJLENBQUMsTUFBTTtvQkFBRSxPQUFPO2dCQUNoQyxzQ0FBc0MsQ0FBQztvQkFDckMsTUFBTSxFQUFFLENBQUMsT0FBTyxDQUFDO29CQUNqQixTQUFTLEVBQUUsS0FBSztvQkFDaEIsUUFBUSxFQUFFLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxhQUFhLEVBQUUsYUFBYSxFQUFFO29CQUN0RCxTQUFTLEVBQUUsU0FBUyxDQUFDLFdBQVc7aUJBQ2pDLENBQUMsQ0FBQztZQUNMLENBQUM7WUFDRCxTQUFTLG9CQUFvQixDQUFDLE1BQWMsRUFBRSxJQUE2RCxFQUFFLFFBQWdCLE9BQU87Z0JBQ2xJLE9BQU8sQ0FBQzt3QkFDTixLQUFLLEdBQUcsS0FBSyxHQUFHLFlBQVksR0FBRyxLQUFLO3dCQUNwQyxFQUFFO3dCQUNGLElBQUksQ0FBQyxFQUFFO3dCQUNQLEVBQUU7d0JBQ0YsSUFBSSxDQUFDLEVBQUU7cUJBQ1IsQ0FBQyxDQUFDO1lBQ0wsQ0FBQztZQUNELFNBQVMsWUFBWSxDQUFDLE9BQWtCLEVBQUUsUUFBZTtnQkFDdkQsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxHQUFHLFFBQVEsQ0FBQTtZQUNsRSxDQUFDO1FBQ0gsQ0FBQztRQUVELFNBQVMsU0FBUyxDQUFDLE1BQWEsRUFBRSxHQUFVO1lBQ3RDLEdBQUcsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sSUFBSSxPQUFPLENBQUMsQ0FBQyxDQUFDLE1BQU0sSUFBSSxRQUFRLENBQUM7WUFDL0QsT0FBTyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssR0FBRyxVQUFVLEdBQUcsVUFBVSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUE7UUFDcEYsQ0FBQztJQUNILENBQUM7Q0FDRixDQUFDLENBQUM7QUFFSCxNQUFNLGdCQUFnQixHQUFHLElBQUksTUFBTSxDQUFDO0lBQ2xDLEtBQUssRUFBRSxrQkFBa0I7SUFDekIsS0FBSyxFQUFFO1FBQ0wsRUFBRSxFQUFFLGtCQUFrQjtRQUN0QixFQUFFLEVBQUUsNEJBQTRCO1FBQ2hDLEVBQUUsRUFBRSxzQkFBc0I7S0FDM0I7SUFDRCxPQUFPLEVBQUUsR0FBRyxFQUFFO1FBRVosSUFBSSxRQUFRLEdBQUc7WUFDYjtnQkFDRSxVQUFVLEVBQUUsb0JBQW9CO2dCQUNoQyxNQUFNLEVBQUUsdUJBQXVCO2dCQUMvQixLQUFLLEVBQUUsQ0FBQyxNQUFNLENBQUMsVUFBVSxHQUFHLHNEQUFzRCxDQUFDO2dCQUNuRixNQUFNLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSxhQUFhLENBQUM7Z0JBQzVDLGFBQWEsRUFBRSxNQUFNLENBQUMsYUFBYSxHQUFHLHVCQUF1QjtnQkFDN0QsT0FBTyxFQUFFLENBQUMsTUFBTSxDQUFDLFlBQVksR0FBRyx1QkFBdUIsQ0FBQztnQkFDeEQsUUFBUSxFQUFFO29CQUNSLE1BQU0sQ0FBQyxXQUFXLEdBQUcsWUFBWTtvQkFDakMsTUFBTSxDQUFDLFdBQVcsR0FBRyxpQkFBaUI7b0JBQ3RDLE1BQU0sQ0FBQyxVQUFVLEdBQUcsZ0JBQWdCLEdBQUcsTUFBTTtvQkFDN0MsTUFBTSxDQUFDLFVBQVUsR0FBRyxjQUFjLEdBQUcsTUFBTTtpQkFDNUM7YUFDRjtZQUNEO2dCQUNFLFVBQVUsRUFBRSxhQUFhO2dCQUN6QixNQUFNLEVBQUUsdUJBQXVCO2dCQUMvQixLQUFLLEVBQUUsQ0FBQyxNQUFNLENBQUMsWUFBWSxHQUFHLE9BQU8sQ0FBQztnQkFDdEMsTUFBTSxFQUFFLENBQUMsZUFBZSxFQUFFLGNBQWMsQ0FBQztnQkFDekMsYUFBYSxFQUFFLE1BQU0sQ0FBQyxhQUFhLEdBQUcsTUFBTSxHQUFHLGtCQUFrQjtnQkFDakUsT0FBTyxFQUFFLENBQUMsTUFBTSxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUM7Z0JBQ3ZDLFFBQVEsRUFBRTtvQkFDUixNQUFNLENBQUMsVUFBVSxHQUFHLGlCQUFpQjtvQkFDckMsTUFBTSxDQUFDLGNBQWMsR0FBRyxnQkFBZ0I7b0JBQ3hDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsaUJBQWlCO29CQUN0QyxNQUFNLENBQUMsVUFBVSxHQUFHLG1CQUFtQjtpQkFDeEM7YUFDRjtZQUNEO2dCQUNFLFVBQVUsRUFBRSxhQUFhO2dCQUN6QixNQUFNLEVBQUUsY0FBYztnQkFDdEIsS0FBSyxFQUFFLENBQUMsTUFBTSxDQUFDLFlBQVksR0FBRyxPQUFPLENBQUM7Z0JBQ3RDLE1BQU0sRUFBRSxDQUFDLG1CQUFtQixFQUFFLFlBQVksQ0FBQztnQkFDM0MsYUFBYSxFQUFFLE1BQU0sQ0FBQyxhQUFhLEdBQUcsTUFBTSxHQUFHLGtCQUFrQjtnQkFDakUsT0FBTyxFQUFFLENBQUMsTUFBTSxDQUFDLFlBQVksR0FBRyxPQUFPLENBQUM7Z0JBQ3hDLFFBQVEsRUFBRTtvQkFDUixNQUFNLENBQUMsWUFBWSxHQUFHLGNBQWMsRUFBQyw2QkFBNkI7b0JBQ2xFLE1BQU0sQ0FBQyxZQUFZLEdBQUcsWUFBWTtvQkFDbEMsTUFBTSxDQUFDLFlBQVksR0FBRyx3QkFBd0I7b0JBQzlDLGlCQUFpQixDQUFDLFVBQVU7aUJBQzdCO2FBQ0Y7U0FFRixDQUFDO1FBRUYsSUFBSSxTQUFTLEdBQUc7WUFDZCxFQUFFLEVBQUUsZ0JBQWdCO1lBQ3BCLEVBQUUsRUFBRSxtQkFBbUI7WUFDdkIsRUFBRSxFQUFFLG1CQUFtQjtTQUN4QixDQUFDO1FBRUYsSUFBSSxXQUFXLEdBQUc7WUFDaEI7Z0JBQ0UsRUFBRSxFQUFFLFFBQVE7Z0JBQ1osRUFBRSxFQUFFLFVBQVU7Z0JBQ2QsRUFBRSxFQUFFLE9BQU87YUFDWjtZQUNEO2dCQUNFLEVBQUUsRUFBRSxTQUFTO2dCQUNiLEVBQUUsRUFBRSxVQUFVO2dCQUNkLEVBQUUsRUFBRSxRQUFRO2FBQ2I7WUFDRDtnQkFDRSxFQUFFLEVBQUUsU0FBUztnQkFDYixFQUFFLEVBQUUsV0FBVztnQkFDZixFQUFFLEVBQUUsT0FBTzthQUNaO1NBQ0YsQ0FBQztRQUdGLElBQUksUUFBUSxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDOUIsSUFBSSxDQUFDLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM1QixPQUFPLElBQUksTUFBTSxDQUFDO2dCQUNoQixLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUU7Z0JBQzVDLEtBQUssRUFBRSxjQUFjLENBQUMsQ0FBQyxDQUFDO2dCQUN4QixXQUFXLEVBQUUsSUFBSSxnQkFBZ0IsRUFBRTtnQkFDbkMsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7Z0JBQzVCLGdCQUFnQixFQUFFLEdBQUcsRUFBRSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQzthQUMvQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUVILGdCQUFnQixDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFFckMsU0FBUyxjQUFjLENBQUMsQ0FBUztZQUMvQixJQUFJLEtBQUssR0FBRyxFQUFFLEdBQUcsU0FBUyxFQUFFLENBQUM7WUFDN0IsS0FBSyxDQUFDLGVBQWUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO1lBQ2hHLE9BQU8sS0FBSyxDQUFBO1FBQ2QsQ0FBQztRQUVELEtBQUssVUFBVSxVQUFVLENBQUMsQ0FBUyxFQUFFLFlBQXFCLEtBQUs7WUFDN0QsSUFBSSxHQUFHLEdBQUcsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3ZDLElBQUksTUFBTSxHQUFHLE1BQU0sWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ25DLElBQUksU0FBUztnQkFBRSxPQUFPLE1BQU0sQ0FBQztZQUU3QixNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUNyQixXQUFXLENBQUM7b0JBQ1YsU0FBUyxFQUFFLEdBQUcsQ0FBQyxXQUFXO29CQUMxQixpQkFBaUIsRUFBRSxJQUFJO29CQUN2QixpQkFBaUIsRUFBRSxJQUFJO29CQUN2QixLQUFLLEVBQUUsS0FBSztvQkFDWixTQUFTLEVBQUUsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDckMsQ0FBQyxDQUFDO1lBRUwsQ0FBQyxDQUFDLENBQUM7WUFFSCxLQUFLLFVBQVUsWUFBWSxDQUFDLEtBQWE7Z0JBQ3ZDLElBQUksT0FBTyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFDM0IsS0FBSyxHQUFHLENBQUMsR0FBRyxTQUFTLENBQUMsYUFBYSxDQUFDLENBQUM7Z0JBRXZDLENBQUMsU0FBUyxpQkFBaUI7b0JBQ3pCLElBQUksS0FBSyxLQUFLLENBQUMsRUFBRSxDQUFDO3dCQUNoQixLQUFLLENBQUMsT0FBTyxDQUNYLE1BQU0sQ0FBQyxXQUFXLEdBQUcsVUFBVSxFQUMvQixNQUFNLENBQUMsUUFBUSxHQUFHLE1BQU0sRUFDeEIsTUFBTSxDQUFDLFFBQVEsR0FBRyxxQkFBcUIsRUFDdkMsTUFBTSxDQUFDLFFBQVEsR0FBRyw0QkFBNEIsRUFDOUMsTUFBTSxDQUFDLFFBQVEsR0FBRyxVQUFVLEdBQUcsTUFBTSxFQUNyQyxNQUFNLENBQUMsUUFBUSxHQUFHLHFFQUFxRSxFQUN2RixNQUFNLENBQUMsUUFBUSxHQUFHLG1EQUFtRCxDQUN0RSxDQUFDO29CQUNKLENBQUM7eUJBQ0ksSUFBSSxLQUFLLEtBQUssQ0FBQyxFQUFFLENBQUM7d0JBQ3JCLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFBRSxNQUFNLENBQUMsS0FBSyxHQUFHLDBEQUEwRCxDQUFDLENBQUMsQ0FBQyxlQUFlO3dCQUVuSixJQUFJLFNBQVMsR0FDWDs0QkFDRSxNQUFNLENBQUMsY0FBYyxHQUFHLHFCQUFxQjs0QkFDN0MsTUFBTSxDQUFDLFlBQVksR0FBRyxPQUFPOzRCQUM3QixNQUFNLENBQUMsWUFBWSxHQUFHLG1CQUFtQjs0QkFDekMsTUFBTSxDQUFDLFlBQVksR0FBRyx5QkFBeUI7NEJBQy9DLE1BQU0sQ0FBQyxZQUFZLEdBQUcsaUJBQWlCOzRCQUN2QyxNQUFNLENBQUMsVUFBVSxHQUFHLGFBQWE7NEJBQ2pDLE1BQU0sQ0FBQyxVQUFVLEdBQUcsaUJBQWlCOzRCQUNyQyxNQUFNLENBQUMsVUFBVSxHQUFHLFVBQVU7NEJBQzlCLE1BQU0sQ0FBQyxVQUFVLEdBQUcsUUFBUTs0QkFDNUIsTUFBTSxDQUFDLFVBQVUsR0FBRyxNQUFNLEVBQUUsVUFBVTs0QkFDdEMsTUFBTSxDQUFDLFVBQVUsR0FBRyxzQkFBc0I7NEJBQzFDLE1BQU0sQ0FBQyxZQUFZLEdBQUcsa0JBQWtCOzRCQUN4QyxNQUFNLENBQUMsWUFBWSxHQUFHLE9BQU87NEJBQzdCLE1BQU0sQ0FBQyxhQUFhLEdBQUcsY0FBYzt5QkFDdEMsQ0FBQzt3QkFFSixLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxZQUFZLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxTQUFTLENBQUMsQ0FBQzt3QkFFM0UsSUFBSSxHQUFHLEdBQWE7NEJBQ2xCLE1BQU0sQ0FBQyxZQUFZLEdBQUcseUJBQXlCOzRCQUMvQyxNQUFNLENBQUMsWUFBWSxHQUFHLGlCQUFpQjs0QkFDdkMsTUFBTSxDQUFDLFlBQVksR0FBRyxxQkFBcUI7NEJBQzNDLE1BQU0sQ0FBQyxZQUFZLEdBQUcsbUJBQW1COzRCQUN6QyxNQUFNLENBQUMsYUFBYSxHQUFHLFlBQVk7eUJBQ3BDLENBQUM7d0JBRUYsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO29CQUNyQixDQUFDO29CQUFBLENBQUM7Z0JBRUosQ0FBQyxDQUFDLEVBQUUsQ0FBQztnQkFFTCxJQUFJLFFBQVEsR0FBRyxNQUFNLE9BQU8sQ0FBQyxHQUFHLENBQzlCLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyxFQUFFO29CQUN0QixJQUFJLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQzt3QkFDakMsT0FBTyxNQUFNLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQTs7d0JBQzdCLE9BQU8sTUFBTSxZQUFZLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQTtnQkFDcEYsQ0FBQyxDQUFDLENBQ0gsQ0FBQztnQkFFRixPQUFPLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFHdkMsS0FBSyxVQUFVLFlBQVksQ0FBQyxLQUFhLEVBQUUsY0FBdUIsS0FBSztvQkFDckUsSUFBSSxXQUFXLEVBQUUsQ0FBQzt3QkFDaEIsT0FBTyxTQUFTLENBQUMsS0FBSyxFQUFFLDZCQUE2QixDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksU0FBUyxDQUFDO29CQUM3RSxDQUFDO29CQUFBLENBQUM7b0JBRUYsSUFBSSxJQUFJLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDO29CQUM1QyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLGVBQWUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7d0JBQUUsT0FBTyxDQUFBLDhHQUE4RztvQkFFdkwsSUFBSSxJQUFJLEtBQUssUUFBUTt3QkFDbkIsT0FBTyxNQUFNLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7eUJBQ3pELElBQUksSUFBSSxLQUFLLFlBQVk7d0JBQzVCLE9BQU8sTUFBTSxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDOzt3QkFDN0QsT0FBTyxXQUFXLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7b0JBRXZDLFNBQVMsV0FBVyxDQUFDLElBQWM7d0JBQ2pDLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDbkQsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUEsb0pBQW9KO3dCQUN6TCxPQUFPLEtBQUssQ0FBQTtvQkFDZCxDQUFDO2dCQUVILENBQUM7Z0JBRUQsS0FBSyxVQUFVLGdCQUFnQixDQUFDLElBQVksRUFBRSxNQUFjO29CQUMxRCxPQUFPLE1BQU0sNkJBQTZCLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxlQUFlLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLENBQUMsRUFBRSxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQTtnQkFDNUgsQ0FBQztZQUVILENBQUM7UUFFSCxDQUFDO1FBRUQsS0FBSyxVQUFVLG1CQUFtQixDQUFDLENBQVM7WUFDMUMsSUFBSSxHQUFHLEdBQUcsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3ZDLGlCQUFpQixDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUEsdUdBQXVHO1lBQy9JLElBQUksQ0FBQyxLQUFLLENBQUM7Z0JBQ1QsbUJBQW1CLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO2lCQUNsQyxJQUFJLENBQUMsS0FBSyxDQUFDO2dCQUNkLGlCQUFpQixDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUEsK0RBQStEO1lBQ3pHLE1BQU0sWUFBWSxFQUFFLENBQUM7WUFDckIsS0FBSyxVQUFVLFlBQVk7Z0JBQ3pCLElBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7Z0JBQ2hDLE1BQU0saUJBQWlCLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM1QyxNQUFNLGlCQUFpQixDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDN0MsTUFBTSxpQkFBaUIsQ0FBQyxlQUFlLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsRUFBRSxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7Z0JBRTFGLEtBQUssVUFBVSxpQkFBaUIsQ0FBQyxLQUFhLEVBQUUsR0FBVyxFQUFFLE1BQWU7b0JBQzFFLElBQUksTUFBTSxHQUFtQixVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBRS9DLElBQUksQ0FBQyxNQUFNO3dCQUFFLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQ0FBaUMsRUFBRSxLQUFLLENBQUMsQ0FBQztvQkFFMUUsSUFBSSxLQUFpQixFQUFFLEtBQWUsQ0FBQztvQkFFdkMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsWUFBWSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztvQkFFaEYsSUFBSSxNQUFNO3dCQUNSLEtBQUssR0FBRyxTQUFTLENBQUMsS0FBSyxFQUFFLDZCQUE2QixDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksU0FBUyxDQUFDOzt3QkFFN0UsS0FBSyxHQUFHLE1BQU0sNkJBQTZCLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztvQkFFbEYsSUFBSSxDQUFDLEtBQUs7d0JBQUUsT0FBTztvQkFHbkIsc0NBQXNDLENBQUM7d0JBQ3JDLE1BQU0sRUFBRSxDQUFDLEtBQUssQ0FBQzt3QkFDZixRQUFRLEVBQUU7NEJBQ1IsRUFBRSxFQUFFLE1BQU07NEJBQ1YsYUFBYSxFQUFFLGFBQWE7eUJBQzdCO3dCQUNELFNBQVMsRUFBRSxHQUFHLENBQUMsV0FBVzt3QkFDMUIsU0FBUyxFQUFFLEtBQUs7cUJBQ2pCLENBQUMsQ0FBQztvQkFHSCxTQUFTLFVBQVUsQ0FBQyxRQUFnQjt3QkFDbEMsT0FBTyw0QkFBNEIsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxNQUFNLEdBQUcsUUFBUSxHQUFHLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ2hILENBQUM7Z0JBRUgsQ0FBQztZQUNILENBQUM7WUFBQSxDQUFDO1lBQ0YsV0FBVyxFQUFFLENBQUM7UUFFaEIsQ0FBQztJQUVILENBQUM7Q0FDRixDQUFDLENBQUM7QUFFSCxNQUFNLGdCQUFnQixHQUFHLElBQUksTUFBTSxDQUFDO0lBQ2xDLEtBQUssRUFBRSxrQkFBa0I7SUFDekIsS0FBSyxFQUFFO1FBQ0wsRUFBRSxFQUFFLHVCQUF1QjtRQUMzQixFQUFFLEVBQUUsd0JBQXdCO1FBQzVCLEVBQUUsRUFBRSwyQkFBMkI7S0FDaEM7SUFDRCxPQUFPLEVBQUUsQ0FBQyxpQkFBMEIsS0FBSyxFQUFFLEVBQUU7UUFDM0MseUlBQXlJO1FBQ3pJLGdCQUFnQixDQUFDLFFBQVEsR0FBRyxDQUFDLGlCQUFpQixFQUFFLGlCQUFpQixDQUFDLENBQUM7UUFDbkUsa0ZBQWtGO1FBRWxGLElBQUksa0JBQWtCLEtBQUssWUFBWSxDQUFDLFVBQVU7WUFDaEQsZ0JBQWdCLENBQUMsUUFBUSxHQUFHLENBQUMsaUJBQWlCLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQTtRQUVuRSx1SEFBdUg7UUFDdkgsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7WUFDekQsT0FBTyxLQUFLLENBQUM7WUFBRSxnQkFBZ0IsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBRWpFLElBQUksY0FBYztZQUFFLE9BQU8sZ0JBQWdCLENBQUMsUUFBUSxDQUFDO0lBQ3ZELENBQUM7Q0FDRixDQUFDLENBQUM7QUFFSCxNQUFNLGNBQWMsR0FBRyxJQUFJLE1BQU0sQ0FBQztJQUNoQyxLQUFLLEVBQUUsZ0JBQWdCO0lBQ3ZCLEtBQUssRUFBRSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLGFBQWEsRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFO0lBQzFELFdBQVcsRUFBRSxJQUFJLGdCQUFnQixFQUFFO0lBQ25DLFNBQVMsRUFBRSxDQUFDLEdBQUcsZ0JBQWdCLENBQUM7SUFDaEMsT0FBTyxFQUFFLEdBQWEsRUFBRTtRQUN0Qiw0Q0FBNEM7UUFDNUMsY0FBYyxDQUFDLGVBQWUsR0FBRztZQUMvQixHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTztZQUN6QixHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCO1lBQ2xDLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRO1lBQzFCLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTO1NBQzVCLENBQUM7UUFFRiw4RUFBOEU7UUFDOUUsV0FBVyxFQUFFLENBQUM7UUFDZCxnR0FBZ0c7UUFDaEcsbUNBQW1DO1FBQ25DLE9BQU8sY0FBYyxDQUFDLGVBQWUsQ0FBQztJQUN4QyxDQUFDO0lBQ0QsZ0JBQWdCLEVBQUUsQ0FBQyxNQUFjLGNBQWMsRUFBRSxTQUFpQixNQUFNLENBQUMsV0FBVyxFQUFFLEVBQUU7UUFDdEYsSUFBSSxjQUFjLEdBQUcsR0FBRyxDQUFDLFdBQVcsQ0FBQztRQUVyQyxDQUFDLFNBQVMsNkJBQTZCO1lBQ3JDLElBQUksQ0FBQyxDQUFDLGNBQWMsRUFBRSxjQUFjLENBQUMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDO2dCQUFFLE9BQU87WUFFNUQsSUFBSSxvQkFBb0IsR0FBRyxTQUFTLENBQ2xDLE1BQU0sR0FBRyxpQkFBaUIsRUFDMUIsNkJBQTZCLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUV6QyxJQUFJLENBQUMsb0JBQW9CO2dCQUN2QixPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsNEJBQTRCLENBQUMsQ0FBQztZQUVuRCxJQUFJLE9BQU8sR0FBRyxtQkFBbUIsQ0FBQztnQkFDaEMsU0FBUyxFQUFFLDRCQUE0QixDQUNyQyxjQUFjLEVBQ2QsTUFBTSxHQUFHLGdCQUFnQixDQUMxQixDQUFDLENBQUMsQ0FBQyxFQUFFLGtCQUFvQyxFQUFFLHNDQUFzQztnQkFDbEYsS0FBSyxFQUFFLDZCQUE2QjtnQkFDcEMsS0FBSyxFQUNMO29CQUNFLEVBQUUsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQzVELEVBQUUsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQzVELEVBQUUsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7aUJBQzdEO2dCQUNELE9BQU8sRUFBRSxDQUFDLG9CQUFvQixDQUFDO2dCQUMvQixTQUFTLEVBQUUsR0FBRyxDQUFDLFNBQVM7YUFDekIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ04sT0FBTyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUU7Z0JBQ3JDLElBQUksU0FBUyxHQUNYLE1BQU0sR0FBRyxnQkFBZ0IsQ0FBQztnQkFDNUIsNEJBQTRCLENBQUMsWUFBWSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsT0FBTyxDQUFDO3FCQUN0RSxPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDcEQsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsRUFBRSxDQUFDO1FBRUwsQ0FBQyxTQUFTLHFCQUFxQjtZQUM3QiwyRUFBMkU7WUFDM0UsSUFBSSxjQUFjLEdBQWE7Z0JBQzdCLGNBQWM7Z0JBQ2QsZ0JBQWdCO2dCQUNoQixjQUFjO2dCQUNkLGFBQWE7YUFDZCxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsYUFBYSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQSxpRkFBaUY7WUFFbEksSUFBSSxNQUF3QixDQUFDO1lBRTdCLHFGQUFxRjtZQUNyRixNQUFNLEdBQUcsNEJBQTRCLENBQ25DLGNBQWMsRUFDZCxNQUFNLEdBQUcsZ0JBQWdCLEVBQ3pCLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUNuQixDQUFDO1lBQ0YscUJBQXFCLENBQ25CLENBQUMsR0FBRyxjQUFjLENBQUMsRUFDbkI7Z0JBQ0UsYUFBYSxFQUFFLFVBQVU7Z0JBQ3pCLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO2FBQ2QsRUFDRCw2QkFBNkIsQ0FDOUIsQ0FBQztZQUVGLDRIQUE0SDtZQUM1SCxNQUFNLEdBQUcsNEJBQTRCLENBQ25DLGNBQWMsRUFDZCxNQUFNLENBQUMsVUFBVSxHQUFHLGtCQUFrQixDQUN2QyxDQUFDO1lBRUYscUJBQXFCLENBQ25CLENBQUMsR0FBRyxjQUFjLENBQUMsRUFDbkI7Z0JBQ0UsYUFBYSxFQUFFLFVBQVU7Z0JBQ3pCLEVBQUUsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7YUFDOUIsRUFDRCx1QkFBdUIsQ0FDeEIsQ0FBQztZQUVGLCtEQUErRDtZQUMvRCxNQUFNLEdBQUcsNEJBQTRCLENBQ25DLGNBQWMsRUFDZCxNQUFNLEdBQUcsT0FBTyxDQUNqQixDQUFDO1lBRUYscUJBQXFCLENBQ25CLENBQUMsR0FBRyxjQUFjLENBQUMsRUFDbkI7Z0JBQ0UsYUFBYSxFQUFFLFVBQVU7Z0JBQ3pCLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsc0JBQXFDO2FBQ3BELEVBQ0Qsb0JBQW9CLENBQ3JCLENBQUM7WUFFRix1RkFBdUY7WUFDdkYsTUFBTSxHQUFHLDRCQUE0QixDQUNuQyxjQUFjLEVBQ2QsTUFBTSxDQUFDLFVBQVU7Z0JBQ2pCLDBCQUEwQixDQUMzQixDQUFDO1lBQ0YscUJBQXFCLENBQ25CLENBQUMsR0FBRyxjQUFjLENBQUMsRUFDbkI7Z0JBQ0UsYUFBYSxFQUFFLFVBQVU7Z0JBQ3pCLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO2FBQ2QsRUFDRCx1QkFBdUIsQ0FDeEIsQ0FBQztZQUVGLG1GQUFtRjtZQUNuRixNQUFNLEdBQUcsNEJBQTRCLENBQ25DLGNBQWMsRUFDZCxzQkFBc0IsRUFDdEIsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQ25CLENBQUM7WUFDRixxQkFBcUIsQ0FDbkIsQ0FBQyxHQUFHLGNBQWMsQ0FBQyxFQUNuQjtnQkFDRSxhQUFhLEVBQUUsYUFBYTtnQkFDNUIsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7YUFDZCxFQUNELG1DQUFtQyxDQUNwQyxDQUFDO1lBRUY7Ozs7OztjQU1FO1lBQ0YsS0FBSyxVQUFVLHFCQUFxQixDQUNsQyxJQUFjLEVBQ2QsUUFBNEQsRUFDNUQsZUFBdUI7Z0JBRXZCLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRTtvQkFBRSxPQUFPO2dCQUV6QixJQUFJLFVBQVUsR0FBYSxFQUFFLENBQUM7Z0JBQzlCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtvQkFDZiwrSkFBK0o7b0JBQy9KLElBQUksTUFBTSxHQUFXLElBQUksTUFBTSxDQUFDO3dCQUM5QixLQUFLLEVBQ0gsT0FBTzs0QkFDUCxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQ3pCLFFBQVE7NEJBQ1IsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSTt3QkFDMUIsS0FBSyxFQUFFOzRCQUNMLEVBQUUsRUFBRSxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUU7NEJBQ2hCLEVBQUUsRUFBRSxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUU7eUJBQ2pCO3dCQUNELFFBQVEsRUFBRSxjQUFjO3dCQUN4QixPQUFPLEVBQUUsS0FBSyxJQUFJLEVBQUU7NEJBQ2xCLE1BQU0seUJBQXlCLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxpR0FBaUc7NEJBQ3ZJLG1GQUFtRjs0QkFDbkYsSUFBSSxZQUFZLENBQUMsYUFBYSxDQUFDLEdBQUcsR0FBRyxlQUFlLENBQUM7Z0NBQ25ELGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxDQUFDO3dCQUN0QyxDQUFDO3FCQUNGLENBQUMsQ0FBQztvQkFDSCxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUMxQixDQUFDLENBQUMsQ0FBQztnQkFDSCx3QkFBd0IsQ0FBQyxVQUFVLEVBQUUsUUFBUSxFQUFFLGVBQWUsQ0FBQyxDQUFDO1lBQ2xFLENBQUM7UUFDSCxDQUFDLENBQUMsRUFBRSxDQUFDO1FBRUwsQ0FBQyxTQUFTLHlCQUF5QjtZQUNqQywrRUFBK0U7WUFDL0UsSUFBSSxZQUFZLEdBQVcsTUFBTSxDQUFDLFVBQVUsR0FBRyxpQkFBaUIsQ0FBQztZQUVqRSxJQUFJLFdBQVcsR0FBRyxNQUFNLENBQUMsVUFBVSxHQUFHLDZCQUE2QixDQUFDO1lBRXBFLGFBQWEsQ0FDWCxZQUFZLEVBQ1osNEJBQTRCLENBQUMsY0FBYyxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUM3RCxDQUFDO1lBQ0YsV0FBVyxHQUFHLE1BQU0sQ0FBQyxVQUFVLEdBQUcsbUJBQW1CLENBQUE7WUFDckQsd0JBQXdCO1lBQ3hCLGFBQWEsQ0FDWCxZQUFZLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsRUFDckMsNEJBQTRCLENBQUMsY0FBYyxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUM1RCxJQUFJLENBQ0wsQ0FBQztRQUNKLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFFTCxTQUFTLGFBQWEsQ0FDcEIsWUFBb0IsRUFDcEIsTUFBbUIsRUFDbkIsYUFBc0IsS0FBSztZQUUzQixJQUFJLENBQUMsTUFBTTtnQkFBRSxPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQztZQUV2RCxJQUFJLE9BQU8sR0FBZSxlQUFlLENBQUMsSUFBSSxDQUM1QyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQ04sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxZQUFZLENBQUM7Z0JBQ25DLHlCQUF5QixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQ2pELENBQUM7WUFFRixJQUFJLENBQUMsT0FBTztnQkFDVixPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUNBQW1DLEVBQUUsWUFBWSxDQUFDLENBQUM7WUFHeEUsSUFBSSxlQUFlLEdBQUcsbUJBQW1CLENBQUM7Z0JBQ3hDLFNBQVMsRUFBRSxNQUFNO2dCQUNqQixLQUFLLEVBQUUsWUFBWSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ25DLEtBQUssRUFBRTtvQkFDTCxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDakIsRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQ2xCO2dCQUNELE9BQU8sRUFBRSxDQUFDLE9BQU8sQ0FBQztnQkFDbEIsU0FBUyxFQUFFLEdBQUcsQ0FBQyxTQUFTO2FBQ3pCLENBQUMsQ0FBQztZQUVILElBQUksVUFBVTtnQkFDWixlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUNoRCw0QkFBNEIsQ0FBQyxZQUFZLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQy9HLENBQUM7UUFDTixDQUFDO1FBRUQsQ0FBQyxTQUFTLHlDQUF5QztZQUNqRCxJQUFJLEdBQUcsS0FBSyxjQUFjO2dCQUFFLE9BQU8sQ0FBQywyQ0FBMkM7WUFFL0UsSUFBSSxhQUFhLEdBQ2YsU0FBUyxDQUNQLE1BQU0sQ0FBQyxhQUFhLEdBQUcsc0JBQXNCLEVBQzdDLGtCQUFrQixDQUNuQixJQUFJLFNBQVMsQ0FBQztZQUVqQixJQUFJLENBQUMsYUFBYTtnQkFDaEIsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLHdDQUF3QyxDQUFDLENBQUM7WUFFL0QsSUFBSSxNQUFNLEdBQUcsNEJBQTRCLENBQ3ZDLGNBQWMsRUFDZCxNQUFNLENBQUMsVUFBVSxHQUFHLHNCQUFzQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFakQsSUFBSSxDQUFDLE1BQU07Z0JBQUUsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUM7WUFFMUQsSUFBSSxlQUFlLEdBQUcsbUJBQW1CLENBQUM7Z0JBQ3hDLFNBQVMsRUFBRSxNQUFNO2dCQUNqQixLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxHQUFHLGVBQWU7Z0JBQy9DLEtBQUssRUFBRTtvQkFDTCxFQUFFLEVBQUUsdUJBQXVCO29CQUMzQixFQUFFLEVBQUUseUJBQXlCO2lCQUM5QjtnQkFDRCxPQUFPLEVBQUUsQ0FBQyxhQUFhLENBQUM7Z0JBQ3hCLFNBQVMsRUFBRSxHQUFHLENBQUMsU0FBUzthQUN6QixDQUFDLENBQUM7WUFFSCxtTEFBbUw7WUFFbkwsYUFBYSxHQUFHLFNBQVMsQ0FDdkIsTUFBTSxDQUFDLFdBQVcsR0FBRyxzQkFBc0IsRUFDM0MsZ0JBQWdCLENBQ0gsQ0FBQztZQUVoQixJQUFJLENBQUMsYUFBYTtnQkFDaEIsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLGlEQUFpRCxDQUFDLENBQUM7WUFFeEUsYUFBYSxHQUFHLGVBQWUsQ0FBQyxhQUFhLENBQUMsQ0FBQTtZQUU5QyxhQUFhLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQywySkFBMko7WUFHaEwseUZBQXlGO1lBQ3pGLElBQUksT0FBTyxHQUFHLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUErQixDQUFDO1lBQ2pFLE9BQU8sQ0FBQyxXQUFXLENBQ2pCLG1CQUFtQixDQUFDO2dCQUNsQixTQUFTLEVBQUUsTUFBTTtnQkFDakIsS0FBSyxFQUFFLGNBQWMsQ0FBQyxLQUFLLEdBQUcsZUFBZTtnQkFDN0MsS0FBSyxFQUFFO29CQUNMLEVBQUUsRUFBRSx1QkFBdUI7b0JBQzNCLEVBQUUsRUFBRSxxQ0FBcUM7aUJBQzFDO2dCQUNELE9BQU8sRUFBRSxDQUFDLGFBQWEsQ0FBQztnQkFDeEIsU0FBUyxFQUFFLGNBQWMsQ0FBQyxTQUFTO2FBQ3BDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxrREFBa0Q7YUFDekQsQ0FBQztZQUVGLGlGQUFpRjtZQUNqRixLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUM3QyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUNyRSxDQUFDO1lBRUYsT0FBTyxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsR0FBRywwQkFBMEIsQ0FDNUQsT0FBTyxFQUNQLENBQUMsQ0FDRixDQUFDO1lBRUYsU0FBUyxtQkFBbUIsQ0FBQyxLQUFhO2dCQUN4QyxJQUFJLEdBQUcsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FDckUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLHlCQUF5QixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FDakYsQ0FBQztnQkFFRixJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztvQkFBRSxHQUFHLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN4RSxDQUFDO1FBQ0gsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUVMLENBQUMsU0FBUyw0QkFBNEI7WUFDcEMsSUFBSSxNQUFNLEdBQUcsNEJBQTRCLENBQUMsY0FBYyxFQUFFLE1BQU0sQ0FBQyxNQUFNLEdBQUcsMkJBQTJCLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzdILElBQUksQ0FBQyxNQUFNO2dCQUFFLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1lBRTNELElBQUksR0FBRyxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsVUFBVSxHQUFHLDRCQUE0QixHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLGNBQWMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsZUFBZSxDQUFDLENBQUM7WUFDakssSUFBSSxDQUFDLEdBQUc7Z0JBQUUsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUM7WUFFckQsc0NBQXNDLENBQ3BDO2dCQUNFLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQztnQkFDYixTQUFTLEVBQUUsZ0JBQWdCO2dCQUMzQixRQUFRLEVBQUUsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUU7Z0JBQ3RELFNBQVMsRUFBRSxjQUFjO2FBQzFCLENBQ0YsQ0FBQTtRQUNILENBQUMsQ0FBQyxFQUFFLENBQUM7UUFFTCxDQUFDLFNBQVMsK0JBQStCO1lBQ3ZDLDhIQUE4SDtZQUc5SCwrQkFBK0IsQ0FBQztnQkFDOUIsZUFBZSxFQUFFLE1BQU0sRUFBRTtnQkFDekIsU0FBUyxFQUFFLGdCQUFnQjtnQkFDM0IsU0FBUyxFQUFFLEVBQUUsRUFBRSxFQUFFLGNBQWMsRUFBRSxFQUFFLEVBQUUseUJBQXlCLEVBQUU7Z0JBQ2hFLFdBQVcsRUFBRSxvQkFBb0I7Z0JBQ2pDLE1BQU0sRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUM7cUJBQ3hDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFFLElBQUksS0FBSyxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUMsQ0FBZ0I7YUFDN0YsQ0FBQyxDQUFDO1lBRUgsU0FBUyxNQUFNO2dCQUNiLElBQUksUUFBUSxHQUFpQixFQUFFLENBQUM7Z0JBQ2hDLElBQUksS0FBSyxHQUFHLENBQUMsVUFBVSxFQUFFLE1BQU0sRUFBRSxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBRXRELElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO29CQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUVqSCxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQ25CLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxjQUFjLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMseUJBQXlCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQ2pHLENBQUM7Z0JBQ0YsT0FBTyx3QkFBd0IsQ0FBQyxRQUFRLENBQWlCLENBQUM7WUFDNUQsQ0FBQztZQUFBLENBQUM7UUFFSixDQUFDLENBQUMsRUFBRSxDQUFDO1FBRUwsQ0FBQyxTQUFTLHFCQUFxQjtZQUM3QixvREFBb0Q7WUFDcEQsSUFBSSxRQUFRLEdBQUcsNEJBQTRCLENBQ3pDLGNBQWMsRUFDZCxNQUFNLENBQUMsVUFBVSxHQUFHLG1CQUFtQixDQUN4QyxDQUFDO1lBQ0YsSUFBSSxRQUFRLEdBQWlCLEVBQUUsQ0FBQztZQUNoQyxDQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUUsWUFBWSxDQUFDLE1BQU0sQ0FBQztpQkFDdEMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUNkLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxjQUFjLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMseUJBQXlCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7WUFDbEcsQ0FBQyxDQUFDLENBQUM7WUFFTCwrQkFBK0IsQ0FBQztnQkFDOUIsZUFBZSxFQUFFLHdCQUF3QixDQUFDLFFBQVEsQ0FBaUI7Z0JBQ25FLFNBQVMsRUFBRSxHQUFHLENBQUMsU0FBUztnQkFDeEIsU0FBUyxFQUFFO29CQUNULEVBQUUsRUFBRSxlQUFlO29CQUNuQixFQUFFLEVBQUUsd0JBQXdCO2lCQUM3QjtnQkFDRCxXQUFXLEVBQUUsaUJBQWlCO2dCQUM5QixNQUFNLEVBQUUsUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFnQjthQUNyRCxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsRUFBRSxDQUFDO1FBRUwsbUJBQW1CLENBQUMsY0FBYyxDQUFDLENBQUE7SUFHckMsQ0FBQztDQUNGLENBQUMsQ0FBQztBQUVILE1BQU0sY0FBYyxHQUFHLElBQUksTUFBTSxDQUFDO0lBQ2hDLEtBQUssRUFBRSxnQkFBZ0I7SUFDdkIsS0FBSyxFQUFFLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsYUFBYSxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUU7SUFDMUQsV0FBVyxFQUFFLElBQUksZ0JBQWdCLEVBQUU7SUFDbkMsU0FBUyxFQUFFLENBQUMsR0FBRyxnQkFBZ0IsQ0FBQztJQUNoQyxPQUFPLEVBQUUsR0FBYSxFQUFFO1FBQ3RCLDRDQUE0QztRQUM1QyxjQUFjLENBQUMsZUFBZSxHQUFHO1lBQy9CLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPO1lBQ3pCLEdBQUc7Z0JBQ0QsTUFBTSxDQUFDLFVBQVU7b0JBQ2pCLFlBQVk7Z0JBQ1osTUFBTSxDQUFDLFlBQVksR0FBRyxjQUFjO2dCQUNwQyxNQUFNLENBQUMsWUFBWSxHQUFHLGlCQUFpQjtnQkFDdkMsTUFBTSxDQUFDLE1BQU0sR0FBRyxVQUFVO2dCQUMxQixNQUFNLENBQUMsWUFBWSxHQUFHLG1CQUFtQjtnQkFDekMsTUFBTSxDQUFDLFVBQVUsR0FBRyxZQUFZO2FBQ2pDO1lBQ0QsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVM7U0FDNUIsQ0FBQztRQUVGLE9BQU8sY0FBYyxDQUFDLGVBQWUsQ0FBQztJQUN4QyxDQUFDO0lBQ0QsZ0JBQWdCLEVBQUUsS0FBSyxJQUFJLEVBQUUsQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxFQUFFLE1BQU0sQ0FBQyxXQUFXLENBQUM7Q0FDbEcsQ0FBQyxDQUFDO0FBRUgsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLE1BQU0sQ0FBQztJQUNsQyxLQUFLLEVBQUUsa0JBQWtCO0lBQ3pCLEtBQUssRUFBRSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLGVBQWUsRUFBRTtJQUM3QyxXQUFXLEVBQUUsSUFBSSxnQkFBZ0IsRUFBRTtJQUNuQyxTQUFTLEVBQUUsQ0FBQyxHQUFHLGdCQUFnQixDQUFDO0lBQ2hDLE9BQU8sRUFBRSxHQUFhLEVBQUU7UUFDdEIsNENBQTRDO1FBQzVDLGdCQUFnQixDQUFDLGVBQWUsR0FBRztZQUNqQyxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUztZQUMzQixHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCO1lBQ2xDLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRO1lBQzFCLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTO1NBQzVCLENBQUM7UUFFRiw0Q0FBNEM7UUFDNUMsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FDckMsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FDdEMsTUFBTSxDQUFDLFVBQVUsR0FBRywwQkFBMEIsR0FBRyxNQUFNLENBQ3hELEVBQ0QsQ0FBQyxDQUNGLENBQUM7UUFDRixXQUFXLEVBQUUsQ0FBQztRQUVkLE9BQU8sZ0JBQWdCLENBQUMsZUFBZSxDQUFDO0lBQzFDLENBQUM7SUFDRCxnQkFBZ0IsRUFBRSxLQUFLLElBQUksRUFBRSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxnQkFBZ0IsRUFBRSxNQUFNLENBQUMsYUFBYSxDQUFDO0NBQ3RHLENBQUMsQ0FBQztBQUVILE1BQU0sYUFBYSxHQUFHLElBQUksTUFBTSxDQUFDO0lBQy9CLEtBQUssRUFBRSxlQUFlO0lBQ3RCLEtBQUssRUFBRSxFQUFFLEVBQUUsRUFBRSxjQUFjLEVBQUUsRUFBRSxFQUFFLFlBQVksRUFBRTtJQUMvQyxXQUFXLEVBQUUsSUFBSSxnQkFBZ0IsRUFBRTtJQUNuQyxlQUFlLEVBQUUsRUFBRTtJQUNuQixPQUFPLEVBQUUsR0FBRyxFQUFFO1FBQ1osS0FBSyxDQUNILG1GQUFtRixDQUNwRixDQUFDO1FBQ0YsT0FBTyxDQUFDLG9DQUFvQztRQUU1QyxXQUFXLEVBQUUsQ0FBQyxDQUFDLGtDQUFrQztRQUVqRCxPQUFPLGFBQWEsQ0FBQyxlQUFlLENBQUM7SUFDdkMsQ0FBQztJQUNELGdCQUFnQixFQUFFLEtBQUssSUFBSSxFQUFFLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQztDQUM3RSxDQUFDLENBQUM7QUFFSCxNQUFNLGVBQWUsR0FBRyxJQUFJLE1BQU0sQ0FBQztJQUNqQyxLQUFLLEVBQUUsaUJBQWlCO0lBQ3hCLEtBQUssRUFBRTtRQUNMLEVBQUUsRUFBRSx1QkFBdUI7UUFDM0IsRUFBRSxFQUFFLHVCQUF1QjtRQUMzQixFQUFFLEVBQUUsZUFBZTtLQUNwQjtJQUNELFNBQVMsRUFBRSxPQUFPO0lBQ2xCLFFBQVEsRUFBRSxDQUFDLGNBQWMsRUFBRSxnQkFBZ0IsRUFBRSxjQUFjLENBQUMsRUFBRSxxQ0FBcUM7Q0FDcEcsQ0FBQyxDQUFDO0FBRUgsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLE1BQU0sQ0FBQztJQUNsQyxLQUFLLEVBQUUsaUNBQWlDO0lBQ3hDLEtBQUssRUFBRTtRQUNMLEVBQUUsRUFBRSxZQUFZO1FBQ2hCLEVBQUUsRUFBRSxrQkFBa0I7UUFDdEIsRUFBRSxFQUFFLGdCQUFnQjtLQUNyQjtJQUNELE9BQU8sRUFBRSxLQUFLLElBQUksRUFBRSxDQUFDLE1BQU0sYUFBYSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDO0NBQ3ZFLENBQUMsQ0FBQztBQUVILE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxNQUFNLENBQUM7SUFDbEMsS0FBSyxFQUFFLDhCQUE4QjtJQUNyQyxLQUFLLEVBQUU7UUFDTCxFQUFFLEVBQUUsWUFBWTtRQUNoQixFQUFFLEVBQUUsbUJBQW1CO1FBQ3ZCLEVBQUUsRUFBRSxnQkFBZ0I7S0FDckI7SUFDRCxPQUFPLEVBQUUsS0FBSyxJQUFJLEVBQUUsQ0FBQyxNQUFNLGFBQWEsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQztDQUN2RSxDQUFDLENBQUM7QUFFSCxNQUFNLGNBQWMsR0FBRyxJQUFJLE1BQU0sQ0FBQztJQUNoQyxLQUFLLEVBQUUsd0JBQXdCO0lBQy9CLEtBQUssRUFBRTtRQUNMLEVBQUUsRUFBRSxjQUFjO1FBQ2xCLEVBQUUsRUFBRSxrQkFBa0I7UUFDdEIsRUFBRSxFQUFFLGNBQWM7S0FDbkI7SUFDRCxPQUFPLEVBQUUsS0FBSyxJQUFJLEVBQUUsQ0FBQyxNQUFNLGFBQWEsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQztDQUNyRSxDQUFDLENBQUM7QUFFSCxNQUFNLGFBQWEsR0FBRyxJQUFJLE1BQU0sQ0FBQztJQUMvQixLQUFLLEVBQUUsdUJBQXVCO0lBQzlCLEtBQUssRUFBRTtRQUNMLEVBQUUsRUFBRSxjQUFjO1FBQ2xCLEVBQUUsRUFBRSxzQkFBc0I7UUFDMUIsRUFBRSxFQUFFLGFBQWE7S0FDbEI7SUFDRCxPQUFPLEVBQUUsS0FBSyxFQUFFLGVBQXVCLE1BQU0sQ0FBQyxVQUFVLEVBQUUsRUFBRTtRQUMxRCxJQUFJLFlBQVksR0FBRyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxZQUFZLENBQUMsQ0FBQztRQUVoRixJQUFJLENBQUMsWUFBWTtZQUFFLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO1FBRXZFLFlBQVksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBRTVCLE1BQU0sK0JBQStCLENBQUM7WUFDcEMsT0FBTyxFQUFFLFlBQVk7WUFDckIsU0FBUyxFQUFFLFlBQVksQ0FBQyxZQUFZLENBQUM7WUFDckMsU0FBUyxFQUFFLFlBQVk7WUFDdkIsTUFBTSxFQUFFLEtBQUs7WUFDYixjQUFjLEVBQUUsSUFBSTtTQUNyQixDQUFDLENBQUM7UUFDSCxXQUFXLEVBQUUsQ0FBQyxDQUFDLGtDQUFrQztJQUVuRCxDQUFDO0NBQ0YsQ0FBQyxDQUFDO0FBRUgsTUFBTSxXQUFXLEdBQUcsSUFBSSxNQUFNLENBQUM7SUFDN0IsS0FBSyxFQUFFLGFBQWE7SUFDcEIsS0FBSyxFQUFFLEVBQUUsRUFBRSxFQUFFLGtCQUFrQixFQUFFLEVBQUUsRUFBRSwyQkFBMkIsRUFBRTtJQUNsRSxPQUFPLEVBQUUsR0FBRyxFQUFFO1FBQ1o7Ozs7a0VBSTBEO1FBQzFELElBQUksT0FBTyxHQUFXLEdBQUcsRUFBRSxPQUFPLEdBQVcsR0FBRyxDQUFDO1FBRWpELElBQUksV0FBVyxHQUFHLElBQUksTUFBTSxDQUFDO1lBQzNCLEtBQUssRUFBRSxhQUFhO1lBQ3BCLEtBQUssRUFBRSxFQUFFLEVBQUUsRUFBRSxnQkFBZ0IsRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFO1lBQzdDLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsUUFBUSxHQUFHLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLEVBQUUsa0JBQWtCLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBQyw4QkFBOEI7U0FDaEksQ0FBQyxDQUFDLENBQUEsMkNBQTJDO1FBRTlDLFdBQVcsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUVyQyxTQUFTLGtCQUFrQixDQUFDLE9BQWU7WUFDekMsSUFBSSxDQUFDLE9BQU87Z0JBQUUsT0FBTztZQUNyQixPQUFPLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBRXJDLFNBQVMsb0JBQW9CLENBQUMsT0FBZTtnQkFDM0MsSUFBSSxPQUFPLEtBQUssT0FBTyxJQUFJLE9BQU8sS0FBSyxDQUFDO29CQUFFLE9BQU8sU0FBUyxDQUFDLENBQUEsaUNBQWlDO2dCQUM1RixJQUFJLE9BQU8sS0FBSyxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDO29CQUFFLE9BQU8sU0FBUyxDQUFDLENBQUEsK0RBQStEO2dCQUVsSSxJQUFJLE1BQU0sR0FBRztvQkFDWCxFQUFFLEVBQUUsRUFBRSxhQUFhLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRTtvQkFDbEMsRUFBRSxFQUFFLEVBQUUsYUFBYSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUU7aUJBQ2xDLENBQUM7Z0JBR0YsSUFBSSxHQUFHLEdBQUcsSUFBSSxNQUFNLENBQUM7b0JBQ25CLEtBQUssRUFBRSxhQUFhLEdBQUcsT0FBTztvQkFDOUIsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ2xELFNBQVMsRUFBRSxXQUFXO29CQUN0QixPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLFFBQVEsR0FBRyxvQkFBb0IsQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDO2lCQUNqRSxDQUFDLENBQUM7Z0JBQ0gsT0FBTyxHQUFHLENBQUMsQ0FBQSxzR0FBc0c7WUFDbkgsQ0FBQztRQUVILENBQUM7UUFFRCxTQUFTLG9CQUFvQixDQUFDLE9BQWUsRUFBRSxHQUFXO1lBQ3hELElBQUksR0FBRyxDQUFDLFFBQVE7Z0JBQUUsT0FBTztZQUN6QixJQUFJLFdBQXNELENBQUM7WUFFM0QsQ0FBQyxTQUFTLHFCQUFxQjtnQkFDN0IsSUFBSSxJQUFJLEdBQ047b0JBQ0UsQ0FBQyxRQUFRLEVBQUUsT0FBTyxFQUFFLFVBQVUsQ0FBQztvQkFDL0IsQ0FBQyxRQUFRLEVBQUUsU0FBUyxFQUFFLE9BQU8sQ0FBQztvQkFDOUIsQ0FBQyxTQUFTLEVBQUUsVUFBVSxFQUFFLE9BQU8sQ0FBQztvQkFDaEMsQ0FBQyxXQUFXLEVBQUUsVUFBVSxFQUFFLFVBQVUsQ0FBQztvQkFDckMsQ0FBQyxVQUFVLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQztvQkFDL0IsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFVBQVUsQ0FBQztvQkFDaEMsQ0FBQyxVQUFVLEVBQUUsT0FBTyxFQUFFLFFBQVEsQ0FBQztpQkFDaEMsQ0FBQztnQkFFSixXQUFXLEdBQUc7b0JBQ1o7d0JBQ0UsTUFBTSxFQUFFLElBQUk7d0JBQ1osS0FBSyxFQUFFLEVBQUUsRUFBRSxFQUFFLGVBQWUsRUFBRSxFQUFFLEVBQUUsZ0JBQWdCLEVBQUUsRUFBRSxFQUFFLFlBQVksRUFBRTtxQkFDdkU7b0JBQ0Q7d0JBQ0UsTUFBTSxFQUFFLElBQUk7d0JBQ1osS0FBSyxFQUFFLEVBQUUsRUFBRSxFQUFFLGdCQUFnQixFQUFFLEVBQUUsRUFBRSxpQkFBaUIsRUFBRSxFQUFFLEVBQUUsWUFBWSxFQUFFO3FCQUN6RTtvQkFDRDt3QkFDRSxNQUFNLEVBQUUsSUFBSTt3QkFDWixLQUFLLEVBQUUsRUFBRSxFQUFFLEVBQUUsZ0JBQWdCLEVBQUUsRUFBRSxFQUFFLGVBQWUsRUFBRSxFQUFFLEVBQUUsWUFBWSxFQUFFO3FCQUN2RTtvQkFDRDt3QkFDRSxNQUFNLEVBQUUsSUFBSTt3QkFDWixLQUFLLEVBQUUsRUFBRSxFQUFFLEVBQUUsZ0JBQWdCLEVBQUUsRUFBRSxFQUFFLGdCQUFnQixFQUFFLEVBQUUsRUFBRSxhQUFhLEVBQUU7cUJBQ3pFO29CQUNEO3dCQUNFLE1BQU0sRUFBRSxLQUFLO3dCQUNiLEtBQUssRUFBRSxFQUFFLEVBQUUsRUFBRSxvQkFBb0IsRUFBRSxFQUFFLEVBQUUsZUFBZSxFQUFFLEVBQUUsRUFBRSxlQUFlLEVBQUU7cUJBQzlFO29CQUNEO3dCQUNFLE1BQU0sRUFBRSxLQUFLO3dCQUNiLEtBQUssRUFBRSxFQUFFLEVBQUUsRUFBRSxvQkFBb0IsRUFBRSxFQUFFLEVBQUUsZ0JBQWdCLEVBQUUsRUFBRSxFQUFFLGVBQWUsRUFBRTtxQkFDL0U7aUJBQ0YsQ0FBQztnQkFFRixXQUFXLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO29CQUN6QixJQUFJLE9BQU8sS0FBSyxPQUFPLEVBQUUsQ0FBQzt3QkFDeEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDL0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDM0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDN0MsQ0FBQzt5QkFDSSxJQUFJLE9BQU8sS0FBSyxPQUFPLElBQUksT0FBTyxLQUFLLENBQUMsRUFBRSxDQUFDO3dCQUM5QyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDcEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLElBQUksbUJBQW1CLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDNUQsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsV0FBVyxDQUFDO29CQUMvRCxDQUFDO3lCQUNJLElBQUksT0FBTyxLQUFLLE9BQU8sSUFBSSxPQUFPLEtBQUssQ0FBQyxFQUFFLENBQUM7d0JBQzlDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxJQUFJLHNCQUFzQixDQUFDO3dCQUN4QyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsSUFBSSxrQ0FBa0MsR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUMzRSxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsSUFBSSxvQkFBb0IsQ0FBQTtvQkFDdkMsQ0FBQztnQkFDSCxDQUFDLENBQUMsQ0FBQztZQUVMLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFFTCxPQUFPLFdBQVcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBLHVDQUF1QztZQUVqSSxTQUFTLGFBQWEsQ0FBQyxJQUFZLEVBQUUsS0FBbUI7Z0JBRXRELElBQUksSUFBSSxLQUFLLEtBQUssSUFBSSxPQUFPLEtBQUssQ0FBQztvQkFBRSxPQUFPLFNBQVMsQ0FBQyxDQUFBLGtDQUFrQztnQkFFeEYsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLE9BQU8sS0FBSyxPQUFPLElBQUksT0FBTyxLQUFLLENBQUM7b0JBQUUsT0FBTyxTQUFTLENBQUMsQ0FBQSx5Q0FBeUM7Z0JBRXpJLElBQUksWUFBWSxHQUFpQixjQUFjLENBQUMsa0JBQWtCO3FCQUMvRCxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsR0FBRyxJQUFJLEdBQUcsT0FBTyxHQUFHLFFBQVEsR0FBRyxrQkFBa0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUUvRyxJQUFJLE9BQU8sR0FBRyxJQUFJLE1BQU0sQ0FBQztvQkFDdkIsS0FBSyxFQUFFLEtBQUssR0FBRyxJQUFJO29CQUNuQixLQUFLLEVBQUUsS0FBSztvQkFDWixTQUFTLEVBQUUsR0FBRztvQkFDZCxTQUFTLEVBQUUsZ0JBQWdCO29CQUMzQixXQUFXLEVBQUUsSUFBSSxnQkFBZ0IsRUFBRTtvQkFDbkMsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxlQUFlLEdBQUcsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDO29CQUN6RSxnQkFBZ0IsRUFBRSxHQUFHLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxLQUFLLENBQUM7aUJBQ3BGLENBQUMsQ0FBQztnQkFDSCxPQUFPLE9BQU8sQ0FBQztnQkFHZixTQUFTLHVCQUF1QixDQUFDLEdBQVcsRUFBRSxJQUFZLEVBQUUsVUFBd0IsRUFBRSxLQUFtQjtvQkFDdkcsSUFBSSxNQUEwRCxDQUFDO29CQUMvRCxDQUFDLFNBQVMsb0JBQW9CO3dCQUM1QixNQUFNLEdBQUc7NEJBQ1AsVUFBVSxFQUFFO2dDQUNWLEVBQUUsRUFBRSxZQUFZO2dDQUNoQixFQUFFLEVBQUUsb0JBQW9CO2dDQUN4QixFQUFFLEVBQUUscUJBQXFCOzZCQUMxQjs0QkFDRCxLQUFLLEVBQUU7Z0NBQ0wsRUFBRSxFQUFFLFNBQVM7Z0NBQ2IsRUFBRSxFQUFFLGdCQUFnQjtnQ0FDcEIsRUFBRSxFQUFFLGdCQUFnQjs2QkFDckI7NEJBQ0QsTUFBTSxFQUFFO2dDQUNOLEVBQUUsRUFBRSxTQUFTO2dDQUNiLEVBQUUsRUFBRSxrQkFBa0I7Z0NBQ3RCLEVBQUUsRUFBRSxpQkFBaUI7NkJBQ3RCOzRCQUNELFVBQVUsRUFBRTtnQ0FDVixFQUFFLEVBQUUsT0FBTztnQ0FDWCxFQUFFLEVBQUUscUJBQXFCO2dDQUN6QixFQUFFLEVBQUUscUJBQXFCOzZCQUMxQjs0QkFDRCxPQUFPLEVBQUU7Z0NBQ1AsRUFBRSxFQUFFLE9BQU87Z0NBQ1gsRUFBRSxFQUFFLGdCQUFnQjtnQ0FDcEIsRUFBRSxFQUFFLGtCQUFrQjs2QkFDdkI7eUJBQ0YsQ0FBQzt3QkFDRixLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7NkJBQy9CLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTs0QkFDZixLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7aUNBQ2pDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtnQ0FDZixNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTs0QkFDekQsQ0FBQyxDQUFDLENBQUE7d0JBQ04sQ0FBQyxDQUFDLENBQUM7b0JBRVAsQ0FBQyxDQUFDLEVBQUUsQ0FBQztvQkFFTCxDQUFDLFNBQVMsa0JBQWtCO3dCQUMxQixJQUFJLGFBQWEsR0FBRyxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7d0JBRXhDLElBQUksUUFBUSxHQVVSOzRCQUNGLFVBQVUsRUFBRSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRTs0QkFDbkQsZUFBZSxFQUFFLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFOzRCQUN4RCxTQUFTLEVBQUUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUU7NEJBQ2xELGNBQWMsRUFBRSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRTs0QkFDdkQsVUFBVSxFQUFFLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFOzRCQUNuRCxVQUFVLEVBQUUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUU7NEJBQ25ELE9BQU8sRUFBRSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRTs0QkFDaEQsU0FBUyxFQUFFLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFOzRCQUNsRCxNQUFNLEVBQUUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUU7eUJBQ2hELENBQUM7d0JBRUYsQ0FBQyxTQUFTLHVCQUF1Qjs0QkFDL0IsUUFBUSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsV0FBVyxHQUFHLE9BQU8sR0FBRyxzQkFBc0IsRUFBRSxhQUFhLENBQUMsSUFBSSxTQUFTLENBQUE7NEJBQ2xJLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEtBQUs7Z0NBQUUsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixDQUFDLENBQUM7NEJBRTdFLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxHQUFHLGFBQWEsR0FBRyxPQUFPLEdBQUcsc0JBQXNCLEVBQUUsYUFBYSxDQUFDLElBQUksU0FBUyxDQUFBOzRCQUNqSSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLO2dDQUFFLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDOzRCQUV0RSxRQUFRLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUM7NEJBQ3RELFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLFlBQVksQ0FBQyxhQUFhLENBQUMsQ0FBQzt3QkFDdkQsQ0FBQyxDQUFDLEVBQUUsQ0FBQzt3QkFHTCxDQUFDLFNBQVMsaUJBQWlCOzRCQUN6Qix1QkFBdUIsQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLFFBQVEsRUFBRSxjQUFjLENBQUMsQ0FBQzs0QkFDdkUsdUJBQXVCLENBQUMsUUFBUSxDQUFDLGVBQWUsRUFBRSxRQUFRLEVBQUUsaUJBQWlCLENBQUMsQ0FBQzs0QkFDL0UsdUJBQXVCLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxPQUFPLEVBQUUsYUFBYSxDQUFDLENBQUM7NEJBQ3BFLHVCQUF1QixDQUFDLFFBQVEsQ0FBQyxjQUFjLEVBQUUsT0FBTyxFQUFFLGlCQUFpQixDQUFDLENBQUM7NEJBQzdFLHVCQUF1QixDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsWUFBWSxFQUFFLFlBQVksQ0FBQyxDQUFDOzRCQUN6RSx1QkFBdUIsQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLFlBQVksRUFBRSxZQUFZLENBQUMsQ0FBQzs0QkFDekUsdUJBQXVCLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxDQUFDLENBQUM7NEJBRW5FLFFBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLHNCQUFxQyxDQUFDLENBQUMscUhBQXFIOzRCQUU1TixTQUFTLHVCQUF1QixDQUFDLE9BQW9CLEVBQUUsSUFBWSxFQUFFLE1BQWM7Z0NBQ2pGLE9BQU8sQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO2dDQUNqQyxPQUFPLENBQUMsTUFBTSxHQUFHLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQTs0QkFFdkMsQ0FBQzs0QkFFRCxDQUFDLFNBQVMsMkJBQTJCO2dDQUNuQyxtTEFBbUw7Z0NBRW5MLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxRQUFRLENBQUMsZUFBZSxFQUFFLFFBQVEsQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLGNBQWMsQ0FBQztxQ0FDekYsT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUU7b0NBQ25CLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSzt3Q0FBRSxPQUFPO29DQUMzQixPQUFPLENBQUMsS0FBSyxHQUFHLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQzt5Q0FDNUIsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7d0NBQ1gsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUM7NENBQzdELE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3Q0FDekQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLEVBQUUsUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUM7NENBQ3ZFLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsRUFBRSxDQUFDLEtBQUssYUFBYSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTtvQ0FDbEYsQ0FBQyxDQUFDLENBQUM7Z0NBQ1AsQ0FBQyxDQUFDLENBQUM7NEJBQ1AsQ0FBQyxDQUFDLEVBQUUsQ0FBQzs0QkFFTCxTQUFTLFVBQVUsQ0FBQyxJQUFZO2dDQUM5QixPQUFPLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxHQUFHLElBQUksR0FBRyxPQUFPLEdBQUcsSUFBSSxFQUFFLFVBQVUsRUFBRSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxJQUFJLFNBQVMsQ0FBQTs0QkFDMUcsQ0FBQzt3QkFFSCxDQUFDLENBQUMsRUFBRSxDQUFDO3dCQUVMLFNBQVMsWUFBWSxDQUFDLFdBQW1COzRCQUN2QyxPQUFPLDRCQUE0QixDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLE1BQU0sR0FBRyxXQUFXLEdBQUcsc0JBQXNCLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO3dCQUN0SSxDQUFDO3dCQUVELENBQUMsU0FBUyx5QkFBeUI7NEJBQ2pDLElBQUksU0FBbUIsQ0FBQzs0QkFFeEIsQ0FBQyxRQUFRLENBQUMsU0FBUztnQ0FDbkIsUUFBUSxDQUFDLFVBQVU7Z0NBQ25CLFFBQVEsQ0FBQyxjQUFjO2dDQUN2QixRQUFRLENBQUMsZUFBZTtnQ0FDeEIsUUFBUSxDQUFDLFVBQVU7Z0NBQ25CLFFBQVEsQ0FBQyxVQUFVO2dDQUNuQixRQUFRLENBQUMsT0FBTyxFQUFDLG9EQUFvRDtnQ0FDckUsUUFBUSxDQUFDLFNBQVM7Z0NBQ2xCLFFBQVEsQ0FBQyxNQUFNLENBQUM7aUNBQ2IsT0FBTyxDQUFDLEtBQUssRUFBRSxPQUFvQixFQUFFLEVBQUU7Z0NBQ3RDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU07b0NBQUUsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLHVEQUF1RCxFQUFFLE9BQU8sQ0FBQyxLQUFLLEVBQUUsV0FBVyxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztnQ0FFL0osSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUM7b0NBQ3pELFNBQVMsR0FBRyxnQkFBZ0IsQ0FBQztxQ0FFMUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLFVBQVUsRUFBRSxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQztvQ0FDckYsU0FBUyxHQUFHLGFBQWEsQ0FBQztxQ0FFdkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLEVBQUUsUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUM7b0NBQzVFLFNBQVMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRSxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztxQ0FFOUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUM7b0NBQ2xFLFNBQVMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dDQUVqQyxPQUFPLENBQUMsS0FBSyxHQUFHLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQSxnREFBZ0Q7Z0NBR25HLE9BQU8sQ0FBQyxLQUFLLEdBQUcsTUFBTSw2QkFBNkIsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxDQUFDO2dDQUU5RSxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLG1CQUFtQixFQUFFLENBQUM7Z0NBRXpDLElBQUksT0FBTyxLQUFLLFFBQVEsQ0FBQyxVQUFVO29DQUNqQyxPQUFPLENBQUMsS0FBSyxHQUFHLE1BQU0sdUJBQXVCLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUEsbUlBQW1JO2dDQUVsTSxzQ0FBc0MsQ0FBQztvQ0FDckMsTUFBTSxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztvQ0FDdkIsU0FBUyxFQUFFLFNBQVM7b0NBQ3BCLFNBQVMsRUFBRSxPQUFPLENBQUMsV0FBVztvQ0FDOUIsUUFBUSxFQUFFO3dDQUNSLEVBQUUsRUFBRSxPQUFPLENBQUMsTUFBTSxFQUFFLGFBQWEsRUFBRSxhQUFhO3FDQUNqRDtpQ0FDRixDQUFDLENBQUM7Z0NBRUgsU0FBUyxtQkFBbUI7b0NBQzFCLElBQUksR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29DQUNoQyxJQUFJLEtBQUssQ0FBQztvQ0FDVixJQUFJLE9BQU8sS0FBSyxRQUFRLENBQUMsVUFBVTt3Q0FDakMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUE7eUNBQ3RCLElBQUksT0FBTyxLQUFLLFFBQVEsQ0FBQyxVQUFVO3dDQUN0QyxLQUFLLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQTt5Q0FDdEIsSUFBSSxPQUFPLEtBQUssUUFBUSxDQUFDLE9BQU87d0NBQ25DLEtBQUssR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFBO3lDQUNuQixJQUFJLE9BQU8sS0FBSyxRQUFRLENBQUMsZUFBZTt3Q0FDM0MsS0FBSyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUE7eUNBQ2xCLElBQUksT0FBTyxLQUFLLFFBQVEsQ0FBQyxjQUFjO3dDQUMxQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQTs7d0NBQ2pCLE9BQU8sT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztvQ0FDN0IsU0FBUzt5Q0FDTixHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0NBQ3RFLE9BQU8sR0FBRyxDQUFBO2dDQUVaLENBQUM7Z0NBRUQsS0FBSyxVQUFVLHVCQUF1QixDQUFDLEtBQWlCO29DQUN0RCxPQUFPLEtBQUssQ0FBQztvQ0FDYixJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxlQUFlLENBQUM7d0NBQUUsT0FBTyxLQUFLLENBQUM7b0NBRTFELElBQUksVUFBVSxHQUFhLEVBQUUsRUFBRSxLQUFhLENBQUM7b0NBRTdDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7d0NBQ3RDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLFVBQVUsQ0FBQzs0Q0FBRSxTQUFTO3dDQUNqRCxLQUFLLEdBQUcsQ0FBQyxDQUFDO3dDQUNWLENBQUMsSUFBSSxDQUFDLENBQUM7d0NBRVAsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxVQUFVLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQzs0Q0FBRSxDQUFDLElBQUksQ0FBQyxDQUFDO3dDQUUzRCxPQUFPLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxVQUFVLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUM7NENBQ2xELFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOzRDQUM5QyxJQUFJLENBQUMsS0FBSyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUM7Z0RBQUUsTUFBTTs0Q0FDbEMsQ0FBQyxJQUFJLENBQUMsQ0FBQzt3Q0FDVCxDQUFDO3dDQUNELElBQUksVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDOzRDQUFFLFNBQVM7d0NBRXBDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsVUFBVSxFQUFFLEdBQUcsTUFBTSxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFDLElBQUksRUFBQyxFQUFFLENBQUMsTUFBTSxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3Q0FDN0gsQ0FBQyxJQUFJLENBQUMsQ0FBQzt3Q0FDUCxVQUFVLEdBQUcsRUFBRSxDQUFDO29DQUNsQixDQUFDO29DQUNELE9BQU8sS0FBSyxDQUFBO29DQUVaLEtBQUssVUFBVSxrQkFBa0IsQ0FBQyxJQUFZO3dDQUM1QyxJQUFJLENBQUMsQ0FBQyxlQUFlLEVBQUUsZUFBZSxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQzs0Q0FBRSxPQUFPLEVBQUUsQ0FBQzt3Q0FFbEUsSUFBSSxVQUFVLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUEsZ0hBQWdIO3dDQUN0TCxJQUFJLFFBQVEsR0FBRyxNQUFNLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDO3dDQUM3QyxJQUFJLElBQUksR0FBRyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3Q0FFdkQsSUFBSSxDQUFDLElBQUk7NENBQUUsT0FBTyxFQUFFLENBQUM7d0NBRXJCLElBQUksS0FBSyxHQUFHLFVBQVUsQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3Q0FFNUQsSUFBSSxhQUFhLEdBQUcsVUFBVSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO3dDQUVqRSxPQUFPLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsS0FBSyxHQUFHLEdBQUcsR0FBRyxhQUFhLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFBO29DQUU5SCxDQUFDO2dDQUVILENBQUM7NEJBQ0gsQ0FBQyxDQUFDLENBQUM7d0JBQ1AsQ0FBQyxDQUFDLEVBQUUsQ0FBQzt3QkFFTCxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBbUIsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEtBQUssTUFBTSxDQUFDLFdBQVc7NEJBQzVHLDhDQUE4QyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQSxzREFBc0Q7b0JBRW5ILENBQUMsQ0FBQyxFQUFFLENBQUM7b0JBR0wsQ0FBQyxTQUFTLDhCQUE4Qjt3QkFDdEMsZ0RBQWdEO3dCQUNoRCxJQUFJLE9BQU8sS0FBSyxDQUFDOzRCQUFFLE9BQU87d0JBQzFCLElBQUksT0FBTyxLQUFLLE9BQU87NEJBQUUsT0FBTyxDQUFDLDRDQUE0Qzt3QkFDN0UsSUFBSSxJQUFJLEtBQUssSUFBSTs0QkFBRSxPQUFPLENBQUMsMkJBQTJCO3dCQUV0RCxJQUFJLE1BQU0sR0FBRyw0QkFBNEIsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxRQUFRLEdBQUcsbUNBQW1DLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUEsOEJBQThCO3dCQUVuSyxJQUFJLENBQUMsTUFBTTs0QkFBRSxPQUFPO3dCQUVwQixJQUFJLE9BQU8sR0FBbUIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQzt3QkFDNUQsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO3dCQUMvQixPQUFPLENBQUMsS0FBSyxDQUFDLG1CQUFtQixHQUFHLFNBQVMsQ0FBQzt3QkFFOUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLGFBQWEsRUFBRSxPQUFPLENBQUMsQ0FBQzt3QkFFeEQsSUFBSSxRQUFRLEdBQUcsSUFBSSxNQUFNLENBQUM7NEJBQ3hCLEtBQUssRUFBRSxPQUFPOzRCQUNkLEtBQUssRUFBRSxFQUFFLEVBQUUsRUFBRSxpQkFBaUIsRUFBRSxFQUFFLEVBQUUsa0JBQWtCLEVBQUU7NEJBQ3hELFNBQVMsRUFBRSxnQkFBZ0I7NEJBQzNCLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUM7NEJBQ3ZELGdCQUFnQixFQUFFLEdBQUcsRUFBRSxDQUFDLHdCQUF3QixDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7eUJBQ2pFLENBQUMsQ0FBQzt3QkFFSCxJQUFJLE9BQU8sR0FBRyxJQUFJLE1BQU0sQ0FBQzs0QkFDdkIsS0FBSyxFQUFFLGNBQWM7NEJBQ3JCLEtBQUssRUFBRSxFQUFFLEVBQUUsRUFBRSxpQkFBaUIsRUFBRSxFQUFFLEVBQUUsc0JBQXNCLEVBQUU7NEJBQzVELFNBQVMsRUFBRSxnQkFBZ0I7NEJBQzNCLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUM7NEJBQ3JELGdCQUFnQixFQUFFLEdBQUcsRUFBRSxDQUFDLHVCQUF1QixDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7eUJBQy9ELENBQUMsQ0FBQzt3QkFFSCxJQUFJLFNBQVMsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEtBQUssbUJBQW1CLENBQUMsS0FBSyxDQUFtQixDQUFDO3dCQUN0SSxJQUFJLE9BQW9CLENBQUM7d0JBRXpCLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTs0QkFDaEMsT0FBTyxHQUFHLGFBQWEsQ0FBQztnQ0FDdEIsR0FBRyxFQUFFLEdBQUc7Z0NBQ1IsYUFBYSxFQUFFLE9BQU87Z0NBQ3RCLFFBQVEsRUFBRSxjQUFjO2dDQUN4QixLQUFLLEVBQUUsS0FBSzs2QkFDYixDQUFDLENBQUM7NEJBRUgsU0FBUyxDQUFDLHFCQUFxQixDQUFDLGFBQWEsRUFBRSxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBZ0IsQ0FBQyxDQUFDLENBQUEsbURBQW1EO3dCQUU1SSxDQUFDLENBQUMsQ0FBQzt3QkFFSCxTQUFTLGVBQWUsQ0FBQyxLQUFhLEVBQUUsT0FBdUI7NEJBQzdELElBQUksRUFBRSxHQUFHLEtBQUssR0FBRyxLQUFLLENBQUM7NEJBQ3ZCLElBQUkseUJBQXlCLENBQUMsRUFBRSxDQUFDO2dDQUFFLE9BQU87NEJBRTFDLElBQUksUUFBUSxHQUFtQixRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDOzRCQUM3RCxRQUFRLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQzs0QkFFakIsT0FBTyxDQUFDLHFCQUFxQixDQUFDLFVBQVUsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFBLHlMQUF5TDs0QkFHN08sV0FBVyxDQUFDO2dDQUNWLGVBQWUsRUFBRSxTQUFTLENBQUMsUUFBUSxDQUFDLEtBQUs7Z0NBQ3pDLFNBQVMsRUFBRSxRQUFRO2dDQUNuQixTQUFTLEVBQUUsZ0JBQWdCO2dDQUMzQixpQkFBaUIsRUFBRSxJQUFJO2dDQUN2QixpQkFBaUIsRUFBRSxLQUFLOzZCQUN6QixDQUFDLENBQUM7d0JBRUwsQ0FBQzt3QkFFRCxTQUFTLHdCQUF3QixDQUFDLEtBQWE7NEJBQzdDLElBQUksWUFBWSxDQUFDLGFBQWEsQ0FBQyxHQUFHLEdBQUcsS0FBSyxHQUFHLEtBQUssQ0FBQztnQ0FBRSxPQUFPLENBQUEsZ0dBQWdHOzRCQUU1SixJQUFJLE9BQW1CLEVBQUUsTUFBcUIsQ0FBQzs0QkFFL0MsQ0FBQyxTQUFTLGlCQUFpQjtnQ0FDekIsTUFBTSxHQUFHLDRCQUE0QixDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUMsQ0FBQztnQ0FFbkYsSUFBSSxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUM7b0NBQUUsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLDhDQUE4QyxDQUFDLENBQUM7Z0NBRTFGLE9BQU8sR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsR0FBRyxTQUFTLEVBQUUsY0FBYyxDQUFDLGFBQWEsQ0FBQyxJQUFJLFNBQVMsQ0FBQyxDQUFBLGtNQUFrTTtnQ0FFOVIsSUFBSSxDQUFDLE9BQU87b0NBQUUsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLG1DQUFtQyxDQUFDLENBQUM7Z0NBR3RFLFdBQVcsQ0FBQztvQ0FDVixLQUFLLEVBQUUsT0FBTztvQ0FDZCxTQUFTLEVBQUUsWUFBWSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7b0NBQ3RDLFNBQVMsRUFBRSxHQUFHLENBQUMsV0FBVztvQ0FDMUIsUUFBUSxFQUFFO3dDQUNSLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO3dDQUNiLGFBQWEsRUFBRSxhQUFhO3FDQUM3QjtvQ0FDRCxpQkFBaUIsRUFBRSxLQUFLO29DQUN4QixpQkFBaUIsRUFBRSxLQUFLO2lDQUN6QixDQUFDLENBQUM7NEJBRUwsQ0FBQyxDQUFDLEVBQUUsQ0FBQzs0QkFFTCxDQUFDLFNBQVMsaUJBQWlCO2dDQUN6QixJQUFJLEVBQUUsR0FBRyxhQUFhLENBQUM7Z0NBQ3ZCLElBQUksU0FBUyxHQUFtQixHQUFHLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLENBQUM7Z0NBQ3hFLElBQUksU0FBUyxFQUFFLENBQUM7b0NBQ2Qsb0RBQW9EO29DQUNwRCxTQUFTLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztvQ0FDbkMsT0FBTTtnQ0FDUixDQUFDO2dDQUVELE1BQU0sR0FBRyw0QkFBNEIsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxNQUFNLEdBQUcsY0FBYyxDQUFDLENBQUM7Z0NBRXZGLENBQUMsU0FBUyxtQkFBbUI7b0NBQzNCLCtCQUErQixDQUFDO3dDQUM5QixPQUFPLEVBQUUsTUFBTSxDQUFDLGFBQWE7d0NBQzdCLFNBQVMsRUFBRSxZQUFZLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQzt3Q0FDN0MsU0FBUyxFQUFFLEdBQUcsQ0FBQyxXQUFXO3dDQUMxQixNQUFNLEVBQUUsSUFBSTt3Q0FDWixjQUFjLEVBQUUsS0FBSztxQ0FDdEIsQ0FBQyxDQUFDO2dDQUNMLENBQUMsQ0FBQyxFQUFFLENBQUM7Z0NBR0wsT0FBTyxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsYUFBYSxHQUFHLFNBQVMsRUFBRSxjQUFjLENBQUMsb0JBQW9CLENBQUMsSUFBSSxTQUFTLENBQUM7Z0NBRXhHLElBQUksQ0FBQyxPQUFPO29DQUFFLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO2dDQUU1RCxTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQ0FDMUMsU0FBUyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7NEJBRXBCLENBQUMsQ0FBQyxFQUFFLENBQUM7d0JBRVAsQ0FBQzt3QkFFRCxTQUFTLGNBQWMsQ0FBQyxLQUFhLEVBQUUsT0FBdUI7NEJBQzVELElBQUksRUFBRSxHQUFHLEtBQUssR0FBRyxLQUFLLENBQUM7NEJBQ3ZCLElBQUkseUJBQXlCLENBQUMsRUFBRSxDQUFDO2dDQUFFLE9BQU87d0JBRTVDLENBQUM7d0JBRUQsU0FBUyx1QkFBdUIsQ0FBQyxLQUFhOzRCQUM1QyxJQUFJLFlBQVksQ0FBQyxhQUFhLENBQUMsR0FBRyxHQUFHLEtBQUssR0FBRyxLQUFLLENBQUM7Z0NBQUUsT0FBTyxDQUFBLGdHQUFnRzt3QkFFOUosQ0FBQzt3QkFFRCxTQUFTLHlCQUF5QixDQUFDLEtBQWEsRUFBRSxPQUFnQixLQUFLOzRCQUNyRSxJQUFJLFVBQVUsR0FBbUIsWUFBWSxDQUFDLGFBQWEsQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDLENBQUM7NEJBQ3pFLElBQUksVUFBVSxFQUFFLENBQUM7Z0NBQ2YsSUFBSSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7b0NBQUUsVUFBVSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7O29DQUVoRixVQUFVLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztnQ0FDekMsT0FBTyxJQUFJLENBQUE7NEJBQ2IsQ0FBQzs0QkFDRCxPQUFPLEtBQUssQ0FBQTt3QkFFZCxDQUFDO29CQUdILENBQUMsQ0FBQyxFQUFFLENBQUM7Z0JBRVAsQ0FBQztZQUNILENBQUM7WUFBQSxDQUFDO1FBQ0osQ0FBQztJQUVILENBQUM7Q0FDRixDQUFDLENBQUM7QUFFSCxNQUFNLFFBQVEsR0FBRyxJQUFJLE1BQU0sQ0FBQztJQUMxQixLQUFLLEVBQUUsVUFBVTtJQUNqQixLQUFLLEVBQUU7UUFDTCxFQUFFLEVBQUUsZUFBZTtRQUNuQixFQUFFLEVBQUUsVUFBVTtLQUNmO0lBQ0QsT0FBTyxFQUFFLEtBQUssRUFBRSxJQUFnRCxFQUFFLEVBQUU7UUFDbEUsSUFBSSxJQUFJLEVBQUUsQ0FBQztZQUNULE1BQU0saUJBQWlCLENBQUM7Z0JBQ3RCLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYTtnQkFDakMsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO2FBQ3BCLENBQUMsQ0FBQTtZQUNGLE9BQU87UUFDVCxDQUFDO1FBRUQsSUFBSSxZQUFZLEdBQUcsSUFBSSxNQUFNLENBQUM7WUFDNUIsS0FBSyxFQUFFLGNBQWM7WUFDckIsS0FBSyxFQUFFO2dCQUNMLEVBQUUsRUFBRSxjQUFjO2dCQUNsQixFQUFFLEVBQUUsbUJBQW1CO2dCQUN2QixFQUFFLEVBQUUsZUFBZTthQUNwQjtZQUNELE9BQU8sRUFBRSxLQUFLLElBQUksRUFBRSxDQUFDLFlBQVksQ0FBQyxRQUFRLEdBQUcsTUFBTSxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUEsc0lBQXNJO1NBQ2hOLENBQUMsQ0FBQztRQUVILElBQUksWUFBWSxHQUFHLElBQUksTUFBTSxDQUFDO1lBQzVCLEtBQUssRUFBRSxjQUFjO1lBQ3JCLEtBQUssRUFBRTtnQkFDTCxFQUFFLEVBQUUsY0FBYztnQkFDbEIsRUFBRSxFQUFFLGtCQUFrQjtnQkFDdEIsRUFBRSxFQUFFLGVBQWU7YUFDcEI7WUFDRCxPQUFPLEVBQUUsS0FBSyxJQUFJLEVBQUUsQ0FBQyxZQUFZLENBQUMsUUFBUSxHQUFHLE1BQU0sZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFBLHNJQUFzSTtTQUMvTSxDQUFDLENBQUM7UUFFSCxRQUFRLENBQUMsUUFBUSxHQUFHLENBQUMsWUFBWSxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBRWpELEtBQUssVUFBVSxlQUFlLENBQUMsR0FBWTtZQUN6QyxJQUFJLGdCQUFpQyxFQUFFLGdCQUFpQyxDQUFDO1lBRXpFLGdCQUFnQixHQUFHLE1BQU0saUJBQWlCLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDNUQsMkVBQTJFO1lBRTNFLElBQUksQ0FBQyxnQkFBZ0I7Z0JBQUUsT0FBTztZQUU5QixJQUFJLGlCQUEyQixFQUFFLGdCQUEwQixDQUFDO1lBRTVELGlCQUFpQixHQUFHLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUNsRSx3RkFBd0Y7WUFHeEYsSUFBSSxHQUFHO2dCQUFFLGlCQUFpQixHQUFHLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7aUJBQ3ZELElBQUksQ0FBQyxHQUFHO2dCQUFFLGlCQUFpQixHQUFHLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUUsaUJBQWlCLENBQUMsTUFBTSxDQUFDLENBQUM7WUFFekYsSUFBSSxNQUFNLEdBQUcsaUJBQWlCLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFO2dCQUMxQyxJQUFJLEtBQUssR0FBRyxJQUFJLE1BQU0sRUFBRSxDQUFDO2dCQUN6QixLQUFLLENBQUMsZUFBZSxDQUFDLEdBQUcsTUFBTSxDQUFDO2dCQUNoQyxPQUFPLEtBQUssQ0FBQTtZQUNkLENBQUMsQ0FBQyxDQUFDO1lBRUgsSUFBSSxZQUFZLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDcEMsSUFBSSxHQUFXLENBQUM7Z0JBQ2hCLEdBQUcsR0FBRyxJQUFJLE1BQU0sQ0FBQztvQkFDZixLQUFLLEVBQUUsY0FBYyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO29CQUM3QyxLQUFLLEVBQUUsS0FBSztvQkFDWixPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLFFBQVEsR0FBRyxrQkFBa0IsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxLQUFLLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFBLHNJQUFzSTtpQkFDclEsQ0FBQyxDQUFDO2dCQUNILE9BQU8sR0FBRyxDQUFBO1lBR1osQ0FBQyxDQUFDLENBQUM7WUFDSCxPQUFPLFlBQVksQ0FBQztRQUV0QixDQUFDO1FBRUQsU0FBUyxrQkFBa0IsQ0FBQyxNQUFjO1lBRXhDLElBQUksZ0JBQXVCLEVBQUUsZ0JBQXVCLENBQUM7WUFFckQsZ0JBQWdCLEdBQUcsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRTlDLElBQUksZUFBZTtnQkFDakIsZ0JBQWdCLEdBQUcsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRWhELElBQUksV0FBc0IsRUFBRSxXQUFzQixDQUFDO1lBRW5ELFdBQVcsR0FBRyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLE1BQU0sQ0FBQyxDQUFDO1lBRW5FLElBQUksZ0JBQWdCO2dCQUNsQixXQUFXLEdBQUcsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxNQUFNLENBQUMsQ0FBQztZQUdyRSxPQUFPLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUVqQyxTQUFTLFlBQVksQ0FBQyxJQUFlO2dCQUNuQyxJQUFJLGVBQWUsR0FDakIsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVk7cUJBQ2pCLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRTtvQkFDWixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO3dCQUFFLE9BQU8sQ0FBQSxvR0FBb0c7b0JBQ2xJLElBQUksS0FBSyxHQUFHLElBQUksTUFBTSxFQUFFLENBQUM7b0JBQ3pCLEtBQUssQ0FBQyxlQUFlLENBQUMsR0FBRyxlQUFlLEVBQUUsR0FBRyxNQUFNLENBQUM7b0JBQ3BELE9BQU8sSUFBSSxNQUFNLENBQUM7d0JBQ2hCLEtBQUssRUFBRSxZQUFZLEdBQUcsTUFBTTt3QkFDNUIsS0FBSyxFQUFFLEtBQUs7d0JBQ1osT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLGlCQUFpQixDQUFDOzRCQUMvQixNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7NEJBQ2xCLGFBQWEsRUFBRSxNQUFNO3lCQUN0QixDQUFDO3FCQUVILENBQUMsQ0FBQTtnQkFFSixDQUFDLENBQUMsQ0FBQztnQkFFUCxPQUFPLGVBQWUsQ0FBQTtZQUV4QixDQUFDO1FBRUgsQ0FBQztRQUVELEtBQUssVUFBVSxpQkFBaUIsQ0FBQyxJQUErQztZQUM5RSxJQUFJLENBQUMsSUFBSTtnQkFBRSxPQUFPO1lBQ2xCLElBQUksU0FBUyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDbEMsSUFBSSxlQUFlO2dCQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7WUFFdEQsTUFBTSxlQUFlLEVBQUUsQ0FBQztZQUV4QixLQUFLLFVBQVUsZUFBZTtnQkFDNUIsSUFBSSxLQUFLLEdBQWU7b0JBQ3RCO3dCQUNFLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxhQUFhLEdBQUcsVUFBVTtxQkFDekQ7aUJBQ0YsQ0FBQztnQkFDRixJQUFJLElBQXFCLEVBQUUsSUFBbUIsQ0FBQztnQkFDL0MsTUFBTSxhQUFhLEdBQUcsTUFBTSxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxFQUFFO29CQUNuRSxJQUFJLEdBQUcsTUFBTSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDckMsSUFBSSxHQUFHLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDN0MsSUFBSSxDQUFDLElBQUk7d0JBQUUsT0FBTztvQkFDbEIsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztvQkFDekQsT0FBTyxtQkFBbUIsQ0FBQzt3QkFDekIsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDLElBQUksQ0FBQzt3QkFDbEMsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO3dCQUNuQixhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWE7cUJBQ2xDLENBQUMsSUFBSSxFQUFFLENBQUE7Z0JBQ1YsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFFSixJQUFJLENBQUMsYUFBYSxJQUFJLGFBQWEsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFO29CQUFFLE9BQU87Z0JBQzFELElBQUksT0FBTyxHQUFHLHVCQUF1QixDQUFDLGFBQWEsRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDO2dCQUM5RSxJQUFJLENBQUMsT0FBTztvQkFBRSxPQUFPO2dCQUNyQixLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsT0FBTyxDQUFDLENBQUM7Z0JBQ3ZCLFdBQVcsQ0FBQztvQkFDVixLQUFLLEVBQUUsS0FBSztvQkFDWixTQUFTLEVBQUUsU0FBUztvQkFDcEIsU0FBUyxFQUFFLFlBQVk7b0JBQ3ZCLGlCQUFpQixFQUFFLElBQUk7b0JBQ3ZCLGlCQUFpQixFQUFFLElBQUk7aUJBQ3hCLENBQUMsQ0FBQztZQUVMLENBQUM7WUFBQSxDQUFDO1lBRUYsY0FBYyxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO1lBRTNFLENBQUMsU0FBUyxxQkFBcUI7Z0JBQzdCLElBQUksT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzVDLFlBQVksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQzdCLElBQUksS0FBSyxHQUFHLEdBQUcsRUFBRSxJQUFJLEdBQUcsR0FBRyxDQUFDO2dCQUU1QixJQUFJLElBQUksR0FBRyxJQUFJLE1BQU0sQ0FBQztvQkFDcEIsS0FBSyxFQUFFLFNBQVM7b0JBQ2hCLEtBQUssRUFBRTt3QkFDTCxFQUFFLEVBQUUsS0FBSzt3QkFDVCxFQUFFLEVBQUUsS0FBSzt3QkFDVCxFQUFFLEVBQUUsS0FBSztxQkFDVjtvQkFDRCxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQztpQkFDakMsQ0FBQyxDQUFDO2dCQUVILElBQUksSUFBSSxHQUFHLElBQUksTUFBTSxDQUFDO29CQUNwQixLQUFLLEVBQUUsU0FBUztvQkFDaEIsS0FBSyxFQUFFO3dCQUNMLEVBQUUsRUFBRSxJQUFJO3dCQUNSLEVBQUUsRUFBRSxJQUFJO3dCQUNSLEVBQUUsRUFBRSxJQUFJO3FCQUNUO29CQUVELE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDO2lCQUVsQyxDQUFDLENBQUM7Z0JBRUgsSUFBSSxlQUFlLEtBQUssSUFBSSxFQUFFLENBQUM7b0JBQzdCLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUN2QyxJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQTtnQkFDekMsQ0FBQztnQkFFRCxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7b0JBQ3pCLGFBQWEsQ0FBQzt3QkFDWixHQUFHLEVBQUUsR0FBRzt3QkFDUixhQUFhLEVBQUUsT0FBTzt3QkFDdEIsUUFBUSxFQUFFLGNBQWM7cUJBQ3pCLENBQUMsQ0FBQTtnQkFDSixDQUFDLENBQUMsQ0FBQztnQkFFSCxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO2dCQUNoRCw2Q0FBNkM7Z0JBQzdDLE9BQU8sQ0FBQyxLQUFLLENBQUMsbUJBQW1CLEdBQUcsMEJBQTBCLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBRXhFLEtBQUssVUFBVSxXQUFXLENBQUMsSUFBYSxFQUFFLEtBQWEsSUFBSSxDQUFDLE1BQU07b0JBQ2hFLElBQUksS0FBSyxHQUFHLE1BQU0saUJBQWlCLENBQUMsZUFBZSxDQUFDLEVBQ2xELElBQUksR0FBRyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFDcEMsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7b0JBRW5DLENBQUMsU0FBUyxXQUFXO3dCQUNuQixJQUFJLENBQUMsSUFBSTs0QkFBRSxPQUFPO3dCQUNsQixJQUFJLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLFlBQVksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUM7NEJBQ3pFLHFEQUFxRDs0QkFDckQsSUFBSSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBLHNFQUFzRTs0QkFDeEgsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDOzRCQUMxQyxPQUFNO3dCQUNSLENBQUM7d0JBQ0QsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztvQkFFNUYsQ0FBQyxDQUFDLEVBQUUsQ0FBQztvQkFFTCxDQUFDLFNBQVMsZUFBZTt3QkFDdkIsSUFBSSxJQUFJOzRCQUFFLE9BQU87d0JBQ2pCLElBQUksWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUM7NEJBQ25ELHVEQUF1RDs0QkFDdkQsSUFBSSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUEscUVBQXFFOzRCQUN0SSxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7NEJBQ3JFLE9BQU07d0JBQ1IsQ0FBQzt3QkFDRCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO29CQUU1RixDQUFDLENBQUMsRUFBRSxDQUFDO29CQUVMLE1BQU0saUJBQWlCLENBQUM7d0JBQ3RCLE1BQU0sRUFBRSxJQUFJLENBQUMsRUFBRTt3QkFDZixhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWE7cUJBQ2xDLENBQUMsQ0FBQztvQkFDSCxjQUFjLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRSxhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUE7Z0JBQ3hFLENBQUM7WUFDSCxDQUFDLENBQUMsRUFBRSxDQUFDO1lBRUwsU0FBUyxjQUFjLENBQUMsSUFBK0M7Z0JBQ3JFLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUEscUNBQXFDO2dCQUN0RixZQUFZLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQSw0Q0FBNEM7WUFDakcsQ0FBQztZQUVELFdBQVcsRUFBRSxDQUFDO1lBQ2QsT0FBTyxJQUFJLENBQUE7WUFFWCxTQUFTLFFBQVEsQ0FBQyxJQUFtQixFQUFFLElBQVksRUFBRSxhQUFxQjtnQkFDeEUsSUFBSSxDQUFDLElBQUk7b0JBQUUsT0FBTyxFQUFFLENBQUM7Z0JBQ3JCLE9BQU8sSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLEdBQUcsZUFBZSxFQUFFLEdBQUcsYUFBYSxDQUFBO1lBQ25FLENBQUM7UUFDSCxDQUFDO1FBRUQsU0FBUyxlQUFlO1lBQ3RCLElBQUksWUFBWSxHQUFpQjtnQkFDL0IsRUFBRSxFQUFFLFFBQVE7Z0JBQ1osRUFBRSxFQUFFLFdBQVc7Z0JBQ2YsRUFBRSxFQUFFLFVBQVU7YUFDZixDQUFDO1lBQ0YsT0FBTyxZQUFZLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxDQUFBO1FBQzVDLENBQUM7SUFDSCxDQUFDO0lBQ0QsZ0JBQWdCLEVBQUUsR0FBRyxFQUFFO1FBQ3JCLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUztZQUFFLE9BQU87UUFDcEMsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLFdBQVc7WUFBRSxPQUFPLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFDNUMsaUZBQWlGO1FBQ2pGLElBQUksUUFBUSxHQUFpQjtZQUMzQixFQUFFLEVBQUUsV0FBVztZQUNmLEVBQUUsRUFBRSxxQkFBcUI7WUFDekIsRUFBRSxFQUFFLGNBQWM7U0FDbkIsQ0FBQztRQUNGLElBQUksR0FBRyxHQUFHLElBQUksTUFBTSxDQUFDO1lBQ25CLEtBQUssRUFBRSxhQUFhO1lBQ3BCLEtBQUssRUFBRSxRQUFRO1lBQ2YsUUFBUSxFQUFFLGFBQWE7WUFDdkIsT0FBTyxFQUFFLEtBQUssSUFBSSxFQUFFO2dCQUNsQixNQUFNLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRSxNQUFNLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFLGFBQWEsRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ3BGLENBQUM7U0FDRixDQUFDLENBQUM7UUFFSCxDQUFDLFNBQVMsa0JBQWtCO1lBQzFCLElBQUksV0FBVyxHQUFtQixRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsMEJBQTBCO1lBRTNGLFdBQVcsQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDO1lBQzVCLFdBQVcsQ0FBQyxFQUFFLEdBQUcsY0FBYyxDQUFDO1lBQ2hDLFdBQVcsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ3ZDLHNCQUFzQixDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUNoRCxJQUFJLFFBQVEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzNDLFdBQVcsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDbEMsUUFBUSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDL0MsV0FBVyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FDekMseUJBQXlCLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUVwQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBRUwsQ0FBQyxTQUFTLGNBQWM7WUFDdEIsSUFBSSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMzQyxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1lBQy9DLFlBQVksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDN0IsYUFBYSxDQUFDO2dCQUNaLEdBQUcsRUFBRSxHQUFHO2dCQUNSLGFBQWEsRUFBRSxNQUFNO2dCQUNyQixRQUFRLEVBQUUsR0FBRyxDQUFDLFFBQVE7Z0JBQ3RCLEtBQUssRUFBRSxLQUFLO2FBQ2IsQ0FBQyxDQUFBO1lBQ0YsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNkLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDbEIsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUNQLENBQUM7Q0FDRixDQUFDLENBQUM7QUFFSDs7Ozs7O0dBTUc7QUFDSCxLQUFLLFVBQVUsd0JBQXdCLENBQ3JDLElBQWMsRUFDZCxRQUE0RCxFQUM1RCxlQUF1QjtJQUV2QixJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWE7UUFBRSxRQUFRLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztJQUNwRSxJQUFJLEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3hDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsZUFBZSxDQUFDO0lBQ3pCLEdBQUcsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUM7SUFDNUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQ2YsR0FBRyxDQUFDLFdBQVcsQ0FDYixhQUFhLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLGFBQWEsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUN4RSxDQUNGLENBQUM7SUFDRixRQUFRLENBQUMsRUFBRSxDQUFDLHFCQUFxQixDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDL0QsR0FBRyxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsR0FBRywwQkFBMEIsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDckUsQ0FBQztBQUVEOzs7Ozs7O0dBT0c7QUFDSCxLQUFLLFVBQVUsK0JBQStCLENBQUMsSUFPOUM7SUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU07UUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDaEQsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ3RDLElBQUksQ0FBQyxZQUFZLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLHFFQUFxRTtRQUN4SCxJQUFJLENBQUMsTUFBTSxDQUFDLHFCQUFxQixDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxnREFBZ0Q7SUFDcEgsQ0FBQztJQUVELENBQUMsS0FBSyxVQUFVLGVBQWU7UUFDN0IsSUFBSSxHQUFHLEdBQVcsSUFBSSxNQUFNLENBQUM7WUFDM0IsS0FBSyxFQUFFLElBQUksQ0FBQyxXQUFXO1lBQ3ZCLEtBQUssRUFBRSxJQUFJLENBQUMsU0FBUztZQUNyQixRQUFRLEVBQUUsTUFBTSxvQkFBb0IsRUFBRSxFQUFFLDRGQUE0RjtZQUNwSSxNQUFNLEVBQUUsS0FBSyxFQUFFLGtQQUFrUDtZQUNqUSxRQUFRLEVBQUUsY0FBYztZQUN4QixPQUFPLEVBQUUsR0FBRyxFQUFFO2dCQUNaLElBQUksYUFBYSxHQUFXLENBQUMsQ0FBQztnQkFDOUIsZ0dBQWdHO2dCQUNoRyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUNqRCxxS0FBcUs7Z0JBQ3JLLElBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzNDLE1BQU0sQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7Z0JBQzNDLGlDQUFpQztnQkFDakMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQztnQkFDL0Msd0lBQXdJO2dCQUN4SSxNQUFNLENBQUMsS0FBSyxDQUFDLG1CQUFtQixHQUFHLDBCQUEwQixDQUMzRCxNQUFNLEVBQ04sU0FBUyxFQUNULENBQUMsQ0FDRixDQUFDO2dCQUVGLGdZQUFnWTtnQkFDaFksb0JBQW9CLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUV6QyxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQztnQkFDakQsSUFBSSxPQUFPLEdBQVcsQ0FBQyxDQUFDO2dCQUN4Qiw0REFBNEQ7Z0JBQzVELDBCQUEwQixDQUFDLEdBQUcsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLGFBQWEsQ0FBQyxDQUFDO1lBQ2xFLENBQUM7U0FDRixDQUFDLENBQUM7UUFFSCxDQUFDLFNBQVMsbUJBQW1CO1lBQzNCLGFBQWEsQ0FBQztnQkFDWixHQUFHLEVBQUUsR0FBRztnQkFDUixhQUFhLEVBQUUsSUFBSSxDQUFDLFlBQVk7Z0JBQ2hDLFFBQVEsRUFBRSxHQUFHLENBQUMsUUFBUTtnQkFDdEIsS0FBSyxFQUFFLEtBQUs7Z0JBQ1osT0FBTyxFQUFFLEdBQUcsQ0FBQyxPQUFPO2FBQ3JCLENBQUMsQ0FBQztZQUNILElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1lBQzFELElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUNoRCxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsR0FBRyxNQUFNLENBQ2pEO1FBQ0wsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUNMLE9BQU8sR0FBRyxDQUFBO0lBQ1osQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUVMOztPQUVHO0lBQ0gsU0FBUywwQkFBMEIsQ0FDakMsU0FBaUIsRUFDakIsT0FBZSxFQUNmLE9BQXVCLEVBQ3ZCLGFBQXFCO1FBRXJCLElBQUksUUFBZ0IsQ0FBQztRQUVyQixDQUFDLFNBQVMsb0JBQW9CO1lBQzVCLElBQUksU0FBUyxDQUFDLFFBQVEsQ0FBQyxNQUFNLElBQUksYUFBYTtnQkFBRSxPQUFPLENBQUMsMklBQTJJO1lBQ25NLElBQUksSUFBSSxHQUFXLElBQUksTUFBTSxDQUFDO2dCQUM1QixLQUFLLEVBQUUsU0FBUztnQkFDaEIsS0FBSyxFQUFFLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFO2dCQUN2QyxRQUFRLEVBQUUsY0FBYzthQUN6QixDQUFDLENBQUM7WUFFSCxvSEFBb0g7WUFDcEgsSUFBSSxTQUFTLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxPQUFPLEdBQUcsYUFBYSxFQUFFLENBQUM7Z0JBQ3hELDZHQUE2RztnQkFDN0csSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLEVBQUUsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDNUMsQ0FBQztpQkFBTSxJQUFJLFNBQVMsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLE9BQU8sSUFBSSxhQUFhLEVBQUUsQ0FBQztnQkFDaEUsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLEdBQUcsTUFBTSxDQUFDO2dCQUN2QixJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsR0FBRyxRQUFRLENBQUM7Z0JBQ3pCLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxFQUFFLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzdDLENBQUM7WUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU87Z0JBQUUsT0FBTyxDQUFDLCtFQUErRTtZQUMxRyxhQUFhLENBQUM7Z0JBQ1osR0FBRyxFQUFFLElBQUk7Z0JBQ1QsYUFBYSxFQUFFLG9CQUFvQjtnQkFDbkMsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO2dCQUN2QixLQUFLLEVBQUUsS0FBSztnQkFDWixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87YUFDdEIsQ0FBQyxDQUFDLENBQUMsZ2FBQWdhO1lBRXBhLFNBQVMsY0FBYyxDQUFDLFVBQW1CLElBQUk7Z0JBQzdDLDRGQUE0RjtnQkFDNUYsT0FBTyxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7Z0JBQ3ZCLHNIQUFzSDtnQkFDdEgsb0JBQW9CLENBQUMsYUFBYSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBQzlELGdFQUFnRTtnQkFDaEUsSUFBSSxPQUFPO29CQUFFLE9BQU8sSUFBSSxhQUFhLENBQUM7O29CQUNqQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO2dCQUVqQiw0REFBNEQ7Z0JBQzVELDBCQUEwQixDQUFDLFNBQVMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLGFBQWEsQ0FBQyxDQUFDO1lBQ3pFLENBQUM7UUFDSCxDQUFDLENBQUMsRUFBRSxDQUFDO1FBRUwsQ0FBQyxTQUFTLHdCQUF3QjtZQUNoQyxLQUNFLElBQUksQ0FBQyxHQUFHLE9BQU8sRUFDZixDQUFDLEdBQUcsT0FBTyxHQUFHLGFBQWEsSUFBSSxDQUFDLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQzVELENBQUMsRUFBRSxFQUNILENBQUM7Z0JBQ0QsK0VBQStFO2dCQUMvRSxRQUFRLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDakMsSUFBSSxDQUFDLGVBQWUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDO29CQUFFLE9BQU8sQ0FBQSxtTUFBbU07Z0JBQ3BRLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUM7b0JBQUUsT0FBTyxDQUFDLHlPQUF5TztnQkFDM1QsYUFBYSxDQUFDO29CQUNaLEdBQUcsRUFBRSxRQUFRO29CQUNiLGFBQWEsRUFBRSxPQUFPO29CQUN0QixRQUFRLEVBQUUsUUFBUSxDQUFDLFFBQVE7b0JBQzNCLEtBQUssRUFBRSxLQUFLO29CQUNaLE9BQU8sRUFBRSxRQUFRLENBQUMsT0FBTztpQkFDMUIsQ0FBQyxDQUFDO1lBQ0wsQ0FBQztRQUNILENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDUCxDQUFDO0lBQUEsQ0FBQztJQUdGOzs7T0FHRztJQUNILEtBQUssVUFBVSxvQkFBb0I7UUFDakMsSUFBSSxJQUFjLENBQUM7UUFDbkIsSUFBSSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7WUFDeEMsK0pBQStKO1lBQy9KLElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDO2dCQUFFLE9BQU87WUFDL0IsSUFBSSxLQUFLLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3ZDLElBQUksR0FBRyxHQUFHLElBQUksTUFBTSxDQUFDO2dCQUNuQixLQUFLLEVBQUUsS0FBSyxFQUFFLG1KQUFtSjtnQkFDakssS0FBSyxFQUFFO29CQUNMLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsa2FBQWthO29CQUNuZCxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLGlDQUFpQztpQkFDbkY7Z0JBQ0QsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsMkpBQTJKO2dCQUN0TCxRQUFRLEVBQUUsMEJBQTBCO2dCQUNwQyxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUM7YUFDdEMsQ0FBQyxDQUFDO1lBQ0gsT0FBTyxHQUFHLENBQUM7UUFDYixDQUFDLENBQUMsQ0FBQztRQUVILElBQUksZUFBZTtZQUNqQixJQUFJO2lCQUNELE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxlQUFlLENBQUMsSUFBSSxHQUFHLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUEsMFVBQTBVO2lCQUNuWixHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ1QsR0FBRyxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDO2dCQUN4RCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQSwwR0FBMEc7Z0JBQzVJLE9BQU8sR0FBRyxDQUFBO1lBQ1osQ0FBQyxDQUFDO2lCQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUVwQyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQSxnRUFBZ0U7UUFFdkgsU0FBUyxVQUFVLENBQUMsR0FBVyxFQUFFLEtBQWE7WUFDNUMsSUFBSSxLQUFLLEdBQUcsU0FBUyxDQUFDLEtBQUssRUFBRSw2QkFBNkIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLFNBQVMsQ0FBQTtZQUMvRSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ25CLElBQUksU0FBUyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDOUMsSUFBSSxDQUFDLEtBQUs7Z0JBQUUsT0FBTztZQUNuQixJQUFJLFNBQVMsR0FDWCxLQUFLLENBQUMsSUFBSSxDQUNSLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLEdBQUcsY0FBYyxDQUFDLENBRXRELENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRSxLQUFLLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUNqRCx3RUFBd0U7WUFDeEUsMkJBQTJCLEVBQUUsQ0FBQztZQUU5QixJQUFJLEtBQUssR0FDUCxLQUFLLENBQUMsSUFBSSxDQUNSLFlBQVksQ0FBQyxRQUE0QyxDQUMxRDtpQkFDRSxJQUFJLENBQ0gsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUNOLEdBQUcsQ0FBQyxPQUFPLENBQUMsY0FBYztnQkFDMUIsR0FBRyxDQUFDLE9BQU8sQ0FBQyxjQUFjLEtBQUssU0FBUyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQ3pELENBQUE7WUFFTCxJQUFJLEtBQUs7Z0JBQUUsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBRTFCLHFGQUFxRjtZQUNyRixJQUFJLGVBQWUsR0FBRyxXQUFXLENBQUM7Z0JBQ2hDLEtBQUssRUFBRSxLQUFLO2dCQUNaLFNBQVMsRUFBRSxHQUFHLENBQUMsU0FBUztnQkFDeEIsU0FBUyxFQUFFLFNBQVM7Z0JBQ3BCLGlCQUFpQixFQUFFLEtBQUs7Z0JBQ3hCLGlCQUFpQixFQUFFLEtBQUs7YUFDekIsQ0FBQyxJQUFJLFNBQVMsQ0FBQztZQUVoQixJQUFJLENBQUMsZUFBZTtnQkFBRSxPQUFPO1lBRTdCLFNBQVMsQ0FBQyxPQUFPLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztZQUN6QyxTQUFTLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7WUFDaEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxxQkFBcUIsQ0FBQyxVQUFVLEVBQUUsU0FBUyxDQUFDLENBQUM7WUFHL0QscURBQXFEO1lBQ3JELE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUN4QixvQ0FBb0M7WUFDcEMsa0JBQWtCLENBQUMsZUFBZSxDQUFDLENBQUM7WUFHcEMseUJBQXlCO1lBQ3pCLGdCQUFnQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNyQyxDQUFDO1FBQUEsQ0FBQztJQUNKLENBQUM7QUFFSCxDQUFDO0FBSUQ7O0dBRUc7QUFDSCxTQUFTLG1CQUFtQixDQUFDLFNBQXlDO0lBQ3BFLElBQUksTUFBTSxHQUFHLDRCQUE0QixDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsTUFBTSxHQUFHLGdCQUFnQixHQUFHLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEgsSUFBSSxDQUFDLE1BQU07UUFBRSxPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsNENBQTRDLENBQUMsQ0FBQztJQUM5RSxJQUFJLEdBQWUsQ0FBQztJQUVwQixDQUFDLFNBQVMsY0FBYztRQUN0QixJQUFJLEtBQUssR0FBRyxNQUFNLENBQUMsWUFBWSxHQUFHLDRCQUE0QixDQUFDO1FBQy9ELElBQUksTUFBTSxLQUFLLE9BQU8sQ0FBQyxRQUFRO1lBQzdCLEtBQUssSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxjQUFjLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOztZQUU5RSxLQUFLLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFNUUsR0FBRyxHQUFHLFNBQVMsQ0FBQyxLQUFLLEVBQUUsV0FBVyxDQUFDLElBQUksU0FBUyxDQUFDO1FBQ2pELElBQUksQ0FBQyxHQUFHO1lBQUUsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLCtCQUErQixDQUFDLENBQUM7UUFFOUQsSUFBSSxNQUFNLEtBQUssT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ2pDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQztnQkFBRSxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUEsMERBQTBEO2lCQUMvRyxDQUFDO2dCQUNKLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUEsd0ZBQXdGO2dCQUNwSCw0QkFBNEIsQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLFlBQVksR0FBRyxnQkFBZ0IsR0FBRyxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUEsa0RBQWtEO1lBQzVLLENBQUM7UUFFSCxDQUFDO1FBRUQsc0NBQXNDLENBQUM7WUFDckMsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDO1lBQ2IsU0FBUyxFQUFFLGdCQUFnQjtZQUMzQixRQUFRLEVBQUU7Z0JBQ1IsRUFBRSxFQUFFLE1BQU07Z0JBQ1YsYUFBYSxFQUFFLGFBQWE7YUFDN0I7WUFDRCxTQUFTLEVBQUUsU0FBUztTQUNyQixDQUFDLENBQUE7SUFDSixDQUFDLENBQUMsRUFBRSxDQUFDO0lBRUwsQ0FBQyxTQUFTLHVCQUF1QjtRQUMvQixHQUFHLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxZQUFZLEdBQUcsc0JBQXNCLEdBQUcsTUFBTSxFQUFFLFdBQVcsQ0FBQyxJQUFJLFNBQVMsQ0FBQztRQUNqRyxJQUFJLENBQUMsR0FBRztZQUFFLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO1FBRTlELG1CQUFtQixDQUFDO1lBQ2xCLE9BQU8sRUFBRSxDQUFDLEdBQUcsQ0FBQztZQUNkLFNBQVMsRUFBRSxNQUFNO1lBQ2pCLEtBQUssRUFBRSxnQkFBZ0I7WUFDdkIsU0FBUyxFQUFFLGdCQUFnQjtZQUMzQixLQUFLLEVBQUU7Z0JBQ0wsRUFBRSxFQUFFLGdDQUFnQztnQkFDcEMsRUFBRSxFQUFFLHFDQUFxQzthQUMxQztTQUNGLENBQUMsQ0FBQTtJQUVKLENBQUMsQ0FBQyxFQUFFLENBQUM7QUFHUCxDQUFDO0FBQ0Q7Ozs7O0dBS0c7QUFDSCxTQUFTLGtCQUFrQixDQUN6QixZQUE0QixFQUM1QixHQUFZLEVBQ1osS0FBYTtJQUViLFlBQVksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztJQUN0QyxHQUFHLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ3pFLFlBQVksQ0FBQyxLQUFLLENBQUMsV0FBVyxHQUFHLFFBQVEsQ0FBQztBQUM1QyxDQUFDO0FBQUEsQ0FBQztBQUVGOzs7Ozs7O0dBT0c7QUFDSCxLQUFLLFVBQVUsZ0NBQWdDLENBQzdDLGFBQXFCLEVBQ3JCLFFBQTRELEVBQzVELFlBQTRDLFlBQVksRUFDeEQsaUJBQTBCLEtBQUssRUFDL0IsV0FBb0I7SUFFcEIsWUFBWTtJQUNaLElBQUksQ0FBQyxhQUFhO1FBQUUsT0FBTztJQUMzQixJQUFJLFNBQVMsS0FBSyxZQUFZLElBQUksY0FBYztRQUM5QyxTQUFTLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUMzQixJQUFJLFNBQVMsQ0FBQyxRQUFRLENBQUMsTUFBTSxLQUFLLENBQUM7UUFDakMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDdkQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1FBQUUsUUFBUSxDQUFDLEVBQUUsR0FBRyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBZ0IsQ0FBQztJQUNyRSxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWE7UUFBRSxRQUFRLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztJQUNwRSxJQUFJLENBQUMsV0FBVztRQUFFLFdBQVcsR0FBRyxrQkFBa0IsQ0FBQztJQUVuRCxJQUFJLFlBQVksR0FBRyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUVwRixJQUFJLE9BQU8sR0FBRyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFakgsSUFBSSxDQUFDLE9BQU87UUFDVixPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQ2hCLDJEQUEyRCxDQUM1RCxDQUFDO0lBRUosSUFBSSxTQUFTLEdBQUcsWUFBWSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBRTVDLElBQUksTUFBTSxHQUFpQixJQUFJLEtBQUssRUFBRSxFQUFFLEdBQUcsR0FBZSxFQUFFLENBQUM7SUFFN0QsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtRQUNwQixJQUFJLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxDQUFDLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQztZQUNwRyxnREFBZ0Q7WUFDaEQsTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNsQyxHQUFHLEdBQUcsRUFBRSxDQUFDO1lBQ1QsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNkLE9BQU07UUFDUixDQUFDO1FBQ0QsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNkLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUM7WUFDN0MsTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTtJQUNyQyxDQUFDLENBQUMsQ0FBQztJQUVILElBQUksYUFBYSxHQUFHLE1BQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBQyxLQUFLLEVBQUMsRUFBRSxDQUFDLE1BQU0sNkJBQTZCLENBQUMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUV4SCxNQUFNLEdBQUcsSUFBSSxDQUFDO0lBQ2QsR0FBRyxHQUFHLElBQUksQ0FBQztJQUVYLE9BQU8sc0NBQXNDLENBQUM7UUFDNUMsTUFBTSxFQUFFLGFBQWE7UUFDckIsU0FBUyxFQUFFLFNBQVM7UUFDcEIsUUFBUSxFQUFFLFFBQVE7UUFDbEIsU0FBUyxFQUFFLFlBQVk7S0FDeEIsQ0FBQyxDQUFDO0FBRUwsQ0FBQztBQUNEOzs7Ozs7R0FNRztBQUNILEtBQUssVUFBVSw2QkFBNkIsQ0FBQyxPQUFtQixFQUFFLEtBQWU7SUFDL0UsSUFBSSxDQUFDLE9BQU87UUFBRSxPQUFPO0lBQ3JCLEtBQUssR0FBRyxLQUFLLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEMsSUFBSSxrQkFBa0IsR0FBRyxPQUFPO1NBQzdCLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsVUFBVSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQSx3TEFBd0w7SUFFN1AsSUFBSSxrQkFBa0IsQ0FBQyxNQUFNLEdBQUcsQ0FBQztRQUFFLE9BQU8sT0FBTyxDQUFDLENBQUEsaURBQWlEO0lBQ25HLHFFQUFxRTtJQUVyRSxJQUFJLFFBQWtCLENBQUM7SUFDdkIsSUFBSSxLQUFLLEdBQWdDLElBQUksR0FBRyxFQUFFLENBQUMsQ0FBQSwwSkFBMEo7SUFFN00sTUFBTSxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBQ3JCLEtBQUssTUFBTSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFDMUIscUZBQXFGO1FBQ3JGLElBQUksa0JBQWtCLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQztZQUNsQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0saUJBQWlCLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxNQUFNLHVCQUF1QixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUE7YUFDaEYsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUM7WUFDakMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUNqQixJQUFJLENBQUMsVUFBVSxFQUFFLGFBQWEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO2VBQzNFLENBQ0Qsa0JBQWtCLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDOztvQkFFOUQsT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLENBQUM7WUFDaEUsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7O1lBQzFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUdELE9BQU8sU0FBUyxDQUFBO0lBRWhCLEtBQUssVUFBVSx1QkFBdUIsQ0FBQyxHQUFhO1FBQ2xELElBQUksQ0FBQyxHQUFHO1lBQUUsT0FBTyxFQUFFLENBQUM7UUFDcEIsSUFBSSxHQUFXLEVBQUUsS0FBYSxDQUFDO1FBRS9CLE1BQU0sU0FBUyxHQUFhLEVBQUUsQ0FBQztRQUUvQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ3BDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDO2dCQUMxQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN2QixTQUFRO1lBQ1YsQ0FBQztZQUFBLENBQUM7WUFDRixHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztpQkFDVCxVQUFVLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFBLGlFQUFpRTtpQkFDcEYsVUFBVSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDckMsUUFBUSxHQUFHLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUMzQixLQUFLLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLFNBQVMsQ0FBQztZQUVqQyxJQUFJLEdBQUcsQ0FBQyxNQUFNLEtBQUssQ0FBQztnQkFDbEIsTUFBTSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFDLElBQUksRUFBQyxFQUFFO2dCQUN2QywyR0FBMkc7Z0JBQzNHLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxjQUFjLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUEsdURBQXVEO2lCQUNoSCxJQUFJLEdBQUcsQ0FBQyxNQUFNLEtBQUssS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDO2dCQUN0QyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBLHlHQUF5Rzs7Z0JBQ3RLLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQywrREFBK0Q7UUFFbkksQ0FBQztRQUVELElBQUksR0FBRyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQztZQUM1QyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQSwrREFBK0Q7O1lBQy9FLE9BQU8sdUJBQXVCLENBQUMsU0FBUyxFQUFFLEtBQUssRUFBRSxHQUFHLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO0lBRWhHLENBQUM7SUFFRCxLQUFLLFVBQVUsY0FBYyxDQUFDLElBQVksRUFBRSxHQUFXO1FBQ3JELElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUNsQixJQUFJLENBQUMsQ0FBQyxlQUFlLEVBQUUsZUFBZSxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztZQUFFLE9BQU8sRUFBRSxDQUFDO1FBRWxFLElBQUksS0FBZSxFQUFFLElBQWMsRUFBRSxNQUEwQixDQUFDO1FBRWhFLElBQUksR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRXRCLElBQUksSUFBSSxHQUNOLE1BQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBQyxHQUFHLEVBQUMsRUFBRTtZQUNyQyxLQUFLLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQSxDQUFBLGtHQUFrRztZQUN4SCxJQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQztnQkFDN0MsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFdkMsSUFBSSxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUM7Z0JBQUUsT0FBTyxFQUFFLENBQUM7WUFFaEMsTUFBTSxHQUFHLE1BQU0sT0FBTyxDQUFDLEdBQUcsQ0FDeEIsS0FBSyxDQUFDLENBQUMsQ0FBQztpQkFDTCxLQUFLLENBQUMsR0FBRyxDQUFDO2lCQUNWLEdBQUcsQ0FBQyxLQUFLLEVBQUMsV0FBVyxFQUFDLEVBQUUsQ0FBQyxNQUFNLGtCQUFrQixDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxJQUFJLGtDQUFrQyxDQUFDLENBQUMsQ0FBQztZQUV0SSxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxLQUFLO2dCQUNwQixPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQywwQ0FBMEM7WUFDckUsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRTNCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFTixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFekIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxLQUFLLFVBQVUsaUJBQWlCLENBQUMsR0FBRztRQUNsQyxJQUFJLFFBQVEsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsVUFBVSxFQUFFLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDcEUsSUFBSSxHQUFHLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7UUFDM0QsSUFBSSxDQUFDLEdBQUc7WUFDTixPQUFPLFFBQVEsQ0FBQztRQUNsQixHQUFHO1lBQ0QsR0FBRyxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDO2lCQUNwQixPQUFPLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUM7aUJBQzlCLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVyQixJQUFJLE1BQU0sR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRS9CLElBQUksSUFBZSxFQUFFLEtBQVksQ0FBQztRQUVsQyxNQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUMsSUFBSSxFQUFDLEVBQUU7WUFDdkMsa0hBQWtIO1lBQ2xILElBQUksQ0FBQyxDQUFDLGVBQWUsRUFBRSxlQUFlLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO2dCQUFFLE9BQU87WUFDL0QsS0FBSyxHQUFHLE1BQU0sZUFBZSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztZQUMzQyxJQUFJLEdBQUcsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssTUFBTSxDQUFDLENBQUM7WUFDbEQsSUFBSSxDQUFDLElBQUk7Z0JBQUUsT0FBTztZQUVsQixHQUFHLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQ3JCLElBQUksQ0FBQyxDQUFDLENBQUM7aUJBQ0osSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQ2QsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDN0QsRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsTUFBTSxLQUFLLENBQUMsQ0FBQztpQkFDckMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7WUFFeEIsUUFBUSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUMvQixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSztzQkFDWCxJQUFJO3NCQUNKLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO3NCQUN6QixHQUFHLENBQUM7WUFFUixTQUFTLFFBQVEsQ0FBQyxHQUFXO2dCQUMzQixPQUFPLEdBQUc7cUJBQ1AsVUFBVSxDQUFDLE1BQU0sR0FBRyxHQUFHLEVBQUUsRUFBRSxDQUFDO3FCQUM1QixLQUFLLENBQUMsR0FBRyxDQUFDO3FCQUNWLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUE7WUFDekMsQ0FBQztRQUNILENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFSixPQUFPLFFBQVEsQ0FBQztJQUVsQixDQUFDO0lBRUQ7Ozs7Ozs7T0FPRztJQUNILEtBQUssVUFBVSxrQkFBa0IsQ0FBQyxJQUFZLEVBQUUsTUFBYyxFQUFFLGFBQXFCLEVBQUUsTUFBYztRQUVuRyxJQUFJLE1BQU0sS0FBSyxLQUFLLElBQUksTUFBTSxDQUFDLGFBQWEsQ0FBQztZQUFFLGFBQWEsR0FBRyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUV0RyxJQUFJLE1BQU0sR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxNQUFNLEdBQUcsR0FBRyxHQUFHLGFBQWEsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFFckcsSUFBSSxNQUFNO1lBQ1IsT0FBTyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUV0RCxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDVixLQUFLLENBQUMsNERBQTRELENBQUMsQ0FBQztZQUNwRSxPQUFPLElBQUksS0FBSyxDQUFDLDREQUE0RCxDQUFDLENBQUM7UUFDakYsQ0FBQztRQUFBLENBQUM7UUFFRixJQUFJLElBQUksS0FBSyxJQUFJO1lBQUUsSUFBSSxHQUFHLElBQUksQ0FBQztRQUUvQixJQUFJLENBQUMsQ0FBQyxlQUFlLEVBQUUsZUFBZSxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztZQUFFLE9BQU8sRUFBRSxDQUFDLENBQUEsbVBBQW1QO1FBQ3JULElBQUksQ0FBQyxhQUFhLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUM5QiwyRkFBMkY7WUFDM0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxhQUFhLEVBQUUsV0FBVyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQ3BFLE9BQU8sSUFBSSxLQUFLLENBQUMsMEJBQTBCLENBQUMsQ0FBQztRQUMvQyxDQUFDO1FBQUEsQ0FBQztRQUNGLElBQUksQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQztZQUNqQywwRkFBMEY7WUFDMUYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDakMsT0FBTyxJQUFJLEtBQUssQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1FBQy9DLENBQUM7UUFBQSxDQUFDLENBQUEsZ0NBQWdDO1FBQ2xDLElBQUksS0FBSyxHQUFVLE1BQU0sZUFBZSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDWCxtR0FBbUc7WUFDbkcsT0FBTyxJQUFJLEtBQUssQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1FBQy9DLENBQUM7UUFBQSxDQUFDO1FBRUYsSUFBSSxhQUFhLEdBQWlCLGVBQWUsQ0FBQyxhQUFhLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztRQUUzRixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDbkIseUVBQXlFO1lBQ3pFLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEVBQUUsYUFBYSxDQUFDLENBQUM7WUFDL0MsT0FBTyxJQUFJLEtBQUssQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1FBQy9DLENBQUM7UUFBQSxDQUFDO1FBRUYsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sR0FBRyxHQUFHLEdBQUcsYUFBYSxHQUFHLEdBQUcsR0FBRyxJQUFJLEVBQUUsYUFBYSxDQUFDLENBQUMsQ0FBQTtRQUVyRSxPQUFPLGNBQWMsQ0FBQyxhQUFhLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBRXhELFNBQVMsY0FBYyxDQUFDLE9BQXFCLEVBQUUsS0FBZTtZQUM1RCxJQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFLENBQUM7Z0JBQ3ZCLDJEQUEyRDtnQkFDM0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLENBQUM7Z0JBQ2pDLE9BQU8sSUFBSSxLQUFLLENBQUMsMEJBQTBCLENBQUMsQ0FBQztZQUMvQyxDQUFDO1lBQUEsQ0FBQztZQUVGLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUM7Z0JBQUUsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsMElBQTBJO1lBRXhNLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxLQUFLLEtBQUs7Z0JBQ2xDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM1QyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDeEMsT0FBTyxJQUFJLEtBQUssQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDO1lBQUEsQ0FBQztZQUU1RCxJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNsRSxJQUFJLENBQUMsS0FBSztnQkFBRSxPQUFPLElBQUksS0FBSyxDQUFDLDRCQUE0QixDQUFDLENBQUM7WUFDM0QsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDakUsSUFBSSxDQUFDLElBQUk7Z0JBQUUsT0FBTyxJQUFJLEtBQUssQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO1lBQ3pELE9BQU8sT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUNwRSxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQ2pDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNkLENBQUM7SUFFSCxDQUFDO0FBQ0gsQ0FBQztBQUdEOzs7Ozs7Ozs7R0FTRztBQUNILFNBQVMsdUJBQXVCLENBQUMsU0FBbUIsRUFBRSxLQUFlLEVBQUUsR0FBVyxFQUFFLEtBQWE7SUFDL0YsSUFBSSxHQUFHLEdBQUcsQ0FBQztRQUFFLEdBQUcsR0FBRyxDQUFDLENBQUM7SUFFckIsSUFBSSxHQUFHLEdBQUcsQ0FBQyxFQUFFLENBQUM7UUFDWixLQUFLLENBQUMscUlBQXFJLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsR0FBRyxXQUFXLEdBQUcsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDeE0sT0FBTztJQUNULENBQUM7SUFFRCxJQUFJLFVBQVUsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsR0FBRyxHQUFHLENBQUMsRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDOUUsSUFBSSxDQUFDLFVBQVU7UUFBRSxPQUFPO0lBRXhCLElBQUksR0FBRyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEdBQUcsT0FBTyxHQUFHLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQztJQUVqRCxJQUFJLE1BQU0sR0FBRyxVQUFVO1NBQ3BCLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUMxQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRTdCLE1BQU0sR0FBRyxNQUFNO1NBQ1osR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBLHVGQUF1RjtTQUN4SSxNQUFNLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQSx5Q0FBeUM7SUFHcEcsS0FBSztTQUNGLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUNkLElBQUksSUFBSSxLQUFLLGVBQWU7WUFBRSxPQUFPO1FBQ3JDLElBQUksSUFBSSxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQSx5REFBeUQ7UUFDL0gsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBQ2xCLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztZQUFFLE9BQU8sQ0FBQSw4REFBOEQ7UUFFMUYsU0FBUyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDO1lBQ2xDLE1BQU07aUJBQ0gsR0FBRyxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQ2pCLHVCQUF1QixDQUFDLFdBQVcsQ0FBQyxDQUFDO2lCQUN0QyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFaEIsU0FBUyx1QkFBdUIsQ0FBQyxXQUFxQjtZQUNwRCx1TEFBdUw7WUFDdkwsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7Z0JBQUUsT0FBTyxFQUFFLENBQUM7WUFDbEQsSUFBSSxPQUFPLEdBQVcsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUEsdUZBQXVGO1lBRTVILElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUM7Z0JBQ2pELE9BQU8sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBLDZMQUE2TDs7Z0JBQy9PLE9BQU8sR0FBRyxFQUFFLENBQUM7WUFFbEIsSUFBSSxHQUFHLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLEdBQUcsT0FBTyxDQUFDLENBQUM7WUFDcEQsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUM1QixJQUFJLENBQUMsS0FBSztnQkFBRSxPQUFPLEVBQUUsQ0FBQztZQUN0QixJQUFJLE9BQU8sQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDO2dCQUM1QixPQUFPLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDOztnQkFDbEMsT0FBTyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkIsQ0FBQztJQUVILENBQUMsQ0FBQyxDQUFDO0lBRUwsT0FBTyx1QkFBdUIsRUFBRSxDQUFDO0lBRWpDLFNBQVMsdUJBQXVCO1FBQzlCLElBQUksS0FBSyxHQUFlLEVBQUUsRUFBRSxNQUFnQixDQUFDO1FBQzdDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDMUMsTUFBTSxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEMsS0FBSyxJQUFJLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSxHQUFHLE1BQU0sQ0FBQyxNQUFNLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztnQkFDMUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUM7b0JBQ1osS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsS0FBSyxHQUFHLEtBQUssRUFBRSxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RFLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2hDLENBQUM7UUFDSCxDQUFDO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0FBQ0gsQ0FBQztBQUdEOztHQUVHO0FBQ0gsS0FBSyxVQUFVLFdBQVc7SUFDeEIsOEVBQThFO0lBQzlFLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQzlCLENBQUM7QUFFRDs7Ozs7OztHQU9HO0FBQ0gsS0FBSyxVQUFVLCtCQUErQixDQUFDLElBTzlDO0lBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPO1FBQ2YsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUNoQiwwREFBMEQsQ0FDM0QsQ0FBQztJQUNKLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUztRQUFFLElBQUksQ0FBQyxTQUFTLEdBQUcsWUFBWSxDQUFDO0lBQ25ELElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxZQUFZLElBQUksSUFBSSxDQUFDLGNBQWM7UUFDeEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBQ2hDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsTUFBTSxLQUFLLENBQUM7UUFDdEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQzVELElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUztRQUNqQixJQUFJLENBQUMsU0FBUyxHQUFHLFlBQVksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFFOUMsQ0FBQyxTQUFTLHdCQUF3QjtRQUNoQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU07WUFBRSxPQUFPO1FBQ3pCLGdFQUFnRTtRQUNoRSxJQUFJLEdBQUcsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLFlBQVksR0FBRyxhQUFhLEdBQUcsTUFBTSxFQUFFLFdBQVcsQ0FBQyxJQUFJLFNBQVMsQ0FBQztRQUU1RixJQUFJLENBQUMsR0FBRztZQUFFLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO1FBRTlELG1CQUFtQixDQUFDO1lBQ2xCLE9BQU8sRUFBRSxDQUFDLEdBQUcsQ0FBQztZQUNkLFNBQVMsRUFBRSxTQUFTLENBQUMsUUFBUSxDQUFDLEVBQUUsc0JBQXFDO1lBQ3JFLEtBQUssRUFBRSxXQUFXO1lBQ2xCLFNBQVMsRUFBRSxnQkFBZ0I7WUFDM0IsS0FBSyxFQUFFO2dCQUNMLEVBQUUsRUFBRSxnQ0FBZ0M7Z0JBQ3BDLEVBQUUsRUFBRSxxQ0FBcUM7YUFDMUM7U0FDRixDQUFDLENBQUM7SUFHTCxDQUFDLENBQUMsRUFBRSxDQUFDO0lBRUwsTUFBTSw0QkFBNEIsRUFBRSxDQUFDO0lBRXJDLENBQUMsU0FBUyw2QkFBNkI7UUFDckMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU07WUFBRSxPQUFPLENBQUMsb0tBQW9LO1FBRTdNLGNBQWMsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLFFBQVEsQ0FBQyxFQUFFLGtCQUFpQyxFQUFFLGFBQWEsQ0FBQyxDQUFDLENBQUEsMkJBQTJCO1FBRXBILGNBQWMsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLGVBQWUsQ0FBQyxFQUFFLGFBQWEsQ0FBQyxDQUFDLENBQUEsaUNBQWlDO1FBRTlGLFNBQVMsY0FBYyxDQUFDLEtBQWEsRUFBRSxFQUFlLEVBQUUsUUFBd0I7WUFDOUUsSUFBSSxlQUFlLEdBQWEsd0JBQXdCLENBQ3RELElBQUksQ0FBQyxPQUFPLEVBQ1osSUFBSSxDQUFDLE1BQU0sQ0FDWixDQUFDLENBQUMsNkZBQTZGO1lBQ2hHLHlKQUF5SjtZQUN6SixJQUFJLFFBQVEsR0FBZSxtQkFBbUIsQ0FBQyxJQUFJLENBQ2pELENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUM3RCxDQUFDLENBQUMsNlJBQTZSO1lBRWhTLElBQUksQ0FBQyxRQUFRLElBQUksUUFBUSxDQUFDLE1BQU0sS0FBSyxDQUFDO2dCQUFFLE9BQU87WUFFL0Msc0NBQXNDLENBQUM7Z0JBQ3JDLE1BQU0sRUFBRSxDQUFDLFFBQVEsQ0FBQztnQkFDbEIsU0FBUyxFQUFFLGdCQUFnQjtnQkFDM0IsUUFBUSxFQUFFO29CQUNSLEVBQUUsRUFBRSxFQUFFO29CQUNOLGFBQWEsRUFBRSxRQUFRO2lCQUN4QjtnQkFDRCxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7YUFDMUIsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztJQUNILENBQUMsQ0FBQyxFQUFFLENBQUM7SUFFTDs7S0FFQztJQUNELEtBQUssVUFBVSw0QkFBNEI7UUFDekMsSUFBSSxNQUFNLEdBQWlCLElBQUksQ0FBQyxNQUFNLElBQUksZ0JBQWdCLEVBQUUsQ0FBQztRQUU3RCxJQUFJLENBQUMsTUFBTSxJQUFJLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQztZQUFFLE9BQU8sSUFBSSxLQUFLLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxDQUFDLGtGQUFrRjtRQUVsSyxNQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTTthQUNyQixHQUFHLENBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyxFQUFFO1lBQ2pCLDZFQUE2RTtZQUM3RSxzS0FBc0s7WUFDdEssSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxVQUFVLENBQUM7Z0JBQUUsT0FBTztZQUM5RCxzQ0FBc0MsQ0FBQztnQkFDckMsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUMsS0FBSyxDQUFDO2dCQUN0QyxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7Z0JBQ3pCLFFBQVEsRUFBRTtvQkFDUixhQUFhLEVBQUUsYUFBYTtvQkFDNUIsRUFBRSxFQUFFLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQ2xFO2dCQUNELFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUzthQUMxQixDQUFDLENBQUM7WUFFSCxLQUFLLFVBQVUsaUJBQWlCLENBQUMsR0FBZTtnQkFDOUMsOExBQThMO2dCQUM5TCx1RkFBdUY7Z0JBQ3ZGLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTTtvQkFBRSxPQUFPLENBQUMsTUFBTSw2QkFBNkIsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7cUJBQy9FLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxXQUFXLENBQUM7b0JBQ3ZDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsTUFBTSw2QkFBNkIsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxzR0FBc0c7cUJBQzNOLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxVQUFVLENBQUM7b0JBQ3RDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsTUFBTSw2QkFBNkIsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxzR0FBc0c7Z0JBRS9OLFNBQVMsYUFBYSxDQUFDLEdBQTJDO29CQUNoRSwwU0FBMFM7b0JBQzFTLE9BQU87d0JBQ0wsOERBQThEO3dCQUM5RCxNQUFNLENBQUMsSUFBSSxHQUFHLGVBQWUsRUFBRSxxREFBcUQ7d0JBQ3BGLDhJQUE4STt3QkFDOUksR0FBRyxJQUFJLENBQUMsU0FBUzs2QkFDZCxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7cUJBQzFCLENBQUM7Z0JBRUosQ0FBQztnQkFBQSxDQUFDO1lBQ0osQ0FBQztZQUFBLENBQUM7UUFDSixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRU4sU0FBUyxnQkFBZ0I7WUFDdkIsSUFBSSxZQUFZLEdBQWlCLGlCQUFpQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUNqRyxJQUFJLENBQUMsWUFBWTtnQkFBRSxPQUFPLEVBQUUsQ0FBQztZQUMzQixPQUFPLFlBQVk7aUJBQ2QsTUFBTSxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FDaEIseUJBQXlCLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckYsQ0FBQztRQUFBLENBQUM7SUFDTixDQUFDO0lBQUEsQ0FBQztJQUVGLFNBQVMsU0FBUyxDQUFDLElBQVk7UUFDN0IsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUNqQixrT0FBa087WUFDbE8sWUFBWSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDeEQsT0FBTyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBbUIsQ0FBQTtRQUNuRCxDQUFDOztZQUNJLE9BQU8sNEJBQTRCLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksRUFBRSxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdkcsQ0FBQztJQUFBLENBQUM7SUFFRjs7OztLQUlDO0lBQ0QsU0FBUyx3QkFBd0IsQ0FBQyxPQUFlLEVBQUUsTUFBZTtRQUNoRSwwRkFBMEY7UUFDMUYsTUFBTSxlQUFlLEdBQWE7WUFDaEMsTUFBTSxDQUFDLGFBQWEsR0FBRyxFQUFFLEdBQUcsTUFBTSxFQUFFLDJCQUEyQjtZQUMvRCxPQUFPLEdBQUcsVUFBVTtZQUNwQixPQUFPLEdBQUcsV0FBVztZQUNyQixNQUFNLENBQUMsY0FBYyxHQUFHLEVBQUUsR0FBRyxNQUFNLEVBQUUsMkJBQTJCO1NBQ2pFLENBQUMsQ0FBQyxvUEFBb1A7UUFFdlAsSUFBSSxDQUFDLE1BQU07WUFBRSxPQUFPLGVBQWUsQ0FBQyxDQUFDLG9LQUFvSztRQUV6TSx3Q0FBd0M7UUFDeEMsQ0FBQyxTQUFTLDBCQUEwQjtZQUNsQyxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQ3JFLE9BQU8sQ0FBQyx1TEFBdUw7WUFFak0sSUFBSSx1QkFBdUIsR0FBRyxtQkFBbUIsQ0FBQyxNQUFNLENBQ3RELENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FDUix5QkFBeUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRWxFLElBQUksYUFBYSxHQUFHLHVCQUF1QixDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQzNELEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxVQUFVLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUM5QyxDQUFDO1lBQ0YsSUFBSSxjQUFjLEdBQUcsdUJBQXVCLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FDNUQsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQy9DLENBQUM7WUFFRixJQUFJLE1BQU0sS0FBSyxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUM7Z0JBQ2pDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUM7b0JBQ3RCLENBQUMsQ0FBQyxDQUFDLGNBQWMsR0FBRzt3QkFDbEIsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQztxQkFDcEUsQ0FBQztvQkFDRixDQUFDLENBQUMsQ0FBQyxjQUFjLEdBQUcsY0FBYzt3QkFDaEMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFFLENBQUM7aUJBQU0sSUFDTCxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQzs7b0JBRTVFLENBQUMsWUFBWSxDQUFDLG9CQUFvQixFQUFFLFlBQVksQ0FBQyxlQUFlO3FCQUMvRCxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQzs7b0JBRTlCLFVBQVUsS0FBSyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBQzFDLDRJQUE0STtnQkFFNUksSUFBSSxNQUFNLEdBQVcsRUFBRSxDQUFDO2dCQUN4QixJQUFJLE9BQU8sS0FBSyxNQUFNLENBQUMsYUFBYTtvQkFBRSxNQUFNLEdBQUcsTUFBTSxDQUFDO2dCQUN0RCxJQUFJLE9BQU8sS0FBSyxNQUFNLENBQUMsVUFBVTtvQkFBRSxNQUFNLEdBQUcsTUFBTSxDQUFDO2dCQUVuRCxJQUFJLE1BQU0sS0FBSyxPQUFPLENBQUMsU0FBUztvQkFDOUIsTUFBTSxJQUFJLGtCQUFrQixFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBLHNQQUFzUDtnQkFFdlMsQ0FBQyxTQUFTLGVBQWU7b0JBQ3ZCLDBHQUEwRztvQkFDMUcsSUFBSSxPQUFPLEtBQUssTUFBTSxDQUFDLGFBQWE7d0JBQUUsT0FBTztvQkFFN0MsSUFDRSxNQUFNLEtBQUssT0FBTyxDQUFDLFVBQVU7OzRCQUU3QixDQUFDLFlBQVksQ0FBQyxvQkFBb0I7Z0NBQ2xDLFlBQVksQ0FBQyxlQUFlOzZCQUMzQixDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQzt3QkFFOUIsTUFBTSxHQUFHLFNBQVMsQ0FBQztnQkFDdkIsQ0FBQyxDQUFDLEVBQUUsQ0FBQztnQkFHTCxjQUFjLEdBQUc7b0JBQ2YsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQzVCLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxDQUN0QztpQkFDRixDQUFDO1lBQ0osQ0FBQztZQUVELElBQUksYUFBYSxFQUFFLE1BQU0sR0FBRyxDQUFDLElBQUksYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFLE1BQU0sR0FBRyxDQUFDO2dCQUMzRCxlQUFlLENBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzdELElBQUksY0FBYyxFQUFFLE1BQU0sR0FBRyxDQUFDLElBQUksY0FBYyxDQUFDLENBQUMsQ0FBQyxFQUFFLE1BQU0sR0FBRyxDQUFDO2dCQUM3RCxlQUFlLENBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBVSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hFLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFFTCxPQUFPLGVBQWUsQ0FBQztJQUN6QixDQUFDO0lBR0Q7O09BRUc7SUFDSCxTQUFTLDJCQUEyQjtRQUNsQyxJQUFJLEtBQUssR0FBUyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQyxvWUFBb1k7UUFFbmMsT0FBTyw4QkFBOEIsQ0FDbkMsZ0NBQWdDLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUNqRCxLQUFLLENBQ0ksQ0FBQztJQUNkLENBQUM7QUFDSCxDQUFDO0FBR0Q7Ozs7O0dBS0c7QUFDSCxTQUFTLHdCQUF3QixDQUFDLEdBQVcsRUFBRSxhQUFhO0lBQzFELElBQUksTUFBTSxHQUFHLGFBQWEsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtRQUN2QyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxFQUFFLGVBQWUsQ0FBQyxDQUFDLENBQUM7WUFDbkQsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsRUFBRSxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDMUQsQ0FBQyxDQUFDLENBQUM7SUFDSCxPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDO0FBQ0Q7Ozs7O0dBS0c7QUFDSCxTQUFTLHlCQUF5QixDQUNoQyxVQUFrQixFQUNsQixXQUFxQixDQUFDLFVBQVUsQ0FBQztJQUVqQyxJQUFJLENBQUMsVUFBVSxFQUFFLFFBQVEsQ0FBQyxLQUFLLENBQUM7UUFBRSxPQUFPLEtBQUssQ0FBQyxDQUFDLHFFQUFxRTtJQUVySCxVQUFVLEdBQUcsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUV2RCxPQUFPLFVBQVU7U0FDZCxLQUFLLENBQUMsSUFBSSxDQUFDO1NBQ1gsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNoRixRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDcEIsQ0FBQztBQUVEOzs7OztHQUtHO0FBQ0gsU0FBUyxjQUFjLENBQ3JCLElBQVksRUFDWixXQUFtQixVQUFVO0lBRTdCLElBQUksSUFBSSxFQUFFLFVBQVUsQ0FBQyxHQUFHLENBQUM7UUFDdkIsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ2hDLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDN0IsSUFBSSxHQUFHLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBRTFDLElBQUksQ0FBQyxJQUFJO1FBQUUsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixFQUFFLElBQUksQ0FBQyxDQUFDO0lBRTNELElBQUksSUFBSSxLQUFLLE9BQU8sQ0FBQyxLQUFLO1FBQ3hCLE9BQU87WUFDTCxPQUFPLENBQUMsVUFBVTtZQUNsQixPQUFPLENBQUMsVUFBVTtZQUNsQixPQUFPLENBQUMsVUFBVTtZQUNsQixPQUFPLENBQUMsVUFBVTtTQUNuQixDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUVyQixPQUFPLElBQUksS0FBSyxRQUFRLENBQUM7QUFDM0IsQ0FBQztBQUVEOzs7Ozs7O0dBT0c7QUFDSCxTQUFTLG1CQUFtQixDQUFDLElBTzVCO0lBRUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPO1FBQUUsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLG9EQUFvRCxDQUFDLENBQUM7SUFDNUYsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTO1FBQUUsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFaEUsSUFBSSxTQUFpQixFQUNuQixVQUF1QixFQUN2QixtQkFBbUMsQ0FBQztJQUd0QyxTQUFTLEdBQUcsSUFBSSxNQUFNLENBQUM7UUFDckIsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1FBQ2pCLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztRQUNqQixRQUFRLEVBQUUsY0FBYztRQUN4QixTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7UUFDekIsT0FBTyxFQUFFLFVBQVU7S0FDcEIsQ0FBQyxDQUFDO0lBRUgsT0FBTyw2QkFBNkIsRUFBRSxDQUFDO0lBRXZDLFNBQVMsNkJBQTZCO1FBQ3BDLFVBQVUsR0FBRyxlQUFlLEVBQUUsQ0FBQztRQUMvQixtQkFBbUIsR0FBRyx5QkFBeUIsRUFBRSxDQUFDO1FBRWxELFNBQVMsZUFBZTtZQUN0QixJQUFJLE1BQU0sR0FBRyx3QkFBd0IsRUFBRSxDQUFDO1lBRXhDLElBQUksR0FBRyxHQUFHLGFBQWEsQ0FBQztnQkFDdEIsR0FBRyxFQUFFLFNBQVM7Z0JBQ2QsYUFBYSxFQUFFLE1BQU07Z0JBQ3JCLFFBQVEsRUFBRSxTQUFTLENBQUMsUUFBUTtnQkFDNUIsS0FBSyxFQUFFLElBQUk7Z0JBQ1gsT0FBTyxFQUFFLFNBQVMsQ0FBQyxPQUFPO2FBQzNCLENBQUMsQ0FBQyxDQUFDLDBPQUEwTztZQUU5TyxHQUFHLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLDhFQUE4RTtZQUMzRyxPQUFPLEdBQUcsQ0FBQztZQUVYLFNBQVMsd0JBQXdCO2dCQUMvQixJQUFJLEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsNkRBQTZEO2dCQUN0RyxHQUFHLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO2dCQUU1QyxJQUFJLElBQUksQ0FBQyxTQUFTO29CQUFFLEdBQUcsQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7Z0JBRXZELElBQUksQ0FBQyxTQUFTLENBQUMscUJBQXFCLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsd0VBQXdFO2dCQUNsSSxPQUFPLEdBQUcsQ0FBQTtZQUNaLENBQUM7WUFBQSxDQUFDO1FBQ0osQ0FBQztRQUFBLENBQUM7UUFFRixTQUFTLHlCQUF5QjtZQUNoQyxtSEFBbUg7WUFDbkgsSUFBSSxVQUFVLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMvQyxVQUFVLENBQUMsRUFBRSxHQUFHLFNBQVMsQ0FBQyxLQUFLLEdBQUcsWUFBWSxDQUFDO1lBQy9DLFVBQVUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2pDLFVBQVUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ3ZDLFVBQVUsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxDQUFDLHNHQUFzRztZQUN6SSxJQUFJLENBQUMsU0FBUyxDQUFDLHFCQUFxQixDQUFDLGFBQWEsRUFBRSxVQUFVLENBQUMsQ0FBQztZQUNoRSxPQUFPLFVBQVUsQ0FBQTtRQUNuQixDQUFDO1FBQUEsQ0FBQztRQUVGLE9BQU8sQ0FBQyxVQUFVLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRUQsS0FBSyxVQUFVLFVBQVU7UUFDdkIsSUFBSSxDQUFDLG1CQUFtQjtZQUFFLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO1FBRTdFLENBQUMsU0FBUywwQkFBMEI7WUFDbEMsSUFBSSxtQkFBbUIsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUM7Z0JBQUUsT0FBTztZQUNwRCxJQUFJLEtBQW1CLENBQUM7WUFDeEIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUMzQixJQUFJLENBQUMsT0FBTztpQkFDVCxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ1gsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTO29CQUNqQixLQUFLLEdBQUcsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUVwQyxPQUFPLFdBQVcsQ0FBQztvQkFDakIsS0FBSyxFQUFFLEtBQUs7b0JBQ1osU0FBUyxFQUFFLEtBQUs7b0JBQ2hCLFFBQVEsRUFBRSxtQkFBbUI7b0JBQzdCLFNBQVMsRUFBRSxtQkFBbUI7b0JBQzlCLGlCQUFpQixFQUFFLEtBQUs7b0JBQ3hCLGlCQUFpQixFQUFFLEtBQUs7aUJBQ3pCLENBQUMsQ0FBQztZQUNMLENBQUMsQ0FBQztpQkFDRCxPQUFPLENBQUMsQ0FBQyxTQUEyQixFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUMvRCxLQUFLLEdBQUcsSUFBSSxDQUFDO1lBQ2IsS0FBSyxHQUFHLElBQUksQ0FBQztRQUNmLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFFTCxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBRS9DLENBQUM7QUFDSCxDQUFDO0FBQ0Q7Ozs7R0FJRztBQUNILFNBQVMsc0JBQXNCLENBQUMsSUFBZ0QsRUFBRSxlQUF3QixLQUFLLEVBQUUsZUFBd0IsS0FBSyxFQUFFLFlBQTRCLFlBQVk7SUFDdEwsSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUM7UUFBRSxPQUFPO0lBQzVCLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRXpGLFNBQVMsT0FBTyxDQUFDLEdBQW1CO1FBQ2xDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDZixJQUFJLENBQUMsS0FBSyxHQUFHO2dCQUFFLE9BQU87WUFFdEIsSUFBSSxVQUFVLEdBQUcsU0FBUyxDQUFDLGFBQWEsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsR0FBRyxZQUFZLENBQW1CLENBQUM7WUFFdEYsSUFBSSxDQUFDLFVBQVU7Z0JBQUUsT0FBTztZQUV4QixJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO2dCQUN4QyxVQUFVLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUVuQyxJQUFJLENBQUMsWUFBWTtnQkFBRSxPQUFPO1lBRTFCLElBQUksVUFBVSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO2dCQUN2QyxLQUFLLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLFFBQVEsQ0FBQztxQkFDeEMsTUFBTSxDQUFDLENBQUMsR0FBbUIsRUFBRSxFQUFFLENBQUMsR0FBRyxFQUFFLE9BQU8sRUFBRSxLQUFLLEtBQUssVUFBVSxFQUFFLEVBQUUsQ0FBQztxQkFDdkUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7O2dCQUVoQyx3QkFBd0IsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFtQixFQUFFLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBc0IsRUFBRSxzQkFBc0IsRUFBRSxLQUFLLEVBQUUsVUFBVSxDQUFDLEVBQUUsRUFBRSxZQUFZLENBQUM7cUJBQ3hNLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDL0UsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0FBR0gsQ0FBQztBQUFBLENBQUM7QUFDRjs7Ozs7R0FLRztBQUNILFNBQVMsbUJBQW1CLENBQUMsSUFBaUY7SUFDNUcsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhO1FBQUUsT0FBTyxFQUFFLENBQUM7SUFDbkMsSUFBSSxJQUFJLENBQUMsSUFBSTtRQUNYLE9BQU8sVUFBVSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1NBQy9ELElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsTUFBTTtRQUNoQyxPQUFPLFVBQVUsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQzs7UUFDeEYsT0FBTyxFQUFFLENBQUM7SUFFZixTQUFTLFVBQVUsQ0FBQyxNQUFvQjtRQUN0QyxJQUFJLENBQUMsTUFBTTtZQUFFLE9BQU87UUFDcEIsT0FBTyxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFBO0lBQzFELENBQUM7QUFDSCxDQUFDO0FBRUQ7OztHQUdHO0FBQ0gsU0FBUyxZQUFZLENBQUMsS0FBaUI7SUFDckMsSUFBSSxDQUFDLEtBQUs7UUFBRSxPQUFPO0lBQ25CLElBQUksS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUk7UUFDdkMsT0FBTyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQSxrQ0FBa0M7SUFDcEQsT0FBTyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUMzQyxVQUFVLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQztTQUNuQixVQUFVLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQztTQUNuQixVQUFVLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQztTQUNuQixVQUFVLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3pCLENBQUM7QUFFRDs7Ozs7O0dBTUc7QUFDSCxTQUFTLGFBQWEsQ0FBQyxLQUFZLEVBQUUsTUFBYyxFQUFFLGFBQXFCLEVBQUUsV0FBbUI7SUFDN0YsT0FBTyxlQUFlLENBQUMsYUFBYSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLFdBQVcsQ0FBQyxDQUFBO0FBQ3pHLENBQUM7QUFFRDs7Ozs7SUFLSTtBQUNKLFNBQVMsZUFBZSxDQUFDLGFBQXFCLEVBQUUsSUFBZ0IsRUFBRSxLQUFhLEVBQUUsTUFBZTtJQUM5RixJQUFJLENBQUMsYUFBYTtRQUFFLE9BQU87SUFDM0IsSUFBSSxDQUFDLElBQUk7UUFBRSxJQUFJLEdBQUcsWUFBWSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztJQUM5QyxJQUFJLENBQUMsSUFBSTtRQUFFLE9BQU87SUFDbEIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDeEQsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxxSEFBcUg7UUFDeE0sS0FBSyxJQUFJLENBQUMsQ0FBQztJQUNiLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUEsb0ZBQW9GO0FBQzVHLENBQUM7QUFDRDs7OztLQUlLO0FBQ0wsU0FBUyxZQUFZLENBQUMsS0FBWSxFQUFFLE1BQWM7SUFDaEQsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLE1BQU07UUFBRSxPQUFPO0lBQzlCLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUE7QUFDMUQsQ0FBQztBQUVELEtBQUssVUFBVSxlQUFlLENBQUMsSUFBWSxFQUFFLE1BQWUsSUFBSTtJQUM5RCxJQUFJLENBQUMsSUFBSTtRQUFFLE9BQU87SUFDbEIsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pCLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRXpCLElBQUksSUFBSSxHQUFHLEVBQUUsRUFBRSxFQUFFLDhDQUE4QyxFQUFFLEVBQUUsRUFBRSxxREFBcUQsRUFBRSxFQUFFLEVBQUUsOENBQThDLEVBQUUsQ0FBQztJQUVqTCxJQUFJLElBQUksR0FBRztRQUNULEVBQUUsRUFBRSw2RkFBNkY7UUFDakcsRUFBRSxFQUFFLDJJQUEySTtRQUMvSSxFQUFFLEVBQUUsK0ZBQStGO0tBQ3BHLENBQUE7SUFDRCxJQUFJLEdBQUc7UUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFFM0IsR0FBRyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7SUFFMUcsT0FBTyxJQUFJLE9BQU8sQ0FBUSxDQUFDLE9BQU8sRUFBRSxFQUFFO1FBQ3BDLFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDZCxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO2dCQUNwQixPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDM0IsQ0FBQztZQUFBLENBQUM7UUFDSixDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUE7SUFDVCxDQUFDLENBQUMsQ0FBQztBQUVMLENBQUM7QUFFRCxLQUFLLFVBQVUsaUJBQWlCLENBQUMsSUFBWTtJQUMzQyxJQUFJLENBQUMsSUFBSTtRQUFFLE9BQU87SUFDbEIsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQUUsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDNUMsSUFBSSxLQUFLLEdBQUcsTUFBTSxlQUFlLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBRS9DLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUMsSUFBZSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUUzRCxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN6QixDQUFDIn0=