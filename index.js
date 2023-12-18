alert("Hello") //shows pop-up to our website

prompt("What is your name?");  //Also takes value from the user

console.log(prompt("What is your name?") );
console.error("We are having error");
console.warn("We are having warning");


//Variables:
// 1. var -> The variables that are defined with var statement have function scope.(Hoisting is allowed with var.It is used before ES6(not recommended))
// 2. let -> The variables that are defined with let statement have block scope.(Hoisting is not allowed with let.)
// 3. const -> Variables defined with const cannot be Redeclared , Reassigned and have Block Scope

var a = "JavaScript"
{
    var a = "FrontEnd";
    console.log(a); // Output: FrontEnd
}

console.log(a) // Output: FrontEnd


let b = "JavaScript"
{
    let b = "FrontEnd";
    console.log(b); // Output: FrontEnd
}

console.log(b) // Output: Javascript


//how to check typeOf variable

const c =1;
let d = "476586fhgnjhgj";
console.log(typeof c)
console.log(typeof d)


//concatenation

var age = prompt("what is your age?")
console.log("He is " + age + " years old")

