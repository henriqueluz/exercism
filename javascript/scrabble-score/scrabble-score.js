//
// This is only a SKELETON file for the 'Scrabble Score' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const SCORES = {
    'a' : 1,
    't' : 1,
    'd' : 2,
    'b' : 3,
    'f' : 4,
    'k' : 5,
    'j' : 8,
    'q' : 10
};

export const score = (input) => {
  const letters = [...input];
  return letters.map(letter => SCORES[letter.toLowerCase()])
                .reduce((acc, score) => acc + score);
};
