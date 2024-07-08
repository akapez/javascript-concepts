//splice:  It can do everything: insert, remove and replace elements.

const numbers = [1, 2, 3, 4, 5];

// numbers.splice(2, 3);

const deleted = numbers.splice(2, 3);

console.log(numbers); // [1, 2]
console.log(deleted); // [3, 4, 5]