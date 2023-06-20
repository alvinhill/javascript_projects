// THIS IS STEP 134 //

class Guitar {
    constructor(Brand, Model) {
        this.Guitar_Brand = Brand;
        this.Guitar_Model = Model;
        
    }
}

var Paul = new Guitar("Rick ", "4001 ");
var George = new Guitar("Gibson ", "Les Paul ");


function myFunction() {
  //  document.getElementById("New_and_This").innerHTML = "Paul plays a "
  document.getElementById("New_and_This").innerHTML = "Paul plays a " + Paul.Guitar_Brand + Paul.Guitar_Model;
}