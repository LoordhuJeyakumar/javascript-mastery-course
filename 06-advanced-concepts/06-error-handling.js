/**
 * 🕸️ Error Handling (The Safety Net Analogy)
 * 
 * Imagine a trapeze artist in a circus. Usually, everything is perfect. 
 * But if they fall, the **Safety Net** (try...catch) catches them so the 
 * show doesn't end in a disaster (the app crashing).
 */

// --- 💡 Real-World Example: Processing a Payment ---

//without error handling
function processPaymentWithoutErrorHandling(amount) {
    console.log("💳 Starting payment process...");
    console.log(`✅ Success! $${amount} has been processed.`);
    //tax calculation
    const tax = amount * 0.1;
    console.log(`💰 Tax: $${tax}`);
    //total amount
    const total = amount + tax;
    console.log(`💰 Total: $${total}`);
                                                                                //error handling
    if (amount <= 0) {
        throw new Error("Invalid amount! You cannot pay $0 or less.");
    }
}

//processPaymentWithoutErrorHandling(-500);

//with error handling
function processPayment(amount) {
    try {
        console.log("💳 Starting payment process...");

        // Simulate a "Fall" (An error)
        if (amount <= 0) {
            throw new Error("Invalid amount! You cannot pay $0 or less.");
        }

        console.log(`✅ Success! $${amount} has been processed.`);

    } catch (error) {
        // 🕸️ The Safety Net catches the error
        console.log("\n🛑 OOPS! SOMETHING WENT WRONG:");
        console.log(`[Error Message]: ${error.message}`);
        console.log("💡 Suggesion: Please check the payment amount and try again.");

    } finally {
        // This runs no matter what (Like cleaning up the circus after the show)
        console.log("\n🏁 Payment attempt finished. Redirecting to home page...");
    }
}

// Try a failing payment
processPayment(-50);

console.log("\n---");

// Try a successful payment
processPayment(100);

/**
 * 🎓 KEY LESSON:
 * 1. try {} -> Put your "risky" code here.
 * 2. catch (error) {} -> Run this if something breaks.
 * 3. throw -> Manually "fall" when you detect a problem.
 * 4. finally {} -> Run this at the end, regardless of success or failure.
 */
