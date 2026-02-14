// 03-this-keyword.js
// 🎓 Topic: The 'this' Keyword

/* 
  The value of 'this' is determined by HOW a function is called.
  It can be the object that calls the function, the object that is passed as an argument, or the object that is returned by the function.
*/

// 1. Global Scope
console.log("Global this:", this); // Window in browser, empty object in Node

// 2. Implicit Binding (as a Method)
// The object that calls the function is the object that 'this' refers to.
const user = {
    username: "JohnDoe",
    greet() {
        console.log("Hello, I am " + this.username);
    }
};
user.greet(); // 'this' refers to 'user'
user.greet()

// 3. Explicit Binding (call, apply, bind)
function sayJob(company, location) {
    console.log(`${this.username} works at ${company} in ${location}`);
}

const dev = { username: "Alice" };

sayJob.call(dev, "Google", "USA");     // Arguments passed one by one
sayJob.apply(dev, ["Netflix", "UK"]); // Arguments passed as an array

const boundJob = sayJob.bind(dev, "Meta", "remote"); // Returns a new function
boundJob();

// 4. Arrow Functions (Lexical this) => 'this' refers to the object that the function is a property of. In this case, it refers to the obj object.
const obj = {
    title: "Project A",
    delayedLog() {
        // Regular function would lose 'this' here => 'this' refers to the global object in this case.
        setTimeout( ()=> {
            //console.log("Title after 1s:", this.title);
        }, 1000);
        // function logTitle() {
        //     console.log("Title after 1s:", this.title);
        // }
        // setTimeout(logTitle, 1000);
        //console.log(this);
        function logThis() {
            console.log(this);
        }
        logThis();
    }
};
obj.delayedLog();
