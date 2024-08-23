// Rest parameters ...

// example
function getItems(a, b, ...c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

getItems("One", "Two", "Three", "Four", "Five");


// Spread syntax ...var

let string = 'mouse';
let newString = [...string].join('');

console.log(newString);


// => clonning array 

let arr = [1, 2, 3, 4, 5];
let clonnedArr = [...arr];
arr.pop(); console.log(arr);
console.log(clonnedArr);


// => clonning object

let obj = {
    description: 'best mouse',
    color: 'black',
    price: 499
}

let clonnedObj = {...obj};

console.log(clonnedObj);

console.log(JSON.stringify(obj) == JSON.stringify(clonnedObj)); // same props

console.log(obj == clonnedObj); // difference references