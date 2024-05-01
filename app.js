const computerSelection = () => {
  const choices = ['Rock', 'Paper', 'Scissors'];

  const choice = choices[Math.floor(Math.random() * choices.length)];

  return choice;
}

let message = '';
let pointsPlayer = 0;
let pointsComputer = 0;

const playRPSGame = () => {
  const btnRock = document.querySelector(['data-rock']);
  const btnPaper = document.querySelector(['data-paper']);
  const btnScissors = document.querySelector(['data-scissors']);

  let computerChoice = computerSelection();
  computerChoice = computerChoice.toLowerCase();

  btnRock.addEventListener('click', () => {
    if (playerChoice == 'rock' && computerChoice == 'scissors') {
      message = 'You win! Rock beats Scissors!'
    }
  
    if (playerChoice == 'rock' && computerChoice == 'paper') {
      message = 'You lose! Paper beats Rock!'
    }
  });

  btnPaper.addEventListener('click', () => {
    if (playerChoice == 'paper' && computerChoice == 'rock') {
      message = 'You win! Paper beats Rock!'
    }

    if (playerChoice == 'paper' && computerChoice == 'scissors') {
      message = 'You lose! Scissors beats paper!'
    }
  }); 

  btnScissors.addEventListener('click', () => {
    if (playerChoice == 'scissors' && computerChoice == 'paper') {
      message = 'You win! Scissors beats Paper!'
    }
  
    if (playerChoice == 'scissors' && computerChoice == 'rock') {
      message = 'You lose! Rock beats Scissors!'
    }
  });

  // let playerChoice = prompt('Enter paper, rock or scissors!');
  // playerChoice = playerChoice.toLowerCase();


  if (playerChoice == computerChoice) {
    message = 'Tie game!';
  }

  if (message.includes('lose')) {
    pointsComputer++;
  }

  if (message.includes('win')) {
    pointsPlayer++;
  }  

  console.log(message);
  console.log(`Player points: ${pointsPlayer} | Computer points: ${pointsComputer}`);

  return message;
}


// playRPSGame();
// playRPSGame();
// playRPSGame();
// playRPSGame();
// playRPSGame();
