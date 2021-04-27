// Variables
const previousElement = document.querySelector(".previous-display")
const currentElement = document.querySelector(".current-display")

const acButton = querySelector(".ac")
const pmButton = querySelector(".pm")
const percentButton = querySelector(".percent")

const additionButton = querySelector(".addition")
const substractionButton = querySelector(".substraction")
const multiplicationButton = querySelector(".multiplication")
const divisionButton = querySelector(".division")
const equalButton = querySelector(".equal")


const decimalButton = document.querySelector(".decimal")
const number0 = document.querySelector(".number-0")
const number1 = document.querySelector(".number-1")
const number2 = document.querySelector(".number-2")
const number3 = document.querySelector(".number-3")
const number4 = document.querySelector(".number-4")
const number5 = document.querySelector(".number-5")
const number6 = document.querySelector(".number-6")
const number7 = document.querySelector(".number-7")
const number8 = document.querySelector(".number-8")
const number9 = document.querySelector(".number-9")

const numberArray = [
    number0,
    number1,
    number2,
    number3,
    number4,
    number5,
    number6,
    number7,
    number8,
    number9
]   

let previousOperand = "123";
let currentOperand = "987"

// Functions
function DisplayNumber(){
    previousElement.innerText = previousOperand;
    currentElement.innerText = currentOperand;
}

function AppendNumbber(number){
    currentOperand = currentOperand.toString() + currentOperand.toString();
    DisplayNumber();
}

function ChooseOperation(selectedOperation){
    previousOperand = currentOperand;
    currentOperand = "";
    DisplayNumber();
}

// Add event Listerner to operators buttons
additionButton.addEventListener("click", ()=> {
   ChooseOperation("+");
})

subtractionButton.addEventListener("click", ()=> {
    ChooseOperation("-");
})

multiplaictionButton.addEventListener("click", ()=> {
    ChooseOperation("*");
})

divisionButton.addEventListener("click", ()=> {
    ChooseOperation("/");
})

equalButton.addEventListener("click", ()=> {
    console.log("equalButton")
}


// Add event Listerner to top buttons

// Add event Listerner to numbers buttons

for (let i = 0; i < numberArray.lenght; i++){
    const number = numberArray[i]

    number.addEventListener("clicl", () => {
        currentOperand = number.toString();
        DisplayNumber();
    })
}