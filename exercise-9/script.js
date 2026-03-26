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

// Exercise 4:

// function countChar(str, char){
//     let count=0;
//     for(let c of str){
//         return count;
//     }
//     console.log(countChar('banana' , 'a'));
// }

function countChar(str , char){
    const normalizedStr=str.toLowerCase();
    const normalizedChar=char.toLowerCase();
    const count=normalizedStr.split('').reduce((acc ,current) =>{
return current===normalizedChar ? acc + 1 :acc;
    },0);
    return count;
}
 console.log(countChar('Hello World', 'l'));
 console.log(countChar('Banana', 'a'));
 console.log(countChar('javaScript' ,'J'));

 



