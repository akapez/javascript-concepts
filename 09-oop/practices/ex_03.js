//Write a JavaScript program that creates a class called 'Vehicle' with properties for make, model, and year. Include a method to display vehicle details. Create a subclass called 'Car' that inherits from the 'Vehicle' class and includes an additional property for the number of doors. Override the display method to include the number of doors.

class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    displayDetails() {
        console.log(`${this.make} ${this.model} is manufactured ${this.year}`);
    }
}

class Car extends Vehicle {
    constructor(make, model, year, doors) {
        super(make, model, year, 2000);
        this.doors = doors;
    }

    numOfDoors() {
        console.log(`${this.make} ${this.model} is manufactured ${this.year} and has ${this.doors} doors`);
    }
}

const vehicle = new Vehicle("Toyota", "Corolla", 1997);
vehicle.displayDetails();


const car = new Car("Toyota", "Corolla Cross", 2000, 4);
car.numOfDoors();