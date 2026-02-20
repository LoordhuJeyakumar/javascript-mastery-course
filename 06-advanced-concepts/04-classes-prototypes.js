/**
 * 🧬 Prototypes & Classes (The DNA Analogy)
 * 
 * In JavaScript, objects "inherit" features from their parents. 
 * Imagine a DNA strand. A child inherits the ability to "walk" from their parent, 
 * but they might also learn a unique skill like "painting".
 */

// --- 💡 1. The OLD Way (Prototypes) ---
// This is how JavaScript works "under the hood".
function Parent(name) {
    this.name = name;
}

// Giving the Parent the ability to speak
Parent.prototype.sayHello = function () {
    console.log(`Hello, I am ${this.name}`);
};

const child = new Parent("Timmy");
child.sayHello(); // ✅ Inherited from the prototype!


// --- 💡 2. The NEW Way (Classes - The Factory Blueprint) ---
// Think of a Class as a Blueprint for a car. It's NOT a car itself, 
// but it tells the factory exactly how to build one.
class Vehicle {
    constructor(brand) {
        this.brand = brand;
    }

    move() {
        console.log(`The ${this.brand} is moving...`);
    }
}

// 🏎️ Inheriting Traits (extends)
class Car extends Vehicle {
    constructor(brand, model) {
        super(brand); // 📞 "Call the parent factory to set the brand"
        this.model = model;
    }

    honk() {
        console.log("🔊 Beep Beep!");
    }
}

const myTesla = new Car("Tesla", "Model 3");
myTesla.move(); // ✅ Inherited from Vehicle
myTesla.honk(); // ✅ Unique to Car

/**
 * 🎓 KEY LESSON:
 * 1. 'Classes' are just a cleaner way to write 'Prototypes'. 
 * 2. 'extends' lets you borrow code from another class.
 * 3. 'super()' is how you talk to the parent class from the child.
 */
