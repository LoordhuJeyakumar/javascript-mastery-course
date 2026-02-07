// ============================================
// Content Security: innerHTML vs textContent vs innerText
// ============================================

// Create a container for demonstration
const demoContainer = document.createElement("div");
demoContainer.id = "content-security-demo";
demoContainer.style.padding = "20px";
demoContainer.style.border = "2px solid #333";
demoContainer.style.margin = "20px 0";
document.body.appendChild(demoContainer);

const title = document.createElement("h2");
title.textContent = "Content Security: innerHTML vs textContent vs innerText";
demoContainer.appendChild(title);

// ============================================
// 1. UNDERSTANDING THE DIFFERENCES
// ============================================

const differencesSection = document.createElement("div");
differencesSection.style.marginTop = "20px";
differencesSection.style.padding = "15px";
differencesSection.style.backgroundColor = "#e8f5e9";
demoContainer.appendChild(differencesSection);

const differencesTitle = document.createElement("h3");
differencesTitle.textContent = "Understanding the Differences";
differencesTitle.style.marginBottom = "10px";
differencesSection.appendChild(differencesTitle);

const differencesInfo = document.createElement("div");
differencesInfo.style.padding = "15px";
differencesInfo.style.backgroundColor = "#fff";
differencesInfo.style.marginBottom = "15px";
differencesInfo.style.fontSize = "14px";
differencesInfo.style.lineHeight = "1.6";
differencesInfo.innerHTML = `
    <strong>innerHTML:</strong><br>
    • Sets/gets HTML content (parses HTML tags)<br>
    • ⚠️ <strong>SECURITY RISK:</strong> Can execute malicious scripts (XSS attacks)<br>
    • Use only with trusted content<br><br>
    
    <strong>textContent:</strong><br>
    • Sets/gets plain text (escapes HTML tags)<br>
    • ✅ <strong>SAFE:</strong> Cannot execute scripts<br>
    • Recommended for user input<br>
    • Includes hidden elements (display: none)<br><br>
    
    <strong>innerText:</strong><br>
    • Sets/gets visible text only<br>
    • ✅ <strong>SAFE:</strong> Cannot execute scripts<br>
    • Excludes hidden elements<br>
    • More expensive (requires layout calculation)
`;
differencesSection.appendChild(differencesInfo);

// ============================================
// 2. VISUAL COMPARISON
// ============================================

const comparisonSection = document.createElement("div");
comparisonSection.style.marginTop = "20px";
comparisonSection.style.padding = "15px";
comparisonSection.style.backgroundColor = "#fff3e0";
demoContainer.appendChild(comparisonSection);

const comparisonTitle = document.createElement("h3");
comparisonTitle.textContent = "Visual Comparison";
comparisonTitle.style.marginBottom = "10px";
comparisonSection.appendChild(comparisonTitle);

// Create test element with hidden content
const testElement = document.createElement("div");
testElement.id = "test-element";
testElement.innerHTML = `
    <p>Visible paragraph</p>
    <p style="display: none;">Hidden paragraph</p>
    <strong>Bold text</strong>
    <script>alert('This should not execute!');</script>
`;
testElement.style.padding = "10px";
testElement.style.backgroundColor = "#fff";
testElement.style.border = "1px solid #ccc";
testElement.style.marginBottom = "15px";
comparisonSection.appendChild(testElement);

const comparisonDemo = document.createElement("div");
comparisonDemo.style.padding = "15px";
comparisonDemo.style.backgroundColor = "#fff";
comparisonDemo.style.fontFamily = "monospace";
comparisonDemo.style.fontSize = "12px";
comparisonDemo.style.border = "1px solid #ddd";

// Get values from test element
const innerHTMLValue = testElement.innerHTML;
const textContentValue = testElement.textContent;
const innerTextValue = testElement.innerText;

