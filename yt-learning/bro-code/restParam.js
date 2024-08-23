// Rest Parameters => (...rest) allows a function to work with a variable, number of argumnets by bundling them into an array

// spread => expands an array into seperate elements 
// rest => bundles seperate elements into an array

function openFridge(...foods) {
    console.log(...foods);
}

function getFood(...foods) {
    return foods
}

const food1 = "pizza";
const food2 = "burger";
const food3 = "milk";
const food4 = "sushi";
const food5 = "ramen";

// openFridge(food1, food2, food3, food4, food5)

const foods = getFood(food1, food2, food3, food4, food5)
console.log(foods);



function sum(...numbers) {
    let res = 0
    for (let number of numbers) {
        res += number
    }
    return res
}

const total = sum(1, 2, 3, 4)
console.log(`Your total is ${total}`);


function getAverage(...numbers) {
    let res = 0
    for (let number of numbers) {
        res += number
    }
    return res / numbers.length
}

const total1 = getAverage(75, 100, 95, 80, 50)
console.log(total1);



function combineStrings(...strings) {
    return strings.join(" ")
}

const fullName = combineStrings("Mr.", "SpongeBob", "SquarePants", "III")
console.log(fullName);