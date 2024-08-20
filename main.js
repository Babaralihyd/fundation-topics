// ===============================fundation=======================================
// =========Difference between console.log===========  
function sum(a, b) {
    console.log(a + b); // This will print the sum of a and b to the console
}
sum(20, 3); // Output in console: 23
//===========return keyword in functions=========
function add(a, b) {
    return a + b; // This will return the sum of a and b
}
var result1 = add(2, 3); // sum now holds the value 5
console.log(result1); // Output in console: 5
//================Function default parameters===========
function fundef(name, greeting) {
    if (name === void 0) { name = 'imran'; }
    if (greeting === void 0) { greeting = 'Hello'; }
    console.log("".concat(greeting, ", ").concat(name, "!"));
}
fundef(); // Output: Hello, Guest!
//===========Function Optional Parameter with condition=====
// Example 1 
function greet(name, message) {
    if (!message) {
        message = "Hello";
    }
    return "".concat(message, ", ").concat(name, "!");
}
console.log(greet("Babar")); // Output: Hello, Babar
// Example 2
function Test(studentName) {
    var TestScore = 60;
    var result = TestScore === 40 ? "pass in GIAIC " : "fail in  GIAIC  ";
    return "".concat(studentName, " , ").concat(result);
}
console.log(Test('Ali'));
// =====================Types of Function========================
console.log("========Types of Function===========");
// Regular function 
function regularfun(input) {
    return input;
}
console.log(regularfun("This is  Regular function "));
// Name function 
var family = function namefun(fun) {
    return fun;
};
console.log(family('This is  Name function '));
//================Arrow Function================
//Example 1
//  Here is a basic example of an arrow function
var Arrowfun = function (name, message) {
    if (message === void 0) { message = "How are you ?"; }
    return "".concat(message, ", ").concat(name, "!");
};
console.log(Arrowfun("Imran ")); // Output: How are you ? Imran!
// Example 2
// For a single expression, you can simplify it further:
var singleExp = function (name, message) {
    if (message === void 0) { message = "Dear"; }
    return "".concat(message, ", ").concat(name, "!");
};
console.log(singleExp("bilal")); // Output: Dear, bilal!
// Example 3
// No Parameters
// If the arrow function does not take any parameters, you need to use empty parentheses:
var sayHello = function () { return "Hellow where are you go ?"; };
console.log(sayHello()); // Output:Hellow where are you go ?
// Example 4
// Single Parameter
var Square = function (num) { return Math.pow(num, 2); };
console.log(Square(3)); // Output: 
// 
// ===========Anonymous Function==========
// An anonymous function is simply a function without a name. 
var Anonymous = function (girlsname, message) {
    if (message === void 0) { message = "Hello Madam "; }
    return "".concat(message, ", ").concat(girlsname, "!");
};
console.log(Anonymous("Nayab khan ")); // Output: Hello, Nayab khan !
// ====Immediately invoked function expression=====
// The basic syntax for an IIFE is:
// syntax 
(function () {
    // Function body
})();
// Example 1
(function () {
    console.log("This function runs immediately!");
})();
// Example 2
var result = (function (a, b) {
    return a + b;
})(12, 8);
console.log(result); // Output: 20
// Example 3 
// IIFE with Arrow Function
var D = (function (a, b) { return a / b; })(30, 4);
console.log(D); // Output: 7.5
// ===========Recursive function=============
//   Example 1
// function factorial(n: number): number {
//     if (n === 0) { // Base case
//         return 1;
//     } else { // Recursive case
//         return n * factorial(n - 1);
//     }
// }
// console.log(factorial(6));  // Output: 120
// console.log(factorial(12));  // Output: 1
// ++
// xyz(0)
// Example 2
// function fibonacci(n: number): number {
//     if (n === 0) { // Base case
//         return 0;
//     } else if (n === 1) { // Base case
//         return 1;
//     } else { // Recursive case
//         return fibonacci(n - 1) + fibonacci(n - 2);
//     }
// }
// console.log(fibonacci(5));  // Output: 5
// console.log(fibonacci(10)); // Output: 55
// Example 3
// function factorial(n: number, accumulator: number = 1): number {
//     if (n === 0) {
//         return accumulator; // Base case
//     } else {
//         return factorial(n - 1, n * accumulator); // Recursive case
//     }
// }
// console.log(factorial(5));  // Output: 120
