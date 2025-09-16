const character = "#";
const count = 8;
const rows = [];

function padRow(rowNumber, rowCount) {
  return " ".repeat(rowCount-rowNumber) + character.repeat(2 * rowNumber -1) + " ".repeat(rowCount-rowNumber);
}

/*TODO:Change the code to different kind of loop //
for (let i = 1; i <= count; i ++) {
  rows.push(padRow(i,count));
}
  */


let done = 0;

while (rows.length < count) {
done++

rows.push(padRow(rows.length+1,count));

}



let result = "";

for (const row of rows) {
  let result = result + row + "\n";
}

console.log(result);
