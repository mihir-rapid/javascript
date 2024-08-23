// Global object

// * holds variables that should available everywhere

// ** windows, this, global
// ** gloablThis <- universal name

var mouse = 'mouse';
console.log(mouse);
console.log(window.mouse);  // global var
console.log(this.mouse);


window.user = {
    name: 'person1',
    age: 19
}

console.log(window.user.name);


user2 = {
    name: 'person2',
    age: 20
}

console.log(window.user2.age);