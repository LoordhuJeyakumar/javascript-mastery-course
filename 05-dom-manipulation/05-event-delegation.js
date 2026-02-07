// ============================================
// Event Delegation and Event Propagation
// ============================================

// Create a container for demonstration
const demoContainer = document.createElement("div");
demoContainer.id = "event-delegation-demo";
demoContainer.style.padding = "20px";
demoContainer.style.border = "2px solid #333";
demoContainer.style.margin = "20px 0";
document.body.appendChild(demoContainer);

const title = document.createElement("h2");
title.textContent = "Event Delegation & Propagation Demo";
demoContainer.appendChild(title);

// ============================================
// 1. EVENT DELEGATION
// ============================================

const delegationSection = document.createElement("div");
delegationSection.style.marginTop = "20px";
delegationSection.style.padding = "15px";
delegationSection.style.backgroundColor = "#e8f5e9";
demoContainer.appendChild(delegationSection);

const delegationTitle = document.createElement("h3");
delegationTitle.textContent = "Event Delegation";
delegationTitle.style.marginBottom = "10px";
delegationSection.appendChild(delegationTitle);

const delegationInfo = document.createElement("div");
delegationInfo.style.padding = "10px";
delegationInfo.style.backgroundColor = "#fff";
delegationInfo.style.marginBottom = "15px";
delegationInfo.style.fontSize = "14px";
delegationInfo.innerHTML = `
    <strong>Problem:</strong> Adding event listeners to many elements is inefficient<br>
    <strong>Solution:</strong> Add one listener to parent, use event.target to identify clicked element<br>
    <strong>Benefits:</strong> Works with dynamically added elements, better performance
`;
delegationSection.appendChild(delegationInfo);

// Create a list that will have items added dynamically
const listContainer = document.createElement("div");
listContainer.style.marginTop = "10px";
delegationSection.appendChild(listContainer);

const listTitle = document.createElement("h4");
listTitle.textContent = "Dynamic List (Event Delegation)";
listTitle.style.marginBottom = "10px";
listContainer.appendChild(listTitle);

const dynamicList = document.createElement("ul");
dynamicList.id = "dynamic-list";
dynamicList.style.padding = "10px";
dynamicList.style.backgroundColor = "#fff";
dynamicList.style.border = "1px solid #ccc";
dynamicList.style.minHeight = "100px";
listContainer.appendChild(dynamicList);

// Add initial items
for (let i = 1; i <= 3; i++) {
    const li = document.createElement("li");
    li.textContent = `Item ${i} - Click to remove`;
    li.style.padding = "8px";
    li.style.margin = "5px 0";
    li.style.backgroundColor = "#f0f0f0";
    li.style.cursor = "pointer";
    li.style.border = "1px solid #ddd";
    dynamicList.appendChild(li);
}

// ❌ BAD: Adding listener to each item (doesn't work for new items)
// dynamicList.querySelectorAll('li').forEach(li => {
//     li.addEventListener('click', () => {
//         li.remove();
//     });
// });

// ✅ GOOD: Event delegation - one listener on parent
dynamicList.addEventListener("click", (event) => {
    // Check if clicked element is an <li>
    if (event.target.tagName === "LI") {
        const clickedItem = event.target;
        clickedItem.style.backgroundColor = "#ffcccc";
        clickedItem.textContent += " (Removing...)";
        
        setTimeout(() => {
            clickedItem.remove();
            console.log("Item removed via event delegation");
        }, 500);
    }
});

// Button to add new items (these will automatically work with delegation!)
const addItemBtn = document.createElement("button");
addItemBtn.textContent = "Add New Item";
addItemBtn.style.padding = "8px";
addItemBtn.style.margin = "10px 5px 5px 0";
addItemBtn.style.cursor = "pointer";
let itemCount = 3;
addItemBtn.addEventListener("click", () => {
    itemCount++;
    const li = document.createElement("li");
    li.textContent = `Item ${itemCount} - Click to remove (dynamically added!)`;
    li.style.padding = "8px";
    li.style.margin = "5px 0";
    li.style.backgroundColor = "#f0f0f0";
    li.style.cursor = "pointer";
    li.style.border = "1px solid #ddd";
    dynamicList.appendChild(li);
    console.log("New item added - event delegation still works!");
});
listContainer.appendChild(addItemBtn);

// ============================================
// 2. EVENT PROPAGATION (Bubbling)
// ============================================

const propagationSection = document.createElement("div");
propagationSection.style.marginTop = "20px";
propagationSection.style.padding = "15px";
propagationSection.style.backgroundColor = "#fff3e0";
demoContainer.appendChild(propagationSection);

