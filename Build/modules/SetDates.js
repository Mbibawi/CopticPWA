var Season; //This is a value telling whether we are during a special period of the year like the Great Lent or the 50 Pentecostal days, etc.
var todayDate, copticDate, //The Coptic date is stored in a string not in a number like the gregorian date, this is to avoid complex calculations
copticMonth, //same comment as above
copticDay, //same comment as above
copticYear, //same comment as above
copticReadingsDate, //This is the date of the day's readings (gospel, Catholicon, praxis, etc.). It does not neceissarly correspond to the copticDate
weekDay, //This is today's day of the week (Sunday, Monday, etc.) expressed in number starting from 0
isFast;
const copticReadingsDates = getCopticReadingsDates();
const ResurrectionDates = [
    [2019, 4, 28],
    [2020, 4, 19],
    [2021, 5, 2],
    [2022, 4, 24],
    [2023, 4, 16],
    [2024, 5, 5],
    [2025, 4, 20],
    [2026, 4, 12],
    [2027, 5, 2],
    [2028, 4, 16],
    [2029, 4, 8],
    [2030, 4, 28],
    [2031, 4, 13],
    [2032, 5, 2],
    [2033, 4, 24],
    [2034, 4, 9],
    [2035, 4, 29],
    [2036, 4, 20],
    [2037, 4, 5],
    [2038, 4, 25],
    [2039, 4, 17],
    [2040, 5, 6],
    [2041, 4, 21],
    [2042, 4, 13],
    [2043, 5, 3],
    [2044, 4, 24],
    [2045, 4, 9],
    [2046, 4, 29],
    [2047, 4, 21],
    [2048, 4, 5],
    [2049, 4, 25],
    [2050, 4, 17],
]; // these are  the dates of the Ressurection feast got from خدمة الشماس والألحان للمعلم فرج عبد المسيح الطبعة 14 سنة 2019
[copticReadingsDates, copticFasts, ResurrectionDates].forEach(obj => Object.freeze(obj));
/**
 * a function that runs at the beginning and sets some global dates like the coptic date (as a string), today's Gregorian date (as a Date), the day of the week (as a number), the Season (a string), etc.
 * @param {Date} today  - a Gregorian date provided by the user or set automatically to the date of today if missing
 */
async function setCopticDates(today, changeDate = false) {
    todayDate = today || (() => {
        if (localStorage.selectedDate)
            localStorage.selectedDate = null; //We do this in order to reset the local storage 'selectedDate' when setCopticDates() is called without a date passed to it
        return new Date();
    })();
    weekDay = todayDate.getDay();
    convertGregorianDateToCopticDate(todayDate, true);
    Season = Seasons.NoSeason; //this will be its default value unless it is changed by another function;
    copticReadingsDate = getSeasonAndCopticReadingsDate(copticDate);
    if (Coptic29th())
        copticFeasts.Coptic29th = copticDate; //If we are on the 29th of the coptic Month, we will set the value of copticFeasts.Cotpic29th to today's copticDate in order to able to retrieve the prayers of this day
    else if (Number(copticDay) === 21)
        copticFeasts.Coptic21th = copticDate;
    variable.giaki = setVariableSeasonalPhrases(Season).giaki; //!This must be called here after the dates and seasons were set or changed
    if (changeDate)
        reloadScripts(['PrayersArray']);
    createFakeAnchor("homeImg");
    isFast = (() => {
        if ([Seasons.PentecostalDays, Seasons.Ascension].includes(Season))
            return false;
        else if (copticFasts.includes(Season))
            return true; //i.e. if we are obviously during a fast period
        else if ([3, 5].includes(weekDay))
            return true; //We are not during a fast period but we are a Wednesday or a Friday. Notice that we excluded the Pentecostal period case from the begining
        else
            return false;
    })();
    //Showing the dates and the version
    showDates(); //!Caution: showDates must come after isFast is set.
}
/**
 * Converts a date
 * @param {number[]} copticDate - the copticDate for which we want to get the gregorian date, it must be formatted as [day, month, year]
 * @returns
 */
function convertCopticDateToGregorianDate(copticDate, gregorianDate) {
    if (!copticDate || copticDate.length < 3)
        return;
    let currentCopticDate = convertGregorianDateToCopticDate()[0]; //This will give a [day, month, year] array
    let yearsDifference = copticDate[2] - currentCopticDate[2];
    let monthsDifference = copticDate[1] - currentCopticDate[1];
    let daysDifference = copticDate[0] - currentCopticDate[0];
    let calendarDaysDifference = (yearsDifference * 365 + monthsDifference * 30 + daysDifference) *
        calendarDay;
    calendarDaysDifference = calendarDaysDifference + yearsDifference / 4; //Leap years
    if (!gregorianDate)
        gregorianDate = todayDate.getDate();
    gregorianDate = gregorianDate - calendarDaysDifference;
    return gregorianDate;
}
/**
 * Converts the provided Gregorian date into Coptic Date
 * @param {number} today - a number reflecting a date, which we will convert into coptic date. If ommitted, it will be set to the current date
 * @param {boolean} changeDates - tells whether the function should change the Coptic dates or should just return the new Coptic Date
 * @returns {[number[], string]} - an array containing as 1st element a number[] = [day, month, year] representing the coptic day, coptic month, and coptic year, the second elemement of the array is a string representing the copitc date formatted as 'DDMM'
 */
