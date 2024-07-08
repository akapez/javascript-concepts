//every: The every() method of Array instances tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

const numbers = [1, 2, 3, 4, 5];

function isPositive(item) {
    return item > 0;
}

const res = numbers.every(isPositive);

console.log(res); //true

const persons = [
    {
        name: 'John'
    },
    {
        name: 'Sam'
    },
    {
        name: 'Mark'
    },
    {
        surname: 'Brown'
    }
];

const perResults = persons.every(per => per.name !== undefined);

console.log(perResults); //false