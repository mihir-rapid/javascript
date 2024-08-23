const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P1 fullfilled");
    // reject("P1 rejected")
  }, 3000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("P2 fullfilled")
    reject("P2 rejected");
  }, 1000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P3 fullfilled");
    // reject("P3 rejected")
  }, 2000);
});

// => Promise.all()

Promise.all([p1, p2, p3])
  .then((res) => {
    console.log("promise.all:", res);
  })
  .catch((e) => {
    console.error("promise.all:", e);
  }); // if all success give array of all 3 value, else error

// => Promise.allSettled()

Promise.allSettled([p1, p2, p3])
  .then((res) => {
    console.log("promise.allsettled:", res);
  })
  .catch((e) => {
    console.error("promise.allsettled:", e);
  }); // gives array of all settled values, whether it's resolved or rejected

// => Promise.race()

Promise.race([p1, p2, p3])
  .then((res) => {
    console.log("promise.race:", res);
  })
  .catch((e) => {
    console.error("promise.race:", e);
  }); // value of first settled value, whether it's resolved or rejected

// => Promise.any()

Promise.any([p1, p2, p3])
  .then((res) => {
    console.log("promise.any:", res);
  })
  .catch((e) => {
    console.error("promise.any:", e);
  }); // value of first fullfilled promise, if all promise were rejected gives AggregateError;
