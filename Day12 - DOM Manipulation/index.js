//Task:1 - Object containing product names and prices, 15% discount applied on each produtc.. Show final prices after discount (using function)
let products = {
    Laptop: 45000,
    iphone: 67000,
    MobileCover: 1200,
    tablet: 58999
};

const applyDiscount = (products, discount) => {
    let finalPrices = {};

    for (let product in products) {
        finalPrices[product] = products[product] - (products[product] * discount / 100);
    }

    return finalPrices;
};

let finalPrices = applyDiscount(products, 15);

console.log(finalPrices);



/*******************************************************************************************************
 ********************************************** 21st July **********************************************
 *
 * JAVASCRIPT BROWSER ENVIRONMENT
 *
 * Topics Covered:
 * 1. What is JavaScript?
 * 2. Browser vs JavaScript
 * 3. Why Browser JavaScript is Different
 * 4. JavaScript Engine
 *
 * Before learning DOM Manipulation, it is very important to understand where JavaScript actually runs. Many beginners think JavaScript itself can change HTML, CSS or display alerts. In reality, JavaScript is only a programming language. The Browser provides all these additional features. Remember this chapter carefully because almost every concept in DOM Manipulation depends on understanding the relationship between JavaScript and the Browser.
 *******************************************************************************************************/



// =========================================================================================
// 1. What is JavaScript ?
// =========================================================================================

/*
Definition:
-----------

JavaScript is a High-Level, Dynamically Typed Programming Language used to write logic for applications. It allows us to perform calculations, create variables, work with loops, write functions, create objects and solve problems using programming concepts.

Originally, JavaScript was created to make webpages interactive. Today, however, JavaScript is much more than a browser language. It can also be used for Backend Development (Node.js), Mobile Applications, Desktop Applications, Game Development and many other areas.

One important thing to understand is that JavaScript itself is only a programming language. A programming language knows how to execute 
logic, but it does not know anything about webpages, buttons, forms or CSS unless another environment provides those features. 

Think of JavaScript as a person who knows how to think and solve problems, but cannot interact with the outside world without the 
necessary tools.
*/


// =========================================================================================
// Example
// =========================================================================================

let num1 = 25;
let num2 = 15;

console.log(num1 + num2);

/*
Output:
-------

40

Reason:
-------

This example uses only JavaScript programming features. No HTML, CSS or browser interaction is involved. The JavaScript Engine simply performs 
the addition and prints the result.
*/



// =========================================================================================
// 2. Browser vs JavaScript
// =========================================================================================

/*
This is one of the most important concepts in Browser JavaScript.  
Many beginners think JavaScript and Browser are the same thing. They are not.

JavaScript is a Programming Language.

A Browser (Chrome, Edge, Firefox, Safari, etc.) is an Application that
understands HTML, CSS and JavaScript together.

The Browser creates an environment where JavaScript can run. It also provides
many additional objects and APIs that JavaScript can use.

Without a Browser, JavaScript still remains a programming language, but it
loses access to webpage-related features.

Think of it like this:

JavaScript = Brain
Browser    = Body

The brain knows how to think, but without a body it cannot interact with the outside world. Similarly, JavaScript knows programming, 
while the Browser provides the ability to interact with webpages.

Always remember the following statement: JavaScript DOES NOT create webpages.

The Browser loads HTML, applies CSS, creates the webpage and then executes
JavaScript whenever required.
*/



// =========================================================================================
// What JavaScript Knows
// =========================================================================================

/*
JavaScript understands only programming concepts such as:

• Variables
• Data Types
• Operators
• Conditions
• Loops
• Functions
• Objects
• Arrays
• Classes
• Promises
• Async Programming

These are language features and work even outside the browser.
*/


// =========================================================================================
// What JavaScript Does NOT Know
// =========================================================================================

/*
JavaScript does not automatically know about:

• HTML
• CSS
• Buttons
• Images
• Forms
• DOM
• alert()
• prompt()
• confirm()

These features are provided by the Browser Environment.

This is why the same JavaScript code behaves differently in different
environments.

For example:

Browser JavaScript

→ Has document
→ Has window
→ Has alert()

Node.js

→ Has process
→ Has global
→ Does NOT have document
→ Does NOT have alert()

The language is the same. Only the environment changes.
*/



// =========================================================================================
// Example
// =========================================================================================

let age = 20;

console.log(typeof age);

/*
Output:
-------

number

Reason:
-------

The typeof operator is a core JavaScript feature. It belongs to the language
itself and does not require a browser or an HTML page.
*/



// =========================================================================================
// 3. Why Browser JavaScript is Different
// =========================================================================================

/*
Whenever a webpage is opened, the Browser performs several tasks before
JavaScript starts interacting with the page.

Step 1:
The Browser reads the HTML file.

Step 2:
The Browser creates the webpage structure.

Step 3:
CSS is applied to style the webpage.

Step 4:
The Browser creates special objects like window and document.

Step 5:
Finally, the Browser executes JavaScript.

Because JavaScript receives access to these Browser objects, it becomes capable
of changing the webpage.

Without these objects, JavaScript cannot manipulate HTML because it has no idea
that the webpage even exists.

This is why Browser JavaScript is different from normal JavaScript execution.
*/


// =========================================================================================
// Important Interview Question
// =========================================================================================

/*
Question:
---------

Can JavaScript manipulate HTML by itself?

Answer:
-------

No.

JavaScript is only a programming language. HTML Manipulation is possible only
because the Browser provides the Document Object Model (DOM), which allows
JavaScript to access and modify webpage elements.
*/



// =========================================================================================
// 4. JavaScript Engine
// =========================================================================================

/*
Definition:
-----------

A JavaScript Engine is a software component responsible for understanding and
executing JavaScript code.

The engine reads your code, converts it into machine-understandable instructions
and executes them.

Different browsers use different JavaScript Engines.

Examples:

Google Chrome  → V8 Engine

Microsoft Edge → V8 Engine

Firefox        → SpiderMonkey

Safari         → JavaScriptCore

Although the engines are different, they all follow the JavaScript language
specification. Therefore, your JavaScript code behaves almost the same in every
modern browser.
*/


// =========================================================================================
// Example
// =========================================================================================

let x = 100;
let y = 50;

console.log(x - y);

/*
Output:
-------

50

Reason:
-------

When this code runs, the JavaScript Engine reads the variables, performs the
subtraction and sends the result to the Browser Console. The engine executes
the logic, while the Browser provides the console where the output is displayed.
*/


/*******************************************************************************************************
 ************************************** DOM MANIPULATION - PART 1.1B ************************************
 *
 * BROWSER ENVIRONMENT, BROWSER APIs & BROWSER OBJECT MODEL (BOM)
 *
 * Topics Covered:
 * 1. Browser Environment
 * 2. Browser APIs
 * 3. Browser Object Model (BOM)
 * 4. Why Browser JavaScript is Different from Core JavaScript
 *
 * In the previous section, we learned that JavaScript is only a programming
 * language and the Browser provides the environment in which JavaScript runs.
 * In this section, we will understand what exactly the Browser provides and
 * why Browser JavaScript is much more powerful than JavaScript running in
 * other environments.
 *******************************************************************************************************/



// =========================================================================================
// 1. Browser Environment
// =========================================================================================

/*
Definition:
-----------

A Browser Environment is the complete runtime environment created by the
browser for executing JavaScript. Along with executing JavaScript code, the
browser also provides several built-in objects and APIs that allow JavaScript
to interact with webpages and the browser itself.

When an HTML page is opened, the browser performs many operations before your
JavaScript code starts executing. It reads the HTML document, applies CSS,
creates the Document Object Model (DOM), creates the global Window Object and
finally executes the JavaScript code.

Because of this environment, JavaScript gains access to features like alerts,
forms, buttons, images, browser history and many other browser-related
functionalities.

Without a Browser Environment, these features simply do not exist.
*/



// =========================================================================================
// Example
// =========================================================================================

alert("Welcome to JavaScript");

/*
Output:
-------

A browser alert box appears containing

Welcome to JavaScript

Reason:
-------

The function alert() is not a core JavaScript feature. It is provided by the
Browser Environment. If the same code is executed in Node.js, it throws an
error because Node.js does not provide an alert() function.
*/



// =========================================================================================
// Another Example
// =========================================================================================

console.log(Math.sqrt(64));

/*
Output:
-------

8

Reason:
-------

The Math object is a core JavaScript object. It belongs to the language itself
and therefore works in both browsers and Node.js.

This shows that not every object belongs to the browser. Some objects are
provided directly by JavaScript.
*/



// =========================================================================================
// 2. Browser APIs
// =========================================================================================

/*
Definition:
-----------

API stands for Application Programming Interface.

A Browser API is a feature provided by the browser that JavaScript can use to
perform tasks related to webpages or the browser itself.

JavaScript does not create these APIs. It only uses them.

Whenever we call a browser function such as alert(), prompt() or
document.getElementById(), we are actually using Browser APIs.

Some commonly used Browser APIs are:

DOM API
Allows JavaScript to access and modify HTML elements.

BOM API
Allows JavaScript to interact with the browser window.

Console API
Provides methods such as console.log() for debugging.

Timer API
Provides functions like setTimeout() and setInterval().

Storage API
Allows storing data inside the browser using localStorage and sessionStorage.

Fetch API
Allows communication with servers over the internet.

You do not need to memorize every API now. At this stage, simply remember that
most browser-related features are APIs provided by the browser.
*/



// =========================================================================================
// Example
// =========================================================================================

console.log("Learning Browser APIs");

/*
Output:
-------

Learning Browser APIs

Reason:
-------

The console object is also provided by the browser. The method log() displays
messages inside the Developer Tools Console, making debugging much easier.
*/



// =========================================================================================
// 3. Browser Object Model (BOM)
// =========================================================================================

/*
Definition:
-----------

The Browser Object Model, commonly known as BOM, is a collection of objects
provided by the browser that allows JavaScript to interact with the browser
window instead of the webpage.

The BOM is different from the DOM.

DOM is related to the HTML document.

BOM is related to the browser itself.

Using BOM, JavaScript can perform tasks such as displaying alerts, obtaining
browser information, checking the current URL, navigating to another webpage,
accessing browser history and many other browser-specific operations.

Almost every BOM feature starts from a single object called the Window Object.

We will study the Window Object in detail later. For now, simply remember that
it is the root object of the Browser Environment.
*/



// =========================================================================================
// Examples of BOM Features
// =========================================================================================

alert("Hello");

prompt("Enter your Name");

confirm("Do you want to continue?");

/*
Reason:
-------

All three functions belong to the Browser Object Model.

They interact directly with the browser window rather than with the HTML page.

These functions are available only because the browser provides them.
*/



// =========================================================================================
// 4. Why Browser JavaScript is Different
// =========================================================================================

/*
Consider the following situation.

Suppose you write a JavaScript file containing only mathematical calculations.

The same file can execute successfully inside a browser as well as inside
Node.js because mathematical operations belong to JavaScript itself.

Now consider another example where you try to display an alert box.

The browser executes it successfully because it provides the alert() function.

Node.js throws an error because there is no browser window available.

Therefore, JavaScript behaves according to the environment in which it is
executed.

The language remains exactly the same, but the objects and APIs available to
the language change depending on the runtime environment.

This is one of the most important concepts to remember throughout DOM
Manipulation because every HTML element, form, image and button that we access
later will actually come from objects created by the browser, not from the
JavaScript language itself.
*/


/*******************************************************************************************************
 ************************************** DOM MANIPULATION - PART 1.1C ************************************
 *
 * THE GLOBAL WINDOW OBJECT
 *
 * Topics Covered:
 * 1. What is the Global Object?
 * 2. Introduction to the Window Object
 * 3. Why Window is Called the Global Object
 * 4. Properties and Methods of Window
 * 5. Implicit vs Explicit Window
 *
 * Every browser creates one special object before executing JavaScript code.
 * This object is called the Window Object. It acts as the root object of the
 * Browser Environment. Almost every browser feature that we use, such as
 * alert(), prompt(), confirm(), document, console and many others, actually
 * belongs to this object.
 *
 *******************************************************************************************************/



// =========================================================================================
// 1. What is the Global Object?
// =========================================================================================

/*
Definition:
-----------

Whenever JavaScript starts executing inside a browser, the browser creates one
special object called the Global Object.

A Global Object is an object whose members can be accessed from anywhere in
your JavaScript code.

In browsers, the Global Object is called "window".

This means that whenever your JavaScript code executes inside Chrome, Firefox,
Edge or any other browser, a Window Object already exists before your code
starts running.

You never create the Window Object yourself.

The browser creates it automatically.

Everything related to the browser is attached to this object.
*/



// =========================================================================================
// Printing the Window Object
// =========================================================================================

console.log(window);

/*
Output:
-------

Window { ... }

(The console displays a huge object containing hundreds of properties.)

Reason:
-------

The browser prints the complete Window Object.

If you expand it inside DevTools, you will notice that it contains many
properties and methods such as document, history, location, navigator,
console, alert(), prompt(), confirm() and much more.

Almost every browser feature is stored inside this object.
*/



// =========================================================================================
// Accessing Window Directly
// =========================================================================================

window;

/*
Output:
-------

Window { ... }

Reason:
-------

When an expression is entered directly inside the browser console, Chrome
evaluates that expression and displays its value.

Since the value of "window" is the Global Window Object, the console displays
that object.
*/



