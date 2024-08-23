
// Error handling in javascript

// => Basic try-catch

try {
    MouseEvent
} catch {
    console.log("Error has occured")
}

// => Error object

try {
    MouseEvent
} catch(error) {
    console.log("Error:", error)
    console.log("Error name:", error.name)
    console.log("Error message:", error.message)
    console.log("Error stack:", error.stack)
}


// => Real life use-case

function fetchJson() {
    try {
        let json = '{invalid json}'
        let parsedJson = JSON.parse(json)
    } catch(error) {
        console.log("Request cannot be completed at this time!")
        console.log(error.name)
        console.log(error.message)
    }
}
fetchJson()


// => try-catch using asynchoronouse functions

// it won't work!
try {
    setTimeout(() => {
        DataTransfer
    })
} catch (error) {
    console.log(error.name)
    console.log("won't work!")
}


// solution
setTimeout(() => {
    try {
        DataTransfer
    } catch(error) {
        console.log("Works!")
        console.log(error.name)
    }
})