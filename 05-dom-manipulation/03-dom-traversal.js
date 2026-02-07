// ============================================
// DOM Traversal
// ============================================

// Create a container for demonstration
const demoContainer = document.createElement("div");
demoContainer.id = "traversal-demo";
demoContainer.style.padding = "20px";
demoContainer.style.border = "2px solid #333";
demoContainer.style.margin = "20px 0";
document.body.appendChild(demoContainer);

const title = document.createElement("h2");
title.textContent = "DOM Traversal Demo";
demoContainer.appendChild(title);

// ============================================
// Create a sample DOM structure
// ============================================

const familyTree = document.createElement("div");
familyTree.id = "family-tree";
familyTree.style.padding = "15px";
familyTree.style.backgroundColor = "#f0f0f0";
familyTree.style.border = "2px solid #666";
familyTree.style.margin = "20px 0";
demoContainer.appendChild(familyTree);

// Create structure: grandparent > parent > children
const grandparent = document.createElement("div");
grandparent.id = "grandparent";
grandparent.className = "grandparent";
grandparent.textContent = "Grandparent";
grandparent.style.padding = "15px";
grandparent.style.backgroundColor = "#ffcccc";
grandparent.style.margin = "10px";
grandparent.style.border = "2px solid #ff0000";
familyTree.appendChild(grandparent);

const parent = document.createElement("div");
parent.id = "parent";
parent.className = "parent";
parent.textContent = "Parent";
parent.style.padding = "15px";
parent.style.backgroundColor = "#ccffcc";
parent.style.margin = "10px";
parent.style.border = "2px solid #00ff00";
grandparent.appendChild(parent);

// Create multiple children
for (let i = 1; i <= 3; i++) {
    const child = document.createElement("div");
    child.id = `child-${i}`;
    child.className = "child";
    child.textContent = `Child ${i}`;
    child.style.padding = "10px";
    child.style.backgroundColor = "#ccccff";
    child.style.margin = "5px";
    child.style.border = "2px solid #0000ff";
    parent.appendChild(child);
}

// ============================================
// 1. PARENT TRAVERSAL
// ============================================

const parentSection = document.createElement("div");
parentSection.style.marginTop = "20px";
parentSection.style.padding = "15px";
parentSection.style.backgroundColor = "#e0e0e0";
demoContainer.appendChild(parentSection);

const parentTitle = document.createElement("h3");
parentTitle.textContent = "Parent Traversal";
parentSection.appendChild(parentTitle);

const infoDiv = document.createElement("div");
infoDiv.style.padding = "10px";
infoDiv.style.backgroundColor = "#fff";
infoDiv.style.marginBottom = "10px";
infoDiv.style.fontSize = "14px";
infoDiv.innerHTML = `
    <strong>Methods:</strong><br>
    • <code>parentElement</code> - Returns parent element (null if parent is not an element)<br>
    • <code>parentNode</code> - Returns parent node (can be any node type)
`;
parentSection.appendChild(infoDiv);

// Select a child element
const child1 = document.getElementById("child-1");

const parentDemo = document.createElement("div");
parentDemo.style.padding = "10px";
parentDemo.style.backgroundColor = "#fff";
parentDemo.style.fontFamily = "monospace";
parentDemo.style.fontSize = "12px";
parentDemo.innerHTML = `
    <strong>From child-1:</strong><br>
    parentElement.id: ${child1.parentElement.id}<br>
    parentElement.className: ${child1.parentElement.className}<br>
    parentNode.nodeName: ${child1.parentNode.nodeName}<br>
    parentElement.parentElement.id: ${child1.parentElement.parentElement.id}
`;
parentSection.appendChild(parentDemo);

// Button to highlight parent
const highlightParentBtn = document.createElement("button");
highlightParentBtn.textContent = "Highlight Parent of Child 1";
highlightParentBtn.style.padding = "8px";
highlightParentBtn.style.margin = "10px 5px 5px 0";
highlightParentBtn.style.cursor = "pointer";
highlightParentBtn.addEventListener("click", () => {
    const parent = child1.parentElement;
    const originalBg = parent.style.backgroundColor;
    parent.style.backgroundColor = "#ffff00";
    parent.style.transition = "background-color 0.3s";
    
    setTimeout(() => {
        parent.style.backgroundColor = originalBg;
    }, 2000);
    
    console.log("Parent highlighted:", parent);
});
parentSection.appendChild(highlightParentBtn);

