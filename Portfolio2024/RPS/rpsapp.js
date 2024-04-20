// Function to get computer's choice
function getComputerChoice() {
 const choices = ['r', 'p', 's'];
 const randomNumber = Math.floor(Math.random() * 3);
 return choices[randomNumber];
}

// Function to convert choice to word
function convertToWord(letter) {
 if (letter === 'r') return 'Rock';
 if (letter === 'p') return 'Paper';
 return 'Scissors';
}

// Function to update score
function updateScore(userChoice, computerChoice) {
 const userScore = document.getElementById('user-score');
 const computerScore = document.getElementById('computer-score');
 if (userChoice === computerChoice) {
     document.getElementById('action-message').innerText = "It's a tie!";
     return;
 }
 if (
     (userChoice === 'r' && computerChoice === 's') ||
     (userChoice === 'p' && computerChoice === 'r') ||
     (userChoice === 's' && computerChoice === 'p')
 ) {
     document.getElementById('action-message').innerText = `${convertToWord(
         userChoice
     )} beats ${convertToWord(computerChoice)}. You win!`;
     userScore.innerText++;
 } else {
     document.getElementById('action-message').innerText = `${convertToWord(
         computerChoice
     )} beats ${convertToWord(userChoice)}. Computer wins!`;
     computerScore.innerText++; 
 }
}

// Main function to play game
function play(userChoice) {
 const computerChoice = getComputerChoice();
 updateScore(userChoice, computerChoice);
}

// Event listeners for choices
document.getElementById('r').addEventListener('click', function () {
 play('r');
});
document.getElementById('p').addEventListener('click', function () {
 play('p');
});
document.getElementById('s').addEventListener('click', function () {
 play('s');
});
