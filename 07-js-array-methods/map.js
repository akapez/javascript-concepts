//map: It calls the function for each element of the array and returns the array of results.

const numbers = [1, 2, 3, 4];
const str = ['1', '2', '3', '4'];

function multiply(value, index, arr) {
    return value * index;
}

const numbersDouble = numbers.map(multiply);

console.log(numbersDouble);

const products = [
    {
        id: 01,
        name: 'Laptop',
        price: 200,
        count: 20
    },
    {
        id: 02,
        name: 'Bag',
        price: 30,
        count: 4
    },
    {
        id: 03,
        name: 'Phone',
        price: 100,
        count: 15
    },
];

const totalProductValues = products.map(item => ({
    name: item.name,
    total: item.price * item.count
}));

console.log(totalProductValues);

//convert string into numbers
const convert = str.map(Number);
console.log(convert);