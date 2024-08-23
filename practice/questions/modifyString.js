// Take an array, deleteElement & replaceElement, if deleteElement exists in that array then delete it from array & at the index of deleteElement insert element replaceElement, < !all array should be unique >

const modifyString = (arr, deleteElement, replaceElement) => {

    console.log('original array:', arr);

    if (arr.includes(deleteElement)) {

        // delete
        const deleteArr = [...arr];
        const index = deleteArr.indexOf(deleteElement);
        deleteArr.splice(index, 1);
        console.log('deleteArr:', deleteArr);
        console.log('original array:', arr);

        // replace
        const replaceArr = [...deleteArr];
        replaceArr.splice(index, '', replaceElement);
        console.log('replaceArr:', replaceArr);
        console.log('original array:', arr);

        console.log('is Arrays are unique?:', !(deleteArr === replaceArr === arr));

    } else {
        console.log(`${deleteElement} not exist in array`, arr);
    }
}

const arr = ['rapidops', 'javascript', 'future'];
const deleteElement = 'javascript';
const replaceElement = 'rust';
modifyString(arr, deleteElement, replaceElement);
