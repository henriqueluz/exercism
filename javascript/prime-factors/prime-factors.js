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
  const primes = [];

  for (let i = 2; i <= number; i++) {
    if (isPrime(i)) primes.push(i);
  }

  const factors = [];
  let result = number;
  let i = 0;

  while (result > 1) {
    const prime = primes[i];
    if (result % prime == 0) {
      result = result / prime;
      factors.push(prime);
    } else {
      i++;
    }
  }

  return factors;
};
