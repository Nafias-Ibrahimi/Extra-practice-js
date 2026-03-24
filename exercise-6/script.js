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

