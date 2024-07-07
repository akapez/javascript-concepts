![alt text](https://raw.githubusercontent.com/avishka964/javascript-concepts/main/JS.jpg)


# JavaScript Concepts

These concepts form the foundation of JavaScript programming and are essential for developing complex and efficient web applications.

## Contents
1. JavaScript DOM Manipulation
2. JavaScript modules
3. Thread & Call Stack
4. Execution Context
5. Fetch API (Callbacks, Promises, Thenable, and async/await)
6. Memory Storage
7. JavaScript Engine
8. Javascript Array Methods

### JavaScript DOM Manipulation
DOM manipulation allows developers to create interactive and dynamic web applications by modifying the structure, content, and style of web pages.

What is the DOM?
The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the structure of a document as a tree of nodes, where each node corresponds to a part of the document, such as an element, attribute, or text content. The DOM allows programming languages like JavaScript to access and manipulate the content, structure, and style of web pages dynamically.

Further Reference: [MDN doc](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents)

### JavaScript modules
JavaScript modules are a way to organize and reuse JavaScript code. Using modules can break up the code into smaller, manageable pieces, which can then be imported and used in other parts of an application as needed. 
This modular approach helps in maintaining a clean codebase, makes it easier to debug, and enhances code reusability.

- **Export and Import**: Modules allow you to export functions, objects, or primitives from one file, which can then be imported into another. This is done using the export and import statements. (Named Exports/ Default Exports)
- **ES Modules vs. CommonJS**: There are different module systems in the JavaScript ecosystem. ES Modules (ESM) is the standard in the ECMAScript specification, used mainly in the browser and increasingly supported in Node.js.
  CommonJS is another module system that was traditionally used in Node.js.
- **Asynchronous Module Loading**: Modules can be loaded asynchronously using dynamic imports (import() function), which returns a promise. This is particularly useful for code-splitting and loading code on demand.

Further Reference: [JavaScript Modules Crash Course](https://youtu.be/KeBxopnhizw)

### Thread & Call Stack 
JavaScript is a single-threaded programming language, which means it has a single Call Stack. This means that JavaScript can only execute one piece of code at a time.

- **Thread**: In the context of JavaScript, a "thread" refers to the single sequence of commands or a single path of execution through which JavaScript code is processed. Since JavaScript is single-threaded, it can only execute one task at a time in a specific order. This is part of the reason why asynchronous programming patterns are important in JavaScript for handling operations like network requests, which could otherwise block the thread and make the UI unresponsive.
- **Call Stack**: The Call Stack is a data structure that JavaScript uses to keep track of the functions that a script calls. It works on the principle of "last in, first out" (LIFO), which means the last function that gets called is the first to be executed and removed from the stack once its execution completes. [MDN doc](https://developer.mozilla.org/en-US/docs/Glossary/Call_stack)

Further Reference: [JavaScript Under The Hood 1 - Thread & Call Stack](https://youtu.be/-G9c4CMMUKc?list=PL3ZPTlHmN263q0ZcI9qyqYfUKvaLqbGTt)

### Execution Context 
The JavaScript execution context is a fundamental concept that is critical for understanding how JavaScript code is executed. At a high level, an execution context can be thought of as an environment or a scope in which JavaScript code is evaluated and executed. 

- **Global Execution Context**: This is the default or base context in which code that is not inside any function is executed. There is only one global execution context in a JavaScript program, and it creates a global object (window in the browser, global in Node.js) and a this binding that points to that global object.
- **Functional Execution Context**: Every time a function is invoked, a new execution context is created for that function. It is responsible for managing the execution of that specific function, including its variables, arguments, and the value of this. Each function call generates a new execution context that gets pushed onto the call stack.


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

### Fetch API (Callbacks, Promises, Thenable, and Async/Await)
- **Fetch API**: The Fetch API is a modern interface that allows to make of network requests similar to XMLHttpRequest (XHR).

```
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```
- **Callbacks**: Functions passed as arguments to other functions and invoked after a specific task is completed. Suitable for simple asynchronous operations but can lead to callback hell.
- **Promises**: Objects representing the eventual completion or failure of asynchronous operations. They allow for chaining and better error handling.
- **Thenables**: Objects that implement a then method. Promises are thenables, but not all thenables are promises.
- **Async/Await**: Syntactic sugar for promises, making asynchronous code more readable and easier to write. It allows to use of async functions and the await keyword for better flow control.

Further Reference: [Callbacks, Promises, Async Await | JavaScript Fetch API Explained](https://youtu.be/VmQ6dHvnKIM?list=PL3ZPTlHmN263q0ZcI9qyqYfUKvaLqbGTt)

### Memory Storage
JavaScript automatically allocates memory when objects are created and frees it when they are not used anymore (garbage collection).

##### Memory Life Cycle
- **Allocation**: Memory is allocated when variables, objects, or data structures are created.
- **Usage**: The allocated memory is used for operations like reading or writing to variables and objects.
- **Release**: Memory is released when it is no longer needed. This is where garbage collection comes in.

##### Primitive and Reference Data Types
- **Primitive Data Types**: Primitive data types are the most basic data types in JavaScript. They are immutable, meaning their values cannot be changed once created. stored by value directly in the stack. (Number, String, Boolean, Undefined, Null, Symbol)
- **Reference Data Types**: Reference data types, also known as objects, are more complex data structures. Unlike primitives, they are mutable, stored by reference in the heap. (Object, Array, Function)

##### Stack and Heap
| Aspect          | Stack                                       | Heap                                                |
| --------------- | ------------------------------------------- | --------------------------------------------------- |
| Storage         | Primitive values, function calls            | Objects, arrays, dynamic data                       |
| Memory Size     | Fixed, limited                              | Dynamic, flexible                                   |
| Access Speed    | Fast                                        | Slower                                              |
| Management	    | Automatically managed by JavaScript engine  | Managed by JavaScript engine with garbage collection|
| Allocation Type	| Static memory allocation                    | Dynamic memory allocation                           |

Further Reference: [JavaScript Under The Hood 4 - Memory Storage](https://youtu.be/Hci9Bb4_fkA?list=PL3ZPTlHmN263q0ZcI9qyqYfUKvaLqbGTt)

### Javascript Engine
A JavaScript engine is a program or interpreter that executes JavaScript code. Each web browser has its own JavaScript engine to parse, compile, and execute JavaScript code.

| Browser or Runtime                             | JavaScript Engine  |
| ---------------------------------------------- | ------------------ |
| Mozilla                                        | Spidermonkey       |
| Chrome, Node.js, Deno                          | V8                 |
| Safari                                         | JavaScriptCore*    |
| Edge	                                         | Chakra             |
| Bun	                                           | JavaScriptCore     |

##### Compilation vs. Interpretation in Programming Languages
- **Compilation**: Compilation is the process of translating high-level source code into machine code (binary code) that a computer's processor can execute directly. (C, C++, GO, Rust)
- **Interpretation**: Interpretation involves translating and executing high-level source code line-by-line or statement-by-statement at runtime. (Python, Ruby, PHP, Javascript)

##### Just-In-Time (JIT) Compilation
Just-In-Time (JIT) compilation is a technique used by JavaScript engines to enhance performance by compiling frequently executed JavaScript code into native machine code at runtime. This approach allows for faster execution by leveraging both initial interpretation for quick start-up and ongoing optimization for code that is executed frequently, resulting in adaptive and efficient performance improvements.


Further Reference: [JavaScript Under The Hood 5 - JavaScript Engine Overview](https://youtu.be/oc6faXVc54E?list=PL3ZPTlHmN263q0ZcI9qyqYfUKvaLqbGTt) , [How V8 JavaScript engine works step by step with diagram](https://cabulous.medium.com/how-v8-javascript-engine-works-5393832d80a7) 

### Javascript Array Methods

JavaScript provides a rich set of methods for working with arrays. These methods make it easy to perform a variety of operations, such as adding and removing elements, finding elements, and iterating over arrays.

#### Array Creation 📦  
- `Array.from` | `Array.isArray` | `Array.of`

#### Adding/Removing Elements ➕➖
- `push` | `pop` | `shift` | `unshift` | `splice`

#### Accessing Elements 🔍
- `at` | `concat` | `join` | `slice`

#### Searching and Sorting 🔭
- `indexOf` | `lastIndexOf` | `includes` | `find` | `findIndex` | `filter` | `sort` | `reverse`

#### Iteration Methods 🔄
- `forEach` | `map` | `reduce` | `reduceRight` | `some` | `every`

#### Other Useful Methods 🛠️
- `flat` | `flatMap` | `fill` | `copyWithin`

Further Reference: [Array methods](https://javascript.info/array-methods)
