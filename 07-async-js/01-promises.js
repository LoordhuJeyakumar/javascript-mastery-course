/**
 * 🤝 Promises (The Pizza Delivery Analogy)
 * 
 * Imagine you order a pizza. The store gives you a promise that 
 * your pizza will arrive. 
 * - Pending: The pizza is being made.
 * - Resolved: The pizza arrives! (SUCCESS)
 * - Rejected: The oven broke, no pizza for you. (FAILURE)
 */

// --- 💡 Real-World Example: Simulating a Data Fetch ---

const fetchUserData = new Promise((resolve, reject) => {
    console.log("📡 Requesting user data from server...");

    const success = true; // Change to 'false' to see the error!

    setTimeout(() => {
        if (success) {
            resolve({ id: 1, name: "Satoshi", role: "Dev" }); // ✅ Success!
        } else {
            reject("❌ Error: Server is down."); // 🛑 Failure!
        }
    }, 2000);
});

// Using the Promise
fetchUserData
    .then((user) => {
        console.log("✅ Data received:", user.name);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("🏁 Request finished.");
    });

/**
 * 🎓 KEY LESSON:
 * 1. .then() runs when the promise is successful.
 * 2. .catch() runs when there is an error.
 * 3. .finally() runs no matter what.
 */

