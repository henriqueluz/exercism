//
// This is only a SKELETON file for the 'Hamming' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const raiseIfSizesAreDifferent = (strand, otherStrand) => {
  if (strand !== otherStrand) {
    raiseIfStrandIsEmpty("left", strand);
    raiseIfStrandIsEmpty("right", otherStrand);
  }

  if (strand.length !== otherStrand.length) {
      throw new Error('left and right strands must be of equal length');
  }
};

const raiseIfStrandIsEmpty = (strand, sequence) => {
  if (sequence === '')
    throw new Error(`${strand} strand must not be empty`);
}

export const compute = (left, right) => {
  raiseIfSizesAreDifferent(left, right);
  const strand = [];
  const rightStrand = [...right].reverse();

  [...left].forEach(letter => {
    if (letter !== rightStrand.pop()) {
      strand.push(letter);
    }
  });

  return strand.length;
};
