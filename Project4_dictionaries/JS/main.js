function my_Dictionary() {
    var Animal = {
    Species: "Dog",
    Color: "Black",
    Breed: "Labrador",
    Age: 5 ,
    Sound: "Bark!"
    };
    document.getElementByid("Dictionary").innerHTML= Animal.Sound;
}