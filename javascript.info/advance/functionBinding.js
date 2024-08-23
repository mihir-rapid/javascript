// // function binding

// // => loosing this

// let user = {
//     name: "Mihir",
//     sayHi() {
//         console.log(`Hi, ${this.name}`);
//     }
// }

// setTimeout(user.sayHi, 100);    // loosing this


// // solution-1, using wrapper function

// setTimeout(() => {
//     user.sayHi();
// }, 100);


// // solution-2, using bind

// // => make a generic function

// function genericFunc() {
//     console.log(`Hellow, ${this.name}`);
// }

// let user1 = genericFunc.bind(user);
// user1();    // works fine!


// // example

function partial(func, ...argsBound) {
    return function(...args) {
        return func.call(this, ...argsBound, ...args);
    }
}

let user = {
    firstName: 'John',
    say(time, phrase) {
        console.log(`[${time}] ${this.firstName}: ${phrase}!`);
    }
};

user.sayNow = partial(user.say, new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getUTCSeconds() + ':' + new Date().getMilliseconds());

setInterval(() => {
    user.sayNow('Hello');
}, 1000)

