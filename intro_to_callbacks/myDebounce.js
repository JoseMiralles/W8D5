Function.prototype.myDebounce = function (time) {
    // if (interval) clearInterval(interval);
    const self = this;
    const args = arguments;
    const interval = setInterval(function () {
        self(...args);
    }, time);
}


function test(){
    console.log("test ran.");
}

test = test.myDebounce(2000);