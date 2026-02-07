// ============================================
// Additional Form Events
// ============================================

// Create a container for demonstration
const demoContainer = document.createElement("div");
demoContainer.id = "form-events-demo";
demoContainer.style.padding = "20px";
demoContainer.style.border = "2px solid #333";
demoContainer.style.margin = "20px 0";
document.body.appendChild(demoContainer);

const title = document.createElement("h2");
title.textContent = "Form Events Demo";
demoContainer.appendChild(title);

// ============================================
// 1. INPUT EVENT
// ============================================

const inputSection = document.createElement("div");
inputSection.style.marginTop = "20px";
inputSection.style.padding = "15px";
inputSection.style.backgroundColor = "#e8f5e9";
demoContainer.appendChild(inputSection);

const inputTitle = document.createElement("h3");
inputTitle.textContent = "input Event (Real-time Updates)";
inputTitle.style.marginBottom = "10px";
inputSection.appendChild(inputTitle);

const inputInfo = document.createElement("div");
inputInfo.style.padding = "10px";
inputInfo.style.backgroundColor = "#fff";
inputInfo.style.marginBottom = "15px";
inputInfo.style.fontSize = "14px";
inputInfo.innerHTML = `
    <strong>input event:</strong> Fires every time the value changes (real-time)<br>
    <strong>Use case:</strong> Live search, character counter, validation feedback
`;
inputSection.appendChild(inputInfo);

const inputField = document.createElement("input");
inputField.type = "text";
inputField.id = "input-demo";
inputField.placeholder = "Type something...";
inputField.style.padding = "8px";
inputField.style.width = "300px";
inputField.style.fontSize = "16px";
inputField.style.border = "2px solid #4caf50";
inputSection.appendChild(inputField);

const inputCounter = document.createElement("div");
inputCounter.id = "input-counter";
inputCounter.style.marginTop = "10px";
inputCounter.style.padding = "10px";
inputCounter.style.backgroundColor = "#fff";
inputCounter.style.fontFamily = "monospace";
inputCounter.textContent = "Character count: 0";
inputSection.appendChild(inputCounter);

const inputPreview = document.createElement("div");
inputPreview.id = "input-preview";
inputPreview.style.marginTop = "10px";
inputPreview.style.padding = "10px";
inputPreview.style.backgroundColor = "#c8e6c9";
inputPreview.style.borderRadius = "5px";
inputPreview.style.minHeight = "30px";
inputPreview.textContent = "Preview will appear here...";
inputSection.appendChild(inputPreview);

// input event - fires on every keystroke
inputField.addEventListener("input", (event) => {
    const value = event.target.value;
    const length = value.length;
    
    inputCounter.textContent = `Character count: ${length}`;
    inputCounter.style.color = length > 50 ? "#f44336" : "#4caf50";
    
    inputPreview.textContent = value || "Preview will appear here...";
    inputPreview.style.display = value ? "block" : "block";
    
    console.log("Input event fired:", value);
});

// ============================================
// 2. CHANGE EVENT
// ============================================

const changeSection = document.createElement("div");
changeSection.style.marginTop = "20px";
changeSection.style.padding = "15px";
changeSection.style.backgroundColor = "#fff3e0";
demoContainer.appendChild(changeSection);

const changeTitle = document.createElement("h3");
changeTitle.textContent = "change Event (After Value Commits)";
changeTitle.style.marginBottom = "10px";
changeSection.appendChild(changeTitle);

const changeInfo = document.createElement("div");
changeInfo.style.padding = "10px";
changeInfo.style.backgroundColor = "#fff";
changeInfo.style.marginBottom = "15px";
changeInfo.style.fontSize = "14px";
changeInfo.innerHTML = `
    <strong>change event:</strong> Fires when value changes AND element loses focus<br>
    <strong>Use case:</strong> Form validation, saving data, dropdown selections
`;
changeSection.appendChild(changeInfo);

const changeField = document.createElement("input");
changeField.type = "text";
changeField.id = "change-demo";
changeField.placeholder = "Type and click outside...";
changeField.style.padding = "8px";
changeField.style.width = "300px";
changeField.style.fontSize = "16px";
changeField.style.border = "2px solid #ff9800";
changeSection.appendChild(changeField);

