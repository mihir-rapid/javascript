
let object = {
    name: "Mihir",
    age: 21,
    city: "Ahmedabad",
    printDetails: function() {
        console.log(`${this.name} is from ${this.city}`);
    }
}

let object2 = {
    city: "New Jersey",
    __proto__: object
}

object.printDetails();
object2.printDetails();


Function.prototype.helloWorld = function() {
    return `Hello, World User`
}

function fn() {}

// console.log(fn.helloWorld());


// real-world example

String.prototype.trueLength = function() {
    console.log(`True length is: ${this.trim().length}`);
}

let name = "Mihir   ";

console.log(name.length);
name.trueLength();