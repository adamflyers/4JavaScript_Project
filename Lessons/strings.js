let data;

//number --> String
data = 20;
data = String(20);
data = String(5 + 5);

//Bool --> String
data = false;
data = String(false)

//Dates --> String
data = String (new Date());

//Array --> String
data = String([0, 1, 2, 3]);

data = (5).toString();
data = true.toString();

// Output
console.log(data);
console.log(typeof data);
console.log(data.length);
console.log(data.toFixed(2))