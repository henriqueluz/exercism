//
// This is only a SKELETON file for the 'Word Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const countWords = (text) => {
  const tokens = text.toLowerCase()
                      .replace(/[.:@$%^&!?\\-]/g, "")
                      .replace(/,/g, " ")
                      .replace(/\n/g, "")
                      .replace(/\'\w+\'/g, x => x.replace(/'/g, ""))
                      .trim()
                      .split(/\s+/);
  const occurrences = [...tokens].reduce((e, i) => {
    e[i] = e[i] ? e[i] + 1 : 1;
    return e;
  }, {});

  return occurrences;
};
