const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
document.body.appendChild(canvas);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let player = { x: canvas.width / 2, y: canvas.height / 2, speed: 5, size: 20 };
let bullets = [];
let enemies = [];
let score = 0;  // Initialize score
let gameOver = false;
let gameStarted = false;

const startMenu = document.createElement('div');
startMenu.style.position = 'absolute';
startMenu.style.top = '50%';
startMenu.style.left = '50%';
startMenu.style.transform = 'translate(-50%, -50%)';
startMenu.style.textAlign = 'center';
startMenu.style.fontSize = '30px';
startMenu.style.color = '#FFFFFF';
startMenu.style.fontFamily = 'Arial, sans-serif';

const startButton = document.createElement('button');
startButton.textContent = 'Start Game';
startButton.style.padding = '10px 20px';
startButton.style.fontSize = '20px';
startButton.style.cursor = 'pointer';

startMenu.appendChild(startButton);
document.body.appendChild(startMenu);

startButton.addEventListener('click', startGame);

function startGame() {
    gameStarted = true;
    gameOver = false;
    score = 0; // Reset the score when starting a new game
    startMenu.style.display = 'none'; // Hide the start menu
    update(); // Start the game loop
    startEnemySpawn(); // Start enemy spawning
}

document.addEventListener('keydown', movePlayer);
document.addEventListener('mousedown', shoot);

function movePlayer(event) {
    if (!gameStarted || gameOver) return; // Stop movement if game is over or hasn't started
    
    switch (event.code) {
        case 'ArrowUp': 
        case 'KeyW': player.y -= player.speed; break;
        case 'ArrowDown': 
        case 'KeyS': player.y += player.speed; break;
        case 'ArrowLeft': 
        case 'KeyA': player.x -= player.speed; break;
        case 'ArrowRight': 
        case 'KeyD': player.x += player.speed; break;
    }
}

function shoot(event) {
    if (!gameStarted || gameOver) return; // Stop shooting if game is over or hasn't started
    
    let angle = Math.atan2(event.clientY - player.y, event.clientX - player.x);
    bullets.push({ x: player.x, y: player.y, dx: Math.cos(angle) * 5, dy: Math.sin(angle) * 5 });
}

let spawnInterval = 2000; // Initial spawn interval of 2 seconds
let lastSpawnTime = Date.now(); // Keep track of the last time enemies spawned

function startEnemySpawn() {
    const spawnEnemies = () => {
        if (!gameStarted || gameOver) return;

        spawnEnemy();
        let now = Date.now();
        let elapsedTime = now - lastSpawnTime;

        // Every 20 seconds (20000ms), reduce spawn interval by 50ms
        if (elapsedTime >= 20000) {
            spawnInterval = Math.max(50, spawnInterval - 50); // Don't allow spawn interval to go below 50ms
            lastSpawnTime = now;
        }

        setTimeout(spawnEnemies, spawnInterval); // Continue spawning enemies at the new interval
    };

    spawnEnemies();
}

function spawnEnemy() {
    if (!gameStarted || gameOver) return;

    let size = Math.random() * 30 + 10; // Random size between 10 and 40
    let x = Math.random() * canvas.width;
    let y = Math.random() * canvas.height;
    enemies.push({ x: x, y: y, size: size, speed: 1 + Math.random() * 2 });
}

function moveEnemies() {
    enemies.forEach(enemy => {
        let angle = Math.atan2(player.y - enemy.y, player.x - enemy.x); // Angle towards the player
        enemy.x += Math.cos(angle) * enemy.speed; // Move the enemy towards the player
        enemy.y += Math.sin(angle) * enemy.speed;
    });
}

function checkCollisions() {
    // Check bullet collisions
    bullets.forEach((bullet, bulletIndex) => {
        enemies.forEach((enemy, enemyIndex) => {
            let dx = bullet.x - enemy.x;
            let dy = bullet.y - enemy.y;
            let distance = Math.sqrt(dx * dx + dy * dy); // Distance between bullet and enemy

            if (distance < enemy.size / 2) { // Check if the bullet hits the enemy
                bullets.splice(bulletIndex, 1); // Remove the bullet
                enemies.splice(enemyIndex, 1); // Remove the enemy
                score += 10; // Increase score by 10 for each enemy destroyed
            }
        });
    });

    // Check player collision with enemies
    enemies.forEach(enemy => {
        let dx = player.x - enemy.x;
        let dy = player.y - enemy.y;
        let distance = Math.sqrt(dx * dx + dy * dy); // Distance between player and enemy

        if (distance < player.size / 2 + enemy.size / 2) { // Player collides with enemy
            gameOver = true; // Set game over flag
            showGameOverScreen(); // Show game over screen
        }
    });
}

function update() {
    if (gameOver) return; // Stop updating if game is over

    // Update positions of bullets
    bullets.forEach((bullet, index) => {
        bullet.x += bullet.dx;
        bullet.y += bullet.dy;
        if (bullet.x < 0 || bullet.x > canvas.width || bullet.y < 0 || bullet.y > canvas.height) {
            bullets.splice(index, 1); // Remove bullet if it's off screen
        }
    });

    moveEnemies();
    checkCollisions();
    draw();
    requestAnimationFrame(update); // Continue the game loop
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas

    // Draw player
    ctx.fillStyle = 'blue';
    ctx.fillRect(player.x - player.size / 2, player.y - player.size / 2, player.size, player.size); // Player is a blue square

    // Draw bullets
    ctx.fillStyle = 'red';
    bullets.forEach(bullet => ctx.fillRect(bullet.x, bullet.y, 5, 5)); // Bullets are red squares

    // Draw enemies
    ctx.fillStyle = 'green';
    enemies.forEach(enemy => {
        ctx.beginPath();
        ctx.arc(enemy.x, enemy.y, enemy.size / 2, 0, Math.PI * 2); // Enemies are green circles
        ctx.fill();
    });

    // Draw score in the top-right corner
    ctx.font = '24px Arial';
    ctx.fillStyle = 'white';
    ctx.fillText('Score: ' + score, canvas.width - 150, 30); // Display score at the top-right corner
}

function showGameOverScreen() {
    // Create a "Game Over" screen
    const gameOverMenu = document.createElement('div');
    gameOverMenu.style.position = 'absolute';
    gameOverMenu.style.top = '50%';
    gameOverMenu.style.left = '50%';
    gameOverMenu.style.transform = 'translate(-50%, -50%)';
    gameOverMenu.style.textAlign = 'center';
    gameOverMenu.style.fontSize = '40px';
    gameOverMenu.style.color = '#FFFFFF';
    gameOverMenu.style.fontFamily = 'Arial, sans-serif';

    const gameOverText = document.createElement('div');
    gameOverText.textContent = 'Game Over!';

    const restartButton = document.createElement('button');
    restartButton.textContent = 'Restart';
    restartButton.style.padding = '10px 20px';
    restartButton.style.fontSize = '20px';
    restartButton.style.cursor = 'pointer';

    restartButton.addEventListener('click', restartGame);

    gameOverMenu.appendChild(gameOverText);
    gameOverMenu.appendChild(restartButton);
    document.body.appendChild(gameOverMenu);
}

function restartGame() {
    // Reset the game state and hide the game over menu
    player = { x: canvas.width / 2, y: canvas.height / 2, speed: 5, size: 20 };
    bullets = [];
    enemies = [];
    score = 0; // Reset score
    gameOver = false;
    gameStarted = false;

    const gameOverMenu = document.querySelector('div[style*="font-size: 40px"]');
    if (gameOverMenu) gameOverMenu.remove();

    startMenu.style.display = 'block'; // Show the start menu again
}
