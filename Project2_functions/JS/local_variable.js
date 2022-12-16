function Add_numbers_1() {
    var X = 10;
    document.write(20 + X + "<br>");
}
function Add_numbers_2() {
    document.write(X + 100);
    }
Add_numbers_1();
Add_numbers_2();

//Let's say you wrote the above code and didn't understand why Add_numbers_2 didn't display a result. We could use the console.log() method to help us
//debug our code as follows:
function Add_numbers_1() {
    var X = 10;
    console.log(15 + X);
}
function Add_numbers_2() {
console.log(X + 100);
}
Add_numbers_1();
Add_numbers_2();