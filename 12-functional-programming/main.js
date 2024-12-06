// Javascript Higher-Order Functions

const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2004 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// for (let i = 0; i < companies.length; i++) {
//     console.log(companies[i]);
// }

// forEach
companies.forEach(function (company) {
    console.log(company);
});

// filter
const canDrink = ages.filter(age => age >= 21);
console.log(canDrink);

const retailCompanies = companies.filter(company => company.category === 'Retail');
console.log(retailCompanies);

// map
const companyName = companies.map(company => company.name);
console.log(companyName);

const agesSquare = ages.map(age => Math.sqrt(age));
console.log(agesSquare);

const ageMap = ages.map(age => Math.sqrt(age)).map(age => age * 2);
console.log(ageMap);

// sort
const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));
console.log(sortedCompanies);

const sortAges = ages.sort((a, b) => a - b);
console.log(sortAges);

// reduce
const ageSum = ages.reduce((total, age) => total + age, 0);
console.log(ageSum);

const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0);
console.log(totalYears);

// Pure Functions

// Rule 01. The same input always gives the same output
const add = (x, y) => x + y;
console.log(add(3, 5));

const fullName = (first, last) => `${first} ${last}`;
console.log(fullName('Sam', 'Smith'));

//Rule 02. No side effects

//example 01:
let x = 1;
const increment = () => x += 1;
console.log(increment());
console.log(x);

//example 02:
const myArray = [1, 2, 3];
const addToArray = (array, data) => {
    array.push(data);
    return array;
};

console.log(addToArray(myArray, 4));
console.log(myArray);