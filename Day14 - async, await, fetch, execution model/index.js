/******************************************23rd June***************************************************
 *********************************** JAVASCRIPT EXECUTION MODEL ***************************************
 *
 * Topics Covered:
 * 1. What Happens When a JavaScript Program Starts?
 * 2. JavaScript is a Single-Threaded Language
 * 3. What Does Single Thread Mean?
 * 4. JavaScript Executes One Line at a Time
 * 5. Why JavaScript Was Designed This Way
 * 6. Advantages of Single-Threaded Execution
 * 7. Limitations of Single-Threaded Execution
 * 8. Introduction to Synchronous and Asynchronous Programming
 *
 * Before understanding setTimeout(), Promises, fetch(), async/await or the Event Loop,
 * we must first understand how JavaScript executes code.
 *
 * Everything that happens in JavaScript starts from this topic.
 *
 * If this foundation is clear, then asynchronous programming becomes much easier to
 * understand.
 *******************************************************************************************************/



// =========================================================================================
// 1. What Happens When a JavaScript Program Starts?
// =========================================================================================

/*
Whenever a JavaScript program starts executing,

the JavaScript Engine first reads the program from the very first line.

It does NOT randomly jump to different lines.

Instead,

it starts from Line 1,

then Line 2,

then Line 3,

and continues until the last line.

Example
*/

console.log("Line 1");

console.log("Line 2");

console.log("Line 3");

/*
Output

Line 1

Line 2

Line 3

Notice something.

JavaScript executed every statement in exactly the same order
in which they were written.

This behavior is called Sequential Execution.

Definition

----------

Sequential Execution means executing statements one after another
from top to bottom.

This is the default execution behavior of JavaScript.
*/





// =========================================================================================
// 2. JavaScript is a Single-Threaded Language
// =========================================================================================

/*
One of the most important characteristics of JavaScript is:

JavaScript is a Single-Threaded Language.

This sentence is asked frequently in interviews.

Therefore,

it is very important to understand its meaning instead of memorizing it.

Question

What is a Thread?

A Thread is simply a path of execution.

Think of it as a worker performing tasks.

If a program has

One Worker

↓

One Thread

If a program has

Five Workers

↓

Five Threads

JavaScript has only ONE execution thread.

Therefore,

it has only ONE worker to execute all instructions.
*/





// =========================================================================================
// Real Life Analogy
// =========================================================================================

/*
Imagine one teacher checking answer sheets.

Suppose there are 50 answer sheets.

Can the teacher check all 50 answer sheets at exactly the same time?

No.

The teacher checks

Paper 1

↓

Paper 2

↓

Paper 3

↓

Paper 4

One after another.

Exactly the same thing happens inside JavaScript.

JavaScript has only one worker.

Therefore,

it executes only one task at a time.
*/





// =========================================================================================
// 3. What Does Single Thread Mean?
// =========================================================================================

/*
Suppose JavaScript receives the following code.
*/

console.log("First");

console.log("Second");

console.log("Third");

/*
Can JavaScript execute

First

and

Second

at exactly the same time?

No.

It first completes

First

Only after finishing it,

it starts

Second.

Similarly,

Third begins only after Second finishes.

This is because there is only one execution thread.

One task finishes completely before the next task begins.

This behavior is known as Single-Threaded Execution.
*/





// =========================================================================================
// Visual Representation
// =========================================================================================

/*
JavaScript Engine

↓

Execute Line 1

↓

Finish

↓

Execute Line 2

↓

Finish

↓

Execute Line 3

↓

Finish

At no point are two JavaScript statements executed simultaneously.

Only one instruction is active at any given moment.
*/





// =========================================================================================
// 4. JavaScript Executes One Line at a Time
// =========================================================================================

/*
Many beginners think JavaScript somehow executes multiple statements together.

Actually,

it does not.

Consider the following example.
*/

console.log("A");

console.log("B");

console.log("C");

console.log("D");

/*
Execution Order

↓

A

↓

B

↓

C

↓

D

Notice something important.

JavaScript never skips a statement.

It always follows the written order unless a statement changes the flow
(for example, a function call, loop or conditional).

This line-by-line execution is one of the reasons JavaScript programs are
easy to understand.
*/





// =========================================================================================
// 5. Why Was JavaScript Designed as a Single-Threaded Language?
// =========================================================================================

/*
JavaScript was originally created to make webpages interactive.

Examples include

• Button Clicks

• Form Validation

• Showing Messages

• Changing HTML

• Updating CSS

These tasks generally require predictable execution.

If multiple threads modified the same webpage simultaneously,

unexpected problems could occur.

For example,

one thread might delete an element

while another thread is trying to update it.

This could create inconsistent results.

Using one execution thread avoids these conflicts.

Everything happens in a controlled order.
*/





// =========================================================================================
// 6. Advantages of Single-Threaded Execution
// =========================================================================================

/*
Since only one instruction executes at a time,

JavaScript becomes easier to understand.

Advantages include:

• Predictable execution order

• Easier debugging

• No thread synchronization problems

• Less memory overhead

• Simpler programming model

These advantages made JavaScript an excellent language for browser-based applications.
*/





// =========================================================================================
// 7. Limitation of Single-Threaded Execution
// =========================================================================================

/*
Although single-threaded execution is simple,

it also introduces a major problem.

Suppose JavaScript needs five seconds to complete one task.

During those five seconds,

can it execute the next statement?

No.

Everything waits.

Example
*/

console.log("Start");

/*
Imagine a task that takes 5 seconds.

*/

console.log("End");

/*
Output

Start

(wait 5 seconds)

End

Notice something.

While the long task was running,

JavaScript could not continue executing the next statement.

The entire program was forced to wait.

This behavior is called Blocking.

Blocking means one long-running task prevents other code from executing.
*/





// =========================================================================================
// Real Life Analogy
// =========================================================================================

/*
Imagine there is only one cashier at a supermarket.

A customer arrives with two items.

The cashier starts billing.

Suddenly,

another customer arrives with one hundred items.

Can the cashier serve both customers together?

No.

The second customer must wait until the first customer's billing is complete.

Everyone behind also keeps waiting.

This waiting problem is exactly what happens in a single-threaded system.

One long task blocks everything behind it.
*/





