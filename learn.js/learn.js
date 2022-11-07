// ways to print in javascript
console.log("Hello World");
alert("me");
document.write("Asharib Ali");


// 2. JavaScript Console API
console.log("Hello World", 10 + 10, "Another Log");
console.warn("This is warning, be aware!!");
// console.error("This is an error");

// 3. JavaScript Variables
// What are variables? - containers to store data values in javascript

let number1 = 32;
let number2 = 35;
console.log(number1 + number2);

// 4. Data types in JavaScript
 
// Number
let num1 = 600;
let num2 = 400;
console.log(num1 + num2);

// String 
let str1 = "This is a string";
let str2 = 'This is also a srting';
console.log(str1 + str2);

// Objects
let marks = {
    ali: 50,
    shahnoor: 12,
    asharib: 99
}
console.log(marks);

// Booleans 
let Boolean1 = true;
let Boolean2 = false;
console.log(Boolean1, Boolean2);

// Undefined
let und = undefined;
console.log(und);

// null
let n = null;
console.log(n);

/*
At a very high level, there are two of data types in JavaScript
 1. Primitive Data Types: undefined, null, number, string, booleans, symbol
 2. Reference Data Types: Arrays, Objects, Functions
*/

// Arrays 
let test = [1, 2, "Asharib", 4, 5];
console.log(test);

// OPERATORS IN JAVASCRIPT

// Arthimetic Operators
let a = 100;
let b = 100;

console.log("The value of a + b is ", a+b);
console.log("The value of a - b is ", a-b);
console.log("The value of a * b is ", a*b);
console.log("The value of a / b is ", a/b);

// Assignments Operators
let c;
c = +2;
c = -2; 
c = c -2;
c *= 2;
c /= 2;

console.log(c);

// Comparison operators 
let x = 50;
let y = 51;
console.log(x == y);
console.log(x >= y);
console.log(x <= y);
console.log(x > y);
console.log(x < y);

// Logical Operators

// Logical End
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

// Logical or
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

// Logical not
console.log(!false);
console.log(!true);

// Function in JavaScrit
function avg(a, b) {
    c = (a + b) / 2;
    return c;
}

// // What is Dry principle? -- Do not repeat yourself
c1 = avg(4, 6);
c2 = avg(14, 16);
console.lo(c1, c2);

// Conditions in JavaScript
let age = 19;
// single if statement
if(age> 18){
    console.log('you can drink soft drinks');
} else {
    console.log('you cannot drink soft drinks')
};

age = 25;
// if - else Ladder
if(age > 32){
    console.log("you are not a kid");
} 
else if(age >26){
    console.log("Bache nahi rahe");
}
else if(age >22){
    console.log("Yes, Bache nahi rahe");
}
else if(age > 18){
    console.log("18 Ka Hogaya ho, Shadi Krskta Ho");
}

else{
    console.log("Bache rahe");
}
console.log("End of Ladder");


let arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr);
for(let i=0;i<arr.length;i++){
    if(i==2){
        // break;
        continue;
    }
    console.log(arr[i])
}


arr.forEach(function(element){
    console.log(element);
})
const ac = 0;
ac++;
ac = ac +1;
let j = 0;
while(j<arr.length){
    console.log(arr[j]);
    j ++;
}

let myArr = ["Fan", "Camera", 34, null, true, false];
// Array Methods 
console.log(myArr.length);

myArr.length     // ye array ki length ko dekahie ga.
myArr.pop();     // last name of dekhaie ga.
myArr.push("Asharib");    //kisi bhi symbol ko add karega
myArr.shift();    // first name of dekhaie ga.
myArr.unshift();    // name of unshift krke symbol dekhaie ga.
const newLan = myArr.unshift("Asharib");
console.log(newLan);
console.log(myArr);

// String Methods in JavaScript
let myLovelyString = "Harry is a good boy";
console.log(myLovelyString.length);
console.log(myLovelyString.indexOf("good"));
console.log(myLovelyString.lastIndexOf("good"));

console.log(myLovelyString.slice(1,4));
d = myLovelyString.replace("Asharib", "Ali");
d = d.replace("good", "bad");
console.log(d, myLovelyString);


let myDate = new Date();
console.log(myDate.getTime());
console.log(myDate.getFullYear());
console.log(myDate.getDay());
console.log(myDate.getHours());
console.log(myDate.getMinutes());

// DOM Manipulation
let elem = document.getElementById('click');
console.log(elem);

let elemClass = document.getElementsByClassName("Container");
Console.log(elemClass);
elemClass[0].style.background = "yellow";
elemClass[0].classList.add("bg-primary");
elemClass[0].classList.add("text-sucess");
console.log(elem.innerHTML);
console.log(elem.innerText);

console.log(elemClass[0].innerHTML);
console.log(elemClass[0].innerText);
tn = document.getElementsByTagName('div');
console.log(tn);
createdElement = document.createElement('p');
createdElement.innerHTML = "This is a created bold";
tn[0].replaceChild(createdElement2, createdElement);
createdElement2 = document.createdElement('b');
createdElement2.innerHTML = "This is a created bold";
tn[0].replaceChild(createdElement2, createdElement);
removingChild(element); ---> removes an element

// Selecting using Query 
 sel = document.querySelector('.container')
 console.log(sel);
 sel = document.querySelectorAll('.container');
console.log(sel);

function clicked() {
    console.log('The button was clicked');
}
window.onload = function () {
    console.log("The document was loaded");
}

// Events in JavaScript 
firstContainer.addEventListener('click', function(){
        document.querySelectorAll('.container')[1].innerHTML = "<b> We have clicked</b>"
        console.log("Clicked on Container")
    });


firstContainer.addEventListener('mouseover', function(){
        console.log("Mouse on Container")
    })

firstContainer.addEventListener('mouseout', function(){
    console.log("Mouse out of Container");
})

let prevHTML = document.querySelectorAll('.container')[1].innerHTML;
firstContainer.addEventListener('mouseup', function(){
    document.querySelectorAll('.container')[1].innerHTML = prevHTML;
    console.log("Mouse up when clicked on Container");
})

firstContainer.addEventListener('mousedown', function(){
    document.querySelectorAll('.container')[1].innerHTML = "<b> We have clicked</b>"
    console.log("Mouse down when clicked on Container");
})

// Arrow Functions
function summ(a, b){
return a+b;
}
summ = (a, b) => {
    return a + b;
}


logKaro = ()=>{
    document.querySelectorAll('.container')[1].innerHTML = "<b> Set interval fired</b>"
    console.log("I am your log")
}
// SetTimeout and setinterval
clr = setTimeout(logKaro, 5000);
clr = setInterval(logKaro, 2000);
use = clearInterval(clr)/clearTimeout(clr) to cancel setInterval/setTimeout

// JavaScript localStorage
localStorage.setItem('name', 'harry') 
localStorage 
localStorage.getItem('name')
localStorage.removeItem('name')
localStorage.clear();

// Json 
obj = {name: "harry", length: 1, a: {this: 'tha"t'}}
jso = JSON.stringify(obj);
console.log(typeof jso)
console.log(jso)
parsed = JSON.parse(`{"name":"harry","length":1,"a":{"this":"that"}}`)
console.log(parsed);
a = 34;
console.log(`this is my ${a}`)