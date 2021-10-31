var firstName = "Eden"; // throughout the whole program
let lastName = "Saurich"; // scrope where declared
const pi = 3.14; // cannnot change

let num = 1;
num++; // 2
num--; // 1
num += 5; // 6
num -= 2; // 4
num *= 2; // 8
num /= 8; // 1

/* ESCAPE SEQUENCES IN STRINGS
\'  single quote
\"  double quote
\\  backslash
\n  newline
\r  carriage return
\t  tab
\b  backspace
\f  form feed
*/

console.log(firstName.length);
console.log(firstName[0]);
console.log(firstName[firstName.length - 1]);

// nested arrays
let ourArray = [["test", 8], [5, "ha"]];
console.log(typeof ourArray[1][1]);

ourArray.push(["happy", "dog"]); // appends to the back
console.log(ourArray);

let removedFromArray = ourArray.pop(); // removes the last element
console.log(removedFromArray);

removedFromArray = ourArray.shift(); // removes the first element
console.log(removedFromArray);

ourArray.unshift(["sad", "cuck"]); // appends to the front
console.log(ourArray);

var myGlobal = 10;

function fun1() {
    var localVariable = 5;
    console.log(myGlobal + localVariable);
    oopsGlobal = 7; // is now global bc it doesn't have the var keyword
    console.log(myGlobal + oopsGlobal);
}

fun1();

// console.log(localVariable); // Uncaught ReferenceError: localVariable is not defined
console.log(oopsGlobal);

var outerWear = "T-Shirt";

function myOutfit() {
    // local variables win when of the same name as a global variable
    var outerWear = "Sweater";
    return outerWear;
}

console.log(myOutfit());

// EQUALITY
// =    is for setting the value
// ==   converts values to the same type and compares the content
// ===  compares the values
// !=   type conversion
// !==  strict

console.log(7 == 7) // true
console.log(7 === 7) // true
console.log(7 == "7") // true
console.log(7 === "7") // false

// LOGICAL
// &&   and
// ||   or

if (5 <= 50 && 5 >= 2) { console.log("yay"); }

// SWITCH
let val = 5;
let answer = "";
switch(val) { // uses strict
    case 1:
        answer = "alpha";
        break; // if break wasn't here, it would continue with the following case
    case 2:
        answer = "beta";
        break;
    case 3:
        answer = "gamma";
        break;
    case 4:
        answer = "delta";
        break;
    default:
        answer = "unknown";
        break;
}
console.log(answer);

switch(val) { // uses strict
    case 1:
    case 2:
    case 3:
        answer = "low";
        break;
    case 4:
    case 5:
    case 6:
        answer = "medium";
        break;
    case 4:
    case 5:
    case 6:
        answer = "high";
        break;
    default:
        answer = "unknown";
        break;
}
console.log(answer);

// OBJECTS
let myDog = {
    name: "Jake",
    legs: 4,
    "age": 8,
    "owner is": ["Kyle"],
};

// dot notation not possible when the property name has a space
myDog.age++;
console.log(myDog.name + ", " + myDog.age);
myDog["owner is"].push("James");
console.log(myDog["owner is"]);

// deleting a property
delete myDog.legs;
console.log(myDog);

// has this property?
console.log(myDog.hasOwnProperty("legs"));

// accessing nested objects
let myObject = {
    "one": "this",
    "two": {
        "inside": "nunca",
        "maybe inside": "doggo"
    },
    "three": {
        "shit": "eh",
        "sum": []
    }
};

console.log(myObject.two.inside)
console.log(myObject.two["maybe inside"])

// working with an object with properties
myObject["three"]["sum"] = myObject["three"]["sum"] || []; // check if "sum" exists, if not, create it
myObject["three"]["sum"].push("pushing shit")
console.log(myObject);

console.log(myObject["three"]["nope"] || "No such thing"); // return the property if exists, else return "No such thing"

// LOOPS (same as literally everywhere else)
var myArray = [];
var i = 0;

//  while
while (i < 5) {
    myArray.push(i);
    i++;
}
console.log(myArray);

//  for
for (var j = 0; j < 5; j += 2) {
    myArray.push(j + 5);
}
console.log(myArray);

//  do-while
// compared to while, it always runs at least once
i = 5;
do {                // firstly, it does this
    myArray.push(i);
    i++;
} while (i < 5);    // secondly, it checks the condition
console.log(myArray);

// NUMS
//  random decimal
console.log(Math.random()); // random decimal
console.log(Math.floor(Math.random() * 10)); // round it

//  parsing
console.log(typeof parseInt("26"));
console.log(parseInt("10011", 2)); // base 2


// short if-else
//  condition ? if-true : if-false
console.log("this" === "that" ? true : false);

// nested conditional
function checkSign(num) {
    return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
}

console.log(checkSign(10));

// VAR VS LET/CONST
//  var lets you declare a variable more than once, let doesn't
var catName = "Quincy";
var catName = "Beau";
console.log(catName);

//  var declares the variable globally (or locally if inside of a function)
//  let scope is limited to the block, statement, or expression that it was declared in

function checkScope() {
    "use strict"; // strict mode - catches common coding mistakes and unsafe actions
    // var i = "function scope"; // always block scope
    let i = "function scope";
    if (true) {
        let i = "block scope"; // "different" i
        console.log("Block scope i is: ", i);
    }
    console.log("Function scope i is: ", i);
    return i;
}

