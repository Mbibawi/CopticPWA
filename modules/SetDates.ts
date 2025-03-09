var Season: string; //This is a value telling whether we are during a special period of the year like the Great Lent or the 50 Pentecostal days, etc.
var todayDate: Date,
  copticDate: string, //The Coptic date is stored in a string not in a number like the gregorian date, this is to avoid complex calculations
  copticMonth: string, //same comment as above
  copticDay: string, //same comment as above
  copticYear: string, //same comment as above
  copticReadingsDate: string, //This is the date of the day's readings (gospel, Catholicon, praxis, etc.). It does not neceissarly correspond to the copticDate
  weekDay: number, //This is today's day of the week (Sunday, Monday, etc.) expressed in number starting from 0
  isFast: boolean;

const copticReadingsDates: string[][] = getCopticReadingsDates();


const ResurrectionDates: number[][] = [
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
async function setCopticDates(today?: Date, changeDate: boolean = false) {

  todayDate = today || (() => {
    if (localStorage.selectedDate) localStorage.selectedDate = null; //We do this in order to reset the local storage 'selectedDate' when setCopticDates() is called without a date passed to it
    return new Date()
  })();

  weekDay = todayDate.getDay();
  convertGregorianDateToCopticDate(todayDate, true);

  Season = Seasons.NoSeason; //this will be its default value unless it is changed by another function;
  copticReadingsDate = getSeasonAndCopticReadingsDate(copticDate) as string;

  if (Coptic29th()) copticFeasts.Coptic29th = copticDate; //If we are on the 29th of the coptic Month, we will set the value of copticFeasts.Cotpic29th to today's copticDate in order to able to retrieve the prayers of this day
  else if (Number(copticDay) === 21) copticFeasts.Coptic21th = copticDate;

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
      return true;//We are not during a fast period but we are a Wednesday or a Friday. Notice that we excluded the Pentecostal period case from the begining
    else return false;
  })();
  //Showing the dates and the version
  showDates(); //!Caution: showDates must come after isFast is set.
}
/**
 * Converts a date
 * @param {number[]} copticDate - the copticDate for which we want to get the gregorian date, it must be formatted as [day, month, year]
 * @returns
 */
function convertCopticDateToGregorianDate(
  copticDate: number[],
  gregorianDate?: number
) {
  if (!copticDate || copticDate.length < 3) return;

  let currentCopticDate = convertGregorianDateToCopticDate()[0]; //This will give a [day, month, year] array

  let yearsDifference = copticDate[2] - currentCopticDate[2];
  let monthsDifference = copticDate[1] - currentCopticDate[1];
  let daysDifference = copticDate[0] - currentCopticDate[0];

  let calendarDaysDifference =
    (yearsDifference * 365 + monthsDifference * 30 + daysDifference) *
    calendarDay;

  calendarDaysDifference = calendarDaysDifference + yearsDifference / 4; //Leap years

  if (!gregorianDate) gregorianDate = todayDate.getDate();

  gregorianDate = gregorianDate - calendarDaysDifference;

  return gregorianDate;
}
/**
 * Converts the provided Gregorian date into Coptic Date
 * @param {number} today - a number reflecting a date, which we will convert into coptic date. If ommitted, it will be set to the current date
 * @param {boolean} changeDates - tells whether the function should change the Coptic dates or should just return the new Coptic Date
 * @returns {[number[], string]} - an array containing as 1st element a number[] = [day, month, year] representing the coptic day, coptic month, and coptic year, the second elemement of the array is a string representing the copitc date formatted as 'DDMM'
 */
