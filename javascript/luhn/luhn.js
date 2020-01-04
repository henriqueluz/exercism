//
// This is only a SKELETON file for the 'Luhn' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const valid = (input) => {
  if (input.length <= 1) return false;
  
  const numbers = input.replace(" ", "").split("").reverse();

  numbers.forEach( (number, i) => {
    numbers[i] = parseInt(number);
    if (i % 2 != 0) {
      const newNumber = number * 2;
      if (newNumber > 9) {
        numbers[i] = newNumber - 9;
      }
    }
  });

  const value = numbers.reduce((acc, val) => acc + parseInt(val));

  return value % 10 == 0;
};
