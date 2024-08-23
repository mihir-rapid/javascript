// create a promise with theese 4 async functionlaities
// createOrder, proceedToPayment, showOrderSummary, updateWalletBalance

const cart = ["mouse", "keyboard", "monitor", "headphones"];

const promise = createOrder(cart)

promise
 .then((orderId) => {
    console.log(`order is confirmed with order id: ${orderId}`)
    return proceedToPayment(orderId)
  })
 .then((paymentConfirmation) => {
    console.log(paymentConfirmation)
    return showOrderSummary(paymentConfirmation)
 })
 .then((showOrderSummary) => {
    console.log(`Order summary: ${showOrderSummary}`)
    return updateWalletBalance(showOrderSummary)
 })
 .then((updateWalletBalance) => {
    console.log(updateWalletBalance)
 })
 .catch((error) => {
    console.log(error.message)
 })


function createOrder() {
    return new Promise((resolve, reject) => {
        const validateCart = true
        if (!validateCart) {
            const validateCartError = new Error("Cart validation failed, try again!")
        }
        const orderId = 202483
        setTimeout(() => {
            resolve(orderId)
        }, 5000)
    })
}

function proceedToPayment() {
    return new Promise((resolve, reject) => {
        const paymentStatus = true
        if (!paymentStatus) {
            const paymentError = new Error("Payment failed, try again later!")
            reject(paymentError)
        }
        setInterval(() => {
            const paymentConfirmation = "Payment is done, thanks for shopping"
            resolve(paymentConfirmation)
        }, 2000)
    })
}

function showOrderSummary() {
    return new Promise((resolve, reject) => {
        let item = Math.floor(Math.random() * cart.length+1)
        resolve(cart[item])
    })
}

function updateWalletBalance() {
    return new Promise((resolve, reject) => {
        resolve("Current Wallet Balance: 1000000")
    })
}
