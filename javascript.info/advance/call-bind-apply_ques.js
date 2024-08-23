// call, bind & apply questions

// => 1. What is call
let a = {
    value: 'a'
}

// generic function
let printVal = function(count) {
    console.log(`value => ${this.value} & count => ${count}`);
}

// call
printVal.call(a, 10);   // argument from second can be individual


// => 2. What is apply
let b = {
    value: 'b'
}

// apply
printVal.apply(a, [20]);    // second argument must be an arrayLike


// => 3. What is bind
let c = {
    value: 'c'
}

// bind
let bindedFunc = printVal.bind(c, 30);  // returns a reusable function
bindedFunc();


// => 4. Guess the output
let age = 10;

let person1 = {
    name: 'John Doe',
    age: 20,
    getAge() {
        console.log(this.age);
    }
}

let person2 = { age: 30 };

person1.getAge.call(person2);   // 30


// => 5. Guess the output

var exp = 'beginner';

setTimeout(() => {
    let exp = 'intermediate';
    let data = {
        exp: 'advance',
        getExp() {
            return this.exp;
        }
    }

    console.log(data.getExp());
    console.log(data.getExp.call(this));    // beginner

}, 0);


// => 6. Call printAnimals such that it prints all the animals in object

const animals = [
    { species: 'Lion', name: 'King'},
    { species: 'Whale', name: 'Queen'},
];

function printAnimals(i) {
    this.print = function() {
        console.log(`=> ${i} ${this.species} : ${this.name}`);
    }
    this.print();
}

for (let i=0; i<animals.length; i++) {
    printAnimals.call(animals[i], i);
}


// => 7. Append an array to another array

const arr = ['a', 'b', 'c'];
const elements = [1, 2, 3];

arr.push.apply(arr, elements);

console.log(arr);


// => 8. Enhance built in js function, find min-max from arr

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(Math.max.apply(null, numbers));
console.log(Math.min.apply(null, numbers));

