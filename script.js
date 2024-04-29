function getComputerChoice(){
    let choice = Math.floor(Math.random()*3);
    if(choice===0) return "rock";
    else if(choice===1) return "paper";
    else return "scissors";
}

function getHumanChoice(){
    let choice = prompt("Enter your move:");
    choice = choice.toLowerCase();
    while(choice!=="rock" && choice!=="paper" && choice!="scissors"){
        alert("Please Enter a valid move");
        choice = prompt("Enter your move:");
    }

    return choice;
}

function playRound(humanChoice,computerChoice){
    if(humanChoice===computerChoice){
        alert(`Tie! Computer chose ${computerChoice[0].toUpperCase()+computerChoice.slice(1)}.`);
        return 0;
    }
    else if((humanChoice==="rock" && computerChoice==="scissors") || (humanChoice==="scissors" && computerChoice==="paper") || (humanChoice==="paper" && computerChoice==="rock")){
        alert(`You win! Computer chose ${computerChoice[0].toUpperCase()+computerChoice.slice(1)}. ${humanChoice[0].toUpperCase() + humanChoice.slice(1)} beats ${computerChoice[0].toUpperCase()+computerChoice.slice(1)}.`);
        return 1;
    }
    else{
        alert(`You Lose! Computer chose ${computerChoice[0].toUpperCase()+computerChoice.slice(1)}. ${computerChoice[0].toUpperCase()+computerChoice.slice(1)} beats ${humanChoice[0].toUpperCase() + humanChoice.slice(1)}.`);
        return -1;
    }
}

let humanScore = 0;
let computerScore = 0;

let humanMove = getHumanChoice();
let computerMove = getComputerChoice();

let res = playRound(humanMove,computerMove);

humanScore+= res;
computerScore-= res;

