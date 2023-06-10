// THIS IS STEP 75 //






// CREATE FUNCTION //
function myfunct1() {
    // ASSIGN VARIBLE //
    var Car = {
        Brand: "Chevy",
        Make: "Wanker",
        Trans: "Auto",

        year: 500,
        Color:"Red",
         
    };
  delete Car.Color;
      // SEND THE OUTPUT TO THE BUTTON AND THE PARAGRAPH TAG //
    document.getElementById("Dictionary").innerHTML =  Car.Color;

}