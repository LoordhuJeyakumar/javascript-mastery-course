// 04-classes-prototypes.js
// 🎓 Topic: Prototypes & Classes

/* 
  JavaScript is prototype-based. Classes are "syntactic sugar" 
  over the prototype-based inheritance model.
*/

// 1. Pre-ES6: Prototype Inheritance
function Animal(name) {
    this.name = name;

    // instance method
    this.run = function () {
        console.log(this.name + " is running...");
    }
}

Animal.prototype.eat = function () {
    console.log(this.name + " is eating...");
};

Animal.prototype.sleep = function () {
    console.log(this.name + " is sleeping...");
};

const myDog = new Animal("Rex");
myDog.eat();
myDog.run();
const myCat = new Animal("Whiskers");
myCat.eat();
myCat.sleep();



// 2. ES6: Classes
class Person {

    // class constructor or initializer
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // instance method
    introduce() {
        console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
    }
}

const person1 = new Person("John", 20);
person1.introduce();

// 3. Class Inheritance (Subclasses)
class Student extends Person {
    constructor(name, age, grade) {
        super(name, age); // Calls the parent constructor
        this.grade = grade;
    }

    study() {
        console.log(`${this.name} is studying for grade ${this.grade}.`);
    }
}

const s1 = new Student("Bob", 20, "A");
s1.introduce();
s1.study();

//person1.study();

