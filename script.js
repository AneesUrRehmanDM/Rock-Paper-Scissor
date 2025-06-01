let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");

const computerChoice = () => {
  const options = ["Rock", "Paper", "Scissor"];
  const getOption = Math.floor(Math.random() * 3);
  return options[getOption];
};

let message = document.getElementById("msg");
const userScorePara = document.querySelector("#user_score");
const compScorePara = document.querySelector("#computer_score");
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.querySelector("img").getAttribute("alt");
    const compChoice = computerChoice();
    // console.log("User Choice:", userChoice);
    // console.log("Computer Choice", compChoice);
    if (userChoice === compChoice) {
      // console.log("Match Draw");
      message.innerText = "Match Draw,Try Again";
      message.style.backgroundColor = "Yellow";
    } else if (
      (compChoice === "Paper" && userChoice === "Rock") ||
      (compChoice === "Scissor" && userChoice === "Paper") ||
      (compChoice === "Rock" && userChoice === "Scissor")
    ) {
      compScore++;
      compScorePara.innerText = compScore;
      // console.log("Computer Wins");
      message.innerText = "Computer wins";
      message.style.backgroundColor = "red";
    } else {
      userScore++;
      userScorePara.innerText = userScore;
      // console.log("User Wins");
      message.innerText = "You wins";
      message.style.backgroundColor = "green";
    }
  });
});
