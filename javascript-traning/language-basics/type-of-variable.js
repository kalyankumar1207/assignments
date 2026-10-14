// How to store data in JavaScript?

//Syntax: var variableName = Data;

//Variable: A variable is nothing but of the memory locations where we are going to store the data. At a later point in time, this is going to be used to access the data stored in that memory location.


// In JavaScript, Variables are divided into two different categories.

//1.Local variable => The variable declared inside the block => can be accessed only inside the block.
//2.Global variable => The variable declare outside of the block => Can be accessed everywhere

let empName = "Kalyan"; //global

{
    let empAge = 27;// local
    // console.log(empName); //able  to access
    // console.log(empAge); // able to access
}
console.log(empName);
console.log(empAge);

