// =========================================================================================
// 2. Why is Window Called the Global Object?
// =========================================================================================

/*
The Window Object is called the Global Object because every global variable and
every global function automatically becomes a property or method of window.

Whenever we declare a variable outside every function, it is created in the
global scope.

The browser stores such variables inside the Window Object.

Similarly, global functions also become members of window.

This behaviour is specific to browser JavaScript and is one of the reasons why
the Window Object is considered the root object of the browser environment.
*/



// =========================================================================================
// Example
// =========================================================================================

var college = "ADTU";

console.log(window.college);

/*
Output:
-------

ADTU

Reason:
-------

The variable was declared using var in the global scope.

Therefore, it automatically became a property of the Window Object.

Notice that we never explicitly wrote

window.college = "ADTU";

The browser did this automatically.
*/



// =========================================================================================
// Another Example
// =========================================================================================

function greet() {
    console.log("Hello Students");
}

window.greet();

/*
Output:
-------

Hello Students

Reason:
-------

The function greet() was declared globally.

Therefore, it also became a method of the Window Object.

Calling greet() or window.greet() produces the same result.
*/



// =========================================================================================
// Important Note about let and const
// =========================================================================================

/*
Modern JavaScript behaves slightly differently for variables declared using
let and const.

Unlike var, global variables declared using let or const do not become direct
properties of the Window Object.

Example:

let city = "Guwahati";

window.city

Output:

undefined

Reason:

The variable exists in the global scope, but it is not attached as a property
of window.

This difference was introduced in modern JavaScript to avoid several problems
that existed with var.

For now, simply remember:

var  -> becomes property of window

let  -> does not

const -> does not
*/



// =========================================================================================
// 3. Window Contains Many Built-in Objects
// =========================================================================================

/*
The Window Object is extremely large.

It contains hundreds of properties and methods created by the browser.

Some commonly used members are:

window.document
Represents the HTML page.

window.console
Represents the browser console.

window.history
Represents browser history.

window.location
Represents the current URL.

window.navigator
Provides browser information.

window.screen
Provides screen information.

window.alert()
Displays an alert box.

window.prompt()
Displays an input box.

window.confirm()
Displays a confirmation box.

Later, we will study each of these in detail.

For now, simply understand that all these features originate from the Window
Object.
*/



// =========================================================================================
// 4. Implicit Window
// =========================================================================================

alert("Welcome");

console.log("JavaScript");

/*
Reason:
-------

Most beginners think alert() and console.log() are independent JavaScript
functions.

Actually, the browser automatically assumes:

window.alert("Welcome");

window.console.log("JavaScript");

Since window is the Global Object, JavaScript allows us to omit the word
"window" while accessing its members.

This is called implicit access to the Global Object.
*/



// =========================================================================================
// Explicit Window
// =========================================================================================

window.alert("Welcome");

window.console.log("Browser JavaScript");

/*
Output:
-------

An alert box appears.

Browser JavaScript

Reason:
-------

Here, we are explicitly mentioning the Window Object.

Both styles are correct.

Most developers omit "window" because JavaScript automatically searches inside
the Global Object whenever it cannot find a variable or function in the local
scope.
*/



// =========================================================================================
// Comparing Both Styles
// =========================================================================================

alert("Hello");

window.alert("Hello");

/*
Both statements perform exactly the same task.

Similarly,

console.log("Hi");

window.console.log("Hi");

Both produce exactly the same output.

The only difference is that the second statement explicitly mentions the object
from which the method is being called.
*/


/*******************************************************************************************************
 ************************************** DOM MANIPULATION - PART 1.1D ************************************
 *
 * BROWSER CONSOLE, STATEMENTS, EXPRESSIONS & RETURN VALUES
 *
 * Topics Covered:
 * 1. Browser Console
 * 2. Statements vs Expressions
 * 3. Function Return Values
 * 4. Why undefined Appears
 * 5. Why Some Expressions Print Objects
 * 6. Understanding Console Behaviour
 *
 * The Browser Console is one of the most powerful tools for JavaScript
 * development. Most beginners use it only to see outputs, but in reality
 * the Console is a JavaScript execution environment. Every line typed into
 * the Console is immediately executed by the JavaScript Engine.
 *
 *******************************************************************************************************/



// =========================================================================================
// 1. Browser Console
// =========================================================================================

/*
Definition:
-----------

The Browser Console is a built-in tool provided by Developer Tools (DevTools).

It allows us to write and execute JavaScript code without creating a separate
JavaScript file.

Whenever we type something into the Console and press Enter, the JavaScript
Engine immediately executes that code and displays the result.

Because of this, the Console is mainly used for:

• Testing JavaScript code

• Debugging programs

• Checking variable values

• Understanding browser objects

• Learning JavaScript concepts

Remember that the Console is different from the webpage.

The webpage displays HTML elements, whereas the Console displays JavaScript
execution results.
*/



// =========================================================================================
// Example
// =========================================================================================

10 + 20

/*
Output:
-------

30

Reason:
-------

This is an expression.

The Console evaluates the expression and immediately displays its value.

No console.log() is required because the Console itself prints the result of
the evaluated expression.
*/



// =========================================================================================
// Another Example
// =========================================================================================

"Hello"

/*
Output:
-------

Hello

Reason:
-------

A string literal is also an expression.

Since every expression has a value, the Console displays that value.
*/



// =========================================================================================
// Objects are also Expressions
// =========================================================================================

({ name: "Dhiman", age: 20 })

/*
Output:
-------

{ name: "Dhiman", age: 20 }

Reason:
-------

An object literal is also an expression.

The Console evaluates the object and displays it.

Notice that nothing is being printed using console.log().

The Console itself is showing the value of the expression.
*/



// =========================================================================================
// 2. What is a Statement?
// =========================================================================================

/*
A statement is an instruction that tells JavaScript to perform some action.

Unlike expressions, statements usually do not produce a value.

Their purpose is to perform an operation instead of calculating a result.

Examples of statements are:

Variable declarations

if statements

for loops

while loops

function declarations

switch statements

These statements perform actions but generally do not return any value to the
Console.
*/



// =========================================================================================
// Example
// =========================================================================================

let age = 20;

/*
Output:
-------

undefined

Reason:
-------

Many students think the variable was not created because the Console displays
undefined.

This is incorrect.

The variable is created successfully.

The reason undefined appears is because a variable declaration is a statement,
not an expression.

Statements do not return values.

Since nothing is returned, the Console displays undefined.
*/



// =========================================================================================
// Checking the Variable
// =========================================================================================

age

/*
Output:
-------

20

Reason:
-------

Now we entered only the variable name.

A variable name is an expression.

Its value is 20.

Therefore, the Console displays 20.
*/



// =========================================================================================
// Another Example
// =========================================================================================

const college = "ADTU";

/*
Output:
-------

undefined

Reason:
-------

Again, this is a declaration statement.

The declaration succeeds.

The Console simply has no value to display.
*/



// =========================================================================================
// Checking Again
// =========================================================================================

college

/*
Output:
-------

ADTU

Reason:
-------

The variable already exists.

Typing its name evaluates the expression and returns its stored value.
*/



// =========================================================================================
// 3. console.log()
// =========================================================================================

/*
console.log() is a method used to display information inside the Browser
Console.

Many beginners believe that console.log() returns the value being printed.

It does not.

console.log() only displays the value.

After displaying it, the function itself returns undefined.
*/



// =========================================================================================
// Example
// =========================================================================================

console.log("JavaScript");

/*
Output:
-------

JavaScript

undefined

Reason:
-------

The first line is printed by console.log().

After printing, the function finishes execution.

Since it does not explicitly return anything, JavaScript automatically returns
undefined.

The Browser Console also displays this return value.
*/



// =========================================================================================
// Example
// =========================================================================================

let marks = 95;

console.log(marks);

/*
Output:
-------

95

undefined

Reason:
-------

console.log() prints the value stored inside the variable.

After completing its work, the function returns undefined.

The Browser Console shows both.
*/



// =========================================================================================
// 4. Expressions vs console.log()
// =========================================================================================

10 + 5

/*
Output:
-------

15

Reason:
-------

The Console itself evaluated the expression.
*/




console.log(10 + 5);

/*
Output:
-------

15

undefined

Reason:
-------

console.log() printed the value 15.

The function then returned undefined.

Therefore, the Console displays the return value after the printed output.
*/



// =========================================================================================
// Another Example
// =========================================================================================

Math.max(50, 80)

/*
Output:
-------

80

Reason:
-------

Math.max() actually returns a value.

The Console displays the returned value directly.
*/



// =========================================================================================
// Example
// =========================================================================================

console.log(Math.max(50, 80));

/*
Output:
-------

80

undefined

Reason:
-------

Math.max() returns 80.

console.log() prints 80.

Finally, console.log() returns undefined.
*/



// =========================================================================================
// Understanding the Difference
// =========================================================================================

/*
When using the Browser Console, always ask yourself one question:

"Am I typing an expression or executing a statement?"

If it is an expression,

the Console usually displays its value.

If it is a statement,

the Console usually displays undefined because statements do not produce
values.

If it is a function,

first understand what that function returns.

Some functions return useful values.

Some functions simply perform work and return undefined.

This small concept explains most of the confusing outputs beginners observe
inside the Browser Console.
*/


/*******************************************************************************************************
 ************************************** DOM MANIPULATION - PART 1.1E ************************************
 *
 * THE WINDOW OBJECT IN DETAIL
 *
 * Topics Covered:
 * 1. What is the Window Object?
 * 2. How Window is Created
 * 3. Window is the Root Object
 * 4. Properties vs Methods
 * 5. Accessing Members of Window
 * 6. Implicit and Explicit Window
 *
 * Before any JavaScript code starts executing inside a browser, the browser
 * automatically creates one special object called the Window Object. It is the
 * root object of the Browser Environment. Almost everything related to the
 * browser either belongs directly to this object or can be accessed through it.
 *
 *******************************************************************************************************/



// =========================================================================================
// 1. What is the Window Object?
// =========================================================================================

/*
Definition:
-----------

The Window Object is the Global Object created automatically by every browser.

It represents the browser window in which the webpage is currently opened.

Unlike normal objects, we never create the Window Object ourselves. The browser
creates exactly one Window Object for every browser tab or window.

As soon as the browser starts loading a webpage, the Window Object is created
first. Later, many other objects such as document, history, location, navigator
and screen are attached to it.

Because every browser feature starts from this object, it is known as the Root
Object of Browser JavaScript.

Think of the Window Object as the main control room of the browser. Every major
browser feature is connected to this control room in one way or another.
*/



// =========================================================================================
// Printing the Window Object
// =========================================================================================

console.log(window);

/*
Output:
-------

Window { ... }

Reason:
-------

The browser prints the complete Window Object.

If you expand it inside DevTools, you will notice hundreds of properties and
methods.

You do not need to understand every property now. We will study only the
important ones throughout DOM Manipulation.
*/



// =========================================================================================
// Typing Window in DevTools
// =========================================================================================

window

/*
Output:
-------

Window { ... }

Reason:
-------

Here, "window" is an expression.

The Console evaluates the expression and displays its value, which is the
Window Object itself.
*/



// =========================================================================================
// 2. Window is the Root Object
// =========================================================================================

/*
Many browser features look independent, but internally they belong to the
Window Object.

For example,

document

console

history

location

navigator

screen

alert()

prompt()

confirm()

setTimeout()

setInterval()

All of these are members of the Window Object.

Therefore, whenever we access one of these objects, we are actually accessing
something that belongs to window.
*/



// =========================================================================================
// Example
// =========================================================================================

window.document

/*
Output:
-------

#document

Reason:
-------

The property document stores the Document Object.

This object represents the current HTML page.
*/



// =========================================================================================
// Example
// =========================================================================================

window.console

/*
Output:
-------

Console { ... }

Reason:
-------

The console object also belongs to the Window Object.

Its methods are used for debugging JavaScript programs.
*/



// =========================================================================================
// Example
// =========================================================================================

window.location

/*
Output:
-------

Location { ... }

Reason:
-------

The location object contains information about the current webpage URL.

We will study it later under the Browser Object Model.
*/



// =========================================================================================
// Example
// =========================================================================================

window.history

/*
Output:
-------

History { ... }

Reason:
-------

The history object stores information related to browser navigation, such as
previous and next pages.
*/



// =========================================================================================
// 3. Properties and Methods
// =========================================================================================

/*
Like every JavaScript object, the Window Object also contains properties and
methods.

A Property stores information.

A Method performs some action.

Examples of Window Properties

document

console

history

location

navigator

screen

Examples of Window Methods

alert()

prompt()

confirm()

setTimeout()

setInterval()

Whenever you see parentheses (), it usually indicates a method because methods
are functions attached to objects.
*/



// =========================================================================================
// Property Example
// =========================================================================================

console.log(window.document);

/*
Output:
-------

#document

Reason:
-------

document is a property.

It stores the Document Object.

We are simply reading that property's value.
*/



// =========================================================================================
// Method Example
// =========================================================================================

window.alert("Welcome");

/*
Output:
-------

A browser alert box appears.

Reason:
-------

alert() is a method of the Window Object.

The method performs an action by displaying a dialog box.
*/



