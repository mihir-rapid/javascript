// 4. Write​ ​ a ​ ​ JavaScript​ ​ program​ ​ to​ ​ shuffle​ ​ an​ ​array.

// static_array = [0,1,2,3,4,5,6,7,8,9]
// Output = [4,1,5,2,3,0,6,8,9,7]



function shuffleArray() {
    
    let arr = [0,1,2,3,4,5,6,7,8,9];

    for (let i=arr.length-1; i>0; i--) {

        let random = Math.floor(Math.random() * (i+1));

        [arr[i], arr[random]] = [arr[random], arr[i]]
    }

    console.log(arr);
}

shuffleArray();