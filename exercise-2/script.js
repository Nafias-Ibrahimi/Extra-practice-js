let age = 20;
age = 24;
console.log(age);

const person = { name: "Ali", age: 20 };
person.age = 30;
console.log(person.age);

// hoisting
console.log(x);
var x = 20;

var y;
console.log(y);
y = 4;

var globalVar = "I am  Nafisa";
function show() {
  console.log(globalVar);
}
show();
console.log(globalVar);

function test() {
  var functionVar = "Inside function";
  console.log(functionVar);
}
if (true) {
  let blockVar = "inside block";
  const anotherVar = "Also block";
  console.log(blockVar);
}

if (true) {
  var testVar = "Using var";
}
console.log(testVar);

let outer = "I am outer";
function inner() {
  console.log(outer);
}
inner();

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}

const numbers = [1, 2, 3];
numbers.push(4);
console.log(numbers);

// 1. Declare a var, let, and const. Try redeclaring and reassigning them. Write down
// results.
var name = "ali";
console.log(name);

let n = 4;
n = 20;
console.log(n);

const PI = 3.14;
console.log(PI);

// 2. Write a function with a var inside. Try to access it outside. What happens?

// function Message(){
//     var message='Hello world';
//     console.log(message);

// }
// Message();
// console.log(message);
// ReferenceError: message is not defined

// 3. Demonstrate hoisting with var and compare with let.

// console.log(name);
// var name='Farzana';
// console.log(name);

// console.log(b);
// var b=20;
// console.log(b); // undefined

// console.log(s);
// let s=20;
// console.log(s);  // ReferenceError

// 4. Use a loop with var and let inside setTimeout. Compare results.

for (var i = 0; i <= 5; i++) {
  setTimeout(() => {
    console.log("var i:", i);
  }, 1000);
}

for (let j = 1; j <= 4; j++) {
  setTimeout(() => {
    console.log("let j:", j);
  }, 1000);
}

// 5. Create a const object and try changing properties vs. reassigning.
 const persons={
    name:'Zahra',
    age:20
 }
 persons.age=30;
 persons.city='Kabul';
 console.log(persons);

// 6. Write code that shows the scope chain in action.

var global='global scope';
function outerFunction(){
    var outerVar='she is outer';
    function innerFunction(){
        var innerVar='she is inner';
        console.log(global);
        console.log(outerVar);
        console.log(innerVar);
    }
    innerFunction();
}
outerFunction();

var k=10;
function outers(){
    var h=20;
    function inners(){
        var d=30;
        console.log(`k: k`);
        console.log('h : h');
        console.log(`d : d`);
    }
    inners();
}
outers();





