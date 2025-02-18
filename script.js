import master, { makePlayer } from "/gameClass.js";

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

  return gameBoard;
}

// gameBoardDisplay();

function gameStart(hero, board) {
  const X_image = `<img src="assets/images/cancel.png"></div>`;
  const O_image = `<img src="assets/images/o.png"></div>`;

  const cells = document.querySelectorAll(".cell");

  cells.forEach((element) => {
    element.addEventListener("click", function () {
      let number = Number(element.getAttribute("id")[0]);
      hero.getCell(number, board);
      console.log(hero.player.getTac());
      let tac;

      if (hero.player.getTac() === "X") {
        tac = X_image;
      } else if (hero.player.getTac() === "O") {
        tac = O_image;
      } else {
        throw new Error("What the hell");
      }

      // console.log(tac)

      element.innerHTML = tac;
    });
  });
}

(function () {
  const playerX = makePlayer("Player X", "X");
  const playerO = makePlayer("Player O", "O");
  const hero = new master(playerX, playerO, 1);
  const emptyDiv = document.querySelector(".empty");
  const startButton = document.querySelector(".start");

  startButton.addEventListener("click", function () {
    emptyDiv.remove();
    const board = gameBoardDisplay();
    gameStart(hero, board);
  });
})();

export default function winGame(player, board) {
  const winningDiv = `<p class="congrats">Congratulations</p>
      <div class="party">
        <span class="emoji"><img src="assets/images/party-popper.png" /></span>
        <span class="emoji"><img src="assets/images/party-popper.png" /></span>
        <span class="emoji"><img src="assets/images/party-popper.png" /></span>
        <span class="emoji"><img src="assets/images/party-popper.png" /></span>
        <span class="emoji"><img src="assets/images/party-popper.png" /></span>
      </div>
      <p class="you-won">You Won!</p>`;

  const winDiv = document.createElement("div");
  winDiv.classList.add("winner");
  const name = document.createElement("p");
  name.innerText = `${player.name}`;
  name.classList.add("win-name");

  winDiv.innerHTML = winningDiv;
  winDiv.appendChild(name);
  document.querySelector("h1").remove();
  board.remove();
  document
    .querySelector("body")
    .insertBefore(winDiv, document.querySelector("footer"));
  restart(winDiv);
}

export function drawGame(board) {
  const drawPara = `<div class="congrats">Draw!!!</div>
    <p class="you-won">Nobody Won. Try again!</p>`;

  const winDiv = document.createElement("div");
  winDiv.classList.add("winner", "draw");
  winDiv.innerHTML = drawPara;
  board.remove();
  document
    .querySelector("body")
    .insertBefore(winDiv, document.querySelector("footer"));
  restart(winDiv);
}

function restart (winDiv) {
  const restart = document.createElement("button");
  restart.innerText = "Play Again?"
  restart.classList.add("start");
  winDiv.appendChild(restart);
  restart.addEventListener("click", () => {
    location.reload();
  })
}