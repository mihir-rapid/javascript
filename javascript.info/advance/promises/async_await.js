
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise is fullfilled")
    }, 5000)
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise is fullfilled")
    }, 2000)
})

async function handlePromise() {
    console.log("Hello, World")

    const val = await p1
    console.log("checkpoint 1")
    console.log(val)

    const val2 = await p2
    console.log("checkpoint 2")
    console.log(val2)
}
handlePromise()
