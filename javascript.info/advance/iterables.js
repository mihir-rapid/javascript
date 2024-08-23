// Iterables

// => custom iterator

let range = {
    from: 1,
    to: 5
}

range[Symbol.iterator] = function() {
    return {
        current: this.from,
        last: this.to,
        next() {
            if (this.current <= this.last) {
                return {
                    done: false,
                    value: this.current++
                }
            } else {
                return {
                    done: true
                }
            }
        }
    }
}

for (let key of range) {
    console.log(key);
}   


// iterable in range object itself
let range1 = {
    from: 1,
    to: 5,
  
    [Symbol.iterator]() {
      this.current = this.from;
      return this;
    },
  
    next() {    
      if (this.current <= this.to) {
        return { done: false, value: this.current++ };
      } else {
        return { done: true };
      }
    }
};
  
for (let num of range1) {
    console.log(num); // 1, then 2, 3, 4, 5
}



// => string is iterable

let string = 'mouse';
for (let char of string) {
    console.log(char);
}


// => calling an iterator explicitly

let str = "mouse"
let iterator = str[Symbol.iterator]();
while (true) {
    let res = iterator.next();
    if (res.done) break;
    console.log(res.value);
}



// => Iterables & Array Likes
// * Iterables are objects that implement the Symbol.iterator method, as described above.
// * Array-likes are objects that have indexes and length, so they look like arrays.



// => Array.from
// * There’s a universal method Array.from that takes an iterable or array-like value and makes a “real” Array from it.

let arrayLike = {
    0: "Hello",
    1: "World",
    length: 2
}

// for (let item of arrayLike) {
//     console.log(item);
// }   // error

let arr = Array.from(arrayLike);

for (let item of arr) {
    console.log(item);
}

// Array.from at the line (*) takes the object, examines it for being an iterable or array-like, then makes a new array and copies all items to it.


// full syntax of Array.from
// * Array.from(obj[, mapFn, thisArg])

let array = Array.from(range, num => num * num);
console.log(array);


// string -> array

let myString = 'hi'

myString = Array.from(myString);

console.log(myString);




// => summary

/*
* Objects that can be used in for..of are called iterable.

* Technically, iterables must implement the method named Symbol.iterator.
* The result of obj[Symbol.iterator]() is called an iterator. It handles further iteration process.
* An iterator must have the method named next() that returns an object {done: Boolean, value: any}, here done:true denotes the end of the iteration process, otherwise the value is the next value.
* The Symbol.iterator method is called automatically by for..of, but we also can do it directly.
* Built-in iterables like strings or arrays, also implement Symbol.iterator.
* String iterator knows about surrogate pairs.
* Objects that have indexed properties and length are called array-like. Such objects may also have other properties and methods, but lack the built-in methods of arrays.

* If we look inside the specification – we’ll see that most built-in methods assume that they work with iterables or array-likes instead of “real” arrays, because that’s more abstract.

* Array.from(obj[, mapFn, thisArg]) makes a real Array from an iterable or array-like obj, and we can then use array methods on it. The optional arguments mapFn and thisArg allow us to apply a function to each item.
*/