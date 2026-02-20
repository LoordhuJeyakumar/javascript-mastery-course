/**
 * ⏳ Async / Await (The Modern Standard)
 * 
 * Think of Async/Await as a way to make asynchronous code look like 
 * it's running line-by-line, like a recipe. 
 * 'Await' means: "Wait for this specific task to finish before moving to the next one."
 */

// --- 💡 Real-World Example: Booking a Flight ---

async function bookFlight() {
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
    return new Promise(resolve => setTimeout(resolve, ms));
}

bookFlight();

/**
 * 🎓 WHY USE THIS?
 * Without Async/Await, you'd have to use many .then() calls (Callback Hell). 
 * This makes the code much easier to read and maintain!
 */
