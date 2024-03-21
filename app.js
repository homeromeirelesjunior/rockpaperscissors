const computerSelection = () => {
  const choices = ['Rock', 'Paper', 'Scissors'];

  const choice = choices[Math.floor(Math.random() * choices.length)];

  return choice;
}

let message = '';

const playRPSGame = () => {
  let computerChoice = computerSelection();
  let playerChoice = prompt('Enter paper, rock or scissors!');

  playerChoice = playerChoice.toLowerCase();
  computerChoice = computerChoice.toLowerCase();


  if (playerChoice == computerChoice) {
    message = 'Tie game!';
  }

  if (playerChoice == 'rock' && computerChoice == 'scissors') {
    message = 'You win! Rock beats Scissors!'
  }

  if (playerChoice == 'rock' && computerChoice == 'paper') {
    message = 'You lose! Paper beats Rock!'
  }

  if (playerChoice == 'paper' && computerChoice == 'rock') {
    message = 'You win! Paper beats Rock!'
  }

  if (playerChoice == 'paper' && computerChoice == 'scissors') {
    message = 'You lose! Scissors beats paper!'
  }

  if (playerChoice == 'scissors' && computerChoice == 'paper') {
    message = 'You win! Scissors beats Paper!'
  }

  if (playerChoice == 'scissors' && computerChoice == 'rock') {
    message = 'You lose! Rock beats Scissors!'
  }

  console.log(message);

  return message;
}

const playGame = () => {
  let i = 1;
  let pointsPlayer = 0;
  let pointsComputer = 0;

  do {
    playRPSGame();
    i++;
    if (message.includes('lose')) {
      pointsComputer++;
    }

    if (message.includes('win')) {
      pointsPlayer++;
    }
  } while(i > 6);


  console.log(pointsPlayer, pointsComputer);
}

playGame();
