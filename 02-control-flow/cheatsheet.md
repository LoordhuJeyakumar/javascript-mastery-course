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
