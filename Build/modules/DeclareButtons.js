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
            if (!tables || tables.length < 1)
                return;
            const anchor = findAnchor(`${Prefix.anchor}WeHaveBeenSaved`, btnDocFragment); //This is the html element before which we will insert the retrived tables
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
            if (seasonalIntercessions.length < 1)
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
                if (!sameRoot || sameRoot.length < 1)
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
                    const anchor = responses.find(div => div?.dataset.anchor === `${Prefix.anchor}Saints`);
                    if (!anchor)
                        return console.log('The anchor was not found'); //If no placeHolder is found, it means that we are during a special Season (not a 'NoSeason' period), and no placeHolder for the saints response is included
                    if (!Object.values(saintsFeasts).includes(copticDate))
                        return; //It means that today is not a saint feast
                    specialResponse = PraxisResponsesArray.filter((table) => Title(table)?.includes('&D=$saintsFeasts.') && tableMatchingDates(Title(table), [copticDate]));
                    if (specialResponse.length < 1)
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
                let intro = { ...Intros.synaxariumIntro };
                Object.entries(intro)
                    .forEach(entry => intro[entry[0]] =
                    entry[1]
                        .replace("theday", Number(copticDay).toString())
                        .replace("themonth", copticMonths[Number(copticMonth)][entry[0]]));
                await insertMassReading(Prefix.synaxarium, [intro,
                    undefined], copticDate); //!Caution: we must pass the copticDate for the 'date' argument, otherwise it will be set to the copticReadingsDate by default, and we will get the wrong synaxarium
                //We will reverse the langauges
                const introHTML = children.filter(div => div.dataset.root === `${Prefix.synaxarium}&D=${copticDate}`)?.[1];
                if (!introHTML || introHTML.children.length < 1)
                    return console.log('Didn\'t find the Synaxarium');
                introHTML.children[0].insertAdjacentElement("beforebegin", introHTML.children[0]);
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
                let cssClass = css.End, position = { beforeOrAfter: "beforebegin", el: readingsAnchor };
                let readings = await insertMassReadingOtherThanGospel(readingPrefix, position, btnDocFragment, false, date);
                if (!readings || readings.length === 0)
                    return;
                readings = readings.filter(div => div && div[0]);
                [end, intro].forEach(el => {
                    if (!el)
                        return;
                    if (el === intro) {
                        cssClass = css.Intro;
                        position.el = readings[0][1];
                    }
                    ;
                    const table = [
                        [
                            readingPrefix + cssClass,
                            intro?.AR || '',
                            intro?.FR || '',
                            intro?.EN || '',
                        ],
                    ];
                    insertTablesBeforeAnchor([table], position.el, Object.keys(el));
                });
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
                        const [OurFather, Creed, KyrielisonMass] = ["OurFatherInHeaven", "Creed", "Kyrielison41"].map(title => Prefix.commonPrayer + title);
                        const [AngelsPrayers, HailMaria, WeExaltYou, Agios, KyrielisonNoMass, HolyLord, FinalPrayer, Absolution, HourEnd] = ["AngelsPrayer", "WeSaluteYouMary", "WeExaltYouStMary", "Agios", "Kyrielison41", "HolyLordOfSabaot", "AllHoursFinalPrayer", "PriestsAbsolution", `${hourName}End`].map(title => Prefix.bookOfHours + title);
                        if (mass)
                            return ifMass();
                        else
                            return ifNotMass();
                        function ifNotMass() {
                            return getSequence().map(title => findTable(title, getArrayFromPrefix(title)) || undefined);
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
                            return getSequence().map(title => findTable(title, getArrayFromPrefix(title)) || undefined);
                            function getSequence() {
                                //!index passed to the function = the differece between hours.length and the index of the hour 
                                if (index < 2) {
                                    //This is the last hour btn (hours.length - (hours.length-1)=1)
                                    return [KyrielisonMass];
                                }
                                else if (index < 3) {
                                    //this is the before last hour btn (hours.length - (hours.length-2)=2)
                                    return [Agios, OurFather, HailMaria];
                                }
                                else {
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
            const parags = Array.from(children
                .filter(div => div.dataset?.root === `${Prefix.commonPrayer}ThanksGiving`)?.[7]
                ?.children); //Those are the paragraphs that conatin the sentence that will be changed according to each liturgy
            if (!parags || parags.length < 1)
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
            getLanguages(Prefix.commonPrayer)
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
                    cymbals = [findTable(Prefix.cymbalVerses + "End", CymbalVersesArray) || undefined];
                else
                    cymbals = getCymbalVerses();
                if (cymbals.length < 1)
                    return console.log("no cymbals were found by the provided sequence: ");
                insertTablesBeforeAnchor(cymbals, anchor.nextElementSibling, btn.languages);
                insertSaintsExpandable(findAnchor(`${Prefix.anchor}SaintsCymbals'`, docFragment), Prefix.cymbalVerses, 'St(Mary|Maykel|Steven|John|Marc)', getLabel({
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
                            insertTablesBeforeAnchor([table], anchor, prayersLanguages);
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
            const anchor = findAnchor(`${Prefix.anchor}GoToRecon`, btnDocFragment);
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
                    Array.from(containerDiv.children)
                        .filter((div) => div.dataset?.group === `${prefix}Reconciliation`)
                        .forEach(div => div.classList.toggle(css.hidden)); //We hide or unhide the main reconcilaition prayer when the second conciliation is displayed or hidden
                }
            });
            insertExpandableBtn([btnRecon], anchor, 'beforebegin');
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
                el: anchor.previousElementSibling,
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
            //Inserting an Expandable button for the LongSpasmos
            insertExpandable(`${Prefix.massCommon}SpasmosAdamLong`, findAnchor(`${Prefix.anchor}SpasmosLong`, btnDocFragment));
            //Inserting Expanadable button for Watos Spasmoses
            insertExpandable(`${Prefix.massCommon}SpasmosWatosLong`, findAnchor(`${Prefix.anchor}WatosShort`, btnDocFragment), `${Prefix.massCommon}SpasmosWatosShort`);
            function insertExpandable(spasmosTitle, anchor, hideRoot) {
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
                            clearContainerDiv: false,
                            clearRightSideBar: false,
                        });
                        if (!hideRoot)
                            return;
                        Array.from(containerDiv.querySelectorAll('div'))
                            .filter((div) => div.dataset?.root === hideRoot)
                            .forEach((div) => div.classList.toggle(css.hidden));
                    }
                });
                insertExpandableBtn([btnSpasmos], anchor, 'beforebegin');
            }
        })();
        (function insertLitaniesIntroductionFromOtherMasses() {
            if (btn !== Btn.MassStBasil)
                return; //This button appears only in St Basil Mass
            const intro = "LitaniesIntro";
            const anchor = findAnchor(`${Prefix.anchor}GoToLitan`, btnDocFragment).previousElementSibling;
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
            if (Season == Seasons.GreatLent)
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
    if (!reading) {
        console.log("Did not find a reading for the current copticReadingsDate");
        return;
    }
    ;
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
    insertTablesBeforeAnchor(retrievedText, position.el, languages, position.beforeOrAfter);
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
            if (!response || response.length === 0)
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVjbGFyZUJ1dHRvbnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9tb2R1bGVzL0RlY2xhcmVCdXR0b25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFNBQVMsU0FBUztJQUNoQixPQUFPO1FBQ0wsT0FBTyxFQUFFO1lBQ1AscU5BQXFOO1lBQ3JOLE1BQU0sQ0FBQyxhQUFhLEdBQUcsY0FBYztZQUNyQyxNQUFNLENBQUMsV0FBVyxHQUFHLFNBQVM7WUFDOUIsTUFBTSxDQUFDLGFBQWEsR0FBRyxlQUFlO1lBQ3RDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsWUFBWTtZQUNqQyxNQUFNLENBQUMsV0FBVyxHQUFHLGlCQUFpQjtZQUN0QyxNQUFNLENBQUMsV0FBVyxHQUFHLGlCQUFpQjtZQUN0QyxNQUFNLENBQUMsY0FBYyxHQUFHLGdCQUFnQjtZQUN4QyxNQUFNLENBQUMsV0FBVyxHQUFHLGNBQWM7WUFDbkMsTUFBTSxDQUFDLGNBQWMsR0FBRyxxQkFBcUI7WUFDN0MsTUFBTSxDQUFDLGFBQWEsR0FBRyxZQUFZO1lBQ25DLE1BQU0sQ0FBQyxhQUFhLEdBQUcsY0FBYztZQUNyQyxNQUFNLENBQUMsYUFBYSxHQUFHLFlBQVk7U0FDcEM7UUFDRCxJQUFJLEVBQUU7WUFDSixxR0FBcUc7WUFDckcsVUFBVSxFQUFFO2dCQUNWLE1BQU0sQ0FBQyxVQUFVLEdBQUcsZUFBZTtnQkFDbkMsTUFBTSxDQUFDLFVBQVUsR0FBRyxpQkFBaUI7Z0JBQ3JDLE1BQU0sQ0FBQyxVQUFVLEdBQUcscUJBQXFCO2dCQUN6QyxNQUFNLENBQUMsVUFBVSxHQUFHLHNCQUFzQjtnQkFDMUMsTUFBTSxDQUFDLFlBQVksR0FBRyxjQUFjO2dCQUNwQyxNQUFNLENBQUMsVUFBVSxHQUFHLHdCQUF3QjtnQkFDNUMsTUFBTSxDQUFDLFVBQVUsR0FBRyxXQUFXO2dCQUMvQixNQUFNLENBQUMsVUFBVSxHQUFHLFVBQVU7Z0JBQzlCLE1BQU0sQ0FBQyxVQUFVLEdBQUcsbUJB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