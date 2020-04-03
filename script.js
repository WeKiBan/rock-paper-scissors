     
let computerScore = 0;
let playerScore = 0;
let round = 1;
let scoreCounter = document.getElementById('score');
let resultText = document.querySelector('#title-container p');
let roundText = document.getElementById('round');

/* to make a random selection for computer */
function computerPlay(){
    let selectionArray = ["rock", "paper", "scissors"];
    let computerSelection = selectionArray[Math.floor(Math.random() * (selectionArray.length))];
    return computerSelection;
   
}

/* to change the rock paper scissors image on the computers side */
function changeCompImg(computerSelection){
    let compRockImg = document.getElementById("rockImgComp");
    let compPaperImg = document.getElementById("paperImgComp");
    let compScissorsImg = document.getElementById("ScissorsImgComp");

    if(computerSelection === 'rock'){
        compRockImg.classList.remove("hidden");
        compPaperImg.className = "hidden";
        compScissorsImg.className = "hidden";
        return;
    } else if(computerSelection === 'paper') {
        compPaperImg.classList.remove("hidden");
        compRockImg.className = "hidden";
        compScissorsImg.className = "hidden";
        return;
    } else if(computerSelection === 'scissors') {
        compScissorsImg.classList.remove("hidden");
        compRockImg.className = "hidden";
        compPaperImg.className = "hidden";
        return;
    }
}

    /* to change the rock paper scissors image on the Players side */

function changePlayerImg(playerSelection){
    let RockImg = document.getElementById("rockImg");
    let PaperImg = document.getElementById("paperImg");
    let ScissorsImg = document.getElementById("ScissorsImg");

    if(playerSelection === 'rock'){
        RockImg.classList.remove("hidden");
        PaperImg.className = "hidden";
        ScissorsImg.className = "hidden";
        return;
    } else if(playerSelection === 'paper') {
        PaperImg.classList.remove("hidden");
        RockImg.className = "hidden";
        ScissorsImg.className = "hidden";
        return;
    } else if(playerSelection === 'scissors') {
        ScissorsImg.classList.remove("hidden");
        RockImg.className = "hidden";
        PaperImg.className = "hidden";
        return;
    }
}


/* function to play 1 round at a time  */

function playRound(playerSelection){
    round += 1;
    let computerSelection = computerPlay();
    if(computerSelection == "rock" && playerSelection =="scissors"){
            resultText.textContent = "You Lose! Rock beats Scissors!";
            computerScore += 1;
    } else if(computerSelection == "paper" && playerSelection =="rock"){
            resultText.textContent = "You Lose! Paper beats Rock!";
            computerScore += 1;
            
    } else if(computerSelection == "scissors" && playerSelection =="paper"){
            resultText.textContent = "You Lose! Scissors beat Paper!";
            computerScore += 1;
    } else if(computerSelection == "scissors" && playerSelection =="rock"){
            resultText.textContent = "You Win! Rock beats Scissors!";
            playerScore += 1;
    } else if(computerSelection == "rock" && playerSelection =="paper"){
            resultText.textContent = "You Win! Paper beats Rock!";
            playerScore += 1;

    } else if(computerSelection == "paper" && playerSelection =="scissors"){
            resultText.textContent = "You Win! Scissors beat Paper!";
            playerScore += 1;
    } else {
         resultText.textContent = "It's draw!";
                
    }
    changeCompImg(computerSelection);
    changePlayerImg(playerSelection);
    scoreCounter.textContent = `${playerScore} - ${computerScore}` // changes score counter.
    if(playerScore === 5){
        document.getElementById('options-list').className = 'hidden'; 
        document.getElementById('playAgain').classList.remove('hidden');    
        return resultText.textContent = "You win!";
        } else if(computerScore === 5) {
            document.getElementById('playAgain').classList.remove('hidden');   
            document.getElementById('options-list').className = 'hidden';
            return resultText.textContent = 'You lose!';
        }else {
                
            return roundText.textContent = round; // changes number of round.
        }
}
    



/* setting event listeners for each of the buttons */

const buttons = Array.from(document.getElementsByClassName('options-list-item'));

buttons.forEach(button => {
button.addEventListener('click', function(e){
if(e.target.getAttribute('id') == 'chooseRock'){
    playRound('rock');
} else if(e.target.getAttribute('id') == 'choosePaper'){
    playRound('paper');
} else {
    playRound('scissors');
}
});

});
