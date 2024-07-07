//from: The Array.from() static method creates a new, shallow-copied Array instance from an iterable or array-like object.

const str = '1234567';

const res = Array.from(str, x => Number(x));

console.log(res);