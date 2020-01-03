//
// This is only a SKELETON file for the 'Word Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const countWords = (text) => {
  const tokens = text.toLowerCase()
                      .replace(/[.:@$%^&!?\\-]/g, "")
                      .replace(/,/g, " ")
                      .replace(/\n/g, "")
                      .split(" ");
  const occurrences = {};

  tokens.forEach(token => {
    if (occurrences[token] === undefined) {
      occurrences[token] = 1;
    } else {
      occurrences[token] += 1;
    }
  });

  delete occurrences[""];

  return occurrences;
};
