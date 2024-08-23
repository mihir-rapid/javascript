
// => basic syntax

class User {
    constructor(name) {
        this.name = name
    }

    greet() {
        console.log(`How have you been ${this.name}`)
    }
}

let user1 = new User("Ahan")
user1.greet()


// type of class
console.log(typeof User);   // function

// comparing constructors
console.log(User == User.prototype.constructor)



// => difference between class & constructor function

// 1. Function created by class is labelled by a special internal property [[IsClassConstructor]]: true, so not same as creating manually

// 2. Function constructor is required to call with "new" keyword, class don't

// 3. Class methods are non-enumerable

// 4. Code inside class is always in "use strict" mode 



// => Class expression

let Vehicle = class {
    print() {
        console.log("Motorcycle")
    }
}

let mouse = new Vehicle()
mouse.print()



// => getter/setter

class Device {

    constructor(name) {
        this.name = name
    }

    get name() {
        return this._name;
    }

    set name(value) {
        if (value.length < 4) {
            console.log("too short!");
            return
        }
        this._name = value
    }
}

let device1 = new Device("Mouse")
console.log(device1.name);


let device2 = new Device("abc")
device2.name



// Class fields

class Employee {
    name = "Elon Musk"
    // name1 = prompt("Enter your name", 'name');
    print() {
        console.log(`Hello, ${this.name}`)
    }
}

let emp1 = new Employee()
emp1.print()

console.log(emp1.name)
console.log(Employee.prototype.name)   // undefined



// Making bound method with class field

class Button {
    constructor(value) {
        this.value = value
    }
    click = () => {
        console.log(this.value)
    }
}

let button = new Button("Component")
setTimeout(button.click, 1000)  // undefined

// soltion1, wrapper class
// setTimeout(() => {button.click()}, 1000)