function convertGregorianDateToCopticDate(
  date?: Date,
  changeDates: boolean = true
): [number[], string] {
  let today: number;
  let tout1: number = Date.UTC(1883, 8, 11, 0, 0, 0, 0); //this is the Gregorian date for the 1st of Tout of the Coptic year 1600. We compensate the diffrence (50 minutes + 39 seconds) in order to get the time at 01:00:00 GMT

  let year: number = 1600; //this is the coptic year starting on Sept 11, 1883

  date
    ? today = Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0, 0)
    : today = Date.UTC(todayDate.getFullYear(), todayDate.getMonth(), todayDate.getDate(), 0, 0, 0, 0);

  let differenceInDays = (today - tout1) / calendarDay;

  let diffrenceInYears = Math.floor(differenceInDays / 365.25); //This gives the number of full Coptic years (based on 365.25 day/year)


  year += diffrenceInYears;

  let daysInCurrentYear =
    (differenceInDays - (diffrenceInYears * 365.25));

  daysInCurrentYear = Math.ceil(daysInCurrentYear + 1);//Why +1? I don't know. I got this from a pure try and fail run of the function. Need to figure out why the dates don't match unless we add 1

  let month = daysInCurrentYear / 30;

  month < 1 ? month = 1 : month = Math.ceil(month);

  let day = Math.ceil(daysInCurrentYear % 30);
  if (day === 0) day = 30;

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
function getSeasonAndCopticReadingsDate(
  coptDate: string = copticDate,
  today: Date = todayDate
): string | void {
  if (!coptDate) return console.log("coptDate is not valid = ", coptDate);

  let specialSeason: string = checkIfInSpecialSeason(today);
  if (specialSeason) {
    // it means we got a specific date for the Readings associated with a specific period (e.g.: Great Lent, PentecostalDays, etc.)
    return specialSeason;
  } else if (today.getDay() === 0) {
    // it means we are on an ordinary  Sunday (any sunday other than Great lent and Pentecostal period Sundays)
    // console.log('We are on a sunday')
    let sunday: string = checkWhichSundayWeAre(Number(copticDay), today.getDay());
    //the readings for the 5th sunday of any coptic month (other than the 5th sunday of the Great Lent or the Pentecostal Days) are the same. We will then retrieve the readings of the 5th sunday of the first coptic month (Tout)
    sunday === "5thSunday"
      ? (sunday = "01" + sunday)
      : (sunday = copticMonth + sunday);
    return sunday;
  } else {
    // it means we are in an ordinary day and we follow the ordinary readings calender, this should return a coptic date in a string of "DDMM"
    let date: string[] =
      copticReadingsDates
        .find(datesArray => datesArray.includes(coptDate));
    if (date) return date[0];
    else return coptDate;
  }
}
/**
 * Checks which Sunday we are in the coptic month (i.e. is it the 1st Sunday? 2nd Sunday, etc.)
 * @param {number} day  - the day of the coptic month or the number of days since the beginning of a season like the Great Lent or the Pentecostal days
 * The function returns a string like "1stSunday", "2nd Sunday", etc.
 */
function checkWhichSundayWeAre(day: number, theWeekDay: number = 0): string {
  if (theWeekDay !== 0) return;
  let n: number = day;
  if (Season === Seasons.GreatLent) n = n - 2; //The counting of the nubmer of days during the Great Lent starts from the Saturday preceding the first day of the Great Lent (which is a Monday). We hence substract 2 from the number of days elapsed in order to count for the 2 extra days added to the actual number of days elapsed since the begining of the Great Lent
  n = Math.ceil(Math.abs(n) / 7); //We use Math.abs in order to deal with cases where the difference is <0
  let sunday: string = n.toString();
  if (n === 1 || (n > 20 && n % 10 === 1)) sunday = sunday + "stSunday";
  else if (n === 2 || (n > 20 && n % 10 === 2)) sunday = sunday + "ndSunday";
  else if (n === 3 || (n > 20 && n % 10 === 3)) sunday = sunday + "rdSunday";
  else sunday = sunday + "thSunday";
  return sunday;
}
/**
 * It takes the date of today and checks whether according the Resurrection date this year, we are during an unfixed season like Great Lent, Pentecostal days or Apostles feast, etc.
 * @param {Date} today  - is the date of today according to the Gregorian calendar (it can be any day of the year if the user had manually set it)
 * @returns {string} - a string expressing the readings date . It will be added to the id of the reading in order to retrieve the coptic readings of the day
 */
