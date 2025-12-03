# DOM Manipulation Cheatsheet

## Selecting Elements

```javascript
const title = document.getElementById("main-title");
const buttons = document.getElementsByClassName("btn");
const firstBtn = document.querySelector(".btn");
const allBtns = document.querySelectorAll(".btn");
```

## Modifying Content

```javascript
title.innerText = "New Title";
title.innerHTML = "<span>New Title</span>";
```

## Modifying Styles

```javascript
title.style.color = "red";
title.style.fontSize = "24px";

// Better way: Classes
title.classList.add("active");
title.classList.remove("hidden");
title.classList.toggle("dark-mode");
```

## Events

```javascript
const btn = document.querySelector("#myBtn");

btn.addEventListener("click", function(event) {
  console.log("Button clicked!");
  console.log(event.target); // The element that was clicked
});
```

## Creating Elements

```javascript
const newDiv = document.createElement("div");
newDiv.innerText = "I am new!";
document.body.appendChild(newDiv);
```
