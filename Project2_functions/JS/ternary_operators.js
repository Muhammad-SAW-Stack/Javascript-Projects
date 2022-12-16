/*Ternary means “made up of three parts.” 
A ternary operator operates on three values. 
It can be used to assign a value to a variable based on a condition. 
This is also referred to as a conditional operator in that it assigns 
a value to a variable based on a condition.
The syntax of this is:
Name_of_variable = (condition) ? Value_1:Value_2*/

document.write(Bigger = (5 > 1) ? "Left number is bigger":"Right number is bigger");

/*In this code, we said that if it’s true that 5 is bigger than 1, 
display “Left number is bigger.” If you change the numbers or flip 
the symbol to <, we can change the outcome of our code to false. As a reminder, 
the document.write method is not a part of the syntax of the ternary operator, 
it is used to write information to the document.
There are more elaborate actions we can take with ternary operators. 
As an example, we’d write the following within the <body> element in our HTML file:

<p>Riders must be at least 52 centimeters tall to ride.</p>
<input id="Height" value"52 />
<button onclick="Ride_Function()">Click here</button>
<p id="Ride"></p>*/

function Ride_Functioin() {
    var Height, Can_Ride;
    Height = document.getElementById("Height").Value;
    Can_Ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_Ride + " to ride.";
}