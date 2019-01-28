(function($) {
  "use strict";
  let project_id;
  const href_list = window.location.href.split('/');
  project_id = href_list[href_list.length - 1];
  console.log(project_id);
  let lang = window.location.href.indexOf('/en/') >= 0 ? 'en' : 'ru';

  axios.get('../../assets/' + lang + '/data/demos.json')
    .then((response) => {
      console.log(response);
      if (!(project_id in response['data'])) {
        window.location.href = '/' + lang + '/404';
      }
      let data = response['data'][project_id];
      $('#name').html('<h4>' + data['name'] + '</h4>');
      let replace_params = ['short_description'];
      let str_params = ['description'];
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
      data = response['data'][project_id]['link'];
      if(data.length > 0) {
        $('#link').append('<div class="container"><a class="btn-link" href="' + data + '">' + data +'</a></div>');
      }
      else {
        $('#' + link).hide();
      }
    })
    .catch((error) => {
      console.log(error);
      // window.location.href = window.location.href.replace('project', '404');
    });

})(jQuery);
