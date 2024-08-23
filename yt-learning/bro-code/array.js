// array = a varible like structure that can hold more than 1 value

let fruits = ["apple", "orange", "banana"];

fruits[3] = "coconut";
// fruits.push("coconut")
// fruits.pop()
// fruits.shift()
// fruits.unshift("coconut")

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);

console.log(fruits.length);

console.log(fruits.indexOf("apple"));

// printing elements of array
for (let i=0; i<fruits.length; i++) {
    console.log(fruits[i]);
}

// printing element of array in reverse

for (let i=fruits.length-1; i>=0; i--) {
    console.log(fruits[i]);
}

for (let fruit of fruits) {
    console.log(fruit);
}

fruits.sort().reverse()

for (let fruit of fruits) {
    console.log(fruit);
}

let friends = ["mihir", "aryan", "sonu", "anuj", "krish", "kuldeep", "yogesh", "karan", "mouse", "phoniex"]

for (let friend of friends) {
    console.log(friend);
}