// =========================================================================================
// 8. Need for Asynchronous Programming
// =========================================================================================

/*
Suppose JavaScript needs to:

• Download data from the Internet

• Wait for a timer

• Read a large file

• Wait for a user's click

These tasks may take seconds to complete.

If JavaScript simply waits for each one,

the webpage would become completely unresponsive.

Buttons would stop working.

Animations would freeze.

The browser would appear to hang.

Clearly,

this is not acceptable.

JavaScript needed a way to continue executing other statements
while long-running operations were being completed.

This requirement gave rise to

Asynchronous Programming.

In the next section,

we will learn the difference between Synchronous Programming and
Asynchronous Programming, and understand how JavaScript performs
long-running tasks without blocking the execution of the remaining code.
*/


/*******************************************************************************************************
 ****************************** SYNCHRONOUS AND ASYNCHRONOUS PROGRAMMING *******************************
 *
 * Topics Covered:
 * 1. What is Synchronous Programming?
 * 2. Characteristics of Synchronous Execution
 * 3. What is Asynchronous Programming?
 * 4. Why Asynchronous Programming is Needed
 * 5. Synchronous vs Asynchronous
 * 6. Blocking vs Non-Blocking
 * 7. Real-World Examples
 * 8. Introduction to Browser APIs
 *
 * In the previous section, we learned that JavaScript is a Single-Threaded Language.
 *
 * Since JavaScript has only one execution thread,
 * it executes one task at a time.
 *
 * But this raises an important question.
 *
 * Suppose JavaScript needs to wait for:
 *
 * • An Internet request
 * • A Timer
 * • A User Click
 * • A File Download
 *
 * Should the entire program stop while waiting?
 *
 * Obviously, that would make the webpage very slow and unresponsive.
 *
 * To solve this problem, JavaScript supports two execution models:
 *
 * • Synchronous Programming
 * • Asynchronous Programming
 *******************************************************************************************************/



// =========================================================================================
// 1. What is Synchronous Programming?
// =========================================================================================

/*
Definition

----------

Synchronous Programming means JavaScript executes one statement completely
before moving to the next statement.

Each instruction waits for the previous instruction to finish.

Nothing executes simultaneously.

Everything happens one after another.
*/

console.log("First");

console.log("Second");

console.log("Third");

/*
Output

First

Second

Third

Notice something.

JavaScript did not print

Second

before

First.

Nor did it print

Third

before

Second.

Every statement waited for the previous statement to finish.

This waiting behavior is called Synchronous Execution.
*/





// =========================================================================================
// Visual Representation
// =========================================================================================

/*
Program Starts

↓

Execute Line 1

↓

Complete

↓

Execute Line 2

↓

Complete

↓

Execute Line 3

↓

Complete

Only after one instruction finishes,
does the next instruction begin.
*/





// =========================================================================================
// 2. Characteristics of Synchronous Programming
// =========================================================================================

/*
Synchronous Programming has the following characteristics.

• Executes one line at a time.

• Follows the written order.

• Every instruction waits for the previous instruction.

• Easy to understand.

• Predictable execution.

Since JavaScript is single-threaded,

Synchronous Programming is its default behavior.
*/





// =========================================================================================
// 3. Problem with Synchronous Programming
// =========================================================================================

/*
Now imagine the following situation.

JavaScript needs to download data from the Internet.

Downloading may take

2 seconds

5 seconds

or even

10 seconds.

Question

Should JavaScript stop executing everything
until the download finishes?

If the answer were Yes,

the webpage would freeze.

Buttons would stop working.

Animations would stop.

The browser would appear to hang.

Clearly,

this is not acceptable.

Therefore,

JavaScript needed another way of executing long-running operations.
*/





// =========================================================================================
// 4. What is Asynchronous Programming?
// =========================================================================================

/*
Definition

----------

Asynchronous Programming allows JavaScript to start a long-running task
without waiting for it to finish.

Instead,

JavaScript continues executing the remaining synchronous statements.

When the long-running task finishes,

its result is processed later.

Notice something very important.

JavaScript is still Single-Threaded.

Asynchronous Programming does NOT create another JavaScript thread.

Instead,

JavaScript temporarily hands long-running tasks
to the Browser.

The Browser performs those tasks independently,

while JavaScript continues executing other code.
*/





// =========================================================================================
// Real Life Analogy
// =========================================================================================

/*
Imagine you order food at a restaurant.

You place the order.

The chef starts cooking.

Do you stand beside the chef for 20 minutes?

No.

You continue talking with your friends.

Once the food is ready,

the waiter brings it to you.

Similarly,

JavaScript gives the long-running task to the Browser,

continues executing other statements,

and receives the result later.
*/





// =========================================================================================
// 5. Synchronous vs Asynchronous
// =========================================================================================

/*
Synchronous Programming

-----------------------------------------

Task 1

↓

Wait

↓

Task 2

↓

Wait

↓

Task 3

Everything waits for the previous task.

==========================================================

Asynchronous Programming

-----------------------------------------

Start Long Task

↓

Continue Other Statements

↓

Long Task Completes

↓

Process Result

Notice the difference.

Synchronous waits.

Asynchronous continues working.
*/





// =========================================================================================
// 6. Blocking vs Non-Blocking
// =========================================================================================

/*
These two terms are frequently used while discussing JavaScript.

Blocking

----------

Blocking means one task prevents every other task
from executing.

Example

A five-second task starts.

JavaScript cannot execute anything else
until that task finishes.

Everything waits.

This is called Blocking.

------------------------------------------------------------

Non-Blocking

----------

Non-Blocking means JavaScript does not wait.

Instead,

it allows long-running operations to happen separately,

while continuing with other synchronous code.

This is exactly how asynchronous programming behaves.
*/





// =========================================================================================
// Example
// =========================================================================================

console.log("Program Started");

/*
Imagine a task that takes five seconds.

*/

console.log("Program Continues");

/*
In synchronous programming,

the second statement would wait.

In asynchronous programming,

JavaScript immediately continues with

Program Continues

while the long-running task is handled elsewhere.
*/





// =========================================================================================
// 7. Where Do Asynchronous Tasks Go?
// =========================================================================================

