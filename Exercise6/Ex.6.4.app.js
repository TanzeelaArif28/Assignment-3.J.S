
const resultsArray = [];
const Words = ["Awesome", "Fantastic", "Incredible", "Amazing", "Superb"];
const getRandomWordAndCalculate = () => {
  const userName = prompt("Please enter your name:");
  const randomWord = Words[Math.floor(Math.random() * Words.length)]
  console.log(`${userName}, you are ${randomWord}!`);
  for (let i = 0; i < 10; i++) {
    const value1 = i * 5;
    const value2 = i * i;
    const calculateResult = (a, b) => a + b;
    const response = calculateResult(value1, value2);
    resultsArray.push(response);
  }
  console.log("Results array:", resultsArray);
};
getRandomWordAndCalculate();
