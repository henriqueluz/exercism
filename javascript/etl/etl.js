//
// This is only a SKELETON file for the 'etl' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transform = scores => {
  const points = Object.keys(scores);
  const onePoint = points[0];
  const sym = scores[onePoint][0].toLowerCase();
  const result = {};
  result[sym] = parseInt(onePoint);
  return result;
};