// =========================================================================================
// 4. Implicit Window
// =========================================================================================

/*
Since window is the Global Object, JavaScript allows us to omit the word
"window" while accessing its members.

Whenever JavaScript cannot find a variable or function in the current scope,
it automatically checks the Global Object.

Because of this behaviour, both of the following statements perform exactly
the same task.
*/



alert("Hello Students");

window.alert("Hello Students");

/*
Output:
-------

Both display the same alert box.

Reason:
-------

The first statement accesses alert() implicitly.

The second statement accesses alert() explicitly.

Internally, both refer to the same Window Object.
*/



// =========================================================================================
// Another Example
// =========================================================================================

console.log("JavaScript");

window.console.log("JavaScript");

/*
Output:
-------

JavaScript

JavaScript

Reason:
-------

Both statements call the same method.

The only difference is that the second statement explicitly mentions the object
to which the method belongs.
*/



// =========================================================================================
// Another Example
// =========================================================================================

document

window.document

/*
Output:
-------

Both display the Document Object.

Reason:
-------

The identifier "document" is automatically resolved as "window.document"
because document is a property of the Global Window Object.
*/



// =========================================================================================
// Important Observation
// =========================================================================================

/*
Many beginners think that objects such as document and console are independent
objects.

They are not.

Internally,

document is actually

window.document

Similarly,

console is

window.console

history is

window.history

location is

window.location

This is why JavaScript allows us to omit the word "window" while writing code.

Most developers prefer the shorter form because it is cleaner and easier to
read, but both forms are completely correct.
*/


/*******************************************************************************************************
 ************************************** DOM MANIPULATION - PART 1.1F ************************************
 *
 * THE "this" KEYWORD - INTRODUCTION
 *
 * Topics Covered:
 * 1. What is the "this" Keyword?
 * 2. "this" in Browser Global Scope
 * 3. "this" inside Normal Functions
 * 4. "this" inside Object Methods
 * 5. Why "this" Changes
 *
 * The "this" keyword is one of the most confusing concepts for beginners.
 * Unlike normal variables, the value of "this" is not fixed. It depends on
 * how and where a function is called.
 *
 * A common misconception is that "this" always refers to the current object.
 * This is not true. The value of "this" changes according to the execution
 * context.
 *
 *******************************************************************************************************/



// =========================================================================================
// 1. What is "this" ?
// =========================================================================================

/*
Definition:
-----------

The keyword "this" is a special keyword provided by JavaScript.

Unlike normal variables, we never assign a value to "this".

Its value is decided automatically by JavaScript while the program is running.

Think of "this" as a reference that points to the object currently responsible
for executing the code.

Since different objects can execute different functions, the value of "this"
can also change.

For this reason, you should never memorize a fixed meaning of "this". Instead,
always ask the following question:

"Who called this function?"

The answer to that question usually tells you what "this" refers to.
*/



// =========================================================================================
// 2. "this" in Browser Global Scope
// =========================================================================================

console.log(this);

/*
Output:
-------

Window { ... }

Reason:
-------

In Browser JavaScript, the global object is the Window Object.

When JavaScript executes code in the global scope, "this" refers to the
Window Object.

Therefore,

this

and

window

refer to the same object in browser global scope.
*/



// =========================================================================================
// Example
// =========================================================================================

console.log(this === window);

/*
Output:
-------

true

Reason:
-------

Both references point to the same Window Object.

Therefore, the comparison returns true.
*/



// =========================================================================================
// Another Example
// =========================================================================================

this.alert("Welcome");

/*
Output:
-------

An alert box appears.

Reason:
-------

Since "this" refers to window in the global scope, this.alert() is exactly the
same as writing:

window.alert()

or simply

alert()

All three statements perform the same task.
*/



// =========================================================================================
// 3. "this" inside a Normal Function
// =========================================================================================

/*
A normal function behaves differently depending on how it is called.

When a normal function is called directly in browser global scope, JavaScript
automatically sets "this" to the Window Object.

This behaviour is specific to non-strict mode, which is what beginners usually
learn first.
*/



function show() {
    console.log(this);
}

show();

/*
Output:
-------

Window { ... }

Reason:
-------

The function was called directly.

No object was used to call it.

Therefore, in browser non-strict mode, JavaScript assigns the Window Object to
"this".
*/



// =========================================================================================
// Another Example
// =========================================================================================

function greet() {
    console.log(this === window);
}

greet();

/*
Output:
-------

true

Reason:
-------

The function was called normally.

Therefore, "this" refers to the Window Object.
*/



// =========================================================================================
// 4. "this" inside an Object Method
// =========================================================================================

/*
When a function becomes part of an object, it is called a method.

Inside a method, "this" refers to the object that called the method.

This is one of the most important rules in JavaScript.

Remember this sentence carefully:

Inside an object method, "this" refers to that object.
*/



const student = {
    name: "Dhiman",

    showName: function () {
        console.log(this);
    }
};

student.showName();

/*
Output:
-------

{ name: "Dhiman", showName: f() }

Reason:
-------

The method was called using

student.showName()

Therefore,

"this"

points to the student object itself.

It does NOT point to the Window Object.
*/



// =========================================================================================
// Example
// =========================================================================================

const person = {

    name: "Rahul",

    age: 22,

    display: function () {

        console.log(this.name);

        console.log(this.age);

    }

};

person.display();

/*
Output:
-------

Rahul

22

Reason:
-------

Since "this" refers to the person object,

this.name

means

person.name

Similarly,

this.age

means

person.age

Using "this" makes the method reusable because we do not have to write the
object name repeatedly.
*/



// =========================================================================================
// Another Example
// =========================================================================================

const mobile = {

    brand: "Samsung",

    model: "S24",

    details: function () {

        console.log(this.brand + " " + this.model);

    }

};

mobile.details();

/*
Output:
-------

Samsung S24

Reason:
-------

The method accesses the properties of the same object using "this".

This is the most common use of the "this" keyword in JavaScript.
*/



// =========================================================================================
// 5. Why Does "this" Change?
// =========================================================================================

/*
Unlike ordinary variables, "this" does not permanently belong to one object.

JavaScript determines its value at runtime based on the way a function is
called.

If the function is called directly,

"this" usually refers to window (in browser non-strict mode).

If the function is called as an object's method,

"this" refers to that object.

Because of this behaviour, two calls to the same function can produce
different values of "this".

This dynamic nature of "this" is what makes it confusing initially, but once
you understand that it depends on the function call, the concept becomes much
easier.
*/

/*******************************************************************************************************
 ************************************** DOM MANIPULATION - PART 1.1G ************************************
 *
 * FUNCTIONS IN JAVASCRIPT
 *
 * Topics Covered:
 * 1. Function Declaration
 * 2. Function Expression
 * 3. Anonymous Function
 * 4. Named Function
 * 5. Arrow Function
 * 6. Arrow Function vs Normal Function
 * 7. Why Arrow Functions Behave Differently with "this"
 *
 * Functions are one of the fundamental building blocks of JavaScript. A
 * function is simply a reusable block of code that performs a particular task.
 * Instead of writing the same code repeatedly, we place it inside a function
 * and call it whenever required.
 *
 *******************************************************************************************************/



// =========================================================================================
// 1. Function Declaration
// =========================================================================================

/*
Definition:
-----------

A Function Declaration is the traditional way of creating a function.

It is declared using the "function" keyword followed by a function name.

Since the function has a name, we can call it multiple times using that name.

Function declarations are hoisted, which means they can be called even before
their declaration appears in the source code. We will study hoisting later.
*/

function greet() {
    console.log("Hello Students");
}

greet();

/*
Output:
-------

Hello Students

Reason:
-------

The function greet() executes and prints the message.
*/



// =========================================================================================
// 2. Function Expression
// =========================================================================================

/*
A function can also be stored inside a variable.

When a function is assigned to a variable, it is called a Function Expression.

The variable stores a reference to the function, and the function is executed
using the variable name.

Unlike Function Declarations, Function Expressions are not hoisted in the same
way because the variable must first receive the function before it can be used.
*/

const display = function () {
    console.log("Learning JavaScript");
};

display();

/*
Output:
-------

Learning JavaScript

Reason:
-------

The variable display stores the function.

Calling display() executes the stored function.
*/



// =========================================================================================
// 3. Anonymous Function
// =========================================================================================

/*
Definition:
-----------

An Anonymous Function is simply a function without a name.

Notice carefully that the function below does not have a name after the
"function" keyword.

Instead, it is directly assigned to a variable.

Anonymous functions are very common in JavaScript because they are frequently
passed as arguments to other functions or assigned to variables.
*/

const sum = function (a, b) {
    return a + b;
};

console.log(sum(10, 20));

/*
Output:
-------

30

Reason:
-------

The variable sum stores an anonymous function.

Calling sum(10, 20) executes that function and returns the result.
*/



// =========================================================================================
// 4. Named Function Expression
// =========================================================================================

/*
Although most function expressions use anonymous functions, they may also have
their own internal name.

This internal name is mainly useful for debugging and recursion.

The function is still called using the variable name, not its internal name.
*/

const message = function showMessage() {
    console.log("Welcome");
};

message();

/*
Output:
-------

Welcome

Reason:
-------

The variable message stores the function.

The internal name showMessage is generally not used outside the function.
*/



// =========================================================================================
// 5. Arrow Function
// =========================================================================================

/*
Arrow Functions were introduced in ES6 as a shorter way of writing functions.

They use the => symbol instead of the function keyword.

Arrow functions are especially useful for writing short callback functions and
simple operations.

Although their syntax is shorter, they are not exactly the same as normal
functions.

One major difference is the behaviour of the "this" keyword.
*/

const multiply = (a, b) => {
    return a * b;
};

console.log(multiply(5, 6));

/*
Output:
-------

30

Reason:
-------

The arrow function multiplies the two numbers and returns the result.
*/



// =========================================================================================
// Short Form of Arrow Function
// =========================================================================================

/*
If an arrow function contains only one statement and that statement returns a
value, the braces {} and the return keyword may be omitted.
*/

const square = number => number * number;

console.log(square(8));

/*
Output:
-------

64

Reason:
-------

Since the function contains only one return statement, JavaScript returns the
result automatically.
*/



// =========================================================================================
// 6. Arrow Function vs Normal Function
// =========================================================================================

/*
At first glance, both functions appear to perform the same work.

However, internally they are different.

A Normal Function creates its own "this" value whenever it is called.

An Arrow Function DOES NOT create its own "this".

Instead, it simply uses the "this" value from the surrounding scope.

This single difference is responsible for most beginner mistakes involving
arrow functions.
*/



// =========================================================================================
// Normal Function as Object Method
// =========================================================================================

const student = {

    name: "Dhiman",

    showName: function () {

        console.log(this.name);

    }

};

student.showName();

/*
Output:
-------

Dhiman

Reason:
-------

The method was called using the student object.

Therefore,

this

refers to the student object.

Hence,

this.name

becomes

student.name.
*/



// =========================================================================================
// Arrow Function as Object Method
// =========================================================================================

const employee = {

    name: "Rahul",

    showName: () => {

        console.log(this.name);

    }

};

employee.showName();

/*
Output:
-------

undefined

Reason:
-------

The arrow function does not create its own "this".

Instead, it uses the "this" value from the surrounding scope.

Since the surrounding scope is the global scope,

this

refers to the Window Object.

The browser therefore tries to access

window.name

instead of

employee.name.

Because window.name usually does not contain "Rahul", the result is undefined.

This is why arrow functions should generally NOT be used as object methods when
the method needs to access the object's own properties.
*/



// =========================================================================================
// Another Comparison
// =========================================================================================

const car = {

    brand: "Toyota",

    normal: function () {

        console.log(this.brand);

    },

    arrow: () => {

        console.log(this.brand);

    }

};

car.normal();

car.arrow();

/*
Output:
-------

Toyota

undefined

Reason:
-------

The normal function receives "this" from the object that called it.

The arrow function inherits "this" from the surrounding scope.

Therefore, the two methods produce different results even though they belong to
the same object.
*/


/*******************************************************************************************************
 ************************************** DOM MANIPULATION - PART 1.2A ************************************
 *
 * INTRODUCTION TO DOM & DOCUMENT OBJECT
 *
 * Topics Covered:
 * 1. What is a Document?
 * 2. What is DOM?
 * 3. Why DOM is Required
 * 4. How Browser Creates the DOM
 * 5. The document Object
 * 6. window.document
 *
 * Until now we have learned about the Browser Environment, Window Object and
 * JavaScript execution. In this section, we will finally understand how
 * JavaScript communicates with an HTML page.
 *
 * Remember one important thing:
 *
 * JavaScript never talks directly to HTML.
 *
 * Instead, it talks to the Document Object created by the browser.
 *
 *******************************************************************************************************/



// =========================================================================================
// 1. What is a Document ?
// =========================================================================================

/*
Definition:
-----------

A Document simply means a webpage.

Whenever you create an HTML file and open it inside a browser, that complete
HTML page is called a Document.

Example:

index.html

<html>

<head>
    ...
</head>

<body>

    <h1>Hello</h1>

    <button>Click</button>

</body>

</html>

The complete HTML page above is one Document.

The browser reads this document and displays it on the screen.

However, JavaScript cannot understand HTML tags directly.

Therefore, the browser converts this document into JavaScript objects before
JavaScript starts interacting with it.
*/



