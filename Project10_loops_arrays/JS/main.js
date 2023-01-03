//Defines and names the function
function count_To_Ten() {
    //Names variable
    var Digit = "";
    //Names variable
    var X = 1;
    //Begins while loop
    while (X < 11) {
      Digit += "<br>" + X;
      X++;
    }
    //Returns a reference to the first object with the specified value of the ID attribute.
    document.getElementById("Counting_to_Ten").innerHTML = Digit;
}
//Names variable, creates list
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
//Names variable
var Content = "";
//Names variable
var Y;
//Names and defines function
function for_Loop() {
  //Begins for loop  
  for (Y = 0; Y < Instruments.length; Y++) {
    //The addition assignment (+=) operator adds the value 
    //of the right operand to a variable and assigns the result to the variable
    Content += Instruments[Y] + "<br>";
  //Ends for loop  
  }
    //Returns a reference to the first object with the specified value of the ID attribute.
    document.getElementById("List_of_Instruments").innerHTML = Content;
}
//Names variable
var x = 82;
//a function that is used to display some strings in the output of HTML web pages
document.write(X);
{
  //Names variable
  var X = 33;
  //a function that is used to display some strings in the output of HTML web pages
  document.write("<br>" + X);
}
//a function that is used to display some strings in the output of HTML web pages
document.write("<br>" + X);

//let allows you to declare variables that are limited to the scope of a block statement, 
//or expression on which it is used, unlike the var keyword, which declares a variable globally, 
//or locally to an entire function regardless of block scope.
//The prompt() method displays a dialog box that prompts the user for input. 
//The prompt() method returns the input value if the user clicks "OK"
let fruit = prompt("Which fruit to buy?", "apple");

// the name of the property is taken from the variable fruit
let bag = { //Opens block statement
  //The declared variable limited to the scope of a block statement
  [fruit]: 5, 
//Closes block statement
};
// 5 if fruit="apple"
alert( bag.apple );

function car_pics() {
  var Car_Picture = [] ;
  Car_Picture[0] = "parked";
  Car_Picture[1] = "driving";
  Car_Picture[2] = "hood up";
  Car_Picture[3] = "burn out";
  document.getElementById("Car").innerHTML = "In this picture, the car is " +
    Car_Picture [1] + ".";
}
