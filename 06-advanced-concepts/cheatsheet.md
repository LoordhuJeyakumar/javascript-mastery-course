# Advanced Concepts Cheatsheet

## Closures

```javascript
function createCounter() {
  let count = 0;
  return function() {
    count++;
    return count;
  };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
```

## Classes

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks.`);
  }
}

const d = new Dog("Mitzie");
d.speak(); // Mitzie barks.
```

## The `this` Keyword

```javascript
const person = {
  name: "Alice",
  greet() {
    console.log(this.name);
  }
};

person.greet(); // Alice

const greetFunc = person.greet;
greetFunc(); // undefined (or error in strict mode) - `this` is lost
```
