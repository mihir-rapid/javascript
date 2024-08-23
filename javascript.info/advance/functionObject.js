// Function Objects

// name property of function
let func = function() {
    console.log(func.name);
}
func();

function f(hello = function() {}) {
    console.log(hello.name);
}
f();


// name property -> obj methods
let obj = {
    description: 'desc',
    countDesc() {

    },
    countObj() {

    }
}

console.log(obj.countDesc.name);
console.log(obj.countObj.name);


// *

let arr = [2, function f() {}];
console.log(arr[1].name);


// => length property

function f1(a) {};
function f2(a, b) {};
function many(a, b, ...many) {};

console.log(f1.length);
console.log(f2.length);
console.log(many.length);


// => Custom properties

function visiteWebsite() {
    console.log('thanks for visit!');
    visiteWebsite.counter++;
}
visiteWebsite.counter = 0;

visiteWebsite();
visiteWebsite();
visiteWebsite();

console.log(`total website visits: ${visiteWebsite.counter}`);


// => Named Function Expression (NFE)

let sayHi = function func(who) {
    if (who) {
        console.log(`Hello, ${who}`);
    } else {
        func('guest');
    }
}

let welcome = sayHi;
sayHi = null;

welcome();


// Tasks

// task-1
function makeCounter() {
    let count = 0;
    function counter() {
        return count++;
    }
    counter.set = value => count = value;
    counter.decrease = () => count--;
    return counter;
}

console.log(makeCounter());