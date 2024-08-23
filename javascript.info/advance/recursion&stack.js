// Recursion & Stack

// * recursion => function calls itself

// example: 

// * iterative thinking
function pow1(x, n) {
    let result = 1;
    for (let i=0; i<n; i++) {
        result *= x;
    }
    return result
}
console.log(pow1(2, 3));    // 8

// * recursive thinking
function pow(x, n) {
    if (n == 1) {
        return x;
    } else {
        return x * pow(x, n - 1);
    }
}
console.log(pow(2, 3)); // 8

// * short-hand
function pow2(x, n) {
    return (n == 1) ? x : x * pow(x, n - 1);
}
console.log(pow2(2, 3));    // 2


// * complex recursion example
// ** sum salaries
let company = { // the same object, compressed for brevity
    sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 1600 }],
    development: {
      sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
      internals: [{name: 'Jack', salary: 1300}]
    }
};
  
  // The function to do the job
function sumSalaries(department) {
    if (Array.isArray(department)) { // case (1)
      return department.reduce((prev, current) => prev + current.salary, 0); // sum the array
    } else { // case (2)
      let sum = 0;
      for (let subdep of Object.values(department)) {
        sum += sumSalaries(subdep); // recursively call for subdepartments, sum the results
      }
      return sum;
    }
}
  
console.log(sumSalaries(company)); // 7700


// => Summury

// Recursion is a programming term that means calling a function from itself. Recursive functions can be used to solve tasks in elegant ways.

// When a function calls itself, that’s called a recursion step. The basis of recursion is function arguments that make the task so simple that the function does not make further calls.

// A recursively-defined data structure is a data structure that can be defined using itself.


// Tasks

// task-1

// using for loop
function sumTo(n) {
  let res = 0;
  for (let i=1; i<=n; i++) {
      res += i;
  }
  return res;
}
console.log(sumTo(100));


// using recursion
function sumTo1(n) {
  if (n == 1) return n;
  return n + sumTo(n-1) 
}
console.log(sumTo1(100));

// using arithmetic algoritham

function sumTo2(n) {
  return n * (n + 1) / 2;
}
console.log(sumTo2(100));