function convertGregorianDateToCopticDate(date, changeDates = true) {
    let today;
    let tout1 = Date.UTC(1883, 8, 11, 0, 0, 0, 0); //this is the Gregorian date for the 1st of Tout of the Coptic year 1600. We compensate the diffrence (50 minutes + 39 seconds) in order to get the time at 01:00:00 GMT
    let year = 1600; //this is the coptic year starting on Sept 11, 1883
    date
        ? today = Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0, 0)
        : today = Date.UTC(todayDate.getFullYear(), todayDate.getMonth(), todayDate.getDate(), 0, 0, 0, 0);
    let differenceInDays = (today - tout1) / calendarDay;
    let diffrenceInYears = Math.floor(differenceInDays / 365.25); //This gives the number of full Coptic years (based on 365.25 day/year)
    year += diffrenceInYears;
    let daysInCurrentYear = (differenceInDays - (diffrenceInYears * 365.25));
    daysInCurrentYear = Math.ceil(daysInCurrentYear + 1); //Why +1? I don't know. I got this from a pure try and fail run of the function. Need to figure out why the dates don't match unless we add 1
    let month = daysInCurrentYear / 30;
    month < 1 ? month = 1 : month = Math.ceil(month);
    let day = Math.ceil(daysInCurrentYear % 30);
    if (day === 0)
        day = 30;
    if (new Date(today).getFullYear() % 4 !== 3 && month === 13 && day === 6) {
        //We are not in a leap year
        day = 1;
        month = 1;
        year += 1;
    }
    let dayString = day.toString().padStart(2, "0");
    let monthString = month.toString().padStart(2, "0");
    if (changeDates) {
        copticDay = dayString;
        copticMonth = monthString;
        copticDate = dayString + monthString;
        copticYear = year.toString();
    }
    return [[day, month, year], dayString + monthString];
}
/**
 * Sets the coptic readings date according to the Katamaras
 * @param {string} coptDate  - a string expressing the coptic day and month (e.g.: "0306")
 * @returns {string} - a string expressing the coptic reading date (e.g.: "0512", "GreatLent20", "JonahFeast2", etc.)
 */
function getSeasonAndCopticReadingsDate(coptDate = copticDate, today = todayDate) {
    if (!coptDate)
        return console.log("coptDate is not valid = ", coptDate);
    let specialSeason = checkIfInSpecialSeason(today);
    if (specialSeason) {
        // it means we got a specific date for the Readings associated with a specific period (e.g.: Great Lent, PentecostalDays, etc.)
        return specialSeason;
    }
    else if (today.getDay() === 0) {
        // it means we are on an ordinary  Sunday (any sunday other than Great lent and Pentecostal period Sundays)
        // console.log('We are on a sunday')
        let sunday = checkWhichSundayWeAre(Number(copticDay), today.getDay());
        //the readings for the 5th sunday of any coptic month (other than the 5th sunday of the Great Lent or the Pentecostal Days) are the same. We will then retrieve the readings of the 5th sunday of the first coptic month (Tout)
        sunday === "5thSunday"
            ? (sunday = "01" + sunday)
            : (sunday = copticMonth + sunday);
        return sunday;
    }
    else {
        // it means we are in an ordinary day and we follow the ordinary readings calender, this should return a coptic date in a string of "DDMM"
        let date = copticReadingsDates
            .find(datesArray => datesArray.includes(coptDate));
        if (date)
            return date[0];
        else
            return coptDate;
    }
}
/**
 * Checks which Sunday we are in the coptic month (i.e. is it the 1st Sunday? 2nd Sunday, etc.)
 * @param {number} day  - the day of the coptic month or the number of days since the beginning of a season like the Great Lent or the Pentecostal days
 * The function returns a string like "1stSunday", "2nd Sunday", etc.
 */
function checkWhichSundayWeAre(day, theWeekDay = 0) {
    if (theWeekDay !== 0)
        return;
    let n = day;
    if (Season === Seasons.GreatLent)
        n = n - 2; //The counting of the nubmer of days during the Great Lent starts from the Saturday preceding the first day of the Great Lent (which is a Monday). We hence substract 2 from the number of days elapsed in order to count for the 2 extra days added to the actual number of days elapsed since the begining of the Great Lent
    n = Math.ceil(Math.abs(n) / 7); //We use Math.abs in order to deal with cases where the difference is <0
    let sunday = n.toString();
    if (n === 1 || (n > 20 && n % 10 === 1))
        sunday = sunday + "stSunday";
    else if (n === 2 || (n > 20 && n % 10 === 2))
        sunday = sunday + "ndSunday";
    else if (n === 3 || (n > 20 && n % 10 === 3))
        sunday = sunday + "rdSunday";
    else
        sunday = sunday + "thSunday";
    return sunday;
}
/**
 * It takes the date of today and checks whether according the Resurrection date this year, we are during an unfixed season like Great Lent, Pentecostal days or Apostles feast, etc.
 * @param {Date} today  - is the date of today according to the Gregorian calendar (it can be any day of the year if the user had manually set it)
 * @returns {string} - a string expressing the readings date . It will be added to the id of the reading in order to retrieve the coptic readings of the day
 */
function checkIfInSpecialSeason(today) {
    let readingsDate;
    //We filter the ResurrectionDates array for the resurrection date for the current year:
    let resurrectionDate = ResurrectionDates.find((date) => date[0] === today.getFullYear());
    //We create a new Date from the selected resurrection date, and will set its hour to UTC 0
    let resurrection = Date.UTC(resurrectionDate[0], resurrectionDate[1] - 1, resurrectionDate[2], 0, 0, 0, 0);
    //We create a new date equal to "today", and will set its hour to 0
    let todayUTC = Date.UTC(today.getFullYear(), today.getMonth(), today.getDate(), 0, 0, 0);
    readingsDate = checkForUnfixedEvent(todayUTC, //this is a number reflecting the date of today at UTC 0 hour
    resurrection);
    return readingsDate;
}
/**
 * Checks whether we are during the Great Lent Period, the Pentecoste days or any season
 * @param {number} today  - is a number of milliseconds equal to the date of today at UTC 0 hours
 *
 * @param {number} resDate  - is a number of milliseconds equal to date of Resurrection in current year at UTC 0 hours
 * @returns {string} - which is equal to the season: e.g.: "Resurrection", "GreatLent30", "Pentecoste20", etc.
 */
