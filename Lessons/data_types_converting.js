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

//Boolean --> Number
data = Number(false)

//Null --> Number
data =  Number(null)


//Array --> Number
data = Number([2, 1])

//Float -->Number
data = parseInt("1.2")
data = parseFloat("1.5")


// Output
console.log(data);
console.log(typeof data);
console.log(data.length);
console.log(data.toFixed(2))