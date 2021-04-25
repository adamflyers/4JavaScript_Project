// Defines Variable
let guessedNumber;
let counter = 0;

//Assign Numbber
let number = Math.floor(Math.random() * 100 + 1);
console.log(number);

//Button Click Trigger
document.getElementById("check-button").addEventListener("click", function()){
    checkNumber();
}


//Enter trigger
document
    .getElementById("number-input")
    .addEventListener("keyup", function(event){
        if (event.code == "Enter" || event.code == "NumbberEnter") {
            checkNumber();
        }
    });


//Define Function
function checkNumber() {
    console.log("Press check number button");
}


//Get numbber from input
guessedNumber = nrInput.value;
console.log(guessedNumber);


//if guessed number matched
if (number == guessedNumber) {
    alert("You are you guest in " counter + "times!");
    //play again?
    let nextGame = confirm("Do you wanna play again?")

}

//play again


//Assign new number for next game


//Thanks for participating


//Check number 1-100 and exist


//Check valid number
else-if (guessedNumber.indexof(".") || guessedNumber.indexof(",")) {
    answer.innerText = "This is not a natural number"
}

//check lower number


//Check higher number


//Otherwise



//Reset and focus