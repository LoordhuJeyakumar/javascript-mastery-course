# Module 05: DOM Manipulation

The Document Object Model (DOM) is how JavaScript interacts with HTML. It allows you to change the content, style, and structure of a webpage dynamically.

## 🧠 Real World Analogy
- **The DOM**: Think of the webpage as a **Family Tree**.
    - `<html>` is the Grandparent.
    - `<body>` is the Parent.
    - `<div>`, `<h1>`, `<p>` are the Children.
- **Manipulation**: You are the **Decorator**. You can paint the walls (change styles), hang new pictures (add elements), or move furniture (change layout).

## 📚 Topics Covered

### Core Concepts
1.  **Selecting Elements**: `getElementById`, `querySelector`, `querySelectorAll`, `getElementsByClassName`, `getElementsByTagName`.
2.  **Modifying Content**: `innerText`, `innerHTML`, `textContent`.
3.  **Modifying Styles**: `style.property`, `classList` (add, remove, toggle), `className`.
4.  **Events**: `addEventListener` (click, submit, input, change, focus, blur).
5.  **Creating Elements**: `createElement`, `appendChild`, `append`.

### Advanced Topics
6.  **Removing Elements**: `remove()`, `removeChild()`.
7.  **Replacing Elements**: `replaceWith()`, `replaceChild()`.
8.  **Attributes**: `getAttribute()`, `setAttribute()`, `removeAttribute()`, `hasAttribute()`, `dataset`.
9.  **DOM Traversal**: `parentElement`, `children`, `childNodes`, `nextSibling`, `previousSibling`, `closest()`, `matches()`.
10. **DOM Ready**: `DOMContentLoaded`, `window.onload`, `document.readyState`.
11. **Event Delegation**: Using parent listeners for dynamic content.
12. **Event Propagation**: Bubbling, capturing, `stopPropagation()`.
13. **Form Events**: `input`, `change`, `focus`, `blur`, `focusin`, `focusout`.
14. **Advanced Techniques**: `cloneNode()`, `DocumentFragment`, `insertBefore()`, `insertAdjacentElement()`.
15. **Content Security**: `innerHTML` vs `textContent` vs `innerText`, XSS prevention.

## 📖 Resources
- [Cheatsheet](./cheatsheet.md)
- [MDN - Introduction to the DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)

## 📁 Script Files

This module includes comprehensive examples organized by topic:

1. **[script.js](./script.js)** - Core DOM manipulation examples
2. **[01-removing-replacing-elements.js](./01-removing-replacing-elements.js)** - Removing and replacing elements
3. **[02-attributes.js](./02-attributes.js)** - Working with attributes and data attributes
4. **[03-dom-traversal.js](./03-dom-traversal.js)** - Navigating the DOM tree
5. **[04-dom-ready.js](./04-dom-ready.js)** - DOMContentLoaded and document ready states
6. **[05-event-delegation.js](./05-event-delegation.js)** - Event delegation and propagation
7. **[06-form-events.js](./06-form-events.js)** - Form events (input, change, focus, blur)
8. **[07-advanced-techniques.js](./07-advanced-techniques.js)** - Advanced techniques (cloneNode, DocumentFragment)
9. **[08-content-security.js](./08-content-security.js)** - Content security (innerHTML vs textContent)

To test any script, create an HTML file and include the script:
```html
<!DOCTYPE html>
<html>
<head>
    <title>DOM Demo</title>
</head>
<body>
    <script src="01-removing-replacing-elements.js"></script>
</body>
</html>
```

## 💻 Assignments

### Daily Practice
- Select an element and change its text.
- Add a click event listener to a button.

### Weekly Challenge
- **Interactive Background Changer**: Create a page with a button that changes the background color to a random color when clicked.
