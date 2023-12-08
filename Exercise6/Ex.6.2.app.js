
const descriptiveWords = ['awesome', 'creative', 'friendly', 'determined', 'joyful', 'thoughtful'];
function generateRandomDescription() {
  // Prompt the user for a name
  const userName = prompt('Enter a name:');
  if (userName) {
    const randomIndex = Math.floor(Math.random() * descriptiveWords.length);
    const randomWord = descriptiveWords[randomIndex];
    console.log(`The description for ${userName}: ${randomWord}`);
  } else {
    console.log('You did not enter a name. Please try again.');
  }
}
generateRandomDescription();
