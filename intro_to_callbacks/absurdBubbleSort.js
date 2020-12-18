const readline = require('readline');
const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askIfGreaterThan(el1, el2, callback){
    reader.question(`Is ${el1} bigger than ${el2}?\nEnter 'true' or 'false/something else': `, (answer) => {
        const bool = (answer === "true") ? true : false;
        callback(bool);
    });
}

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop){
    if (i < arr.length - 1){
        askIfGreaterThan(arr[i], arr[i + 1], (biggerThan) => {
            if (biggerThan){
                const temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                madeAnySwaps = true;
            }
            innerBubbleSortLoop(arr, ++i, madeAnySwaps, outerBubbleSortLoop);
        });
    } else {
        outerBubbleSortLoop(madeAnySwaps);
    }
}

function absurdBubbleSort(arr, sortComletitionCallback){
    function outerBubbleSortLoop(madeSwaps){
        if (madeSwaps){
            innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
        } else {
            sortComletitionCallback(arr);
        }
    }
    outerBubbleSortLoop(true);
}

absurdBubbleSort([3, 2, 1], function (arr) {
    console.log("Sorted array: " + JSON.stringify(arr));
});