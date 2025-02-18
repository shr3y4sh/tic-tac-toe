import master, { makePlayer } from "./gameClass.js";

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

const X_image = `<img src="assets/images/cancel.png"></div>`;
const O_image = `<img src="assets/images/o.png"></div>`;

function gameStart(hero) {
  const cells = document.querySelectorAll(".cell");

  cells.forEach((element) => {
    element.addEventListener("click", function () {
      let number = Number(element.getAttribute("id")[0]);
      hero.getCell(number);
      console.log(hero.player.getTac())
      let tac;

      if (hero.player.getTac() === "X") {
        tac = X_image;
      } else if (hero.player.getTac() === "O"){
        tac = O_image
      } else {
        throw new Error("What the hell");
      }

      // console.log(tac)

      element.innerHTML = tac;

      
    });
  });
}

function tacDisplay(hero) {

  hero.player.getTac()
}

(function () {
  const playerX = makePlayer("Shreyash", "X");
  const playerO = makePlayer("Ishank", "O");
  const hero = new master(playerX, playerO, 1);

  const emptyDiv = document.querySelector(".empty");

  const startButton = document.querySelector("#start");

  startButton.addEventListener("click", function () {
    emptyDiv.remove();
    gameBoardDisplay();
    gameStart(hero);
  });
})();
