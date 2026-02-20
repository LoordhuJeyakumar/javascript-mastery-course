/**
 * 📦 Web Storage (The Locker Analogy)
 * 
 * - LocalStorage: Like a **Permanent Locker**. You put something there, and it stays even if you leave the school (restart browser).
 * - SessionStorage: Like a **Day Locker**. It empties when you leave for the day (close the tab).
 * - Cookies: Like a **Ticket Stub**. Small, specific info that travels with you to the server.
 */

// --- 💡 Real World Example: Setting User Preferences ---

// 1. Saving a Theme (Permanent)
localStorage.setItem('theme', 'dark');
const savedTheme = localStorage.getItem('theme');
console.log("Saved Theme:", savedTheme);

// 2. Saving a temporary Search Query (Single Tab only)
sessionStorage.setItem('currentSearch', 'JavaScript Tutorials');
console.log("Session Search:", sessionStorage.getItem('currentSearch'));

// ⚠️ Note: In Node.js environment, 'localStorage' isn't available.
// This code is meant to be run in a Browser Console!

/**
 * 🎓 KEY LESSON:
 * 1. Use LocalStorage for things like "Settings" or "Dark Mode".
 * 2. Use SessionStorage for things like "Form data" that should be lost when closing the tab.
 * 3. Use Cookies for small pieces of data that the server needs to know about (like Login Tokens).
 */
