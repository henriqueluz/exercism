//
// This is only a SKELETON file for the 'Raindrops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const RAINDROPS = {
  3 : 'Pling',
  5 : 'Plang',
  7 : 'Plong'
};

export const convert = (n) => {
  return RAINDROPS[n] || n.toString();
};
