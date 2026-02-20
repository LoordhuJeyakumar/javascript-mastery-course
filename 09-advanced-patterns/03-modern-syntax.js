/**
 * ⚡ Modern Syntax Sugar (The Safety First Analogy)
 * 
 * These features help you write code that doesn't break when data is missing.
 */

// --- 💡 Real World Example: A User Profile Response ---

const apiResponse = {
    id: 1,
    profile: {
        username: "JS_Master",
        preferences: {
            theme: "dark",
            // Notice: 'notifications' is missing!
        }
    }
};

// 1. Optional Chaining (?.)
// Without this, if we tried to access 'email', the app would CRASH.
const email = apiResponse.profile.contact?.email;
console.log("User Email:", email); // undefined (No crash!)

// 2. Nullish Coalescing (??)
// Providing defaults only when necessary.
const userScore = 0; // Imagine a game score

// The BAD way (using ||)
const score1 = userScore || 10;
console.log("Final Score (using ||):", score1); // 10 (But the user had 0!)

// The GOOD way (using ??)
const score2 = userScore ?? 10;
console.log("Final Score (using ??):", score2); // 0 (Correct!)

/**
 * 🎓 KEY LESSON:
 * 1. Use ?. when you aren't 100% sure a property exists.
 * 2. Use ?? when you want a default for null/undefined, but want to KEEP 0 or empty strings.
 */
