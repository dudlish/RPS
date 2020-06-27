const player1Score = 0;
const computerScore = 0;
const player1Score_span = document.getElementById("player1-score");
const computerScore_span = document.getElementById("computer-score");
const leaderboard_div = document.querySelector(".leaderboard");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("choice-rock");
const paper_div = document.getElementById("choice-paper");
const scissors_div = document.getElementById("choice-scissors");

rock_div.addEventListener("click", function () {
    console.log("You've clicked on rock!");
})



// const getUserChoice = userInput => {
//     userInput = userInput.toLowerCase();
//     if (userInput === 'rock' ||
//         userInput === 'paper' ||
//         userInput === 'scissors') {
//         return userInput;
//     } else {
//         return 'Please enter a correct input.';
//     }
// };

// const getComputerChoice = () => {
//     const randomNumber = Math.floor(Math.random() * 3);
//     switch (randomNumber) {
//         case 0:
//             return 'rock';
//         case 1:
//             return 'paper';
//         case 2:
//             return 'scissors';
//     }
// };

// const determineWinner = (userChoice, computerChoice) => {
//     if (userChoice === computerChoice) {
//         return 'The game was a tie!';
//     }
//     if (userChoice === 'rock') {
//         if (computerChoice === 'paper') {
//             return 'The computer won!';
//         } else {
//             return 'Awesome, you won!';
//         }

//     }
//     if (userChoice === 'paper') {
//         if (computerChoice === 'scissors') {
//             return 'The computer won!';
//         } else {
//             return 'Awesome, you won!';
//         }
//     }
//     if (userChoice === 'scissors') {
//         if (computerChoice === 'rock') {
//             return 'The computer won!';
//         }
//         return 'Awesome, you won!';
//     }
// };

// const playGame = () => {
//     const userChoice = getUserChoice('scissors');
//     const computerChoice = getComputerChoice();
//     console.log('You threw: ' + userChoice);
//     console.log('The computer threw:' + computerChoice);

//     console.log(determineWinner(userChoice, computerChoice));
// };
// playGame();