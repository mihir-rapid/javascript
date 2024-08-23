// constructor, operator "new"

// => constructor functions are regular functions, with conventions like
// 1. They are named with capital letter first
// 2. They should be executed with new keyword

// * example

function User(name, isAdmin) {
    this.name = name;
    this.isAdmin = isAdmin;
}

let user1 = new User('Mihir', true);

console.log(user1);


// => when the function is executed with "new", it does following things:

// 1. new empty object is created & assigned to this
// 2. function body executes, usually modifies this, adds new propertries to it
// 3. value of this is returned

// => behind the scenes in "new" constructor:
/*
    function User(name) {
        // this = {};  (implicitly)
      
        // add properties to this
        this.name = name;
        this.isAdmin = false;
      
        // return this;  (implicitly)
      }
*/


// => main purpose of constructors – to implement reusable object creation code.


// => constructor mode test: "new.target"

// * we can check whether it was called with new or without it, using a special new.target property.
// * It is undefined for regular calls and equals the function if called with new:

function User1() {
    console.log(new.target);
}

User1();
new User1();


// => We can also make both new and regular calls to do the same

function User2(name) {
    if (!new.target) {
        return this.name = name;
    };
    this.name = name;
};

let u1 = new User2('Elon');
let u2 = User2('Jeff');

console.log(u1, u2);



// => return from constructor

// * constructor do not have return statement
// * there task is to write all necessary stuff into this
// * & this automatically becomes result

function BigUser() {
    this.name = 'John';
    return {
        name: 'King-Kong'
    };
};

console.log(new BigUser());
console.log(new BigUser().name);


// * example with empty return

function BigUser1() {
    this.name = 'John';
    return;
}

console.log(new BigUser1());
console.log(new BigUser1().name);


// => Methods in constructor

function User3() {
    this.name = 'John';
    this.sayHi = function() {
        console.log(`Hello ${this.name}`);
    };
};

let user3 = new User3();
console.log(user3);
user3.sayHi();



// => example of constructor function

function Employee(name, surname, age, email, designation, uniqueId) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.email = email;
    this.designation = designation;
    this.uniqueId = uniqueId;
    this.company = "Rapidops Inc";

    this.greetingsFunction = function() {
        console.log(`Mr. ${this.name} ${this.surname} welcome to our curious team at ${this.company}.`);
    };

    this.introduceFunction = function() {
        console.log(`Hey, everyone here's our new colleuge ${this.name}, wish him luck!`);
    };

    this.acknowledgementFunction = function() {
        console.log(`Welcome onboard Mr. ${this.name}, here's your official email id '${this.email}' & your uniqeId is ${this.uniqueId}`);
    };
};

let name = 'Mihir';
let surname = 'Menon';
let age = 20;
let email = 'mihir.menon@rapidops.co';
let designation = 'software engineer intern';
let uniqueId = 202401019890;

let emp1 = new Employee(name, surname, age, email, designation, uniqueId);

console.log(emp1);
emp1.greetingsFunction();
emp1.introduceFunction();
emp1.acknowledgementFunction();



// => summary

// * Constructor functions or, briefly, constructors, are regular functions, but there’s a common agreement to name them with capital letter first.
// * Constructor functions should only be called using new. Such a call implies a creation of empty this at the start and returning the populated one at the end.



// Tasks 

// task-1
let obj = {};
function A() { return obj };
function B() { return obj };

let a = new A();
let b = new B();

console.log(a == b);


// task-2
function Calculator() {
    this.read = function() {
        this.a = 5;
        this.b = 10;
    };

    this.sum = function() {
        return this.a + this.b;
    };

    this.mul = function() {
        return this.a * this.b;
    };
};

let calc = new Calculator(10, 2)
calc.read();
console.log(calc.sum());
console.log(calc.mul());


// task-3
function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function() {
        this.value += +prompt('Enter value');
    };
};

let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
console.log(accumulator.value);
