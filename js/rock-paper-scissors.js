// Global variables for scores.
let computerScore = 0;
let humanScore = 0;

// Start round 1 of game.

  // Computer randomly returns "rock", "paper" or "scissors".
  function getComputerChoice() {
    var options = ["Rock", "Paper", "Scissors"];
    var computerChoice = options[Math.floor(Math.random() * options.length)]
    return (computerChoice);
  }

  // *** STILL TO DO *** Record computer's score.

  // Computer prompts user to enter "rock", "paper" or "scissors".
  function getHumanChoice() {
    var humanChoice = prompt("Enter 'Rock', 'Paper' or 'Scissors':")
    // User enters "rock", "paper" or "scissors".
    // *** STILL TO DO *** No validification of input required.
    // *** STILL TO DO *** Input should be case-insensitive.
    // Return user input.
    return (humanChoice);
  }

  //console.log(humanChoice());


  // Record player's score.

  // Display a message, depending on who wins the round.

    // If computer wins: message saying "You lose" or similar.

    // If user wins: message saying "Congratulations" or similar.

// End round 1 of game.

// Play four more rounds of game, so 5 in total.

  // As per round 1, except:

    // Computer and user scores are incremented in each round.

// Display a message, depending on who wins the game.

  // If computer wins: message saying "You lose" or similar.

  // If user wins: message saying "Congratulations" or similar.
