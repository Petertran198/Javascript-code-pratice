// Write a function that takes an int N
// and return a NxN spiral matrix
//example matrix(3)
//[
//  [1,2,3],
//  [8,9,4],
//  [7,6,5]
//]

const matrix = (n) => {
    startRow = 0;
    endRow = n - 1;
    let startColumn = 0;
    let endColumn = n - 1;
    let results = [];
    let counter = 1;
    //Creates the 3d array
    for (let i = 0; i < n; i++) {
        results.push([]);
    }

    while (startColumn <= endColumn && startRow <= endRow) {
        //This will loop through the top side
        for (let i = startColumn; i <= endColumn; i++) {
            results[startRow][i] = counter;
            counter++;
        }
        //Moves the row down once after we fill in all the start row
        startRow++;

        //This will loop through the right side
        for (let i = startRow; i <= endRow; i++) {
            results[i][endColumn] = counter;
            counter++;
        }
        //Mover the end column over left once after we fill out all the left side
        endColumn--;

        //This will loop through the bottom side
        for (let i = endColumn; i >= startColumn; i--) {
            results[endRow][i] = counter;
            counter++;
        }
        //Move the end row up once after we fill up everything on the cottom
        endRow--;

        //This will loop to the right side
        for (let i = endRow; i >= startRow; i--) {
            results[i][startColumn] = counter;
            counter++;
        }

        //Now move the startColumn to the right once
        startColumn++;
    }
    return results;
};

console.log(matrix(3));
