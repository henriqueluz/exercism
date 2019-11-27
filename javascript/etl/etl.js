//
// This is only a SKELETON file for the 'etl' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transform = scores => {
  const onePoint = scores[1];
  const sym = onePoint[0].toLowerCase();
  const result = {};
  result[sym] = 1;
  return result;
};
