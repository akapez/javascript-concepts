//sort: The call to arr.sort() sorts the array in place, changing its element order.

const names = ['Sam', 'Mark', 'John', 'Steve'];
const numbers = [13, 2, 34, 16, 9];

names.sort();

console.log(names);

function compare(a, b) {
    return a - b;
}

numbers.sort(compare);

console.log(numbers);

//array descending and ascending order
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

products.sort((a, b) => {
    // return b.price - a.price; //descending
    return a.price - b.price; //ascending
});

console.log(products);