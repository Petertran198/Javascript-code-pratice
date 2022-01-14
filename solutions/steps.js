// Write a function that accepts a postive number N
// The function should be able to console.log a step shape
//with N levels using # character.
//Example
// steps(2)
// "# "
// "##"
// steps(3)
// "#  "
// "## "
// "###"
//The difficult part is u have to have the amount of spaces for each steps
// O(n^2)
let steps = (n) => {
    let step = '#';
    let staircase = '';
    //x here is used to keep track of how many steps we have so far
    for (let x = 1; x <= n; x++) {
        let space = ' ';
        let stepSentence = '';
        //To determine how many spaces we need for each sentence we take the total amount of space we can have in each sen(n) and subtract it by the steps we have.
        //Example steps(3) "#  "
        // steps = 3
        // sign durning first iteration is 1
        // therefore the space we need is 3 -1 aka (n-steps.length)
        while (space.length != n - step.length) {
            space += ' ';
        }
        while (step.length != x) {
            step += '#';
        }
        stepSentence = step + space;
        staircase += stepSentence + '\n';
    }
    return staircase;
};

console.log(steps(3));

// O(n^2)
let steps2 = (n) => {
    //Holds the staircase
    let stairCase = '';
    //In charge of making the rows. ( n=3)  means there will be 3 rows
    for (let rows = 0; rows < n; rows++) {
        //A column is correlated to a '#'
        // using steps(3)
        // first column will have 1 hashtags and two space
        // second column will have 2 hashtags and 1 space
        let stair = '';
        for (let column = 0; column <= n; column++) {
            if (column <= rows) {
                stair += '#';
            } else {
                stair += ' ';
            }
        }
        stairCase += stair + '\n';
    }
    return stairCase;
};

console.log(steps2(3));

// //-----------------------------------------
// bad recursive speed  O(2^N)
let steps3 = (n, row = 0) => {
    if (n === row) {
        return;
    } else {
        let arr = new Array(n);
        for (let i = 0; i < n; i++) {
            if (i <= row) {
                arr[i] = '#';
            } else {
                arr[i] = ' ';
            }
        }
        let s = arr.join('');
        console.log(s);
        steps3(n, row + 1);
    }
};

steps3(3, 0);

// Recursion 4 better
let step4 = (n, stairStep = 0, stairString = '') => {
    //In charge of breaking out of the function completely once the amount of "stairStep rows" are printed completely
    if (n === stairStep) {
        return;
    }

    //In charge of breaking up when the stairStep sentence of each row is completed
    if (stairString.length == n) {
        console.log(stairString);
        step4(n, stairStep + 1, '');
        //if stairString is completed
        // go to the next stairStep row and break from old function
        return;
    }

    //In charge of building the stairString
    if (stairString.length <= stairStep) {
        stairString += '#';
    } else {
        stairString += ' ';
    }
    //In charge of building the stairString
    step4(n, stairStep, stairString);
};

step4(4, 0);
