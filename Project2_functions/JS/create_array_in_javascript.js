function cat_pics() {
    var Cat_Picture = [];
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("Cat").innerHTML = "In this picture, the cat is " +
        Cat_Picture[2] + ".";
}

/* In our HTML code, we'd include a link to our .js file and the following
<p id="Cat"></p>
<button onclick="cat_pics()">Click here.</button>
This would display the sentence:

In this picture, the cat is eating.

In the above array “Cat_Picture” is the object. 0, 1, 2 and 3 are the indexes and “sleeping”, 
“playing”, “eating” and “purring” are the properties of the object.*/