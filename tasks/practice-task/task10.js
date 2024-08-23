// Write a function that takes in an array of objects with a "name" property and returns an array of the names sorted alphabetically 

function sortNames(arr) {
    const names = arr.map((obj) => obj.name);
    return names.sort();
}

const arr = [ {name: 'zenith'}, {name: 'aryan'}, {name: 'mihir'} ];
console.log(sortNames(arr));
