// create a variable called "name" that references a string
const name = "Derek";
// create a variable called "favoriteSong" that references a string
let favoriteSong = "Fight For Your Right";
// create a variable called "wage" that references a number
let wage = 69;
// create a variable called "age" that references a number
let age = 41;
// create a variable called "onlyChild" that references a boolean
const onlyChild = true;
// create a variable called "satisfied" that references a boolean
let satisfied = false;
// create a variable called "favoriteThing" that references ANY primitive value
// print the data type of "favoriteThing"
let favoriteThing = "Bitcoin";
console.log(typeof favoriteThing);
// You heard a new song that became your favorite.
// Reassign the variable "favoriteSong"
favoriteSong = "Nuthin but a G Thang";
// You no longer like the type of data stored in "favoriteThing"
// Reassign "favoriteThing" to a different primitive data type and print its type
favoriteThing = 37000;
console.log(typeof favoriteThing);
// Happy Birthday!
// Reassign "age" to a new value
age = 42;
// You got a big raise at work.
// Reassign "wage" to a new value
wage = 75;
// Your raise changed your job satisfaction.
// Assign "satisfied" to true
satisfied = true;
// use "console.log()" and "+" to print a sentence that includes two of the above variables
console.log(
  "Hey, I'm " +
    name +
    ". I may be " +
    age +
    " years old, but I still like to get down to" +
    favoriteSong +
    "!"
);