function checkForUnfixedEvent(today, resDate) {
    let difference = Math.floor((resDate - today) / calendarDay); // we get the difference between the 2 dates in days
    //We initiate the Season to NoSeason
    let coptDay = Number(copticDay), coptMonth = Number(copticMonth);
    let date;
    if (!Season)
        Season = Seasons.NoSeason;
    (function ifResurrection() {
        if (difference < 0)
            return;
        if (difference > 1)
            return;
        if (difference === 1 && todayDate.getHours() < 16)
            return; //If we are Saturday (which means that difference = 1) and we are after 4 PM, we will retrieve the readings of the Resurrection because we use to celebrate the Resurrection Mass on Saturday evening not on Sunday itself
        Season = Seasons.PentecostalDays; //we set teh Season value
        date = isItSundayOrWeekDay(Seasons.GreatLent, 58, weekDay);
    })();
    (function ifJonahFast() {
        if (difference > 69)
            return;
        if (difference < 66)
            return;
        //We are durings the Jonah Fast days (3 days + 1)
        //The Jonah feast starts 15 days before the begining of the Great Lent
        difference === 66
            ? Season = Seasons.JonahFeast //We are on the Jonah Feast
            : Season = Seasons.JonahFast; //We are during the 3 days of Jonah Fast
        date = isItSundayOrWeekDay(Seasons.JonahFast, Math.abs(70 - difference), weekDay);
    })();
    (function ifGreatLentPreparation() {
        if (![57, 56].includes(difference))
            return; //the 57th and the 56th days before Resurrection correspond to the Saturday and the Sunday preceding the first day of the Great Lent (which is a Monday = Resurrection - 55 days). The readings of those 2 days are linked to the Great Lent Season.
        date = isItSundayOrWeekDay(Seasons.GreatLent, 58 - difference, 0);
    })();
    (function ifGreatLent() {
        if (difference < 1)
            return; //If <1 it means we are after the Great Lent Preiod (potentially during the Pentecostal days, or on the Resurrection day itself)
        if (difference > 55)
            return; //it means we are before the begining of the Great Lent
        //We are during the Great Lent period which counts 56 days from the Saturday preceding the 1st Sunday (which is the begining of the so called "preparation week") until the Resurrection day
        if (copticDate === copticFeasts.Cross2) {
            Season =
                Seasons.CrossFeast; //! CAUTION: This must come BEFORE Seasons.GreatLent because the cross feast is celebrated twice, one of which during the Great Lent (10 Bramhat). If we do not place this 'else if' condition before the Great Lent season, it will never be fulfilled during the Great Lent
            return date = copticFeasts.Cross1; //!Caution: we must return here because otherwise, the function will continue and set the date to the GL prefixed date . 
            //Notice that the readings are those of copticFeasts.Cross1 (i.e. 1701)
        }
        else if (difference > 9 && copticDate === copticFeasts.Annonciation) 
        //The Annonciation Feast is not celebrated if it falls between the "End of Great Lent Friday" (i.e. difference = 9) and Resurrection (i.e. difference = 0)  
        {
            Season = Seasons.NoSeason; //We set the Season to Seasons.NoSeason, in order to prevent the Great Lent prayers (eg.: Doxologies, Cymbal Verses, Nefsinty, etc.) to be displayed. We are on a Lord Feast day
            return date = copticFeasts.Annonciation; //!Caution: we must return here because otherwise, the function will continue and set the date to the GL prefixed date  
        }
        else if (difference < 7)
            Season =
                Seasons.HolyWeek; //i.e., if we are between Monday and Friday of the Holy Week or if we are on Palm Sunday afternoon
        else
            Season = Seasons.GreatLent;
        date = isItSundayOrWeekDay(Seasons.GreatLent, 58 - difference, weekDay);
    })();
    (function ifPentecostalPeriod() {
        if (difference >= 0)
            return;
        if (Math.abs(difference) > 49)
            return;
        // we are during the 50 Pentecostal days
        if (Math.abs(difference) === 49)
            Season = Seasons.NoSeason;
        else if (Math.abs(difference) > 38)
            Season = Seasons.Ascension;
        else
            Season = Seasons.PentecostalDays;
        date = isItSundayOrWeekDay(Seasons.PentecostalDays, Math.abs(difference), weekDay);
    })();
    (function ifApostlesFast() {
        if (difference > 0)
            return; //This means that we are before the Ressurrection Feast, and probably still during the Great Lent
        if (Math.abs(difference) < 50)
            return; //this means that we are still during the Pentecostal Period
        if (coptMonth < 9)
            return;
        if (coptMonth > 11)
            return;
        if (coptMonth === 11 && coptDay > 4)
            return; //We are on or after the Apostles Feast
        Season = Seasons.ApostlesFast;
    })();
    (function ifStMaryFast() {
        if (coptMonth !== 12)
            return;
        if (coptDay > 15)
            return;
        //We are between 01/12 and 15/12, which means that we are during St Mary's Fast
        Season = Seasons.StMaryFast;
    })();
    (function ifNayrouzOrCrossFeast() {
        if (coptMonth > 1)
            return;
        if (coptDay > 19)
            return;
        if (coptDay < 17)
            Season = Seasons.Nayrouz;
        else if (coptDay > 16)
            Season = Seasons.CrossFeast;
    })();
    (function ifNativityFast() {
        if (coptMonth !== 3)
            return;
        if (coptDay < 16)
            return;
        //We are during the Nativity Fast which starts on 16 Hatour and ends on 29 Kiahk, but we are not during the month of Kiahk. Note that Kiahk is a different Season
        Season = Seasons.NativityFast;
    })();
    (function ifEarlyKiahk() {
        if (copticDate !== "3003")
            return;
        if (weekDay !== 0)
            return;
        //If the 30th of Hatour is a Sunday, it means that there will only be 3 Sundays in the month of Kiahk between the 1st and the 28th of Kiahk (The 3 Sundays will fall respectively on the 7th, 14th and 21th of Kiahk). We hence consider that 30th of Hatour is the 1st Sunday of Kiahk
        Season = Seasons.KiahkWeek1;
        date = "04" + checkWhichSundayWeAre(7, 0);
    })();
    (function ifKiahk() {
        //!Caution this must come before isNativityParamoun() and isNativityFeast()
        if (coptMonth !== 4)
            return;
        if (coptDay > 27)
            return; //We are either in the Paramoun or during the Feast
        date = getKiahkWeek();
        function getKiahkWeek() {
            let sunday;
            if ([0, 7, 14, 21].includes(coptDay - weekDay))
                //When the 1st of Kiahk is a Monday, Kiahk will have only 3 Sundays before Kiahk 28th (i.e., on the 7th, the 14th, and the 21th of Kiahk), we will hence consider that the 30th of Hatour is the 1st Sunday of Kiahk, and will count Kiahk's Sundays from 2
                sunday = checkWhichSundayWeAre(coptDay + 7 - weekDay);
            else
                sunday = checkWhichSundayWeAre(coptDay - weekDay);
            Season = [
                ["1stSunday", Seasons.KiahkWeek1],
                ["2ndSunday", Seasons.KiahkWeek2],
                ["3rdSunday", Seasons.KiahkWeek3],
                ["4thSunday", Seasons.KiahkWeek4],
            ].find((el) => el[0] === sunday)[1]; //We set the Season accroding to the value of sunday
            if (weekDay === 0)
                return "04" + sunday; //!Caution: we need to return the value of Sunday (which will set the readings for this day not only the Season), because it is modified when Kiahk has only 3 Sundays. We do this for the Sundays only because the readings of the other days are not affected. It is just the Season that changes.
        }
    })();
    (function ifNativityParamoun() {
        if (coptMonth !== 4 || coptDay !== 27 || todayDate.getDate() !== 6)
            return; //The Nativity Feast has been fixed to January 7th which is Kiahk 28th not Kiahk 29th.  The Paramoun falls hence on Kiahk 27th
        if (todayDate.getDate() === 6 && todayDate.getHours() > 15)
            return; //!The Nativity Feast has been fixed to January 7th which corresponds to Kiahk 28th instead of Kiahk 29th. That's why the Paramoun will end in January 6 afternoon. In fact we use to celebrate the Mass in the late evening of January 6th
        if (copticDate === copticFeasts.NativityParamoun && todayDate.getHours() > 15)
            return;
        if (([4, 5].includes(todayDate.getDate()) && weekDay === 5) //If January 4th or January 5th, is a Friday, it means that the Feast (i.e., January 7th) will fall either a Sunday or a Monday. In both cases, the Paramoun will start on Friday.
            ||
                (["2604", "2704"].includes(copticDate) && weekDay === 5)
            ||
                (copticDate === "2704" && weekDay === 6)
        //We are on the day before the Nativity Feast (28 Kiahk), and we are in the morning, it is the Parmoun of the Nativity
        ) {
            Season = Seasons.NativityParamoun;
            date = copticFeasts.NativityParamoun;
        }
    })();
    (function ifNativityFeast() {
        if (![4, 5].includes(coptMonth))
            return;
        if (coptMonth === 4 && coptDay < 29)
            return;
        if (coptMonth === 5 && coptDay > 5)
            return;
        if (Season === Seasons.NativityParamoun)
            return; //If the Season has been already set to NativityParamoun, it means we are on January 6th before 3PM or Kiahk 29th before 3PM
        Season = Seasons.Nativity;
    })();
    (function ifBaptismeParamoun() {
        if (coptMonth !== 5)
            return;
        if (coptDay < 8)
            return;
        if (coptDay > 10)
            return;
        if (copticDate === copticFeasts.BaptismParamoun &&
            todayDate.getHours() >= 15)
            return;
        if ((["0805", "0905"].includes(copticDate) && weekDay === 5) //i.e. if 08 Toubah or 09 Toubah is a Friday, it will mark the begining of the Parmoun because 11 Toubah will either be a Sunday or a Monday
            ||
                (copticDate === "0905" && weekDay === 6) //If Toubah 9th is a Saturday, it means that the Feast started on Friday 08 Toubah and continues until 10 Toubah evening
            ||
                (copticDate === copticFeasts.BaptismParamoun &&
                    todayDate.getHours() < 15)) {
            Season = Seasons.BaptismParamoun;
            date = copticFeasts.BaptismParamoun;
        }
        ; //The readings during all the Baptism Paramoun are those of 10 Toubah
    })();
    (function ifBaptismFeast() {
        if (coptMonth !== 5)
            return;
        if (coptDay > 12)
            return;
        if (coptDay >= 11) //i.e., from 11 to 13 Toubah 
            Season = Seasons.Baptism;
        if (copticDate === copticFeasts.BaptismParamoun &&
            todayDate.getHours() > 15) {
            //We are on the Baptism Parmoun after 3PM, we use to celebrate the Baptism Mass in the late evening
            Season = Seasons.Baptism;
            date = copticFeasts.Baptism;
        }
    })();
    return date;
}
;
/**
 * If we are  during a given priod or season (like Great Lent): if we are a Sunday, it checks which Sunday of the coptic month we are and adds it to the "period" string. Otherwise, it adds the number of days elapsed since the beginning of the period
 * @param {string} period  - the season or the period *@param {number} days  - the number of days elapsed since the beginning of a given season or period, e.g.:
 * @param {number} weekDay - the day of the week as a number (Sunday = 0)
 * @returns {string} - the period/season after adding either the Sunday or the number of days elapsed
 */
