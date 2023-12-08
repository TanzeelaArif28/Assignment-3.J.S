const myObject = {
    item1: 'Apple',
    item2: 'Banana',
    item3: 'Orange'
  };
  console.log("Object Properties and Values:");
  for (const property in myObject) {
    if (myObject.hasOwnProperty(property)) {
      console.log(`${property}: ${myObject[property]}`);
    }
  }
  const simpleArray = ['Apple', 'Banana', 'Orange'];
  console.log("\nArray Values:");
  for (let i = 0; i < simpleArray.length; i++) {
    console.log(simpleArray[i]);
  }
  