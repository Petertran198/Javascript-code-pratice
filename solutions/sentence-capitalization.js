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
