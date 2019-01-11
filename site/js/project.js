(function($) {
  "use strict"; // Start of use strict

  const url_params = new URLSearchParams(window.location.search);
  const project_id = url_params.get('project_id');
  console.log(project_id);

  $.getJSON( "../assets/data/projects.json", function(data_dict) {
    console.log(data_dict['data'][project_id]);
    let str_params = ['name', 'description'];
    let list_params = ['demo', 'datasets', 'publications'];
    let selected;
    str_params.forEach(function(key) {
      selected = $('#' + key);
      selected.append('<div class="container">');
      selected = selected.find('div');
      if (data_dict['data'][project_id][key].length > 0) {
        selected.append('<p>');
        selected = selected.find('p').append(data_dict['data'][project_id][key]);
      }
      else {
        $('#' + key).hide();
      }
    });
    list_params.forEach(function(key) {
      selected = $('#' + key);
      if (data_dict['data'][project_id][key].length === 1) {
        selected.append('<div class="container">');
        selected = selected.find('div');
        selected.append('<p>');
        selected = selected.find('p').append(data_dict['data'][project_id][key]);
      }
      else if (data_dict['data'][project_id][key].length > 1) {
        selected.append('<ul>');
        selected = selected.find('ul');
        data_dict['data'][project_id][key].forEach( function(key_2) {
          selected.append('<li>' + key_2 + '</li>');
        } );
      }
      else {
        $('#' + key).hide();
      }
    });

    } );

})(jQuery); // End of use strict
