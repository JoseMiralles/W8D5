// secondsPerInterval = 1;
// time = new Date();

// window.setInterval(function(){
//     console.clear();
//     console.log(`TIME: ${time.toLocaleTimeString()}`);
//     time.setSeconds(time.getSeconds() + secondsPerInterval);
// },secondsPerInterval * 9999999999999999);

class Clock {

    constructor(){
        this.date = new Date();

        this.updateFields();
        window.setInterval(() => {
            this._tick()
        }, 1000);
    }

    updateFields(){
        this.hours = this.date.getHours();
        this.minutes = this.date.getMinutes();
        this.seconds = this.date.getSeconds();
    }

    printTime(){
        console.log(
            `${this.hours}:${this.minutes}:${this.seconds}`
        );
    }

    _tick(){
        console.clear();
        this.printTime();
        this.date.setSeconds(this.date.getSeconds() + 1);
        this.updateFields();
    }

}

const clock = new Clock();