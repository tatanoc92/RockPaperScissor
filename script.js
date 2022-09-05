
let userScore = 0
let computerScore = 0

function playRound (userChoice) { /*x is user and y is computer*/
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
    }
    else if (userChoice=='rock') {
        if (computerChoice=='scissors') {
            userScore++;   /*same as userScore += 1 or userScore = userScore +1? */
        }
        else {
            computerScore++;
        }
    }
    else if (userChoice=='paper') {
        if (computerChoice=='scissors') {
            computerScore++;
        }
        else {
            userScore++;
        }
    }
    else if (userChoice=='scissors') {
        if (computerChoice=='paper') {
            userScore++;
        }
        else {
            computerScore++;
        }
    }
    div.textContent = `Player Score: ${userScore}`;
    if (userScore == 5) {
        alert('You win!')
    }
    else if (computerScore == 5) {
        alert('You lose!')
    }
}

const rckbutton = document.querySelector('#rockbtn');
const pperbutton = document.querySelector('#paperbtn');
const scrbutton = document.querySelector('#scissorbtn');

rckbutton.addEventListener('click', () => {
    playRound('rock')
})

pperbutton.addEventListener('click', () => {
    playRound('paper')
})

scrbutton.addEventListener('click', () => {
    playRound('scissors')
})

const container = document.querySelector ('#container');
const div = document.createElement('div');
container.appendChild(div);


/*
function game () {
    i = 0
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
} */
