/**
 * 🪞 The 'this' Keyword (The Mirror Analogy)
 * 
 * Think of 'this' like a mirror. What it reflects depends entirely 
 * on WHO is holding it at that second.
 */

// --- 💡 Context 1: Implicit Binding (Holding the mirror) ---
const person = {
    name: "John",
    greet: function () {
        // Here, the object 'person' is holding the mirror. 
        // So 'this' reflects 'person'.
        console.log(`Hello, my name is ${this.name}`);
    }
};

person.greet(); // ✅ "Hello, my name is John"


// --- 💡 Context 2: Explicit Binding (Forcing the mirror) ---
// Sometimes we want to FORCIBLY give the mirror to someone else.
function introduce(city) {
    console.log(`I am ${this.name} and I live in ${city}.`);
}

const user1 = { name: "Alice" };
const user2 = { name: "Bob" };

// .call() -> "Give the mirror to Alice and speak immediately"
introduce.call(user1, "London");

// .bind() -> "Give the mirror to Bob and save the speech for later"
const bobsSpeech = introduce.bind(user2, "New York");
bobsSpeech();


// --- 💡 Context 3: Arrow Functions (The No-Mirror Zone) ---
// Arrow functions do NOT have their own mirror. 
// They look at whoever was holding the mirror BEFORE they were created.
const car = {
    brand: "Tesla",
    start: function () {
        console.log(`Starting ${this.brand}...`); // Works!

        // Arrow function inherits 'this' from 'start'
        const showStatus = () => {
            console.log(`${this.brand} is ready to go!`);
        };
        showStatus();
    }
};

car.start();

/**
 * 🎓 HOW TO THINK:
 * Whenever you see 'this', look to the LEFT of the dot when the function is called.
 * - person.greet() -> 'person' is to the left, so 'this' is 'person'.
 * - If there is NO dot (standalone call), 'this' usually points to the Windows (Global) object!
 */
