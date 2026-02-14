/* Data types are the type of data that a variable can store. */

/* 
- string: is a sequence of characters.
- number: is a numeric value.
- boolean: is a true/false value.
- null: is a value that represents no value.
- undefined: is a value that is not defined.
- object: is a collection of key-value pairs.
- array: is a collection of values.
- function: is a block of code that can be reused.
- symbol: is a unique and immutable primitive value.
- bigint: is a large integer value.
- date: is a value that represents a date and time.
*/

//example of string:
let name = "John"; //declaring a variable with the value "John"
let address = "123 Main St, Anytown, USA"; //declaring a variable with the value "123 Main St, Anytown, USA"

//example of number:
let age = 20; //declaring a variable with the value 20
let price = 10.99; //declaring a variable with the value 10.99
let quantity = 100; //declaring a variable with the value 100
let temperature = 25.5; //declaring a variable with the value 25.5
let negativeNumber = -10; //declaring a variable with the value -10


/* example of boolean:
- true: is a value that represents true.
- false: is a value that represents false.
*/
let isStudent = true; //declaring a variable with the value true
let isEmployee = false; //declaring a variable with the value false
let isAdmin = true; //declaring a variable with the value true
let isGuest = false; //declaring a variable with the value false
let isLoggedIn = true; //declaring a variable with the value true
let isLoggedOut = false; //declaring a variable with the value false
let isActive = true; //declaring a variable with the value true
let isInactive = false; //declaring a variable with the value false


//example of null:
let emptyValue = null; //declaring a variable with the value null

//example of undefined:
let undefinedValue = undefined; //declaring a variable with the value undefined

let undefinedVariable; //declaring a variable without a value
console.log(undefinedVariable); //undefined

// String Methods Demonstration
let course = "JavaScript Mastery";
console.log(course.length); // 18
console.log(course.toUpperCase()); // JAVASCRIPT MASTERY
console.log(course.charAt(0)); // J

// Math Methods Demonstration
let randomVal = Math.random();
console.log(Math.floor(5.95)); // 5
console.log(Math.ceil(5.05)); // 6