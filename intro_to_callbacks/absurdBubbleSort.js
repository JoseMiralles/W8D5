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

innerBubbleSortLoop([1,4,2,3], 0, false, ()=>console.log("Finished iterating."));