# Module 07: Async JavaScript

JavaScript is single-threaded, but it can handle time-consuming tasks like fetching data without freezing the page.

## 🧠 Real World Analogy
- **Async/Promises**: Like **Ordering Food at a Restaurant**.
    - You place an order (Request).
    - The waiter gives you a buzzer (Promise).
    - You sit and talk (do other work).
    - When the food is ready, the buzzer rings (Resolve), and you eat.
    - If the kitchen burns the food, they tell you (Reject).

## 📚 Topics Covered
1.  **Callbacks**: The old way of handling async operations.
2.  **Promises**: A cleaner way to handle success and failure.
3.  **Async/Await**: Syntactic sugar for Promises (modern standard).
4.  **Fetch API**: Getting data from the server.
5.  **Error Handling**: `try...catch`.

## 📖 Resources
- [Cheatsheet](./cheatsheet.md)
- [MDN - Asynchronous JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous)

## 💻 Assignments

### Daily Practice
- Create a Promise that resolves after 2 seconds.
- Use `fetch` to get data from a public API.

### Weekly Challenge
- **User Dashboard**: Fetch a list of users from `https://jsonplaceholder.typicode.com/users` and display them on a webpage.
