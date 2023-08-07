//Calculate area of a rectangle
console.log(`-------------------------------------`);
let length = 8
let width  = 9

area = length * width
console.log(`The area of the rectangle is: ${area}`);

//The Temperature Converter
console.log(`-------------------------------------`);
let celsius = 30
let fahrenheit = celsius * (9/5) +32
console.log(`${celsius}°C is ${fahrenheit}°F`);

fahrenheit=98.6
celsius= (fahrenheit-32)*5/9
console.log(`${fahrenheit}°C is ${celsius}°F`);

//Convert hours to seconds
console.log(`-------------------------------------`);
let hours = 2
let seconds = hours * 3600
console.log(`${hours} Hours = ${seconds} seconds`);

//Leap year
console.log(`-------------------------------------`);
let year = 2020
if(year % 4 == 0 && year % 100 != 0 || year % 400 == 0 ){
    console.log(`${year} is a Leap year`);
}
else{
    console.log(`${year} isn't a Leap year`);
}

//Find the a number is present in given range
console.log(`-------------------------------------`);
let number = 15
let start = 11
let end = 30
let bol = false

if(number>=start && number<=end){
    bol=true
    console.log(bol);
}
else{
    console.log(bol);    
}

//Factorial numbers
console.log(`-------------------------------------`);
let factorialNumber = 8;
let sum = 1
    for (i = 1 ; i <= factorialNumber; i++) {
        sum*= i;
    }
    console.log(`The factorial of ${factorialNumber} is ${sum}.`);