function isItSundayOrWeekDay(period, days, weekDay) {
    if (weekDay === 0)
        return period + checkWhichSundayWeAre(days, weekDay); //we are a Sunday
    else
        return period + days.toString(); // we are not a sunday
}
/**
 *
 * @returns {string} - If today is Sunday, Monday or Tuesday, it returns "Adam", else, it returns "Watos"
 */
function isWatosOrAdam(day = weekDay, season = Season) {
    if ([0, 1, 2].includes(day))
        return "Adam";
    return "Watos";
}
/**
 * Determins wether we celebrate the 29th of the Coptic Month
 * @returns
 */
function Coptic29th() {
    if (Number(copticDay) !== 29 || [4, 5, 6, 7].includes(Number(copticMonth)))
        return false;
    else
        return true;
}
function setVariableSeasonalPhrases(season) {
    return {
        giaki: setGiAki(season)
    };
    function setGiAki(season) {
        const giaki = [
            {
                Season: [Seasons.NoSeason],
                AR: 'لأنَّكَ أتيْتَ وخَلصْتَنا',
                CA: 'جي آك إي أكسوتي إمّون',
                FR: 'car Tu es venu et nous as sauvés',
                EN: 'for You\'ve come and saved us',
                COP: 'ϫⲉ ⲁⲕ̀\' ⲁⲕⲥⲱϯ ⲙ̀ⲙⲟⲛ'
            },
            {
                Season: [Seasons.Nativity],
                AR: 'لأنَّكَ ولِدتَ وخَلصْتَنا',
                CA: 'جي آك ماسف أكسوتي إمّون',
                FR: 'car Tu es né et nous as sauvés',
                EN: 'for You\'ve born and saved us',
                COP: 'ϫⲉ ⲁⲩⲙⲁⲥⲕ ⲁⲕⲥⲱϯ ⲙ̀ⲙⲟⲛ'
            },
            {
                Season: [Seasons.Baptism],
                AR: 'لأنَّكَ اعتمدت وخَلصْتَنا',
                CA: 'جي آك أومس أكسوتي إمّون',
                FR: 'car Tu es baptisé et nous as sauvés',
                EN: 'for You\'ve been baptized and saved us',
                COP: 'ϫⲉ ⲁⲕϭⲓⲱⲙⲥ ⲁⲕⲥⲱϯ ⲙ̀ⲙⲟⲛ'
            },
            {
                Season: [Seasons.PentecostalDays, Seasons.Ascension],
                AR: 'لأنَّكَ قُمتَ وخَلصْتَنا',
                CA: 'جي آك تونك أكسوتي إمّون',
                FR: 'car Tu es ressuscité et nous as sauvés',
                EN: 'for You\'ve raised and saved us',
                COP: 'ϫⲉ ⲁⲕⲧⲱⲛⲕ ⲁⲕⲥⲱϯ ⲙ̀ⲙⲟⲛ'
            },
            {
                Season: [Seasons.CrossFeast, Seasons.HolyWeek],
                AR: 'لأنكَ صُلبتَ وخَلصْتَنا',
                CA: 'جي آك آشك أكسوتي إمّون',
                FR: 'car Tu as été crucifié et nous as sauvés',
                EN: 'for You\'ve been crucified and saved us',
                COP: 'ϫⲉ ⲁⲕ̀\' ⲁⲕⲥⲱϯ ⲙ̀ⲙⲟⲛ'
            },
        ];
        //If we are a Sunday, giAki will be ge aktonk as during the Pentecostal Days
        if (weekDay === 0 || copticFeasts.Coptic29th)
            return findGiAki(Seasons.PentecostalDays);
        //If we it is the Circumcision Feast, giAki will be 'ge ak masf'
        if (copticDate === copticFeasts.Circumcision)
            return findGiAki(Seasons.Nativity);
        if (copticReadingsDate === copticFeasts.PalmSunday && todayDate.getHours() > 15)
            return findGiAki(Seasons.HolyWeek);
        return findGiAki(season) || findGiAki(Seasons.NoSeason);
        function findGiAki(season) {
            return giaki.find(resp => resp.Season.includes(season));
        }
    }
}
;
/**
 * Returns the default Season according to the 3 Seasons of the Coptic year, i.e., the natural seasons not those based on fasts periods or events. Those 3 Seasons are: Rain (where the Nile is expected to flod), Crops (Where traditionnaly Egyptians started plating the fields), Harvest (Where they started harvesting)
 */
