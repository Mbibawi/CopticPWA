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
                            ["Tishoury", "TishouryGreatLent"]
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
        const children = Array.from(btnDocFragment.querySelectorAll('div'));
        Btn.IncenseMorning.afterShowPrayers(btn); //By calling the afterShowPrayers() of btnIncenseMorning and passing btnMassUnbaptised as argument, the function will call hideGodHaveMercyOnUsIfBishop() and will return. This will create an expandable button for the "PrayThatGodHaveMercyOnUs" dicaon response
        (function insertHisFoundationsAndGodHaveMercy() {
            if (![Seasons.GreatLent, Seasons.JonahFast].includes(Season))
                return; //The following only applies during the Great Lent the 3 days of Jonah Fast (not the 4th day) that's why we check if isFast === true
            if ([6, 0].includes(todayDate.getDay()))
                return;
            let titles = [
                Prefix.massCommon + "HisFoundations",
                Prefix.incenseDawn + "GodHaveMercyOnUsRefrain",
            ];
            let tables = titles.map(title => findTable(title) || undefined); //We retrieve the 3 tables by their titles
            if (!tables?.length)
                return;
            const anchor = findAnchor(`${Prefix.anchor}WeHaveBeenSaved`, btnDocFragment)?.previousElementSibling; //This is the html element before which we will insert the retrived tables
            if (!anchor)
                return console.log('The anchor was not found');
            insertTablesBeforeAnchor(tables, anchor, prayersLanguages);
        })();
        const readingsAnchor = findAnchor(`${Prefix.anchor}Readings`, btnDocFragment); //this is the html element before which we will insert all the readings and responses
        if (!readingsAnchor)
            return console.log('The anchor was not found');
        (function insertIntercessionsHymnsForSeasons() {
            let seasonalIntercessions = MassCommonArray.filter((table) => RegExp('Intercessions\.\*D=').test(Title(table))
                &&
                    (tableMatchingDates(Title(table), [copticDate, Season])));
            if (!seasonalIntercessions.length)
                return console.log("No Seasonsal Intercession Hymns");
            seasonalIntercessions = getUniqueValuesFromArray(seasonalIntercessions);
            if ([Seasons.PentecostalDays, Seasons.Ascension].includes(Season)) {
                const stMaykel = children.find(div => div.dataset?.group.endsWith('IntercessionsStMaykel'));
                if (stMaykel)
                    children.filter(div => div.dataset.root === stMaykel.dataset.root)
                        .forEach(div => div.remove()); //We remove the intercessions of St. Maykel because they will be replaced by those of the Pentocostal days
            }
            seasonalIntercessions.forEach(table => {
                const anchor = setIntercessionsAnchor(Title(table));
                if (!anchor)
                    return;
                insertTablesBeforeAnchor([table], anchor, getLanguages(Title(table)));
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
                const sameRoot = children.filter(div => div.dataset?.root.startsWith(`${Prefix.massCommon}${insertion}`)); //!We must specify that this is a "startWith" search of the dataRoot
                if (!sameRoot?.length)
                    return;
                return sameRoot[sameRoot.length - 1].nextElementSibling;
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
            await insertMassReading(Prefix.stPaul, [Intros.stPaulIntro,
                Intros.stPaulEnd]);
            (function insertCatholiconResponse() {
                let cathResp = CatholiconResponsesArray.filter(tbl => tableMatchingDates(Title(tbl), [Season, copticDate]));
                if (!cathResp.length)
                    cathResp = CatholiconResponsesArray.filter(tbl => Title(tbl) === Prefix.catholiconResponse + css.Title);
                if (!cathResp.length)
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
                                clearContainerDiv: false,
                                clearRightSideBar: false
                            });
                        });
                    }
                });
                insertExpandableBtn([response], readingsAnchor, 'beforebegin');
            })();
            //Catholicon
            await insertMassReading(Prefix.Catholicon, [Intros.CatholiconIntro,
                Intros.CatholiconEnd]);
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
                if (!specialResponse.length)
                    specialResponse = PraxisResponsesArray.filter((table) => tableMatchingDates(Title(table), [Season])); //We look for a response for the Season
                if (isStMaryFeast || copticDay === '21' || !specialResponse.length)
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
                    specialResponse = insertTablesBeforeAnchor(getUniqueValuesFromArray(specialResponse), readingsAnchor, prayersLanguages)[0];
                    insertSaintsResponse(specialResponse);
                }
                ;
                function ifNoSpecificResponse() {
                    let noSeasonResponse = findTable(Prefix.praxisResponse, PraxisResponsesArray) || undefined;
                    if (!noSeasonResponse)
                        return;
                    noSeasonResponse = insertTablesBeforeAnchor([noSeasonResponse], readingsAnchor, getLanguages(Prefix.praxisResponse))[0];
                    insertSaintsResponse(noSeasonResponse);
                }
                ;
                function insertSaintsResponse(responses) {
                    if (!responses)
                        return;
                    const anchor = responses.find(div => div?.id === `${Prefix.anchor}Saints`);
                    if (!anchor)
                        return console.log('The anchor was not found'); //If no placeHolder is found, it means that we are during a special Season (not a 'NoSeason' period), and no placeHolder for the saints response is included
                    if (!Object.values(saintsFeasts).includes(copticDate))
                        return; //It means that today is not a saint feast
                    specialResponse = PraxisResponsesArray.filter((table) => Title(table)?.includes('&D=$saintsFeasts.') && tableMatchingDates(Title(table), [copticDate]));
                    if (!specialResponse.length)
                        return;
                    insertTablesBeforeAnchor(specialResponse, anchor, getLanguages(Prefix.praxisResponse));
                }
            })();
            //Praxis
            await insertMassReading(Prefix.praxis, [Intros.praxisIntro,
                Intros.praxisEnd]);
            (function insertAfterPraxisResponse() {
                if (Season !== Seasons.ApostlesFast && copticDate !== copticFeasts.Apostles)
                    return;
                //In the Aposltes fast, and Apostles feast, there is a special response after the Praxis and before the Synaxarium
                let title = 'afterPraxis&D=$';
                if (copticDate === copticFeasts.Apostles)
                    title += 'copticFeasts.Apostles';
                else if (Season === Seasons.ApostlesFast)
                    title += 'Seasons.ApostlesFast';
                insertTablesBeforeAnchor(PraxisResponsesArray.filter(tbl => RegExp(title.replace('$', '\\$')).test(Title(tbl))), readingsAnchor, getLanguages(Prefix.praxisResponse));
            })();
            await insertSynaxarium();
            await insertAgiosAndGospel();
            async function insertSynaxarium() {
                if (Season === Seasons.PentecostalDays)
                    return; //We do not read the Synaxarium during the 50 Pentecostal days
                const intro = { ...Intros.synaxariumIntro };
                Object.entries(intro)
                    .forEach(entry => intro[entry[0]] =
                    entry[1]
                        .replace("theday", Number(copticDay).toString())
                        .replace("themonth", copticMonths[Number(copticMonth)][entry[0]]));
                await insertMassReading(Prefix.synaxarium, [intro,
                    undefined], copticDate); //!Caution: we must pass the copticDate for the 'date' argument, otherwise it will be set to the copticReadingsDate by default, and we will get the wrong synaxarium
                const titleRow = findAnchor(`${Prefix.synaxarium}\\&D\\=${copticDate}`, btnDocFragment);
                titleRow.insertAdjacentElement('afterend', titleRow.previousElementSibling); //We move the introduction after the title of the Synaxarium reading
            }
            ;
            async function insertAgiosAndGospel() {
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
                    insertTablesBeforeAnchor([AgiosTable], readingsAnchor?.nextElementSibling, getLanguages(Title(AgiosTable)));
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
            async function insertMassReading(readingPrefix, [intro, end], date = copticReadingsDate) {
                if (!readingPrefix)
                    return;
                const langs = getLanguages(readingPrefix);
                if (intro)
                    insertIntro(intro, css.Intro);
                await insertMassReadingOtherThanGospel(readingPrefix, { beforeOrAfter: "beforebegin", el: readingsAnchor }, getLanguages(readingPrefix), btnDocFragment, false, date);
                if (end)
                    insertIntro(end, css.End);
                function insertIntro(intro, cssClass) {
                    const table = [[readingPrefix + cssClass]];
                    langs.forEach(lang => table[0].push(intro[lang] || ''));
                    const div = insertTablesBeforeAnchor([table], readingsAnchor, langs);
                }
            }
            ;
        }
        function insertBookOfHoursButton() {
            if ([
                copticFeasts.Resurrection,
                copticFeasts.Nativity,
                copticFeasts.Baptism,
            ].includes(copticReadingsDate))
                //In these feasts we don't pray any hour
                return alert("We do not pray the Book of Hours prayers on the Ressurection, Nativity (Kiahk 29th), and Baptism (Toubi 11th) feasts' masses");
            const hoursBtns = Btn.BookOfHours.onClick(relevantHours());
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
                    const toBeCollapsed = Array.from(expandable.children)
                        .filter((div, index) => index > 0 && isTitlesContainer(div) || undefined); //!We exclude the first title div.
                    toBeCollapsed.forEach(div => collapseOrExpandText(div, true));
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
    }
});
Btn.ReadingsStPaul = new Button({
    btnID: "btnReadingsStPaul",
    label: getLabel({
        AR: "البولس",
        FR: "Epître de Saint Paul"
    }),
    onClick: async (prefix = Prefix.stPaul, date) => {
        await insertMassReadingOtherThanGospel(prefix, { beforeOrAfter: undefined, el: undefined }, getLanguages(prefix), containerDiv, true, date || copticReadingsDate);
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
    onClick: (mass) => {
        if (!mass && Btn.BookOfHours.children.length > 1)
            return Btn.BookOfHours.children;
        const BOH = Object.entries(bookOfHours());
        if (mass)
            return getHoursBtns(mass.map(hour => BOH[hour])); //If this function is called in the "Unbaptized Mass" context, it will return Button elements for each hour passed to it
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
                function otherPrayerBtn(title, index) {
                    const table = findTable(title, BookOfHoursArray) || undefined;
                    if (!table)
                        return undefined;
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
        function getHoursBtns(hours) {
            if (!hours)
                return;
            return hours.map(([name, [psalms, label]], index) => {
                const hourBtn = new Button({
                    btnID: "btn" + name,
                    label: label,
                    docFragment: new DocumentFragment(),
                    parentBtn: Btn.BookOfHours,
                    prayersSequence: [`${Prefix.bookOfHours}${name}Title`],
                    afterShowPrayers: () => hourBtnAfterShowPrayer(hourBtn.docFragment, name, psalms, hours.length - index, mass !== undefined),
                });
                if (mass)
                    hourBtn.cssClass = css.inlineButton;
                return hourBtn;
            });
            function hourBtnAfterShowPrayer(docFragment, hourName, psalms, index, mass) {
                const getHourName = (index) => BOH[index][0];
                const langs = getLanguages(Prefix.bookOfHours);
                (function insertHourIntroAndPsalms() {
                    const anchor = findAnchor(`${Prefix.anchor}Psalms`, docFragment);
                    if (!anchor)
                        return console.log('The anchor was not found');
                    (function insertHourIntro() {
                        if (mass)
                            return; //We don't insert the 'Thanks Giving' prayer and 'Psalm 50' if the function is called for the purposes of the mass liturgy
                        const intro = [
                            ...[1, 2, 3, 4].map((i) => `${Prefix.commonPrayer}ThanksGivingPart${i}`),
                            Prefix.bookOfHours + "Psalm50",
                        ]; //Adding the 'Thanks Giving' and 'Psalm 50' to the titles sequence
                        if (hourName === getHourName(0))
                            intro.push(...["LetsKneel", "StPaul", "Intro"].map(title => `${Prefix.bookOfHours}${hourName}${title}`)); //If this is the 1st Hour (Dawn), it has a specific sequence of prayers after the "Thanks Giving" and "Psalm50"
                        else if (hourName === getHourName(7))
                            intro.push(Prefix.psalmody + 'WakeUpSonsOfLight'); //If this is the 1st Midnight Service, we add the 'Wake Up Sons of Light' for the 1st Service of Midnight)
                        const tables = intro.map(title => findTable(title, getArrayFromPrefix(title)) || undefined);
                        insertTablesBeforeAnchor(tables, anchor, langs);
                    })();
                    (function insertPsalms() {
                        if (localStorage.displayMode === displayModes[1])
                            return; //We don't show the psalms in "Display Mode"
                        const tables = psalms.map(psalm => findTable(`${Prefix.bookOfHours}Psalm${psalm}`, BookOfHoursArray) || undefined);
                        insertTablesBeforeAnchor(tables, anchor, langs);
                    })();
                })();
                (function insertHourFinalPrayers() {
                    const anchor = findAnchor(`${Prefix.anchor}End`, docFragment);
                    if (!anchor)
                        return console.log('The anchor was not found');
                    insertTablesBeforeAnchor(getTables(), anchor, langs);
                    function getTables() {
                        const [OurFather, Creed] = ["OurFatherInHeaven", "Creed"].map(title => Prefix.commonPrayer + title);
                        const [AngelsPrayers, HailMaria, WeExaltYou, Agios, KyrielisonNoMass, HolyLord, FinalPrayer, Absolution, HourEnd] = ["AngelsPrayer", "WeSaluteYouMary", "WeExaltYouStMary", "Agios", "Kyrielison41", "HolyLordOfSabaot", "AllHoursFinalPrayer", "PriestsAbsolution", `${hourName}End`].map(title => Prefix.bookOfHours + title);
                        if (mass)
                            return ifMass();
                        else
                            return ifNotMass();
                        function ifNotMass() {
                            return getSequence()?.map(title => findTable(title, getArrayFromPrefix(title)) || undefined);
                            function getSequence() {
                                const sequence = [
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
                                    sequence.splice(0, 1, KyrielisonNoMass, HolyLord, OurFather, Prefix.bookOfHours + hourName + "2ndGospel"); //replacing the "Angels Praising" by this sequence
                                    //Inserting the Priests Absolution at the end
                                    sequence.push(Prefix.bookOfHours + hourName + Absolution);
                                }
                                ;
                                if (![
                                    getHourName(0), //Morning/Dawn
                                    getHourName(5), //Night
                                    getHourName(9), //Veil
                                ].includes(hourName))
                                    sequence.splice(0, 6); //For any other hour, we remove all the titles before KyrielisonIntro
                                return sequence;
                            }
                        }
                        ;
                        function ifMass() {
                            return getSequence()?.map(title => findTable(title, getArrayFromPrefix(title)) || undefined);
                            function getSequence() {
                                //!index passed to the function = the differece between hours.length and the index of the hour 
                                if (index === 2) {
                                    //this is the before last hour btn (hours.length - (hours.length-2)=2)
                                    return [Agios, OurFather, HailMaria];
                                }
                                else if (index > 2) {
                                    //Any other hour before the 2 last
                                    return [KyrielisonNoMass, HolyLord, OurFather];
                                }
                            }
                        }
                    }
                })();
                const children = Array.from(docFragment.children);
                (function adapt118thPsalm() {
                    if (hourName !== getHourName(6))
                        return; //If we are in the 'Setar Hour', we need to remove from Psalm 118 all the paragraphs except paragraphs 20, 21, and 22.
                    children
                        .filter((div) => div.dataset.root?.startsWith(Prefix.bookOfHours + "Psalm118"))
                        .forEach((div, index) => index > 0 && index < 39 ? div.remove() : div);
                })();
                (function changeClasses() {
                    (function ifNotMass() {
                        if (mass)
                            return;
                        children
                            .filter(div => !isTitlesContainer(div))
                            .forEach(div => changeClass(div, getActor(css.NoActor)));
                    })();
                    function changeClass(div, css) {
                        if (!div)
                            return;
                        div.classList.forEach(c => {
                            if (c !== 'Row')
                                div.classList.remove(c);
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
        Btn.IncenseMorning.children = []; //!We need to reinitiate the children each time because in some cases (like in case btnLakan is clicked) there are buttons added to btnIncenseMorning children
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
        const children = Array.from(docFragment.querySelectorAll('div'));
        (function adaptThanksGiving() {
            const thanksGiving = children.find(div => div.id === `${Prefix.commonPrayer}ThanksGivingPart1`);
            const parags = Array.from(children[children.indexOf(thanksGiving) + 10]?.children); //Those are the paragraphs that conatin the sentence that will be changed according to each liturgy
            if (!parags?.length)
                return;
            let thanks;
            if (btn === Btn.IncenseMorning)
                thanks = variable.thanksMorning;
            else if (btn === Btn.IncenseVespers)
                thanks = variable.thanksVespers;
            else if (btn === Btn.MassUnBaptised)
                thanks = variable.thanksMass;
            else if (btn.btnID === Btn.Lakan.btnID)
                thanks = variable.thanksLakan;
            if (!thanks)
                return;
            prayersLanguages
                .forEach(lang => {
                const parag = parags?.find(p => p.classList.contains(lang));
                if (!parag)
                    return;
                parag.innerHTML = parag.innerHTML.replace(variable.thanksVespers[lang], thanks[lang]);
            });
        })();
        (function insertGodHaveMercyOnUs() {
            const title = `${Prefix.commonPrayer}PrayThatGodHaveMercyOnUs`;
            const godHaveMercy = findTable(title, CommonArray); //We get the entire table not only the second row. Notice that the first row of the table is the row containing the title
            if (!godHaveMercy)
                return console.log("Didn't find table Gode Have Mercy");
            (function insertPrayer() {
                const length = godHaveMercy.length;
                const anchor = findAnchor(`${Prefix.anchor}GodHaveMercyOnUs`, docFragment);
                if (!anchor)
                    return console.log('the anchor was not found');
                const table = [godHaveMercy[0], [`${Prefix.anchor}InsertBishop`]];
                if (btn === Btn.MassUnBaptised)
                    table.push(godHaveMercy[length - 1]); //We keep the last paragraph (the paragraph for the mass)
                else
                    table.push(godHaveMercy[length - 2]); //We keep the second last paragraph (the paragraph ofr any other liturgy than a mass)
                insertTablesBeforeAnchor([table], anchor, prayersLanguages);
            })();
            (function insertExpandableForBishop() {
                const bishop = godHaveMercy.slice(1, 4); //Those are the rows that will be displayed when the button is clicked
                const anchor = findAnchor(`${Prefix.anchor}InsertBishop`, docFragment);
                if (!anchor)
                    return console.log('could not find tha anchor');
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
        (function insertLakanBtn() {
            if (copticDate === '1005')
                insertLakan(copticFeasts.Baptism);
            else if (copticDate === copticFeasts.Apostles)
                insertLakan(copticFeasts.Apostles);
            function insertLakan(date) {
                const lakanBtn = new Button({
                    btnID: Btn.Lakan.btnID, //!We must give the button same ID as Btn.Lakan because we use this id later on in adapting the 'Thanks Giving' prayer to the Lakan liturgy
                    label: Btn.Lakan.label,
                    docFragment: new DocumentFragment(),
                    onClick: () => Btn.Lakan.onClick(date, lakanBtn),
                    afterShowPrayers: async () => await Btn.Lakan.afterShowPrayers(date, lakanBtn)
                });
                Btn.IncenseMorning.children = [lakanBtn];
                const children = docFragment.children;
                if (copticDate === '1005')
                    insertExpandableBtn([lakanBtn], children[0], 'beforebegin', 'Lakan');
                else
                    insertExpandableBtn([lakanBtn], children[children.length - 1], 'afterend', 'Lakan');
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
                anchor = findAnchor(`${Prefix.anchor}CymbalVerses`, docFragment);
                if (!anchor)
                    return console.log("We didn't find the cymbal verses' anchor");
                let cymbals;
                if ([Seasons.JonahFast, Seasons.GreatLent].includes(Season) && ![0, 6].includes(weekDay))
                    //If we are during the Jonah Fast or during the Great Lent but not on a Saturday or a Sunday, the Cymbal Verses are not chanted, they are replaced by the Long Kyrielison and the Cymbal Verses End
                    cymbals = [findTable(`${Prefix.cymbalVerses}End`, CymbalVersesArray) || undefined];
                else
                    cymbals = getCymbalVerses();
                if (!cymbals.length)
                    return console.log("no cymbals were found by the provided sequence: ");
                insertTablesBeforeAnchor(cymbals, anchor.nextElementSibling, btn.languages);
                insertSaintsExpandable(findAnchor(`${Prefix.anchor}SaintsCymbals`, docFragment), Prefix.cymbalVerses, 'St(Mary|Maykel|Steven|John|Marc)', getLabel({
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
                const doxologiesAnchor = findAnchor(`${Prefix.anchor}Doxologies`, btn.docFragment);
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
                const anchor = findAnchor(`${Prefix.anchor}EndOfDoxologies`, docFragment).previousElementSibling;
                if (!anchor)
                    return console.log('The anchor was not found');
                insertSaintsExpandable(anchor, Prefix.doxologies, `(StMaykel|AllCelestialBeings|Apostles|StMarc|StGeorge|StMina)${Prefix.class}`, getLabel({
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
            function insertSaintsExpandable(anchor, prefix, regExp, label) {
                // const anchor: HTMLDivElement = selectElementsByDataSet(docFragment, dataRoot, undefined, 'root')[0];
                if (!anchor)
                    return "The anchor is not valid";
                const options = getArrayFromPrefix(prefix).filter(tbl => Title(tbl).startsWith(prefix + 'St') && !RegExp(regExp).test(Title(tbl)));
                if (!options.length)
                    return;
                const langs = getLanguages(prefix);
                const saintsBtns = options.map((table, index) => {
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
                    return btn;
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
                            if (btnsDiv)
                                return btnsDiv.classList.toggle(css.hidden);
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
            const anchor = findAnchor(`${Prefix.anchor}Prophecies`, docFragment);
            if (!anchor)
                return console.log('The anchor was not found');
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
                    position: { beforeOrAfter: 'beforebegin', el: anchor },
                    clearContainerDiv: false,
                    clearRightSideBar: false,
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
Btn.Lakan = new Button({
    btnID: "btnLakan",
    label: getLabel({
        AR: "صلاة اللقَّان",
        FR: "Cérémonie de la Bénédiction de l'eau",
        EN: 'Lakan'
    }),
    onClick: (date, btn = Btn.Lakan) => {
        if (!date)
            return;
        btn.prayersSequence = [`${Prefix.incenseDawn}Anaphora${date}`];
    },
    afterShowPrayers: async (date, btn = Btn.Lakan) => {
        if (!date)
            return;
        const Intros = ReadingsIntrosAndEnds();
        Btn.IncenseMorning.afterShowPrayers(btn); //We call it in order to hide the "Pray that God Have Mercy on Us" response for Pope and Bishop
        const lakan = {
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
            lakan.prophecies = ['HAB:3:12-19', 'ISA:35:1-2', 'ISA:40:1-25', 'ISA:9:1-2', 'BAR:3:36-End/4:1-4', 'EZK:36:24-29', 'EZK:47:1-9']; //These are the references of the prophecies readings
            lakan.stPaul = ['1CO:10:1-13'];
            lakan.gospel = ['PSA:113:3-5', 'MAT:3:1-17'];
            lakan.Agios = findAgios('Seasons.Baptism');
            lakan.cymbals = ["&D=$Seasons.Baptism", "PopeAndBishop", "LordFeastsEnd"]
                .map(title => findTable(`${Prefix.cymbalVerses}${title}`, CymbalVersesArray) || undefined)
                .flat();
        }
        else if (date === copticFeasts.Apostles) {
            lakan.prophecies = ['EXO:15:22-End/16:1-1', 'EXO:30:17-30', 'ISA:1:16-26', 'ISA:35:1-10', 'ISA:43:16-End/44:1-6', 'ZEC:8:7-19', 'ZEC:14:8-11']; //These are the references of the prophecies readings
            lakan.stPaul = ['HEB:10:22-32'];
            lakan.Agios = findAgios();
            lakan.gospel = ['PSA:50:7-7/50:10-10', 'JHN:5:1-18'];
            lakan.cymbals = findTable(`${Prefix.cymbalVerses}&D=${date}`) || undefined;
            lakan.spasmosAdam = findTable(`${Prefix.massCommon}SpasmosAdamLong&D=$copticFeasts.Apostles`, MassCommonArray) || undefined;
        }
        else if (date === copticFeasts.HolyThursday) {
            lakan.prophecies = [`${Prefix.HolyWeek}LakanProphecies`, `${Prefix.HolyWeek}LakanSermony1`]; //!There is a second Sermony of St. John Chrysostom to be insereted at the end of the lakan
            lakan.stPaul = ['1TI:4:9-End/5:1-10'];
            lakan.Agios = findAgios('copticFeasts.HolyFriday');
            lakan.gospel = ['PSA:50:9-9/50:12-12", "JHN:13:1-17'];
            lakan.cymbals = findTable(`${Prefix.cymbalVerses}&D=${date}`) || undefined;
            lakan.litany = findTable(`${Prefix.HolyWeek}LakanLitany`, HolyWeekArray) || undefined;
            lakan.spasmosAdam = findTable(`${Prefix.HolyWeek}LakanSpasmosAdam`, HolyWeekArray) || undefined;
        }
        ;
        (function insertKissEachOther() {
            const KissEachOther = findTable(Prefix.massCommon + "KissEachOther", MassCommonArray);
            if (!KissEachOther)
                return;
            const anchor = findAnchor(`${Prefix.anchor}KissEachOther`, btn.docFragment);
            if (!anchor)
                return console.log('The anchor was not found');
            insertTablesBeforeAnchor([KissEachOther.slice(1)], anchor, prayersLanguages); //We remove the first row ('Kiss each other')
        })();
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
            else if (date === copticFeasts.HolyThursday) {
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
            await insert('SpasmosAdam', undefined, lakan.spasmosAdam);
            await insertGospelReadingAndResponses({
                isMass: true,
                prefix: Prefix.gospelMass,
                container: btn.docFragment,
                clearContainer: false,
                gospel: lakan.gospel.map(ref => getGospel(Prefix.gospelMass, ref))
            });
            async function insert(anchorTitle, refs, reading) {
                if (!anchorTitle)
                    return;
                const anchor = findAnchor(`${Prefix.anchor}${anchorTitle}`, btn.docFragment);
                if (!anchor)
                    return console.log('The Anchor was not found');
                if (reading)
                    return insertTablesBeforeAnchor([reading], anchor, getLanguages(Title(reading)));
                else
                    await getReadingFromReference();
                async function getReadingFromReference() {
                    if (!refs)
                        return;
                    if (anchorTitle === 'Prophecies')
                        reading = await ifProphecies();
                    else
                        reading = await retrieveReferences(refs);
                    if (!reading)
                        return;
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
                                [Prefix.switchClass, css.Assembly], //We insert this "Switch Class" row in order for the "Alleluia" response to be assigned the css.Assembly class
                                ...findTable(Prefix.bookOfHours + "Alleluia", BookOfHoursArray) || undefined
                            ];
                    })();
                    insertTablesBeforeAnchor([reading], anchor, languages);
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
                            reading.push(...getReadingIntroOrEnd(Intros.propheciesIntro, css.Intro), ...await retrieveReferences(refs), //We do not insert the ReadingEnd for the Holy Thursday because it is already included in the table
                            ...getReadingIntroOrEnd(Intros.propheciesEnd, css.End));
                        }
                        else {
                            refs
                                .forEach(title => reading.push(...findTable(title, ReadingsArrays.GospelNightArrayFR) || undefined));
                            reading = await retrieveReadingTableFromBible(reading, languages);
                        }
                        ;
                        return reading;
                    }
                    ;
                    async function retrieveReferences(refs) {
                        const retrieved = await Promise.all(refs.map(async (ref) => await retrieveReadingTableFromBible([[Prefix.readingRef + ref]], languages)));
                        return retrieved.flat();
                    }
                    ;
                    function getReadingIntroOrEnd(text, css) {
                        return [[
                                Prefix.same + css,
                                ...prayersLanguages.map(lang => text[lang] || '')
                            ]];
                    }
                }
            }
            ;
            function getGospel(prefix, ref) {
                ref.startsWith('PSA') ? prefix += 'Psalm' : prefix += 'Gospel';
                return [[`${prefix}&D=${copticDate}${css.Title}`], [`${Prefix.readingRef}${ref}`]];
            }
        }
        function findAgios(date = '') {
            const Agios = Prefix.commonPrayer + "Agios";
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
                    position: btn.docFragment,
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
                    let anchor = findAnchor(`${Prefix.anchor}${title}${anyDay}`, btn.docFragment);
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
                    insertTablesBeforeAnchor([table], anchor, langs);
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
        const children = Array.from(btnDocFragment.querySelectorAll('div'));
        (function insertSecondReconciliationBtn() {
            if (![Btn.MassStBasil, Btn.MassStCyril].includes(btn))
                return;
            const reconciliation2 = findTable(prefix + "Reconciliation2") || undefined;
            if (!reconciliation2)
                return console.log("Didn't find reconciliation");
            const anchor = findAnchor(`${Prefix.anchor}GoToRecon`, btnDocFragment).previousElementSibling;
            if (!anchor)
                console.log('The anchor was not found');
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
            const btnsDiv = insertExpandableBtn([btnRecon], anchor, 'afterend'); //!We need to insert the button after the ancor because we will inert the redirection buttons before the ancor
            btnsDiv.children?.[0].addEventListener('click', () => {
                Array.from(containerDiv.querySelectorAll('div'))
                    .filter((div) => div.dataset?.group === `${prefix}Reconciliation`)
                    .filter(div => !div.dataset?.anchor)
                    .forEach(div => div.classList.toggle(css.hidden)); //We hide or unhide the main reconcilaition prayer when the second conciliation is displayed or hidden
            });
        })();
        (function addRedirectionButtons() {
            //We create a list of the masses to which we will insert redirection button
            let redirectToList = [
                Btn.MassStBasil,
                Btn.MassStGregory,
                Btn.MassStCyril,
                Btn.MassStJohn,
            ].filter(b => ![btn, Btn.MassStJohn].includes(b)); //We remove the btn of the mass from the redirection list and the mass of st John
            //Adding 2 buttons to redirect the other masses at the begining of the Reconciliation
            let anchor = findAnchor(`${Prefix.anchor}GoToRecon`, btnDocFragment);
            if (!anchor)
                return;
            redirectToAnotherMass([...redirectToList], {
                beforeOrAfter: "beforebegin",
                el: anchor.previousElementSibling,
            }, "RedirectionToReconciliation");
            //Adding 2 buttons to redirect to the other masses at the Anaphora prayer After "By the intercession of the Virgin St. Mary"
            anchor = findAnchor(`${Prefix.anchor}GoToAna`, btnDocFragment);
            if (!anchor)
                return console.log('The anchor was not found');
            redirectToAnotherMass([...redirectToList], {
                beforeOrAfter: "beforebegin",
                el: anchor,
            }, "RedirectionToAnaphora");
            //Adding 2 buttons to redirect to the other masses before Agios
            anchor = findAnchor(`${Prefix.anchor}GoToAgios`, btnDocFragment);
            if (!anchor)
                return console.log('The anchor was not found');
            redirectToAnotherMass([...redirectToList], {
                beforeOrAfter: "beforebegin",
                el: anchor.previousElementSibling,
            }, "RedirectionToAgios");
            //Adding 2 buttons to redirect to the other masses before the Call upon the Holy Spirit
            anchor = findAnchor(`${Prefix.anchor}GoToLitan`, btnDocFragment);
            if (!anchor)
                return console.log('The anchor was not found');
            redirectToAnotherMass([...redirectToList], {
                beforeOrAfter: "beforebegin",
                el: anchor,
            }, "RedirectionToLitanies");
            //Adding 2 buttons to redirect to the other masses before the Fraction Introduction
            anchor = findAnchor(`${Prefix.anchor}GoToFrac`, btnDocFragment);
            if (!anchor)
                return console.log('The anchor was not found');
            redirectToAnotherMass([...redirectToList], {
                beforeOrAfter: "beforebegin",
                el: anchor.previousElementSibling,
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
                const redirectTo = btns.map((btn) => {
                    //for each button in the btns array, we will create a fake Button and will set its onClick property to a function that retrieves the text of the concerned mass
                    const newBtn = new Button({
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
                    return newBtn;
                });
                insertRedirectionButtons(redirectTo, position, btnsContainerID);
            }
        })();
        (function insertAdamAndWatosSpasmos() {
            //Inserting an Expandable button for the LongSpasmos
            insertExpandable(`${Prefix.massCommon}SpasmosAdamLong`, findAnchor(`${Prefix.anchor}AdamLong`, btnDocFragment));
            //Inserting Expanadable button for Watos Spasmoses
            insertExpandable(`${Prefix.massCommon}SpasmosWatosLong`, findAnchor(`${Prefix.anchor}WatosShort`, btnDocFragment).previousElementSibling, `${Prefix.massCommon}SpasmosWatosShort`);
            function insertExpandable(spasmosTitle, anchor, hideRoot) {
                if (!anchor)
                    return console.log('anhcor is not valid');
                let spasmos = MassCommonArray.find((tbl) => Title(tbl)?.startsWith(spasmosTitle) &&
                    tableMatchingDates(Title(tbl), [Season]));
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
                            .forEach((div) => div.classList.toggle(css.hidden));
                    });
            }
        })();
        (function insertLitaniesIntroductionFromOtherMasses() {
            if (btn !== Btn.MassStBasil)
                return; //This button appears only in St Basil Mass
            const intro = "LitaniesIntro";
            const anchor = findAnchor(`${Prefix.anchor}GoToLitan`, btnDocFragment);
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
            if (!anchor)
                return console.log('Didn\'t find the anhcor');
            let tbl = findTable(Prefix.massCommon + 'SeasonalLitany&D=$Seasons.' + Object.entries(Seasons).find(entry => entry[1] === naturalSeasons())[0], MassCommonArray);
            if (!tbl)
                return console.log('Didn\'t find the tbl');
            insertTablesBeforeAnchor([tbl], anchor, prayersLanguages);
        })();
        (function showFractionPrayersMasterButton() {
            //We will insert a button displaying a pannel of choices for the different Fraction prayers according to the day/season, etc.s
            const anchor = findAnchor(`${Prefix.anchor}Fraction`, btnDocFragment);
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
            let psalm150 = children.filter(div => div.dataset?.group === `${Prefix.massCommon}CommunionPsalm150`);
            if (!psalm150.length)
                return console.log('The Psalm 150 was not found');
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
        Btn.MassStGregory.prayersSequence.splice(Btn.MassStGregory.prayersSequence.indexOf(Prefix.massCommon + "Invocation"), 9);
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
        const Evening = 'E', Morning = 'M';
        const btnPassOver = new Button({
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
                if (hour === '12H' && !(weekDay === 5 && service === Morning))
                    return undefined; //The 12th hour is only for Friday morning
                if (['1H', '3H', '6H'].includes(hour) && service === Morning && weekDay === 0)
                    return undefined; //On Palm Sunday we start at the 9th hour
                const hourReadings = ReadingsArrays.GospelNightArrayFR
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
                            sequence.push(end, "6HMDimasConfession&D=" + copticFeasts.HolyFriday); //At the end of the 6th hour, We add the "PassoverEnd" and the "Dimas Confession"
                    }
                    else if (weekDay > 3 && service === Morning)
                        sequence.push("PassoverEnd"); //If we are Thursday or Friday morning, we add the "PassoverEnd" to every hour
                    else if (hour === '11H')
                        sequence.push("PassoverEnd"); //Also if we are any other day, we add the "PassoverEnd" after the 11th hour
                    return sequence.map(title => Prefix.HolyWeek + title);
                }
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
                    (function adaptConclusionHymn() {
                        if (hour === '12H')
                            return; //It means we are Friday. The Passover End for the 12th hour is "Golgotha"
                        else if (weekDay < 4 && hour !== '11H')
                            return; //Between Palm Sunday and Wednesday afternoon, the "PassoverEnd" sequence is inserted only at the end of service, i.e., at the end of the 11th hour
                        else if (weekDay > 3 && service === Evening && hour !== '11H')
                            return; //If we are Thursday evening, the "PassoverEnd" sequence is inserted only at the end of service (at the 11th hour).
                        adaptConcludingHymn(btn.docFragment); //This will only insert the Pope and Bishop Expandable button
                    })();
                    await insertHourReadings();
                    insertThursdayLakanAndMassBtns();
                    await insertHolyFridayReadingsAndHymns();
                    async function insertHourReadings() {
                        const readingsLangs = ['COP', 'FR', 'AR'];
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
                                reading.anchor = findAnchor(`${Prefix.anchor}${title}`, btnHour.docFragment);
                            }
                        })();
                        (function findReadingsTablesAndAnchors() {
                            [readings.coptGospel, readings.nonCopticGospel, readings.coptPsalm, readings.nonCopticPsalm, readings.Commentary, readings.Prophecies, readings.Sermony]
                                .forEach(reading => setTableAndAnchor(reading, reading.key, reading.keyAnchor));
                            readings.nonCopticPsalm.anchor = readings.nonCopticPsalm.anchor.previousElementSibling; //We need to do this because the nonCopticPsalm is inserted before the previous sibling of nonCopticGospel.placeHolder
                            function setTableAndAnchor(reading, name, anchor) {
                                reading.table = fetchTable(name);
                                reading.anchor = findAnchor(`${Prefix.anchor}${anchor}`, btnHour.docFragment);
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
                                insertTablesBeforeAnchor([reading.table], reading.anchor, languages);
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
                        if (weekDay !== 4 || service !== Morning)
                            return;
                        if (hour !== '11H')
                            return; //It is the 9th Hour button
                        const anchor = btn.docFragment.children[0];
                        if (!anchor)
                            return;
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
                        btn.children = [lakanBtn, btnMass]; //We add the Lakan and Mass btns ad children of the Pessah button in order to get them displayed in the left side bar
                        insertExpandableBtn([lakanBtn, btnMass], anchor, 'afterend', btn.btnID.replace('btn', '')); //We also insert the Lakan and Mass buttons as inline buttons at the begining of the prayers in containerDiv
                    }
                    ;
                    async function insertHolyFridayReadingsAndHymns() {
                        if (weekDay !== 5)
                            return;
                        if (service !== Morning)
                            return;
                        const anchor = findAnchor(`${Prefix.anchor}HolyFriday`, btn.docFragment);
                        if (!anchor)
                            return console.log('The anchor was not found');
                        await SixthHour();
                        await NinethHour();
                        async function SixthHour() {
                            if (hour !== '6H')
                                return;
                            const Omono = findTable(`${Prefix.HolyWeek}${"OMonoGuenis"}`, PrayersArrayFR); //!The titles of this table starts with Prefix.HolyWeek, but the table is included in the PrayersArrayFR not in the GospelNightArray. This is because the languages of its text is not limited to [Coptic, French, Arabic] like the other tables in GospelNightArray, but include the Copt in arabic charcters [Coptic, French, Coptic Arabic, Arabic] 
                            await insertStPaul("GAL:6:14-18", "Tayshoury"); //Inserting the St. Paul Reading
                            insertTable(getLitanies("H6Litanies"), prayersLanguages, anchor); //Inserting the 6th hour litanies
                            if (Omono)
                                insertTable(Omono, prayersLanguages, anchor); //Inserting "Ô Monon Guenis"
                        }
                        ;
                        async function NinethHour() {
                            if (hour !== '9H')
                                return;
                            const Agios = findTable(Prefix.commonPrayer + "Agios&D=$copticFeasts.HolyFriday", PrayersArrayFR);
                            await insertStPaul('PHP:2:5-11', "Tishoury");
                            insertTable(getLitanies("H9Litanies"), prayersLanguages, anchor); //Inserting the 9th hour litanies
                            if (Agios)
                                insertTable(Agios, prayersLanguages, anchor); //Inserting "Agios"
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
                        function getLitanies(hour) {
                            return findTable(Prefix.bookOfHours + hour, PrayersArrayFR);
                        }
                    }
                    ;
                    function insertTable(table, langs, anchor) {
                        if (!table || !langs || !anchor)
                            return;
                        insertTablesBeforeAnchor([table], anchor, langs);
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
                    if (!btns.length)
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
                        position: containerDiv,
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
            if (!table.length)
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
                position: container,
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
    const anchor = findAnchor(`${Prefix.anchor}ConcludingHymn`, container);
    if (!anchor)
        return console.log('Didn\'t find Concluding Hymn Season Anchor');
    let tbl;
    (function insertSeasonal() {
        if (Season === Seasons.HolyWeek)
            return;
        let title = Prefix.commonPrayer + "ConcludingHymn&D=$Seasons.";
        if (Season === Seasons.NoSeason)
            title += Object.entries(Seasons).find(entry => entry[1] === naturalSeasons())[0];
        else
            title += Object.entries(Seasons).find(entry => entry[1] === Season)[0];
        tbl = findTable(title, CommonArray) || undefined;
        if (!tbl)
            return console.log('Didn\'t find a relevant table');
        (function ifGreatLent() {
            if (Season !== Seasons.GreatLent)
                return;
            anchor.previousElementSibling.remove(); //We remove the first paragraph ('Amin Allelujah')
            if ([0, 6].includes(weekDay))
                tbl = [tbl[tbl.length - 1]]; //The last row is for the Great Lent Saturdays and Sundays
            else {
                tbl = [...tbl].slice(0, -2); //We remove the 2nd row, and we remove the last row. ! Notice that we create a new table
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
async function insertMassReadingOtherThanGospel(readingPrefix, position, languages, container = containerDiv, clearContainer = false, readingDate) {
    //@ts-ignore
    if (!readingPrefix)
        return;
    if (container === containerDiv && clearContainer)
        container.innerHTML = "";
    if (!container.children?.length)
        container.appendChild(document.createElement("div"));
    if (!position.el)
        position.el = container.children[0];
    if (!position.beforeOrAfter)
        position.beforeOrAfter = "beforebegin";
    if (!readingDate)
        readingDate = copticReadingsDate;
    const readingArray = getArrayFromPrefix(readingPrefix);
    const reading = readingArray?.find((table) => tableMatchingDates(Title(table), [readingDate]));
    if (!reading) {
        console.log("Did not find a reading for the current copticReadingsDate");
        return;
    }
    ;
    const tables = [];
    const titleRows = reading
        .filter(row => RegExp(`(${css.Title}|${css.SubTitle})$`).test(row[0])) //We search for all the rows having the 'Title' or 'SubTitle' class
        .map(row => reading.indexOf(row)); //We return the index of each row
    if (titleRows.length < 2)
        tables.push(reading); //If there is no more than 1 row having 'Title' or 'SubTitle as class, we will push the reading table as is to tables
    else
        titleRows
            .forEach(index => tables.push(reading.slice(index, titleRows[titleRows.indexOf(index) + 1] || titleRows[titleRows.length - 1]))); //If there are more than 1 row having 'Title' or 'SubTitle' as class, we will split the reading tables into separate tables each starting with one of the 'Title/SubTitle' rows, and ending before the next 'Title/SubTitle' row 
    let retrievedText = await Promise.all(tables.map(async (table) => await retrieveReadingTableFromBible(table, languages)));
    return insertTablesBeforeAnchor(retrievedText, position.el, languages, position.beforeOrAfter);
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
    if (!rowsWithReferences.length)
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
            //!We will get the last verse of the chapter from the Arabic version of the Bible since this is the version that was used when inserting the readings refrences.
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
                while (chapter[chapter.length - 1]?.[0] === '\n')
                    chapter.pop();
            })();
            const first = chapter.find(verse => verse?.[0] === Start);
            if (!first)
                return new Error("could not retrieve 'first'");
            let last = chapter.find(verse => verse?.[0] === End);
            if (!last && lang === 'AR')
                return new Error("could not retrieve 'last'");
            while (lang !== 'AR' && !last) {
                End = (Number(End) - 1).toString();
                last = chapter.find(verse => verse?.[0] === End);
            }
            ;
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
function matchPargraphsSplitting(retrieved, langs, add, actor = getActor(css.NoActor)) {
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
    if (!args.container.children?.length)
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
        insertExpandableBtn([bishop], getAnchor("Gospel")?.previousElementSibling, 'beforebegin');
    })();
    await insertPsalmAndGospelReadings();
    (function insertPsalmAndGospelResponses() {
        if (!args.isMass || args.gospel)
            return; //If we are not calling the function with a Mass or a liturgy (Unbpaptized Mass, or Incense Dawn/Vespers) context, we will not insert the Gospel and Psalm responses
        if (copticReadingsDate === copticFeasts.PalmSunday && args.prefix === Prefix.gospelMorning)
            return; //We do not insert the 12 gospel responses for the Incense Morning liturgy on Palm Sunday because they are retrieved by reference in the gospel reading table
        insertResponse(3, getAnchor('Gospel')?.nextElementSibling); //Inserting Gospel Response
        insertResponse(0, getAnchor('PsalmResponse')); //Inserting Psalm Response if any
        function insertResponse(index, anchor, position = 'beforebegin') {
            let prayersSequence = setGospelPrayersSequence(args.prefix, args.isMass); //this gives us an array like ['PR_&D=####', 'RGID_Psalm&D=', 'RGID_Gospel&D=', 'GR_&D=####']
            //We will retrieve the tables containing the text of the gospel and the psalm from the GospeldawnArray directly (instead of call findAndProcessPrayers())
            let response = PsalmAndGospelArray.find((tbl) => splitTitle(Title(tbl))[0] === prayersSequence[index]); //!Caution: this must be an '===' search operator not startWith() because otherwise, 'NativitayParamoun' will be selected for the 'Nativity' Season, and 'Baptism Paramoun' might be selected for the 'Baptism' Season if their tables in PrayersArray are before those of the relevant table
            if (!response?.length)
                return;
            insertTablesBeforeAnchor([response], anchor, prayersLanguages, position);
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
            insertTablesBeforeAnchor(tbls, anchor); //!We are omitting the langs argument on purpose in ordrer for the languages to be retrieved from the title of each table. We do this since the tables do not all belong to the same tables array and do not hence share the same languages pattern/sequence 
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
            return findAnchor(`${Prefix.anchor}${root}`, args.container);
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
    else if ([lordFeasts, stMaryFeasts, celestialBeingsFeasts, MartyrsFeasts, nonMartyrsFeasts, saintsFeasts, apostlesFeasts].includes(value))
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
                let expandable = containerDiv.querySelector(`#${id}`);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVjbGFyZUJ1dHRvbnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9tb2R1bGVzL0RlY2xhcmVCdXR0b25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFNBQVMsU0FBUztJQUNoQixPQUFPO1FBQ0wsT0FBTyxFQUFFO1lBQ1AscU5BQXFOO1lBQ3JOLE1BQU0sQ0FBQyxhQUFhLEdBQUcsY0FBYztZQUNyQyxNQUFNLENBQUMsV0FBVyxHQUFHLFNBQVM7WUFDOUIsTUFBTSxDQUFDLGFBQWEsR0FBRyxlQUFlO1lBQ3RDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsWUFBWTtZQUNqQyxNQUFNLENBQUMsV0FBVyxHQUFHLGlCQUFpQjtZQUN0QyxNQUFNLENBQUMsV0FBVyxHQUFHLGlCQUFpQjtZQUN0QyxNQUFNLENBQUMsY0FBYyxHQUFHLGdCQUFnQjtZQUN4QyxNQUFNLENBQUMsV0FBVyxHQUFHLGNBQWM7WUFDbkMsTUFBTSxDQUFDLGNBQWMsR0FBRyxxQkFBcUI7WUFDN0MsTUFBTSxDQUFDLGFBQWEsR0FBRyxZQUFZO1lBQ25DLE1BQU0sQ0FBQyxhQUFhLEdBQUcsY0FBYztZQUNyQyxNQUFNLENBQUMsYUFBYSxHQUFHLFlBQVk7U0FDcEM7UUFDRCxJQUFJLEVBQUU7WUFDSixxR0FBcUc7WUFDckcsVUFBVSxFQUFFO2dCQUNWLE1BQU0sQ0FBQyxVQUFVLEdBQUcsZUFBZTtnQkFDbkMsTUFBTSxDQUFDLFVBQVUsR0FBRyxpQkFBaUI7Z0JBQ3JDLE1BQU0sQ0FBQyxVQUFVLEdBQUcscUJBQXFCO2dCQUN6QyxNQUFNLENBQUMsVUFBVSxHQUFHLHNCQUFzQjtnQkFDMUMsTUFBTSxDQUFDLFlBQVksR0FBRyxjQUFjO2dCQUNwQyxNQUFNLENBQUMsVUFBVSxHQUFHLHdCQUF3QjtnQkFDNUMsTUFBTSxDQUFDLFVBQVUsR0FBRyxXQUFXO2dCQUMvQixNQUFNLENBQUMsVUFBVSxHQUFHLFVBQVU7Z0JBQzlCLE1BQU0sQ0FBQyxVQUFVLEdBQUcsbUJB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