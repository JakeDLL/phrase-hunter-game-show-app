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
        const letterList = document.querySelector('#phrase ul');
        for (let i = 0; i < this.phrase.length; i++) {
            const characterLi = document.createElement('li')
            letterList.appendChild(characterLi);
            if (this.phrase[i] === ' ') {
                characterLi.className = 'space';
                characterLi.textContent = this.phrase[i];
            } else {
                characterLi.className = `hide letter ${this.phrase[i]}`;
                characterLi.textContent = `${this.phrase[i]}`;
            }
        }
    }

    checkLetter(letter) {
        return this.phrase.includes(letter); 
    }

    showMatchedLetter(letter) {
        if (this.checkLetter(letter)) {
            const letterLis = document.querySelectorAll(`.${letter}`);
            letterLis.forEach(li => li.classList.replace('hide', 'show'));
            console.log(letterLis);
        }
    }
}

// const phrase = new Phrase('phrase hunter');
// phrase.addPhraseToDisplay();
// phrase.showMatchedLetter('r');