function naturalSeasons() {
    let daysNumber = Number(copticDay) + ((Number(copticMonth) - 1) * 30);
    console.log(daysNumber);
    if (daysNumber < 38 || daysNumber >= 282) {
        //We are duing the "Rain" seasons: between 12/10 and 09/02
        return Seasons.Rain;
    }
    else if (daysNumber >= 38 && daysNumber < 129) {
        //We are duing the "Crops" seasons: between 10/02 and 10/05
        return Seasons.Crops;
    }
    else if (daysNumber >= 129) {
        //We are duing the "Harvest" seasons: between 11/05 and 11/10
        return Seasons.Harvest;
    }
}
/**
 * Shows the dates (Gregorian, coptic, coptic readings etc.), in an html element in the Temporary Dev Area
 */
function showDates(dateDiv = document.getElementById("dateDiv")) {
    if (!dateDiv) {
        dateDiv = containerDiv.insertAdjacentElement("beforebegin", document.createElement("div"));
        dateDiv.classList.add("dateDiv");
        dateDiv.id = "dateDiv";
    }
    if (!dateDiv)
        return;
    //Inserting the Gregorian date
    let date = { AR: 'التاريخ', FR: 'Date', EN: 'Date' }[defaultLanguage]
        + ' : '
        + todayDate.getDate().toLocaleString() +
        "/"
        + (todayDate.getMonth() + 1).toString() +
        "/"
        + todayDate.getFullYear().toString();
    insertDateBox(date, "gregorianDateBox");
    //Inserting the home image after the dateBox
    if (!dateDiv.querySelector("#homeImg"))
        dateDiv.appendChild(document.getElementById("homeImg"));
    //Inserting the Coptic date
    date =
        { AR: 'التقويم القبطي', FR: 'Date Copte', EN: 'Coptic Date' }[defaultLanguage]
            + " : "
            + copticDay
            + " "
            + (copticMonths[Number(copticMonth)][defaultLanguage] || copticMonths[Number(copticMonth)]['EN']) +
            " "
            + copticYear +
            " \n"
            + { AR: 'قراءات  ', FR: 'Lectures du', EN: 'Readings Date' }[defaultLanguage] + " : "
            + (() => {
                if (copticReadingsDate.startsWith(Seasons.GreatLent))
                    return ({ AR: 'اليوم الـ ', FR: ' ', EN: 'Day ' }[defaultLanguage] +
                        copticReadingsDate.split(Seasons.GreatLent)[1] +
                        { AR: 'من الصوم الكبير  ', FR: 'ème du Grand Carême ', EN: ' of the Great Lent' }[defaultLanguage]);
                if (copticReadingsDate.startsWith(Seasons.PentecostalDays))
                    return ({ AR: ' اليوم الـ ', FR: ' ', EN: 'Day ' }[defaultLanguage] +
                        copticReadingsDate.split(Seasons.PentecostalDays)[1] +
                        { AR: ' من الخمسين المقدسة  ', FR: 'ème jour des 50 jours de Pentecotes', EN: ' of the 50 Pentecostal days' }[defaultLanguage]);
                if (copticReadingsDate.startsWith(Seasons.JonahFast))
                    return ("Day " +
                        copticReadingsDate.split(Seasons.JonahFast)[1] +
                        " of Jonah Fast");
                if (copticReadingsDate.endsWith("Sunday") &&
                    copticMonths[Number(copticReadingsDate.slice(0, 2))])
                    return (copticMonths[Number(copticReadingsDate.slice(0, 2))].EN +
                        " " +
                        copticReadingsDate
                            .slice(2, copticReadingsDate.length)
                            .split("Sunday")[0] +
                        " Sunday");
                if (copticMonths[Number(copticMonth)])
                    return (copticReadingsDate.slice(0, 2) +
                        " " +
                        copticMonths[Number(copticReadingsDate.slice(2, 4))].EN);
                return "";
            })();
    insertDateBox(date, "copticDateBox");
    function insertDateBox(date, id) {
        let dateBox = document.getElementById(id);
        //Inserting a date box
        if (!dateBox) {
            dateBox = dateDiv.appendChild(document.createElement("div"));
            dateBox.id = id;
            dateBox.style.display = "block !important";
            dateBox.classList.add("dateBox");
        }
        dateBox.innerHTML = ""; //we empty the div
        let p = dateBox.appendChild(document.createElement("p"));
        p.innerText = date;
        if (defaultLanguage === 'AR')
            p.style.direction = 'rtl';
    }
    (function insertCredentials() {
        let credentialsDiv = document.getElementById('credentialsDiv');
        if (!credentialsDiv) {
            //Inserting a creditials Div after containerDiv
            credentialsDiv = containerDiv.insertAdjacentElement("afterend", document.createElement("div"));
            credentialsDiv.classList.add("credentialsDiv");
            credentialsDiv.id = "credentialsDiv";
            credentialsDiv.style.padding = "3px 20px";
        }
        ;
        credentialsDiv.innerText =
            "Today: " +
                todayDate.toString() +
                " .\n Season = " +
                Season +
                " .\n Version = " +
                (version || localStorage.version) +
                ".\n" +
                "We " +
                `${isFast ? "are " : "are not "}` +
                "during a fast period or on a fast day (Wednesday or Friday";
    })();
    return dateDiv;
}
/**
 * Changes the current Gregorian date and adjusts the coptic date and the coptic readings date, etc.
 * @param {string} date  - allows the user to pass the Greogrian calendar day to which he wants the date to be set, as a string provided from an input box or by the date picker
 * @param {boolean} next  - used when the user wants to jumb forward or back by only one day
 * @param {number} days  - the number of days by which the user wants to jumb forward or back
 * @returns {Date} - the Gregorian date as set by the user
 */
