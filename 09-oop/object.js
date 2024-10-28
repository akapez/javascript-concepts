//An object literal is a list of name:value pairs inside curly braces {}.
//The named values, in JavaScript objects, are called properties.
//Methods are function definitions stored as property values.

const person = {
    email: "sam@gmail.com",
    name: "Sam",
    login() {
        console.log(this.email + " has logged in.");
    },
    logout() {
        console.log(this.email + " has logged out.");
    }
};

const newPerson = person;

newPerson.name = "Mark";
newPerson.email = "mark@gmail.com";

//Objects are mutable: They are addressed by reference, not by value.
//The object newPerson is not a copy of person. The object newPerson is person.
//The object newPerson and the object person share the same memory address.

console.log(person); //{"email":"mark@gmail.com","name":"Mark"} 