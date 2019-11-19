//
// This is only a SKELETON file for the 'Collatz Conjecture' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const raiseIfNumberIsNotPositive = (n) => {
  if (n <= 0) {
    throw new Error("Only positive numbers are allowed");
  }
}

const collatz = (n) => {
  return n % 2 == 0 ? n / 2 : 3 * n + 1;
}

export const steps = (n) => {
  raiseIfNumberIsNotPositive(n);

  let steps = 0;
  while (n != 1) {
    n = collatz(n);
    steps += 1;
  }

  return steps;
};
