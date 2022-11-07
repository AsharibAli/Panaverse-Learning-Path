import promptSync from "prompt-sync";

const prompt = promptSync();

let userInput = prompt(
  "On a scale of 1-10, How much do you like the name Alexander"
);
userInput = Number(userInput);
console.log(userInput);

if (userInput > 0 && userInput < 11) {
  userInput = false;
} else {
  userInput = true;
}

while (userInput) {
  ("On a scale of 1-10, How much do you like the name Alexander");
  console.log(userInput);
}
