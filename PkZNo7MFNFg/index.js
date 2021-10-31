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