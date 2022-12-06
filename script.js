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


function cleanBoard(){
    scoreContainer.innerHTML = '';
    display.innerHTML = '';
    resultContainer.innerHTML = '';
    
    rockButton.classList.add('hidden');
    paperButton.classList.add('hidden');
    scissorsButton.classList.add('hidden');
}

function getComputerChoice(){
    /*Generates a random number netween 0 and 2 which will determine the computer's choice between rock, paper and scissors*/
    const choiceIndex = Math.floor(Math.random()*3)
    return choices[choiceIndex].innerText;
}


function appendElements(playerChoice, computerChoice, winner){
    if(winner === 'Player'){
        scoreContainer.innerHTML = `<p><span>You: ${playerPoints} - Computer: ${computerPoints}</span></p>`
        resultContainer.innerHTML= '<p>Point for you!</p>';
        display.innerHTML = `<p id="comparison">${textEmoji[playerChoice]} : ${textEmoji[computerChoice]}</p>`
    }
    else if (winner === 'Computer'){
        scoreContainer.innerHTML = `<p><span>You: ${playerPoints} - Computer: ${computerPoints}</span></p>`
        resultContainer.innerHTML = '<p>Point for the computer!</p>';
        display.innerHTML = `<p id="comparison">${textEmoji[playerChoice]} : ${textEmoji[computerChoice]}</p>`

    }
    else if(winner === 'None'){
        scoreContainer.innerHTML = `<p><span>You: ${playerPoints} - Computer: ${computerPoints}</span></p>`
        resultContainer.innerHTML = '<p>Tie!</p>';
        display.innerHTML = `<p id="comparison">${textEmoji[playerChoice]} : ${textEmoji[computerChoice]}</p>`
        
    }
}

