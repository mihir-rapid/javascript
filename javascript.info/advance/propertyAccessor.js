// getter-setter

let user1 = {
    name: "Mihir",
    surname: "Menon",
    get fullName() {
       return `${this.name} ${this.surname}`;
    },

    set fullName(value) {
        [this.name, this.surname] = value.split(" ");
    }
}

user1.fullName = "Alice Cooper";
console.log(user1.fullName);


// Accessor descriptor

let user2 = {
    name: "Mihir",
    surname: "Menon",
};

Object.defineProperty(user2, 'fullName', {
    get () {
        return `${this.name} ${this.surname}`;
     },
 
     set (value) {
        [this.name, this.surname] = value.split(" ");
     }
})

console.log(user2.fullName);

user2.fullName = "Betty Cooper";

console.log(user2.fullName);

for (let key in user2) console.log(key);



// Smart getter-setter

let user = {
    get name() {
        return this._name;
    },
    set name(value) {
        if (value.length < 4) {
            console.log("Name is too short, try again!");
            return;
        }
        this._name = value;
    }
}

user.name = "Pete";
console.log(user.name);

user.name = "abc";
user.name = "Alice";
console.log(user.name);



// getter-setter for compatibility


function User(name, birthday) {
    this.name = name;
    this.birthday = birthday;
    Object.defineProperty(this, "age", {
        get() {
            let todayYear = new Date().getFullYear();
            return todayYear - this.birthday.getFullYear();
        }
    });
}

let mihir = new User('Mihir', new Date("2003-10-21"));

console.log(mihir.birthday);
console.log(mihir.age);
