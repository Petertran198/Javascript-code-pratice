let anagram = (word1, word2) => {
    //Replaced all non words
    let replacedWord1 = word1.replace(/[^\w]/gm, '').toLowerCase();
    let replacedWord2 = word2.replace(/[^\w]/gm, '').toLowerCase();

    if (replacedWord1.length != replacedWord2.length) {
        return false;
    }

    for (w of word1) {
        //Split the word into an array seperating by that char. After that count the length and subtract one to find how many instance of that word was found
        if (word1.split(w).length - 1 != word2.split(w).length - 1) {
            return false;
        }
    }
    for (w of word2) {
        if (word2.split(w).length - 1 != word1.split(w).length - 1) {
            return false;
        }
    }
    return true;
};

console.log('Frie2d && Fired2 are anagrams ---------', anagram('Frie2d', 'Fired2'));
console.log('rue && ruee are anagrams ---------', anagram('rue', 'ruee'));
