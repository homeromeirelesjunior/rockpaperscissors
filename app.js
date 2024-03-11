const computerSelection = () => {
  const choices = ['Rock', 'Paper', 'Scissors'];

  const choice = choices[Math.floor(Math.random() * choices.length)];

  return choice;
}

let computerChoice = computerSelection();