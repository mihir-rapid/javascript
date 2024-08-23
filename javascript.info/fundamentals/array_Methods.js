// arr.concat(arr1, arr2)

let arr = [1, 2, 3];
let arr1 = [4, 5, 6];
let arr2 = [7, 8, 9];

let fullArr = arr.concat(arr1, arr2);
console.log(fullArr);

// find(), findIndex() & findLastIndex()

let users = [
    { id: 1, name: "Mihir"},
    { id: 2, name: "Harshil"},
    { id: 3, name: "Nishant"},
    { id: 4, name: "Mihir"}
];

let user = users.find((index) => {
    return index.id = 3
});

console.log(user);

let user2 = users.findIndex((index) => {
    return index.id = 1
});

console.log(user2);

// TypeError: <node env>
// let user3 = users.findLastIndex((index) => {
//     return index.name == "Mihir";
// })

// console.log(user3);

// arr.forEach();

let friends = ["Mihir", "Nishant", "Harshil", "Aman", "Kamal", "Rohan", "Sonu", "Samay", "Krish", "Sanjay"];

friends.forEach((item, index, array) => {
    console.log(`${item} : ${index} : [${array}]`);
});


// includes(), indexOf()

let cart = ["monitor", "cpu", "keyboard", "mouse", "adapter"];

console.log(cart.includes("mouse"));

console.log(cart.indexOf("monitor"));
console.log(cart.indexOf("keyboard"));
console.log(cart.indexOf("adapter"));


// arr.sort()

const unsortedArray = [
    23, 45, 12, 67, 34, 9, 81, 3, 56, 29,
    41, 88, 17, 6, 72, 15, 37, 50, 8, 63,
    92, 19, 54, 31, 78, 11, 68, 24, 77, 2,
    39, 85, 16, 47, 5, 74, 28, 61, 95, 22,
    43, 87, 14, 69, 32, 79, 7, 52, 97, 26
];

unsortedArray.sort((a, b) => {
    return a - b
});

console.log(unsortedArray);

// sort using new variable
// const sortedArray = unsortedArray.sort((a, b) => {
//     return a - b
// })

// console.log(sortedArray);


// Example => arr.sort()

let products=[
    {
        name : "Laptop",
        price : 1000,
        count : 6
    },
    {
        name : "Desktop",
        price : 1500,
        count : 3
    },
    {
        name : "Mobile",
        price : 500,
        count : 10
    }
];

products.sort((a, b) => {
    return a.price - b.price
});

console.log(products);


// => difference between indexOf() & findIndex()

let items = [
    {id: 1, name: "mouse"},
    {id: 2, name: "keyboard"},
    {id: 3, name: "bagpack"},
    {id: 4, name: "mouse"},
    {id: 5, name: "water-bottle"},
    {id: 6, name: "laptop"},
    {id: 7, name: "chair"},
    {id: 8, name: "mouse"},
];

// => indexOf() => used for straight forward array
// let index = items.indexOf({id:1, name: "mouse"})
// console.log(index);

// => findIndex() => used for array of object
let index = items.findIndex(item => item.name == 'water-bottle');
console.log(index);