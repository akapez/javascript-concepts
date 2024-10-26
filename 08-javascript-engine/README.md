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

![JavaScript runtime environment](https://raw.githubusercontent.com/akapez/javascript-concepts/refs/heads/main/08-javascript-engine/js-runtime-environment.png)

This illustration represents the JavaScript runtime environment, focusing on how the V8 engine, the event loop, and the browser environment interact to execute JavaScript code. When a developer runs a JavaScript script on the V8 engine, the engine performs the following steps:

1. Compilation and Execution: The engine compiles and executes the JavaScript code using Just-In-Time (JIT) compilation for optimized performance.

2. Call Stack Management: V8 handles the call stack, managing function calls and execution order to ensure proper code execution.

3. Memory Management: The engine manages the memory heap, allocating and deallocating memory as needed for objects, arrays and functions.

4. Garbage Collection: V8 performs garbage collection, automatically cleaning up memory that is no longer in use to prevent memory leaks and optimize performance.

5. Data Types and Objects: The engine provides all the necessary data types, objects, and functions required for JavaScript execution, adhering to the ECMAScript standard.

6. Event Loop: V8 also integrates the event loop (sometimes implemented by the browser), which handles asynchronous operations like callbacks, promises, and event handling to ensure non-blocking execution.

Further Reference: [JavaScript Under The Hood 5 - JavaScript Engine Overview](https://youtu.be/oc6faXVc54E?list=PL3ZPTlHmN263q0ZcI9qyqYfUKvaLqbGTt) , [How V8 JavaScript engine works step by step with diagram](https://cabulous.medium.com/how-v8-javascript-engine-works-5393832d80a7) 

