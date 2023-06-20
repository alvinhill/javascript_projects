// STEP 128 TERNARY OPERATORS //

function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;

    Can_ride = (Height < 52) ? "You are to short" : "You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";

}
