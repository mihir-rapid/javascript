// call

let user1 = {
    firstName: 'Mihir',
    lastName: 'Menon',
    profile: 'Software Engineer'
}

let user2 = {
    firstName: 'Krish',
    lastName: 'Aagja',
    profile: 'Intern'
}

let user3 = {
    firstName: 'Kuldeep',
    lastName: 'Solanki',
    profile: 'Sales Executive'
}

let greetEmployee = function(companyName, location) {
    console.log(`Welcome our new ${this.profile}, Mr. ${this.firstName} ${this.lastName} at ${companyName} in ${location}`);
}

// call used to call a method with object with reference this, takes second argument individually
greetEmployee.call(user1, 'Rapidops Inc', 'Ahmedabad');
greetEmployee.call(user2, 'Cygnet Pvt Ltd', 'Rajkot');
greetEmployee.call(user3, 'Tech Holding Pvt Ltd', 'Vadodara');

console.log('---------- yo ----------');
console.log('---------- yo ----------');
console.log('---------- yo ----------');

// apply is same as call, difference is it takes second argument as arrayLike
greetEmployee.apply(user1, ['Rapidops Inc', 'Ahmedabad']);
greetEmployee.apply(user2, ['Cygnet Pvt Ltd', 'Rajkot']);
greetEmployee.apply(user3, ['Tech Holding Pvt Ltd', 'Vadodara']);

console.log('---------- yo ----------');
console.log('---------- yo ----------');
console.log('---------- yo ----------');

// bind gives you copy with binded method which can invoked later
let updatedUser1 = greetEmployee.bind(user1, 'Rapidops Inc', 'Ahmedabad');
let updatedUser2 = greetEmployee.bind(user2, 'Cygnet Pvt Ltd', 'Rajkot');
let updatedUser3 = greetEmployee.bind(user3, 'Tech Holding Pvt Ltd', 'Vadodara');

updatedUser1();
updatedUser2();
updatedUser3();


// example-1
function a() {
    this.x = 10;
    return function() {
        return x;
    }
}

let a1 = a();
let a2 = a1.bind(a);
console.log(a2());


// example-2
function print() {
    this.name = 'John Doe';
    return function() {
        return name;
    }
}

let print1 = print();
let print2 = print1.bind(print);
console.log(print2());


// example-3

let employee1 = {
    name: 'Mihir',
    role: 'Software Egnineer'
}

let employee2 = {
    name: 'Kuldeep',
    role: 'Sales Executive'
}

let employee3 = {
    name: 'Krish',
    role: 'Intern'
}

let callEmployee = function(location, ctc) {
    console.log(`Name: ${this.name}`);
    console.log(`Role: ${this.role}`);
    console.log(`location: ${location}`);
    console.log(`CTC: ${ctc}`);
}

let emp1 = callEmployee.bind(employee1, 'Ahmedabad', '24 LPA');
let emp2 = callEmployee.bind(employee2, 'Rajkot', '18 LPA');
let emp3 = callEmployee.bind(employee3, 'Mumbai', '5.63 LPA');

emp1();
console.log('--------------------');
emp2();
console.log('--------------------');
emp3();
