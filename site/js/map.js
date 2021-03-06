let map_init = function() {
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
  let lab = new OpenLayers.LonLat(37.57907, 55.698819).transform(
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

  // load and display map
  map_init();
})(jQuery); // End of use strict
