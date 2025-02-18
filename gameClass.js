export default class Controller {
  turnX = true;

  constructor(p1, p2, round) {
    this.grid = GameBoard();
    this.round = round;

    this.p1 = p1;
    this.p2 = p2;
  }

  changeTurn(round) {
    this.turnX = round % 2 !== 0;
    return this.p1.getTac() === "X" && X ? this.p1 : this.p2;
  }



  cellLocation(number) {
    let count = 0;

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        count++;
        if (count === number) {
          return [i, j];
        }
      }
    }
  }

  checkGameState(grid, tac) {
    this.checkRow(grid, tac);
    this.checkCols(grid, tac);
    this.checkDiagonals(grid, tac);
  }

  checkRow(grid, tac) {
    for (let i = 0; i < 3; i++) {
      let countElements = 0;
      for (let j = 0; j < 3; j++) {
        if (grid[i][j] === tac) {
          countElements++;
        }
      }
      if (countElements === 3) {
        return true;
      }
    }
  }

  checkCols(grid, tac) {
    for (let i = 0; i < 3; i++) {
      let countElements = 0;
      for (let j = 0; j < 3; j++) {
        if (grid[j][i] === tac) {
          countElements++;
        }
      }
      if (countElements === 3) {
        return true;
      }
    }
  }

  checkDiagonals(grid, tac) {
    let count = 0;
    for (let i = 0; i < 3; i++) {
      if (grid[i][i] === tac) {
        count++;
      }
    }
    if (count === 3) {
      return true;
    }

    count = 0;
    let j = 2;
    for (let i = 0; i < 3; i++) {
      if (grid[i][j] === tac) {
        count++;
      }
      j--;
    }
    if (count === 3) {
      return true;
    }

    return false;
  }

  updateBoard(grid, tac, entry) {
    let i = entry[0];
    let j = entry[1];
    grid[i][j] = tac;
    return grid;
  }

  checkValidEntry(entry, board) {
    if (board[entry[0]][entry[1]] !== 0) {
      console.log("Invalid Entry, choose another");
      return false;
    } else {
      console.log("Valid Entry");
      return true;
    }
  }

  getCell(choice) {
    if (choice > 9) {
      console.log("INvalid");
      return;
    }

    cell = this.cellLocation(choice);

    if (!this.checkValidEntry(cell, this.grid)) {
        return;
    }

    this.player = this.changeTurn(this.round);
    
    this.updateBoard(this.grid, this.player.getTac(), cell)

    if (this.checkGameState(this.grid, this.player.getTac())) {
        console.log("Winner: " + this.player.name)
        return this.player;
    }

    this.round++;

    if (this.round > 9) {
        console.log("Draw!");
        return;
    }
    
  }
}

function GameBoard() {
  let grid = [];

  for (let i = 0; i < 3; i++) {
    grid[i] = [];
    for (let j = 0; j < 3; j++) {
      grid[i].push(0);
    }
  }

  return grid;
}

export function makePlayer(name, tac) {
  const getTac = () => tac;

  return {
    name,
    getTac,
  };
}
