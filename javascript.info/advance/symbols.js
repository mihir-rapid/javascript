// A "symbol" represents unique identifier

// => symbols are unique & immutable datatype

// => creating symbol

let id = Symbol("id");
console.log(id);


// => symbols are guarnteed to be unique
// if we create many symbols with exactly the same description, they are different values. The description is just a label that doesn’t affect anything.

let id1 = Symbol("id1");
let id2 = Symbol("id1");
console.log(id1 == id2);


// a symbol is a “primitive unique value” with an optional description



// => Hidden properties of symbol
// * Symbols allow us to create “hidden” properties of an object, that no other part of code can accidentally access or overwrite.

let newUser = {
    name: 'John'
}

let id3 = Symbol("id3");

newUser[id3] = 1;

console.log(newUser[id3]);


// => benifits of using Symbol("id") over string "id":

// * As user objects belong to another codebase, it’s unsafe to add fields to them, since we might affect pre-defined behavior in that other codebase. However, symbols cannot be accessed accidentally. The third-party code won’t be aware of newly defined symbols, so it’s safe to add symbols to the user objects.



// => Symbols in object literls {...}
// to use symbols in object literals we need square bracket [], because we need the value from the variable id as the key, not the string “id”.

let id4 = Symbol("id4");

let user = {
    name: "Mihir",
    [id4]: 123
}

console.log(user);


// => symbols are skipped in for...in

let id5 = Symbol("id5");

let user1 = {
    name: "Mihir",
    age: 20,
    [id5]: 1
}

for (let key in user1) {
    console.log(key);   // name, age
}


// Object.keys();

console.log(Object.keys(user1));

// Object.assign copies both string and symbol properties:

let clone = Object.assign({}, user1);

console.log(clone[id5]);

//  The idea is that when we clone an object or merge objects, we usually want all properties to be copied (including symbols like id).s




// => global symbols

let id49 = Symbol.for("id50");
let id50 = Symbol.for("id50");
console.log(id49 == id50);  // true


// let id49 = Symbol("id50");
// let id50 = Symbol("id50");
// console.log(id49 == id50);   // false


// * Symbols inside the registry are called global symbols. If we want an application-wide symbol, accessible everywhere in the code


// => Symbol.keyFor
// * We have seen that for global symbols, Symbol.for(key) returns a symbol by name. To do the opposite – return a name by global symbol – we can use: Symbol.keyFor(sym):

let sym1 = Symbol.for("name");
let sym2 = Symbol.for("id");

console.log(Symbol.keyFor(sym1));   // name
console.log(Symbol.keyFor(sym2));   // id


// => The Symbol.keyFor internally uses the global symbol registry to look up the key for the symbol.
// * So it doesn’t work for non-global symbols. If the symbol is not global, it won’t be able to find it and returns undefined.

let globalSymbol = Symbol.for("name");
let localSymbol = Symbol("name");

console.log(Symbol.keyFor(globalSymbol));
console.log(Symbol.keyFor(localSymbol));

// * Although, all symbols have the description property.
console.log(localSymbol.description);



// => System symbols

// * Symbol.hasInstance
// * Symbol.isConcatSpreadable
// * Symbol.iterator
// * Symbol.toPremitive



// => Summary

// * Symbol is a primitive type for unique identifiers.

// * Symbols are created with Symbol() call with an optional description (name).

// * Symbols are always different values, even if they have the same name. If we want same-named symbols to be equal, then we should use the global registry: Symbol.for(key) returns (creates if needed) a global symbol with key as the name. Multiple calls of Symbol.for with the same key return exactly the same symbol.

// * Symbols have two main use cases:

// * “Hidden” object properties.

// * If we want to add a property into an object that “belongs” to another script or a library, we can create a symbol and use it as a property key. A symbolic property does not appear in for..in, so it won’t be accidentally processed together with other properties. Also it won’t be accessed directly, because another script does not have our symbol. So the property will be protected from accidental use or overwrite.

// * So we can “covertly” hide something into objects that we need, but others should not see, using symbolic properties.