const propagationTitle = document.createElement("h3");
propagationTitle.textContent = "Event Propagation (Bubbling)";
propagationTitle.style.marginBottom = "10px";
propagationSection.appendChild(propagationTitle);

const propagationInfo = document.createElement("div");
propagationInfo.style.padding = "10px";
propagationInfo.style.backgroundColor = "#fff";
propagationInfo.style.marginBottom = "15px";
propagationInfo.style.fontSize = "14px";
propagationInfo.innerHTML = `
    <strong>Event Bubbling:</strong> Events bubble up from child to parent elements<br>
    <strong>Example:</strong> Clicking a button also triggers click on its parent, grandparent, etc.<br>
    <strong>Use case:</strong> This is why event delegation works!
`;
propagationSection.appendChild(propagationInfo);

// Create nested elements to demonstrate bubbling
const bubbleContainer = document.createElement("div");
bubbleContainer.id = "bubble-container";
bubbleContainer.style.padding = "30px";
bubbleContainer.style.backgroundColor = "#ffcccc";
bubbleContainer.style.border = "3px solid #ff0000";
bubbleContainer.style.cursor = "pointer";
bubbleContainer.textContent = "Container (Click me!)";
bubbleContainer.style.fontWeight = "bold";
propagationSection.appendChild(bubbleContainer);

const bubbleParent = document.createElement("div");
bubbleParent.id = "bubble-parent";
bubbleParent.style.padding = "20px";
bubbleParent.style.margin = "10px";
bubbleParent.style.backgroundColor = "#ccffcc";
bubbleParent.style.border = "3px solid #00ff00";
bubbleParent.style.cursor = "pointer";
bubbleParent.textContent = "Parent (Click me!)";
bubbleParent.style.fontWeight = "bold";
bubbleContainer.appendChild(bubbleParent);

const bubbleChild = document.createElement("div");
bubbleChild.id = "bubble-child";
bubbleChild.style.padding = "15px";
bubbleChild.style.margin = "10px";
bubbleChild.style.backgroundColor = "#ccccff";
bubbleChild.style.border = "3px solid #0000ff";
bubbleChild.style.cursor = "pointer";
bubbleChild.textContent = "Child (Click me!)";
bubbleChild.style.fontWeight = "bold";
bubbleParent.appendChild(bubbleChild);

// Add listeners to all three levels
const logBubble = (element, level) => {
    element.addEventListener("click", (event) => {
        console.log(`${level} clicked!`, event.target.id);
        
        const logDiv = document.createElement("div");
        logDiv.style.marginTop = "5px";
        logDiv.style.padding = "5px";
        logDiv.style.backgroundColor = "#fff";
        logDiv.style.fontSize = "12px";
        logDiv.textContent = `${level} clicked!`;
        
        // Remove previous logs
        const prevLogs = propagationSection.querySelectorAll(".bubble-log");
        if (prevLogs.length > 2) {
            prevLogs[0].remove();
        }
        
        logDiv.className = "bubble-log";
        propagationSection.appendChild(logDiv);
    });
};

logBubble(bubbleContainer, "Container");
logBubble(bubbleParent, "Parent");
logBubble(bubbleChild, "Child");

// ============================================
// 3. STOPPING PROPAGATION
// ============================================

const stopPropSection = document.createElement("div");
stopPropSection.style.marginTop = "20px";
stopPropSection.style.padding = "15px";
stopPropSection.style.backgroundColor = "#e3f2fd";
demoContainer.appendChild(stopPropSection);

const stopPropTitle = document.createElement("h3");
stopPropTitle.textContent = "Stopping Event Propagation";
stopPropTitle.style.marginBottom = "10px";
stopPropSection.appendChild(stopPropTitle);

const stopPropInfo = document.createElement("div");
stopPropInfo.style.padding = "10px";
stopPropInfo.style.backgroundColor = "#fff";
stopPropInfo.style.marginBottom = "15px";
stopPropInfo.style.fontSize = "14px";
stopPropInfo.innerHTML = `
    <strong>event.stopPropagation():</strong> Prevents event from bubbling to parent elements<br>
    <strong>event.stopImmediatePropagation():</strong> Stops propagation and prevents other listeners on same element
`;
stopPropSection.appendChild(stopPropInfo);

// Create nested elements with stopPropagation
const stopContainer = document.createElement("div");
stopContainer.id = "stop-container";
stopContainer.style.padding = "30px";
stopContainer.style.backgroundColor = "#ffcccc";
stopContainer.style.border = "3px solid #ff0000";
stopContainer.style.cursor = "pointer";
stopContainer.textContent = "Container (Click me!)";
stopContainer.style.fontWeight = "bold";
stopPropSection.appendChild(stopContainer);

