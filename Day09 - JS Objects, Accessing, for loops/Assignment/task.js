// ============================================================
// Part 1: Variables and Data Types
// ============================================================


// Question 1
// Create two variables named firstName and lastName
// and print your full name.

let firstName = "Dhiman";
let lastName = "Saikia";

console.log(firstName + " " + lastName);   // Dhiman Saikia



// ------------------------------------------------------------


// Question 2
// Create a variable age and store your age in it.
// Print the value and its data type.

let age = 20;

console.log(age);              // 20
console.log(typeof age);       // number



// ------------------------------------------------------------


// Question 3
// Create variables of type:
// - string
// - number
// - boolean
// - undefined
// - null
// Print their data types.

let stringValue = "JavaScript";
let numberValue = 100;
let booleanValue = true;
let undefinedValue;
let nullValue = null;

console.log(typeof stringValue);      // string
console.log(typeof numberValue);      // number
console.log(typeof booleanValue);     // boolean
console.log(typeof undefinedValue);   // undefined
console.log(typeof nullValue);        // object



// ------------------------------------------------------------


// Question 4
// Create two numbers and print:
// - Sum
// - Difference
// - Product
// - Division

let firstNumber = 20;
let secondNumber = 5;

console.log(firstNumber + secondNumber);   // 25
console.log(firstNumber - secondNumber);   // 15
console.log(firstNumber * secondNumber);   // 100
console.log(firstNumber / secondNumber);   // 4



// ------------------------------------------------------------


// Question 5
// Create a variable:
// price = 99.99
// Print its data type.

let price = 99.99;

console.log(typeof price);   // number



// ------------------------------------------------------------


// Question 6
// Predict the output:
//
// console.log(typeof null);
// console.log(typeof undefined);

console.log(typeof null);         // object
console.log(typeof undefined);    // undefined

// ============================================================
// Part 2: Comparison Operators
// ============================================================


// Question 1
// Create two variables and check:
// ==
// ===
// !=
// !==
// >
// <
// >=
// <=

let compareNumber = 10;
let compareString = "10";

console.log(compareNumber == compareString);    // true
console.log(compareNumber === compareString);   // false
console.log(compareNumber != compareString);    // false
console.log(compareNumber !== compareString);   // true
console.log(compareNumber > compareString);     // false
console.log(compareNumber < compareString);     // false
console.log(compareNumber >= compareString);    // true
console.log(compareNumber <= compareString);    // true



// ------------------------------------------------------------


// Question 2
// Predict the output:
//
// console.log(10 == '10');
// console.log(10 === '10');

console.log(10 == "10");     // true
console.log(10 === "10");    // false



// ------------------------------------------------------------


// Question 3
// Predict the output:
//
// console.log(null == undefined);
// console.log(null === undefined);

console.log(null == undefined);     // true
console.log(null === undefined);    // false



// ------------------------------------------------------------


// Question 4
// Write a program to compare the ages of two people
// and print who is older.

let personOneAge = 22;
let personTwoAge = 18;

if (personOneAge > personTwoAge) {
    console.log("Person 1 is older");      // Person 1 is older
} else if (personTwoAge > personOneAge) {
    console.log("Person 2 is older");
} else {
    console.log("Both are of the same age");
}




// ============================================================
// Part 3: Conditional Statements
// ============================================================


// Question 1
// Write a program to check whether a number
// is positive or negative.

let checkNumber = -15;

if (checkNumber >= 0) {
    console.log("Positive");
} else {
    console.log("Negative");    // Negative
}



// ------------------------------------------------------------


// Question 2
// Write a program to check whether a student
// has passed or failed.
// Passing marks are 40.

let studentMarks = 55;

if (studentMarks >= 40) {
    console.log("Pass");        // Pass
} else {
    console.log("Fail");
}



// ------------------------------------------------------------


// Question 3
// Write a program to find the larger number
// between two numbers.

let firstValue = 30;
let secondValue = 45;

if (firstValue > secondValue) {
    console.log(firstValue);
} else {
    console.log(secondValue);   // 45
}



// ------------------------------------------------------------


// Question 4
// Write a program to find the largest
// among three numbers.

let valueOne = 10;
let valueTwo = 25;
let valueThree = 15;

if (valueOne >= valueTwo && valueOne >= valueThree) {
    console.log(valueOne);
} else if (valueTwo >= valueOne && valueTwo >= valueThree) {
    console.log(valueTwo);      // 25
} else {
    console.log(valueThree);
}



// ------------------------------------------------------------


// Question 5
// Write a program to check whether a number
// is even or odd.

let evenOddNumber = 12;

if (evenOddNumber % 2 === 0) {
    console.log("Even");        // Even
} else {
    console.log("Odd");
}



