/* 
 * Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js 
 * */

// instanciates new game object
const game = new Game();

// Event listener starts the game 
const startButton = document.querySelector('#btn__reset');
startButton.addEventListener('click', () => {
    game.startGame();
});

const keyboard = document.querySelectorAll('.key');

// adds event listeners for on-screen keyboard
keyboard.forEach(key => key.addEventListener('click', event => {
    game.handleInteractions(event);
}));

document.addEventListener('keydown', event => {
    console.log(event);
})