function makePlayer(name, tac) {
  // Player factory function, returns name and tacChoice.
  // Name is not required for now, but we will see what happens
  const tac = () => tac;

  let turn = false;

  const isPlayerTurn = () => turn;

  const takeTurn = function () {
    turn = true;
  }

  return {
    name,
    tac,
    turn,
  };
}

function GameBoard() {
  // Grid will have addresses 1-9
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

  const getEmptyCells = function (player) {
    console.log("Empty Choices: ");
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (grid[i][j] === 0) {
          console.log(`A ${i} ${j}`)
        }
      }
    }
  }

  const updateBoard = function (entry) {

    

    
  }



  return {


  };
}

function Controller(board, player1, player2) {

  const player = function (player1, player2) {

    if (player1.tac() === "X") return player1;
    
    if (player2.tac() === "X") return player2;
  }

  const choice = 5; // making 5 for now, will input through UI


  const gridUpdate = function (choice) {};
}

const start = (function () {
  const player1 = makePlayer("Shreyash", "X");
  const player2 = makePlayer("Ishank", "O");

  const board = GameBoard();


  const gamePlay = Controller(board, player1, player2);
})();
