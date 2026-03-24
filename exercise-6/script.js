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


// 4. Make a shallow copy and prove how it differs from a deep copy.

// const original={
//     name:'book',
//     details:{
//         pages:200,
//         author:'Ali'
//     }
// };
// const shallowCopy={...original};
// shallowCopy.details.pages=300;
// console.log('Original :', original.details.pages);
// console.log('Shallow copy:', shallowCopy.details.pages );

// const deepCopy=JSON.parse(JSON.stringify(original));
// deepCopy.deepCopy.pages=400;
// console.log('Original :' , original.details.pages);
// console.log('Deep Copy:' , deepCopy.deepCopy.pages);


const person={
    name:'Ali',
    info:{
        age:20,
        city:'Kabul'
    }
};
const shallow={...person};
shallow.info.age=25;
 console.log('Original age:' ,person.info.age);
 console.log('Shallow age:' , shallow.info.age);
 const deep=JSON.parse(JSON.stringify(person));
 deep.info.age=30;
 console.log('Original age:' ,person.info.age);
 console.log('Deep age:' , deep.info.age);

//  const obj={name:'Zahra' , info:{age:20}};
//  const shallow={...obj};
//  shallow.info.age=25;
//  console.log(obj.info.age);

// 5. Use destructuring to extract values from an object.


const books={
    title:'JavaScript Basics',
    author:'Nafisa Ibrahimi',
    year:2026,
    pages:250
};
const {title ,author ,year}=books;
console.log(title);
console.log(author);
console.log(year);

const {title:bookTitle, pages=300}=book;
console.log(bookTitle);
console.log(pages);


// 6. Freeze an object and test modifications

const cars={
    brand:'Toyota',
    year:2025
};
Object.freeze(cars);

cars.year=2025;
cars.color='Red';
delete cars.brand;
console.log(cars);


const persons={
    name:'Nafisa',
    age:20
};
Object.freeze(persons);
persons.age=25;
persons.city='Kabul';
delete persons.name;
console.log(persons);
