function My_First_Function() {
//Defines function and names it. A JavaScript function is a block of code designed to perform a particular task. 
//A JavaScript function is executed when "something" invokes it (calls it).    
    var str = "This text is green!";
    //This line declares the variable and sets its datatype as a string
    var result = str.fontcolor("green");
    //The fontcolor() method is used to display a string in a specified color.
    document.getElementById("Green_Text").innerHTML = result;
    //Putting the value of result into HTML element with "Green Text" Id.
    //The Document method getElementById() returns an Element object representing 
    //the element whose Id property matches the specified string.
}
function My_Function () {   
    var sentence = "I am learning<br>"; 
    sentence += "a lot from this book!";
    document.getElementById("Concatenate").innerHTML = sentence
}


