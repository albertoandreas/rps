let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {
  const computerChoice = ["Rock", "Paper", "Scissors"];
  const randomChoice = computerChoice[(Math.floor(Math.random() * (computerChoice.length)))];
  console.log("The Computer has chosen " + randomChoice);
}

function getHumanChoice() { 
  let humanChoice = prompt("Rock, Paper or Scissors? The coice is yours:");
  switch(humanChoice = humanChoice.toUpperCase()) {
    case "ROCK" : console.log("You chose Rock");
    break
    case "PAPER" : console.log("You chose Paper");
    break
    case "SCISSORS" : console.log("You chose Scissors");
    break
    default : console.log("You can only choose between Rock, Paper and Scissors!");
  }
}

function playRound(humanChoice, computerChoice) {
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);