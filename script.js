let computerChoice = Math.random()
let userScore = 0
let computerScore = 0
if (computerChoice <0.34) {
    computerChoice='rock';
}    
    else if (computerChoice<=0.67){
        computerChoice='paper';
    }
    else {
        computerChoice='scissors'
    }

let userChoice=prompt('Do you choose Rock, Paper, or Scissor?').toLowerCase()


function playRound (x, y) { /*x is user and y is computer*/
    if (x==y) {
        return 'The result is a tie!';
    }
    else if (x=='rock') {
        if (y=='scissors') {
            userScore++;   /*same as userScore += 1 or userScore = userScore +1? */
            return 'You Win';
        }
        else {
            computerScore++;
            return 'You Lose';
        }
    }
    else if (x=='paper') {
        if (y=='scissors') {
            computerScore++;
            return 'You Lose';
        }
        else {
            userScore++;
            return 'You Win';
        }
    }
    else if (x=='scissors') {
        if (y=='paper') {
            userScore++;
            return 'You Win';
        }
        else {
            computerScore++;
            return 'You Lose';
        }
    }
}
console.log(computerChoice)
console.log(userChoice)
console.log(playRound (userChoice, computerChoice))


// r is userScore and t is computerScore
// do I need to add userChoice and computerChoice in parameters?
function game (r, t) {
    for (let i = 1; i <= 5; i++) {
        playRound(userChoice, computerChoice)
    }
    if (r > t) {
        return 'You are the grand Winner!'
    }
    else {
        return 'You are a loser!'
    }
}

/* game ()
consoler.log (computerScore)
*/

//diagrams