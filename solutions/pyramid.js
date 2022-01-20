// // Write a func that accepts a postive n
// //the function should console.log a pyramid shape
// //with n levels using '#'
// //make sure the pyramid has space on both the left and right side.

// let makePyramid = (n) => {
//     if (n == 1) return console.log('#');
//     if (n < 1) return;
//     let columnsSpacesLength = n * 2 - 1;
//     let midpoint = Math.floor(columnsSpacesLength / 2);
//     //Determine how many rows the pyramid should have
//     for (let row = 0; row < n; row++) {
//         let lineBuilder = '';
//         //Builds the pyramid
//         for (
//             let innerColumnPostion = 0;
//             innerColumnPostion < columnsSpacesLength;
//             innerColumnPostion++
//         ) {
//             // gives range of what needs to be a "#"
//             // innerColumnPostion must be within midpoint -row & midpoint + row to be '#'
//             // aka starting from the midpoint get the range midpoint[index - 1] and midpoint[index +1] for first row
//             // then midpoint[index -2] and midpoint[index + 2] for second row and so on
//             //   '  #  '
//             //   ' ### '
//             //   '#####'
//             if (
//                 innerColumnPostion >= midpoint - row &&
//                 innerColumnPostion <= midpoint + row
//             ) {
//                 lineBuilder += '#';
//             } else {
//                 lineBuilder += ' ';
//             }
//         }
//         console.log(lineBuilder);
//     }
// };

// makePyramid(2);
// Recursion
let makePyramid2 = (n, row, stringBuilder = '') => {
    if (row === n) return;
    let columnsSpaceLength = 2 * n - 1;
    let midpoint = Math.floor(columnsSpaceLength / 2);

    if (stringBuilder.length == columnsSpaceLength) {
        console.log(stringBuilder);
        return makePyramid2(n, row + 1, '');
    }
    // build the pyramid
    //Start from the midpoint and build the right and left side
    if (
        stringBuilder.length >= midpoint - row &&
        stringBuilder.length <= midpoint + row
    ) {
        stringBuilder += '#';
        return makePyramid2(n, row, stringBuilder);
    } else {
        stringBuilder += ' ';
        return makePyramid2(n, row, stringBuilder);
    }
};

makePyramid2(3, 0);
