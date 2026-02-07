// // const heading = document.createElement("h1"); // this temporarily creates an h1 element in memory

// // heading.textContent = "Hello, DOM Manipulation!"; // setting the text content of the h1 element

// // document.body.appendChild(heading); // appending the h1 element to the body of the document

// // //append vs appendChild
// // // appendChild only allows you to append a single node and it must be a Node object.
// // // append allows you to append multiple nodes and strings, and it can handle both Node objects and string values.

// // // Example of append
// // const paragraph = document.createElement("p");
// // const textNode = document.createTextNode(" This is a text node added using append.");
// // const anotherText = " This is another string added using append.";

// // paragraph.textContent = "This is a paragraph added using append.";
// // document.body.append(   paragraph, textNode, anotherText); // appending multiple items using append


// const container = document.getElementById("main"); // selecting the div with id "main"
// const description = document.querySelector(".description"); // selecting the first element with class "description"
// const descriptionAll = document.querySelectorAll(".description"); // selecting all elements with class "description"
// const descriptionByClass = document.getElementsByClassName("description"); // selecting all elements with class "description"
// const descriptionByTag = document.getElementsByTagName("p"); // selecting all <p> elements
// const subDescription = document.querySelector(".sub-description"); // selecting the element with class "sub-description"

// console.log(container); // logs the div with id "main"
// console.log(description); // logs the first element with class "description"
// console.log(descriptionAll); // logs a NodeList of all elements with class "description"
// console.log(descriptionByClass); // logs an HTMLCollection of all elements with class "description"
// console.log(descriptionByTag); // logs an HTMLCollection of all <p> elements

// console.log(typeof descriptionByClass)



const container = document.createElement("div");
container.id = "main";
container.textContent = "Hello, DOM Manipulation!";
document.body.appendChild(container);

// Styles related to the DOM manipulation

const heading = document.createElement("h1");
heading.textContent = "Hello, DOM Manipulation! this heading is designed using style properties";
heading.style.color = "red";
heading.style.fontSize = "20px";
heading.style.fontWeight = "bold";
heading.style.textAlign = "center";
heading.style.backgroundColor = "blue";
heading.style.padding = "10px";
heading.style.borderRadius = "5px";
heading.style.border = "1px solid black";


container.appendChild(heading);


//Classes
const paragraph = document.createElement("p");
paragraph.textContent = "This is a paragraph added using append. this paragraph is designed using class list.";
paragraph.classList.add("description");
container.appendChild(paragraph);

// Multple classes
const paragraph2 = document.createElement("p");
paragraph2.textContent = "This is a paragraph added using append. this paragraph is designed using multiple classes.";
paragraph2.classList.add("description", "sub-description");
container.appendChild(paragraph2);

// Multple classes
const paragraph3 = document.createElement("p");
paragraph3.textContent = "This is a paragraph added using append. this paragraph is designed using multiple classes.";
paragraph3.classList.add("description", "sub-description");
container.appendChild(paragraph3);

//single class

const paragraph4 = document.createElement("p");
paragraph4.textContent = "This is a paragraph added using append. this paragraph is designed using a single class.";
paragraph4.className = "description new class";
container.appendChild(paragraph4);



// remove a class
paragraph4.classList.remove("description", "sub-description");

// toggle a class => if the class is present, it will be removed, if the class is not present, it will be added
paragraph4.classList.toggle("description");

//CRAETE CUSTOM LOADING SCREEN WITHOUT BOOTSTRAP

const loadingScreen = document.createElement("div");

loadingScreen.className = "loading-screen";

loadingScreen.style.width = "fit-content";
loadingScreen.style.fontWeight = "bold";
loadingScreen.style.fontFamily = "monospace";
loadingScreen.style.fontSize = "30px";
loadingScreen.style.background = "linear-gradient(90deg,#000 50%,#0000 0) right/200% 100%";
loadingScreen.style.animation = "l21 2s infinite linear";

loadingScreen.style

container.appendChild(loadingScreen);



// event listeners 

const button = document.createElement("button");
button.id = "click-me-button";
button.classList.add("btn", "btn-primary");
button.textContent = "Click me";
button.addEventListener("click", () => {
    alert("Button clicked");
});

document.body.appendChild(button);


// event listeners for multiple events

const button2 = document.createElement("button");
button2.id = "click-me-button-2";
button2.classList.add("btn", "btn-primary");
button2.textContent = "Click me";
button2.addEventListener("click", () => {
    alert("Button clicked");
});

button2.addEventListener("mouseover", () => {
    button2.style.backgroundColor = "red";
});
button2.addEventListener("mouseout", () => {
    button2.style.backgroundColor = "blue";
});
button2.addEventListener("mousemove", () => {
    button2.style.backgroundColor = "green";
});
button2.addEventListener("mouseleave", () => {
    button2.style.backgroundColor = "yellow";
});
button2.addEventListener("mouseenter", () => {
    button2.style.backgroundColor = "purple";
});
document.body.appendChild(button2);


