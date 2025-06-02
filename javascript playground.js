// age calculator
let age = 25;
age = age + 2;
console.log(age);

// const is used to declare a constant variable
const myName = "Rehan";
console.log(myName);

// let is used to declare a variable that can be changed
let myAge = 25;
myAge = 26;
console.log(myAge);

const firstName = "Aman";
const lastName = 'V';
const message = `Hello my name is ${firstName}`;
console.log(message);

// template strings with backticks
const greeting = `Hello ${firstName} ${lastName}!`;
console.log(greeting);

// Numbers - no quotes needed
const ages = 25;
const price = 19.99;
const negative = -25
console.log(ages, price, negative);

// Booleans - true or false
const isLoggedIn = true;
const isPaymentComplete = false;
console.log(isLoggedIn, isPaymentComplete);

// null and undefined - "nothing" values
let notdefinedyet; // undefined
const explicitlyEmpty = null; // null
console.log(notdefinedyet, explicitlyEmpty); // null

// objects - groups of related data
const person = {
    name: "Rehan",
    age: 26,
    isStudent: true
};
console.log(person);

// arrays - ordered lists of items
const colours = ["r", "g", "b"];
const numbers = [1, 2, 3];
const mixed = ["John", 25, true]; // can mix data types
console.log(colours, numbers, mixed);

const fruits = ["apple", "banana", "cherry"];

// accessing array items
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

// changing array items
fruits[1] = "mango";
console.log(fruits[1]);

// adding items to an array
fruits.push("grape");
fruits.unshift("kiwi");
console.log(fruits);

// finding the length of an array
console.log(fruits.length);

// common array operations
const numbersa = [10, 20, 30, 40, 50];

// find a specific item in the array
const index = numbersa.indexOf(30);
console.log(index);

// check if item is in the array
const hasThirty = numbersa.includes(30);
console.log(hasThirty);

// extract a part of an array
const subset = numbersa.slice(1, 3);
console.log(subset);

// loops - doing things repeatedly
// for loop
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// loop through an array
const coloursa = ["red", "green", "blue"];
for (let i = 0; i < coloursa.length; i++) {
    console.log(`Colour ${i} is ${coloursa[i]}`);
}

// while loop
/*let password = "";
while (password !== "secret123") {
    password = prompt("Enter the password");
}*/

// for...of loop
const fruitss = ["apple", "banana", "orange"];
for (const fruit of fruitss) {
    console.log(fruit);
}

fruitss.forEach(function(fruit){
    console.log(fruit);
})

fruits.forEach(fruitss => console.log(fruitss));

// functions - reuseable blocks of code
function greet(name) {
    return `Hello, ${name}!`;
}

const messages = greet("Anjum");
console.log(messages);

// function expressions
const add = function(a, b) {
    return a + b;
};

const result = add(5, 3); //8

const multiply = (a, b) => {
    return a * b;
};

const divide = (a, b) => a / b;
console.log(divide(100, 2));

// functions with default parameters
function orderPizza(size = "medium", toppings = "cheese") {
    return `One ${size} ${toppings} pizza`;
}

orderPizza();
orderPizza("large");
console.log(orderPizza());

// functions that return objects
function createPerson(name, age) {
    return {
        name: name,
        age: age,
        isAdult: age >= 18
    };
};

const John = createPerson("John", 25);
console.log(John);

// objects - grouping related data
const persona = {
    firstName:"Ravi",
    lastName: "Nath",
    age: 50,
    isStudent: false,

    hobbies: ["biking", "working out", "golf"],

    address: {
        street: "River Valley",
        city: "Singapore",
        zipCode: "123456"
    },

    getFullName: function() {
        return `${this.firstName} ${this.lastName}`;
    }
};

console.log(persona.getFullName());

// accessing object properties
console.log(persona.firstName);
console.log(persona["lastName"]);

console.log(persona.address.zipCode);

console.log(persona.getFullName());

persona.age = 51;
persona.email = "ravi@gmail.com";
console.log(persona);

persona.phoneNumber = "123";

delete persona.age;
console.log(persona);

if (persona.age) {
    console.log("Has email")
}