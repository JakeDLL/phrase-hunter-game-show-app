/* 
 * Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js 
 * */

// instanciates new game object
let game;

// Event listener starts the game 
const startButton = document.querySelector('#btn__reset');
startButton.addEventListener('click', () => {
    game = new Game();
    game.startGame();
});

const keyboard = document.querySelectorAll('.key');

// adds event listeners for on-screen keyboard
keyboard.forEach(key => key.addEventListener('click', event => {
    game.handleInteractions(event);
}));

document.addEventListener('keydown', event => {
    const startScreen = document.querySelector('#overlay');
    if (startScreen.style.display == 'none') {
        game.handleInteractions(event);
    }
});