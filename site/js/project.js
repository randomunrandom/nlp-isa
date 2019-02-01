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
      let data;
      let params = ['name', 'short_description', 'description', 'demos', 'datasets', 'publications'];
      let to_append = ['year'];
      params.forEach((key) => {
        data = response['data'][project_id][key];
        // console.log(data);
        if (data.length > 0) {
          if(key === 'name') {
            $('#' + key + ' h3').html(data);
          }
          else {
            $('#' + key + ' p').html(data);
          }
        }
        else {
          $('#' + key).hide();
        }
      });
      to_append.forEach((key) => {
        data = response['data'][project_id][key];
        if (data.length > 0) {
          $('#' + key + ' p').append(data);
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
