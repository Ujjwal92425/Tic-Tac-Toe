const cells = document.querySelectorAll(".cell");
const restartBtn = document.getElementById("restart");

let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let isGameActive = true;

const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const handleCellClick = (e) => {
  const index = e.target.dataset.index;
  if (board[index] !== "" || !isGameActive) return;

  board[index] = currentPlayer;
  e.target.textContent = currentPlayer;
  e.target.style.textShadow =
    currentPlayer === "X"
      ? "0 0 10px #00fff0, 0 0 20px #00fff0"
      : "0 0 10px #ff00ff, 0 0 20px #ff00ff";

  checkWin();
  currentPlayer = currentPlayer === "X" ? "O" : "X";
};

cells.forEach((cell) => cell.addEventListener("click", handleCellClick));

const checkWin = () => {
  for (let condition of winningConditions) {
    const [a, b, c] = condition;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      isGameActive = false;
      alert(`🎉 Player ${board[a]} wins!`);
      return;
    }
  }

  if (!board.includes("")) {
    isGameActive = false;
    alert("🤝 It's a draw!");
  }
};

restartBtn.addEventListener("click", () => {
  board = ["", "", "", "", "", "", "", "", ""];
  isGameActive = true;
  currentPlayer = "X";
  cells.forEach((cell) => {
    cell.textContent = "";
    cell.style.textShadow = "";
  });
});