// ============================================
// 2. CHILDREN TRAVERSAL
// ============================================

const childrenSection = document.createElement("div");
childrenSection.style.marginTop = "20px";
childrenSection.style.padding = "15px";
childrenSection.style.backgroundColor = "#f5f5f5";
demoContainer.appendChild(childrenSection);

const childrenTitle = document.createElement("h3");
childrenTitle.textContent = "Children Traversal";
childrenSection.appendChild(childrenTitle);

const childrenInfo = document.createElement("div");
childrenInfo.style.padding = "10px";
childrenInfo.style.backgroundColor = "#fff";
childrenInfo.style.marginBottom = "10px";
childrenInfo.style.fontSize = "14px";
childrenInfo.innerHTML = `
    <strong>Methods:</strong><br>
    • <code>children</code> - Returns HTMLCollection of element children only<br>
    • <code>childNodes</code> - Returns NodeList of all child nodes (including text nodes)<br>
    • <code>firstElementChild</code> - First element child<br>
    • <code>lastElementChild</code> - Last element child<br>
    • <code>firstChild</code> - First child node<br>
    • <code>lastChild</code> - Last child node
`;
childrenSection.appendChild(childrenInfo);

const parentEl = document.getElementById("parent");

const childrenDemo = document.createElement("div");
childrenDemo.style.padding = "10px";
childrenDemo.style.backgroundColor = "#fff";
childrenDemo.style.fontFamily = "monospace";
childrenDemo.style.fontSize = "12px";
childrenDemo.innerHTML = `
    <strong>From parent element:</strong><br>
    children.length: ${parentEl.children.length}<br>
    childNodes.length: ${parentEl.childNodes.length}<br>
    firstElementChild.id: ${parentEl.firstElementChild.id}<br>
    lastElementChild.id: ${parentEl.lastElementChild.id}<br>
    firstChild.nodeName: ${parentEl.firstChild.nodeName}<br>
    lastChild.nodeName: ${parentEl.lastChild.nodeName}
`;
childrenSection.appendChild(childrenDemo);

// Button to iterate through children
const iterateChildrenBtn = document.createElement("button");
iterateChildrenBtn.textContent = "Iterate Through Children";
iterateChildrenBtn.style.padding = "8px";
iterateChildrenBtn.style.margin = "10px 5px 5px 0";
iterateChildrenBtn.style.cursor = "pointer";
iterateChildrenBtn.addEventListener("click", () => {
    const children = Array.from(parentEl.children);
    children.forEach((child, index) => {
        console.log(`Child ${index + 1}:`, child.id);
        const originalBg = child.style.backgroundColor;
        child.style.backgroundColor = "#ffff00";
        child.style.transition = "background-color 0.3s";
        
        setTimeout(() => {
            child.style.backgroundColor = originalBg;
        }, (index + 1) * 500);
    });
});
childrenSection.appendChild(iterateChildrenBtn);

// ============================================
// 3. SIBLING TRAVERSAL
// ============================================

const siblingSection = document.createElement("div");
siblingSection.style.marginTop = "20px";
siblingSection.style.padding = "15px";
siblingSection.style.backgroundColor = "#e8e8e8";
demoContainer.appendChild(siblingSection);

const siblingTitle = document.createElement("h3");
siblingTitle.textContent = "Sibling Traversal";
siblingSection.appendChild(siblingTitle);

const siblingInfo = document.createElement("div");
siblingInfo.style.padding = "10px";
siblingInfo.style.backgroundColor = "#fff";
siblingInfo.style.marginBottom = "10px";
siblingInfo.style.fontSize = "14px";
siblingInfo.innerHTML = `
    <strong>Methods:</strong><br>
    • <code>nextElementSibling</code> - Next sibling element<br>
    • <code>previousElementSibling</code> - Previous sibling element<br>
    • <code>nextSibling</code> - Next sibling node<br>
    • <code>previousSibling</code> - Previous sibling node
`;
siblingSection.appendChild(siblingInfo);

const siblingDemo = document.createElement("div");
siblingDemo.style.padding = "10px";
siblingDemo.style.backgroundColor = "#fff";
siblingDemo.style.fontFamily = "monospace";
siblingDemo.style.fontSize = "12px";

