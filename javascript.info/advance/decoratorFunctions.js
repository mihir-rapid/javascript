// a decorator function is a function that returns a function that sets a key-value on an object


// let car = { wheels: 4 };

// function paint(c) {
//     return function(car) {
//         car.color = c;
//     }
// }

// paint('red')(car);

// console.log(car);


let animal = { isAlive: true };

function activeAnimal(active) {
    return function(animal) {
        animal.isActive = active;
    }
}

activeAnimal(false)(animal);

console.log(animal);