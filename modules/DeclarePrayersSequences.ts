const IncensePrayersSequence: string[] = [
    //This is the generic sequence of any incense office (morning or evening). The onClick function triggered by btnIncenseDawn and btnIncenseVespers, will remove what is irrelevant and add keeps what needs to be kept
    Prefix.commonIncense+"EleysonImas&D=$copticFeasts.AnyDay",
    Prefix.commonIncense+"Litanies&D=$copticFeasts.AnyDay",
    Prefix.incenseDawn+"SickLitany&D=$copticFeasts.AnyDay",
    Prefix.incenseDawn+"TravelersLitany&D=$copticFeasts.AnyDay",
    Prefix.incenseDawn+"OblationsLitany&D=$copticFeasts.AnyDay",
    Prefix.incenseVespers+"DepartedLitany&D=$copticFeasts.AnyDay",
    Prefix.commonPrayer+"AngelsPrayer&D=$copticFeasts.AnyDay",
    Prefix.incenseVespers+"LordKeepUsThisNight&D=$copticFeasts.AnyDay",
    Prefix.commonIncense+"Doxolgoies&D=$copticFeasts.AnyDay",
    Prefix.commonPrayer+"EfnotiNaynan&D=$copticFeasts.AnyDay",
    Prefix.commonIncense+"LiturgyEnd&D=$copticFeasts.AnyDay"
]; 


const MassPrayersSequences = {
    //those are the sequences of the 'Baptized' mass prayers (starting from Reconciliation) for each mass
    MassUnbaptized: [
        Prefix.massCommon+"GloryAndHonor&D=$copticFeasts.AnyDay",
        Prefix.massCommon+"HallelujahFayBiBi&D=$copticFeasts.AnyDay",
        Prefix.massCommon+"HallelujahFayBiBiFast&D=$copticFeasts.AnyDay",
        Prefix.massCommon+"BenedictionOfTheLamb&D=$copticFeasts.AnyDay",
        Prefix.commonPrayer+"ThanksGiving&D=$copticFeasts.AnyDay",
        Prefix.massCommon+"AbsolutionForTheFather&D=$copticFeasts.AnyDay",
        Prefix.massCommon+"Tayshoury&D=$copticFeasts.AnyDay",
        Prefix.massCommon+"Tishoury&D=$copticFeasts.AnyDay",
        Prefix.massCommon+"IntercessionsHymn&D=$copticFeasts.AnyDay",
        Prefix.commonPrayer+"Creed&D=$copticFeasts.AnyDay"
    ], //Those are the prayers of the 'Unbaptized Mass'
    MassStBasil: [
        Prefix.massCommon+"ReconciliationComment&D=$copticFeasts.AnyDay",
        Prefix.massStBasil+"Reconciliation&D=$copticFeasts.AnyDay",
        Prefix.massCommon+"EndOfReconciliation&D=$copticFeasts.AnyDay",
        Prefix.massStBasil+"Anaphora&D=$copticFeasts.AnyDay",
        Prefix.massStBasil+"Agios&D=$copticFeasts.AnyDay",
        Prefix.massStBasil+"InstitutionNarrative&D=$copticFeasts.AnyDay",
        Prefix.massCommon+"AsWeAlsoCommemorateHisHolyPassionPart1&D=$copticFeasts.AnyDay",
    ], //The sequence of prayers of St Basil Mass (starting from Reconciliation)
    MassStGregory: [
        Prefix.massCommon+"ReconciliationComment&D=$copticFeasts.AnyDay",
        Prefix.massStGregory+"Reconciliation&D=$copticFeasts.AnyDay",
        Prefix.massCommon+"EndOfReconciliation&D=$copticFeasts.AnyDay",
        Prefix.massStGregory+"Anaphora&D=$copticFeasts.AnyDay",
        Prefix.massStGregory+"Agios&D=$copticFeasts.AnyDay",
        Prefix.massStGregory+"AsWeCommemorateYourHolyPassionPart1&D=$copticFeasts.AnyDay",
        Prefix.massStGregory+"CallOfTheHolySpiritPart1&D=$copticFeasts.AnyDay",
        Prefix.massStGregory+"LitaniesIntroduction&D=$copticFeasts.AnyDay",
        Prefix.massStGregory+"Litanies&D=$copticFeasts.AnyDay",
        Prefix.massStGregory+"FractionIntroduction&D=$copticFeasts.AnyDay"
    ], //The sequence of prayers of St Gregory Mass (starting from reconciliation)
    MassStCyril: [
        Prefix.massCommon+"ReconciliationComment&D=$copticFeasts.AnyDay",
        Prefix.massStCyril+"Reconciliation&D=$copticFeasts.AnyDay",
        Prefix.massCommon+"EndOfReconciliation&D=$copticFeasts.AnyDay",
        Prefix.massStCyril+"Anaphora&D=$copticFeasts.AnyDay",
        Prefix.massStCyril+"Agios&D=$copticFeasts.AnyDay",
        Prefix.massStCyril+"Part8&D=$copticFeasts.AnyDay",
        Prefix.massStCyril+"Part9&D=$copticFeasts.AnyDay",
        Prefix.massStCyril+"Part10&D=$copticFeasts.AnyDay",
        Prefix.massStCyril+"LitaniesIntroduction&D=$copticFeasts.AnyDay",
    ], // the sequence of prayers of St Cyril Mass (starting from Reconciliation)
    MassStJohn: [], // the sequence of prayers of St John Mass (tarting from Reconciliation)
    MassCallOfHolySpirit: [
        Prefix.massCommon+"CallOfTheHolySpiritPart1&D=$copticFeasts.AnyDay",
    ],
    MassLitanies: [
        Prefix.massCommon+"LitaniesIntroduction&D=$copticFeasts.AnyDay",
        Prefix.massCommon+"SaintsCommemoration&D=$copticFeasts.AnyDay",
        Prefix.massCommon+"CommemorationOfTheDeparted&D=$copticFeasts.AnyDay",
        Prefix.massCommon+"FractionIntroduction&D=$copticFeasts.AnyDay",
        Prefix.commonPrayer+"OurFatherWhoArtInHeaven&D=$copticFeasts.AnyDay",
        Prefix.commonPrayer+"BlockInTheNameOfOurLord&D=$copticFeasts.AnyDay",
        Prefix.massCommon+"PrayerForTheFather&D=$copticFeasts.AnyDay",
        Prefix.commonPrayer+"BlockIriniPassi&D=$copticFeasts.AnyDay",
        Prefix.massCommon+"AbsolutionPrayerForTheFather&D=$copticFeasts.AnyDay",
        Prefix.massCommon+"ConfessionIntroduction&D=$copticFeasts.AnyDay",
        Prefix.massCommon+"Confession&D=$copticFeasts.AnyDay",
        Prefix.commonPrayer+"ZoksasiKyrie&D=$copticFeasts.AnyDay"
    ], //The litanies. They are common to all masses except 
    Communion: [
        Prefix.massCommon+"CommunionPsalm150&D=$copticFeasts.AnyDay",
        Prefix.massCommon+"LiturgyEnd&D=$copticFeasts.AnyDay",
    ], //the sequence of prayers from 'Confession' until the end of the mass, it is common to all masses 
};

