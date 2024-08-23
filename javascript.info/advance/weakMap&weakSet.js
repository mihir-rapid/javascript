// WeakMap & WeakSet

// ***** WeakMap ***** //

// The first difference between Map and WeakMap is that keys must be objects, not primitive values:

let weakMap = new WeakMap();

let obj1 = {}

weakMap.set(obj1, 'Valid');  // works fine
// weakMap.set('obj', 'Invalid');  // Error!

console.log(weakMap);


// * WeakMap does not support iteration and methods keys(), values(), entries(), so there’s no way to get all keys or values from it.

// => WeakMap has only the following methods:

// weakMap.set(key, value)
// weakMap.get(key)
// weakMap.delete(key)
// weakMap.has(key)



// => Usecase of WeakMap

// * application of a WeakMap is additional data storage

// * If we’re working with an object that “belongs” to another code, maybe even a third-party library, and would like to store some data associated with it, that should only exist while the object is alive – then WeakMap is exactly what’s needed.

// * We put the data to a WeakMap, using the object as the key, and when the object is garbage collected, that data will automatically disappear as well.



// * example

    // weakMap.set(john, "secret documents");
    // if john dies, secret documents will be destroyed automatically


// => real-world example

// * usecase- visiter count

// 📁 visitsCount.js
let visitsCountMap = new WeakMap(); // weakmap: user => visits count

// increase the visits count
function countUser(user) {
  let count = visitsCountMap.get(user) || 0;
  visitsCountMap.set(user, count + 1);
}


// * usecase- catching

let cache = new WeakMap();

function process(obj) {
    if (!cache.has(obj)) {
        let result = obj;
        cache.set(obj, result);
        return result;
    }
    return cache.get(obj);
}

let obj = {}

let result1 = process(obj);
let result2 = process(obj);

obj = null;




// ***** WeakMap ***** //

// WeakSet behaves similarly:

// It is analogous to Set, but we may only add objects to WeakSet (not primitives).
// An object exists in the set while it is reachable from somewhere else.
// Like Set, it supports add, has and delete, but not size, keys() and no iterations.


// example

let visitedSet = new WeakSet();

let john = { name: 'John' };
let pete = { name: 'Pete' };
let mary = { name: 'Mary' };

visitedSet.add(john);
visitedSet.add(pete);
visitedSet.add(john);

console.log(visitedSet.has(john));

console.log(visitedSet.has(mary));

john = null;




// => Summary

// * WeakMap is Map-like collection that allows only objects as keys and removes them together with associated value once they become inaccessible by other means.

// * WeakSet is Set-like collection that stores only objects and removes them once they become inaccessible by other means.

// * Their main advantages are that they have weak reference to objects, so they can easily be removed by garbage collector.

// * That comes at the cost of not having support for clear, size, keys, values…

// * WeakMap and WeakSet are used as “secondary” data structures in addition to the “primary” object storage. Once the object is removed from the primary storage, if it is only found as the key of WeakMap or in a WeakSet, it will be cleaned up automatically.




// Tasks

// task-1

let message = [
    {text: 'Hello', from: 'John'},
    {text: 'How goes?', from: 'John'},
    {text: 'See you soon', from: 'Alice'},
];

let readMessages = new WeakSet();

readMessages.add(message[0]);
readMessages.add(message[1]);

readMessages.add(message[0]);

console.log(`Read message 0: ${readMessages.has(message[0])}`);

message.shift();



// task-2

let message2 = [
    {text: 'Hello', from: 'John'},
    {text: 'How goes?', from: 'John'},
    {text: 'See you soon', from: 'Alice'},
];

let readDate = new WeakMap();

readDate.set(message2, new Date('2024-08-13'));

console.log(readDate);