// ============================================
// Working with Attributes
// ============================================

// Create a container for demonstration
const demoContainer = document.createElement("div");
demoContainer.id = "attributes-demo";
demoContainer.style.padding = "20px";
demoContainer.style.border = "2px solid #333";
demoContainer.style.margin = "20px 0";
document.body.appendChild(demoContainer);

const title = document.createElement("h2");
title.textContent = "Attributes Demo";
demoContainer.appendChild(title);

// ============================================
// 1. GETTING ATTRIBUTES
// ============================================

const getSection = document.createElement("div");
getSection.style.marginTop = "20px";
getSection.style.padding = "15px";
getSection.style.backgroundColor = "#f0f0f0";
demoContainer.appendChild(getSection);

const getTitle = document.createElement("h3");
getTitle.textContent = "Getting Attributes";
getSection.appendChild(getTitle);

// Create an element with various attributes
const sampleElement = document.createElement("img");
sampleElement.id = "sample-img";
sampleElement.src = "https://via.placeholder.com/150";
sampleElement.alt = "Sample Image";
sampleElement.title = "This is a sample image";
sampleElement.setAttribute("data-custom", "custom-value");
sampleElement.setAttribute("aria-label", "Sample image for demonstration");
sampleElement.style.width = "150px";
sampleElement.style.height = "150px";
sampleElement.style.border = "2px solid #333";
getSection.appendChild(sampleElement);

// Display attribute values
const attrDisplay = document.createElement("div");
attrDisplay.style.marginTop = "10px";
attrDisplay.style.padding = "10px";
attrDisplay.style.backgroundColor = "#fff";
attrDisplay.style.fontFamily = "monospace";
attrDisplay.style.fontSize = "12px";

// Method 1: getAttribute()
const srcAttr = sampleElement.getAttribute("src");
const altAttr = sampleElement.getAttribute("alt");
const customAttr = sampleElement.getAttribute("data-custom");

attrDisplay.innerHTML = `
    <strong>Using getAttribute():</strong><br>
    src: ${srcAttr}<br>
    alt: ${altAttr}<br>
    data-custom: ${customAttr}<br>
`;

// Method 2: Direct property access (for standard attributes)
attrDisplay.innerHTML += `
    <br><strong>Using direct property access:</strong><br>
    id: ${sampleElement.id}<br>
    src: ${sampleElement.src}<br>
    alt: ${sampleElement.alt}<br>
`;

getSection.appendChild(attrDisplay);

// ============================================
// 2. SETTING ATTRIBUTES
// ============================================

const setSection = document.createElement("div");
setSection.style.marginTop = "20px";
setSection.style.padding = "15px";
setSection.style.backgroundColor = "#e0e0e0";
demoContainer.appendChild(setSection);

const setTitle = document.createElement("h3");
setTitle.textContent = "Setting Attributes";
setSection.appendChild(setTitle);

// Create a button to demonstrate setting attributes
const demoButton = document.createElement("button");
demoButton.id = "demo-button";
demoButton.textContent = "Click to Change Attributes";
demoButton.style.padding = "10px";
demoButton.style.margin = "10px";
demoButton.style.cursor = "pointer";

let clickCount = 0;
demoButton.addEventListener("click", () => {
    clickCount++;
    
    // Method 1: Using setAttribute()
    demoButton.setAttribute("data-clicks", clickCount);
    demoButton.setAttribute("title", `Button clicked ${clickCount} times`);
    
    // Method 2: Using direct property (for standard attributes)
    demoButton.disabled = clickCount >= 5; // Disable after 5 clicks
    demoButton.textContent = `Clicked ${clickCount} times${clickCount >= 5 ? " (Disabled)" : ""}`;
    
    console.log("Button attributes updated:", {
        clicks: demoButton.getAttribute("data-clicks"),
        title: demoButton.getAttribute("title"),
        disabled: demoButton.disabled
    });
});

setSection.appendChild(demoButton);

// ============================================
// 3. REMOVING ATTRIBUTES
// ============================================

const removeSection = document.createElement("div");
removeSection.style.marginTop = "20px";
removeSection.style.padding = "15px";
removeSection.style.backgroundColor = "#f5f5f5";
demoContainer.appendChild(removeSection);

const removeTitle = document.createElement("h3");
removeTitle.textContent = "Removing Attributes";
removeSection.appendChild(removeTitle);

// Create an element with attributes to remove
const removableElement = document.createElement("div");
removableElement.id = "removable-element";
removableElement.setAttribute("data-temp", "temporary");
removableElement.setAttribute("data-important", "keep-this");
removableElement.setAttribute("class", "removable-class");
removableElement.textContent = "Element with removable attributes";
removableElement.style.padding = "10px";
removableElement.style.backgroundColor = "#ffcccc";
removableElement.style.margin = "10px 0";
removeSection.appendChild(removableElement);

