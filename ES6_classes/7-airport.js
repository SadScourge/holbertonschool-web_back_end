export default class Airport {
  constructor(name, code) {
    this._name = this._validateString(name);
    this._code = this._validateString(code);
  }

  _validateString(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Value must be a string');
    }
    return value;
  }

  toString() {
    return `[object ${this._code}]`;
  }
}
