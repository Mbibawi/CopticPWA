const giakiAll = [
    {
        Season: Seasons.NoSeason,
        AR: 'لأنَّكَ أتيْتَ وخَلصْتَنا',
        CA: 'جي آك إي أكسوتي إمّون',
        FR: 'car Tu es venu et nous as sauvés',
        EN: 'for You\'ve come and saved us',
        COP: 'ϫⲉ ⲁⲕ̀\' ⲁⲕⲥⲱϯ ⲙ̀ⲙⲟⲛ'
    },
    {
        Season: Seasons.Nativity,
        AR: 'لأنَّكَ ولِدتَ وخَلصْتَنا',
        CA: 'جي آك ماسف أكسوتي إمّون',
        FR: 'car Tu es né et nous as sauvés',
        EN: 'for You\'ve born and saved us',
        COP: 'ϫⲉ ⲁⲩⲙⲁⲥⲕ ⲁⲕⲥⲱϯ ⲙ̀ⲙⲟⲛ'
    },
    {
        Season: Seasons.Baptism,
        AR: 'لأنَّكَ اعتمدت وخَلصْتَنا',
        CA: 'جي آك أومس أكسوتي إمّون',
        FR: 'car Tu es baptisé et nous as sauvés',
        EN: 'for You\'ve been baptized and saved us',
        COP: 'ϫⲉ ⲁⲕϭⲓⲱⲙⲥ ⲁⲕⲥⲱϯ ⲙ̀ⲙⲟⲛ'
    },
    {
        Season: Seasons.PentecostalDays,
        AR: 'لأنَّكَ قُمتَ وخَلصْتَنا',
        CA: 'جي آك تونك أكسوتي إمّون',
        FR: 'car Tu es ressuscité et nous as sauvés',
        EN: 'for You\'ve raised and saved us',
        COP: 'ϫⲉ ⲁⲕⲧⲱⲛⲕ ⲁⲕⲥⲱϯ ⲙ̀ⲙⲟⲛ'
    },
    {
        Season: Seasons.CrossFeast,
        AR: 'لأنكَ صُلبتَ وخَلصْتَنا',
        CA: 'جي آك آشك أكسوتي إمّون',
        FR: 'car Tu as été crucifié et nous as sauvés',
        EN: 'for You\'ve been crucified and saved us',
        COP: 'ϫⲉ ⲁⲕ̀\' ⲁⲕⲥⲱϯ ⲙ̀ⲙⲟⲛ'
    },
];
var giaki = {};
let allSeasonalPrayers = [[giaki, giakiAll]];
async function setSeasonalTextForAll(season) {
    allSeasonalPrayers
        .forEach(seasonal => {
        Object.assign(seasonal[0], setSeasonalText(seasonal[1], season));
    });
}
;
function setSeasonalText(arrayAll, season) {
    if (!arrayAll)
        return;
    let found;
    //If we are a Sunday, giAki will be ge aktonk as during the Pentecostal Days
    if (todayDate.getDay() === 0)
        return arrayAll.find(resp => resp.Season === Seasons.PentecostalDays);
    //If we it is the Circumcision Feast, giAki will be 'ge ak masf'
    if (copticDate === copticFeasts.Circumcision)
        return arrayAll.find(resp => resp.Season === Seasons.Nativity);
    found = arrayAll.find(resp => resp.Season === season);
    if (!found
        && (copticReadingsDate === copticFeasts.PalmSunday && todayDate.getHours() > 15)
        || HolyWeek.indexOf(copticReadingsDate) > -1)
        found = arrayAll.find(resp => resp.Season === Seasons.CrossFeast);
    if (!found)
        found = arrayAll.find(resp => resp.Season === Seasons.NoSeason);
    if (found)
        return found;
}
function is29thOfCopticMonth() {
    if (Number(copticDay) !== 29
        || (Number(copticMonth) > 3 && Number(copticMonth) < 8))
        return false;
    else
        return true;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVjbGFyZVNlYXNvbnNQcmF5ZXJzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vbW9kdWxlcy9EZWNsYXJlU2Vhc29uc1ByYXllcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUUEsTUFBTSxRQUFRLEdBQXNCO0lBQ2hDO1FBQ0ksTUFBTSxFQUFFLE9BQU8sQ0FBQyxRQUFRO1FBQ3hCLEVBQUUsRUFBRSwyQkFBMkI7UUFDL0IsRUFBRSxFQUFFLHVCQUF1QjtRQUMzQixFQUFFLEVBQUUsa0NBQWtDO1FBQ3RDLEVBQUUsRUFBRSwrQkFBK0I7UUFDbkMsR0FBRyxFQUFFLHNCQUFzQjtLQUM5QjtJQUNEO1FBQ0ksTUFBTSxFQUFFLE9BQU8sQ0FBQyxRQUFRO1FBQ3hCLEVBQUUsRUFBRSwyQkFBMkI7UUFDL0IsRUFBRSxFQUFFLHlCQUF5QjtRQUM3QixFQUFFLEVBQUUsZ0NBQWdDO1FBQ3BDLEVBQUUsRUFBRSwrQkFBK0I7UUFDbkMsR0FBRyxFQUFFLHVCQUF1QjtLQUMvQjtJQUNEO1FBQ0ksTUFBTSxFQUFFLE9BQU8sQ0FBQyxPQUFPO1FBQ3ZCLEVBQUUsRUFBRSwyQkFBMkI7UUFDL0IsRUFBRSxFQUFFLHlCQUF5QjtRQUM3QixFQUFFLEVBQUUscUNBQXFDO1FBQ3pDLEVBQUUsRUFBRSx3Q0FBd0M7UUFDNUMsR0FBRyxFQUFFLHdCQUF3QjtLQUNoQztJQUNEO1FBRUksTUFBTSxFQUFFLE9BQU8sQ0FBQyxlQUFlO1FBQy9CLEVBQUUsRUFBRSwwQkFBMEI7UUFDOUIsRUFBRSxFQUFFLHlCQUF5QjtRQUM3QixFQUFFLEVBQUUsd0NBQXdDO1FBQzVDLEVBQUUsRUFBRSxpQ0FBaUM7UUFDckMsR0FBRyxFQUFFLHVCQUF1QjtLQUMvQjtJQUNEO1FBQ0ksTUFBTSxFQUFFLE9BQU8sQ0FBQyxVQUFVO1FBQzFCLEVBQUUsRUFBRSx5QkFBeUI7UUFDN0IsRUFBRSxFQUFFLHdCQUF3QjtRQUM1QixFQUFFLEVBQUUsMENBQTBDO1FBQzlDLEVBQUUsRUFBRSx5Q0FBeUM7UUFDN0MsR0FBRyxFQUFFLHNCQUFzQjtLQUM5QjtDQUNKLENBQUM7QUFHRixJQUFJLEtBQUssR0FBRyxFQUFxQixDQUFDO0FBRWxDLElBQUksa0JBQWtCLEdBQTJDLENBQUMsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQztBQUVyRixLQUFLLFVBQVUscUJBQXFCLENBQUMsTUFBYztJQUMvQyxrQkFBa0I7U0FDYixPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUU7UUFDaEIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ3JFLENBQUMsQ0FBQyxDQUFDO0FBQ1gsQ0FBQztBQUFBLENBQUM7QUFFRixTQUFTLGVBQWUsQ0FBQyxRQUEyQixFQUFFLE1BQWM7SUFDaEUsSUFBSSxDQUFDLFFBQVE7UUFBRSxPQUFPO0lBQ3RCLElBQUksS0FBc0IsQ0FBQztJQUMzQiw0RUFBNEU7SUFDNUUsSUFBSSxTQUFTLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQztRQUFFLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLEtBQUssT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBRXBHLGdFQUFnRTtJQUNoRSxJQUFJLFVBQVUsS0FBSyxZQUFZLENBQUMsWUFBWTtRQUFFLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLEtBQUssT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBRTdHLEtBQUssR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sS0FBSyxNQUFNLENBQUMsQ0FBQztJQUV0RCxJQUFJLENBQUMsS0FBSztXQUNILENBQUMsa0JBQWtCLEtBQUssWUFBWSxDQUFDLFVBQVUsSUFBSSxTQUFTLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRSxDQUFDO1dBQzdFLFFBQVEsQ0FBQyxPQUFPLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFNUMsS0FBSyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxLQUFLLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUV0RSxJQUFJLENBQUMsS0FBSztRQUNOLEtBQUssR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sS0FBSyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7SUFFcEUsSUFBSSxLQUFLO1FBQUUsT0FBTyxLQUFLLENBQUM7QUFDNUIsQ0FBQztBQUdELFNBQVMsbUJBQW1CO0lBQ3hCLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUU7V0FDckIsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDekQsT0FBTyxLQUFLLENBQUM7O1FBQ1YsT0FBTyxJQUFJLENBQUE7QUFDcEIsQ0FBQyJ9