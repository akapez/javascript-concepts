//filter: The find method looks for a single (first) element that makes the function return true.

const numbers = [1, 2, 3, 4, 5, 6];
const mixNumbers = [1, 2, 1, 1, 3];

function isEven(value) {
    return value % 2 === 0;
}

const even = numbers.filter(isEven);

console.log(even);

const people = [
    {
        id: 01,
        name: 'Sam',
        age: 45,
    },
    {
        id: 02,
        name: 'Mark',
        age: 25,
    },
    {
        id: 03,
        name: 'John',
        age: 15
    },
];

const adults = people.filter(person => person.age >= 18);

console.log(adults);

//remove duplicate values
const originalNumbers = mixNumbers.filter((value, index, arr) => {
    return arr.indexOf(value) === index;
});

console.log(originalNumbers);