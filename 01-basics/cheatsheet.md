# JavaScript Basics Cheatsheet

## Variables

```javascript
// ❌ Avoid using var (old way)
var name = "John";

// ✅ Use let for values that change
let age = 25;
age = 26;

// ✅ Use const for values that stay the same
const PI = 3.14;
// PI = 3.15; // Error!
```

## Data Types

```javascript
let str = "Hello";       // String
let num = 42;            // Number
let isTrue = true;       // Boolean
let empty = null;        // Null (intentionally empty)
let unknown;             // Undefined (not assigned yet)
```

## Operators

```javascript
let sum = 10 + 5;        // 15
let diff = 10 - 5;       // 5
let product = 10 * 2;    // 20
let quotient = 10 / 2;   // 5
let remainder = 10 % 3;  // 1 (Modulus)


// Comparison
console.log(5 == "5");   // true (loose equality, checks value)
console.log(5 === "5");  // false (strict equality, checks value AND type)
```

## String Concatenation

```javascript
let firstName = "Jane";
let lastName = "Doe";

// Old way
let fullName = firstName + " " + lastName;

// Modern way (Template Literals)
let greeting = `Hello, ${firstName} ${lastName}!`;

## String Methods

```javascript
let text = "   JavaScript is Fun!   ";

console.log(text.length);        // 24 (includes spaces)
console.log(text.trim());        // "JavaScript is Fun!" (removes outer spaces)
console.log(text.toUpperCase()); // "   JAVASCRIPT IS FUN!   "
console.log(text.split(" "));    // ["", "", "", "JavaScript", "is", "Fun!", "", "", ""]
console.log(text.includes("JS")); // false
```

## Math Methods

```javascript
console.log(Math.PI);            // 3.14159...
console.log(Math.round(4.7));    // 5
console.log(Math.floor(4.7));    // 4 (rounds down)
console.log(Math.ceil(4.1));     // 5 (rounds up)
console.log(Math.random());      // Random number between 0 and 1

// Random number between 1 and 10
let randomNum = Math.floor(Math.random() * 10) + 1;

// Formatting numbers
let price = 19.99342;
console.log(price.toFixed(2));   // "19.99" (returns a string)
```
```
