function getComputerChoice() {
  const compChoice = ["Rock", "Paper", "Scissors"];
  const randomChoice = compChoice[(Math.floor(Math.random() * (compChoice.length)))];
  console.log(randomChoice);
}

function getHumanChoice() { 
  let humanChoice = prompt("Rock, Paper or Scissors? The coice is yours:");

  if (humanChoice === "Rock") {
    return console.log("You have chosen Rock");
  } else if (humanChoice === "Paper") {
    return console.log("You have chosen Paper");
  } else if (humanChoice === "Scissors") {
    return console.log("You have chosen Scissors");
  } else if (humanChoice === "rock") {
    return console.log("You have chosen Rock");
  } else if (humanChoice === "paper") {
    return console.log("You have chosen Paper");
  } else if (humanChoice === "scissors") {
    return console.log("You have chosen Scissors");
  } else {
    return console.log ("You can only choose between Rock, Paper or Scissors!")
  }

  
  
}

getHumanChoice();