const child2 = document.getElementById("child-2");
siblingDemo.innerHTML = `
    <strong>From child-2:</strong><br>
    previousElementSibling.id: ${child2.previousElementSibling ? child2.previousElementSibling.id : "null"}<br>
    nextElementSibling.id: ${child2.nextElementSibling ? child2.nextElementSibling.id : "null"}<br>
    previousSibling.nodeName: ${child2.previousSibling ? child2.previousSibling.nodeName : "null"}<br>
    nextSibling.nodeName: ${child2.nextSibling ? child2.nextSibling.nodeName : "null"}
`;
siblingSection.appendChild(siblingDemo);

// Buttons to navigate siblings
const prevSiblingBtn = document.createElement("button");
prevSiblingBtn.textContent = "Highlight Previous Sibling";
prevSiblingBtn.style.padding = "8px";
prevSiblingBtn.style.margin = "10px 5px 5px 0";
prevSiblingBtn.style.cursor = "pointer";
prevSiblingBtn.addEventListener("click", () => {
    const prev = child2.previousElementSibling;
    if (prev) {
        const originalBg = prev.style.backgroundColor;
        prev.style.backgroundColor = "#ffff00";
        setTimeout(() => {
            prev.style.backgroundColor = originalBg;
        }, 2000);
        console.log("Previous sibling:", prev.id);
    } else {
        alert("No previous sibling!");
    }
});
siblingSection.appendChild(prevSiblingBtn);

const nextSiblingBtn = document.createElement("button");
nextSiblingBtn.textContent = "Highlight Next Sibling";
nextSiblingBtn.style.padding = "8px";
nextSiblingBtn.style.margin = "10px 5px 5px 0";
nextSiblingBtn.style.cursor = "pointer";
nextSiblingBtn.addEventListener("click", () => {
    const next = child2.nextElementSibling;
    if (next) {
        const originalBg = next.style.backgroundColor;
        next.style.backgroundColor = "#ffff00";
        setTimeout(() => {
            next.style.backgroundColor = originalBg;
        }, 2000);
        console.log("Next sibling:", next.id);
    } else {
        alert("No next sibling!");
    }
});
siblingSection.appendChild(nextSiblingBtn);

// ============================================
// 4. CLOSEST (Finding ancestor)
// ============================================

const closestSection = document.createElement("div");
closestSection.style.marginTop = "20px";
closestSection.style.padding = "15px";
closestSection.style.backgroundColor = "#f0f0f0";
demoContainer.appendChild(closestSection);

const closestTitle = document.createElement("h3");
closestTitle.textContent = "Finding Ancestors (closest)";
closestSection.appendChild(closestTitle);

const closestInfo = document.createElement("div");
closestInfo.style.padding = "10px";
closestInfo.style.backgroundColor = "#fff";
closestInfo.style.marginBottom = "10px";
closestInfo.style.fontSize = "14px";
closestInfo.innerHTML = `
    <strong>Method:</strong><br>
    • <code>closest(selector)</code> - Finds the nearest ancestor that matches the selector
`;
closestSection.appendChild(closestInfo);

const closestBtn = document.createElement("button");
closestBtn.textContent = "Find Closest .parent from Child 1";
closestBtn.style.padding = "8px";
closestBtn.style.margin = "10px 5px 5px 0";
closestBtn.style.cursor = "pointer";
closestBtn.addEventListener("click", () => {
    const closest = child1.closest(".parent");
    if (closest) {
        const originalBg = closest.style.backgroundColor;
        closest.style.backgroundColor = "#ffff00";
        setTimeout(() => {
            closest.style.backgroundColor = originalBg;
        }, 2000);
        console.log("Closest .parent:", closest.id);
        
        const result = document.createElement("div");
        result.style.marginTop = "10px";
        result.style.padding = "10px";
        result.style.backgroundColor = "#fff";
        result.textContent = `Found: ${closest.id}`;
        closestSection.appendChild(result);
    }
});
closestSection.appendChild(closestBtn);

// ============================================
// 5. MATCHES (Check if element matches selector)
// ============================================

const matchesSection = document.createElement("div");
matchesSection.style.marginTop = "20px";
matchesSection.style.padding = "15px";
matchesSection.style.backgroundColor = "#e0e0e0";
demoContainer.appendChild(matchesSection);

