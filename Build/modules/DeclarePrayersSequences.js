const IncensePrayersSequence = [
    //This is the generic sequence of any incense office (morning or evening). The onClick function triggered by btnIncenseDawn and btnIncenseVespers, will remove what is irrelevant and add keeps what needs to be kept
    Prefix.commonIncense + "EleysonImas&D=$copticFeasts.AnyDay",
    Prefix.commonIncense + "Litanies&D=$copticFeasts.AnyDay",
    Prefix.incenseDawn + "SickLitany&D=$copticFeasts.AnyDay",
    Prefix.incenseDawn + "TravelersLitany&D=$copticFeasts.AnyDay",
    Prefix.incenseDawn + "OblationsLitany&D=$copticFeasts.AnyDay",
    Prefix.incenseVespers + "DepartedLitany&D=$copticFeasts.AnyDay",
    Prefix.commonPrayer + "AngelsPrayer&D=$copticFeasts.AnyDay",
    Prefix.incenseVespers + "LordKeepUsThisNight&D=$copticFeasts.AnyDay",
    Prefix.commonIncense + "Doxolgoies&D=$copticFeasts.AnyDay",
    Prefix.commonPrayer + "EfnotiNaynan&D=$copticFeasts.AnyDay",
    Prefix.commonIncense + "LiturgyEnd&D=$copticFeasts.AnyDay"
];
const MassPrayersSequences = {
    //those are the sequences of the 'Baptized' mass prayers (starting from Reconciliation) for each mass
    MassUnbaptized: [
        Prefix.massCommon + "GloryAndHonor&D=$copticFeasts.AnyDay",
        Prefix.massCommon + "HallelujahFayBiBi&D=$copticFeasts.AnyDay",
        Prefix.massCommon + "HallelujahFayBiBiFast&D=$copticFeasts.AnyDay",
        Prefix.massCommon + "BenedictionOfTheLamb&D=$copticFeasts.AnyDay",
        Prefix.commonPrayer + "ThanksGiving&D=$copticFeasts.AnyDay",
        Prefix.massCommon + "AbsolutionForTheFather&D=$copticFeasts.AnyDay",
        Prefix.massCommon + "Tayshoury&D=$copticFeasts.AnyDay",
        Prefix.massCommon + "Tishoury&D=$copticFeasts.AnyDay",
        Prefix.massCommon + "IntercessionsHymn&D=$copticFeasts.AnyDay",
        Prefix.commonPrayer + "Creed&D=$copticFeasts.AnyDay"
    ], //Those are the prayers of the 'Unbaptized Mass'
    MassStBasil: [
        Prefix.massCommon + "ReconciliationComment&D=$copticFeasts.AnyDay",
        Prefix.massStBasil + "Reconciliation&D=$copticFeasts.AnyDay",
        Prefix.massCommon + "EndOfReconciliation&D=$copticFeasts.AnyDay",
        Prefix.massStBasil + "Anaphora&D=$copticFeasts.AnyDay",
        Prefix.massStBasil + "Agios&D=$copticFeasts.AnyDay",
        Prefix.massStBasil + "InstitutionNarrative&D=$copticFeasts.AnyDay",
        Prefix.massCommon + "AsWeAlsoCommemorateHisHolyPassionPart1&D=$copticFeasts.AnyDay",
    ], //The sequence of prayers of St Basil Mass (starting from Reconciliation)
    MassStGregory: [
        Prefix.massCommon + "ReconciliationComment&D=$copticFeasts.AnyDay",
        Prefix.massStGregory + "Reconciliation&D=$copticFeasts.AnyDay",
        Prefix.massCommon + "EndOfReconciliation&D=$copticFeasts.AnyDay",
        Prefix.massStGregory + "Anaphora&D=$copticFeasts.AnyDay",
        Prefix.massStGregory + "Agios&D=$copticFeasts.AnyDay",
        Prefix.massStGregory + "AsWeCommemorateYourHolyPassionPart1&D=$copticFeasts.AnyDay",
        Prefix.massStGregory + "CallOfTheHolySpiritPart1&D=$copticFeasts.AnyDay",
        Prefix.massStGregory + "LitaniesIntroduction&D=$copticFeasts.AnyDay",
        Prefix.massStGregory + "Litanies&D=$copticFeasts.AnyDay",
        Prefix.massStGregory + "FractionIntroduction&D=$copticFeasts.AnyDay"
    ], //The sequence of prayers of St Gregory Mass (starting from reconciliation)
    MassStCyril: [
        Prefix.massCommon + "ReconciliationComment&D=$copticFeasts.AnyDay",
        Prefix.massStCyril + "Reconciliation&D=$copticFeasts.AnyDay",
        Prefix.massCommon + "EndOfReconciliation&D=$copticFeasts.AnyDay",
        Prefix.massStCyril + "Anaphora&D=$copticFeasts.AnyDay",
        Prefix.massStCyril + "Agios&D=$copticFeasts.AnyDay",
        Prefix.massStCyril + "Part8&D=$copticFeasts.AnyDay",
        Prefix.massStCyril + "Part9&D=$copticFeasts.AnyDay",
        Prefix.massStCyril + "Part10&D=$copticFeasts.AnyDay",
        Prefix.massStCyril + "LitaniesIntroduction&D=$copticFeasts.AnyDay",
    ], // the sequence of prayers of St Cyril Mass (starting from Reconciliation)
    MassStJohn: [], // the sequence of prayers of St John Mass (tarting from Reconciliation)
    MassCallOfHolySpirit: [
        Prefix.massCommon + "CallOfTheHolySpiritPart1&D=$copticFeasts.AnyDay",
    ],
    MassLitanies: [
        Prefix.massCommon + "LitaniesIntroduction&D=$copticFeasts.AnyDay",
        Prefix.massCommon + "SaintsCommemoration&D=$copticFeasts.AnyDay",
        Prefix.massCommon + "CommemorationOfTheDeparted&D=$copticFeasts.AnyDay",
        Prefix.massCommon + "FractionIntroduction&D=$copticFeasts.AnyDay",
        Prefix.commonPrayer + "OurFatherWhoArtInHeaven&D=$copticFeasts.AnyDay",
        Prefix.commonPrayer + "BlockInTheNameOfOurLord&D=$copticFeasts.AnyDay",
        Prefix.massCommon + "PrayerForTheFather&D=$copticFeasts.AnyDay",
        Prefix.commonPrayer + "BlockIriniPassi&D=$copticFeasts.AnyDay",
        Prefix.massCommon + "AbsolutionPrayerForTheFather&D=$copticFeasts.AnyDay",
        Prefix.massCommon + "ConfessionIntroduction&D=$copticFeasts.AnyDay",
        Prefix.massCommon + "Confession&D=$copticFeasts.AnyDay",
        Prefix.commonPrayer + "ZoksasiKyrie&D=$copticFeasts.AnyDay"
    ], //The litanies. They are common to all masses except 
    Communion: [
        Prefix.massCommon + "CommunionPsalm150&D=$copticFeasts.AnyDay",
        Prefix.massCommon + "LiturgyEnd&D=$copticFeasts.AnyDay",
    ], //the sequence of prayers from 'Confession' until the end of the mass, it is common to all masses 
};
const PsalmodyPrayersSequences = {
    Year: [
        Prefix.psalmody + "WakeUpSonsOfLight&D=$copticFeasts.AnyDay",
        Prefix.psalmody + "MarenOosht&D=$copticFeasts.AnyDay",
        Prefix.psalmody + "FirstHos&D=$copticFeasts.AnyDay",
        Prefix.psalmody + "LobshFirstHos&D=$copticFeasts.AnyDay",
        Prefix.psalmody + "CommentaryOnHos1&D=$copticFeasts.AnyDay",
        Prefix.psalmody + "SecondHos&D=$copticFeasts.AnyDay",
        Prefix.psalmody + "LobshSecondHos&D=$copticFeasts.AnyDay",
        Prefix.psalmody + "ThirdHos&D=$copticFeasts.AnyDay",
        Prefix.psalmody + "Arebsalin&D=$copticFeasts.AnyDay",
        Prefix.psalmody + "Tenen&D=$copticFeasts.AnyDay",
        Prefix.psalmody + "TenOwehEnthok&D=$copticFeasts.AnyDay",
        Prefix.psalmody + "Lobsh1WatesOnSaturdayTheotoky",
        Prefix.psalmody + "Lobsh2WatesOnSaturdayTheotoky",
        Prefix.psalmody + "EndOfWatesTheotokies&D=$copticFeasts.AnyDay",
    ],
    Kiahk: [
        Prefix.psalmody + "WakeUpSonsOfLight&D=$copticFeasts.AnyDay",
        Prefix.psalmody + "KiahkHos&D=$$copticFeasts.AnyDay",
        Prefix.psalmody + "ChantAgiosOsiOs&D=$copticFeasts.AnyDay",
        Prefix.psalmody + "MarenOosht&D=$copticFeasts.AnyDay",
        Prefix.psalmody + "PsalyOnFirstHos&D=$copticFeasts.AnyDay",
        Prefix.psalmody + "FirstHos&D=$copticFeasts.AnyDay",
        Prefix.psalmody + "LobshFirstHos&D=$copticFeasts.AnyDay",
        Prefix.psalmody + "ChantGodSaidToMoses&D=$copticFeasts.AnyDay",
        Prefix.psalmody + "CommentaryOnHos1&D=$copticFeasts.AnyDay",
        Prefix.psalmody + "PsalyOnSecondHos&D=$copticFeasts.AnyDay",
        Prefix.psalmody + "SecondHos&D=$copticFeasts.AnyDay",
        Prefix.psalmody + "LobshSecondHos&D=$copticFeasts.AnyDay",
        Prefix.psalmody + "ThirdHos&D=$copticFeasts.AnyDay",
        Prefix.psalmody + "Arebsalin&D=$copticFeasts.AnyDay",
        Prefix.psalmody + "Tenen&D=$copticFeasts.AnyDay",
        Prefix.psalmody + "TenOwehEnthok&D=$copticFeasts.AnyDay",
        Prefix.psalmody + "Lobsh1WatesOnSaturdayTheotoky",
        Prefix.psalmody + "Lobsh2WatesOnSaturdayTheotoky",
        Prefix.psalmody + "EndOfWatesTheotokies&D=$copticFeasts.AnyDay",
    ],
};
const HolyWeekPrayersSequences = {
    PassOver: [
        Prefix.HolyWeek + "HourIntroduction&D=$Seasons.HolyWeek",
        Prefix.HolyWeek + "PsalmAndGospel&D=$Seasons.HolyWeek",
        Prefix.HolyWeek + "Commentary&D=$Seasons.HolyWeek",
        Prefix.HolyWeek + "PassoverEnd&D=$Seasons.HolyWeek",
    ],
    Lakan: [
        Prefix.commonIncense + "EleysonImas&D=$copticFeasts.AnyDay",
        Prefix.cymbalVerses + "&D=$copticFeasts.HolyThursday",
        Prefix.bookOfHours + "Psalm50&D=$copticFeasts.AnyDay",
        Prefix.HolyWeek + "LakanProphecies&D=$copticFeasts.HolyThursday",
        Prefix.HolyWeek + "LakanSermony&D=$copticFeasts.HolyThursday",
        Prefix.massCommon + "BiEhmotGhar&D=$copticFeasts.AnyDay",
        Prefix.anchor + "Readings&D=$copticFeasts.AnyDay",
        Prefix.commonPrayer + "Agios&D=$copticFeasts.HolyThursday",
        Prefix.anchor + "GospelLitany&D=$copticFeasts.AnyDay",
        Prefix.incenseDawn + "SickPrayer&D=$copticFeasts.AnyDay",
        Prefix.incenseDawn + "TravelersPrayer&D=$copticFeasts.AnyDay",
        Prefix.massCommon + "SeasonalLitanyOfTheHarvest&D=$copticFeasts.AnyDay",
        Prefix.commonPrayer + "KyrieElieson&D=$copticFeasts.AnyDay",
        Prefix.massCommon + "LitaniesFinal&D=$copticFeasts.AnyDay",
        Prefix.commonPrayer + "KyrieElieson&D=$copticFeasts.AnyDay",
        Prefix.massCommon + "PresidentLitany&D=$copticFeasts.AnyDay",
        Prefix.incenseVespers + "DepartedPrayer&D=$copticFeasts.AnyDay",
        Prefix.incenseDawn + "OblationsPrayer&D=$copticFeasts.AnyDay",
        Prefix.commonPrayer + "CatechumensPrayer&D=$copticFeasts.AnyDay",
        Prefix.HolyWeek + "LakanPrayer&D=$copticFeasts.HolyThursday",
        Prefix.commonPrayer + "BlockShlil&D=$copticFeasts.AnyDay",
        Prefix.commonPrayer + "BlockIriniPassi&D=$copticFeasts.AnyDay",
        Prefix.commonPrayer + "ChurchLitany&D=$copticFeasts.AnyDay",
        Prefix.commonPrayer + "PopeAndBishopLitany&D=$copticFeasts.AnyDay",
        Prefix.commonPrayer + "MeetingsLitany&D=$copticFeasts.AnyDay",
        //Insert "Eyn Sophia Si Epros"
        Prefix.commonPrayer + "Creed&D=$copticFeasts.AnyDay",
        Prefix.massCommon + "LakanSpasmosAdamLong&D=$copticFeasts.HolyThursday",
        Prefix.massCommon + "DiaconResponseKissEachOther&D=$copticFeasts.AnyDay",
        Prefix.placeHolder,
        Prefix.massCommon + "SpasmosAdamShort&D=$copticFeasts.AnyDay",
        Prefix.HolyWeek + "LakanAnaphora&D=$copticFeasts.HolyThursday",
        // Prefix.commonIncense+"LiturgyEnd&D=$copticFeasts.AnyDay"
    ],
    ThursdayMass: [],
    SaturdayIncenseDawn: [],
    SaturdayMass: [],
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVjbGFyZVByYXllcnNTZXF1ZW5jZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9tb2R1bGVzL0RlY2xhcmVQcmF5ZXJzU2VxdWVuY2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sc0JBQXNCLEdBQWE7SUFDckMscU5BQXFOO0lBQ3JOLE1BQU0sQ0FBQyxhQUFhLEdBQUMsb0NBQW9DO0lBQ3pELE1BQU0sQ0FBQyxhQUFhLEdBQUMsaUNBQWlDO0lBQ3RELE1BQU0sQ0FBQyxXQUFXLEdBQUMsbUNBQW1DO0lBQ3RELE1BQU0sQ0FBQyxXQUFXLEdBQUMsd0NBQXdDO0lBQzNELE1BQU0sQ0FBQyxXQUFXLEdBQUMsd0NBQXdDO0lBQzNELE1BQU0sQ0FBQyxjQUFjLEdBQUMsdUNBQXVDO0lBQzdELE1BQU0sQ0FBQyxZQUFZLEdBQUMscUNBQXFDO0lBQ3pELE1BQU0sQ0FBQyxjQUFjLEdBQUMsNENBQTRDO0lBQ2xFLE1BQU0sQ0FBQyxhQUFhLEdBQUMsbUNBQW1DO0lBQ3hELE1BQU0sQ0FBQyxZQUFZLEdBQUMscUNBQXFDO0lBQ3pELE1BQU0sQ0FBQyxhQUFhLEdBQUMsbUNBQW1DO0NBQzNELENBQUM7QUFHRixNQUFNLG9CQUFvQixHQUFHO0lBQ3pCLHFHQUFxRztJQUNyRyxjQUFjLEVBQUU7UUFDWixNQUFNLENBQUMsVUFBVSxHQUFDLHNDQUFzQztRQUN4RCxNQUFNLENBQUMsVUFBVSxHQUFDLDBDQUEwQztRQUM1RCxNQUFNLENBQUMsVUFBVSxHQUFDLDhDQUE4QztRQUNoRSxNQUFNLENBQUMsVUFBVSxHQUFDLDZDQUE2QztRQUMvRCxNQUFNLENBQUMsWUFBWSxHQUFDLHFDQUFxQztRQUN6RCxNQUFNLENBQUMsVUFBVSxHQUFDLCtDQUErQztRQUNqRSxNQUFNLENBQUMsVUFBVSxHQUFDLGtDQUFrQztRQUNwRCxNQUFNLENBQUMsVUFBVSxHQUFDLGlDQUFpQztRQUNuRCxNQUFNLENBQUMsVUFBVSxHQUFDLDBDQUEwQztR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