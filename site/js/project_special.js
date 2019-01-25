(function($) {
  "use strict";
  let project_id;
  // if (window.location.href.indexOf('?') >= 0) {
  //   const url_params = new URLSearchParams(window.location.search);
  //   project_id = url_params.get('project_id');
  // }
  // else {
    const href_list = window.location.href.split('/');
    project_id = href_list[href_list.length - 1];
  // }
  // console.log(project_id);
  axios.get('../../assets/data/projects.json')
    .then(function (response) {
      // console.log(response);
      let lang = window.location.href.indexOf('en') >= 0 ? 'en' : 'ru';
      let data;
      let str_params = ['name', 'description'];
      let list_params = ['demo', 'datasets', 'publications'];
      str_params.forEach(function(key) {
        data = response['data']['data_' + lang][project_id][key];
        // console.log(data);
        if (data.length > 0) {
          $('#' + key).append('<div class="container"><p>' + data + '</p></div>');
        }
        else {
          $('#' + key).hide();
        }
      });
      list_params.forEach(function(key) {
        data = response['data']['data_' + lang][project_id][key];
        // console.log(data);
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
      // console.log(error);
      // window.location.href = window.location.href.replace('project', '404');
    });

})(jQuery);