// =========================================================================================
// 2. What is DOM ?
// =========================================================================================

/*
DOM stands for Document Object Model.

The DOM is a programming representation of an HTML document.

When the browser loads an HTML page, it reads every HTML element and converts
each element into a JavaScript Object.

These objects are then connected together in a tree-like structure.

This complete structure is called the DOM Tree.

Because every HTML element becomes an object, JavaScript can read, modify,
delete and create HTML elements while the webpage is running.

Without the DOM, JavaScript would only see a plain text HTML file.

With the DOM, JavaScript sees a collection of interconnected objects.

That is why DOM Manipulation becomes possible.
*/



// =========================================================================================
// HTML Example
// =========================================================================================

/*

<html>

<body>

    <h1>Hello</h1>

    <p>Learning JavaScript</p>

    <button>Click Me</button>

</body>

</html>

*/



/*
The browser internally creates something similar to this:

Document
    |
    |
   html
     |
     |
    body
   /   |    \
 h1    p   button

Each box above represents a JavaScript Object.

This structure is called the DOM Tree.
*/



// =========================================================================================
// 3. Why is DOM Required ?
// =========================================================================================

/*
Suppose there were no DOM.

JavaScript would only receive an HTML file containing text.

It would not know where the heading starts.

It would not know where the paragraph ends.

It would not know which button was clicked.

The browser solves this problem by converting every HTML element into an
object.

Now JavaScript can simply access those objects and change their properties.

For example,

Changing text

Changing colours

Changing images

Changing styles

Creating new elements

Removing existing elements

All these operations become possible because every HTML element is represented
as an object inside the DOM.
*/



// =========================================================================================
// 4. Browser Creates the DOM Automatically
// =========================================================================================

/*
The browser performs several steps whenever a webpage is opened.

Step 1

Read the HTML file.

Step 2

Read the CSS file.

Step 3

Create the DOM Tree.

Step 4

Create the Window Object.

Step 5

Create the Document Object.

Step 6

Execute JavaScript.

Notice something very important.

JavaScript does NOT create the DOM.

The Browser creates it automatically before JavaScript starts executing.

JavaScript simply uses the DOM provided by the browser.
*/



// =========================================================================================
// 5. The document Object
// =========================================================================================

/*
The browser stores the complete DOM inside a special object called document.

The document object represents the entire HTML page.

Whenever JavaScript wants to access any HTML element, it always starts with
the document object.

Think of document as the entry gate to the webpage.

Every HTML element exists somewhere inside this object.

This is why almost every DOM method begins with the word "document".

Examples:

document.getElementById()

document.querySelector()

document.querySelectorAll()

document.createElement()

document.forms

document.images

Each of these starts with "document" because every HTML element belongs to the
Document Object.
*/



// =========================================================================================
// Printing document
// =========================================================================================

console.log(document);

/*
Output:
-------

#document

(Expand it in DevTools)

Reason:
-------

The browser prints the Document Object.

If you expand it, you can see the complete DOM Tree created from the HTML page.

Every HTML element exists somewhere inside this object.
*/



// =========================================================================================
// Accessing document from window
// =========================================================================================

console.log(window.document);

/*
Output:
-------

#document

Reason:
-------

The Document Object is actually a property of the Window Object.

Therefore,

document

and

window.document

refer to the same object.
*/



// =========================================================================================
// Comparing Both
// =========================================================================================

console.log(document === window.document);

/*
Output:
-------

true

Reason:
-------

Both references point to exactly the same Document Object.

JavaScript allows us to omit "window" because document is a global property of
the Window Object.
*/



// =========================================================================================
// Another Example
// =========================================================================================

document

/*
Output:
-------

#document

Reason:
-------

When typed directly into the Browser Console, the Console evaluates the
expression and displays the Document Object.
*/



// =========================================================================================
// Important Observation
// =========================================================================================

/*
Do not confuse the Window Object and the Document Object.

Window represents the browser window.

Document represents the HTML page currently loaded inside that browser window.

The relationship can be visualized like this:

window
   |
   |
document
   |
   |
html
   |
   |
body
   |
   |
All HTML Elements

Every HTML element that we access later using getElementById(),
querySelector() or other DOM methods exists somewhere inside the Document
Object.
*/

/*******************************************************************************************************
 ************************************** DOM MANIPULATION - PART 1.2B ************************************
 *
 * SELECTING HTML ELEMENTS USING document.getElementById()
 *
 * Topics Covered:
 * 1. Why Selecting Elements is Necessary
 * 2. document.getElementById()
 * 3. Return Value of getElementById()
 * 4. Storing Elements in Variables
 * 5. What Happens if the Element Doesn't Exist?
 *
 * Before JavaScript can change any HTML element, it must first locate that
 * element inside the Document Object. This process is called Element Selection.
 *
 * Imagine a classroom containing 100 students. If the teacher wants to ask
 * only one particular student a question, the teacher must first identify
 * that student. Similarly, JavaScript must first identify the required HTML
 * element before it can modify it.
 *
 *******************************************************************************************************/



// =========================================================================================
// 1. Selecting an HTML Element
// =========================================================================================

/*
The browser converts every HTML element into an object and stores it inside the
Document Object.

However, JavaScript does not automatically know which element we want to work
with.

Therefore, we use different DOM methods to search for an element.

Some commonly used methods are:

document.getElementById()

document.getElementsByClassName()

document.getElementsByTagName()

document.querySelector()

document.querySelectorAll()

Among these, getElementById() is the easiest and most commonly used method for
beginners because every id should uniquely identify one element on the page.
*/



// =========================================================================================
// HTML Example
// =========================================================================================

/*

<h1 id="heading">

Welcome to JavaScript

</h1>

*/




// =========================================================================================
// 2. document.getElementById()
// =========================================================================================

/*
Definition:
-----------

The getElementById() method searches the complete HTML document for an element
having the specified id.

If the browser finds the element, it returns the corresponding HTML Element
Object.

Syntax:

document.getElementById("idName")

Notice that the id name must always be written inside quotation marks because
it is a string.

Also remember that ids should be unique. Two different HTML elements should
never have the same id.
*/



// =========================================================================================
// Example
// =========================================================================================

document.getElementById("heading");

/*
Output (DevTools Console):
--------------------------

<h1 id="heading">Welcome to JavaScript</h1>

Reason:
-------

The browser searched the Document Object and found an element whose id is
"heading".

Instead of returning only the text, it returned the complete HTML Element
Object.

This is a very important point.

getElementById() never returns only the content.

It always returns the entire element object.
*/



// =========================================================================================
// Storing the Returned Element
// =========================================================================================

let heading = document.getElementById("heading");

console.log(heading);

/*
Output:
-------

<h1 id="heading">Welcome to JavaScript</h1>

Reason:
-------

The returned HTML Element Object is stored inside the variable "heading".

From now on, instead of searching the document repeatedly, we can simply use
the variable heading to access the same element.
*/



// =========================================================================================
// Why Store Elements in Variables?
// =========================================================================================

/*
Consider the following code.

*/

document.getElementById("heading").style.color = "red";
document.getElementById("heading").style.backgroundColor = "yellow";
document.getElementById("heading").style.padding = "20px";

/*
Although the above code works perfectly, JavaScript searches the document
three different times.

A better approach is to search once, store the element inside a variable and
reuse that variable.

This makes the code easier to read and avoids unnecessary searching.
*/

let title = document.getElementById("heading");

title.style.color = "red";
title.style.backgroundColor = "yellow";
title.style.padding = "20px";



// =========================================================================================
// Another HTML Example
// =========================================================================================

/*

<p id="message">

Learning DOM Manipulation

</p>

*/

let message = document.getElementById("message");

console.log(message);

/*
Output:
-------

<p id="message">Learning DOM Manipulation</p>

Reason:
-------

Again, the complete paragraph element is returned instead of only its text.

Every HTML tag is treated as an object inside the DOM.
*/



// =========================================================================================
// 3. What Happens if the ID Does Not Exist?
// =========================================================================================

document.getElementById("student");

/*
Output:
-------

null

Reason:
-------

The browser searched the entire document but could not find any element having
the id "student".

Whenever getElementById() cannot find the requested element, it returns null.

Remember that null does NOT mean an error.

It simply means "Nothing was found."
*/



// =========================================================================================
// Another Example
// =========================================================================================

let student = document.getElementById("student");

console.log(student);

/*
Output:
-------

null

Reason:
-------

The variable student stores the value returned by getElementById().

Since no matching element exists, the stored value is null.
*/



// =========================================================================================
// Common Beginner Mistake
// =========================================================================================

let demo = document.getElementById("student");

demo.innerText = "Hello";

/*
Output:
-------

Uncaught TypeError:
Cannot set properties of null

Reason:
-------

Since the browser returned null, there is no HTML element stored inside demo.

JavaScript therefore cannot access the property innerText of null.

Always make sure that the requested id actually exists in the HTML document.
*/



// =========================================================================================
// Important Observation
// =========================================================================================

/*
Notice the following three statements carefully.

document.getElementById("heading")

Returns

The complete HTML Element Object.

------------------------------------------------------------

document.getElementById("heading").innerText

Returns

Only the visible text inside that element.

------------------------------------------------------------

document.getElementById("heading").style

Returns

The Style Object associated with that HTML element.

This means that one HTML element contains many different properties.

Each property gives us different information or allows us to perform different
operations.

In the next section, we will study the most commonly used properties such as
innerText, innerHTML and textContent in detail.
*/


/*******************************************************************************************************
 ************************************** DOM MANIPULATION - PART 1.2C ************************************
 *
 * READING & CHANGING ELEMENT CONTENT
 *
 * Topics Covered:
 * 1. Properties of an HTML Element
 * 2. innerText
 * 3. innerHTML
 * 4. textContent
 * 5. Difference Between innerText, innerHTML and textContent
 *
 * Once we have selected an HTML element, we can access many of its properties.
 * Some properties provide information about the element, while others allow us
 * to modify it.
 *
 * Among all these properties, innerText, innerHTML and textContent are the
 * most commonly used because they deal with the content present inside an
 * HTML element.
 *
 *******************************************************************************************************/



// =========================================================================================
// Example HTML
// =========================================================================================

/*

<h1 id="heading">

Welcome to JavaScript

</h1>

*/

let heading = document.getElementById("heading");



// =========================================================================================
// 1. innerText
// =========================================================================================

/*
Definition:
-----------

The innerText property is used to read or modify only the visible text present
inside an HTML element.

If some content is hidden using CSS, innerText usually ignores that hidden
content because it focuses on what is actually visible on the webpage.

Since innerText returns only text, it does not include HTML tags.
*/

console.log(heading.innerText);

/*
Output:
-------

Welcome to JavaScript

Reason:
-------

The heading element contains only visible text.

Therefore, innerText returns exactly that text.
*/



// =========================================================================================
// Changing Text using innerText
// =========================================================================================

heading.innerText = "Learning DOM Manipulation";

/*
Result on Webpage:
------------------

Learning DOM Manipulation

Reason:
-------

The existing text inside the heading is replaced with the new text.

Only the content changes.

The HTML element itself remains the same.
*/




// =========================================================================================
// Another Example
// =========================================================================================

heading.innerText = "JavaScript is Awesome";

/*
Result:
-------

JavaScript is Awesome

Reason:
-------

innerText can both read and modify visible text.
*/



// =========================================================================================
// Example with HTML Tags
// =========================================================================================

heading.innerText = "<b>Hello Students</b>";

/*
Result on Webpage:
------------------

<b>Hello Students</b>

Reason:
-------

innerText treats everything as plain text.

It does not interpret HTML tags.

Instead, it displays the tags exactly as written.
*/



// =========================================================================================
// 2. innerHTML
// =========================================================================================

/*
Definition:
-----------

The innerHTML property returns everything present inside an HTML element,
including HTML tags.

Unlike innerText, innerHTML understands HTML.

This means we can create new HTML elements simply by assigning an HTML string
to innerHTML.
*/



// =========================================================================================
// HTML Example
// =========================================================================================

/*

<h1 id="heading">

Hello <b>Students</b>

</h1>

*/

console.log(heading.innerHTML);

/*
Output:
-------

Hello <b>Students</b>

Reason:
-------

The browser returns the complete HTML content present inside the element,
including the <b> tag.
*/



// =========================================================================================
// Changing HTML
// =========================================================================================

heading.innerHTML = "<i>Learning JavaScript</i>";

/*
Result on Webpage:
------------------

Learning JavaScript

(The text appears in italic.)

Reason:
-------

The browser reads the HTML string, creates an actual <i> element and inserts
it inside the heading.

Unlike innerText, innerHTML interprets HTML tags.
*/



// =========================================================================================
// Another Example
// =========================================================================================

heading.innerHTML =
"<span style='color:red'>Red Text</span>";

/*
Result:
-------

The text appears in red.

Reason:
-------

The browser creates a real span element instead of displaying the tags as text.
*/



// =========================================================================================
// 3. textContent
// =========================================================================================

/*
Definition:
-----------

The textContent property is very similar to innerText because both deal with
text instead of HTML.

However, textContent returns all text present inside an element, including text
that may not currently be visible because of CSS.

It does not interpret HTML tags while reading the content. It simply returns
the text stored inside the element.

For beginners, innerText and textContent often appear to behave similarly.
The difference becomes noticeable when hidden elements are involved.
*/



