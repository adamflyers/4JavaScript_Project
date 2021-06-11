// Change Colors!

const colors = [
    {
        name: "red",
        motto: "Rose Red",
    },
    {
        name: "blue",
        motto: "Ocean Blue",
    },
    {
        name: "gray",
        motto: "Smoke Gray",
    },
    {
        name: "green",
        motto: "Grass Green",
    },
    {
        name: "purple",
        motto: "Deep Purple",
    },
];

const addColorButton = document.querySelector("#setColorButton");
const randomColorButton = document.querySelector("#randomColorButton");


addColorButton.addEventListener("click", addColor);
randomColorButton.addEventListener("click", changeColors);

// 1) Arraydan rastgele element(renk) seçmek

function changeColors() {
    const randomIndex = Math.floor(Math.random()*colors.length);

    document.querySelector("#colorName").textContent = colors[randomIndex].name;
    document.querySelector("#colorDesc").textContent = colors[randomIndex].motto;
    document.querySelector("body").style.backgroundColor = colors[randomIndex].name;
} 

// 2) Kullanıcının girdiği string'i renk listesine eklemek ve arkaplanı o renk yapmak

function addColor() {
    const userInput = document.querySelector(".colorInput");

    const colorData = userInput.value.split(":");
    
    const colorObject = {
        name: colorData[0],
        motto: colorData[1],
    };

    // indexOf SADECE flat array (["red", "blue", "gray"] / [1 ,2 ,3]) için geçerlidir.
    // findIndexxOf Object Array'ler [{},{}] için geçerlidir.
    
    const searchedColorIndex = colors.findIndex(
        (myColor) => myColor.name === colorObject);

        
    if(searchedColorIndex === -1) {
        document.querySelector("body").style.backgroundColor = colorObject.name;
        document.querySelector("#colorName").textContent = colorObject.name;
        document.querySelector("#colorName").textContent = colorObject.motto;
        
        colors.push(colorObject);
        userInput.value = "";
        userInput.focus();
    } else {
        alert("renk zaten mevcut");
    }
}