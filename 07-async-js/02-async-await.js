/**
 * ⏳ Async / Await (The Modern Standard)
 * 
 * Think of Async/Await as a way to make asynchronous code look like 
 * it's running line-by-line, like a recipe. 
 * 'Await' means: "Wait for this specific task to finish before moving to the next one."
 */

// --- 💡 Real-World Example: Booking a Flight ---

/*************  ✨ Windsurf Command ⭐  *************/
/**
 * Simulates booking a flight by waiting for seat availability, processing payment, and sending a confirmation email.
/*******  d86b6fe7-d9d8-4099-bc51-777912a9dd00  *******/async function bookFlight() {
    try {
        console.log("✈️ Step 1: Checking seat availability...");
        await wait(1500); // Wait for the check

        console.log("💳 Step 2: Processing payment...");
        await wait(2000); // Wait for payment

        console.log("📧 Step 3: Sending confirmation email...");
        await wait(1000); // Wait for email

        console.log("\n🎉 SUCCESS! Your flight is booked.");

    } catch (error) {
        console.log("🛑 ERROR:", error.message);
    }
}

// Helper function to simulate waiting
function wait(ms) {
    console.log(`🕛 Waiting for ${ms / 1000} seconds...`);
    return new Promise(resolve => setTimeout(resolve, ms));
}

//bookFlight();

/**
 * 🎓 WHY USE THIS?
 * Without Async/Await, you'd have to use many .then() calls (Callback Hell). 
 * This makes the code much easier to read and maintain!
 */


/// --- 💡 Real-World Example: Simulating a Data Fetch with Promises ---

/**
 * Simulates fetching user data from a server. 
 * The promise can either resolve with user data or reject with an error message.
 * 
 * Outcomes:
 * - Resolved: Data received: Satoshi (SUCCESS)
 * - Rejected: ❌ Error: Server is down. (FAILURE)
 * - Finally: 🏁 Request finished. (ALWAYS RUNS)
 * 
 * Note: Change the 'success' variable to 'false' to see the error case!
 * 
 * Key Lessons:
 * 1. .then() runs when the promise is successful.
 * 2. .catch() runs when there is an error.
 * 3. .finally() runs no matter what.
 * 
 * async/await version of the above example would look like this:
 * 
 */
async function fetchUserDataAsync() {
    console.log("📡 Requesting user data from server...");
    const success = true; // Change to 'false' to see the error!

    try {
        await wait(2000); // Simulate network delay

        if (success) {
            const user = { id: 1, name: "Satoshi", role: "Dev" }; // ✅ Success!
            console.log("✅ Data received:", user.name);
            return user;
        } else {
            throw new Error("❌ Error: Server is down."); // 🛑 Failure!
        }
    } catch (error) {
        console.log(error.message);
    } finally {
        console.log("🏁 Request finished.");
    }
}

fetchUserDataAsync();