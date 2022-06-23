const computerPlay = () => {
  let arr = ["Rock", "Paper", "Scissors"];
  let randomNum = Math.floor(Math.random() * 3);
  return arr[randomNum];
};

const RockPaperScissors = (playerSelection, computerSelection) => {
  let player = playerSelection.toLowerCase();
  let computer = computerSelection.toLowerCase();
  if (player === "rock" && computer === "rock") {
    return "Tie! You both drew rock!";
  }
  if (player === "rock" && computer === "paper") {
    return "L! You just got papered!";
  }
  if (player === "rock" && computer === "scissors") {
    return "W! Rock beats scissors!";
  }
  if (player === "paper" && computer === "rock") {
    return "W! OOH the computer just got papered!";
  }
  if (player === "paper" && computer === "paper") {
    return "Tie! You both drew paper!";
  }
  if (player === "paper" && computer === "scissors") {
    return "L! You just got cut!";
  }
  if (player === "scissors" && computer === "scissors") {
    return "Tie! You both drew scissors!";
  }
  if (player === "scissors" && computer === "paper") {
    return "W! The computer just got cut and scissored up!";
  }
  if (player === "scissors" && computer === "rock") {
    return "L! You just got a beat down thinking you were gonna cut somebody!";
  }
};

const game = () => {
  let playerScore = 0;
  let computerScore = 0;
  for (let i = 0; i < 5; i++) {
    let myChoice = window.prompt("rock, paper, or scissors?");
    let round = RockPaperScissors(myChoice, computerPlay());
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
