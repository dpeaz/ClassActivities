// ? what does the function below return?
// function myNumberFunction() {
//   let num = 2 ** 2;
//   num = num + 3;
//   num = num % 4;
//   num = num * 14;
//   console.log(num);
// }
//returns undefined

// change the function above to return a value
function myNumberFunction() {
  return (num = 2 ** 2);
  num = num + 3;
  num = num % 4;
  num = num * 14;
  console.log(num);
}
myNumberFunction();
console.log(num);

// Short Circuiting
// ! the console.log will not print
function shortCircuitFunction() {
  return "Zap! - Short Circuited!";
  console.log(
    "This will never print because it is after the return statement."
  );
}

// ? will the following function short circuit?
// no

let height = 47;

function checkCircusRides() {
  if (height < 48) {
    return "Take a ride on the carousel!";
  }
  if (height < 60) {
    return "Try the bumper cars!";
  }
  return "Enjoy the roller coaster!";
}
checkCircusRides();

// change the function above to use short circuiting