function checkIfInSpecialSeason(today: Date): string {
  let readingsDate: string;
  //We filter the ResurrectionDates array for the resurrection date for the current year:
  let resurrectionDate: number[] = ResurrectionDates.find(
    (date) => date[0] === today.getFullYear()
  );

  //We create a new Date from the selected resurrection date, and will set its hour to UTC 0
  let resurrection = Date.UTC(resurrectionDate[0], resurrectionDate[1] - 1, resurrectionDate[2], 0, 0, 0, 0);
  //We create a new date equal to "today", and will set its hour to 0

  let todayUTC: number = Date.UTC(today.getFullYear(), today.getMonth(), today.getDate(), 0, 0, 0);
  readingsDate = checkForUnfixedEvent(
    todayUTC, //this is a number reflecting the date of today at UTC 0 hour
    resurrection, //we get a number reflecting the resurrection date at UTC 0 hour
  );
  return readingsDate;
}
/**
 * Checks whether we are during the Great Lent Period, the Pentecoste days or any season
 * @param {number} today  - is a number of milliseconds equal to the date of today at UTC 0 hours
 *
 * @param {number} resDate  - is a number of milliseconds equal to date of Resurrection in current year at UTC 0 hours
 * @returns {string} - which is equal to the season: e.g.: "Resurrection", "GreatLent30", "Pentecoste20", etc.
 */
