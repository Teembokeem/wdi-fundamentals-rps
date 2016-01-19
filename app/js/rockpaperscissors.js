'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////


function getPlayerMove(move) {
    return move || getInput();
}

function getComputerMove(move) {
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;

    if (playerMove === 'rock') {
        if (computerMove === 'rock') {
            winner = 'tie';
        }
        else if (computerMove === 'paper') {
            winner = 'computer';
        }
        else {
            winner = 'player';
        }
    }

    else if (playerMove === 'paper') {
        if (computerMove === 'rock') {
            winner = 'player';
        }
        else if (computerMove == 'paper') {
            winner = 'tie';
        }
        else {
            winner = 'computer';
        }
    }

    else {
        if (computerMove === 'rock') {
            winner = 'computer';
        }
        else if (computerMove === 'paper') {
            winner = 'player';
        }
        else {
            winner = 'tie';
        }
    }
    return winner
}

function playToFive() {
  console.log('Let\'s play Rock Paper Scissors');
  var playerWins = 0;
  var computerWins = 0;
  while (playerWins < 5 && computerWins < 5) {
      playerMove = getPlayerMove();
      computerMove = getComputerMove();
      winner = getWinner(playerMove, computerMove);

      if (winner === 'player') {
          console.log("You chose " + playerMove + ' while your Nemesis chose ' + computerMove + ". You Win!");
          playerWins++;
      }
      else if (winner === 'computer') {
          console.log("You chose " + playerMove + ' while your Nemesis chose ' + computerMove + ". Sorry..");
          computerWins++;
      }
      else if (winner === 'tie') {
          console.log("Player chose " + playerMove + ' while your Nemesis chose ' + computerMove + " ... no winner.");
      }
  console.log('The score is ' + playerWins + ' to ' + computerWins + '\n');
  }
  if (playerWins ===5) {
      console.log('Grats! You won' + playerWins + " to " + computerWins);
  }
  else {
      console.log('Better luck next time.. You lost' + playerWins + " to " + computerWins);
  }
}
playToFive();
