
// throwing errors

try {
    let dividend = +prompt("Enter a dividend: ")
    let divisor = +prompt("Enter a divisor: ")

    if (divisor == 0) {
        throw new Error("You can't divide by zero!")
    }

    if (isNaN(dividend) || isNaN(divisor)) {
        throw new Error("Values must be a number")
    }

    const result = dividend / divisor
    console.log(result);
    

} catch(error) {
    console.log(error)
} finally {
    console.log("End of program")
}