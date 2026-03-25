function printName(name) {
    console.log('Hello: ' + name + ':');
}

printName('Nafisa');
printName('Ali');
printName('Ahmad');
printName('Hello, <NAME>! Welcome to JavaScript.')

// Exercise 2:

const text='I love JS';
const trimmed=text.trim();
console.log(trimmed);

const formatted=trimmed.charAt(0).toUpperCase() + trimmed.slice(1).toLowerCase();
console.log(formatted);

// Exercise 3:

const fruite='Apple , Banana ,Cherry';
const fruitArray=fruite.split(',');
fruitArray.forEach(fruite =>{
    console.log(fruite.toUpperCase());
    console.log(fruite.toLowerCase());
});


