const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");

const possibleChoices = document.querySelectorAll("button");

let userChoice;
let computerChoice;
let result

possibleChoices.forEach((possibleChoices) =>
  possibleChoices.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
  })
);

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;

  if (randomNumber === 1) computerChoice = "rock";
  if (randomNumber === 2) computerChoice = "scissors";
  if (randomNumber === 3) computerChoice = "paper";

  computerChoiceDisplay.innerHTML = computerChoice;
}



function showWinAnimation() {

document.getElementById("result").style.color = "green";
setTimeout(() => {
  document.getElementById("result").style.color = "black";
}, 1000);

}

function showWinAnimationlose() {
  document.getElementById("result").style.color = "orange";
  setTimeout(() => {
    document.getElementById("result").style.color = "black";
  }, 1000);
}


function showWinAnimationdraw() {
  document.getElementById("result").style.color = "lightblue";
  setTimeout(() => {
    document.getElementById("result").style.color = "black";
  }, 1000);
}

function getResult(){
    if(computerChoice===userChoice){
        result='Its a draw!'
        showWinAnimationdraw();
    }

    if(computerChoice==='rock' && userChoice==='paper') {
        result='You lose , better luck next time!'
        showWinAnimationlose();
       
    }
     if (computerChoice === "rock" && userChoice === "scissors") {
       result = "You lose , better luck next time!";
       showWinAnimationlose();
     }
      if (computerChoice === "paper" && userChoice === "scissors") {
        result = "Yay you won!!";
        showWinAnimation();
      }
      if (computerChoice === "paper" && userChoice === "scissors") {
        result = "Yay you won!!";
        showWinAnimation();
      }
      if (computerChoice === "paper" && userChoice === "rock") {
        result = "You lose , better luck next time!";
        showWinAnimationlose();
      }
      if (computerChoice === "scissors" && userChoice === "rock") {
       result = "You lose , better luck next time!";
        showWinAnimation();
      }
       if (computerChoice === "scissors" && userChoice === "paper") {
         result = "You lose , better luck next time!";
         showWinAnimationlose();
       }
resultDisplay.innerHTML=result;

}

