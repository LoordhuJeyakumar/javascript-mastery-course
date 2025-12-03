# Async JavaScript Cheatsheet

## Promises

```javascript
const myPromise = new Promise((resolve, reject) => {
  const success = true;
  if (success) {
    resolve("Operation Successful!");
  } else {
    reject("Operation Failed.");
  }
});

myPromise
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

## Async / Await

```javascript
async function fetchData() {
  try {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchData();
```

## Fetch API

```javascript
// GET Request
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then(response => response.json())
  .then(json => console.log(json));
```
