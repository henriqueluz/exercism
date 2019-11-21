//
// This is only a SKELETON file for the 'Clock' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const MIDNIGHT_HOUR = 24;
const MINUTES_IN_A_HOUR = 60;

export class Clock {
  constructor(hour, minutes = 0) {
    this.hour = this.rollOverHour(hour);
    this.minutes = this.rollOverMinutes(minutes);
  }

  toString() {
    const padMinutes = this.minutes.toString().padStart(2, '0');
    const padHour = this.hour.toString().padStart(2, '0');
    return `${padHour}:${padMinutes}`;
  }

  plus() {
  }

  minus() {
    throw new Error('Remove this statement and implement this function');
  }

  equals() {
    throw new Error('Remove this statement and implement this function');
  }

 rollOverHour(hour) {
    const rolledHour = hour > MIDNIGHT_HOUR ? hour % MIDNIGHT_HOUR : hour;
    return rolledHour === MIDNIGHT_HOUR ? 0 : rolledHour;
  }

 rollOverMinutes(minutes) {
    if (minutes >= MINUTES_IN_A_HOUR) {
      const extraHour = Math.floor(minutes / MINUTES_IN_A_HOUR);
      this.hour = this.rollOverHour(this.hour + extraHour);
      return minutes % MINUTES_IN_A_HOUR;
    }

    return minutes;
  }

}