async function changeDate(date, next = true, days = 1, showAlert = true) {
    if (date) {
        if (!todayDate || checkIfDateIsToday(date))
            todayDate = new Date(); //If todayDate is not set, or if the "date" argument is today, we set todayDate = today (i.e., newDate())
        else
            todayDate.setTime(new Date(date).getTime()); //If todayDate is set, and the date passed as argument is not today, we set todayDate to the "date" argument
    }
    else {
        if (next) {
            todayDate.setTime(todayDate.getTime() + days * calendarDay); //advancing the date by the number of calendar years
        }
        else if (!next) {
            todayDate.setTime(todayDate.getTime() - days * calendarDay);
        }
    }
    await setCopticDates(todayDate, true);
    if (checkIfDateIsToday(todayDate)) {
        localStorage.removeItem("selectedDate");
    }
    else {
        //If todayDate is not equal to the date of today (not same day and same month and same year), we store the manually selected date in the local storage
        localStorage.selectedDate = todayDate.getTime().toString();
    }
    console.log(todayDate);
    if (showAlert)
        alert("Date was successfully changed to " +
            todayDate.getDate().toString() +
            "/" +
            (todayDate.getMonth() + 1).toString() +
            "/" +
            todayDate.getFullYear().toString() +
            " which corresponds to " +
            copticDate +
            " of the coptic calendar ");
    displayChildButtonsOrPrayers(Btn.MainMenu); //We return to the main page menu because in some cases when the date changes, the buttons/prayers availabe are not the same according to the Season
    return todayDate;
}
/**
 * Checks whether the date passed to it is today
 * @param {Date} storedDate  - The date which we want to check if it corresponds to today
 * @returns {boolean} - returns true if storedDate is same as today
 */
