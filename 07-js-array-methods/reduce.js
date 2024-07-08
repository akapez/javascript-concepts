//reduce: The reduce method in JavaScript is used to apply a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.

//🐝 accumulator: The accumulator accumulates the callback's return values. It is the accumulated value previously returned in the last invocation of the callback, or initialValue, if supplied.

//🪿 currentValue: The current element being processed in the array.

//🐢 currentIndex (optional): The index of the current element being processed in the array.

//🐌 array (optional): The array reduce was called upon.

const numbers = [1, 2, 3, 4, 5];

function sum(accumulator, value) {
    return accumulator + value;
}

const total = numbers.reduce(sum);

console.log(total); // 15

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

const totalValueProducts = products.reduce((acc, item) => acc + item.price * item.count, 0);

console.log(totalValueProducts); // 5620


//flattening an array of arrays
const arrays = [[1, 2], [3, 4], [5, 6]];

const flattened = arrays.reduce((acc, value) => {
    return acc.concat(value);
}, []);

console.log(flattened); // [1, 2, 3, 4, 5, 6]