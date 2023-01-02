//This initializes our string so it can get passed from 
    //function to function, growing line by line into  a full receipt
function getReceipt() {
    //names and defines variable, which will use 'Header 3" styling.
    var text1 = "<h3>You Ordered:</h3>"
    //names and defines variable
    var runningTotal = 0;
    //names and defines variable
    var sizeTotal = 0;
    //names and defines variable
    var sizeArray = document.getElementsByClassName("size");
    //The for loop is an iterative statement which you use to check 
    //for certain conditions and then repeatedly execute a block of code 
    //as long as those conditions are met.
    for (var i = 0; i < sizeArray.length; i++) {
        //Use if to specify a block of code to be executed, 
        //if a specified condition is true 
        if (sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value;
            text1 = text1+selectedSize+"<br>";
        }
    }
    if (selectedSize === "Personal Pizza") {
        sizeTotal = 6;
    //Use the else if statement to specify a new condition if the first condition is false.
    } else if (selectedSize === "Small Pizza") {
        sizeTotal = 8;
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 14;
    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 16;
    }
    runningTotal = sizeTotal;
    console.log(selectedSize+" = $"+sizeTotal+".00");
    console.log("size text1: "+text1);
    console.log("subtotal: $"+runningTotal+".00");
    //these variables will get passed on to each function
    getTopping(runningTotal,text1);
};

function getTopping(runningTotal, text1) {
    var toppingTotal = 0;
    var selectedTopping = [];
    var toppingArray = document.getElementsByClassName("toppings");
    for (var j = 0; j < toppingArray.length; j++) {
        if (toppingArray[j].checked) {
            selectedTopping.push(toppingArray[j].value);
            console.log("selected topping item: ("+toppingArray[j].value+")");
            text1 = text1+toppingArray[j].value+"<br>";
        }
    }
    var toppingCount = selectedTopping.length;
    if (toppingCount > 1) {
        toppingTotal = (toppingCount - 1);
    } else {
        toppingTotal = 0;
    }
    runningTotal = (runningTotal + toppingTotal);
    //The console.log() method outputs a message to the web console.
    console.log("total selected topping items: "+toppingCount);
    console.log(toppingCount+" topping - 1 free topping = "+"$"+toppingTotal+".00");
    console.log("topping text1: "+text1);
    console.log("Purchase Total: "+"$"+runningTotal+".00");
    document.getElementById("showText").innerHTML=text1;
    document.getElementById("totalPrice").innerHTML = "</h3>Total: <strong>$"+    
        runningTotal+".00"+"</strong></h3>";
};