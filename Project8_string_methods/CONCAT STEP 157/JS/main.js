// THIS IS STEP 157 //

function full_sentence() {
    var part_1 = "The rain ";
    var part_2 = "in Spain ";
    var part_3 = "falls mostly ";
    var part_4 = "on the plain.";
    var Whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("concat").innerHTML = Whole_sentence;
    
}