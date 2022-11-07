import promptSync from "prompt-sync";

const prompt = promptSync();

const maxValue = 10;
const randomNumber = Math.floor(Math.random() * maxValue) + 1;
let status = false;

while (!status) {
  let userInput = prompt(
    "Guess a random number between 1 and " + maxValue + ""
  );
  userInput = Number(userInput);
  if (userInput === maxValue) {
    status = true;
    console.log("You Won! The number was " + randomNumber);
  } else if (userInput > maxValue) {
    console.log("Sorry, your guess is too Hight");
  } else {
    console.log("sorry, your guess is too low");
  }
}
console.log(randomNumber);
