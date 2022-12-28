//The let keyword is used to declare variables in JavaScript
let slideIndex = 0;
showSlides();

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides() {
    //The let keyword is used to declare variables in JavaScript
    let i;
    let slides = document.getElementsByClassName("mySlides");
    //for - loops through a block of code a number of times
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    //The increment ( ++ ) operator increments (adds one to) 
    //its operand and returns the value before or after the increment
    slideIndex++;
    //Use the if statement to specify a block of JavaScript code to be executed if a condition is true.
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    //The setTimeout () method allows you to execute a piece of code after a certain amount of time has passed
    setTimeout(showSlides, 2000); // Change image every 2000 milliseconds 2 seconds
  }




