const randomChoice = ["Rock", "Paper", "Scissors"];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const computerChoice = randomChoice[Math.floor(Math.random() * randomChoice.length)];
  return computerChoice;
}

function getHumanChoice() { 
  let humanChoice = prompt("Rock, Paper or Scissors? The choice is yours:");
  humanChoice = humanChoice.trim().toUpperCase();

  switch(humanChoice) {
    case "ROCK":
      return "Rock";
    case "PAPER":
      return "Paper";
    case "SCISSORS":
      return "Scissors";
    default:
      console.log("Invalid choice! You can only choose between Rock, Paper, and Scissors.");
      console.log(humanChoice);
      return getHumanChoice();
  }
}

function playGame() {
  function playRound(humanChoice, computerChoice) {
    console.log("You chose: " + humanChoice , ", Computer chose: " + computerChoice);
  
    if (humanChoice === "Rock") {
      if (computerChoice === "Paper") {
        console.log("Paper beats Rock! You lost this round! :(");
        computerScore++;
      } else if (computerChoice === "Scissors") {
        console.log("Rock beats Scissors! You WON this round! :)");
        humanScore++;
      }
    }
  
    if (humanChoice === "Paper") {
      if (computerChoice === "Scissors") {
        console.log("Scissors beat Paper! You lost this round! :(");
        computerScore++;
      } else if (computerChoice === "Rock") {
        console.log("Paper beats Rock! You WON this round! :)");
        humanScore++;
      }
    }
  
    if (humanChoice === "Scissors") {
      if (computerChoice === "Rock") {
        console.log("Rock beats Scissors! You lost this round! :(");
        computerScore++;
      } else if (computerChoice === "Paper") {
        console.log("Scissors beat Paper! You WON this round! :)");
        humanScore++;
      }
    }
  
    if (humanChoice === computerChoice) {
      console.log("It's a draw!");
    }
  }
  
  
  
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  
  const result = playRound(humanSelection, computerSelection);
  
  let score = "Your score: " + humanScore + ", Computer score: " + computerScore;
  console.log(score);
  
  if (humanScore === 5) {
    return console.log("You have WON!");
  } else if (computerScore === 5) {
    return console.log("You have LOST! Try Again?");
  }

}

while (humanScore < 5 && computerScore < 5) {
  playGame();
}
