// THIS IS STEP 151 //

function myFunction() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "Good Morning";

    }
    else if (Time >= 12 == Time < 18) {
        Reply = "Good Afternoon";
    }
    else {
        Reply = "Good Evening";
    }

    document.getElementById("OUTPUT").innerHTML = Reply;
    
        
   
        





}