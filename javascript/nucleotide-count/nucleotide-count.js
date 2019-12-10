//
// This is only a SKELETON file for the 'Nucleotide-Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class NucleotideCounts {
  static parse(strand) {
    return ['A', 'C', 'G', 'T'].map(n => (strand.match(new RegExp(n, "g")) || []).length)
                               .join(" ");
  }
}
