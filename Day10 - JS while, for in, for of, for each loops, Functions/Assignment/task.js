// --------------------------------------------------------------------------------------------
// Part A: Conditions and Operators
// --------------------------------------------------------------------------------------------

// 1. Take a number as input. If the number is divisible by 2, print 'Even'; otherwise print 'Odd'.
let num = parseInt(prompt("Enter a number:"))
if(num%2==0){
    console.log("Even");    
} else {
    console.log("Odd");    
}

// 2. Take a number as input. If it is divisible by 3, print 'Fizz'. If it is divisible by 7, print 'Buzz'. If it is divisible by both 3 and 7, print 'FizzBuzz'.
let num = parseInt(prompt("Enter a number:"))
if(num%3==0){
    console.log("Fizz");    
} else if (num%7==0) {
    console.log("Buzz");    
} else if (num%3==0 && num%7==0) {
    console.log("FizzBuzz");    
}

// 3. Take three numbers and print the greatest number among them.
let a = parseInt(prompt("Enter a number:"))
let b = parseInt(prompt("Enter a number:"))
let c = parseInt(prompt("Enter a number:"))

if(a>b && a>c){
    console.log("Greatest number:", a);
} else if (b>a && b>c){
    console.log("Greatest number:", b);
} else if (c>a && c>b){
    console.log("Greatest number:", c);
} else {
    console.log("All are equal");
}

// 4. Check whether a student has passed or failed. Marks greater than or equal to 40 means Pass.
let marks = parseInt(prompt("Enter a number:"))
if(marks>=40){
    console.log("Passed");
} else {
    console.log("Failed");
}

// 5. Predict the output of logical operators (&& and ||).
//"&&": Represents AND operator, which returns True if both or all conditions are be true 
//"||" represents OR operator, which returns True even if atleast one statement evaluates to True



// --------------------------------------------------------------------------------------------
// Part B: Conditions and Operators
// --------------------------------------------------------------------------------------------

// 1. Print all vowels from the string 'JavaScript is awesome'.
let str = "JavaScript is awesome"
let res = ""

for(let i=0; i<str.length; i++){
    if(str[i]=="a" || str[i] == "e" || str[i]=="i" || str[i]=="o" || str[i]=="u"){
        res+=str[i]
    }
}

console.log(res)


// 2. Count the number of vowels in 'Masai School'.
let str = "Masai School"
let count = 0

for(let i=0; i<str.length; i++){
    if(str[i]=="a" || str[i] == "e" || str[i]=="i" || str[i]=="o" || str[i]=="u"){
        count++
    }
}

console.log(count)

// 3. Print every character of 'Full Stack Development' using a loop.
let text = 'Full Stack Development';

for (let char of text) {
    console.log(char);
}

// 4. Count the number of spaces in 'We are learning JavaScript'.
let text = 'We are learning JavaScript';
let count = 0;

for (let char of text) {
    if (char === ' ') {
        spaceCount++;
    }
}
console.log(spaceCount);


// 5. Reverse the string 'Hello'.
let str = "Hello";
let reversed = "";

for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
}
console.log(reversed);


// --------------------------------------------------------------------------------------------
// Part C: Conditions and Operators
// --------------------------------------------------------------------------------------------

// 1. Using a for loop, print numbers from 1 to 20.
for (let i=1; i<21; i++){
    console.log(i)
}

// 2. Using a while loop, print numbers from 20 to 1.
let i=1
while (i<21){
    console.log(i)
    i++
}

// 3. Print the multiplication table of 7.
for (let i = 1; i <= 10; i++) {
    console.log(`7 x ${i} = ${7 * i}`);
}

// 4. Print all even numbers from 1 to 50.
for (let i=2; i<51; i+=2){
    console.log(i)
}

// 5. Find the sum of all numbers from 1 to 100.
let sum = 0

for (let i=1; i<101; i++){
    sum+=i
}

console.log("Net sum = ", sum);


