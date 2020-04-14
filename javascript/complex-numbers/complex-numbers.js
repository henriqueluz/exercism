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
    const real = this._real + value.real;
    const imag = this._imag + value.imag;
    return new ComplexNumber(real, imag);
  }

  sub(value) {
    const real = this._real - value.real;
    const imag = this._imag - value.imag;
    return new ComplexNumber(real, imag);
  }

  div(value) {
    throw new Error("Remove this statement and implement this function");
  }

  mul(value) {
    const real = this._real * value.real - this._imag * value.imag;
    const imag = this._imag * value.real + this._real * value.imag;
    return new ComplexNumber(real, imag);
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