function checkIfDateIsToday(date) {
    if (!date
        ||
            (date?.getDate() === new Date().getDate()
                &&
                    date.getMonth() === new Date().getMonth()
                &&
                    date.getFullYear() === new Date().getFullYear()))
        return true; //If the date argument is not valid,  or if the date argument refers to the same day, month and year as today, we will return true which means that todayDate will be set to today's date
    return false;
}
/**
 * returns a string[][], each string[] element includes 2 elements: the current coptic date (as as string formatted like "DDMM") and the corresponding readings date if any (also formatted as "DDMM").
 * @returns {string[][]}
 */
function getCopticReadingsDates() {
    return [
        ["1307", "1903", "2111", "0402", "0403", "0804", "1002"],
        [
            "1703",
            "1301",
            "3001",
            "1209",
            "1406",
            "1412",
            "1504",
            "1806",
            "2103",
            "2706",
            "2809",
            "0104",
            "0302",
            "0502",
            "0603",
            "0705",
            "0902",
        ],
        [
            "2708",
            "1101",
            "1110",
            "1306",
            "1404",
            "1605",
            "1706",
            "1808",
            "2211",
            "2306",
            "2705",
            "1111",
            "2201",
            "1101",
            "2201",
        ],
        [
            "2803",
            "0901",
            "1004",
            "1109",
            "1311",
            "1403",
            "1410",
            "1707",
            "1709",
            "1805",
            "1904",
            "1908",
            "2206",
            "2303",
            "2305",
            "2406",
            "2412",
            "2704",
            "2709",
            "0207",
            "0310",
            "0507",
            "0513",
            "1011",
            "1112",
            "2302",
        ],
        [
            "3005",
            "0501",
            "1001",
            "2001",
            "0102",
            "2901",
            "0602",
            "1003",
            "2604",
            "2405",
            "2905",
            "1507",
            "2607",
            "0608",
            "0808",
            "1108",
            "2508",
            "0111",
            "1711",
            "2811",
            "0212",
            "0612",
            "1512",
            "2112",
        ],
        [
            "0105",
            "1508",
            "1907",
            "2005",
            "2209",
            "2510",
            "2908",
            "0110",
            "0309",
            "0611",
            "1501",
            "2401",
            "2602",
        ],
        ["0109", "1612", "2105", "2110", "0304"],
        ["0206", "2504", "0704", "0711", "2002"],
        ["0210", "3006"],
        [
            "0311",
            "1208",
            "1303",
            "1812",
            "2207",
            "2810",
            "3003",
            "3009",
            "0103",
            "0202",
            "0205",
            "0308",
            "0701",
            "0706",
            "0709",
            "0805",
            "1102",
            "1702",
            "0301",
        ],
        [
            "0312",
            "1401",
            "1704",
            "0906",
            "0209",
            "1409",
            "2109",
            "2909",
            "2410",
            "1511",
        ],
        ["0313", "1310"],
        [
            "0405",
            "2404",
            "2906",
            "1608",
            "1609",
            "1611",
            "0113"
        ],
        [
            "0511",
            "1708",
            "1803",
            "1811",
            "2104",
            "2106",
            "2911",
            "0404",
            "0807",
            "1006",
        ],
        ["0605", "0604", "0806"],
        [
            "0801",
            "1505",
            "2004",
            "2010",
            "2212",
            "2307",
            "2606",
            "2610",
            "2611",
            "0401",
            "0412",
            "0504",
            "0508",
            "0509",
            "0601",
            "0708",
            "0910",
            "2102",
            "2501",
        ],
        ["0903", "0106", "0303", "0407", "1201"],
        ["1009", "0812"],
        ["1202", "1509"],
        ["1203", "1210"],
        ["1312", "2107"],
        ["1402", "2507"],
        [
            "1503",
            "1211",
            "1510",
            "2411",
            "2805",
            "0112",
            "0410",
            "0411",
            "0606",
            "0912",
        ],
        ["1601", "2807", "0909"],
        ["1610", "1104", "1506", "1603", "1705", "0204"],
        ["1701", "1007", "1212"],
        [
            "2009",
            "0702",
            "1302",
            "2502",
            "0703",
            "1204",
            "1405",
            "2505",
            "0306",
            "1206",
            "1906",
            "0907",
            "0108",
            "1008",
            "2910",
            "0413",
        ],
        [
            "2011",
            "1807",
            "2008",
            "2408",
            "2506",
            "2608",
            "2806",
            "0208",
            "0610",
            "1502",
            "1902",
        ],
        ["2101", "1107", "1407", "2301"],
        ["2202", "1804", "0406"],
        [
            "2203",
            "1010",
            "1308",
            "1905",
            "1911",
            "2012",
            "2210",
            "2603",
            "3011",
            "0107",
            "0408",
            "0707",
            "2701",
            "2801",
        ],
        ["2204", "3007"],
        ["2205", "1309", "1710", "1909", "2310", "0510", "0904", "0908", "2402"],
        ["2308", "1910", "2312", "2711", "2712", "0609", "0710", "0809", "0703"],
        ["2409", "0810"],
        ["2503", "2509", "2511", "2808", "0505", "0802", "2802"],
        ["2601", "1103", "1304", "1606", "0712"],
        ["2605", "0512"],
        ["2702", "1411", "1809", "1912", "2707", "0506", "0811", "0905"],
        ["2703", "1604", "2311", "0503", "0607", "1012", "1712", "2902"],
        [
            "2903",
            "1602",
            "1802",
            "0203",
            "1106",
            "2006",
            "0307",
            "1207",
            "1607",
            "2007",
            "2407",
            "1408",
            "2208",
            "0409",
            "1810",
        ],
        ["3008", "0211", "2003", "2309", "2710", "0911", "3002"],
    ];
}
function testDateFunction(date = new Date("2020.12.31")) {
    addConsoleSaveMethod(console);
    setCopticDates(date);
    let text = "";
    for (let i = 1; i < 1500; i++) {
        changeDate(undefined, true, undefined, false);
        text +=
            "Gregorian = " +
                todayDate.getDate().toString() +
                "/" +
                (todayDate.getMonth() + 1).toString() +
                "/" +
                todayDate.getFullYear().toString() +
                "\t";
        text += "Coptic = " + copticDate + "\t";
        text += "Readings = " + copticReadingsDate + "\n";
    }
    //@ts-ignore
    console.save(text, "testDateFunction.doc");
    changeDate(new Date());
}
/**
 * It was created to reorganise the copticReadingsDates array. It was used once, and we will not most probably need to use it again. Will not delete it immediately though
 */