/*
Now an important question arises.

If JavaScript is executing other statements,

who is performing the timer?

Who is downloading data from the Internet?

Who is waiting for a button click?

The answer is

Browser APIs.

Browser APIs are features provided by the Web Browser,
not by JavaScript itself.

Whenever JavaScript encounters certain asynchronous functions,

it asks the Browser to handle them.

Examples include

• setTimeout()

• fetch()

• DOM Events

• Geolocation

• File Reading

While the Browser performs these tasks,

JavaScript continues executing the remaining synchronous statements.
*/





// =========================================================================================
// 8. Introduction to Browser APIs
// =========================================================================================

/*
One common misconception is that

setTimeout()

belongs to JavaScript.

Actually,

it does not.

Similarly,

fetch()

is also not part of the JavaScript language itself.

Both are provided by the Browser Environment.

The sequence becomes

JavaScript encounters an asynchronous function.

↓

JavaScript hands it to the Browser.

↓

Browser starts performing the task.

↓

JavaScript immediately continues executing
the remaining synchronous code.

↓

When the Browser finishes,

it informs JavaScript that the task is complete.

Exactly how this communication happens
will be understood in the next section,

where we study

• Call Stack

• Browser APIs

• Callback Queue

• Event Loop

which together form the complete JavaScript Asynchronous Execution Model.
*/


/*******************************************************************************************************
 ****************************** SYNCHRONOUS AND ASYNCHRONOUS PROGRAMMING *******************************
 *
 * Topics Covered:
 * 1. What is Synchronous Programming?
 * 2. Characteristics of Synchronous Execution
 * 3. What is Asynchronous Programming?
 * 4. Why Asynchronous Programming is Needed
 * 5. Synchronous vs Asynchronous
 * 6. Blocking vs Non-Blocking
 * 7. Real-World Examples
 * 8. Introduction to Browser APIs
 *
 * In the previous section, we learned that JavaScript is a Single-Threaded Language.
 *
 * Since JavaScript has only one execution thread,
 * it executes one task at a time.
 *
 * But this raises an important question.
 *
 * Suppose JavaScript needs to wait for:
 *
 * • An Internet request
 * • A Timer
 * • A User Click
 * • A File Download
 *
 * Should the entire program stop while waiting?
 *
 * Obviously, that would make the webpage very slow and unresponsive.
 *
 * To solve this problem, JavaScript supports two execution models:
 *
 * • Synchronous Programming
 * • Asynchronous Programming
 *******************************************************************************************************/



// =========================================================================================
// 1. What is Synchronous Programming?
// =========================================================================================

/*
Definition

----------

Synchronous Programming means JavaScript executes one statement completely
before moving to the next statement.

Each instruction waits for the previous instruction to finish.

Nothing executes simultaneously.

Everything happens one after another.
*/

console.log("First");

console.log("Second");

console.log("Third");

/*
Output

First

Second

Third

Notice something.

JavaScript did not print

Second

before

First.

Nor did it print

Third

before

Second.

Every statement waited for the previous statement to finish.

This waiting behavior is called Synchronous Execution.
*/





// =========================================================================================
// Visual Representation
// =========================================================================================

/*
Program Starts

↓

Execute Line 1

↓

Complete

↓

Execute Line 2

↓

Complete

↓

Execute Line 3

↓

Complete

Only after one instruction finishes,
does the next instruction begin.
*/





// =========================================================================================
// 2. Characteristics of Synchronous Programming
// =========================================================================================

/*
Synchronous Programming has the following characteristics.

• Executes one line at a time.

• Follows the written order.

• Every instruction waits for the previous instruction.

• Easy to understand.

• Predictable execution.

Since JavaScript is single-threaded,

Synchronous Programming is its default behavior.
*/





// =========================================================================================
// 3. Problem with Synchronous Programming
// =========================================================================================

/*
Now imagine the following situation.

JavaScript needs to download data from the Internet.

Downloading may take

2 seconds

5 seconds

or even

10 seconds.

Question

Should JavaScript stop executing everything
until the download finishes?

If the answer were Yes,

the webpage would freeze.

Buttons would stop working.

Animations would stop.

The browser would appear to hang.

Clearly,

this is not acceptable.

Therefore,

JavaScript needed another way of executing long-running operations.
*/





// =========================================================================================
// 4. What is Asynchronous Programming?
// =========================================================================================

/*
Definition

----------

Asynchronous Programming allows JavaScript to start a long-running task
without waiting for it to finish.

Instead,

JavaScript continues executing the remaining synchronous statements.

When the long-running task finishes,

its result is processed later.

Notice something very important.

JavaScript is still Single-Threaded.

Asynchronous Programming does NOT create another JavaScript thread.

Instead,

JavaScript temporarily hands long-running tasks
to the Browser.

The Browser performs those tasks independently,

while JavaScript continues executing other code.
*/





// =========================================================================================
// Real Life Analogy
// =========================================================================================

/*
Imagine you order food at a restaurant.

You place the order.

The chef starts cooking.

Do you stand beside the chef for 20 minutes?

No.

You continue talking with your friends.

Once the food is ready,

the waiter brings it to you.

Similarly,

JavaScript gives the long-running task to the Browser,

continues executing other statements,

and receives the result later.
*/





// =========================================================================================
// 5. Synchronous vs Asynchronous
// =========================================================================================

/*
Synchronous Programming

-----------------------------------------

Task 1

↓

Wait

↓

Task 2

↓

Wait

↓

Task 3

Everything waits for the previous task.

==========================================================

Asynchronous Programming

-----------------------------------------

Start Long Task

↓

Continue Other Statements

↓

Long Task Completes

↓

Process Result

Notice the difference.

Synchronous waits.

Asynchronous continues working.
*/





// =========================================================================================
// 6. Blocking vs Non-Blocking
// =========================================================================================

/*
These two terms are frequently used while discussing JavaScript.

Blocking

----------

Blocking means one task prevents every other task
from executing.

Example

A five-second task starts.

JavaScript cannot execute anything else
until that task finishes.

Everything waits.

This is called Blocking.

------------------------------------------------------------

Non-Blocking

----------

Non-Blocking means JavaScript does not wait.

Instead,

it allows long-running operations to happen separately,

while continuing with other synchronous code.

This is exactly how asynchronous programming behaves.
*/





// =========================================================================================
// Example
// =========================================================================================

console.log("Program Started");

