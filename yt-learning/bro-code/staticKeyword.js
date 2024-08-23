// static keyword = keyword that defines methods or properties that belongs to a class itself, rather than object created from that class (class owns anything static, not the objects)


// Exampe-1

class MathUtil {
    static PI = 3.14159;

    static getDiameter(radius) {
        return radius * 2;
    }

    static getCircumference(radius) {
        return 2 * this.PI * radius;
    }

    static getArea(radius) {
        return this.PI * radius * radius
    }
}

const MathUtil1 = new MathUtil();

console.log(MathUtil.PI);
console.log(MathUtil.getDiameter(10));
console.log(MathUtil.getCircumference(10));
console.log(MathUtil.getArea(10));


// Example-2

class User {
    static userCount = 0;

    constructor(username) {
        this.username = username;
        User.userCount++;
    }

    static getUserCount() {
        console.log(`${this.userCount} is currently online`);
    }

    sayHello() {
        console.log(`Welcome to dashboard ${this.username}`);
    }
}

const user1 = new User("Mihir");
const user2 = new User("Krish");
const user3 = new User("Sonu");

// console.log(user1.username);
// console.log(user2.username);
// console.log(user3.username);
// console.log(User.userCount);

user1.sayHello();
user2.sayHello();
user3.sayHello();
User.getUserCount();
