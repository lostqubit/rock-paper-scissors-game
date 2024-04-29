function getComputerChoice(){
    let choice = Math.floor(Math.random()*3);
    if(choice===0) return "rock";
    else if(choice===1) return "paper";
    else return "scissors";
}

function getHumanChoice(){
    let choice = prompt("Enter your move:");
    while(choice!=="rock" && choice!=="paper" && choice!="scissors"){
        alert("Please Enter a valid move");
        choice = prompt("Enter your move:");
    }

    return choice;
}
