
// private & protected methods & properties in class

// protected method

class CoffeeMachine {
    _waterAmount = 0

    set waterAmount(value) {
        if (value < 0) {
            value = 0
        }
        this._waterAmount = value
    }

    get waterAmount() {
        return this._waterAmount
    }

    constructor(power) {
        this._power = power
    }
}

let coffeeMachine = new CoffeeMachine(100);

coffeeMachine.waterAmount = 69
console.log(coffeeMachine.waterAmount);


// private method
class CoffeeMachine1 {

    #waterAmount = 0;
  
    get waterAmount() {
      return this.#waterAmount;
    }
  
    set waterAmount(value) {
      if (value < 0) value = 0;
      this.#waterAmount = value;
    }
  }
  
let machine = new CoffeeMachine1();
  
machine.waterAmount = 100;
// console.log(machine.#waterAmount);  // error
