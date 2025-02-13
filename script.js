function makePlayer(name, tac) {
  // Player factory function, returns name and tacChoice.
  // Name is not required for now, but we will see what happens
  const getTac = () => tac;

  let turn = false;

  const isPlayerTurn = () => turn;

  const takeTurn = function () {
    turn = true;
  };

  return {
    name,
    getTac,
    isPlayerTurn,
    takeTurn,
  };
}

function GameBoard() {
  // Grid will have addresses 1-9
  let grid = [];

  // Grid of 3x3 with names 0-2
  // grid[row][col]

  for (let i = 0; i < 3; i++) {
    grid[i] = [];
    for (let j = 0; j < 3; j++) {
      grid[i].push(0);
    }
  }

  // An addressMap function to return the index
  // of the grid for number entered

  return grid;
}

function Controller(board, player1, player2) {
  // 1. Choose the player for their turn;
  const player = (function (player1, player2) {
    if (player1.tac() === "X") return player1;

    if (player2.tac() === "X") return player2;
  })(player1, player2);

  const tac = player.getTac();

  // 2. Make a numeric choice
  const choice = 5; // making 5 for now, will input through UI

  // 3. Return the index based on choice
  const addressMap = (function (number) {
    let count = 0;

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        count++;
        if (count === number) {
          return new Array([i, j]);
        }
      }
    }
  })(choice);

  // 4. Update grid entry
  (function (entry, playerTac, grid) {
    let i = entry[0];
    let j = entry[1];

    grid[i][j] = playerTac;
  })(choice, tac, board);
}

const start = (function () {
  const player1 = makePlayer("Shreyash", "X");
  const player2 = makePlayer("Ishank", "O");

  const board = GameBoard();

  const gamePlay = Controller(board, player1, player2);
})();