// Buttons to remove specific attributes
const removeTempBtn = document.createElement("button");
removeTempBtn.textContent = "Remove data-temp";
removeTempBtn.style.padding = "8px";
removeTempBtn.style.margin = "5px";
removeTempBtn.style.cursor = "pointer";
removeTempBtn.addEventListener("click", () => {
    removableElement.removeAttribute("data-temp");
    console.log("data-temp attribute removed");
    console.log("Has data-temp?", removableElement.hasAttribute("data-temp"));
});
removeSection.appendChild(removeTempBtn);

const removeClassBtn = document.createElement("button");
removeClassBtn.textContent = "Remove class";
removeClassBtn.style.padding = "8px";
removeClassBtn.style.margin = "5px";
removeClassBtn.style.cursor = "pointer";
removeClassBtn.addEventListener("click", () => {
    removableElement.removeAttribute("class");
    console.log("class attribute removed");
});
removeSection.appendChild(removeClassBtn);

// ============================================
// 4. CHECKING ATTRIBUTES (hasAttribute)
// ============================================

const checkSection = document.createElement("div");
checkSection.style.marginTop = "20px";
checkSection.style.padding = "15px";
checkSection.style.backgroundColor = "#e8e8e8";
demoContainer.appendChild(checkSection);

const checkTitle = document.createElement("h3");
checkTitle.textContent = "Checking Attributes";
checkSection.appendChild(checkTitle);

const checkElement = document.createElement("input");
checkElement.type = "text";
checkElement.id = "check-input";
checkElement.placeholder = "Type something...";
checkElement.setAttribute("required", "");
checkElement.setAttribute("data-validated", "false");
checkElement.style.padding = "8px";
checkElement.style.margin = "10px 0";
checkElement.style.width = "200px";
checkSection.appendChild(checkElement);

const checkBtn = document.createElement("button");
checkBtn.textContent = "Check Attributes";
checkBtn.style.padding = "8px";
checkBtn.style.margin = "5px";
checkBtn.style.cursor = "pointer";
checkBtn.addEventListener("click", () => {
    const checks = {
        hasRequired: checkElement.hasAttribute("required"),
        hasValidated: checkElement.hasAttribute("data-validated"),
        hasPlaceholder: checkElement.hasAttribute("placeholder"),
        hasValue: checkElement.value.length > 0
    };
    
    console.log("Attribute checks:", checks);
    
    const resultDiv = document.createElement("div");
    resultDiv.style.marginTop = "10px";
    resultDiv.style.padding = "10px";
    resultDiv.style.backgroundColor = "#fff";
    resultDiv.style.fontFamily = "monospace";
    resultDiv.innerHTML = `
        <strong>Attribute Check Results:</strong><br>
        Has 'required': ${checks.hasRequired}<br>
        Has 'data-validated': ${checks.hasValidated}<br>
        Has 'placeholder': ${checks.hasPlaceholder}<br>
        Has value: ${checks.hasValue}
    `;
    
    // Remove previous result if exists
    const prevResult = checkSection.querySelector(".check-result");
    if (prevResult) prevResult.remove();
    
    resultDiv.className = "check-result";
    checkSection.appendChild(resultDiv);
});
checkSection.appendChild(checkBtn);

// ============================================
// 5. DATA ATTRIBUTES (dataset)
// ============================================

const datasetSection = document.createElement("div");
datasetSection.style.marginTop = "20px";
datasetSection.style.padding = "15px";
datasetSection.style.backgroundColor = "#f0f0f0";
demoContainer.appendChild(datasetSection);

const datasetTitle = document.createElement("h3");
datasetTitle.textContent = "Data Attributes (dataset)";
datasetTitle.style.marginBottom = "10px";
datasetSection.appendChild(datasetTitle);

const infoDiv = document.createElement("div");
infoDiv.style.padding = "10px";
infoDiv.style.backgroundColor = "#fff";
infoDiv.style.marginBottom = "10px";
infoDiv.style.fontSize = "14px";
infoDiv.innerHTML = `
    <strong>Note:</strong> Data attributes (data-*) can be accessed via the <code>dataset</code> property.<br>
    <code>data-user-id</code> becomes <code>element.dataset.userId</code> (camelCase)
`;
datasetSection.appendChild(infoDiv);

// Create element with data attributes
const dataElement = document.createElement("div");
dataElement.id = "data-element";
dataElement.setAttribute("data-user-id", "12345");
dataElement.setAttribute("data-user-name", "John Doe");
dataElement.setAttribute("data-user-role", "admin");
dataElement.setAttribute("data-is-active", "true");
dataElement.textContent = "User Data Element";
dataElement.style.padding = "10px";
dataElement.style.backgroundColor = "#ccffcc";
dataElement.style.margin = "10px 0";
datasetSection.appendChild(dataElement);

