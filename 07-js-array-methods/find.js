//find: The find() method of Array instances returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.

const people = [
    {
        id: 01,
        name: 'Sam',
        age: 45
    },
    {
        id: 02,
        name: 'Mark',
        age: 25
    },
    {
        id: 03,
        name: 'John',
        age: 15
    },
];

function findPerson(per) {
    return per.name === 'Mark';
}

const res = people.find(findPerson);

console.log(res); // { id: 02, name: 'Mark', age: 25}