// =========================================================================================
// HTML Example
// =========================================================================================

/*

<p id="demo">

Visible Text

<span style="display:none">

Hidden Text

</span>

</p>

*/

let demo = document.getElementById("demo");

console.log(demo.textContent);

/*
Output:
-------

Visible Text Hidden Text

Reason:
-------

textContent returns all textual content inside the element, even if some part
of it is hidden from the webpage.
*/



// =========================================================================================
// innerText vs textContent
// =========================================================================================

console.log(demo.innerText);

/*
Output:
-------

Visible Text

Reason:
-------

The hidden span is ignored because innerText focuses on the text currently
visible on the webpage.
*/



// =========================================================================================
// Another Example
// =========================================================================================

demo.textContent = "JavaScript Notes";

/*
Result:
-------

JavaScript Notes

Reason:
-------

textContent can also modify text.

The previous content is replaced with the new text.
*/



// =========================================================================================
// Comparing All Three
// =========================================================================================

/*
Suppose the HTML is

<h2 id="title">

Hello <b>Students</b>

</h2>

Then,

----------------------------------------------------------

title.innerText

Returns

Hello Students

(The HTML tags are ignored.)

----------------------------------------------------------

title.innerHTML

Returns

Hello <b>Students</b>

(The complete HTML is returned.)

----------------------------------------------------------

title.textContent

Returns

Hello Students

(All textual content is returned.)

----------------------------------------------------------

Remember the following simple rule.

innerText

↓

Visible text only.

----------------------------------------------------------

innerHTML

↓

Complete HTML.

----------------------------------------------------------

textContent

↓

All text, including hidden text.
*/



// =========================================================================================
// Common Beginner Mistakes
// =========================================================================================

/*
Mistake 1

Using innerHTML when only text needs to be changed.

Although this works, the browser has to parse the HTML again.

If no HTML tags are required, innerText or textContent is usually a better
choice.

----------------------------------------------------------

Mistake 2

Expecting innerText to create HTML elements.

innerText displays HTML tags as ordinary text.

Only innerHTML creates actual HTML elements.

----------------------------------------------------------

Mistake 3

Confusing the return values.

innerText

Returns visible text.

innerHTML

Returns HTML.

textContent

Returns all textual content.
*/


/*******************************************************************************************************
 ************************************** DOM MANIPULATION - PART 1.2D ************************************
 *
 * CHANGING CSS USING THE style OBJECT
 *
 * Topics Covered:
 * 1. What is the style Object?
 * 2. Accessing CSS Properties
 * 3. Changing Colors
 * 4. Changing Background
 * 5. Border
 * 6. Padding
 * 7. Multiple Style Changes
 * 8. Why JavaScript Uses camelCase
 *
 * Every HTML element contains a special property called "style". This property
 * is itself an object containing all CSS properties that can be applied to the
 * element. By modifying these properties, JavaScript can dynamically change
 * the appearance of a webpage without editing the CSS file.
 *
 *******************************************************************************************************/



// =========================================================================================
// Example HTML
// =========================================================================================

/*

<h1 id="heading">

Learning JavaScript

</h1>

*/

let heading = document.getElementById("heading");



// =========================================================================================
// 1. The style Object
// =========================================================================================

/*
Definition:
-----------

Every HTML element has a property named "style".

The style property is an object that stores the element's inline CSS.

Using this object, JavaScript can read or modify CSS properties such as
color, backgroundColor, border, padding, fontSize and many others.

Think of it like this:

HTML Element
      |
      |
   style Object
      |
      |
CSS Properties

Whenever we write

element.style.color

we are accessing the "color" property inside the style object of that element.
*/



// =========================================================================================
// Printing the Style Object
// =========================================================================================

console.log(heading.style);

/*
Output:
-------

CSSStyleDeclaration { ... }

Reason:
-------

The browser returns the Style Object associated with the selected HTML element.

If you expand this object in DevTools, you will notice hundreds of CSS
properties available for modification.
*/



// =========================================================================================
// 2. Changing Text Color
// =========================================================================================

heading.style.color = "red";

/*
Result on Webpage:
------------------

The heading text becomes red.

Reason:
-------

The value of the CSS color property is changed from its previous value to red.

JavaScript immediately updates the webpage.
*/



// =========================================================================================
// Another Example
// =========================================================================================

heading.style.color = "blue";

/*
Result:
-------

The heading text becomes blue.

Reason:
-------

The previous color is replaced with the new color.
*/



// =========================================================================================
// Using Hexadecimal Colors
// =========================================================================================

heading.style.color = "#00AA00";

/*
Result:
-------

The heading becomes green.

Reason:
-------

JavaScript accepts any valid CSS color value including color names,
hexadecimal values, rgb() and rgba().
*/



// =========================================================================================
// 3. Changing Background Color
// =========================================================================================

heading.style.backgroundColor = "yellow";

/*
Result:
-------

A yellow background appears behind the heading.

Reason:
-------

The CSS property being changed is actually

background-color

However, JavaScript cannot use hyphens in property names.

Therefore,

background-color

becomes

backgroundColor.
*/



// =========================================================================================
// Another Example
// =========================================================================================

heading.style.backgroundColor = "black";

heading.style.color = "white";

/*
Result:
-------

Black background

White text

Reason:
-------

More than one CSS property can be changed independently.
*/



// =========================================================================================
// 4. Changing Border
// =========================================================================================

heading.style.border = "3px solid red";

/*
Result:
-------

A red border appears around the heading.

Reason:
-------

The complete CSS border value is assigned as one string.

The browser separates the width, style and color automatically.
*/



// =========================================================================================
// Another Example
// =========================================================================================

heading.style.border = "5px dashed blue";

/*
Result:
-------

A blue dashed border appears.

Reason:
-------

The previous border value is replaced with the new one.
*/



// =========================================================================================
// 5. Padding
// =========================================================================================

heading.style.padding = "20px";

/*
Result:
-------

Space appears inside the border around the text.

Reason:
-------

Padding controls the internal spacing between the content and the border.
*/



// =========================================================================================
// Another Example
// =========================================================================================

heading.style.padding = "40px";

/*
Result:
-------

More space is added around the text.

Reason:
-------

Increasing the padding increases the empty space inside the element.
*/



// =========================================================================================
// 6. Font Size
// =========================================================================================

heading.style.fontSize = "40px";

/*
Result:
-------

The text size becomes larger.

Reason:
-------

The CSS property

font-size

is written as

fontSize

inside JavaScript.
*/



// =========================================================================================
// Another Example
// =========================================================================================

heading.style.fontWeight = "bold";

/*
Result:
-------

The heading becomes bold.

Reason:
-------

JavaScript modifies the CSS font-weight property using camelCase.
*/



// =========================================================================================
// 7. Applying Multiple Styles
// =========================================================================================

heading.style.color = "white";

heading.style.backgroundColor = "purple";

heading.style.padding = "25px";

heading.style.border = "4px solid yellow";

heading.style.fontSize = "35px";

/*
Result:
-------

White text

Purple background

Yellow border

25px padding

35px font size

Reason:
-------

Each statement changes one CSS property.

Together they completely change the appearance of the heading.
*/



// =========================================================================================
// 8. Why camelCase?
// =========================================================================================

/*
A common question asked by beginners is:

Why do we write

backgroundColor

instead of

background-color ?

The reason is that JavaScript treats the hyphen (-) as the subtraction operator.

Therefore,

background-color

would be interpreted as

background minus color

which is invalid.

To solve this problem, JavaScript converts CSS property names into camelCase.

Examples:

CSS

background-color

JavaScript

backgroundColor

----------------------------------------------------------

CSS

font-size

JavaScript

fontSize

----------------------------------------------------------

CSS

font-weight

JavaScript

fontWeight

----------------------------------------------------------

CSS

margin-left

JavaScript

marginLeft

----------------------------------------------------------

CSS

border-radius

JavaScript

borderRadius

This rule applies to almost every CSS property containing a hyphen.
*/



// =========================================================================================
// Important Observation
// =========================================================================================

/*
Notice the following carefully.

heading

↓

HTML Element Object

--------------------------------------------

heading.style

↓

Style Object

--------------------------------------------

heading.style.color

↓

One Property of the Style Object

--------------------------------------------

This means we are actually accessing objects inside objects.

Document Object

↓

HTML Element

↓

Style Object

↓

CSS Property

Understanding this hierarchy makes DOM Manipulation much easier because almost
everything in JavaScript is based on objects and their properties.
*/


/*******************************************************************************************************
 ************************************** DOM MANIPULATION - PART 1.2E ************************************
 *
 * INTRODUCTION TO EVENTS
 *
 * Topics Covered:
 * 1. What is an Event?
 * 2. Event-Driven Programming
 * 3. Common Browser Events
 * 4. Event Handlers
 * 5. onclick Attribute
 * 6. JavaScript Functions as Event Handlers
 *
 * Until now, our JavaScript programs executed immediately after the page was
 * loaded. However, most real-world websites do not simply execute code once
 * and stop. They wait for the user to perform some action.
 *
 * That user action is called an Event.
 *
 * JavaScript listens for these events and executes specific code whenever they
 * occur. This programming style is known as Event-Driven Programming.
 *
 *******************************************************************************************************/



// =========================================================================================
// 1. What is an Event?
// =========================================================================================

/*
Definition:
-----------

An Event is any action or occurrence that happens inside the browser.

Some events are caused by the user, while others are caused by the browser
itself.

Whenever an event occurs, JavaScript has an opportunity to execute some code.

Think of an event as a signal sent by the browser saying,

"Something has happened."

JavaScript can listen for that signal and respond accordingly.
*/



// =========================================================================================
// Examples of Events
// =========================================================================================

/*
Some very common browser events are:

Clicking a button

Typing inside a textbox

Submitting a form

Moving the mouse

Pressing a keyboard key

Double-clicking an element

Scrolling the page

Resizing the browser window

Loading a webpage

Changing an input field

Whenever one of these actions happens, an event is generated by the browser.
*/



// =========================================================================================
// Real Life Analogy
// =========================================================================================

/*
Imagine a school bell.

The bell rings.

Students hear the sound.

Students immediately leave the classroom.

Here,

Bell Ring
      ↓
Event

Students Leaving
      ↓
Response

Similarly,

Button Click
      ↓
Event

JavaScript Function Runs
      ↓
Response

JavaScript simply waits until an event occurs.
*/



// =========================================================================================
// 2. Event-Driven Programming
// =========================================================================================

/*
JavaScript running inside a browser follows the Event-Driven Programming model.

Instead of continuously executing code from top to bottom forever, JavaScript
mostly waits for events.

Whenever an event occurs, the browser informs JavaScript, and the associated
function is executed.

This is why websites feel interactive.

Without events, webpages would simply display information without responding
to user actions.
*/



// =========================================================================================
// Example HTML
// =========================================================================================

/*

<button>

Click Me

</button>

*/

/*
The browser displays the button.

Nothing happens until the user clicks it.

Once the click occurs, JavaScript can execute the required code.

Notice that JavaScript is waiting.

It is not repeatedly checking whether the button was clicked.

The browser itself detects the click and informs JavaScript.
*/



// =========================================================================================
// 3. Event Handler
// =========================================================================================

/*
An Event Handler is a function that executes whenever a particular event
occurs.

Every event needs some code that should run after the event happens.

That code is written inside a function.

This function is called the Event Handler.

Event

↓

Click

↓

Event Handler

↓

Function Executes
*/



// =========================================================================================
// Example
// =========================================================================================

function greet() {

    console.log("Button Clicked");

}

/*
The function above does nothing by itself.

It simply exists.

Only when it is connected to an event will it execute automatically.
*/



// =========================================================================================
// 4. Using onclick Attribute
// =========================================================================================

/*
One of the oldest ways of handling events is by using the onclick attribute.

Example HTML

<button onclick="greet()">

Click Me

</button>

Whenever the user clicks the button, the browser executes the greet() function.
*/

function greet() {

    console.log("Hello Students");

}

/*
HTML

<button onclick="greet()">

Click Me

</button>

*/

/*
Output (After Clicking):
------------------------

Hello Students

Reason:
-------

The browser detects the click event.

Since the button's onclick attribute contains greet(), the browser executes
that function immediately.
*/



// =========================================================================================
// Another Example
// =========================================================================================

function showMessage() {

    alert("Welcome to JavaScript");

}

/*
HTML

<button onclick="showMessage()">

Show Alert

</button>

*/

/*
Result:
-------

A browser alert box appears.

Reason:
-------

The click event causes the browser to execute showMessage().

The alert() method then displays the message.
*/



// =========================================================================================
// Event Does Not Execute Automatically
// =========================================================================================

function hello() {

    console.log("Hello");

}

/*
Notice something important.

Simply creating a function does not execute it.

The browser executes it only when the specified event occurs.

Until then, JavaScript simply waits.
*/



// =========================================================================================
// Multiple Buttons
// =========================================================================================

/*

<button onclick="hello()">

Button 1

</button>

<button onclick="showMessage()">

Button 2

</button>

*/

/*
Each button has its own event handler.

Clicking Button 1 executes hello().

Clicking Button 2 executes showMessage().

Different events can execute different functions independently.
*/



