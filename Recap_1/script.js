const colors = ["red", "yellow", "blue", "gray"];

const addColorButton = document.querySelector("#setColorButton");
const randomColorButton = document.querySelector("#randomColorButton");

addColorButton.addEventListener("click", addColor);
randomColorButton.addEventListener("click", changeColors);

function changeColors() {
    const randomIndex = Math.floor(Math.random()*colors.length);

    document.querySelector("#colorName").textContent = colors[randomIndex];
    document.querySelector("body").style.backgroundColor = colors[randomIndex]
} 

function addColor() {
    const userInput = document.querySelector(".colorInput");
    
    if(colors.indexOf(userInput.value) === -1) {
    document.querySelector("body").style.backgroundColor = userInput.value;
    colors.push(userInput.value);
    } else {
        alert("renk zaten mevcut")
    }
}