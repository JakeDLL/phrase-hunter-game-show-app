/* 
 * Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js 
 * */

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
    }

    startGame() {
        const startScreen = document.querySelector('#overlay');
        startScreen.style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }

    getRandomPhrase() {
        return new Phrase(this.phrases[Math.floor(Math.random() * this.phrases.length)]);
    }

    handleInteractions(event) {
        if (event.target.tagName === 'BUTTON') {
            const button = event.target;;
            button.disabled = true;
            
            if (!this.activePhrase.checkLetter(button.textContent)) {
                button.classList.add('wrong');
                this.removeLife();
            } else {
                button.classList.add('chosen');
                this.activePhrase.showMatchedLetter(button.textContent);
                if (this.checkForWin()) {
                    this.gameOver();
                }
            }
        }
    }

    resetKeyboard() {
        const keyboard = document.querySelectorAll('.key');
        keyboard.forEach(key => {
            key.className = 'key';
            key.disabled = false;
        })
    }

    removeLife() {
        const tries = document.querySelectorAll('.tries img');
        for (let i = 0; i < tries.length; i++) {
            if (tries[i].src.match("images/liveHeart.png")) {
                tries[i].src = "images/lostHeart.png";
                break;
            }
        }
        this.missed++;
        if (this.missed === 5) {
            this.gameOver();
        }
    }

    resetLives() {
        const hearts = document.querySelectorAll('.tries img');
        for (let i = 0; i < hearts.length; i++) {
            if (hearts[i].src.match("images/lostHeart.png")) {
                hearts[i].src = "images/liveHeart.png";
            }
        }
        this.missed = 0;
    }

    checkForWin() {
        const hiddenLetters = document.querySelectorAll('li.hide');
        if (hiddenLetters.length > 0) {
            return false;
        }
        return true;
    }

    gameOver() {
        const startScreen = document.querySelector('#overlay');
        startScreen.style.display = 'block';
        
        const gameOverMessage = document.querySelector('#game-over-message');
        if (this.checkForWin()) {
            startScreen.className = 'win';
            gameOverMessage.textContent = `Congratulations! You guessed the phrase. Try again?`;
        } else {
            startScreen.className = 'lose';
            gameOverMessage.textContent = `Oh no! You ran out of lives. Try again?`;
        }

        this.activePhrase.removePhraseFromDisplay();
        this.resetKeyboard();
        this.resetLives();
    }
}

