(function($) {
  "use strict"; // Start of use strict

  // smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      let target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({scrollTop: (target.offset().top - 54)}, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // closes responsive menu when a scroll trigger link is clicked
  $(".js-scroll-trigger").click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // activate scrollspy to add active class to navbar items on scroll
  $("body").scrollspy({
    target: "#mainNav",
    offset: 56
  });

  // collapse Navbar
  var navbarCollapse = function() {
    if (($("#mainNav").offset().top < 50) && ($("#mainNav").width() > 1200)) {
      $("#mainNav").removeClass("navbar-shrink");
    } else {
      $("#mainNav").addClass("navbar-shrink");
    }
  };
  // collapse now if page is not at top
  navbarCollapse();

  // collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

})(jQuery); // End of use strict
