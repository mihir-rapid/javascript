// basic prototypal inheritance

let animal = {
    eats: true,
    walk() {
        console.log("Animal Walk");
    }
}

let rabbit = {
    jumps: true,
    __proto__: animal
}

let longEar = {
    earLength: 10,
    __proto__: rabbit
}

longEar.walk = function() {
    console.log('Bounce, Bounce!!');
}

longEar.walk();
console.log(longEar.eats);
console.log(longEar.jumps);


// value of __proto = object, null



// example protypal interitance using __proto__
let user = {
    name: "John",
    surname: "Smith",
    set fullName(value) {
        [this.name, this.surname] = value.split(" ");
    },
    get fullName() {
        return `${this.name} ${this.surname}`;
    }
};

let admin = {
    __proto__: user,
    isAdmin: true
};

console.log(admin.fullName);

admin.fullName = "Alice Cooper";

console.log(admin.fullName);
console.log(user.fullName);


// for...in loop

let animal1 = {
    eats: true,
    isActive: true,
}

let rabbit1 = {
    jumps: true,
    hasLongEars: true,
    isVegetarian: true,
    __proto__: animal1
}

for (let prop in rabbit1) {
    let isOwn = rabbit1.hasOwnProperty(prop);
    if (isOwn) {
        console.log(`Our: ${prop}`);
    } else {
        console.log(`Inhetited: ${prop}`);
    }
}



// Tasks


/*  task-1

let animal = {
    jumps: null
};
let rabbit = {
    __proto__: animal,
    jumps: true
};

console.log( rabbit.jumps ); // true
  
delete rabbit.jumps;
  
console.log( rabbit.jumps ); // null
  
delete animal.jumps;
  
console.log( rabbit.jumps ); // undefined   */


// Task-2 


let head = {
    glasses: 1
};

let table = {
    pen: 3,
    __proto__: head
};

let bed = {
    sheet: 1,
    pillow: 2,
    __proto__: table
}

let pockets = {
    money: 2000,
    __proto__: bed
}

console.log(pockets.sheet);
console.log(bed.pen);
console.log(table.glasses);


/*  Task-3
let animal = {
    eat() {
        this.full = true
    }
}

let rabbit = {
    __proto__: animal
}

console.log(rabbit.eat()); */


// Task-4


let hamster = {
    stomach: [],
    eat(food) {
        this.stomach.push(food);
    }
};

let speedy = {
    __proto__: hamster,
    stomach: []
};

let lazy = {
    __proto__: hamster,
    stomach: []
};

speedy.eat("apple");
console.log(speedy.stomach);

console.log(lazy.stomach);
