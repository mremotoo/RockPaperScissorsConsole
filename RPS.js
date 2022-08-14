function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    return( choices[Math.floor(Math.random() * choices.length)])
}

function getPlayerChoice() {
    
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === playerSelection && computerSelection === "Paper") {
        return("Computer chose Paper. You Lose!")
    }else if (playerSelection === playerSelection && computerSelection === "Scissors") {
        return("Computer chose Scissors. You Win!")
    }
    
    else{
        return("Computer chose Rock. Draw!")
    }
}

// function game() {
        
// }

const playerSelection = "rock";
const computerSelection = getComputerChoice();
const gameRound = playRound(playerSelection, computerSelection);
console.log(playRound(playerSelection, computerSelection));

// game();