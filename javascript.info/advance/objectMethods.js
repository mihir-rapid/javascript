let user = {
    firstName: 'Mihir',
    lastName: 'Menon',
    age: 20,
    email: 'mihir.menon@rapidops.co',
    occupation: 'student'
}


let userKeys = Object.keys(user);
let userValues = Object.values(user);
let userEntries = Object.entries(user);

console.log(userKeys);
console.log(userValues);
console.log(userEntries);


// looping over object keys
for (let keys of Object.keys(user)) {
    console.log(keys);
}

// looping over object values
for (let keys of Object.values(user)) {
    console.log(keys);
}

// looping over object entries
for (let keys of Object.entries(user)) {
    console.log(keys);
}



// => transforming array into object

let fruitsArray = [['cucumber', 500], ['tomato', 300], ['onion', 50]];
let fruitsObject = Object.fromEntries(fruitsArray);
console.log(fruitsObject);


// => transforming object to array

// let vehicleObject = {
//     activa: 75000,
//     motorcycle: 100000,
//     fourWheeler: 500000,
// }

// let vehicleArray = Array.from(Object.entries(vehicleObject));

// console.log(vehicleArray);



// => Iterating over transformed object

let prices = {
    banana: 1,
    orange: 2,
    mango: 4
};

let doublePrices = Object.fromEntries(
    Object.entries(prices).map(entry => [entry[0], entry[1] * 2])
);

console.log(doublePrices.mango);




// Tasks

// task-1
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

let sum = 0;

for (let salary of Object.values(salaries)) {
    if (!salary) sum = 0;
    sum += salary;
}

console.log(sum);


// task-2
let user1 = {
    name: 'John',
    age: 30,
    email: 'mi'
}

function countProps(user) {
    return Object.keys(user).length;
}

console.log(countProps(user1));