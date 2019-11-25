//
// This is only a SKELETON file for the 'Meetup' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const DAYS_IN_A_WEEK = 7;

const WEEK_OF_MONTH = {
  '1st' : 0,
  '2nd' : 1,
  '3rd' : 2,
  '4th' : 3,
  '5th' : 4
};

const WEEKDAYS = {
  'Sunday' : 0,
  'Monday' : 1,
  'Tuesday' : 2,
  'Wednesday' : 3,
  'Thursday' : 4,
  'Friday' : 5,
  'Saturday' : 6,
};

const buildMonthCalendar = (lastDayOfMonth, firstWeekDay) => {
  let monthCalendar = [[], [], [], [], []];
  let dayOfWeek = firstWeekDay;
  let currentWeek = 0;

  for (var day = 1; day <= lastDayOfMonth; day++) {
    monthCalendar[currentWeek].push({ "day" : day, "dayOfWeek" : dayOfWeek });
    dayOfWeek++;

    if ( dayOfWeek % DAYS_IN_A_WEEK === 0) {
      dayOfWeek = 0;
    }

    if ( day % DAYS_IN_A_WEEK === 0 ) {
      currentWeek++;
    }
  }

  return monthCalendar;
}

const findDay = (calendar, weekday, descriptor) => {
  const lastWeeks = calendar.slice(3).flat();
  const teenthWeek = calendar.slice(1, 3).flat();
  const weekOfMonth = calendar[WEEK_OF_MONTH[descriptor]];
  const findDay = week => week["dayOfWeek"] === WEEKDAYS[weekday]

  switch (descriptor) {
    case 'last' :
      return lastWeeks.reverse().find(findDay);
    case 'teenth' :
      const findTeenthDay = week => week["dayOfWeek"] === WEEKDAYS[weekday] &&
                                      week["day"] > 12 &&
                                      week["day"] < 20;
      return teenthWeek.find(findTeenthDay);
    default:
      return weekOfMonth.find(findDay);
  }
}

const lookupCalendar = (calendar, weekday, descriptor) => {
  const meetupDay = findDay(calendar, weekday, descriptor);
  return meetupDay["day"];
}

const raiseIfDayDoesNotExist = (day) => {
  if (day === undefined) throw "Nonexistent day.";
}

export const meetupDay = (year, month, weekday, descriptor) =>  {
  const firstDayOfMonth = new Date(year, month, 1);
  const lastDateOfMonth = new Date(year, month + 1, 0);
  const lastDayOfMonth = lastDateOfMonth.getDate();
  const firstWeekDay = firstDayOfMonth.getDay();
  const calendar = buildMonthCalendar(lastDayOfMonth, firstWeekDay);
  const meetupDay = lookupCalendar(calendar, weekday, descriptor);
  raiseIfDayDoesNotExist(meetupDay);

  return new Date(year, month, meetupDay);
}
