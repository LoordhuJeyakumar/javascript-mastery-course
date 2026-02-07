# DOM Manipulation Cheatsheet

## Selecting Elements

```javascript
// Single element
const title = document.getElementById("main-title");
const firstBtn = document.querySelector(".btn");
const firstP = document.querySelector("p");

// Multiple elements
const buttons = document.getElementsByClassName("btn"); // HTMLCollection
const allBtns = document.querySelectorAll(".btn"); // NodeList
const allP = document.getElementsByTagName("p"); // HTMLCollection
```

## Modifying Content

```javascript
// Text content (SAFE - recommended for user input)
element.textContent = "Plain text";
element.innerText = "Visible text only";

// HTML content (DANGEROUS with user input - XSS risk!)
element.innerHTML = "<span>HTML content</span>";
```

## Modifying Styles

```javascript
// Inline styles
element.style.color = "red";
element.style.fontSize = "24px";

// Better way: Classes
element.classList.add("active");
element.classList.remove("hidden");
element.classList.toggle("dark-mode");
element.classList.contains("active"); // Check if class exists

// Direct className
element.className = "class1 class2";
```

## Creating Elements

```javascript
// Create element
const newDiv = document.createElement("div");
newDiv.textContent = "I am new!";

// Append to parent
document.body.appendChild(newDiv);
document.body.append(newDiv, anotherElement); // Can append multiple

// Insert at specific position
parent.insertBefore(newDiv, referenceElement);
element.insertAdjacentElement("afterend", newDiv);
```

## Removing Elements

```javascript
// Modern way
element.remove();

// Traditional way (requires parent)
parent.removeChild(element);
element.parentElement.removeChild(element);
```

## Replacing Elements

```javascript
// Modern way
oldElement.replaceWith(newElement);

// Traditional way (requires parent)
parent.replaceChild(newElement, oldElement);
```

## Attributes

```javascript
// Get attribute
const value = element.getAttribute("data-id");
const id = element.id; // Direct property access

// Set attribute
element.setAttribute("data-id", "123");
element.id = "myId"; // Direct property access

// Remove attribute
element.removeAttribute("data-id");

// Check attribute
if (element.hasAttribute("required")) {
  // Element has required attribute
}

// Data attributes (data-*)
element.dataset.userId; // Access data-user-id
element.dataset.userName; // Access data-user-name
element.dataset.userId = "456"; // Set data-user-id
```

## DOM Traversal

```javascript
// Parent
const parent = element.parentElement;
const parentNode = element.parentNode;

// Children
const children = element.children; // HTMLCollection (elements only)
const childNodes = element.childNodes; // NodeList (all nodes)
const firstChild = element.firstElementChild;
const lastChild = element.lastElementChild;

// Siblings
const nextSibling = element.nextElementSibling;
const prevSibling = element.previousElementSibling;

// Finding ancestors
const ancestor = element.closest(".parent-class");

// Checking element
if (element.matches(".active")) {
  // Element matches selector
}
```

## DOM Ready

```javascript
// Wait for DOM to be ready (RECOMMENDED)
document.addEventListener("DOMContentLoaded", () => {
  // DOM is ready, safe to manipulate
});

// Wait for all resources (slower)
window.addEventListener("load", () => {
  // Everything loaded
});

// Check if already loaded
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init(); // Already loaded
}
```

## Events

```javascript
// Add event listener
element.addEventListener("click", (event) => {
  console.log("Clicked!", event.target);
});

// Remove event listener (need function reference)
const handler = () => console.log("Clicked!");
element.addEventListener("click", handler);
element.removeEventListener("click", handler);

// Common events
element.addEventListener("click", handler);
element.addEventListener("input", handler); // Real-time input
element.addEventListener("change", handler); // Value changed + lost focus
element.addEventListener("focus", handler); // Element focused
element.addEventListener("blur", handler); // Element lost focus
element.addEventListener("submit", handler); // Form submitted
```

## Event Delegation

```javascript
// Listen on parent, check target
parent.addEventListener("click", (event) => {
  if (event.target.classList.contains("item")) {
    // Handle click on .item
  }
});
```

## Event Propagation

```javascript
// Stop event from bubbling
element.addEventListener("click", (event) => {
  event.stopPropagation(); // Prevents bubbling to parent
  event.stopImmediatePropagation(); // Stops all listeners
});

// Capturing phase (third parameter = true)
element.addEventListener("click", handler, true);
```

## Form Events

```javascript
// Input event (real-time)
input.addEventListener("input", (event) => {
  console.log("Value:", event.target.value);
});

// Change event (after focus lost)
input.addEventListener("change", (event) => {
  console.log("Changed:", event.target.value);
});

// Focus events
input.addEventListener("focus", () => {
  // Element received focus
});

input.addEventListener("blur", () => {
  // Element lost focus
});

// Form submission
form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent default form submission
  // Handle form
});
```

## Advanced Techniques

```javascript
// Clone element
const clone = element.cloneNode(true); // true = deep copy

// DocumentFragment (performance)
const fragment = document.createDocumentFragment();
for (let i = 0; i < 100; i++) {
  const item = document.createElement("div");
  fragment.appendChild(item);
}
container.appendChild(fragment); // Single reflow

// Insert adjacent
element.insertAdjacentElement("afterend", newElement);
element.insertAdjacentHTML("beforebegin", "<div>HTML</div>");
```

## Best Practices

```javascript
// ✅ Use textContent for user input (SAFE)
element.textContent = userInput;

// ❌ Don't use innerHTML with user input (XSS risk!)
// element.innerHTML = userInput; // DANGEROUS!

// ✅ Use DocumentFragment for multiple appends
const fragment = document.createDocumentFragment();
// ... add elements to fragment
container.appendChild(fragment);

// ✅ Cache DOM queries
const element = document.getElementById("myId");
// Reuse element variable instead of querying again

// ✅ Use event delegation for dynamic content
parent.addEventListener("click", (e) => {
  if (e.target.matches(".item")) {
    // Handle click
  }
});
```
