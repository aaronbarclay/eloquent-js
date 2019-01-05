// let theNumber = Number(prompt("Pick a number"));
// console.log("Your number is the square root of " + theNumber * theNumber);

// let five = 5, seven = 7;
// console.log(five * seven);
//
// const constant = 11;
// console.log(constant);
//
// let theNumber = Number(prompt("Pick a number"));
// if (!Number.isNaN(theNumber)) {
//   console.log("Your number is the square root of " + theNumber * theNumber);
// }


// Exercises

let hashtags = "#######";
for (let x = 1; x <= 7; x++) {
  console.log(hashtags.substring(0,x));
}

console.log("Begin FizzBuzz");
for (let x = 1; x <= 100; x++) {
  if (x % 3 == 0 && x % 5 != 0) {
    console.log("Fizz");
  } else if (x % 3 != 0 && x % 5 == 0) {
    console.log("Buzz");
  } else if (x % 3 == 0 && x % 5 == 0) {
    console.log("FizzBuzz");
  } else {
    console.log(x);
  }
}

console.log();
console.log("Begin Chess Board");
let board = "";
let size = 10;

for (let x = 0; x < size; x++) { //row loop
  for (let y = 0; y < size; y++) { // column loop
    if ((x + y) %2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}
console.log(board);
