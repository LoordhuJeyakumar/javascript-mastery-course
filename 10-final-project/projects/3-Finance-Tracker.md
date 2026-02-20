# 💰 Project Brief: Personal Finance Tracker

## 🎯 Objective
A full-featured dashboard to track income, expenses, and overall savings.

## 🛠️ Technical Requirements
- **Functionality**:
    - Form to add an entry with: Description, Category (Work, Food, Fun), and Amount.
    - Toggle for [Income / Expense].
- **calculations**:
    - Total Income, Total Expenses, and Net Balance display.
- **Advanced Logic**:
    - Use `.reduce()` to calculate the totals from an array of transaction objects.
    - Implement a "History" list where users can delete old transactions.

## 🧠 How to Start
1. Create a `transactions` array.
2. Write a function named `updateUI()` that recalculates the balance and re-renders the list.
3. Use a template string to create the HTML for each transaction row.

## 🚀 Level Up Challenges
- Add a "Filter by Category" dropdown.
- Use a library like [Chart.js](https://www.chartjs.org/) to show a pie chart of spending (ADVANCED).
- Add a "Monthly Budget" limit and turn the balance red if the user goes over.
