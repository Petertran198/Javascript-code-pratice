//Takes two params
// Param 1 = array
// Param 2 = size you want to split the array into
//Example chunked([1,2,3,4,5], 2) => [[1,2],[3,4],[5]]

//Solution 1 ---------------------------------------------------------
let arraySized = (arr, size) => {
    //Container to hold the array
    let container = [];
    //Container to hold the inner array
    let addArr = [];
    // count keeps track of size
    let count = 0;
    arr.map((num) => {
        count += 1;
        if (count <= size) {
            addArr.push(num);
        } else {
            container.push(addArr);
            // Make the count 1 because we will also push  1 digit into that inner array
            count = 1;
            addArr = [];
            addArr.push(num);
        }

        //if the num is the last digit of the array push that arr in
        //This is to handle edge cases where the inner array did not yet meet the size requirements but is the last digit
        if (num === arr[arr.length - 1]) {
            container.push(addArr);
        }
    });
    return container;
};

console.log(arraySized([1, 2, 3, 4, 5], 2));

// Solution 2 ----------------------------------
let chunked = (arr, size) => {
    //Main container
    let container = [];
    //Sub container to hold inner
    let subArr = [];

    arr.map((num) => {
        //Get the first item of the main container
        //This will hold the first sub array
        subArr = container[container.length - 1];
        //If no subArray was found inside the main container
        //or if the subArray meets the size requirements
        //push the subArray into the main container
        if (!subArr || subArr.length == size) {
            container.push([num]);
        } else {
            //If the subArray did not meet the size requirements
            //Keep pushing until it does.
            subArr.push(num);
        }
    });
    return container;
};

console.log(chunked([1, 2, 3, 4, 5], 2));
