function guessingGame() {
    const answer = Math.floor(Math.random()*100)
    let done = false
    let numberOfGuesses = 0
    return (guess) => {
        numberOfGuesses++
        if (done) return "The game is over, you already won!"
        else if(guess === answer) {
            done = true
            return `You win! You found ${guess} in ${numberOfGuesses} guesses.`
        }
        else if(guess > answer) {
            return `${guess} is too high!`
        }
        else if(guess < answer) {
            return `${guess} is too low!`
        }
    }
}

module.exports = { guessingGame };
