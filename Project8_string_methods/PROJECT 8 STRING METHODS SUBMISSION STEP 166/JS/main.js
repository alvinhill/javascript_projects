// THIS IS STEP 166 //

// SHOW ONLY 6 DIGITS OF THE LONG NUMBER
var x = 14.77225541;
function numtopre() {

  document.getElementById("OUTPUTt").innerHTML = x.toPrecision(6);

}
//***************************************************************

// CREATE STRING FROM NUMBER FOT THE NEXT FUNCTION
var XX = 77442255;
function numtostr() {

    document.getElementById("OUTPUTt1").innerHTML = XX.toString();

}

//*********************************************

// CONCATANATE WORDS INTO A SENTENCE

function full_sentence() {
    var part_1 = "The rain ";
    var part_2 = "in Spain ";
    var part_3 = "falls mostly ";
    var part_4 = "on the plain.";
    // HERE IS THE STRING CREATED FROM THE NUMBER TO BE CONCATENATED
    var part_5 =XX.toString();
    var Whole_sentence = part_1.concat(part_2, part_3, part_4,part_5);
    document.getElementById("OUTPUTt2").innerHTML = Whole_sentence;

}

//*********************************************************
// SLICE "GRASS IS GREENER" FROM THE STRING

function numSLICE() {

    var data = "The grass is greener on the other side of the hill.";

    var part = data.slice(4, 20);

    document.getElementById("OUTPUTt3").innerHTML = part;
  
}