comparisonDemo.innerHTML = `
    <strong>Test Element Content:</strong><br>
    <div style="background: #f0f0f0; padding: 5px; margin: 5px 0;">
        ${testElement.outerHTML}
    </div><br>
    
    <strong>innerHTML:</strong><br>
    <div style="background: #ffcccc; padding: 5px; margin: 5px 0; word-break: break-all;">
        ${innerHTMLValue.substring(0, 200)}...
    </div>
    <small>⚠️ Includes HTML tags, can execute scripts!</small><br><br>
    
    <strong>textContent:</strong><br>
    <div style="background: #ccffcc; padding: 5px; margin: 5px 0;">
        ${textContentValue}
    </div>
    <small>✅ Plain text, includes hidden content, safe!</small><br><br>
    
    <strong>innerText:</strong><br>
    <div style="background: #ccccff; padding: 5px; margin: 5px 0;">
        ${innerTextValue}
    </div>
    <small>✅ Visible text only, safe!</small>
`;

comparisonSection.appendChild(comparisonDemo);

// ============================================
// 3. XSS ATTACK DEMONSTRATION (Educational)
// ============================================

const xssSection = document.createElement("div");
xssSection.style.marginTop = "20px";
xssSection.style.padding = "15px";
xssSection.style.backgroundColor = "#ffebee";
demoContainer.appendChild(xssSection);

const xssTitle = document.createElement("h3");
xssTitle.textContent = "⚠️ XSS Attack Demonstration (Why innerHTML is Dangerous)";
xssTitle.style.marginBottom = "10px";
xssTitle.style.color = "#c62828";
xssSection.appendChild(xssTitle);

const xssWarning = document.createElement("div");
xssWarning.style.padding = "15px";
xssWarning.style.backgroundColor = "#ffcdd2";
xssWarning.style.border = "2px solid #c62828";
xssWarning.style.marginBottom = "15px";
xssWarning.style.borderRadius = "5px";
xssWarning.innerHTML = `
    <strong>⚠️ WARNING:</strong> This demonstrates why innerHTML is dangerous!<br>
    Never use innerHTML with user input without sanitization!
`;
xssSection.appendChild(xssWarning);

// Dangerous: Using innerHTML with user input
const xssInput = document.createElement("input");
xssInput.type = "text";
xssInput.id = "xss-input";
xssInput.placeholder = "Try: <img src=x onerror='alert(\"XSS!\")'>";
xssInput.style.padding = "8px";
xssInput.style.width = "400px";
xssInput.style.marginBottom = "10px";
xssInput.style.border = "2px solid #c62828";
xssSection.appendChild(xssInput);

const xssDisplay = document.createElement("div");
xssDisplay.id = "xss-display";
xssDisplay.style.padding = "10px";
xssDisplay.style.minHeight = "50px";
xssDisplay.style.backgroundColor = "#fff";
xssDisplay.style.border = "1px solid #ccc";
xssDisplay.style.marginBottom = "10px";
xssDisplay.textContent = "Dangerous content will appear here (using innerHTML)...";
xssSection.appendChild(xssDisplay);

const xssBtn = document.createElement("button");
xssBtn.textContent = "⚠️ Set Content (DANGEROUS - innerHTML)";
xssBtn.style.padding = "8px";
xssBtn.style.margin = "5px";
xssBtn.style.cursor = "pointer";
xssBtn.style.backgroundColor = "#c62828";
xssBtn.style.color = "#fff";
xssBtn.style.border = "none";
xssBtn.addEventListener("click", () => {
    const userInput = xssInput.value;
    // ⚠️ DANGEROUS: This can execute scripts!
    xssDisplay.innerHTML = userInput;
    console.warn("⚠️ Using innerHTML with user input is dangerous!");
});
xssSection.appendChild(xssBtn);

// Safe: Using textContent
const safeDisplay = document.createElement("div");
safeDisplay.id = "safe-display";
safeDisplay.style.padding = "10px";
safeDisplay.style.minHeight = "50px";
safeDisplay.style.backgroundColor = "#fff";
safeDisplay.style.border = "1px solid #4caf50";
safeDisplay.style.marginBottom = "10px";
safeDisplay.textContent = "Safe content will appear here (using textContent)...";
xssSection.appendChild(safeDisplay);

