console.log("Hello World!")

function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    console.log( choices[Math.floor(Math.random() * choices.length)])
}

getComputerChoice();