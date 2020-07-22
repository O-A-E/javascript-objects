// Store one value (variable as a string.)
const myString = "Hello, World!";
console.log(myString);

// Store multiple values (multipe strings in an array variable.)
const myArray = [myString, "A second string!"];
console.log(myArray);

const myPersonaArray = [
    "Henry", // Name 
    32, // Age
    ["Program", "Hike", "Watch Movies"] // Hobbies
];
console.log(myPersonaArray[2]); // This will display hobbies

/*
* JavaScript Objects
*
* JSON - JavaScript Object Notation; for example, everything from line 22 - 26 inside the curly brackets and including the curly brackets themselves
*/

const myPersonObject = {  // We use curly braces for objects, not square brackets! | Javascript object (not necessarily 100% valid JSON.)
    "name": "Henry",
    "age": 32,
    "hobbies": ["Program", "Hike", "Watch Movies"] // This is also an array
};

console.log("My name is: " + myPersonObject.name);
console.log("I am " = myPersonObject.age + "years old.");
console.log("I like to " = myPersonObject.hobbies);

// Output JavaScript object ...
console.log(myPersonObject);
const validJSONString = JSON.stringify(myPersonObject);
// Output perfectly valid JSON string...
console.log(validJSONString); // This can be interpreted by other programming language/programs!
//JSON helps us communicate in a universal format/standard.
