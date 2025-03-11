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
function matchPargraphsSplitting(retrieved, langs, add, actor = actors[actors.length - 1].Class) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVjbGFyZUJ1dHRvbnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9tb2R1bGVzL0RlY2xhcmVCdXR0b25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFNBQVMsU0FBUztJQUNoQixPQUFPO1FBQ0wsT0FBTyxFQUFFO1lBQ1AscU5BQXFOO1lBQ3JOLE1BQU0sQ0FBQyxhQUFhLEdBQUcsY0FBYztZQUNyQyxNQUFNLENBQUMsV0FBVyxHQUFHLFNBQVM7WUFDOUIsTUFBTSxDQUFDLGFBQWEsR0FBRyxlQUFlO1lBQ3RDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsWUFBWTtZQUNqQyxNQUFNLENBQUMsV0FBVyxHQUFHLGlCQUFpQjtZQUN0QyxNQUFNLENBQUMsV0FBVyxHQUFHLGlCQUFpQjtZQUN0QyxNQUFNLENBQUMsY0FBYyxHQUFHLGdCQUFnQjtZQUN4QyxNQUFNLENBQUMsV0FBVyxHQUFHLGNBQWM7WUFDbkMsTUFBTSxDQUFDLGNBQWMsR0FBRyxxQkFBcUI7WUFDN0MsTUFBTSxDQUFDLGFBQWEsR0FBRyxZQUFZO1lBQ25DLE1BQU0sQ0FBQyxhQUFhLEdBQUcsY0FBYztZQUNyQyxNQUFNLENBQUMsYUFBYSxHQUFHLFlBQVk7U0FDcEM7UUFDRCxJQUFJLEVBQUU7WUFDSixxR0FBcUc7WUFDckcsVUFBVSxFQUFFO2dCQUNWLE1BQU0sQ0FBQyxVQUFVLEdBQUcsZUFBZTtnQkFDbkMsTUFBTSxDQUFDLFVBQVUsR0FBRyxpQkFBaUI7Z0JBQ3JDLE1BQU0sQ0FBQyxVQUFVLEdBQUcscUJBQXFCO2dCQUN6QyxNQUFNLENBQUMsVUFBVSxHQUFHLHNCQUFzQjtnQkFDMUMsTUFBTSxDQUFDLFlBQVksR0FBRyxjQUFjO2dCQUNwQyxNQUFNLENBQUMsVUFBVSxHQUFHLHdCQUF3QjtnQkFDNUMsTUFBTSxDQUFDLFVBQVUsR0FBRyxXQUFXO2dCQUMvQixNQUFNLENBQUMsVUFBVSxHQUFHLFVBQVU7Z0JBQzlCLE1BQU0sQ0FBQyxVQUFVLEdBQUcsbUJB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QUssRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLE1BQU0sRUFBRTs0QkFDOUUsU0FBUyxFQUFFLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUU7NEJBQ3BFLGNBQWMsRUFBRSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUssRUFBRTs0QkFDNUUsVUFBVSxFQUFFLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsVUFBVSxFQUFFOzRCQUM3RSxVQUFVLEVBQUUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxVQUFVLEVBQUU7NEJBQzdFLE9BQU8sRUFBRSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLE9BQU8sRUFBRTs0QkFDdkUsU0FBUyxFQUFFLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUU7NEJBQ3BFLE1BQU0sRUFBRSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFO3lCQUNsRSxDQUFDO3dCQUVGLENBQUMsU0FBUyx1QkFBdUI7NEJBQy9CLE1BQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxRQUFRLEdBQUcsS0FBSyxHQUFHLE9BQU8sR0FBRyxRQUFRLENBQUM7NEJBQzNELE1BQU0sSUFBSSxHQUFHLFdBQVcsRUFBRSxNQUFNLEdBQUcsYUFBYSxDQUFDOzRCQUNqRCxRQUFRLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLE9B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