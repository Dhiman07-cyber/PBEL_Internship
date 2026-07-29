/**********************************************22nd July************************************************
 * 
 ******************************************** BROWSER STORAGE ******************************************
 *
 * Topics Covered:
 * 1. Why Data Disappears After Refresh
 * 2. Browser Memory (RAM)
 * 3. Why Refresh Creates a New Execution
 * 4. The Need for Permanent Storage
 * 5. What is Browser Storage?
 * 6. Browser Storage Workflow
 *
 * Before learning localStorage, it is extremely important to understand WHY it exists.
 * Many beginners directly start learning setItem(), getItem() and JSON without understanding
 * the actual problem these concepts are trying to solve.
 *
 * During the class, sir first demonstrated that whenever we enter data into a webpage,
 * everything works perfectly. However, as soon as we refresh the page, all the data is lost.
 *
 * This is not because JavaScript is broken or because the browser made a mistake.
 * It happens because JavaScript variables are temporary. They exist only while the webpage is
 * running. Once the page is refreshed, the browser destroys the previous execution and starts
 * everything again from the beginning.
 *
 * Understanding this chapter is extremely important because localStorage, sessionStorage,
 * cookies, databases and almost every modern web application are based on solving this exact
 * problem.
 *******************************************************************************************************/



// =========================================================================================
// 1. Why Does Data Disappear After Refresh?
// =========================================================================================

/*
One of the first questions every beginner asks is:

"If I already stored the data inside a variable, then why does it disappear after refreshing
the page?"

To answer this question, we first need to understand where JavaScript variables actually live.

Whenever we open a webpage, the browser creates a completely new environment for that page.
Inside this environment, JavaScript starts executing line by line.

Every variable, array, object or function that we create is stored inside the browser's
temporary memory.

Example:

let name = "Dhiman";

Here, the variable "name" is stored only while the webpage is active.

Now suppose we press the Refresh button.

The browser does NOT continue running the old webpage.

Instead, it completely destroys the old webpage along with everything that belonged to it.

This includes:

• Variables
• Arrays
• Objects
• Functions
• Timers
• Event execution
• JavaScript Memory

After destroying everything, the browser creates an entirely new webpage and starts executing
JavaScript again from the very first line.

Therefore, the previous variables no longer exist.

Always remember this important statement:

Refreshing a webpage does NOT continue the previous JavaScript execution.

It starts a completely new execution from scratch.
*/



// =========================================================================================
// Example
// =========================================================================================

let name = "Dhiman";

console.log(name);

/*
Output
------

Dhiman

Reason
------

The variable currently exists inside the browser's memory.

After refreshing the page, the previous memory is destroyed and JavaScript starts executing
again from line number one.

The previous variable is permanently removed.

Only a newly created variable will exist after the refresh.
*/





// =========================================================================================
// 2. Browser Memory (RAM)
// =========================================================================================

/*
Whenever a webpage is opened, the browser allocates a portion of the computer's memory for
that webpage.

This memory is called RAM (Random Access Memory).

RAM is temporary memory used while applications are running.

JavaScript stores almost everything inside this memory, such as:

• Variables
• Arrays
• Objects
• Functions
• Loops
• Conditions
• Temporary calculations

RAM has two very important characteristics.

1. It is extremely fast.

Since RAM is directly accessible by the processor, reading and writing data is very quick.

2. It is temporary.

The moment the webpage is closed or refreshed, everything stored inside RAM is removed.

This is exactly why JavaScript variables disappear after refreshing.

They were never meant to be permanent.

Think of RAM like a classroom whiteboard.

The teacher can write anything on it.

Students can read everything.

But once the board is cleaned, nothing remains.

JavaScript variables behave in exactly the same way.
*/





// =========================================================================================
// Example
// =========================================================================================

let age = 20;
let city = "Guwahati";

console.log(age);
console.log(city);

/*
Output
------

20

Guwahati

Reason
------

Both variables currently exist inside RAM.

After refreshing the page, RAM allocated for the previous webpage is cleared.

New memory is allocated, and JavaScript begins executing again from the first line.
*/





// =========================================================================================
// 3. Why Refresh Starts Everything Again
// =========================================================================================

/*
Many students think that pressing Refresh simply updates the webpage.

This is not true.

Refreshing actually means loading the webpage again.

Whenever we refresh a webpage, the browser performs the following sequence of operations.

Step 1

The current webpage is destroyed.

↓

Step 2

The current JavaScript execution immediately stops.

↓

Step 3

All temporary memory associated with that webpage is cleared.

↓

Step 4

The browser requests the webpage again.

↓

Step 5

HTML is loaded.

↓

Step 6

CSS is applied.

↓

Step 7

JavaScript starts executing from the first line.

Notice one important thing.

JavaScript never remembers what happened before the refresh.

Every refresh creates a completely fresh execution environment.

This behaviour is intentional because browsers are designed to treat every page load as a new
execution.
*/



// =========================================================================================
// 4. The Need for Permanent Storage
// =========================================================================================

/*
Suppose we create a Registration Form.

A user enters:

Name

Email

Password

Everything works correctly.

Now the user refreshes the webpage.

Immediately all entered information disappears.

Now imagine if websites like:

Instagram

Facebook

Amazon

Google

Flipkart

behaved in the same way.

Every refresh would:

Log the user out.

Delete shopping carts.

Forget user preferences.

Forget saved settings.

Forget previously entered information.

Such websites would become practically unusable.

Clearly, we need some place where information can remain available even after refreshing the
page.

Normal JavaScript variables cannot provide this functionality because they exist only inside
temporary memory.

Therefore, browsers provide another mechanism known as Browser Storage.
*/





// =========================================================================================
// Example
// =========================================================================================

let username = "Rahul";

console.log(username);

/*
Output
------

Rahul

Question
--------

Can this variable remember its value after refreshing?

Answer
------

No.

It exists only while the webpage is running.

We need another storage mechanism that can preserve data even after refreshing.

That storage mechanism is called Browser Storage.
*/





// =========================================================================================
// 5. What is Browser Storage?
// =========================================================================================

/*
Browser Storage is a special storage system provided by the browser.

Unlike JavaScript variables, Browser Storage is not stored inside temporary execution memory.

Instead, the browser keeps this data separately.

As a result, the stored information can remain available even after:

• Refreshing the webpage
• Closing the current tab
• Reopening the website

(The exact behaviour depends on the type of storage being used, which we will study later.)

Since this storage is designed to retain information beyond the current execution, it is called
Persistent Storage.

An extremely important concept to remember is:

Browser Storage does NOT belong to JavaScript.

It belongs to the Browser.

JavaScript simply provides commands that allow us to communicate with the browser and ask it to
store or retrieve information.

Think of JavaScript as an employee.

Think of Browser Storage as a storage room.

The employee cannot own the storage room.

He can only place or retrieve items from it whenever required.
*/





// =========================================================================================
// 6. Browser Storage Workflow
// =========================================================================================

/*
The overall workflow can be understood as follows.

                User
                  │
                  ▼
          Enters Information
                  │
                  ▼
             HTML Form
                  │
                  ▼
      JavaScript Reads Data
                  │
                  ▼
    Browser Stores Information
                  │
          Refresh the Page
                  │
                  ▼
     JavaScript Requests Data
                  │
                  ▼
   Browser Returns Stored Data

Observe this workflow carefully.

JavaScript itself is NOT storing the data permanently.

It simply requests the browser to save the information.

Whenever required, JavaScript again requests the browser to return that information.

This communication between JavaScript and the Browser forms the basis of localStorage,
sessionStorage, cookies and many other browser APIs.

In the next section, we will study the different types of Browser Storage provided by modern
web browsers and understand where each one should be used.
*/


/*******************************************************************************************************
 ************************************* TYPES OF BROWSER STORAGE ****************************************
 *
 * Topics Covered:
 * 1. Why Multiple Storage Types Exist
 * 2. Cookies
 * 3. localStorage
 * 4. sessionStorage
 * 5. IndexedDB
 * 6. Comparison Between All Storage Types
 *
 * Now that we understand why normal JavaScript variables cannot permanently store data,
 * the next question naturally arises:
 *
 * "If Browser Storage exists, then why are there multiple storage types?"
 *
 * The answer is simple.
 *
 * Every type of data does not require the same kind of storage.
 *
 * Some data should disappear after closing the browser.
 *
 * Some data should remain even after restarting the computer.
 *
 * Some data is very small, while some applications need to store thousands of records.
 *
 * To solve these different requirements, browsers provide multiple storage mechanisms.
 *******************************************************************************************************/



// =========================================================================================
// 1. Why Do We Need Different Storage Types?
// =========================================================================================

/*
Imagine building different kinds of websites.

Example 1

You are creating an Online Shopping Website.

You want the shopping cart to remain even if the user refreshes the page.

Example 2

You are creating an Online Examination Website.

If the student closes the browser, you may want the session to end immediately.

Example 3

You are creating a Drawing Application.

The user may save hundreds of drawings.

Example 4

You are creating a Banking Website.

The login information should be handled securely.

Can one storage system solve all these problems?

No.

Different situations require different storage mechanisms.

Therefore browsers provide multiple storage options.

Each storage type has its own:

• Capacity
• Lifetime
• Security
• Purpose
• Performance

Choosing the correct storage is an important part of Web Development.
*/





// =========================================================================================
// 2. Cookies
// =========================================================================================

/*
Cookies are one of the oldest storage mechanisms available in web browsers.

Before localStorage and sessionStorage were introduced, websites mainly depended upon Cookies.

A Cookie stores a very small amount of information inside the browser.

Whenever the browser sends a request to the server, cookies are automatically sent along with
that request.

This makes cookies useful for storing information that the server needs frequently.

Examples include:

• Login Sessions
• Authentication Tokens
• Language Preference
• Theme Preference
• User Identification

Cookies are not designed for storing large amounts of information.

They have a very limited storage capacity.

Usually around 4 KB per cookie.

Because cookies travel between the browser and the server on every request,
they should contain only small pieces of important information.

If large data is stored inside cookies, every request becomes slower.

Therefore, cookies should never be used like a database.
*/





// =========================================================================================
// Advantages of Cookies
// =========================================================================================

/*
• Supported by almost every browser.

• Automatically sent to the server.

• Can have an expiry date.

• Useful for authentication.

• Can store small pieces of important information.
*/





// =========================================================================================
// Disadvantages of Cookies
// =========================================================================================

/*
• Very small storage capacity.

• Slower because cookies are sent with every HTTP request.

• Not suitable for storing large objects or application data.

• Less convenient than modern storage APIs.
*/





// =========================================================================================
// 3. localStorage
// =========================================================================================

/*
localStorage is one of the most commonly used Browser Storage mechanisms.

Unlike cookies, localStorage is designed specifically for storing data inside the browser.

One of its biggest advantages is that the stored data remains available even after:

• Refreshing the page

• Closing the browser

• Restarting the computer

The stored information remains until it is removed manually.

This is why it is called localStorage.

The data is stored locally inside the user's browser.

Unlike cookies, localStorage data is NOT automatically sent to the server.

JavaScript must explicitly read and use the stored information whenever required.

Most beginner projects use localStorage because it is simple and easy to understand.

Examples include:

• Registration Forms

• Login Forms

• Theme Settings

• Dark Mode

• Remember Me

• Saved Notes

• To-Do Applications

• Recently Viewed Products

For learning purposes, localStorage is one of the best places to begin understanding persistent
data storage.
*/





