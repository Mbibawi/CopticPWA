type seasonalPrayers = {
    Season: string,
    AR: string,
    CA?: string,
    FR?: string,
    EN?: string,
    COP?: string
};
const giakiAll: seasonalPrayers[] = [
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


var giaki = {} as seasonalPrayers;

let allSeasonalPrayers: [seasonalPrayers, seasonalPrayers[]][] = [[giaki, giakiAll]];

async function setSeasonalTextForAll(season: string) {
    allSeasonalPrayers
        .forEach(seasonal => {
            Object.assign(seasonal[0], setSeasonalText(seasonal[1], season));
        });
};

function setSeasonalText(arrayAll: seasonalPrayers[], season: string): seasonalPrayers {
    if (!arrayAll) return;
    let found: seasonalPrayers;
    //If we are a Sunday, giAki will be ge aktonk as during the Pentecostal Days
    if (todayDate.getDay() === 0) return arrayAll.find(resp => resp.Season === Seasons.PentecostalDays);

    //If we it is the Circumcision Feast, giAki will be 'ge ak masf'
    if (copticDate === copticFeasts.Circumcision) return arrayAll.find(resp => resp.Season === Seasons.Nativity);

    found = arrayAll.find(resp => resp.Season === season);

    if (!found
        && (copticReadingsDate === copticFeasts.PalmSunday && todayDate.getHours() > 15)
        || HolyWeek.indexOf(copticReadingsDate) > -1)

        found = arrayAll.find(resp => resp.Season === Seasons.CrossFeast);

    if (!found)
        found = arrayAll.find(resp => resp.Season === Seasons.NoSeason);

    if (found) return found;
}


function is29thOfCopticMonth(): boolean {
    if (Number(copticDay) !== 29
        || (Number(copticMonth) > 3 && Number(copticMonth) < 8)
    ) return false;
    else return true
}


