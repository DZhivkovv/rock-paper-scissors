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

function startGame(){
    cleanBoard();
    display.innerHTML = `<p id="start-emojis">${textEmoji.Rock} ${textEmoji.Paper} ${textEmoji.Scissors} <br><span>Rock, Paper, Scissors</span></p>`

    startButton.addEventListener('click', ()=>{
        rockButton.classList.remove('hidden');
        paperButton.classList.remove('hidden');
        scissorsButton.classList.remove('hidden');
        startButton.classList.add('hidden');
        
        display.innerHTML = '';
    })
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

function playRound(playerChoice){
    const computerChoice = getComputerChoice();
    
    if(playerChoice === computerChoice){
        roundWinner = 'None';
        appendElements(playerChoice, computerChoice, 'None');
    }
    else if(
        (playerChoice === 'Rock' && computerChoice === 'Scissors') ||
        (playerChoice === 'Paper' && computerChoice === 'Rock') ||
        (playerChoice === 'Scissors' && computerChoice === 'Paper') 
    ){
        playerPoints += 1;
        roundWinner = 'Player';

        if(playerPoints === 5 || computerPoints === 5){
            endGame()
            return 'Game Over';
        } else{
            appendElements(playerChoice, computerChoice, roundWinner);
        }
    }
    else if (
        (playerChoice === 'Rock' && computerChoice === 'Paper') ||
        (playerChoice === 'Paper' && computerChoice === 'Scissors') ||
        (playerChoice === 'Scissors' && computerChoice === 'Rock') 
    ){
        computerPoints += 1;
        roundWinner = 'Computer';

        if(playerPoints >= 5 || computerPoints >= 5){
            endGame()
            return 'Game Over';
        } else{
            appendElements(playerChoice, computerChoice, roundWinner);
        }
    }
}

function endGame(){
    cleanBoard();
    const winner = getGameWinner();
    if (winner === 'You'){
        display.innerHTML = "<p class='winner-paragraph' id='winner-paragraph-you'>You win!</p>"
    } else if(winner === 'Computer'){
        display.innerHTML = "<p class = 'winner-paragraph' id='winner-paragraph-computer'>Computer <br> wins!</p>"
    }   
    restartButton.classList.remove('hidden');
}

