// 05-callbacks.js
// 🎓 Topic: Callbacks (Fundamentals)

/* 
  A callback is a function passed as an argument to another function.
*/

// 1. Simple Callback
function greet(name, callback) {
    console.log("Step 1: Greet " + name);
    callback(); // Executing the callback
}

greet("Charlie", function () {
    console.log("Step 2: Callback function executed!");
});

// 2. Callbacks with Data
function calculate(n1, n2, operation) {
    console.log("Calculating...");
    return operation(n1, n2);
}

const addition = (a, b) => a + b;
const multiplication = (a, b) => a * b;

console.log("Sum:", calculate(10, 5, addition));
console.log("Prod:", calculate(10, 5, multiplication));

// 3. Callback in Array Methods (Revision)
const numbers = [1, 2, 3];
numbers.forEach((num) => {
    console.log("Number in array:", num);
});
