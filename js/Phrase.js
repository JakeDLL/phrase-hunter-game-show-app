/*
 * Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js 
 * */

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    /**
     * --------------
     * RENDER METHODS
     * --------------
     */
    addPhraseToDisplay() {
        const letterLis = document.querySelector('#phrase ul');
        for (let i = 0; i < this.phrase.length; i++) {
            const characterLi = document.createElement('li')
            letterLis.appendChild(characterLi);
            if (this.phrase[i] === ' ') {
                characterLi.className = 'space';
                characterLi.textContent = this.phrase[i];
            } else {
                characterLi.className = `hide letter ${this.phrase[i]}`;
                characterLi.textContent = `${this.phrase[i]}`;
            }
        }
        // console.log(letterLis);
    }
}

// const phrase = new Phrase('phrase hunter');
// phrase.addPhraseToDisplay();