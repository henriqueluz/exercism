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
    const padHour = this.hour.toString().padStart(2, '0').replace('24', '00');
    return `${padHour}:${padMinutes}`;
  }

  plus(minutes) {
    this.minutes = this.rollOverMinutes(this.minutes + minutes);
    return this;
  }

  minus(minutes) {
    const absoluteMinutes = Math.abs(minutes);
    this.minutes = this.rollOverMinutes(this.minutes - absoluteMinutes);
    return this;
  }

  equals(clock) {
    return this.toString() === clock.toString();
  }

  rollOverHour(hour) {
    const absoluteHour = Math.abs(hour);
    const extraHour = absoluteHour > MIDNIGHT_HOUR ? absoluteHour % MIDNIGHT_HOUR : absoluteHour;

    return hour < 0 ? MIDNIGHT_HOUR - extraHour : extraHour;
  }

  rollOverMinutes(minutes) {
    const absoluteMinutes = this.getAbsoluteMinutes(minutes);
    return minutes < 0 ? MINUTES_IN_A_HOUR - absoluteMinutes : absoluteMinutes;
  }

  getAbsoluteMinutes(minutes) {
    const absoluteMinutes = Math.abs(minutes);
    if (absoluteMinutes >= MINUTES_IN_A_HOUR || minutes < 0) {
      const extraHour = minutes > 0 ?
                          Math.floor(minutes / MINUTES_IN_A_HOUR) :
                          Math.ceil(minutes / MINUTES_IN_A_HOUR) - 1;
      this.hour = this.rollOverHour(this.hour + extraHour);
      return absoluteMinutes % MINUTES_IN_A_HOUR;
    }

    return absoluteMinutes;
  }

}
