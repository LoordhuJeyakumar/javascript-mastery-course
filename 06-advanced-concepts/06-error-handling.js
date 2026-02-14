// 06-error-handling.js
// 🎓 Topic: Error Handling (try...catch)

/* 
  Error handling allows you to manage runtime errors gracefully 
  without stopping the entire script.
*/

// 1. Basic try...catch
try {
    const data = JSON.parse("{ name: 'John' }"); // ❌ Invalid JSON (no quotes on keys)
} catch (error) {
    console.log("Something went wrong!");
    console.log("Error Name:", error.name);
    console.log("Error Message:", error.message);
}

// 2. Throwing Custom Errors
function validateAge(age) {
    if (age < 18) {
        throw new Error("You must be 18 or older!"); // Manual error throwing
    }
    return "Access Granted";
}

try {
    console.log(validateAge(15));
} catch (error) {
    console.error("Critical Error:", error.message);
}

// 3. The 'finally' Block
try {
    console.log("Opening Database connection...");
    // simulate code
} catch (err) {
    console.log("Error connection");
} finally {
    console.log("Always runs: Closing connection.");
}
