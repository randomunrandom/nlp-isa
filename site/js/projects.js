(function($) {
  "use strict"; // Start of use strict

  let data_list = [];
  let table;
  $.getJSON( "../assets/data/projects.json", function(data_dict) {
    Object.keys(data_dict["data"]).forEach(function(key) {
      let new_dict = data_dict['data'][key];
      new_dict['id'] = key;
      data_list.push(new_dict);
    } );
    table = $('#main_table').DataTable( {
      dom:
        "<'row' <'col-sm-11'tr> >" +
        "<'row'<'col-sm-12 col-md-5'><'col-sm-12 col-md-7'p>>",
      data: data_list,
      pageLength: 50,
      columns: [
        {"data": "icon"},
        {"data": "name"},
        {"data": "short_description"}
      ]
    } );
  } );

  $('#search').on( 'keyup', function () {
    table.search( this.value ).draw();
  } );

})(jQuery); // End of use strict

