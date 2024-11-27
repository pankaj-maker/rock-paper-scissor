let userScore = 0;
let compScore = 0;
let choices = document.querySelectorAll(".choice");
let score = document.querySelector(".user-score");
let cscore = document.querySelector(".comp-score");
let msg = document.querySelector(".msg-container");

const drawGame = () => {
  msg.innerText = "Game is Draw! Try Again";
  msg.style.color = "black";
};
const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    msg.innerText = `You Won! Your ${userChoice} beats ${compChoice}`;
    msg.style.color = "white";
    userScore++;
    score.innerText = userScore;
  } else {
    msg.innerText = `You Lost! ${compChoice} beats your ${userChoice}`;
    msg.style.color = "red";
    compScore++;
    cscore.innerText = compScore;
  }
};

const genCompTurn = () => {
  let options = ["rock", "paper", "scissors"];
  const randomId = Math.floor(Math.random() * 3);
  return options[randomId];
};
const playGame = (userChoice) => {
  genCompTurn();
  const compChoice = genCompTurn();
  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "rock") {
      userWin = compChoice === "scissors" ? true : false;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
