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
    if (choice > 9) {
      console.log("INvalid");
      return;
    }

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

    console.log(grid);
    round++;

    if (round > 9) {
      console.log("Draw");
      return;
    }
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

function gameBoardDisplay() {
  const gameGridHtml = `<div class="cell" id="1grid"></div>
      <div class="cell" id="2grid"></div>
      <div class="cell" id="3grid"></div>
      <div class="cell" id="4grid"></div>
      <div class="cell" id="5grid"></div>
      <div class="cell" id="6grid"></div>
      <div class="cell" id="7grid"></div>
      <div class="cell" id="8grid"></div>
      <div class="cell" id="9grid"></div>
  `;
  const gameBoard = document.createElement("div");
  gameBoard.classList.add("game-board");

  const body = document.querySelector("body");
  const footer = document.querySelector("footer");
  gameBoard.innerHTML = gameGridHtml;
  body.insertBefore(gameBoard, footer);
}

// gameBoardDisplay();

const clickToStart = (function () {
  const emptyDiv = document.querySelector(".empty");

  const startButton = document.querySelector("#start");

  startButton.addEventListener("click", function () {
    emptyDiv.remove();
    gameBoardDisplay();
    gameStart();
  });
})();

const X_image = `<img src="assets/images/cancel.png"></div>`;
const O_image = `<img src="assets/images/o.png"></div>`;

function gameStart() {
  const cells = document.querySelectorAll(".cell");

  cells.forEach(element => {
    element.addEventListener("click", function () {
      console.log(element.getAttribute("id"))
      element.innerHTML = X_image;
    })
  });
}