// Display dataset values
const datasetDisplay = document.createElement("div");
datasetDisplay.style.marginTop = "10px";
datasetDisplay.style.padding = "10px";
datasetDisplay.style.backgroundColor = "#fff";
datasetDisplay.style.fontFamily = "monospace";
datasetDisplay.style.fontSize = "12px";

// Accessing data attributes via dataset
datasetDisplay.innerHTML = `
    <strong>Accessing via dataset:</strong><br>
    data-user-id → dataset.userId: ${dataElement.dataset.userId}<br>
    data-user-name → dataset.userName: ${dataElement.dataset.userName}<br>
    data-user-role → dataset.userRole: ${dataElement.dataset.userRole}<br>
    data-is-active → dataset.isActive: ${dataElement.dataset.isActive}<br>
`;

datasetSection.appendChild(datasetDisplay);

// Button to modify data attributes
const updateDataBtn = document.createElement("button");
updateDataBtn.textContent = "Update Data Attributes";
updateDataBtn.style.padding = "8px";
updateDataBtn.style.margin = "10px 5px 5px 0";
updateDataBtn.style.cursor = "pointer";
updateDataBtn.addEventListener("click", () => {
    // Update using dataset
    dataElement.dataset.userId = "67890";
    dataElement.dataset.userName = "Jane Smith";
    dataElement.dataset.isActive = "false";
    
    // Update display
    datasetDisplay.innerHTML = `
        <strong>Updated via dataset:</strong><br>
        dataset.userId: ${dataElement.dataset.userId}<br>
        dataset.userName: ${dataElement.dataset.userName}<br>
        dataset.userRole: ${dataElement.dataset.userRole}<br>
        dataset.isActive: ${dataElement.dataset.isActive}<br>
    `;
    
    console.log("Dataset updated:", dataElement.dataset);
});
datasetSection.appendChild(updateDataBtn);

// ============================================
// 6. ALL ATTRIBUTES (attributes property)
// ============================================

const allAttrsSection = document.createElement("div");
allAttrsSection.style.marginTop = "20px";
allAttrsSection.style.padding = "15px";
allAttrsSection.style.backgroundColor = "#e0e0e0";
demoContainer.appendChild(allAttrsSection);

const allAttrsTitle = document.createElement("h3");
allAttrsTitle.textContent = "Getting All Attributes";
allAttrsTitle.style.marginBottom = "10px";
allAttrsSection.appendChild(allAttrsTitle);

const allAttrsElement = document.createElement("div");
allAttrsElement.id = "all-attrs-element";
allAttrsElement.className = "demo-class";
allAttrsElement.setAttribute("data-info", "sample");
allAttrsElement.setAttribute("title", "Sample Title");
allAttrsElement.textContent = "Element with multiple attributes";
allAttrsElement.style.padding = "10px";
allAttrsElement.style.backgroundColor = "#ccccff";
allAttrsElement.style.margin = "10px 0";
allAttrsSection.appendChild(allAttrsElement);

const showAllBtn = document.createElement("button");
showAllBtn.textContent = "Show All Attributes";
showAllBtn.style.padding = "8px";
showAllBtn.style.margin = "5px";
showAllBtn.style.cursor = "pointer";
showAllBtn.addEventListener("click", () => {
    const attrs = Array.from(allAttrsElement.attributes);
    const attrsList = attrs.map(attr => `${attr.name} = "${attr.value}"`).join("<br>");
    
    const attrsDisplay = document.createElement("div");
    attrsDisplay.style.marginTop = "10px";
    attrsDisplay.style.padding = "10px";
    attrsDisplay.style.backgroundColor = "#fff";
    attrsDisplay.style.fontFamily = "monospace";
    attrsDisplay.style.fontSize = "12px";
    attrsDisplay.innerHTML = `<strong>All Attributes:</strong><br>${attrsList}`;
    
    // Remove previous display if exists
    const prevDisplay = allAttrsSection.querySelector(".attrs-display");
    if (prevDisplay) prevDisplay.remove();
    
    attrsDisplay.className = "attrs-display";
    allAttrsSection.appendChild(attrsDisplay);
    
    console.log("All attributes:", attrs);
});
allAttrsSection.appendChild(showAllBtn);

console.log("=== Attributes Demo Loaded ===");
console.log("Methods covered:");
console.log("1. getAttribute(name) - Get attribute value");
console.log("2. setAttribute(name, value) - Set attribute value");
console.log("3. removeAttribute(name) - Remove attribute");
console.log("4. hasAttribute(name) - Check if attribute exists");
console.log("5. dataset - Access data-* attributes");
console.log("6. attributes - Get all attributes");
