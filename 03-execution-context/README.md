### Execution Context 
The JavaScript execution context is a fundamental concept that is critical for understanding how JavaScript code is executed. At a high level, an execution context can be thought of as an environment or a scope in which JavaScript code is evaluated and executed. 

#### Global Execution Context
The Global Execution Context (GEC) is the base execution context in JavaScript that is created when a JavaScript program starts running. It is the outermost context, responsible for managing the execution of the entire script, and all other execution contexts (e.g., function execution contexts) are nested within it. There's only one GEC in a program.

In the GEC:

- Global Object: It creates a global object (`window` in web browsers, `global` in Node.js).

- `this` Binding: The this keyword is bound to the global object.

- Hoisting: Variables and function declarations are hoisted, meaning they are registered in memory before the code execution phase.

#### Functional Execution Context

The Functional Execution Context (FEC) is created whenever a function is invoked in JavaScript. It is responsible for managing the execution of that specific function, including its variables, arguments, and the value of this. Each function call generates a new execution context that gets pushed onto the call stack.

The creation of an Execution Context (GEC or FEC) happens in two phases:

##### Creation Phase

In this phase, the JavaScript engine scans the code to be executed. It sets up the memory space for variables and functions, which is known as "hoisting". Variables are initially set to undefined and functions are fully defined. The `this` keyword is also established.

##### Execution Phase

In this phase, the code is executed line by line. The variables are assigned their values as the code runs, and functions are executed when their calls are reached.

What is Hoisting?

Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope before the code has been executed. This means that variables and functions can be used before they are declared in the code. It's important to note that only the declarations are hoisted, not the initialization.

```javascript
console.log(x); // undefined
var x = 5;
console.log(x); // 5
```

Further Reference: [JavaScript Under The Hood 2 - Execution Context](https://youtu.be/Fd9VaW0M7K4?list=PL3ZPTlHmN263q0ZcI9qyqYfUKvaLqbGTt)
