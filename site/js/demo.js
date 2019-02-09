(function($) {
  "use strict";
  let project_id;
  const href_list = window.location.href.split('/');
  project_id = href_list[href_list.length - 1];
  console.log(project_id);
  let lang = window.location.href.indexOf('/en/') >= 0 ? 'en' : 'ru';

  axios.get('../../assets/' + lang + '/data/demos.json')
    .then((response) => {
      // console.log(response);
      if (!(project_id in response['data'])) {
        window.location.href = window.location.href.replace('demo', 'error');
      }
      if (response['data'][project_id]['link'] === null) {
        window.location.href = window.location.href.replace('/demos', '/demo/') + project_id;
      }
      let params = ['name', 'short_description', 'description', 'year', 'link'];
      params.forEach((key) => {
        let data;
        if (key === 'link') {
          response['data'][project_id]['link'] = '<a class="btn btn-md bg-warning" href="' + response['data'][project_id]['link']
            + '">Страница демо инструмента</a>';
        }
        data = response['data'][project_id][key] || '';
        // console.log(data);
         if (data.length > 0) {
           $('#' + key + ' div:last-child').html(data);
        } else {
          $('#' + key).hide();
        }
      });
    })
    .catch((error) => {
      // console.log(error);
      window.location.href = window.location.href.replace('demo', 'error');
    });

})(jQuery);
