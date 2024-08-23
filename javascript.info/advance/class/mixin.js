// mixin is a class containing methods that are used by other classes without a need from inherit from it

// example
let sayMixin = {
    say(phrase) {
        console.log(phrase)
    }
}

let sayHiMixin = {
    __proto__: sayMixin,
    sayHi() {
        super.say(`Hello, ${this.name}`)
    },
    sayBye() {
        super.say(`Bye, ${this.name}`)
    }
}

class User {
    constructor(name) {
        this.name = name
    }
}

Object.assign(User.prototype, sayHiMixin)

let user1 = new User("Mihir")
user1.sayHi()
user1.sayBye()




// event mixing
let eventMixin = {
    on(eventName, handler) {
        if (!this._eventHandlers) this._eventHandlers = {}
        if (!this._eventHandlers[eventName]) {
            this._eventHandlers[eventName] = []
        }
        this._eventHandlers[eventName].push(handler)
    },
    off(eventName, handler) {
        let handlers = this._eventHandlers?.[eventName]
        if (!handlers) return
        for (let i=0; i<handlers.length; i++) {
            if (handlers[i] == handler) {
                handlers.splice(i--, 1)
            }
        }
    },
    trigger(eventName, ...args) {
        if (!this._eventHandlers?.[eventName]) {
            return
        }
        this._eventHandlers[eventName].forEach(handler => handler.apply(this, args))
    }
}

class Menu {
    choose(value) {
        this.trigger("select", value)
    }
}

Object.assign(Menu.prototype, eventMixin)

let menu = new Menu()
menu.on("select", value => console.log(`Value selected: ${value}`))
menu.choose("123")


// Summary
// Mixin – is a generic object-oriented programming term: a class that contains methods for other classes.

// Some other languages allow multiple inheritance. JavaScript does not support multiple inheritance, but mixins can be implemented by copying methods into prototype.

// We can use mixins as a way to augment a class by adding multiple behaviors, like event-handling as we have seen above.

// Mixins may become a point of conflict if they accidentally overwrite existing class methods. So generally one should think well about the naming methods of a mixin, to minimize the probability of that happening.
