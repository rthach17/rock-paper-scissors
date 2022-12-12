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

function getPlayerChoice(choice) {
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

function getRoundWinner(playerChoice) {
  let computerChoice = getComputerChoice();
  if (playerChoice === computerChoice)
    return "";

  switch (playerChoice) {
    case "rock":
      if (computerChoice === "scissors")
        return "Player";
    case "paper":
      if (computerChoice === "rock")
        return "Player";
    case "scissors":
      if (computerChoice === "paper")
        return "Player";
    default:
      return "Computer";
  }
}

function getRoundResult(winner) {
  return (winner === "") ? "It's a tie!" : `${winner} wins this round!`;
}

// game function goes here
function game() {
  let playerScore = 0;
  let computerScore = 0;
  let winnerMessage = "";

  // Result display values
  let resultPlayer = document.querySelector('.player');
  let resultComputer = document.querySelector('.computer');
  let resultWinner = document.querySelector('.winner');

  // Play each round by picking a button
  const buttons = document.querySelectorAll('button');
  buttons.forEach(button => button.addEventListener('click', (event) => {
    let roundWinner = getRoundWinner(getPlayerChoice(button.textContent));
    let roundMessage = getRoundResult(roundWinner);

    // Update results at end of each round
    if (roundWinner === "Player") playerScore++
    if (roundWinner === "Computer") computerScore++;
    resultPlayer.textContent = `Player: ${playerScore}`;
    resultComputer.textContent = `Computer: ${computerScore}`;
    resultWinner.textContent = roundMessage;
  }));

  

  /* Prompts user to play again
  let playAgainChoice = prompt("Play again? [Y] or [N]", "n");
  playAgainChoice = playAgainChoice.substr(0, 1).toLowerCase();
  if (playAgainChoice === "y")
    game();
  else
    console.log("Thanks for playing!");
  */
}

game();