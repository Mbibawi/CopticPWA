function Sequences() {
    return {
        Incense: [
            //This is the generic sequence of any incense office (morning or evening). The onClick function triggered by btnIncenseDawn and btnIncenseVespers, will remove what is irrelevant and add keeps what needs to be kept
            Prefix.commonIncense + "Introduction",
            Prefix.bookOfHours + "Psalm50",
            Prefix.commonIncense + "LitaniesIntroduction",
            Prefix.incenseDawn + "SickLitany",
            Prefix.incenseDawn + "TravelersLitany",
            Prefix.incenseDawn + "OblationsLitany",
            Prefix.incenseVespers + "DepartedLitany",
            Prefix.commonPrayer + "AngelsPrayer",
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
                Prefix.massCommon + "AsItWereSoLetItBe",
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
                Prefix.anchor + "Agios",
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
                Prefix.massCommon + "KissEachOther",
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
            Prefix.cymbalVerses, //!do we need this?
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
function bookOfHours() {
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
    GreatLordFeasts,
    MinorLordFeasts,
    lordFeasts,
    saintsFeasts,
    celestialBeingsFeasts,
    MartyrsFeasts,
    nonMartyrsFeasts,
    stMaryFeasts,
].forEach(obj => Object.freeze(obj));
BOT.MainMenu = new Button({
    btnID: "btnMain",
    label: getLabel({
        AR: "العودة إلى القائمة الرئيسية",
        FR: "Retour au menu principal",
    }),
    backGroundImage: "url(./assets/btnMassBackground.jpg)",
    onClick: () => {
        BOT.MainMenu.children = [
            BOT.Mass,
            BOT.IncenseOffice,
            BOT.DayReadings,
            BOT.BookOfHours,
            BOT.Psalmody,
            BOT.Bible
        ];
        if (copticReadingsDate === copticFeasts.PalmSunday) {
            BOT.MainMenu.children.splice(BOT.MainMenu.children.length - 1, 0, BOT.HW);
            BOT.MainMenu.children.splice(BOT.MainMenu.children.indexOf(BOT.Psalmody), 1);
        }
        ;
        if (Season === Seasons.HolyWeek)
            BOT.MainMenu.children = [BOT.HW, BOT.BookOfHours];
        if ([Seasons.KiahkWeek1, Seasons.KiahkWeek2, Seasons.KiahkWeek3, Seasons.KiahkWeek4].includes(Season))
            BOT.Psalmody.label = getLabel({
                AR: "الإبصلمودية الكيهكية",
                FR: "Psalmodie de Kiahk",
            });
        if (localStorage.editingMode === "true")
            BOT.MainMenu.children.push(BOT.Edit);
        [defaultLanguage, foreingLanguage].forEach(lang => getBibleVersion(lang, false));
    },
});
BOT.GoToPreviousMenu = new Button({
    btnID: "btnGoBack",
    label: getLabel({ AR: "السابق", FR: "Retour", EN: "Go Back" }),
    backGroundImage: "url(./assets/btnMassBackground.jpg)",
    onClick: () => {
        scrollToTop(); //scrolling to the top of the page
    },
});
BOT.Mass = new Button({
    btnID: "btnMass",
    label: getLabel({ AR: "القداسات", FR: "Messes", EN: "Mass" }),
    onClick: (returnChildren = false) => {
        if (!BOT.Mass.children)
            BOT.Mass.children = [
                BOT.IncenseMorning,
                BOT.MassUnBaptised,
                BOT.MassBaptised
            ];
        if (returnChildren)
            return BOT.Mass.children;
    },
});
BOT.MassUnBaptised = new Button({
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
        BOT.MassUnBaptised.children = BOT.DayReadings.onClick(true);
        let btnsPrayersSequence = [
            ...Sequences().Mass.Unbaptized,
        ];
        (function adaptAlleluiaFayBiBiAndTayshoury() {
            BOT.MassUnBaptised.prayersSequence = adaptPrayersSequence();
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
        return BOT.MassUnBaptised.prayersSequence;
    },
    afterShowPrayers: async (btn = BOT.MassUnBaptised) => {
        let btnDocFragment = btn.docFragment;
        if (BOT.Prosternation.children?.includes(btn))
            return insertBookOfHoursButton();
        BOT.IncenseMorning.afterShowPrayers(btn); //By calling the afterShowPrayers() of btnIncenseMorning and passing btnMassUnbaptised as argument, the function will call hideGodHaveMercyOnUsIfBishop() and will return. This will create an expandable button for the "PrayThatGodHaveMercyOnUs" dicaon response
        (function insertHisFoundationsAndGodHaveMercy() {
            if (![Seasons.GreatLent, Seasons.JonahFast].includes(Season))
                return; //The following only applies during the Great Lent the 3 days of Jonah Fast (not the 4th day) that's why we check if isFast === true
            if ([6, 0].includes(todayDate.getDay()))
                return;
            let titles = [
                Prefix.commonPrayer + "WeHaveBeenSavedWithYou" + anyDay,
                Prefix.massCommon + "HisFoundations&D=$Seasons.GreatLent",
                Prefix.incenseDawn + "GodHaveMercyOnUsRefrain&D=$Seasons.GreatLent",
            ];
            selectElementsByDataSet(btnDocFragment, titles[0], { equal: true }, 'root').forEach(el => el.remove()); //We remove the existing 'Sotis Amen' prayer
            let tables = titles.map(title => findTable(title) || undefined); //We retrieve the 3 tables by their titles
            if (!tables || tables.length < 1)
                return;
            let anchor = selectElementsByDataSet(btnDocFragment, Prefix.massCommon + "AbsolutionForTheFather", { equal: true }, 'root')[0]; //This is the html element before which we will insert the retrived tables
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
        let readingsAnchor = selectElementsByDataSet(btnDocFragment, Prefix.anchor + "Readings")[0]; //this is the html element before which we will insert all the readings and responses
        (function insertIntercessionsHymnsForSeasons() {
            let seasonalIntercessions = MassCommonArray.filter((table) => RegExp('Intercessions\.\*D=').test(Title(table))
                &&
                    (isMultiDatedTitleMatching(Title(table), [copticDate, Season])));
            if (seasonalIntercessions.length < 1)
                return console.log("No Seasonsal Intercession Hymns");
            seasonalIntercessions = getUniqueValuesFromArray(seasonalIntercessions);
            let anchor;
            if ([Seasons.PentecostalDays, Seasons.Ascension].includes(Season))
                selectElementsByDataSet(btnDocFragment, 'IntercessionsStMaykel', { includes: true }, 'root').forEach(div => div.remove()); //We remove the intercessions of St. Maykel because they will be replaced by those of the Pentocostal days
            seasonalIntercessions.forEach(table => {
                anchor = setIntercessionsAnchor(Title(table));
                if (!anchor)
                    return;
                insertPrayersAdjacentToExistingElement({
                    tables: [table],
                    languages: getLanguages(Title(table)),
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
                let htmlDivs = selectElementsByDataSet(btnDocFragment, Prefix.massCommon + insertion + "" + anyDay);
                if (!htmlDivs || htmlDivs.length < 1)
                    return;
                return htmlDivs[htmlDivs.length - 1].nextElementSibling;
            }
        })();
        (function insertBiEhmotGharExpandable() {
            //After inserting the Intercessions hyms, we will isnert an expandable for Bi Ehmot Ghar
            // let btnsDiv = document.createElement('div');
            //  btnsDiv.classList.add(inlineBtnsContainerClass);
            //  readingsAnchor.insertAdjacentElement('beforebegin', btnsDiv);
            const biEhmotGhar = new Button({
                btnID: 'btnBiEhmotGhar',
                label: getLabel({
                    AR: "بي إهموت غار",
                    FR: "Ⲡⲓϩ̀ⲙⲟⲧ ⲅⲁⲣ"
                }),
                cssClass: inlineBtnClass,
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
                cssClass: inlineBtnClass,
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
            let specialResponse;
            //St. Paul
            await insertMassReading(Prefix.stPaul, Intros.stPaulIntro, Intros.stPaulEnd);
            (function insertCatholiconResponse() {
                let cathResp = CatholiconResponsesArray.filter(tbl => isMultiDatedTitleMatching(Title(tbl), [Season, copticDate]));
                if (cathResp.length < 1)
                    cathResp = CatholiconResponsesArray.filter(tbl => Title(tbl) === Prefix.catholiconResponse + '&C=Title');
                if (cathResp.length < 1)
                    return;
                const response = new Button({
                    btnID: 'btnCatholiconResponse',
                    label: getLabel({
                        AR: cathResp[0][0][prayersLanguages.indexOf('AR') + 1], FR: cathResp[0][0][prayersLanguages.indexOf('FR') + 1]
                    }),
                    cssClass: inlineBtnClass,
                    docFragment: new DocumentFragment(),
                    onClick: () => {
                        let langs;
                        cathResp.map((table) => {
                            langs = getLanguages(Title(table));
                            showPrayers({
                                table: table,
                                languages: langs,
                                position: response.docFragment,
                                container: response.docFragment,
                                clearContainerDiv: false,
                                clearRightSideBar: false
                            });
                        });
                    }
                });
                insertExpandableBtn([response], readingsAnchor, 'beforebegin');
            })();
            //Catholicon
            await insertMassReading(Prefix.Catholicon, Intros.CatholiconIntro, Intros.CatholiconEnd);
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
                        PraxisResponsesArray.filter((table) => isMultiDatedTitleMatching(Title(table), [copticDate, copticReadingsDate]))
                            .filter(tbl => !Title(tbl)?.includes('&D=$saintsFeasts.')); //We look for a response for the copticDate or copticReadingsDate, and we exclude responses for saints feasts
                if (specialResponse.length < 1)
                    specialResponse = PraxisResponsesArray.filter((table) => isMultiDatedTitleMatching(Title(table), [Season])); //We look for a response for the Season
                if (isStMaryFeast || copticDay === '21' || specialResponse.length < 1)
                    return ifNoSpecificResponse();
                else
                    return ifSpecificResponse();
                function ifSpecificResponse() {
                    if (Season === Seasons.GreatLent) {
                        // During the Great Lent, we should get  2 tables ('Sundays', and 'Week') for this season. We will keep the relevant table accoding to the day of the week
                        weekDay === 0 || weekDay === 6 ?
                            specialResponse =
                                specialResponse.filter((table) => Title(table)?.includes("Sundays&D="))
                            :
                                specialResponse =
                                    specialResponse.filter((table) => Title(table)?.includes("Week&D="));
                    }
                    if (Season === Seasons.ApostlesFast || copticDate === copticFeasts.Apostles)
                        specialResponse = specialResponse.filter((tbl) => !['beforeCatholicon', 'afterPraxis'].find(w => Title(tbl).includes(w)));
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
                    let noSeasonResponse = findTable(Prefix.praxisResponse, PraxisResponsesArray) || undefined;
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
                    specialResponse = PraxisResponsesArray.filter((table) => Title(table)?.includes('&D=$saintsFeasts.') && isMultiDatedTitleMatching(Title(table), [copticDate]));
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
            await insertMassReading(Prefix.praxis, Intros.praxisIntro, Intros.praxisEnd);
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
                    tables: PraxisResponsesArray.filter(tbl => RegExp(title.replace('$', '\\$')).test(Title(tbl))),
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
                let intro = { ...Intros.synaxariumIntro };
                Object.entries(intro)
                    .forEach(entry => intro[entry[0]] =
                    entry[1]
                        .replace("theday", Number(copticDay).toString())
                        .replace("themonth", copticMonths[Number(copticMonth)][entry[0]]));
                await insertMassReading(Prefix.synaxarium, intro, undefined, copticDate); //!Caution: we must pass the copticDate for the 'date' argument, otherwise it will be set to the copticReadingsDate by default, and we will get the wrong synaxarium
                //We will reverse the langauges
                let introHTML = selectElementsByDataSet(btnDocFragment, Prefix.synaxarium + "&D=" + copticDate)[1];
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
                    Agios = Agios.replace('&D=$copticFeasts.', '');
                let AgiosTable = findTable(Agios, MassCommonArray) || undefined;
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
                    languages: getLanguages(Title(AgiosTable)),
                    position: {
                        beforeOrAfter: "beforebegin",
                        el: readingsAnchor?.nextElementSibling,
                    },
                    container: btnDocFragment,
                });
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
            let hoursBtns = BOT.BookOfHours.onClick(true); //We get buttons for the relevant hours according to the day
            if (!hoursBtns)
                return;
            hoursBtns = selectRelevantHoursAccordingToTheDay();
            let masterBtnDiv;
            (function createMasterButton() {
                masterBtnDiv = document.createElement("div"); //This is the div that will contain the master button which shows or hides the Book of Hours sub buttons
                masterBtnDiv.classList.add(inlineBtnsContainerClass);
                masterBtnDiv.id = "masterBOHBtn";
                let masterBtn = new Button({
                    btnID: "BOH_Master",
                    label: getLabel({
                        AR: "الأجبية",
                        FR: "Agpia",
                    }),
                    onClick: () => {
                        //We toggle the div containing the buttons for each hour
                        let btnsDiv = document.getElementById('BOHBtnsDiv');
                        if (!btnsDiv)
                            return console.log('No btns div was found');
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
                }));
                btnDocFragment.prepend(masterBtnDiv);
            })();
            (function createHtmlButtonForEachHour() {
                //We will create an HTML div (role = button) and an expandable div for each hour
                let btns = hoursBtns
                    .map((btn) => {
                    btn.onClick(true); //We call the onClick() method of the btn in order to build its prayersSequence properties. Notice that we passs 'true' as argument to the onClick() function
                    if (localStorage.displayMode === displayModes[1])
                        //If we are in the 'Presentation Mode', we remove all the psalms and keep only the Gospel and the Litanies
                        btn.prayersSequence = btn.prayersSequence
                            .filter((title) => !title?.includes("Psalm"));
                    InsertHourFinalPrayers(btn); //Inserting Kyrielison 41 times, Agios, Holy God of Sabaot, etc.
                    return new Button({
                        btnID: btn.btnID,
                        label: btn.label,
                        cssClass: inlineBtnClass,
                        languages: BOT.BookOfHours.languages,
                        docFragment: new DocumentFragment(),
                        prayersSequence: btn.prayersSequence,
                    });
                });
                const btnsDiv = insertExpandableBtn(btns, masterBtnDiv, 'afterend', 'BOH', false);
                btnsDiv.id = 'BOHBtnsDiv';
                btnsDiv.classList.add(hidden);
                Array.from(btnsDiv.children).forEach(htmlBtn => htmlBtn.addEventListener('click', () => {
                    scrollToTop();
                    let expandable = containerDiv.querySelector('#' + htmlBtn.id + 'Expandable');
                    if (!expandable)
                        return;
                    if (!expandable.classList.contains(hidden))
                        floatOnTopOrBottom(btnsDiv, true, '3px');
                    else
                        btnsDiv.style.position = 'relative';
                    collapseAllTitles(Array.from(expandable.children));
                }));
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
                else if (BOT.Prosternation.children?.includes(btn)) {
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
BOT.ReadingsStPaul = new Button({
    btnID: "btnReadingsStPaul",
    label: getLabel({
        AR: "البولس",
        FR: "Epître de Saint Paul"
    }),
    onClick: async () => {
        await insertMassReadingOtherThanGospel(Prefix.stPaul, { beforeOrAfter: undefined, el: undefined }, containerDiv, true);
        scrollToTop(); //scrolling to the top of the page
    },
});
BOT.ReadingsCatholicon = new Button({
    btnID: "btnReadingsCatholicon",
    label: getLabel({
        AR: "الكاثوليكون",
        FR: "Catholicon",
    }),
    onClick: async () => {
        await insertMassReadingOtherThanGospel(Prefix.Catholicon, { beforeOrAfter: undefined, el: undefined }, containerDiv, true);
        scrollToTop(); //scrolling to the top of the page
    },
});
BOT.ReadingsPraxis = new Button({
    btnID: "btnReadingsPraxis",
    label: getLabel({
        AR: "الإبركسيس",
        FR: "Actes",
        EN: "Acts",
    }),
    onClick: async () => {
        await insertMassReadingOtherThanGospel(Prefix.praxis, { beforeOrAfter: undefined, el: undefined }, containerDiv, true);
        scrollToTop(); //scrolling to the top of the page
    },
});
BOT.ReadingsSynaxarium = new Button({
    btnID: "btnReadingsSynaxarium",
    label: getLabel({
        AR: "السنكسار",
        FR: "Synaxarium",
        EN: "Synaxarium",
    }),
    onClick: async () => {
        await insertMassReadingOtherThanGospel(Prefix.synaxarium, { beforeOrAfter: undefined, el: undefined }, containerDiv, true, copticDate); //!CAUTION: notice that we passed to the function the readingDate argument because during the GreatLent period and the Jonah Fast, the copticReadingsDate is formatted like 'GL10', we hence pass the copticDate to prevent the function from searching for the Synaxarium of the day by the copticReadingsDate
        scrollToTop(); //scrolling to the top of the page
    },
});
BOT.PropheciesMorning = new Button({
    btnID: "btnReadingsPropheciesDawn",
    label: getLabel({
        AR: "نبوات باكر",
        FR: "Propheties",
        EN: "Propheties",
    }),
    onClick: async () => {
        await insertMassReadingOtherThanGospel(Prefix.prophecies, { beforeOrAfter: undefined, el: undefined }, containerDiv, true);
        scrollToTop(); //scrolling to the top of the page
    },
});
BOT.DayReadings = new Button({
    btnID: "btnDayReadings",
    label: getLabel({
        AR: "قراءات اليوم",
        FR: "Lectures du jour",
        EN: "Day's Readings",
    }),
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
        BOT.DayReadings.children = [
            BOT.GospelMorning,
            BOT.GospelVespers,
            BOT.ReadingsStPaul,
            BOT.ReadingsCatholicon,
            BOT.ReadingsPraxis,
            BOT.ReadingsSynaxarium,
            BOT.GospelMass
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
                BOT.DayReadings.children = BOT.DayReadings.children.filter(b => b !== BOT.GospelVespers);
                if (Season === Seasons.JonahFast)
                    return; ///The following concerns only the Great Lent
                //If we are a Sunday and the GospelNight button is not included, we will add it.
                if (weekDay === 0
                    &&
                        !BOT.DayReadings.children?.includes(BOT.GospelNight))
                    BOT.DayReadings.children.push(BOT.GospelNight);
                (function ifWeAreNotASunday() {
                    if (weekDay === 0)
                        return;
                    //If we are not a Sunday (i.e., we are during any week day other than Sunday and Saturday), we will  add the Prophecies button to the list of buttons
                    if (!BOT.DayReadings.children?.includes(BOT.PropheciesMorning))
                        BOT.DayReadings.children.unshift(BOT.PropheciesMorning);
                    //Also if we  are not a Sunday, we will remove the Night Gospel, if included
                    BOT.DayReadings.children = BOT.DayReadings.children.filter((btn) => btn !== BOT.GospelNight);
                })();
            })();
        })();
        (function ifMass() {
            if (!mass)
                return;
            BOT.DayReadings.children = BOT.DayReadings.children.filter(btn => ![BOT.GospelVespers, BOT.GospelMorning, BOT.GospelNight, BOT.PropheciesMorning].includes(btn)); //We remove the Mornign and Vespers Gospel buttons
            if ([Seasons.PentecostalDays, Seasons.Ascension].includes(Season))
                BOT.DayReadings.children = BOT.DayReadings.children.filter(child => child !== BOT.ReadingsSynaxarium); //We remove the Synaxarium button
        })();
        return BOT.DayReadings.children;
    },
});
BOT.BookOfHours = new Button({
    btnID: "btnBookOfHours",
    label: getLabel({ AR: "الأجبية", FR: "Agpia", EN: "Book of Hours" }),
    docFragment: new DocumentFragment(),
    parentBtn: BOT.MainMenu,
    languages: [...prayersLanguages],
    children: [],
    onClick: (mass = false) => {
        if (BOT.BookOfHours.children.length > 1)
            return BOT.BookOfHours.children;
        const BOH = bookOfHours();
        const OurFatherInHeaven = Prefix.commonPrayer + "OurFatherInHeaven", AngelsPrayers = Prefix.commonPrayer + "AngelsPrayer", HailToYouMaria = Prefix.commonPrayer + "WeSaluteYouMary", WeExaltYou = Prefix.commonPrayer + "WeExaltYouStMary", Agios = Prefix.commonPrayer + "Agios", KyrielisonIntro = Prefix.commonPrayer + "Kyrielison41NoMassIntro", HolyLordOfSabaot = Prefix.commonPrayer + "HolyLordOfSabaot", Creed = Prefix.commonPrayer + "Creed", FinalPrayer = Prefix.bookOfHours + "AllHoursFinalPrayer";
        (function addAChildButtonForEachHour() {
            BOT.BookOfHours.children =
                Object.entries(BOH)
                    .map((entry) => {
                    const hourBtn = new Button({
                        btnID: "btn" + entry[0],
                        label: entry[1][1],
                        docFragment: new DocumentFragment(),
                        parentBtn: BOT.BookOfHours,
                        onClick: (isMass = false) => hourBtnOnClick(hourBtn, entry[0], isMass),
                        afterShowPrayers: () => hourBtnAfterShowPrayer(hourBtn),
                    });
                    return hourBtn;
                });
            (function addOtherPrayersBtns() {
                let otherPrayers = [Prefix.bookOfHours + 'BeforeCommunion', Prefix.bookOfHours + 'AfterCommunion' + anyDay];
                let otherPrayersBtn = new Button({
                    btnID: 'otherPrayersBtn',
                    label: getLabel({
                        AR: 'صلوات أخرى',
                        FR: 'Diverses prières',
                        EN: 'Various Prayers'
                    }),
                    children: otherPrayers.map(title => otherPrayerBtn(title))
                });
                BOT.BookOfHours.children.push(otherPrayersBtn);
                function otherPrayerBtn(title) {
                    let table = findTable(title, BookOfHoursArray) || undefined;
                    if (!table)
                        return undefined;
                    return new Button({
                        btnID: "btnOtherPrayer" + otherPrayers.indexOf(title) + 1,
                        label: getLabel({
                            AR: table[0][BOT.BookOfHours.languages.indexOf('AR') + 1],
                            FR: table[0][BOT.BookOfHours.languages.indexOf('FR') + 1]
                        }),
                        onClick: () => {
                            showPrayers({
                                table: table,
                                languages: BOT.BookOfHours.languages,
                                container: containerDiv,
                                clearContainerDiv: true,
                                clearRightSideBar: true
                            });
                            scrollToTop();
                        },
                    });
                }
            })();
            function hourBtnAfterShowPrayer(btn) {
                const BOH = bookOfHours();
                let children = Array.from(btn.docFragment.children).filter((div) => div?.dataset?.root);
                scrollToTop();
                children.forEach((htmlRow) => {
                    htmlRow.querySelector("p.COP, p.CA")?.remove();
                    ["Priest", "Diacon", "Assembly"].forEach((className) => {
                        htmlRow.classList.replace(className, "NoActor");
                        const note = String.fromCharCode(eighthNoteCode);
                        htmlRow.innerHTML = htmlRow.innerHTML.replaceAll(note, '');
                    });
                });
                if (btn.label !== BOH.HV[1])
                    return;
                //If we are in the 'Setar Hour', we need to remove from Psalm 118 all the paragraphs except paragraphs 20, 21, and 22.
                let psalm118 = children.filter((div) => div?.dataset?.group?.startsWith(Prefix.bookOfHours + "Psalm118"));
                psalm118.splice(1, psalm118.length - 7)
                    .forEach(div => div.remove());
            }
            function hourBtnOnClick(btn, hourName, isMass) {
                (function buildBtnPrayersSequence() {
                    //We will add the prayers sequence to btn.prayersSequence[]
                    btn.prayersSequence = [Prefix.bookOfHours + hourName + "Title"]; //This is the title of the hour prayer
                    btn.prayersSequence.push(...Object.entries(BOH)
                        .find((entry) => entry[0] === hourName)[1][0]
                        .map((title) => Prefix.bookOfHours + "Psalm" + title.toString())); //We add the psalms
                    btn.prayersSequence.push(...["Gospel", "Litanies"].map(title => Prefix.bookOfHours + hourName + title)); //We add the gospel and the Litanies
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
                            FinalPrayer,
                            OurFatherInHeaven,
                        ];
                        if (btnLable === BOH.H1[1])
                            HourIntro.push(Prefix.bookOfHours + hourName + 'LetsKneel');
                        else if (btnLable === BOH.HMD1[1])
                            HourIntro.push(Prefix.psalmody + 'WakeUpSonsOfLight'); //We add the 'Wake Up Sons of Light' for the 1st Service of Midnight
                        else if (btnLable === BOH.H12[1])
                            endOfHourPrayersSequence.shift(); //If it is the 12th (Night) Hour, we remove the Angels Prayer from endOfHourPrayersSequence
                        else if (btnLable === BOH.HMD3[1]) {
                            endOfHourPrayersSequence.splice(0, 1, KyrielisonIntro, HolyLordOfSabaot, OurFatherInHeaven, Prefix.bookOfHours + hourName + "2ndGospel"); //replacing the "Angels Praising" by this sequence
                            //Inserting the Priests Absolution at the end
                            endOfHourPrayersSequence.push(Prefix.bookOfHours + hourName + "PriestsAbsolution");
                        }
                        ;
                        if (![
                            BOH.H1[1],
                            BOH.H12[1],
                            BOH.HMD3[1],
                        ].includes(btnLable))
                            endOfHourPrayersSequence = endOfHourPrayersSequence.slice(6, endOfHourPrayersSequence.length); //For any other hour, we remove all the titles before KyrielisonIntro
                        btn.prayersSequence.splice(1, 0, ...HourIntro); //We  add the titles of the HourIntro before the 1st element of btn.prayersSequence[]
                        btn.prayersSequence.push(...endOfHourPrayersSequence);
                    })();
                })();
            }
        })();
        if (mass)
            return BOT.BookOfHours.children;
        scrollToTop();
        return BOT.BookOfHours.prayersSequence;
    },
});
BOT.Psalmody = new Button({
    btnID: "btnPsalmody",
    label: getLabel({
        AR: "الإبصلمودية السنوية",
        FR: "Psalmodie (anuelle)",
        EN: "Psalmody (anual)"
    }),
    onClick: () => {
        if (BOT.Psalmody.children)
            return BOT.Psalmody.children;
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
        };
        BOT.Psalmody.children = [
            createBtn(weekDay, getLabel(todayPraise)),
            ...[0, 1, 2, 3, 4, 5, 6]
                .filter(d => d !== weekDay)
                .map(d => createBtn(d, getLabel({ AR: otherDay.AR + days[d].AR, FR: otherDay.FR + days[d].FR, EN: otherDay.EN + days[d].EN })))
        ];
        checkIfInASpecificSeason(todayDate); //We reset the Season to today
        return BOT.Psalmody.children;
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
            const Psalmody = Sequences().Psalmody;
            if ([Seasons.KiahkWeek1, Seasons.KiahkWeek2, Seasons.KiahkWeek3, Seasons.KiahkWeek4].includes(season))
                return btn.prayersSequence = Psalmody.Kiahk;
            btn.prayersSequence =
                Psalmody.Year
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
BOT.IncenseMorning = new Button({
    btnID: "btnIncenseDawn",
    label: getLabel({
        AR: "بُخُورِ بَاكِرِ",
        FR: "Encens du Matin",
        EN: "Morning Incense Office"
    }),
    languages: [...prayersLanguages],
    docFragment: new DocumentFragment(),
    onClick: () => {
        BOT.IncenseMorning.children = []; //!We need to reinitiate the children each time because in some cases (liken in case btnLakkan is clicked) there are buttons added to btnIncenseMorning children
        BOT.IncenseMorning.prayersSequence = [...Sequences().Incense].filter((title) => !title?.startsWith(Prefix.incenseVespers)); //We will remove all the Incense Vespers titles from the prayersSequence Array
        if (weekDay === 6)
            //If we are a Saturday, we pray only the 'Departed Litany', we will hence remove the 'Sick Litany' and the 'Travellers Litany'
            BOT.IncenseMorning.prayersSequence.splice(BOT.IncenseMorning.prayersSequence.indexOf(Prefix.incenseDawn + "SickLitany"), 3, //We remove the SickPrayer, the TravelersParayer and the Oblations Prayer
            Prefix.incenseVespers + "DepartedLitany");
        else if (weekDay === 0 || lordFeasts.includes(copticDate))
            //If we are a Sunday or the day is a Lord's Feast, or the oblation is present, we remove the 'Travellers Litany' and keep the 'Sick Litany' and the 'Oblation Litany'
            BOT.IncenseMorning.prayersSequence = BOT.IncenseMorning.prayersSequence.filter((title) => !title.startsWith(Prefix.incenseDawn + "TravelersLitany"));
        scrollToTop();
        return BOT.IncenseMorning.prayersSequence;
    },
    afterShowPrayers: async (btn = BOT.IncenseMorning, gospelPrefix = Prefix.gospelMorning) => {
        let btnDocFragment = btn.docFragment;
        (function adaptThanksGiving() {
            const parags = Array.from(selectElementsByDataSet(btn.docFragment, Prefix.commonPrayer + "ThanksGiving", undefined, 'root')[7].children);
            let parag;
            prayersLanguages.forEach(lang => {
                parag = parags?.find(p => p.classList.contains(lang));
                if (!parag)
                    return;
                if (btn === BOT.IncenseMorning)
                    parag.innerHTML = parag.innerHTML.replace(variable.thanksVespers[lang], variable.thanksMorning[lang]);
                else if (btn === BOT.MassUnBaptised)
                    parag.innerHTML = parag.innerHTML.replace(variable.thanksVespers[lang], variable.thanksMass[lang]);
                else if (btn.btnID === BOT.Lakkan.btnID)
                    parag.innerHTML = parag.innerHTML.replace(variable.thanksVespers[lang], variable.thanksLakan[lang]);
            });
        })();
        if (![BOT.IncenseMorning, BOT.IncenseVespers].includes(btn))
            return hideGodHaveMercyOnUsIfBishop(); //The following applies only to btnIncenseMorning & btnIncenseVespers
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
            let godHaveMercyHtml = selectElementsByDataSet(btnDocFragment, dataRoot); //We select all the paragraphs not only the paragraph for the Bishop
            if (godHaveMercyHtml.length < 1)
                return; //This may occur if 'Diacon' prayers are hidden
            let length = godHaveMercyHtml?.length;
            godHaveMercyHtml
                .filter((htmlRow) => godHaveMercyHtml?.indexOf(htmlRow) > 0 &&
                godHaveMercyHtml?.indexOf(htmlRow) < length - 2)
                .forEach((htmlRow) => htmlRow.remove());
            if (btn === BOT.MassUnBaptised)
                godHaveMercyHtml[length - 2].remove(); //We remove the second last paragraph
            else
                godHaveMercyHtml[length - 1].remove(); //We remove the last paragraph
            let godHaveMercy = findTable(dataRoot, CommonArray); //We get the entier table not only the second row. Notice that the first row of the table is the row containing the title
            if (!godHaveMercy)
                return console.log("Didn't find table Gode Have Mercy");
            godHaveMercy = godHaveMercy.slice(1, 4);
            const haveMercy = new Button({
                btnID: 'godHaveMercy',
                label: getLabel({
                    AR: godHaveMercy[0][prayersLanguages.indexOf('AR')], //This is the arabic text of the lable
                    FR: godHaveMercy[0][prayersLanguages.indexOf('FR')], //this is the French text of the label
                }),
                cssClass: inlineBtnClass,
                docFragment: new DocumentFragment(),
                onClick: () => {
                    showPrayers({
                        table: godHaveMercy,
                        languages: BOT.MassUnBaptised.languages,
                        position: haveMercy.docFragment,
                        container: haveMercy.docFragment,
                        clearContainerDiv: false,
                        clearRightSideBar: false,
                    });
                }
            });
            insertExpandableBtn([haveMercy], godHaveMercyHtml[0].nextElementSibling, 'beforebegin');
        }
        ;
        adaptConcludingHymn(btnDocFragment);
        if (btn !== BOT.IncenseMorning)
            return; //The functions from this point on concern the Morning Incense service only
        (async function insertPropheciesAndEklonomin() {
            if (![Seasons.GreatLent, Seasons.JonahFast].includes(Season))
                return;
            if ([0, 6].includes(weekDay))
                return; //We are neither a Saturday nor a Sunday, we will hence display the Prophecies dawn buton
            let anchor = selectElementsByDataSet(btnDocFragment, Prefix.anchor + "Prophecies", undefined, 'root')[0];
            (function insertProphecies() {
                //! This must come before Eklonomin Taghonata has been inserted
                let Prophecies = findTable(Prefix.prophecies + "&D=" + copticReadingsDate, ReadingsArrays.PropheciesDawnArrayFR);
                if (!Prophecies)
                    return console.log("Didn't find Prophecies with the current date");
                let title = [[Title(Prophecies), 'نبوات باكر', 'Prophecies', '']];
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
                    let refrains = selectElementsByDataSet(btnDocFragment, Prefix.incenseDawn + "GodHaveMercyOnUsRefrain&D=$Seasons.GreatLent")
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
            const doxologies = new Button({
                btnID: 'AdamDoxologies',
                label: getLabel({
                    AR: "ذكصولوجيات باكر آدام",
                    FR: "Doxologies Adam du Matin",
                    EN: "Adam Doxologies",
                }),
                cssClass: inlineBtnClass,
                languages: BOT.IncenseMorning.languages,
                docFragment: new DocumentFragment(),
                prayersSequence: [Prefix.doxologies + "DawnAdam"],
            });
            insertExpandableBtn([doxologies], btnDocFragment.children[0], 'beforebegin');
        })();
        (function insertLakkanBtn() {
            if (copticDate === '1005')
                insertExpandable(copticFeasts.Baptism);
            else if (copticDate === copticFeasts.Apostles)
                insertExpandable(copticFeasts.Apostles);
            else if (copticReadingsDate === copticFeasts.HolyThursday)
                insertExpandable(copticReadingsDate);
            async function insertExpandable(date) {
                const lakkanBtn = new Button({
                    btnID: BOT.Lakkan.btnID,
                    label: BOT.Lakkan.label,
                    docFragment: new DocumentFragment(),
                    onClick: () => BOT.Lakkan.onClick(date, lakkanBtn),
                    afterShowPrayers: async () => await BOT.Lakkan.afterShowPrayers(date, lakkanBtn)
                });
                BOT.IncenseMorning.children = [lakkanBtn];
                let children = btnDocFragment.children;
                if (copticDate === '1005')
                    insertExpandableBtn([lakkanBtn], children[0], 'beforebegin', 'Lakan');
                else
                    insertExpandableBtn([lakkanBtn], children[children.length - 1], 'afterend', 'Lakan');
            }
            ;
        })();
        /**
       * Inserts the Incense Office Doxologies And Cymbal Verses according to the Coptic feast or season
       * @param {HTMLElement | DocumentFragment} container - The HtmlElement in which the btn prayers are displayed and to which they are appended
       */
        async function insertCymbalVersesAndDoxologies(btn) {
            if ([BOT.MassUnBaptised].includes(btn))
                return;
            if (!btn.docFragment)
                return console.log("btn.docFragment is undefined = ", btn.docFragment);
            let dayFeasts = (() => {
                let dates = [copticDate];
                if (!RegExp('\\d\\d\\d\\d').test(copticReadingsDate))
                    dates.push(copticReadingsDate); //We do this in order to avoid including a reading date of 4 digits while the reading repeats more than once per year on other days than the feast day itself (eg. the 0511 copticReadingDate repeats several times not only on the Apostles feast). This will leave us only with the copticReadingsDate including letters: like GL, PNTL, JONAS, etc
                let feast = [];
                let matching = Object.entries(copticFeasts).find((entry) => dates.includes(entry[1])); //We check if today is a feast. We also check by the copticReadingsDate because some feast are referrenced by the copticReadings date : eg. Pntl39
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
                anchor = selectElementsByDataSet(btn.docFragment, Prefix.anchor + "CymbalVerses")[0];
                if (!anchor)
                    return console.log("We didn't find the cymbal verses placeholder");
                let cymbals;
                if ([Seasons.JonahFast, Seasons.GreatLent].includes(Season) && ![0, 6].includes(weekDay))
                    //If we are during the Jonah Fast or during the Great Lent but not on a Saturday or a Sunday, the Cymbal Verses are not chanted, they are replaced by the Long Kyrielison and the Cymbal Verses End
                    cymbals =
                        [
                            findTable(Prefix.cymbalVerses + "End", CymbalVersesArray) || undefined,
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
                (function insertSaintsExpandable() {
                    const anchor = selectElementsByDataSet(btnDocFragment, Prefix.anchor + "SaintsCymbals", undefined, 'root')[0];
                    if (!anchor)
                        return;
                    const cymbals = CymbalVersesArray.filter(table => Title(table).includes('St'))
                        .filter(tbl => !['Mary', 'Maykel', 'Steven', 'John', 'Marc'].find(saint => Title(tbl).includes(saint)));
                    if (cymbals.length < 1)
                        return;
                    const saints = cymbals.map(table => {
                        const name = splitTitle(Title(table))[0].split(Prefix.cymbalVerses)[1].replace('St', '');
                        const newBtn = new Button({
                            btnID: 'btnCymbal' + (cymbals.indexOf(table) + 1).toString(),
                            label: getLabel({
                                AR: table[0][prayersLanguages.indexOf('AR') + 1],
                                FR: table[0][prayersLanguages.indexOf('FR') + 1],
                            }),
                            cssClass: inlineBtnClass,
                            docFragment: new DocumentFragment(),
                            onClick: () => {
                                showPrayers({
                                    table: table,
                                    languages: prayersLanguages,
                                    container: newBtn.docFragment,
                                    clearContainerDiv: false,
                                    clearRightSideBar: false
                                });
                            }
                        });
                        return newBtn;
                    });
                    (function createMasterBtn() {
                        const masterDiv = document.createElement('div');
                        masterDiv.id = 'masterCymbal';
                        masterDiv.classList.add(inlineBtnsContainerClass);
                        anchor.insertAdjacentElement('beforebegin', masterDiv);
                        const masterCymbal = new Button({
                            btnID: 'btnCymbals',
                            label: getLabel({
                                AR: 'أرباع القديسين',
                                FR: 'Autres saints',
                                EN: '',
                            }),
                            onClick: () => {
                                const id = 'cymbalsBtnsDiv';
                                let btnsDiv = containerDiv.querySelector('#' + id);
                                if (btnsDiv)
                                    return btnsDiv.classList.toggle(hidden);
                                btnsDiv = insertExpandableBtn(saints, anchor, 'afterend', 'cymbals');
                                btnsDiv.id = id;
                            }
                        });
                        createHtmlBtn({
                            btn: masterCymbal,
                            btnsContainer: masterDiv,
                            btnClass: inlineBtnClass,
                            clear: false,
                            onClick: masterCymbal.onClick //!We need to set the onClick property otherwise it will be set to showChildBtnsOrPrayers(masterCymbal) which, at its turn, will call the setCSS() for the containerDiv (the container by default since masterCymbal does not have a docFragment) for the second time
                        });
                    })();
                })();
                function getCymbalVerses() {
                    let sequence = [
                        Prefix.cymbalVerses + isWatosOrAdam(),
                        Prefix.cymbalVerses,
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
                            Seasons.PentecostalDays,
                            Seasons.Ascension
                        ].includes(feast) //During Seasons.Nativity (i.e., between Nativity and Circumcision) and Seasons.Baptism(from Baptism to Cana Wedding), the Cymbals verses follow the pattern of any Lord Feast: it starts with "Amoyni Marin..." or "Ten O'osht", then the cymbal verses of the feast, and finally, the "Eb'oro enti ti hirini". We will hence remove the 2nd element from the sequence
                            ? insertFeastInSequence(sequence, feast, 0, 0)
                            : insertFeastInSequence(sequence, feast, 1, 0)); //We always start with 'Amoyni Marin...' or with 'Tin O'osht...', so we will insert the feast element before the 2nd element, and will not delete anything
                    return processSequence(sequence, Prefix.cymbalVerses);
                }
            })();
            (async function InsertCommonDoxologies() {
                let doxologiesAnchor = selectElementsByDataSet(btn.docFragment, Prefix.anchor + "Doxologies")[0];
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
                if (btn === BOT.IncenseVespers)
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
                            .filter((tbl) => !/Week\d&D=\$Seasons.GreatLent/.test(Title(tbl)))
                        :
                            doxologies = doxologies
                                .filter((tbl) => !Title(tbl)?.includes("Sundays&D=$Seasons.GreatLent"));
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
                let tables = [], tablesArray = getArrayFromPrefix(prefix);
                sequence.map((tblTitle) => {
                    if (!tblTitle.startsWith(prefix)) //It means that the title is a Coptic date or a Season
                        tablesArray
                            //!CAUTION: we must use 'filter' not 'find' because for certain feasts there are more than one doxology
                            .filter((tbl) => isMultiDatedTitleMatching(Title(tbl), [tblTitle]))
                            .forEach((tbl) => tables?.push(tbl));
                    else
                        tables.push(findTable(tblTitle, tablesArray));
                });
                return tables;
            }
        }
    },
});
BOT.IncenseVespers = new Button({
    btnID: "btn.IncenseVespers",
    label: getLabel({
        AR: "بُخُورِ عَشِيَّةَ",
        FR: "Encens Vêpres",
        EN: "Vespers Incense Office",
    }),
    docFragment: new DocumentFragment(),
    languages: [...prayersLanguages],
    onClick: () => {
        BOT.IncenseVespers.prayersSequence = [...Sequences().Incense].filter((title) => title !== Prefix.commonPrayer + "AngelsPrayer" &&
            !title.startsWith(Prefix.incenseDawn));
        scrollToTop();
        return BOT.IncenseVespers.prayersSequence;
    },
    afterShowPrayers: () => BOT.IncenseMorning.afterShowPrayers(BOT.IncenseVespers, Prefix.gospelVespers),
});
BOT.Lakkan = new Button({
    btnID: "btnLakkan",
    label: getLabel({
        AR: "صلاة اللقَّان",
        FR: "Cérémonie de la Bénédiction de l'eau",
        EN: 'Lakkan'
    }),
    onClick: (date, btn = BOT.Lakkan) => {
        if (!date)
            return;
        btn.prayersSequence = [Prefix.incenseDawn + "Anaphora&D=" + date];
    },
    afterShowPrayers: async (date, btn = BOT.Lakkan) => {
        if (!date)
            return;
        const Intros = ReadingsIntrosAndEnds();
        BOT.IncenseMorning.afterShowPrayers(btn); //We call it in order to hide the "Pray that God Have Mercy on Us" response for Pope and Bishop
        const lakan = {
            prophecies: [],
            stPaul: [],
            gospel: [],
            Agios: [...findTable(Prefix.commonPrayer + "AgiosPart1") || undefined, ...findTable(Prefix.commonPrayer + "GloryToFatherSonSpirit") || undefined],
            litany: findTable(Prefix.incenseDawn + 'LakanLitany&D=' + date) || undefined,
            cymbals: [],
            season: findTable(Prefix.massCommon + "SeasonalLitany&D=$Seasons." + Object.entries(Seasons).find(entry => entry[1] === naturalSeasons())[0]) || undefined,
            psalmResponse: [[Prefix.psalmResponse + date, ...prayersLanguages.map(lang => Intros.psalmEnd[lang] || '')]],
            gospelResponse: findTable(Prefix.gospelResponse + 'Lakan&D=' + date) || undefined,
            spasmosAdam: '',
        };
        if (date === copticFeasts.Baptism) {
            lakan.prophecies = ['HAB:3:12-19', 'ISA:35:1-2', 'ISA:40:1-25', 'ISA:9:1-2', 'BAR:3:36-End/4:1-4', 'EZK:36:24-29', 'EZK:47:1-9'];
            lakan.stPaul = ['1CO:10:1-13'];
            lakan.gospel = ['PSA:113:3-5', 'MAT:3:1-17'];
            lakan.Agios = findTable(Prefix.massCommon + "Agios&D=$Seasons.Baptism") || undefined;
            lakan.cymbals = [...findTable(Prefix.cymbalVerses + "&D=$Seasons.Baptism") || undefined, ...findTable(Prefix.cymbalVerses + "PopeAndBishop") || undefined, ...findTable(Prefix.cymbalVerses + "LordFeastsEnd") || undefined];
        }
        else if (date === copticFeasts.Apostles) {
            lakan.prophecies = ['EXO:15:22-End/16:1-1', 'EXO:30:17-30', 'ISA:1:16-26', 'ISA:35:1-10', 'ISA:43:16-End/44:1-6', 'ZEC:8:7-19', 'ZEC:14:8-11'];
            lakan.stPaul = ['HEB:10:22-32'];
            lakan.gospel = ['PSA:50:7-7/50:10-10', 'JHN:5:1-18'];
            lakan.cymbals = findTable(Prefix.cymbalVerses + "&D=" + date) || undefined;
            lakan.spasmosAdam = Prefix.massCommon + "SpasmosAdamLong&D=$copticFeasts.Apostles";
        }
        else if (date === copticFeasts.HolyThursday) {
            lakan.prophecies = [];
            lakan.stPaul = ['1TI:4:9-End/5:1-10'];
            lakan.gospel = ['PSA:50:9-9/50:12-12", "JHN:13:1-17'];
            lakan.cymbals = findTable(Prefix.cymbalVerses + "&D=" + date) || undefined;
        }
        ;
        (function adaptKissEachOther() {
            const KissEachOther = selectElementsByDataSet(btn.docFragment, Prefix.massCommon + "KissEachOther", undefined, 'root');
            if (KissEachOther.length < 1)
                return;
            KissEachOther[0].remove();
        });
        let anchor, languages = [defaultLanguage, foreingLanguage].filter(lang => lang);
        await insertBeforeAnchor();
        async function insertBeforeAnchor() {
            if (date === copticFeasts.Baptism) {
                await insert('StPaul', undefined, findTable(Prefix.massCommon + "Tayshoury") || undefined);
                await insert('StJohnHymn', undefined, findTable(Prefix.hymns + 'StJohnHymn' + date) || undefined); //!Missing in PrayersArray
                await insert('FeastHymn', undefined, findTable(Prefix.hymns + 'FeastHymn' + date) || undefined); //!Missing in PrayersArray
            }
            else if (date === copticFeasts.Apostles) {
                await insert('StPaul', undefined, findTable(Prefix.massCommon + "WeWorshipYouChrist") || undefined); //!Missing in PrayersArray
            }
            ;
            await insert('Cymbals', undefined, lakan.cymbals); //Inserting the relevant Cymbal Verses
            await insert('Prophecies', lakan.prophecies);
            await insert('StPaul', lakan.stPaul); //Inserting the St. Paul reading
            await insert('Agios', undefined, lakan.Agios); //Inserting Agios 
            await insert('PsalmResponse', undefined, lakan.psalmResponse);
            await insert('LakanGoseplResponse', undefined, lakan.gospelResponse);
            await insert('LakanLitany', undefined, lakan.litany); //Inserting the Lakan litany
            await insert('SeasonLitany', undefined, lakan.season); //Inserting the relevant "Crop/Rain/Harvest" litany
            await insert('SpasmosAdam', undefined, findTable(lakan.spasmosAdam) || undefined);
            async function insert(title, refs, reading) {
                anchor = selectElementsByDataSet(btn.docFragment, Prefix.anchor + title, undefined)[0];
                if (!anchor)
                    return;
                if (reading)
                    return insertReading(reading, anchor, getLanguages(Title(reading)));
                if (!title || !refs)
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
                    if (date === copticFeasts.HolyThursday)
                        reading = await retrieveReadingTableFromBible([
                            ...findTable(Prefix.HolyWeek + "LakanProphecies&D=GL55", ReadingsArrays.GospelNightArrayFR) || undefined,
                            ...findTable(Prefix.HolyWeek + "LakanSermony&D=GL55", ReadingsArrays.GospelNightArrayFR) || undefined
                        ], languages);
                    else
                        reading = await retrieveReadingTableFromBible([[Prefix.readingRef + ref]], languages);
                    if (!reading)
                        return;
                    if (title === 'StPaul') {
                        insertReading(getReadingIntroOrEnd(title, Intros.stPaulIntro, 'Intro'), anchor, prayersLanguages); //We insert the StPaul ReadingIntro in all cases
                    }
                    insertReading(reading, anchor, languages); //We insert the reading text itself
                    if (title === 'Prophecies' && date !== copticFeasts.HolyThursday) {
                        insertReading(getReadingIntroOrEnd(title, Intros.propheciesEnd, 'End'), anchor, prayersLanguages); //We do not insert the ReadingEnd for the holyThursday because it is already included in the table
                    }
                    else if (title === 'StPaul') {
                        insertReading(getReadingIntroOrEnd(title, Intros.stPaulEnd, 'End'), anchor, prayersLanguages); //We insert the StPaul ReadingEnd in all cases
                    }
                    else if (title === 'Psalm') {
                        reading = findTable(Prefix.bookOfHours + "Alleluia", BookOfHoursArray) || undefined;
                        replaceClass(reading, 'Assembly');
                        insertReading(reading, anchor, getLanguages(Prefix.bookOfHours));
                    }
                }));
                function insertReading(reading, anchor, langs) {
                    if (!reading)
                        return;
                    insertPrayersAdjacentToExistingElement({
                        tables: [reading],
                        languages: langs,
                        position: { el: anchor, beforeOrAfter: 'beforebegin' },
                        container: btn.docFragment,
                    });
                }
                function getReadingIntroOrEnd(prefix, text, intro = 'Intro') {
                    return [[
                            title + intro + "&C=Reading" + intro,
                            ...prayersLanguages.map(lang => text[lang] || '')
                        ]];
                }
                function replaceClass(reading, newClass) {
                    reading[0][0] = splitTitle(Title(reading))[0] + '&C=' + newClass;
                }
            }
        }
        ;
        await insertGospelReadingAndResponses({
            isMass: true,
            liturgy: Prefix.gospelMass,
            container: btn.docFragment,
            clearContainer: false,
            gospel: lakan.gospel.map(ref => getGospel(Prefix.gospelMass, ref))
        });
        function getGospel(prefix, ref) {
            ref.startsWith('PSA') ? prefix += 'Psalm' : prefix += 'Gospel';
            return [[prefix + '&D=' + copticDate + '&C=Title'], [Prefix.readingRef + ref]];
        }
    },
});
BOT.Prosternation = new Button({
    btnID: "btnProsternation",
    label: getLabel({
        AR: "صَلاة السَّجْدَة",
        FR: "Prière de la Prosternation",
        EN: "Prosternation Prayer",
    }),
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
                    Prefix.massCommon + "PlacesLitany",
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
                btnID: BOT.Prosternation.btnID + n.toString(),
                label: customizeLable(n),
                docFragment: new DocumentFragment(),
                onClick: () => btnOnClick(n),
                afterShowPrayers: () => btnAfterShowPrayers(n)
            });
        });
        BOT.Prosternation.children = children;
        function customizeLable(i) {
            const label = { ...labelBase };
            label[defaultLanguage] = label[defaultLanguage].replace('XXX', labelNumber[i][defaultLanguage]);
            return getLabel(label);
        }
        async function btnOnClick(n, getTables = false) {
            let btn = BOT.Prosternation.children[n];
            let tables = await returnTables(n);
            if (getTables)
                return tables;
            tables.forEach(table => {
                showPrayers({
                    container: btn.docFragment,
                    clearContainerDiv: true,
                    clearRightSideBar: true,
                    table: table,
                    languages: getLanguages(Title(table))
                });
            });
            async function returnTables(index) {
                let service = services[index], clone = [...Sequences().Prosternation];
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
                        return findTable(title) || undefined;
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
            let btn = BOT.Prosternation.children[n];
            BOT.IncenseMorning.afterShowPrayers(btn); //We call this function in order to insert an Expandable for the "God Have Mercy On Us" Diacon response
            if (n === 2)
                adaptConcludingHymn(btn.docFragment);
            else if (n === 0)
                BOT.MassUnBaptised.afterShowPrayers(btn); //We insert the Book of Hours prayers (as an expandable button)
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
                        table = findTable(title) || undefined;
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
                        return selectElementsByDataSet(btn.docFragment, Prefix.anchor + dataRoot + anyDay, undefined, 'root')[0];
                    }
                }
            }
            ;
            scrollToTop();
        }
    },
});
BOT.IncenseOffice = new Button({
    btnID: "btnIncenseOffice",
    label: getLabel({
        AR: "رفع بخور باكر أو عشية",
        FR: "Encens Matin et Vêpres",
        EN: 'Morning & Vespers Incense'
    }),
    onClick: (returnChildren = false) => {
        //setting the children of the btnIncenseOffice. This must be done by the onClick() in order to reset them each time the button is clicked
        BOT.IncenseOffice.children = [BOT.IncenseMorning, BOT.IncenseVespers];
        //show or hide the PropheciesDawn button if we are in the Great Lent or JonahFast:
        if (copticReadingsDate === copticFeasts.Pentecoste)
            BOT.IncenseOffice.children = [BOT.IncenseMorning, BOT.Prosternation];
        //We will remove the Vespers Button during if we are during the Great Lent or the Jonah Fast, and we are not a Saturday
        if ([Seasons.GreatLent, Seasons.JonahFast].includes(Season) &&
            weekDay !== 6)
            BOT.IncenseOffice.children = [BOT.IncenseMorning];
        if (returnChildren)
            return BOT.IncenseOffice.children;
    },
});
BOT.MassStBasil = new Button({
    btnID: "btnMassStBasil",
    label: getLabel({ AR: "باسيلي", FR: "Saint Basil", EN: "St Basil" }),
    docFragment: new DocumentFragment(),
    languages: [...prayersLanguages],
    onClick: () => {
        const Mass = Sequences().Mass;
        //Setting the standard mass prayers sequence
        BOT.MassStBasil.prayersSequence = [
            ...Mass.StBasil,
            ...Mass.CallOfHolySpirit,
            ...Mass.Litanies,
            ...Mass.Communion,
        ];
        //We scroll to the beginning of the page after the prayers have been displayed
        scrollToTop();
        return BOT.MassStBasil.prayersSequence;
    },
    afterShowPrayers: (btn = BOT.MassStBasil, prefix = Prefix.massStBasil) => {
        let btnDocFragment = btn.docFragment;
        (function insertSecondReconciliationBtn() {
            if (![BOT.MassStBasil, BOT.MassStCyril].includes(btn))
                return;
            const reconciliation2 = findTable(prefix + "Reconciliation2") || undefined;
            if (!reconciliation2)
                return console.log("Didn't find reconciliation");
            const btnRecon = new Button({
                btnID: "SecondReconcil",
                label: getLabel({
                    AR: reconciliation2[0][btn.languages.indexOf('AR') + 1],
                    FR: reconciliation2[0][btn.languages.indexOf('FR') + 1],
                }),
                cssClass: inlineBtnClass,
                docFragment: new DocumentFragment(),
                onClick: () => {
                    showPrayers({
                        table: reconciliation2,
                        languages: btn.languages,
                        position: btnRecon.docFragment,
                        container: btnRecon.docFragment,
                        clearContainerDiv: false,
                        clearRightSideBar: false,
                    });
                }
            });
            const anchor = selectElementsByDataSet(btnDocFragment, prefix + "Reconciliation")[0]?.nextElementSibling;
            const btnsDiv = insertExpandableBtn([btnRecon], anchor, 'beforebegin');
            btnsDiv.children[0]?.addEventListener("click", () => {
                selectElementsByDataSet(containerDiv, prefix + "Reconciliation", undefined, 'group')
                    .forEach((row) => row.classList.toggle(hidden));
            }); //We hide or unhide the main reconcilaition prayer when the second conciliation is displayed or hidden
        })();
        (function addRedirectionButtons() {
            //We create a list of the masses to which we will insert redirection button
            let redirectToList = [
                BOT.MassStBasil,
                BOT.MassStGregory,
                BOT.MassStCyril,
                BOT.MassStJohn,
            ].filter(b => ![btn, BOT.MassStJohn].includes(b)); //We remove the btn of the mass from the redirection list and the mass of st John
            let select;
            //Adding 2 buttons to redirect the other masses at the begining of the Reconciliation
            select = selectElementsByDataSet(btnDocFragment, prefix + "Reconciliation", { endsWith: true });
            redirectToAnotherMass([...redirectToList], {
                beforeOrAfter: "afterend",
                el: select[0],
            }, "RedirectionToReconciliation");
            //Adding 2 buttons to redirect to the other masses at the Anaphora prayer After "By the intercession of the Virgin St. Mary"
            select = selectElementsByDataSet(btnDocFragment, Prefix.massCommon + "SpasmosAdamShort");
            redirectToAnotherMass([...redirectToList], {
                beforeOrAfter: "afterend",
                el: select[select.length - 1],
            }, "RedirectionToAnaphora");
            //Adding 2 buttons to redirect to the other masses before Agios
            select = selectElementsByDataSet(btnDocFragment, prefix + "Agios");
            redirectToAnotherMass([...redirectToList], {
                beforeOrAfter: "afterend",
                el: select[0].previousElementSibling,
            }, "RedirectionToAgios");
            //Adding 2 buttons to redirect to the other masses before the Call upon the Holy Spirit
            select = selectElementsByDataSet(btnDocFragment, Prefix.massCommon +
                "Amen3WeProclaimYourDeath");
            redirectToAnotherMass([...redirectToList], {
                beforeOrAfter: "afterend",
                el: select[0],
            }, "RedirectionToLitanies");
            //Adding 2 buttons to redirect to the other masses before the Fraction Introduction
            select = selectElementsByDataSet(btnDocFragment, "FractionIntroduction", { endsWith: true });
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
                        label: btn.label,
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
            let anchorTitle = Prefix.massCommon + "KissEachOther";
            insertSpasmos(spasmosTitle, selectElementsByDataSet(btnDocFragment, anchorTitle)[0]);
            anchorTitle = Prefix.massCommon + "SpasmosWatosShort";
            //Insert Watos Spasmoses
            insertSpasmos(spasmosTitle.replace("Adam", "Watos"), selectElementsByDataSet(btnDocFragment, anchorTitle)[0], true);
        })();
        function insertSpasmos(spasmosTitle, anchor, hideAnchor = false) {
            if (!anchor)
                return console.log('anhcor is not valid');
            let spasmos = MassCommonArray.find((tbl) => Title(tbl)?.startsWith(spasmosTitle) &&
                isMultiDatedTitleMatching(Title(tbl), [Season]));
            if (!spasmos)
                return console.log("didn't find spasmos with title = ", spasmosTitle);
            const langs = getLanguages(Title(spasmos));
            const btnSpasmos = new Button({
                btnID: spasmosTitle.split("&D=")[0],
                label: getLabel({
                    AR: spasmos[0][langs.indexOf('AR') + 1],
                    FR: spasmos[0][langs.indexOf('FR') + 1],
                }),
                cssClass: inlineBtnClass,
                docFragment: new DocumentFragment(),
                onClick: () => {
                    showPrayers({
                        table: spasmos,
                        languages: langs,
                        position: btnSpasmos.docFragment,
                        container: btnSpasmos.docFragment,
                        clearContainerDiv: false,
                        clearRightSideBar: false,
                    });
                }
            });
            const btnsDiv = insertExpandableBtn([btnSpasmos], anchor, 'beforebegin');
            if (hideAnchor)
                btnsDiv.children[0].addEventListener("click", () => selectElementsByDataSet(containerDiv, anchor.dataset.root).forEach((row) => row.classList.toggle(hidden)));
        }
        (function insertLitaniesIntroductionFromOtherMasses() {
            if (btn !== BOT.MassStBasil)
                return; //This button appears only in St Basil Mass
            const anchor = selectElementsByDataSet(btnDocFragment, Prefix.massCommon + "LitaniesIntroduction")[0];
            if (!anchor)
                return console.log("Di not find the Anchor");
            const stGregLitanies = new Button({
                btnID: BOT.MassStGregory.btnID + "LitaniesIntro",
                label: getLabel({
                    AR: "طلبات القداس الغريوري",
                    FR: "Litanies de St. Gregory",
                }),
                cssClass: inlineBtnClass,
                languages: btn.languages,
                docFragment: new DocumentFragment(),
                prayersSequence: [Prefix.massStGregory + "LitaniesIntroduction"],
            });
            const stCyrilLitanies = new Button({
                btnID: BOT.MassStCyril.btnID + "LitaniesIntro",
                label: getLabel({
                    AR: "طلبات القداس الكيرلسي",
                    FR: "Litanies de la messe de Saint Cyril",
                }),
                cssClass: inlineBtnClass,
                languages: btn.languages,
                docFragment: new DocumentFragment(),
                prayersSequence: [Prefix.massStCyril + "LitaniesIntroduction"],
            });
            insertExpandableBtn([stGregLitanies, stCyrilLitanies], anchor, 'beforebegin', 'Lit');
        })();
        (function insertRelevantSeasonalLitany() {
            let anchor = selectElementsByDataSet(btnDocFragment, Prefix.anchor + "SeasonalLitanyPlaceHolder", undefined, 'root')[0];
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
                btnLabels: getLabel({ AR: "صلوات القسمة", FR: "Oraisons de la Fraction" }),
                masterBtnID: "btnFractionPrayers",
                anchor: Array.from(btnDocFragment.children)
                    .find(child => child.id && child.id.startsWith(Prefix.anchor + "Fraction")),
            });
            function filter() {
                let filtered = [];
                let dates = [copticDate, Season, copticFeasts.AnyDay];
                if (Number(copticDay) === 29 && ![4, 5, 6].includes(Number(copticMonth)))
                    dates.unshift(copticFeasts.Coptic29th);
                dates.forEach(date => filtered.push(...FractionsArray.filter(table => isMultiDatedTitleMatching(Title(table), [date]))));
                return getUniqueValuesFromArray(filtered);
            }
            ;
        })();
        (function insertCommunionChants() {
            //Inserting the Communion Chants after the Psalm 150
            let psalm150 = selectElementsByDataSet(btnDocFragment, Prefix.massCommon + "CommunionPsalm150");
            let filtered = [];
            [copticDate, Season, copticFeasts.AnyDay]
                .forEach(date => {
                filtered.push(...CommunionArray.filter(table => isMultiDatedTitleMatching(Title(table), [date])));
            });
            showMultipleChoicePrayersButton({
                filteredPrayers: getUniqueValuesFromArray(filtered),
                languages: btn.languages,
                btnLabels: getLabel({
                    AR: "مدائح التوزيع",
                    FR: "Chants de la communion",
                }),
                masterBtnID: "communionChants",
                anchor: psalm150[psalm150.length - 1],
            });
        })();
        adaptConcludingHymn(btnDocFragment);
    },
});
BOT.MassStCyril = new Button({
    btnID: "btnMassStCyril",
    label: getLabel({ AR: "كيرلسي", FR: "Saint Cyril", EN: "St Cyril" }),
    docFragment: new DocumentFragment(),
    languages: [...prayersLanguages],
    onClick: () => {
        //Setting the standard mass prayers sequence
        const Mass = Sequences().Mass;
        BOT.MassStCyril.prayersSequence = [
            ...Mass.StCyril,
            ...[
                Prefix.massCommon +
                    "AgiosPart3",
                Prefix.commonPrayer + "KyrieElieson",
                Prefix.commonPrayer + "BlockIriniPassi",
                Prefix.anchor + "Fraction",
                Prefix.commonPrayer + "OurFatherInHeaven",
                Prefix.massCommon + "Confession",
            ],
            ...Mass.Communion,
        ];
        return BOT.MassStCyril.prayersSequence;
    },
    afterShowPrayers: async () => BOT.MassStBasil.afterShowPrayers(BOT.MassStCyril, Prefix.massStCyril),
});
BOT.MassStGregory = new Button({
    btnID: "btnMassStGregory",
    label: getLabel({ AR: "غريغوري", FR: "Saint Gregory" }),
    docFragment: new DocumentFragment(),
    languages: [...prayersLanguages],
    onClick: () => {
        const Mass = Sequences().Mass;
        //Setting the standard mass prayers sequence
        BOT.MassStGregory.prayersSequence = [
            ...Mass.StGregory,
            ...Mass.CallOfHolySpirit,
            ...Mass.Litanies,
            ...Mass.Communion,
        ];
        //removing irrelevant prayers from the array
        BOT.MassStGregory.prayersSequence.splice(BOT.MassStGregory.prayersSequence.indexOf(Prefix.massCommon + "CallOfTheHolySpiritPart1"), 9);
        scrollToTop();
        return BOT.MassStGregory.prayersSequence;
    },
    afterShowPrayers: async () => BOT.MassStBasil.afterShowPrayers(BOT.MassStGregory, Prefix.massStGregory),
});
BOT.MassStJohn = new Button({
    btnID: "btnMassStJohn",
    label: getLabel({ AR: "القديس يوحنا", FR: "Saint Jean" }),
    docFragment: new DocumentFragment(),
    prayersSequence: [],
    onClick: () => {
        alert("The prayers of this mass have not yet been added. We hope they will be ready soon");
        return; //until we add the text of this mass
        scrollToTop(); //scrolling to the top of the page
        return BOT.MassStJohn.prayersSequence;
    },
    afterShowPrayers: async () => BOT.MassStBasil.afterShowPrayers(BOT.MassStJohn),
});
BOT.MassBaptised = new Button({
    btnID: "btnMassBaptised",
    label: getLabel({
        AR: "قٌدَّاسِ المُؤْمِنينَ",
        FR: "Liturgie des Croyants",
        EN: "Baptized Mass",
    }),
    parentBtn: BOT.Mass,
    children: [BOT.MassStBasil, BOT.MassStGregory, BOT.MassStCyril], //We are removing Mass StJohn for now
});
BOT.GospelVespers = new Button({
    btnID: "btnReadingsGospelIncenseVespers",
    label: getLabel({
        AR: "إنجيل عشية",
        FR: "Évangile  Vêpres",
        EN: "Vespers Gospel",
    }),
    onClick: async () => await BOT.GospelMass.onClick(Prefix.gospelVespers),
});
BOT.GospelMorning = new Button({
    btnID: "btnReadingsGospelIncenseDawn",
    label: getLabel({
        AR: "إنجيل باكر",
        FR: "Évangile du Matin",
        EN: "Morning Gospel",
    }),
    onClick: async () => await BOT.GospelMass.onClick(Prefix.gospelMorning),
});
BOT.GospelNight = new Button({
    btnID: "btnReadingsGospelNight",
    label: getLabel({
        AR: "إنجيل المساء",
        FR: "Évangile du Soir",
        EN: "Night Gospel",
    }),
    onClick: async () => await BOT.GospelMass.onClick(Prefix.gospelNight)
});
BOT.GospelMass = new Button({
    btnID: "btnReadingsGospelMass",
    label: getLabel({
        AR: "إنجيل القداس",
        FR: "Évangile de la messe",
        EN: "Mass Gospel",
    }),
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
BOT.HW = new Button({
    btnID: 'btnHolyWeek',
    label: getLabel({ AR: 'طقس اسبوع الآلام', FR: 'Rite de la semaine sainte' }),
    onClick: () => {
        /*The buttons tree is structured this way:
        btnMaster =>
                btnPassOver =>
                        [btnDay, btnEvening]=>
                                  [btn1stHour, btn3rdHour, etc.]*/
        let Evening = 'E', Morning = 'M';
        let btnPassOver = new Button({
            btnID: 'btnPassover',
            label: getLabel({ AR: 'البصخة المقدسة', FR: 'Pessah' }),
            onClick: () => btnPassOver.children = [btnPassOverOnClick(Morning), btnPassOverOnClick(Evening)], //We remove undefined elements
        }); //btnPassOver shows Day and Evening buttons
        BOT.HW.children = [btnPassOver];
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
                    label: getLabel(labels[[Morning, Evening].indexOf(service)]),
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
            return hoursLabels.map(hour => createHourBtn(hour.prefix, getLabel(hour.lable))).filter(btn => btn); //We remove any undefined buttons   
            function createHourBtn(hour, label) {
                if (hour === '12H' && weekDay !== 5)
                    return undefined; //The 12th hour is only for Friday
                if (['1H', '3H', '6H'].includes(hour) && service === Morning && weekDay === 0)
                    return undefined; //On Palm Sunday we start at the 9th hour
                let hourReadings = ReadingsArrays.GospelNightArrayFR
                    .filter(table => RegExp(Prefix.HolyWeek + hour + service + '\.*&D=' + copticReadingsDate).test(Title(table)));
                let btnHour = new Button({
                    btnID: 'btn' + hour,
                    label: label,
                    parentBtn: btn,
                    languages: prayersLanguages,
                    docFragment: new DocumentFragment(),
                    onClick: () => btnHour.prayersSequence = [...Sequences().HolyWeek.PassOver],
                    afterShowPrayers: async () => await hourBtnAfterShowPrayers(btnHour, hour, hourReadings, label),
                });
                return btnHour;
                async function hourBtnAfterShowPrayers(btn, hour, dayPrayers, label) {
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
                    await insertHourReadings();
                    async function insertHourReadings() {
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
                            return selectElementsByDataSet(btnHour.docFragment, Prefix.anchor + placeHolder + '&D=$Seasons.HolyWeek', undefined, 'root')[0];
                        }
                        await insertTablesBeforeAnchors();
                        async function insertTablesBeforeAnchors() {
                            let languages;
                            const sequence = [readings.coptPsalm,
                                readings.coptGospel,
                                readings.nonCopticPsalm,
                                readings.nonCopticGospel,
                                readings.Commentary,
                                readings.Prophecies,
                                readings.Sermony, //!This must come directly after readings.Prophecies
                                readings.KhinEfran,
                                readings.Litany];
                            for (const reading of sequence) {
                                if (!reading.table || !reading.anchor)
                                    return console.log('Either the table or the Anchor are missing:  table = ', reading.table, 'Anchor = ', reading.anchor);
                                if ([readings.KhinEfran, readings.Litany].includes(reading))
                                    languages = prayersLanguages;
                                else if ([readings.Sermony, readings.Commentary, readings.Prophecies].includes(reading))
                                    languages = readingsLangs;
                                else if ([readings.nonCopticGospel, readings.nonCopticPsalm].includes(reading))
                                    languages = [defaultLanguage, foreingLanguage];
                                else if ([readings.coptGospel, readings.coptPsalm].includes(reading))
                                    languages = ['COP'];
                                reading.table = reading?.table?.filter(row => row); //We remove any undefined elements in the table;
                                reading.table = await retrieveReadingTableFromBible(reading.table, languages);
                                reading.table[0] = insertTableTitleRow(); //We replace the first row of the table with a customized title row
                                insertPrayersAdjacentToExistingElement({
                                    tables: [reading.table],
                                    languages: languages,
                                    container: btnHour.docFragment,
                                    position: {
                                        el: reading.anchor, beforeOrAfter: 'beforebegin'
                                    }
                                });
                                function insertTableTitleRow() {
                                    let row = [Title(reading.table)];
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
                            }
                            ;
                        }
                        ;
                        Array.from(btnHour.docFragment.children).find((div) => div.dataset.root === Prefix.incenseDawn +
                            "GodHaveMercyOnUsRefrain&D=$Seasons.GreatLent")?.remove(); //Removing the Title row of the "God Have Mercy" table
                    }
                    ;
                    (function insertThursdayLakanAndMassBtns() {
                        //If we are on the Holy Thursday morning service
                        if (weekDay !== 4)
                            return;
                        if (service !== Morning)
                            return; //We are during the Morning Passover service
                        if (hour !== '11H')
                            return; //It is the 9th Hour button
                        let anchor = btn.docFragment.children[0];
                        if (!anchor)
                            return;
                        let lakkanBtn = new Button({
                            btnID: BOT.Lakkan.btnID,
                            label: getLabel({ AR: 'لقان خميس العهد', FR: 'Lavage des pieds' }),
                            docFragment: new DocumentFragment(),
                            onClick: () => BOT.Lakkan.onClick(copticFeasts.HolyThursday, lakkanBtn),
                            afterShowPrayers: async () => await BOT.Lakkan.afterShowPrayers(copticFeasts.HolyThursday, lakkanBtn),
                        });
                        let btnMass = new Button({
                            btnID: 'btnMass',
                            label: getLabel({ AR: 'قداس خميس العهد', FR: 'Messe du Jeudi Saint' }),
                            docFragment: new DocumentFragment(),
                            onClick: () => {
                                const Mass = Sequences().Mass;
                                let sequence = [...Mass.StBasil, ...Mass.Communion];
                                BOT.Mass.prayersSequence = sequence;
                            },
                            afterShowPrayers: async () => { },
                        });
                        btn.children = [lakkanBtn, btnMass];
                        insertExpandableBtn([lakkanBtn, btnMass], anchor, 'afterend', btn.btnID.replace('btn', ''));
                    })();
                }
            }
        }
    }
});
BOT.Bible = new Button({
    btnID: 'btnBible',
    label: getLabel({
        AR: 'الكتاب المقدس',
        FR: 'La Bible'
    }),
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
            label: getLabel({
                AR: 'العهد الجديد',
                FR: 'Nouveau Testament',
                EN: 'New Testament'
            }),
            onClick: async () => newTestament.children = await getBooksButtons(false) //!We need the children to be added when the button is clicked not when it is created because the Bibles are not defined at this stage
        });
        let oldTestament = new Button({
            btnID: 'oldTestament',
            label: getLabel({
                AR: 'العهد القديم',
                FR: 'Ancien Testament',
                EN: 'Old Testament'
            }),
            onClick: async () => oldTestament.children = await getBooksButtons(true) //!We need the children to be added when the button is clicked not when it is created because the Bibles are not defined at this stage
        });
        BOT.Bible.children = [oldTestament, newTestament];
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
                return {
                    DL: bookID,
                    FL: undefined
                };
            });
            let booksButtons = labels.map(label => {
                let btn;
                btn = new Button({
                    btnID: 'btnBibleBook' + labels.indexOf(label),
                    label: label,
                    onClick: () => btn.children = getChaptersButtons(booksListDefault.find(book => book.human_long === label.DL).id) //!We need the children to be added when the button is clicked not when it is created because the Bibles are not defined at this stage
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
                    return new Button({
                        btnID: 'btnChapter' + number,
                        label: getLabel(getChapterLabel(number)),
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
                        chapterNumber: refs.chapterNumber,
                        lang: lang
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
                    label: getLabel({
                        AR: right,
                        FR: right,
                        EN: right,
                    }),
                    onClick: () => nextOnClick(true)
                });
                let prev = new Button({
                    btnID: 'btnPrev',
                    label: getLabel({
                        AR: left,
                        FR: left,
                        EN: left,
                    }),
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
                return book.human_long + '\n' + getChapterLabel(chapterNumber)[lang] || '';
            }
        }
        function getChapterLabel(number) {
            return {
                AR: 'إصحاح ' + number,
                FR: 'Chapître ' + number,
                EN: 'Chapter ' + number,
            };
        }
    },
    afterShowPrayers: () => {
        if (!localStorage.bookMarks)
            return;
        let lastReading = JSON.parse(localStorage.bookMarks)[0];
        if (!lastReading)
            return lastReading = null;
        //We create a fake button simulating the action of chapters' buttons of each book
        let btnLabel = getLabel({
            AR: 'آخر قراءة',
            FR: 'Dernier chapitre lu',
            EN: 'Last Reading'
        });
        let btn = new Button({
            btnID: 'lastReading',
            label: btnLabel,
            cssClass: 'btnBookMark',
            onClick: async () => {
                await BOT.Bible.onClick({ bookID: lastReading[0], chapterNumber: lastReading[1] });
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
BOT.Edit = new Button({
    btnID: "btnEditMode",
    label: getLabel({
        AR: "تعديل النص",
        FR: "Enter Editing Mode",
        EN: "Enter Editing Mode",
    }),
    onClick: () => {
        if (document.getElementById("selectArray"))
            return; //If a select element is already appended, we return
        //@ts-ignore
        if (!console.save)
            addConsoleSaveMethod(console); //We are adding a save method to the console object
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
        let select = document.createElement("select"), option;
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
        select.addEventListener("change", () => startEditingMode({ select: select }));
    },
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
 * @param {typeBtnLabel} btnLabels - An object containing the labels of the master button that the user will click to show a list of buttons, each representing a prayer in selectedPrayers[]
 * @param {string} masterBtnID - The id of the master button
 */
async function showMultipleChoicePrayersButton(args) {
    if (!args.anchor)
        console.log("anchor missing");
    if (!args.masterBtnDiv && args.anchor) {
        args.masterBtnDiv = document.createElement("div"); //a new element to which the inline buttons elements will be appended
        args.anchor.insertAdjacentElement("afterend", args.masterBtnDiv); //we insert the div after the insertion position
    }
    if (!args.masterBtnDiv)
        return console.log('Didn\'t find masterBtnDiv');
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
                label: getLabel({ AR: "التالي", FR: "Suivants" }),
                cssClass: inlineBtnClass,
            });
            //if the number of prayers is > than the groupOfNumber AND the remaining prayers are >0 then we show the next button
            if (masterBtn.children.length - startAt > groupOfNumber) {
                //We create the "next" Button only if there is more than 6 inlineBtns in the prayersBtn.inlineBtns[] property
                next.onClick = () => btnNextOnClick(true);
            }
            else if (masterBtn.children.length - startAt <= groupOfNumber) {
                next.label = getLabel({
                    AR: "عودة",
                    FR: "Retour"
                });
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
                if (!foreingLanguage && !childBtn.label.DL)
                    return; //If no foreign language has been set by the user, and the prayer is not availble in the defaultLanguage (we check this by seeing if there is a label in this language), we will not create the btn
                if (!childBtn.label.DL && !childBtn.label.FL)
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
                .filter(btn => !btn?.label.DL && btn.label.FL) //For any button which prayer is not available in the defaultLanguage, but is available in the foreignLanguage, we will set its defaultLanguage label to be equal to its foreignLanguage lable. We do this, because any button that doesn't have a defaulLangauge label will be excluded from the btns array that the function will return
                .map(btn => {
                btn.label.DL = btn.label.FL;
                btns.splice(btns.indexOf(btn), 1); //We remove the button from btns array, and will push it to the array later in order to move it to the end
                return btn;
            })
                .forEach(btn => btns.push(btn));
        return btns.filter(btn => btn?.label.DL); //!We return only the btns having a lable in the defaultLanguage
        function btnOnClick(btn, title) {
            let table = findTable(title) || undefined;
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
    let anchor = selectElementsByDataSet(container, Prefix.anchor + 'ConcludingHymn', undefined, 'root')[0];
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
                selectElementsByDataSet(container, Prefix.commonPrayer + 'ConcludingHymn', undefined, 'root')[1].remove(); //We remove the first paragraph ('Amin Allelujah')
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
        const bishop = new Button({
            btnID: 'concludingHymn',
            label: getLabel({
                AR: 'في حضور البطرك أو أحد الأساقفة',
                FR: 'En présence du Pape ou d\'un évêque',
            }),
            cssClass: inlineBtnClass,
            languages: prayersLanguages,
            docFragment: new DocumentFragment(),
            prayersSequence: [Prefix.commonPrayer + "ConcludingHymnBishop"],
        });
        const btnsDiv = insertExpandableBtn([bishop], anchor, 'beforebegin');
    })();
}
/**
 * Makes a buttons div container floating on the top of the page
 * @param {HTMLDivElement} btnContainer - the buttons div container we want to make float;
 * @param {boolean} top - true = top, false = bottom
 * @param {string} value - the value of the floating
 */
function floatOnTopOrBottom(btnContainer, top, value = '5px') {
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
    let reading = readingArray.find((table) => isMultiDatedTitleMatching(splitTitle(Title(table))[0], [readingDate]));
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
    let splitted;
    let ready = new Set(); //this set will contain arrays of ["bookID:chapterNumber:lang", chapter] for each chapter treated. If the chapter is found, we will not retreive it again.
    const retrieved = [];
    for (const row of reading) {
        //! We can't use forEach because forEach doesn't await for async functions to resolve
        if (rowsWithReferences.includes(row))
            retrieved.push(await referenceTitleRow(row), ...await processReadingReference(row));
        else if (reading.indexOf(row) === 0)
            retrieved.push(row); //This is the first row of the table, and it does not inlcude any references, we push it as is (it is the case of almost all the 1st rows of all tables)
        else if (RegExp('&C=(Title|SubTitle)').test(row[0]) //i.e., this is not the 1st row of the table, but its class is 'Title' or 'Subtitle': in this case if the next row includes references, it means that we are like starting a new reading table: we will replace the title row with a row including the title of the reading
            && (rowsWithReferences.includes(reading[reading.indexOf(row) + 1]) //the next row is a row that includes reading references
                ||
                    reading[reading.indexOf(row) + 1][0].includes('&C=ReadingIntro'))) //OR the the next row has the class 'ReadingIntro' which means that we are starting a reading (the references are most probably included in row +2)
            retrieved.push(await referenceTitleRow(row, true));
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
            row.length === langs.length + 1 ? actor = splitTitle(row[0])[1] : actor = splitted[1];
            if (!actor)
                actor = 'NoActor';
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
                parts.unshift(refs[0].split(':')[0]); //We add the bookID 
            if (parts.length < 3)
                return ''; //parts shoulde be foramtted like: [bookID, chapterNumber, verse-verse]
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
    async function referenceTitleRow(row, next = false) {
        let index = reading.indexOf(row);
        let ref = getReferences(row);
        while (!ref && next) {
            index += 1;
            if (!reading[index])
                break;
            ref = getReferences(reading[index]);
        }
        if (!ref)
            return row;
        let titleRow = [Prefix.same + '&C=Title', ...langs.map(lang => '')];
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
            titleRow[langs.indexOf(lang) + 1] =
                book[0].human
                    + ' ('
                    + adaptMutipleRefs(lang)
                    + ')';
            function splitRef(ref) {
                return ref
                    .replaceAll(bookID + ':', '')
                    .split('/')
                    .map(part => part.replace(':', ': '));
            }
            function adaptMutipleRefs(lang) {
                //'ISA:13:11-End/14:1-End/16:8-End'
                let parts = ref.split('/');
                let to = { AR: ' إلى ', FR: ' à ', EN: ' to ' }[lang];
                let fromTo = parts[0].split(':')[1] + ': ' + parts[0].split(':')[2]; //=> '13:11-End'
                if (parts.length > 1 && bookID === 'PSA') {
                    fromTo = fromTo.split('-')[0]; //=>'13:11'
                }
                else if (parts.length > 1) {
                    fromTo = fromTo.split('-')[0]; //=>'13:11'
                    fromTo += to; //=> '13: 11 to '
                    fromTo += parts[parts.length - 1].split(':')[0] + ': '; //=> '13: 11 to 16: End'
                    fromTo += parts[parts.length - 1].split(':')[1].split('-')[1]; //=>'13: 11 to 16: End'
                }
                if (fromTo.includes('End')) {
                    let chapterNumber;
                    if (parts.length > 1)
                        chapterNumber = Number(parts[parts.length - 1].split(':')[0]); //=>'16
                    else
                        chapterNumber = Number(parts[parts.length - 1].split(':')[1]); //=>'13'
                    fromTo = fromTo.replace('End', book[1]
                        .find(chapter => book[1].indexOf(chapter) === chapterNumber) //we find the chapter
                        ?.filter(verse => verse?.length === 2) //we get all the verses of the chapter
                        .length.toString()); //We get the length of the verses
                }
                return fromTo; //=>//=>'13:1 à 16:30
            }
        }));
        return titleRow;
        function getReferences(r) {
            return row.find(el => el.startsWith(Prefix.readingRef));
        }
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
            chapterNumber = (Number(chapterNumber) + 1).toString(); //We compensate the diffrence between the numbering of the psalms used in the Coptic Church, and the numbering in the used Arabic Bible book
        let exists = Array.from(ready).find(array => array[0] === bookID + ":" + chapterNumber + ":" + lang);
        if (lang === 'CA')
            lang = 'AR';
        if (exists)
            return getVersesRange(exists[1], verses.split('-'));
        if (!lang) {
            return new Error("The language is not valid. Error from retrieveVersesText()");
        }
        ;
        if (![defaultLanguage, foreingLanguage].includes(lang))
            return ''; //We return an empty string if the language is not either the defaultLanguage or the foreignLanguage because in all cases those are the only languages that the user will be able to see. No need to retrieve a language that will not be retrieved
        if (!chapterNumber || !verses) {
            console.log('chapterNumber = ', chapterNumber, "verses = ", verses);
            return new Error("Failed to retrieve verse");
        }
        ;
        if (!bookID || bookID.length > 3) {
            console.log('bookID = ', bookID);
            return new Error("Failed to retrieve verse");
        }
        ; //books ids are 3 letters length
        let Bible = await getBibleVersion(lang, false);
        if (!Bible)
            return new Error("Failed to retrieve verse");
        let chapterVerses = getBibleChapter(chapterNumber, undefined, Bible, bookID);
        if (!chapterVerses) {
            console.log('chapterVerses = ', chapterVerses);
            return new Error("Failed to retrieve verse");
        }
        ;
        ready.add([bookID + ":" + chapterNumber + ":" + lang, chapterVerses]);
        return getVersesRange(chapterVerses, verses.split('-'));
        function getVersesRange(chapter, range) {
            if (range.length !== 2) {
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
    let exp = RegExp('Sup_\\d*_Sup', 'g');
    let ranges = paragraphs
        .map(parag => Array.from(parag.matchAll(exp))
        .map(match => match[0]));
    ranges = ranges
        .map(range => [range[0], range[range.length - 1]]) //Those are the first and last verses numbers in each paragraph of the default language
        .filter(versesRange => versesRange[0] && versesRange[1]); //!We must remove any undefined elements;
    langs
        .forEach(lang => {
        if (lang === defaultLanguage)
            return; //We do not split the paragraph for the default language because its the paragraphs division in this lanaguage who will serve as guid for the splitting of the foreign language text
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
            const match = text.match(RegExp(versesRange[0] + '\.*' + toVerse));
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
                if (!table[ii]) {
                    table.push([...langs.map(lang => '')]);
                    add > 0 ? table[ii].unshift(retrieved[0]) : table[ii].unshift(Prefix.same + "&C=" + actor); //If the number of elements in retrieved > languages, it means the first element is a title element. We will keep it as first element of each newly added row to the table, otherwise, we will manually add a title element as first element.
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
        const bishop = new Button({
            btnID: 'PopePsalm',
            label: getLabel({
                AR: 'في حضور البطرك أو أحد الأساقفة',
                FR: 'En présence du Pape ou d\'un évêque',
            }),
            cssClass: inlineBtnClass,
            languages: prayersLanguages,
            docFragment: new DocumentFragment(),
            prayersSequence: [Prefix.commonPrayer + "MaroEtshasf"],
        });
        const btnsDiv = insertExpandableBtn([bishop], getAnchor("Gospel")?.previousElementSibling, 'beforebegin');
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
            let response = PsalmAndGospelArray.find((tbl) => splitTitle(Title(tbl))[0] === prayersSequence[index]); //!Caution: this must be an '===' search operator not startWith() because otherwise, 'NativitayParamoun' will be selected for the 'Nativity' Season, and 'Baptism Paramoun' might be selected for the 'Baptism' Season if their tables in PrayersArray are before those of the relevant table
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
            if (!args.isMass && Title(table)?.includes('Psalm&D='))
                return;
            insertPrayersAdjacentToExistingElement({
                tables: await retrieveFromBible(table),
                languages: args.languages,
                position: {
                    beforeOrAfter: "beforebegin",
                    el: getAnchor(Title(table).split(args.liturgy)[1].split('&D=')[0]),
                },
                container: args.container,
            });
            async function retrieveFromBible(tbl) {
                //! We didn't push the array to the table directly because otherwise it will add a new row to the original table each time we click on the Unbaptised Mass button or the Gospel Reading button
                const Intros = ReadingsIntrosAndEnds();
                //We will include the gospel end: 'Glory To God Forever' and the Psalm End 'Hallelujah'
                if (!args.isMass)
                    return [await retrieveReadingTableFromBible(tbl, args.languages)];
                else if (Title(tbl)?.includes('Gospel&D='))
                    return [[...await retrieveReadingTableFromBible(tbl, args.languages), getReadingEnd(Intros.gospelEnd)]]; //We return a copy of the table not the original table in order to avoid modifying the original table.
                else if (Title(tbl)?.includes('Psalm&D='))
                    return [[...await retrieveReadingTableFromBible(tbl, args.languages), getReadingEnd(Intros.psalmEnd)]]; //We return a copy of the table not the original table in order to avoid modifying the original table.
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
                .filter((table) => isMultiDatedTitleMatching(splitTitle(Title(table))[0], [copticReadingsDate]));
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
            return selectElementsByDataSet(args.container, Prefix.anchor + root, undefined, 'root')[0];
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
            Prefix.psalmResponse + anyDay + '||$Seasons.Kiahk', //This is its default value
            liturgy + "Psalm&D=",
            liturgy + "Gospel&D=",
            Prefix.gospelResponse, //This is its default value
        ]; //This is the generic sequence for the prayers related to the lecture of the gospel at any liturgy (mass, incense office, etc.). The OnClick function triggered by the liturgy, adds the dates of the readings and of the psalm and gospel responses
        if (!isMass)
            return prayersSequence; //If we are not calling the function within a mass/incense liturgy, we will not need to set the Psalm and Gospel Responses, we will return the prayersSequence array
        //setting the psalm and gospel responses
        (function setPsalmAndGospelResponses() {
            let PsalmAndGospelResponses = PsalmAndGospelArray.filter((table) => isMultiDatedTitleMatching(Title(table), [copticDate, Season]));
            let psalmResponse = PsalmAndGospelResponses.filter((table) => Title(table)?.startsWith(Prefix.psalmResponse));
            let gospelResponse = PsalmAndGospelResponses.filter((table) => Title(table)?.startsWith(Prefix.gospelResponse));
            if (Season === Seasons.GreatLent) {
                [0, 6].includes(weekDay)
                    ? (gospelResponse = [
                        gospelResponse.find((table) => Title(table)?.includes("Sundays&D=")),
                    ])
                    : (gospelResponse = gospelResponse =
                        [gospelResponse.find((table) => Title(table)?.includes("Week&D="))]);
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
                    gospelResponse.find((table) => Title(table)?.includes(prefix + "&D=")),
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
    function getTomorowCopticReadingDate() {
        let today = new Date(todayDate.getTime() + calendarDay); //We create a date corresponding to the  the next day. This is because in the PowerPoint presentations from which the gospel text was retrieved, the Vespers gospel of each day is linked to the day itself not to the day before it: i.e., if we are a Monday and want the gospel that will be read in the Vespers incense office, we should look for the Vespers gospel of the next day (Tuesday).
        return getSeasonAndCopticReadingsDate(convertGregorianDateToCopticDate(today, false)[1], today);
    }
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
function insertExpandableBtn(btns, anchor, before = 'beforebegin', titlesGroup, append = true, dataGroup) {
    if (!anchor)
        return;
    const btnsContainer = document.createElement('div');
    btnsContainer.classList.add(inlineBtnsContainerClass);
    if (defaultLanguage === 'AR')
        btnsContainer.dir = 'rtl';
    if (dataGroup)
        btnsContainer.dataset.group = dataGroup;
    anchor.insertAdjacentElement(before, btnsContainer);
    btns.forEach(btn => insert(btn));
    function insert(btn) {
        const html = createHtmlBtn({
            btn: btn,
            btnsContainer: btnsContainer,
            btnClass: btn.cssClass || inlineBtnClass,
            clear: false,
            onClick: () => {
                const id = btn.btnID + 'Expandable';
                let expandable = containerDiv.querySelector('#' + id);
                if (expandable)
                    return toggle(expandable, btns.map(btn => btn.btnID), titlesGroup);
                (async function insertExpandable() {
                    expandable = document.createElement('div');
                    expandable.id = id;
                    btnsContainer.insertAdjacentElement('afterend', expandable);
                    await showChildButtonsOrPrayers(btn, false, false);
                    expandable.appendChild(btn.docFragment);
                    if (!titlesGroup)
                        return;
                    const titles = Array.from(expandable.children).filter((div) => isTitlesContainer(div));
                    if (!append)
                        titles.reverse();
                    showTitlesInRightSideBar(titles, undefined, false, titlesGroup + btn.btnID, append, titlesGroup); //We add a prefix in order to avoid duplicate ids with already existing divs
                    toggle(expandable, btns.map(btn => btn.btnID), titlesGroup, false); //!Notice that toggle = false because we don't want to hide the expandable that we have just created for the first time
                })();
            }
        });
        html.classList.add("expand"); //We need this class in order to retrieve the btn in Display Presentation Mode
    }
    btnsContainer.style.gridTemplateColumns = setGridColumnsOrRowsNumber(btnsContainer, 3);
    return btnsContainer;
    function toggle(expandable, ids, titleGroup, toggle = true) {
        if (!expandable)
            return;
        ids.filter(id => !RegExp(id).test(expandable.id))
            .forEach(id => {
            //We hide all the other expandables and their titles
            containerDiv.querySelector('#' + id + 'Expandable')?.classList.add(hidden);
            toggleTitles(titleGroup + id, true);
        });
        if (!toggle)
            return; //It means we don't want to toggle the expandable itself and its titles
        expandable.classList.toggle(hidden);
        toggleTitles(titleGroup + expandable.id.replace('Expandable', ''));
        function toggleTitles(group, hide = false) {
            if (!group)
                return;
            const titles = Array.from(sideBarTitlesContainer.children)
                .filter((div) => div.dataset.group === group);
            if (!hide)
                titles.forEach(div => div.classList.toggle(hidden));
            else
                titles.forEach(div => div.classList.add(hidden));
        }
        ;
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVjbGFyZUJ1dHRvbnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9tb2R1bGVzL0RlY2xhcmVCdXR0b25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLFNBQVMsU0FBUztJQUNoQixPQUFPO1FBQ0wsT0FBTyxFQUFFO1lBQ1AscU5BQXFOO1lBQ3JOLE1BQU0sQ0FBQyxhQUFhLEdBQUcsY0FBYztZQUNyQyxNQUFNLENBQUMsV0FBVyxHQUFHLFNBQVM7WUFDOUIsTUFBTSxDQUFDLGFBQWEsR0FBRyxzQkFBc0I7WUFDN0MsTUFBTSxDQUFDLFdBQVcsR0FBRyxZQUFZO1lBQ2pDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsaUJBQWlCO1lBQ3RDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsaUJBQWlCO1lBQ3RDLE1BQU0sQ0FBQyxjQUFjLEdBQUcsZ0JBQWdCO1lBQ3hDLE1BQU0sQ0FBQyxZQUFZLEdBQUcsY0FBYztZQUNwQyxNQUFNLENBQUMsY0FBYyxHQUFHLHFCQUFxQjtZQUM3QyxNQUFNLENBQUMsYUFBYSxHQUFHLFlBQVk7WUFDbkMsTUFBTSxDQUFDLGFBQWEsR0FBRyxjQUFjO1lBQ3JDLE1BQU0sQ0FBQyxhQUFhLEdBQUcsWUFBWTtTQUNwQztRQUNELElBQUksRUFBRTtZQUNKLHFHQUFxRztZQUNyRyxVQUFVLEVBQUU7Z0JBQ1YsTUFBTSxDQUFDLFVBQVUsR0FBRyxlQUFlO2dCQUNuQyxNQUFNLENBQUMsVUFBVSxHQUFHLGlCQUFpQjtnQkFDckMsTUFBTSxDQUFDLFVBQVUsR0FBRyxxQkFBcUI7Z0JBQ3pDLE1BQU0sQ0FBQyxVQUFVLEdBQUcsc0JBQXNCO2dCQUMxQyxNQUFNLENBQUMsWUFBWSxHQUFHLGNBQWM7Z0JBQ3BDLE1BQU0sQ0FBQyxVQUFVLEdBQUcsd0JBQXdCO2dCQUM1QyxNQUFNLENBQUMsVUFBVSxHQUFHLFdBQVc7Z0JBQy9CLE1BQU0sQ0FBQyxVQUFVLEdBQUcsVUFBVTtnQkFDOUIsTUFBTSxDQUFDLFVBQVUsR0FBRyxt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