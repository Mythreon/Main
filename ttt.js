/*
Mythreon 2025

Was too bothered to add code comments, so if you want to learn something from this you can do it personally. Good luck!
*/
// I was bored
// Too bothered
// Okay
// Cya
let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameOver = false;
let playerSymbol = "X";
let botSymbol = "O";
let playerCanPlay = false;
let difficulty = "Impossible"; 

const boardCells = document.querySelectorAll("td");
boardCells.forEach(cell => {
    cell.addEventListener("click", () => handleClick(cell));
});

const resultModal = document.getElementById("resultModal");
const resultMessage = document.getElementById("resultMessage");
const closeModal = document.querySelector(".close");
const resetButton = document.getElementById("resetButton");
const difficultySelect = document.getElementById("difficulty");

difficultySelect.addEventListener("change", (event) => {
    difficulty = event.target.value;
});

function chooseSymbol(symbol) {
    playerSymbol = symbol;
    botSymbol = symbol === "X" ? "O" : "X";
    currentPlayer = "X";
    
    document.getElementById('chooseX').disabled = true;
    document.getElementById('chooseO').disabled = true;
    
    playerCanPlay = false;
    setTimeout(() => {
        playerCanPlay = true;
        if (currentPlayer === botSymbol) {
            botMove();
        }
    }, 1100);
}

function resetGame() {
    board = ["", "", "", "", "", "", "", "", ""];
    gameOver = false;
    boardCells.forEach(cell => cell.textContent = "");
    resultModal.style.display = "none";
    document.getElementById('chooseX').disabled = false;
    document.getElementById('chooseO').disabled = false;
    playerCanPlay = false;
    setTimeout(() => {
        playerCanPlay = true;
    }, 1100);
}

function handleClick(cell) {
    const cellIndex = cell.id;
    if (board[cellIndex] === "" && !gameOver && playerCanPlay) {
        board[cellIndex] = currentPlayer;
        cell.textContent = currentPlayer;
        if (checkWinner()) {
            setTimeout(() => showResult(`${currentPlayer} Won!`), 500);
            gameOver = true;
            return;
        }
        if (board.every(cell => cell !== "")) {
            setTimeout(() => showResult("Draw!"), 500);
            gameOver = true;
            return;
        }
        currentPlayer = currentPlayer === playerSymbol ? botSymbol : playerSymbol;
        if (currentPlayer === botSymbol && !gameOver) {
            botMove();
        }
    }
}
// I know this will result in a memory leak eventually. Too bothered to fix it.
function checkWinner() {
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];
    for (let combo of winningCombinations) {
        const [a, b, c] = combo;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return true;
        }
    }
    return false;
}

function botMove() {
    if (gameOver) return;
    let move;
    switch (difficulty) {
        case "Easy":
            move = getRandomMove();
            break;
        case "Medium":
            move = getMediumMove();
            break;
        case "Hard":
            move = getBestMove(2); // Limited depth minimax
            break;
        case "Impossible":
        default:
            move = getBestMove(10); // Full minimax
            break;
    }
    
    setTimeout(() => {
        board[move] = botSymbol;
        document.getElementById(move).textContent = botSymbol;
        if (checkWinner()) {
            setTimeout(() => showResult(`${botSymbol} Won!`), 500);
            gameOver = true;
        } else if (board.every(cell => cell !== "")) {
            setTimeout(() => showResult("Draw!"), 500);
            gameOver = true;
        }
        currentPlayer = playerSymbol;
    }, 1000);
}

function getRandomMove() {
    let availableMoves = board.map((v, i) => v === "" ? i : null).filter(v => v !== null);
    return availableMoves[Math.floor(Math.random() * availableMoves.length)];
}

function getMediumMove() {
    for (let i = 0; i < board.length; i++) {
        if (board[i] === "") {
            board[i] = botSymbol;
            if (checkWinner()) {
                board[i] = "";
                return i;
            }
            board[i] = "";
        }
    }
    return getRandomMove();
}

function getBestMove(depthLimit) {
    let bestMove = -1;
    let bestValue = -Infinity;
    for (let i = 0; i < board.length; i++) {
        if (board[i] === "") {
            board[i] = botSymbol;
            let moveValue = minimax(board, 0, false, depthLimit);
            board[i] = "";
            if (moveValue > bestValue) {
                bestValue = moveValue;
                bestMove = i;
            }
        }
    }
    return bestMove;
}

function minimax(board, depth, isMaximizing, depthLimit) {
    if (checkWinner()) return isMaximizing ? -1 : 1;
    if (board.every(cell => cell !== "") || depth >= depthLimit) return 0;
    
    let best = isMaximizing ? -Infinity : Infinity;
    for (let i = 0; i < board.length; i++) {
        if (board[i] === "") {
            board[i] = isMaximizing ? botSymbol : playerSymbol;
            let score = minimax(board, depth + 1, !isMaximizing, depthLimit);
            board[i] = "";
            best = isMaximizing ? Math.max(best, score) : Math.min(best, score);
        }
    }
    return best;
} 

function showResult(message) {
    resultMessage.textContent = message;
    resultModal.style.display = "block";
}

document.getElementById('chooseX').addEventListener('click', () => chooseSymbol("X"));
document.getElementById('chooseO').addEventListener('click', () => chooseSymbol("O"));
closeModal.addEventListener("click", resetGame);
resetButton.addEventListener("click", resetGame);

resetButton.addEventListener("click", () => {
    resetGame();
});
