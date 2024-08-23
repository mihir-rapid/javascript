// Object to primitive conversion

// * js dosen't allows you to coustmize how operators work on objects
// * in such case objects are auto converted to primitives & operation is carried out over primitives & result is also be in primitive value

// * important limitation: obj1 + obj2, (any math operator) can't be another object



// => conversation rules
// 1. theres no conversion to boolean, all objects are true in boolean context, there exists only string & numeric conversion
// 2. numeric conversion happens when substracting objects, or applying math functions
// 3. for strings when output an object with alert(obj) '[object object]' context


// => Hints

// "string"

let obj = { id: 2 };
let anotherObj = {};
anotherObj[obj] = 2;
console.log(anotherObj);    // { '[object, Object]': 2 }


// "number"

// let num = Number(obj);
// let n = +obj;
// let delta = date1 - date2
// let greater = user1 > user2


// "default"
// * Occurs in rare cases when the operator is “not sure” what type to expect.
// * example: Binary (+) can work with both strings & numbers

// let total = obj + obj2



// => To do the conversion, JavaScript tries to find and call three object methods:

// 1. Call obj[Symbol.toPrimitive](hint) – the method with the symbolic key Symbol.toPrimitive (system symbol), if such method exists,
// 2. Otherwise if hint is "string"
// * try calling obj.toString() or obj.valueOf(), whatever exists.
// 3. Otherwise if hint is "number" or "default"
// * try calling obj.valueOf() or obj.toString(), whatever exists.


// example

let user = {
    name: "John",
    money: 1000,
  
    [Symbol.toPrimitive](hint) {
      console.log(`hint: ${hint}`);
      return hint == "string" ? `{name: "${this.name}"}` : this.money;
    }
  };
  
  // conversions demo:
console.log(user); // hint: string -> {name: "John"}
console.log(+user); // hint: number -> 1000
console.log(user + 500); // hint: default -> 1500


// => toString & valueOf();

// * For the "string" hint: call toString method, and if it doesn’t exist or if it returns an object instead of a primitive value, then call valueOf (so toString has the priority for string conversions).
// * For other hints: call valueOf, and if it doesn’t exist or if it returns an object instead of a primitive value, then call toString (so valueOf has the priority for maths).


// ** The toString method returns a string "[object Object]".
// ** The valueOf method returns the object itself.

/* example:
let user = {name: "John"};

alert(user); // [object Object]
alert(user.valueOf() === user); // true
*/

// example using toString(), valueOf():

let user1 = {
    name: "John",
    money: 1000,

    toString() {
        return `{name: "${this.name}"}`;
    },

    valueOf() {
        return this.money;
    }
};

console.log(user1); // alert => toString -> {name: "John"}
console.log(+user1);
console.log(user1 + 500);


// => single catch all place to handle all primitive conversions

let user3 = {
    name: "John",
    toString() {
      return this.name;
    }
};
  
console.log(user3); // toString -> John
console.log(user3 + 500); // toString -> John500



// => Further conversions

let obj2 = {
    // toString handles all conversions in the absence of other methods
    toString() {
      return "2";
    }
};  
console.log(obj2 * 2); // 4, object converted to primitive "2", then multiplication made it a number

let obj3 = {
    toString() {
      return "2";
    }
}; 
console.log(obj3 + 2); // "22" ("2" + 2), conversion to primitive returned a string => concatenation



// => summary

/*
The object-to-primitive conversion is called automatically by many built-in functions and operators that expect a primitive as a value.

There are 3 types (hints) of it:

"string" (for alert and other operations that need a string)
"number" (for maths)
"default" (few operators, usually objects implement it the same way as "number")
The specification describes explicitly which operator uses which hint.

The conversion algorithm is:

Call obj[Symbol.toPrimitive](hint) if the method exists,
Otherwise if hint is "string"
try calling obj.toString() or obj.valueOf(), whatever exists.
Otherwise if hint is "number" or "default"
try calling obj.valueOf() or obj.toString(), whatever exists.   */