// =========================================================================================
// Advantages of localStorage
// =========================================================================================

/*
• Much larger storage than Cookies.

• Approximately 5 MB to 10 MB depending on the browser.

• Data survives page refresh.

• Data survives browser restart.

• Easy JavaScript API.

• Perfect for small browser-based applications.
*/





// =========================================================================================
// Disadvantages of localStorage
// =========================================================================================

/*
• Stores only Strings.

• Not automatically shared with the server.

• Not suitable for extremely large datasets.

• Not secure enough for storing sensitive information like passwords or banking details.

Remember:

localStorage is meant for learning and small client-side storage.

Professional applications usually store important information inside databases.
*/





// =========================================================================================
// 4. sessionStorage
// =========================================================================================

/*
sessionStorage works almost exactly like localStorage.

The biggest difference is its lifetime.

Data inside sessionStorage exists only while the browser tab remains open.

As soon as the tab is closed, everything inside sessionStorage is permanently deleted.

Refreshing the page does NOT remove sessionStorage data.

Closing the tab DOES remove it.

This makes sessionStorage useful whenever information is required only during the current
browser session.

Examples include:

• Temporary Login Session

• Multi-step Forms

• Temporary Shopping Information

• Temporary User Preferences

Think of sessionStorage as temporary storage for one browser tab.
*/





// =========================================================================================
// Advantages of sessionStorage
// =========================================================================================

/*
• Easy to use.

• Faster than server communication.

• Automatically clears when the tab closes.

• Perfect for temporary information.
*/





// =========================================================================================
// Disadvantages of sessionStorage
// =========================================================================================

/*
• Data disappears after closing the tab.

• Cannot permanently remember user information.

• Limited storage capacity.
*/





// =========================================================================================
// 5. IndexedDB
// =========================================================================================

/*
IndexedDB is the most powerful storage mechanism provided by modern browsers.

Unlike localStorage, IndexedDB is capable of storing huge amounts of structured data.

It behaves much more like a real database.

Instead of storing only simple Strings, IndexedDB can store:

• Objects

• Arrays

• Images

• Files

• Large Records

• Complex Data Structures

Applications such as:

Google Docs

Offline Gmail

Large Progressive Web Applications (PWAs)

often use IndexedDB to store offline information.

Although IndexedDB is extremely powerful, it is much more complex than localStorage.

Therefore beginners usually start with localStorage before learning IndexedDB.
*/





// =========================================================================================
// Advantages of IndexedDB
// =========================================================================================

/*
• Very large storage capacity.

• Can store structured data.

• Supports searching and indexing.

• Suitable for large offline applications.

• Works like a miniature database inside the browser.
*/





// =========================================================================================
// Disadvantages of IndexedDB
// =========================================================================================

/*
• More difficult to learn.

• More complex API.

• Unnecessary for simple beginner projects.

• Requires understanding of database concepts.
*/





// =========================================================================================
// 6. Comparison Between Browser Storage Types
// =========================================================================================

/*
-----------------------------------------------------------------------------------------------
Storage Type      | Lifetime                     | Approx. Size | Common Use
-----------------------------------------------------------------------------------------------

Cookies           | Until expiry date            | ~4 KB         | Authentication, Sessions

localStorage      | Until manually removed       | 5-10 MB       | User Data, Settings

sessionStorage    | Until tab is closed          | 5-10 MB       | Temporary Session Data

IndexedDB         | Until manually removed       | Hundreds MB+  | Offline Databases
-----------------------------------------------------------------------------------------------

One simple way to remember these storage mechanisms is:

Cookies
↓

Small information shared with the server.

------------------------------------------------------------

localStorage
↓

Permanent browser storage for small applications.

------------------------------------------------------------

sessionStorage
↓

Temporary browser storage for one browser tab.

------------------------------------------------------------

IndexedDB
↓

A complete browser database for large applications.
*/





// =========================================================================================
// Important Note
// =========================================================================================

/*
During the class, sir mainly focused on localStorage because it is the simplest Browser Storage
API and helps beginners understand how persistent storage works.

Almost every concept that we learn next—including JSON.stringify(), JSON.parse(),
Registration Forms and Login Systems—will use localStorage.

Therefore, before moving ahead, remember one important point:

Normal JavaScript Variables
↓

Temporary
↓

Disappear after Refresh

------------------------------------------------------------

Browser Storage
↓

Persistent
↓

Can Remember Information

------------------------------------------------------------

Among all Browser Storage APIs, localStorage is the one we will use throughout the upcoming
examples.
*/



/*******************************************************************************************************
 ************************************** LOCALSTORAGE INTRODUCTION **************************************
 *
 * Topics Covered:
 * 1. What is localStorage?
 * 2. Why localStorage Was Introduced
 * 3. How localStorage Works Internally
 * 4. Characteristics of localStorage
 * 5. Storage Limit
 * 6. Important Rules of localStorage
 * 7. Common Beginner Misconceptions
 *
 * After understanding the different types of Browser Storage, we will now study the most
 * commonly used Browser Storage API — localStorage.
 *
 * Almost every beginner project such as Login Forms, Registration Systems, To-Do Lists,
 * Theme Changers, Notes Applications and many other browser-based projects use localStorage.
 *
 * Before learning its methods, it is important to understand what localStorage actually is,
 * how it stores data and why browsers provide it.
 *******************************************************************************************************/



// =========================================================================================
// 1. What is localStorage?
// =========================================================================================

/*
localStorage is a Browser Storage API that allows JavaScript to store information permanently
inside the user's browser.

Unlike normal JavaScript variables, the information stored inside localStorage is not destroyed
when the webpage is refreshed.

Instead, the browser keeps that information safely until it is explicitly removed.

This means that after:

• Refreshing the webpage
• Closing the browser
• Restarting the computer

the stored information can still be accessed.

The word "local" simply means that the information is stored locally inside the user's own
browser.

It is not automatically sent to the server.

It is not shared with other users.

Each browser stores its own copy of the data.

For example,

Suppose two different users open the same website.

User A stores:

Name = Rahul

User B stores:

Name = Dhiman

Even though both users are using the same website, each browser stores its own localStorage
independently.

User A cannot see User B's localStorage.

Similarly, User B cannot see User A's localStorage.

This is because localStorage belongs to the browser, not to the website.
*/





// =========================================================================================
// 2. Why Was localStorage Introduced?
// =========================================================================================

/*
Earlier, developers mainly used Cookies to store browser data.

However, Cookies had several limitations.

They could store only a very small amount of information.

They were automatically sent to the server with every request.

This made them unsuitable for storing large client-side application data.

Modern web applications required a better solution.

Developers wanted a storage mechanism that:

• Could store more data.

• Would remain available after refreshing.

• Would remain inside the browser.

• Would not automatically travel to the server.

To solve these problems, browsers introduced localStorage.

Today, localStorage is one of the simplest ways to save small amounts of information on the
client side.
*/





// =========================================================================================
// 3. How Does localStorage Work?
// =========================================================================================

/*
Many beginners think that localStorage is a JavaScript variable.

It is not.

localStorage is actually an object provided by the browser.

JavaScript communicates with this object whenever it wants to store or retrieve information.

The overall process looks like this.

User enters information

↓

JavaScript reads the information

↓

JavaScript requests localStorage to save it

↓

Browser stores the information

↓

Later...

JavaScript requests localStorage again

↓

Browser returns the stored information

Notice something important.

JavaScript never directly stores the information.

The browser performs the actual storage.

JavaScript only sends requests.
*/





// =========================================================================================
// Internal Working of localStorage
// =========================================================================================

/*
Suppose the following information needs to be stored.

Name = Rahul

Internally, the browser stores it like this.

--------------------------------------

Key          Value

Name         Rahul

--------------------------------------

Every piece of information inside localStorage is stored as a Key-Value Pair.

This is one of the most important concepts in Browser Storage.

Every value must always have a corresponding key.

Without a key, localStorage cannot identify the stored information.

Think of it like a dictionary.

Word

↓

Meaning

Similarly,

Key

↓

Value

Whenever JavaScript needs some information, it provides the key.

The browser searches for that key and returns the corresponding value.
*/





// =========================================================================================
// Real Life Analogy
// =========================================================================================

/*
Imagine a school library.

Every book has a unique Book Number.

Suppose you ask the librarian,

"Please give me Book Number 102."

The librarian immediately searches for Book Number 102 and returns that particular book.

Notice that you never ask,

"Give me the blue book."

Instead, you ask using its unique identifier.

localStorage works exactly the same way.

The Key acts like the Book Number.

The Value acts like the Book itself.

Whenever JavaScript needs some information, it asks for the Key.

The browser returns the corresponding Value.
*/





// =========================================================================================
// 4. Characteristics of localStorage
// =========================================================================================

/*
There are several important characteristics of localStorage.

1.

It stores information permanently.

The stored information remains until it is manually deleted.

------------------------------------------------------------

2.

It belongs to the browser.

JavaScript simply uses it.

------------------------------------------------------------

3.

It stores information as Key-Value Pairs.

Every value requires a key.

------------------------------------------------------------

4.

It stores only String values.

Numbers, Arrays and Objects must first be converted into Strings.

We will study this using JSON later.

------------------------------------------------------------

5.

Different websites have different localStorage.

For example,

google.com

facebook.com

amazon.com

Each website receives its own separate localStorage.

One website cannot directly access another website's localStorage.

This improves security and privacy.
*/





// =========================================================================================
// 5. Storage Capacity
// =========================================================================================

/*
Unlike Cookies, localStorage provides much larger storage.

Most modern browsers allow approximately 5 MB to 10 MB.

The exact size depends upon the browser.

Although this is much larger than Cookies, it is still considered small compared to databases.

Therefore localStorage should never be treated as a replacement for databases like:

MySQL

MongoDB

PostgreSQL

Supabase

Firebase

These databases can store millions of records, whereas localStorage is intended only for small
browser-based information.
*/





// =========================================================================================
// 6. Important Rules of localStorage
// =========================================================================================

/*
Before writing even a single line of code, remember these rules.

Rule 1

localStorage belongs to the Browser.

------------------------------------------------------------

Rule 2

Everything inside localStorage is stored as a String.

------------------------------------------------------------

Rule 3

Every value is stored using a Key.

------------------------------------------------------------

Rule 4

Refreshing does not remove localStorage data.

------------------------------------------------------------

Rule 5

Closing the browser does not remove localStorage data.

------------------------------------------------------------

Rule 6

Removing Browser Data or calling removeItem() or clear() can delete localStorage data.

------------------------------------------------------------

Rule 7

Each website gets its own independent localStorage.
*/





// =========================================================================================
// 7. Common Beginner Misconceptions
// =========================================================================================

/*
Misconception 1

"localStorage is a JavaScript variable."

Incorrect.

It is a Browser API.

------------------------------------------------------------

Misconception 2

"Refreshing removes localStorage."

Incorrect.

Refreshing removes JavaScript variables.

localStorage remains unchanged.

------------------------------------------------------------

Misconception 3

"localStorage can directly store Arrays and Objects."

Incorrect.

It stores only Strings.

Arrays and Objects must first be converted into Strings using JSON.stringify().

------------------------------------------------------------

Misconception 4

"localStorage is a database."

Incorrect.

It is only a small browser storage mechanism.

Databases are much more powerful and are designed to store huge amounts of information.

------------------------------------------------------------

Misconception 5

"I can safely store passwords inside localStorage."

Incorrect.

Since localStorage can be accessed using JavaScript running on the page, sensitive information
such as passwords, banking details or authentication secrets should never be stored here in
real-world applications.

For learning purposes, storing passwords helps us understand how Login and Registration
workflows function, but professional applications always store passwords securely in databases
after hashing them.
*/



