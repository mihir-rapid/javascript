// closure() = a function defined inside of another function, the inner function has access to variables & scope of the outer function. Allow for private variable & state maintenance


// Example-1

function outer() {
    let message = "inside outer";
    function inner() {
        console.log(message);
    }
    inner();
}
outer();


// Example-2

function createCounter() {

    let count = 0;

    function incrementCount() {
        count++;
        console.log(`Count increased to: ${count}`);
    }

    function getCount() {
        return count;
    }

    return {incrementCount, getCount}
}

const counter = createCounter();
counter.incrementCount();
counter.incrementCount();
counter.incrementCount();

console.log(`The current count is ${counter.getCount()}`);


// Example-3

function createGame() {

let score = 0

    function increaseScore(points) {
        score += points;
        console.log(`+${points} pts`);
    }

    function decreaseScore(points) {
        score -= points;
        console.log(`-${points} pts`);
    }

    function getScore() {
        return score;
    }

    return {increaseScore, decreaseScore, getScore};
}

const game = createGame();

game.increaseScore(8);
game.decreaseScore(3);
game.increaseScore(10);

console.log(`The final score is ${game.getScore()} pts`);