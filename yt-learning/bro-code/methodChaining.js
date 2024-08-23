// Method Chaining => calling one method after anoter in contineous line of code

// ---------- Without Method Chaining ---------- //

let username = "    wAtEr-bOtTlE  ";

// let firstChar = username.charAt(0)
// let extraChar = username.slice(1)

// firstChar = firstChar.toUpperCase()
// extraChar = extraChar.toLowerCase()

// username = firstChar + extraChar
// console.log(username);


// ---------- Method Chaining ---------- //

username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();
console.log(username);
