




function CONSTANT_FUNCTION() {
    const tv = { brand: "samsung", color: "blue", acces: " new remote",type:" color" };
    

    document.getElementById("CONSTANT").innerHTML = "1.) The color of the " + tv.brand + " is " + tv.color+"<br>";
    tv.color = "yellow";
    tv.brand = "sharp";
"<br>"
    document.getElementById("CONSTANT").innerHTML = "2.) The color of the " + tv.brand + " is " + tv.color+" It has a "+tv.type;




}
   



