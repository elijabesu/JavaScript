let firstCard = 2;
let secondCard = 5;

let sum = firstCard + secondCard;
// console.log(sum);

let hasBlackjack = false;
let isAlive = true;

if (sum <= 20) {
    console.log("Do you want to draw a new card?");
} else if (sum === 21) {
//    === is strictly equal (compares types as well)
//    == is less strict (compares only content)
    hasBlackjack = true;
    console.log("Wohoo! You've got Blackjack!");
// } else if (sum > 21) {
} else {
    isAlive = false;
    console.log("You're out of the game.");
}