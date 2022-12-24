
    /*Concatenating a string and numbers.*/
    document.write("\"Be who you are and say what you feel,"
    + " because those who mind don\'t matter and those who matter don\'t mind.\""
    + "-Dr. Seuss" + "-Born March 2, 1904");
    document.write("<br>");
    /*Double equal sign: In JavaScript, to obtain the output “true”, we’d write:*/
    document.write(10 == 10);
    /*This code starts a new line.*/
    document.write("<br>");
    /*For “false”, we’d write:*/
    document.write(3 == 11);
     /*This code starts a new line.*/
    document.write("<br>");
    /*Triple equal sign.*/
    /*This line assigns the variable x*/
    X = 10; 
    /*This line assigns the variable y*/
    Y= 10;
    /*This line outputs the result*/
    document.write(X === Y);
    /*This code starts a new line.*/
    document.write("<br>");
    /*This returns “true”. To return “false” we would write:*/
    var X = "82";
    var Y = "82";
    document.write(X === Y);
    /*This code starts a new line.*/
    document.write("<br>");
    /*Why? Because the data types (number and string respectively)
    were not the same.*/
    /*This works for all data types, including strings, like:*/
    A = "Magnus";
    B = "Magnus";
    document.write(A === B);
    /*This would return “true”.*/
    /*This code starts a new line.*/
    document.write("<br>");
    var A = "This is a string<br>";
    document.write(A);
    document.write(typeof "2022");
    /*This code starts a new line.*/
    document.write("<br>");

    /*The && operator determines the logic between values or variables, 
    such as verifying that _ and _ are true*/
    document.write(5 > 2 && 10 >4);
    /*code returns "true" because five is greater than two, 
    and ten is greater than four*/
    /*This code starts a new line.*/
    document.write("<br>");

    /*The ||(or) operator works this way:*/
    document.write(5 > 10 || 10 > 4);
    /*This would return "true" because, while 5 is not greater than 10, 
    10 is greater than 4. We can make it return "false" 
    with the following code since neither is true:*/
    document.write(5 > 10 || JO > 20);
    
    /*The !{not) operator checks whether or not something is true. 
    If_ is false, "true" will be returned.*/
    function not_Function() {
    document.getElementById("Not").innerHTML =! (20 > 10);
}
/*This would return "false".*/

/*If you wanted a "double negative," 
you would write the following in your JavaScript code:*/
function not_Function() {
    document.getElementById("Not").innerHTML =! (5 > 10);
}
/*This would return true.*/

document.write("\"Be who you are and say what you feel,"
+ " because those who mind don\'t matter and those who matter don\'t mind.\""
+ "-Dr. Seuss" + "-March 2, 1904");
