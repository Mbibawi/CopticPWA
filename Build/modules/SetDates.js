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
    if (Number(copticDay) === 29 && ![4, 5, 6, 7].includes(Number(copticMonth)))
        copticFeasts.Coptic29th = copticDate; //If we are on the 29th of the coptic Month, we will set the value of copticFeasts.Cotpic29th to today's copticDate in order to able to retrieve the prayers of this day
    else if (Number(copticDay) === 21)
        copticFeasts.Coptic21th = copticDate;
    variable.giaki = setVariableSeasonalPhrases(Season).giaki; //!This must be called here after the dates and seasons were changed
    if (changeDate)
        reloadScripts(['PrayersArray']);
    createFakeAnchor("homeImg");
    if (!copticReadingsDate)
        return console.log("copticReadingsDate was not property set = ", copticReadingsDate);
    //copticDay = copticDate.slice(0, 2);
    isFast = (() => {
        if ([Seasons.PentecostalDays, Seasons.Ascension].includes(Season))
            return false;
        else if (copticFasts.indexOf(Season) > -1)
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
    daysInCurrentYear = Math.ceil(daysInCurrentYear + 1); //Why +1? I don't know. Need to sort it out to know why the dates don't match unless I add 1
    let month = daysInCurrentYear / 30;
    if (daysInCurrentYear / 30 === 0)
        month = 1;
    month = Math.ceil(month);
    let day = Math.ceil(daysInCurrentYear % 30);
    if (day > 30)
        day -= 30;
    if (daysInCurrentYear % 30 === 0)
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
    let specialSeason = checkIfInASpecificSeason(today);
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
function checkIfInASpecificSeason(today) {
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
        if (difference > 68)
            return;
        if (difference < 65)
            return;
        //We are durings the Jonah Fast days (3 days + 1)
        //The Jonah feast starts 15 days before the begining of the Great Lent
        difference === 65
            ? Season = Seasons.JonahFeast //We are on the Jonah Feast
            : Season = Seasons.JonahFast; //We are during the 3 days of Jonah Fast
        date = isItSundayOrWeekDay(Seasons.JonahFast, Math.abs(69 - difference), weekDay);
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
        if (Number(copticMonth) > 11)
            return;
        if (Number(copticMonth) === 11 && Number(copticDay) > 4)
            return; //We are after the Apostles Feast
        //We are more than 50 dayis after Resurrection, which means that we are during the Apostles lent (i.e. the coptic date is before 05/11 which is the date of the Apostles Feast)
        Season = Seasons.ApostlesFast;
    })();
    (function ifStMaryFast() {
        if (Number(copticMonth) !== 12)
            return;
        if (Number(copticDay) > 15)
            return;
        //We are between 01/12 and 15/12, which means that we are during St Mary's Fast
        Season = Seasons.StMaryFast;
    })();
    (function ifNayrouzOrCrossFeast() {
        if (Number(copticMonth) !== 1)
            return;
        if (Number(copticDay) > 19)
            return;
        if (Number(copticDay) < 17)
            Season = Seasons.Nayrouz;
        else if (Number(copticDay) > 16)
            Season = Seasons.CrossFeast;
    })();
    (function ifNativityFast() {
        if (Number(copticMonth) !== 3)
            return;
        if (Number(copticDay) < 16)
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
        if (Number(copticMonth) !== 4)
            return;
        if (Number(copticDay) > 27)
            return; //We are either in the Paramoun or during the Feast
        date = getKiahkWeek();
        function getKiahkWeek() {
            let sunday;
            if ([0, 7, 14, 21].includes(Number(copticDay) - weekDay))
                //When the 1st of Kiahk is a Monday, Kiahk will have only 3 Sundays before Kiahk 28th (i.e., on the 7th, the 14th, and the 21th of Kiahk), we will hence consider that the 30th of Hatour is the 1st Sunday of Kiahk, and will count Kiahk's Sundays from 2
                sunday = checkWhichSundayWeAre(Number(copticDay) + 7 - weekDay);
            else
                sunday = checkWhichSundayWeAre(Number(copticDay) - weekDay);
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
        if (todayDate.getMonth() !== 0)
            return; //If we are not in January
        if (todayDate.getDate() > 6)
            return; //If we are after January 6th;
        if (todayDate.getDate() === 6 && todayDate.getHours() > 15)
            return; //The Nativity Feast has been fixed to January 7th which is Kiahk 28th not Kiahk 29th. We use to celebrate the Nativity Mass on January 6 late afternoon
        if (copticDate === copticFeasts.NativityParamoun && todayDate.getHours() > 15)
            return;
        if (([4, 5].includes(todayDate.getDate()) && weekDay === 5) //If January 4 or January 5, is a Friday, it means that the Feast (i.e., January 7th) will be a Monday or a Sunday. In both cases, the Paramoun will start on Friday
            ||
                (todayDate.getDate() === 5 && weekDay === 6) //If January 5, is a Saturday, it means that the Nativity Feast (i.e., January 7th will be a Monday), the Paramoun will start on January 4th throughout January 6
            ||
                (todayDate.getDate() === 6 && todayDate.getHours() < 15) //!The Nativity Feast has been fixed to January 7th which corresponds to Kiahk 28th instead of Kiahk 29th. That's why the Paramoun will end in January 6 afternoon. In fact we use to celebrate the Mass in the late evening of January 6th
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
        if (todayDate.getMonth() !== 0)
            return; //We are not in January
        if (Number(copticMonth) === 5 && Number(copticDay) > 5)
            return;
        if (isNativityFeast())
            Season = Seasons.Nativity;
        function isNativityFeast() {
            if ((copticDate === copticFeasts.NativityParamoun &&
                todayDate.getHours() > 15)
                ||
                    (todayDate.getDate() === 6 && todayDate.getHours() > 15) //This is because the Nativity feast has been fixed to 7 January although it should actually come on January 8th (Kiahk 29th)
                ||
                    (todayDate.getDate() === 7)
                ||
                    (Number(copticDay) >= 29) //This impliedly means that we are in Kiahk because the function returns if we are after the 6th of Toubah
                ||
                    (Number(copticDay) < 7) //This impliedly means that we are during Toubah (before the 6th of Toubah) since January starts in the last week of Kiahk
            ) {
                return true;
            }
        }
    })();
    (function ifBaptismeParamoun() {
        if (Number(copticMonth) !== 5)
            return;
        if (Number(copticDay) > 10)
            return;
        if (Number(copticDay) < 8)
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
        if (Number(copticMonth) !== 5)
            return;
        if (Number(copticDay) > 12)
            return;
        if (Number(copticDay) >= 11) //i.e., from 11 to 13 Toubah 
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
        if (weekDay === 0)
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
                version +
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
    showChildButtonsOrPrayers(btnMainMenu); //We return to the main page menu because in some cases when the date changes, the buttons/prayers availabe are not the same according to the Season
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2V0RGF0ZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9tb2R1bGVzL1NldERhdGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQUksTUFBYyxDQUFDLENBQUMsaUlBQWlJO0FBQ3JKLElBQUksU0FBZSxFQUNqQixVQUFrQixFQUFFLHNIQUFzSDtBQUMxSSxXQUFtQixFQUFFLHVCQUF1QjtBQUM1QyxTQUFpQixFQUFFLHVCQUF1QjtBQUMxQyxVQUFrQixFQUFFLHVCQUF1QjtBQUMzQyxrQkFBMEIsRUFBRSxpSUFBaUk7QUFDN0osT0FBZSxFQUFFLDRGQUE0RjtBQUM3RyxNQUFlLENBQUM7QUFFbEIsTUFBTSxtQkFBbUIsR0FBZSxzQkFBc0IsRUFBRSxDQUFDO0FBR2pFLE1BQU0saUJBQWlCLEdBQWU7SUFDcEMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztJQUNiLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7SUFDYixDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ1osQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztJQUNiLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7SUFDYixDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ1osQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztJQUNiLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7SUFDYixDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ1osQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztJQUNiLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDWixDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO0lBQ2IsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUs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TTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07U0FDUDtRQUNEO1lBQ0UsTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07U0FDUDtRQUNEO1lBQ0UsTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1NBQ1A7UUFDRDtZQUNFLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07U0FDUDtRQUNELENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQztRQUN4QyxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUM7UUFDeEMsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDO1FBQ2hCO1lBQ0UsTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtTQUNQO1FBQ0Q7WUFDRSxNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1NBQ1A7UUFDRCxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUM7UUFDaEI7WUFDRSxNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1NBQ1A7UUFDRDtZQUNFLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07U0FDUDtRQUNELENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUM7UUFDeEI7WUFDRSxNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1NBQ1A7UUFDRCxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUM7UUFDeEMsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDO1FBQ2hCLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQztRQUNoQixDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUM7UUFDaEIsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDO1FBQ2hCLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQztRQUNoQjtZQUNFLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07U0FDUDtRQUNELENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUM7UUFDeEIsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQztRQUNoRCxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDO1FBQ3hCO1lBQ0UsTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtTQUNQO1FBQ0Q7WUFDRSxNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtTQUNQO1FBQ0QsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUM7UUFDaEMsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQztRQUN4QjtZQUNFLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1NBQ1A7UUFDRCxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUM7UUFDaEIsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQztRQUN4RSxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDO1FBQ3hFLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQztRQUNoQixDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQztRQUN4RCxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUM7UUFDeEMsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDO1FBQ2hCLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQztRQUNoRSxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUM7UUFDaEU7WUFDRSxNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07U0FDUDtRQUNELENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDO0tBQ3pELENBQUM7QUFDSixDQUFDO0FBRUQsU0FBUyxnQkFBZ0Is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