// =========================================================================================
// Common Browser Events
// =========================================================================================

/*
Event Name         When It Occurs
----------------------------------------------------

click              User clicks an element

dblclick           User double-clicks

mouseover          Mouse enters an element

mouseout           Mouse leaves an element

keydown            Keyboard key is pressed

keyup              Keyboard key is released

submit             Form is submitted

change             Input value changes

input              User types in an input field

focus              Element receives focus

blur               Element loses focus

load               Webpage finishes loading

scroll             User scrolls the page

resize             Browser window size changes

These are only some of the available browser events.

JavaScript supports many more events for different situations.
*/



// =========================================================================================
// Why Events are Important
// =========================================================================================

/*
Imagine an online shopping website.

Without events,

Clicking "Add to Cart"

↓

Nothing happens.

Typing into the search box

↓

Nothing happens.

Submitting a login form

↓

Nothing happens.

Every interactive feature on modern websites depends upon browser events.

Events allow JavaScript to respond immediately to user actions, making websites
dynamic and interactive.
*/



// =========================================================================================
// Important Observation
// =========================================================================================

/*
Remember the complete sequence.

User Performs an Action

↓

Browser Detects the Action

↓

Browser Generates an Event

↓

JavaScript Receives the Event

↓

Event Handler Executes

This entire process happens within a fraction of a second, giving the illusion
that the webpage is reacting instantly to the user's actions.

In the next section, we will learn the modern and recommended way of handling
events using addEventListener(), which is much more flexible and powerful than
the old onclick attribute.
*/


/*******************************************************************************************************
 ************************************** DOM MANIPULATION - PART 1.2F ************************************
 *
 * EVENT LISTENERS (addEventListener)
 *
 * Topics Covered:
 * 1. Why addEventListener() is Needed
 * 2. Syntax of addEventListener()
 * 3. Click Event
 * 4. Named Functions
 * 5. Anonymous Functions
 * 6. Multiple Event Listeners
 * 7. Difference Between onclick and addEventListener()
 *
 * In the previous section, we learned about the onclick attribute. Although it
 * is simple and easy to understand, modern JavaScript applications rarely use
 * it because it has several limitations.
 *
 * The recommended approach is addEventListener(). It separates HTML from
 * JavaScript, keeps the code cleaner, and allows multiple event handlers to be
 * attached to the same element.
 *
 *******************************************************************************************************/



// =========================================================================================
// Example HTML
// =========================================================================================

/*

<button id="btn">

Click Me

</button>

*/




// =========================================================================================
// 1. Selecting the Button
// =========================================================================================

let button = document.getElementById("btn");

/*
Before adding an event listener, JavaScript must first locate the HTML element.

Once the element is selected, we can ask the browser to listen for different
events occurring on that element.
*/



// =========================================================================================
// 2. addEventListener()
// =========================================================================================

/*
Definition:
-----------

The addEventListener() method tells the browser,

"Whenever this particular event occurs on this element, execute the given
function."

Syntax:

element.addEventListener(eventName, functionName);

The first argument is the event name.

The second argument is the function that should execute when the event occurs.
*/

function greet() {

    console.log("Button Clicked");

}

button.addEventListener("click", greet);

/*
Output (After Clicking):
------------------------

Button Clicked

Reason:
-------

The browser listens for the click event.

Whenever the button is clicked, it automatically executes the greet() function.
*/



// =========================================================================================
// Another Example
// =========================================================================================

function welcome() {

    alert("Welcome!");

}

button.addEventListener("click", welcome);

/*
Result:
-------

An alert box appears whenever the button is clicked.

Reason:
-------

The click event triggers the welcome() function.
*/



// =========================================================================================
// 3. Anonymous Function
// =========================================================================================

/*
Instead of creating a separate function, we can write the function directly
inside addEventListener().

Since the function has no name, it is called an Anonymous Function.
*/

button.addEventListener("click", function () {

    console.log("Anonymous Function Executed");

});

/*
Output:
-------

Anonymous Function Executed

Reason:
-------

The anonymous function becomes the event handler.

Whenever the click event occurs, the browser executes it.
*/



// =========================================================================================
// Why Anonymous Functions are Popular
// =========================================================================================

/*
Anonymous functions are commonly used because the event handler is often needed
only once.

Instead of creating a separate named function, developers simply write the
required code directly inside addEventListener().

This keeps related code together and improves readability.
*/



// =========================================================================================
// 4. Arrow Function as Event Handler
// =========================================================================================

button.addEventListener("click", () => {

    console.log("Arrow Function Executed");

});

/*
Output:
-------

Arrow Function Executed

Reason:
-------

Arrow functions can also be used as event handlers.

Their shorter syntax makes them very common in modern JavaScript.
*/



// =========================================================================================
// 5. Multiple Event Listeners
// =========================================================================================

function first() {

    console.log("First Function");

}

function second() {

    console.log("Second Function");

}

button.addEventListener("click", first);

button.addEventListener("click", second);

/*
Output (After Clicking):
------------------------

First Function

Second Function

Reason:
-------

Unlike the onclick property, addEventListener() allows multiple functions to
listen for the same event.

Each registered function executes in the order it was added.
*/



// =========================================================================================
// onclick Property
// =========================================================================================

button.onclick = function () {

    console.log("First");

};

button.onclick = function () {

    console.log("Second");

};

/*
Output:
-------

Second

Reason:
-------

The second assignment replaces the first one.

Only one function can be stored in the onclick property at a time.
*/



// =========================================================================================
// addEventListener()
// =========================================================================================

button.addEventListener("click", function () {

    console.log("First");

});

button.addEventListener("click", function () {

    console.log("Second");

});

/*
Output:
-------

First

Second

Reason:
-------

Each call to addEventListener() registers a new event handler.

No existing handler is removed.
*/



// =========================================================================================
// 6. Event Name
// =========================================================================================

/*
One common beginner mistake is writing

button.addEventListener("onclick", greet);

This is incorrect.

The event name should NOT include the word "on".

Correct:

click

Incorrect:

onclick

Some common event names are:

click

dblclick

mouseover

mouseout

keydown

keyup

submit

change

input

focus

blur
*/



// =========================================================================================
// Common Beginner Mistakes
// =========================================================================================

/*
Mistake 1

button.addEventListener(click, greet);

Incorrect because click is treated as a variable.

Correct:

button.addEventListener("click", greet);

----------------------------------------------------------

Mistake 2

button.addEventListener("click", greet());

Incorrect.

The parentheses execute the function immediately instead of waiting for the
click event.

Correct:

button.addEventListener("click", greet);

Notice that only the function name is passed.

The browser itself calls the function when the event occurs.

----------------------------------------------------------

Mistake 3

Forgetting to select the HTML element before calling addEventListener().

Always remember the sequence:

Select the element.

↓

Call addEventListener().

↓

Wait for the event.

↓

Browser executes the handler.
*/



// =========================================================================================
// Important Observation
// =========================================================================================

/*
The complete flow of event handling is now as follows.

Browser Loads HTML

↓

JavaScript Selects the Element

↓

addEventListener() Registers an Event Handler

↓

User Performs an Action

↓

Browser Detects the Event

↓

Browser Executes the Associated Function

This is the foundation of interactive web development. Almost every dynamic
website uses addEventListener() to respond to user actions such as clicking
buttons, typing into forms, scrolling pages, or pressing keyboard keys.

In the next section, we will study the Event Object, understand how browsers
pass information about an event to JavaScript, and learn why
event.preventDefault() is used during form submission.
*/

/*******************************************************************************************************
 ************************************** DOM MANIPULATION - PART 1.2G ************************************
 *
 * THE EVENT OBJECT & preventDefault()
 *
 * Topics Covered:
 * 1. What is the Event Object?
 * 2. How the Browser Creates the Event Object
 * 3. Accessing the Event Object
 * 4. Default Browser Behaviour
 * 5. preventDefault()
 * 6. Form Submission
 * 7. Reading Input Values
 *
 * Every time an event occurs, the browser creates a special object containing
 * information about that event. This object is known as the Event Object.
 *
 * Instead of only telling JavaScript that "a click happened", the browser also
 * provides additional information such as which element was clicked, which key
 * was pressed, where the mouse pointer was located and much more.
 *
 * The Event Object is automatically created by the browser and passed to the
 * event handler whenever an event occurs.
 *
 *******************************************************************************************************/



// =========================================================================================
// 1. What is the Event Object?
// =========================================================================================

/*
Definition:
-----------

The Event Object is a JavaScript object automatically created by the browser
whenever an event occurs.

This object contains detailed information about that particular event.

Different events create different event objects.

For example,

A click event contains information about the clicked element.

A keyboard event contains information about the pressed key.

A form submit event contains information related to the form submission.

The browser automatically supplies this object to the event handler.

We do not create it ourselves.
*/



// =========================================================================================
// Example HTML
// =========================================================================================

/*

<button id="btn">

Click Me

</button>

*/

let button = document.getElementById("btn");



// =========================================================================================
// Receiving the Event Object
// =========================================================================================

button.addEventListener("click", function (event) {

    console.log(event);

});

/*
Output:
-------

PointerEvent { ... }

(The exact output depends on the browser.)

Reason:
-------

When the button is clicked, the browser creates an Event Object and passes it
to the function.

The parameter "event" receives that object.

The parameter name can be anything.

Common names are:

event

e

evt
*/



// =========================================================================================
// Another Example
// =========================================================================================

button.addEventListener("click", function (e) {

    console.log(e);

});

/*
Output:
-------

PointerEvent { ... }

Reason:
-------

The parameter name is not special.

The browser passes the Event Object to whichever parameter is declared first.
*/



// =========================================================================================
// 2. Some Useful Event Properties
// =========================================================================================

button.addEventListener("click", function (event) {

    console.log(event.type);

});

/*
Output:
-------

click

Reason:
-------

The type property tells us which event occurred.
*/



button.addEventListener("click", function (event) {

    console.log(event.target);

});

/*
Output:
-------

<button id="btn">Click Me</button>

Reason:
-------

The target property returns the HTML element that generated the event.

Since the button was clicked, event.target refers to that button element.
*/



button.addEventListener("click", function (event) {

    console.log(event.target.id);

});

/*
Output:
-------

btn

Reason:
-------

event.target returns the button element.

The id property of that element is "btn".
*/



// =========================================================================================
// 3. Default Browser Behaviour
// =========================================================================================

/*
Many HTML elements have a default behaviour provided by the browser.

Examples include:

Clicking a link

↓

Browser opens another webpage.

------------------------------------------------------

Submitting a form

↓

Browser refreshes the page.

------------------------------------------------------

Clicking a checkbox

↓

Checkbox becomes checked.

------------------------------------------------------

These actions happen automatically without writing any JavaScript.
*/



// =========================================================================================
// Example HTML
// =========================================================================================

/*

<form>

<input type="text">

<button>

Submit

</button>

</form>

*/

/*
When the Submit button is clicked, the browser automatically submits the form.

After submission, the browser usually refreshes the current page.

This behaviour is called the default behaviour.
*/



// =========================================================================================
// 4. preventDefault()
// =========================================================================================

/*
Definition:
-----------

preventDefault() is a method of the Event Object.

It prevents the browser from performing its default action.

Syntax:

event.preventDefault();

This method does not stop the event itself.

Instead, it only prevents the browser's automatic behaviour.
*/



// =========================================================================================
// Form Example
// =========================================================================================

/*

<form id="loginForm">

<input>

<button>

Login

</button>

</form>

*/

let form = document.getElementById("loginForm");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    console.log("Form Submitted");

});

/*
Output:
-------

Form Submitted

Reason:
-------

Normally the browser would refresh the page.

Calling preventDefault() stops the refresh.

The form submission event still occurs, but the browser does not perform its
default action.
*/



// =========================================================================================
// Without preventDefault()
// =========================================================================================

form.addEventListener("submit", function () {

    console.log("Submitting...");

});

/*
Result:
-------

The browser refreshes the page.

Reason:
-------

Since preventDefault() was not called, the browser performs its normal form
submission behaviour after executing the JavaScript code.
*/



// =========================================================================================
// 5. Reading Input Values
// =========================================================================================

/*
Example HTML

<form id="loginForm">

<input id="username">

<button>

Submit

</button>

</form>

*/

let username = document.getElementById("username");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    console.log(username.value);

});

/*
Suppose the user types

Dhiman

inside the textbox.

Output:
-------

Dhiman

Reason:
-------

Every input element has a property called value.

The value property stores whatever the user has entered into that input field.

By preventing the default form submission, the entered value remains available
for JavaScript to process.
*/



// =========================================================================================
// Another Example
// =========================================================================================

form.addEventListener("submit", function (event) {

    event.preventDefault();

    let data = username.value;

    console.log("User Name:", data);

});

/*
Suppose the user enters

Rahul

Output:
-------

User Name: Rahul

Reason:
-------

The text entered by the user is first read using the value property and then
stored inside the variable data before being printed.
*/



// =========================================================================================
// Common Beginner Mistakes
// =========================================================================================

