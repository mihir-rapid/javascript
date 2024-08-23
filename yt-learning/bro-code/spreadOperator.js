// Spread Operator = ...allows an iterable such as an array or string to be expended into seperate elements (unpack the elements)

let numbers = [1, 2, 3, 4, 5];
let maximum = Math.max(...numbers);
let minimum = Math.min(...numbers);


console.log(maximum);
console.log(minimum);


let username = "mihirxtc"
let letters = [...username].join("-")
console.log(letters);


let fruits = ["apple", "orange", "banana"]
let vegetables = ["carrots", 'celery', "tomatos"]

let food = [...fruits, ...vegetables, "milk", "boost"]

console.log(food);
