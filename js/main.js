const choices = document.querySelectorAll('.choice');
const playerScore = document.getElementById('player-score');
const computerScore = document.getElementById('computer-score');
const result = document.getElementById('result');
const restart = document.getElementById('restart');
const modal = document.querySelector('.modal');
const content = document.getElementById('content');
const scoreboard = {
  player: 0,
  computer: 0,
};

// 1. When you click on a picture (rock, paper or scissors)
function play(e) {
  // choice of player
  const playerChoice = e.target.id;
  // choice of computer
  const computerChoice = getComputerChoice();
  console.log(playerChoice, computerChoice);
  // choose a winner between playerChoice and computerChoice
  const winner = getWinner(playerChoice, computerChoice);
  showWinner(winner, playerChoice, computerChoice);
}

// 2. Select rock / paper or scissors
function getComputerChoice() {
  const random = Math.random();
  if (random < 0.34) {
    return 'rock';
  } else if (random < 0.68) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

// 3. Show winner
function getWinner(p, c) {
  if (p === c) {
    return 'draw';
  } else if (p === 'rock') {
    if (c === 'scissors' || c === 'lizard') {
      return 'player';
    } else {
      return 'computer';
    }
  } else if (p === 'paper') {
    if (c === 'rock' || c === 'spock') {
      return 'player';
    } else {
      return 'computer';
    }
  } else if (p === 'scissors') {
    if (c === 'paper' || c === 'lizard') {
      return 'player';
    } else {
      return 'computer';
    }
  } else if (p === 'lizard') {
    if (c === 'paper' || c === 'spock') {
      return 'player';
    } else {
      return 'computer';
    }
  } else if (p === 'spock') {
    if (c === 'rock' || c === 'scissors') {
      return 'player';
    } else {
      return 'computer';
    }
  }
}

// 5. Show winner
function showWinner(winner, playerChoice, computerChoice) {
  if (winner === 'player') {
    scoreboard.player++;
    result.innerHTML = `
    <div>
        <p>You picked</p>
        <span class=${playerChoice}>
            <img src="../images/icon-${playerChoice}.svg" alt=${playerChoice} />
          </span>
    </div>
    <div>
        <h2 class="text-win">You win</h2>
        <button id="again" class="again-btn">Play Again</button>
    </div>
    <div>
        <p>The house picked</p>
        <span class=${computerChoice}>
            <img src="./images/icon-${computerChoice}.svg" alt=${computerChoice} />
        </span>
    </div>
    `;
  } else if (winner === 'computer') {
    scoreboard.computer++;
    result.innerHTML = `
      <div>
      <p>You picked</p>
      <span class=${playerChoice}>
        <img src="./images/icon-${playerChoice}.svg" alt=${playerChoice} />
      </span>
    </div>
    <div>
      <h2 class="text-lose">You lose</h2>
      <button id="again" class="again-btn">Play Again</button>
    </div>
    <div>
      <p>The house picked</p>
      <span class=${computerChoice}>
        <img src="./images/icon-${computerChoice}.svg" alt=${computerChoice} />
      </span>
    </div>
      `;
  } else {
    result.innerHTML = `
      <div>
      <p>You picked</p>
      <span class=${playerChoice}>
        <img src="./images/icon-${playerChoice}.svg" alt=${playerChoice} />
      </span>
    </div>
    <div>
      <h2>It's a draw</h2>
      <button id="again" class="again-btn">Play Again</button>
    </div>
    <div>
      <p>The house picked</p>
      <span class=${computerChoice}>
        <img src="./images/icon-${computerChoice}.svg" alt=${computerChoice} />
      </span>
    </div>
      `;
  }

  // Show score player
  playerScore.innerHTML = `
    <span>Your Score</span>
    <span>${scoreboard.player}</span>
  `;

  // Show score computer
  computerScore.innerHTML = `
    <span>Score Computer</span>
    <span>${scoreboard.computer}</span>
  `;

  // Show modal
  content.style.display = 'none';
  modal.style.display = 'block';
}

// 4. Play Again
function playAgain(e) {
  if (e.target == again) {
    modal.style.display = 'none';
    content.style.display = 'block';
  }
}

function restartGame(e) {
  scoreboard.player = 0;
  scoreboard.computer = 0;
  playerScore.innerHTML = `
    <span>Your Score</span>
    <span>0</span>
  `;
  computerScore.innerHTML = `
    <span>Computer Score</span>
    <span>0</span>
  `;
}

choices.forEach((choice) => choice.addEventListener('click', play));
result.addEventListener('click', playAgain);
restart.addEventListener('click', restartGame);
