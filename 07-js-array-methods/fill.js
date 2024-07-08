//fill: arr.fill(value, start, end) – fills the array with repeating value from index start to end.

const numbers = [1, 2, 3, 4, 5];

numbers.fill(0, 1, 4);

console.log(numbers); //[1, 0, 0, 0, 5]

//Creating an Array of Length n
//Filling the Array
//Mapping the Array to Index Values

function fillInNumbers(n) {
    return Array(n).fill(n).map((_, idx) => idx + 1);
}

console.log(fillInNumbers(10)); //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]