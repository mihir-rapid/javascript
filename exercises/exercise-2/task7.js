// 7. Write​ ​ a ​ ​ JavaScript​ ​ function​ ​ to​ ​ get​ ​ the​ ​ month​ ​name​ ​ from​ ​ a ​ ​ particular​ ​ date.

// Input = 01-07-2020 or 01/07/2020
// Output = July



function getMonth(date) {
    let month = date.toLocaleString('en-IN', {month: 'long'});
    console.log(month);
}

let date = new Date('2024-08-09');
getMonth(date);