// Assignment: The 'this' Keyword

// 1. Fix the 'this' issue in the following code:
const person = {
    name: "John",
    greet: function () {
        console.log("Hello, my name is " + this.name);
    }
};

const greetFunction = person.greet;
// greetFunction(); // This logs "Hello, my name is undefined"

// Task: Use bind/call/apply to make it work correctly.
// Your code here:


// 2. Arrow Functions vs Regular Functions
// Predict the output and explain why:
const obj = {
    name: "JS Pro",
    regularFn: function () {
        console.log("Regular:", this.name);
    },
    arrowFn: () => {
        console.log("Arrow:", this.name);
    }
};

// obj.regularFn();
// obj.arrowFn();
