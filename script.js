
//game();
let playerCounter = computerCounter = 0;

const choiceUI = document.querySelector('h3');

const rock = document.querySelector('#rock-choice');
rock.addEventListener('click', e => {
    //console.log(e);
    
    choiceUI.textContent = playRound('rock', computerPlay());
    updateScore();
})

const paper = document.querySelector('#paper-choice');
paper.addEventListener('click', e => {
    //console.log(e);
    
    choiceUI.textContent = playRound('paper', computerPlay());
    updateScore();
})

const scissors = document.querySelector('#scissors-choice');
scissors.addEventListener('click', e => {
    //console.log(e);
    
    choiceUI.textContent = playRound('scissors', computerPlay());
    updateScore();
})

//FUNCTION DECLARATIONS
function computerPlay(){
    let rand = Math.random().toFixed(3);
    //console.log(rand);
    if (rand < 0.333) {
        return 'rock';
    }
    else if (rand > 0.666){
        return 'scissors'
    }
    else{
        return 'paper';
    }
} 

function updateScore(){
    document.querySelector('#player-score').textContent = playerCounter;
    document.querySelector('#computer-score').textContent = computerCounter;
}

function playRound(playerMove, computerMove){
    if (playerMove.toLowerCase() === 'rock'){
        if(computerMove === 'rock') return "it's a tie!";
        else if (computerMove === 'paper'){
            computerCounter++; 
            return "rock < paper"
        }
        else if (computerMove === 'scissors') {
            playerCounter++;
            return "rock > scissors";
        }
    }
    else if (playerMove.toLowerCase() === 'paper'){
        if(computerMove === 'rock') {
            playerCounter ++;
            return "paper > rock";
        }
        else if (computerMove === 'paper') return "it's a tie!";
        else if (computerMove === 'scissors') {
            computerCounter++;
            return "paper < scissors";
        }
    }
    else if (playerMove.toLowerCase() === 'scissors'){
        if(computerMove === 'rock') {
            computerCounter++;
            return "scissors < rock";
        }
        else if (computerMove === 'paper') {
            playerCounter++;
            return "scissors > paper";
        }
        else if (computerMove === 'scissors') return "It's a tie!";
    }
}

function game(){
    for(let i = 0; i < 3; i++){
        let playerMove = prompt("choose rock, paper, or scissors");
        console.log(playRound(playerMove, computerPlay()));
    }
}