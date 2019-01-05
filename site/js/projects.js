(function($) {
  "use strict"; // Start of use strict

  let data_list = [];
  $.getJSON( "../assets/data/projects.json", function(data_dict) {
    Object.keys(data_dict["data"]).forEach(function(key) {
      let new_dict = data_dict['data'][key];
      new_dict['id'] = key;
      data_list.push(new_dict);
    } );
    $('#main_table').DataTable( {
      dom: //"tpr",
        // "<'col-sm-12 col-md-6'f>" +
        "<'col-sm-12'tr>" +
        "<'col-sm-12 col-md-6'p>",
      data: data_list,
      columns: [
        {"data": "icon"},
        {"data": "name"},
        {"data": "short_description"}
      ]
    } );
  } );

})(jQuery); // End of use strict

