const colors = ["red", "yellow", "blue", "gray"];

const addColorButton = document.querySelector("#setColorButton");
const randomColorButton = document.querySelector("#randomColorButton");


addColorButton.addEventListener("click", addColor);
randomColorButton.addEventListener("click", changeColors);

// 1) Arraydan rastgele element(renk) seçmek

function changeColors() {
    const randomIndex = Math.floor(Math.random()*colors.length);

    document.querySelector("#colorName").textContent = colors[randomIndex];
    document.querySelector("body").style.backgroundColor = colors[randomIndex]
} 

// 2) Kullanıcının girdiği string'i renk listesine eklemek ve arkaplanı o renk yapmak

function addColor() {
    const userInput = document.querySelector(".colorInput");

    const colorData = userInput.value.split(":");
    
    const colorObbject = {
        name: colorData[0],
        motto: colorData[1],
    };



    if(colors.indexOf(userInput.value) === -1) {
    document.querySelector("body").style.backgroundColor = userInput.value;
    colors.push(userInput.value);
    } else {
        alert("renk zaten mevcut")
    }
}