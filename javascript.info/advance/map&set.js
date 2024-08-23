// map & set

// ***** Map ***** //

// => map is collection of keyed data items just like an object, difference is that map allows key of any type

// => map methods & properties

// * new Map() – creates the map.
// * map.set(key, value) – stores the value by the key.
// * map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
// * map.has(key) – returns true if the key exists, false otherwise.
// * map.delete(key) – removes the element (the key/value pair) by the key.
// * map.clear() – removes everything from the map.
// * map.size – returns the current element count.


// example

let map = new Map();    // creates the map

map.set('1', 'str1');   // stores the value by the key
map.set(1, 'num1');
map.set(true, 'bool1');

console.log(map.get('1'));  // returns the value by the key
console.log(map.get(1));
console.log(map.get(true));

console.log(map.has(1));    // returns true if key exists

console.log(map);
console.log(map.size);  // returns the current element count

map.delete(1);  // removes the element (key/value pair) by the key
console.log(map);
console.log(map.size);

map.clear();    // removes everything from the map
console.log(map);
console.log(map.size);



// *** unlike objects, keys are not converted to strings ***


// * map can also use object as key

let john = { name: 'john' }
let visitersCount = new Map();

visitersCount.set(john, 123);
console.log(visitersCount); // set whole object as key


// => same thing dosen't apply to objects

/*
let john = { name: "John" };
let ben = { name: "Ben" };

let visitsCountObj = {}; // try to use an object

visitsCountObj[ben] = 234; // try to use ben object as the key
visitsCountObj[john] = 123; // try to use john object as the key, ben object will get replaced

// That's what got written!
console.log( visitsCountObj["[object Object]"]); // 123, ben overwrriten
*/




// => Iteration over map

let recipeMap = new Map([
    ['cucumber', 500],
    ['tomato', 350],
    ['onion', 50]
]);

console.log(recipeMap);

for (let vegetables of recipeMap.keys()) {
    console.log(vegetables);
};

for (let amount of recipeMap.values()) {
    console.log(amount);
};

for (let entries of recipeMap.entries()) {
    console.log(entries);
};



// => forEach on Map

recipeMap.forEach((key, value, map) => {
    console.log(key, value, map);
});



// => Object.entries: Map from Object

let map1 = new Map([
    ['1', 'str1'],
    [1, 'num1'],
    [true, 'bool1']
]);

console.log(map1.get('1'));



// => creating Map from plain object

let user = {
    name: 'mihir',
    age: 20
}

let userMap = new Map(Object.entries(user));

console.log(userMap.get('name'));
console.log(userMap.get('age'));
console.log(userMap);



// => Object.fromEntries: Object from Map
// * given an array of [key, value] pairs, it creates an object from them:

let prices = Object.fromEntries([
    ['cucumber', 500],
    ['tomato', 350],
    ['onion', 50]
]);

console.log(prices.tomato);


// * We can use Object.fromEntries to get a plain object from Map.

// * example

let usersMap = new Map();
usersMap.set('Mihir', 21);
usersMap.set('Alice', 30);
usersMap.set('Bob', 25);
usersMap.set('Charlie', 28);
usersMap.set('Diana', 35);

console.log(usersMap);

// converting map to obj (map -> obj)

// let usersObj = Object.fromEntries(usersMap.entries());

// short-hand
let usersObj = Object.fromEntries(usersMap);    // usersMap returns key/values same as .entries()

console.log(usersObj);





// ***** Set ***** //

// A Set is a special type collection – “set of values” (without keys), where each value may occur only once.

// Its main methods are:

// * new Set([iterable]) – creates the set, and if an iterable object is provided (usually an array), copies values from it into the set.
// * set.add(value) – adds a value, returns the set itself.
// * set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.
// * set.has(value) – returns true if the value exists in the set, otherwise false.
// * set.clear() – removes everything from the set.
// * set.size – is the elements count.

// main feature of Set is that repeated calls of set.add(value) with the same value don’t do anything. That’s the reason why each value appears in a Set only once.

// * example, we have visitors coming, and we’d like to remember everyone. But repeated visits should not lead to duplicates. A visitor must be “counted” only once.


let set = new Set();

let mihir = { name: "mihir" };
let krish = { name: "krish" };
let kuldeep = { name: "kuldeep" };

set.add(mihir);
set.add(krish);
set.add(kuldeep);
set.add(mihir);
set.add(krish);
set.add(kuldeep);

console.log(set.size);  // 3, elements don't repeat

for (let user of set) {
    console.log(user);
}


// => Set is much better optimized internally for uniqueness checks.


// => Iteration over Set

let fruitSet = new Set(["Orange", "Banana", "Mango"]);

for (let value of fruitSet) {
    console.log(value);
}

fruitSet.forEach((value, valueAgain, set) => {
    console.log(value, valueAgain, set);
});


console.log(fruitSet.keys());
console.log(fruitSet.values());
console.log(fruitSet.entries());




// Tasks

// task-1

function unique(values) {
    let uniqueValues = [...new Set(values)];
    return uniqueValues;
}

let values = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O"];
console.log(unique(values));



// task-2

function aclean(arr) {

    let map = new Map();

    for (let word of arr) {
        let sorted = word.toLowerCase().split('').sort().join('');
        map.set(sorted, word);
    }

    return Array.from(map.values());
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
console.log(aclean(arr));


// task-3

let map2 = new Map();

map2.set("name", "John");

// let keys = Array.from(map2.keys());
let keys = [...map2.keys()];

// Error: keys.push is not a function
keys.push("more");
