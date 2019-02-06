(function($) {
  "use strict";
  let project_id;
  const href_list = window.location.href.split('/');
  project_id = href_list[href_list.length - 1];
  console.log(project_id);
  let lang = window.location.href.indexOf('/en/') >= 0 ? 'en' : 'ru';

  axios.get('../../assets/' + lang + '/data/projects.json')
    .then((response) => {
      // console.log(response);
      if (!(project_id in response['data'])) {
        window.location.href = '/' + lang + '/404';
      }
      let params = ['name', 'year', 'short_description', 'description', 'demos', 'datasets', 'publications', 'footer'];
      params.forEach((key) => {
        // response['data'][project_id][key] = response['data'][project_id][key] || 0;
        let data = response['data'][project_id][key] || '';
        // console.log(data);
        if(data.length > 0) {
          if(key === 'year') {
            $('#' + key + ' div:last-child').html(' ' + data);
            return;
          }
          $('#' + key + ' div:last-child').html(data);
        } else {
          $('#' + key).hide();
        }
      });
    })
    .catch((error) => {
      console.log(error);
      // window.location.href = window.location.href.replace('project', '404');
    });

})(jQuery);