// ------------------------------------------------------------


// Question 6
// Write a program that prints:
// Excellent (marks above 90)
// Good (75–90)
// Average (50–74)
// Fail (below 50)

let finalMarks = 82;

if (finalMarks > 90) {
    console.log("Excellent");
} else if (finalMarks >= 75) {
    console.log("Good");        // Good
} else if (finalMarks >= 50) {
    console.log("Average");
} else {
    console.log("Fail");
}




// ============================================================
// Part 4: Arrays
// ============================================================


// Question 1
// Create an array containing:
// - string
// - number
// - boolean
// - null
// - undefined

let mixedArray = ["JavaScript", 10, true, null, undefined];



// ------------------------------------------------------------


// Question 2
// Print:
// - First element
// - Last element
// - Length of the array

console.log(mixedArray[0]);                           // JavaScript
console.log(mixedArray[mixedArray.length - 1]);       // undefined
console.log(mixedArray.length);                       // 5



// ------------------------------------------------------------


// Question 3
// Add two elements using push().

mixedArray.push("HTML");
mixedArray.push("CSS");

console.log(mixedArray);
// ["JavaScript", 10, true, null, undefined, "HTML", "CSS"]



// ------------------------------------------------------------


// Question 4
// Remove the last element using pop().

mixedArray.pop();

console.log(mixedArray);
// ["JavaScript", 10, true, null, undefined, "HTML"]



// ------------------------------------------------------------


// Question 5
// Replace the third element with your city name.

mixedArray[2] = "Guwahati";

console.log(mixedArray);
// ["JavaScript", 10, "Guwahati", null, undefined, "HTML"]



// ------------------------------------------------------------


// Question 6
// Create the array:
//
// [10, 20, 30, 40, 50]
//
// Perform the following operations:
// - Print the length
// - Add 60
// - Remove the last element
// - Change 30 to 100
// - Print the final array

let numberArray = [10, 20, 30, 40, 50];

console.log(numberArray.length);      // 5

numberArray.push(60);
numberArray.pop();
numberArray[2] = 100;

console.log(numberArray);             // [10, 20, 100, 40, 50]



// ------------------------------------------------------------


// Question 7
// Create the nested array:
//
// let data = [1, 2, [3, 4, 5], 6]
//
// Print:
// - 3
// - 5
// - Length of the nested array

let nestedData = [1, 2, [3, 4, 5], 6];

console.log(nestedData[2][0]);        // 3
console.log(nestedData[2][2]);        // 5
console.log(nestedData[2].length);    // 3



// ============================================================
// Part 5: Output Prediction
// ============================================================


// Question 1
// Predict the output:
//
// let x = 10;
// let y = '10';
//
// console.log(x == y);
// console.log(x === y);

let predictionX = 10;
let predictionY = "10";

console.log(predictionX == predictionY);     // true
console.log(predictionX === predictionY);    // false



// ------------------------------------------------------------


// Question 2: Predict the output:
//
// let arr = [1, 2, 3];
//
// arr.push(4);
// arr.pop();
//
// console.log(arr);

let predictionArray1 = [1, 2, 3];

predictionArray1.push(4);
predictionArray1.pop();

console.log(predictionArray1);               // [1, 2, 3]



// ------------------------------------------------------------


// Question 3: Predict the output:
// let arr = ['A', 'B', 'C'];
// arr[1] = 'Z';
// console.log(arr);

let predictionArray2 = ["A", "B", "C"];

predictionArray2[1] = "Z";

console.log(predictionArray2);               // ["A", "Z", "C"]



// ============================================================
// Challenge Questions
// ============================================================


// Question 1: Create an array of 10 elements and replace every even index with "JavaScript".

let challengeArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < challengeArray.length; i++) {
    if (i % 2 === 0) {
        challengeArray[i] = "JavaScript";
    }
}

console.log(challengeArray);              // ["JavaScript", 2, "JavaScript", 4, "JavaScript", 6, "JavaScript", 8, "JavaScript", 10]



// ------------------------------------------------------------


// Question 2: Create three variables: name, age, city. Print a complete sentence using them.

let studentName = "Dhiman";
let studentAge = 20;
let studentCity = "Guwahati";

console.log(studentName + " is " + studentAge + " years old and lives in " + studentCity + "."); // Dhiman is 20 years old and lives in Guwahati.


// ------------------------------------------------------------


// Question 3: Create an array with mixed data types and count the number of elements without using length.

let challengeMixedArray = ["JavaScript", 10, true, null, undefined, 25];

let elementCount = 0;

for (let element of challengeMixedArray) {
    elementCount++;
}

console.log(elementCount);                   // 6