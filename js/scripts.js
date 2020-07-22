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
class Person 
    {
    // We can use constructors to set the base properties for our objects (name/age/hobbies in this case.)
    constructor(name = "", age = 0, hobbies = []) {// Default values set in our parameters (name is a parameter, what is after = is our value)
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }

    // We can add methods to a class, they are like "functions," but they are run from objects instead!
    sayHello() // sayHello is a method!
    { 
        // Create an element.
        const helloElement = document.createElement("P");
        // Fill in the text of the element (using template literal.)
        helloElement.textContent = `Hello, my name is ${this.name}!`; // called a string plate literal; this calls on the current name property!
        // Add the new element to the body of our webpage.
        document.body.appendChild(helloElement);
    }
    birthday() // We are defining this method to add 1 to the age property.
    { 
        this.age = this.age + 1 // MUST say "this" so script knows we are calling THIS current object's name
        // !!! typing just "age" would cause JS to look for a variable (that is not here!)
    }
    // Method to add a enw hobby to our "this.hobbies" array property.
    addHobby ( hobby = "" ) // Set the parameter to a default of blank by using ""
    {
        // Check if the hobby is filled in.
        if (hobby.length > 0)
        { // If it is filled in, push it to the array!
            this.hobbies.push(hobby); // Push will append a value onto an array!
        }
        else
        { // If it is NOT filled in, say no in the console :( 
            console.log("Sorry, empty hobby! Please try again.");
        }
    }
}


// Let's make some new people!
const sarah = new Person; // Will only show default values
console.log(sarah);
sarah.sayHello(); // This will call upon a method to execute.

// Note, when we pass arguments, the default parameters are overwritten!
const jia = new Person("Jia Then", 800, ["Sleep", "Cosplay"]); //can ctrl + click on Person to automatically go back to where Person was defined!
console.log(jia);
jia.height = "7"; // We can/update and add new values (but should we?? Probably not!); height is a property or value
console.log(jia);
// Running the hello method.
jia.sayHello();
// Running the birthday method.
jia.birthday(); // Now she is 801!
console.log ( "Jia is now... " + jia.age + " years old!");

// Values kept inside an object are considered "properties" --> similar to variables!
// Sets of instructions kept inside an object are considered "methods." --> similar to functions!