/*
Imagine a task that takes five seconds.

*/

console.log("Program Continues");

/*
In synchronous programming,

the second statement would wait.

In asynchronous programming,

JavaScript immediately continues with

Program Continues

while the long-running task is handled elsewhere.
*/





// =========================================================================================
// 7. Where Do Asynchronous Tasks Go?
// =========================================================================================

/*
Now an important question arises.

If JavaScript is executing other statements,

who is performing the timer?

Who is downloading data from the Internet?

Who is waiting for a button click?

The answer is

Browser APIs.

Browser APIs are features provided by the Web Browser,
not by JavaScript itself.

Whenever JavaScript encounters certain asynchronous functions,

it asks the Browser to handle them.

Examples include

• setTimeout()

• fetch()

• DOM Events

• Geolocation

• File Reading

While the Browser performs these tasks,

JavaScript continues executing the remaining synchronous statements.
*/





// =========================================================================================
// 8. Introduction to Browser APIs
// =========================================================================================

/*
One common misconception is that

setTimeout()

belongs to JavaScript.

Actually,

it does not.

Similarly,

fetch()

is also not part of the JavaScript language itself.

Both are provided by the Browser Environment.

The sequence becomes

JavaScript encounters an asynchronous function.

↓

JavaScript hands it to the Browser.

↓

Browser starts performing the task.

↓

JavaScript immediately continues executing
the remaining synchronous code.

↓

When the Browser finishes,

it informs JavaScript that the task is complete.

Exactly how this communication happens
will be understood in the next section,

where we study

• Call Stack

• Browser APIs

• Callback Queue

• Event Loop

which together form the complete JavaScript Asynchronous Execution Model.
*/


/*******************************************************************************************************
 ***************************************** CALL STACK **************************************************
 *
 * Topics Covered:
 * 1. What is the Call Stack?
 * 2. Why JavaScript Needs a Call Stack
 * 3. How the Call Stack Works
 * 4. LIFO (Last In, First Out)
 * 5. Function Execution Inside the Call Stack
 * 6. Call Stack and Synchronous Execution
 * 7. Stack Overflow
 *
 * Until now, we know that JavaScript executes one statement at a time.
 *
 * But another important question arises...
 *
 * "How does JavaScript remember which function is currently executing?"
 *
 * "If one function calls another function, how does JavaScript know where to return?"
 *
 * The answer is the Call Stack.
 *
 * The Call Stack is one of the most important concepts in JavaScript because every
 * JavaScript program executes through it.
 *******************************************************************************************************/



// =========================================================================================
// 1. What is the Call Stack?
// =========================================================================================

/*
Whenever JavaScript starts executing a program, it needs a place to keep track of what it
is currently doing. Imagine you are reading a book and keeping a bookmark between the
pages. The bookmark tells you exactly where you should continue reading when you return.

Similarly, JavaScript also needs a mechanism to remember which function is currently
running, which function should execute next and where it should return after a function
finishes.

This mechanism is called the Call Stack.

The Call Stack is a special memory structure used by the JavaScript Engine to manage the
execution of functions.

Every time a function starts executing, JavaScript places that function onto the Call
Stack. When the function finishes its execution, JavaScript removes it from the stack.

In simple words, the Call Stack keeps track of every function that is currently being
executed.
*/





// =========================================================================================
// 2. Why JavaScript Needs a Call Stack
// =========================================================================================

/*
Suppose JavaScript did not have a Call Stack.

Imagine one function calls another function, and that function calls another one.

How would JavaScript remember where it came from?

How would it know which function should continue executing after the current function
finishes?

Without a proper tracking system, JavaScript would completely lose the execution order.

The Call Stack solves this problem.

It always remembers the currently executing function and also remembers the function that
was executing before it.

Once the current function finishes, JavaScript simply goes back to the previous function
stored inside the stack.

Because of this mechanism, JavaScript can execute nested functions correctly.
*/





// =========================================================================================
// 3. How the Call Stack Works
// =========================================================================================

/*
The Call Stack works exactly like a stack of books.

Imagine placing books one on top of another.

Book A

↓

Book B

↓

Book C

The last book placed on the stack is always the first one removed.

The Call Stack follows this exact behavior.

Whenever a new function starts executing,

it is pushed onto the top of the stack.

Whenever a function completes,

it is popped from the top of the stack.

This process continues until the stack becomes completely empty.

Only then is JavaScript considered free to execute other pending tasks.
*/





// =========================================================================================
// Example
// =========================================================================================

function first() {
    console.log("Inside First");
}

function second() {
    first();
    console.log("Inside Second");
}

second();

/*
Execution

Program Starts

↓

second() is called

↓

Call Stack

---------
second()
---------

↓

Inside second(),

first() is called.

Call Stack

---------
first()
second()
---------

↓

first() finishes.

Call Stack

---------
second()
---------

↓

second() continues.

↓

second() finishes.

Call Stack

---------
(empty)
---------

Notice that JavaScript always executes the function on the TOP of the stack.
*/





// =========================================================================================
// 4. LIFO (Last In, First Out)
// =========================================================================================

/*
The Call Stack follows a principle called LIFO.

LIFO stands for

Last In,
First Out.

This means the function that enters the stack last is always the first one to leave.

Think of stacking dinner plates.

You always place a new plate on top.

When removing plates, you remove the topmost plate first.

You cannot remove the bottom plate without first removing every plate above it.

The Call Stack behaves in exactly the same manner.

This is why nested functions always finish before the functions that called them.
*/





// =========================================================================================
// 5. Call Stack and Synchronous Execution
// =========================================================================================

/*
Earlier we learned that JavaScript executes only one statement at a time.

The Call Stack is the reason this happens.

Since there is only one Call Stack, JavaScript can execute only one function at any
moment.

Whenever a function is already executing, another function cannot execute unless it is
placed on top of the Call Stack.

Similarly, JavaScript cannot start executing a completely different piece of code until
the current execution finishes.

This is exactly why JavaScript is called a Single-Threaded language.

One Call Stack.

One executing function.

One execution flow.
*/





// =========================================================================================
// 6. What Happens When the Call Stack Becomes Empty?
// =========================================================================================

