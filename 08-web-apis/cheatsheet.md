# Web APIs Cheatsheet

## LocalStorage

Data persists even after closing the browser.

```javascript
// Save
localStorage.setItem("username", "Alice");

// Retrieve
const user = localStorage.getItem("username");

// Remove
localStorage.removeItem("username");

// Clear all
localStorage.clear();
```

## SessionStorage

Data is lost when the tab is closed.

```javascript
sessionStorage.setItem("token", "12345");
```

## Geolocation

```javascript
navigator.geolocation.getCurrentPosition(
  (position) => {
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);
  },
  (error) => {
    console.error("Error getting location", error);
  }
);
```

## Timers

```javascript
// Run once after 1000ms
setTimeout(() => {
  console.log("Hello!");
}, 1000);

// Run repeatedly every 1000ms
const intervalId = setInterval(() => {
  console.log("Tick");
}, 1000);

// Stop interval
clearInterval(intervalId);
```