function checkForUnfixedEvent(
  today: number,
  resDate: number,
): string {
  let difference = Math.floor((resDate - today) / calendarDay); // we get the difference between the 2 dates in days
  //We initiate the Season to NoSeason
  let coptDay: number = Number(copticDay),
    coptMonth: number = Number(copticMonth);
  let date: string;
  if (!Season) Season = Seasons.NoSeason;

  (function ifResurrection() {
    if (difference < 0) return;
    if (difference > 1) return;
    if (difference === 1 && todayDate.getHours() < 16) return; //If we are Saturday (which means that difference = 1) and we are after 4 PM, we will retrieve the readings of the Resurrection because we use to celebrate the Resurrection Mass on Saturday evening not on Sunday itself
    Season = Seasons.PentecostalDays; //we set teh Season value
    date = isItSundayOrWeekDay(Seasons.GreatLent, 58, weekDay);
  })();

  (function ifJonahFast() {
    if (difference > 69) return;
    if (difference < 66) return;

    //We are durings the Jonah Fast days (3 days + 1)
    //The Jonah feast starts 15 days before the begining of the Great Lent

    difference === 66
      ? Season = Seasons.JonahFeast//We are on the Jonah Feast
      : Season = Seasons.JonahFast; //We are during the 3 days of Jonah Fast
    date = isItSundayOrWeekDay(
      Seasons.JonahFast,
      Math.abs(70 - difference),
      weekDay
    );
  })();

  (function ifGreatLentPreparation() {
    if (![57, 56].includes(difference)) return; //the 57th and the 56th days before Resurrection correspond to the Saturday and the Sunday preceding the first day of the Great Lent (which is a Monday = Resurrection - 55 days). The readings of those 2 days are linked to the Great Lent Season.

    date = isItSundayOrWeekDay(Seasons.GreatLent, 58 - difference, 0);
  })();

  (function ifGreatLent() {
    if (difference < 1) return;//If <1 it means we are after the Great Lent Preiod (potentially during the Pentecostal days, or on the Resurrection day itself)
    if (difference > 55) return; //it means we are before the begining of the Great Lent
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
    else Season = Seasons.GreatLent;
    date = isItSundayOrWeekDay(Seasons.GreatLent, 58 - difference, weekDay);
  })();

  (function ifPentecostalPeriod() {
    if (difference >= 0) return;
    if (Math.abs(difference) > 49) return;
    // we are during the 50 Pentecostal days

    if (Math.abs(difference) === 49)
      Season = Seasons.NoSeason;
    else if (Math.abs(difference) > 38)
      Season = Seasons.Ascension;
    else Season = Seasons.PentecostalDays;

    date = isItSundayOrWeekDay(
      Seasons.PentecostalDays,
      Math.abs(difference),
      weekDay
    );
  })();


  (function ifApostlesFast() {
    if (difference > 0) return; //This means that we are before the Ressurrection Feast, and probably still during the Great Lent
    if (Math.abs(difference) < 50) return; //this means that we are still during the Pentecostal Period
    if (coptMonth < 9) return;
    if (coptMonth > 11) return;
    if (coptMonth === 11 && coptDay > 4) return; //We are on or after the Apostles Feast

    Season = Seasons.ApostlesFast;
  })();

  (function ifStMaryFast() {
    if (coptMonth !== 12) return;
    if (coptDay > 15) return;

    //We are between 01/12 and 15/12, which means that we are during St Mary's Fast
    Season = Seasons.StMaryFast;
  })();

  (function ifNayrouzOrCrossFeast() {
    if (coptMonth > 1) return;
    if (coptDay > 19) return;

    if (coptDay < 17) Season = Seasons.Nayrouz;
    else if (coptDay > 16) Season = Seasons.CrossFeast;
  })();

  (function ifNativityFast() {
    if (coptMonth !== 3) return;
    if (coptDay < 16) return;

    //We are during the Nativity Fast which starts on 16 Hatour and ends on 29 Kiahk, but we are not during the month of Kiahk. Note that Kiahk is a different Season
    Season = Seasons.NativityFast;
  })();

  (function ifEarlyKiahk() {
    if (copticDate !== "3003") return;
    if (weekDay !== 0) return;

    //If the 30th of Hatour is a Sunday, it means that there will only be 3 Sundays in the month of Kiahk between the 1st and the 28th of Kiahk (The 3 Sundays will fall respectively on the 7th, 14th and 21th of Kiahk). We hence consider that 30th of Hatour is the 1st Sunday of Kiahk
    Season = Seasons.KiahkWeek1;
    date = "04" + checkWhichSundayWeAre(7, 0);
  })();

  (function ifKiahk() {
    //!Caution this must come before isNativityParamoun() and isNativityFeast()
    if (coptMonth !== 4) return;
    if (coptDay > 27) return;//We are either in the Paramoun or during the Feast

    date = getKiahkWeek();

    function getKiahkWeek(): string {
      let sunday: string;
      if ([0, 7, 14, 21].includes(coptDay - weekDay))
        //When the 1st of Kiahk is a Monday, Kiahk will have only 3 Sundays before Kiahk 28th (i.e., on the 7th, the 14th, and the 21th of Kiahk), we will hence consider that the 30th of Hatour is the 1st Sunday of Kiahk, and will count Kiahk's Sundays from 2
        sunday = checkWhichSundayWeAre(coptDay + 7 - weekDay);

      else sunday = checkWhichSundayWeAre(coptDay - weekDay);


      Season = Kiahk[["1stSunday", "2ndSunday", "3rdSunday", "4thSunday"].indexOf(sunday)];//We set the Season accroding to the value of sunday

      if (weekDay === 0) return "04" + sunday; //!Caution: we need to return the value of Sunday (which will set the readings for this day not only the Season), because it is modified when Kiahk has only 3 Sundays. We do this for the Sundays only because the readings of the other days are not affected. It is just the Season that changes.
    }

  })();

  (function ifNativityParamoun() {
    if (coptMonth !== 4 || coptDay !== 27 || todayDate.getDate() !== 6) return; //The Nativity Feast has been fixed to January 7th which is Kiahk 28th not Kiahk 29th.  The Paramoun falls hence on Kiahk 27th

    if (todayDate.getDate() === 6 && todayDate.getHours() > 15) return; //!The Nativity Feast has been fixed to January 7th which corresponds to Kiahk 28th instead of Kiahk 29th. That's why the Paramoun will end in January 6 afternoon. In fact we use to celebrate the Mass in the late evening of January 6th

    if (copticDate === copticFeasts.NativityParamoun && todayDate.getHours() > 15) return;


    if (
      ([4, 5].includes(todayDate.getDate()) && weekDay === 5)//If January 4th or January 5th, is a Friday, it means that the Feast (i.e., January 7th) will fall either a Sunday or a Monday. In both cases, the Paramoun will start on Friday.
      ||
      (["2604", "2704"].includes(copticDate) && weekDay === 5)
      ||
      (copticDate === "2704" && weekDay === 6)

      //We are on the day before the Nativity Feast (28 Kiahk), and we are in the morning, it is the Parmoun of the Nativity
    ) {
      Season = Seasons.NativityParamoun;
      date = copticFeasts.NativityParamoun
    }

  })();

  (function ifNativityFeast() {
    if (![4, 5].includes(coptMonth)) return;
    if (coptMonth === 4 && coptDay < 29) return;
    if (coptMonth === 5 && coptDay > 5) return;
    if (Season === Seasons.NativityParamoun) return; //If the Season has been already set to NativityParamoun, it means we are on January 6th before 3PM or Kiahk 29th before 3PM

    Season = Seasons.Nativity;

  })();

  (function ifBaptismeParamoun() {
    if (coptMonth !== 5) return;
    if (coptDay < 8) return;
    if (coptDay > 10) return;
    if (copticDate === copticFeasts.BaptismParamoun &&
      todayDate.getHours() >= 15) return;

    if (
      (["0805", "0905"].includes(copticDate) && weekDay === 5)//i.e. if 08 Toubah or 09 Toubah is a Friday, it will mark the begining of the Parmoun because 11 Toubah will either be a Sunday or a Monday
      ||
      (copticDate === "0905" && weekDay === 6) //If Toubah 9th is a Saturday, it means that the Feast started on Friday 08 Toubah and continues until 10 Toubah evening
      ||
      (copticDate === copticFeasts.BaptismParamoun &&
        todayDate.getHours() < 15)
    ) {
      Season = Seasons.BaptismParamoun;
      date = copticFeasts.BaptismParamoun
    }; //The readings during all the Baptism Paramoun are those of 10 Toubah

  })();

  (function ifBaptismFeast() {
    if (coptMonth !== 5) return;
    if (coptDay > 12) return;

    if (coptDay >= 11)//i.e., from 11 to 13 Toubah 
      Season = Seasons.Baptism;

    if (copticDate === copticFeasts.BaptismParamoun &&
      todayDate.getHours() > 15) {
      //We are on the Baptism Parmoun after 3PM, we use to celebrate the Baptism Mass in the late evening
      Season = Seasons.Baptism;
      date = copticFeasts.Baptism
    }

  })();

  return date
};

