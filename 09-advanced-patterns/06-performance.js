/**
 * 🚀 Performance Patterns (The Elevator Door Analogy)
 *
 * - Debouncing: Waiting until the user STOPS typing/clicking before doing something.
 * - Throttling: Doing something at a steady pace, no matter how fast the user clicks. (e.g. scrolling)
 */

// --- 💡 Real World Example: Search Bar & Window Resizing ---

// 1. DEBOUNCE: Useful for search inputs (Don't call API on every keystroke!)
function searchFromDatabase(query) {
  console.log(`Searching for: ${query}... (API Call Made!)`);
}

const debouncedSearch = debounce(searchFromDatabase, 5000);

// Imagine user typing "Java":
console.log("User types 'J'...");
debouncedSearch("J");
console.log("User types 'Ja'...");
debouncedSearch("Ja");
console.log("User types 'Jav'...");
debouncedSearch("Jav");
// Result: Only ONE API call will be made 500ms after the LAST letter.

// 2. THROTTLE: Useful for scrolling or resizing (Run logic at a constant rate)
function updateUILayout() {
  console.log("Updating layout... (Running at most every 200ms)");
}

const throttledUpdate = throttle(updateUILayout, 100);

// --- REUSABLE UTILITIES ---

function debounce(fn, delay) {
  // delay is the time in milliseconds to wait before calling the function
  let timer;
  return (...args) => {
    clearTimeout(timer);
    // set a timeout to call the function after the delay
    timer = setTimeout(() => fn(...args), delay);
  };
}

function throttle(fn, limit) {
  let lastCall = 0;
  return (...args) => {
    const now = Date.now();
    if (now - lastCall >= limit) {
      lastCall = now;
      fn(...args);
    }
  };
}

throttledUpdate();
throttledUpdate();
throttledUpdate();
throttledUpdate();

/**
 * 🎓 KEY LESSON:
 * 1. Use Debounce for "Search bars" or "Auto-save".
 * 2. Use Throttle for "Infinite Scroll" or "Window Resize".
 */
