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
    const real = (this._real * value.real + this._imag * value.imag) / (value.real**2 + value.imag**2);
    const imag = (this._imag * value.real - this._real * value.imag) / (value.real**2 + value.imag**2);
    return new ComplexNumber(real, imag);
  }

  mul(value) {
    const real = this._real * value.real - this._imag * value.imag;
    const imag = this._imag * value.real + this._real * value.imag;
    return new ComplexNumber(real, imag);
  }

  get abs() {
    return Math.sqrt(this._real**2 + this._imag**2);
  }

  get conj() {
    const imag = this._imag !== 0 ? -this._imag : 0;
    return new ComplexNumber(this._real, imag);
  }

  get exp() {
    const a = new ComplexNumber(Math.E ** this._real, 0);
    const b = new ComplexNumber(Math.cos(this._imag), Math.sin(this._imag));
    return a.mul(b);
  }
}
