// 01-hoisting.js
// 🎓 Topic: Hoisting

/* 
  Hoisting is JavaScript's default behavior of moving declarations to the top.
  Only the declarations are hoisted, not initializations.
*/

// 1. Variable Hoisting with 'var'
console.log("var value:", myVar); // undefined (declaration moved to top, but not value)
var myVar = "Hello Hoisting";

// 2. Variable Hoisting with 'let' and 'const'
// console.log(myLet); // ❌ ReferenceError: Cannot access 'myLet' before initialization
let myLet = "I am safe";

/* 
  💡 Key Concept: Temporal Dead Zone (TDZ)
  'let' and 'const' are hoisted but you cannot use them until the 
  line of code where they are defined is executed.
*/

// 3. Function Hoisting
sayHello(); // ✅ Works! Function declarations are fully hoisted.

function sayHello() {
    console.log("Hello from a hoisted function!");
}

// 4. Function Expressions & Arrow Functions
// greet(); // ❌ ReferenceError: Cannot access 'greet' before initialization
const greet = () => {
    console.log("Hi there!");
};
