//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const TRANSCRIPTION = { 'A' : 'U', 'C' : 'G', 'G' : 'C', 'T' : 'A' };

export const toRna = (nucleotides) => {
  return nucleotides.split('').map(n => TRANSCRIPTION[n]).join('');
};
