// Callback = a function is passed as an arguement to another function
//      used to handle asynchronous operations:
//      1. Reading a file
//      2. Network Request
//      3. Interacting with databases

// =>   "Concept" => { "When you're done, call this next" }


// Example-1

hello(wait)

function hello(callback) {
    console.log("Hello");
    callback()
}

function wait() {
    console.log("Wait!");
}

function leave() {
    console.log("Leave!");
}

function goodBye() {
    console.log("Goodbye!");
}


// Example-2

sum(displayRes, 10, 5)

function sum(callback, x, y) {
    let res = x + y
    callback(res)
}

function displayRes(res) {
    console.log(res);
}