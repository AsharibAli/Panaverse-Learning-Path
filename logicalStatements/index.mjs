import PromptSync from "prompt-sync";
const prompt = PromptSync();

// let asharibIsFromPakistan = true;
// if (asharibIsFromPakistan) {
//   console.log("Yes, I'm Asharib From Pakistan");
// } else {
//   console.log("No, i'm Asharib not from Pakistan");
// }

// let percentage = prompt("What's your percentage?");
// if (percentage >= 80) {
//   console.log("Congratulations, you've the highest grade 'A+'.");
// } else if (percentage >= 70) {
//   console.log("A");
// } else if (percentage >= 60) {
//   console.log("B");
// } else if (percentage >= 50) {
//   console.log("C");
// } else if (percentage >= 40) {
//   console.log("D");
// } else {
//   console.log("Fail");
// }

// Terminary Statement
// let percentage = prompt("Tell me your ptg?");
// const resultOfMine =
//   percentage >= 80
//     ? "Passed, ShukarAlhamdulillah"
//     : "Failed, sorry but i do my best";
// console.log(resultOfMine);

// let isInPk = prompt("Are you a Pakistani?");
// const country = isInPk === "false" ? "Yes, I'm " : "No, i'm not";
// console.log(country);

// Switch Case
let location = prompt("Where are you?");
switch (location) {
  case "Pakistan":
    console.log("Salam, Asharib Bhai");
    break;

  case "India":
    console.log("Maje me, Asharib Bhau");
    break;

  case "SaudiaArab":
    console.log("Habibi, Asharib Matakamarat");
    break;

  case "America":
    console.log("Hello, Mr. Asharib");
    break;
  default:
    console.log("Hi Asharib");
}
