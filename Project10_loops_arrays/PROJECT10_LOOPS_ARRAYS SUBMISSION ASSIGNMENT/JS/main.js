// SHOW WHILE LOOP COUNT TO 10
function WHILE_LOOP() {
    // ASSIGN VARIABLES
    var age = ""
    x = 1;
    // SET UP LOOP
    while (x < 11) {
        // ASSIGN X TO AGE AND INCREMENT X
        age += "<br>" + x;
        x++;
    }
    // OUTPUT
    document.getElementById("while_OUTPUT").innerHTML = age;
}
// **********************************************************************************
// SHOWS ARRAY WITH DAYS OF THE WEEK
// SHOWS FOR LOOP WIHT OUTPUT
// CREATE ARRAY WITH DAYS OF WEEK
var days = ["monday", "tuesday", "wedneday", "thurday", "saturday", "sunday", "monday"];
// SETUP VARIABLES
var content = "";
var x;
// SETUP FOR LOOP
function FOR_LOOP() {
    for (x = 0; x < days.length; x++) {
        content += days[x] + "  " + x + "<br>";
    }
    // OUTPUT
    document.getElementById("day_OUTPUT").innerHTML = content;
}
// **********************************************************************************
// SHOWS OBJECT WITH LET KEYWORD AND OUTPUT

// CREATE FUNCTION
function OBJECT_FUNCTION() {
// CREATE OBJECT WITH LET KEYWORD
    let plane = { brand: "boing", type: "747", service: " civil",color:" grey" };
// OUTPUT
    document.getElementById("OUTPUT").innerHTML = "1.) The plane is " + plane.brand + " and is " + plane.color+"<br>";
}
   



