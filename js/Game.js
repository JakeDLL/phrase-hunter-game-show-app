/* 
 * Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js 
 * */

/**
 * Class representing a game.
 */
class Game {

    constructor() {
        this.missed = 0;
        this.phrases = [
            'eat crow',
            'hot potato',
            'crocodile tears',
            'thick as thieves',
            'once in a blue moon'
        ];
        this.activePhrase = null;
        this.usedLetters = [];
    }

    /**
     * Start the game
     * remove start screen and select random phrase as active phrase
     */
    startGame() {
        const startScreen = document.querySelector('#overlay');
        startScreen.style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }

    /**
     * Selects random phrase form this.phrases array
     */
    getRandomPhrase() {
        return new Phrase(this.phrases[Math.floor(Math.random() * this.phrases.length)]);
    }

    /**
     * Handle user interactions
     * @param {eventObj} event - The event that needs to be handled
     */
    handleInteractions(event) {
        let letter;
        let button;

        // Checks what type of event it is and assigns the correct value to letter and button variable
        if (event.target.tagName === 'BUTTON') {
            button = event.target;
            letter = button.textContent;
        } else if (/[a-z]/.test(event.key)) {
            const keyboard = document.querySelectorAll('.key');
            for (let i = 0; i < keyboard.length; i++) {
                if (keyboard[i].textContent === event.key) {
                    button = keyboard[i];
                    letter = event.key;
                    break;
                }
            }
        }

        // If the letter has not been used and it is not undefined, it will push the letter into the used letters array and respond to the interaction
        if (!this.usedLetters.includes(letter) && letter) {
            this.usedLetters.push(letter);

            button.disabled = true;

            // Checks if the active phrase contains the letter
            if (!this.activePhrase.checkLetter(letter)) {
                // Adds wrong class and removes life
                button.classList.add('wrong');
                this.removeLife();
            } else {
                // Adds chosen class, displays the letter, and checks for win
                button.classList.add('chosen');
                this.activePhrase.showMatchedLetter(letter);

                // If game is won, game over is run
                if (this.checkForWin()) {
                    this.gameOver();
                }
            }
        }
    }

    /**
     * after game is over, resets on-screen keyboard keyes
     */
    resetKeyboard() {
        const keyboard = document.querySelectorAll('.key');
        keyboard.forEach(key => {
            key.className = 'key';
            key.disabled = false;
        })
    }

    /**
     * Removes life from hearts
     */
    removeLife() {
        const tries = document.querySelectorAll('.tries img');

        // Iterates through the hearts
        for (let i = 0; i < tries.length; i++) {
            // Choses first live heart and changes it to lost heart and breaks the loop
            if (tries[i].src.match("images/liveHeart.png")) {
                tries[i].src = "images/lostHeart.png";
                break;
            }
        }

        // Adds 1 to missed tries and checks if all lives are lost
        this.missed++;
        if (this.missed === 5) {
            this.gameOver();
        }
    }

    // After game is over, resets all hearts to live hearts and sets missed tries back to 0
    resetLives() {
        const hearts = document.querySelectorAll('.tries img');
        for (let i = 0; i < hearts.length; i++) {
            // If the iterated heart is lost, reset to live heart
            if (hearts[i].src.match("images/lostHeart.png")) {
                hearts[i].src = "images/liveHeart.png";
            }
        }
        this.missed = 0;
    }

    /**
     * Checks if all phrase letters have been shown
     * @return {boolean} boolean - true if won, else false
     */
    checkForWin() {
        const hiddenLetters = document.querySelectorAll('li.hide');
        if (hiddenLetters.length > 0) {
            return false;
        }
        return true;
    }

    /**
     * resets game and returns to start screen with win or lose message
     */
    gameOver() {
        // displays start screen
        const startScreen = document.querySelector('#overlay');
        startScreen.style.display = 'block';
        
        // adds game over message depending on the user winning or losing
        const gameOverMessage = document.querySelector('#game-over-message');
        if (this.checkForWin()) {
            startScreen.className = 'win';
            gameOverMessage.textContent = `Congratulations! You guessed the phrase. Try again?`;
        } else {
            startScreen.className = 'lose';
            gameOverMessage.textContent = `Oh no! You ran out of lives. The phrase was: ${this.activePhrase.phrase.toUpperCase()}. Try again?`;
        }

        // removes all phrase li items and resets game properties
        this.resetKeyboard();
        this.activePhrase.removePhraseFromDisplay();
        this.resetLives();
        this.usedLetters = [];
        this.activePhrase = null;
    }
}