const changeDisplay = document.createElement("div");
changeDisplay.id = "change-display";
changeDisplay.style.marginTop = "10px";
changeDisplay.style.padding = "10px";
changeDisplay.style.backgroundColor = "#fff";
changeDisplay.style.fontFamily = "monospace";
changeDisplay.textContent = "Value will be saved when you click outside...";
changeSection.appendChild(changeDisplay);

// change event - fires when value changes and element loses focus
changeField.addEventListener("change", (event) => {
    const value = event.target.value;
    changeDisplay.textContent = `✅ Value saved: "${value}"`;
    changeDisplay.style.color = "#4caf50";
    console.log("Change event fired:", value);
});

// ============================================
// 3. FOCUS EVENT
// ============================================

const focusSection = document.createElement("div");
focusSection.style.marginTop = "20px";
focusSection.style.padding = "15px";
focusSection.style.backgroundColor = "#e3f2fd";
demoContainer.appendChild(focusSection);

const focusTitle = document.createElement("h3");
focusTitle.textContent = "focus Event (Element Gets Focus)";
focusTitle.style.marginBottom = "10px";
focusSection.appendChild(focusTitle);

const focusInfo = document.createElement("div");
focusInfo.style.padding = "10px";
focusInfo.style.backgroundColor = "#fff";
focusInfo.style.marginBottom = "15px";
focusInfo.style.fontSize = "14px";
focusInfo.innerHTML = `
    <strong>focus event:</strong> Fires when element receives focus (clicked, tabbed to)<br>
    <strong>Use case:</strong> Highlighting, showing hints, clearing placeholders
`;
focusSection.appendChild(focusInfo);

const focusField = document.createElement("input");
focusField.type = "text";
focusField.id = "focus-demo";
focusField.placeholder = "Click here to focus...";
focusField.style.padding = "8px";
focusField.style.width = "300px";
focusField.style.fontSize = "16px";
focusField.style.border = "2px solid #2196f3";
focusSection.appendChild(focusField);

const focusDisplay = document.createElement("div");
focusDisplay.id = "focus-display";
focusDisplay.style.marginTop = "10px";
focusDisplay.style.padding = "10px";
focusDisplay.style.backgroundColor = "#fff";
focusDisplay.style.fontFamily = "monospace";
focusDisplay.textContent = "Focus status: Not focused";
focusSection.appendChild(focusDisplay);

// focus event
focusField.addEventListener("focus", (event) => {
    event.target.style.border = "3px solid #2196f3";
    event.target.style.backgroundColor = "#e3f2fd";
    focusDisplay.textContent = "✅ Field is focused!";
    focusDisplay.style.color = "#2196f3";
    console.log("Focus event fired");
});

// ============================================
// 4. BLUR EVENT
// ============================================

const blurSection = document.createElement("div");
blurSection.style.marginTop = "20px";
blurSection.style.padding = "15px";
blurSection.style.backgroundColor = "#f3e5f5";
demoContainer.appendChild(blurSection);

const blurTitle = document.createElement("h3");
blurTitle.textContent = "blur Event (Element Loses Focus)";
blurTitle.style.marginBottom = "10px";
blurSection.appendChild(blurTitle);

const blurInfo = document.createElement("div");
blurInfo.style.padding = "10px";
blurInfo.style.backgroundColor = "#fff";
blurInfo.style.marginBottom = "15px";
blurInfo.style.fontSize = "14px";
blurInfo.innerHTML = `
    <strong>blur event:</strong> Fires when element loses focus<br>
    <strong>Use case:</strong> Validation, formatting, saving data
`;
blurSection.appendChild(blurInfo);

const blurField = document.createElement("input");
blurField.type = "text";
blurField.id = "blur-demo";
blurField.placeholder = "Click here, then click outside...";
blurField.style.padding = "8px";
blurField.style.width = "300px";
blurField.style.fontSize = "16px";
blurField.style.border = "2px solid #9c27b0";
blurSection.appendChild(blurField);

const blurDisplay = document.createElement("div");
blurDisplay.id = "blur-display";
blurDisplay.style.marginTop = "10px";
blurDisplay.style.padding = "10px";
blurDisplay.style.backgroundColor = "#fff";
blurDisplay.style.fontFamily = "monospace";
blurDisplay.textContent = "Blur status: Not blurred";
blurSection.appendChild(blurDisplay);

