// 1. Write​ ​ a ​ ​ JavaScript​ ​ function​ ​ to​ ​ get​ ​the​ ​ first​ ​ and​ ​ last​ ​ element​ ​ of​ ​ an​ ​ array.​ ​ Passing​ ​ a parameter​ ​ 'n'​ ​ will​ ​ return​ ​ the​ ​ first​ ​ 'n'​ ​ elements​ ​ of​ ​ the​ ​ array​ ​ and​ ​last​ ​ ‘n’​ ​ elements​ ​ of​ ​ the array.

// static_array = [0,1,2,3,4,5,6,7,8,9]
// Input = 3
// Output = First 3 element : [0,1,2,] , Last 3 element : [7,8,9]



function getElements(n) {

    let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    let startingElements = arr.slice(0, n);
    let endingElements = arr.slice(-n);

    console.log(`first ${n} elements is`, startingElements);
    console.log(`last ${n} elements is`, endingElements);
}

getElements(1);