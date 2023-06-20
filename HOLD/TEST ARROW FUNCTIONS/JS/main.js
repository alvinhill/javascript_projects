// THIS IS STEP 274 //

function Vote_Function() {
    var AGE, Can_Vote;
    AGE = document.getElementById("AGE").value;

    Can_Vote = (AGE < 18) ? "You are too young" : "You are old enough";
    document.getElementById("Vote").innerHTML = Can_Vote + " to vote.";
}

