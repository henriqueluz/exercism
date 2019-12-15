//
// This is only a SKELETON file for the 'Prime Factors' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const isPrime = n => {
  if (n > 1) {
    for (let i = 2; i < n; i++) {
      if (n % i === 0) return false;
    }
    return true;
  }
  return false;
};

export const primeFactors = number => {
  const factors = [];
  let result = number;
  let i = 2

  while (result > 1) {
    if (isPrime(i) && result % i == 0) {
      result = result / i;
      factors.push(i);
    } else {
      i++;
    }
  }

  return factors;
};
