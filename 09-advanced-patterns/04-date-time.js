/**
 * 📅 Date & Time (The Time Traveler Analogy)
 * 
 * JavaScript's Date object is like a time-tracking machine. 
 * It records a specific moment in history using "milliseconds" since 1970.
 */

// --- 💡 Real World Example: A Social Media Post ---

const postCreated = new Date('2024-05-15T10:30:00');
const now = new Date(); // Current time

console.log("--- Post Information ---");
console.log("Full Date:", postCreated.toLocaleString());
console.log("Year:", postCreated.getFullYear());
console.log("Month:", postCreated.getMonth() + 1); // ⚠️ Remember: Months are 0-indexed (Jan is 0)

// ⏳ Calculating 'Time Ago'
const diffInMs = now - postCreated;
const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

console.log(`\nThis post was created ${diffInDays} days ago.`);

/**
 * 🎓 KEY LESSON:
 * 1. new Date() creates a date object.
 * 2. getFullYear(), getMonth(), etc., extract specific parts.
 * 3. Subtracting two dates gives you the difference in milliseconds.
 */
