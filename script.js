function getComputerChoice() {
  const compChoice = ["Rock", "Paper", "Scissors"];
  const randomChoice = compChoice[(Math.floor(Math.random() * (compChoice.length)))];
  console.log(randomChoice);
}

getComputerChoice();