function getPlayerChoice() {
    //get player input and make everything toLoweCase
    let choice = prompt("Enter your choice.").toLowerCase();
}

function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    return( choices[Math.floor(Math.random() * choices.length)])
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection != undefined) {
        
    } else{
        return("No choice entered.");
        game();
    }
}

function game() {
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    const gameRound = playRound(playerSelection, computerSelection);
    console.log(playRound(playerSelection, computerSelection));
}



game();