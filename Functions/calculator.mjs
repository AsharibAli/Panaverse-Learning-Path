const value1 = 1;
const value12 = 2;

let operator = "-";

function calculator(a, b, c) {
  if (operator === "-") {
    console.log(a - b);
  } else {
    console.log(a + b);
  }
}

calculator(value1, value2, operator);