const stopParent = document.createElement("div");
stopParent.id = "stop-parent";
stopParent.style.padding = "20px";
stopParent.style.margin = "10px";
stopParent.style.backgroundColor = "#ccffcc";
stopParent.style.border = "3px solid #00ff00";
stopParent.style.cursor = "pointer";
stopParent.textContent = "Parent (Click me!)";
stopParent.style.fontWeight = "bold";
stopContainer.appendChild(stopParent);

const stopChild = document.createElement("div");
stopChild.id = "stop-child";
stopChild.style.padding = "15px";
stopChild.style.margin = "10px";
stopChild.style.backgroundColor = "#ccccff";
stopChild.style.border = "3px solid #0000ff";
stopChild.style.cursor = "pointer";
stopChild.textContent = "Child (Click me - stops propagation!)";
stopChild.style.fontWeight = "bold";
stopParent.appendChild(stopChild);

// Add listeners - child stops propagation
stopContainer.addEventListener("click", () => {
    console.log("Container clicked (should NOT fire if child stops propagation)");
    const logDiv = document.createElement("div");
    logDiv.style.marginTop = "5px";
    logDiv.style.padding = "5px";
    logDiv.style.backgroundColor = "#fff";
    logDiv.style.fontSize = "12px";
    logDiv.textContent = "Container clicked";
    logDiv.className = "stop-log";
    stopPropSection.appendChild(logDiv);
});

stopParent.addEventListener("click", () => {
    console.log("Parent clicked (should NOT fire if child stops propagation)");
    const logDiv = document.createElement("div");
    logDiv.style.marginTop = "5px";
    logDiv.style.padding = "5px";
    logDiv.style.backgroundColor = "#fff";
    logDiv.style.fontSize = "12px";
    logDiv.textContent = "Parent clicked";
    logDiv.className = "stop-log";
    stopPropSection.appendChild(logDiv);
});

stopChild.addEventListener("click", (event) => {
    event.stopPropagation(); // Stop the event from bubbling up
    console.log("Child clicked - propagation stopped!");
    
    const logDiv = document.createElement("div");
    logDiv.style.marginTop = "5px";
    logDiv.style.padding = "5px";
    logDiv.style.backgroundColor = "#c8e6c9";
    logDiv.style.fontSize = "12px";
    logDiv.style.fontWeight = "bold";
    logDiv.textContent = "Child clicked - propagation stopped! (Parent/Container won't fire)";
    logDiv.className = "stop-log";
    
    // Remove previous logs
    const prevLogs = stopPropSection.querySelectorAll(".stop-log");
    prevLogs.forEach(log => log.remove());
    
    stopPropSection.appendChild(logDiv);
});

// ============================================
// 4. EVENT CAPTURING (Alternative to Bubbling)
// ============================================

const capturingSection = document.createElement("div");
capturingSection.style.marginTop = "20px";
capturingSection.style.padding = "15px";
capturingSection.style.backgroundColor = "#f3e5f5";
demoContainer.appendChild(capturingSection);

const capturingTitle = document.createElement("h3");
capturingTitle.textContent = "Event Capturing (Phase)";
capturingTitle.style.marginBottom = "10px";
capturingSection.appendChild(capturingTitle);

const capturingInfo = document.createElement("div");
capturingInfo.style.padding = "10px";
capturingInfo.style.backgroundColor = "#fff";
capturingInfo.style.marginBottom = "15px";
capturingInfo.style.fontSize = "14px";
capturingInfo.innerHTML = `
    <strong>Event Phases:</strong><br>
    1. <strong>Capturing:</strong> Event goes from window → target (top to bottom)<br>
    2. <strong>Target:</strong> Event reaches the target element<br>
    3. <strong>Bubbling:</strong> Event goes from target → window (bottom to top)<br><br>
    
    <strong>By default:</strong> Listeners use bubbling phase<br>
    <strong>To use capturing:</strong> Set third parameter to <code>true</code> in addEventListener
`;
capturingSection.appendChild(capturingInfo);

// Create elements for capturing demo
const captureContainer = document.createElement("div");
captureContainer.id = "capture-container";
captureContainer.style.padding = "20px";
captureContainer.style.backgroundColor = "#ffcccc";
captureContainer.style.border = "2px solid #ff0000";
captureContainer.textContent = "Container";
captureContainer.style.fontWeight = "bold";
capturingSection.appendChild(captureContainer);

const captureChild = document.createElement("div");
captureChild.id = "capture-child";
captureChild.style.padding = "15px";
captureChild.style.margin = "10px";
captureChild.style.backgroundColor = "#ccccff";
captureChild.style.border = "2px solid #0000ff";
captureChild.style.cursor = "pointer";
captureChild.textContent = "Child (Click me!)";
captureChild.style.fontWeight = "bold";
captureContainer.appendChild(captureChild);