const matchesTitle = document.createElement("h3");
matchesTitle.textContent = "Checking Element (matches)";
matchesSection.appendChild(matchesTitle);

const matchesInfo = document.createElement("div");
matchesInfo.style.padding = "10px";
matchesInfo.style.backgroundColor = "#fff";
matchesInfo.style.marginBottom = "10px";
matchesInfo.style.fontSize = "14px";
matchesInfo.innerHTML = `
    <strong>Method:</strong><br>
    • <code>matches(selector)</code> - Returns true if element matches the selector
`;
matchesSection.appendChild(matchesInfo);

const matchesDemo = document.createElement("div");
matchesDemo.style.padding = "10px";
matchesDemo.style.backgroundColor = "#fff";
matchesDemo.style.fontFamily = "monospace";
matchesDemo.style.fontSize = "12px";
matchesDemo.innerHTML = `
    <strong>Checking child-1:</strong><br>
    matches('.child'): ${child1.matches(".child")}<br>
    matches('#child-1'): ${child1.matches("#child-1")}<br>
    matches('div'): ${child1.matches("div")}<br>
    matches('.parent'): ${child1.matches(".parent")}
`;
matchesSection.appendChild(matchesDemo);

// ============================================
// 6. PRACTICAL EXAMPLE: Tree Navigation
// ============================================

const practicalSection = document.createElement("div");
practicalSection.style.marginTop = "20px";
practicalSection.style.padding = "15px";
practicalSection.style.backgroundColor = "#f5f5f5";
demoContainer.appendChild(practicalSection);

const practicalTitle = document.createElement("h3");
practicalTitle.textContent = "Practical Example: Navigate Tree";
practicalSection.appendChild(practicalTitle);

const navInfo = document.createElement("div");
navInfo.style.padding = "10px";
navInfo.style.backgroundColor = "#fff";
navInfo.style.marginBottom = "10px";
navInfo.style.fontSize = "14px";
navInfo.textContent = "Click on any element in the family tree to see its relationships:";
practicalSection.appendChild(navInfo);

// Add click listeners to all elements in the tree
const allElements = familyTree.querySelectorAll("div");
allElements.forEach(element => {
    element.style.cursor = "pointer";
    element.addEventListener("click", function(e) {
        e.stopPropagation(); // Prevent event bubbling
        
        const info = {
            self: this.id || this.className,
            parent: this.parentElement ? (this.parentElement.id || this.parentElement.className) : "none",
            children: Array.from(this.children).map(c => c.id || c.className).join(", ") || "none",
            prevSibling: this.previousElementSibling ? (this.previousElementSibling.id || this.previousElementSibling.className) : "none",
            nextSibling: this.nextElementSibling ? (this.nextElementSibling.id || this.nextElementSibling.className) : "none"
        };
        
        console.log("Element relationships:", info);
        
        // Highlight clicked element
        const originalBg = this.style.backgroundColor;
        this.style.backgroundColor = "#ffff00";
        setTimeout(() => {
            this.style.backgroundColor = originalBg;
        }, 1000);
        
        // Display info
        const infoDisplay = document.createElement("div");
        infoDisplay.style.marginTop = "10px";
        infoDisplay.style.padding = "10px";
        infoDisplay.style.backgroundColor = "#fff";
        infoDisplay.style.fontFamily = "monospace";
        infoDisplay.style.fontSize = "12px";
        infoDisplay.innerHTML = `
            <strong>Clicked: ${info.self}</strong><br>
            Parent: ${info.parent}<br>
            Children: ${info.children}<br>
            Previous Sibling: ${info.prevSibling}<br>
            Next Sibling: ${info.nextSibling}
        `;
        
        // Remove previous display
        const prevDisplay = practicalSection.querySelector(".nav-display");
        if (prevDisplay) prevDisplay.remove();
        
        infoDisplay.className = "nav-display";
        practicalSection.appendChild(infoDisplay);
    });
});

console.log("=== DOM Traversal Demo Loaded ===");
console.log("Methods covered:");
console.log("1. parentElement / parentNode - Get parent");
console.log("2. children / childNodes - Get children");
console.log("3. firstElementChild / lastElementChild - Get first/last child");
console.log("4. nextElementSibling / previousElementSibling - Get siblings");
console.log("5. closest(selector) - Find ancestor");
console.log("6. matches(selector) - Check if element matches selector");
