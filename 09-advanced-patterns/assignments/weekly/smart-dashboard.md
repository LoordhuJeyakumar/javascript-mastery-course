# Weekly Challenge: The "Smart Settings" Dashboard

In this challenge, you will build the logic for a "User Settings" dashboard.You must use all the advanced concepts learned in this module.

## 🎯 Goal
Create a logic system that manages a user's profile and settings efficiently.

## 📌 Requirements

### 1. The Validation System(Regex)
Write a class or object that contains regex patterns to validate:
- ** Email **: Must be a valid email format.
- ** Password **: Must be at least 8 characters, include at least one number and one symbol.

### 2. The Data Protection(Optional Chaining)
Write a function `getUserCity(user)` that safely returns the city of a user from a deep object structure(`user.address.location.city`).
- If any part of the path is missing, return "Unknown".

### 3. The Performance Guard(Debounce)
Implement a search function that mimics an API call.
- Wrap this function in a ** Debounce ** utility so that it only runs 1 second after the user stops typing.

### 4. The Persistence Layer(Storage)
Write functions to:
- Save the user's "Theme" (Dark/Light) to **LocalStorage**.
    - Save the user's "Current Page" to **SessionStorage**.

### 5. The Time Tracker(Date)
Write a function that returns a formatted string: `"Welcome back! You last logged in on: [Formatted Date]"`.
- The date should be exactly 2 days ago from right now.

---

## 🚀 Constraints
    - Do NOT provide the solution.
- Use ** ES Modules ** syntax(`import/export`) to organize your logic into at least 2 files.
- Add meaningful comments to your code explaining the ** Why ** behind each feature.
