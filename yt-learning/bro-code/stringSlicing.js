// string slicing = creating a substring from a portion of another string
// => string.slice(start, end)

const fullName = "Mihir Menon"

let firstName = fullName.slice(0, 5)
let lastName = fullName.slice(6, 11)
// let lastName = fullName.slice(-5)
console.log(firstName);
console.log(lastName);

let firstChar = fullName.slice(0, 1)
let lastChar = fullName.slice(-1)
console.log(firstChar);
console.log(lastChar);

let firstName1 = fullName.slice(0, fullName.indexOf(" "))
let lastName1 = fullName.slice(fullName.indexOf(" ") + 1)
console.log(firstName1);
console.log(lastName);


// Exanple-2


const email = "mihirxtc@gmail.com";

let username = email.slice(0, email.indexOf("@"));
let extension = email.slice(email.indexOf("@") + 1);

console.log(`username: ${username}`);
console.log(`extension: ${extension}`);
