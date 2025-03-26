const fs = require('fs');
const path = require('path');

class Driver {
    constructor(filePath) {
        this.filePath = path.resolve(filePath);
        this.data = {};
        this._load();
    }

    _load() {
        if (fs.existsSync(this.filePath)) {
            try {
                this.data = JSON.parse(fs.readFileSync(this.filePath, 'utf8'));
            } catch (error) {
                console.error('Failed to load JSON database:', error);
            }
        }
    }

    _save() {
        fs.writeFileSync(this.filePath, JSON.stringify(this.data, null, 2));
    }

    set(key, value) {
        this.data[key] = value;
        this._save();
    }

    get(key) {
        return this.data[key] || null;
    }

    delete(key) {
        delete this.data[key];
        this._save();
    }

    has(key) {
        return Object.prototype.hasOwnProperty.call(this.data, key);
    }

    push(key, value) {
        if (!Array.isArray(this.data[key])) {
            this.data[key] = [];
        }
        this.data[key].push(value);
        this._save();
    }
}

class Data {
    constructor({ driver }) {
        if (!(driver instanceof Driver)) {
            throw new Error('Invalid driver instance');
        }
        this.driver = driver;
    }

    set(key, value) {
        return this.driver.set(key, value);
    }

    get(key) {
        return this.driver.get(key);
    }

    delete(key) {
        return this.driver.delete(key);
    }

    has(key) {
        return this.driver.has(key);
    }

    push(key, value) {
        return this.driver.push(key, value);
    }
}

module.exports = { Data, Driver };
// Developer : Dark Dev