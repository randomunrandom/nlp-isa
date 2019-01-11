(function($) {
  "use strict"; // Start of use strict

  let data_list = [];
  let table;
  $.getJSON( "../assets/data/projects.json", function(data_dict) {
    Object.keys(data_dict["data"]).forEach(function(key) {
      let new_dict = data_dict['data'][key];
      new_dict['info'] = "<img src='" + new_dict['icon'] + "' alt='" + new_dict['name'] + "'> " + new_dict['name'];
      new_dict['id'] = key;
      new_dict['link'] = "<a class='btn btn-sm' href='"
        + window.location.href.replace("projects", "project") + "?project_id=" + key
        + "'>Страница проекта</a>";
      data_list.push(new_dict);
    } );
    table = $('#main_table').DataTable( {
      language: {
        // url: "../assets/data/DT_Russian_support.json"
        url: "//cdn.datatables.net/plug-ins/1.10.19/i18n/Russian.json"
      },
      dom:
        "<'row' <'col-sm-11'tr> >" +
        "<'row'<'col-sm-12 col-md-5'><'col-sm-12 col-md-7'p>>",
      data: data_list,
      pageLength: 25,
      columns: [
        {"data": "info"},
        {"data": "short_description"},
        {"data": "link", "width": "0"}
      ]
    } );
  } );

  $('#search').on( 'keyup', function () {
    table.search( this.value ).draw();
  } );

})(jQuery); // End of use strict
