 let sum = 0;
 function pascalSum1(n){
     return (n * (n + 1))/2
 }
 
 function pascalSum2(n){
     var sum = 0;
     while (n>= 0) {
         sum += n
         n--;
     }
     return sum;
 }

 function sayHi(myName){
     console.log("Hello! ${myName}");
     myName = "John";
     console.log(nyName);
 }

 letmyName = "Matthew";
 sayHi(myName);
 console.log(myName);

 function sayHi(name) {
	console.log(`Hello! ${name}`);
}
sayHi('Matthew');
sayHi(); // what will the output be

function sayHi2(name, company) {
    console.log(`Hello! ${name} of ${company}`);
    company = 'Apple';
    console.log(`Hello! ${name} of ${company}`);  
}
let name = 'Emir';
let company = 'Clarusway';
sayHi2(name, company);
console.log(company);
sayHi2('Matthew'); // what will the output be