// map = accepts a callback and apply that function to each element of an array, then return a new array

// map returns new array
// map do not change original array

// Example-1

let numbers = [1, 2, 3, 4, 5];

console.log("++++++++++ using-callback ++++++++++");

console.log("+++++ double-number +++++");

let doubleArr = numbers.map(doubleNumber);
console.log(doubleArr);

console.log("+++++ square-number +++++");

let squareArr = numbers.map(squareNumber);
console.log(squareArr);

console.log("+++++ cube-number +++++");

let cubeArr = numbers.map(cubeNumber);
console.log(cubeArr);


function doubleNumber(element) {
    return element * 2
}

function squareNumber(element) {
    return Math.pow(element, 2)
}

function cubeNumber(element) {
    return Math.pow(element, 3)
}

console.log("++++++++++ short-hand ++++++++++");

console.log("+++++ double-number +++++");

let doubleNumberArr = numbers.map(element => element * 2);
console.log(doubleNumberArr);

console.log("+++++ square-number +++++");

let squareNumberArr = numbers.map(element => Math.pow(element, 2));
console.log(squareNumberArr);

console.log("+++++ cube-number +++++");

let cubeNumberArr = numbers.map(element => Math.pow(element, 3));
console.log(cubeNumberArr);


// Example-2

let names = ["mihir", "harshil", "nishant", "krish", "kuldeep"];

console.log("++++++++++ using-callback ++++++++++");

let refineNames = names.map(makeFirstUpper)

function makeFirstUpper(element) {
    return element[0].toUpperCase() + element.slice(1).toLowerCase();
}

console.log(refineNames);

console.log("++++++++++ short-hand ++++++++++");

let refineNames1 = names.map((name) => {
    return name[0].toUpperCase() + name.slice(1).toLowerCase();
})

console.log(refineNames1);


// Example-3

const dates = ["2021-02-19", "2022-11-09", "2023-10-21"];

console.log("dates:", dates);

console.log("+++++ using-callback +++++");

const formattedDateArr = dates.map(formatDate);
console.log(formattedDateArr);

function formatDate(element) {
    const parts = element.split("-");
    return `${parts[2]}/${parts[1]}/${parts[0]}`;
}


console.log("+++++ short-hand +++++");

const formattedDateArr1 = dates.map((element) => {
    const parts = element.split("-");
    return `${parts[2]}/${parts[1]}/${parts[0]}`;
})
console.log(formattedDateArr1);
