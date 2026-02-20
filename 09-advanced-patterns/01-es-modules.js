/**
 * 🧱 ES Modules (The LEGO Analogy)
 * 
 * In the old days, JavaScript was one giant file. 
 * Now, we use Modules to keep things organized.
 */

// --- 💡 Real World Example: A Shopping Cart System ---

// 🛒 PART 1: The Helper Module (Imagine this is in cart_utils.js)
// We 'export' things we want other files to see.
export const TAX_RATE = 0.15;

export function calculateTotal(price, quantity) {
    const subtotal = price * quantity;
    return subtotal + (subtotal * TAX_RATE);
}

// 📦 PART 2: The Main Application (Imagine this is in app.js)
// We 'import' the tools we need.
// import { TAX_RATE, calculateTotal } from './cart_utils.js';

const itemPrice = 100;
const itemQty = 2;

console.log("--- Shopping Cart ---");
console.log(`Item Price: $${itemPrice}`);
console.log(`Tax Rate: ${TAX_RATE * 100}%`);
console.log(`Total: $${calculateTotal(itemPrice, itemQty)}`);

/**
 * 🎓 KEY LESSON:
 * 1. Use 'export' to share variables or functions.
 * 2. Use 'import' to use them in another file.
 * 3. This keeps your code clean and manageable!
 */
