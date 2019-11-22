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

export const meetupDay = (year, month, weekday, descriptor) =>  {
  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, month + 1, 0);
  const givenDay = lastDayOfMonth.getDate();

  let monthDays = [[], [], [], [], []];
  let dayOfWeek = firstDayOfMonth.getDay();
  let givenWeek = 0;

  for (var day = 1; day <= givenDay; day++) {
    monthDays[givenWeek].push({ "day" : day, "dayOfWeek" : dayOfWeek });
    dayOfWeek++;

    if ( dayOfWeek % DAYS_IN_A_WEEK === 0) {
      dayOfWeek = 0;
    }

    if ( day % DAYS_IN_A_WEEK === 0 ) {
      givenWeek++;
    }

  }

  const weekOfMonth = monthDays[WEEK_OF_MONTH[descriptor]];
  const meetupDay = weekOfMonth.find(week => week["dayOfWeek"] === WEEKDAYS[weekday]);

  return new Date(year, month, meetupDay["day"]);
}
