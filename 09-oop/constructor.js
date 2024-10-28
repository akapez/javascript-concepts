//In the constructor function, this has no value.
//The value of this will become the new object when a new object is created.

function Person(name, age, account) {
    this.name = name;
    this.age = age;
    this.account = account;
    this.login = function () {
        console.log(this.name + " has logged in.");
    };
}

//insatiate an Object
const user1 = new Person("Sam", 30, "individual");
const user2 = new Person("Mark", 16, "team");

console.log(user1.login());