// --------------------------------------------------------------------------------------------
// Part D: Conditions and Operators
// --------------------------------------------------------------------------------------------
// 1. Create an array [10, 20, 30, 40, 50] and perform array operations such as push, pop, length and update values.
let numbers = [10, 20, 30, 40, 50];
console.log(numbers); // [10, 20, 30, 40, 50]

console.log(numbers.length); // 5

numbers.push(60);
console.log(numbers); // [10, 20, 30, 40, 50, 60]

let popped = numbers.pop();
console.log(popped); // 60
console.log(numbers); // [10, 20, 30, 40, 50]

numbers[1] = 25;
console.log(numbers); // [10, 25, 30, 40, 50]


// 2. Using a for...of loop, print all elements of ['Apple', 'Mango', 'Banana', 'Orange'].
let fruits = ['Apple', 'Mango', 'Banana', 'Orange'];

for (let fruit of fruits) {
    console.log(fruit);
}

// 3. Find the largest number in [23, 56, 89, 12, 100, 45].
let numbers = [23, 56, 89, 12, 100, 45];
let max = numbers[0];

for (let num of numbers) {
    if (num > max) {
        max = num;
    }
}
console.log(max);

// 4. Find the sum of all elements in [5, 10, 15, 20, 25].
let numbers = [5, 10, 15, 20, 25];
let sum = 0;

for (let num of numbers) {
    sum += num;
}
console.log(sum)


// 5. Count the number of even numbers in [2, 5, 8, 11, 14, 17, 20].
let numbers = [2, 5, 8, 11, 14, 17, 20];
let count = 0;

for (let num of numbers) {
    if (num % 2 === 0) {
        count++;
    }
}
console.log(count);

// --------------------------------------------------------------------------------------------
// Part E: Conditions and Operators
// --------------------------------------------------------------------------------------------

// 1. Print all keys from a student object using for...in.
let student = {
  name: "Dhiman",
  age: 20,
  University: "AdtU",
  Noob_Friends: ["Nayan", "Bikash"]
};

for (let key in student) {
  console.log(`${key}`);
}

// 2. Print all values from the object.
let student = {
  name: "Dhiman",
  age: 20,
  University: "AdtU",
  Noob_Friends: ["Nayan", "Bikash"]
};

for (let key in student) {
  console.log(`${student[key]}`);
}

// 3. Find the subject with the minimum marks from a marks object.
let marks = {
  Maths: 85,
  Science: 92,
  English: 78,
  History: 88
};

let minSubject = "";
let minMark = 100;

for (let subject in marks) {
  if (marks[subject] < minMark) {
    minMark = marks[subject];
    minSubject = subject;
  }
}

console.log("Subject with minimum marks: ", minSubject);


// 4. Count the total number of properties in an object.
let student = {
  name: "Dhiman",
  age: 20,
  University: "AdtU",
  Noob_Friends: ["Nayan", "Bikash"]
};

let propertyCount = 0;

for (let key in student) {
  propertyCount++;
}

console.log("Total number of properties: " + propertyCount);

// 5. Predict the output of iterating through an object using for...in.
let student = {
  name: "Dhiman",
  age: 20,
  University: "AdtU",
  Noob_Friends: ["Nayan", "Bikash"]
};

for (let key in student) {
  console.log(`${key} = ${student[key]}`);
}

// --------------------------------------------------------------------------------------------
// Part F: Conditions and Operators
// --------------------------------------------------------------------------------------------

// 1. Create a function that takes two numbers and prints their sum.
let Sum = (num1, num2) => console.log(num1 + num2);
Sum(1,2)

// 2. Create a function that takes a number and prints its square.
let Square = num => console.log(num * num);
Square(2)

// 3. Create an arrow function that takes three numbers and prints their average.
let Average = (a, b, c) => console.log((a + b + c) / 3);
Average(2,3,4)

// 4. Create a function that takes a string and prints its length.
let StrLength = text => console.log(text.length);
StrLength("Hello Guyzz")

