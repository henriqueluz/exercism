//
// This is only a SKELETON file for the 'Allergies' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const ALLERGIES = {
  'eggs' : 1
};
export class Allergies {
  constructor(score) {
    this.score = score;
  }

  list() {
    throw new Error("Remove this statement and implement this function");
  }

  allergicTo(item) {
    const itemScore = ALLERGIES[item];
    return this.score === itemScore;
  }
}