/*
One very important point that students often miss is this.

As long as the Call Stack contains even a single function, JavaScript considers itself
busy.

It will continue executing whatever is present inside the stack.

Only after every function has finished and the Call Stack becomes completely empty can
JavaScript look for other pending work.

This idea becomes extremely important while studying asynchronous programming.

For example, suppose a timer has already completed or an API request has already received
its data.

Even then, JavaScript will NOT execute those tasks immediately.

Why?

Because the Call Stack is still busy executing synchronous code.

Only when the Call Stack becomes empty does JavaScript become available to execute
completed asynchronous tasks.

This concept is the foundation of the Event Loop, which we will study shortly.
*/





// =========================================================================================
// 7. Stack Overflow
// =========================================================================================

/*
Since the Call Stack has limited memory, it cannot keep growing forever.

If functions continue calling one another without ever stopping, the Call Stack eventually
becomes full.

When there is no more space available for new function calls, JavaScript throws an error
called

Maximum Call Stack Size Exceeded.

This error is commonly known as Stack Overflow.

The most common reason for a Stack Overflow is infinite recursion, where a function keeps
calling itself without any stopping condition.

Example
*/

function hello() {
    hello();
}

hello();

/*
This function never finishes.

Each call creates another function call.

Each new call is pushed onto the Call Stack.

Eventually the stack becomes full.

JavaScript has no more memory available for function execution and throws a Stack Overflow
error.

Fortunately, in normal JavaScript applications, Stack Overflow is uncommon unless there is
a programming mistake such as infinite recursion.

Now that we understand how JavaScript executes functions through the Call Stack, we are
ready to learn what happens when asynchronous tasks like setTimeout() or fetch() finish
their work.

Where do these completed tasks wait?

How do they come back into JavaScript?

The next topic answers these questions by introducing the Callback Queue.
*/


/*******************************************************************************************************
 *************************************** CALLBACK QUEUE ***********************************************
 *
 * Topics Covered:
 * 1. What is the Callback Queue?
 * 2. Why Does JavaScript Need a Callback Queue?
 * 3. How Completed Async Tasks Reach the Queue
 * 4. FIFO (First In, First Out)
 * 5. Callback Queue is NOT the Call Stack
 * 6. Why Callbacks Don't Execute Immediately
 * 7. Complete Flow Until the Callback Queue
 *
 * In the previous section, we learned that JavaScript executes every function through the
 * Call Stack. We also learned that as long as something exists inside the Call Stack,
 * JavaScript is considered busy.
 *
 * Now suppose a timer finishes after 2 seconds.
 *
 * Or an API request receives data from the server.
 *
 * What happens next?
 *
 * Does the Browser directly interrupt JavaScript and execute the callback?
 *
 * No.
 *
 * JavaScript is busy doing its current work. The Browser cannot suddenly force JavaScript
 * to stop executing the current function.
 *
 * Instead, the completed callback is placed into a waiting area known as the Callback Queue.
 *******************************************************************************************************/



// =========================================================================================
// 1. What is the Callback Queue?
// =========================================================================================

/*
The Callback Queue is a temporary waiting area for completed asynchronous callbacks.

Whenever an asynchronous task finishes inside the Browser, its callback function cannot
immediately start executing because JavaScript may still be busy executing synchronous
code.

Instead of interrupting JavaScript, the Browser places that completed callback inside the
Callback Queue.

The callback simply waits there until JavaScript becomes free.

You can think of the Callback Queue as a queue of people waiting outside an office.

Each person has already completed their paperwork and is simply waiting for their turn to
enter the office.

Similarly, every callback inside the Callback Queue has already completed its asynchronous
work. It is only waiting for JavaScript to become available.
*/





// =========================================================================================
// 2. Why Does JavaScript Need a Callback Queue?
// =========================================================================================

/*
Imagine the Browser finishes a timer while JavaScript is still executing a function.

If the Browser immediately interrupted JavaScript, the currently executing code would stop
halfway through its execution.

Variables might remain incomplete.

Functions could stop in the middle.

Objects could remain partially modified.

The program would become extremely unpredictable.

To avoid this problem, JavaScript follows one very important rule.

Once a function starts executing, it must finish completely before another function begins.

Because of this rule, completed asynchronous callbacks cannot immediately execute.

They simply wait inside the Callback Queue until JavaScript finishes everything currently
present inside the Call Stack.

This is one of the reasons JavaScript execution remains predictable even while performing
asynchronous operations.
*/





// =========================================================================================
// 3. How Completed Async Tasks Reach the Callback Queue
// =========================================================================================

/*
Consider the following code.
*/

console.log("Start");

setTimeout(() => {
    console.log("Timer Finished");
}, 2000);

console.log("End");

/*
Let us understand exactly what happens.

Step 1

JavaScript executes

console.log("Start")

↓

Output

Start

------------------------------------------------------------

Step 2

JavaScript encounters setTimeout().

Instead of waiting for two seconds, JavaScript hands the timer to the Browser.

The Browser starts counting the time independently.

JavaScript immediately continues executing the next statement.

------------------------------------------------------------

Step 3

JavaScript executes

console.log("End")

↓

Output

End

------------------------------------------------------------

Step 4

After two seconds, the Browser finishes the timer.

But JavaScript is NOT directly interrupted.

Instead,

the callback function

↓

() => {
    console.log("Timer Finished");
}

is placed inside the Callback Queue.

It now waits there until JavaScript becomes available.
*/





// =========================================================================================
// Visual Flow
// =========================================================================================

/*
JavaScript

↓

setTimeout()

↓

Browser API

↓

Timer Starts

↓

2 Seconds Complete

↓

Callback Queue

↓

Wait...

Notice that even after the timer finishes, the callback still does not execute.

Why?

Because it is waiting for JavaScript to become free.
*/





// =========================================================================================
// 4. FIFO (First In, First Out)
// =========================================================================================

/*
The Callback Queue follows a principle known as FIFO.

FIFO stands for

First In,
First Out.

This means the callback that enters the queue first will also leave the queue first.

Think about standing in a line at a movie theatre.

The person who arrives first gets served first.

Nobody can jump ahead of the people already waiting.

The Callback Queue behaves exactly the same way.

Callbacks wait patiently in the order they arrive.

Later, JavaScript executes them one by one in that same order.
*/





// =========================================================================================
// Example
// =========================================================================================

