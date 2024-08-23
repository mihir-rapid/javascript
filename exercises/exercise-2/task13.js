// 13. Write​ ​ a ​ ​ JavaScript​ ​ function​ ​ to​ ​ print​​ an​ ​ integer​ ​ with​ ​ commas​ ​ as​ ​ thousands​ ​ separators.

// input_number = 1023165454197
// Output = 1,023,165,454,197



function numberWithCommas(number) {
    return number.toLocaleString();
}
let number = 1000000000;
console.log(numberWithCommas(number));


// using regex
// function numberWithCommas(number) {
//     let num = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
//     console.log(num);
// }

// numberWithCommas(1000000000);