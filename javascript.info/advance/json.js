// JSON => JavaScript Object Notation

// => Methods
// * JSON.stringify => convert objects into JSON.
// * JSON.parse => convert JSON back into an object.

// example
let student = {
    name: 'Mihir',
    age: 20,
    isAdmin: false,
    courses: ['javascript', 'node-js', 'devops'],
    email: 'mihirxtc@gmail.com'
};
console.log(typeof student);
console.log(student);

// object -> json
let student_json = JSON.stringify(student);
console.log(typeof student_json);
console.log(student_json);

// resulted json string called JSON encoded/stringified object

// => full syntax of json
// let json = JSON.stringify(value [replacer, space]);

// value
// * A value to encode.
// replacer
// * Array of properties to encode or a mapping function function(key, value).
// space
// * Amount of space to use for formatting

// example
let room = {
    number: 23
};
let meetup = {
    title: "Conference",
    participants: [{name: "John"}, {name: "Alice"}],
    place: room
};
room.occupiedBy = meetup;

// console.log(JSON.stringify(meetup, ['title', 'participants', 'place', 'name', 'number']));

// function istead of long array list
console.log(JSON.stringify(meetup, function replacer(key, value) {
    console.log(`${key}: ${value}`);
    return (key == 'occupiedBy') ? undefined : value;
}, 2));


// => Custom 'toJSON'
// * Like toString for string conversion, an object may provide method toJSON for to-JSON conversion.

let room1 = {
    number: 23
};
  
let meetup1 = {
    title: "Conference",
    date: new Date(Date.UTC(2017, 0, 1)),
    room1
};
  
console.log( JSON.stringify(meetup1));

// * more concise example
let room2 = {
    number: 23,
    toJSON() {
      return this.number;
    }
};
  
let meetup2 = {
    title: "Conference",
    room2
};
  
console.log( JSON.stringify(room2) ); // 23
  
console.log( JSON.stringify(meetup2) );
  /*
    {
      "title":"Conference",
      "room": 23
    }
  */


// => JSON.parse

// * JSON.parse => decodes a JSON-string

// * syntax
// let value = JSON.parse(str[, reviver]);

// => str
// * JSON-string to parse.
// => reviver
// * Optional function(key,value) that will be called for each (key, value) pair and can transform the value.

// example-1
let numbers = "[10, 20, 30]";
numbers = JSON.parse(numbers);
console.log(numbers[1]);    // 20

// example-2 In nested objects
let userData = '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';
let user1 = JSON.parse(userData);
console.log( user1.friends[1] ); // 1


// => common JSON mistakes

// let json = `{
//     name: "John",                     // mistake: property name without quotes
//     "surname": 'Smith',               // mistake: single quotes in value (must be double)
//     'isAdmin': false                  // mistake: single quotes in key (must be double)
//     "birthday": new Date(2000, 2, 3), // mistake: no "new" is allowed, only bare values
//     "friends": [0,1,2,3]              // here all fine
//   }`;


// => Using reviver function

// * usecase
let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';
// let meetup3 = JSON.parse(str);
// console.log( meetup.date.getDate() ); // Error!

// * solution using reviver function
let meetup3 = JSON.parse(str, (key, value) => {
    if (key == 'date') return new Date(value);
    return value;
});
console.log( meetup3.date.getFullYear() ); // Fine!


// * reviver with nested object
let schedule = `{
    "meetups": [
      {"title":"Conference","date":"2017-11-30T12:00:00.000Z"},
      {"title":"Birthday","date":"2017-04-18T12:00:00.000Z"}
    ]
}`;
  
schedule = JSON.parse(schedule, function(key, value) {
    if (key == 'date') return new Date(value);
    return value;
});
  
console.log( schedule.meetups[1].date.getDate() ); // works!


//  Tasks

// task-1
let user = {
    name: "John Smith",
    age: 35
};

console.log('original', user);

function convertToJSON(user) {
    return JSON.stringify(user);
}
let jsonUser = convertToJSON(user);
console.log('json converted', jsonUser);

function revertBackToOriginal(user) {
    return JSON.parse(user)
}
let originalUser = revertBackToOriginal(jsonUser);
console.log('back to original', originalUser);


// task-2
let room4 = {
    number: 23
};
  
let meetup4 = {
    title: "Conference",
    occupiedBy: [{name: "John"}, {name: "Alice"}],
    place: room4
};
  
room4.occupiedBy = meetup4;
meetup4.self = meetup4;
  
console.log( JSON.stringify(meetup4, function replacer(key, value) {
    if (key != "" && value == meetup4) {
        return undefined;
    } else {
        return value
    }
}, 1));
