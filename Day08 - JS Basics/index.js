/* 
<!-- 15th July -->
=====================================================
        JAVASCRIPT BASICS - CLASS NOTES
=====================================================

JavaScript can be executed in two ways:

1. Browser
   - Connect index.js with index.html
   - Open Browser -> Press F12 -> Console

2. Node.js
   Command:
       node index.js

=====================================================
1. console.log()
=====================================================

Used to print output.

Syntax:
    console.log(value);

Examples:
*/

console.log("Hello World");
console.log(100);
console.log(50 + 50);

/*
=====================================================
2. Variables
=====================================================

let     -> Value can be changed.
const   -> Value cannot be changed.
var     -> Old way (avoid using in modern JavaScript)

Examples:
*/

let name = "Dhiman";
const college = "ADTU";
var age = 19;

console.log(name);
console.log(college);
console.log(age);

/*
=====================================================
3. JavaScript Data Types (8 Types)
=====================================================

1. Number (Integrers and Decimals all belongs to Number)
2. String
3. Boolean
4. Undefined
5. Null
6. BigInt
7. Symbol
8. Object

-----------------------------------------------------
Number
-----------------------------------------------------
*/

let marks = 95;
let percentage = 92.5;

console.log(typeof marks);
console.log(typeof percentage);

/*
-----------------------------------------------------
String
-----------------------------------------------------
*/

let city = "Guwahati";

console.log(typeof city);

/*
-----------------------------------------------------
Boolean
-----------------------------------------------------
*/

let passed = true;
let failed = false;

console.log(typeof passed);

/*
-----------------------------------------------------
Undefined
-----------------------------------------------------

Variable declared but not assigned.
*/

let x;

console.log(x);
console.log(typeof x);

/*
-----------------------------------------------------
Null
-----------------------------------------------------

Intentionally empty value.
*/

let data = null;

console.log(data);
console.log(typeof data);   // object (JavaScript bug)

/*
-----------------------------------------------------
BigInt
-----------------------------------------------------
*/

let bigNumber = 123456789012345678901234567890n;

console.log(typeof bigNumber);

/*
-----------------------------------------------------
Symbol
-----------------------------------------------------
*/

let id = Symbol("id");

console.log(typeof id);

/*
-----------------------------------------------------
Object
-----------------------------------------------------
*/

let student = {
    name: "Dhiman",
    age: 19
};

console.log(typeof student);

/*
=====================================================
4. Comparison Operators
=====================================================

==   -> Loose Equality
===  -> Strict Equality
!=   -> Loose Not Equal
!==  -> Strict Not Equal
>    -> Greater Than
<    -> Less Than
>=   -> Greater Than or Equal
<=   -> Less Than or Equal

=====================================================
== (Loose Equality)

Checks VALUE only.
Performs type conversion if required.
=====================================================
*/

console.log(5 == 5);      // true
console.log(5 == "5");    // true

/*
=====================================================
=== (Strict Equality)

Checks VALUE + DATA TYPE.
No type conversion.
=====================================================
*/

console.log(5 === 5);      // true
console.log(5 === "5");    // false

/*
Difference

==   -> Converts data types if required.
===  -> Does NOT convert data types.
*/

/*
=====================================================
!= (Loose Not Equal)
=====================================================
*/

console.log(5 != 4);      // true
console.log(5 != "5");    // false

/*
=====================================================
!== (Strict Not Equal)
=====================================================
*/

console.log(5 !== "5");   // true
console.log(5 !== 5);     // false

/*
=====================================================
Greater / Less Operators
=====================================================
*/

console.log(10 > 5);      // true
console.log(10 < 5);      // false

console.log(10 >= 10);    // true
console.log(5 <= 10);     // true

/*
=====================================================
5. null and undefined
=====================================================

null
-----
Represents intentional absence of value.

undefined
-----------
Variable exists but no value assigned.
*/

console.log(null);
console.log(undefined);

/*
=====================================================
6. Important Comparisons
=====================================================
*/

console.log(null == null);           // true
console.log(null === null);          // true

console.log(undefined == undefined); // true
console.log(undefined === undefined);// true

console.log(null == undefined);      // true
console.log(null === undefined);     // false

console.log(null == false);          // false
console.log(null === false);         // false

console.log(undefined == false);     // false
console.log(undefined === false);    // false

console.log(null == 0);              // false
console.log(null > 0);               // false
console.log(null >= 0);              // true

console.log(undefined == 0);         // false
console.log(undefined > 0);          // false
console.log(undefined < 0);          // false

/*
=====================================================
7. Boolean Conversion
=====================================================
*/

console.log(Boolean(1));          // true
console.log(Boolean(0));          // false

console.log(Boolean("Hello"));    // true
console.log(Boolean(""));         // false

console.log(Boolean(null));       // false
console.log(Boolean(undefined));  // false
console.log(Boolean(NaN));        // false

/*
Falsy Values

false
0
"" (empty string)
null
undefined
NaN

Everything else is Truthy.

=====================================================
8. typeof Operator
=====================================================

Returns the data type.
*/

console.log(typeof 10);            // number
console.log(typeof "Hello");       // string
console.log(typeof true);          // boolean
console.log(typeof undefined);     // undefined
console.log(typeof null);          // object
console.log(typeof {});            // object
console.log(typeof []);            // object

/*
=====================================================
Quick Revision
=====================================================

console.log() -> Prints output

typeof -> Returns data type

==  -> Value comparison (type conversion allowed)

=== -> Value + Type comparison

!=  -> Loose Not Equal

!== -> Strict Not Equal

null -> Intentionally empty value

undefined -> Variable declared but no value assigned

typeof null -> object (JavaScript historical bug)

null == undefined      -> true

null === undefined     -> false

=====================================================
*/