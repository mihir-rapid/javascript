// destructuring = extract values from arrays & objects, then assign them to variables in convinient way
// [] = to perform array destructring
// {} = to perform object destructing


console.log(" ++++++++++ example-1 ++++++++++ ");
// swap values of two variables

let a = 1;
let b = 2;

[a, b] = [b, a];

console.log(a);
console.log(b);


console.log(" ++++++++++ example-2 ++++++++++ ");
// swap values of array

const colors = ["red", "green", "blue", "black", "white"];

[colors[0], colors[4]] = [colors[4], colors[0]];

console.log(colors);


console.log(" ++++++++++ example-3 ++++++++++ ");
// assign array elements to variable

const [firstColor, secondColor, thirdColor, ...extraColors] = colors;

console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);
console.log(extraColors);


console.log(" ++++++++++ example-4 ++++++++++ ");
// extract values from object

const person1 = {
    firstName: "Mihir",
    lastName: "Menon",
    age: 20,
    occupation: "student"
}

const person2 = {
    firstName: "Krish",
    lastName: "Aagja",
    age: 18
}

const {firstName, lastName, age, occupation="unemployed"} = person2;

console.log(firstName);
console.log(lastName);
console.log(age);
console.log(occupation);


// Example-5

function displayPerson({firstName, lastName, age, occupation="unemployed"}) {
    console.log(`Name: ${firstName}`);
    console.log(`Surname: ${lastName}`);
    console.log(`Age: ${age}`);
    console.log(`Occupation: ${occupation}`);
}

displayPerson(person2)
