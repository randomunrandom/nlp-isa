(function($) {
  "use strict";
  let project_id;
  const href_list = window.location.href.split('/');
  project_id = href_list[href_list.length - 1];
  console.log(project_id);
  let lang = window.location.href.indexOf('/en/') >= 0 ? 'en' : 'ru';

  axios.get('../../assets/' + lang + '/data/projects.json')
    .then((response) => {
      if (!(project_id in response['data'])) {
        window.location.href = '/' + lang + '/404';
      }
      let data = response['data'][project_id];
      $('#name').html('<h4>' + data['name'] + '</h4>');
      $('#date').html('<p class="text-justify">Дата начала: ' + data['year'] + '</p>');
      let replace_params = ['short_description'];
      let str_params = ['description'];
      let list_params = ['demo', 'datasets', 'publications'];
      replace_params.forEach((key) => {
        data = response['data'][project_id][key];
        console.log(data);
        $('#' + key).html('<div class="container"><p class="text-justify">' + data + '</p></div>');
      });
      str_params.forEach((key) => {
        data = response['data'][project_id][key];
        if (data.length > 0) {
          $('#' + key).append('<div class="container"><p class="text-justify">' + data + '</p></div>');
        }
        else {
          $('#' + key).hide();
        }
      });
      list_params.forEach((key) => {
        data = response['data'][project_id][key];
        if (data.length === 1) {
          $('#' + key).append('<div class="container"><p>' + data + '</p></div>');
        }
        else if (data.length > 1) {
          let selected = $('#' + key);
          selected.append('<ul>');
          selected = selected.find('ul');
          data.forEach((key_2) => {
            selected.append('<li>' + key_2 + '</li>');
          } );
        }
        else {
          $('#' + key).hide();
        }
      });

    })
    .catch((error) => {
      console.log(error);
      // window.location.href = window.location.href.replace('project', '404');
    });

})(jQuery);
