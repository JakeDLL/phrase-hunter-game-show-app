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
        for (let i = 0; i < this.phrase.length; i++) {
            const li = document.createElement('li');
            phraseList.appendChild(li);
            if (this.phrase[i] === ' ') {
                li.className = 'space';
                li.textContent = ' ';
            } else {
                li.className = `hide letter ${this.phrase[i]}`;
                li.textContent = this.phrase[i];
            }
        };
    }

    removePhraseFromDisplay() {
        const phraseLis = document.querySelector('#phrase ul');
        while (phraseLis.hasChildNodes()) {
            phraseLis.removeChild(phraseLis.firstChild);
        }
    }

    checkLetter(letter) {
        return this.phrase.includes(letter);
    }

    showMatchedLetter(letter) {
        if (this.checkLetter(letter)) {
            const phraseLis = document.querySelector('#phrase ul').children;
            for (let i = 0; i < phraseLis.length; i++) {
                if (phraseLis[i].textContent === letter) {
                    phraseLis[i].classList.replace('hide', 'show');
                }
            }
            // phraseLis.forEach(li => {
            //     if (li.textContent === letter) {
            //         li.classList.replace('hide', 'show');
            //     }
            // })
        }
    }
}