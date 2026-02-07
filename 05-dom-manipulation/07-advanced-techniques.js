// ============================================
// Advanced DOM Techniques
// ============================================

// Create a container for demonstration
const demoContainer = document.createElement("div");
demoContainer.id = "advanced-techniques-demo";
demoContainer.style.padding = "20px";
demoContainer.style.border = "2px solid #333";
demoContainer.style.margin = "20px 0";
document.body.appendChild(demoContainer);

const title = document.createElement("h2");
title.textContent = "Advanced DOM Techniques Demo";
demoContainer.appendChild(title);

// ============================================
// 1. CLONING ELEMENTS (cloneNode)
// ============================================

const cloneSection = document.createElement("div");
cloneSection.style.marginTop = "20px";
cloneSection.style.padding = "15px";
cloneSection.style.backgroundColor = "#e8f5e9";
demoContainer.appendChild(cloneSection);

const cloneTitle = document.createElement("h3");
cloneTitle.textContent = "Cloning Elements (cloneNode)";
cloneTitle.style.marginBottom = "10px";
cloneSection.appendChild(cloneTitle);

const cloneInfo = document.createElement("div");
cloneInfo.style.padding = "10px";
cloneInfo.style.backgroundColor = "#fff";
cloneInfo.style.marginBottom = "15px";
cloneInfo.style.fontSize = "14px";
cloneInfo.innerHTML = `
    <strong>cloneNode(deep):</strong> Creates a copy of an element<br>
    • <code>cloneNode(false)</code> - Shallow copy (element only, no children)<br>
    • <code>cloneNode(true)</code> - Deep copy (element + all children)
`;
cloneSection.appendChild(cloneInfo);

// Create original element
const originalCard = document.createElement("div");
originalCard.id = "original-card";
originalCard.style.padding = "15px";
originalCard.style.margin = "10px 0";
originalCard.style.backgroundColor = "#ffcccc";
originalCard.style.border = "2px solid #f44336";
originalCard.style.borderRadius = "5px";

const cardTitle = document.createElement("h4");
cardTitle.textContent = "Original Card";
originalCard.appendChild(cardTitle);

const cardContent = document.createElement("p");
cardContent.textContent = "This is the original card with some content.";
originalCard.appendChild(cardContent);

const cardButton = document.createElement("button");
cardButton.textContent = "Click Me";
cardButton.style.padding = "5px 10px";
cardButton.style.marginTop = "10px";
cardButton.addEventListener("click", () => {
    alert("Original button clicked!");
});
originalCard.appendChild(cardButton);

cloneSection.appendChild(originalCard);

// Clone buttons
const cloneShallowBtn = document.createElement("button");
cloneShallowBtn.textContent = "Clone Shallow (false)";
cloneShallowBtn.style.padding = "8px";
cloneShallowBtn.style.margin = "5px";
cloneShallowBtn.style.cursor = "pointer";
cloneShallowBtn.addEventListener("click", () => {
    const shallowClone = originalCard.cloneNode(false); // Shallow copy
    shallowClone.id = "shallow-clone";
    shallowClone.style.backgroundColor = "#ffffcc";
    shallowClone.style.borderColor = "#ff9800";
    shallowClone.textContent = "Shallow clone (no children)";
    cloneSection.appendChild(shallowClone);
    console.log("Shallow clone created:", shallowClone);
});
cloneSection.appendChild(cloneShallowBtn);

const cloneDeepBtn = document.createElement("button");
cloneDeepBtn.textContent = "Clone Deep (true)";
cloneDeepBtn.style.padding = "8px";
cloneDeepBtn.style.margin = "5px";
cloneDeepBtn.style.cursor = "pointer";
cloneDeepBtn.addEventListener("click", () => {
    const deepClone = originalCard.cloneNode(true); // Deep copy
    deepClone.id = `deep-clone-${Date.now()}`;
    deepClone.style.backgroundColor = "#ccffcc";
    deepClone.style.borderColor = "#4caf50";
    deepClone.querySelector("h4").textContent = "Deep Clone Card";
    cloneSection.appendChild(deepClone);
    console.log("Deep clone created:", deepClone);
});
cloneSection.appendChild(cloneDeepBtn);

// ============================================
// 2. DOCUMENT FRAGMENT (Performance)
// ============================================

