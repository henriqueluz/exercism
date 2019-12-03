//
// This is only a SKELETON file for the 'Scrabble Score' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const PONTUATION = {
    'a' : 1,
    'f' : 4
};

export const score = (input) => {
  return PONTUATION[input.toLowerCase()];
};
