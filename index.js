const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const scoreboard = document.getElementById("scoreboard");
const yourScore = document.getElementById("yourScore");
const computersScore = document.getElementById("computersScore");
const message = document.getElementById("message");
const newGame = document.getElementById("new");

const computerPlay = () => {
  let arr = ["Rock", "Paper", "Scissors"];
  let randomNum = Math.floor(Math.random() * 3);
  return arr[randomNum];
};

let playerScore = 0;
let computerScore = 0;

const playRound = (playerSelection, computerSelection) => {
  let player = playerSelection.toLowerCase();
  let computer = computerSelection.toLowerCase();
  if (player === "rock" && computer === "rock") {
    message.textContent = "Tie! You're both rockin'!";
  }
  if (player === "rock" && computer === "paper") {
    computerScore++;
    computersScore.textContent = computerScore;
    message.textContent = "That's a lost round! You just got papered!";
  }
  if (player === "rock" && computer === "scissors") {
    playerScore++;
    yourScore.textContent = playerScore;
    message.textContent = "A win for you! Rock beats scissors!";
  }
  if (player === "paper" && computer === "rock") {
    playerScore++;
    yourScore.textContent = playerScore;
    message.textContent = "Win! The computer just got papered!";
  }
  if (player === "paper" && computer === "paper") {
    message.textContent = "Tie! You both drew paper!";
  }
  if (player === "paper" && computer === "scissors") {
    computerScore++;
    computersScore.textContent = computerScore;
    message.textContent = "Ouch! You just got cut!";
  }
  if (player === "scissors" && computer === "scissors") {
    message.textContent = "Tie! You both drew scissors!";
  }
  if (player === "scissors" && computer === "paper") {
    playerScore++;
    yourScore.textContent = playerScore;
    message.textContent = "The computer just got cut and scissored up!";
  }
  if (player === "scissors" && computer === "rock") {
    computerScore++;
    computersScore.textContent = computerScore;
    message.textContent =
      "You just got a beat down thinking you were gonna cut somebody!";
  }
  if (playerScore === 5) {
    yourScore.textContent = playerScore;
    message.textContent =
      "You win! :D If you wish to play a new game, click 'New game'.";
  }

  if (computerScore === 5) {
    computersScore.textContent = computerScore;
    message.textContent =
      "You lost! :( If you wish to play a new game, click 'New game'.";
  }
  if (playerScore === 5 || computerScore === 5) {
    rock.style.transform = "translateY(-500px)";
    paper.style.transform = "translateY(-500px)";
    scissors.style.transform = "translateY(-500px)";
  }
};

rock.addEventListener("click", function () {
  playRound("rock", computerPlay());
});

paper.addEventListener("click", function () {
  playRound("paper", computerPlay());
});

scissors.addEventListener("click", function () {
  playRound("scissors", computerPlay());
});

newGame.addEventListener("click", function () {
  message.textContent = "New game";
  playerScore = 0;
  computerScore = 0;
  yourScore.textContent = playerScore;
  computersScore.textContent = computerScore;
  rock.style.transform = "translateY(0px)";
  paper.style.transform = "translateY(0px)";
  scissors.style.transform = "translateY(0px)";
});
/*
const game = () => {
  let playerScore = 0;
  let computerScore = 0;
  for (let i = 0; i < 5; i++) {
    let myChoice = window.prompt("rock, paper, or scissors?");
    let round = playRound(myChoice, computerPlay());
    if (round.slice(0, 1) === "W") {
      playerScore++;
      console.log(
        `You caught the computer slippin'! ${playerScore} - ${computerScore}`
      );
    }
    if (round.slice(0, 1) === "L") {
      computerScore++;
      console.log(
        `The computer slapped you down this round buddy! ${playerScore} - ${computerScore}`
      );
    }
    if (round.slice(0, 1) === "T") {
      console.log(`It's a tie this round! ${playerScore} - ${computerScore}`);
    }
  }
  if (playerScore > computerScore) {
    console.log(`YOU WIN! ${playerScore} - ${computerScore}`);
  } else if (computerScore > playerScore) {
    console.log(`YOU LOST! GET REKT! ${playerScore} - ${computerScore}`);
  } else console.log("Looks like it's a tie!");
};

game();
*/
