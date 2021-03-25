// const first = 0;
// const second = 20;
// const third = 30;
// let result = first && second && third;
// console.log(result)

// const userLoggedIn = true;
// userLoggedIn && console.log("Welcome")

// -SHORTCIRCUIT-AND (&&) operatoru ilk karşılaştırma da birinci eleman false değeri verise diğerlerini sorgulamadan false sonucunu verir.

const first = 0;
const second = 20;
const third = 30;
let result = first || second || third;
console.log(result)

let sname = "";
let myName = sname || "user";
console.log("Welcome ${name}")
//-SHORTCIRCUIT- OR (||) operatorunde de ilk karşılaştırmada sırayla ilk hangisi true değerini verirse diğerlerini sorgulamadan true değerini veren elemanın değerini verir. 

