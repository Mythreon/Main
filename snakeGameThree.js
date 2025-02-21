const changelogButton = document.getElementById('changelogButton');
const changelogText = document.getElementById('changelogText');
const playButton = document.getElementById('playButton');
const startMenu = document.getElementById('startMenu');
const gameContainer = document.getElementById('game-container');
const highScoreDisplay = document.getElementById('highScore');

let highScore = localStorage.getItem('highScore') || 0;
highScoreDisplay.textContent = highScore;

playButton.addEventListener('click', startGame);

function startGame() {
    startMenu.style.display = 'none'; // Hide the start menu
    gameContainer.style.display = 'block'; // Show the game canvas
    resetGame();
    updateGame();
}

// Initialize the game with a reset
function resetGame() {
    snake = [{ x: 160, y: 160 }];  // Initial position of the snake
    food = { x: 200, y: 200 };  // Initial food position
    direction = "RIGHT";  // Default direction
    score = 0;  // Reset score
    updateHighScore();  // Check for new high score
}

function updateHighScore() {
    if (score > highScore) {
        highScore = score;
        localStorage.setItem('highScore', highScore); // Save to local storage
        highScoreDisplay.textContent = highScore;
    }
}

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Game settings
const gridSize = 20; // Snake and food size
const canvasSize = 500; // Canvas size
const gameSpeed = 15; // Milliseconds between each game update

let snake = [{ x: 160, y: 160 }]; // Snake's initial position
let food = { x: 200, y: 200 }; // Food position
let direction = "RIGHT"; // Snake's movement direction
let score = 0; // Score count

// Control keys (W, A, S, D and arrow keys)
const controls = {
  ArrowUp: "UP",
  ArrowDown: "DOWN",
  ArrowLeft: "LEFT",
  ArrowRight: "RIGHT",
  w: "UP",
  s: "DOWN",
  a: "LEFT",
  d: "RIGHT"
};

document.addEventListener("keydown", changeDirection);

function changeDirection(event) {
  if (controls[event.key] && canChangeDirection(controls[event.key])) {
    direction = controls[event.key];
  }
}

// Check if direction change is valid
function canChangeDirection(newDirection) {
  if (newDirection === "UP" && direction !== "DOWN") return true;
  if (newDirection === "DOWN" && direction !== "UP") return true;
  if (newDirection === "LEFT" && direction !== "RIGHT") return true;
  if (newDirection === "RIGHT" && direction !== "LEFT") return true;
  return false;
}

// Update the game state
function updateGame() {
  moveSnake();
  if (checkCollision()) {
    endGame();
    return;
  }
  if (checkFoodCollision()) {
    score += 1;
    spawnFood();
  }
  drawGame();
  setTimeout(updateGame, gameSpeed);
}

function moveSnake() {
    let head = { ...snake[0] };

    // Moving in smaller increments (0.1 grid per update)
    if (direction === "UP") head.y -= 0.1 * gridSize; 
    if (direction === "DOWN") head.y += 0.1 * gridSize; 
    if (direction === "LEFT") head.x -= 0.1 * gridSize; 
    if (direction === "RIGHT") head.x += 0.1 * gridSize; 

    // Add the new head to the snake
    snake.unshift(head);

    // Remove the tail if the snake doesn't eat food
    if (!checkFoodCollision()) {
        snake.pop();
    }
}


// Check if the snake collides with itself or the wall
function checkCollision() {
  const head = snake[0];
  // Wall collision
  if (head.x < 0 || head.x >= canvasSize || head.y < 0 || head.y >= canvasSize) {
    return true;
  }
  // Self-collision
  for (let i = 1; i < snake.length; i++) {
    if (head.x === snake[i].x && head.y === snake[i].y) {
      return true;
    }
  }
  return false;
}

// Check if the snake eats food
function checkFoodCollision() {
  const head = snake[0];
  if (head.x === food.x && head.y === food.y) {
    return true;
  }
  return false;
}

