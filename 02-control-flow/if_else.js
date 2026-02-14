/* 
Control Flow: if...else Statement

The if...else statement is used to execute a block of code based on a specified condition. If the condition evaluates to true, the code inside the if block is executed. If the condition is false, the code inside the else block is executed.

Syntax:
if (condition) {
    // Code to be executed if the condition is true
} else {
    // Code to be executed if the condition is false
}

*/


// Example:

let age = 8;

if (18 <= age) {
    console.log("You are an adult.");
} else {
    console.log("You are not an adult.");
}

/* 
5 < 10

10 < 5


*/

let number = 15;

if (number < 10) {
    console.log("The number is less than 10.");
} else if (number === 10) {
    console.log("The number is equal to 10.");
} else {
    console.log("The number is greater than 10.");
}

let name = "";

if (10 - 10) {
    console.log("Hello, John!");
} else {
    console.log("Hello, stranger!");
}



//Ternory Operator

const age2 = 16

const canVote = age2 >= 18 ? "You can vote." : "You cannot vote yet.";

console.log(canVote);

// --- Truthiness & Falsiness ---

// Falsy values: false, 0, "", null, undefined, NaN
if (0) {
    console.log("This will NOT run");
}

if ("") {
    console.log("This will NOT run");
}

let score = 0;
if (score === 0) {
    console.log("Score is zero"); // Use strict equality to check for zero specifically
}

// Truthy values: anything else
if ("Hello") {
    console.log("Strings are truthy!");
}

if ([]) {
    console.log("Empty arrays are truthy!");
}