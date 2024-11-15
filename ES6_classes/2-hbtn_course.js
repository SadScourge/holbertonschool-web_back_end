export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = this._validateString(name);
    this._length = this._validateNumber(length);
    this._students = this._validateArray(students);
  }

  _validateString(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    return value;
  }

  _validateNumber(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number');
    }
    return value;
  }

  _validateArray(value) {
    if (!Array.isArray(value) || !value.every((item) => typeof item === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    return value;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = this._validateString(value);
  }

  get length() {
    return this._length;
  }

  set length(value) {
    this._length = this._validateNumber(value);
  }

  get students() {
    return this._students;
  }

  set students(value) {
    this._students = this._validateArray(value);
  }
}
