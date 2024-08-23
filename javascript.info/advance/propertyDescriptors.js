
// property flags

// 1. writable => true, value can be changed
// 2. enumerable => true, listed in loops
// 3. configurable => true, properties can be deleted & attributes can be modified


let user = {
    name: "Mihir"
}

let descriptor = Object.getOwnPropertyDescriptor(user, 'name');

// console.log(descriptor);

// define properties
let user1 = {};
Object.defineProperty(user1, 'name', {
    value: "Vidhi",
});

let descriptor1 = Object.getOwnPropertyDescriptor(user1, 'name');

console.log(descriptor1);

user1.name = 'Mihir';

console.log(descriptor1);


// 

'use strict';

let emp1 = {name: 'John'}

Object.defineProperty(emp1, 'name', {
    writable: false
});


emp1.name = 'kdjal'

console.log(emp1);


// enumerable


let device = {
    description: "Mouse",
    toString() {
        console.log(this.description);
    }
}

Object.defineProperty(device, 'toString', {
    enumerable: false
});

for (let key in device) {
    console.log(key);
    
}


// configurable

"use strict";
let Math = {
    PI: 3.141592653589793
};

Object.defineProperty(Math, 'PI', {
    writable: false
})

Math.PI = 69;

console.log(Math);


// ** configurable: false prevents changes of property flags and its deletion, while allowing to change its value.

"use strict";
let obj = {
    name: "WaterBottle"
}

Object.defineProperty(obj, 'name', {
    writable: false,
    configurable: false
});     // forever sealed constant

delete obj.name;

console.log(obj);


// clonning an object

let obj1 = {
    name: 'Mihir',
    age: 20
};

let clone = Object.defineProperties({}, Object.getOwnPropertyDescriptors(obj1));

delete obj1.name;

console.log(obj1);
console.log(clone);


// => Sealing an object globally
// Property descriptors work at the level of individual properties.

// There are also methods that limit access to the whole object:

// Object.preventExtensions(obj)
// Forbids the addition of new properties to the object.
// Object.seal(obj)
// Forbids adding/removing of properties. Sets configurable: false for all existing properties.
// Object.freeze(obj)
// Forbids adding/removing/changing of properties. Sets configurable: false, writable: false for all existing properties.
// And also there are tests for them:

// Object.isExtensible(obj)
// Returns false if adding properties is forbidden, otherwise true.
// Object.isSealed(obj)
// Returns true if adding/removing properties is forbidden, and all existing properties have configurable: false.
// Object.isFrozen(obj)
// Returns true if adding/removing/changing properties is forbidden, and all current properties are configurable: false, writable: false.

