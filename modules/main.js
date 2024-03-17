
//import-export
import { sub, sum } from './calc.js';

//named-default module
import { default as printHelloWorld } from './whoami.js';
import printHelloWorld from './whoami.js';

//namespace
import * as calc from './calc.js';

//combined
import * as combine from './combine.js';

console.log(calc.sum(2, 3));
console.log(calc.sub(5, 3));

console.log(printHelloWorld());

console.log(combine.calc.sum(2, 3));
console.log(combine.printHelloWorld());

//dynamic import
const print = true;
if (print) {
    const { sayNewYear, sayChristmas } = await import('./greeting.js');
    sayChristmas();
    sayNewYear();
}

// const promises = Promise.all(
//     [
//         await import('./calc.js'),
//         await import('./greeting.js')
//     ]
// );

// console.log(promises);