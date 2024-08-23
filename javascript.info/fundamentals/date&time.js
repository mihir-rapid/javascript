/*
    <Date from Chai or Code >

const date = new Date();
console.log(typeof date);

// const myCreatedDate = new Date(2023, 11, 24);
// const myCreatedDate = new Date(2023, 11, 24, 5, 3);
// const myCreatedDate = new Date("2023-10-21");
const myCreatedDate = new Date("10-21-2023");
console.log(myCreatedDate.toLocaleString());


const myTimeStamp = Date.now();

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());

console.log(Math.floor(Date.now() / 1000));

const newDate = new Date();
console.log(newDate.getFullYear());
console.log(newDate.getMonth() + 1);
console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getTime());

console.log("+++++++++++++++++++++");

newDate.toLocaleString('default', {
    weekday: "long",
})

*/

// creation

let now = new Date();
console.log(now);

// typeof Date is "Object", Date is a object

// Date object with time = (1/1000 of a second) passed after 01/01/1970 UTC-0

let Jan01_1970 = new Date(0);
console.log(Jan01_1970);

// adding 24 hours
let Jan02_1970 = new Date(24 * 3600 * 1000);
console.log(Jan02_1970);

// date before 1/1/1970 have negetive time stamp

let Dec31_1969 = new Date(-24 * 3600 * 1000);
console.log(Dec31_1969);

// new Date(datestring)

let date1 = new Date("2003-10-21");
console.log(date1);

// new Date(year, month, date, hours, minutes, seconds, ms)

console.log(new Date(2003, 9, 21));

// year => should have 4 digits
// month => count starts with 0(Jan) upto 11(Dec)
// date => day of month, if absent then 1 is assumed
// hours/minutes/seconds/ms => if absent, then to be equal 0

console.log(new Date(2021, 0, 1, 0, 0, 0, 0));  // doubt => 2020!
console.log(new Date(2021, 0, 1));


// Access date components

// getFullYear()
// getMonth()
// getDate()
// getHours(), getMinutes(), getSeconds(), getMilliseconds()


let date = new Date();
console.log(date.getHours());
console.log(date.getUTCHours());

console.log(date.getTime());    // number of milliseconds passed from January 1st of 1970 UTC+0

console.log(date.getTimezoneOffset());


// setting date components

// => setFullYear(year, [month], [date])
// => setMonth(month, [date])
// => setDate(date)
// => setHours(hour, [min], [sec], [ms])
// => setMinutes(min, [sec], [ms])
// => setSeconds(sec, [ms])
// => setMilliseconds(ms)
// => setTime(milliseconds) // sets whole date by milliseconds since 01.01.1970 UTC

let today = new Date();

today.setHours(0);
console.log(today);

today.setHours(0, 0, 0, 0);
console.log(today);


// Autocorrection

let date2 = new Date(2013, 0, 32); // 31/1/2013
console.log(date2);

let date3 = new Date(2016, 1, 28);
date3.setDate(date3.getDate() + 2);
console.log(date3);

let date4 = new Date();
date4.setSeconds(date4.getSeconds() + 70);
console.log(date4);

// also set zero even negetive value

let date5 = new Date(2016, 0, 2);

date5.setDate(1);
console.log(date5);

date5.setDate(0);
console.log(date5);


// Date to number, date difference

let newDate = new Date();
console.log(+newDate);  // same as date.getTime()

// difference

let start = new Date();
for (let i=0; i<1000000000; i++) {
    let doSomething = i * i * i;
}
let end = new Date();
console.log(`The loop took ${end - start} ms`);


// Date.now()

let start1 = Date.now();
for (let i=0; i<1000000000; i++) {
    let doSomething = i * i * i;
}
let end1 = Date.now();
console.log(`The loop took ${end1 - start1} ms`);


// Benchmarking

function diffSubtract(date1, date2) {
    return date2 - date1;
}

function diffGetTime(date1, date2) {
    return date2.getTime() - date1.getTime();
}

function bench(f) {
    let date1 = new Date(0);
    let date2 = new Date();

    let start = Date.now();
    for (let i=0; i<100000; i++) {
        return f(date1, date2);
    }
    return Date.now() - start;
}

let time1 = 0;
let time2 = 0;

for (let i=0; i<10; i++) {
    time1 += bench(diffSubtract);
    time2 += bench(diffGetTime);
}

console.log( 'Total time for diffSubtract: ' + time1 );
console.log( 'Total time for diffGetTime: ' + time2 );


// Date.parse from string

// => can read date from a string
// => string format should be: YYYY-MM-DDTHH:mm:ss:sssZ, where
// * YYYY-MM-DD is the date: year-month-date
// * "T" is used as delimiter
// * HH:mm:ss:sss - is the time: hours, minutes, seconds, milliseconds
// * optional "Z" denotes timezone in format +-hh:mm: Z means UTC+0

let ms = Date.parse("2021-01-26T13:51:50.417-07:00")
console.log(ms);

let d = new Date(Date.parse("2021-01-26T13:51:50.417-07:00"))
console.log(d);


// Tasks

// 1. Create a date

let d1 = new Date(2012, 1, 20, 3, 12)
console.log(d1);

let d2 = new Date("2012-02-20T03:12")
console.log(d2);
