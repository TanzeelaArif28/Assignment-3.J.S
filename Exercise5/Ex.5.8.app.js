let outputString = '';
const skipNumber = 3; 
for (let i = 1; i <= 10; i++) {
  if (i === skipNumber) {
    continue;
  }
  outputString += i;
}
console.log("Using 'continue':", outputString);
outputString = '';
for (let i = 1; i <= 10; i++) {
  if (i === skipNumber) {
    break;
  }
  outputString += i;
}
console.log("Using 'break':", outputString);
