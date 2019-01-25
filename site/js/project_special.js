(function($) {
  "use strict";
  let project_id;
  const href_list = window.location.href.split('/');
  project_id = href_list[href_list.length - 1];

  axios.get('../../assets/data/projects.json')
    .then(function (response) {
      let lang = window.location.href.indexOf('en') >= 0 ? 'en' : 'ru';
      let data;
      let str_params = ['name', 'description'];
      let list_params = ['demo', 'datasets', 'publications'];
      str_params.forEach(function(key) {
        data = response['data']['data_' + lang][project_id][key];
        if (data.length > 0) {
          $('#' + key).append('<div class="container"><p>' + data + '</p></div>');
        }
        else {
          $('#' + key).hide();
        }
      });
      list_params.forEach(function(key) {
        data = response['data']['data_' + lang][project_id][key];
        if (data.length === 1) {
          $('#' + key).append('<div class="container"><p>' + data + '</p></div>');
        }
        else if (data.length > 1) {
          let selected = $('#' + key);
          selected.append('<ul>');
          selected = selected.find('ul');
          data.forEach( function(key_2) {
            selected.append('<li>' + key_2 + '</li>');
          } );
        }
        else {
          $('#' + key).hide();
        }
      });

    })
    .catch(function (error) {
      // window.location.href = window.location.href.replace('project', '404');
    });

})(jQuery);
