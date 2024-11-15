export default class HolbertonClass {
    constructor(size, location) {
        this._size = this._validateNumber(size);
        this._location = this._validateString(location);
    }

    _validateNumber(value) {
        if (typeof value !== 'number') {
            throw new TypeError('Size must be a number');
        }
        return value;
    }

    _validateString(value) {
        if (typeof value !== 'string') {
            throw new TypeError('Location must be a string');
        }
        return value;
    }
    
    valueOf() {
        return this._size;
    }

    toString() {
        return this._location;
    }
}