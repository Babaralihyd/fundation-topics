// ===============================fundation=======================================


// =========Difference between console.log===========  



function sum(a:number , b:number) {

    console.log(a + b); // This will print the sum of a and b to the console
  }



  sum(20 , 3); // Output in console: 23
  
//===========return keyword in functions=========

function add(a, b) {

    return a + b; // This will return the sum of a and b

}
  
  let result1= add(2, 3); // sum now holds the value 5
  console.log(result1); // Output in console: 5
  


//================Function default parameters===========


  function fundef(name = 'imran', greeting = 'Hello') {
    console.log(`${greeting}, ${name}!`);
  }
  
  fundef(); // Output: Hello, Guest!




//===========Function Optional Parameter with condition=====

// Example 1 
function greet(name: string, message?: string): string {
    if (!message) {
        message = "Hello";
    }
    return `${message}, ${name}!`;
}

console.log(greet("Babar"));  // Output: Hello, Babar


// Example 2

function Test(studentName ){
 
    let TestScore = 60 ;
    let  result  = TestScore === 40  ?"pass in GIAIC " : "fail in  GIAIC  "
return `${studentName} , ${result}`    

}console.log(Test('Ali' ));

// =====================Types of Function========================

console.log( "========Types of Function===========" )


// Regular function 
function regularfun(input :string){
    
    return input 
    
}console.log(regularfun("This is  Regular function "));



// Name function 

const family = function namefun(fun :string) {
    return fun

}
console.log(family('This is  Name function '));



//================Arrow Function================

//Example 1
//  Here is a basic example of an arrow function

 const Arrowfun = (name: string, message: string = "How are you ?"): string => {
    return `${message}, ${name}!`;
};

console.log(Arrowfun("Imran "));  // Output: How are you ? Imran!




// Example 2
// For a single expression, you can simplify it further:

const  singleExp = (name: string, message: string = "Dear"): string => `${message}, ${name}!`;

console.log(singleExp("bilal"));  // Output: Dear, bilal!

// Example 3
// No Parameters
// If the arrow function does not take any parameters, you need to use empty parentheses:

const sayHello=():string => "Hellow where are you go ?"

console.log(sayHello());  // Output:Hellow where are you go ?


// Example 4
// Single Parameter
let Square = (num :number) => num**2
console.log(Square(3));  // Output: 



// 






// ===========Anonymous Function==========
// An anonymous function is simply a function without a name. 

const Anonymous = function(girlsname: string, message: string = "Hello Madam "): string {
    return `${message}, ${girlsname}!`;
};

console.log(Anonymous("Nayab khan "));  // Output: Hello, Nayab khan !



// ====Immediately invoked function expression=====
// The basic syntax for an IIFE is:

// syntax 
(() => {
    // Function body
})
();


// Example 1
(function() {
    console.log("This function runs immediately!");
})();



// Example 2

const result = (function(a: number, b: number): number {
    return a + b;
})(12, 8);

console.log(result);  // Output: 20




// Example 3 
// IIFE with Arrow Function

const D= ((a: number, b: number): number => a / b)(30, 4);

console.log(D);  // Output: 7.5



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



// Example 


function last (n :number, v:number){
    return n + v
        
}

const value = last(3,5);
console.log(value);
 



























