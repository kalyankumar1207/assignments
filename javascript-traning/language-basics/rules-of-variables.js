// How to store data in JavaScript?

// Syntax : Declaration Variable = Data;

//Variable: A variable is nothing but of the memory locations where we are going to store the data. At a later point in time, this is going to be used to access the data stored in that memory location.


// Rules of variables in JavaScript:


let empName = "Kalyan";

//1. Variable must not be a reversed keyword.
//let const = "Kalyan";


//2. Variable must not be literal(true, false, null, undefined, null).
//let true = "Kalyan";

//3. Variable must not contain white space.
//let emp Name = "Kalyan";

//4. Variable must not begin with a number.
//let 1empName = "Kalyan";

//5. Variable must not contain special characters except $ and _.
//let emp@Name = "Kalyan";

//6. Variable must be unique always.
//let empName = "Kalyan";

console.log(empName);


//Standards to be followed

//1.The variable should be meaningful and self-explanatory.
let getRank = 2233;

//2. Variable name must follow the standard naming convention.

// Regular variable or methods functions to be declared with camel case.
//Ex:
let myFullNameIs ="Komirisetty Kalyan Kumar";

//when we are going to store any constant value which is fixed, then we are going  to use upper-case letters along with an underscore to separate each word in the variable name.
const MAX_EMPLOYEE_NEEDED = 10;

//we declare classes. we are going to use Pascal case.(Starts with an upper-case letter,followed by camel casing. )
class CommonMethods {
    
}