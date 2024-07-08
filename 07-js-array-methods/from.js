//from: The Array.from() static method creates a new, shallow-copied Array instance from an iterable or array-like object.

const str = '1234567';

const res = Array.from(str, x => Number(x));

console.log(res); // [1, 2, 3, 4, 5, 6, 7]