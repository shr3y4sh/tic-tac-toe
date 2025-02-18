import master, { GameBoard } from "./gameClass";

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

  cells.forEach((element) => {
    element.addEventListener("click", function () {
      console.log(element.getAttribute("id"));
      element.innerHTML = X_image;
    });
  });
}
