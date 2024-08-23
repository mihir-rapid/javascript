
const friends = ["Mihir", "Harshil", "Nishant", "Aryan", "Sonu"];

shuffleArr(friends);

console.log(friends);

function shuffleArr(arr) {
    
    for (let i=arr.length-1; i>0; i--) {

        const random = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[random]] = [arr[random], arr[i]];

    }

}
