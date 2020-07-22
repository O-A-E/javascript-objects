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

/**
* JavaScript Objects
*
* JSON - JavaScript Object Notation; for example, everything from line 22 - 26 inside the curly brackets and including the curly brackets themselves
*/

const myPersonObject = {  // We use curly braces for objects, not square brackets! | Javascript object (not necessarily 100% valid JSON. To make it JSON, add quotation marks around variables!)
    "name": "Henry",
    "age": 32,
    "hobbies": ["Program", "Hike", "Watch Movies"] // This is also an array
};

console.log("My name is: " + myPersonObject.name);
console.log("I am " + myPersonObject.age + "years old.");
console.log("I like to " + myPersonObject.hobbies);
myPersonObject.age = myPersonObject.age + 1; // Happy birthday, Henry!
console.log

// Output JavaScript object ...
console.log(myPersonObject);
const validJSONString = JSON.stringify(myPersonObject);
// Output perfectly valid JSON string...
console.log(validJSONString); // This can be interpreted by other programming language/programs!
//JSON helps us communicate in a universal format/standard.

/**
 * Class
 * 
 * Classes are like blueprints! We make a guide/definition on what each person will have inside.
 * we put constructors in classes to help us build each class
 */

// Start our blueprint with teh "class" keyword.
class Person {
    // We can use constructors to set the base properties for our objects (name/age/hobbies in this case.)
    constructor(name = "", age = 0, hobbies = []) {// Default values set in our parameters (name is a parameter, what is after = is our value)
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
}

// Let's make some new people!
const sarah = new Person; // Will only show default values
console.log(sarah);

// Note, when we pass arguments, the default parameters are overwritten!
const jia = new Person("Jia Then", 800, ["Sleep", "Cosplay"]); //can ctrl + click on Person to automatically go back to where Person was defined!
console.log(jia);
jia.height = "7"; // We can/update and add new values (but should we?? Probably not!)
console.log(jia);

// Values kept inside an object are considered "properties"
// Sets of instructions kept inside an object are considered "methods."
