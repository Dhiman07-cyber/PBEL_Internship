# JavaScript Notes – Day 2 <!-- 15th July -->
## Objects, Loops, Functions & ES6 Basics

> **Exam Ready Notes**

---

# Table of Contents

1. Objects
2. Accessing Properties
3. Adding, Updating & Deleting Properties
4. Nested Objects
5. Object Methods
6. Loops
7. for Loop
8. while Loop
9. do...while Loop
10. for...of Loop
11. for...in Loop
12. break & continue
13. Nested Loops
14. String Traversal
15. Finding Maximum Value in Object
16. Functions
17. Function Expression
18. Arrow Functions
19. Parameters vs Arguments
20. return
21. Default Parameters
22. Rest Parameters
23. var vs let vs const
24. Hoisting
25. Scope
26. Common Programs
27. Interview Questions
28. Summary

---

# 1. Objects

## Definition

An **Object** is a non-primitive data type that stores information as **key-value pairs**.

```javascript
let student = {
    name: "Dhiman",
    age: 20,
    course: "B.Tech"
};
```

## Key Points

- Keys are unique.
- Values can be any datatype.
- Objects are mutable.
- Keys are automatically converted to strings.

## Accessing Properties

### Dot Notation

```javascript
student.name
student.course
```

### Bracket Notation

```javascript
student["name"]
student["course"]
```

Use bracket notation when:
- Property has spaces
- Property starts with a number
- Property name is dynamic

```javascript
let obj = {
    "full name": "Dhiman",
    100: "Marks"
};

console.log(obj["full name"]);
console.log(obj[100]);
```

---

# Adding Properties

```javascript
student.city = "Guwahati";
student["university"] = "ADTU";
```

# Updating Properties

```javascript
student.age = 21;
```

# Deleting Properties

```javascript
delete student.city;
```

---

# Nested Objects

```javascript
let person = {
    hobbies: {
        games: ["Cricket", "Football"],
        music: {
            favourite: "Starboy"
        }
    }
};

console.log(person.hobbies.games[0]);
```

---

# Useful Object Methods

```javascript
Object.keys(student)
Object.values(student)
Object.entries(student)
```

---

# Loops

Loops execute a block of code repeatedly.

Types:

- for
- while
- do...while
- for...of
- for...in

---

# for Loop

## Syntax

```javascript
for(initialization; condition; update){
    // code
}
```

Example

```javascript
for(let i=1;i<=5;i++){
    console.log(i);
}
```

Variants

Increasing

```javascript
for(let i=1;i<=10;i++)
```

Reverse

```javascript
for(let i=10;i>=1;i--)
```

Skip by 2

```javascript
for(let i=0;i<=20;i+=2)
```

Infinite

```javascript
for(;;){}
```

---

# while Loop

Runs while condition is true.

```javascript
let i=1;

while(i<=5){
    console.log(i);
    i++;
}
```

Use when number of iterations is unknown.

---

# do...while Loop

Executes at least once.

```javascript
let i=1;

do{
    console.log(i);
    i++;
}while(i<=5);
```

---

# for...of

Works with:

- Arrays
- Strings
- Sets
- Maps

Returns values.

```javascript
let arr=[10,20,30];

for(let value of arr){
    console.log(value);
}
```

String

```javascript
for(let ch of "JavaScript"){
    console.log(ch);
}
```

---

# for...in

Works with Objects.

Returns keys.

```javascript
let marks={
    maths:90,
    english:80
};

for(let key in marks){
    console.log(key, marks[key]);
}
```

---

# break

Stops loop immediately.

```javascript
for(let i=1;i<=10;i++){
    if(i==5) break;
}
```

# continue

Skips current iteration.

```javascript
for(let i=1;i<=5;i++){
    if(i==3) continue;
    console.log(i);
}
```

---

# Nested Loops

```javascript
for(let i=1;i<=3;i++){
    for(let j=1;j<=3;j++){
        console.log(i,j);
    }
}
```

---

# Traversing Strings

```javascript
let str="Java";

for(let i=0;i<str.length;i++){
    console.log(str[i]);
}
```

Finding vowels

```javascript
let out="";

for(let ch of str.toLowerCase()){
    if("aeiou".includes(ch)){
        out+=ch;
    }
}
```

---

# Maximum Value in Object

```javascript
let marks={
    maths:56,
    english:89,
    science:67,
    punjabi:88
};

let max=-Infinity;
let subject="";

for(let key in marks){
    if(marks[key]>max){
        max=marks[key];
        subject=key;
    }
}

console.log(subject,max);
```

Why **-Infinity**?

Because all values may be negative.

---

# Functions

Reusable block of code.

```javascript
function add(a,b){
    return a+b;
}
```

Calling

```javascript
add(10,20);
```

---

# Function Expression

```javascript
const add=function(a,b){
    return a+b;
}
```

---

# Arrow Functions (ES6)

```javascript
const add=(a,b)=>{
    return a+b;
}
```

Short Form

```javascript
const square=n=>n*n;
```

---

# Parameters vs Arguments

```javascript
function add(a,b){}
```

a,b → Parameters

```javascript
add(10,20)
```

10,20 → Arguments

---

# return

```javascript
function cube(n){
    return n*n*n;
}
```

Difference

- console.log() prints
- return sends value back

---

# Default Parameters

```javascript
function greet(name="Guest"){
    console.log(name);
}
```

---

# Rest Parameters

```javascript
function total(...nums){
    console.log(nums);
}
```

---

# var vs let vs const

| Feature | var | let | const |
|--------|-----|-----|------|
| Scope | Function | Block | Block |
| Redeclare | ✅ | ❌ | ❌ |
| Reassign | ✅ | ✅ | ❌ |
| Hoisted | ✅ | TDZ | TDZ |

---

# Hoisting

```javascript
console.log(a);
var a=10;
```

Output

```
undefined
```

let & const

```javascript
console.log(b);
let b=5;
```

ReferenceError

---

# Scope

Global Scope

```javascript
let a=10;
```

Function Scope

```javascript
function test(){
 let x=5;
}
```

Block Scope

```javascript
{
 let a=5;
 const b=6;
}
```

---

# Common Exam Programs

- Sum of array
- Largest number
- Smallest number
- Count vowels
- Reverse string
- Reverse array
- Prime number
- Fibonacci
- Multiplication table
- Object traversal
- Highest marks
- Lowest marks
- Sum of object values

---

# Common Interview Questions

## Difference between for...of and for...in

for...of

- Returns values
- Arrays
- Strings

for...in

- Returns keys
- Objects

---

## Difference between == and ===

==

Checks value after type conversion.

===

Checks value and datatype.

Always prefer ===.

---

## Edge Cases

- Objects are passed by reference.
- Arrays are objects.
- typeof null is "object".
- NaN == NaN is false.
- const object properties can change.
- Arrow functions cannot be constructors.
- for...of does not work on plain objects.
- delete is not recommended for removing array elements; use splice().

---

# Quick Revision

✅ Object → key-value pair

✅ for → known iterations

✅ while → unknown iterations

✅ do...while → runs at least once

✅ for...of → values

✅ for...in → keys

✅ break → stop loop

✅ continue → skip iteration

✅ Function → reusable code

✅ return → sends value back

✅ Arrow Function → ES6 syntax

✅ var → function scope

✅ let → block scope

✅ const → block scope + no reassignment

✅ Hoisting → variable/function moved before execution (conceptually)

---

**Practice Daily:** Write at least one program using each loop type and one using objects with nested data.