const fragmentSection = document.createElement("div");
fragmentSection.style.marginTop = "20px";
fragmentSection.style.padding = "15px";
fragmentSection.style.backgroundColor = "#fff3e0";
demoContainer.appendChild(fragmentSection);

const fragmentTitle = document.createElement("h3");
fragmentTitle.textContent = "DocumentFragment (Performance Optimization)";
fragmentTitle.style.marginBottom = "10px";
fragmentSection.appendChild(fragmentTitle);

const fragmentInfo = document.createElement("div");
fragmentInfo.style.padding = "10px";
fragmentInfo.style.backgroundColor = "#fff";
fragmentInfo.style.marginBottom = "15px";
fragmentInfo.style.fontSize = "14px";
fragmentInfo.innerHTML = `
    <strong>DocumentFragment:</strong> Lightweight container for DOM nodes<br>
    <strong>Benefit:</strong> Batch DOM updates - only one reflow/repaint instead of many<br>
    <strong>Use case:</strong> Creating and appending many elements at once
`;
fragmentSection.appendChild(fragmentInfo);

// Container for fragment demo
const fragmentContainer = document.createElement("div");
fragmentContainer.id = "fragment-container";
fragmentContainer.style.padding = "10px";
fragmentContainer.style.backgroundColor = "#fff";
fragmentContainer.style.border = "1px solid #ccc";
fragmentContainer.style.minHeight = "100px";
fragmentSection.appendChild(fragmentContainer);

// Method 1: Without Fragment (Slow - multiple reflows)
const slowBtn = document.createElement("button");
slowBtn.textContent = "Add 100 Items (Slow - No Fragment)";
slowBtn.style.padding = "8px";
slowBtn.style.margin = "5px";
slowBtn.style.cursor = "pointer";
slowBtn.addEventListener("click", () => {
    const startTime = performance.now();
    fragmentContainer.innerHTML = ""; // Clear container
    
    // Adding items one by one (triggers reflow each time)
    for (let i = 1; i <= 100; i++) {
        const item = document.createElement("div");
        item.textContent = `Item ${i}`;
        item.style.padding = "5px";
        item.style.margin = "2px";
        item.style.backgroundColor = "#ffcccc";
        fragmentContainer.appendChild(item); // Reflow happens here
    }
    
    const endTime = performance.now();
    const time = (endTime - startTime).toFixed(2);
    console.log(`Without fragment: ${time}ms`);
    
    const result = document.createElement("div");
    result.style.marginTop = "10px";
    result.style.padding = "5px";
    result.style.backgroundColor = "#fff";
    result.textContent = `Time: ${time}ms (without fragment)`;
    fragmentSection.appendChild(result);
});
fragmentSection.appendChild(slowBtn);

// Method 2: With Fragment (Fast - single reflow)
const fastBtn = document.createElement("button");
fastBtn.textContent = "Add 100 Items (Fast - With Fragment)";
fastBtn.style.padding = "8px";
fastBtn.style.margin = "5px";
fastBtn.style.cursor = "pointer";
fastBtn.addEventListener("click", () => {
    const startTime = performance.now();
    fragmentContainer.innerHTML = ""; // Clear container
    
    // Create fragment
    const fragment = document.createDocumentFragment();
    
    // Add all items to fragment (no reflow yet)
    for (let i = 1; i <= 100; i++) {
        const item = document.createElement("div");
        item.textContent = `Item ${i}`;
        item.style.padding = "5px";
        item.style.margin = "2px";
        item.style.backgroundColor = "#ccffcc";
        fragment.appendChild(item); // No reflow - fragment is in memory
    }
    
    // Append fragment to container (single reflow)
    fragmentContainer.appendChild(fragment);
    
    const endTime = performance.now();
    const time = (endTime - startTime).toFixed(2);
    console.log(`With fragment: ${time}ms`);
    
    const result = document.createElement("div");
    result.style.marginTop = "10px";
    result.style.padding = "5px";
    result.style.backgroundColor = "#fff";
    result.textContent = `Time: ${time}ms (with fragment)`;
    fragmentSection.appendChild(result);
});
fragmentSection.appendChild(fastBtn);

// ============================================
// 3. BATCH DOM UPDATES
// ============================================

