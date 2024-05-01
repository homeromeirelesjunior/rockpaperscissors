let message = '';
let pointsPlayer = 0;
let pointsComputer = 0;

const btnRock = document.querySelector('#rock');
const btnPaper = document.querySelector('#paper');
const btnScissors = document.querySelector('#scissors');

const div = document.querySelector('#results');
const divTotalScore = document.querySelector('#current-score');
const h1 = document.querySelector('h1');
let pWinMessage = document.createElement('p');
let p = document.createElement('p');
let pCurrentScore = document.createElement('p');

const printWinMessage = message => {
  pWinMessage.textContent = message;

  h1.appendChild(pWinMessage);
}

const printMessage = message => {
  p.textContent = message;

  div.appendChild(p);
}

const printCurrentScore = message => {
  pCurrentScore.textContent = message;

  divTotalScore.appendChild(pCurrentScore);
}

const computerSelection = () => {
  const choices = ['Rock', 'Paper', 'Scissors'];

  const choice = choices[Math.floor(Math.random() * choices.length)];

  return choice;
}

const playRPSGame = (playerChoice) => {
  let computerChoice = computerSelection();
  computerChoice = computerChoice.toLowerCase();

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

  if (playerChoice == computerChoice) {
    message = 'Tie game!';
  }

  if (message.includes('lose')) {
    pointsComputer++;
  }

  if (message.includes('win')) {
    pointsPlayer++;
  } 

  if (pointsComputer == 5) {
    let winMessage = 'The computer wins! Try again!'
    printWinMessage(winMessage)
    pointsComputer = 0;
    pointsPlayer = 0;
  }

  if (pointsPlayer == 5) {
    let winMessage = 'CONGRATULATIONS! You win!'
    printWinMessage(winMessage)
    pointsComputer = 0;
    pointsPlayer = 0;
  }

  // console.log(message);
  // console.log(`Player points: ${pointsPlayer} | Computer points: ${pointsComputer}`);
  if (pointsComputer || pointsPlayer < 5) {
    printMessage(message);
    printCurrentScore(`Player points: ${pointsPlayer} | Computer points: ${pointsComputer}`);
  }

  return message;
}

  btnRock.addEventListener('click', () => {
    playRPSGame('rock');
  });

  btnPaper.addEventListener('click', () => {
   playRPSGame('paper');
  }); 

  btnScissors.addEventListener('click', () => {
    playRPSGame('scissors');
  }); 


// playRPSGame();
// playRPSGame();
// playRPSGame();
// playRPSGame();
// playRPSGame();
