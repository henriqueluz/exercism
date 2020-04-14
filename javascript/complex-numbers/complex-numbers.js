//
// This is only a SKELETON file for the 'Complex Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class ComplexNumber {
  constructor(a, b) {
    this._real = a;
    this._imag = b;
  }

  get real() {
    return this._real;
  }

  get imag() {
    return this._imag;
  }

  add(value) {
    this._real += value.real;
    this._imag += value.imag;
    return this;
  }

  sub(value) {
    this._real -= value.real;
    this._imag -= value.imag;
    return this;
  }

  div(value) {
    throw new Error("Remove this statement and implement this function");
  }

  mul(value) {
    throw new Error("Remove this statement and implement this function");
  }

  abs() {
    throw new Error("Remove this statement and implement this function");
  }

  conj() {
    throw new Error("Remove this statement and implement this function");
  }

  exp() {
    throw new Error("Remove this statement and implement this function");
  }
}