// 5. Create a function that takes two numbers and prints the greater number.
let Greater = (num1, num2) => {
    if (num1 > num2) {
        console.log(num1);
    } else if (num2 > num1) {
        console.log(num2);
    } else {
        console.log(`Both numbers are equal: ${num1}`);
    }
};

Greater(5, 10)

// --------------------------------------------------------------------------------------------
// Part G: Conditions and Operators
// --------------------------------------------------------------------------------------------

// 1. Predict the output of using a variable before declaration with var.
console.log(a);
var a = 10;
//This will print "undefined". Since, JavaScript hoists var variables to the top of their scope and initializes them with a value of undefined.


// 2. Predict the output of using a variable before declaration with let.
console.log(a);
let a = 10;
// Output: ReferenceError: Cannot access 'myLet' before initialization
// Reason: Variables declared with let are hoisted but not initialized. They reside in a "Temporal Dead Zone" (TDZ) from the start of the block until the declaration line is run.

// 3. Predict the output when modifying a let variable.
count = 10; 
console.log(count); // Output: 10
// Output: The variable updates successfully to the new value.
// Reason: let allows re-assignment but prevents re-declaration within the same scope.javascriptlet count = 5;

// 4. Write the difference between var, let and let.

// --- SCOPE ---
// var: Function-scoped. Visible throughout the entire function it is declared in.
// let & let: Block-scoped. Only visible inside the nearest curly braces {} (loops, ifs, etc.).

// --- HOISTING & INITIALISATION ---
// var: Hoisted and initialized as 'undefined'. Can be accessed before declaration.
// let & let: Hoisted but NOT initialized. Accessing them early causes a ReferenceError (Temporal Dead Zone).

// --- RE-ASSIGNMENT ---
// var & let: Can be re-assigned new values at any time.
// let: Cannot be re-assigned. Must be assigned a value immediately when declared.

// --- RE-DECLARATION ---
// var: Can be re-declared within the same scope without errors.
// let & let: Cannot be re-declared in the same scope. Doing so throws a SyntaxError.




// Challenge Questions

// 1. Find the second largest number in an array.
const numbers = [0, 10, 100, 0, 0, 500, 400, 100, 800];

let largest = -Infinity;
let secondLargest = -Infinity;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > largest) {
        secondLargest = largest;
        largest = numbers[i];
    } else if (numbers[i] > secondLargest && numbers[i] !== largest) {
        secondLargest = numbers[i];
    }
}

console.log("Second largest:", secondLargest);




// 2. Count vowels and consonants in the string 'Programming'.
let str = "Programming"
let count_vowels = 0
let count_consonants = 0

for(let i=0; i<str.length; i++){
    if(str[i]=="a" || str[i] == "e" || str[i]=="i" || str[i]=="o" || str[i]=="u"){
        count_vowels++
    } else {
        count_consonants++
    }
}

console.log(`Number of Vowels: ${count_vowels} and Number of Consonants: ${count_consonants}`)



// 3. Create a student object containing name, age, university, subjects and hobbies, then print all information.
let student = {
  name: "Dhiman",
  age: 20,
  University: "AdtU",
  subjects: ["Backend", "Cloud Fundamentals"],
  hobby: ["Watching Cricket", "Playing Games"]
};

for (let key in student) {
  console.log(`${key} = ${student[key]}`);
}


// 4. Write a function that checks whether a number is prime or not.
let isPrime = n => {
    if (n <= 1) return false;
    for (let i = 2; i < n; i++) {
        if (n % i === 0) 
            return false;
    }
    return true;
};

if (isPrime(7)) {
    console.log("Number is prime");
} else {
    console.log("Number is not prime");
}


// 5. Write a function that reverses a string.
let reverseString = (str) => console.log(str.split("").reverse().join(""));

reverseString("Dhiman Saikia")


// 6. Create an array of students and print only those whose names start with 'A'.
let students = ["Prachurjya", "Dhiman", "Bikash", "Nayan", "Ananya"];

for (let i = 0; i < students.length; i++) {
    if (students[i][0] === 'A' || students[i][0] === 'a') {
        console.log("Student Name: " + students[i]);
    }
}