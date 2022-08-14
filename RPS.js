function getPlayerChoice() {
    //get player input and make everything toLoweCase
    let choice = prompt("Enter your choice.").toLowerCase();
    return(choice);
}

function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    return( choices[Math.floor(Math.random() * choices.length)]).toLowerCase();
}

function playRound(playerSelection, computerSelection) {
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
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let playerSelection;
    let computerSelection;
    let gameRound;
    for (let i = 0; i < 5; i++) {
        playerSelection = getPlayerChoice();
        if (playerSelection != "") {
            computerSelection = getComputerChoice();
            gameRound = playRound(playerSelection, computerSelection);
        } else {
            console.log("No choice selected.")
        }
        
        if (!gameRound.includes("Draw")) {
            if (gameRound.includes("Win")) {
                playerScore++;
                console.log(gameRound);
                console.log("Your Score:", playerScore);
                console.log("Computer Score:", computerScore);
            }
            if (gameRound.includes("Lose")) {
                computerScore++;
                console.log(gameRound);
                console.log("Your Score:", playerScore);
                console.log("Computer Score:", computerScore);
            }
        } else {
            console.log(gameRound);
            console.log("Your Score:", playerScore);
            console.log("Computer Score:", computerScore);
        }
    }    
    if (playerScore != computerScore) {
        if (playerScore > computerScore) {
            console.log("You Win!")
        }
        if (playerScore < computerScore) {
            console.log("You Lose!")
        }
    } else {
        console.log("Draw!")
    }
}

game();