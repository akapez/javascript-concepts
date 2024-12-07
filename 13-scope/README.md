### Scope

Scope in JavaScript refers to the accessibility or visibility of variables within different parts of the code.

#### Types of Scope

1. **Global Scope**: Variables declared outside any function or block have global scope and are accessible from anywhere in the code.
2. **Function Scope**: Variables declared inside a function are only accessible within that function.
3. **Block Scope**: Variables declared inside a block (e.g., within curly braces {}) are only accessible within that block. This type of scope is supported by let and const.

`var`

- Function Scoped: Variables declared with var are function-scoped. If declared inside a function, they are accessible throughout that function. If declared outside any function, they become global-scoped.
- No Block Scope: Variables declared with var are not block-scoped. They are accessible outside the block in which they are defined.

```javascript
function exampleVar() {
  if (true) {
    var x = 10;
  }
  console.log(x); // 10, accessible due to function scope
}

exampleVar();

for (var i = 0; i < 3; i++) {
  // Loop block
}
console.log(i); // 3, accessible due to lack of block scope
```

`let`

- Block Scoped: Variables declared with let are block-scoped. They are only accessible within the block in which they are defined.
- No Hoisting: Variables declared with let are not hoisted to the top of their block. They exist in a "temporal dead zone" from the start of the block until the declaration is encountered.

```javascript
function exampleLet() {
  if (true) {
    let y = 20;
    console.log(y); // 20
  }
  // console.log(y); // Error: y is not defined, block scope
}

exampleLet();

for (let j = 0; j < 3; j++) {
  // Loop block
}
// console.log(j); // Error: j is not defined, block scope
```

`const`

- Block Scoped: Variables declared with const are block-scoped, similar to let.
- Immutability: Variables declared with const cannot be reassigned. However, objects and arrays declared with const can still be mutated.

```javascript
function exampleConst() {
  if (true) {
    const z = 30;
    console.log(z); // 30
  }
  // console.log(z); // Error: z is not defined, block scope
}

exampleConst();

const arr = [1, 2, 3];
arr.push(4); // Allowed
console.log(arr); // [1, 2, 3, 4]

// arr = [5, 6, 7]; // Error: Assignment to constant variable
```
