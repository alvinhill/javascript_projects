//document.write("DDDDxxxDXXD");
//document.write("test");

// step 269 + 277
// variable for active player 
let acivePlayer = "X";
// this array stores the array of moves
// to determine win conditions.
let selectedSquares = [];
// this function is to place an X or O in a square
function placeXOrO(squareNumber) {
    // this condition makes sure the square is not already used
    // the .some() is used to check of the array
    // to see if it contains the square NUMBER clicked on.
    if (!selectedSquares.some(element => element.incluedes(squareNumber))) {
        // this variable gets the HTML element id that was clicked
        let select = document.getElementById(squareNumber);
        // this condition ched who's turn it is.
        if (acivePlayer === "X") {
            // if active player === x the the x.png is placed in the square
  
            select.style.backgroundImage  = ("images/x.png");

        } else
            if (acivePlayer === "O") {
                // if active player === x the the o.png is placed in the square
             
                select.style.backgroundImage = ("images/O.png");
            }
        // squareNumber and activePlayer are concatenated together and added to array
        selectedSquares.push(squareNumber + acivePlayer);
        // this checks for a win condition
        checkWinConditions();
        // this condition is for changeing the active player
        if (acivePlayer === "X") {
            acivePlayer = "O";
            // if active player is anything other than X
        } else {
           
            // change the active player to X
            acivePlayer = "X";
        }
        // this function plays the placement sound
      //******** */  Audio(".media/place.mp3");
      //   Audio("./media/place.mp3");
        // this conditon checks to see if it is the computer's turn
        if (acivePlayer === "O") {
            disableClick();
            // this function waits 1 second before the computer places an image and enables click.
            setTimeout(function () { comuptersTurn() }, 1000);
        }
        // returning true if needed for our computers turn() function to work
        return true;
    }

    // this function gets a randome squaare selexted by the computer
    function comuptersTurn() {
        // this boolean is needed for our while loop
        let success = true;
        // this variable stores a random number 0-8
        let pickASquare;
        // this condition lets the while loop to keep trying if a square is already selected
        while (!success) {
            // a random number between 0 and 8 is selected
            pickASquare = String(Math.floor(Math.random() * 9));
            // if the random number evaluated is true, the square is avalable
            if (placeXOrO(pickASquare)) {
                // this line calls the function
                placeXOrO(pickASquare);
                // this changes the boolean and ends the loop
                success = true;
            }
        }
    }
}
function checkWinConditions() {
    // x  0, 1 ,2 condition
    if (arrayIncludes("0X", "1X", "2X")) { drawLine(50, 100, 558, 100) }
    // x  3, 4 ,5 condition
   else if (arrayIncludes("3X", "4X", "5X")) { drawLine(50, 304, 558, 304) }
    // x  6, 7 ,8 condition
    else if (arrayIncludes("6X", "7X", "8X")) { drawLine(50, 508, 558, 508) }
    // x  1, 4, 7 condition
    else if (arrayIncludes("1X", "4X", "7X")) { drawLine(304, 50, 304, 558) }
    // x  2, 5 , 8 condition
    else if (arrayIncludes("2X", "5X", "8X")) { drawLine(508, 50, 508, 558) }
    // x  6, 4, 2 condition
    else if (arrayIncludes("6X", "4X", "2X")) { drawLine(100, 508, 510, 90) }
    // x  0, 4, 8 condition
    else if (arrayIncludes("0X", "4X", "8X")) { drawLine(100, 100, 520, 520) }
        
        
    // O  0, 1 ,2 condition
    else if (arrayIncludes("0O", "1O", "2O")) { drawLine(50, 100, 558, 100) }

    // O  3, 4 ,5 condition
    else if (arrayIncludes("3O", "4O", "5O")) { drawLine(50, 304, 558, 304) }
        
    // O  6, 7 ,8 condition
    else if (arrayIncludes("6O", "7O", "8O")) { drawLine(50, 508, 558, 508) }
        
    // O  0, 3, 6condition
    else if (arrayIncludes("0O", "3O", "6O")) { drawLine(100, 50, 100, 558) }
        
    // O  0, 3 , 6 condition
    else if (arrayIncludes("0O", "3O", "6O")) { drawLine(100, 50, 100, 558) }
        
    // O 1 4, 7 condition
    else if (arrayIncludes("1O", "4O", "7O")) { drawLine(100, 508, 510, 90) }
        
    // O 2, 5, 8 condition
    else if (arrayIncludes("2O", "5O", "5O")) { drawLine(508, 50, 508, 558) }   
        
    // O 6 4, 2 condition
    else if (arrayIncludes("6O", "4O", "2O")) { drawLine(100, 508, 510, 90) }

    // O 0 4, 8 condition
    else if (arrayIncludes("0O", "4O", "2O")) { drawLine(100, 508, 510, 90) }
// This condition checks for a tie.  If no above conditons are met and
    // nine squares are selected this code executes.
    else if (selectedSquares.length >= 9) {
        // sound
        Audio("./media/tie.mp3");
        // sets a .3 second timer before the game reset is called
        setTimeout(function () { resetGame(); }, 500);
        
    }

// this function checks array for win condition
    function arrayIncludes(squareA, squareB, squareC) {
        // check for three in a row
        const a = selectedSquares.includes(squareA);
        const b = selectedSquares.includes(squareB);
        const c = selectedSquares.includes(squareC);

        if (a === true && b === true && c === true) { return true; }

    }

}