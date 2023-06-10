// CREATE FUNCTION //
// ADD FUNCTION //
function addfunct() {
    // ASSIGN VARIBLE //
    var first = 44;
    var Second = 55;
    total = first + Second;

    // SEND THE OUTPUT TO THE BUTTON AND THE PARAGRAPH TAG //
    document.getElementById("Math").innerHTML = "ADD 44 + 55 = " + total;

}
// *************************************************************************************
// SUBTRACT FUNCTION//
// CREATE FUNCTIOoN //
function subfunct() {
    // ASSIGN VARIBLE //
    var numbers = 100 - 51;

 // SEND THE OUTPUT TO THE BUTTON AND THE PARAGRAPH TAG //
    document.getElementById("Math").innerHTML = "SUBTRACT 100 - 51 = " + numbers;

}
// *************************************************************************************
// MULIPLY AND DIVIDE //
// CREATE FUNCTION //
function multfunct() {
    // ASSIGN VARIBLE //
    var numbers = 7 * 7;

 // SEND THE OUTPUT TO THE BUTTON AND THE PARAGRAPH TAG //
    document.getElementById("Math").innerHTML = "MULTIPLY 7 x 7 = " + numbers;

}
// *************************************************************************************
// CREATE FUNCTION //
// DIVIDE  //
function divfunct() {
    // ASSIGN VARIBLE //
    var numbers1 = 72 / 8;

 // SEND THE OUTPUT TO THE BUTTON AND THE PARAGRAPH TAG //
    document.getElementById("Math").innerHTML = "DIVIDE 72 / 8 = " + numbers1;

}
// *************************************************************************************
// MODULUS //
// CREATE FUNCTION //
function modfunct() {
    // ASSIGN VARIBLE //
    var X = 31 % 5;
    
 // SEND THE OUTPUT TO THE BUTTON AND THE PARAGRAPH TAG //
    document.getElementById("Math").innerHTML = "MODULUS 31 % 5 = "+X;
}
// *************************************************************************************
// INCREMENT //
// CREATE FUNCTION //
function incfunct() {
    // ASSIGN VARIBLE //
    var first = 100;
    first++;

 // SEND THE OUTPUT TO THE BUTTON AND THE PARAGRAPH TAG //
    document.getElementById("Math").innerHTML = "INCREMENT 100 BY 1= "+first;
}
// *************************************************************************************
// DEINCREMENT //
// CREATE FUNCTION //
function decfunct() {
    // ASSIGN VARIBLE //
    var first = 100;
    first--;

    // SEND THE OUTPUT TO THE BUTTON AND THE PARAGRAPH TAG //
    document.getElementById("Math").innerHTML = "DEINCREMENT 100 BY 1= "+ first;
}

// *************************************************************************************
// RANDOM //
// CREATE FUNCTION //
function RNUM() {
  // ASSIGN VARIBLE //
    x = (Math.random() + 1);
    
 // SEND THE OUTPUT TO THE BUTTON AND THE PARAGRAPH TAG //
    document.getElementById("Math").innerHTML="RANDOM "+  x;
}

// *************************************************************************************
