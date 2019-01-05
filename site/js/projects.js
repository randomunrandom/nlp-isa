(function($) {
  "use strict"; // Start of use strict

  $('#main_table').DataTable( {
    "ajax": "../assets/data/projects.json",
    "columns": [
      {"data": "name"},
      {"data": "icon"},
      {"data": "short_description"}
    ]
  } );

})(jQuery); // End of use strict

