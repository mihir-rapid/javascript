
class ValidationError extends Error {
    constructor(message) {
        super(message)
        this.name = "ValidationError"
    }
}

class PropertyRequiredError extends ValidationError {
    constructor(property) {
        super("No property" + property)
        this.name = "PropertyRequiredError"
        this.property = property
    }
}

function readJson(json) {
    let user = JSON.parse(json)

    if (!user.name) {
        throw new PropertyRequiredError(" name")
    }

    if (!user.age) {
        throw new PropertyRequiredError(" age")
    }

    return user
}

try {
    let user = readJson('{"name": 20}')
} catch(error) {
    if (error instanceof ValidationError) {
        console.error("Invalid data:", error.message)
        console.log(error.name)
        console.log(error.property)
    } else if (error instanceof SyntaxError) {
        console.error("JSON Syntax Error", error.message)
    } else {
        throw error
    }
}