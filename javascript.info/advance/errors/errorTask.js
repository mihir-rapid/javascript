
class FormatError extends SyntaxError {
    constructor(message) {
        super(message)
        this.name = this.constructor.name
    }
}

let error = new FormatError("formatting error occured!")

console.log(error)
console.log(error.name)
console.log(error.message)
console.log(error.stack)

console.log(error instanceof SyntaxError)