
const modifyArr = (arr, deleteElement, replaceElement) => {

    console.log('original array:', arr);

    if (arr.includes(deleteElement)) {

        // delete
        const deleteArr = [...arr];
        const index = deleteArr.indexOf(deleteElement);
        deleteArr.splice(index, 1);
        console.log('delete array:', deleteArr);
        console.log('original array:', arr);

        // replace
        const replaceArr = [...deleteArr];
        replaceArr.splice(index, '', replaceElement);
        console.log('replace array:', replaceArr);
        console.log('original array:', arr);

        console.log(`Is 3 Arrays are unique? ${!(arr == deleteArr == replaceArr)}`);

    } else {
        console.log(`${deleteElement} not exists in arr:`, arr);
    }
}

modifyArr(['mouse', 'javascript', 'rapidops'], 'javascript', 'rust');