// return the sum of prime numbers

function isPrime(num) {
    if (num <= 1) return false;
    for (let i=2; i<num; i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
}

function sumOfPrimeNumbers(arr) {
    let sum = 0;
    for (let num of arr) {
        if (isPrime(num)) {
            sum += num;
        }
    }
    return sum;
}

console.log(sumOfPrimeNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
