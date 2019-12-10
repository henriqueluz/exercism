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

const mapAllergies = function(allergy) {
  if (this.score >= ALLERGIES[allergy]) {
    this.score -= ALLERGIES[allergy];
    return allergy;
  }
};

export class Allergies {
  constructor(score) {
    const items = Object.keys(ALLERGIES).reverse();
    const normalizedScore = score >= MAX_SCORE ? score % MAX_SCORE : score;
    this.allergies = items.map(mapAllergies, { score: normalizedScore })
                             .filter(v => v != undefined);
  }

  list() {
    return this.allergies.reverse();
  }

  allergicTo(item) {
    return this.allergies.includes(item);
  }
}
