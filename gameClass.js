
export default class Controller {
  turnX = true;

  constructor(p1, p2, round) {
    this.grid = GameBoard();
    this.round = round;

    this.p1 = p1;
    this.p2 = p2;

    this.player = this.changeTurn(round);
  }

  changeTurn(round) {
    this.turnX = round % 2 !== 0;
    return this.p1.getTac() === "X" && this.turnX ? this.p1 : this.p2;
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



  getCell(choice, board) {

    const cell = this.cellLocation(choice);


    this.player = this.changeTurn(this.round);

    this.updateBoard(this.grid, this.player.getTac(), cell);

    if (this.checkGameState(this.grid, this.player.getTac())) {
      if (this.player.getTac() === "X") {
        return 1;
      } else {
        return 2;
      }

    }

    this.round++;

    if (this.round > 9) {
      return 0;
    }

    return -1;
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
