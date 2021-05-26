class Calculator {
    constructor(previousOperandTextElement, currenOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement
        this.currenOperandTextElement = currenOperandTextElement
        this.clear()
    }

    clear(){
        this.currentOperand = ``
        this.previousOperand = ``
        this.operation = undefined
    }

    delete(){
        this.currentOperand = this.currenOperandTextElement.toString().slice(0, -1)
    }

    appendNumber(number){
        if(number === `.`&& this.currentOperand.includes(`.`)) return
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }
    chooseOperation(operation) {
        if (this.currentOperand === ``) return
        if (this.previousOperand !== ``) {
            this.compute()
        }
        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = ``
    }

    compute() {
        let computation
        const prev = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)
        if (isNaN(prev) || isNaN(current))
    }



}

