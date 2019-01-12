let map_init = function() {
  let map = new OpenLayers.Map("map", {
    controls: [
      new OpenLayers.Control.Navigation(),
      new OpenLayers.Control.PanZoomBar(),
      // new OpenLayers.Control.Attribution(),
      // new OpenLayers.Control.LayerSwitcher({'ascending':false}),
      new OpenLayers.Control.ScaleLine(),
      new OpenLayers.Control.KeyboardDefaults()
    ] });
  let OSM = new OpenLayers.Layer.OSM("OpenStreetMap");
  let lab = new OpenLayers.LonLat(37.579070, 55.698819).transform(
    new OpenLayers.Projection("EPSG:4326"),
    new OpenLayers.Projection("EPSG:900913")
  );
  let markers = new OpenLayers.Layer.Markers("Markers");
  markers.addMarker(new OpenLayers.Marker(lab));
  map.addLayers([OSM, markers]);
  map.setCenter(lab, 16);
};

(function($) {
  "use strict"; // Start of use strict

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

  // load and display map
  map_init();

})(jQuery); // End of use strict
