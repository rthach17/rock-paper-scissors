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

function game() {
  console.clear();
  console.log("Game Start!");

  let playerScore = 0;
  let computerScore = 0;
  let winner = "";

  // 5 rounds between player and computer
  for (let i = 1; i <= 5; i++) {
    console.log(`----Round ${i}----`);

    let winner = playRound(getPlayerChoice(), getComputerChoice());
    if (winner === "Player")
      playerScore++;
    else if (winner === "Computer")
      computerScore++;

    console.log(`[Score] Player: ${playerScore} | Computer: ${computerScore}`);
  }

  console.log("------------------------");
  if (playerScore > computerScore)
    console.log("You win this game! Good job!");
  else if (playerScore < computerScore)
    console.log("The Computer wins the game! Better luck next time!");
  else {
    console.log("It's a stalemate! What a close battle!")
  }

  // Prompts user to play again
  let playAgainChoice = prompt("Play again? [Y] or [N]", "n");
  playAgainChoice = playAgainChoice.substr(0, 1).toLowerCase();
  if (playAgainChoice === "y")
    game();
  else
    console.log("Thanks for playing!")
}

game();