//Alert in JavaScript
// alert("Use only ones");

// There are five things in a line of code
// 1. Keyword (var, let, const)
// 2. Idebtifier (That shows our project example, myCar)
// 3. Assignment operator ( = Assign the value to identifier)
// 4. Data or Values (In which we write our project data example, Tesla)
// 5. Semicollom (To make code more suitable and redeable)

// const myCar = "Tesla";

// Console.log
// let learn = "Asharib is Learning JavaScript";
// console.log(learn);

// Document.Write
// document.write("We use HTML for our Static page");

// Variable
// let fullName = "Asharib";

// Data types
// There are five data types in javascript which is Number, String, Bolleans, undefined, null

//Template Literals Old method
// let myFullName = "ASHARIB";
// let hello = "Hello " + myFullName;
// console.log(hello);

// Bactics ``
// var meName = `"ASHARIB ALI";
// Hello`;
// console.log(meName);

// typeOf operator
// let testCheck1 = 1;
// let testCheck2 = "String";
// let testCheck3 = true;
// let testCheck4 = undefined;
// let testCheck5 = null;
// console.log(typeof testCheck1);
// console.log(typeof testCheck2);
// console.log(typeof testCheck3);
// console.log(typeof testCheck4);
// console.log(typeof testCheck5);

// let v1 = "Birthday is on ";
// let v2 = 4;
// console.log(v1 + v2); // ← Type String

// Addition
// let number1 = "1";
// let number2 = "2";
// console.log(number1 + number2);

// Subtracion
// let new1 = 10;
// let new2 = 9;
// let new3 = 8;
// console.log(new1 - new2 * new3);

// Multiplication
// let multi1 = 5000;
// let multi2 = 2;
// let multi3 = 5;
// console.log((multi1 * multi2) / multi3);

// Divison
// let assign1 = 50;
// let assign2 = 5;
// let assign3 = 2;
// console.log((assign1 / assign2) * assign3);

// Exponention
// let add1 = 2;
// let add2 = 4;
// let add3 = 2;
// console.log(add1 ** add2 + add3);

// Modulus
// let mod1 = 100;
// let mod2 = 30;
// let mod3 = 30;
// console.log((mod1 % mod2) - mod3);

// Assignment Operators
// let attach1 = 100;
// console.log(attach1);
// attach1 += 10;
// console.log(attach1);
// attach1 -= 20;
// console.log(attach1);

// Comparison Operators
// let compare = 4;
// console.log(compare == 4); // True
// console.log(compare === 3); // False
// console.log(compare == 4); //
// console.log(compare != 4); // False
// console.log(compare > 5); // False
// console.log(compare < 5); // True
// console.log(compare >= 5); // False
// console.log(compare <= 5); // True

// Math Expressions  Familar Operations
// let add = 10 + 20;
// let subtraction = 40 - 10;
// let multiplication = 10 * 3;
// let divison = 60 / 2;
// let modulus = 60 % 8;

// console.log(add, subtraction, multiplication, divison, modulus);

// Math Expressions UnFamiliar Operators

// Post Increment
// let i = 1;
// let num = i--;
// console.log(num);

// Pre increament
// let a = 1;
// let num1 = --a;
// console.log(num1);

// Math Expression Eliminating Ambiguity
// let totalVal1 = (5 + 2) * 3 + 6;
// var totalVal2 = 2 * 4 * 4 + 2;
// console.table(totalVal1, totalVal2);

// Concatenating Text String.
// let userName = Asharib();
// console.log("Thanks," + userName + "!");

// if statement.
// let x = prompt("Where does the Asharib live?");
// let correctAnswer = "Pakistan";
// if (x == correctAnswer) {
//   alert("Correct!");
// }

// else statement
// let y = prompt("Where does the Asharib Live?");
// let correctAnswer = "Pakistan";
// if (y == correctAnswer) {
//   alert("Correct!");
//   console.log(y);
// } else {
//   alert("Wrong!");
//   console.log(y);
// }

//  Else if Statement
// let study = prompt("Where does Asharib Do Study?");
// let correctAnswer = "piaic";
// if (study == correctAnswer) {
//   alert("Keep Learning, Inshallah you will change the entire space");
//   console.log(study);
// } else if (study == "piai") {
//   alert("Too Close!");
// } else {
//   alert("You've wrote the wrong place!");
//   console.log(study);
// }

