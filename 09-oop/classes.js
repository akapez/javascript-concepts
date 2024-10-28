/*
A class element can be characterized by three aspects:
- Kind: Getter, setter, method, or field
- Location: Static or instance
- Visibility: Public or private
*/

class Person {
    constructor(name, email, time) {
        this.name = name;
        this.email = email;
    }
    login() {
        console.log(this.email + " has logged in.");
        return this;
    }
    logout() {
        console.log(this.email + " has logged out.");
        return this;
    }
    printTime() {
        const date = new Date();
        console.log(this.email + " " + date);
        return this;
    }
}

//class inheritance
class Admin extends Person {
    constructor(name, email) {
        super(name);
        this.email = email;
        this.account = "admin";
    }
    deleteUser(user) {
        users = users.filter(u => {
            return u.email != user.email;
        });
    }
}

const person = new Person("Sam", "sam@yahoo.com");
const person2 = new Person("Mark", "mark@hotmail.com");
const admin = new Admin("john", "john@gmail.com");

//method chaining
person.login().printTime().logout();

let users = [person, person2, admin];
admin.deleteUser(person2);

console.log(users);
