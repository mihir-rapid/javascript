// ternary operator = a shortcut to if-else statement

// Exercise-1
let age = 17
let message = (age >= 18) ? "You're an adult" : "You're a minor"
console.log(message);


// Exercise-2
let time = 11
let greeting = (time < 12) ? "Good Morning" : "Good Afternoon"
console.log(greeting);


// Exercise-3
let isStudent = true
let msg = isStudent ? "You are a student" : "You are not student"
console.log(msg);


// Exercise-4
let purchaseAmount = 100
let discount = (purchaseAmount >= 100) ? 10 : 0;
console.log(`Your total is $${purchaseAmount - purchaseAmount * (discount / 100)}`);
