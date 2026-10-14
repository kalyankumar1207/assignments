// Syntax to store the data in JavaScript
// Syntax : Declaration variable = Data;

//Operators : Operators are a set of special characters used in the JavaScript program to perform different types of operations.

//Based on the nature of the operation that we are going to perform, we can divide operators into five different categories.


//1. Arithmetic Operators
//2. Assignment Operators
//3. Comparison Operators
//4. Logical Operators
//5. Ternary Operators

//1. Arithmetic Operators : Arithmetic operators  are all about, set of special characters used to perform mathematical operators.

console.log("1. Arithmetic Operators");

//+ => Addition
//- => Subtraction
//* => Multiplication
// / => Division
//% => Modulus( Remainder of the division)
//++ => Increment(Increase the value of the variable by 1. )
//-- => Decrement(Decrease the value of the variable by 1. )



let a = 10;
let b = 20;

//a++ => Post-increment => Post execution of current line, increase the value.
//++a => Pre-increment => first, increment the value, then execute the current line.




console.log(++a); 
console.log(a);
console.log(--b);
console.log(b)


//2.Assignment operators => Set of special characters used to assign a value to the variable.   
console.log("2.Assignment operators");
// =
// +=
// -=
// *=
// /=
// %=

let i = 10;
console.log(i);

i+=5;   // i+=5 => i = i+5; 15
console.log(i);

i-=10;  //i-=10 => i = i-10; 15 - 10 = 5;
console.log(i);


i*=20;
console.log(i);

i/=5;
console.log(i);

i%=20;
console.log(i)



//3. Comparison Operators => set of special characters used in a programming language to compare two different values.
console.log("3.Comparison Operators")

// ==(Loose equality), ===( Strict equality), >, <, >=, <=, !=, !==


// ==(Loose equality) => Loose equity can verify only data without considering the data type. 

//=== ( Strict equality) => Strict equality can verify both as well datatypes.

let x = 10;//number
let y = 10;//number
let z = "10";//text

console.log(x+y);
console.log(x+z);

console.log(x==y);
console.log(x==z);


console.log(x===y);
console.log(x===z);


console.log(x==y);
console.log(x==z);


console.log(x!=z);


console.log(x!==z);



//4. Logical Operators => Set of special characters used to build logic by combining multiple condition together
console.log("4.Logical Operators")
// && => Logical AND +> It will return true if all condition are true.
// || => Logical OR => Will return if at least one condition is true.
// !  => Logical NOT => Will return opposite result.

let p = 10;
let q = 20;
let r = 30;

console.log(p<q && q>r); // true and false => false
console.log(p<q || q>r); // true or false => true
console.log(!(p<q || q>r));// not(true or false) => not (true) => false


//5. Ternary Operators => Ternary operator is a special character used to perform a conditional operation. it's s shorthand of an if-else condition statement.
console.log("5.Ternary Operators")

//Syntax ; let result = (condition) ? value-if-true ; value-if-false

let age = 17;

let result = (age >=18) ? "Eligible" : "Not Eligible";
console.log(result);