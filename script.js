function getComputerChoice () {
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    
    let computerchoice=getRandomInt(1,3);
    
    if (computerchoice == 1) {
        return 'Rock!'
    }

    else if (computerchoice == 2) {
        return 'Paper!'
    }

    else {
        return 'Scissor!'
    }
}

