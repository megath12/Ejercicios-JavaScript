//  Bad practices
var timeSeconds = 1;
//var second = 1s;

// Why doesn't it work?
var if_condition = true;


// Should equal formula for wild wings
var Buffalowings = "wings" + "buffalo"


// Null variable
var Null = null


// All variables should equal 1
var uno=1, one=1, wan=1, uma=1, um=1;


// It's broken
console.log(.1);


// Console.log para mostrar [area] de un cuadrado
let ladoa=4,ladob=5;
console.log(ladoa * ladob);

// Should equal 4
var four = 2 + 2;

// Doesn't work for math problems
var pi = 3.14159;




//Name of the space shuttle
//Determination

let ShuttleSpeed=17500;    //mph

let DistanceMars = 225000000;    //km

let DistanceMoon = 384400;     //km

let MilesPerKilometer= 0.621

console.log(typeof(ShuttleSpeed))
console.log(typeof(DistanceMars))
console.log(typeof(DistanceMoon))
console.log(typeof(Miles2Kilometer))

let MilesMars, hoursMars, daysMars;
MilesMars=MilesPerKilometer*DistanceMars;
hoursMars=MilesMars/ShuttleSpeed;
daysMars=hoursMars/24;

console.log("Mars will take " + daysMars + " days to reach Mars.")

let MilesMoon, hoursMoon, daysMoon;
MilesMoon=MilesPerKilometer*DistanceMoon;
hoursMoon=MilesMoon/ShuttleSpeed;
daysMoon=hoursMoon/24;

console.log("Moon will take " + daysMoon + " days to reach Mars.")
