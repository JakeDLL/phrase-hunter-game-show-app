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
    }
}