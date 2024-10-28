function Person(name, age, account) {
    this.name = name;
    this.age = age;
    this.account = account;
}

function Customer(...args) {
    Person.apply(this, args);
    this.subscribe = true;
}

//inherit prototype
Customer.prototype = Object.create(Person.prototype);

const user1 = new Person("Sam", 30, "individual");
const user2 = new Person("Mark", 16, "team");

console.log(user1);

//prototype: The JavaScript prototype property allows you to add new properties to object constructors

//add new properties
Person.prototype.country = "Sri Lanka";

//add new methods
Person.prototype.login = function () {
    return this.name + " has logged in.";
};

Customer.prototype.deleteAccount = function (type) {
    users = users.filter(user => {
        return user.account != type.account;
    });
};

console.log(user2.login());

const customer = new Customer("Fox", 25, "free");

let users = [user1, user2, customer];

console.log(customer);