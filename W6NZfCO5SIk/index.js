// comment
console.log("Hello World");

// VARIABLES
//  value can change
let name; // default value is undefined
name = "Mosh"

// rules for naming variables:
//      - cannot be reserved keyword (let, if, ...)
//      - should be meaningful
//      - cannot start with a number
//      - cannot contains space or hyphen (-) -> camelNotation
//      - are case-sensitive

// CONSTANTS
//  value cannot change
const interestRate = 0.3;

// TYPES
//  Primitives:
let firstName = "Eden"; // string literal
let age = 24; // number literal
let isApproved = false; // boolean literal
let lastName = undefined;
let selectedColour = null;

//  Objects:
let person = {
    name: "Eden",
    age: 24
}; // object literal
console.log(person);

// dot notation
person.name = "Jake";
console.log(person.name);

// bracket notation
let selection = "name";
person[selection] = "Kyle";
console.log(person.name);

//  JavaScript is a dynamic language
console.log(typeof age);

//  Arrays:
//   can have different types
let selectedColours = ["red", "blue"]; // array literal
selectedColours[2] = "green";
selectedColours[3] = 1;
console.log(selectedColours);
console.log(selectedColours[0]);


// FUNCTIONS
function greet(name, lastName) {
    console.log("Hello " + name + " " + lastName);
}

greet("Eden", "Saurich");
greet("Jake");

function square(number) {
    return number * number;
}

console.log(square(2));