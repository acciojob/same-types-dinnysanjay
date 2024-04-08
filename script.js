function isSameType(value1, value2) {
  //your js code here
	isSameType(1, 3); // true
isSameType("hey", "hello"); // true
isSameType(NaN, NaN); // true
isSameType("3", 3); // false
}

// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));
