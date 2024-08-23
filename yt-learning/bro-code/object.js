// object = keyed-value collection of variables

let obj = {
    "greeting": "Hello, World",
    greeting: "Hello",
    'greeting': "Hello, World Again",
    greeting: 'Hello, World Again & Again',
    call: function() {
        console.log(this.greeting);
    }
}
obj.call()