const safeBtn = document.createElement("button");
safeBtn.textContent = "✅ Set Content (SAFE - textContent)";
safeBtn.style.padding = "8px";
safeBtn.style.margin = "5px";
safeBtn.style.cursor = "pointer";
safeBtn.style.backgroundColor = "#4caf50";
safeBtn.style.color = "#fff";
safeBtn.style.border = "none";
safeBtn.addEventListener("click", () => {
    const userInput = xssInput.value;
    // ✅ SAFE: This escapes HTML and prevents script execution
    safeDisplay.textContent = userInput;
    console.log("✅ Using textContent is safe!");
});
xssSection.appendChild(safeBtn);

// ============================================
// 4. WHEN TO USE EACH
// ============================================

const usageSection = document.createElement("div");
usageSection.style.marginTop = "20px";
usageSection.style.padding = "15px";
usageSection.style.backgroundColor = "#e3f2fd";
demoContainer.appendChild(usageSection);

const usageTitle = document.createElement("h3");
usageTitle.textContent = "When to Use Each";
usageTitle.style.marginBottom = "10px";
usageSection.appendChild(usageTitle);

const usageGuide = document.createElement("div");
usageGuide.style.padding = "15px";
usageGuide.style.backgroundColor = "#fff";
usageGuide.style.fontSize = "14px";
usageGuide.style.lineHeight = "1.8";
usageGuide.innerHTML = `
    <strong>Use innerHTML when:</strong><br>
    ✅ You control the content (not from user input)<br>
    ✅ You need to insert HTML tags<br>
    ✅ Content is from trusted source<br>
    ✅ You've sanitized the content<br><br>
    
    <strong>Use textContent when:</strong><br>
    ✅ User input (always!)<br>
    ✅ Plain text content<br>
    ✅ You want all text (including hidden)<br>
    ✅ Performance matters (faster than innerText)<br><br>
    
    <strong>Use innerText when:</strong><br>
    ✅ You only want visible text<br>
    ✅ You want to preserve formatting<br>
    ✅ Performance is not critical<br><br>
    
    <strong>Best Practice:</strong><br>
    🎯 Default to <code>textContent</code> for user input<br>
    🎯 Use <code>innerHTML</code> only with trusted/sanitized content<br>
    🎯 Consider using DOMPurify library for sanitizing HTML
`;
usageSection.appendChild(usageGuide);

// ============================================
// 5. PRACTICAL EXAMPLES
// ============================================

const practicalSection = document.createElement("div");
practicalSection.style.marginTop = "20px";
practicalSection.style.padding = "15px";
practicalSection.style.backgroundColor = "#f5f5f5";
demoContainer.appendChild(practicalSection);

const practicalTitle = document.createElement("h3");
practicalTitle.textContent = "Practical Examples";
practicalTitle.style.marginBottom = "10px";
practicalSection.appendChild(practicalTitle);

// Example 1: User comment (SAFE)
const commentSection = document.createElement("div");
commentSection.style.padding = "15px";
commentSection.style.backgroundColor = "#fff";
commentSection.style.marginBottom = "15px";
commentSection.style.border = "1px solid #ddd";
practicalSection.appendChild(commentSection);

const commentTitle = document.createElement("h4");
commentTitle.textContent = "Example 1: User Comment (Use textContent)";
commentTitle.style.marginBottom = "10px";
commentSection.appendChild(commentTitle);

const commentInput = document.createElement("textarea");
commentInput.id = "comment-input";
commentInput.placeholder = "Enter your comment...";
commentInput.style.width = "100%";
commentInput.style.padding = "8px";
commentInput.style.marginBottom = "10px";
commentInput.style.minHeight = "60px";
commentSection.appendChild(commentInput);

const commentDisplay = document.createElement("div");
commentDisplay.id = "comment-display";
commentDisplay.style.padding = "10px";
commentDisplay.style.backgroundColor = "#f0f0f0";
commentDisplay.style.minHeight = "30px";
commentDisplay.textContent = "Comment will appear here...";
commentSection.appendChild(commentDisplay);

