// forEach() = method used to iterate over the elements of an array and apply a specific function (callback) to each element

// array.forEach(callback) 

// Example-1

let numbers = [1, 2, 3, 4, 5];

console.log("++++++++++ using-callback ++++++++++");

console.log("+++++ display number +++++");

numbers.forEach(displayNumber);

console.log("+++++ double number +++++");

numbers.forEach(doubleNumber);

console.log("+++++ square number +++++");

numbers.forEach(squareNumber);

function displayNumber(element) {
    console.log(element);
}

function doubleNumber(element) {
    console.log(element * 2);
}

function squareNumber(element) {
    console.log(element * element);
}

// short-form of above example

console.log("++++++++++ short-hand ++++++++++");

console.log("+++++ display number +++++");

numbers.forEach(element => console.log(element));

console.log("+++++ double number +++++");

numbers.forEach(element => console.log(element * 2));

console.log("+++++ square number +++++");

numbers.forEach(element => console.log(element * element));


// Example-2

let fruits = ["apple", "orange", "mango", "banana", "coconut"];

console.log("++++++++++ using-callbacks ++++++++++");

console.log("+++++ display-fruits +++++");

fruits.forEach(displayFruits);

console.log("+++++ uppercase-fruits +++++");

fruits.forEach(upperCaseFruits);

console.log("+++++ uppercase-firstChar +++++");

fruits.forEach(uppercaseFirstCharFruits);

// separate functions
function displayFruits(fruit) {
    console.log(fruit);
}

function upperCaseFruits(fruit) {
    console.log(fruit.toUpperCase());
}

function uppercaseFirstCharFruits(fruit) {
    console.log(fruit[0].toUpperCase() + fruit.slice(1).toLowerCase());
}

console.log("++++++++++ short-hand ++++++++++");

console.log("+++++ display-fruits +++++");

fruits.forEach(element => console.log(element));

console.log("+++++ uppercase-fruits +++++");

fruits.forEach(element => console.log(element.toUpperCase()));

console.log("+++++ uppercase-firstChar +++++");

fruits.forEach((element) => {
    console.log(element[0].toUpperCase() + element.slice(1).toLowerCase());
});
