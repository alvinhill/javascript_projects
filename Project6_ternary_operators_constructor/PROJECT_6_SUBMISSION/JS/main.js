// STEP 140 PROJECT 6
//************************* TERNARY OPERATION *****************************************

function Age_Function() {
    // SET UP VARABLES
    var AGE, Can_Watch;
    // OUTPUT VARIABLE
    AGE = document.getElementById("AGE").value;
// USE TERNARY TO BRANCH TO THE RESULT
    Can_Watch = (AGE < 18) ? "You are too young" : "You are old enough";
    // OUTPUT THE RESULT
    document.getElementById("WATCH").innerHTML = Can_Watch + " to watch.";
}
//*********************** CONSTRUCTOR THIS and NEW *******************************************
// CREATE TV CLASS
class TV {
    // CREATE CONSTRUCTOR
    constructor(Brand, Model) {
        this.TV_Brand = Brand;
        this.TV_Model = Model;
    }
}
// CREATE OBJECTS
var Sam = new TV("Samsung ", "4001 ");
var George = new TV("LG ", "2200 ");
// SEND OBJECTS TO OUTPUT
function myFunction() {
    document.getElementById("Your_TV").innerHTML = "Sam owns a " + Sam.TV_Brand + Sam.TV_Model;
}

//********************** NESTED FUNCTIONS ********************************************
// "function1" simply accepts a variable name
function function1() {
    // "number" generates a random number and returns it
    function number() {
// using the math function and geting rid of the decimal places
        x = (Math.random() * 1000).toFixed(0);
        
        return x;
    }
    number();
  // assigning the varible  
  var name = "Sam"
// outputing the name and the activation code.
    document.getElementById("CODE").innerHTML = name+", your actvation code is: " + x;

}    

   
    



