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

function promptPlayAgain() {
  let gameButtons = document.querySelector('div.buttons');
  let restartButton = document.createElement('button');
  restartButton.innerText = "Play Again";

  restartButton.addEventListener('click', () => {
    game();
    gameButtons.removeChild(restartButton);
  });
  gameButtons.appendChild(restartButton);
}

// game function goes here
function game() {
  let playerScore = 0;
  let computerScore = 0;

  // Result display values
  let resultPlayer = document.querySelector('.player.results');
  let resultComputer = document.querySelector('.computer');
  let resultWinner = document.querySelector('.winner');
  resultPlayer.textContent = `Player: ${playerScore}`;
  resultComputer.textContent = `Computer: ${computerScore}`;
  resultWinner.textContent = "Pick a choice!";

  // Play each round by picking a button
  let playRound = function() {
    let roundWinner = getRoundWinner(getPlayerChoice(this.textContent));

    if (roundWinner === "Player") playerScore++
    if (roundWinner === "Computer") computerScore++;
    resultPlayer.textContent = `Player: ${playerScore}`;
    resultComputer.textContent = `Computer: ${computerScore}`;

    if (playerScore >= 5 || computerScore >= 5) {
      let divButtons = document.querySelector('div.buttons');
      buttons.forEach(button => button.removeEventListener('click', playRound))
      resultWinner.textContent = (roundWinner === "Player")
                     ? "YOU WIN THIS GAME! Great job!"
                     : "The COMPUTER wins. Better luck next time!";
      promptPlayAgain();
    } else {
      resultWinner.textContent = getRoundResult(roundWinner);
    }
  }

  // Create game buttons
  const buttons = document.querySelectorAll('button');
  buttons.forEach(button => button.addEventListener('click', playRound));
}

game();