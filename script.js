let player1Score = 0;
let computerScore = 0;
const player1 = document.querySelector(".player1");
const player1Score_span = document.getElementById("player1-score");
const computerScore_span = document.getElementById("computer-score");
const leaderboard_div = document.querySelector(".leaderboard");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("choice-rock");
const paper_div = document.getElementById("choice-paper");
const scissors_div = document.getElementById("choice-scissors");
const btn_button = document.getElementById("b1");
let body = document.getElementById("gradient");
let playerInputName = document.getElementById("player1-name");

//user writes his name, until then btn is inactive

//take the name and use it instead of Player1 => btn is active
player1.addEventListener("input", grabName);

function grabName() {
	if (true) {
		document.getElementById("b1").disabled = false;
		let name = document.getElementById("playerName").value;
		// console.log(name + " plays");
		playerInputName.innerHTML = name;
	}
}

//user clicks the btn: leaderboard, p(..you win..) are visible; input, btn and h3 are invisible
btn_button.addEventListener("click", startGame);
function startGame() {
	document.querySelectorAll(".hidden").forEach(e => e.classList.remove("hidden"));
	document.querySelectorAll(".hidden-main").forEach(e => e.classList.add("hidden"));
	main();
}

// function to get a random rock-paper-scissors choice by computer
function getComputerChoice() {
	const choices = ["rock", "paper", "scissors"];
	const randomNumber = Math.floor(Math.random() * 3);
	return choices[randomNumber];
}

// after highlighting the winner's half of the screen, go back to default gradient background
function normalBackground() {
	body.classList.remove("winner");
	body.classList.remove("loser");
}

function win(userChoice, computerChoice) {
	player1Score++;
	player1Score_span.innerHTML = player1Score;
	computerScore_span.innerHTML = computerScore;
	result_p.innerHTML = `${userChoice} beats ${computerChoice}. You win!`;
	body.classList.add("winner");
	setTimeout(normalBackground, 1000);
}

function lose(userChoice, computerChoice) {
	computerScore++;
	player1Score_span.innerHTML = player1Score;
	computerScore_span.innerHTML = computerScore;
	result_p.innerHTML = `${computerChoice} beats ${userChoice}. You lose!`;
	body.classList.add("loser");
	setTimeout(normalBackground, 1000);
}

function draw(userChoice, computerChoice) {
	result_p.innerHTML = `${userChoice} and ${computerChoice}. It's a draw!`;
}

function game(userChoice) {
	const computerChoice = getComputerChoice();
	switch (userChoice + computerChoice) {
		case "rockscissors":
		case "paperrock":
		case "scissorspaper":
			win(userChoice, computerChoice);
			break;
		case "paperscissors":
		case "rockpaper":
		case "scissorsrock":
			lose(userChoice, computerChoice);
			break;
		case "rockrock":
		case "paperpaper":
		case "scissorsscissors":
			draw(userChoice, computerChoice);
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
// main();