
/**************************************20th JULY**********************************************
 * JAVASCRIPT ARRAY METHODS - CLASS NOTES
 * Topics:
 * 1. forEach()
 * 2. map()
 * 3. filter()
 * 4. reduce()
 * 5. Accumulator
 *
 * These methods are Higher Order Functions because they accept another function
 * (callback function) as an argument.
 *****************************************************************************************/


// =========================================================================================
// 1. forEach()
// =========================================================================================

/*
Definition:
-----------
forEach() is used to iterate through every element of an array.

Important Points:
-----------------
✔ Executes the callback function once for every element.
✔ Mainly used when you want to perform some operation.
✔ Does NOT return a new array.
✔ Returns undefined.
✔ Original array remains unchanged unless you modify it manually.
✔ Cannot break or continue like a normal loop.
✔ Mostly used for printing, calculations, DOM manipulation, etc.

Syntax:
array.forEach((element, index, array) => {
    // code
});

Parameters:
element -> Current element
index   -> Current index
array   -> Original array
*/


let numbers = [10, 20, 30, 40];

numbers.forEach(function(num) {
    console.log(num);
});


// Using Arrow Function

let marks = [80, 75, 90];

marks.forEach((mark) => {
    console.log(mark);
});


// Accessing Index

let fruits = ["Apple", "Banana", "Mango"];

fruits.forEach((fruit, index) => {
    console.log(index, fruit);
});


// Accessing Entire Array

let colors = ["Red", "Green", "Blue"];

colors.forEach((color, index, array) => {
    console.log(color, index, array);
});


// Example: Sum using forEach()

let values = [1, 2, 3, 4, 5];

let sum = 0;

values.forEach((value) => {
    sum += value;
});

console.log(sum);


// Example: Multiply every element

let nums = [2, 4, 6];

nums.forEach((value) => {
    console.log(value * 10);
});



/*
When to use forEach()?

✔ Printing values
✔ Logging data
✔ Updating database
✔ DOM operations
✔ Performing side effects

Not preferred when:
✘ You need a new array
✘ You need transformed values
*/


// =========================================================================================
// 2. map()
// =========================================================================================

/*
Definition:
-----------
map() creates a NEW array after performing an operation on every element.

Important Points:
-----------------
✔ Returns a new array.
✔ Original array is unchanged.
✔ Length of returned array is always same as original.
✔ Used when every element needs transformation.

Syntax:
array.map((element,index,array)=>{
    return newValue;
});
*/


let nums1 = [1, 2, 3, 4];

let square = nums1.map((num) => {
    return num * num;
});

console.log(square);


// Convert to uppercase

let names = ["rahul", "aman", "dhiman"];

let upperNames = names.map((name) => {
    return name.toUpperCase();
});

console.log(upperNames);


// Add 5

let values1 = [5, 10, 15];

let newValues = values1.map((value) => {
    return value + 5;
});

console.log(newValues);


// Returning Objects

let students = ["Ram", "Shyam", "Hari"];

let studentObjects = students.map((name) => {
    return {
        studentName: name
    };
});

console.log(studentObjects);


/*
When to use map()?

✔ Modify values
✔ Convert one array into another
✔ API data transformation
✔ JSX rendering in React

Not preferred:
✘ When you only want printing
✘ When removing elements
*/


// =========================================================================================
// 3. filter()
// =========================================================================================

/*
Definition:
-----------
filter() returns a NEW array containing only the elements
that satisfy a condition.

Important Points:
-----------------
✔ Returns a new array.
✔ Original array remains unchanged.
✔ Length may decrease.
✔ Callback returns true or false.
✔ If true -> element included.
✔ If false -> element ignored.

Syntax:
array.filter((element,index,array)=>{
    return condition;
});
*/


let ages = [12, 18, 21, 15, 30];

let adults = ages.filter((age) => {
    return age >= 18;
});

console.log(adults);


// Even Numbers

let numbers1 = [1,2,3,4,5,6,7,8];

let evenNumbers = numbers1.filter((number) => {
    return number % 2 === 0;
});

console.log(evenNumbers);


// Odd Numbers

let oddNumbers = numbers1.filter((number) => {
    return number % 2 !== 0;
});

console.log(oddNumbers);


// Long Words

let words = ["Apple","Cat","Elephant","Dog"];

let longWords = words.filter((word)=>{
    return word.length > 3;
});

console.log(longWords);


// Filtering Objects

let employees = [
    {name:"Ram",salary:50000},
    {name:"Hari",salary:25000},
    {name:"John",salary:70000}
];

let highSalary = employees.filter((employee)=>{
    return employee.salary >= 50000;
});

console.log(highSalary);


/*
When to use filter()?

✔ Remove unwanted data
✔ Search operations
✔ Eligible candidates
✔ Active users
✔ High scorers
*/


// =========================================================================================
// 4. reduce()
// =========================================================================================

/*
Definition:
-----------
reduce() reduces the whole array into a single value.

Examples:
---------
✔ Sum
✔ Product
✔ Maximum
✔ Minimum
✔ Average
✔ Object creation
✔ Counting occurrences

Syntax:
array.reduce((accumulator,currentValue)=>{
    return updatedAccumulator;
}, initialValue);
*/


// Sum

let nums2 = [1,2,3,4,5];

let total = nums2.reduce((accumulator,currentValue)=>{
    return accumulator + currentValue;
},0);

console.log(total);


// Product

let nums3 = [1,2,3,4];

let product = nums3.reduce((accumulator,currentValue)=>{
    return accumulator * currentValue;
},1);

