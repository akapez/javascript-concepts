### Object Oriented Programming JavaScript

#### Objects

- An object is a collection of properties (data) and methods (functions).
- Object can crete using object literals or constructor functions.

#### Classes

- Classes in JavaScript are templates for creating objects. They encapsulate data and functionality, organizing them in a reusable structure.

```javascript
class Animal {
  constructor(name, species) {
    this.name = name;
    this.species = species;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

const dog = new Animal("Buddy", "Dog");
dog.speak(); // Output: Buddy makes a noise.
```

#### Class Inheritance

- Inheritance allows a class to inherit properties and methods from another class. In JavaScript, inheritance is achieved using the `extends` keyword.
- The `super()` keyword is used to call the constructor of the parent class from within the child class constructor.

```javascript
class Dog extends Animal {
  constructor(name, breed) {
    super(name, "Dog"); // Calls the Animal constructor
    this.breed = breed;
  }

  speak() {
    console.log(`${this.name} barks.`);
  }
}

const labrador = new Dog("Max", "Labrador");
labrador.speak(); // Output: Max barks.
```

#### Constructor Function

- Before ES6 classes, constructor functions were used to create object blueprints.
- The `new` keyword is used with constructor functions to create instances, and `this` within the function refers to the new object instance.

```javascript
function Car(brand, model) {
  this.brand = brand;
  this.model = model;
}

Car.prototype.getInfo = function () {
  return `${this.brand} ${this.model}`;
};

const car1 = new Car("Toyota", "Camry");
console.log(car1.getInfo()); // Output: Toyota Camry
```

#### Prototype

- Methods and properties on the prototype are shared among all instances of that object type. This allows for memory-efficient inheritance.

```javascript
function Person(name) {
  this.name = name;
}

// Adding a method to the Person prototype
Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
};

const person1 = new Person("Alice");
person1.greet(); // Output: Hello, my name is Alice
```

#### Inherit Prototype

- Prototypal inheritance enables objects to inherit directly from other objects.
- `Object.create()` and `__proto__` establish inheritance by setting up the prototype chain.

```javascript
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function () {
  console.log(`${this.name} makes a sound.`);
};

function Dog(name, breed) {
  Animal.call(this, name); // Call the parent constructor
  this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype); // Set up prototype inheritance
Dog.prototype.constructor = Dog; // Reset constructor to Dog

Dog.prototype.speak = function () {
  console.log(`${this.name} barks.`);
};

const dog1 = new Dog("Rex", "Labrador");
dog1.speak(); // Output: Rex barks.
```

Further Reference: [Object-oriented programming](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_programming) , [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) , [Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes) , [Prototypal inheritance](https://javascript.info/prototype-inheritance)
