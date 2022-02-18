var rows = 10;
var cols = 10;
var size = 50;

var width = window.innerWidth > 0 ? window.innerWidth : screen.width;
var height = window.innerHeight > 0 ? window.innerHeight : screen.height;

if (width < 500) size = Math.floor(width / 12);
var board = document.getElementById("game");
console.log(size);

var grid = new Array(rows);

var totalBoxsOpened = 0;
var isGameOver = false;

let colsStyle = "";
for (let i = 0; i < grid.length; i++) {
  grid[i] = new Array(cols);
  colsStyle += size + 1 + "px ";
}

board.style.display = "grid";
board.style.gridTemplateColumns = colsStyle;
board.style.justifyContent = "center";
board.style.marginTop = Math.floor((height - size * rows) / 2) + "px";
board.style.alignContent = "center";

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

function gameOver(isWinner) {
  if (isGameOver) return;

  isGameOver = true;

  showBoard();

  var h2 = document.getElementById("result");

  if (isWinner) {
    h2.textContent = "YOU WIN THE GAME.";
  } else {
    h2.textContent = "you lost the game";
  }

  // board.appendChild(h2);
}
