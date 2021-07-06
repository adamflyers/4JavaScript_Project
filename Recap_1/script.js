// 1) İlk önce dizileri (arrays) oluşturuyoruz.
// 2) HTML dosyasında oluşturduğumuz öğeleri (buton, boşluk vs) seçerek isim verip fonksiyon atıyoruz.
// 3) Fonksiyonlara olay ve isim atıyoruz. 
// 4) Bu olaylara iç fonksiyon atıyoruz.
    // 4a) Arraydan rastgele element(renk) seçmek
    // 4b) Rastgele seçilen rengin ismini, mottosunu ekrana yazdırmak ve arka plan rengini değiştirmek 
// 5) Kullanıcının girdiği string'i (renk ve mottosunu) renk listesine eklemek ve arkaplanı o renk yapmak
    // 5a) HTML sayfasındaki girdi yapılan element'i seçip fonksiyon atamak 
    // 5b) Fonksiyon atanılan elementi istenilen formata dönüştürmek için bölmek
    // 5c) Fonksiyonun Bölünen değerlerini isim ve mottoya atamak 
    // indexOf SADECE flat array (["red", "blue", "gray"] / [1 ,2 ,3]) için geçerlidir.
    // findIndexxOf Object Array'ler [{},{}] için geçerlidir.
    // 5d) Mükerrer renk girdisini ikaz edip engellemek
        // 5d1) Renk girdisini mükerrerliğinin kontrolü için öncekilerin ismininin fonksiyona atanması
        // 5d2) Girdinin öncekilerle kontrolünün yapılması
        // 5d3) Farklı ise sıra dizinine dahil edilmesi ve ekranın temizlenmesi
        // 5d4) Aynı ise ikaz etmesi


// Change Colors!

// 1) İlk önce dizileri (arrays) oluştuuyoruz.

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

// 2) HTML dosyasında oluşturduğumuz öğeleri (buton, boşluk vs) seçerek isim verip fonksiyon atıyoruz.
const addColorButton = document.querySelector("#setColorButton");
const randomColorButton = document.querySelector("#randomColorButton");

// 3) Fonksiyonlara çağırmak için isim ve yapacağı olay atıyoruz. 

addColorButton.addEventListener("click", addColor);
randomColorButton.addEventListener("click", changeColors);

// 4) Bu olaylara iç fonksiyon atıyoruz. 

function changeColors() {

    // 4a) Arraydan rastgele element(renk) seçmek

    const randomIndex = Math.floor(Math.random()*colors.length);

    // 4b) Rastgele seçilen rengin ismini, mottosunu ekrana yazdırmak ve arka plan rengini değiştirmek 

    document.querySelector("#colorName").textContent = colors[randomIndex].name;
    document.querySelector("#colorDesc").textContent = colors[randomIndex].motto;
    document.querySelector("body").style.backgroundColor = colors[randomIndex].name;
} 

// 5) Kullanıcının girdiği string'i (renk ve mottosunu) renk listesine eklemek ve arkaplanı o renk yapmak

function addColor() {

    // 5a) HTML sayfasındaki girdi yapılan element'i seçip fonksiyon atamak 

    const userInput = document.querySelector(".colorInput");

    // 5b) Fonksiyon atanılan elementi istenilen formata dönüştürmek için bölmek

    const colorData = userInput.value.split(":");
    
    // 5c) Fonksiyonun Bölünen değerlerini isim ve mottoya atamak 

    const colorObject = {

        name: colorData[0],
        motto: colorData[1],
    };

    // indexOf SADECE flat array (["red", "blue", "gray"] / [1 ,2 ,3]) için geçerlidir.

    // findIndexxOf Object Array'ler [{},{}] için geçerlidir.
    
    // 5d) Mükerrer renk girdisini ikaz edip engellemek

    // 5d1) Renk girdisini mükerrerliğinin kontrolü için öncekilerin ismininin fonksiyona atanması

    const searchedColorIndex = colors.findIndex(
        
        (myColor) => myColor.name === colorObject);

    // 5d2) Girdinin öncekilerle kontrolünün yapılması

    if(searchedColorIndex === -1) {
        
        document.querySelector("body").style.backgroundColor = colorObject.name;
        document.querySelector("#colorName").textContent = colorObject.name;
        document.querySelector("#colorName").textContent = colorObject.motto;
        
        // 5d3) Farklı ise sıra dizinine dahil edilmesi ve ekranın temizlenmesi

        colors.push(colorObject);
        
        userInput.value = "";
        userInput.focus();
        
        // 5d4) Aynı ise ikaz etmesi

    } else {
        
        alert("renk zaten mevcut");
    }
}