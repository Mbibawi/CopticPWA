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
                Prefix.commonPrayer + "WeHaveBeenSavedWithYou",
                Prefix.massCommon + "HisFoundations&D=$Seasons.GreatLent",
                Prefix.incenseDawn + "GodHaveMercyOnUsRefrain",
            ];
            selectElementsByDataSet(btnDocFragment, titles[0], { equal: true }, 'root').forEach(el => el.remove()); //We remove the existing 'Sotis Amen' prayer
            let tables = titles.map(title => findTable(title) || undefined); //We retrieve the 3 tables by their titles
            if (!tables || tables.length < 1)
                return;
            const anchor = selectElementsByDataSet(btnDocFragment, Prefix.massCommon + "AbsolutionForTheFather", { equal: true }, 'root')[0]; //This is the html element before which we will insert the retrived tables
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
        const readingsAnchor = selectElementsByDataSet(btnDocFragment, Prefix.anchor + "Readings")[0]; //this is the html element before which we will insert all the readings and responses
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
                            htmlRow.classList.replace(className, actors[actors.length - 1].Class); //Replacing it with 'No Actor)
                            const note = eighthNoteCode; //removing the musicla notes
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
                showPrayers({
                    table: Prophecies,
                    languages: langs,
                    container: docFragment,
                    clearContainerDiv: false,
                    clearRightSideBar: false,
                    position: { beforeOrAfter: 'beforebegin', el: anchor }
                });
            })();
            (function insertEklonominTaghonata() {
                //!We must insert the Prophecies before Eklonomin Taghonta
                const godHaveMercy = findTable(Prefix.incenseDawn + "GodHaveMercyOnUs&D=$Seasons.GreatLent", IncenseArray);
                if (!godHaveMercy)
                    return console.log("Didn't find God Have Mercy for Great Lent");
                showPrayers({
                    table: godHaveMercy,
                    languages: getLanguages(Prefix.incenseDawn),
                    position: { beforeOrAfter: 'beforebegin', el: anchor },
                    clearContainerDiv: false,
                    clearRightSideBar: false,
                    container: docFragment
                });
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
                            function setTableAndAnchor(reading, title) {
                                reading.table = findTable(`${Prefix.HolyWeek}${title}${service}`, HolyWeekArray) || undefined;
                                if (!reading.table)
                                    console.log(`Didn't find a table having as title: ${title}`);
                                reading.anchor = fetchAnchors(title);
                            }
                        })();
                        (function findReadingsTablesAndAnchors() {
                            [readings.coptGospel, readings.nonCopticGospel, readings.coptPsalm, readings.nonCopticPsalm, readings.Commentary, readings.Prophecies, readings.Sermony]
                                .forEach(reading => setTableAndAnchor(reading, reading.key, reading.keyAnchor));
                            readings.nonCopticPsalm.anchor = readings.nonCopticPsalm.anchor.previousElementSibling; //We need to do this because the nonCopticPsalm is inserted before the previous sibling of nonCopticGospel.placeHolder
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
                                return findTable(`${Prefix.HolyWeek}${hour}${service}${name}&D=${copticReadingsDate}`, dayPrayers) || undefined;
                            }
                        })();
                        function fetchAnchors(title) {
                            return selectElementsByDataSet(btnHour.docFragment, Prefix.anchor + title, undefined, 'root')[0];
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
        async function testamentChildren(btn) {
            btn.children = btn.children || await getBooksButtons(btn);
        }
        ;
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
        async function getBooksButtons(btn) {
            let booksList = await getBibleBooksList(defaultLanguage);
            if (!booksList)
                return;
            if (btn === oldTestament)
                booksList = booksList.slice(0, 48);
            else if (btn === newTestament)
                booksList = booksList.slice(48, booksList.length);
            const books = booksList.map(book => [book.human_long, book.id]);
            return books.map(([name, id], index) => {
                const btn = new Button({
                    btnID: `btnBook${index}`,
                    label: { DL: name, FL: undefined },
                    onClick: () => btn.children = btn.children || getChaptersButtons(id), //!We need the children to be added when the button is clicked not when it is created because the Bibles are not defined at this stage
                    afterShowPrayers: () => document.getElementById('inputFilter')?.remove(),
                });
                return btn;
            });
        }
        function getChaptersButtons(bookID) {
            const book = Bibles[defaultLanguage][0]?.find((book) => book[0].id === bookID);
            if (!book)
                return;
            return chaptersBtns(book);
            function chaptersBtns(book) {
                const [chaptersList, bookID] = [book[0].chaptersList, book[0].id];
                return chaptersList
                    .filter(chapter => Number(chapter))
                    .map(chapter => chapterButton(chapter));
                function chapterButton(chapter) {
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
        async function chapterBtnOnClick(bookID, chapterNumber) {
            if (!bookID || !chapterNumber)
                return;
            const languages = [defaultLanguage];
            if (foreingLanguage)
                languages?.push(foreingLanguage);
            await showChapterText();
            async function showChapterText() {
                const title = [
                    `'Bible_${bookID}${chapterNumber}${css.Title}`,
                ];
                await retrieve();
                async function retrieve() {
                    const [bookDefault, bookForeign] = await Promise.all(languages.map(async (lang) => await getBook(lang)));
                    const first = bookDefault.chaptersList.find(el => Number(el));
                    const ref = `${Prefix.readingRef}${bookID}:${chapterNumber}:${first}-End`;
                    const retrieved = await retrieveReadingTableFromBible([[ref]], languages);
                    [bookDefault, bookForeign]
                        .map((book, index) => title.push(getTitle(book, languages[index], chapterNumber)));
                    retrieved[0] = title;
                    showPrayers({
                        table: retrieved,
                        languages: languages,
                        container: containerDiv,
                        clearContainerDiv: true,
                        clearRightSideBar: true,
                    });
                    updateBookmark(bookID, chapterNumber);
                }
                ;
                async function getBook(lang) {
                    if (!lang)
                        return;
                    const list = await getBibleBooksList(lang);
                    return list?.find(b => b.id === bookID);
                }
            }
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
                    });
                });
                btnsDiv.classList.add(css.inlineButtonsContainer);
                // floatOnTopOrBottom(btnsDiv, false, "0px");
                btnsDiv.style.gridTemplateColumns = setGridColumnsOrRowsNumber(btnsDiv);
                async function nextOnClick(next, id, chapterNumber) {
                    const books = await getBibleBooksList(defaultLanguage);
                    const [book, chapter] = getBookAndChapter();
                    await chapterBtnOnClick(book?.id, chapter);
                    updateBookmark(book.id, chapter);
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
            function updateBookmark(bookID, chapterNumber) {
                bookMarks[0] = [bookID, chapterNumber]; //We add the chapter to the bookMarks
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
        function getChapterLabel(chapter) {
            return {
                AR: `إصحاح ${chapter}`,
                FR: `Chapître ${chapter}`,
                EN: `Chapter ${chapter}`,
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
            return [titleRow, ...matchPargraphsSplitting(retrievedText, langs, row.length - langs.length, actor) || []];
    }
    async function retrieveVerses(lang, ref) {
        if (!lang || ![defaultLanguage, foreingLanguage].includes(lang))
            return ''; //We return an empty string if the language is not included in the list of languages that will be displayed to the user.
        const arabicBible = await getBibleVersion('AR'); //We will need it to get the last verse when the reference ends with 'End',
        let parts, verses;
        const bookID = ref.split(':')[0];
        const refs = ref.split('/'); //Some references include more than one reference, speparated by '/', eg.: "GEN:12:3-End/13:1-End/14:1-8". When splitted, we will get [GEN:12:3-End, 13:1-End, 14:1-8]
        let text = await Promise.all(refs.map(async (ref) => {
            const [chapterNumber, versesRange] = ref.replace(`${bookID}:`, '').split(':'); //We should always get an array of 2 elements eg: ['GEN', '13', '3-End/15-End']; 
            if (!chapterNumber || !versesRange)
                return ''; //This means that the reference is badly formatted  
            verses = await Promise.all(versesRange
                .split('/')
                .map(async (range) => {
                range = replaceEnd(range, chapterNumber); //We replace 'End' with the last verse in the Arabic version since the references are taken from the Arabic version of the 
                return await retrieveVersesText(lang, bookID, chapterNumber, range) || "Error: Failed to retrieve verses";
            }));
            if (bookID === "PSA")
                return verses.join(' '); //We don't split the psalm into paragraphs
            return verses.join('\n');
        }));
        return text.join('\n');
        function replaceEnd(range, chapter) {
            if (!range.toUpperCase().includes('END'))
                return range;
            const verses = getBibleChapter(chapter, getBibleBook(arabicBible, bookID))
                ?.filter(verse => Number(verse[0]));
            return range.replace('End', verses[verses.length - 1][0]);
        }
        ;
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
        const exists = Array.from(ready).find(array => array[0] === bookID + ":" + chapterNumber + ":" + lang);
        if (lang === 'CA')
            lang = 'AR';
        if (exists)
            return getVersesRange(exists[1], verses.split('-'));
        if (!lang) {
            return new Error("The language is not valid. Error from retrieveVersesText()");
        }
        ;
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
        const Bible = await getBibleVersion(lang, false);
        if (!Bible)
            return new Error("Failed to retrieve verse");
        const chapterVerses = getBibleChapter(chapterNumber, undefined, Bible, bookID);
        if (!chapterVerses) {
            console.log('chapterVerses = ', chapterVerses);
            return new Error("Failed to retrieve verse");
        }
        ;
        ready.add([bookID + ":" + chapterNumber + ":" + lang, chapterVerses]);
        const range = verses.split('-');
        if (range.length !== 2) {
            console.log('bookID = ', bookID);
            return new Error(`Failed to retrieve verse because the range of verses is >2 which means that there is an error in the referecne : book = ${bookID}, chapter = ${chapterNumber}`);
        }
        ;
        return getVersesRange(chapterVerses, range);
        function getVersesRange(chapter, [Start, End]) {
            (function filterChapter() {
                //!This action must be performed before processing the verses references. We remove the last element of the chapter if it is not a verese.
                chapter = chapter.filter(verse => Number(verse[0]) || ['\n', '#'].includes(verse[0]));
                while (chapter[chapter.length - 1][0] === '\n')
                    chapter.pop();
            })();
            const first = chapter.find(verse => verse && verse[0] === Start);
            if (!first)
                return new Error("could not retrieve 'first'");
            const last = chapter.find(verse => verse && verse[0] === End);
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
function matchPargraphsSplitting(retrieved, langs, add, actor = actors[actors.length - 1].Class) {
    if (add < 0)
        add = 0;
    if (add > 1) {
        alert('Error from matchPargraphsSplitting(): add>1 There is something wrong with the length of the row or of the language: langs.length = ' + langs.length.toString() + ' langs = ' + langs.toString());
        return;
    }
    const paragraphs = retrieved[langs.indexOf(defaultLanguage) + add]?.split('\n');
    if (!paragraphs)
        return;
    const exp = RegExp('Sup_\\d*_Sup', 'g');
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
                .map(([Start, End], index) => {
                const match = splitTextIntoParagraphs(Start, index);
                text = text.replace(match, ''); //! In some cases when a reading reference covers more than one chapter, there are verses with duplicates numbers from the different chapters (eg.: 'HEB:13:1-End/14:1-4', we have duplicate verses 1, 2, 3 and 4, from chapter 13 and from chapter 14). this will lead to the match being retrieved twice for those verses. In order to resolve this problem, we remove the matched text from the original text
                return match || '';
            })
                .join('\n');
        function splitTextIntoParagraphs(Start, index) {
            //versesRange contains 2 elements. Each element is like "Sup_2_Sup". The 1st element is the number of the first verse in the paragraph. The 2nd element is the number of the last verse
            if (!Start)
                return '';
            let toVerse = ''; //!We need a new variable otherwise we will modify versesRange[1] in its original array
            if (index < ranges.length - 1) {
                //If we have not reached the last element of ranges, we will set the last version (_Sup_[version number]_Sup) to the first verse of the next element in the ranges array, in order to retrive the text until the end of the last verse number. This RegExp will stop before the first occurence of the first verse in the next range
                let i = index + 1;
                while (ranges[i] && !RegExp(`${ranges[i][0]}`).test(text))
                    i++; //!This covers a rare case where the numbering of the verses in the defaultLanguage version of the Bible is longer than the numbering in the foreign language version, which leads to a no match with the "_Sup[next verse number]_Sup" in the foreign language text, and missing the last block of versions in this laguage.
                toVerse = `?(?=${ranges[i]?.[0] || ''})`;
            }
            const match = text.match(RegExp(`${Start}.*${toVerse}`));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVjbGFyZUJ1dHRvbnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9tb2R1bGVzL0RlY2xhcmVCdXR0b25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFNBQVMsU0FBUztJQUNoQixPQUFPO1FBQ0wsT0FBTyxFQUFFO1lBQ1AscU5BQXFOO1lBQ3JOLE1BQU0sQ0FBQyxhQUFhLEdBQUcsY0FBYztZQUNyQyxNQUFNLENBQUMsV0FBVyxHQUFHLFNBQVM7WUFDOUIsTUFBTSxDQUFDLGFBQWEsR0FBRyxlQUFlO1lBQ3RDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsWUFBWTtZQUNqQyxNQUFNLENBQUMsV0FBVyxHQUFHLGlCQUFpQjtZQUN0QyxNQUFNLENBQUMsV0FBVyxHQUFHLGlCQUFpQjtZQUN0QyxNQUFNLENBQUMsY0FBYyxHQUFHLGdCQUFnQjtZQUN4QyxNQUFNLENBQUMsV0FBVyxHQUFHLGNBQWM7WUFDbkMsTUFBTSxDQUFDLGNBQWMsR0FBRyxxQkFBcUI7WUFDN0MsTUFBTSxDQUFDLGFBQWEsR0FBRyxZQUFZO1lBQ25DLE1BQU0sQ0FBQyxhQUFhLEdBQUcsY0FBYztZQUNyQyxNQUFNLENBQUMsYUFBYSxHQUFHLFlBQVk7U0FDcEM7UUFDRCxJQUFJLEVBQUU7WUFDSixxR0FBcUc7WUFDckcsVUFBVSxFQUFFO2dCQUNWLE1BQU0sQ0FBQyxVQUFVLEdBQUcsZUFBZTtnQkFDbkMsTUFBTSxDQUFDLFVBQVUsR0FBRyxpQkFBaUI7Z0JBQ3JDLE1BQU0sQ0FBQyxVQUFVLEdBQUcscUJBQXFCO2dCQUN6QyxNQUFNLENBQUMsVUFBVSxHQUFHLHNCQUFzQjtnQkFDMUMsTUFBTSxDQUFDLFlBQVksR0FBRyxjQUFjO2dCQUNwQyxNQUFNLENBQUMsVUFBVSxHQUFHLHdCQUF3QjtnQkFDNUMsTUFBTSxDQUFDLFVBQVUsR0FBRyxXQUFXO2dCQUMvQixNQUFNLENBQUMsVUFBVSxHQUFHLFVBQVU7Z0JBQzlCLE1BQU0sQ0FBQyxVQUFVLEdBQUcsbUJBQW1CO2dCQUN2QyxNQUFNLENBQUMsWUFBWSxHQUFHLE9BQU87YUFDOUIsRUFBRSxnREFBZ0Q7WUFDbkQsT0FBTyxFQUFFO2dCQUNQLE1BQU0sQ0FBQyxVQUFVLEdBQUcsdUJBQXVCO2dCQUMzQyxNQUFNLENBQUMsV0FBVyxHQUFHLGdCQUFnQjtnQkFDckMsTUFBTSxDQUFDLFVBQVUsR0FBRyxxQkFBcUI7Z0JBQ3pDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsVUFBVTtnQkFDL0IsTUFBTSxDQUFDLFdBQVcsR0FBRyxPQUFPO2dCQUM1QixNQUFNLENBQUMsV0FBVyxHQUFHLHNCQUFzQjtnQkFDM0MsTUFBTSxDQUFDLFVBQVUsR0FBRyxpQkFBaUI7YUFDdEMsRUFBRSx5RUFBeUU7WUFDNUUsU0FBUyxFQUFFO2dCQUNULE1BQU0sQ0FBQyxVQUFVLEdBQUcsdUJBQXVCO2dCQUMzQyxNQUFNLENBQUMsYUFBYSxHQUFHLGdCQUFnQjtnQkFDdkMsTUFBTSxDQUFDLFVBQVUsR0FBRyxxQkFBcUI7Z0JBQ3pDLE1BQU0sQ0FBQyxhQUFhLEdBQUcsVUFBVTtnQkFDakMsTUFBTSxDQUFDLGFBQWEsR0FBRyxPQUFPO2dCQUM5QixNQUFNLENBQUMsYUFBYSxHQUFHLGVBQWU7Z0JBQ3RDLE1BQU0sQ0FBQyxhQUFhLEdBQUcsVUFBVTtnQkFDakMsTUFBTSxDQUFDLGFBQWEsR0FBRyxzQkFBc0I7YUFDOUMsRUFBRSwyRUFBMkU7WUFDOUUsT0FBTyxFQUFFO2dCQUNQLE1BQU0sQ0FBQyxVQUFVLEdBQUcsdUJBQXVCO2dCQUMzQyxNQUFNLENBQUMsV0FBVyxHQUFHLGdCQUFnQjtnQkFDckMsTUFBTSxDQUFDLFVBQVUsR0FBRyxxQkFBcUI7Z0JBQ3pDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsVUFBVTtnQkFDL0IsTUFBTSxDQUFDLFdBQVcsR0FBRyxPQUFPO2dCQUM1QixNQUFNLENBQUMsV0FBVyxHQUFHLGVBQWU7Z0JBQ3BDLE1BQU0sQ0FBQyxVQUFVLEdBQUcsbUJBQW1CO2FBQ3hDLEVBQUUsMEVBQTBFO1lBQzdFLE1BQU0sRUFBRSxFQUFFLEVBQUUsd0VBQXdFO1lBQ3BGLGdCQUFnQixFQUFFO2dCQUNoQixNQUFNLENBQUMsVUFBVSxHQUFHLDBCQUEwQjthQUMvQztZQUNELFFBQVEsRUFBRTtnQkFDUixNQUFNLENBQUMsVUFBVSxHQUFHLGVBQWU7Z0JBQ25DLE1BQU0sQ0FBQyxVQUFVLEdBQUcscUJBQXFCO2dCQUN6QyxNQUFNLENBQUMsVUFBVSxHQUFHLDRCQUE0QjtnQkFDaEQsTUFBTSxDQUFDLFVBQVUsR0FBRyxzQkFBc0I7Z0JBQzFDLE1BQU0sQ0FBQyxZQUFZLEdBQUcsbUJBQW1CO2dCQUN6QyxNQUFNLENBQUMsWUFBWSxHQUFHLHlCQUF5QjtnQkFDL0MsTUFBTSxDQUFDLFVBQVUsR0FBRyxvQkFBb0I7Z0JBQ3hDLE1BQU0sQ0FBQyxZQUFZLEdBQUcsaUJBQWlCO2dCQUN2QyxNQUFNLENBQUMsVUFBVSxHQUFHLDhCQUE4QjtnQkFDbEQsTUFBTSxDQUFDLFVBQVUsR0FBRyx3QkFBd0I7Z0JBQzVDLE1BQU0sQ0FBQyxVQUFVLEdBQUcsWUFBWTtnQkFDaEMsTUFBTSxDQUFDLFlBQVksR0FBRyxjQUFjO2FBQ3JDLEVBQUUscURBQXFEO1lBQ3hELFNBQVMsRUFBRTtnQkFDVCxNQUFNLENBQUMsVUFBVSxHQUFHLG1CQUFtQjtnQkFDdkMsTUFBTSxDQUFDLFVBQVUsR0FBRyxZQUFZO2FBQ2pDLEVBQUUsa0dBQWtHO1NBQ3RHO1FBQ0QsUUFBUSxFQUFFO1lBQ1IsSUFBSSxFQUFFO2dCQUNKLE1BQU0sQ0FBQyxRQUFRLEdBQUcsbUJBQW1CO2dCQUVyQyxNQUFNLENBQUMsUUFBUSxHQUFHLE1BQU07Z0JBRXhCLE1BQU0sQ0FBQyxRQUFRLEdBQUcsV0FBVztnQkFFN0IsTUFBTSxDQUFDLFFBQVEsR0FBRyxnQkFBZ0I7Z0JBRWxDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsTUFBTTtnQkFFeEIsTUFBTSxDQUFDLFFBQVEsR0FBRyxXQUFXO2dCQUU3QixNQUFNLENBQUMsUUFBUSxHQUFHLE1BQU07Z0JBRXhCLE1BQU0sQ0FBQyxRQUFRLEdBQUcsV0FBVztnQkFFN0IsTUFBTSxDQUFDLFFBQVEsR0FBRyxPQUFPO2dCQUV6QixNQUFNLENBQUMsUUFBUSxHQUFHLGVBQWU7Z0JBRWpDLE1BQU0sQ0FBQyxRQUFRLEdBQUcscUJBQXFCO2dCQUV2QyxNQUFNLENBQUMsUUFBUSxHQUFHLFlBQVk7Z0JBQzlCLG9DQUFvQztnQkFFcEMsTUFBTSxDQUFDLFFBQVEsR0FBRyxNQUFNO2dCQUV4QixNQUFNLENBQUMsTUFBTSxHQUFHLDJCQUEyQixFQUFFLDBIQUEwSDtnQkFFdkssTUFBTSxDQUFDLE1BQU0sR0FBRyxzQkFBc0IsRUFBRSwwSEFBMEg7Z0JBRWxLLE1BQU0sQ0FBQyxNQUFNLEdBQUcsaUJBQWlCLEVBQUUsK0VBQStFO2dCQUVsSCxNQUFNLENBQUMsUUFBUSxHQUFHLDJCQUEyQjtnQkFFN0MsTUFBTSxDQUFDLE1BQU0sR0FBRyxVQUFVLEVBQUUsMEVBQTBFO2dCQUV0RyxNQUFNLENBQUMsTUFBTSxHQUFHLGdCQUFnQixFQUFFLCtFQUErRTtnQkFFakgsTUFBTSxDQUFDLE1BQU0sR0FBRyxnQkFBZ0IsRUFBRSwrRUFBK0U7Z0JBRWpILE1BQU0sQ0FBQyxNQUFNLEdBQUcsZ0JBQWdCLEVBQUUsK0VBQStFO2dCQUVqSCxNQUFNLENBQUMsUUFBUSxHQUFHLHlCQUF5QixFQUFDLHlEQUF5RDtnQkFFckcsTUFBTSxDQUFDLFdBQVcsR0FBRyxrQkFBa0I7Z0JBRXZDLE1BQU0sQ0FBQyxZQUFZLEdBQUcsT0FBTztnQkFFN0IsTUFBTSxDQUFDLFdBQVcsR0FBRyxrQkFBa0I7Z0JBRXZDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsZ0JBQWdCO2dCQUVsQyxNQUFNLENBQUMsV0FBVyxHQUFHLGtCQUFrQjtnQkFFdkMsTUFBTSxDQUFDLFlBQVksR0FBRyxtQkFBbUI7Z0JBRXpDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsT0FBTzthQUU3QjtZQUVELEtBQUssRUFBRTtnQkFDTCxNQUFNLENBQUMsUUFBUSxHQUFHLG1CQUFtQjtnQkFFckMsTUFBTSxDQUFDLFFBQVEsR0FBRyxVQUFVO2dCQUU1QixNQUFNLENBQUMsUUFBUSxHQUFHLGlCQUFpQjtnQkFFbkMsTUFBTSxDQUFDLFFBQVEsR0FBRyxZQUFZO2dCQUU5QixNQUFNLENBQUMsUUFBUSxHQUFHLGFBQWE7Z0JBRS9CLE1BQU0sQ0FBQyxRQUFRLEdBQUcsTUFBTTtnQkFFeEIsTUFBTSxDQUFDLFFBQVEsR0FBRyxXQUFXO2dCQUU3QixNQUFNLENBQUMsUUFBUSxHQUFHLHFCQUFxQjtnQkFFdkMsTUFBTSxDQUFDLFFBQVEsR0FBRyxnQkFBZ0I7Z0JBRWxDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsYUFBYTtnQkFFL0IsTUFBTSxDQUFDLFFBQVEsR0FBRyxNQUFNO2dCQUV4QixNQUFNLENBQUMsUUFBUSxHQUFHLFdBQVc7Z0JBRTdCLE1BQU0sQ0FBQyxRQUFRLEdBQUcsTUFBTTtnQkFFeEIsTUFBTSxDQUFDLFFBQVEsR0FBRyxXQUFXO2dCQUU3QixNQUFNLENBQUMsUUFBUSxHQUFHLE9BQU87Z0JBRXpCLE1BQU0sQ0FBQyxRQUFRLEdBQUcsZUFBZTtnQkFFakMsTUFBTSxDQUFDLFFBQVEsR0FBRyxvQkFBb0I7Z0JBRXRDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsb0JBQW9CO2dCQUV0QyxNQUFNLENBQUMsUUFBUSxHQUFHLE1BQU07Z0JBRXhCLE1BQU0sQ0FBQyxRQUFRLEdBQUcsMkJBQTJCO2FBRTlDO1NBQ0Y7UUFDRCxRQUFRLEVBQ1I7WUFDRSxRQUFRLEVBQUU7Z0JBQ1IsTUFBTSxDQUFDLFFBQVEsR0FBRyxrQkFBa0I7Z0JBRXBDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsZ0JBQWdCO2dCQUVsQyxNQUFNLENBQUMsUUFBUSxHQUFHLFlBQVk7Z0JBRTlCLE1BQU0sQ0FBQyxRQUFRLEdBQUcsYUFBYTthQUVoQztZQUNELEtBQUssRUFBRTtnQkFDTCxNQUFNLENBQUMsYUFBYSxHQUFHLGNBQWM7Z0JBQ3JDLE1BQU0sQ0FBQyxZQUFZLEdBQUcsK0JBQStCO2dCQUNyRCxNQUFNLENBQUMsV0FBVyxHQUFHLFNBQVM7Z0JBQzlCLE1BQU0sQ0FBQyxRQUFRLEdBQUcsOENBQThDO2dCQUNoRSxNQUFNLENBQUMsUUFBUSxHQUFHLDJDQUEyQztnQkFDN0QsTUFBTSxDQUFDLFVBQVUsR0FBRyxhQUFhO2dCQUNqQyxNQUFNLENBQUMsTUFBTSxHQUFHLFVBQVU7Z0JBQzFCLE1BQU0sQ0FBQyxNQUFNLEdBQUcsT0FBTztnQkFDdkIsTUFBTSxDQUFDLE1BQU0sR0FBRyxjQUFjO2dCQUM5QixNQUFNLENBQUMsV0FBVyxHQUFHLFlBQVk7Z0JBQ2pDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsaUJBQWlCO2dCQUN0QyxNQUFNLENBQUMsVUFBVSxHQUFHLDRCQUE0QixHQUFHLE1BQU07Z0JBQ3pELE1BQU0sQ0FBQyxZQUFZLEdBQUcsY0FBYztnQkFDcEMsTUFBTSxDQUFDLFVBQVUsR0FBRyw0QkFBNEI7Z0JBQ2hELE1BQU0sQ0FBQyxZQUFZLEdBQUcsY0FBYztnQkFDcEMsTUFBTSxDQUFDLFVBQVUsR0FBRyxpQkFBaUI7Z0JBQ3JDLE1BQU0sQ0FBQyxjQUFjLEdBQUcsZ0JBQWdCO2dCQUN4QyxNQUFNLENBQUMsV0FBVyxHQUFHLGlCQUFpQjtnQkFDdEMsTUFBTSxDQUFDLFlBQVksR0FBRyxtQkFBbUI7Z0JBQ3pDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsYUFBYTtnQkFDL0IsTUFBTSxDQUFDLFlBQVksR0FBRyxZQUFZO2dCQUNsQyxNQUFNLENBQUMsWUFBWSxHQUFHLGlCQUFpQjtnQkFDdkMsTUFBTSxDQUFDLFlBQVksR0FBRyxjQUFjO2dCQUNwQyxNQUFNLENBQUMsWUFBWSxHQUFHLFlBQVk7Z0JBQ2xDLE1BQU0sQ0FBQyxZQUFZLEdBQUcsZ0JBQWdCO2dCQUN0Qyw4QkFBOEI7Z0JBQzlCLE1BQU0sQ0FBQyxZQUFZLEdBQUcsT0FBTztnQkFDN0IsTUFBTSxDQUFDLFVBQVUsR0FBRyxtREFBbUQ7Z0JBQ3ZFLE1BQU0sQ0FBQyxVQUFVLEdBQUcsZUFBZTtnQkFDbkMsTUFBTSxDQUFDLFdBQVc7Z0JBQ2xCLE1BQU0sQ0FBQyxVQUFVLEdBQUcsa0JBQWtCO2dCQUN0QyxNQUFNLENBQUMsUUFBUSxHQUFHLDRDQUE0QzthQUUvRDtZQUNELFlBQVksRUFBRSxFQUFFO1lBQ2hCLG1CQUFtQixFQUFFLEVBQUU7WUFDdkIsWUFBWSxFQUFFLEVBQUU7U0FDakI7UUFDRCxhQUFhLEVBQ1g7WUFDRSxNQUFNLENBQUMsYUFBYSxHQUFHLGNBQWM7WUFDckMsTUFBTSxDQUFDLE1BQU0sR0FBRyxTQUFTO1lBQ3pCLE1BQU0sQ0FBQyxZQUFZLEVBQUMsbUJBQW1CO1lBQ3ZDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsU0FBUztZQUM5QixNQUFNLENBQUMsTUFBTSxHQUFHLGlCQUFpQixFQUFDLFVBQVU7WUFDNUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxZQUFZO1lBQzVCLE1BQU0sQ0FBQyxNQUFNLEdBQUcsZUFBZSxFQUFDLFVBQVU7WUFDMUMsTUFBTSxDQUFDLFVBQVUsR0FBRyxvQkFBb0I7WUFDeEMsTUFBTSxDQUFDLE1BQU0sR0FBRyxhQUFhLEVBQUMsVUFBVTtZQUN4QyxNQUFNLENBQUMsTUFBTSxHQUFHLFFBQVE7WUFDeEIsTUFBTSxDQUFDLE1BQU0sR0FBRyxXQUFXLEVBQUMsVUFBVTtZQUN0QyxNQUFNLENBQUMsTUFBTSxHQUFHLE9BQU87WUFDdkIsTUFBTSxDQUFDLFlBQVksR0FBRyxpQkFBaUI7WUFDdkMsTUFBTSxDQUFDLFlBQVksR0FBRyxjQUFjO1lBQ3BDLE1BQU0sQ0FBQyxjQUFjLEdBQUcscUJBQXFCO1lBQzdDLE1BQU0sQ0FBQyxjQUFjLEdBQUcsa0JBQWtCO1lBQzFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsVUFBVTtZQUMxQixNQUFNLENBQUMsVUFBVSxHQUFHLGtCQUFrQjtZQUN0QyxNQUFNLENBQUMsTUFBTSxHQUFHLFlBQVk7WUFDNUIsTUFBTSxDQUFDLGNBQWMsR0FBRyx3QkFBd0I7WUFDaEQsTUFBTSxDQUFDLFlBQVksR0FBRyxtQkFBbUI7U0FDMUM7S0FDSixDQUFDO0FBQ0osQ0FBQztBQUVELFNBQVMscUJBQXFCO0lBQzVCLE9BQU87UUFDTCxXQUFXLEVBQUU7WUFDWCxFQUFFLEVBQUUsc0lBQXNJO1lBQzFJLEVBQUUsRUFBRSw4SkFBOEo7WUFDbEssRUFBRSxFQUFFLEVBQUU7U0FDUDtRQUNELFNBQVMsRUFBRTtZQUNULEVBQUUsRUFBRSw0QkFBNEI7WUFDaEMsRUFBRSxFQUFFLHFDQUFxQztZQUN6QyxFQUFFLEVBQUUsc0JBQXNCO1NBQzNCO1FBQ0QsV0FBVyxFQUFFO1lBQ1gsRUFBRSxFQUFFLGtJQUFrSTtZQUN0SSxFQUFFLEVBQUUscUZBQXFGO1lBQ3pGLEVBQUUsRUFBRSxFQUFFO1NBQ1A7UUFDRCxTQUFTLEVBQUU7WUFDVCxFQUFFLEVBQUUsd0VBQXdFO1lBQzVFLEVBQUUsRUFBRSx5RUFBeUU7WUFDN0UsRUFBRSxFQUFFLEVBQUU7U0FDUDtRQUNELGVBQWUsRUFBRTtZQUNmLEVBQUUsRUFBRSx1SEFBdUg7WUFDM0gsRUFBRSxFQUFFLHFJQUFxSTtZQUN6SSxFQUFFLEVBQUUsRUFBRTtTQUNQO1FBQ0QsYUFBYSxFQUFFO1lBQ2IsRUFBRSxFQUFFLHFLQUFxSztZQUN6SyxFQUFFLEVBQUUseUpBQXlKO1lBQzdKLEVBQUUsRUFBRSxFQUFFO1NBQ1A7UUFDRCxVQUFVLEVBQUU7WUFDVixFQUFFLEVBQUUscUdBQXFHO1lBQ3pHLEVBQUUsRUFBRSxpR0FBaUc7WUFDckcsRUFBRSxFQUFFLEVBQUU7U0FDUDtRQUNELFFBQVEsRUFBRTtZQUNSLEdBQUcsRUFBRSxXQUFXO1lBQ2hCLEVBQUUsRUFBRSxhQUFhO1lBQ2pCLEVBQUUsRUFBRSxVQUFVO1lBQ2QsRUFBRSxFQUFFLFlBQVk7U0FDakI7UUFDRCxXQUFXLEVBQUU7WUFDWCxFQUFFLEVBQUUseU1BQXlNO1lBQzdNLEVBQUUsRUFBRSxpR0FBaUc7WUFDckcsR0FBRyxFQUFFLDJIQUEySDtZQUNoSSxFQUFFLEVBQUUsRUFBRTtTQUNQO1FBQ0QsU0FBUyxFQUFFO1lBQ1QsRUFBRSxFQUFFLHdIQUF3SDtZQUM1SCxFQUFFLEVBQUUsOEZBQThGO1lBQ2xHLEdBQUcsRUFBRSxvSEFBb0g7WUFDekgsRUFBRSxFQUFFLEVBQUU7U0FDUDtRQUNELGVBQWUsRUFBRTtZQUNmLEVBQUUsRUFBRSx5S0FBeUs7WUFDN0ssRUFBRSxFQUFFLG1DQUFtQztZQUN2QyxFQUFFLEVBQUUsOENBQThDO1NBQ25EO1FBQ0QsZUFBZSxFQUFFO1lBQ2YsRUFBRSxFQUFFLEVBQUU7WUFDTixFQUFFLEVBQUUsRUFBRTtZQUNOLEVBQUUsRUFBRSxFQUFFO1lBQ04sR0FBRyxFQUFFLEVBQUU7U0FDUjtRQUNELGFBQWEsRUFBRTtZQUNiLEVBQUUsRUFBRSx3REFBd0Q7WUFDNUQsRUFBRSxFQUFFLGlGQUFpRjtZQUNyRixFQUFFLEVBQUUsRUFBRTtZQUNOLEdBQUcsRUFBRSxFQUFFO1NBQ1I7S0FDRixDQUFDO0FBQ0osQ0FBQztBQUVELFNBQVMsV0FBVztJQUNsQixPQUFPO1FBQ0wscUlBQXFJO1FBRXJJLEVBQUUsRUFBRTtZQUNGLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO1lBQ3ZFLFFBQVEsQ0FBQztnQkFDUCxFQUFFLEVBQUUsU0FBUztnQkFDYixFQUFFLEVBQUUsT0FBTztnQkFDWCxFQUFFLEVBQUUsU0FBUzthQUNkLENBQUM7U0FDSDtRQUNELEVBQUUsRUFBRTtZQUNGLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7WUFDaEQsUUFBUSxDQUFDO2dCQUNQLEVBQUUsRUFBRSx1QkFBdUI7Z0JBQzNCLEVBQUUsRUFBRSxZQUFZO2dCQUNoQixFQUFFLEVBQUUsWUFBWTthQUNqQixDQUFDO1NBQ0g7UUFDRCxFQUFFLEVBQUU7WUFDRixDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO1lBQ2hELFFBQVEsQ0FBQztnQkFDUCxFQUFFLEVBQUUsdUJBQXVCO2dCQUMzQixFQUFFLEVBQUUsWUFBWTtnQkFDaEIsRUFBRSxFQUFFLFVBQVU7YUFDZixDQUFDO1NBQ0g7UUFDRCxFQUFFLEVBQUU7WUFDRixDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO1lBQ3ZELFFBQVEsQ0FBQztnQkFDUCxFQUFFLEVBQUUsdUJBQXVCO2dCQUMzQixFQUFFLEVBQUUsWUFBWTtnQkFDaEIsRUFBRSxFQUFFLFVBQVU7YUFDZixDQUFDO1NBQ0g7UUFDRCxHQUFHLEVBQUU7WUFDSCxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO1lBQzVELFFBQVEsQ0FBQztnQkFDUCxFQUFFLEVBQUUsdUNBQXVDO2dCQUMzQyxFQUFFLEVBQUUsYUFBYTtnQkFDakIsRUFBRSxFQUFFLFdBQVc7YUFDaEIsQ0FBQztTQUNIO1FBQ0QsR0FBRyxFQUFFO1lBQ0gsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztZQUM1RCxRQUFRLENBQUM7Z0JBQ1AsRUFBRSxFQUFFLGtDQUFrQztnQkFDdEMsRUFBRSxFQUFFLGFBQWE7Z0JBQ2pCLEVBQUUsRUFBRSxXQUFXO2FBQ2hCLENBQUM7U0FDSDtRQUNELEVBQUUsRUFBRTtZQUNGO2dCQUNFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUc7YUFDM0g7WUFDRCxRQUFRLENBQUM7Z0JBQ1AsRUFBRSxFQUFFLGtCQUFrQjtnQkFDdEIsRUFBRSxFQUFFLG1CQUFtQjtnQkFDdkIsRUFBRSxFQUFFLHFCQUFxQjthQUMxQixDQUFDO1NBQ0g7UUFDRCxJQUFJLEVBQUU7WUFDSixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO1lBQ3JDLFFBQVEsQ0FBQztnQkFDUCxFQUFFLEVBQUUsMENBQTBDO2dCQUM5QyxFQUFFLEVBQUUscUJBQXFCO2dCQUN6QixFQUFFLEVBQUUsdUJBQXVCO2FBQzVCLENBQUM7U0FDSDtRQUNELElBQUksRUFBRTtZQUNKLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO1lBQ2xELFFBQVEsQ0FBQztnQkFDUCxFQUFFLEVBQUUsOENBQThDO2dCQUNsRCxFQUFFLEVBQUUsc0JBQXNCO2dCQUMxQixFQUFFLEVBQUUsdUJBQXVCO2FBQzVCLENBQUM7U0FDSDtRQUNELElBQUksRUFBRTtZQUNKLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7WUFDNUQsUUFBUSxDQUFDO2dCQUNQLEVBQUUsRUFBRSxnREFBZ0Q7Z0JBQ3BELEVBQUUsRUFBRSxzQkFBc0I7Z0JBQzFCLEVBQUUsRUFBRSx1QkFBdUI7YUFDNUIsQ0FBQztTQUNIO0tBQ0YsQ0FBQztBQUNKLENBQUM7QUFFRDtJQUNFLFNBQVM7SUFDVCxXQUFXO0lBQ1gscUJBQXFCO0NBQ3RCLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBR3JDLEdBQUcsQ0FBQyxRQUFRLEdBQUcsSUFBSSxNQUFNLENBQUM7SUFDeEIsS0FBSyxFQUFFLFNBQVM7SUFDaEIsS0FBSyxFQUFFLFFBQVEsQ0FBQztRQUNkLEVBQUUsRUFBRSw2QkFBNkI7UUFDakMsRUFBRSxFQUFFLDBCQUEwQjtLQUMvQixDQUFDO0lBQ0YsZUFBZSxFQUFFLHFDQUFxQztJQUN0RCxPQUFPLEVBQUUsR0FBRyxFQUFFO1FBQ1osR0FBRyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEdBQUc7WUFDdEIsR0FBRyxDQUFDLElBQUk7WUFDUixHQUFHLENBQUMsYUFBYTtZQUNqQixHQUFHLENBQUMsV0FBVztZQUNmLEdBQUcsQ0FBQyxXQUFXO1lBQ2YsR0FBRyxDQUFDLFFBQVE7WUFDWixHQUFHLENBQUMsS0FBSztTQUNWLENBQUM7UUFFRixJQUFJLGtCQUFrQixLQUFLLFlBQVksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUNuRCxHQUFHLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzFFLEdBQUcsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQy9FLENBQUM7UUFBQSxDQUFDO1FBRUYsSUFBSSxNQUFNLEtBQUssT0FBTyxDQUFDLFFBQVE7WUFDN0IsR0FBRyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUVwRCxJQUFJLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO1lBQ3hCLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQztnQkFDNUIsRUFBRSxFQUFFLHNCQUFzQjtnQkFDMUIsRUFBRSxFQUFFLG9CQUFvQjthQUN6QixDQUFDLENBQUM7UUFHTCxJQUFJLFlBQVksQ0FBQyxXQUFXLEtBQUssTUFBTTtZQUNyQyxHQUFHLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXZDLENBQUMsZUFBZSxFQUFFLGVBQWUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQTtJQUVsRixDQUFDO0NBQ0YsQ0FBQyxDQUFDO0FBRUgsR0FBRyxDQUFDLGdCQUFnQixHQUFHLElBQUksTUFBTSxDQUFDO0lBQ2hDLEtBQUssRUFBRSxXQUFXO0lBQ2xCLEtBQUssRUFBRSxRQUFRLENBQUMsRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxDQUFDO0lBQzlELGVBQWUsRUFBRSxxQ0FBcUM7SUFDdEQsT0FBTyxFQUFFLEdBQUcsRUFBRTtRQUNaLFdBQVcsRUFBRSxDQUFDLENBQUMsa0NBQWtDO0lBQ25ELENBQUM7Q0FDRixDQUFDLENBQUM7QUFFSCxHQUFHLENBQUMsSUFBSSxHQUFHLElBQUksTUFBTSxDQUFDO0lBQ3BCLEtBQUssRUFBRSxTQUFTO0lBQ2hCLEtBQUssRUFBRSxRQUFRLENBQUMsRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxDQUFDO0lBQzdELE9BQU8sRUFBRSxDQUFDLGlCQUEwQixLQUFLLEVBQUUsRUFBRTtRQUMzQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRO1lBQ3BCLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHO2dCQUNsQixHQUFHLENBQUMsY0FBYztnQkFDbEIsR0FBRyxDQUFDLGNBQWM7Z0JBQ2xCLEdBQUcsQ0FBQyxZQUFZO2FBQUMsQ0FBQztRQUN0QixJQUFJLGNBQWM7WUFBRSxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQy9DLENBQUM7Q0FDRixDQUFDLENBQUM7QUFFSCxHQUFHLENBQUMsY0FBYyxHQUFHLElBQUksTUFBTSxDQUFDO0lBQzlCLEtBQUssRUFBRSxtQkFBbUI7SUFDMUIsS0FBSyxFQUFFLFFBQVEsQ0FBQztRQUNkLEVBQUUsRUFBRSx5QkFBeUI7UUFDN0IsRUFBRSxFQUFFLG1CQUFtQjtRQUN2QixFQUFFLEVBQUUsaUJBQWlCO0tBQ3RCLENBQUM7SUFDRixXQUFXLEVBQUUsSUFBSSxnQkFBZ0IsRUFBRTtJQUNuQyxTQUFTLEVBQUUsQ0FBQyxHQUFHLGdCQUFnQixDQUFDO0lBQ2hDLE9BQU8sRUFBRSxHQUFHLEVBQUU7UUFDWiw4Q0FBOEM7UUFDOUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFNUQsSUFBSSxtQkFBbUIsR0FBRyxTQUFTLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBRXRELENBQUMsU0FBUyxnQ0FBZ0M7WUFFeEMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxlQUFlLEdBQUcsb0JBQW9CLEVBQUUsQ0FBQztZQUU1RCxTQUFTLG9CQUFvQjtnQkFDM0IsZ09BQWdPO2dCQUNoTyxJQUFJLENBQUMsTUFBTTs7d0JBRVQsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQzs7d0JBRXhCLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFVBQVUsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQzs7d0JBRXhFLFlBQVksQ0FBQyxVQUFVO29CQUN2QixPQUFPLG1CQUFtQjt5QkFDdkIsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQ2QsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVLEdBQUcscUJBQXFCLEVBQUUsTUFBTSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUMsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7b0JBQzlHLE9BQU8sUUFBUSxFQUFFLENBQUM7Z0JBRXZCLFNBQVMsUUFBUTtvQkFDZixJQUFJLENBQUMsTUFBTTt3QkFBRSxPQUFPO29CQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7d0JBQzVELG1GQUFtRjt3QkFDbkY7NEJBQ0UsQ0FBQyxxQkFBcUIsRUFBRSxzQ0FBc0MsQ0FBQyxFQUFFLDBEQUEwRDs0QkFDM0gsQ0FBQyxVQUFVLEVBQUUscUNBQXFDLENBQUM7eUJBQUMsQ0FBRyw2Q0FBNkM7NkJBQ25HLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLG1CQUFtQixDQUFDLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDckksQ0FBQztvQkFHRCw0SUFBNEk7b0JBQzVJLE9BQU8sbUJBQW1CO3lCQUN2QixNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FDZCxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQVUsR0FBRyxpQkFBaUIsRUFBRSxNQUFNLENBQUMsVUFBVSxHQUFHLFdBQVcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNoSCxDQUFDO1lBQ0gsQ0FBQztZQUFBLENBQUM7UUFFSixDQUFDLENBQUMsRUFBRSxDQUFDO1FBRUwsV0FBVyxFQUFFLENBQUM7UUFDZCxPQUFPLEdBQUcsQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDO0lBQzVDLENBQUM7SUFDRCxnQkFBZ0IsRUFBRSxLQUFLLEVBQUUsR0FBRyxHQUFHLEdBQUcsQ0FBQyxjQUFjLEVBQUUsRUFBRTtRQUNuRCxJQUFJLGNBQWMsR0FBRyxHQUFHLENBQUMsV0FBVyxDQUFDO1FBRXJDLElBQUksR0FBRyxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLEdBQUcsQ0FBQztZQUMzQyxPQUFPLHVCQUF1QixFQUFFLENBQUM7UUFFbkMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBLG1RQUFtUTtRQUU1UyxDQUFDLFNBQVMsbUNBQW1DO1lBQzNDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7Z0JBQUUsT0FBTyxDQUFBLG9JQUFvSTtZQUN6TSxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBQUUsT0FBTztZQUVoRCxJQUFJLE1BQU0sR0FBYTtnQkFDckIsTUFBTSxDQUFDLFlBQVksR0FBRyx3QkFBd0I7Z0JBQzlDLE1BQU0sQ0FBQyxVQUFVLEdBQUcscUNBQXFDO2dCQUN6RCxNQUFNLENBQUMsV0FBVyxHQUFHLHlCQUF5QjthQUMvQyxDQUFDO1lBRUYsdUJBQXVCLENBQUMsY0FBYyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFBLDRDQUE0QztZQUVuSixJQUFJLE1BQU0sR0FBaUIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFBLDBDQUEwQztZQUV4SCxJQUFJLENBQUMsTUFBTSxJQUFJLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQztnQkFBRSxPQUFPO1lBRXpDLE1BQU0sTUFBTSxHQUFHLHVCQUF1QixDQUFDLGNBQWMsRUFBRSxNQUFNLENBQUMsVUFBVSxHQUFHLHdCQUF3QixFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUEsMEVBQTBFO1lBQzNNLElBQUksQ0FBQyxNQUFNO2dCQUFFLE9BQU87WUFFcEIsMkJBQTJCLENBQ3pCO2dCQUNFLE1BQU0sRUFBRSxNQUFNO2dCQUNkLFNBQVMsRUFBRSxnQkFBZ0I7Z0JBQzNCLFFBQVEsRUFBRTtvQkFDUixhQUFhLEVBQUUsYUFBYTtvQkFDNUIsRUFBRSxFQUFFLE1BQU07aUJBQ1g7Z0JBQ0QsU0FBUyxFQUFFLGNBQWM7YUFDMUIsQ0FDRixDQUFDO1FBQ0osQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUVMLE1BQU0sY0FBYyxHQUFnQix1QkFBdUIsQ0FDekQsY0FBYyxFQUNkLE1BQU0sQ0FBQyxNQUFNLEdBQUcsVUFBVSxDQUMzQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMscUZBQXFGO1FBRTNGLENBQUMsU0FBUyxrQ0FBa0M7WUFDMUMsSUFBSSxxQkFBcUIsR0FBRyxlQUFlLENBQUMsTUFBTSxDQUNoRCxDQUFDLEtBQUssRUFBRSxFQUFFLENBQ1IsTUFBTSxDQUFDLHFCQUFxQixDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQzs7b0JBRWhELENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FDM0QsQ0FBQztZQUNGLElBQUkscUJBQXFCLENBQUMsTUFBTSxHQUFHLENBQUM7Z0JBQ2xDLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO1lBRXhELHFCQUFxQixHQUFHLHdCQUF3QixDQUFDLHFCQUFxQixDQUFpQixDQUFDO1lBRXhGLElBQUksTUFBc0IsQ0FBQztZQUUzQixJQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsRUFBRSxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztnQkFDL0QsdUJBQXVCLENBQUMsY0FBYyxFQUFFLHVCQUF1QixFQUFFLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUEsMEdBQTBHO1lBRXRPLHFCQUFxQixDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDcEMsTUFBTSxHQUFHLHNCQUFzQixDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUM5QyxJQUFJLENBQUMsTUFBTTtvQkFBRSxPQUFPO2dCQUNwQiwyQkFBMkIsQ0FBQztvQkFDMUIsTUFBTSxFQUFFLENBQUMsS0FBSyxDQUFDO29CQUNmLFNBQVMsRUFBRSxZQUFZLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUNyQyxRQUFRLEVBQUU7d0JBQ1IsYUFBYSxFQUFFLGFBQWE7d0JBQzVCLEVBQUUsRUFBRSxNQUFNO3FCQUNYO29CQUNELFNBQVMsRUFBRSxjQUFjO2lCQUMxQixDQUFDLENBQUM7WUFDTCxDQUFDLENBQUMsQ0FBQztZQUVILFNBQVMsc0JBQXNCLENBQUMsS0FBYTtnQkFDM0MsSUFBSSxDQUFDLEtBQUs7b0JBQUUsT0FBTztnQkFDbkIsSUFBSSxTQUFTLEdBQVcscUJBQXFCLENBQUM7Z0JBRTlDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztvQkFDdEMsU0FBUyxHQUFHLDRCQUE0QixDQUFDO3FCQUN0QyxJQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsRUFBRSxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyx1QkFBdUIsQ0FBQztvQkFDaEgsU0FBUyxHQUFHLHFCQUFxQixDQUFDLENBQUEsaUdBQWlHO2dCQUVySSxJQUFJLENBQUMsU0FBUztvQkFBRSxPQUFPO2dCQUV2QixJQUFJLFFBQVEsR0FBRyx1QkFBdUIsQ0FDcEMsY0FBYyxFQUNkLE1BQU0sQ0FBQyxVQUFVLEdBQUcsU0FBUyxHQUFHLEVBQUUsR0FBRyxNQUFNLENBQUMsQ0FBQztnQkFFL0MsSUFBSSxDQUFDLFFBQVEsSUFBSSxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUM7b0JBQUUsT0FBTztnQkFFN0MsT0FBTyxRQUFRLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxrQkFBb0MsQ0FBQTtZQUMzRSxDQUFDO1FBQ0gsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUVMLENBQUMsU0FBUywyQkFBMkI7WUFDbkMsd0ZBQXdGO1lBQ3hGLE1BQU0sV0FBVyxHQUFHLElBQUksTUFBTSxDQUFDO2dCQUM3QixLQUFLLEVBQUUsZ0JBQWdCO2dCQUN2QixLQUFLLEVBQUUsUUFBUSxDQUFDO29CQUNkLEVBQUUsRUFBRSxjQUFjO29CQUNsQixFQUFFLEVBQUUsYUFBYTtpQkFDbEIsQ0FBQztnQkFDRixRQUFRLEVBQUUsR0FBRyxDQUFDLFlBQVk7Z0JBQzFCLFNBQVMsRUFBRSxnQkFBZ0I7Z0JBQzNCLFdBQVcsRUFBRSxJQUFJLGdCQUFnQixFQUFFO2dCQUNuQyxlQUFlLEVBQUUsQ0FBQyxNQUFNLENBQUMsVUFBVSxHQUFHLGFBQWEsQ0FBQzthQUNyRCxDQUFDLENBQUM7WUFDSCxNQUFNLE9BQU8sR0FBRyxJQUFJLE1BQU0sQ0FBQztnQkFDekIsS0FBSyxFQUFFLFlBQVk7Z0JBQ25CLEtBQUssRUFBRSxRQUFRLENBQUM7b0JBQ2QsRUFBRSxFQUFFLFVBQVU7b0JBQ2QsRUFBRSxFQUFFLFNBQVM7aUJBQ2QsQ0FBQztnQkFDRixRQUFRLEVBQUUsR0FBRyxDQUFDLFlBQVk7Z0JBQzFCLFNBQVMsRUFBRSxnQkFBZ0I7Z0JBQzNCLFdBQVcsRUFBRSxJQUFJLGdCQUFnQixFQUFFO2dCQUNuQyxlQUFlLEVBQUUsQ0FBQyxNQUFNLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQzthQUNqRCxDQUFDLENBQUM7WUFFSCxtQkFBbUIsQ0FBQyxDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsRUFBRSxjQUFjLEVBQUUsYUFBYSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBRXJGLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFFTCx1QkFBdUIsRUFBRSxDQUFDO1FBRTFCLE1BQU0sOEJBQThCLEVBQUUsQ0FBQztRQUV2QyxLQUFLLFVBQVUsOEJBQThCO1lBQzNDLE1BQU0sTUFBTSxHQUFHLHFCQUFxQixFQUFFLENBQUM7WUFFdkMsSUFBSSxlQUFnRCxDQUFDO1lBRXJELFVBQVU7WUFDVixNQUFNLGlCQUFpQixDQUNyQixNQUFNLENBQUMsTUFBTSxFQUNiLE1BQU0sQ0FBQyxXQUFXLEVBQ2xCLE1BQU0sQ0FBQyxTQUFTLENBQ2pCLENBQUM7WUFFRixDQUFDLFNBQVMsd0JBQXdCO2dCQUNoQyxJQUFJLFFBQVEsR0FBRyx3QkFBd0IsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUU1RyxJQUFJLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQztvQkFBRSxRQUFRLEdBQUcsd0JBQXdCLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLE1BQU0sQ0FBQyxrQkFBa0IsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBRWpJLElBQUksUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDO29CQUFFLE9BQU87Z0JBRWhDLE1BQU0sUUFBUSxHQUFHLElBQUksTUFBTSxDQUFDO29CQUMxQixLQUFLLEVBQUUsdUJBQXVCO29CQUM5QixLQUFLLEVBQUUsUUFBUSxDQUFDO3dCQUNkLEVBQUUsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztxQkFDL0csQ0FBQztvQkFDRixRQUFRLEVBQUUsR0FBRyxDQUFDLFlBQVk7b0JBQzFCLFdBQVcsRUFBRSxJQUFJLGdCQUFnQixFQUFFO29CQUNuQyxPQUFPLEVBQUUsR0FBRyxFQUFFO3dCQUNaLElBQUksS0FBZSxDQUFDO3dCQUNwQixRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBaUIsRUFBRSxFQUFFOzRCQUNqQyxLQUFLLEdBQUcsWUFBWSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDOzRCQUVuQyxXQUFXLENBQUM7Z0NBQ1YsS0FBSyxFQUFFLEtBQUs7Z0NBQ1osU0FBUyxFQUFFLEtBQUs7Z0NBQ2hCLFFBQVEsRUFBRSxRQUFRLENBQUMsV0FBVztnQ0FDOUIsU0FBUyxFQUFFLFFBQVEsQ0FBQyxXQUFXO2dDQUMvQixpQkFBaUIsRUFBRSxLQUFLO2dDQUN4QixpQkFBaUIsRUFBRSxLQUFLOzZCQUN6QixDQUFDLENBQUM7d0JBQ0wsQ0FBQyxDQUFDLENBQUE7b0JBRUosQ0FBQztpQkFDRixDQUFDLENBQUM7Z0JBRUgsbUJBQW1CLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxjQUFjLEVBQUUsYUFBYSxDQUFDLENBQUM7WUFDakUsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUVMLFlBQVk7WUFDWixNQUFNLGlCQUFpQixDQUNyQixNQUFNLENBQUMsVUFBVSxFQUNqQixNQUFNLENBQUMsZUFBZSxFQUN0QixNQUFNLENBQUMsYUFBYSxDQUNyQixDQUFDO1lBRUYsQ0FBQyxTQUFTLG9CQUFvQjtnQkFDNUIsOEZBQThGO2dCQUU5RixlQUFlLEdBQUcsRUFBRSxDQUFDO2dCQUNyQixJQUFJLFdBQVcsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUM5QyxJQUFJLE9BQU8sR0FBRyxXQUFXLEVBQUUsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUNoRCxJQUFJLENBQUMsT0FBTztvQkFDVixPQUFPO3dCQUNMLFdBQVc7NkJBQ1IsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLFVBQVUsQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7NkJBQ3ZGLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO2dCQUVwQyxJQUFJLGFBQWEsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFFckUsSUFBSSxPQUFPO29CQUNULGVBQWU7d0JBQ2Isb0JBQW9CLENBQUMsTUFBTSxDQUN6QixDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUUsUUFBUSxDQUFDLG1CQUFtQixDQUFDLElBQUksa0JBQWtCLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsVUFBVSxFQUFFLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUEsNkdBQTZHO2dCQUVsUCxJQUFJLGVBQWUsQ0FBQyxNQUFNLEdBQUcsQ0FBQztvQkFDNUIsZUFBZSxHQUFHLG9CQUFvQixDQUFDLE1BQU0sQ0FDM0MsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBLHVDQUF1QztnQkFHbEcsSUFBSSxhQUFhLElBQUksU0FBUyxLQUFLLElBQUksSUFBSSxlQUFlLENBQUMsTUFBTSxHQUFHLENBQUM7b0JBQ25FLE9BQU8sb0JBQW9CLEVBQUUsQ0FBQzs7b0JBQzNCLE9BQU8sa0JBQWtCLEVBQUUsQ0FBQztnQkFFakMsU0FBUyxrQkFBa0I7b0JBQ3pCLElBQUksTUFBTSxLQUFLLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQzt3QkFDakMsMEpBQTBKO3dCQUUxSixPQUFPLEtBQUssQ0FBQyxJQUFJLE9BQU8sS0FBSyxDQUFDLENBQUMsQ0FBQzs0QkFDOUIsZUFBZTtnQ0FDZixlQUFlLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBaUIsRUFBRSxFQUFFLENBQzNDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRSxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUM7NEJBQ3ZDLENBQUM7Z0NBQ0QsZUFBZTtvQ0FDZixlQUFlLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBaUIsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO29CQUNyRixDQUFDO29CQUVELElBQUksTUFBTSxLQUFLLE9BQU8sQ0FBQyxZQUFZLElBQUksVUFBVSxLQUFLLFlBQVksQ0FBQyxRQUFRO3dCQUN6RSxlQUFlLEdBQUcsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQWUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLGtCQUFrQixFQUFFLGFBQWEsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUV4SSwrREFBK0Q7b0JBQy9ELGVBQWU7d0JBQ2IsMkJBQTJCLENBQUM7NEJBQzFCLE1BQU0sRUFBRSx3QkFBd0IsQ0FBQyxlQUErQixDQUFpQixFQUFFLDZCQUE2Qjs0QkFDaEgsU0FBUyxFQUFFLGdCQUFnQjs0QkFDM0IsUUFBUSxFQUFFO2dDQUNSLGFBQWEsRUFBRSxhQUFhO2dDQUM1QixFQUFFLEVBQUUsY0FBYyxFQUFFLHVEQUF1RDs2QkFDNUU7NEJBQ0QsU0FBUyxFQUFFLGNBQWM7eUJBQzFCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFFUixvQkFBb0IsQ0FBQyxlQUFtQyxDQUFDLENBQUM7Z0JBQzVELENBQUM7Z0JBQUEsQ0FBQztnQkFFRixTQUFTLG9CQUFvQjtvQkFDM0IsSUFBSSxnQkFBZ0IsR0FBa0MsU0FBUyxDQUM3RCxNQUFNLENBQUMsY0FBYyxFQUNyQixvQkFBb0IsQ0FBQyxJQUFJLFNBQVMsQ0FBQztvQkFFckMsSUFBSSxDQUFDLGdCQUFnQjt3QkFBRSxPQUFPO29CQUU5QixnQkFBZ0IsR0FBRywyQkFBMkIsQ0FBQzt3QkFDN0MsTUFBTSxFQUFFLENBQUMsZ0JBQThCLENBQUM7d0JBQ3hDLFNBQVMsRUFBRSxZQUFZLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQzt3QkFDOUMsUUFBUSxFQUFFOzRCQUNSLGFBQWEsRUFBRSxhQUFhOzRCQUM1QixFQUFFLEVBQUUsY0FBYzt5QkFDbkI7d0JBQ0QsU0FBUyxFQUFFLGNBQWM7cUJBQzFCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFFTixvQkFBb0IsQ0FBQyxnQkFBb0MsQ0FBQyxDQUFDO2dCQUM3RCxDQUFDO2dCQUFBLENBQUM7Z0JBR0YsU0FBUyxvQkFBb0IsQ0FBQyxTQUEyQjtvQkFDdkQsSUFBSSxDQUFDLFNBQVM7d0JBQUUsT0FBTztvQkFDdkIsSUFBSSxNQUFNLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsSUFBSSxLQUFLLE1BQU0sQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLENBQUM7b0JBRW5GLElBQUksQ0FBQyxNQUFNO3dCQUFFLE9BQU8sQ0FBQyw0SkFBNEo7b0JBRWpMLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUM7d0JBQUUsT0FBTyxDQUFBLDBDQUEwQztvQkFFeEcsZUFBZSxHQUFHLG9CQUFvQixDQUFDLE1BQU0sQ0FDM0MsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRSxRQUFRLENBQUMsbUJBQW1CLENBQUMsSUFBSSxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBRTVHLElBQUksZUFBZSxDQUFDLE1BQU0sR0FBRyxDQUFDO3dCQUFFLE9BQU87b0JBRXZDLDJCQUEyQixDQUFDO3dCQUMxQixNQUFNLEVBQUUsZUFBK0I7d0JBQ3ZDLFNBQVMsRUFBRSxZQUFZLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQzt3QkFDOUMsUUFBUSxFQUFFOzRCQUNSLEVBQUUsRUFBRSxNQUFNOzRCQUNWLGFBQWEsRUFBRSxhQUFhO3lCQUM3Qjt3QkFDRCxTQUFTLEVBQUUsY0FBYztxQkFDMUIsQ0FBQyxDQUFDO2dCQUNMLENBQUM7WUFDSCxDQUFDLENBQUMsRUFBRSxDQUFDO1lBR0wsUUFBUTtZQUNSLE1BQU0saUJBQWlCLENBQ3JCLE1BQU0sQ0FBQyxNQUFNLEVBQ2IsTUFBTSxDQUFDLFdBQVcsRUFDbEIsTUFBTSxDQUFDLFNBQVMsQ0FDakIsQ0FBQztZQUVGLENBQUMsU0FBUyx3QkFBd0I7Z0JBQ2hDLElBQUksTUFBTSxLQUFLLE9BQU8sQ0FBQyxZQUFZLElBQUksVUFBVSxLQUFLLFlBQVksQ0FBQyxRQUFRO29CQUFFLE9BQU87Z0JBQ3BGLGtIQUFrSDtnQkFFbEgsSUFBSSxLQUFLLEdBQVcsaUJBQWlCLENBQUM7Z0JBQ3RDLElBQUksVUFBVSxLQUFLLFlBQVksQ0FBQyxRQUFRO29CQUN0QyxLQUFLLElBQUksdUJBQXVCLENBQUE7cUJBQzdCLElBQUksTUFBTSxLQUFLLE9BQU8sQ0FBQyxZQUFZO29CQUN0QyxLQUFLLElBQUksc0JBQXNCLENBQUM7Z0JBRWxDLDJCQUEyQixDQUFDO29CQUMxQixNQUFNLEVBQUUsb0JBQW9CLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO29CQUM5RixTQUFTLEVBQUUsWUFBWSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUM7b0JBQzlDLFFBQVEsRUFBRTt3QkFDUixFQUFFLEVBQUUsY0FBYzt3QkFDbEIsYUFBYSxFQUFFLGFBQWE7cUJBQzdCO29CQUNELFNBQVMsRUFBRSxjQUFjO2lCQUMxQixDQUFDLENBQUM7WUFFTCxDQUFDLENBQUMsRUFBRSxDQUFDO1lBRUwsTUFBTSxnQkFBZ0IsRUFBRSxDQUFDO1lBRXpCLEtBQUssVUFBVSxnQkFBZ0I7Z0JBQzdCLElBQUksTUFBTSxLQUFLLE9BQU8sQ0FBQyxlQUFlO29CQUFFLE9BQU8sQ0FBQSw4REFBOEQ7Z0JBQzdHLElBQUksS0FBSyxHQUFHLEVBQUUsR0FBRyxNQUFNLENBQUMsZUFBZSxFQUFFLENBQUM7Z0JBQzFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO3FCQUNsQixPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FDZixLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNmLEtBQUssQ0FBQyxDQUFDLENBQUM7eUJBQ0wsT0FBTyxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7eUJBQy9DLE9BQU8sQ0FBQyxVQUFVLEVBQ2pCLFlBQVksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FDNUMsQ0FBQyxDQUFDO2dCQUVULE1BQU0saUJBQWlCLENBQ3JCLE1BQU0sQ0FBQyxVQUFVLEVBQ2pCLEtBQUssRUFDTCxTQUFTLEVBQ1QsVUFBVSxDQUNYLENBQUMsQ0FBQyxvS0FBb0s7Z0JBRXZLLCtCQUErQjtnQkFDL0IsSUFBSSxTQUFTLEdBQUcsdUJBQXVCLENBQ3JDLGNBQWMsRUFDZCxNQUFNLENBQUMsVUFBVSxHQUFHLEtBQUssR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFFN0MsSUFBSSxDQUFDLFNBQVMsSUFBSSxTQUFTLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDO29CQUFFLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO2dCQUNuRyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLHFCQUFxQixDQUN6QyxhQUFhLEVBQ2IsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FDdEIsQ0FBQztZQUNKLENBQUM7WUFBQSxDQUFDO1lBRUYsS0FBSyxVQUFVLGlCQUFpQixDQUM5QixhQUFxQixFQUNyQixZQUFvRCxFQUNwRCxVQUFrRCxFQUNsRCxPQUFlLGtCQUFrQjtnQkFFakMsSUFBSSxDQUFDLGFBQWE7b0JBQUUsT0FBTztnQkFFM0IsSUFBSSxRQUFRLENBQUM7Z0JBRWIsUUFBUSxHQUFHLE1BQU0sZ0NBQWdDLENBQy9DLGFBQWEsRUFDYixFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUUsRUFBRSxFQUFFLGNBQWMsRUFBRSxFQUNwRCxjQUFjLEVBQ2QsS0FBSyxFQUNMLElBQUksQ0FDYyxDQUFDO2dCQUVyQixJQUFJLENBQUMsUUFBUSxJQUFJLFFBQVEsQ0FBQyxNQUFNLEtBQUssQ0FBQztvQkFBRSxPQUFPO2dCQUMvQyxRQUFRLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFFakQsSUFBSSxZQUFZO29CQUNkLDJEQUEyRDtvQkFDM0QsMkJBQTJCLENBQUM7d0JBQzFCLE1BQU0sRUFBRTs0QkFDTjtnQ0FDRTtvQ0FDRSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsS0FBSztvQ0FDdkMsWUFBWSxDQUFDLEVBQUU7b0NBQ2YsWUFBWSxDQUFDLEVBQUU7b0NBQ2YsWUFBWSxDQUFDLEVBQUU7aUNBQ2hCOzZCQUNGO3lCQUNGO3dCQUNELFNBQVMsRUFBRSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDO3dCQUM3QixRQUFRLEVBQUUsRUFBRSxhQUFhLEVBQUUsYUFBYSxFQUFFLEVBQUUsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7d0JBQzlELFNBQVMsRUFBRSxjQUFjO3FCQUMxQixDQUFDLENBQUM7Z0JBQ0wsSUFBSSxVQUFVO29CQUNaLHVDQUF1QztvQkFDdkMsMkJBQTJCLENBQUM7d0JBQzFCLE1BQU0sRUFBRTs0QkFDTjtnQ0FDRTtvQ0FDRSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsR0FBRztvQ0FDckMsVUFBVSxDQUFDLEVBQUU7b0NBQ2IsVUFBVSxDQUFDLEVBQUU7b0NBQ2IsVUFBVSxDQUFDLEVBQUU7aUNBQ2Q7NkJBQ0Y7eUJBQ0Y7d0JBQ0QsU0FBUyxFQUFFLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUM7d0JBQzdCLFFBQVEsRUFBRSxFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUUsRUFBRSxFQUFFLGNBQWMsRUFBRTt3QkFDOUQsU0FBUyxFQUFFLGNBQWM7cUJBQzFCLENBQUMsQ0FBQztZQUNQLENBQUM7WUFBQSxDQUFDO1lBRUYsQ0FBQyxTQUFTLHlCQUF5QjtnQkFDakMsTUFBTSxVQUFVLEdBQUcsU0FBUyxFQUFFLENBQUM7Z0JBRS9CLElBQUksQ0FBQyxVQUFVO29CQUNiLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FDaEIscURBQXFELENBQ3RELENBQUM7Z0JBRUosQ0FBQyxTQUFTLGdCQUFnQjtvQkFDeEIsSUFBSSxNQUFNLEtBQUssT0FBTyxDQUFDLFNBQVM7d0JBQUUsT0FBTyxDQUFFLGlGQUFpRjtvQkFDNUgsTUFBTSxLQUFLLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxZQUFZLEdBQUcsWUFBWSxFQUFFLFdBQVcsQ0FBQyxDQUFDO29CQUN6RSxJQUFJLENBQUMsS0FBSzt3QkFBRSxPQUFPLENBQUEsMkhBQTJIO29CQUU5SSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBLCtEQUErRDtnQkFFN0osQ0FBQyxDQUFDLEVBQUUsQ0FBQztnQkFHTCwyQkFBMkIsQ0FBQztvQkFDMUIsTUFBTSxFQUFFLENBQUMsVUFBVSxDQUFDO29CQUNwQixTQUFTLEVBQUUsWUFBWSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztvQkFDMUMsUUFBUSxFQUFFO3dCQUNSLGFBQWEsRUFBRSxhQUFhO3dCQUM1QixFQUFFLEVBQUUsY0FBYyxFQUFFLGtCQUFvQztxQkFDekQ7b0JBQ0QsU0FBUyxFQUFFLGNBQWM7aUJBQzFCLENBQUMsQ0FBQztnQkFFSCxTQUFTLFNBQVM7b0JBQ2hCLElBQUksQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsU0FBUyxDQUFDLENBQUM7b0JBRWpELElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDO3dCQUM1RSxLQUFLLEdBQUcsVUFBVSxDQUFDO3lCQUVoQixJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxZQUFZLENBQUMsVUFBVSxDQUFDLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDO3dCQUN0RixLQUFLLEdBQUcsa0JBQWtCLENBQUM7eUJBRXhCLElBQUksTUFBTSxLQUFLLE9BQU8sQ0FBQyxVQUFVO3dCQUNwQyxLQUFLLEdBQUcsWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFBLHlDQUF5Qzt5QkFFdEUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLEVBQUUsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO3dCQUN2RSxLQUFLLEdBQUcsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFBLHdGQUF3Rjt3QkFDeEgsS0FBSyxHQUFHLFNBQVMsQ0FBQTtvQkFDbkIsQ0FBQzt5QkFFSSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7d0JBQzlELEtBQUssR0FBRyxNQUFNLENBQUM7d0JBQ2YsS0FBSyxHQUFHLFNBQVMsQ0FBQztvQkFDcEIsQ0FBQztvQkFFRCxPQUFPLEtBQUssQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7b0JBRTNCLFNBQVMsS0FBSyxDQUFDLEtBQWEsRUFBRSxLQUFhO3dCQUN6QyxNQUFNLEtBQUssR0FBRyxDQUFDLEtBQWEsRUFBRSxFQUFFLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxXQUFXLENBQUMsSUFBSSxTQUFTLENBQUM7d0JBQzVFLE1BQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxZQUFZLEdBQUcsT0FBTyxDQUFDO3dCQUU1QyxJQUFJLENBQUMsS0FBSzs0QkFBRSxPQUFPLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQzt3QkFFaEMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUEsMkRBQTJEO3dCQUVwSSxPQUFPLEtBQUssQ0FBQyxHQUFHLEtBQUssTUFBTSxLQUFLLElBQUksS0FBSyxFQUFFLENBQUMsQ0FBQztvQkFFL0MsQ0FBQztnQkFDSCxDQUFDO1lBRUgsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUVMLE1BQU0sK0JBQStCLENBQUM7Z0JBQ3BDLE1BQU0sRUFBRSxNQUFNLENBQUMsVUFBVTtnQkFDekIsU0FBUyxFQUFFLFlBQVksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDO2dCQUMxQyxTQUFTLEVBQUUsY0FBYztnQkFDekIsTUFBTSxFQUFFLElBQUk7Z0JBQ1osY0FBYyxFQUFFLEtBQUs7YUFDdEIsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztRQUFBLENBQUM7UUFFRixTQUFTLHVCQUF1QjtZQUM5QixJQUNFO2dCQUNFLFlBQVksQ0FBQyxZQUFZO2dCQUN6QixZQUFZLENBQUMsUUFBUTtnQkFDckIsWUFBWSxDQUFDLE9BQU87YUFDckIsQ0FBQyxRQUFRLENBQUMsa0JBQWtCLENBQUM7Z0JBRTlCLHdDQUF3QztnQkFDeEMsT0FBTyxLQUFLLENBQ1YsOEhBQThILENBQy9ILENBQUM7WUFFSixNQUFNLFNBQVMsR0FBRyxHQUFHLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsYUFBYSxFQUFFLENBQWEsQ0FBQztZQUU3RSxDQUFDLFNBQVMsa0JBQWtCO2dCQUMxQixNQUFNLFlBQVksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsd0dBQXdHO2dCQUM1SixZQUFZLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQztnQkFDdkQsWUFBWSxDQUFDLEVBQUUsR0FBRyxjQUFjLENBQUM7Z0JBRWpDLE1BQU0sU0FBUyxHQUFHLElBQUksTUFBTSxDQUFDO29CQUMzQixLQUFLLEVBQUUsWUFBWTtvQkFDbkIsS0FBSyxFQUFFLFFBQVEsQ0FBQzt3QkFDZCxFQUFFLEVBQUUsU0FBUzt3QkFDYixFQUFFLEVBQUUsT0FBTztxQkFDWixDQUFDO29CQUNGLE9BQU8sRUFBRSxHQUFHLEVBQUU7d0JBQ1osd0RBQXdEO3dCQUN4RCxJQUFJLE9BQU8sR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBbUIsQ0FBQzt3QkFDdEUsSUFBSSxDQUFDLE9BQU87NEJBQUUsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUM7d0JBQzFELE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQzt3QkFDckMsSUFBSSxPQUFPLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQzs0QkFDM0MsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDOzRCQUN2QixPQUFPLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7NEJBQzVCLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQzt3QkFDL0IsQ0FBQztvQkFDSCxDQUFDO2lCQUNGLENBQUMsQ0FBQztnQkFFSCxZQUFZLENBQUMsT0FBTyxDQUNsQixhQUFhLENBQUM7b0JBQ1osR0FBRyxFQUFFLFNBQVM7b0JBQ2QsYUFBYSxFQUFFLFlBQVk7b0JBQzNCLFFBQVEsRUFBRSxHQUFHLENBQUMsWUFBWTtvQkFDMUIsS0FBSyxFQUFFLElBQUk7b0JBQ1gsT0FBTyxFQUFFLFNBQVMsQ0FBQyxPQUFPO2lCQUMzQixDQUFDLENBQ0gsQ0FBQztnQkFDRixjQUFjLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUNyQywyQkFBMkIsQ0FBQyxZQUFZLENBQUMsQ0FBQTtZQUMzQyxDQUFDLENBQUMsRUFBRSxDQUFDO1lBRUwsU0FBUywyQkFBMkIsQ0FBQyxZQUE0QjtnQkFDL0QsZ0ZBQWdGO2dCQUNoRixNQUFNLE9BQU8sR0FBRyxtQkFBbUIsQ0FBQyxTQUFTLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQ3ZGLE9BQU8sQ0FBQyxFQUFFLEdBQUcsWUFBWSxDQUFDO2dCQUMxQixPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ2xDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQztxQkFDekIsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUU7b0JBQ3pELFdBQVcsRUFBRSxDQUFDO29CQUNkLE1BQU0sVUFBVSxHQUFHLFlBQVksQ0FBQyxhQUFhLENBQUMsR0FBRyxHQUFHLE9BQU8sQ0FBQyxFQUFFLEdBQUcsWUFBWSxDQUFDLENBQUM7b0JBQy9FLElBQUksQ0FBQyxVQUFVO3dCQUNiLE9BQU87b0JBQ1QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUM7d0JBQzVDLGtCQUFrQixDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7O3dCQUV6QyxPQUFPLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7b0JBQ3RDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBcUIsQ0FBQyxDQUFDO2dCQUN6RSxDQUFDLENBQ0EsQ0FBQyxDQUFDO1lBQ1AsQ0FBQztZQUFBLENBQUM7WUFFRixTQUFTLGFBQWE7Z0JBQ3BCLCtOQUErTjtnQkFDL04sTUFBTSxLQUFLLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsc0NBQXNDO2dCQUUvRCxJQUNFO29CQUNFLE9BQU8sQ0FBQyxTQUFTO29CQUNqQixPQUFPLENBQUMsU0FBUztvQkFDakIsT0FBTyxDQUFDLGdCQUFnQjtvQkFDeEIsT0FBTyxDQUFDLGVBQWU7aUJBQ3hCLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztvQkFDbEIsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDO2dCQUN6Qiw0S0FBNEs7O29CQUU1SyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztxQkFDZCxJQUFJLEdBQUcsQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDO29CQUNuRCxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFDakIsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUNoQixDQUFDO3FCQUNJO2dCQUNILHNEQUFzRDtnQkFDdEQsQ0FBQyxNQUFNOzt3QkFFUCxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsMkZBQTJGOzt3QkFFcEgsWUFBWSxDQUFDLFVBQVUsQ0FBQywrQ0FBK0M7O29CQUV2RSxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyx3QkFBd0I7Z0JBRXZDLE9BQU8sS0FBSyxDQUFDO1lBQ2YsQ0FBQztZQUFBLENBQUM7UUFDSixDQUFDO1FBQUEsQ0FBQztJQUVKLENBQUM7Q0FDRixDQUFDLENBQUM7QUFFSCxHQUFHLENBQUMsY0FBYyxHQUFHLElBQUksTUFBTSxDQUFDO0lBQzlCLEtBQUssRUFBRSxtQkFBbUI7SUFDMUIsS0FBSyxFQUFFLFFBQVEsQ0FBQztRQUNkLEVBQUUsRUFBRSxRQUFRO1FBQ1osRUFBRSxFQUFFLHNCQUFzQjtLQUMzQixDQUFDO0lBQ0YsT0FBTyxFQUFFLEtBQUssSUFBSSxFQUFFO1FBQ2xCLE1BQU0sZ0NBQWdDLENBQ3BDLE1BQU0sQ0FBQyxNQUFNLEVBQ2IsRUFBRSxhQUFhLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFDM0MsWUFBWSxFQUNaLElBQUksQ0FDTCxDQUFDO1FBRUYsV0FBVyxFQUFFLENBQUMsQ0FBQyxrQ0FBa0M7SUFDbkQsQ0FBQztDQUNGLENBQUMsQ0FBQztBQUVILEdBQUcsQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLE1BQU0sQ0FBQztJQUNsQyxLQUFLLEVBQUUsdUJBQXVCO0lBQzlCLEtBQUssRUFBRSxRQUFRLENBQUM7UUFDZCxFQUFFLEVBQUUsYUFBYTtRQUNqQixFQUFFLEVBQUUsWUFBWTtLQUNqQixDQUFDO0lBQ0YsT0FBTyxFQUFFLEtBQUssSUFBSSxFQUFFO1FBQ2xCLE1BQU0sZ0NBQWdDLENBQ3BDLE1BQU0sQ0FBQyxVQUFVLEVBQ2pCLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQzNDLFlBQVksRUFDWixJQUFJLENBQ0wsQ0FBQztRQUNGLFdBQVcsRUFBRSxDQUFDLENBQUMsa0NBQWtDO0lBQ25ELENBQUM7Q0FDRixDQUFDLENBQUM7QUFFSCxHQUFHLENBQUMsY0FBYyxHQUFHLElBQUksTUFBTSxDQUFDO0lBQzlCLEtBQUssRUFBRSxtQkFBbUI7SUFDMUIsS0FBSyxFQUFFLFFBQVEsQ0FBQztRQUNkLEVBQUUsRUFBRSxXQUFXO1FBQ2YsRUFBRSxFQUFFLE9BQU87UUFDWCxFQUFFLEVBQUUsTUFBTTtLQUNYLENBQUM7SUFDRixPQUFPLEVBQUUsS0FBSyxJQUFJLEVBQUU7UUFDbEIsTUFBTSxnQ0FBZ0MsQ0FDcEMsTUFBTSxDQUFDLE1BQU0sRUFDYixFQUFFLGFBQWEsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUMzQyxZQUFZLEVBQ1osSUFBSSxDQUNMLENBQUM7UUFDRixXQUFXLEVBQUUsQ0FBQyxDQUFDLGtDQUFrQztJQUNuRCxDQUFDO0NBQ0YsQ0FBQyxDQUFDO0FBRUgsR0FBRyxDQUFDLGtCQUFrQixHQUFHLElBQUksTUFBTSxDQUFDO0lBQ2xDLEtBQUssRUFBRSx1QkFBdUI7SUFDOUIsS0FBSyxFQUFFLFFBQVEsQ0FBQztRQUNkLEVBQUUsRUFBRSxVQUFVO1FBQ2QsRUFBRSxFQUFFLFlBQVk7UUFDaEIsRUFBRSxFQUFFLFlBQVk7S0FDakIsQ0FBQztJQUNGLE9BQU8sRUFBRSxLQUFLLElBQUksRUFBRTtRQUNsQixNQUFNLGdDQUFnQyxDQUNwQyxNQUFNLENBQUMsVUFBVSxFQUNqQixFQUFFLGFBQWEsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUMzQyxZQUFZLEVBQ1osSUFBSSxFQUNKLFVBQVUsQ0FDWCxDQUFDLENBQUMsK1NBQStTO1FBQ2xULFdBQVcsRUFBRSxDQUFDLENBQUMsa0NBQWtDO0lBQ25ELENBQUM7Q0FDRixDQUFDLENBQUM7QUFFSCxHQUFHLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxNQUFNLENBQUM7SUFDakMsS0FBSyxFQUFFLDJCQUEyQjtJQUNsQyxLQUFLLEVBQUUsUUFBUSxDQUFDO1FBQ2QsRUFBRSxFQUFFLFlBQVk7UUFDaEIsRUFBRSxFQUFFLFlBQVk7UUFDaEIsRUFBRSxFQUFFLFlBQVk7S0FDakIsQ0FBQztJQUNGLE9BQU8sRUFBRSxLQUFLLElBQUksRUFBRTtRQUNsQixNQUFNLGdDQUFnQyxDQUNwQyxNQUFNLENBQUMsVUFBVSxFQUNqQixFQUFFLGFBQWEsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUMzQyxZQUFZLEVBQ1osSUFBSSxDQUNMLENBQUM7UUFDRixXQUFXLEVBQUUsQ0FBQyxDQUFDLGtDQUFrQztJQUNuRCxDQUFDO0NBQ0YsQ0FBQyxDQUFDO0FBRUgsR0FBRyxDQUFDLFdBQVcsR0FBRyxJQUFJLE1BQU0sQ0FBQztJQUMzQixLQUFLLEVBQUUsZ0JBQWdCO0lBQ3ZCLEtBQUssRUFBRSxRQUFRLENBQUM7UUFDZCxFQUFFLEVBQUUsY0FBYztRQUNsQixFQUFFLEVBQUUsa0JBQWtCO1FBQ3RCLEVBQUUsRUFBRSxnQkFBZ0I7S0FDckIsQ0FBQztJQUNGLE9BQU8sRUFBRSxDQUFDLE9BQWdCLEtBQUssRUFBRSxFQUFFO1FBQ2pDLENBQUMsZUFBZSxFQUFFLGVBQWUsQ0FBQzthQUMvQixPQUFPLENBQUMsS0FBSyxFQUFDLElBQUksRUFBQyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxJQUFJO2dCQUFFLE9BQU87WUFDbEIsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUFFLE9BQU87WUFDNUIsTUFBTSxlQUFlLENBQUMsZUFBZSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ2hELENBQUMsQ0FBQyxDQUFDO1FBRUwsSUFBSSxNQUFNLEtBQUssT0FBTyxDQUFDLFFBQVE7WUFDN0IsT0FBTyxLQUFLLENBQUMsd0ZBQXdGLENBQUMsQ0FBQyxDQUFDLHlFQUF5RTtRQUNuTCw4QkFBOEI7UUFFOUIsR0FBRyxDQUFDLFdBQVcsQ0FBQyxRQUFRLEdBQUc7WUFDekIsR0FBRyxDQUFDLGFBQWE7WUFDakIsR0FBRyxDQUFDLGFBQWE7WUFDakIsR0FBRyxDQUFDLGNBQWM7WUFDbEIsR0FBRyxDQUFDLGtCQUFrQjtZQUN0QixHQUFHLENBQUMsY0FBYztZQUNsQixHQUFHLENBQUMsa0JBQWtCO1lBQ3RCLEdBQUcsQ0FBQyxVQUFVO1NBQ2YsQ0FBQztRQUVGLENBQUMsU0FBUyw0QkFBNEI7WUFDcEMsSUFBSSxJQUFJO2dCQUFFLE9BQU8sQ0FBQyw0RkFBNEY7WUFDOUcsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztnQkFBRSxPQUFPO1lBQ3JFLElBQUksa0JBQWtCLEtBQUssWUFBWSxDQUFDLFlBQVk7Z0JBQUUsT0FBTztZQUU3RCxDQUFDLFNBQVMsa0JBQWtCO2dCQUMxQixJQUFJLE9BQU8sS0FBSyxDQUFDO29CQUFFLE9BQU87Z0JBQzFCLDhMQUE4TDtnQkFDOUwsR0FBRyxDQUFDLFdBQVcsQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUMzRixDQUFDLENBQUMsRUFBRSxDQUFDO1lBRUwsQ0FBQyxTQUFTLGFBQWE7Z0JBQ3JCLGdGQUFnRjtnQkFDaEYsSUFBSSxPQUFPLEdBQUcsQ0FBQztvQkFBRSxPQUFPO2dCQUN4QixJQUFJLEdBQUcsQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDO29CQUFFLE9BQU87Z0JBQ2hFLEdBQUcsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDakQsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUVMLENBQUMsU0FBUyxnQkFBZ0I7Z0JBQ3hCLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQztvQkFBRSxPQUFPO2dCQUNyQyw0RUFBNEU7Z0JBQzVFLEdBQUcsQ0FBQyxXQUFXLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxLQUFLLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFFN0YsSUFBSSxHQUFHLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDO29CQUFFLE9BQU87Z0JBQ3RFLHFKQUFxSjtnQkFDckosR0FBRyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1lBQzFELENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDUCxDQUFDLENBQUMsRUFBRSxDQUFDO1FBRUwsQ0FBQyxTQUFTLE1BQU07WUFDZCxJQUFJLENBQUMsSUFBSTtnQkFBRSxPQUFPO1lBQ2xCLEdBQUcsQ0FBQyxXQUFXLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLFdBQVcsRUFBRSxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFBLGtEQUFrRDtZQUVuTixJQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsRUFBRSxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztnQkFDL0QsR0FBRyxDQUFDLFdBQVcsQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxLQUFLLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUEsaUNBQWlDO1FBQzNJLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFFTCxPQUFPLEdBQUcsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDO0lBQ2xDLENBQUM7Q0FDRixDQUFDLENBQUM7QUFFSCxHQUFHLENBQUMsV0FBVyxHQUFHLElBQUksTUFBTSxDQUFDO0lBQzNCLEtBQUssRUFBRSxnQkFBZ0I7SUFDdkIsS0FBSyxFQUFFLFFBQVEsQ0FBQyxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsZUFBZSxFQUFFLENBQUM7SUFDcEUsV0FBVyxFQUFFLElBQUksZ0JBQWdCLEVBQUU7SUFDbkMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxRQUFRO0lBQ3ZCLFNBQVMsRUFBRSxDQUFDLEdBQUcsZ0JBQWdCLENBQUM7SUFDaEMsUUFBUSxFQUFFLEVBQUU7SUFDWixPQUFPLEVBQUUsQ0FBQyxPQUFnQixLQUFLLEVBQUUsS0FBZ0IsRUFBRSxFQUFFO1FBQ25ELElBQUksQ0FBQyxJQUFJLElBQUksR0FBRyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUM7WUFDOUMsT0FBTyxHQUFHLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQztRQUNsQyxNQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7UUFFMUMsSUFBSSxJQUFJLElBQUksS0FBSztZQUNmLE9BQU8sWUFBWSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUEsd0hBQXdIO1FBRzVLLENBQUMsU0FBUywwQkFBMEI7WUFDbEMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxRQUFRLEdBQUcsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBRTdDLENBQUMsU0FBUyxtQkFBbUI7Z0JBQzNCLE1BQU0sWUFBWSxHQUFHLENBQUMsTUFBTSxDQUFDLFdBQVcsR0FBRyxpQkFBaUIsRUFBRSxNQUFNLENBQUMsV0FBVyxHQUFHLGdCQUFnQixDQUFDLENBQUM7Z0JBQ3JHLE1BQU0sZUFBZSxHQUFHLElBQUksTUFBTSxDQUFDO29CQUNqQyxLQUFLLEVBQUUsaUJBQWlCO29CQUN4QixLQUFLLEVBQUUsUUFBUSxDQUFDO3dCQUNkLEVBQUUsRUFBRSxZQUFZO3dCQUNoQixFQUFFLEVBQUUsa0JBQWtCO3dCQUN0QixFQUFFLEVBQUUsaUJBQWlCO3FCQUN0QixDQUFDO29CQUNGLFFBQVEsRUFBRSxZQUFZLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUMzRCxDQUFDLENBQUM7Z0JBRUgsR0FBRyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO2dCQUcvQyxTQUFTLGNBQWMsQ0FBQyxLQUFhO29CQUNuQyxJQUFJLEtBQUssR0FBRyxTQUFTLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLElBQUksU0FBUyxDQUFDO29CQUM1RCxJQUFJLENBQUMsS0FBSzt3QkFBRSxPQUFPLFNBQVMsQ0FBQztvQkFDN0IsT0FBTyxJQUFJLE1BQU0sQ0FBQzt3QkFDaEIsS0FBSyxFQUFFLGdCQUFnQixHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQzt3QkFDekQsS0FBSyxFQUFFLFFBQVEsQ0FBQzs0QkFDZCxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7NEJBQ3pELEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQzt5QkFDMUQsQ0FBQzt3QkFDRixPQUFPLEVBQUUsR0FBRyxFQUFFOzRCQUNaLFdBQVcsQ0FBQztnQ0FDVixLQUFLLEVBQUUsS0FBSztnQ0FDWixTQUFTLEVBQUUsR0FBRyxDQUFDLFdBQVcsQ0FBQyxTQUFTO2dDQUNwQyxTQUFTLEVBQUUsWUFBWTtnQ0FDdkIsaUJBQWlCLEVBQUUsSUFBSTtnQ0FDdkIsaUJBQWlCLEVBQUUsSUFBSTs2QkFDeEIsQ0FBQyxDQUFDOzRCQUNILFdBQVcsRUFBRSxDQUFDO3dCQUNoQixDQUFDO3FCQUNGLENBQUMsQ0FBQztnQkFDTCxDQUFDO1lBQ0gsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUNQLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFFTCxXQUFXLEVBQUUsQ0FBQztRQUVkLFNBQVMsWUFBWSxDQUFDLEtBQTJDO1lBQy9ELElBQUksQ0FBQyxLQUFLO2dCQUFFLE9BQU87WUFFbkIsT0FBTyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUU7Z0JBQ3ZDLE1BQU0sT0FBTyxHQUFHLElBQUksTUFBTSxDQUFDO29CQUN6QixLQUFLLEVBQUUsS0FBSyxHQUFHLElBQUk7b0JBQ25CLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO29CQUNkLFdBQVcsRUFBRSxJQUFJLGdCQUFnQixFQUFFO29CQUNuQyxTQUFTLEVBQUUsR0FBRyxDQUFDLFdBQVc7b0JBQzFCLGVBQWUsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLFdBQVcsR0FBRyxJQUFJLE9BQU8sQ0FBQztvQkFDdEQsZ0JBQWdCLEVBQUUsR0FBRyxFQUFFLENBQUMsc0JBQXNCLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxNQUFNLEdBQUcsS0FBSyxFQUFFLElBQUksQ0FBQztpQkFDNUcsQ0FBQyxDQUFDO2dCQUNILElBQUksSUFBSTtvQkFBRSxPQUFPLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQyxZQUFZLENBQUM7Z0JBQzlDLE9BQU8sT0FBTyxDQUFDO1lBQ2pCLENBQUMsQ0FBQyxDQUFDO1lBR0gsU0FBUyxzQkFBc0IsQ0FBQyxXQUE2QixFQUFFLFFBQWdCLEVBQUUsSUFBb0IsRUFBRSxLQUFhLEVBQUUsSUFBYTtnQkFFakksQ0FBQyxTQUFTLHdCQUF3QjtvQkFDaEMsTUFBTSxNQUFNLEdBQUcsdUJBQXVCLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ2pGLElBQUksQ0FBQyxNQUFNO3dCQUFFLE9BQU87b0JBRXBCLENBQUMsU0FBUyxlQUFlO3dCQUN2QixJQUFJLElBQUk7NEJBQUUsT0FBTzt3QkFDakIsTUFBTSxLQUFLLEdBQUc7NEJBQ1osTUFBTSxDQUFDLFlBQVk7Z0NBQ25CLG1CQUFtQjs0QkFDbkIsTUFBTSxDQUFDLFlBQVk7Z0NBQ25CLG1CQUFtQjs0QkFDbkIsTUFBTSxDQUFDLFlBQVk7Z0NBQ25CLG1CQUFtQjs0QkFDbkIsTUFBTSxDQUFDLFlBQVk7Z0NBQ25CLG1CQUFtQjs0QkFDbkIsTUFBTSxDQUFDLFdBQVcsR0FBRyxTQUFTO3lCQUMvQixDQUFDO3dCQUVGLElBQUksSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQywrR0FBK0c7NEJBQ3BJLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLFdBQVcsR0FBRyxRQUFRLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQzs2QkFDakcsSUFBSSxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLHFDQUFxQzs0QkFDL0QsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxHQUFHLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxxRUFBcUU7d0JBRTFILE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksU0FBUyxDQUFDLENBQUM7d0JBRTVGLFlBQVksQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQSw0REFBNEQ7b0JBRTNGLENBQUMsQ0FBQyxFQUFFLENBQUM7b0JBRUwsQ0FBQyxTQUFTLFlBQVk7d0JBQ3BCLElBQUksWUFBWSxDQUFDLFdBQVcsS0FBSyxZQUFZLENBQUMsQ0FBQyxDQUFDOzRCQUFFLE9BQU8sQ0FBQSw0Q0FBNEM7d0JBQ3JHLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsR0FBRyxNQUFNLENBQUMsV0FBVyxRQUFRLEtBQUssRUFBRSxFQUFFLGdCQUFnQixDQUFDLElBQUksU0FBUyxDQUFDLENBQUM7d0JBQ3BILFlBQVksQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7b0JBQy9CLENBQUMsQ0FBQyxFQUFFLENBQUM7Z0JBQ1AsQ0FBQyxDQUFDLEVBQUUsQ0FBQztnQkFFTCxDQUFDLFNBQVMsc0JBQXNCO29CQUM5QixNQUFNLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEVBQUUsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUMsQ0FBQztvQkFFcEcsTUFBTSxDQUFDLGFBQWEsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxnQkFBZ0IsRUFBRSxnQkFBZ0IsRUFBRSxXQUFXLEVBQUUsaUJBQWlCLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxpQkFBaUIsRUFBRSxrQkFBa0IsRUFBRSxPQUFPLEVBQUUsY0FBYyxFQUFFLGtCQUFrQixFQUFFLHFCQUFxQixFQUFFLG1CQUFtQixDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsQ0FBQztvQkFFcFQsTUFBTSxjQUFjLEdBQVcsTUFBTSxDQUFDLFVBQVUsR0FBRyxjQUFjLENBQUM7b0JBRWxFLE1BQU0sTUFBTSxHQUFHLHVCQUF1QixDQUFDLFdBQVcsRUFBRSxNQUFNLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUU5RSxDQUFDLFNBQVMsU0FBUzt3QkFDakIsSUFBSSxJQUFJOzRCQUFFLE9BQU87d0JBQ2pCLE1BQU0sTUFBTSxHQUFHLFdBQVcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxTQUFTLENBQUMsQ0FBQzt3QkFFcEcsWUFBWSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQTt3QkFFNUIsU0FBUyxXQUFXOzRCQUNsQixJQUFJLGVBQWUsR0FBYTtnQ0FDOUIsYUFBYTtnQ0FDYixLQUFLO2dDQUNMLFNBQVM7Z0NBQ1QsU0FBUztnQ0FDVCxVQUFVO2dDQUNWLEtBQUs7Z0NBQ0wsZ0JBQWdCO2dDQUNoQixnQkFBZ0I7Z0NBQ2hCLFNBQVM7Z0NBQ1QsTUFBTSxDQUFDLFdBQVcsR0FBRyxRQUFRLEdBQUcsS0FBSztnQ0FDckMsV0FBVztnQ0FDWCxTQUFTOzZCQUNWLENBQUM7NEJBR0YsSUFBSSxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQ0FDcEIsZUFBZSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsMkZBQTJGO2lDQUVqSCxJQUFJLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztnQ0FDNUIsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUN6QixnQkFBZ0IsRUFDaEIsZ0JBQWdCLEVBQ2hCLFNBQVMsRUFDVCxNQUFNLENBQUMsV0FBVyxHQUFHLFFBQVEsR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFBLGtEQUFrRDtnQ0FDakcsNkNBQTZDO2dDQUM3QyxlQUFlLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsUUFBUSxHQUFHLGlCQUFpQixDQUFDLENBQUM7NEJBQzFFLENBQUM7NEJBQUEsQ0FBQzs0QkFFRixJQUFJLENBQ0Y7Z0NBQ0UsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQ0FDVCxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dDQUNULEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7NkJBQ1YsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO2dDQUNoQixlQUFlLEdBQUcsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUEscUVBQXFFOzRCQUUxSSxPQUFPLGVBQWUsQ0FBQTt3QkFFeEIsQ0FBQztvQkFDSCxDQUFDLENBQUMsRUFBRSxDQUFDO29CQUVMLENBQUMsU0FBUyxNQUFNO3dCQUNkLElBQUksQ0FBQyxJQUFJOzRCQUFFLE9BQU87d0JBQ2xCLE1BQU0sTUFBTSxHQUFHLFdBQVcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxTQUFTLENBQUMsQ0FBQzt3QkFFcEcsWUFBWSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQTt3QkFFNUIsU0FBUyxXQUFXOzRCQUNsQix5RUFBeUU7NEJBQ3pFLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxDQUFDO2dDQUNkLCtEQUErRDtnQ0FDL0QsT0FBTztvQ0FDTCxVQUFVO29DQUNWLEtBQUs7b0NBQ0wsY0FBYztvQ0FDZCxnQkFBZ0I7b0NBQ2hCLFNBQVM7aUNBQ1YsQ0FBQzs0QkFDSixDQUFDO2lDQUFNLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxDQUFDO2dDQUNyQixzRUFBc0U7Z0NBQ3RFLE9BQU8sQ0FBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDOzRCQUN2QyxDQUFDO2lDQUFNLENBQUM7Z0NBQ04sa0NBQWtDO2dDQUNsQyxPQUFPO29DQUNMLGdCQUFnQjtvQ0FDaEIsZ0JBQWdCO29DQUNoQixTQUFTO2lDQUNWLENBQUM7NEJBQ0osQ0FBQzt3QkFFSCxDQUFDO29CQUVILENBQUMsQ0FBQyxFQUFFLENBQUE7Z0JBQ04sQ0FBQyxDQUFDLEVBQUUsQ0FBQztnQkFFTCxNQUFNLFFBQVEsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQXFCLENBQUM7Z0JBRXRFLENBQUMsU0FBUyxlQUFlO29CQUN2QixJQUFJLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUFFLE9BQU8sQ0FBQSxzSEFBc0g7b0JBQ3JKLE1BQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUN2QyxHQUFHLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxVQUFVLENBQUMsTUFBTSxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUMsQ0FDakUsQ0FBQztvQkFFRixRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQzt5QkFDcEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7Z0JBQ2xDLENBQUMsQ0FBQyxFQUFFLENBQUM7Z0JBRUwsQ0FBQyxTQUFTLHFCQUFxQjtvQkFDN0IsTUFBTSxVQUFVLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsS0FBSyxLQUFLLE1BQU0sQ0FBQyxXQUFXLEdBQUcsY0FBYyxDQUFDLENBQUM7b0JBRXJHLGFBQWEsRUFBRSxDQUFDO29CQUVoQixTQUFTLGFBQWE7d0JBQ3BCLHVEQUF1RDt3QkFDdkQsSUFBSSxJQUFJOzRCQUFFLFVBQVU7aUNBQ2pCLE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDOzs0QkFDbkcsVUFBVTtpQ0FDWixPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQyxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQTt3QkFFdkcsU0FBUyxXQUFXLENBQUMsR0FBbUIsRUFBRSxHQUFXOzRCQUNuRCxJQUFJLENBQUMsR0FBRztnQ0FBRSxPQUFPOzRCQUNqQixHQUFHLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTtnQ0FDeEIsSUFBSSxDQUFDLEtBQUssS0FBSztvQ0FBRSxHQUFHLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQTs0QkFDMUMsQ0FBQyxDQUFDLENBQUM7NEJBQ0gsR0FBRyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQ3pCLENBQUM7b0JBQ0gsQ0FBQztvQkFBQSxDQUFDO2dCQUVKLENBQUMsQ0FBQyxFQUFFLENBQUM7Z0JBRUwsQ0FBQyxTQUFTLG1CQUFtQjtvQkFDM0IsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFO3dCQUMzQixPQUFPLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDO3dCQUMvQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsUUFBUSxDQUFDOzZCQUNuQyxPQUFPLENBQUMsQ0FBQyxTQUFTLEVBQUUsRUFBRTs0QkFDckIsT0FBTyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUEsOEJBQThCOzRCQUNwRyxNQUFNLElBQUksR0FBRyxjQUFjLENBQUMsQ0FBQSw0QkFBNEI7NEJBQ3hELE9BQU8sQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFBO3dCQUM1RCxDQUFDLENBQ0EsQ0FBQztvQkFDTixDQUFDLENBQUMsQ0FBQztnQkFDTCxDQUFDLENBQUMsRUFBRSxDQUFDO2dCQUVMLFNBQVMsWUFBWSxDQUFDLE1BQW9CLEVBQUUsTUFBc0I7b0JBQ2hFLDJCQUEyQixDQUFDO3dCQUMxQixNQUFNLEVBQUUsTUFBTTt3QkFDZCxTQUFTLEVBQUUsWUFBWSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUM7d0JBQzNDLFFBQVEsRUFBRTs0QkFDUixhQUFhLEVBQUUsYUFBYTs0QkFDNUIsRUFBRSxFQUFFLE1BQU07eUJBQ1g7d0JBQ0QsU0FBUyxFQUFFLFdBQVc7cUJBQ3ZCLENBQUMsQ0FBQztnQkFDTCxDQUFDO1lBRUgsQ0FBQztZQUFBLENBQUM7UUFFSixDQUFDO0lBRUgsQ0FBQztDQUNGLENBQUMsQ0FBQztBQUVILEdBQUcsQ0FBQyxRQUFRLEdBQUcsSUFBSSxNQUFNLENBQUM7SUFDeEIsS0FBSyxFQUFFLGFBQWE7SUFDcEIsS0FBSyxFQUFFLFFBQVEsQ0FBQztRQUNkLEVBQUUsRUFBRSxxQkFBcUI7UUFDekIsRUFBRSxFQUFFLHFCQUFxQjtRQUN6QixFQUFFLEVBQUUsa0JBQWtCO0tBQ3ZCLENBQUM7SUFDRixPQUFPLEVBQUUsR0FBYSxFQUFFO1FBQ3RCLElBQUksR0FBRyxDQUFDLFFBQVEsQ0FBQyxRQUFRO1lBQUUsT0FBTyxHQUFHLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQztRQUV4RCxNQUFNLElBQUksR0FBRztZQUNYO2dCQUNFLEVBQUUsRUFBRSxPQUFPO2dCQUNYLEVBQUUsRUFBRSxVQUFVO2dCQUNkLEVBQUUsRUFBRSxRQUFRO2FBQ2I7WUFDRDtnQkFDRSxFQUFFLEVBQUUsU0FBUztnQkFDYixFQUFFLEVBQUUsT0FBTztnQkFDWCxFQUFFLEVBQUUsUUFBUTthQUNiO1lBQ0Q7Z0JBQ0UsRUFBRSxFQUFFLFNBQVM7Z0JBQ2IsRUFBRSxFQUFFLE9BQU87Z0JBQ1gsRUFBRSxFQUFFLFNBQVM7YUFDZDtZQUNEO2dCQUNFLEVBQUUsRUFBRSxVQUFVO2dCQUNkLEVBQUUsRUFBRSxVQUFVO2dCQUNkLEVBQUUsRUFBRSxXQUFXO2FBQ2hCO1lBQ0Q7Z0JBQ0UsRUFBRSxFQUFFLFFBQVE7Z0JBQ1osRUFBRSxFQUFFLE9BQU87Z0JBQ1gsRUFBRSxFQUFFLFVBQVU7YUFDZjtZQUNEO2dCQUNFLEVBQUUsRUFBRSxRQUFRO2dCQUNaLEVBQUUsRUFBRSxVQUFVO2dCQUNkLEVBQUUsRUFBRSxRQUFRO2FBQ2I7WUFDRDtnQkFDRSxFQUFFLEVBQUUsT0FBTztnQkFDWCxFQUFFLEVBQUUsUUFBUTtnQkFDWixFQUFFLEVBQUUsVUFBVTthQUNmO1NBQ0YsQ0FBQztRQUVGLE1BQU0sV0FBVyxHQUFHO1lBQ2xCLEVBQUUsRUFBRSxhQUFhO1lBQ2pCLEVBQUUsRUFBRSxpQkFBaUI7WUFDckIsRUFBRSxFQUFFLGlCQUFpQjtTQUN0QixDQUFDO1FBQ0YsTUFBTSxRQUFRLEdBQUc7WUFDZixFQUFFLEVBQUUsWUFBWTtZQUNoQixFQUFFLEVBQUUsYUFBYTtZQUNqQixFQUFFLEVBQUUsYUFBYTtTQUNsQixDQUFBO1FBQ0QsR0FBRyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEdBQUc7WUFDdEIsU0FBUyxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDekMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztpQkFDckIsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLE9BQU8sQ0FBQztpQkFDMUIsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsRUFBRSxFQUFFLEVBQUUsUUFBUSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxRQUFRLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLFFBQVEsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUNsSSxDQUFDO1FBRUYsc0JBQXNCLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQSw4QkFBOEI7UUFFaEUsT0FBTyxHQUFHLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQztRQUU3QixTQUFTLFNBQVMsQ0FBQyxHQUFXLEVBQUUsS0FBbUI7WUFDakQsSUFBSSxJQUFJLEdBQVcsU0FBUyxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3ZDLEdBQUcsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLEdBQUcsR0FBRyxPQUFPLENBQUMsR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUMsR0FBRyxXQUFXLENBQUM7WUFFOUYsc0JBQXNCLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBLDRDQUE0QztZQUVuRixJQUFJLE1BQU0sR0FBRyxNQUFNLENBQUM7WUFFcEIsSUFBSSxHQUFHLEdBQUcsSUFBSSxNQUFNLENBQUM7Z0JBQ25CLEtBQUssRUFBRSxPQUFPO2dCQUNkLEtBQUssRUFBRSxLQUFLO2dCQUNaLFNBQVMsRUFBRSxnQkFBZ0I7Z0JBQzNCLFdBQVcsRUFBRSxJQUFJLGdCQUFnQixFQUFFO2dCQUNuQyxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsaUJBQWlCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxNQUFNLENBQUM7YUFDbkQsQ0FBQyxDQUFDO1lBQ0gsT0FBTyxHQUFHLENBQUE7UUFDWixDQUFDO1FBRUQsU0FBUyxpQkFBaUIsQ0FBQyxHQUFXLEVBQUUsTUFBYyxPQUFPLEVBQUUsU0FBaUIsTUFBTTtZQUNwRixXQUFXLEVBQUUsQ0FBQztZQUNkLE1BQU0sUUFBUSxHQUFHLFNBQVMsRUFBRSxDQUFDLFFBQVEsQ0FBQztZQUN0QyxJQUFJLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO2dCQUN4QixPQUFPLEdBQUcsQ0FBQyxlQUFlLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUU5QyxHQUFHLENBQUMsZUFBZTtnQkFDakIsUUFBUSxDQUFDLElBQUk7cUJBQ1YsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFFekMsU0FBUyxjQUFjLENBQUMsS0FBYTtnQkFDbkMsSUFBSSxFQUFFLEdBQVcsYUFBYSxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQztnQkFFNUMsSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztvQkFDdkIsS0FBSyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO2dCQUVuQyxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLGtCQUFrQixDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztvQkFDeEQsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUEsNkRBQTZEO3FCQUUvSyxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLHVCQUF1QixDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLFVBQVUsQ0FBQztvQkFDekksT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3FCQUUzSCxJQUFJLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztvQkFDdEMsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEtBQUssR0FBRyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUM7cUJBRTNFLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsc0JBQXNCLEdBQUcsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsRUFBRSxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztvQkFDekksT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxpREFBaUQsQ0FBQyxDQUFDOztvQkFDekUsT0FBTyxLQUFLLENBQUM7WUFDcEIsQ0FBQztRQUVILENBQUM7UUFBQSxDQUFDO0lBRUosQ0FBQztDQUNGLENBQUMsQ0FBQztBQUVILEdBQUcsQ0FBQyxjQUFjLEdBQUcsSUFBSSxNQUFNLENBQUM7SUFDOUIsS0FBSyxFQUFFLGdCQUFnQjtJQUN2QixLQUFLLEVBQUUsUUFBUSxDQUFDO1FBQ2QsRUFBRSxFQUFFLGlCQUFpQjtRQUNyQixFQUFFLEVBQUUsaUJBQWlCO1FBQ3JCLEVBQUUsRUFBRSx3QkFBd0I7S0FDN0IsQ0FBQztJQUNGLFNBQVMsRUFBRSxDQUFDLEdBQUcsZ0JBQWdCLENBQUM7SUFDaEMsV0FBVyxFQUFFLElBQUksZ0JBQWdCLEVBQUU7SUFDbkMsT0FBTyxFQUFFLEdBQWEsRUFBRTtRQUN0QixHQUFHLENBQUMsY0FBYyxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsQ0FBQSwrSkFBK0o7UUFDaE0sR0FBRyxDQUFDLGNBQWMsQ0FBQyxlQUFlLEdBQUcsQ0FBQyxHQUFHLFNBQVMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FDbEUsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLFVBQVUsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQ3JELENBQUMsQ0FBQyw4RUFBOEU7UUFFakYsSUFBSSxPQUFPLEtBQUssQ0FBQztZQUNmLDhIQUE4SDtZQUM5SCxHQUFHLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQ3ZDLEdBQUcsQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FDeEMsTUFBTSxDQUFDLFdBQVcsR0FBRyxZQUFZLENBQ2xDLEVBQ0QsQ0FBQyxFQUFFLHlFQUF5RTtZQUM1RSxNQUFNLENBQUMsY0FBYyxHQUFHLGdCQUFnQixDQUN6QyxDQUFDO2FBQ0MsSUFBSSxPQUFPLEtBQUssQ0FBQyxJQUFJLFVBQVUsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDO1lBQ3ZELHFLQUFxSztZQUNySyxHQUFHLENBQUMsY0FBYyxDQUFDLGVBQWUsR0FBRyxHQUFHLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQzVFLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FDUixDQUFDLEtBQUssQ0FBQyxVQUFVLENBQ2YsTUFBTSxDQUFDLFdBQVcsR0FBRyxpQkFBaUIsQ0FDdkMsQ0FDSixDQUFDO1FBRUosV0FBVyxFQUFFLENBQUM7UUFDZCxPQUFPLEdBQUcsQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDO0lBQzVDLENBQUM7SUFDRCxnQkFBZ0IsRUFBRSxLQUFLLEVBQUUsTUFBYyxHQUFHLENBQUMsY0FBYyxFQUFFLGVBQXVCLE1BQU0sQ0FBQyxhQUFhLEVBQUUsRUFBRTtRQUN4RyxNQUFNLFdBQVcsR0FBRyxHQUFHLENBQUMsV0FBVyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxXQUFXO1lBQUUsT0FBTztRQUV6QixDQUFDLFNBQVMsaUJBQWlCO1lBQ3pCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxZQUFZLEdBQUcsY0FBYyxFQUFFLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxRQUFRLENBQTJCLENBQUMsQ0FBQSxtR0FBbUc7WUFFblEsSUFBSSxDQUFDLE1BQU0sSUFBSSxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUM7Z0JBQUUsT0FBTztZQUV6QyxJQUFJLE1BQWMsQ0FBQztZQUNuQixJQUFJLEdBQUcsS0FBSyxHQUFHLENBQUMsY0FBYztnQkFDNUIsTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUM7aUJBQzdCLElBQUksR0FBRyxLQUFLLEdBQUcsQ0FBQyxjQUFjO2dCQUNqQyxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQztpQkFDN0IsSUFBSSxHQUFHLEtBQUssR0FBRyxDQUFDLGNBQWM7Z0JBQ2pDLE1BQU0sR0FBRyxRQUFRLENBQUMsVUFBVSxDQUFDO2lCQUMxQixJQUFJLEdBQUcsQ0FBQyxLQUFLLEtBQUssR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLO2dCQUNyQyxNQUFNLEdBQUcsUUFBUSxDQUFDLFdBQVcsQ0FBQztZQUVoQyxJQUFJLENBQUMsTUFBTTtnQkFBRSxPQUFPO1lBRXBCLFlBQVksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDO2lCQUM5QixPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ2QsTUFBTSxLQUFLLEdBQUcsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQzVELElBQUksQ0FBQyxLQUFLO29CQUFFLE9BQU87Z0JBQ25CLEtBQUssQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUN4RixDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFFTCxDQUFDLFNBQVMsNEJBQTRCO1lBQ3BDLE1BQU0sUUFBUSxHQUNaLE1BQU0sQ0FBQyxZQUFZO2dCQUNuQiwwQkFBMEIsQ0FBQztZQUU3QixNQUFNLGdCQUFnQixHQUFHLHVCQUF1QixDQUFDLFdBQVcsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLG9FQUFvRTtZQUU3SSxJQUFJLGdCQUFnQixDQUFDLE1BQU0sR0FBRyxDQUFDO2dCQUFFLE9BQU8sQ0FBQywrQ0FBK0M7WUFDeEYsTUFBTSxNQUFNLEdBQUcsZ0JBQWdCLEVBQUUsTUFBTSxDQUFDO1lBQ3hDLGdCQUFnQjtpQkFDYixNQUFNLENBQ0wsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUNWLGdCQUFnQixFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO2dCQUN0QyxnQkFBZ0IsRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsTUFBTSxHQUFHLENBQUMsQ0FDbEQ7aUJBQ0EsT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztZQUUxQyxJQUFJLEdBQUcsS0FBSyxHQUFHLENBQUMsY0FBYztnQkFDNUIsZ0JBQWdCLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMscUNBQXFDOztnQkFFNUUsZ0JBQWdCLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUEsOEJBQThCO1lBRXRFLElBQUksWUFBWSxHQUFHLFNBQVMsQ0FBQyxRQUFRLEVBQUUsV0FBVyxDQUFlLENBQUMsQ0FBQyx5SEFBeUg7WUFFNUwsSUFBSSxDQUFDLFlBQVk7Z0JBQ2YsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLG1DQUFtQyxDQUFDLENBQUM7WUFDMUQsWUFBWSxHQUFHLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBRXhDLE1BQU0sU0FBUyxHQUFHLElBQUksTUFBTSxDQUFDO2dCQUMzQixLQUFLLEVBQUUsY0FBYztnQkFDckIsS0FBSyxFQUFFLFFBQVEsQ0FBQztvQkFDZCxFQUFFLEVBQUUsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLHNDQUFzQztvQkFDM0YsRUFBRSxFQUFFLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxzQ0FBc0M7aUJBQzVGLENBQUM7Z0JBQ0YsUUFBUSxFQUFFLEdBQUcsQ0FBQyxZQUFZO2dCQUMxQixXQUFXLEVBQUUsSUFBSSxnQkFBZ0IsRUFBRTtnQkFDbkMsT0FBTyxFQUFFLEdBQUcsRUFBRTtvQkFDWixXQUFXLENBQUM7d0JBQ1YsS0FBSyxFQUFFLFlBQVk7d0JBQ25CLFNBQVMsRUFBRSxHQUFHLENBQUMsY0FBYyxDQUFDLFNBQVM7d0JBQ3ZDLFFBQVEsRUFBRSxTQUFTLENBQUMsV0FBVzt3QkFDL0IsU0FBUyxFQUFFLFNBQVMsQ0FBQyxXQUFXO3dCQUNoQyxpQkFBaUIsRUFBRSxLQUFLO3dCQUN4QixpQkFBaUIsRUFBRSxLQUFLO3FCQUN6QixDQUFDLENBQUM7Z0JBRUwsQ0FBQzthQUNGLENBQUMsQ0FBQztZQUVILG1CQUFtQixDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsa0JBQWtCLEVBQUUsYUFBYSxDQUFDLENBQUM7UUFDMUYsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUVMLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUM7WUFBRSxPQUFPLENBQUEsa0ZBQWtGO1FBRXRKLE1BQU0sK0JBQStCLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFM0MsTUFBTSwrQkFBK0IsQ0FBQztZQUNwQyxNQUFNLEVBQUUsWUFBWTtZQUNwQixTQUFTLEVBQUUsWUFBWSxDQUFDLFlBQVksQ0FBQztZQUNyQyxTQUFTLEVBQUUsV0FBVztZQUN0QixNQUFNLEVBQUUsSUFBSTtZQUNaLGNBQWMsRUFBRSxLQUFLO1NBQ3RCLENBQUMsQ0FBQztRQUVILG1CQUFtQixDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRWpDLElBQUksR0FBRyxLQUFLLEdBQUcsQ0FBQyxjQUFjO1lBQUUsT0FBTyxDQUFDLDJFQUEyRTtRQUVuSCxNQUFNLDRCQUE0QixFQUFFLENBQUMsQ0FBQSwrSEFBK0g7UUFFcEssQ0FBQyxTQUFTLHNCQUFzQjtZQUM5QixrRUFBa0U7WUFDbEUsTUFBTSxVQUFVLEdBQUcsSUFBSSxNQUFNLENBQUM7Z0JBQzVCLEtBQUssRUFBRSxtQkFBbUI7Z0JBQzFCLEtBQUssRUFBRSxRQUFRLENBQUM7b0JBQ2QsRUFBRSxFQUFFLHNCQUFzQjtvQkFDMUIsRUFBRSxFQUFFLDBCQUEwQjtvQkFDOUIsRUFBRSxFQUFFLGlCQUFpQjtpQkFDdEIsQ0FBQztnQkFDRixRQUFRLEVBQUUsR0FBRyxDQUFDLFlBQVk7Z0JBQzFCLFNBQVMsRUFBRSxHQUFHLENBQUMsY0FBYyxDQUFDLFNBQVM7Z0JBQ3ZDLFdBQVcsRUFBRSxJQUFJLGdCQUFnQixFQUFFO2dCQUNuQyxlQUFlLEVBQUUsQ0FBQyxNQUFNLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQzthQUNsRCxDQUFDLENBQUM7WUFFSCxtQkFBbUIsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFnQixFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBQzNGLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFFTCxDQUFDLFNBQVMsZUFBZTtZQUN2QixJQUFJLFVBQVUsS0FBSyxNQUFNO2dCQUN2QixZQUFZLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2lCQUNoQyxJQUFJLFVBQVUsS0FBSyxZQUFZLENBQUMsUUFBUTtnQkFDM0MsWUFBWSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQTtpQkFDaEMsSUFBSSxrQkFBa0IsS0FBSyxZQUFZLENBQUMsWUFBWTtnQkFDdkQsWUFBWSxDQUFDLGtCQUFrQixDQUFDLENBQUE7WUFFbEMsU0FBUyxZQUFZLENBQUMsSUFBWTtnQkFDaEMsTUFBTSxTQUFTLEdBQUcsSUFBSSxNQUFNLENBQUM7b0JBQzNCLEtBQUssRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBQyw2SUFBNkk7b0JBQ3JLLEtBQUssRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUs7b0JBQ3ZCLFdBQVcsRUFBRSxJQUFJLGdCQUFnQixFQUFFO29CQUNuQyxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQztvQkFDbEQsZ0JBQWdCLEVBQUUsS0FBSyxJQUFJLEVBQUUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQztpQkFDakYsQ0FBQyxDQUFDO2dCQUVILEdBQUcsQ0FBQyxjQUFjLENBQUMsUUFBUSxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQzFDLE1BQU0sUUFBUSxHQUFHLFdBQVcsQ0FBQyxRQUFRLENBQUM7Z0JBRXRDLElBQUksVUFBVSxLQUFLLE1BQU07b0JBQ3ZCLG1CQUFtQixDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLGFBQWEsRUFBRSxPQUFPLENBQUMsQ0FBQzs7b0JBQ25FLG1CQUFtQixDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEVBQUUsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBRTVGLENBQUM7WUFBQSxDQUFDO1FBQ0osQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUdMOzs7U0FHQztRQUNELEtBQUssVUFBVSwrQkFBK0IsQ0FBQyxHQUFXO1lBQ3hELElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVztnQkFBRSxPQUFPO1lBQzdCLE1BQU0sU0FBUyxHQUNiLENBQUMsR0FBRyxFQUFFO2dCQUNKLE1BQU0sS0FBSyxHQUFhLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQ3JDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDO29CQUM1QyxLQUFLLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxzVkFBc1Y7Z0JBRXhYLGdjQUFnYztnQkFDaGMsTUFBTSxRQUFRLEdBQVcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxJQUFJLENBQ3ZELENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksTUFBTSxDQUFDLENBQUMsc1JBQXNSO2dCQUVuVSxJQUFJLFFBQVEsS0FBSyxPQUFPLENBQUMsUUFBUTtvQkFBRSxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxtRkFBbUY7WUFDM0ksQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUVQLElBQUksTUFBbUIsQ0FBQztZQUV4QixDQUFDLEtBQUssVUFBVSxrQkFBa0I7Z0JBQ2hDLE1BQU0sR0FBRyx1QkFBdUIsQ0FDOUIsV0FBVyxFQUNYLE1BQU0sQ0FBQyxNQUFNLEdBQUcsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBRXJDLElBQUksQ0FBQyxNQUFNO29CQUNULE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQywwQ0FBMEMsQ0FBQyxDQUFDO2dCQUVqRSxJQUFJLE9BQXFCLENBQUM7Z0JBRTFCLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDO29CQUN0RixtTUFBbU07b0JBQ25NLE9BQU8sR0FBRyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsWUFBWSxHQUFHLEtBQUssRUFBRSxpQkFBaUIsQ0FBQyxJQUFJLFNBQVMsQ0FBQyxDQUFDOztvQkFFaEYsT0FBTyxHQUFHLGVBQWUsRUFBRSxDQUFDO2dCQUdqQyxJQUFJLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQztvQkFDcEIsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUNoQixrREFBa0QsQ0FDbkQsQ0FBQztnQkFFSiwyQkFBMkIsQ0FBQztvQkFDMUIsTUFBTSxFQUFFLE9BQU87b0JBQ2YsU0FBUyxFQUFFLEdBQUcsQ0FBQyxTQUFTO29CQUN4QixRQUFRLEVBQUU7d0JBQ1IsYUFBYSxFQUFFLGFBQWE7d0JBQzVCLEVBQUUsRUFBRSxNQUFNLENBQUMsa0JBQWlDO3FCQUM3QztvQkFDRCxTQUFTLEVBQUUsR0FBRyxDQUFDLFdBQVc7aUJBQzNCLENBQUMsQ0FBQztnQkFFSCxzQkFBc0IsQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLGVBQWUsRUFBRSxNQUFNLENBQUMsWUFBWSxFQUFFLGtDQUFrQyxFQUFFLFFBQVEsQ0FBQztvQkFDeEgsRUFBRSxFQUFFLGdCQUFnQjtvQkFDcEIsRUFBRSxFQUFFLGVBQWU7b0JBQ25CLEVBQUUsRUFBRSxjQUFjO2lCQUNuQixDQUFDLENBQUMsQ0FBQztnQkFFSixTQUFTLGVBQWU7b0JBQ3RCLElBQUksUUFBUSxHQUFHO3dCQUNiLE1BQU0sQ0FBQyxZQUFZLEdBQUcsYUFBYSxFQUFFO3dCQUNyQyxNQUFNLENBQUMsWUFBWTtxQkFDcEIsQ0FBQztvQkFHRixJQUFJLFNBQVM7d0JBQ1gsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQzFCOzRCQUNFLEdBQUcsVUFBVTs0QkFDYixZQUFZLENBQUMsVUFBVTs0QkFDdkIsT0FBTyxDQUFDLFFBQVE7NEJBQ2hCLE9BQU8sQ0FBQyxPQUFPOzRCQUNmLE9BQU8sQ0FBQyxlQUFlOzRCQUN2QixPQUFPLENBQUMsU0FBUzt5QkFDbEIsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsaVRBQWlUOzRCQUNqVSxDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxNQUFNLENBQUMsWUFBWSxHQUFHLGVBQWUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDOzRCQUM3RSxDQUFDLENBQUMscUJBQXFCLENBQUMsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQ2pELENBQUMsQ0FBQywwSkFBMEo7b0JBRS9KLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQy9CLFFBQVEsRUFDUixNQUFNLENBQUMsWUFBWSxDQUNwQixDQUFDLENBQUM7Z0JBRUwsQ0FBQztZQUVILENBQUMsQ0FBQyxFQUFFLENBQUM7WUFFTCxDQUFDLEtBQUssVUFBVSxzQkFBc0I7Z0JBQ3BDLE1BQU0sZ0JBQWdCLEdBQWdCLHVCQUF1QixDQUMzRCxHQUFHLENBQUMsV0FBVyxFQUNmLE1BQU0sQ0FBQyxNQUFNLEdBQUcsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBRW5DLElBQUksQ0FBQyxnQkFBZ0I7b0JBQ25CLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyx1Q0FBdUMsQ0FBQyxDQUFDO2dCQUU5RCxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDO3FCQUM5QixNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxjQUFjLENBQUMsTUFBTSxFQUFFLGNBQWMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7cUJBQzVHLFFBQVEsQ0FBQyxVQUFVLENBQUM7b0JBQ3JCLFlBQVksQ0FBQyxTQUFTLEdBQUcsVUFBVSxDQUFDLENBQUMsNEdBQTRHO2dCQUVuSixJQUFJLFFBQVEsR0FBYTtvQkFDdkIsYUFBYTtvQkFDYixVQUFVO29CQUNWLG9CQUFvQjtvQkFDcEIsVUFBVTtvQkFDVixRQUFRO29CQUNSLFVBQVU7b0JBQ1YsUUFBUTtvQkFDUixzQkFBc0I7aUJBQ3ZCLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUMsQ0FBQztnQkFFMUMsSUFBSSxHQUFHLEtBQUssR0FBRyxDQUFDLGNBQWM7b0JBQzVCLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxTQUFTLENBQUM7Z0JBRzNCLElBQUksY0FBYyxHQUFHO29CQUNuQixZQUFZLENBQUMsZUFBZTtvQkFDNUIsWUFBWSxDQUFDLE1BQU07b0JBQ25CLFlBQVksQ0FBQyxRQUFRO29CQUNyQixZQUFZLENBQUMsTUFBTTtpQkFDcEIsQ0FBQyxDQUFDLDRHQUE0RztnQkFFL0csSUFBSSxTQUFTLEVBQUUsQ0FBQztvQkFDZCxJQUFJLEtBQUssR0FBVyxDQUFDLENBQUM7b0JBQ3RCLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTt3QkFDMUIsSUFDRTs0QkFDRSxHQUFHLFVBQVU7NEJBQ2IsT0FBTyxDQUFDLGdCQUFnQjs0QkFDeEIsT0FBTyxDQUFDLFFBQVE7NEJBQ2hCLE9BQU8sQ0FBQyxlQUFlOzRCQUN2QixPQUFPLENBQUMsT0FBTzs0QkFDZixHQUFHLEtBQUs7NEJBQ1IsT0FBTyxDQUFDLFNBQVM7NEJBQ2pCLE9BQU8sQ0FBQyxTQUFTLEVBQUUsNEVBQTRFOzRCQUMvRixPQUFPLENBQUMsZUFBZTs0QkFDdkIsT0FBTyxDQUFDLFNBQVM7eUJBQ2xCLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQzs0QkFFakIsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLG1SQUFtUjs2QkFDM1IsSUFBSSxZQUFZLENBQUMsVUFBVSxFQUFFLENBQUM7NEJBQ2pDLEtBQUssR0FBRyxDQUFDLENBQUM7NEJBQ1YsUUFBUSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUEsbUZBQW1GO3dCQUN0SCxDQUFDOzZCQUNJLElBQUksY0FBYyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDOzRCQUN4QyxJQUFJLFVBQVUsR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDOzRCQUN6QyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQywwRkFBMEY7NEJBQ3ZJLFFBQVEsQ0FBQyxNQUFNLENBQUMsVUFBVSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLG1DQUFtQzs0QkFDdkUsS0FBSyxHQUFHLFNBQVMsQ0FBQyxDQUFDLDBHQUEwRzt3QkFDL0gsQ0FBQzt3QkFHRCxxQkFBcUIsQ0FBQyxRQUFRLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFDbkQsQ0FBQyxDQUFDLENBQUM7Z0JBQ0wsQ0FBQztnQkFFRCxJQUFJLFVBQVUsR0FBaUIsS0FBSyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQ3ZELFFBQVEsRUFDUixNQUFNLENBQUMsVUFBVSxDQUNsQixDQUFDLENBQUM7Z0JBRUgsSUFBSSxVQUFVLENBQUMsTUFBTSxLQUFLLENBQUM7b0JBQ3pCLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDO2dCQUU3RCxJQUFJLE1BQU0sS0FBSyxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUM7b0JBQ2pDLDRGQUE0RjtvQkFDNUYsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7d0JBQ3hCLFVBQVUsR0FBRyxVQUFVOzZCQUNwQixNQUFNLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsOEJBQThCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO3dCQUNwRSxDQUFDOzRCQUNELFVBQVUsR0FBRyxVQUFVO2lDQUNwQixNQUFNLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLFFBQVEsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDLENBQUM7Z0JBQzlFLENBQUM7Z0JBRUQsMkJBQTJCLENBQUM7b0JBQzFCLE1BQU0sRUFBRSxVQUFVO29CQUNsQixTQUFTLEVBQUUsR0FBRyxDQUFDLFNBQVM7b0JBQ3hCLFFBQVEsRUFBRTt3QkFDUixhQUFhLEVBQUUsYUFBYTt3QkFDNUIsRUFBRSxFQUFFLGdCQUFnQixDQUFDLGtCQUFpQztxQkFDdkQ7b0JBQ0QsU0FBUyxFQUFFLEdBQUcsQ0FBQyxXQUFXO2lCQUMzQixDQUFDLENBQUM7Z0JBRUgsc0JBQXNCLENBQ3BCLE1BQU0sQ0FBQyxVQUFVLEdBQUcsc0JBQXNCLEVBQzFDLE1BQU0sQ0FBQyxVQUFVLEVBQ2pCLGdFQUFnRSxNQUFNLENBQUMsS0FBSyxFQUFFLEVBQzlFLFFBQVEsQ0FBQztvQkFDUCxFQUFFLEVBQUUsY0FBYztvQkFDbEIsRUFBRSxFQUFFLGVBQWU7b0JBQ25CLEVBQUUsRUFBRSxjQUFjO2lCQUNuQixDQUFDLENBQUMsQ0FBQztZQUNSLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFFTDs7Ozs7O2VBTUc7WUFDSCxTQUFTLHNCQUFzQixDQUFDLFFBQWdCLEVBQUUsTUFBYyxFQUFFLE1BQWMsRUFBRSxLQUFtQjtnQkFDbkcsTUFBTSxNQUFNLEdBQW1CLHVCQUF1QixDQUFDLFdBQVcsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNwRyxJQUFJLENBQUMsTUFBTTtvQkFBRSxPQUFPO2dCQUNwQixNQUFNLE9BQU8sR0FBRyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFFbkksSUFBSSxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUM7b0JBQUUsT0FBTztnQkFDL0IsTUFBTSxLQUFLLEdBQUcsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNuQyxNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFO29CQUNqQyxNQUFNLE1BQU0sR0FBRyxJQUFJLE1BQU0sQ0FBQzt3QkFDeEIsS0FBSyxFQUFFLEtBQUssR0FBRyxNQUFNLEdBQUcsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRTt3QkFDL0QsS0FBSyxFQUFFLFFBQVEsQ0FBQzs0QkFDZCxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDOzRCQUNyQyxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO3lCQUN0QyxDQUFDO3dCQUNGLFFBQVEsRUFBRSxHQUFHLENBQUMsWUFBWTt3QkFDMUIsV0FBVyxFQUFFLElBQUksZ0JBQWdCLEVBQUU7d0JBQ25DLE9BQU8sRUFBRSxHQUFHLEVBQUU7NEJBQ1osV0FBVyxDQUFDO2dDQUNWLEtBQUssRUFBRSxLQUFLO2dDQUNaLFNBQVMsRUFBRSxnQkFBZ0I7Z0NBQzNCLFNBQVMsRUFBRSxNQUFNLENBQUMsV0FBVztnQ0FDN0IsaUJBQWlCLEVBQUUsS0FBSztnQ0FDeEIsaUJBQWlCLEVBQUUsS0FBSzs2QkFDekIsQ0FBQyxDQUFDO3dCQUNMLENBQUM7cUJBQ0YsQ0FBQyxDQUFDO29CQUNILE9BQU8sTUFBTSxDQUFBO2dCQUNmLENBQUMsQ0FBQyxDQUFDO2dCQUVILENBQUMsU0FBUyxlQUFlO29CQUN2QixNQUFNLEVBQUUsR0FBRyxRQUFRLEdBQUcsTUFBTSxDQUFDO29CQUM3QixNQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUNoRCxTQUFTLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztvQkFDbEIsU0FBUyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUM7b0JBQ3BELE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxhQUFhLEVBQUUsU0FBUyxDQUFDLENBQUM7b0JBRXZELE1BQU0sU0FBUyxHQUFHLElBQUksTUFBTSxDQUFDO3dCQUMzQixLQUFLLEVBQUUsV0FBVyxHQUFHLE1BQU07d0JBQzNCLEtBQUssRUFBRSxLQUFLO3dCQUNaLE9BQU8sRUFBRSxHQUFHLEVBQUU7NEJBQ1osSUFBSSxPQUFPLEdBQUcsWUFBWSxDQUFDLGFBQWEsQ0FBQyxHQUFHLEdBQUcsRUFBRSxHQUFHLE1BQU0sQ0FBQyxDQUFDOzRCQUM1RCxJQUFJLE9BQU87Z0NBQUUsT0FBTyxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7NEJBQ3pELG1CQUFtQixDQUFDLE1BQU0sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sQ0FBQztpQ0FDdkQsRUFBRSxHQUFHLEVBQUUsR0FBRyxNQUFNLENBQUM7d0JBQ3RCLENBQUM7cUJBQ0YsQ0FBQyxDQUFDO29CQUVILGFBQWEsQ0FBQzt3QkFDWixHQUFHLEVBQUUsU0FBUzt3QkFDZCxhQUFhLEVBQUUsU0FBUzt3QkFDeEIsUUFBUSxFQUFFLEdBQUcsQ0FBQyxZQUFZO3dCQUMxQixLQUFLLEVBQUUsS0FBSzt3QkFDWixPQUFPLEVBQUUsU0FBUyxDQUFDLE9BQU8sQ0FBQyxxUUFBcVE7cUJBQ2pTLENBQUMsQ0FBQztnQkFFTCxDQUFDLENBQUMsRUFBRSxDQUFDO1lBR1AsQ0FBQztZQUFBLENBQUM7WUFFRjs7Ozs7O2VBTUc7WUFDSCxTQUFTLHFCQUFxQixDQUM1QixRQUFrQixFQUNsQixTQUFpQixFQUNqQixLQUFhLEVBQ2IsTUFBYztnQkFFZCxJQUFJLENBQUMsS0FBSyxJQUFJLEtBQUssS0FBSyxDQUFDO29CQUFFLE9BQU87Z0JBQ2xDLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxTQUFTLENBQUMsQ0FBQztZQUM1QyxDQUFDO1lBRUQ7Ozs7O2VBS0c7WUFDSCxTQUFTLGVBQWUsQ0FBQyxRQUFrQixFQUFFLE1BQWM7Z0JBQ3pELElBQUksTUFBTSxHQUFvQixJQUFJLEdBQUcsRUFBRSxFQUNyQyxXQUFXLEdBQWlCLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUV6RCxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUU7b0JBQ3hCLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFDLHNEQUFzRDt3QkFDckYsV0FBVzs0QkFDVCx1R0FBdUc7NkJBQ3RHLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQ2Qsa0JBQWtCLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FDM0M7NkJBQ0EsT0FBTyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7O3dCQUVyQyxNQUFNLENBQUMsR0FBRyxDQUNSLFNBQVMsQ0FBQyxRQUFRLEVBQUUsV0FBVyxDQUFlLENBQy9DLENBQUM7Z0JBQ04sQ0FBQyxDQUFDLENBQUM7Z0JBRUgsT0FBTyxNQUFNLENBQUM7WUFDaEIsQ0FBQztRQUNILENBQUM7UUFFRCxLQUFLLFVBQVUsNEJBQTRCO1lBQ3pDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7Z0JBQUUsT0FBTztZQUVyRSxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUM7Z0JBQUUsT0FBTyxDQUFDLHlGQUF5RjtZQUUvSCxNQUFNLE1BQU0sR0FBbUIsdUJBQXVCLENBQ3BELFdBQVcsRUFDWCxNQUFNLENBQUMsTUFBTSxHQUFHLFlBQVksRUFBRSxTQUFTLEVBQUUsTUFBTSxDQUNoRCxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRUwsTUFBTSxLQUFLLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxVQUFVLEdBQUcsS0FBSyxHQUFHLGtCQUFrQixFQUFFLGNBQWMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1lBRTlHLElBQUksQ0FBQyxLQUFLO2dCQUFFLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyw4Q0FBOEMsQ0FBQyxDQUFDO1lBRS9FLE1BQU0sVUFBVSxHQUFHLE1BQU0sNkJBQTZCLENBQUMsS0FBSyxFQUFFLFlBQVksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7WUFHckcsQ0FBQyxTQUFTLGdCQUFnQjtnQkFDeEIsSUFBSSxDQUFDLFVBQVU7b0JBQUUsT0FBTztnQkFDeEIsTUFBTSxLQUFLLEdBQUcsWUFBWSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDOUMsdURBQXVEO2dCQUN2RCxNQUFNLEtBQUssR0FBRztvQkFDWixFQUFFLEVBQUUsWUFBWTtvQkFDaEIsRUFBRSxFQUFFLFlBQVk7b0JBQ2hCLEVBQUUsRUFBRSxZQUFZO2lCQUNqQixDQUFBO2dCQUVELFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxLQUFLLEVBQUUsRUFBRSxLQUFLLENBQUMsZUFBZSxDQUFDLEVBQUUsS0FBSyxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO2dCQUUzRyxXQUFXLENBQUM7b0JBQ1YsS0FBSyxFQUFFLFVBQVU7b0JBQ2pCLFNBQVMsRUFBRSxLQUFLO29CQUNoQixTQUFTLEVBQUUsV0FBVztvQkFDdEIsaUJBQWlCLEVBQUUsS0FBSztvQkFDeEIsaUJBQWlCLEVBQUUsS0FBSztvQkFDeEIsUUFBUSxFQUFFLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFO2lCQUN2RCxDQUFDLENBQUM7WUFDTCxDQUFDLENBQUMsRUFBRSxDQUFDO1lBRUwsQ0FBQyxTQUFTLHdCQUF3QjtnQkFDaEMsMERBQTBEO2dCQUMxRCxNQUFNLFlBQVksR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLFdBQVcsR0FBRyx1Q0FBdUMsRUFBRSxZQUFZLENBQUMsQ0FBQztnQkFFM0csSUFBSSxDQUFDLFlBQVk7b0JBQUUsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLDJDQUEyQyxDQUFDLENBQUM7Z0JBRW5GLFdBQVcsQ0FBQztvQkFDVixLQUFLLEVBQUUsWUFBWTtvQkFDbkIsU0FBUyxFQUFFLFlBQVksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDO29CQUMzQyxRQUFRLEVBQUUsRUFBRSxhQUFhLEVBQUUsYUFBYSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUU7b0JBQ3RELGlCQUFpQixFQUFFLEtBQUs7b0JBQ3hCLGlCQUFpQixFQUFFLEtBQUs7b0JBQ3hCLFNBQVMsRUFBRSxXQUFXO2lCQUN2QixDQUFDLENBQUM7WUFDTCxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ1AsQ0FBQztRQUFBLENBQUM7SUFFSixDQUFDO0NBQ0YsQ0FBQyxDQUFDO0FBRUgsR0FBRyxDQUFDLGNBQWMsR0FBRyxJQUFJLE1BQU0sQ0FBQztJQUM5QixLQUFLLEVBQUUsb0JBQW9CO0lBQzNCLEtBQUssRUFBRSxRQUFRLENBQUM7UUFDZCxFQUFFLEVBQUUsbUJBQW1CO1FBQ3ZCLEVBQUUsRUFBRSxlQUFlO1FBQ25CLEVBQUUsRUFBRSx3QkFBd0I7S0FDN0IsQ0FBQztJQUNGLFdBQVcsRUFBRSxJQUFJLGdCQUFnQixFQUFFO0lBQ25DLFNBQVMsRUFBRSxDQUFDLEdBQUcsZ0JBQWdCLENBQUM7SUFDaEMsT0FBTyxFQUFFLEdBQWEsRUFBRTtRQUN0QixHQUFHLENBQUMsY0FBYyxDQUFDLGVBQWUsR0FBRyxDQUFDLEdBQUcsU0FBUyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUNsRSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQ1IsS0FBSyxLQUFLLE1BQU0sQ0FBQyxXQUFXLEdBQUcsY0FBYztZQUM3QyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUN4QyxDQUFDO1FBRUYsV0FBVyxFQUFFLENBQUM7UUFDZCxPQUFPLEdBQUcsQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDO0lBQzVDLENBQUM7SUFDRCxnQkFBZ0IsRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsTUFBTSxDQUFDLGFBQWEsQ0FBQztDQUN0RyxDQUFDLENBQUM7QUFFSCxHQUFHLENBQUMsTUFBTSxHQUFHLElBQUksTUFBTSxDQUFDO0lBQ3RCLEtBQUssRUFBRSxXQUFXO0lBQ2xCLEtBQUssRUFBRSxRQUFRLENBQUM7UUFDZCxFQUFFLEVBQUUsZUFBZTtRQUNuQixFQUFFLEVBQUUsc0NBQXNDO1FBQzFDLEVBQUUsRUFBRSxRQUFRO0tBQ2IsQ0FBQztJQUNGLE9BQU8sRUFBRSxDQUFDLElBQVksRUFBRSxNQUFjLEdBQUcsQ0FBQyxNQUFNLEVBQUUsRUFBRTtRQUNsRCxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFDbEIsR0FBRyxDQUFDLGVBQWUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsYUFBYSxHQUFHLElBQUksQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFDRCxnQkFBZ0IsRUFBRSxLQUFLLEVBQUUsSUFBWSxFQUFFLE1BQWMsR0FBRyxDQUFDLE1BQU0sRUFBRSxFQUFFO1FBQ2pFLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUNsQixNQUFNLE1BQU0sR0FBRyxxQkFBcUIsRUFBRSxDQUFDO1FBQ3ZDLEdBQUcsQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQSwrRkFBK0Y7UUFFeEksTUFBTSxLQUFLLEdBQUc7WUFDWixVQUFVLEVBQUUsRUFBRTtZQUNkLE1BQU0sRUFBRSxFQUFFO1lBQ1YsTUFBTSxFQUFFLEVBQUU7WUFDVixLQUFLLEVBQUUsRUFBRTtZQUNULE1BQU0sRUFBRSxTQUFTLENBQUMsTUFBTSxDQUFDLFdBQVcsR0FBRyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsSUFBSSxTQUFTO1lBQzVFLE9BQU8sRUFBRSxFQUFFO1lBQ1gsTUFBTSxFQUFFLFNBQVMsQ0FBQyxNQUFNLENBQUMsVUFBVSxHQUFHLDRCQUE0QixHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLGNBQWMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxTQUFTO1lBQzFKLGFBQWEsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLGFBQWEsR0FBRyxJQUFJLEVBQUUsR0FBRyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDNUcsY0FBYyxFQUFFLFNBQVMsQ0FBQyxNQUFNLENBQUMsY0FBYyxHQUFHLFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSSxTQUFTO1lBQ2pGLFdBQVcsRUFBRSxFQUFFO1NBQ2hCLENBQUM7UUFFRixJQUFJLElBQUksS0FBSyxZQUFZLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDbEMsS0FBSyxDQUFDLFVBQVUsR0FBRyxDQUFDLGFBQWEsRUFBRSxZQUFZLEVBQUUsYUFBYSxFQUFFLFdBQVcsRUFBRSxvQkFBb0IsRUFBRSxjQUFjLEVBQUUsWUFBWSxDQUFDLENBQUM7WUFDakksS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQy9CLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxhQUFhLEVBQUUsWUFBWSxDQUFDLENBQUM7WUFDN0MsS0FBSyxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDOUIsS0FBSyxDQUFDLE9BQU8sR0FBRyxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxZQUFZLEdBQUcscUJBQXFCLENBQUMsSUFBSSxTQUFTLEVBQUUsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLFlBQVksR0FBRyxlQUFlLENBQUMsSUFBSSxTQUFTLEVBQUUsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLFlBQVksR0FBRyxlQUFlLENBQUMsSUFBSSxTQUFTLENBQUMsQ0FBQztRQUMvTixDQUFDO2FBQ0ksSUFBSSxJQUFJLEtBQUssWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ3hDLEtBQUssQ0FBQyxVQUFVLEdBQUcsQ0FBQyxzQkFBc0IsRUFBRSxjQUFjLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBRSxzQkFBc0IsRUFBRSxZQUFZLEVBQUUsYUFBYSxDQUFDLENBQUM7WUFDL0ksS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQ2hDLEtBQUssQ0FBQyxLQUFLLEdBQUcsU0FBUyxFQUFFLENBQUM7WUFDMUIsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLHFCQUFxQixFQUFFLFlBQVksQ0FBQyxDQUFDO1lBQ3JELEtBQUssQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxZQUFZLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLFNBQVMsQ0FBQztZQUMzRSxLQUFLLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxVQUFVLEdBQUcsMENBQTBDLENBQUM7UUFDckYsQ0FBQzthQUNJLElBQUksSUFBSSxLQUFLLFlBQVksQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUM1QyxLQUFLLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztZQUN0QixLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQztZQUN0QyxLQUFLLENBQUMsS0FBSyxHQUFHLFNBQVMsRUFBRSxDQUFDO1lBQzFCLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDO1lBQ3RELEtBQUssQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxZQUFZLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLFNBQVMsQ0FBQztRQUM3RSxDQUFDO1FBQUEsQ0FBQztRQUVGLENBQUMsU0FBUyxrQkFBa0I7WUFDMUIsTUFBTSxhQUFhLEdBQUcsdUJBQXVCLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxNQUFNLENBQUMsVUFBVSxHQUFHLGVBQWUsRUFBRSxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDdkgsSUFBSSxhQUFhLENBQUMsTUFBTSxHQUFHLENBQUM7Z0JBQUUsT0FBTztZQUNyQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUE7UUFDM0IsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLE1BQW1CLEVBQ3JCLFNBQVMsR0FBRyxDQUFDLGVBQWUsRUFBRSxlQUFlLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUd0RSxNQUFNLGtCQUFrQixFQUFFLENBQUM7UUFFM0IsS0FBSyxVQUFVLGtCQUFrQjtZQUUvQixJQUFJLElBQUksS0FBSyxZQUFZLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBRWxDLE1BQU0sTUFBTSxDQUFDLFFBQVEsRUFBRSxTQUFTLEVBQUUsU0FBUyxDQUFDLE1BQU0sQ0FBQyxVQUFVLEdBQUcsV0FBVyxDQUFDLElBQUksU0FBUyxDQUFDLENBQUM7Z0JBRTNGLE1BQU0sTUFBTSxDQUFDLFlBQVksRUFBRSxTQUFTLEVBQUUsU0FBUyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsWUFBWSxHQUFHLElBQUksQ0FBQyxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUEsMEJBQTBCO2dCQUU1SCxNQUFNLE1BQU0sQ0FBQyxXQUFXLEVBQUUsU0FBUyxFQUFFLFNBQVMsQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLFdBQVcsR0FBRyxJQUFJLENBQUMsSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFBLDBCQUEwQjtZQUU1SCxDQUFDO2lCQUNJLElBQUksSUFBSSxLQUFLLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDeEMsTUFBTSxNQUFNLENBQUMsUUFBUSxFQUFFLFNBQVMsRUFBRSxTQUFTLENBQUMsTUFBTSxDQUFDLFVBQVUsR0FBRyxvQkFBb0IsQ0FBQyxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUEsMEJBQTBCO1lBQ2hJLENBQUM7WUFBQSxDQUFDO1lBRUYsTUFBTSxNQUFNLENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQSxzQ0FBc0M7WUFDeEYsTUFBTSxNQUFNLENBQUMsWUFBWSxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUM3QyxNQUFNLE1BQU0sQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUEsZ0NBQWdDO1lBQ3JFLE1BQU0sTUFBTSxDQUFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsa0JBQWtCO1lBQ2pFLE1BQU0sTUFBTSxDQUFDLGVBQWUsRUFBRSxTQUFTLEVBQUUsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQzlELE1BQU0sTUFBTSxDQUFDLHFCQUFxQixFQUFFLFNBQVMsRUFBRSxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDckUsTUFBTSxNQUFNLENBQUMsYUFBYSxFQUFFLFNBQVMsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQSw0QkFBNEI7WUFDakYsTUFBTSxNQUFNLENBQUMsY0FBYyxFQUFFLFNBQVMsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQSxtREFBbUQ7WUFDekcsTUFBTSxNQUFNLENBQUMsYUFBYSxFQUFFLFNBQVMsRUFBRSxTQUFTLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLFNBQVMsQ0FBQyxDQUFDO1lBR2xGLEtBQUssVUFBVSxNQUFNLENBQUMsS0FBYSxFQUFFLElBQWMsRUFBRSxPQUFvQjtnQkFDdkUsTUFBTSxHQUFHLHVCQUF1QixDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLE1BQU0sR0FBRyxLQUFLLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBRXZGLElBQUksQ0FBQyxNQUFNO29CQUFFLE9BQU87Z0JBRXBCLElBQUksT0FBTztvQkFDVCxPQUFPLGFBQWEsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLFlBQVksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUV0RSxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsSUFBSTtvQkFBRSxPQUFPO2dCQUU1QixJQUFJLEtBQUssS0FBSyxZQUFZLEVBQUUsQ0FBQztvQkFDM0IsT0FBTyxHQUFHLENBQUM7NEJBQ1QsbUJBQW1CLEdBQUcsQ0FBQyxLQUFLLEVBQUU7NEJBQzlCLEVBQUU7NEJBQ0YsWUFBWTs0QkFDWixFQUFFOzRCQUNGLFNBQVM7eUJBQ1YsQ0FBQyxDQUFDO29CQUNILGFBQWEsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLGdCQUFnQixDQUFDLENBQUM7Z0JBRW5ELENBQUM7Z0JBRUQsTUFBTSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFDLEdBQUcsRUFBQyxFQUFFO29CQUNyQyxJQUFJLElBQUksS0FBSyxZQUFZLENBQUMsWUFBWTt3QkFDcEMsT0FBTyxHQUFHLE1BQU0sNkJBQTZCLENBQUM7NEJBQzVDLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsOENBQThDLEVBQUUsY0FBYyxDQUFDLGtCQUFrQixDQUFDLElBQUksU0FBUzs0QkFDOUgsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsR0FBRywyQ0FBMkMsRUFBRSxjQUFjLENBQUMsa0JBQWtCLENBQUMsSUFBSSxTQUFTO3lCQUFDLEVBQUUsU0FBUyxDQUFDLENBQUM7O3dCQUV4SSxPQUFPLEdBQUcsTUFBTSw2QkFBNkIsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDO29CQUUzRixJQUFJLENBQUMsT0FBTzt3QkFBRSxPQUFPO29CQUVyQixJQUFJLEtBQUssS0FBSyxRQUFRLEVBQUUsQ0FBQzt3QkFDdkIsYUFBYSxDQUFDLG9CQUFvQixDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsV0FBVyxFQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxNQUFNLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQyxDQUFBLGdEQUFnRDtvQkFDdEosQ0FBQztvQkFFRCxhQUFhLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFBLG1DQUFtQztvQkFFN0UsSUFBSSxLQUFLLEtBQUssWUFBWSxJQUFJLElBQUksS0FBSyxZQUFZLENBQUMsWUFBWSxFQUFFLENBQUM7d0JBQ2pFLGFBQWEsQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsTUFBTSxFQUFFLGdCQUFnQixDQUFDLENBQUMsQ0FBQSxrR0FBa0c7b0JBQzNNLENBQUM7eUJBQU0sSUFBSSxLQUFLLEtBQUssUUFBUSxFQUFFLENBQUM7d0JBQzlCLGFBQWEsQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsTUFBTSxFQUFFLGdCQUFnQixDQUFDLENBQUMsQ0FBQSw4Q0FBOEM7b0JBQ2hKLENBQUM7eUJBQU0sSUFBSSxLQUFLLEtBQUssT0FBTyxFQUFFLENBQUM7d0JBQzdCLE9BQU8sR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLFdBQVcsR0FBRyxVQUFVLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxTQUFTLENBQUM7d0JBQ3BGLFlBQVksQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLENBQUM7d0JBQ2xDLGFBQWEsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLFlBQVksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQTtvQkFDbEUsQ0FBQztnQkFFSCxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUVKLFNBQVMsYUFBYSxDQUFDLE9BQW1CLEVBQUUsTUFBbUIsRUFBRSxLQUFlO29CQUM5RSxJQUFJLENBQUMsT0FBTzt3QkFBRSxPQUFPO29CQUNyQiwyQkFBMkIsQ0FBQzt3QkFDMUIsTUFBTSxFQUFFLENBQUMsT0FBTyxDQUFDO3dCQUNqQixTQUFTLEVBQUUsS0FBSzt3QkFDaEIsUUFBUSxFQUFFLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxhQUFhLEVBQUUsYUFBYSxFQUFFO3dCQUN0RCxTQUFTLEVBQUUsR0FBRyxDQUFDLFdBQVc7cUJBQzNCLENBQUMsQ0FBQztnQkFDTCxDQUFDO2dCQUNELFNBQVMsb0JBQW9CLENBQUMsTUFBYyxFQUFFLElBQTZELEVBQUUsR0FBVztvQkFDdEgsT0FBTyxDQUFDOzRCQUNOLEtBQUssR0FBRyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRzs0QkFDaEMsR0FBRyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO3lCQUNsRCxDQUFDLENBQUM7Z0JBQ0wsQ0FBQztnQkFDRCxTQUFTLFlBQVksQ0FBQyxPQUFtQixFQUFFLFFBQWdCO29CQUN6RCxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLEtBQUssR0FBRyxRQUFRLEVBQUUsQ0FBQTtnQkFDOUUsQ0FBQztZQUNILENBQUM7UUFDSCxDQUFDO1FBQUEsQ0FBQztRQUVGLE1BQU0sK0JBQStCLENBQUM7WUFDcEMsTUFBTSxFQUFFLElBQUk7WUFDWixNQUFNLEVBQUUsTUFBTSxDQUFDLFVBQVU7WUFDekIsU0FBUyxFQUFFLEdBQUcsQ0FBQyxXQUFXO1lBQzFCLGNBQWMsRUFBRSxLQUFLO1lBQ3JCLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ25FLENBQUMsQ0FBQztRQUVILFNBQVMsU0FBUyxDQUFDLE1BQWMsRUFBRSxHQUFXO1lBQzVDLEdBQUcsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sSUFBSSxPQUFPLENBQUMsQ0FBQyxDQUFDLE1BQU0sSUFBSSxRQUFRLENBQUM7WUFDL0QsT0FBTyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssR0FBRyxVQUFVLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFBO1FBQy9FLENBQUM7UUFFRCxTQUFTLFNBQVMsQ0FBQyxVQUFtQixLQUFLO1lBQ3pDLE1BQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxZQUFZLEdBQUcsT0FBTyxDQUFBO1lBQzNDLElBQUksT0FBTztnQkFDVCxPQUFPLFNBQVMsQ0FBQyxHQUFHLEtBQUsscUJBQXFCLEVBQUUsV0FBVyxDQUFDLElBQUksU0FBUyxDQUFDOztnQkFDdkUsT0FBTyxDQUFDLEdBQUcsU0FBUyxDQUFDLEtBQUssRUFBRSxXQUFXLENBQUMsSUFBSSxTQUFTLEVBQUUsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLFlBQVksR0FBRyx3QkFBd0IsQ0FBQyxJQUFJLFNBQVMsQ0FBQyxDQUFBO1FBRXhJLENBQUM7SUFDSCxDQUFDO0NBQ0YsQ0FBQyxDQUFDO0FBRUgsR0FBRyxDQUFDLGFBQWEsR0FBRyxJQUFJLE1BQU0sQ0FBQztJQUM3QixLQUFLLEVBQUUsa0JBQWtCO0lBQ3pCLEtBQUssRUFBRSxRQUFRLENBQUM7UUFDZCxFQUFFLEVBQUUsa0JBQWtCO1FBQ3RCLEVBQUUsRUFBRSw0QkFBNEI7UUFDaEMsRUFBRSxFQUFFLHNCQUFzQjtLQUMzQixDQUFDO0lBQ0YsT0FBTyxFQUFFLEdBQUcsRUFBRTtRQUNaLE1BQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxZQUFZLEdBQUcsT0FBTyxDQUFDO1FBQzVDLE1BQU0sUUFBUSxHQUFHO1lBQ2Y7Z0JBQ0UsVUFBVSxFQUFFLG9CQUFvQjtnQkFDaEMsTUFBTSxFQUFFLHVCQUF1QjtnQkFDL0IsS0FBSyxFQUFFLENBQUMsR0FBRyxLQUFLLDZCQUE2QixDQUFDLEVBQUMsOEdBQThHO2dCQUM3SixNQUFNLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSxhQUFhLENBQUM7Z0JBQzVDLGFBQWEsRUFBRSxNQUFNLENBQUMsYUFBYSxHQUFHLHVCQUF1QjtnQkFDN0QsT0FBTyxFQUFFLENBQUMsTUFBTSxDQUFDLFlBQVksR0FBRyx1QkFBdUIsQ0FBQztnQkFDeEQsUUFBUSxFQUFFO29CQUNSLE1BQU0sQ0FBQyxXQUFXLEdBQUcsWUFBWTtvQkFDakMsTUFBTSxDQUFDLFdBQVcsR0FBRyxpQkFBaUI7b0JBQ3RDLE1BQU0sQ0FBQyxVQUFVLEdBQUcsZ0JBQWdCLEdBQUcsTUFBTTtvQkFDN0MsTUFBTSxDQUFDLFVBQVUsR0FBRyxjQUFjO2lCQUNuQzthQUNGO1lBQ0Q7Z0JBQ0UsVUFBVSxFQUFFLGFBQWE7Z0JBQ3pCLE1BQU0sRUFBRSx1QkFBdUI7Z0JBQy9CLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQztnQkFDZCxNQUFNLEVBQUUsQ0FBQyxlQUFlLEVBQUUsY0FBYyxDQUFDO2dCQUN6QyxhQUFhLEVBQUUsTUFBTSxDQUFDLGFBQWEsR0FBRyxNQUFNLEdBQUcsa0JBQWtCO2dCQUNqRSxPQUFPLEVBQUUsQ0FBQyxNQUFNLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQztnQkFDdkMsUUFBUSxFQUFFO29CQUNSLE1BQU0sQ0FBQyxVQUFVLEdBQUcsaUJBQWlCO29CQUNyQyxNQUFNLENBQUMsY0FBYyxHQUFHLGdCQUFnQjtvQkFDeEMsTUFBTSxDQUFDLFdBQVcsR0FBRyxpQkFBaUI7b0JBQ3RDLE1BQU0sQ0FBQyxVQUFVLEdBQUcsbUJBQW1CO2lCQUN4QzthQUNGO1lBQ0Q7Z0JBQ0UsVUFBVSxFQUFFLGFBQWE7Z0JBQ3pCLE1BQU0sRUFBRSxjQUFjO2dCQUN0QixLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUM7Z0JBQ2QsTUFBTSxFQUFFLENBQUMsbUJBQW1CLEVBQUUsWUFBWSxDQUFDO2dCQUMzQyxhQUFhLEVBQUUsTUFBTSxDQUFDLGFBQWEsR0FBRyxNQUFNLEdBQUcsa0JBQWtCO2dCQUNqRSxPQUFPLEVBQUUsQ0FBQyxNQUFNLENBQUMsWUFBWSxHQUFHLE9BQU8sQ0FBQztnQkFDeEMsUUFBUSxFQUFFO29CQUNSLE1BQU0sQ0FBQyxZQUFZLEdBQUcsY0FBYyxFQUFDLDZCQUE2QjtvQkFDbEUsTUFBTSxDQUFDLFlBQVksR0FBRyxZQUFZO29CQUNsQyxNQUFNLENBQUMsWUFBWSxHQUFHLHdCQUF3QjtvQkFDOUMsaUJBQWlCLENBQUMsVUFBVTtpQkFDN0I7YUFDRjtTQUVGLENBQUM7UUFFRixNQUFNLFNBQVMsR0FBRztZQUNoQixFQUFFLEVBQUUsZ0JBQWdCO1lBQ3BCLEVBQUUsRUFBRSxtQkFBbUI7WUFDdkIsRUFBRSxFQUFFLG1CQUFtQjtTQUN4QixDQUFDO1FBRUYsTUFBTSxXQUFXLEdBQUc7WUFDbEI7Z0JBQ0UsRUFBRSxFQUFFLFFBQVE7Z0JBQ1osRUFBRSxFQUFFLFVBQVU7Z0JBQ2QsRUFBRSxFQUFFLE9BQU87YUFDWjtZQUNEO2dCQUNFLEVBQUUsRUFBRSxTQUFTO2dCQUNiLEVBQUUsRUFBRSxVQUFVO2dCQUNkLEVBQUUsRUFBRSxRQUFRO2FBQ2I7WUFDRDtnQkFDRSxFQUFFLEVBQUUsU0FBUztnQkFDYixFQUFFLEVBQUUsV0FBVztnQkFDZixFQUFFLEVBQUUsT0FBTzthQUNaO1NBQ0YsQ0FBQztRQUVGLE1BQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDaEMsSUFBSSxDQUFDLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM1QixPQUFPLElBQUksTUFBTSxDQUFDO2dCQUNoQixLQUFLLEVBQUUsR0FBRyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFBRTtnQkFDN0MsS0FBSyxFQUFFLGNBQWMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hCLFdBQVcsRUFBRSxJQUFJLGdCQUFnQixFQUFFO2dCQUNuQyxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztnQkFDNUIsZ0JBQWdCLEVBQUUsR0FBRyxFQUFFLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDO2FBQy9DLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO1FBRUgsR0FBRyxDQUFDLGFBQWEsQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBRXRDLFNBQVMsY0FBYyxDQUFDLENBQVM7WUFDL0IsTUFBTSxLQUFLLEdBQUcsRUFBRSxHQUFHLFNBQVMsRUFBRSxDQUFDO1lBQy9CLEtBQUssQ0FBQyxlQUFlLENBQUMsR0FBRyxLQUFLLENBQUMsZUFBZSxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztZQUNoRyxPQUFPLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUN4QixDQUFDO1FBRUQsS0FBSyxVQUFVLFVBQVUsQ0FBQyxDQUFTLEVBQUUsWUFBcUIsS0FBSztZQUM3RCxJQUFJLEdBQUcsR0FBRyxHQUFHLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4QyxJQUFJLE1BQU0sR0FBRyxNQUFNLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNuQyxJQUFJLFNBQVM7Z0JBQUUsT0FBTyxNQUFNLENBQUM7WUFFN0IsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDckIsV0FBVyxDQUFDO29CQUNWLFNBQVMsRUFBRSxHQUFHLENBQUMsV0FBVztvQkFDMUIsaUJBQWlCLEVBQUUsSUFBSTtvQkFDdkIsaUJBQWlCLEVBQUUsSUFBSTtvQkFDdkIsS0FBSyxFQUFFLEtBQUs7b0JBQ1osU0FBUyxFQUFFLFlBQVksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQ3RDLENBQUMsQ0FBQztZQUVMLENBQUMsQ0FBQyxDQUFDO1lBRUgsS0FBSyxVQUFVLFlBQVksQ0FBQyxLQUFhO2dCQUN2QyxJQUFJLE9BQU8sR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQzNCLEtBQUssR0FBRyxDQUFDLEdBQUcsU0FBUyxFQUFFLENBQUMsYUFBYSxDQUFDLENBQUM7Z0JBRXpDLENBQUMsU0FBUyxpQkFBaUI7b0JBQ3pCLElBQUksS0FBSyxLQUFLLENBQUMsRUFBRSxDQUFDO3dCQUNoQixLQUFLLENBQUMsT0FBTyxDQUNYLE1BQU0sQ0FBQyxXQUFXLEdBQUcsVUFBVSxFQUMvQixNQUFNLENBQUMsUUFBUSxHQUFHLE1BQU0sRUFDeEIsTUFBTSxDQUFDLFFBQVEsR0FBRyxxQkFBcUIsRUFDdkMsTUFBTSxDQUFDLFFBQVEsR0FBRyw0QkFBNEIsRUFDOUMsTUFBTSxDQUFDLFFBQVEsR0FBRyxVQUFVLEdBQUcsTUFBTSxFQUNyQyxNQUFNLENBQUMsUUFBUSxHQUFHLHFFQUFxRSxFQUN2RixNQUFNLENBQUMsUUFBUSxHQUFHLG1EQUFtRCxDQUN0RSxDQUFDO29CQUNKLENBQUM7eUJBQ0ksSUFBSSxLQUFLLEtBQUssQ0FBQyxFQUFFLENBQUM7d0JBQ3JCLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFBRSxNQUFNLENBQUMsS0FBSyxHQUFHLG1EQUFtRCxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLGVBQWU7d0JBRXZKLElBQUksU0FBUyxHQUNYOzRCQUNFLE1BQU0sQ0FBQyxjQUFjLEdBQUcscUJBQXFCOzRCQUM3QyxNQUFNLENBQUMsV0FBVyxHQUFHLE9BQU8sRUFBQyxtSUFBbUk7NEJBQ2hLLE1BQU0sQ0FBQyxZQUFZLEdBQUcsbUJBQW1COzRCQUN6QyxNQUFNLENBQUMsWUFBWSxHQUFHLHlCQUF5Qjs0QkFDL0MsTUFBTSxDQUFDLFdBQVcsR0FBRyxpQkFBaUI7NEJBQ3RDLE1BQU0sQ0FBQyxVQUFVLEdBQUcsYUFBYTs0QkFDakMsTUFBTSxDQUFDLFVBQVUsR0FBRyxvQkFBb0I7NEJBQ3hDLE1BQU0sQ0FBQyxVQUFVLEdBQUcsVUFBVTs0QkFDOUIsTUFBTSxDQUFDLFVBQVUsR0FBRyxRQUFROzRCQUM1QixNQUFNLENBQUMsVUFBVSxHQUFHLE1BQU0sRUFBRSxVQUFVOzRCQUN0QyxNQUFNLENBQUMsVUFBVSxHQUFHLHNCQUFzQjs0QkFDMUMsTUFBTSxDQUFDLFdBQVcsR0FBRyxrQkFBa0I7NEJBQ3ZDLE1BQU0sQ0FBQyxZQUFZLEdBQUcsT0FBTzs0QkFDN0IsTUFBTSxDQUFDLGFBQWEsR0FBRyxjQUFjO3lCQUN0QyxDQUFDO3dCQUVKLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLFlBQVksQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLFNBQVMsQ0FBQyxDQUFDO3dCQUUzRSxJQUFJLEdBQUcsR0FBYTs0QkFDbEIsTUFBTSxDQUFDLFlBQVksR0FBRyx5QkFBeUI7NEJBQy9DLE1BQU0sQ0FBQyxZQUFZLEdBQUcsaUJBQWlCOzRCQUN2QyxNQUFNLENBQUMsWUFBWSxHQUFHLHFCQUFxQjs0QkFDM0MsTUFBTSxDQUFDLFlBQVksR0FBRyxtQkFBbUI7NEJBQ3pDLE1BQU0sQ0FBQyxhQUFhLEdBQUcsWUFBWTt5QkFDcEMsQ0FBQzt3QkFFRixLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7b0JBQ3JCLENBQUM7b0JBQUEsQ0FBQztnQkFFSixDQUFDLENBQUMsRUFBRSxDQUFDO2dCQUVMLElBQUksUUFBUSxHQUFHLE1BQU0sT0FBTyxDQUFDLEdBQUcsQ0FDOUIsS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLEVBQUU7b0JBQ3RCLElBQUksS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO3dCQUNqQyxPQUFPLE1BQU0sWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFBOzt3QkFDN0IsT0FBTyxNQUFNLFlBQVksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFBO2dCQUNwRixDQUFDLENBQUMsQ0FDSCxDQUFDO2dCQUVGLE9BQU8sUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUd2QyxLQUFLLFVBQVUsWUFBWSxDQUFDLEtBQWEsRUFBRSxjQUF1QixLQUFLO29CQUNyRSxJQUFJLFdBQVcsRUFBRSxDQUFDO3dCQUNoQixPQUFPLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxTQUFTLENBQUM7b0JBQ3ZDLENBQUM7b0JBQUEsQ0FBQztvQkFFRixJQUFJLElBQUksR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUM7b0JBQzVDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsZUFBZSxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQzt3QkFBRSxPQUFPLENBQUEsOEdBQThHO29CQUV2TCxJQUFJLElBQUksS0FBSyxRQUFRO3dCQUNuQixPQUFPLE1BQU0sZ0JBQWdCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQzt5QkFDekQsSUFBSSxJQUFJLEtBQUssWUFBWTt3QkFDNUIsT0FBTyxNQUFNLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7O3dCQUM3RCxPQUFPLFdBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztvQkFFdkMsU0FBUyxXQUFXLENBQUMsSUFBYzt3QkFDakMsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNuRCxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQSxvSkFBb0o7d0JBQ3pMLE9BQU8sS0FBSyxDQUFBO29CQUNkLENBQUM7Z0JBRUgsQ0FBQztnQkFFRCxLQUFLLFVBQVUsZ0JBQWdCLENBQUMsSUFBWSxFQUFFLE1BQWM7b0JBQzFELE9BQU8sTUFBTSw2QkFBNkIsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLGVBQWUsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsQ0FBQyxFQUFFLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFBO2dCQUM1SCxDQUFDO1lBRUgsQ0FBQztRQUVILENBQUM7UUFFRCxLQUFLLFVBQVUsbUJBQW1CLENBQUMsQ0FBUztZQUMxQyxJQUFJLEdBQUcsR0FBRyxHQUFHLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4QyxHQUFHLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUEsdUdBQXVHO1lBQ2hKLElBQUksQ0FBQyxLQUFLLENBQUM7Z0JBQ1QsbUJBQW1CLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO2lCQUNsQyxJQUFJLENBQUMsS0FBSyxDQUFDO2dCQUNkLEdBQUcsQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQSwrREFBK0Q7WUFDMUcsTUFBTSxZQUFZLEVBQUUsQ0FBQztZQUNyQixLQUFLLFVBQVUsWUFBWTtnQkFDekIsSUFBSSxNQUFNLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztnQkFDaEMsTUFBTSxpQkFBaUIsQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzVDLE1BQU0saUJBQWlCLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM3QyxNQUFNLGlCQUFpQixDQUFDLGVBQWUsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxFQUFFLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFFMUYsS0FBSyxVQUFVLGlCQUFpQixDQUFDLEtBQWEsRUFBRSxHQUFXLEVBQUUsTUFBZTtvQkFDMUUsSUFBSSxNQUFNLEdBQW1CLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFFL0MsSUFBSSxDQUFDLE1BQU07d0JBQUUsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLGlDQUFpQyxFQUFFLEtBQUssQ0FBQyxDQUFDO29CQUUxRSxJQUFJLEtBQWlCLEVBQUUsS0FBZSxDQUFDO29CQUV2QyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxZQUFZLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO29CQUVoRixJQUFJLE1BQU07d0JBQ1IsS0FBSyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxTQUFTLENBQUM7O3dCQUV0QyxLQUFLLEdBQUcsTUFBTSw2QkFBNkIsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO29CQUVsRixJQUFJLENBQUMsS0FBSzt3QkFBRSxPQUFPO29CQUduQiwyQkFBMkIsQ0FBQzt3QkFDMUIsTUFBTSxFQUFFLENBQUMsS0FBSyxDQUFDO3dCQUNmLFFBQVEsRUFBRTs0QkFDUixFQUFFLEVBQUUsTUFBTTs0QkFDVixhQUFhLEVBQUUsYUFBYTt5QkFDN0I7d0JBQ0QsU0FBUyxFQUFFLEdBQUcsQ0FBQyxXQUFXO3dCQUMxQixTQUFTLEVBQUUsS0FBSztxQkFDakIsQ0FBQyxDQUFDO29CQUdILFNBQVMsVUFBVSxDQUFDLFFBQWdCO3dCQUNsQyxPQUFPLHVCQUF1QixDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLE1BQU0sR0FBRyxRQUFRLEdBQUcsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDM0csQ0FBQztnQkFFSCxDQUFDO1lBQ0gsQ0FBQztZQUFBLENBQUM7WUFDRixXQUFXLEVBQUUsQ0FBQztRQUVoQixDQUFDO0lBRUgsQ0FBQztDQUNGLENBQUMsQ0FBQztBQUVILEdBQUcsQ0FBQyxhQUFhLEdBQUcsSUFBSSxNQUFNLENBQUM7SUFDN0IsS0FBSyxFQUFFLGtCQUFrQjtJQUN6QixLQUFLLEVBQUUsUUFBUSxDQUFDO1FBQ2QsRUFBRSxFQUFFLHVCQUF1QjtRQUMzQixFQUFFLEVBQUUsd0JBQXdCO1FBQzVCLEVBQUUsRUFBRSwyQkFBMkI7S0FDaEMsQ0FBQztJQUNGLE9BQU8sRUFBRSxDQUFDLGlCQUEwQixLQUFLLEVBQUUsRUFBRTtRQUMzQyx5SUFBeUk7UUFDekksR0FBRyxDQUFDLGFBQWEsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUN0RSxrRkFBa0Y7UUFFbEYsSUFBSSxrQkFBa0IsS0FBSyxZQUFZLENBQUMsVUFBVTtZQUNoRCxHQUFHLENBQUMsYUFBYSxDQUFDLFFBQVEsR0FBRyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFBO1FBRXRFLHVIQUF1SDtRQUN2SCxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztZQUN6RCxPQUFPLEtBQUssQ0FBQztZQUFFLEdBQUcsQ0FBQyxhQUFhLENBQUMsUUFBUSxHQUFHLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBRW5FLElBQUksY0FBYztZQUFFLE9BQU8sR0FBRyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUM7SUFDeEQsQ0FBQztDQUNGLENBQUMsQ0FBQztBQUVILEdBQUcsQ0FBQyxXQUFXLEdBQUcsSUFBSSxNQUFNLENBQUM7SUFDM0IsS0FBSyxFQUFFLGdCQUFnQjtJQUN2QixLQUFLLEVBQUUsUUFBUSxDQUFDLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsYUFBYSxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsQ0FBQztJQUNwRSxXQUFXLEVBQUUsSUFBSSxnQkFBZ0IsRUFBRTtJQUNuQyxTQUFTLEVBQUUsQ0FBQyxHQUFHLGdCQUFnQixDQUFDO0lBQ2hDLE9BQU8sRUFBRSxHQUFhLEVBQUU7UUFDdEIsTUFBTSxJQUFJLEdBQUcsU0FBUyxFQUFFLENBQUMsSUFBSSxDQUFDO1FBQzlCLDRDQUE0QztRQUM1QyxHQUFHLENBQUMsV0FBVyxDQUFDLGVBQWUsR0FBRztZQUNoQyxHQUFHLElBQUksQ0FBQyxPQUFPO1lBQ2YsR0FBRyxJQUFJLENBQUMsZ0JBQWdCO1lBQ3hCLEdBQUcsSUFBSSxDQUFDLFFBQVE7WUFDaEIsR0FBRyxJQUFJLENBQUMsU0FBUztTQUNsQixDQUFDO1FBRUYsOEVBQThFO1FBQzlFLFdBQVcsRUFBRSxDQUFDO1FBQ2QsT0FBTyxHQUFHLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQztJQUN6QyxDQUFDO0lBQ0QsZ0JBQWdCLEVBQUUsQ0FBQyxNQUFjLEdBQUcsQ0FBQyxXQUFXLEVBQUUsU0FBaUIsTUFBTSxDQUFDLFdBQVcsRUFBRSxFQUFFO1FBQ3ZGLElBQUksY0FBYyxHQUFHLEdBQUcsQ0FBQyxXQUFXLENBQUM7UUFFckMsQ0FBQyxTQUFTLDZCQUE2QjtZQUNyQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDO2dCQUFFLE9BQU87WUFFOUQsTUFBTSxlQUFlLEdBQUcsU0FBUyxDQUMvQixNQUFNLEdBQUcsaUJBQWlCLENBQUMsSUFBSSxTQUFTLENBQUM7WUFFM0MsSUFBSSxDQUFDLGVBQWU7Z0JBQ2xCLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO1lBRW5ELE1BQU0sUUFBUSxHQUFHLElBQUksTUFBTSxDQUFDO2dCQUMxQixLQUFLLEVBQUUsZ0JBQWdCO2dCQUN2QixLQUFLLEVBQUUsUUFBUSxDQUFDO29CQUNkLEVBQUUsRUFBRSxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUN2RCxFQUFFLEVBQUUsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztpQkFDeEQsQ0FBQztnQkFDRixRQUFRLEVBQUUsR0FBRyxDQUFDLFlBQVk7Z0JBQzFCLFdBQVcsRUFBRSxJQUFJLGdCQUFnQixFQUFFO2dCQUNuQyxPQUFPLEVBQUUsR0FBRyxFQUFFO29CQUNaLFdBQVcsQ0FBQzt3QkFDVixLQUFLLEVBQUUsZUFBZTt3QkFDdEIsU0FBUyxFQUFFLEdBQUcsQ0FBQyxTQUFTO3dCQUN4QixRQUFRLEVBQUUsUUFBUSxDQUFDLFdBQVc7d0JBQzlCLFNBQVMsRUFBRSxRQUFRLENBQUMsV0FBVzt3QkFDL0IsaUJBQWlCLEVBQUUsS0FBSzt3QkFDeEIsaUJBQWlCLEVBQUUsS0FBSztxQkFDekIsQ0FBQyxDQUFDO2dCQUVMLENBQUM7YUFDRixDQUFDLENBQUM7WUFFSCxNQUFNLE1BQU0sR0FBRyx1QkFBdUIsQ0FDcEMsY0FBYyxFQUNkLE1BQU0sR0FBRyxnQkFBZ0IsQ0FDMUIsQ0FBQyxDQUFDLENBQUMsRUFBRSxrQkFBa0IsQ0FBQztZQUV6QixNQUFNLE9BQU8sR0FBRyxtQkFBbUIsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLE1BQU0sRUFBRSxhQUFhLENBQUMsQ0FBQztZQUV2RSxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUU7Z0JBQ2xELHVCQUF1QixDQUFDLFlBQVksRUFBRSxNQUFNLEdBQUcsZ0JBQWdCLEVBQUUsU0FBUyxFQUFFLE9BQU8sQ0FBQztxQkFDakYsT0FBTyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUN4RCxDQUFDLENBQUMsQ0FBQyxDQUFBLHNHQUFzRztRQUMzRyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBRUwsQ0FBQyxTQUFTLHFCQUFxQjtZQUM3QiwyRUFBMkU7WUFDM0UsSUFBSSxjQUFjLEdBQWE7Z0JBQzdCLEdBQUcsQ0FBQyxXQUFXO2dCQUNmLEdBQUcsQ0FBQyxhQUFhO2dCQUNqQixHQUFHLENBQUMsV0FBVztnQkFDZixHQUFHLENBQUMsVUFBVTthQUNmLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQSxpRkFBaUY7WUFFbkksSUFBSSxNQUF3QixDQUFDO1lBRTdCLHFGQUFxRjtZQUNyRixNQUFNLEdBQUcsdUJBQXVCLENBQzlCLGNBQWMsRUFDZCxNQUFNLEdBQUcsZ0JBQWdCLEVBQ3pCLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUNuQixDQUFDO1lBQ0YscUJBQXFCLENBQ25CLENBQUMsR0FBRyxjQUFjLENBQUMsRUFDbkI7Z0JBQ0UsYUFBYSxFQUFFLFVBQVU7Z0JBQ3pCLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO2FBQ2QsRUFDRCw2QkFBNkIsQ0FDOUIsQ0FBQztZQUVGLDRIQUE0SDtZQUM1SCxNQUFNLEdBQUcsdUJBQXVCLENBQzlCLGNBQWMsRUFDZCxNQUFNLENBQUMsVUFBVSxHQUFHLGtCQUFrQixDQUN2QyxDQUFDO1lBRUYscUJBQXFCLENBQ25CLENBQUMsR0FBRyxjQUFjLENBQUMsRUFDbkI7Z0JBQ0UsYUFBYSxFQUFFLFVBQVU7Z0JBQ3pCLEVBQUUsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7YUFDOUIsRUFDRCx1QkFBdUIsQ0FDeEIsQ0FBQztZQUVGLCtEQUErRDtZQUMvRCxNQUFNLEdBQUcsdUJBQXVCLENBQzlCLGNBQWMsRUFDZCxNQUFNLEdBQUcsT0FBTyxDQUNqQixDQUFDO1lBRUYscUJBQXFCLENBQ25CLENBQUMsR0FBRyxjQUFjLENBQUMsRUFDbkI7Z0JBQ0UsYUFBYSxFQUFFLFVBQVU7Z0JBQ3pCLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsc0JBQXFDO2FBQ3BELEVBQ0Qsb0JBQW9CLENBQ3JCLENBQUM7WUFFRix1RkFBdUY7WUFDdkYsTUFBTSxHQUFHLHVCQUF1QixDQUM5QixjQUFjLEVBQ2QsTUFBTSxDQUFDLFVBQVU7Z0JBQ2pCLDBCQUEwQixDQUMzQixDQUFDO1lBQ0YscUJBQXFCLENBQ25CLENBQUMsR0FBRyxjQUFjLENBQUMsRUFDbkI7Z0JBQ0UsYUFBYSxFQUFFLFVBQVU7Z0JBQ3pCLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO2FBQ2QsRUFDRCx1QkFBdUIsQ0FDeEIsQ0FBQztZQUVGLG1GQUFtRjtZQUNuRixNQUFNLEdBQUcsdUJBQXVCLENBQzlCLGNBQWMsRUFDZCxzQkFBc0IsRUFDdEIsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQ25CLENBQUM7WUFDRixxQkFBcUIsQ0FDbkIsQ0FBQyxHQUFHLGNBQWMsQ0FBQyxFQUNuQjtnQkFDRSxhQUFhLEVBQUUsYUFBYTtnQkFDNUIsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7YUFDZCxFQUNELG1DQUFtQyxDQUNwQyxDQUFDO1lBRUY7Ozs7OztjQU1FO1lBQ0YsS0FBSyxVQUFVLHFCQUFxQixDQUNsQyxJQUFjLEVBQ2QsUUFBNEQsRUFDNUQsZUFBdUI7Z0JBRXZCLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRTtvQkFBRSxPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsNEJBQTRCLENBQUMsQ0FBQztnQkFFbkUsSUFBSSxVQUFVLEdBQWEsRUFBRSxDQUFDO2dCQUM5QixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7b0JBQ2YsK0pBQStKO29CQUMvSixNQUFNLE1BQU0sR0FBVyxJQUFJLE1BQU0sQ0FBQzt3QkFDaEMsS0FBSyxFQUFFLFFBQVEsR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFO3dCQUMzRSxLQUFLLEVBQUUsR0FBRyxDQUFDLEtBQUs7d0JBQ2hCLFFBQVEsRUFBRSxHQUFHLENBQUMsWUFBWTt3QkFDMUIsT0FBTyxFQUFFLEtBQUssSUFBSSxFQUFFOzRCQUNsQixNQUFNLDRCQUE0QixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsaUdBQWlHOzRCQUMxSSxtRkFBbUY7NEJBQ25GLElBQUksWUFBWSxDQUFDLGFBQWEsQ0FBQyxHQUFHLEdBQUcsZUFBZSxDQUFDO2dDQUNuRCxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsQ0FBQzt3QkFDdEMsQ0FBQztxQkFDRixDQUFDLENBQUM7b0JBQ0gsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDMUIsQ0FBQyxDQUFDLENBQUM7Z0JBQ0gsd0JBQXdCLENBQUMsVUFBVSxFQUFFLFFBQVEsRUFBRSxlQUFlLENBQUMsQ0FBQztZQUNsRSxDQUFDO1FBQ0gsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUVMLENBQUMsU0FBUyx5QkFBeUI7WUFDakMsK0VBQStFO1lBQy9FLElBQUksWUFBWSxHQUFXLE1BQU0sQ0FBQyxVQUFVLEdBQUcsaUJBQWlCLENBQUM7WUFFakUsSUFBSSxXQUFXLEdBQUcsTUFBTSxDQUFDLFVBQVUsR0FBRyxlQUFlLENBQUM7WUFFdEQsYUFBYSxDQUNYLFlBQVksRUFDWix1QkFBdUIsQ0FBQyxjQUFjLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQ3hELENBQUM7WUFDRixXQUFXLEdBQUcsTUFBTSxDQUFDLFVBQVUsR0FBRyxtQkFBbUIsQ0FBQTtZQUNyRCx3QkFBd0I7WUFDeEIsYUFBYSxDQUNYLFlBQVksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxFQUNyQyx1QkFBdUIsQ0FBQyxjQUFjLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQ3ZELElBQUksQ0FDTCxDQUFDO1lBQ0YsU0FBUyxhQUFhLENBQ3BCLFlBQW9CLEVBQ3BCLE1BQW1CLEVBQ25CLGFBQXNCLEtBQUs7Z0JBRTNCLElBQUksQ0FBQyxNQUFNO29CQUFFLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO2dCQUV2RCxJQUFJLE9BQU8sR0FBZSxlQUFlLENBQUMsSUFBSSxDQUM1QyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQ04sS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxZQUFZLENBQUM7b0JBQ3BDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQzNDLENBQUM7Z0JBRUYsSUFBSSxDQUFDLE9BQU87b0JBQ1YsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLG1DQUFtQyxFQUFFLFlBQVksQ0FBQyxDQUFDO2dCQUN4RSxNQUFNLEtBQUssR0FBRyxZQUFZLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7Z0JBQzNDLE1BQU0sVUFBVSxHQUFHLElBQUksTUFBTSxDQUFDO29CQUM1QixLQUFLLEVBQUUsWUFBWSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ25DLEtBQUssRUFBRSxRQUFRLENBQUM7d0JBQ2QsRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDdkMsRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztxQkFDeEMsQ0FBQztvQkFDRixRQUFRLEVBQUUsR0FBRyxDQUFDLFlBQVk7b0JBQzFCLFdBQVcsRUFBRSxJQUFJLGdCQUFnQixFQUFFO29CQUNuQyxPQUFPLEVBQUUsR0FBRyxFQUFFO3dCQUNaLFdBQVcsQ0FBQzs0QkFDVixLQUFLLEVBQUUsT0FBTzs0QkFDZCxTQUFTLEVBQUUsS0FBSzs0QkFDaEIsUUFBUSxFQUFFLFVBQVUsQ0FBQyxXQUFXOzRCQUNoQyxTQUFTLEVBQUUsVUFBVSxDQUFDLFdBQVc7NEJBQ2pDLGlCQUFpQixFQUFFLEtBQUs7NEJBQ3hCLGlCQUFpQixFQUFFLEtBQUs7eUJBQ3pCLENBQUMsQ0FBQztvQkFFTCxDQUFDO2lCQUNGLENBQUMsQ0FBQztnQkFFSCxNQUFNLE9BQU8sR0FBRyxtQkFBbUIsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxhQUFhLENBQUMsQ0FBQztnQkFFekUsSUFBSSxVQUFVO29CQUNaLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUNqRCx1QkFBdUIsQ0FBQyxZQUFZLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUM5RyxDQUFDO1lBQ04sQ0FBQztRQUNILENBQUMsQ0FBQyxFQUFFLENBQUM7UUFHTCxDQUFDLFNBQVMseUNBQXlDO1lBQ2pELElBQUksR0FBRyxLQUFLLEdBQUcsQ0FBQyxXQUFXO2dCQUFFLE9BQU8sQ0FBQywyQ0FBMkM7WUFFaEYsTUFBTSxLQUFLLEdBQUcsZUFBZSxDQUFBO1lBQzdCLE1BQU0sTUFBTSxHQUFHLHVCQUF1QixDQUNwQyxjQUFjLEVBQ2QsTUFBTSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUVoQyxJQUFJLENBQUMsTUFBTTtnQkFBRSxPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQXlCLENBQUMsQ0FBQztZQUUzRCxNQUFNLGNBQWMsR0FBRyxJQUFJLE1BQU0sQ0FBQztnQkFDaEMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxhQUFhLENBQUMsS0FBSyxHQUFHLGVBQWU7Z0JBQ2hELEtBQUssRUFBRSxRQUFRLENBQUM7b0JBQ2QsRUFBRSxFQUFFLHVCQUF1QjtvQkFDM0IsRUFBRSxFQUFFLHFDQUFxQztpQkFDMUMsQ0FBQztnQkFDRixRQUFRLEVBQUUsR0FBRyxDQUFDLFlBQVk7Z0JBQzFCLFNBQVMsRUFBRSxHQUFHLENBQUMsU0FBUztnQkFDeEIsV0FBVyxFQUFFLElBQUksZ0JBQWdCLEVBQUU7Z0JBQ25DLGVBQWUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO2FBQ2hELENBQUMsQ0FBQztZQUNILE1BQU0sZUFBZSxHQUFHLElBQUksTUFBTSxDQUFDO2dCQUNqQyxLQUFLLEVBQUUsR0FBRyxDQUFDLFdBQVcsQ0FBQyxLQUFLLEdBQUcsZUFBZTtnQkFDOUMsS0FBSyxFQUFFLFFBQVEsQ0FBQztvQkFDZCxFQUFFLEVBQUUsdUJBQXVCO29CQUMzQixFQUFFLEVBQUUscUNBQXFDO2lCQUMxQyxDQUFDO2dCQUNGLFFBQVEsRUFBRSxHQUFHLENBQUMsWUFBWTtnQkFDMUIsU0FBUyxFQUFFLEdBQUcsQ0FBQyxTQUFTO2dCQUN4QixXQUFXLEVBQUUsSUFBSSxnQkFBZ0IsRUFBRTtnQkFDbkMsZUFBZSxFQUFFLENBQUMsTUFBTSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7YUFDOUMsQ0FBQyxDQUFDO1lBRUgsbUJBQW1CLENBQUMsQ0FBQyxjQUFjLEVBQUUsZUFBZSxDQUFDLEVBQUUsTUFBTSxFQUFFLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN2RixDQUFDLENBQUMsRUFBRSxDQUFDO1FBRUwsQ0FBQyxTQUFTLDRCQUE0QjtZQUNwQyxJQUFJLE1BQU0sR0FBRyx1QkFBdUIsQ0FBQyxjQUFjLEVBQUUsTUFBTSxDQUFDLE1BQU0sR0FBRywyQkFBMkIsRUFBRSxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDeEgsSUFBSSxDQUFDLE1BQU07Z0JBQUUsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixDQUFDLENBQUM7WUFFM0QsSUFBSSxHQUFHLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxVQUFVLEdBQUcsNEJBQTRCLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssY0FBYyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxlQUFlLENBQUMsQ0FBQztZQUNqSyxJQUFJLENBQUMsR0FBRztnQkFBRSxPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQztZQUVyRCwyQkFBMkIsQ0FDekI7Z0JBQ0UsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDO2dCQUNiLFNBQVMsRUFBRSxnQkFBZ0I7Z0JBQzNCLFFBQVEsRUFBRSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBRTtnQkFDdEQsU0FBUyxFQUFFLGNBQWM7YUFDMUIsQ0FDRixDQUFBO1FBQ0gsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUVMLENBQUMsU0FBUywrQkFBK0I7WUFDdkMsOEhBQThIO1lBRTlILE1BQU0sTUFBTSxHQUFHLHVCQUF1QixDQUFDLGNBQWMsRUFBRSxNQUFNLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBZ0IsQ0FBQTtZQUNwRyxJQUFJLENBQUMsTUFBTTtnQkFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLG1DQUFtQyxDQUFDLENBQUM7WUFDOUQsK0JBQStCLENBQUM7Z0JBQzlCLGVBQWUsRUFBRSxNQUFNLEVBQUU7Z0JBQ3pCLFNBQVMsRUFBRSxnQkFBZ0I7Z0JBQzNCLFNBQVMsRUFBRSxRQUFRLENBQUMsRUFBRSxFQUFFLEVBQUUsY0FBYyxFQUFFLEVBQUUsRUFBRSx5QkFBeUIsRUFBRSxDQUFDO2dCQUMxRSxXQUFXLEVBQUUsb0JBQW9CO2dCQUNqQyxNQUFNLEVBQUUsTUFBTTthQUNmLENBQUMsQ0FBQztZQUVILFNBQVMsTUFBTTtnQkFDYixJQUFJLFFBQVEsR0FBaUIsRUFBRSxDQUFDO2dCQUNoQyxNQUFNLFFBQVEsR0FBRyxjQUFjLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLGdDQUFnQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQSx5REFBeUQ7Z0JBRXRLLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxjQUFjLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLFVBQVUsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBLDhDQUE4QztnQkFFcEwsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUEsK0NBQStDO2dCQUMxRSxPQUFPLHdCQUF3QixDQUFDLFFBQVEsQ0FBaUIsQ0FBQztZQUM1RCxDQUFDO1lBQUEsQ0FBQztRQUVKLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFFTCxDQUFDLFNBQVMscUJBQXFCO1lBQzdCLG9EQUFvRDtZQUNwRCxJQUFJLFFBQVEsR0FBRyx1QkFBdUIsQ0FDcEMsY0FBYyxFQUNkLE1BQU0sQ0FBQyxVQUFVLEdBQUcsbUJBQW1CLEVBQ3JDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztZQUNuQixNQUFNLFFBQVEsR0FBaUIsY0FBYyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUUsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUUzSSwrQkFBK0IsQ0FBQztnQkFDOUIsZUFBZSxFQUFFLHdCQUF3QixDQUFDLFFBQVEsQ0FBaUI7Z0JBQ25FLFNBQVMsRUFBRSxHQUFHLENBQUMsU0FBUztnQkFDeEIsU0FBUyxFQUFFLFFBQVEsQ0FBQztvQkFDbEIsRUFBRSxFQUFFLGVBQWU7b0JBQ25CLEVBQUUsRUFBRSx3QkFBd0I7aUJBQzdCLENBQUM7Z0JBQ0YsV0FBVyxFQUFFLGlCQUFpQjtnQkFDOUIsTUFBTSxFQUFFLFFBQVEsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBZ0I7YUFDckQsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUVMLG1CQUFtQixDQUFDLGNBQWMsQ0FBQyxDQUFBO0lBR3JDLENBQUM7Q0FDRixDQUFDLENBQUM7QUFFSCxHQUFHLENBQUMsV0FBVyxHQUFHLElBQUksTUFBTSxDQUFDO0lBQzNCLEtBQUssRUFBRSxnQkFBZ0I7SUFDdkIsS0FBSyxFQUFFLFFBQVEsQ0FBQyxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLGFBQWEsRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLENBQUM7SUFDcEUsV0FBVyxFQUFFLElBQUksZ0JBQWdCLEVBQUU7SUFDbkMsU0FBUyxFQUFFLENBQUMsR0FBRyxnQkFBZ0IsQ0FBQztJQUNoQyxPQUFPLEVBQUUsR0FBYSxFQUFFO1FBQ3RCLDRDQUE0QztRQUM1QyxNQUFNLElBQUksR0FBRyxTQUFTLEVBQUUsQ0FBQyxJQUFJLENBQUM7UUFDOUIsR0FBRyxDQUFDLFdBQVcsQ0FBQyxlQUFlLEdBQUc7WUFDaEMsR0FBRyxJQUFJLENBQUMsT0FBTztZQUNmLEdBQUc7Z0JBQ0QsTUFBTSxDQUFDLFVBQVU7b0JBQ2pCLFlBQVk7Z0JBQ1osTUFBTSxDQUFDLFlBQVksR0FBRyxjQUFjO2dCQUNwQyxNQUFNLENBQUMsWUFBWSxHQUFHLGlCQUFpQjtnQkFDdkMsTUFBTSxDQUFDLE1BQU0sR0FBRyxVQUFVO2dCQUMxQixNQUFNLENBQUMsWUFBWSxHQUFHLG1CQUFtQjtnQkFDekMsTUFBTSxDQUFDLFVBQVUsR0FBRyxZQUFZO2FBQ2pDO1lBQ0QsR0FBRyxJQUFJLENBQUMsU0FBUztTQUNsQixDQUFDO1FBRUYsT0FBTyxHQUFHLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQztJQUN6QyxDQUFDO0lBQ0QsZ0JBQWdCLEVBQUUsS0FBSyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLFdBQVcsQ0FBQztDQUNwRyxDQUFDLENBQUM7QUFFSCxHQUFHLENBQUMsYUFBYSxHQUFHLElBQUksTUFBTSxDQUFDO0lBQzdCLEtBQUssRUFBRSxrQkFBa0I7SUFDekIsS0FBSyxFQUFFLFFBQVEsQ0FBQyxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLGVBQWUsRUFBRSxDQUFDO0lBQ3ZELFdBQVcsRUFBRSxJQUFJLGdCQUFnQixFQUFFO0lBQ25DLFNBQVMsRUFBRSxDQUFDLEdBQUcsZ0JBQWdCLENBQUM7SUFDaEMsT0FBTyxFQUFFLEdBQWEsRUFBRTtRQUN0QixNQUFNLElBQUksR0FBRyxTQUFTLEVBQUUsQ0FBQyxJQUFJLENBQUM7UUFDOUIsNENBQTRDO1FBQzVDLEdBQUcsQ0FBQyxhQUFhLENBQUMsZUFBZSxHQUFHO1lBQ2xDLEdBQUcsSUFBSSxDQUFDLFNBQVM7WUFDakIsR0FBRyxJQUFJLENBQUMsZ0JBQWdCO1lBQ3hCLEdBQUcsSUFBSSxDQUFDLFFBQVE7WUFDaEIsR0FBRyxJQUFJLENBQUMsU0FBUztTQUNsQixDQUFDO1FBRUYsNENBQTRDO1FBQzVDLEdBQUcsQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FDdEMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUN2QyxNQUFNLENBQUMsVUFBVSxHQUFHLDBCQUEwQixDQUMvQyxFQUNELENBQUMsQ0FDRixDQUFDO1FBQ0YsV0FBVyxFQUFFLENBQUM7UUFFZCxPQUFPLEdBQUcsQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDO0lBQzNDLENBQUM7SUFDRCxnQkFBZ0IsRUFBRSxLQUFLLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxNQUFNLENBQUMsYUFBYSxDQUFDO0NBQ3hHLENBQUMsQ0FBQztBQUVILEdBQUcsQ0FBQyxVQUFVLEdBQUcsSUFBSSxNQUFNLENBQUM7SUFDMUIsS0FBSyxFQUFFLGVBQWU7SUFDdEIsS0FBSyxFQUFFLFFBQVEsQ0FBQyxFQUFFLEVBQUUsRUFBRSxjQUFjLEVBQUUsRUFBRSxFQUFFLFlBQVksRUFBRSxDQUFDO0lBQ3pELFdBQVcsRUFBRSxJQUFJLGdCQUFnQixFQUFFO0lBQ25DLGVBQWUsRUFBRSxFQUFFO0lBQ25CLE9BQU8sRUFBRSxHQUFHLEVBQUU7UUFDWixLQUFLLENBQ0gsbUZBQW1GLENBQ3BGLENBQUM7UUFDRixPQUFPLENBQUMsb0NBQW9DO1FBRTVDLFdBQVcsRUFBRSxDQUFDLENBQUMsa0NBQWtDO1FBRWpELE9BQU8sR0FBRyxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUM7SUFDeEMsQ0FBQztJQUNELGdCQUFnQixFQUFFLEtBQUssSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDO0NBQy9FLENBQUMsQ0FBQztBQUVILEdBQUcsQ0FBQyxZQUFZLEdBQUcsSUFBSSxNQUFNLENBQUM7SUFDNUIsS0FBSyxFQUFFLGlCQUFpQjtJQUN4QixLQUFLLEVBQUUsUUFBUSxDQUFDO1FBQ2QsRUFBRSxFQUFFLHVCQUF1QjtRQUMzQixFQUFFLEVBQUUsdUJBQXVCO1FBQzNCLEVBQUUsRUFBRSxlQUFlO0tBQ3BCLENBQUM7SUFDRixTQUFTLEVBQUUsR0FBRyxDQUFDLElBQUk7SUFDbkIsUUFBUSxFQUFFLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxHQUFHLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxXQUFXLENBQUMsRUFBRSxxQ0FBcUM7Q0FDdkcsQ0FBQyxDQUFDO0FBRUgsR0FBRyxDQUFDLGFBQWEsR0FBRyxJQUFJLE1BQU0sQ0FBQztJQUM3QixLQUFLLEVBQUUsaUNBQWlDO0lBQ3hDLEtBQUssRUFBRSxRQUFRLENBQUM7UUFDZCxFQUFFLEVBQUUsWUFBWTtRQUNoQixFQUFFLEVBQUUsa0JBQWtCO1FBQ3RCLEVBQUUsRUFBRSxnQkFBZ0I7S0FDckIsQ0FBQztJQUNGLE9BQU8sRUFBRSxLQUFLLElBQUksRUFBRSxDQUFDLE1BQU0sR0FBRyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQztDQUN4RSxDQUFDLENBQUM7QUFFSCxHQUFHLENBQUMsYUFBYSxHQUFHLElBQUksTUFBTSxDQUFDO0lBQzdCLEtBQUssRUFBRSw4QkFBOEI7SUFDckMsS0FBSyxFQUFFLFFBQVEsQ0FBQztRQUNkLEVBQUUsRUFBRSxZQUFZO1FBQ2hCLEVBQUUsRUFBRSxtQkFBbUI7UUFDdkIsRUFBRSxFQUFFLGdCQUFnQjtLQUNyQixDQUFDO0lBQ0YsT0FBTyxFQUFFLEtBQUssSUFBSSxFQUFFLENBQUMsTUFBTSxHQUFHLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDO0NBQ3hFLENBQUMsQ0FBQztBQUVILEdBQUcsQ0FBQyxXQUFXLEdBQUcsSUFBSSxNQUFNLENBQUM7SUFDM0IsS0FBSyxFQUFFLHdCQUF3QjtJQUMvQixLQUFLLEVBQUUsUUFBUSxDQUFDO1FBQ2QsRUFBRSxFQUFFLGNBQWM7UUFDbEIsRUFBRSxFQUFFLGtCQUFrQjtRQUN0QixFQUFFLEVBQUUsY0FBYztLQUNuQixDQUFDO0lBQ0YsT0FBTyxFQUFFLEtBQUssSUFBSSxFQUFFLENBQUMsTUFBTSxHQUFHLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDO0NBQ3RFLENBQUMsQ0FBQztBQUVILEdBQUcsQ0FBQyxVQUFVLEdBQUcsSUFBSSxNQUFNLENBQUM7SUFDMUIsS0FBSyxFQUFFLHVCQUF1QjtJQUM5QixLQUFLLEVBQUUsUUFBUSxDQUFDO1FBQ2QsRUFBRSxFQUFFLGNBQWM7UUFDbEIsRUFBRSxFQUFFLHNCQUFzQjtRQUMxQixFQUFFLEVBQUUsYUFBYTtLQUNsQixDQUFDO0lBQ0YsT0FBTyxFQUFFLEtBQUssRUFBRSxlQUF1QixNQUFNLENBQUMsVUFBVSxFQUFFLEVBQUU7UUFDMUQsSUFBSSxZQUFZLEdBQUcsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssWUFBWSxDQUFDLENBQUM7UUFFaEYsSUFBSSxDQUFDLFlBQVk7WUFBRSxPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsK0JBQStCLENBQUMsQ0FBQztRQUV2RSxZQUFZLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUU1QixNQUFNLCtCQUErQixDQUFDO1lBQ3BDLE1BQU0sRUFBRSxZQUFZO1lBQ3BCLFNBQVMsRUFBRSxZQUFZLENBQUMsWUFBWSxDQUFDO1lBQ3JDLFNBQVMsRUFBRSxZQUFZO1lBQ3ZCLE1BQU0sRUFBRSxLQUFLO1lBQ2IsY0FBYyxFQUFFLElBQUk7U0FDckIsQ0FBQyxDQUFDO1FBQ0gsV0FBVyxFQUFFLENBQUMsQ0FBQyxrQ0FBa0M7SUFFbkQsQ0FBQztDQUNGLENBQUMsQ0FBQztBQUVILEdBQUcsQ0FBQyxFQUFFLEdBQUcsSUFBSSxNQUFNLENBQUM7SUFDbEIsS0FBSyxFQUFFLGFBQWE7SUFDcEIsS0FBSyxFQUFFLFFBQVEsQ0FBQyxFQUFFLEVBQUUsRUFBRSxrQkFBa0IsRUFBRSxFQUFFLEVBQUUsMkJBQTJCLEVBQUUsQ0FBQztJQUM1RSxPQUFPLEVBQUUsR0FBRyxFQUFFO1FBQ1o7Ozs7a0VBSTBEO1FBQzFELElBQUksT0FBTyxHQUFXLEdBQUcsRUFBRSxPQUFPLEdBQVcsR0FBRyxDQUFDO1FBRWpELElBQUksV0FBVyxHQUFHLElBQUksTUFBTSxDQUFDO1lBQzNCLEtBQUssRUFBRSxhQUFhO1lBQ3BCLEtBQUssRUFBRSxRQUFRLENBQUMsRUFBRSxFQUFFLEVBQUUsZ0JBQWdCLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxDQUFDO1lBQ3ZELE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsUUFBUSxHQUFHLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLEVBQUUsa0JBQWtCLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBQyw4QkFBOEI7U0FDaEksQ0FBQyxDQUFDLENBQUEsMkNBQTJDO1FBRTlDLEdBQUcsQ0FBQyxFQUFFLENBQUMsUUFBUSxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFaEMsU0FBUyxrQkFBa0IsQ0FBQyxPQUFlO1lBQ3pDLElBQUksQ0FBQyxPQUFPO2dCQUFFLE9BQU87WUFDckIsT0FBTyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUVyQyxTQUFTLG9CQUFvQixDQUFDLE9BQWU7Z0JBQzNDLElBQUksT0FBTyxLQUFLLE9BQU8sSUFBSSxPQUFPLEtBQUssQ0FBQztvQkFBRSxPQUFPLFNBQVMsQ0FBQyxDQUFBLGlDQUFpQztnQkFDNUYsSUFBSSxPQUFPLEtBQUssT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQztvQkFBRSxPQUFPLFNBQVMsQ0FBQyxDQUFBLCtEQUErRDtnQkFFbEksSUFBSSxNQUFNLEdBQUc7b0JBQ1gsRUFBRSxFQUFFLEVBQUUsYUFBYSxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUU7b0JBQ2xDLEVBQUUsRUFBRSxFQUFFLGFBQWEsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFO2lCQUNsQyxDQUFDO2dCQUdGLElBQUksR0FBRyxHQUFHLElBQUksTUFBTSxDQUFDO29CQUNuQixLQUFLLEVBQUUsYUFBYSxHQUFHLE9BQU87b0JBQzlCLEtBQUssRUFBRSxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO29CQUM1RCxTQUFTLEVBQUUsV0FBVztvQkFDdEIsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEdBQUcsb0JBQW9CLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQztpQkFDakUsQ0FBQyxDQUFDO2dCQUNILE9BQU8sR0FBRyxDQUFDLENBQUEsc0dBQXNHO1lBQ25ILENBQUM7UUFFSCxDQUFDO1FBRUQsU0FBUyxvQkFBb0IsQ0FBQyxPQUFlLEVBQUUsR0FBVztZQUN4RCxJQUFJLEdBQUcsQ0FBQyxRQUFRO2dCQUFFLE9BQU87WUFDekIsSUFBSSxXQUFtRixDQUFDO1lBRXhGLENBQUMsU0FBUyxxQkFBcUI7Z0JBQzdCLElBQUksSUFBSSxHQUNOO29CQUNFLENBQUMsUUFBUSxFQUFFLE9BQU8sRUFBRSxVQUFVLENBQUM7b0JBQy9CLENBQUMsUUFBUSxFQUFFLFNBQVMsRUFBRSxPQUFPLENBQUM7b0JBQzlCLENBQUMsU0FBUyxFQUFFLFVBQVUsRUFBRSxPQUFPLENBQUM7b0JBQ2hDLENBQUMsV0FBVyxFQUFFLFVBQVUsRUFBRSxVQUFVLENBQUM7b0JBQ3JDLENBQUMsVUFBVSxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUM7b0JBQy9CLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxVQUFVLENBQUM7b0JBQ2hDLENBQUMsVUFBVSxFQUFFLE9BQU8sRUFBRSxRQUFRLENBQUM7aUJBQ2hDLENBQUM7Z0JBRUosV0FBVyxHQUFHO29CQUNaO3dCQUNFLE1BQU0sRUFBRSxJQUFJO3dCQUNaLEtBQUssRUFBRSxFQUFFLEVBQUUsRUFBRSxlQUFlLEVBQUUsRUFBRSxFQUFFLGdCQUFnQixFQUFFLEVBQUUsRUFBRSxZQUFZLEVBQUU7cUJBQ3ZFO29CQUNEO3dCQUNFLE1BQU0sRUFBRSxJQUFJO3dCQUNaLEtBQUssRUFBRSxFQUFFLEVBQUUsRUFBRSxnQkFBZ0IsRUFBRSxFQUFFLEVBQUUsaUJBQWlCLEVBQUUsRUFBRSxFQUFFLFlBQVksRUFBRTtxQkFDekU7b0JBQ0Q7d0JBQ0UsTUFBTSxFQUFFLElBQUk7d0JBQ1osS0FBSyxFQUFFLEVBQUUsRUFBRSxFQUFFLGdCQUFnQixFQUFFLEVBQUUsRUFBRSxlQUFlLEVBQUUsRUFBRSxFQUFFLFlBQVksRUFBRTtxQkFDdkU7b0JBQ0Q7d0JBQ0UsTUFBTSxFQUFFLElBQUk7d0JBQ1osS0FBSyxFQUFFLEVBQUUsRUFBRSxFQUFFLGdCQUFnQixFQUFFLEVBQUUsRUFBRSxnQkFBZ0IsRUFBRSxFQUFFLEVBQUUsYUFBYSxFQUFFO3FCQUN6RTtvQkFDRDt3QkFDRSxNQUFNLEVBQUUsS0FBSzt3QkFDYixLQUFLLEVBQUUsRUFBRSxFQUFFLEVBQUUsb0JBQW9CLEVBQUUsRUFBRSxFQUFFLGVBQWUsRUFBRSxFQUFFLEVBQUUsZUFBZSxFQUFFO3FCQUM5RTtvQkFDRDt3QkFDRSxNQUFNLEVBQUUsS0FBSzt3QkFDYixLQUFLLEVBQUUsRUFBRSxFQUFFLEVBQUUsb0JBQW9CLEVBQUUsRUFBRSxFQUFFLGdCQUFnQixFQUFFLEVBQUUsRUFBRSxlQUFlLEVBQUU7cUJBQy9FO2lCQUNGLENBQUM7Z0JBRUYsV0FBVyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtvQkFDekIsSUFBSSxPQUFPLEtBQUssT0FBTyxFQUFFLENBQUM7d0JBQ3hCLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQy9DLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQzNDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQzdDLENBQUM7eUJBQ0ksSUFBSSxPQUFPLEtBQUssT0FBTyxJQUFJLE9BQU8sS0FBSyxDQUFDLEVBQUUsQ0FBQzt3QkFDOUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLElBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ3BELElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxJQUFJLG1CQUFtQixHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQzVELElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFdBQVcsQ0FBQztvQkFDL0QsQ0FBQzt5QkFDSSxJQUFJLE9BQU8sS0FBSyxPQUFPLElBQUksT0FBTyxLQUFLLENBQUMsRUFBRSxDQUFDO3dCQUM5QyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsSUFBSSxzQkFBc0IsQ0FBQzt3QkFDeEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLElBQUksa0NBQWtDLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDM0UsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLElBQUksb0JBQW9CLENBQUE7b0JBQ3ZDLENBQUM7Z0JBQ0gsQ0FBQyxDQUFDLENBQUM7WUFFTCxDQUFDLENBQUMsRUFBRSxDQUFDO1lBRUwsT0FBTyxXQUFXLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQSxvQ0FBb0M7WUFFeEksU0FBUyxhQUFhLENBQUMsSUFBWSxFQUFFLEtBQW1CO2dCQUV0RCxJQUFJLElBQUksS0FBSyxLQUFLLElBQUksT0FBTyxLQUFLLENBQUM7b0JBQUUsT0FBTyxTQUFTLENBQUMsQ0FBQSxrQ0FBa0M7Z0JBRXhGLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxPQUFPLEtBQUssT0FBTyxJQUFJLE9BQU8sS0FBSyxDQUFDO29CQUFFLE9BQU8sU0FBUyxDQUFDLENBQUEseUNBQXlDO2dCQUV6SSxJQUFJLFlBQVksR0FBaUIsY0FBYyxDQUFDLGtCQUFrQjtxQkFDL0QsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsSUFBSSxHQUFHLE9BQU8sR0FBRyxRQUFRLEdBQUcsa0JBQWtCLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFFaEgsSUFBSSxPQUFPLEdBQUcsSUFBSSxNQUFNLENBQUM7b0JBQ3ZCLEtBQUssRUFBRSxLQUFLLEdBQUcsSUFBSTtvQkFDbkIsS0FBSyxFQUFFLEtBQUs7b0JBQ1osU0FBUyxFQUFFLEdBQUc7b0JBQ2QsU0FBUyxFQUFFLGdCQUFnQjtvQkFDM0IsV0FBVyxFQUFFLElBQUksZ0JBQWdCLEVBQUU7b0JBQ25DLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsZUFBZSxHQUFHLENBQUMsR0FBRyxTQUFTLEVBQUUsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDO29CQUMzRSxnQkFBZ0IsRUFBRSxLQUFLLElBQUksRUFBRSxDQUFDLE1BQU0sdUJBQXVCLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsS0FBSyxDQUFDO2lCQUNoRyxDQUFDLENBQUM7Z0JBRUgsT0FBTyxPQUFPLENBQUM7Z0JBR2YsS0FBSyxVQUFVLHVCQUF1QixDQUFDLEdBQVcsRUFBRSxJQUFZLEVBQUUsVUFBd0IsRUFBRSxLQUFtQjtvQkFFN0csSUFBSSxNQUFnSSxDQUFDO29CQUNySSxDQUFDLFNBQVMsb0JBQW9CO3dCQUM1QixNQUFNLEdBQUc7NEJBQ1AsVUFBVSxFQUFFO2dDQUNWLEVBQUUsRUFBRSxZQUFZO2dDQUNoQixFQUFFLEVBQUUsb0JBQW9CO2dDQUN4QixFQUFFLEVBQUUscUJBQXFCOzZCQUMxQjs0QkFDRCxLQUFLLEVBQUU7Z0NBQ0wsRUFBRSxFQUFFLFNBQVM7Z0NBQ2IsRUFBRSxFQUFFLGdCQUFnQjtnQ0FDcEIsRUFBRSxFQUFFLGdCQUFnQjs2QkFDckI7NEJBQ0QsTUFBTSxFQUFFO2dDQUNOLEVBQUUsRUFBRSxTQUFTO2dDQUNiLEVBQUUsRUFBRSxrQkFBa0I7Z0NBQ3RCLEVBQUUsRUFBRSxpQkFBaUI7NkJBQ3RCOzRCQUNELFVBQVUsRUFBRTtnQ0FDVixFQUFFLEVBQUUsT0FBTztnQ0FDWCxFQUFFLEVBQUUscUJBQXFCO2dDQUN6QixFQUFFLEVBQUUscUJBQXFCOzZCQUMxQjs0QkFDRCxPQUFPLEVBQUU7Z0NBQ1AsRUFBRSxFQUFFLE9BQU87Z0NBQ1gsRUFBRSxFQUFFLGdCQUFnQjtnQ0FDcEIsRUFBRSxFQUFFLGtCQUFrQjs2QkFDdkI7eUJBQ0YsQ0FBQzt3QkFDRixNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQzs2QkFDbEIsT0FBTyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7NEJBQ2pCLEtBQUssQ0FBQyxlQUFlLENBQUMsSUFBSSxLQUFLLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQzs0QkFDekMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDO3dCQUMzQyxDQUFDLENBQUMsQ0FBQztvQkFDUCxDQUFDLENBQUMsRUFBRSxDQUFDO29CQUVMLE1BQU0sa0JBQWtCLEVBQUUsQ0FBQztvQkFDM0IsOEJBQThCLEVBQUUsQ0FBQztvQkFDakMsTUFBTSxnQ0FBZ0MsRUFBRSxDQUFDO29CQUV6QyxLQUFLLFVBQVUsa0JBQWtCO3dCQUMvQixNQUFNLGFBQWEsR0FBRyxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7d0JBQzFDLE1BQU0sUUFBUSxHQUFHLHNCQUFzQixDQUFBO3dCQUV2QyxNQUFNLFFBQVEsR0FBcUM7NEJBQ2pELFVBQVUsRUFBRSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBQyxRQUFRLEVBQUUsU0FBUyxFQUFFLGNBQWMsRUFBRTs0QkFDOUcsZUFBZSxFQUFFLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBQyxRQUFRLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFOzRCQUMxSCxTQUFTLEVBQUUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxhQUFhLEVBQUU7NEJBQzNHLGNBQWMsRUFBRSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRTs0QkFDdkgsVUFBVSxFQUFFLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsVUFBVSxFQUFFLEdBQUcsRUFBQyxZQUFZLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRTs0QkFDeEgsVUFBVSxFQUFFLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsVUFBVSxFQUFFLEdBQUcsRUFBQyxZQUFZLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRTs0QkFDeEgsT0FBTyxFQUFFLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRTs0QkFDL0csU0FBUyxFQUFFLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFDLFdBQVcsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFOzRCQUM3RyxNQUFNLEVBQUUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSxhQUFhLEVBQUU7eUJBQ2hILENBQUM7d0JBRUYsQ0FBQyxTQUFTLHVCQUF1Qjs0QkFDL0IsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7NEJBRWxHLFNBQVMsaUJBQWlCLENBQUMsT0FBTyxFQUFFLEtBQWE7Z0NBQy9DLE9BQU8sQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDLEdBQUcsTUFBTSxDQUFDLFFBQVEsR0FBRyxLQUFLLEdBQUcsT0FBTyxFQUFFLEVBQUUsYUFBYSxDQUFDLElBQUksU0FBUyxDQUFDO2dDQUM5RixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUs7b0NBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3Q0FBd0MsS0FBSyxFQUFFLENBQUMsQ0FBQztnQ0FDakYsT0FBTyxDQUFDLE1BQU0sR0FBRyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7NEJBQ3ZDLENBQUM7d0JBQ0gsQ0FBQyxDQUFDLEVBQUUsQ0FBQzt3QkFFTCxDQUFDLFNBQVMsNEJBQTRCOzRCQUNwQyxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDLGVBQWUsRUFBRSxRQUFRLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxjQUFjLEVBQUUsUUFBUSxDQUFDLFVBQVUsRUFBRSxRQUFRLENBQUMsVUFBVSxFQUFFLFFBQVEsQ0FBQyxPQUFPLENBQUM7aUNBQ3ZKLE9BQU8sQ0FBQyxPQUFPLENBQUEsRUFBRSxDQUFBLGlCQUFpQixDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDOzRCQUU5RSxRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxzQkFBcUMsQ0FBQyxDQUFDLHNIQUFzSDs0QkFFN04sU0FBUyxpQkFBaUIsQ0FBQyxPQUFvQixFQUFFLElBQVksRUFBRSxNQUFjO2dDQUMzRSxPQUFPLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQ0FDakMsT0FBTyxDQUFDLE1BQU0sR0FBRyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUE7NEJBQ3ZDLENBQUM7NEJBRUQsQ0FBQyxTQUFTLDJCQUEyQjtnQ0FDbkMsbUxBQW1MO2dDQUNuTCxNQUFNLFdBQVcsR0FBRyxhQUFhLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztnQ0FFckQsQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLFFBQVEsQ0FBQyxlQUFlLEVBQUUsUUFBUSxDQUFDLFNBQVMsRUFBRSxRQUFRLENBQUMsY0FBYyxDQUFDO3FDQUN6RixPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRTtvQ0FDbkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLO3dDQUFFLE9BQU87b0NBQzNCLElBQUksT0FBTyxLQUFLLFFBQVEsQ0FBQyxlQUFlO3dDQUN0QyxPQUFPLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLOzZDQUMxQixNQUFNLENBQUMsQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7O3dDQUMxRSxPQUFPLENBQUMsS0FBSzs0Q0FDaEIsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtnREFDeEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQztvREFDdEcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztxREFFL0IsSUFBSSxPQUFPLEtBQUssUUFBUSxDQUFDLGNBQWM7b0RBQzFDLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssS0FBSyxXQUFXLENBQUMsQ0FBQzs0Q0FDNUQsQ0FBQyxDQUFDLENBQUM7Z0NBQ1AsQ0FBQyxDQUFDLENBQUM7NEJBQ1AsQ0FBQyxDQUFDLEVBQUUsQ0FBQzs0QkFFTCxTQUFTLFVBQVUsQ0FBQyxJQUFZO2dDQUM5QixPQUFPLFNBQVMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxRQUFRLEdBQUcsSUFBSSxHQUFHLE9BQU8sR0FBRyxJQUFJLE1BQU0sa0JBQWtCLEVBQUUsRUFBRSxVQUFVLENBQUMsSUFBSSxTQUFTLENBQUE7NEJBQ2pILENBQUM7d0JBQ0gsQ0FBQyxDQUFDLEVBQUUsQ0FBQzt3QkFFTCxTQUFTLFlBQVksQ0FBQyxLQUFhOzRCQUNqQyxPQUFPLHVCQUF1QixDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLE1BQU0sR0FBRyxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO3dCQUNsRyxDQUFDO3dCQUVELE1BQU0seUJBQXlCLEVBQUUsQ0FBQzt3QkFFbEMsS0FBSyxVQUFVLHlCQUF5Qjs0QkFDdEMsSUFBSSxTQUFtQixDQUFDOzRCQUV4QixNQUFNLFFBQVEsR0FBRztnQ0FDZixRQUFRLENBQUMsU0FBUztnQ0FDbEIsUUFBUSxDQUFDLFVBQVU7Z0NBQ25CLFFBQVEsQ0FBQyxjQUFjO2dDQUN2QixRQUFRLENBQUMsZUFBZTtnQ0FDeEIsUUFBUSxDQUFDLFVBQVU7Z0NBQ25CLFFBQVEsQ0FBQyxVQUFVO2dDQUNuQixRQUFRLENBQUMsT0FBTyxFQUFDLG9EQUFvRDtnQ0FDckUsUUFBUSxDQUFDLFNBQVM7Z0NBQ2xCLFFBQVEsQ0FBQyxNQUFNOzZCQUFDO2lDQUNmLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUEsa0ZBQWtGOzRCQUl4SSxLQUFLLE1BQU0sT0FBTyxJQUFJLFFBQVEsRUFBRSxDQUFDO2dDQUMvQixDQUFDLFNBQVMsV0FBVztvQ0FDbkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUM7d0NBQ3pELFNBQVMsR0FBRyxnQkFBZ0IsQ0FBQzt5Q0FFMUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLFVBQVUsRUFBRSxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQzt3Q0FDckYsU0FBUyxHQUFHLGFBQWEsQ0FBQzt5Q0FFdkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLEVBQUUsUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUM7d0NBQzVFLFNBQVMsR0FBRyxDQUFDLGVBQWUsRUFBRSxlQUFlLENBQUMsQ0FBQzt5Q0FFNUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUM7d0NBQ2xFLFNBQVMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dDQUN4QixDQUFDLENBQUMsRUFBRSxDQUFDO2dDQUVMLE9BQU8sQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBLGdEQUFnRDtnQ0FFakcsT0FBTyxDQUFDLEtBQUssR0FBRyxNQUFNLDZCQUE2QixDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsU0FBUyxDQUFDLENBQUM7Z0NBRTlFLE9BQU8sQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQUUsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLDBKQUEwSjtnQ0FFM1EsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxtQkFBbUIsRUFBRSxDQUFDLENBQUEsbUVBQW1FO2dDQUU1RywyQkFBMkIsQ0FBQztvQ0FDMUIsTUFBTSxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztvQ0FDdkIsU0FBUyxFQUFFLFNBQVM7b0NBQ3BCLFNBQVMsRUFBRSxPQUFPLENBQUMsV0FBVztvQ0FDOUIsUUFBUSxFQUFFO3dDQUNSLEVBQUUsRUFBRSxPQUFPLENBQUMsTUFBTSxFQUFFLGFBQWEsRUFBRSxhQUFhO3FDQUNqRDtpQ0FDRixDQUFDLENBQUM7Z0NBRUgsU0FBUyxtQkFBbUI7b0NBQzFCLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSzt3Q0FBRSxPQUFPLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQSxzSkFBc0o7b0NBQ2xNLE1BQU0sR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7b0NBQy9DLFNBQVM7eUNBQ04sR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0NBQ3BELE9BQU8sR0FBRyxDQUFBO2dDQUNaLENBQUM7NEJBQ0gsQ0FBQzs0QkFBQSxDQUFDO3dCQUNKLENBQUM7d0JBQUEsQ0FBQztvQkFDSixDQUFDO29CQUFBLENBQUM7b0JBRUYsU0FBUyw4QkFBOEI7d0JBQ3JDLGdEQUFnRDt3QkFDaEQsSUFBSSxPQUFPLEtBQUssQ0FBQzs0QkFBRSxPQUFPO3dCQUMxQixJQUFJLE9BQU8sS0FBSyxPQUFPOzRCQUFFLE9BQU8sQ0FBQyw0Q0FBNEM7d0JBQzdFLElBQUksSUFBSSxLQUFLLEtBQUs7NEJBQUUsT0FBTyxDQUFDLDJCQUEyQjt3QkFFdkQsTUFBTSxNQUFNLEdBQUcsR0FBRyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFtQixDQUFDO3dCQUU3RCxJQUFJLENBQUMsTUFBTTs0QkFBRSxPQUFPO3dCQUVwQixNQUFNLFNBQVMsR0FBRyxJQUFJLE1BQU0sQ0FBQzs0QkFDM0IsS0FBSyxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSzs0QkFDdkIsS0FBSyxFQUFFLFFBQVEsQ0FBQyxFQUFFLEVBQUUsRUFBRSxpQkFBaUIsRUFBRSxFQUFFLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQzs0QkFDbEUsV0FBVyxFQUFFLElBQUksZ0JBQWdCLEVBQUU7NEJBQ25DLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFLFNBQVMsQ0FBQzs0QkFDdkUsZ0JBQWdCLEVBQUUsS0FBSyxJQUFJLEVBQUUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRSxTQUFTLENBQUM7eUJBQ3RHLENBQUMsQ0FBQzt3QkFFSCxNQUFNLE9BQU8sR0FBRyxJQUFJLE1BQU0sQ0FBQzs0QkFDekIsS0FBSyxFQUFFLFNBQVM7NEJBQ2hCLEtBQUssRUFBRSxRQUFRLENBQUMsRUFBRSxFQUFFLEVBQUUsaUJBQWlCLEVBQUUsRUFBRSxFQUFFLHNCQUFzQixFQUFFLENBQUM7NEJBQ3RFLFdBQVcsRUFBRSxJQUFJLGdCQUFnQixFQUFFOzRCQUNuQyxPQUFPLEVBQUUsR0FBRyxFQUFFO2dDQUNaLE1BQU0sSUFBSSxHQUFHLFNBQVMsRUFBRSxDQUFDLElBQUksQ0FBQztnQ0FDOUIsSUFBSSxRQUFRLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7Z0NBQ3BELEdBQUcsQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLFFBQVEsQ0FBQzs0QkFDdEMsQ0FBQzs0QkFDRCxnQkFBZ0IsRUFBRSxLQUFLLElBQUksRUFBRSxHQUFHLENBQUM7eUJBQ2xDLENBQUMsQ0FBQzt3QkFFSCxHQUFHLENBQUMsUUFBUSxHQUFHLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO3dCQUVwQyxtQkFBbUIsQ0FBQyxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUM5RixDQUFDO29CQUFBLENBQUM7b0JBRUYsS0FBSyxVQUFVLGdDQUFnQzt3QkFDN0MsSUFBSSxPQUFPLEtBQUssQ0FBQzs0QkFBRSxPQUFPO3dCQUMxQixJQUFJLE9BQU8sS0FBSyxPQUFPOzRCQUFFLE9BQU87d0JBQ2hDLE1BQU0sTUFBTSxHQUFHLHVCQUF1QixDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLE1BQU0sR0FBRyxZQUFZLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBbUIsQ0FBQzt3QkFFOUgsTUFBTSxTQUFTLEVBQUUsQ0FBQzt3QkFDbEIsTUFBTSxVQUFVLEVBQUUsQ0FBQzt3QkFFbkIsS0FBSyxVQUFVLFNBQVM7NEJBQ3RCLElBQUksSUFBSSxLQUFLLElBQUk7Z0NBQUUsT0FBTzs0QkFFMUIsTUFBTSxZQUFZLENBQUMsYUFBYSxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUEsZ0NBQWdDOzRCQUUvRSxXQUFXLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsaUNBQWlDOzRCQUVuRyxNQUFNLFdBQVcsR0FBRyx1QkFBdUIsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxNQUFNLEdBQUcsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBbUIsQ0FBQzs0QkFFeEksTUFBTSxLQUFLLEdBQUcsU0FBUyxDQUFDLEdBQUcsTUFBTSxDQUFDLFFBQVEsR0FBRyxhQUFhLEVBQUUsRUFBRSxjQUFjLENBQUMsQ0FBQyxDQUFBLHNWQUFzVjs0QkFFcGEsTUFBTSxVQUFVLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsdUJBQXVCLEdBQUcsWUFBWSxDQUFDLFVBQVUsRUFBRSxjQUFjLENBQUMsa0JBQWtCLENBQUMsQ0FBQzs0QkFFckksV0FBVyxDQUFDLEtBQW1CLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQSw0QkFBNEI7NEJBRXZGLFdBQVcsQ0FBQyxVQUF3QixFQUFFLGdCQUFnQixFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUEsOEJBQThCO3dCQUVyRyxDQUFDO3dCQUFBLENBQUM7d0JBRUYsS0FBSyxVQUFVLFVBQVU7NEJBQ3ZCLElBQUksSUFBSSxLQUFLLElBQUk7Z0NBQUUsT0FBTzs0QkFDMUIsTUFBTSxZQUFZLENBQUMsWUFBWSxFQUFFLFVBQVUsQ0FBQyxDQUFDOzRCQUM3QyxXQUFXLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsaUNBQWlDO3dCQUdyRyxDQUFDO3dCQUVELEtBQUssVUFBVSxZQUFZLENBQUMsR0FBVyxFQUFFLE9BQWU7NEJBQ3RELENBQUMsU0FBUyxjQUFjO2dDQUN0QixNQUFNLFFBQVEsR0FBRyxTQUFTLENBQUMsR0FBRyxNQUFNLENBQUMsUUFBUSxHQUFHLFNBQVMsRUFBRSxFQUFFLGNBQWMsQ0FBZSxDQUFDLENBQUMsOFVBQThVO2dDQUMxYSxNQUFNLFdBQVcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUMsQ0FBQztnQ0FDdEUsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUEsd0ZBQXdGO2dDQUUzSCxXQUFXLENBQUMsUUFBUSxFQUFFLGdCQUFnQixFQUFFLE1BQU0sQ0FBQyxDQUFDOzRCQUNsRCxDQUFDLENBQUMsRUFBRSxDQUFDOzRCQUVMLE1BQU0sYUFBYSxFQUFFLENBQUM7NEJBRXRCLEtBQUssVUFBVSxhQUFhO2dDQUMxQixNQUFNLE1BQU0sR0FBRyxxQkFBcUIsRUFBRSxDQUFDO2dDQUN2QyxNQUFNLEtBQUssR0FBRyxZQUFZLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dDQUMxQyxNQUFNLE1BQU0sR0FBRztvQ0FDYixRQUFRLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxHQUFHLENBQUMsS0FBSyxDQUFDO29DQUN2QyxDQUFDLE1BQU0sQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDO29DQUN6QixRQUFRLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDO2lDQUNwQyxDQUFDLENBQUEsaUNBQWlDO2dDQUNuQyxNQUFNLE9BQU8sR0FBRyxNQUFNLDZCQUE2QixDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztnQ0FDbkUsV0FBVyxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7Z0NBR3BDLFNBQVMsUUFBUSxDQUFDLEtBQUssRUFBRSxHQUFXO29DQUNsQyxPQUFPO3dDQUNMLE1BQU0sQ0FBQyxJQUFJLEdBQUcsR0FBRzt3Q0FDakIsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBVyxDQUFDO3FDQUM1QyxDQUFDO2dDQUNKLENBQUM7NEJBQ0gsQ0FBQzt3QkFDSCxDQUFDO3dCQUVELFNBQVMsV0FBVyxDQUFDLEtBQWlCLEVBQUUsS0FBZSxFQUFFLE1BQW1COzRCQUMxRSxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsTUFBTTtnQ0FBRSxPQUFPOzRCQUN4QywyQkFBMkIsQ0FBQztnQ0FDMUIsTUFBTSxFQUFFLENBQUMsS0FBSyxDQUFDO2dDQUNmLFNBQVMsRUFBRSxLQUFLO2dDQUNoQixRQUFRLEVBQUUsRUFBRSxhQUFhLEVBQUUsYUFBYSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUU7Z0NBQ3RELFNBQVMsRUFBRSxHQUFHLENBQUMsV0FBVzs2QkFDM0IsQ0FBQyxDQUFDO3dCQUNMLENBQUM7d0JBQUEsQ0FBQzt3QkFFRixTQUFTLFdBQVcsQ0FBQyxJQUFZOzRCQUMvQixPQUFPLFNBQVMsQ0FBQyxNQUFNLENBQUMsV0FBVyxHQUFHLElBQUksRUFBRSxjQUFjLENBQWUsQ0FBQzt3QkFDNUUsQ0FBQztvQkFFSCxDQUFDO29CQUFBLENBQUM7Z0JBRUosQ0FBQztZQUNILENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQztDQUNGLENBQUMsQ0FBQztBQUVILEdBQUcsQ0FBQyxLQUFLLEdBQUcsSUFBSSxNQUFNLENBQUM7SUFDckIsS0FBSyxFQUFFLFVBQVU7SUFDakIsS0FBSyxFQUFFLFFBQVEsQ0FBQztRQUNkLEVBQUUsRUFBRSxlQUFlO1FBQ25CLEVBQUUsRUFBRSxVQUFVO0tBQ2YsQ0FBQztJQUNGLE9BQU8sRUFBRSxLQUFLLEVBQUUsSUFBZ0QsRUFBRSxFQUFFO1FBQ2xFLElBQUksSUFBSTtZQUNOLE9BQU8sTUFBTSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUdsRSxNQUFNLFlBQVksR0FBRyxJQUFJLE1BQU0sQ0FBQztZQUM5QixLQUFLLEVBQUUsY0FBYztZQUNyQixLQUFLLEVBQUUsUUFBUSxDQUFDO2dCQUNkLEVBQUUsRUFBRSxjQUFjO2dCQUNsQixFQUFFLEVBQUUsbUJBQW1CO2dCQUN2QixFQUFFLEVBQUUsZUFBZTthQUNwQixDQUFDO1lBQ0YsT0FBTyxFQUFFLEtBQUssSUFBSSxFQUFFLENBQUMsTUFBTSxpQkFBaUIsQ0FBQyxZQUFZLENBQUMsRUFBRSxzSUFBc0k7WUFDbE0sZ0JBQWdCLEVBQUUsaUJBQWlCO1NBQ3BDLENBQUMsQ0FBQztRQUVILE1BQU0sWUFBWSxHQUFHLElBQUksTUFBTSxDQUFDO1lBQzlCLEtBQUssRUFBRSxjQUFjO1lBQ3JCLEtBQUssRUFBRSxRQUFRLENBQUM7Z0JBQ2QsRUFBRSxFQUFFLGNBQWM7Z0JBQ2xCLEVBQUUsRUFBRSxrQkFBa0I7Z0JBQ3RCLEVBQUUsRUFBRSxlQUFlO2FBQ3BCLENBQUM7WUFDRixPQUFPLEVBQUUsS0FBSyxJQUFJLEVBQUUsQ0FBQyxNQUFNLGlCQUFpQixDQUFDLFlBQVksQ0FBQyxFQUFFLHNJQUFzSTtZQUNsTSxnQkFBZ0IsRUFBRSxpQkFBaUI7U0FDcEMsQ0FBQyxDQUFDO1FBRUgsR0FBRyxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsQ0FBQyxZQUFZLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFFbEQsS0FBSyxVQUFVLGlCQUFpQixDQUFDLEdBQVc7WUFDMUMsR0FBRyxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUMsUUFBUSxJQUFJLE1BQU0sZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQzNELENBQUM7UUFBQSxDQUFDO1FBRUYsU0FBUyxpQkFBaUI7WUFDeEIsQ0FBQyxvQkFBb0IsRUFBRSxZQUFZLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFnQixDQUFDO2lCQUNsRixPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUVoRCxTQUFTLFdBQVcsQ0FBQyxTQUFzQjtnQkFDekMsTUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDOUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDekIsS0FBSyxDQUFDLEVBQUUsR0FBRyxhQUFhLENBQUM7Z0JBQ3pCLEtBQUssQ0FBQyxZQUFZLEdBQUc7b0JBQ25CLEVBQUUsRUFBRSxRQUFRO29CQUNaLEVBQUUsRUFBRSxjQUFjO29CQUNsQixFQUFFLEVBQUUsV0FBVztpQkFDaEIsQ0FBQyxlQUFlLENBQUMsQ0FBQztnQkFDbkIsS0FBSyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxDQUFDO2dCQUN4RCxLQUFLLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLGFBQWEsQ0FBQyxDQUFDO2dCQUMvQyxxRkFBcUY7Z0JBRXJGLFNBQVMsYUFBYTtvQkFDcEIsTUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQXdCLENBQUM7b0JBRW5ILElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDO3dCQUFFLE9BQU87b0JBQzVCLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLDJCQUEyQjtvQkFDbEYsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUEsbURBQW1EO29CQUV6SSxXQUFXLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxnQ0FBZ0M7Z0JBRTdGLENBQUM7WUFDSCxDQUFDO1FBQ0gsQ0FBQztRQUFBLENBQUM7UUFFRixLQUFLLFVBQVUsZUFBZSxDQUFDLEdBQVc7WUFDeEMsSUFBSSxTQUFTLEdBQUcsTUFBTSxpQkFBaUIsQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUN6RCxJQUFJLENBQUMsU0FBUztnQkFBRSxPQUFPO1lBRXZCLElBQUksR0FBRyxLQUFLLFlBQVk7Z0JBQUUsU0FBUyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO2lCQUN4RCxJQUFJLEdBQUcsS0FBSyxZQUFZO2dCQUFFLFNBQVMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBRSxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7WUFFakYsTUFBTSxLQUFLLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUVoRSxPQUFPLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRTtnQkFDckMsTUFBTSxHQUFHLEdBQUcsSUFBSSxNQUFNLENBQUM7b0JBQ3JCLEtBQUssRUFBRSxVQUFVLEtBQUssRUFBRTtvQkFDeEIsS0FBSyxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFO29CQUNsQyxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUMsUUFBUSxJQUFJLGtCQUFrQixDQUFDLEVBQUUsQ0FBQyxFQUFDLHNJQUFzSTtvQkFDM00sZ0JBQWdCLEVBQUUsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsRUFBRSxNQUFNLEVBQUU7aUJBQ3pFLENBQUMsQ0FBQztnQkFDSCxPQUFPLEdBQUcsQ0FBQTtZQUNaLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztRQUVELFNBQVMsa0JBQWtCLENBQUMsTUFBYztZQUN4QyxNQUFNLElBQUksR0FBYyxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsSUFBZSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLE1BQU0sQ0FBQyxDQUFDO1lBRXJHLElBQUksQ0FBQyxJQUFJO2dCQUFFLE9BQU87WUFFbEIsT0FBTyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7WUFFMUIsU0FBUyxZQUFZLENBQUMsSUFBZTtnQkFDbkMsTUFBTSxDQUFDLFlBQVksRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUVsRSxPQUFPLFlBQVk7cUJBQ2hCLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztxQkFDbEMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7Z0JBRTFDLFNBQVMsYUFBYSxDQUFDLE9BQWU7b0JBQ3BDLENBQUM7d0JBQ0MsT0FBTyxJQUFJLE1BQU0sQ0FBQzs0QkFDaEIsS0FBSyxFQUFFLGFBQWEsT0FBTyxFQUFFOzRCQUM3QixLQUFLLEVBQUUsUUFBUSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQzs0QkFDekMsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUM7eUJBQ2xELENBQUMsQ0FBQztvQkFDTCxDQUFDO2dCQUVILENBQUM7WUFDSCxDQUFDO1FBQ0gsQ0FBQztRQUVELEtBQUssVUFBVSxpQkFBaUIsQ0FBQyxNQUFjLEVBQUUsYUFBcUI7WUFDcEUsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLGFBQWE7Z0JBQUUsT0FBTztZQUN0QyxNQUFNLFNBQVMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQ3BDLElBQUksZUFBZTtnQkFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBRXRELE1BQU0sZUFBZSxFQUFFLENBQUM7WUFFeEIsS0FBSyxVQUFVLGVBQWU7Z0JBQzVCLE1BQU0sS0FBSyxHQUNUO29CQUNFLFVBQVUsTUFBTSxHQUFHLGFBQWEsR0FBRyxHQUFHLENBQUMsS0FBSyxFQUFFO2lCQUMvQyxDQUFDO2dCQUNKLE1BQU0sUUFBUSxFQUFFLENBQUM7Z0JBRWpCLEtBQUssVUFBVSxRQUFRO29CQUNyQixNQUFNLENBQUMsV0FBVyxFQUFFLFdBQVcsQ0FBQyxHQUFHLE1BQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBQyxJQUFJLEVBQUMsRUFBRSxDQUFDLE1BQU0sT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDdkcsTUFBTSxLQUFLLEdBQUcsV0FBVyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFDOUQsTUFBTSxHQUFHLEdBQUcsR0FBRyxNQUFNLENBQUMsVUFBVSxHQUFHLE1BQU0sSUFBSSxhQUFhLElBQUksS0FBSyxNQUFNLENBQUM7b0JBQzFFLE1BQU0sU0FBUyxHQUFHLE1BQU0sNkJBQTZCLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUM7b0JBQzFFLENBQUMsV0FBVyxFQUFFLFdBQVcsQ0FBQzt5QkFDdkIsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRSxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3JGLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7b0JBQ3JCLFdBQVcsQ0FBQzt3QkFDVixLQUFLLEVBQUUsU0FBUzt3QkFDaEIsU0FBUyxFQUFFLFNBQVM7d0JBQ3BCLFNBQVMsRUFBRSxZQUFZO3dCQUN2QixpQkFBaUIsRUFBRSxJQUFJO3dCQUN2QixpQkFBaUIsRUFBRSxJQUFJO3FCQUN4QixDQUFDLENBQUM7b0JBQ0gsY0FBYyxDQUFDLE1BQU0sRUFBRSxhQUFhLENBQUMsQ0FBQztnQkFDeEMsQ0FBQztnQkFBQSxDQUFDO2dCQUVILEtBQUssVUFBVSxPQUFPLENBQUMsSUFBVztvQkFDL0IsSUFBRyxDQUFDLElBQUk7d0JBQUUsT0FBTTtvQkFDaEIsTUFBTSxJQUFJLEdBQUcsTUFBTSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDM0MsT0FBTyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxNQUFNLENBQUMsQ0FBQztnQkFDMUMsQ0FBQztZQUVILENBQUM7WUFHRCxDQUFDLFNBQVMscUJBQXFCO2dCQUM3QixNQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUM5QyxZQUFZLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUM3QixNQUFNLEtBQUssR0FBRyxHQUFHLEVBQUUsSUFBSSxHQUFHLEdBQUcsQ0FBQztnQkFDOUIsSUFBSSxJQUFJLEdBQVksSUFBSSxDQUFDO2dCQUN6QixJQUFJLGVBQWUsS0FBSyxJQUFJO29CQUFFLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQztnQkFFM0MsTUFBTSxJQUFJLEdBQUcsSUFBSSxNQUFNLENBQUM7b0JBQ3RCLEtBQUssRUFBRSxTQUFTO29CQUNoQixLQUFLLEVBQUUsUUFBUSxDQUFDO3dCQUNkLEVBQUUsRUFBRSxLQUFLO3dCQUNULEVBQUUsRUFBRSxLQUFLO3dCQUNULEVBQUUsRUFBRSxLQUFLO3FCQUNWLENBQUM7b0JBQ0YsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLGFBQWEsQ0FBQztpQkFDeEQsQ0FBQyxDQUFDO2dCQUVILE1BQU0sSUFBSSxHQUFHLElBQUksTUFBTSxDQUFDO29CQUN0QixLQUFLLEVBQUUsU0FBUztvQkFDaEIsS0FBSyxFQUFFLFFBQVEsQ0FBQzt3QkFDZCxFQUFFLEVBQUUsSUFBSTt3QkFDUixFQUFFLEVBQUUsSUFBSTt3QkFDUixFQUFFLEVBQUUsSUFBSTtxQkFDVCxDQUFDO29CQUNGLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLGFBQWEsQ0FBQztpQkFDekQsQ0FBQyxDQUFDO2dCQUVILENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtvQkFDekIsYUFBYSxDQUFDO3dCQUNaLEdBQUcsRUFBRSxHQUFHO3dCQUNSLGFBQWEsRUFBRSxPQUFPO3dCQUN0QixRQUFRLEVBQUUsR0FBRyxDQUFDLFlBQVk7cUJBQzNCLENBQUMsQ0FBQTtnQkFDSixDQUFDLENBQUMsQ0FBQztnQkFFSCxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQztnQkFDbEQsNkNBQTZDO2dCQUM3QyxPQUFPLENBQUMsS0FBSyxDQUFDLG1CQUFtQixHQUFHLDBCQUEwQixDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUV4RSxLQUFLLFVBQVUsV0FBVyxDQUFDLElBQWEsRUFBRSxFQUFTLEVBQUUsYUFBb0I7b0JBQ3ZFLE1BQU0sS0FBSyxHQUFHLE1BQU0saUJBQWlCLENBQUMsZUFBZSxDQUFDLENBQUM7b0JBRXZELE1BQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLEdBQUcsaUJBQWlCLEVBQUUsQ0FBQztvQkFFNUMsTUFBTSxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDO29CQUUzQyxjQUFjLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQztvQkFFakMsU0FBUyxpQkFBaUI7d0JBQ3hCLElBQUksSUFBSSxHQUFHLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO3dCQUN6QyxNQUFNLFNBQVMsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO3dCQUN0QyxJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUEsb0RBQW9EO3dCQUM1SCxNQUFNLFlBQVksR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO3dCQUV6RCxJQUFJLElBQUksSUFBSSxZQUFZLEtBQUssWUFBWSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQzs0QkFDckQsd0VBQXdFOzRCQUN4RSxJQUFJLEdBQUcsS0FBSyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQ3hDLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDOzRCQUNwRSxhQUFhLEdBQUcsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFBO3dCQUNqQyxDQUFDOzZCQUFNLElBQUksSUFBSSxFQUFFLENBQUM7NEJBQ2hCLDBDQUEwQzs0QkFDMUMsYUFBYSxHQUFHLFlBQVksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLENBQUE7d0JBQ2hELENBQUM7NkJBQU0sSUFBSSxDQUFDLElBQUksSUFBSSxZQUFZLEtBQUssQ0FBQyxFQUFFLENBQUM7NEJBQ3ZDLHNDQUFzQzs0QkFDdEMsSUFBSSxHQUFHLEtBQUssQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7NEJBQ3ZELFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDOzRCQUNwRSxhQUFhLEdBQUcsWUFBWSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUE7d0JBQ3ZELENBQUM7NkJBQU0sSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDOzRCQUNqQiw2QkFBNkI7NEJBQzdCLGFBQWEsR0FBRyxZQUFZLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxDQUFBO3dCQUNoRCxDQUFDO3dCQUVELE9BQU8sQ0FBQyxJQUFJLEVBQUUsYUFBYSxDQUFDLENBQUE7b0JBQzlCLENBQUM7Z0JBRUgsQ0FBQztZQUNILENBQUMsQ0FBQyxFQUFFLENBQUM7WUFFTCxTQUFTLGNBQWMsQ0FBQyxNQUFjLEVBQUUsYUFBcUI7Z0JBQzNELFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxhQUFhLENBQUMsQ0FBQyxDQUFBLHFDQUFxQztnQkFDNUUsWUFBWSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUEsNENBQTRDO1lBQ2pHLENBQUM7WUFFRCxXQUFXLEVBQUUsQ0FBQztZQUNkLE9BQU8sSUFBSSxDQUFBO1lBRVgsU0FBUyxRQUFRLENBQUMsSUFBbUIsRUFBRSxJQUFZLEVBQUUsYUFBcUI7Z0JBQ3hFLElBQUksQ0FBQyxJQUFJO29CQUFFLE9BQU8sRUFBRSxDQUFDO2dCQUNyQixPQUFPLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxHQUFHLGVBQWUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUE7WUFDNUUsQ0FBQztRQUNILENBQUM7UUFFRCxTQUFTLGVBQWUsQ0FBQyxPQUFlO1lBQ3RDLE9BQU87Z0JBQ0wsRUFBRSxFQUFFLFNBQVMsT0FBTyxFQUFFO2dCQUN0QixFQUFFLEVBQUUsWUFBWSxPQUFPLEVBQUU7Z0JBQ3pCLEVBQUUsRUFBRSxXQUFXLE9BQU8sRUFBRTthQUN6QixDQUFBO1FBQ0gsQ0FBQztJQUNILENBQUM7SUFDQyxnQkFBZ0IsRUFBRSxHQUFHLEVBQUU7UUFDckIsQ0FBQyxTQUFTLG9CQUFvQjtZQUM1QixJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVM7Z0JBQUUsT0FBTztZQUNwQyxNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxRCxJQUFJLENBQUMsV0FBVztnQkFBRSxPQUFPO1lBQ3pCLGlGQUFpRjtZQUNqRixNQUFNLFFBQVEsR0FBRyxRQUFRLENBQUM7Z0JBQ3hCLEVBQUUsRUFBRSxXQUFXO2dCQUNmLEVBQUUsRUFBRSxxQkFBcUI7Z0JBQ3pCLEVBQUUsRUFBRSxjQUFjO2FBQ25CLENBQUMsQ0FBQztZQUNILE1BQU0sR0FBRyxHQUFHLElBQUksTUFBTSxDQUFDO2dCQUNyQixLQUFLLEVBQUUsYUFBYTtnQkFDcEIsS0FBSyxFQUFFLFFBQVE7Z0JBQ2YsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLE9BQU8sRUFBRSxLQUFLLElBQUksRUFBRTtvQkFDbEIsTUFBTSxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxFQUFFLE1BQU0sRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUUsYUFBYSxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQ3JGLENBQUM7YUFDRixDQUFDLENBQUM7WUFFSCxDQUFDLFNBQVMsa0JBQWtCO2dCQUMxQixNQUFNLFdBQVcsR0FBbUIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLDBCQUEwQjtnQkFFN0YsV0FBVyxDQUFDLElBQUksR0FBRyxRQUFRLENBQUM7Z0JBQzVCLFdBQVcsQ0FBQyxFQUFFLEdBQUcsY0FBYyxDQUFDO2dCQUNoQyxXQUFXLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQ3pDLHNCQUFzQixDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDaEQsSUFBSSxRQUFRLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDM0MsV0FBVyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDbEMsUUFBUSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUMsZUFBZSxDQUFDLENBQUM7Z0JBQy9DLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQ3pDLDRCQUE0QixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFFdkMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUVMLENBQUMsU0FBUyxjQUFjO2dCQUN0QixNQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUM3QyxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQztnQkFDakQsWUFBWSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDN0IsYUFBYSxDQUFDO29CQUNaLEdBQUcsRUFBRSxHQUFHO29CQUNSLGFBQWEsRUFBRSxNQUFNO29CQUNyQixRQUFRLEVBQUUsR0FBRyxDQUFDLFFBQVE7b0JBQ3RCLEtBQUssRUFBRSxLQUFLO2lCQUNiLENBQUMsQ0FBQTtZQUNKLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDUCxDQUFDLENBQUMsRUFBRSxDQUFDO0lBRVAsQ0FBQztDQUNGLENBQUMsQ0FBQztBQUdMLEdBQUcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxNQUFNLENBQUM7SUFDcEIsS0FBSyxFQUFFLGFBQWE7SUFDcEIsS0FBSyxFQUFFLFFBQVEsQ0FBQztRQUNkLEVBQUUsRUFBRSxZQUFZO1FBQ2hCLEVBQUUsRUFBRSxvQkFBb0I7UUFDeEIsRUFBRSxFQUFFLG9CQUFvQjtLQUN6QixDQUFDO0lBQ0YsT0FBTyxFQUFFLEdBQUcsRUFBRTtRQUNaLElBQUksUUFBUSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUM7WUFBRSxPQUFPLENBQUMsb0RBQW9EO1FBQ3hHLFlBQVk7UUFDWixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUk7WUFBRSxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLG1EQUFtRDtRQUNyRyxZQUFZLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUM1QixZQUFZLENBQUMsT0FBTyxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUM7UUFDMUMsSUFBSSxRQUFRLEdBQUc7WUFDYixzQkFBc0I7WUFDdEIsVUFBVTtZQUNWLG9DQUFvQztZQUNwQyxtQkFBbUI7WUFDbkIsY0FBYztZQUNkLGlCQUFpQjtZQUNqQixpQkFBaUI7WUFDakIsa0JBQWtCO1lBQ2xCLG9CQUFvQjtZQUNwQixpQkFBaUI7WUFDakIsYUFBYTtZQUNiLHFCQUFxQjtZQUNyQixhQUFhO1lBQ2IsaUJBQWlCO1NBQ2xCLENBQUM7UUFDRixJQUFJLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxFQUMzQyxNQUF5QixDQUFDO1FBQzVCLE1BQU0sQ0FBQyxFQUFFLEdBQUcsYUFBYSxDQUFDO1FBQzFCLE1BQU0sQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFHLE9BQU8sQ0FBQztRQUN2QyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDN0IsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO1lBQ3hCLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzFDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1lBQ3hCLE1BQU0sQ0FBQyxlQUFlLEdBQUcsTUFBTSxDQUFDO1lBQ2hDLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDckIsQ0FBQyxDQUFDLENBQUM7UUFFSCxRQUFRLENBQUM7UUFDVCxZQUFZLENBQUMscUJBQXFCLENBQUMsYUFBYSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQzFELE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFLENBQ3JDLGdCQUFnQixDQUFDLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQ3JDLENBQUM7SUFDSixDQUFDO0NBQ0YsQ0FBQyxDQUFDO0FBRUg7Ozs7OztHQU1HO0FBQ0gsS0FBSyxVQUFVLHdCQUF3QixDQUNyQyxJQUFjLEVBQ2QsUUFBNEQsRUFDNUQsZUFBdUI7SUFFdkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhO1FBQUUsUUFBUSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7SUFDcEUsSUFBSSxHQUFHLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN4QyxHQUFHLENBQUMsRUFBRSxHQUFHLGVBQWUsQ0FBQztJQUN6QixHQUFHLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQztJQUM5QyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FDZixHQUFHLENBQUMsV0FBVyxDQUNiLGFBQWEsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsYUFBYSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQ3hFLENBQ0YsQ0FBQztJQUNGLFFBQVEsQ0FBQyxFQUFFLENBQUMscUJBQXFCLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUMvRCxHQUFHLENBQUMsS0FBSyxDQUFDLG1CQUFtQixHQUFHLDBCQUEwQixDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNyRSxDQUFDO0FBRUQ7Ozs7Ozs7R0FPRztBQUNILEtBQUssVUFBVSwrQkFBK0IsQ0FBQyxJQU85QztJQUNDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTTtRQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUNoRCxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDdEMsSUFBSSxDQUFDLFlBQVksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMscUVBQXFFO1FBQ3hILElBQUksQ0FBQyxNQUFNLENBQUMscUJBQXFCLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLGdEQUFnRDtJQUNwSCxDQUFDO0lBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZO1FBQUUsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLDJCQUEyQixDQUFDLENBQUM7SUFFeEUsQ0FBQyxLQUFLLFVBQVUsZUFBZTtRQUM3QixJQUFJLEdBQUcsR0FBVyxJQUFJLE1BQU0sQ0FBQztZQUMzQixLQUFLLEVBQUUsSUFBSSxDQUFDLFdBQVc7WUFDdkIsS0FBSyxFQUFFLElBQUksQ0FBQyxTQUFTO1lBQ3JCLFFBQVEsRUFBRSxNQUFNLG9CQUFvQixFQUFFLEVBQUUsNEZBQTRGO1lBQ3BJLE1BQU0sRUFBRSxLQUFLLEVBQUUsa1BBQWtQO1lBQ2pRLFFBQVEsRUFBRSxHQUFHLENBQUMsWUFBWTtZQUMxQixPQUFPLEVBQUUsR0FBRyxFQUFFO2dCQUNaLElBQUksYUFBYSxHQUFXLENBQUMsQ0FBQztnQkFDOUIsZ0dBQWdHO2dCQUNoRyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUNqRCxxS0FBcUs7Z0JBQ3JLLElBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzNDLE1BQU0sQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7Z0JBQzNDLGlDQUFpQztnQkFDakMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUM7Z0JBQ2pELHdJQUF3STtnQkFDeEksTUFBTSxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsR0FBRywwQkFBMEIsQ0FDM0QsTUFBTSxFQUNOLFNBQVMsRUFDVCxDQUFDLENBQ0YsQ0FBQztnQkFFRixnWUFBZ1k7Z0JBQ2hZLG9CQUFvQixDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFFekMsb0JBQW9CLENBQUMsS0FBSyxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUM7Z0JBQ2pELElBQUksT0FBTyxHQUFXLENBQUMsQ0FBQztnQkFDeEIsNERBQTREO2dCQUM1RCwwQkFBMEIsQ0FBQyxHQUFHLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxhQUFhLENBQUMsQ0FBQztZQUNsRSxDQUFDO1NBQ0YsQ0FBQyxDQUFDO1FBRUgsQ0FBQyxTQUFTLG1CQUFtQjtZQUMzQixhQUFhLENBQUM7Z0JBQ1osR0FBRyxFQUFFLEdBQUc7Z0JBQ1IsYUFBYSxFQUFFLElBQUksQ0FBQyxZQUFZO2dCQUNoQyxRQUFRLEVBQUUsR0FBRyxDQUFDLFFBQVE7Z0JBQ3RCLEtBQUssRUFBRSxLQUFLO2dCQUNaLE9BQU8sRUFBRSxHQUFHLENBQUMsT0FBTzthQUNyQixDQUFDLENBQUM7WUFDSCxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUM7WUFDNUQsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUNyRCxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsR0FBRyxNQUFNLENBQ2pEO1FBQ0wsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUNMLE9BQU8sR0FBRyxDQUFBO0lBQ1osQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUVMOztPQUVHO0lBQ0gsU0FBUywwQkFBMEIsQ0FDakMsU0FBaUIsRUFDakIsT0FBZSxFQUNmLE9BQXVCLEVBQ3ZCLGFBQXFCO1FBRXJCLElBQUksUUFBZ0IsQ0FBQztRQUVyQixDQUFDLFNBQVMsb0JBQW9CO1lBQzVCLElBQUksU0FBUyxDQUFDLFFBQVEsQ0FBQyxNQUFNLElBQUksYUFBYTtnQkFBRSxPQUFPLENBQUMsMklBQTJJO1lBQ25NLElBQUksSUFBSSxHQUFXLElBQUksTUFBTSxDQUFDO2dCQUM1QixLQUFLLEVBQUUsU0FBUztnQkFDaEIsS0FBSyxFQUFFLFFBQVEsQ0FBQyxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxDQUFDO2dCQUNqRCxRQUFRLEVBQUUsR0FBRyxDQUFDLFlBQVk7YUFDM0IsQ0FBQyxDQUFDO1lBRUgsb0hBQW9IO1lBQ3BILElBQUksU0FBUyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsT0FBTyxHQUFHLGFBQWEsRUFBRSxDQUFDO2dCQUN4RCw2R0FBNkc7Z0JBQzdHLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxFQUFFLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzVDLENBQUM7aUJBQU0sSUFBSSxTQUFTLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxPQUFPLElBQUksYUFBYSxFQUFFLENBQUM7Z0JBQ2hFLElBQUksQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDO29CQUNwQixFQUFFLEVBQUUsTUFBTTtvQkFDVixFQUFFLEVBQUUsUUFBUTtpQkFDYixDQUFDLENBQUM7Z0JBQ0gsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLEVBQUUsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDN0MsQ0FBQztZQUVELElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTztnQkFBRSxPQUFPLENBQUMsK0VBQStFO1lBQzFHLGFBQWEsQ0FBQztnQkFDWixHQUFHLEVBQUUsSUFBSTtnQkFDVCxhQUFhLEVBQUUsb0JBQW9CO2dCQUNuQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7Z0JBQ3ZCLEtBQUssRUFBRSxLQUFLO2dCQUNaLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTzthQUN0QixDQUFDLENBQUMsQ0FBQyxnYUFBZ2E7WUFFcGEsU0FBUyxjQUFjLENBQUMsVUFBbUIsSUFBSTtnQkFDN0MsNEZBQTRGO2dCQUM1RixPQUFPLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztnQkFDdkIsc0hBQXNIO2dCQUN0SCxvQkFBb0IsQ0FBQyxhQUFhLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFDOUQsZ0VBQWdFO2dCQUNoRSxJQUFJLE9BQU87b0JBQUUsT0FBTyxJQUFJLGFBQWEsQ0FBQzs7b0JBQ2pDLE9BQU8sR0FBRyxDQUFDLENBQUM7Z0JBRWpCLDREQUE0RDtnQkFDNUQsMEJBQTBCLENBQUMsU0FBUyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsYUFBYSxDQUFDLENBQUM7WUFDekUsQ0FBQztRQUNILENBQUMsQ0FBQyxFQUFFLENBQUM7UUFFTCxDQUFDLFNBQVMsd0JBQXdCO1lBQ2hDLEtBQ0UsSUFBSSxDQUFDLEdBQUcsT0FBTyxFQUNmLENBQUMsR0FBRyxPQUFPLEdBQUcsYUFBYSxJQUFJLENBQUMsR0FBRyxTQUFTLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFDNUQsQ0FBQyxFQUFFLEVBQ0gsQ0FBQztnQkFDRCwrRUFBK0U7Z0JBQy9FLFFBQVEsR0FBRyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNqQyxJQUFJLENBQUMsZUFBZSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFO29CQUFFLE9BQU8sQ0FBQSxtTUFBbU07Z0JBQ3RQLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRTtvQkFBRSxPQUFPLENBQUMseU9BQXlPO2dCQUMvUixhQUFhLENBQUM7b0JBQ1osR0FBRyxFQUFFLFFBQVE7b0JBQ2IsYUFBYSxFQUFFLE9BQU87b0JBQ3RCLFFBQVEsRUFBRSxRQUFRLENBQUMsUUFBUTtvQkFDM0IsS0FBSyxFQUFFLEtBQUs7b0JBQ1osT0FBTyxFQUFFLFFBQVEsQ0FBQyxPQUFPO2lCQUMxQixDQUFDLENBQUM7WUFDTCxDQUFDO1FBQ0gsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUNQLENBQUM7SUFBQSxDQUFDO0lBR0Y7OztPQUdHO0lBQ0gsS0FBSyxVQUFVLG9CQUFvQjtRQUNqQyxJQUFJLElBQWMsQ0FBQztRQUNuQixJQUFJLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUN4QywrSkFBK0o7WUFDL0osSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUM7Z0JBQUUsT0FBTztZQUMvQixJQUFJLEtBQUssR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDeEMsSUFBSSxHQUFHLEdBQUcsSUFBSSxNQUFNLENBQUM7Z0JBQ25CLEtBQUssRUFBRSxLQUFLLEVBQUUsbUpBQW1KO2dCQUNqSyxLQUFLLEVBQUUsUUFBUSxDQUFDO29CQUNkLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsa2FBQWthO29CQUNuZCxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLGlDQUFpQztpQkFDbkYsQ0FBQztnQkFDRixTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSwySkFBMko7Z0JBQ3RMLFFBQVEsRUFBRSwwQkFBMEI7Z0JBQ3BDLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQzthQUN0QyxDQUFDLENBQUM7WUFDSCxPQUFPLEdBQUcsQ0FBQztRQUNiLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxlQUFlO1lBQ2pCLElBQUk7aUJBQ0QsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLEVBQUUsSUFBSSxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFBLDBVQUEwVTtpQkFDdlgsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUNULEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDO2dCQUM1QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQSwwR0FBMEc7Z0JBQzVJLE9BQU8sR0FBRyxDQUFBO1lBQ1osQ0FBQyxDQUFDO2lCQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUVwQyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUEsZ0VBQWdFO1FBRXpHLFNBQVMsVUFBVSxDQUFDLEdBQVcsRUFBRSxLQUFhO1lBQzVDLElBQUksS0FBSyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxTQUFTLENBQUE7WUFDekMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNuQixJQUFJLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzlDLElBQUksQ0FBQyxLQUFLO2dCQUFFLE9BQU87WUFDbkIsSUFBSSxTQUFTLEdBQ1gsS0FBSyxDQUFDLElBQUksQ0FDUixZQUFZLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FFeEQsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFFLEtBQUssSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ2pELHdFQUF3RTtZQUN4RSwyQkFBMkIsRUFBRSxDQUFDO1lBRTlCLElBQUksS0FBSyxHQUNQLEtBQUssQ0FBQyxJQUFJLENBQ1IsWUFBWSxDQUFDLFFBQTRDLENBQzFEO2lCQUNFLElBQUksQ0FDSCxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQ04sR0FBRyxDQUFDLE9BQU8sQ0FBQyxjQUFjO2dCQUMxQixHQUFHLENBQUMsT0FBTyxDQUFDLGNBQWMsS0FBSyxTQUFTLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FDekQsQ0FBQTtZQUVMLElBQUksS0FBSztnQkFBRSxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUM7WUFFMUIsc0ZBQXNGO1lBQ3RGLElBQUksZUFBZSxHQUFHLFdBQVcsQ0FBQztnQkFDaEMsS0FBSyxFQUFFLEtBQUs7Z0JBQ1osU0FBUyxFQUFFLEdBQUcsQ0FBQyxTQUFTO2dCQUN4QixTQUFTLEVBQUUsU0FBUztnQkFDcEIsaUJBQWlCLEVBQUUsS0FBSztnQkFDeEIsaUJBQWlCLEVBQUUsS0FBSzthQUN6QixDQUFDLElBQUksU0FBUyxDQUFDO1lBRWhCLElBQUksQ0FBQyxlQUFlO2dCQUFFLE9BQU87WUFFN0IsU0FBUyxDQUFDLE9BQU8sQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1lBQ3pDLFNBQVMsQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztZQUNoQyxJQUFJLENBQUMsWUFBWSxDQUFDLHFCQUFxQixDQUFDLFVBQVUsRUFBRSxTQUFTLENBQUMsQ0FBQztZQUcvRCxxREFBcUQ7WUFDckQsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBRXhCLHlCQUF5QjtZQUN6QixnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDckMsQ0FBQztRQUFBLENBQUM7SUFDSixDQUFDO0FBRUgsQ0FBQztBQUVEOztHQUVHO0FBQ0gsU0FBUyxtQkFBbUIsQ0FBQyxTQUF5QztJQUNwRSxJQUFJLE1BQU0sR0FBRyx1QkFBdUIsQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLE1BQU0sR0FBRyxnQkFBZ0IsRUFBRSxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDeEcsSUFBSSxDQUFDLE1BQU07UUFBRSxPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsNENBQTRDLENBQUMsQ0FBQztJQUM5RSxJQUFJLEdBQWUsQ0FBQztJQUVwQixDQUFDLFNBQVMsY0FBYztRQUN0QixJQUFJLEtBQUssR0FBRyxNQUFNLENBQUMsWUFBWSxHQUFHLDRCQUE0QixDQUFDO1FBQy9ELElBQUksTUFBTSxLQUFLLE9BQU8sQ0FBQyxRQUFRO1lBQzdCLEtBQUssSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxjQUFjLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOztZQUU5RSxLQUFLLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFNUUsR0FBRyxHQUFHLFNBQVMsQ0FBQyxLQUFLLEVBQUUsV0FBVyxDQUFDLElBQUksU0FBUyxDQUFDO1FBQ2pELElBQUksQ0FBQyxHQUFHO1lBQUUsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLCtCQUErQixDQUFDLENBQUM7UUFFOUQsSUFBSSxNQUFNLEtBQUssT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ2pDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQztnQkFBRSxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUEsMERBQTBEO2lCQUMvRyxDQUFDO2dCQUNKLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUEsd0ZBQXdGO2dCQUNwSCx1QkFBdUIsQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLFlBQVksR0FBRyxnQkFBZ0IsRUFBRSxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQSxrREFBa0Q7WUFDOUosQ0FBQztRQUVILENBQUM7UUFFRCwyQkFBMkIsQ0FBQztZQUMxQixNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUM7WUFDYixTQUFTLEVBQUUsZ0JBQWdCO1lBQzNCLFFBQVEsRUFBRTtnQkFDUixFQUFFLEVBQUUsTUFBTTtnQkFDVixhQUFhLEVBQUUsYUFBYTthQUM3QjtZQUNELFNBQVMsRUFBRSxTQUFTO1NBQ3JCLENBQUMsQ0FBQTtJQUNKLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFFTCxDQUFDLFNBQVMsdUJBQXVCO1FBQy9CLE1BQU0sTUFBTSxHQUFHLElBQUksTUFBTSxDQUFDO1lBQ3hCLEtBQUssRUFBRSxnQkFBZ0I7WUFDdkIsS0FBSyxFQUFFLFFBQVEsQ0FBQztnQkFDZCxFQUFFLEVBQUUsZ0NBQWdDO2dCQUNwQyxFQUFFLEVBQUUscUNBQXFDO2FBQzFDLENBQUM7WUFDRixRQUFRLEVBQUUsR0FBRyxDQUFDLFlBQVk7WUFDMUIsU0FBUyxFQUFFLGdCQUFnQjtZQUMzQixXQUFXLEVBQUUsSUFBSSxnQkFBZ0IsRUFBRTtZQUNuQyxlQUFlLEVBQUUsQ0FBQyxNQUFNLENBQUMsWUFBWSxHQUFHLHNCQUFzQixDQUFDO1NBQ2hFLENBQUMsQ0FBQztRQUVILE1BQU0sT0FBTyxHQUFHLG1CQUFtQixDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsTUFBTSxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBQ3ZFLENBQUMsQ0FBQyxFQUFFLENBQUM7QUFHUCxDQUFDO0FBQ0Q7Ozs7O0dBS0c7QUFDSCxTQUFTLGtCQUFrQixDQUN6QixZQUE0QixFQUM1QixHQUFZLEVBQ1osUUFBZ0IsS0FBSztJQUVyQixZQUFZLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7SUFDdEMsR0FBRyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUN6RSxZQUFZLENBQUMsS0FBSyxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUM7QUFDNUMsQ0FBQztBQUFBLENBQUM7QUFFRjs7Ozs7OztHQU9HO0FBQ0gsS0FBSyxVQUFVLGdDQUFnQyxDQUM3QyxhQUFxQixFQUNyQixRQUE0RCxFQUM1RCxZQUE0QyxZQUFZLEVBQ3hELGlCQUEwQixLQUFLLEVBQy9CLFdBQW9CO0lBRXBCLFlBQVk7SUFDWixJQUFJLENBQUMsYUFBYTtRQUFFLE9BQU87SUFDM0IsSUFBSSxTQUFTLEtBQUssWUFBWSxJQUFJLGNBQWM7UUFDOUMsU0FBUyxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDM0IsSUFBSSxTQUFTLENBQUMsUUFBUSxDQUFDLE1BQU0sS0FBSyxDQUFDO1FBQ2pDLFNBQVMsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ3ZELElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRTtRQUFFLFFBQVEsQ0FBQyxFQUFFLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQWdCLENBQUM7SUFDckUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhO1FBQUUsUUFBUSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7SUFDcEUsSUFBSSxDQUFDLFdBQVc7UUFBRSxXQUFXLEdBQUcsa0JBQWtCLENBQUM7SUFHbkQsTUFBTSxZQUFZLEdBQUcsa0JBQWtCLENBQUMsYUFBYSxDQUFDLENBQUM7SUFFdkQsTUFBTSxPQUFPLEdBQUcsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRS9GLElBQUksQ0FBQyxPQUFPO1FBQ1YsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUNoQiwyREFBMkQsQ0FDNUQsQ0FBQztJQUVKLE1BQU0sU0FBUyxHQUFHLFlBQVksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUM5QyxNQUFNLE1BQU0sR0FBaUIsRUFBRSxDQUFDO0lBQ2hDLE1BQU0sU0FBUyxHQUNiLE9BQU87U0FDSixNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRyxNQUFNLENBQUMsS0FBSyxrQkFBa0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBLG1FQUFtRTtTQUN4SSxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQSxpQ0FBaUM7SUFDdkUsSUFBSSxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUM7UUFDdEIsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFBLHFIQUFxSDs7UUFDdkksU0FBUzthQUNYLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUNmLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsU0FBUyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksU0FBUyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUEsQ0FBQSxpT0FBaU87SUFHblYsSUFBSSxhQUFhLEdBQUcsTUFBTSxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyxFQUFFLENBQUMsTUFBTSw2QkFBNkIsQ0FBQyxLQUFLLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRXhILE9BQU8sMkJBQTJCLENBQUM7UUFDakMsTUFBTSxFQUFFLGFBQWE7UUFDckIsU0FBUyxFQUFFLFNBQVM7UUFDcEIsUUFBUSxFQUFFLFFBQVE7UUFDbEIsU0FBUyxFQUFFLFlBQVk7S0FDeEIsQ0FBQyxDQUFDO0FBRUwsQ0FBQztBQUNEOzs7OztHQUtHO0FBQ0gsS0FBSyxVQUFVLDZCQUE2QixDQUFDLE9BQW1CLEVBQUUsS0FBZTtJQUMvRSxJQUFJLENBQUMsT0FBTyxJQUFJLENBQUMsS0FBSztRQUFFLE9BQU87SUFDL0IsS0FBSyxHQUFHLEtBQUssRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwQyxNQUFNLGtCQUFrQixHQUFHLE9BQU87U0FDL0IsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxVQUFVLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBLHdMQUF3TDtJQUU3UCxJQUFJLGtCQUFrQixDQUFDLE1BQU0sR0FBRyxDQUFDO1FBQUUsT0FBTyxPQUFPLENBQUMsQ0FBQSxpREFBaUQ7SUFFbkcsSUFBSSxLQUFLLEdBQWdDLElBQUksR0FBRyxFQUFFLENBQUMsQ0FBQSwwSkFBMEo7SUFFN00sTUFBTSxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBRXJCLEtBQUssTUFBTSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFDMUIscUZBQXFGO1FBQ3JGLElBQUksa0JBQWtCLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQztZQUNsQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsTUFBTSx5QkFBeUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDOztZQUNyRCxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUEsc0dBQXNHO0lBQ2pJLENBQUM7SUFHRCxPQUFPLFNBQVMsQ0FBQztJQUVqQixLQUFLLFVBQVUseUJBQXlCLENBQUMsR0FBYTtRQUNwRCxJQUFJLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxNQUFNLEtBQUssQ0FBQztZQUFFLE9BQU8sRUFBRSxDQUFDO1FBRXhDLE1BQU0sYUFBYSxHQUFhLEVBQUUsQ0FBQztRQUVuQyxJQUFJLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxHQUFHLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBLHFFQUFxRTtRQUUzRyxHQUFHLEdBQUcsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUEsdURBQXVEO1FBRWpGLEtBQUssTUFBTSxJQUFJLElBQUksS0FBSyxFQUFFLENBQUM7WUFDekIsMkdBQTJHO1lBQzNHLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxjQUFjLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQSx3REFBd0Q7UUFDOUcsQ0FBQztRQUVELE1BQU0sUUFBUSxHQUFHLE1BQU0sV0FBVyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUU5QyxJQUFJLEdBQUcsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUM7WUFDNUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxhQUFhLENBQUMsQ0FBQyxDQUFBLDBEQUEwRDs7WUFDeEYsT0FBTyxDQUFDLFFBQVEsRUFBRSxHQUFHLHVCQUF1QixDQUFDLGFBQWEsRUFBRSxLQUFLLEVBQUUsR0FBRyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ25ILENBQUM7SUFFRCxLQUFLLFVBQVUsY0FBYyxDQUFDLElBQVksRUFBRSxHQUFXO1FBQ3JELElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLGVBQWUsRUFBRSxlQUFlLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQSx3SEFBd0g7UUFDbk0sTUFBTSxXQUFXLEdBQUcsTUFBTSxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQSwyRUFBMkU7UUFDM0gsSUFBSSxLQUFlLEVBQUUsTUFBMEIsQ0FBQztRQUVoRCxNQUFNLE1BQU0sR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRWpDLE1BQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQSxzS0FBc0s7UUFFbE0sSUFBSSxJQUFJLEdBQ04sTUFBTSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFDLEdBQUcsRUFBQyxFQUFFO1lBQ3JDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsV0FBVyxDQUFDLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLE1BQU0sR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQSxDQUFBLGlGQUFpRjtZQUM5SixJQUFJLENBQUMsYUFBYSxJQUFJLENBQUMsV0FBVztnQkFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFBLG9EQUFvRDtZQUVsRyxNQUFNLEdBQUcsTUFBTSxPQUFPLENBQUMsR0FBRyxDQUN4QixXQUFXO2lCQUNSLEtBQUssQ0FBQyxHQUFHLENBQUM7aUJBQ1YsR0FBRyxDQUFDLEtBQUssRUFBQyxLQUFLLEVBQUMsRUFBRTtnQkFDakIsS0FBSyxHQUFHLFVBQVUsQ0FBQyxLQUFLLEVBQUUsYUFBYSxDQUFDLENBQUMsQ0FBQSwySEFBMkg7Z0JBQ3BLLE9BQU8sTUFBTSxrQkFBa0IsQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLGFBQWEsRUFBRSxLQUFLLENBQUMsSUFBSSxrQ0FBa0MsQ0FBQTtZQUMzRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBSVIsSUFBSSxNQUFNLEtBQUssS0FBSztnQkFDbEIsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsMENBQTBDO1lBQ3JFLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUUzQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRU4sT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXZCLFNBQVMsVUFBVSxDQUFDLEtBQVksRUFBRSxPQUFjO1lBQzlDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztnQkFBRSxPQUFPLEtBQUssQ0FBQztZQUV2RCxNQUFNLE1BQU0sR0FBRyxlQUFlLENBQUMsT0FBTyxFQUFFLFlBQVksQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLENBQUM7Z0JBQ3hFLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFdEMsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRTVELENBQUM7UUFBQSxDQUFDO0lBRUosQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxLQUFLLFVBQVUsV0FBVyxDQUFDLEdBQVc7UUFDcEMsSUFBSSxDQUFDLEdBQUc7WUFBRSxPQUFPLEVBQUUsQ0FBQztRQUVwQixNQUFNLFFBQVEsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLEtBQUssRUFBRSxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUEsOEVBQThFO1FBRW5KLE1BQU0sTUFBTSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFakMsTUFBTSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBRTtZQUNoRCxrSEFBa0g7WUFDbEgsSUFBSSxDQUFDLENBQUMsZUFBZSxFQUFFLGVBQWUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7Z0JBQUUsT0FBTztZQUMvRCxNQUFNLFFBQVEsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUE7UUFDN0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVKLE9BQU8sUUFBUSxDQUFDO1FBRWhCLEtBQUssVUFBVSxRQUFRLENBQUMsSUFBWSxFQUFFLEtBQWE7WUFDakQsTUFBTSxLQUFLLEdBQUcsTUFBTSxlQUFlLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ2pELE1BQU0sSUFBSSxHQUFHLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLE1BQU0sQ0FBQyxDQUFDO1lBQ3hELElBQUksQ0FBQyxJQUFJO2dCQUFFLE9BQU87WUFDbEIsTUFBTSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3hELE1BQU0sR0FBRyxHQUFHLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUV4RCxRQUFRLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssS0FBSyxXQUFXLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFBO1lBRXhFLFNBQVMsV0FBVyxDQUFDLEVBQVUsRUFBRSxHQUFXLEVBQUUsSUFBZTtnQkFDM0QsbUNBQW1DO2dCQUNuQyxJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQSxxQ0FBcUM7Z0JBQ3ZGLElBQUksTUFBYyxDQUFDO2dCQUVuQixJQUFJLE1BQU0sS0FBSyxLQUFLLEVBQUUsQ0FBQztvQkFDckIsTUFBTSxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7d0JBQ3hCLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ2pDLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQy9CLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUM7NEJBQ3pCLE9BQU8sR0FBRyxLQUFLLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUE7d0JBQ2hDLE9BQU8sR0FBRyxLQUFLLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFBO29CQUM3QyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQSx3QkFBd0I7Z0JBQ3ZDLENBQUM7cUJBQ0ksSUFBSSxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUM7b0JBQ3ZCLE1BQU0sR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhO3FCQUM3QixJQUFJLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUM7b0JBQzFCLE1BQU0sR0FBRyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUEsQ0FBQyxhQUFhO29CQUN4RCxNQUFNLElBQUksR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFBLGlCQUFpQjtvQkFDdkUsTUFBTSxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLG9CQUFvQjtnQkFDdkUsQ0FBQztnQkFFRCxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQztvQkFDM0IsTUFBTSxhQUFhLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUU1RCxNQUFNLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQzNCLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUNoQyxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt5QkFDbEMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUE7Z0JBRXpCLENBQUM7Z0JBQ0QsT0FBTyxNQUFNLENBQUEsQ0FBQyxxQkFBcUI7WUFFckMsQ0FBQztRQUNILENBQUM7SUFFSCxDQUFDO0lBR0Q7Ozs7T0FJRztJQUNILFNBQVMsY0FBYyxDQUFDLEdBQVc7UUFDakMsT0FBTyxHQUFHLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUM7YUFDNUIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDO2FBQzlCLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksU0FBUyxDQUFDO0lBQ3pDLENBQUM7SUFFRDs7Ozs7OztPQU9HO0lBQ0gsS0FBSyxVQUFVLGtCQUFrQixDQUFDLElBQVksRUFBRSxNQUFjLEVBQUUsYUFBcUIsRUFBRSxNQUFjO1FBRW5HLElBQUksTUFBTSxLQUFLLEtBQUssSUFBSSxNQUFNLENBQUMsYUFBYSxDQUFDO1lBQUUsYUFBYSxHQUFHLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUEsNElBQTRJO1FBRWxQLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLE1BQU0sR0FBRyxHQUFHLEdBQUcsYUFBYSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQztRQUV2RyxJQUFJLElBQUksS0FBSyxJQUFJO1lBQUUsSUFBSSxHQUFHLElBQUksQ0FBQztRQUMvQixJQUFJLE1BQU07WUFDUixPQUFPLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBRXRELElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNWLE9BQU8sSUFBSSxLQUFLLENBQUMsNERBQTRELENBQUMsQ0FBQztRQUNqRixDQUFDO1FBQUEsQ0FBQztRQUVGLElBQUksQ0FBQyxhQUFhLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUU5QixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFFLGFBQWEsRUFBRSxXQUFXLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDcEUsT0FBTyxJQUFJLEtBQUssQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1FBQy9DLENBQUM7UUFBQSxDQUFDO1FBQ0YsSUFBSSxDQUFDLE1BQU0sSUFBSSxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDO1lBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQ2pDLE9BQU8sSUFBSSxLQUFLLENBQUMsMEJBQTBCLENBQUMsQ0FBQztRQUMvQyxDQUFDO1FBQUEsQ0FBQyxDQUFBLGdDQUFnQztRQUNsQyxNQUFNLEtBQUssR0FBVSxNQUFNLGVBQWUsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLEtBQUs7WUFDUixPQUFPLElBQUksS0FBSyxDQUFDLDBCQUEwQixDQUFDLENBQUM7UUFHL0MsTUFBTSxhQUFhLEdBQWlCLGVBQWUsQ0FBQyxhQUFhLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztRQUU3RixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxhQUFhLENBQUMsQ0FBQztZQUMvQyxPQUFPLElBQUksS0FBSyxDQUFDLDBCQUEwQixDQUFDLENBQUM7UUFDL0MsQ0FBQztRQUFBLENBQUM7UUFFRixLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxHQUFHLEdBQUcsR0FBRyxhQUFhLEdBQUcsR0FBRyxHQUFHLElBQUksRUFBRSxhQUFhLENBQUMsQ0FBQyxDQUFBO1FBRXJFLE1BQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDOUIsSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRSxDQUFDO1lBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQ2pDLE9BQU8sSUFBSSxLQUFLLENBQUMsMkhBQTJILE1BQU0sZUFBZSxhQUFhLEVBQUUsQ0FBQyxDQUFDO1FBQ3BMLENBQUM7UUFBQSxDQUFDO1FBQ0osT0FBTyxjQUFjLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRTVDLFNBQVMsY0FBYyxDQUFDLE9BQXFCLEVBQUUsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFXO1lBRW5FLENBQUMsU0FBUyxhQUFhO2dCQUNyQiwwSUFBMEk7Z0JBQzFJLE9BQU8sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUV0RixPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUk7b0JBQUUsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQ2hFLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFFTCxNQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxLQUFLLENBQUMsQ0FBQztZQUNqRSxJQUFJLENBQUMsS0FBSztnQkFBRSxPQUFPLElBQUksS0FBSyxDQUFDLDRCQUE0QixDQUFDLENBQUM7WUFDM0QsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7WUFDOUQsSUFBSSxDQUFDLElBQUk7Z0JBQUUsT0FBTyxJQUFJLEtBQUssQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO1lBQ3pELE9BQU8sT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUNwRSxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQ2pDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNkLENBQUM7SUFFSCxDQUFDO0FBQ0gsQ0FBQztBQUdEOzs7Ozs7Ozs7R0FTRztBQUNILFNBQVMsdUJBQXVCLENBQUMsU0FBbUIsRUFBRSxLQUFlLEVBQUUsR0FBVyxFQUFFLFFBQWdCLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUs7SUFDL0gsSUFBSSxHQUFHLEdBQUcsQ0FBQztRQUFFLEdBQUcsR0FBRyxDQUFDLENBQUM7SUFFckIsSUFBSSxHQUFHLEdBQUcsQ0FBQyxFQUFFLENBQUM7UUFDWixLQUFLLENBQUMscUlBQXFJLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsR0FBRyxXQUFXLEdBQUcsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDeE0sT0FBTztJQUNULENBQUM7SUFFRCxNQUFNLFVBQVUsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsR0FBRyxHQUFHLENBQUMsRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEYsSUFBSSxDQUFDLFVBQVU7UUFBRSxPQUFPO0lBRXhCLE1BQU0sR0FBRyxHQUFHLE1BQU0sQ0FBQyxjQUFjLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFFeEMsSUFBSSxNQUFNLEdBQUcsVUFBVTtTQUNwQixHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDMUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUU3QixNQUFNLEdBQUcsTUFBTTtTQUNaLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQSx1RkFBdUY7U0FDeEksTUFBTSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUEseUNBQXlDO0lBR3BHLEtBQUs7U0FDRixPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDZCxJQUFJLElBQUksS0FBSyxlQUFlO1lBQUUsT0FBTyxDQUFBLG9MQUFvTDtRQUN6TixJQUFJLElBQUksR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUEseURBQXlEO1FBQy9ILElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUNsQixJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7WUFBRSxPQUFPLENBQUEsOERBQThEO1FBRTFGLFNBQVMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQztZQUNsQyxNQUFNO2lCQUNILEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFO2dCQUMzQixNQUFNLEtBQUssR0FBRyx1QkFBdUIsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQ3BELElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFBLGdaQUFnWjtnQkFDL2EsT0FBTyxLQUFLLElBQUksRUFBRSxDQUFBO1lBRXBCLENBQUMsQ0FBQztpQkFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFaEIsU0FBUyx1QkFBdUIsQ0FBQyxLQUFhLEVBQUUsS0FBWTtZQUMxRCx1TEFBdUw7WUFDdkwsSUFBSSxDQUFDLEtBQUs7Z0JBQUUsT0FBTyxFQUFFLENBQUM7WUFDdEIsSUFBSSxPQUFPLEdBQVcsRUFBRSxDQUFDLENBQUEsdUZBQXVGO1lBRWhILElBQUksS0FBSyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUM7Z0JBQzlCLG9VQUFvVTtnQkFFcFUsSUFBSSxDQUFDLEdBQUcsS0FBSyxHQUFHLENBQUMsQ0FBQztnQkFDbEIsT0FBTyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7b0JBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBRSw2VEFBNlQ7Z0JBQzlYLE9BQU8sR0FBRyxPQUFPLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFHLEVBQUUsR0FBRyxDQUFBO1lBQ3ZDLENBQUM7WUFHSCxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEtBQUssS0FBSyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDekQsSUFBSSxDQUFDLEtBQUs7Z0JBQUUsT0FBTyxFQUFFLENBQUM7WUFDdEIsT0FBTyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3hCLENBQUM7SUFFSCxDQUFDLENBQUMsQ0FBQztJQUVMLE9BQU8sdUJBQXVCLEVBQUUsQ0FBQztJQUVqQyxTQUFTLHVCQUF1QjtRQUM5QixJQUFJLEtBQUssR0FBZSxFQUFFLEVBQUUsTUFBZ0IsQ0FBQztRQUM3QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQzFDLE1BQU0sR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2xDLEtBQUssSUFBSSxFQUFFLEdBQUcsQ0FBQyxFQUFFLEVBQUUsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7Z0JBQzFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztvQkFDZixLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUN2QyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsTUFBTSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsS0FBSyxHQUFHLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyw2T0FBNk87Z0JBQ3ZWLENBQUM7Z0JBQ0QsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ3RDLENBQUM7UUFDSCxDQUFDO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0FBQ0gsQ0FBQztBQUdEOztHQUVHO0FBQ0gsS0FBSyxVQUFVLFdBQVc7SUFDeEIsOEVBQThFO0lBQzlFLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQzlCLENBQUM7QUFFRDs7Ozs7OztHQU9HO0FBQ0gsS0FBSyxVQUFVLCtCQUErQixDQUFDLElBTzlDO0lBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNO1FBQ2QsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUNoQiwwREFBMEQsQ0FDM0QsQ0FBQztJQUNKLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUztRQUFFLElBQUksQ0FBQyxTQUFTLEdBQUcsWUFBWSxDQUFDO0lBQ25ELElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxZQUFZLElBQUksSUFBSSxDQUFDLGNBQWM7UUFDeEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBQ2hDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsTUFBTSxLQUFLLENBQUM7UUFDdEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQzVELElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUztRQUNqQixJQUFJLENBQUMsU0FBUyxHQUFHLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFFN0MsQ0FBQyxTQUFTLHdCQUF3QjtRQUNoQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU07WUFBRSxPQUFPO1FBQ3pCLGdFQUFnRTtRQUVoRSxNQUFNLE1BQU0sR0FBRyxJQUFJLE1BQU0sQ0FBQztZQUN4QixLQUFLLEVBQUUsV0FBVztZQUNsQixLQUFLLEVBQUUsUUFBUSxDQUFDO2dCQUNkLEVBQUUsRUFBRSxnQ0FBZ0M7Z0JBQ3BDLEVBQUUsRUFBRSxxQ0FBcUM7YUFDMUMsQ0FBQztZQUNGLFFBQVEsRUFBRSxHQUFHLENBQUMsWUFBWTtZQUMxQixTQUFTLEVBQUUsZ0JBQWdCO1lBQzNCLFdBQVcsRUFBRSxJQUFJLGdCQUFnQixFQUFFO1lBQ25DLGVBQWUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEdBQUcsYUFBYSxDQUFDO1NBQ3ZELENBQUMsQ0FBQztRQUVILE1BQU0sT0FBTyxHQUFHLG1CQUFtQixDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsU0FBUyxDQUFDLFFBQVEsQ0FBQyxFQUFFLHNCQUFxQyxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBRTNILENBQUMsQ0FBQyxFQUFFLENBQUM7SUFFTCxNQUFNLDRCQUE0QixFQUFFLENBQUM7SUFFckMsQ0FBQyxTQUFTLDZCQUE2QjtRQUNyQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTTtZQUFFLE9BQU8sQ0FBQyxvS0FBb0s7UUFFN00sSUFBSSxrQkFBa0IsS0FBSyxZQUFZLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssTUFBTSxDQUFDLGFBQWE7WUFBRSxPQUFPLENBQUEsNkpBQTZKO1FBRWhRLGNBQWMsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLFFBQVEsQ0FBQyxFQUFFLGtCQUFpQyxFQUFFLGFBQWEsQ0FBQyxDQUFDLENBQUEsMkJBQTJCO1FBRXBILGNBQWMsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLGVBQWUsQ0FBQyxFQUFFLGFBQWEsQ0FBQyxDQUFDLENBQUEsaUNBQWlDO1FBRTlGLFNBQVMsY0FBYyxDQUFDLEtBQWEsRUFBRSxFQUFlLEVBQUUsUUFBd0I7WUFDOUUsSUFBSSxlQUFlLEdBQWEsd0JBQXdCLENBQ3RELElBQUksQ0FBQyxNQUFNLEVBQ1gsSUFBSSxDQUFDLE1BQU0sQ0FDWixDQUFDLENBQUMsNkZBQTZGO1lBQ2hHLHlKQUF5SjtZQUN6SixJQUFJLFFBQVEsR0FBZSxtQkFBbUIsQ0FBQyxJQUFJLENBQ2pELENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUM5RCxDQUFDLENBQUMsNlJBQTZSO1lBRWhTLElBQUksQ0FBQyxRQUFRLElBQUksUUFBUSxDQUFDLE1BQU0sS0FBSyxDQUFDO2dCQUFFLE9BQU87WUFFL0MsMkJBQTJCLENBQUM7Z0JBQzFCLE1BQU0sRUFBRSxDQUFDLFFBQVEsQ0FBQztnQkFDbEIsU0FBUyxFQUFFLGdCQUFnQjtnQkFDM0IsUUFBUSxFQUFFO29CQUNSLEVBQUUsRUFBRSxFQUFFO29CQUNOLGFBQWEsRUFBRSxRQUFRO2lCQUN4QjtnQkFDRCxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7YUFDMUIsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztJQUNILENBQUMsQ0FBQyxFQUFFLENBQUM7SUFFTDs7S0FFQztJQUNELEtBQUssVUFBVSw0QkFBNEI7UUFDekMsSUFBSSxNQUFNLEdBQWlCLElBQUksQ0FBQyxNQUFNLElBQUksZ0JBQWdCLEVBQUUsQ0FBQztRQUU3RCxJQUFJLENBQUMsTUFBTSxJQUFJLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQztZQUFFLE9BQU8sSUFBSSxLQUFLLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxDQUFDLGtGQUFrRjtRQUVsSyxNQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTTthQUNyQixHQUFHLENBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyxFQUFFO1lBQ2pCLDZFQUE2RTtZQUM3RSxzS0FBc0s7WUFDdEssTUFBTSxRQUFRLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzdDLElBQUksUUFBUSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUM7Z0JBQUUsT0FBTztZQUNuQyxJQUFJLElBQVksQ0FBQztZQUNqQixRQUFRLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDO1lBRy9ELElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksS0FBSyxRQUFRO2dCQUNuQyxPQUFPO1lBQ1QsSUFBSSxNQUFtQixDQUFDO1lBRXhCLElBQUksSUFBSSxLQUFLLFFBQVE7Z0JBQ25CLE1BQU0sR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQ3RCLElBQUksa0JBQWtCLEtBQUssWUFBWSxDQUFDLFVBQVUsSUFBSSxNQUFNLENBQUMsNEJBQTRCLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO2dCQUM1RyxNQUFNLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUEsaUdBQWlHOztnQkFDM0gsTUFBTSxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUVqQyxJQUFJLENBQUMsTUFBTTtnQkFBRSxPQUFPO1lBRXBCLE1BQU0sSUFBSSxHQUFHLE1BQU0saUJBQWlCLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBRXRELENBQUMsU0FBUyxVQUFVO2dCQUNsQixJQUFJLGtCQUFrQixLQUFLLFlBQVksQ0FBQyxVQUFVO29CQUNoRCxPQUFPO2dCQUNULElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxNQUFNLENBQUMsYUFBYTtvQkFDdEMsT0FBTztnQkFFVCxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUczRSxJQUFJLElBQUksS0FBSyxRQUFRO29CQUNuQixPQUFPO2dCQUVULElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUNqQixRQUFRO3FCQUNMLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxjQUFjLENBQUM7cUJBQzNDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUMsSUFBSSxTQUFTLENBQUMsQ0FBQztnQkFFMUMsU0FBUyxhQUFhLENBQUMsSUFBWSxFQUFFLENBQVM7b0JBQzVDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO3dCQUFFLE9BQU87b0JBQ3ZCLE1BQU0sTUFBTSxHQUFHO3dCQUNiOzRCQUNFLEVBQUUsRUFBRSxhQUFhOzRCQUNqQixFQUFFLEVBQUUsY0FBYzs0QkFDbEIsRUFBRSxFQUFFLFlBQVk7eUJBQ2pCO3dCQUNEOzRCQUNFLEVBQUUsRUFBRSxRQUFROzRCQUNaLEVBQUUsRUFBRSxZQUFZOzRCQUNoQixFQUFFLEVBQUUsZUFBZTt5QkFDcEI7cUJBQ0YsQ0FBQztvQkFDRixNQUFNLEdBQUcsR0FBRzt3QkFDVjs0QkFDRSxFQUFFLEVBQUUsT0FBTzs0QkFDWCxFQUFFLEVBQUUsS0FBSzs0QkFDVCxFQUFFLEVBQUUsS0FBSzt5QkFDVjt3QkFDRDs0QkFDRSxFQUFFLEVBQUUsUUFBUTs0QkFDWixFQUFFLEVBQUUsTUFBTTs0QkFDVixFQUFFLEVBQUUsS0FBSzt5QkFDVjt3QkFDRDs0QkFDRSxFQUFFLEVBQUUsUUFBUTs0QkFDWixFQUFFLEVBQUUsTUFBTTs0QkFDVixFQUFFLEVBQUUsS0FBSzt5QkFDVjt3QkFDRDs0QkFDRSxFQUFFLEVBQUUsUUFBUTs0QkFDWixFQUFFLEVBQUUsT0FBTzs0QkFDWCxFQUFFLEVBQUUsS0FBSzt5QkFDVjt3QkFDRDs0QkFDRSxFQUFFLEVBQUUsUUFBUTs0QkFDWixFQUFFLEVBQUUsTUFBTTs0QkFDVixFQUFFLEVBQUUsS0FBSzt5QkFDVjt3QkFDRDs0QkFDRSxFQUFFLEVBQUUsUUFBUTs0QkFDWixFQUFFLEVBQUUsTUFBTTs0QkFDVixFQUFFLEVBQUUsS0FBSzt5QkFDVjt3QkFDRDs0QkFDRSxFQUFFLEVBQUUsUUFBUTs0QkFDWixFQUFFLEVBQUUsTUFBTTs0QkFDVixFQUFFLEVBQUUsS0FBSzt5QkFDVjt3QkFDRDs0QkFDRSxFQUFFLEVBQUUsUUFBUTs0QkFDWixFQUFFLEVBQUUsVUFBVTs0QkFDZCxFQUFFLEVBQUUsUUFBUTt5QkFDYjt3QkFDRDs0QkFDRSxFQUFFLEVBQUUsUUFBUTs0QkFDWixFQUFFLEVBQUUsTUFBTTs0QkFDVixFQUFFLEVBQUUsS0FBSzt5QkFDVjt3QkFDRDs0QkFDRSxFQUFFLEVBQUUsUUFBUTs0QkFDWixFQUFFLEVBQUUsT0FBTzs0QkFDWCxFQUFFLEVBQUUsTUFBTTt5QkFDWDt3QkFDRDs0QkFDRSxFQUFFLEVBQUUsWUFBWTs0QkFDaEIsRUFBRSxFQUFFLE9BQU87NEJBQ1gsRUFBRSxFQUFFLE1BQU07eUJBQ1g7d0JBQ0Q7NEJBQ0UsRUFBRSxFQUFFLFlBQVk7NEJBQ2hCLEVBQUUsRUFBRSxPQUFPOzRCQUNYLEVBQUUsRUFBRSxNQUFNO3lCQUNYO3FCQUNGLENBQUM7b0JBRUYsTUFBTSxHQUFHLEdBQWUsQ0FBQzs0QkFDdkIsTUFBTSxDQUFDLGNBQWMsR0FBRyxHQUFHLENBQUMsS0FBSzt5QkFDbEMsQ0FBQyxDQUFDO29CQUVILEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxZQUFZLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQzt5QkFDL0MsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFO3dCQUNWLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDOzRCQUFFLE9BQU8sRUFBRSxDQUFDO3dCQUNoQyxNQUFNLEtBQUssR0FDVCxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7d0JBRTVELElBQUksSUFBSSxLQUFLLE9BQU87NEJBQ2xCLE9BQU8sTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQzt3QkFDakMsT0FBTyxLQUFLLENBQUE7b0JBQ2QsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFFTixPQUFPLEdBQUcsQ0FBQztnQkFFYixDQUFDO1lBRUgsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUdMLDJCQUEyQixDQUFDO2dCQUMxQixNQUFNLEVBQUUsSUFBSTtnQkFDWix3RUFBd0U7Z0JBQ3hFLFFBQVEsRUFBRTtvQkFDUixhQUFhLEVBQUUsYUFBYTtvQkFDNUIsRUFBRSxFQUFFLE1BQU07aUJBQ1g7Z0JBQ0QsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO2FBQzFCLENBQUMsQ0FBQztRQUVMLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFTixLQUFLLFVBQVUsaUJBQWlCLENBQUMsR0FBZSxFQUFFLFFBQWdCO1lBQ2hFLDhMQUE4TDtZQUM5TCxNQUFNLE1BQU0sR0FBRyxxQkFBcUIsRUFBRSxDQUFDO1lBQ3ZDLHVGQUF1RjtZQUN2RixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU07Z0JBQUUsT0FBTyxDQUFDLE1BQU0sNkJBQTZCLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO2lCQUMvRSxJQUFJLFFBQVEsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDO2dCQUNsQyxPQUFPLENBQUMsQ0FBQyxHQUFHLE1BQU0sNkJBQTZCLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxhQUFhLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLHNHQUFzRztpQkFDNU0sSUFBSSxRQUFRLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQztnQkFDakMsT0FBTyxDQUFDLENBQUMsR0FBRyxNQUFNLDZCQUE2QixDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsYUFBYSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxzR0FBc0c7WUFHaE4sU0FBUyxhQUFhLENBQUMsR0FBMkM7Z0JBQ2hFLDBTQUEwUztnQkFDMVMsT0FBTztvQkFDTCw4REFBOEQ7b0JBQzlELE1BQU0sQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLEdBQUcsRUFBRSxxREFBcUQ7b0JBQzVFLDhJQUE4STtvQkFDOUksR0FBRyxJQUFJLENBQUMsU0FBUzt5QkFDZCxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQzFCLENBQUM7WUFFSixDQUFDO1lBQUEsQ0FBQztRQUVKLENBQUM7UUFBQSxDQUFDO1FBRUYsU0FBUyxnQkFBZ0I7WUFDdkIsSUFBSSxZQUFZLEdBQWlCLGlCQUFpQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUNoRyxJQUFJLENBQUMsWUFBWTtnQkFBRSxPQUFPLEVBQUUsQ0FBQztZQUM3QixPQUFPLFlBQVk7aUJBQ2hCLE1BQU0sQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQ2hCLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzlELENBQUM7UUFBQSxDQUFDO0lBQ0osQ0FBQztJQUFBLENBQUM7SUFFRixTQUFTLFNBQVMsQ0FBQyxJQUFZO1FBQzdCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDakIsa09BQWtPO1lBQ2xPLFlBQVksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ3hELE9BQU8sWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQW1CLENBQUE7UUFDbkQsQ0FBQzs7WUFDSSxPQUFPLHVCQUF1QixDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2xHLENBQUM7SUFBQSxDQUFDO0lBRUY7Ozs7S0FJQztJQUNELFNBQVMsd0JBQXdCLENBQUMsT0FBZSxFQUFFLE1BQWU7UUFDaEUsMEZBQTBGO1FBQzFGLE1BQU0sZUFBZSxHQUFhO1lBQ2hDLE1BQU0sQ0FBQyxhQUFhLEdBQUcsTUFBTSxHQUFHLGtCQUFrQixFQUFFLDJCQUEyQjtZQUMvRSxPQUFPLEdBQUcsVUFBVTtZQUNwQixPQUFPLEdBQUcsV0FBVztZQUNyQixNQUFNLENBQUMsY0FBYyxFQUFFLDJCQUEyQjtTQUNuRCxDQUFDLENBQUMsb1BBQW9QO1FBRXZQLElBQUksQ0FBQyxNQUFNO1lBQUUsT0FBTyxlQUFlLENBQUMsQ0FBQyxvS0FBb0s7UUFFek0sd0NBQXdDO1FBQ3hDLENBQUMsU0FBUywwQkFBMEI7WUFFbEMsSUFBSSx1QkFBdUIsR0FBRyxtQkFBbUIsQ0FBQyxNQUFNLENBQ3RELENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FDUixrQkFBa0IsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRTVELElBQUksYUFBYSxHQUFHLHVCQUF1QixDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQzNELEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRSxVQUFVLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUMvQyxDQUFDO1lBQ0YsSUFBSSxjQUFjLEdBQUcsdUJBQXVCLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FDNUQsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFLFVBQVUsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQ2hELENBQUM7WUFFRixJQUFJLE1BQU0sS0FBSyxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUM7Z0JBQ2pDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUM7b0JBQ3RCLENBQUMsQ0FBQyxDQUFDLGNBQWMsR0FBRzt3QkFDbEIsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQztxQkFDckUsQ0FBQztvQkFDRixDQUFDLENBQUMsQ0FBQyxjQUFjLEdBQUcsY0FBYzt3QkFDaEMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUUsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzNFLENBQUM7aUJBQU0sSUFDTCxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQzs7b0JBRTVFLENBQUMsWUFBWSxDQUFDLG9CQUFvQixFQUFFLFlBQVksQ0FBQyxlQUFlO3FCQUMvRCxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQzs7b0JBRTlCLFVBQVUsS0FBSyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBQzFDLDRJQUE0STtnQkFFNUksSUFBSSxNQUFNLEdBQVcsRUFBRSxDQUFDO2dCQUN4QixJQUFJLE9BQU8sS0FBSyxNQUFNLENBQUMsYUFBYTtvQkFBRSxNQUFNLEdBQUcsTUFBTSxDQUFDO2dCQUN0RCxJQUFJLE9BQU8sS0FBSyxNQUFNLENBQUMsVUFBVTtvQkFBRSxNQUFNLEdBQUcsTUFBTSxDQUFDO2dCQUVuRCxJQUFJLE1BQU0sS0FBSyxPQUFPLENBQUMsU0FBUztvQkFDOUIsTUFBTSxJQUFJLGtCQUFrQixFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBLHNQQUFzUDtnQkFFdlMsQ0FBQyxTQUFTLGVBQWU7b0JBQ3ZCLDBHQUEwRztvQkFDMUcsSUFBSSxPQUFPLEtBQUssTUFBTSxDQUFDLGFBQWE7d0JBQUUsT0FBTztvQkFFN0MsSUFDRSxNQUFNLEtBQUssT0FBTyxDQUFDLFVBQVU7OzRCQUU3QixDQUFDLFlBQVksQ0FBQyxvQkFBb0I7Z0NBQ2xDLFlBQVksQ0FBQyxlQUFlOzZCQUMzQixDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQzt3QkFFOUIsTUFBTSxHQUFHLFNBQVMsQ0FBQztnQkFDdkIsQ0FBQyxDQUFDLEVBQUUsQ0FBQztnQkFHTCxjQUFjLEdBQUc7b0JBQ2YsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQzVCLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRSxRQUFRLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxDQUN2QztpQkFDRixDQUFDO1lBQ0osQ0FBQztZQUVELElBQUksYUFBYSxFQUFFLE1BQU0sR0FBRyxDQUFDLElBQUksYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFLE1BQU0sR0FBRyxDQUFDO2dCQUMzRCxlQUFlLENBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzlELElBQUksY0FBYyxFQUFFLE1BQU0sR0FBRyxDQUFDLElBQUksY0FBYyxDQUFDLENBQUMsQ0FBQyxFQUFFLE1BQU0sR0FBRyxDQUFDO2dCQUM3RCxlQUFlLENBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pFLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFFTCxPQUFPLGVBQWUsQ0FBQztJQUN6QixDQUFDO0lBR0Q7O09BRUc7SUFDSCxTQUFTLDJCQUEyQjtRQUNsQyxJQUFJLEtBQUssR0FBUyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQyxvWUFBb1k7UUFFbmMsT0FBTyw4QkFBOEIsQ0FDbkMsZ0NBQWdDLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUNqRCxLQUFLLENBQ0ksQ0FBQztJQUNkLENBQUM7QUFDSCxDQUFDO0FBR0Q7Ozs7O0dBS0c7QUFDSCxTQUFTLGtCQUFrQixDQUN6QixVQUFrQixFQUNsQixRQUFrQixDQUFDLFVBQVUsQ0FBQztJQUU5QixJQUFJLENBQUMsVUFBVSxFQUFFLFFBQVEsQ0FBQyxLQUFLLENBQUM7UUFBRSxPQUFPLEtBQUssQ0FBQyxDQUFDLHFFQUFxRTtJQUVySCxVQUFVLEdBQUcsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUV2RCxPQUFPLFVBQVU7U0FDZCxLQUFLLENBQUMsSUFBSSxDQUFDO1NBQ1gsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ2hFLENBQUM7QUFFRDs7Ozs7R0FLRztBQUNILFNBQVMsY0FBYyxDQUNyQixJQUFZLEVBQ1osUUFBa0IsQ0FBQyxVQUFVLENBQUM7SUFHOUIsTUFBTSxLQUFLLEdBQUcsU0FBUyxFQUFFLENBQUM7SUFFMUIsSUFBSSxDQUFDLEtBQUs7UUFBRSxPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFFN0QsSUFBSSxLQUFLLEtBQUssT0FBTyxDQUFDLEtBQUs7UUFDekIsT0FBTyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQzNCLElBQUksQ0FBQyxZQUFZLEVBQUUscUJBQXFCLEVBQUUsYUFBYSxFQUFFLGdCQUFnQixFQUFFLFlBQVksRUFBRSxjQUFjLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO1FBQzNILE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7SUFFbkQsT0FBTyxLQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRTdCLFNBQVMsU0FBUztRQUNoQixJQUFJLElBQUksRUFBRSxVQUFVLENBQUMsR0FBRyxDQUFDO1lBQ3ZCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFDaEMsSUFBSSxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztZQUM3QixPQUFPLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSSxFQUFFLFdBQVcsQ0FBQyxDQUFDOztZQUNyQyxPQUFPLElBQUksQ0FBQTtJQUNsQixDQUFDO0FBQ0gsQ0FBQztBQUVEOzs7Ozs7Ozs7R0FTRztBQUNILFNBQVMsbUJBQW1CLENBQUMsSUFBYyxFQUFFLE1BQWdDLEVBQUUsU0FBeUIsYUFBYSxFQUFFLFdBQW9CLEVBQUUsU0FBa0IsSUFBSSxFQUFFLFNBQWtCO0lBQ3JMLElBQUksQ0FBQyxNQUFNO1FBQUUsT0FBTztJQUNwQixNQUFNLGFBQWEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3BELGFBQWEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0lBQ3hELElBQUksZUFBZSxLQUFLLElBQUk7UUFBRSxhQUFhLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQztJQUN4RCxJQUFJLFNBQVM7UUFBRSxhQUFhLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUM7SUFDdkQsTUFBTSxDQUFDLHFCQUFxQixDQUFDLE1BQU0sRUFBRSxhQUFhLENBQUMsQ0FBQztJQUVwRCxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFFakMsU0FBUyxNQUFNLENBQUMsR0FBVztRQUN6QixNQUFNLElBQUksR0FBRyxhQUFhLENBQUM7WUFDekIsR0FBRyxFQUFFLEdBQUc7WUFDUixhQUFhLEVBQUUsYUFBYTtZQUM1QixRQUFRLEVBQUUsR0FBRyxDQUFDLFFBQVEsSUFBSSxHQUFHLENBQUMsWUFBWTtZQUMxQyxLQUFLLEVBQUUsS0FBSztZQUNaLE9BQU8sRUFBRSxHQUFHLEVBQUU7Z0JBQ1osTUFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDLEtBQUssR0FBRyxZQUFZLENBQUM7Z0JBQ3BDLElBQUksVUFBVSxHQUFHLFlBQVksQ0FBQyxhQUFhLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxDQUFDO2dCQUV0RCxJQUFJLFVBQVU7b0JBQUUsT0FBTyxNQUFNLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsV0FBVyxDQUFDLENBQUM7Z0JBRW5GLENBQUMsS0FBSyxVQUFVLGdCQUFnQjtvQkFDOUIsVUFBVSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQzNDLFVBQVUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO29CQUNuQixhQUFhLENBQUMscUJBQXFCLENBQUMsVUFBVSxFQUFFLFVBQVUsQ0FBQyxDQUFDO29CQUU1RCxNQUFNLDRCQUE0QixDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7b0JBRXRELFVBQVUsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO29CQUV4QyxJQUFJLENBQUMsV0FBVzt3QkFBRSxPQUFPO29CQUV6QixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFtQixFQUFFLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsQ0FBcUIsQ0FBQztvQkFDM0gsSUFBSSxDQUFDLE1BQU07d0JBQUUsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO29CQUM5Qix3QkFBd0IsQ0FBQyxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxXQUFXLEdBQUcsR0FBRyxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQSw0RUFBNEU7b0JBRTdLLE1BQU0sQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyx1SEFBdUg7Z0JBQzdMLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDUCxDQUFDO1NBQ0YsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsOEVBQThFO0lBQ2hILENBQUM7SUFFRCxhQUFhLENBQUMsS0FBSyxDQUFDLG1CQUFtQixHQUFHLDBCQUEwQixDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUV2RixPQUFPLGFBQWEsQ0FBQztJQUVyQixTQUFTLE1BQU0sQ0FBQyxVQUFvQyxFQUFFLEdBQWEsRUFBRSxVQUFrQixFQUFFLFNBQWtCLElBQUk7UUFDN0csSUFBSSxDQUFDLFVBQVU7WUFBRSxPQUFPO1FBRXhCLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQzlDLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFBRTtZQUNaLG9EQUFvRDtZQUNwRCxZQUFZLENBQUMsYUFBYSxDQUFDLEdBQUcsR0FBRyxFQUFFLEdBQUcsWUFBWSxDQUFDLEVBQUUsU0FBUyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDL0UsWUFBWSxDQUFDLFVBQVUsR0FBRyxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdEMsQ0FBQyxDQUFDLENBQUM7UUFFTCxJQUFJLENBQUMsTUFBTTtZQUFFLE9BQU8sQ0FBQyx1RUFBdUU7UUFFNUYsVUFBVSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3hDLFlBQVksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFbkUsU0FBUyxZQUFZLENBQUMsS0FBYSxFQUFFLE9BQWdCLEtBQUs7WUFDeEQsSUFBSSxDQUFDLEtBQUs7Z0JBQUUsT0FBTztZQUNuQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLFFBQVEsQ0FBQztpQkFDdkQsTUFBTSxDQUFDLENBQUMsR0FBbUIsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEtBQUssS0FBSyxDQUFDLENBQUM7WUFFaEUsSUFBSSxDQUFDLElBQUk7Z0JBQ1AsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFBOztnQkFDcEQsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFBO1FBQzNELENBQUM7UUFBQSxDQUFDO0lBQ0osQ0FBQztBQUNILENBQUM7QUFFRDs7Ozs7R0FLRztBQUNILFNBQVMsbUJBQW1CLENBQUMsSUFBK0Y7SUFDMUgsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhO1FBQUUsT0FBTyxFQUFFLENBQUM7SUFDbkMsSUFBSSxJQUFJLENBQUMsSUFBSTtRQUNYLE9BQU8sVUFBVSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1NBQy9ELElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsTUFBTTtRQUNoQyxPQUFPLFVBQVUsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQzs7UUFDeEYsT0FBTyxFQUFFLENBQUM7SUFFZixTQUFTLFVBQVUsQ0FBQyxNQUFvQjtRQUN0QyxJQUFJLENBQUMsTUFBTTtZQUFFLE9BQU87UUFDcEIsT0FBTyxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFBO0lBQzFELENBQUM7QUFDSCxDQUFDO0FBRUQ7OztHQUdHO0FBQ0gsU0FBUyxZQUFZLENBQUMsS0FBaUI7SUFDckMsSUFBSSxDQUFDLEtBQUs7UUFBRSxPQUFPO0lBQ25CLElBQUksS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUk7UUFDdkMsT0FBTyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQSxrQ0FBa0M7SUFDcEQsT0FBTyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUMzQyxVQUFVLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQztTQUNuQixVQUFVLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQztTQUNuQixVQUFVLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQztTQUNuQixVQUFVLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3pCLENBQUM7QUFFRDs7Ozs7O0dBTUc7QUFDSCxTQUFTLGFBQWEsQ0FBQyxLQUFZLEVBQUUsTUFBYyxFQUFFLGFBQXFCLEVBQUUsV0FBbUI7SUFDN0YsT0FBTyxlQUFlLENBQUMsYUFBYSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLFdBQVcsQ0FBQyxDQUFBO0FBQ3pHLENBQUM7QUFFRDs7Ozs7SUFLSTtBQUNKLFNBQVMsZUFBZSxDQUFDLGFBQXFCLEVBQUUsSUFBZ0IsRUFBRSxLQUFhLEVBQUUsTUFBZTtJQUM5RixJQUFJLENBQUMsYUFBYTtRQUFFLE9BQU87SUFDM0IsSUFBSSxDQUFDLElBQUk7UUFBRSxJQUFJLEdBQUcsWUFBWSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztJQUM5QyxJQUFJLENBQUMsSUFBSTtRQUFFLE9BQU87SUFDbEIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDeEQsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxxSEFBcUg7UUFDeE0sS0FBSyxJQUFJLENBQUMsQ0FBQztJQUNiLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUEsb0ZBQW9GO0FBQzVHLENBQUM7QUFDRDs7OztLQUlLO0FBQ0wsU0FBUyxZQUFZLENBQUMsS0FBWSxFQUFFLE1BQWM7SUFDaEQsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLE1BQU07UUFBRSxPQUFPO0lBQzlCLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUE7QUFDMUQsQ0FBQztBQUVELEtBQUssVUFBVSxlQUFlLENBQUMsSUFBWSxFQUFFLE1BQWUsSUFBSTtJQUM5RCxJQUFJLENBQUMsSUFBSTtRQUFFLE9BQU87SUFDbEIsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pCLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRXpCLElBQUksSUFBSSxHQUFHLEVBQUUsRUFBRSxFQUFFLDhDQUE4QyxFQUFFLEVBQUUsRUFBRSxxREFBcUQsRUFBRSxFQUFFLEVBQUUsOENBQThDLEVBQUUsQ0FBQztJQUVqTCxJQUFJLElBQUksR0FBRztRQUNULEVBQUUsRUFBRSw2RkFBNkY7UUFDakcsRUFBRSxFQUFFLDJJQUEySTtRQUMvSSxFQUFFLEVBQUUsK0ZBQStGO0tBQ3BHLENBQUE7SUFDRCxJQUFJLEdBQUc7UUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFFM0IsR0FBRyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7SUFFMUcsT0FBTyxJQUFJLE9BQU8sQ0FBUSxDQUFDLE9BQU8sRUFBRSxFQUFFO1FBQ3BDLFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDZCxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO2dCQUNwQixPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDM0IsQ0FBQztZQUFBLENBQUM7UUFDSixDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUE7SUFDVCxDQUFDLENBQUMsQ0FBQztBQUVMLENBQUM7QUFFRCxLQUFLLFVBQVUsaUJBQWlCLENBQUMsSUFBWTtJQUMzQyxJQUFJLENBQUMsSUFBSTtRQUFFLE9BQU87SUFDbEIsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQUUsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDNUMsSUFBSSxLQUFLLEdBQUcsTUFBTSxlQUFlLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBRS9DLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUMsSUFBZSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUUzRCxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN6QixDQUFDIn0=