console.log(product);


// Maximum Number

let nums4 = [5,8,3,20,12];

let maximum = nums4.reduce((accumulator,currentValue)=>{
    return currentValue > accumulator ? currentValue : accumulator;
});

console.log(maximum);


// Minimum Number

let minimum = nums4.reduce((accumulator,currentValue)=>{
    return currentValue < accumulator ? currentValue : accumulator;
});

console.log(minimum);


// Count Characters

let letters = ["a","b","a","c","a","b"];

let count = letters.reduce((accumulator,currentValue)=>{

    accumulator[currentValue] = (accumulator[currentValue] || 0) + 1;

    return accumulator;

},{});

console.log(count);


// Average

let marks1 = [80,70,90];

let average = marks1.reduce((accumulator,currentValue)=>{
    return accumulator + currentValue;
},0) / marks1.length;

console.log(average);



/*
When to use reduce()?

✔ Total Sum
✔ Product
✔ Maximum
✔ Minimum
✔ Frequency Count
✔ Grouping Data
✔ Complex Calculations
*/


// =========================================================================================
// 5. Accumulator
// =========================================================================================

/*
Definition:
-----------
Accumulator is the variable that stores the result
after every iteration in reduce().

Think of it as a running result.

Flow Example:

Array:
[10,20,30]

Initial Value = 0

Iteration 1

Accumulator = 0
Current = 10

Return = 10

Iteration 2

Accumulator = 10
Current = 20

Return = 30

Iteration 3

Accumulator = 30
Current = 30

Return = 60

Final Answer = 60
*/


let numbers2 = [10,20,30];

let result = numbers2.reduce((accumulator,currentValue)=>{
    console.log("Accumulator =", accumulator);
    console.log("Current Value =", currentValue);
    console.log("----------------------");
    return accumulator + currentValue;
},0);

console.log(result);


// =========================================================================================
// Difference Between forEach(), map(), filter(), reduce()
// =========================================================================================

/*
1. forEach()

Purpose:
Perform some action on every element.

Returns:
undefined

Changes Length?
No

Use When:
Printing, Logging, DOM manipulation


Example:

let arr = [1,2,3];

arr.forEach((value)=>{
    console.log(value);
});

--------------------------------------------------

2. map()

Purpose:
Modify every element.

Returns:
New Array

Changes Length?
No

Use When:
Transformation

Example:

let arr = [1,2,3];

let doubled = arr.map((value)=>{
    return value * 2;
});

--------------------------------------------------

3. filter()

Purpose:
Keep elements satisfying a condition.

Returns:
New Array

Changes Length?
Yes

Use When:
Searching, Removing unwanted data

Example:

let arr = [1,2,3,4,5];

let even = arr.filter((value)=>{
    return value % 2 === 0;
});

--------------------------------------------------

4. reduce()

Purpose:
Convert entire array into one value.

Returns:
Single Value

Changes Length?
Yes (becomes one value)

Use When:
Sum, Product, Count, Max, Min

Example:

let arr = [1,2,3];

let sumResult = arr.reduce((accumulator,currentValue)=>{
    return accumulator + currentValue;
},0);

*/


// =========================================================================================
// Quick Comparison Table
// =========================================================================================

/*

Method      Returns         Main Purpose

forEach()   undefined       Perform action

map()       New Array       Modify every element

filter()    New Array       Select elements

reduce()    Single Value    Combine into one result

*/


// =========================================================================================
// Which One Should Be Preferred?
// =========================================================================================

/*

Situation                              Preferred Method

Print every element                    forEach()

Double every number                    map()

Convert strings to uppercase           map()

Remove odd numbers                     filter()

Get only adults                        filter()

Find total marks                       reduce()

Find maximum                           reduce()

Find minimum                           reduce()

Count occurrences                      reduce()

Perform DOM updates                    forEach()

*/


// =========================================================================================
// Interview / Viva Questions
// =========================================================================================

/*

Q1. Does forEach() return a new array?
Ans: No. It returns undefined.

------------------------------------------------

Q2. Which method returns a new array?

Ans:
✔ map()
✔ filter()

------------------------------------------------

Q3. Which method returns a single value?

Ans:
reduce()

------------------------------------------------

Q4. Which method is used for transformation?

Ans:
map()

------------------------------------------------

Q5. Which method is used for selection?

Ans:
filter()

------------------------------------------------

Q6. Which method is used for aggregation?

Ans:
reduce()

------------------------------------------------

Q7. Can map() change array length?

Ans:
No.

------------------------------------------------

Q8. Can filter() change array length?

Ans:
Yes.

------------------------------------------------

Q9. Which method is best for printing values?

Ans:
forEach()

------------------------------------------------

Q10. What is an accumulator?

Ans:
The accumulator is a variable in reduce() that stores the intermediate result after each iteration and carries it forward until the final result is produced.

*/


// =========================================================================================
// Real-world Example: Chaining Methods
// =========================================================================================

/*
We can combine multiple methods for powerful data processing.

Example:
1. Filter students with marks >= 50.
2. Add 5 grace marks.
3. Find total marks.
*/

let studentMarks = [35, 55, 65, 45, 80];

let finalTotal = studentMarks
    .filter((mark) => mark >= 50)
    .map((mark) => mark + 5)
    .reduce((accumulator, mark) => accumulator + mark, 0);

console.log(finalTotal);

/*
Output:
(55+5) + (65+5) + (80+5)
= 60 + 70 + 85
= 215
*/


// ======================================= END =============================================