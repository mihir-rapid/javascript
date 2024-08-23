

new Promise(function(resolve, reject) {
    console.log(1)
    resolve(2)
}).then((response) => console.log(response))

console.log(3)