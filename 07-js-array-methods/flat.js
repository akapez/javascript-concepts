//flat: The flat() method of Array instances creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

const arr = [1, [2, [3, [4]]]];

const res = arr.flat(Infinity);

console.log(res); // [1, 2, 3, 4]