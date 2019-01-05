// console.log("Chapter 3 exercises");
// let minimum = function(x,y) {
//   return Math.min(x,y);
// }
//
// let x = prompt("Enter first number");
// let y = prompt("Enter second number");
// console.log("The lesser number is " + (minimum(x,y)));

// let isEven = function(n) {
//   if (n == 0) {
//     return true;
//   } else if (n == 1) {
//     return false;
//   } else if (n < 0) {
//     n *= -1
//     return isEven(n);
//   } else {
//     return isEven(n-2);
//   }
// }
//
// let n = prompt("Enter a number");
// console.log("This number is even: " + isEven(n));

console.log("Bean counting exercise");

let countBs = function(input) {
  let numOfBs = 0;
  for (let x = 0; x < input.length; x++) {
    if (input[x] == "B") {
      numOfBs += 1;
    }
  }
  return numOfBs;
}
let input = prompt("Enter string");
console.log(countBs(input));
