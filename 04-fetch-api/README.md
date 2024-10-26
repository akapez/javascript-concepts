### Fetch API (Callbacks, Promises, Thenable, and Async/Await)

Asynchronous programming in JavaScript allows tasks to be executed without blocking the main thread, enabling the handling of multiple operations simultaneously. This approach is essential for maintaining the responsiveness of applications, especially in environments like web browsers where long-running tasks can freeze the user interface.

**Blocking Execution**

Blocking execution refers to operations that block further execution until the current operation is completed. In other words, the code execution waits for the operation to finish before moving on to the next line of code. This can cause the program to become unresponsive if the operation takes a long time to complete.

**Non-Blocking Execution**

Non-blocking execution refers to operations that allow the program to continue executing other code while the operation is being performed. This is typically achieved using asynchronous operations, such as callbacks, promises, and async/await. Non-blocking execution helps keep the application responsive, even when performing time-consuming tasks.

**Callbacks**

A callback is a function passed as an argument to another function, which is invoked after the completion of an asynchronous task.

```javascript
// function with a callback
function greet(name, callback) {
   console.log(`Hi ${name}`);
   callback();
}


// callback function
function callMe() {
   console.log('I am a callback function');
}


// passing the callback function as an argument
greet('John', callMe);
```

**Promises**

Promises represent the eventual completion (or failure) of an asynchronous operation and its resulting value.

```javascript
const promise = new Promise((resolve, reject) => {
   setTimeout(() => {
       resolve('Data received');
   }, 1000);
});


promise.then((data) => {
   console.log(data); // 'Data received'
}).catch((error) => {
   console.error(error);
});

```

**Async/Await**

`async` and `await` provide a more readable and synchronous-like way to handle asynchronous operations using promises.

```javascript
function fetchUser() {
   return new Promise((resolve) => {
     setTimeout(() => {
       resolve('User data fetched');
     }, 2000);
   });
 }
  // Async function to handle the asynchronous task
 async function getUserData() {
   console.log('Fetching user data...');
   const result = await fetchUser();
   console.log(result);
   // Expected output: "User data fetched"
 }


getUserData();
```
#### The Event Loop

The event loop is the core mechanism that handles asynchronous operations in JavaScript. It continuously checks the task queue to see if any tasks need to be executed.

#### Task Queue

The task queue (also known as the callback queue) is where asynchronous tasks are placed once they are ready to be executed. This includes tasks such as timers (setTimeout, setInterval), I/O operations, and other callbacks.

```javascript
function first() {
   console.log(1);
}


function second() {
   setTimeout(() => {
       console.log(2);
   }, 0);
}


function third() {
   console.log(3);
}
// Execute the functions
first();
second();
third();
```
This example demonstrates how setTimeout with a delay of 0 milliseconds does not execute immediately but instead, after the current stack of synchronous code has been executed. The event loop ensures that the asynchronous code (the timeout callback) is executed only after the call stack is empty.

Further Reference: [Callbacks, Promises, Async Await | JavaScript Fetch API Explained](https://youtu.be/VmQ6dHvnKIM?list=PL3ZPTlHmN263q0ZcI9qyqYfUKvaLqbGTt)
