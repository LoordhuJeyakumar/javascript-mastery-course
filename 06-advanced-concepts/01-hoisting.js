/**
 * 🚩 Hoisting (The Red Carpet Analogy)
 * 
 * Imagine a movie premiere. Before the celebrities (your code) arrive, 
 * the stage managers (JavaScript Engine) pull out the Red Carpet 
 * (Variable and Function Declarations) to the very front of the building.
 */

// --- 💡 1. Variable Hoisting with 'var' ---
// It's like seeing the Red Carpet, but the celebrity hasn't arrived yet.
console.log("Celebrity Name (var):", celebrity); // Output: undefined
var celebrity = "Leonardo DiCaprio";
console.log("Celebrity Name (var):", celebrity); // Output: Leonardo DiCaprio

/**
 * 🎓 WHY? 
 * JavaScript "lifts" the declaration 'var celebrity' to the top, 
 * but NOT the assignment '= "Leonardo..."'. So it knows the variable exists, 
 * but doesn't know what's in it yet!
 */


// --- 💡 2. Variable Hoisting with 'let' and 'const' ---
// This is like a VIP area with a strict guard. You know the celebrity is coming, 
// but you aren't even allowed to say their name until they step out of the car.
// console.log(vipGuest); // ❌ ReferenceError! (The guard stops you)
let vipGuest = "Angelina Jolie";

/**
 * 💡 KEY CONCEPT: Temporal Dead Zone (TDZ)
 * Even though 'let' and 'const' are technically hoisted, you are NOT allowed 
 * to touch them until the code reaches their definition.
 */


// --- 💡 3. Function Hoisting ---
// This is like a "Special Guest" who is so important they can perform 
// even before they are officially introduced!
performShow(); // ✅ Works perfectly!

function performShow() {
  console.log("🎤 The crowd goes wild! The show has started!");
}

/**
 * 🎓 KEY LESSON:
 * 1. Function DECLARATIONS (function name() {}) are fully hoisted.
 * 2. Variables (var, let, const) are NOT fully available before they are assigned.
 * 3. Best Practice: Always define variables at the top to avoid confusion!
 */
