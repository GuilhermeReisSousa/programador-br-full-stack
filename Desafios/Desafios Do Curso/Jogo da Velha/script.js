const table = document.querySelector("table");
const cells = table.getElementsByTagName("td");

const state = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

let currentPlayer = "X";

for (const cell of cells) {
  cell.addEventListener("click", (event) => {
    const cell = event.target;
    const i = cell.parentNode.rowIndex;
    const j = cell.cellIndex;

    if (state[i][j] !== "") {
      return;
    }

    state[i][j] = currentPlayer;
    cell.textContent = currentPlayer;

    if (checkWin(currentPlayer)) {
      alert(`Jogador ${currentPlayer} Vencedor!`);
      resetGame();
      return;
    }

    if (checkDraw()) {
      alert("Empate");
      resetGame();
      return;
    }

    currentPlayer = currentPlayer === "X" ? "O" : "X";
  });
}

function checkWin(player) {
  // Check rows
  for (const row of state) {
    if (row.every((cell) => cell === player)) {
      return true;
    }
  }

  // Check columns
  for (let j = 0; j < 3; j++) {
    if (state.every((row) => row[j] === player)) {
      return true;
    }
  }

  // Check diagonals
  if (
    state[0][0] === player &&
    state[1][1] === player &&
    state[2][2] === player
  ) {
    return true;
  }

  if (
    state[0][2] === player &&
    state[1][1] === player &&
    state[2][0] === player
  ) {
    return true;
  }

  return false;
}

function checkDraw() {
  for (const row of state) {
    if (row.some((cell) => cell === "")) {
      return false;
    }
  }

  return true;
}

function resetGame() {
  for (const cell of cells) {
    cell.textContent = "";
  }

  state.forEach((row, i) => {
    row.forEach((cell, j) => {
      state[i][j] = "";
    });
  });

  currentPlayer = "X";
}

const resetButton = document.querySelector("#reset-button");
resetButton.addEventListener("click", resetGame);

resetButton.addEventListener("click", (event) => {
  console.log("Reset button clicked");
  resetGame();
});

function resetGame() {
  console.log("Resetting game");
  // Rest of the function goes here
}
