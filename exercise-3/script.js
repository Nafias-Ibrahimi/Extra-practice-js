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

// 4. Write a function that takes a name and returns "Hello, name".

function hello(name){
   return 'Hello ,' + name;
}
console.log(hello('Ahmad'));
console.log(hello('Ali'));


//  5. Use typeof and instanceof to check types of different variables.
typeof [1,2,3] //object
typeof {a:1} // object
typeof function(){} // function


[1,2,3] instanceof Array //true
new Date() instanceof Date //ture

// 6. Demonstrate implicit type conversion in "5" + 5 and "5" - 2.

console.log('5' +5);
console.log('5' -2);


// 7. Convert "123" to number, 123 to string, and 0 to boolean.

const strNum='123';
const nums=Number(strNum);
console.log(nums, typeof nums);

const realNum=123;
const strs=String(realNum);
console.log(strs ,typeof strs);


const zero=0;
const bools=Boolean(zero);
console.log(bools ,typeof bool);

// 8. Write code showing difference between primitive copy and reference copy.

// Primitive copy
let a=10;
let b=a;
b=20
console.log('b:' ,b);
console.log('a:' ,a);

// Reference copy