/**
 * If we are  during a given priod or season (like Great Lent): if we are a Sunday, it checks which Sunday of the coptic month we are and adds it to the "period" string. Otherwise, it adds the number of days elapsed since the beginning of the period
 * @param {string} period  - the season or the period *@param {number} days  - the number of days elapsed since the beginning of a given season or period, e.g.:
 * @param {number} weekDay - the day of the week as a number (Sunday = 0)
 * @returns {string} - the period/season after adding either the Sunday or the number of days elapsed
 */
function isItSundayOrWeekDay(
  period: string,
  days: number,
  weekDay: number
): string {
  if (weekDay === 0)
    return period + checkWhichSundayWeAre(days, weekDay);  //we are a Sunday
  else return period + days.toString(); // we are not a sunday
}

/**
 * 
 * @returns {string} - If today is Sunday, Monday or Tuesday, it returns "Adam", else, it returns "Watos"
 */
function isWatosOrAdam(day: number = weekDay, season: string = Season): string {
  if ([0, 1, 2].includes(day))
    return "Adam";
  return "Watos"
}

/**
 * Determins wether we celebrate the 29th of the Coptic Month
 * @returns 
 */
function Coptic29th(): boolean {
  if (Number(copticDay) !== 29 || [4, 5, 6, 7].includes(Number(copticMonth)))
    return false;
  else return true
}

