let player1Score = 0;
let computerScore = 0;
const player1Score_span = document.getElementById("player1-score");
const computerScore_span = document.getElementById("computer-score");
const leaderboard_div = document.querySelector(".leaderboard");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("choice-rock");
const paper_div = document.getElementById("choice-paper");
const scissors_div = document.getElementById("choice-scissors");

// function to get a random rock-paper-scissors choice by computer
function getComputerChoice() {
	const choices = ["rock", "paper", "scissors"];
	const randomNumber = Math.floor(Math.random() * 3);
	return choices[randomNumber];
}
//console.log(getComputerChoice());

function win() {
	player1Score++;
	player1Score_span.innerHTML = player1Score;
	computerScore_span = computerScore;

}

function lose() {
	computerScore++;
}

function draw() {
	console.log("draw!");
}

function game(userChoice) {
	const computerChoice = getComputerChoice();
	switch (userChoice + computerChoice) {
		case "rockscissors":
		case "paperrock":
		case "scissorspaper":
			win();
			break;
		case "paperscissors":
		case "rockpaper":
		case "scissorsrock":
			lose();
			break;
		case "rockrock":
		case "paperpaper":
		case "scissorsscissors":
			draw();
			break;
	}
}

function main() {

	rock_div.addEventListener("click", function () {
		game("rock");
	})

	paper_div.addEventListener("click", function () {
		game("paper");
	})

	scissors_div.addEventListener("click", function () {
		game("scissors");
	})

}

main();



// var css = document.querySelector("h3");
// var color1 = document.querySelector(".color1");
// var color2 = document.querySelector(".color2");
// var body = document.getElementById("gradient");

// function setGradient() {
// 	body.style.background =
// 		"linear-gradient(to right, "
// 		+ color1.value
// 		+ ", "
// 		+ color2.value
// 		+ ")";

// 	css.textContent = body.style.background + ";";
// }

// color1.addEventListener("input", setGradient);

// color2.addEventListener("input", setGradient);

// function randomize() {
// 	setGradient() = randomColors();
// }
// function randomColors() {
// 	return '#' + Math.floor(Math.random() * 16777215).toString(16);
// }

// 1. Write code so that the colour inputs match the background generated on the first page load. 

// 2. Display the initial CSS linear gradient property on page load.

// 3. BONUS: Add a random button which generates two random numbers for the colour inputs.