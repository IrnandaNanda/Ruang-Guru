function rockPaperScissor(player1, player2) {

  if (player1 == "paper" && player2 == "rock") {
    return console.log("player1 Won!")
  } else if (player1 == "rock" && player2 == "paper") {
    return console.log("player2 Won!")
  }

  if (player1 == "rock" && player2 == "scissor") {
    return console.log("player1 Won!")
  } else if (player1 == "scissor" && player2 == "rock") {
    return console.log("player2 Won!")
  }

  if (player1 == "scissor" && player2 == "paper") {
    return console.log("player1 Won!")
  } else if (player1 == "paper" && player2 == "scissor") {
    return console.log("player2 Won!")
  }

  if (player1 === player2) {
    return console.log("draw")
  }
}

console.log(rockPaperScissor("scissor", "paper")); // "Player 1 Won!"
console.log(rockPaperScissor("rock", "paper")); // "Player 2 Won!"
console.log(rockPaperScissor("paper", "paper")); // "Draw!"
console.log(rockPaperScissor("rock", "rock")); // "Draw!"

module.exports = rockPaperScissor;
