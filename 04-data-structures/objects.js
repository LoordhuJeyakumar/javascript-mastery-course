// Objects

/* 
Syntax:
let objectName = {
    key1: value1,
}
*/

let person = {
    name: "John",
    age: 30,
    isEmployed: true,
    hobbies: ["reading", "traveling", "swimming"],
    address: {
        street: "123 Main St",
        city: "New York",
        zipCode: "10001"
    },
    great: function () {
        console.log("Hello, my name is " + this.name);
    }
};

// Accessing object propertie
//dot notation
console.log(person.name);
console.log(person.age);
console.log(person.address.city);

//bracket notation
console.log(person["hobbies"]);
console.log(person["address"]["zipCode"]); // person.address.zipCode


// Modifying object properties
person.age = 31;
person.address.street = "456 Elm St";
person.hobbies.push("coding");

console.log(person);

// Adding
person.email = "john@example.com";

// Deleting
delete person.isEmployed;

console.log(person);


// Calling method
person.great();

// Nested Objects
let company = {
    name: "Tech Corp",
    employees: [
        {
            name: "Alice",
            position: "Developer",
            address: {
                street: "123 Tech Ave",
                city: "San Francisco",
                zipCode: "94107"
            }
        },
        {
            name: "Bob",
            position: "Designer",
            address: {
                street: "456 Design St",
                city: "San Francisco",
                zipCode: "94107"
            }

        }
    ],
    address: {
        street: "789 Tech Ave",
        city: "San Francisco",
        zipCode: "94107"
    }
};


console.log(company.employees[0].name); // Alice
console.log(company.employees[1].address.street); // 456 Design St

// Looping through object properties
for (let key in person) {
    console.log(key + ": " + person[key]);
}

// Object methods
person.introduce = function () {
    console.log("Hi, I'm " + this.name + " and I'm " + this.age + " years old.");
};

person.introduce();

// --- Object Static Methods ---
console.log("Keys:", Object.keys(person));
console.log("Values:", Object.values(person));
console.log("Entries:", Object.entries(person));

// Checking if a property exists
console.log("Has age?", person.hasOwnProperty("age"));

// Summary
/*
- Objects are collections of key-value pairs.
- Properties can be accessed and modified using dot notation or bracket notation.
- Objects can contain nested objects and arrays.
- Methods are functions defined within objects that can operate on the object's properties.
*/