const commentBtn = document.createElement("button");
commentBtn.textContent = "Post Comment (Safe)";
commentBtn.style.padding = "8px";
commentBtn.style.cursor = "pointer";
commentBtn.addEventListener("click", () => {
    // ✅ SAFE: Using textContent
    commentDisplay.textContent = commentInput.value;
    console.log("Comment posted safely using textContent");
});
commentSection.appendChild(commentBtn);

// Example 2: Admin content (innerHTML OK if trusted)
const adminSection = document.createElement("div");
adminSection.style.padding = "15px";
adminSection.style.backgroundColor = "#fff";
adminSection.style.marginBottom = "15px";
adminSection.style.border = "1px solid #ddd";
practicalSection.appendChild(adminSection);

const adminTitle = document.createElement("h4");
adminTitle.textContent = "Example 2: Admin Content (innerHTML OK if trusted)";
adminTitle.style.marginBottom = "10px";
adminSection.appendChild(adminTitle);

const adminDisplay = document.createElement("div");
adminDisplay.id = "admin-display";
adminDisplay.style.padding = "10px";
adminDisplay.style.backgroundColor = "#f0f0f0";
adminDisplay.style.minHeight = "50px";
adminSection.appendChild(adminDisplay);

const adminBtn = document.createElement("button");
adminBtn.textContent = "Load Admin Content (innerHTML)";
adminBtn.style.padding = "8px";
adminBtn.style.cursor = "pointer";
adminBtn.addEventListener("click", () => {
    // ✅ OK: Using innerHTML with trusted content
    const trustedContent = "<h4>Admin Notice</h4><p>This is <strong>trusted</strong> content from admin.</p>";
    adminDisplay.innerHTML = trustedContent;
    console.log("Admin content loaded using innerHTML (trusted source)");
});
adminSection.appendChild(adminBtn);

// ============================================
// 6. SANITIZATION (Brief mention)
// ============================================

const sanitizationSection = document.createElement("div");
sanitizationSection.style.marginTop = "20px";
sanitizationSection.style.padding = "15px";
sanitizationSection.style.backgroundColor = "#fff9c4";
demoContainer.appendChild(sanitizationSection);

const sanitizationTitle = document.createElement("h3");
sanitizationTitle.textContent = "Sanitization (If You Must Use innerHTML)";
sanitizationTitle.style.marginBottom = "10px";
sanitizationSection.appendChild(sanitizationTitle);

const sanitizationInfo = document.createElement("div");
sanitizationInfo.style.padding = "15px";
sanitizationInfo.style.backgroundColor = "#fff";
sanitizationInfo.style.fontSize = "14px";
sanitizationInfo.innerHTML = `
    <strong>If you must use innerHTML with user input:</strong><br><br>
    
    1. <strong>Use a sanitization library</strong> (DOMPurify recommended)<br>
    <code>import DOMPurify from 'dompurify';</code><br>
    <code>element.innerHTML = DOMPurify.sanitize(userInput);</code><br><br>
    
    2. <strong>Whitelist allowed tags</strong><br>
    Only allow specific HTML tags (e.g., &lt;p&gt;, &lt;strong&gt;)<br><br>
    
    3. <strong>Remove script tags</strong><br>
    Strip all &lt;script&gt; tags and event handlers (onclick, onerror, etc.)<br><br>
    
    <strong>Remember:</strong> textContent is always safer and simpler!
`;
sanitizationSection.appendChild(sanitizationInfo);

console.log("=== Content Security Demo Loaded ===");
console.log("Concepts covered:");
console.log("1. innerHTML - Parses HTML (DANGEROUS with user input)");
console.log("2. textContent - Plain text (SAFE, recommended)");
console.log("3. innerText - Visible text only (SAFE)");
console.log("4. XSS attack prevention");
console.log("5. When to use each method");
console.log("6. Sanitization techniques");