/*******************************************************************************************************
 *************************************** LOCALSTORAGE METHODS ******************************************
 *
 * Topics Covered:
 * 1. Why Methods are Required
 * 2. localStorage.setItem()
 * 3. localStorage.getItem()
 * 4. localStorage.removeItem()
 * 5. localStorage.clear()
 * 6. localStorage.length
 * 7. localStorage.key()
 * 8. Complete localStorage Workflow
 *
 * We have already learned that localStorage is used to store information permanently inside
 * the browser.
 *
 * But simply knowing that localStorage exists is not enough.
 *
 * JavaScript needs some way to communicate with the browser.
 *
 * Just like we use functions such as console.log(), alert() or prompt(), localStorage also
 * provides several built-in methods through which JavaScript can store, retrieve or remove
 * data.
 *
 * These methods are called whenever we want to perform any operation on Browser Storage.
 *******************************************************************************************************/



// =========================================================================================
// 1. Why Are Methods Required?
// =========================================================================================

/*
Imagine a library.

The books already exist inside the library.

But can you simply walk in and directly take a book from any shelf?

No.

There is a proper process.

You request the librarian.

The librarian searches for the required book.

The librarian returns it.

Similarly,

The browser owns localStorage.

JavaScript cannot directly enter the browser's storage area.

Instead, JavaScript uses the methods provided by localStorage.

These methods tell the browser exactly what operation should be performed.

For example,

Want to save data?

↓

Use setItem()

-----------------------------------------

Want to read data?

↓

Use getItem()

-----------------------------------------

Want to delete one item?

↓

Use removeItem()

-----------------------------------------

Want to delete everything?

↓

Use clear()

Every interaction between JavaScript and Browser Storage happens through these methods.
*/





// =========================================================================================
// 2. localStorage.setItem()
// =========================================================================================

/*
Definition
----------

setItem() is used to store information inside localStorage.

It accepts two values.

1.

Key

2.

Value

Syntax
------

localStorage.setItem(key, value);

The Key acts like the name of the data.

The Value is the actual information that will be stored.

Internally, the browser creates a Key-Value pair.

Example

Name  → Rahul

Email → abc@gmail.com

City  → Guwahati

Remember,

If the same key already exists,

setItem() does NOT create another copy.

Instead, it updates the previous value.

This behaviour becomes very important later when sir explains why user data gets overwritten.
*/





// =========================================================================================
// Example
// =========================================================================================

let name = "Dhiman";

localStorage.setItem("studentName", name);

/*
Browser Storage

--------------------------------

studentName

↓

Dhiman

--------------------------------

Reason
------

The browser creates a key named "studentName".

Its value becomes "Dhiman".

The data now remains inside Browser Storage even after refreshing the webpage.
*/





// =========================================================================================
// 3. localStorage.getItem()
// =========================================================================================

/*
Definition
----------

getItem() is used to retrieve previously stored information.

Syntax
------

localStorage.getItem(key);

The browser searches for the provided key.

If the key exists,

the corresponding value is returned.

If the key does not exist,

the browser returns null.

Remember this carefully because this null value will create one of the biggest beginner errors
while working with localStorage.
*/





// =========================================================================================
// Example
// =========================================================================================

let data = localStorage.getItem("studentName");

console.log(data);

/*
Output
------

Dhiman

Reason
------

The browser searched for the key "studentName".

Since it already existed,

its value was returned.

If the key had not existed,

Output

null
*/





// =========================================================================================
// Important Note
// =========================================================================================

/*
Many beginners think getItem() returns a variable.

It does not.

It returns the VALUE stored against the given key.

For example,

Key

studentName

↓

Value

Dhiman

Only the value is returned.

The key remains inside Browser Storage.
*/





// =========================================================================================
// 4. localStorage.removeItem()
// =========================================================================================

/*
Definition
----------

removeItem() removes only one specific Key-Value pair.

Syntax
------

localStorage.removeItem(key);

Only the provided key is deleted.

Everything else inside localStorage remains unchanged.

Think of it like deleting one file from a folder.

The folder still exists.

Only one file disappears.
*/





// =========================================================================================
// Example
// =========================================================================================

localStorage.removeItem("studentName");

/*
Before

studentName

↓

Dhiman

--------------------------------

After

studentName

↓

Removed

--------------------------------

Only this item is deleted.

Other stored information remains safe.
*/





// =========================================================================================
// 5. localStorage.clear()
// =========================================================================================

/*
Definition
----------

clear() removes EVERYTHING stored inside localStorage.

Syntax
------

localStorage.clear();

Unlike removeItem(),

clear() does not ask for any key.

It simply removes every Key-Value pair stored for that website.

Think of it like formatting an entire pen drive.

Every stored file disappears.
*/





// =========================================================================================
// Example
// =========================================================================================

localStorage.clear();

/*
Before

studentName

email

theme

language

--------------------------------

After

Nothing remains.

The Browser Storage becomes completely empty.
*/





// =========================================================================================
// Difference Between removeItem() and clear()
// =========================================================================================

/*
removeItem()

↓

Deletes only one item.

--------------------------------------------

clear()

↓

Deletes every item inside localStorage.

This is one of the most commonly asked interview questions.
*/





// =========================================================================================
// 6. localStorage.length
// =========================================================================================

/*
Sometimes we want to know how many items currently exist inside localStorage.

For this purpose,

localStorage provides a property called length.

Syntax
------

localStorage.length

Notice something.

length is NOT a method.

There are no parentheses.

It is simply a property that stores the number of Key-Value pairs currently available.
*/





// =========================================================================================
// Example
// =========================================================================================

console.log(localStorage.length);

/*
Output

3

Reason

Suppose Browser Storage currently contains

studentName

email

theme

There are three Key-Value pairs.

Therefore,

length returns 3.
*/





// =========================================================================================
// 7. localStorage.key()
// =========================================================================================

/*
Sometimes we know the position of an item,

but we do not know its key.

For this purpose,

localStorage provides the key() method.

Syntax

localStorage.key(index);

It returns the key stored at the given index.

Remember,

It returns only the key.

Not the value.
*/





// =========================================================================================
// Example
// =========================================================================================

console.log(localStorage.key(0));

/*
Possible Output

studentName

Reason

The first stored key inside localStorage is returned.

Different browsers may store the order differently, so we should not depend upon the index
while writing real-world applications.
*/





// =========================================================================================
// Complete Workflow of localStorage
// =========================================================================================

/*
Suppose a user enters

Name

↓

Dhiman

The overall workflow becomes

User enters data

↓

JavaScript reads the input

↓

setItem()

↓

Browser stores the data

↓

User refreshes the webpage

↓

JavaScript calls getItem()

↓

Browser searches the key

↓

Stored value is returned

↓

JavaScript uses the returned value

Notice something important.

JavaScript never directly touches the storage.

Every operation goes through the methods provided by localStorage.

This is why we say that JavaScript communicates with Browser Storage through its API.
*/





// =========================================================================================
// Common Beginner Mistakes
// =========================================================================================

/*
Mistake 1

Thinking setItem() creates variables.

Incorrect.

It creates a Key-Value pair inside Browser Storage.

------------------------------------------------------------

Mistake 2

Thinking getItem() returns an object.

Incorrect.

It returns whatever value is stored against the given key.

Initially, that value is always a String.

------------------------------------------------------------

Mistake 3

Using clear() accidentally.

Many beginners use clear() while testing and later wonder why all stored information
disappeared.

Remember,

clear() removes everything.

------------------------------------------------------------

Mistake 4

Using removeItem() without knowing the correct key.

If the key name is incorrect,

nothing is removed because the browser cannot find that particular Key-Value pair.

------------------------------------------------------------

Up to this point, everything looks simple.

However, a major problem still exists.

Suppose we want to store an Object like this.

let student = {
    name: "Dhiman",
    age: 20
}

Can localStorage store this object directly?

The answer is NO.

This is one of the biggest problems beginners face while learning localStorage.

In the next section, we will understand why localStorage can store only Strings and why
JSON.stringify() and JSON.parse() become necessary.
*/


/*******************************************************************************************************
 ************************************ WHY JSON IS REQUIRED *********************************************
 *
 * Topics Covered:
 * 1. The Biggest Limitation of localStorage
 * 2. Why localStorage Stores Only Strings
 * 3. Understanding Different Data Types
 * 4. Why Arrays and Objects Cannot Be Stored Directly
 * 5. The Need for JSON
 * 6. JSON (JavaScript Object Notation)
 * 7. Introduction to JSON.stringify() and JSON.parse()
 *
 * Till now, everything looked very simple.
 *
 * We learned how to store and retrieve values using setItem() and getItem().
 *
 * But now we face a very important problem.
 *
 * Suppose we are creating a Registration Form.
 *
 * A user enters:
 *
 * • Full Name
 * • Email
 * • Password
 *
 * Can we store all this information as three separate variables?
 *
 * Yes.
 *
 * But is that the correct approach?
 *
 * No.
 *
 * Instead, we should store all related information together inside an Object.
 *
 * Unfortunately, localStorage does not understand JavaScript Objects.
 *
 * This is where JSON comes into the picture.
 *******************************************************************************************************/



// =========================================================================================
// 1. The Biggest Limitation of localStorage
// =========================================================================================

/*
One of the most important rules of localStorage is:

It stores ONLY Strings.

This statement may look very small, but it creates one of the biggest problems while working
with Browser Storage.

Suppose we write,

*/

let name = "Dhiman";

localStorage.setItem("student", name);

/*
This works perfectly.

Why?

Because "Dhiman" is already a String.

Now suppose we try storing a Number.

*/

let age = 20;

localStorage.setItem("age", age);

/*
Will this work?

Yes.

But there is something interesting happening internally.

Although age is a Number,

localStorage converts it into a String before storing it.

Everything inside localStorage is ultimately stored as text.

The same happens for Boolean values.

*/

let isStudent = true;

localStorage.setItem("studentStatus", isStudent);

/*
Internally,

true

becomes

"true"

Everything becomes a String before being stored.

This is one of the most important characteristics of localStorage.
*/





// =========================================================================================
// 2. Why Does localStorage Store Only Strings?
// =========================================================================================

/*
Many beginners ask,

"Why doesn't localStorage simply store Objects or Arrays?"

The answer is because Browser Storage was designed to store textual information.

Strings are:

• Easy to save

• Easy to transfer

• Easy to retrieve

• Supported consistently by every browser

If browsers started storing JavaScript Objects directly,

different browsers could represent those objects differently.

To avoid this inconsistency,

Browser Storage stores everything as plain text.

Therefore,

before storing complex JavaScript data,

we first convert it into a textual format.

That textual format is called JSON.
*/





// =========================================================================================
// 3. Simple Data Types vs Complex Data Types
// =========================================================================================

/*
Before understanding JSON,

we should first understand the difference between simple and complex data.

Simple Data Types

• String

• Number

• Boolean

• Undefined

• Null

These store only one value.

Example
*/

let city = "Guwahati";
let marks = 95;
let result = true;

