/*
 * Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js 
 * */

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    addPhraseToDisplay() {
        const phraseList = document.querySelector('#phrase ul');
        this.phrase.forEach(letter => {
            const li = document.createElement('li');
            phraseList.appendChild;
            if (letter === ' ') {
                li.className = 'space';
                li.textContent = ' ';
            } else {
                li.className = `hide letter ${letter}`;
                li.textContent = letter;
            }
        });
    }

    checkLetter(letter) {
        return this.phrase.includes(letter);
    }

    showMatchedLetter(letter) {
        if (this.checkLetter(letter)) {
            phraseLis.forEach(li => {
                if (li.textContent === letter) {
                    li.classList.replace('hide', 'show');
                }
            })
        }
    }
}