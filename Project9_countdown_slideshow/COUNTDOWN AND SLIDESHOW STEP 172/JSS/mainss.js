// TIMER CODE //

function countdown() {
    var seconds = document.getElementById("seconds").value;

    function tick() {
        seconds = seconds - 1;
        timer.innerHTML = seconds;

        var time = setTimeout(tick, 1000);
        if (seconds == -1) {
            alert("Time is up! ");
            clearTimeout(time);
            timer.innerHTML = "";
        }
    }
    tick();
}

// SET VARIABLE
let slideIndex = 1;
showSlides(slideIndex);

// MOVE CONTROLS

function plusSlides(n) {
    showSlides(slideIndex += n);
}

// THUMBNAILS
function currentSlide(n) {
    showSlides(slideIndex = n);
}
// SLIDE FUNCTIONS
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("MySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 };
    
    if (n < 1) { slideIndex = slides.length }

    for (i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    
  for (i = 0; i < dots.length; i++){
  dots[i].className = dots[i].className.replace(" active", "");
        
  }
    slides[slideIndex - 1].style.display = "block";

    dots[slideIndex - 1].className += "active";
}



