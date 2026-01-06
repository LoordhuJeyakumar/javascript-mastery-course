const heading = document.createElement("h1"); // this temporarily creates an h1 element in memory

heading.textContent = "Hello, DOM Manipulation!"; // setting the text content of the h1 element

document.body.appendChild(heading); // appending the h1 element to the body of the document

//append vs appendChild
// appendChild only allows you to append a single node and it must be a Node object.
// append allows you to append multiple nodes and strings, and it can handle both Node objects and string values.

// Example of append
const paragraph = document.createElement("p");
const textNode = document.createTextNode(" This is a text node added using append.");
const anotherText = " This is another string added using append.";

paragraph.textContent = "This is a paragraph added using append.";
document.body.append(   paragraph, textNode, anotherText); // appending multiple items using append