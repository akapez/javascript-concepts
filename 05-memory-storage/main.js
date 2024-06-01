//Primitive types: Stored on the stack
let name = 'John';
let age = 30;

//Reference types: Stored on the heap
let person = {
    name: 'Brad',
    age: 40
};

let newName = name;
newName = 'Jonathan';

let newPerson = person;
newPerson.name = 'Bradley';

console.log(person.name);