// Bubbling listener (default)
captureContainer.addEventListener("click", () => {
    console.log("Container (bubbling) - fires AFTER child");
    const logDiv = document.createElement("div");
    logDiv.style.marginTop = "5px";
    logDiv.style.padding = "5px";
    logDiv.style.backgroundColor = "#fff";
    logDiv.style.fontSize = "12px";
    logDiv.textContent = "Container (bubbling) - fires AFTER";
    logDiv.className = "capture-log";
    capturingSection.appendChild(logDiv);
});

// Capturing listener (third parameter = true)
captureContainer.addEventListener("click", () => {
    console.log("Container (capturing) - fires BEFORE child");
    const logDiv = document.createElement("div");
    logDiv.style.marginTop = "5px";
    logDiv.style.padding = "5px";
    logDiv.style.backgroundColor = "#fff";
    logDiv.style.fontSize = "12px";
    logDiv.textContent = "Container (capturing) - fires BEFORE";
    logDiv.className = "capture-log";
    capturingSection.appendChild(logDiv);
}, true); // true = capturing phase

captureChild.addEventListener("click", () => {
    console.log("Child (target) - fires in between");
    const logDiv = document.createElement("div");
    logDiv.style.marginTop = "5px";
    logDiv.style.padding = "5px";
    logDiv.style.backgroundColor = "#c8e6c9";
    logDiv.style.fontSize = "12px";
    logDiv.style.fontWeight = "bold";
    logDiv.textContent = "Child (target) - fires in between";
    logDiv.className = "capture-log";
    capturingSection.appendChild(logDiv);
});

// ============================================
// 5. REMOVING EVENT LISTENERS
// ============================================

const removeListenerSection = document.createElement("div");
removeListenerSection.style.marginTop = "20px";
removeListenerSection.style.padding = "15px";
removeListenerSection.style.backgroundColor = "#fce4ec";
demoContainer.appendChild(removeListenerSection);

const removeListenerTitle = document.createElement("h3");
removeListenerTitle.textContent = "Removing Event Listeners";
removeListenerTitle.style.marginBottom = "10px";
removeListenerSection.appendChild(removeListenerTitle);

const removeListenerInfo = document.createElement("div");
removeListenerInfo.style.padding = "10px";
removeListenerInfo.style.backgroundColor = "#fff";
removeListenerInfo.style.marginBottom = "15px";
removeListenerInfo.style.fontSize = "14px";
removeListenerInfo.innerHTML = `
    <strong>Important:</strong> To remove a listener, you need a reference to the same function<br>
    <strong>Solution:</strong> Store the function in a variable, or use named function
`;
removeListenerSection.appendChild(removeListenerInfo);

const removeButton = document.createElement("button");
removeButton.id = "remove-listener-btn";
removeButton.textContent = "Click Me (Listener will be removed after 3 clicks)";
removeButton.style.padding = "10px";
removeButton.style.margin = "10px 0";
removeButton.style.cursor = "pointer";
removeListenerSection.appendChild(removeButton);

let clickCount = 0;

// Named function (can be removed)
const handleClick = () => {
    clickCount++;
    console.log(`Button clicked ${clickCount} times`);
    
    const logDiv = document.createElement("div");
    logDiv.style.marginTop = "5px";
    logDiv.style.padding = "5px";
    logDiv.style.backgroundColor = "#fff";
    logDiv.style.fontSize = "12px";
    logDiv.textContent = `Clicked ${clickCount} times`;
    logDiv.className = "remove-log";
    removeListenerSection.appendChild(logDiv);
    
    if (clickCount >= 3) {
        removeButton.removeEventListener("click", handleClick);
        removeButton.textContent = "Listener removed! (No more clicks will work)";
        removeButton.style.backgroundColor = "#ffcccc";
        console.log("Event listener removed!");
        
        const removedDiv = document.createElement("div");
        removedDiv.style.marginTop = "10px";
        removedDiv.style.padding = "10px";
        removedDiv.style.backgroundColor = "#ffcccc";
        removedDiv.style.fontWeight = "bold";
        removedDiv.textContent = "✅ Event listener removed after 3 clicks!";
        removeListenerSection.appendChild(removedDiv);
    }
};

removeButton.addEventListener("click", handleClick);

console.log("=== Event Delegation & Propagation Demo Loaded ===");
console.log("Concepts covered:");
console.log("1. Event Delegation - One listener on parent");
console.log("2. Event Bubbling - Events bubble up the DOM");
console.log("3. stopPropagation() - Stop event from bubbling");
console.log("4. Event Capturing - Events capture down the DOM");
console.log("5. removeEventListener() - Remove event listeners");
