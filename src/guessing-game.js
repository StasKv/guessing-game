class GuessingGame {
    constructor() {
    }
  
    setRange(min, max) {
        this.minvalue = min;
        this .maxvalue = max;
        this.guess()
    }
  
    guess() {
        
        let number = Math.round((this.maxvalue+this.minvalue)/2)
        return number
    }
  
    lower() {
        this.setRange(this.minvalue, this.guess())
    }
  
    greater() {
        this.setRange( this.guess(), this.maxvalue)
    }
}

module.exports = GuessingGame;
