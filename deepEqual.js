// This was the last problem on https://eloquentjavascript.net/04_data.html


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
