# Advanced Concepts Cheatsheet

## 1. Hoisting

```javascript
// Variable Hoisting
console.log(a); // undefined
var a = 5;

// let/const are hoisted but in "Temporal Dead Zone" (TDZ)
// console.log(b); // ReferenceError
let b = 10;

// Function Hoisting
greet(); // "Hello!" (Declarations are hoisted)

function greet() {
  console.log("Hello!");
}

// sayHi(); // ReferenceError (Expressions are NOT hoisted)
const sayHi = () => console.log("Hi!");
```

## 2. Closures

```javascript
function createCounter() {
  let count = 0; // Private variable
  return {
    increment: () => ++count,
    getCount: () => count
  };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.getCount());    // 1
```

## 3. The `this` Keyword

```javascript
// 1. Implicit Binding
const user = {
  name: "Bob",
  sayHi() { console.log(this.name); }
};
user.sayHi(); // "Bob"

// 2. Explicit Binding (call, apply, bind)
function greet(msg) { console.log(`${msg}, ${this.name}`); }
const person = { name: "Alice" };

greet.call(person, "Hello"); // "Hello, Alice"
const boundGreet = greet.bind(person);
boundGreet("Hi"); // "Hi, Alice"

// 3. Arrow Functions (Inherit 'this')
const obj = {
  name: "Timer",
  start() {
    setTimeout(() => {
      console.log(this.name); // Correctly logs "Timer"
    }, 100);
  }
};
```

## 4. Prototypes & Classes

```javascript
class Vehicle {
  constructor(make) { this.make = make; }
  drive() { console.log(`${this.make} is driving.`); }
}

class Car extends Vehicle {
  constructor(make, model) {
    super(make); // Call parent constructor
    this.model = model;
  }
}

const myCar = new Car("Toyota", "Camry");
myCar.drive(); // "Toyota is driving."
```

## 5. Callbacks

```javascript
function processUser(name, callback) {
  console.log("Processing user: " + name);
  callback();
}

processUser("John", () => console.log("Done!"));
```

## 6. Error Handling

```javascript
try {
  let data = JSON.parse("{ invalid json }");
} catch (error) {
  console.error("Caught an error:", error.message);
} finally {
  console.log("This always runs.");
}
```
