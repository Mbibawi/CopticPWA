const IncensePrayersSequence = [
    Prefix.commonIncense + "EleysonImas&D=$copticFeasts.AnyDay",
    Prefix.commonIncense + "LitaniesComment1&D=$copticFeasts.AnyDay",
    Prefix.incenseDawn + "SickPrayer&D=$copticFeasts.AnyDay",
    Prefix.incenseDawn + "TravelersPrayer&D=$copticFeasts.AnyDay",
    Prefix.incenseDawn + "OblationsPrayer&D=$copticFeasts.AnyDay",
    Prefix.incenseVespers + "DepartedPrayer&D=$copticFeasts.AnyDay",
    Prefix.commonIncense + "DoxolgiesComment&D=$copticFeasts.AnyDay",
    Prefix.commonPrayer + "AngelsPrayer&D=$copticFeasts.AnyDay",
    Prefix.incenseVespers + "LordKeepUsThisNightWithoutSin&D=$copticFeasts.AnyDay",
    Prefix.commonPrayer + "Agios&D=$copticFeasts.AnyDay",
    Prefix.commonPrayer + "OurFatherWhoArtInHeaven&D=$copticFeasts.AnyDay",
    Prefix.commonPrayer + "WeSaluteYouMary&D=$copticFeasts.AnyDay",
    Prefix.commonIncense + "DoxologiesPlaceHolder&D=$copticFeasts.AnyDay",
    Prefix.commonPrayer + "WeExaltYouStMary&D=$copticFeasts.AnyDay",
    Prefix.commonPrayer + "Creed&D=$copticFeasts.AnyDay",
    Prefix.commonPrayer + "EfnotiNaynan&D=$copticFeasts.AnyDay",
    Prefix.commonIncense + "LiturgyEnd&D=$copticFeasts.AnyDay"
]; //    this is the generic sequence of all prayers for incense dawn and incense vespers. The onClick function triggered by btnIncenseDawn and btnIncenseVespers, will remove what is irrelevant and add what needs to be added according to whether it is a Dawn or Vespers office
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
        Prefix.HolyWeek + "CopticPsalmAndGospel&D=$Seasons.HolyWeek",
        Prefix.HolyWeek + "KhinEfranEnTetriyas&D=$Seasons.HolyWeek",
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
        Prefix.massCommon + "ReadingsPlaceHolder&D=$copticFeasts.AnyDay",
        Prefix.commonPrayer + "Agios&D=$copticFeasts.HolyThursday",
        Prefix.commonPrayer + "GospelPrayerPlaceHolder&D=$copticFeasts.AnyDay",
        //Prefix.commonPrayer + "BlockShlil&D=$copticFeasts.AnyDay",
        //Prefix.commonPrayer + "BlockIriniPassi&D=$copticFeasts.AnyDay",
        //Prefix.commonPrayer + "GospelPrayer&D=$copticFeasts.AnyDay",
        //فليرفعوه في كنيسة شعبه
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
        // Prefix.commonIncense + "LiturgyEnd&D=$copticFeasts.AnyDay"
    ],
    ThursdayMass: [],
    SaturdayIncenseDawn: [],
    SaturdayMass: [],
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVjbGFyZVByYXllcnNTZXF1ZW5jZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9tb2R1bGVzL0RlY2xhcmVQcmF5ZXJzU2VxdWVuY2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sc0JBQXNCLEdBQWE7SUFDckMsTUFBTSxDQUFDLGFBQWEsR0FBRyxvQ0FBb0M7SUFDM0QsTUFBTSxDQUFDLGFBQWEsR0FBRyx5Q0FBeUM7SUFDaEUsTUFBTSxDQUFDLFdBQVcsR0FBRyxtQ0FBbUM7SUFDeEQsTUFBTSxDQUFDLFdBQVcsR0FBRyx3Q0FBd0M7SUFDN0QsTUFBTSxDQUFDLFdBQVcsR0FBRyx3Q0FBd0M7SUFDN0QsTUFBTSxDQUFDLGNBQWMsR0FBRyx1Q0FBdUM7SUFDL0QsTUFBTSxDQUFDLGFBQWEsR0FBRyx5Q0FBeUM7SUFDaEUsTUFBTSxDQUFDLFlBQVksR0FBRyxxQ0FBcUM7SUFDM0QsTUFBTSxDQUFDLGNBQWMsR0FBRyxzREFBc0Q7SUFDOUUsTUFBTSxDQUFDLFlBQVksR0FBRyw4QkFBOEI7SUFDcEQsTUFBTSxDQUFDLFlBQVksR0FBRyxnREFBZ0Q7SUFDdEUsTUFBTSxDQUFDLFlBQVksR0FBRyx3Q0FBd0M7SUFDOUQsTUFBTSxDQUFDLGFBQWEsR0FBRyw4Q0FBOEM7SUFDckUsTUFBTSxDQUFDLFlBQVksR0FBRyx5Q0FBeUM7SUFDL0QsTUFBTSxDQUFDLFlBQVksR0FBRyw4QkFBOEI7SUFDcEQsTUFBTSxDQUFDLFlBQVksR0FBRyxxQ0FBcUM7SUFDM0QsTUFBTSxDQUFDLGFBQWEsR0FBRyxtQ0FBbUM7Q0FDN0QsQ0FDSSxDQUFDLGlSQUFpUjtBQUd2UixNQUFNLG9CQUFvQixHQUFHO0lBQ3pCLHFHQUFxRztJQUNyRyxjQUFjLEVBQUU7UUFDWixNQUFNLENBQUMsVUFBVSxHQUFHLHNDQUFzQztRQUMxRCxNQUFNLENBQUMsVUFBVSxHQUFHLDBDQUEwQztRQUM5RCxNQUFNLENBQUMsVUFBVSxHQUFHLDhDQUE4QztR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