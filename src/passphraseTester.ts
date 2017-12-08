class PassphraseTester {
    static isValid(phrase:string):boolean {
        const words = phrase.split(' ');
        const seenWords:string[] = [];
        let isValid = true;

        words.forEach(word => {
            if (seenWords.indexOf(word) > -1) {
                isValid = false;
                return;
            }

            seenWords.push(word);
        })
        
        return isValid;
    }

    static isValidAnagram(phrase:string):boolean {
        const words = phrase.split(' ');
        const seenWords:string[] = [];
        let isValid = true;

        words.forEach(word => {
            seenWords.forEach(seen => {
                if (PassphraseTester.isAnagram(seen, word)) {
                    isValid = false;
                    return;
                }
            });

            if (!isValid) {
                return;
            }

            seenWords.push(word);
        })
        
        return isValid;
    }

    private static isAnagram(first:string, second:string):boolean {
        const firstLetters = first.split('');
        const secondLetters = second.split('');
        const letterDictionary:{[item:string]:number} = {};
        let containsIncorrectLetters = false;

        let longerLetters = firstLetters.length > secondLetters.length ? firstLetters : secondLetters;
        let shorterletters = firstLetters.length > secondLetters.length ? secondLetters : firstLetters;

        longerLetters.forEach(letter => {
            if (!letterDictionary[letter]) {
                letterDictionary[letter] = 1;
            }
            else {
                letterDictionary[letter] += 1;
            }
        });

        shorterletters.forEach(letter => {
            if (!letterDictionary[letter]) {
                containsIncorrectLetters = false;
                return;
            }
            else {
                letterDictionary[letter] -= 1;
            }
        });

        if (containsIncorrectLetters) {
            return false;
        }

        let letterCount = 0
        for(let letter in letterDictionary) {
            if (letterDictionary.hasOwnProperty(letter)) {
                letterCount += letterDictionary[letter];
            }
        }

        return letterCount === 0;
    }
}

export {PassphraseTester}