// blur event
blurField.addEventListener("blur", (event) => {
    event.target.style.border = "2px solid #9c27b0";
    event.target.style.backgroundColor = "#fff";
    
    const value = event.target.value;
    if (value) {
        blurDisplay.textContent = `✅ Field blurred with value: "${value}"`;
        blurDisplay.style.color = "#9c27b0";
    } else {
        blurDisplay.textContent = "⚠️ Field blurred but empty";
        blurDisplay.style.color = "#ff9800";
    }
    console.log("Blur event fired:", value);
});

// ============================================
// 5. FOCUSIN AND FOCUSOUT (Bubbling versions)
// ============================================

const focusinSection = document.createElement("div");
focusinSection.style.marginTop = "20px";
focusinSection.style.padding = "15px";
focusinSection.style.backgroundColor = "#fce4ec";
demoContainer.appendChild(focusinSection);

const focusinTitle = document.createElement("h3");
focusinTitle.textContent = "focusin / focusout Events (Bubbling)";
focusinTitle.style.marginBottom = "10px";
focusinSection.appendChild(focusinTitle);

const focusinInfo = document.createElement("div");
focusinInfo.style.padding = "10px";
focusinInfo.style.backgroundColor = "#fff";
focusinInfo.style.marginBottom = "15px";
focusinInfo.style.fontSize = "14px";
focusinInfo.innerHTML = `
    <strong>focusin / focusout:</strong> Bubbling versions of focus/blur<br>
    <strong>Use case:</strong> Event delegation for form validation
`;
focusinSection.appendChild(focusinInfo);

const focusinContainer = document.createElement("div");
focusinContainer.id = "focusin-container";
focusinContainer.style.padding = "15px";
focusinContainer.style.backgroundColor = "#fff";
focusinContainer.style.border = "2px solid #e91e63";
focusinSection.appendChild(focusinContainer);

const focusinField1 = document.createElement("input");
focusinField1.type = "text";
focusinField1.placeholder = "Field 1";
focusinField1.style.padding = "8px";
focusinField1.style.margin = "5px";
focusinField1.style.width = "200px";
focusinContainer.appendChild(focusinField1);

const focusinField2 = document.createElement("input");
focusinField2.type = "text";
focusinField2.placeholder = "Field 2";
focusinField2.style.padding = "8px";
focusinField2.style.margin = "5px";
focusinField2.style.width = "200px";
focusinContainer.appendChild(focusinField2);

const focusinDisplay = document.createElement("div");
focusinDisplay.id = "focusin-display";
focusinDisplay.style.marginTop = "10px";
focusinDisplay.style.padding = "10px";
focusinDisplay.style.backgroundColor = "#fff";
focusinDisplay.style.fontFamily = "monospace";
focusinDisplay.textContent = "Focus events will appear here...";
focusinSection.appendChild(focusinDisplay);

// focusin bubbles, so we can listen on container
focusinContainer.addEventListener("focusin", (event) => {
    focusinDisplay.textContent = `✅ Focusin: ${event.target.placeholder || "Element"} received focus`;
    focusinDisplay.style.color = "#4caf50";
    event.target.style.border = "2px solid #4caf50";
    console.log("Focusin event:", event.target);
});

focusinContainer.addEventListener("focusout", (event) => {
    focusinDisplay.textContent = `⚠️ Focusout: ${event.target.placeholder || "Element"} lost focus`;
    focusinDisplay.style.color = "#ff9800";
    event.target.style.border = "1px solid #ccc";
    console.log("Focusout event:", event.target);
});

// ============================================
// 6. COMPREHENSIVE FORM EXAMPLE
// ============================================

const comprehensiveSection = document.createElement("div");
comprehensiveSection.style.marginTop = "20px";
comprehensiveSection.style.padding = "15px";
comprehensiveSection.style.backgroundColor = "#f5f5f5";
demoContainer.appendChild(comprehensiveSection);

const comprehensiveTitle = document.createElement("h3");
comprehensiveTitle.textContent = "Comprehensive Form Example";
comprehensiveTitle.style.marginBottom = "10px";
comprehensiveSection.appendChild(comprehensiveTitle);

// Create a form
const form = document.createElement("form");
form.id = "comprehensive-form";
form.style.padding = "15px";
form.style.backgroundColor = "#fff";
form.style.border = "1px solid #ddd";
comprehensiveSection.appendChild(form);

