// JavaScript variables can belong to the local or global scope.
// Global variables can be made local (private) with closures.

//global scope
let x = 1;

const init = () => {
    //local scope
    let myValue = 2;
    console.log(x);
    console.log(myValue);

    const displayValue = () => {
        console.log(x += 5);
        console.log(myValue += 1);
    };

    const getMyValue = () => {
        return myValue;
    };

    // displayValue();
    return { displayValue, getMyValue };
};

const result = init();

result.displayValue();
result.displayValue();

console.log(result.getMyValue());



//example 
const createGame = () => {

    let score = 0;

    const increaseScore = (points) => {
        score += points;
        console.log(`+${points}pts`);
    };

    const decreaseScore = (points) => {
        score -= points;
        console.log(`-${points}pts`);
    };

    const getScore = () => {
        return score;
    };

    return { increaseScore, decreaseScore, getScore };
};


const game = createGame();

game.increaseScore(5);
game.decreaseScore(3);

console.log(`final score ${game.getScore()}pts`);