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

let steps = (n) => {
    let step = '#';
    //x here is used to keep track of how many steps we have so far
    for (let x = 1; x <= n; x++) {
        let space = ' ';
        let sentence = '';
        //To determine how many spaces we need for each sentence we take the total amount of space we can have in each sen(n) and subtract it by the steps we have.
        //Example steps(3) "#  "
        // steps = 3
        // sign durning first iteration is 1
        // therefore the space we need is 3 -1 aka (n-steps.length)
        while (space.length != n - step.length) {
            space += ' ';
        }
        while (step.length != x) {
            sign += '#';
        }
        sentence = sign + space;
        console.log(sentence);
    }
};

steps(3);
