const character = "#";
const count = 8;
const rows = [];


let inverted = true;



function padRow(rowNumber, rowCount) {
  return (
    " ".repeat(rowCount - rowNumber) +
    character.repeat(2 * rowNumber - 1) +
    " ".repeat(rowCount - rowNumber)
  );
}


for (let i = 1; i <= count; i ++) {
  if (inverted) {
    true;
    rows.unshift(padRow(i,count));
  } else {
    rows.push(padRow(i,count));

  }
  
}
  
let result = "";

for (const row of rows) {
  let result = result + row + "\n";
}

console.log(result);
