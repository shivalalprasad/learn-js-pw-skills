// Basic function
// Function without parameters
function compliments() {
    console.log(`Hey Shivalal you are so nice`);
    console.log(`Hey Shivalal you have good comunivation skills`);
    console.log(`Hey Shivalal you are multitalented`);
    console.log(`Hey Shivalal you are marvellous in coding`);
}

compliments();

// Function with parameters 
    // Function with single parameter
function complimentsParams(name) {
    console.log(`Hey ${name} you are so nice`);
    console.log(`Hey ${name} you have good comunivation skills`);
    console.log(`Hey ${name} you are multitalented`);
    console.log(`Hey ${name} you are marvellous in coding`);
}

complimentsParams("Prasad");


    // Function with multiple parameters
        // Function with additional parameter

function sum(a,b,c=0) {
    return a+b+c;
}

function zgiven(z) {
    if (z==0){
        return(` is r =`);
    }else{
        return(` and ${z} is r =`);
    }
}

function r(x,y,z=0) {
    console.log(`Sum of ${x} and ${y} ${zgiven(z)} ${sum(x,y,z)}`);
}
r(44,12)
r(21,78,6)

// Function with multiple parameters
    // Function with multiplication parameter

{function multiplication(a,b,c=1) {
    return a*b*c;
}

function zgiven(z) {
    if (z==1){
        return(` is r =`);
    }else{
        return(` and ${z} is r =`);
    }
}

function r(x,y,z=1) {
    console.log(`multiplication of ${x} and ${y}${zgiven(z)} ${multiplication(x,y,z)}`);
}
r(10,5)
r(10,8,6)}

//// multiple parameters and return

function multiMin(...values){
    console.log(Math.min(values[0],values[1],values[2],values[3],values[4],values[5],values[6],values[7],values[8],values[9])) 
}
multiMin(1,2,3,4,5,6,7,8,9,10)


/// math functions in JS
// Math object/Function
//    Math.abs(x) returns the absolute value of x
console.log("Math.abs(-4.7) = " + Math.abs(-4.7));

//    Math.ceil(x) returns the value of x rounded up to its nearest integer
console.log("Math.ceil(4.4) = " + Math.ceil(4.4));

//    Math.floor(x) returns the value of x rounded down to its nearest integer
console.log("Math.floor(4.7) = " + Math.floor(4.7));

//    Math.max(x, y, z, ..., n) returns the number with the highest value
console.log("Math.max(0, 150, 30, 20, -8, -200) = " + Math.max(0, 150, 30, 20, -8, -200));

//    Math.min(x, y, z, ..., n) returns the number with the lowest value
console.log("Math.min(0, 150, 30, 20, -8, -200) = " + Math.min(0, 150, 30, 20, -8, -200));

//    Math.pow(x, y) returns the value of x to the power of y
console.log("Math.pow(8, 2) = " + Math.pow(8, 2));

//    Math.random() returns a random number between 0 (inclusive), and 1 (exclusive)
console.log("Math.random() = " + Math.random());

//    Math.round(x) returns the value of x rounded to its nearest integer
console.log("Math.round(4.6) = " + Math.round(4.6));
console.log("Math.round(4.4) = " + Math.round(4.4));
console.log("Math.round(4.5) = " + Math.round(4.5));

//    Math.sqrt(x) returns the square root of x
console.log("Math.sqrt(64) = " + Math.sqrt(64));

// Date object/Function

// Get current date and time

const now = new Date();
console.log("Current date and time:", now);

// Create a date object for a specific date
const christmas2023 = new Date(2023, 11, 25); // Month is 0-indexed (0 = January, 11 = December)
console.log("Christmas 2023:", christmas2023);

// Get components of a date
console.log("Year:", now.getFullYear());
console.log("Month:", now.getMonth() + 1); // Add 1 because months are 0-indexed
console.log("Day of the month:", now.getDate());
console.log("Day of the week:", now.getDay()); // 0 = Sunday, 1 = Monday, etc.
console.log("Hours:", now.getHours());
console.log("Minutes:", now.getMinutes());
console.log("Seconds:", now.getSeconds());
console.log("Milliseconds:", now.getMilliseconds());
console.log("Time in milliseconds since January 1, 1970:", now.getTime());

// Set components of a date
christmas2023.setFullYear(2024);
christmas2023.setMonth(0); // January
christmas2023.setDate(1);
console.log("Modified Christmas date:", christmas2023);

// Date formatting
console.log("Date string:", now.toDateString());
console.log("Time string:", now.toTimeString());
console.log("ISO string:", now.toISOString());
console.log("Locale string:", now.toLocaleString());
console.log("Locale date string:", now.toLocaleDateString());
console.log("Locale time string:", now.toLocaleTimeString());

// Date calculations
const oneDayInMilliseconds = 24 * 60 * 60 * 1000;
const tomorrow = new Date(now.getTime() + oneDayInMilliseconds);
console.log("Tomorrow:", tomorrow);

// Parsing dates from strings
const dateFromString = new Date("2023-12-25T12:00:00Z");
console.log("Date from string:", dateFromString);



//passsing functions as a parameter
// Function with parameters
function helllo() {
    console.log("Hello");
}

function bye() {
    console.log("Bye");
}

function greet(func) {
    func();
}

greet(helllo);
greet(bye);

 // Anonymous Function
 // the function is defined without a name but in a variable form
 // An anonymous function is a function that is not assigned to a variable.
 
 const myFunction = function() {
    console.log("This is an anonymous function");
  };
  myFunction(); 

//immediate invoke function  

  // Higher Order Functions (Functions that take functions as parameters or return functions)
  // A function that takes another function as a parameter or returns a function is called a higher-order function. HOF
  // A function that returns another function is called a higher-order function.
  // A function that takes another function as a return value is called a higher-order function.
  // A function that is returned by another function is called a higher-order function.

function fofx(r,t){
    console.log(r+r);
   t(r+r+r+r)
}
fofx(2,msp)
 function msp(t){
    console.log("hi");
    console.log(t);
 }


 //set time out
 console.log("Before time out");
 setTimeout(
    function stt() {
        console.log(9999)
    },5000

 )

 console.log("After time out");
