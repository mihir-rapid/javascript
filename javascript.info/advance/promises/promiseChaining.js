// namaste javascript promise vid-2

const cart = ["mouse", "keyboard", "monitor"];
const promise = createOrder(cart);

promise
  .then((orderId) => {
    console.log(`Order create with orderId: ${orderId}`);
    return proceedToPayment(orderId);
  })
  .then((payment) => {
    console.log(`Payment is successfully done`);
  })
  .catch((err) => {
    console.log(err.message);
  })
  .finally(() => {
    console.log(`Thanks for shopping with us`);
  });

function createOrder() {
  return new Promise((resolve, reject) => {
    if (!validateCart(cart)) {
      const err = new Error("Validate cart first, then try again!");
      reject(err);
    }
    const orderId = 202483;
    setTimeout(() => {
      resolve(orderId);
    }, 2000);
  });
}

function validateCart() {
  return true;
}

function proceedToPayment() {
  return new Promise((resolve, reject) => {
    const paymentStatus = true;
    if (!paymentStatus) {
      const paymentError = new Error("There's issue in payment, try again!");
      reject(paymentError);
    }
    setTimeout(() => {
      resolve(paymentStatus);
    }, 1000);
  });
}
