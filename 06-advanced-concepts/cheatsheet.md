# Advanced JS Mastery Cheatsheet 🧠

## 1. Hoisting (Declarations go to top)
```javascript
// Function Declaration - FULLY HOISTED
sayHi(); // Works!
function sayHi() { console.log("Hi!"); }

// Variables (var) - DECLARED but not ASSIGNED
console.log(a); // undefined
var a = 10;

// let/const - HOISTED but UNTOUCHABLE (TDZ)
// console.log(b); // ReferenceError
let b = 20;
```

## 2. Closures (Functions with backpacks)
```javascript
function counter() {
  let count = 0; // Private variable
  return () => ++count;
}
const myCount = counter();
console.log(myCount()); // 1
console.log(myCount()); // 2
```

## 3. The `this` Keyword (The Reflective Mirror)
- **Implicit**: `obj.method()` -> `this` is `obj`.
- **Explicit**: `func.call(obj)` -> `this` is `obj`.
- **Arrow**: `() => {}` -> Inherits `this` from parent scope.

## 4. Classes (Factory Blueprints)
```javascript
class Pet {
  constructor(name) { this.name = name; }
  eat() { console.log("Eating..."); }
}

class Dog extends Pet {
  bark() { console.log("Woof!"); }
}
```

## 5. Error Handling (The Safety Net)
```javascript
try {
  // Risky code
  throw new Error("Oops!");
} catch (error) {
  // Fix the problem
  console.log(error.message);
} finally {
  // Cleanup (runs always)
}
```
