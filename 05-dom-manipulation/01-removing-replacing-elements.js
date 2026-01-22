// ============================================
// Removing and Replacing Elements
// ============================================

// Create a container for demonstration
const demoContainer = document.createElement("div");
demoContainer.id = "removal-demo";
demoContainer.style.padding = "20px";
demoContainer.style.border = "2px solid #333";
demoContainer.style.margin = "20px 0";
document.body.appendChild(demoContainer);

const title = document.createElement("h2");
title.textContent = "Removing and Replacing Elements Demo";
demoContainer.appendChild(title);

// ============================================
// 1. REMOVING ELEMENTS
// ============================================

// Method 1: Using remove() - Modern and Simple
const item1 = document.createElement("div");
item1.id = "item-1";
item1.textContent = "Item 1 - Click to remove using remove()";
item1.style.padding = "10px";
item1.style.margin = "5px";
item1.style.backgroundColor = "#ffcccc";
item1.style.cursor = "pointer";
item1.addEventListener("click", () => {
    item1.remove(); // Removes the element directly
    console.log("Item 1 removed using remove()");
});
demoContainer.appendChild(item1);

// Method 2: Using removeChild() - Requires parent reference
const item2 = document.createElement("div");
item2.id = "item-2";
item2.textContent = "Item 2 - Click to remove using removeChild()";
item2.style.padding = "10px";
item2.style.margin = "5px";
item2.style.backgroundColor = "#ccffcc";
item2.style.cursor = "pointer";
item2.addEventListener("click", () => {
    demoContainer.removeChild(item2); // Parent must call removeChild
    console.log("Item 2 removed using removeChild()");
});
demoContainer.appendChild(item2);

// Method 3: Removing with parent reference
const item3 = document.createElement("div");
item3.id = "item-3";
item3.textContent = "Item 3 - Click to remove using parentElement.removeChild()";
item3.style.padding = "10px";
item3.style.margin = "5px";
item3.style.backgroundColor = "#ccccff";
item3.style.cursor = "pointer";
item3.addEventListener("click", () => {
    item3.parentElement.removeChild(item3); // Using parentElement
    console.log("Item 3 removed using parentElement.removeChild()");
});
demoContainer.appendChild(item3);

// ============================================
// 2. REPLACING ELEMENTS
// ============================================

const replaceSection = document.createElement("div");
replaceSection.style.marginTop = "20px";
replaceSection.style.padding = "15px";
replaceSection.style.backgroundColor = "#f0f0f0";
demoContainer.appendChild(replaceSection);

const replaceTitle = document.createElement("h3");
replaceTitle.textContent = "Replacing Elements";
replaceSection.appendChild(replaceTitle);

// Method 1: Using replaceWith() - Modern
const oldElement = document.createElement("p");
oldElement.id = "old-element";
oldElement.textContent = "Old Element - Click to replace with replaceWith()";
oldElement.style.padding = "10px";
oldElement.style.backgroundColor = "#ffffcc";
oldElement.style.cursor = "pointer";
oldElement.addEventListener("click", () => {
    const newElement = document.createElement("p");
    newElement.id = "new-element";
    newElement.textContent = "New Element - Replaced using replaceWith()!";
    newElement.style.padding = "10px";
    newElement.style.backgroundColor = "#ccffff";
    oldElement.replaceWith(newElement); // Replaces oldElement with newElement
    console.log("Element replaced using replaceWith()");
});
replaceSection.appendChild(oldElement);

// Method 2: Using replaceChild() - Requires parent
const parentDiv = document.createElement("div");
parentDiv.id = "parent-div";
parentDiv.style.marginTop = "10px";
replaceSection.appendChild(parentDiv);

const oldElement2 = document.createElement("p");
oldElement2.id = "old-element-2";
oldElement2.textContent = "Old Element 2 - Click to replace with replaceChild()";
oldElement2.style.padding = "10px";
oldElement2.style.backgroundColor = "#ffccff";
oldElement2.style.cursor = "pointer";
parentDiv.appendChild(oldElement2);

