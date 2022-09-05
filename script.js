
    let userScore = 0
    let computerScore = 0

function playRound () { /*x is user and y is computer*/
    let userChoice=prompt('Do you choose Rock, Paper, or Scissor?').toLowerCase()
    let computerChoice = Math.random()
    if (computerChoice <0.34) {
        computerChoice='rock';
    }    
        else if (computerChoice<=0.67){
            computerChoice='paper';
        }
        else {
            computerChoice='scissors'
        }
    if (userChoice==computerChoice) {
        return 'The result is a tie!';
    }
    else if (userChoice=='rock') {
        if (computerChoice=='scissors') {
            userScore++;   /*same as userScore += 1 or userScore = userScore +1? */
            console.log('User' + userScore)
            return 'You Win';
        }
        else {
            computerScore++;
            console.log('Comp' + computerScore)
            return 'You Lose';
        }
    }
    else if (userChoice=='paper') {
        if (computerChoice=='scissors') {
            computerScore++;
            console.log('Com' + computerScore)
            return 'You Lose';
        }
        else {
            userScore++;
            console.log('User' + userScore)
            return 'You Win';
        }
    }
    else if (userChoice=='scissors') {
        if (computerChoice=='paper') {
            userScore++;
            console.log('User' + userScore)
            return 'You Win';
        }
        else {
            computerScore++;
            console.log('Comp' + computerScore)
            return 'You Lose';
        }
    }
}
//console.log(computerChoice)
//console.log(playRound (computerChoice))


// r is userScore and t is computerScore
// do I need to add userChoice and computerChoice in parameters?
function game () {
    for (let i = 1; i <= 5; i++) {
        playRound()
    }
    if (userScore == computerScore) {
        console.log(userScore);
        console.log(computerScore);
        return 'It is a big tie!'
    }
    else if (userScore > computerScore) {
        console.log(userScore);
        console.log(computerScore);
        return 'You are the grand Winner!'
    }
    else {
        console.log(userScore);
        console.log(computerScore);
        return 'You are a loser!'
    }
}

/* game ()
consoler.log (computerScore)
*/

//diagrams

//always saying tie and also I get all the points for rock
// add option if person enters nothing
