function map_init() {
    let map = new OpenLayers.Map("map", {
        controls: [
            new OpenLayers.Control.Navigation(),
            new OpenLayers.Control.PanZoomBar(),
            // new OpenLayers.Control.Attribution(),
            // new OpenLayers.Control.LayerSwitcher({'ascending':false}),
            new OpenLayers.Control.ScaleLine(),
            new OpenLayers.Control.KeyboardDefaults()
        ]
    });
    let OSM = new OpenLayers.Layer.OSM("OpenStreetMap");
    let lab = new OpenLayers.LonLat(37.579070, 55.698819).transform(
        new OpenLayers.Projection("EPSG:4326"),
        new OpenLayers.Projection("EPSG:900913")
    );
    let markers = new OpenLayers.Layer.Markers("Markers");
    markers.addMarker(new OpenLayers.Marker(lab));
    map.addLayers([OSM, markers]);
    map.setCenter(lab, 16);
}

(function($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            let target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top - 54)
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });
    
    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function() {
        $('.navbar-collapse').collapse('hide');
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#mainNav",
        offset: 56
    });

    // Collapse Navbar
    let navbarCollapse = () => {
        if (($("#mainNav").offset().top < 50) && ($("#mainNav").width() > 1200)) {
            $("#mainNav").removeClass("navbar-shrink");
        } else {
            $("#mainNav").addClass("navbar-shrink");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);

})(jQuery); // End of use strict
