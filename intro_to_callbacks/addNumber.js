const readline = require("readline");

class addNumber{

    constructor(){
        this.run();
    }

    addNumbers(sum, numsLeft, completionCallback){
        if (numsLeft > 0){
            this.reader.question("Enter a number: ", (answer) => {
                const num = parseInt(answer);
                console.log(sum += num);
                this.addNumbers(sum, --numsLeft, completionCallback);
            });
        } else {
            completionCallback(sum);
            this.reader.close();
        }
    }

    run(){
        this.reader = readline.createInterface({
            input: process.stdin,
            input: process.stdout
        });

        this.addNumbers(0, 3, (sum) => {
            console.log(`The total sum: ${sum}!`);
        });
    }

}
new addNumber();