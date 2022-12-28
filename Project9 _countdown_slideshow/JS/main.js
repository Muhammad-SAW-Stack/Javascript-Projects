
//This line defines and names the function
function countdown() {
    //Names variable
    var seconds = document.getElementById("seconds").value;

    //This line defines and names the function 
    function tick() {
        seconds = seconds - 1;
        timer.innerHTML = seconds;
        //The statement "setTimeout(tick, 1000);" 
        //means that the program is pausing for 1,000 milliseconds 
        //(i.e., 1 second).
        setTimeout(tick, 1000);
    //This code is an if statement using double equal sign
    //when the next second is going to be -1, an alert is given 
    if(seconds == -1){
        //This is the alert given when the timer is finished
        alert("Time's up!");
    //Ends if statement
    }
         //Ends function 
         }
    tick();
//Ends function
}

