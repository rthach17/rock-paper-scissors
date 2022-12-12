function getComputerChoice() {
  let choice = (Math.floor(Math.random() * 3 + 1));
  switch (choice) {
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3:
      return "scissors";
  }
}

function getPlayerChoice() {
  let choice = prompt("Rock, Paper, or Scissors?", "Rock");
  choice = choice.toLowerCase();

  switch (choice) {
    case "rock":
    case "paper":
    case "scissors":
      return choice;
      break;
    default:
      return getPlayerChoice();
  }
}

function playRound(playerSelection, computerSelection) {
  console.log(`Player chose ${playerSelection}`);
  console.log(`Computer chose ${computerSelection}`);

  let winner = getWinner(playerSelection, computerSelection);
  if (winner === "")
    console.log("It's a tie!");
  else
    console.log(`${winner} wins this round!`);

  return winner;
}

function getWinner(playerSelection, computerSelection) {
  if (playerSelection === computerSelection)
    return "";

  switch (playerSelection) {
    case "rock":
      if (computerSelection === "scissors")
        return "Player";
    case "paper":
      if (computerSelection === "rock")
        return "Player";
    case "scissors":
      if (computerSelection === "paper")
        return "Player";
    default:
      return "Computer";
  }
}

// game function goes here
function game() {
  console.clear();
  console.log("Welcome to RPS! Five Rounds! Game Start!");

  let playerScore = 0;
  let computerScore = 0;
  let winner = "";

  /* Prompts user to play again
  let playAgainChoice = prompt("Play again? [Y] or [N]", "n");
  playAgainChoice = playAgainChoice.substr(0, 1).toLowerCase();
  if (playAgainChoice === "y")
    game();
  else
    console.log("Thanks for playing!");
  */
}

let buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', (event) => {
  console.log(button.textContent);
}));


game();