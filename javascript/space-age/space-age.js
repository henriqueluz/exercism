//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const EARTH_RATE_IN_SECS = 31557600;
const PLANET_AGES = {
  'earth' : 1,
  'mercury' : 0.2408467,
  'venus' : 0.61519726,
  'mars' : 1.8808158,
  'jupiter' : 11.862615,
  'saturn' : 29.447498,
  'uranus' : 84.016846,
  'neptune' : 164.7913
};

export const age = (planet, timeInSecs) => {
  const planetAgesInSecs = PLANET_AGES[planet] * EARTH_RATE_IN_SECS;
  const age = timeInSecs / planetAgesInSecs;
  return Number(age.toFixed(2));
};
