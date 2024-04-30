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

    const outcome = computeRoundResult(playerChoice,computerChoice);

    if(lastMovePlayer && lastMoveComputer){
        playerMoveImg.src = `media/${playerChoice.toLowerCase()}.png`;
        playerMoveImg.alt = playerChoice;
        computerMoveImg.src = `media/${computerChoice.toLowerCase()}.png`;
        computerMoveImg.alt = computerChoice;
    }
    else{
        console.log("test");
        for(let image of document.querySelectorAll(".image-container")){
            image.textContent = "";
        }
        const playerMoveImg = document.createElement("img");
        const computerMoveImg = document.createElement("img");

        playerMoveImg.src = `media/${playerChoice.toLowerCase()}.png`;
        playerMoveImg.alt = playerChoice;
        computerMoveImg.src = `media/${computerChoice.toLowerCase()}.png`;
        computerMoveImg.alt = computerChoice;

        playerMove.append(playerMoveImg);
        computerMove.append(computerMoveImg);
    }

    if(outcome==0) return;
    else if(outcome===1){
        playerScore.textContent = (parseInt(playerScore.textContent)+1).toString();
    }
    else{
        computerScore.textContent = (parseInt(computerScore.textContent)+1).toString();
    }
}

let lastMovePlayer;
let lastMoveComputer;

const buttons = document.querySelectorAll("button");
const playerScore = document.querySelector("#pScore");
const computerScore = document.querySelector("#cScore");
const playerMove = document.querySelector("#pMove");
const computerMove = document.querySelector("#cMove");

for(let button of buttons){
    button.addEventListener("click",playRound);
}

