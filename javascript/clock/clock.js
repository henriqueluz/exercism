//
// This is only a SKELETON file for the 'Clock' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Clock {
  constructor(hour, minutes = 0) {
    this.hour = hour;
    this.minutes = minutes;
  }

  toString() {
    const padMinutes = this.minutes.toString().padStart(2, '0');
    const padHour = this.hour.toString().padStart(2, '0');
    return `${padHour}:${padMinutes}`;
  }

  plus() {
    throw new Error('Remove this statement and implement this function');
  }

  minus() {
    throw new Error('Remove this statement and implement this function');
  }

  equals() {
    throw new Error('Remove this statement and implement this function');
  }
}
