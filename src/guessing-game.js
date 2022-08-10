class GuessingGame {
    constructor() {
    }
  
    setRange(min, max) {
        this.minValue = min;
        this .maxValue = max;
        this.guess()
    }
  
    guess() {
        
        let number = Math.round((this.maxValue+this.minValue)/2)
        return number
    }
  
    lower() {
        this.setRange(this.minValue, this.guess())
    }
  
    greater() {
        this.setRange( this.guess(), this.maxValue)
    }
}

module.exports = GuessingGame;
