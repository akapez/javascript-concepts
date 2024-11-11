// Javascript strings are primitive and immutable: All string methods produce a new string without altering the original string.


let stringOne = "Today is a Beautiful Day";
let stringTwo = "It's time to learn JavaScript";
let stringThree = "      Hello World!      ";
let num = 123;

//length
console.log(stringOne.length);

//at()
console.log(stringOne.at(2));

//charAt()
console.log(stringOne.charAt(2));

//charCodeAt()
console.log(stringOne.charCodeAt(2));

//concat()
console.log(stringOne.concat(stringTwo));

//endWith()
console.log(stringOne.endsWith("Day"));

//fromCharCode()
console.log(String.fromCharCode(100));

//include()
console.log(stringOne.includes("Beautiful"));

//indexOf()
console.log(stringTwo.indexOf("learn"));

//lastIndexOf()
console.log(stringTwo.lastIndexOf("time"));

//match()
console.log(stringTwo.match(/JavaScript/g));

//repeat()
console.log(stringOne.repeat(2));

//replace()
console.log(stringOne.replace("Beautiful", "Bad"));

//search()
console.log(stringTwo.search("time"));

//slice()
console.log(stringOne.slice(3, 5));

//split()
console.log(stringOne.split(" "));

//startWith()
console.log(stringOne.startsWith("To"));

//substring()
console.log(stringOne.substring(2, 5));

//toLowerCase()
console.log(stringOne.toLowerCase());

//toUpperCase()
console.log(stringOne.toUpperCase());

//trim()
console.log(stringThree.trim());

//toString()
console.log(num.toString());