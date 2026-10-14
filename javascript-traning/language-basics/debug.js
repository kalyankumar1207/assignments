//debugging in javascript

//Debugging is the process of executing a program to identify the errors and to resolve issues

console.log("Executing Line 1");
console.log("Executing Line 2");
console.log("Executing Line 3");    
console.log("Executing Line 4");
sumOfNumbers(5, 10);
console.log("Executing Line 6");
console.log("Executing Line 7");
console.log("Executing Line 8");
console.log("Executing Line 9");
console.log("Executing Line 10");

// Debugging the program step by step in visual studio code

//1. Add the break point before the line where you are getting the error (Click on the line number where you want tO manually start the execution.)
//2.Run the program in debug mode.



// continue (f5) : Continue the auto execution till the next breakpoint.
// stop (shift+f5) : Stop the debugging session,
// restart (ctrl+shift+f5) : Restart the debugging session.

// step over (f10) : Execute the current line and move to the next line.
// step into (f11) : Go inside the step to understand the background logic.
// step out (shift+f11) : Complete the execution of background logic and go back to the main program.












function sumOfNumbers(a, b) {
    let c = a + b;
    console.log(c);
}