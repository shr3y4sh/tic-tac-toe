const startGame = (function () {
  /**
   * Using IIFE to start the game. Next turns will have their own functions.
   */
  let board = GameBoard();
  console.log(board);
  const player1 = makePlayer("Shreyash", "X");
  const player2 = makePlayer("Ishank", "O");
  const master = Controller();

  const round = 1;
  nextTurn(master, board, player1, player2, round);
})();

function makePlayer(name, tac) {
  const getTac = () => tac;

  let turn = false;

  const isPlayerTurn = () => turn;

  const takeTurn = function (choice) {
    turn = true;
    const cellChoice = choice;
    return cellChoice;
  };

  return {
    name,
    getTac,
    isPlayerTurn,
    takeTurn,
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

function Controller() {
  /**
   * This is the game master of the game, every action will be done by this object.
   * It assigns turn to the correct player, find cell location based on the choice made by the player,
   * It updates the game board accordingly.
   */

  const assignTurn = (p1, p2, turn) => {
    return turn % 2 === 0 ? p2 : p1;
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

  const updateBoard = function (grid, tac, entry) {
    let i = entry[0];
    let j = entry[1];
    grid[i][j] = tac;
    return grid;
  };

  return {
    assignTurn,
    cellLocation,
    updateBoard,
  };
}

function nextTurn(master, board, player1, player2, round) {
  const currentPlayer = master.assignTurn(player1, player2, round);
  const tac = currentPlayer.getTac();
  const choice = currentPlayer.takeTurn(5);

  const entry = master.cellLocation(choice);
  console.log(checkValidity(entry, board));
  board = master.updateBoard(board, tac, entry);
}

function checkValidity(entry, board) {
  if (board[entry[0]][entry[1]] !== 0) {
    console.log("Invalid Entry, choose another");
    return false;
  } else {
    console.log("Valid Entry");
    return true;
  }
}

