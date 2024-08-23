// nested objects = objects inside other object
//                  allows you to represent more complex data structure
//                  child object is enclosed by parent object

//                  parent{ child1{}, child2{} }
//                  userData{ user1{}, user2{}, user3{} }


console.log(" ++++++++++ example-1 ++++++++++");

const user1 = {
    firstName: "Mihir",
    lastName: "Menon",
    email: "mihirxtc@gmail.com",
    username: "mihirxtc",
    age: 20,
    hobbies: ["adventure", "swimming", "coding", "tech-explore"],
    address: {
        houseNo: "B/18",
        society: "St. patrics colony",
        street: "Sr. adam smith streets",
        city: "Newyork",
        country: "USA"
    }
}

console.log("Name:", user1.firstName);
console.log("Surname:", user1.lastName);
console.log("username:", user1.username);
console.log("email:", user1.email);
console.log("age:", user1.age);
console.log("hobbies:", user1.hobbies);
console.log("address:", user1.address);

console.log("+++++ accesing using loop +++++");

for (let address in user1.address) {
    console.log(user1.address[address]);
}


console.log(" ++++++++++ example-2 ++++++++++");

class Person {
    constructor(name, age, ...address) {
        this.name = name;
        this.age = age,
        this.address = new Address(...address);
    }
}

class Address {

    constructor(street, city, country) {
        this.street = street;
        this.city = city;
        this.country = country;
    }

}

const person1 = new Person("Mihir", 20, "B/18 St. colony", "Newyork", "USA");
const person2 = new Person("Krish", 18, "B/12 David. colony", "Ahmedabad", "India");
const person3 = new Person("Sonu", 24, "B/18 Birthshire. colony", "Amsterdem", "Netherlands")

console.log(person1);
console.log(person2);
console.log(person3);