let humanScore = 0;
let computerScore = 0;
let humanChoice;
let computerChoice;


function getComputerChoice() {
  const randomChoice = ["Rock", "Paper", "Scissors"];
  const computerChoice = randomChoice[(Math.floor(Math.random() * (randomChoice.length)))];
  console.log(computerChoice);
}

function getHumanChoice() { 
  let humanChoice = prompt("Rock, Paper or Scissors? The coice is yours:");
  switch(humanChoice = humanChoice.toUpperCase()) {
    case "ROCK" : console.log("Rock");
    break
    case "PAPER" : console.log("Paper");
    break
    case "SCISSORS" : console.log("Scissors");
    break
    default : console.log("You can only choose between Rock, Paper and Scissors!");
  }
}

function playRound(humanChoice, computerChoice) {
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);