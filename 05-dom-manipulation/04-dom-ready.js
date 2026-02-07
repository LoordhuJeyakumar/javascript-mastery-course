// ============================================
// DOMContentLoaded and Document Ready
// ============================================

// ============================================
// IMPORTANT: Why we need DOMContentLoaded
// ============================================

/*
 * Problem: If JavaScript runs before HTML elements are loaded,
 * trying to select elements will return null/undefined.
 * 
 * Solution: Wait for the DOM to be fully loaded before running scripts.
 */

// ============================================
// Method 1: DOMContentLoaded Event (RECOMMENDED)
// ============================================

document.addEventListener("DOMContentLoaded", () => {
    console.log("✅ DOM is ready! (Using DOMContentLoaded)");
    
    // Now it's safe to select and manipulate elements
    const container = document.createElement("div");
    container.id = "dom-ready-demo";
    container.style.padding = "20px";
    container.style.border = "2px solid #333";
    container.style.margin = "20px 0";
    document.body.appendChild(container);
    
    const title = document.createElement("h2");
    title.textContent = "DOM Ready Demo";
    container.appendChild(title);
    
    const info = document.createElement("div");
    info.style.padding = "15px";
    info.style.backgroundColor = "#e8f5e9";
    info.style.margin = "10px 0";
    info.style.borderRadius = "5px";
    info.innerHTML = `
        <strong>✅ DOMContentLoaded fired!</strong><br>
        This means all HTML elements are loaded and ready to be manipulated.<br>
        <small>Note: Images and stylesheets may still be loading, but the DOM structure is ready.</small>
    `;
    container.appendChild(info);
    
    // ============================================
    // Demonstrate the difference
    // ============================================
    
    const comparisonSection = document.createElement("div");
    comparisonSection.style.marginTop = "20px";
    comparisonSection.style.padding = "15px";
    comparisonSection.style.backgroundColor = "#f0f0f0";
    container.appendChild(comparisonSection);
    
    const comparisonTitle = document.createElement("h3");
    comparisonTitle.textContent = "Before vs After DOMContentLoaded";
    comparisonSection.appendChild(comparisonTitle);
    
    const beforeAfter = document.createElement("div");
    beforeAfter.style.padding = "10px";
    beforeAfter.style.backgroundColor = "#fff";
    beforeAfter.style.fontFamily = "monospace";
    beforeAfter.style.fontSize = "12px";
    beforeAfter.innerHTML = `
        <strong>❌ Without DOMContentLoaded:</strong><br>
        <code>const element = document.getElementById('myId');</code><br>
        Result: <code>null</code> (element doesn't exist yet)<br><br>
        
        <strong>✅ With DOMContentLoaded:</strong><br>
        <code>document.addEventListener('DOMContentLoaded', () => {</code><br>
        <code>&nbsp;&nbsp;const element = document.getElementById('myId');</code><br>
        <code>});</code><br>
        Result: <code>HTMLElement</code> (element exists!)
    `;
    comparisonSection.appendChild(beforeAfter);
    
    // ============================================
    // Method 2: window.onload (Alternative)
    // ============================================
    
    const loadSection = document.createElement("div");
    loadSection.style.marginTop = "20px";
    loadSection.style.padding = "15px";
    loadSection.style.backgroundColor = "#fff3e0";
    container.appendChild(loadSection);
    
    const loadTitle = document.createElement("h3");
    loadTitle.textContent = "window.onload vs DOMContentLoaded";
    loadSection.appendChild(loadTitle);
    
    const loadInfo = document.createElement("div");
    loadInfo.style.padding = "10px";
    loadInfo.style.backgroundColor = "#fff";
    loadInfo.style.fontSize = "14px";
    loadInfo.innerHTML = `
        <strong>DOMContentLoaded:</strong><br>
        • Fires when HTML is fully parsed<br>
        • Does NOT wait for images, stylesheets, etc.<br>
        • Faster - use this for DOM manipulation<br><br>
        
        <strong>window.onload:</strong><br>
        • Fires when ALL resources are loaded (images, CSS, etc.)<br>
        • Slower - use only when you need everything loaded<br><br>
        
        <strong>When to use which:</strong><br>
        • Use <code>DOMContentLoaded</code> for most cases (faster)<br>
        • Use <code>window.onload</code> only if you need images/CSS dimensions
    `;
    loadSection.appendChild(loadInfo);
    
    // ============================================
    // Method 3: Script placement (Alternative)
    // ============================================
    
    const scriptPlacementSection = document.createElement("div");
    scriptPlacementSection.style.marginTop = "20px";
    scriptPlacementSection.style.padding = "15px";
    scriptPlacementSection.style.backgroundColor = "#e3f2fd";
    container.appendChild(scriptPlacementSection);
    
    const scriptTitle = document.createElement("h3");
    scriptTitle.textContent = "Script Placement Alternative";
    scriptPlacementSection.appendChild(scriptTitle);
    
    const scriptInfo = document.createElement("div");
    scriptInfo.style.padding = "10px";
    scriptInfo.style.backgroundColor = "#fff";
    scriptInfo.style.fontSize = "14px";
    scriptInfo.innerHTML = `
        <strong>Option 1: Script at end of body (No DOMContentLoaded needed)</strong><br>
        <code>&lt;body&gt;</code><br>
        <code>&nbsp;&nbsp;&lt;div id="myDiv"&gt;&lt;/div&gt;</code><br>
        <code>&nbsp;&nbsp;&lt;script src="script.js"&gt;&lt;/script&gt;</code><br>
        <code>&lt;/body&gt;</code><br><br>
        
        <strong>Option 2: Script in head (DOMContentLoaded required)</strong><br>
        <code>&lt;head&gt;</code><br>
        <code>&nbsp;&nbsp;&lt;script src="script.js"&gt;&lt;/script&gt;</code><br>
        <code>&lt;/head&gt;</code><br>
        <code>&lt;body&gt;</code><br>
        <code>&nbsp;&nbsp;&lt;div id="myDiv"&gt;&lt;/div&gt;</code><br>
        <code>&lt;/body&gt;</code><br><br>
        
        <strong>Best Practice:</strong> Use DOMContentLoaded even if script is at end of body<br>
        (More reliable and explicit)
    `;
    scriptPlacementSection.appendChild(scriptInfo);
    
    // ============================================
    // Practical Example
    // ============================================
    
    const practicalSection = document.createElement("div");
    practicalSection.style.marginTop = "20px";
    practicalSection.style.padding = "15px";
    practicalSection.style.backgroundColor = "#f5f5f5";
    container.appendChild(practicalSection);
    
    const practicalTitle = document.createElement("h3");
    practicalTitle.textContent = "Practical Example";
    practicalSection.appendChild(practicalTitle);
    
    // Create a button that only works because DOM is ready
    const demoButton = document.createElement("button");
    demoButton.textContent = "Click Me (Only works because DOM is ready)";
    demoButton.style.padding = "10px";
    demoButton.style.margin = "10px 0";
    demoButton.style.cursor = "pointer";
    demoButton.style.fontSize = "16px";
    
    let clickCount = 0;
    demoButton.addEventListener("click", () => {
        clickCount++;
        const result = document.createElement("div");
        result.style.marginTop = "10px";
        result.style.padding = "10px";
        result.style.backgroundColor = "#c8e6c9";
        result.style.borderRadius = "5px";
        result.textContent = `Button clicked ${clickCount} time(s)! This works because the DOM was ready when we added the event listener.`;
        
        // Remove previous result
        const prevResult = practicalSection.querySelector(".click-result");
        if (prevResult) prevResult.remove();
        
        result.className = "click-result";
        practicalSection.appendChild(result);
    });
    
    practicalSection.appendChild(demoButton);
    
    // ============================================
    // Check if DOM is already loaded
    // ============================================
    
    const checkSection = document.createElement("div");
    checkSection.style.marginTop = "20px";
    checkSection.style.padding = "15px";
    checkSection.style.backgroundColor = "#fff9c4";
    container.appendChild(checkSection);
    
    const checkTitle = document.createElement("h3");
    checkTitle.textContent = "Checking if DOM is Already Loaded";
    checkSection.appendChild(checkTitle);
    
    const checkInfo = document.createElement("div");
    checkInfo.style.padding = "10px";
    checkInfo.style.backgroundColor = "#fff";
    checkInfo.style.fontFamily = "monospace";
    checkInfo.style.fontSize = "12px";
    checkInfo.innerHTML = `
        <strong>Check document.readyState:</strong><br>
        Current state: <code>${document.readyState}</code><br><br>
        
        <strong>Possible values:</strong><br>
        • <code>"loading"</code> - Document is still loading<br>
        • <code>"interactive"</code> - Document has finished loading, DOM is ready<br>
        • <code>"complete"</code> - Document and all resources are loaded<br><br>
        
        <strong>Alternative pattern:</strong><br>
        <code>if (document.readyState === 'loading') {</code><br>
        <code>&nbsp;&nbsp;document.addEventListener('DOMContentLoaded', init);</code><br>
        <code>} else {</code><br>
        <code>&nbsp;&nbsp;init(); // DOM already loaded</code><br>
        <code>}</code>
    `;
    checkSection.appendChild(checkInfo);
});

// ============================================
// Method 2: window.onload (for comparison)
// ============================================

window.addEventListener("load", () => {
    console.log("✅ All resources loaded! (Using window.onload)");
    // This fires after images, stylesheets, etc. are loaded
});

// ============================================
// Method 3: Immediate execution (if script is at end of body)
// ============================================

// If this script is placed at the end of <body>, 
// you can write code directly without DOMContentLoaded
// But it's still better practice to use DOMContentLoaded

console.log("=== DOM Ready Demo Script Loaded ===");
console.log("Document readyState:", document.readyState);
console.log("Methods covered:");
console.log("1. DOMContentLoaded - Wait for DOM (RECOMMENDED)");
console.log("2. window.onload - Wait for all resources");
console.log("3. document.readyState - Check loading state");
console.log("4. Script placement strategies");
