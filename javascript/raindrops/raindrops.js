//
// This is only a SKELETON file for the 'Raindrops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const RAINDROPS = {
  3 : 'Pling',
  5 : 'Plang',
  7 : 'Plong'
};

const isFactor = (n, v) => {
  return n % v === 0;
}

export const convert = (n) => {
  const raindrops = Object.keys(RAINDROPS).map(k => {
    if (isFactor(n, k)) return RAINDROPS[k];
    else return null;
  }).join('');

  return raindrops || `${n}`;
};
