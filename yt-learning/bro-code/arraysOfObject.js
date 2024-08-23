
const fruits = [
    {
        name: "apple",
        color: "red",
        calories: 95
    },
    {
        name: "orange",
        color: "orange",
        calories: 45
    },
    {
        name: "banana",
        color: "yellow",
        calories: 105
    },
    {
        name: "coconut",
        color: "white",
        calories: 159
    },
    {
        name: "pineapple",
        color: "yellow",
        calories: 37
    },
];

console.log(fruits);

fruits.push({
    name: "greps",
    color: "purple",
    calories: 32
});

fruits.unshift({
    name: "kiwi",
    color: "pink",
    calories: 162
});

// forEach()
console.log("+++++++++++ forEach() ++++++++++");

fruits.forEach((fruit) => {
    console.log(fruit.calories);
});


// map()
console.log("+++++++++++ map() ++++++++++");

const fruitArrayWithIndex = fruits.map((fruit, index) => {
    return `${fruit.name} at index ${index}`;
})
console.log(fruitArrayWithIndex);

const fruitNames = fruits.map((fruit) => {
    return fruit.name;
});
console.log(fruitNames);

const fruitColors = fruits.map((fruit) => {
    return fruit.color;
});
console.log(fruitColors);

const fruitCalories = fruits.map((fruit) => {
    return fruit.calories;
});
console.log(fruitCalories);


// filter()
console.log("+++++++++++ filter() ++++++++++");

const yellowFruits = fruits.filter((fruit) => {
    return fruit.color == "yellow";
});
console.log(yellowFruits);


const lessCaloriesFruits = fruits.filter((fruit) => {
    return fruit.calories < 100;
});
console.log(lessCaloriesFruits);

const highCaloriesFruits = fruits.filter((fruit) => {
    return fruit.calories > 100;
});
console.log(highCaloriesFruits);


// reduce()
console.log("+++++++++++ reduce() ++++++++++");

const maxCalorieFruit = fruits.reduce((max, fruit) => {
    return max.calories > fruit.calories ? max : fruit
})
console.log(maxCalorieFruit);

const minCalorieFruit = fruits.reduce((min, fruit) => {
    return min.calories < fruit.calories ? min : fruit
})
console.log(minCalorieFruit);
