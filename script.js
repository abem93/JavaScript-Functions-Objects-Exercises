/* Exercise 1: Basic Function Creation
    Create a function named greetUser that takes a name as a parameter and returns a  greeting message.
    The function should be able to return appropriate greetings for various names provided.
    Commit: Once completed, commit this exercise's solution to your GitHub repository with the message: "Completed Exercise 1: Basic Function Creation".
 */

function greetUser(name){
  return(`Hello ${name}, how are you?`);
}
console.log(greetUser('abraham')); //Hello abraham, how are you?

/*
Exercise 2: Arrow Functions
    Convert a given traditional function into an arrow function.
    Test the newly created arrow function with various parameters to ensure it works correctly.
    Commit: After finishing this exercise, commit the solution with the message: "Completed Exercise 2: Arrow Functions".
*/

let userGreeting = name => (`Hello ${name}, how are you?`);

console.log(userGreeting('abe'));  // Hello abe, how are you?

/* Exercise 3: Calculations Using Arrow Functions
    Create an arrow function that calculates the area of a rectangle. It should take the length and breadth as parameters.
    Commit: Once you've achieved this, commit the solution with the message: "Completed Exercise 3: Calculations Using Arrow Functions".*/

let calculateTriangleArea = (length, height) => ((length * height)/2);

console.log(calculateTriangleArea(5,4)); //10

/*Exercise 4: Object Creation and Manipulation
    Construct an object named student with properties like name, age, and grade.
    Add a method to the object that prints the student's details in the format: "NAME is AGE years old and is in GRADE grade."
    Commit: After creating and testing this object, commit the solution with the message: "Completed Exercise 4: Object Creation and Manipulation".*/

let student = {
  name: 'timmy',
  age: '7',
  grade: 'second',
  details: function(){
    console.log(`${this.name} is ${this.age} years old and is in ${this.grade} grade.`)
  }
};

student.details()//timmy is 7 years old and is in second grade.


/* Exercise 5: Advanced Object Methods
    Implement an object named library with properties for books (as an array) and methods to addBook(bookName) and removeBook(bookName).
    Ensure that the methods work correctly to add and remove books from the books array.
    Commit: Once you've successfully implemented this object and its methods, commit the solution with the message: "Completed Exercise 5: Advanced Object Methods".*/

let library = {
  books: ['the barn', 'tinkers'],
  addBook: function(item){
    this.books.push(item)
  },
  removeBook: function(item){
    let index = this.books.indexOf(item.toLowerCase());
    if(index !== -1){
    this.books.splice(index, 1)
    };
  }
}

// console.log(library)
console.log(library.books)
library.addBook('trust');
console.log(library.books);
library.removeBook('trust');
console.log(library.books);