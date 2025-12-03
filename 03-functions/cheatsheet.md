# Functions Cheatsheet

## Function Declaration

```javascript
function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet("Alice"));
```

## Function Expression

```javascript
const greet = function(name) {
  return `Hello, ${name}!`;
};
```

## Arrow Functions (ES6)

```javascript
// Concise
const greet = (name) => `Hello, ${name}!`;

// With block body
const add = (a, b) => {
  const sum = a + b;
  return sum;
};
```

## Parameters & Defaults

```javascript
function multiply(a, b = 1) {
  return a * b;
}
console.log(multiply(5)); // 5 (5 * 1)
```

## Scope

```javascript
let globalVar = "I am global";

function testScope() {
  let localVar = "I am local";
  console.log(globalVar); // Accessible
  console.log(localVar);  // Accessible
}

// console.log(localVar); // Error: localVar is not defined
```
