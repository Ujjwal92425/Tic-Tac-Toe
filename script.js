// script.js

const cells = document.querySelectorAll(".cell");
const restartBtn = document.getElementById("restart");

let currentPlayer = "X";
let gameBoard = ["", "", "", "", "", "", "", "", ""];
let gameOver = false;

const winningCombinations = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // cols
  [0, 4, 8], [2, 4, 6]             // diagonals
];

cells.forEach(cell => {
  cell.addEventListener("click", () => {
    const index = cell.dataset.index;

    if (gameBoard[index] === "" && !gameOver) {
      gameBoard[index] = currentPlayer;
      cell.textContent = currentPlayer;
      checkWin();
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
  });
});

function checkWin() {
  for (let combo of winningCombinations) {
    const [a, b, c] = combo;
    if (
      gameBoard[a] &&
      gameBoard[a] === gameBoard[b] &&
      gameBoard[a] === gameBoard[c]
    ) {
      alert(`${gameBoard[a]} wins!`);
      gameOver = true;
      return;
    }
  }

  if (!gameBoard.includes("")) {
    alert("It's a draw!");
    gameOver = true;
  }
}

restartBtn.addEventListener("click", () => {
  gameBoard = ["", "", "", "", "", "", "", "", ""];
  gameOver = false;
  cells.forEach(cell => (cell.textContent = ""));
  currentPlayer = "X";
});
