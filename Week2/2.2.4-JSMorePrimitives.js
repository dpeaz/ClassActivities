// create five variables and assign them values
// each variable should reference a different primitive data type
// REMEMBER: you should never DELIBERATELY assign "undefined" to a variable
const name = "Derek";
const age = 41;
const drinks = false;
let smokes = null;
const hobbies;
// print the type of each variable in this order:
// string, number, boolean, undefined, null
console.log(name, age, drinks, hobbies, smokes);
// create a variable that references a template literal
// inside the template literal, use two of the above variables
let about = `${name} is ${age} years old.`;
// reassign the value of the variable that references "null"
smokes = false;
// print the value and its type
console.log(typeof smokes);
// print a variable that causes a ReferenceError
console.log(typeof hobbies);
// alter the previous line to no longer cause a ReferenceError
const hobbies = "Crypto, Poker, Fantasy Sports";
console.log(hobbies);
