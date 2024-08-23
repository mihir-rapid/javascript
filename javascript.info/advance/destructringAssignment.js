
// Destructring Assignment

// * Destructuring assignment is a special syntax that allows us to “unpack” arrays or objects into a bunch of variables,


// => array destructring
let fullName = ['Mihir', 'Menon'];
[firstName, lastName] = fullName;

console.log(firstName);
console.log(lastName);


// => string destructing
let emailId = 'mihir.menon@rapidops.co';
[username, domain] = emailId.split('@');
console.log(username);
console.log(domain);


// => swapping variables
let admin = 'admin';
let guest = 'guest';

[admin, guest] = [guest, admin];

console.log(admin);
console.log(guest);


// => default values
[value1, value2] = [];
console.log(value1);    // undefined
console.log(value2);    // undefined


[value1, value2='defaultValue'] = ['firstValue'];
console.log(value1);    // undefined
console.log(value2);    // undefined


// => object destructring
let user1 = {
    name: 'mihir',
    age: 20,
    email: 'mihir.menon@rapidops.co'
};

let {name, age, email} = user1;

console.log(name);
console.log(age);
console.log(email);

// * assign property with another varibale name
let {name: n, age: a, email: e} = user1;

console.log(n);
console.log(a);
console.log(e);


// * default values
let {name: empName, age: empAge, company = 'rapidops'}  = user1;

console.log(empName);
console.log(empAge);
console.log(company);


// * combine colon & equality 
let {name: userName = 'Mihir', occupation: occ = 'Intern'}  = user1;

console.log(empName);
console.log(occ);



// => ...rest pattern
let device = {
    description: 'mouse',
    price1: 1000,
    price2: 2000
}


let {description, ...rest} = device;

console.log(description);
console.log(rest.price1);
console.log(rest.price2);


// => common gotch'a

// {val1, val2, val3} = value1 // won't work cause it's on code block (main code flow)

// solution
let title1, width1, height1;

// okay now
({title1, width1, height1} = {title1: "Menu", width1: 200, height1: 100});

console.log( title1 ); // Menu




// => nested destructring

let options = {
    size: {
      width: 100,
      height: 200
    },
    items: ["Cake", "Donut"],
    extra: true
  };
  
  // destructuring assignment split in multiple lines for clarity
  let {
    size: { // put size here
      width,
      height
    },
    items: [item1, item2], // assign items here
    title = "Menu" // not present in the object (default value is used)
  } = options;
  
console.log(title);  // Menu
console.log(width);  // 100
console.log(height); // 200
console.log(item1);  // Cake
console.log(item2);  // Donut




// more complex destructuring with nested objects and colon mappings

let options1 = {
    title: "My menu",
    items: ["Item1", "Item2"]
  };
  
  function showMenu({
    title = "Untitled",
    width: w = 100,  // width goes to w
    height: h = 200, // height goes to h
    items: [item1, item2] // items first element goes to item1, second to item2
  }) {
    console.log( `${title} ${w} ${h}` ); // My Menu 100 200
    console.log( item1 ); // Item1
    console.log( item2 ); // Item2
  }
  
  showMenu(options1);


/*
The full syntax is the same as for a destructuring assignment:

function({
  incomingProperty: varName = defaultValue
  ...
})
*/



// => Summary
// Destructuring assignment allows for instantly mapping an object or array onto many variables.

// The full object syntax:

// let {prop : varName = defaultValue, ...rest} = object
// This means that property prop should go into the variable varName and, if no such property exists, then the default value should be used.

// Object properties that have no mapping are copied to the rest object.

// The full array syntax:

// let [item1 = defaultValue, item2, ...rest] = array
// The first item goes to item1; the second goes into item2, and all the rest makes the array rest.

// It’s possible to extract data from nested arrays/objects, for that the left side must have the same structure as the right one.


// Tasks

// task-1

let user = {
    name: 'Mihir',
    years: 20
}

let {name1, years: age1, isAdmin = false} = user;

console.log(name1);
console.log(age1);
console.log(isAdmin);


// task-2

let salaries = {
    'Krish': 35000,
    'Kuldeep': 40000,
    'Mihir': 65000
};

function topPaid(salaries) {
    let maxSalary = 0;
    let topPaidPerson = null;
    for (let [name, salary] of Object.entries(salaries)) {
        if (maxSalary < salary) {
            maxSalary = salary;
            topPaidPerson = name;
        }
    }
    return topPaidPerson
};  

console.log(topPaid(salaries));