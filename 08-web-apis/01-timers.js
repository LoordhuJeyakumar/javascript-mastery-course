/**
 * ⏱️ Timers (The Alarm Clock Analogy)
 *
 * Timers let you control WHEN things happen.
 * - setTimeout: Like a **One-time Alarm**. It goes off once.
 * - setInterval: Like a **Snooze Button**. It keeps going off every few minutes.
 */

// --- 💡 1. setTimeout (The One-Timer) ---
console.log("🚀 Countdown... 3... 2... 1...");

/*
 * setTimeout is a function that takes a callback function and a delay in milliseconds.
 * It calls the callback function after the delay.
 * The callback function is executed once after the delay.
 * The delay is the time in milliseconds to wait before the callback function is executed.
 * The callback function is executed in the next event loop.
 * The callback function is executed in the same order as the setTimeout function is called.
 * setTimeout(callback, delay)
 */

setTimeout(() => {
  console.log("💥 BLAST OFF! (This happened after 3 seconds)");
}, 3000); // 3000 milliseconds = 3 seconds

// --- 💡 2. setInterval (The Repeater) ---

/*
 * setInterval is a function that takes a callback function and a delay in milliseconds.
 * It calls the callback function after the delay.
 * The callback function is executed repeatedly after the delay.
 * The delay is the time in milliseconds to wait before the callback function is executed.
 * The callback function is executed in the next event loop.
 * The callback function is executed in the same order as the setInterval function is called.
 * setInterval(callback, delay)
 */

let count = 0;
const heartbeat = setInterval(() => {
  count++;
  console.log(`💓 Heartbeat: ${count}`);

  // We must stop the interval eventually!
  if (count === 5) {
    clearInterval(heartbeat);
    console.log("🛑 Heart has stopped.");
  }
}, 1000); // 1000 milliseconds = 1 second

/**
 * 🎓 KEY LESSON:
 * 1. setTimeout(callback, delay) runs once.
 * 2. setInterval(callback, delay) runs repeatedly.
 * 3. Use clearInterval() to stop a repeater.
 */
