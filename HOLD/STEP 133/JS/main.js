// THIS IS STEP 133 //
// STEP 132 IS WRONG SHOULD BE "CLASS" INSTED OF VEHICLE

// ALSO SHOULD BE CONSTRUCTOR INSEAD OF FUNCTION
class Vehicle {
    constructor(Make, Model, Year, Color) {
        this.Vehicle_Make = Make;
        this.Vehicle_Model = Model;
        this.Vehicle_Year = Year;
        this.Vehicle_Color = Color;
    }
}

var Jack = new Vehicle("Dodge ", "Viper ", 2023, "Red ");
var Emily = new Vehicle("Jeep ", "Trail Hawk ", 2019, "Blue ");
var Erik = new Vehicle("Ford ", "Pinto ", 1972, "Brown ");

function myFunction() {
 
  document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Model + Erik.Vehicle_Color + "Made in " + Erik.Vehicle_Year;
 
}


