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