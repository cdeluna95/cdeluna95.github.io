"use strict";

/**
 * Toggle different navigation bar events
 */
$(function() {
  var burger = $(".nav-burger"),
      sidebar = $(".nav-sidebar"),
      li = $(".nav-li"),
      main = $("#header, #projects, #gallery, #about, #contact, #footer");
      
  burger.on("click", function(e) {
    e.preventDefault();
    burger.toggleClass("shift slide");
    sidebar.toggleClass("slide");
    li.toggleClass("accelerate");
    main.toggleClass("darken freeze");
  });
});

/**
 * Change color and appearance of navigation icons after scrolling
 */
$(function() {
  $(window).scroll(function() {
    var scrollPos = $(window).scrollTop(),
        heightPos = $(window).height(),
        bar = $(".nav-bar"),
        arrow = $(".nav-arrow");
        
    // Change color
    if(scrollPos > (heightPos * 0.95)) {
      bar.addClass("blacken");
    }
    
    else {
      bar.removeClass("blacken");
    }
    
    // Change appearance
    if(scrollPos > (heightPos * 3.45)) {
      arrow.addClass("appear");
    }
    
    else {
      arrow.removeClass("appear");
    }
  });
});

/**
 * Scroll smoothly after clicking navigation links
 */
$(function() {
  $('a[href^="#"]').on("click", function(e) {
    var target = $($(this).attr("href")),
        html = $("html, body");
        
    if(target.length) {
      e.preventDefault();
      html.animate({
        scrollTop: target.offset().top
      }, 500);
    }
  });
});
