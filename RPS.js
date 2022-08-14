function getPlayerChoice() {
    //get player input and make everything toLoweCase
    let choice = prompt("Enter your choice.").toLowerCase();
    return(choice);
}

function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    return( choices[Math.floor(Math.random() * choices.length)]);
}

function playRound(playerSelection, computerSelection,) {
    if (playerSelection != undefined) {
        if (playerSelection === "rock"){
            if (computerSelection === "rock"){
                return("Computer chose rock. Draw!")
            }
            if (computerSelection === "paper"){
                return("Computer chose paper. You Lose!")
            }
            if (computerSelection === "scissors"){
                return("Computer chose scissors. You Win!")
            }
        }
        if (playerSelection === "paper"){
            if (computerSelection === "rock"){
                return("Computer chose rock. You Win!")
            }
            if (computerSelection === "paper"){
                return("Computer chose paper. Draw!")
            }
            if (computerSelection === "scissors"){
                return("Computer chose scissors. You Lose!")
            }
        }
        if (playerSelection === "scissors"){
            if (computerSelection === "rock"){
                return("Computer chose rock. You Lose!")
            }
            if (computerSelection === "paper"){
                return("Computer chose paper. You Win!")
            }
            if (computerSelection === "scissors"){
                return("Computer chose scissors. Draw!")
            }
        }
    } else{
        return("No choice entered.");
    }
}

function game() {
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
}

game();