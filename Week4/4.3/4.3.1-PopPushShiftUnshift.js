const nums = [6, 5, 2, 3, 4, 1, 0];

let popReturnOne = nums.pop();
console.log(popReturnOne);

let popReturnTwo = nums.pop();
console.log(popReturnTwo);

let shiftReturnOne = nums.shift();
console.log(shiftReturnOne);

let shiftReturnTwo = nums.shift();
console.log(shiftReturnTwo);

nums.push(shiftReturnTwo);
nums.push(shiftReturnOne);
nums.unshift(popReturnTwo);
nums.unshift(popReturnOne);

console.log(nums);

// remove each of the last two items with pop(), saving each item to a variable

// remove each of the first two items with shift(), saving each item to a variable

// use push and unshift to add the variables back to the array in numerical order, 0-6
