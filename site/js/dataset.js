(function($) {
  "use strict";
  const href_list = window.location.href.split('/');
  let project_id = href_list[href_list.length - 1];
  // console.log(project_id);
  let lang = window.location.href.indexOf('/en/') >= 0 ? 'en' : 'ru';

  axios.get('../../assets/' + lang + '/data/datasets.json')
    .then((response) => {
      // console.log(response);
      if (!(project_id in response['data'])) {
        window.location.href = window.location.href.replace('dataset', 'error');
      }
      let params = ['name', 'short_description', 'description', 'year', 'link', 'footer'];
      params.forEach((key) => {
        // response['data'][project_id][key] = response['data'][project_id][key] || 0;
        let data = response['data'][project_id][key] || '';
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
      window.location.href = window.location.href.replace('dataset', 'error');
    });

})(jQuery);
