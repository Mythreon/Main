/*
Mythreon 2025

Was too bothered to add code comments, so if you want to learn something from this you can do it personally. Good luck!
*/

let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X"; 
let gameOver = false;
let playerSymbol = "X"; 
let botSymbol = "O"; 
let playerCanPlay = false; 

const boardCells = document.querySelectorAll("td");
boardCells.forEach(cell => {
    cell.addEventListener("click", () => handleClick(cell));
});

const resultModal = document.getElementById("resultModal");
const resultMessage = document.getElementById("resultMessage");
const closeModal = document.querySelector(".close");
const resetButton = document.getElementById("resetButton");

function chooseSymbol(symbol) {
    if (symbol === "X") {
        playerSymbol = "X";
        botSymbol = "O";
        currentPlayer = "X"; 
    } else {
        playerSymbol = "O";
        botSymbol = "X";
        currentPlayer = "O"; 
    }

    document.getElementById('chooseX').disabled = true;
    document.getElementById('chooseO').disabled = true;

    playerCanPlay = false; 

    setTimeout(() => {
        playerCanPlay = true;

        if (currentPlayer === "O") {
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
            setTimeout(() => {
                showResult(`${currentPlayer} Won!`);
            }, 500); 
            gameOver = true;
            return;
        }

        if (board.every(cell => cell !== "")) {
            setTimeout(() => {
                showResult("Draw!");
            }, 500); 
            gameOver = true;
            return;
        }

        currentPlayer = currentPlayer === playerSymbol ? botSymbol : playerSymbol;
        if (currentPlayer === botSymbol && !gameOver) {
            botMove();
        }
    }
}

function checkWinner() {
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let combo of winningCombinations) {
        const [a, b, c] = combo;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return true;
        }
    }
    return false;
}

function minimax(board, depth, isMaximizing) {
    if (checkWinner()) {
        return isMaximizing ? -1 : 1; 
    }
    if (board.every(cell => cell !== "")) {
        return 0; 
    }

    if (isMaximizing) {
        let best = -Infinity;
        for (let i = 0; i < board.length; i++) {
            if (board[i] === "") {
                board[i] = botSymbol; 
                let score = minimax(board, depth + 1, false);
                board[i] = ""; 
                best = Math.max(best, score);
            }
        }
        return best;
    } else {
        let best = Infinity;
        for (let i = 0; i < board.length; i++) {
            if (board[i] === "") {
                board[i] = playerSymbol; 
                let score = minimax(board, depth + 1, true);
                board[i] = ""; 
                best = Math.min(best, score);
            }
        }
        return best;
    }
}

function botMove() {
    if (gameOver) return;

    let bestMove = -1;
    let bestValue = -Infinity;

    for (let i = 0; i < board.length; i++) {
        if (board[i] === "") {
            board[i] = botSymbol; 
            let moveValue = minimax(board, 0, false);
            board[i] = ""; 

            if (moveValue > bestValue) {
                bestValue = moveValue;
                bestMove = i;
            }
        }
    }

    setTimeout(() => {
        board[bestMove] = botSymbol;
        document.getElementById(bestMove).textContent = botSymbol;

        if (checkWinner()) {
            setTimeout(() => {
                showResult(`${botSymbol} Won!`);
            }, 500); 
            gameOver = true;
        }

        if (board.every(cell => cell !== "") && !checkWinner()) {
            setTimeout(() => {
                showResult("Draw!");
            }, 500); 
            gameOver = true;
        }

        currentPlayer = playerSymbol; 
    }, 1000); 
}

function showResult(message) {
    resultMessage.textContent = message;
    resultModal.style.display = "block"; 
}

document.getElementById('chooseX').addEventListener('click', () => chooseSymbol("X"));
document.getElementById('chooseO').addEventListener('click', () => chooseSymbol("O"));

closeModal.addEventListener("click", () => {
    resultModal.style.display = "none"; 
    resetGame();
});

resetButton.addEventListener("click", () => {
    resetGame();
});
