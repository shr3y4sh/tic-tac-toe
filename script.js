function makePlayer(name, tac) {
  // Player factory function, returns name and tacChoice.
  // Name is not required for now, but we will see what happens
  const tacChoice = () => tac;

  return {
    name,
    tacChoice,
  };
}

function GameBoard(player1, player2) {
  const grid = [];
  const row = 3;
  const col = 3;
  // Grid of 3x3 with names 0-2
  // grid[row][col]

  const tac = {
    X: "X",
    O: "O",
  };

  for (let i = 0; i < row; i++) {
    grid[i] = [];
    for (let j = 0; j < col; j++) {
      grid[i].push(0);
    }
  }
}

function Controller(grid, playerX, playerY) {
  const gridUpdate = function () {};

  const playerTurn = function () {};
}

const start = (function () {
  const playerX = makePlayer("Shreyash", "X");
  const playerY = makePlayer("Ishank", "O");

  const board = GameBoard(playerX, playerY);
})();
