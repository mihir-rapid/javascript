// array of repeated elements in both array

function main(arr1, arr2) {
    return arr1.filter((n) => arr2.includes(n));
}

console.log(main([10, 20, 30, 50], [30, 40, 50, 10]));