/*
Each variable contains only one piece of information.

Now suppose we are storing student information.

Instead of one value,

we now have multiple related values.

For example,

Name

Email

Password

Age

Phone Number

Address

Can we create ten different variables?

Yes.

But that quickly becomes difficult to manage.

Instead,

JavaScript provides Objects.
*/





// =========================================================================================
// Example
// =========================================================================================

let student = {

    name: "Dhiman",

    email: "dhiman@gmail.com",

    password: "123456"

};

/*
Everything related to one student is now grouped together.

This is much cleaner.

This is much easier to understand.

This is exactly how real-world applications organise data.

Unfortunately,

localStorage cannot directly understand this Object.
*/





// =========================================================================================
// 4. What Happens if We Directly Store an Object?
// =========================================================================================

/*
Most beginners naturally write the following code.
*/

let student = {

    name: "Dhiman",

    email: "dhiman@gmail.com"

};

localStorage.setItem("studentData", student);

/*
Many students expect the browser to store

{

name: "Dhiman",

email: "dhiman@gmail.com"

}

But that is NOT what happens.

Instead,

the browser stores

"[object Object]"

Question

Why?

Because localStorage first converts everything into a String.

JavaScript Objects cannot automatically become meaningful Strings.

Therefore,

they are converted into the default String representation,

which is

"[object Object]"

As a result,

the original Object is completely lost.

This is one of the biggest beginner mistakes.
*/





// =========================================================================================
// Example
// =========================================================================================

let student = {

    name: "Rahul",

    age: 20

};

localStorage.setItem("student", student);

console.log(localStorage.getItem("student"));

/*
Output

[object Object]

Reason

The browser does not know how to store JavaScript Objects directly.

Therefore,

it converts the Object into its default String representation.

The actual Object is lost.
*/





// =========================================================================================
// 5. The Same Problem Happens with Arrays
// =========================================================================================

/*
Objects are not the only problem.

Arrays also create confusion.

Consider the following example.
*/

let numbers = [10, 20, 30];

localStorage.setItem("numbers", numbers);

/*
Many beginners think the browser stores an Array.

Actually,

it stores

"10,20,30"

This is only a String.

The browser no longer remembers that it originally came from an Array.

Therefore,

when we retrieve it,

we do not get an Array back.

We simply receive a String.

This means methods like

push()

pop()

shift()

unshift()

cannot be used directly.

The Array structure has been lost.
*/





// =========================================================================================
// 6. The Real Problem in Registration Forms
// =========================================================================================

/*
Suppose we are building a Registration Form.

One user enters

Name

Email

Password

Naturally,

we create an Object.

*/

let obj = {

    fullName: "Dhiman",

    email: "dhiman@gmail.com",

    password: "123456"

};

/*
Now we want to save this Object inside localStorage.

But localStorage accepts only Strings.

Therefore,

the browser cannot correctly store this Object.

If we continue without solving this problem,

our Registration System will never work properly.

Clearly,

we need some mechanism that can convert JavaScript Objects into a String before storing them.

Similarly,

after reading the data,

we need another mechanism that converts the String back into the original Object.

This is exactly what JSON does.
*/





// =========================================================================================
// 7. What is JSON?
// =========================================================================================

/*
JSON stands for

JavaScript Object Notation.

Despite its name,

JSON is NOT a JavaScript Object.

It is simply a textual format used for representing data.

Think of JSON as a common language.

JavaScript understands it.

Browsers understand it.

Servers understand it.

Databases understand it.

APIs understand it.

Because everyone understands JSON,

it has become the standard format for exchanging data.

Whenever JavaScript needs to save an Object,

it first converts that Object into JSON.

Later,

when the Object is required again,

JavaScript converts the JSON back into the original Object.
*/





// =========================================================================================
// 8. Two Most Important JSON Methods
// =========================================================================================

/*
JavaScript provides two built-in methods for working with JSON.

1.

JSON.stringify()

Purpose

Converts a JavaScript Object or Array into a JSON String.

This method is used BEFORE storing data inside localStorage.

------------------------------------------------------------

2.

JSON.parse()

Purpose

Converts a JSON String back into its original JavaScript Object or Array.

This method is used AFTER retrieving data from localStorage.

------------------------------------------------------------

Remember this simple workflow.

JavaScript Object

↓

JSON.stringify()

↓

JSON String

↓

Stored inside localStorage

↓

JSON.parse()

↓

Original JavaScript Object

This workflow is used in almost every Registration Form, Login System, Shopping Cart,
To-Do Application and many other real-world web applications.

In the next section, we will study JSON.stringify() and JSON.parse() in detail with multiple
examples before implementing the Registration Form.
*/


/*******************************************************************************************************
 ******************************** JSON.stringify() AND JSON.parse() ************************************
 *
 * Topics Covered:
 * 1. Why JSON Methods are Required
 * 2. JSON.stringify()
 * 3. JSON.parse()
 * 4. Complete Data Conversion Workflow
 * 5. Why Both Methods are Always Used Together
 * 6. Common Beginner Mistakes
 *
 * In the previous section, we learned that localStorage can store only Strings.
 *
 * We also learned that JavaScript Objects and Arrays cannot be stored directly.
 *
 * This creates a very important problem.
 *
 * Suppose we have a Registration Form.
 *
 * Every registered user is represented as an Object.
 *
 * If localStorage cannot store Objects, then how do websites save user information?
 *
 * The answer is very simple.
 *
 * Before storing the Object, we convert it into a String.
 *
 * After retrieving it, we convert the String back into the original Object.
 *
 * JavaScript provides two built-in methods for performing these conversions:
 *
 * • JSON.stringify()
 * • JSON.parse()
 *
 * These two methods are used together in almost every modern JavaScript application.
 *******************************************************************************************************/



// =========================================================================================
// 1. Why Are JSON Methods Required?
// =========================================================================================

/*
Suppose we have the following Object.
*/

let student = {

    fullName: "Dhiman",

    email: "dhiman@gmail.com",

    password: "123456"

};

/*
Can this Object be stored directly?

No.

Because localStorage stores only Strings.

Therefore, before storing the Object, we must first convert it into a String.

Similarly,

after retrieving the String,

we need to convert it back into the original Object.

Without these conversions,

our Registration and Login systems cannot work correctly.

This is exactly why JSON methods exist.
*/





// =========================================================================================
// 2. JSON.stringify()
// =========================================================================================

/*
Definition
----------

JSON.stringify() converts a JavaScript Object or Array into a JSON String.

Syntax
------

JSON.stringify(data)

Notice that we pass the Object (or Array) as the argument.

The method returns a String.

It does NOT modify the original Object.

Instead,

it creates a completely new JSON String that can safely be stored inside localStorage.

Think of JSON.stringify() as a Translator.

JavaScript Object

↓

Translator

↓

JSON String

The browser now understands this String and can store it without any problem.
*/





// =========================================================================================
// Example
// =========================================================================================

let student = {

    fullName: "Dhiman",

    email: "dhiman@gmail.com",

    password: "123456"

};

let jsonData = JSON.stringify(student);

console.log(jsonData);

/*
Output

{"fullName":"Dhiman","email":"dhiman@gmail.com","password":"123456"}

Observe something carefully.

Before conversion,

student was a JavaScript Object.

After conversion,

jsonData becomes a String.

Although it looks similar to an Object,

it is actually plain text.

This String can now be stored safely inside localStorage.
*/





// =========================================================================================
// Internal Working
// =========================================================================================

/*
Original JavaScript Object

↓

{

fullName: "Dhiman",

email: "dhiman@gmail.com",

password: "123456"

}

↓

JSON.stringify()

↓

JSON String

↓

"{\"fullName\":\"Dhiman\",\"email\":\"dhiman@gmail.com\",\"password\":\"123456\"}"

↓

localStorage

Notice something important.

localStorage never receives the Object.

It receives only the converted String.
*/





// =========================================================================================
// 3. JSON.parse()
// =========================================================================================

/*
Definition
----------

JSON.parse() converts a JSON String back into its original JavaScript Object or Array.

Syntax
------

JSON.parse(data)

Unlike stringify(),

parse() works in the opposite direction.

Think of it as a Reverse Translator.

JSON String

↓

Translator

↓

JavaScript Object

Whenever we read information from localStorage,

it always comes back as a String.

Therefore,

JSON.parse() is used to recreate the original JavaScript Object.
*/





// =========================================================================================
// Example
// =========================================================================================

let jsonData = '{"fullName":"Dhiman","email":"dhiman@gmail.com"}';

let student = JSON.parse(jsonData);

console.log(student);

/*
Output

{

fullName: "Dhiman",

email: "dhiman@gmail.com"

}

Now student is once again a normal JavaScript Object.

We can access its properties normally.

Example

student.fullName

student.email

student.password

Everything works exactly like before conversion.
*/





// =========================================================================================
// Example
// =========================================================================================

let jsonData = '{"fullName":"Dhiman","email":"dhiman@gmail.com"}';

let student = JSON.parse(jsonData);

console.log(student.fullName);

/*
Output

Dhiman

Reason

JSON.parse() recreated the original Object.

Therefore,

dot notation works normally.
*/





// =========================================================================================
// 4. Complete Data Conversion Workflow
// =========================================================================================

/*
Understanding this workflow is one of the most important concepts in Browser Storage.

Step 1

User fills the Registration Form.

↓

Step 2

JavaScript creates an Object.

↓

Step 3

JSON.stringify() converts the Object into a String.

↓

Step 4

localStorage stores the String.

↓

Later...

↓

Step 5

JavaScript calls getItem().

↓

Step 6

The browser returns the stored String.

↓

Step 7

JSON.parse() converts the String back into the original Object.

↓

Step 8

JavaScript can now use the Object normally.

This entire process happens almost every time we save or retrieve complex data from
localStorage.
*/





// =========================================================================================
// Visual Representation
// =========================================================================================

/*
JavaScript Object

↓

JSON.stringify()

↓

JSON String

↓

localStorage.setItem()

↓

Stored Inside Browser

↓

localStorage.getItem()

↓

JSON String

↓

JSON.parse()

↓

Original JavaScript Object

Memorize this workflow.

It is one of the most frequently used concepts in JavaScript development.
*/





// =========================================================================================
// 5. Why Are stringify() and parse() Always Used Together?
// =========================================================================================

/*
One of the most common questions beginners ask is,

"Can I use only JSON.stringify()?"

No.

Because after retrieving the data,

it will still remain a String.

Similarly,

"Can I use only JSON.parse()?"

No.

Because localStorage cannot store Objects directly.

Therefore,

both methods always work as a pair.

Before Saving

↓

JSON.stringify()

--------------------------------------------

After Reading

↓

JSON.parse()

Whenever you see localStorage in real-world projects,

you will almost always find these two methods together.
*/





// =========================================================================================
// 6. Common Beginner Mistakes
// =========================================================================================