// Draw the game on the canvas
// Draw the game on the canvas
function drawGame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas
    
    // Draw snake with rounded corners
    ctx.fillStyle = "linear-gradient(to bottom, #32CD32, #228B22)"; // Gradient color for snake
    snake.forEach((segment, index) => {
        ctx.beginPath();
        ctx.arc(segment.x + gridSize / 2, segment.y + gridSize / 2, gridSize / 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();
    });

    // Draw food with glow effect
    ctx.fillStyle = "red"; // Classic red food
    ctx.shadowBlur = 10; // Add glow effect around food
    ctx.shadowColor = "yellow";
    ctx.fillRect(food.x, food.y, gridSize, gridSize);
    ctx.shadowBlur = 0; // Reset shadow after food drawing

    // Draw score with custom font style
    ctx.fillStyle = "white";
    ctx.font = "24px 'Courier New', monospace";
    ctx.fillText("Score: " + score, 10, 30);
}


// Spawn a new food at a random position
function spawnFood() {
  food = {
    x: Math.floor(Math.random() * (canvasSize / gridSize)) * gridSize,
    y: Math.floor(Math.random() * (canvasSize / gridSize)) * gridSize
  };
}

function endGame() {
    updateHighScore();  // Update the high score
    gameContainer.style.display = 'none';  // Hide the game canvas
    startMenu.style.display = 'flex';  // Show the start menu

    // Show "Game Over" with animation
    const gameOverText = startMenu.querySelector('h1');
    gameOverText.textContent = 'Game Over!';
    gameOverText.style.animation = 'popUp 1s ease-out forwards'; // Add animation
}



// Detect touch events for mobile control
let touchStartX = 0;
let touchStartY = 0;

canvas.addEventListener("touchstart", handleTouchStart, false);
canvas.addEventListener("touchmove", handleTouchMove, false);

function handleTouchStart(e) {
    // Prevent the default behavior to avoid scrolling
    e.preventDefault();

    const touch = e.touches[0];
    touchStartX = touch.pageX;
    touchStartY = touch.pageY;
}

function handleTouchMove(e) {
    e.preventDefault();  // Prevents default scrolling behavior on mobile devices

    const touch = e.touches[0];
    const touchEndX = touch.pageX;
    const touchEndY = touch.pageY;

    const deltaX = touchEndX - touchStartX;
    const deltaY = touchEndY - touchStartY;

    if (Math.abs(deltaX) > Math.abs(deltaY)) {
        // Horizontal swipe (left or right)
        if (deltaX > 0 && direction !== "LEFT") {
            direction = "RIGHT";
        } else if (deltaX < 0 && direction !== "RIGHT") {
            direction = "LEFT";
        }
    } else {
        // Vertical swipe (up or down)
        if (deltaY > 0 && direction !== "UP") {
            direction = "DOWN";
        } else if (deltaY < 0 && direction !== "DOWN") {
            direction = "UP";
        }
    }

    // Reset the starting touch coordinates
    touchStartX = touchEndX;
    touchStartY = touchEndY;
}

let particles = [];

function spawnParticles(x, y) {
    for (let i = 0; i < 10; i++) {
        particles.push({
            x: x,
            y: y,
            size: Math.random() * 3 + 2, // Random size
            color: "yellow",
            speedX: Math.random() * 4 - 2, // Random speed for X
            speedY: Math.random() * 4 - 2, // Random speed for Y
            opacity: 1
        });
    }
}

function updateParticles() {
    ctx.globalAlpha = 1; // Reset opacity for the game
    particles.forEach((particle, index) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        particle.opacity -= 0.05; // Fade out
        if (particle.opacity <= 0) {
            particles.splice(index, 1); // Remove particle when it's invisible
        }
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
        ctx.closePath();
    });
}

function checkFoodCollision() {
    const head = snake[0];
    const foodThreshold = gridSize / 2; 

    if (Math.abs(head.x - food.x) < foodThreshold && Math.abs(head.y - food.y) < foodThreshold) {
        score += 1;
        spawnFood();
        spawnParticles(food.x, food.y);  

        for (let i = 0; i < 5; i++) {
            snake.push({ ...snake[snake.length - 1] }); 
        }

        return true;
    }
    return false;
}

// Update the game to include particles
function updateGame() {
    moveSnake();
    if (checkCollision()) {
        endGame();
        return;
    }
    updateParticles(); // Update particles
    drawGame();
    setTimeout(updateGame, gameSpeed);
}



// Start the game
spawnFood();
