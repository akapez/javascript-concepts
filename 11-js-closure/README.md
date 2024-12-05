### JavaScript Closure

A closure is where an inner function accesses the outer (enclosing) function’s variables— a scope chain. Closures are created every time a function is created, at function creation time.

#### A closure can access:

1. Its own local variables.
2. Variables of its enclosing function.
3. Global variables.

#### Practical Uses of Closures

##### Data Privacy

Closures can be used to create private variables. This is useful for data encapsulation and to prevent direct access from outside the function.

```javascript
function createCounter() {
  let count = 0; // Private variable

  return {
    increment: function () {
      count++;
      console.log(count);
    },
    decrement: function () {
      count--;
      console.log(count);
    },
  };
}

const counter = createCounter();
counter.increment(); // 1
counter.increment(); // 2
counter.decrement(); // 1
```

Here, `count` is a private variable and cannot be accessed directly from outside the `createCounter` function. The only way to interact with count is through the `increment` and `decrement` methods.

##### Emulating Block Scope

```javascript
for (var i = 0; i < 3; i++) {
  (function (j) {
    setTimeout(function () {
      console.log(j); // Outputs 0, 1, 2
    }, 1000);
  })(i);
}
```

In this example, an IIFE (Immediately Invoked Function Expression) is used to create a new scope for each iteration, ensuring that `j` captures the current value of `i`.

##### Maintaining State

```javascript
function createGreeting(name) {
  return function (greeting) {
    console.log(`${greeting}, ${name}!`);
  };
}

const greetJohn = createGreeting("John");
greetJohn("Hello"); // Outputs: Hello, John!
greetJohn("Good morning"); // Outputs: Good morning, John!
```

Here, `name` is maintained in the closure, and the returned function can use it whenever called.

#### Important Points about Closures:

1. Closures keep references to outer function variables, not copies.
2. Memory Management: Variables within closures are not garbage collected as long as the closure itself is accessible.
3. Scope Chain: Closures maintain the scope chain from the outer function, allowing access to all outer variables.

Further Reference: [Variable scope, closure](https://javascript.info/closure)