checkScope();

//  const is the same as let but is read-only (cannot be reassigned)
//    common to use all capital letters
const SENTENCE = "is amazing";
// SENTENCE = "not possible"; // TypeError: Assignment to constant variable.
console.log(SENTENCE);

//    arrays can still be changed
const s = [5,7,2];
s[0] = 9;
console.log(s);

// FREEZING OBJECTS
function freezeObj() {
    "use strict";
    const MATH_CONSTANTS = {
        PI: 3.14
    };

    Object.freeze(MATH_CONSTANTS);

    try {
        MATH_CONSTANTS.PI = 99;
    } catch (ex) {
        console.log(ex);
    }

    return MATH_CONSTANTS.PI;
}

const PI = freezeObj();
console.log(PI);

// ANONYMOUS FUNCTIONS
// var magic = function () {
//     return new Date();
// };

// var magic = () => {
//     return new Date();
// };

var magic = () => new Date();

const myConcat = (arr1, arr2) => arr1.concat(arr2);
console.log(myConcat([1,2],[3,4,5]));

// higher order arrow functions
const squareList = (arr) => arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
console.log(squareList([4,5.6,-9.8,3.14,42,6,8.32,-2]));

// default parameters
const increment = (function () {
    return function increment(number, value = 1) {
        return number + value;
    };
}) ();

console.log(increment(5));

// rest operator (any number of arguments)
const sum = (function () {
    return function sum(...args) { // converts everything that's passed into an array called args
        return args.reduce((a,b) => a + b,0);
    };
}) ();

console.log(sum(1,2,3,4));

// spread operator
//  can only be used in an argument to a function or in an array literal
const arr1 = ["jan", "feb", "mar"];
let arr2;
(function () {
    // arr2 = arr1; // reference to the same array
    arr2 = [...arr1];
    arr1[0] = "potato";
})();
console.log(arr2);

// DESTRUCTURING
//  old way:
let voxel = {x: 3.6, y: 7.4, z: 6.54};
let x = voxel.x;
let y = voxel.y;
let z = voxel.z;

//  new way:
const {x: a, y: b, z: c} = voxel;
console.log(a, b, c);

const AVG_TEMPS = {
    today: 21,
    tomorrow: 19
};
const {tomorrow: tempOfTmrw} = AVG_TEMPS;
console.log(tempOfTmrw);

const LOCAL_FORECAST = {
    today: {min: 18, max: 21},
    tomorrow: {min: 15, max: 18},
}

const {tomorrow: {max: maxOfTmrw}} = LOCAL_FORECAST;
console.log(maxOfTmrw);

// from arrays
//  cannot specify which ones you want, it goes in order
const [o,p] = [1,2,3,4,5,6];
const [t,u,,w] = [1,2,3,4,5,6]; // skip third element

//  swap numbers:
let e = 8, f = 6;
(() => {
    [e,f] = [f,e];
}) ();
console.log(e,f);

//  with the rest operator
const src = [1,2,3,4,5,6,7,8,9];

function removeFistTwo(list) {
    const [,,...arr] = list; // skipped the first two elements
    return arr;
}
console.log(removeFistTwo(src));

// TEMPLATE LITERALS
//  weird ass strings used as templates ; nvm, it's just like Python's f-string
const person = {
    name: "Oliver",
    age: 1
}
const greeting = `Hello, my name is ${person.name}!
I am ${person.age} year(s) old.`;
console.log(greeting);

const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["id-blacklist", "no-dup-keys"]
}
function makeList(arr) {
    const resultDisplayArray = [];
    for (let i = 0; i < arr.length; i++) {
        resultDisplayArray.push(`<li class="text-warning">${arr[i]}</li>`);
    };
    return resultDisplayArray;
}
console.log(makeList(result.success));

// SIMPLE FIELDS
const createPerson = (name, age, gender) => ({name, age, gender}); // makes an object where fields are the same name as params
console.log(createPerson("Jake", 26, "male"));

// CONCISE DECLARATIVE FUNCTIONS
//  long way to put a function inside of an object:
const bicycle = {
    gear: 2,
    setGear: function (newGear) {
        this.gear = newGear
    }
};

//  short way:
const bicycle2 = {
    gear: 2,
    setGear(newGear) {
        this.gear = newGear
    }
};

// class Syntax
var SpaceShuttle = function (targetPlanet) {
    this.targetPlanet = targetPlanet;
}
var zeus = new SpaceShuttle("Jupiter"); // creates a new object

//  class syntax:
function makeClass() {
    class Vegetable {
        constructor(name) {
            this.name = name;
        }
    }
    return Vegetable;
}
const Vegetable = makeClass();
const carrot = new Vegetable("carrot");
console.log(carrot.name)

// getters and setters
//  they're like properties, so you call them without ()
class Book {
    constructor(author) {
        this._author = author;
    }
    get writer() {
        return this._author;
    }
    set writer(updatedAuthor) {
        this._author = updatedAuthor;
    }
}

// import vs require
//  import works the same as in Python
import {capitalizeString} from "./string_function";
const cap = capitalizeString("aloha gamers");
console.log(cap);

