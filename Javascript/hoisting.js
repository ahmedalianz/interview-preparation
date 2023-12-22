// hoisting is moving variables and functions declarations above their containing scope
// so they can be used before they are declared in code .
// var is hoisted and initialized with undefined

console.log(myVar); // Outputs: undefined
var myVar = 10;
console.log(myVar); // Outputs: 10

// function is hoisted by it's declaration and it's definition

greet(); // Outputs: Hello!
function greet() {
  console.log('Hello!');
}

// let and const are also hoisted but they are in temporal dead Zone until initialization

console.log(myVar); // ReferenceError: Cannot access 'myVar' before initialization
let myVar = 10;
