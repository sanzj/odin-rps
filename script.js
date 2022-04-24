

game();

function computerPlay(){
    let rand = Math.random().toFixed(3);
    console.log(rand);
    if(rand < 0.333) {
        return 'rock';
    }
    else if(rand > 0.666){
        return 'scissors'
    }
    else{
        return 'paper';
    }
} 

function playRound(playerMove, computerMove){
    if(playerMove.toLowerCase() === 'rock'){
        if(computerMove === 'rock') return "it's a tie!";
        else if (computerMove === 'paper') return "you lost. paper > rock";
        else if (computerMove === 'scissors') return "you won! rock > scissors";
    }
    else if(playerMove.toLowerCase() === 'paper'){
        if(computerMove === 'rock') return "you won! paper > rock";
        else if (computerMove === 'paper') return "it's a tie!";
        else if (computerMove === 'scissors') return "you lost. scissors > paper";
    }
    else if (playerMove.toLowerCase() === 'scissors'){
        if(computerMove === 'rock') return "you lost. rock > scissors";
        else if (computerMove === 'paper') return "you won! scissors > paper";
        else if (computerMove === 'scissors') return "It's a tie!";
    }
}

function game(){
    for(let i = 0; i < 5; i++){
        console.log(playRound('rock', computerPlay()));
    }
}