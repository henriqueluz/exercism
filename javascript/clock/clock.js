//
// This is only a SKELETON file for the 'Clock' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const MIDNIGHT_HOUR = 24;

const rollOverHour = (hour) => {
  const rolledHour = hour > MIDNIGHT_HOUR ? hour % MIDNIGHT_HOUR : hour;
  return rolledHour === MIDNIGHT_HOUR ? 0 : rolledHour;
}

export class Clock {
  constructor(hour, minutes = 0) {
    this.hour = rollOverHour(hour);
    this.minutes = minutes;
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

}
