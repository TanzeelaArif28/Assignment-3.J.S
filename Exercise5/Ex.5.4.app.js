let myTable = [];
const numRows = 5;
const numCols = 3;
let number  = 0;
for (let i = 0; i < numRows; i++) {
    let tempTable = []
    for (let j = 0; j < numCols; j++) {
        number++;
        tempTable.push(number);
    }
    myTable.push(tempTable);
}
console.table(myTable);
