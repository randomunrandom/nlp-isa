(function($) {
  "use strict"; // Start of use strict

  let link;

  // '<div class="container" id="name">\n\t<h1>Название:</h1>\n</div>\n" +
  // '<div class="container" id="description">\n\t<h2>Описание:</h2>\n</div>\n' +
  // '<div class="container" id="link">\n\t<h2>страница проекта:</h2>\n</div>'
  $.getJSON( "../assets/data/projects.json", function(data_dict) {
    Object.keys(data_dict["data"]).forEach(function(key) {
      link = '<a class="btn btn-sm" href="' +
        window.location.href.replace("projects", "project") + '?project_id=' + key +
        '>Страница проекта</a>';
      console.log(link);
    } );
  } );

  $('#search').on( 'keyup', function () {
    table.search( this.value ).draw();
  } );

})(jQuery); // End of use strict
