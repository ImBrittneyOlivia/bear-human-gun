/* 

The possible outcomes are:

bear mauls human.

human disarms gun.

gun shoots bear.

If there's a tie, then the game ends in a draw.

*/

function getUserChoice(userInput) {
  var userInput = userInput.toLowerCase(); //lower case user input since user can typer in "Bear or bear"

  if (userInput === "bear" || userInput === "human" || userInput === "gun") {
    return userInput;
  } else {
    console.log("ERROR not correct input type!");
  }
}

// console.log(getUserChoice('Bear'); // 'bear'
// console.log(getUserChoice('bear'); // 'bear'
// console.log(getUserChoice('duck'); // 'Please enter valid option'

function getComputerChoice() {
  // math.random = number btw 0 and 1 --we want to get a whole number meaning 0,1 or 2 so we do Math.random * 3 which will give us
  // a number between 0 and less than 3 so then we can use Math.floor method and take whatever number we have and round it down
  var randomNumber = Math.floor(Math.random() * 3);

  if (randomNumber === 0) {
    return "gun";
  } else if (randomNumber === 1) {
    return "bear";
  } else {
    return "human";
  }
}

// console.log(getComputerChoice());

//determine winner
function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "Game is a Tie";
  }

  //if user selects human
  if (userChoice === "human") {
    if (computerChoice === "bear") {
      return "You have been mauled by a bear";
    } else {
      return "You have disarmed a gun";
    }
  }

  //if user selects bear
  if (userChoice === "bear") {
    if (computerChoice === "gun") {
      return "You have been shot by a gun";
    } else {
      return "You have mauled a human";
    }
  }

  //if user selects gun
  if (userChoice === "gun") {
    if (computerChoice === "human") {
      return "Your gun has been disarmed";
    } else {
      return "You have shot a bear";
    }
  }
}

// console.log(determineWinner("human", "gun"));
// console.log(determineWinner("bear", "gun"));

function playGame() {
  var promptUserChoice = prompt("Please choose bear, human or gun");
  var userChoice = getUserChoice(promptUserChoice);
  var computerChoice = getComputerChoice();

  console.log(userChoice);
  console.log(computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();
