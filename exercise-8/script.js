// question-one

const myFavoriteFood = ["Ashak", "kabuli pulao", "kebab", "Mantu", "Firni"];

myFavoriteFood.push("meat");
console.log(myFavoriteFood);

myFavoriteFood.unshift("bolani");
console.log(myFavoriteFood);
myFavoriteFood.pop();
console.log(myFavoriteFood);

// question-two
let nums = [1, 2, 3, 4, 5];

let squared = nums.map((n) => n * n);
console.log("Squared:", squared);

let greaterThanTen = squared.filter((n) => n > 10);
console.log("filtered >10:", greaterThanTen);

let sum = greaterThanTen.reduce((acc, n) => acc + n, 0);
console.log("Sum:", sum);

// question-3

const name = ["Ali", "Zahra", "Nafisa", "Reza", "shafiqa"];
name.sort();
console.log(name);
name.reverse();
console.log(name);

// question-4

const students = [
  { name: "Ali", score: 90 },
  { name: "Nafisa", score: 95 },
  { name: "Omar", score: 85 },
  { name: "Maryam", score: 75 },

];

const topStudents=students.find(students => students >80);
console.log('first student with score>80:' .topStudents);

const AllAbove50=students.every(students => students.score >50);
console.log('Do all students have scores >50?' ,AllAbove50);

// question-5

const number=[1,3,5,7,8,9];
const num=[20,30 ,40];

const combined=[...number,...num];
console.log('combined:' ,combined);

const [first , second]=combined;
console.log('First :', first);
console.log('second :', second);

// question-6

function getAverage(arr) {
    if (arr.length === 0) return 0;

    const sums = arr.reduce((acc, num) => acc + num, 0);
    return sums / arr.length;
}

console.log(getAverage([2, 3, 4, 5, 6, 6, 7])); // 4.71...
console.log(getAverage([10, 20, 30]));          // 20
console.log(getAverage([]));                    // 0



