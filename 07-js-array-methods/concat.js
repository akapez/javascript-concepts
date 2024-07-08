//concat: The method arr.concat creates a new array that includes values from other arrays and additional items.


const a = [1, 2, 3];
const b = [4, 5, 6];
const c = [7, 8, 9];

const d = a.concat(b, c);

console.log(d); //[1,2,3,4,5,6,7,8,9]