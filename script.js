const getComputerChoice = () => {
    let choice = Math.floor(Math.random()*3);
    if(choice===0) return "Rock";
    else if(choice===1) return "Paper";
    else return "Scissor";
}

const computeRoundResult = (playerChoice,computerChoice) => {
    if(playerChoice===computerChoice) return 0;
    else if((playerChoice==="Rock" && computerChoice==="Scissor") || (playerChoice==="Scissor" && computerChoice==="Paper") || (playerChoice==="Paper" && computerChoice==="Rock")) return 1;
    else return -1;
}

const playRound = (event) => {
    const playerChoice = event.target.id;
    const computerChoice = getComputerChoice();

    playerMove.textContent = " " + playerChoice;
    computerMove.textContent = " " + computerChoice;

    const outcome = computeRoundResult(playerChoice,computerChoice);

    if(outcome==0) return;
    else if(outcome===1){
        playerScore.textContent = (parseInt(playerScore.textContent)+1).toString();
    }
    else{
        computerScore.textContent = (parseInt(computerScore.textContent)+1).toString();
    }
}

const buttons = document.querySelectorAll("button");
const playerMove = document.querySelector("#pMove");
const computerMove = document.querySelector("#cMove");
const playerScore = document.querySelector("#pScore");
const computerScore = document.querySelector("#cScore");

for(let button of buttons){
    button.addEventListener("click",playRound);
}

