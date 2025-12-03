# Data Structures Cheatsheet

## Arrays

```javascript
let fruits = ["Apple", "Banana", "Orange"];

// Accessing
console.log(fruits[0]); // "Apple"

// Methods
fruits.push("Grape"); // Add to end
fruits.pop();         // Remove from end
fruits.shift();       // Remove from start
fruits.unshift("Kiwi"); // Add to start

// Iterating
fruits.forEach(fruit => console.log(fruit));
```

## Array Higher-Order Methods

```javascript
let numbers = [1, 2, 3, 4, 5];

// Map: Transform elements
let doubled = numbers.map(n => n * 2); // [2, 4, 6, 8, 10]

// Filter: Select elements
let evens = numbers.filter(n => n % 2 === 0); // [2, 4]

// Reduce: Accumulate value
let sum = numbers.reduce((total, n) => total + n, 0); // 15
```

## Objects

```javascript
let person = {
  name: "John",
  age: 30,
  isEmployed: true,
  greet: function() {
    console.log("Hello!");
  }
};

// Accessing
console.log(person.name); // Dot notation
console.log(person["age"]); // Bracket notation
```

## Destructuring & Spread

```javascript
// Destructuring
const { name, age } = person;
const [first, second] = fruits;

// Spread
let moreFruits = [...fruits, "Mango"];
let updatedPerson = { ...person, city: "New York" };
```