/*
Mistake 1

Trying to store an Object directly.

Example

localStorage.setItem("student", student);

Result

[object Object]

Reason

The Object was never converted into JSON.

------------------------------------------------------------

Mistake 2

Forgetting JSON.parse().

Example

let data = localStorage.getItem("student");

Now data is still a String.

Trying to access

data.fullName

returns

undefined

because Strings do not have object properties.

------------------------------------------------------------

Mistake 3

Calling JSON.parse() on an Object.

Example

let student = {

name: "Rahul"

};

JSON.parse(student);

This produces an error because parse() expects a JSON String, not an Object.

------------------------------------------------------------

Mistake 4

Calling JSON.stringify() twice.

Example

JSON.stringify(JSON.stringify(student))

This converts the String again, resulting in an incorrect value.

Only one conversion should be performed before storing.

------------------------------------------------------------

Up to this point, we know how to store one Object successfully.

However,

another important problem still exists.

Suppose one student registers successfully.

Later,

another student also registers.

If we simply call

localStorage.setItem()

again,

the previous student's information disappears.

Why does this happen?

How can we store multiple users instead of just one?

This is exactly the next problem sir discussed in class, and it leads us to using Arrays along
with localStorage.
*/


/*******************************************************************************************************
 ******************************* STORING MULTIPLE USERS - THE REAL PROBLEM ******************************
 *
 * Topics Covered:
 * 1. Storing One User Successfully
 * 2. Why the Second User Deletes the First User
 * 3. Understanding Key Overwriting
 * 4. Why One Object is Not Enough
 * 5. The Need for Arrays
 * 6. Storing Multiple Objects Inside an Array
 * 7. The Next Problem We Encounter
 *
 * Until now, everything seems to work perfectly.
 *
 * A user fills the Registration Form.
 *
 * JavaScript creates an Object.
 *
 * The Object is converted into a JSON String.
 *
 * Finally, the JSON String is stored inside localStorage.
 *
 * It looks like our Registration System is complete.
 *
 * But sir intentionally demonstrated another problem.
 *
 * He registered one user.
 *
 * Then he registered another user.
 *
 * Surprisingly...
 *
 * The first user's information disappeared.
 *
 * Why?
 *
 * Understanding this problem is much more important than remembering the solution because
 * almost every beginner makes this mistake while learning localStorage.
 *******************************************************************************************************/



// =========================================================================================
// 1. Registering the First User
// =========================================================================================

/*
Suppose a user enters the following information.

Full Name : Dhiman

Email     : dhiman@gmail.com

Password  : 123456

We create an Object.
*/

let obj = {

    fullName: "Dhiman",

    email: "dhiman@gmail.com",

    password: "123456"

};

localStorage.setItem("userData", JSON.stringify(obj));

/*
Everything works correctly.

Browser Storage now contains

--------------------------------------------------

Key

userData

↓

Value

{

fullName : "Dhiman",

email : "dhiman@gmail.com",

password : "123456"

}

--------------------------------------------------

So far, there is absolutely no problem.
*/





// =========================================================================================
// 2. The Second Registration
// =========================================================================================

/*
Now another student opens the Registration Form.

He enters

Full Name : Rahul

Email     : rahul@gmail.com

Password  : 987654

Again, JavaScript creates an Object.
*/

let obj = {

    fullName: "Rahul",

    email: "rahul@gmail.com",

    password: "987654"

};

localStorage.setItem("userData", JSON.stringify(obj));

/*
Now comes the surprise.

Most beginners expect Browser Storage to contain

Dhiman

Rahul

Both users together.

But this is NOT what happens.

Instead,

only Rahul's information remains.

Dhiman's information completely disappears.

Why?
*/





// =========================================================================================
// 3. Understanding Overwriting
// =========================================================================================

/*
Remember something we learned earlier.

Every piece of information inside localStorage is stored using a Key.

For example,

userData

↓

Some Value

Now observe carefully.

First Registration

Key

userData

↓

Dhiman

---------------------------------------------------

Second Registration

Key

userData

↓

Rahul

Notice something.

The Key is exactly the same.

Whenever setItem() receives a Key that already exists,

it does NOT create another entry.

Instead,

it replaces the old value with the new one.

This process is called Overwriting.

Definition
----------

Overwriting means replacing an existing value with a new value using the same Key.

This is one of the most important behaviours of setItem().

It never stores duplicate Keys.

Each Key can have only ONE value.
*/





// =========================================================================================
// Real Life Analogy
// =========================================================================================

/*
Imagine you have one notebook.

The first day you write

"My favourite colour is Blue."

The next day,

instead of writing on another page,

you erase the previous sentence and write

"My favourite colour is Black."

Did the notebook now contain both sentences?

No.

The old sentence disappeared.

The new sentence replaced it.

Exactly the same thing happens inside localStorage.

Same Key

↓

Old Value Removed

↓

New Value Stored
*/





// =========================================================================================
// 4. Why One Object is Not Enough
// =========================================================================================

/*
At this point sir asked an important question.

Can one Object represent multiple users?

Consider the following Object.

*/

let obj = {

    fullName: "Dhiman",

    email: "dhiman@gmail.com",

    password: "123456"

};

/*
How many users does this Object represent?

Only ONE.

Can we store Rahul inside the same Object?

No.

Because Rahul is another user.

Every registered user should have his own Object.

Therefore,

one Object alone can never represent an entire Registration System.

We need a collection that can store many Objects together.

JavaScript already provides such a collection.

That collection is called an Array.
*/





// =========================================================================================
// 5. Why Arrays Solve This Problem
// =========================================================================================

/*
An Array can store multiple values.

Those values can also be Objects.

Instead of storing

One Object

↓

We store

Many Objects

inside

One Array.

Example
*/

let arr = [

    {

        fullName: "Dhiman",

        email: "dhiman@gmail.com"

    },

    {

        fullName: "Rahul",

        email: "rahul@gmail.com"

    }

];

/*
Now observe carefully.

The Array represents the complete user list.

Each Object represents one registered user.

This is exactly how most Registration Systems begin.

Instead of thinking

One User

↓

One localStorage Item

We think

One Array

↓

Many Users
*/





// =========================================================================================
// Visual Representation
// =========================================================================================

/*
Without Array

-----------------------------------

userData

↓

{

Dhiman

}

-----------------------------------

Second Registration

↓

Rahul

↓

Dhiman Lost

-----------------------------------

With Array

-----------------------------------

userData

↓

[

{

Dhiman

},

{

Rahul

},

{

Amit

},

{

Riya

}

]

-----------------------------------

Now every registered user remains safely inside the same Array.
*/





// =========================================================================================
// 6. The New Registration Workflow
// =========================================================================================

/*
Instead of storing

Object

↓

Store

Array

Inside that Array,

every user is represented as an Object.

Workflow

User Registers

↓

Create Object

↓

Add Object into Array

↓

Convert Array into JSON

↓

Store Array inside localStorage

This approach allows us to keep every registered user together.
*/





// =========================================================================================
// 7. Another Problem Appears...
// =========================================================================================

/*
At first glance,

it looks like Arrays have completely solved our problem.

But sir immediately showed another issue.

Suppose we write

*/

let arr = [];

arr.push(obj);

localStorage.setItem("userData", JSON.stringify(arr));

/*
Looks correct.

One user is successfully stored.

Now another user registers.

Again,

JavaScript executes

let arr = [];

What happens now?

A brand new empty Array is created.

The previous Array stored inside localStorage is NOT automatically loaded into this new Array.

Therefore,

the new user is pushed into another empty Array.

Finally,

that new Array is again stored using

userData

which overwrites the previous Array.

Result

Only the latest registered user remains.

So even though Arrays solved one problem,

another problem immediately appears.

Before adding a new user,

we must first retrieve the previously stored Array from localStorage.

That is exactly why, in the next section, sir introduced:

*/

let arr = JSON.parse(localStorage.getItem("userData")) || [];

/*
This single line solves one of the biggest problems in Registration Systems.

We will understand every part of this statement line by line in the next section before
studying the complete Registration Form.
*/


/*******************************************************************************************************
 ******************************** RETRIEVING PREVIOUS DATA FROM localStorage ***************************
 *
 * Topics Covered:
 * 1. The Biggest Problem with Arrays
 * 2. Understanding the Statement
 *      let arr = JSON.parse(localStorage.getItem("userData")) || [];
 * 3. Why getItem() is Used First
 * 4. Why JSON.parse() is Required
 * 5. Why null is Returned Initially
 * 6. Why || [] is Necessary
 * 7. First Registration Workflow
 * 8. Second Registration Workflow
 * 9. Common Beginner Mistakes
 *
 * In the previous section, we solved one problem by using an Array instead of a single Object.
 *
 * Every registered user is now stored as an Object inside one Array.
 *
 * However, sir immediately showed that another problem still exists.
 *
 * Every time the Register button is clicked, JavaScript starts executing from the beginning.
 *
 * Therefore, if we simply write:
 *
 *      let arr = [];
 *
 * JavaScript creates a brand new empty Array every single time.
 *
 * It completely forgets about the users that were previously stored inside localStorage.
 *
 * To solve this problem, we must first retrieve the existing Array from localStorage before
 * adding the new user.
 *
 * This is the reason behind one of the most important statements in beginner JavaScript.
 *******************************************************************************************************/



// =========================================================================================
// The Statement
// =========================================================================================

let arr = JSON.parse(localStorage.getItem("userData")) || [];



/*
Many beginners simply memorize this line.

That is a mistake.

Instead, understand what every single part is doing.

Once you understand this line, Registration Forms, Login Systems and many CRUD applications
become much easier to understand.
*/





// =========================================================================================
// 1. Why Can't We Simply Write let arr = [] ?
// =========================================================================================

/*
Suppose one student has already registered.

Browser Storage

--------------------------------------------

userData

↓

[

{

fullName : "Dhiman",

email : "dhiman@gmail.com"

}

]

--------------------------------------------

Now another student comes to register.

If we write

*/

let arr = [];

/*
What happens?

JavaScript creates a completely new empty Array.

Notice something important.

This Array has absolutely no connection with the Array already stored inside localStorage.

Old Array

↓

Still inside Browser Storage

--------------------------------

New Array

↓

Created inside JavaScript Memory

These are two completely different Arrays.

Therefore,

when we push the second user,

the first user is never added into this new Array.

Eventually,

the new Array overwrites the previous one.

Result

Only the latest registered user remains.

This was exactly the problem sir demonstrated during class.
*/





// =========================================================================================
// 2. Why getItem() is Used First
// =========================================================================================

/*
Instead of creating a new empty Array,

we should first ask the browser,

"Do you already have some users stored?"

This is exactly what getItem() does.

*/

localStorage.getItem("userData");

/*
The browser now searches for a Key named

"userData"

Two situations are possible.

Situation 1

The Key already exists.

↓

The browser returns its stored value.

Situation 2

The Key does not exist.

↓

The browser returns

null

Notice that getItem() NEVER creates data.

It only retrieves existing data.
*/





// =========================================================================================
// Example
// =========================================================================================

let data = localStorage.getItem("userData");

console.log(data);

/*
Possible Output

"[{"fullName":"Dhiman","email":"dhiman@gmail.com"}]"

OR

null

depending on whether userData already exists.
*/





// =========================================================================================
// 3. Why JSON.parse() is Used
// =========================================================================================

/*
Suppose localStorage already contains

-----------------------------------

userData

↓

"[{"fullName":"Dhiman"}]"

-----------------------------------

Notice something.

This is NOT an Array.

This is only a String.

Can we write

data.push(obj)

No.

Why?

Because push() works only on Arrays.

Strings do not have a push() method.

Therefore,

before using the data,

we must convert it back into the original JavaScript Array.

This is exactly what JSON.parse() does.
*/





// =========================================================================================
// Example
// =========================================================================================

let data = localStorage.getItem("userData");

let arr = JSON.parse(data);

