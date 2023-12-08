
let value = "1000";
(function() {
  let value = "New value from IIFE 1";
  console.log("Inside IIFE 1:", value);
})();
let result = (function() {
  let value = "New value from IIFE 2";
  console.log("Inside IIFE 2:", value);
  return value;
})();

console.log("Result after IIFE 2:", result);
let anonymousFunction = function(parameterValue) {
  let value = parameterValue;
  console.log("Inside anonymous function:", value);
};

anonymousFunction("New value from anonymous function");