function setVariableSeasonalPhrases(season: string): { giaki } {
  type seasonalPrayers = {
    Season: string[],
    AR: string,
    CA?: string,
    FR?: string,
    EN?: string,
    COP?: string
  };
  return {
    giaki: setGiAki(season)
  }

  function setGiAki(season) {
    const giaki: seasonalPrayers[] = [
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

    function findGiAki(season: string) {
      return giaki.find(resp => resp.Season.includes(season));
    }
  }
};

/**
 * Returns the default Season according to the 3 Seasons of the Coptic year, i.e., the natural seasons not those based on fasts periods or events. Those 3 Seasons are: Rain (where the Nile is expected to flod), Crops (Where traditionnaly Egyptians started plating the fields), Harvest (Where they started harvesting)
 */
function naturalSeasons(): string {
  let daysNumber: number = Number(copticDay) + ((Number(copticMonth) - 1) * 30);
  console.log(daysNumber);
  if (daysNumber < 38 || daysNumber >= 282) {
    //We are duing the "Rain" seasons: between 12/10 and 09/02
    return Seasons.Rain;
  } else if (daysNumber >= 38 && daysNumber < 129) {
    //We are duing the "Crops" seasons: between 10/02 and 10/05
    return Seasons.Crops;
  } else if (daysNumber >= 129) {
    //We are duing the "Harvest" seasons: between 11/05 and 11/10
    return Seasons.Harvest
  }
}
/**
 * Shows the dates (Gregorian, coptic, coptic readings etc.), in an html element in the Temporary Dev Area
 */
function showDates(
  dateDiv: HTMLDivElement = document.getElementById("dateDiv") as HTMLDivElement
): HTMLDivElement {
  if (!dateDiv) {
    dateDiv = containerDiv.insertAdjacentElement(
      "beforebegin",
      document.createElement("div")
    ) as HTMLDivElement;
    dateDiv.classList.add(css.dateDiv);
    dateDiv.id = css.dateDiv;
  }
  if (!dateDiv) return;

  //Inserting the Gregorian date
  let date: string =
    ` ${{ AR: 'التاريخ', FR: 'Date', EN: 'Date' }[defaultLanguage]}:${[todayDate.getDate().toString(), (todayDate.getMonth() + 1).toString(), todayDate.getFullYear().toString()].map(el => el.padStart(2, '0')).join('/')}`;

  insertDateBox(date, "gregorianDateBox");

  //Inserting the home image after the dateBox
  if (!dateDiv.querySelector("#homeImg"))
    dateDiv.appendChild(document.getElementById("homeImg"));


  //Inserting the Coptic date
  date = `${copticDate()}\n${lecturesDate()}`

  function copticDate() {
    const label = { AR: 'التقويم القبطي', FR: 'Date Copte', EN: 'Coptic Date' }[defaultLanguage];

    return `${label} : ${copticDay} ${(copticMonths[Number(copticMonth)][defaultLanguage] || copticMonths[Number(copticMonth)]['EN'])} ${copticYear}`
  }

  function lecturesDate() {
    const label = { AR: 'قراءات  ', FR: 'Lectures du', EN: 'Readings Date' }[defaultLanguage];

    return `${label} : ${customize()}`

    function customize() {
      const order = {
        "1st": { AR: "الأول", FR: "1er", EN: "" },
        "2nd": { AR: "الثاني", FR: "2ème" },
        "3rd": { AR: "الثالث", FR: "3ème" },
        "4th": { AR: "الرابع", FR: "4ème" },
        "5th": { AR: "الخامس", FR: "5ème" },
        "6th": { AR: "السادس", FR: "6ème" },
        "7th": { AR: "السابع", FR: "7ème" },
        "8th": { AR: "الثامن", FR: "8ème" },
        "9th": { AR: "التاسع", FR: "9ème" },
        "10th": { AR: "العاشر", FR: "10ème" }
      };
      const lable = ifSunday({ AR: 'اليوم الـ', FR: '', EN: '' }[defaultLanguage]);
      const GL = ifSunday({ AR: 'من الصوم الكبير ', FR: 'ème jour du Grand Carême', EN: 'day of the Great Lent' }[defaultLanguage]);
      const Jonah = ifSunday({ AR: 'من صوم يونان ', FR: 'ème jour du jeune de Jonas', EN: 'day of Jonah Fast' }[defaultLanguage]);
      const Pntl = ifSunday({ AR: 'من الخمسين المقدسة ', FR: 'ème jour des 50 jours de Pentecotes', EN: 'day of the 50 Pentecostal days' }[defaultLanguage]);

      function ifSunday(label: string) {
        if (!copticReadingsDate.endsWith('Sunday')) return label;
        let sunday = copticReadingsDate;

        if (RegExp(/\d{2}/).test(sunday))
          sunday.slice(2, sunday.length);//We remove the first 2 digits

        sunday = sunday.replace(Season, '').replace('Sunday', '');//We hould get "1st", "2nd", "3rd", etc.

        return label
          .replace('ème jour', `${order[sunday].FR} dimanche`)
          .replace('day', `${sunday} Sunday`)
          .replace('اليوم الـ', `الأحد ${order[sunday].AR}`)
      }

      if (Season === Seasons.GreatLent)
        return ifSeason(GL);
      else if ([Seasons.PentecostalDays, Seasons.Ascension].includes(Season))
        return ifSeason(Pntl);
      else if (Season === Seasons.JonahFast)
        return ifSeason(Jonah);
      else if (RegExp(/\d{2}.*Sunday/).test(copticReadingsDate))//If it starts with 2 digits and contains Sunday like "032ndSunday"
        return `${copticMonths[Number(copticMonth)][defaultLanguage]} ${copticReadingsDate
          .slice(2, copticReadingsDate.length)
          .replace("Sunday", '')} Sunday`;
      else if (copticMonths[Number(copticMonth)])
        return `${copticDay} ${copticMonths[Number(copticMonth)][defaultLanguage]}`;
      else return "";

      function ifSeason(end: string) {
        if (weekDay === 0)
          return `${lable} ${end}`;
        else return `${lable} ${copticReadingsDate.split(Season)[1]} ${end}`;
      }
    };
  }

  insertDateBox(date, "copticDateBox");

  function insertDateBox(date: string, id: string) {
    let dateBox: HTMLDivElement = document.getElementById(id) as HTMLDivElement;
    //Inserting a date box
    if (!dateBox) {
      dateBox = dateDiv.appendChild(document.createElement("div"));
      dateBox.id = id;
      dateBox.style.display = "block !important";

      dateBox.classList.add(css.dateBox);
    }
    dateBox.innerHTML = ""; //we empty the div
    let p = dateBox.appendChild(document.createElement("p"));
    p.innerText = date;
    if (defaultLanguage === 'AR')
      p.style.direction = 'rtl';
  }

  (function insertCredentials() {
    let credentialsDiv: HTMLElement = document.getElementById('credentialsDiv');
    if (!credentialsDiv) {
      //Inserting a creditials Div after containerDiv
      credentialsDiv = containerDiv.insertAdjacentElement(
        "afterend",
        document.createElement("div")
      ) as HTMLElement;
      credentialsDiv.classList.add(css.credentialsContainer);
      credentialsDiv.id = css.credentialsContainer;
      credentialsDiv.style.padding = "3px 20px";
    };

    credentialsDiv.innerText = `Today: ${todayDate.toString()}\nSeason= ${Season}\nVersion = ${version || localStorage.version}\nWe ${isFast ? "are " : "are not"} during a fast period or on a fast day (Wednesday or Friday`;
  })()

  return dateDiv;
}

/**
 * Changes the current Gregorian date and adjusts the coptic date and the coptic readings date, etc.
 * @param {string} date  - allows the user to pass the Greogrian calendar day to which he wants the date to be set, as a string provided from an input box or by the date picker
 * @param {boolean} next  - used when the user wants to jumb forward or back by only one day
 * @param {number} days  - the number of days by which the user wants to jumb forward or back
 * @returns {Date} - the Gregorian date as set by the user
 */
async function changeDate(
  date?: Date,
  next: boolean = true,
  days: number = 1,
  showAlert: boolean = true
): Promise<Date> {
  if (date) {
    if (!todayDate || checkIfDateIsToday(date)) todayDate = new Date();//If todayDate is not set, or if the "date" argument is today, we set todayDate = today (i.e., newDate())
    else todayDate.setTime(new Date(date).getTime());//If todayDate is set, and the date passed as argument is not today, we set todayDate to the "date" argument
  } else {
    if (next) {
      todayDate.setTime(todayDate.getTime() + days * calendarDay); //advancing the date by the number of calendar years
    } else if (!next) {
      todayDate.setTime(todayDate.getTime() - days * calendarDay);
    }
  }
  await setCopticDates(todayDate, true);

  if (checkIfDateIsToday(todayDate)) {
    localStorage.removeItem("selectedDate");
  } else {
    //If todayDate is not equal to the date of today (not same day and same month and same year), we store the manually selected date in the local storage
    localStorage.selectedDate = todayDate.getTime().toString();
  }
  console.log(todayDate);
  if (showAlert)
    alert(
      "Date was successfully changed to " +
      todayDate.getDate().toString() +
      "/" +
      (todayDate.getMonth() + 1).toString() +
      "/" +
      todayDate.getFullYear().toString() +
      " which corresponds to " +
      copticDate +
      " of the coptic calendar "
    );
  displayChildButtonsOrPrayers(Btn.MainMenu); //We return to the main page menu because in some cases when the date changes, the buttons/prayers availabe are not the same according to the Season
  return todayDate;
}

/**
 * Checks whether the date passed to it is today
 * @param {Date} storedDate  - The date which we want to check if it corresponds to today
 * @returns {boolean} - returns true if storedDate is same as today
 */
function checkIfDateIsToday(date: Date): boolean {
  if (!date
    ||
    (
      date?.getDate() === new Date().getDate()
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
function getCopticReadingsDates(): string[][] {
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

function testDateFunction(date: Date = new Date("2020.12.31")) {
  addConsoleSaveMethod(console);

  setCopticDates(date);
  let text: string = "";
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
  let unique: Set<string> = new Set();
  let dates: string[][] = [];
  copticReadingsDates.forEach((dateArray) => {
    if (unique.has(dateArray[1])) return;
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