setTimeout(() => {
    console.log("A");
}, 1000);

setTimeout(() => {
    console.log("B");
}, 2000);

setTimeout(() => {
    console.log("C");
}, 3000);

/*
Timeline

After 1 second

Queue

A

---------------------------------

After 2 seconds

Queue

A

B

---------------------------------

After 3 seconds

Queue

A

B

C

Since the queue follows FIFO,

A executes first,

then B,

then C.

The order depends on when the callbacks enter the queue.
*/





// =========================================================================================
// 5. Callback Queue is NOT the Call Stack
// =========================================================================================

/*
One of the most common beginner mistakes is confusing the Call Stack and the Callback
Queue.

Although both are involved in program execution, they have completely different jobs.

The Call Stack is where JavaScript actively executes functions.

Only one function executes at a time inside the Call Stack.

The Callback Queue, on the other hand, never executes anything.

It simply stores completed callbacks until JavaScript is ready.

Think of it like this.

The Call Stack is the classroom where teaching is currently happening.

The Callback Queue is the waiting room outside.

Students sitting in the waiting room are not being taught yet.

They simply wait until the classroom becomes empty.

Only then are they allowed to enter.
*/





// =========================================================================================
// 6. Why Don't Callbacks Execute Immediately?
// =========================================================================================

/*
Many students think that as soon as a timer completes, its callback should immediately
execute.

That is not how JavaScript works.

Completion of a timer only means the Browser has finished its work.

It does NOT mean JavaScript is free.

JavaScript first checks whether it is still executing synchronous code.

If the Call Stack is not empty, the callback must continue waiting.

This waiting ensures that synchronous execution is never interrupted.

Only after the Call Stack becomes completely empty can callbacks begin executing.

This rule is extremely important because it preserves the predictable execution model of
JavaScript.
*/





// =========================================================================================
// 7. Complete Flow Until the Callback Queue
// =========================================================================================

/*
At this point, our understanding of asynchronous execution looks like this.

JavaScript starts executing the program.

↓

A Browser API such as setTimeout() or fetch() is encountered.

↓

JavaScript hands the task to the Browser.

↓

The Browser performs the task independently.

↓

Once the task completes, the Browser places the callback into the Callback Queue.

↓

The callback waits.

Notice something.

The callback is still not executing.

There is still one important component missing.

Who checks whether the Call Stack has become empty?

Who moves callbacks from the Callback Queue into the Call Stack?

That responsibility belongs to the Event Loop.

The Event Loop acts like a manager between the Call Stack and the Callback Queue,
continuously checking whether JavaScript is free to execute the next callback.

Without the Event Loop, callbacks would remain inside the Callback Queue forever and would
never execute.

The next topic explains the Event Loop, which is the heart of JavaScript's asynchronous
execution model.
*/


/*******************************************************************************************************
 ******************************************* setTimeout() **********************************************
 *
 * Topics Covered:
 * 1. What is setTimeout()?
 * 2. Syntax
 * 3. Delay Parameter
 * 4. Why setTimeout() is Asynchronous
 * 5. Why 0ms Doesn't Execute Immediately
 *******************************************************************************************************/


// =========================================================================================
// 1. What is setTimeout()?
// =========================================================================================

/*
setTimeout() is a Browser API used to execute a function after a specified amount of time.

It does not pause JavaScript. Instead, JavaScript hands the timer to the Browser and
continues executing the remaining synchronous code. Once the timer completes, its callback
is placed in the Callback Queue, waiting for the Event Loop to move it to the Call Stack.
*/


// Syntax

setTimeout(callbackFunction, delayInMilliseconds);




// =========================================================================================
// Example
// =========================================================================================

console.log("Start");

setTimeout(() => {
    console.log("Inside Timer");
}, 2000);

console.log("End");

/*
Output

Start
End
Inside Timer

Although the timer appears before the last console.log(), JavaScript does not wait for
2 seconds. It immediately executes the next synchronous statement.
*/





// =========================================================================================
// Delay Parameter
// =========================================================================================

/*
The second argument specifies the minimum time after which the callback becomes eligible
to execute.

1000  = 1 second

2000  = 2 seconds

5000  = 5 seconds

The delay is not the exact execution time. The callback still waits if the Call Stack is
busy.
*/




// =========================================================================================
// Why 0ms Doesn't Execute Immediately
// =========================================================================================

console.log("A");

setTimeout(() => {
    console.log("B");
}, 0);

console.log("C");

/*
Output

A
C
B

Many beginners think that 0 milliseconds means "execute immediately."

This is incorrect.

0ms simply means the Browser does not wait before placing the callback into the Callback
Queue. The callback must still wait until the Call Stack becomes empty and the Event Loop
moves it back for execution.
*/


/*******************************************************************************************************
 ********************************************* PROMISE *************************************************
 *
 * Topics Covered:
 * 1. What is a Promise?
 * 2. Why Promises are Needed
 * 3. Promise States
 * 4. Promise Lifecycle
 * 5. Promise and fetch()
 *
 * We have learned that asynchronous tasks take time to complete. Now the question is,
 * how does JavaScript know whether an asynchronous task has completed successfully or not?
 *
 * The answer is a Promise.
 *******************************************************************************************************/



// =========================================================================================
// 1. What is a Promise?
// =========================================================================================

/*
A Promise is a JavaScript object that represents the eventual result of an asynchronous
operation.

When JavaScript starts an asynchronous task like fetching data from a server, it does not
receive the actual data immediately. Instead, it immediately receives a Promise object.

The Promise simply says,

"I don't have the result yet, but I promise to provide it later."

Once the asynchronous task finishes, the Promise is updated with the final result.
*/





// =========================================================================================
// 2. Why Promises are Needed
// =========================================================================================

/*
Suppose JavaScript sends a request to a server.

The server may respond in a few milliseconds or it may take several seconds depending on
the network speed.

JavaScript cannot stop the entire program while waiting for the server.

Instead, it continues executing other code and keeps a Promise as a placeholder.

When the server finally responds, JavaScript checks the Promise and continues with the
received result.
*/





// =========================================================================================
// 3. Promise States
// =========================================================================================

