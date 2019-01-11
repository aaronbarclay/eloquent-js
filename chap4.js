// Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.
// let start = Number(prompt("Enter start #"));
// let end = Number(prompt("Enter end #"));
// let range = function(start, end) {
//   let output = [];
//   for (let x = start; x <= end; x++) {
//     output.push(x);
//   }
//   return output;
// }
// console.log(range(1,10));

// Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the example program and see whether it does indeed return 55.

// let sum = function(numArray) {
//
//   var result = 0;
//   for (let x = 0; x < numArray.length; x++) {
//     result += (numArray[x]);
//   }
//   return result;
// }
//
// console.log(sum(range(1,10)));

// let simpleArray = [10,15,20,25,30];
// console.log(simpleArray[0]);


// takes an array as argument and produces a new array that has the same elements in the inverse order.
// The push method adds values to the end of an array, and the pop method does the opposite, removing the last value in the array and returning it.

let testArray = [1,2,3,"here's the middle, baby",'a','b','c'];
let reverseArray = function(inputArray) {
  let outputArray = [];
  let j = 0; //outputArray index
  for (let i = inputArray.length - 1; i >= 0; i--) {
    outputArray[j] = inputArray[i];
    j++
  }
  return outputArray;
}

console.log("The original array is");
console.log(testArray);
// console.log("The reverseArray is");
// console.log(reverseArray(testArray));

// reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument by reversing its elements.

let reverseArrayInPlace = function(inputArray) {
  let j = inputArray.length - 1; // index starting at end
  for (let i = 0; i <= inputArray.length / 2 - 1; i++) {
    let hold = inputArray[i]; // copies beginning value to holding place
    inputArray[i] = inputArray[j]; // copies end value to beginning
    inputArray[j] = hold; // copies held value to end
    j--; // decrement end index
  }
}

console.log("Calling reverseArrayInPlace(testArray)");
reverseArrayInPlace(testArray);
console.log("The new testArray is:");
console.log(testArray);


// for arrays of odd length, the middle value needs no action
// [0, 1, 2, 3, 4]
// length = 5
// must process up to and including (length / 2 - 1)
//
// arrays of even length
// [0, 1, 2, 3, 4, 5]
// length = 6
// index at (length / 2 - 1) = [2]

let aaronsBrain = {
  "cute squirrels": 2,
  mice: 1,
};
console.log(aaronsBrain);
aaronsBrain.mice = 2;
console.log(aaronsBrain);
aaronsBrain.dirtyThoughts = true;
console.log(aaronsBrain);
aaronsBrain.dirtyThoughts = false;
console.log(aaronsBrain);
aaronsBrain.tasks = ['find doctor', 'learn javascript'];
console.log(aaronsBrain);
aaronsBrain.tasks.shift();
delete aaronsBrain.dirtyThoughts;
console.log(Object.keys(aaronsBrain));
console.log(typeof 5.1);

// let clonedBrain = {};
// Object.assign(clonedBrain, aaronsBrain);
let clonedBrain = aaronsBrain;

// aaronsBrain.squirrels = 7;
console.log(aaronsBrain);
console.log(clonedBrain);
console.log(clonedBrain == aaronsBrain);
let a = 100;
console.log(a);
a = 101;
console.log(a);
clonedBrain = {value: 1};
console.log(clonedBrain);

console.log("Let's split this sucker");
let splitted = "Let's split this sucker".split(" ");
console.log(splitted);
let joined = splitted.join(".");
console.log(joined);
let aaronsBrainJson = JSON.stringify(aaronsBrain);
console.log(aaronsBrainJson);
let aaronsRestoredBrain = JSON.parse(aaronsBrainJson);
console.log(aaronsRestoredBrain);


let arrayToList = function(input) {
  let outputList = null;
  for (i = input.length - 1; i >= 0; i--) {
    outputList = {value:input[i], rest: outputList};
  }
  return outputList;
}
console.log(arrayToList([1,2,3]));


let list = arrayToList(['a','b','c','d']);

let listToArray = function(list) {
  let outputArray = [];
  for (let node = list; node; node = node.rest) {
    outputArray.push(node.value);
  }
  return outputArray;
}
console.log("list = ");
console.log(list);
console.log("listToArray(list) =");
console.log(listToArray(list));


console.log(listToArray(list));

let prepend = function(element, list) {
  let output = {
    value: element,
    rest: list,
  };
  return output;
}

console.log(prepend(7,list));

let nth = function(list,index) {
  return listToArray(list)[index];
}
console.log(nth(list,1));

// Deep comparison
//
// The == operator compares objects by identity. But sometimes you’d prefer to compare the values of their actual properties.
//
// Write a function deepEqual that takes two values and returns true only if they are the same value or are objects with the same properties, where the values of the properties are equal when compared with a recursive call to deepEqual.
//
// To find out whether values should be compared directly (use the === operator for that) or have their properties compared, you can use the typeof operator. If it produces "object" for both values, you should do a deep comparison. But you have to take one silly exception into account: because of a historical accident, typeof null also produces "object".
//
// The Object.keys function will be useful when you need to go over the properties of objects to compare them.
let deepEqual = function(a,b) {
  console.log('Line 174 Checking ' + a + ' = ' + b);
  if (a === b) return true;

  console.log('Line 177 checking for nulls / not objects');
  if (a == null || typeof a != 'object' ||
      b == null || typeof b != 'object') return false;

  let keysA = Object.keys(a), keysB = Object.keys(b);
  console.log('Line 180, keysA = ' + keysA);
  console.log('Line 180, keysB = ' + keysB);
  console.log('Checking keysA.length = keysB.length');
  if (keysA.length != keysB.length) return false;

  for (let key of keysA) {
    if (!keysB.includes(key) || !deepEqual(a[key],b[key])) return false;
  }
  return true;
}
let yard1 = {dogs:1, cats:2, sheep:2};
let yard2 = {dogs:1, cats:2, sheep:1};

console.log(deepEqual(yard1,yard2));
