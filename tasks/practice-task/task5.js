// return factorial of number

function findFactorial(n) {
    let res = 1;
    for (let i=1; i<=n; i++) {
        res *= i;
    }
    return res;
}

console.log(findFactorial(5));
