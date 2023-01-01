// The addition ( + ) operator produces the sum of 
//numeric operands or string concatenation. Begins function.
function addition_Function() {
    //Names and defines variable.
    var addition = 2 + 2;
    //The Document method getElementById() returns an Element object 
    //representing the element whose id property matches the specified string. 
    //Since element IDs are required to be unique if specified, 
    //they're a useful way to get access to a specific element quickly.
    document.getElementById("Math").innerHTML = "2 + 2 = " + addition;
//Ends function
}

//The division ( / ) operator produces the quotient 
//of its operands where the left operand is the dividend 
//and the right operand is the divisor. Begins function.
function division() {
    //Names and defines variable.
    var simple_Math = 48 / 6;
    //The Document method getElementById() returns an Element object 
    //representing the element whose id property matches the specified string. 
    //Since element IDs are required to be unique if specified, 
    //they're a useful way to get access to a specific element quickly.
    document.getElementById("Math").innerHTML = "48 / 6 = " + simple_Math;
//Ends function.
}

//The multiplication assignment ( *= ) operator 
//multiplies a variable by the value of the right operand 
//and assigns the result to the variable. Begins function.
function multiplication() {
    //Names and defines variable.
    var simple_Math = 6 * 8;
    //The Document method getElementById() returns an Element object 
    //representing the element whose id property matches the specified string. 
    //Since element IDs are required to be unique if specified, 
    //they're a useful way to get access to a specific element quickly.
    document.getElementById("Math").innerHTML = "6 x 8 = " + simple_Math;
//Ends function.
}

//The subtraction operator converts both operands to 
//numeric values and carries out either number subtraction 
//or BigInt subtraction. Begins function.
function subtraction_Function() {
    //Names and defines variable.
    var Subtraction = 5 - 2;
    //The Document method getElementById() returns an Element object 
    //representing the element whose id property matches the specified string. 
    //Since element IDs are required to be unique if specified, 
    //they're a useful way to get access to a specific element quickly.
    document.getElementById("Math").innerHTML = "5 - 2 = " + Subtraction;
//Ends function.
}

//The modulo operator is represented by the % character in JavaScript. 
//It returns the remainder of two integers that have been divided. 
//As the remainder will always be less than the divisor, 
//modulo operators can be very useful in restricting the range of outputs.
//Begins function.
function modulus_Operator() {
    //Names and defines variable.
    var simple_Math = 25 % 6;
    //The Document method getElementById() returns an Element object 
    //representing the element whose id property matches the specified string. 
    //Since element IDs are required to be unique if specified, 
    //they're a useful way to get access to a specific element quickly.
    document.getElementById("Math").innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_Math;
//Ends function.
}

//Names and defines variable.
var X = 5;
//Tells the variable X(5) that it is to be incremented by 1.
X++;
//Prints the variable X, after it's been incremented.
document.write(X);
//Inserts a line break to separate the numbers.
document.write("<br>");
//Names and defines variable.
var X = 5.25;
//Tells the variable X(5.25) to decrement by 1.
X--;
//Prints the variable X, after it's had the necessary decrement.
document.write(X);



