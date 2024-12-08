### JavaScript Destructuring Assignment

Destructuring assignment is a convenient way of extracting multiple values from arrays or objects and assigning them to variables in a single statement.

## Destructuring Arrays

With array destructuring, we can unpack values from an array into distinct variables.

#### Basic Syntax

```javascript
const array = [1, 2, 3, 4];

const [first, second] = array;

console.log(first); // 1
console.log(second); // 2
```

#### Skipping Values

```javascript
const array = [1, 2, 3, 4];

const [first, , third] = array;

console.log(first); // 1
console.log(third); // 3
```

#### Default Values

```javascript
const array = [1, 2];

const [first, second, third = 3] = array;

console.log(first); // 1
console.log(second); // 2
console.log(third); // 3
```

#### Rest Operator

```javascript
const array = [1, 2, 3, 4];

const [first, ...rest] = array;

console.log(first); // 1
console.log(rest); // [2, 3, 4]
```

## Destructuring Objects

With object destructuring, we can unpack values from an object into distinct variables.

#### Basic Syntax

```javascript
const person = {
  name: "John",
  age: 30,
  city: "New York",
};

const { name, age } = person;

console.log(name); // John
console.log(age); // 30
```

#### Renaming Variables

```javascript
const person = {
  name: "John",
  age: 30,
  city: "New York",
};

const { name: personName, age: personAge } = person;

console.log(personName); // John
console.log(personAge); // 30
```

#### Default Values

```javascript
const person = {
  name: "John",
  age: 30,
};

const { name, city = "Unknown" } = person;

console.log(name); // John
console.log(city); // Unknown
```

### Combined Array and Object Destructuring

```javascript
const data = {
  id: 1,
  details: ["John", "Doe", { age: 30, city: "New York" }],
};

const {
  id,
  details: [firstName, lastName, { age, city }],
} = data;

console.log(id); // 1
console.log(firstName); // John
console.log(lastName); // Doe
console.log(age); // 30
console.log(city); // New York
```

## Function Parameters

Destructuring can also be used directly in function parameters to extract data from objects or arrays passed to the function.

#### Array Destructuring in Function Parameters

```javascript
function sum([a, b]) {
  return a + b;
}

console.log(sum([1, 2])); // 3
```

#### Object Destructuring in Function Parameters

```javascript
function greet({ name, age }) {
  return `Hello, my name is ${name} and I am ${age} years old.`;
}

console.log(greet({ name: "John", age: 30 })); // Hello, my name is John and I am 30 years old.
```

Further Reference: [Destructuring assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
