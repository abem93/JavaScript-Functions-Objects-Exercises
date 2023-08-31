/* Exercise 1: Basic Function Creation
    Create a function named greetUser that takes a name as a parameter and returns a  greeting message.
    The function should be able to return appropriate greetings for various names provided.
    Commit: Once completed, commit this exercise's solution to your GitHub repository with the message: "Completed Exercise 1: Basic Function Creation".
 */

function greetUser(name){
  return(`Hello ${name}, how are you?`);
}
console.log(greetUser('abraham'));

let userGreeting = name => (`Hello ${name}, how are you?`);

console.log(userGreeting('abe'));