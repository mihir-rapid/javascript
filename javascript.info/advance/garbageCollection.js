// memory management in javascript is automatic & invisible to us.

// => the main concept of memory management in javascript is 'REACHABILITY'

// * reachable values are those which is in use somehow, they are guaranteed to be stored in memory
// ** example: current execution functions & it's local variable & parameters, other functions on current chain nested & it's local variables & parameters, global variables & any other values considered to be reachable

// ** example: reference will be removed

let user = {
    name: 'John'
};

user = null;    // reference deleted, garbage collector junk the data & free memory


// ** example: 

let user1 = {
    name: 'John'
};

let admin1 = user1;

user1 = null;   

console.log(admin1, user1);    // user1 deleted, but it's reference stays with the admin via global variable


// ** more complex example

function marry(man, woman) {
    woman.husband = man;
    man.wife = woman;

    return {
        father: man,
        mother: woman
    };
};

let family = marry({name: 'John'}, {name: 'Ann'});

console.log(family);

delete family.father;
delete family.mother.husband;

console.log(family);

family = null;

console.log(family);



// => the basic garbage collection algoritham called 'MARK & SWEEP'

// * The garbage collector takes roots and “marks” (remembers) them.
// * Then it visits and “marks” all references from them.
// * Then it visits marked objects and marks their references. All visited objects are remembered, so as not to visit the same object twice in the future.
// * …And so on until every reachable (from the roots) references are visited.
// * All objects except marked ones are removed.


 
// => some of garbage collection optimizations:

// * generational collection
// * incremental collection
// * ideal-time collection



// => The main things to know:

// * Garbage collection is performed automatically. We cannot force or prevent it.
// * Objects are retained in memory while they are reachable.
// * Being referenced is not the same as being reachable (from a root): a pack of interlinked objects can become unreachable as a whole, as we’ve seen in the example above.
