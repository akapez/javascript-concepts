### JavaScript Functional Programming

Functional programming (FP) is a programming paradigm where programs are constructed by applying and composing functions.

#### Key Concepts of Functional Programming

- **First-Class Functions**: Functions are treated as first-class citizens, meaning they can be assigned to variables, passed as arguments, and returned from other functions.
- **Pure Functions**: A pure function is a function that, given the same inputs, always returns the same output and does not cause any side effects (e.g., modifying external state).
- **Immutability**: Data should not be changed once created. Instead, new data structures should be created by copying and modifying the original data.
- **Higher-Order Functions**: Functions that can take other functions as arguments or return them as results.
- **Function Composition**: The process of combining two or more functions to produce a new function.
- **Declarative Code**: Writing code that describes what you want to achieve, rather than how to achieve it. This often leads to more readable and concise code.

#### 1. First-Class Functions

Functions can be assigned to variables, passed as arguments, and returned from other functions.

```javascript
const add = (a, b) => a + b;
const result = add(2, 3);
console.log(result); // 5
```

#### 2. Pure Functions

A pure function returns the same output for the same input and has no side effects.

```javascript
const square = (x) => x * x;
console.log(square(4)); // 16
```

#### 3. Immutability

Creating new data structures rather than modifying existing ones.

```javascript
const numbers = [1, 2, 3, 4];
const incrementedNumbers = numbers.map((num) => num + 1);
console.log(numbers); // [1, 2, 3, 4]
console.log(incrementedNumbers); // [2, 3, 4, 5]
```

#### 4. Higher-Order Functions

Functions that take other functions as arguments or return functions as results.

```javascript
const greet = () => "Hello";
const executeFunction = (fn) => fn();
console.log(executeFunction(greet)); // "Hello"
```

#### 5. Function Composition

Combining functions to create new functions.

```javascript
const multiplyBy2 = (x) => x * 2;
const subtract3 = (x) => x - 3;
const multiplyAndSubtract = (x) => subtract3(multiplyBy2(x));
console.log(multiplyAndSubtract(5)); // 7
```

#### Common Functional Programming Methods in JavaScript 📦

- `map()`: Creates a new array by applying a function to each element of the original array.
- `filter()`: Creates a new array with elements that pass a test provided by a function.
- `reduce()`: Applies a function against an accumulator and each element of the array to reduce it to a single value.
- `forEach()`: Executes a function for each element in the array.

#### Benefits of Functional Programming

1. Predictability: Pure functions with no side effects are easier to understand and test.
2. Maintainability: Immutability and declarative code lead to more maintainable codebases.
3. Reusability: Functions are reusable and can be composed in various ways to create new functionality.

Further Reference: [First-class Function](https://developer.mozilla.org/en-US/docs/Glossary/First-class_Function), [JavaScript Higher Order Functions & Arrays](https://youtu.be/rRgD1yVwIvE?list=PL3ZPTlHmN26156BDt99BLXfGyOBzCoklB), [What are Pure Functions? | Javascript Functions Tutorial](https://youtu.be/ZXxahQS1PN8?list=PL3ZPTlHmN26156BDt99BLXfGyOBzCoklB)
