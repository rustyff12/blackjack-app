let firstCard = 10;
let secondCard = 11;

//let firstCard = Math.floor(Math.random() *10) +2;
//let secondCard = Math.floor(Math.random() *10) +2;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";


console.log(sum);

if (sum <= 20) {
    message = "Do you want to draw a new card? 🙂";
} else if (sum === 21) {
    message = "Wohoo! You've got Blackjack! 🥳";
    hasBlackJack = true;
} else {
    message = "You're out of the game! 😭";
    isAlive = false;
}

// CASH OUT!
console.log(hasBlackJack);
console.log(isAlive);
console.log(message);




/*
let age = 22

if (age < 21) {
    console.log("You can not enter the club!");
} else {
    console.log("Welcome!");
}
*/





