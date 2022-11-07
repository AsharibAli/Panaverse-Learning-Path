import PromptSync from "prompt-sync";
const prompt = PromptSync();

// var name = prompt("What is your Name?");

// console.log(name);

var num = prompt("Give a Number: ");
console.log("Your Number + 4 = ");
console.log(Number(num) + 4);
