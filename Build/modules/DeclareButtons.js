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
                Prefix.massCommon + "AsItWereSoLetItBe",
            ], // the sequence of prayers of St Cyril Mass (starting from Reconciliation)
            StJohn: [], // the sequence of prayers of St John Mass (tarting from Reconciliation)
            CallOfHolySpirit: [
                Prefix.massCommon + "CallOfTheHolySpiritPart1",
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
                Prefix.psalmody + "TheotokiesConclusionXXX", //!Need to know when Watos and Adam Theotokies are prayed
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
        HolyWeek: {
            PassOver: [
                Prefix.HolyWeek + "HourIntroduction",
                Prefix.HolyWeek + "PsalmAndGospel",
                Prefix.HolyWeek + "Commentary",
                Prefix.HolyWeek + "PassoverEnd",
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
        }
        ;
        if (Season === Seasons.HolyWeek)
            Btn.MainMenu.children = [Btn.HW, Btn.BookOfHours];
        if (Kiahk.includes(Season))
            Btn.Psalmody.label = getLabel({
                AR: "الإبصلمودية الكيهكية",
                FR: "Psalmodie de Kiahk",
            });
        if (localStorage.editingMode === "true")
            Btn.MainMenu.children.push(Btn.Edit);
        [defaultLanguage, foreingLanguage].forEach(lang => getBibleVersion(lang, false));
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
    onClick: (returnChildren = false) => {
        if (!Btn.Mass.children)
            Btn.Mass.children = [
                Btn.IncenseMorning,
                Btn.MassUnBaptised,
                Btn.MassBaptised
            ];
        if (returnChildren)
            return Btn.Mass.children;
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
            function adaptPrayersSequence() {
                //If we are not during a fast period or we are during a fast period but today is either Saturday or Sunday, or a Lord Feast, we will remove Hallelujah Ge Evmevi and Tishoury, in order to keep Hallelujah Faybibi and Tayshouri
                if (!isFast
                    ||
                        [0, 6].includes(weekDay)
                    ||
                        lordFeasts.find(date => [copticDate, copticReadingsDate].includes(date))
                    ||
                        copticFeasts.Coptic29th)
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
                    //Else, we will remove 'Hellulja Fay Bibi'and keep only 'Hellulja Ge Evmev'i". We will also remove Tayshoury in order to keep only Tishoury 
                    return btnsPrayersSequence
                        .filter(title => ![Prefix.massCommon + "AlleluiaFayBiBi", Prefix.massCommon + "Tayshoury"].includes(splitTitle(title)[0]));
                }
            }
            ;
        })();
        scrollToTop();
        return Btn.MassUnBaptised.prayersSequence;
    },
    afterShowPrayers: async (btn = Btn.MassUnBaptised) => {
        let btnDocFragment = btn.docFragment;
        if (Btn.Prosternation.children?.includes(btn))
            return insertBookOfHoursButton();
        Btn.IncenseMorning.afterShowPrayers(btn); //By calling the afterShowPrayers() of btnIncenseMorning and passing btnMassUnbaptised as argument, the function will call hideGodHaveMercyOnUsIfBishop() and will return. This will create an expandable button for the "PrayThatGodHaveMercyOnUs" dicaon response
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
            insertAdjacentToHtmlElement({
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
                    (tableMatchingDates(Title(table), [copticDate, Season])));
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
                insertAdjacentToHtmlElement({
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
            let specialResponse;
            //St. Paul
            await insertMassReading(Prefix.stPaul, Intros.stPaulIntro, Intros.stPaulEnd);
            (function insertCatholiconResponse() {
                let cathResp = CatholiconResponsesArray.filter(tbl => tableMatchingDates(Title(tbl), [Season, copticDate]));
                if (cathResp.length < 1)
                    cathResp = CatholiconResponsesArray.filter(tbl => Title(tbl) === Prefix.catholiconResponse + css.Title);
                if (cathResp.length < 1)
                    return;
                const response = new Button({
                    btnID: 'btnCatholiconResponse',
                    label: getLabel({
                        AR: cathResp[0][0][prayersLanguages.indexOf('AR') + 1], FR: cathResp[0][0][prayersLanguages.indexOf('FR') + 1]
                    }),
                    cssClass: css.inlineButton,
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
                        PraxisResponsesArray.filter((table) => !Title(table)?.includes('&D=$saintsFeasts.') && tableMatchingDates(Title(table), [copticDate, copticReadingsDate])); //We look for a response for the copticDate or copticReadingsDate, and we exclude responses for saints feasts
                if (specialResponse.length < 1)
                    specialResponse = PraxisResponsesArray.filter((table) => tableMatchingDates(Title(table), [Season])); //We look for a response for the Season
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
                        insertAdjacentToHtmlElement({
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
                    noSeasonResponse = insertAdjacentToHtmlElement({
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
                    specialResponse = PraxisResponsesArray.filter((table) => Title(table)?.includes('&D=$saintsFeasts.') && tableMatchingDates(Title(table), [copticDate]));
                    if (specialResponse.length < 1)
                        return;
                    insertAdjacentToHtmlElement({
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
                insertAdjacentToHtmlElement({
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
                    insertAdjacentToHtmlElement({
                        tables: [
                            [
                                [
                                    readings[0][0].dataset.root + css.Intro,
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
                    insertAdjacentToHtmlElement({
                        tables: [
                            [
                                [
                                    readings[0][0].dataset.root + css.End,
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
                const AgiosTable = findAgios();
                if (!AgiosTable)
                    return console.log("Didn't find the special Agios table in PrayersArray");
                (function adaptToAscension() {
                    if (Season !== Seasons.Ascension)
                        return; //i.e. if we are between the Pentecoste & the Assumption feasts: day 40 to day 49
                    const agios = findTable(Prefix.commonPrayer + "AgiosPart1", CommonArray);
                    if (!agios)
                        return; //We will retrieve the 3rd paragraph of the ordinary Agios Osios Hymn ('For He Raised and Ascended to the Heaveans'...etc.)
                    [3, 4, 5].forEach(index => AgiosTable[AgiosTable.length - index] = agios[agios.length - 1]); //Replacing the 3 Agios paragraphs with the Ascension paragraph
                })();
                insertAdjacentToHtmlElement({
                    tables: [AgiosTable],
                    languages: getLanguages(Title(AgiosTable)),
                    position: {
                        beforeOrAfter: "beforebegin",
                        el: readingsAnchor?.nextElementSibling,
                    },
                    container: btnDocFragment,
                });
                function findAgios() {
                    let [dates, today] = ['copticFeasts', undefined];
                    if ([copticFeasts.EntryToEgypt, copticFeasts.CanaWedding].includes(copticDate))
                        today = copticDate;
                    else if ([copticFeasts.PalmSunday, copticFeasts.HolyFriday].includes(copticReadingsDate))
                        today = copticReadingsDate;
                    else if (Season === Seasons.CrossFeast)
                        today = copticFeasts.HolyFriday; //!We retrieve the HolyFriday Agios table
                    else if ([Seasons.PentecostalDays, Seasons.Ascension].includes(Season)) {
                        today = Seasons.PentecostalDays; //!The date in the title is assigned to the PenetcostalDays Season only for both seasons
                        dates = 'Seasons';
                    }
                    else if ([Seasons.Nativity, Seasons.Baptism].includes(Season)) {
                        today = Season;
                        dates = 'Seasons';
                    }
                    return Agios(today, dates);
                    function Agios(today, dates) {
                        const table = (title) => findTable(title, CommonArray) || undefined;
                        const agios = Prefix.commonPrayer + "Agios";
                        if (!today)
                            return table(agios);
                        today = Object.entries(eval(dates)).find(entry => entry[1] === today)[0]; //Returning the name of the key pointing to the date/season
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
            const hoursBtns = Btn.BookOfHours.onClick(true, relevantHours());
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
                        let btnsDiv = document.getElementById('BOHBtnsDiv');
                        if (!btnsDiv)
                            return console.log('No btns div was found');
                        btnsDiv.classList.toggle(css.hidden);
                        if (btnsDiv.classList.contains(css.hidden)) {
                            btnsDiv.style.top = "";
                            btnsDiv.style.position = "";
                            createFakeAnchor(btnsDiv.id);
                        }
                    },
                });
                masterBtnDiv.prepend(createHtmlBtn({
                    btn: masterBtn,
                    btnsContainer: masterBtnDiv,
                    btnClass: css.inlineButton,
                    clear: true,
                    onClick: masterBtn.onClick,
                }));
                btnDocFragment.prepend(masterBtnDiv);
                createHtmlButtonForEachHour(masterBtnDiv);
            })();
            function createHtmlButtonForEachHour(masterBtnDiv) {
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
                    collapseAllTitles(Array.from(expandable.children));
                }));
            }
            ;
            function relevantHours() {
                //args.mass is a boolean that tells whether the button prayersArray should include all the hours of the Book Of Hours, or only those pertaining to the mass according to the season and the day on which the mass is celebrated
                const hours = [1, 2, 3]; //Those are the 3rd, 6th and 9th hours
                if ([
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
            }
            ;
        }
        ;
    },
});
Btn.ReadingsStPaul = new Button({
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
Btn.ReadingsCatholicon = new Button({
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
Btn.ReadingsPraxis = new Button({
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
Btn.ReadingsSynaxarium = new Button({
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
Btn.PropheciesMorning = new Button({
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
Btn.DayReadings = new Button({
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
            if (mass)
                return; //None of the following applies if the function is called within the Unbaptized mass context
            if (![Seasons.GreatLent, Seasons.JonahFast].includes(Season))
                return;
            if (copticReadingsDate === copticFeasts.Resurrection)
                return;
            (function ifWeAreNotSaturday() {
                if (weekDay === 6)
                    return;
                //We remove the Vespers because there are no Vespers during the Great Lent except for Saturday. Also there are no vespers during the Jonah Fast which lasts for 4 days from Monday to Thursday
                Btn.DayReadings.children = Btn.DayReadings.children.filter(b => b !== Btn.GospelVespers);
            })();
            (function ifWeAreSunday() {
                //If we are a Sunday and the GospelNight button is not included, we will add it.
                if (weekDay > 0)
                    return;
                if (Btn.DayReadings.children?.includes(Btn.GospelNight))
                    return;
                Btn.DayReadings.children.push(Btn.GospelNight);
            })();
            (function ifWeAreNotSunday() {
                if ([0, 6].includes(weekDay))
                    return;
                //Also if we  are not a Sunday, we will remove the Night Gospel, if included
                Btn.DayReadings.children = Btn.DayReadings.children.filter((btn) => btn !== Btn.gospelNight);
                if (Btn.DayReadings.children?.includes(Btn.PropheciesMorning))
                    return;
                //If we are not a Sunday (i.e., we are during any week day other than Sunday and Saturday), we will  add the Prophecies button to the list of buttons
                Btn.DayReadings.children.unshift(Btn.PropheciesMorning);
            })();
        })();
        (function ifMass() {
            if (!mass)
                return;
            Btn.DayReadings.children = Btn.DayReadings.children.filter(btn => ![Btn.GospelVespers, Btn.GospelMorning, Btn.GospelNight, Btn.PropheciesMorning].includes(btn)); //We remove the Morning and Vespers Gospel buttons
            if ([Seasons.PentecostalDays, Seasons.Ascension].includes(Season))
                Btn.DayReadings.children = Btn.DayReadings.children.filter(child => child !== Btn.ReadingsSynaxarium); //We remove the Synaxarium button
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
    onClick: (mass = false, hours) => {
        if (!mass && Btn.BookOfHours.children.length > 1)
            return Btn.BookOfHours.children;
        const BOH = Object.entries(bookOfHours());
        if (mass && hours)
            return getHoursBtns(hours.map(hour => BOH[hour])); //If this function is called in the "Unbaptized Mass" context, it will return Button elements for each hour passed to it
        (function addAChildButtonForEachHour() {
            Btn.BookOfHours.children = getHoursBtns(BOH);
            (function addOtherPrayersBtns() {
                const otherPrayers = [Prefix.bookOfHours + 'BeforeCommunion', Prefix.bookOfHours + 'AfterCommunion'];
                const otherPrayersBtn = new Button({
                    btnID: 'otherPrayersBtn',
                    label: getLabel({
                        AR: 'صلوات أخرى',
                        FR: 'Diverses prières',
                        EN: 'Various Prayers'
                    }),
                    children: otherPrayers.map(title => otherPrayerBtn(title))
                });
                Btn.BookOfHours.children.push(otherPrayersBtn);
                function otherPrayerBtn(title) {
                    let table = findTable(title, BookOfHoursArray) || undefined;
                    if (!table)
                        return undefined;
                    return new Button({
                        btnID: "btnOtherPrayer" + otherPrayers.indexOf(title) + 1,
                        label: getLabel({
                            AR: table[0][Btn.BookOfHours.languages.indexOf('AR') + 1],
                            FR: table[0][Btn.BookOfHours.languages.indexOf('FR') + 1]
                        }),
                        onClick: () => {
                            showPrayers({
                                table: table,
                                languages: Btn.BookOfHours.languages,
                                container: containerDiv,
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
        function getHoursBtns(hours) {
            if (!hours)
                return;
            return hours.map(([name, hour], index) => {
                const hourBtn = new Button({
                    btnID: "btn" + name,
                    label: hour[1],
                    docFragment: new DocumentFragment(),
                    parentBtn: Btn.BookOfHours,
                    prayersSequence: [`${Prefix.bookOfHours}${name}Title`],
                    afterShowPrayers: () => hourBtnAfterShowPrayer(hourBtn.docFragment, name, hour, hours.length - index, mass),
                });
                if (mass)
                    hourBtn.cssClass = css.inlineButton;
                return hourBtn;
            });
            function hourBtnAfterShowPrayer(docFragment, hourName, hour, index, mass) {
                (function insertHourIntroAndPsalms() {
                    const anchor = selectElementsByDataSet(docFragment, Prefix.anchor + 'Psalms')[0];
                    if (!anchor)
                        return;
                    (function insertHourIntro() {
                        if (mass)
                            return;
                        const intro = [
                            Prefix.commonPrayer +
                                "ThanksGivingPart1",
                            Prefix.commonPrayer +
                                "ThanksGivingPart2",
                            Prefix.commonPrayer +
                                "ThanksGivingPart3",
                            Prefix.commonPrayer +
                                "ThanksGivingPart4",
                            Prefix.bookOfHours + "Psalm50",
                        ];
                        if (hour === BOH[0][1]) //If this is the 1st Hour (Dawn), it has a specific sequence of prayers after the "Thanks Giving" and "Psalm50"
                            intro.push(...["LetsKneel", "StPaul", "Intro"].map(title => Prefix.bookOfHours + hourName + title));
                        else if (hour === BOH[7][1]) //If this is the 1st Midnight Service
                            intro.push(Prefix.psalmody + 'WakeUpSonsOfLight'); //We add the 'Wake Up Sons of Light' for the 1st Service of Midnight)
                        const tables = intro.map(title => findTable(title, getArrayFromPrefix(title)) || undefined);
                        insertTables(tables, anchor); //!We might need to change the calss for the Thanks giving ?
                    })();
                    (function insertPsalms() {
                        if (localStorage.displayMode === displayModes[1])
                            return; //We don't show the psalms in "Display Mode"
                        const tables = hour[0].map(psalm => findTable(`${Prefix.bookOfHours}Psalm${psalm}`, BookOfHoursArray) || undefined);
                        insertTables(tables, anchor);
                    })();
                })();
                (function insertHourFinalPrayers() {
                    const [OurFather, Creed] = ["OurFatherInHeaven", "Creed"].map(title => Prefix.commonPrayer + title);
                    const [AngelsPrayers, HailMaria, WeExaltYou, Agios, KyrielisonNoMass, HolyLordOfSabaot, FinalPrayer, PriestsAbsolution] = ["AngelsPrayer", "WeSaluteYouMary", "WeExaltYouStMary", "Agios", "Kyrielison41", "HolyLordOfSabaot", "AllHoursFinalPrayer", "PriestsAbsolution"].map(title => Prefix.bookOfHours + title);
                    const KyrielisonMass = Prefix.massCommon + "Kyrielison41";
                    const anchor = selectElementsByDataSet(docFragment, Prefix.anchor + 'End')[0];
                    (function ifNotMass() {
                        if (mass)
                            return;
                        const tables = getSequence().map(title => findTable(title, getArrayFromPrefix(title)) || undefined);
                        insertTables(tables, anchor);
                        function getSequence() {
                            let hourEndSequence = [
                                AngelsPrayers,
                                Agios,
                                OurFather,
                                HailMaria,
                                WeExaltYou,
                                Creed,
                                KyrielisonNoMass,
                                HolyLordOfSabaot,
                                OurFather,
                                Prefix.bookOfHours + hourName + "End",
                                FinalPrayer,
                                OurFather,
                            ];
                            if (hour === BOH[5][1])
                                hourEndSequence.shift(); //If it is the 12th (Night) Hour, we remove the Angels Prayer from endOfHourPrayersSequence
                            else if (hour === BOH[9][1]) {
                                hourEndSequence.splice(0, 1, KyrielisonNoMass, HolyLordOfSabaot, OurFather, Prefix.bookOfHours + hourName + "2ndGospel"); //replacing the "Angels Praising" by this sequence
                                //Inserting the Priests Absolution at the end
                                hourEndSequence.push(Prefix.bookOfHours + hourName + PriestsAbsolution);
                            }
                            ;
                            if (![
                                BOH[0][1],
                                BOH[5][1],
                                BOH[9][1],
                            ].includes(hour))
                                hourEndSequence = hourEndSequence.slice(6, hourEndSequence.length); //For any other hour, we remove all the titles before KyrielisonIntro
                            return hourEndSequence;
                        }
                    })();
                    (function ifMass() {
                        if (!mass)
                            return;
                        const tables = getSequence().map(title => findTable(title, getArrayFromPrefix(title)) || undefined);
                        insertTables(tables, anchor);
                        function getSequence() {
                            //!index is the differece between hours.length and the index of the hour 
                            if (index < 2) {
                                //This is the last hour btn (hours.length - (hours.length-1)=1)
                                return [
                                    WeExaltYou,
                                    Creed,
                                    KyrielisonMass,
                                    HolyLordOfSabaot,
                                    OurFather,
                                ];
                            }
                            else if (index < 3) {
                                //this is the before last hour btn (hours.length - (hours.length-2)=2)
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
                    })();
                })();
                const children = Array.from(docFragment.children);
                (function adapt118thPsalm() {
                    if (hour !== BOH[6][1])
                        return; //If we are in the 'Setar Hour', we need to remove from Psalm 118 all the paragraphs except paragraphs 20, 21, and 22.
                    const psalm118 = children.filter((div) => div?.dataset?.group?.startsWith(Prefix.bookOfHours + "Psalm118"));
                    psalm118.splice(1, psalm118.length - 7)
                        .forEach(div => div.remove());
                })();
                (function changeKiryelisonClass() {
                    const Kyrielison = children.filter(div => div.dataset.group === Prefix.bookOfHours + "Kyrielison41");
                    changeClasses();
                    function changeClasses() {
                        //We will change the classes of the "Kyrielison1 table"
                        if (mass)
                            Kyrielison
                                .forEach((div, index) => index === 1 ? changeClass(div, css.Priest) : changeClass(div, css.Assembly));
                        else
                            Kyrielison
                                .forEach((div, index) => index === 1 ? changeClass(div, css.NoActor) : changeClass(div, css.NoActor));
                        function changeClass(div, css) {
                            if (!div)
                                return;
                            div.classList.forEach(c => {
                                if (c !== 'Row')
                                    div.classList.remove(c);
                            });
                            div.classList.add(css);
                        }
                    }
                    ;
                })();
                (function removeCopticVersion() {
                    children.forEach((htmlRow) => {
                        htmlRow.querySelector("p.COP, p.CA")?.remove();
                        [css.Priest, css.Diacon, css.Assembly]
                            .forEach((className) => {
                            htmlRow.classList.replace(className, actors[actors.length - 1].EN); //Replacing it with 'No Actor)
                            const note = String.fromCharCode(eighthNoteCode); //removing the musicla notes
                            htmlRow.innerHTML = htmlRow.innerHTML.replaceAll(note, '');
                        });
                    });
                })();
                function insertTables(tables, anchor) {
                    insertAdjacentToHtmlElement({
                        tables: tables,
                        languages: getLanguages(Prefix.bookOfHours),
                        position: {
                            beforeOrAfter: 'beforebegin',
                            el: anchor
                        },
                        container: docFragment
                    });
                }
            }
            ;
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
    onClick: () => {
        if (Btn.Psalmody.children)
            return Btn.Psalmody.children;
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
        Btn.Psalmody.children = [
            createBtn(weekDay, getLabel(todayPraise)),
            ...[0, 1, 2, 3, 4, 5, 6]
                .filter(d => d !== weekDay)
                .map(d => createBtn(d, getLabel({ AR: otherDay.AR + days[d].AR, FR: otherDay.FR + days[d].FR, EN: otherDay.EN + days[d].EN })))
        ];
        checkIfInSpecialSeason(todayDate); //We reset the Season to today
        return Btn.Psalmody.children;
        function createBtn(day, label) {
            let date = todayDate.getTime();
            day > weekDay ? date += (day - weekDay) * calendarDay : date -= (weekDay - day) * calendarDay;
            checkIfInSpecialSeason(new Date(date)); //We change the Season according to the date
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
            if (Kiahk.includes(season))
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
Btn.IncenseMorning = new Button({
    btnID: "btnIncenseDawn",
    label: getLabel({
        AR: "بُخُورِ بَاكِرِ",
        FR: "Encens du Matin",
        EN: "Morning Incense Office"
    }),
    languages: [...prayersLanguages],
    docFragment: new DocumentFragment(),
    onClick: () => {
        Btn.IncenseMorning.children = []; //!We need to reinitiate the children each time because in some cases (like in case btnLakkan is clicked) there are buttons added to btnIncenseMorning children
        Btn.IncenseMorning.prayersSequence = [...Sequences().Incense].filter((title) => !title?.startsWith(Prefix.incenseVespers)); //We will remove all the Incense Vespers titles from the prayersSequence Array
        if (weekDay === 6)
            //If we are a Saturday, we pray only the 'Departed Litany', we will hence remove the 'Sick Litany' and the 'Travellers Litany'
            Btn.IncenseMorning.prayersSequence.splice(Btn.IncenseMorning.prayersSequence.indexOf(Prefix.incenseDawn + "SickLitany"), 3, //We remove the SickPrayer, the TravelersParayer and the Oblations Prayer
            Prefix.incenseVespers + "DepartedLitany");
        else if (weekDay === 0 || lordFeasts.includes(copticDate))
            //If we are a Sunday or the day is a Lord's Feast, or the oblation is present, we remove the 'Travellers Litany' and keep the 'Sick Litany' and the 'Oblation Litany'
            Btn.IncenseMorning.prayersSequence = Btn.IncenseMorning.prayersSequence.filter((title) => !title.startsWith(Prefix.incenseDawn + "TravelersLitany"));
        scrollToTop();
        return Btn.IncenseMorning.prayersSequence;
    },
    afterShowPrayers: async (btn = Btn.IncenseMorning, gospelPrefix = Prefix.gospelMorning) => {
        const docFragment = btn.docFragment;
        if (!docFragment)
            return;
        (function adaptThanksGiving() {
            const parags = Array.from(selectElementsByDataSet(docFragment, Prefix.commonPrayer + "ThanksGiving", undefined, 'root')[7]?.children); //Those are the paragraphs that conatin the sentence that will be changed according to each liturgy
            if (!parags || parags.length < 1)
                return;
            let thanks;
            if (btn === Btn.IncenseMorning)
                thanks = variable.thanksMorning;
            else if (btn === Btn.IncenseVespers)
                thanks = variable.thanksVespers;
            else if (btn === Btn.MassUnBaptised)
                thanks = variable.thanksMass;
            else if (btn.btnID === Btn.Lakkan.btnID)
                thanks = variable.thanksLakan;
            if (!thanks)
                return;
            getLanguages(Prefix.commonPrayer)
                .forEach(lang => {
                const parag = parags?.find(p => p.classList.contains(lang));
                if (!parag)
                    return;
                parag.innerHTML = parag.innerHTML.replace(variable.thanksVespers[lang], thanks[lang]);
            });
        })();
        (function hideGodHaveMercyOnUsIfBishop() {
            const dataRoot = Prefix.commonPrayer +
                "PrayThatGodHaveMercyOnUs";
            const godHaveMercyHtml = selectElementsByDataSet(docFragment, dataRoot); //We select all the paragraphs not only the paragraph for the Bishop
            if (godHaveMercyHtml.length < 1)
                return; //This may occur if 'Diacon' prayers are hidden
            const length = godHaveMercyHtml?.length;
            godHaveMercyHtml
                .filter((htmlRow) => godHaveMercyHtml?.indexOf(htmlRow) > 0 &&
                godHaveMercyHtml?.indexOf(htmlRow) < length - 2)
                .forEach((htmlRow) => htmlRow.remove());
            if (btn === Btn.MassUnBaptised)
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
                cssClass: css.inlineButton,
                docFragment: new DocumentFragment(),
                onClick: () => {
                    showPrayers({
                        table: godHaveMercy,
                        languages: Btn.MassUnBaptised.languages,
                        position: haveMercy.docFragment,
                        container: haveMercy.docFragment,
                        clearContainerDiv: false,
                        clearRightSideBar: false,
                    });
                }
            });
            insertExpandableBtn([haveMercy], godHaveMercyHtml[0].nextElementSibling, 'beforebegin');
        })();
        if (![Btn.IncenseMorning, Btn.IncenseVespers].includes(btn))
            return; //The following code/functions apply only to btnIncenseMorning & btnIncenseVespers
        await insertCymbalVersesAndDoxologies(btn);
        await insertGospelReadingAndResponses({
            prefix: gospelPrefix,
            languages: getLanguages(gospelPrefix),
            container: docFragment,
            isMass: true,
            clearContainer: false,
        });
        adaptConcludingHymn(docFragment);
        if (btn !== Btn.IncenseMorning)
            return; //The functions from this point on concern the Morning Incense service only
        await insertPropheciesAndEklonomin(); //!We need to await for it because otherwise, the div elements will not be appended to the docFragment when setCss() is called.
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
            insertExpandableBtn([doxologies], docFragment.children[0], 'beforebegin');
        })();
        (function insertLakkanBtn() {
            if (copticDate === '1005')
                insertLakkan(copticFeasts.Baptism);
            else if (copticDate === copticFeasts.Apostles)
                insertLakkan(copticFeasts.Apostles);
            else if (copticReadingsDate === copticFeasts.HolyThursday)
                insertLakkan(copticReadingsDate);
            function insertLakkan(date) {
                const lakkanBtn = new Button({
                    btnID: Btn.Lakkan.btnID, //!We must give the button same ID as Btn.Lakkan because we use this id later on in adapting the 'Thanks Giving' prayer to the Lakkan liturgy
                    label: Btn.Lakkan.label,
                    docFragment: new DocumentFragment(),
                    onClick: () => Btn.Lakkan.onClick(date, lakkanBtn),
                    afterShowPrayers: async () => await Btn.Lakkan.afterShowPrayers(date, lakkanBtn)
                });
                Btn.IncenseMorning.children = [lakkanBtn];
                const children = docFragment.children;
                if (copticDate === '1005')
                    insertExpandableBtn([lakkanBtn], children[0], 'beforebegin', 'Lakan');
                else
                    insertExpandableBtn([lakkanBtn], children[children.length - 1], 'afterend', 'Lakan');
            }
            ;
        })();
        /**
       * Inserts the Incense Office Doxologies And Cymbal Verses according to the Coptic feast or season
       * @param {Button} btn - The button calling the function when clicked
       */
        async function insertCymbalVersesAndDoxologies(btn) {
            if (!btn.docFragment)
                return;
            const dayFeasts = (() => {
                const dates = [copticDate];
                if (!RegExp('\\d{4}').test(copticReadingsDate))
                    dates.push(copticReadingsDate); //We do this in order to avoid including a reading date of 4 digits, since the reading repeats more than once per year on other days than the feast day itself (eg. the 0511 copticReadingDate repeats several times not only on the Apostles feast). This will leave us only with the copticReadingsDate including letters: like GL, PNTL, JONAS, etc
                //We will first look if today is one of the copticFeasts list. If this is the case, we will retrieve the doxologies and cymbal verses specific to this feast (we assume that if one of these feasts, whether a Lord Feasts or not, falls within a given Season, the cymbal verses and doxologies of the feast will prevail over those of the Season). If today is not one of the copticFeasts, we will  retrieve the cymbal verses and doxologies of the Season.
                const matching = Object.values(copticFeasts).find((date) => dates.includes(date)) || Season; //We check if today is one of the feasts in copticFeasts (we check not only the Coptic date, but we check also the copticReadingsDate because some feasts are referrenced by the copticReadings date : eg. Pntl39). If today is not one of the copticFeasts, we will retain the Season
                if (matching !== Seasons.NoSeason)
                    return [matching]; //If matching is not Seasons.NoSeason, we push the match feast or the season if any
            })();
            let anchor;
            (async function InsertCymbalVerses() {
                anchor = selectElementsByDataSet(docFragment, Prefix.anchor + "CymbalVerses")[0];
                if (!anchor)
                    return console.log("We didn't find the cymbal verses' anchor");
                let cymbals;
                if ([Seasons.JonahFast, Seasons.GreatLent].includes(Season) && ![0, 6].includes(weekDay))
                    //If we are during the Jonah Fast or during the Great Lent but not on a Saturday or a Sunday, the Cymbal Verses are not chanted, they are replaced by the Long Kyrielison and the Cymbal Verses End
                    cymbals = [findTable(Prefix.cymbalVerses + "End", CymbalVersesArray) || undefined];
                else
                    cymbals = getCymbalVerses();
                if (cymbals.length < 1)
                    return console.log("no cymbals were found by the provided sequence: ");
                insertAdjacentToHtmlElement({
                    tables: cymbals,
                    languages: btn.languages,
                    position: {
                        beforeOrAfter: "beforebegin",
                        el: anchor.nextElementSibling,
                    },
                    container: btn.docFragment,
                });
                insertSaintsExpandable(Prefix.anchor + 'SaintsCymbals', Prefix.cymbalVerses, 'St(Mary|Maykel|Steven|John|Marc)', getLabel({
                    AR: 'أرباع القديسين',
                    FR: 'Autres saints',
                    EN: 'Other Saints',
                }));
                function getCymbalVerses() {
                    let sequence = [
                        Prefix.cymbalVerses + isWatosOrAdam(),
                        Prefix.cymbalVerses,
                    ];
                    if (dayFeasts)
                        dayFeasts.forEach((feast) => [
                            ...lordFeasts,
                            copticFeasts.Coptic29th,
                            Seasons.Nativity,
                            Seasons.Baptism,
                            Seasons.PentecostalDays,
                            Seasons.Ascension
                        ].includes(feast) //During Seasons.Nativity (i.e., between Nativity and Circumcision) and Seasons.Baptism(from Baptism to Cana Wedding), the Cymbals verses follow the pattern of any Lord Feast: it starts with "Amoyni Marin..." or "Ten O'osht", then the cymbal verses of the feast, and finally, the "Eb'oro enti ti hirini". 
                            ? insertFeastInSequence([Prefix.cymbalVerses + "LordFeastsEnd"], feast, 0, 0)
                            : insertFeastInSequence(sequence, feast, 1, 0)); //We always start with 'Amoyni Marin...' or with 'Tin O'osht...', so we will insert the feast element before the 2nd element, and will not delete anything
                    return Array.from(processSequence(sequence, Prefix.cymbalVerses));
                }
            })();
            (async function InsertCommonDoxologies() {
                const doxologiesAnchor = selectElementsByDataSet(btn.docFragment, Prefix.anchor + "Doxologies")[0];
                if (!doxologiesAnchor)
                    return console.log("Didn't find the anchor for doxologies");
                if (Object.values(apostlesFeasts)
                    .filter(date => ![apostlesFeasts.StMarc, apostlesFeasts.StPaul, apostlesFeasts.StJohnApostle].includes(date))
                    .includes(copticDate))
                    saintsFeasts.AnyPostle = copticDate; //We exclude the Apostles for whom we already have doxologies, and set the AnyApostle date to the copticDate
                let sequence = [
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
                    let index = 2;
                    dayFeasts.forEach((feast) => {
                        if ([
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
                        ].includes(feast))
                            index = 0; //If one of the dates in feast[] corresponds to any of the 'Lord's Feasts', it means we are in a Lord Feast. the doxologies of the feast will be placed at the begining of the doxologies. We follow the same rule for the doxologies of the PentecostalDays and the month of Kiahk
                        else if (copticFeasts.Coptic29th) {
                            index = 1;
                            sequence = sequence.splice(1, 1); //StMaykel's doxology will be replace by the StMalykel doxology for PentecostalDays
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
                let doxologies = Array.from(processSequence(sequence, Prefix.doxologies));
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
                insertAdjacentToHtmlElement({
                    tables: doxologies,
                    languages: btn.languages,
                    position: {
                        beforeOrAfter: "beforebegin",
                        el: doxologiesAnchor.nextElementSibling,
                    },
                    container: btn.docFragment,
                });
                insertSaintsExpandable(Prefix.doxologies + "EndOfDoxologiesWatos", Prefix.doxologies, `(StMaykel|AllCelestialBeings|Apostles|StMarc|StGeorge|StMina)${Prefix.class}`, getLabel({
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
            function insertSaintsExpandable(dataRoot, prefix, regExp, label) {
                const anchor = selectElementsByDataSet(docFragment, dataRoot, undefined, 'root')[0];
                if (!anchor)
                    return;
                const options = getArrayFromPrefix(prefix).filter(tbl => Title(tbl).startsWith(prefix + 'St') && !RegExp(regExp).test(Title(tbl)));
                if (options.length < 1)
                    return;
                const langs = getLanguages(prefix);
                const saints = options.map(table => {
                    const newBtn = new Button({
                        btnID: 'btn' + prefix + (options.indexOf(table) + 1).toString(),
                        label: getLabel({
                            AR: table[0][langs.indexOf('AR') + 1],
                            FR: table[0][langs.indexOf('FR') + 1],
                        }),
                        cssClass: css.inlineButton,
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
                    const id = 'Master' + prefix;
                    const masterDiv = document.createElement('div');
                    masterDiv.id = id;
                    masterDiv.classList.add(css.inlineButtonsContainer);
                    anchor.insertAdjacentElement('beforebegin', masterDiv);
                    const masterBtn = new Button({
                        btnID: 'btnMaster' + prefix,
                        label: label,
                        onClick: () => {
                            let btnsDiv = containerDiv.querySelector('#' + id + 'Btns');
                            if (btnsDiv)
                                return btnsDiv.classList.toggle(css.hidden);
                            insertExpandableBtn(saints, masterDiv, 'afterend', prefix)
                                .id = id + 'Btns';
                        }
                    });
                    createHtmlBtn({
                        btn: masterBtn,
                        btnsContainer: masterDiv,
                        btnClass: css.inlineButton,
                        clear: false,
                        onClick: masterBtn.onClick //!We need to set the onClick property otherwise it will be set to showChildBtnsOrPrayers(masterCymbal) which, at its turn, will call the setCSS() for the containerDiv (the container by default since masterCymbal does not have a docFragment) for the second time
                    });
                })();
            }
            ;
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
                let tables = new Set(), tablesArray = getArrayFromPrefix(prefix);
                sequence.map((tblTitle) => {
                    if (!tblTitle.startsWith(prefix)) //It means that the title is a Coptic date or a Season
                        tablesArray
                            //!CAUTION: we must use 'filter' not 'find' because for certain feasts there are more than one doxology
                            .filter((tbl) => tableMatchingDates(Title(tbl), [tblTitle]))
                            .forEach((tbl) => tables.add(tbl));
                    else
                        tables.add(findTable(tblTitle, tablesArray));
                });
                return tables;
            }
        }
        async function insertPropheciesAndEklonomin() {
            if (![Seasons.GreatLent, Seasons.JonahFast].includes(Season))
                return;
            if ([0, 6].includes(weekDay))
                return; //We are neither a Saturday nor a Sunday, we will hence display the Prophecies dawn buton
            const anchor = selectElementsByDataSet(docFragment, Prefix.anchor + "Prophecies", undefined, 'root')[0];
            const table = findTable(Prefix.prophecies + "&D=" + copticReadingsDate, ReadingsArrays.PropheciesDawnArrayFR);
            if (!table)
                return console.log("Didn't find Prophecies with the current date");
            const Prophecies = await retrieveReadingTableFromBible(table, getLanguages(Prefix.prophecies)) || [];
            (function insertProphecies() {
                if (!Prophecies)
                    return;
                const langs = getLanguages(Prefix.prophecies);
                //! This must come before inserting Eklonomin Taghonata
                const title = {
                    AR: 'نبوات باكر',
                    FR: 'Prophecies',
                    EN: 'Prophecies',
                };
                Prophecies[0] = [`${Title(Prophecies)}${css.Title}`, title[defaultLanguage], title[foreingLanguage] || ''];
                showPrayers({ table: Prophecies, languages: langs, container: docFragment, clearContainerDiv: false, clearRightSideBar: false, position: { beforeOrAfter: 'beforebegin', el: anchor } });
            })();
            (function insertEklonominTaghonata() {
                //!We must insert the Prophecies before Eklonomin Taghonta
                const godHaveMercy = findTable(Prefix.incenseDawn + "GodHaveMercyOnUs&D=$Seasons.GreatLent", IncenseArray);
                if (!godHaveMercy)
                    return console.log("Didn't find God Have Mercy for Great Lent");
                showPrayers({ table: godHaveMercy, languages: getLanguages(Prefix.incenseDawn), position: { beforeOrAfter: 'beforebegin', el: anchor }, clearContainerDiv: false, clearRightSideBar: false, container: docFragment });
                (function removeRefrains() {
                    //We will remove all the refrains except the 1st one
                    const refrains = selectElementsByDataSet(docFragment, Prefix.incenseDawn + "GodHaveMercyOnUsRefrain&D=$Seasons.GreatLent")
                        .filter((htmlRow) => htmlRow?.classList.contains(css.Title));
                    refrains.slice(1).forEach(htmlRow => htmlRow.remove());
                })();
            })();
        }
        ;
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
    onClick: () => {
        Btn.IncenseVespers.prayersSequence = [...Sequences().Incense].filter((title) => title !== Prefix.bookOfHours + "AngelsPrayer" &&
            !title.startsWith(Prefix.incenseDawn));
        scrollToTop();
        return Btn.IncenseVespers.prayersSequence;
    },
    afterShowPrayers: () => Btn.IncenseMorning.afterShowPrayers(Btn.IncenseVespers, Prefix.gospelVespers),
});
Btn.Lakkan = new Button({
    btnID: "btnLakkan",
    label: getLabel({
        AR: "صلاة اللقَّان",
        FR: "Cérémonie de la Bénédiction de l'eau",
        EN: 'Lakkan'
    }),
    onClick: (date, btn = Btn.Lakkan) => {
        if (!date)
            return;
        btn.prayersSequence = [Prefix.incenseDawn + "Anaphora&D=" + date];
    },
    afterShowPrayers: async (date, btn = Btn.Lakkan) => {
        if (!date)
            return;
        const Intros = ReadingsIntrosAndEnds();
        Btn.IncenseMorning.afterShowPrayers(btn); //We call it in order to hide the "Pray that God Have Mercy on Us" response for Pope and Bishop
        const lakan = {
            prophecies: [],
            stPaul: [],
            gospel: [],
            Agios: [],
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
            lakan.Agios = findAgios(true);
            lakan.cymbals = [...findTable(Prefix.cymbalVerses + "&D=$Seasons.Baptism") || undefined, ...findTable(Prefix.cymbalVerses + "PopeAndBishop") || undefined, ...findTable(Prefix.cymbalVerses + "LordFeastsEnd") || undefined];
        }
        else if (date === copticFeasts.Apostles) {
            lakan.prophecies = ['EXO:15:22-End/16:1-1', 'EXO:30:17-30', 'ISA:1:16-26', 'ISA:35:1-10', 'ISA:43:16-End/44:1-6', 'ZEC:8:7-19', 'ZEC:14:8-11'];
            lakan.stPaul = ['HEB:10:22-32'];
            lakan.Agios = findAgios();
            lakan.gospel = ['PSA:50:7-7/50:10-10', 'JHN:5:1-18'];
            lakan.cymbals = findTable(Prefix.cymbalVerses + "&D=" + date) || undefined;
            lakan.spasmosAdam = Prefix.massCommon + "SpasmosAdamLong&D=$copticFeasts.Apostles";
        }
        else if (date === copticFeasts.HolyThursday) {
            lakan.prophecies = [];
            lakan.stPaul = ['1TI:4:9-End/5:1-10'];
            lakan.Agios = findAgios();
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
                            `PropheciesHeader${css.Title}`,
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
                            ...findTable(Prefix.HolyWeek + "LakanProphecies&D=$copticFeasts.HolyThursday", ReadingsArrays.GospelNightArrayFR) || undefined,
                            ...findTable(Prefix.HolyWeek + "LakanSermony&D=$copticFeasts.HolyThursday", ReadingsArrays.GospelNightArrayFR) || undefined
                        ], languages);
                    else
                        reading = await retrieveReadingTableFromBible([[Prefix.readingRef + ref]], languages);
                    if (!reading)
                        return;
                    if (title === 'StPaul') {
                        insertReading(getReadingIntroOrEnd(title, Intros.stPaulIntro, css.Intro), anchor, prayersLanguages); //We insert the StPaul ReadingIntro in all cases
                    }
                    insertReading(reading, anchor, languages); //We insert the reading text itself
                    if (title === 'Prophecies' && date !== copticFeasts.HolyThursday) {
                        insertReading(getReadingIntroOrEnd(title, Intros.propheciesEnd, css.expand), anchor, prayersLanguages); //We do not insert the ReadingEnd for the holyThursday because it is already included in the table
                    }
                    else if (title === 'StPaul') {
                        insertReading(getReadingIntroOrEnd(title, Intros.stPaulEnd, css.End), anchor, prayersLanguages); //We insert the StPaul ReadingEnd in all cases
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
                    insertAdjacentToHtmlElement({
                        tables: [reading],
                        languages: langs,
                        position: { el: anchor, beforeOrAfter: 'beforebegin' },
                        container: btn.docFragment,
                    });
                }
                function getReadingIntroOrEnd(prefix, text, css) {
                    return [[
                            title + splitTitle(css)[1] + css,
                            ...prayersLanguages.map(lang => text[lang] || '')
                        ]];
                }
                function replaceClass(reading, newClass) {
                    reading[0][0] = `${splitTitle(Title(reading))[0]}${Prefix.class}${newClass}`;
                }
            }
        }
        ;
        await insertGospelReadingAndResponses({
            isMass: true,
            prefix: Prefix.gospelMass,
            container: btn.docFragment,
            clearContainer: false,
            gospel: lakan.gospel.map(ref => getGospel(Prefix.gospelMass, ref))
        });
        function getGospel(prefix, ref) {
            ref.startsWith('PSA') ? prefix += 'Psalm' : prefix += 'Gospel';
            return [[prefix + '&D=' + copticDate + css.Title], [Prefix.readingRef + ref]];
        }
        function findAgios(baptism = false) {
            const Agios = Prefix.commonPrayer + "Agios";
            if (baptism)
                return findTable(`${Agios}&D=$Seasons.Baptism`, CommonArray) || undefined;
            else
                return [...findTable(Agios, CommonArray) || undefined, ...findTable(Prefix.commonPrayer + "GloryToFatherSonSpirit") || undefined];
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
                Agios: [`${agios}&D=$Seasons.PentecostalDays`], //!needs to be checked, do we pray the entire sequence or such the agios part? if so we will need to adapt it.
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
                    Prefix.commonPrayer + "ChurchLitany", //!needs check + convert font
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
        function customizeLable(i) {
            const label = { ...labelBase };
            label[defaultLanguage] = label[defaultLanguage].replace('XXX', labelNumber[i][defaultLanguage]);
            return getLabel(label);
        }
        async function btnOnClick(n, getTables = false) {
            let btn = Btn.Prosternation.children[n];
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
                        clone.splice(clone.indexOf(Prefix.anchor + 'Agios'), 0, Prefix.hymns + `PentecosteHymn&D=$copticFeasts.PentecosteVespers${css.Title}`); //!missing hymn
                        let doxlogies = [
                            Prefix.incenseVespers + "LordKeepUsThisNight",
                            Prefix.bookOfHours + "Agios", //!This is the Agios of the Book of Hours not the Agios hymn of the Mass before the Gospel (which starts with Prefix.commonPrayer) 
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
            let btn = Btn.Prosternation.children[n];
            Btn.IncenseMorning.afterShowPrayers(btn); //We call this function in order to insert an Expandable for the "God Have Mercy On Us" Diacon response
            if (n === 2)
                adaptConcludingHymn(btn.docFragment);
            else if (n === 0)
                Btn.MassUnBaptised.afterShowPrayers(btn); //We insert the Book of Hours prayers (as an expandable button)
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
                    insertAdjacentToHtmlElement({
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
Btn.IncenseOffice = new Button({
    btnID: "btnIncenseOffice",
    label: getLabel({
        AR: "رفع بخور باكر أو عشية",
        FR: "Encens Matin et Vêpres",
        EN: 'Morning & Vespers Incense'
    }),
    onClick: (returnChildren = false) => {
        //setting the children of the btnIncenseOffice. This must be done by the onClick() in order to reset them each time the button is clicked
        Btn.IncenseOffice.children = [Btn.IncenseMorning, Btn.IncenseVespers];
        //show or hide the PropheciesDawn button if we are in the Great Lent or JonahFast:
        if (copticReadingsDate === copticFeasts.Pentecoste)
            Btn.IncenseOffice.children = [Btn.IncenseMorning, Btn.Prosternation];
        //We will remove the Vespers Button during if we are during the Great Lent or the Jonah Fast, and we are not a Saturday
        if ([Seasons.GreatLent, Seasons.JonahFast].includes(Season) &&
            weekDay !== 6)
            Btn.IncenseOffice.children = [Btn.IncenseMorning];
        if (returnChildren)
            return Btn.IncenseOffice.children;
    },
});
Btn.MassStBasil = new Button({
    btnID: "btnMassStBasil",
    label: getLabel({ AR: "باسيلي", FR: "Saint Basil", EN: "St Basil" }),
    docFragment: new DocumentFragment(),
    languages: [...prayersLanguages],
    onClick: () => {
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
    afterShowPrayers: (btn = Btn.MassStBasil, prefix = Prefix.massStBasil) => {
        let btnDocFragment = btn.docFragment;
        (function insertSecondReconciliationBtn() {
            if (![Btn.MassStBasil, Btn.MassStCyril].includes(btn))
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
                cssClass: css.inlineButton,
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
                    .forEach((row) => row.classList.toggle(css.hidden));
            }); //We hide or unhide the main reconcilaition prayer when the second conciliation is displayed or hidden
        })();
        (function addRedirectionButtons() {
            //We create a list of the masses to which we will insert redirection button
            let redirectToList = [
                Btn.MassStBasil,
                Btn.MassStGregory,
                Btn.MassStCyril,
                Btn.MassStJohn,
            ].filter(b => ![btn, Btn.MassStJohn].includes(b)); //We remove the btn of the mass from the redirection list and the mass of st John
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
                    return console.log('We didn\'t find the anchor');
                let redirectTo = [];
                btns.map((btn) => {
                    //for each button in the btns array, we will create a fake Button and will set its onClick property to a function that retrieves the text of the concerned mass
                    const newBtn = new Button({
                        btnID: `GoTo_${btn.btnID.split("btn")[1]}_From_${position.el.dataset.root}`,
                        label: btn.label,
                        cssClass: css.inlineButton,
                        onClick: async () => {
                            await displayChildButtonsOrPrayers(btn); //We simulated as if btn itself has been clicked, which will show all its prayers, children, etc.
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
            function insertSpasmos(spasmosTitle, anchor, hideAnchor = false) {
                if (!anchor)
                    return console.log('anhcor is not valid');
                let spasmos = MassCommonArray.find((tbl) => Title(tbl)?.startsWith(spasmosTitle) &&
                    tableMatchingDates(Title(tbl), [Season]));
                if (!spasmos)
                    return console.log("didn't find spasmos with title = ", spasmosTitle);
                const langs = getLanguages(Title(spasmos));
                const btnSpasmos = new Button({
                    btnID: spasmosTitle.split("&D=")[0],
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
                            container: btnSpasmos.docFragment,
                            clearContainerDiv: false,
                            clearRightSideBar: false,
                        });
                    }
                });
                const btnsDiv = insertExpandableBtn([btnSpasmos], anchor, 'beforebegin');
                if (hideAnchor)
                    btnsDiv.children[0].addEventListener("click", () => selectElementsByDataSet(containerDiv, anchor.dataset.root).forEach((row) => row.classList.toggle(css.hidden)));
            }
        })();
        (function insertLitaniesIntroductionFromOtherMasses() {
            if (btn !== Btn.MassStBasil)
                return; //This button appears only in St Basil Mass
            const intro = "LitaniesIntro";
            const anchor = selectElementsByDataSet(btnDocFragment, Prefix.massCommon + intro)[0];
            if (!anchor)
                return console.log("Did not find the Anchor");
            const stGregLitanies = new Button({
                btnID: Btn.MassStGregory.btnID + "LitaniesIntro",
                label: getLabel({
                    AR: "طلبات القداس الغريوري",
                    FR: "Litanies de la messe de St. Gregory",
                }),
                cssClass: css.inlineButton,
                languages: btn.languages,
                docFragment: new DocumentFragment(),
                prayersSequence: [Prefix.massStGregory + intro],
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
                prayersSequence: [Prefix.massStCyril + intro],
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
            insertAdjacentToHtmlElement({
                tables: [tbl],
                languages: prayersLanguages,
                position: { el: anchor, beforeOrAfter: 'beforebegin' },
                container: btnDocFragment,
            });
        })();
        (function showFractionPrayersMasterButton() {
            //We will insert a button displaying a pannel of choices for the different Fraction prayers according to the day/season, etc.s
            const anchor = selectElementsByDataSet(btnDocFragment, Prefix.anchor + "Fraction")[0];
            if (!anchor)
                console.log('Did not find the fractions anchor');
            showMultipleChoicePrayersButton({
                filteredPrayers: filter(),
                languages: prayersLanguages,
                btnLabels: getLabel({ AR: "صلوات القسمة", FR: "Oraisons de la Fraction" }),
                masterBtnID: "btnFractionPrayers",
                anchor: anchor,
            });
            function filter() {
                let filtered = [];
                const standard = FractionsArray.filter(table => RegExp(/^(?!.*&D=(?![^&]*\.anyDay)).*$/).test(Title(table))); //Those are the franctions that are inlcuded for any day.
                filtered.push(...FractionsArray.filter(table => !standard.includes(table) && tableMatchingDates(Title(table), [copticDate, Season]))); //Adding the date or Season specific fractions
                filtered.push(...standard); //We then add the "standard" group of fractions
                return getUniqueValuesFromArray(filtered);
            }
            ;
        })();
        (function insertCommunionChants() {
            //Inserting the Communion Chants after the Psalm 150
            let psalm150 = selectElementsByDataSet(btnDocFragment, Prefix.massCommon + "CommunionPsalm150", null, 'group');
            const filtered = CommunionArray.filter(table => tableMatchingDates(Title(table), [copticDate, Season, copticFeasts.AnyDay]));
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
Btn.MassStCyril = new Button({
    btnID: "btnMassStCyril",
    label: getLabel({ AR: "كيرلسي", FR: "Saint Cyril", EN: "St Cyril" }),
    docFragment: new DocumentFragment(),
    languages: [...prayersLanguages],
    onClick: () => {
        //Setting the standard mass prayers sequence
        const Mass = Sequences().Mass;
        Btn.MassStCyril.prayersSequence = [
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
        return Btn.MassStCyril.prayersSequence;
    },
    afterShowPrayers: async () => Btn.MassStBasil.afterShowPrayers(Btn.MassStCyril, Prefix.massStCyril),
});
Btn.MassStGregory = new Button({
    btnID: "btnMassStGregory",
    label: getLabel({ AR: "غريغوري", FR: "Saint Gregory" }),
    docFragment: new DocumentFragment(),
    languages: [...prayersLanguages],
    onClick: () => {
        const Mass = Sequences().Mass;
        //Setting the standard mass prayers sequence
        Btn.MassStGregory.prayersSequence = [
            ...Mass.StGregory,
            ...Mass.CallOfHolySpirit,
            ...Mass.Litanies,
            ...Mass.Communion,
        ];
        //removing irrelevant prayers from the array
        Btn.MassStGregory.prayersSequence.splice(Btn.MassStGregory.prayersSequence.indexOf(Prefix.massCommon + "CallOfTheHolySpiritPart1"), 9);
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
        alert("The prayers of this mass have not yet been added. We hope they will be ready soon");
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
    onClick: async (gospelPrefix = Prefix.gospelMass) => {
        let prayersArray = PrayersArraysKeys.find((entry) => entry[0] === gospelPrefix);
        if (!prayersArray)
            return console.log("Didn\'t find the prayersArray");
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
        let Evening = 'E', Morning = 'M';
        let btnPassOver = new Button({
            btnID: 'btnPassover',
            label: getLabel({ AR: 'البصخة المقدسة', FR: 'Pessah' }),
            onClick: () => btnPassOver.children = [btnPassOverOnClick(Morning), btnPassOverOnClick(Evening)], //We remove undefined elements
        }); //btnPassOver shows Day and Evening buttons
        Btn.HW.children = [btnPassOver];
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
                        Object.values(titles)
                            .forEach((title) => {
                            title[defaultLanguage] += label.DL || '';
                            title[foreingLanguage] += label.FL || '';
                        });
                    })();
                    await insertHourReadings();
                    insertThursdayLakanAndMassBtns();
                    await insertHolyFridayReadingsAndHymns();
                    async function insertHourReadings() {
                        const readingsLangs = ['COP', 'FR', 'AR'];
                        const holyweek = '&D=$Seasons.HolyWeek';
                        const readings = {
                            coptGospel: { table: undefined, anchor: undefined, title: undefined },
                            nonCopticGospel: { table: undefined, anchor: undefined, title: titles.Gospel },
                            coptPsalm: { table: undefined, anchor: undefined, title: undefined },
                            nonCopticPsalm: { table: undefined, anchor: undefined, title: titles.Psalm },
                            Commentary: { table: undefined, anchor: undefined, title: titles.Commentary },
                            Prophecies: { table: undefined, anchor: undefined, title: titles.Prophecies },
                            Sermony: { table: undefined, anchor: undefined, title: titles.Sermony },
                            KhinEfran: { table: undefined, anchor: undefined, title: undefined },
                            Litany: { table: undefined, anchor: undefined, title: undefined },
                        };
                        (function fetchKhinEfranAndLitany() {
                            const title = Prefix.HolyWeek + "XXX" + service + holyweek;
                            const khin = 'KhinEfran', litany = 'FinalLitany';
                            readings.KhinEfran.table = findTable(title.replace('XXX', khin), HolyWeekArray) || undefined;
                            if (!readings.KhinEfran.table)
                                console.log(`Didn't find ${khin}`);
                            readings.Litany.table = findTable(title.replace('XXX', litany), HolyWeekArray) || undefined;
                            if (!readings.Litany.table)
                                console.log(`Didn't find ${litany}`);
                            readings.KhinEfran.anchor = fetchAnchors(khin);
                            readings.Litany.anchor = fetchAnchors(litany);
                        })();
                        (function findReadingsTablesAndAnchors() {
                            setTableAndAnchor(readings.coptGospel, 'Gospel', 'CopticGospel');
                            setTableAndAnchor(readings.nonCopticGospel, 'Gospel', 'nonCopticGospel');
                            setTableAndAnchor(readings.coptPsalm, 'Psalm', 'CopticPsalm');
                            setTableAndAnchor(readings.nonCopticPsalm, 'Psalm', 'nonCopticGospel');
                            setTableAndAnchor(readings.Commentary, 'Commentary', 'Commentary');
                            setTableAndAnchor(readings.Prophecies, 'Prophecies', 'Prophecies');
                            setTableAndAnchor(readings.Sermony, 'Sermony', 'Prophecies');
                            readings.nonCopticPsalm.anchor = readings.nonCopticPsalm.anchor.previousElementSibling; //We need to do this because the nonCopticPsalm is inseret before the previous sibling of nonCopticGospel.placeHolder
                            function setTableAndAnchor(reading, name, anchor) {
                                reading.table = fetchTable(name);
                                reading.anchor = fetchAnchors(anchor);
                            }
                            (function getVersionsOfGospelAndPsalm() {
                                //For the gospel and the psalm, we need to get 2 versions of each: the first version is only coptic, and the 2nd version includes all the other languages except the Coptic version
                                const copticIndex = readingsLangs.indexOf('COP') + 1;
                                [readings.coptGospel, readings.nonCopticGospel, readings.coptPsalm, readings.nonCopticPsalm]
                                    .forEach((version) => {
                                    if (!version.table)
                                        return;
                                    if (version === readings.nonCopticGospel)
                                        version.table = version.table
                                            .filter((row, index) => index < 1 || row[0].startsWith(Prefix.readingRef));
                                    else
                                        version.table =
                                            version.table.map((row) => {
                                                if ([readings.coptGospel, readings.coptPsalm].includes(version) && !row[0].startsWith(Prefix.readingRef))
                                                    return [row[0], row[copticIndex]];
                                                else if (version === readings.nonCopticPsalm)
                                                    return row.filter((el, index) => index !== copticIndex);
                                            });
                                });
                            })();
                            function fetchTable(name) {
                                return findTable(Prefix.HolyWeek + hour + service + name, dayPrayers, { startsWith: true }) || undefined;
                            }
                        })();
                        function fetchAnchors(placeHolder) {
                            return selectElementsByDataSet(btnHour.docFragment, Prefix.anchor + placeHolder + holyweek, undefined, 'root')[0];
                        }
                        await insertTablesBeforeAnchors();
                        async function insertTablesBeforeAnchors() {
                            let languages;
                            const sequence = [
                                readings.coptPsalm,
                                readings.coptGospel,
                                readings.nonCopticPsalm,
                                readings.nonCopticGospel,
                                readings.Commentary,
                                readings.Prophecies,
                                readings.Sermony, //!This must come directly after readings.Prophecies
                                readings.KhinEfran,
                                readings.Litany
                            ]
                                .filter(reading => reading.table && reading.anchor); //We remove all the elements that do not have a reading.table or a reading.anchor 
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
                                reading.table = reading.table.filter(row => row); //We remove any undefined elements in the table;
                                reading.table = await retrieveReadingTableFromBible(reading.table, languages);
                                reading.table = reading.table?.filter(row => row.filter((el, index) => index > 0 && el?.length > 0).length > 0); //We remove the rows where all the values other than the row title are empty strings (This might be the case for some rows in the non Coptic gospel table)
                                reading.table[0] = insertTableTitleRow(); //We replace the first row of the table with a customized title row
                                insertAdjacentToHtmlElement({
                                    tables: [reading.table],
                                    languages: languages,
                                    container: btnHour.docFragment,
                                    position: {
                                        el: reading.anchor, beforeOrAfter: 'beforebegin'
                                    }
                                });
                                function insertTableTitleRow() {
                                    if (!reading.title)
                                        return reading.table[0]; //If the title property of reading is not set, we will return the first row of the table. Otherwise we will create a title row from the reading.title.
                                    const row = [Title(reading.table) + css.Title];
                                    languages
                                        .map(lang => row.push(reading.title[lang] || ''));
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
                    function insertThursdayLakanAndMassBtns() {
                        //If we are on the Holy Thursday morning service
                        if (weekDay !== 4)
                            return;
                        if (service !== Morning)
                            return; //We are during the Morning Passover service
                        if (hour !== '11H')
                            return; //It is the 9th Hour button
                        const anchor = btn.docFragment.children[0];
                        if (!anchor)
                            return;
                        const lakkanBtn = new Button({
                            btnID: Btn.Lakkan.btnID,
                            label: getLabel({ AR: 'لقان خميس العهد', FR: 'Lavage des pieds' }),
                            docFragment: new DocumentFragment(),
                            onClick: () => Btn.Lakkan.onClick(copticFeasts.HolyThursday, lakkanBtn),
                            afterShowPrayers: async () => await Btn.Lakkan.afterShowPrayers(copticFeasts.HolyThursday, lakkanBtn),
                        });
                        const btnMass = new Button({
                            btnID: 'btnMass',
                            label: getLabel({ AR: 'قداس خميس العهد', FR: 'Messe du Jeudi Saint' }),
                            docFragment: new DocumentFragment(),
                            onClick: () => {
                                const Mass = Sequences().Mass;
                                let sequence = [...Mass.StBasil, ...Mass.Communion];
                                Btn.Mass.prayersSequence = sequence;
                            },
                            afterShowPrayers: async () => { },
                        });
                        btn.children = [lakkanBtn, btnMass];
                        insertExpandableBtn([lakkanBtn, btnMass], anchor, 'afterend', btn.btnID.replace('btn', ''));
                    }
                    ;
                    async function insertHolyFridayReadingsAndHymns() {
                        if (weekDay !== 5)
                            return;
                        if (service !== Morning)
                            return;
                        const anchor = selectElementsByDataSet(btn.docFragment, Prefix.anchor + "HolyFriday", undefined, "root")[0];
                        await SixthHour();
                        await NinethHour();
                        async function SixthHour() {
                            if (hour !== '6H')
                                return;
                            await insertStPaul("GAL:6:14-18", "Tayshoury"); //Inserting the St. Paul Reading
                            insertTable(getLitanies("H6Litanies"), prayersLanguages, anchor); //Inserting the 6th hour litanies
                            const dimasAnchor = selectElementsByDataSet(btn.docFragment, Prefix.anchor + "DimasConfession", undefined, "root")[0];
                            const Omono = findTable(`${Prefix.HolyWeek}${"OMonoGuenis"}`, PrayersArrayFR); //!The titles of those tables start with Prefix.HolyWeek, but they are included in the PrayersArrayFR not in the GospelNightArray. This is because the languages of their text is not limited to [Coptic, French, Arabic] like the other tables in GospelNightArray, but include the Copt in arabic charcters [Coptic, French, Coptic Arabic, Arabic] 
                            const confession = findTable(Prefix.HolyWeek + "6HMDimasConfession&D=" + copticFeasts.HolyFriday, ReadingsArrays.GospelNightArrayFR);
                            insertTable(Omono, prayersLanguages, anchor); //Inserting "Ô Monon Guenis"
                            insertTable(confession, prayersLanguages, dimasAnchor); //Inserting "Dimas Confession"
                        }
                        ;
                        async function NinethHour() {
                            if (hour !== '9H')
                                return;
                            await insertStPaul('PHP:2:5-11', "Tishoury");
                            insertTable(getLitanies("H9Litanies"), prayersLanguages, anchor); //Inserting the 9th hour litanies
                        }
                        async function insertStPaul(ref, tishori) {
                            (function insertResponse() {
                                const response = findTable(`${Prefix.HolyWeek}${"FayEtaf"}`, PrayersArrayFR); //!Although the table title starts with Prefix.HolyWeek, it is included in the PrayersArrayFR not in the GospelNightArray. This is because the languages of their text is not limited to [Coptic, French, Arabic] like the other tables in GospelNightArray, but include the Copt in arabic charcters [Coptic, French, Coptic Arabic, Arabic];
                                const placeHolder = [Prefix.placeHolder, Prefix.massCommon + tishori];
                                response.splice(1, 0, placeHolder); //Inserting a placeHolder element to retrieve the relevant "Tay Shory" or "Tishory" part
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
                                ]; //!needs to be checked and tested
                                const reading = await retrieveReadingTableFromBible(stPaul, langs);
                                insertTable(reading, langs, anchor);
                                function getIntro(intro, css) {
                                    return [
                                        Prefix.same + css,
                                        ...langs.map(lang => intro[lang])
                                    ];
                                }
                            }
                        }
                        function insertTable(table, langs, anchor) {
                            if (!table || !langs || !anchor)
                                return;
                            insertAdjacentToHtmlElement({
                                tables: [table],
                                languages: langs,
                                position: { beforeOrAfter: 'beforebegin', el: anchor },
                                container: btn.docFragment
                            });
                        }
                        ;
                        function getLitanies(hour) {
                            return findTable(Prefix.bookOfHours + hour, PrayersArrayFR);
                        }
                    }
                    ;
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
    onClick: async (refs) => {
        if (refs)
            return await chapterBtnOnClick({
                chapterNumber: refs.chapterNumber,
                bookID: refs.bookID
            });
        const newTestament = new Button({
            btnID: 'newTestament',
            label: getLabel({
                AR: 'العهد الجديد',
                FR: 'Nouveau Testament',
                EN: 'New Testament'
            }),
            onClick: async () => newTestament.children = await getBooksButtons(newTestament), //!We need the children to be added when the button is clicked not when it is created because the Bibles are not defined at this stage
            afterShowPrayers: addFilteringInput,
        });
        const oldTestament = new Button({
            btnID: 'oldTestament',
            label: getLabel({
                AR: 'العهد القديم',
                FR: 'Ancien Testament',
                EN: 'Old Testament'
            }),
            onClick: async () => oldTestament.children = await getBooksButtons(oldTestament), //!We need the children to be added when the button is clicked not when it is created because the Bibles are not defined at this stage
            afterShowPrayers: addFilteringInput,
        });
        function addFilteringInput() {
            [sideBarBtnsContainer, containerDiv.querySelector('#btnsMainPageDiv')]
                .forEach(container => insertInput(container));
            function insertInput(container) {
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
                    const btns = Array.from(container.children).filter(child => child.id.startsWith('btnBook'));
                    if (btns.length < 1)
                        return;
                    btns.forEach(btn => btn.classList.remove(css.hidden)); //We unhide all the buttons
                    const notMatching = btns.filter(btn => !RegExp(input.value, 'i').test(btn.innerText)); //We filter all the elements not matching the input
                    notMatching.forEach(btn => btn.classList.add(css.hidden)); //We hide the unmatching buttons
                }
            }
        }
        ;
        Btn.Bible.children = [oldTestament, newTestament];
        async function getBooksButtons(btn) {
            const booksList = await getBibleBooksList(defaultLanguage);
            if (!booksList)
                return;
            let booksNames = booksList.map(book => book.human_long);
            if (btn === oldTestament)
                booksNames = booksNames.slice(0, 48);
            else if (btn === newTestament)
                booksNames = booksNames.slice(48, booksNames.length);
            const labels = booksNames.map(bookID => {
                return {
                    DL: bookID,
                    FL: undefined
                };
            });
            const booksButtons = labels.map(label => {
                const index = labels.indexOf(label);
                const btn = new Button({
                    btnID: 'btnBook' + index.toString(),
                    label: label,
                    onClick: () => btn.children = getChaptersButtons(booksList.find(book => book.human_long === label.DL).id), //!We need the children to be added when the button is clicked not when it is created because the Bibles are not defined at this stage
                    afterShowPrayers: () => document.getElementById('inputFilter').remove(),
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
                const chaptersButtons = book[0].chaptersList
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
            if (!refs || !refs.bookID || !refs.chapterNumber)
                return;
            let languages = [defaultLanguage];
            if (foreingLanguage)
                languages?.push(foreingLanguage);
            await showChapterText();
            async function showChapterText() {
                let table = [
                    [
                        'Bible_' + refs.bookID + refs.chapterNumber + css.Title,
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
                let matched = matchPargraphsSplitting(retrievedText, languages, 0, actors[actors.length - 1].EN);
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
                const btnsDiv = document.createElement('div');
                containerDiv.append(btnsDiv);
                const right = '⇒', left = '⇐';
                let goTo = true;
                if (defaultLanguage === 'AR')
                    goTo = !goTo;
                const next = new Button({
                    btnID: 'btnNext',
                    label: getLabel({
                        AR: right,
                        FR: right,
                        EN: right,
                    }),
                    onClick: () => nextOnClick(goTo)
                });
                const prev = new Button({
                    btnID: 'btnPrev',
                    label: getLabel({
                        AR: left,
                        FR: left,
                        EN: left,
                    }),
                    onClick: () => nextOnClick(!goTo)
                });
                [prev, next].forEach(btn => {
                    createHtmlBtn({
                        btn: btn,
                        btnsContainer: btnsDiv,
                        btnClass: css.inlineButton
                    });
                });
                btnsDiv.classList.add(css.inlineButtonsContainer);
                // floatOnTopOrBottom(btnsDiv, false, "0px");
                btnsDiv.style.gridTemplateColumns = setGridColumnsOrRowsNumber(btnsDiv);
                async function nextOnClick(next, id = refs.bookID, chapterNumber = refs.chapterNumber) {
                    const books = await getBibleBooksList(defaultLanguage);
                    const [book, chapter] = getBookAndChapter();
                    await chapterBtnOnClick({
                        bookID: book?.id,
                        chapterNumber: chapter
                    });
                    updateBookmark({ bookID: book.id, chapterNumber: chapter });
                    function getBookAndChapter() {
                        let book = books?.find(b => b.id === id);
                        const bookIndex = books.indexOf(book);
                        let chaptersList = book.chaptersList.filter(chapter => Number(chapter)); //We remove any non numerical chapters from the list
                        const chapterIndex = chaptersList.indexOf(chapterNumber);
                        if (next && chapterIndex === chaptersList.length - 1) {
                            //There is no next chapter in the same book. We will go to the next book
                            book = books[bookIndex + 1] || books[0];
                            chaptersList = book.chaptersList.filter(chapter => Number(chapter));
                            chapterNumber = chaptersList[0];
                        }
                        else if (next) {
                            //There is a next chapter in the same book
                            chapterNumber = chaptersList[chapterIndex + 1];
                        }
                        else if (!next && chapterIndex === 0) {
                            //No previous chapter in the same book
                            book = books[bookIndex - 1] || books[books.length - 1];
                            chaptersList = book.chaptersList.filter(chapter => Number(chapter));
                            chapterNumber = chaptersList[chaptersList.length - 1];
                        }
                        else if (!next) {
                            //There is a previous chapter
                            chapterNumber = chaptersList[chapterIndex - 1];
                        }
                        return [book, chapterNumber];
                    }
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
        (function insertLastReadingBtn() {
            if (!localStorage.bookMarks)
                return;
            const lastReading = JSON.parse(localStorage.bookMarks)[0];
            if (!lastReading)
                return;
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
                const bookMarkDiv = document.createElement("div"); //this is just a container
                bookMarkDiv.role = "button";
                bookMarkDiv.id = 'bookmarkLast';
                bookMarkDiv.classList.add(css.sideTitle);
                sideBarTitlesContainer.appendChild(bookMarkDiv);
                let bookmark = document.createElement("a");
                bookMarkDiv.appendChild(bookmark);
                bookmark.innerText = btnLabel[defaultLanguage];
                bookMarkDiv.addEventListener("click", () => displayChildButtonsOrPrayers(btn));
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
                });
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
    div.classList.add(css.inlineButtonsContainer);
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
            cssClass: css.inlineButton,
            onClick: () => {
                let groupOfNumber = 4;
                //We show the inlineBtnsDiv (bringing it in front of the containerDiv by giving it a zIndex = 3)
                showExpandableBtnsPannel(args.masterBtnID, true);
                //When the prayersMasterBtn is clicked, it will create a new div element to which it will append html buttons element for each inlineBtn in its inlineBtns[] property
                let newDiv = document.createElement("div");
                newDiv.id = args.masterBtnID + "Container";
                //Customizing the style of newDiv
                newDiv.classList.add(css.inlineButtonsContainer);
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
            args.masterBtnDiv.classList.add(css.inlineButtonsContainer);
            args.masterBtnDiv.classList.add(css.masterButtonDiv);
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
                cssClass: css.inlineButton,
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
            let masterBtn = Array.from(containerDiv.querySelectorAll("." + css.inlineButton)).find((child) => child.id === args.masterBtnID);
            //When the prayer button is clicked, we empty and hide the inlineBtnsDiv
            hideExpandableButtonsPannel();
            let shown = Array.from(containerDiv.children)
                .find((div) => div.dataset.optionalPrayer &&
                div.dataset.optionalPrayer === masterBtn.dataset.shown);
            if (shown)
                shown.remove();
            //We call showPrayers and pass inlineBtn to it in order to display the fraction prayer
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
        insertAdjacentToHtmlElement({
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
            cssClass: css.inlineButton,
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
    const readingArray = getArrayFromPrefix(readingPrefix);
    const reading = readingArray?.find((table) => tableMatchingDates(Title(table), [readingDate]));
    if (!reading)
        return console.log("Did not find a reading for the current copticReadingsDate");
    const languages = getLanguages(readingPrefix);
    const tables = [];
    const titleRows = reading
        .filter(row => RegExp(`${Prefix.class}(Title|SubTitle)`).test(row[0])) //We search for all the rows having the 'Title' or 'SubTitle' class
        .map(row => reading.indexOf(row)); //We return the index of each row
    if (titleRows.length < 2)
        tables.push(reading); //If there is no more than 1 row having 'Title' or 'SubTitle as class, we will push the reading table as is to tables
    else
        titleRows
            .forEach(index => tables.push(reading.slice(index, titleRows[titleRows.indexOf(index) + 1] || titleRows[titleRows.length - 1]))); //If there are more than 1 row having 'Title' or 'SubTitle' as class, we will split the reading tables into separate tables each starting with one of the 'Title/SubTitle' rows, and ending before the next 'Title/SubTitle' row 
    let retrievedText = await Promise.all(tables.map(async (table) => await retrieveReadingTableFromBible(table, languages)));
    return insertAdjacentToHtmlElement({
        tables: retrievedText,
        languages: languages,
        position: position,
        container: containerDiv,
    });
}
/**
 * Retrives the text of the verses referenced in the table passed to it.
 * @param {string[][]} reading - A table containing the references of the verses/chapters to be retrieved
 * @param {string[]} langs - The languages in which the text will be retrieved.
 * @returns {Promise<string[][]>} - a table where the first row is the title of the reading (Book name and Chapter Number, and verses number), and the following rows include the text of the verses referenced in the "reading" table passed as argument.
 */
async function retrieveReadingTableFromBible(reading, langs) {
    if (!reading || !langs)
        return;
    langs = langs?.filter(lang => lang);
    const rowsWithReferences = reading
        .filter(row => row?.find(el => el?.startsWith(Prefix.readingRef))); //We check of any of the table's rows has an element starting with Prefix.readingRef: this means this element is a reference for a text that we need to retrieve from the relevant bible
    if (rowsWithReferences.length < 1)
        return reading; //It means that there are no rows with references
    let ready = new Set(); //this set will contain arrays of ["bookID:chapterNumber:lang", chapter] for each chapter treated. If the chapter is found, we will not retreive it again.
    const retrieved = [];
    for (const row of reading) {
        //! We can't use forEach because forEach doesn't await for async functions to resolve
        if (rowsWithReferences.includes(row))
            retrieved.push(...await retrieveTextFromReference(row));
        else
            retrieved.push(row); //If the row is the first row or any other row that does not include references, we will push it as is
    }
    return retrieved;
    async function retrieveTextFromReference(row) {
        if (!row || row.length !== 1)
            return [];
        const retrievedText = [];
        let [ref, actor] = splitTitle(row[0]); //splitted[0] is the reference, and splitted[1] is the class (if any)
        ref = cleanReference(ref); //We clean the reference from the prefix and the spaces
        for (const lang of langs) {
            //!We can't use forEach because forEach doesn't await for async functions to resolve. It throughs a promise
            retrievedText.push(await retrieveVerses(lang, ref)); //The row contains only the reference with no other text
        }
        const titleRow = await getTitleRow(ref) || [];
        if (ref.startsWith(Prefix.readingRef + 'PSA:'))
            return [titleRow, retrievedText]; //We do not split the psalm paragraphs into different rows
        else
            return [titleRow, ...matchPargraphsSplitting(retrievedText, langs, row.length - langs.length, actor || '') || []];
    }
    async function retrieveVerses(lang, ref) {
        if (!lang)
            return;
        if (![defaultLanguage, foreingLanguage].includes(lang))
            return '';
        let parts, verses;
        const bookID = ref.split(':')[0];
        const refs = ref.split('/'); //Some references include more than one reference, speparated by '/', eg.: "GEN:12:3-End/13:1-End/14:1-8". When splitted, we will get [GEN:12:3-End, 13:1-End, 14:1-8]
        let text = await Promise.all(refs.map(async (ref) => {
            parts = ref.split(':'); //We should get an array of 2 or 3 elements [bookID, chapterNumber, verses], eg: ['GEN', '13', '3-7']; 
            if (parts.length < 2)
                return ''; //This means that the reference is badly formatted
            if (parts.length === 2 && refs.indexOf(ref) > 0)
                parts.unshift(bookID); //We add the bookID 
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
     * @param {boolean} next - If true, it means that if the row does not contain any references, we will keep jumbing to the next row of the reading table until we find a row containg references. Its default value is false.
     */
    async function getTitleRow(ref) {
        if (!ref)
            return [];
        const titleRow = [Prefix.same + css.Title, ...langs.map(lang => '')]; //We create a row for the title and add empty elements to it for each language
        const bookID = ref.split(':')[0];
        await Promise.all(langs.map(async (lang, index) => {
            //!We can't use forEach because forEach doesn't await for async functions to resolve. Instead it throughs an error
            if (![defaultLanguage, foreingLanguage].includes(lang))
                return;
            await getTitle(lang, index);
        }));
        return titleRow;
        async function getTitle(lang, index) {
            const bible = await getBibleVersion(lang, false);
            const book = bible?.find(book => book[0].id === bookID);
            if (!book)
                return;
            const to = { AR: ' إلى ', FR: ' à ', EN: ' to ' }[lang];
            const and = { AR: 'و ', FR: ' et ', EN: ' and ' }[lang];
            titleRow[index + 1] = `${book[0].human} (${processRefs(to, and, book)})`;
            function processRefs(to, and, book) {
                //'ISA:13:11-End/14:1-End/16:8-End'
                let parts = ref.split(`${bookID}:`)[1].split('/'); //=> [13:11-End, 14:1-End, 16:8-End];
                let fromTo;
                if (bookID === 'PSA') {
                    fromTo = parts.map(part => {
                        const psalm = part.split(':')[0];
                        const verses = part.split('-');
                        if (verses[0] === verses[1])
                            return `${psalm}:${verses[0]}`;
                        return `${psalm}:${verses[0]}-${verses[1]}`;
                    }).join(and); //!Need to figuer it out
                }
                else if (parts.length < 2)
                    fromTo = parts[0]; //=>13:11-End
                else if (parts.length > 1) {
                    fromTo = `${parts[0].split('-')[0]} ${to}`; //=>13:11 to 
                    fromTo += `${parts[parts.length - 1].split(':')[0]}:`; //=> 13:11 to 16:
                    fromTo += parts[parts.length - 1].split('-')[1]; //=> 13:11 to 16:End
                }
                if (fromTo.includes('End')) {
                    const chapterNumber = parts[parts.length - 1].split(':')[0];
                    fromTo = fromTo.replace('End', book[1][Number(chapterNumber) - 1]
                        ?.filter(verse => Number(verse[0]))
                        .length.toString());
                }
                return fromTo; //=>//=>'13:1 à 16:30
            }
        }
    }
    /**
     * Removes spaces, '&C=[Class]', and Prefix.readingRef from the reference
     * @param {string} ref - a string containing the reference and usually starting with Prefix.readingRef
     * @returns {string} the reading reference after removing any extra text from the string
     */
    function cleanReference(ref) {
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
function matchPargraphsSplitting(retrieved, langs, add, actor = '') {
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
                .map(versesRange => {
                const match = splitTextIntoParagraphs(versesRange);
                text = text.replace(match, ''); //! In some cases when a reading reference covers more than one chapter, there are verses with duplicates numbers from the different chapters (eg.: 'HEB:13:1-End/14:1-4', we have duplicate verses 1, 2, 3 and 4, from chapter 13 and from chapter 14). this will lead to the match being retrieved twice for those verses. In order to resolve this problem, we remove the matched text from the original text
                return match || '';
            })
                .join('\n');
        function splitTextIntoParagraphs(versesRange) {
            //versesRange contains 2 elements. Each element is like "Sup_2_Sup". The 1st element is the number of the first verse in the paragraph. The 2nd element is the number of the last verse
            if (!versesRange[0] || !versesRange[1])
                return '';
            let toVerse = ''; //!We need a new variable otherwise we will modify versesRange[1] in its original array
            if (ranges.indexOf(versesRange) < ranges.length - 1)
                toVerse = "?(?=" + ranges[ranges.indexOf(versesRange) + 1][0] + ")"; //If we have not reached the last element of ranges, we will set versesRange[1] = element 0 of the next element of ranges in order to retrive the text until the end of the last verse number. This RegExp will stop before the first occurence of the first verse in the next range
            const match = text.match(RegExp(versesRange[0] + '\.*' + toVerse));
            if (!match)
                return '';
            return match[0] || '';
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
async function insertGospelReadingAndResponses(args) {
    if (!args.prefix)
        return console.log("the button passed as argument does not have prayersArray");
    if (!args.container)
        args.container = containerDiv;
    if (args.container === containerDiv && args.clearContainer)
        args.container.innerHTML = "";
    if (args.container.children.length === 0)
        args.container.appendChild(document.createElement("div"));
    if (!args.languages)
        args.languages = getLanguages(args.prefix);
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
            cssClass: css.inlineButton,
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
        if (copticReadingsDate === copticFeasts.PalmSunday && args.prefix === Prefix.gospelMorning)
            return; //We do not insert the 12 gospel responses for the Incense Morning liturgy on Palm Sunday because they are retrieved by reference in the gospel reading table
        insertResponse(3, getAnchor('Gospel')?.nextElementSibling, 'beforebegin'); //Inserting Gospel Response
        insertResponse(0, getAnchor('PsalmResponse'), 'beforebegin'); //Inserting Psalm Response if any
        function insertResponse(index, el, position) {
            let prayersSequence = setGospelPrayersSequence(args.prefix, args.isMass); //this gives us an array like ['PR_&D=####', 'RGID_Psalm&D=', 'RGID_Gospel&D=', 'GR_&D=####']
            //We will retrieve the tables containing the text of the gospel and the psalm from the GospeldawnArray directly (instead of call findAndProcessPrayers())
            let response = PsalmAndGospelArray.find((tbl) => splitTitle(Title(tbl))[0] === prayersSequence[index]); //!Caution: this must be an '===' search operator not startWith() because otherwise, 'NativitayParamoun' will be selected for the 'Nativity' Season, and 'Baptism Paramoun' might be selected for the 'Baptism' Season if their tables in PrayersArray are before those of the relevant table
            if (!response || response.length === 0)
                return;
            insertAdjacentToHtmlElement({
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
            const tblTitle = splitTitle(Title(table))[0];
            if (tblTitle.includes('?'))
                return;
            let type;
            tblTitle.includes('Gospel') ? type = 'Gospel' : type = 'Psalm';
            if (!args.isMass && type !== 'Gospel')
                return;
            let anchor;
            if (type === 'Gospel')
                anchor = getAnchor(type);
            else if (copticReadingsDate === copticFeasts.PalmSunday && RegExp('Psalm([2-9]|[1-9][0-9])&D=').test(tblTitle))
                anchor = getAnchor('Gospel'); //Starting from the 2nd Psalm, we will insert all the psalms and gospels before the gospel anchor
            else
                anchor = getAnchor('Psalm');
            if (!anchor)
                return;
            const tbls = await retrieveFromBible(table, tblTitle);
            (function palmSunday() {
                if (copticReadingsDate !== copticFeasts.PalmSunday)
                    return;
                if (args.prefix !== Prefix.gospelMorning)
                    return;
                tbls.unshift(buildTitleRow(type, tblTitle.split(type)[1].split('&D=')[0]));
                if (type !== 'Gospel')
                    return;
                tbls.push(findTable(tblTitle
                    .replace(args.prefix, Prefix.gospelResponse)
                    .replace('Gospel', '')) || undefined);
                function buildTitleRow(type, n) {
                    if (!Number(n))
                        return;
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
                    const tbl = [[
                            Prefix.gospelResponse + css.Title,
                        ]];
                    tbl[0].push(...getLanguages(Prefix.gospelResponse)
                        .map(lang => {
                        if (!labels[0][lang])
                            return '';
                        const lable = labels[0][lang]?.replace('XXX', num[Number(n) - 1][lang]);
                        if (type === 'Psalm')
                            return labels[1][lang] + lable;
                        return lable;
                    }));
                    return tbl;
                }
            })();
            insertAdjacentToHtmlElement({
                tables: tbls,
                //   languages: args.languages, we are omitting the languages on purpose
                position: {
                    beforeOrAfter: "beforebegin",
                    el: anchor,
                },
                container: args.container,
            });
        }));
        async function retrieveFromBible(tbl, tblTitle) {
            //! We didn't push the array to the table directly because otherwise it will add a new row to the original table each time we click on the Unbaptised Mass button or the Gospel Reading button
            const Intros = ReadingsIntrosAndEnds();
            //We will include the gospel end: 'Glory To God Forever' and the Psalm End 'Hallelujah'
            if (!args.isMass)
                return [await retrieveReadingTableFromBible(tbl, args.languages)];
            else if (tblTitle.includes('Gospel'))
                return [[...await retrieveReadingTableFromBible(tbl, args.languages), getReadingEnd(Intros.gospelEnd)]]; //We return a copy of the table not the original table in order to avoid modifying the original table.
            else if (tblTitle.includes('Psalm'))
                return [[...await retrieveReadingTableFromBible(tbl, args.languages), getReadingEnd(Intros.psalmEnd)]]; //We return a copy of the table not the original table in order to avoid modifying the original table.
            function getReadingEnd(end) {
                //We will return an array (i.e., a new row in the table) containing the text of the "Gospel End" (Glory to God Forever) in each language. This array needs to be constructed like this: ['Row title', 'End text in Arabic, 'End text in French or whatever other western language', 'End text in English']
                return [
                    //The first element of the array contains the title of the row
                    Prefix.same + css.End, //!Notice that we are giving it as class 'ReadingEnd'
                    //The following elements represent the text of the 'Gospel End' in each language, in the same order as the languages passed in args.languages.
                    ...args.languages
                        .map(lang => end[lang])
                ];
            }
            ;
        }
        ;
        function findGospelTables() {
            let prayersArray = PrayersArraysKeys.find(array => array[0] === args.prefix)[2]();
            if (!prayersArray)
                return [];
            return prayersArray
                .filter((table) => tableMatchingDates(Title(table), [copticReadingsDate]));
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
            let PsalmAndGospelResponses = PsalmAndGospelArray.filter((table) => tableMatchingDates(Title(table), [copticDate, Season]));
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
 * @param {string} dates - the date that we want to check if it is included in the title. If omitted, it is given the value of the current copticDate
 * @returns {boolean} - return true if the date was found, and false otherwise
 */
function tableMatchingDates(tableTitle, dates = [copticDate]) {
    if (!tableTitle?.includes("&D="))
        return false; //This means that the title does not specify any date for the prayer.
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
function dateIsRelevant(date, dates = [copticDate]) {
    const value = dateValue();
    if (!value)
        return console.log("date is not valid: ", value);
    if (value === Seasons.Kiahk)
        return Kiahk.includes(Season);
    else if ([stMaryFeasts, celestialBeingsFeasts, MartyrsFeasts, nonMartyrsFeasts, saintsFeasts, apostlesFeasts].includes(value))
        return Object.values(value).includes(copticDate);
    return dates.includes(value);
    function dateValue() {
        if (date?.startsWith("$"))
            return eval(date.replace("$", ""));
        else if (/^\d{2}00$/.test(date))
            return date?.replace('00', copticMonth);
        else
            return date;
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
function insertExpandableBtn(btns, anchor, before = 'beforebegin', titlesGroup, append = true, dataGroup) {
    if (!anchor)
        return;
    const btnsContainer = document.createElement('div');
    btnsContainer.classList.add(css.inlineButtonsContainer);
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
            btnClass: btn.cssClass || css.inlineButton,
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
                    await displayChildButtonsOrPrayers(btn, false, false);
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
        html.classList.add(css.expand); //We need this class in order to retrieve the btn in Display Presentation Mode
    }
    btnsContainer.style.gridTemplateColumns = setGridColumnsOrRowsNumber(btnsContainer, 3);
    return btnsContainer;
    function toggle(expandable, ids, titleGroup, toggle = true) {
        if (!expandable)
            return;
        ids.filter(id => !RegExp(id).test(expandable.id))
            .forEach(id => {
            //We hide all the other expandables and their titles
            containerDiv.querySelector('#' + id + 'Expandable')?.classList.add(css.hidden);
            toggleTitles(titleGroup + id, true);
        });
        if (!toggle)
            return; //It means we don't want to toggle the expandable itself and its titles
        expandable.classList.toggle(css.hidden);
        toggleTitles(titleGroup + expandable.id.replace('Expandable', ''));
        function toggleTitles(group, hide = false) {
            if (!group)
                return;
            const titles = Array.from(sideBarTitlesContainer.children)
                .filter((div) => div.dataset.group === group);
            if (!hide)
                titles.forEach(div => div.classList.toggle(css.hidden));
            else
                titles.forEach(div => div.classList.add(css.hidden));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVjbGFyZUJ1dHRvbnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9tb2R1bGVzL0RlY2xhcmVCdXR0b25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFNBQVMsU0FBUztJQUNoQixPQUFPO1FBQ0wsT0FBTyxFQUFFO1lBQ1AscU5BQXFOO1lBQ3JOLE1BQU0sQ0FBQyxhQUFhLEdBQUcsY0FBYztZQUNyQyxNQUFNLENBQUMsV0FBVyxHQUFHLFNBQVM7WUFDOUIsTUFBTSxDQUFDLGFBQWEsR0FBRyxlQUFlO1lBQ3RDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsWUFBWTtZQUNqQyxNQUFNLENBQUMsV0FBVyxHQUFHLGlCQUFpQjtZQUN0QyxNQUFNLENBQUMsV0FBVyxHQUFHLGlCQUFpQjtZQUN0QyxNQUFNLENBQUMsY0FBYyxHQUFHLGdCQUFnQjtZQUN4QyxNQUFNLENBQUMsV0FBVyxHQUFHLGNBQWM7WUFDbkMsTUFBTSxDQUFDLGNBQWMsR0FBRyxxQkFBcUI7WUFDN0MsTUFBTSxDQUFDLGFBQWEsR0FBRyxZQUFZO1lBQ25DLE1BQU0sQ0FBQyxhQUFhLEdBQUcsY0FBYztZQUNyQyxNQUFNLENBQUMsYUFBYSxHQUFHLFlBQVk7U0FDcEM7UUFDRCxJQUFJLEVBQUU7WUFDSixxR0FBcUc7WUFDckcsVUFBVSxFQUFFO2dCQUNWLE1BQU0sQ0FBQyxVQUFVLEdBQUcsZUFBZTtnQkFDbkMsTUFBTSxDQUFDLFVBQVUsR0FBRyxpQkFBaUI7Z0JBQ3JDLE1BQU0sQ0FBQyxVQUFVLEdBQUcscUJBQXFCO2dCQUN6QyxNQUFNLENBQUMsVUFBVSxHQUFHLHNCQUFzQjtnQkFDMUMsTUFBTSxDQUFDLFlBQVksR0FBRyxjQUFjO2dCQUNwQyxNQUFNLENBQUMsVUFBVSxHQUFHLHdCQUF3QjtnQkFDNUMsTUFBTSxDQUFDLFVBQVUsR0FBRyxXQUFXO2dCQUMvQixNQUFNLENBQUMsVUFBVSxHQUFHLFVBQVU7Z0JBQzlCLE1BQU0sQ0FBQyxVQUFVLEdBQUcsbUJBQW1CO2dCQUN2QyxNQUFNLENBQUMsWUFBWSxHQUFHLE9BQU87YUFDOUIsRUFBRSxnREFBZ0Q7WUFDbkQsT0FBTyxFQUFFO2dCQUNQLE1BQU0sQ0FBQyxVQUFVLEdBQUcsdUJBQXVCO2dCQUMzQyxNQUFNLENBQUMsV0FBVyxHQUFHLGdCQUFnQjtnQkFDckMsTUFBTSxDQUFDLFVBQVUsR0FBRyxxQkFBcUI7Z0JBQ3pDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsVUFBVTtnQkFDL0IsTUFBTSxDQUFDLFdBQVcsR0FBRyxPQUFPO2dCQUM1QixNQUFNLENBQUMsV0FBVyxHQUFHLHNCQUFzQjtnQkFDM0MsTUFBTSxDQUFDLFVBQVUsR0FBRyxpQkFBaUI7YUFDdEMsRUFBRSx5RUFBeUU7WUFDNUUsU0FBUyxFQUFFO2dCQUNULE1BQU0sQ0FBQyxVQUFVLEdBQUcsdUJBQXVCO2dCQUMzQyxNQUFNLENBQUMsYUFBYSxHQUFHLGdCQUFnQjtnQkFDdkMsTUFBTSxDQUFDLFVBQVUsR0FBRyxxQkFBcUI7Z0JBQ3pDLE1BQU0sQ0FBQyxhQUFhLEdBQUcsVUFBVTtnQkFDakMsTUFBTSxDQUFDLGFBQWEsR0FBRyxPQUFPO2dCQUM5QixNQUFNLENBQUMsYUFBYSxHQUFHLGVBQWU7Z0JBQ3RDLE1BQU0sQ0FBQyxhQUFhLEdBQUcsVUFBVTtnQkFDakMsTUFBTSxDQUFDLGFBQWEsR0FBRyxzQkFBc0I7YUFDOUMsRUFBRSwyRUFBMkU7WUFDOUUsT0FBTyxFQUFFO2dCQUNQLE1BQU0sQ0FBQyxVQUFVLEdBQUcsdUJBQXVCO2dCQUMzQyxNQUFNLENBQUMsV0FBVyxHQUFHLGdCQUFnQjtnQkFDckMsTUFBTSxDQUFDLFVBQVUsR0FBRyxxQkFBcUI7Z0JBQ3pDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsVUFBVTtnQkFDL0IsTUFBTSxDQUFDLFdBQVcsR0FBRyxPQUFPO2dCQUM1QixNQUFNLENBQUMsV0FBVyxHQUFHLGVBQWU7Z0JBQ3BDLE1BQU0sQ0FBQyxVQUFVLEdBQUcsbUJBQW1CO2FBQ3hDLEVBQUUsMEVBQTBFO1lBQzdFLE1BQU0sRUFBRSxFQUFFLEVBQUUsd0VBQXdFO1lBQ3BGLGdCQUFnQixFQUFFO2dCQUNoQixNQUFNLENBQUMsVUFBVSxHQUFHLDBCQUEwQjthQUMvQztZQUNELFFBQVEsRUFBRTtnQkFDUixNQUFNLENBQUMsVUFBVSxHQUFHLGVBQWU7Z0JBQ25DLE1BQU0sQ0FBQyxVQUFVLEdBQUcscUJBQXFCO2dCQUN6QyxNQUFNLENBQUMsVUFBVSxHQUFHLDRCQUE0QjtnQkFDaEQsTUFBTSxDQUFDLFVBQVUsR0FBRyxzQkFBc0I7Z0JBQzFDLE1BQU0sQ0FBQyxZQUFZLEdBQUcsbUJBQW1CO2dCQUN6QyxNQUFNLENBQUMsWUFBWSxHQUFHLHlCQUF5QjtnQkFDL0MsTUFBTSxDQUFDLFVBQVUsR0FBRyxvQkFBb0I7Z0JBQ3hDLE1BQU0sQ0FBQyxZQUFZLEdBQUcsaUJBQWlCO2dCQUN2QyxNQUFNLENBQUMsVUFBVSxHQUFHLDhCQUE4QjtnQkFDbEQsTUFBTSxDQUFDLFVBQVUsR0FBRyx3QkFBd0I7Z0JBQzVDLE1BQU0sQ0FBQyxVQUFVLEdBQUcsWUFBWTtnQkFDaEMsTUFBTSxDQUFDLFlBQVksR0FBRyxjQUFjO2FBQ3JDLEVBQUUscURBQXFEO1lBQ3hELFNBQVMsRUFBRTtnQkFDVCxNQUFNLENBQUMsVUFBVSxHQUFHLG1CQUFtQjtnQkFDdkMsTUFBTSxDQUFDLFVBQVUsR0FBRyxZQUFZO2FBQ2pDLEVBQUUsa0dBQWtHO1NBQ3RHO1FBQ0QsUUFBUSxFQUFFO1lBQ1IsSUFBSSxFQUFFO2dCQUNKLE1BQU0sQ0FBQyxRQUFRLEdBQUcsbUJBQW1CO2dCQUVyQyxNQUFNLENBQUMsUUFBUSxHQUFHLE1BQU07Z0JBRXhCLE1BQU0sQ0FBQyxRQUFRLEdBQUcsV0FBVztnQkFFN0IsTUFBTSxDQUFDLFFBQVEsR0FBRyxnQkFBZ0I7Z0JBRWxDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsTUFBTTtnQkFFeEIsTUFBTSxDQUFDLFFBQVEsR0FBRyxXQUFXO2dCQUU3QixNQUFNLENBQUMsUUFBUSxHQUFHLE1BQU07Z0JBRXhCLE1BQU0sQ0FBQyxRQUFRLEdBQUcsV0FBVztnQkFFN0IsTUFBTSxDQUFDLFFBQVEsR0FBRyxPQUFPO2dCQUV6QixNQUFNLENBQUMsUUFBUSxHQUFHLGVBQWU7Z0JBRWpDLE1BQU0sQ0FBQyxRQUFRLEdBQUcscUJBQXFCO2dCQUV2QyxNQUFNLENBQUMsUUFBUSxHQUFHLFlBQVk7Z0JBQzlCLG9DQUFvQztnQkFFcEMsTUFBTSxDQUFDLFFBQVEsR0FBRyxNQUFNO2dCQUV4QixNQUFNLENBQUMsTUFBTSxHQUFHLDJCQUEyQixFQUFFLDBIQUEwSDtnQkFFdkssTUFBTSxDQUFDLE1BQU0sR0FBRyxzQkFBc0IsRUFBRSwwSEFBMEg7Z0JBRWxLLE1BQU0sQ0FBQyxNQUFNLEdBQUcsaUJBQWlCLEVBQUUsK0VBQStFO2dCQUVsSCxNQUFNLENBQUMsUUFBUSxHQUFHLDJCQUEyQjtnQkFFN0MsTUFBTSxDQUFDLE1BQU0sR0FBRyxVQUFVLEVBQUUsMEVBQTBFO2dCQUV0RyxNQUFNLENBQUMsTUFBTSxHQUFHLGdCQUFnQixFQUFFLCtFQUErRTtnQkFFakgsTUFBTSxDQUFDLE1BQU0sR0FBRyxnQkFBZ0IsRUFBRSwrRUFBK0U7Z0JBRWpILE1BQU0sQ0FBQyxNQUFNLEdBQUcsZ0JBQWdCLEVBQUUsK0VBQStFO2dCQUVqSCxNQUFNLENBQUMsUUFBUSxHQUFHLHlCQUF5QixFQUFDLHlEQUF5RDtnQkFFckcsTUFBTSxDQUFDLFdBQVcsR0FBRyxrQkFBa0I7Z0JBRXZDLE1BQU0sQ0FBQyxZQUFZLEdBQUcsT0FBTztnQkFFN0IsTUFBTSxDQUFDLFdBQVcsR0FBRyxrQkFBa0I7Z0JBRXZDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsZ0JBQWdCO2dCQUVsQyxNQUFNLENBQUMsV0FBVyxHQUFHLGtCQUFrQjtnQkFFdkMsTUFBTSxDQUFDLFlBQVksR0FBRyxtQkFBbUI7Z0JBRXpDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsT0FBTzthQUU3QjtZQUVELEtBQUssRUFBRTtnQkFDTCxNQUFNLENBQUMsUUFBUSxHQUFHLG1CQUFtQjtnQkFFckMsTUFBTSxDQUFDLFFBQVEsR0FBRyxVQUFVO2dCQUU1QixNQUFNLENBQUMsUUFBUSxHQUFHLGlCQUFpQjtnQkFFbkMsTUFBTSxDQUFDLFFBQVEsR0FBRyxZQUFZO2dCQUU5QixNQUFNLENBQUMsUUFBUSxHQUFHLGFBQWE7Z0JBRS9CLE1BQU0sQ0FBQyxRQUFRLEdBQUcsTUFBTTtnQkFFeEIsTUFBTSxDQUFDLFFBQVEsR0FBRyxXQUFXO2dCQUU3QixNQUFNLENBQUMsUUFBUSxHQUFHLHFCQUFxQjtnQkFFdkMsTUFBTSxDQUFDLFFBQVEsR0FBRyxnQkFBZ0I7Z0JBRWxDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsYUFBYTtnQkFFL0IsTUFBTSxDQUFDLFFBQVEsR0FBRyxNQUFNO2dCQUV4QixNQUFNLENBQUMsUUFBUSxHQUFHLFdBQVc7Z0JBRTdCLE1BQU0sQ0FBQyxRQUFRLEdBQUcsTUFBTTtnQkFFeEIsTUFBTSxDQUFDLFFBQVEsR0FBRyxXQUFXO2dCQUU3QixNQUFNLENBQUMsUUFBUSxHQUFHLE9BQU87Z0JBRXpCLE1BQU0sQ0FBQyxRQUFRLEdBQUcsZUFBZTtnQkFFakMsTUFBTSxDQUFDLFFBQVEsR0FBRyxvQkFBb0I7Z0JBRXRDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsb0JBQW9CO2dCQUV0QyxNQUFNLENBQUMsUUFBUSxHQUFHLE1BQU07Z0JBRXhCLE1BQU0sQ0FBQyxRQUFRLEdBQUcsMkJBQTJCO2FBRTlDO1NBQ0Y7UUFDRCxRQUFRLEVBQ1I7WUFDRSxRQUFRLEVBQUU7Z0JBQ1IsTUFBTSxDQUFDLFFBQVEsR0FBRyxrQkFBa0I7Z0JBRXBDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsZ0JBQWdCO2dCQUVsQyxNQUFNLENBQUMsUUFBUSxHQUFHLFlBQVk7Z0JBRTlCLE1BQU0sQ0FBQyxRQUFRLEdBQUcsYUFBYTthQUVoQztZQUNELEtBQUssRUFBRTtnQkFDTCxNQUFNLENBQUMsYUFBYSxHQUFHLGNBQWM7Z0JBQ3JDLE1BQU0sQ0FBQyxZQUFZLEdBQUcsK0JBQStCO2dCQUNyRCxNQUFNLENBQUMsV0FBVyxHQUFHLFNBQVM7Z0JBQzlCLE1BQU0sQ0FBQyxRQUFRLEdBQUcsOENBQThDO2dCQUNoRSxNQUFNLENBQUMsUUFBUSxHQUFHLDJDQUEyQztnQkFDN0QsTUFBTSxDQUFDLFVBQVUsR0FBRyxhQUFhO2dCQUNqQyxNQUFNLENBQUMsTUFBTSxHQUFHLFVBQVU7Z0JBQzFCLE1BQU0sQ0FBQyxNQUFNLEdBQUcsT0FBTztnQkFDdkIsTUFBTSxDQUFDLE1BQU0sR0FBRyxjQUFjO2dCQUM5QixNQUFNLENBQUMsV0FBVyxHQUFHLFlBQVk7Z0JBQ2pDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsaUJBQWlCO2dCQUN0QyxNQUFNLENBQUMsVUFBVSxHQUFHLDRCQUE0QixHQUFHLE1BQU07Z0JBQ3pELE1BQU0sQ0FBQyxZQUFZLEdBQUcsY0FBYztnQkFDcEMsTUFBTSxDQUFDLFVBQVUsR0FBRyw0QkFBNEI7Z0JBQ2hELE1BQU0sQ0FBQyxZQUFZLEdBQUcsY0FBYztnQkFDcEMsTUFBTSxDQUFDLFVBQVUsR0FBRyxpQkFBaUI7Z0JBQ3JDLE1BQU0sQ0FBQyxjQUFjLEdBQUcsZ0JBQWdCO2dCQUN4QyxNQUFNLENBQUMsV0FBVyxHQUFHLGlCQUFpQjtnQkFDdEMsTUFBTSxDQUFDLFlBQVksR0FBRyxtQkFBbUI7Z0JBQ3pDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsYUFBYTtnQkFDL0IsTUFBTSxDQUFDLFlBQVksR0FBRyxZQUFZO2dCQUNsQyxNQUFNLENBQUMsWUFBWSxHQUFHLGlCQUFpQjtnQkFDdkMsTUFBTSxDQUFDLFlBQVksR0FBRyxjQUFjO2dCQUNwQyxNQUFNLENBQUMsWUFBWSxHQUFHLFlBQVk7Z0JBQ2xDLE1BQU0sQ0FBQyxZQUFZLEdBQUcsZ0JBQWdCO2dCQUN0Qyw4QkFBOEI7Z0JBQzlCLE1BQU0sQ0FBQyxZQUFZLEdBQUcsT0FBTztnQkFDN0IsTUFBTSxDQUFDLFVBQVUsR0FBRyxtREFBbUQ7Z0JBQ3ZFLE1BQU0sQ0FBQyxVQUFVLEdBQUcsZUFBZTtnQkFDbkMsTUFBTSxDQUFDLFdBQVc7Z0JBQ2xCLE1BQU0sQ0FBQyxVQUFVLEdBQUcsa0JBQWtCO2dCQUN0QyxNQUFNLENBQUMsUUFBUSxHQUFHLDRDQUE0QzthQUUvRDtZQUNELFlBQVksRUFBRSxFQUFFO1lBQ2hCLG1CQUFtQixFQUFFLEVBQUU7WUFDdkIsWUFBWSxFQUFFLEVBQUU7U0FDakI7UUFDRCxhQUFhLEVBQ1g7WUFDRSxNQUFNLENBQUMsYUFBYSxHQUFHLGNBQWM7WUFDckMsTUFBTSxDQUFDLE1BQU0sR0FBRyxTQUFTO1lBQ3pCLE1BQU0sQ0FBQyxZQUFZLEVBQUMsbUJBQW1CO1lBQ3ZDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsU0FBUztZQUM5QixNQUFNLENBQUMsTUFBTSxHQUFHLGlCQUFpQixFQUFDLFVBQVU7WUFDNUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxZQUFZO1lBQzVCLE1BQU0sQ0FBQyxNQUFNLEdBQUcsZUFBZSxFQUFDLFVBQVU7WUFDMUMsTUFBTSxDQUFDLFVBQVUsR0FBRyxvQkFBb0I7WUFDeEMsTUFBTSxDQUFDLE1BQU0sR0FBRyxhQUFhLEVBQUMsVUFBVTtZQUN4QyxNQUFNLENBQUMsTUFBTSxHQUFHLFFBQVE7WUFDeEIsTUFBTSxDQUFDLE1BQU0sR0FBRyxXQUFXLEVBQUMsVUFBVTtZQUN0QyxNQUFNLENBQUMsTUFBTSxHQUFHLE9BQU87WUFDdkIsTUFBTSxDQUFDLFlBQVksR0FBRyxpQkFBaUI7WUFDdkMsTUFBTSxDQUFDLFlBQVksR0FBRyxjQUFjO1lBQ3BDLE1BQU0sQ0FBQyxjQUFjLEdBQUcscUJBQXFCO1lBQzdDLE1BQU0sQ0FBQyxjQUFjLEdBQUcsa0JBQWtCO1lBQzFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsVUFBVTtZQUMxQixNQUFNLENBQUMsVUFBVSxHQUFHLGtCQUFrQjtZQUN0QyxNQUFNLENBQUMsTUFBTSxHQUFHLFlBQVk7WUFDNUIsTUFBTSxDQUFDLGNBQWMsR0FBRyx3QkFBd0I7WUFDaEQsTUFBTSxDQUFDLFlBQVksR0FBRyxtQkFBbUI7U0FDMUM7S0FDSixDQUFDO0FBQ0osQ0FBQztBQUVELFNBQVMscUJBQXFCO0lBQzVCLE9BQU87UUFDTCxXQUFXLEVBQUU7WUFDWCxFQUFFLEVBQUUsc0lBQXNJO1lBQzFJLEVBQUUsRUFBRSw4SkFBOEo7WUFDbEssRUFBRSxFQUFFLEVBQUU7U0FDUDtRQUNELFNBQVMsRUFBRTtZQUNULEVBQUUsRUFBRSw0QkFBNEI7WUFDaEMsRUFBRSxFQUFFLHFDQUFxQztZQUN6QyxFQUFFLEVBQUUsc0JBQXNCO1NBQzNCO1FBQ0QsV0FBVyxFQUFFO1lBQ1gsRUFBRSxFQUFFLGtJQUFrSTtZQUN0SSxFQUFFLEVBQUUscUZBQXFGO1lBQ3pGLEVBQUUsRUFBRSxFQUFFO1NBQ1A7UUFDRCxTQUFTLEVBQUU7WUFDVCxFQUFFLEVBQUUsd0VBQXdFO1lBQzVFLEVBQUUsRUFBRSx5RUFBeUU7WUFDN0UsRUFBRSxFQUFFLEVBQUU7U0FDUDtRQUNELGVBQWUsRUFBRTtZQUNmLEVBQUUsRUFBRSx1SEFBdUg7WUFDM0gsRUFBRSxFQUFFLHFJQUFxSTtZQUN6SSxFQUFFLEVBQUUsRUFBRTtTQUNQO1FBQ0QsYUFBYSxFQUFFO1lBQ2IsRUFBRSxFQUFFLHFLQUFxSztZQUN6SyxFQUFFLEVBQUUseUpBQXlKO1lBQzdKLEVBQUUsRUFBRSxFQUFFO1NBQ1A7UUFDRCxVQUFVLEVBQUU7WUFDVixFQUFFLEVBQUUscUdBQXFHO1lBQ3pHLEVBQUUsRUFBRSxpR0FBaUc7WUFDckcsRUFBRSxFQUFFLEVBQUU7U0FDUDtRQUNELFFBQVEsRUFBRTtZQUNSLEdBQUcsRUFBRSxXQUFXO1lBQ2hCLEVBQUUsRUFBRSxhQUFhO1lBQ2pCLEVBQUUsRUFBRSxVQUFVO1lBQ2QsRUFBRSxFQUFFLFlBQVk7U0FDakI7UUFDRCxXQUFXLEVBQUU7WUFDWCxFQUFFLEVBQUUseU1BQXlNO1lBQzdNLEVBQUUsRUFBRSxpR0FBaUc7WUFDckcsR0FBRyxFQUFFLDJIQUEySDtZQUNoSSxFQUFFLEVBQUUsRUFBRTtTQUNQO1FBQ0QsU0FBUyxFQUFFO1lBQ1QsRUFBRSxFQUFFLHdIQUF3SDtZQUM1SCxFQUFFLEVBQUUsOEZBQThGO1lBQ2xHLEdBQUcsRUFBRSxvSEFBb0g7WUFDekgsRUFBRSxFQUFFLEVBQUU7U0FDUDtRQUNELGVBQWUsRUFBRTtZQUNmLEVBQUUsRUFBRSx5S0FBeUs7WUFDN0ssRUFBRSxFQUFFLG1DQUFtQztZQUN2QyxFQUFFLEVBQUUsOENBQThDO1NBQ25EO1FBQ0QsZUFBZSxFQUFFO1lBQ2YsRUFBRSxFQUFFLEVBQUU7WUFDTixFQUFFLEVBQUUsRUFBRTtZQUNOLEVBQUUsRUFBRSxFQUFFO1lBQ04sR0FBRyxFQUFFLEVBQUU7U0FDUjtRQUNELGFBQWEsRUFBRTtZQUNiLEVBQUUsRUFBRSx3REFBd0Q7WUFDNUQsRUFBRSxFQUFFLGlGQUFpRjtZQUNyRixFQUFFLEVBQUUsRUFBRTtZQUNOLEdBQUcsRUFBRSxFQUFFO1NBQ1I7S0FDRixDQUFDO0FBQ0osQ0FBQztBQUVELFNBQVMsV0FBVztJQUNsQixPQUFPO1FBQ0wscUlBQXFJO1FBRXJJLEVBQUUsRUFBRTtZQUNGLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO1lBQ3ZFLFFBQVEsQ0FBQztnQkFDUCxFQUFFLEVBQUUsU0FBUztnQkFDYixFQUFFLEVBQUUsT0FBTztnQkFDWCxFQUFFLEVBQUUsU0FBUzthQUNkLENBQUM7U0FDSDtRQUNELEVBQUUsRUFBRTtZQUNGLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7WUFDaEQsUUFBUSxDQUFDO2dCQUNQLEVBQUUsRUFBRSx1QkFBdUI7Z0JBQzNCLEVBQUUsRUFBRSxZQUFZO2dCQUNoQixFQUFFLEVBQUUsWUFBWTthQUNqQixDQUFDO1NBQ0g7UUFDRCxFQUFFLEVBQUU7WUFDRixDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO1lBQ2hELFFBQVEsQ0FBQztnQkFDUCxFQUFFLEVBQUUsdUJBQXVCO2dCQUMzQixFQUFFLEVBQUUsWUFBWTtnQkFDaEIsRUFBRSxFQUFFLFVBQVU7YUFDZixDQUFDO1NBQ0g7UUFDRCxFQUFFLEVBQUU7WUFDRixDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO1lBQ3ZELFFBQVEsQ0FBQztnQkFDUCxFQUFFLEVBQUUsdUJBQXVCO2dCQUMzQixFQUFFLEVBQUUsWUFBWTtnQkFDaEIsRUFBRSxFQUFFLFVBQVU7YUFDZixDQUFDO1NBQ0g7UUFDRCxHQUFHLEVBQUU7WUFDSCxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO1lBQzVELFFBQVEsQ0FBQztnQkFDUCxFQUFFLEVBQUUsdUNBQXVDO2dCQUMzQyxFQUFFLEVBQUUsYUFBYTtnQkFDakIsRUFBRSxFQUFFLFdBQVc7YUFDaEIsQ0FBQztTQUNIO1FBQ0QsR0FBRyxFQUFFO1lBQ0gsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztZQUM1RCxRQUFRLENBQUM7Z0JBQ1AsRUFBRSxFQUFFLGtDQUFrQztnQkFDdEMsRUFBRSxFQUFFLGFBQWE7Z0JBQ2pCLEVBQUUsRUFBRSxXQUFXO2FBQ2hCLENBQUM7U0FDSDtRQUNELEVBQUUsRUFBRTtZQUNGO2dCQUNFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUc7YUFDM0g7WUFDRCxRQUFRLENBQUM7Z0JBQ1AsRUFBRSxFQUFFLGtCQUFrQjtnQkFDdEIsRUFBRSxFQUFFLG1CQUFtQjtnQkFDdkIsRUFBRSxFQUFFLHFCQUFxQjthQUMxQixDQUFDO1NBQ0g7UUFDRCxJQUFJLEVBQUU7WUFDSixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO1lBQ3JDLFFBQVEsQ0FBQztnQkFDUCxFQUFFLEVBQUUsMENBQTBDO2dCQUM5QyxFQUFFLEVBQUUscUJBQXFCO2dCQUN6QixFQUFFLEVBQUUsdUJBQXVCO2FBQzVCLENBQUM7U0FDSDtRQUNELElBQUksRUFBRTtZQUNKLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO1lBQ2xELFFBQVEsQ0FBQztnQkFDUCxFQUFFLEVBQUUsOENBQThDO2dCQUNsRCxFQUFFLEVBQUUsc0JBQXNCO2dCQUMxQixFQUFFLEVBQUUsdUJBQXVCO2FBQzVCLENBQUM7U0FDSDtRQUNELElBQUksRUFBRTtZQUNKLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7WUFDNUQsUUFBUSxDQUFDO2dCQUNQLEVBQUUsRUFBRSxnREFBZ0Q7Z0JBQ3BELEVBQUUsRUFBRSxzQkFBc0I7Z0JBQzFCLEVBQUUsRUFBRSx1QkFBdUI7YUFDNUIsQ0FBQztTQUNIO0tBQ0YsQ0FBQztBQUNKLENBQUM7QUFFRDtJQUNFLFNBQVM7SUFDVCxXQUFXO0lBQ1gscUJBQXFCO0NBQ3RCLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBR3JDLEdBQUcsQ0FBQyxRQUFRLEdBQUcsSUFBSSxNQUFNLENBQUM7SUFDeEIsS0FBSyxFQUFFLFNBQVM7SUFDaEIsS0FBSyxFQUFFLFFBQVEsQ0FBQztRQUNkLEVBQUUsRUFBRSw2QkFBNkI7UUFDakMsRUFBRSxFQUFFLDBCQUEwQjtLQUMvQixDQUFDO0lBQ0YsZUFBZSxFQUFFLHFDQUFxQztJQUN0RCxPQUFPLEVBQUUsR0FBRyxFQUFFO1FBQ1osR0FBRyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEdBQUc7WUFDdEIsR0FBRyxDQUFDLElBQUk7WUFDUixHQUFHLENBQUMsYUFBYTtZQUNqQixHQUFHLENBQUMsV0FBVztZQUNmLEdBQUcsQ0FBQyxXQUFXO1lBQ2YsR0FBRyxDQUFDLFFBQVE7WUFDWixHQUFHLENBQUMsS0FBSztTQUNWLENBQUM7UUFFRixJQUFJLGtCQUFrQixLQUFLLFlBQVksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUNuRCxHQUFHLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzFFLEdBQUcsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQy9FLENBQUM7UUFBQSxDQUFDO1FBRUYsSUFBSSxNQUFNLEtBQUssT0FBTyxDQUFDLFFBQVE7WUFDN0IsR0FBRyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUVwRCxJQUFJLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO1lBQ3hCLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQztnQkFDNUIsRUFBRSxFQUFFLHNCQUFzQjtnQkFDMUIsRUFBRSxFQUFFLG9CQUFvQjthQUN6QixDQUFDLENBQUM7UUFHTCxJQUFJLFlBQVksQ0FBQyxXQUFXLEtBQUssTUFBTTtZQUNyQyxHQUFHLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXZDLENBQUMsZUFBZSxFQUFFLGVBQWUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQTtJQUVsRixDQUFDO0NBQ0YsQ0FBQyxDQUFDO0FBRUgsR0FBRyxDQUFDLGdCQUFnQixHQUFHLElBQUksTUFBTSxDQUFDO0lBQ2hDLEtBQUssRUFBRSxXQUFXO0lBQ2xCLEtBQUssRUFBRSxRQUFRLENBQUMsRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxDQUFDO0lBQzlELGVBQWUsRUFBRSxxQ0FBcUM7SUFDdEQsT0FBTyxFQUFFLEdBQUcsRUFBRTtRQUNaLFdBQVcsRUFBRSxDQUFDLENBQUMsa0NBQWtDO0lBQ25ELENBQUM7Q0FDRixDQUFDLENBQUM7QUFFSCxHQUFHLENBQUMsSUFBSSxHQUFHLElBQUksTUFBTSxDQUFDO0lBQ3BCLEtBQUssRUFBRSxTQUFTO0lBQ2hCLEtBQUssRUFBRSxRQUFRLENBQUMsRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxDQUFDO0lBQzdELE9BQU8sRUFBRSxDQUFDLGlCQUEwQixLQUFLLEVBQUUsRUFBRTtRQUMzQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRO1lBQ3BCLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHO2dCQUNsQixHQUFHLENBQUMsY0FBYztnQkFDbEIsR0FBRyxDQUFDLGNBQWM7Z0JBQ2xCLEdBQUcsQ0FBQyxZQUFZO2FBQUMsQ0FBQztRQUN0QixJQUFJLGNBQWM7WUFBRSxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQy9DLENBQUM7Q0FDRixDQUFDLENBQUM7QUFFSCxHQUFHLENBQUMsY0FBYyxHQUFHLElBQUksTUFBTSxDQUFDO0lBQzlCLEtBQUssRUFBRSxtQkFBbUI7SUFDMUIsS0FBSyxFQUFFLFFBQVEsQ0FBQztRQUNkLEVBQUUsRUFBRSx5QkFBeUI7UUFDN0IsRUFBRSxFQUFFLG1CQUFtQjtRQUN2QixFQUFFLEVBQUUsaUJBQWlCO0tBQ3RCLENBQUM7SUFDRixXQUFXLEVBQUUsSUFBSSxnQkFBZ0IsRUFBRTtJQUNuQyxTQUFTLEVBQUUsQ0FBQyxHQUFHLGdCQUFnQixDQUFDO0lBQ2hDLE9BQU8sRUFBRSxHQUFHLEVBQUU7UUFDWiw4Q0FBOEM7UUFDOUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFNUQsSUFBSSxtQkFBbUIsR0FBRyxTQUFTLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBRXRELENBQUMsU0FBUyxnQ0FBZ0M7WUFFeEMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxlQUFlLEdBQUcsb0JBQW9CLEVBQUUsQ0FBQztZQUU1RCxTQUFTLG9CQUFvQjtnQkFDM0IsZ09BQWdPO2dCQUNoTyxJQUFJLENBQUMsTUFBTTs7d0JBRVQsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQzs7d0JBRXhCLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFVBQVUsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQzs7d0JBRXhFLFlBQVksQ0FBQyxVQUFVO29CQUN2QixPQUFPLG1CQUFtQjt5QkFDdkIsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQ2QsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVLEdBQUcscUJBQXFCLEVBQUUsTUFBTSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUMsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7b0JBQzlHLE9BQU8sUUFBUSxFQUFFLENBQUM7Z0JBRXZCLFNBQVMsUUFBUTtvQkFDZixJQUFJLENBQUMsTUFBTTt3QkFBRSxPQUFPO29CQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7d0JBQzVELG1GQUFtRjt3QkFDbkY7NEJBQ0UsQ0FBQyxxQkFBcUIsRUFBRSxzQ0FBc0MsQ0FBQyxFQUFFLDBEQUEwRDs0QkFDM0gsQ0FBQyxVQUFVLEVBQUUscUNBQXFDLENBQUM7eUJBQUMsQ0FBRyw2Q0FBNkM7NkJBQ25HLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLG1CQUFtQixDQUFDLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDckksQ0FBQztvQkFHRCw0SUFBNEk7b0JBQzVJLE9BQU8sbUJBQW1CO3lCQUN2QixNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FDZCxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQVUsR0FBRyxpQkFBaUIsRUFBRSxNQUFNLENBQUMsVUFBVSxHQUFHLFdBQVcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNoSCxDQUFDO1lBQ0gsQ0FBQztZQUFBLENBQUM7UUFFSixDQUFDLENBQUMsRUFBRSxDQUFDO1FBRUwsV0FBVyxFQUFFLENBQUM7UUFDZCxPQUFPLEdBQUcsQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDO0lBQzVDLENBQUM7SUFDRCxnQkFBZ0IsRUFBRSxLQUFLLEVBQUUsR0FBRyxHQUFHLEdBQUcsQ0FBQyxjQUFjLEVBQUUsRUFBRTtRQUNuRCxJQUFJLGNBQWMsR0FBRyxHQUFHLENBQUMsV0FBVyxDQUFDO1FBRXJDLElBQUksR0FBRyxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLEdBQUcsQ0FBQztZQUMzQyxPQUFPLHVCQUF1QixFQUFFLENBQUM7UUFFbkMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBLG1RQUFtUTtRQUU1UyxDQUFDLFNBQVMsbUNBQW1DO1lBQzNDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7Z0JBQUUsT0FBTyxDQUFBLG9JQUFvSTtZQUN6TSxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBQUUsT0FBTztZQUVoRCxJQUFJLE1BQU0sR0FBYTtnQkFDckIsTUFBTSxDQUFDLFlBQVksR0FBRyx3QkFBd0IsR0FBRyxNQUFNO2dCQUN2RCxNQUFNLENBQUMsVUFBVSxHQUFHLHFDQUFxQztnQkFDekQsTUFBTSxDQUFDLFdBQVcsR0FBRyw4Q0FBOEM7YUFDcEUsQ0FBQztZQUVGLHVCQUF1QixDQUFDLGNBQWMsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQSw0Q0FBNEM7WUFFbkosSUFBSSxNQUFNLEdBQWlCLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQSwwQ0FBMEM7WUFFeEgsSUFBSSxDQUFDLE1BQU0sSUFBSSxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUM7Z0JBQUUsT0FBTztZQUV6QyxJQUFJLE1BQU0sR0FBRyx1QkFBdUIsQ0FBQyxjQUFjLEVBQUUsTUFBTSxDQUFDLFVBQVUsR0FBRyx3QkFBd0IsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBLDBFQUEwRTtZQUN6TSxJQUFJLENBQUMsTUFBTTtnQkFBRSxPQUFPO1lBRXBCLDJCQUEyQixDQUN6QjtnQkFDRSxNQUFNLEVBQUUsTUFBTTtnQkFDZCxTQUFTLEVBQUUsZ0JBQWdCO2dCQUMzQixRQUFRLEVBQUU7b0JBQ1IsYUFBYSxFQUFFLGFBQWE7b0JBQzVCLEVBQUUsRUFBRSxNQUFNO2lCQUNYO2dCQUNELFNBQVMsRUFBRSxjQUFjO2FBQzFCLENBQ0YsQ0FBQztRQUNKLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFFTCxJQUFJLGNBQWMsR0FBZ0IsdUJBQXVCLENBQ3ZELGNBQWMsRUFDZCxNQUFNLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FDM0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLHFGQUFxRjtRQUUzRixDQUFDLFNBQVMsa0NBQWtDO1lBQzFDLElBQUkscUJBQXFCLEdBQUcsZUFBZSxDQUFDLE1BQU0sQ0FDaEQsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUNSLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7O29CQUVoRCxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLFVBQVUsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQzNELENBQUM7WUFDRixJQUFJLHFCQUFxQixDQUFDLE1BQU0sR0FBRyxDQUFDO2dCQUNsQyxPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUNBQWlDLENBQUMsQ0FBQztZQUV4RCxxQkFBcUIsR0FBRyx3QkFBd0IsQ0FBQyxxQkFBcUIsQ0FBaUIsQ0FBQztZQUV4RixJQUFJLE1BQXNCLENBQUM7WUFFM0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLEVBQUUsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7Z0JBQy9ELHVCQUF1QixDQUFDLGNBQWMsRUFBRSx1QkFBdUIsRUFBRSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFBLDBHQUEwRztZQUV0TyxxQkFBcUIsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ3BDLE1BQU0sR0FBRyxzQkFBc0IsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDOUMsSUFBSSxDQUFDLE1BQU07b0JBQUUsT0FBTztnQkFDcEIsMkJBQTJCLENBQUM7b0JBQzFCLE1BQU0sRUFBRSxDQUFDLEtBQUssQ0FBQztvQkFDZixTQUFTLEVBQUUsWUFBWSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDckMsUUFBUSxFQUFFO3dCQUNSLGFBQWEsRUFBRSxhQUFhO3dCQUM1QixFQUFFLEVBQUUsTUFBTTtxQkFDWDtvQkFDRCxTQUFTLEVBQUUsY0FBYztpQkFDMUIsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUM7WUFFSCxTQUFTLHNCQUFzQixDQUFDLEtBQWE7Z0JBQzNDLElBQUksQ0FBQyxLQUFLO29CQUFFLE9BQU87Z0JBQ25CLElBQUksU0FBUyxHQUFXLHFCQUFxQixDQUFDO2dCQUU5QyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7b0JBQ3RDLFNBQVMsR0FBRyw0QkFBNEIsQ0FBQztxQkFDdEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLEVBQUUsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsdUJBQXVCLENBQUM7b0JBQ2hILFNBQVMsR0FBRyxxQkFBcUIsQ0FBQyxDQUFBLGlHQUFpRztnQkFFckksSUFBSSxDQUFDLFNBQVM7b0JBQUUsT0FBTztnQkFFdkIsSUFBSSxRQUFRLEdBQUcsdUJBQXVCLENBQ3BDLGNBQWMsRUFDZCxNQUFNLENBQUMsVUFBVSxHQUFHLFNBQVMsR0FBRyxFQUFFLEdBQUcsTUFBTSxDQUFDLENBQUM7Z0JBRS9DLElBQUksQ0FBQyxRQUFRLElBQUksUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDO29CQUFFLE9BQU87Z0JBRTdDLE9BQU8sUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsa0JBQW9DLENBQUE7WUFDM0UsQ0FBQztRQUNILENBQUMsQ0FBQyxFQUFFLENBQUM7UUFFTCxDQUFDLFNBQVMsMkJBQTJCO1lBQ25DLHdGQUF3RjtZQUN4RixNQUFNLFdBQVcsR0FBRyxJQUFJLE1BQU0sQ0FBQztnQkFDN0IsS0FBSyxFQUFFLGdCQUFnQjtnQkFDdkIsS0FBSyxFQUFFLFFBQVEsQ0FBQztvQkFDZCxFQUFFLEVBQUUsY0FBYztvQkFDbEIsRUFBRSxFQUFFLGFBQWE7aUJBQ2xCLENBQUM7Z0JBQ0YsUUFBUSxFQUFFLEdBQUcsQ0FBQyxZQUFZO2dCQUMxQixTQUFTLEVBQUUsZ0JBQWdCO2dCQUMzQixXQUFXLEVBQUUsSUFBSSxnQkFBZ0IsRUFBRTtnQkFDbkMsZUFBZSxFQUFFLENBQUMsTUFBTSxDQUFDLFVBQVUsR0FBRyxhQUFhLENBQUM7YUFDckQsQ0FBQyxDQUFDO1lBQ0gsTUFBTSxPQUFPLEdBQUcsSUFBSSxNQUFNLENBQUM7Z0JBQ3pCLEtBQUssRUFBRSxZQUFZO2dCQUNuQixLQUFLLEVBQUUsUUFBUSxDQUFDO29CQUNkLEVBQUUsRUFBRSxVQUFVO29CQUNkLEVBQUUsRUFBRSxTQUFTO2lCQUNkLENBQUM7Z0JBQ0YsUUFBUSxFQUFFLEdBQUcsQ0FBQyxZQUFZO2dCQUMxQixTQUFTLEVBQUUsZ0JBQWdCO2dCQUMzQixXQUFXLEVBQUUsSUFBSSxnQkFBZ0IsRUFBRTtnQkFDbkMsZUFBZSxFQUFFLENBQUMsTUFBTSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7YUFDakQsQ0FBQyxDQUFDO1lBRUgsbUJBQW1CLENBQUMsQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLEVBQUUsY0FBYyxFQUFFLGFBQWEsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUVyRixDQUFDLENBQUMsRUFBRSxDQUFDO1FBRUwsdUJBQXVCLEVBQUUsQ0FBQztRQUUxQixNQUFNLDhCQUE4QixFQUFFLENBQUM7UUFFdkMsS0FBSyxVQUFVLDhCQUE4QjtZQUMzQyxNQUFNLE1BQU0sR0FBRyxxQkFBcUIsRUFBRSxDQUFDO1lBRXZDLElBQUksZUFBZ0QsQ0FBQztZQUVyRCxVQUFVO1lBQ1YsTUFBTSxpQkFBaUIsQ0FDckIsTUFBTSxDQUFDLE1BQU0sRUFDYixNQUFNLENBQUMsV0FBVyxFQUNsQixNQUFNLENBQUMsU0FBUyxDQUNqQixDQUFDO1lBRUYsQ0FBQyxTQUFTLHdCQUF3QjtnQkFDaEMsSUFBSSxRQUFRLEdBQUcsd0JBQXdCLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFFNUcsSUFBSSxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUM7b0JBQUUsUUFBUSxHQUFHLHdCQUF3QixDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxNQUFNLENBQUMsa0JBQWtCLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUVqSSxJQUFJLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQztvQkFBRSxPQUFPO2dCQUVoQyxNQUFNLFFBQVEsR0FBRyxJQUFJLE1BQU0sQ0FBQztvQkFDMUIsS0FBSyxFQUFFLHVCQUF1QjtvQkFDOUIsS0FBSyxFQUFFLFFBQVEsQ0FBQzt3QkFDZCxFQUFFLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7cUJBQy9HLENBQUM7b0JBQ0YsUUFBUSxFQUFFLEdBQUcsQ0FBQyxZQUFZO29CQUMxQixXQUFXLEVBQUUsSUFBSSxnQkFBZ0IsRUFBRTtvQkFDbkMsT0FBTyxFQUFFLEdBQUcsRUFBRTt3QkFDWixJQUFJLEtBQWUsQ0FBQzt3QkFDcEIsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQWlCLEVBQUUsRUFBRTs0QkFDakMsS0FBSyxHQUFHLFlBQVksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQzs0QkFFbkMsV0FBVyxDQUFDO2dDQUNWLEtBQUssRUFBRSxLQUFLO2dDQUNaLFNBQVMsRUFBRSxLQUFLO2dDQUNoQixRQUFRLEVBQUUsUUFBUSxDQUFDLFdBQVc7Z0NBQzlCLFNBQVMsRUFBRSxRQUFRLENBQUMsV0FBVztnQ0FDL0IsaUJBQWlCLEVBQUUsS0FBSztnQ0FDeEIsaUJBQWlCLEVBQUUsS0FBSzs2QkFDekIsQ0FBQyxDQUFDO3dCQUNMLENBQUMsQ0FBQyxDQUFBO29CQUVKLENBQUM7aUJBQ0YsQ0FBQyxDQUFDO2dCQUVILG1CQUFtQixDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsY0FBYyxFQUFFLGFBQWEsQ0FBQyxDQUFDO1lBQ2pFLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFFTCxZQUFZO1lBQ1osTUFBTSxpQkFBaUIsQ0FDckIsTUFBTSxDQUFDLFVBQVUsRUFDakIsTUFBTSxDQUFDLGVBQWUsRUFDdEIsTUFBTSxDQUFDLGFBQWEsQ0FDckIsQ0FBQztZQUVGLENBQUMsU0FBUyxvQkFBb0I7Z0JBQzVCLDhGQUE4RjtnQkFFOUYsZUFBZSxHQUFHLEVBQUUsQ0FBQztnQkFDckIsSUFBSSxXQUFXLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDOUMsSUFBSSxPQUFPLEdBQUcsV0FBVyxFQUFFLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDaEQsSUFBSSxDQUFDLE9BQU87b0JBQ1YsT0FBTzt3QkFDTCxXQUFXOzZCQUNSLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxVQUFVLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxVQUFVLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDOzZCQUN2RixRQUFRLENBQUMsa0JBQWtCLENBQUMsQ0FBQztnQkFFcEMsSUFBSSxhQUFhLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBRXJFLElBQUksT0FBTztvQkFDVCxlQUFlO3dCQUNiLG9CQUFvQixDQUFDLE1BQU0sQ0FDekIsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLFVBQVUsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBLDZHQUE2RztnQkFFbFAsSUFBSSxlQUFlLENBQUMsTUFBTSxHQUFHLENBQUM7b0JBQzVCLGVBQWUsR0FBRyxvQkFBb0IsQ0FBQyxNQUFNLENBQzNDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQSx1Q0FBdUM7Z0JBR2xHLElBQUksYUFBYSxJQUFJLFNBQVMsS0FBSyxJQUFJLElBQUksZUFBZSxDQUFDLE1BQU0sR0FBRyxDQUFDO29CQUNuRSxPQUFPLG9CQUFvQixFQUFFLENBQUM7O29CQUMzQixPQUFPLGtCQUFrQixFQUFFLENBQUM7Z0JBRWpDLFNBQVMsa0JBQWtCO29CQUN6QixJQUFJLE1BQU0sS0FBSyxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUM7d0JBQ2pDLDBKQUEwSjt3QkFFMUosT0FBTyxLQUFLLENBQUMsSUFBSSxPQUFPLEtBQUssQ0FBQyxDQUFDLENBQUM7NEJBQzlCLGVBQWU7Z0NBQ2YsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQWlCLEVBQUUsRUFBRSxDQUMzQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUUsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDOzRCQUN2QyxDQUFDO2dDQUNELGVBQWU7b0NBQ2YsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQWlCLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRSxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztvQkFDckYsQ0FBQztvQkFFRCxJQUFJLE1BQU0sS0FBSyxPQUFPLENBQUMsWUFBWSxJQUFJLFVBQVUsS0FBSyxZQUFZLENBQUMsUUFBUTt3QkFDekUsZUFBZSxHQUFHLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFlLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxrQkFBa0IsRUFBRSxhQUFhLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFFeEksK0RBQStEO29CQUMvRCxlQUFlO3dCQUNiLDJCQUEyQixDQUFDOzRCQUMxQixNQUFNLEVBQUUsd0JBQXdCLENBQUMsZUFBK0IsQ0FBaUIsRUFBRSw2QkFBNkI7NEJBQ2hILFNBQVMsRUFBRSxnQkFBZ0I7NEJBQzNCLFFBQVEsRUFBRTtnQ0FDUixhQUFhLEVBQUUsYUFBYTtnQ0FDNUIsRUFBRSxFQUFFLGNBQWMsRUFBRSx1REFBdUQ7NkJBQzVFOzRCQUNELFNBQVMsRUFBRSxjQUFjO3lCQUMxQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBRVIsb0JBQW9CLENBQUMsZUFBbUMsQ0FBQyxDQUFDO2dCQUM1RCxDQUFDO2dCQUFBLENBQUM7Z0JBRUYsU0FBUyxvQkFBb0I7b0JBQzNCLElBQUksZ0JBQWdCLEdBQWtDLFNBQVMsQ0FDN0QsTUFBTSxDQUFDLGNBQWMsRUFDckIsb0JBQW9CLENBQUMsSUFBSSxTQUFTLENBQUM7b0JBRXJDLElBQUksQ0FBQyxnQkFBZ0I7d0JBQUUsT0FBTztvQkFFOUIsZ0JBQWdCLEdBQUcsMkJBQTJCLENBQUM7d0JBQzdDLE1BQU0sRUFBRSxDQUFDLGdCQUE4QixDQUFDO3dCQUN4QyxTQUFTLEVBQUUsWUFBWSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUM7d0JBQzlDLFFBQVEsRUFBRTs0QkFDUixhQUFhLEVBQUUsYUFBYTs0QkFDNUIsRUFBRSxFQUFFLGNBQWM7eUJBQ25CO3dCQUNELFNBQVMsRUFBRSxjQUFjO3FCQUMxQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBRU4sb0JBQW9CLENBQUMsZ0JBQW9DLENBQUMsQ0FBQztnQkFDN0QsQ0FBQztnQkFBQSxDQUFDO2dCQUdGLFNBQVMsb0JBQW9CLENBQUMsU0FBMkI7b0JBQ3ZELElBQUksQ0FBQyxTQUFTO3dCQUFFLE9BQU87b0JBQ3ZCLElBQUksTUFBTSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLElBQUksS0FBSyxNQUFNLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxDQUFDO29CQUVuRixJQUFJLENBQUMsTUFBTTt3QkFBRSxPQUFPLENBQUMsNEpBQTRKO29CQUVqTCxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDO3dCQUFFLE9BQU8sQ0FBQSwwQ0FBMEM7b0JBRXhHLGVBQWUsR0FBRyxvQkFBb0IsQ0FBQyxNQUFNLENBQzNDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUUsUUFBUSxDQUFDLG1CQUFtQixDQUFDLElBQUksa0JBQWtCLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUU1RyxJQUFJLGVBQWUsQ0FBQyxNQUFNLEdBQUcsQ0FBQzt3QkFBRSxPQUFPO29CQUV2QywyQkFBMkIsQ0FBQzt3QkFDMUIsTUFBTSxFQUFFLGVBQStCO3dCQUN2QyxTQUFTLEVBQUUsWUFBWSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUM7d0JBQzlDLFFBQVEsRUFBRTs0QkFDUixFQUFFLEVBQUUsTUFBTTs0QkFDVixhQUFhLEVBQUUsYUFBYTt5QkFDN0I7d0JBQ0QsU0FBUyxFQUFFLGNBQWM7cUJBQzFCLENBQUMsQ0FBQztnQkFDTCxDQUFDO1lBQ0gsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUdMLFFBQVE7WUFDUixNQUFNLGlCQUFpQixDQUNyQixNQUFNLENBQUMsTUFBTSxFQUNiLE1BQU0sQ0FBQyxXQUFXLEVBQ2xCLE1BQU0sQ0FBQyxTQUFTLENBQ2pCLENBQUM7WUFFRixDQUFDLFNBQVMsd0JBQXdCO2dCQUNoQyxJQUFJLE1BQU0sS0FBSyxPQUFPLENBQUMsWUFBWSxJQUFJLFVBQVUsS0FBSyxZQUFZLENBQUMsUUFBUTtvQkFBRSxPQUFPO2dCQUNwRixrSEFBa0g7Z0JBRWxILElBQUksS0FBSyxHQUFXLGlCQUFpQixDQUFDO2dCQUN0QyxJQUFJLFVBQVUsS0FBSyxZQUFZLENBQUMsUUFBUTtvQkFDdEMsS0FBSyxJQUFJLHVCQUF1QixDQUFBO3FCQUM3QixJQUFJLE1BQU0sS0FBSyxPQUFPLENBQUMsWUFBWTtvQkFDdEMsS0FBSyxJQUFJLHNCQUFzQixDQUFDO2dCQUVsQywyQkFBMkIsQ0FBQztvQkFDMUIsTUFBTSxFQUFFLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztvQkFDOUYsU0FBUyxFQUFFLFlBQVksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDO29CQUM5QyxRQUFRLEVBQUU7d0JBQ1IsRUFBRSxFQUFFLGNBQWM7d0JBQ2xCLGFBQWEsRUFBRSxhQUFhO3FCQUM3QjtvQkFDRCxTQUFTLEVBQUUsY0FBYztpQkFDMUIsQ0FBQyxDQUFDO1lBRUwsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUVMLE1BQU0sZ0JBQWdCLEVBQUUsQ0FBQztZQUV6QixLQUFLLFVBQVUsZ0JBQWdCO2dCQUM3QixJQUFJLE1BQU0sS0FBSyxPQUFPLENBQUMsZUFBZTtvQkFBRSxPQUFPLENBQUEsOERBQThEO2dCQUM3RyxJQUFJLEtBQUssR0FBRyxFQUFFLEdBQUcsTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDO2dCQUMxQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztxQkFDbEIsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQ2YsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDZixLQUFLLENBQUMsQ0FBQyxDQUFDO3lCQUNMLE9BQU8sQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO3lCQUMvQyxPQUFPLENBQUMsVUFBVSxFQUNqQixZQUFZLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQzVDLENBQUMsQ0FBQztnQkFFVCxNQUFNLGlCQUFpQixDQUNyQixNQUFNLENBQUMsVUFBVSxFQUNqQixLQUFLLEVBQ0wsU0FBUyxFQUNULFVBQVUsQ0FDWCxDQUFDLENBQUMsb0tBQW9LO2dCQUV2SywrQkFBK0I7Z0JBQy9CLElBQUksU0FBUyxHQUFHLHVCQUF1QixDQUNyQyxjQUFjLEVBQ2QsTUFBTSxDQUFDLFVBQVUsR0FBRyxLQUFLLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBRTdDLElBQUksQ0FBQyxTQUFTLElBQUksU0FBUyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQztvQkFBRSxPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsNkJBQTZCLENBQUMsQ0FBQztnQkFDbkcsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxxQkFBcUIsQ0FDekMsYUFBYSxFQUNiLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQ3RCLENBQUM7WUFDSixDQUFDO1lBQUEsQ0FBQztZQUVGLEtBQUssVUFBVSxpQkFBaUIsQ0FDOUIsYUFBcUIsRUFDckIsWUFBb0QsRUFDcEQsVUFBa0QsRUFDbEQsT0FBZSxrQkFBa0I7Z0JBRWpDLElBQUksQ0FBQyxhQUFhO29CQUFFLE9BQU87Z0JBRTNCLElBQUksUUFBUSxDQUFDO2dCQUViLFFBQVEsR0FBRyxNQUFNLGdDQUFnQyxDQUMvQyxhQUFhLEVBQ2IsRUFBRSxhQUFhLEVBQUUsYUFBYSxFQUFFLEVBQUUsRUFBRSxjQUFjLEVBQUUsRUFDcEQsY0FBYyxFQUNkLEtBQUssRUFDTCxJQUFJLENBQ2MsQ0FBQztnQkFFckIsSUFBSSxDQUFDLFFBQVEsSUFBSSxRQUFRLENBQUMsTUFBTSxLQUFLLENBQUM7b0JBQUUsT0FBTztnQkFDL0MsUUFBUSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBRWpELElBQUksWUFBWTtvQkFDZCwyREFBMkQ7b0JBQzNELDJCQUEyQixDQUFDO3dCQUMxQixNQUFNLEVBQUU7NEJBQ047Z0NBQ0U7b0NBQ0UsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLEtBQUs7b0NBQ3ZDLFlBQVksQ0FBQyxFQUFFO29DQUNmLFlBQVksQ0FBQyxFQUFFO29DQUNmLFlBQVksQ0FBQyxFQUFFO2lDQUNoQjs2QkFDRjt5QkFDRjt3QkFDRCxTQUFTLEVBQUUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQzt3QkFDN0IsUUFBUSxFQUFFLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBRSxFQUFFLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO3dCQUM5RCxTQUFTLEVBQUUsY0FBYztxQkFDMUIsQ0FBQyxDQUFDO2dCQUNMLElBQUksVUFBVTtvQkFDWix1Q0FBdUM7b0JBQ3ZDLDJCQUEyQixDQUFDO3dCQUMxQixNQUFNLEVBQUU7NEJBQ047Z0NBQ0U7b0NBQ0UsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLEdBQUc7b0NBQ3JDLFVBQVUsQ0FBQyxFQUFFO29DQUNiLFVBQVUsQ0FBQyxFQUFFO29DQUNiLFVBQVUsQ0FBQyxFQUFFO2lDQUNkOzZCQUNGO3lCQUNGO3dCQUNELFNBQVMsRUFBRSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDO3dCQUM3QixRQUFRLEVBQUUsRUFBRSxhQUFhLEVBQUUsYUFBYSxFQUFFLEVBQUUsRUFBRSxjQUFjLEVBQUU7d0JBQzlELFNBQVMsRUFBRSxjQUFjO3FCQUMxQixDQUFDLENBQUM7WUFDUCxDQUFDO1lBQUEsQ0FBQztZQUVGLENBQUMsU0FBUyx5QkFBeUI7Z0JBQ2pDLE1BQU0sVUFBVSxHQUFHLFNBQVMsRUFBRSxDQUFDO2dCQUUvQixJQUFJLENBQUMsVUFBVTtvQkFDYixPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQ2hCLHFEQUFxRCxDQUN0RCxDQUFDO2dCQUVKLENBQUMsU0FBUyxnQkFBZ0I7b0JBQ3hCLElBQUksTUFBTSxLQUFLLE9BQU8sQ0FBQyxTQUFTO3dCQUFFLE9BQU8sQ0FBRSxpRkFBaUY7b0JBQzVILE1BQU0sS0FBSyxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsWUFBWSxHQUFHLFlBQVksRUFBRSxXQUFXLENBQUMsQ0FBQztvQkFDekUsSUFBSSxDQUFDLEtBQUs7d0JBQUUsT0FBTyxDQUFBLDJIQUEySDtvQkFFOUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQSwrREFBK0Q7Z0JBRTdKLENBQUMsQ0FBQyxFQUFFLENBQUM7Z0JBR0wsMkJBQTJCLENBQUM7b0JBQzFCLE1BQU0sRUFBRSxDQUFDLFVBQVUsQ0FBQztvQkFDcEIsU0FBUyxFQUFFLFlBQVksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7b0JBQzFDLFFBQVEsRUFBRTt3QkFDUixhQUFhLEVBQUUsYUFBYTt3QkFDNUIsRUFBRSxFQUFFLGNBQWMsRUFBRSxrQkFBb0M7cUJBQ3pEO29CQUNELFNBQVMsRUFBRSxjQUFjO2lCQUMxQixDQUFDLENBQUM7Z0JBRUgsU0FBUyxTQUFTO29CQUNoQixJQUFJLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLFNBQVMsQ0FBQyxDQUFDO29CQUVqRCxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRSxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQzt3QkFDNUUsS0FBSyxHQUFHLFVBQVUsQ0FBQzt5QkFFaEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUUsWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQzt3QkFDdEYsS0FBSyxHQUFHLGtCQUFrQixDQUFDO3lCQUV4QixJQUFJLE1BQU0sS0FBSyxPQUFPLENBQUMsVUFBVTt3QkFDcEMsS0FBSyxHQUFHLFlBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQSx5Q0FBeUM7eUJBRXRFLElBQUksQ0FBQyxPQUFPLENBQUMsZUFBZSxFQUFFLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQzt3QkFDdkUsS0FBSyxHQUFHLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQSx3RkFBd0Y7d0JBQ3hILEtBQUssR0FBRyxTQUFTLENBQUE7b0JBQ25CLENBQUM7eUJBRUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO3dCQUM5RCxLQUFLLEdBQUcsTUFBTSxDQUFDO3dCQUNmLEtBQUssR0FBRyxTQUFTLENBQUM7b0JBQ3BCLENBQUM7b0JBRUQsT0FBTyxLQUFLLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO29CQUUzQixTQUFTLEtBQUssQ0FBQyxLQUFhLEVBQUUsS0FBYTt3QkFDekMsTUFBTSxLQUFLLEdBQUcsQ0FBQyxLQUFhLEVBQUUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsV0FBVyxDQUFDLElBQUksU0FBUyxDQUFDO3dCQUM1RSxNQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsWUFBWSxHQUFHLE9BQU8sQ0FBQzt3QkFFNUMsSUFBSSxDQUFDLEtBQUs7NEJBQUUsT0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7d0JBRWhDLEtBQUssR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBLDJEQUEyRDt3QkFFcEksT0FBTyxLQUFLLENBQUMsR0FBRyxLQUFLLE1BQU0sS0FBSyxJQUFJLEtBQUssRUFBRSxDQUFDLENBQUM7b0JBRS9DLENBQUM7Z0JBQ0gsQ0FBQztZQUVILENBQUMsQ0FBQyxFQUFFLENBQUM7WUFFTCxNQUFNLCtCQUErQixDQUFDO2dCQUNwQyxNQUFNLEVBQUUsTUFBTSxDQUFDLFVBQVU7Z0JBQ3pCLFNBQVMsRUFBRSxZQUFZLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQztnQkFDMUMsU0FBUyxFQUFFLGNBQWM7Z0JBQ3pCLE1BQU0sRUFBRSxJQUFJO2dCQUNaLGNBQWMsRUFBRSxLQUFLO2FBQ3RCLENBQUMsQ0FBQztRQUNMLENBQUM7UUFBQSxDQUFDO1FBRUYsU0FBUyx1QkFBdUI7WUFDOUIsSUFDRTtnQkFDRSxZQUFZLENBQUMsWUFBWTtnQkFDekIsWUFBWSxDQUFDLFFBQVE7Z0JBQ3JCLFlBQVksQ0FBQyxPQUFPO2FBQ3JCLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDO2dCQUU5Qix3Q0FBd0M7Z0JBQ3hDLE9BQU8sS0FBSyxDQUNWLDhIQUE4SCxDQUM3SCxDQUFDO1lBRUosTUFBTSxTQUFTLEdBQUcsR0FBRyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLGFBQWEsRUFBRSxDQUFhLENBQUM7WUFFL0UsQ0FBQyxTQUFTLGtCQUFrQjtnQkFDMUIsTUFBTSxZQUFZLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLHdHQUF3RztnQkFDNUosWUFBWSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUM7Z0JBQ3ZELFlBQVksQ0FBQyxFQUFFLEdBQUcsY0FBYyxDQUFDO2dCQUVqQyxNQUFNLFNBQVMsR0FBRyxJQUFJLE1BQU0sQ0FBQztvQkFDM0IsS0FBSyxFQUFFLFlBQVk7b0JBQ25CLEtBQUssRUFBRSxRQUFRLENBQUM7d0JBQ2QsRUFBRSxFQUFFLFNBQVM7d0JBQ2IsRUFBRSxFQUFFLE9BQU87cUJBQ1osQ0FBQztvQkFDRixPQUFPLEVBQUUsR0FBRyxFQUFFO3dCQUNaLHdEQUF3RDt3QkFDeEQsSUFBSSxPQUFPLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQW1CLENBQUM7d0JBQ3RFLElBQUksQ0FBQyxPQUFPOzRCQUFFLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO3dCQUMxRCxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7d0JBQ3JDLElBQUksT0FBTyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7NEJBQzNDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQzs0QkFDdkIsT0FBTyxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDOzRCQUM1QixnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7d0JBQy9CLENBQUM7b0JBQ0gsQ0FBQztpQkFDRixDQUFDLENBQUM7Z0JBRUgsWUFBWSxDQUFDLE9BQU8sQ0FDbEIsYUFBYSxDQUFDO29CQUNaLEdBQUcsRUFBRSxTQUFTO29CQUNkLGFBQWEsRUFBRSxZQUFZO29CQUMzQixRQUFRLEVBQUUsR0FBRyxDQUFDLFlBQVk7b0JBQzFCLEtBQUssRUFBRSxJQUFJO29CQUNYLE9BQU8sRUFBRSxTQUFTLENBQUMsT0FBTztpQkFDM0IsQ0FBQyxDQUNILENBQUM7Z0JBQ0YsY0FBYyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDckMsMkJBQTJCLENBQUMsWUFBWSxDQUFDLENBQUE7WUFDM0MsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUVMLFNBQVMsMkJBQTJCLENBQUMsWUFBMkI7Z0JBQzlELGdGQUFnRjtnQkFDaEYsTUFBTSxPQUFPLEdBQUcsbUJBQW1CLENBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUN2RixPQUFPLENBQUMsRUFBRSxHQUFHLFlBQVksQ0FBQztnQkFDMUIsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNsQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUM7cUJBQ3pCLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFO29CQUN6RCxXQUFXLEVBQUUsQ0FBQztvQkFDZCxNQUFNLFVBQVUsR0FBRyxZQUFZLENBQUMsYUFBYSxDQUFDLEdBQUcsR0FBRyxPQUFPLENBQUMsRUFBRSxHQUFHLFlBQVksQ0FBQyxDQUFDO29CQUMvRSxJQUFJLENBQUMsVUFBVTt3QkFDWCxPQUFPO29CQUNYLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDO3dCQUMxQyxrQkFBa0IsQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDOzt3QkFFekMsT0FBTyxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDO29CQUN4QyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQXFCLENBQUMsQ0FBQztnQkFDM0UsQ0FBQyxDQUNBLENBQUMsQ0FBQztZQUNQLENBQUM7WUFBQSxDQUFDO1lBRUEsU0FBUyxhQUFhO2dCQUNwQiwrTkFBK047Z0JBQy9OLE1BQU0sS0FBSyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLHNDQUFzQztnQkFFL0QsSUFDRTtvQkFDRSxPQUFPLENBQUMsU0FBUztvQkFDakIsT0FBTyxDQUFDLFNBQVM7b0JBQ2pCLE9BQU8sQ0FBQyxnQkFBZ0I7b0JBQ3hCLE9BQU8sQ0FBQyxlQUFlO2lCQUN4QixDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7b0JBQ2xCLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQztnQkFDekIsNEtBQTRLOztvQkFFNUssS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7cUJBQ2QsSUFBSSxHQUFHLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQztvQkFDbkQsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBQ2pCLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDaEIsQ0FBQztxQkFDSTtnQkFDSCxzREFBc0Q7Z0JBQ3RELENBQUMsTUFBTTs7d0JBRVAsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLDJGQUEyRjs7d0JBRXBILFlBQVksQ0FBQyxVQUFVLENBQUMsK0NBQStDOztvQkFFdkUsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsd0JBQXdCO2dCQUV2QyxPQUFPLEtBQUssQ0FBQztZQUNmLENBQUM7WUFBQSxDQUFDO1FBQ0osQ0FBQztRQUFBLENBQUM7SUFFSixDQUFDO0NBQ0YsQ0FBQyxDQUFDO0FBRUgsR0FBRyxDQUFDLGNBQWMsR0FBRyxJQUFJLE1BQU0sQ0FBQztJQUM5QixLQUFLLEVBQUUsbUJBQW1CO0lBQzFCLEtBQUssRUFBRSxRQUFRLENBQUM7UUFDZCxFQUFFLEVBQUUsUUFBUTtRQUNaLEVBQUUsRUFBRSxzQkFBc0I7S0FDM0IsQ0FBQztJQUNGLE9BQU8sRUFBRSxLQUFLLElBQUksRUFBRTtRQUNsQixNQUFNLGdDQUFnQyxDQUNwQyxNQUFNLENBQUMsTUFBTSxFQUNiLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQzNDLFlBQVksRUFDWixJQUFJLENBQ0wsQ0FBQztRQUVGLFdBQVcsRUFBRSxDQUFDLENBQUMsa0NBQWtDO0lBQ25ELENBQUM7Q0FDRixDQUFDLENBQUM7QUFFSCxHQUFHLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxNQUFNLENBQUM7SUFDbEMsS0FBSyxFQUFFLHVCQUF1QjtJQUM5QixLQUFLLEVBQUUsUUFBUSxDQUFDO1FBQ2QsRUFBRSxFQUFFLGFBQWE7UUFDakIsRUFBRSxFQUFFLFlBQVk7S0FDakIsQ0FBQztJQUNGLE9BQU8sRUFBRSxLQUFLLElBQUksRUFBRTtRQUNsQixNQUFNLGdDQUFnQyxDQUNwQyxNQUFNLENBQUMsVUFBVSxFQUNqQixFQUFFLGFBQWEsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUMzQyxZQUFZLEVBQ1osSUFBSSxDQUNMLENBQUM7UUFDRixXQUFXLEVBQUUsQ0FBQyxDQUFDLGtDQUFrQztJQUNuRCxDQUFDO0NBQ0YsQ0FBQyxDQUFDO0FBRUgsR0FBRyxDQUFDLGNBQWMsR0FBRyxJQUFJLE1BQU0sQ0FBQztJQUM5QixLQUFLLEVBQUUsbUJBQW1CO0lBQzFCLEtBQUssRUFBRSxRQUFRLENBQUM7UUFDZCxFQUFFLEVBQUUsV0FBVztRQUNmLEVBQUUsRUFBRSxPQUFPO1FBQ1gsRUFBRSxFQUFFLE1BQU07S0FDWCxDQUFDO0lBQ0YsT0FBTyxFQUFFLEtBQUssSUFBSSxFQUFFO1FBQ2xCLE1BQU0sZ0NBQWdDLENBQ3BDLE1BQU0sQ0FBQyxNQUFNLEVBQ2IsRUFBRSxhQUFhLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFDM0MsWUFBWSxFQUNaLElBQUksQ0FDTCxDQUFDO1FBQ0YsV0FBVyxFQUFFLENBQUMsQ0FBQyxrQ0FBa0M7SUFDbkQsQ0FBQztDQUNGLENBQUMsQ0FBQztBQUVILEdBQUcsQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLE1BQU0sQ0FBQztJQUNsQyxLQUFLLEVBQUUsdUJBQXVCO0lBQzlCLEtBQUssRUFBRSxRQUFRLENBQUM7UUFDZCxFQUFFLEVBQUUsVUFBVTtRQUNkLEVBQUUsRUFBRSxZQUFZO1FBQ2hCLEVBQUUsRUFBRSxZQUFZO0tBQ2pCLENBQUM7SUFDRixPQUFPLEVBQUUsS0FBSyxJQUFJLEVBQUU7UUFDbEIsTUFBTSxnQ0FBZ0MsQ0FDcEMsTUFBTSxDQUFDLFVBQVUsRUFDakIsRUFBRSxhQUFhLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFDM0MsWUFBWSxFQUNaLElBQUksRUFDSixVQUFVLENBQ1gsQ0FBQyxDQUFDLCtTQUErUztRQUNsVCxXQUFXLEVBQUUsQ0FBQyxDQUFDLGtDQUFrQztJQUNuRCxDQUFDO0NBQ0YsQ0FBQyxDQUFDO0FBRUgsR0FBRyxDQUFDLGlCQUFpQixHQUFHLElBQUksTUFBTSxDQUFDO0lBQ2pDLEtBQUssRUFBRSwyQkFBMkI7SUFDbEMsS0FBSyxFQUFFLFFBQVEsQ0FBQztRQUNkLEVBQUUsRUFBRSxZQUFZO1FBQ2hCLEVBQUUsRUFBRSxZQUFZO1FBQ2hCLEVBQUUsRUFBRSxZQUFZO0tBQ2pCLENBQUM7SUFDRixPQUFPLEVBQUUsS0FBSyxJQUFJLEVBQUU7UUFDbEIsTUFBTSxnQ0FBZ0MsQ0FDcEMsTUFBTSxDQUFDLFVBQVUsRUFDakIsRUFBRSxhQUFhLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFDM0MsWUFBWSxFQUNaLElBQUksQ0FDTCxDQUFDO1FBQ0YsV0FBVyxFQUFFLENBQUMsQ0FBQyxrQ0FBa0M7SUFDbkQsQ0FBQztDQUNGLENBQUMsQ0FBQztBQUVILEdBQUcsQ0FBQyxXQUFXLEdBQUcsSUFBSSxNQUFNLENBQUM7SUFDM0IsS0FBSyxFQUFFLGdCQUFnQjtJQUN2QixLQUFLLEVBQUUsUUFBUSxDQUFDO1FBQ2QsRUFBRSxFQUFFLGNBQWM7UUFDbEIsRUFBRSxFQUFFLGtCQUFrQjtRQUN0QixFQUFFLEVBQUUsZ0JBQWdCO0tBQ3JCLENBQUM7SUFDRixPQUFPLEVBQUUsQ0FBQyxPQUFnQixLQUFLLEVBQUUsRUFBRTtRQUNqQyxDQUFDLGVBQWUsRUFBRSxlQUFlLENBQUM7YUFDL0IsT0FBTyxDQUFDLEtBQUssRUFBQyxJQUFJLEVBQUMsRUFBRTtZQUNwQixJQUFJLENBQUMsSUFBSTtnQkFBRSxPQUFPO1lBQ2xCLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFBRSxPQUFPO1lBQzVCLE1BQU0sZUFBZSxDQUFDLGVBQWUsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNoRCxDQUFDLENBQUMsQ0FBQztRQUVMLElBQUksTUFBTSxLQUFLLE9BQU8sQ0FBQyxRQUFRO1lBQzdCLE9BQU8sS0FBSyxDQUFDLHdGQUF3RixDQUFDLENBQUMsQ0FBQyx5RUFBeUU7UUFDbkwsOEJBQThCO1FBRTlCLEdBQUcsQ0FBQyxXQUFXLENBQUMsUUFBUSxHQUFHO1lBQ3pCLEdBQUcsQ0FBQyxhQUFhO1lBQ2pCLEdBQUcsQ0FBQyxhQUFhO1lBQ2pCLEdBQUcsQ0FBQyxjQUFjO1lBQ2xCLEdBQUcsQ0FBQyxrQkFBa0I7WUFDdEIsR0FBRyxDQUFDLGNBQWM7WUFDbEIsR0FBRyxDQUFDLGtCQUFrQjtZQUN0QixHQUFHLENBQUMsVUFBVTtTQUNmLENBQUM7UUFFRixDQUFDLFNBQVMsNEJBQTRCO1lBQ3BDLElBQUksSUFBSTtnQkFBRSxPQUFPLENBQUMsNEZBQTRGO1lBQzlHLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7Z0JBQUUsT0FBTztZQUNyRSxJQUFJLGtCQUFrQixLQUFLLFlBQVksQ0FBQyxZQUFZO2dCQUFFLE9BQU87WUFFN0QsQ0FBQyxTQUFTLGtCQUFrQjtnQkFDMUIsSUFBSSxPQUFPLEtBQUssQ0FBQztvQkFBRSxPQUFPO2dCQUMxQiw4TEFBOEw7Z0JBQzlMLEdBQUcsQ0FBQyxXQUFXLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDM0YsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUVMLENBQUMsU0FBUyxhQUFhO2dCQUNyQixnRkFBZ0Y7Z0JBQ2hGLElBQUksT0FBTyxHQUFHLENBQUM7b0JBQUUsT0FBTztnQkFDeEIsSUFBSSxHQUFHLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQztvQkFBRSxPQUFPO2dCQUNoRSxHQUFHLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ2pELENBQUMsQ0FBQyxFQUFFLENBQUM7WUFFTCxDQUFDLFNBQVMsZ0JBQWdCO2dCQUN4QixJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUM7b0JBQUUsT0FBTztnQkFDckMsNEVBQTRFO2dCQUM1RSxHQUFHLENBQUMsV0FBVyxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsS0FBSyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBRTdGLElBQUksR0FBRyxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQztvQkFBRSxPQUFPO2dCQUN0RSxxSkFBcUo7Z0JBQ3JKLEdBQUcsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQztZQUMxRCxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ1AsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUVMLENBQUMsU0FBUyxNQUFNO1lBQ2QsSUFBSSxDQUFDLElBQUk7Z0JBQUUsT0FBTztZQUNsQixHQUFHLENBQUMsV0FBVyxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQSxrREFBa0Q7WUFFbk4sSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLEVBQUUsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7Z0JBQy9ELEdBQUcsQ0FBQyxXQUFXLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssS0FBSyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFBLGlDQUFpQztRQUMzSSxDQUFDLENBQUMsRUFBRSxDQUFDO1FBRUwsT0FBTyxHQUFHLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQztJQUNsQyxDQUFDO0NBQ0YsQ0FBQyxDQUFDO0FBRUgsR0FBRyxDQUFDLFdBQVcsR0FBRyxJQUFJLE1BQU0sQ0FBQztJQUMzQixLQUFLLEVBQUUsZ0JBQWdCO0lBQ3ZCLEtBQUssRUFBRSxRQUFRLENBQUMsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLGVBQWUsRUFBRSxDQUFDO0lBQ3BFLFdBQVcsRUFBRSxJQUFJLGdCQUFnQixFQUFFO0lBQ25DLFNBQVMsRUFBRSxHQUFHLENBQUMsUUFBUTtJQUN2QixTQUFTLEVBQUUsQ0FBQyxHQUFHLGdCQUFnQixDQUFDO0lBQ2hDLFFBQVEsRUFBRSxFQUFFO0lBQ1osT0FBTyxFQUFFLENBQUMsT0FBZ0IsS0FBSyxFQUFFLEtBQWdCLEVBQUUsRUFBRTtRQUNuRCxJQUFJLENBQUMsSUFBSSxJQUFJLEdBQUcsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDO1lBQzlDLE9BQU8sR0FBRyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUM7UUFDbEMsTUFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1FBRTFDLElBQUksSUFBSSxJQUFJLEtBQUs7WUFDZixPQUFPLFlBQVksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBLHdIQUF3SDtRQUc1SyxDQUFDLFNBQVMsMEJBQTBCO1lBQ2xDLEdBQUcsQ0FBQyxXQUFXLENBQUMsUUFBUSxHQUFHLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUU3QyxDQUFDLFNBQVMsbUJBQW1CO2dCQUMzQixNQUFNLFlBQVksR0FBRyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsaUJBQWlCLEVBQUUsTUFBTSxDQUFDLFdBQVcsR0FBRyxnQkFBZ0IsQ0FBQyxDQUFDO2dCQUNyRyxNQUFNLGVBQWUsR0FBRyxJQUFJLE1BQU0sQ0FBQztvQkFDakMsS0FBSyxFQUFFLGlCQUFpQjtvQkFDeEIsS0FBSyxFQUFFLFFBQVEsQ0FBQzt3QkFDZCxFQUFFLEVBQUUsWUFBWTt3QkFDaEIsRUFBRSxFQUFFLGtCQUFrQjt3QkFDdEIsRUFBRSxFQUFFLGlCQUFpQjtxQkFDdEIsQ0FBQztvQkFDRixRQUFRLEVBQUUsWUFBWSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDM0QsQ0FBQyxDQUFDO2dCQUVILEdBQUcsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztnQkFHL0MsU0FBUyxjQUFjLENBQUMsS0FBYTtvQkFDbkMsSUFBSSxLQUFLLEdBQUcsU0FBUyxDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLFNBQVMsQ0FBQztvQkFDNUQsSUFBSSxDQUFDLEtBQUs7d0JBQUUsT0FBTyxTQUFTLENBQUM7b0JBQzdCLE9BQU8sSUFBSSxNQUFNLENBQUM7d0JBQ2hCLEtBQUssRUFBRSxnQkFBZ0IsR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7d0JBQ3pELEtBQUssRUFBRSxRQUFRLENBQUM7NEJBQ2QsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDOzRCQUN6RCxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7eUJBQzFELENBQUM7d0JBQ0YsT0FBTyxFQUFFLEdBQUcsRUFBRTs0QkFDWixXQUFXLENBQUM7Z0NBQ1YsS0FBSyxFQUFFLEtBQUs7Z0NBQ1osU0FBUyxFQUFFLEdBQUcsQ0FBQyxXQUFXLENBQUMsU0FBUztnQ0FDcEMsU0FBUyxFQUFFLFlBQVk7Z0NBQ3ZCLGlCQUFpQixFQUFFLElBQUk7Z0NBQ3ZCLGlCQUFpQixFQUFFLElBQUk7NkJBQ3hCLENBQUMsQ0FBQzs0QkFDSCxXQUFXLEVBQUUsQ0FBQzt3QkFDaEIsQ0FBQztxQkFDRixDQUFDLENBQUM7Z0JBQ0wsQ0FBQztZQUNILENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDUCxDQUFDLENBQUMsRUFBRSxDQUFDO1FBRUwsV0FBVyxFQUFFLENBQUM7UUFFZCxTQUFTLFlBQVksQ0FBQyxLQUEyQztZQUMvRCxJQUFJLENBQUMsS0FBSztnQkFBRSxPQUFPO1lBRW5CLE9BQU8sS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFO2dCQUN2QyxNQUFNLE9BQU8sR0FBRyxJQUFJLE1BQU0sQ0FBQztvQkFDekIsS0FBSyxFQUFFLEtBQUssR0FBRyxJQUFJO29CQUNuQixLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztvQkFDZCxXQUFXLEVBQUUsSUFBSSxnQkFBZ0IsRUFBRTtvQkFDbkMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxXQUFXO29CQUMxQixlQUFlLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxXQUFXLEdBQUcsSUFBSSxPQUFPLENBQUM7b0JBQ3RELGdCQUFnQixFQUFFLEdBQUcsRUFBRSxDQUFDLHNCQUFzQixDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsTUFBTSxHQUFHLEtBQUssRUFBRSxJQUFJLENBQUM7aUJBQzVHLENBQUMsQ0FBQztnQkFDSCxJQUFJLElBQUk7b0JBQUUsT0FBTyxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUMsWUFBWSxDQUFDO2dCQUM5QyxPQUFPLE9BQU8sQ0FBQztZQUNqQixDQUFDLENBQUMsQ0FBQztZQUdILFNBQVMsc0JBQXNCLENBQUMsV0FBNkIsRUFBRSxRQUFnQixFQUFFLElBQW9CLEVBQUUsS0FBWSxFQUFFLElBQWE7Z0JBRWhJLENBQUMsU0FBUyx3QkFBd0I7b0JBQ2hDLE1BQU0sTUFBTSxHQUFHLHVCQUF1QixDQUFDLFdBQVcsRUFBRSxNQUFNLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNqRixJQUFJLENBQUMsTUFBTTt3QkFBRSxPQUFPO29CQUVwQixDQUFDLFNBQVMsZUFBZTt3QkFDdkIsSUFBSSxJQUFJOzRCQUFFLE9BQU87d0JBQ2pCLE1BQU0sS0FBSyxHQUFHOzRCQUNaLE1BQU0sQ0FBQyxZQUFZO2dDQUNuQixtQkFBbUI7NEJBQ25CLE1BQU0sQ0FBQyxZQUFZO2dDQUNuQixtQkFBbUI7NEJBQ25CLE1BQU0sQ0FBQyxZQUFZO2dDQUNuQixtQkFBbUI7NEJBQ25CLE1BQU0sQ0FBQyxZQUFZO2dDQUNuQixtQkFBbUI7NEJBQ25CLE1BQU0sQ0FBQyxXQUFXLEdBQUcsU0FBUzt5QkFDL0IsQ0FBQzt3QkFFRixJQUFJLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsK0dBQStHOzRCQUNwSSxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUEsRUFBRSxDQUFBLE1BQU0sQ0FBQyxXQUFXLEdBQUcsUUFBUSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7NkJBQy9GLElBQUksSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxxQ0FBcUM7NEJBQy9ELEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsR0FBRyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMscUVBQXFFO3dCQUUxSCxNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLFNBQVMsQ0FBQyxDQUFDO3dCQUU1RixZQUFZLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUEsNERBQTREO29CQUUzRixDQUFDLENBQUMsRUFBRSxDQUFDO29CQUVMLENBQUMsU0FBUyxZQUFZO3dCQUNwQixJQUFJLFlBQVksQ0FBQyxXQUFXLEtBQUssWUFBWSxDQUFDLENBQUMsQ0FBQzs0QkFBRSxPQUFPLENBQUEsNENBQTRDO3dCQUNyRyxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLEdBQUcsTUFBTSxDQUFDLFdBQVcsUUFBUSxLQUFLLEVBQUUsRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLFNBQVMsQ0FBQyxDQUFDO3dCQUNwSCxZQUFZLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO29CQUMvQixDQUFDLENBQUMsRUFBRSxDQUFDO2dCQUNQLENBQUMsQ0FBQyxFQUFFLENBQUM7Z0JBRUwsQ0FBQyxTQUFTLHNCQUFzQjtvQkFDOUIsTUFBTSxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLG1CQUFtQixFQUFFLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDLENBQUM7b0JBRXBHLE1BQU0sQ0FBQyxhQUFhLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsZ0JBQWdCLEVBQUUsZ0JBQWdCLEVBQUUsV0FBVyxFQUFFLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxrQkFBa0IsRUFBRSxxQkFBcUIsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDLENBQUM7b0JBRXBULE1BQU0sY0FBYyxHQUFXLE1BQU0sQ0FBQyxVQUFVLEdBQUcsY0FBYyxDQUFDO29CQUVsRSxNQUFNLE1BQU0sR0FBRyx1QkFBdUIsQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFFOUUsQ0FBQyxTQUFTLFNBQVM7d0JBQ2pCLElBQUksSUFBSTs0QkFBRSxPQUFPO3dCQUNqQixNQUFNLE1BQU0sR0FBRyxXQUFXLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksU0FBUyxDQUFDLENBQUM7d0JBRXBHLFlBQVksQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUE7d0JBRTVCLFNBQVMsV0FBVzs0QkFDbEIsSUFBSSxlQUFlLEdBQWE7Z0NBQzlCLGFBQWE7Z0NBQ2IsS0FBSztnQ0FDTCxTQUFTO2dDQUNULFNBQVM7Z0NBQ1QsVUFBVTtnQ0FDVixLQUFLO2dDQUNMLGdCQUFnQjtnQ0FDaEIsZ0JBQWdCO2dDQUNoQixTQUFTO2dDQUNULE1BQU0sQ0FBQyxXQUFXLEdBQUcsUUFBUSxHQUFHLEtBQUs7Z0NBQ3JDLFdBQVc7Z0NBQ1gsU0FBUzs2QkFDVixDQUFDOzRCQUdGLElBQUksSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0NBQ3BCLGVBQWUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLDJGQUEyRjtpQ0FFakgsSUFBSSxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7Z0NBQzVCLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFDekIsZ0JBQWdCLEVBQ2hCLGdCQUFnQixFQUNoQixTQUFTLEVBQ1QsTUFBTSxDQUFDLFdBQVcsR0FBRyxRQUFRLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQSxrREFBa0Q7Z0NBQ2pHLDZDQUE2QztnQ0FDN0MsZUFBZSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxHQUFHLFFBQVEsR0FBRyxpQkFBaUIsQ0FBQyxDQUFDOzRCQUMxRSxDQUFDOzRCQUFBLENBQUM7NEJBRUYsSUFBSSxDQUNGO2dDQUNFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0NBQ1QsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQ0FDVCxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOzZCQUNWLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztnQ0FDaEIsZUFBZSxHQUFHLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFBLHFFQUFxRTs0QkFFMUksT0FBTyxlQUFlLENBQUE7d0JBRXhCLENBQUM7b0JBQ0gsQ0FBQyxDQUFDLEVBQUUsQ0FBQztvQkFFTCxDQUFDLFNBQVMsTUFBTTt3QkFDZCxJQUFJLENBQUMsSUFBSTs0QkFBRSxPQUFPO3dCQUNoQixNQUFNLE1BQU0sR0FBRyxXQUFXLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQSxTQUFTLENBQUMsS0FBSyxFQUFFLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUcsU0FBUyxDQUFDLENBQUM7d0JBRWxHLFlBQVksQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUE7d0JBRTVCLFNBQVMsV0FBVzs0QkFDbEIseUVBQXlFOzRCQUN2RSxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsQ0FBQztnQ0FDaEIsK0RBQStEO2dDQUMvRCxPQUFPO29DQUNMLFVBQVU7b0NBQ1YsS0FBSztvQ0FDTCxjQUFjO29DQUNkLGdCQUFnQjtvQ0FDaEIsU0FBUztpQ0FDVixDQUFDOzRCQUNKLENBQUM7aUNBQU0sSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLENBQUM7Z0NBQ3JCLHNFQUFzRTtnQ0FDdEUsT0FBTyxDQUFDLEtBQUssRUFBRSxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUM7NEJBQ3ZDLENBQUM7aUNBQU0sQ0FBQztnQ0FDTixrQ0FBa0M7Z0NBQ2xDLE9BQU87b0NBQ0wsZ0JBQWdCO29DQUNoQixnQkFBZ0I7b0NBQ2hCLFNBQVM7aUNBQ1YsQ0FBQzs0QkFDSixDQUFDO3dCQUVILENBQUM7b0JBRUwsQ0FBQyxDQUFDLEVBQUUsQ0FBQTtnQkFDTixDQUFDLENBQUMsRUFBRSxDQUFDO2dCQUVMLE1BQU0sUUFBUSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBcUIsQ0FBQztnQkFFdEUsQ0FBQyxTQUFTLGVBQWU7b0JBQ3ZCLElBQUksSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQUUsT0FBTyxDQUFBLHNIQUFzSDtvQkFDckosTUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQ3ZDLEdBQUcsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFVBQVUsQ0FBQyxNQUFNLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQyxDQUNqRSxDQUFDO29CQUVGLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO3lCQUNwQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztnQkFDbEMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztnQkFFTCxDQUFDLFNBQVMscUJBQXFCO29CQUM3QixNQUFNLFVBQVUsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEtBQUssTUFBTSxDQUFDLFdBQVcsR0FBRyxjQUFjLENBQUMsQ0FBQztvQkFFbkcsYUFBYSxFQUFFLENBQUM7b0JBRWhCLFNBQVMsYUFBYTt3QkFDcEIsdURBQXVEO3dCQUN2RCxJQUFJLElBQUk7NEJBQUUsVUFBVTtpQ0FDakIsT0FBTyxDQUFDLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7OzRCQUNuRyxVQUFVO2lDQUNaLE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFBO3dCQUV2RyxTQUFTLFdBQVcsQ0FBQyxHQUFtQixFQUFFLEdBQVc7NEJBQ25ELElBQUksQ0FBQyxHQUFHO2dDQUFFLE9BQU87NEJBQ2pCLEdBQUcsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dDQUN4QixJQUFJLENBQUMsS0FBSyxLQUFLO29DQUFFLEdBQUcsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFBOzRCQUMxQyxDQUFDLENBQUMsQ0FBQzs0QkFDSCxHQUFHLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDekIsQ0FBQztvQkFDSCxDQUFDO29CQUFBLENBQUM7Z0JBRU4sQ0FBQyxDQUFDLEVBQUUsQ0FBQztnQkFFTCxDQUFDLFNBQVMsbUJBQW1CO29CQUMzQixRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUU7d0JBQzNCLE9BQU8sQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUM7d0JBQy9DLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxRQUFRLENBQUM7NkJBQ25DLE9BQU8sQ0FBQyxDQUFDLFNBQVMsRUFBRSxFQUFFOzRCQUN2QixPQUFPLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQSw4QkFBOEI7NEJBQy9GLE1BQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQSw0QkFBNEI7NEJBQzdFLE9BQU8sQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFBO3dCQUM1RCxDQUFDLENBQ0EsQ0FBQztvQkFDSixDQUFDLENBQUMsQ0FBQztnQkFDTCxDQUFDLENBQUMsRUFBRSxDQUFDO2dCQUVMLFNBQVMsWUFBWSxDQUFDLE1BQW1CLEVBQUUsTUFBcUI7b0JBQzlELDJCQUEyQixDQUFDO3dCQUMxQixNQUFNLEVBQUUsTUFBTTt3QkFDZCxTQUFTLEVBQUUsWUFBWSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUM7d0JBQzNDLFFBQVEsRUFBRTs0QkFDUixhQUFhLEVBQUUsYUFBYTs0QkFDNUIsRUFBRSxFQUFFLE1BQU07eUJBQ1g7d0JBQ0QsU0FBUyxFQUFFLFdBQVc7cUJBQ3ZCLENBQUMsQ0FBQztnQkFDTCxDQUFDO1lBRUgsQ0FBQztZQUFBLENBQUM7UUFFSixDQUFDO0lBRUgsQ0FBQztDQUNGLENBQUMsQ0FBQztBQUVILEdBQUcsQ0FBQyxRQUFRLEdBQUcsSUFBSSxNQUFNLENBQUM7SUFDeEIsS0FBSyxFQUFFLGFBQWE7SUFDcEIsS0FBSyxFQUFFLFFBQVEsQ0FBQztRQUNkLEVBQUUsRUFBRSxxQkFBcUI7UUFDekIsRUFBRSxFQUFFLHFCQUFxQjtRQUN6QixFQUFFLEVBQUUsa0JBQWtCO0tBQ3ZCLENBQUM7SUFDRixPQUFPLEVBQUUsR0FBYSxFQUFFO1FBQ3RCLElBQUksR0FBRyxDQUFDLFFBQVEsQ0FBQyxRQUFRO1lBQUUsT0FBTyxHQUFHLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQztRQUV4RCxNQUFNLElBQUksR0FBRztZQUNYO2dCQUNFLEVBQUUsRUFBRSxPQUFPO2dCQUNYLEVBQUUsRUFBRSxVQUFVO2dCQUNkLEVBQUUsRUFBRSxRQUFRO2FBQ2I7WUFDRDtnQkFDRSxFQUFFLEVBQUUsU0FBUztnQkFDYixFQUFFLEVBQUUsT0FBTztnQkFDWCxFQUFFLEVBQUUsUUFBUTthQUNiO1lBQ0Q7Z0JBQ0UsRUFBRSxFQUFFLFNBQVM7Z0JBQ2IsRUFBRSxFQUFFLE9BQU87Z0JBQ1gsRUFBRSxFQUFFLFNBQVM7YUFDZDtZQUNEO2dCQUNFLEVBQUUsRUFBRSxVQUFVO2dCQUNkLEVBQUUsRUFBRSxVQUFVO2dCQUNkLEVBQUUsRUFBRSxXQUFXO2FBQ2hCO1lBQ0Q7Z0JBQ0UsRUFBRSxFQUFFLFFBQVE7Z0JBQ1osRUFBRSxFQUFFLE9BQU87Z0JBQ1gsRUFBRSxFQUFFLFVBQVU7YUFDZjtZQUNEO2dCQUNFLEVBQUUsRUFBRSxRQUFRO2dCQUNaLEVBQUUsRUFBRSxVQUFVO2dCQUNkLEVBQUUsRUFBRSxRQUFRO2FBQ2I7WUFDRDtnQkFDRSxFQUFFLEVBQUUsT0FBTztnQkFDWCxFQUFFLEVBQUUsUUFBUTtnQkFDWixFQUFFLEVBQUUsVUFBVTthQUNmO1NBQ0YsQ0FBQztRQUVGLE1BQU0sV0FBVyxHQUFHO1lBQ2xCLEVBQUUsRUFBRSxhQUFhO1lBQ2pCLEVBQUUsRUFBRSxpQkFBaUI7WUFDckIsRUFBRSxFQUFFLGlCQUFpQjtTQUN0QixDQUFDO1FBQ0YsTUFBTSxRQUFRLEdBQUc7WUFDZixFQUFFLEVBQUUsWUFBWTtZQUNoQixFQUFFLEVBQUUsYUFBYTtZQUNqQixFQUFFLEVBQUUsYUFBYTtTQUNsQixDQUFBO1FBQ0QsR0FBRyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEdBQUc7WUFDdEIsU0FBUyxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDekMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztpQkFDckIsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLE9BQU8sQ0FBQztpQkFDMUIsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsRUFBRSxFQUFFLEVBQUUsUUFBUSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxRQUFRLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLFFBQVEsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUNsSSxDQUFDO1FBRUYsc0JBQXNCLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQSw4QkFBOEI7UUFFaEUsT0FBTyxHQUFHLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQztRQUU3QixTQUFTLFNBQVMsQ0FBQyxHQUFXLEVBQUUsS0FBbUI7WUFDakQsSUFBSSxJQUFJLEdBQVcsU0FBUyxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3ZDLEdBQUcsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLEdBQUcsR0FBRyxPQUFPLENBQUMsR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUMsR0FBRyxXQUFXLENBQUM7WUFFOUYsc0JBQXNCLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBLDRDQUE0QztZQUVuRixJQUFJLE1BQU0sR0FBRyxNQUFNLENBQUM7WUFFcEIsSUFBSSxHQUFHLEdBQUcsSUFBSSxNQUFNLENBQUM7Z0JBQ25CLEtBQUssRUFBRSxPQUFPO2dCQUNkLEtBQUssRUFBRSxLQUFLO2dCQUNaLFNBQVMsRUFBRSxnQkFBZ0I7Z0JBQzNCLFdBQVcsRUFBRSxJQUFJLGdCQUFnQixFQUFFO2dCQUNuQyxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsaUJBQWlCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxNQUFNLENBQUM7YUFDbkQsQ0FBQyxDQUFDO1lBQ0gsT0FBTyxHQUFHLENBQUE7UUFDWixDQUFDO1FBRUQsU0FBUyxpQkFBaUIsQ0FBQyxHQUFXLEVBQUUsTUFBYyxPQUFPLEVBQUUsU0FBaUIsTUFBTTtZQUNwRixXQUFXLEVBQUUsQ0FBQztZQUNkLE1BQU0sUUFBUSxHQUFHLFNBQVMsRUFBRSxDQUFDLFFBQVEsQ0FBQztZQUN0QyxJQUFJLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO2dCQUN4QixPQUFPLEdBQUcsQ0FBQyxlQUFlLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUU5QyxHQUFHLENBQUMsZUFBZTtnQkFDakIsUUFBUSxDQUFDLElBQUk7cUJBQ1YsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFFekMsU0FBUyxjQUFjLENBQUMsS0FBYTtnQkFDbkMsSUFBSSxFQUFFLEdBQVcsYUFBYSxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQztnQkFFNUMsSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztvQkFDdkIsS0FBSyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO2dCQUVuQyxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLGtCQUFrQixDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztvQkFDeEQsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUEsNkRBQTZEO3FCQUUvSyxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLHVCQUF1QixDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLFVBQVUsQ0FBQztvQkFDekksT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3FCQUUzSCxJQUFJLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztvQkFDdEMsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEtBQUssR0FBRyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUM7cUJBRTNFLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsc0JBQXNCLEdBQUcsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsRUFBRSxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztvQkFDekksT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxpREFBaUQsQ0FBQyxDQUFDOztvQkFDekUsT0FBTyxLQUFLLENBQUM7WUFDcEIsQ0FBQztRQUVILENBQUM7UUFBQSxDQUFDO0lBRUosQ0FBQztDQUNGLENBQUMsQ0FBQztBQUVILEdBQUcsQ0FBQyxjQUFjLEdBQUcsSUFBSSxNQUFNLENBQUM7SUFDOUIsS0FBSyxFQUFFLGdCQUFnQjtJQUN2QixLQUFLLEVBQUUsUUFBUSxDQUFDO1FBQ2QsRUFBRSxFQUFFLGlCQUFpQjtRQUNyQixFQUFFLEVBQUUsaUJBQWlCO1FBQ3JCLEVBQUUsRUFBRSx3QkFBd0I7S0FDN0IsQ0FBQztJQUNGLFNBQVMsRUFBRSxDQUFDLEdBQUcsZ0JBQWdCLENBQUM7SUFDaEMsV0FBVyxFQUFFLElBQUksZ0JBQWdCLEVBQUU7SUFDbkMsT0FBTyxFQUFFLEdBQWEsRUFBRTtRQUN0QixHQUFHLENBQUMsY0FBYyxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsQ0FBQSwrSkFBK0o7UUFDaE0sR0FBRyxDQUFDLGNBQWMsQ0FBQyxlQUFlLEdBQUcsQ0FBQyxHQUFHLFNBQVMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FDbEUsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLFVBQVUsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQ3JELENBQUMsQ0FBQyw4RUFBOEU7UUFFakYsSUFBSSxPQUFPLEtBQUssQ0FBQztZQUNmLDhIQUE4SDtZQUM5SCxHQUFHLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQ3ZDLEdBQUcsQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FDeEMsTUFBTSxDQUFDLFdBQVcsR0FBRyxZQUFZLENBQ2xDLEVBQ0QsQ0FBQyxFQUFFLHlFQUF5RTtZQUM1RSxNQUFNLENBQUMsY0FBYyxHQUFHLGdCQUFnQixDQUN6QyxDQUFDO2FBQ0MsSUFBSSxPQUFPLEtBQUssQ0FBQyxJQUFJLFVBQVUsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDO1lBQ3ZELHFLQUFxSztZQUNySyxHQUFHLENBQUMsY0FBYyxDQUFDLGVBQWUsR0FBRyxHQUFHLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQzVFLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FDUixDQUFDLEtBQUssQ0FBQyxVQUFVLENBQ2YsTUFBTSxDQUFDLFdBQVcsR0FBRyxpQkFBaUIsQ0FDdkMsQ0FDSixDQUFDO1FBRUosV0FBVyxFQUFFLENBQUM7UUFDZCxPQUFPLEdBQUcsQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDO0lBQzVDLENBQUM7SUFDRCxnQkFBZ0IsRUFBRSxLQUFLLEVBQUUsTUFBYyxHQUFHLENBQUMsY0FBYyxFQUFFLGVBQXVCLE1BQU0sQ0FBQyxhQUFhLEVBQUUsRUFBRTtRQUN4RyxNQUFNLFdBQVcsR0FBRyxHQUFHLENBQUMsV0FBVyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxXQUFXO1lBQUUsT0FBTztRQUV6QixDQUFDLFNBQVMsaUJBQWlCO1lBQ3pCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxZQUFZLEdBQUcsY0FBYyxFQUFFLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxRQUFRLENBQTJCLENBQUMsQ0FBQSxtR0FBbUc7WUFFblEsSUFBSSxDQUFDLE1BQU0sSUFBSSxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUM7Z0JBQUUsT0FBTztZQUV6QyxJQUFJLE1BQWMsQ0FBQztZQUNuQixJQUFJLEdBQUcsS0FBSyxHQUFHLENBQUMsY0FBYztnQkFDNUIsTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUM7aUJBQzdCLElBQUksR0FBRyxLQUFLLEdBQUcsQ0FBQyxjQUFjO2dCQUNqQyxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQztpQkFDN0IsSUFBSSxHQUFHLEtBQUssR0FBRyxDQUFDLGNBQWM7Z0JBQ2pDLE1BQU0sR0FBRyxRQUFRLENBQUMsVUFBVSxDQUFDO2lCQUMxQixJQUFJLEdBQUcsQ0FBQyxLQUFLLEtBQUssR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLO2dCQUNyQyxNQUFNLEdBQUcsUUFBUSxDQUFDLFdBQVcsQ0FBQztZQUVoQyxJQUFJLENBQUMsTUFBTTtnQkFBRSxPQUFPO1lBRXBCLFlBQVksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDO2lCQUM5QixPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ2QsTUFBTSxLQUFLLEdBQUcsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQzVELElBQUksQ0FBQyxLQUFLO29CQUFFLE9BQU87Z0JBQ25CLEtBQUssQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUN4RixDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFFTCxDQUFDLFNBQVMsNEJBQTRCO1lBQ3BDLE1BQU0sUUFBUSxHQUNaLE1BQU0sQ0FBQyxZQUFZO2dCQUNuQiwwQkFBMEIsQ0FBQztZQUU3QixNQUFNLGdCQUFnQixHQUFHLHVCQUF1QixDQUFDLFdBQVcsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLG9FQUFvRTtZQUU3SSxJQUFJLGdCQUFnQixDQUFDLE1BQU0sR0FBRyxDQUFDO2dCQUFFLE9BQU8sQ0FBQywrQ0FBK0M7WUFDeEYsTUFBTSxNQUFNLEdBQUcsZ0JBQWdCLEVBQUUsTUFBTSxDQUFDO1lBQ3hDLGdCQUFnQjtpQkFDYixNQUFNLENBQ0wsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUNWLGdCQUFnQixFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO2dCQUN0QyxnQkFBZ0IsRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsTUFBTSxHQUFHLENBQUMsQ0FDbEQ7aUJBQ0EsT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztZQUUxQyxJQUFJLEdBQUcsS0FBSyxHQUFHLENBQUMsY0FBYztnQkFDNUIsZ0JBQWdCLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMscUNBQXFDOztnQkFFNUUsZ0JBQWdCLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUEsOEJBQThCO1lBRXRFLElBQUksWUFBWSxHQUFHLFNBQVMsQ0FBQyxRQUFRLEVBQUUsV0FBVyxDQUFlLENBQUMsQ0FBQyx5SEFBeUg7WUFFNUwsSUFBSSxDQUFDLFlBQVk7Z0JBQ2YsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLG1DQUFtQyxDQUFDLENBQUM7WUFDMUQsWUFBWSxHQUFHLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBRXhDLE1BQU0sU0FBUyxHQUFHLElBQUksTUFBTSxDQUFDO2dCQUMzQixLQUFLLEVBQUUsY0FBYztnQkFDckIsS0FBSyxFQUFFLFFBQVEsQ0FBQztvQkFDZCxFQUFFLEVBQUUsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLHNDQUFzQztvQkFDM0YsRUFBRSxFQUFFLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxzQ0FBc0M7aUJBQzVGLENBQUM7Z0JBQ0YsUUFBUSxFQUFFLEdBQUcsQ0FBQyxZQUFZO2dCQUMxQixXQUFXLEVBQUUsSUFBSSxnQkFBZ0IsRUFBRTtnQkFDbkMsT0FBTyxFQUFFLEdBQUcsRUFBRTtvQkFDWixXQUFXLENBQUM7d0JBQ1YsS0FBSyxFQUFFLFlBQVk7d0JBQ25CLFNBQVMsRUFBRSxHQUFHLENBQUMsY0FBYyxDQUFDLFNBQVM7d0JBQ3ZDLFFBQVEsRUFBRSxTQUFTLENBQUMsV0FBVzt3QkFDL0IsU0FBUyxFQUFFLFNBQVMsQ0FBQyxXQUFXO3dCQUNoQyxpQkFBaUIsRUFBRSxLQUFLO3dCQUN4QixpQkFBaUIsRUFBRSxLQUFLO3FCQUN6QixDQUFDLENBQUM7Z0JBRUwsQ0FBQzthQUNGLENBQUMsQ0FBQztZQUVILG1CQUFtQixDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsa0JBQWtCLEVBQUUsYUFBYSxDQUFDLENBQUM7UUFDMUYsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUVMLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUM7WUFBRSxPQUFPLENBQUEsa0ZBQWtGO1FBRXRKLE1BQU0sK0JBQStCLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFM0MsTUFBTSwrQkFBK0IsQ0FBQztZQUNwQyxNQUFNLEVBQUUsWUFBWTtZQUNwQixTQUFTLEVBQUUsWUFBWSxDQUFDLFlBQVksQ0FBQztZQUNyQyxTQUFTLEVBQUUsV0FBVztZQUN0QixNQUFNLEVBQUUsSUFBSTtZQUNaLGNBQWMsRUFBRSxLQUFLO1NBQ3RCLENBQUMsQ0FBQztRQUVILG1CQUFtQixDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRWpDLElBQUksR0FBRyxLQUFLLEdBQUcsQ0FBQyxjQUFjO1lBQUUsT0FBTyxDQUFDLDJFQUEyRTtRQUVuSCxNQUFNLDRCQUE0QixFQUFFLENBQUMsQ0FBQSwrSEFBK0g7UUFFcEssQ0FBQyxTQUFTLHNCQUFzQjtZQUM5QixrRUFBa0U7WUFDbEUsTUFBTSxVQUFVLEdBQUcsSUFBSSxNQUFNLENBQUM7Z0JBQzVCLEtBQUssRUFBRSxtQkFBbUI7Z0JBQzFCLEtBQUssRUFBRSxRQUFRLENBQUM7b0JBQ2QsRUFBRSxFQUFFLHNCQUFzQjtvQkFDMUIsRUFBRSxFQUFFLDBCQUEwQjtvQkFDOUIsRUFBRSxFQUFFLGlCQUFpQjtpQkFDdEIsQ0FBQztnQkFDRixRQUFRLEVBQUUsR0FBRyxDQUFDLFlBQVk7Z0JBQzFCLFNBQVMsRUFBRSxHQUFHLENBQUMsY0FBYyxDQUFDLFNBQVM7Z0JBQ3ZDLFdBQVcsRUFBRSxJQUFJLGdCQUFnQixFQUFFO2dCQUNuQyxlQUFlLEVBQUUsQ0FBQyxNQUFNLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQzthQUNsRCxDQUFDLENBQUM7WUFFSCxtQkFBbUIsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFnQixFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBQzNGLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFFTCxDQUFDLFNBQVMsZUFBZTtZQUN2QixJQUFJLFVBQVUsS0FBSyxNQUFNO2dCQUN2QixZQUFZLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2lCQUNoQyxJQUFJLFVBQVUsS0FBSyxZQUFZLENBQUMsUUFBUTtnQkFDM0MsWUFBWSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQTtpQkFDaEMsSUFBSSxrQkFBa0IsS0FBSyxZQUFZLENBQUMsWUFBWTtnQkFDdkQsWUFBWSxDQUFDLGtCQUFrQixDQUFDLENBQUE7WUFFbEMsU0FBUyxZQUFZLENBQUMsSUFBWTtnQkFDaEMsTUFBTSxTQUFTLEdBQUcsSUFBSSxNQUFNLENBQUM7b0JBQzNCLEtBQUssRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBQyw2SUFBNkk7b0JBQ3JLLEtBQUssRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUs7b0JBQ3ZCLFdBQVcsRUFBRSxJQUFJLGdCQUFnQixFQUFFO29CQUNuQyxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQztvQkFDbEQsZ0JBQWdCLEVBQUUsS0FBSyxJQUFJLEVBQUUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQztpQkFDakYsQ0FBQyxDQUFDO2dCQUVILEdBQUcsQ0FBQyxjQUFjLENBQUMsUUFBUSxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQzFDLE1BQU0sUUFBUSxHQUFHLFdBQVcsQ0FBQyxRQUFRLENBQUM7Z0JBRXRDLElBQUksVUFBVSxLQUFLLE1BQU07b0JBQ3ZCLG1CQUFtQixDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLGFBQWEsRUFBRSxPQUFPLENBQUMsQ0FBQzs7b0JBQ25FLG1CQUFtQixDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEVBQUUsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBRTVGLENBQUM7WUFBQSxDQUFDO1FBQ0osQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUdMOzs7U0FHQztRQUNELEtBQUssVUFBVSwrQkFBK0IsQ0FBQyxHQUFXO1lBQ3hELElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVztnQkFBRSxPQUFPO1lBQzdCLE1BQU0sU0FBUyxHQUNiLENBQUMsR0FBRyxFQUFFO2dCQUNKLE1BQU0sS0FBSyxHQUFhLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQ3JDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDO29CQUM1QyxLQUFLLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxzVkFBc1Y7Z0JBRXhYLGdjQUFnYztnQkFDaGMsTUFBTSxRQUFRLEdBQVcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxJQUFJLENBQ3ZELENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksTUFBTSxDQUFDLENBQUMsc1JBQXNSO2dCQUVuVSxJQUFJLFFBQVEsS0FBSyxPQUFPLENBQUMsUUFBUTtvQkFBRSxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxtRkFBbUY7WUFDM0ksQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUVQLElBQUksTUFBbUIsQ0FBQztZQUV4QixDQUFDLEtBQUssVUFBVSxrQkFBa0I7Z0JBQ2hDLE1BQU0sR0FBRyx1QkFBdUIsQ0FDOUIsV0FBVyxFQUNYLE1BQU0sQ0FBQyxNQUFNLEdBQUcsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBRXJDLElBQUksQ0FBQyxNQUFNO29CQUNULE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQywwQ0FBMEMsQ0FBQyxDQUFDO2dCQUVqRSxJQUFJLE9BQXFCLENBQUM7Z0JBRTFCLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDO29CQUN0RixtTUFBbU07b0JBQ25NLE9BQU8sR0FBRyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsWUFBWSxHQUFHLEtBQUssRUFBRSxpQkFBaUIsQ0FBQyxJQUFJLFNBQVMsQ0FBQyxDQUFDOztvQkFFaEYsT0FBTyxHQUFHLGVBQWUsRUFBRSxDQUFDO2dCQUdqQyxJQUFJLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQztvQkFDcEIsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUNoQixrREFBa0QsQ0FDbkQsQ0FBQztnQkFFSiwyQkFBMkIsQ0FBQztvQkFDMUIsTUFBTSxFQUFFLE9BQU87b0JBQ2YsU0FBUyxFQUFFLEdBQUcsQ0FBQyxTQUFTO29CQUN4QixRQUFRLEVBQUU7d0JBQ1IsYUFBYSxFQUFFLGFBQWE7d0JBQzVCLEVBQUUsRUFBRSxNQUFNLENBQUMsa0JBQWlDO3FCQUM3QztvQkFDRCxTQUFTLEVBQUUsR0FBRyxDQUFDLFdBQVc7aUJBQzNCLENBQUMsQ0FBQztnQkFFSCxzQkFBc0IsQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLGVBQWUsRUFBRSxNQUFNLENBQUMsWUFBWSxFQUFFLGtDQUFrQyxFQUFFLFFBQVEsQ0FBQztvQkFDeEgsRUFBRSxFQUFFLGdCQUFnQjtvQkFDcEIsRUFBRSxFQUFFLGVBQWU7b0JBQ25CLEVBQUUsRUFBRSxjQUFjO2lCQUNuQixDQUFDLENBQUMsQ0FBQztnQkFFSixTQUFTLGVBQWU7b0JBQ3RCLElBQUksUUFBUSxHQUFHO3dCQUNiLE1BQU0sQ0FBQyxZQUFZLEdBQUcsYUFBYSxFQUFFO3dCQUNyQyxNQUFNLENBQUMsWUFBWTtxQkFDcEIsQ0FBQztvQkFHRixJQUFJLFNBQVM7d0JBQ1gsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQzFCOzRCQUNFLEdBQUcsVUFBVTs0QkFDYixZQUFZLENBQUMsVUFBVTs0QkFDdkIsT0FBTyxDQUFDLFFBQVE7NEJBQ2hCLE9BQU8sQ0FBQyxPQUFPOzRCQUNmLE9BQU8sQ0FBQyxlQUFlOzRCQUN2QixPQUFPLENBQUMsU0FBUzt5QkFDbEIsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsaVRBQWlUOzRCQUNqVSxDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxNQUFNLENBQUMsWUFBWSxHQUFHLGVBQWUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDOzRCQUM3RSxDQUFDLENBQUMscUJBQXFCLENBQUMsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQ2pELENBQUMsQ0FBQywwSkFBMEo7b0JBRS9KLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQy9CLFFBQVEsRUFDUixNQUFNLENBQUMsWUFBWSxDQUNwQixDQUFDLENBQUM7Z0JBRUwsQ0FBQztZQUVILENBQUMsQ0FBQyxFQUFFLENBQUM7WUFFTCxDQUFDLEtBQUssVUFBVSxzQkFBc0I7Z0JBQ3BDLE1BQU0sZ0JBQWdCLEdBQWdCLHVCQUF1QixDQUMzRCxHQUFHLENBQUMsV0FBVyxFQUNmLE1BQU0sQ0FBQyxNQUFNLEdBQUcsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBRW5DLElBQUksQ0FBQyxnQkFBZ0I7b0JBQ25CLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyx1Q0FBdUMsQ0FBQyxDQUFDO2dCQUU5RCxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDO3FCQUM5QixNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxjQUFjLENBQUMsTUFBTSxFQUFFLGNBQWMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7cUJBQzVHLFFBQVEsQ0FBQyxVQUFVLENBQUM7b0JBQ3JCLFlBQVksQ0FBQyxTQUFTLEdBQUcsVUFBVSxDQUFDLENBQUMsNEdBQTRHO2dCQUVuSixJQUFJLFFBQVEsR0FBYTtvQkFDdkIsYUFBYTtvQkFDYixVQUFVO29CQUNWLG9CQUFvQjtvQkFDcEIsVUFBVTtvQkFDVixRQUFRO29CQUNSLFVBQVU7b0JBQ1YsUUFBUTtvQkFDUixzQkFBc0I7aUJBQ3ZCLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUMsQ0FBQztnQkFFMUMsSUFBSSxHQUFHLEtBQUssR0FBRyxDQUFDLGNBQWM7b0JBQzVCLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxTQUFTLENBQUM7Z0JBRzNCLElBQUksY0FBYyxHQUFHO29CQUNuQixZQUFZLENBQUMsZUFBZTtvQkFDNUIsWUFBWSxDQUFDLE1BQU07b0JBQ25CLFlBQVksQ0FBQyxRQUFRO29CQUNyQixZQUFZLENBQUMsTUFBTTtpQkFDcEIsQ0FBQyxDQUFDLDRHQUE0RztnQkFFL0csSUFBSSxTQUFTLEVBQUUsQ0FBQztvQkFDZCxJQUFJLEtBQUssR0FBVyxDQUFDLENBQUM7b0JBQ3RCLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTt3QkFDMUIsSUFDRTs0QkFDRSxHQUFHLFVBQVU7NEJBQ2IsT0FBTyxDQUFDLGdCQUFnQjs0QkFDeEIsT0FBTyxDQUFDLFFBQVE7NEJBQ2hCLE9BQU8sQ0FBQyxlQUFlOzRCQUN2QixPQUFPLENBQUMsT0FBTzs0QkFDZixHQUFHLEtBQUs7NEJBQ1IsT0FBTyxDQUFDLFNBQVM7NEJBQ2pCLE9BQU8sQ0FBQyxTQUFTLEVBQUUsNEVBQTRFOzRCQUMvRixPQUFPLENBQUMsZUFBZTs0QkFDdkIsT0FBTyxDQUFDLFNBQVM7eUJBQ2xCLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQzs0QkFFakIsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLG1SQUFtUjs2QkFDM1IsSUFBSSxZQUFZLENBQUMsVUFBVSxFQUFFLENBQUM7NEJBQ2pDLEtBQUssR0FBRyxDQUFDLENBQUM7NEJBQ1YsUUFBUSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUEsbUZBQW1GO3dCQUN0SCxDQUFDOzZCQUNJLElBQUksY0FBYyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDOzRCQUN4QyxJQUFJLFVBQVUsR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDOzRCQUN6QyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQywwRkFBMEY7NEJBQ3ZJLFFBQVEsQ0FBQyxNQUFNLENBQUMsVUFBVSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLG1DQUFtQzs0QkFDdkUsS0FBSyxHQUFHLFNBQVMsQ0FBQyxDQUFDLDBHQUEwRzt3QkFDL0gsQ0FBQzt3QkFHRCxxQkFBcUIsQ0FBQyxRQUFRLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFDbkQsQ0FBQyxDQUFDLENBQUM7Z0JBQ0wsQ0FBQztnQkFFRCxJQUFJLFVBQVUsR0FBaUIsS0FBSyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQ3ZELFFBQVEsRUFDUixNQUFNLENBQUMsVUFBVSxDQUNsQixDQUFDLENBQUM7Z0JBRUgsSUFBSSxVQUFVLENBQUMsTUFBTSxLQUFLLENBQUM7b0JBQ3pCLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDO2dCQUU3RCxJQUFJLE1BQU0sS0FBSyxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUM7b0JBQ2pDLDRGQUE0RjtvQkFDNUYsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7d0JBQ3hCLFVBQVUsR0FBRyxVQUFVOzZCQUNwQixNQUFNLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsOEJBQThCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO3dCQUNwRSxDQUFDOzRCQUNELFVBQVUsR0FBRyxVQUFVO2lDQUNwQixNQUFNLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLFFBQVEsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDLENBQUM7Z0JBQzlFLENBQUM7Z0JBRUQsMkJBQTJCLENBQUM7b0JBQzFCLE1BQU0sRUFBRSxVQUFVO29CQUNsQixTQUFTLEVBQUUsR0FBRyxDQUFDLFNBQVM7b0JBQ3hCLFFBQVEsRUFBRTt3QkFDUixhQUFhLEVBQUUsYUFBYTt3QkFDNUIsRUFBRSxFQUFFLGdCQUFnQixDQUFDLGtCQUFpQztxQkFDdkQ7b0JBQ0QsU0FBUyxFQUFFLEdBQUcsQ0FBQyxXQUFXO2lCQUMzQixDQUFDLENBQUM7Z0JBRUgsc0JBQXNCLENBQ3BCLE1BQU0sQ0FBQyxVQUFVLEdBQUcsc0JBQXNCLEVBQzFDLE1BQU0sQ0FBQyxVQUFVLEVBQ2pCLGdFQUFnRSxNQUFNLENBQUMsS0FBSyxFQUFFLEVBQzlFLFFBQVEsQ0FBQztvQkFDUCxFQUFFLEVBQUUsY0FBYztvQkFDbEIsRUFBRSxFQUFFLGVBQWU7b0JBQ25CLEVBQUUsRUFBRSxjQUFjO2lCQUNuQixDQUFDLENBQUMsQ0FBQztZQUNSLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFFTDs7Ozs7O2VBTUc7WUFDSCxTQUFTLHNCQUFzQixDQUFDLFFBQWdCLEVBQUUsTUFBYyxFQUFFLE1BQWMsRUFBRSxLQUFtQjtnQkFDbkcsTUFBTSxNQUFNLEdBQW1CLHVCQUF1QixDQUFDLFdBQVcsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNwRyxJQUFJLENBQUMsTUFBTTtvQkFBRSxPQUFPO2dCQUNwQixNQUFNLE9BQU8sR0FBRyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFFbkksSUFBSSxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUM7b0JBQUUsT0FBTztnQkFDL0IsTUFBTSxLQUFLLEdBQUcsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNuQyxNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFO29CQUNqQyxNQUFNLE1BQU0sR0FBRyxJQUFJLE1BQU0sQ0FBQzt3QkFDeEIsS0FBSyxFQUFFLEtBQUssR0FBRyxNQUFNLEdBQUcsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRTt3QkFDL0QsS0FBSyxFQUFFLFFBQVEsQ0FBQzs0QkFDZCxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDOzRCQUNyQyxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO3lCQUN0QyxDQUFDO3dCQUNGLFFBQVEsRUFBRSxHQUFHLENBQUMsWUFBWTt3QkFDMUIsV0FBVyxFQUFFLElBQUksZ0JBQWdCLEVBQUU7d0JBQ25DLE9BQU8sRUFBRSxHQUFHLEVBQUU7NEJBQ1osV0FBVyxDQUFDO2dDQUNWLEtBQUssRUFBRSxLQUFLO2dDQUNaLFNBQVMsRUFBRSxnQkFBZ0I7Z0NBQzNCLFNBQVMsRUFBRSxNQUFNLENBQUMsV0FBVztnQ0FDN0IsaUJBQWlCLEVBQUUsS0FBSztnQ0FDeEIsaUJBQWlCLEVBQUUsS0FBSzs2QkFDekIsQ0FBQyxDQUFDO3dCQUNMLENBQUM7cUJBQ0YsQ0FBQyxDQUFDO29CQUNILE9BQU8sTUFBTSxDQUFBO2dCQUNmLENBQUMsQ0FBQyxDQUFDO2dCQUVILENBQUMsU0FBUyxlQUFlO29CQUN2QixNQUFNLEVBQUUsR0FBRyxRQUFRLEdBQUcsTUFBTSxDQUFDO29CQUM3QixNQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUNoRCxTQUFTLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztvQkFDbEIsU0FBUyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUM7b0JBQ3BELE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxhQUFhLEVBQUUsU0FBUyxDQUFDLENBQUM7b0JBRXZELE1BQU0sU0FBUyxHQUFHLElBQUksTUFBTSxDQUFDO3dCQUMzQixLQUFLLEVBQUUsV0FBVyxHQUFHLE1BQU07d0JBQzNCLEtBQUssRUFBRSxLQUFLO3dCQUNaLE9BQU8sRUFBRSxHQUFHLEVBQUU7NEJBQ1osSUFBSSxPQUFPLEdBQUcsWUFBWSxDQUFDLGFBQWEsQ0FBQyxHQUFHLEdBQUcsRUFBRSxHQUFHLE1BQU0sQ0FBQyxDQUFDOzRCQUM1RCxJQUFJLE9BQU87Z0NBQUUsT0FBTyxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7NEJBQ3pELG1CQUFtQixDQUFDLE1BQU0sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sQ0FBQztpQ0FDdkQsRUFBRSxHQUFHLEVBQUUsR0FBRyxNQUFNLENBQUM7d0JBQ3RCLENBQUM7cUJBQ0YsQ0FBQyxDQUFDO29CQUVILGFBQWEsQ0FBQzt3QkFDWixHQUFHLEVBQUUsU0FBUzt3QkFDZCxhQUFhLEVBQUUsU0FBUzt3QkFDeEIsUUFBUSxFQUFFLEdBQUcsQ0FBQyxZQUFZO3dCQUMxQixLQUFLLEVBQUUsS0FBSzt3QkFDWixPQUFPLEVBQUUsU0FBUyxDQUFDLE9BQU8sQ0FBQyxxUUFBcVE7cUJBQ2pTLENBQUMsQ0FBQztnQkFFTCxDQUFDLENBQUMsRUFBRSxDQUFDO1lBR1AsQ0FBQztZQUFBLENBQUM7WUFFRjs7Ozs7O2VBTUc7WUFDSCxTQUFTLHFCQUFxQixDQUM1QixRQUFrQixFQUNsQixTQUFpQixFQUNqQixLQUFhLEVBQ2IsTUFBYztnQkFFZCxJQUFJLENBQUMsS0FBSyxJQUFJLEtBQUssS0FBSyxDQUFDO29CQUFFLE9BQU87Z0JBQ2xDLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxTQUFTLENBQUMsQ0FBQztZQUM1QyxDQUFDO1lBRUQ7Ozs7O2VBS0c7WUFDSCxTQUFTLGVBQWUsQ0FBQyxRQUFrQixFQUFFLE1BQWM7Z0JBQ3pELElBQUksTUFBTSxHQUFvQixJQUFJLEdBQUcsRUFBRSxFQUNyQyxXQUFXLEdBQWlCLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUV6RCxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUU7b0JBQ3hCLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFDLHNEQUFzRDt3QkFDckYsV0FBVzs0QkFDVCx1R0FBdUc7NkJBQ3RHLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQ2Qsa0JBQWtCLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FDM0M7NkJBQ0EsT0FBTyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7O3dCQUVyQyxNQUFNLENBQUMsR0FBRyxDQUNSLFNBQVMsQ0FBQyxRQUFRLEVBQUUsV0FBVyxDQUFlLENBQy9DLENBQUM7Z0JBQ04sQ0FBQyxDQUFDLENBQUM7Z0JBRUgsT0FBTyxNQUFNLENBQUM7WUFDaEIsQ0FBQztRQUNILENBQUM7UUFFRCxLQUFLLFVBQVUsNEJBQTRCO1lBQ3pDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7Z0JBQUUsT0FBTztZQUVyRSxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUM7Z0JBQUUsT0FBTyxDQUFDLHlGQUF5RjtZQUUvSCxNQUFNLE1BQU0sR0FBbUIsdUJBQXVCLENBQ3BELFdBQVcsRUFDWCxNQUFNLENBQUMsTUFBTSxHQUFHLFlBQVksRUFBRSxTQUFTLEVBQUUsTUFBTSxDQUNoRCxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRUwsTUFBTSxLQUFLLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxVQUFVLEdBQUcsS0FBSyxHQUFHLGtCQUFrQixFQUFFLGNBQWMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1lBRTlHLElBQUksQ0FBQyxLQUFLO2dCQUFFLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyw4Q0FBOEMsQ0FBQyxDQUFDO1lBRS9FLE1BQU0sVUFBVSxHQUFHLE1BQU0sNkJBQTZCLENBQUMsS0FBSyxFQUFFLFlBQVksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7WUFHckcsQ0FBQyxTQUFTLGdCQUFnQjtnQkFDeEIsSUFBSSxDQUFDLFVBQVU7b0JBQUUsT0FBTztnQkFDeEIsTUFBTSxLQUFLLEdBQUcsWUFBWSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDOUMsdURBQXVEO2dCQUN2RCxNQUFNLEtBQUssR0FBRztvQkFDWixFQUFFLEVBQUUsWUFBWTtvQkFDaEIsRUFBRSxFQUFFLFlBQVk7b0JBQ2hCLEVBQUUsRUFBRSxZQUFZO2lCQUNqQixDQUFBO2dCQUVELFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxLQUFLLEVBQUUsRUFBRSxLQUFLLENBQUMsZUFBZSxDQUFDLEVBQUUsS0FBSyxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO2dCQUUzRyxXQUFXLENBQUMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQztZQUMzTCxDQUFDLENBQUMsRUFBRSxDQUFDO1lBRUwsQ0FBQyxTQUFTLHdCQUF3QjtnQkFDaEMsMERBQTBEO2dCQUMxRCxNQUFNLFlBQVksR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLFdBQVcsR0FBRyx1Q0FBdUMsRUFBRSxZQUFZLENBQUMsQ0FBQztnQkFFM0csSUFBSSxDQUFDLFlBQVk7b0JBQUUsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLDJDQUEyQyxDQUFDLENBQUM7Z0JBRW5GLFdBQVcsQ0FBQyxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLFlBQVksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLEVBQUUsUUFBUSxFQUFFLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsaUJBQWlCLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLENBQUMsQ0FBQztnQkFFdE4sQ0FBQyxTQUFTLGNBQWM7b0JBQ3RCLG9EQUFvRDtvQkFDcEQsTUFBTSxRQUFRLEdBQUcsdUJBQXVCLENBQ3RDLFdBQVcsRUFDWCxNQUFNLENBQUMsV0FBVyxHQUFHLDhDQUE4QyxDQUFDO3lCQUNuRSxNQUFNLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO29CQUUvRCxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO2dCQUN6RCxDQUFDLENBQUMsRUFBRSxDQUFDO1lBQ1AsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUNQLENBQUM7UUFBQSxDQUFDO0lBRUosQ0FBQztDQUNGLENBQUMsQ0FBQztBQUVILEdBQUcsQ0FBQyxjQUFjLEdBQUcsSUFBSSxNQUFNLENBQUM7SUFDOUIsS0FBSyxFQUFFLG9CQUFvQjtJQUMzQixLQUFLLEVBQUUsUUFBUSxDQUFDO1FBQ2QsRUFBRSxFQUFFLG1CQUFtQjtRQUN2QixFQUFFLEVBQUUsZUFBZTtRQUNuQixFQUFFLEVBQUUsd0JBQXdCO0tBQzdCLENBQUM7SUFDRixXQUFXLEVBQUUsSUFBSSxnQkFBZ0IsRUFBRTtJQUNuQyxTQUFTLEVBQUUsQ0FBQyxHQUFHLGdCQUFnQixDQUFDO0lBQ2hDLE9BQU8sRUFBRSxHQUFhLEVBQUU7UUFDdEIsR0FBRyxDQUFDLGNBQWMsQ0FBQyxlQUFlLEdBQUcsQ0FBQyxHQUFHLFNBQVMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FDbEUsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUNSLEtBQUssS0FBSyxNQUFNLENBQUMsV0FBVyxHQUFHLGNBQWM7WUFDN0MsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FDeEMsQ0FBQztRQUVGLFdBQVcsRUFBRSxDQUFDO1FBQ2QsT0FBTyxHQUFHLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQztJQUM1QyxDQUFDO0lBQ0QsZ0JBQWdCLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLE1BQU0sQ0FBQyxhQUFhLENBQUM7Q0FDdEcsQ0FBQyxDQUFDO0FBRUgsR0FBRyxDQUFDLE1BQU0sR0FBRyxJQUFJLE1BQU0sQ0FBQztJQUN0QixLQUFLLEVBQUUsV0FBVztJQUNsQixLQUFLLEVBQUUsUUFBUSxDQUFDO1FBQ2QsRUFBRSxFQUFFLGVBQWU7UUFDbkIsRUFBRSxFQUFFLHNDQUFzQztRQUMxQyxFQUFFLEVBQUUsUUFBUTtLQUNiLENBQUM7SUFDRixPQUFPLEVBQUUsQ0FBQyxJQUFZLEVBQUUsTUFBYyxHQUFHLENBQUMsTUFBTSxFQUFFLEVBQUU7UUFDbEQsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBQ2xCLEdBQUcsQ0FBQyxlQUFlLEdBQUcsQ0FBQyxNQUFNLENBQUMsV0FBVyxHQUFHLGFBQWEsR0FBRyxJQUFJLENBQUMsQ0FBQztJQUNwRSxDQUFDO0lBQ0QsZ0JBQWdCLEVBQUUsS0FBSyxFQUFFLElBQVksRUFBRSxNQUFjLEdBQUcsQ0FBQyxNQUFNLEVBQUUsRUFBRTtRQUNqRSxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFDbEIsTUFBTSxNQUFNLEdBQUcscUJBQXFCLEVBQUUsQ0FBQztRQUN2QyxHQUFHLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUEsK0ZBQStGO1FBRXhJLE1BQU0sS0FBSyxHQUFHO1lBQ1osVUFBVSxFQUFFLEVBQUU7WUFDZCxNQUFNLEVBQUUsRUFBRTtZQUNWLE1BQU0sRUFBRSxFQUFFO1lBQ1YsS0FBSyxFQUFFLEVBQUU7WUFDVCxNQUFNLEVBQUUsU0FBUyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLElBQUksU0FBUztZQUM1RSxPQUFPLEVBQUUsRUFBRTtZQUNYLE1BQU0sRUFBRSxTQUFTLENBQUMsTUFBTSxDQUFDLFVBQVUsR0FBRyw0QkFBNEIsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxjQUFjLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksU0FBUztZQUMxSixhQUFhLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxhQUFhLEdBQUcsSUFBSSxFQUFFLEdBQUcsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzVHLGNBQWMsRUFBRSxTQUFTLENBQUMsTUFBTSxDQUFDLGNBQWMsR0FBRyxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksU0FBUztZQUNqRixXQUFXLEVBQUUsRUFBRTtTQUNoQixDQUFDO1FBRUYsSUFBSSxJQUFJLEtBQUssWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2xDLEtBQUssQ0FBQyxVQUFVLEdBQUcsQ0FBQyxhQUFhLEVBQUUsWUFBWSxFQUFFLGFBQWEsRUFBRSxXQUFXLEVBQUUsb0JBQW9CLEVBQUUsY0FBYyxFQUFFLFlBQVksQ0FBQyxDQUFDO1lBQ2pJLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUMvQixLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsYUFBYSxFQUFFLFlBQVksQ0FBQyxDQUFDO1lBQzdDLEtBQUssQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzlCLEtBQUssQ0FBQyxPQUFPLEdBQUcsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsWUFBWSxHQUFHLHFCQUFxQixDQUFDLElBQUksU0FBUyxFQUFFLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxZQUFZLEdBQUcsZUFBZSxDQUFDLElBQUksU0FBUyxFQUFFLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxZQUFZLEdBQUcsZUFBZSxDQUFDLElBQUksU0FBUyxDQUFDLENBQUM7UUFDL04sQ0FBQzthQUNJLElBQUksSUFBSSxLQUFLLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUN4QyxLQUFLLENBQUMsVUFBVSxHQUFHLENBQUMsc0JBQXNCLEVBQUUsY0FBYyxFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUUsc0JBQXNCLEVBQUUsWUFBWSxFQUFFLGFBQWEsQ0FBQyxDQUFDO1lBQy9JLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUNoQyxLQUFLLENBQUMsS0FBSyxHQUFHLFNBQVMsRUFBRSxDQUFDO1lBQzFCLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxxQkFBcUIsRUFBRSxZQUFZLENBQUMsQ0FBQztZQUNyRCxLQUFLLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsWUFBWSxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxTQUFTLENBQUM7WUFDM0UsS0FBSyxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsVUFBVSxHQUFHLDBDQUEwQyxDQUFDO1FBQ3JGLENBQUM7YUFDSSxJQUFJLElBQUksS0FBSyxZQUFZLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDNUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7WUFDdEIsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUM7WUFDdEMsS0FBSyxDQUFDLEtBQUssR0FBRyxTQUFTLEVBQUUsQ0FBQztZQUMxQixLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsb0NBQW9DLENBQUMsQ0FBQztZQUN0RCxLQUFLLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsWUFBWSxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxTQUFTLENBQUM7UUFDN0UsQ0FBQztRQUFBLENBQUM7UUFFRixDQUFDLFNBQVMsa0JBQWtCO1lBQzFCLE1BQU0sYUFBYSxHQUFHLHVCQUF1QixDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLFVBQVUsR0FBRyxlQUFlLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQ3ZILElBQUksYUFBYSxDQUFDLE1BQU0sR0FBRyxDQUFDO2dCQUFFLE9BQU87WUFDckMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFBO1FBQzNCLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxNQUFtQixFQUNyQixTQUFTLEdBQUcsQ0FBQyxlQUFlLEVBQUUsZUFBZSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7UUFHdEUsTUFBTSxrQkFBa0IsRUFBRSxDQUFDO1FBRTNCLEtBQUssVUFBVSxrQkFBa0I7WUFFL0IsSUFBSSxJQUFJLEtBQUssWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUVsQyxNQUFNLE1BQU0sQ0FBQyxRQUFRLEVBQUUsU0FBUyxFQUFFLFNBQVMsQ0FBQyxNQUFNLENBQUMsVUFBVSxHQUFHLFdBQVcsQ0FBQyxJQUFJLFNBQVMsQ0FBQyxDQUFDO2dCQUUzRixNQUFNLE1BQU0sQ0FBQyxZQUFZLEVBQUUsU0FBUyxFQUFFLFNBQVMsQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLFlBQVksR0FBRyxJQUFJLENBQUMsSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFBLDBCQUEwQjtnQkFFNUgsTUFBTSxNQUFNLENBQUMsV0FBVyxFQUFFLFNBQVMsRUFBRSxTQUFTLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQSwwQkFBMEI7WUFFNUgsQ0FBQztpQkFDSSxJQUFJLElBQUksS0FBSyxZQUFZLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQ3hDLE1BQU0sTUFBTSxDQUFDLFFBQVEsRUFBRSxTQUFTLEVBQUUsU0FBUyxDQUFDLE1BQU0sQ0FBQyxVQUFVLEdBQUcsb0JBQW9CLENBQUMsSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFBLDBCQUEwQjtZQUNoSSxDQUFDO1lBQUEsQ0FBQztZQUVGLE1BQU0sTUFBTSxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUEsc0NBQXNDO1lBQ3hGLE1BQU0sTUFBTSxDQUFDLFlBQVksRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDN0MsTUFBTSxNQUFNLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFBLGdDQUFnQztZQUNyRSxNQUFNLE1BQU0sQ0FBQyxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLGtCQUFrQjtZQUNqRSxNQUFNLE1BQU0sQ0FBQyxlQUFlLEVBQUUsU0FBUyxFQUFFLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUM5RCxNQUFNLE1BQU0sQ0FBQyxxQkFBcUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQ3JFLE1BQU0sTUFBTSxDQUFDLGFBQWEsRUFBRSxTQUFTLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUEsNEJBQTRCO1lBQ2pGLE1BQU0sTUFBTSxDQUFDLGNBQWMsRUFBRSxTQUFTLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUEsbURBQW1EO1lBQ3pHLE1BQU0sTUFBTSxDQUFDLGFBQWEsRUFBRSxTQUFTLEVBQUUsU0FBUyxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxTQUFTLENBQUMsQ0FBQztZQUdsRixLQUFLLFVBQVUsTUFBTSxDQUFDLEtBQWEsRUFBRSxJQUFjLEVBQUUsT0FBb0I7Z0JBQ3ZFLE1BQU0sR0FBRyx1QkFBdUIsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxNQUFNLEdBQUcsS0FBSyxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUV2RixJQUFJLENBQUMsTUFBTTtvQkFBRSxPQUFPO2dCQUVwQixJQUFJLE9BQU87b0JBQ1QsT0FBTyxhQUFhLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxZQUFZLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFFdEUsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLElBQUk7b0JBQUUsT0FBTztnQkFFNUIsSUFBSSxLQUFLLEtBQUssWUFBWSxFQUFFLENBQUM7b0JBQzNCLE9BQU8sR0FBRyxDQUFDOzRCQUNULG1CQUFtQixHQUFHLENBQUMsS0FBSyxFQUFFOzRCQUM5QixFQUFFOzRCQUNGLFlBQVk7NEJBQ1osRUFBRTs0QkFDRixTQUFTO3lCQUNWLENBQUMsQ0FBQztvQkFDSCxhQUFhLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO2dCQUVuRCxDQUFDO2dCQUVELE1BQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBQyxHQUFHLEVBQUMsRUFBRTtvQkFDckMsSUFBSSxJQUFJLEtBQUssWUFBWSxDQUFDLFlBQVk7d0JBQ3BDLE9BQU8sR0FBRyxNQUFNLDZCQUE2QixDQUFDOzRCQUM1QyxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxHQUFHLDhDQUE4QyxFQUFFLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLFNBQVM7NEJBQzlILEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsMkNBQTJDLEVBQUUsY0FBYyxDQUFDLGtCQUFrQixDQUFDLElBQUksU0FBUzt5QkFBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDOzt3QkFFeEksT0FBTyxHQUFHLE1BQU0sNkJBQTZCLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQztvQkFFM0YsSUFBSSxDQUFDLE9BQU87d0JBQUUsT0FBTztvQkFFckIsSUFBSSxLQUFLLEtBQUssUUFBUSxFQUFFLENBQUM7d0JBQ3ZCLGFBQWEsQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLFdBQVcsRUFBRSxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsTUFBTSxFQUFFLGdCQUFnQixDQUFDLENBQUMsQ0FBQSxnREFBZ0Q7b0JBQ3RKLENBQUM7b0JBRUQsYUFBYSxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQSxtQ0FBbUM7b0JBRTdFLElBQUksS0FBSyxLQUFLLFlBQVksSUFBSSxJQUFJLEtBQUssWUFBWSxDQUFDLFlBQVksRUFBRSxDQUFDO3dCQUNqRSxhQUFhLENBQUMsb0JBQW9CLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLE1BQU0sRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDLENBQUEsa0dBQWtHO29CQUMzTSxDQUFDO3lCQUFNLElBQUksS0FBSyxLQUFLLFFBQVEsRUFBRSxDQUFDO3dCQUM5QixhQUFhLENBQUMsb0JBQW9CLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLE1BQU0sRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDLENBQUEsOENBQThDO29CQUNoSixDQUFDO3lCQUFNLElBQUksS0FBSyxLQUFLLE9BQU8sRUFBRSxDQUFDO3dCQUM3QixPQUFPLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsVUFBVSxFQUFFLGdCQUFnQixDQUFDLElBQUksU0FBUyxDQUFDO3dCQUNwRixZQUFZLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxDQUFDO3dCQUNsQyxhQUFhLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxZQUFZLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUE7b0JBQ2xFLENBQUM7Z0JBRUgsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFFSixTQUFTLGFBQWEsQ0FBQyxPQUFtQixFQUFFLE1BQW1CLEVBQUUsS0FBZTtvQkFDOUUsSUFBSSxDQUFDLE9BQU87d0JBQUUsT0FBTztvQkFDckIsMkJBQTJCLENBQUM7d0JBQzFCLE1BQU0sRUFBRSxDQUFDLE9BQU8sQ0FBQzt3QkFDakIsU0FBUyxFQUFFLEtBQUs7d0JBQ2hCLFFBQVEsRUFBRSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBRTt3QkFDdEQsU0FBUyxFQUFFLEdBQUcsQ0FBQyxXQUFXO3FCQUMzQixDQUFDLENBQUM7Z0JBQ0wsQ0FBQztnQkFDRCxTQUFTLG9CQUFvQixDQUFDLE1BQWMsRUFBRSxJQUE2RCxFQUFFLEdBQVc7b0JBQ3RILE9BQU8sQ0FBQzs0QkFDTixLQUFLLEdBQUcsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUc7NEJBQ2hDLEdBQUcsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQzt5QkFDbEQsQ0FBQyxDQUFDO2dCQUNMLENBQUM7Z0JBQ0QsU0FBUyxZQUFZLENBQUMsT0FBbUIsRUFBRSxRQUFnQjtvQkFDekQsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxLQUFLLEdBQUcsUUFBUSxFQUFFLENBQUE7Z0JBQzlFLENBQUM7WUFDSCxDQUFDO1FBQ0gsQ0FBQztRQUFBLENBQUM7UUFFRixNQUFNLCtCQUErQixDQUFDO1lBQ3BDLE1BQU0sRUFBRSxJQUFJO1lBQ1osTUFBTSxFQUFFLE1BQU0sQ0FBQyxVQUFVO1lBQ3pCLFNBQVMsRUFBRSxHQUFHLENBQUMsV0FBVztZQUMxQixjQUFjLEVBQUUsS0FBSztZQUNyQixNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUNuRSxDQUFDLENBQUM7UUFFSCxTQUFTLFNBQVMsQ0FBQyxNQUFjLEVBQUUsR0FBVztZQUM1QyxHQUFHLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLElBQUksT0FBTyxDQUFDLENBQUMsQ0FBQyxNQUFNLElBQUksUUFBUSxDQUFDO1lBQy9ELE9BQU8sQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLEdBQUcsVUFBVSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQTtRQUMvRSxDQUFDO1FBRUQsU0FBUyxTQUFTLENBQUMsVUFBbUIsS0FBSztZQUN6QyxNQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsWUFBWSxHQUFHLE9BQU8sQ0FBQTtZQUMzQyxJQUFJLE9BQU87Z0JBQ1QsT0FBTyxTQUFTLENBQUMsR0FBRyxLQUFLLHFCQUFxQixFQUFFLFdBQVcsQ0FBQyxJQUFJLFNBQVMsQ0FBQzs7Z0JBQ3ZFLE9BQU8sQ0FBQyxHQUFHLFNBQVMsQ0FBQyxLQUFLLEVBQUUsV0FBVyxDQUFDLElBQUksU0FBUyxFQUFFLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxZQUFZLEdBQUcsd0JBQXdCLENBQUMsSUFBSSxTQUFTLENBQUMsQ0FBQTtRQUV4SSxDQUFDO0lBQ0gsQ0FBQztDQUNGLENBQUMsQ0FBQztBQUVILEdBQUcsQ0FBQyxhQUFhLEdBQUcsSUFBSSxNQUFNLENBQUM7SUFDN0IsS0FBSyxFQUFFLGtCQUFrQjtJQUN6QixLQUFLLEVBQUUsUUFBUSxDQUFDO1FBQ2QsRUFBRSxFQUFFLGtCQUFrQjtRQUN0QixFQUFFLEVBQUUsNEJBQTRCO1FBQ2hDLEVBQUUsRUFBRSxzQkFBc0I7S0FDM0IsQ0FBQztJQUNGLE9BQU8sRUFBRSxHQUFHLEVBQUU7UUFDWixNQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsWUFBWSxHQUFHLE9BQU8sQ0FBQztRQUM1QyxNQUFNLFFBQVEsR0FBRztZQUNmO2dCQUNFLFVBQVUsRUFBRSxvQkFBb0I7Z0JBQ2hDLE1BQU0sRUFBRSx1QkFBdUI7Z0JBQy9CLEtBQUssRUFBRSxDQUFDLEdBQUcsS0FBSyw2QkFBNkIsQ0FBQyxFQUFDLDhHQUE4RztnQkFDN0osTUFBTSxFQUFFLENBQUMsbUJBQW1CLEVBQUUsYUFBYSxDQUFDO2dCQUM1QyxhQUFhLEVBQUUsTUFBTSxDQUFDLGFBQWEsR0FBRyx1QkFBdUI7Z0JBQzdELE9BQU8sRUFBRSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEdBQUcsdUJBQXVCLENBQUM7Z0JBQ3hELFFBQVEsRUFBRTtvQkFDUixNQUFNLENBQUMsV0FBVyxHQUFHLFlBQVk7b0JBQ2pDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsaUJBQWlCO29CQUN0QyxNQUFNLENBQUMsVUFBVSxHQUFHLGdCQUFnQixHQUFHLE1BQU07b0JBQzdDLE1BQU0sQ0FBQyxVQUFVLEdBQUcsY0FBYztpQkFDbkM7YUFDRjtZQUNEO2dCQUNFLFVBQVUsRUFBRSxhQUFhO2dCQUN6QixNQUFNLEVBQUUsdUJBQXVCO2dCQUMvQixLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUM7Z0JBQ2QsTUFBTSxFQUFFLENBQUMsZUFBZSxFQUFFLGNBQWMsQ0FBQztnQkFDekMsYUFBYSxFQUFFLE1BQU0sQ0FBQyxhQUFhLEdBQUcsTUFBTSxHQUFHLGtCQUFrQjtnQkFDakUsT0FBTyxFQUFFLENBQUMsTUFBTSxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUM7Z0JBQ3ZDLFFBQVEsRUFBRTtvQkFDUixNQUFNLENBQUMsVUFBVSxHQUFHLGlCQUFpQjtvQkFDckMsTUFBTSxDQUFDLGNBQWMsR0FBRyxnQkFBZ0I7b0JBQ3hDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsaUJBQWlCO29CQUN0QyxNQUFNLENBQUMsVUFBVSxHQUFHLG1CQUFtQjtpQkFDeEM7YUFDRjtZQUNEO2dCQUNFLFVBQVUsRUFBRSxhQUFhO2dCQUN6QixNQUFNLEVBQUUsY0FBYztnQkFDdEIsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDO2dCQUNkLE1BQU0sRUFBRSxDQUFDLG1CQUFtQixFQUFFLFlBQVksQ0FBQztnQkFDM0MsYUFBYSxFQUFFLE1BQU0sQ0FBQyxhQUFhLEdBQUcsTUFBTSxHQUFHLGtCQUFrQjtnQkFDakUsT0FBTyxFQUFFLENBQUMsTUFBTSxDQUFDLFlBQVksR0FBRyxPQUFPLENBQUM7Z0JBQ3hDLFFBQVEsRUFBRTtvQkFDUixNQUFNLENBQUMsWUFBWSxHQUFHLGNBQWMsRUFBQyw2QkFBNkI7b0JBQ2xFLE1BQU0sQ0FBQyxZQUFZLEdBQUcsWUFBWTtvQkFDbEMsTUFBTSxDQUFDLFlBQVksR0FBRyx3QkFBd0I7b0JBQzlDLGlCQUFpQixDQUFDLFVBQVU7aUJBQzdCO2FBQ0Y7U0FFRixDQUFDO1FBRUYsTUFBTSxTQUFTLEdBQUc7WUFDaEIsRUFBRSxFQUFFLGdCQUFnQjtZQUNwQixFQUFFLEVBQUUsbUJBQW1CO1lBQ3ZCLEVBQUUsRUFBRSxtQkFBbUI7U0FDeEIsQ0FBQztRQUVGLE1BQU0sV0FBVyxHQUFHO1lBQ2xCO2dCQUNFLEVBQUUsRUFBRSxRQUFRO2dCQUNaLEVBQUUsRUFBRSxVQUFVO2dCQUNkLEVBQUUsRUFBRSxPQUFPO2FBQ1o7WUFDRDtnQkFDRSxFQUFFLEVBQUUsU0FBUztnQkFDYixFQUFFLEVBQUUsVUFBVTtnQkFDZCxFQUFFLEVBQUUsUUFBUTthQUNiO1lBQ0Q7Z0JBQ0UsRUFBRSxFQUFFLFNBQVM7Z0JBQ2IsRUFBRSxFQUFFLFdBQVc7Z0JBQ2YsRUFBRSxFQUFFLE9BQU87YUFDWjtTQUNGLENBQUM7UUFFRixNQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ2hDLElBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDNUIsT0FBTyxJQUFJLE1BQU0sQ0FBQztnQkFDaEIsS0FBSyxFQUFFLEdBQUcsQ0FBQyxhQUFhLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUU7Z0JBQzdDLEtBQUssRUFBRSxjQUFjLENBQUMsQ0FBQyxDQUFDO2dCQUN4QixXQUFXLEVBQUUsSUFBSSxnQkFBZ0IsRUFBRTtnQkFDbkMsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7Z0JBQzVCLGdCQUFnQixFQUFFLEdBQUcsRUFBRSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQzthQUMvQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUVILEdBQUcsQ0FBQyxhQUFhLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUV0QyxTQUFTLGNBQWMsQ0FBQyxDQUFTO1lBQy9CLE1BQU0sS0FBSyxHQUFHLEVBQUUsR0FBRyxTQUFTLEVBQUUsQ0FBQztZQUMvQixLQUFLLENBQUMsZUFBZSxDQUFDLEdBQUcsS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7WUFDaEcsT0FBTyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDeEIsQ0FBQztRQUVELEtBQUssVUFBVSxVQUFVLENBQUMsQ0FBUyxFQUFFLFlBQXFCLEtBQUs7WUFDN0QsSUFBSSxHQUFHLEdBQUcsR0FBRyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDeEMsSUFBSSxNQUFNLEdBQUcsTUFBTSxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbkMsSUFBSSxTQUFTO2dCQUFFLE9BQU8sTUFBTSxDQUFDO1lBRTdCLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ3JCLFdBQVcsQ0FBQztvQkFDVixTQUFTLEVBQUUsR0FBRyxDQUFDLFdBQVc7b0JBQzFCLGlCQUFpQixFQUFFLElBQUk7b0JBQ3ZCLGlCQUFpQixFQUFFLElBQUk7b0JBQ3ZCLEtBQUssRUFBRSxLQUFLO29CQUNaLFNBQVMsRUFBRSxZQUFZLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUN0QyxDQUFDLENBQUM7WUFFTCxDQUFDLENBQUMsQ0FBQztZQUVILEtBQUssVUFBVSxZQUFZLENBQUMsS0FBYTtnQkFDdkMsSUFBSSxPQUFPLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUMzQixLQUFLLEdBQUcsQ0FBQyxHQUFHLFNBQVMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUV6QyxDQUFDLFNBQVMsaUJBQWlCO29CQUN6QixJQUFJLEtBQUssS0FBSyxDQUFDLEVBQUUsQ0FBQzt3QkFDaEIsS0FBSyxDQUFDLE9BQU8sQ0FDWCxNQUFNLENBQUMsV0FBVyxHQUFHLFVBQVUsRUFDL0IsTUFBTSxDQUFDLFFBQVEsR0FBRyxNQUFNLEVBQ3hCLE1BQU0sQ0FBQyxRQUFRLEdBQUcscUJBQXFCLEVBQ3ZDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsNEJBQTRCLEVBQzlDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsVUFBVSxHQUFHLE1BQU0sRUFDckMsTUFBTSxDQUFDLFFBQVEsR0FBRyxxRUFBcUUsRUFDdkYsTUFBTSxDQUFDLFFBQVEsR0FBRyxtREFBbUQsQ0FDdEUsQ0FBQztvQkFDSixDQUFDO3lCQUNJLElBQUksS0FBSyxLQUFLLENBQUMsRUFBRSxDQUFDO3dCQUNyQixLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsRUFBRSxDQUFDLEVBQUUsTUFBTSxDQUFDLEtBQUssR0FBRyxtREFBbUQsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxlQUFlO3dCQUV2SixJQUFJLFNBQVMsR0FDWDs0QkFDRSxNQUFNLENBQUMsY0FBYyxHQUFHLHFCQUFxQjs0QkFDN0MsTUFBTSxDQUFDLFdBQVcsR0FBRyxPQUFPLEVBQUMsbUlBQW1JOzRCQUNoSyxNQUFNLENBQUMsWUFBWSxHQUFHLG1CQUFtQjs0QkFDekMsTUFBTSxDQUFDLFlBQVksR0FBRyx5QkFBeUI7NEJBQy9DLE1BQU0sQ0FBQyxXQUFXLEdBQUcsaUJBQWlCOzRCQUN0QyxNQUFNLENBQUMsVUFBVSxHQUFHLGFBQWE7NEJBQ2pDLE1BQU0sQ0FBQyxVQUFVLEdBQUcsb0JBQW9COzRCQUN4QyxNQUFNLENBQUMsVUFBVSxHQUFHLFVBQVU7NEJBQzlCLE1BQU0sQ0FBQyxVQUFVLEdBQUcsUUFBUTs0QkFDNUIsTUFBTSxDQUFDLFVBQVUsR0FBRyxNQUFNLEVBQUUsVUFBVTs0QkFDdEMsTUFBTSxDQUFDLFVBQVUsR0FBRyxzQkFBc0I7NEJBQzFDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsa0JBQWtCOzRCQUN2QyxNQUFNLENBQUMsWUFBWSxHQUFHLE9BQU87NEJBQzdCLE1BQU0sQ0FBQyxhQUFhLEdBQUcsY0FBYzt5QkFDdEMsQ0FBQzt3QkFFSixLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxZQUFZLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxTQUFTLENBQUMsQ0FBQzt3QkFFM0UsSUFBSSxHQUFHLEdBQWE7NEJBQ2xCLE1BQU0sQ0FBQyxZQUFZLEdBQUcseUJBQXlCOzRCQUMvQyxNQUFNLENBQUMsWUFBWSxHQUFHLGlCQUFpQjs0QkFDdkMsTUFBTSxDQUFDLFlBQVksR0FBRyxxQkFBcUI7NEJBQzNDLE1BQU0sQ0FBQyxZQUFZLEdBQUcsbUJBQW1COzRCQUN6QyxNQUFNLENBQUMsYUFBYSxHQUFHLFlBQVk7eUJBQ3BDLENBQUM7d0JBRUYsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO29CQUNyQixDQUFDO29CQUFBLENBQUM7Z0JBRUosQ0FBQyxDQUFDLEVBQUUsQ0FBQztnQkFFTCxJQUFJLFFBQVEsR0FBRyxNQUFNLE9BQU8sQ0FBQyxHQUFHLENBQzlCLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyxFQUFFO29CQUN0QixJQUFJLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQzt3QkFDakMsT0FBTyxNQUFNLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQTs7d0JBQzdCLE9BQU8sTUFBTSxZQUFZLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQTtnQkFDcEYsQ0FBQyxDQUFDLENBQ0gsQ0FBQztnQkFFRixPQUFPLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFHdkMsS0FBSyxVQUFVLFlBQVksQ0FBQyxLQUFhLEVBQUUsY0FBdUIsS0FBSztvQkFDckUsSUFBSSxXQUFXLEVBQUUsQ0FBQzt3QkFDaEIsT0FBTyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksU0FBUyxDQUFDO29CQUN2QyxDQUFDO29CQUFBLENBQUM7b0JBRUYsSUFBSSxJQUFJLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDO29CQUM1QyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLGVBQWUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7d0JBQUUsT0FBTyxDQUFBLDhHQUE4RztvQkFFdkwsSUFBSSxJQUFJLEtBQUssUUFBUTt3QkFDbkIsT0FBTyxNQUFNLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7eUJBQ3pELElBQUksSUFBSSxLQUFLLFlBQVk7d0JBQzVCLE9BQU8sTUFBTSxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDOzt3QkFDN0QsT0FBTyxXQUFXLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7b0JBRXZDLFNBQVMsV0FBVyxDQUFDLElBQWM7d0JBQ2pDLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDbkQsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUEsb0pBQW9KO3dCQUN6TCxPQUFPLEtBQUssQ0FBQTtvQkFDZCxDQUFDO2dCQUVILENBQUM7Z0JBRUQsS0FBSyxVQUFVLGdCQUFnQixDQUFDLElBQVksRUFBRSxNQUFjO29CQUMxRCxPQUFPLE1BQU0sNkJBQTZCLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxlQUFlLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLENBQUMsRUFBRSxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQTtnQkFDNUgsQ0FBQztZQUVILENBQUM7UUFFSCxDQUFDO1FBRUQsS0FBSyxVQUFVLG1CQUFtQixDQUFDLENBQVM7WUFDMUMsSUFBSSxHQUFHLEdBQUcsR0FBRyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDeEMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBLHVHQUF1RztZQUNoSixJQUFJLENBQUMsS0FBSyxDQUFDO2dCQUNULG1CQUFtQixDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztpQkFDbEMsSUFBSSxDQUFDLEtBQUssQ0FBQztnQkFDZCxHQUFHLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUEsK0RBQStEO1lBQzFHLE1BQU0sWUFBWSxFQUFFLENBQUM7WUFDckIsS0FBSyxVQUFVLFlBQVk7Z0JBQ3pCLElBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7Z0JBQ2hDLE1BQU0saUJBQWlCLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM1QyxNQUFNLGlCQUFpQixDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDN0MsTUFBTSxpQkFBaUIsQ0FBQyxlQUFlLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsRUFBRSxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7Z0JBRTFGLEtBQUssVUFBVSxpQkFBaUIsQ0FBQyxLQUFhLEVBQUUsR0FBVyxFQUFFLE1BQWU7b0JBQzFFLElBQUksTUFBTSxHQUFtQixVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBRS9DLElBQUksQ0FBQyxNQUFNO3dCQUFFLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQ0FBaUMsRUFBRSxLQUFLLENBQUMsQ0FBQztvQkFFMUUsSUFBSSxLQUFpQixFQUFFLEtBQWUsQ0FBQztvQkFFdkMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsWUFBWSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztvQkFFaEYsSUFBSSxNQUFNO3dCQUNSLEtBQUssR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksU0FBUyxDQUFDOzt3QkFFdEMsS0FBSyxHQUFHLE1BQU0sNkJBQTZCLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztvQkFFbEYsSUFBSSxDQUFDLEtBQUs7d0JBQUUsT0FBTztvQkFHbkIsMkJBQTJCLENBQUM7d0JBQzFCLE1BQU0sRUFBRSxDQUFDLEtBQUssQ0FBQzt3QkFDZixRQUFRLEVBQUU7NEJBQ1IsRUFBRSxFQUFFLE1BQU07NEJBQ1YsYUFBYSxFQUFFLGFBQWE7eUJBQzdCO3dCQUNELFNBQVMsRUFBRSxHQUFHLENBQUMsV0FBVzt3QkFDMUIsU0FBUyxFQUFFLEtBQUs7cUJBQ2pCLENBQUMsQ0FBQztvQkFHSCxTQUFTLFVBQVUsQ0FBQyxRQUFnQjt3QkFDbEMsT0FBTyx1QkFBdUIsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxNQUFNLEdBQUcsUUFBUSxHQUFHLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQzNHLENBQUM7Z0JBRUgsQ0FBQztZQUNILENBQUM7WUFBQSxDQUFDO1lBQ0YsV0FBVyxFQUFFLENBQUM7UUFFaEIsQ0FBQztJQUVILENBQUM7Q0FDRixDQUFDLENBQUM7QUFFSCxHQUFHLENBQUMsYUFBYSxHQUFHLElBQUksTUFBTSxDQUFDO0lBQzdCLEtBQUssRUFBRSxrQkFBa0I7SUFDekIsS0FBSyxFQUFFLFFBQVEsQ0FBQztRQUNkLEVBQUUsRUFBRSx1QkFBdUI7UUFDM0IsRUFBRSxFQUFFLHdCQUF3QjtRQUM1QixFQUFFLEVBQUUsMkJBQTJCO0tBQ2hDLENBQUM7SUFDRixPQUFPLEVBQUUsQ0FBQyxpQkFBMEIsS0FBSyxFQUFFLEVBQUU7UUFDM0MseUlBQXlJO1FBQ3pJLEdBQUcsQ0FBQyxhQUFhLENBQUMsUUFBUSxHQUFHLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDdEUsa0ZBQWtGO1FBRWxGLElBQUksa0JBQWtCLEtBQUssWUFBWSxDQUFDLFVBQVU7WUFDaEQsR0FBRyxDQUFDLGFBQWEsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQTtRQUV0RSx1SEFBdUg7UUFDdkgsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7WUFDekQsT0FBTyxLQUFLLENBQUM7WUFBRSxHQUFHLENBQUMsYUFBYSxDQUFDLFFBQVEsR0FBRyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUVuRSxJQUFJLGNBQWM7WUFBRSxPQUFPLEdBQUcsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDO0lBQ3hELENBQUM7Q0FDRixDQUFDLENBQUM7QUFFSCxHQUFHLENBQUMsV0FBVyxHQUFHLElBQUksTUFBTSxDQUFDO0lBQzNCLEtBQUssRUFBRSxnQkFBZ0I7SUFDdkIsS0FBSyxFQUFFLFFBQVEsQ0FBQyxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLGFBQWEsRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLENBQUM7SUFDcEUsV0FBVyxFQUFFLElBQUksZ0JBQWdCLEVBQUU7SUFDbkMsU0FBUyxFQUFFLENBQUMsR0FBRyxnQkFBZ0IsQ0FBQztJQUNoQyxPQUFPLEVBQUUsR0FBYSxFQUFFO1FBQ3RCLE1BQU0sSUFBSSxHQUFHLFNBQVMsRUFBRSxDQUFDLElBQUksQ0FBQztRQUM5Qiw0Q0FBNEM7UUFDNUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxlQUFlLEdBQUc7WUFDaEMsR0FBRyxJQUFJLENBQUMsT0FBTztZQUNmLEdBQUcsSUFBSSxDQUFDLGdCQUFnQjtZQUN4QixHQUFHLElBQUksQ0FBQyxRQUFRO1lBQ2hCLEdBQUcsSUFBSSxDQUFDLFNBQVM7U0FDbEIsQ0FBQztRQUVGLDhFQUE4RTtRQUM5RSxXQUFXLEVBQUUsQ0FBQztRQUNkLE9BQU8sR0FBRyxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUM7SUFDekMsQ0FBQztJQUNELGdCQUFnQixFQUFFLENBQUMsTUFBYyxHQUFHLENBQUMsV0FBVyxFQUFFLFNBQWlCLE1BQU0sQ0FBQyxXQUFXLEVBQUUsRUFBRTtRQUN2RixJQUFJLGNBQWMsR0FBRyxHQUFHLENBQUMsV0FBVyxDQUFDO1FBRXJDLENBQUMsU0FBUyw2QkFBNkI7WUFDckMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQztnQkFBRSxPQUFPO1lBRTlELE1BQU0sZUFBZSxHQUFHLFNBQVMsQ0FDL0IsTUFBTSxHQUFHLGlCQUFpQixDQUFDLElBQUksU0FBUyxDQUFDO1lBRTNDLElBQUksQ0FBQyxlQUFlO2dCQUNsQixPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsNEJBQTRCLENBQUMsQ0FBQztZQUVuRCxNQUFNLFFBQVEsR0FBRyxJQUFJLE1BQU0sQ0FBQztnQkFDMUIsS0FBSyxFQUFFLGdCQUFnQjtnQkFDdkIsS0FBSyxFQUFFLFFBQVEsQ0FBQztvQkFDZCxFQUFFLEVBQUUsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDdkQsRUFBRSxFQUFFLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7aUJBQ3hELENBQUM7Z0JBQ0YsUUFBUSxFQUFFLEdBQUcsQ0FBQyxZQUFZO2dCQUMxQixXQUFXLEVBQUUsSUFBSSxnQkFBZ0IsRUFBRTtnQkFDbkMsT0FBTyxFQUFFLEdBQUcsRUFBRTtvQkFDWixXQUFXLENBQUM7d0JBQ1YsS0FBSyxFQUFFLGVBQWU7d0JBQ3RCLFNBQVMsRUFBRSxHQUFHLENBQUMsU0FBUzt3QkFDeEIsUUFBUSxFQUFFLFFBQVEsQ0FBQyxXQUFXO3dCQUM5QixTQUFTLEVBQUUsUUFBUSxDQUFDLFdBQVc7d0JBQy9CLGlCQUFpQixFQUFFLEtBQUs7d0JBQ3hCLGlCQUFpQixFQUFFLEtBQUs7cUJBQ3pCLENBQUMsQ0FBQztnQkFFTCxDQUFDO2FBQ0YsQ0FBQyxDQUFDO1lBRUgsTUFBTSxNQUFNLEdBQUcsdUJBQXVCLENBQ3BDLGNBQWMsRUFDZCxNQUFNLEdBQUcsZ0JBQWdCLENBQzFCLENBQUMsQ0FBQyxDQUFDLEVBQUUsa0JBQWtCLENBQUM7WUFFekIsTUFBTSxPQUFPLEdBQUcsbUJBQW1CLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxNQUFNLEVBQUUsYUFBYSxDQUFDLENBQUM7WUFFdkUsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFO2dCQUNsRCx1QkFBdUIsQ0FBQyxZQUFZLEVBQUUsTUFBTSxHQUFHLGdCQUFnQixFQUFFLFNBQVMsRUFBRSxPQUFPLENBQUM7cUJBQ2pGLE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDeEQsQ0FBQyxDQUFDLENBQUMsQ0FBQSxzR0FBc0c7UUFDM0csQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUVMLENBQUMsU0FBUyxxQkFBcUI7WUFDN0IsMkVBQTJFO1lBQzNFLElBQUksY0FBYyxHQUFhO2dCQUM3QixHQUFHLENBQUMsV0FBVztnQkFDZixHQUFHLENBQUMsYUFBYTtnQkFDakIsR0FBRyxDQUFDLFdBQVc7Z0JBQ2YsR0FBRyxDQUFDLFVBQVU7YUFDZixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUEsaUZBQWlGO1lBRW5JLElBQUksTUFBd0IsQ0FBQztZQUU3QixxRkFBcUY7WUFDckYsTUFBTSxHQUFHLHVCQUF1QixDQUM5QixjQUFjLEVBQ2QsTUFBTSxHQUFHLGdCQUFnQixFQUN6QixFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FDbkIsQ0FBQztZQUNGLHFCQUFxQixDQUNuQixDQUFDLEdBQUcsY0FBYyxDQUFDLEVBQ25CO2dCQUNFLGFBQWEsRUFBRSxVQUFVO2dCQUN6QixFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQzthQUNkLEVBQ0QsNkJBQTZCLENBQzlCLENBQUM7WUFFRiw0SEFBNEg7WUFDNUgsTUFBTSxHQUFHLHVCQUF1QixDQUM5QixjQUFjLEVBQ2QsTUFBTSxDQUFDLFVBQVUsR0FBRyxrQkFBa0IsQ0FDdkMsQ0FBQztZQUVGLHFCQUFxQixDQUNuQixDQUFDLEdBQUcsY0FBYyxDQUFDLEVBQ25CO2dCQUNFLGFBQWEsRUFBRSxVQUFVO2dCQUN6QixFQUFFLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO2FBQzlCLEVBQ0QsdUJBQXVCLENBQ3hCLENBQUM7WUFFRiwrREFBK0Q7WUFDL0QsTUFBTSxHQUFHLHVCQUF1QixDQUM5QixjQUFjLEVBQ2QsTUFBTSxHQUFHLE9BQU8sQ0FDakIsQ0FBQztZQUVGLHFCQUFxQixDQUNuQixDQUFDLEdBQUcsY0FBYyxDQUFDLEVBQ25CO2dCQUNFLGFBQWEsRUFBRSxVQUFVO2dCQUN6QixFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLHNCQUFxQzthQUNwRCxFQUNELG9CQUFvQixDQUNyQixDQUFDO1lBRUYsdUZBQXVGO1lBQ3ZGLE1BQU0sR0FBRyx1QkFBdUIsQ0FDOUIsY0FBYyxFQUNkLE1BQU0sQ0FBQyxVQUFVO2dCQUNqQiwwQkFBMEIsQ0FDM0IsQ0FBQztZQUNGLHFCQUFxQixDQUNuQixDQUFDLEdBQUcsY0FBYyxDQUFDLEVBQ25CO2dCQUNFLGFBQWEsRUFBRSxVQUFVO2dCQUN6QixFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQzthQUNkLEVBQ0QsdUJBQXVCLENBQ3hCLENBQUM7WUFFRixtRkFBbUY7WUFDbkYsTUFBTSxHQUFHLHVCQUF1QixDQUM5QixjQUFjLEVBQ2Qsc0JBQXNCLEVBQ3RCLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUNuQixDQUFDO1lBQ0YscUJBQXFCLENBQ25CLENBQUMsR0FBRyxjQUFjLENBQUMsRUFDbkI7Z0JBQ0UsYUFBYSxFQUFFLGFBQWE7Z0JBQzVCLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO2FBQ2QsRUFDRCxtQ0FBbUMsQ0FDcEMsQ0FBQztZQUVGOzs7Ozs7Y0FNRTtZQUNGLEtBQUssVUFBVSxxQkFBcUIsQ0FDbEMsSUFBYyxFQUNkLFFBQTRELEVBQzVELGVBQXVCO2dCQUV2QixJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUU7b0JBQUUsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLDRCQUE0QixDQUFDLENBQUM7Z0JBRW5FLElBQUksVUFBVSxHQUFhLEVBQUUsQ0FBQztnQkFDOUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO29CQUNmLCtKQUErSjtvQkFDL0osTUFBTSxNQUFNLEdBQVcsSUFBSSxNQUFNLENBQUM7d0JBQ2hDLEtBQUssRUFBRSxRQUFRLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRTt3QkFDM0UsS0FBSyxFQUFFLEdBQUcsQ0FBQyxLQUFLO3dCQUNoQixRQUFRLEVBQUUsR0FBRyxDQUFDLFlBQVk7d0JBQzFCLE9BQU8sRUFBRSxLQUFLLElBQUksRUFBRTs0QkFDbEIsTUFBTSw0QkFBNEIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLGlHQUFpRzs0QkFDMUksbUZBQW1GOzRCQUNuRixJQUFJLFlBQVksQ0FBQyxhQUFhLENBQUMsR0FBRyxHQUFHLGVBQWUsQ0FBQztnQ0FDbkQsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLENBQUM7d0JBQ3RDLENBQUM7cUJBQ0YsQ0FBQyxDQUFDO29CQUNILFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQzFCLENBQUMsQ0FBQyxDQUFDO2dCQUNILHdCQUF3QixDQUFDLFVBQVUsRUFBRSxRQUFRLEVBQUUsZUFBZSxDQUFDLENBQUM7WUFDbEUsQ0FBQztRQUNILENBQUMsQ0FBQyxFQUFFLENBQUM7UUFFTCxDQUFDLFNBQVMseUJBQXlCO1lBQ2pDLCtFQUErRTtZQUMvRSxJQUFJLFlBQVksR0FBVyxNQUFNLENBQUMsVUFBVSxHQUFHLGlCQUFpQixDQUFDO1lBRWpFLElBQUksV0FBVyxHQUFHLE1BQU0sQ0FBQyxVQUFVLEdBQUcsZUFBZSxDQUFDO1lBRXRELGFBQWEsQ0FDWCxZQUFZLEVBQ1osdUJBQXVCLENBQUMsY0FBYyxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUN4RCxDQUFDO1lBQ0YsV0FBVyxHQUFHLE1BQU0sQ0FBQyxVQUFVLEdBQUcsbUJBQW1CLENBQUE7WUFDckQsd0JBQXdCO1lBQ3hCLGFBQWEsQ0FDWCxZQUFZLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsRUFDckMsdUJBQXVCLENBQUMsY0FBYyxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUN2RCxJQUFJLENBQ0wsQ0FBQztZQUNGLFNBQVMsYUFBYSxDQUNwQixZQUFvQixFQUNwQixNQUFtQixFQUNuQixhQUFzQixLQUFLO2dCQUUzQixJQUFJLENBQUMsTUFBTTtvQkFBRSxPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQztnQkFFdkQsSUFBSSxPQUFPLEdBQWUsZUFBZSxDQUFDLElBQUksQ0FDNUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUNOLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxVQUFVLENBQUMsWUFBWSxDQUFDO29CQUNwQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUMzQyxDQUFDO2dCQUVGLElBQUksQ0FBQyxPQUFPO29CQUNWLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQ0FBbUMsRUFBRSxZQUFZLENBQUMsQ0FBQztnQkFDeEUsTUFBTSxLQUFLLEdBQUcsWUFBWSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUMzQyxNQUFNLFVBQVUsR0FBRyxJQUFJLE1BQU0sQ0FBQztvQkFDNUIsS0FBSyxFQUFFLFlBQVksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNuQyxLQUFLLEVBQUUsUUFBUSxDQUFDO3dCQUNkLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQ3ZDLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7cUJBQ3hDLENBQUM7b0JBQ0YsUUFBUSxFQUFFLEdBQUcsQ0FBQyxZQUFZO29CQUMxQixXQUFXLEVBQUUsSUFBSSxnQkFBZ0IsRUFBRTtvQkFDbkMsT0FBTyxFQUFFLEdBQUcsRUFBRTt3QkFDWixXQUFXLENBQUM7NEJBQ1YsS0FBSyxFQUFFLE9BQU87NEJBQ2QsU0FBUyxFQUFFLEtBQUs7NEJBQ2hCLFFBQVEsRUFBRSxVQUFVLENBQUMsV0FBVzs0QkFDaEMsU0FBUyxFQUFFLFVBQVUsQ0FBQyxXQUFXOzRCQUNqQyxpQkFBaUIsRUFBRSxLQUFLOzRCQUN4QixpQkFBaUIsRUFBRSxLQUFLO3lCQUN6QixDQUFDLENBQUM7b0JBRUwsQ0FBQztpQkFDRixDQUFDLENBQUM7Z0JBRUgsTUFBTSxPQUFPLEdBQUcsbUJBQW1CLENBQUMsQ0FBQyxVQUFVLENBQUMsRUFBRSxNQUFNLEVBQUUsYUFBYSxDQUFDLENBQUM7Z0JBRXpFLElBQUksVUFBVTtvQkFDWixPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FDakQsdUJBQXVCLENBQUMsWUFBWSxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FDOUcsQ0FBQztZQUNOLENBQUM7UUFDSCxDQUFDLENBQUMsRUFBRSxDQUFDO1FBR0wsQ0FBQyxTQUFTLHlDQUF5QztZQUNqRCxJQUFJLEdBQUcsS0FBSyxHQUFHLENBQUMsV0FBVztnQkFBRSxPQUFPLENBQUMsMkNBQTJDO1lBRWhGLE1BQU0sS0FBSyxHQUFHLGVBQWUsQ0FBQTtZQUM3QixNQUFNLE1BQU0sR0FBRyx1QkFBdUIsQ0FDcEMsY0FBYyxFQUNkLE1BQU0sQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFaEMsSUFBSSxDQUFDLE1BQU07Z0JBQUUsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixDQUFDLENBQUM7WUFFM0QsTUFBTSxjQUFjLEdBQUcsSUFBSSxNQUFNLENBQUM7Z0JBQ2hDLEtBQUssRUFBRSxHQUFHLENBQUMsYUFBYSxDQUFDLEtBQUssR0FBRyxlQUFlO2dCQUNoRCxLQUFLLEVBQUUsUUFBUSxDQUFDO29CQUNkLEVBQUUsRUFBRSx1QkFBdUI7b0JBQzNCLEVBQUUsRUFBRSxxQ0FBcUM7aUJBQzFDLENBQUM7Z0JBQ0YsUUFBUSxFQUFFLEdBQUcsQ0FBQyxZQUFZO2dCQUMxQixTQUFTLEVBQUUsR0FBRyxDQUFDLFNBQVM7Z0JBQ3hCLFdBQVcsRUFBRSxJQUFJLGdCQUFnQixFQUFFO2dCQUNuQyxlQUFlLEVBQUUsQ0FBQyxNQUFNLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQzthQUNoRCxDQUFDLENBQUM7WUFDSCxNQUFNLGVBQWUsR0FBRyxJQUFJLE1BQU0sQ0FBQztnQkFDakMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxXQUFXLENBQUMsS0FBSyxHQUFHLGVBQWU7Z0JBQzlDLEtBQUssRUFBRSxRQUFRLENBQUM7b0JBQ2QsRUFBRSxFQUFFLHVCQUF1QjtvQkFDM0IsRUFBRSxFQUFFLHFDQUFxQztpQkFDMUMsQ0FBQztnQkFDRixRQUFRLEVBQUUsR0FBRyxDQUFDLFlBQVk7Z0JBQzFCLFNBQVMsRUFBRSxHQUFHLENBQUMsU0FBUztnQkFDeEIsV0FBVyxFQUFFLElBQUksZ0JBQWdCLEVBQUU7Z0JBQ25DLGVBQWUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO2FBQzlDLENBQUMsQ0FBQztZQUVILG1CQUFtQixDQUFDLENBQUMsY0FBYyxFQUFFLGVBQWUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxhQUFhLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDdkYsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUVMLENBQUMsU0FBUyw0QkFBNEI7WUFDcEMsSUFBSSxNQUFNLEdBQUcsdUJBQXVCLENBQUMsY0FBYyxFQUFFLE1BQU0sQ0FBQyxNQUFNLEdBQUcsMkJBQTJCLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3hILElBQUksQ0FBQyxNQUFNO2dCQUFFLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1lBRTNELElBQUksR0FBRyxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsVUFBVSxHQUFHLDRCQUE0QixHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLGNBQWMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsZUFBZSxDQUFDLENBQUM7WUFDakssSUFBSSxDQUFDLEdBQUc7Z0JBQUUsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUM7WUFFckQsMkJBQTJCLENBQ3pCO2dCQUNFLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQztnQkFDYixTQUFTLEVBQUUsZ0JBQWdCO2dCQUMzQixRQUFRLEVBQUUsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUU7Z0JBQ3RELFNBQVMsRUFBRSxjQUFjO2FBQzFCLENBQ0YsQ0FBQTtRQUNILENBQUMsQ0FBQyxFQUFFLENBQUM7UUFFTCxDQUFDLFNBQVMsK0JBQStCO1lBQ3ZDLDhIQUE4SDtZQUU5SCxNQUFNLE1BQU0sR0FBRyx1QkFBdUIsQ0FBQyxjQUFjLEVBQUUsTUFBTSxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQWdCLENBQUE7WUFDcEcsSUFBSSxDQUFDLE1BQU07Z0JBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDO1lBQzlELCtCQUErQixDQUFDO2dCQUM5QixlQUFlLEVBQUUsTUFBTSxFQUFFO2dCQUN6QixTQUFTLEVBQUUsZ0JBQWdCO2dCQUMzQixTQUFTLEVBQUUsUUFBUSxDQUFDLEVBQUUsRUFBRSxFQUFFLGNBQWMsRUFBRSxFQUFFLEVBQUUseUJBQXlCLEVBQUUsQ0FBQztnQkFDMUUsV0FBVyxFQUFFLG9CQUFvQjtnQkFDakMsTUFBTSxFQUFFLE1BQU07YUFDZixDQUFDLENBQUM7WUFFSCxTQUFTLE1BQU07Z0JBQ2IsSUFBSSxRQUFRLEdBQWlCLEVBQUUsQ0FBQztnQkFDaEMsTUFBTSxRQUFRLEdBQUcsY0FBYyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUEseURBQXlEO2dCQUV0SyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsY0FBYyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQSw4Q0FBOEM7Z0JBRXBMLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFBLCtDQUErQztnQkFDMUUsT0FBTyx3QkFBd0IsQ0FBQyxRQUFRLENBQWlCLENBQUM7WUFDNUQsQ0FBQztZQUFBLENBQUM7UUFFSixDQUFDLENBQUMsRUFBRSxDQUFDO1FBRUwsQ0FBQyxTQUFTLHFCQUFxQjtZQUM3QixvREFBb0Q7WUFDcEQsSUFBSSxRQUFRLEdBQUcsdUJBQXVCLENBQ3BDLGNBQWMsRUFDZCxNQUFNLENBQUMsVUFBVSxHQUFHLG1CQUFtQixFQUNyQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFDbkIsTUFBTSxRQUFRLEdBQWlCLGNBQWMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUUsTUFBTSxFQUFFLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFM0ksK0JBQStCLENBQUM7Z0JBQzlCLGVBQWUsRUFBRSx3QkFBd0IsQ0FBQyxRQUFRLENBQWlCO2dCQUNuRSxTQUFTLEVBQUUsR0FBRyxDQUFDLFNBQVM7Z0JBQ3hCLFNBQVMsRUFBRSxRQUFRLENBQUM7b0JBQ2xCLEVBQUUsRUFBRSxlQUFlO29CQUNuQixFQUFFLEVBQUUsd0JBQXdCO2lCQUM3QixDQUFDO2dCQUNGLFdBQVcsRUFBRSxpQkFBaUI7Z0JBQzlCLE1BQU0sRUFBRSxRQUFRLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQWdCO2FBQ3JELENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFFTCxtQkFBbUIsQ0FBQyxjQUFjLENBQUMsQ0FBQTtJQUdyQyxDQUFDO0NBQ0YsQ0FBQyxDQUFDO0FBRUgsR0FBRyxDQUFDLFdBQVcsR0FBRyxJQUFJLE1BQU0sQ0FBQztJQUMzQixLQUFLLEVBQUUsZ0JBQWdCO0lBQ3ZCLEtBQUssRUFBRSxRQUFRLENBQUMsRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxhQUFhLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxDQUFDO0lBQ3BFLFdBQVcsRUFBRSxJQUFJLGdCQUFnQixFQUFFO0lBQ25DLFNBQVMsRUFBRSxDQUFDLEdBQUcsZ0JBQWdCLENBQUM7SUFDaEMsT0FBTyxFQUFFLEdBQWEsRUFBRTtRQUN0Qiw0Q0FBNEM7UUFDNUMsTUFBTSxJQUFJLEdBQUcsU0FBUyxFQUFFLENBQUMsSUFBSSxDQUFDO1FBQzlCLEdBQUcsQ0FBQyxXQUFXLENBQUMsZUFBZSxHQUFHO1lBQ2hDLEdBQUcsSUFBSSxDQUFDLE9BQU87WUFDZixHQUFHO2dCQUNELE1BQU0sQ0FBQyxVQUFVO29CQUNqQixZQUFZO2dCQUNaLE1BQU0sQ0FBQyxZQUFZLEdBQUcsY0FBYztnQkFDcEMsTUFBTSxDQUFDLFlBQVksR0FBRyxpQkFBaUI7Z0JBQ3ZDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsVUFBVTtnQkFDMUIsTUFBTSxDQUFDLFlBQVksR0FBRyxtQkFBbUI7Z0JBQ3pDLE1BQU0sQ0FBQyxVQUFVLEdBQUcsWUFBWTthQUNqQztZQUNELEdBQUcsSUFBSSxDQUFDLFNBQVM7U0FDbEIsQ0FBQztRQUVGLE9BQU8sR0FBRyxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUM7SUFDekMsQ0FBQztJQUNELGdCQUFnQixFQUFFLEtBQUssSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxXQUFXLENBQUM7Q0FDcEcsQ0FBQyxDQUFDO0FBRUgsR0FBRyxDQUFDLGFBQWEsR0FBRyxJQUFJLE1BQU0sQ0FBQztJQUM3QixLQUFLLEVBQUUsa0JBQWtCO0lBQ3pCLEtBQUssRUFBRSxRQUFRLENBQUMsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxlQUFlLEVBQUUsQ0FBQztJQUN2RCxXQUFXLEVBQUUsSUFBSSxnQkFBZ0IsRUFBRTtJQUNuQyxTQUFTLEVBQUUsQ0FBQyxHQUFHLGdCQUFnQixDQUFDO0lBQ2hDLE9BQU8sRUFBRSxHQUFhLEVBQUU7UUFDdEIsTUFBTSxJQUFJLEdBQUcsU0FBUyxFQUFFLENBQUMsSUFBSSxDQUFDO1FBQzlCLDRDQUE0QztRQUM1QyxHQUFHLENBQUMsYUFBYSxDQUFDLGVBQWUsR0FBRztZQUNsQyxHQUFHLElBQUksQ0FBQyxTQUFTO1lBQ2pCLEdBQUcsSUFBSSxDQUFDLGdCQUFnQjtZQUN4QixHQUFHLElBQUksQ0FBQyxRQUFRO1lBQ2hCLEdBQUcsSUFBSSxDQUFDLFNBQVM7U0FDbEIsQ0FBQztRQUVGLDRDQUE0QztRQUM1QyxHQUFHLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQ3RDLEdBQUcsQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FDdkMsTUFBTSxDQUFDLFVBQVUsR0FBRywwQkFBMEIsQ0FDL0MsRUFDRCxDQUFDLENBQ0YsQ0FBQztRQUNGLFdBQVcsRUFBRSxDQUFDO1FBRWQsT0FBTyxHQUFHLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQztJQUMzQyxDQUFDO0lBQ0QsZ0JBQWdCLEVBQUUsS0FBSyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsTUFBTSxDQUFDLGFBQWEsQ0FBQztDQUN4RyxDQUFDLENBQUM7QUFFSCxHQUFHLENBQUMsVUFBVSxHQUFHLElBQUksTUFBTSxDQUFDO0lBQzFCLEtBQUssRUFBRSxlQUFlO0lBQ3RCLEtBQUssRUFBRSxRQUFRLENBQUMsRUFBRSxFQUFFLEVBQUUsY0FBYyxFQUFFLEVBQUUsRUFBRSxZQUFZLEVBQUUsQ0FBQztJQUN6RCxXQUFXLEVBQUUsSUFBSSxnQkFBZ0IsRUFBRTtJQUNuQyxlQUFlLEVBQUUsRUFBRTtJQUNuQixPQUFPLEVBQUUsR0FBRyxFQUFFO1FBQ1osS0FBSyxDQUNILG1GQUFtRixDQUNwRixDQUFDO1FBQ0YsT0FBTyxDQUFDLG9DQUFvQztRQUU1QyxXQUFXLEVBQUUsQ0FBQyxDQUFDLGtDQUFrQztRQUVqRCxPQUFPLEdBQUcsQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDO0lBQ3hDLENBQUM7SUFDRCxnQkFBZ0IsRUFBRSxLQUFLLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQztDQUMvRSxDQUFDLENBQUM7QUFFSCxHQUFHLENBQUMsWUFBWSxHQUFHLElBQUksTUFBTSxDQUFDO0lBQzVCLEtBQUssRUFBRSxpQkFBaUI7SUFDeEIsS0FBSyxFQUFFLFFBQVEsQ0FBQztRQUNkLEVBQUUsRUFBRSx1QkFBdUI7UUFDM0IsRUFBRSxFQUFFLHVCQUF1QjtRQUMzQixFQUFFLEVBQUUsZUFBZTtLQUNwQixDQUFDO0lBQ0YsU0FBUyxFQUFFLEdBQUcsQ0FBQyxJQUFJO0lBQ25CLFFBQVEsRUFBRSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsV0FBVyxDQUFDLEVBQUUscUNBQXFDO0NBQ3ZHLENBQUMsQ0FBQztBQUVILEdBQUcsQ0FBQyxhQUFhLEdBQUcsSUFBSSxNQUFNLENBQUM7SUFDN0IsS0FBSyxFQUFFLGlDQUFpQztJQUN4QyxLQUFLLEVBQUUsUUFBUSxDQUFDO1FBQ2QsRUFBRSxFQUFFLFlBQVk7UUFDaEIsRUFBRSxFQUFFLGtCQUFrQjtRQUN0QixFQUFFLEVBQUUsZ0JBQWdCO0tBQ3JCLENBQUM7SUFDRixPQUFPLEVBQUUsS0FBSyxJQUFJLEVBQUUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUM7Q0FDeEUsQ0FBQyxDQUFDO0FBRUgsR0FBRyxDQUFDLGFBQWEsR0FBRyxJQUFJLE1BQU0sQ0FBQztJQUM3QixLQUFLLEVBQUUsOEJBQThCO0lBQ3JDLEtBQUssRUFBRSxRQUFRLENBQUM7UUFDZCxFQUFFLEVBQUUsWUFBWTtRQUNoQixFQUFFLEVBQUUsbUJBQW1CO1FBQ3ZCLEVBQUUsRUFBRSxnQkFBZ0I7S0FDckIsQ0FBQztJQUNGLE9BQU8sRUFBRSxLQUFLLElBQUksRUFBRSxDQUFDLE1BQU0sR0FBRyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQztDQUN4RSxDQUFDLENBQUM7QUFFSCxHQUFHLENBQUMsV0FBVyxHQUFHLElBQUksTUFBTSxDQUFDO0lBQzNCLEtBQUssRUFBRSx3QkFBd0I7SUFDL0IsS0FBSyxFQUFFLFFBQVEsQ0FBQztRQUNkLEVBQUUsRUFBRSxjQUFjO1FBQ2xCLEVBQUUsRUFBRSxrQkFBa0I7UUFDdEIsRUFBRSxFQUFFLGNBQWM7S0FDbkIsQ0FBQztJQUNGLE9BQU8sRUFBRSxLQUFLLElBQUksRUFBRSxDQUFDLE1BQU0sR0FBRyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQztDQUN0RSxDQUFDLENBQUM7QUFFSCxHQUFHLENBQUMsVUFBVSxHQUFHLElBQUksTUFBTSxDQUFDO0lBQzFCLEtBQUssRUFBRSx1QkFBdUI7SUFDOUIsS0FBSyxFQUFFLFFBQVEsQ0FBQztRQUNkLEVBQUUsRUFBRSxjQUFjO1FBQ2xCLEVBQUUsRUFBRSxzQkFBc0I7UUFDMUIsRUFBRSxFQUFFLGFBQWE7S0FDbEIsQ0FBQztJQUNGLE9BQU8sRUFBRSxLQUFLLEVBQUUsZUFBdUIsTUFBTSxDQUFDLFVBQVUsRUFBRSxFQUFFO1FBQzFELElBQUksWUFBWSxHQUFHLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLFlBQVksQ0FBQyxDQUFDO1FBRWhGLElBQUksQ0FBQyxZQUFZO1lBQUUsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLCtCQUErQixDQUFDLENBQUM7UUFFdkUsWUFBWSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFFNUIsTUFBTSwrQkFBK0IsQ0FBQztZQUNwQyxNQUFNLEVBQUUsWUFBWTtZQUNwQixTQUFTLEVBQUUsWUFBWSxDQUFDLFlBQVksQ0FBQztZQUNyQyxTQUFTLEVBQUUsWUFBWTtZQUN2QixNQUFNLEVBQUUsS0FBSztZQUNiLGNBQWMsRUFBRSxJQUFJO1NBQ3JCLENBQUMsQ0FBQztRQUNILFdBQVcsRUFBRSxDQUFDLENBQUMsa0NBQWtDO0lBRW5ELENBQUM7Q0FDRixDQUFDLENBQUM7QUFFSCxHQUFHLENBQUMsRUFBRSxHQUFHLElBQUksTUFBTSxDQUFDO0lBQ2xCLEtBQUssRUFBRSxhQUFhO0lBQ3BCLEtBQUssRUFBRSxRQUFRLENBQUMsRUFBRSxFQUFFLEVBQUUsa0JBQWtCLEVBQUUsRUFBRSxFQUFFLDJCQUEyQixFQUFFLENBQUM7SUFDNUUsT0FBTyxFQUFFLEdBQUcsRUFBRTtRQUNaOzs7O2tFQUkwRDtRQUMxRCxJQUFJLE9BQU8sR0FBVyxHQUFHLEVBQUUsT0FBTyxHQUFXLEdBQUcsQ0FBQztRQUVqRCxJQUFJLFdBQVcsR0FBRyxJQUFJLE1BQU0sQ0FBQztZQUMzQixLQUFLLEVBQUUsYUFBYTtZQUNwQixLQUFLLEVBQUUsUUFBUSxDQUFDLEVBQUUsRUFBRSxFQUFFLGdCQUFnQixFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsQ0FBQztZQUN2RCxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLFFBQVEsR0FBRyxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxFQUFFLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUMsOEJBQThCO1NBQ2hJLENBQUMsQ0FBQyxDQUFBLDJDQUEyQztRQUU5QyxHQUFHLENBQUMsRUFBRSxDQUFDLFFBQVEsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRWhDLFNBQVMsa0JBQWtCLENBQUMsT0FBZTtZQUN6QyxJQUFJLENBQUMsT0FBTztnQkFBRSxPQUFPO1lBQ3JCLE9BQU8sb0JBQW9CLENBQUMsT0FBTyxDQUFDLENBQUM7WUFFckMsU0FBUyxvQkFBb0IsQ0FBQyxPQUFlO2dCQUMzQyxJQUFJLE9BQU8sS0FBSyxPQUFPLElBQUksT0FBTyxLQUFLLENBQUM7b0JBQUUsT0FBTyxTQUFTLENBQUMsQ0FBQSxpQ0FBaUM7Z0JBQzVGLElBQUksT0FBTyxLQUFLLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUM7b0JBQUUsT0FBTyxTQUFTLENBQUMsQ0FBQSwrREFBK0Q7Z0JBRWxJLElBQUksTUFBTSxHQUFHO29CQUNYLEVBQUUsRUFBRSxFQUFFLGFBQWEsRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFO29CQUNsQyxFQUFFLEVBQUUsRUFBRSxhQUFhLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRTtpQkFDbEMsQ0FBQztnQkFHRixJQUFJLEdBQUcsR0FBRyxJQUFJLE1BQU0sQ0FBQztvQkFDbkIsS0FBSyxFQUFFLGFBQWEsR0FBRyxPQUFPO29CQUM5QixLQUFLLEVBQUUsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztvQkFDNUQsU0FBUyxFQUFFLFdBQVc7b0JBQ3RCLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxHQUFHLG9CQUFvQixDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUM7aUJBQ2pFLENBQUMsQ0FBQztnQkFDSCxPQUFPLEdBQUcsQ0FBQyxDQUFBLHNHQUFzRztZQUNuSCxDQUFDO1FBRUgsQ0FBQztRQUVELFNBQVMsb0JBQW9CLENBQUMsT0FBZSxFQUFFLEdBQVc7WUFDeEQsSUFBSSxHQUFHLENBQUMsUUFBUTtnQkFBRSxPQUFPO1lBQ3pCLElBQUksV0FBbUYsQ0FBQztZQUV4RixDQUFDLFNBQVMscUJBQXFCO2dCQUM3QixJQUFJLElBQUksR0FDTjtvQkFDRSxDQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUUsVUFBVSxDQUFDO29CQUMvQixDQUFDLFFBQVEsRUFBRSxTQUFTLEVBQUUsT0FBTyxDQUFDO29CQUM5QixDQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUUsT0FBTyxDQUFDO29CQUNoQyxDQUFDLFdBQVcsRUFBRSxVQUFVLEVBQUUsVUFBVSxDQUFDO29CQUNyQyxDQUFDLFVBQVUsRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDO29CQUMvQixDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsVUFBVSxDQUFDO29CQUNoQyxDQUFDLFVBQVUsRUFBRSxPQUFPLEVBQUUsUUFBUSxDQUFDO2lCQUNoQyxDQUFDO2dCQUVKLFdBQVcsR0FBRztvQkFDWjt3QkFDRSxNQUFNLEVBQUUsSUFBSTt3QkFDWixLQUFLLEVBQUUsRUFBRSxFQUFFLEVBQUUsZUFBZSxFQUFFLEVBQUUsRUFBRSxnQkFBZ0IsRUFBRSxFQUFFLEVBQUUsWUFBWSxFQUFFO3FCQUN2RTtvQkFDRDt3QkFDRSxNQUFNLEVBQUUsSUFBSTt3QkFDWixLQUFLLEVBQUUsRUFBRSxFQUFFLEVBQUUsZ0JBQWdCLEVBQUUsRUFBRSxFQUFFLGlCQUFpQixFQUFFLEVBQUUsRUFBRSxZQUFZLEVBQUU7cUJBQ3pFO29CQUNEO3dCQUNFLE1BQU0sRUFBRSxJQUFJO3dCQUNaLEtBQUssRUFBRSxFQUFFLEVBQUUsRUFBRSxnQkFBZ0IsRUFBRSxFQUFFLEVBQUUsZUFBZSxFQUFFLEVBQUUsRUFBRSxZQUFZLEVBQUU7cUJBQ3ZFO29CQUNEO3dCQUNFLE1BQU0sRUFBRSxJQUFJO3dCQUNaLEtBQUssRUFBRSxFQUFFLEVBQUUsRUFBRSxnQkFBZ0IsRUFBRSxFQUFFLEVBQUUsZ0JBQWdCLEVBQUUsRUFBRSxFQUFFLGFBQWEsRUFBRTtxQkFDekU7b0JBQ0Q7d0JBQ0UsTUFBTSxFQUFFLEtBQUs7d0JBQ2IsS0FBSyxFQUFFLEVBQUUsRUFBRSxFQUFFLG9CQUFvQixFQUFFLEVBQUUsRUFBRSxlQUFlLEVBQUUsRUFBRSxFQUFFLGVBQWUsRUFBRTtxQkFDOUU7b0JBQ0Q7d0JBQ0UsTUFBTSxFQUFFLEtBQUs7d0JBQ2IsS0FBSyxFQUFFLEVBQUUsRUFBRSxFQUFFLG9CQUFvQixFQUFFLEVBQUUsRUFBRSxnQkFBZ0IsRUFBRSxFQUFFLEVBQUUsZUFBZSxFQUFFO3FCQUMvRTtpQkFDRixDQUFDO2dCQUVGLFdBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7b0JBQ3pCLElBQUksT0FBTyxLQUFLLE9BQU8sRUFBRSxDQUFDO3dCQUN4QixJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUMvQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUMzQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUM3QyxDQUFDO3lCQUNJLElBQUksT0FBTyxLQUFLLE9BQU8sSUFBSSxPQUFPLEtBQUssQ0FBQyxFQUFFLENBQUM7d0JBQzlDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNwRCxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsSUFBSSxtQkFBbUIsR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUM1RCxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxXQUFXLENBQUM7b0JBQy9ELENBQUM7eUJBQ0ksSUFBSSxPQUFPLEtBQUssT0FBTyxJQUFJLE9BQU8sS0FBSyxDQUFDLEVBQUUsQ0FBQzt3QkFDOUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLElBQUksc0JBQXNCLENBQUM7d0JBQ3hDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxJQUFJLGtDQUFrQyxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQzNFLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxJQUFJLG9CQUFvQixDQUFBO29CQUN2QyxDQUFDO2dCQUNILENBQUMsQ0FBQyxDQUFDO1lBRUwsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUVMLE9BQU8sV0FBVyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUEsb0NBQW9DO1lBRXhJLFNBQVMsYUFBYSxDQUFDLElBQVksRUFBRSxLQUFtQjtnQkFFdEQsSUFBSSxJQUFJLEtBQUssS0FBSyxJQUFJLE9BQU8sS0FBSyxDQUFDO29CQUFFLE9BQU8sU0FBUyxDQUFDLENBQUEsa0NBQWtDO2dCQUV4RixJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksT0FBTyxLQUFLLE9BQU8sSUFBSSxPQUFPLEtBQUssQ0FBQztvQkFBRSxPQUFPLFNBQVMsQ0FBQyxDQUFBLHlDQUF5QztnQkFFekksSUFBSSxZQUFZLEdBQWlCLGNBQWMsQ0FBQyxrQkFBa0I7cUJBQy9ELE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxHQUFHLElBQUksR0FBRyxPQUFPLEdBQUcsUUFBUSxHQUFHLGtCQUFrQixDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBRWhILElBQUksT0FBTyxHQUFHLElBQUksTUFBTSxDQUFDO29CQUN2QixLQUFLLEVBQUUsS0FBSyxHQUFHLElBQUk7b0JBQ25CLEtBQUssRUFBRSxLQUFLO29CQUNaLFNBQVMsRUFBRSxHQUFHO29CQUNkLFNBQVMsRUFBRSxnQkFBZ0I7b0JBQzNCLFdBQVcsRUFBRSxJQUFJLGdCQUFnQixFQUFFO29CQUNuQyxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLGVBQWUsR0FBRyxDQUFDLEdBQUcsU0FBUyxFQUFFLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQztvQkFDM0UsZ0JBQWdCLEVBQUUsS0FBSyxJQUFJLEVBQUUsQ0FBQyxNQUFNLHVCQUF1QixDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLEtBQUssQ0FBQztpQkFDaEcsQ0FBQyxDQUFDO2dCQUVILE9BQU8sT0FBTyxDQUFDO2dCQUdmLEtBQUssVUFBVSx1QkFBdUIsQ0FBQyxHQUFXLEVBQUUsSUFBWSxFQUFFLFVBQXdCLEVBQUUsS0FBbUI7b0JBRTdHLElBQUksTUFBZ0ksQ0FBQztvQkFDckksQ0FBQyxTQUFTLG9CQUFvQjt3QkFDNUIsTUFBTSxHQUFHOzRCQUNQLFVBQVUsRUFBRTtnQ0FDVixFQUFFLEVBQUUsWUFBWTtnQ0FDaEIsRUFBRSxFQUFFLG9CQUFvQjtnQ0FDeEIsRUFBRSxFQUFFLHFCQUFxQjs2QkFDMUI7NEJBQ0QsS0FBSyxFQUFFO2dDQUNMLEVBQUUsRUFBRSxTQUFTO2dDQUNiLEVBQUUsRUFBRSxnQkFBZ0I7Z0NBQ3BCLEVBQUUsRUFBRSxnQkFBZ0I7NkJBQ3JCOzRCQUNELE1BQU0sRUFBRTtnQ0FDTixFQUFFLEVBQUUsU0FBUztnQ0FDYixFQUFFLEVBQUUsa0JBQWtCO2dDQUN0QixFQUFFLEVBQUUsaUJBQWlCOzZCQUN0Qjs0QkFDRCxVQUFVLEVBQUU7Z0NBQ1YsRUFBRSxFQUFFLE9BQU87Z0NBQ1gsRUFBRSxFQUFFLHFCQUFxQjtnQ0FDekIsRUFBRSxFQUFFLHFCQUFxQjs2QkFDMUI7NEJBQ0QsT0FBTyxFQUFFO2dDQUNQLEVBQUUsRUFBRSxPQUFPO2dDQUNYLEVBQUUsRUFBRSxnQkFBZ0I7Z0NBQ3BCLEVBQUUsRUFBRSxrQkFBa0I7NkJBQ3ZCO3lCQUNGLENBQUM7d0JBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7NkJBQ2xCLE9BQU8sQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFOzRCQUNqQixLQUFLLENBQUMsZUFBZSxDQUFDLElBQUksS0FBSyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUM7NEJBQ3pDLEtBQUssQ0FBQyxlQUFlLENBQUMsSUFBSSxLQUFLLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQzt3QkFDM0MsQ0FBQyxDQUFDLENBQUM7b0JBQ1AsQ0FBQyxDQUFDLEVBQUUsQ0FBQztvQkFFTCxNQUFNLGtCQUFrQixFQUFFLENBQUM7b0JBQzNCLDhCQUE4QixFQUFFLENBQUM7b0JBQ2pDLE1BQU0sZ0NBQWdDLEVBQUUsQ0FBQztvQkFFekMsS0FBSyxVQUFVLGtCQUFrQjt3QkFDL0IsTUFBTSxhQUFhLEdBQUcsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO3dCQUMxQyxNQUFNLFFBQVEsR0FBRyxzQkFBc0IsQ0FBQTt3QkFHdkMsTUFBTSxRQUFRLEdBQXFDOzRCQUNqRCxVQUFVLEVBQUUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRTs0QkFDckUsZUFBZSxFQUFFLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsTUFBTSxFQUFFOzRCQUM5RSxTQUFTLEVBQUUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRTs0QkFDcEUsY0FBYyxFQUFFLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSyxFQUFFOzRCQUM1RSxVQUFVLEVBQUUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxVQUFVLEVBQUU7NEJBQzdFLFVBQVUsRUFBRSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLFVBQVUsRUFBRTs0QkFDN0UsT0FBTyxFQUFFLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsT0FBTyxFQUFFOzRCQUN2RSxTQUFTLEVBQUUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRTs0QkFDcEUsTUFBTSxFQUFFLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUU7eUJBQ2xFLENBQUM7d0JBRUYsQ0FBQyxTQUFTLHVCQUF1Qjs0QkFDL0IsTUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLFFBQVEsR0FBRyxLQUFLLEdBQUcsT0FBTyxHQUFHLFFBQVEsQ0FBQzs0QkFDM0QsTUFBTSxJQUFJLEdBQUcsV0FBVyxFQUFFLE1BQU0sR0FBRyxhQUFhLENBQUM7NEJBQ2pELFFBQVEsQ0FBQyxTQUFTLENBQUMsS0FBSyxH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