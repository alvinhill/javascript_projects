// THIS IS STEP 102 //







// CREATE FUNCTION //
function myfunct1() {
    // CREATE KEY - VALUE PAIR //
// KEYS ARE: BRAND, MAKE, TRANS, YEAR and COLOR
// VALUES ARE: CHEVY, WANKER,AUTO and RED    
    var Car = {
        Brand: "Chevy",
        Make: "Wanker",
        Trans: "Auto",
        year: 500,
        Color:"Red",
         
    };
// DELETING THE COLOR VALUE    
delete Car.Color;
// SEND THE OUTPUT TO THE BUTTON AND THE PARAGRAPH TAG //
document.getElementById("Dictionary").innerHTML = "The car color is: "+ Car.Color;

}