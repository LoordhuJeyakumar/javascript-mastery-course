/**
 * 🎒 Closures (The Backpack Analogy)
 * 
 * When a function is born, it "remembers" its environment. 
 * Imagine a student leaving school (the outer function) but carrying 
 * a backpack full of supplies (variables) that only they can access.
 */

// --- 💡 Real-World Example: A Secure ATM ---

function createAccount(owner) {
    let balance = 0; // 🔒 This is a PRIVATE variable inside the "backpack"

    return {
        deposit: function (amount) {
            balance += amount;
            console.log(`✅ ${owner} deposited $${amount}. New balance: $${balance}`);
        },
        withdraw: function (amount) {
            if (amount > balance) {
                console.log("❌ Insufficient funds!");
            } else {
                balance -= amount;
                console.log(`💸 ${owner} withdrew $${amount}. Remaining: $${balance}`);
            }
        },
        checkBalance: function () {
            return `💰 Current Balance: $${balance}`;
        }
    };
}

const myATM = createAccount("Alice");

myATM.deposit(100);    // ✅ Alice deposited $100. New balance: $100
myATM.withdraw(40);    // 💸 Alice withdrew $40. Remaining: $60
console.log(myATM.checkBalance()); // 💰 Current Balance: $60

// ⚠️ IMPORTANT:
// console.log(balance); // ❌ ReferenceError! 'balance' is hidden inside the closure.

/**
 * 🎓 KEY LESSON:
 * 1. Closures allow "Data Privacy". No one can touch 'balance' except the functions we returned.
 * 2. The inner functions "closed over" the 'balance' variable and took it with them!
 */
