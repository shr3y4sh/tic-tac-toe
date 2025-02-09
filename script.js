function makePlayer(name, tac) {
  // Player factory function, returns name and tacChoice.
  // Name is not required for now, but we will see what happens
  const tacChoice = () => tac;

  return {
    name,
    tacChoice,
  };
}

function GameBoard() {
  let grid = [];

  // Grid of 3x3 with names 0-2
  // grid[row][col]

  const tac = {
    X: "X",
    O: "O",
  };

  for (let i = 0; i < 3; i++) {
    grid[i] = [];
    for (let j = 0; j < 3; j++) {
      grid[i].push(0);
    }
  }

  const inputFunc = function (player) {
    const input = player.tacChoice();
  };

  return {
    grid,
  };
}

function Controller(board, player1, player2) {

  const takeYourTurn = function (player) {
    player;
  };

  const gridUpdate = function () {};
}

const start = (function () {
  const player1 = makePlayer("Shreyash", "X");
  const player2 = makePlayer("Ishank", "O");

  const board = GameBoard();


  const gamePlay = Controller(board, player1, player2);
})();