/*
Mistake 1

Forgetting to call preventDefault() while handling form submission.

Result:

The browser refreshes the page before you can process the entered data.

----------------------------------------------------------

Mistake 2

Trying to read

username.innerText

from an input element.

Incorrect.

Input elements do not store user-entered text inside innerText.

The correct property is

username.value

----------------------------------------------------------

Mistake 3

Thinking preventDefault() stops JavaScript execution.

Incorrect.

preventDefault() only prevents the browser's default action.

The remaining JavaScript code inside the event handler continues executing
normally.
*/



// =========================================================================================
// Important Observation
// =========================================================================================

/*
The complete sequence for form handling is as follows.

User Clicks Submit

↓

Browser Creates a Submit Event

↓

Browser Creates an Event Object

↓

Event Handler Executes

↓

event.preventDefault() Stops Page Refresh

↓

JavaScript Reads Input Values

↓

JavaScript Validates or Processes the Data

This is the foundation of almost every login page, registration form, contact
form and search form you encounter on modern websites.

In the next section, we will study the value property of form elements in more
detail and learn how to read data from multiple input fields such as textboxes,
password fields, checkboxes, radio buttons and dropdown lists.
*/


/*******************************************************************************************************
 ************************************** DOM MANIPULATION - PART 1.2H ************************************
 *
 * FORM ELEMENTS & THE value PROPERTY
 *
 * Topics Covered:
 * 1. What is the value Property?
 * 2. Reading Data from Input Fields
 * 3. Changing Input Values
 * 4. Password Fields
 * 5. Textarea
 * 6. Select (Dropdown)
 * 7. Checkbox
 * 8. Radio Button
 *
 * In the previous section, we learned that input elements store the text
 * entered by the user inside a property called "value". In this section,
 * we will study this property in detail and understand how JavaScript reads
 * data entered into different form elements.
 *
 *******************************************************************************************************/



// =========================================================================================
// Example HTML
// =========================================================================================

/*

<input
    type="text"
    id="username"
>

*/

let username = document.getElementById("username");



// =========================================================================================
// 1. The value Property
// =========================================================================================

/*
Definition:
-----------

The value property stores the current value of a form element.

Whenever the user types something into an input field, the browser updates the
value property automatically.

JavaScript can read this property at any time.

Think of the value property as the memory location where the browser keeps the
latest data entered by the user.

Unlike innerText or innerHTML, the value property is specifically designed for
form controls such as input boxes, textareas and dropdown lists.
*/

console.log(username.value);

/*
Suppose the user types:

Dhiman

Output:
-------

Dhiman

Reason:
-------

The browser stores the typed text inside the value property.

Reading username.value returns the current contents of the input field.
*/



// =========================================================================================
// Initially Empty Input
// =========================================================================================

/*
HTML

<input
    type="text"
    id="username"
>

*/

console.log(username.value);

/*
Output:
-------

""

(An empty string)

Reason:
-------

The user has not entered any text.

Therefore, the value property contains an empty string instead of null or
undefined.
*/



// =========================================================================================
// 2. Changing the Value
// =========================================================================================

username.value = "Rahul";

/*
Result on Webpage:
------------------

The textbox now displays

Rahul

Reason:
-------

The value property can be both read and modified.

Assigning a new string updates the contents of the input field immediately.
*/



// =========================================================================================
// Another Example
// =========================================================================================

username.value = "JavaScript";

/*
Result:
-------

The textbox displays

JavaScript

Reason:
-------

The previous value is replaced with the new value.
*/



// =========================================================================================
// 3. Password Input
// =========================================================================================

/*
HTML

<input
    type="password"
    id="password"
>

*/

let password = document.getElementById("password");

console.log(password.value);

/*
Suppose the user types

admin123

Output:
-------

admin123

Reason:
-------

Although the browser hides the password on the screen, JavaScript can still
read the actual value stored inside the input field.
*/



// =========================================================================================
// 4. Textarea
// =========================================================================================

/*
HTML

<textarea id="message"></textarea>

*/

let message = document.getElementById("message");

console.log(message.value);

/*
Suppose the user types

Hello Students

Welcome to JavaScript

Output:
-------

Hello Students
Welcome to JavaScript

Reason:
-------

A textarea also stores its content inside the value property.

Even though it allows multiple lines of text, JavaScript accesses it using
exactly the same property.
*/



// =========================================================================================
// 5. Select (Dropdown)
// =========================================================================================

/*
HTML

<select id="city">

    <option>Delhi</option>

    <option>Mumbai</option>

    <option>Kolkata</option>

</select>

*/

let city = document.getElementById("city");

console.log(city.value);

/*
Suppose the user selects

Mumbai

Output:
-------

Mumbai

Reason:
-------

The value property always returns the currently selected option.
*/



// =========================================================================================
// Changing Dropdown Selection
// =========================================================================================

city.value = "Delhi";

/*
Result:
-------

Delhi becomes the selected option.

Reason:
-------

Assigning a valid option value changes the selected item automatically.
*/



// =========================================================================================
// 6. Checkbox
// =========================================================================================

/*
HTML

<input
    type="checkbox"
    id="agree"
>

*/

let agree = document.getElementById("agree");

console.log(agree.checked);

/*
Output:

false

Reason:
-------

Checkboxes are different from textboxes.

Instead of using value to determine whether the checkbox is selected,
JavaScript uses another property called checked.

checked returns either

true

or

false.
*/



// =========================================================================================
// Checkbox Example
// =========================================================================================

/*
Suppose the user checks the checkbox.
*/

console.log(agree.checked);

/*
Output:
-------

true

Reason:
-------

The checkbox is now selected.

Therefore, checked becomes true.
*/



// =========================================================================================
// 7. Radio Button
// =========================================================================================

/*
HTML

<input
    type="radio"
    id="male"
    name="gender"
>

<input
    type="radio"
    id="female"
    name="gender"
>

*/

let male = document.getElementById("male");

console.log(male.checked);

/*
Output:
-------

false

Reason:
-------

Initially no radio button is selected.

Therefore, checked returns false.
*/



// =========================================================================================
// Selecting a Radio Button
// =========================================================================================

/*
Suppose the user selects

Male
*/

console.log(male.checked);

/*
Output:
-------

true

Reason:
-------

The selected radio button always has checked equal to true.
*/



// =========================================================================================
// Common Beginner Mistakes
// =========================================================================================

/*
Mistake 1

Trying to use

innerText

with an input element.

Incorrect.

Input elements do not display their data using innerText.

Always use

value.

----------------------------------------------------------

Mistake 2

Using value to determine whether a checkbox is selected.

Incorrect.

Checkboxes and radio buttons should use

checked

instead.

----------------------------------------------------------

Mistake 3

Expecting value to return null when nothing is entered.

Incorrect.

An empty textbox returns

""

(an empty string).

----------------------------------------------------------

Mistake 4

Thinking password fields hide data from JavaScript.

Incorrect.

The browser hides the password only from the user's view.

JavaScript can still read it using

password.value.
*/



// =========================================================================================
// Important Observation
// =========================================================================================

/*
Different HTML elements expose different properties.

For example,

Heading

↓

innerText

innerHTML

style

--------------------------------------------

Input

↓

value

placeholder

disabled

--------------------------------------------

Checkbox

↓

checked

--------------------------------------------

Dropdown

↓

value

selectedIndex

--------------------------------------------

One important lesson in DOM Manipulation is that there is no single property
that works for every HTML element.

The property you use depends entirely on the type of element you are working
with.

In the next section, we will study how to create, insert, remove and replace
HTML elements dynamically using JavaScript, allowing us to modify the structure
of the webpage itself rather than just changing its content or appearance.
*/


/*******************************************************************************************************
 ************************************** DOM MANIPULATION - PART 1.3A ************************************
 *
 * CREATING HTML ELEMENTS DYNAMICALLY
 *
 * Topics Covered:
 * 1. Why Create Elements Dynamically?
 * 2. document.createElement()
 * 3. Understanding Newly Created Elements
 * 4. Setting Text Content
 * 5. Setting Attributes
 * 6. Creating Multiple Elements
 *
 * Until now, every HTML element that we worked with already existed inside the
 * HTML file. JavaScript simply selected those elements and modified them.
 *
 * However, modern websites frequently need to create completely new elements
 * while the webpage is running.
 *
 * Examples include:
 *
 * • Adding a new item to a shopping cart.
 * • Displaying a new chat message.
 * • Creating notifications.
 * • Adding comments below a post.
 * • Showing search results.
 *
 * Instead of writing these elements directly inside the HTML file, JavaScript
 * creates them whenever they are required.
 *
 *******************************************************************************************************/



// =========================================================================================
// 1. Why Create Elements Dynamically?
// =========================================================================================

/*
Imagine a To-Do List application.

Initially, the HTML may contain only an input box and an "Add" button.

Every time the user clicks the button, a brand new list item must appear.

Since we cannot predict how many tasks the user will add, we cannot write all
the <li> elements beforehand.

Therefore, JavaScript creates them dynamically while the application is
running.

This ability to create HTML elements at runtime is one of the most powerful
features of DOM Manipulation.
*/



// =========================================================================================
// 2. document.createElement()
// =========================================================================================

/*
Definition:
-----------

The createElement() method creates a brand new HTML element.

Syntax:

document.createElement("tagName");

Notice that we only specify the name of the HTML tag.

The browser creates the corresponding HTML Element Object.

At this stage, the element exists only in JavaScript memory.

It is NOT yet visible on the webpage.
*/

let heading = document.createElement("h1");

console.log(heading);

/*
Output:
-------

<h1></h1>

Reason:
-------

The browser creates a new h1 element.

Since no text has been added, the element is empty.

Also notice that nothing appears on the webpage because the element has not
been inserted into the document.
*/



// =========================================================================================
// Another Example
// =========================================================================================

let paragraph = document.createElement("p");

console.log(paragraph);

/*
Output:
-------

<p></p>

Reason:
-------

A new paragraph element has been created.

Like the previous example, it exists only in memory.
*/



// =========================================================================================
// Creating Different Elements
// =========================================================================================

let image = document.createElement("img");

let button = document.createElement("button");

let list = document.createElement("ul");

console.log(image);

console.log(button);

console.log(list);

/*
Output:
-------

<img>

<button></button>

<ul></ul>

Reason:
-------

createElement() works for almost every HTML tag.

The browser simply creates the requested element object.
*/



// =========================================================================================
// 3. Newly Created Elements are Empty
// =========================================================================================

/*
Every element created using createElement() starts as an empty element.

For example,

let title = document.createElement("h2");

creates

<h2></h2>

There is no text.

There are no attributes.

There are no styles.

There are no child elements.

JavaScript must add all these things manually.
*/



// =========================================================================================
// 4. Adding Text
// =========================================================================================

let title = document.createElement("h2");

title.innerText = "Learning DOM";

console.log(title);

/*
Output:
-------

<h2>Learning DOM</h2>

Reason:
-------

The h2 element was first created as an empty element.

The innerText property then added the required text inside it.
*/



// =========================================================================================
// Using textContent
// =========================================================================================

let message = document.createElement("p");

message.textContent = "JavaScript is Awesome";

console.log(message);

/*
Output:
-------

<p>JavaScript is Awesome</p>

Reason:
-------

textContent works exactly like it does with existing elements.

The newly created element now contains the specified text.
*/



// =========================================================================================
// 5. Setting an id
// =========================================================================================

let box = document.createElement("div");

box.id = "container";

console.log(box);

/*
Output:
-------

<div id="container"></div>

Reason:
-------

Every HTML element contains an id property.

Assigning a value creates the corresponding id attribute.
*/



// =========================================================================================
// Adding a Class
// =========================================================================================

box.className = "card";

console.log(box);

/*
Output:
-------

<div id="container" class="card"></div>

Reason:
-------

The className property represents the HTML class attribute.

Assigning a value creates or updates the class attribute.
*/



// =========================================================================================
// Setting Multiple Properties
// =========================================================================================

let card = document.createElement("div");

card.id = "profile";

card.className = "card";

card.innerText = "Student Profile";

console.log(card);

/*
Output:
-------

<div id="profile" class="card">

Student Profile

</div>

Reason:
-------

A newly created element behaves exactly like any other HTML element.

Properties such as id, className and innerText can be modified immediately
after creation.
*/



// =========================================================================================
// Styling a Newly Created Element
// =========================================================================================

card.style.backgroundColor = "skyblue";

card.style.padding = "20px";

card.style.border = "2px solid black";

/*
Result:
-------

The style properties are stored inside the element.

However, nothing is yet visible on the webpage.

Reason:
-------

The element still exists only in JavaScript memory.

It has not been inserted into the HTML document.
*/



// =========================================================================================
// Creating Multiple Elements
// =========================================================================================

let first = document.createElement("li");

let second = document.createElement("li");

let third = document.createElement("li");

first.innerText = "HTML";

second.innerText = "CSS";

third.innerText = "JavaScript";

/*
At this point, JavaScript has successfully created three separate list items.

Each element exists independently in memory.

Still, none of them are visible because they have not been attached to the DOM.
*/



// =========================================================================================
// Common Beginner Mistakes
// =========================================================================================

/*
Mistake 1

Thinking createElement() automatically displays the element.

Incorrect.

It only creates the element.

The element must later be inserted into the document.

----------------------------------------------------------

Mistake 2

Expecting the browser to add text automatically.

Incorrect.

Newly created elements are empty.

JavaScript must add text manually.

----------------------------------------------------------

Mistake 3

Thinking newly created elements are different from existing elements.

Incorrect.

Once created, they support the same properties such as

innerText

style

id

className

innerHTML

textContent

and many others.
*/



