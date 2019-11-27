//
// This is only a SKELETON file for the 'etl' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transform = scores => {
  const points = Object.keys(scores);
  const transformation = {};

  points.forEach(point => {
    const letters = scores[point];
    letters.forEach(letter => {
      transformation[letter.toLowerCase()] = parseInt(point);
    });
  });

  return transformation;
};
