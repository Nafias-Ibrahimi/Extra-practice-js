let age=20;
age=24;
console.log(age);

const person={name: 'Ali', age:20};
person.age=30;
console.log(person.age);

// hoisting 
console.log(x);
var x=20;

var y;
console.log(y);
y=4;

var globalVar='I am  Nafisa';
function show(){
    console.log(globalVar);
}
show();
console.log(globalVar);

function test(){
    var functionVar='Inside function';
    console.log(functionVar);
}
if(true){
    let blockVar='inside block';
    const anotherVar='Also block';
    console.log(blockVar);
}

if(true){
    var testVar='Using var'
}
console.log(testVar);

