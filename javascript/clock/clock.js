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

  plus(minutes) {
    this.minutes = this.rollOverMinutes(this.minutes + minutes);
    return this;
  }

  minus() {
    throw new Error('Remove this statement and implement this function');
  }

  equals(clock) {
    return this.toString() === clock.toString();
  }

 rollOverHour(hour) {
    const absoluteHour = Math.abs(hour);
    const extraHour = absoluteHour > MIDNIGHT_HOUR ? absoluteHour % MIDNIGHT_HOUR : absoluteHour;
    const rolledHour = extraHour === MIDNIGHT_HOUR ? 0 : extraHour;

    return hour < 0 ? MIDNIGHT_HOUR - rolledHour : rolledHour;
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
