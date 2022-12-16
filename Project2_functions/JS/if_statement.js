if (l < 2) {
    document.write("The left number is smaller than the number on the right.")
}

function get_Date() {
    if (new Date().getHours() < 18) {
    document.getElementById("Greetings").innerHTML = "How are you today?";
    }
}
