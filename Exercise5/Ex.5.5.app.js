let grid = [];
const numCells = 64;
let value = 0;
let rowArray = [];
for (let i = 0; i <= numCells; i++) {
    if (value % 8 === 0) {
        if (rowArray !== undefined) {
            grid.push(rowArray);
        }
        rowArray = [];
    }
    value++;
    let tempValue = value;
    rowArray.push(tempValue);
    if (value === 8) {
        grid.push(rowArray);
    }
}
console.log(grid);
