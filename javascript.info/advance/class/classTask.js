// => class syntax task

// Task
class Clock {
    constructor({ template }) {
        this.template = template
    }

    render() {
        let date = new Date()
        let hours = date.getHours()
        if (hours < 10) hours = "0" + hours

        let mins = date.getMinutes()
        if (mins < 10) mins = "0" + mins

        let secs = date.getSeconds()
        if (secs < 10) secs = "0" + secs

        let output = this.template
         .replace("h", hours)
         .replace("m", mins)
         .replace("s", secs)

        console.log(output);
    }

    stop() {
        clearInterval(this.timer)
    }

    start() {
        this.render()
        this.timer = setInterval(() => {
            this.render()
        }, 1000)
    }
}

let clock = new Clock({ template: "h:m:s"})
// clock.start()



// => inheritanace tasks

// task-1
class Animal {
    constructor(name) {
        this.name = name
    }
}

class Rabbit extends Animal {
    constructor(name) {
        // this.name = namec
        super(name)
        this.created = Date.now();
    }
}

let rabbit = new Rabbit("White Rabbit");
// console.log(rabbit.name);


// task-2
// => extendClock.js

class ExtendedClock extends Clock {
    constructor(options) {
      super(options);
      let { precision = 1000 } = options;
      this.precision = precision;
    }
  
    start() {
      this.render();
      this.timer = setInterval(() => this.render(), this.precision);
    }
};

let clock1 = new ExtendedClock({ template: "h:m:s"})
clock1.start()