// Array Destructing
// Object Destructing
// SMart function parameters

// swap the value of two variables

let a = 1;
let b = 2;

[a, b] = [b, a];

console.log(a);
console.log(b);

// swap 2 elements in an array

const colors = ["red", "green", "yellow", "black", "white"];

[colors[0], colors[4]] = [colors[4], colors[0]];

console.log(colors);

// assign array elements to variables

const [firstColor, secondColor, thirdColor, ...extraColor] = colors;

console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);
console.log(extraColor);

// extract values from objects

const person1 = {
    firstName: "Sam",
    lastName: "Smith",
    age: 30,
    job: "Janitor"
};

const person2 = {
    firstName: "Mark",
    lastName: "Brown",
    age: 42,
};

const { firstName, lastName, age, job = "Unemployed" } = person2;

console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);

// destructure in function parameter

function displayPerson({ firstName, lastName, age, job = "Unemployed" }) {
    console.log(`Name: ${firstName} ${lastName}`);
    console.log(`age: ${age}`);
    console.log(`job: ${job}`);
}

displayPerson(person2);