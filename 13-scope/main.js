var x = 1;

// Global scope: The default scope for all code running in script mode.
var a = 1;
let b = 2;
const c = 3;

// Function scope: The scope created with a function.

function myFunc() {
    let a = 2;
    console.log(a);
}

myFunc();

// Block scope: Variables declared inside a { } block cannot be accessed from outside the block.

{
    let a = 20;
    var d = 40;
    console.log(a);
}

console.log(d);