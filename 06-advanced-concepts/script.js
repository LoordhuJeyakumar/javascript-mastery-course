// --- 1. Hoisting ---
/* 
    Hoisting is JS moving declarations to the top of their scope.
    - var: hoisted as undefined.
    - let/const: hoisted but in Temporal Dead Zone (cannot access).
    - function declarations: fully hoisted.
*/
console.log("Hoisted var:", hoistedVar); // undefined
var hoistedVar = "I am a var";

// hoistedFunction(); // Works!
function hoistedFunction() {
    console.log("I am a hoisted function declaration");
}

// --- 2. Closures ---
/*
    A closure is a function that remembers its outer variables.
*/
function createBank(initialBalance) {
    let balance = initialBalance; // Private variable
    return {
        deposit: (amount) => {
            balance += amount;
            console.log(`Deposited ${amount}. New balance: ${balance}`);
        },
        getBalance: () => balance
    };
}

const myAccount = createBank(100);
myAccount.deposit(50);
console.log("Current Balance:", myAccount.getBalance());

// --- 3. The 'this' Keyword ---
const person = {
    name: "Alice",
    greet() {
        console.log("Hi, I am " + this.name);
    }
};

person.greet(); // Implicit binding: 'this' is person

const greetLater = person.greet.bind({ name: "Bob" }); // Explicit binding
greetLater(); // "Hi, I am Bob"

// --- 4. Prototypes & Classes ---
class Animal {
    constructor(species) {
        this.species = species;
    }
    makeSound() {
        console.log("Generic animal sound...");
    }
}

class Cat extends Animal {
    constructor(name) {
        super("Feline"); // Must call super() to use 'this'
        this.name = name;
    }
    makeSound() {
        console.log(this.name + " says: Meow!");
    }
}

const myCat = new Cat("Whiskers");
myCat.makeSound();

// --- 5. Callbacks ---
function fetchData(id, callback) {
    console.log("Fetching data for ID: " + id);
    // Simulating a task that takes time...
    setTimeout(() => {
        const data = { id: id, name: "Sample Data" };
        callback(data);
    }, 1000);
}

fetchData(42, (result) => {
    console.log("Callback received data:", result);
});

// --- 6. Error Handling ---
function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero!");
    }
    return a / b;
}

try {
    console.log(divide(10, 0));
} catch (error) {
    console.error("Oops! Something went wrong:", error.message);
} finally {
    console.log("Division attempt completed.");
}