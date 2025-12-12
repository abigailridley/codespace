//Secret Number
// Instructions
// Secret number - a short game to guess a secret number.

// In a language of your choice, write a solution for the game that satisfies the following criteria:

// Generates a random number.

// Takes in a guess.

// Returns a string with the guess and whether that guess is lower or higher than the random number. E.g., “You answered 9. The correct answer is higher.”

// If the guess matches the random number, then return a string which confirms this. E.g., “You answered 9. This is the correct answer!”

// This challenge (deliberately) does not give any guidance about ranges, input validation, presentation etc., so you are also required to explain any assumptions that you have made. This can be done using comments in the code or in a readme file, or both.

// Assumptions:
// 1. The secret number is between 1 and 10
// 2. The input is a valid integer
// 3. The game will continue until the correct number is guessed.

// random number between 1 and 10
let randomNumber = Math.floor(Math.random() * 10) + 1;
let userGuessInput = document.getElementById("userGuessInput");
let result = document.getElementById("result");

let guessCountEl = document.getElementById("guess-count");
let gameOver = false;
// number of guesses
let guessCount = 3;

// initial guess count display
guessCountEl.innerText = `Guess count: ${guessCount}`;

// function to compare user guess with random number
function guessNumber(userGuess) {
  if (userGuess < randomNumber) {
    return `Close - try higher`;
  } else if (userGuess > randomNumber) {
    return `Close - try lower`;
  } else {
    return `The answer was ${randomNumber}. You win!`;
  }
}

//main function to handle user guess and display result
function displayResult() {
  // Prevent further guesses if the game
  if (gameOver) return;

  const userGuess = parseInt(userGuessInput.value, 10);

  //alert empty input
  if (isNaN(userGuess)) {
    alert("Please enter a valid number");
    return;
  }

  //check input between 1 and 10
  if (userGuess < 1 || userGuess > 10) {
    alert("Please enter a number between 1 and 10");
    userGuessInput.value = "";
    return;
  }
  // decrease guess count
  guessCount--;
  result.innerText = guessNumber(userGuess);
  guessCountEl.innerText = `Guess count: ${guessCount}`;

  // handle win
  if (userGuess === randomNumber) {
    gameOver = true;
    const attempts = 3 - guessCount;
    guessCountEl.innerText = `You guessed it in ${attempts} ${
      attempts === 1 ? "try" : "tries"
    }!`;
    return;
  }

  // end game after 3 incorrect guesses
  if (guessCount <= 0 && !gameOver) {
    gameOver = true;
    result.innerText = `The correct number was ${randomNumber}.`;
    userGuessInput.value = "";
    guessCountEl.innerText = "Too many guesses, play again!";
    return;
  }
}

// reset game
function resetGame() {
  //new random number
  randomNumber = Math.floor(Math.random() * 10) + 1;
  //reset variables
  gameOver = false;
  guessCount = 3;
  result.innerText = "";
  userGuessInput.value = "";
  guessCountEl.innerText = `Guess count: ${guessCount}`;
}

// event listeners
document.getElementById("new-game").addEventListener("click", resetGame);
document.getElementById("guess").addEventListener("click", displayResult);
document.getElementById("guess").addEventListener("click", displayRandomNumber);
