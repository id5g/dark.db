# Dark.DB

A simple JSON-based database package for Node.js, designed to provide easy key-value storage with automatic file persistence.

## Installation

```sh
npm install @darkkdev/dark.db
```

## Usage

### Import and Initialize

```javascript
const { Data, Driver } = require('@darkkdev/dark.db');

const db = new Data({ driver: new Driver('database.json') });
```

### Methods

#### `set(key, value)`
Stores a value in the database.
```javascript
db.set('username', 'Dark Dev');
```

#### `get(key)`
Retrieves a value from the database.
```javascript
console.log(db.get('username')); // Output: Dark Dev
```

#### `delete(key)`
Deletes a key from the database.
```javascript
db.delete('username');
```

#### `has(key)`
Checks if a key exists.
```javascript
console.log(db.has('username')); // Output: false
```

#### `push(key, value)`
Pushes a value into an array stored at the key.
```javascript
db.push('users', 'user1');
console.log(db.get('users')); // Output: ['user1']
```

## License
This project is licensed under the MIT License.

## Developer 
**Github :** [**Click Here**](https://github.com/id5g)
**Website :** [**Click Here**](https://dark-dev.netlify.app)

## Source
**Github :** [**Click Here**](https://github.com/id5g/dark.db)
