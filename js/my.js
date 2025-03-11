$( document ).ready(function() {
    new WOW().init();
});

// navbar toggle
$(function() {
    $('#ChangeToggle').click(function() {
        $('#navbar-hamburger').toggleClass('show');
        $('#navbar-close').toggleClass('show');  
    });
});

$(function() {
  var owl = $("#thumbnail-slider");
  owl.owlCarousel({
    items: 3,
    margin: 15,
    autoplay: false,
    loop: false,
    nav: false,
    navText:["<div class='fa fa-angle-left'></div>","<div class='fa fa-angle-right'></div>"],
    dots: false,
    responsiveClass:true,
    responsive:{
        0:{
            items: 1,
        },
        768:{
            nav: true,
            items: 2,
        },
        991:{
            items: 3,
        },
    }
  });
});

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slides");
  var dots = document.getElementsByClassName("slide-thumbnail");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  console.log(slideIndex);

  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
      // slides[i].style.display = "inline";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  // slides[slideIndex-1].style.display = "inline";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}