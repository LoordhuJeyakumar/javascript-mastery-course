// Final Project: Task Manager

// 1. Select elements
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// 2. Initialize state (load from localStorage if available)
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// 3. Function to render tasks
function renderTasks() {
    // Clear current list
    taskList.innerHTML = "";

    // Loop through tasks and create elements
    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        if (task.completed) {
            li.classList.add("completed");
        }

        li.innerHTML = `
            <span onclick="toggleTask(${index})">${task.text}</span>
            <button class="delete-btn" onclick="deleteTask(${index})">Delete</button>
        `;

        taskList.appendChild(li);
    });
}

// 4. Function to add a task
function addTask() {
    const text = taskInput.value.trim();
    if (text === "") return;

    const newTask = {
        text: text,
        completed: false
    };

    tasks.push(newTask);
    saveAndRender();
    taskInput.value = "";
}

// 5. Function to delete a task
function deleteTask(index) {
    tasks.splice(index, 1);
    saveAndRender();
}

// 6. Function to toggle task completion
function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    saveAndRender();
}

// Helper to save to localStorage and update UI
function saveAndRender() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderTasks();
}

// Event Listeners
addBtn.addEventListener("click", addTask);

// Initial Render
renderTasks();
