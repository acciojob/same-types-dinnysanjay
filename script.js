function isSameType(value1, value2) {
  if (isNaN(value1) && isNaN(value2)) {
    return true;
  }
  return typeof value1 === typeof value2;
}

let value1 = prompt("Enter the first value.");
let value2 = prompt("Enter the second value.");

// Try to convert the inputs to numbers
value1 = isNaN(Number(value1)) ? value1 : Number(value1);
value2 = isNaN(Number(value2)) ? value2 : Number(value2);

alert(isSameType(value1, value2));