const PsalmodyPrayersSequences = {
    Year: [
        Prefix.psalmody+"WakeUpSonsOfLight&D=$copticFeasts.AnyDay",

        Prefix.psalmody+"MarenOosht&D=$copticFeasts.AnyDay",

        Prefix.psalmody+"FirstHos&D=$copticFeasts.AnyDay",

        Prefix.psalmody+"LobshFirstHos&D=$copticFeasts.AnyDay",

        Prefix.psalmody+"CommentaryOnHos1&D=$copticFeasts.AnyDay",

        Prefix.psalmody+"SecondHos&D=$copticFeasts.AnyDay",

        Prefix.psalmody+"LobshSecondHos&D=$copticFeasts.AnyDay",

        Prefix.psalmody+"ThirdHos&D=$copticFeasts.AnyDay",

        Prefix.psalmody+"Arebsalin&D=$copticFeasts.AnyDay",

        Prefix.psalmody+"Tenen&D=$copticFeasts.AnyDay",

        Prefix.psalmody+"TenOwehEnthok&D=$copticFeasts.AnyDay",

        Prefix.psalmody+"Lobsh1WatesOnSaturdayTheotoky",

        Prefix.psalmody+"Lobsh2WatesOnSaturdayTheotoky",

        Prefix.psalmody+"EndOfWatesTheotokies&D=$copticFeasts.AnyDay",

    ],

    Kiahk: [
        Prefix.psalmody+"WakeUpSonsOfLight&D=$copticFeasts.AnyDay",


        Prefix.psalmody+"KiahkHos&D=$$copticFeasts.AnyDay",

        Prefix.psalmody+"ChantAgiosOsiOs&D=$copticFeasts.AnyDay",

        Prefix.psalmody+"MarenOosht&D=$copticFeasts.AnyDay",

        Prefix.psalmody+"PsalyOnFirstHos&D=$copticFeasts.AnyDay",

        Prefix.psalmody+"FirstHos&D=$copticFeasts.AnyDay",

        Prefix.psalmody+"LobshFirstHos&D=$copticFeasts.AnyDay",

        Prefix.psalmody+"ChantGodSaidToMoses&D=$copticFeasts.AnyDay",

        Prefix.psalmody+"CommentaryOnHos1&D=$copticFeasts.AnyDay",

        Prefix.psalmody+"PsalyOnSecondHos&D=$copticFeasts.AnyDay",

        Prefix.psalmody+"SecondHos&D=$copticFeasts.AnyDay",

        Prefix.psalmody+"LobshSecondHos&D=$copticFeasts.AnyDay",

        Prefix.psalmody+"ThirdHos&D=$copticFeasts.AnyDay",

        Prefix.psalmody+"Arebsalin&D=$copticFeasts.AnyDay",

        Prefix.psalmody+"Tenen&D=$copticFeasts.AnyDay",

        Prefix.psalmody+"TenOwehEnthok&D=$copticFeasts.AnyDay",

        Prefix.psalmody+"Lobsh1WatesOnSaturdayTheotoky",

        Prefix.psalmody+"Lobsh2WatesOnSaturdayTheotoky",

        Prefix.psalmody+"EndOfWatesTheotokies&D=$copticFeasts.AnyDay",

    ],
}

