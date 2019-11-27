//
// This is only a SKELETON file for the 'etl' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transform = scores => {
  const points = Object.keys(scores);
  const result = {};

  points.forEach(point => {
    const letters = scores[point];
    letters.forEach(letter => {
      result[letter.toLowerCase()] = parseInt(point);
    });
  });

  return result;
};
