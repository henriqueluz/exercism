//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(a, b, c) {
      this.a = a;
      this.b = b;
      this.c = c;
  }

  isNotValid() {
    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      return true;
    } else if (this.a + this.b < this.c ||
               this.b + this.c < this.a ||
               this.a + this.c < this.b) {
      return true;
    }
    return false;
  }

  kind() {
    if (this.isNotValid()) {
      throw "Invalid triangle.";
    }

    if (this.a === this.b && this.b === this.c) {
      return "equilateral";
    } else if (this.a === this.b || this.b === this.c || this.a === this.c) {
      return "isosceles";
    }
    return "scalene";
  }

}
