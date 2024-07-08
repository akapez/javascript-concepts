//includes: arr.includes(item, from) – looks for item starting from index from, returns true if found.

const names = ['Sam', 'Mark', 'John', 'Steve'];

const res = names.includes('Sam');
console.log(res); // true

//indexOf: arr.indexOf(item, from) – looks for item starting from index from, and returns the index where it was found, otherwise -1.

let arr = [1, 0, false];

console.log(arr.indexOf(0)); // 1
console.log(arr.indexOf(false)); // 2

//lastIndexOf: The method arr.lastIndexOf is the same as indexOf, but looks for from right to left.

let fruits = ['Apple', 'Orange', 'Apple'];

console.log(fruits.lastIndexOf('Apple')); // 2 (last Apple)

