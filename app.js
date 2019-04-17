let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById('user-score');
const compScore_span = document.getElementById('comp-score');
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector('.result > p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');

function getCompChoice() {
  const choices = ['r', 'p', 's'];
  const randNum = Math.floor(Math.random()*3);
  return choices[randNum];
}

function convertChoice(letter) {
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
    return "Scissors";
}

function win(userChoice, compChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  const user = document.getElementById(userChoice);
  const scoreBoard = document.getElementById('score-board');
  const smallUserWord = "user".fontsize('3').sup();
  const smallCompWord = "comp".fontsize('3').sup();
  result_div.innerHTML = `${convertChoice(userChoice)}${smallUserWord} beats ${convertChoice(compChoice)}${smallCompWord}. You win!`;
  user.classList.add('green-glow');
  setTimeout(() => user.classList.remove('green-glow'), 300);
  scoreBoard.classList.add('green-glow-sb');
  setTimeout(() => scoreBoard.classList.remove('green-glow-sb'), 300);
}

function lose(userChoice, compChoice) {
  compScore++;
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  const user = document.getElementById(userChoice);
  const scoreBoard = document.getElementById('score-board');
  const smallUserWord = "user".fontsize('3').sup();
  const smallCompWord = "comp".fontsize('3').sup();
  result_div.innerHTML = `${convertChoice(userChoice)}${smallUserWord} loses to ${convertChoice(compChoice)}${smallCompWord}. You lose!`;
  user.classList.add('red-glow');
  setTimeout(() => user.classList.remove('red-glow'), 300);
  scoreBoard.classList.add('red-glow-sb');
  setTimeout(() => scoreBoard.classList.remove('red-glow-sb'), 300);
}

function draw(userChoice, compChoice) {
  const user = document.getElementById(userChoice);
  const scoreBoard = document.getElementById('score-board');
  const smallUserWord = "user".fontsize('3').sup();
  const smallCompWord = "comp".fontsize('3').sup();
  result_div.innerHTML = `${convertChoice(userChoice)}${smallUserWord} equals ${convertChoice(compChoice)}${smallCompWord}. It's a draw!`;
  user.classList.add('grey-glow');
  setTimeout(() => user.classList.remove('grey-glow'), 300);
  scoreBoard.classList.add('grey-glow-sb');
  setTimeout(() => scoreBoard.classList.remove('grey-glow-sb'), 300);
}

function game(userChoice) {
  const compChoice = getCompChoice();
  switch(userChoice + compChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, compChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, compChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, compChoice);
      break;    
  }
}

function main() {
  rock_div.addEventListener('click', () => game('r'));
  
  paper_div.addEventListener('click', () => game('p'));
  
  scissors_div.addEventListener('click', () => game('s'));
}

main();