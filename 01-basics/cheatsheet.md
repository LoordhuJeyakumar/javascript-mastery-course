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
```