const batchSection = document.createElement("div");
batchSection.style.marginTop = "20px";
batchSection.style.padding = "15px";
batchSection.style.backgroundColor = "#e3f2fd";
demoContainer.appendChild(batchSection);

const batchTitle = document.createElement("h3");
batchTitle.textContent = "Batch DOM Updates";
batchTitle.style.marginBottom = "10px";
batchSection.appendChild(batchTitle);

const batchInfo = document.createElement("div");
batchInfo.style.padding = "10px";
batchInfo.style.backgroundColor = "#fff";
batchInfo.style.marginBottom = "15px";
batchInfo.style.fontSize = "14px";
batchInfo.innerHTML = `
    <strong>Best Practice:</strong> Batch multiple DOM changes together<br>
    <strong>Techniques:</strong> DocumentFragment, requestAnimationFrame, or group changes
`;
batchSection.appendChild(batchInfo);

const batchContainer = document.createElement("div");
batchContainer.id = "batch-container";
batchContainer.style.padding = "10px";
batchContainer.style.backgroundColor = "#fff";
batchContainer.style.border = "1px solid #ccc";
batchContainer.style.minHeight = "50px";
batchSection.appendChild(batchContainer);

const batchBtn = document.createElement("button");
batchBtn.textContent = "Batch Update (Multiple Changes)";
batchBtn.style.padding = "8px";
batchBtn.style.margin = "5px";
batchBtn.style.cursor = "pointer";
batchBtn.addEventListener("click", () => {
    // Instead of updating one by one, batch all changes
    const fragment = document.createDocumentFragment();
    
    // Create multiple elements
    for (let i = 1; i <= 10; i++) {
        const item = document.createElement("div");
        item.textContent = `Batch Item ${i}`;
        item.style.padding = "8px";
        item.style.margin = "5px";
        item.style.backgroundColor = i % 2 === 0 ? "#ccccff" : "#ffcccc";
        item.style.borderRadius = "4px";
        fragment.appendChild(item);
    }
    
    // Single append operation
    batchContainer.appendChild(fragment);
    console.log("Batch update completed");
});
batchSection.appendChild(batchBtn);

// ============================================
// 4. INSERTING ELEMENTS (insertBefore, insertAdjacentElement)
// ============================================

const insertSection = document.createElement("div");
insertSection.style.marginTop = "20px";
insertSection.style.padding = "15px";
insertSection.style.backgroundColor = "#f3e5f5";
demoContainer.appendChild(insertSection);

const insertTitle = document.createElement("h3");
insertTitle.textContent = "Inserting Elements";
insertTitle.style.marginBottom = "10px";
insertSection.appendChild(insertTitle);

const insertInfo = document.createElement("div");
insertInfo.style.padding = "10px";
insertInfo.style.backgroundColor = "#fff";
insertInfo.style.marginBottom = "15px";
insertInfo.style.fontSize = "14px";
insertInfo.innerHTML = `
    <strong>Methods:</strong><br>
    • <code>insertBefore(new, reference)</code> - Insert before reference element<br>
    • <code>insertAdjacentElement(position, element)</code> - Insert at specific position<br>
    • <code>insertAdjacentHTML(position, html)</code> - Insert HTML string
`;
insertSection.appendChild(insertInfo);

// Create list for insertion demo
const insertList = document.createElement("ul");
insertList.id = "insert-list";
insertList.style.padding = "10px";
insertList.style.backgroundColor = "#fff";
insertList.style.border = "1px solid #ccc";
insertSection.appendChild(insertList);

// Add initial items
for (let i = 1; i <= 3; i++) {
    const li = document.createElement("li");
    li.id = `item-${i}`;
    li.textContent = `Item ${i}`;
    li.style.padding = "5px";
    li.style.margin = "3px";
    li.style.backgroundColor = "#f0f0f0";
    insertList.appendChild(li);
}

// insertBefore example
const insertBeforeBtn = document.createElement("button");
insertBeforeBtn.textContent = "Insert Before Item 2";
insertBeforeBtn.style.padding = "8px";
insertBeforeBtn.style.margin = "5px";
insertBeforeBtn.style.cursor = "pointer";
insertBeforeBtn.addEventListener("click", () => {
    const newItem = document.createElement("li");
    newItem.textContent = "New Item (inserted before Item 2)";
    newItem.style.padding = "5px";
    newItem.style.margin = "3px";
    newItem.style.backgroundColor = "#ccffcc";
    
    const referenceItem = document.getElementById("item-2");
    insertList.insertBefore(newItem, referenceItem);
    console.log("Item inserted before Item 2");
});
insertSection.appendChild(insertBeforeBtn);

