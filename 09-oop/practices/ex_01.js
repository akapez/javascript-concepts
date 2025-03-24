//Write a JavaScript program to create a class called "Person" with properties for name, age and country. Include a method to display the person's details. Create two instances of the 'Person' class and display their details.

class Person {
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }

    showName() {
        console.log(`Person name: ${this.name}`);
    }

    showAge() {
        console.log(`${this.name} is ${this.age} years old`);
    }

    showCountry() {
        console.log(`He lives in ${this.country}`);
    }
}

const person1 = new Person("Sam", 26, "USA");
person1.showName();
person1.showAge();
person1.showCountry();

const person2 = new Person("Kamal", 45, "Sri Lanka");
person2.showName();
person2.showAge();
person2.showCountry();