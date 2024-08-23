
// Basic concept of promise

// => Promise is an object representing the eventual completion of an asynchronous operation

function walkDog() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let dogWalked = true
            if (dogWalked) {
                resolve("you walk the dog")
            } else {
                reject("you DIDN'T walk the dog")
            }
        }, 1500)
    })
}

function cleanKitchen() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let kitchenCleaned = true
            if (kitchenCleaned) {
                resolve("you clean the kitchen")
            } else {
                reject("you DIDN'T cleaned the kitchen")
            }
        }, 2500)
    })
}

function takeOutTrash() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let trashTakenOut = false
            if (trashTakenOut) {
                resolve("you take out trash")
            } else {
                reject("you DIDN'T take out the trash")
            }
        }, 500)
    })
}

walkDog()
 .then((value) => {
    console.log(value)
    return cleanKitchen()
 })
 .then((value) => {
    console.log(value)
    return takeOutTrash()
 })
 .then((value) => {
    console.log(value)
    console.log("All task completed")
 })
 .catch((error) => {
    console.error(error)
 })




// promise task

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

const ms = 1000
delay(ms).then(() => {
    console.log(`logeed after ${ms} miliseconds`);
})