// insertAdjacentElement example
const insertAdjacentBtn = document.createElement("button");
insertAdjacentBtn.textContent = "Insert Adjacent to Item 2";
insertAdjacentBtn.style.padding = "8px";
insertAdjacentBtn.style.margin = "5px";
insertAdjacentBtn.style.cursor = "pointer";
insertAdjacentBtn.addEventListener("click", () => {
    const newItem = document.createElement("li");
    newItem.textContent = "New Item (insertAdjacent)";
    newItem.style.padding = "5px";
    newItem.style.margin = "3px";
    newItem.style.backgroundColor = "#ffffcc";
    
    const referenceItem = document.getElementById("item-2");
    // 'afterend' = after the element, 'beforebegin' = before the element
    // 'afterbegin' = first child, 'beforeend' = last child
    referenceItem.insertAdjacentElement("afterend", newItem);
    console.log("Item inserted adjacent to Item 2");
});
insertSection.appendChild(insertAdjacentBtn);

// insertAdjacentHTML example
const insertHTMLBtn = document.createElement("button");
insertHTMLBtn.textContent = "Insert HTML String";
insertHTMLBtn.style.padding = "8px";
insertHTMLBtn.style.margin = "5px";
insertHTMLBtn.style.cursor = "pointer";
insertHTMLBtn.addEventListener("click", () => {
    const referenceItem = document.getElementById("item-2");
    referenceItem.insertAdjacentHTML("beforebegin", '<li style="padding: 5px; margin: 3px; background-color: #ffcccc;">HTML String Item</li>');
    console.log("HTML string inserted");
});
insertSection.appendChild(insertHTMLBtn);

// ============================================
// 5. PERFORMANCE COMPARISON
// ============================================

const performanceSection = document.createElement("div");
performanceSection.style.marginTop = "20px";
performanceSection.style.padding = "15px";
performanceSection.style.backgroundColor = "#f5f5f5";
demoContainer.appendChild(performanceSection);

const performanceTitle = document.createElement("h3");
performanceTitle.textContent = "Performance Tips";
performanceTitle.style.marginBottom = "10px";
performanceSection.appendChild(performanceTitle);

const performanceTips = document.createElement("div");
performanceTips.style.padding = "15px";
performanceTips.style.backgroundColor = "#fff";
performanceTips.style.fontSize = "14px";
performanceTips.innerHTML = `
    <strong>Performance Best Practices:</strong><br><br>
    
    1. <strong>Use DocumentFragment</strong> for multiple appends<br>
    &nbsp;&nbsp;&nbsp;❌ Bad: Multiple appendChild calls<br>
    &nbsp;&nbsp;&nbsp;✅ Good: Append to fragment, then append fragment<br><br>
    
    2. <strong>Cache DOM queries</strong><br>
    &nbsp;&nbsp;&nbsp;❌ Bad: <code>document.getElementById('id')</code> in loop<br>
    &nbsp;&nbsp;&nbsp;✅ Good: Store in variable, reuse<br><br>
    
    3. <strong>Batch style changes</strong><br>
    &nbsp;&nbsp;&nbsp;❌ Bad: Multiple style.property changes<br>
    &nbsp;&nbsp;&nbsp;✅ Good: Use classes or set style.cssText<br><br>
    
    4. <strong>Use requestAnimationFrame</strong> for animations<br>
    &nbsp;&nbsp;&nbsp;Better than setTimeout for smooth animations<br><br>
    
    5. <strong>Avoid layout thrashing</strong><br>
    &nbsp;&nbsp;&nbsp;Read DOM properties, then write, then read again (not mixed)
`;
performanceSection.appendChild(performanceTips);

console.log("=== Advanced DOM Techniques Demo Loaded ===");
console.log("Techniques covered:");
console.log("1. cloneNode() - Clone elements (shallow/deep)");
console.log("2. DocumentFragment - Batch DOM updates");
console.log("3. insertBefore() - Insert elements at specific positions");
console.log("4. insertAdjacentElement/HTML - Insert adjacent to elements");
console.log("5. Performance optimization tips");
