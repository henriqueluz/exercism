//
// This is only a SKELETON file for the 'Matching Brackets' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const matches = {
  ']' : '[',
  '}' : '{',
  ')' : '('
};

export const isPaired = (expression) => {
  const brackets = expression.replace(' ','')
                             .split('')
                             .filter(e => e.match(/[{}\(\)\[\]]/g));

  if (brackets.length % 2 !== 0) {
    return false;
  }

  let stack = [];
  let isPaired = true;
  brackets.forEach(bracket => {
    if (bracket.match(/[{\(\[]/g)) {
      stack.push(bracket);
    } else {
      const symbol = stack.pop();
      if (symbol !== matches[bracket]) {
        isPaired = false;
        return;
      }
    }
  });

  return isPaired && stack.length === 0;
};
