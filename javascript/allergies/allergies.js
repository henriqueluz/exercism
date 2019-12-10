//
// This is only a SKELETON file for the 'Allergies' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const ALLERGIES = {
  'eggs' : 1,
  'peanuts' : 2,
  'shellfish' : 4,
  'strawberries' : 8,
  'tomatoes' : 16,
  'chocolate' : 32,
  'pollen' : 64,
  'cats' : 128,
};

const MAX_SCORE = 256;

export class Allergies {
  constructor(score) {
    this.filtered = Object.keys(ALLERGIES).reverse().filter(k => ALLERGIES[k] <= score);
    this.allergies = [];
    let remainingScore = score >= MAX_SCORE ? score % MAX_SCORE : score;

    this.filtered.forEach(allergy => {
      if (remainingScore >= ALLERGIES[allergy]) {
        this.allergies.push(allergy);
        remainingScore = remainingScore - ALLERGIES[allergy];
      }
    });
  }

  list() {
    return this.allergies.reverse();
  }

  allergicTo(item) {
    return this.allergies.includes(item);
  }
}
