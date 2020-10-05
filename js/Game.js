/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [
            'crocodile tears',
            'hot potato',
            'piece of cake',
            'once in a blue moon',
            'apple of my eye'
        ];
        this.activePhrase = null;
    }
    
    startGame() {
        const startScreen = document.querySelector('#overlay');
        startScreen.hidden = 'true';
        const phrase = new Phrase(this.getRandomPhrase());
        this.activePhrase = phrase;
        this.activePhrase.addPhraseToDisplay();
    }

    getRandomPhrase() {
        return this.phrases[Math.floor(Math.random() * this.phrases.length)];
    }

    handleInteraction(event) {
        if (event.target.tagName == 'BUTTON') {
            event.target.disabled = true;
        }
        if (!this.activePhrase.checkLetter(event.target.textContent)) {
            event.target.classList.add('wrong');
            removeLife();
        } else {
            event.target.classList.add('chosen');
            this.activePhrase.showMatchedLetter(event.target.textContent);
            if (checkForWin()) {
                gameOver();
            }

        }
        
    }

    removeLife() {
        const lives = document.querySelectorAll('.tries img');
        for (let life of lives) {
            if (life.src === 'images/liveHeart.png') {
                life.src = 'images/lostHeart.png';
                break;
            }
        }
        this.missed++;
        if (this.missed === 5) {
            gameOver();
        }
    }

    checkForWin() {
        const letters = document.querySelectorAll('.letter');
        letters.forEach(letter => {
            if (!letter.classList.contains('show')) {
                return false;
            }
        })
        return true;
    }

    gameOver() {
        const startScreen = document.querySelector('#overlay');
        const gameOverH1 = startScreen.querySelector('#game-over-message');
        startScreen.hidden = '';
        if (this.checkForWin()) {
            startScreen.className = 'win';
            startScreen.querySelector('#game-over-message').textContent = `You got the phrase!!!`;
        } else {
            startScreen.className = 'lose';
            gameOverH1.textContent = `You didn't get the phrase. Try again?`;
        }
    }
}