// event listeners for key events

const input = document.createElement("input");
input.id = "input-field";
input.classList.add("form-control");
input.type = "text";
input.placeholder = "Enter your name";
input.addEventListener("keydown", (event) => {
    console.log("keydown");
    console.log(event.key);
});
input.addEventListener("keyup", (event) => {
    console.log("keyup");
    console.log(event.key);
});

document.body.appendChild(input);


// event listeners for form events


const username = document.createElement("input");
username.id = "username_input";
username.classList.add("form-control");
username.type = "text";
username.placeholder = "Enter your username";
username.name = "username_input";

const password = document.createElement("input");
password.id = "password_input";
password.classList.add("form-control");
password.type = "password";
password.placeholder = "Enter your password";
password.name = "password_input";
const submitButton = document.createElement("button");
submitButton.id = "submit_button";
submitButton.classList.add("btn", "btn-primary");
submitButton.textContent = "Submit";
submitButton.type = "submit";

const showPasswordButton = document.createElement("button");
showPasswordButton.id = "show_password_button";
showPasswordButton.classList.add("btn", "btn-primary");
showPasswordButton.innerHTML = password.type === "password" ? `<svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-width="2" d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"/>
  <path stroke="currentColor" stroke-width="2" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
</svg>
` : `<svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path d="m4 15.6 3.055-3.056A4.913 4.913 0 0 1 7 12.012a5.006 5.006 0 0 1 5-5c.178.009.356.027.532.054l1.744-1.744A8.973 8.973 0 0 0 12 5.012c-5.388 0-10 5.336-10 7A6.49 6.49 0 0 0 4 15.6Z"/>
  <path d="m14.7 10.726 4.995-5.007A.998.998 0 0 0 18.99 4a1 1 0 0 0-.71.305l-4.995 5.007a2.98 2.98 0 0 0-.588-.21l-.035-.01a2.981 2.981 0 0 0-3.584 3.583c0 .012.008.022.01.033.05.204.12.402.211.59l-4.995 4.983a1 1 0 1 0 1.414 1.414l4.995-4.983c.189.091.386.162.59.211.011 0 .021.007.033.01a2.982 2.982 0 0 0 3.584-3.584c0-.012-.008-.023-.011-.035a3.05 3.05 0 0 0-.21-.588Z"/>
  <path d="m19.821 8.605-2.857 2.857a4.952 4.952 0 0 1-5.514 5.514l-1.785 1.785c.767.166 1.55.25 2.335.251 6.453 0 10-5.258 10-7 0-1.166-1.637-2.874-2.179-3.407Z"/>
</svg>
`;
showPasswordButton.type = "button";
showPasswordButton.addEventListener("click", () => {
    if (password.type === "password") {
        password.type = "text";
        showPasswordButton.innerHTML = `<svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-width="2" d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"/>
  <path stroke="currentColor" stroke-width="2" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
</svg>
`;
    } else {
        password.type = "password";
        showPasswordButton.innerHTML = `<svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path d="m4 15.6 3.055-3.056A4.913 4.913 0 0 1 7 12.012a5.006 5.006 0 0 1 5-5c.178.009.356.027.532.054l1.744-1.744A8.973 8.973 0 0 0 12 5.012c-5.388 0-10 5.336-10 7A6.49 6.49 0 0 0 4 15.6Z"/>
  <path d="m14.7 10.726 4.995-5.007A.998.998 0 0 0 18.99 4a1 1 0 0 0-.71.305l-4.995 5.007a2.98 2.98 0 0 0-.588-.21l-.035-.01a2.981 2.981 0 0 0-3.584 3.583c0 .012.008.022.01.033.05.204.12.402.211.59l-4.995 4.983a1 1 0 1 0 1.414 1.414l4.995-4.983c.189.091.386.162.59.211.011 0 .021.007.033.01a2.982 2.982 0 0 0 3.584-3.584c0-.012-.008-.023-.011-.035a3.05 3.05 0 0 0-.21-.588Z"/>
  <path d="m19.821 8.605-2.857 2.857a4.952 4.952 0 0 1-5.514 5.514l-1.785 1.785c.767.166 1.55.25 2.335.251 6.453 0 10-5.258 10-7 0-1.166-1.637-2.874-2.179-3.407Z"/>
</svg>
`;
    }
});


const form = document.createElement("form");
form.id = "login-form";
form.classList.add("form-control");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("form submitted");
    console.log(event)
    const formData = new FormData(event.target);
    const username = formData.get("username_input");
    const password = formData.get("password_input");
    console.log(username, password);
    alert(`Username: ${username}, Password: ${password}`);
});

form.appendChild(username);
form.appendChild(password);
form.appendChild(showPasswordButton);
form.appendChild(submitButton);
document.body.appendChild(form);





