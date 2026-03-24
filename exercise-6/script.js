const book={
    title:'Harry Potter',
    author:'J.K. Rowling',
    year:1997
    
}
console.log(book);
book.pages=300;
console.log(book);

// 2. Write a function that takes a car object and prints brand and year.
function Car(car){
    console.log(`brand: ${car.brand}`);
    console.log(`year : ${car.year}`);
}

const myCar={
    brand:'Toyota',
    year:2025
};
Car(myCar);

// 3. Create a nested object school with teachers and students. Access one teacher’s subject.

const school={
    teachers:[
        {name:'Ahmad', subject:'Math'},
        {name:'Nafisa' , subject:'English'},  
    ],
    students:[
        {name:'Ali' , grade:10},
        {name:'Maryam' , grade:11},
        {name:'AliArsam', grade:12}
    ]
}

console.log(`teacher and subject: ${school.teachers[0].name ,school.teachers[0].subject}`);
console.log(`students and grade: ${school.students[0].name ,school.students[0].grade}`);
