# 🧘 Project Brief: Zen Task Manager

## 🎯 Objective
Create a distraction-free, elegant task management application that saves data locally.

## 🛠️ Technical Requirements
- **Structure**: Clean HTML5 document with a centered container.
- **Functionality**:
    - Input field and "Add" button.
    - List of tasks with a "Complete" checkbox and "Delete" icon.
    - Filter buttons: [All] [Active] [Completed].
- **State Management**:
    - Use an array of objects: `[{ id: 1, text: "Buy milk", completed: false }]`.
- **Persistence**: 
    - Save the array to `localStorage` every time it changes.
    - Load the data when the page first opens.

## 🧠 How to Start
1. Create a `renderTasks()` function that takes the array and updates the `<ul>` in your HTML.
2. Add an event listener to the "Add" button that pushes a new object to your array.
3. Implement the delete logic by using `.filter()` on your array.

## 🚀 Level Up Challenges
- Add a "Clear All Completed" button.
- Implement an "Edit" mode where double-clicking a task allows you to rename it.
- Add a "Progress Bar" at the top that shows % of tasks done.
