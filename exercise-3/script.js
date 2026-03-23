// 1. Declare variables of each primitive type and log their typeof
// string
const str='Hello';
console.log('str :', typeof str);


// Number
const num=20;
console.log('num :',typeof num);

// Boolean
const bool=true;
console.log('bool :', typeof bool);

// Null
const nothing=null;
console.log('nothing :' ,typeof nothing);

// Undefined
let notDefined;
console.log('notDefined :',typeof notDefined );


// Symbol
const sym=Symbol('id');
console.log('sym :' , typeof sym);

// BigInt
const big= 123456789012345678901234567890n;
console.log('big:' ,typeof big);

// 2. Create an object car with properties (brand, model, year). Access them.

const car={
    brand:'carry',
    model:'corola',
    year:2024
};
console.log(car);
console.log(car.brand);
console.log(car.model);

// 3. Create an array of 5 numbers. Add and remove elements using methods.
const arr=[1,2,3,4,5];
console.log(arr);
arr.pop();
console.log(arr);
arr.shift();
console.log(arr);
arr.unshift('6');
console.log(arr);
 arr.push(7);
 console.log(arr);

 

