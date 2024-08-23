// write a function and take arr is input and return the sum of two smallest element & sum of two largest element in arr
// ex: [2, 5, 10, 15, 20, 30] = '7' & '50';

const findSum = (arr) => {

    arr.sort((a, b) => a - b);
    console.log(arr[0] + arr[1]);

    arr.sort((a, b) => b - a);
    console.log(arr[0] + arr[1]);

}

findSum([2, 5, 10, 3, 15, 20, 30]);