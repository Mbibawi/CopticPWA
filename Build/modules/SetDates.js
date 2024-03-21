/**
 * a function that runs at the beginning and sets some global dates like the coptic date (as a string), today's Gregorian date (as a Date), the day of the week (as a number), the Season (a string), etc.
 * @param {Date} today  - a Gregorian date provided by the user or set automatically to the date of today if missing
 */
async function setCopticDates(today) {
    todayDate = today || (() => {
        if (localStorage.selectedDate)
            localStorage.removeItem("selectedDate"); //We do this in order to reset the local storage 'selectedDate' when setCopticDates() is called without a date passed to it
        return new Date();
    })();
    weekDay = todayDate.getDay();
    convertGregorianDateToCopticDate(todayDate, true);
    Season = Seasons.NoSeason; //this will be its default value unless it is changed by another function;
    copticReadingsDate = getSeasonAndCopticReadingsDate(copticDate);
    if (checkIf29thOfCopticMonth())
        copticFeasts.Coptic29th = copticDate; //If we are on the 29th of the coptic Month, we will set the value of copticFeasts.Cotpic29th to today's copticDate in order to able to retrieve the prayers of this day
    await setSeasonalTextForAll(Season); //!This must be called here after the dates and seasons were changed
    reloadScriptToBody(["PrayersArray"]);
    createFakeAnchor("homeImg");
    if (!copticReadingsDate)
        return console.log("copticReadingsDate was not property set = ", copticReadingsDate);
    //copticDay = copticDate.slice(0, 2);
    isFast = (() => {
        if (Season === Seasons.PentecostalDays)
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
        Season = Seasons.PentecostalDays;
        date = isItSundayOrWeekDay(Seasons.PentecostalDays, Math.abs(difference), weekDay);
    })();
    (function ifApostlesFast() {
        if (difference > 0)
            return; //This means that we are before the Ressurrection Feast, and probably still during the Great Lent
        if (Math.abs(difference) < 49)
            return; //this means that we are still during the Pentecostal Period
        if (Number(copticMonth) > 11)
            return;
        if (Number(copticMonth) === 11 && Number(copticDay) > 4)
            return; //We are after the Apostles Feast
        //We are more than 50 days after Resurrection, which means that we are during the Apostles lent (i.e. the coptic date is before 05/11 which is the date of the Apostles Feast)
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
    let date = "Date: " +
        todayDate.getDate().toLocaleString() +
        "/" +
        (todayDate.getMonth() + 1).toString() +
        "/" +
        todayDate.getFullYear().toString();
    insertDateBox(date, "gregorianDateBox");
    //Inserting the home image after the dateBox
    if (!dateDiv.querySelector("#homeImg"))
        dateDiv.appendChild(document.getElementById("homeImg"));
    //Inserting the Coptic date
    date =
        "Coptic Date: " +
            copticDay +
            " " +
            copticMonths[Number(copticMonth)].EN +
            " " +
            copticYear +
            " \n" +
            "Readings date: " +
            (() => {
                if (copticReadingsDate.startsWith(Seasons.GreatLent))
                    return ("Day " +
                        copticReadingsDate.split(Seasons.GreatLent)[1] +
                        " of the Great Lent");
                if (copticReadingsDate.startsWith(Seasons.PentecostalDays))
                    return ("Day " +
                        copticReadingsDate.split(Seasons.PentecostalDays)[1] +
                        " of the 50 Pentecostal Days");
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
    await setCopticDates(todayDate);
    PrayersArrays.forEach((array) => (array = []));
    populatePrayersArrays();
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
            (date.getDate() === new Date().getDate()
                &&
                    date.getMonth() === new Date().getMonth()
                &&
                    date.getFullYear() === new Date().getFullYear()))
        return true; //If the date argument is not valid,  or if the date argument refers to the same day, month and year as today, we will return true which means that todayDate will be set to today's date
    return false;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2V0RGF0ZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9tb2R1bGVzL1NldERhdGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7R0FHRztBQUNILEtBQUssVUFBVSxjQUFjLENBQUMsS0FBWTtJQUV4QyxTQUFTLEdBQUcsS0FBSyxJQUFJLENBQUMsR0FBRyxFQUFFO1FBQ3pCLElBQUksWUFBWSxDQUFDLFlBQVk7WUFBRSxZQUFZLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsMkhBQTJIO1FBQ25NLE9BQU8sSUFBSSxJQUFJLEVBQUUsQ0FBQTtJQUNuQixDQUFDLENBQUMsRUFBRSxDQUFDO0lBRUwsT0FBTyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUM3QixnQ0FBZ0MsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFFbEQsTUFBTSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQywwRUFBMEU7SUFDckcsa0JBQWtCLEdBQUcsOEJBQThCLENBQUMsVUFBVSxDQUFXLENBQUM7SUFDMUUsSUFBSSx3QkFBd0IsRUFBRTtRQUFFLFlBQVksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDLENBQUMsd0tBQXdLO0lBRTlPLE1BQU0scUJBQXFCLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxvRUFBb0U7SUFDekcsa0JBQWtCLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO0lBQ3JDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzVCLElBQUksQ0FBQyxrQkFBa0I7UUFDckIsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUNoQiw0Q0FBNEMsRUFDNUMsa0JBQWtCLENBQ25CLENBQUM7SUFDSixxQ0FBcUM7SUFDckMsTUFBTSxHQUFHLENBQUMsR0FBRyxFQUFFO1FBQ2IsSUFBSSxNQUFNLEtBQUssT0FBTyxDQUFDLGVBQWU7WUFDcEMsT0FBTyxLQUFLLENBQUM7YUFDVixJQUFJLFdB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