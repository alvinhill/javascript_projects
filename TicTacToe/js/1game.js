document.write("test");

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
            select.style.backgroundImage = <link href="./images/x.png"></link>;

        } else
            if (acivePlayer === "O") {
                // if active player === x the the o.png is placed in the square
                select.style.backgroundImage = <link href="./images/o.png"></link>;
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
            acivePlayer = "X";
            // change the active player to X
            acivePlayer = "X";
        }
// this function plays the placement sound
        Audio(".media/place.mp3");
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