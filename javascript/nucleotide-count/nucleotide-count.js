//
// This is only a SKELETON file for the 'Nucleotide-Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const NUCLEOTIDES = ['A', 'C', 'G', 'T'];

const raiseIfStrandHasInvalidNucleotides = strand => {
  [...strand].forEach(s => {
    if (!NUCLEOTIDES.includes(s)) throw new Error('Invalid nucleotide in strand');
  });
};

export class NucleotideCounts {
  static parse(strand) {
    raiseIfStrandHasInvalidNucleotides(strand);
    return NUCLEOTIDES.map(n => (strand.match(new RegExp(n, "g")) || []).length)
                      .join(" ");
  }
}
