
const num1 = 10;
const num2 = 5;
let operator = '+';
function calculate(num1, num2, operator) {
  if (operator === '+') {
    return num1 + num2;
  } else if (operator === '-') {
    return num1 - num2;
  } else {
    // If not presented with a valid operator, default to addition
    return num1 + num2;
  }
}
console.log(`Result of ${num1} ${operator} ${num2}: ${calculate(num1, num2, operator)}`);
operator = '-';
console.log(`Result of ${num1} ${operator} ${num2}: ${calculate(num1, num2, operator)}`);
