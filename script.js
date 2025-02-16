function makePlayer(name, tac) {
  const getTac = () => tac;

  return {
    name,
    getTac,
  };
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

function Controller(player1, player2, round) {
  /**
   * This is the game master of the game, every action will be done by this object.
   * It assigns turn to the correct player, find cell location based on the choice made by the player,
   * It updates the game board accordingly.
   */
  let grid = GameBoard();

  let player, tac, cell;
  const assignPlayer = (X, p1, p2) => {
    if (p1.getTac() === "X" && X) {
      player = p1;
    } else {
      player = p2;
    }

    tac = player.getTac();
  };

  const cellLocation = function (number) {
    let count = 0;

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        count++;
        if (count === number) {
          return [i, j];
        }
      }
    }
  };

  const checkDiagonals = function (grid, tac) {
    let check = true;
    let j = 2;
    for (let i = 0; i < 3; i++) {
      if (grid[i][i] !== tac) {
        check = false;
        break;
      }
    }
    for (let i = 0; i < 3 && j >= 0; i++) {
      if (grid[i][j] !== tac) {
        check = false;
      }
      j--;
    }

    return check;
  };

  const checkGameState = function (grid, tac) {
    /** return false if game has to continue, true if winner is decided */
    for (let i = 0; i < 3; i++) {
      let row = true;

      for (let j = 0; j < 3; j++) {
        if (grid[i][j] !== tac) {
          row = false;
          break;
        }
      }

      if (row) {
        return true;
      }
    }

    // Columns

    for (let i = 0; i < 3; i++) {
      let col = true;

      for (let j = 0; j < 3; j++) {
        if (grid[j][i] !== tac) {
          col = false;
          break;
        }
      }

      if (col) {
        return true;
      }
    }

    let diagonal = checkDiagonals(grid, tac);

    return diagonal;
  };

  const isDraw = function (grid) {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (grid[i][j] === 0) {
          return false;
        }
      }
    }

    return true;
  };

  const updateBoard = function (grid, tac, entry) {
    let i = entry[0];
    let j = entry[1];
    grid[i][j] = tac;
    return grid;
  };

  const checkValidity = function (entry, board) {
    if (board[entry[0]][entry[1]] !== 0) {
      console.log("Invalid Entry, choose another");
      return false;
    } else {
      console.log("Valid Entry");
      return true;
    }
  };

  const getCell = (choice) => {
    cell = cellLocation(choice);
    if (!checkValidity(cell, grid)) {
      console.log("wrong choice");
      return;
    }

    let turnX = round % 2 === 0 ? false : true;

    assignPlayer(turnX, player1, player2);

    updateBoard(grid, tac, cell);

    if (checkGameState(grid, tac)) {
      console.log("Winner");
      return player;
    }

    if (isDraw(grid)) {
      console.log("Draw");
      return;
    }

    console.log(grid);
    round++;
  };

  return {
    getCell,
  };
}

const hero = (function () {
  /**
   * Using IIFE to start the game.
   */

  let round = 1;
  const player1 = makePlayer("Shreyash", "X");
  const player2 = makePlayer("Ishank", "O");
  const master = Controller(player1, player2, round);

  return master;
})();