const HolyWeekPrayersSequences = {
    PassOver: [
        Prefix.HolyWeek+"HourIntroduction&D=$Seasons.HolyWeek",

        Prefix.HolyWeek+"PsalmAndGospel&D=$Seasons.HolyWeek",

        Prefix.HolyWeek+"Commentary&D=$Seasons.HolyWeek",

        Prefix.HolyWeek+"PassoverEnd&D=$Seasons.HolyWeek",

    ],
    Lakan: [
        Prefix.commonIncense+"EleysonImas&D=$copticFeasts.AnyDay",
        Prefix.cymbalVerses+"&D=$copticFeasts.HolyThursday",
        Prefix.bookOfHours+"Psalm50&D=$copticFeasts.AnyDay",
        Prefix.HolyWeek+"LakanProphecies&D=$copticFeasts.HolyThursday",
        Prefix.HolyWeek+"LakanSermony&D=$copticFeasts.HolyThursday",
        Prefix.massCommon+"BiEhmotGhar&D=$copticFeasts.AnyDay",
        Prefix.anchor+"Readings&D=$copticFeasts.AnyDay",
        Prefix.commonPrayer+"Agios&D=$copticFeasts.HolyThursday",
        Prefix.anchor+"GospelLitany&D=$copticFeasts.AnyDay",
        Prefix.incenseDawn+"SickPrayer&D=$copticFeasts.AnyDay",
        Prefix.incenseDawn+"TravelersPrayer&D=$copticFeasts.AnyDay",
        Prefix.massCommon+"SeasonalLitanyOfTheHarvest&D=$copticFeasts.AnyDay",
        Prefix.commonPrayer+"KyrieElieson&D=$copticFeasts.AnyDay",
        Prefix.massCommon+"LitaniesFinal&D=$copticFeasts.AnyDay",
        Prefix.commonPrayer+"KyrieElieson&D=$copticFeasts.AnyDay",
        Prefix.massCommon+"PresidentLitany&D=$copticFeasts.AnyDay",
        Prefix.incenseVespers+"DepartedPrayer&D=$copticFeasts.AnyDay",
        Prefix.incenseDawn+"OblationsPrayer&D=$copticFeasts.AnyDay",
        Prefix.commonPrayer+"CatechumensPrayer&D=$copticFeasts.AnyDay",
        Prefix.HolyWeek+"LakanPrayer&D=$copticFeasts.HolyThursday",
        Prefix.commonPrayer+"BlockShlil&D=$copticFeasts.AnyDay",
        Prefix.commonPrayer+"BlockIriniPassi&D=$copticFeasts.AnyDay",
        Prefix.commonPrayer+"ChurchLitany&D=$copticFeasts.AnyDay",
        Prefix.commonPrayer+"PopeAndBishopLitany&D=$copticFeasts.AnyDay",
        Prefix.commonPrayer+"MeetingsLitany&D=$copticFeasts.AnyDay",
        //Insert "Eyn Sophia Si Epros"
        Prefix.commonPrayer+"Creed&D=$copticFeasts.AnyDay",
        Prefix.massCommon+"LakanSpasmosAdamLong&D=$copticFeasts.HolyThursday",
        Prefix.massCommon+"DiaconResponseKissEachOther&D=$copticFeasts.AnyDay",
        Prefix.placeHolder,
        Prefix.massCommon+"SpasmosAdamShort&D=$copticFeasts.AnyDay",
        Prefix.HolyWeek+"LakanAnaphora&D=$copticFeasts.HolyThursday",

        // Prefix.commonIncense+"LiturgyEnd&D=$copticFeasts.AnyDay"
    ],
    ThursdayMass: [],
    SaturdayIncenseDawn: [],
    SaturdayMass: [],
}

