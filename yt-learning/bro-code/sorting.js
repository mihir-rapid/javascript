// sorting = In javascript elements are sorted as lexographical order (alphabates, number, symbols)


// Example-1

let numbers = [2, 5, 6, 8, 7, 9, 3, 4, 1, 10];

console.log("unsorted:", numbers);

let sortedNumbers = numbers.sort((a, b) => a-b);
console.log(sortedNumbers);


// Example-2

let shoppingCart = [
    {
        name: "keyboard",
        price: 1599
    },
    {
        name: "mouse",
        price: 499
    },
    {
        name: "waterbottle",
        price: 399
    },
    {
        name: "bag",
        price: 1299
    },
    {
        name: "book",
        price: 49
    }
];


shoppingCart.sort((itemA, itemB) => itemA.price - itemB.price);

console.log("sorted shoppingCart:", shoppingCart);