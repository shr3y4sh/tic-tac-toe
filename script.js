
const logging = (input) => {
  console.log(input);
}

function makePlayer(name, tac) {
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
  let grid = [];


  for (let i = 0; i < 3; i++) {
    grid[i] = [];
    for (let j = 0; j < 3; j++) {
      grid[i].push(0);
    }
  }


  return grid;
}

function Controller(board, player1, player2, turnNumber) {
  const player = (function (p1, p2, turn) {
    return turn % 2 === 0 ? p2 : p1;
  })(player1, player2, turnNumber);

  const tac = player.getTac();

  const choice = 5; // making 5 for now, will input through UI
  player.takeTurn();
  const addressMap = (function (number) {
    let count = 0;

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        count++;
        if (count === number) {
          // console.log(count);
          return [i, j];
        }
      }
    }
  })(choice);
  (function (entry, playerTac, grid) {
    let i = entry[0];
    let j = entry[1];
    grid[i][j] = playerTac;
  })(addressMap, tac, board);

}

const start = (function () {
  const player1 = makePlayer("Shreyash", "X");
  const player2 = makePlayer("Ishank", "O");
  const board = GameBoard();
  const gamePlay = Controller(board, player1, player2, 1);
})();

