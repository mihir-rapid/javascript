
function findSingleElement() {
    let arr = [1, 1, 2, 2, 3, 3, 4, 4, 5, 6, 6];
    arr.sort((a, b) => a - b);

    for (let i=0; i<arr.length; i++) {
        if (arr[i] == arr[i+1]) {
            return arr[i];
        }
    }
}

// findSingleElement();
console.log(findSingleElement());