// Name field
const nameLabel = document.createElement("label");
nameLabel.textContent = "Name:";
nameLabel.style.display = "block";
nameLabel.style.marginBottom = "5px";
nameLabel.style.fontWeight = "bold";
form.appendChild(nameLabel);

const nameField = document.createElement("input");
nameField.type = "text";
nameField.id = "name-field";
nameField.name = "name";
nameField.placeholder = "Enter your name";
nameField.style.padding = "8px";
nameField.style.width = "100%";
nameField.style.marginBottom = "15px";
nameField.style.border = "1px solid #ccc";
nameField.style.borderRadius = "4px";
form.appendChild(nameField);

const nameError = document.createElement("div");
nameError.id = "name-error";
nameError.style.color = "#f44336";
nameError.style.fontSize = "12px";
nameError.style.marginBottom = "10px";
nameError.style.minHeight = "20px";
form.appendChild(nameError);

// Email field
const emailLabel = document.createElement("label");
emailLabel.textContent = "Email:";
emailLabel.style.display = "block";
emailLabel.style.marginBottom = "5px";
emailLabel.style.fontWeight = "bold";
form.appendChild(emailLabel);

const emailField = document.createElement("input");
emailField.type = "email";
emailField.id = "email-field";
emailField.name = "email";
emailField.placeholder = "Enter your email";
emailField.style.padding = "8px";
emailField.style.width = "100%";
emailField.style.marginBottom = "15px";
emailField.style.border = "1px solid #ccc";
emailField.style.borderRadius = "4px";
form.appendChild(emailField);

const emailError = document.createElement("div");
emailError.id = "email-error";
emailError.style.color = "#f44336";
emailError.style.fontSize = "12px";
emailError.style.marginBottom = "10px";
emailError.style.minHeight = "20px";
form.appendChild(emailError);

// Submit button
const submitBtn = document.createElement("button");
submitBtn.type = "submit";
submitBtn.textContent = "Submit";
submitBtn.style.padding = "10px 20px";
submitBtn.style.backgroundColor = "#4caf50";
submitBtn.style.color = "#fff";
submitBtn.style.border = "none";
submitBtn.style.borderRadius = "4px";
submitBtn.style.cursor = "pointer";
submitBtn.style.fontSize = "16px";
form.appendChild(submitBtn);

// Validation functions
const validateName = (value) => {
    if (value.length < 2) {
        return "Name must be at least 2 characters";
    }
    return null;
};

const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
        return "Please enter a valid email address";
    }
    return null;
};

// Real-time validation on input
nameField.addEventListener("input", () => {
    const error = validateName(nameField.value);
    if (error) {
        nameError.textContent = error;
        nameField.style.borderColor = "#f44336";
    } else {
        nameError.textContent = "";
        nameField.style.borderColor = "#4caf50";
    }
});

emailField.addEventListener("input", () => {
    const error = validateEmail(emailField.value);
    if (error) {
        emailError.textContent = error;
        emailField.style.borderColor = "#f44336";
    } else {
        emailError.textContent = "";
        emailField.style.borderColor = "#4caf50";
    }
});

// Validation on blur (when user leaves field)
nameField.addEventListener("blur", () => {
    if (nameField.value && !validateName(nameField.value)) {
        nameField.style.borderColor = "#4caf50";
    }
});

emailField.addEventListener("blur", () => {
    if (emailField.value && !validateEmail(emailField.value)) {
        emailField.style.borderColor = "#4caf50";
    }
});

// Form submission
form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    const nameError = validateName(nameField.value);
    const emailError = validateEmail(emailField.value);
    
    if (nameError || emailError) {
        alert("Please fix the errors before submitting");
        return;
    }
    
    alert(`Form submitted!\nName: ${nameField.value}\nEmail: ${emailField.value}`);
    console.log("Form submitted:", {
        name: nameField.value,
        email: emailField.value
    });
});

console.log("=== Form Events Demo Loaded ===");
console.log("Events covered:");
console.log("1. input - Fires on every value change");
console.log("2. change - Fires when value changes and element loses focus");
console.log("3. focus - Fires when element receives focus");
console.log("4. blur - Fires when element loses focus");
console.log("5. focusin / focusout - Bubbling versions of focus/blur");
