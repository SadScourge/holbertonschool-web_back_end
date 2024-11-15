export default class Currency {
    constructor(code, name) {
        this._code = this._validateString(code);
        this._name = this._validateString(name);
    }

    _validateString(value) {
        if (typeof value !== 'string') {
            throw new TypeError('Value must be a string');
        }
        return value;
    }

    get code() {
        return this._code;
    }

    set code(value) {
        this._code = this._validateString(value);
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = this._validateString(value);
    }

    displayFullCurrency() {
        return `${this._name} (${this._code})`;
    }
}