// =========================================================================================
// Important Observation
// =========================================================================================

/*
The complete process of creating an element consists of several steps.

Step 1

JavaScript creates the element.

↓

Step 2

JavaScript adds text, attributes and styles.

↓

Step 3

The element remains inside memory.

↓

Step 4

JavaScript inserts the element into the DOM.

Only after the final step does the user see the element on the webpage.

In the next section, we will learn how to insert newly created elements into
the document using methods such as appendChild(), append(), prepend(),
before() and after().
*/

/*******************************************************************************************************
 ************************************** DOM MANIPULATION - PART 1.3B ************************************
 *
 * INSERTING ELEMENTS INTO THE DOM
 *
 * Topics Covered:
 * 1. Why Newly Created Elements Are Not Visible
 * 2. appendChild()
 * 3. append()
 * 4. prepend()
 * 5. before()
 * 6. after()
 * 7. Understanding Parent and Child Elements
 *
 * In the previous section, we learned how to create new HTML elements using
 * document.createElement(). However, simply creating an element does not make
 * it appear on the webpage.
 *
 * A newly created element exists only in the browser's memory. To display it
 * on the webpage, it must become part of the Document Object (DOM Tree).
 *
 * This process is called inserting or appending an element into the DOM.
 *
 *******************************************************************************************************/



// =========================================================================================
// Example HTML
// =========================================================================================

/*

<body>

    <div id="container">

    </div>

</body>

*/




// =========================================================================================
// 1. Selecting the Parent Element
// =========================================================================================

/*
Before inserting a new element, JavaScript must know where it should be placed.

The existing HTML element that receives the new element is called the Parent
Element.

The newly inserted element is called the Child Element.
*/

let container = document.getElementById("container");



// =========================================================================================
// 2. Creating a New Element
// =========================================================================================

let heading = document.createElement("h1");

heading.innerText = "Welcome to JavaScript";

/*
At this point,

heading

exists only in memory.

Nothing appears on the webpage because the element has not yet been attached to
the Document Object.
*/



// =========================================================================================
// 3. appendChild()
// =========================================================================================

/*
Definition:
-----------

appendChild() inserts a child element at the end of a parent element.

Syntax:

parentElement.appendChild(childElement);

The parent already exists inside the HTML document.

The child may be either newly created or an existing element.
*/

container.appendChild(heading);

/*
Result on Webpage:
------------------

<div id="container">

    <h1>Welcome to JavaScript</h1>

</div>

Reason:
-------

The heading element becomes the last child of the container element.

Since it is now part of the DOM Tree, the browser immediately displays it.
*/



// =========================================================================================
// Another Example
// =========================================================================================

let paragraph = document.createElement("p");

paragraph.innerText = "Learning DOM Manipulation";

container.appendChild(paragraph);

/*
Result:
-------

<div id="container">

    <h1>Welcome to JavaScript</h1>

    <p>Learning DOM Manipulation</p>

</div>

Reason:
-------

appendChild() always inserts the new element after the existing children.
*/



// =========================================================================================
// Parent and Child Relationship
// =========================================================================================

/*
After inserting the elements, the DOM Tree looks similar to this.

container
     |
     |------ h1
     |
     |------ p

Here,

container

is the Parent Element.

The h1 and p elements are Child Elements.

Almost every DOM operation is based on this parent-child relationship.
*/



// =========================================================================================
// 4. append()
// =========================================================================================

/*
The append() method is similar to appendChild().

It also inserts content at the end of the parent element.

However, append() is more flexible.

It can insert both HTML elements and ordinary text.
*/

let button = document.createElement("button");

button.innerText = "Click Me";

container.append(button);

/*
Result:
-------

The button appears after the paragraph.

Reason:
-------

append() inserts the new element as the last child of the container.
*/



// =========================================================================================
// append() with Text
// =========================================================================================

container.append(" JavaScript is Fun");

/*
Result:
-------

JavaScript is Fun

appears after the last child element.

Reason:
-------

Unlike appendChild(), append() can directly insert text nodes without creating
a separate HTML element.
*/



// =========================================================================================
// appendChild() vs append()
// =========================================================================================

/*
appendChild()

↓

Accepts only one HTML node.

--------------------------------------------

append()

↓

Accepts HTML nodes.

Accepts text.

Can accept multiple values.

Because of its flexibility, append() is commonly used in modern JavaScript.
*/



// =========================================================================================
// 5. prepend()
// =========================================================================================

/*
Definition:
-----------

prepend() inserts content at the beginning of the parent element.

Instead of adding content after existing children, it places the new content
before all current children.
*/

let title = document.createElement("h2");

title.innerText = "Student Details";

container.prepend(title);

/*
Result:
-------

<h2>Student Details</h2>

appears before every other child inside the container.

Reason:
-------

prepend() always inserts content as the first child.
*/



// =========================================================================================
// 6. before()
// =========================================================================================

/*
The before() method inserts content immediately before an existing element.

Unlike append() and prepend(), the insertion occurs outside the selected
element rather than inside it.
*/

let note = document.createElement("p");

note.innerText = "This paragraph appears before the container.";

container.before(note);

/*
Result:
-------

<p>This paragraph appears before the container.</p>

<div id="container">

...

</div>

Reason:
-------

The paragraph becomes a sibling of the container instead of its child.
*/



// =========================================================================================
// 7. after()
// =========================================================================================

/*
The after() method inserts content immediately after an existing element.
*/

let footer = document.createElement("p");

footer.innerText = "End of Container";

container.after(footer);

/*
Result:
-------

<div id="container">

...

</div>

<p>End of Container</p>

Reason:
-------

The paragraph is inserted after the container element.

It becomes another sibling in the DOM Tree.
*/



// =========================================================================================
// Visual Representation
// =========================================================================================

/*
Suppose the HTML is

<body>

    <div id="container">

        <h1>Heading</h1>

    </div>

</body>

Using

container.prepend(newElement);

creates

<div id="container">

    New Element

    <h1>Heading</h1>

</div>

----------------------------------------------------------

Using

container.append(newElement);

creates

<div id="container">

    <h1>Heading</h1>

    New Element

</div>

----------------------------------------------------------

Using

container.before(newElement);

creates

New Element

<div id="container">

...

</div>

----------------------------------------------------------

Using

container.after(newElement);

creates

<div id="container">

...

</div>

New Element
*/



// =========================================================================================
// Common Beginner Mistakes
// =========================================================================================

/*
Mistake 1

Creating an element but forgetting to insert it into the DOM.

Result:

Nothing appears on the webpage.

----------------------------------------------------------

Mistake 2

Trying to use appendChild() with plain text.

Incorrect.

appendChild() expects a Node object.

Use append() when inserting ordinary text.

----------------------------------------------------------

Mistake 3

Confusing append() with after().

append()

↓

Inserts inside the parent element.

after()

↓

Inserts outside the selected element.
*/



// =========================================================================================
// Important Observation
// =========================================================================================

/*
Creating an element and inserting an element are two completely different
operations.

document.createElement()

↓

Creates an HTML element in memory.

----------------------------------------------------------

appendChild()

append()

prepend()

before()

after()

↓

Insert the element into the Document Object.

Only after insertion does the browser render the element on the webpage.

In the next section, we will learn how to remove existing HTML elements using
remove() and removeChild(), and how JavaScript can completely delete elements
from the DOM Tree.
*/

/*******************************************************************************************************
 ************************************** DOM MANIPULATION - PART 1.3C ************************************
 *
 * REMOVING HTML ELEMENTS FROM THE DOM
 *
 * Topics Covered:
 * 1. Why Remove Elements?
 * 2. remove()
 * 3. removeChild()
 * 4. Parent-Child Relationship
 * 5. Removing Dynamically Created Elements
 * 6. Difference Between remove() and removeChild()
 *
 * Until now, we have learned how to create new HTML elements and insert them
 * into the webpage. However, many web applications also need to remove
 * existing elements.
 *
 * For example:
 *
 * • Removing a completed task from a To-Do List.
 * • Deleting a notification.
 * • Removing an item from a shopping cart.
 * • Deleting a comment.
 * • Closing a popup window.
 *
 * JavaScript provides simple methods for removing elements from the DOM Tree.
 *
 *******************************************************************************************************/



// =========================================================================================
// Example HTML
// =========================================================================================

/*

<div id="container">

    <h1 id="title">

        Learning JavaScript

    </h1>

    <p id="message">

        DOM Manipulation

    </p>

</div>

*/




// =========================================================================================
// 1. Selecting the Element
// =========================================================================================

let title = document.getElementById("title");

/*
Before removing an element, JavaScript must first locate that element inside
the Document Object.

Once the element has been selected, it can be removed from the DOM.
*/



// =========================================================================================
// 2. remove()
// =========================================================================================

/*
Definition:
-----------

The remove() method removes the selected element from the DOM.

Syntax:

element.remove();

After removal, the browser immediately updates the webpage.
*/

title.remove();

/*
Result on Webpage:
------------------

<div id="container">

    <p id="message">

        DOM Manipulation

    </p>

</div>

Reason:
-------

The h1 element is completely removed from the Document Object.

Since it no longer exists in the DOM Tree, the browser stops displaying it.
*/



// =========================================================================================
// Another Example
// =========================================================================================

let message = document.getElementById("message");

message.remove();

/*
Result:
-------

<div id="container">

</div>

Reason:
-------

The paragraph element is removed.

The container now has no child elements.
*/



// =========================================================================================
// What Actually Happens?
// =========================================================================================

/*
Suppose the original DOM Tree was

container
    |
    |------ h1
    |
    |------ p

After removing the h1 element

container
    |
    |------ p

After removing the paragraph

container

The browser updates the DOM Tree immediately after each removal.
*/



// =========================================================================================
// 3. removeChild()
// =========================================================================================

/*
Before the remove() method became available, JavaScript used removeChild().

Unlike remove(), removeChild() is called on the parent element.

Syntax:

parent.removeChild(child);

Therefore, JavaScript must know both

The Parent Element

and

The Child Element.
*/

let container = document.getElementById("container");

let heading = document.getElementById("title");

container.removeChild(heading);

/*
Result:
-------

The heading is removed from the container.

Reason:
-------

The parent element removes one of its children.
*/



// =========================================================================================
// Parent-Child Relationship
// =========================================================================================

/*
Notice carefully.

remove()

↓

Called on the child element.

----------------------------------------------------

removeChild()

↓

Called on the parent element.

This difference is important because both methods remove elements in different
ways.
*/



// =========================================================================================
// Another Example
// =========================================================================================

let paragraph = document.getElementById("message");

container.removeChild(paragraph);

/*
Result:
-------

The paragraph disappears from the webpage.

Reason:
-------

The parent element deletes one of its child elements.
*/



// =========================================================================================
// Removing Dynamically Created Elements
// =========================================================================================

let button = document.createElement("button");

button.innerText = "Click Me";

container.append(button);

/*
The button is now visible.

Suppose we later execute
*/

button.remove();

/*
Result:
-------

The button disappears.

Reason:
-------

There is no difference between removing an existing HTML element and a
dynamically created element.

Once an element becomes part of the DOM Tree, both can be removed in exactly
the same way.
*/



// =========================================================================================
// remove() vs removeChild()
// =========================================================================================

/*
remove()

↓

Simple.

Called directly on the element.

--------------------------------------------

removeChild()

↓

Requires the parent element.

Removes one specific child.

--------------------------------------------

Modern JavaScript usually prefers remove() because it is shorter and easier to
understand.
*/



// =========================================================================================
// What Happens to JavaScript Variables?
// =========================================================================================

let headingElement = document.getElementById("title");

headingElement.remove();

console.log(headingElement);

/*
Output:
-------

<h1 id="title">

Learning JavaScript

</h1>

Reason:
-------

The variable still holds a reference to the removed element.

The element has been removed from the DOM Tree, but the JavaScript object still
exists until there are no references pointing to it.

Later, JavaScript's Garbage Collector may free the memory when the object is no
longer needed.
*/



// =========================================================================================
// Common Beginner Mistakes
// =========================================================================================

/*
Mistake 1

Thinking remove() deletes the JavaScript variable.

Incorrect.

It only removes the element from the DOM.

----------------------------------------------------------

Mistake 2

Trying to remove an element before selecting it.

Always select the element first.

----------------------------------------------------------

Mistake 3

Calling removeChild() on the child element.

Incorrect.

removeChild() belongs to the parent element.

----------------------------------------------------------

Mistake 4

Thinking remove() permanently destroys the HTML file.

Incorrect.

The HTML file stored on your computer remains unchanged.

Only the DOM created inside the browser is modified.
*/



// =========================================================================================
// Important Observation
// =========================================================================================

/*
Remember the complete lifecycle of an HTML element.

HTML File

↓

Browser Creates DOM

↓

JavaScript Selects Element

↓

JavaScript Modifies Element

↓

JavaScript Removes Element

The original HTML file never changes.

Only the DOM inside the browser changes while the webpage is running.

This is one of the most important concepts in DOM Manipulation.

In the next section, we will study how to replace existing elements using
replaceChild() and replaceWith(), allowing one HTML element to be exchanged for
another without rebuilding the entire webpage.
*/