// 8. Write​ ​ a ​ ​ JavaScript​ ​ function​ ​ to​ ​ get​ ​ difference​ ​between​ ​ two​ ​ dates,​ ​ from​ ​ maximum​ ​ unit​ ​ to minimum​ ​ unit.

// Input = 01/07/2018 & 03/05/2020
// Output = 1 year 10 months 2 days



function getDifference(startDate, endDate) {

    let timeDifference = endDate - startDate;

    let seconds = Math.floor(timeDifference / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);
    let months = endDate.getMonth() - startDate.getMonth();
    let years = endDate.getFullYear() - startDate.getFullYear();


    let difference = {
        years,
        months: months % 12,
        days: Math.floor(days % 30)
    }

    console.log(difference);
}

let startDate = new Date('2003-10-21T00:00:00Z');
let endDate = new Date();
getDifference(startDate, endDate);