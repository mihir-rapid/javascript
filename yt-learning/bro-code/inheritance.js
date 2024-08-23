// inheritance = allows a new class to inherit/share the properties & methods from an existing class (parent -> child), helps with code reusability

class Animal {

    alive = true;

    eat() {
        console.log(`${this.name} is eating`);
    }

    sleep() {
        console.log(`${this.name} is sleeping`);
    }

}

class Rabbit extends Animal {
    name = "Rabit";

    run() {
        console.log(`${this.name} is running`);
    }
}

class Fish extends Animal {
    name = "Fish";

    swim() {
        console.log(`${this.name} is swimming`);
    }
}

class Monkey extends Animal {
    name = "Monkey";

    climb() {
        console.log(`${this.name} is climbing`);
    }
}

const rabbit = new Rabbit();
const fish = new Fish();
const monkey = new Monkey();

console.log(rabbit.alive);

rabbit.eat();
rabbit.sleep();
rabbit.run();

fish.eat();
fish.sleep();
fish.swim();

monkey.eat();
monkey.sleep();
monkey.climb();