/*
Before JSON.parse()

↓

String

------------------------------------

After JSON.parse()

↓

JavaScript Array

Now we can use

push()

pop()

length

for loop

map()

filter()

and every other Array method normally.
*/





// =========================================================================================
// 4. Why Does getItem() Return null?
// =========================================================================================

/*
This is one of the most confusing concepts for beginners.

Suppose the website has just been opened for the very first time.

No user has registered yet.

Browser Storage

↓

Empty

Now JavaScript executes

*/

localStorage.getItem("userData");

/*
The browser searches for

"userData"

Can it find that Key?

No.

So what should it return?

The browser returns

null

Definition

----------

null means

"No value exists."

It does NOT mean

Empty Array

It does NOT mean

Empty Object

It simply means

Nothing was found.
*/





// =========================================================================================
// Example
// =========================================================================================

let data = localStorage.getItem("userData");

console.log(data);

/*
Output

null

Reason

"userData" has never been stored before.

Therefore,

the browser cannot find that Key.
*/





// =========================================================================================
// 5. The New Problem
// =========================================================================================

/*
Now suppose we write

*/

let arr = JSON.parse(localStorage.getItem("userData"));

/*
During the first registration,

localStorage.getItem("userData")

returns

null

Therefore,

JavaScript becomes

*/

let arr = JSON.parse(null);

/*
Interestingly,

JSON.parse(null)

returns

null

Now observe carefully.

arr is NOT an Array anymore.

arr is

null

Now suppose we write

*/

arr.push(obj);

/*
Will this work?

No.

Immediately an error occurs.

Reason

null does not have a push() method.

Only Arrays have push().

This was another problem sir explained before introducing

|| []
*/





// =========================================================================================
// 6. Why || [] is Necessary
// =========================================================================================

/*
The Logical OR Operator (||) checks the value on its left side.

If that value is valid (truthy),

JavaScript uses it.

If that value is invalid (falsy),

JavaScript uses the value on the right side instead.

In our statement

*/

let arr = JSON.parse(localStorage.getItem("userData")) || [];

/*
Two situations are possible.

Situation 1

Browser already contains userData.

↓

JSON.parse()

returns an Array.

↓

Since the left side already has a valid value,

JavaScript ignores

[]

Result

arr becomes the previously stored Array.

------------------------------------------------------------

Situation 2

No previous users exist.

↓

getItem()

returns

null

↓

JSON.parse(null)

returns

null

↓

null is a falsy value.

↓

JavaScript ignores null and uses

[]

Result

arr becomes a brand new empty Array.

This single operator makes our Registration System work correctly even during the first
registration.
*/





// =========================================================================================
// Visual Representation
// =========================================================================================

/*
Case 1

Previous Users Exist

↓

getItem()

↓

JSON String

↓

JSON.parse()

↓

Array

↓

arr

============================================================

Case 2

No Previous Users

↓

getItem()

↓

null

↓

JSON.parse()

↓

null

↓

||

↓

[]

↓

arr

In both situations,

arr always becomes a valid Array.

Therefore,

push()

can safely be used.
*/





// =========================================================================================
// 7. First Registration Workflow
// =========================================================================================

/*
Website opened for the first time.

↓

No userData exists.

↓

getItem()

↓

null

↓

JSON.parse()

↓

null

↓

||

↓

[]

↓

New Empty Array

↓

push(newUser)

↓

Array now contains one user.

↓

Store inside localStorage.
*/





// =========================================================================================
// 8. Second Registration Workflow
// =========================================================================================

/*
Second student registers.

↓

getItem()

↓

Previously Stored JSON String

↓

JSON.parse()

↓

Array containing first user

↓

push(secondUser)

↓

Array now contains two users

↓

Store updated Array

↓

Both users remain safely stored.

This is the biggest advantage of retrieving previous data before storing new data.
*/





// =========================================================================================
// 9. Common Beginner Mistakes
// =========================================================================================

/*
Mistake 1

Writing

let arr = [];

every time.

Result

Every registration starts with a new empty Array.

------------------------------------------------------------

Mistake 2

Forgetting JSON.parse().

Result

push() cannot be used because the retrieved value is still a String.

------------------------------------------------------------

Mistake 3

Removing

|| []

Result

During the first registration,

arr becomes null.

Calling

arr.push(obj)

produces an error.

------------------------------------------------------------

Mistake 4

Thinking || [] creates a new Array every time.

Incorrect.

It creates a new Array ONLY when no previous data exists.

If users are already stored,

the previous Array is reused.

------------------------------------------------------------

Now our Registration System can successfully store multiple users.

However, one final problem still remains.

What if the same user registers twice using the same Email Address?

Nothing currently prevents duplicate registrations.

This is why sir next introduced a loop to check every existing user before calling push().
*/


/*******************************************************************************************************
 ************************************** DUPLICATE EMAIL VALIDATION *************************************
 *
 * Topics Covered:
 * 1. Why Duplicate Checking is Required
 * 2. The Problem Without Validation
 * 3. Searching Existing Users
 * 4. Understanding the for Loop
 * 5. Comparing Email Addresses
 * 6. Why return is Used with alert()
 * 7. Registration After Successful Validation
 * 8. Common Beginner Mistakes
 *
 * At this point, our Registration System has become much better.
 *
 * We can now:
 *
 * • Create a User Object
 * • Retrieve previously stored users
 * • Store multiple users inside one Array
 *
 * Everything seems perfect.
 *
 * But sir demonstrated one more real-world problem.
 *
 * Suppose a user registers using:
 *
 *      dhiman@gmail.com
 *
 * Now the same person fills the Registration Form again using the exact same Email Address.
 *
 * What should happen?
 *
 * Should another account be created?
 *
 * Obviously, NO.
 *
 * In almost every real-world application, one Email Address should belong to only one account.
 *
 * Therefore, before storing a new user, we must first check whether that Email Address already
 * exists.
 *******************************************************************************************************/



// =========================================================================================
// 1. The Problem Without Validation
// =========================================================================================

/*
Suppose Browser Storage already contains the following users.

------------------------------------------------------------

User 1

Email

↓

dhiman@gmail.com

------------------------------------------------------------

Now another Registration takes place.

Again,

the user enters

↓

dhiman@gmail.com

If we immediately execute

*/

arr.push(obj);

/*
What happens?

The new Object is added into the Array.

Now the Array contains two users having exactly the same Email Address.

Example

------------------------------------------------------------

[

{

email : "dhiman@gmail.com"

},

{

email : "dhiman@gmail.com"

}

]

------------------------------------------------------------

Is this correct?

No.

Now both users have the same identity.

Later, during Login, JavaScript will not know which account actually belongs to the user.

Therefore,

before inserting a new Object,

we must first verify whether that Email Address already exists.
*/





// =========================================================================================
// 2. Searching the Existing Users
// =========================================================================================

/*
Now a question arises.

How can JavaScript check whether an Email Address already exists?

Remember,

all registered users are stored inside an Array.

Whenever we want to search inside an Array,

we must examine every element one by one.

This process is called Traversing an Array.

To perform this traversal,

sir used a for loop.
*/





// =========================================================================================
// Example
// =========================================================================================

for(let i = 0; i < arr.length; i++){

}

/*
Initially,

i = 0

↓

First user

--------------------------------------------

i = 1

↓

Second user

--------------------------------------------

i = 2

↓

Third user

The loop continues until every user has been checked.

This guarantees that no registered user is skipped.
*/





// =========================================================================================
// 3. Understanding arr[i]
// =========================================================================================

/*
Many beginners understand Arrays,

but become confused when Arrays contain Objects.

Suppose our Array looks like this.

------------------------------------------------------------

[

{

fullName : "Dhiman",

email : "dhiman@gmail.com"

},

{

fullName : "Rahul",

email : "rahul@gmail.com"

}

]

------------------------------------------------------------

Now observe carefully.

arr[0]

returns

↓

First Object

------------------------------------------------------------

arr[1]

returns

↓

Second Object

------------------------------------------------------------

Each element of the Array is itself a complete Object.

Therefore,

arr[i]

always represents one registered user.
*/





// =========================================================================================
// 4. Comparing Email Addresses
// =========================================================================================

/*
Since

arr[i]

is an Object,

we can access its properties using Dot Notation.

Example

*/

arr[i].email

/*
This returns the Email Address of the current user.

Now we compare it with the Email entered in the Registration Form.

*/

if(arr[i].email == obj.email){

}

/*
Observe both sides carefully.

arr[i].email

↓

Already Registered Email

--------------------------------------------

obj.email

↓

Newly Entered Email

If both are equal,

it means that the Email Address already exists.

Therefore,

another account should not be created.
*/





// =========================================================================================
// Visual Representation
// =========================================================================================

/*
Existing User

↓

dhiman@gmail.com

==============================

New Registration

↓

dhiman@gmail.com

==============================

Comparison

↓

Equal

==============================

Result

↓

Duplicate User Found
*/





// =========================================================================================
// 5. Why return alert() is Used
// =========================================================================================

/*
One of the most important lines in the Registration System is

*/

return alert("Duplicate email found");

/*
Many students think

alert()

is enough.

Actually,

it is NOT.

Suppose we write

*/

if(arr[i].email == obj.email){

    alert("Duplicate Email Found");

}

arr.push(obj);

/*
What happens?

JavaScript displays the alert.

After the user presses OK,

execution continues.

The next statement executes.

↓

arr.push(obj)

As a result,

the duplicate user is still inserted into the Array.

The alert displayed a warning,

but it never stopped the Registration Process.

This is a very common beginner mistake.
*/





// =========================================================================================
// Why return Solves the Problem
// =========================================================================================

/*
Now observe the correct code.

*/

if(arr[i].email == obj.email){

    return alert("Duplicate email found");

}

/*
What does return do?

return immediately stops the current function.

As soon as JavaScript reaches return,

everything below it is skipped.

Therefore,

arr.push(obj)

never executes.

The duplicate Object is never inserted.

Registration immediately ends.

This is why sir specifically wrote

return alert(...)

instead of only

alert(...)

Even though alert() shows the message,

return is the statement that actually prevents duplicate registration.
*/





// =========================================================================================
// Workflow of Duplicate Checking
// =========================================================================================

/*
User Clicks Register

↓

Create Object

↓

Retrieve Existing Array

↓

Start Loop

↓

Check First User

↓

Email Matches?

↓

Yes

↓

Show Alert

↓

return

↓

Registration Stops

=====================================================

OR

=====================================================

Email Matches?

↓

No

↓

Check Next User

↓

No Match Found

↓

Loop Ends

↓

Safe to Register New User
*/





// =========================================================================================
// 6. Registration After Successful Validation
// =========================================================================================

/*
Suppose the loop finishes.

No duplicate Email Address is found.

Only then does JavaScript execute

*/

arr.push(obj);

/*
Now the new user is inserted into the Array.

Notice something important.

The user is added ONLY AFTER all previous users have been checked.

This makes our Registration System much more reliable.

The sequence becomes

Retrieve Existing Users

↓

Check Every User

↓

No Duplicate Found

↓

Insert New User

↓

Store Updated Array
*/





// =========================================================================================
// Common Beginner Mistakes
// =========================================================================================

