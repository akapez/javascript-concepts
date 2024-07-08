//forEach: The arr.forEach method allows to run a function for every element of the array.

const numbers = [1, 2, 3, 4, 5, 6];
const letters = ['a', 'b', 'a', 'c', 'e'];

// function consoleItem(item, index, arr) {
//     console.log('a[' + index + '] =' + item);
// }

// numbers.forEach(consoleItem);

numbers.forEach((item, index, arr) => {
    console.log(arr); // 6:[1, 2, 3, 4, 5, 6]
});

let sum = 0;
let count = {};

numbers.forEach(item => {
    sum += item;
});

console.log(sum); // 21

letters.forEach(item => {
    if (count[item]) {
        count[item]++;
    } else {
        count[item] = 1;
    }
});

console.log(count); //{a: 2, b:1, c:1, e:1}