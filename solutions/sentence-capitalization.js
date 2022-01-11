//Write a function that accepts a string
// For each word capitalize the first letter of that word

let capitalizeSentence1 = (sen) => {
    //Split the sen into an array of words
    //Get the first char of each word and uppercase it
    //add the reminding characters starting from the second letter
    // join the array back together to make a word
    let senArray = sen
        .split(' ')
        .map((word) => word.charAt(0).toUpperCase() + word.substring(1));

    let capitalizeEveryWord = senArray.join(' ');
    return capitalizeEveryWord;
};
console.log(capitalizeSentence1('Hello, my friend'));
//---------------------------------------------------------------------------------------------------------
let capitalizeSentence2 = (sen) => {
    //Split the sen into an array of words
    //Get the first char of each word and uppercase it
    //add the reminding characters starting from the second letter
    // join the array back together to make a word
    let senArray = sen
        .split(' ')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1));

    let capitalizeEveryWord = senArray.join(' ');
    return capitalizeEveryWord;
};
console.log(capitalizeSentence1('Hello, my friend'));

let capitalizeSentence3 = (sen) => {
    //Split the sentence to individual char array
    let senArray = sen.split('');
    //Capitalize the first letter of the Sentence as it is the first word only if the first character is not a digit
    if (senArray[0].toUpperCase()) {
        //remove the first letter, capitalize it, and add it back in
        let firstLetter = senArray.shift().toUpperCase();
        senArray.unshift(firstLetter);
    }
    //loop through each of the character
    for (let i = 0; i < senArray.length; i++) {
        let nextIndex = i + 1;
        //If the character is a space, has another character following it, and can be capitalize
        if (
            senArray[i] === ' ' &&
            senArray[nextIndex] &&
            senArray[nextIndex].toUpperCase()
        ) {
            //Retrive that following character, uppercase it
            let capitalizeLetter = senArray[nextIndex].toUpperCase();
            //Remove the old uncapitalize character and add the new captalized character in its place
            senArray.splice(nextIndex, 1, capitalizeLetter);
        }
    }
    senArray = senArray.join('');
    return senArray;
};
console.log(capitalizeSentence3('hello, my Friend'));
