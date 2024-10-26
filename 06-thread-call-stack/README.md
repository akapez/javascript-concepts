### Thread & Call Stack 
JavaScript is a single-threaded programming language, which means it has a single Call Stack. This means that JavaScript can only execute one piece of code at a time.

#### Thread

In the context of JavaScript, a "thread" refers to a single sequence of commands or a single path of execution through which JavaScript code is processed. Since JavaScript is single-threaded, it can only execute one task at a time in a specific order. This is part of the reason why asynchronous programming patterns are important in JavaScript for handling operations like network requests, which could otherwise block the thread and make the UI unresponsive.

#### LIFO Principle in Stack

The Last In, First Out (LIFO) principle is a method of processing data in which the most recently added item is the first one to be removed. This principle is commonly used in data structures like stacks, which are used in various computing algorithms and processes.

![LIFO Principle](https://raw.githubusercontent.com/akapez/javascript-concepts/refs/heads/main/06-thread-call-stack/lifo.png)

#### Call Stack

The Call Stack is a mechanism used by the JavaScript interpreter to keep track of function calls in a script. It operates on the "last in, first out" (LIFO) principle, meaning the last function that gets called is the first to be executed and removed from the stack once its execution completes.

**How LIFO Works in the Call Stack**

In JavaScript, the call stack uses the LIFO principle to manage function calls:

1. Function Call: When a function is called, it is added (pushed) to the top of the stack.
2. Function Execution: The JavaScript engine executes the function on top of the stack.
3. Function Return: Once the function execution is complete, it is removed (popped) from the top of the stack.
4. Next Function: The engine then continues executing the next function on the top of the stack.

![Call Stack](https://raw.githubusercontent.com/akapez/javascript-concepts/refs/heads/main/06-thread-call-stack/call-stack.png)


Further Reference: [JavaScript Under The Hood 1 - Thread & Call Stack](https://youtu.be/-G9c4CMMUKc?list=PL3ZPTlHmN263q0ZcI9qyqYfUKvaLqbGTt)
