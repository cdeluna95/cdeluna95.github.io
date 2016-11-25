/*
* @author: Christan de Luna
*/

/* Scroll page function */
$(function() {
  $('a[href*="#"]:not([href="#myCarousel"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 500);
        return false;
      }
    }
  });
});

/* Navbar active class function */
$(document).ready(function() {
  $('.navbar a').on("click", function() {
    $(this).parent().siblings().find('a').removeClass('selected');
    $(this).addClass('selected');
  });
});

/* Hand-up removes selected class */
$(document).ready(function() {
  $('.contact-up a').on("click", function() {
    $('.navbar a').removeClass('selected');
  });
});