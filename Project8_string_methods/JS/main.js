
//The slice() method returns selected elements 
//in an array, as a new array. 
//The slice() method selects from a given start, 
//up to a (not inclusive) given end.
function to_slice() {
//The let keyword is used to declare variables in JavaScript.
let text = "Hello world!";
let result = text.slice(0, 5);
//The Document method getElementById() 
//returns an Element object representing the element 
//whose id property matches the specified string.
document.getElementById("demo").innerHTML = result;
}

//The to Precision() method formats a number to a specified length.//
function precision_Method() {
    //Defines the variable
    var X = 12938.301287376112;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}

//Number methods assist you in working with numbers. 
//There are several types - one is the "toString()" 
//method that returns a number as a string.
function string_Method() {
    var X =182;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

//The concat() method concatenates {connects) two or more st rings.//
function full_Sentence() {
    //Defining each variable
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence .";
    //Complete sentence varaible
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    //Returns the element object which matches the ID 'concatenate'.
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}