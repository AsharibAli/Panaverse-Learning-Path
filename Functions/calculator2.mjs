const array = [];
for (let i = 0; i < 10; i++) {
  let value1 = i * 5;
  let value2 = i * i;
  let result = calculator(value1, value2);
  array.push(result);
}

console.log(array);

// const value1 = 1;
// const value12 = 2;

// let operator = "-";

function calculator(a, b, c) {
  if (c === "-") {
    return a - b;
  } else {
    return a + b;
  }
}

// calculator(value1, value2, operator);
