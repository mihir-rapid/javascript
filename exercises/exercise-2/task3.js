// 3. Write​ ​ a ​ ​ JavaScript​ ​ program​ ​ to​ ​ find​ ​ the​ ​ most​ ​frequent​ ​ item​ ​ of​ ​ an​ ​ array.

// static_array = [0,1,1,2,3,4,5,5,5,6,7,7,8,9]
// Output = 5



// using count variable 

function findMostFrequent() {
    let arr = [0,1,1,2,3,4,5,5,5,6,7,7,8,9];
    arr.sort((a, b) => a - b);

    let count = 1;
    let max = 0;
    let element;

    for (let i=0; i<arr.length; i++) {
        if (arr[i] == arr[i+1]) {
            count++;
        } else {
            count = 1;
        }

        if (count > max) {
            max = count;
            element = arr[i];
        }
    }

    console.log('most frequent element is', element);
}

findMostFrequent();


// using object

// function findMostFrequent() {
//     let arr = [0,1,1,2,3,4,5,5,5,6,7,7,8,9];
//     let obj = {};

//     arr.forEach((element) => {
//         if (!obj.hasOwnProperty(element)) {
//             obj[element] = 1;
//         } else {
//             obj[element]++;
//         }
//     });

//     let mostFrequentElement = Object.keys(obj).reduce((prev, next) => {
//         if (obj[prev] > obj[next]) {
//             return prev;
//         } else {
//             return next;
//         }
//     });

//     console.log('most frequent element is', mostFrequentElement);
// }

// findMostFrequent();

