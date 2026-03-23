const name='Nafisa';
console.log('name:' ,name);


// 2. Add comments to explain each line of your code.
//   console.log('Hello World');

// This is a single-line comment
// → for single-line comments

// Multiple lines comment in js
// /* ... */ → for multi-line comments

const greet= ()=>{
    console.log('Hello World');
}

// 3. Write a simple expression that calculates the area of a rectangle (width × height) and
// print the result

let width=5;
let height=10;
let area=width * height;
console.log(`Area of the rectangle is: ${area}`);

// 4. Use both inline and external JavaScript in an HTML file

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Exercise-one</title>
// </head>
// <body>
//     <script src="/script.js"></script>
//      <script>

//     const num=[1,2,3,4,5,5];
//         console.log(num[1]);
//         console.log(num);
//      </script>


// </body>
// </html>


// 5. Experiment with console warnings and errors

console.error('error message');
console.warn('wraning message');


// JavaScript Data Types

// chapter two

// 1. Declare variables of each primitive type and log their typeof.

let nums=20;
console.log(typeof nums);
// Number type

let person='Ali';
console.log( typeof 'pesron:' , person);
// String type
let student=true;
console.log(typeof student);
// Boolean type

let x;
console.log(typeof x);

// Undefined type

let a=null;
console.log(typeof a);
// object type


// BigInt type
let BigInt=12345678901234567890n;
console.log(typeof BigInt);


// 2. Create an object car with properties (brand, model, year). Access them.
