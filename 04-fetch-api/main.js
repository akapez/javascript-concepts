//callbacks, promises, thenable, and async/await

//Callbacks
function firstFunction(parameter, callback) {
    //do stuff
    callback();
};

firstFunction(para, function () {
    //do stuff
    secondFunction(para, function () {
        thirdFunction(para, function () {

        });
    });
});

//Promises

//fulfilled, rejected
const myPromise = new Promise((resolve, reject) => {
    const error = true;
    if (!error) {
        resolve("Yes! resolved the promise.");
    } else {
        reject("No! rejected the promise.");
    };
});

console.log(myPromise);

myPromise.then(value => {
    console.log(value);
}).catch(err => {
    console.log(err);
});

//pending
fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => {
        return res.json();
    }).then(data => {
        console.log(data);
    });

//Async / Await
const fetchUsers = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const jsonData = await res.json();
    return jsonData;
};


const getDadJoke = async () => {
    const response = await fetch("https://icanhazdadjoke.com/", {
        method: "GET",
        headers: {
            Accept: "application/json"
        }
    });
    const jsonJokeData = await response.json();
    console.log(jsonJokeData);
};

getDadJoke();

