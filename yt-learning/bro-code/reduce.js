// reduce() = reduces the elements of array to the single value


// Example-1
const prices = [25, 30, 10, 25, 15, 20];

console.log("+++++ using-callback +++++");

const total = prices.reduce(sum);
console.log(`Your total amount is: $${total.toFixed(2)}`);

function sum(accumulator, element) {
    return accumulator + element;
}

console.log("+++++ short-hand +++++");

const totalAmount = prices.reduce((prev, element) => prev + element, 5);
console.log(`Your total amount is: $${totalAmount.toFixed(2)}`);


// Example-2

const grades = [60, 70, 65, 78, 90, 98, 55, 35, 83, 69];

console.log("+++++ using-callback +++++");

let maxValue = grades.reduce(getMax);
console.log(maxValue);

function getMax(prev, element) {
    return Math.max(prev, element);
}

console.log("+++++ short-hand +++++");

let minValue = grades.reduce((prev, element) => Math.min(prev, element));
console.log(minValue);
