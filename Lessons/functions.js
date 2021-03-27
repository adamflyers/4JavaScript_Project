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