//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  constructor(elements) {
    const rows = elements.split('\n');
    this._rows = rows.map(row => row.split(' ').map(e => parseInt(e)));
    this._columns = [[]];
  }

  get rows() {
    return this._rows;
  }

  get columns() {
    return this._columns;
  }
}
