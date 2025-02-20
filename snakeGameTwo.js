// I made this game's code to be very readable, and friendly for beginner programmers to understand.
// I hope somebody can learn something from this code.
// Good luck guys.
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Game settings
const gridSize = 20; // Snake and food size
const canvasSize = 500; // Canvas size
const gameSpeed = 100; // Milliseconds between each game update

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
    resetGame();
    return;
  }
  if (checkFoodCollision()) {
    score += 1;
    spawnFood();
  }
  drawGame();
  setTimeout(updateGame, gameSpeed);
}

// Move the snake based on the current direction
function moveSnake() {
  let head = { ...snake[0] };

  if (direction === "UP") head.y -= gridSize;
  if (direction === "DOWN") head.y += gridSize;
  if (direction === "LEFT") head.x -= gridSize;
  if (direction === "RIGHT") head.x += gridSize;

  snake.unshift(head); // Add new head to the snake array

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
function drawGame() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas
  ctx.fillStyle = "green";
  snake.forEach(segment => ctx.fillRect(segment.x, segment.y, gridSize, gridSize));

  ctx.fillStyle = "red";
  ctx.fillRect(food.x, food.y, gridSize, gridSize);

  ctx.fillStyle = "white";
  ctx.font = "20px Arial";
  ctx.fillText("Score: " + score, 10, 30);
}

// Spawn a new food at a random position
function spawnFood() {
  food = {
    x: Math.floor(Math.random() * (canvasSize / gridSize)) * gridSize,
    y: Math.floor(Math.random() * (canvasSize / gridSize)) * gridSize
  };
}

// Reset the game when collision happens
function resetGame() {
  snake = [{ x: 160, y: 160 }];
  score = 0;
  direction = "RIGHT";
  spawnFood();
}

// Start the game
spawnFood();
updateGame();
