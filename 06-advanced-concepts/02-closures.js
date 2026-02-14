// 02-closures.js
// 🎓 Topic: Closures

/* 
  A closure is the combination of a function bundled together with 
  references to its surrounding state (the lexical environment).
*/

// 1. Basic Closure Example
function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
        console.log("Outer:", outerVariable);
        console.log("Inner:", innerVariable);
    }
}

const closureInstance = outerFunction("Outside");
closureInstance("Inside");

// 2. Practical Use: Data Privacy (Encapsulation)
function createCounter() {
    let count = 0; // This variable is private!

    return {
        increment: function () {
            count++;
            console.log("Current Count:", count);
        },
        decrement: function () {
            count--;
            console.log("Current Count:", count);
        },
        getCount: function () {
            return count;
        }
    }
}

const myCounter = createCounter();
myCounter.increment(); // 1
myCounter.increment(); // 2
console.log("Value:", myCounter.getCount());
// console.log(count); // ❌ Error: count is not defined here!
