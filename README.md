# JavaScript Concepts

These concepts form the foundation of JavaScript programming and are essential for developing complex and efficient web applications.

## Contents
1. JavaScript modules
2. Thread & Call Stack
3. Execution Context

### JavaScript modules
JavaScript modules are a way to organize and reuse JavaScript code. Using modules can break up the code into smaller, manageable pieces, which can then be imported and used in other parts of an application as needed. 
This modular approach helps in maintaining a clean codebase, makes it easier to debug, and enhances code reusability.

- **Export and Import**: Modules allow you to export functions, objects, or primitives from one file, which can then be imported into another. This is done using the export and import statements. (Named Exports/ Default Exports)
- **ES Modules vs. CommonJS**: There are different module systems in the JavaScript ecosystem. ES Modules (ESM) is the standard in the ECMAScript specification, used mainly in the browser and increasingly supported in Node.js.
  CommonJS is another module system that was traditionally used in Node.js.
- **Asynchronous Module Loading**: Modules can be loaded asynchronously using dynamic imports (import() function), which returns a promise. This is particularly useful for code-splitting and loading code on demand.

Further Reference: [MDN doc](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)

### Thread & Call Stack 
JavaScript is a single-threaded programming language, which means it has a single Call Stack. This means that JavaScript can only execute one piece of code at a time.

- **Thread**: In the context of JavaScript, a "thread" refers to the single sequence of commands or a single path of execution through which JavaScript code is processed. Since JavaScript is single-threaded, it can only execute one task at a time in a specific order. This is part of the reason why asynchronous programming patterns are important in JavaScript for handling operations like network requests, which could otherwise block the thread and make the UI unresponsive.
- **Call Stack**: The Call Stack is a data structure that JavaScript uses to keep track of the functions that a script calls. It works on the principle of "last in, first out" (LIFO), which means the last function that gets called is the first to be executed and removed from the stack once its execution completes. [MDN doc](https://developer.mozilla.org/en-US/docs/Glossary/Call_stack)

Further Reference: [JavaScript Under The Hood 1 - Thread & Call Stack](https://youtu.be/-G9c4CMMUKc?list=PL3ZPTlHmN263q0ZcI9qyqYfUKvaLqbGTt)

### Execution Context 
The JavaScript execution context is a fundamental concept that is critical for understanding how JavaScript code is executed. At a high level, an execution context can be thought of as an environment or a scope in which JavaScript code is evaluated and executed. 

- **Global Execution Context**: This is the default or base context in which code that is not inside any function is executed. There is only one global execution context in a JavaScript program, and it creates a global object (window in the browser, global in Node.js) and a this binding that points to that global object.
- **Functional Execution Context**: Every time a function is invoked, a new execution context is created for that function. This context will have its own set of variables, and it will also have access to the variables of its parent contexts (the outer lexical environment). Each function call gets its own execution context, even if the same function is being called multiple times simultaneously.

The creation of an Execution Context (GEC or FEC) happens in two phases:
  1. Creation Phase: In this phase, the JavaScript engine scans the code to be executed. It sets up the memory space for variables and functions, which is known as "hoisting". Variables are initially set to undefined and functions are fully defined. The this keyword is also established.
  2. Execution Phase: In this phase, the code is executed line by line. The variables are assigned their values as the code runs, and functions are executed when their calls are reached.

What is Hoisting?
Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope before the code has been executed. This means that variables and functions can be used before they are declared in the code. It's important to note that only the declarations are hoisted, not the initialization.

```
console.log(x); // undefined
var x = 5;
console.log(x); // 5
```
Further Reference: [JavaScript Under The Hood 2 - Execution Context](https://youtu.be/Fd9VaW0M7K4?list=PL3ZPTlHmN263q0ZcI9qyqYfUKvaLqbGTt)