/*
Mistake 1

Checking only the first user.

Incorrect.

Every registered user must be checked.

Therefore,

the loop should continue until

arr.length.

------------------------------------------------------------

Mistake 2

Using

alert()

without

return.

Result

Duplicate user still gets stored.

------------------------------------------------------------

Mistake 3

Comparing the wrong values.

Correct Comparison

arr[i].email == obj.email

Not

arr == obj

or

arr[i] == obj

Only the Email property should be compared.

------------------------------------------------------------

Mistake 4

Calling

arr.push(obj)

inside the loop.

If push() is placed inside the loop,

the Object may be inserted before every user has been checked.

Therefore,

sir kept

arr.push(obj)

AFTER the loop finishes successfully.

------------------------------------------------------------

At this stage,

our Registration System has solved almost every major beginner problem.

• Data no longer disappears after refresh.

• Multiple users can be stored.

• Previous users are not overwritten.

• Duplicate Email Addresses are prevented.

Now only one step remains.

After successful validation,

we must save the updated Array back into localStorage and complete the Registration Process.

That is the final part of the Registration workflow.
*/


/*******************************************************************************************************
 *********************************** COMPLETING THE REGISTRATION SYSTEM ********************************
 *
 * Topics Covered:
 * 1. Adding the New User into the Array
 * 2. Saving the Updated Array
 * 3. Understanding Why setItem() is Called Again
 * 4. Reading Data for Verification
 * 5. Complete Registration Workflow
 * 6. Line-by-Line Flow of the Registration System
 *
 * At this point, our Registration System has successfully completed all validations.
 *
 * We have:
 *
 * • Created a User Object
 * • Retrieved previously stored users
 * • Prevented duplicate Email Addresses
 *
 * Now only one task remains.
 *
 * We must insert the new user into the Array and save the updated Array back into
 * localStorage.
 *
 * This is the final step that actually completes the Registration Process.
 *******************************************************************************************************/



// =========================================================================================
// 1. Adding the New User into the Array
// =========================================================================================

/*
If no duplicate Email Address is found, the for loop finishes successfully.

This means every registered user has already been checked.

Now JavaScript safely executes:
*/

arr.push(obj);

/*
What does push() do?

The push() method inserts a new element at the end of an Array.

Before push()

--------------------------------------------------

[

{

fullName : "Dhiman",

email : "dhiman@gmail.com"

},

{

fullName : "Rahul",

email : "rahul@gmail.com"

}

]

--------------------------------------------------

After push(obj)

--------------------------------------------------

[

{

fullName : "Dhiman",

email : "dhiman@gmail.com"

},

{

fullName : "Rahul",

email : "rahul@gmail.com"

},

{

fullName : "Amit",

email : "amit@gmail.com"

}

]

--------------------------------------------------

Notice something important.

push() does NOT replace any previous user.

It simply appends (adds) the new Object at the end of the Array.

This is why we first retrieve the previous Array and then call push().
*/





// =========================================================================================
// 2. Saving the Updated Array
// =========================================================================================

/*
After push(), the updated Array exists only inside JavaScript Memory (RAM).

Remember what we learned earlier.

Anything inside RAM disappears after refreshing the page.

Therefore, simply calling push() is not enough.

We must save this updated Array back into Browser Storage.

Sir used the following statement:
*/

localStorage.setItem("userData", JSON.stringify(arr));

/*
Let us understand this line carefully.

Step 1

JSON.stringify(arr)

↓

Converts the JavaScript Array into a JSON String.

--------------------------------------------

Step 2

localStorage.setItem()

↓

Stores that JSON String inside Browser Storage.

--------------------------------------------

Notice that we are storing the ENTIRE updated Array.

We are NOT storing only the new Object.

Browser Storage now contains every registered user.
*/





// =========================================================================================
// Visual Representation
// =========================================================================================

/*
Before Registration

------------------------------------------------

userData

↓

[

Dhiman,

Rahul

]

------------------------------------------------

↓

push(obj)

↓

Updated Array

↓

[

Dhiman,

Rahul,

Amit

]

↓

JSON.stringify()

↓

JSON String

↓

localStorage.setItem()

↓

Browser Storage Updated

Now every registered user remains safely stored.
*/





// =========================================================================================
// 3. Why is setItem() Called Again?
// =========================================================================================

/*
This is one of the most common doubts among beginners.

Question

"We already called setItem() during the previous registration.

Why are we calling it again?"

Answer

Because Browser Storage does not automatically know that the Array has changed.

Observe the sequence carefully.

Step 1

Retrieve Array from Browser Storage.

↓

Step 2

Modify the Array using push().

↓

Step 3

The Browser Storage still contains the OLD Array.

↓

Step 4

Only after calling setItem() again does Browser Storage receive the UPDATED Array.

Think of it like editing a Microsoft Word document.

You make several changes.

But until you press Save,

the file on disk remains unchanged.

Similarly,

push() changes only the JavaScript Array.

setItem() saves those changes permanently inside Browser Storage.
*/





// =========================================================================================
// 4. Reading Data for Verification
// =========================================================================================

/*
After saving the updated Array, sir immediately read the data again.

Why?

To verify that the information was actually stored correctly.

The following code was used.
*/

let dataFromLocalStorage = JSON.parse(localStorage.getItem("userData"));

console.log(dataFromLocalStorage);

/*
Let us break this statement.

localStorage.getItem("userData")

↓

Retrieve the stored JSON String.

↓

JSON.parse()

↓

Convert the JSON String back into a JavaScript Array.

↓

console.log()

↓

Display the Array inside the Console.

This step is mainly used for verification and debugging.

It allows us to confirm that Browser Storage contains exactly what we expected.
*/





// =========================================================================================
// Example Console Output
// =========================================================================================

/*
[

{

fullName: "Dhiman",

email: "dhiman@gmail.com",

password: "123456"

},

{

fullName: "Rahul",

email: "rahul@gmail.com",

password: "987654"

}

]

Observe carefully.

The output is now a proper JavaScript Array.

Each element inside the Array is one registered user.

This proves that:

• JSON.stringify() worked correctly.

• Browser Storage successfully saved the data.

• JSON.parse() converted it back into a JavaScript Array.
*/





// =========================================================================================
// 5. Complete Registration Workflow
// =========================================================================================

/*
The complete Registration Process now becomes:

User fills the Form

↓

Click Register

↓

preventDefault()

↓

Read Input Values

↓

Create User Object

↓

Retrieve Existing Users

↓

JSON.parse()

↓

Array Available

↓

Check Duplicate Email

↓

Duplicate Found?

↓

Yes

↓

return alert()

↓

Registration Stops

====================================================

OR

====================================================

Duplicate Found?

↓

No

↓

push(obj)

↓

Updated Array

↓

JSON.stringify()

↓

localStorage.setItem()

↓

Registration Completed Successfully

↓

Read Data Again

↓

console.log()

This is the exact workflow followed in the Registration System built during class.
*/





// =========================================================================================
// 6. Understanding the Complete Code Flow
// =========================================================================================

/*
Every line inside the Registration System has a specific purpose.

------------------------------------------------------------

let obj = { ... }

↓

Create one User Object.

------------------------------------------------------------

let arr = JSON.parse(localStorage.getItem("userData")) || [];

↓

Retrieve previously stored users.

If none exist,

create a new empty Array.

------------------------------------------------------------

for(...)

↓

Check every registered user.

------------------------------------------------------------

if(arr[i].email == obj.email)

↓

Check whether the Email Address already exists.

------------------------------------------------------------

return alert(...)

↓

Stop Registration immediately if a duplicate Email is found.

------------------------------------------------------------

arr.push(obj)

↓

Insert the new user into the Array.

------------------------------------------------------------

JSON.stringify(arr)

↓

Convert the updated Array into a JSON String.

------------------------------------------------------------

localStorage.setItem(...)

↓

Save the updated Array permanently inside Browser Storage.

------------------------------------------------------------

JSON.parse(localStorage.getItem(...))

↓

Read the saved data again.

------------------------------------------------------------

console.log(...)

↓

Verify that everything has been stored correctly.

Every statement in the Registration System depends on the previous one.

Removing even a single important statement may cause the entire workflow to fail.

This is why sir repeatedly emphasized understanding the flow instead of simply memorizing the
code.
*/


/*******************************************************************************************************
 *************************************** LOGIN SYSTEM INTRODUCTION *************************************
 *
 * Topics Covered:
 * 1. Why We Need a Login System
 * 2. Registration vs Login
 * 3. What Happens After Registration
 * 4. Why We Read localStorage Again
 * 5. The Login Workflow
 * 6. Creating the Login Object
 * 7. Why We Do NOT Create a New User
 *
 * After successfully completing the Registration System, sir moved to the Login page.
 *
 * Many students initially think that Registration and Login perform the same task.
 *
 * They do not.
 *
 * Registration creates a brand new account.
 *
 * Login simply verifies whether an account already exists.
 *
 * This difference is extremely important because the code for both pages is completely
 * different.
 *******************************************************************************************************/



// =========================================================================================
// 1. Why Do We Need a Login System?
// =========================================================================================

/*
Suppose a student has already registered.

Registration Data

--------------------------------------------

Full Name

Dhiman

Email

dhiman@gmail.com

Password

123456

--------------------------------------------

All this information is already stored inside localStorage.

Now the user closes the browser.

Later,

the same user opens the website again.

Should the user register again?

Obviously,

No.

The account already exists.

Instead,

the user simply enters

Email

Password

and clicks Login.

The Login System checks whether these details match an existing account.
*/





// =========================================================================================
// 2. Registration vs Login
// =========================================================================================

/*
Although both pages ask for user information,

their purposes are completely different.

Registration

--------------------------------------------

Creates a new account.

Stores information.

Adds a new Object into the Array.

Updates localStorage.

--------------------------------------------

Login

--------------------------------------------

Does NOT create a new account.

Does NOT insert anything.

Does NOT call push().

Does NOT update Browser Storage.

Its only job is verification.

It simply checks whether the entered Email and Password already exist.
*/





// =========================================================================================
// Visual Comparison
// =========================================================================================

/*
Registration

↓

Create Object

↓

Check Duplicate Email

↓

push()

↓

setItem()

↓

Save Data

=====================================================

Login

↓

Read Email

↓

Read Password

↓

Retrieve Existing Users

↓

Compare Credentials

↓

Allow or Reject Login

Notice something.

Registration modifies Browser Storage.

Login only reads Browser Storage.
*/





// =========================================================================================
// 3. Why Do We Read localStorage Again?
// =========================================================================================

/*
A common beginner question is,

"We already stored the users during Registration.

Why are we reading localStorage again?"

The answer is very simple.

The Login page is a completely different page.

When login.html opens,

JavaScript starts executing from the beginning.

None of the variables from registration.html exist anymore.

Variables like

*/

let arr = [];

/*
or

*/

let obj = {};

/*
created during Registration are gone.

Remember,

JavaScript Memory (RAM) is temporary.

After changing pages or refreshing the browser,

those variables disappear.

Therefore,

the Login page must retrieve the registered users again from Browser Storage.

That is why sir again wrote:

*/

let arr = JSON.parse(localStorage.getItem("userData")) || [];

/*
This gives the Login page access to every registered user.
*/





// =========================================================================================
// 4. The Login Workflow
// =========================================================================================

/*
The Login System follows a simple sequence.

User enters

↓

Email

Password

↓

Click Login

↓

Read all registered users from localStorage

↓

Loop through every registered user

↓

Compare Email

↓

Compare Password

↓

If both match

↓

Login Successful

↓

Otherwise

↓

Login Failed

Notice something important.

Login does not create anything new.

It simply searches through the existing data.
*/





