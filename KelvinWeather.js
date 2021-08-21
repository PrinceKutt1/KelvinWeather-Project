//temperature in kelvin
let kelvin = 0;

//convert kelvin to Celsius
const Celsius = kelvin - 273; 

//Tempearture conversion to fahrenheit
let Fahrenheit = Celsius * (9/5) + 32;


//rounding fahrenheit to the nearest decimal number
Fahrenheit = Math.floor(Fahrenheit);
console.log(`The temperature is ${Fahrenheit} degrees Fahrenheit.`)

//const celsius = 100;
let Newton = Celsius * (33/100);
Newton = Math.floor(Newton);
console.log(`The tempearture of ${Celsius} celsius, is  ${Newton} degrees Newton`)
