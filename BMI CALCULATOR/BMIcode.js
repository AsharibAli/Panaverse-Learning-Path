/*
// Task for BMI (Body Mass Index) calculator Assignment.

Set values for height in inches and weight in pounds, then convert the values to
centimeters and kilos, outputting the results to the console:
• 1 inch is equal to 2.54 cm
• 2.2046 pounds is equal to 1 kilo
Output the results. Then, calculate and log the BMI: this is equal to weight (in kilos)
divided by squared height (in meters). Output the results to the console.

*/

const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  if (height === "" || height < 0 || isNaN(height)) {
    //NaN !== NaN
    results.innerHTML = "Please Provide Vaild Value";
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = "Please Provide Vaild Value";
  } else {
    //calculate BMI
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //display the results
    results.innerHTML = `<span>${bmi}</span>`;
  }
});

//notes
//NaN !== NaN, use the isNaN() function
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN
