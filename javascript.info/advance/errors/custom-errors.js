
// Wrapping exceptions

class ReadError extends Error {
    constructor(message, cause) {
        super(message)
        this.cause = cause
        this.name = "ReadError"
    }
}

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

function validateUser(user) {

    if (!user.name) {
        throw new PropertyRequiredError("name")
    }

    if (!user.age) {
        throw new PropertyRequiredError("age")
    }

    return user
}

function readUser(json) {
    let user

    try {
        user = JSON.parse(json)
    } catch(error) {
        if (error instanceof SyntaxError) {
            throw new ReadError("Syntax Error", error)
        } else {
            throw error
        }
    }

    try {
        validateUser(usr)
    } catch(error) {
        if (error instanceof ValidationError) {
            throw new ReadError("Validation Error", error)
        } else {
            throw error
        }
    }

    try {
        readUser('{bad json}')
    } catch(error) {
        if (error instanceof ReadError) {
            console.log(error)
            console.log("Original error", error.cause)
        } else {
            throw error
        }
    }
}
