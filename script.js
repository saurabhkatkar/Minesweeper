var rows = 10;
var cols = 10;
var size = 50;

var board = document.getElementById("game");

var grid = new Array(rows);

var totalBoxsOpened = 0;

let colsStyle = "";
for (let i = 0; i < grid.length; i++) {
  grid[i] = new Array(cols);
  colsStyle += size + 1 + "px ";
}

board.style.display = "grid";
board.style.gridTemplateColumns = colsStyle;
board.style.justifyContent = "center";

for (let i = 0; i < rows; i++) {
  for (let j = 0; j < cols; j++) {
    grid[i][j] = new Box(i, j, 10, size);
  }
}

let k = 0;

for (let i = 0; i < rows; i++) {
  grid[i][Math.floor(Math.random() * cols)].setMine();
}

for (let i = 0; i < rows; i++) {
  for (let j = 0; j < cols; j++) {
    grid[i][j].countMines();
    // grid[i][j].show();
  }
}

function getCircle() {
  var ele = document.createElement("span");
  ele.style.height = size / 2 + "px";
  ele.style.width = size / 2 + "px";
  ele.style.backgroundColor = "#666";
  ele.style.borderRadius = "50%";
  ele.style.display = "inline-block";
  return ele;
}

function showBoard() {
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      grid[i][j].show();
    }
  }
}
