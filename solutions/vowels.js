//Return how many vowels is in a given word
let filterVowel = (str) => {
    let strLength = str.length;
    let strArr = str.toLowerCase().split('');

    let filtered = strArr.filter((char) => {
        let vowels = ['a', 'e', 'i', 'u', 'o'];
        return !vowels.includes(char);
    });

    return console.log(strLength - filtered.length);
};

filterVowel('hello my friEnd');
// Using Regex
let filteredVowelsRegex = (str) => {
    return str.toLowerCase().match(/[aeiou]/g).length;
};

console.log(filteredVowelsRegex('Hello my friend'));
