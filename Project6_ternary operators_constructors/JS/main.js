function Ride_Function() {
    var Height , Can_ride ;
    Height = document.getElementByid("Height" ).value;
    Can_ride = (Height < 52) ? "You are too short" : "You are tall enough";
    document.getElementByid("Ride").innerHTML = Can_ride + " to ride.";
}

function count_Function() {
    document.getElementByid("Counting").innerHTML = Count();
    function Count() {
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}