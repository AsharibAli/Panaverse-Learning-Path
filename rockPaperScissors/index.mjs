import randomInteger from "random-int";
import PromptSync from "prompt-sync";

// The available choices
let choices = ["rock", "paper", "scissors"];

// These will be the messages that are shown to the user
let userPrompt = "o for rock, 1 for paper, or 2 scissors";
let outcome = "ready to play.";

// Computer chooses randomly
let computerChoise = randomInteger(0, 2);
computerChoise = choices[computerChoise];

// prompt the user for an output
const prompt = PromptSync();
let userInput = prompt(userPrompt);
let userChoice = prompt(userInput);

if (computerChoise === userChoice) {
  outcome = "Draw";
} else if (computerChoise === "rock" && userChoice === "paper") {
  outcome = "Player Wins";
} else if (computerChoise === "rock" && userChoice === "scissors") {
  outcome = "Computer Wins";
} else if (computerChoise === "paper" && userChoice === "rock") {
  outcome = "Computer Wins";
} else if (computerChoise === "paper" && userChoice === "scissors") {
  outcome = "Player Wins";
} else if (computerChoise === "scissors" && userChoice === "rock") {
  outcome = "Player Wins";
} else if (computerChoise === "scissors" && userChoice === "paper") {
  outcome = "Computer Wins";
}

console.log("Computer chooses" + computerChoise);
console.log("Player chooses" + userChoice);
console.log(outcome);