// =========================================================================================
// 5. Creating the Login Object
// =========================================================================================

/*
Sir first read the values entered by the user.

Example
*/

let email = "dhiman@gmail.com";

let password = "123456";

/*
Sometimes these values are stored directly in variables.

Sometimes they are grouped into an Object.

Example
*/

let loginUser = {

    email: email,

    password: password

};

/*
This Object represents the credentials entered on the Login page.

Unlike Registration,

this Object is NOT stored in localStorage.

It exists only temporarily while checking whether the user is valid.
*/





// =========================================================================================
// 6. Why Don't We Call push() Here?
// =========================================================================================

/*
During Registration,

we wrote:

*/

arr.push(obj);

/*
because a brand new account was being created.

Now consider Login.

Suppose the user enters

Email

↓

dhiman@gmail.com

Password

↓

123456

Should another Object be inserted into the Array?

No.

Because this account already exists.

Creating another Object would mean creating another account.

That would be incorrect.

Therefore,

Login never calls

push().

Its only responsibility is checking existing data.
*/





// =========================================================================================
// 7. Why Don't We Call setItem()?
// =========================================================================================

/*
Another important difference.

During Registration,

we updated Browser Storage.

Therefore,

setItem() was necessary.

During Login,

nothing changes inside Browser Storage.

We are only reading existing information.

Since no data has changed,

there is nothing to save.

Therefore,

setItem() is not required.

The Login page mainly uses:

getItem()

↓

JSON.parse()

↓

for loop

↓

if statement

Everything else remains unchanged.
*/





// =========================================================================================
// Common Beginner Mistakes
// =========================================================================================

/*
Mistake 1

Trying to call

push()

during Login.

Incorrect.

Login does not create accounts.

------------------------------------------------------------

Mistake 2

Calling

setItem()

after successful Login.

Incorrect.

Nothing has changed inside Browser Storage.

------------------------------------------------------------

Mistake 3

Thinking Registration variables are still available on the Login page.

Incorrect.

Each page starts with a fresh JavaScript execution.

Therefore,

the Login page must retrieve data again using

getItem().

------------------------------------------------------------

At this stage,

the Login page has loaded every registered user into an Array.

The next step is to compare the entered Email and Password with every Object inside that Array.

This comparison is performed using another for loop, which forms the core of the Login System.
*/

/*******************************************************************************************************
 ****************************** LOGIN VERIFICATION, REDIRECTION AND LOGOUT ******************************
 *
 * Topics Covered:
 * 1. Login Credential Verification
 * 2. Why Both Email and Password Must Match
 * 3. Understanding the Login Loop
 * 4. Successful Login
 * 5. window.location.href
 * 6. Invalid Login
 * 7. Why return is Used Again
 * 8. Complete Login Workflow
 * 9. Logout
 * 10. Common Beginner Mistakes
 *
 * Registration and Login perform two completely different tasks.
 *
 * Registration creates a new account.
 *
 * Login verifies whether an existing account can access the application.
 *
 * During Login, we never create new data.
 *
 * We simply compare the credentials entered by the user with the credentials already stored
 * inside Browser Storage.
 *
 * If both Email and Password match,
 *
 * Login is successful.
 *
 * Otherwise,
 *
 * Login fails.
 *******************************************************************************************************/



// =========================================================================================
// 1. Reading the Login Details
// =========================================================================================

/*
Suppose the Login Form contains two input fields.

Email

Password

When the Login button is clicked,

JavaScript first reads both values.

*/

let email = "dhiman@gmail.com";

let password = "123456";

/*
These two variables contain the credentials entered by the user.

Remember,

these values exist only temporarily.

Nothing is stored inside localStorage during Login.
*/





// =========================================================================================
// 2. Reading the Registered Users
// =========================================================================================

/*
The next step is to retrieve all previously registered users.

*/

let arr = JSON.parse(localStorage.getItem("userData")) || [];

/*
After this statement,

arr contains every registered user.

Example

------------------------------------------------------------

[

{

fullName : "Dhiman",

email : "dhiman@gmail.com",

password : "123456"

},

{

fullName : "Rahul",

email : "rahul@gmail.com",

password : "987654"

}

]

------------------------------------------------------------

Now JavaScript has all the information needed to verify the Login request.
*/





// =========================================================================================
// 3. Searching Every Registered User
// =========================================================================================

/*
Since multiple users may exist,

JavaScript must examine every Object.

Therefore,

sir again used a for loop.
*/

for(let i = 0; i < arr.length; i++){

}

/*
During each iteration,

arr[i]

represents one registered user.

The loop continues until every user has been checked.
*/





// =========================================================================================
// 4. Login Credential Verification
// =========================================================================================

/*
Now comes the most important condition of the Login page.

*/

if(arr[i].email == email && arr[i].password == password){

}

/*
Observe every part carefully.

arr[i].email

↓

Email already stored during Registration.

------------------------------------------------

email

↓

Email entered on the Login page.

------------------------------------------------

arr[i].password

↓

Password stored during Registration.

------------------------------------------------

password

↓

Password entered on the Login page.

------------------------------------------------

The Logical AND Operator (&&)

requires BOTH conditions to be true.

Condition 1

Email must match.

AND

Condition 2

Password must also match.

Only then is Login considered successful.
*/





// =========================================================================================
// Visual Representation
// =========================================================================================

/*
Stored Data

------------------------------------------------

Email

↓

dhiman@gmail.com

Password

↓

123456

================================================

Entered Data

------------------------------------------------

Email

↓

dhiman@gmail.com

Password

↓

123456

================================================

Comparison

------------------------------------------------

Email Match?

↓

Yes

AND

Password Match?

↓

Yes

================================================

Result

↓

Login Successful
*/





// =========================================================================================
// Another Example
// =========================================================================================

/*
Stored Email

↓

dhiman@gmail.com

Stored Password

↓

123456

================================================

Entered Email

↓

dhiman@gmail.com

Entered Password

↓

999999

================================================

Email Match?

↓

Yes

Password Match?

↓

No

================================================

Result

↓

Login Failed

Even though the Email is correct,

the Password is incorrect.

Since both conditions are not true,

the Login request is rejected.
*/





// =========================================================================================
// 5. Successful Login
// =========================================================================================

/*
If both Email and Password match,

the user is considered authenticated.

Sir then redirected the user to another page.

Example
*/

window.location.href = "dashboard.html";

/*
What is window?

window represents the browser window.

It is the top-level object provided by the browser.

Inside window,

there is a property called

location.

location contains information about the current webpage.

One of its properties is

href.

href contains the complete address (URL) of the current page.
*/





// =========================================================================================
// Understanding window.location.href
// =========================================================================================

/*
Suppose the browser is currently displaying

------------------------------------------------

login.html

------------------------------------------------

Now JavaScript executes

*/

window.location.href = "dashboard.html";

/*
Immediately,

the browser loads

dashboard.html

The current page is replaced by the new page.

This process is called Redirection or Navigation.

No manual clicking is required.

JavaScript automatically changes the page.
*/





// =========================================================================================
// Real Life Analogy
// =========================================================================================

/*
Imagine you are standing outside a classroom.

A teacher checks your Identity Card.

If everything is correct,

the teacher opens the classroom door.

Registration

↓

Creating the Identity Card.

============================================

Login

↓

Checking the Identity Card.

============================================

window.location.href

↓

Opening the classroom door.

Without successful verification,

the user never enters the next page.
*/





// =========================================================================================
// 6. Invalid Login
// =========================================================================================

/*
Suppose the loop finishes.

Every registered user has been checked.

Still,

no matching Email and Password are found.

This means the entered credentials are incorrect.

Sir displayed an alert.

Example

*/

alert("Invalid Email or Password");

/*
This informs the user that Login has failed.

The browser remains on the Login page.

No redirection occurs.

The user can correct the information and try again.
*/





// =========================================================================================
// 7. Why return is Used Again
// =========================================================================================

/*
Inside the loop,

sir wrote something similar to

*/

if(arr[i].email == email && arr[i].password == password){

    window.location.href = "dashboard.html";

    return;

}

/*
Why return?

Suppose the first user already matches.

There is no reason to continue checking the remaining users.

return immediately stops the function.

Without return,

the loop would continue unnecessarily.

Although the browser usually begins navigation immediately,

using return is considered good programming practice because it clearly ends the Login process
once success has been achieved.
*/





// =========================================================================================
// 8. Complete Login Workflow
// =========================================================================================

/*
User Opens Login Page

↓

Enter Email

↓

Enter Password

↓

Click Login

↓

Retrieve Registered Users

↓

JSON.parse()

↓

Array Available

↓

Start for Loop

↓

Check First User

↓

Email Match?

↓

No

↓

Check Next User

↓

Password Match?

↓

No

↓

Continue

====================================================

Eventually

====================================================

Email Match?

↓

Yes

AND

Password Match?

↓

Yes

↓

window.location.href

↓

Dashboard Opens

====================================================

OR

====================================================

Loop Ends

↓

No Match Found

↓

alert("Invalid Email or Password")

↓

Stay on Login Page
*/





// =========================================================================================
// 9. Logout
// =========================================================================================

/*
After successfully logging in,

the user may later wish to leave the application.

This process is called Logout.

In the beginner project taught in class,

Logout simply redirects the user back to the Login page.

Example
*/

window.location.href = "login.html";

/*
What happens?

The browser leaves the current page

and opens

login.html.

Since no Login Session was taught in this project,

Logout does not delete anything from localStorage.

All registered users remain safely stored.

Only the displayed page changes.

Later,

the user can Login again using the same Email and Password.
*/





// =========================================================================================
// Visual Representation
// =========================================================================================

/*
Login Successful

↓

dashboard.html

↓

User Clicks Logout

↓

window.location.href = "login.html"

↓

Login Page Opens Again

Notice that Registration Data still exists.

Only navigation has changed.
*/





// =========================================================================================
// 10. Common Beginner Mistakes
// =========================================================================================

/*
Mistake 1

Checking only the Email.

Incorrect.

Both Email and Password must match.

Correct

arr[i].email == email && arr[i].password == password

------------------------------------------------------------

Mistake 2

Using OR (||) instead of AND (&&).

Incorrect.

Using || means that matching only one field could allow Login.

For secure authentication,

both fields must be correct.

------------------------------------------------------------

Mistake 3

Showing

"Login Successful"

before checking every user.

The success message should appear only after a matching user is found.

------------------------------------------------------------

Mistake 4

Redirecting before verification.

Calling

window.location.href

before checking the credentials allows anyone to access the next page.

Verification must always happen first.

------------------------------------------------------------

Mistake 5

Calling

alert("Invalid Email or Password")

inside the loop.

Suppose there are five registered users.

The first user's Email does not match.

If the alert is inside the loop,

JavaScript immediately displays

"Invalid Email or Password"

without checking the remaining four users.

The alert should appear only AFTER the loop has finished and no matching user has been found.

------------------------------------------------------------

The complete beginner authentication system is now finished.

Registration

↓

Create User

↓

Validate Duplicate Email

↓

Store Multiple Users

↓

Save in localStorage

============================================================

Login

↓

Read Existing Users

↓

Compare Email and Password

↓

Redirect on Success

↓

Show Alert on Failure

============================================================

Logout

↓

Return to Login Page

This completes the complete beginner localStorage-based Authentication System taught in class.
*/