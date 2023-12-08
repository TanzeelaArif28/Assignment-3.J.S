
let start = 10;
function countdown(value) {
  console.log("Countdown:", value);
  if (value < 1) {
    return;
  }
  if (value >= 1) {
    countdown(value - 1);
  }
}
function countdownSecond(value) {
  if (value > 0) {
    console.log("Countdown Second:", value);
    return countdownSecond(value - 1);
  }
}
countdown(start);
countdownSecond(start);
