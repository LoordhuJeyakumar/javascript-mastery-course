/**
 * 📍 Geolocation (The GPS Analogy)
 * 
 * The Geolocation API is like having a **GPS Tracker** in your pocket. 
 * It asks the browser for your help to find exactly where you are.
 */

// --- 💡 Real-World Example: Finding Your Coordinates ---

function findMyLocation() {
    console.log("🔍 Looking for your location...");

    if (!navigator.geolocation) {
        console.log("❌ Your browser doesn't support GPS (Geolocation).");
        return;
    }

    // This triggers the browser's "Allow location?" popup
    navigator.geolocation.getCurrentPosition(
        (position) => {
            const lat = position.coords.latitude;
            const long = position.coords.longitude;

            console.log("\n📍 LOCATION FOUND!");
            console.log(`- Latitude: ${lat}`);
            console.log(`- Longitude: ${long}`);
            console.log(`- Check it on Maps: https://www.google.com/maps?q=${lat},${long}`);
        },
        (error) => {
            console.log(`🛑 ERROR: ${error.message}`);
        }
    );
}

// Note: This won't run in Node.js. Paste this into your BROWSER CONSOLE to test!
findMyLocation();

/**
 * 🎓 KEY LESSON:
 * 1. navigator.geolocation is where the power lives.
 * 2. getCurrentPosition() takes two callbacks: one for Success, one for Error.
 * 3. It will always ask the user for permission first.
 */