function groupReadingsDates() {
    let unique = new Set();
    let dates = [];
    copticReadingsDates.forEach((dateArray) => {
        if (unique.has(dateArray[1]))
            return;
        unique.add(dateArray[1]);
        dates.push([dateArray[1]]);
        copticReadingsDates
            .filter((array) => array[1] === dateArray[1])
            .forEach((arrayDate) => dates[dates.length - 1].push(arrayDate[0]));
    });
    console.log(dates);
    dates.forEach((groupArray) => {
        copticReadingsDates
            .filter((dateArray) => dateArray[1] === groupArray[0])
            .forEach((dateArray) => {
            console.log(dateArray[0]);
            if (groupArray.indexOf(dateArray[0]) < 0)
                console.log("something wrong", groupArray);
        });
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2V0RGF0ZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9tb2R1bGVzL1NldERhdGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQUksTUFBYyxDQUFDLENBQUMsaUlBQWlJO0FBQ3JKLElBQUksU0FBZSxFQUNqQixVQUFrQixFQUFFLHNIQUFzSDtBQUMxSSxXQUFtQixFQUFFLHVCQUF1QjtBQUM1QyxTQUFpQixFQUFFLHVCQUF1QjtBQUMxQyxVQUFrQixFQUFFLHVCQUF1QjtBQUMzQyxrQkFBMEIsRUFBRSxpSUFBaUk7QUFDN0osT0FBZSxFQUFFLDRGQUE0RjtBQUM3RyxNQUFlLENBQUM7QUFFbEIsTUFBTSxtQkFBbUIsR0FBZSxzQkFBc0IsRUFBRSxDQUFDO0FBR2pFLE1BQU0saUJBQWlCLEdBQWU7SUFDcEMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztJQUNiLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7SUFDYixDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ1osQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztJQUNiLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7SUFDYixDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ1osQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztJQUNiLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7SUFDYixDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ1osQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztJQUNiLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDWixDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO0lBQ2IsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUs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TTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtTQUNQO1FBQ0Q7WUFDRSxNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07U0FDUDtRQUNEO1lBQ0UsTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07U0FDUDtRQUNEO1lBQ0UsTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1NBQ1A7UUFDRDtZQUNFLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07U0FDUDtRQUNELENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQztRQUN4QyxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUM7UUFDeEMsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDO1FBQ2hCO1lBQ0UsTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtTQUNQO1FBQ0Q7WUFDRSxNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1NBQ1A7UUFDRCxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUM7UUFDaEI7WUFDRSxNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1NBQ1A7UUFDRDtZQUNFLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07U0FDUDtRQUNELENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUM7UUFDeEI7WUFDRSxNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1NBQ1A7UUFDRCxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUM7UUFDeEMsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDO1FBQ2hCLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQztRQUNoQixDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUM7UUFDaEIsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDO1FBQ2hCLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQztRQUNoQjtZQUNFLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07U0FDUDtRQUNELENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUM7UUFDeEIsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQztRQUNoRCxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDO1FBQ3hCO1lBQ0UsTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtTQUNQO1FBQ0Q7WUFDRSxNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtTQUNQO1FBQ0QsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUM7UUFDaEMsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQztRQUN4QjtZQUNFLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1NBQ1A7UUFDRCxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUM7UUFDaEIsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQztRQUN4RSxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDO1FBQ3hFLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQztRQUNoQixDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQztRQUN4RCxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUM7UUFDeEMsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDO1FBQ2hCLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQztRQUNoRSxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUM7UUFDaEU7WUFDRSxNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07U0FD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