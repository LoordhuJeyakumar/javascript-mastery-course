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

loadingScreen.style.width ="fit-content";
loadingScreen.style.fontWeight = "bold";
loadingScreen.style.fontFamily = "monospace";
loadingScreen.style.fontSize = "30px";
loadingScreen.style.background = "linear-gradient(90deg,#000 50%,#0000 0) right/200% 100%";
loadingScreen.style.animation = "l21 2s infinite linear";

loadingScreen.style

container.appendChild(loadingScreen);


//hide loading screen