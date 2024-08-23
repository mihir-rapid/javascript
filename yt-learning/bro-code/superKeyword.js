// super = super is a keyword used in classes, used to call constructor & access methods and properties of parent (superclass)

//      this = this object
//      super = the parent/base


class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    move(speed) {
        console.log(`The ${this.name} moves at speed of ${speed} mph`);
    }
}

class Rabbit extends Animal {
    constructor(name, age, runSpeed) {
        super(name, age);
        this.runSpeed = runSpeed;
    }
    run() {
        console.log(`The ${this.name} runs at speed of ${this.runSpeed} intensity`);
        super.move(this.runSpeed);
    }
}

class Fish extends Animal {
    constructor(name, age, swimSpeed) {
        super(name, age);
        this.swimSpeed = swimSpeed;
    }
    swim() {
        console.log(`The ${this.name} swims at speed of ${this.swimSpeed} intensity`);
        super.move(this.swimSpeed);
    }
}

class Monkey extends Animal {
    constructor(name, age, climbSpeed) {
        super(name, age);
        this.climbSpeed = climbSpeed;
    }
    climb() {
        console.log(`The ${this.name} climbs at speed of ${this.climbSpeed} intensity`);
        super.move(this.climbSpeed);
    }
}

class Pokemon extends Animal {
    constructor(name, age, powerSpeed) {
        super(name, age);
        this.powerSpeed = powerSpeed;
    }
    attack() {
        console.log(`The ${this.name} attacks at speed of ${this.powerSpeed} intensity`);
        super.move(this.powerSpeed);
    }
}

const rabbit = new Rabbit("bunny", 2, 35);
const fish = new Fish("fishhz", 1, 65);
const monkey = new Monkey("micky", 6, 15);
const pokemon = new Pokemon("balbasor", 8, 1000);

console.log(rabbit);
console.log(fish);
console.log(monkey);
console.log(pokemon);

rabbit.run();
fish.swim();
monkey.climb();
pokemon.attack();
