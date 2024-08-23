// return elements that has length bigger than 5

const arr = ['mouse', 'keyboard', 'mihir', 'monitor'];

const biggerElements = arr.filter((element) => {
    if (element.length > 5) {
        return element;
    }
});

console.log(biggerElements);
