Function.prototype.myThrottle = function (interval) {
    let self = this;
    let tooSoon = false;
    const func = function () {
        const args = arguments;
        const context = this;
        if (tooSoon === false) {
            tooSoon = true;
            self(...args);
            setTimeout(() => { tooSoon = false }, interval);
        }
    }
    return func;
}

class Neuron {
    fire() {
        console.log("Firing!");
    }
}

const neuron = new Neuron();
// When we create a new Neuron,
// we can call #fire as frequently as we want

// Using Function#myThrottle, we should be able to throttle
// the #fire function of our neuron so that it can only fire
// once every 500ms:

neuron.fire = neuron.fire.myThrottle(10000);

// The following code will try to #fire the neuron every 10ms. Try it in the console:
const interval = setInterval(() => {
    neuron.fire();
}, 10);