// Comparison Operators
// let a = 4 + 4 == "8"; // True
// let b = 2 + 2 === "4"; // False
// let c = 3 + 3 > "6"; // False
// let d = 2 + 2 >= "4"; // True
// let e = 3 + 4 !== 7; // False

// console.log(a, b, c, d, e);

// Testing Sets of Conditionals (logical Operators);
// let x = 6;
// let y = 10;
// let a1 = x < y && x === 6; // True
// let a2 = x < y && x !== 6; // False
// let a3 = x === y || y === 10; // True
// let a4 = (x === 6 && y === 4) || x < y; // True
// console.log(a1, a2, a3, a4);

// let b1 = x > y && x === 6; // False
// let b2 = x > y && x !== 6; // False
// let b3 = x === y || y === 10; // True
// let b4 = (x === 6 && y === 4) || x > y; // False
// console.log(b1, b2, b3, b4);

// If Statement Nested

// Ticketing System
// let country = prompt("Where do you live?");
//Number () function is used to convert the string to number
// let age = Number(prompt("What's your age?"));

// if (country === "Pakistan") {
//   if (age >= 18) {
//     console.log("Here is your ticket");
//   } else {
//     console.error("Age Restriction");
//   }
// } else {
//   console.log("Invalid Country");
// }

// Array (Store fruits in the variable);
// let fruits = ["ApplE", "Banana", "Orange", "Graphes"];
// console.log(fruits);

// let x = [1, true, 2, "Asharib", false, undefined, null];
// console.log(x);

// Arrays Adding and Removing Elements

// let pets = [];
// pets[0] = "Dog";
// pets[1] = "Cat";
// pets.push("Parrot", "Loin");
// pets.shift();
// pets.unshift("Elephent");
// console.log(pets);

// Slice and Splice Arrays

// Splice() Method
// const fruits = ["Banana", "Orange", "Grapes", "Apple", "Mango"];
// fruits.splice(2, 1, "Lemon", "Kiwi");
// console.log(fruits);

// Slice() Method
// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(1); // [Orange,Lemon,Apple,Mango]
// console.log(citrus);

// JavaScript Objects
// const car = {};
// car.name = "Flat";
// car.model = 5000;
// car.weight = 850;
// car.color = "white";
// console.log(car);

// Persons Objects - Key Value Pair Syntax
// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 30,
//   "eye-Colour": "Blue",
// };

// Access obj Properties
// person.age;
// person["eye-Colour"];
// console.log(person["eye-Colour"]);
// console.log(person.age);

// The Arrays Object
// Persons Array - Key Value Pair Syntax
// const persons = [
//   {
//     firstName: "Asharib",
//     lastName: "Ali",
//     age: 18,
//     "eye-Colour": "Black",
//   },
//   {
//     firstName: "Imtiaz",
//     lastName: "Ali",
//     age: 18,
//     "eye-Colour": "Black",
//   },
// ];
// // Acces to persons 1
// persons[0].age;
// persons[1].age;

// console.log(persons[1]);

// For Loops
// Syntax
// for (expression1; expression2; expression3) {
// Code Block to be executed
// }

// Example 1
// for (let i = 0; i < 3; i++) {
//   console.log("Hello World!");
// }

// Example 2
// for (let i = 0; i < 3; i++) {
//   console.log("Hello World!" + 1);
// }

// Example 3
let cleanestCities1 = ["Karachi", "Lahore", "Islamabad", "Peshawar"];
for (let i = 0; i <= 4; i++) {
  if ("Karachi" === cleanestCities1[i]) {
    console.log("It's one of the cleanest City");
  }
}

// Example 4;
let cleanestCities = ["Karachi", "Lahore", "Islamabad", "Peshawar"];
let matchFound = "no";
for (let i = 0; i <= 4; i++) {
  if ("Karachi" === cleanestCities[i]) {
    matchFound = "yes";
    alert("Its one of the cleanest City");
  }
}
if (matchFound === "no") {
  alert("Its not on the list");
}
