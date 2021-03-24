class Phrase {

    /**
     * Create phrase object
     * @param {string} phrase - The string to be used as phrase object
     */
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    /**
     * Creates lis for each charated in the phrase property
     */
    addPhraseToDisplay() {
        const phraseList = document.querySelector('#phrase ul');
        // Iterates through each character and sets the appropiate class names and text content
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

    /**
     * Checks if the phrase contains the letter
     * @param {string} letter - letter to be checked
     */
    checkLetter(letter) {
        return this.phrase.includes(letter);
    }

    /**
     * displays chosen letter from phrase
     * @param {string} letter - letter chosen to be displayed on screen
     */
    showMatchedLetter(letter) {
        const phraseLis = document.querySelector('#phrase ul').children;

        // Iterates through all li elemets to check if current li element is the right letter to display
        for (let i = 0; i < phraseLis.length; i++) {
            if (phraseLis[i].textContent === letter) {
                // replaces li class 'hide' with 'show'
                phraseLis[i].classList.replace('hide', 'show');
            }
        }
    }
}