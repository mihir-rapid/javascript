// filter() = creates a new array by filtering out elements

let numbers = [1, 2, 3, 4, 5];

console.log("+++++ using-callbacks +++++");

let odds = numbers.filter(checkOdd);
console.log(odds);

let evens = numbers.filter(checkEven);
console.log(evens);

function checkEven(element) {
    if (element % 2 == 0) {
        return element;
    }
}

function checkOdd(element) {
    if (element % 2 != 0) {
        return element;
    }
}

console.log("+++++ short-hand +++++");

let even = numbers.filter(element => element%2==0);
let odd = numbers.filter(element => element%2!=0);

console.log(odd);
console.log(even);


// Example-2

let students = [15, 17, 18, 19, 22, 21, 16, 14];

let adultStudents = students.filter(student => student >= 18);
let childStudents = students.filter(student => student < 18);

console.log(adultStudents);
console.log(childStudents);


// Example-3

let fruits = ["apple", "kiwi", "orange", "pineapple", "coconut", "dragonfruit", "cherry"];

let fruitsWithShortName = fruits.filter(fruit => fruit.length <= 6);
console.log(fruitsWithShortName);

let fruitsWithLongName = fruits.filter(fruit => fruit.length > 6);
console.log(fruitsWithLongName);
