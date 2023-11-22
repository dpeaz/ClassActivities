// Named Parameters
// write a function that takes two named parameters:
// print each named parameter,
// then return the parameters added together

function myFunction(num1, num2) {
  console.log(num1);
  console.log(num2);
  return num1 + num2
}

// invoke the function and pass in two numbers

myFunction(3, 10);

// invoke the function and pass in more than two numbers

myFunction(6, 14, 77);

// invoke the function and pass in only one number

myFunction(69);

// change the function to set default values for the parameters

function myFunction(num1 = 17, num2 = 22) {
  console.log(num1);
  console.log(num2);
  return num1 + num2;
}

// again, invoke the function and pass in only one number

myFunction(13, 19);

// Rest Operator
// add a rest operator to the function's parameters
// add a line to the function's body to print the value of the rest operator

function myFunction(num1 = 17, num2 = 22, ...rest) {
  console.log(num1);
  console.log(num2);
  console.log(rest);
  return num1 + num2;
}

// again, invoke the function and pass in more than two numbers

myFunction(14, 27, 33, 37);
