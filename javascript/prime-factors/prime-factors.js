//
// This is only a SKELETON file for the 'Prime Factors' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const primeFactors = number => {
  const factors = [];
  let result = number;
  let i = 2
  while (result > 1) {
    if (result % i == 0) {
      result /= i;
      factors.push(i);
    } else {
      i++;
    }
  }

  return factors;
};
