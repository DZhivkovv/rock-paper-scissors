/*Containers*/
const gameContainer = document.getElementById('game-container');
const displayContainer = document.getElementById('display-container');
const display = document.getElementById('display');
const scoreContainer = document.getElementById('score-container');
const resultContainer = document.getElementById('result-container');

/*Buttons */
const choices = document.querySelectorAll('.choice');
const rockButton = document.getElementById('rock-btn');
const paperButton = document.getElementById('paper-btn');
const scissorsButton = document.getElementById('scissors-btn');
const startButton = document.getElementById('start-btn');
const restartButton = document.getElementById('restart-btn');

/*Properties*/
let rounds = 5;
let playerPoints = 0;
let computerPoints = 0;
let roundWinner = '';
let gameWinner = '';

const textEmoji = {
    Rock: '✊',
    Paper: '🤚',
    Scissors: '✌️',
}


