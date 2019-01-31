(function($) {
  "use strict";

  // collapse Navbar
  let navbarCollapse = function() {
    let selector = $("#mainNav");
    if ((selector.offset().top < 50) && (selector.width() > 1200)) {
      selector.removeClass("navbar-shrink");
    } else {
      selector.addClass("navbar-shrink");
    }
  };
  // collapse now if page is not at top
  navbarCollapse();

  // collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

})(jQuery);
