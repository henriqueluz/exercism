//
// This is only a SKELETON file for the 'Prime Factors' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const isPrime = n => {
  if (n === 2) return true;

  if (n > 1) {
    for (let i = 2; i < n; i++) {
      if (n % i == 0) return false;
    }
  }
  return false;
};

export const primeFactors = number => {
  const factors = [];
  for (let i = 2; i <= number; i++) {
    if (isPrime(i)) factors.push(i);
  }

  return factors;
};
