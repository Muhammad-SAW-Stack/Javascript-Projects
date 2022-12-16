function not_function() {
    document.getElementById("Not").innerHTML = !(20 > 10);
}
/* The ! (not) operator checks whether or not something is true. 
If ___ is false, “true” will be returned. 
To do this, we would first add this to our HTML code:
<p id="Not" onclick="not_Function()">Click Here!</p>*/

function not_Function() {
    document.getElementById("Not").innerHTML = !(5 > 10);
}
/*This code is if we wanted a double negative*/