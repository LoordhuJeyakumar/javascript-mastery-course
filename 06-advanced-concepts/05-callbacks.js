/**
 * 🍔 Callbacks (The Restaurant Analogy)
 * 
 * Imagine you order food at a restaurant. You don't stand at the counter 
 * waiting for it. Instead, they give you a **Buzzer** (the Callback). 
 * You go sit down, and when the food is ready, the buzzer goes off 
 * to tell you: "Come and get it!"
 */

// --- 💡 Real-World Example: An Order System ---

function takeOrder(customer, food, callback) {
    console.log(`📝 Order received: ${food} for ${customer}.`);
    console.log("👨‍🍳 Cooking in progress...");

    // Mimic the time it takes to cook
    setTimeout(() => {
        console.log(`\n✅ The ${food} is ready!`);
        callback(); // 🚨 The "Buzzer" goes off!
    }, 20000);
}

function notifyCustomer() {
    console.log("🔔 Customer notified: 'Your order is at the pickup counter!'");
}

// We pass 'notifyCustomer' as a "recipe" to be run LATER.
takeOrder("John", "Cheeseburger", notifyCustomer);

/**
 * 🎓 WHY USE THIS?
 * In JavaScript, some things take time (like loading an image or a database). 
 * Callbacks let the rest of your code keep running while you wait 
 * for the "Buzzer" to ring.
 * 
 * ⚠️ WARNING: Callback Hell
 * If you have too many callbacks inside callbacks, your code looks 
 * like a pyramid (>>>>). We will learn 'Promises' in Module 07 to fix this!
 */



// ------------
// Set Timeout
// ------------

/* setTimeout is a function that takes a callback function and a delay in milliseconds.
It calls the callback function after the delay.
*/
setTimeout(() => {
    console.log("Hello, world!");
}, 1000);

/* setTimeout is a function that takes a callback function and a delay in milliseconds.
It calls the callback function after the delay.
*/
setTimeout(() => {
    console.log("Hello, world!");
}, 1000);

// ------------
// Set Interval
// ------------
/* setInterval is a function that takes a callback function and a delay in milliseconds.
It calls the callback function after the delay.
*/
setInterval(() => {
    console.log("Hello, world!");
}, 10000);




// Callback Hell
// ------------
/* Callback Hell is a situation where you have too many callbacks nested inside each other.
It makes the code difficult to read and maintain.
*/
function fetchData(id, callback) {
    console.log("Fetching data for ID: " + id);
    // Simulating a task that takes time...
    setTimeout(() => {
        const data = { id: id, name: "Sample Data" };
        callback(data);
        setTimeout(() => {
            const data = { id: id, name: "Sample Data" };
            callback(data);
        }, 1000);
    }, 1000);
    setTimeout(() => {
        const data = { id: id, name: "Sample Data" };
        callback(data);
    }, 1000);
}

fetchData(42, (result) => {
    console.log("Callback received data:", result);
});
