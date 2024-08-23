// 10. Write​ ​ a ​ ​ JavaScript​ ​ function​ ​ to​ ​ get​ ​ time​ ​differences​ ​ in​ ​ years,​ ​ months,​ ​ weeks,​ ​ days,​ ​ hours and​ ​ minutes​ ​ between​ ​ two​ ​ dates.

// Input = 01-07-2018 & 03/05/2020
// Output : 
// 1 years 10 months 2 days
// or 22 months 2 days
// or 96 weeks 0 days
// or 672 days
// or 16,128 hours
// or 967,680 minutes



function getTimeDifference() {
    let startDate = new Date('2003-10-21T00:00:00Z');
    let endDate = new Date('2024-08-09T00:00:00Z');

    let timeDifference = endDate - startDate;

    let seconds = Math.floor(timeDifference / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);
    let weeks = Math.floor(days / 7);
    let months = endDate.getMonth() - startDate.getMonth();
    let years = endDate.getFullYear() - startDate.getFullYear();

    return {
        years,
        months,
        weeks,
        days,
        hours,
        minutes,
        seconds
    }
}

console.log(getTimeDifference());