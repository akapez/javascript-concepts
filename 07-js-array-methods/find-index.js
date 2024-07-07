//findIndex: The arr.findIndex method returns the index where the element was found instead of the element itself. The value of -1 is returned if nothing is found.

const numbers = [1, 2, 3, 4, 5, 6];

function findIndex(value) {
    return value === 3;
}

const res = numbers.findIndex(findIndex);

console.log(res);