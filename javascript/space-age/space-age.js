//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const EARTH_RATE = 31557600;
const PLANET_AGES = {
  'earth' : EARTH_RATE,
  'mercury' : 0.2408467 * EARTH_RATE,
  'venus' : 0.61519726 * EARTH_RATE,
  'mars' : 1.8808158 * EARTH_RATE,
  'jupiter' : 11.862615 * EARTH_RATE
};

export const age = (planet, timeInSecs) => {
  const age = timeInSecs / PLANET_AGES[planet];
  return Number(age.toFixed(2));
};
