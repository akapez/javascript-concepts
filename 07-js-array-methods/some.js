//some: The some() method of Array instances tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.

const numbers = [1, 2, 3, 4, 5];

function greaterThanFour(item) {
    return item > 4;
}

const res = numbers.some(greaterThanFour);

console.log(res); //true