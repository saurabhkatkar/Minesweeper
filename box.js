class Box {
  constructor(i, j, t, s) {
    this.i = i;
    this.j = j;
    this.t = t;
    this.s = s;
    this.revealed = false;
    this.mine = false;
    this.totalMines = 0;

    this.displayBox();
  }

  displayBox() {
    var box = document.createElement("div");
    box.id = this.i * this.t + this.j;
    box.style.height = this.s + "px";
    box.style.width = this.s + "px";
    box.style.border = "1px solid black";
    box.style.textAlign = "center";
    box.style.display = "flex";
    box.style.alignItems = "center";
    box.style.justifyContent = "center";
    box.style.cursor = "pointer";
    box.style.fontSize = "xx-large";
    box.style.fontWeight = "bold";
    box.addEventListener("click", (e) => this.show());
    document.getElementById("game").appendChild(box);
  }

  setMine() {
    this.mine = true;
  }

  countMines() {
    if (this.mine) {
      this.totalMines = -1;
      return;
    }
    let cnt = 0;

    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        if (
          this.i + i >= 0 &&
          this.i + i < rows &&
          this.j + j >= 0 &&
          this.j + j < cols
        )
          if (grid[this.i + i][this.j + j].mine) {
            cnt++;
          }
      }
    }

    this.totalMines = cnt;
  }

  show() {
    if (this.revealed) return;
    this.revealed = true;
    let id = this.i * this.t + this.j;
    var e = document.getElementById(id);
    if (this.mine) {
      e.appendChild(getCircle());
      this.gameOver(false);
    } else {
      if (this.totalMines > 0) e.textContent = this.totalMines;
      e.style.backgroundColor = "rgb(210 210 210)";
      if (this.totalMines == 0) this.floodFill();
    }
    totalBoxsOpened++;

    if (totalBoxsOpened == rows * cols - rows) {
      this.gameOver(true);
    }
  }

  gameOver(isWinner) {
    showBoard();
    var h2 = document.getElementById("result");

    if (isWinner) {
      h2.textContent = "YOU WIN THE GAME.";
    } else {
      h2.textContent = "you lost the game";
    }
  }

  floodFill() {
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        if (
          this.i + i >= 0 &&
          this.i + i < rows &&
          this.j + j >= 0 &&
          this.j + j < cols
        )
          if (grid[this.i + i][this.j + j].totalMines >= 0) {
            grid[this.i + i][this.j + j].show();
          }
      }
    }
  }
}
