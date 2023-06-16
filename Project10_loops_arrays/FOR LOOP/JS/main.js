
var days = ["monday", "tuesday", "wedneday", "thurday", "saturday", "sunday", "monday"];
var content = "";
var x;
function FOR_LOOP() {
    for (x = 0; x < days.length;x++)    
{
        content += days[x] + "  " + x  + "<br>";
}
    document.getElementById("OUTPUT").innerHTML= content;
}
   



