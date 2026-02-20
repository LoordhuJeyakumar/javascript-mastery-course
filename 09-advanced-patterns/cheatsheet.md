# Advanced Patterns & Modern JS Cheatsheet

## 📦 1. ES Modules (`import`/`export`)
Modules allow you to split your code into multiple files.

```javascript
// math.js - EXPORTING
export const add = (a, b) => a + b;
export const PI = 3.14;
export default function multiply(a, b) { return a * b; } // Default export

// main.js - IMPORTING
import multiply, { add, PI } from './math.js';
console.log(add(2, 3)); // 5
```

## 🔍 2. Regular Expressions (Regex)
Used for searching and validating strings.

```javascript
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
console.log(emailRegex.test("test@example.com")); // true

const phoneRegex = /\d{3}-\d{3}-\d{4}/; // 123-456-7890
```

## ⚡ 3. Modern Syntax Sugar
Clean ways to handle nested data and defaults.

```javascript
// Optional Chaining (?.) - Stops if property is missing
const user = { profile: { name: "John" } };
console.log(user.contact?.email); // undefined (No Error!)

// Nullish Coalescing (??) - Uses default ONLY if null or undefined
const score = 0;
const finalScore = score ?? 10; // 0 (Because 0 is defined)
const name = null;
const finalName = name ?? "Guest"; // "Guest"
```

## 📅 4. Date & Time
Working with dates in JavaScript.

```javascript
const now = new Date();
console.log(now.toDateString()); // "Wed May 22 2024"

const specificDate = new Date('2024-12-25');
console.log(specificDate.getFullYear()); // 2024
```

## 🚀 5. Performance: Debounce & Throttle
Controlled execution of functions.

```javascript
// Debounce: Wait 300ms after the LAST call
const debounce = (fn, delay) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
};

// Throttle: Run at most once every 300ms
const throttle = (fn, limit) => {
  let lastCall = 0;
  return (...args) => {
    const now = Date.now();
    if (now - lastCall >= limit) {
      lastCall = now;
      fn(...args);
    }
  };
};
```
