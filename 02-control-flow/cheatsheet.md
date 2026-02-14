# Control Flow Cheatsheet

## If / Else

```javascript
let hour = 10;

if (hour < 12) {
  console.log("Good Morning");
} else if (hour < 18) {
  console.log("Good Afternoon");
} else {
  console.log("Good Evening");
}
```

## Ternary Operator

```javascript
let age = 20;
let type = age >= 18 ? "Adult" : "Minor";
```

## Switch Statement

```javascript
let day = "Monday";

switch (day) {
  case "Monday":
    console.log("Start of the work week!");
    break;
  case "Friday":
    console.log("Weekend is near!");
    break;
  default:
    console.log("Just another day.");
}
```

## Loops

### For Loop
Use when you know how many times to loop.
```javascript
for (let i = 0; i < 5; i++) {
  console.log("Iteration:", i);
}
```

### While Loop
Use when you don't know how many times, but have a condition.
```javascript
let count = 0;
while (count < 5) {
  console.log(count);
  count++;
}
```

### Do...While Loop
Use when you want to execute the loop at least once.
```javascript
let result = '';
let i = 0;
do {
  result += i + ' ';
  i++;
} while (i < 5);
console.log(result);
```

### 

## Break and Continue

```javascript
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break; // Exit loop when i is 5
  }
  if (i % 2 === 0) {
    continue; // Skip even numbers
  }
  console.log(i); // Logs odd numbers less than 5
}
```

## Truthiness & Falsiness

In JavaScript, every value has an inherent boolean value.

### Falsy Values (evaluate to `false`):
- `false`
- `0` (zero)
- `""` (empty string)
- `null`
- `undefined`
- `NaN` (Not a Number)

### Truthy Values:
Everything else is **truthy**, including:
- `"0"` (string with zero)
- `"false"` (string with text)
- `[]` (empty array)
- `{}` (empty object)

### Practical Example:
```javascript
let username = "";

if (username) {
  console.log("Welcome " + username);
} else {
  console.log("Please enter a username"); // This will run
}
```



