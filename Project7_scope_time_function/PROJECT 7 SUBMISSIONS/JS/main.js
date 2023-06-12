// THIS IS STEP 152 //
// *************** IF THEN ELSE FUNCTION *********************************
function myFunction() {
// ASSIGN VARIBLE 
    let data1 = document.getElementById("textInput1").value;
 
    // CHECKS TO SEE IF "data1" IS LESS THAN 8
    if (data1 < 8) {
       document.getElementById("OUTPUT").innerHTML = "That number is less than 8";
    }
// CHECKS TO SEE IF "data1" IS GREATER THAN 8
    else if (data1 > 8) {
        document.getElementById("OUTPUT").innerHTML = "That number is greater that 8";
    }
    // THE DEFALUT POSITION IS "data1" IS EQUAL TO 8    
    else {
        document.getElementById("OUTPUT").innerHTML = "That number is 8";
    }
}

// *************** IF THEN ELSE FUNCTION *********************************

function timeFunction() {
    // SET UP VARIABLES
    var Time = new Date().getHours();
    var Reply;
    // CHECKS TO SEE IF THE HOUR IS LESS THAN 12 BUT GREATER THAN 0

    if (Time < 12 == Time > 0) {
        Reply = "Good Morning";

    }
// CHECKS TO SEE IF THE HOUR IS GREATER THAN OR EQUAL TO 12 BUT LESS THAN 18
    
    else if (Time >= 12 == Time < 18) {
        Reply = "Good Afternoon";
    }
// THE DEFAULT POSITION IS GREATER THAN 18        
    else {
        Reply = "Good Evening";
    }

    document.getElementById("OUTPUT1").innerHTML = Reply;

}
// *************** GLOBAL AND LOCALVARIBLES *********************************

// THIS FUNCTION USES A LOCAL VARIABLE
function ADD1() {
    var x = 5;
    console.log(22 + x);
}
// x IS LOCAL TO THE FIRST FUNCTION AND CREATES AN ERROR IN THIS FUNCTION
// IT GIVES ON ERROR IN CONSOLE AT "ADD2"
// THIS CAN BE FIXED BY PROVIDING A GOLBAL OR LOCAL VARIBLE 
function ADD2() {
    console.log(15 + x);
}

ADD1();
ADD2();
