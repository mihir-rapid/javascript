
// overriding

class Animal {
    constructor(name) {
        this.name = name
    }
}

class Rabbit extends Animal {
    constructor(name, speed) {
        super(name)
        this.speed = speed
    }
}

let rabbit = new Rabbit("Bunny", 5);

// console.log(rabbit);



// example

class BasePackageDeveloper {
    constructor(ctc) {
        this.ctc = ctc
    }
}

class Dev1 extends BasePackageDeveloper {
    constructor(ctc, name, description) {
        super(ctc)
        this.name = name
        this.description = description
    }
}

let dev1 = new Dev1("12LPA", "Mihir Menon", "Backend Developer");
let dev2 = new Dev1("8LPA", "Krish Aagja", "Frontend Developer");
console.log(dev1);
console.log(dev2);