/*
A Promise can be in one of three states.

1. Pending
   The asynchronous task is still running. JavaScript is waiting for the result.

2. Fulfilled
   The task completed successfully, and the Promise now contains the returned value.

3. Rejected
   Something went wrong while performing the task, such as a network error or server
   failure.
*/





// =========================================================================================
// Promise Lifecycle
// =========================================================================================

/*
                Promise Created

                       │

                       ▼

                   Pending

                  /       \

                 /         \

                ▼           ▼

          Fulfilled      Rejected

     (Success)          (Failure)

A Promise starts in the Pending state.

It can move either to Fulfilled or Rejected.

Once its state changes, it cannot change again.
*/





/*******************************************************************************************************
 ********************************************* PROMISE *************************************************
 *
 * Topics Covered:
 * 1. What is a Promise?
 * 2. Why Promises are Needed
 * 3. Promise States
 * 4. Promise Lifecycle
 * 5. Promise and fetch()
 *
 * We have learned that asynchronous tasks take time to complete. Now the question is,
 * how does JavaScript know whether an asynchronous task has completed successfully or not?
 *
 * The answer is a Promise.
 *******************************************************************************************************/



// =========================================================================================
// 1. What is a Promise?
// =========================================================================================

/*
A Promise is a JavaScript object that represents the eventual result of an asynchronous
operation.

When JavaScript starts an asynchronous task like fetching data from a server, it does not
receive the actual data immediately. Instead, it immediately receives a Promise object.

The Promise simply says,

"I don't have the result yet, but I promise to provide it later."

Once the asynchronous task finishes, the Promise is updated with the final result.
*/



// =========================================================================================
// 2. Why Promises are Needed
// =========================================================================================

/*
Suppose JavaScript sends a request to a server.

The server may respond in a few milliseconds or it may take several seconds depending on
the network speed.

JavaScript cannot stop the entire program while waiting for the server.

Instead, it continues executing other code and keeps a Promise as a placeholder.

When the server finally responds, JavaScript checks the Promise and continues with the
received result.
*/


// =========================================================================================
// 3. Promise States
// =========================================================================================

/*
A Promise can be in one of three states.

1. Pending
   The asynchronous task is still running. JavaScript is waiting for the result.

2. Fulfilled
   The task completed successfully, and the Promise now contains the returned value.

3. Rejected
   Something went wrong while performing the task, such as a network error or server
   failure.
*/

// =========================================================================================
// Promise Lifecycle
// =========================================================================================

/*
                Promise Created

                       │

                       ▼

                   Pending

                  /       \

                 /         \

                ▼           ▼

          Fulfilled      Rejected

     (Success)          (Failure)

A Promise starts in the Pending state.

It can move either to Fulfilled or Rejected.

Once its state changes, it cannot change again.
*/


// =========================================================================================
// 4. Promise and fetch()
// =========================================================================================

let promise = fetch("https://fakestoreapi.com/products");

/*
The fetch() function does not immediately return the products.

Instead, it returns a Promise.

Initially, the Promise is in the Pending state because the Browser is still requesting
data from the server.

If the request succeeds, the Promise becomes Fulfilled.

If the request fails due to a network or server issue, the Promise becomes Rejected.

Later, async/await (or .then()) is used to obtain the actual data from this Promise.
*/


/*******************************************************************************************************
 ******************************************** async & await *******************************************
 *
 * Topics Covered:
 * 1. What is async?
 * 2. What is await?
 * 3. Why async/await is Used
 * 4. async/await with fetch()
 *
 * Promises solve the problem of asynchronous programming, but working directly with
 * Promises can become difficult as programs grow larger.
 *
 * To make asynchronous code easier to read and write, JavaScript introduced
 * async and await.
 *******************************************************************************************************/



// =========================================================================================
// 1. async Function
// =========================================================================================

/*
The async keyword is placed before a function to indicate that the function will perform
asynchronous operations.

An async function always returns a Promise, even if you return a normal value.

Inside an async function, we can use the await keyword.
*/

async function myFunction() {
    console.log("Inside Async Function");
}






// =========================================================================================
// 2. await Keyword
// =========================================================================================

/*
The await keyword is used to wait for a Promise to complete.

When JavaScript reaches an await statement, it pauses only the current async function.
It does NOT stop the entire JavaScript program.

Meanwhile, JavaScript is free to execute other synchronous code.

Once the Promise is fulfilled, execution continues from the next line.
*/





// =========================================================================================
// Example
// =========================================================================================

async function getData() {
    let response = await fetch("https://fakestoreapi.com/products");

    console.log(response);
}

/*
Here, fetch() returns a Promise.

Instead of manually checking whether the Promise is completed, await automatically waits
until the Promise is fulfilled and then stores the returned Response object inside the
response variable.
*/





// =========================================================================================
// 3. Why async/await is Used
// =========================================================================================

/*
Without async/await, Promise-based code often becomes harder to read because the logic is
split across multiple callbacks.

Using async/await allows us to write asynchronous code in a top-to-bottom manner that
looks very similar to synchronous code.

This makes programs easier to understand, debug and maintain.
*/





// =========================================================================================
// 4. async/await with fetch()
// =========================================================================================

async function getData() {

    let res = await fetch("https://fakestoreapi.com/products");

    let data = await res.json();

    console.log(data);

}

/*
Execution Flow

getData()

↓

fetch() sends the request

↓

Returns a Promise

↓

await waits for the Promise

↓

Response object received

↓

res.json() converts JSON into JavaScript Object

↓

Returns another Promise

↓

await waits again

↓

Final JavaScript data is obtained

Notice that await is used twice because both fetch() and res.json() return Promises.
*/


/*******************************************************************************************************
 *************************************** fetch() and response.json() ***********************************
 *
 * Topics Covered:
 * 1. What is fetch()?
 * 2. Response Object
 * 3. response.json()
 * 4. Complete fetch() Workflow
 *******************************************************************************************************/


// =========================================================================================
// 1. What is fetch()?
// =========================================================================================

/*
fetch() is a Browser API used to send HTTP requests to a server.

Whenever we need data from an API, we use fetch().

The Browser sends the request in the background, allowing JavaScript to continue executing
other statements without waiting.

Since the request takes time to complete, fetch() immediately returns a Promise instead of
the actual data.
*/

let promise = fetch("https://fakestoreapi.com/products");






// =========================================================================================
// 2. Response Object
// =========================================================================================

