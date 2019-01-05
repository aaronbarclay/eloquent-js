// Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.
// let start = Number(prompt("Enter start #"));
// let end = Number(prompt("Enter end #"));
let range = function(start, end) {
  let output = [];
  for (let x = start; x <= end; x++) {
    output.push(x);
  }
  return output;
}
console.log(range(1,10));

// Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the example program and see whether it does indeed return 55.

let sum = function(...numbers) {
  let result = 0;
  for (let x = 0; x < numbers.length; x++) {
    result += numbers[x];
  }
  return result;
}
console.log(sum(1,2,3,4,5,6,7,8,9,10)); // Returns 55 (number)
console.log(sum(range(1,10))); // returns array of strings
