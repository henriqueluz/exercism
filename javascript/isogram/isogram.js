//
// This is only a SKELETON file for the 'Isogram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isIsogram = (word) => {
  const lettersCount = [...word.replace(/[\s-]/g, '').toLowerCase()].reduce((e, i) => {
    e[i] = e[i] ? e[i] + 1 : 1;
    return e;
  }, {});

  return Object.values(lettersCount).every(v => v == 1);
};