async function getData() {

    let res = await fetch("https://fakestoreapi.com/products");

    console.log(res);

}

/*
After the Promise is fulfilled, fetch() returns a Response object.

The Response object contains information about the server's response such as the status,
headers and body.

However, the actual API data is not directly available yet.

It is still stored inside the response body in JSON format.
*/





// =========================================================================================
// 3. response.json()
// =========================================================================================

async function getData() {

    let res = await fetch("https://fakestoreapi.com/products");

    let data = await res.json();

    console.log(data);

}

/*
The json() method reads the response body and converts the JSON data into a JavaScript
object or array.

Since reading and converting the response also takes time, json() returns another Promise.

That is why we use await again before res.json().

After this step, the API data is finally ready to be used inside our program.
*/





// =========================================================================================
// 4. Complete fetch() Workflow
// =========================================================================================

/*
getData()

↓

fetch()

↓

Browser sends HTTP request

↓

Promise (Pending)

↓

Server sends response

↓

Promise Fulfilled

↓

Response Object

↓

response.json()

↓

Another Promise

↓

JavaScript Object / Array

↓

Data is ready to use

This is why we commonly write:

    let res = await fetch(...);

    let data = await res.json();

The first await waits for the server's response, while the second await waits for the JSON
data to be converted into a JavaScript object.
*/


/*******************************************************************************************************
 *********************************** COMPLETE CODE WALKTHROUGH ****************************************
 *
 * Topics Covered:
 * 1. getData() Function
 * 2. appendData() Function
 * 3. Calling getData()
 *
 * This program fetches product data from an API and displays it on the webpage.
 *
 * There are only two functions in this program:
 *
 * • getData()    → Fetches data from the API.
 * • appendData() → Displays the fetched data on the webpage.
 *
 * Finally, getData() is called to start the entire process.
 *******************************************************************************************************/



// =========================================================================================
// 1. getData() Function
// =========================================================================================

async function getData(){

    const res = await fetch("https://fakestoreapi.com/products");

    const response = await res.json();

    appendData(response);

}

/*
This function is responsible for fetching product data from the API.

Step 1:
fetch() sends an HTTP request to the given URL.

Since sending a request takes time, fetch() immediately returns a Promise instead of the
actual data.

The await keyword pauses only this async function until the Promise is fulfilled.

Once the server responds, a Response object is stored inside the variable 'res'.

------------------------------------------------------------

Step 2:
The actual product data is still in JSON format.

The json() method converts this JSON into JavaScript objects.

Since this conversion is also asynchronous, json() returns another Promise.

Using await pauses the function again until the conversion completes.

After this line, 'response' becomes an array containing all the product objects.

------------------------------------------------------------

Step 3:
The fetched product array is passed to appendData().

From this point, the responsibility of getData() is complete.

The remaining work is handled by appendData().
*/





// =========================================================================================
// 2. appendData() Function
// =========================================================================================

function appendData(data){

    const parentDiv = document.getElementById("parent");

    data.forEach((el, i)=>{

        const childDiv = document.createElement("div");

        childDiv.style.textAlign = "center";
        childDiv.style.boxShadow = "...";

        const cat = document.createElement("p");
        cat.innerText = el.category;

        const img = document.createElement("img");
        img.src = el.image;
        img.style.width = "200px";
        img.style.height = "200px";

        const title = document.createElement("p");
        title.innerText = el.title;

        const price = document.createElement("p");
        price.innerText = el.price;

        const desc = document.createElement("p");
        desc.innerText = el.description;

        const button = document.createElement("button");
        button.innerText = "Buy Now";

        childDiv.append(cat, img, title, price, desc, button);

        parentDiv.append(childDiv);

    });

}

/*
This function receives the array of products fetched from the API.

First, it selects the parent container where all product cards will be displayed.

Next, forEach() loops through the array one product at a time.

During every iteration, 'el' represents the current product object.

For each product,

• A new div is created to act as the product card.
• Paragraph elements are created for category, title, price and description.
• An image element is created and its source is set using el.image.
• A button is created with the text "Buy Now".
• Some CSS styles are applied only to improve the appearance of the card.

After creating all the required elements, they are added to childDiv using append().

Finally, the completed childDiv is appended to parentDiv, making the product visible on
the webpage.

This process repeats for every product in the array until all products are displayed.
*/





// =========================================================================================
// 3. Starting the Program
// =========================================================================================

getData();

/*
Execution starts from this line.

Calling getData() begins the complete workflow.

Execution Flow

getData()

↓

fetch()

↓

Browser sends API request

↓

await waits for the response

↓

Response Object received

↓

response.json()

↓

JSON converted into JavaScript Objects

↓

appendData(response)

↓

Loop through every product

↓

Create Product Card

↓

Append Product Card to Parent Container

↓

All Products Displayed on the Webpage
*/


/**
 * Final Code
 */

async function getData() {
    const res = await fetch("https://fakestoreapi.com/products");

    const response = await res.json();

    appendData(response);
}

function appendData(data) {
    const parentDiv = document.getElementById("parent");

    data.forEach((el, i) => {

        const childDiv = document.createElement("div");
        childDiv.style.textAlign = "center";
        childDiv.style.boxShadow =
            "rgba(240, 46, 170, 0.4) 5px 5px, rgba(240, 46, 170, 0.3) 10px 10px, rgba(240, 46, 170, 0.2) 15px 15px, rgba(240, 46, 170, 0.1) 20px 20px, rgba(240, 46, 170, 0.05) 25px 25px";

        const cat = document.createElement("p");
        cat.innerText = el.category;

        const img = document.createElement("img");
        img.src = el.image;
        img.style.width = "200px";
        img.style.height = "200px";

        const title = document.createElement("p");
        title.innerText = el.title;

        const price = document.createElement("p");
        price.innerText = el.price;

        const desc = document.createElement("p");
        desc.innerText = el.description;

        const button = document.createElement("button");
        button.innerText = "Buy Now";
        button.style.border = "1px solid none";
        button.style.padding = "5px";
        button.style.width = "90%";
        button.style.backgroundColor = "yellowgreen";
        button.style.color = "black";

        childDiv.append(cat, img, title, price, desc, button);

        parentDiv.append(childDiv);
    });
}

getData();