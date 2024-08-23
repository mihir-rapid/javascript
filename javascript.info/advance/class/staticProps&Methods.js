
// static methods

// => Assigning a method to the class as whole, such methods are called static methods

// => static methods aren't available for individual objects

// => declaring a methods in class but not providing access to the individual methods or objects are static methods


// => examples 

// * lowercasing email from userinput string

class Email {
    constructor(email) {
        this.email = Email.lowercaseEmail(email)
    }

    acknowledgement() {
        console.log(`Welcome to dashboard ${this.email}`)
    }

    static lowercaseEmail(email) {
        return email.toLowerCase()
    }
}

// let email = prompt("Enter your email address", "abc@gmail.com");
let email = "MIHIR.MENON@RAPIops.coM"
let user1 = new Email(email);

user1.acknowledgement();



console.log("---------- yo ----------");



// * class bound static method to convert object into JSON (stringify)

class Stringify {
    constructor(obj) {
        this.obj = obj
    }

    printObject() {
        console.log('original obj:', this.obj);
        console.log('stringified obj:', Stringify.stringifyObj(this.obj));
    }

    static stringifyObj(obj) {
        return JSON.stringify(obj, null, 2);
    }
}

let obj = {
    name: "Mihir",
    age: 21
}

let obj1 = new Stringify(obj);
obj1.printObject();



console.log("---------- yo ----------");



// * make a static method to randomize an array

class Array {
    constructor(arr) {
        this.arr = Array.randomizeArr(arr)
    }

    static randomizeArr(arr) {
        return arr.sort(() => Math.random() - 0.5);
    }

    logArr() {
        console.log(this.arr);
    }
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let newArr = new Array(arr);

newArr.logArr();