/**
 * ⏱️ Timers (The Alarm Clock Analogy)
 * 
 * Timers let you control WHEN things happen. 
 * - setTimeout: Like a **One-time Alarm**. It goes off once.
 * - setInterval: Like a **Snooze Button**. It keeps going off every few minutes.
 */

// --- 💡 1. setTimeout (The One-Timer) ---
console.log("🚀 Countdown... 3... 2... 1...");

setTimeout(() => {
    console.log("💥 BLAST OFF! (This happened after 3 seconds)");
}, 3000);


// --- 💡 2. setInterval (The Repeater) ---
let count = 0;
const heartbeat = setInterval(() => {
    count++;
    console.log(`💓 Heartbeat: ${count}`);

    // We must stop the interval eventually!
    if (count === 5) {
        clearInterval(heartbeat);
        console.log("🛑 Heart has stopped.");
    }
}, 1000);

/**
 * 🎓 KEY LESSON:
 * 1. setTimeout(callback, delay) runs once.
 * 2. setInterval(callback, delay) runs repeatedly.
 * 3. Use clearInterval() to stop a repeater.
 */
