document.addEventListener('DOMContentLoaded', function () {

    const gameArena = document.getElementById("game-arena");
    const arenaSize = 600;
    const cellSize = 20;
    let score = 0; // score of the game
    let gameStarted = false; // Game status
    let food = {x:300, y:200}; //{x: 15*20, y: 10*20} --> cell coordinate ---> pixels
    let snake = [{x:160, y:200}, {x:140, y:200}, {x:120, y:200}];

    

    function runGame() {
        if(!gameStarted) {
            gameStarted = true;
            // gameLoop(); TODO: Implement game loop
        }
    }

    function initiateGame() {
        const scoreBoard = document.createElement('div');
        scoreBoard.id = 'score-board';

        document.body.insertBefore(scoreBoard, gameArena); // Insert score board before game arena

        const startButton = document.createElement('button');
        startButton.textContent = 'start Game';
        startButton.classList.add('start-button');

        startButton.addEventListener('click', function startGame() {
            startButton.style.display = 'none' // hide start button

            runGame();
        })

        document.body.appendChild(startButton); // Append start button to the body

    }
    initiateGame(); 
    
});