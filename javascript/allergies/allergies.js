//
// This is only a SKELETON file for the 'Allergies' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const ALLERGIES = {
  'eggs' : 1,
  'peanuts' : 2,
  'sellfish' : 4,
  'strawberries' : 8,
  'tomatoes' : 16,
  'chocolate' : 32,
  'pollen' : 64,
  'cats' : 128,
};

export class Allergies {
  constructor(score) {
    this.filtered = Object.keys(ALLERGIES).filter(k => ALLERGIES[k] <= score);
  }

  list() {
    throw new Error("Remove this statement and implement this function");
  }

  allergicTo(item) {
    return this.filtered.includes(item);
  }
}
