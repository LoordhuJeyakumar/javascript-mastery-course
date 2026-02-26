/**
 * 🌍 Fetch API (Communicating with the World)
 * 
 * Fetch is the way your browser talks to other websites to get information 
 * (like weather, crypto prices, or user lists).
 */

// --- 💡 Real-World Example: Getting Real User Data ---

async function getUserInfo() {
    try {
        console.log("🌐 Connecting to the Internet...");

        // This is a REAL public API we can use for testing
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        console.log(response)
        if (!response.ok) {
            throw new Error("Could not reach the server.");
        }

        const user = await response.json(); // Convert raw data to a JS object

        console.log("\n✅ User Found!");
        console.log(`- Name: ${user.name}`);
        console.log(`- Email: ${user.email}`);
        console.log(`- City: ${user.address.city}`);

    } catch (error) {
        console.log("🚨 FETCH ERROR:", error.message);
    }
}

getUserInfo();

/**
 * 🎓 KEY LESSON:
 * 1. fetch() returns a promise.
 * 2. response.json() also returns a promise (it takes time to parse).
 * 3. Always check if 'response.ok' is true before using the data!
 */


/// XHR (XMLHttpRequest) is the old way to do this, but it's more complicated and less efficient than fetch.

/// --- 💡 Real-World Example: Simulating a Flight Booking with Async/Await --
// --

    