oldElement2.addEventListener("click", () => {
    const newElement2 = document.createElement("p");
    newElement2.id = "new-element-2";
    newElement2.textContent = "New Element 2 - Replaced using replaceChild()!";
    newElement2.style.padding = "10px";
    newElement2.style.backgroundColor = "#ccffcc";
    parentDiv.replaceChild(newElement2, oldElement2); // parent.replaceChild(new, old)
    //oldElement2.parentElement.removeChild(newElement2, oldElement2); // Clean up reference
    console.log("Element replaced using replaceChild()");
});

// ============================================
// 3. REMOVING MULTIPLE ELEMENTS
// ============================================

const batchSection = document.createElement("div");
batchSection.style.marginTop = "20px";
batchSection.style.padding = "15px";
batchSection.style.backgroundColor = "#e0e0e0";
demoContainer.appendChild(batchSection);

const batchTitle = document.createElement("h3");
batchTitle.textContent = "Batch Removal";
batchSection.appendChild(batchTitle);

// Create multiple items
for (let i = 1; i <= 5; i++) {
    const batchItem = document.createElement("div");
    batchItem.className = "batch-item";
    batchItem.textContent = `Batch Item ${i}`;
    batchItem.style.padding = "5px";
    batchItem.style.margin = "3px";
    batchItem.style.backgroundColor = "#ddd";
    batchSection.appendChild(batchItem);
}

// Button to remove all batch items
const removeAllBtn = document.createElement("button");
removeAllBtn.textContent = "Remove All Batch Items";
removeAllBtn.style.padding = "10px";
removeAllBtn.style.marginTop = "10px";
removeAllBtn.style.cursor = "pointer";
removeAllBtn.addEventListener("click", () => {
    // Method 1: Using querySelectorAll and forEach
    const batchItems = document.querySelectorAll(".batch-item");
    batchItems.forEach(item => item.remove());
    console.log("All batch items removed");
    
    // Alternative: Using Array.from and forEach
    // Array.from(batchItems).forEach(item => item.remove());
    
    // Alternative: Using while loop (if you need to remove from parent)
    // while (batchSection.firstChild) {
    //     batchSection.removeChild(batchSection.firstChild);
    // }
});
batchSection.appendChild(removeAllBtn);

// ============================================
// 4. CONDITIONAL REMOVAL
// ============================================

const conditionalSection = document.createElement("div");
conditionalSection.style.marginTop = "20px";
conditionalSection.style.padding = "15px";
conditionalSection.style.backgroundColor = "#f5f5f5";
demoContainer.appendChild(conditionalSection);

const conditionalTitle = document.createElement("h3");
conditionalTitle.textContent = "Conditional Removal";
conditionalSection.appendChild(conditionalTitle);

// Create items with different classes
["red", "blue", "green", "red", "blue"].forEach((color, index) => {
    const colorItem = document.createElement("div");
    colorItem.className = `color-item ${color}`;
    colorItem.textContent = `Color Item ${index + 1} (${color})`;
    colorItem.style.padding = "8px";
    colorItem.style.margin = "5px";
    colorItem.style.backgroundColor = color === "red" ? "#ffcccc" : color === "blue" ? "#ccccff" : "#ccffcc";
    conditionalSection.appendChild(colorItem);
});

// Button to remove only red items
const removeRedBtn = document.createElement("button");
removeRedBtn.textContent = "Remove Only Red Items";
removeRedBtn.style.padding = "10px";
removeRedBtn.style.marginTop = "10px";
removeRedBtn.style.cursor = "pointer";
removeRedBtn.addEventListener("click", () => {
    const redItems = document.querySelectorAll(".color-item.red");
    redItems.forEach(item => item.remove());
    console.log("Red items removed");
});
conditionalSection.appendChild(removeRedBtn);

console.log("=== Removing and Replacing Elements Demo Loaded ===");
console.log("Methods covered:");
console.log("1. remove() - Modern way to remove elements");
console.log("2. removeChild() - Requires parent reference");
console.log("3. replaceWith() - Modern way to replace elements");
console.log("4. replaceChild() - Requires parent reference");
